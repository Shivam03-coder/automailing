"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { Mail, Plus } from "lucide-react";

const AccountSwitcher = () => {
  const handleAccounts = (value: string) => {
    toast({
      title: `Account switched to ${value}`,
    });
  };

  return (
    <Select onValueChange={handleAccounts}>
      <SelectTrigger className="border-none bg-primary text-secondary">
        <div className="flex items-center gap-2">
          <Mail size={20} />
          <Plus size={16} />
        </div>
      </SelectTrigger>
      <SelectContent className="bg-secondary text-primary">
        <SelectGroup>
          <SelectLabel>Accounts</SelectLabel>
          <SelectItem value="shaivam850anand@gmail.com">
            shaivam850anand@gmail.com
          </SelectItem>
          <SelectItem value="satyam013@gmail.com">
            satyam013@gmail.com
          </SelectItem>
          <SelectItem value="jaya9439@gmail.com">jaya9439@gmail.com</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default AccountSwitcher;
