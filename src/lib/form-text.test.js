import { generateLabel } from './form-text';

describe('form-text', () => {
  describe('generateLabel', () => {
    it('Returns original text for single marital status', () => {
      // Given
      const text = 'Some label';
      const status = 'single';
      // When
      const result = generateLabel(text, status);
      // Then
      expect(result).toEqual('Some label');
    });

    it('Returns original text appended with `for Couple` for couple status', () => {
      // Given
      const text = 'Some label';
      const status = 'couple';
      // When
      const result = generateLabel(text, status);
      // Then
      expect(result).toEqual('Some label for Couple');
    });
  });
});
