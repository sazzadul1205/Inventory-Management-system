// page/frontend/Services/skeletonRegistry.js

import SectionSkeleton from '@/components/SectionSkeleton';

/**
 * Skeleton Registry for Services Page
 * Maps section types to their appropriate skeleton configurations
 */

// Helper function to get skeleton props based on section type and variant
export const getSkeletonProps = (type, variant = 'default', config = {}) => {
    const baseProps = {
        showHeader: true,
        showCta: true,
        className: '',
    };

    // Type-specific skeleton configurations for Services page
    const typeConfigs = {
        // All Services section
        allServices: {
            showHeader: true,
            showStats: false,
            showCards: true,
            showCta: true,
            cardType: 'service',
            cardCount: 6,
        },

        // Custom Solutions section
        customSolution: {
            showHeader: true,
            showStats: true,
            showCards: true,
            showIntegration: true,
            showProcess: true,
            showTechnology: true,
            showCta: true,
            cardType: 'feature',
            cardCount: 6,
            statCount: 4,
            processCount: 4,
            techCount: 8,
        },

        // Order Fulfillment section
        orderFulfillment: {
            showHeader: true,
            showStats: true,
            showCards: true,
            showCta: true,
            cardType: 'feature',
            cardCount: 6,
            statCount: 4,
        },

        // Returns Management section
        returnManagement: {
            showHeader: true,
            showStats: true,
            showProcess: true,
            showCards: true,
            showCta: true,
            cardType: 'feature',
            cardCount: 6,
            processCount: 4,
            statCount: 4,
        },

        // Supply Chain Consulting section
        supplyChainConsulting: {
            showHeader: true,
            showCards: true,
            showProcess: true,
            showIndustries: true,
            showCta: false,
            cardType: 'feature',
            cardCount: 3,
            processCount: 4,
            industryCount: 8,
        },

        // Transportation Management section
        transportationManagement: {
            showHeader: true,
            showStats: true,
            showCards: true,
            showCta: true,
            cardType: 'feature',
            cardCount: 6,
            statCount: 4,
        },

        // Warehouse Management section
        warehouseManagement: {
            showHeader: true,
            showCards: true,
            showMetrics: true,
            showTechnology: true,
            showCta: true,
            cardType: 'feature',
            cardCount: 4,
            metricCount: 4,
            techCount: 4,
        },
    };

    // Get config for specific type or use allServices as default
    const typeConfig = typeConfigs[type] || typeConfigs.allServices;

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

    // Service sections
    allServices: SectionSkeleton,
    customSolution: SectionSkeleton,
    orderFulfillment: SectionSkeleton,
    returnManagement: SectionSkeleton,
    warehouseManagement: SectionSkeleton,
    supplyChainConsulting: SectionSkeleton,
    transportationManagement: SectionSkeleton,
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
