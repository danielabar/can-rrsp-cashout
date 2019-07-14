import React from 'react';
import './scenarios.css';
import BarChart from '../bar-chart/bar-chart';

function helper(props) {
  const { data } = props;
  const { cashOutBefore, cashOutAfter } = data;
  if (cashOutBefore && cashOutAfter) {
    return (
      <div className="scenarios-data">
        <div className="scenarios-data-common">
          Expected years in retirement: {cashOutBefore.numYrsInRetirement}
        </div>
        <br />
        <BarChart title="Annual Income for GIS Eligibility" />
        <BarChart title="Monthly GIS Entitlement" />
        <p className="scenarios-subheader">
          If you cash out your RRSP BEFORE retirement:
        </p>
        <p>Annual income for GIS eligibility: {cashOutBefore.annualIncome}</p>
        <p>Monthly GIS entitlement: {cashOutBefore.monthlyGIS}</p>
        <p>Annual GIS entitlement: {cashOutBefore.annualGIS}</p>
        <p>Total GIS in retirement: {cashOutBefore.totalGISInRetirement}</p>
        <br />
        <p className="scenarios-subheader">
          If you cash out your RRSP AFTER retirement:
        </p>
        <p>Annual income for GIS eligibility: {cashOutAfter.annualIncome}</p>
        <p>Monthly GIS entitlement: {cashOutAfter.monthlyGIS}</p>
        <p>Annual GIS entitlement: {cashOutAfter.annualGIS}</p>
        <p>Total GIS in retirement: {cashOutAfter.totalGISInRetirement}</p>
      </div>
    );
  }
  return <div className="empty" />;
}

function Scenarios(props) {
  return <div className="scenarios">{helper(props)}</div>;
}

export default Scenarios;
