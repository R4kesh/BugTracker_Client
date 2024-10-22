import React, { FC, useState } from "react";
import axios from 'axios';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Modal: FC<ModalProps> = ({ isOpen, onClose }) => {
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [completionDate, setCompletionDate] = useState('');
  const [projectStatus, setProjectStatus] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const currentDate = new Date().toISOString().split("T")[0]; // Current date in YYYY-MM-DD format

  const isFormValid = () => {
    
    // Check if all fields are filled
    if (
      projectName.trim() === "" ||
      projectDescription.trim() === "" ||
      startDate === "" ||
      completionDate === "" ||
      projectStatus === ""
    ) {
      setError("All fields must be filled before submitting.");
      return false;
    }

    // Check if start date is not in the future
    if (startDate < currentDate) {
      setError("Start date cannot be below current date.");
      return false;
    }

    // Check if completion date is after the start date
    if (completionDate < startDate) {
      setError("Completion date cannot be before the start date.");
      return false;
    }

    setError(null);
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid()) {
      return;
    }

    try {
      const projectData = {
        projectName,
        projectDescription,
        startDate,
        completionDate,
        projectStatus,
      };

      // Send data to backend
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/project/add`,
        projectData, { withCredentials: true }
      );

      if (response.status === 201) {
        setSuccess("Project saved successfully!");
        // Clear the form
        setProjectName("");
        setProjectDescription("");
        setStartDate("");
        setCompletionDate("");
        setProjectStatus("");
        onClose();
      }
    } catch (error) {
      setError("Error saving project. Please try again.");
      console.log(error);
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
            <label className="block mb-2" htmlFor="projectDescription">Project Description</label>
            <input
              type="text"
              id="projectDescription"
              className="border border-gray-300 rounded-md w-full p-2"
              placeholder="Enter project description"
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
              required
            />
            <label className="block mb-2" htmlFor="startDate">Start Date</label>
            <input
              type="date"
              id="startDate"
              className="border border-gray-300 rounded-md w-full p-2"
              min={currentDate}
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
            />
            <label className="block mb-2" htmlFor="completionDate">Completion Date</label>
            <input
              type="date"
              id="completionDate"
              className="border border-gray-300 rounded-md w-full p-2"
              min={startDate || currentDate}
              value={completionDate}
              onChange={(e) => setCompletionDate(e.target.value)}
              required
            />
            <label className="block mb-2" htmlFor="projectStatus">Project Status</label>
            <select
              id="projectStatus"
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
