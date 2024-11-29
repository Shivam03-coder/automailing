import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return <main className="bg-slate-900 p-2">{children}</main>;
};

export default RootLayout;
