import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plane, Lock, User } from 'lucide-react'; 

function Login() {
  const images = [
    "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); 

    return () => clearInterval(interval);
  }, [images.length]);

  const toDashboard = () => {
    navigate("/dash");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-2xl overflow-hidden max-w-7xl w-full transform transition-all duration-500 ease-in-out hover:scale-[1.005] animate-fade-in-up">
        
        <div className="relative w-full md:w-2/3 lg:w-3/5 h-[400px] md:h-auto flex items-center justify-center p-4 md:p-6 bg-gray-50">
          <ul className="absolute inset-0">
            {images.map((image, index) => (
              <li
                key={image}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0'
                }`}
              >
                <img
                  src={image}
                  alt={`Travel destination #${index + 1}`}
                  className="w-full h-full object-cover object-center rounded-xl shadow-md border border-gray-200"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-white/70 to-transparent rounded-xl"></div>
              </li>
            ))}
          </ul>
          
          <div className="absolute bottom-6 left-6 z-20 flex flex-col items-start animate-fade-in-up-stagger-text">
            <h2 className="text-4xl font-extrabold text-blue-800 drop-shadow-md mb-2">
              Start Your Adventure
            </h2>
            <p className="text-gray-700 text-lg max-w-md">
              Log in to explore breathtaking destinations and plan your dream getaways.
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/3 lg:w-2/5 bg-white p-8 md:p-12 flex flex-col justify-center items-center text-center animate-fade-in-right">
          <div className="mb-8 animate-bounce-slow">
            <Plane className="w-16 h-16 text-blue-600 drop-shadow-md" />
          </div>
          <h1 className="text-4xl font-extrabold text-gray-800 mb-8 tracking-wide">
            Welcome Back!
          </h1>
          <div className="relative w-full max-w-xs mb-5">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Username"
              className="w-full pl-12 pr-4 py-3 bg-gray-50 text-gray-800 placeholder-gray-400 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300 text-lg font-normal shadow-sm"
            />
          </div>
          <div className="relative w-full max-w-xs mb-8">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-12 pr-4 py-3 bg-gray-50 text-gray-800 placeholder-gray-400 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300 text-lg font-normal shadow-sm"
            />
          </div>
          <button
            onClick={toDashboard}
            className="w-full max-w-xs bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md font-semibold text-xl transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-white"
          >
            Sign In
          </button>
          <a
            href="#"
            className="mt-8 text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium text-md underline-offset-4 hover:underline"
          >
            Don't have an account? <span className="font-semibold text-blue-500 hover:text-blue-700">Sign Up</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;

