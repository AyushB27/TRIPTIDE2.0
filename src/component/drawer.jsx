import React from "react";
import {
  Compass, 
  ListTodo, 
  Map, 
  User, 
  Award,
  LogOut, 
} from "lucide-react"; 

const Drawer = ({ onSelect }) => {
  return (
    <aside className="fixed top-0 left-0 h-full w-64 bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6 z-40 shadow-2xl transform -translate-x-full md:translate-x-0 transition-all duration-500 ease-in-out group">
      <nav className="flex flex-col space-y-4 h-full">
        <h2 className="text-4xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 animate-pulse-slow">
          A New Adventure Awaits!
        </h2>

        <div className="flex-grow space-y-3">
          <DrawerButton onSelect={onSelect} page="explore" icon={Compass}>
            Explore
          </DrawerButton>
          <DrawerButton onSelect={onSelect} page="bucketList" icon={ListTodo}>
            Bucket List
          </DrawerButton>
          <DrawerButton onSelect={onSelect} page="map" icon={Map}>
            Map
          </DrawerButton>
          <DrawerButton onSelect={onSelect} page="profile" icon={User}>
            Profile
          </DrawerButton>
          <DrawerButton onSelect={onSelect} page="rewards" icon={Award}>
            My Journey
          </DrawerButton>
        </div>

        <button
          className="p-4 rounded-xl text-red-400 font-bold hover:text-red-300 hover:bg-gray-700/30 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-70 transition-all duration-300 text-left w-full text-lg self-end transform hover:scale-105 active:scale-95"
          onClick={() => onSelect("logout")}
        >
          <span className="flex items-center">
            <LogOut className="w-6 h-6 mr-3" />
            Log Out
          </span>
        </button>
      </nav>
    </aside>
  );
};


const DrawerButton = ({ onSelect, page, children, icon: IconComponent }) => (
  <button
    className="relative group p-4 rounded-xl hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-70 transition-all duration-300 text-left w-full text-xl font-semibold overflow-hidden
               before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r  before:opacity-0 before:transition-opacity before:duration-300 before:z-0
               hover:before:opacity-100"
    onClick={() => onSelect(page)}
  >
    <span className="relative z-10 flex items-center transform group-hover:translate-x-1 transition-transform duration-300">
      {IconComponent && <IconComponent className="w-6 h-6 mr-3" />} 
      {children}
    </span>
    <span className="absolute top-0 left-0 w-full h-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></span>
  </button>
);

export default Drawer;

