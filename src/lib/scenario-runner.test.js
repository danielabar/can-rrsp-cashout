import { run } from './scenario-runner';
import config from '../config';

describe('scenario runner', () => {
  describe('run', () => {
    it('runs scenarios for cashing our rrsp before and after retirement for single', () => {
      // Given
      const input = {
        gender: config.DEFAULT_GENDER,
        maritalStatus: config.DEFAULT_MARITAL_STATUS,
        rrsp: 90000,
        cpp: 4000,
        pension: 5000,
        retirementAge: 65,
      };
      // When
      const result = run(input);
      // Then
      expect(result.cashOutAfter.numYrsInRetirement).toEqual(20);
      expect(result.cashOutAfter.annualIncome).toBeCloseTo(13500, 0);
      expect(result.cashOutAfter.monthlyGIS).toBeCloseTo(204.77, 2);
      expect(result.cashOutAfter.annualGIS).toBeCloseTo(2457.24, 2);
      expect(result.cashOutAfter.totalGISInRetirement).toBeCloseTo(49144.8, 1);
      expect(result.cashOutAfter.gisCoverage).toBeDefined();

      expect(result.cashOutBefore.numYrsInRetirement).toEqual(20);
      expect(result.cashOutBefore.annualIncome).toBeCloseTo(9000, 0);
      expect(result.cashOutBefore.monthlyGIS).toBeCloseTo(391.77, 2);
      expect(result.cashOutBefore.annualGIS).toBeCloseTo(4701.24, 2);
      expect(result.cashOutBefore.gisCoverage).toBeDefined();
      expect(result.cashOutBefore.totalGISInRetirement).toBeCloseTo(
        94024.79,
        1
      );

      expect(result.percentageDecrease).toEqual(48);
      expect(result).toHaveProperty('chartText');
    });

    it('runs scenarios for cashing our rrsp before and after retirement for couple', () => {
      // Given
      const input = {
        gender: config.DEFAULT_GENDER,
        maritalStatus: 'couple',
        rrsp: 90000,
        cpp: 4000,
        pension: 5000,
        retirementAge: 65,
      };
      // When
      const result = run(input);
      // Then
      expect(result.cashOutAfter.numYrsInRetirement).toEqual(20);
      expect(result.cashOutAfter.annualIncome).toBeCloseTo(13500, 0);
      expect(result.cashOutAfter.monthlyGIS).toBeCloseTo(450.7, 2);
      expect(result.cashOutAfter.annualGIS).toBeCloseTo(5408.4, 2);
      expect(result.cashOutAfter.gisCoverage).toBeDefined();
      expect(result.cashOutAfter.totalGISInRetirement).toBeCloseTo(108168, 1);

      expect(result.cashOutBefore.numYrsInRetirement).toEqual(20);
      expect(result.cashOutBefore.annualIncome).toBeCloseTo(9000, 0);
      expect(result.cashOutBefore.monthlyGIS).toBeCloseTo(638.7, 2);
      expect(result.cashOutBefore.annualGIS).toBeCloseTo(7664.4, 2);
      expect(result.cashOutBefore.totalGISInRetirement).toBeCloseTo(153288, 1);
      expect(result.cashOutBefore.gisCoverage).toBeDefined();

      expect(result.percentageDecrease).toEqual(29);
      expect(result).toHaveProperty('chartText');
    });
  });
});
