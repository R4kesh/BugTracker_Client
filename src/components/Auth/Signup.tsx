import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BackgroundBeamsWithCollision } from "../../components/ui/background-beams-with-collision";

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(''); 
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/auth/register`, {
        name,
        email,
        phoneNumber, 
        password,
        role,
      });

      if (response.status === 201) {
        setSuccess('User registered successfully!');
        setError('');
        console.log('email',email)
        localStorage.setItem('email', email);
        window.location.href = '/otp'; 
      }
    } catch (err:any) {
      setError(err.response?.data?.message || 'An error occurred during registration');
    }
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="bg-black text-white p-4 shadow-lg">
        <h1 className="text-center text-2xl font-semibold">Bug Tracker</h1>
      </header>

      <div className="flex flex-grow">
        {/* Left side with big title and quote */}
        <div className="w-1/2 bg-black flex flex-col items-center justify-center p-8">
          <h1 className="text-white text-6xl font-bold">Sign Up</h1>
          <p className="text-gray-400 text-lg mt-4 italic">
            "Join us and help track bugs to build better products!"
          </p>
        </div>

        {/* Right side with smaller signup form */}
        <div className="w-1/2 bg-gray-900 flex flex-col justify-center p-4">
          <BackgroundBeamsWithCollision>
            <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-white text-3xl font-semibold mb-4">Create an Account</h2>

              {error && <p className="text-red-500 mb-4">{error}</p>}
              {success && <p className="text-green-500 mb-4">{success}</p>}

              {/* Name field */}
              <div className="mb-3">
                <label className="block text-gray-400 text-sm font-bold mb-1" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-indigo-500"
                />
              </div>

              {/* Email field */}
              <div className="mb-3">
                <label className="block text-gray-400 text-sm font-bold mb-1" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-indigo-500"
                />
              </div>

              {/* Phone number field */}
              <div className="mb-3">
                <label className="block text-gray-400 text-sm font-bold mb-1" htmlFor="phonenumber">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phonenumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)} // Update the state with phone number
                  placeholder="Enter your phone number"
                  className="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-indigo-500"
                  pattern="[0-9]*" // Ensure only numbers are entered
                  
                />
              </div>

              {/* Password field */}
              <div className="mb-3">
                <label className="block text-gray-400 text-sm font-bold mb-1" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-indigo-500"
                  required // Make this field required
                />
              </div>

              {/* Confirm Password field */}
              <div className="mb-3">
                <label className="block text-gray-400 text-sm font-bold mb-1" htmlFor="confirm-password">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm your password"
                  className="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-indigo-500"
                  required // Make this field required
                />
              </div>

              {/* Role selection */}
              <div className="mb-4">
                <label className="block text-gray-400 text-sm font-bold mb-1" htmlFor="role">
                  Select Role
                </label>
                <select
                  id="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-indigo-500"
                  required // Make this field required
                >
                  <option value="">Select your role</option>
                  <option value="tester">Tester</option>
                  <option value="designer">Designer</option>
                  <option value="developer">Developer</option>
                  <option value="developer">Project Manager</option>

                </select>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="w-full py-2 bg-indigo-600 text-white rounded-md font-semibold hover:bg-indigo-700"
              >
                Sign Up
              </button>

              {/* Login prompt */}
              <div className="mt-4 text-center">
                <p className="text-gray-400">Already have an account?</p>
                <Link to="/login">
                  <button className="text-indigo-500 font-semibold hover:text-indigo-600">Log in</button>
                </Link>
              </div>
            </form>
          </BackgroundBeamsWithCollision>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white p-4 text-center shadow-lg">
        <p className="text-sm">© 2024 Bug Tracker. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Signup;
