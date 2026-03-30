// page/frontend/Features/skeletonRegistry.js

import SectionSkeleton from '@/components/SectionSkeleton';

/**
 * Skeleton Registry for Features Page
 * Maps feature section types to their appropriate skeleton configurations
 */

// Helper function to get skeleton props based on section type and variant
export const getSkeletonProps = (type, config = {}) => {
    const baseProps = {
        showHeader: true,
        showCta: true,
        className: '',
    };

    // Feature-specific skeleton configurations
    const typeConfigs = {
        // Real-Time Tracking Feature
        realTimeTracking: {
            showHeader: true,
            showStats: true,
            showCards: true,
            showCta: true,
            cardType: 'feature',
            cardCount: 6,
            statCount: 4,
            variant: 'realTimeTracking',
            headerOptions: {
                showBadge: true,
                showTitle: true,
                showDescription: true,
            },
        },

        // Automated Reordering Feature
        automatedReordering: {
            showHeader: true,
            showStats: true,
            showCards: true,
            showProcess: true,
            showCta: true,
            cardType: 'feature',
            cardCount: 6,
            statCount: 4,
            processCount: 4,
            variant: 'automatedReordering',
            headerOptions: {
                showBadge: true,
                showTitle: true,
                showDescription: true,
            },
        },

        // Multi-Warehouse Support Feature
        multiWarehouseSupport: {
            showHeader: true,
            showStats: true,
            showCards: true,
            showMetrics: true,
            showCta: true,
            cardType: 'feature',
            cardCount: 6,
            statCount: 4,
            metricCount: 4,
            variant: 'multiWarehouseSupport',
            headerOptions: {
                showBadge: true,
                showTitle: true,
                showDescription: true,
            },
        },

        // Barcode Scanning Feature
        barcodeScanning: {
            showHeader: true,
            showStats: true,
            showCards: true,
            showTechnology: true,
            showCta: true,
            cardType: 'feature',
            cardCount: 6,
            statCount: 4,
            techCount: 6,
            variant: 'barcodeScanning',
            headerOptions: {
                showBadge: true,
                showTitle: true,
                showDescription: true,
            },
        },

        // Reporting & Analytics Feature
        reportingAnalytics: {
            showHeader: true,
            showStats: true,
            showCards: true,
            showMetrics: true,
            showCta: true,
            cardType: 'feature',
            cardCount: 6,
            statCount: 4,
            metricCount: 4,
            variant: 'reportingAnalytics',
            headerOptions: {
                showBadge: true,
                showTitle: true,
                showDescription: true,
            },
        },

        // Integration Capabilities Feature
        integrationCapabilities: {
            showHeader: true,
            showStats: true,
            showCards: true,
            showIntegration: true,
            showTechnology: true,
            showCta: true,
            cardType: 'feature',
            cardCount: 6,
            statCount: 4,
            techCount: 6,
            variant: 'integrationCapabilities',
            headerOptions: {
                showBadge: true,
                showTitle: true,
                showDescription: true,
            },
        },

        // Mobile App Features
        mobileAppFeatures: {
            showHeader: true,
            showStats: true,
            showCards: true,
            showCta: true,
            cardType: 'feature',
            cardCount: 6,
            statCount: 4,
            variant: 'mobileAppFeatures',
            headerOptions: {
                showBadge: true,
                showTitle: true,
                showDescription: true,
            },
        },

        // Security Features
        securityFeatures: {
            showHeader: true,
            showStats: true,
            showCards: true,
            showTechnology: true,
            showCta: true,
            cardType: 'feature',
            cardCount: 6,
            statCount: 4,
            techCount: 6,
            variant: 'securityFeatures',
            headerOptions: {
                showBadge: true,
                showTitle: true,
                showDescription: true,
            },
        },
    };

    // Get config for specific type or use realTimeTracking as default
    const typeConfig = typeConfigs[type] || typeConfigs.realTimeTracking;

    // Merge with any config passed from the section data
    return {
        ...baseProps,
        ...typeConfig,
        ...(config?.skeleton || {}), // Allow override from section config
        variant: type, // Pass the type as variant to the skeleton
    };
};

// Export skeleton registry mapping with all feature sections
export const skeletonRegistry = {
    // Default fallback
    default: SectionSkeleton,

    // Core Features
    realTimeTracking: SectionSkeleton,
    automatedReordering: SectionSkeleton,
    multiWarehouseSupport: SectionSkeleton,
    barcodeScanning: SectionSkeleton,
    reportingAnalytics: SectionSkeleton,
    integrationCapabilities: SectionSkeleton,
    mobileAppFeatures: SectionSkeleton,
    securityFeatures: SectionSkeleton,
};

// Helper to get skeleton for a specific feature type
export const getSkeletonForType = (type) => {
    return skeletonRegistry[type] || skeletonRegistry.default;
};

// Helper to check if a feature type has a custom skeleton configuration
export const hasCustomSkeleton = (type) => {
    return type in skeletonRegistry && type !== 'default';
};

// Helper to get all available feature types
export const getAvailableFeatureTypes = () => {
    return Object.keys(skeletonRegistry).filter((key) => key !== 'default');
};

export default skeletonRegistry;
