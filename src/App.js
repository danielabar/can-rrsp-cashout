import React, { useState } from 'react';
import './App.css';
import Intro from './components/intro/intro';
import DataEntry from './components/data-entry/data-entry';
import Summary from './components/summary/summary';
import Scenarios from './components/scenarios/scenarios';
import Disclaimer from './components/disclaimer/disclaimer';
import Tax from './components/tax/tax';
import Links from './components/links/links';
import { run } from './lib/scenario-runner';
import config from './config';

function App() {
  const [scenarios, setScenarios] = useState({});

  const runScenarios = input => {
    const scenarioResult = run(input);
    setScenarios(scenarioResult);
  };

  const onReset = () => {
    setScenarios({});
  };

  function scenariosHelper() {
    if (
      Object.keys(scenarios).length === 0 &&
      scenarios.constructor === Object
    ) {
      return <div className="empty" />;
    }
    if (scenarios.cashOutBefore.monthlyGIS === 0) {
      return <div className="no-gis">You are not eligible for GIS.</div>;
    }
    return (
      <div>
        <Summary percentageDiff={scenarios.percentageDiff} />
        <Scenarios data={scenarios} />
        <Tax />
        <Disclaimer />
        <Links learnMoreLinks={config.LEARN_MORE_LINKS} />
      </div>
    );
  }

  return (
    <div className="app">
      <Intro />
      <DataEntry runScenarios={runScenarios} onReset={onReset} />
      {scenariosHelper()}
    </div>
  );
}

export default App;
