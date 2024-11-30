"use client";
import * as React from "react";
import { Cuboid } from "lucide-react";

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useRouter } from "next/navigation";

export function TeamSwitcher() {
  const Router = useRouter();
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          onClick={() => Router.push("/")}
          size="lg"
          className="bg-primary hover:bg-primary"
        >
          <div className="flex aspect-square size-8 w-full items-center gap-5 rounded-lg text-secondary">
            <Cuboid className="text-greatBlue-400" size={33} />
            <h4 className="pl-5">MIRAJ</h4>
          </div>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
