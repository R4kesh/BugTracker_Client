
// import React from "react";
// import { ShootingStars } from "../components/ui/shooting-stars";
// import { StarsBackground } from "../components/ui/stars-background";
// import { SidebarDash } from "../components/SidebarD";
// export function ShootingStarsAndStarsBackgroundDemo() {
//   return (
//     <div className="h-[40rem] rounded-md bg-neutral-900 flex flex-col items-center justify-center relative w-full">
//       <h2 className="relative flex-col md:flex-row z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8">
//         {/* <span>Shooting Star</span>
//         <span className="text-white text-lg font-thin">x</span>
//         <span>Star Background</span> */}
//       </h2>
//       <ShootingStars />
//       <SidebarDash/>
//       <StarsBackground />
//     </div>
//   );
// }
// import React from "react";
// import { ShootingStars } from "../components/ui/shooting-stars";
// import { StarsBackground } from "../components/ui/stars-background";
// import { SidebarDash } from "../components/SidebarD";
// import { CardHoverEffectDemo } from "./CardHoverEffectDemo";


// export function ShootingStarsAndStarsBackgroundDemo() {
//   return (
//     <div className="flex h-[40rem] rounded-md bg-neutral-900 w-full relative">
//       {/* Sidebar on the left */}
//       <SidebarDash />

//       {/* Main content */}
//       <div className="flex flex-1 flex-col items-center justify-center relative">
//         <h2 className="relative z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8">
//           {/* Shooting Stars Demo Title */}
//         </h2>


//         <ShootingStars />

//         <button type="button" className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Red to Yellow</button>
//         <CardHoverEffectDemo/>
//         <StarsBackground />
//       </div>
//     </div>
//   );
// }

import React from "react";
import { ShootingStars } from "../components/ui/shooting-stars";
import { StarsBackground } from "../components/ui/stars-background";
import { SidebarDash } from "../components/SidebarD";
import { CardHoverEffectDemo } from "./CardHoverEffectDemo";

export function ShootingStarsAndStarsBackgroundDemo() {
  return (
    <div className="flex h-screen md:h-[40rem] rounded-md bg-neutral-900 w-full relative">
      {/* Sidebar on the left */}
      <SidebarDash />

      {/* Main content */}
      <div className="flex flex-1 flex-col items-center justify-center relative p-4 md:p-8">
          {/* Shooting Stars Demo Title */}
        <h2 className="relative z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8 mt-10 ">
          
        
        </h2>
            

        <div className="flex flex-col items-center justify-center w-full space-y-4">
          <ShootingStars />

       

          {/* Center the CardHoverEffectDemo */}
         
         
          <div className="flex items-center justify-center w-full">
          
            <CardHoverEffectDemo />
          
          </div>
        
          
          {/* Optional Stars Background */}
          <StarsBackground />
        </div>
      </div>
    </div>
  );
}
