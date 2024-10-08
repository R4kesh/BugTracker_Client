import React from 'react'
import UserNavbar from './UserNavbar'
import Footer from '../Footer'
import { WorksSotlights } from './UserComponents/WorksSpotlight'

function Works() {
  return (
    <>
    <div className="bg-black min-h-screen">
   <UserNavbar/>
   {/* <UserSidebar/> */}
   <WorksSotlights/>
   <Footer/>
   </div>
   </>
  )
}

export default Works