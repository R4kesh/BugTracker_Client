import React from 'react'
import { LampDemo } from '../LampDemo';
import Navbar from '../Navbar';
import { WobbleCardDemo } from '../WobbleCardDemo';
import Footer from '../Footer';
function LandingPage() {
  return (
    <>
    <Navbar />
  
    <div className="min-h-screen  items-center justify-center bg-black text-white px-4">
      <div className=" items-center justify-between w-full max-w-8xl space-y-8 lg:space-y-0 lg:space-x-8 py-6">
       
        <div className="  justify-center items-center">
          <LampDemo />
        </div>

        
        <div className="mx-1 py-3 justify-center items-center">
          <WobbleCardDemo />
        </div>
      </div>
      <Footer/>
    </div>
  </>
  )
}

export default LandingPage