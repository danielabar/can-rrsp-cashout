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
      gisCoverage: { start: '2019-01-01', end: '2019-09-30' },
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
      expect(annualIncomeForGisEligibility.explanation).toMatch(/\$5,000\.00/); // input.cpp
      expect(annualIncomeForGisEligibility.explanation).toMatch(/\$5,000\.00/); // input.cpp
      expect(annualIncomeForGisEligibility.explanation).toMatch(/\$4,000\.00/); // input.pension
      expect(annualIncomeForGisEligibility.explanation).toMatch(/\$9,000\.00/); // scenarioBefore.annualIncome
      expect(annualIncomeForGisEligibility.explanation).toMatch(/female/); // input.gender
      expect(annualIncomeForGisEligibility.explanation).toMatch(/85/); // female life expectancy
      expect(annualIncomeForGisEligibility.explanation).toMatch(/20/); // scenarioBefore.numYrsInRetirement
      expect(annualIncomeForGisEligibility.explanation).toMatch(/\$90,000\.00/); // input.rrsp
      expect(annualIncomeForGisEligibility.explanation).toMatch(/\$4,500\.00/); // rrsp withdrawals
      expect(annualIncomeForGisEligibility.explanation).toMatch(/\$13,500\.00/); // scenarioAfter.annualIncome

      expect(annualIncomeForGisEligibility.footer).toBeDefined();
    });

    it('generates explanatory text for Monthly GIS Entitlement chart', () => {
      // When
      const { monthlyGISEntitlement } = generate(
        numericInput,
        scenarioBefore,
        scenarioAfter
      );

      // Then
      expect(monthlyGISEntitlement.explanation).toMatch(/\$9,000\.00/); // scenarioBefore.annualIncome
      expect(monthlyGISEntitlement.explanation).toMatch(/\$391\.77/); // scenarioBefore.monthlyGIS
      expect(monthlyGISEntitlement.explanation).toMatch(/\$4,500\.00/); // rrsp withdrawals
      expect(monthlyGISEntitlement.explanation).toMatch(/\$187\.00/); // gis before/after diff
      expect(monthlyGISEntitlement.explanation).toMatch(/\$204\.77/); // scenarioAfter.monthlyGIS

      expect(monthlyGISEntitlement.footer).toBeDefined();
    });

    it('generates explanatory text for Annual GIS Entitlement chart', () => {
      // When
      const { annualGISEntitlement } = generate(
        numericInput,
        scenarioBefore,
        scenarioAfter
      );

      // Then
      expect(annualGISEntitlement.explanation).toMatch(/\$391\.77/); // scenarioBefore.monthlyGIS
      expect(annualGISEntitlement.explanation).toMatch(/\$4,701\.24/); // scenarioBefore.annualGIS
      expect(annualGISEntitlement.explanation).toMatch(/\$2,457\.24/); // scenarioAfter.annualGIS

      expect(annualGISEntitlement.footer).toBeDefined();
    });

    it('generates explanatory text for Total GIS in Retirement chart', () => {
      // When
      const { totalGISEntitlement } = generate(
        numericInput,
        scenarioBefore,
        scenarioAfter
      );

      // Then
      expect(totalGISEntitlement.explanation).toMatch(/65/); // gis eligibility
      expect(totalGISEntitlement.explanation).toMatch(/female/); // input.gender
      expect(totalGISEntitlement.explanation).toMatch(/85/); // female life expectancy
      expect(totalGISEntitlement.explanation).toMatch(/20/); // yrs collecting GIS
      expect(totalGISEntitlement.explanation).toMatch(/\$4,701\.24/); // scenarioBefore.annualGIS
      expect(totalGISEntitlement.explanation).toMatch(/\$94,024\.79/); // scenarioBefore.totalGIS
      expect(totalGISEntitlement.explanation).toMatch(/\$49,144\.80/); // scenarioAfter.totalGIS
      expect(totalGISEntitlement.explanation).toMatch(/\$44,879\.99/); // before/after diff in total GIS

      expect(totalGISEntitlement.footer).toBeDefined();
    });
  });
});
