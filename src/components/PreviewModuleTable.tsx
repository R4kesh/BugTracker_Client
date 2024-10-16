
import React,{useState,useEffect} from 'react';
import axios from 'axios';


export const PreviewModuleTable = () => {
  const data = [
    { id: 1, Name: 'John Doe', email: 'john@gmail.com', Number: '9876544321', Role: 'Developer', Action: 'Block' },
    // Add more rows if needed...
  ];
  
  return (
    <div className=" overflow-x-auto">
          <h3 className='text-center text-4xl mb-10 text-white'> Project Module</h3>
      <table className="mb-10  min-w-full table-auto bg-gray-900 text-gray-100 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-800 text-left uppercase text-xs text-gray-400">
            <th className="px-6 py-3">ID</th>
            <th className="px-6 py-3">moduleName</th>
            <th className="px-6 py-3">module description</th>
            <th className="px-6 py-3">Created At</th>
            <th className="px-6 py-3">Action</th> {/* Updated header */}
          </tr>
        </thead>
        <tbody>
         
            <tr
            
              className='bg-gray-800 hover:bg-gray-600 transition-all duration-200'
            >
              <td className="px-6 py-4">id</td>
              <td className="px-6 py-4">modulename</td>
              <td className="px-6 py-4">moduledescription</td>
              <td className="px-6 py-4">created at</td>
              <td className="px-6 py-4">
                {/* Action button */}
                <button
                  className=' bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300'
                
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

