import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export const TestCaseTable = () => {
  const { id } = useParams(); // Assuming 'id' is the taskId

  const [testCases, setTestCases] = useState([]);
  const [testCaseData, setTestCaseData] = useState({});

  useEffect(() => {
    const fetchTestCases = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/tester/listTestCases/${id}`);
        setTestCases(response.data);

        // Initialize the state for each test case
        const initialTestCaseData = response.data.reduce((acc, testCase) => {
          acc[testCase.id] = {
            severity: 'High',
            testStatus: 'Not Started',
            selectedSteps: [],
            result: 'Pass', // Initialize result field with default value
          };
          return acc;
        }, {});
        setTestCaseData(initialTestCaseData);
      } catch (error) {
        console.error('Error fetching test cases:', error);
      }
    };

    fetchTestCases();
  }, [id]);

  const handleSubmitSingleTestCase = async (testCaseId, e) => {
    e.preventDefault(); // Prevent default form submission

    const taskId = id;
    const userData = localStorage.getItem('user');
    let testerId;

    if (userData) {
      const user = JSON.parse(userData);
      testerId = user;
    } else {
      console.error('No user found in local storage');
      return;
    }

    // Get the testCase object for this specific testCaseId
    const testCase = testCases.find((tc) => tc.id === testCaseId);

    if (!testCase) {
      console.error('Test case not found');
      return;
    }

    // Prepare the data for this specific test case
    const formData = new FormData();
    formData.append('taskId', taskId);
    formData.append('testerId', testerId.id);
    formData.append('testCaseId', testCaseId); // testId
    formData.append('testDescription', testCase.description); // testDescription
    formData.append('severity', testCaseData[testCaseId]?.severity);
    formData.append('testStatus', testCaseData[testCaseId]?.testStatus);
    formData.append('result', testCaseData[testCaseId]?.result);
    formData.append('selectedSteps', JSON.stringify(testCaseData[testCaseId]?.selectedSteps));

    // Append files to FormData
    const fileInput = document.getElementById(`file-upload-${testCaseId}`);
    if (fileInput?.files) {
      Array.from(fileInput.files).forEach((file) => {
        formData.append('files', file);
      });
    }

    try {
      // Log the contents of formData
      for (let pair of formData.entries()) {
        console.log(`${pair[0]}: ${pair[1]}`);
      }

      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/tester/bugreport`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Test case submitted successfully:', response.data);
    } catch (error) {
      console.error('Error submitting test case:', error);
    }
  };

  const handleInputChange = (testCaseId, field, value) => {
    setTestCaseData((prevData) => ({
      ...prevData,
      [testCaseId]: {
        ...prevData[testCaseId],
        [field]: value,
      },
    }));
  };

  const handleStepChange = (testCaseId, step, isChecked) => {
    setTestCaseData((prevData) => {
      const updatedSteps = [...(prevData[testCaseId]?.selectedSteps || [])];

      if (isChecked) {
        updatedSteps.push(step);
      } else {
        const stepIndex = updatedSteps.indexOf(step);
        if (stepIndex > -1) {
          updatedSteps.splice(stepIndex, 1);
        }
      }

      return {
        ...prevData,
        [testCaseId]: {
          ...prevData[testCaseId],
          selectedSteps: updatedSteps,
        },
      };
    });
  };

  return (
    <div className="overflow-x-auto">
      <h3 className="text-center text-4xl mb-10 text-white">Test Cases</h3>
      <table className="mb-10 min-w-full table-auto bg-gray-900 text-gray-100 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-800 text-left uppercase text-xs text-gray-400">
            <th className="px-6 py-3">ID</th>
            <th className="px-6 py-3">Test Id</th>
            <th className="px-6 py-3">Test Description</th>
            <th className="px-6 py-3">Steps</th>
            <th className="px-6 py-3">Severity</th>
            <th className="px-6 py-3">Result</th>
            <th className="px-6 py-3">Bug Report</th>
            <th className="px-6 py-3">Test Status</th>
            <th className="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {testCases.map((testCase) => (
            <tr key={testCase.id} className="bg-gray-700 hover:bg-gray-600 transition-all duration-200">
              <td className="px-6 py-4">{testCase.id}</td>
              <td className="px-6 py-4">{testCase.name}</td>
              <td className="px-6 py-4">{testCase.description}</td>
              <td className="px-6 py-4">
                <ul>
                  {testCase.steps && testCase.steps.length > 0 ? (
                    testCase.steps.map((step, index) => (
                      <li key={index} className="text-md text-gray-200 w-56">
                        <label>
                          <input
                            type="checkbox"
                            checked={testCaseData[testCase.id]?.selectedSteps?.includes(step) || false}
                            onChange={(e) => handleStepChange(testCase.id, step, e.target.checked)}
                            className="mr-2"
                          />
                          {step}
                        </label>
                      </li>
                    ))
                  ) : (
                    <li className="text-sm text-gray-300">No steps provided</li>
                  )}
                </ul>
              </td>
              <td className="px-6 py-4">
                <select
                  value={testCaseData[testCase.id]?.severity}
                  onChange={(e) => handleInputChange(testCase.id, 'severity', e.target.value)}
                  className="border border-gray-300 bg-slate-600 rounded-md w-24 p-2"
                  required
                >
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </td>
              <td className="px-6 py-4">
                {/* Result field */}
                <select
                  value={testCaseData[testCase.id]?.result}
                  onChange={(e) => handleInputChange(testCase.id, 'result', e.target.value)}
                  className="p-2 border bg-slate-600 border-gray-300 rounded"
                >
                  <option value="Pass">Pass</option>
                  <option value="Fail">Fail</option>
                </select>
              </td>
              <td className="px-6 py-4">
                <input
                  type="file"
                  accept="image/*,application/pdf"
                  multiple
                  id={`file-upload-${testCase.id}`}
                  className="p-2 border border-gray-300 bg-slate-600 rounded"
                />
              </td>
              <td className="px-6 py-4">
                <select
                  value={testCaseData[testCase.id]?.testStatus}
                  onChange={(e) => handleInputChange(testCase.id, 'testStatus', e.target.value)}
                  className="p-2 border bg-slate-600 border-gray-300 rounded"
                >
                  <option value="Not Started">Not Started</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </td>
              <td className="px-6 py-4">
                {/* Submit button for each row */}
                <button
                  onClick={(e) => handleSubmitSingleTestCase(testCase.id, e)}
                  className="bg-blue-500 text-white rounded-md px-4 py-2 mt-4"
                >
                  Submit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
