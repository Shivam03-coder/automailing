import { Account } from "@/helpers";
import { db } from "@/server/db";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const { accountId, userId } = await req.json();

    if (!accountId || !userId) {
      return NextResponse.json(
        { message: "Unauthorized: Missing accountId or userId" },
        { status: 400 },
      );
    }

    const UserAccount = await db.account.findUnique({
      where: {
        id: accountId,
        userId,
      },
    });

    if (!UserAccount) {
      return NextResponse.json(
        { message: "ACCOUNT-NOT-FOUND" },
        { status: 404 },
      );
    }

    const account = new Account(UserAccount.accessToken);

    const response = await account.primaryEmailSyncFunc();

    console.log(response.recordEmails);

    return NextResponse.json(
      { success: true, data: response },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
};