// page/frontend/News/sectionRegistry.js

// React
import { lazy } from 'react';

// Components Registry
export const sectionRegistry = {
    // privacyPolicy
    privacyPolicy: {
        variant1: lazy(() => import('./PrivacyPolicySection/PrivacyPolicySection1')),
        variant2: lazy(() => import('./PrivacyPolicySection/PrivacyPolicySection2')),
        variant3: lazy(() => import('./PrivacyPolicySection/PrivacyPolicySection3')),
    },

    // termsOfService
    termsOfService: {
        variant1: lazy(() => import('./TermsOfServiceSection/TermsOfServiceSection1')),
        variant2: lazy(() => import('./TermsOfServiceSection/TermsOfServiceSection2')),
        variant3: lazy(() => import('./TermsOfServiceSection/TermsOfServiceSection3')),
    },

    // cookiePolicy
    cookiePolicy: {
        variant1: lazy(() => import('./CookiePolicySection/CookiePolicySection1')),
        variant2: lazy(() => import('./CookiePolicySection/CookiePolicySection2')),
        variant3: lazy(() => import('./CookiePolicySection/CookiePolicySection3')),
    },

    // gdprCompliance
    gdprCompliance: {
        variant1: lazy(() => import('./GDPRComplianceSection/GDPRComplianceSection1')),
        variant2: lazy(() => import('./GDPRComplianceSection/GDPRComplianceSection2')),
        variant3: lazy(() => import('./GDPRComplianceSection/GDPRComplianceSection3')),
    },

    // dataProcessingAgreement
    dataProcessingAgreement: {
        variant1: lazy(() => import('./DataProcessingAgreementSection/DataProcessingAgreementSection1')),
        variant2: lazy(() => import('./DataProcessingAgreementSection/DataProcessingAgreementSection2')),
        variant3: lazy(() => import('./DataProcessingAgreementSection/DataProcessingAgreementSection3')),
    },

    // securityPolicy
    securityPolicy: {
        variant1: lazy(() => import('./SecurityPolicySection/SecurityPolicySection1')),
        variant2: lazy(() => import('./SecurityPolicySection/SecurityPolicySection2')),
        variant3: lazy(() => import('./SecurityPolicySection/SecurityPolicySection3')),
    },

    // acceptableUsePolicy
    acceptableUsePolicy: {
        variant1: lazy(() => import('./AcceptableUsePolicySection/AcceptableUsePolicySection1')),
        variant2: lazy(() => import('./AcceptableUsePolicySection/AcceptableUsePolicySection2')),
        variant3: lazy(() => import('./AcceptableUsePolicySection/AcceptableUsePolicySection3')),
    },
};
