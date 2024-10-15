// import React from 'react';
// import AdminNavbar from '../AdminNavbar';
// import { ShootingStarsAndStarsBackgroundDemo } from '../ShootinStar';
// import Footer from '../Footer';
// import { TrackHistoryShootingStar } from '../TrackHistoryShootingStar';

// function TrackHistory() {
//   return (
//     <div className="bg-black min-h-screen">
//       <AdminNavbar />
      
//       <TrackHistoryShootingStar />
//       <Footer />
//     </div>
//   );
// }

// export default TrackHistory;

import React from 'react';
import AdminNavbar from '../AdminNavbar';
import Footer from '../Footer';
import { TrackHistoryShootingStar } from '../TrackHistoryShootingStar';

function TrackHistory() {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      {/* Navbar: Fixed for all screen sizes */}
      <div className="sticky top-0 z-50">
        <AdminNavbar />
      </div>

      {/* Main content: Ensure it fills the entire screen width */}
      <div className="flex-1 flex flex-col overflow-hidden w-full">
        {/* Responsive content wrapper */}
        <div className="w-full p-1 md:p-2 lg:p-2">
          <TrackHistoryShootingStar />
        </div>
      </div>

      {/* Footer: Responsive positioning at the bottom */}
      <Footer />
    </div>
  );
}

export default TrackHistory;
