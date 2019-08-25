import React from 'react';
import './summary.css';

function Summary(props) {
  const { percentageDiff } = props;
  return (
    <section className="summary">
      <header className="summary--header">
        Withdrawing from your RRSP after retiring could reduce your GIS benefit
        by
      </header>
      <div className="summary--diff-container">
        <div className="summary--diff">{percentageDiff}%</div>
      </div>
      <header className="summary--header">
        How does this work? Read on for explanation...
      </header>
    </section>
  );
}

export default Summary;
