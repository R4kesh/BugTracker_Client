import React from 'react'
import AdminNavbar from '../AdminNavbar'
import Footer from '../Footer'
import { AddProjectSpotlight } from '../AddProjectSpotlight'
import { TaskListSpotlight } from '../TaskListSpotlight'

function TaskList() {
  return (
    <>
    <div className="bg-black min-h-screen">
     <AdminNavbar />
     <TaskListSpotlight/>
     <Footer />
   </div>
  </>
  )
}

export default TaskList