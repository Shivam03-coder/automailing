"use client";
import { Button } from "@/components/ui/button";
import { NavigationMenuBar } from "@/components/ui/navigationmenu";
import { Cuboid, Rocket } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const Header = () => {
  const Router = useRouter();
  return (
    <nav className="mx-auto sticky top-0 z-50 flex w-full items-center justify-between bg-transparent px-10 py-2 backdrop-blur-2xl">
      <div className="flex-center text-greatBlue-400 gap-4 p-2 text-2xl font-semibold text-black">
        <Cuboid className="text-greatBlue-400" size={37} />
        MIRAJ-X
      </div>
      <div className="flex items-center justify-between gap-4">
        <NavigationMenuBar />
        <Button
          onClick={() => Router.push("/sign-in")}
          className="font-inter bg-secondary font-medium text-black"
          variant={"outline"}
        >
          Login
        </Button>
        <Button className="flex items-center gap-3 bg-primary font-inter font-medium text-secondary">
          <Rocket size={23} color="white" />
          Getting started for free
        </Button>
      </div>
    </nav>
  );
};

export default Header;
