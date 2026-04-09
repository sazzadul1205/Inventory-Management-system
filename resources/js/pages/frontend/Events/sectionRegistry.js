// page/frontend/MobileApp/sectionRegistry.js

// React
import { lazy } from 'react';

// Components Registry
export const sectionRegistry = {
    // upcomingWebinars
    upcomingWebinars: {
        variant1: lazy(() => import('./UpcomingWebinarsSection/UpcomingWebinarsSection1')),
        variant2: lazy(() => import('./UpcomingWebinarsSection/UpcomingWebinarsSection2')),
        variant3: lazy(() => import('./UpcomingWebinarsSection/UpcomingWebinarsSection3')),
    },

    // industryConferences
    industryConferences: {
        variant1: lazy(() => import('./IndustryConferencesSection/IndustryConferencesSection1')),
        variant2: lazy(() => import('./IndustryConferencesSection/IndustryConferencesSection2')),
        variant3: lazy(() => import('./IndustryConferencesSection/IndustryConferencesSection3')),
    },

    // userGroups
    userGroups: {
        variant1: lazy(() => import('./UserGroupsSection/UserGroupsSection1')),
        variant2: lazy(() => import('./UserGroupsSection/UserGroupsSection2')),
        variant3: lazy(() => import('./UserGroupsSection/UserGroupsSection3')),
    },

    // trainingSessions
    trainingSessions: {
        variant1: lazy(() => import('./TrainingSessionsSection/TrainingSessionsSection1')),
        variant2: lazy(() => import('./TrainingSessionsSection/TrainingSessionsSection2')),
        variant3: lazy(() => import('./TrainingSessionsSection/TrainingSessionsSection3')),
    },

    // virtualEvents
    virtualEvents: {
        variant1: lazy(() => import('./VirtualEventsSection/VirtualEventsSection1')),
        variant2: lazy(() => import('./VirtualEventsSection/VirtualEventsSection2')),
        variant3: lazy(() => import('./VirtualEventsSection/VirtualEventsSection3')),
    },

    // eventCalendar
    eventCalendar: {
        variant1: lazy(() => import('./EventCalendarSection/EventCalendarSection1')),
        variant2: lazy(() => import('./EventCalendarSection/EventCalendarSection2')),
        variant3: lazy(() => import('./EventCalendarSection/EventCalendarSection3')),
    },

    // pastEventRecordings
    pastEventRecordings: {
        variant1: lazy(() => import('./PastEventRecordingsSection/PastEventRecordingsSection1')),
        variant2: lazy(() => import('./PastEventRecordingsSection/PastEventRecordingsSection2')),
        variant3: lazy(() => import('./PastEventRecordingsSection/PastEventRecordingsSection3')),
    },
};
