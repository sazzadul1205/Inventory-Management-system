// page/frontend/PricingPlans/sectionRegistry.js

// React
import { lazy } from 'react';

// Components Registry
export const sectionRegistry = {
    // subscribeForm
    subscribeForm: {
        variant1: lazy(() => import('./SubscribeFormSection/SubscribeFormSection1')),
        variant2: lazy(() => import('./SubscribeFormSection/SubscribeFormSection2')),
        variant3: lazy(() => import('./SubscribeFormSection/SubscribeFormSection3')),
    },

    // newsletterArchive
    newsletterArchive: {
        variant1: lazy(() => import('./NewsletterArchiveSection/NewsletterArchiveSection1')),
        variant2: lazy(() => import('./NewsletterArchiveSection/NewsletterArchiveSection2')),
        variant3: lazy(() => import('./NewsletterArchiveSection/NewsletterArchiveSection3')),
    },

    // contentPreview
    contentPreview: {
        variant1: lazy(() => import('./ContentPreviewSection/ContentPreviewSection1')),
        variant2: lazy(() => import('./ContentPreviewSection/ContentPreviewSection2')),
        variant3: lazy(() => import('./ContentPreviewSection/ContentPreviewSection3')),
    },

    // subscriptionBenefits
    subscriptionBenefits: {
        variant1: lazy(() => import('./SubscriptionBenefitsSection/SubscriptionBenefitsSection1')),
        variant2: lazy(() => import('./SubscriptionBenefitsSection/SubscriptionBenefitsSection2')),
        variant3: lazy(() => import('./SubscriptionBenefitsSection/SubscriptionBenefitsSection3')),
    },

    // unsubscribeOptions
    unsubscribeOptions: {
        variant1: lazy(() => import('./UnsubscribeOptionSection/UnsubscribeOptionSection1')),
        variant2: lazy(() => import('./UnsubscribeOptionSection/UnsubscribeOptionSection2')),
        variant3: lazy(() => import('./UnsubscribeOptionSection/UnsubscribeOptionSection3')),
    },

    // emailPreferences
    emailPreferences: {
        variant1: lazy(() => import('./EmailPreferencesSection/EmailPreferencesSection1')),
        variant2: lazy(() => import('./EmailPreferencesSection/EmailPreferencesSection2')),
        variant3: lazy(() => import('./EmailPreferencesSection/EmailPreferencesSection3')),
    },
};
