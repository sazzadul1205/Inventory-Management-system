// page/frontend/Blog/skeletonRegistry.js

import SectionSkeleton from '@/components/SectionSkeleton';

/**
 * Skeleton Registry for Blog Page
 * Maps section types to their appropriate skeleton configurations
 */

// Helper function to get skeleton props based on section type and variant
export const getSkeletonProps = (type, variant = 'default', config = {}) => {
    const baseProps = {
        showHeader: true,
        showCta: true,
        className: '',
    };

    // Type-specific skeleton configurations for Blog page
    const typeConfigs = {
        // Industry Insights Section
        industryInsights: {
            showHeader: true,
            showStats: true,
            showCards: true,
            showCta: true,
            cardType: 'feature',
            cardCount: 6,
            statCount: 3,
        },

        // Product Updates Section
        productUpdates: {
            showHeader: true,
            showStats: true,
            showCards: true,
            showCta: true,
            showProcess: true,
            cardType: 'feature',
            cardCount: 6,
            statCount: 3,
            processCount: 4,
        },

        // How-to Guides Section
        howToGuides: {
            showHeader: true,
            showStats: true,
            showCards: true,
            showCta: true,
            showProcess: true,
            cardType: 'feature',
            cardCount: 6,
            statCount: 3,
            processCount: 4,
        },

        // Best Practices Section
        bestPractices: {
            showHeader: true,
            showStats: true,
            showCards: true,
            showCta: true,
            showMetrics: true,
            cardType: 'feature',
            cardCount: 6,
            statCount: 3,
            metricCount: 4,
        },

        // Company News Section
        companyNews: {
            showHeader: true,
            showStats: true,
            showCards: true,
            showCta: true,
            cardType: 'service',
            cardCount: 3,
            statCount: 4,
        },

        // Expert Articles Section
        expertArticles: {
            showHeader: true,
            showStats: true,
            showCards: true,
            showCta: true,
            cardType: 'feature',
            cardCount: 3,
            statCount: 4,
        },

        // Video Content Section
        videoContent: {
            showHeader: true,
            showStats: true,
            showCards: true,
            showCta: true,
            cardType: 'technology',
            cardCount: 6,
            statCount: 3,
            techCount: 8,
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

    // Blog section types
    industryInsights: SectionSkeleton,
    productUpdates: SectionSkeleton,
    howToGuides: SectionSkeleton,
    bestPractices: SectionSkeleton,
    companyNews: SectionSkeleton,
    expertArticles: SectionSkeleton,
    videoContent: SectionSkeleton,
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
