import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";

const SerachInput = () => {
  return (
    <div className="flex items-center gap-2 rounded bg-paleblue px-3 py-1">
      <Search size={25} />
      <Input
        placeholder="Serach......"
        className="border-none text-xl shadow-none outline-none placeholder:text-black"
      />
    </div>
  );
};

export default SerachInput;
