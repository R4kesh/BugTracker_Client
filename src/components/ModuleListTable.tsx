// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link,useParams } from 'react-router-dom';

// export const ModuleListTable = () => {
//   const { projectId } = useParams(); 
//     const [epics, setEpics] = useState([]); // Rename projects to epics for clarity

//     useEffect(() => {
//         const fetchEpics = async () => {
//             try {
//                 const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/project/listEpic?projectId=${projectId}`); // Ensure this endpoint exists and retrieves data from the epic table
//                 setEpics(response.data); 
//             } catch (error) {
//                 console.error('Error fetching epics:', error);
//             }
//         };

//         fetchEpics(); 
//     }, []); 

//     return (
//         <div className="overflow-x-auto">
//             <h3 className="text-center text-4xl mb-10 text-white">Modules</h3>
//             <table className="mb-10 min-w-full table-auto bg-gray-900 text-gray-100 rounded-lg shadow-md">
//                 <thead>
//                     <tr className="bg-gray-800 text-left uppercase text-xs text-gray-400">
//                         <th className="px-6 py-3">ID</th>
//                         <th className="px-6 py-3">Project Name</th>
//                         <th className="px-6 py-3">Project Id</th>
//                         <th className="px-6 py-3">Module Name</th>
//                         <th className="px-6 py-3">Module Description</th>
//                         <th className="px-6 py-3">Status</th>
//                         <th className="px-6 py-3">Task</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {epics.length > 0 ? (
//                         epics.map(epic => ( // Map through the fetched data
//                             <tr key={epic.id} className="hover:bg-gray-600 transition-all duration-200">
//                                 <td className="px-6 py-4">{epic.id}</td>
//                                 <td className="px-6 py-4">{epic.projectName}</td>
//                                 <td className="px-6 py-4">{epic.projectId}</td>
//                                 <td className="px-6 py-4">{epic.name}</td>
//                                 <td className="px-6 py-4">{epic.description}</td>
//                                 <td className="px-6 py-4 capitalize">{epic.status}</td>
//                                 <td className="px-6 py-4">
//                                     <Link to={`/tasklist/${projectId}/${epic.id}`}> {/* Use epic.id for dynamic routing */}
//                                         <button
//                                             className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
//                                         >
//                                             view Tasks
//                                         </button>
//                                     </Link>
//                                 </td>
//                             </tr>
//                         ))
//                     ) : (
//                         <tr>
//                             <td colSpan={7} className="text-center py-4">No Modules found.</td>
//                         </tr>
//                     )}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link, useParams } from 'react-router-dom';

// export const ModuleListTable = () => {
//   const { projectId } = useParams(); 
//   const [epics, setEpics] = useState([]); // Rename projects to epics for clarity
//   const [currentPage, setCurrentPage] = useState(1); // State to manage current page
//   const rowsPerPage = 4; // Limit to 4 rows per page

//   useEffect(() => {
//     const fetchEpics = async () => {
//       try {
//         const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/project/listEpic?projectId=${projectId}`); // Ensure this endpoint exists and retrieves data from the epic table
//         setEpics(response.data); 
//       } catch (error) {
//         console.error('Error fetching epics:', error);
//       }
//     };

//     fetchEpics(); 
//   }, [projectId,epics]); 

//   // Calculate the indexes for pagination
//   const indexOfLastEpic = currentPage * rowsPerPage;
//   const indexOfFirstEpic = indexOfLastEpic - rowsPerPage;
//   const currentEpics = epics.slice(indexOfFirstEpic, indexOfLastEpic);

//   // Handle Next and Previous page clicks
//   const nextPage = () => {
//     if (currentPage < Math.ceil(epics.length / rowsPerPage)) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const prevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   return (
//     <div className="overflow-x-auto">
//       <h3 className="text-center text-4xl mb-10 text-white">Modules</h3>
//       <table className="mb-10 min-w-full table-auto bg-gray-900 text-gray-100 rounded-lg shadow-md">
//         <thead>
//           <tr className="bg-gray-800 text-left uppercase text-xs text-gray-400">
//             <th className="px-6 py-3">ID</th>
//             <th className="px-6 py-3">Project Name</th>
//             <th className="px-6 py-3">Project Id</th>
//             <th className="px-6 py-3">Module Name</th>
//             <th className="px-6 py-3">Module Description</th>
//             <th className="px-6 py-3">Status</th>
//             <th className="px-6 py-3">Task</th>
//           </tr>
//         </thead>
//         <tbody>
//           {currentEpics.length > 0 ? (
//             currentEpics.map((epic) => ( // Map through the current page's epics
//               <tr key={epic.id} className="hover:bg-gray-600 transition-all duration-200">
//                 <td className="px-6 py-4">{epic.id}</td>
//                 <td className="px-6 py-4">{epic.projectName}</td>
//                 <td className="px-6 py-4">{epic.projectId}</td>
//                 <td className="px-6 py-4">{epic.name}</td>
//                 <td className="px-6 py-4">{epic.description}</td>
//                 <td className="px-6 py-4 capitalize">{epic.status}</td>
//                 <td className="px-6 py-4">
//                   <Link to={`/tasklist/${projectId}/${epic.id}`}> {/* Use epic.id for dynamic routing */}
//                     <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300">
//                       View Tasks
//                     </button>
//                   </Link>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan={7} className="text-center py-4">No Modules found.</td>
//             </tr>
//           )}
//         </tbody>
//       </table>

