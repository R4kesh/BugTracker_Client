// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// export const ProjectList = () => {
//   const [projects, setProjects] = useState([]);

//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/project/display`);
        
//        // Check what the API returns

//         // Ensure response.data is an array. If it's not, handle it.
//         const projectData = Array.isArray(response.data) ? response.data : [];
//         setProjects(projectData); // Set the fetched projects to state
//       } catch (error) {
//         console.error('Error fetching projects:', error);
//       }
//     };

//     fetchProjects(); // Fetch the data when the component mounts
//   }, [projects]);

//   return (
//     <div className="overflow-x-auto">
//       <h3 className="text-center text-4xl mb-10 text-white">Projects</h3>
//       <table className="mb-10 min-w-full table-auto bg-gray-900 text-gray-100 rounded-lg shadow-md">
//         <thead>
//           <tr className="bg-gray-800 text-left uppercase text-xs text-gray-400">
//             <th className="px-6 py-3">ID</th>
//             <th className="px-6 py-3">Project Name</th>
//             <th className="px-6 py-3">Description</th>
//             <th className="px-6 py-3">Start Date</th>
//             <th className="px-6 py-3">Status</th>
//             <th className="px-6 py-3">Task</th>
            

//           </tr>
//         </thead>
//         <tbody>
//           {projects.length > 0 ? (
//             projects.map((project) => (
//               <tr key={project.id} className="hover:bg-gray-600 transition-all duration-200">
//                 <td className="px-6 py-4">{project.id}</td>
//                 <td className="px-6 py-4">{project.name}</td>
//                 <td className="px-6 py-4">{project.description}</td>
//                 <td className="px-6 py-4">{new Date(project.startDate).toLocaleDateString()}</td>
//                 <td className="px-6 py-4 capitalize">{project.status}</td>
//                 <td className="px-6 py-4">
//                 <Link to={`/projectModule/${project.id}`}> <button
//                     className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
//                     onClick={() => console.log(`Adding task to project ${project.id}`)}
//                   >
//                     View Module
//                   </button></Link>
                 
//                 </td>
  
//               </tr>
//             ))
//           ) : (
//             <tr>
//              <td colSpan={6} className="text-center py-4">No projects found.</td>

//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// export const ProjectList = () => {
//   const [projects, setProjects] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const projectsPerPage = 4; // Set the number of projects per page

//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/project/display`);

//         // Ensure response.data is an array. If it's not, handle it.
//         const projectData = Array.isArray(response.data) ? response.data : [];
//         setProjects(projectData); // Set the fetched projects to state
//       } catch (error) {
//         console.error('Error fetching projects:', error);
//       }
//     };

//     fetchProjects(); // Fetch the data when the component mounts
//   }, [projects]);

//   // Pagination logic
//   const indexOfLastProject = currentPage * projectsPerPage;
//   const indexOfFirstProject = indexOfLastProject - projectsPerPage;
//   const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

//   // Handle page change
//   const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

//   // Create page numbers for pagination controls
//   const totalPages = Math.ceil(projects.length / projectsPerPage);
//   const pageNumbers = [];
//   for (let i = 1; i <= totalPages; i++) {
//     pageNumbers.push(i);
//   }

//   return (
//     <div className="overflow-x-auto">
//       <h3 className="text-center text-4xl mb-10 text-white">Projects</h3>
//       <table className="mb-10 min-w-full table-auto bg-gray-900 text-gray-100 rounded-lg shadow-md">
//         <thead>
//           <tr className="bg-gray-800 text-left uppercase text-xs text-gray-400">
//             <th className="px-6 py-3">ID</th>
//             <th className="px-6 py-3">Project Name</th>
//             <th className="px-6 py-3">Description</th>
//             <th className="px-6 py-3">Start Date</th>
//             <th className="px-6 py-3">Status</th>
//             <th className="px-6 py-3">Task</th>
//           </tr>
//         </thead>
//         <tbody>
//           {currentProjects.length > 0 ? (
//             currentProjects.map((project) => (
//               <tr key={project.id} className="hover:bg-gray-600 transition-all duration-200">
//                 <td className="px-6 py-4">{project.id}</td>
//                 <td className="px-6 py-4">{project.name}</td>
//                 <td className="px-6 py-4">{project.description}</td>
//                 <td className="px-6 py-4">{new Date(project.startDate).toLocaleDateString()}</td>
//                 <td className="px-6 py-4 capitalize">{project.status}</td>
//                 <td className="px-6 py-4">
//                   <Link to={`/projectModule/${project.id}`}>
//                     <button
//                       className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
//                     >
//                       View Module
//                     </button>
//                   </Link>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan={6} className="text-center py-4">No projects found.</td>
//             </tr>
//           )}
//         </tbody>
//       </table>

//       {/* Pagination Controls */}
//       <div className="flex justify-center space-x-2">
//         {pageNumbers.map((number) => (
//           <button
//             key={number}
//             onClick={() => handlePageChange(number)}
//             className={`px-4 py-2 border border-gray-300 rounded-lg ${
//               currentPage === number ? 'bg-blue-500 text-white' : 'bg-gray-800 text-gray-100'
//             }`}
//           >
//             {number}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// Define the project type based on your data model
interface Project {
  id: number;
  name: string;
  description: string;
  startDate: string;
  status: string;
  completionDate: string
}

export const ProjectList: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const projectsPerPage = 4; // Set the number of projects per page

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get<Project[]>(`${import.meta.env.VITE_BASE_URL}/api/project/display`,{withCredentials:true});

        // Ensure response.data is an array. If it's not, handle it.
        const projectData = Array.isArray(response.data) ? response.data : [];
        setProjects(projectData); // Set the fetched projects to state
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects(); // Fetch the data when the component mounts
  }, [projects]);

  // Pagination logic
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  // Handle page change
  const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber);

  // Create page numbers for pagination controls
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const pageNumbers: number[] = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="overflow-x-auto">
      <h3 className="text-center text-4xl mb-10 text-white">Projects</h3>
      <table className="mb-10 min-w-full table-auto bg-gray-900 text-gray-100 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-800 text-left uppercase text-xs text-gray-400">
            <th className="px-6 py-3">ID</th>
            <th className="px-6 py-3">Project Name</th>
            <th className="px-6 py-3">Description</th>
            <th className="px-6 py-3">Start Date</th>
            <th className="px-6 py-3">Last Date</th>
            <th className="px-6 py-3">Status</th>
            <th className="px-6 py-3">Task</th>
          </tr>
        </thead>
        <tbody>
          {currentProjects.length > 0 ? (
            currentProjects.map((project) => (
              <tr key={project.id} className="hover:bg-gray-600 transition-all duration-200">
                <td className="px-6 py-4">{project.id}</td>
                <td className="px-6 py-4">{project.name}</td>
                <td className="px-6 py-4">{project.description}</td>
                <td className="px-6 py-4">{new Date(project.startDate).toLocaleDateString()}</td>
                <td className="px-6 py-4">{new Date(project.completionDate).toLocaleDateString()}</td>
                <td className="px-6 py-4 capitalize">{project.status}</td>
                <td className="px-6 py-4">
                  <Link to={`/projectModule/${project.id}`}>
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                    >
                      View Module
                    </button>
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6} className="text-center py-4">No projects found.</td>
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
            className={`px-4 py-2 border border-gray-300 rounded-lg ${
              currentPage === number ? 'bg-blue-500 text-white' : 'bg-gray-800 text-gray-100'
            }`}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};
