import React from "react";
import Navs from "./tabs";
import SerachInput from "./search-input";
import EmailCards from "./email-cards";

function Inbox() {
  return (
    <main className="space-y-2 p-3">
      <Navs />
      <SerachInput />
      <section className="flex flex-col gap-2">
        <EmailCards />
      </section>
    </main>
  );
}

export default Inbox;
