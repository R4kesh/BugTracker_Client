// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// export const ReAssignedTaskListTable = () => {
//   const [reAssignedTasks, setReAssignedTasks] = useState([]);
//   const [selectedTask, setSelectedTask] = useState(null); // State to store selected task for modal
//   const [isModalOpen, setIsModalOpen] = useState(false); // Modal open/close state

//   useEffect(() => {
//     const fetchReAssignedTasks = async () => {
//       try {
//         const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/dashboard/reassignlist`);
//         setReAssignedTasks(response.data);
//       } catch (error) {
//         console.error('Error fetching re-assigned tasks:', error);
//       }
//     };

//     fetchReAssignedTasks();
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
//       <h3 className="text-center text-4xl mb-10 text-white">Re-Assigned Task</h3>
//       <table className="mb-10 min-w-full table-auto bg-gray-900 text-gray-100 rounded-lg shadow-md">
//         <thead>
//           <tr className="bg-gray-800 text-left uppercase text-xs text-gray-400">
//             <th className="px-6 py-3">ID</th>
//             <th className="px-6 py-3">Project Name</th>
//             <th className="px-6 py-3">Task Name</th>
//             <th className="px-6 py-3">Reassign ID</th>
//             <th className="px-6 py-3">Severity</th>
//             <th className="px-6 py-3">Failed Steps</th>
//             <th className="px-6 py-3">Tester Name</th>
//             <th className="px-6 py-3">Previous Developer</th>
//             <th className="px-6 py-3">ReAssigned To</th>
//             <th className="px-6 py-3">Deadline</th>
//             <th className="px-6 py-3">Task Status</th>
//             <th className="px-6 py-3">Bug Report</th>

//           </tr>
//         </thead>
//         <tbody>
//           {reAssignedTasks.length > 0 ? (
//             reAssignedTasks.map((task) => (
//               <tr key={task.id} className="hover:bg-gray-600 transition-all duration-200">
//                 <td className="px-6 py-4">{task.id}</td>
//                 <td className="px-6 py-4">{task.project?.name || 'N/A'}</td>
//                 <td className="px-6 py-4">{task.task?.TaskName || 'N/A'}</td>
//                 <td className="px-6 py-4">{task.reassignId || 'N/A'}</td>
//                 <td className="px-6 py-4">{task.severity || 'N/A'}</td>
//                 <td className="px-6 py-4">{Array.isArray(task.bugReport?.steps) ? task.bugReport.steps.join(', ') : 'N/A'}</td>
//                 <td className="px-6 py-4">{task.tester?.name || 'N/A'}</td>
//                 <td className="px-6 py-4">{task.previousDeveloper?.name || 'N/A'}</td>
                
//                 {/* Button to trigger modal for bug report */}
                

//                 <td className="px-6 py-4">{task.reassignedTo?.name || 'N/A'}</td>
//                 <td className="px-6 py-4">{new Date(task.deadline).toLocaleDateString()}</td>
//                 <td className="px-6 py-4 capitalize">{task.status || 'N/A'}</td>
//                 <td className="px-6 py-4">
//                   <button
//                     onClick={() => handleViewMore(task)}
//                     className="bg-blue-500 text-white rounded-md px-2 py-1"
//                   >
//                     View More
//                   </button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan={12} className="text-center py-4">
//                 No reassigned tasks found.
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>

//       {/* Modal for showing task details */}
//       {isModalOpen && selectedTask && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg p-6 max-w-2xl w-full">
//             <h2 className="text-xl mb-4">Task Details for ID: {selectedTask.reassignId}</h2>
//             <p><strong>Task Name:</strong> {selectedTask.task?.TaskName || 'N/A'}</p>
//             <p><strong>Steps:</strong> {selectedTask.bugReport?.steps || 'N/A'}</p>

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


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// export const ReAssignedTaskListTable = () => {
//   const [reAssignedTasks, setReAssignedTasks] = useState([]);
//   const [selectedTask, setSelectedTask] = useState(null); 
//   const [isModalOpen, setIsModalOpen] = useState(false); 
//   const [currentPage, setCurrentPage] = useState(1); // Page state
//   const tasksPerPage = 4; // Limit to 4 rows per page

//   useEffect(() => {
//     const fetchReAssignedTasks = async () => {
//       try {
//         const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/dashboard/reassignlist`);
//         setReAssignedTasks(response.data);
//       } catch (error) {
//         console.error('Error fetching re-assigned tasks:', error);
//       }
//     };

//     fetchReAssignedTasks();
//   }, []);

