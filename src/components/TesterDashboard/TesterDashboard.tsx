import React from 'react'
import TesterNavbar from '../TesterNavbar'
import { TesterShootingStar } from '../TesterShootingStar'
import Footer from '../Footer'

function TesterDashboard() {
  return (
    <>
    <div className="bg-black min-h-screen">
    <TesterNavbar />
    <TesterShootingStar />
    <Footer />
  </div>
  </>
  )
}

export default TesterDashboard