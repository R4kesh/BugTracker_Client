import React from 'react'
import AdminNavbar from '../AdminNavbar'
import Footer from '../Footer'
import { ReAssignedTaskSpotlight } from '../ReAssignedTaskSpotlight'

function ReAssignedTaskList() {
  return (
    <>
     <div className="bg-black min-h-screen">
      <AdminNavbar />
      <ReAssignedTaskSpotlight/>
      <Footer />
    </div>
   </>
  )
}

export default ReAssignedTaskList