// page/frontend/SuccessStories/sectionRegistry.js

// React
import { lazy } from 'react';

// Components Registry
export const sectionRegistry = {
  // clientSuccessMetrics
  clientSuccessMetrics: {
    variant1: lazy(() => import('./ClientSuccessMetricsSection/ClientSuccessMetricsSection1')),
    variant2: lazy(() => import('./ClientSuccessMetricsSection/ClientSuccessMetricsSection2')),
    variant3: lazy(() => import('./ClientSuccessMetricsSection/ClientSuccessMetricsSection3')),
  },

  // beforeAfterScenarios
  beforeAfterScenarios: {
    variant1: lazy(() => import('./BeforeAfterScenariosSection/BeforeAfterScenariosSection1')),
    variant2: lazy(() => import('./BeforeAfterScenariosSection/BeforeAfterScenariosSection2')),
    variant3: lazy(() => import('./BeforeAfterScenariosSection/BeforeAfterScenariosSection3')),
  },

  // roiCalculations
  roiCalculations: {
    variant1: lazy(() => import('./ROICalculationsSection/ROICalculationsSection1')),
    variant2: lazy(() => import('./ROICalculationsSection/ROICalculationsSection2')),
    variant3: lazy(() => import('./ROICalculationsSection/ROICalculationsSection3')),
  },

  // industrySpecificExamples
  industrySpecificExamples: {
    variant1: lazy(() => import('./IndustrySpecificExamplesSection/IndustrySpecificExamplesSection1')),
    variant2: lazy(() => import('./IndustrySpecificExamplesSection/IndustrySpecificExamplesSection2')),
    variant3: lazy(() => import('./IndustrySpecificExamplesSection/IndustrySpecificExamplesSection3')),
  },
}