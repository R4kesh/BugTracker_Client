// import React, { useState, useEffect, ChangeEvent, FC } from 'react';
// import axios from 'axios';
// import { useParams, Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { RootState } from '@/redux/store';

// // Define types for test case and test case data
// interface TestCase {
//   id: string;
//   name: string;
//   description: string;
//   steps: string[];
// }

// interface TestCaseData {
//   severity: string;
//   testStatus: string;
//   selectedSteps: string[];
//   result: string;
// }

// export const TestCaseTable: FC = () => {
//   const { id } = useParams<{ id: string }>(); // Get taskId from URL params
//   const { user } = useSelector((state: RootState) => state.auth)

//   const [testCases, setTestCases] = useState<TestCase[]>([]);
//   const [testCaseData, setTestCaseData] = useState<Record<string, TestCaseData>>({});

//   useEffect(() => {
//     const fetchTestCases = async () => {
//       try {
//         const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/tester/listTestCases/${id}`);
//         const fetchedTestCases: TestCase[] = response.data;
//         setTestCases(fetchedTestCases);

//         // Initialize the state for each test case
//         const initialTestCaseData = fetchedTestCases.reduce<Record<string, TestCaseData>>((acc, testCase) => {
//           acc[testCase.id] = {
//             severity: 'High',
//             testStatus: 'Not Started',
//             selectedSteps: [],
//             result: 'Pass', // Initialize result field with default value
//           };
//           return acc;
//         }, {});
//         setTestCaseData(initialTestCaseData);
//       } catch (error) {
//         console.error('Error fetching test cases:', error);
//       }
//     };

//     fetchTestCases();
//   }, [id]);

//   const handleSubmitSingleTestCase = async (testCaseId: string, e: React.FormEvent) => {
//     e.preventDefault(); // Prevent default form submission

//     const taskId = id;
//     const userData = user
//     let testerId;

//     if (userData) {
//       testerId = user;
//     } else {
//       console.error('No user found in local storage');
//       return;
//     }

//     // Get the testCase object for this specific testCaseId
//     const testCase = testCases.find((tc) => tc.id === testCaseId);

//     if (!testCase) {
//       console.error('Test case not found');
//       return;
//     }

//     // Prepare the data for this specific test case
//     const formData = new FormData();
//     formData.append('taskId', taskId!);
//     formData.append('testerId', testerId.id);
//     formData.append('testCaseId', testCaseId); // testId
//     formData.append('testDescription', testCase.description); // testDescription
//     formData.append('severity', testCaseData[testCaseId]?.severity || 'High');
//     formData.append('testStatus', testCaseData[testCaseId]?.testStatus || 'Not Started');
//     formData.append('result', testCaseData[testCaseId]?.result || 'Pass');

//     // Append selectedSteps as an array to FormData
//     const selectedSteps = testCaseData[testCaseId]?.selectedSteps || [];
//     selectedSteps.forEach((step) => {
//       formData.append('selectedSteps[]', step); // Use 'selectedSteps[]' to append multiple steps as array items
//     });

//     // Append files to FormData
//     const fileInput = document.getElementById(`file-upload-${testCaseId}`) as HTMLInputElement | null;
//     if (fileInput?.files) {
//       Array.from(fileInput.files).forEach((file) => {
//         formData.append('files', file);
//       });
//     }

//     try {
//       // Log the contents of formData
//       for (let pair of formData.entries()) {
//         console.log(`${pair[0]}: ${pair[1]}`);
//       }

//       const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/tester/bugreport`, formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       console.log('Test case submitted successfully:', response.data);
//     } catch (error) {
//       console.error('Error submitting test case:', error);
//     }
//   };

//   const handleInputChange = (testCaseId: string, field: keyof TestCaseData, value: string) => {
//     setTestCaseData((prevData) => ({
//       ...prevData,
//       [testCaseId]: {
//         ...prevData[testCaseId],
//         [field]: value,
//       },
//     }));
//   };

//   const handleStepChange = (testCaseId: string, step: string, isChecked: boolean) => {
//     setTestCaseData((prevData) => {
//       const updatedSteps = [...(prevData[testCaseId]?.selectedSteps || [])];

//       if (isChecked) {
//         updatedSteps.push(step);
//       } else {
//         const stepIndex = updatedSteps.indexOf(step);
//         if (stepIndex > -1) {
//           updatedSteps.splice(stepIndex, 1);
//         }
//       }

