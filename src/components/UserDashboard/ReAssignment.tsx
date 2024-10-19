import React from 'react'
import UserNavbar from './UserNavbar'
import Footer from '../Footer'
import { ReAssignmentSpotlight } from './UserComponents/ReAssignmentSpotlight'

function ReAssignment() {
  return (
    <>
    <div className="bg-black min-h-screen">
   <UserNavbar/>
   <ReAssignmentSpotlight/>
   <Footer/>
   </div>
   </>
  )
}

export default ReAssignment