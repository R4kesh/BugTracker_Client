

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const AdminNavbar: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Replace with real authentication logic
  const [adminName, setAdminName] = useState<string | null>(null);
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    // Mock authentication logic - replace this with your real logic to fetch admin details
    const adminDetails = JSON.parse(localStorage.getItem('user') || '{}');
    
    if (adminDetails && adminDetails.name && adminDetails.role) {
      setAdminName(adminDetails.name);
      setRole(adminDetails.role);
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    console.log('Admin logged out');
  };

  return (
    <nav className="bg-gradient-to-r from-slate-900 to-gray-700 text-white w-full py-4 flex justify-between items-center px-8 shadow-lg">
      <div className="text-2xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-red-700 via-yellow-300 to-red-600 drop-shadow-md">
        Bug Tracker
      </div>

      {isLoggedIn ? (
        <div className="flex items-center space-x-4">
          {/* Display the admin's name with the role underneath in parentheses */}
          <div className="text-white text-xl">
            <p><strong>{adminName}</strong></p> 
            <p className="text-sm">({role})</p> {/* Role displayed under the name */}
          </div>
          
          {/* Account icon linking to admin profile */}
          <Link to='/adminprofile'>
            <FontAwesomeIcon icon={faUser} size="lg" className="text-white" />
          </Link>

          {/* Logout button */}
          <Link to="/login">
            <button
              onClick={handleLogout}
              className="bg-white text-purple-800 font-semibold py-2 px-6 rounded-full shadow-md hover:bg-purple-600 hover:text-white transition-all duration-300"
            >
              Logout
            </button>
          </Link>
        </div>
      ) : (
        <Link
          to="/login"
          className="bg-white text-purple-800 font-semibold py-2 px-6 rounded-full shadow-md hover:bg-purple-600 hover:text-white transition-all duration-300"
        >
          Login
        </Link>
      )}
    </nav>
  );
};

export default AdminNavbar;
