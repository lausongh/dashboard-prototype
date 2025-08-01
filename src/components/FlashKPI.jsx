import React from 'react';
import KPIItem from './KPIItem';

const FlashKPI = () => {
  const kpiData = [
    {
      title: 'Operating Revenue',
      current: '$2,450,000',
      previous: '$2,150,000',
      target: '$2,800,000',
      period: 'Q4 2024',
      color: 'green'
    },
    {
      title: 'Profit/Loss Before Tax',
      current: '$485,000',
      previous: '$420,000',
      target: '$550,000',
      period: 'Q4 2024',
      color: 'green'
    },
    {
      title: 'Net Tangible Assets (Liab.)',
      current: '$1,850,000',
      previous: '$1,720,000',
      target: '$2,000,000',
      period: 'Q4 2024',
      color: 'green'
    },
    {
      title: 'Shareholders Funds',
      current: '$1,650,000',
      previous: '$1,520,000',
      target: '$1,800,000',
      period: 'Q4 2024',
      color: 'green'
    },
    {
      title: 'Profit Margin (%)',
      current: 19.8,
      previous: 19.5,
      target: 22,
      period: 'Q4 2024',
      isPercentage: true,
      color: 'blue'
    },
    {
      title: 'Return on Shareholders Funds (%)',
      current: 29.4,
      previous: 27.6,
      target: 32,
      period: 'Q4 2024',
      isPercentage: true,
      color: 'blue'
    },
    {
      title: 'Return on Capital Employed (%)',
      current: 24.7,
      previous: 22.3,
      target: 26,
      period: 'Q4 2024',
      isPercentage: true,
      color: 'blue'
    },
    {
      title: 'Liquidity Ratio',
      current: 2.4,
      previous: 2.1,
      target: 2.5,
      period: 'Q4 2024',
      color: 'yellow'
    },
    {
      title: 'Gearing Ratio (%)',
      current: 35.2,
      previous: 38.7,
      target: 30,
      period: 'Q4 2024',
      isPercentage: true,
      color: 'red'
    },
    {
      title: 'Number of Employees',
      current: 145,
      previous: 138,
      target: 150,
      period: 'Q4 2024',
      color: 'green'
    }
  ];

  return (
    <div className="bg-slate-800 p-6 rounded-lg">
      <div className="flex items-center space-x-2 mb-6">
        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
          <span className="text-white text-sm">⚡</span>
        </div>
        <div>
          <h2 className="text-white font-bold text-xl">Flash KPI</h2>
          <p className="text-gray-300 text-sm">Real-time Financial Metrics</p>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        {kpiData.map((kpi, index) => (
          <KPIItem
            key={index}
            title={kpi.title}
            current={kpi.current}
            previous={kpi.previous}
            target={kpi.target}
            period={kpi.period}
            isPercentage={kpi.isPercentage}
            color={kpi.color}
          />
        ))}
      </div>
    </div>
  );
};

export default FlashKPI;

