import React from 'react';
import './bar-chart.css';

function BarChart(props) {
  const { title } = props;
  return (
    <div className="bar-chart">
      <h2 className="bar-chart--title">{title}</h2>
      <div className="bar-chart--bar-container">
        <div className="bar-chart--bar bar-chart--bar1" />
        <div className="bar-chart--bar-label">$2,000</div>
      </div>
      <div className="bar-chart--bar-container">
        <div className="bar-chart--bar bar-chart--bar2" />
        <div className="bar-chart--bar-label">$1,000</div>
      </div>
    </div>
  );
}

export default BarChart;
