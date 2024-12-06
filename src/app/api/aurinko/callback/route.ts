import { exchangecodeforAccessToken, getAccountDetails } from "@/lib/aurinko";
import { db } from "@/server/db";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { waitUntil } from "@vercel/functions";

export const GET = async (req: NextRequest) => {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "UNAUTHORIZED" }, { status: 401 });
  }
  const params = req.nextUrl.searchParams;
  const status = params.get("status");
  if (status !== "success")
    return NextResponse.json(
      { error: "Account connection failed" },
      { status: 400 },
    );

  const code = params.get("code");
  const token = await exchangecodeforAccessToken(code as string);

  if (!token || !token.accountId || !token.accessToken) {
    throw new Error("Invalid token data.");
  }

  const accountDetails = await getAccountDetails(token.accessToken);

  if (!accountDetails || !accountDetails.email || !accountDetails.name) {
    throw new Error("Invalid account details.");
  }

  const userExists = await db.user.findUnique({ where: { id: userId } });

  if (!userExists) {
    throw new Error(`User with ID ${userId} does not exist.`);
  }

  await db.account.upsert({
    where: { id: token.accountId.toString() },
    create: {
      id: token.accountId.toString(),
      userId,
      token: token.accessToken,
      provider: "Aurinko",
      emailAddress: accountDetails?.email,
      name: accountDetails.name,
    },
    update: {
      token: token.accessToken,
    },
  });

  waitUntil(
    axios
      .post(`${process.env.NEXT_PUBLIC_APP_URL}/api/emailsync`, {
        accountId: token.accountId.toString(),
        userId,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      }),
  );

  return NextResponse.redirect(new URL("/mail", req.url));
};
