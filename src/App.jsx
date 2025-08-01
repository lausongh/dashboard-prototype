import React from 'react';
import Header from './components/Header';
import MissionControl from './components/MissionControl';
import FlashKPI from './components/FlashKPI';
import DigitalJayConsole from './components/DigitalJayConsole';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Left Column - Mission Control */}
          <div className="xl:col-span-1">
            <MissionControl />
          </div>
          
          {/* Middle Column - Flash KPI */}
          <div className="xl:col-span-1">
            <FlashKPI />
          </div>
          
          {/* Right Column - Digital Jay Console */}
          <div className="xl:col-span-1">
            <DigitalJayConsole />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

