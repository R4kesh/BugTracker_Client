import React from 'react'
import AdminNavbar from '../AdminNavbar'
import Footer from '../Footer'
import { ReAssignTaskHistorySpotlight } from '../ReAssignTaskHistorySpotlight'

function ReAssignTaskHistory() {
  return (
    <>
    <div className="bg-black min-h-screen">
     <AdminNavbar />
     <ReAssignTaskHistorySpotlight/>
     <Footer />
   </div>
  </>
  )
}

export default ReAssignTaskHistory