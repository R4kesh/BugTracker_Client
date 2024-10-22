import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";

// Define an interface for an Epic (Module)
interface Epic {
  id: number;
  projectName: string;
  projectId: string;
  name: string;
  description: string;
  status: string;
}

export const ModuleListTable: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const [epics, setEpics] = useState<Epic[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const rowsPerPage = 4;

  // Modal state and selected epic for editing
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEpic, setSelectedEpic] = useState<Epic | null>(null); // State to hold the selected epic for editing

  useEffect(() => {
    const fetchEpics = async () => {
      try {
        const response = await axios.get<Epic[]>(`${import.meta.env.VITE_BASE_URL}/api/project/listEpic?projectId=${projectId}`, { withCredentials: true });
        setEpics(response.data);
      } catch (error) {
        console.error('Error fetching epics:', error);
      }
    };
    fetchEpics();
  }, [projectId]);

  // Handle the opening of the modal
  const handleEditClick = (epic: Epic) => {
    setSelectedEpic(epic);
    setIsModalOpen(true);
  };

  // Handle form input change inside the modal
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    if (selectedEpic) {
      setSelectedEpic({ ...selectedEpic, [e.target.name]: e.target.value });
    }
  };

  // Handle saving the edited module details
  const handleSave = async () => {
    if (selectedEpic) {
      try {
        const response=await axios.put(`${import.meta.env.VITE_BASE_URL}/api/project/updateEpic/${selectedEpic.id}`, selectedEpic, { withCredentials: true });
        setEpics(epics.map(epic => (epic.id === selectedEpic.id ? selectedEpic : epic))); // Update the state with the edited epic
        setIsModalOpen(false);
        console.log('respo',response.data);
        
      } catch (error) {
        console.error('Error updating the epic:', error);
      }
    }
  };

  // Pagination calculations
  const indexOfLastEpic = currentPage * rowsPerPage;
  const indexOfFirstEpic = indexOfLastEpic - rowsPerPage;
  const currentEpics = epics.slice(indexOfFirstEpic, indexOfLastEpic);

  // Pagination handlers
  const nextPage = () => {
    if (currentPage < Math.ceil(epics.length / rowsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

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
            <th className="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentEpics.length > 0 ? (
            currentEpics.map((epic) => (
              <tr key={epic.id} className="hover:bg-gray-600 transition-all duration-200">
                <td className="px-6 py-4">{epic.id}</td>
                <td className="px-6 py-4">{epic.projectName}</td>
                <td className="px-6 py-4">{epic.projectId}</td>
                <td className="px-6 py-4">{epic.name}</td>
                <td className="px-6 py-4">{epic.description}</td>
                <td className="px-6 py-4 capitalize">{epic.status}</td>
                <td className="px-6 py-4">
                  <Link to={`/tasklist/${projectId}/${epic.id}`}>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300">
                      View Tasks
                    </button>
                  </Link>
                </td>
                <td className="flex items-center justify-between h-full">
                  <FaEdit
                    size={30}
                    className="text-blue-400 cursor-pointer hover:text-blue-700"
                    onClick={() => handleEditClick(epic)} // Open modal on edit click
                  />
                  <RiDeleteBin5Line
                    size={30}
                    className="text-red-400 cursor-pointer hover:text-red-700"
                  />
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

      {/* Pagination Controls */}
      {epics.length > rowsPerPage && (
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 bg-gray-500 text-white rounded ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-700'}`}
          >
            Previous
          </button>
          <span className="text-white">
            Page {currentPage} of {Math.ceil(epics.length / rowsPerPage)}
          </span>
          <button
            onClick={nextPage}
            disabled={currentPage === Math.ceil(epics.length / rowsPerPage)}
            className={`px-4 py-2 bg-gray-500 text-white rounded ${currentPage === Math.ceil(epics.length / rowsPerPage) ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-700'}`}
          >
            Next
          </button>
        </div>
      )}

      {/* Modal for editing the epic */}
      {isModalOpen && selectedEpic && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
            <h2 className="text-2xl font-bold mb-4">Edit Module</h2>
            <label className="block mb-2">Module Name</label>
            <input
              type="text"
              name="name"
              value={selectedEpic.name}
              onChange={handleInputChange}
              className="block w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <label className="block mb-2">Description</label>
            <textarea
              name="description"
              value={selectedEpic.description}
              onChange={handleInputChange}
              className="block w-full p-2 mb-4 border border-gray-300 rounded"
            ></textarea>
            <label className="block mb-2">Status</label>
            <select
              name="status"
              value={selectedEpic.status}
              onChange={handleInputChange}
              className="block w-full p-2 mb-4 border border-gray-300 rounded"
            >
              <option value="not started">Not Started</option> 
              <option value="started">Started</option>
              <option value="in progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
            <div className="flex justify-end">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded mr-4"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
