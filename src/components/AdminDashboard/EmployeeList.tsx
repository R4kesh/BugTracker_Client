import React from 'react'
import AdminNavbar from '../AdminNavbar'
import Footer from '../Footer'
import { EmployeeSpotlight } from '../EmployeeSpotlight'

function EmployeeList() {
  return (
    <>
    <div className="bg-black min-h-screen">
     <AdminNavbar />
     <EmployeeSpotlight/>
     <Footer />
   </div>
  </>
  )
}

export default EmployeeList