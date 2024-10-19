// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// export const ReAssignTaskTable = () => {
//   const [reAssignedTasks, setReAssignedTasks] = useState([]);
//   const [selectedTask, setSelectedTask] = useState(null); // State to store selected task for modal
//   const [isModalOpen, setIsModalOpen] = useState(false); // Modal open/close state

//   useEffect(() => {
//     const fetchReAssignedTasks = async () => {
//       try {
//         const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/tester/reassignlist`);
//         setReAssignedTasks(response.data);
//       } catch (error) {
//         console.error('Error fetching re-assigned tasks:', error);
//       }
//     };

//     fetchReAssignedTasks(); // Call the fetch function
//   }, []);

//   // Open the modal and set the selected task
//   const handleViewMore = (task) => {
//     setSelectedTask(task);
//     setIsModalOpen(true);
//   };

//   // Close the modal
//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setSelectedTask(null); // Clear the selected task when closing
//   };

//   return (
//     <div className="overflow-x-auto">
//       <h3 className="text-center text-4xl mb-10 text-white">Re-Assigned Tasks</h3>

//       <table className="mb-10 min-w-full table-auto bg-gray-900 text-gray-100 rounded-lg shadow-md">
//         <thead>
//           <tr className="bg-gray-800 text-left uppercase text-xs text-gray-400">
//             <th className="px-6 py-3">ID</th>
//             <th className="px-6 py-3">Project Name</th>
//             <th className="px-6 py-3">Task Name</th>
//             <th className="px-6 py-3">Task Description</th>
//             <th className="px-6 py-3">Previous Developer</th>
//             <th className="px-6 py-3">Severity</th>
//             <th className="px-6 py-3">Status</th>
//             <th className="px-6 py-3">Bug Reported</th>
//             <th className="px-6 py-3">Test Case</th>
//           </tr>
//         </thead>
//         <tbody>
//           {reAssignedTasks.length > 0 ? (
//             reAssignedTasks.map((task) => (
//               <tr key={task.id} className="hover:bg-gray-600 transition-all duration-200">
//                 <td className="px-6 py-4">{task.id}</td>
//                 <td className="px-6 py-4">{task.project?.name || 'N/A'}</td>
//                 <td className="px-6 py-4">{task.task?.TaskName || 'N/A'}</td>
//                 <td className="px-6 py-4">{task.task?.description || 'N/A'}</td>
//                 <td className="px-6 py-4">{task.previousDeveloper?.name || 'N/A'}</td>
//                 <td className="px-6 py-4">{task.severity || 'N/A'}</td>
//                 <td className="px-6 py-4 capitalize">{task.task.status || 'N/A'}</td>
//                 <td className="px-6 py-4">
//                   <button
//                     onClick={() => handleViewMore(task)}
//                     className="bg-blue-500 text-white rounded-md px-2 py-1"
//                   >
//                     View More
//                   </button>
//                 </td>
//                 <td className="px-6 py-4">
//                   <Link to={`/testcase/${task.id}`}>
//                     <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300">
//                       Add TestCase
//                     </button>
//                   </Link>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan={9} className="text-center py-4">
//                 No tasks found.
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>

//       {/* Modal for showing task details */}
//       {isModalOpen && selectedTask && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg p-6 max-w-2xl w-full">
//             <h2 className="text-xl mb-4">Task Details for ID: {selectedTask.id}</h2>
//             <p><strong>Task Name:</strong> {selectedTask.task?.TaskName || 'N/A'}</p>
//             <p><strong>Description:</strong> {selectedTask.task?.description || 'N/A'}</p>

//             {/* Display image previews if available */}
//             <div className="grid grid-cols-2 gap-4 mt-4">
//               {Array.isArray(selectedTask.bugReport?.fileLink) && selectedTask.bugReport.fileLink.length > 0 ? (
//                 selectedTask.bugReport.fileLink.map((file, index) => {
//                   const imageUrl = `${import.meta.env.VITE_BASE_URL}${file}`;
//                   return (
//                     <img
//                       key={index}
//                       src={imageUrl}
//                       alt={`Uploaded file ${index + 1}`}
//                       className="mb-4 w-full h-auto"
//                     />
//                   );
//                 })
//               ) : (
//                 <p>No images uploaded</p>
//               )}
//             </div>

//             <button
//               className="mt-4 bg-blue-500 text-white rounded-md px-4 py-2"
//               onClick={handleCloseModal}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };


// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// export const ReAssignTaskTable = () => {
//   const [reAssignedTasks, setReAssignedTasks] = useState([]);
//   const [selectedTask, setSelectedTask] = useState(null); // State to store selected task for modal
//   const [isModalOpen, setIsModalOpen] = useState(false); // Modal open/close state
//   const [currentPage, setCurrentPage] = useState(1); // State to track current page
//   const rowsPerPage = 4; // Limit to 4 rows per page

//   useEffect(() => {
//     const fetchReAssignedTasks = async () => {
//       try {
//         const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/tester/reassignlist`);
//         setReAssignedTasks(response.data);
//       } catch (error) {
//         console.error('Error fetching re-assigned tasks:', error);
//       }
//     };