//   // Pagination logic
//   const indexOfLastTask = currentPage * tasksPerPage;
//   const indexOfFirstTask = indexOfLastTask - tasksPerPage;
//   const currentTasks = reAssignedTasks.slice(indexOfFirstTask, indexOfLastTask);

//   const totalPages = Math.ceil(reAssignedTasks.length / tasksPerPage);

//   // Handlers for pagination
//   const handleNextPage = () => {
//     if (currentPage < totalPages) setCurrentPage(currentPage + 1);
//   };

//   const handlePrevPage = () => {
//     if (currentPage > 1) setCurrentPage(currentPage - 1);
//   };

//   // Open the modal and set the selected task
//   const handleViewMore = (task) => {
//     setSelectedTask(task);
//     setIsModalOpen(true);
//   };

//   // Close the modal
//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setSelectedTask(null);
//   };

//   return (
//     <div className="overflow-x-auto">
//       <h3 className="text-center text-4xl mb-10 text-white">Re-Assigned Task</h3>
//       <table className="mb-10 min-w-full table-auto bg-gray-900 text-gray-100 rounded-lg shadow-md">
//         <thead>
//           <tr className="bg-gray-800 text-left uppercase text-xs text-gray-400">
//             <th className="px-6 py-3">ID</th>
//             <th className="px-6 py-3">Project Name</th>
//             <th className="px-6 py-3">Task Name</th>
//             <th className="px-6 py-3">Reassign ID</th>
//             <th className="px-6 py-3">Severity</th>
//             <th className="px-6 py-3">Failed Steps</th>
//             <th className="px-6 py-3">Tester Name</th>
//             <th className="px-6 py-3">Previous Developer</th>
//             <th className="px-6 py-3">ReAssigned To</th>
//             <th className="px-6 py-3">Deadline</th>
//             <th className="px-6 py-3">Task Status</th>
//             <th className="px-6 py-3">Bug Report</th>
//           </tr>
//         </thead>
//         <tbody>
//           {currentTasks.length > 0 ? (
//             currentTasks.map((task) => (
//               <tr key={task.id} className="hover:bg-gray-600 transition-all duration-200">
//                 <td className="px-6 py-4">{task.id}</td>
//                 <td className="px-6 py-4">{task.project?.name || 'N/A'}</td>
//                 <td className="px-6 py-4">{task.task?.TaskName || 'N/A'}</td>
//                 <td className="px-6 py-4">{task.reassignId || 'N/A'}</td>
//                 <td className="px-6 py-4">{task.severity || 'N/A'}</td>
//                 <td className="px-6 py-4">{Array.isArray(task.bugReport?.steps) ? task.bugReport.steps.join(', ') : 'N/A'}</td>
//                 <td className="px-6 py-4">{task.tester?.name || 'N/A'}</td>
//                 <td className="px-6 py-4">{task.previousDeveloper?.name || 'N/A'}</td>
//                 <td className="px-6 py-4">{task.reassignedTo?.name || 'N/A'}</td>
//                 <td className="px-6 py-4">{new Date(task.deadline).toLocaleDateString()}</td>
//                 <td className="px-6 py-4 capitalize">{task.status || 'N/A'}</td>
//                 <td className="px-6 py-4">
//                   <button
//                     onClick={() => handleViewMore(task)}
//                     className="bg-blue-500 text-white rounded-md px-2 py-1"
//                   >
//                     View More
//                   </button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan={12} className="text-center py-4">
//                 No reassigned tasks found.
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>

//       {/* Pagination buttons */}
//       <div className="flex justify-center space-x-4 mb-6">
//         <button
//           onClick={handlePrevPage}
//           disabled={currentPage === 1}
//           className={`px-4 py-2 bg-gray-700 text-white rounded-md ${currentPage === 1 && 'opacity-50 cursor-not-allowed'}`}
//         >
//           Previous
//         </button>
//         <button
//           onClick={handleNextPage}
//           disabled={currentPage === totalPages}
//           className={`px-4 py-2 bg-gray-700 text-white rounded-md ${currentPage === totalPages && 'opacity-50 cursor-not-allowed'}`}
//         >
//           Next
//         </button>
//       </div>

//       {/* Modal for showing task details */}
//       {isModalOpen && selectedTask && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg p-6 max-w-2xl w-full">
//             <h2 className="text-xl mb-4">Task Details for ID: {selectedTask.reassignId}</h2>
//             <p><strong>Task Name:</strong> {selectedTask.task?.TaskName || 'N/A'}</p>
//             <p><strong>Steps:</strong> {selectedTask.bugReport?.steps || 'N/A'}</p>

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


