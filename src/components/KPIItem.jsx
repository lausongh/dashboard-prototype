import React from 'react';

const KPIItem = ({ title, current, previous, target, period, isPercentage = false, color = 'green' }) => {
  const formatValue = (value) => {
    if (isPercentage) return `${value}%`;
    if (typeof value === 'number' && value >= 1000000) {
      return `$${(value / 1000000).toFixed(1)}M`;
    }
    if (typeof value === 'number' && value >= 1000) {
      return `$${(value / 1000).toFixed(0)}K`;
    }
    if (typeof value === 'string' && value.startsWith('$')) return value;
    if (typeof value === 'number' && !isPercentage) return value.toLocaleString();
    return value;
  };

  const getColorClass = (color) => {
    switch (color) {
      case 'green': return 'text-green-400';
      case 'red': return 'text-red-400';
      case 'blue': return 'text-blue-400';
      case 'yellow': return 'text-yellow-400';
      default: return 'text-green-400';
    }
  };

  const getNumberColor = (num) => {
    const colors = ['text-green-400', 'text-blue-400', 'text-purple-400', 'text-orange-400', 'text-red-400'];
    return colors[num % colors.length];
  };

  return (
    <div className="bg-slate-700 p-4 rounded-lg">
      <h3 className="text-white font-semibold text-sm mb-3">{title}</h3>
      
      <div className="flex items-center space-x-2 mb-2">
        <div className={`w-6 h-6 rounded flex items-center justify-center ${color === 'green' ? 'bg-green-500' : color === 'red' ? 'bg-red-500' : 'bg-blue-500'}`}>
          <span className="text-white text-xs">$</span>
        </div>
        <div className={`text-2xl font-bold ${getColorClass(color)}`}>
          {formatValue(current)}
        </div>
        <div className={`w-6 h-6 rounded flex items-center justify-center text-white text-xs ${getNumberColor(Math.floor(Math.random() * 20))}`}>
          {Math.floor(Math.random() * 20) + 1}
        </div>
      </div>
      
      <div className="space-y-1 text-xs">
        <div className="flex justify-between">
          <span className="text-gray-400">Previous:</span>
          <span className="text-gray-300">{formatValue(previous)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Target:</span>
          <span className="text-gray-300">{formatValue(target)}</span>
        </div>
        <div className="text-gray-400 mt-2">{period}</div>
      </div>
    </div>
  );
};

export default KPIItem;

