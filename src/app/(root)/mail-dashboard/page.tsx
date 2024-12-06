import Inbox from "@/app/_components/_mail-dashboard/inbox";
import LinkAccountbtn from "@/components/linkaccountbtn";
import { UserButton } from "@clerk/nextjs";

function MaildashBoard() {
  return (
    <div className="f flex flex-1 flex-col gap-4 p-2 pt-0 lg:flex-row">
      <div className="min-h-[100vh] flex-1 rounded-xl bg-white md:min-h-min">
        <Inbox />
      </div>
      <div className="min-h-[100vh] flex-1 rounded-xl bg-green-300 md:min-h-min">
        <LinkAccountbtn />
      </div>
    </div>
  );
}

export default MaildashBoard;
