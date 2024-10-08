import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/Landing/LandingPage';
import OtpPage from './components/OtpPage';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import SeverityManagement from './components/AdminDashboard/SeverityManagement';
import UserManagement from './components/AdminDashboard/UserManagement';
import AddProject from './components/AdminDashboard/AddProject';
import TaskList from './components/AdminDashboard/TaskList';





const App = () => {
  return (
    <div>
       <Router>
    <Routes>
     
      <Route path="/" element={<LandingPage/>} />
      
      
      <Route path="/otp" element={<OtpPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/admindashboard" element={<AdminDashboard />} />
      <Route path="/userRequest" element={<SeverityManagement />} />
      <Route path="/usermanagement" element={<UserManagement />} />
      <Route path="/addproject" element={<AddProject />} />
      <Route path="/tasklist/:id" element={<TaskList />} />

   






    </Routes>
  </Router>

      
    </div>
  )
}

export default App
