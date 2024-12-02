"use client";

import * as React from "react";
import {
  BookOpen,
  Bot,
  Frame,
  Map,
  PieChart,
  SquareTerminal,
} from "lucide-react";
import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { AppFeatures } from "./appfeatures";

const data = {
  user: {
    name: "Shivam Anand",
    email: "shivam850anand@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Inbox",
      icon: <SquareTerminal size={21} />,
    },
    {
      title: "Draft",
      icon: <Bot size={21} />,
    },
    {
      title: "Sent",
      icon: <BookOpen size={21} />,
    },
  ],
  projects: [
    {
      name: "Google Meet",
      url: "#",
      icon: Frame,
    },
    {
      name: "Google Chat",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Chat with Us",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <AppFeatures projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
