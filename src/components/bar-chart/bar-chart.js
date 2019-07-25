import React from 'react';
import { accounting } from 'accounting';
import './bar-chart.css';

function barStyle(valueA, valueB) {
  const percentage = valueA < valueB ? `${(valueA / valueB) * 100}%` : '100%';
  return {
    width: percentage,
  };
}

function format(value) {
  return accounting.formatMoney(value);
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
        <div className="bar-chart--bar-label">{format(scenario1)}</div>
      </div>
      <div className="bar-chart--bar-container">
        <div
          className="bar-chart--bar bar-chart--bar2"
          style={barStyle(scenario2, scenario1)}
        />
        <div className="bar-chart--bar-label">{format(scenario2)}</div>
      </div>
    </div>
  );
}

export default BarChart;
