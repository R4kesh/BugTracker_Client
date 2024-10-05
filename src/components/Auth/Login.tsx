import React,{useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BackgroundBeamsWithCollision } from "../../components/ui/background-beams-with-collision";
import axios from 'axios';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [role, setRole] = useState<string>('');
  const [error, setError] = useState<string | null>(null); 
  const navigate = useNavigate(); 

  // Handle form submission
  const handleSubmit = async (e:any) => {
    e.preventDefault();

    // Validate fields
    if (!email || !password || !role) {
      setError('All fields including role are required');
      return;
    }

    try {
      
      const response = await axios.post('http://localhost:3000/api/auth/login', { email, password, role });
      console.log('res',response);
      

      if (response && response.data) {
        const { token, user } = response.data;
        
       
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
  
        // Redirect to dashboard
        navigate('/dashboard');
      }
      
    } catch (error:any) {
      
      if (error.response) {
        setError(error.response.data.message);
      } else {
        setError('Something went wrong, please try again');
      }
    }
  };
  return (
    <>
    
      {/* Header */}
      {/* <header className="bg-black text-white p-4 shadow-lg">
        <h1 className="text-center text-2xl font-semibold">Bug Tracker</h1>
      </header> */}

      
        <div className="flex flex-grow">
        
          {/* Left side with big title and quote */}
          <div className="w-1/2 bg-black flex flex-col items-center justify-center p-8">
            <h1 className="text-white text-6xl font-bold">Bug Tracker</h1>
            <p className="text-gray-400 text-lg mt-4 italic">
              "Tracking bugs, solving problems, building a better product."
            </p>
          </div>

          {/* Right side with login form */}
          <div className="w-1/2 bg-gray-900 flex flex-col justify-center p-8">
          <BackgroundBeamsWithCollision>
            <div className="bg-gray-800 p-8 rounded-lg shadow-md">
              <h2 className="text-white text-3xl font-semibold mb-8">Login</h2>

              {error && <div className="mb-4 text-red-500">{error}</div>}


              <form onSubmit={handleSubmit}>
              {/* Email field */}
              <div className="mb-4">
                <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-indigo-500"
                />
              </div>

              {/* Password field */}
              <div className="mb-6">
                <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-indigo-500"
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
                  <option value="projectManager">Project Manager</option>

                </select>
              </div>

              {/* Login button */}
              <button type="submit" className="w-full py-3 bg-indigo-600 text-white rounded-md font-semibold hover:bg-indigo-700">
                Login
              </button>
              </form>

              {/* Signup button */}
              <div className="mt-6 text-center">
                <p className="text-gray-400">Don't have an account?</p>
                <Link to="/signup">
                <button className="text-indigo-500 font-semibold hover:text-indigo-600">
                  Sign up
                </button>
                </Link>
              </div>
            </div>
            </BackgroundBeamsWithCollision>
          </div>
         
        </div>
   

      {/* Footer */}
      <footer className="bg-black text-white p-4 text-center shadow-lg">
        <p className="text-sm">© 2024 Bug Tracker. All rights reserved.</p>
      </footer>
      </>
  );
};

export default Login;
