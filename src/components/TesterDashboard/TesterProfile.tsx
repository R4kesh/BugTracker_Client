

import React, { Suspense,useEffect, useState } from 'react'


import TesterProfileCard from './TesterComponent/TesterProfileSidebar'


function TesterProfile() {
 
  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">

      <TesterProfileCard/>
     
      <main className="flex-1 p-6 md:p-8">
        <h1 className="text-2xl font-bold">Profile</h1>
        <div className="mt-8 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <div className="mt-1">
              <input
                type="text"
                readOnly
                value='name'
                className="block md:w-full  px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <div className="mt-1">
              <input
                type="email"
                readOnly
                value='email'
                className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <div className="mt-1">
              <input
                type="tel"
                readOnly
                value='number'
                className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
              />
            </div>
          </div>
          <div>
           
          </div>
        </div>
      </main>
    </div>
  )
}

export default TesterProfile