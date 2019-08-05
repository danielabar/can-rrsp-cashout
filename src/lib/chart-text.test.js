import { generate } from './chart-text';
import config from '../config';

describe('chart-text', () => {
  describe('generate', () => {
    // Given
    const numericInput = {
      cpp: 5000,
      pension: 4000,
      retirementAge: 65,
      rrsp: 90000,
      gender: config.DEFAULT_GENDER,
      maritalStatus: config.DEFAULT_MARITAL_STATUS,
    };
    const scenarioBefore = {
      totalGISInRetirement: 94024.79,
      numYrsInRetirement: 20,
      annualIncome: 9000,
      monthlyGIS: 391.77,
      annualGIS: 4701.24,
    };
    const scenarioAfter = {
      totalGISInRetirement: 49144.8,
      numYrsInRetirement: 20,
      annualIncome: 13500,
      monthlyGIS: 204.77,
      annualGIS: 2457.24,
    };

    it('generates explanatory text for Annual Income for GIS Eligibility chart', () => {
      // When
      const { annualIncomeForGisEligibility } = generate(
        numericInput,
        scenarioBefore,
        scenarioAfter
      );

      // Then
      expect(annualIncomeForGisEligibility).toMatch(/\$5,000\.00/); // input.cpp
      expect(annualIncomeForGisEligibility).toMatch(/\$5,000\.00/); // input.cpp
      expect(annualIncomeForGisEligibility).toMatch(/\$4,000\.00/); // input.pension
      expect(annualIncomeForGisEligibility).toMatch(/\$9,000\.00/); // scenarioBefore.annualIncome
      expect(annualIncomeForGisEligibility).toMatch(/female/); // input.gender
      expect(annualIncomeForGisEligibility).toMatch(/85/); // female life expectancy
      expect(annualIncomeForGisEligibility).toMatch(/20/); // scenarioBefore.numYrsInRetirement
      expect(annualIncomeForGisEligibility).toMatch(/\$90,000\.00/); // input.rrsp
      expect(annualIncomeForGisEligibility).toMatch(/\$4,500\.00/); // rrsp withdrawals
      expect(annualIncomeForGisEligibility).toMatch(/\$13,500\.00/); // scenarioAfter.annualIncome
    });

    it('generates explanatory text for Monthly GIS Entitlement chart', () => {
      // When
      const { monthlyGISEntitlement } = generate(
        numericInput,
        scenarioBefore,
        scenarioAfter
      );

      // Then
      expect(monthlyGISEntitlement).toMatch(/\$9,000\.00/); // scenarioBefore.annualIncome
      expect(monthlyGISEntitlement).toMatch(/\$391\.77/); // scenarioBefore.monthlyGIS
      expect(monthlyGISEntitlement).toMatch(/\$4,500\.00/); // rrsp withdrawals
      expect(monthlyGISEntitlement).toMatch(/\$187\.00/); // gis before/after diff
      expect(monthlyGISEntitlement).toMatch(/\$204\.77/); // scenarioAfter.monthlyGIS
    });

    it('generates explanatory text for Annual GIS Entitlement chart', () => {
      // When
      const { annualGISEntitlement } = generate(
        numericInput,
        scenarioBefore,
        scenarioAfter
      );

      // Then
      expect(annualGISEntitlement).toMatch(/\$391\.77/); // scenarioBefore.monthlyGIS
      expect(annualGISEntitlement).toMatch(/\$4,701\.24/); // scenarioBefore.annualGIS
      expect(annualGISEntitlement).toMatch(/\$2,457\.24/); // scenarioAfter.annualGIS
    });

    it('generates explanatory text for Total GIS in Retirement chart', () => {
      // When
      const { totalGISEntitlement } = generate(
        numericInput,
        scenarioBefore,
        scenarioAfter
      );

      // Then
      expect(totalGISEntitlement).toMatch(/65/); // gis eligibility
      expect(totalGISEntitlement).toMatch(/female/); // input.gender
      expect(totalGISEntitlement).toMatch(/85/); // female life expectancy
      expect(totalGISEntitlement).toMatch(/20/); // yrs collecting GIS
      expect(totalGISEntitlement).toMatch(/\$4,701\.24/); // scenarioBefore.annualGIS
      expect(totalGISEntitlement).toMatch(/\$94,024\.79/); // scenarioBefore.totalGIS
      expect(totalGISEntitlement).toMatch(/\$49,144\.80/); // scenarioAfter.totalGIS
      expect(totalGISEntitlement).toMatch(/\$44,879\.99/); // before/after diff in total GIS
    });
  });
});
