import React from 'react'
import AdminNavbar from '../AdminNavbar'
import { ProjectPreviewSpotlight } from '../ProjectPreviewSpotlight'
import Footer from '../Footer'
import { ProjectPreviewModuleSpotlight } from '../ProjectModuleListSpotlight'

function PreviewModuleList() {
  return (
    <>
    <div className="bg-black min-h-screen">
     <AdminNavbar />
     <ProjectPreviewModuleSpotlight/>
     <Footer />
   </div>
  </>
  )
}

export default PreviewModuleList