import React from 'react';

const DocumentStatus = () => {
  return (
    <div className="bg-slate-700 p-4 rounded-lg mt-4">
      <div className="flex items-center space-x-2 mb-4">
        <div className="w-6 h-6 bg-red-500 rounded flex items-center justify-center">
          <span className="text-white text-xs">⚠</span>
        </div>
        <h3 className="text-white font-semibold">Document Collection Status</h3>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span className="text-gray-300 text-sm">Overdue</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-red-400 font-semibold">12</span>
            <span className="text-gray-400 text-xs">documents exceeded deadline</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <span className="text-gray-300 text-sm">Due Soon</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-yellow-400 font-semibold">8</span>
            <span className="text-gray-400 text-xs">documents approaching deadline</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-gray-300 text-sm">On Track</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-green-400 font-semibold">156</span>
            <span className="text-gray-400 text-xs">documents within deadline</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentStatus;

