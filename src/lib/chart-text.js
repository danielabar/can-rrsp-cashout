import { formatMoney } from './viz-util';
import { annualRrsp, lifeExpectancy } from './calc-util';

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
  return `If you cash out your RRSP <span class="chart-text--time">before</span> retiring,\
  then your income used to determine how much GIS you're eligible for will be your CPP of\
  <span class="chart-text--number">${formatMoney(numericInput.cpp)}</span>\
  plus your pension of\
  <span class="chart-text--number">${formatMoney(numericInput.pension)}</span>\
  for a total of\
  <span class="chart-text--number">${formatMoney(
    scenarioBefore.annualIncome
  )}</span>.\
  <span class="chart-text--separator">&nbsp;</span>\
  If you withdraw from your RRSP <span class="chart-text--time">after</span> retiring,\
  then the annual withdrawals get included in your annual income for GIS eligibility purposes.\
  Given Canadian\
  <span class="chart-text--number">${numericInput.gender}</span>\
  life expectancy of\
  <span class="chart-text--number">${lifeExpectancy(
    numericInput.gender
  )}</span>\
  and your retirement age of\
  <span class="chart-text--number">${numericInput.retirementAge}</span>,\
  you will have an estimated\
  <span class="chart-text--number">${scenarioBefore.numYrsInRetirement}</span>\
  years in retirement. Assuming an even withdrawal rate from your\
  <span class="chart-text--number">${numericInput.rrsp}</span>\
  RRSP throughout retirement,\
  this will add\
  <span class="chart-text--number">${annualRrsp(numericInput)}</span>,\
  to your income for a total of\
  <span class="chart-text--number">${scenarioAfter.annualIncome}</span>.\
  `;
}

function monthlyGISEntitlement(numericInput, scenarios) {
  // TBD...
}

function generate(numericInput, scenarioBefore, scenarioAfter) {
  return {
    annualIncomeForGisEligibility: annualIncomeForGisEligibility(
      numericInput,
      scenarioBefore,
      scenarioAfter
    ),
    monthlyGISEntitlement: monthlyGISEntitlement(
      numericInput,
      scenarioBefore,
      scenarioAfter
    ),
  };
}

export { generate };
