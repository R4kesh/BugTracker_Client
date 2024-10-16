import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const WorksTable = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const user = JSON.parse(localStorage.getItem('user'));

        if (user && user.id) {
          const userId = user.id;

          const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/userDashboard/listApprovedTasks/${userId}`);
          setTasks(response.data);
        }
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  const handleStatusChange = async (taskId, newStatus) => {
    const isCompleted = newStatus === 'completed'; // Determine if the task is completed
    try {
      // Update the status and isCompleted in the database
      await axios.put(`${import.meta.env.VITE_BASE_URL}/api/userDashboard/changeTasksStatus/${taskId}`, { 
        status: newStatus,
        isCompleted: isCompleted, // Send isCompleted status
      });
      
      // Update local state to reflect the changes
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === taskId ? { ...task, status: newStatus, isCompleted } : task
        )
      );

      alert('Task status updated successfully!');
    } catch (error) {
      console.error('Error updating task status:', error);
      alert('Failed to update task status.');
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
            <th className="px-6 py-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id} className='bg-gray-700 hover:bg-gray-600 transition-all duration-200'>
              <td className="px-6 py-4">{task.id}</td>
              <td className="px-6 py-4">{task.projectName}</td>
              <td className="px-6 py-4">{task.taskName}</td>
              <td className="px-6 py-4">{task.description}</td>
              <td className="px-6 py-4">{task.starting ? new Date(task.starting).toLocaleDateString('en-US') : 'N/A'}</td>
              <td className="px-6 py-4">{task.deadline ? new Date(task.deadline).toLocaleDateString('en-US') : 'N/A'}</td>

              <td className="px-6 py-4">
                <select
                  className="p-2 border border-gray-300 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  defaultValue={task.status}
                  onChange={(e) => handleStatusChange(task.id, e.target.value)}
                >
                  <option value="pending">Pending</option>
                  <option value="started">Started</option>
                  <option value="in-progress">In Progress</option>
                  <option value="completed">Completed</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