//       return {
//         ...prevData,
//         [testCaseId]: {
//           ...prevData[testCaseId],
//           selectedSteps: updatedSteps,
//         },
//       };
//     });
//   };

//   return (
//     <div className="overflow-x-auto">
//       <h3 className="text-center text-4xl mb-10 text-white">Test Cases</h3>
//       <table className="mb-10 min-w-full table-auto bg-gray-900 text-gray-100 rounded-lg shadow-md">
//         <thead>
//           <tr className="bg-gray-800 text-left uppercase text-xs text-gray-400">
//             <th className="px-6 py-3">ID</th>
//             <th className="px-6 py-3">Test Id</th>
//             <th className="px-6 py-3">Test Description</th>
//             <th className="px-6 py-3">Steps</th>
//             <th className="px-6 py-3">Severity</th>
//             <th className="px-6 py-3">Result</th>
//             <th className="px-6 py-3">Bug Report</th>
//             <th className="px-6 py-3">Test Status</th>
//             <th className="px-6 py-3">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {testCases.map((testCase) => (
//             <tr key={testCase.id} className="bg-gray-700 hover:bg-gray-600 transition-all duration-200">
//               <td className="px-6 py-4">{testCase.id}</td>
//               <td className="px-6 py-4">{testCase.name}</td>
//               <td className="px-6 py-4">{testCase.description}</td>
//               <td className="px-6 py-4">
//                 <ul>
//                   {testCase.steps && testCase.steps.length > 0 ? (
//                     testCase.steps.map((step, index) => (
//                       <li key={index} className="text-md text-gray-200 w-56">
//                         <label>
//                           <input
//                             type="checkbox"
//                             checked={testCaseData[testCase.id]?.selectedSteps?.includes(step) || false}
//                             onChange={(e) => handleStepChange(testCase.id, step, e.target.checked)}
//                             className="mr-2"
//                           />
//                           {step}
//                         </label>
//                       </li>
//                     ))
//                   ) : (
//                     <li className="text-sm text-gray-300">No steps provided</li>
//                   )}
//                 </ul>
//               </td>
//               <td className="px-6 py-4">
//                 <select
//                   value={testCaseData[testCase.id]?.severity}
//                   onChange={(e) => handleInputChange(testCase.id, 'severity', e.target.value)}
//                   className="border border-gray-300 bg-slate-600 rounded-md w-24 p-2"
//                   required
//                 >
//                   <option value="High">High</option>
//                   <option value="Medium">Medium</option>
//                   <option value="Low">Low</option>
//                 </select>
//               </td>
//               <td className="px-6 py-4">
//                 {/* Result field */}
//                 <select
//                   value={testCaseData[testCase.id]?.result}
//                   onChange={(e) => handleInputChange(testCase.id, 'result', e.target.value)}
//                   className="p-2 border bg-slate-600 border-gray-300 rounded"
//                 >
//                   <option value="Pass">Pass</option>
//                   <option value="Fail">Fail</option>
//                 </select>
//               </td>
//               <td className="px-6 py-4">
//                 <input
//                   type="file"
//                   accept="image/*,application/pdf"
//                   multiple
//                   id={`file-upload-${testCase.id}`}
//                   className="p-2 border border-gray-300 bg-slate-600 rounded"
//                 />
//               </td>
//               <td className="px-6 py-4">
//                 <select
//                   value={testCaseData[testCase.id]?.testStatus}
//                   onChange={(e) => handleInputChange(testCase.id, 'testStatus', e.target.value)}
//                   className="p-2 border bg-slate-600 border-gray-300 rounded"
//                 >
//                   <option value="Not Started">Not Started</option>
//                   <option value="In Progress">In Progress</option>
//                   <option value="Completed">Completed</option>
//                 </select>
//               </td>
//               <td className="px-6 py-4">
//                 <button
//                   onClick={(e) => handleSubmitSingleTestCase(testCase.id, e)}
//                   className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-md text-white"
//                 >
//                   Submit
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <Link to={`/taskdetails/${id}`}>
//         <button className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md">Go Back</button>
//       </Link>
//     </div>
//   );
// };


import React, { useState, useEffect, ChangeEvent, FC } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

interface TestCase {
  id: string;
  name: string;
  description: string;
  steps: string[];
}

interface TestCaseData {
  severity: string;
  testStatus: string;
  selectedSteps: string[];
  result: string;
}

