// page/frontend/FAQ/skeletonRegistry.js

import SectionSkeleton from '@/components/SectionSkeleton';

/**
 * Skeleton Registry for FAQ Page
 * Maps section types to their appropriate skeleton configurations
 */

// Helper function to get skeleton props based on section type and variant
export const getSkeletonProps = (type, config = {}) => {
    const baseProps = {
        showHeader: true,
        showCta: true,
        className: '',
    };

    // Type-specific skeleton configurations for FAQ page
    const typeConfigs = {
        // General Questions section
        generalQuestions: {
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

        // Billing & Pricing section
        billingPricing: {
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

        // Technical Support section
        technicalSupport: {
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

        // Implementation section
        implementation: {
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

        // Integrations section
        integrationsFAQ: {
            showHeader: true,
            showStats: true,
            showMetrics: true,
            showCards: true,
            showCta: true,
            cardType: 'minimal',
            cardCount: 8,
            statCount: 4,
            metricCount: 4,
            headerOptions: {
                showBadge: true,
                showTitle: true,
                showDescription: true,
            },
        },

        // Data Security section
        dataSecurity: {
            showHeader: true,
            showStats: true,
            showMetrics: true,
            showCards: true,
            showCta: true,
            cardType: 'minimal',
            cardCount: 6,
            statCount: 4,
            metricCount: 4,
            headerOptions: {
                showBadge: true,
                showTitle: true,
                showDescription: true,
            },
        },

        // Account Management section
        accountManagement: {
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

    // Get config for specific type or use generalQuestions as default
    const typeConfig = typeConfigs[type] || typeConfigs.generalQuestions;

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

    // FAQ sections
    generalQuestions: SectionSkeleton,
    billingPricing: SectionSkeleton,
    technicalSupport: SectionSkeleton,
    implementation: SectionSkeleton,
    integrationsFAQ: SectionSkeleton,
    dataSecurity: SectionSkeleton,
    accountManagement: SectionSkeleton,
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
