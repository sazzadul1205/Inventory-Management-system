// page/frontend/PricingPlans/sectionRegistry.js

// React
import { lazy } from 'react';

// Components Registry
export const sectionRegistry = {
    // generalQuestions
    generalQuestions: {
        variant1: lazy(() => import('./GeneralQuestionsSection/GeneralQuestionsSection1')),
        variant2: lazy(() => import('./GeneralQuestionsSection/GeneralQuestionsSection2')),
        variant3: lazy(() => import('./GeneralQuestionsSection/GeneralQuestionsSection3')),
    },

    // billingPricing
    billingPricing: {
        variant1: lazy(() => import('./BillingPricingSection/BillingPricingSection1')),
        variant2: lazy(() => import('./BillingPricingSection/BillingPricingSection2')),
        variant3: lazy(() => import('./BillingPricingSection/BillingPricingSection3')),
    },

    // technicalSupport
    technicalSupport: {
        variant1: lazy(() => import('./TechnicalSupportSection/TechnicalSupportSection1')),
        variant2: lazy(() => import('./TechnicalSupportSection/TechnicalSupportSection2')),
        variant3: lazy(() => import('./TechnicalSupportSection/TechnicalSupportSection3')),
    },

    // implementation
    implementation: {
        variant1: lazy(() => import('./ImplementationSection/ImplementationSection1')),
        variant2: lazy(() => import('./ImplementationSection/ImplementationSection2')),
        variant3: lazy(() => import('./ImplementationSection/ImplementationSection3')),
    },

    // integrationsFAQ
    integrationsFAQ: {
        variant1: lazy(() => import('./IntegrationsSection/IntegrationsSection1')),
        variant2: lazy(() => import('./IntegrationsSection/IntegrationsSection2')),
        variant3: lazy(() => import('./IntegrationsSection/IntegrationsSection3')),
    },

    // dataSecurity
    dataSecurity: {
        variant1: lazy(() => import('./DataSecuritySection/DataSecuritySection1')),
        variant2: lazy(() => import('./DataSecuritySection/DataSecuritySection2')),
        variant3: lazy(() => import('./DataSecuritySection/DataSecuritySection3')),
    },

    // accountManagement
    accountManagement: {
        variant1: lazy(() => import('./AccountManagementSection/AccountManagementSection1')),
        variant2: lazy(() => import('./AccountManagementSection/AccountManagementSection2')),
        variant3: lazy(() => import('./AccountManagementSection/AccountManagementSection3')),
    }
};
