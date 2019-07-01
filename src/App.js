import React, { useState } from 'react';
import './App.css';
import DataEntry from './components/data-entry/data-entry';
import Scenarios from './components/scenarios/scenarios';
import { run } from './lib/scenario-runner';

function App() {
  const [scenarios, setScenarios] = useState({});

  const runScenarios = input => {
    const scenarioResult = run(input);
    setScenarios(scenarioResult);
    console.log('Run scenarios for %o', input);
    console.log('Result = %o', scenarioResult);
  };

  return (
    <div className="app">
      <header className="app-header">Should I Cash out my RRSP?</header>
      <DataEntry runScenarios={runScenarios} />
      <Scenarios data={scenarios} />
    </div>
  );
}

export default App;
