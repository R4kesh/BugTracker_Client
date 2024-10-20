import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

// Define the Project type
interface Project {
  id: number; // or string depending on your API response
  projectName: string;
  description: string;
  status: "completed" | "in-progress" | "not-started" | "other"; // Add other statuses if needed
  starting: string; // Assuming this is a date string, adjust if needed
}

export function TrackHistoryCardHover() {
  const [projects, setProjects] = useState<Project[]>([]); // Use the Project type
  const { id } = useParams<{ id: string }>(); // Use useParams to extract the id from the URL

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get<Project[]>( // Type the response
          `${import.meta.env.VITE_BASE_URL}/api/dashboard/projecttrack/${id}`
        );
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
    <div className="max-w-5xl mx-auto px-8 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {project.projectName}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {project.description}
              </p>
              <div className="text-sm font-medium mb-4">
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
              </div>

              <p className="text-gray-500 text-xs">
                <strong>Start Date:</strong>{" "}
                {new Date(project.starting).toLocaleDateString()}
              </p>

              <Link to="/usertrack">
                <button
                  type="button"
                  className="block mt-4 text-blue-600 font-bold hover:underline"
                >
                  View Project Details →
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
