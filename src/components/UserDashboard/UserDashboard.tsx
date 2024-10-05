import React from 'react'
import UserNavbar from './UserNavbar'
import { UserSidebar } from './UserSidebar'
import Footer from '../Footer'
import { BackgroundLinesDemo } from '../BackgroundLinesDemo'

function UserDashboard() {
  return (
   <>
   <UserNavbar/>
   {/* <UserSidebar/> */}
   <BackgroundLinesDemo/>
   <Footer/>
   </>
  )
}

export default UserDashboard