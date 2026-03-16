import { lazy } from 'react';

export const sectionRegistry = {
    hero: {
        variant1: lazy(() => import('./HeroSection/HeroSection1')),
        variant2: lazy(() => import('./HeroSection/HeroSection2')),
        variant3: lazy(() => import('./HeroSection/HeroSection3')),
    },

    services: {
        variant1: lazy(() => import('./ServicesSection/ServicesSection1')),
        variant2: lazy(() => import('./ServicesSection/ServicesSection2')),
        variant3: lazy(() => import('./ServicesSection/ServicesSection3')),
    },

    features: {
        variant1: lazy(() => import('./FeaturesSection/FeaturesSection1')),
        variant2: lazy(() => import('./FeaturesSection/FeaturesSection2')),
        variant3: lazy(() => import('./FeaturesSection/FeaturesSection3')),
    },

    howItWorks: {
        variant1: lazy(() => import('./HowItWorksSection/HowItWorksSection1')),
        variant2: lazy(() => import('./HowItWorksSection/HowItWorksSection2')),
        variant3: lazy(() => import('./HowItWorksSection/HowItWorksSection3')),
    },

    industries: {
        variant1: lazy(() => import('./IndustriesSection/IndustriesSection1')),
        variant2: lazy(() => import('./IndustriesSection/IndustriesSection2')),
        variant3: lazy(() => import('./IndustriesSection/IndustriesSection3')),
    },

    successStories: {
        variant1: lazy(
            () => import('./SuccessStoriesSection/SuccessStoriesSection1'),
        ),
        variant2: lazy(
            () => import('./SuccessStoriesSection/SuccessStoriesSection2'),
        ),
        variant3: lazy(
            () => import('./SuccessStoriesSection/SuccessStoriesSection3'),
        ),
    },

    testimonials: {
        variant1: lazy(
            () => import('./TestimonialsSection/TestimonialsSection1'),
        ),
        variant2: lazy(
            () => import('./TestimonialsSection/TestimonialsSection2'),
        ),
        variant3: lazy(
            () => import('./TestimonialsSection/TestimonialsSection3'),
        ),
    },

    pricingPlans: {
        variant1: lazy(
            () => import('./PricingPlansSection/PricingPlansSection1'),
        ),
        variant2: lazy(
            () => import('./PricingPlansSection/PricingPlansSection2'),
        ),
        variant3: lazy(
            () => import('./PricingPlansSection/PricingPlansSection3'),
        ),
    },
};
