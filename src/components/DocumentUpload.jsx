import React from 'react';
import { Button } from '@/components/ui/button.jsx';

const DocumentUpload = () => {
  const documents = [
    { name: 'Financial Statements (Q4)', uploadNumber: 5 },
    { name: 'Tax Returns (Annual)', uploadNumber: 6 },
    { name: 'Bank Reconciliations', uploadNumber: 7 },
    { name: 'Expense Reports', uploadNumber: 8 },
  ];

  return (
    <div className="bg-slate-700 p-4 rounded-lg mt-4">
      <h3 className="text-white font-semibold mb-4">Document Upload Actions:</h3>
      
      <div className="space-y-3">
        {documents.map((doc, index) => (
          <div key={index} className="flex items-center justify-between">
            <span className="text-gray-300 text-sm">{doc.name}</span>
            <Button 
              size="sm" 
              className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 text-xs"
            >
              Upload {doc.uploadNumber}
            </Button>
          </div>
        ))}
      </div>
      
      <div className="mt-6 text-center">
        <div className="text-4xl font-bold text-white mb-1">96%</div>
        <div className="text-gray-300 text-sm">Compliance Rate</div>
        <div className="w-full bg-gray-600 rounded-full h-2 mt-2">
          <div className="bg-green-500 h-2 rounded-full" style={{ width: '96%' }}></div>
        </div>
      </div>
    </div>
  );
};

export default DocumentUpload;