//       {/* Pagination Controls */}
//       {epics.length > rowsPerPage && (
//         <div className="flex justify-between items-center mt-4">
//           <button
//             onClick={prevPage}
//             disabled={currentPage === 1}
//             className={`px-4 py-2 bg-gray-500 text-white rounded ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-700'}`}
//           >
//             Previous
//           </button>

//           <span className="text-white">
//             Page {currentPage} of {Math.ceil(epics.length / rowsPerPage)}
//           </span>

//           <button
//             onClick={nextPage}
//             disabled={currentPage === Math.ceil(epics.length / rowsPerPage)}
//             className={`px-4 py-2 bg-gray-500 text-white rounded ${currentPage === Math.ceil(epics.length / rowsPerPage) ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-700'}`}
//           >
//             Next
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

// Define an interface for an Epic
interface Epic {
  id: number; // Assuming id is a number
  projectName: string;
  projectId: string; // Assuming projectId is a string
  name: string;
  description: string;
  status: string;
}

export const ModuleListTable: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>(); // Ensure projectId is a string
  const [epics, setEpics] = useState<Epic[]>([]); // Specify the type for epics
  const [currentPage, setCurrentPage] = useState<number>(1); // Specify the type for currentPage
  const rowsPerPage = 4; // Limit to 4 rows per page

  useEffect(() => {
    const fetchEpics = async () => {
      try {
        const response = await axios.get<Epic[]>(`${import.meta.env.VITE_BASE_URL}/api/project/listEpic?projectId=${projectId}`);
        setEpics(response.data);
      } catch (error) {
        console.error('Error fetching epics:', error);
      }
    };

    fetchEpics();
  }, [projectId,epics]); // Removed epics from dependency array to avoid unnecessary calls

  // Calculate the indexes for pagination
  const indexOfLastEpic = currentPage * rowsPerPage;
  const indexOfFirstEpic = indexOfLastEpic - rowsPerPage;
  const currentEpics = epics.slice(indexOfFirstEpic, indexOfLastEpic);

  // Handle Next and Previous page clicks
  const nextPage = () => {
    if (currentPage < Math.ceil(epics.length / rowsPerPage)) {
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
      <h3 className="text-center text-4xl mb-10 text-white">Modules</h3>
      <table className="mb-10 min-w-full table-auto bg-gray-900 text-gray-100 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-800 text-left uppercase text-xs text-gray-400">
            <th className="px-6 py-3">ID</th>
            <th className="px-6 py-3">Project Name</th>
            <th className="px-6 py-3">Project Id</th>
            <th className="px-6 py-3">Module Name</th>
            <th className="px-6 py-3">Module Description</th>
            <th className="px-6 py-3">Status</th>
            <th className="px-6 py-3">Task</th>
          </tr>
        </thead>
        <tbody>
          {currentEpics.length > 0 ? (
            currentEpics.map((epic) => (
              <tr key={epic.id} className="hover:bg-gray-600 transition-all duration-200">
                <td className="px-6 py-4">{epic.id}</td>
                <td className="px-6 py-4">{epic.projectName}</td>
                <td className="px-6 py-4">{epic.projectId}</td>
                <td className="px-6 py-4">{epic.name}</td>
                <td className="px-6 py-4">{epic.description}</td>
                <td className="px-6 py-4 capitalize">{epic.status}</td>
                <td className="px-6 py-4">
                  <Link to={`/tasklist/${projectId}/${epic.id}`}>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300">
                      View Tasks
                    </button>
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7} className="text-center py-4">No Modules found.</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination Controls */}
      {epics.length > rowsPerPage && (
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 bg-gray-500 text-white rounded ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-700'}`}
          >
            Previous
          </button>

          <span className="text-white">
            Page {currentPage} of {Math.ceil(epics.length / rowsPerPage)}
          </span>

          <button
            onClick={nextPage}
            disabled={currentPage === Math.ceil(epics.length / rowsPerPage)}
            className={`px-4 py-2 bg-gray-500 text-white rounded ${currentPage === Math.ceil(epics.length / rowsPerPage) ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-700'}`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};
