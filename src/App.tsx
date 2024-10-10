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
import AssignedList from './components/AdminDashboard/AssignedList';
import TesterDashboard from './components/TesterDashboard/TesterDashboard';
import UserDashboard from './components/UserDashboard/UserDashboard';
import UserAssignments from './components/UserDashboard/UserAssignments';
import Works from './components/UserDashboard/Works';
import TesterTaskList from './components/TesterDashboard/TesterTaskList';





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
      <Route path="/assignedlist" element={<AssignedList />} />

      <Route path="/dashboard" element={<UserDashboard />} />
      <Route path="/assignments" element={<UserAssignments />} />
      <Route path="/works" element={<Works />} />


      




      <Route path="/testerdashboard" element={<TesterDashboard />} />
      <Route path="/testtask" element={<TesterTaskList />} />



   



      


    </Routes>
  </Router>

      
    </div>
  )
}

export default App
