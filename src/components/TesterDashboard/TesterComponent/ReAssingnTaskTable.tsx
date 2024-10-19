import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// Define the structure of each task
interface Task {
  id: number;
  project: { name: string } | null;
  task: {
    TaskName: string;
    description: string;
    status: string;
  } | null;
  previousDeveloper: { name: string } | null;
  severity: string | null;
  bugReport?: {
    fileLink: string[];
  };
}

export const ReAssignTaskTable: React.FC = () => {
  const [reAssignedTasks, setReAssignedTasks] = useState<Task[]>([]);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null); // State to store selected task for modal
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal open/close state

  useEffect(() => {
    const fetchReAssignedTasks = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/tester/reassignlist`);
        setReAssignedTasks(response.data);
      } catch (error) {
        console.error('Error fetching re-assigned tasks:', error);
      }
    };

    fetchReAssignedTasks(); // Call the fetch function
  }, []);

  // Open the modal and set the selected task
  const handleViewMore = (task: Task) => {
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  // Close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTask(null); // Clear the selected task when closing
  };

  return (
    <div className="overflow-x-auto">
      <h3 className="text-center text-4xl mb-10 text-white">Re-Assigned Tasks</h3>

      <table className="mb-10 min-w-full table-auto bg-gray-900 text-gray-100 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-800 text-left uppercase text-xs text-gray-400">
            <th className="px-6 py-3">ID</th>
            <th className="px-6 py-3">Project Name</th>
            <th className="px-6 py-3">Task Name</th>
            <th className="px-6 py-3">Task Description</th>
            <th className="px-6 py-3">Previous Developer</th>
            <th className="px-6 py-3">Severity</th>
            <th className="px-6 py-3">Status</th>
            <th className="px-6 py-3">Bug Reported</th>
            <th className="px-6 py-3">Test Case</th>
          </tr>
        </thead>
        <tbody>
          {reAssignedTasks.length > 0 ? (
            reAssignedTasks.map((task) => (
              <tr key={task.id} className="hover:bg-gray-600 transition-all duration-200">
                <td className="px-6 py-4">{task.id}</td>
                <td className="px-6 py-4">{task.project?.name || 'N/A'}</td>
                <td className="px-6 py-4">{task.task?.TaskName || 'N/A'}</td>
                <td className="px-6 py-4">{task.task?.description || 'N/A'}</td>
                <td className="px-6 py-4">{task.previousDeveloper?.name || 'N/A'}</td>
                <td className="px-6 py-4">{task.severity || 'N/A'}</td>
                <td className="px-6 py-4 capitalize">{task.task?.status || 'N/A'}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleViewMore(task)}
                    className="bg-blue-500 text-white rounded-md px-2 py-1"
                  >
                    View More
                  </button>
                </td>
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
              <td colSpan={9} className="text-center py-4">
                No tasks found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Modal for showing task details */}
      {isModalOpen && selectedTask && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full">
            <h2 className="text-xl mb-4">Task Details for ID: {selectedTask.id}</h2>
            <p><strong>Task Name:</strong> {selectedTask.task?.TaskName || 'N/A'}</p>
            <p><strong>Description:</strong> {selectedTask.task?.description || 'N/A'}</p>

            {/* Display image previews if available */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              {Array.isArray(selectedTask.bugReport?.fileLink) && selectedTask.bugReport.fileLink.length > 0 ? (
                selectedTask.bugReport.fileLink.map((file, index) => {
                  const imageUrl = `${import.meta.env.VITE_BASE_URL}${file}`;
                  return (
                    <img
                      key={index}
                      src={imageUrl}
                      alt={`Uploaded file ${index + 1}`}
                      className="mb-4 w-full h-auto"
                    />
                  );
                })
              ) : (
                <p>No images uploaded</p>
              )}
            </div>

            <button
              className="mt-4 bg-blue-500 text-white rounded-md px-4 py-2"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
