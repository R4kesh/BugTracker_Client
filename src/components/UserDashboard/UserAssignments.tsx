import React from 'react'
import UserNavbar from './UserNavbar'
import { UserDashSpotlight } from './UserComponents/UserDashSpotlight'
import Footer from '../Footer'
import { UserAssignmentSpotlight } from './UserComponents/UserAssignmentSpotlight'

function UserAssignments() {
  return (
    <>
    <div className="bg-black min-h-screen">
   <UserNavbar/>
   {/* <UserSidebar/> */}
   <UserAssignmentSpotlight/>
   <Footer/>
   </div>
   </>
  )
}

export default UserAssignments