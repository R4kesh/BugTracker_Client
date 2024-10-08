
import React from "react";
import { cn } from "../lib/utils";
import { Spotlight } from "./ui/spotlight";
import { SidebarDash } from "./SidebarD";
import { TableAssignedList } from "./TableAssignedList";


export function AssignedListSpotlight() {
  return (
    <div className="  h-screen  w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <SidebarDash/>
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 w-full relative z-10 flex flex-col items-center justify-center">
          
        <div className="w-full mb-36  max-w-7xl">
          {/* <TableDemo />  */}
         <TableAssignedList/>
        </div>
      </div>
    </div>
  );
}
