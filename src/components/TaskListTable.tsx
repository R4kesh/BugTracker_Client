import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export const TaskListTable = () => {
  const { epicId } = useParams();
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false); // New state for image modal
  const [selectedTask, setSelectedTask] = useState(null);
  const [dueDate, setDueDate] = useState('');
  const [deadlineDate, setDeadlineDate] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const [roles, setRoles] = useState([]);
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [imageLinks, setImageLinks] = useState([]); // New state for image links

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 4;

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/project/task/getAll/${epicId}`, { withCredentials: true });
        console.log('respon', response.data);
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, [epicId, selectedUserId]); // Corrected dependency to avoid infinite loop

  useEffect(() => {
    if (showModal) {
      const fetchRolesAndUsers = async () => {
        try {
          const rolesResponse = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/project/task/assign/roles`, { withCredentials: true });
          const usersData = rolesResponse.data;

          const uniqueRoles = [...new Set(usersData.map(user => user.role))];
          setRoles(uniqueRoles);
          setUsers(usersData);
        } catch (error) {
          console.error('Error fetching roles or users:', error);
        }
      };

      fetchRolesAndUsers();
    }
  }, [showModal]);

  const handleAssignClick = (task) => {
    setSelectedTask(task);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedTask(null);
    setDueDate('');
    setDeadlineDate('');
    setSelectedRole('');
    setFilteredUsers([]);
    setSelectedUserId('');
    setErrorMessage('');
  };

  const handleRoleChange = (role) => {
    setSelectedRole(role);
    const filtered = users.filter(user => user.role === role);
    setFilteredUsers(filtered);
  };

  const handleSubmit = async () => {
    if (!selectedTask || !dueDate || !selectedRole || filteredUsers.length === 0) {
      setErrorMessage('Please fill in all fields before submitting.');
      return;
    }

    const selectedUser = filteredUsers[0];

    const dataToSubmit = {
      taskId: selectedTask.id,
      assignedTo: selectedUserId,
      dueDate: dueDate,
      deadlineDate: deadlineDate,
    };

    try {
      console.log('data', dataToSubmit);
      await axios.put(`${import.meta.env.VITE_BASE_URL}/api/project/task/assignto`, dataToSubmit, { withCredentials: true });
      setTasks(prevTasks =>
        prevTasks.map(task =>
          task.id === selectedTask.id
            ? { ...task, assigned: selectedUser.name, dueDate, deadlineDate }
            : task
        )
      );
      handleCloseModal();
    } catch (error) {
      console.error('Error submitting task assignment:', error);
      setErrorMessage('Failed to assign the task. Please try again.');
    }
  };

  // New function to handle image view
  const handleViewClick = (task) => {
    setImageLinks(task.fileLink || []); // Assuming imageLinks is a property of task
    setShowImageModal(true);
  };

  // Pagination logic
  const indexOfLastTask = currentPage * rowsPerPage;
  const indexOfFirstTask = indexOfLastTask - rowsPerPage;
  const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);
  const totalPages = Math.ceil(tasks.length / rowsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  return (
    <div className="overflow-x-auto">
      <h3 className="text-center text-4xl mb-10 text-white">Task List</h3>
      <table className="mb-10 min-w-full table-auto bg-gray-900 text-gray-100 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-800 text-left uppercase text-xs text-gray-400">
            <th className="px-6 py-3">ID</th>
            <th className="px-6 py-3">Module Name</th>
            <th className="px-6 py-3">Task Name</th>
            <th className="px-6 py-3">Description</th>
            <th className="px-6 py-3">User Story</th>
            <th className="px-6 py-3">Assigned To</th>
            <th className="px-6 py-3">Details</th>
            <th className="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {currentTasks.length > 0 ? (
            currentTasks.map((task) => (
              <tr key={task.id} className="hover:bg-gray-600 transition-all duration-200">
                <td className="px-6 py-4">{task.id}</td>
                <td className="px-6 py-4">{task.Epic.name}</td>
                <td className="px-6 py-4">{task.taskName}</td>
                <td className="px-6 py-4">{task.description}</td>
                <td className="px-6 py-4">{task.userStory}</td>
                <td className="px-6 py-4">{task.assignedUser ? task.assignedUser.name : 'Not Assigned'}</td>
                <td className="px-6 py-4">
                  <button onClick={() => handleViewClick(task)} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg">
                    View
                  </button>
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleAssignClick(task)}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                  >
                    Assign Task
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7} className="text-center py-4">
                No tasks found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination controls */}
      <div className="flex justify-between mb-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg"
        >
          Previous
        </button>
        <span className="text-white">Page {currentPage} of {totalPages}</span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg"
        >
          Next
        </button>
      </div>

      {/* Assign Task Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-slate-700 p-6 rounded-lg shadow-lg w-1/3">
            <h3 className="text-2xl font-semibold mb-4">Assign Task</h3>
            <p className="text-red-500">{errorMessage}</p>
            <div className="mb-4">
              <label className="block text-white">Role</label>
              <select
                value={selectedRole}
                onChange={(e) => handleRoleChange(e.target.value)}
                className="w-full p-2 border rounded-md"
              >
                <option value="">Select Role</option>
                {roles.map(role => (
                  <option key={role} value={role}>{role}</option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-white">User</label>
              <select
                value={selectedUserId}
                onChange={(e) => setSelectedUserId(e.target.value)}
                className="w-full p-2 border rounded-md"
              >
                <option value="">Select User</option>
                {filteredUsers.map(user => (
                  <option key={user.id} value={user.id}>{user.name}</option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-white">Due Date</label>
              <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-white">Deadline Date</label>
              <input
                type="date"
                value={deadlineDate}
                onChange={(e) => setDeadlineDate(e.target.value)}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div className="flex justify-end">
              <button onClick={handleCloseModal} className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg mr-2">
                Cancel
              </button>
              <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Image Viewing Modal */}
      {showImageModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
    <div className="bg-slate-700 p-6 rounded-lg shadow-lg w-1/2">
      <h3 className="text-2xl font-semibold mb-4">Uploaded Images</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {imageLinks && imageLinks.length > 0 ? (
          imageLinks.map((link, index) => {
            console.log('image',link);
            
            const imageUrl = `${import.meta.env.VITE_BASE_URL}${link}`; // Construct the full URL
            console.log('ur',imageUrl);
            
            return (
              <img
                key={index}
                src={imageUrl}
                alt={`Task Image ${index + 1}`}
                className="object-cover rounded-md"
                onError={(e) => {
                  e.target.onerror = null; // Prevents looping
                  e.target.src = 'path/to/placeholder/image.png'; // Fallback image
                }}
              />
            );
          })
        ) : (
          <p className="text-white">No images uploaded</p>
        )}
      </div>
      <div className="flex justify-end mt-4">
        <button
          onClick={() => setShowImageModal(false)}
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  </div>
)}
    </div>
  );
};
