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

  function scenariosHelper() {
    // Object.keys(obj).length === 0 && obj.constructor === Object
    if (
      Object.keys(scenarios).length === 0 &&
      scenarios.constructor === Object
    ) {
      return <div className="empty" />;
    }
    return <Scenarios data={scenarios} />;
  }

  return (
    <div className="app">
      <header className="app-header">
        Should I cash out my RRSP before or after retirement?
      </header>
      <h1 className="app-prototype">(Prototype)</h1>
      <DataEntry runScenarios={runScenarios} />
      {scenariosHelper()}
    </div>
  );
}

export default App;
