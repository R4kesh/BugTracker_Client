
import React,{useState,useEffect} from 'react';
import axios from 'axios';


export const AssignmentList = () => {
  const data = [
    { id: 1, Name: 'John Doe', email: 'john@gmail.com', Number: '9876544321', Role: 'Developer', Action: 'Block' },
    // Add more rows if needed...
  ];
 
  return (
    <div className=" overflow-x-auto">
          <h3 className='text-center text-4xl mb-10 text-white'>New Assignments</h3>
      <table className="mb-10  min-w-full table-auto bg-gray-900 text-gray-100 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-800 text-left uppercase text-xs text-gray-400">
            <th className="px-6 py-3">ID</th>
            <th className="px-6 py-3">Project Name</th>
            <th className="px-6 py-3">Task Name</th>
            <th className="px-6 py-3">Task Description</th>
            <th className="px-6 py-3">Start Date</th>
            <th className="px-6 py-3">Deadline</th>
            <th className="px-6 py-3">Action</th> {/* Updated header */}
          </tr>
        </thead>
        <tbody>
          {/* {datas.map((row, index) => ( */}
            <tr
            //   key={row.id}
              className='bg-gray-700bg-gray-800 hover:bg-gray-600 transition-all duration-200'
            >
              <td className="px-6 py-4">id</td>
              <td className="px-6 py-4">ProjectName</td>
              <td className="px-6 py-4">Taskname</td>
              <td className="px-6 py-4">Taskdescription</td>
              <td className="px-6 py-4" >startdate</td>
              <td className="px-6 py-4" >Deadline</td>

              <td className="px-6 py-4 ">
                {/* Action button */}
                <a href="/works"><button
                  className='bg-green-500 hover:bg-green-600   text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 mr-2 '
             
                >
                approve
                </button> 
                </a>
                <a href="/assignments"><button
                  className='bg-red-500 hover:bg-red-600  text-white font-bold py-2 px-4  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 p'
             
                >
               reject
                </button>
                </a>
              </td>
            </tr>
          {/* ))} */}
        </tbody>
      </table>
    </div>
  );
};

// Example onClick handler

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
