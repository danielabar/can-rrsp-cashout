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
      expect(result.cashOutAfter.numYrsInRetirement).toEqual(20);
      expect(result.cashOutAfter.annualIncome).toBeCloseTo(13500, 0);
      expect(result.cashOutAfter.monthlyGIS).toEqual(200);
      expect(result.cashOutAfter.annualGIS).toEqual(2400);
      expect(result.cashOutAfter.totalGISInRetirement).toEqual(48000);
      expect(result.cashOutAfter.gisCoverage).toBeDefined();

      expect(result.cashOutBefore.numYrsInRetirement).toEqual(20);
      expect(result.cashOutBefore.annualIncome).toBeCloseTo(9000, 0);
      expect(result.cashOutBefore.monthlyGIS).toEqual(400);
      expect(result.cashOutBefore.annualGIS).toEqual(4800);
      expect(result.cashOutBefore.gisCoverage).toBeDefined();
      expect(result.cashOutBefore.totalGISInRetirement).toEqual(96000);

      expect(result.percentageDecrease).toEqual(50);
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
      expect(result.cashOutAfter.numYrsInRetirement).toEqual(20);
      expect(result.cashOutAfter.annualIncome).toBeCloseTo(13500, 0);
      expect(result.cashOutAfter.monthlyGIS).toEqual(500);
      expect(result.cashOutAfter.annualGIS).toEqual(6000);
      expect(result.cashOutAfter.gisCoverage).toBeDefined();
      expect(result.cashOutAfter.totalGISInRetirement).toEqual(120000);

      expect(result.cashOutBefore.numYrsInRetirement).toEqual(20);
      expect(result.cashOutBefore.annualIncome).toBeCloseTo(9000, 0);
      expect(result.cashOutBefore.monthlyGIS).toEqual(600);
      expect(result.cashOutBefore.annualGIS).toEqual(7200);
      expect(result.cashOutBefore.totalGISInRetirement).toEqual(144000);
      expect(result.cashOutBefore.gisCoverage).toBeDefined();

      expect(result.percentageDecrease).toEqual(17);
      expect(result).toHaveProperty('chartText');
    });
  });
});
