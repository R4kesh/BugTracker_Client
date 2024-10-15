
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; 

export const EmployeeTable = () => {
  
  return (
    <div className="overflow-x-auto">
      <h3 className="text-center text-4xl mb-10 text-white">TaskList</h3>
      <table className="mb-10 min-w-full table-auto bg-gray-900 text-gray-100 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-800 text-left uppercase text-xs text-gray-400">
            <th className="px-6 py-3">ID</th>
            <th className="px-6 py-3">Employee Name</th>
            <th className="px-6 py-3">Employee Id</th>
            <th className="px-6 py-3">Designation</th>
            <th className="px-6 py-3">Emp Working From</th>
            <th className="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          
              <tr  className="hover:bg-gray-600 transition-all duration-200">
                <td className="px-6 py-4">id</td>
                <td className="px-6 py-4">employeename</td>
                <td className="px-6 py-4">employee id</td>
                <td className="px-6 py-4">designation</td>
                <td className="px-6 py-4">users tory</td>
                <td className="px-6 py-4">
               
                  <button
                  
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                  >
                    view Details

                    </button>
                </td>
              </tr>
           
          
        
        </tbody>
      </table>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-slate-700 p-6 rounded-lg shadow-lg w-1/3">
            <h3 className="text-3xl font-bold mb-4">Assign Task</h3>
            <div className="mb-4">
              <p className='text text-slate-200 text-2xl'>
                <strong>Task Name:</strong> {selectedTask.taskName}
              </p>
              <p className='text  text-slate-200 text-2xl'>
                <strong>Description:</strong> {selectedTask.description}
              </p>
              <p className='text  text-slate-200 text-2xl'>
                <strong>Assigned To:</strong> {selectedTask.assigned || 'Not Assigned'}
              </p>
            </div>

            {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>} {/* Error message display */}

            <div className="flex mb-4 space-x-4">
              {/* Due Date */}
              <div className="w-1/2">
                <label className="block text-sm font-medium text-white-700">Due Date</label>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="mt-1 p-2 border rounded w-full"
                />
              </div>

              {/* Deadline Date */}
              <div className="w-1/2">
                <label className="block text-sm font-medium text-white-700">Deadline Date</label>
                <input
                  type="date"
                  value={deadlineDate}
                  onChange={(e) => setDeadlineDate(e.target.value)}
                  className="mt-1 p-2 border rounded w-full"
                />
              </div>
            </div>

            <div className="flex mb-4 space-x-4">
              {/* Role */}
              <div className="w-1/2">
                <label className="block text-sm font-medium text-white-700">Role</label>
                <select
                  value={selectedRole}
                  onChange={(e) => handleRoleChange(e.target.value)}
                  className="mt-1 p-2 border rounded w-full"
                >
                  <option value="">Select Role</option>
                  {roles.map((role) => (
                    <option key={role} value={role}>{role}</option>
                  ))}
                </select>
              </div>

              {/* Name of User */}
              <div className="w-1/2">
                <label className="block text-sm font-medium text-white-700">Name</label>
                <select
                value={selectedUserId} // Use the selected user ID
                onChange={(e) => setSelectedUserId(e.target.value)}
                  className="mt-1 p-2 border rounded w-full"
                >
                  <option value={selectedUserId}>Select Name</option>
                  {filteredUsers.map((user) => (
                    <option key={user.id} value={user.id}>{user.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex justify-end">
              <button
                onClick={handleCloseModal}
                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg mr-2"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg"
              >
                Assign
              </button>
            
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

