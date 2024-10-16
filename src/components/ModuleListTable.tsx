import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link,useParams } from 'react-router-dom';

export const ModuleListTable = () => {
  const { projectId } = useParams(); 
    const [epics, setEpics] = useState([]); // Rename projects to epics for clarity

    useEffect(() => {
        const fetchEpics = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/project/listEpic?projectId=${projectId}`); // Ensure this endpoint exists and retrieves data from the epic table
                setEpics(response.data); 
            } catch (error) {
                console.error('Error fetching epics:', error);
            }
        };

        fetchEpics(); 
    }, []); 

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
                    {epics.length > 0 ? (
                        epics.map(epic => ( // Map through the fetched data
                            <tr key={epic.id} className="hover:bg-gray-600 transition-all duration-200">
                                <td className="px-6 py-4">{epic.id}</td>
                                <td className="px-6 py-4">{epic.projectName}</td>
                                <td className="px-6 py-4">{epic.projectId}</td>
                                <td className="px-6 py-4">{epic.name}</td>
                                <td className="px-6 py-4">{epic.description}</td>
                                <td className="px-6 py-4 capitalize">{epic.status}</td>
                                <td className="px-6 py-4">
                                    <Link to={`/tasklist/${projectId}/${epic.id}`}> {/* Use epic.id for dynamic routing */}
                                        <button
                                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                                        >
                                            view Tasks
                                        </button>
                                    </Link>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={7} className="text-center py-4">No Modules found.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};
