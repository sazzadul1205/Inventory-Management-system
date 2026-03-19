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

    // warehouseManagement
    warehouseManagement: {
        variant1: lazy(() => import('./WarehouseManagementSection/WarehouseManagementSection1')),
        variant2: lazy(() => import('./WarehouseManagementSection/WarehouseManagementSection2')),
        variant3: lazy(() => import('./WarehouseManagementSection/WarehouseManagementSection3')),
    },

    // orderFulfillment
    orderFulfillment: {
        variant1: lazy(() => import('./OrderFulfillmentSection/OrderFulfillmentSection1')),
        variant2: lazy(() => import('./OrderFulfillmentSection/OrderFulfillmentSection2')),
        variant3: lazy(() => import('./OrderFulfillmentSection/OrderFulfillmentSection3')),
    },

    // supplyChainConsulting
    supplyChainConsulting: {
        variant1: lazy(() => import('./SupplyChainConsultingSection/SupplyChainConsultingSection1')),
        variant2: lazy(() => import('./SupplyChainConsultingSection/SupplyChainConsultingSection2')),
        variant3: lazy(() => import('./SupplyChainConsultingSection/SupplyChainConsultingSection3')),
    },

    // transportationManagement
    transportationManagement: {
        variant1: lazy(() => import('./TransportationManagementSection/TransportationManagementSection1')),
        variant2: lazy(() => import('./TransportationManagementSection/TransportationManagementSection2')),
        variant3: lazy(() => import('./TransportationManagementSection/TransportationManagementSection3')),
    },
};
