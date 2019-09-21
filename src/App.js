import React, { useState } from 'react';
import './App.css';
import Intro from './components/intro/intro';
import DataEntry from './components/data-entry/data-entry';
import Placeholder from './components/placeholder/placeholder';
import Summary from './components/summary/summary';
import Scenarios from './components/scenarios/scenarios';
import Disclaimer from './components/disclaimer/disclaimer';
import Tax from './components/tax/tax';
import Links from './components/links/links';
import Developer from './components/developer/developer';
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
      return <Placeholder />;
    }
    if (scenarios.cashOutBefore.monthlyGIS === 0) {
      return <div className="no-gis">You are not eligible for GIS.</div>;
    }
    return (
      <div>
        <Summary percentageDecrease={scenarios.percentageDecrease} />
        <Scenarios data={scenarios} />
        <Tax />
      </div>
    );
  }

  return (
    <div className="app">
      <Intro />
      <DataEntry runScenarios={runScenarios} onReset={onReset} />
      {scenariosHelper()}
      <Disclaimer />
      <Links learnMoreLinks={config.LEARN_MORE_LINKS} />
      <Developer />
    </div>
  );
}

export default App;
