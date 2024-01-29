import React, { useState } from "react";
import { Outlet } from "react-router";
import DesktopSidebar from "./DesktopSidebar";
import { Input } from "@/components/ui/input";
import { BellIcon, ShieldQuestionIcon, UserCircle } from "lucide-react";
import { QuestionMarkCircledIcon } from "@radix-ui/react-icons";

const MainLayout = ({ children }) => {
  return (
    <div className="relative main-layout flex h-screen overflow-y-hidden overflow-x-hidden">
      <DesktopSidebar />
      <div className="relative main flex-1 overflow-y-scroll flex flex-col bg-slate-100 p-5">
        <nav className=" top-0  left-0 right-0 flex justify-between h-[50px]  -z-0">
          <div className="flex gap-3 ml-auto">
            <BellIcon />
            <ShieldQuestionIcon />
            <UserCircle />
          </div>
        </nav>

        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
