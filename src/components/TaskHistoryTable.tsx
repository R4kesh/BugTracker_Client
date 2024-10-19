import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export function TaskHistoryTable() {
 
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-8 text-white text-center">Task History</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-100">
            <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 border-b border-gray-300">S nO</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 border-b border-gray-300">Project Name</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 border-b border-gray-300">Task Name</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 border-b border-gray-300">Task Description</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 border-b border-gray-300">Start Date</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 border-b border-gray-300">Deadline</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 border-b border-gray-300">Bug Report</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 border-b border-gray-300">Status</th>
            </tr>
          </thead>
          <tbody>
       
              <tr className="hover:bg-gray-50 transition duration-200">
              <td className="py-4 px-4 border-b border-gray-300">S.No</td>
                <td className="py-4 px-4 border-b border-gray-300">projectname</td>
                <td className="py-4 px-4 border-b border-gray-300">taskname</td>
                <td className="py-4 px-4 border-b border-gray-300">taskdescription</td>
                <td className="py-4 px-4 border-b border-gray-300">start date</td>
                <td className="py-4 px-4 border-b border-gray-300">deadline</td>
                <td className="py-4 px-4 border-b border-gray-300">bug report</td>

                <td className="py-4 px-4 border-b border-gray-300">
                  {/* <span
                    className={`px-3 py-1 rounded-full text-white ${
                      project.status === "completed"
                        ? "bg-green-500"
                        : project.status === "in-progress"
                        ? "bg-blue-500"
                        : project.status === "not-started"
                        ? "bg-gray-500"
                        : "bg-yellow-500"
                    }`}
                  >
                   status
                  </span> */}
                </td>
                
                
              </tr>
           
          </tbody>
        </table>
      </div>
    </div>
  );
}
