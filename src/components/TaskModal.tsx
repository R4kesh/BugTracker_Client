// import React, { FC, useState, useEffect } from "react";
// import { useParams } from "react-router-dom"; // For accessing the project ID from the URL
// import axios from "axios"; // For making API requests

// interface ModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// export const TaskModal: FC<ModalProps> = ({ isOpen, onClose }) => {
//   const { projectId, epicId } = useParams<{ projectId: string; epicId: string }>(); 
//   const [projectName, setProjectName] = useState("");
//   const [moduleName, setModuleName] = useState("");
//   const [taskName, setTaskName] = useState("");
//   const [description, setTaskDescription] = useState("");
//   const [userStory, setUserStory] = useState("");

//   // Fetch project details when modal opens
//   useEffect(() => {
//     if (isOpen ) {
//       const fetchProject = async () => {
//         try {
//           const projectResponse = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/project/getProjectName/${projectId}`,{withCredentials:true});
//           setProjectName(projectResponse.data.name);

          
//           const epicResponse = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/project/getEpicName/${epicId}`,{withCredentials:true});
//           setModuleName(epicResponse.data.name);

//         } catch (error) {
//           console.error("Error fetching project:", error);
//         }
//       };
//       fetchProject();
//     }
//   }, [isOpen]);

//   if (!isOpen) return null;

//   const handleSubmit =async (e: React.FormEvent) => {
//     try {
//         const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/project/task/create`, {
//           projectName,
//           taskName,
//           description,
//           projectId: projectId, 
//           epicId:epicId,
//           userStory:userStory
//         },{withCredentials:true});
        
//         console.log("Task created:", response.data);

//         onClose();
//       } catch (error) {
//         console.error("Error saving task:", error);
//       }
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="bg-white rounded-lg p-6 shadow-lg max-w-lg w-full">
//         <h2 className="text-lg font-semibold">Add New Task</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mt-4">
//             {/* Project Name (read-only) */}
//             <label className="block mb-2" htmlFor="projectName">Project Name</label>
//             <input
//               type="text"
//               id="projectName"
//               className="border border-gray-300 rounded-md w-full p-2 bg-gray-100 cursor-not-allowed"
//               value={projectName} // Pre-filled project name
//               readOnly // This makes the field read-only
//             />
//                    <label className="block mb-2" htmlFor="projectName">Module Name</label>
//             <input
//               type="text"
//               id="moduleName"
//               className="border border-gray-300 rounded-md w-full p-2 bg-gray-100 cursor-not-allowed"
//               value={moduleName}
//               readOnly 
//             />

//             {/* Task Name */}
//             <label className="block mb-2 mt-4" htmlFor="taskName">Task Name</label>
//             <input
//               type="text"
//               id="taskName"
//               className="border border-gray-300 rounded-md w-full p-2"
//               placeholder="Enter task name"
//               value={taskName}
//               onChange={(e) => setTaskName(e.target.value)} // Update state
//               required
//             />

//             {/* Task Description */}
//             <label className="block mb-2 mt-4" htmlFor="taskDescription">Task Description</label>
//             <textarea
//               id="taskDescription"
//               className="border border-gray-300 rounded-md w-full p-2"
//               placeholder="Enter task description"
//               value={description}
//               onChange={(e) => setTaskDescription(e.target.value)} // Update state
//               required
//             />
//                  <label className="block mb-2 mt-4" htmlFor="taskDescription">User Story</label>
//             <textarea
//               id="userstory"
//               className="border border-gray-300 rounded-md w-full p-2"
//               placeholder="Enter User Story"
//               value={userStory}
//               onChange={(e) => setUserStory(e.target.value)}
//               required
//             />
//           </div>
          

//           <div className="mt-4">
//             {/* Save Button */}
//             <button
//               type="submit"
//               className="bg-blue-500 text-white rounded-md px-4 py-2"
//             >
//               Save Task
//             </button>
//             {/* Cancel Button */}
//             <button
//               type="button"
//               onClick={onClose}
//               className="ml-2 text-gray-600"
//             >
//               Cancel
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };


