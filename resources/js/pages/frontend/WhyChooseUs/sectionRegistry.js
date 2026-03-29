// page/frontend/WhyChooseUs/sectionRegistry.js

// React
import { lazy } from 'react';

// Components Registry
export const sectionRegistry = {
    // competitiveAdvantages
    competitiveAdvantages: {
        variant1: lazy(() => import('./CompetitiveAdvantagesSection/CompetitiveAdvantagesSection1')),
        variant2: lazy(() => import('./CompetitiveAdvantagesSection/CompetitiveAdvantagesSection2')),
        variant3: lazy(() => import('./CompetitiveAdvantagesSection/CompetitiveAdvantagesSection3')),
    },

    // uniqueSellingPoints
    uniqueSellingPoints: {
        variant1: lazy(() => import('./UniqueSellingPointsSection/UniqueSellingPointsSection1')),
        variant2: lazy(() => import('./UniqueSellingPointsSection/UniqueSellingPointsSection2')),
        variant3: lazy(() => import('./UniqueSellingPointsSection/UniqueSellingPointsSection3')),
    },

    // customerSatisfactionStats
    customerSatisfactionStats: {
        variant1: lazy(() => import('./CustomerSatisfactionStatsSection/CustomerSatisfactionStatsSection1')),
        variant2: lazy(() => import('./CustomerSatisfactionStatsSection/CustomerSatisfactionStatsSection2')),
        variant3: lazy(() => import('./CustomerSatisfactionStatsSection/CustomerSatisfactionStatsSection3')),
    },

    // industryExpertise
    industryExpertise: {
        variant1: lazy(() => import('./IndustryExpertiseSection/IndustryExpertiseSection1')),
        variant2: lazy(() => import('./IndustryExpertiseSection/IndustryExpertiseSection2')),
        variant3: lazy(() => import('./IndustryExpertiseSection/IndustryExpertiseSection3')),
    },

    // technologyInnovation
    technologyInnovation: {
        variant1: lazy(() => import('./TechnologyInnovationSection/TechnologyInnovationSection1')),
        variant2: lazy(() => import('./TechnologyInnovationSection/TechnologyInnovationSection2')),
        variant3: lazy(() => import('./TechnologyInnovationSection/TechnologyInnovationSection3')),
    },

    // support24x7
    support24x7: {
        variant1: lazy(() => import('./Support24x7Section/Support24x7Section1')),
        variant2: lazy(() => import('./Support24x7Section/Support24x7Section2')),
        variant3: lazy(() => import('./Support24x7Section/Support24x7Section3')),
    },

    // globalReach
    globalReach: {
        variant1: lazy(() => import('./GlobalReachSection/GlobalReachSection1')),
        variant2: lazy(() => import('./GlobalReachSection/GlobalReachSection2')),
        variant3: lazy(() => import('./GlobalReachSection/GlobalReachSection3')),
    },
};
