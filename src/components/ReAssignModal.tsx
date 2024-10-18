import React, { useState } from 'react';

export const ReAssignModal = ({ show, onClose, report }) => {
  const [reassignId, setReassignId] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const [assignedTo, setAssignedTo] = useState('');
  const [deadline, setDeadline] = useState('');

  if (!show) return null; // Hide modal if not shown
  console.log('report', report);

  // Example roles and users (you can replace this with real data)
  const roles = ['Developer', 'Tester', 'Project Manager'];
  const users = ['User A', 'User B', 'User C'];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
        <h2 className="text-xl font-bold mb-4">ReAssign Task</h2>
        <p className="mb-4">Reassign Project for: <strong>{report.task?.Project?.name || 'N/A'}</strong></p>
        <p className="mb-4">Reassign task for: <strong>{report.task?.taskName || 'N/A'}</strong></p>
        <p className="mb-4">Previous Developer: <strong>{report.task?.assignedUser?.name || 'N/A'}</strong></p>
        <p className="mb-4">Tester: <strong>{report.tester?.name || 'N/A'}</strong></p>
        <p className="mb-4">Severity: <strong>{report?.severity || 'N/A'}</strong></p>

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

        {/* Select role */}
        <div className="mb-4">
          <label className="block text-gray-700">Select Role:</label>
          <select
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
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

        {/* Assign to user */}
        <div className="mb-4">
          <label className="block text-gray-700">Assign To:</label>
          <select
            value={assignedTo}
            onChange={(e) => setAssignedTo(e.target.value)}
            className="w-full border px-3 py-2 rounded-md"
          >
            <option value="">Select a user</option>
            {users.map((user, index) => (
              <option key={index} value={user}>
                {user}
              </option>
            ))}
          </select>
        </div>

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
            onClick={() => {
              // Handle reassign logic here
              console.log('Reassigned to:', assignedTo, 'with role:', selectedRole, 'and deadline:', deadline);
              console.log('Reassign ID:', reassignId);
              onClose(); // Close modal
            }}
          >
            ReAssign
          </button>
        </div>
      </div>
    </div>
  );
};
