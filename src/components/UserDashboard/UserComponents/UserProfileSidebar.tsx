import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


interface User {
  name: string
  role: string
}
function UserProfileCard() {
  const [user, setUser] = useState<User | null>(null)
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('user') || "{}"); // Fetch the user from local storage
    const userdata = JSON.parse(data)
    setUser(userdata)
  }, [])

  if (!user) {
    return <div>Loading user data...</div>; // Show loading or fallback if user data is not available
  }

  return (
    <div className='flex flex-col md:flex-row h-screen bg-gray-100'>
      <aside className="w-full md:w-64  bg-slate-300 shadow-md">
        <div className="p-6 flex flex-col items-center">
          <img
            className="rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGmtdzpTv68MPY036tXoBBqHOaD_lDETPwEw&s"
            alt="User Profile"
            width={128}
            height={128}
          />
          <h2 className="mt-4 text-xl font-semibold text-slate-900">{user.name}</h2>
          <p className="text-gray-700">({user.role})</p>

        </div>
        <nav className="mt-6">
          <ul className="space-y-2">
            <li>
              <Link to='/userprofile'>
                <button
                  className="block w-full px-4 py-2 text-sm font-semibold text-gray-900 rounded-lg hover:bg-white"
                >
                  Profile
                </button>
              </Link>
            </li>
            <li>
              <Link to='/edituserprofile'>
                <button
                  className="block w-full px-4 py-2 text-sm font-semibold text-gray-900 rounded-lg hover:bg-white"
                >
                  Edit profile
                </button>
              </Link>
            </li>

            <li>
              <Link to='/dashboard'>
                <button
                  className="block w-full px-4 py-2 text-sm font-semibold text-gray-900 rounded-lg hover:bg-white"
                >
                  Back  Home
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

    </div>
  )
}

export default UserProfileCard