// import React,{useState,useEffect} from 'react';
// import axios from 'axios';


// export const TaskListTable = () => {
//   const [tasks, setTasks] = useState([]);

 

//   useEffect(() => {
//     const fetchTasks = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/api/project/task/getAll'); 
//         setTasks(response.data); 
//       } catch (error) {
//         console.error('Error fetching tasks:', error);
//       }
//     };

//     fetchTasks(); 
//   }, [tasks]);
 

//   return (
//     <div className="overflow-x-auto">
//          <h3 className='text-center text-4xl mb-10 text-white'> TaskList</h3>
//       <table className="mb-10 min-w-full table-auto bg-gray-900 text-gray-100 rounded-lg shadow-md">
//         <thead>
//           <tr className="bg-gray-800 text-left uppercase text-xs text-gray-400">
//             <th className="px-6 py-3">ID</th>
//             <th className="px-6 py-3">Task Name</th>
//             <th className="px-6 py-3">Description</th>
//             <th className="px-6 py-3">Assigned To</th>
//             <th className="px-6 py-3">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//         {tasks.length > 0 ? (
//             tasks.map((task, index) => (
//             <tr key={task.id}
//             //   key={row.id}
//               className={" hover:bg-gray-600 transition-all duration-200"}
//             >
//               <td className="px-6 py-4">{task.id}</td>
//               <td className="px-6 py-4">{task.taskName}</td>
//               <td className="px-6 py-4">{task.description}</td>
//               <td className="px-6 py-4">{task.assigned ? task.assigned : "Not Assigned"}</td>
//               <td className="px-6 py-4">
//                 {/* Approve button */}
//                 <button
//                   className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
//                    // Trigger approval on click
//                 >
//                   Assign Task
//                 </button>
//               </td>
//             </tr>
//              ))
//              ) : (
//                <tr>
//                  <td colSpan={5} className="text-center py-4">
//                    No tasks found
//                  </td>
//                </tr>
//              )}
//         </tbody>
//       </table>
    

//     </div>
//   );
// };
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const TaskListTable = () => {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('');

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/project/task/getAll');
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, [tasks]);

  const handleAssignClick = (task) => {
    setSelectedTask(task); // Set the task for the modal
    setShowModal(true); // Open modal
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedTask(null);
    setDueDate('');
    setPriority('');
  };

  const handleSubmit = () => {
    console.log('Assigned task:', selectedTask, 'Due date:', dueDate, 'Priority:', priority);
    handleCloseModal();
    // Add your logic to handle the form submission (e.g., API call)
  };

  return (
    <div className="overflow-x-auto">
      <h3 className="text-center text-4xl mb-10 text-white">TaskList</h3>
      <table className="mb-10 min-w-full table-auto bg-gray-900 text-gray-100 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-800 text-left uppercase text-xs text-gray-400">
            <th className="px-6 py-3">ID</th>
            <th className="px-6 py-3">Task Name</th>
            <th className="px-6 py-3">Description</th>
            <th className="px-6 py-3">Assigned To</th>
            <th className="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <tr key={task.id} className="hover:bg-gray-600 transition-all duration-200">
                <td className="px-6 py-4">{task.id}</td>
                <td className="px-6 py-4">{task.taskName}</td>
                <td className="px-6 py-4">{task.description}</td>
                <td className="px-6 py-4">{task.assigned ? task.assigned : 'Not Assigned'}</td>
                <td className="px-6 py-4">
                  {/* Assign Task button */}
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
              <td colSpan={5} className="text-center py-4">
                No tasks found
              </td>
            </tr>
          )}
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

        
            <div className="flex mb-4 space-x-4">
  {/* Due Date */}
  <div className="w-1/2">
    <label className="block text-sm font-medium text-gray-700">Due Date</label>
    <input
      type="date"
      value={dueDate}
      onChange={(e) => setDueDate(e.target.value)}
      className="mt-1 p-2 border rounded w-full"
    />
  </div>

  {/* Deadline Date */}
  <div className="w-1/2">
    <label className="block text-sm font-medium text-gray-700">Deadline Date</label>
    <input
      type="date"
      className="mt-1 p-2 border rounded w-full"
      placeholder="Select Deadline"
    />
  </div>
</div>

        
<div className="flex mb-4 space-x-4">
  {/* Name of User */}
  <div className="w-1/2">
  <label className="block text-sm font-medium text-gray-700">Name</label>
    <select
      className="mt-1 p-2 border rounded w-full"
    >
      <option value="">Select Name</option>
      <option value="Low">Low</option>
      {/* Add more roles as needed */}
    </select>
  </div>

  {/* Role */}
  <div className="w-1/2">
    <label className="block text-sm font-medium text-gray-700">Role</label>
    <select
      className="mt-1 p-2 border rounded w-full"
    >
      <option value="">Select Role</option>
      <option value="Low">Low</option>
      {/* Add more roles as needed */}
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
              <a href="/assignedlist"><button
                onClick={handleSubmit}
                className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg"
              >
                Submit
              </button>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
