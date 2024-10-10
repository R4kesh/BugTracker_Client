import React from 'react'
import TesterNavbar from '../TesterNavbar'
import Footer from '../Footer'
import { TestCaseSpotlight } from './TesterComponent/TestCaseSpotlight'

function AddTestCase() {
  return (
    <>
    <div className="bg-black min-h-screen">
     <TesterNavbar />
     <TestCaseSpotlight/>
     <Footer />
   </div>
  </>
  )
}

export default AddTestCase