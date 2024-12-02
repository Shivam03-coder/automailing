"use client";

import { ChevronRight, type LucideIcon } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import React from "react";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    icon?: React.ReactNode;
    isActive?: boolean;
  }[];
}) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>
        <h5>Email-Type</h5>
      </SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <section key={item.title} className="group/collapsible">
            <SidebarMenuItem>
              <SidebarMenuButton
                className="hover:bg-paleblue"
                tooltip={item.title}
              >
                <span>{item.icon}</span>
                <span className="text-primary">{item.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </section>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
