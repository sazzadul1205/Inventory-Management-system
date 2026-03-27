// page/frontend/PricingPlans/skeletonRegistry.js

import SectionSkeleton from '@/components/SectionSkeleton';

/**
 * Skeleton Registry for Pricing Plans Page
 * Maps section types to their appropriate skeleton configurations
 */

// Helper function to get skeleton props based on section type and variant
export const getSkeletonProps = (type, variant = 'default', config = {}) => {
    const baseProps = {
        showHeader: true,
        showCta: true,
        className: '',
    };

    // Type-specific skeleton configurations for Pricing Plans page
    const typeConfigs = {
        // Starter Plan section
        starterPlan: {
            showHeader: true,
            showStats: true,
            showMetrics: true,
            showCards: true,
            showCta: true,
            cardType: 'feature',
            cardCount: 3,
            statCount: 4,
            metricCount: 4,
            headerOptions: {
                showBadge: true,
                showTitle: true,
                showDescription: true,
            },
        },

        // Professional Plan section
        professionalPlan: {
            showHeader: true,
            showStats: true,
            showMetrics: true,
            showCards: true,
            showCta: true,
            cardType: 'feature',
            cardCount: 3,
            statCount: 4,
            metricCount: 4,
            headerOptions: {
                showBadge: true,
                showTitle: true,
                showDescription: true,
            },
        },

        // Enterprise Plan section
        enterprisePlan: {
            showHeader: true,
            showStats: true,
            showMetrics: true,
            showCards: true,
            showCta: true,
            cardType: 'feature',
            cardCount: 3,
            statCount: 4,
            metricCount: 4,
            headerOptions: {
                showBadge: true,
                showTitle: true,
                showDescription: true,
            },
        },

        // Custom Pricing section
        customPricing: {
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

        // Free Trial section
        freeTrial: {
            showHeader: true,
            showStats: true,
            showMetrics: true,
            showCards: true,
            showCta: true,
            cardType: 'feature',
            cardCount: 3,
            statCount: 4,
            metricCount: 4,
            headerOptions: {
                showBadge: true,
                showTitle: true,
                showDescription: true,
            },
        },

        // Feature Comparison Table section
        featureComparisonTable: {
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

        // FAQ About Pricing section
        faqAboutPricing: {
            showHeader: true,
            showStats: true,
            showMetrics: true,
            showCards: false,
            showCta: true,
            statCount: 4,
            metricCount: 4,
            headerOptions: {
                showBadge: true,
                showTitle: true,
                showDescription: true,
            },
        },
    };

    // Get config for specific type or use starterPlan as default
    const typeConfig = typeConfigs[type] || typeConfigs.starterPlan;

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

    // Pricing Plans sections
    starterPlan: SectionSkeleton,
    professionalPlan: SectionSkeleton,
    enterprisePlan: SectionSkeleton,
    customPricing: SectionSkeleton,
    freeTrial: SectionSkeleton,
    featureComparisonTable: SectionSkeleton,
    faqAboutPricing: SectionSkeleton,
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
