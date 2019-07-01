import React from 'react';
import './App.css';
import DataEntry from './components/data-entry/data-entry';
import { run } from './lib/scenario-runner';

function App() {
  const runScenarios = input => {
    console.log('Run scenarios for %o', input);
    const result = run(input);
    console.log('Result = %o', result);
  };
  return (
    <div className="app">
      <header className="app-header">Should I Cash out my RRSP?</header>
      <DataEntry runScenarios={runScenarios} />
    </div>
  );
}

export default App;
