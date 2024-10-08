
import React,{useState,useEffect} from 'react';
import axios from 'axios';


export const TableAssignedList = () => {
  const data = [
    { id: 1, Name: 'John Doe', email: 'john@gmail.com', Number: '9876544321', Role: 'Developer', Action: 'Block' },
    // Add more rows if needed...
  ];

  


  return (
    <div className=" overflow-x-auto">
          <h3 className='text-center text-4xl mb-10 text-white'> Assigned List</h3>
      <table className="mb-10  min-w-full table-auto bg-gray-900 text-gray-100 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-800 text-left uppercase text-xs text-gray-400">
            <th className="px-6 py-3">ID</th>
            <th className="px-6 py-3">Project Name</th>
            <th className="px-6 py-3">Task Name</th>
            <th className="px-6 py-3">Task Description</th>
            <th className="px-6 py-3">Role </th>
            <th className="px-6 py-3">EmployeeName</th>
            <th className="px-6 py-3">Emp email</th>
            <th className="px-6 py-3">StartDate</th>
            <th className="px-6 py-3">Deadline</th>
            <th className="px-6 py-3">Status</th>
            <th className="px-6 py-3">Verification</th>
            {/* <th className="px-6 py-3">Action</th> Updated header */}
          </tr>
        </thead>
        <tbody>
          {/* {datas.map((row, index) => ( */}
            <tr
            //   key={row.id}
              className='bg-gray-700 bg-gray-800  hover:bg-gray-600 transition-all duration-200'>
            
              <td className="px-6 py-4">id</td>
              <td className="px-6 py-4">projectname</td>
              <td className="px-6 py-4">taskname</td>
              <td className="px-6 py-4">taskdescription</td>
              <td className="px-6 py-4" >role</td>
              <td className="px-6 py-4" >employeename</td>
              <td className="px-6 py-4" >email</td>
              <td className="px-6 py-4" >startdate</td>
              <td className="px-6 py-4" >deadline</td>
              <td className="px-6 py-4" >status</td>
              <td className="px-6 py-4">
      <select
        className="p-2 border border-gray-300 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-4 focus:ring-green-500"
        defaultValue="Pending"
      >
        <option className='text text-green-500' value="Verified">Verified</option>
        <option value="Pending">Pending</option>
        <option value="Rejected">Rejected</option>
      </select>
    </td>
            
            </tr>
          {/* ))} */}
        </tbody>
      </table>
    </div>
  );
};

// Example onClick handler
const handleAction = (id) => {
  alert(`Action triggered for row ID: ${id}`);
};

// // Helper function to add color to severity levels
// const getSeverityColor = (role) => {
//   switch (role) {
//     case 'Critical':
//       return 'text-red-500 font-bold';
//     case 'High':
//       return 'text-orange-500 font-semibold';
//     case 'Medium':
//       return 'text-yellow-400 font-medium';
//     case 'Low':
//       return 'text-green-500';
//     default:
//       return '';
//   }
// };
