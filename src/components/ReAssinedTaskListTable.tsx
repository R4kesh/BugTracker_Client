import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const ReAssignedTaskListTable = () => {
  const [reassignedTasks, setReassignedTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchReassignedTasks = async () => {
      try {
        // Get user ID from local storage and parse it
        const user = JSON.parse(localStorage.getItem('user')); // Assuming userId is stored as a stringified JSON
        const userid=user.id
        console.log('jsadf',userid);
        
        // Make the request with userId as a query parameter
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/api/userDashboard/reassignedList`,
          {
            params: { userid}, 
          }
        );

        setReassignedTasks(response.data);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch reassigned tasks');
        setLoading(false);
      }
    };

    fetchReassignedTasks();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="overflow-x-auto">
      <h3 className="text-center text-4xl mb-10 text-white">Re-Assigned Task</h3>
      <table className="mb-10 min-w-full table-auto bg-gray-900 text-gray-100 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-800 text-left uppercase text-xs text-gray-400">
            <th className="px-6 py-3">ID</th>
            <th className="px-6 py-3">Project Name</th>
            <th className="px-6 py-3">Task Name</th>
            <th className="px-6 py-3">Reassign ID</th>
            <th className="px-6 py-3">Severity</th>
            <th className="px-6 py-3">Failed Steps</th>
            <th className="px-6 py-3">Tester Name</th>
            <th className="px-6 py-3">Previous Developer</th>
            <th className="px-6 py-3">Bug Report</th>
            <th className="px-6 py-3">ReAssigned To</th>
            <th className="px-6 py-3">Deadline</th>
            <th className="px-6 py-3">Task Status</th>
          </tr>
        </thead>
        <tbody>
          {reassignedTasks.length > 0 ? (
            reassignedTasks.map((task) => (
              <tr key={task.reassignId} className="hover:bg-gray-600 transition-all duration-200">
                <td className="px-6 py-4">{task.reassignId}</td>
                <td className="px-6 py-4">{task.task.project?.name || 'N/A'}</td>
                <td className="px-6 py-4">{task.task?.name || 'N/A'}</td>
                <td className="px-6 py-4">{task.reassignId}</td>
                <td className="px-6 py-4">{task.severity}</td>
                <td className="px-6 py-4">{task.bugReport?.steps || 'N/A'}</td>
                <td className="px-6 py-4">{task.tester?.name || 'N/A'}</td>
                <td className="px-6 py-4">{task.previousDeveloper?.name || 'N/A'}</td>
                <td className="px-6 py-4">{task.bugReport?.result || 'N/A'}</td>
                <td className="px-6 py-4">{task.reassignedTo?.name || 'N/A'}</td>
                <td className="px-6 py-4">{new Date(task.deadline).toLocaleDateString() || 'N/A'}</td>
                <td className="px-6 py-4 capitalize">{task.task?.status || 'N/A'}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={12} className="text-center py-4">
                No reassigned tasks found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
