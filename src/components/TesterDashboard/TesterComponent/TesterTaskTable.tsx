import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// Define the Task type based on your data structure
interface Task {
  id: number;
  Project?: {
    name: string;
  };
  taskName: string;
  description: string;
  assignedUser?: {
    role: string;
    name: string;
  };
  status: string;
}

export const TesterTaskTable = () => {
  const [tasks, setTasks] = useState<Task[]>([]); // Use the Task type for tasks
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 4; // Limit to 4 tasks per page

  // Fetch tasks on component mount
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/tester/listTasks`);
        console.log(response.data); // Check what the response looks like
        setTasks(Array.isArray(response.data) ? response.data : []); // Ensure the data is an array
        setLoading(false);
      } catch (error) {
        console.error("Error fetching tasks:", error);
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  if (loading) {
    return <div>Loading tasks...</div>; // Loader while fetching data
  }

  // Calculate indices for current page tasks
  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);

  // Change page handler
  const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber);

  // Calculate total pages
  const totalPages = Math.ceil(tasks.length / tasksPerPage);

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
          {currentTasks.length > 0 ? (
            currentTasks.map((task) => (
              <tr
                key={task.id}
                className="hover:bg-gray-600 transition-all duration-200"
              >
                <td className="px-6 py-4">{task.id}</td>
                <td className="px-6 py-4">
                  {task.Project?.name || "No project"}
                </td>
                <td className="px-6 py-4">{task.taskName}</td>
                <td className="px-6 py-4">{task.description}</td>
                <td className="px-6 py-4">
                  {task.assignedUser?.role || "Unassigned"}
                </td>
                <td className="px-6 py-4">
                  {task.assignedUser?.name || "Unassigned"}
                </td>
                <td className="px-6 py-4 capitalize">{task.status}</td>
                <td className="px-6 py-4">
                  <Link to={`/testcase/${task.id}`}>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300">
                      Add TestCase
                    </button>
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={8} className="text-center py-4">
                No tasks found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="flex justify-center space-x-2 mt-6">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            className={`px-4 py-2 border rounded-lg ${currentPage === pageNumber ? "bg-blue-500 text-white" : "bg-gray-800 text-gray-100"
              }`}
          >
            {pageNumber}
          </button>
        ))}
      </div>
    </div>
  );
};
