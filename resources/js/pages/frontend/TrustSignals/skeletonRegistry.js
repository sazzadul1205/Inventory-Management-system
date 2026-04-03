// page/frontend/TrustSignals/skeletonRegistry.js

import SectionSkeleton from '@/components/SectionSkeleton';

/**
 * Skeleton Registry for Trust Signals Page
 */

// Helper function
export const getSkeletonProps = (type, config = {}) => {
    const baseProps = {
        showHeader: true,
        showCta: false,
        className: '',
        cardCount: 4,
        statCount: 3,
    };

    const typeConfigs = {

        // Security Certifications
        securityCertifications: {
            showHeader: true,
            showCards: true,
            cardType: 'certification',
            cardCount: 4,
            showIcons: true,
        },

        // Data Protection
        dataProtection: {
            showHeader: true,
            showStats: true,
            showCards: true,
            cardType: 'security',
            statCount: 3,
            cardCount: 3,
        },

        // Privacy Policy
        privacyPolicy: {
            showHeader: true,
            showCards: true,
            cardType: 'text',
            cardCount: 2,
            showParagraphs: true,
        },

        // Terms of Service
        termsOfService: {
            showHeader: true,
            showCards: true,
            cardType: 'text',
            cardCount: 2,
            showParagraphs: true,
        },

        // Compliance Standards
        complianceStandards: {
            showHeader: true,
            showCards: true,
            cardType: 'compliance',
            cardCount: 5,
            showBadges: true,
        },

        // GDPR Compliance
        gdprCompliance: {
            showHeader: true,
            showStats: true,
            showCards: true,
            cardType: 'compliance',
            statCount: 3,
            cardCount: 3,
        },

        // SOC 2 Type II
        soc2TypeII: {
            showHeader: true,
            showCards: true,
            cardType: 'audit',
            cardCount: 3,
            showReport: true,
        },

        // ISO Certifications
        isoCertifications: {
            showHeader: true,
            showCards: true,
            cardType: 'certification',
            cardCount: 4,
            showBadges: true,
        },

        // Default fallback
        default: {
            showHeader: true,
            showCards: true,
            cardType: 'default',
            cardCount: 3,
        },
    };

    const typeConfig = typeConfigs[type] || typeConfigs.default;

    return {
        ...baseProps,
        ...typeConfig,
        ...(config?.skeleton || {}),
        variant: type,
    };
};


// Registry mapping
export const skeletonRegistry = {
    securityCertifications: SectionSkeleton,
    dataProtection: SectionSkeleton,
    privacyPolicy: SectionSkeleton,
    termsOfService: SectionSkeleton,
    complianceStandards: SectionSkeleton,
    gdprCompliance: SectionSkeleton,
    soc2TypeII: SectionSkeleton,
    isoCertifications: SectionSkeleton,

    default: SectionSkeleton,
};


// Helpers
export const getSkeletonForType = (type) => {
    return skeletonRegistry[type] || skeletonRegistry.default;
};

export const hasCustomSkeleton = (type) => {
    return type in skeletonRegistry && type !== 'default';
};

export const getAvailableTypes = () => {
    return Object.keys(skeletonRegistry).filter((key) => key !== 'default');
};

export default skeletonRegistry;