import React from 'react';
import { barStyle, formatMoney } from '../../lib/viz-util';
import './bar-chart.css';

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
        <div className="bar-chart--bar-label">{formatMoney(scenario1)}</div>
      </div>
      <div className="bar-chart--bar-container">
        <div
          className="bar-chart--bar bar-chart--bar2"
          style={barStyle(scenario2, scenario1)}
        />
        <div className="bar-chart--bar-label">{formatMoney(scenario2)}</div>
      </div>
    </div>
  );
}

export default BarChart;
