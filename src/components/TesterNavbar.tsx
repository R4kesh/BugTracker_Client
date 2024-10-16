// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// // import { Link } from 'react-router-dom';

// const TesterNavbar: React.FC = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(true); // Replace with real authentication logic

//   const handleLogout = () => {
//     localStorage.clear();
//     setIsLoggedIn(false);
//     console.log('User logged out');
//   };
//   return (
 
//     <nav className="bg-gradient-to-r from-slate-900 to-gray-700 text-white w-full py-4 flex justify-between items-center px-8 shadow-lg">
//          <div className="text-2xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-red-700 via-yellow-300 to-red-600 drop-shadow-md">
//   Bug Tracker
// </div>
// {isLoggedIn ? (
//         <Link to='/login'>
//         <button
//           onClick={handleLogout}
//           className="bg-white text-purple-800 font-semibold py-2 px-6 rounded-full shadow-md hover:bg-purple-600 hover:text-white transition-all duration-300"
//         >
//           Logout
//         </button></Link>
//       ) : (
//         <Link
//           to="/login"
//           className="bg-white text-purple-800 font-semibold py-2 px-6 rounded-full shadow-md hover:bg-purple-600 hover:text-white transition-all duration-300"
//         >
//           Login
//         </Link>
//       )}
//     </nav>
//   );
// };

// export default TesterNavbar;


import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const TesterNavbar: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Replace with real authentication logic
  const [testerName, setTesterName] = useState<string | null>(null);
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    // Mock authentication logic - replace this with real logic to fetch tester details
    const testerDetails = JSON.parse(localStorage.getItem('user') || '{}');

    if (testerDetails && testerDetails.name && testerDetails.role) {
      setTesterName(testerDetails.name);
      setRole(testerDetails.role);
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    console.log('Tester logged out');
  };

  return (
    <nav className="bg-gradient-to-r from-slate-900 to-gray-700 text-white w-full py-4 flex justify-between items-center px-8 shadow-lg">
      <div className="text-2xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-red-700 via-yellow-300 to-red-600 drop-shadow-md">
        Bug Tracker
      </div>

      {isLoggedIn ? (
        <div className="flex items-center space-x-4">
          {/* Display the tester's name with the role underneath in parentheses */}
          <div className="text-white text-xl">
            <p><strong>{testerName}</strong></p>
            <p className="text-sm">({role})</p> {/* Role displayed under the name */}
          </div>

          {/* Account icon linking to tester profile */}
          <Link to='/testerprofile'>
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

export default TesterNavbar;
