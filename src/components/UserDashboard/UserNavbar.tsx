import React from 'react';
// import { Link } from 'react-router-dom';

const UserNavbar: React.FC = () => {
  return (
 
    <nav className="bg-gradient-to-r from-slate-900 to-gray-700 text-white w-full py-4 flex justify-between items-center px-8 shadow-lg">
      <div className="text-2xl font-extrabold tracking-wide">
        Bug Tracker
      </div>
      <a 
        href="/login" 
        className="bg-white text-purple-800 font-semibold py-2 px-6 rounded-full shadow-md hover:bg-purple-600 hover:text-white transition-all duration-300"
      >
        Login
      </a>
    </nav>
  );
};

export default UserNavbar;
