import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const ReAssignModal = ({ show, onClose, report }) => {
  const [reassignId, setReassignId] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const [assignedTo, setAssignedTo] = useState('');
  const [deadline, setDeadline] = useState('');
  const [roles, setRoles] = useState([]); // For holding roles fetched from API
  const [users, setUsers] = useState([]); // All users fetched from API
  const [filteredUsers, setFilteredUsers] = useState([]); // Users filtered by selected role
  const [errorMessage, setErrorMessage] = useState(''); // For validation error message

  if (!show) return null; // Hide modal if not shown


  console.log('reports',report);
  
  useEffect(() => {
    const fetchRolesAndUsers = async () => {
      try {
        // Fetch roles and users data from the API (assuming the same API as in TaskListTable)
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/project/task/assign/roles`,{withCredentials:true});
        const usersData = response.data;

        // Get unique roles and set them
        const uniqueRoles = [...new Set(usersData.map(user => user.role))];
        setRoles(uniqueRoles);
        setUsers(usersData);
      } catch (error) {
        console.error('Error fetching roles or users:', error);
      }
    };

    fetchRolesAndUsers();
  }, []);

  const handleRoleChange = (role) => {
    setSelectedRole(role);
    const filtered = users.filter(user => user.role === role);
    setFilteredUsers(filtered); // Set filtered users based on role
  };

  const handleSubmit = async () => {
    // Validate fields
    if (!selectedRole || !assignedTo || !deadline || !reassignId) {
      setErrorMessage('Please fill in all fields before submitting.');
      return;
    }
  
    // Prepare data to send to the backend
    const reassignData = {
      reassignId,
      deadline, // Selected deadline
      taskId: report.task?.id, // Task ID from the report
      projectId: report.task?.Project?.id, // Project ID from the report
      testerId: report.tester?.id, // Tester ID from the report
      taskStartedDate: report.task?.starting || 'N/A', // Task started date (from the report, assuming the field exists)
      reassignDate: new Date().toISOString(), // Today's date as reassignment date
      severity: report?.severity, // Severity from the report
      bugReportId: report?.id, // Bug report ID from the report
      previousDeveloperId: report.task?.assignedUser?.id, // Previous developer's ID
      reassignedToId: assignedTo // Selected user ID from the dropdown (filtered by role)
    };

    console.log('reassigndata',reassignData);
    
  
    try {
      // Send POST request to the backend
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/dashboard/reassign`, reassignData,{withCredentials:true});
      console.log('Reassignment successful:', response.data);
  
      // Optionally handle the response if needed (e.g., display a success message)
      setErrorMessage(''); // Clear error message
      onClose(); // Close the modal after successful submission
    } catch (error) {
      console.error('Error reassigning task:', error);
      setErrorMessage('Failed to reassign task. Please try again.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
        <h2 className="text-xl font-bold mb-4">ReAssign Task</h2>
        <p className="mb-4">Reassign Project for: <strong>{report.task?.Project?.name || 'N/A'}</strong></p>
        <p className="mb-4">Reassign task for: <strong>{report.task?.taskName || 'N/A'}</strong></p>
        <p className="mb-4">Previous Developer: <strong>{report.task?.assignedUser?.name || 'N/A'}</strong></p>
        <p className="mb-4">Tester: <strong>{report.tester?.name || 'N/A'}</strong></p>
        <p className="mb-4">Severity: <strong>{report?.severity || 'N/A'}</strong></p>

        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}

        {/* Reassign ID */}
        <div className="mb-4">
          <label className="block text-gray-700">ReAssign ID:</label>
          <input
            type="text"
            value={reassignId}
            onChange={(e) => setReassignId(e.target.value)}
            placeholder="Enter ReAssign ID"
            className="w-full border px-3 py-2 rounded-md"
          />
        </div>

        {/* Select Role */}
        <div className="mb-4">
          <label className="block text-gray-700">Select Role:</label>
          <select
            value={selectedRole}
            onChange={(e) => handleRoleChange(e.target.value)}
            className="w-full border px-3 py-2 rounded-md"
          >
            <option value="">Select a role</option>
            {roles.map((role, index) => (
              <option key={index} value={role}>
                {role}
              </option>
            ))}
          </select>
        </div>

        {/* Select User (filtered by selected role) */}
        {filteredUsers.length > 0 && (
          <div className="mb-4">
            <label className="block text-gray-700">Assign To:</label>
            <select
              value={assignedTo}
              onChange={(e) => setAssignedTo(e.target.value)}
              className="w-full border px-3 py-2 rounded-md"
            >
              <option value="">Select a user</option>
              {filteredUsers.map(user => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Deadline */}
        <div className="mb-4">
          <label className="block text-gray-700">Deadline:</label>
          <input
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            className="w-full border px-3 py-2 rounded-md"
          />
        </div>

        <div className="flex justify-end space-x-4">
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded-md"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={handleSubmit}
          >
            ReAssign
          </button>
        </div>
      </div>
    </div>
  );
};
