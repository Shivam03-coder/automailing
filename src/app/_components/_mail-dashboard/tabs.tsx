"use client";

import React, { useState } from "react";

const Navs = () => {
  const [ActiveTab, setActiveTab] = useState<string>("Recived");

  return (
    <nav className="flex gap-3 mb-3">
      <InboxTabs
        ActiveTab={ActiveTab}
        setActiveTab={setActiveTab}
        label="Recived"
      />
      <InboxTabs
        ActiveTab={ActiveTab}
        setActiveTab={setActiveTab}
        label="Sent"
      />
    </nav>
  );
};

export default Navs;

const InboxTabs = ({
  ActiveTab,
  label,
  setActiveTab,
}: {
  ActiveTab: string;
  label: string;
  setActiveTab: (tab: string) => void;
}) => {
  const isActive = ActiveTab === label;

  return (
    <button
      onClick={() => setActiveTab(label)}
      className={`rounded bg-secondary px-2 py-1 transition-all duration-300 ${isActive ? "bg-blue-300" : ""}`}
    >
      {label}
    </button>
  );
};
