// page/frontend/News/sectionRegistry.js

// React
import { lazy } from 'react';

// Components Registry
export const sectionRegistry = {
    // allPagesIndex
    allPagesIndex: {
        variant1: lazy(() => import('./AllPagesIndexSection/AllPagesIndexSection1')),
        variant2: lazy(() => import('./AllPagesIndexSection/AllPagesIndexSection2')),
        variant3: lazy(() => import('./AllPagesIndexSection/AllPagesIndexSection3')),
    },

    // categoryLinks
    categoryLinks: {
        variant1: lazy(() => import('./CategoryLinksSection/CategoryLinksSection1')),
        variant2: lazy(() => import('./CategoryLinksSection/CategoryLinksSection2')),
        variant3: lazy(() => import('./CategoryLinksSection/CategoryLinksSection3')),
    },

    // resourceLinks
    resourceLinks: {
        variant1: lazy(() => import('./ResourceLinksSection/ResourceLinksSection1')),
        variant2: lazy(() => import('./ResourceLinksSection/ResourceLinksSection2')),
        variant3: lazy(() => import('./ResourceLinksSection/ResourceLinksSection3')),
    },

    // legalLinks
    legalLinks: {
        variant1: lazy(() => import('./LegalLinksSection/LegalLinksSection1')),
        variant2: lazy(() => import('./LegalLinksSection/LegalLinksSection2')),
        variant3: lazy(() => import('./LegalLinksSection/LegalLinksSection3')),
    },

    // socialMediaLinks
    socialMediaLinks: {
        variant1: lazy(() => import('./SocialMediaLinksSection/SocialMediaLinksSection1')),
        variant2: lazy(() => import('./SocialMediaLinksSection/SocialMediaLinksSection2')),
        variant3: lazy(() => import('./SocialMediaLinksSection/SocialMediaLinksSection3')),
    },
  
};
