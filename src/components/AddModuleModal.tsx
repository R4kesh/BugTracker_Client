import React, { FC, useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AddModuleModal: FC<ModalProps> = ({ isOpen, onClose }) => {
  const { projectId } = useParams<{ projectId: string }>(); // Extract projectId from URL
  const [projectName, setProjectName] = useState(''); // Store project name
  const [name, setModuleName] = useState('');
  const [description, setModuleDescription] = useState('');
  const [status, setModuleStatus] = useState('');

  console.log('id', projectId);


  // Fetch project details using projectId
  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/project/getProjectName/${projectId}`,{withCredentials:true});
        console.log('ggsdf', response.data);

        setProjectName(response.data.name); // Assuming 'name' is the project name in response
      } catch (error) {
        console.error('Error fetching project details:', error);
      }
    };

    if (projectId) {
      fetchProject();
    }
  }, [projectId]);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const newModule = {
        projectId,
        projectName, // Project name remains the same, fetched from the backend
        name,
        status,
        description,
      };

      // Submit the form data to your backend
      await axios.post(`${import.meta.env.VITE_BASE_URL}/api/project/addModules`, newModule,{withCredentials:true});
      alert('Module added successfully');
      onClose(); // Close the modal after submission
    } catch (error) {
      console.error('Error adding module:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 shadow-lg max-w-lg w-full">
        <h2 className="text-lg font-semibold">Add New Module</h2>
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            {/* Display the project name, input field is disabled */}
            <label className="block mb-2" htmlFor="projectName">Project Name</label>
            <input
              type="text"
              id="projectName"
              className="border border-gray-300 rounded-md w-full p-2 bg-gray-100" // Add bg-gray-100 to indicate it's disabled
              value={projectName}
              disabled // This disables the field so the user can't change it
            />

            {/* Module Name */}
            <label className="block mb-2 mt-4" htmlFor="moduleName">Module Name</label>
            <input
              type="text"
              id="moduleName"
              className="border border-gray-300 rounded-md w-full p-2"
              placeholder="Enter module name"
              value={name}
              onChange={(e) => setModuleName(e.target.value)}
              required
            />

            {/* Module Description */}
            <label className="block mb-2 mt-4" htmlFor="moduleDescription">Module Description</label>
            <input
              type="text"
              id="moduleDescription"
              className="border border-gray-300 rounded-md w-full p-2"
              placeholder="Enter module description"
              value={description}
              onChange={(e) => setModuleDescription(e.target.value)}
              required
            />

            {/* Module Status */}
            <label className="block mb-2 mt-4" htmlFor="moduleStatus">Module Status</label>
            <select
              id="moduleStatus"
              className="border border-gray-300 rounded-md w-full p-2"
              value={status}
              onChange={(e) => setModuleStatus(e.target.value)}
              required
            >
              <option value="" disabled>Select status</option>
              <option value="not started">Not Started</option> {/* Use space instead of hyphen */}
              <option value="started">Started</option>
              <option value="in progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-md px-4 py-2"
            >
              Save Module
            </button>
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
