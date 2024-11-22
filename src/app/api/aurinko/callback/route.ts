import { exchangecodeforAccessToken, getAccountDetails } from "@/lib/aurinko";
import { db } from "@/server/db";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { date } from "zod";

export const GET = async (req: NextRequest) => {
  const { userId } = await auth();
  if (!userId)
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  const params = req.nextUrl.searchParams;

  const status = params.get("status");

  if (status !== "success")
    return NextResponse.json(
      { message: "Unable to link your account" },
      { status: 401 },
    );

  const code = params.get("code");

  if (!code)
    return NextResponse.json({ message: "Code is not found" }, { status: 400 });

  const tokens = await exchangecodeforAccessToken(code);

  if (!tokens?.accessToken)
    return NextResponse.json(
      { message: "accessToken is not found" },
      { status: 400 },
    );

  const accountDetails = await getAccountDetails(tokens.accessToken);

  if (!accountDetails)
    return NextResponse.json(
      { message: "accountDeatils is not found" },
      { status: 400 },
    );

  if (
    !tokens.accountId ||
    !tokens.accessToken ||
    !userId ||
    !accountDetails?.email ||
    !accountDetails?.name
  ) {
    throw new Error("Missing required fields");
  }

  await db.account.upsert({
    where: {
      id: tokens.accountId.toString(),
    },
    update: {
      accessToken: tokens.accessToken,
    },
    create: {
      id: tokens.accountId.toString(),
      userId,
      email: accountDetails.email,
      name: accountDetails.name,
      accessToken: tokens.accessToken,
    },
  });

  return NextResponse.redirect(new URL("/mail", req.url), 301);
};
