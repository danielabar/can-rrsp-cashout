import React from 'react';
import './bar-chart.css';

function barStyle(valueA, valueB) {
  const percentage = valueA < valueB ? `${(valueA / valueB) * 100}%` : '100%';
  // return percentage === '100%'
  //   ? { width: percentage, 'border-top': 'transparent' }
  //   : { width: percentage };
  return {
    width: percentage,
  };
}

function BarChart(props) {
  const { title, scenario1, scenario2 } = props;
  return (
    <div className="bar-chart">
      <h2 className="bar-chart--title">{title}</h2>
      <div className="bar-chart--bar-container">
        <div
          className="bar-chart--bar bar-chart--bar1"
          style={barStyle(scenario1, scenario2)}
        />
        <div className="bar-chart--bar-label">{scenario1}</div>
      </div>
      <div className="bar-chart--bar-container">
        <div
          className="bar-chart--bar bar-chart--bar2"
          style={barStyle(scenario2, scenario1)}
        />
        <div className="bar-chart--bar-label">{scenario2}</div>
      </div>
    </div>
  );
}

export default BarChart;
