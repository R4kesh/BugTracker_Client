
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export const TestReportTable = () => {
 

  return (
    <div className="overflow-x-auto">
      <h3 className='text-center text-4xl mb-10 text-white'>Test Reports</h3>
      <table className="mb-10 min-w-full table-auto bg-gray-900 text-gray-100 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-800 text-left uppercase text-xs text-gray-400">
            <th className="px-6 py-3">ID</th>
            <th className="px-6 py-3">Project Name</th>
            <th className="px-6 py-3 ">Task Name</th>
            <th className="px-6 py-3">Tester</th>
            <th className="px-6 py-3">Developer</th>
            <th className="px-6 py-3">Severity</th>
            <th className="px-6 py-3">Test Result</th>
            <th className="px-6 py-3">Bug Report</th>
            
            <th className="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
        
            <tr  className='bg-gray-700 hover:bg-gray-600 transition-all duration-200'>
              <td className="px-6 py-4  ">id</td>
              <td className="px-6 py-4 ">projectname</td>
              <td className="px-6 py-4 ">taskname</td>
              <td className="px-6 py-4 ">testername</td>
              <td className="px-6 py-4 ">developer</td>
              <td className="px-6 py-4 ">severity</td>
              <td className="px-6 py-4 ">testresult</td>
              <td className="px-6 py-4">
                {/* {report.bugReport ? ( */}
                  <iframe
                    src=''
                    title="PDF Preview"
                    className="w-full h-32 border border-gray-400"
                  />
                {/* ) : (
                  'No Bug Report'
                )} */}
              </td>

              <td className="px-6 py-4">
              <button
                
                  className="bg-blue-500 text-white rounded-md px-2 py-1 mt-2"
                >
                  ReAssign
                </button>
                </td>
            </tr>
          
        </tbody>
      </table>
    </div>
  );
};

