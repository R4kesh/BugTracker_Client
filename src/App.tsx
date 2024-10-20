import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/Landing/LandingPage";
import OtpPage from "./components/OtpPage";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import SeverityManagement from "./components/AdminDashboard/SeverityManagement";
import UserManagement from "./components/AdminDashboard/UserManagement";
import AddProject from "./components/AdminDashboard/AddProject";
import TaskList from "./components/AdminDashboard/TaskList";
import AssignedList from "./components/AdminDashboard/AssignedList";
import TesterDashboard from "./components/TesterDashboard/TesterDashboard";
import UserDashboard from "./components/UserDashboard/UserDashboard";
import UserAssignments from "./components/UserDashboard/UserAssignments";
import Works from "./components/UserDashboard/Works";
import TesterTaskList from "./components/TesterDashboard/TesterTaskList";
import AddTestCase from "./components/TesterDashboard/AddTestCase";
import TestReport from "./components/AdminDashboard/TestReport";
import TestList from "./components/TesterDashboard/TestList";
import ProjectModule from "./components/AdminDashboard/ProjectModule";
import TrackHistory from "./components/AdminDashboard/TrackHistory";
import ProjectPreview from "./components/AdminDashboard/ProjectPreview";
import PreviewModuleList from "./components/AdminDashboard/PreviewModuleList";
import PreviewCard from "./components/AdminDashboard/PreviewCard";

import UserProfile from "./components/UserDashboard/UserComponents/UserProfile";
import AdminProfile from "./components/AdminProfile";
import TesterProfile from "./components/TesterDashboard/TesterProfile";
import { AuthProvider } from "./providers/auth-provider";
import { ProtectedRoute } from "./providers/protected-route";
import EditUserProfile from "./components/UserDashboard/UserComponents/EditProfile";
import EditTesterProfile from "./components/TesterDashboard/TesterComponent/TesterEditProfile";
import ReAssignedTaskList from "./components/AdminDashboard/ReAssignedTaskList";
import ReAssignment from "./components/UserDashboard/ReAssignment";
import TesterReAssignWork from "./components/TesterDashboard/TesterReAssignWork";
import UserTaskTrack from "./components/AdminDashboard/UserTasKTrack";
import TaskHistoryTable from "./components/AdminDashboard/TaskHistoryTable";
import ReAssignTaskHistory from "./components/AdminDashboard/ReAssignTaskHistory";

const App = () => {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/otp" element={<OtpPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            {/* admin routes */}
            <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
              <Route path="/admindashboard" element={<AdminDashboard />} />
              <Route path="/userRequest" element={<SeverityManagement />} />
              <Route path="/usermanagement" element={<UserManagement />} />
              <Route path="/addproject" element={<AddProject />} />
              <Route path="/tasklist/:projectId/:epicId" element={<TaskList />} />
              <Route path="/assignedlist" element={<AssignedList />} />
              <Route path="/testreport" element={<TestReport />} />
              <Route path="/projectModule/:projectId" element={<ProjectModule />} />
              <Route path="/trackhistory/:id" element={<TrackHistory />} />
              <Route path="/projectpreview" element={<ProjectPreview />} />
              <Route path="/previewmodule/:id" element={<PreviewModuleList />} />
              <Route path="/previewcard/:id/:epicId" element={<PreviewCard />} />
              <Route path="/adminprofile" element={<AdminProfile />} />
              <Route path="/reassigntasklist" element={<ReAssignedTaskList />} />
              <Route path="/usertrack/:id" element={<UserTaskTrack />} />
              <Route path="/taskhistory" element={<TaskHistoryTable />} />
              <Route path="/reassigntaskhistory" element={<ReAssignTaskHistory />} />
            </Route>
            {/* admin routes */}

            {/* developer routes */}
            <Route element={<ProtectedRoute allowedRoles={['developer', 'designer']} />}>
              <Route path="/dashboard" element={<UserDashboard />} />
              <Route path="/assignments" element={<UserAssignments />} />
              <Route path="/works" element={<Works />} />
              <Route path="/userprofile" element={<UserProfile />} />
              <Route path="/edituserprofile" element={<EditUserProfile />} />
              <Route path="/reassigment" element={<ReAssignment />} />
            </Route>
            {/* developer routes */}

            {/* Tester routes */}
            <Route element={<ProtectedRoute allowedRoles={['tester']} />}>
              <Route path="/testerdashboard" element={<TesterDashboard />} />
              <Route path="/testtask" element={<TesterTaskList />} />
              <Route path="/testcase/:id" element={<AddTestCase />} />
              <Route path="/testedlist" element={<TestList />} />
              <Route path="/testerprofile" element={<TesterProfile />} />
              <Route path="/updatetesterprofile" element={<EditTesterProfile />} />
              <Route path="/reassignedtest" element={<TesterReAssignWork />} />
            </Route>

          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
};

export default App;
