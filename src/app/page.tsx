import { UserButton } from "@clerk/nextjs";

export default async function Home() {
  return (
    <h1>
      <UserButton />
    </h1>
  );
}
