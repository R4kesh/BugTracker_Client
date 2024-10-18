
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const ReAssignmentTable = () => {


  return (
    <div className="overflow-x-auto">
      <h3 className='text-center text-4xl mb-10 text-white'>Re-Assignment</h3>
      <table className="mb-10 min-w-full table-auto bg-gray-900 text-gray-100 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-800 text-left uppercase text-xs text-gray-400">
            <th className="px-6 py-3">ID</th>
            <th className="px-6 py-3">Project Name</th>
            <th className="px-6 py-3">Task Name</th>
            <th className="px-6 py-3">Tester</th>
            <th className="px-6 py-3">Severity</th>
            <th className="px-6 py-3">previous developer</th>
            <th className="px-6 py-3">bug report</th>
            <th className="px-6 py-3">Deadline</th>
            <th className="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
            <tr  className="bg-gray-800 hover:bg-gray-600 transition-all duration-200">
              <td className="px-6 py-4">id</td>
              <td className="px-6 py-4">projectname</td>
              <td className="px-6 py-4">taskname</td>
              <td className="px-6 py-4">tester</td>
              <td className="px-6 py-4">severity</td>
              <td className="px-6 py-4">prevoius developer</td>
              <td className="px-6 py-4">bug report</td>
              <td className="px-6 py-4">deadline</td>
              <td className="px-6 py-4">
                <select
                  className="bg-gray-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                  value=''
                 
                >
                  <option value="pending">Pending</option>
                  <option value="started">Started</option>
                  <option value="in-Progress">In Progress</option>
                  <option value="completed">Completed</option>
                </select>
              </td>
            </tr>
         
        </tbody>
      </table>

    

      
    </div>
  );
};
