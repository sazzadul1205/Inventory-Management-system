// page/frontend/Sitemap/skeletonRegistry.js

import SectionSkeleton from '@/components/SectionSkeleton';

/**
 * Skeleton Registry for Sitemap Page
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

    // Type-specific skeleton configurations for Sitemap page
    const typeConfigs = {
        // All Pages Index section - complete alphabetical page listing
        allPagesIndex: {
            showHeader: true,
            showCards: false,
            showLinkList: true,
            showCta: false,
            listStyle: 'alphabetical',
            columnCount: 3,
            linkCount: 50,
            showGroupHeaders: true,
        },

        // Category Links section - links grouped by categories
        categoryLinks: {
            showHeader: true,
            showCards: true,
            showCta: false,
            cardType: 'category',
            cardCount: 8,
            gridCols: 4,
            showLinkCount: true,
            showNestedLinks: true,
        },

        // Resource Links section - resources and downloads
        resourceLinks: {
            showHeader: true,
            showCards: true,
            showCta: true,
            cardType: 'resource',
            cardCount: 6,
            gridCols: 3,
            showFileType: true,
            showDownloadIcon: true,
            ctaLabel: 'Browse All Resources',
        },

        // Legal Links section - legal and policy pages
        legalLinks: {
            showHeader: true,
            showCards: false,
            showLinkList: true,
            showCta: false,
            listStyle: 'simple',
            columnCount: 2,
            linkCount: 7,
            showLastUpdated: true,
        },

        // Social Media Links section - social platform links
        socialMediaLinks: {
            showHeader: true,
            showCards: true,
            showCta: true,
            cardType: 'social',
            cardCount: 6,
            gridCols: 3,
            showIcon: true,
            showHandle: true,
            ctaLabel: 'Follow Us',
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
    allPagesIndex: SectionSkeleton,
    categoryLinks: SectionSkeleton,
    resourceLinks: SectionSkeleton,
    legalLinks: SectionSkeleton,
    socialMediaLinks: SectionSkeleton,

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
