import React from 'react'
import AdminNavbar from '../AdminNavbar'
import Footer from '../Footer'
import { AddProjectSpotlight } from '../AddProjectSpotlight'

function AddProject() {
  return (
    <>
    <div className="bg-black min-h-screen">
     <AdminNavbar />
     <AddProjectSpotlight/>
     <Footer />
   </div>
  </>
  )
}

export default AddProject