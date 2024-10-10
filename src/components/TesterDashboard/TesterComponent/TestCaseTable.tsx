
import React,{useState,useEffect} from 'react';


export const TestCaseTable = () => {
  const data = [
    { id: 1, Name: 'John Doe', email: 'john@gmail.com', Number: '9876544321', Role: 'Developer', Action: 'Block' },
    // Add more rows if needed...
  ];
 
  return (
    <div className=" overflow-x-auto">
          <h3 className='text-center text-4xl mb-10 text-white'> Test Cases</h3>
      <table className="mb-10  min-w-full table-auto bg-gray-900 text-gray-100 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-800 text-left uppercase text-xs text-gray-400">
            <th className="px-6 py-3">ID</th>
            <th className="px-6 py-3">Test Name</th>
            <th className="px-6 py-3">Test Description</th>
            <th className="px-6 py-3">Severity</th>
            <th className="px-6 py-3">Test Status</th> 
            <th className="px-6 py-3">Bug Report</th>
          </tr>
        </thead>
        <tbody>
        
            <tr
              
              className='bg-gray-700  hover:bg-gray-600 transition-all duration-200'
            >
              <td className="px-6 py-4">id</td>
              <td className="px-6 py-4">Testname</td>
              <td className="px-6 py-4">Testdescription</td>
              <td className="px-6 py-4"> 
              <select
              id="severity"
               // Update state on change
              className="border border-gray-300 bg-slate-600 rounded-md w-32 p-2"
              
              required
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
              </td>
              <td className="px-6 py-4"> 
              <select
           
                className="p-2 border bg-slate-600 border-gray-300 rounded"
              >
                <option value="Not Started">Not Started</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
              </td>
              <td className="px-6 py-4">
                <input
                  type="file"
                  accept="application/pdf"
                  
                  className="p-2 border  border-gray-300 bg-slate-600 rounded"
                />
                {/* Optional: Display the name of the uploaded file */}
                 <div className="text-gray-300 mt-1"></div>
              </td>

            </tr>
          {/* ))} */}
        </tbody>
      </table>
    </div>
  );
};

