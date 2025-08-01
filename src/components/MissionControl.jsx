import React from 'react';
import Calendar from './Calendar';
import DocumentStatus from './DocumentStatus';
import DocumentUpload from './DocumentUpload';

const MissionControl = () => {
  return (
    <div className="bg-slate-800 p-6 rounded-lg">
      <div className="flex items-center space-x-2 mb-6">
        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
          <span className="text-white text-sm">🎯</span>
        </div>
        <div>
          <h2 className="text-white font-bold text-xl">Mission Control</h2>
          <p className="text-gray-300 text-sm">Document Status Tracking</p>
        </div>
      </div>
      
      <Calendar />
      <DocumentStatus />
      <DocumentUpload />
    </div>
  );
};

export default MissionControl;

