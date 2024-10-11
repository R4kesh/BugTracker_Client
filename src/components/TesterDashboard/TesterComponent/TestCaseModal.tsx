import React, { FC, useState } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom'; 

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TestCaseModal: FC<ModalProps> = ({ isOpen, onClose }) => {
  const { id } = useParams(); 
  const [testName, setTestName] = useState("");
  const [testDescription, setTestDescription] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  
  const handleSaveTestCase = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!testName || !testDescription) {
      setError("Both test name and description are required");
      return;
    }

    try {
      
      
      const response = await axios.post(`http://localhost:3000/api/tester/testCaseCreation/${id}`, {
        name: testName,
        description: testDescription
      });

      if (response.status === 201) {
        setSuccess("Test case created successfully!");
        setError(null);
        setTestName('');
        setTestDescription('');
        onClose();
      }
    } catch (error) {
      setError("Error creating test case. Please try again.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 shadow-lg max-w-lg w-full">
        <h2 className="text-lg font-semibold">Add Test Case</h2>
        
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}

        <form onSubmit={handleSaveTestCase}>
          <div className="mt-4">
            <label className="block mb-2" htmlFor="testName">Test Name</label>
            <input
              type="text"
              id="testName"
              className="border border-gray-300 rounded-md w-full p-2"
              placeholder="Enter test case name"
              value={testName}
              onChange={(e) => setTestName(e.target.value)}
            />

            <label className="block mb-2 mt-4" htmlFor="testDescription">Test Description</label>
            <input
              type="text"
              id="testDescription"
              className="border border-gray-300 rounded-md w-full p-2"
              placeholder="Enter test case description"
              value={testDescription}
              onChange={(e) => setTestDescription(e.target.value)}
            />
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-md px-4 py-2"
            >
              Save Test Case
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
