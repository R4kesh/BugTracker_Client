import React,{useState,useEffect} from 'react';
import axios from 'axios';


export const TaskListTable = () => {
  const [tasks, setTasks] = useState([]);

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
  }, []);
 

  return (
    <div className="overflow-x-auto">
         <h3 className='text-center text-4xl mb-10 text-white'> TaskList</h3>
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
            tasks.map((task, index) => (
            <tr key={task.id}
            //   key={row.id}
              className={" hover:bg-gray-600 transition-all duration-200"}
            >
              <td className="px-6 py-4">{task.id}</td>
              <td className="px-6 py-4">{task.taskName}</td>
              <td className="px-6 py-4">{task.description}</td>
              <td className="px-6 py-4">{task.assigned ? task.assigned : "Not Assigned"}</td>
              <td className="px-6 py-4">
                {/* Approve button */}
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                   // Trigger approval on click
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
    </div>
  );
};