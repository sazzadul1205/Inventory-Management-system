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
        // Default counts
        cardCount: 4,
        statCount: 4,
        processCount: 4,
        techCount: 6,
        industryCount: 4,
    };

    // Feature-specific skeleton configurations
    const typeConfigs = {
        // Worldwide Locations - Shows global map and location cards
        worldwideLocations: {
            showHeader: true,
            showStats: true,
            showCards: true,
            showCta: true,
            cardType: 'industry',
            cardCount: 6,
            statCount: 4,
            showMap: true,
        },

        // Regional Offices - Shows office locations with contact info
        regionalOffices: {
            showHeader: true,
            showStats: true,
            showCards: true,
            showCta: true,
            cardType: 'service',
            cardCount: 4,
            statCount: 4,
            showLocations: true,
        },

        // Global Coverage Map - Interactive map placeholder
        globalCoverageMap: {
            showHeader: true,
            showStats: false,
            showCards: false,
            showCta: true,
            cardType: 'minimal',
            cardCount: 0,
            statCount: 3,
            showMap: true,
            mapHeight: 'h-96',
        },

        // Local Support - Shows support team cards
        localSupport: {
            showHeader: true,
            showStats: true,
            showCards: true,
            showCta: true,
            cardType: 'service',
            cardCount: 4,
            statCount: 4,
            showTeam: true,
        },

        // International Clients - Shows client showcase cards
        internationalClients: {
            showHeader: true,
            showStats: true,
            showCards: true,
            showCta: true,
            cardType: 'industry',
            cardCount: 6,
            statCount: 4,
            showTestimonials: true,
        },

        // Language Support - Shows language cards
        languageSupport: {
            showHeader: true,
            showStats: true,
            showCards: true,
            showCta: true,
            cardType: 'technology',
            cardCount: 8,
            statCount: 3,
            showLanguages: true,
        },

        // Currency Support - Shows currency cards
        currencySupport: {
            showHeader: true,
            showStats: true,
            showCards: true,
            showCta: true,
            cardType: 'minimal',
            cardCount: 12,
            statCount: 4,
            showCurrencies: true,
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

// Export skeleton registry mapping with all feature sections
export const skeletonRegistry = {
    // Worldwide Locations
    worldwideLocations: SectionSkeleton,
    
    // Regional Offices
    regionalOffices: SectionSkeleton,
    
    // Global Coverage Map
    globalCoverageMap: SectionSkeleton,
    
    // Local Support
    localSupport: SectionSkeleton,
    
    // International Clients
    internationalClients: SectionSkeleton,
    
    // Language Support
    languageSupport: SectionSkeleton,
    
    // Currency Support
    currencySupport: SectionSkeleton,
    
    // Default fallback
    default: SectionSkeleton,
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