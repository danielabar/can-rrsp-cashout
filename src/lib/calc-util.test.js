import {
  yearsBeforeRetirement,
  yearsInRetirement,
  annualIncomeForGisEligibilityWithRrsp,
  annualIncomeForGisEligibilityWithoutRrsp,
  monthlyGis,
} from './calc-util';
import config from '../config';

// test('adding works sanely with simple decimals', () => {
//   expect(0.2 + 0.1).toBeCloseTo(0.3, 5);
// });

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

  describe('annualIncomeForGisEligibilityWithRrsp', () => {
    it('Returns sum of cpp, pension and rrsp evenly divided over retirement years', () => {
      // Given
      const input = {
        gender: 'female',
        retirementAge: 65,
        cpp: 9000,
        pension: 0,
        rrsp: 90000,
      };
      // When
      const result = annualIncomeForGisEligibilityWithRrsp(input);
      // Then
      expect(result).toEqual(13500);
    });
  });

  describe('annualIncomeForGisEligibilityWithoutRrsp', () => {
    it('Returns sum of cpp and pension ', () => {
      // Given
      const input = {
        gender: 'female',
        retirementAge: 65,
        cpp: 9000,
        pension: 0,
        rrsp: 90000,
      };
      // When
      const result = annualIncomeForGisEligibilityWithoutRrsp(input);
      // Then
      expect(result).toEqual(9000);
    });
  });

  describe('monthlyGis', () => {
    it('Uses gis-lookup to find monthly GIS amount for single person with low-ish annual income', () => {
      // Given
      const annualIncome = 12000;
      const maritalStatus = config.DEFAULT_MARITAL_STATUS;
      // When
      const result = monthlyGis(annualIncome, maritalStatus);
      // Then
      expect(result).toEqual(259.18);
    });

    it('Uses gis-lookup to find monthly GIS amount for single person with high-ish annual income', () => {
      // Given
      const annualIncome = 17300;
      const maritalStatus = config.DEFAULT_MARITAL_STATUS;
      // When
      const result = monthlyGis(annualIncome, maritalStatus);
      // Then
      expect(result).toEqual(39.18);
    });
  });
});
