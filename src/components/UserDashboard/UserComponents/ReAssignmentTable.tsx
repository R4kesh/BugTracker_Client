import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const ReAssignmentTable = () => {
  const [reassignedTasks, setReassignedTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchReassignedTasks = async () => {
      const user = JSON.parse(localStorage.getItem('user')); 
      console.log('ueser',user);
      // Assuming userId is stored as a stringified JSON
        const userid=user.id
        console.log('jsadf',userid);// Get user ID from local storage

      try {
        // Fetch the reassigned tasks from the backend
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/userDashboard/reassignedList`, {
          params: {
            userid, // Pass the user ID as a query parameter
          },
        });
        console.log('response',response.data);
        

        // Set the state with the response data
        setReassignedTasks(response.data);
       
      } catch (error) {
        setError('Failed to fetch reassigned tasks');
        
      }
    };

    fetchReassignedTasks();
  }, []);



  return (
    <div className="overflow-x-auto">
      <h3 className='text-center text-4xl mb-10 text-white'>Re-Assignment</h3>
      <table className="mb-10 min-w-full table-auto bg-gray-900 text-gray-100 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-800 text-left uppercase text-xs text-gray-400">
            <th className="px-6 py-3">ID</th>
            <th className="px-6 py-3">Project Name</th>
            <th className="px-6 py-3">Task Name</th>
            <th className="px-6 py-3">Tester</th>
            <th className="px-6 py-3">Severity</th>
            <th className="px-6 py-3">Steps</th>

            <th className="px-6 py-3">Previous Developer</th>
            <th className="px-6 py-3">Bug Report</th>
            <th className="px-6 py-3">Deadline</th>
            <th className="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {reassignedTasks.length > 0 ? (
            reassignedTasks.map((task) => (
              <tr key={task.reassignId} className="bg-gray-800 hover:bg-gray-600 transition-all duration-200">
                <td className="px-6 py-4">{task.reassignId}</td>
                <td className="px-6 py-4">{task.task?.projectName || 'N/A'}</td>
                <td className="px-6 py-4">{task.task?.taskName || 'N/A'}</td>
                <td className="px-6 py-4">{task.tester?.name || 'N/A'}</td>
                <td className="px-6 py-4">{task.severity || 'N/A'}</td>
                <td className="px-6 py-4">{task.bugReport.steps || 'N/A'}</td>

                <td className="px-6 py-4">{task.previousDeveloper?.name || 'N/A'}</td>
                <td className="px-6 py-4">{task.bugReport?.result || 'N/A'}</td>
                <td className="px-6 py-4">{new Date(task.deadline).toLocaleDateString() || 'N/A'}</td>
                <td className="px-6 py-4">
                  <select
                    className="bg-gray-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                    defaultValue={task.task?.status || 'pending'}
                  >
                    <option value="pending">Pending</option>
                    <option value="started">Started</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                  </select>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={9} className="text-center py-4">
                No reassigned tasks found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
