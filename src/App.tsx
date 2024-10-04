import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/Landing/LandingPage';
import OtpPage from './components/OtpPage';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';



const App = () => {
  return (
    <div>
       <Router>
    <Routes>
      {/* Landing Page Route */}
      {/* <Route path="/" element={<LandingPage/>} /> */}
      
      {/* Example Additional Route */}
      <Route path="/" element={<LandingPage/>} />
      
      
      <Route path="/otp" element={<OtpPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

    </Routes>
  </Router>

      
    </div>
  )
}

export default App
