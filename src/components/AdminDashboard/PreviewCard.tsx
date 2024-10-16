import React from 'react'
import AdminNavbar from '../AdminNavbar'
import Footer from '../Footer'
import { PreviewCardSpotlight } from '../PreviewCardSpotlight'

function PreviewCard() {
  return (
    <>
    <div className="bg-black min-h-screen">
     <AdminNavbar />
     <PreviewCardSpotlight/>
     <Footer />
   </div>
  </>
  )
}

export default PreviewCard