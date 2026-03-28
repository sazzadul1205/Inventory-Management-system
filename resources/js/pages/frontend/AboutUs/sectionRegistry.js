// page/frontend/PricingPlans/sectionRegistry.js

// React
import { lazy } from 'react';

// Components Registry
export const sectionRegistry = {
    // companyStory
    companyStory: {
        variant1: lazy(() => import('./CompanyStorySection/CompanyStorySection1')),
        variant2: lazy(() => import('./CompanyStorySection/CompanyStorySection2')),
        variant3: lazy(() => import('./CompanyStorySection/CompanyStorySection3')),
    },

    // missionVision
    missionVision: {
        variant1: lazy(() => import('./MissionAndVisionSection/MissionAndVision1')),
        variant2: lazy(() => import('./MissionAndVisionSection/MissionAndVision2')),
        variant3: lazy(() => import('./MissionAndVisionSection/MissionAndVision3')),
    },

    // coreValues
    coreValues: {
        variant1: lazy(() => import('./CoreValuesSection/CoreValuesSection1')),
        variant2: lazy(() => import('./CoreValuesSection/CoreValuesSection2')),
        variant3: lazy(() => import('./CoreValuesSection/CoreValuesSection3')),
    },

    // leadershipTeam
    leadershipTeam: {
        variant1: lazy(() => import('./LeadershipTeamSection/LeadershipTeamSection1')),
        variant2: lazy(() => import('./LeadershipTeamSection/LeadershipTeamSection2')),
        variant3: lazy(() => import('./LeadershipTeamSection/LeadershipTeamSection3')),
    },

    // companyTimeline
    companyTimeline: {
        variant1: lazy(() => import('./CompanyTimelineSection/CompanyTimelineSection1')),
        variant2: lazy(() => import('./CompanyTimelineSection/CompanyTimelineSection2')),
        variant3: lazy(() => import('./CompanyTimelineSection/CompanyTimelineSection3')),
    },

    // cultureCareers
    cultureCareers: {
        variant1: lazy(() => import('./CultureAndCareersSection/CultureAndCareersSection1')),
        variant2: lazy(() => import('./CultureAndCareersSection/CultureAndCareersSection2')),
        variant3: lazy(() => import('./CultureAndCareersSection/CultureAndCareersSection3')),
    },

    // awardsRecognition
    awardsRecognition: {
        variant1: lazy(() => import('./AwardsAndRecognitionSection/AwardsAndRecognitionSection1')),
        variant2: lazy(() => import('./AwardsAndRecognitionSection/AwardsAndRecognitionSection2')),
        variant3: lazy(() => import('./AwardsAndRecognitionSection/AwardsAndRecognitionSection3')),
    }
};
