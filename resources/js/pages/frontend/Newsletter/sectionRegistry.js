// page/frontend/Newsletter/sectionRegistry.js

// React
import { lazy } from 'react';

// Components Registry
export const sectionRegistry = {
    // subscribeForm
    subscribeForm: {
        variant1: lazy(() => import('./SubscribeFormSection/SubscribeFormSection1.jsx')),
        variant2: lazy(() => import('./SubscribeFormSection/SubscribeFormSection2.jsx')),
        variant3: lazy(() => import('./SubscribeFormSection/SubscribeFormSection3.jsx')),
    },

    // newsletterArchive
    newsletterArchive: {
        variant1: lazy(() => import('./NewsletterArchiveSection/NewsletterArchiveSection1.jsx')),
        variant2: lazy(() => import('./NewsletterArchiveSection/NewsletterArchiveSection2.jsx')),
        variant3: lazy(() => import('./NewsletterArchiveSection/NewsletterArchiveSection3.jsx')),
    },

    // contentPreview
    contentPreview: {
        variant1: lazy(() => import('./ContentPreviewSection/ContentPreviewSection1.jsx')),
        variant2: lazy(() => import('./ContentPreviewSection/ContentPreviewSection2.jsx')),
        variant3: lazy(() => import('./ContentPreviewSection/ContentPreviewSection3.jsx')),
    },

    // subscriptionBenefits
    subscriptionBenefits: {
        variant1: lazy(() => import('./SubscriptionBenefitsSection/SubscriptionBenefitsSection1.jsx')),
        variant2: lazy(() => import('./SubscriptionBenefitsSection/SubscriptionBenefitsSection2.jsx')),
        variant3: lazy(() => import('./SubscriptionBenefitsSection/SubscriptionBenefitsSection3.jsx')),
    },

    // unsubscribeOptions
    unsubscribeOptions: {
        variant1: lazy(() => import('./UnsubscribeOptionSection/UnsubscribeOptionSection1.jsx')),
        variant2: lazy(() => import('./UnsubscribeOptionSection/UnsubscribeOptionSection2.jsx')),
        variant3: lazy(() => import('./UnsubscribeOptionSection/UnsubscribeOptionSection3.jsx')),
    },

    // emailPreferences
    emailPreferences: {
        variant1: lazy(() => import('./EmailPreferencesSection/EmailPreferencesSection1.jsx')),
        variant2: lazy(() => import('./EmailPreferencesSection/EmailPreferencesSection2.jsx')),
        variant3: lazy(() => import('./EmailPreferencesSection/EmailPreferencesSection3.jsx')),
    },
};
