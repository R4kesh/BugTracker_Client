

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const ReAssignedTaskListTable = () => {
 
 
  return (
    <div className="overflow-x-auto">
      <h3 className="text-center text-4xl mb-10 text-white">Re-Assigned Task</h3>
      <table className="mb-10 min-w-full table-auto bg-gray-900 text-gray-100 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-800 text-left uppercase text-xs text-gray-400">
            <th className="px-6 py-3">ID</th>
            <th className="px-6 py-3">Project Name</th>
            <th className="px-6 py-3">Task Name</th>
            <th className="px-6 py-3">Reassign id</th>
            <th className="px-6 py-3">Severity</th>
            <th className="px-6 py-3">Tester Name</th>
            <th className="px-6 py-3">Previous Developer</th>
            <th className="px-6 py-3">Bug Report</th>
            <th className="px-6 py-3">ReAssigned To</th>
            <th className="px-6 py-3">Deadline</th>
            <th className="px-6 py-3">Task Status</th>



          </tr>
        </thead>
        <tbody>
          
              <tr  className="hover:bg-gray-600 transition-all duration-200">
                <td className="px-6 py-4">id</td>
                <td className="px-6 py-4">prijectname</td>
                <td className="px-6 py-4">Taskname</td>
                <td className="px-6 py-4">reassignid</td>
                <td className="px-6 py-4">Severity</td>
                <td className="px-6 py-4">Tester name</td>
                <td className="px-6 py-4">prevoius developer</td>
                <td className="px-6 py-4">bug report</td>
                <td className="px-6 py-4">Reassigned to</td>
                <td className="px-6 py-4">deadline</td>
                <td className="px-6 py-4 capitalize">task status</td>
                {/* <td className="px-6 py-4">
                  <Link to={`/projectModule/${project.id}`}>
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                    >
                      View Module
                    </button>
                  </Link>
                </td> */}
              </tr>
         
            <tr>
              <td colSpan={6} className="text-center py-4">No projects found.</td>
            </tr>
         
        </tbody>
      </table>

    
    
    </div>
  );
};
