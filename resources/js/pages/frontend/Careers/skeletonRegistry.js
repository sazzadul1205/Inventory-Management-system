// page/frontend/Features/skeletonRegistry.js

import SectionSkeleton from '@/components/SectionSkeleton';

/**
 * Skeleton Registry for Careers Page
 * Maps career section types to their appropriate skeleton configurations
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

    // Career-specific skeleton configurations
    const typeConfigs = {
        // Open Positions - Job listings with filters
        openPositions: {
            showHeader: true,
            showStats: false,
            showCards: true,
            showCta: true,
            cardType: 'job',
            cardCount: 6,
            showFilters: true,
            showSearch: true,
        },

        // Company Culture - Values and culture cards
        companyCulture: {
            showHeader: true,
            showStats: true,
            showCards: true,
            showCta: true,
            cardType: 'culture',
            cardCount: 4,
            statCount: 4,
            showValues: true,
        },

        // Benefits & Perks - Benefits showcase grid
        benefitsPerks: {
            showHeader: true,
            showStats: true,
            showCards: true,
            showCta: true,
            cardType: 'benefit',
            cardCount: 8,
            statCount: 3,
            showIcons: true,
        },

        // Life at Company - Gallery and employee stories
        lifeAtCompany: {
            showHeader: true,
            showStats: false,
            showCards: true,
            showCta: true,
            cardType: 'gallery',
            cardCount: 6,
            showGallery: true,
            showTestimonials: true,
        },

        // Internship Programs - Internship listings
        internshipPrograms: {
            showHeader: true,
            showStats: true,
            showCards: true,
            showCta: true,
            cardType: 'internship',
            cardCount: 4,
            statCount: 4,
            showPrograms: true,
        },

        // Remote Opportunities - Remote job listings
        remoteOpportunities: {
            showHeader: true,
            showStats: true,
            showCards: true,
            showCta: true,
            cardType: 'job',
            cardCount: 6,
            statCount: 3,
            showRemote: true,
            showLocations: false,
        },

        // Application Process - Step-by-step process
        applicationProcess: {
            showHeader: true,
            showStats: false,
            showCards: true,
            showCta: true,
            cardType: 'process',
            cardCount: 5,
            processCount: 5,
            showTimeline: true,
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

// Export skeleton registry mapping with all career sections
export const skeletonRegistry = {
    // Open Positions
    openPositions: SectionSkeleton,

    // Company Culture
    companyCulture: SectionSkeleton,

    // Benefits & Perks
    benefitsPerks: SectionSkeleton,

    // Life at Company
    lifeAtCompany: SectionSkeleton,

    // Internship Programs
    internshipPrograms: SectionSkeleton,

    // Remote Opportunities
    remoteOpportunities: SectionSkeleton,

    // Application Process
    applicationProcess: SectionSkeleton,

    // Default fallback
    default: SectionSkeleton,
};

// Helper to get skeleton for a specific career type
export const getSkeletonForType = (type) => {
    return skeletonRegistry[type] || skeletonRegistry.default;
};

// Helper to check if a career type has a custom skeleton configuration
export const hasCustomSkeleton = (type) => {
    return type in skeletonRegistry && type !== 'default';
};

// Helper to get all available career types
export const getAvailableCareerTypes = () => {
    return Object.keys(skeletonRegistry).filter((key) => key !== 'default');
};

export default skeletonRegistry;
