import { exchangecodeforAccessToken, getAccountDetails } from "@/lib/aurinko";
import { db } from "@/server/db";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { waitUntil } from "@vercel/functions";

export const GET = async (req: NextRequest) => {
  // Authenticate the user with Clerk
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  // Extract query parameters from the request
  const params = req.nextUrl.searchParams;
  const status = params.get("status");

  // Validate `status` and `code` parameters
  if (status !== "success") {
    return NextResponse.json(
      { message: "Unable to link your account. Status is not successful." },
      { status: 400 },
    );
  }

  const code = params.get("code");

  // Exchange the authorization code for access tokens

  const tokens = await exchangecodeforAccessToken(code as string);
  if (!tokens) {
    return NextResponse.json(
      { message: "Failed to get token" },
      { status: 400 },
    );
  }

  // Retrieve account details using the access token
  const accountDetails = await getAccountDetails(tokens.accessToken);
  if (!accountDetails) {
    return NextResponse.json(
      { message: "Account details could not be found." },
      { status: 400 },
    );
  }

  // Extract required fields from the response
  const { accountId, accessToken } = tokens;
  const { email, name } = accountDetails;

  if (!accountId || !accessToken || !userId || !email || !name) {
    throw new Error(
      "Required fields are missing: accountId, accessToken, userId, email, or name.",
    );
  }

  // Upsert account details into the database
  const account = await db.account.upsert({
    where: { id: accountId.toString() },
    update: { accessToken },
    create: {
      id: accountId.toString(),
      userId,
      email,
      name,
      accessToken,
    },
  });
  console.log("🚀 ~ GET ~ account:", account);

  waitUntil(
    axios
      .post(
        `${process.env.NEXT_PUBLIC_APP_URL}/api/aurinko/emailsync`,
        {
          accountId: accountId.toString(),
          userId,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      }),
  );

  return NextResponse.redirect(new URL("/mail-dashboard", req.url), 301);
};
