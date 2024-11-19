"use server";

import { auth } from "@clerk/nextjs/server";

export const getAurnikoAuthUrl = async (
  serviceType: "Google" | "Office365",
) => {
  const userId = await auth();
  if (!userId) {
    throw new Error("You are Unauthorized");
  }

  const params = new URLSearchParams({
    clientId: process.env.AURINKO_CLIENT_ID as string,
    serviceType,
    scopes: "Mail.Read Mail.ReadWrite Mail.Send Mail.Drafts Mail.All",
    returnUrl: `${process.env.NEXT_PUBLIC_APP_URL}/api/aurinko/callback`,
  });

  return `https://api.aurinko.io/v1/auth/authorize?${params.toString()}`;
};
