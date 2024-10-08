import React from 'react'
import UserNavbar from './UserNavbar'
import Footer from '../Footer'
import { UserDashSpotlight } from './UserComponents/UserDashSpotlight'

function UserDashboard() {
  return (
   <>
    <div className="bg-black min-h-screen">
   <UserNavbar/>
   {/* <UserSidebar/> */}
   <UserDashSpotlight/>
   <Footer/>
   </div>
   </>
  )
}

export default UserDashboard