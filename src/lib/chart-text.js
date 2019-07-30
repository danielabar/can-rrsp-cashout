import { formatMoney } from './viz-util';

// https://stackoverflow.com/questions/38000659/template-strings-es6-prevent-line-breaks

/**
 If you cash out your RRSP BEFORE retiring, then your income used to determine how much GIS you're eligible for
 will be your CPP of CPPVAL plus your pension of PENVAL totalling TOTALVAL.

 If you withdraw from your RRSP AFTER retiring, then it gets included in your annual income.
 Given Canadian GENDERVAL life expectancy of GENDERVAL-LIFEEXP and retirement age of RETAGE,
 you will have a estimated YRSRET in retirement. Assuming an even withdrawal rate from your RRSP throughout retirement,
 this will add RRSPINC to your income totalling NEWTOTALVAL.
 */
function annualIncomeForGisEligibility(
  numericInput,
  scenarioBefore,
  scenarioAfter
) {
  const testNum1 = 100;
  const testNum2 = 200;
  return `test some text <span class="chart-text--number">${formatMoney(
    testNum1
  )}</span>\
  followed by some more text <span class="chart-text--number">${formatMoney(
    testNum2
  )}</span>\
  and some more text`;
}

function monthlyGISEntitlement(numericInput, scenarios) {
  // TBD...
}

function generate(numericInput, scenarios) {
  return {
    annualIncomeForGisEligibility: annualIncomeForGisEligibility(
      numericInput,
      scenarios
    ),
    monthlyGISEntitlement: monthlyGISEntitlement(numericInput, scenarios),
  };
}

export { generate };
