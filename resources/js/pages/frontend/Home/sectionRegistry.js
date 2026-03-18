// page/frontend/Home/sectionRegistry.js

// React
import { lazy } from 'react';

// Components Registry
export const sectionRegistry = {
    // Hero
    hero: {
        variant1: lazy(() => import('./HeroSection/HeroSection1')),
        variant2: lazy(() => import('./HeroSection/HeroSection2')),
        variant3: lazy(() => import('./HeroSection/HeroSection3')),
    },

    // Services
    services: {
        variant1: lazy(() => import('./ServicesSection/ServicesSection1')),
        variant2: lazy(() => import('./ServicesSection/ServicesSection2')),
        variant3: lazy(() => import('./ServicesSection/ServicesSection3')),
    },

    // Features
    features: {
        variant1: lazy(() => import('./FeaturesSection/FeaturesSection1')),
        variant2: lazy(() => import('./FeaturesSection/FeaturesSection2')),
        variant3: lazy(() => import('./FeaturesSection/FeaturesSection3')),
    },

    // How it works
    howItWorks: {
        variant1: lazy(() => import('./HowItWorksSection/HowItWorksSection1')),
        variant2: lazy(() => import('./HowItWorksSection/HowItWorksSection2')),
        variant3: lazy(() => import('./HowItWorksSection/HowItWorksSection3')),
    },

    // Industries
    industries: {
        variant1: lazy(() => import('./IndustriesSection/IndustriesSection1')),
        variant2: lazy(() => import('./IndustriesSection/IndustriesSection2')),
        variant3: lazy(() => import('./IndustriesSection/IndustriesSection3')),
    },

    // Success Stories
    successStories: {
        variant1: lazy(() => import('./SuccessStoriesSection/SuccessStoriesSection1'),),
        variant2: lazy(() => import('./SuccessStoriesSection/SuccessStoriesSection2'),),
        variant3: lazy(() => import('./SuccessStoriesSection/SuccessStoriesSection3'),),
    },

    // Testimonials
    testimonials: {
        variant1: lazy(() => import('./TestimonialsSection/TestimonialsSection1'),),
        variant2: lazy(() => import('./TestimonialsSection/TestimonialsSection2'),),
        variant3: lazy(() => import('./TestimonialsSection/TestimonialsSection3'),),
    },

    // Pricing Plans
    pricingPlans: {
        variant1: lazy(() => import('./PricingPlansSection/PricingPlansSection1'),),
        variant2: lazy(() => import('./PricingPlansSection/PricingPlansSection2'),),
        variant3: lazy(() => import('./PricingPlansSection/PricingPlansSection3'),),
    },

    // FAQ
    faq: {
        variant1: lazy(() => import('./FAQSection/FAQSection1')),
        variant2: lazy(() => import('./FAQSection/FAQSection2')),
        variant3: lazy(() => import('./FAQSection/FAQSection3')),
    },

    // Contact
    contact: {
        variant1: lazy(() => import('./ContactSection/ContactSection1')),
        variant2: lazy(() => import('./ContactSection/ContactSection2')),
        variant3: lazy(() => import('./ContactSection/ContactSection3')),
    },

    // About Us
    aboutUs: {
        variant1: lazy(() => import('./AboutUsSection/AboutUsSection1')),
        variant2: lazy(() => import('./AboutUsSection/AboutUsSection2')),
        variant3: lazy(() => import('./AboutUsSection/AboutUsSection3')),
    },

    // Why Choose Us
    whyChooseUs: {
        variant1: lazy(() => import('./WhyChooseUsSection/WhyChooseUsSection1')),
        variant2: lazy(() => import('./WhyChooseUsSection/WhyChooseUsSection2')),
        variant3: lazy(() => import('./WhyChooseUsSection/WhyChooseUsSection3')),
    },

    // Integrations
    integrations: {
        variant1: lazy(() => import('./IntegrationsSection/IntegrationsSection1')),
        variant2: lazy(() => import('./IntegrationsSection/IntegrationsSection2')),
        variant3: lazy(() => import('./IntegrationsSection/IntegrationsSection3')),
    },

    // Blog
    blog: {
        variant1: lazy(() => import('./BlogSection/BlogSection1')),
        variant2: lazy(() => import('./BlogSection/BlogSection2')),
        variant3: lazy(() => import('./BlogSection/BlogSection3')),
    },

    // News
    news: {
        variant1: lazy(() => import('./NewsSection/NewsSection1')),
        variant2: lazy(() => import('./NewsSection/NewsSection2')),
        variant3: lazy(() => import('./NewsSection/NewsSection3')),
    },

    // Partner
    partner: {
        variant1: lazy(() => import('./PartnersSection/PartnersSection1')),
        variant2: lazy(() => import('./PartnersSection/PartnersSection2')),
        variant3: lazy(() => import('.//PartnersSection/PartnersSection3')),
    },

    // global Presence
    globalPresence: {
        variant1: lazy(() => import('./GlobalPresenceSection/GlobalPresenceSection1')),
        variant2: lazy(() => import('./GlobalPresenceSection/GlobalPresenceSection2')),
        variant3: lazy(() => import('./GlobalPresenceSection/GlobalPresenceSection3')),
    },

    // career
    career: {
        variant1: lazy(() => import('./CareerSection/CareerSection1')),
        variant2: lazy(() => import('./CareerSection/CareerSection2')),
        variant3: lazy(() => import('./CareerSection/CareerSection3')),
    },
};
