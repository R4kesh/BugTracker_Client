
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export const TestReportList = () => {
 

  return (
    <div className="overflow-x-auto">
      <h3 className='text-center text-4xl mb-10 text-white'>Tested List </h3>
      <table className="mb-10 min-w-full table-auto bg-gray-900 text-gray-100 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-800 text-left uppercase text-xs text-gray-400">
            <th className="px-6 py-3">ID</th>
            <th className="px-6 py-3">Test Id</th>
            <th className="px-6 py-3 ">Test Description</th>
            <th className="px-6 py-3">Steps</th>
            <th className="px-6 py-3">Severity</th>
            <th className="px-6 py-3">Result</th>
            <th className="px-6 py-3">Bug Report</th>
            <th className="px-6 py-3">Test Status</th>
          </tr>
        </thead>
        <tbody>
          
            <tr className='bg-gray-700 hover:bg-gray-600 transition-all duration-200'>
              <td className="px-6 py-4  ">id</td>
              <td className="px-6 py-4 ">testid</td>
              <td className="px-6 py-4 ">testcasedescription</td>
              <td className="px-6 py-4 ">steps</td>
              <td className="px-6 py-4 ">severity</td>
              <td className="px-6 py-4 ">result</td>
              <td className="px-6 py-4 ">bug report</td>
              <td className="px-6 py-4 ">test status</td>




            </tr>
        
        </tbody>
      </table>
    </div>
  );
};

