import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const TestReportList = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
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
              <td className="px-6 py-4">{report.testCaseId}</td>
              <td className="px-6 py-4">{report.description}</td>
              <td className="px-6 py-4">{Array.isArray(report.steps) ? report.steps.join(', ') : 'N/A'}</td>
              <td className="px-6 py-4">{report.severity}</td>
              <td className="px-6 py-4">{report.result}</td>
              <td className="px-6 py-4">{Array.isArray(report.fileLink) ? report.fileLink.join(', ') : 'N/A'}</td>
              <td className="px-6 py-4">{report.testStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
