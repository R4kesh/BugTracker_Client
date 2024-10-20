
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom'; 

// export const TaskListTable = () => {
//   const { epicId } = useParams();
//   const [tasks, setTasks] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [selectedTask, setSelectedTask] = useState(null);
//   const [dueDate, setDueDate] = useState('');
//   const [deadlineDate, setDeadlineDate] = useState('');
//   const [selectedRole, setSelectedRole] = useState('');
//   const [roles, setRoles] = useState([]);
//   const [users, setUsers] = useState([]);
//   const [filteredUsers, setFilteredUsers] = useState([]);
//   const [selectedUserId, setSelectedUserId] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   useEffect(() => {
//     const fetchTasks = async () => {
//       try {
      
        
       
//         const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/project/task/getAll/${epicId}`);
//         console.log('respon',response.data);
        

        
//         setTasks(response.data);
//       } catch (error) {
//         console.error('Error fetching tasks:', error);
//       }
//     };

//     fetchTasks();
//   }, [tasks]);

//   useEffect(() => {
//     if (showModal) {
//       const fetchRolesAndUsers = async () => {
//         try {
//           const rolesResponse = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/project/task/assign/roles`); // Fetch roles from your API
//           const usersData = rolesResponse.data;

//           const uniqueRoles = [...new Set(usersData.map(user => user.role))];
//           setRoles(uniqueRoles);
//           setUsers(usersData);
//         } catch (error) {
//           console.error('Error fetching roles or users:', error);
//         }
//       };

//       fetchRolesAndUsers();
//     }
//   }, [showModal]);

//   const handleAssignClick = (task) => {
//     setSelectedTask(task); // Set the task for the modal
//     setShowModal(true); // Open modal
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//     setSelectedTask(null);
//     setDueDate('');
//     setDeadlineDate('');
//     setSelectedRole('');
//     setFilteredUsers([]); 
//     setSelectedUserId('');
//     setErrorMessage(''); // Reset error message
//   };

//   const handleRoleChange = (role) => {
//     setSelectedRole(role);
//     // Filter users based on the selected role
//     const filtered = users.filter(user => user.role === role);
//     setFilteredUsers(filtered);
//   };

//   const handleSubmit = async () => {
//     if (!selectedTask || !dueDate || !selectedRole || filteredUsers.length === 0) {
//       setErrorMessage('Please fill in all fields before submitting.');
//       return;
//     }

//     const selectedUser = filteredUsers[0]; // Assuming you want to take the first user from filteredUsers

//     const dataToSubmit = {
//       taskId: selectedTask.id,
//       assignedTo: selectedUserId,
//       dueDate: dueDate,
//       deadlineDate: deadlineDate,
//     };

//     try {
//       console.log('data',dataToSubmit);
      
      
//       await axios.put(`${import.meta.env.VITE_BASE_URL}/api/project/task/assignto`, dataToSubmit);

     
//       setTasks(prevTasks =>
//         prevTasks.map(task =>
//           task.id === selectedTask.id
//             ? { ...task, assigned: selectedUser.name, dueDate, deadlineDate }
//             : task
//         )
//       );

//       handleCloseModal();
//     } catch (error) {
//       console.error('Error submitting task assignment:', error);
//       setErrorMessage('Failed to assign the task. Please try again.');
//     }
//   };

//   return (
//     <div className="overflow-x-auto">
//       <h3 className="text-center text-4xl mb-10 text-white">TaskList</h3>
//       <table className="mb-10 min-w-full table-auto bg-gray-900 text-gray-100 rounded-lg shadow-md">
//         <thead>
//           <tr className="bg-gray-800 text-left uppercase text-xs text-gray-400">
//             <th className="px-6 py-3">ID</th>
//             <th className="px-6 py-3">Module Name</th>
//             <th className="px-6 py-3">Task Name</th>
//             <th className="px-6 py-3">Description</th>
//             <th className="px-6 py-3">User Story</th>
//             <th className="px-6 py-3">Assigned To</th>
//             <th className="px-6 py-3">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {tasks.length > 0 ? (
//             tasks.map((task) => (
//               <tr key={task.id} className="hover:bg-gray-600 transition-all duration-200">
//                 <td className="px-6 py-4">{task.id}</td>
//                 <td className="px-6 py-4">{task.Epic.name}</td>
//                 <td className="px-6 py-4">{task.taskName}</td>
//                 <td className="px-6 py-4">{task.description}</td>
//                 <td className="px-6 py-4">{task.userStory}</td>
//                 <td className="px-6 py-4">{task.assignedUser ? task.assignedUser.name : 'Not Assigned'}</td>
//                 <td className="px-6 py-4">
//                   {/* Assign Task button */}
//                   <button
//                     onClick={() => handleAssignClick(task)}
//                     className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
//                   >
//                     Assign Task
//                   </button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan={5} className="text-center py-4">
//                 No tasks found
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>

//       {/* Modal */}
//       {showModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
//           <div className="bg-slate-700 p-6 rounded-lg shadow-lg w-1/3">
//             <h3 className="text-3xl font-bold mb-4">Assign Task</h3>
//             <div className="mb-4">
//               <p className='text text-slate-200 text-2xl'>
//                 <strong>Task Name:</strong> {selectedTask.taskName}
//               </p>
//               <p className='text  text-slate-200 text-2xl'>
//                 <strong>Description:</strong> {selectedTask.description}
//               </p>
//               <p className='text  text-slate-200 text-2xl'>
//                 <strong>Assigned To:</strong> {selectedTask.assigned || 'Not Assigned'}
//               </p>
//             </div>

