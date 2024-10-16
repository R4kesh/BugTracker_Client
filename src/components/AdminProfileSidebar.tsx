





import axios from 'axios';
// import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'


function AdminProfileCard() {
   
  return (
    <div className='flex flex-col md:flex-row h-screen bg-gray-100'>
         <aside className="w-full md:w-64  bg-white shadow-md">
        <div className="p-6 flex flex-col items-center">
        <img
            className="rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGmtdzpTv68MPY036tXoBBqHOaD_lDETPwEw&s"
            alt="User Profile"
            width={128}
            height={128}
          />
          <h2 className="mt-4 text-xl font-semibold text-gray-700">name</h2>
          <p className="text-gray-600">number</p>
          <p className="text-gray-600">email</p>
        </div>
        <nav className="mt-6">
          <ul className="space-y-2">
            <li>
              <button
                  className="block w-full px-4 py-2 text-sm font-semibold text-gray-900 rounded-lg hover:bg-gray-300"
              >
                Profile
              </button>
            </li>
            <li>
              <button
                 className="block w-full px-4 py-2 text-sm font-semibold text-gray-900 rounded-lg hover:bg-gray-300"
              >
                Edit profile
              </button>
            </li>
          
            <li>
              <button
                 className="block w-full px-4 py-2 text-sm font-semibold text-gray-900 rounded-lg hover:bg-gray-300"
              >
                Back  Home
              </button>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  )
}

export default AdminProfileCard