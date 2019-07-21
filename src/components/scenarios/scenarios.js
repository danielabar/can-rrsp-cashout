import React from 'react';
import './scenarios.css';
import BarChart from '../bar-chart/bar-chart';

/*
<div className="scenarios-data-common">
  Expected years in retirement: {cashOutBefore.numYrsInRetirement}
</div>
*/

function helper(props) {
  const { data } = props;
  const { cashOutBefore, cashOutAfter } = data;
  if (cashOutBefore && cashOutAfter) {
    return (
      <div className="scenarios-data">
        <BarChart
          title="Annual Income for GIS Eligibility"
          scenario1={cashOutBefore.annualIncome}
          scenario2={cashOutAfter.annualIncome}
        />
        <BarChart
          title="Monthly GIS Entitlement"
          scenario1={cashOutBefore.monthlyGIS}
          scenario2={cashOutAfter.monthlyGIS}
        />
        <BarChart
          title="Annual GIS Entitlement"
          scenario1={cashOutBefore.annualGIS}
          scenario2={cashOutAfter.annualGIS}
        />
        <BarChart
          title="Total GIS in Retirement"
          scenario1={cashOutBefore.totalGISInRetirement}
          scenario2={cashOutAfter.totalGISInRetirement}
        />
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
