import React from 'react'
import AdminNavbar from '../AdminNavbar'
import { TestReportSpotlight } from '../ui/TestReportSpotlight'
import Footer from '../Footer'

function TestReport() {
  return (
    <>
    <div className="bg-black min-h-screen">
     <AdminNavbar />
     <TestReportSpotlight/>
     <Footer />
   </div>
  </>
  )
}

export default TestReport