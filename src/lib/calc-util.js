import gisLookup from 'gis-lookup';
import config from '../config';

function lifeExpectancy() {
  return config.LIFE_EXPECTANCY;
}

function yearsInRetirement(input) {
  return lifeExpectancy() - input.retirementAge;
}

function annualRrsp(input) {
  return input.rrsp / yearsInRetirement(input);
}

function annualIncomeForGisEligibilityWithRrsp(input) {
  return input.cpp + input.pension + annualRrsp(input);
}

function annualIncomeForGisEligibilityWithoutRrsp(input) {
  return input.cpp + input.pension;
}

function convertMaritalStatus(maritalStatus) {
  let result = gisLookup.STATUS.SINGLE;
  if (maritalStatus === config.DEFAULT_MARITAL_STATUS) {
    result = gisLookup.STATUS.SINGLE;
  }
  if (maritalStatus === 'couple') {
    result = gisLookup.STATUS.PARTNER_OAS;
  }
  return result;
}

function monthlyGis(annualIncome, maritalStatus) {
  const gisStatus = convertMaritalStatus(maritalStatus);
  const gisResult = gisLookup.find(gisStatus, annualIncome);
  const { coverage: gisCoverage } = gisResult;
  const amt =
    maritalStatus === 'single'
      ? parseFloat(gisResult.output.gis)
      : parseFloat(gisResult.output.gis) * 2;
  return { amt, gisCoverage };
}

function annualGIS(monthlyGisAmt) {
  return monthlyGisAmt * 12;
}

function numYearsCollectingGIS(retirementAge, numYearsInRetirement) {
  return retirementAge < config.GIS_ENTITLEMENT_AGE
    ? numYearsInRetirement - (config.GIS_ENTITLEMENT_AGE - retirementAge)
    : numYearsInRetirement;
}

function totalGisInRetirement(
  annualGISAmt,
  numYearsInRetirement,
  retirementAge
) {
  const numYrs = numYearsCollectingGIS(retirementAge, numYearsInRetirement);
  return annualGISAmt * numYrs;
}

// https://www.investopedia.com/terms/p/percentage-change.asp
function percentageDecrease(origNum, newNum) {
  if (origNum === 0 || origNum < newNum) {
    return 'N/A';
  }
  const decrease = origNum - newNum;
  const perDecrease = (decrease / origNum) * 100;
  return Math.round(perDecrease);
}

function roundGIS(inputNum) {
  if (inputNum < 10) {
    return roundNearestWhole(inputNum, 1);
  }
  if (inputNum < 100) {
    return roundNearestWhole(inputNum, 10);
  }
  return roundNearestWhole(inputNum, 100);
}

/*!
 * Round to the nearest whole number
 * (c) 2019 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Number|String} num       The numer to round
 * @param  {Number}        precision The whole number to round to (ex. 10, 100, 1000)
 * @param  {String}        method    The rounding method (up, down, or auto - defaults to auto) [optional]
 * @return {String}                  The rounded number
 */
function roundNearestWhole(inputNum, precision, method) {
  // Convert string numbers to a float
  const num = parseFloat(inputNum);

  // If there's no rounding precision, return the number
  if (!precision) return num.toLocaleString();

  // Possible methods and their values
  const methods = {
    auto: 'round',
    up: 'ceil',
    down: 'floor',
  };

  // Get the method function
  let fn = methods[method];
  if (!fn) {
    fn = 'round';
  }

  // Do math!
  return Math[fn](num / precision) * precision;
}

export {
  annualRrsp,
  yearsInRetirement,
  annualIncomeForGisEligibilityWithRrsp,
  annualIncomeForGisEligibilityWithoutRrsp,
  monthlyGis,
  annualGIS,
  numYearsCollectingGIS,
  totalGisInRetirement,
  lifeExpectancy,
  percentageDecrease,
  roundNearestWhole,
  roundGIS,
};
