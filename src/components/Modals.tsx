// Modal.js
import React, { FC,useState,useEffect } from "react";
import axios from 'axios';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Modal: FC<ModalProps> = ({ isOpen, onClose }) => {
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [projectStatus, setProjectStatus] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
 

  const isFormValid = () => {
    return (
      projectName.trim() !== "" &&
      projectDescription.trim() !== "" &&
      startDate !== "" &&
      projectStatus !== ""
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid()) {
      setError("All fields must be filled before submitting.");
      return;
    }

    try {
      const projectData = {
        projectName,
        projectDescription,
        startDate,
        projectStatus,
      };

      // Send data to backend
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/project/add`,
        projectData,{withCredentials:true}
      );

      if (response.status === 201) {
        setSuccess("Project saved successfully!");
        // Clear the form
        setProjectName("");
        setProjectDescription("");
        setStartDate("");
        setProjectStatus("");
        onClose(); 
      }
    } catch (error) {
      setError("Error saving project. Please try again.");
    }
  };


  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 shadow-lg max-w-lg w-full">
        <h2 className="text-lg font-semibold">Add New Project</h2>

        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}
        <form onSubmit={handleSubmit}>
          {/* Add your form fields here */}
          <div className="mt-4">
            <label className="block mb-2" htmlFor="projectName">Project Name</label>
            <input
              type="text"
              id="projectName"
              className="border border-gray-300 rounded-md w-full p-2"
              placeholder="Enter project name"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              required
            />
            <label className="block mb-2" htmlFor="projectName">Project Description</label>
            <input
              type="text"
              id="projectDescription"
              className="border border-gray-300 rounded-md w-full p-2"
              placeholder="Enter project Description"
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
              required
            />
            <label className="block mb-2" htmlFor="projectName">Start Date</label>
            <input
              type="date"
              id="StartDate"
              className="border border-gray-300 rounded-md w-full p-2"
              placeholder="Enter Start Date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
            />
                <label className="block mb-2" htmlFor="projectStatus">Project Status</label>
            <select
              id="projectStatus"
               // Update state on change
              className="border border-gray-300 rounded-md w-full p-2"
              value={projectStatus}
              onChange={(e) => setProjectStatus(e.target.value)}
              required
            >
              <option value="" disabled>Select status</option>
              <option value="not-started">Not Started</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
              <option value="on-hold">On Hold</option>
            </select>
       
       
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-md px-4 py-2"
            >
              Save Project
            </button>
            <button
              type="submit"
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
