import { Account } from "@/helpers";
import { db } from "@/server/db";
import { SyncToDataBase } from "@/utils/database-sync";
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

    const account = new Account(UserAccount.token);

    const response = await account.primaryEmailSyncFunc();

    if (!response) {
      return NextResponse.json(
        { error: "FAILED TO PERFORM SYNC" },
        { status: 402 },
      );
    }

    const { deltaToken, recordEmails } = response;

    await SyncToDataBase(recordEmails, accountId);

    const updatedAccount = await db.account.update({
      where: {
        token: UserAccount.token,
      },
      data: {
        nextDeltaToken: response.deltaToken,
      },
    });
    console.log("sync complete", deltaToken);
    return NextResponse.json({ success: true, deltaToken }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
};
