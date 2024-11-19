// ==========/aurinko/callback=============

import { auth } from "@clerk/nextjs/server";

export const GET = async (req: Request) => {
  const { userId } = await auth();
  console.log("🚀 ~ GET ~ userId:", userId)
};
