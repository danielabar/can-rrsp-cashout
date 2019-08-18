/* eslint-disable react/no-danger */
import React from 'react';
import Legend from '../legend/legend';
import { barStyle, formatMoney } from '../../lib/viz-util';
import './bar-chart.css';
import './chart-text.css';

function createMarkup(text) {
  return { __html: text };
}

function footerHelper(footer) {
  if (footer) {
    return (
      <div className="bar-chart--footer">
        <sup>*</sup>
        {footer}
      </div>
    );
  }
  return null;
}

function BarChart(props) {
  const { title, scenario1, scenario2, chartText } = props;
  return (
    <div className="bar-chart">
      <h2 className="bar-chart--title">{title}</h2>
      <Legend />
      <div
        className="chart-text"
        dangerouslySetInnerHTML={createMarkup(chartText.explanation)}
      />
      <div className="bar-chart--bar-container">
        <div className="bar-chart--bar-outer">
          <div
            className="bar-chart--bar bar-chart--bar1"
            style={barStyle(scenario1, scenario2)}
          />
        </div>
        <div className="bar-chart--bar-label">{formatMoney(scenario1)}</div>
      </div>
      <div className="bar-chart--bar-container">
        <div className="bar-chart--bar-outer">
          <div
            className="bar-chart--bar bar-chart--bar2"
            style={barStyle(scenario2, scenario1)}
          />
        </div>
        <div className="bar-chart--bar-label">{formatMoney(scenario2)}</div>
      </div>
      {footerHelper(chartText.footer)}
    </div>
  );
}

export default BarChart;
