// page/frontend/Testimonials/sectionRegistry.js

// React
import { lazy } from 'react';

// Components Registry
export const sectionRegistry = {
    // customerReviews
    customerReviews: {
        variant1: lazy(() => import('./CustomerReviewsSection/CustomerReviewsSection1')),
        variant2: lazy(() => import('./CustomerReviewsSection/CustomerReviewsSection2')),
        variant3: lazy(() => import('./CustomerReviewsSection/CustomerReviewsSection3')),
    },

    // videoTestimonials
    videoTestimonials: {
        variant1: lazy(() => import('./VideoTestimonialsSection/VideoTestimonialsSection1')),
        variant2: lazy(() => import('./VideoTestimonialsSection/VideoTestimonialsSection2')),
        variant3: lazy(() => import('./VideoTestimonialsSection/VideoTestimonialsSection3')),
    },

    // writtenTestimonials
    writtenTestimonials: {
        variant1: lazy(() => import('./WrittenTestimonialsSection/WrittenTestimonialsSection1')),
        variant2: lazy(() => import('./WrittenTestimonialsSection/WrittenTestimonialsSection2')),
        variant3: lazy(() => import('./WrittenTestimonialsSection/WrittenTestimonialsSection3')),
    },

    // industryExpertReviews
    industryExpertReviews: {
        variant1: lazy(() => import('./IndustryExpertReviewsSection/IndustryExpertReviewsSection1'),),
        variant2: lazy(() => import('./IndustryExpertReviewsSection/IndustryExpertReviewsSection2'),),
        variant3: lazy(() => import('./IndustryExpertReviewsSection/IndustryExpertReviewsSection3'),),
    },

    // partnerTestimonials
    partnerTestimonials: {
        variant1: lazy(() => import('./PartnerTestimonialsSection/PartnerTestimonialsSection1')),
        variant2: lazy(() => import('./PartnerTestimonialsSection/PartnerTestimonialsSection2')),
        variant3: lazy(() => import('./PartnerTestimonialsSection/PartnerTestimonialsSection3')),
    },

    // ratingAndAwards
    ratingAndAwards: {
        variant1: lazy(() => import('./RatingAndAwardsSection/RatingAndAwardsSection1')),
        variant2: lazy(() => import('./RatingAndAwardsSection/RatingAndAwardsSection2')),
        variant3: lazy(() => import('./RatingAndAwardsSection/RatingAndAwardsSection3')),
    },
};
