import React from 'react'
import TesterNavbar from '../TesterNavbar'
import { TestListSpotlight } from './TesterComponent/TestListSpotlight'
import Footer from '../Footer'

function TestList() {
  return (
    <>
    <div className="bg-black min-h-screen">
     <TesterNavbar />
     <TestListSpotlight/>
     <Footer />
   </div>
  </>
  )
}

export default TestList