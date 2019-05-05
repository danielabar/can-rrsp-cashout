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

const ageOptions = generateNumericOptions(config.MIN_AGE, config.MAX_AGE);

export { ageOptions };
