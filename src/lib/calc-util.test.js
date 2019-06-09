import { yearsBeforeRetirement, yearsInRetirement } from './calc-util';

describe('calc-util', () => {
  describe('yearsBeforeRetirement', () => {
    it('Retursn difference between retirement age and current age', () => {
      // Given
      const input = {
        age: 55,
        retirementAge: 65,
      };
      // When
      const result = yearsBeforeRetirement(input);
      // Then
      expect(result).toEqual(10);
    });
  });

  describe('yearsInRetirement', () => {
    it('Returns difference between life expectancy for female and retirement age', () => {
      // Given
      const input = {
        gender: 'female',
        retirementAge: 67,
      };
      // When
      const result = yearsInRetirement(input);
      // Then
      expect(result).toEqual(18); // 85 - 67
    });

    it('Returns difference between life expectancy for male and retirement age', () => {
      // Given
      const input = {
        gender: 'male',
        retirementAge: 67,
      };
      // When
      const result = yearsInRetirement(input);
      // Then
      expect(result).toEqual(14); // 81 - 67
    });
  });
});
