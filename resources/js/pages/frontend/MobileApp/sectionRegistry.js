// page/frontend/MobileApp/sectionRegistry.js

// React
import { lazy } from 'react';

// Components Registry
export const sectionRegistry = {
    // appFeatures
    appFeatures: {
        variant1: lazy(() => import('./AppFeaturesSection/AppFeaturesSection1')),
        variant2: lazy(() => import('./AppFeaturesSection/AppFeaturesSection2')),
        variant3: lazy(() => import('./AppFeaturesSection/AppFeaturesSection3')),
    },

    // iosApp
    iosApp: {
        variant1: lazy(() => import('./IosAppSection/IosAppSection1')),
        variant2: lazy(() => import('./IosAppSection/IosAppSection2')),
        variant3: lazy(() => import('./IosAppSection/IosAppSection3')),
    },

    // androidApp
    androidApp: {
        variant1: lazy(() => import('./AndroidAppSection/AndroidAppSection1')),
        variant2: lazy(() => import('./AndroidAppSection/AndroidAppSection2')),
        variant3: lazy(() => import('./AndroidAppSection/AndroidAppSection3')),
    },

    // mobileDashboard
    mobileDashboard: {
        variant1: lazy(() => import('./MobileDashboardSection/MobileDashboardSection1')),
        variant2: lazy(() => import('./MobileDashboardSection/MobileDashboardSection2')),
        variant3: lazy(() => import('./MobileDashboardSection/MobileDashboardSection3')),
    },

    // barcodeScanning
    barcodeScanning: {
        variant1: lazy(() => import('./BarcodeScanningSection/BarcodeScanningSection1')),
        variant2: lazy(() => import('./BarcodeScanningSection/BarcodeScanningSection2')),
        variant3: lazy(() => import('./BarcodeScanningSection/BarcodeScanningSection3')),
    },

    // pushNotifications
    pushNotifications: {
        variant1: lazy(() => import('./PushNotificationsSection/PushNotificationsSection1')),
        variant2: lazy(() => import('./PushNotificationsSection/PushNotificationsSection2')),
        variant3: lazy(() => import('./PushNotificationsSection/PushNotificationsSection3')),
    },

    // offlineMode
    offlineMode: {
        variant1: lazy(() => import('./OfflineModeSection/OfflineModeSection1')),
        variant2: lazy(() => import('./OfflineModeSection/OfflineModeSection2')),
        variant3: lazy(() => import('./OfflineModeSection/OfflineModeSection3')),
    },

    // appStoreLinks
    appStoreLinks: {
        variant1: lazy(() => import('./AppStoreLinksSection/AppStoreLinksSection1')),
        variant2: lazy(() => import('./AppStoreLinksSection/AppStoreLinksSection2')),
        variant3: lazy(() => import('./AppStoreLinksSection/AppStoreLinksSection3')),
    },
};
