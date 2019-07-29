import * as calcUtil from './calc-util';

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

function _calculate(inp, annualIncomeFunc) {
  const input = convertToNumeric(inp);
  const annualIncome = annualIncomeFunc(input);
  const numYrsInRetirement = calcUtil.yearsInRetirement(input);
  const monthlyGIS = calcUtil.monthlyGis(annualIncome, input.maritalStatus);
  const annualGIS = calcUtil.annualGIS(monthlyGIS);
  const totalGISInRetirement = calcUtil.totalGisInRetirement(
    annualGIS,
    numYrsInRetirement,
    input.retirementAge
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
  return {
    cashOutBefore: calculateCashOutBeforeRetirement(input),
    cashOutAfter: calculateCashOutAfterRetirement(input),
  };
}

export { run };
