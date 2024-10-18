import React from 'react';

export const ReAssignModal = ({ show, onClose, report }) => {
  if (!show) return null; // Hide modal if not shown

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
        <h2 className="text-xl font-bold mb-4">ReAssign Task</h2>
        <p className="mb-4">Reassign task for: <strong>{report.task?.taskName || 'N/A'}</strong></p>

        {/* You can add a form here for reassigning */}
        <div className="mb-4">
          <label className="block text-gray-700">Assign To:</label>
          <input
            type="text"
            placeholder="Enter developer name"
            className="w-full border px-3 py-2 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">projefctname:</label>
          <input
            type="text"
            placeholder="Enter developer name"
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
            onClick={onClose}
          >
            ReAssign
          </button>
        </div>
      </div>
    </div>
  );
};
