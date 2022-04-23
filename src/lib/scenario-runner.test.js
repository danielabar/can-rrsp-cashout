import { run } from './scenario-runner';
import config from '../config';

describe('scenario runner', () => {
  describe('run', () => {
    it('runs scenarios for cashing our rrsp before and after retirement for single', () => {
      // Given
      const input = {
        maritalStatus: config.DEFAULT_MARITAL_STATUS,
        rrsp: 90000,
        cpp: 4000,
        pension: 5000,
        retirementAge: 65,
      };
      // When
      const result = run(input);
      // Then
      expect(result.cashOutAfter).toEqual({
        totalGISInRetirement: 61629.600000000006,
        numYrsInRetirement: 20,
        annualIncome: 13500,
        monthlyGIS: 256.79,
        annualGIS: 3081.4800000000005,
        gisCoverage: {
          start: '2022-01-01',
          end: '2022-06-30',
        },
      });

      expect(result.cashOutBefore).toEqual({
        totalGISInRetirement: 107726.4,
        numYrsInRetirement: 20,
        annualIncome: 9000,
        monthlyGIS: 448.86,
        annualGIS: 5386.32,
        gisCoverage: {
          start: '2022-01-01',
          end: '2022-06-30',
        },
      });

      expect(result.percentageDecrease).toEqual(43);
      expect(result).toHaveProperty('chartText');
    });

    it('runs scenarios for cashing our rrsp before and after retirement for couple', () => {
      // Given
      const input = {
        maritalStatus: 'couple',
        rrsp: 90000,
        cpp: 4000,
        pension: 5000,
        retirementAge: 65,
      };
      // When
      const result = run(input);
      // Then
      expect(result.cashOutAfter).toEqual({
        totalGISInRetirement: 124646.4,
        numYrsInRetirement: 20,
        annualIncome: 13500,
        monthlyGIS: 519.36,
        annualGIS: 6232.32,
        gisCoverage: {
          start: '2022-01-01',
          end: '2022-06-30',
        },
      });

      expect(result.cashOutBefore).toEqual({
        totalGISInRetirement: 169766.4,
        numYrsInRetirement: 20,
        annualIncome: 9000,
        monthlyGIS: 707.36,
        annualGIS: 8488.32,
        gisCoverage: {
          start: '2022-01-01',
          end: '2022-06-30',
        },
      });

      expect(result.percentageDecrease).toEqual(27);
      expect(result).toHaveProperty('chartText');
    });
  });
});
