// page/frontend/Features/sectionRegistry.js

// React
import { lazy } from 'react';

// Components Registry
export const sectionRegistry = {
    // securityCertifications
    securityCertifications: {
        variant1: lazy(() => import('./SecurityCertificationsSection/SecurityCertificationsSection1'),),
        variant2: lazy(() => import('./SecurityCertificationsSection/SecurityCertificationsSection2'),),
        variant3: lazy(() => import('./SecurityCertificationsSection/SecurityCertificationsSection3'),),
    },

    // dataProtection
    dataProtection: {
        variant1: lazy(() => import('./DataProtectionSection/DataProtectionSection1')),
        variant2: lazy(() => import('./DataProtectionSection/DataProtectionSection2')),
        variant3: lazy(() => import('./DataProtectionSection/DataProtectionSection3')),
    },

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

    // complianceStandards
    complianceStandards: {
        variant1: lazy(() => import('./ComplianceStandardsSection/ComplianceStandardsSection1')),
        variant2: lazy(() => import('./ComplianceStandardsSection/ComplianceStandardsSection2')),
        variant3: lazy(() => import('./ComplianceStandardsSection/ComplianceStandardsSection3')),
    },

    // gdprCompliance
    gdprCompliance: {
        variant1: lazy(() => import('./GDPRComplianceSection/GDPRComplianceSection1')),
        variant2: lazy(() => import('./GDPRComplianceSection/GDPRComplianceSection2')),
        variant3: lazy(() => import('./GDPRComplianceSection/GDPRComplianceSection3')),
    },

    // soc2TypeII
    soc2TypeII: {
        variant1: lazy(() => import('./SOC2TypeSection/SOC2TypeSection1')),
        variant2: lazy(() => import('./SOC2TypeSection/SOC2TypeSection2')),
        variant3: lazy(() => import('./SOC2TypeSection/SOC2TypeSection3')),
    },

    // isoCertifications
    isoCertifications: {
        variant1: lazy(() => import('./ISOCertificationsSection/ISOCertificationsSection1')),
        variant2: lazy(() => import('./ISOCertificationsSection/ISOCertificationsSection2')),
        variant3: lazy(() => import('./ISOCertificationsSection/ISOCertificationsSection3')),
    },
};
