import React from 'react';
import { Link } from 'react-router-dom';

export const TesterTaskTable = () => {
  
  return (
    <div className="overflow-x-auto">
      <h3 className="text-center text-4xl mb-10 text-white">New Tasks</h3>
      <table className="mb-10 min-w-full table-auto bg-gray-900 text-gray-100 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-800 text-left uppercase text-xs text-gray-400">
            <th className="px-6 py-3">ID</th>
            <th className="px-6 py-3">Project Name</th>
            <th className="px-6 py-3">Task Name</th>
            <th className="px-6 py-3">Task Description</th>
            <th className="px-6 py-3">Role</th>
            <th className="px-6 py-3">UserName</th>
            <th className="px-6 py-3">Status</th>
            <th className="px-6 py-3">Test Case</th>
            

          </tr>
        </thead>
        <tbody>
        
              <tr className="hover:bg-gray-600 transition-all duration-200">
                <td className="px-6 py-4">id</td>
                <td className="px-6 py-4">projectname</td>
                <td className="px-6 py-4">taskname</td>
                <td className="px-6 py-4">task description</td>
                <td className="px-6 py-4">role</td>
                <td className="px-6 py-4">username</td>
                <td className="px-6 py-4 capitalize">status</td>
                <td className="px-6 py-4">
                <Link to=''> <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                   
                  >
                    Add TestCase
                  </button></Link>
                 
                </td>
  
              </tr>
            {/* ))
          ) : ( */}
            <tr>
             <td colSpan={6} className="text-center py-4">No projects found.</td>

            </tr>
          
        </tbody>
      </table>
    </div>
  );
};
