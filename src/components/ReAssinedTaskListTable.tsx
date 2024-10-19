// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// export const ReAssignedTaskListTable = () => {
 

//   return (
//     <div className="overflow-x-auto">
//       <h3 className="text-center text-4xl mb-10 text-white">Re-Assigned Task</h3>
//       <table className="mb-10 min-w-full table-auto bg-gray-900 text-gray-100 rounded-lg shadow-md">
//         <thead>
//           <tr className="bg-gray-800 text-left uppercase text-xs text-gray-400">
//             <th className="px-6 py-3">ID</th>
//             <th className="px-6 py-3">Project Name</th>
//             <th className="px-6 py-3">Task Name</th>
//             <th className="px-6 py-3">Reassign ID</th>
//             <th className="px-6 py-3">Severity</th>
//             <th className="px-6 py-3">Failed Steps</th>
//             <th className="px-6 py-3">Tester Name</th>
//             <th className="px-6 py-3">Previous Developer</th>
//             <th className="px-6 py-3">Bug Report</th>
//             <th className="px-6 py-3">ReAssigned To</th>
//             <th className="px-6 py-3">Deadline</th>
//             <th className="px-6 py-3">Task Status</th>
//           </tr>
//         </thead>
//         <tbody>
        
//               <tr  className="hover:bg-gray-600 transition-all duration-200">
//                 <td className="px-6 py-4">id</td>
//                 <td className="px-6 py-4">projectname</td>
//                 <td className="px-6 py-4">task name</td>
//                 <td className="px-6 py-4">reassigned id</td>
//                 <td className="px-6 py-4">severity</td>
//                 <td className="px-6 py-4">failed steps</td>
//                 <td className="px-6 py-4">tester name</td>
//                 <td className="px-6 py-4">previous developer</td>
//                 <td className="px-6 py-4">bug report</td>
//                 <td className="px-6 py-4">reassigned to</td>
//                 <td className="px-6 py-4">deadline</td>
//                 <td className="px-6 py-4 capitalize">status</td>
//               </tr>
          
//             <tr>
//               <td colSpan={12} className="text-center py-4">
//                 No reassigned tasks found.
//               </td>
//             </tr>
      
//         </tbody>
//       </table>
//     </div>
//   );
// };


import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const ReAssignedTaskListTable = () => {
  const [reAssignedTasks, setReAssignedTasks] = useState([]);

console.log('resassgn');


  useEffect(() => {
    const fetchReAssignedTasks = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/dashboard/reassignlist`);
        setReAssignedTasks(response.data);
      } catch (error) {
        console.error('Error fetching re-assigned tasks:', error);
      }
    };

    fetchReAssignedTasks();
  }, []);
console.log('datatatata',reAssignedTasks);

  return (
    <div className="overflow-x-auto">
      <h3 className="text-center text-4xl mb-10 text-white">Re-Assigned Task</h3>
      <table className="mb-10 min-w-full table-auto bg-gray-900 text-gray-100 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-800 text-left uppercase text-xs text-gray-400">
            <th className="px-6 py-3">ID</th>
            <th className="px-6 py-3">Project Name</th>
            <th className="px-6 py-3">Task Name</th>
            <th className="px-6 py-3">Reassign ID</th>
            <th className="px-6 py-3">Severity</th>
            <th className="px-6 py-3">Failed Steps</th>
            <th className="px-6 py-3">Tester Name</th>
            <th className="px-6 py-3">Previous Developer</th>
            <th className="px-6 py-3">Bug Report</th>
            <th className="px-6 py-3">ReAssigned To</th>
            <th className="px-6 py-3">Deadline</th>
            <th className="px-6 py-3">Task Status</th>
          </tr>
        </thead>
        <tbody>
          {reAssignedTasks.length > 0 ? (
            reAssignedTasks.map((task) => (
              <tr key={task.id} className="hover:bg-gray-600 transition-all duration-200">
                <td className="px-6 py-4">{task.id}</td>
                <td className="px-6 py-4">{task.project?.name || 'N/A'}</td>
                <td className="px-6 py-4">{task.task?.name || 'N/A'}</td>
                <td className="px-6 py-4">{task.bugReport.severity}</td>
                <td className="px-6 py-4">{task.bugReport.failedSteps || 'N/A'}</td>
                <td className="px-6 py-4">{task.tester?.name || 'N/A'}</td>
                <td className="px-6 py-4">{task.previousDeveloper?.name || 'N/A'}</td>
                <td className="px-6 py-4">{task.reassignedTo?.name || 'N/A'}</td>
                <td className="px-6 py-4">{new Date(task.deadline).toLocaleDateString()}</td>
                <td className="px-6 py-4 capitalize">{task.status || 'N/A'}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={12} className="text-center py-4">
                No reassigned tasks found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
