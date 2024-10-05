import React from 'react'
import AdminNavbar from '../AdminNavbar'
import { ShootingStarsAndStarsBackgroundDemo } from '../ShootinStar'
import Footer from '../Footer'
import { SidebarDash } from '../SidebarD'
// import { Spotlights } from '../Spotlight'
import { UserManageSpotlight } from '../UserManageSpotlight'

function UserManagement() {
  return (
    <div className="bg-black min-h-screen">
    <AdminNavbar />
    <div className="flex min-h-[80vh]"> {/* Flex container to align sidebar and content */}
      <aside className="w-1/4 p-4"> {/* Sidebar styles */}
        <SidebarDash /> {/* Sidebar component */}
      </aside>
      <main className="flex-1 p-6 space-y-8"> {/* Main content area */}
        
<div className="mb-8"> {/* Wrapper for Spotlight */}
  <UserManageSpotlight /> {/* Spotlight component */}
  
  <div className="flex justify-center mt-8"> {/* Flexbox to center the table */}
    <div className="w-full max-w-4xl"> {/* Limit the width for responsiveness */}
      {/* <TableDemostructure /> Table component */}
    </div>
  </div>
  
</div>
</main>

    </div>
    <Footer />
  </div>
  )
}

export default UserManagement