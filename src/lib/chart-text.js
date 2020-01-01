import { formatMoney } from './viz-util';
import {
  annualRrsp,
  lifeExpectancy,
  yearsInRetirement,
  numYearsCollectingGIS,
} from './calc-util';
import config from '../config';

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
  )}</span>.<sup>*</sup>\
  <span class="chart-text--separator">&nbsp;</span>\
  If you withdraw from your RRSP <span class="chart-text--time chart-text--time-after">after</span> retiring,\
  then the withdrawals get included in your income for GIS eligibility purposes.\
  Assuming life expectancy of\
  <span class="chart-text--basic">${lifeExpectancy()}</span>\
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
  to your income per year for a total of\
  <span class="chart-text--number">${formatMoney(
    scenarioAfter.annualIncome
  )}</span>.\
  `;
}

function monthlyGISEntitlement(
  numericInput,
  scenarioBefore,
  scenarioAfter,
  percentageDecrease
) {
  return `If you cash out your RRSP <span class="chart-text--time chart-text--time-before">before</span> retiring,\
  then your income of\
  <span class="chart-text--number">${formatMoney(
    scenarioBefore.annualIncome
  )}</span>\
  makes you eligible for a monthly GIS benefit of\
  <span class="chart-text--number">${formatMoney(
    scenarioBefore.monthlyGIS
  )}</span>.<sup>*</sup>\
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
  )}</span>, which represents a decrease of\
  <span class="chart-text--basic">${percentageDecrease}%</span>.<sup>*</sup>\
  <span class="chart-text--separator">&nbsp;</span>\
  Remember when cashing out your RRSP <span class="chart-text--time chart-text--time-before">before</span> retiring,
  you still have the money (for example in a tax free savings account), but it doesn't count as income for\
  GIS eligibility purposes.
  `;
}

function annualGISEntitlement(numericInput, scenarioBefore, scenarioAfter) {
  return `Cashing out your RRSP <span class="chart-text--time chart-text--time-before">before</span> retiring,\
  would result in an approximate annual GIS benefit of\
  <span class="chart-text--number">${formatMoney(
    scenarioBefore.annualGIS
  )}</span>.<sup>*</sup>\
  <span class="chart-text--separator">&nbsp;</span>\
  Cashing out your RRSP <span class="chart-text--time chart-text--time-after">after</span> retirement,\
  would result in a lower annual GIS benefit of\
  <span class="chart-text--number">${formatMoney(
    scenarioAfter.annualGIS
  )}</span>.<sup>*</sup>`;
}

function totalGISEntitlement(numericInput, scenarioBefore, scenarioAfter) {
  return `You're eligible to start receiving GIS at age\
  <span class="chart-text--basic">${config.GIS_ENTITLEMENT_AGE}</span>.\
  Assuming life expectancy of\
  <span class="chart-text--basic">${lifeExpectancy()}</span>\
  and your retirement age of\
  <span class="chart-text--number">${numericInput.retirementAge}</span>,\
  you will have an estimated\
  <span class="chart-text--number">${numYearsCollectingGIS(
    numericInput.retirementAge,
    yearsInRetirement(numericInput)
  )}</span>\
  years of collecting GIS during retirement.\
  <span class="chart-text--separator">&nbsp;</span>\
  Multiplying your expected years of collecting GIS by your annual GIS benefit of\
  <span class="chart-text--number">${formatMoney(
    scenarioBefore.annualGIS
  )}</span>\
  results in an total GIS benefit of\
  <span class="chart-text--number">${formatMoney(
    scenarioBefore.totalGISInRetirement
  )}</span><sup>*</sup>\
  during retirement,\
  when the RRSP is cashed out <span class="chart-text--time chart-text--time-before">before</span> beginning retirement.\
  <span class="chart-text--separator">&nbsp;</span>\
  If the RRSP is cashed out <span class="chart-text--time chart-text--time-after">after</span> retirement, total benefit would be\
  <span class="chart-text--number">${formatMoney(
    scenarioAfter.totalGISInRetirement
  )}</span>.<sup>*</sup>\
  <span class="chart-text--separator">&nbsp;</span>\
  This means you could have\
  <span class="chart-text--number">${formatMoney(
    scenarioBefore.totalGISInRetirement - scenarioAfter.totalGISInRetirement
  )}</span><sup>*</sup>\
  more in GIS benefits by cashing out RRSP <span class="chart-text--time chart-text--time-before">before</span> retirement.`;
}

function generateGISFooter(coverage, maritalStatus, additive = false) {
  const firstPhrase = additive
    ? 'GIS amounts are approximate and may not add up exactly due to rounding'
    : 'GIS amounts are approximate';
  const coveragePeriod = `${firstPhrase}, effective from ${coverage.start} to ${
    coverage.end
  }.`;
  const couplesNote = `For couples this is the sum of the GIS benefit received by each partner.`;
  return maritalStatus === 'single'
    ? coveragePeriod
    : `${coveragePeriod} ${couplesNote}`;
}

function generate(
  numericInput,
  scenarioBefore,
  scenarioAfter,
  percentageDecrease
) {
  return {
    annualIncomeForGisEligibility: {
      explanation: annualIncomeForGisEligibility(
        numericInput,
        scenarioBefore,
        scenarioAfter
      ),
      footer:
        'Actual income will also include OAS (Old Age Security) but this has no effect on GIS therefore not shown.',
    },
    monthlyGISEntitlement: {
      explanation: monthlyGISEntitlement(
        numericInput,
        scenarioBefore,
        scenarioAfter,
        percentageDecrease
      ),
      footer: generateGISFooter(
        scenarioBefore.gisCoverage,
        numericInput.maritalStatus
      ),
    },
    annualGISEntitlement: {
      explanation: annualGISEntitlement(
        numericInput,
        scenarioBefore,
        scenarioAfter
      ),
      footer: generateGISFooter(
        scenarioBefore.gisCoverage,
        numericInput.maritalStatus,
        true
      ),
    },
    totalGISEntitlement: {
      explanation: totalGISEntitlement(
        numericInput,
        scenarioBefore,
        scenarioAfter
      ),
      footer: generateGISFooter(
        scenarioBefore.gisCoverage,
        numericInput.maritalStatus,
        true
      ),
    },
  };
}

export { generate };
