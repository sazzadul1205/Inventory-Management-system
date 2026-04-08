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
        // Subscribe Form - Email subscription form
        subscribeForm: {
            showHeader: true,
            showStats: false,
            showCards: false,
            showCta: true,
            cardType: 'form',
            cardCount: 0,
            showForm: true,
            formFields: 3,
        },

        // Newsletter Archive - Past newsletter listings
        newsletterArchive: {
            showHeader: true,
            showStats: false,
            showCards: true,
            showCta: true,
            cardType: 'archive',
            cardCount: 8,
            showArchive: true,
            showFilters: true,
        },

        // Content Preview - Article/news content previews
        contentPreview: {
            showHeader: true,
            showStats: false,
            showCards: true,
            showCta: true,
            cardType: 'article',
            cardCount: 6,
            showImages: true,
            showDates: true,
        },

        // Subscription Benefits - Benefits of subscribing
        subscriptionBenefits: {
            showHeader: true,
            showStats: true,
            showCards: true,
            showCta: true,
            cardType: 'benefit',
            cardCount: 4,
            statCount: 4,
            showIcons: true,
        },

        // Unsubscribe Option - Unsubscribe management
        unsubscribeOption: {
            showHeader: true,
            showStats: false,
            showCards: false,
            showCta: true,
            cardType: 'form',
            cardCount: 0,
            showForm: true,
            formFields: 2,
            showConfirmation: true,
        },

        // Email Preferences - Email preference management
        emailPreferences: {
            showHeader: true,
            showStats: false,
            showCards: false,
            showCta: true,
            cardType: 'preferences',
            cardCount: 0,
            showForm: true,
            showCheckboxes: true,
            preferenceCount: 5,
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
    // Subscribe Form
    subscribeForm: SectionSkeleton,

    // Newsletter Archive
    newsletterArchive: SectionSkeleton,

    // Content Preview
    contentPreview: SectionSkeleton,

    // Subscription Benefits
    subscriptionBenefits: SectionSkeleton,

    // Unsubscribe Option
    unsubscribeOption: SectionSkeleton,

    // Email Preferences
    emailPreferences: SectionSkeleton,

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
