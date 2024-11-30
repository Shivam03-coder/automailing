import { UserButton } from "@clerk/nextjs";

function MaildashBoard() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="bg-muted/50 aspect-video rounded-xl bg-red-400" />
        <div className="bg-muted/50 aspect-video rounded-xl bg-blue-500" />
        <div className="bg-muted/50 aspect-video rounded-xl bg-green-300">
          <UserButton />
        </div>
      </div>
      <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl bg-yellow-300 md:min-h-min" />
    </div>
  );
}

export default MaildashBoard;
