
// import React,{useState,useEffect} from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// export const PreviewModuleTable = () => {
//     const { id } = useParams();
//     const [modules, setModules] = useState([]);

//     console.log('proid',id);
//     useEffect(() => {
//         const fetchModules = async () => {
//           try {
//             const response = await axios.get(`http://localhost:3000/api/dashboard/previewmodule/${id}`); // Replace with your API endpoint
//             setModules(response.data);
//           } catch (error) {
//             console.error('Error fetching modules:', error);
//           }
//         };
    
//         fetchModules();
//       }, [id]);
    
//   const data = [
//     { id: 1, Name: 'John Doe', email: 'john@gmail.com', Number: '9876544321', Role: 'Developer', Action: 'Block' },
//     // Add more rows if needed...
//   ];
  
//   return (
//     <div className="overflow-x-auto">
//     <h3 className='text-center text-4xl mb-10 text-white'> Project Modules</h3>
//     <table className="mb-10 min-w-full table-auto bg-gray-900 text-gray-100 rounded-lg shadow-md">
//       <thead>
//         <tr className="bg-gray-800 text-left uppercase text-xs text-gray-400">
//           <th className="px-6 py-3">ID</th>
//           <th className="px-6 py-3">Module Name</th>
//           <th className="px-6 py-3">Module Description</th>
//           <th className="px-6 py-3">Created At</th>
//           <th className="px-6 py-3">Action</th>
//         </tr>
//       </thead>
//       <tbody>
//         {modules.length > 0 ? (
//           modules.map((module) => (
//             <tr
//               key={module.id}
//               className='bg-gray-800 hover:bg-gray-600 transition-all duration-200'
//             >
//               <td className="px-6 py-4">{module.id}</td>
//               <td className="px-6 py-4">{module.name}</td>
//               <td className="px-6 py-4">{module.description}</td>
//               <td className="px-6 py-4">{new Date(module.createdAt).toLocaleDateString()}</td>
//               <td className="px-6 py-4">
//                 <Link to={`/previewcard/${id}/${module.id}`}><button
//                   className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300'
//                 >
//                   View Details
//                 </button>
//                 </Link>
//               </td>
//             </tr>
//           ))
//         ) : (
//           <tr>
//             <td colSpan="5" className="px-6 py-4 text-center">
//               No modules found for this project.
//             </td>
//           </tr>
//         )}
//       </tbody>
//     </table>
//   </div>
//   );
// };

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import { Link } from 'react-router-dom';

// export const PreviewModuleTable = () => {
//   const { id } = useParams();
//   const [modules, setModules] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const modulesPerPage = 4; // Number of rows per page

//   useEffect(() => {
//     const fetchModules = async () => {
//       try {
//         const response = await axios.get(`http://localhost:3000/api/dashboard/previewmodule/${id}`); // Replace with your API endpoint
//         setModules(response.data);
//       } catch (error) {
//         console.error('Error fetching modules:', error);
//       }
//     };

//     fetchModules();
//   }, [id]);

//   // Get current modules based on the current page
//   const indexOfLastModule = currentPage * modulesPerPage;
//   const indexOfFirstModule = indexOfLastModule - modulesPerPage;
//   const currentModules = modules.slice(indexOfFirstModule, indexOfLastModule);

//   // Handle page change
//   const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

//   // Calculate total pages
//   const totalPages = Math.ceil(modules.length / modulesPerPage);

