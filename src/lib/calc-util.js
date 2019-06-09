import config from '../config';

function lifeExpectancy(gender) {
  return config.GENDER.find(el => el.key === gender).lifeExpectancy;
}
function yearsBeforeRetirement(input) {
  return input.retirementAge - input.age;
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

export {
  yearsBeforeRetirement,
  yearsInRetirement,
  annualIncomeForGisEligibilityWithRrsp,
  annualIncomeForGisEligibilityWithoutRrsp,
};
