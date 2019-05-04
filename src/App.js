import React from 'react';
import './App.css';
import DataEntry from './components/data-entry/data-entry';

function App() {
  return (
    <div className="app">
      <header className="app-header">Should I Cash out my RRSP?</header>
      <DataEntry />
    </div>
  );
}

export default App;
