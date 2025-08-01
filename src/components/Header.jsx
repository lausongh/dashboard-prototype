import React from 'react';

const Header = () => {
  return (
    <header className="bg-slate-800 text-white p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">A</span>
          </div>
          <span className="text-orange-500 font-bold text-xl">affinitive</span>
        </div>
      </div>
      
      <div className="text-center">
        <h1 className="text-orange-400 text-2xl font-bold">Insight Hub</h1>
        <p className="text-gray-300 text-sm">AI Co-Piloted Financial Intelligence</p>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
            <span className="text-white text-xs">📊</span>
          </div>
          <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
            <span className="text-white text-xs">M</span>
          </div>
        </div>
        <div className="text-right">
          <p className="text-white font-semibold">Meridian Enterprises</p>
          <p className="text-gray-300 text-sm">Financial Intelligence Dashboard</p>
        </div>
      </div>
    </header>
  );
};

export default Header;

