// Modal.js
import React, { FC} from "react";


interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AssignModal: FC<ModalProps> = ({ isOpen, onClose }) => {
 
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 shadow-lg max-w-lg w-full">
        <h2 className="text-lg font-semibold">Add New Project</h2>

         <p className="text-red-500"></p>
        <p className="text-green-500"></p>
        <form >
          {/* Add your form fields here */}
          <div className="mt-4">
            <label className="block mb-2" htmlFor="projectName">Project Name</label>
            <input
              type="text"
              id="projectName"
              className="border border-gray-300 rounded-md w-full p-2"
              placeholder="Enter project name"
             
             
              required
            />
            <label className="block mb-2" htmlFor="projectName">Project Description</label>
            <input
              type="text"
              id="projectDescription"
              className="border border-gray-300 rounded-md w-full p-2"
              placeholder="Enter project Description"
            
             
              required
            />
            <label className="block mb-2" htmlFor="projectName">Start Date</label>
            <input
              type="date"
              id="StartDate"
              className="border border-gray-300 rounded-md w-full p-2"
              placeholder="Enter Start Date"
             
             
              required
            />
                <label className="block mb-2" htmlFor="projectStatus">Project Status</label>
            <select
              id="projectStatus"
               // Update state on change
              className="border border-gray-300 rounded-md w-full p-2"
              
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
              Assign Task
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
