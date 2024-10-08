import React from 'react'
import AdminNavbar from '../AdminNavbar'
import Footer from '../Footer'
import { AssignedListSpotlight } from '../AssignedListSpotlight'

function AssignedList() {
  return (
    <>
    <div className="bg-black min-h-screen">
     <AdminNavbar />
     <AssignedListSpotlight/>
     <Footer />
   </div>
  </>
  )
}

export default AssignedList