//             {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>} {/* Error message display */}

//             <div className="flex mb-4 space-x-4">
//               {/* Due Date */}
//               <div className="w-1/2">
//                 <label className="block text-sm font-medium text-white-700">Due Date</label>
//                 <input
//                   type="date"
//                   value={dueDate}
//                   onChange={(e) => setDueDate(e.target.value)}
//                   className="mt-1 p-2 border rounded w-full"
//                 />
//               </div>

//               {/* Deadline Date */}
//               <div className="w-1/2">
//                 <label className="block text-sm font-medium text-white-700">Deadline Date</label>
//                 <input
//                   type="date"
//                   value={deadlineDate}
//                   onChange={(e) => setDeadlineDate(e.target.value)}
//                   className="mt-1 p-2 border rounded w-full"
//                 />
//               </div>
//             </div>

//             <div className="flex mb-4 space-x-4">
//               {/* Role */}
//               <div className="w-1/2">
//                 <label className="block text-sm font-medium text-white-700">Role</label>
//                 <select
//                   value={selectedRole}
//                   onChange={(e) => handleRoleChange(e.target.value)}
//                   className="mt-1 p-2 border rounded w-full"
//                 >
//                   <option value="">Select Role</option>
//                   {roles.map((role) => (
//                     <option key={role} value={role}>{role}</option>
//                   ))}
//                 </select>
//               </div>

//               {/* Name of User */}
//               <div className="w-1/2">
//                 <label className="block text-sm font-medium text-white-700">Name</label>
//                 <select
//                 value={selectedUserId} // Use the selected user ID
//                 onChange={(e) => setSelectedUserId(e.target.value)}
//                   className="mt-1 p-2 border rounded w-full"
//                 >
//                   <option value={selectedUserId}>Select Name</option>
//                   {filteredUsers.map((user) => (
//                     <option key={user.id} value={user.id}>{user.name}</option>
//                   ))}
//                 </select>
//               </div>
//             </div>
//             <div className="flex justify-end">
//               <button
//                 onClick={handleCloseModal}
//                 className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg mr-2"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleSubmit}
//                 className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg"
//               >
//                 Assign
//               </button>
            
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export const TaskListTable = () => {
  const { epicId } = useParams();
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [dueDate, setDueDate] = useState('');
  const [deadlineDate, setDeadlineDate] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const [roles, setRoles] = useState([]);
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 4;

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/project/task/getAll/${epicId}`,{withCredentials:true});
        console.log('respon', response.data);
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, [epicId,selectedUserId]); // Corrected dependency to avoid infinite loop

  useEffect(() => {
    if (showModal) {
      const fetchRolesAndUsers = async () => {
        try {
          const rolesResponse = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/project/task/assign/roles`,{withCredentials:true});
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
      await axios.put(`${import.meta.env.VITE_BASE_URL}/api/project/task/assignto`, dataToSubmit,{withCredentials:true});
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
      <h3 className="text-center text-4xl mb-10 text-white">TaskList</h3>
      <table className="mb-10 min-w-full table-auto bg-gray-900 text-gray-100 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-800 text-left uppercase text-xs text-gray-400">
            <th className="px-6 py-3">ID</th>
            <th className="px-6 py-3">Module Name</th>
            <th className="px-6 py-3">Task Name</th>
            <th className="px-6 py-3">Description</th>
            <th className="px-6 py-3">User Story</th>
            <th className="px-6 py-3">Assigned To</th>
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

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-slate-700 p-6 rounded-lg shadow-lg w-1/3">
            <h3 className="text-3xl font-bold mb-4">Assign Task</h3>
            <div className="mb-4">
              <p className='text text-slate-200 text-2xl'>
                <strong>Task Name:</strong> {selectedTask.taskName}
              </p>
              <p className='text text-slate-200 text-2xl'>
                <strong>Description:</strong> {selectedTask.description}
              </p>
              <p className='text text-slate-200 text-2xl'>
                <strong>Assigned To:</strong> {selectedTask.assigned || 'Not Assigned'}
              </p>
            </div>

            {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}

            <div className="flex mb-4 space-x-4">
              <div className="w-1/2">
                <label className="block text-sm font-medium text-white-700">Due Date</label>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="mt-1 p-2 block w-full border-gray-300 rounded-md"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-medium text-white-700">Deadline Date</label>
                <input
                  type="date"
                  value={deadlineDate}
                  onChange={(e) => setDeadlineDate(e.target.value)}
                  className="mt-1 p-2 block w-full border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-white-700">Select Role</label>
              <select
                value={selectedRole}
                onChange={(e) => handleRoleChange(e.target.value)}
                className="mt-1 p-2 block w-full border-gray-300 rounded-md"
              >
                <option value="">-- Select Role --</option>
                {roles.map((role, index) => (
                  <option key={index} value={role}>{role}</option>
                ))}
              </select>
            </div>

            {filteredUsers.length > 0 && (
              <div className="mb-4">
                <label className="block text-sm font-medium text-white-700">Select User</label>
                <select
                  value={selectedUserId}
                  onChange={(e) => setSelectedUserId(e.target.value)}
                  className="mt-1 p-2 block w-full border-gray-300 rounded-md"
                >
                  <option value="">-- Select User --</option>
                  {filteredUsers.map((user) => (
                    <option key={user.id} value={user.id}>{user.name}</option>
                  ))}
                </select>
              </div>
            )}

            <div className="flex justify-end">
              <button
                onClick={handleCloseModal}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg mr-2"
              >
                Close
              </button>
              <button
                onClick={handleSubmit}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
              >
                Assign Task
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
