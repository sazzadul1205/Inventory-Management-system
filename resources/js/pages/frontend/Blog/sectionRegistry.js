// page/frontend/PricingPlans/sectionRegistry.js

// React
import { lazy } from 'react';

// Components Registry
export const sectionRegistry = {
  // industryInsights
  industryInsights: {
    variant1: lazy(() => import('./IndustryInsightsSection/IndustryInsightsSection1')),
    variant2: lazy(() => import('./IndustryInsightsSection/IndustryInsightsSection2')),
    variant3: lazy(() => import('./IndustryInsightsSection/IndustryInsightsSection3')),
  },

  // productUpdates
  productUpdates: {
    variant1: lazy(() => import('./ProductUpdatesSection/ProductUpdatesSection1')),
    variant2: lazy(() => import('./ProductUpdatesSection/ProductUpdatesSection2')),
    variant3: lazy(() => import('./ProductUpdatesSection/ProductUpdatesSection3')),
  },

  // howToGuides
  howToGuides: {
    variant1: lazy(() => import('./HowToGuidesSection/HowToGuidesSection1')),
    variant2: lazy(() => import('./HowToGuidesSection/HowToGuidesSection2')),
    variant3: lazy(() => import('./HowToGuidesSection/HowToGuidesSection3')),
  },

  // bestPractices
  bestPractices: {
    variant1: lazy(() => import('./BestPracticesSection/BestPracticesSection1')),
    variant2: lazy(() => import('./BestPracticesSection/BestPracticesSection2')),
    variant3: lazy(() => import('./BestPracticesSection/BestPracticesSection3')),
  },

  // companyNews
  companyNews: {
    variant1: lazy(() => import('./CompanyNewsSection/CompanyNewsSection1')),
    variant2: lazy(() => import('./CompanyNewsSection/CompanyNewsSection2')),
    variant3: lazy(() => import('./CompanyNewsSection/CompanyNewsSection3')),
  },

  // expertArticles
  expertArticles: {
    variant1: lazy(() => import('./ExpertArticlesSection/ExpertArticlesSection1')),
    variant2: lazy(() => import('./ExpertArticlesSection/ExpertArticlesSection2')),
    variant3: lazy(() => import('./ExpertArticlesSection/ExpertArticlesSection3')),
  },

  // videoContent
  videoContent: {
    variant1: lazy(() => import('./VideoContentSection/VideoContentSection1')),
    variant2: lazy(() => import('./VideoContentSection/VideoContentSection2')),
    variant3: lazy(() => import('./VideoContentSection/VideoContentSection3')),
  },
}