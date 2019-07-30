import * as calcUtil from './calc-util';
import { generate } from './chart-text';

function convertToNumeric(input) {
  return {
    age: parseInt(input.age, 10),
    cpp: parseInt(input.cpp, 10),
    income: parseInt(input.income, 10),
    pension: parseInt(input.pension, 10),
    retirementAge: parseInt(input.retirementAge, 10),
    rrsp: parseInt(input.rrsp, 10),
    gender: input.gender,
    maritalStatus: input.maritalStatus,
  };
}

function _calculate(numericInput, annualIncomeFunc) {
  const annualIncome = annualIncomeFunc(numericInput);
  const numYrsInRetirement = calcUtil.yearsInRetirement(numericInput);
  const monthlyGIS = calcUtil.monthlyGis(
    annualIncome,
    numericInput.maritalStatus
  );
  const annualGIS = calcUtil.annualGIS(monthlyGIS);
  const totalGISInRetirement = calcUtil.totalGisInRetirement(
    annualGIS,
    numYrsInRetirement,
    numericInput.retirementAge
  );
  return {
    totalGISInRetirement,
    numYrsInRetirement,
    annualIncome,
    monthlyGIS,
    annualGIS,
  };
}

function calculateCashOutBeforeRetirement(inp) {
  return _calculate(inp, calcUtil.annualIncomeForGisEligibilityWithoutRrsp);
}

function calculateCashOutAfterRetirement(inp) {
  return _calculate(inp, calcUtil.annualIncomeForGisEligibilityWithRrsp);
}

function run(input) {
  const numericInput = convertToNumeric(input);
  const cashOutBefore = calculateCashOutBeforeRetirement(numericInput);
  const cashOutAfter = calculateCashOutAfterRetirement(numericInput);
  const chartText = generate(numericInput, cashOutBefore, cashOutAfter);
  return {
    cashOutBefore,
    cashOutAfter,
    chartText,
  };
}

export { run };
