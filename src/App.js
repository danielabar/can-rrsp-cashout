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
      <h1 className="app-prototype">Prototype</h1>
      <header className="app-header">
        Should I cash out my RRSP before or after retirement?
      </header>
      <DataEntry runScenarios={runScenarios} />
      <Scenarios data={scenarios} />
    </div>
  );
}

export default App;
