import React from 'react';

const Calendar = () => {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);
  
  const getDateStatus = (day) => {
    // Simulate different statuses for different dates
    if ([1, 5, 12, 19, 26].includes(day)) return 'complete';
    if ([2, 9, 16, 23, 30].includes(day)) return 'pending';
    if ([14, 21, 28].includes(day)) return 'overdue';
    return 'normal';
  };

  const getDateClass = (status) => {
    switch (status) {
      case 'complete': return 'bg-green-500 text-white';
      case 'pending': return 'bg-yellow-500 text-white';
      case 'overdue': return 'bg-red-500 text-white';
      default: return 'bg-gray-600 text-gray-300 hover:bg-gray-500';
    }
  };

  return (
    <div className="bg-slate-700 p-4 rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white font-semibold text-lg">August 2025</h3>
        <div className="flex space-x-1">
          <button className="w-6 h-6 bg-purple-500 rounded text-white text-xs">4</button>
        </div>
      </div>
      
      <div className="grid grid-cols-7 gap-1 mb-2">
        {daysOfWeek.map(day => (
          <div key={day} className="text-gray-400 text-xs text-center p-1">
            {day}
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-7 gap-1">
        {daysInMonth.map(day => {
          const status = getDateStatus(day);
          return (
            <button
              key={day}
              className={`w-8 h-8 rounded text-sm font-medium ${getDateClass(status)} transition-colors`}
            >
              {day}
            </button>
          );
        })}
      </div>
      
      <div className="flex items-center justify-between mt-4 text-xs">
        <div className="flex items-center space-x-1">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-gray-300">Complete</span>
        </div>
        <div className="flex items-center space-x-1">
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <span className="text-gray-300">Pending</span>
        </div>
        <div className="flex items-center space-x-1">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <span className="text-gray-300">Overdue</span>
        </div>
      </div>
    </div>
  );
};

export default Calendar;

