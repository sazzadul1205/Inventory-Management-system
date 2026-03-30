// page/frontend/SuccessStories/skeletonRegistry.js

import SectionSkeleton from '@/components/SectionSkeleton';

/**
 * Skeleton Registry for Success Stories Page
 * Maps section types to their appropriate skeleton configurations
 */

// Helper function to get skeleton props based on section type and variant
export const getSkeletonProps = (type, config = {}) => {
    const baseProps = {
        showHeader: true,
        showCta: true,
        className: '',
    };

    // Type-specific skeleton configurations for Success Stories page
    const typeConfigs = {
        // Client Success Metrics section
        clientSuccessMetrics: {
            showHeader: true,
            showStats: true,
            showMetrics: true,
            showCards: true,
            showCta: true,
            cardType: 'metric',
            cardCount: 4,
            statCount: 3,
            metricCount: 4,
            headerOptions: {
                showBadge: true,
                showTitle: true,
                showDescription: true,
            },
        },

        // Before & After Scenarios section
        beforeAfterScenarios: {
            showHeader: true,
            showStats: true,
            showMetrics: true,
            showCards: true,
            showCta: true,
            cardType: 'feature',
            cardCount: 3,
            statCount: 3,
            metricCount: 6,
            headerOptions: {
                showBadge: true,
                showTitle: true,
                showDescription: true,
            },
        },

        // ROI Calculations section
        roiCalculations: {
            showHeader: true,
            showStats: true,
            showMetrics: true,
            showCards: true,
            showCta: true,
            cardType: 'minimal',
            cardCount: 4,
            statCount: 4,
            metricCount: 4,
            headerOptions: {
                showBadge: true,
                showTitle: true,
                showDescription: true,
            },
        },

        // Industry Specific Examples section
        industrySpecificExamples: {
            showHeader: true,
            showStats: true,
            showMetrics: true,
            showCards: true,
            showIndustries: true,
            showCta: true,
            cardType: 'industry',
            cardCount: 6,
            statCount: 4,
            metricCount: 4,
            industryCount: 6,
            headerOptions: {
                showBadge: true,
                showTitle: true,
                showDescription: true,
            },
        },
    };

    // Get config for specific type or use clientSuccessMetrics as default
    const typeConfig = typeConfigs[type] || typeConfigs.clientSuccessMetrics;

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

    // Success Stories sections
    clientSuccessMetrics: SectionSkeleton,
    beforeAfterScenarios: SectionSkeleton,
    roiCalculations: SectionSkeleton,
    industrySpecificExamples: SectionSkeleton,
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
