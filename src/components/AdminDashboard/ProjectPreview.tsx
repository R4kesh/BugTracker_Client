import React from 'react'
import AdminNavbar from '../AdminNavbar'
import Footer from '../Footer'
import { ProjectPreviewSpotlight } from '../ProjectPreviewSpotlight'

function ProjectPreview() {
  return (
    <>
    <div className="bg-black min-h-screen">
     <AdminNavbar />
     <ProjectPreviewSpotlight/>
     <Footer />
   </div>
  </>
  )
}

export default ProjectPreview