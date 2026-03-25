// page/frontend/Features/sectionRegistry.js

// React
import { lazy } from 'react';

// Components Registry
export const sectionRegistry = {
    realTimeTracking: {
        variant1: lazy(() => import('./RealTimeTrackingSection/RealTimeTrackingSection1')),
        variant2: lazy(() => import('./RealTimeTrackingSection/RealTimeTrackingSection2')),
        variant3: lazy(() => import('./RealTimeTrackingSection/RealTimeTrackingSection3')),
    },

    automatedReordering: {
        variant1: lazy(() => import('./AutomatedReorderingSection/AutomatedReorderingSection1')),
        variant2: lazy(() => import('./AutomatedReorderingSection/AutomatedReorderingSection2')),
        variant3: lazy(() => import('./AutomatedReorderingSection/AutomatedReorderingSection3')),
    },

    multiWarehouseSupport: {
        variant1: lazy(() => import('./MultiWarehouseSupportSection/MultiWarehouseSupportSection1')),
        variant2: lazy(() => import('./MultiWarehouseSupportSection/MultiWarehouseSupportSection2')),
        variant3: lazy(() => import('./MultiWarehouseSupportSection/MultiWarehouseSupportSection3')),
    },

    barcodeScanning: {
        variant1: lazy(() => import('./BarcodeScanningSection/BarcodeScanningSection1')),
        variant2: lazy(() => import('./BarcodeScanningSection/BarcodeScanningSection2')),
        variant3: lazy(() => import('./BarcodeScanningSection/BarcodeScanningSection3')),
    },

    reportingAnalytics: {
        variant1: lazy(() => import('./ReportingAnalyticsSection/ReportingAnalyticsSection1')),
        variant2: lazy(() => import('./ReportingAnalyticsSection/ReportingAnalyticsSection2')),
        variant3: lazy(() => import('./ReportingAnalyticsSection/ReportingAnalyticsSection3')),
    },

    integrationCapabilities: {
        variant1: lazy(() => import('./IntegrationCapabilitiesSection/IntegrationCapabilitiesSection1')),
        variant2: lazy(() => import('./IntegrationCapabilitiesSection/IntegrationCapabilitiesSection2')),
        variant3: lazy(() => import('./IntegrationCapabilitiesSection/IntegrationCapabilitiesSection3')),
    },

    mobileAppFeatures: {
        variant1: lazy(() => import('./MobileAppFeaturesSection/MobileAppFeaturesSection1')),
        variant2: lazy(() => import('./MobileAppFeaturesSection/MobileAppFeaturesSection2')),
        variant3: lazy(() => import('./MobileAppFeaturesSection/MobileAppFeaturesSection3')),
    },

    securityFeatures: {
        variant1: lazy(() => import('./SecurityFeaturesSection/SecurityFeaturesSection1')),
        variant2: lazy(() => import('./SecurityFeaturesSection/SecurityFeaturesSection2')),
        variant3: lazy(() => import('./SecurityFeaturesSection/SecurityFeaturesSection3')),
    },
};
