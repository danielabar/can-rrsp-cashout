const config = Object.freeze({
  DEFAULT_AGE: 55,
  MIN_AGE: 40,
  MAX_AGE: 70,

  // https://www.worldlifeexpectancy.com/canada-life-expectancy
  DEFAULT_GENDER: 'female',
  GENDER: [
    { key: 'male', value: 'male', lifeExpectancy: 81 },
    { key: 'female', value: 'female', lifeExpectancy: 85 },
  ],

  // Only single supported for now
  DEFAULT_MARITAL_STATUS: 'single',
  MARITAL_STATUS: [
    { key: 'single', value: 'single', label: 'Single' },
    // {
    //   key: 'partner_oas',
    //   value: 'partner_oas',
    //   label: 'Spouse/common-law partner of someone who receives an OAS Pension',
    // },
    // {
    //   key: 'partner_oas',
    //   value: 'partner_oas',
    //   label:
    //     'Spouse/common-law partner of someone who does not receive an OAS Pension',
    // },
  ],
});

export default config;
