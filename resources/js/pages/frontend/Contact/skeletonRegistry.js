// page/frontend/Contact/skeletonRegistry.js

import SectionSkeleton from '@/components/SectionSkeleton';

/**
 * Skeleton Registry for Contact Page
 * Maps section types to their appropriate skeleton configurations
 */

// Helper function to get skeleton props based on section type and variant
export const getSkeletonProps = (type, config = {}) => {
    const baseProps = {
        showHeader: true,
        showCta: true,
        className: '',
    };

    // Type-specific skeleton configurations for Contact page
    const typeConfigs = {
        // Contact Form Section
        contactForm: {
            showHeader: true,
            showStats: true,
            showCards: true,
            showCta: true,
            cardType: 'feature',
            cardCount: 3,
            statCount: 4,
        },

        // Sales Inquiries Section
        salesInquiries: {
            showHeader: true,
            showStats: true,
            showCards: true,
            showCta: true,
            cardType: 'feature',
            cardCount: 3,
            statCount: 4,
        },

        // Support Requests Section
        supportRequests: {
            showHeader: true,
            showStats: true,
            showCards: true,
            showCta: true,
            cardType: 'feature',
            cardCount: 3,
            statCount: 4,
        },

        // Partner Inquiries Section
        partnerInquiries: {
            showHeader: true,
            showStats: true,
            showCards: true,
            showCta: true,
            cardType: 'feature',
            cardCount: 3,
            statCount: 4,
        },

        // Office Locations Section
        officeLocations: {
            showHeader: true,
            showStats: true,
            showCards: true,
            showCta: true,
            showMetrics: true,
            cardType: 'industry',
            cardCount: 3,
            statCount: 4,
            metricCount: 4,
        },

        // Phone Numbers Section
        phoneNumbers: {
            showHeader: true,
            showStats: true,
            showCards: true,
            showCta: true,
            cardType: 'minimal',
            cardCount: 3,
            statCount: 4,
        },

        // Email Addresses Section
        emailAddresses: {
            showHeader: true,
            showStats: true,
            showCards: true,
            showCta: true,
            cardType: 'minimal',
            cardCount: 3,
            statCount: 4,
        },

        // Live Chat Option Section
        liveChatOption: {
            showHeader: true,
            showStats: true,
            showCards: true,
            showCta: true,
            showProcess: true,
            cardType: 'feature',
            cardCount: 3,
            statCount: 4,
            processCount: 3,
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
    // Default fallback
    default: SectionSkeleton,

    // Contact section types
    contactForm: SectionSkeleton,
    salesInquiries: SectionSkeleton,
    supportRequests: SectionSkeleton,
    partnerInquiries: SectionSkeleton,
    officeLocations: SectionSkeleton,
    phoneNumbers: SectionSkeleton,
    emailAddresses: SectionSkeleton,
    liveChatOption: SectionSkeleton,
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
