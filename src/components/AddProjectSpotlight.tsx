
import React from "react";
import { cn } from "../lib/utils";
import { Spotlight } from "./ui/spotlight";
import { TableDemostructure } from "./ui/table";
import { TableUsermanagement } from "./TableUsermanagement";
import { SidebarDash } from "./SidebarD";


export function AddProjectSpotlight() {
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <SidebarDash/>
      <div className="relative h-10 w-full mb-80"> {/* Add relative positioning to the container */}
  <button 
    type="button" 
    className="absolute top-0 right-0 text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
  >
    Teal to Lime
  </button>
</div>
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />


      {/* <button type="button"  className="text-gray-900  bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Teal to Lime</button> */}
      <div className="p-4 w-full relative z-10 flex flex-col items-center justify-center">


        <div className="w-full   max-w-7xl">
          {/* <TableDemo />  */}
         {/* <TableUsermanagement/> */}
        </div>
      </div>
    </div>
  );
}
