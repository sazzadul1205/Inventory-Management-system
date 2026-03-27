// page/frontend/PricingPlans/sectionRegistry.js

// React
import { lazy } from 'react';

// Components Registry
export const sectionRegistry = {
  // starterPlan
  starterPlan: {
    variant1: lazy(() => import('./StarterPlanSection/StarterPlanSection1')),
    variant2: lazy(() => import('./StarterPlanSection/StarterPlanSection2')),
    variant3: lazy(() => import('./StarterPlanSection/StarterPlanSection3')),
  },

  // professionalPlan
  professionalPlan: {
    variant1: lazy(() => import('./ProfessionalPlanSection/ProfessionalPlanSection1')),
    variant2: lazy(() => import('./ProfessionalPlanSection/ProfessionalPlanSection2')),
    variant3: lazy(() => import('./ProfessionalPlanSection/ProfessionalPlanSection3')),
  },

  // enterprisePlan
  enterprisePlan: {
    variant1: lazy(() => import('./EnterprisePlanSection/EnterprisePlanSection1')),
    variant2: lazy(() => import('./EnterprisePlanSection/EnterprisePlanSection2')),
    variant3: lazy(() => import('./EnterprisePlanSection/EnterprisePlanSection3')),
  },

  // CustomPricing
  customPricing: {
    variant1: lazy(() => import('./CustomPricingSection/CustomPricingSection1')),
    variant2: lazy(() => import('./CustomPricingSection/CustomPricingSection2')),
    variant3: lazy(() => import('./CustomPricingSection/CustomPricingSection3')),
  },

  // freeTrial
  freeTrial: {
    variant1: lazy(() => import('./FreeTrialSection/FreeTrialSection1')),
    variant2: lazy(() => import('./FreeTrialSection/FreeTrialSection2')),
    variant3: lazy(() => import('./FreeTrialSection/FreeTrialSection3')),
  },

  // featureComparisonTable
  featureComparisonTable: {
    variant1: lazy(() => import('./FeatureComparisonTableSection/FeatureComparisonTableSection1')),
    variant2: lazy(() => import('./FeatureComparisonTableSection/FeatureComparisonTableSection2')),
    variant3: lazy(() => import('./FeatureComparisonTableSection/FeatureComparisonTableSection3')),
  },

  // faqAboutPricing
  faqAboutPricing: {
    variant1: lazy(() => import('./FaqAboutPricingSection/FaqAboutPricingSection1')),
    variant2: lazy(() => import('./FaqAboutPricingSection/FaqAboutPricingSection2')),
    variant3: lazy(() => import('./FaqAboutPricingSection/FaqAboutPricingSection3')),
  },
}