import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Define the types for the task structure
interface BugReport {
  steps: string[];
  fileLink: string[];
}

interface Developer {
  name: string;
}

interface Task {
  id: number;
  project?: {
    name: string;
  };
  task?: {
    TaskName: string;
  };
  reassignId: string;
  severity: string;
  bugReport?: BugReport;
  tester?: Developer;
  previousDeveloper?: Developer;
  reassignedTo?: Developer;
  deadline: string; // or Date, depending on your API response
  status: string;
}

export const ReAssignedTaskListTable = () => {
  const [reAssignedTasks, setReAssignedTasks] = useState<Task[]>([]);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null); 
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [currentPage, setCurrentPage] = useState(1); // Page state
  const tasksPerPage = 4; // Limit to 4 rows per page

  useEffect(() => {
    const fetchReAssignedTasks = async () => {
      try {
        const response = await axios.get<Task[]>(`${import.meta.env.VITE_BASE_URL}/api/dashboard/reassignlist`);
        setReAssignedTasks(response.data);
      } catch (error) {
        console.error('Error fetching re-assigned tasks:', error);
      }
    };

    fetchReAssignedTasks();
  }, []);

  // Pagination logic
  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = reAssignedTasks.slice(indexOfFirstTask, indexOfLastTask);

  const totalPages = Math.ceil(reAssignedTasks.length / tasksPerPage);

  // Handlers for pagination
  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  // Open the modal and set the selected task
  const handleViewMore = (task: Task) => {
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  // Close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTask(null);
  };

  return (
    <div className="overflow-x-auto">
      <h3 className="text-center text-4xl mb-10 text-white">Re-Assigned Task</h3>
      <table className="mb-10 min-w-full table-auto bg-gray-900 text-gray-100 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-800 text-left uppercase text-xs text-gray-400">
            <th className="px-6 py-3">ID</th>
            <th className="px-6 py-3">Project Name</th>
            <th className="px-6 py-3">Task Name</th>
            <th className="px-6 py-3">Reassign ID</th>
            <th className="px-6 py-3">Severity</th>
            <th className="px-6 py-3">Failed Steps</th>
            <th className="px-6 py-3">Tester Name</th>
            <th className="px-6 py-3">Previous Developer</th>
            <th className="px-6 py-3">ReAssigned To</th>
            <th className="px-6 py-3">Deadline</th>
            <th className="px-6 py-3">Task Status</th>
            <th className="px-6 py-3">Bug Report</th>
          </tr>
        </thead>
        <tbody>
          {currentTasks.length > 0 ? (
            currentTasks.map((task) => (
              <tr key={task.id} className="hover:bg-gray-600 transition-all duration-200">
                <td className="px-6 py-4">{task.id}</td>
                <td className="px-6 py-4">{task.project?.name || 'N/A'}</td>
                <td className="px-6 py-4">{task.task?.TaskName || 'N/A'}</td>
                <td className="px-6 py-4">{task.reassignId || 'N/A'}</td>
                <td className="px-6 py-4">{task.severity || 'N/A'}</td>
                <td className="px-6 py-4">{Array.isArray(task.bugReport?.steps) ? task.bugReport.steps.join(', ') : 'N/A'}</td>
                <td className="px-6 py-4">{task.tester?.name || 'N/A'}</td>
                <td className="px-6 py-4">{task.previousDeveloper?.name || 'N/A'}</td>
                <td className="px-6 py-4">{task.reassignedTo?.name || 'N/A'}</td>
                <td className="px-6 py-4">{new Date(task.deadline).toLocaleDateString()}</td>
                <td className="px-6 py-4 capitalize">{task.status || 'N/A'}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleViewMore(task)}
                    className="bg-blue-500 text-white rounded-md px-2 py-1"
                  >
                    View More
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={12} className="text-center py-4">
                No reassigned tasks found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination buttons */}
      <div className="flex justify-center space-x-4 mb-6">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 bg-gray-700 text-white rounded-md ${currentPage === 1 && 'opacity-50 cursor-not-allowed'}`}
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 bg-gray-700 text-white rounded-md ${currentPage === totalPages && 'opacity-50 cursor-not-allowed'}`}
        >
          Next
        </button>
      </div>

      {/* Modal for showing task details */}
      {isModalOpen && selectedTask && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full">
            <h2 className="text-xl mb-4">Task Details for ID: {selectedTask.reassignId}</h2>
            <p><strong>Task Name:</strong> {selectedTask.task?.TaskName || 'N/A'}</p>
            <p><strong>Steps:</strong> {selectedTask.bugReport?.steps.join(', ') || 'N/A'}</p>

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
