import config from '../config';

function generateNumericOptions(from, to) {
  const result = [];
  for (let i = from; i <= to; i += 1) {
    result.push({
      key: i,
      value: i,
      label: i,
    });
  }
  return result;
}

function generateStringOptions(configKey) {
  const result = [];
  configKey.forEach(ck => {
    result.push({
      key: ck.key,
      value: ck.value,
      label: ck.label || ck.value,
    });
  });
  return result;
}

function telLinkBuilder(contactTel) {
  return `tel:${contactTel}`;
}

const maritalStatusOptions = generateStringOptions(config.MARITAL_STATUS);
const retirementAgeOptions = generateNumericOptions(
  config.MIN_RETIREMENT_AGE,
  config.MAX_RETIREMENT_AGE
);

export { maritalStatusOptions, retirementAgeOptions, telLinkBuilder };
