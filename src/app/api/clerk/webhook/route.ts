// =============== /api/clerk/webhook====================

import { db } from "@/server/db";

export const POST = async (req: Request) => {
  const { data } = await req.json();

  if (data) {
    const email = data.email_addresses[0].email_address;
    const firstName = data.first_name;
    const imageUrl = data.image_url;
    const lastName = data.last_name;
    const id = data.id;

    const user = await db.user.create({
      data: {
        id,
        email,
        firstName,
        imageUrl,
        lastName,
      },
    });
    console.log("user created", user);
  }

  return new Response("Webhook recived", { status: 200 });
};
