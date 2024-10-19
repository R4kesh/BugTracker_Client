import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../../providers/auth-provider';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

const UserNavbar: React.FC = () => {
  const { logout } = useAuth()
  const navigate = useNavigate()

  const { user } = useSelector((state: RootState) => state.auth)


  const handleLogout = () => {
    logout()
    navigate('/login')
    console.log('User logged out');
  };

  return (
    <nav className="bg-gradient-to-r from-slate-900 to-gray-700 text-white w-full py-4 flex justify-between items-center px-8 shadow-lg">
      <div className="text-2xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-red-700 via-yellow-300 to-red-600 drop-shadow-md">
        Bug Tracker
      </div>

      {user ? (
        <div className="flex items-center space-x-4">
          {/* Account icon */}
          <div className="text-white text-xl">
            <p><strong>{user?.name}</strong></p>
            <p className="text-sm ">({user?.role})</p> {/* Role displayed under the name */}
          </div>
          <Link to='/userprofile'> <FontAwesomeIcon icon={faUser} size="lg" className="text-white" /></Link>
          <button
            onClick={handleLogout}
            className="bg-white text-purple-800 font-semibold py-2 px-6 rounded-full shadow-md hover:bg-purple-600 hover:text-white transition-all duration-300"
          >
            Logout
          </button>
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

export default UserNavbar;
