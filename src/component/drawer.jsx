import React from "react";

const Drawer = ({ onSelect }) => { 
  return (
    <aside className="fixed top-0 left-0 h-full w-64 bg-gray-800 text-white p-4 z-40">
      <nav className="flex flex-col space-y-2">
        <h2 className="text-2xl font-semibold mb-4">Welcome!</h2>

        <button
          className="block p-2 rounded hover:bg-gray-700 transition-colors duration-200 text-left w-full"
          onClick={() => onSelect("explore")} 
        >
          Explore
        </button>
        <button
          className="block p-2 rounded hover:bg-gray-700 transition-colors duration-200 text-left w-full"
          onClick={() => onSelect("bucketList")} 
        >
          Bucket List
        </button>
        <button
          className="block p-2 rounded hover:bg-gray-700 transition-colors duration-200 text-left w-full"
          onClick={() => onSelect("map")} 
        >
          Map
        </button>
        <button
          className="block p-2 rounded hover:bg-gray-700 transition-colors duration-200 text-left w-full"
          onClick={() => onSelect("profile")} 
        >
          Profile
        </button>
        <button
          className="block p-2 rounded hover:bg-gray-700 transition-colors duration-200 text-left w-full"
          onClick={() => onSelect("rewards")} 
        >
          Rewards
        </button>

        <button
          className="mt-[140px] text-red-700 font-extrabold hover:text-red-600 text-left w-full"
          onClick={() => onSelect("logout")} 
        >
          Log out
        </button>
      </nav>
    </aside>
  );
};

export default Drawer;