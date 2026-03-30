// page/frontend/News/skeletonRegistry.js

import SectionSkeleton from '@/components/SectionSkeleton';

/**
 * Skeleton Registry for News Page
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

    // Type-specific skeleton configurations for News page
    const typeConfigs = {
        // Press Releases - Shows press release cards with publication info
        pressReleases: {
            showHeader: true,
            showStats: true,
            showCards: true,
            showCta: true,
            cardType: 'pressRelease',
            cardCount: 6,
            statCount: 4,
            showFilters: true,
        },

        // Media Coverage - Shows media mentions with publication logos
        mediaCoverage: {
            showHeader: true,
            showStats: true,
            showCards: true,
            showCta: true,
            cardType: 'mediaCoverage',
            cardCount: 6,
            statCount: 4,
        },

        // Company Announcements - Shows announcement cards
        companyAnnouncements: {
            showHeader: true,
            showStats: true,
            showCards: true,
            showCta: true,
            cardType: 'announcement',
            cardCount: 6,
            statCount: 4,
        },

        // Industry Events - Shows event cards with date badges
        industryEvents: {
            showHeader: true,
            showStats: true,
            showCards: true,
            showCta: true,
            cardType: 'event',
            cardCount: 6,
            statCount: 4,
        },

        // Product Launches - Shows product cards with status badges
        productLaunches: {
            showHeader: true,
            showStats: true,
            showCards: true,
            showCta: true,
            cardType: 'product',
            cardCount: 6,
            statCount: 4,
        },

        // Awards & Recognition - Shows award cards with trophy icons
        awardsAndRecognition: {
            showHeader: true,
            showStats: true,
            showCards: true,
            showCta: true,
            cardType: 'award',
            cardCount: 6,
            statCount: 4,
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
    // Press Releases
    pressReleases: SectionSkeleton,

    // Media Coverage
    mediaCoverage: SectionSkeleton,

    // Company Announcements
    companyAnnouncements: SectionSkeleton,

    // Industry Events
    industryEvents: SectionSkeleton,

    // Product Launches
    productLaunches: SectionSkeleton,

    // Awards & Recognition
    awardsAndRecognition: SectionSkeleton,

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
