// page/frontend/PricingPlans/sectionRegistry.js

// React
import { lazy } from 'react';

// Components Registry
export const sectionRegistry = {
    // partnerProgramOverview
    partnerProgramOverview: {
        variant1: lazy(() => import('./PartnerProgramOverviewSection/PartnerProgramOverviewSection1')),
        variant2: lazy(() => import('./PartnerProgramOverviewSection/PartnerProgramOverviewSection2')),
        variant3: lazy(() => import('./PartnerProgramOverviewSection/PartnerProgramOverviewSection3')),
    },

    // technologyPartners
    technologyPartners: {
        variant1: lazy(() => import('./TechnologyPartnersSection/TechnologyPartnersSection1')),
        variant2: lazy(() => import('./TechnologyPartnersSection/TechnologyPartnersSection2')),
        variant3: lazy(() => import('./TechnologyPartnersSection/TechnologyPartnersSection3')),
    },

    // solutionPartners
    solutionPartners: {
        variant1: lazy(() => import('./SolutionPartnersSection/SolutionPartnersSection1')),
        variant2: lazy(() => import('./SolutionPartnersSection/SolutionPartnersSection2')),
        variant3: lazy(() => import('./SolutionPartnersSection/SolutionPartnersSection3')),
    },

    // integrationPartners
    integrationPartners: {
        variant1: lazy(() => import('./IntegrationPartnersSection/IntegrationPartnersSection1')),
        variant2: lazy(() => import('./IntegrationPartnersSection/IntegrationPartnersSection2')),
        variant3: lazy(() => import('./IntegrationPartnersSection/IntegrationPartnersSection3')),
    },

    // becomeAPartner
    becomeAPartner: {
        variant1: lazy(() => import('./BecomeAPartnerSection/BecomeAPartnerSection1')),
        variant2: lazy(() => import('./BecomeAPartnerSection/BecomeAPartnerSection2')),
        variant3: lazy(() => import('./BecomeAPartnerSection/BecomeAPartnerSection3')),
    },

    // partnerResources
    partnerResources: {
        variant1: lazy(() => import('./PartnerResourcesSection/PartnerResourcesSection1')),
        variant2: lazy(() => import('./PartnerResourcesSection/PartnerResourcesSection2')),
        variant3: lazy(() => import('./PartnerResourcesSection/PartnerResourcesSection3')),
    },

    // partnerDirectory
    partnerDirectory: {
        variant1: lazy(() => import('./PartnerDirectorySection/PartnerDirectorySection1')),
        variant2: lazy(() => import('./PartnerDirectorySection/PartnerDirectorySection2')),
        variant3: lazy(() => import('./PartnerDirectorySection/PartnerDirectorySection3')),
    },
  
};
