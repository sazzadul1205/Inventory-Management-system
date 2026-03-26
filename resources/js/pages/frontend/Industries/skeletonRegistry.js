// page/frontend/Industries/skeletonRegistry.js

import SectionSkeleton from '@/components/SectionSkeleton';

/**
 * Skeleton Registry for Industries Page
 * Maps section types to their appropriate skeleton configurations
 */

// Helper function to get skeleton props based on section type and variant
export const getSkeletonProps = (type, variant = 'default', config = {}) => {
    const baseProps = {
        showHeader: true,
        showCta: true,
        className: '',
    };

    // Type-specific skeleton configurations for Industries page
    const typeConfigs = {
        // E-Commerce & Retail
        eCommerceAndRetail: {
            showHeader: true,
            showStats: true,
            showCards: true,
            showCta: true,
            cardType: 'feature',
            cardCount: 6,
            statCount: 4,
        },

        // Manufacturing
        manufacturing: {
            showHeader: true,
            showStats: true,
            showCards: true,
            showCta: true,
            cardType: 'feature',
            cardCount: 6,
            statCount: 4,
        },

        // Healthcare & Pharmaceuticals
        healthcareAndPharmaceuticals: {
            showHeader: true,
            showStats: true,
            showCards: true,
            showCta: true,
            cardType: 'feature',
            cardCount: 6,
            statCount: 4,
        },

        // Food & Beverage
        foodAndBeverage: {
            showHeader: true,
            showStats: true,
            showCards: true,
            showCta: true,
            cardType: 'feature',
            cardCount: 6,
            statCount: 4,
        },

        // Automotive
        automotive: {
            showHeader: true,
            showStats: true,
            showCards: true,
            showCta: true,
            cardType: 'feature',
            cardCount: 6,
            statCount: 4,
        },

        // Electronics
        electronics: {
            showHeader: true,
            showStats: true,
            showCards: true,
            showCta: true,
            cardType: 'feature',
            cardCount: 6,
            statCount: 4,
        },

        // Fashion & Apparel
        fashionAndApparel: {
            showHeader: true,
            showStats: true,
            showCards: true,
            showCta: true,
            cardType: 'feature',
            cardCount: 6,
            statCount: 4,
        },

        // Wholesale & Distribution
        wholesaleAndDistribution: {
            showHeader: true,
            showStats: true,
            showCards: true,
            showCta: true,
            cardType: 'feature',
            cardCount: 6,
            statCount: 4,
        },

        // Third Party Logistics
        thirdPartyLogistics: {
            showHeader: true,
            showStats: true,
            showCards: true,
            showCta: true,
            cardType: 'feature',
            cardCount: 6,
            statCount: 4,
        },

        // Construction
        construction: {
            showHeader: true,
            showStats: true,
            showCards: true,
            showCta: true,
            cardType: 'feature',
            cardCount: 6,
            statCount: 4,
        },
    };

    // Get config for specific type or use default
    const typeConfig = typeConfigs[type] || {
        showHeader: true,
        showStats: true,
        showCards: true,
        showCta: true,
        cardType: 'feature',
        cardCount: 6,
        statCount: 4,
    };

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

    // Industry sections
    eCommerceAndRetail: SectionSkeleton,
    manufacturing: SectionSkeleton,
    healthcareAndPharmaceuticals: SectionSkeleton,
    foodAndBeverage: SectionSkeleton,
    automotive: SectionSkeleton,
    electronics: SectionSkeleton,
    fashionAndApparel: SectionSkeleton,
    wholesaleAndDistribution: SectionSkeleton,
    thirdPartyLogistics: SectionSkeleton,
    construction: SectionSkeleton,
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
