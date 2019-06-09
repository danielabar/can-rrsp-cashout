import React from 'react';
import './App.css';
import DataEntry from './components/data-entry/data-entry';

function App() {
  const calculate = input => {
    console.dir(input);
  };
  return (
    <div className="app">
      <header className="app-header">Should I Cash out my RRSP?</header>
      <DataEntry calculate={calculate} />
    </div>
  );
}

export default App;
