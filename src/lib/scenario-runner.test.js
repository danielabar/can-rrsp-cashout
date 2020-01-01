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
      expect(result.cashOutAfter.annualGIS).toEqual(2460);
      expect(result.cashOutAfter.totalGISInRetirement).toEqual(49140);
      expect(result.cashOutAfter.gisCoverage).toBeDefined();

      expect(result.cashOutBefore.numYrsInRetirement).toEqual(20);
      expect(result.cashOutBefore.annualIncome).toBeCloseTo(9000, 0);
      expect(result.cashOutBefore.monthlyGIS).toEqual(390);
      expect(result.cashOutBefore.annualGIS).toEqual(4700);
      expect(result.cashOutBefore.gisCoverage).toBeDefined();
      expect(result.cashOutBefore.totalGISInRetirement).toEqual(94020);

      expect(result.percentageDecrease).toEqual(49);
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
      expect(result.cashOutAfter.monthlyGIS).toEqual(450);
      expect(result.cashOutAfter.annualGIS).toEqual(5410);
      expect(result.cashOutAfter.gisCoverage).toBeDefined();
      expect(result.cashOutAfter.totalGISInRetirement).toEqual(108170);

      expect(result.cashOutBefore.numYrsInRetirement).toEqual(20);
      expect(result.cashOutBefore.annualIncome).toBeCloseTo(9000, 0);
      expect(result.cashOutBefore.monthlyGIS).toEqual(640);
      expect(result.cashOutBefore.annualGIS).toEqual(7660);
      expect(result.cashOutBefore.totalGISInRetirement).toEqual(153290);
      expect(result.cashOutBefore.gisCoverage).toBeDefined();

      expect(result.percentageDecrease).toEqual(30);
      expect(result).toHaveProperty('chartText');
    });
  });
});
