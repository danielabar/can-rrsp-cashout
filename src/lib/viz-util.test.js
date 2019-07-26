import { barStyle, formatMoney } from './viz-util';

describe('viz-util', () => {
  describe('barStyle', () => {
    it('Returns percentage less than 100 when first argument is strictly smaller than second', () => {
      // Given
      const valueA = 50;
      const valueB = 200;
      // When
      const result = barStyle(valueA, valueB);
      // Then
      expect(result.width).toEqual('25%');
    });

    it('Returns 100% when first argument is equal to second', () => {
      // Given
      const valueA = 50;
      const valueB = 50;
      // When
      const result = barStyle(valueA, valueB);
      // Then
      expect(result.width).toEqual('100%');
    });

    it('Returns 100% when first argument is greater than second', () => {
      // Given
      const valueA = 75;
      const valueB = 50;
      // When
      const result = barStyle(valueA, valueB);
      // Then
      expect(result.width).toEqual('100%');
    });
  });

  describe('formatMoney', () => {
    it('Formats numeric with dollar symbol, thousands separator, and two decimal places', () => {
      // Given
      const value = 12345.043;
      // When
      const result = formatMoney(value);
      // Then
      expect(result).toEqual('$12,345.04');
    });
  });
});
