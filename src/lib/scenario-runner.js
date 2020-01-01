import * as calcUtil from './calc-util';
import { generate } from './chart-text';

function convertToNumeric(input) {
  return {
    cpp: parseInt(input.cpp, 10),
    pension: parseInt(input.pension, 10),
    retirementAge: parseInt(input.retirementAge, 10),
    rrsp: parseInt(input.rrsp, 10),
    maritalStatus: input.maritalStatus,
  };
}

function _log(monthlyGIS, annualGIS, totalGIS) {
  // prettier-ignore
  // eslint-disable-next-line no-console
  console.log(`
  === monthlyGIS: precise = ${monthlyGIS}, rounded = ${calcUtil.roundByScale(monthlyGIS)}
  === annualGIS: precise = ${annualGIS}, rounded = ${calcUtil.roundByScale(annualGIS)}
  === totalGIS: precise = ${totalGIS}, rounded = ${calcUtil.roundByScale(totalGIS)}
  `);
}

function _calculate(numericInput, annualIncomeFunc) {
  const annualIncome = annualIncomeFunc(numericInput);
  const numYrsInRetirement = calcUtil.yearsInRetirement(numericInput);
  const { amt: monthlyGIS, gisCoverage } = calcUtil.monthlyGis(
    annualIncome,
    numericInput.maritalStatus
  );
  const annualGIS = calcUtil.annualGIS(monthlyGIS);
  const totalGISInRetirement = calcUtil.totalGisInRetirement(
    annualGIS,
    numYrsInRetirement,
    numericInput.retirementAge
  );
  _log(monthlyGIS, annualGIS, totalGISInRetirement);
  return {
    totalGISInRetirement: calcUtil.roundByScale(totalGISInRetirement),
    numYrsInRetirement,
    annualIncome,
    monthlyGIS: calcUtil.roundByScale(monthlyGIS),
    annualGIS: calcUtil.roundByScale(annualGIS),
    gisCoverage,
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
  const percentageDecrease = calcUtil.percentageDecrease(
    cashOutBefore.monthlyGIS,
    cashOutAfter.monthlyGIS
  );
  const chartText = generate(
    numericInput,
    cashOutBefore,
    cashOutAfter,
    percentageDecrease
  );
  return {
    cashOutBefore,
    cashOutAfter,
    chartText,
    percentageDecrease,
  };
}

export { run };
