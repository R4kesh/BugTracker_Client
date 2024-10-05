import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900  text-white py-10 mt-8 w-full">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
      
        <div>
          <h2 className="text-2xl font-bold mb-2">Bug Tracker</h2>
          <p className="text-gray-400"></p>
          <p className="mt-4 text-gray-300">
            Delivering excellence and innovation in every project we undertake. Empowering businesses with cutting-edge technology and solutions.
          </p>
        </div>

     
        <div>
          <h3 className="text-xl font-semibold mb-4">About Us</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline text-gray-400">Our Mission</a>
            </li>
            <li>
              <a href="#" className="hover:underline text-gray-400">Our Team</a>
            </li>
            <li>
              <a href="#" className="hover:underline text-gray-400">Careers</a>
            </li>
            <li>
              <a href="#" className="hover:underline text-gray-400">Testimonials</a>
            </li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-xl font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline text-gray-400">Web Development</a>
            </li>
            <li>
              <a href="#" className="hover:underline text-gray-400">Mobile App Development</a>
            </li>
            <li>
              <a href="#" className="hover:underline text-gray-400">Cloud Solutions</a>
            </li>
            <li>
              <a href="#" className="hover:underline text-gray-400">Digital Marketing</a>
            </li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-300">
            <span className="font-bold">Email:</span> bugtracker@company.com
          </p>
          <p className="text-gray-300 mt-2">
            <span className="font-bold">Phone:</span> +1 (555) 123-4567
          </p>
          <div className="mt-4">
            <h4 className="font-semibold text-lg mb-2">Follow Us</h4>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-white hover:text-blue-500 transition-colors duration-300 animate-bounce"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.46 6c-.77 3.43-3.5 6.28-7.22 7.26-1.34.35-2.67.52-4 .59a9.97 9.97 0 01-1.74-.18c-3.19-.7-5.44-3.36-5.56-6.46A4.78 4.78 0 015.75 8.5a3.27 3.27 0 01.6-.31A3.06 3.06 0 019.16 7c.45-.03.92-.1 1.37-.17a1.94 1.94 0 001.55-.57c.46-.41.84-.97.92-1.63a4.93 4.93 0 011.43.28c.22.1.41.23.6.36.66.5.91 1.39.53 2.14-.26.54-.69.94-1.14 1.28.14.07.27.15.41.22.93.49 2.1.49 3.06-.01.5-.25.89-.66 1.24-1.09.34-.42.65-.88.92-1.35.59-1.01.88-2.19.86-3.37z"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-white hover:text-blue-500 transition-colors duration-300 animate-bounce"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12c0 4.42 3.04 8.16 7 9.43v-6.68h-2v-2.75h2v-2.05c0-2.27 1.36-3.54 3.44-3.54.98 0 2 .14 2 .14v2.28h-1.13c-1.12 0-1.47.69-1.47 1.39v1.75h2.87l-.46 2.75h-2.41V21.5c3.96-1.27 7-5.01 7-9.43 0-5.52-4.48-10-10-10z"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-white hover:text-blue-500 transition-colors duration-300 animate-bounce"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.8 6.39a3.46 3.46 0 00-2.49-2.47C17.76 3.4 12 3.4 12 3.4s-5.76 0-7.31.52a3.46 3.46 0 00-2.49 2.47A37.13 37.13 0 001 12c0 1.07.05 2.14.2 3.21a3.46 3.46 0 002.49 2.47c1.55.52 7.31.52 7.31.52s5.76 0 7.31-.52a3.46 3.46 0 002.49-2.47c.15-1.07.2-2.14.2-3.21s-.05-2.14-.2-3.21zm-12.1 8.03V9.58l5.83 2.42-5.83 2.42z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
