// page/frontend/PricingPlans/sectionRegistry.js

// React
import { lazy } from 'react';

// Components Registry
export const sectionRegistry = {
    // pressReleases
    pressReleases: {
        variant1: lazy(() => import('./PressReleasesSection/PressReleasesSection1')),
        variant2: lazy(() => import('./PressReleasesSection/PressReleasesSection2')),
        variant3: lazy(() => import('./PressReleasesSection/PressReleasesSection3')),
    },

    // mediaCoverage
    mediaCoverage: {
        variant1: lazy(() => import('./MediaCoverageSection/MediaCoverageSection1')),
        variant2: lazy(() => import('./MediaCoverageSection/MediaCoverageSection2')),
        variant3: lazy(() => import('./MediaCoverageSection/MediaCoverageSection3')),
    },

    // companyAnnouncements
    companyAnnouncements: {
        variant1: lazy(() => import('./CompanyAnnouncementsSection/CompanyAnnouncementsSection1')),
        variant2: lazy(() => import('./CompanyAnnouncementsSection/CompanyAnnouncementsSection2')),
        variant3: lazy(() => import('./CompanyAnnouncementsSection/CompanyAnnouncementsSection3')),
    },

    // industryEvents
    industryEvents: {
        variant1: lazy(() => import('./IndustryEventsSection/IndustryEventsSection1')),
        variant2: lazy(() => import('./IndustryEventsSection/IndustryEventsSection2')),
        variant3: lazy(() => import('./IndustryEventsSection/IndustryEventsSection3')),
    },

    // productLaunches
    productLaunches: {
        variant1: lazy(() => import('./ProductLaunchesSection/ProductLaunchesSection1')),
        variant2: lazy(() => import('./ProductLaunchesSection/ProductLaunchesSection2')),
        variant3: lazy(() => import('./ProductLaunchesSection/ProductLaunchesSection3')),
    },

    // awardsAndRecognition
    awardsAndRecognition: {
        variant1: lazy(() => import('./AwardsAndRecognitionSection/AwardsAndRecognitionSection1')),
        variant2: lazy(() => import('./AwardsAndRecognitionSection/AwardsAndRecognitionSection2')),
        variant3: lazy(() => import('./AwardsAndRecognitionSection/AwardsAndRecognitionSection3')),
    },
};
