
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';


export const TaskTrackingTable: React.FC = () => {
  const [reassignDetails, setReassignDetails] = useState([]);
  const { id } = useParams();  


  useEffect(() => {
    const fetchReAssignDetails = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/dashboard/trackHistory/${id}`);  // Pass taskId to the backend
        setReassignDetails(response.data);
        console.log('dataz',response.data);
        
      } catch (error) {
        console.error('Error fetching task history:', error);
      }
    };

    fetchReAssignDetails();
  }, [id]);

console.log('pareams',id);

  return (
    <div className="overflow-x-auto">
      <h3 className='text-center text-4xl mb-10 text-white'>Task History</h3>
      {/* {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>} */}
      <table className="mb-10 min-w-full table-auto bg-gray-900 text-gray-100 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-800 text-left uppercase text-xs text-gray-400">
            <th className="px-6 py-3">ID</th>
            <th className="px-6 py-3">Task Name</th>
            <th className="px-6 py-3">Status</th>
            <th className="px-6 py-3">developer</th>
            <th className="px-6 py-3">Tester</th>
            <th className="px-6 py-3">Report</th>
          </tr>
        </thead>
        <tbody>
          
              <tr  className='bg-gray-700  hover:bg-gray-600 transition-all duration-200'>
                <td className="px-6 py-4">id</td>
                <td className="px-6 py-4">taskname</td>
                <td className="px-6 py-4">status</td>
                <td className="px-6 py-4">devloper</td>
                <td className="px-6 py-4">tester</td>
               
                <td className="px-6 py-4 ">
                 
                    <button
                      className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
                    >
                      View Report
                    </button>
              
                </td>
              </tr>
         
            <tr>
              <td colSpan={7} className="text-center py-4">No users found.</td>
            </tr>
          
        </tbody>
      </table>

    
    </div>
  );
};
