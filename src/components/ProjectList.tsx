import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/project/display');
        
        console.log('Fetched projects:', response.data); // Check what the API returns

        // Ensure response.data is an array. If it's not, handle it.
        const projectData = Array.isArray(response.data) ? response.data : [];
        setProjects(projectData); // Set the fetched projects to state
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects(); // Fetch the data when the component mounts
  }, []);

  return (
    <div className="overflow-x-auto">
      <h3 className="text-center text-4xl mb-10 text-white">Projects</h3>
      <table className="mb-10 min-w-full table-auto bg-gray-900 text-gray-100 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-800 text-left uppercase text-xs text-gray-400">
            <th className="px-6 py-3">ID</th>
            <th className="px-6 py-3">Project Name</th>
            <th className="px-6 py-3">Description</th>
            <th className="px-6 py-3">Start Date</th>
            <th className="px-6 py-3">Status</th>
            <th className="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {projects.length > 0 ? (
            projects.map((project) => (
              <tr key={project.id} className="hover:bg-gray-600 transition-all duration-200">
                <td className="px-6 py-4">{project.id}</td>
                <td className="px-6 py-4">{project.name}</td>
                <td className="px-6 py-4">{project.description}</td>
                <td className="px-6 py-4">{new Date(project.startDate).toLocaleDateString()}</td>
                <td className="px-6 py-4 capitalize">{project.status}</td>
                <td className="px-6 py-4">
                <a href={`/tasklist/${project.id}`}> <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                    onClick={() => console.log(`Adding task to project ${project.id}`)}
                  >
                    Add Task
                  </button></a>
                 
                </td>
              </tr>
            ))
          ) : (
            <tr>
             <td colSpan={6} className="text-center py-4">No projects found.</td>

            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
