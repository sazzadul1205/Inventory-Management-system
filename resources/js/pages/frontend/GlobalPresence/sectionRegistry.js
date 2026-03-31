// page/frontend/Features/sectionRegistry.js

// React
import { lazy } from 'react';

// Components Registry
export const sectionRegistry = {
    // worldwideLocations
    worldwideLocations: {
        variant1: lazy(() => import('./WorldwideLocationsSection/WorldwideLocationsSection1')),
        variant2: lazy(() => import('./WorldwideLocationsSection/WorldwideLocationsSection2')),
        variant3: lazy(() => import('./WorldwideLocationsSection/WorldwideLocationsSection3')),
    },

    // regionalOffices
    regionalOffices: {
        variant1: lazy(() => import('./RegionalOfficesSection/RegionalOfficesSection1')),
        variant2: lazy(() => import('./RegionalOfficesSection/RegionalOfficesSection2')),
        variant3: lazy(() => import('./RegionalOfficesSection/RegionalOfficesSection3')),
    },

    // globalCoverageMap
    globalCoverageMap: {
        variant1: lazy(() => import('./GlobalCoverageMapSection/GlobalCoverageMapSection1')),
        variant2: lazy(() => import('./GlobalCoverageMapSection/GlobalCoverageMapSection2')),
        variant3: lazy(() => import('./GlobalCoverageMapSection/GlobalCoverageMapSection3')),
    },

    // localSupport
    localSupport: {
        variant1: lazy(() => import('./LocalSupportSection/LocalSupportSection1')),
        variant2: lazy(() => import('./LocalSupportSection/LocalSupportSection2')),
        variant3: lazy(() => import('./LocalSupportSection/LocalSupportSection3')),
    },

    // internationalClients
    internationalClients: {
        variant1: lazy(() => import('./InternationalClientsSection/InternationalClientsSection1')),
        variant2: lazy(() => import('./InternationalClientsSection/InternationalClientsSection2')),
        variant3: lazy(() => import('./InternationalClientsSection/InternationalClientsSection3')),
    },

    // languageSupport
    languageSupport: {
        variant1: lazy(() => import('./LanguageSupportSection/LanguageSupportSection1')),
        variant2: lazy(() => import('./LanguageSupportSection/LanguageSupportSection2')),
        variant3: lazy(() => import('./LanguageSupportSection/LanguageSupportSection3')),
    },

    // currencySupport
    currencySupport: {
        variant1: lazy(() => import('./CurrencySupportSection/CurrencySupportSection1')),
        variant2: lazy(() => import('./CurrencySupportSection/CurrencySupportSection2')),
        variant3: lazy(() => import('./CurrencySupportSection/CurrencySupportSection3')),
    },
};
