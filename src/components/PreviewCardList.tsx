// import { useEffect, useState } from "react";
// import axios from "axios";
// import { motion } from "framer-motion";
// import { useParams } from "react-router-dom";

// export function PreviewCardList() {
//   const { id, epicId } = useParams();

//   const [tasks, setTasks] = useState([]);

//   useEffect(() => {
//     const fetchTasks = async () => {
//       try {
//         const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/dashboard/previewcard/${epicId}`);
//         setTasks(response.data);
//       } catch (error) {
//         console.error("Error fetching tasks", error);
//       }
//     };

//     fetchTasks();
//   }, [epicId]);

//   return (
//     <div className="max-w-7xl mx-auto px-8 py-10">
//       <h2 className="text-4xl font-bold mb-10 text-center text-white">Project Tasks</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {tasks.length > 0 ? (
//           tasks.map((task) => (
//             <motion.div
//               key={task.id}
//               whileHover={{ scale: 1.05, boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)" }}
//               transition={{ duration: 0.3 }}
//               className="bg-white shadow-lg rounded-lg overflow-hidden transition-shadow duration-300 transform hover:translate-y-1"
//             >
//               <div className="p-6">
//                 {/* Project Name */}
//                 <h1 className="text-3xl font-bold mb-3 text-gray-900">Project:{task.projectName}</h1>

//                 {/* Module Name (Epic Name) */}
//                 <h2 className="text-2xl font-semibold mb-3 text-gray-900">Epic:{task.epicName}</h2>

//                 <p className="text-gray-600 text-sm mb-4"><strong>Task Name:</strong> {task.taskName}</p>

//                 <p className="text-gray-600 text-sm mb-4"><strong>Task Description:</strong>{task.description}</p>

//                 <p className="text-gray-600 text-sm mb-4"><strong>User Story:</strong> {task.userStory}</p>
//                 {/* Assigned User */}
//                 <p className="text-gray-600 text-sm mb-4"><strong>Assigned To:</strong> {task.assignedUserName}</p>


//                 {/* User Story */}

//                 {/* Task Description */}

//                 {/* Task Status */}
//                 <div className="text-sm font-medium mb-4">
//                   <p>Status:</p>
//                   <span
//                     className={`px-3 py-1 rounded-full text-white ${
//                       task.status === 'completed'
//                         ? 'bg-green-500'
//                         : task.status === 'in-progress'
//                         ? 'bg-blue-500'
//                         : task.status === 'pending'
//                         ? 'bg-yellow-500'
//                         : 'bg-gray-500'
//                     }`}
//                   >
//                     {task.status ? task.status.replace('-', ' ') : 'Unknown Status'}
//                   </span>
//                 </div>

//                 {/* Start Date */}
//                 <p className="text-gray-500 text-xs mb-4">
//                   <strong>Start Date:</strong> {new Date(task.starting).toLocaleDateString()}
//                 </p>

//                 {/* Deadline */}
//                 <p className="text-gray-500 text-xs mb-4">
//                   <strong>Deadline:</strong> {new Date(task.deadline).toLocaleDateString()}
//                 </p>
//               </div>
//             </motion.div>
//           ))
//         ) : (
//           <div className="text-center text-white col-span-full">No tasks found for this module.</div>
//         )}
//       </div>
//     </div>
//   );
// }

// import { useEffect, useState } from "react";
// import axios from "axios";
// import { motion } from "framer-motion";
// import { useParams } from "react-router-dom";

// export function PreviewCardList() {
//   const { epicId } = useParams(); // Remove `id` since it's not used in the current context

//   const [tasks, setTasks] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1); // State to keep track of the current page
//   const tasksPerPage = 3; // Define how many tasks per page

//   useEffect(() => {
//     const fetchTasks = async () => {
//       try {
//         const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/dashboard/previewcard/${epicId}`);
//         setTasks(response.data);
//       } catch (error) {
//         console.error("Error fetching tasks", error);
//       }
//     };

//     fetchTasks();
//   }, [epicId]);

//   // Calculate the indexes of tasks for the current page
//   const indexOfLastTask = currentPage * tasksPerPage;
//   const indexOfFirstTask = indexOfLastTask - tasksPerPage;
//   const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);

//   // Handle "Next" and "Previous" page clicks
//   const nextPage = () => {
//     if (currentPage < Math.ceil(tasks.length / tasksPerPage)) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const prevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-8 py-10">
//       <h2 className="text-4xl font-bold mb-10 text-center text-white">Project Tasks</h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {currentTasks.length > 0 ? (
//           currentTasks.map((task) => (
//             <motion.div
//               key={task.id}
//               whileHover={{ scale: 1.05, boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)" }}
//               transition={{ duration: 0.3 }}
//               className="bg-white shadow-lg rounded-lg overflow-hidden transition-shadow duration-300 transform hover:translate-y-1"
//             >
//               <div className="p-6">
//                 <h1 className="text-3xl font-bold mb-3 text-gray-900">Project: {task.projectName}</h1>
//                 <h2 className="text-2xl font-semibold mb-3 text-gray-900">Epic: {task.epicName}</h2>
//                 <p className="text-gray-600 text-sm mb-4"><strong>Task Name:</strong> {task.taskName}</p>
//                 <p className="text-gray-600 text-sm mb-4"><strong>Task Description:</strong> {task.description}</p>
//                 <p className="text-gray-600 text-sm mb-4"><strong>User Story:</strong> {task.userStory}</p>
//                 <p className="text-gray-600 text-sm mb-4"><strong>Assigned To:</strong> {task.assignedUserName}</p>
                
