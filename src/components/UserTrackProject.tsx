import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

// Define the type for project data
interface Project {
  id: number; // Assuming ID is a number; adjust according to your API response
  projectName: string;
  status: "completed" | "in-progress" | "not-started" | "other"; // Define possible statuses
  starting: string; // Assuming starting is a date string
}

export function UserTrackProject() {
  const [projects, setProjects] = useState<Project[]>([]); // State with Project type
  const { id } = useParams<{ id: string }>(); // Extract id as a string from URL params

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get<Project[]>(
          `${import.meta.env.VITE_BASE_URL}/api/dashboard/projecttrack/${id}`
         , {withCredentials:true});
        setProjects(response.data);
      } catch (error) {
        console.error("Failed to fetch tasks:", error);
      }
    };

    if (id) {
      fetchProjects(); // Fetch only if id is available
    }
  }, [id]);

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-8 text-white text-center">Track History</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 border-b border-gray-300">Project Name</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 border-b border-gray-300">Status</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 border-b border-gray-300">Start Date</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 border-b border-gray-300">Task</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 border-b border-gray-300">Re-Assigned</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id} className="hover:bg-gray-50 transition duration-200">
                <td className="py-4 px-4 border-b border-gray-300">{project.projectName}</td>
                <td className="py-4 px-4 border-b border-gray-300">
                  <span
                    className={`px-3 py-1 rounded-full text-white ${
                      project.status === "completed"
                        ? "bg-green-500"
                        : project.status === "in-progress"
                        ? "bg-blue-500"
                        : project.status === "not-started"
                        ? "bg-gray-500"
                        : "bg-yellow-500"
                    }`}
                  >
                    {project.status}
                  </span>
                </td>
                <td className="py-4 px-4 border-b border-gray-300">
                  {new Date(project.starting).toLocaleDateString()}
                </td>
                <td className="py-4 px-4 border-b border-gray-300">
                  <Link to={`/taskhistory/${id}`}>
                    <button
                      type="button"
                      className="bg-green-600 text-white py-1 px-4 rounded hover:bg-green-700 transition duration-200"
                    >
                      Tasks →
                    </button>
                  </Link>
                </td>
                <td className="py-4 px-4 border-b border-gray-300">
                  <Link to={`/reassigntaskhistory/${id}`}>
                    <button
                      type="button"
                      className="bg-orange-600 text-white py-1 px-4 rounded hover:bg-orange-700 transition duration-200"
                    >
                      Re-Assigned Task →
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
