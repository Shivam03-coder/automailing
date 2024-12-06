"use client";

import {
  BadgeCheck,
  Bell,
  ChevronsUpDown,
  CreditCard,
  LogOut,
  Sparkles,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { UserButton, useUser } from "@clerk/nextjs";
import { GetUserInfo } from "@/lib/clerk/getuserinfo";
import { useEffect, useState } from "react";

export function NavUser() {
  const [user, setUser] = useState<null | {
    emailAddresses: any;
    firstName: string;
  }>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const userInfo = await GetUserInfo();
      if (userInfo) {
        setUser({
          firstName: userInfo.username as string,
          emailAddresses: userInfo.useremail,
        });
      }
    };
    fetchUser();
  }, []);

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <Avatar className="h-8 w-8 rounded-lg">
            <UserButton />
          </Avatar>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">{user?.firstName}</span>
            <span className="truncate text-xs">{user?.emailAddresses}</span>
          </div>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
