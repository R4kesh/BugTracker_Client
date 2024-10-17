// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';

// // export const TableDemostructure = () => {
// //   const [data, setData] = useState([]);

// //   useEffect(() => {
// //     fetchData();
// //   }, []);

// //   // Function to fetch data
// //   const fetchData = async () => {
// //     try {
// //       const response = await axios.get('http://localhost:3000/api/dashboard/requested_user');
// //       setData(response.data); // Set the state with the fetched data
// //     } catch (error) {
// //       console.error('Error fetching data:', error);
// //     }
// //   };

// //   // Function to handle the approval action
// //   const handleApprove = async (id) => {
// //     try {
// //       const response = await axios.put(`http://localhost:3000/api/dashboard/approve_user/${id}`);
// //       if (response.data.success) {
// //         alert('User approved successfully');
// //         fetchData(); // Refresh the table after successful approval
// //       } else {
// //         alert('Failed to approve the user');
// //       }
// //     } catch (error) {
// //       console.error('Error approving user:', error);
// //       alert('An error occurred while approving the user');
// //     }
// //   };

// //   return (
// //     <div className="overflow-x-auto">
// //       <table className="mb-10 min-w-full table-auto bg-gray-900 text-gray-100 rounded-lg shadow-md">
// //         <thead>
// //           <tr className="bg-gray-800 text-left uppercase text-xs text-gray-400">
// //             <th className="px-6 py-3">ID</th>
// //             <th className="px-6 py-3">Name</th>
// //             <th className="px-6 py-3">Email</th>
// //             <th className="px-6 py-3">Number</th>
// //             <th className="px-6 py-3">Role</th>
// //             <th className="px-6 py-3">Action</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {data.map((row, index) => (
// //             <tr
// //               key={row.id}
// //               className={`${index % 2 === 0 ? 'bg-gray-700' : 'bg-gray-800'} hover:bg-gray-600 transition-all duration-200`}
// //             >
// //               <td className="px-6 py-4">{row.id}</td>
// //               <td className="px-6 py-4">{row.name}</td>
// //               <td className="px-6 py-4">{row.email}</td>
// //               <td className="px-6 py-4">{row.phoneNumber}</td>
// //               <td className="px-6 py-4">{row.role}</td>
// //               <td className="px-6 py-4">
// //                 {/* Approve button */}
// //                 <button
// //                   className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
// //                   onClick={() => handleApprove(row.id)} // Trigger approval on click
// //                 >
// //                   Approve
// //                 </button>
// //               </td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // };


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// export const TableDemostructure = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   // Function to fetch data
//   const fetchData = async () => {
//     try {
//       const response = await axios.get('http://localhost:3000/api/dashboard/requested_user');
//       setData(response.data); // Set the state with the fetched data
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   // Function to handle the approval action
//   const handleApprove = async (id) => {
//     try {
//       const response = await axios.put(`http://localhost:3000/api/dashboard/approve_user/${id}`);
//       if (response.data.success) {
//         alert('User approved successfully');
//         fetchData(); // Refresh the table after successful approval
//       } else {
//         alert('Failed to approve the user');
//       }
//     } catch (error) {
//       console.error('Error approving user:', error);
//       alert('An error occurred while approving the user');
//     }
//   };

//   return (
//     <div className="overflow-x-auto">
//       <table className="mb-10 min-w-full table-auto bg-gray-900 text-gray-100 rounded-lg shadow-md">
//         <thead>
//           <tr className="bg-gray-800 text-left uppercase text-xs text-gray-400">
//             <th className="px-6 py-3">ID</th>
//             <th className="px-6 py-3">Name</th>
//             <th className="px-6 py-3">Email</th>
//             <th className="px-6 py-3">Number</th>
//             <th className="px-6 py-3">Role</th>
//             <th className="px-6 py-3">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((row, index) => (
//             <tr
//               key={row.id}
//               className={`${index % 2 === 0 ? 'bg-gray-700' : 'bg-gray-800'} hover:bg-gray-600 transition-all duration-200`}
//             >
//               <td className="px-6 py-4">{row.id}</td>
//               <td className="px-6 py-4">{row.name}</td>
//               <td className="px-6 py-4">{row.email}</td>
//               <td className="px-6 py-4">{row.phoneNumber}</td>
//               <td className="px-6 py-4">{row.role}</td>
//               <td className="px-6 py-4">
//                 {/* Approve button */}
//                 <button
//                   className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
//                   onClick={() => handleApprove(row.id)} // Trigger approval on click
//                 >
//                   Approve
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

export const TableDemostructure = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const rowsPerPage = 4; // Limit of 5 rows per page

  useEffect(() => {
    fetchData();
  }, []);

  // Function to fetch data
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/dashboard/requested_user');
      setData(response.data); // Set the state with the fetched data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Function to handle the approval action
  const handleApprove = async (id) => {
    try {
      const response = await axios.put(`http://localhost:3000/api/dashboard/approve_user/${id}`);
      if (response.data.success) {
        alert('User approved successfully');
        fetchData(); // Refresh the table after successful approval
      } else {
        alert('Failed to approve the user');
      }
    } catch (error) {
      console.error('Error approving user:', error);
      alert('An error occurred while approving the user');
    }
  };

  // Calculate the displayed rows based on pagination
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  // Pagination buttons handler
  const nextPage = () => {
    if (currentPage < Math.ceil(data.length / rowsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="overflow-x-auto">
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
          {currentRows.map((row, index) => (
            <tr
              key={row.id}
              className={`${index % 2 === 0 ? 'bg-gray-700' : 'bg-gray-800'} hover:bg-gray-600 transition-all duration-200`}
            >
              <td className="px-6 py-4">{row.id}</td>
              <td className="px-6 py-4">{row.name}</td>
              <td className="px-6 py-4">{row.email}</td>
              <td className="px-6 py-4">{row.phoneNumber}</td>
              <td className="px-6 py-4">{row.role}</td>
              <td className="px-6 py-4">
                {/* Approve button */}
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                  onClick={() => handleApprove(row.id)} // Trigger approval on click
                >
                  Approve
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination buttons */}
      <div className="flex justify-between mt-4">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="bg-gray-700 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={nextPage}
          disabled={currentPage === Math.ceil(data.length / rowsPerPage)}
          className="bg-gray-700 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};
