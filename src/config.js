const config = Object.freeze({
  DEFAULT_AGE: 55,
  MIN_AGE: 40,
  MAX_AGE: 70,
  DEFAULT_GENDER: 'female',
  GENDER: [
    // https://www.worldlifeexpectancy.com/canada-life-expectancy
    { key: 'male', value: 'male', lifeExpectancy: 81 },
    { key: 'female', value: 'female', lifeExpectancy: 85 },
  ],
});

export default config;
