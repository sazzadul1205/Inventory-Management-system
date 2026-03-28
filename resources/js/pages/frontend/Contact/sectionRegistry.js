// page/frontend/Contact/sectionRegistry.js

// React
import { lazy } from 'react';

// Components Registry
export const sectionRegistry = {
    // contactForm
    contactForm: {
        variant1: lazy(() => import('./ContactFormSection/ContactFormSection1')),
        variant2: lazy(() => import('./ContactFormSection/ContactFormSection2')),
        variant3: lazy(() => import('./ContactFormSection/ContactFormSection3')),
    },

    // salesInquiries
    salesInquiries: {
        variant1: lazy(() => import('./SalesInquiriesSection/SalesInquiriesSection1')),
        variant2: lazy(() => import('./SalesInquiriesSection/SalesInquiriesSection2')),
        variant3: lazy(() => import('./SalesInquiriesSection/SalesInquiriesSection3')),
    },
   
    // supportRequests
    supportRequests: {
        variant1: lazy(() => import('./SupportRequestsSection/SupportRequestsSection1')),
        variant2: lazy(() => import('./SupportRequestsSection/SupportRequestsSection2')),
        variant3: lazy(() => import('./SupportRequestsSection/SupportRequestsSection3')),
    },

    // partnerInquiries
    partnerInquiries: {
        variant1: lazy(() => import('./PartnerInquiriesSection/PartnerInquiriesSection1')),
        variant2: lazy(() => import('./PartnerInquiriesSection/PartnerInquiriesSection2')),
        variant3: lazy(() => import('./PartnerInquiriesSection/PartnerInquiriesSection3')),
    },

    // officeLocations
    officeLocations: {
        variant1: lazy(() => import('./OfficeLocationsSection/OfficeLocationsSection1')),
        variant2: lazy(() => import('./OfficeLocationsSection/OfficeLocationsSection2')),
        variant3: lazy(() => import('./OfficeLocationsSection/OfficeLocationsSection3')),
    },

    // phoneNumbers
    phoneNumbers: {
        variant1: lazy(() => import('./PhoneNumbersSection/PhoneNumbersSection1')),
        variant2: lazy(() => import('./PhoneNumbersSection/PhoneNumbersSection2')),
        variant3: lazy(() => import('./PhoneNumbersSection/PhoneNumbersSection3')),
    },

    // emailAddresses
    emailAddresses: {
        variant1: lazy(() => import('./EmailAddressesSection/EmailAddressesSection1')),
        variant2: lazy(() => import('./EmailAddressesSection/EmailAddressesSection2')),
        variant3: lazy(() => import('./EmailAddressesSection/EmailAddressesSection3')),
    },

    // liveChatOption
    liveChatOption: {
        variant1: lazy(() => import('./LiveChatOptionSection/LiveChatOptionSection1')),
        variant2: lazy(() => import('./LiveChatOptionSection/LiveChatOptionSection2')),
        variant3: lazy(() => import('./LiveChatOptionSection/LiveChatOptionSection3')),
    },
};
