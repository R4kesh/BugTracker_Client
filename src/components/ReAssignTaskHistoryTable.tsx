// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from "react-router-dom";

// export function ReAssignTaskHistoryTable() {
//   const [taskHistory, setTaskHistory] = useState([]);
//   const [selectedImages, setSelectedImages] = useState([]); // State for selected images
//   const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
//   const { id } = useParams();

//   useEffect(() => {
//     const fetchTaskHistory = async () => {
//       try {
//         const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/dashboard/trackhistory/listReassignTask/${id}`);
//         setTaskHistory(response.data);
//       } catch (error) {
//         console.error('Error fetching task history', error);
//       }
//     };
//     fetchTaskHistory();
//   }, [id]);

//   // Function to handle button click to show images
//   const handleShowImages = (fileLinks) => {
//     // Map the file links to the full URL format
//     const images = fileLinks.map(fileLink => `${import.meta.env.VITE_BASE_URL}${fileLink}`);
//     setSelectedImages(images);
//     setIsModalOpen(true);
//   };

//   // Function to close the modal
//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setSelectedImages([]); // Clear images when closing
//   };

//   return (
//     <div className="max-w-5xl mx-auto px-4 py-10">
//       <h2 className="text-3xl font-bold mb-8 text-white text-center">Re-Assign Task History</h2>
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
//           <thead>
//             <tr className="bg-gray-100">
//               <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 border-b border-gray-300">S No</th>
//               <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 border-b border-gray-300">Project Name</th>
//               <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 border-b border-gray-300">Task Name</th>
//               <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 border-b border-gray-300">Task Description</th>
//               <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 border-b border-gray-300">Start Date</th>
//               <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 border-b border-gray-300">Deadline</th>
//               <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 border-b border-gray-300">Bug Report</th>
//               <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 border-b border-gray-300">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {taskHistory.map((task, index) => (
//               <tr key={index} className="hover:bg-gray-50 transition duration-200">
//                 <td className="py-4 px-4 border-b border-gray-300">{index + 1}</td>
//                 <td className="py-4 px-4 border-b border-gray-300">{task.project.name}</td>
//                 <td className="py-4 px-4 border-b border-gray-300">{task.task.taskName}</td>
//                 <td className="py-4 px-4 border-b border-gray-300">{task.task.description}</td>
//                 <td className="py-4 px-4 border-b border-gray-300">{new Date(task.taskStartedDate).toLocaleDateString()}</td>
//                 <td className="py-4 px-4 border-b border-gray-300">{new Date(task.deadline).toLocaleDateString()}</td>
//                 <td className="py-4 px-4 border-b border-gray-300">
//                   {task.bugReport.fileLink && (
//                     <button
//                       className="bg-blue-500 text-white rounded px-2 py-1"
//                       onClick={() => handleShowImages(task.bugReport.fileLink)} // Pass the image links to the modal
//                     >
//                       View Images
//                     </button>
//                   )}
//                 </td>
//                 <td className="py-4 px-4 border-b border-gray-300">{task.status}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Image Preview Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg p-4 max-w-lg w-full">
//             <h3 className="text-xl font-semibold mb-4">Images</h3>
//             {selectedImages.length > 0 ? (
//               selectedImages.map((image, index) => (
//                 <img key={index} src={image} alt={`Preview ${index + 1}`} className="w-full h-auto mb-4" />
//               ))
//             ) : (
//               <p>No images to display.</p>
//             )}
//             <button
//               className="mt-4 bg-red-500 text-white rounded-md px-4 py-2"
//               onClick={handleCloseModal}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";

// Define interfaces for task data structure
interface BugReport {
  fileLink: string[]; // Assuming it's an array of strings
}

interface Task {
  project: {
    name: string;
  };
  task: {
    taskName: string;
    description: string;
    startedDate: string; // Use appropriate type for dates
  };
  taskStartedDate: string;
  deadline: string;
  bugReport: BugReport;
  status: string;
}

export function ReAssignTaskHistoryTable() {
  const [taskHistory, setTaskHistory] = useState<Task[]>([]); // State for task history
  const [selectedImages, setSelectedImages] = useState<string[]>([]); // State for selected images
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // State for modal visibility
  const { id } = useParams<{ id: string }>(); // Specify id type from URL params

  useEffect(() => {
    const fetchTaskHistory = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/dashboard/trackhistory/listReassignTask/${id}`);
        setTaskHistory(response.data);
      } catch (error) {
        console.error('Error fetching task history', error);
      }
    };
    fetchTaskHistory();
  }, [id]);

  // Function to handle button click to show images
  const handleShowImages = (fileLinks: string[]) => {
    // Map the file links to the full URL format
    const images = fileLinks.map(fileLink => `${import.meta.env.VITE_BASE_URL}${fileLink}`);
    setSelectedImages(images);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImages([]); // Clear images when closing
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-8 text-white text-center">Re-Assign Task History</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 border-b border-gray-300">S No</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 border-b border-gray-300">Project Name</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 border-b border-gray-300">Task Name</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 border-b border-gray-300">Task Description</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 border-b border-gray-300">Start Date</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 border-b border-gray-300">Deadline</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 border-b border-gray-300">Bug Report</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 border-b border-gray-300">Status</th>
            </tr>
          </thead>
          <tbody>
            {taskHistory.map((task, index) => (
              <tr key={index} className="hover:bg-gray-50 transition duration-200">
                <td className="py-4 px-4 border-b border-gray-300">{index + 1}</td>
                <td className="py-4 px-4 border-b border-gray-300">{task.project.name}</td>
                <td className="py-4 px-4 border-b border-gray-300">{task.task.taskName}</td>
                <td className="py-4 px-4 border-b border-gray-300">{task.task.description}</td>
                <td className="py-4 px-4 border-b border-gray-300">{new Date(task.taskStartedDate).toLocaleDateString()}</td>
                <td className="py-4 px-4 border-b border-gray-300">{new Date(task.deadline).toLocaleDateString()}</td>
                <td className="py-4 px-4 border-b border-gray-300">
                  {task.bugReport.fileLink && (
                    <button
                      className="bg-blue-500 text-white rounded px-2 py-1"
                      onClick={() => handleShowImages(task.bugReport.fileLink)} // Pass the image links to the modal
                    >
                      View Images
                    </button>
                  )}
                </td>
                <td className="py-4 px-4 border-b border-gray-300">{task.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Image Preview Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-4 max-w-lg w-full">
            <h3 className="text-xl font-semibold mb-4">Images</h3>
            {selectedImages.length > 0 ? (
              selectedImages.map((image, index) => (
                <img key={index} src={image} alt={`Preview ${index + 1}`} className="w-full h-auto mb-4" />
              ))
            ) : (
              <p>No images to display.</p>
            )}
            <button
              className="mt-4 bg-red-500 text-white rounded-md px-4 py-2"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
