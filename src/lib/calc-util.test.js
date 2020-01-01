import {
  yearsInRetirement,
  annualIncomeForGisEligibilityWithRrsp,
  annualIncomeForGisEligibilityWithoutRrsp,
  monthlyGis,
  totalGisInRetirement,
  numYearsCollectingGIS,
  percentageDecrease,
  roundByScale,
} from './calc-util';
import config from '../config';

describe('calc-util', () => {
  describe('yearsInRetirement', () => {
    it('Returns difference between life expectancy and retirement age', () => {
      // Given
      const input = {
        retirementAge: 67,
      };
      // When
      const result = yearsInRetirement(input);
      // Then
      expect(result).toEqual(18); // 85 - 67
    });
  });

  describe('annualIncomeForGisEligibilityWithRrsp', () => {
    it('Returns sum of cpp, pension and rrsp evenly divided over retirement years', () => {
      // Given
      const input = {
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

    it('Uses gis-lookup to find monthly GIS amount for a couple with low-ish combined annual income', () => {
      // Given
      const annualIncome = 12000;
      const maritalStatus = 'couple';
      // When
      const { amt: result } = monthlyGis(annualIncome, maritalStatus);
      // Then
      expect(result).toEqual(512.7); // 256.35 * 2 = 512.7
    });

    it('Uses gis-lookup to find monthly GIS amount for a couple with high-ish combined annual income', () => {
      // Given
      const annualIncome = 17300;
      const maritalStatus = 'couple';
      // When
      const { amt: result } = monthlyGis(annualIncome, maritalStatus);
      // Then
      expect(result).toEqual(292.7); // 146.35 * 2 = 292.7
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

  describe('percentageDecrease', () => {
    it('calculates percentage decrease between larger and smaller number rounded to zero decimal places', () => {
      // Given
      const origNum = 391.77;
      const newNum = 204.77;
      // When
      const result = percentageDecrease(origNum, newNum);
      // Then
      expect(result).toEqual(48);
    });

    it('returns 0 when original number and new number are the same', () => {
      // Given
      const origNum = 5;
      const newNum = 5;
      // When
      const result = percentageDecrease(origNum, newNum);
      // Then
      expect(result).toEqual(0);
    });

    it('returns N/A when original number is less than new number', () => {
      // Given
      const origNum = 5;
      const newNum = 10;
      // When
      const result = percentageDecrease(origNum, newNum);
      // Then
      expect(result).toEqual('N/A');
    });

    it('returns N/A when original number is 0', () => {
      // Given
      const origNum = 0;
      const newNum = -5;
      // When
      const result = percentageDecrease(origNum, newNum);
      // Then
      expect(result).toEqual('N/A');
    });
  });

  describe('roundByScale', () => {
    it('Rounds numbers less than 10 to 1 precision', () => {
      expect(roundByScale(0.77)).toEqual(1);
      expect(roundByScale(5.37)).toEqual(5);
      expect(roundByScale(8.05)).toEqual(8);
      expect(roundByScale(9.99)).toEqual(10);
    });

    it('Rounds numbers greater than 10  to 10 precision', () => {
      expect(roundByScale(10.05)).toEqual(10);
      expect(roundByScale(100.89)).toEqual(100);
      expect(roundByScale(5545.89)).toEqual(5550);
    });
  });
});
