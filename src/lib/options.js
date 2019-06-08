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
      // TODO i18n
      label: ck.label || ck.value,
    });
  });
  return result;
}

const ageOptions = generateNumericOptions(config.MIN_AGE, config.MAX_AGE);
const genderOptions = generateStringOptions(config.GENDER);
const martialStatusOptions = generateStringOptions(config.MARITAL_STATUS);

export { ageOptions, genderOptions, martialStatusOptions };
