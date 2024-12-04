"use client";
import * as React from "react";
import { ChevronsUpDown, Cuboid, Mail, Plus } from "lucide-react";

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";


export function TeamSwitcher() {
  const Router = useRouter();

  return (
    <SidebarMenu>
      <SidebarMenuItem className="space-y-4">
        <SidebarMenuButton
          onClick={() => Router.push("/")}
          size="lg"
          className="bg-primary text-secondary hover:bg-primary"
        >
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg">
            <Cuboid className="!text-secondary" size={28} />
          </div>
          <div className="flex aspect-square size-8 w-full items-center gap-5 rounded-lg text-secondary">
            <h4 className="pl-5">MIRAJ</h4>
          </div>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
