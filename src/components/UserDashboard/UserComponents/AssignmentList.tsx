import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const AssignmentList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const user = JSON.parse(localStorage.getItem('user')); // Fetch the user from local storage
        if (user && user.id) {
          const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/userDashboard/newtasks/user?userId=${user.id}`);
          setTasks(response.data);
        }
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  const handleApprove = async (taskId) => {
    const confirmApprove = window.confirm('Are you sure you want to approve this task?');
    if (confirmApprove) {
      try {
        await axios.put(`${import.meta.env.VITE_BASE_URL}/api/userDashboard/tasks/verifyByUser`, { taskId });
       

        
        setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
      } catch (error) {
        console.error('Error approving task:', error);
        alert('Failed to approve the task.');
      }
    }
  };

  return (
    <div className="overflow-x-auto">
      <h3 className='text-center text-4xl mb-10 text-white'>New Assignments</h3>
      <table className="mb-10 min-w-full table-auto bg-gray-900 text-gray-100 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-800 text-left uppercase text-xs text-gray-400">
            <th className="px-6 py-3">ID</th>
            <th className="px-6 py-3">Project Name</th>
            <th className="px-6 py-3">Task Name</th>
            <th className="px-6 py-3">Task Description</th>
            <th className="px-6 py-3">Start Date</th>
            <th className="px-6 py-3">Deadline</th>
            <th className="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id} className="bg-gray-800 hover:bg-gray-600 transition-all duration-200">
              <td className="px-6 py-4">{task.id}</td>
              <td className="px-6 py-4">{task.projectName}</td>
              <td className="px-6 py-4">{task.taskName}</td>
              <td className="px-6 py-4">{task.description}</td>
              <td className="px-6 py-4">{new Date(task.starting).toLocaleDateString()}</td>
              <td className="px-6 py-4">{new Date(task.deadline).toLocaleDateString()}</td>
              <td className="px-6 py-4">
                <button
                  className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 mr-2'
                  onClick={() => handleApprove(task.id)}
                >
                  Approve
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