import React, { FC, useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // For accessing the project ID from the URL
import axios from "axios"; // For making API requests

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TaskModal: FC<ModalProps> = ({ isOpen, onClose }) => {
  const { projectId, epicId } = useParams<{ projectId: string; epicId: string }>(); 
  const [projectName, setProjectName] = useState("");
  const [moduleName, setModuleName] = useState("");
  const [taskName, setTaskName] = useState("");
  const [description, setTaskDescription] = useState("");
  const [userStory, setUserStory] = useState("");
  const [link, setLink] = useState(""); // New field for link
  const [file, setFile] = useState<File | null>(null); // New field for attachment file

  // Fetch project details when modal opens
  useEffect(() => {
    if (isOpen) {
      const fetchProject = async () => {
        try {
          const projectResponse = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/project/getProjectName/${projectId}`, { withCredentials: true });
          setProjectName(projectResponse.data.name);

          const epicResponse = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/project/getEpicName/${epicId}`, { withCredentials: true });
          setModuleName(epicResponse.data.name);
        } catch (error) {
          console.error("Error fetching project:", error);
        }
      };
      fetchProject();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (file && file.size > 5 * 1024 * 1024) { // 10 MB limit check
      return alert("File size exceeds 10 MB limit.");
    }

    const formData = new FormData();
    formData.append("projectName", projectName);
    formData.append("taskName", taskName);
    formData.append("description", description);
    formData.append("projectId", projectId);
    formData.append("epicId", epicId);
    formData.append("userStory", userStory);
    formData.append("link", link);
    if (file) formData.append("files", file);

    formData.forEach((value, key) => {
      console.log(key, value);
    });
  
    
    

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/project/task/create`, 
        formData, 
        { 
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" }
        }
      );
      console.log("Task created:", response.data);
      onClose();
    } catch (error) {
      console.error("Error saving task:", error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 shadow-lg max-w-lg w-full">
        <h2 className="text-lg font-semibold">Add New Task</h2>
        <form onSubmit={handleSubmit}>
          {/* Existing fields */}
          <div className="mt-4">
            <label className="block mb-2" htmlFor="projectName">Project Name</label>
            <input
              type="text"
              id="projectName"
              className="border border-gray-300 rounded-md w-full p-2 bg-gray-100 cursor-not-allowed"
              value={projectName}
              readOnly
            />

            <label className="block mb-2" htmlFor="moduleName">Module Name</label>
            <input
              type="text"
              id="moduleName"
              className="border border-gray-300 rounded-md w-full p-2 bg-gray-100 cursor-not-allowed"
              value={moduleName}
              readOnly
            />

            <label className="block mb-2 mt-4" htmlFor="taskName">Task Name</label>
            <input
              type="text"
              id="taskName"
              className="border border-gray-300 rounded-md w-full p-2"
              placeholder="Enter task name"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              required
            />

            <label className="block mb-2 mt-4" htmlFor="taskDescription">Task Description</label>
            <input
              id="taskDescription"
              className="border border-gray-300 rounded-md w-full p-2"
              placeholder="Enter task description"
              value={description}
              onChange={(e) => setTaskDescription(e.target.value)}
              required
              />

            <label className="block mb-2 mt-4" htmlFor="userStory">User Story</label>
            <textarea
              id="userStory"
              className="border border-gray-300 rounded-md w-full p-2"
              placeholder="Enter user story"
              value={userStory}
              onChange={(e) => setUserStory(e.target.value)}
              required
            />

            {/* New field for link */}
            <label className="block mb-2 mt-4" htmlFor="link">Link</label>
            <input
              type="url"
              id="link"
              className="border border-gray-300 rounded-md w-full p-2"
              placeholder="Enter link (if any)"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />

            {/* New field for file upload */}
            <label className="block mb-2 mt-4" htmlFor="file">Attach File (Max 10 MB)</label>
            <input
              type="file"
              id="file"
              multiple
              className="border border-gray-300 rounded-md w-full p-2"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={(e) => {
                if (e.target.files) setFile(e.target.files[0]);
              }}
            />
          </div>

          <div className="mt-4">
            {/* Save Button */}
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-md px-4 py-2"
            >
              Save Task
            </button>
            {/* Cancel Button */}
            <button
              type="button"
              onClick={onClose}
              className="ml-2 text-gray-600"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

