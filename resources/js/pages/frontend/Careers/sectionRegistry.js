// page/frontend/Features/sectionRegistry.js

// React
import { lazy } from 'react';

// Components Registry
export const sectionRegistry = {
    // openPositions
    openPositions: {
        variant1: lazy(() => import('./OpenPositionsSection/OpenPositionsSection1')),
        variant2: lazy(() => import('./OpenPositionsSection/OpenPositionsSection2')),
        variant3: lazy(() => import('./OpenPositionsSection/OpenPositionsSection3')),
    },

    // companyCulture
    companyCulture: {
        variant1: lazy(() => import('./CompanyCultureSection/CompanyCultureSection1')),
        variant2: lazy(() => import('./CompanyCultureSection/CompanyCultureSection2')),
        variant3: lazy(() => import('./CompanyCultureSection/CompanyCultureSection3')),
    },

    // benefitsPerks
    benefitsPerks: {
        variant1: lazy(() => import('./BenefitsAndPerksSection/BenefitsAndPerksSection1')),
        variant2: lazy(() => import('./BenefitsAndPerksSection/BenefitsAndPerksSection2')),
        variant3: lazy(() => import('./BenefitsAndPerksSection/BenefitsAndPerksSection3')),
    },

    // lifeAtCompany
    lifeAtCompany: {
        variant1: lazy(() => import('./LifeAtCompanySection/LifeAtCompanySection1')),
        variant2: lazy(() => import('./LifeAtCompanySection/LifeAtCompanySection2')),
        variant3: lazy(() => import('./LifeAtCompanySection/LifeAtCompanySection3')),
    },

    // internshipPrograms
    internshipPrograms: {
        variant1: lazy(() => import('./InternshipProgramsSection/InternshipProgramsSection1')),
        variant2: lazy(() => import('./InternshipProgramsSection/InternshipProgramsSection2')),
        variant3: lazy(() => import('./InternshipProgramsSection/InternshipProgramsSection3')),
    },

    // remoteOpportunities
    remoteOpportunities: {
        variant1: lazy(() => import('./RemoteOpportunitiesSection/RemoteOpportunitiesSection1')),
        variant2: lazy(() => import('./RemoteOpportunitiesSection/RemoteOpportunitiesSection2')),
        variant3: lazy(() => import('./RemoteOpportunitiesSection/RemoteOpportunitiesSection3')),
    },
    
    // applicationProcess
    applicationProcess: {
        variant1: lazy(() => import('./ApplicationProcessSection/ApplicationProcessSection1')),
        variant2: lazy(() => import('./ApplicationProcessSection/ApplicationProcessSection2')),
        variant3: lazy(() => import('./ApplicationProcessSection/ApplicationProcessSection3')),
    },
};
