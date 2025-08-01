import React from 'react';
import { Button } from '@/components/ui/button.jsx';

const MarketBenchmarks = () => {
  const benchmarks = [
    {
      metric: 'Revenue Growth',
      value: '15%',
      comparison: 'Above Market (12%)',
      status: 'positive'
    },
    {
      metric: 'Client Retention',
      value: '94%',
      comparison: 'Excellent (Ind. 89%)',
      status: 'positive'
    },
    {
      metric: 'Profit Margin',
      value: '23.5%',
      comparison: 'Above Average (20%)',
      status: 'positive'
    },
    {
      metric: 'Employee Satisfaction',
      value: '87%',
      comparison: 'Top Quartile',
      status: 'positive'
    }
  ];

  return (
    <div className="bg-slate-700 p-4 rounded-lg mt-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white font-semibold">Meridian vs Market Benchmarks</h3>
        <Button 
          size="sm" 
          className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 text-xs"
        >
          View Details
        </Button>
      </div>
      
      <div className="space-y-3">
        {benchmarks.map((benchmark, index) => (
          <div key={index} className="flex items-center justify-between p-2 bg-slate-600 rounded">
            <div>
              <div className="text-white font-medium text-sm">{benchmark.metric}</div>
              <div className="text-gray-400 text-xs">{benchmark.comparison}</div>
            </div>
            <div className="text-right">
              <div className="text-green-400 font-bold text-lg">{benchmark.value}</div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center space-x-4 mt-4 text-xs">
        <button className="text-blue-400 hover:text-blue-300 underline">
          DJ Monthly Insights
        </button>
        <button className="text-blue-400 hover:text-blue-300 underline">
          Market Benchmarking
        </button>
        <button className="text-blue-400 hover:text-blue-300 underline">
          Anomalies Alert - Fraud Analysis
        </button>
      </div>
    </div>
  );
};

export default MarketBenchmarks;

