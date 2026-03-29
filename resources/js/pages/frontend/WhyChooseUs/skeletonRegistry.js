// page/frontend/WhyChooseUs/skeletonRegistry.js

import SectionSkeleton from '@/components/SectionSkeleton';

/**
 * Skeleton Registry for Why Choose Us Page
 * Maps section types to their appropriate skeleton configurations
 */

// Helper function to get skeleton props based on section type and variant
export const getSkeletonProps = (type, variant = 'default', config = {}) => {
    const baseProps = {
        showHeader: true,
        showCta: true,
        className: '',
    };

    // Type-specific skeleton configurations for Why Choose Us page
    const typeConfigs = {
        // Competitive Advantages Section
        competitiveAdvantages: {
            showHeader: true,
            showStats: true,
            showCards: true,
            showCta: true,
            showTechnology: true,
            showIntegration: true,
            cardType: 'feature',
            cardCount: 3,
            statCount: 4,
            techCount: 6,
        },

        // Unique Selling Points Section
        uniqueSellingPoints: {
            showHeader: true,
            showStats: true,
            showCards: true,
            showCta: true,
            showMetrics: true,
            cardType: 'feature',
            cardCount: 3,
            statCount: 4,
            metricCount: 4,
        },

        // Customer Satisfaction Stats Section
        customerSatisfactionStats: {
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

        // Industry Expertise Section
        industryExpertise: {
            showHeader: true,
            showStats: true,
            showCards: true,
            showCta: true,
            showIndustries: true,
            cardType: 'industry',
            cardCount: 4,
            statCount: 4,
            industryCount: 8,
        },

        // Technology & Innovation Section
        technologyInnovation: {
            showHeader: true,
            showStats: true,
            showCards: true,
            showCta: true,
            showTechnology: true,
            showMetrics: true,
            cardType: 'technology',
            cardCount: 4,
            statCount: 4,
            techCount: 8,
            metricCount: 4,
        },

        // 24/7 Support Section
        support24x7: {
            showHeader: true,
            showStats: true,
            showCards: true,
            showCta: true,
            cardType: 'feature',
            cardCount: 3,
            statCount: 4,
        },

        // Global Reach Section
        globalReach: {
            showHeader: true,
            showStats: true,
            showCards: true,
            showCta: true,
            showIndustries: true,
            cardType: 'industry',
            cardCount: 3,
            statCount: 4,
            industryCount: 4,
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

    // Why Choose Us section types
    competitiveAdvantages: SectionSkeleton,
    uniqueSellingPoints: SectionSkeleton,
    customerSatisfactionStats: SectionSkeleton,
    industryExpertise: SectionSkeleton,
    technologyInnovation: SectionSkeleton,
    support24x7: SectionSkeleton,
    globalReach: SectionSkeleton,
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
