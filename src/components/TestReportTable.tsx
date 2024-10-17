// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// export const TestReportTable = () => {
//   const [testReports, setTestReports] = useState([]);

//   useEffect(() => {
//     const fetchTestReports = async () => {
//       try {
//         const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/dashboard/listBugReport`);
//         setTestReports(response.data);
//       } catch (error) {
//         console.error('Error fetching test reports:', error);
//       }
//     };

//     fetchTestReports();
//   }, []);

//   return (
//     <div className="overflow-x-auto">
//       <h3 className="text-center text-4xl mb-10 text-white">Test Reports</h3>
//       <table className="mb-10 min-w-full table-auto bg-gray-900 text-gray-100 rounded-lg shadow-md">
//         <thead>
//           <tr className="bg-gray-800 text-left uppercase text-xs text-gray-400">
//             <th className="px-6 py-3">ID</th>
//             <th className="px-6 py-3">Project Name</th>
//             <th className="px-6 py-3">Task Name</th>
//             <th className="px-6 py-3">Tester</th>
//             <th className="px-6 py-3">Developer</th>
//             <th className="px-6 py-3">Severity</th>
//             <th className="px-6 py-3">Test Result</th>
//             <th className="px-6 py-3">Bug Report</th>
//             <th className="px-6 py-3">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {testReports.map((report) => (
//             <tr key={report.id} className="bg-gray-700 hover:bg-gray-600 transition-all duration-200">
//               <td className="px-6 py-4">{report.id}</td>
//               <td className="px-6 py-4">{report.task?.Project?.name || 'N/A'}</td>
//               <td className="px-6 py-4">{report.task?.taskName || 'N/A'}</td>
//               <td className="px-6 py-4">{report.tester?.name || 'N/A'}</td>
//               <td className="px-6 py-4">{report.task?.assignedUser?.name || 'N/A'}</td>
//               <td className="px-6 py-4">{report.severity}</td>
//               <td className="px-6 py-4">{report.result}</td>
//               <td className="px-6 py-4">
//                 {report.fileLink ? (
//                   <iframe
//                     src={report.fileLink}
//                     title={`Bug Report ${report.id}`}
//                     className="w-full h-32 border border-gray-400"
//                   />
//                 ) : (
//                   'No Bug Report'
//                 )}
//               </td>
//               <td className="px-6 py-4">
//                 <button className="bg-blue-500 text-white rounded-md px-2 py-1 mt-2">
//                   ReAssign
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const TestReportTable = () => {
  const [testReports, setTestReports] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const reportsPerPage = 5; // Limit 5 rows per page

  useEffect(() => {
    const fetchTestReports = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/dashboard/listBugReport`);
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
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate total pages
  const totalPages = Math.ceil(testReports.length / reportsPerPage);

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
                <td className="px-6 py-4">{report.task?.Project?.name || 'N/A'}</td>
                <td className="px-6 py-4">{report.task?.taskName || 'N/A'}</td>
                <td className="px-6 py-4">{report.tester?.name || 'N/A'}</td>
                <td className="px-6 py-4">{report.task?.assignedUser?.name || 'N/A'}</td>
                <td className="px-6 py-4">{report.severity}</td>
                <td className="px-6 py-4">{report.result}</td>
                <td className="px-6 py-4">
                  {report.fileLink ? (
                    <iframe
                      src={report.fileLink}
                      title={`Bug Report ${report.id}`}
                      className="w-full h-32 border border-gray-400"
                    />
                  ) : (
                    'No Bug Report'
                  )}
                </td>
                <td className="px-6 py-4">
                  <button className="bg-blue-500 text-white rounded-md px-2 py-1 mt-2">
                    ReAssign
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9" className="px-6 py-4 text-center">
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
    </div>
  );
};
