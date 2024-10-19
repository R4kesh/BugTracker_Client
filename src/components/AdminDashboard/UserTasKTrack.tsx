

import React from 'react'
import AdminNavbar from '../AdminNavbar'
import { ShootingStarsAndStarsBackgroundDemo } from '../ShootinStar'
import Footer from '../Footer'
import { SidebarDash } from '../SidebarD'
// import { Spotlights } from '../Spotlight'
import { UserManageSpotlight } from '../UserManageSpotlight'
import { UserTaskTrackSpotlight } from '../UserTaskTrackSpotlight'

function UserTaskTrack() {
  return (
   <>
     <div className="bg-black min-h-screen">
      <AdminNavbar />
      <UserTaskTrackSpotlight/>
      <Footer />
    </div>
   </>
  )
}

export default UserTaskTrack