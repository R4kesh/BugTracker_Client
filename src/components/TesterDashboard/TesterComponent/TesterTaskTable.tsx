import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export const TesterTaskTable = () => {
  const [tasks, setTasks] = useState([]);  // Default to an empty array
  const [loading, setLoading] = useState(true);

  // Fetch tasks on component mount
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/tester/listTasks');
        console.log(response.data);  // Check what the response looks like
        setTasks(Array.isArray(response.data) ? response.data : []);  // Ensure the data is an array
        setLoading(false);
      } catch (error) {
        console.error('Error fetching tasks:', error);
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);  // Empty array ensures this runs once when component mounts

  if (loading) {
    return <div>Loading tasks...</div>;  // Loader while fetching data
  }

  return (
    <div className="overflow-x-auto">
      <h3 className="text-center text-4xl mb-10 text-white">New Tasks</h3>
      <table className="mb-10 min-w-full table-auto bg-gray-900 text-gray-100 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-800 text-left uppercase text-xs text-gray-400">
            <th className="px-6 py-3">ID</th>
            <th className="px-6 py-3">Project Name</th>
            <th className="px-6 py-3">Task Name</th>
            <th className="px-6 py-3">Task Description</th>
            <th className="px-6 py-3">Role</th>
            <th className="px-6 py-3">UserName</th>
            <th className="px-6 py-3">Status</th>
            <th className="px-6 py-3">Test Case</th>
          </tr>
        </thead>
        <tbody>
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <tr key={task.id} className="hover:bg-gray-600 transition-all duration-200">
                <td className="px-6 py-4">{task.id}</td>
                <td className="px-6 py-4">{task.Project?.name || 'No project'}</td>
                <td className="px-6 py-4">{task.taskName}</td>
                <td className="px-6 py-4">{task.description}</td>
                <td className="px-6 py-4">{task.assignedUser?.role || 'Unassigned'}</td>
                <td className="px-6 py-4">{task.assignedUser?.name || 'Unassigned'}</td>
                <td className="px-6 py-4 capitalize">{task.status}</td>
                <td className="px-6 py-4">
                  <Link to={`/testcase/${task.id}`}>
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                    >
                      Add TestCase
                    </button>
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={8} className="text-center py-4">No tasks found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