//                 <div className="text-sm font-medium mb-4">
//                   <p>Status:</p>
//                   <span
//                     className={`px-3 py-1 rounded-full text-white ${
//                       task.status === 'completed'
//                         ? 'bg-green-500'
//                         : task.status === 'in-progress'
//                         ? 'bg-blue-500'
//                         : task.status === 'pending'
//                         ? 'bg-yellow-500'
//                         : 'bg-gray-500'
//                     }`}
//                   >
//                     {task.status ? task.status.replace('-', ' ') : 'Unknown Status'}
//                   </span>
//                 </div>

//                 <p className="text-gray-500 text-xs mb-4">
//                   <strong>Start Date:</strong> {new Date(task.starting).toLocaleDateString()}
//                 </p>
//                 <p className="text-gray-500 text-xs mb-4">
//                   <strong>Deadline:</strong> {new Date(task.deadline).toLocaleDateString()}
//                 </p>
//               </div>
//             </motion.div>
//           ))
//         ) : (
//           <div className="text-center text-white col-span-full">No tasks found for this module.</div>
//         )}
//       </div>

//       {/* Pagination Controls */}
//       {tasks.length > tasksPerPage && (
//         <div className="flex justify-between items-center mt-8">
//           <button
//             onClick={prevPage}
//             disabled={currentPage === 1}
//             className={`px-4 py-2 bg-gray-500 text-white rounded ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-700'}`}
//           >
//             Previous
//           </button>

//           <span className="text-white">
//             Page {currentPage} of {Math.ceil(tasks.length / tasksPerPage)}
//           </span>

//           <button
//             onClick={nextPage}
//             disabled={currentPage === Math.ceil(tasks.length / tasksPerPage)}
//             className={`px-4 py-2 bg-gray-500 text-white rounded ${currentPage === Math.ceil(tasks.length / tasksPerPage) ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-700'}`}
//           >
//             Next
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
// Define the Task interface based on the structure of task data
interface Task {
  id: number;
  projectName: string;
  epicName: string;
  taskName: string;
  description: string;
  userStory: string;
  assignedUserName: string;
  status: string;
  starting: string;
  deadline: string;
}

export function PreviewCardList() {
  const { epicId } = useParams<{ epicId?: string }>(); // Specify epicId as optional

  const [tasks, setTasks] = useState<Task[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const tasksPerPage = 3;

  useEffect(() => {
    const fetchTasks = async () => {
      if (epicId) { // Only fetch tasks if epicId is available
        try {
          const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/dashboard/previewcard/${epicId}`,{withCredentials:true});
          setTasks(response.data);
        } catch (error) {
          console.error("Error fetching tasks", error);
        }
      }
    };

    fetchTasks();
  }, [epicId]);

  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);

  const nextPage = () => {
    if (currentPage < Math.ceil(tasks.length / tasksPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-8 py-10">
      <h2 className="text-4xl font-bold mb-10 text-center text-white">Project Tasks</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentTasks.length > 0 ? (
          currentTasks.map((task) => (
            <motion.div
              key={task.id}
              whileHover={{ scale: 1.05, boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)" }}
              transition={{ duration: 0.3 }}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-shadow duration-300 transform hover:translate-y-1"
            >
              <div className="p-6">
                <h1 className="text-3xl font-bold mb-3 text-gray-900">Project: {task.projectName}</h1>
                <h2 className="text-2xl font-semibold mb-3 text-gray-900">Epic: {task.epicName}</h2>
                <p className="text-gray-600 text-sm mb-4"><strong>Task Name:</strong> {task.taskName}</p>
                <p className="text-gray-600 text-sm mb-4"><strong>Task Description:</strong> {task.description}</p>
                <p className="text-gray-600 text-sm mb-4"><strong>User Story:</strong> {task.userStory}</p>
                <p className="text-gray-600 text-sm mb-4"><strong>Assigned To:</strong> {task.assignedUserName}</p>

                <div className="text-sm font-medium mb-4">
                  <p>Status:</p>
                  <span
                    className={`px-3 py-1 rounded-full text-white ${
                      task.status === 'completed'
                        ? 'bg-green-500'
                        : task.status === 'in-progress'
                        ? 'bg-blue-500'
                        : task.status === 'pending'
                        ? 'bg-yellow-500'
                        : 'bg-gray-500'
                    }`}
                  >
                    {task.status ? task.status.replace('-', ' ') : 'Unknown Status'}
                  </span>
                </div>

                <p className="text-gray-500 text-xs mb-4">
                  <strong>Start Date:</strong> {new Date(task.starting).toLocaleDateString()}
                </p>
                <p className="text-gray-500 text-xs mb-4">
                  <strong>Deadline:</strong> {new Date(task.deadline).toLocaleDateString()}
                </p>
                <div className="text-sm font-medium mb-4">
                  <p>Status:</p>
                <Link to='/tasktracking/:id'> <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                >Track History</button></Link>
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="text-center text-white col-span-full">No tasks found for this module.</div>
        )}
      </div>

      {/* Pagination Controls */}
      {tasks.length > tasksPerPage && (
        <div className="flex justify-between items-center mt-8">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 bg-gray-500 text-white rounded ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-700'}`}
          >
            Previous
          </button>

          <span className="text-white">
            Page {currentPage} of {Math.ceil(tasks.length / tasksPerPage)}
          </span>

          <button
            onClick={nextPage}
            disabled={currentPage === Math.ceil(tasks.length / tasksPerPage)}
            className={`px-4 py-2 bg-gray-500 text-white rounded ${currentPage === Math.ceil(tasks.length / tasksPerPage) ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-700'}`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
