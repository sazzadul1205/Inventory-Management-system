// page/frontend/Partners/skeletonRegistry.js

import SectionSkeleton from '@/components/SectionSkeleton';

/**
 * Skeleton Registry for Partners Page
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

    // Type-specific skeleton configurations for Partners page
    const typeConfigs = {
        // Partner Program Overview - Shows program benefits and partner tiers
        partnerProgramOverview: {
            showHeader: true,
            showStats: true,
            showCards: true,
            showCta: true,
            cardType: 'service',
            cardCount: 4,
            statCount: 4,
        },

        // Technology Partners - Shows tech partner cards with integration info
        technologyPartners: {
            showHeader: true,
            showStats: true,
            showCards: true,
            showCta: true,
            cardType: 'technology',
            cardCount: 6,
            statCount: 4,
        },

        // Solution Partners - Shows solution partner cards with industry focus
        solutionPartners: {
            showHeader: true,
            showStats: true,
            showCards: true,
            showCta: true,
            cardType: 'service',
            cardCount: 6,
            statCount: 4,
        },

        // Integration Partners - Shows integration partner cards with API info
        integrationPartners: {
            showHeader: true,
            showStats: true,
            showCards: true,
            showCta: true,
            cardType: 'technology',
            cardCount: 6,
            statCount: 4,
        },

        // Become a Partner - Shows application form skeleton
        becomeAPartner: {
            showHeader: true,
            showStats: true,
            showCards: true,
            showCta: true,
            cardType: 'feature',
            cardCount: 4,
            statCount: 4,
        },

        // Partner Resources - Shows resource cards with download info
        partnerResources: {
            showHeader: true,
            showStats: true,
            showCards: true,
            showCta: true,
            cardType: 'service',
            cardCount: 6,
            statCount: 4,
        },

        // Partner Directory - Shows partner directory cards with search
        partnerDirectory: {
            showHeader: true,
            showStats: true,
            showCards: true,
            showCta: true,
            cardType: 'industry',
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
    // Partner Program Overview
    partnerProgramOverview: SectionSkeleton,

    // Technology Partners
    technologyPartners: SectionSkeleton,

    // Solution Partners
    solutionPartners: SectionSkeleton,

    // Integration Partners
    integrationPartners: SectionSkeleton,

    // Become a Partner
    becomeAPartner: SectionSkeleton,

    // Partner Resources
    partnerResources: SectionSkeleton,

    // Partner Directory
    partnerDirectory: SectionSkeleton,

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
