import gisLookup from 'gis-lookup';
import config from '../config';

function lifeExpectancy(gender) {
  return config.GENDER.find(el => el.key === gender).lifeExpectancy;
}

function yearsInRetirement(input) {
  return lifeExpectancy(input.gender) - input.retirementAge;
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
  return result;
}

function monthlyGis(annualIncome, maritalStatus) {
  const gisStatus = convertMaritalStatus(maritalStatus);
  const gisResult = gisLookup.find(gisStatus, annualIncome);
  const { coverage: gisCoverage } = gisResult;
  const amt = parseFloat(gisResult.output.gis);
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
};
