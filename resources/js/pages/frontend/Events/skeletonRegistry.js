// page/frontend/MobileApp/skeletonRegistry.js

import SectionSkeleton from '@/components/SectionSkeleton';

/**
 * Skeleton Registry for MobileApp Page
 * Maps section types to their appropriate skeleton configurations
 */

// Helper function to get skeleton props based on section type and variant
export const getSkeletonProps = (type, config = {}) => {
    const baseProps = {
        showHeader: true,
        showCta: true,
        className: '',
        // Default counts
        cardCount: 6,
        statCount: 4,
        processCount: 4,
        techCount: 8,
        industryCount: 8,
    };

    // Type-specific skeleton configurations for MobileApp page
    const typeConfigs = {
        // Upcoming Webinars section - list of webinar cards
        upcomingWebinars: {
            showHeader: true,
            showCards: true,
            showCta: true,
            cardType: 'webinar',
            cardCount: 4,
            showDateTime: true,
            showSpeakerInfo: true,
            ctaLabel: 'View All Webinars',
        },

        // Industry Conferences section - conference cards with location
        industryConferences: {
            showHeader: true,
            showCards: true,
            showCta: true,
            cardType: 'conference',
            cardCount: 3,
            showDateTime: true,
            showLocation: true,
            ctaLabel: 'Browse Conferences',
        },

        // User Groups section - community group cards
        userGroups: {
            showHeader: true,
            showCards: true,
            showCta: true,
            cardType: 'user-group',
            cardCount: 6,
            gridCols: 3,
            showMemberCount: true,
            ctaLabel: 'Join a Group',
        },

        // Training Sessions section - training/workshop cards
        trainingSessions: {
            showHeader: true,
            showCards: true,
            showCta: true,
            cardType: 'training',
            cardCount: 4,
            showDateTime: true,
            showDuration: true,
            showSkillLevel: true,
            ctaLabel: 'Register for Training',
        },

        // Virtual Events section - online event cards
        virtualEvents: {
            showHeader: true,
            showCards: true,
            showCta: true,
            cardType: 'virtual-event',
            cardCount: 4,
            showDateTime: true,
            showPlatformInfo: true,
            ctaLabel: 'Join Event',
        },

        // Event Calendar section - calendar grid/month view skeleton
        eventCalendar: {
            showHeader: true,
            showCards: false,
            showCalendar: true,
            showCta: false,
            calendarView: 'month',
            eventDots: true,
            showLegend: false,
        },

        // Past Event Recordings section - video/recording thumbnails
        pastEventRecordings: {
            showHeader: true,
            showCards: true,
            showCta: true,
            cardType: 'recording',
            cardCount: 6,
            gridCols: 3,
            showThumbnail: true,
            showDuration: true,
            ctaLabel: 'View Library',
        },

        // Default fallback for any section type
        default: {
            showHeader: true,
            showStats: false,
            showCards: true,
            showCta: true,
            cardType: 'service',
            cardCount: 3,
            statCount: 4,
        },
    };

    // Get config for specific type or use default
    const typeConfig = typeConfigs[type] || typeConfigs.default;

    // Merge with any config passed from the section data
    return {
        ...baseProps,
        ...typeConfig,
        ...(config?.skeleton || {}), // Allow override from section config
        variant: type, // Pass the type as variant to the skeleton
    };
};

// Export skeleton registry mapping
export const skeletonRegistry = {
    upcomingWebinars: SectionSkeleton,
    industryConferences: SectionSkeleton,
    userGroups: SectionSkeleton,
    trainingSessions: SectionSkeleton,
    virtualEvents: SectionSkeleton,
    eventCalendar: SectionSkeleton,
    pastEventRecordings: SectionSkeleton,

    // Default fallback
    default: SectionSkeleton,
};

// Helper to get skeleton for a specific section type
export const getSkeletonForType = (type) => {
    return skeletonRegistry[type] || skeletonRegistry.default;
};

// Helper to check if a section type has a custom skeleton configuration
export const hasCustomSkeleton = (type) => {
    return type in skeletonRegistry && type !== 'default';
};

export default skeletonRegistry;
