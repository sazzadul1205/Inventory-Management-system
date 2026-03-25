// page/frontend/HowItWorks/skeletonRegistry.js

import SectionSkeleton from '@/components/SectionSkeleton';

/**
 * Skeleton Registry for How It Works Page
 * Maps section types to their appropriate skeleton configurations
 */

// Helper function to get skeleton props based on section type and variant
export const getSkeletonProps = (type, variant = 'default', config = {}) => {
    const baseProps = {
        showHeader: true,
        showCta: true,
        className: '',
    };

    // Type-specific skeleton configurations for How It Works page
    const typeConfigs = {
        // Step-by-Step Process Section
        stepByStepProcess: {
            showHeader: true,
            showStats: false,
            showCards: true,
            showProcess: false,
            showCta: true,
            cardType: 'feature',
            cardCount: 4,
            headerOptions: {
                showBadge: true,
                showTitle: true,
                showDescription: true,
            },
        },

        // Onboarding Guide Section
        onboardingGuide: {
            showHeader: true,
            showStats: false,
            showCards: false,
            showProcess: false,
            showTechnology: false,
            showIndustries: false,
            showIntegration: false,
            showCta: true,
            headerOptions: {
                showBadge: true,
                showTitle: true,
                showDescription: true,
            },
        },

        // Implementation Timeline Section
        implementationTimeline: {
            showHeader: true,
            showStats: true,
            showCards: false,
            showProcess: true,
            showCta: true,
            cardType: 'feature',
            statCount: 3,
            processCount: 5,
            headerOptions: {
                showBadge: true,
                showTitle: true,
                showDescription: true,
            },
        },

        // Training & Support Section
        trainingAndSupport: {
            showHeader: true,
            showStats: true,
            showCards: true,
            showCta: true,
            cardType: 'feature',
            cardCount: 4,
            statCount: 4,
            headerOptions: {
                showBadge: true,
                showTitle: true,
                showDescription: true,
            },
        },

        // Success Metrics Section
        successMetrics: {
            showHeader: true,
            showStats: true,
            showMetrics: true,
            showCards: false,
            showCta: true,
            metricCount: 4,
            statCount: 4,
            headerOptions: {
                showBadge: true,
                showTitle: true,
                showDescription: true,
            },
        },

        // Case Studies Section
        caseStudies: {
            showHeader: true,
            showStats: true,
            showCards: true,
            showCta: true,
            cardType: 'service',
            cardCount: 6,
            statCount: 3,
            headerOptions: {
                showBadge: true,
                showTitle: true,
                showDescription: true,
            },
        },
    };

    // Get config for specific type or use stepByStepProcess as default
    const typeConfig = typeConfigs[type] || typeConfigs.stepByStepProcess;

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

    // How It Works sections
    stepByStepProcess: SectionSkeleton,
    onboardingGuide: SectionSkeleton,
    implementationTimeline: SectionSkeleton,
    trainingAndSupport: SectionSkeleton,
    successMetrics: SectionSkeleton,
    caseStudies: SectionSkeleton,
};

// Helper to get skeleton for a specific section type
export const getSkeletonForType = (type) => {
    return skeletonRegistry[type] || skeletonRegistry.default;
};

// Helper to check if a section type has a custom skeleton configuration
export const hasCustomSkeleton = (type) => {
    return type in skeletonRegistry && type !== 'default';
};

// Export skeleton preset configurations for manual usage
export const skeletonPresets = {
    // For sections with cards (process steps, features)
    cardGrid: {
        showHeader: true,
        showCards: true,
        cardType: 'feature',
        cardCount: 4,
        showCta: true,
    },

    // For sections with stats and metrics
    statsAndMetrics: {
        showHeader: true,
        showStats: true,
        showMetrics: true,
        statCount: 4,
        metricCount: 4,
        showCta: true,
    },

    // For sections with process flow
    processFlow: {
        showHeader: true,
        showProcess: true,
        processCount: 5,
        showCta: true,
    },

    // For sections with technology/industry grids
    techGrid: {
        showHeader: true,
        showTechnology: true,
        showIndustries: true,
        techCount: 8,
        industryCount: 8,
        showCta: true,
    },

    // For sections with integration preview
    integrationPreview: {
        showHeader: true,
        showIntegration: true,
        showCta: true,
    },

    // Minimal skeleton (header only)
    minimal: {
        showHeader: true,
        showStats: false,
        showCards: false,
        showProcess: false,
        showTechnology: false,
        showIndustries: false,
        showIntegration: false,
        showCta: false,
    },

    // Full skeleton (all components)
    full: {
        showHeader: true,
        showStats: true,
        showMetrics: true,
        showCards: true,
        showProcess: true,
        showTechnology: true,
        showIndustries: true,
        showIntegration: true,
        showCta: true,
        cardType: 'service',
        cardCount: 6,
        statCount: 4,
        metricCount: 4,
        processCount: 4,
        techCount: 8,
        industryCount: 8,
    },
};

export default skeletonRegistry;
