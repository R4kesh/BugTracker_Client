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

  // Fetch project details when modal opens
  useEffect(() => {
    if (isOpen ) {
      const fetchProject = async () => {
        try {
          const projectResponse = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/project/getProjectName/${projectId}`,{withCredentials:true});
          setProjectName(projectResponse.data.name);

          
          const epicResponse = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/project/getEpicName/${epicId}`,{withCredentials:true});
          setModuleName(epicResponse.data.name);

        } catch (error) {
          console.error("Error fetching project:", error);
        }
      };
      fetchProject();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit =async (e: React.FormEvent) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/project/task/create`, {
          projectName,
          taskName,
          description,
          projectId: projectId, 
          epicId:epicId,
          userStory:userStory
        },{withCredentials:true});
        
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
          <div className="mt-4">
            {/* Project Name (read-only) */}
            <label className="block mb-2" htmlFor="projectName">Project Name</label>
            <input
              type="text"
              id="projectName"
              className="border border-gray-300 rounded-md w-full p-2 bg-gray-100 cursor-not-allowed"
              value={projectName} // Pre-filled project name
              readOnly // This makes the field read-only
            />
                   <label className="block mb-2" htmlFor="projectName">Module Name</label>
            <input
              type="text"
              id="moduleName"
              className="border border-gray-300 rounded-md w-full p-2 bg-gray-100 cursor-not-allowed"
              value={moduleName}
              readOnly 
            />

            {/* Task Name */}
            <label className="block mb-2 mt-4" htmlFor="taskName">Task Name</label>
            <input
              type="text"
              id="taskName"
              className="border border-gray-300 rounded-md w-full p-2"
              placeholder="Enter task name"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)} // Update state
              required
            />

            {/* Task Description */}
            <label className="block mb-2 mt-4" htmlFor="taskDescription">Task Description</label>
            <textarea
              id="taskDescription"
              className="border border-gray-300 rounded-md w-full p-2"
              placeholder="Enter task description"
              value={description}
              onChange={(e) => setTaskDescription(e.target.value)} // Update state
              required
            />
                 <label className="block mb-2 mt-4" htmlFor="taskDescription">User Story</label>
            <textarea
              id="userstory"
              className="border border-gray-300 rounded-md w-full p-2"
              placeholder="Enter User Story"
              value={userStory}
              onChange={(e) => setUserStory(e.target.value)}
              required
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