//     fetchReAssignedTasks(); // Call the fetch function
//   }, []);

//   // Open the modal and set the selected task
//   const handleViewMore = (task) => {
//     setSelectedTask(task);
//     setIsModalOpen(true);
//   };

//   // Close the modal
//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setSelectedTask(null); // Clear the selected task when closing
//   };

//   // Pagination logic: Get tasks for the current page
//   const indexOfLastTask = currentPage * rowsPerPage;
//   const indexOfFirstTask = indexOfLastTask - rowsPerPage;
//   const currentTasks = reAssignedTasks.slice(indexOfFirstTask, indexOfLastTask);

//   // Handle changing pages
//   const nextPage = () => {
//     if (currentPage < Math.ceil(reAssignedTasks.length / rowsPerPage)) {
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
//       <h3 className="text-center text-4xl mb-10 text-white">Re-Assigned Tasks</h3>

//       <table className="mb-10 min-w-full table-auto bg-gray-900 text-gray-100 rounded-lg shadow-md">
//         <thead>
//           <tr className="bg-gray-800 text-left uppercase text-xs text-gray-400">
//             <th className="px-6 py-3">ID</th>
//             <th className="px-6 py-3">Project Name</th>
//             <th className="px-6 py-3">Task Name</th>
//             <th className="px-6 py-3">Task Description</th>
//             <th className="px-6 py-3">Previous Developer</th>
//             <th className="px-6 py-3">Severity</th>
//             <th className="px-6 py-3">Status</th>
//             <th className="px-6 py-3">Bug Reported</th>
//             <th className="px-6 py-3">Test Case</th>
//           </tr>
//         </thead>
//         <tbody>
//           {currentTasks.length > 0 ? (
//             currentTasks.map((task) => (
//               <tr key={task.id} className="hover:bg-gray-600 transition-all duration-200">
//                 <td className="px-6 py-4">{task.id}</td>
//                 <td className="px-6 py-4">{task.project?.name || 'N/A'}</td>
//                 <td className="px-6 py-4">{task.task?.TaskName || 'N/A'}</td>
//                 <td className="px-6 py-4">{task.task?.description || 'N/A'}</td>
//                 <td className="px-6 py-4">{task.previousDeveloper?.name || 'N/A'}</td>
//                 <td className="px-6 py-4">{task.severity || 'N/A'}</td>
//                 <td className="px-6 py-4 capitalize">{task.task.status || 'N/A'}</td>
//                 <td className="px-6 py-4">
//                   <button
//                     onClick={() => handleViewMore(task)}
//                     className="bg-blue-500 text-white rounded-md px-2 py-1"
//                   >
//                     View More
//                   </button>
//                 </td>
//                 <td className="px-6 py-4">
//                   <Link to={`/testcase/${task.id}`}>
//                     <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300">
//                       Add TestCase
//                     </button>
//                   </Link>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan={9} className="text-center py-4">
//                 No tasks found.
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>

//       {/* Pagination controls */}
//       <div className="flex justify-center items-center space-x-4 mb-4">
//         <button
//           onClick={prevPage}
//           disabled={currentPage === 1}
//           className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ${currentPage === 1 && 'opacity-50 cursor-not-allowed'}`}
//         >
//           Previous
//         </button>
//         <span className="text-white">Page {currentPage}</span>
//         <button
//           onClick={nextPage}
//           disabled={currentPage >= Math.ceil(reAssignedTasks.length / rowsPerPage)}
//           className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ${currentPage >= Math.ceil(reAssignedTasks.length / rowsPerPage) && 'opacity-50 cursor-not-allowed'}`}
//         >
//           Next
//         </button>
//       </div>

//       {/* Modal for showing task details */}
//       {isModalOpen && selectedTask && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg p-6 max-w-2xl w-full">
//             <h2 className="text-xl mb-4">Task Details for ID: {selectedTask.id}</h2>
//             <p><strong>Task Name:</strong> {selectedTask.task?.TaskName || 'N/A'}</p>
//             <p><strong>Description:</strong> {selectedTask.task?.description || 'N/A'}</p>

//             {/* Display image previews if available */}
//             <div className="grid grid-cols-2 gap-4 mt-4">
//               {Array.isArray(selectedTask.bugReport?.fileLink) && selectedTask.bugReport.fileLink.length > 0 ? (
//                 selectedTask.bugReport.fileLink.map((file, index) => {
//                   const imageUrl = `${import.meta.env.VITE_BASE_URL}${file}`;
//                   return (
//                     <img
//                       key={index}
//                       src={imageUrl}
//                       alt={`Uploaded file ${index + 1}`}
//                       className="mb-4 w-full h-auto"
//                     />
//                   );
//                 })
//               ) : (
//                 <p>No images uploaded</p>
//               )}
//             </div>

//             <button
//               className="mt-4 bg-blue-500 text-white rounded-md px-4 py-2"
//               onClick={handleCloseModal}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };



import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// Define TypeScript interfaces for the data structures
interface Project {
  name: string;
}

interface Task {
  TaskName: string;
  description: string;
  status: string;
}

interface Developer {
  name: string;
}

interface BugReport {
  fileLink: string[];
}

