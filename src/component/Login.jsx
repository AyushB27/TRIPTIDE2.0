import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

function Login() {

  const images = [
    "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);
   const navigator = useNavigate();
   const toDashboard =()=>
   {
    navigator("/dash");
   }
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-xl overflow-hidden max-w-6xl w-full">
        <div className="relative w-full md:w-2/3 lg:w-3/5 h-96 md:h-auto flex items-center justify-center bg-gray-50 p-6 md:p-8 rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none">
          <ul className="absolute inset-0">
            {images.map((image, index) => (
              <li
                key={image}
                className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                  index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0'
                }`}
              >
                <img
                  src={image}
                  alt={`Nature Image #${index + 1}`}
                  className="w-full h-full object-cover object-center rounded-xl shadow-lg"
                />
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full md:w-1/3 lg:w-2/5 bg-gray-200 p-8 md:p-12 flex flex-col justify-center items-center text-center rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-8 tracking-wide">LOG IN</h1>
          <input
            type="text"
            placeholder="Username"
            className="w-full max-w-xs p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full max-w-xs p-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700"
          />
          <button className="w-full max-w-xs bg-yellow-500 text-white py-3 rounded-lg hover:bg-yellow-600 transition-colors duration-300 shadow-md font-semibold text-lg" onClick={toDashboard}>
            Sign In
          </button>
          <a href="#" className="mt-6 text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">
            Sign Up?
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;