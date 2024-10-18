
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const ReAssignTaskTable = () => {
 
  return (
    <div className="overflow-x-auto">
      <h3 className="text-center text-4xl mb-10 text-white">Re-Assigned Tasks</h3>
      <table className="mb-10 min-w-full table-auto bg-gray-900 text-gray-100 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-800 text-left uppercase text-xs text-gray-400">
            <th className="px-6 py-3">ID</th>
            <th className="px-6 py-3">Project Name</th>
            <th className="px-6 py-3">Task Name</th>
            <th className="px-6 py-3">Task Description</th>
            <th className="px-6 py-3">previous Developer</th>
            <th className="px-6 py-3">Severity</th>
            <th className="px-6 py-3">Bug Reported</th>
            <th className="px-6 py-3">Status</th>
            <th className="px-6 py-3">Test Case</th>
          </tr>
        </thead>
        <tbody>
         
              <tr
                
                className="hover:bg-gray-600 transition-all duration-200"
              >
                <td className="px-6 py-4">id</td>
                <td className="px-6 py-4">
                 project name
                </td>
                <td className="px-6 py-4">taskname</td>
                <td className="px-6 py-4">task description</td>
                <td className="px-6 py-4">Previous developer</td>
                <td className="px-6 py-4">severity</td>
                <td className="px-6 py-4">bug report</td>

                {/* <td className="px-6 py-4">
                  {task.assignedUser?.role || "Unassigned"}
                </td>
                <td className="px-6 py-4">
                  {task.assignedUser?.name || "Unassigned"}
                </td> */}
                <td className="px-6 py-4 capitalize">status</td>
                <td className="px-6 py-4">
                {/* /testcase/${task.id}` */}
                  <Link to='/testcase/:id'>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300">
                      Add TestCase
                    </button>
                  </Link>
                </td>
              </tr>
          
            <tr>
              <td colSpan={8} className="text-center py-4">
                No tasks found.
              </td>
            </tr>
        
        </tbody>
      </table>

    </div>
  );
};
