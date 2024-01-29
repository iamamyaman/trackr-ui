import { Button } from "@/components/ui/button";
import { EnvelopeOpenIcon } from "@radix-ui/react-icons";
import { menuItems } from "helpers/menuItems";
import useDarkSide from "hooks/useDarkSide";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";

const DesktopSidebar = () => {
  const [sidebarExpanded, setSidebarExpanded] = useState(true);
  const [activeMenu, setActiveMenu] = useState(menuItems[0]);
  const isDark = localStorage.theme;

  const toggleSidebar = () => {
    setSidebarExpanded(!sidebarExpanded);
  };
  return (
    <div
      className={`sidebar relative bottom-0 z-10 ${
        sidebarExpanded ? "w-[250px] p-3" : "w-[80px] p-3"
      } fixed h-full bg-white  dark:bg-primary-dark shadow-md transition-width ease-in-out duration-300 `}
    >
      <img className={`w-full max-w-32 stroke-white   `} src="/logo.svg"></img>

      <div className="menu flex flex-col justify-center gap-2 mt-5">
        {menuItems?.map((item, idx) => {
          return (
            <div
              key={idx}
              className={`menuItem text-secondary-dark  text-[14px] flex ${
                !sidebarExpanded && "justify-center"
              } rounded-md px-3 py-2  cursor-pointer transition-colors ease-in-out duration-500 overflow-hidden ${
                activeMenu?.label === item?.label
                  ? "bg-primary-blue text-white  hover:bg-primary-blue "
                  : "bg-slate-50 hover:bg-light-blue dark:bg-secondary-dark dark:text-extra-light dark:hover:bg-light-dark"
              } `}
              onClick={() => setActiveMenu(item)}
            >
              <div className="icon dark:text-white">
                {activeMenu?.label === item?.label
                  ? item?.activeIcon
                  : item?.icon}
              </div>

              {sidebarExpanded && (
                <p className="font-medium ml-3">{item?.label}</p>
              )}
            </div>
          );
        })}
      </div>
      <Button
        variant="primary"
        className="absolute bottom-5 right-0 rounded-none p-2 rounded-tl-md rounded-bl-md bg-[#365486]"
      >
        {sidebarExpanded ? (
          <ChevronLeft onClick={toggleSidebar} />
        ) : (
          <ChevronRight onClick={toggleSidebar} />
        )}
      </Button>
    </div>
  );
};

export default DesktopSidebar;
