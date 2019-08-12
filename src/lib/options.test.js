import { retirementAgeOptions, telLinkBuilder } from './options';
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

describe('telLinkBuilder', () => {
  it('Builds telephone link for mobile', () => {
    // Given
    const contactTel = '1-800-123-4567';
    // When
    const result = telLinkBuilder(contactTel);
    // Then
    expect(result).toEqual('tel:1-800-123-4567');
  });
});
