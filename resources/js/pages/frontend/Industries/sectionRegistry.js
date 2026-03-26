// page/frontend/Industries/sectionRegistry.js

// React
import { lazy } from 'react';

// Components Registry
export const sectionRegistry = {
  // eCommerceAndRetail
  eCommerceAndRetail: {
    variant1: lazy(() => import('./ECommerceAndRetailSection/ECommerceAndRetailSection1')),
    variant2: lazy(() => import('./ECommerceAndRetailSection/ECommerceAndRetailSection2')),
    variant3: lazy(() => import('./ECommerceAndRetailSection/ECommerceAndRetailSection3')),
  },

  // Manufacturing
  manufacturing: {
    variant1: lazy(() => import('./ManufacturingSection/ManufacturingSection1')),
    variant2: lazy(() => import('./ManufacturingSection/ManufacturingSection2')),
    variant3: lazy(() => import('./ManufacturingSection/ManufacturingSection3')),
  },

  // HealthcareAndPharmaceuticals
  healthcareAndPharmaceuticals: {
    variant1: lazy(() => import('./healthcareAndPharmaceuticalsSection/HealthcareAndPharmaceuticalsSection1')),
    variant2: lazy(() => import('./healthcareAndPharmaceuticalsSection/HealthcareAndPharmaceuticalsSection2')),
    variant3: lazy(() => import('./healthcareAndPharmaceuticalsSection/HealthcareAndPharmaceuticalsSection3')),
  },

  // FoodAndBeverage
  foodAndBeverage: {
    variant1: lazy(() => import('./FoodAndBeverageSection/FoodAndBeverageSection1')),
    variant2: lazy(() => import('./FoodAndBeverageSection/FoodAndBeverageSection2')),
    variant3: lazy(() => import('./FoodAndBeverageSection/FoodAndBeverageSection3')),
  },

  // Automotive
  automotive: {
    variant1: lazy(() => import('./AutomotiveSection/AutomotiveSection1')),
    variant2: lazy(() => import('./AutomotiveSection/AutomotiveSection2')),
    variant3: lazy(() => import('./AutomotiveSection/AutomotiveSection3')),
  },

  // Electronics
  electronics: {
    variant1: lazy(() => import('./ElectronicsSection/ElectronicsSection1')),
    variant2: lazy(() => import('./ElectronicsSection/ElectronicsSection2')),
    variant3: lazy(() => import('./ElectronicsSection/ElectronicsSection3')),
  },

  // FashionAndApparel
  fashionAndApparel: {
    variant1: lazy(() => import('./FashionAndApparelSection/FashionAndApparelSection1')),
    variant2: lazy(() => import('./FashionAndApparelSection/FashionAndApparelSection2')),
    variant3: lazy(() => import('./FashionAndApparelSection/FashionAndApparelSection3')),
  },

  // WholesaleAndDistribution
  wholesaleAndDistribution: {
    variant1: lazy(() => import('./WholesaleAndDistributionSection/WholesaleAndDistributionSection1')),
    variant2: lazy(() => import('./WholesaleAndDistributionSection/WholesaleAndDistributionSection2')),
    variant3: lazy(() => import('./WholesaleAndDistributionSection/WholesaleAndDistributionSection3')),
  },

  // ThirdPartyLogistics
  thirdPartyLogistics: {
    variant1: lazy(() => import('./ThirdPartyLogisticsSection/ThirdPartyLogisticsSection1')),
    variant2: lazy(() => import('./ThirdPartyLogisticsSection/ThirdPartyLogisticsSection2')),
    variant3: lazy(() => import('./ThirdPartyLogisticsSection/ThirdPartyLogisticsSection3')),
  },

  // Construction
  construction: {
    variant1: lazy(() => import('./ConstructionSection/ConstructionSection1')),
    variant2: lazy(() => import('./ConstructionSection/ConstructionSection2')),
    variant3: lazy(() => import('./ConstructionSection/ConstructionSection3')),
  },
}