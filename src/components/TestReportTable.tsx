// src/components/TestReportTable.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ReAssignModal } from './ReAssignModal';

// Define types for your bug report
interface AssignedUser {
  name: string;
}

interface Tester {
  name: string;
}

interface Project {
  name: string;
}

interface Task {
  Project: Project;
  taskName: string;
  assignedUser?: AssignedUser;
}

interface BugReport {
  id: number;
  task: Task;
  tester?: Tester;
  severity: string;
  result: string;
  fileLink: string[]; // Assuming it's an array of strings for file links
}

export const TestReportTable: React.FC = () => {
  const [testReports, setTestReports] = useState<BugReport[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedReport, setSelectedReport] = useState<BugReport | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [showReassignModal, setShowReassignModal] = useState<boolean>(false);
  
  const reportsPerPage = 4; // Limit 4 rows per page

  useEffect(() => {
    const fetchTestReports = async () => {
      try {
        const response = await axios.get<BugReport[]>(`${import.meta.env.VITE_BASE_URL}/api/dashboard/listBugReport`,{withCredentials:true});
        setTestReports(response.data);
      } catch (error) {
        console.error('Error fetching test reports:', error);
      }
    };

    fetchTestReports();
  }, []);

  // Calculate indices for current page reports
  const indexOfLastReport = currentPage * reportsPerPage;
  const indexOfFirstReport = indexOfLastReport - reportsPerPage;
  const currentReports = testReports.slice(indexOfFirstReport, indexOfLastReport);

  // Change page handler
  const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber);

  // Calculate total pages
  const totalPages = Math.ceil(testReports.length / reportsPerPage);

  // Handle View Details modal open/close and set selected report
  const handleViewDetails = (report: BugReport) => {
    setSelectedReport(report);
    setIsModalOpen(true);
  };

  // Handle ReAssign modal open/close and set selected report
  const handleReAssign = (report: BugReport) => {
    setSelectedReport(report);
    setShowReassignModal(true);
  };

  // Handle closing both modals
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setShowReassignModal(false);
    setSelectedReport(null);
  };

  return (
    <div className="overflow-x-auto">
      <h3 className="text-center text-4xl mb-10 text-white">Test Reports</h3>
      <table className="mb-10 min-w-full table-auto bg-gray-900 text-gray-100 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-800 text-left uppercase text-xs text-gray-400">
            <th className="px-6 py-3">ID</th>
            <th className="px-6 py-3">Project Name</th>
            <th className="px-6 py-3">Task Name</th>
            <th className="px-6 py-3">Tester</th>
            <th className="px-6 py-3">Developer</th>
            <th className="px-6 py-3">Severity</th>
            <th className="px-6 py-3">Test Result</th>
            <th className="px-6 py-3">Bug Report</th>
            <th className="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {currentReports.length > 0 ? (
            currentReports.map((report) => (
              <tr key={report.id} className="bg-gray-700 hover:bg-gray-600 transition-all duration-200">
                <td className="px-6 py-4">{report.id}</td>
                <td className="px-6 py-4">{report.task.Project.name || 'N/A'}</td>
                <td className="px-6 py-4">{report.task.taskName || 'N/A'}</td>
                <td className="px-6 py-4">{report.tester?.name || 'N/A'}</td>
                <td className="px-6 py-4">{report.task.assignedUser?.name || 'N/A'}</td>
                <td className="px-6 py-4">{report.severity}</td>
                <td className="px-6 py-4">{report.result}</td>
                <td className="px-6 py-4">
                  <button
                    className="bg-blue-500 text-white rounded-md px-2 py-1 mt-2"
                    onClick={() => handleViewDetails(report)}
                  >
                    View Details
                  </button>
                </td>
                <td className="px-6 py-4">
                  <button
                    className="bg-blue-500 text-white rounded-md px-2 py-1 mt-2"
                    onClick={() => handleReAssign(report)}
                  >
                    ReAssign
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={9} className="px-6 py-4 text-center">
                No test reports found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="flex justify-center space-x-2 mt-6">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            className={`px-4 py-2 border rounded-lg ${
              currentPage === pageNumber ? 'bg-blue-500 text-white' : 'bg-gray-800 text-gray-100'
            }`}
          >
            {pageNumber}
          </button>
        ))}
      </div>

      {/* Modal for showing bug report details */}
      {isModalOpen && selectedReport && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full">
            <h2 className="text-xl mb-4">Bug Report for ID: {selectedReport.id}</h2>
            <div className="grid grid-cols-2 gap-4">
              {Array.isArray(selectedReport.fileLink) && selectedReport.fileLink.length > 0 ? (
                selectedReport.fileLink.map((file, index) => {
                  const imageUrl = `${import.meta.env.VITE_BASE_URL}${file}`;
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
              className="mt-4 bg-blue-500 text-white rounded-md px-4 py-2"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* ReAssign Modal */}
      {showReassignModal && selectedReport && (
        <ReAssignModal show={showReassignModal} onClose={handleCloseModal} report={selectedReport} />
      )}
    </div>
  );
};
