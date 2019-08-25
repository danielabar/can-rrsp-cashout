const config = Object.freeze({
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

  DEFAULT_RRSP: 90000,
  MIN_RRSP: 0,
  MAX_RRSP: 1000000,

  DEFAULT_ANNUAL_CPP: 9000,
  MIN_ANNUAL_CPP: 0,
  MAX_ANNUAL_CPP: 20000,

  DEFAULT_ANNUAL_PENSION: 0,
  MIN_ANNUAL_PENSION: 0,
  MAX_ANNUAL_PENSION: 100000,

  DEFAULT_RETIREMENT_AGE: 65,
  MIN_RETIREMENT_AGE: 55,
  MAX_RETIREMENT_AGE: 70,

  // https://www.canada.ca/en/services/benefits/publicpensions/cpp/old-age-security/guaranteed-income-supplement/eligibility.html
  GIS_ENTITLEMENT_AGE: 65,

  // https://www.canada.ca/en/employment-social-development/corporate/contact/oas.html
  SERVICE_CANADA_CONTACT: '1-800-277-9914',

  LEARN_MORE_LINKS: [
    {
      linkTitle:
        'The upside-down world of financial planning for low-income Canadians',
      linkUrl:
        'https://www.stitcher.com/podcast/preet-banerjee/mostly-money-mostly-canadian/e/59296571',
      linkBody:
        'Listen to the episode of Mostly Money podcast that inspired this project.',
      linkIcon: 'listen',
    },
    {
      linkTitle: 'TFSA or RRSP',
      linkUrl:
        'https://globalnews.ca/news/5146318/rrsp-tfsa-early-withdrawal-gis/',
      linkBody:
        'Learn how a TFSA can be a better choice than an RRSP when retiring on a low income.',
      linkIcon: 'choice',
    },
    {
      linkTitle: 'Open Policy Ontario',
      linkUrl: 'https://openpolicyontario.com',
      linkBody:
        'Website belonging to John Stapleton, a social policy expert with a special interest in retirement on a low income and income security programs in Canada.',
      linkIcon: 'policy',
    },
    {
      linkTitle: 'Questions?',
      linkUrl: 'https://openpolicyontario.com/contact/',
      linkBody: 'Have a question about something you see here?',
      linkIcon: 'question',
    },
    {
      linkTitle: 'Issues or Bugs',
      linkUrl: 'https://github.com/danielabar/can-rrsp-cashout/issues',
      linkBody: 'Report a bug or request an enhancement.',
      linkIcon: 'bug',
    },
    {
      linkTitle: 'View Project Source',
      linkUrl: 'https://github.com/danielabar/can-rrsp-cashout',
      linkBody:
        'See the source code, tests and documentation for this project.',
      linkIcon: 'source',
    },
  ],
});

export default config;
