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

export { yearsBeforeRetirement, yearsInRetirement };
