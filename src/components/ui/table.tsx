import React from 'react';

export const TableDemostructure = () => {
  const data = [
    { id: 1, severity: 'Critical', description: 'System down', status: 'Open', assignedTo: 'John Doe' },
    { id: 2, severity: 'High', description: 'API response delay', status: 'In Progress', assignedTo: 'Jane Smith' },
    { id: 3, severity: 'Medium', description: 'UI misalignment', status: 'Closed', assignedTo: 'Mike Johnson' },
    { id: 4, severity: 'Low', description: 'Minor bug in report generation', status: 'Open', assignedTo: 'Sarah Lee' },
    // Add more rows here...
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto bg-gray-900 text-gray-100 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-800 text-left uppercase text-xs text-gray-400">
            <th className="px-6 py-3">ID</th>
            <th className="px-6 py-3">Severity</th>
            <th className="px-6 py-3">Description</th>
            <th className="px-6 py-3">Status</th>
            <th className="px-6 py-3">Assigned To</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={row.id}
              className={`${index % 2 === 0 ? 'bg-gray-700' : 'bg-gray-800'} hover:bg-gray-600 transition-all duration-200`}
            >
              <td className="px-6 py-4">{row.id}</td>
              <td className={`px-6 py-4 ${getSeverityColor(row.severity)}`}>{row.severity}</td>
              <td className="px-6 py-4">{row.description}</td>
              <td className="px-6 py-4">{row.status}</td>
              <td className="px-6 py-4">{row.assignedTo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Helper function to add color to severity levels
const getSeverityColor = (severity:any) => {
  switch (severity) {
    case 'Critical':
      return 'text-red-500 font-bold';
    case 'High':
      return 'text-orange-500 font-semibold';
    case 'Medium':
      return 'text-yellow-400 font-medium';
    case 'Low':
      return 'text-green-500';
    default:
      return '';
  }
};
