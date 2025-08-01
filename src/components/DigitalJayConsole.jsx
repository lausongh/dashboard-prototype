import React from 'react';
import MonthlyInsights from './MonthlyInsights';
import MarketBenchmarks from './MarketBenchmarks';
import ComplianceSubmission from './ComplianceSubmission';

const DigitalJayConsole = () => {
  return (
    <div className="bg-slate-800 p-6 rounded-lg">
      <div className="flex items-center space-x-2 mb-6">
        <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
          <span className="text-white text-sm">🤖</span>
        </div>
        <div>
          <h2 className="text-white font-bold text-xl">Digital Jay (DJ) Console</h2>
          <p className="text-gray-300 text-sm">Meridian Enterprises Intelligence</p>
        </div>
      </div>
      
      <MonthlyInsights />
      <MarketBenchmarks />
      <ComplianceSubmission />
    </div>
  );
};

export default DigitalJayConsole;

