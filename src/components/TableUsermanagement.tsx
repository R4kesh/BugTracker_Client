
// import React,{useState,useEffect} from 'react';
// import axios from 'axios';


// export const TableUsermanagement = () => {
//   const data = [
//     { id: 1, Name: 'John Doe', email: 'john@gmail.com', Number: '9876544321', Role: 'Developer', Action: 'Block' },
//     // Add more rows if needed...
//   ];
//   const [datas, setData] = useState([]);
//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/dashboard/usermanagement`);
//       setData(response.data); // Assuming API returns an array of user objects with `isBlocked`
//     } catch (error) {
//       console.error('Error fetching user data:', error);
//     }
//   };

//   const handleBlockUnblock = async (id, isBlocked) => {
//     try {
//       const response = await axios.put(`${import.meta.env.VITE_BASE_URL}/api/dashboard/usermanagement/block_unblock/${id}`, { isBlocked: !isBlocked });
//       if (response.data.success) {
//         fetchData(); // Refresh data after updating block/unblock status
//       } else {
//         alert('Failed to update block status');
//       }
//     } catch (error) {
//       console.error('Error updating block status:', error);
//       alert('An error occurred while updating block status');
//     }
//   };


//   return (
//     <div className=" overflow-x-auto">
//           <h3 className='text-center text-4xl mb-10 text-white'> UserManagement</h3>
//       <table className="mb-10  min-w-full table-auto bg-gray-900 text-gray-100 rounded-lg shadow-md">
//         <thead>
//           <tr className="bg-gray-800 text-left uppercase text-xs text-gray-400">
//             <th className="px-6 py-3">ID</th>
//             <th className="px-6 py-3">Name</th>
//             <th className="px-6 py-3">Email</th>
//             <th className="px-6 py-3">Number</th>
//             <th className="px-6 py-3">Role</th>
//             <th className="px-6 py-3">Action</th> {/* Updated header */}
//           </tr>
//         </thead>
//         <tbody>
//           {datas.map((row, index) => (
//             <tr
//               key={row.id}
//               className={`${index % 2 === 0 ? 'bg-gray-700' : 'bg-gray-800'} hover:bg-gray-600 transition-all duration-200`}
//             >
//               <td className="px-6 py-4">{row.id}</td>
//               <td className="px-6 py-4">{row.name}</td>
//               <td className="px-6 py-4">{row.email}</td>
//               <td className="px-6 py-4">{row.phoneNumber}</td>
//               <td className="px-6 py-4" >{row.role}</td>
//               <td className="px-6 py-4">
//                 {/* Action button */}
//                 <button
//                   className={`${row.isBlocked ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'} text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300`}
//                   onClick={() => handleBlockUnblock(row.id, row.isBlocked)}
//                 >
//                   {row.isBlocked ? 'Unblock' : 'Block'}
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const TableUsermanagement = () => {
  const [datas, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 4; // Limit of 5 rows per page
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/dashboard/usermanagement`);
      setData(response.data); // Assuming API returns an array of user objects with `isBlocked`
    } catch (error) {
      console.error('Error fetching user data:', error);
      setErrorMessage('Failed to fetch user data. Please try again later.');
    }
  };

  const handleBlockUnblock = async (id, isBlocked) => {
    try {
      const response = await axios.put(`${import.meta.env.VITE_BASE_URL}/api/dashboard/usermanagement/block_unblock/${id}`, { isBlocked: !isBlocked });
      if (response.data.success) {
        fetchData(); // Refresh data after updating block/unblock status
      } else {
        alert('Failed to update block status');
      }
    } catch (error) {
      console.error('Error updating block status:', error);
      alert('An error occurred while updating block status');
    }
  };

  // Pagination logic
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = datas.slice(indexOfFirstRow, indexOfLastRow);

  // Handle page change
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  // Create page numbers for pagination controls
  const totalPages = Math.ceil(datas.length / rowsPerPage);
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="overflow-x-auto">
      <h3 className='text-center text-4xl mb-10 text-white'>UserManagement</h3>
      {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
      <table className="mb-10 min-w-full table-auto bg-gray-900 text-gray-100 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-800 text-left uppercase text-xs text-gray-400">
            <th className="px-6 py-3">ID</th>
            <th className="px-6 py-3">Name</th>
            <th className="px-6 py-3">Email</th>
            <th className="px-6 py-3">Number</th>
            <th className="px-6 py-3">Role</th>
            <th className="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {currentRows.length > 0 ? (
            currentRows.map((row, index) => (
              <tr key={row.id} className={`${index % 2 === 0 ? 'bg-gray-700' : 'bg-gray-800'} hover:bg-gray-600 transition-all duration-200`}>
                <td className="px-6 py-4">{row.id}</td>
                <td className="px-6 py-4">{row.name}</td>
                <td className="px-6 py-4">{row.email}</td>
                <td className="px-6 py-4">{row.phoneNumber}</td>
                <td className="px-6 py-4">{row.role}</td>
                <td className="px-6 py-4">
                  <button
                    className={`${row.isBlocked ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'} text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300`}
                    onClick={() => handleBlockUnblock(row.id, row.isBlocked)}
                  >
                    {row.isBlocked ? 'Unblock' : 'Block'}
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6} className="text-center py-4">No users found.</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="flex justify-center space-x-2">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => handlePageChange(number)}
            className={`px-4 py-2 border border-gray-300 rounded-lg ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-gray-800 text-gray-100'}`}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};
