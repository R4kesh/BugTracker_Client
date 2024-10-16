
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export const PreviewModuleTable = () => {
    const { id } = useParams();
    const [modules, setModules] = useState([]);

    console.log('proid',id);
    useEffect(() => {
        const fetchModules = async () => {
          try {
            const response = await axios.get(`http://localhost:3000/api/dashboard/previewmodule/${id}`); // Replace with your API endpoint
            setModules(response.data);
          } catch (error) {
            console.error('Error fetching modules:', error);
          }
        };
    
        fetchModules();
      }, [id]);
    
  const data = [
    { id: 1, Name: 'John Doe', email: 'john@gmail.com', Number: '9876544321', Role: 'Developer', Action: 'Block' },
    // Add more rows if needed...
  ];
  
  return (
    <div className="overflow-x-auto">
    <h3 className='text-center text-4xl mb-10 text-white'> Project Modules</h3>
    <table className="mb-10 min-w-full table-auto bg-gray-900 text-gray-100 rounded-lg shadow-md">
      <thead>
        <tr className="bg-gray-800 text-left uppercase text-xs text-gray-400">
          <th className="px-6 py-3">ID</th>
          <th className="px-6 py-3">Module Name</th>
          <th className="px-6 py-3">Module Description</th>
          <th className="px-6 py-3">Created At</th>
          <th className="px-6 py-3">Action</th>
        </tr>
      </thead>
      <tbody>
        {modules.length > 0 ? (
          modules.map((module) => (
            <tr
              key={module.id}
              className='bg-gray-800 hover:bg-gray-600 transition-all duration-200'
            >
              <td className="px-6 py-4">{module.id}</td>
              <td className="px-6 py-4">{module.name}</td>
              <td className="px-6 py-4">{module.description}</td>
              <td className="px-6 py-4">{new Date(module.createdAt).toLocaleDateString()}</td>
              <td className="px-6 py-4">
                <button
                  className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300'
                >
                  View Details
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="5" className="px-6 py-4 text-center">
              No modules found for this project.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
  );
};

