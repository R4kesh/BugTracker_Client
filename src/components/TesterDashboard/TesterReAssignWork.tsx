import React from 'react'
import TesterNavbar from '../TesterNavbar'
import Footer from '../Footer'
import { TesterReAssignSpotlight } from './TesterComponent/TesterReAssignSpotlight'

function TesterReAssignWork() {
  return (
    <>
    <div className="bg-black min-h-screen">
    <TesterNavbar />
    <TesterReAssignSpotlight />
    <Footer />
  </div>
  </>
  )
}

export default TesterReAssignWork