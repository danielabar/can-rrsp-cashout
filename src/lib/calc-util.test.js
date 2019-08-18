import {
  yearsInRetirement,
  annualIncomeForGisEligibilityWithRrsp,
  annualIncomeForGisEligibilityWithoutRrsp,
  monthlyGis,
  totalGisInRetirement,
  numYearsCollectingGIS,
} from './calc-util';
import config from '../config';

// test('adding works sanely with simple decimals', () => {
//   expect(0.2 + 0.1).toBeCloseTo(0.3, 5);
// });

describe('calc-util', () => {
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
      const { amt: result } = monthlyGis(annualIncome, maritalStatus);
      // Then
      expect(result).toEqual(266.77);
    });

    it('Uses gis-lookup to find monthly GIS amount for single person with high-ish annual income', () => {
      // Given
      const annualIncome = 17300;
      const maritalStatus = config.DEFAULT_MARITAL_STATUS;
      // When
      const { amt: result } = monthlyGis(annualIncome, maritalStatus);
      // Then
      expect(result).toEqual(46.77);
    });

    it('Result includes GIS coverage period', () => {
      // Given
      const annualIncome = 17300;
      const maritalStatus = config.DEFAULT_MARITAL_STATUS;
      // When
      const { gisCoverage } = monthlyGis(annualIncome, maritalStatus);
      // Then
      expect(gisCoverage.start).toEqual('2019-01-01');
      expect(gisCoverage.end).toEqual('2019-09-30');
    });
  });

  describe('totalGisInRetirement', () => {
    it('Returns product of annual GIS amount and number of years in retirement', () => {
      // Given
      const annualGISAmt = 100;
      const numYearsInRetirement = 20;
      const retirementAge = 65;
      // When
      const result = totalGisInRetirement(
        annualGISAmt,
        numYearsInRetirement,
        retirementAge
      );
      // Then
      expect(result).toEqual(2000);
    });

    it('Returns product of annual GIS amount and number of years in retirement starting from age 65 when retirement age is before 65', () => {
      // Given
      const annualGISAmt = 100;
      const numYearsInRetirement = 30;
      const retirementAge = 55;
      // When
      const result = totalGisInRetirement(
        annualGISAmt,
        numYearsInRetirement,
        retirementAge
      );
      // Then expect total GIS = annualGISAmt * 20, NOT * 30 because GIS can only be collected starting from age 65
      expect(result).toEqual(2000);
    });

    it('Returns product of annual GIS amount and number of years in retirement when retirement age is after 65', () => {
      // Given
      const annualGISAmt = 100;
      const numYearsInRetirement = 15;
      const retirementAge = 70;
      // When
      const result = totalGisInRetirement(
        annualGISAmt,
        numYearsInRetirement,
        retirementAge
      );
      // Then
      expect(result).toEqual(1500);
    });
  });

  describe('numYearsCollectingGIS', () => {
    it('Returns numYrsInRetirement when retirement age is equal to GIS entitlement age', () => {
      // Given
      const numYrsInRetirement = 20;
      const retirementAge = 65;
      // When
      const result = numYearsCollectingGIS(retirementAge, numYrsInRetirement);
      // Then
      expect(result).toEqual(20);
    });

    it('Returns numYrsInRetirement when retirement age is greater than GIS entitlement age', () => {
      // Given
      const numYrsInRetirement = 15;
      const retirementAge = 70;
      // When
      const result = numYearsCollectingGIS(retirementAge, numYrsInRetirement);
      // Then
      expect(result).toEqual(15);
    });

    it('Returns difference between GIS entitlement age and retirement age when retirement age is less than GIS entitlement age', () => {
      // Given
      const numYrsInRetirement = 25;
      const retirementAge = 60;
      // When
      const result = numYearsCollectingGIS(retirementAge, numYrsInRetirement);
      // Then
      expect(result).toEqual(20);
    });
  });
});
