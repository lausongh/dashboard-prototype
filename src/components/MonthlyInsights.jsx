import React from 'react';

const MonthlyInsights = () => {
  const insights = [
    {
      title: 'Revenue Growth',
      content: 'Outstanding 15% quarter-over-quarter growth demonstrates Meridian\'s strong market positioning and effective sales strategies.',
      icon: '📈',
      color: 'text-green-400'
    },
    {
      title: 'Operational Excellence',
      content: 'Current 23.5% profit margin shows improved cost management. Target of 25% is within reach with continued optimization efforts.',
      icon: '🎯',
      color: 'text-blue-400'
    },
    {
      title: 'Cash Flow Strength',
      content: 'Bank balance of $890K provides excellent liquidity for strategic investments and unexpected opportunities.',
      icon: '💰',
      color: 'text-green-400'
    },
    {
      title: 'Debt Optimization',
      content: 'Gearing ratio improvement to 0.35 shows disciplined financial management. Continue debt reduction strategies.',
      icon: '📊',
      color: 'text-purple-400'
    },
    {
      title: 'Team Growth',
      content: 'Strategic hiring brought team to 145 employees. Focus on retention programs to maintain talent acquisition momentum.',
      icon: '👥',
      color: 'text-orange-400'
    }
  ];

  return (
    <div className="bg-slate-700 p-4 rounded-lg">
      <div className="flex items-center space-x-2 mb-4">
        <div className="w-8 h-8 rounded-full overflow-hidden">
          <img 
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMTYiIGZpbGw9IiM2MzY2RjEiLz4KPHN2ZyB4PSI4IiB5PSI4IiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSI+CjxwYXRoIGQ9Ik04IDJMMTAgNkw2IDZMOCAyWiIgZmlsbD0id2hpdGUiLz4KPHN2ZyB4PSI0IiB5PSI4IiB3aWR0aD0iOCIgaGVpZ2h0PSI2IiB2aWV3Qm94PSIwIDAgOCA2IiBmaWxsPSJub25lIj4KPHBhdGggZD0iTTAgMEg4VjZIMFYwWiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cjwvc3ZnPgo8L3N2Zz4K" 
            alt="DJ Avatar" 
            className="w-8 h-8"
          />
        </div>
        <h3 className="text-white font-semibold">DJ Cue - Monthly Insights for Meridian Enterprises</h3>
      </div>
      
      <div className="space-y-4">
        {insights.map((insight, index) => (
          <div key={index} className="border-l-2 border-gray-600 pl-3">
            <div className="flex items-center space-x-2 mb-1">
              <span className="text-lg">{insight.icon}</span>
              <h4 className={`font-semibold ${insight.color}`}>{insight.title}:</h4>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">{insight.content}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-3 bg-slate-600 rounded-lg">
        <div className="flex items-center space-x-2 mb-2">
          <span className="text-yellow-400">⚡</span>
          <h4 className="text-yellow-400 font-semibold">Key Recommendation:</h4>
        </div>
        <p className="text-gray-300 text-sm">
          Implement automated KPI dashboards for department heads to improve decision-making speed and maintain growth trajectory.
        </p>
      </div>
    </div>
  );
};

export default MonthlyInsights;