//   return (
//     <div className="overflow-x-auto">
//       <h3 className='text-center text-4xl mb-10 text-white'> Project Modules</h3>
//       <table className="mb-10 min-w-full table-auto bg-gray-900 text-gray-100 rounded-lg shadow-md">
//         <thead>
//           <tr className="bg-gray-800 text-left uppercase text-xs text-gray-400">
//             <th className="px-6 py-3">ID</th>
//             <th className="px-6 py-3">Module Name</th>
//             <th className="px-6 py-3">Module Description</th>
//             <th className="px-6 py-3">Created At</th>
//             <th className="px-6 py-3">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {currentModules.length > 0 ? (
//             currentModules.map((module) => (
//               <tr
//                 key={module.id}
//                 className='bg-gray-800 hover:bg-gray-600 transition-all duration-200'
//               >
//                 <td className="px-6 py-4">{module.id}</td>
//                 <td className="px-6 py-4">{module.name}</td>
//                 <td className="px-6 py-4">{module.description}</td>
//                 <td className="px-6 py-4">{new Date(module.createdAt).toLocaleDateString()}</td>
//                 <td className="px-6 py-4">
//                   <Link to={`/previewcard/${id}/${module.id}`}>
//                     <button
//                       className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300'
//                     >
//                       View Details
//                     </button>
//                   </Link>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="5" className="px-6 py-4 text-center">
//                 No modules found for this project.
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>

//       {/* Pagination Controls */}
//       <div className="flex justify-center space-x-2 mt-6">
//         {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
//           <button
//             key={pageNumber}
//             onClick={() => handlePageChange(pageNumber)}
//             className={`px-4 py-2 border rounded-lg ${
//               currentPage === pageNumber ? 'bg-blue-500 text-white' : 'bg-gray-800 text-gray-100'
//             }`}
//           >
//             {pageNumber}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

// Define the module type
interface Module {
  id: number;
  name: string;
  description: string;
  createdAt: string; // Could also be Date if it is converted in the backend
}

export const PreviewModuleTable: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // This fixes the type error
  const [modules, setModules] = useState<Module[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const modulesPerPage = 4; // Number of rows per page

  useEffect(() => {
    const fetchModules = async () => {
      try {
        const response = await axios.get<Module[]>(`${import.meta.env.VITE_BASE_URL}/api/dashboard/previewmodule/${id}`,{withCredentials:true});
        setModules(response.data);
      } catch (error) {
        console.error('Error fetching modules:', error);
      }
    };

    fetchModules();
  }, [id]);

  // Get current modules based on the current page
  const indexOfLastModule = currentPage * modulesPerPage;
  const indexOfFirstModule = indexOfLastModule - modulesPerPage;
  const currentModules = modules.slice(indexOfFirstModule, indexOfLastModule);

  // Handle page change
  const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber);

  // Calculate total pages
  const totalPages = Math.ceil(modules.length / modulesPerPage);

  return (
    <div className="overflow-x-auto">
      <h3 className='text-center text-4xl mb-10 text-white'> Project Modules</h3>
      <table className="mb-10 min-w-full table-auto bg-gray-900 text-gray-100 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-800 text-left uppercase text-xs text-gray-400">
            <th className="px-6 py-3">ID</th>
            <th className="px-6 py-3">Module Name</th>
            <th className="px-6 py-3">Module Description</th>
            <th className="px-6 py-3">Created At</th>
            <th className="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {currentModules.length > 0 ? (
            currentModules.map((module) => (
              <tr
                key={module.id}
                className='bg-gray-800 hover:bg-gray-600 transition-all duration-200'
              >
                <td className="px-6 py-4">{module.id}</td>
                <td className="px-6 py-4">{module.name}</td>
                <td className="px-6 py-4">{module.description}</td>
                <td className="px-6 py-4">{new Date(module.createdAt).toLocaleDateString()}</td>
                <td className="px-6 py-4">
                  <Link to={`/previewcard/${id}/${module.id}`}>
                    <button
                      className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300'
                    >
                      View Details
                    </button>
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="px-6 py-4 text-center">
                No modules found for this project.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="flex justify-center space-x-2 mt-6">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            className={`px-4 py-2 border rounded-lg ${
              currentPage === pageNumber ? 'bg-blue-500 text-white' : 'bg-gray-800 text-gray-100'
            }`}
          >
            {pageNumber}
          </button>
        ))}
      </div>
    </div>
  );
};
