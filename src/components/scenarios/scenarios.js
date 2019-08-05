import React from 'react';
import './scenarios.css';
import BarChart from '../bar-chart/bar-chart';
import Legend from '../legend/legend';

function Scenarios(props) {
  const { data } = props;
  const { cashOutBefore, cashOutAfter, chartText } = data;
  return (
    <div className="scenarios">
      <Legend />
      <div className="scenarios--data">
        <BarChart
          title="Annual Income for GIS Eligibility"
          scenario1={cashOutBefore.annualIncome}
          scenario2={cashOutAfter.annualIncome}
          chartText={chartText.annualIncomeForGisEligibility}
        />
        <BarChart
          title="Monthly GIS Entitlement"
          scenario1={cashOutBefore.monthlyGIS}
          scenario2={cashOutAfter.monthlyGIS}
          chartText={chartText.monthlyGISEntitlement}
        />
        <BarChart
          title="Annual GIS Entitlement"
          scenario1={cashOutBefore.annualGIS}
          scenario2={cashOutAfter.annualGIS}
          chartText={chartText.annualGISEntitlement}
        />
        <BarChart
          title="Total GIS in Retirement"
          scenario1={cashOutBefore.totalGISInRetirement}
          scenario2={cashOutAfter.totalGISInRetirement}
          chartText={chartText.totalGISEntitlement}
        />
      </div>
    </div>
  );
}

export default Scenarios;
