import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const AdminNavbar: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Replace with real authentication logic

  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    console.log('User logged out');
  };

  return (
 
    <nav className="bg-gradient-to-r from-slate-900 to-gray-700 text-white w-full py-4 flex justify-between items-center px-8 shadow-lg">
       <div className="text-2xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-red-700 via-yellow-300 to-red-600 drop-shadow-md">
  Bug Tracker
</div>
{isLoggedIn ? (
        <Link to='/login'>
        <button
          onClick={handleLogout}
          className="bg-white text-purple-800 font-semibold py-2 px-6 rounded-full shadow-md hover:bg-purple-600 hover:text-white transition-all duration-300"
        >
          Logout
        </button></Link>
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
