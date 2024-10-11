import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; 


export const TestCaseTable = () => {
  const { id } = useParams(); 
  const [testCases, setTestCases] = useState([]);
  const [severity, setSeverity] = useState('High');
  const [testStatus, setTestStatus] = useState('Not Started');
  const [file, setFile] = useState(null);
  const [selectedTestCaseId, setSelectedTestCaseId] = useState(null);

  useEffect(() => {
    const fetchTestCases = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/tester/listTestCases/:${id}`);
        setTestCases(response.data);
      } catch (error) {
        console.error('Error fetching test cases:', error);
      }
    };

    fetchTestCases();
  }, []);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpdateTestCase = async (id) => {
    const formData = new FormData();
    formData.append('severity', severity);
    formData.append('testStatus', testStatus);
    if (file) {
      formData.append('file', file);
    }

    try {
      const response = await axios.put(`http://localhost:3000/api/testcase/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      // Optionally refresh test cases or update the state
    } catch (error) {
      console.error('Error updating test case:', error);
    }
  };

  return (
    <div className="overflow-x-auto">
      <h3 className='text-center text-4xl mb-10 text-white'>Test Cases</h3>
      <table className="mb-10 min-w-full table-auto bg-gray-900 text-gray-100 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-800 text-left uppercase text-xs text-gray-400">
            <th className="px-6 py-3">ID</th>
            <th className="px-6 py-3">Test Name</th>
            <th className="px-6 py-3">Test Description</th>
            <th className="px-6 py-3">Severity</th>
            <th className="px-6 py-3">Test Status</th>
            <th className="px-6 py-3">Bug Report</th>
          </tr>
        </thead>
        <tbody>
          {testCases.map((testCase) => (
            <tr key={testCase.id} className='bg-gray-700 hover:bg-gray-600 transition-all duration-200'>
              <td className="px-6 py-4">{testCase.id}</td>
              <td className="px-6 py-4">{testCase.name}</td>
              <td className="px-6 py-4">{testCase.description}</td>
              <td className="px-6 py-4">
                <select
                  value={severity}
                  onChange={(e) => setSeverity(e.target.value)}
                  className="border border-gray-300 bg-slate-600 rounded-md w-32 p-2"
                  required
                >
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </td>
              <td className="px-6 py-4">
                <select
                  value={testStatus}
                  onChange={(e) => setTestStatus(e.target.value)}
                  className="p-2 border bg-slate-600 border-gray-300 rounded"
                >
                  <option value="Not Started">Not Started</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </td>
              <td className="px-6 py-4">
                <input
                  type="file"
                  accept="application/pdf"
                  onChange={handleFileChange}
                  className="p-2 border border-gray-300 bg-slate-600 rounded"
                />
                <div className="text-gray-300 mt-1">{testCase.fileLink}</div>
                <button
                  onClick={() => handleUpdateTestCase(testCase.id)}
                  className="bg-blue-500 text-white rounded-md px-2 py-1 mt-2"
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
