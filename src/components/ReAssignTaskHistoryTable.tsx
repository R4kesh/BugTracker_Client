import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";


export function ReAssignTaskHistoryTable() {
  const [taskHistory, setTaskHistory] = useState([]);
  const { id } = useParams();

  

  useEffect(() => {
    const fetchTaskHistory = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/dashboard/trackhistory/listReassignTask/${id}`);
        setTaskHistory(response.data);
      } catch (error) {
        console.error('Error fetching task history', error);
      }
    };
    fetchTaskHistory();
  }, []);

  console.log('trareass',taskHistory);
  

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-8 text-white text-center">Re-Assign Task History</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 border-b border-gray-300">S No</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 border-b border-gray-300">Project Name</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 border-b border-gray-300">Task Name</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 border-b border-gray-300">Task Description</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 border-b border-gray-300">Start Date</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 border-b border-gray-300">Deadline</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 border-b border-gray-300">Bug Report</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 border-b border-gray-300">Status</th>
            </tr>
          </thead>
          <tbody>
            {taskHistory.map((task, index) => (
              <tr key={index} className="hover:bg-gray-50 transition duration-200">
                <td className="py-4 px-4 border-b border-gray-300">{index + 1}</td>
                <td className="py-4 px-4 border-b border-gray-300">{task.project.name}</td>
                <td className="py-4 px-4 border-b border-gray-300">{task.task.name}</td>
                <td className="py-4 px-4 border-b border-gray-300">{task.task.description}</td>
                <td className="py-4 px-4 border-b border-gray-300">{new Date(task.taskStartedDate).toLocaleDateString()}</td>
                <td className="py-4 px-4 border-b border-gray-300">{new Date(task.deadline).toLocaleDateString()}</td>
                <td className="py-4 px-4 border-b border-gray-300">{task.bugReport.description}</td>
                <td className="py-4 px-4 border-b border-gray-300">{task.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
