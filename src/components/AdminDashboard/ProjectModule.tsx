import React from 'react'
import AdminNavbar from '../AdminNavbar'
import Footer from '../Footer'
import { ProjectModuleSpotlight } from '../ProjectModuleSpotlight'

function ProjectModule() {
  return (
    <>
    <div className="bg-black min-h-screen">
     <AdminNavbar />
     <ProjectModuleSpotlight/>
     <Footer />
   </div>
  </>
  )
}

export default ProjectModule