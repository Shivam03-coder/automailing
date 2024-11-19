import LinkAccountbtn from "@/components/linkaccountbtn";
import { UserButton } from "@clerk/nextjs";

export default async function Home() {
  return (
    <h1>
      <UserButton />
      <LinkAccountbtn />
    </h1>
  );
}
