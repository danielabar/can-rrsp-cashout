import { formatMoney } from './viz-util';
import { annualRrsp, lifeExpectancy } from './calc-util';

function annualIncomeForGisEligibility(
  numericInput,
  scenarioBefore,
  scenarioAfter
) {
  return `If you cash out your RRSP <span class="chart-text--time chart-text--time-before">before</span> retiring,\
  then the income used to determine how much GIS you're eligible for will be your CPP of\
  <span class="chart-text--number">${formatMoney(numericInput.cpp)}</span>\
  plus your pension of\
  <span class="chart-text--number">${formatMoney(numericInput.pension)}</span>\
  for a total of\
  <span class="chart-text--number">${formatMoney(
    scenarioBefore.annualIncome
  )}</span>.\
  <span class="chart-text--separator">&nbsp;</span>\
  If you withdraw from your RRSP <span class="chart-text--time chart-text--time-after">after</span> retiring,\
  then the annual withdrawals get included in your income for GIS eligibility purposes.\
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
  <span class="chart-text--number">${formatMoney(numericInput.rrsp)}</span>\
  RRSP throughout retirement,\
  this will add\
  <span class="chart-text--number">${formatMoney(
    annualRrsp(numericInput)
  )}</span>,\
  to your income for a total of\
  <span class="chart-text--number">${formatMoney(
    scenarioAfter.annualIncome
  )}</span>.\
  `;
}

/*
If you cash out your RRSP BEFORE retiring, then your income of TOTALVAL makes you eligible for a monthly GIS benefit of GISBEF.

If you withdraw from your RRSP AFTER retiring, then the RRSPINC increase in your income reduces your GIS payment by
(GISBEF - GISAFT) resulting in a lower monthly benefit of GISAFT.
*/
function monthlyGISEntitlement(numericInput, scenarioBefore, scenarioAfter) {
  return ` If you cash out your RRSP <span class="chart-text--time chart-text--time-before">before</span> retiring,\
  then your income of\
  <span class="chart-text--number">${formatMoney(
    scenarioBefore.annualIncome
  )}</span>\
  makes you eligible for a monthly GIS benefit of\
  <span class="chart-text--number">${formatMoney(
    scenarioBefore.monthlyGIS
  )}</span>\
  <span class="chart-text--separator">&nbsp;</span>\
  If you withdraw from your RRSP <span class="chart-text--time chart-text--time-after">after</span> retiring,\
  then the\
  <span class="chart-text--number">${formatMoney(
    scenarioAfter.annualIncome - scenarioBefore.annualIncome
  )}</span>\
  increase in your income reduces your GIS payment by
  <span class="chart-text--number">${formatMoney(
    scenarioBefore.monthlyGIS - scenarioAfter.monthlyGIS
  )}</span>\
  resulting in a lower monthly benefit of\
  <span class="chart-text--number">${formatMoney(
    scenarioAfter.monthlyGIS
  )}</span>\
  <span class="chart-text--separator">&nbsp;</span>\
  Remember when cashing out your RRSP <span class="chart-text--time chart-text--time-before">before</span> retiring,
  you still have the money (for example in a savings account), but it doesn't count as income for\
  GIS eligibility purposes.
  `;
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
