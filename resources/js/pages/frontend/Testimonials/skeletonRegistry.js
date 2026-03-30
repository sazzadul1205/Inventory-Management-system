// page/frontend/Testimonials/skeletonRegistry.js

import SectionSkeleton from '@/components/SectionSkeleton';

/**
 * Skeleton Registry for Testimonials Page
 * Maps section types to their appropriate skeleton configurations
 */

// Helper function to get skeleton props based on section type and variant
export const getSkeletonProps = (type, config = {}) => {
    const baseProps = {
        showHeader: true,
        showCta: true,
        className: '',
    };

    // Type-specific skeleton configurations for Testimonials page
    const typeConfigs = {
        // Customer Reviews section
        customerReviews: {
            showHeader: true,
            showStats: true,
            showMetrics: true,
            showCards: true,
            showCta: true,
            cardType: 'feature',
            cardCount: 6,
            statCount: 3,
            metricCount: 4,
            headerOptions: {
                showBadge: true,
                showTitle: true,
                showDescription: true,
            },
        },

        // Video Testimonials section
        videoTestimonials: {
            showHeader: true,
            showStats: true,
            showMetrics: true,
            showCards: true,
            showCta: true,
            cardType: 'feature',
            cardCount: 6,
            statCount: 4,
            metricCount: 4,
            headerOptions: {
                showBadge: true,
                showTitle: true,
                showDescription: true,
            },
        },

        // Written Testimonials section
        writtenTestimonials: {
            showHeader: true,
            showStats: true,
            showMetrics: true,
            showCards: true,
            showCta: true,
            cardType: 'feature',
            cardCount: 6,
            statCount: 4,
            metricCount: 4,
            headerOptions: {
                showBadge: true,
                showTitle: true,
                showDescription: true,
            },
        },

        // Industry Expert Reviews section
        industryExpertReviews: {
            showHeader: true,
            showStats: true,
            showMetrics: true,
            showCards: true,
            showCta: true,
            cardType: 'minimal',
            cardCount: 6,
            statCount: 4,
            metricCount: 4,
            headerOptions: {
                showBadge: true,
                showTitle: true,
                showDescription: true,
            },
        },

        // Partner Testimonials section
        partnerTestimonials: {
            showHeader: true,
            showStats: true,
            showMetrics: true,
            showCards: true,
            showCta: true,
            cardType: 'feature',
            cardCount: 6,
            statCount: 4,
            metricCount: 4,
            headerOptions: {
                showBadge: true,
                showTitle: true,
                showDescription: true,
            },
        },

        // Rating & Awards section
        ratingAndAwards: {
            showHeader: true,
            showStats: true,
            showMetrics: true,
            showCards: true,
            showCta: true,
            cardType: 'minimal',
            cardCount: 6,
            statCount: 4,
            metricCount: 4,
            headerOptions: {
                showBadge: true,
                showTitle: true,
                showDescription: true,
            },
        },
    };

    // Get config for specific type or use customerReviews as default
    const typeConfig = typeConfigs[type] || typeConfigs.customerReviews;

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

    // Testimonials sections
    customerReviews: SectionSkeleton,
    videoTestimonials: SectionSkeleton,
    writtenTestimonials: SectionSkeleton,
    industryExpertReviews: SectionSkeleton,
    partnerTestimonials: SectionSkeleton,
    ratingAndAwards: SectionSkeleton,
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
