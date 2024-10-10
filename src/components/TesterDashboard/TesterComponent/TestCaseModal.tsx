// Modal.js
import React, { FC,useState,useEffect } from "react";
import axios from 'axios';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TestCaseModal: FC<ModalProps> = ({ isOpen, onClose }) => {


  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 shadow-lg max-w-lg w-full">
        <h2 className="text-lg font-semibold">Add TestCase</h2>

        {/* {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>} */}
        <form >
          {/* Add your form fields here */}
          <div className="mt-4">
            <label className="block mb-2" htmlFor="projectName">TestName</label>
            <input
              type="text"
              id="testName"
              className="border border-gray-300 rounded-md w-full p-2"
              placeholder="Enter project name"
              value=''
              
            />
            <label className="block mb-2" htmlFor="projectName">Test Description</label>
            <input
              type="text"
              id="testDescription"
              className="border border-gray-300 rounded-md w-full p-2"
              placeholder="Enter project Description"
              value=''
             
             
            />
            
       
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-md px-4 py-2"
            >
              Save TestCase
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
