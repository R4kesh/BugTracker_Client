import React from 'react'
import AdminNavbar from '../AdminNavbar'
import Footer from '../Footer'
import { TaskHistorySpotlight } from '../TaskHistorySpotlight'

function TaskHistoryTable() {
  return (
    <>
    <div className="bg-black min-h-screen">
     <AdminNavbar />
     <TaskHistorySpotlight/>
     <Footer />
   </div>
  </>
  )
}

export default TaskHistoryTable