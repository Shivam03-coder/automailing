import { db } from "@/server/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const { userId } = await auth();
    console.log("🚀 ~ GET ~ userId:", userId);

    if (!userId) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const AuthenticatedUser = await db.user.findUnique({
      where: {
        id: userId,
      },
    });

    return NextResponse.json(
      { success: true, data: AuthenticatedUser },
      { status: 200 },
    );
  } catch (error) {
    console.log("🚀 ~ GET ~ error:", error)
    return NextResponse.json({ error: "UNABLE_TO_FIND_USER" }, { status: 400 });
  }
};
