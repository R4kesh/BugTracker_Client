import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const TestReportList = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedReport, setSelectedReport] = useState(null); // For storing the selected report
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const userId = localStorage.getItem('user');
  const user = JSON.parse(userId);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/tester/submited_report/${user.id}`);
        setReports(response.data);
      } catch (error) {
        console.error('Error fetching reports:', error);
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchReports();
    }
  }, []);

  const openModal = (report) => {
    setSelectedReport(report);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedReport(null);
    setIsModalOpen(false);
  };


  if (loading) return <p className="text-center text-white">Loading...</p>;

  return (
    <div className="overflow-x-auto">
      <h3 className='text-center text-4xl mb-10 text-white'>Tested List</h3>
      <table className="mb-10 min-w-full table-auto bg-gray-900 text-gray-100 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-800 text-left uppercase text-xs text-gray-400">
            <th className="px-6 py-3">ID</th>
            <th className="px-6 py-3">Testcase Name</th>
            <th className="px-6 py-3 ">Testcase Description</th>
            <th className="px-6 py-3">Steps</th>
            <th className="px-6 py-3">Severity</th>
            <th className="px-6 py-3">Result</th>
            <th className="px-6 py-3">Bug Report</th>
            <th className="px-6 py-3">Test Status</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <tr key={report.id} className='bg-gray-700 hover:bg-gray-600 transition-all duration-200'>
              <td className="px-6 py-4">{report.id}</td>
              <td className="px-6 py-4">{report.testCase?.name || 'N/A'}</td> {/* Testcase Name */}
              <td className="px-6 py-4">{report.testCase?.description || 'N/A'}</td> {/* Testcase Description */}
              <td className="px-6 py-4">{Array.isArray(report.steps) ? report.steps.join(', ') : 'N/A'}</td>
              <td className="px-6 py-4">{report.severity}</td>
              <td className="px-6 py-4">{report.result}</td>
              <td className="px-6 py-4">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                  onClick={() => openModal(report)}
                >
                  View Details
                </button>
              </td>
              <td className="px-6 py-4">{report.testStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>


    {isModalOpen && selectedReport && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white w-3/4 max-w-lg p-6 rounded-lg shadow-lg relative">
            <h3 className="text-2xl font-semibold mb-4">Uploaded Images</h3>

            <div className="overflow-y-auto max-h-96">
  {Array.isArray(selectedReport.fileLink) && selectedReport.fileLink.length > 0 ? (
    selectedReport.fileLink.map((file, index) => {
      const imageUrl = `${import.meta.env.VITE_BASE_URL}${file}`; 
      console.log(`Image URL: ${imageUrl}`); // Debugging line

      return (
        <img
          key={index}
          src={imageUrl}
          alt={`Uploaded file ${index + 1}`}
          className="mb-4 w-full h-auto"
        />
      );
    })
  ) : (
    <p>No images uploaded</p>
  )}
</div>

            <button
              className="absolute top-2 right-2 text-xl text-gray-500 hover:text-gray-800"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
