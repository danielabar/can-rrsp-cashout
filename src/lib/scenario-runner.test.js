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
      expect(result.cashOutAfter.monthlyGIS).toBeCloseTo(212.44, 2);
      expect(result.cashOutAfter.annualGIS).toBeCloseTo(2549.28, 2);
      expect(result.cashOutAfter.totalGISInRetirement).toBeCloseTo(50985.6, 1);
      expect(result.cashOutAfter.gisCoverage).toBeDefined();

      expect(result.cashOutBefore.numYrsInRetirement).toEqual(20);
      expect(result.cashOutBefore.annualIncome).toBeCloseTo(9000, 0);
      expect(result.cashOutBefore.monthlyGIS).toBeCloseTo(399.44, 2);
      expect(result.cashOutBefore.annualGIS).toBeCloseTo(4793.28, 2);
      expect(result.cashOutBefore.gisCoverage).toBeDefined();
      expect(result.cashOutBefore.totalGISInRetirement).toBeCloseTo(95865.6, 1);

      expect(result.percentageDecrease).toEqual(47);
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
      expect(result.cashOutAfter.monthlyGIS).toBeCloseTo(460.82, 2);
      expect(result.cashOutAfter.annualGIS).toBeCloseTo(5529.84, 2);
      expect(result.cashOutAfter.gisCoverage).toBeDefined();
      expect(result.cashOutAfter.totalGISInRetirement).toBeCloseTo(110596.8, 1);

      expect(result.cashOutBefore.numYrsInRetirement).toEqual(20);
      expect(result.cashOutBefore.annualIncome).toBeCloseTo(9000, 0);
      expect(result.cashOutBefore.monthlyGIS).toBeCloseTo(648.82, 2);
      expect(result.cashOutBefore.annualGIS).toBeCloseTo(7785.84, 2);
      expect(result.cashOutBefore.totalGISInRetirement).toBeCloseTo(
        155716.8,
        1
      );
      expect(result.cashOutBefore.gisCoverage).toBeDefined();

      expect(result.percentageDecrease).toEqual(29);
      expect(result).toHaveProperty('chartText');
    });
  });
});
