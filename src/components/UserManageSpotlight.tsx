
import React from "react";
import { cn } from "../lib/utils";
import { Spotlight } from "./ui/spotlight";
import { TableDemostructure } from "./ui/table";
import { TableUsermanagement } from "./TableUsermanagement";
// import { TableUsermanagement } from "./TableUsermanagement";
// import { TableDemo } from "./SeverityTable";

export function UserManageSpotlight() {
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 w-full relative z-10 flex flex-col items-center justify-center">
          
        <div className="w-full   max-w-7xl">
          {/* <TableDemo />  */}
         <TableUsermanagement/>
        </div>
      </div>
    </div>
  );
}
