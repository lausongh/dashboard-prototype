import React from 'react';

const ComplianceSubmission = () => {
  const complianceItems = [
    { name: 'Tax', color: 'bg-green-500' },
    { name: 'Audit', color: 'bg-blue-500' },
    { name: 'IRAS', color: 'bg-purple-500' },
    { name: 'Corp Sec - Acra', color: 'bg-orange-500' }
  ];

  return (
    <div className="bg-slate-700 p-4 rounded-lg mt-4">
      <h3 className="text-white font-semibold mb-4">Compliance and Submission</h3>
      
      <div className="grid grid-cols-2 gap-2">
        {complianceItems.map((item, index) => (
          <button
            key={index}
            className={`${item.color} text-white p-2 rounded text-sm font-medium hover:opacity-80 transition-opacity`}
          >
            {item.name}
          </button>
        ))}
      </div>
      
      <div className="mt-6 p-3 bg-slate-600 rounded-lg">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs">DJ</span>
          </div>
          <div className="flex-1">
            <p className="text-gray-300 text-sm">
              Hi, I am DJ, let's chat over your financial data.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplianceSubmission;

