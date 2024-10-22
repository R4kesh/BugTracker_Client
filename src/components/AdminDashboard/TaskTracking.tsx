import React from 'react'
import AdminNavbar from '../AdminNavbar'
import { TaskTrackingSpotlight } from '../TaskTrackingSpotlight'
import Footer from '../Footer'

function TaskTracking() {
  return (
    <>
    <div className="bg-black min-h-screen">
     <AdminNavbar />
     <TaskTrackingSpotlight/>
     <Footer />
   </div>
  </>
  )
}

export default TaskTracking