interface ReAssignedTask {
  id: number;
  project?: Project;
  task?: Task;
  previousDeveloper?: Developer;
  severity: string;
  bugReport?: BugReport;
}

export const ReAssignTaskTable: React.FC = () => {
  const [reAssignedTasks, setReAssignedTasks] = useState<ReAssignedTask[]>([]);
  const [selectedTask, setSelectedTask] = useState<ReAssignedTask | null>(null); // State to store selected task for modal
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // Modal open/close state
  const [currentPage, setCurrentPage] = useState<number>(1); // State to track current page
  const rowsPerPage = 4; // Limit to 4 rows per page

  useEffect(() => {
    const fetchReAssignedTasks = async () => {
      try {
        const response = await axios.get<ReAssignedTask[]>(`${import.meta.env.VITE_BASE_URL}/api/tester/reassignlist`);
        setReAssignedTasks(response.data);
      } catch (error) {
        console.error('Error fetching re-assigned tasks:', error);
      }
    };

    fetchReAssignedTasks(); // Call the fetch function
  }, []);

  // Open the modal and set the selected task
  const handleViewMore = (task: ReAssignedTask) => {
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  // Close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTask(null); // Clear the selected task when closing
  };

  // Pagination logic: Get tasks for the current page
  const indexOfLastTask = currentPage * rowsPerPage;
  const indexOfFirstTask = indexOfLastTask - rowsPerPage;
  const currentTasks = reAssignedTasks.slice(indexOfFirstTask, indexOfLastTask);

  // Handle changing pages
  const nextPage = () => {
    if (currentPage < Math.ceil(reAssignedTasks.length / rowsPerPage)) {
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
      <h3 className="text-center text-4xl mb-10 text-white">Re-Assigned Tasks</h3>

      <table className="mb-10 min-w-full table-auto bg-gray-900 text-gray-100 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-800 text-left uppercase text-xs text-gray-400">
            <th className="px-6 py-3">ID</th>
            <th className="px-6 py-3">Project Name</th>
            <th className="px-6 py-3">Task Name</th>
            <th className="px-6 py-3">Task Description</th>
            <th className="px-6 py-3">Previous Developer</th>
            <th className="px-6 py-3">Severity</th>
            <th className="px-6 py-3">Status</th>
            <th className="px-6 py-3">Bug Reported</th>
            <th className="px-6 py-3">Test Case</th>
          </tr>
        </thead>
        <tbody>
          {currentTasks.length > 0 ? (
            currentTasks.map((task) => (
              <tr key={task.id} className="hover:bg-gray-600 transition-all duration-200">
                <td className="px-6 py-4">{task.id}</td>
                <td className="px-6 py-4">{task.project?.name || 'N/A'}</td>
                <td className="px-6 py-4">{task.task?.TaskName || 'N/A'}</td>
                <td className="px-6 py-4">{task.task?.description || 'N/A'}</td>
                <td className="px-6 py-4">{task.previousDeveloper?.name || 'N/A'}</td>
                <td className="px-6 py-4">{task.severity || 'N/A'}</td>
                <td className="px-6 py-4 capitalize">{task.task?.status || 'N/A'}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleViewMore(task)}
                    className="bg-blue-500 text-white rounded-md px-2 py-1"
                  >
                    View More
                  </button>
                </td>
                <td className="px-6 py-4">
                  <Link to={`/testcase/${task.id}`}>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300">
                      Add TestCase
                    </button>
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={9} className="text-center py-4">
                No tasks found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination controls */}
      <div className="flex justify-center items-center space-x-4 mb-4">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ${currentPage === 1 && 'opacity-50 cursor-not-allowed'}`}
        >
          Previous
        </button>
        <span className="text-white">Page {currentPage}</span>
        <button
          onClick={nextPage}
          disabled={currentPage >= Math.ceil(reAssignedTasks.length / rowsPerPage)}
          className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ${currentPage >= Math.ceil(reAssignedTasks.length / rowsPerPage) && 'opacity-50 cursor-not-allowed'}`}
        >
          Next
        </button>
      </div>

      {/* Modal for showing task details */}
      {isModalOpen && selectedTask && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full">
            <h2 className="text-xl mb-4">Task Details for ID: {selectedTask.id}</h2>
            <p><strong>Task Name:</strong> {selectedTask.task?.TaskName || 'N/A'}</p>
            <p><strong>Description:</strong> {selectedTask.task?.description || 'N/A'}</p>

            {/* Display image previews if available */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              {Array.isArray(selectedTask.bugReport?.fileLink) && selectedTask.bugReport.fileLink.length > 0 ? (
                selectedTask.bugReport.fileLink.map((file, index) => {
                  const imageUrl = `${import.meta.env.VITE_BASE_URL}${file}`;
                  return (
                    <img
                      key={index}
                      src={imageUrl}
                      alt={`Uploaded file ${index + 1}`}
                      className="mb-4 w-full h-auto"
                    />
                  );
                })
              ) : (
                <p>No images uploaded</p>
              )}
            </div>

            <button
              className="mt-4 bg-blue-500 text-white rounded-md px-4 py-2"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};