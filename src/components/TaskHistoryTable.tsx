import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

interface Project {
  name: string;
}

interface Task {
  id: number;
  Project: Project;
  taskName: string;
  description: string;
  starting: string;
  deadline: string;
  status: "completed" | "in-Progress" | "started" | "pending";
}

export function TaskHistoryTable() {
  const { id } = useParams();  // Get the assigned user ID from URL params
  const [taskHistory, setTaskHistory] = useState<Task[]>([]);

  useEffect(() => {
    // Fetch task details based on the assigned user ID
    const fetchTaskHistory = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/dashboard/trackhistory/listTasks/${id}`,{withCredentials:true});
        setTaskHistory(response.data);  // Set the fetched data to the state
      } catch (error) {
        console.error("Error fetching task history:", error);
      }
    };

    fetchTaskHistory();
  }, [id]);


  

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-8 text-white text-center">Task History</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 border-b border-gray-300">S. No</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 border-b border-gray-300">Project Name</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 border-b border-gray-300">Task Name</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 border-b border-gray-300">Task Description</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 border-b border-gray-300">Start Date</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 border-b border-gray-300">Deadline</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 border-b border-gray-300">Status</th>
            </tr>
          </thead>
          <tbody>
            {taskHistory.length > 0 ? (
              taskHistory.map((task, index) => (
                <tr key={task.id} className="hover:bg-gray-50 transition duration-200">
                  <td className="py-4 px-4 border-b border-gray-300">{index + 1}</td>
                  <td className="py-4 px-4 border-b border-gray-300">{task.Project.name}</td>
                  <td className="py-4 px-4 border-b border-gray-300">{task.taskName}</td>
                  <td className="py-4 px-4 border-b border-gray-300">{task.description}</td>
                  <td className="py-4 px-4 border-b border-gray-300">{new Date(task.starting).toLocaleDateString()}</td>
                  <td className="py-4 px-4 border-b border-gray-300">{new Date(task.deadline).toLocaleDateString()}</td>
                  <td className="py-4 px-4 border-b border-gray-300">
                    <span
                      className={`px-3 py-1 rounded-full text-white ${
                        task.status === "completed"
                          ? "bg-green-500"
                          : task.status === "in-Progress"
                          ? "bg-blue-500"
                          : task.status === "started"
                          ? "bg-yellow-500"
                          : "bg-gray-500"
                      }`}
                    >
                      {task.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="text-center py-4">
                  No tasks found for this user.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
