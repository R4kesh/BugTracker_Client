// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// export function ProjectPreviewCard() {

//     const[projects,setProjects]=useState([])

//     useEffect(() => {
//         const fetchProjects = async () => {
//           try {
//             const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/dashboard/projectpreview`); // Replace with your API URL
         
//             setProjects(response.data);
            
//           } catch (error) {
//             console.error("Error fetching projects", error);
//           }
//         };
    
//         fetchProjects();
//       }, []);

//   return (
//     <div className="max-w-7xl mx-auto px-8 py-10">
//     <h2 className="text-4xl font-bold mb-10 text-center text-white">Project Overview</h2>
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//       {projects.map((project) => (
//         <motion.div
//           key={project.id}
//           whileHover={{ scale: 1.05, boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)" }}
//           transition={{ duration: 0.3 }}
//           className="bg-white shadow-lg rounded-lg overflow-hidden transition-shadow duration-300 transform hover:translate-y-1"
//         >
//           <div className="p-6">
//             {/* Title */}
//             <h3 className="text-2xl font-semibold mb-3 text-gray-900">{project.name}</h3>

//             {/* Description */}
//             <p className="text-gray-600 text-sm mb-4">
//               {project.description}
//             </p>

//             {/* Status */}
//             <div className="text-sm font-medium mb-4">
//               <span
//                 className={`px-3 py-1 rounded-full text-white ${
//                   project.status === 'completed'
//                     ? 'bg-green-500'
//                     : project.status === 'in-progress'
//                     ? 'bg-blue-500'
//                     : project.status === 'on-hold'
//                     ? 'bg-yellow-500'
//                     : 'bg-gray-500'
//                 }`}
//               >
//                 {project.status.replace('-', ' ')}
//               </span>
//             </div>

//             {/* Start Date */}
//             <p className="text-gray-500 text-xs mb-4">
//               <strong>Start Date:</strong> {new Date(project.startDate).toLocaleDateString()}
//             </p>

//             {/* Link to project */}
//             <Link
//               to={`/previewmodule/${project.id}`}
//               className="inline-block text-blue-600 font-bold hover:underline"
//             >
//               <motion.button
//                 whileHover={{ scale: 1.1 }}
//                 transition={{ duration: 0.3 }}
//                 className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
//               >
//                 View Project Details →
//               </motion.button>
//             </Link>
//           </div>
//         </motion.div>
//       ))}
//     </div>
//   </div>
//   );
// }


import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function ProjectPreviewCard() {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6; // Number of projects to display per page

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/dashboard/projectpreview`); // Replace with your API URL
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects", error);
      }
    };

    fetchProjects();
  }, []);

  // Get current projects based on the current page
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  // Handle page change
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate total pages
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  return (
    <div className="max-w-7xl mx-auto px-8 py-10">
      <h2 className="text-4xl font-bold mb-10 text-center text-white">Project Overview</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentProjects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.05, boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)" }}
            transition={{ duration: 0.3 }}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-shadow duration-300 transform hover:translate-y-1"
          >
            <div className="p-6">
              {/* Title */}
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">{project.name}</h3>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4">
                {project.description}
              </p>

              {/* Status */}
              <div className="text-sm font-medium mb-4">
                <span
                  className={`px-3 py-1 rounded-full text-white ${
                    project.status === 'completed'
                      ? 'bg-green-500'
                      : project.status === 'in-progress'
                      ? 'bg-blue-500'
                      : project.status === 'on-hold'
                      ? 'bg-yellow-500'
                      : 'bg-gray-500'
                  }`}
                >
                  {project.status.replace('-', ' ')}
                </span>
              </div>

              {/* Start Date */}
              <p className="text-gray-500 text-xs mb-4">
                <strong>Start Date:</strong> {new Date(project.startDate).toLocaleDateString()}
              </p>

              {/* Link to project */}
              <Link
                to={`/previewmodule/${project.id}`}
                className="inline-block text-blue-600 font-bold hover:underline"
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
                >
                  View Project Details →
                </motion.button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

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
}
