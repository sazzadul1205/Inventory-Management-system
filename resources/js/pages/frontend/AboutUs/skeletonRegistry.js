// page/frontend/AboutUs/skeletonRegistry.js

import SectionSkeleton from '@/components/SectionSkeleton';

/**
 * Skeleton Registry for About Us Page
 * Maps section types to their appropriate skeleton configurations
 */

// Helper function to get skeleton props based on section type and variant
export const getSkeletonProps = (type, variant = 'default', config = {}) => {
    const baseProps = {
        showHeader: true,
        showCta: true,
        className: '',
    };

    // Type-specific skeleton configurations for About Us page
    const typeConfigs = {
        // Company Story Section
        companyStory: {
            showHeader: true,
            showStats: true,
            showCards: true,
            showCta: true,
            showProcess: true,
            showTechnology: false,
            showIntegration: false,
            cardType: 'feature',
            cardCount: 3,
            statCount: 4,
            processCount: 4,
        },

        // Mission & Vision Section
        missionVision: {
            showHeader: true,
            showStats: true,
            showCards: true,
            showCta: true,
            showMetrics: true,
            cardType: 'feature',
            cardCount: 4,
            statCount: 4,
            metricCount: 4,
        },

        // Core Values Section
        coreValues: {
            showHeader: true,
            showStats: true,
            showCards: true,
            showCta: true,
            cardType: 'feature',
            cardCount: 3,
            statCount: 4,
        },

        // Leadership Team Section
        leadershipTeam: {
            showHeader: true,
            showStats: true,
            showCards: true,
            showCta: true,
            cardType: 'industry',
            cardCount: 3,
            statCount: 4,
        },

        // Company Timeline Section
        companyTimeline: {
            showHeader: true,
            showStats: true,
            showCards: true,
            showCta: true,
            showProcess: true,
            cardType: 'minimal',
            cardCount: 4,
            statCount: 4,
            processCount: 6,
        },

        // Culture & Careers Section
        cultureCareers: {
            showHeader: true,
            showStats: true,
            showCards: true,
            showCta: true,
            showMetrics: true,
            cardType: 'feature',
            cardCount: 4,
            statCount: 4,
            metricCount: 4,
        },

        // Awards & Recognition Section
        awardsRecognition: {
            showHeader: true,
            showStats: true,
            showCards: true,
            showCta: true,
            showMetrics: true,
            cardType: 'industry',
            cardCount: 3,
            statCount: 4,
            metricCount: 4,
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
    // Default fallback
    default: SectionSkeleton,

    // About Us section types
    companyStory: SectionSkeleton,
    missionVision: SectionSkeleton,
    coreValues: SectionSkeleton,
    leadershipTeam: SectionSkeleton,
    companyTimeline: SectionSkeleton,
    cultureCareers: SectionSkeleton,
    awardsRecognition: SectionSkeleton,
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
