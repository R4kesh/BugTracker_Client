

import React from "react";
import { ShootingStars } from "../components/ui/shooting-stars";
import { StarsBackground } from "../components/ui/stars-background";
import { SidebarDash } from "../components/SidebarD";
import { CardHoverEffectDemo } from "./CardHoverEffectDemo";
import { TrackHistoryCardHover } from "./TrackHistoryCardDemo";

export function TrackHistoryShootingStar() {
  return (
    <div className="flex h-screen  rounded-md bg-neutral-900 w-full relative">
      {/* Sidebar on the left */}
      <SidebarDash />

      {/* Main content */}
      <div className="flex flex-1 flex-col items-center justify-center relative p-4 md:p-8">
          {/* Shooting Stars Demo Title */}
        <h2 className="relative z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8 mt-10 ">
          Company Projects
        
        </h2>
            

        <div className="flex flex-col items-center justify-center w-full space-y-4">
          <ShootingStars />

       

          {/* Center the CardHoverEffectDemo */}
         
         
          <div className="flex items-center justify-center w-full ">
          
            <TrackHistoryCardHover />
          
          </div>
        
          
          {/* Optional Stars Background */}
          <StarsBackground />
        </div>
      </div>
    </div>
  );
}
