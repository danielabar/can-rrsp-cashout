import { ageOptions } from './options';
import config from '../config';

describe('options', () => {
  it('ageOptions is a list of numeric options from min to max age', () => {
    const expectedNumOpts = config.MAX_AGE - config.MIN_AGE + 1;
    expect(ageOptions).toHaveLength(expectedNumOpts);
    ageOptions.forEach(opt => {
      expect(opt.key).toBeDefined();
      expect(opt.value).toEqual(opt.key);
      expect(opt.label).toEqual(opt.key);
    });
  });
});
