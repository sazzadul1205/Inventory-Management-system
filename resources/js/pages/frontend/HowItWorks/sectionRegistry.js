// page/frontend/HowItWorks/sectionRegistry.js

// React
import { lazy } from 'react';

// Components Registry
export const sectionRegistry = {
  // stepByStepProcess
  stepByStepProcess: {
    variant1: lazy(() => import('./StepByStepProcessSection/StepByStepProcessSection1')),
    variant2: lazy(() => import('./StepByStepProcessSection/StepByStepProcessSection2')),
    variant3: lazy(() => import('./StepByStepProcessSection/StepByStepProcessSection3')),
  },

  // onboardingGuide
  onboardingGuide: {
    variant1: lazy(() => import('./OnboardingGuideSection/OnboardingGuideSection1')),
    variant2: lazy(() => import('./OnboardingGuideSection/OnboardingGuideSection2')),
    variant3: lazy(() => import('./OnboardingGuideSection/OnboardingGuideSection3')),
  },

  // implementationTimeline
  implementationTimeline: {
    variant1: lazy(() => import('./ImplementationTimelineSection/ImplementationTimelineSection1')),
    variant2: lazy(() => import('./ImplementationTimelineSection/ImplementationTimelineSection2')),
    variant3: lazy(() => import('./ImplementationTimelineSection/ImplementationTimelineSection3')),
  },

  // trainingAndSupport
  trainingAndSupport: {
    variant1: lazy(() => import('./TrainingAndSupportSection/TrainingAndSupportSection1')),
    variant2: lazy(() => import('./TrainingAndSupportSection/TrainingAndSupportSection2')),
    variant3: lazy(() => import('./TrainingAndSupportSection/TrainingAndSupportSection3')),
  },

  // successMetrics
  successMetrics: {
    variant1: lazy(() => import('./SuccessMetricsSection/SuccessMetricsSection1')),
    variant2: lazy(() => import('./SuccessMetricsSection/SuccessMetricsSection2')),
    variant3: lazy(() => import('./SuccessMetricsSection/SuccessMetricsSection3')),
  },

  // caseStudies
  caseStudies: {
    variant1: lazy(() => import('./CaseStudiesSection/CaseStudiesSection1')),
    variant2: lazy(() => import('./CaseStudiesSection/CaseStudiesSection2')),
    variant3: lazy(() => import('./CaseStudiesSection/CaseStudiesSection3')),
  },
}