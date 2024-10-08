import React, { FC, useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // For accessing the project ID from the URL
import axios from "axios"; // For making API requests

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TaskModal: FC<ModalProps> = ({ isOpen, onClose }) => {
  const { id } = useParams<{ id: string }>(); // Get project ID from URL
  const [projectName, setProjectName] = useState("");
  const [taskName, setTaskName] = useState("");
  const [description, setTaskDescription] = useState("");

  // Fetch project details when modal opens
  useEffect(() => {
    if (isOpen && id) {
      const fetchProject = async () => {
        try {
          const response = await axios.get(`http://localhost:3000/api/project/getProjectName/${id}`); 
          setProjectName(response.data.name); 
        } catch (error) {
          console.error("Error fetching project:", error);
        }
      };
      fetchProject();
    }
  }, [isOpen, id]);

  if (!isOpen) return null;

  const handleSubmit =async (e: React.FormEvent) => {
    try {
        const response = await axios.post('http://localhost:3000/api/project/task/create', {
          projectName,
          taskName,
          description,
          projectId: id, 
        });
        
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
