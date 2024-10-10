import React from 'react'
import TesterNavbar from '../TesterNavbar'
import { TesterSpotlight } from './TesterComponent/TesterSpotlight'
import Footer from '../Footer'

function TesterTaskList() {
  return (
    <>
    <div className="bg-black min-h-screen">
     <TesterNavbar />
     <TesterSpotlight/>
     <Footer />
   </div>
  </>
  )
}

export default TesterTaskList