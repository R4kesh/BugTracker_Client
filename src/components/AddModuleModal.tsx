
import React, { FC,useState,useEffect } from "react";
import axios from 'axios';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AddModuleModal: FC<ModalProps> = ({ isOpen, onClose }) => {
  

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 shadow-lg max-w-lg w-full">
        <h2 className="text-lg font-semibold">Add New Project</h2>

        {/* {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>} */}
        <form >
          {/* Add your form fields here */}
          <div className="mt-4">
            <label className="block mb-2" htmlFor="projectName">Project Name</label>
            <input
              type="text"
              id="projectName"
              className="border border-gray-300 rounded-md w-full p-2"
              placeholder="Enter project name"
              value=''
            
              required
            />

            <label className="block mb-2" htmlFor="projectName">Module Name</label>
            <input
              type="text"
              id="modulename"
              className="border border-gray-300 rounded-md w-full p-2"
              placeholder="Enter Module Name"
              value=''
              
              required
            />
                  <label className="block mb-2" htmlFor="projectName">Module Description</label>
            <input
              type="text"
              id="moduledescription"
              className="border border-gray-300 rounded-md w-full p-2"
              placeholder="Enter Module Description"
              value=''
              
              required
            />
                <label className="block mb-2" htmlFor="projectStatus">Module Status</label>
            <select
              id="moduleStatus"
               // Update state on change
              className="border border-gray-300 rounded-md w-full p-2"
              value=''
             
              required
            >
              <option value="" disabled>Select status</option>
              <option value="not-started">Not Started</option>
              <option value="on-hold">Started</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
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
