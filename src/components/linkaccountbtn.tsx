"use client";

import { Button } from "./ui/button";
import { getAurnikoAuthUrl } from "@/lib/aurinko";
const LinkAccountbtn = () => {
  const handleLinkingaccount = async () => {
    const url = await getAurnikoAuthUrl("Google");
    console.log("🚀 ~ handleLinkingaccount ~ url:", url);
    window.location.href = url;
  };
  return (
    <div>
      <Button onClick={handleLinkingaccount}>Link account</Button>
    </div>
  );
};

export default LinkAccountbtn;
