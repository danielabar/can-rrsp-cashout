import { retirementAgeOptions } from './options';
import config from '../config';

describe('options', () => {
  it('retirementAgeOptions is a list of numeric options from min to max age', () => {
    const expectedNumOpts =
      config.MAX_RETIREMENT_AGE - config.MIN_RETIREMENT_AGE + 1;
    expect(retirementAgeOptions).toHaveLength(expectedNumOpts);
    retirementAgeOptions.forEach(opt => {
      expect(opt.key).toBeDefined();
      expect(opt.value).toEqual(opt.key);
      expect(opt.label).toEqual(opt.key);
    });
  });
});
