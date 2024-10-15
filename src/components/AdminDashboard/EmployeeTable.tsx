
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; 

export const EmployeeTable = () => {
  
  return (
    <div className="overflow-x-auto">
      <h3 className="text-center text-4xl mb-10 text-white">Employee List</h3>
      <table className="mb-10 min-w-full table-auto bg-gray-900 text-gray-100 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-800 text-left uppercase text-xs text-gray-400">
            <th className="px-6 py-3">ID</th>
            <th className="px-6 py-3">Employee Name</th>
            <th className="px-6 py-3">Employee Id</th>
            <th className="px-6 py-3">Designation</th>
            <th className="px-6 py-3">Emp Working From</th>
            <th className="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          
              <tr  className="hover:bg-gray-600 transition-all duration-200">
                <td className="px-6 py-4">id</td>
                <td className="px-6 py-4">employeename</td>
                <td className="px-6 py-4">employee id</td>
                <td className="px-6 py-4">designation</td>
                <td className="px-6 py-4">users tory</td>
                <td className="px-6 py-4">
               
                  <button
                  
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                  >
                    view Details

                    </button>
                </td>
              </tr>
           
          
        
        </tbody>
      </table>

     
   
    </div>
  );
};

