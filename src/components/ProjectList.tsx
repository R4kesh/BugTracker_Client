
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { FaEdit } from "react-icons/fa";
// import { RiDeleteBin5Line } from 'react-icons/ri';

// // Define the project type based on your data model
// interface Project {
//   id: number;
//   name: string;
//   description: string;
//   startDate: string;
//   status: string;
//   completionDate: string
// }

// export const ProjectList: React.FC = () => {
//   const [projects, setProjects] = useState<Project[]>([]);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const projectsPerPage = 4; // Set the number of projects per page

//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const response = await axios.get<Project[]>(`${import.meta.env.VITE_BASE_URL}/api/project/display`,{withCredentials:true});

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
//   const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber);

//   // Create page numbers for pagination controls
//   const totalPages = Math.ceil(projects.length / projectsPerPage);
//   const pageNumbers: number[] = [];
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
//             <th className="px-6 py-3">Last Date</th>
//             <th className="px-6 py-3">Status</th>
//             <th className="px-6 py-3">Task</th>
//             <th className="px-6 py-3"> Action</th>

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
//                 <td className="px-6 py-4">{new Date(project.completionDate).toLocaleDateString()}</td>
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
//                 <td className="px-6 py-4 flex items-center justify-between h-full ">
//                 <FaEdit
//                     size={30}
//                     className="text-blue-400 cursor-pointer hover:text-blue-700"
                   
//                   />
//                   <RiDeleteBin5Line
//                     size={30}
//                     className="text-red-400 cursor-pointer hover:text-red-700"
//                   />
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
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from 'react-icons/ri';

// Define the project type based on your data model
interface Project {
  id: number;
  name: string;
  description: string;
  startDate: string;
  status: string;
  completionDate: string;
}

export const ProjectList: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const projectsPerPage = 4; // Set the number of projects per page

  // State for the edit modal
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [editedProject, setEditedProject] = useState<Project | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get<Project[]>(`${import.meta.env.VITE_BASE_URL}/api/project/display`, { withCredentials: true });
        const projectData = Array.isArray(response.data) ? response.data : [];
        setProjects(projectData);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };
    fetchProjects();
  }, [projects]);

  // Pagination logic
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber);
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const pageNumbers: number[] = [];
  for (let i = 1; i <= totalPages; i++) pageNumbers.push(i);

  // Open modal to edit project
  const openEditModal = (project: Project) => {
    setSelectedProject(project);
    setEditedProject({ ...project });
    setIsModalOpen(true);
  };

  // Handle input changes in the modal
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    if (editedProject) {
      setEditedProject({ ...editedProject, [e.target.name]: e.target.value });
    }
  };

  // Handle project update (can integrate API call)
  const handleUpdateProject = async () => {
    if (editedProject) {
      try {
        await axios.put(`${import.meta.env.VITE_BASE_URL}/api/project/update/${editedProject.id}`, editedProject, { withCredentials: true });
        setIsModalOpen(false); // Close modal after successful update
      } catch (error) {
        console.error('Error updating project:', error);
      }
    }
  };

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
            <th className="px-6 py-3">Action</th>
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
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300">View Module</button>
                  </Link>
                </td>
                <td className="px-6 py-4 flex items-center justify-between h-full ">
                  <FaEdit size={30} className="text-blue-400 cursor-pointer hover:text-blue-700" onClick={() => openEditModal(project)} />
                  {/* <RiDeleteBin5Line size={30} className="text-red-400 cursor-pointer hover:text-red-700" /> */}
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
          <button key={number} onClick={() => handlePageChange(number)} className={`px-4 py-2 border border-gray-300 rounded-lg ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-gray-800 text-gray-100'}`}>
            {number}
          </button>
        ))}
      </div>

      {/* Edit Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl mb-4 text-white">Edit Project</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-300 mb-2">Project Name</label>
                <input type="text" name="name" value={editedProject?.name} onChange={handleInputChange} className="w-full p-2 rounded bg-gray-700 text-gray-300" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-300 mb-2">Description</label>
                <textarea name="description" value={editedProject?.description} onChange={handleInputChange} className="w-full p-2 rounded bg-gray-700 text-gray-300" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-300 mb-2">Status</label>
                <select name="status" value={editedProject?.status} onChange={handleInputChange} className="w-full p-2 rounded bg-gray-700 text-gray-300">
                  <option value="pending">Pending</option>
                  <option value="in progress">In Progress</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
              <div className="flex justify-end">
                <button type="button" onClick={() => setIsModalOpen(false)} className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg mr-2">Cancel</button>
                <button type="button" onClick={handleUpdateProject} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg">Save</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
