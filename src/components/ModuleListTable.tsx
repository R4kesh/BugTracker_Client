import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const ModuleListTable = () => {
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
    }, [projects]);
  return (
    <div className="overflow-x-auto">
      <h3 className="text-center text-4xl mb-10 text-white">Modules</h3>
      <table className="mb-10 min-w-full table-auto bg-gray-900 text-gray-100 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-800 text-left uppercase text-xs text-gray-400">
            <th className="px-6 py-3">ID</th>
            <th className="px-6 py-3">Project Name</th>
            <th className="px-6 py-3">Project Id</th>
            <th className="px-6 py-3">Module Name</th>
            <th className="px-6 py-3">Module Description</th>
            <th className="px-6 py-3">Status</th>
            <th className="px-6 py-3">Task</th>
            

          </tr>
        </thead>
        <tbody>
         
              <tr  className="hover:bg-gray-600 transition-all duration-200">
                <td className="px-6 py-4">id</td>
                <td className="px-6 py-4">projectname</td>
                <td className="px-6 py-4">project id</td>
                <td className="px-6 py-4">module name</td>
                <td className="px-6 py-4">module description</td>
                <td className="px-6 py-4 capitalize">status</td>
                <td className="px-6 py-4">
                <Link to={`/tasklist/id`}> <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                    // onClick={() => console.log(`Adding task to project ${project.id}`)}
                  >
                    Add Task
                  </button></Link>
                 
                </td>
  
              </tr>
            {/* ))
          ) : ( */}
            <tr>
             <td colSpan={6} className="text-center py-4">No projects found.</td>

            </tr>
          {/* )} */}
        </tbody>
      </table>
    </div>
  );
};