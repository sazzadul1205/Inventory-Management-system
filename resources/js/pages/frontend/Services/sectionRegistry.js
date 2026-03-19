// page/frontend/Services/sectionRegistry.js

// React
import { lazy } from 'react';

// Components Registry
export const sectionRegistry = {
    // allServices
    allServices: {
        variant1: lazy(() => import('./AllServicesSection/AllServicesSection1')),
        variant2: lazy(() => import('./AllServicesSection/AllServicesSection2')),
        variant3: lazy(() => import('./AllServicesSection/AllServicesSection3')),
    },
};
