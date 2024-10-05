// import React from "react";
// import { cn } from "../lib/utils";
// import { Spotlight } from "./ui/spotlight";
// import { TableDemo } from "./SeverityTable";

// export function Spotlights() {
//   return (
//     <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
//       <Spotlight
//         className="-top-40 left-0 md:left-60 md:-top-20"
//         fill="white"
//       />
//       <div className=" p-2 max-w-7xl   mx-auto relative z-10  w-full pt-20 md:pt-0">
//       <TableDemo /> 
       
//       </div>
//     </div>
//   );
// }

import React from "react";
import { cn } from "../lib/utils";
import { Spotlight } from "./ui/spotlight";
import { TableDemostructure } from "./ui/table";
// import { TableDemo } from "./SeverityTable";

export function Spotlights() {
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 w-full relative z-10 flex flex-col items-center justify-center">
          <h3 className='text-center text-4xl mb-10 text-white'>User New Requests</h3>
        <div className="w-full   max-w-7xl">
          {/* <TableDemo />  */}
          <TableDemostructure/>
        </div>
      </div>
    </div>
  );
}
