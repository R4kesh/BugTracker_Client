import React from 'react';
import AdminNavbar from '../AdminNavbar';
import { ShootingStarsAndStarsBackgroundDemo } from '../ShootinStar';
import Footer from '../Footer';

function AdminDashboard() {
  return (
    <div className="bg-black min-h-screen">
      <AdminNavbar />
      <ShootingStarsAndStarsBackgroundDemo />
      <Footer />
    </div>
  );
}

export default AdminDashboard;
