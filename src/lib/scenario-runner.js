import * as calcUtil from './calc-util';

// should be a better way to get these as numeric from html form
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

// TODO extract common calcs between scenarios
function calculateCashOutBeforeRetirement(inp) {
  const input = convertToNumeric(inp);
  const annualIncome = calcUtil.annualIncomeForGisEligibilityWithoutRrsp(input);
  const numYrsInRetirement = calcUtil.yearsInRetirement(input);
  const monthlyGIS = calcUtil.monthlyGis(annualIncome, input.maritalStatus);
  const annualGIS = calcUtil.annualGIS(monthlyGIS);
  const totalGISInRetirement = calcUtil.totalGisInRetirement(
    annualGIS,
    numYrsInRetirement
  );
  return {
    totalGISInRetirement,
    numYrsInRetirement,
    annualIncome,
    monthlyGIS,
    annualGIS,
  };
}

function calculateCashOutAfterRetirement(inp) {
  const input = convertToNumeric(inp);
  const annualIncome = calcUtil.annualIncomeForGisEligibilityWithRrsp(input);
  const numYrsInRetirement = calcUtil.yearsInRetirement(input);
  const monthlyGIS = calcUtil.monthlyGis(annualIncome, input.maritalStatus);
  const annualGIS = calcUtil.annualGIS(monthlyGIS);
  const totalGISInRetirement = calcUtil.totalGisInRetirement(
    annualGIS,
    numYrsInRetirement
  );
  return {
    totalGISInRetirement,
    numYrsInRetirement,
    annualIncome,
    monthlyGIS,
    annualGIS,
  };
}

function run(input) {
  return {
    cashOutBefore: calculateCashOutBeforeRetirement(input),
    cashOutAfter: calculateCashOutAfterRetirement(input),
  };
}

export { run };
