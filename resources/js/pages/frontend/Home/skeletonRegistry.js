// page/frontend/Home/skeletonRegistry.js

import SectionSkeleton from '@/components/SectionSkeleton';

/**
 * Skeleton Registry - Maps section types to their appropriate skeleton variants
 * This allows different sections to have different skeleton appearances
 */

// Helper function to get skeleton props based on section type and variant
export const getSkeletonProps = (type, config = {}) => {
    const baseProps = {
        showHeader: true,
        showCta: true,
        className: '',
    };

    // Type-specific skeleton configurations
    const typeConfigs = {
        // Service sections
        services: {
            showHeader: true,
            showStats: false,
            showCards: true,
            showCta: true,
            cardType: 'service',
            cardCount: 6,
        },

        // Custom Solutions section
        customSolutions: {
            showHeader: true,
            showStats: true,
            showCards: true,
            showIntegration: true,
            showProcess: true,
            showTechnology: true,
            showCta: true,
            cardType: 'feature',
            cardCount: 6,
            statCount: 4,
            processCount: 4,
            techCount: 8,
        },

        // Order Fulfillment section
        orderFulfillment: {
            showHeader: true,
            showStats: true,
            showCards: true,
            showCta: true,
            cardType: 'feature',
            cardCount: 6,
            statCount: 4,
        },

        // Returns Management section
        returnsManagement: {
            showHeader: true,
            showStats: true,
            showProcess: true,
            showCards: true,
            showCta: true,
            cardType: 'feature',
            cardCount: 6,
            processCount: 4,
            statCount: 4,
        },

        // Supply Chain Consulting section
        supplyChainConsulting: {
            showHeader: true,
            showCards: true,
            showProcess: true,
            showIndustries: true,
            showCta: false,
            cardType: 'feature',
            cardCount: 3,
            processCount: 4,
            industryCount: 8,
        },

        // Transportation Management section
        transportationManagement: {
            showHeader: true,
            showStats: true,
            showCards: true,
            showCta: true,
            cardType: 'feature',
            cardCount: 6,
            statCount: 4,
        },

        // Warehouse Management section
        warehouseManagement: {
            showHeader: true,
            showCards: true,
            showMetrics: true,
            showTechnology: true,
            showCta: true,
            cardType: 'feature',
            cardCount: 4,
            metricCount: 4,
            techCount: 4,
        },

        // Hero section (minimal skeleton)
        hero: {
            showHeader: true,
            showCards: false,
            showCta: false,
            headerOptions: {
                showBadge: true,
                showTitle: true,
                showDescription: true,
            },
        },

        // Features section
        features: {
            showHeader: true,
            showCards: true,
            showCta: false,
            cardType: 'feature',
            cardCount: 6,
        },

        // Testimonials section
        testimonials: {
            showHeader: true,
            showCards: true,
            showCta: false,
            cardType: 'minimal',
            cardCount: 3,
        },

        // Industries section
        industries: {
            showHeader: true,
            showIndustries: true,
            showCards: false,
            showCta: false,
            industryCount: 8,
        },

        // Partners section
        partner: {
            showHeader: true,
            showIndustries: true,
            showCards: false,
            showCta: false,
            industryCount: 6,
        },

        // Pricing section
        pricingPlans: {
            showHeader: true,
            showCards: true,
            showCta: false,
            cardType: 'feature',
            cardCount: 3,
        },

        // FAQ section
        faq: {
            showHeader: true,
            showCards: true,
            showCta: false,
            cardType: 'minimal',
            cardCount: 4,
        },

        // Blog/News section
        news: {
            showHeader: true,
            showCards: true,
            showCta: false,
            cardType: 'service',
            cardCount: 3,
        },

        // Contact section
        contact: {
            showHeader: true,
            showCards: false,
            showCta: false,
            headerOptions: {
                showBadge: true,
                showTitle: true,
                showDescription: true,
            },
        },

        // About Us section
        aboutUs: {
            showHeader: true,
            showCards: false,
            showCta: false,
            headerOptions: {
                showBadge: true,
                showTitle: true,
                showDescription: true,
            },
        },

        // Why Choose Us section
        whyChooseUs: {
            showHeader: true,
            showCards: true,
            showCta: false,
            cardType: 'feature',
            cardCount: 4,
        },

        // Integrations section
        integrations: {
            showHeader: true,
            showTechnology: true,
            showCards: false,
            showCta: false,
            techCount: 8,
        },

        // Global Presence section
        globalPresence: {
            showHeader: true,
            showCards: true,
            showCta: false,
            cardType: 'minimal',
            cardCount: 6,
        },

        // Success Stories section
        successStories: {
            showHeader: true,
            showCards: true,
            showCta: false,
            cardType: 'service',
            cardCount: 3,
        },

        // Trust Signals section
        trustSignal: {
            showHeader: true,
            showStats: true,
            showCards: false,
            showCta: false,
            statCount: 4,
        },

        // Newsletter section
        newsletter: {
            showHeader: true,
            showCta: true,
            showCards: false,
            headerOptions: {
                showBadge: true,
                showTitle: true,
                showDescription: true,
            },
        },

        // Mobile App section
        mobileApp: {
            showHeader: true,
            showCards: true,
            showCta: false,
            cardType: 'feature',
            cardCount: 2,
        },

        // Event section
        event: {
            showHeader: true,
            showCards: true,
            showCta: false,
            cardType: 'service',
            cardCount: 3,
        },

        // Career section
        career: {
            showHeader: true,
            showCards: true,
            showCta: true,
            cardType: 'feature',
            cardCount: 4,
        },

        // How It Works section
        howItWorks: {
            showHeader: true,
            showProcess: true,
            showCards: false,
            showCta: false,
            processCount: 4,
        },
    };

    // Get config for specific type or use default
    const typeConfig = typeConfigs[type] || typeConfigs.services;

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
    // Main sections
    default: SectionSkeleton,

    // Service sections
    services: SectionSkeleton,
    customSolutions: SectionSkeleton,
    orderFulfillment: SectionSkeleton,
    returnsManagement: SectionSkeleton,
    supplyChainConsulting: SectionSkeleton,
    transportationManagement: SectionSkeleton,
    warehouseManagement: SectionSkeleton,

    // Content sections
    hero: SectionSkeleton,
    features: SectionSkeleton,
    howItWorks: SectionSkeleton,
    industries: SectionSkeleton,
    successStories: SectionSkeleton,
    testimonials: SectionSkeleton,
    pricingPlans: SectionSkeleton,
    faq: SectionSkeleton,
    contact: SectionSkeleton,
    aboutUs: SectionSkeleton,
    whyChooseUs: SectionSkeleton,
    integrations: SectionSkeleton,
    news: SectionSkeleton,
    blog: SectionSkeleton,
    partner: SectionSkeleton,
    globalPresence: SectionSkeleton,
    career: SectionSkeleton,
    trustSignal: SectionSkeleton,
    newsletter: SectionSkeleton,
    mobileApp: SectionSkeleton,
    event: SectionSkeleton,
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
