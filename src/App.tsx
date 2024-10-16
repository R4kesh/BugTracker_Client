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
import AddTestCase from './components/TesterDashboard/AddTestCase';
import TestReport from './components/AdminDashboard/TestReport';
import TestList from './components/TesterDashboard/TestList';
import ProjectModule from './components/AdminDashboard/ProjectModule';
import EmployeeList from './components/AdminDashboard/EmployeeList';
import TrackHistory from './components/AdminDashboard/TrackHistory';
import ProjectPreview from './components/AdminDashboard/ProjectPreview';
import PreviewModuleList from './components/AdminDashboard/PreviewModuleList';
import PreviewCard from './components/AdminDashboard/PreviewCard';

import UserProfile from './components/UserDashboard/UserComponents/UserProfile';
import AdminProfile from './components/AdminProfile';
import TesterProfile from './components/TesterDashboard/TesterProfile';





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
      <Route path="/tasklist/:projectId/:epicId" element={<TaskList />} />
      <Route path="/assignedlist" element={<AssignedList />} />
      <Route path="/testreport" element={<TestReport />} />
      <Route path="/projectModule/:projectId" element={<ProjectModule />} />
      <Route path="/employeelist" element={<EmployeeList />} />
      <Route path="/trackhistory" element={<TrackHistory />} />
      <Route path="/projectpreview" element={<ProjectPreview />} />
      <Route path="/previewmodule/:id" element={<PreviewModuleList />} />
      <Route path="/previewcard/:id/:epicId" element={<PreviewCard />} />
      <Route path="/adminprofile" element={<AdminProfile />} />

      


      <Route path="/dashboard" element={<UserDashboard />} />
      <Route path="/assignments" element={<UserAssignments />} />
      <Route path="/works" element={<Works />} />


     

      <Route path="/testerdashboard" element={<TesterDashboard />} />
      <Route path="/testtask" element={<TesterTaskList />} />
      <Route path="/testcase/:id" element={<AddTestCase />} />
      <Route path="/testedlist" element={<TestList />} />
      <Route path="/testerprofile" element={<TesterProfile />} />





   



      


    </Routes>
  </Router>

      
    </div>
  )
}

export default App
