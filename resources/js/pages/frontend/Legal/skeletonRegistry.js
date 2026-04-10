// page/frontend/Legal/skeletonRegistry.js

import SectionSkeleton from '@/components/SectionSkeleton';

/**
 * Skeleton Registry for Legal Page
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

    // Type-specific skeleton configurations for Legal page
    const typeConfigs = {
        // Privacy Policy section - text-heavy legal document
        privacyPolicy: {
            showHeader: true,
            showCards: false,
            showContent: true,
            showCta: false,
            showLastUpdated: true,
            showTableOfContents: true,
            contentType: 'legal-document',
            sectionCount: 8,
        },

        // Terms of Service section - legal terms document
        termsOfService: {
            showHeader: true,
            showCards: false,
            showContent: true,
            showCta: false,
            showLastUpdated: true,
            showTableOfContents: true,
            contentType: 'legal-document',
            sectionCount: 10,
        },

        // Cookie Policy section - cookie information
        cookiePolicy: {
            showHeader: true,
            showCards: true,
            showContent: false,
            showCta: false,
            cardType: 'cookie-category',
            cardCount: 4,
            showCookieTable: true,
            gridCols: 2,
        },

        // GDPR Compliance section - compliance information
        gdprCompliance: {
            showHeader: true,
            showCards: true,
            showContent: false,
            showCta: true,
            cardType: 'compliance',
            cardCount: 6,
            gridCols: 3,
            showIcon: true,
            ctaLabel: 'Request Data',
        },

        // Data Processing Agreement section - DPA document
        dataProcessingAgreement: {
            showHeader: true,
            showCards: false,
            showContent: true,
            showCta: true,
            showLastUpdated: true,
            showTableOfContents: true,
            contentType: 'legal-document',
            sectionCount: 6,
            ctaLabel: 'Download DPA',
        },

        // Security Policy section - security practices
        securityPolicy: {
            showHeader: true,
            showCards: true,
            showStats: true,
            showCta: false,
            cardType: 'security-measure',
            cardCount: 6,
            gridCols: 3,
            statCount: 4,
            showCertifications: true,
        },

        // Acceptable Use Policy section - AUP document
        acceptableUsePolicy: {
            showHeader: true,
            showCards: false,
            showContent: true,
            showCta: false,
            showLastUpdated: true,
            showTableOfContents: true,
            contentType: 'legal-document',
            sectionCount: 5,
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
    privacyPolicy: SectionSkeleton,
    termsOfService: SectionSkeleton,
    cookiePolicy: SectionSkeleton,
    gdprCompliance: SectionSkeleton,
    dataProcessingAgreement: SectionSkeleton,
    securityPolicy: SectionSkeleton,
    acceptableUsePolicy: SectionSkeleton,

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