export const TestCaseTable: FC = () => {
  const { id } = useParams<{ id: string }>(); // Get taskId from URL params
  const { user } = useSelector((state: RootState) => state.auth);

  const [testCases, setTestCases] = useState<TestCase[]>([]);
  const [testCaseData, setTestCaseData] = useState<Record<string, TestCaseData>>({});

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 3;

  useEffect(() => {
    const fetchTestCases = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/tester/listTestCases/${id}`);
        const fetchedTestCases: TestCase[] = response.data;
        setTestCases(fetchedTestCases);

        const initialTestCaseData = fetchedTestCases.reduce<Record<string, TestCaseData>>((acc, testCase) => {
          acc[testCase.id] = {
            severity: 'High',
            testStatus: 'Not Started',
            selectedSteps: [],
            result: 'Pass',
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

  const handleSubmitSingleTestCase = async (testCaseId: string, e: React.FormEvent) => {
    e.preventDefault();

    const taskId = id;
    const userData = user;
    let testerId;

    if (userData) {
      testerId = user;
    } else {
      console.error('No user found in local storage');
      return;
    }

    const testCase = testCases.find((tc) => tc.id === testCaseId);

    if (!testCase) {
      console.error('Test case not found');
      return;
    }

    const formData = new FormData();
    formData.append('taskId', taskId!);
    formData.append('testerId', testerId.id);
    formData.append('testCaseId', testCaseId);
    formData.append('testDescription', testCase.description);
    formData.append('severity', testCaseData[testCaseId]?.severity || 'High');
    formData.append('testStatus', testCaseData[testCaseId]?.testStatus || 'Not Started');
    formData.append('result', testCaseData[testCaseId]?.result || 'Pass');

    const selectedSteps = testCaseData[testCaseId]?.selectedSteps || [];
    selectedSteps.forEach((step) => {
      formData.append('selectedSteps[]', step);
    });

    const fileInput = document.getElementById(`file-upload-${testCaseId}`) as HTMLInputElement | null;
    if (fileInput?.files) {
      Array.from(fileInput.files).forEach((file) => {
        formData.append('files', file);
      });
    }

    try {
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

  const handleInputChange = (testCaseId: string, field: keyof TestCaseData, value: string) => {
    setTestCaseData((prevData) => ({
      ...prevData,
      [testCaseId]: {
        ...prevData[testCaseId],
        [field]: value,
      },
    }));
  };

  const handleStepChange = (testCaseId: string, step: string, isChecked: boolean) => {
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

  // Get the data for the current page
  const indexOfLastTestCase = currentPage * rowsPerPage;
  const indexOfFirstTestCase = indexOfLastTestCase - rowsPerPage;
  const currentTestCases = testCases.slice(indexOfFirstTestCase, indexOfLastTestCase);

  // Handle pagination controls
  const nextPage = () => {
    if (currentPage < Math.ceil(testCases.length / rowsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
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
          {currentTestCases.map((testCase) => (
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
                <select
                  value={testCaseData[testCase.id]?.result}
                  onChange={(e) => handleInputChange(testCase.id, 'result', e.target.value)}
                  className="border border-gray-300 bg-slate-600 rounded-md w-24 p-2"
                  required
                >
                  <option value="Pass">Pass</option>
                  <option value="Fail">Fail</option>
                </select>
              </td>
              <td className="px-6 py-4">
                <input
                  id={`file-upload-${testCase.id}`}
                  type="file"
                  multiple
                  className="file-input"
                />
              </td>
              <td className="px-6 py-4">
                <select
                  value={testCaseData[testCase.id]?.testStatus}
                  onChange={(e) => handleInputChange(testCase.id, 'testStatus', e.target.value)}
                  className="border border-gray-300 bg-slate-600 rounded-md w-28 p-2"
                  required
                >
                  <option value="Not Started">Not Started</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </td>
              <td className="px-6 py-4">
                <Link to="/testedlist">
                <button
                  onClick={(e) => handleSubmitSingleTestCase(testCase.id, e)}
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                >
                  Submit
                </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination controls */}
      <div className="flex justify-center items-center space-x-4">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ${currentPage === 1 && 'opacity-50 cursor-not-allowed'}`}
        >
          Previous
        </button>
        <span className="text-white">Page {currentPage}</span>
        <button
          onClick={nextPage}
          disabled={currentPage >= Math.ceil(testCases.length / rowsPerPage)}
          className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ${currentPage >= Math.ceil(testCases.length / rowsPerPage) && 'opacity-50 cursor-not-allowed'}`}
        >
          Next
        </button>
      </div>
    </div>
  );
};
