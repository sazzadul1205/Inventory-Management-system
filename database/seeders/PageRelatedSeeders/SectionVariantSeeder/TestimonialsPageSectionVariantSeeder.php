<?php

namespace Database\Seeders\PageRelatedSeeders\SectionVariantSeeder;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TestimonialsPageSectionVariantSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Upsert only this page's variants so other page seeders do not get wiped out.
        $variants = [
            // Customer Reviews Section
            [
                'id' => 225,
                'section_key' => 'customerReviews',
                'variant' => 'variant1',
                'config' => json_encode([
                    'initialIndex' => 0,
                    'autoplay' => true,
                    'autoplayInterval' => 6000,
                    'badge' => [
                        'text' => 'Customer Reviews',
                        'backgroundColor' => 'bg-blue-100 dark:bg-blue-900/30',
                        'borderColor' => 'border-blue-200 dark:border-blue-800',
                        'textColor' => 'text-blue-700 dark:text-blue-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'What Our',
                        'highlightedText' => 'Customers',
                        'suffix' => 'Say',
                        'highlightGradient' => 'from-blue-600 to-indigo-600'
                    ],
                    'description' => 'Don\'t just take our word for it. Here\'s what our clients have to say about their experience.',
                    'stats' => [
                        [
                            'icon' => 'star',
                            'value' => '4.9/5',
                            'label' => 'Average Rating'
                        ],
                        [
                            'icon' => 'users',
                            'value' => '500+',
                            'label' => 'Happy Clients'
                        ],
                        [
                            'icon' => 'trending',
                            'value' => '98%',
                            'label' => 'Would Recommend'
                        ],
                        [
                            'icon' => 'chart',
                            'value' => '287%',
                            'label' => 'Average ROI'
                        ]
                    ],
                    'testimonials' => [
                        [
                            'icon' => 'building',
                            'rating' => 5,
                            'quote' => 'The platform transformed our supply chain visibility. We\'re now able to make data-driven decisions in real-time. The ROI was evident within the first quarter. The team\'s expertise and support have been exceptional throughout the entire process.',
                            'author' => 'Sarah Johnson',
                            'role' => 'VP of Operations',
                            'company' => 'Precision Industries',
                            'industry' => 'Manufacturing',
                            'location' => 'Detroit, MI',
                            'gradient' => 'from-blue-600 to-indigo-600',
                            'result' => '35% cost reduction, 99.5% on-time delivery, 287% ROI',
                            'date' => 'March 2024',
                            'link' => '/testimonials/precision-industries'
                        ],
                        [
                            'icon' => 'database',
                            'rating' => 5,
                            'quote' => 'We finally have a single view of inventory across all channels. Our customers can buy anywhere, and we can fulfill from anywhere. The AI forecasting has been a game-changer for our buying team, reducing stockouts by over 75%.',
                            'author' => 'Jessica Williams',
                            'role' => 'VP of Merchandising',
                            'company' => 'Fashion Forward Retail',
                            'industry' => 'Retail',
                            'location' => 'New York, NY',
                            'gradient' => 'from-purple-600 to-pink-600',
                            'result' => '50% markdown reduction, $4.5M revenue recovery',
                            'date' => 'February 2024',
                            'link' => '/testimonials/fashion-forward'
                        ],
                        [
                            'icon' => 'truck',
                            'rating' => 5,
                            'quote' => 'The billing automation alone paid for the entire platform within 4 months. We\'ve never had such accurate and efficient billing. Our finance team can now focus on strategic initiatives instead of manual reconciliation.',
                            'author' => 'Michael Chen',
                            'role' => 'CFO',
                            'company' => 'Global Logistics Solutions',
                            'industry' => 'Logistics',
                            'location' => 'Chicago, IL',
                            'gradient' => 'from-cyan-600 to-blue-600',
                            'result' => '$2.1M revenue recovered, 99.9% billing accuracy',
                            'date' => 'January 2024',
                            'link' => '/testimonials/global-logistics'
                        ],
                        [
                            'icon' => 'shield',
                            'rating' => 5,
                            'quote' => 'We\'ve eliminated expired inventory waste and improved patient care. The system pays for itself many times over. Our audit scores have never been better, and our staff loves the ease of use.',
                            'author' => 'Dr. Emily Rodriguez',
                            'role' => 'Director of Operations',
                            'company' => 'HealthFirst Medical Network',
                            'industry' => 'Healthcare',
                            'location' => 'Boston, MA',
                            'gradient' => 'from-teal-600 to-emerald-600',
                            'result' => '90% waste reduction, 100% compliance rate',
                            'date' => 'December 2023',
                            'link' => '/testimonials/healthfirst'
                        ],
                        [
                            'icon' => 'star',
                            'rating' => 5,
                            'quote' => 'The expiration tracking has transformed our operations. We\'ve dramatically reduced waste and improved our bottom line. The real-time alerts have saved us from costly compliance issues.',
                            'author' => 'David Martinez',
                            'role' => 'Operations Director',
                            'company' => 'FreshFood Distributors',
                            'industry' => 'Food & Beverage',
                            'location' => 'Atlanta, GA',
                            'gradient' => 'from-orange-600 to-red-600',
                            'result' => '71% spoilage reduction, $1.5M annual savings',
                            'date' => 'November 2023',
                            'link' => '/testimonials/freshfood'
                        ],
                        [
                            'icon' => 'chip',
                            'rating' => 5,
                            'quote' => 'The obsolescence alerts have saved us millions. We\'re now proactively managing component lifecycles instead of reacting to crises. The last-time buy recommendations are incredibly accurate.',
                            'author' => 'Lisa Wong',
                            'role' => 'Supply Chain Manager',
                            'company' => 'ElectroTech Manufacturing',
                            'industry' => 'Electronics',
                            'location' => 'Austin, TX',
                            'gradient' => 'from-indigo-600 to-purple-600',
                            'result' => '63% obsolescence reduction, $2M annual savings',
                            'date' => 'October 2023',
                            'link' => '/testimonials/electrotech'
                        ]
                    ],
                    'showVideo' => true,
                    'videoTitle' => 'Video Testimonials',
                    'videoTestimonials' => [
                        [
                            'thumbnail' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=450&fit=crop',
                            'title' => 'How Precision Industries Achieved 287% ROI',
                            'author' => 'Sarah Johnson, VP of Operations',
                            'videoUrl' => '/videos/precision-industries'
                        ],
                        [
                            'thumbnail' => 'https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?w=800&h=450&fit=crop',
                            'title' => 'Global Logistics: Automating for Success',
                            'author' => 'Michael Chen, CFO',
                            'videoUrl' => '/videos/global-logistics'
                        ]
                    ],
                    'showTrustBadges' => true,
                    'trustText' => 'Trusted by industry leaders worldwide',
                    'trustBadges' => [
                        ['icon' => 'google', 'name' => 'Google'],
                        ['icon' => 'microsoft', 'name' => 'Microsoft'],
                        ['icon' => 'amazon', 'name' => 'Amazon'],
                        ['icon' => 'building', 'name' => 'Fortune 500'],
                        ['icon' => 'shield', 'name' => 'ISO Certified']
                    ],
                    'showCta' => true,
                    'ctaText' => 'Ready to join our satisfied customers?',
                    'ctaButtonText' => 'Get Started Today',
                    'ctaLink' => '/demo'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 226,
                'section_key' => 'customerReviews',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Customer Reviews',
                        'backgroundColor' => 'bg-blue-100 dark:bg-blue-900/30',
                        'borderColor' => 'border-blue-200 dark:border-blue-800',
                        'textColor' => 'text-blue-700 dark:text-blue-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'What Our',
                        'highlightedText' => 'Customers',
                        'suffix' => 'Say',
                        'highlightGradient' => 'from-blue-600 to-indigo-600'
                    ],
                    'description' => 'Browse real reviews from clients across industries. See how we\'ve helped businesses achieve remarkable results.',
                    'filters' => ['all', 'retail', 'manufacturing', 'logistics', 'healthcare', 'food', 'electronics'],
                    'showRatingSummary' => true,
                    'testimonials' => [
                        [
                            'id' => 1,
                            'icon' => 'building',
                            'industry' => 'manufacturing',
                            'author' => 'Sarah Johnson',
                            'company' => 'Precision Industries',
                            'rating' => 5,
                            'date' => 'March 2024',
                            'quote' => 'The platform transformed our supply chain visibility. We\'re now able to make data-driven decisions in real-time. The ROI was evident within the first quarter.',
                            'fullQuote' => 'The platform transformed our supply chain visibility. We\'re now able to make data-driven decisions in real-time. The ROI was evident within the first quarter. The team\'s expertise and support have been exceptional throughout the entire process. I would highly recommend this solution to any manufacturing company looking to optimize their inventory.',
                            'result' => '35% cost reduction, 99.5% on-time delivery, 287% ROI',
                            'challenge' => 'Legacy systems caused inventory visibility gaps across 12 warehouses, leading to $2.5M in excess stock and frequent production delays.',
                            'solution' => 'Implemented AI-powered inventory optimization platform with real-time sync across all ERP systems and warehouses.',
                            'helpfulCount' => 48,
                            'tags' => ['Manufacturing', 'Inventory Optimization', 'AI Forecasting'],
                            'link' => '/testimonials/precision-industries'
                        ],
                        [
                            'id' => 2,
                            'icon' => 'database',
                            'industry' => 'retail',
                            'author' => 'Jessica Williams',
                            'company' => 'Fashion Forward Retail',
                            'rating' => 5,
                            'date' => 'February 2024',
                            'quote' => 'We finally have a single view of inventory across all channels. The AI forecasting has been a game-changer for our buying team.',
                            'fullQuote' => 'We finally have a single view of inventory across all channels. Our customers can buy anywhere, and we can fulfill from anywhere. The AI forecasting has been a game-changer for our buying team, reducing stockouts by over 75%. The platform paid for itself within 5 months.',
                            'result' => '50% markdown reduction, $4.5M revenue recovery',
                            'challenge' => 'Poor inventory visibility across online and 50+ physical stores led to 22% stockout rates and 18% markdown rates.',
                            'solution' => 'Implemented unified commerce platform with AI-powered demand forecasting and automated replenishment.',
                            'helpfulCount' => 52,
                            'tags' => ['Retail', 'Omnichannel', 'AI Forecasting'],
                            'link' => '/testimonials/fashion-forward'
                        ],
                        [
                            'id' => 3,
                            'icon' => 'truck',
                            'industry' => 'logistics',
                            'author' => 'Michael Chen',
                            'company' => 'Global Logistics Solutions',
                            'rating' => 5,
                            'date' => 'January 2024',
                            'quote' => 'The billing automation alone paid for the entire platform within 4 months. We\'ve never had such accurate and efficient billing.',
                            'fullQuote' => 'The billing automation alone paid for the entire platform within 4 months. We\'ve never had such accurate and efficient billing. Our finance team can now focus on strategic initiatives instead of manual reconciliation. The ROI has been incredible.',
                            'result' => '$2.1M revenue recovered, 99.9% billing accuracy',
                            'challenge' => 'Manual billing processes caused 15% invoice rework rate and $1.8M annual revenue leakage.',
                            'solution' => 'Deployed automated billing engine with real-time rate validation and automated dispute resolution.',
                            'helpfulCount' => 63,
                            'tags' => ['Logistics', 'Billing Automation', 'Revenue Recovery'],
                            'link' => '/testimonials/global-logistics'
                        ],
                        [
                            'id' => 4,
                            'icon' => 'shield',
                            'industry' => 'healthcare',
                            'author' => 'Dr. Emily Rodriguez',
                            'company' => 'HealthFirst Medical Network',
                            'rating' => 5,
                            'date' => 'December 2023',
                            'quote' => 'We\'ve eliminated expired inventory waste and improved patient care. The system pays for itself many times over.',
                            'fullQuote' => 'We\'ve eliminated expired inventory waste and improved patient care. The system pays for itself many times over. Our audit scores have never been better, and our staff loves the ease of use. The real-time expiration alerts have been a lifesaver.',
                            'result' => '90% waste reduction, 100% compliance rate',
                            'challenge' => 'Expiring medical supplies caused $1.2M in annual waste across 15 facilities with 120+ manual hours weekly.',
                            'solution' => 'Deployed RFID-based inventory tracking with expiration date alerts and automated reordering.',
                            'helpfulCount' => 41,
                            'tags' => ['Healthcare', 'RFID', 'Expiration Management'],
                            'link' => '/testimonials/healthfirst'
                        ],
                        [
                            'id' => 5,
                            'icon' => 'star',
                            'industry' => 'food',
                            'author' => 'David Martinez',
                            'company' => 'FreshFood Distributors',
                            'rating' => 5,
                            'date' => 'November 2023',
                            'quote' => 'The expiration tracking has transformed our operations. We\'ve dramatically reduced waste and improved our bottom line.',
                            'fullQuote' => 'The expiration tracking has transformed our operations. We\'ve dramatically reduced waste and improved our bottom line. The real-time alerts have saved us from costly compliance issues. I can\'t imagine going back to our old manual processes.',
                            'result' => '71% spoilage reduction, $1.5M annual savings',
                            'challenge' => 'Product spoilage from poor expiration tracking caused $2.1M annual waste with limited lot traceability.',
                            'solution' => 'Implemented real-time expiration date management with cold chain monitoring.',
                            'helpfulCount' => 37,
                            'tags' => ['Food & Beverage', 'Shelf-Life', 'Cold Chain'],
                            'link' => '/testimonials/freshfood'
                        ],
                        [
                            'id' => 6,
                            'icon' => 'chip',
                            'industry' => 'electronics',
                            'author' => 'Lisa Wong',
                            'company' => 'ElectroTech Manufacturing',
                            'rating' => 5,
                            'date' => 'October 2023',
                            'quote' => 'The obsolescence alerts have saved us millions. We\'re now proactively managing component lifecycles.',
                            'fullQuote' => 'The obsolescence alerts have saved us millions. We\'re now proactively managing component lifecycles instead of reacting to crises. The last-time buy recommendations are incredibly accurate and have prevented costly redesigns.',
                            'result' => '63% obsolescence reduction, $2M annual savings',
                            'challenge' => 'Component obsolescence caused $3.2M in redesign costs with 40% of products requiring costly redesigns.',
                            'solution' => 'Deployed obsolescence monitoring with last-time buy optimization and lifecycle management.',
                            'helpfulCount' => 29,
                            'tags' => ['Electronics', 'Obsolescence', 'Lifecycle Management'],
                            'link' => '/testimonials/electrotech'
                        ],
                        [
                            'id' => 7,
                            'icon' => 'building',
                            'industry' => 'manufacturing',
                            'author' => 'Robert Taylor',
                            'company' => 'AeroTech Components',
                            'rating' => 5,
                            'date' => 'September 2023',
                            'quote' => 'The predictive analytics have reduced our downtime by 45% and improved our OEE significantly.',
                            'result' => '45% downtime reduction, 28% OEE improvement',
                            'challenge' => 'Unexpected equipment failures caused $2.5M in annual downtime costs and missed delivery deadlines.',
                            'solution' => 'Implemented predictive maintenance with IoT sensors and real-time monitoring dashboards.',
                            'helpfulCount' => 34,
                            'tags' => ['Manufacturing', 'Predictive Maintenance', 'IoT'],
                            'link' => '/testimonials/aerotech'
                        ],
                        [
                            'id' => 8,
                            'icon' => 'database',
                            'industry' => 'retail',
                            'author' => 'Amanda Lee',
                            'company' => 'HomeGoods Distributors',
                            'rating' => 4,
                            'date' => 'August 2023',
                            'quote' => 'Great platform with excellent support. The implementation was smooth and the results speak for themselves.',
                            'result' => '$2.8M savings, 64% inventory turnover increase',
                            'challenge' => 'Slow replenishment cycles caused frequent stockouts and lost sales opportunities.',
                            'solution' => 'Deployed automated replenishment with 3-day cycles and demand forecasting.',
                            'helpfulCount' => 22,
                            'tags' => ['Retail', 'Replenishment', 'Demand Forecasting'],
                            'link' => '/testimonials/homegoods'
                        ]
                    ],
                    'showVideoReviews' => true,
                    'videoTitle' => 'Video Reviews',
                    'videoReviews' => [
                        [
                            'thumbnail' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=450&fit=crop',
                            'title' => 'How Precision Industries Achieved 287% ROI',
                            'author' => 'Sarah Johnson, VP of Operations'
                        ],
                        [
                            'thumbnail' => 'https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?w=800&h=450&fit=crop',
                            'title' => 'Global Logistics: Automating for Success',
                            'author' => 'Michael Chen, CFO'
                        ]
                    ],
                    'showTrustBadges' => true,
                    'trustText' => 'Trusted by industry leaders worldwide',
                    'trustBadges' => [
                        ['icon' => 'google', 'name' => 'Google'],
                        ['icon' => 'microsoft', 'name' => 'Microsoft'],
                        ['icon' => 'amazon', 'name' => 'Amazon'],
                        ['icon' => 'building', 'name' => 'Fortune 500'],
                        ['icon' => 'shield', 'name' => 'ISO Certified']
                    ],
                    'showWriteReview' => true,
                    'writeReviewText' => 'Share your experience with us',
                    'writeReviewLink' => '/submit-review'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 227,
                'section_key' => 'customerReviews',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Customer Reviews',
                        'backgroundColor' => 'bg-blue-100 dark:bg-blue-900/30',
                        'borderColor' => 'border-blue-200 dark:border-blue-800',
                        'textColor' => 'text-blue-700 dark:text-blue-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'What Our',
                        'highlightedText' => 'Customers',
                        'suffix' => 'Say',
                        'highlightGradient' => 'from-blue-600 to-indigo-600'
                    ],
                    'description' => 'Don\'t just take our word for it. Here\'s what our clients have to say about their experience.',
                    'trustBadges' => [
                        ['icon' => 'star', 'text' => '4.9/5 Average Rating'],
                        ['icon' => 'users', 'text' => '500+ Happy Clients'],
                        ['icon' => 'badge-check', 'text' => '100% Verified Reviews']
                    ],
                    'stats' => [
                        ['icon' => 'star', 'value' => '4.9/5', 'label' => 'Average Rating', 'subtext' => 'Based on 500+ reviews'],
                        ['icon' => 'users', 'value' => '500+', 'label' => 'Happy Clients', 'subtext' => 'Across 25+ countries'],
                        ['icon' => 'trending', 'value' => '98%', 'label' => 'Would Recommend', 'subtext' => 'To colleagues and peers'],
                        ['icon' => 'chart', 'value' => '287%', 'label' => 'Average ROI', 'subtext' => 'For our clients']
                    ],
                    'categories' => ['all', '5-star', '4-star', '3-star', 'verified'],
                    'reviews' => [
                        [
                            'id' => 1,
                            'icon' => 'building',
                            'author' => 'Sarah Johnson',
                            'company' => 'Precision Industries',
                            'rating' => 5,
                            'date' => 'March 2024',
                            'isVerified' => true,
                            'quote' => 'The platform transformed our supply chain visibility. We\'re now able to make data-driven decisions in real-time. The ROI was evident within the first quarter.',
                            'fullQuote' => 'The platform transformed our supply chain visibility. We\'re now able to make data-driven decisions in real-time. The ROI was evident within the first quarter. The team\'s expertise and support have been exceptional throughout the entire process. I would highly recommend this solution to any manufacturing company looking to optimize their inventory and supply chain operations.',
                            'result' => '35% cost reduction, 99.5% on-time delivery, 287% ROI',
                            'helpfulCount' => 48,
                            'link' => '/testimonials/precision-industries'
                        ],
                        [
                            'id' => 2,
                            'icon' => 'database',
                            'author' => 'Jessica Williams',
                            'company' => 'Fashion Forward Retail',
                            'rating' => 5,
                            'date' => 'February 2024',
                            'isVerified' => true,
                            'quote' => 'We finally have a single view of inventory across all channels. The AI forecasting has been a game-changer for our buying team, reducing stockouts by over 75%.',
                            'fullQuote' => 'We finally have a single view of inventory across all channels. Our customers can buy anywhere, and we can fulfill from anywhere. The AI forecasting has been a game-changer for our buying team, reducing stockouts by over 75%. The platform paid for itself within 5 months.',
                            'result' => '50% markdown reduction, $4.5M revenue recovery',
                            'helpfulCount' => 52,
                            'link' => '/testimonials/fashion-forward'
                        ],
                        [
                            'id' => 3,
                            'icon' => 'truck',
                            'author' => 'Michael Chen',
                            'company' => 'Global Logistics Solutions',
                            'rating' => 5,
                            'date' => 'January 2024',
                            'isVerified' => true,
                            'quote' => 'The billing automation alone paid for the entire platform within 4 months. We\'ve never had such accurate and efficient billing.',
                            'fullQuote' => 'The billing automation alone paid for the entire platform within 4 months. We\'ve never had such accurate and efficient billing. Our finance team can now focus on strategic initiatives instead of manual reconciliation. The ROI has been incredible.',
                            'result' => '$2.1M revenue recovered, 99.9% billing accuracy',
                            'helpfulCount' => 63,
                            'link' => '/testimonials/global-logistics'
                        ],
                        [
                            'id' => 4,
                            'icon' => 'shield',
                            'author' => 'Dr. Emily Rodriguez',
                            'company' => 'HealthFirst Medical Network',
                            'rating' => 5,
                            'date' => 'December 2023',
                            'isVerified' => true,
                            'quote' => 'We\'ve eliminated expired inventory waste and improved patient care. The system pays for itself many times over.',
                            'fullQuote' => 'We\'ve eliminated expired inventory waste and improved patient care. The system pays for itself many times over. Our audit scores have never been better, and our staff loves the ease of use.',
                            'result' => '90% waste reduction, 100% compliance rate',
                            'helpfulCount' => 41,
                            'link' => '/testimonials/healthfirst'
                        ],
                        [
                            'id' => 5,
                            'icon' => 'star',
                            'author' => 'David Martinez',
                            'company' => 'FreshFood Distributors',
                            'rating' => 5,
                            'date' => 'November 2023',
                            'isVerified' => true,
                            'quote' => 'The expiration tracking has transformed our operations. We\'ve dramatically reduced waste and improved our bottom line.',
                            'fullQuote' => 'The expiration tracking has transformed our operations. We\'ve dramatically reduced waste and improved our bottom line. The real-time alerts have saved us from costly compliance issues.',
                            'result' => '71% spoilage reduction, $1.5M annual savings',
                            'helpfulCount' => 37,
                            'link' => '/testimonials/freshfood'
                        ],
                        [
                            'id' => 6,
                            'icon' => 'chip',
                            'author' => 'Lisa Wong',
                            'company' => 'ElectroTech Manufacturing',
                            'rating' => 5,
                            'date' => 'October 2023',
                            'isVerified' => true,
                            'quote' => 'The obsolescence alerts have saved us millions. We\'re now proactively managing component lifecycles instead of reacting to crises.',
                            'fullQuote' => 'The obsolescence alerts have saved us millions. We\'re now proactively managing component lifecycles instead of reacting to crises. The last-time buy recommendations are incredibly accurate.',
                            'result' => '63% obsolescence reduction, $2M annual savings',
                            'helpfulCount' => 29,
                            'link' => '/testimonials/electrotech'
                        ],
                        [
                            'id' => 7,
                            'icon' => 'building',
                            'author' => 'Robert Taylor',
                            'company' => 'AeroTech Components',
                            'rating' => 5,
                            'date' => 'September 2023',
                            'isVerified' => true,
                            'quote' => 'The predictive analytics have reduced our downtime by 45% and improved our OEE significantly.',
                            'fullQuote' => 'The predictive analytics have reduced our downtime by 45% and improved our OEE significantly. We\'ve saved over $2M in unplanned downtime costs.',
                            'result' => '45% downtime reduction, 28% OEE improvement',
                            'helpfulCount' => 34,
                            'link' => '/testimonials/aerotech'
                        ],
                        [
                            'id' => 8,
                            'icon' => 'database',
                            'author' => 'Amanda Lee',
                            'company' => 'HomeGoods Distributors',
                            'rating' => 4,
                            'date' => 'August 2023',
                            'isVerified' => true,
                            'quote' => 'Great platform with excellent support. The implementation was smooth and the results speak for themselves.',
                            'fullQuote' => 'Great platform with excellent support. The implementation was smooth and the results speak for themselves. Our inventory turnover has increased dramatically.',
                            'result' => '$2.8M savings, 64% inventory turnover increase',
                            'helpfulCount' => 22,
                            'link' => '/testimonials/homegoods'
                        ]
                    ],
                    'spotlightTitle' => 'Most Helpful Reviews',
                    'verifiedText' => 'All reviews are from verified customers',
                    'showVideo' => true,
                    'videoTitle' => 'Video Testimonials',
                    'videoTestimonials' => [
                        [
                            'thumbnail' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=450&fit=crop',
                            'title' => 'How Precision Industries Achieved 287% ROI',
                            'author' => 'Sarah Johnson, VP of Operations'
                        ],
                        [
                            'thumbnail' => 'https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?w=800&h=450&fit=crop',
                            'title' => 'Global Logistics: Automating for Success',
                            'author' => 'Michael Chen, CFO'
                        ]
                    ],
                    'showLeaveReview' => true,
                    'leaveReviewText' => 'Have you used our platform? Share your experience',
                    'leaveReviewLink' => '/submit-review',
                    'trustSignals' => [
                        ['icon' => 'google', 'name' => 'Google'],
                        ['icon' => 'microsoft', 'name' => 'Microsoft'],
                        ['icon' => 'amazon', 'name' => 'Amazon'],
                        ['icon' => 'building', 'name' => 'Fortune 500'],
                        ['icon' => 'shield', 'name' => 'ISO Certified']
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 228,
                'section_key' => 'customerReviews',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Video Testimonials Section
            [
                'id' => 229,
                'section_key' => 'videoTestimonials',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Video Testimonials',
                        'backgroundColor' => 'bg-blue-100 dark:bg-blue-900/30',
                        'borderColor' => 'border-blue-200 dark:border-blue-800',
                        'textColor' => 'text-blue-700 dark:text-blue-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Hear from Our',
                        'highlightedText' => 'Satisfied Clients',
                        'suffix' => '',
                        'highlightGradient' => 'from-blue-600 to-indigo-600'
                    ],
                    'description' => 'Watch real stories from customers who have transformed their businesses with our solutions.',
                    'featuredVideo' => [
                        'thumbnail' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=675&fit=crop',
                        'title' => 'How Precision Industries Achieved 287% ROI',
                        'author' => 'Sarah Johnson',
                        'company' => 'Precision Industries',
                        'badge' => 'Featured Story',
                        'url' => 'https://example.com/videos/precision-industries.mp4',
                        'duration' => '4:32'
                    ],
                    'videos' => [
                        [
                            'icon' => 'building',
                            'thumbnail' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=338&fit=crop',
                            'title' => 'Supply Chain Transformation Success',
                            'author' => 'Sarah Johnson',
                            'company' => 'Precision Industries',
                            'rating' => 5,
                            'date' => 'March 2024',
                            'duration' => '4:32',
                            'url' => 'https://example.com/videos/precision-industries.mp4'
                        ],
                        [
                            'icon' => 'database',
                            'thumbnail' => 'https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?w=600&h=338&fit=crop',
                            'title' => 'Omnichannel Inventory Optimization',
                            'author' => 'Jessica Williams',
                            'company' => 'Fashion Forward Retail',
                            'rating' => 5,
                            'date' => 'February 2024',
                            'duration' => '3:45',
                            'url' => 'https://example.com/videos/fashion-forward.mp4'
                        ],
                        [
                            'icon' => 'truck',
                            'thumbnail' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=338&fit=crop',
                            'title' => 'Billing Automation Success Story',
                            'author' => 'Michael Chen',
                            'company' => 'Global Logistics Solutions',
                            'rating' => 5,
                            'date' => 'January 2024',
                            'duration' => '5:12',
                            'url' => 'https://example.com/videos/global-logistics.mp4'
                        ],
                        [
                            'icon' => 'shield',
                            'thumbnail' => 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=338&fit=crop',
                            'title' => 'Healthcare Inventory Transformation',
                            'author' => 'Dr. Emily Rodriguez',
                            'company' => 'HealthFirst Medical Network',
                            'rating' => 5,
                            'date' => 'December 2023',
                            'duration' => '4:18',
                            'url' => 'https://example.com/videos/healthfirst.mp4'
                        ],
                        [
                            'icon' => 'star',
                            'thumbnail' => 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=338&fit=crop',
                            'title' => 'Food Safety & Compliance Success',
                            'author' => 'David Martinez',
                            'company' => 'FreshFood Distributors',
                            'rating' => 5,
                            'date' => 'November 2023',
                            'duration' => '3:56',
                            'url' => 'https://example.com/videos/freshfood.mp4'
                        ],
                        [
                            'icon' => 'chip',
                            'thumbnail' => 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&h=338&fit=crop',
                            'title' => 'Electronics Obsolescence Management',
                            'author' => 'Lisa Wong',
                            'company' => 'ElectroTech Manufacturing',
                            'rating' => 5,
                            'date' => 'October 2023',
                            'duration' => '4:45',
                            'url' => 'https://example.com/videos/electrotech.mp4'
                        ]
                    ],
                    'showStats' => true,
                    'stats' => [
                        ['icon' => 'eye', 'value' => '50K+', 'label' => 'Video Views'],
                        ['icon' => 'thumb-up', 'value' => '98%', 'label' => 'Positive Feedback'],
                        ['icon' => 'users', 'value' => '500+', 'label' => 'Client Stories'],
                        ['icon' => 'clock', 'value' => '200+', 'label' => 'Hours of Content']
                    ],
                    'showTrustIndicators' => true,
                    'trustText' => 'Trusted by industry leaders worldwide',
                    'trustLogos' => [
                        ['icon' => 'google', 'name' => 'Google'],
                        ['icon' => 'microsoft', 'name' => 'Microsoft'],
                        ['icon' => 'amazon', 'name' => 'Amazon']
                    ],
                    'showCta' => true,
                    'ctaText' => 'Want to share your story?',
                    'ctaButtonText' => 'Submit Your Testimonial',
                    'ctaLink' => '/submit-testimonial'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 230,
                'section_key' => 'videoTestimonials',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Video Testimonials',
                        'backgroundColor' => 'bg-blue-100 dark:bg-blue-900/30',
                        'borderColor' => 'border-blue-200 dark:border-blue-800',
                        'textColor' => 'text-blue-700 dark:text-blue-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Success Stories',
                        'highlightedText' => 'in Action',
                        'suffix' => '',
                        'highlightGradient' => 'from-blue-600 to-indigo-600'
                    ],
                    'description' => 'Watch real clients share their experiences and results achieved with our solutions.',
                    'featuredVideo' => [
                        'thumbnail' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=675&fit=crop',
                        'title' => 'How Precision Industries Achieved 287% ROI',
                        'author' => 'Sarah Johnson',
                        'role' => 'VP of Operations',
                        'company' => 'Precision Industries',
                        'rating' => 5,
                        'date' => 'March 2024',
                        'badge' => 'Featured Story',
                        'url' => 'https://example.com/videos/precision-industries.mp4',
                        'duration' => '4:32'
                    ],
                    'videos' => [
                        [
                            'id' => 1,
                            'icon' => 'building',
                            'thumbnail' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=338&fit=crop',
                            'title' => 'Supply Chain Transformation Success',
                            'author' => 'Sarah Johnson',
                            'role' => 'VP of Operations',
                            'company' => 'Precision Industries',
                            'rating' => 5,
                            'date' => 'March 2024',
                            'duration' => '4:32',
                            'url' => 'https://example.com/videos/precision-industries.mp4',
                            'result' => '35% cost reduction, 99.5% on-time delivery, 287% ROI'
                        ],
                        [
                            'id' => 2,
                            'icon' => 'database',
                            'thumbnail' => 'https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?w=600&h=338&fit=crop',
                            'title' => 'Omnichannel Inventory Optimization',
                            'author' => 'Jessica Williams',
                            'role' => 'VP of Merchandising',
                            'company' => 'Fashion Forward Retail',
                            'rating' => 5,
                            'date' => 'February 2024',
                            'duration' => '3:45',
                            'url' => 'https://example.com/videos/fashion-forward.mp4',
                            'result' => '50% markdown reduction, $4.5M revenue recovery'
                        ],
                        [
                            'id' => 3,
                            'icon' => 'truck',
                            'thumbnail' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=338&fit=crop',
                            'title' => 'Billing Automation Success Story',
                            'author' => 'Michael Chen',
                            'role' => 'CFO',
                            'company' => 'Global Logistics Solutions',
                            'rating' => 5,
                            'date' => 'January 2024',
                            'duration' => '5:12',
                            'url' => 'https://example.com/videos/global-logistics.mp4',
                            'result' => '$2.1M revenue recovered, 99.9% billing accuracy'
                        ],
                        [
                            'id' => 4,
                            'icon' => 'shield',
                            'thumbnail' => 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=338&fit=crop',
                            'title' => 'Healthcare Inventory Transformation',
                            'author' => 'Dr. Emily Rodriguez',
                            'role' => 'Director of Operations',
                            'company' => 'HealthFirst Medical Network',
                            'rating' => 5,
                            'date' => 'December 2023',
                            'duration' => '4:18',
                            'url' => 'https://example.com/videos/healthfirst.mp4',
                            'result' => '90% waste reduction, 100% compliance rate'
                        ],
                        [
                            'id' => 5,
                            'icon' => 'star',
                            'thumbnail' => 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=338&fit=crop',
                            'title' => 'Food Safety & Compliance Success',
                            'author' => 'David Martinez',
                            'role' => 'Operations Director',
                            'company' => 'FreshFood Distributors',
                            'rating' => 5,
                            'date' => 'November 2023',
                            'duration' => '3:56',
                            'url' => 'https://example.com/videos/freshfood.mp4',
                            'result' => '71% spoilage reduction, $1.5M annual savings'
                        ],
                        [
                            'id' => 6,
                            'icon' => 'chip',
                            'thumbnail' => 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&h=338&fit=crop',
                            'title' => 'Electronics Obsolescence Management',
                            'author' => 'Lisa Wong',
                            'role' => 'Supply Chain Manager',
                            'company' => 'ElectroTech Manufacturing',
                            'rating' => 5,
                            'date' => 'October 2023',
                            'duration' => '4:45',
                            'url' => 'https://example.com/videos/electrotech.mp4',
                            'result' => '63% obsolescence reduction, $2M annual savings'
                        ]
                    ],
                    'showTrustIndicators' => true,
                    'trustText' => 'Trusted by industry leaders worldwide',
                    'trustLogos' => [
                        ['icon' => 'google', 'name' => 'Google'],
                        ['icon' => 'microsoft', 'name' => 'Microsoft'],
                        ['icon' => 'amazon', 'name' => 'Amazon']
                    ],
                    'showCta' => true,
                    'ctaText' => 'Have a success story to share?',
                    'ctaButtonText' => 'Share Your Story',
                    'ctaLink' => '/submit-testimonial'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 231,
                'section_key' => 'videoTestimonials',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Video Library',
                        'backgroundColor' => 'bg-blue-100 dark:bg-blue-900/30',
                        'borderColor' => 'border-blue-200 dark:border-blue-800',
                        'textColor' => 'text-blue-700 dark:text-blue-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Video',
                        'highlightedText' => 'Testimonials',
                        'suffix' => 'Library',
                        'highlightGradient' => 'from-blue-600 to-indigo-600'
                    ],
                    'description' => 'Browse our collection of client success stories, filtered by industry and topic.',
                    'categories' => ['all', 'retail', 'manufacturing', 'logistics', 'healthcare', 'food', 'electronics'],
                    'videos' => [
                        [
                            'id' => 1,
                            'icon' => 'building',
                            'category' => 'manufacturing',
                            'thumbnail' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=338&fit=crop',
                            'title' => 'Supply Chain Transformation Success',
                            'author' => 'Sarah Johnson',
                            'role' => 'VP of Operations',
                            'company' => 'Precision Industries',
                            'rating' => 5,
                            'date' => 'March 2024',
                            'duration' => '4:32',
                            'url' => 'https://example.com/videos/precision-industries.mp4',
                            'keyResult' => '35% cost reduction, 99.5% on-time delivery, 287% ROI',
                            'keyResults' => [
                                '35% reduction in inventory carrying costs',
                                'Improved forecast accuracy from 68% to 94%',
                                '287% ROI achieved within 6 months',
                                '99.5% on-time delivery rate'
                            ],
                            'transcript' => 'Sarah Johnson: The platform transformed our supply chain visibility. We\'re now able to make data-driven decisions in real-time. The ROI was evident within the first quarter. The team\'s expertise and support have been exceptional throughout the entire process.',
                            'tags' => ['manufacturing', 'supply chain', 'inventory optimization', 'ROI'],
                            'caseStudyLink' => '/case-studies/precision-industries'
                        ],
                        [
                            'id' => 2,
                            'icon' => 'database',
                            'category' => 'retail',
                            'thumbnail' => 'https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?w=600&h=338&fit=crop',
                            'title' => 'Omnichannel Inventory Optimization',
                            'author' => 'Jessica Williams',
                            'role' => 'VP of Merchandising',
                            'company' => 'Fashion Forward Retail',
                            'rating' => 5,
                            'date' => 'February 2024',
                            'duration' => '3:45',
                            'url' => 'https://example.com/videos/fashion-forward.mp4',
                            'keyResult' => '50% markdown reduction, $4.5M revenue recovery',
                            'keyResults' => [
                                '50% reduction in markdown rates',
                                '$4.5M in recovered revenue',
                                'Reduced stockouts from 22% to 5%',
                                'Increased inventory turnover from 2.8x to 4.6x'
                            ],
                            'transcript' => 'Jessica Williams: We finally have a single view of inventory across all channels. Our customers can buy anywhere, and we can fulfill from anywhere. The AI forecasting has been a game-changer for our buying team, reducing stockouts by over 75%.',
                            'tags' => ['retail', 'omnichannel', 'inventory', 'AI forecasting'],
                            'caseStudyLink' => '/case-studies/fashion-forward'
                        ],
                        [
                            'id' => 3,
                            'icon' => 'truck',
                            'category' => 'logistics',
                            'thumbnail' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=338&fit=crop',
                            'title' => 'Billing Automation Success Story',
                            'author' => 'Michael Chen',
                            'role' => 'CFO',
                            'company' => 'Global Logistics Solutions',
                            'rating' => 5,
                            'date' => 'January 2024',
                            'duration' => '5:12',
                            'url' => 'https://example.com/videos/global-logistics.mp4',
                            'keyResult' => '$2.1M revenue recovered, 99.9% billing accuracy',
                            'keyResults' => [
                                '$2.1M in recovered revenue',
                                '99.9% billing accuracy achieved',
                                '96% reduction in invoice processing time',
                                '87% reduction in billing disputes'
                            ],
                            'transcript' => 'Michael Chen: The billing automation alone paid for the entire platform within 4 months. We\'ve never had such accurate and efficient billing. Our finance team can now focus on strategic initiatives instead of manual reconciliation.',
                            'tags' => ['logistics', 'billing automation', 'revenue recovery', '3PL'],
                            'caseStudyLink' => '/case-studies/global-logistics'
                        ],
                        [
                            'id' => 4,
                            'icon' => 'shield',
                            'category' => 'healthcare',
                            'thumbnail' => 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=338&fit=crop',
                            'title' => 'Healthcare Inventory Transformation',
                            'author' => 'Dr. Emily Rodriguez',
                            'role' => 'Director of Operations',
                            'company' => 'HealthFirst Medical Network',
                            'rating' => 5,
                            'date' => 'December 2023',
                            'duration' => '4:18',
                            'url' => 'https://example.com/videos/healthfirst.mp4',
                            'keyResult' => '90% waste reduction, 100% compliance rate',
                            'keyResults' => [
                                '90% reduction in expired inventory waste',
                                '100% compliance audit rate',
                                '88% reduction in manual inventory hours',
                                'Zero compliance findings in last audit'
                            ],
                            'transcript' => 'Dr. Emily Rodriguez: We\'ve eliminated expired inventory waste and improved patient care. The system pays for itself many times over. Our audit scores have never been better, and our staff loves the ease of use.',
                            'tags' => ['healthcare', 'RFID', 'expiration management', 'compliance'],
                            'caseStudyLink' => '/case-studies/healthfirst'
                        ],
                        [
                            'id' => 5,
                            'icon' => 'star',
                            'category' => 'food',
                            'thumbnail' => 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=338&fit=crop',
                            'title' => 'Food Safety & Compliance Success',
                            'author' => 'David Martinez',
                            'role' => 'Operations Director',
                            'company' => 'FreshFood Distributors',
                            'rating' => 5,
                            'date' => 'November 2023',
                            'duration' => '3:56',
                            'url' => 'https://example.com/videos/freshfood.mp4',
                            'keyResult' => '71% spoilage reduction, $1.5M annual savings',
                            'keyResults' => [
                                '71% reduction in product spoilage',
                                '$1.5M in annual savings',
                                '2-hour recall response time',
                                '100% FSMA compliance achieved'
                            ],
                            'transcript' => 'David Martinez: The expiration tracking has transformed our operations. We\'ve dramatically reduced waste and improved our bottom line. The real-time alerts have saved us from costly compliance issues.',
                            'tags' => ['food & beverage', 'shelf-life', 'cold chain', 'FSMA'],
                            'caseStudyLink' => '/case-studies/freshfood'
                        ],
                        [
                            'id' => 6,
                            'icon' => 'chip',
                            'category' => 'electronics',
                            'thumbnail' => 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&h=338&fit=crop',
                            'title' => 'Electronics Obsolescence Management',
                            'author' => 'Lisa Wong',
                            'role' => 'Supply Chain Manager',
                            'company' => 'ElectroTech Manufacturing',
                            'rating' => 5,
                            'date' => 'October 2023',
                            'duration' => '4:45',
                            'url' => 'https://example.com/videos/electrotech.mp4',
                            'keyResult' => '63% obsolescence reduction, $2M annual savings',
                            'keyResults' => [
                                '63% reduction in obsolescence costs',
                                '$2M in annual savings',
                                '67% reduction in component lead times',
                                'Zero last-time buy misses in 2023'
                            ],
                            'transcript' => 'Lisa Wong: The obsolescence alerts have saved us millions. We\'re now proactively managing component lifecycles instead of reacting to crises. The last-time buy recommendations are incredibly accurate.',
                            'tags' => ['electronics', 'obsolescence', 'lifecycle management', 'supply chain'],
                            'caseStudyLink' => '/case-studies/electrotech'
                        ]
                    ],
                    'showTrustIndicators' => true,
                    'trustText' => 'Trusted by industry leaders worldwide',
                    'trustLogos' => [
                        ['icon' => 'google', 'name' => 'Google'],
                        ['icon' => 'microsoft', 'name' => 'Microsoft'],
                        ['icon' => 'amazon', 'name' => 'Amazon']
                    ],
                    'showCta' => true,
                    'ctaText' => 'Want to share your video testimonial?',
                    'ctaButtonText' => 'Submit Your Video',
                    'ctaLink' => '/submit-testimonial'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 232,
                'section_key' => 'videoTestimonials',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Written Testimonials Section
            [
                'id' => 233,
                'section_key' => 'writtenTestimonials',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Client Testimonials',
                        'backgroundColor' => 'bg-blue-100 dark:bg-blue-900/30',
                        'borderColor' => 'border-blue-200 dark:border-blue-800',
                        'textColor' => 'text-blue-700 dark:text-blue-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'What Our',
                        'highlightedText' => 'Clients',
                        'suffix' => 'Say',
                        'highlightGradient' => 'from-blue-600 to-indigo-600'
                    ],
                    'description' => 'Real success stories from businesses that have transformed their operations with our solutions.',
                    'stats' => [
                        ['icon' => 'star', 'value' => '4.9', 'label' => 'Average Rating'],
                        ['icon' => 'users', 'value' => '500+', 'label' => 'Verified Reviews'],
                        ['icon' => 'trending', 'value' => '98%', 'label' => 'Would Recommend'],
                        ['icon' => 'star', 'value' => '4.8', 'label' => 'Product Satisfaction']
                    ],
                    'showRatingSummary' => true,
                    'categories' => ['all', 'retail', 'manufacturing', 'logistics', 'healthcare', 'food', 'electronics'],
                    'testimonials' => [
                        [
                            'id' => 1,
                            'icon' => 'building',
                            'category' => 'manufacturing',
                            'author' => 'Sarah Johnson',
                            'company' => 'Precision Industries',
                            'rating' => 5,
                            'date' => 'March 2024',
                            'quote' => 'The platform transformed our supply chain visibility. We\'re now able to make data-driven decisions in real-time. The ROI was evident within the first quarter.',
                            'fullQuote' => 'The platform transformed our supply chain visibility. We\'re now able to make data-driven decisions in real-time. The ROI was evident within the first quarter. The team\'s expertise and support have been exceptional throughout the entire process. I would highly recommend this solution to any manufacturing company looking to optimize their inventory and supply chain operations.',
                            'result' => '35% cost reduction, 99.5% on-time delivery, 287% ROI',
                            'challenge' => 'Legacy systems caused inventory visibility gaps across 12 warehouses, leading to $2.5M in excess stock and frequent production delays.',
                            'solution' => 'Implemented AI-powered inventory optimization platform with real-time sync across all ERP systems and warehouses.',
                            'helpfulCount' => 48,
                            'link' => '/testimonials/precision-industries'
                        ],
                        [
                            'id' => 2,
                            'icon' => 'database',
                            'category' => 'retail',
                            'author' => 'Jessica Williams',
                            'company' => 'Fashion Forward Retail',
                            'rating' => 5,
                            'date' => 'February 2024',
                            'quote' => 'We finally have a single view of inventory across all channels. The AI forecasting has been a game-changer for our buying team.',
                            'fullQuote' => 'We finally have a single view of inventory across all channels. Our customers can buy anywhere, and we can fulfill from anywhere. The AI forecasting has been a game-changer for our buying team, reducing stockouts by over 75%. The platform paid for itself within 5 months.',
                            'result' => '50% markdown reduction, $4.5M revenue recovery',
                            'challenge' => 'Poor inventory visibility across online and 50+ physical stores led to 22% stockout rates and 18% markdown rates.',
                            'solution' => 'Implemented unified commerce platform with AI-powered demand forecasting and automated replenishment.',
                            'helpfulCount' => 52,
                            'link' => '/testimonials/fashion-forward'
                        ],
                        [
                            'id' => 3,
                            'icon' => 'truck',
                            'category' => 'logistics',
                            'author' => 'Michael Chen',
                            'company' => 'Global Logistics Solutions',
                            'rating' => 5,
                            'date' => 'January 2024',
                            'quote' => 'The billing automation alone paid for the entire platform within 4 months. We\'ve never had such accurate and efficient billing.',
                            'fullQuote' => 'The billing automation alone paid for the entire platform within 4 months. We\'ve never had such accurate and efficient billing. Our finance team can now focus on strategic initiatives instead of manual reconciliation. The ROI has been incredible.',
                            'result' => '$2.1M revenue recovered, 99.9% billing accuracy',
                            'challenge' => 'Manual billing processes caused 15% invoice rework rate and $1.8M annual revenue leakage.',
                            'solution' => 'Deployed automated billing engine with real-time rate validation and automated dispute resolution.',
                            'helpfulCount' => 63,
                            'link' => '/testimonials/global-logistics'
                        ],
                        [
                            'id' => 4,
                            'icon' => 'shield',
                            'category' => 'healthcare',
                            'author' => 'Dr. Emily Rodriguez',
                            'company' => 'HealthFirst Medical Network',
                            'rating' => 5,
                            'date' => 'December 2023',
                            'quote' => 'We\'ve eliminated expired inventory waste and improved patient care. The system pays for itself many times over.',
                            'fullQuote' => 'We\'ve eliminated expired inventory waste and improved patient care. The system pays for itself many times over. Our audit scores have never been better, and our staff loves the ease of use. The real-time expiration alerts have been a lifesaver.',
                            'result' => '90% waste reduction, 100% compliance rate',
                            'challenge' => 'Expiring medical supplies caused $1.2M in annual waste across 15 facilities with 120+ manual hours weekly.',
                            'solution' => 'Deployed RFID-based inventory tracking with expiration date alerts and automated reordering.',
                            'helpfulCount' => 41,
                            'link' => '/testimonials/healthfirst'
                        ],
                        [
                            'id' => 5,
                            'icon' => 'star',
                            'category' => 'food',
                            'author' => 'David Martinez',
                            'company' => 'FreshFood Distributors',
                            'rating' => 5,
                            'date' => 'November 2023',
                            'quote' => 'The expiration tracking has transformed our operations. We\'ve dramatically reduced waste and improved our bottom line.',
                            'fullQuote' => 'The expiration tracking has transformed our operations. We\'ve dramatically reduced waste and improved our bottom line. The real-time alerts have saved us from costly compliance issues. I can\'t imagine going back to our old manual processes.',
                            'result' => '71% spoilage reduction, $1.5M annual savings',
                            'challenge' => 'Product spoilage from poor expiration tracking caused $2.1M annual waste with limited lot traceability.',
                            'solution' => 'Implemented real-time expiration date management with cold chain monitoring.',
                            'helpfulCount' => 37,
                            'link' => '/testimonials/freshfood'
                        ],
                        [
                            'id' => 6,
                            'icon' => 'chip',
                            'category' => 'electronics',
                            'author' => 'Lisa Wong',
                            'company' => 'ElectroTech Manufacturing',
                            'rating' => 5,
                            'date' => 'October 2023',
                            'quote' => 'The obsolescence alerts have saved us millions. We\'re now proactively managing component lifecycles.',
                            'fullQuote' => 'The obsolescence alerts have saved us millions. We\'re now proactively managing component lifecycles instead of reacting to crises. The last-time buy recommendations are incredibly accurate and have prevented costly redesigns.',
                            'result' => '63% obsolescence reduction, $2M annual savings',
                            'challenge' => 'Component obsolescence caused $3.2M in redesign costs with 40% of products requiring costly redesigns.',
                            'solution' => 'Deployed obsolescence monitoring with last-time buy optimization and lifecycle management.',
                            'helpfulCount' => 29,
                            'link' => '/testimonials/electrotech'
                        ],
                        [
                            'id' => 7,
                            'icon' => 'building',
                            'category' => 'manufacturing',
                            'author' => 'Robert Taylor',
                            'company' => 'AeroTech Components',
                            'rating' => 5,
                            'date' => 'September 2023',
                            'quote' => 'The predictive analytics have reduced our downtime by 45% and improved our OEE significantly.',
                            'fullQuote' => 'The predictive analytics have reduced our downtime by 45% and improved our OEE significantly. We\'ve saved over $2M in unplanned downtime costs. The real-time alerts allow us to address issues before they become problems.',
                            'result' => '45% downtime reduction, 28% OEE improvement',
                            'challenge' => 'Unexpected equipment failures caused $2.5M in annual downtime costs and missed delivery deadlines.',
                            'solution' => 'Implemented predictive maintenance with IoT sensors and real-time monitoring dashboards.',
                            'helpfulCount' => 34,
                            'link' => '/testimonials/aerotech'
                        ],
                        [
                            'id' => 8,
                            'icon' => 'database',
                            'category' => 'retail',
                            'author' => 'Amanda Lee',
                            'company' => 'HomeGoods Distributors',
                            'rating' => 4,
                            'date' => 'August 2023',
                            'quote' => 'Great platform with excellent support. The implementation was smooth and the results speak for themselves.',
                            'fullQuote' => 'Great platform with excellent support. The implementation was smooth and the results speak for themselves. Our inventory turnover has increased dramatically, and our team loves the intuitive interface.',
                            'result' => '$2.8M savings, 64% inventory turnover increase',
                            'challenge' => 'Slow replenishment cycles caused frequent stockouts and lost sales opportunities.',
                            'solution' => 'Deployed automated replenishment with 3-day cycles and demand forecasting.',
                            'helpfulCount' => 22,
                            'link' => '/testimonials/homegoods'
                        ]
                    ],
                    'showTrustBadges' => true,
                    'trustText' => 'Trusted by industry leaders worldwide',
                    'trustBadges' => [
                        ['icon' => 'google', 'name' => 'Google'],
                        ['icon' => 'microsoft', 'name' => 'Microsoft'],
                        ['icon' => 'amazon', 'name' => 'Amazon'],
                        ['icon' => 'building', 'name' => 'Fortune 500'],
                        ['icon' => 'shield', 'name' => 'ISO Certified']
                    ],
                    'showLeaveReview' => true,
                    'leaveReviewText' => 'Share your experience with us',
                    'leaveReviewLink' => '/submit-review'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 234,
                'section_key' => 'writtenTestimonials',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Client Testimonials',
                        'backgroundColor' => 'bg-blue-100 dark:bg-blue-900/30',
                        'borderColor' => 'border-blue-200 dark:border-blue-800',
                        'textColor' => 'text-blue-700 dark:text-blue-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'What Our',
                        'highlightedText' => 'Clients',
                        'suffix' => 'Say',
                        'highlightGradient' => 'from-blue-600 to-indigo-600'
                    ],
                    'description' => 'Real success stories from businesses that have transformed their operations with our solutions.',
                    'stats' => [
                        ['icon' => 'star', 'value' => '4.9', 'label' => 'Average Rating'],
                        ['icon' => 'users', 'value' => '500+', 'label' => 'Verified Reviews'],
                        ['icon' => 'trending', 'value' => '98%', 'label' => 'Would Recommend'],
                        ['icon' => 'star', 'value' => '4.8', 'label' => 'Product Satisfaction']
                    ],
                    'showRatingSummary' => true,
                    'categories' => ['all', 'retail', 'manufacturing', 'logistics', 'healthcare', 'food', 'electronics'],
                    'testimonials' => [
                        [
                            'id' => 1,
                            'icon' => 'building',
                            'category' => 'manufacturing',
                            'author' => 'Sarah Johnson',
                            'role' => 'VP of Operations',
                            'company' => 'Precision Industries',
                            'rating' => 5,
                            'date' => 'March 2024',
                            'quote' => 'The platform transformed our supply chain visibility. We\'re now able to make data-driven decisions in real-time. The ROI was evident within the first quarter.',
                            'fullQuote' => 'The platform transformed our supply chain visibility. We\'re now able to make data-driven decisions in real-time. The ROI was evident within the first quarter. The team\'s expertise and support have been exceptional throughout the entire process. I would highly recommend this solution to any manufacturing company looking to optimize their inventory and supply chain operations.',
                            'result' => '35% cost reduction, 99.5% on-time delivery, 287% ROI',
                            'keyMetric' => '287%',
                            'challenge' => 'Legacy systems caused inventory visibility gaps across 12 warehouses, leading to $2.5M in excess stock and frequent production delays.',
                            'solution' => 'Implemented AI-powered inventory optimization platform with real-time sync across all ERP systems and warehouses.',
                            'helpfulCount' => 48,
                            'gradient' => 'from-blue-600 to-indigo-600',
                            'tags' => ['manufacturing', 'inventory optimization', 'ROI'],
                            'link' => '/testimonials/precision-industries'
                        ],
                        [
                            'id' => 2,
                            'icon' => 'database',
                            'category' => 'retail',
                            'author' => 'Jessica Williams',
                            'role' => 'VP of Merchandising',
                            'company' => 'Fashion Forward Retail',
                            'rating' => 5,
                            'date' => 'February 2024',
                            'quote' => 'We finally have a single view of inventory across all channels. The AI forecasting has been a game-changer for our buying team.',
                            'fullQuote' => 'We finally have a single view of inventory across all channels. Our customers can buy anywhere, and we can fulfill from anywhere. The AI forecasting has been a game-changer for our buying team, reducing stockouts by over 75%. The platform paid for itself within 5 months.',
                            'result' => '50% markdown reduction, $4.5M revenue recovery',
                            'keyMetric' => '$4.5M',
                            'challenge' => 'Poor inventory visibility across online and 50+ physical stores led to 22% stockout rates and 18% markdown rates.',
                            'solution' => 'Implemented unified commerce platform with AI-powered demand forecasting and automated replenishment.',
                            'helpfulCount' => 52,
                            'gradient' => 'from-purple-600 to-pink-600',
                            'tags' => ['retail', 'omnichannel', 'AI forecasting'],
                            'link' => '/testimonials/fashion-forward'
                        ],
                        [
                            'id' => 3,
                            'icon' => 'truck',
                            'category' => 'logistics',
                            'author' => 'Michael Chen',
                            'role' => 'CFO',
                            'company' => 'Global Logistics Solutions',
                            'rating' => 5,
                            'date' => 'January 2024',
                            'quote' => 'The billing automation alone paid for the entire platform within 4 months. We\'ve never had such accurate and efficient billing.',
                            'fullQuote' => 'The billing automation alone paid for the entire platform within 4 months. We\'ve never had such accurate and efficient billing. Our finance team can now focus on strategic initiatives instead of manual reconciliation. The ROI has been incredible.',
                            'result' => '$2.1M revenue recovered, 99.9% billing accuracy',
                            'keyMetric' => '312%',
                            'challenge' => 'Manual billing processes caused 15% invoice rework rate and $1.8M annual revenue leakage.',
                            'solution' => 'Deployed automated billing engine with real-time rate validation and automated dispute resolution.',
                            'helpfulCount' => 63,
                            'gradient' => 'from-cyan-600 to-blue-600',
                            'tags' => ['logistics', 'billing automation', 'revenue recovery'],
                            'link' => '/testimonials/global-logistics'
                        ],
                        [
                            'id' => 4,
                            'icon' => 'shield',
                            'category' => 'healthcare',
                            'author' => 'Dr. Emily Rodriguez',
                            'role' => 'Director of Operations',
                            'company' => 'HealthFirst Medical Network',
                            'rating' => 5,
                            'date' => 'December 2023',
                            'quote' => 'We\'ve eliminated expired inventory waste and improved patient care. The system pays for itself many times over.',
                            'fullQuote' => 'We\'ve eliminated expired inventory waste and improved patient care. The system pays for itself many times over. Our audit scores have never been better, and our staff loves the ease of use. The real-time expiration alerts have been a lifesaver.',
                            'result' => '90% waste reduction, 100% compliance rate',
                            'keyMetric' => '90%',
                            'challenge' => 'Expiring medical supplies caused $1.2M in annual waste across 15 facilities with 120+ manual hours weekly.',
                            'solution' => 'Deployed RFID-based inventory tracking with expiration date alerts and automated reordering.',
                            'helpfulCount' => 41,
                            'gradient' => 'from-teal-600 to-emerald-600',
                            'tags' => ['healthcare', 'RFID', 'expiration management'],
                            'link' => '/testimonials/healthfirst'
                        ],
                        [
                            'id' => 5,
                            'icon' => 'star',
                            'category' => 'food',
                            'author' => 'David Martinez',
                            'role' => 'Operations Director',
                            'company' => 'FreshFood Distributors',
                            'rating' => 5,
                            'date' => 'November 2023',
                            'quote' => 'The expiration tracking has transformed our operations. We\'ve dramatically reduced waste and improved our bottom line.',
                            'fullQuote' => 'The expiration tracking has transformed our operations. We\'ve dramatically reduced waste and improved our bottom line. The real-time alerts have saved us from costly compliance issues. I can\'t imagine going back to our old manual processes.',
                            'result' => '71% spoilage reduction, $1.5M annual savings',
                            'keyMetric' => '71%',
                            'challenge' => 'Product spoilage from poor expiration tracking caused $2.1M annual waste with limited lot traceability.',
                            'solution' => 'Implemented real-time expiration date management with cold chain monitoring.',
                            'helpfulCount' => 37,
                            'gradient' => 'from-orange-600 to-red-600',
                            'tags' => ['food & beverage', 'shelf-life', 'cold chain'],
                            'link' => '/testimonials/freshfood'
                        ],
                        [
                            'id' => 6,
                            'icon' => 'chip',
                            'category' => 'electronics',
                            'author' => 'Lisa Wong',
                            'role' => 'Supply Chain Manager',
                            'company' => 'ElectroTech Manufacturing',
                            'rating' => 5,
                            'date' => 'October 2023',
                            'quote' => 'The obsolescence alerts have saved us millions. We\'re now proactively managing component lifecycles.',
                            'fullQuote' => 'The obsolescence alerts have saved us millions. We\'re now proactively managing component lifecycles instead of reacting to crises. The last-time buy recommendations are incredibly accurate and have prevented costly redesigns.',
                            'result' => '63% obsolescence reduction, $2M annual savings',
                            'keyMetric' => '63%',
                            'challenge' => 'Component obsolescence caused $3.2M in redesign costs with 40% of products requiring costly redesigns.',
                            'solution' => 'Deployed obsolescence monitoring with last-time buy optimization and lifecycle management.',
                            'helpfulCount' => 29,
                            'gradient' => 'from-indigo-600 to-purple-600',
                            'tags' => ['electronics', 'obsolescence', 'lifecycle management'],
                            'link' => '/testimonials/electrotech'
                        ],
                        [
                            'id' => 7,
                            'icon' => 'building',
                            'category' => 'manufacturing',
                            'author' => 'Robert Taylor',
                            'role' => 'Plant Manager',
                            'company' => 'AeroTech Components',
                            'rating' => 5,
                            'date' => 'September 2023',
                            'quote' => 'The predictive analytics have reduced our downtime by 45% and improved our OEE significantly.',
                            'fullQuote' => 'The predictive analytics have reduced our downtime by 45% and improved our OEE significantly. We\'ve saved over $2M in unplanned downtime costs. The real-time alerts allow us to address issues before they become problems.',
                            'result' => '45% downtime reduction, 28% OEE improvement',
                            'keyMetric' => '45%',
                            'challenge' => 'Unexpected equipment failures caused $2.5M in annual downtime costs and missed delivery deadlines.',
                            'solution' => 'Implemented predictive maintenance with IoT sensors and real-time monitoring dashboards.',
                            'helpfulCount' => 34,
                            'gradient' => 'from-blue-600 to-cyan-600',
                            'tags' => ['manufacturing', 'predictive maintenance', 'IoT'],
                            'link' => '/testimonials/aerotech'
                        ],
                        [
                            'id' => 8,
                            'icon' => 'database',
                            'category' => 'retail',
                            'author' => 'Amanda Lee',
                            'role' => 'Supply Chain Director',
                            'company' => 'HomeGoods Distributors',
                            'rating' => 4,
                            'date' => 'August 2023',
                            'quote' => 'Great platform with excellent support. The implementation was smooth and the results speak for themselves.',
                            'fullQuote' => 'Great platform with excellent support. The implementation was smooth and the results speak for themselves. Our inventory turnover has increased dramatically, and our team loves the intuitive interface.',
                            'result' => '$2.8M savings, 64% inventory turnover increase',
                            'keyMetric' => '64%',
                            'challenge' => 'Slow replenishment cycles caused frequent stockouts and lost sales opportunities.',
                            'solution' => 'Deployed automated replenishment with 3-day cycles and demand forecasting.',
                            'helpfulCount' => 22,
                            'gradient' => 'from-blue-600 to-indigo-600',
                            'tags' => ['retail', 'replenishment', 'demand forecasting'],
                            'link' => '/testimonials/homegoods'
                        ]
                    ],
                    'showTrustBadges' => true,
                    'trustText' => 'Trusted by industry leaders worldwide',
                    'trustBadges' => [
                        ['icon' => 'google', 'name' => 'Google'],
                        ['icon' => 'microsoft', 'name' => 'Microsoft'],
                        ['icon' => 'amazon', 'name' => 'Amazon'],
                        ['icon' => 'building', 'name' => 'Fortune 500'],
                        ['icon' => 'shield', 'name' => 'ISO Certified']
                    ],
                    'showLeaveReview' => true,
                    'leaveReviewText' => 'Share your experience with us',
                    'leaveReviewLink' => '/submit-review'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 235,
                'section_key' => 'writtenTestimonials',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Testimonials Hub',
                        'backgroundColor' => 'bg-blue-100 dark:bg-blue-900/30',
                        'borderColor' => 'border-blue-200 dark:border-blue-800',
                        'textColor' => 'text-blue-700 dark:text-blue-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'What Our',
                        'highlightedText' => 'Clients',
                        'suffix' => 'Say',
                        'highlightGradient' => 'from-blue-600 to-indigo-600'
                    ],
                    'description' => 'Real success stories from businesses that have transformed their operations with our solutions.',
                    'stats' => [
                        ['icon' => 'star', 'value' => '4.9', 'label' => 'Average Rating', 'change' => '+0.2'],
                        ['icon' => 'users', 'value' => '500+', 'label' => 'Verified Reviews', 'change' => '+15%'],
                        ['icon' => 'trending', 'value' => '98%', 'label' => 'Would Recommend', 'change' => '+3%'],
                        ['icon' => 'chart', 'value' => '287%', 'label' => 'Average ROI', 'change' => '+12%']
                    ],
                    'categories' => ['all', 'retail', 'manufacturing', 'logistics', 'healthcare', 'food', 'electronics'],
                    'testimonials' => [
                        [
                            'id' => 1,
                            'icon' => 'building',
                            'category' => 'manufacturing',
                            'author' => 'Sarah Johnson',
                            'role' => 'VP of Operations',
                            'company' => 'Precision Industries',
                            'rating' => 5,
                            'date' => 'March 2024',
                            'quote' => 'The platform transformed our supply chain visibility. We\'re now able to make data-driven decisions in real-time.',
                            'fullQuote' => 'The platform transformed our supply chain visibility. We\'re now able to make data-driven decisions in real-time. The ROI was evident within the first quarter. The team\'s expertise and support have been exceptional throughout the entire process. I would highly recommend this solution to any manufacturing company looking to optimize their inventory and supply chain operations.',
                            'result' => '35% cost reduction, 99.5% on-time delivery, 287% ROI',
                            'keyMetric' => '287%',
                            'helpfulCount' => 48,
                            'tags' => ['manufacturing', 'inventory optimization', 'ROI'],
                            'link' => '/case-studies/precision-industries'
                        ],
                        [
                            'id' => 2,
                            'icon' => 'database',
                            'category' => 'retail',
                            'author' => 'Jessica Williams',
                            'role' => 'VP of Merchandising',
                            'company' => 'Fashion Forward Retail',
                            'rating' => 5,
                            'date' => 'February 2024',
                            'quote' => 'We finally have a single view of inventory across all channels. The AI forecasting has been a game-changer.',
                            'fullQuote' => 'We finally have a single view of inventory across all channels. Our customers can buy anywhere, and we can fulfill from anywhere. The AI forecasting has been a game-changer for our buying team, reducing stockouts by over 75%. The platform paid for itself within 5 months.',
                            'result' => '50% markdown reduction, $4.5M revenue recovery',
                            'keyMetric' => '$4.5M',
                            'helpfulCount' => 52,
                            'tags' => ['retail', 'omnichannel', 'AI forecasting'],
                            'link' => '/case-studies/fashion-forward'
                        ],
                        [
                            'id' => 3,
                            'icon' => 'truck',
                            'category' => 'logistics',
                            'author' => 'Michael Chen',
                            'role' => 'CFO',
                            'company' => 'Global Logistics Solutions',
                            'rating' => 5,
                            'date' => 'January 2024',
                            'quote' => 'The billing automation alone paid for the entire platform within 4 months. We\'ve never had such accurate billing.',
                            'fullQuote' => 'The billing automation alone paid for the entire platform within 4 months. We\'ve never had such accurate and efficient billing. Our finance team can now focus on strategic initiatives instead of manual reconciliation. The ROI has been incredible.',
                            'result' => '$2.1M revenue recovered, 99.9% billing accuracy',
                            'keyMetric' => '312%',
                            'helpfulCount' => 63,
                            'tags' => ['logistics', 'billing automation', 'revenue recovery'],
                            'link' => '/case-studies/global-logistics'
                        ],
                        [
                            'id' => 4,
                            'icon' => 'shield',
                            'category' => 'healthcare',
                            'author' => 'Dr. Emily Rodriguez',
                            'role' => 'Director of Operations',
                            'company' => 'HealthFirst Medical Network',
                            'rating' => 5,
                            'date' => 'December 2023',
                            'quote' => 'We\'ve eliminated expired inventory waste and improved patient care. The system pays for itself many times over.',
                            'fullQuote' => 'We\'ve eliminated expired inventory waste and improved patient care. The system pays for itself many times over. Our audit scores have never been better, and our staff loves the ease of use. The real-time expiration alerts have been a lifesaver.',
                            'result' => '90% waste reduction, 100% compliance rate',
                            'keyMetric' => '90%',
                            'helpfulCount' => 41,
                            'tags' => ['healthcare', 'RFID', 'expiration management'],
                            'link' => '/case-studies/healthfirst'
                        ],
                        [
                            'id' => 5,
                            'icon' => 'star',
                            'category' => 'food',
                            'author' => 'David Martinez',
                            'role' => 'Operations Director',
                            'company' => 'FreshFood Distributors',
                            'rating' => 5,
                            'date' => 'November 2023',
                            'quote' => 'The expiration tracking has transformed our operations. We\'ve dramatically reduced waste and improved our bottom line.',
                            'fullQuote' => 'The expiration tracking has transformed our operations. We\'ve dramatically reduced waste and improved our bottom line. The real-time alerts have saved us from costly compliance issues. I can\'t imagine going back to our old manual processes.',
                            'result' => '71% spoilage reduction, $1.5M annual savings',
                            'keyMetric' => '71%',
                            'helpfulCount' => 37,
                            'tags' => ['food & beverage', 'shelf-life', 'cold chain'],
                            'link' => '/case-studies/freshfood'
                        ],
                        [
                            'id' => 6,
                            'icon' => 'chip',
                            'category' => 'electronics',
                            'author' => 'Lisa Wong',
                            'role' => 'Supply Chain Manager',
                            'company' => 'ElectroTech Manufacturing',
                            'rating' => 5,
                            'date' => 'October 2023',
                            'quote' => 'The obsolescence alerts have saved us millions. We\'re now proactively managing component lifecycles.',
                            'fullQuote' => 'The obsolescence alerts have saved us millions. We\'re now proactively managing component lifecycles instead of reacting to crises. The last-time buy recommendations are incredibly accurate and have prevented costly redesigns.',
                            'result' => '63% obsolescence reduction, $2M annual savings',
                            'keyMetric' => '63%',
                            'helpfulCount' => 29,
                            'tags' => ['electronics', 'obsolescence', 'lifecycle management'],
                            'link' => '/case-studies/electrotech'
                        ],
                        [
                            'id' => 7,
                            'icon' => 'building',
                            'category' => 'manufacturing',
                            'author' => 'Robert Taylor',
                            'role' => 'Plant Manager',
                            'company' => 'AeroTech Components',
                            'rating' => 5,
                            'date' => 'September 2023',
                            'quote' => 'The predictive analytics have reduced our downtime by 45% and improved our OEE significantly.',
                            'fullQuote' => 'The predictive analytics have reduced our downtime by 45% and improved our OEE significantly. We\'ve saved over $2M in unplanned downtime costs. The real-time alerts allow us to address issues before they become problems.',
                            'result' => '45% downtime reduction, 28% OEE improvement',
                            'keyMetric' => '45%',
                            'helpfulCount' => 34,
                            'tags' => ['manufacturing', 'predictive maintenance', 'IoT'],
                            'link' => '/case-studies/aerotech'
                        ],
                        [
                            'id' => 8,
                            'icon' => 'database',
                            'category' => 'retail',
                            'author' => 'Amanda Lee',
                            'role' => 'Supply Chain Director',
                            'company' => 'HomeGoods Distributors',
                            'rating' => 4,
                            'date' => 'August 2023',
                            'quote' => 'Great platform with excellent support. The implementation was smooth and the results speak for themselves.',
                            'fullQuote' => 'Great platform with excellent support. The implementation was smooth and the results speak for themselves. Our inventory turnover has increased dramatically, and our team loves the intuitive interface.',
                            'result' => '$2.8M savings, 64% inventory turnover increase',
                            'keyMetric' => '64%',
                            'helpfulCount' => 22,
                            'tags' => ['retail', 'replenishment', 'demand forecasting'],
                            'link' => '/case-studies/homegoods'
                        ]
                    ],
                    'showNewsletter' => true,
                    'showTrustBadges' => true,
                    'trustText' => 'Trusted by industry leaders worldwide',
                    'trustBadges' => [
                        ['icon' => 'google', 'name' => 'Google'],
                        ['icon' => 'microsoft', 'name' => 'Microsoft'],
                        ['icon' => 'amazon', 'name' => 'Amazon'],
                        ['icon' => 'building', 'name' => 'Fortune 500'],
                        ['icon' => 'shield', 'name' => 'ISO Certified']
                    ],
                    'showLeaveReview' => true,
                    'leaveReviewText' => 'Share your experience with us',
                    'leaveReviewLink' => '/submit-review'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 236,
                'section_key' => 'writtenTestimonials',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Industry Expert Reviews Section
            [
                'id' => 237,
                'section_key' => 'industryExpertReviews',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Industry Recognition',
                        'backgroundColor' => 'bg-purple-100 dark:bg-purple-900/30',
                        'borderColor' => 'border-purple-200 dark:border-purple-800',
                        'textColor' => 'text-purple-700 dark:text-purple-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'What',
                        'highlightedText' => 'Experts',
                        'suffix' => 'Are Saying',
                        'highlightGradient' => 'from-purple-600 to-indigo-600'
                    ],
                    'description' => 'Industry analysts, media outlets, and consultants recognize our platform\'s impact and innovation.',
                    'stats' => [
                        ['icon' => 'star', 'value' => '4.9', 'label' => 'Expert Rating'],
                        ['icon' => 'newspaper', 'value' => '50+', 'label' => 'Media Mentions'],
                        ['icon' => 'trophy', 'value' => '15+', 'label' => 'Industry Awards'],
                        ['icon' => 'users', 'value' => '25+', 'label' => 'Analyst Reports']
                    ],
                    'categories' => ['all', 'analyst', 'media', 'consultant', 'award'],
                    'reviews' => [
                        [
                            'id' => 1,
                            'icon' => 'chart',
                            'category' => 'analyst',
                            'featured' => true,
                            'publication' => 'Gartner',
                            'author' => 'John Smith',
                            'role' => 'Senior Research Director',
                            'organization' => 'Gartner',
                            'date' => 'March 2024',
                            'rating' => 5,
                            'quote' => 'This platform represents a paradigm shift in supply chain management. The AI-driven forecasting capabilities are unmatched in the industry.',
                            'fullQuote' => 'This platform represents a paradigm shift in supply chain management. The AI-driven forecasting capabilities are unmatched in the industry. Organizations using this solution have seen significant improvements in forecast accuracy and inventory optimization.',
                            'highlights' => [
                                'Named Leader in Supply Chain Planning',
                                'Highest score for AI/ML capabilities',
                                'Strong customer satisfaction ratings'
                            ],
                            'link' => 'https://gartner.com/review'
                        ],
                        [
                            'id' => 2,
                            'icon' => 'newspaper',
                            'category' => 'media',
                            'featured' => false,
                            'publication' => 'Forbes',
                            'author' => 'Sarah Williams',
                            'role' => 'Technology Editor',
                            'organization' => 'Forbes',
                            'date' => 'February 2024',
                            'rating' => 5,
                            'quote' => 'This solution is revolutionizing how companies manage their inventory. The real-time visibility and predictive analytics are game-changers.',
                            'fullQuote' => 'This solution is revolutionizing how companies manage their inventory. The real-time visibility and predictive analytics are game-changers for businesses of all sizes. We\'ve seen remarkable case studies across retail, manufacturing, and logistics sectors.',
                            'highlights' => [
                                'Featured in \'Top Supply Chain Tech\'',
                                'Recognized for innovation',
                                'Customer success stories highlighted'
                            ],
                            'link' => 'https://forbes.com/article'
                        ],
                        [
                            'id' => 3,
                            'icon' => 'users',
                            'category' => 'consultant',
                            'featured' => false,
                            'publication' => 'McKinsey & Company',
                            'author' => 'David Chen',
                            'role' => 'Partner',
                            'organization' => 'McKinsey & Company',
                            'date' => 'January 2024',
                            'rating' => 5,
                            'quote' => 'The platform delivers exceptional ROI for clients. We\'ve seen inventory reductions of 25-35% and significant improvements in forecast accuracy.',
                            'fullQuote' => 'The platform delivers exceptional ROI for clients. We\'ve seen inventory reductions of 25-35% and significant improvements in forecast accuracy. The implementation is smooth, and clients report high satisfaction with the support team.',
                            'highlights' => [
                                'Recommended for enterprise clients',
                                'High marks for ease of integration',
                                'Strong customer support ratings'
                            ],
                            'link' => 'https://mckinsey.com/insights'
                        ],
                        [
                            'id' => 4,
                            'icon' => 'trophy',
                            'category' => 'award',
                            'featured' => false,
                            'publication' => 'Supply Chain Awards',
                            'author' => 'Award Committee',
                            'role' => 'Judging Panel',
                            'organization' => 'Supply Chain Excellence Awards',
                            'date' => 'December 2023',
                            'rating' => 5,
                            'quote' => 'Winner of Best Supply Chain Innovation. The platform demonstrated exceptional results and innovation in inventory management.',
                            'fullQuote' => 'Winner of Best Supply Chain Innovation. The platform demonstrated exceptional results and innovation in inventory management. The judges were impressed by the measurable ROI and customer satisfaction metrics presented.',
                            'highlights' => [
                                'Best Supply Chain Innovation 2023',
                                'Recognized for AI/ML excellence',
                                'Customer impact award'
                            ],
                            'link' => 'https://supplychainawards.com/winners'
                        ],
                        [
                            'id' => 5,
                            'icon' => 'chart',
                            'category' => 'analyst',
                            'featured' => false,
                            'publication' => 'IDC',
                            'author' => 'Lisa Anderson',
                            'role' => 'Research VP',
                            'organization' => 'IDC',
                            'date' => 'November 2023',
                            'rating' => 5,
                            'quote' => 'The platform\'s AI capabilities are among the best in class. Clients report significant improvements in supply chain efficiency.',
                            'fullQuote' => 'The platform\'s AI capabilities are among the best in class. Clients report significant improvements in supply chain efficiency, with some achieving over 40% reduction in inventory carrying costs.',
                            'highlights' => [
                                'Strong market position',
                                'High customer satisfaction',
                                'Innovative technology stack'
                            ],
                            'link' => 'https://idc.com/report'
                        ],
                        [
                            'id' => 6,
                            'icon' => 'newspaper',
                            'category' => 'media',
                            'featured' => false,
                            'publication' => 'Wall Street Journal',
                            'author' => 'Michael Brown',
                            'role' => 'Business Reporter',
                            'organization' => 'WSJ',
                            'date' => 'October 2023',
                            'rating' => 4,
                            'quote' => 'This technology is helping companies navigate supply chain disruptions with real-time insights and predictive analytics.',
                            'fullQuote' => 'This technology is helping companies navigate supply chain disruptions with real-time insights and predictive analytics. The platform has become essential for businesses looking to build resilient supply chains.',
                            'highlights' => [
                                'Featured in Tech section',
                                'Case study highlighted',
                                'Industry expert quotes'
                            ],
                            'link' => 'https://wsj.com/technology'
                        ]
                    ],
                    'showAwards' => true,
                    'awardsTitle' => 'Awards & Recognition',
                    'awards' => [
                        [
                            'icon' => 'trophy',
                            'title' => 'Best Supply Chain Innovation',
                            'presentedBy' => 'Supply Chain Excellence Awards',
                            'year' => '2023'
                        ],
                        [
                            'icon' => 'trophy',
                            'title' => 'AI Platform of the Year',
                            'presentedBy' => 'Tech Innovation Awards',
                            'year' => '2023'
                        ],
                        [
                            'icon' => 'trophy',
                            'title' => 'Customer Satisfaction Leader',
                            'presentedBy' => 'Software Reviews',
                            'year' => '2024'
                        ]
                    ],
                    'showTrustIndicators' => true,
                    'trustText' => 'Recognized by industry leaders worldwide',
                    'trustLogos' => [
                        ['icon' => 'google', 'name' => 'Google'],
                        ['icon' => 'microsoft', 'name' => 'Microsoft'],
                        ['icon' => 'amazon', 'name' => 'Amazon']
                    ],
                    'showCta' => true,
                    'ctaText' => 'Want to see what the experts are saying?',
                    'ctaButtonText' => 'View Press Kit',
                    'ctaLink' => '/press'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 238,
                'section_key' => 'industryExpertReviews',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Expert Recognition',
                        'backgroundColor' => 'bg-purple-100 dark:bg-purple-900/30',
                        'borderColor' => 'border-purple-200 dark:border-purple-800',
                        'textColor' => 'text-purple-700 dark:text-purple-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'What',
                        'highlightedText' => 'Industry Experts',
                        'suffix' => 'Say',
                        'highlightGradient' => 'from-purple-600 to-indigo-600'
                    ],
                    'description' => 'Leading analysts, media outlets, and consultants recognize our platform\'s impact and innovation.',
                    'stats' => [
                        ['icon' => 'star', 'value' => '4.9', 'label' => 'Expert Rating', 'change' => '+0.2'],
                        ['icon' => 'newspaper', 'value' => '50+', 'label' => 'Media Mentions', 'change' => '+12'],
                        ['icon' => 'trophy', 'value' => '15+', 'label' => 'Industry Awards', 'change' => '+3'],
                        ['icon' => 'chart', 'value' => '25+', 'label' => 'Analyst Reports', 'change' => '+5']
                    ],
                    'categories' => ['all', 'analyst', 'media', 'consultant', 'award'],
                    'reviews' => [
                        [
                            'id' => 1,
                            'category' => 'analyst',
                            'featured' => true,
                            'publication' => 'Gartner',
                            'author' => 'John Smith',
                            'role' => 'Senior Research Director',
                            'organization' => 'Gartner',
                            'date' => 'March 2024',
                            'rating' => 5,
                            'quote' => 'This platform represents a paradigm shift in supply chain management. The AI-driven forecasting capabilities are unmatched in the industry.',
                            'fullQuote' => 'This platform represents a paradigm shift in supply chain management. The AI-driven forecasting capabilities are unmatched in the industry. Organizations using this solution have seen significant improvements in forecast accuracy and inventory optimization.',
                            'highlights' => [
                                'Named Leader in Supply Chain Planning',
                                'Highest score for AI/ML capabilities',
                                'Strong customer satisfaction ratings'
                            ],
                            'link' => 'https://gartner.com/review'
                        ],
                        [
                            'id' => 2,
                            'category' => 'media',
                            'featured' => true,
                            'publication' => 'Forbes',
                            'author' => 'Sarah Williams',
                            'role' => 'Technology Editor',
                            'organization' => 'Forbes',
                            'date' => 'February 2024',
                            'rating' => 5,
                            'quote' => 'This solution is revolutionizing how companies manage their inventory. The real-time visibility and predictive analytics are game-changers.',
                            'fullQuote' => 'This solution is revolutionizing how companies manage their inventory. The real-time visibility and predictive analytics are game-changers for businesses of all sizes. We\'ve seen remarkable case studies across retail, manufacturing, and logistics sectors.',
                            'highlights' => [
                                'Featured in \'Top Supply Chain Tech\'',
                                'Recognized for innovation',
                                'Customer success stories highlighted'
                            ],
                            'link' => 'https://forbes.com/article'
                        ],
                        [
                            'id' => 3,
                            'category' => 'consultant',
                            'featured' => false,
                            'publication' => 'McKinsey & Company',
                            'author' => 'David Chen',
                            'role' => 'Partner',
                            'organization' => 'McKinsey & Company',
                            'date' => 'January 2024',
                            'rating' => 5,
                            'quote' => 'The platform delivers exceptional ROI for clients. We\'ve seen inventory reductions of 25-35% and significant improvements in forecast accuracy.',
                            'fullQuote' => 'The platform delivers exceptional ROI for clients. We\'ve seen inventory reductions of 25-35% and significant improvements in forecast accuracy. The implementation is smooth, and clients report high satisfaction with the support team.',
                            'highlights' => [
                                'Recommended for enterprise clients',
                                'High marks for ease of integration',
                                'Strong customer support ratings'
                            ],
                            'link' => 'https://mckinsey.com/insights'
                        ],
                        [
                            'id' => 4,
                            'category' => 'award',
                            'featured' => false,
                            'publication' => 'Supply Chain Awards',
                            'author' => 'Award Committee',
                            'role' => 'Judging Panel',
                            'organization' => 'Supply Chain Excellence Awards',
                            'date' => 'December 2023',
                            'rating' => 5,
                            'quote' => 'Winner of Best Supply Chain Innovation. The platform demonstrated exceptional results and innovation in inventory management.',
                            'fullQuote' => 'Winner of Best Supply Chain Innovation. The platform demonstrated exceptional results and innovation in inventory management. The judges were impressed by the measurable ROI and customer satisfaction metrics presented.',
                            'highlights' => [
                                'Best Supply Chain Innovation 2023',
                                'Recognized for AI/ML excellence',
                                'Customer impact award'
                            ],
                            'link' => 'https://supplychainawards.com/winners'
                        ],
                        [
                            'id' => 5,
                            'category' => 'analyst',
                            'featured' => false,
                            'publication' => 'IDC',
                            'author' => 'Lisa Anderson',
                            'role' => 'Research VP',
                            'organization' => 'IDC',
                            'date' => 'November 2023',
                            'rating' => 5,
                            'quote' => 'The platform\'s AI capabilities are among the best in class. Clients report significant improvements in supply chain efficiency.',
                            'fullQuote' => 'The platform\'s AI capabilities are among the best in class. Clients report significant improvements in supply chain efficiency, with some achieving over 40% reduction in inventory carrying costs.',
                            'highlights' => [
                                'Strong market position',
                                'High customer satisfaction',
                                'Innovative technology stack'
                            ],
                            'link' => 'https://idc.com/report'
                        ],
                        [
                            'id' => 6,
                            'category' => 'media',
                            'featured' => false,
                            'publication' => 'Wall Street Journal',
                            'author' => 'Michael Brown',
                            'role' => 'Business Reporter',
                            'organization' => 'WSJ',
                            'date' => 'October 2023',
                            'rating' => 4,
                            'quote' => 'This technology is helping companies navigate supply chain disruptions with real-time insights and predictive analytics.',
                            'fullQuote' => 'This technology is helping companies navigate supply chain disruptions with real-time insights and predictive analytics. The platform has become essential for businesses looking to build resilient supply chains.',
                            'highlights' => [
                                'Featured in Tech section',
                                'Case study highlighted',
                                'Industry expert quotes'
                            ],
                            'link' => 'https://wsj.com/technology'
                        ]
                    ],
                    'showPressKit' => true,
                    'pressKitLink' => '/press-kit',
                    'showTrustIndicators' => true,
                    'trustText' => 'Recognized by industry leaders worldwide',
                    'trustLogos' => [
                        ['icon' => 'google', 'name' => 'Google'],
                        ['icon' => 'microsoft', 'name' => 'Microsoft'],
                        ['icon' => 'amazon', 'name' => 'Amazon']
                    ],
                    'showCta' => true,
                    'ctaText' => 'Want to see our full press coverage?',
                    'ctaButtonText' => 'Visit Press Room',
                    'ctaLink' => '/press'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 239,
                'section_key' => 'industryExpertReviews',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Expert Recognition',
                        'backgroundColor' => 'bg-purple-100 dark:bg-purple-900/30',
                        'borderColor' => 'border-purple-200 dark:border-purple-800',
                        'textColor' => 'text-purple-700 dark:text-purple-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Industry',
                        'highlightedText' => 'Recognition',
                        'suffix' => 'Hub',
                        'highlightGradient' => 'from-purple-600 to-indigo-600'
                    ],
                    'description' => 'Discover what industry experts, analysts, and awards are saying about our platform.',
                    'stats' => [
                        ['icon' => 'star', 'value' => '4.9', 'label' => 'Expert Rating', 'trend' => '+0.2'],
                        ['icon' => 'newspaper', 'value' => '50+', 'label' => 'Media Mentions', 'trend' => '+12'],
                        ['icon' => 'trophy', 'value' => '15+', 'label' => 'Industry Awards', 'trend' => '+3'],
                        ['icon' => 'document-report', 'value' => '25+', 'label' => 'Analyst Reports', 'trend' => '+5']
                    ],
                    'timeline' => [
                        [
                            'icon' => 'trophy',
                            'year' => '2024',
                            'title' => 'Best Supply Chain Innovation',
                            'description' => 'Won the prestigious Supply Chain Excellence Award for AI-driven inventory optimization.',
                            'publication' => 'Supply Chain Awards'
                        ],
                        [
                            'icon' => 'newspaper',
                            'year' => '2023',
                            'title' => 'Named Leader by Gartner',
                            'description' => 'Positioned as a Leader in the Gartner Magic Quadrant for Supply Chain Planning.',
                            'publication' => 'Gartner'
                        ],
                        [
                            'icon' => 'chart',
                            'year' => '2023',
                            'title' => 'IDC MarketScape Recognition',
                            'description' => 'Recognized as a Major Player in the IDC MarketScape for Inventory Optimization.',
                            'publication' => 'IDC'
                        ],
                        [
                            'icon' => 'users',
                            'year' => '2022',
                            'title' => 'Forbes Technology Council',
                            'description' => 'Featured as a top supply chain technology solution by Forbes.',
                            'publication' => 'Forbes'
                        ]
                    ],
                    'reviews' => [
                        [
                            'id' => 1,
                            'category' => 'analyst',
                            'publication' => 'Gartner',
                            'author' => 'John Smith',
                            'role' => 'Senior Research Director',
                            'organization' => 'Gartner',
                            'date' => 'March 2024',
                            'year' => '2024',
                            'rating' => 5,
                            'quote' => 'This platform represents a paradigm shift in supply chain management. The AI-driven forecasting capabilities are unmatched in the industry.',
                            'fullQuote' => 'This platform represents a paradigm shift in supply chain management. The AI-driven forecasting capabilities are unmatched in the industry. Organizations using this solution have seen significant improvements in forecast accuracy and inventory optimization. The platform\'s ability to integrate with existing ERP systems is particularly noteworthy.',
                            'highlights' => [
                                'Named Leader in Supply Chain Planning',
                                'Highest score for AI/ML capabilities',
                                'Strong customer satisfaction ratings'
                            ],
                            'link' => 'https://gartner.com/review'
                        ],
                        [
                            'id' => 2,
                            'category' => 'media',
                            'publication' => 'Forbes',
                            'author' => 'Sarah Williams',
                            'role' => 'Technology Editor',
                            'organization' => 'Forbes',
                            'date' => 'February 2024',
                            'year' => '2024',
                            'rating' => 5,
                            'quote' => 'This solution is revolutionizing how companies manage their inventory. The real-time visibility and predictive analytics are game-changers.',
                            'fullQuote' => 'This solution is revolutionizing how companies manage their inventory. The real-time visibility and predictive analytics are game-changers for businesses of all sizes. We\'ve seen remarkable case studies across retail, manufacturing, and logistics sectors.',
                            'highlights' => [
                                'Featured in \'Top Supply Chain Tech\'',
                                'Recognized for innovation',
                                'Customer success stories highlighted'
                            ],
                            'link' => 'https://forbes.com/article'
                        ],
                        [
                            'id' => 3,
                            'category' => 'consultant',
                            'publication' => 'McKinsey & Company',
                            'author' => 'David Chen',
                            'role' => 'Partner',
                            'organization' => 'McKinsey & Company',
                            'date' => 'January 2024',
                            'year' => '2024',
                            'rating' => 5,
                            'quote' => 'The platform delivers exceptional ROI for clients. We\'ve seen inventory reductions of 25-35% and significant improvements in forecast accuracy.',
                            'fullQuote' => 'The platform delivers exceptional ROI for clients. We\'ve seen inventory reductions of 25-35% and significant improvements in forecast accuracy. The implementation is smooth, and clients report high satisfaction with the support team.',
                            'highlights' => [
                                'Recommended for enterprise clients',
                                'High marks for ease of integration',
                                'Strong customer support ratings'
                            ],
                            'link' => 'https://mckinsey.com/insights'
                        ],
                        [
                            'id' => 4,
                            'category' => 'analyst',
                            'publication' => 'IDC',
                            'author' => 'Lisa Anderson',
                            'role' => 'Research VP',
                            'organization' => 'IDC',
                            'date' => 'November 2023',
                            'year' => '2023',
                            'rating' => 5,
                            'quote' => 'The platform\'s AI capabilities are among the best in class. Clients report significant improvements in supply chain efficiency.',
                            'fullQuote' => 'The platform\'s AI capabilities are among the best in class. Clients report significant improvements in supply chain efficiency, with some achieving over 40% reduction in inventory carrying costs.',
                            'highlights' => [
                                'Strong market position',
                                'High customer satisfaction',
                                'Innovative technology stack'
                            ],
                            'link' => 'https://idc.com/report'
                        ],
                        [
                            'id' => 5,
                            'category' => 'media',
                            'publication' => 'Wall Street Journal',
                            'author' => 'Michael Brown',
                            'role' => 'Business Reporter',
                            'organization' => 'WSJ',
                            'date' => 'October 2023',
                            'year' => '2023',
                            'rating' => 4,
                            'quote' => 'This technology is helping companies navigate supply chain disruptions with real-time insights and predictive analytics.',
                            'fullQuote' => 'This technology is helping companies navigate supply chain disruptions with real-time insights and predictive analytics. The platform has become essential for businesses looking to build resilient supply chains.',
                            'highlights' => [
                                'Featured in Tech section',
                                'Case study highlighted',
                                'Industry expert quotes'
                            ],
                            'link' => 'https://wsj.com/technology'
                        ]
                    ],
                    'reports' => [
                        [
                            'icon' => 'document-report',
                            'title' => 'Magic Quadrant for Supply Chain Planning',
                            'publisher' => 'Gartner',
                            'date' => 'March 2024',
                            'rating' => 4.8,
                            'description' => 'Comprehensive analysis of supply chain planning vendors. Our platform recognized as a Leader with highest ability to execute.',
                            'link' => '/reports/gartner-mq-2024.pdf'
                        ],
                        [
                            'icon' => 'document-report',
                            'title' => 'MarketScape for Inventory Optimization',
                            'publisher' => 'IDC',
                            'date' => 'November 2023',
                            'rating' => 4.7,
                            'description' => 'IDC MarketScape assessment of inventory optimization solutions. Recognized as a Major Player with strong capabilities.',
                            'link' => '/reports/idc-marketscape-2023.pdf'
                        ]
                    ],
                    'awards' => [
                        [
                            'icon' => 'trophy',
                            'title' => 'Best Supply Chain Innovation',
                            'presentedBy' => 'Supply Chain Excellence Awards',
                            'year' => '2024',
                            'description' => 'Recognized for AI-driven inventory optimization platform'
                        ],
                        [
                            'icon' => 'trophy',
                            'title' => 'AI Platform of the Year',
                            'presentedBy' => 'Tech Innovation Awards',
                            'year' => '2023',
                            'description' => 'Awarded for breakthrough AI/ML capabilities'
                        ],
                        [
                            'icon' => 'trophy',
                            'title' => 'Customer Satisfaction Leader',
                            'presentedBy' => 'Software Reviews',
                            'year' => '2024',
                            'description' => 'Highest customer satisfaction score in supply chain software'
                        ]
                    ],
                    'pressKitLink' => '/press-kit'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 240,
                'section_key' => 'industryExpertReviews',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Partner Testimonials Section
            [
                'id' => 241,
                'section_key' => 'partnerTestimonials',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Partner Success',
                        'backgroundColor' => 'bg-blue-100 dark:bg-blue-900/30',
                        'borderColor' => 'border-blue-200 dark:border-blue-800',
                        'textColor' => 'text-blue-700 dark:text-blue-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'What Our',
                        'highlightedText' => 'Partners',
                        'suffix' => 'Say',
                        'highlightGradient' => 'from-blue-600 to-indigo-600'
                    ],
                    'description' => 'Hear from our technology, implementation, and reseller partners about their experience working with us.',
                    'stats' => [
                        ['icon' => 'handshake', 'value' => '150+', 'label' => 'Global Partners'],
                        ['icon' => 'users', 'value' => '45+', 'label' => 'Countries Served'],
                        ['icon' => 'trending', 'value' => '98%', 'label' => 'Partner Satisfaction'],
                        ['icon' => 'chart', 'value' => '3x', 'label' => 'Revenue Growth']
                    ],
                    'categories' => ['all', 'technology', 'implementation', 'reseller', 'strategic'],
                    'testimonials' => [
                        [
                            'id' => 1,
                            'icon' => 'chip',
                            'category' => 'technology',
                            'featured' => true,
                            'partnerType' => 'Technology Partner',
                            'partnerSince' => '2022',
                            'author' => 'Sarah Johnson',
                            'role' => 'VP of Alliances',
                            'company' => 'TechIntegrate Solutions',
                            'rating' => 5,
                            'quote' => 'The integration was seamless and their API documentation is outstanding. Our joint customers have seen remarkable results with the combined solution.',
                            'fullQuote' => 'The integration was seamless and their API documentation is outstanding. Our joint customers have seen remarkable results with the combined solution. The support team has been responsive and collaborative throughout our partnership.',
                            'results' => ['35% faster implementation', '98% customer satisfaction'],
                            'collaboration' => [
                                'Joint go-to-market strategy launched in Q1 2024',
                                'Co-developed integration framework',
                                'Shared customer success stories'
                            ],
                            'link' => '/partners/techintegrate'
                        ],
                        [
                            'id' => 2,
                            'icon' => 'sparkles',
                            'category' => 'implementation',
                            'featured' => false,
                            'partnerType' => 'Implementation Partner',
                            'partnerSince' => '2021',
                            'author' => 'Michael Chen',
                            'role' => 'Managing Director',
                            'company' => 'Global Implementations',
                            'rating' => 5,
                            'quote' => 'We\'ve implemented this platform for over 50 clients and the feedback has been overwhelmingly positive. The ROI is consistently impressive.',
                            'fullQuote' => 'We\'ve implemented this platform for over 50 clients and the feedback has been overwhelmingly positive. The ROI is consistently impressive. The training and certification program prepared our team thoroughly.',
                            'results' => ['50+ successful implementations', '100% client retention'],
                            'collaboration' => [
                                'Certified implementation specialists',
                                'Dedicated partner success manager',
                                'Regular joint training sessions'
                            ],
                            'link' => '/partners/global-implementations'
                        ],
                        [
                            'id' => 3,
                            'icon' => 'handshake',
                            'category' => 'reseller',
                            'featured' => false,
                            'partnerType' => 'Reseller Partner',
                            'partnerSince' => '2023',
                            'author' => 'David Williams',
                            'role' => 'VP of Sales',
                            'company' => 'Enterprise Software Solutions',
                            'rating' => 5,
                            'quote' => 'The partner program provides excellent margins and support. Our sales team loves selling this solution because it delivers real value.',
                            'fullQuote' => 'The partner program provides excellent margins and support. Our sales team loves selling this solution because it delivers real value. The joint marketing support has been exceptional.',
                            'results' => ['$2.5M in joint revenue', '25+ new customers'],
                            'collaboration' => [
                                'Co-marketing campaigns',
                                'Sales enablement training',
                                'Quarterly business reviews'
                            ],
                            'link' => '/partners/enterprise-software'
                        ],
                        [
                            'id' => 4,
                            'icon' => 'trending',
                            'category' => 'strategic',
                            'featured' => false,
                            'partnerType' => 'Strategic Partner',
                            'partnerSince' => '2020',
                            'author' => 'Lisa Anderson',
                            'role' => 'SVP Strategic Alliances',
                            'company' => 'Strategic Consulting Group',
                            'rating' => 5,
                            'quote' => 'This partnership has been transformative for our consulting practice. The platform\'s capabilities set us apart from competitors.',
                            'fullQuote' => 'This partnership has been transformative for our consulting practice. The platform\'s capabilities set us apart from competitors. Our clients consistently praise the solution\'s ease of use and powerful analytics.',
                            'results' => ['40+ joint consulting engagements', 'Industry recognition'],
                            'collaboration' => [
                                'Strategic advisory board participation',
                                'Joint thought leadership content',
                                'Co-developed industry solutions'
                            ],
                            'link' => '/partners/strategic-consulting'
                        ],
                        [
                            'id' => 5,
                            'icon' => 'database',
                            'category' => 'technology',
                            'featured' => false,
                            'partnerType' => 'Technology Partner',
                            'partnerSince' => '2023',
                            'author' => 'Robert Taylor',
                            'role' => 'CTO',
                            'company' => 'DataSync Technologies',
                            'rating' => 4,
                            'quote' => 'The platform\'s flexibility made integration straightforward. We\'re excited about the joint value we can deliver to customers.',
                            'fullQuote' => 'The platform\'s flexibility made integration straightforward. We\'re excited about the joint value we can deliver to customers. The API-first approach aligns perfectly with our product strategy.',
                            'results' => ['Seamless data integration', 'Enhanced product offering'],
                            'collaboration' => [
                                'Joint product roadmap alignment',
                                'Co-marketing initiatives',
                                'Technical integration support'
                            ],
                            'link' => '/partners/datasync'
                        ]
                    ],
                    'showTrustIndicators' => true,
                    'trustText' => 'Trusted by industry leaders worldwide',
                    'trustLogos' => [
                        ['icon' => 'google', 'name' => 'Google'],
                        ['icon' => 'microsoft', 'name' => 'Microsoft'],
                        ['icon' => 'amazon', 'name' => 'Amazon']
                    ],
                    'showPartnerProgram' => true,
                    'partnerCtaText' => 'Ready to become a partner?',
                    'partnerCtaButtonText' => 'Join Our Partner Program',
                    'partnerCtaLink' => '/partners'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 242,
                'section_key' => 'partnerTestimonials',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Partner Voices',
                        'backgroundColor' => 'bg-blue-100 dark:bg-blue-900/30',
                        'borderColor' => 'border-blue-200 dark:border-blue-800',
                        'textColor' => 'text-blue-700 dark:text-blue-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'What Our',
                        'highlightedText' => 'Partners',
                        'suffix' => 'Say',
                        'highlightGradient' => 'from-blue-600 to-indigo-600'
                    ],
                    'description' => 'Hear from our technology, implementation, and reseller partners about their experience working with us.',
                    'stats' => [
                        ['icon' => 'handshake', 'value' => '150+', 'label' => 'Global Partners', 'trend' => '+12%'],
                        ['icon' => 'globe', 'value' => '45+', 'label' => 'Countries Served', 'trend' => '+8'],
                        ['icon' => 'trending', 'value' => '98%', 'label' => 'Partner Satisfaction', 'trend' => '+3%'],
                        ['icon' => 'chart', 'value' => '3x', 'label' => 'Revenue Growth', 'trend' => '+0.5x']
                    ],
                    'videoTitle' => 'Partner Video Testimonials',
                    'videoTestimonials' => [
                        [
                            'thumbnail' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=450&fit=crop',
                            'title' => 'Technology Integration Success Story',
                            'author' => 'Sarah Johnson',
                            'company' => 'TechIntegrate Solutions'
                        ],
                        [
                            'thumbnail' => 'https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?w=800&h=450&fit=crop',
                            'title' => 'Implementation Partnership Excellence',
                            'author' => 'Michael Chen',
                            'company' => 'Global Implementations'
                        ]
                    ],
                    'categories' => ['all', 'technology', 'implementation', 'reseller', 'strategic'],
                    'testimonials' => [
                        [
                            'id' => 1,
                            'icon' => 'chip',
                            'category' => 'technology',
                            'featured' => true,
                            'partnerType' => 'Technology Partner',
                            'partnerSince' => '2022',
                            'author' => 'Sarah Johnson',
                            'role' => 'VP of Alliances',
                            'company' => 'TechIntegrate Solutions',
                            'rating' => 5,
                            'quote' => 'The integration was seamless and their API documentation is outstanding. Our joint customers have seen remarkable results with the combined solution.',
                            'fullQuote' => 'The integration was seamless and their API documentation is outstanding. Our joint customers have seen remarkable results with the combined solution. The support team has been responsive and collaborative throughout our partnership. We\'ve grown our joint business by 40% year over year.',
                            'results' => [
                                ['value' => '35%', 'label' => 'Faster Implementation'],
                                ['value' => '98%', 'label' => 'Customer Satisfaction']
                            ],
                            'collaboration' => [
                                'Joint go-to-market strategy launched in Q1 2024',
                                'Co-developed integration framework',
                                'Shared customer success stories',
                                'Quarterly business reviews'
                            ],
                            'link' => '/partners/techintegrate'
                        ],
                        [
                            'id' => 2,
                            'icon' => 'sparkles',
                            'category' => 'implementation',
                            'featured' => false,
                            'partnerType' => 'Implementation Partner',
                            'partnerSince' => '2021',
                            'author' => 'Michael Chen',
                            'role' => 'Managing Director',
                            'company' => 'Global Implementations',
                            'rating' => 5,
                            'quote' => 'We\'ve implemented this platform for over 50 clients and the feedback has been overwhelmingly positive. The ROI is consistently impressive.',
                            'fullQuote' => 'We\'ve implemented this platform for over 50 clients and the feedback has been overwhelmingly positive. The ROI is consistently impressive. The training and certification program prepared our team thoroughly. We\'ve expanded our implementation team by 200% to meet demand.',
                            'results' => [
                                ['value' => '50+', 'label' => 'Implementations'],
                                ['value' => '100%', 'label' => 'Client Retention']
                            ],
                            'collaboration' => [
                                'Certified implementation specialists',
                                'Dedicated partner success manager',
                                'Regular joint training sessions',
                                'Pre-sales support'
                            ],
                            'link' => '/partners/global-implementations'
                        ],
                        [
                            'id' => 3,
                            'icon' => 'handshake',
                            'category' => 'reseller',
                            'featured' => false,
                            'partnerType' => 'Reseller Partner',
                            'partnerSince' => '2023',
                            'author' => 'David Williams',
                            'role' => 'VP of Sales',
                            'company' => 'Enterprise Software Solutions',
                            'rating' => 5,
                            'quote' => 'The partner program provides excellent margins and support. Our sales team loves selling this solution because it delivers real value.',
                            'fullQuote' => 'The partner program provides excellent margins and support. Our sales team loves selling this solution because it delivers real value. The joint marketing support has been exceptional. We\'ve already exceeded our first-year sales targets.',
                            'results' => [
                                ['value' => '$2.5M', 'label' => 'Joint Revenue'],
                                ['value' => '25+', 'label' => 'New Customers']
                            ],
                            'collaboration' => [
                                'Co-marketing campaigns',
                                'Sales enablement training',
                                'Quarterly business reviews',
                                'Lead sharing program'
                            ],
                            'link' => '/partners/enterprise-software'
                        ],
                        [
                            'id' => 4,
                            'icon' => 'trending',
                            'category' => 'strategic',
                            'featured' => false,
                            'partnerType' => 'Strategic Partner',
                            'partnerSince' => '2020',
                            'author' => 'Lisa Anderson',
                            'role' => 'SVP Strategic Alliances',
                            'company' => 'Strategic Consulting Group',
                            'rating' => 5,
                            'quote' => 'This partnership has been transformative for our consulting practice. The platform\'s capabilities set us apart from competitors.',
                            'fullQuote' => 'This partnership has been transformative for our consulting practice. The platform\'s capabilities set us apart from competitors. Our clients consistently praise the solution\'s ease of use and powerful analytics. We\'ve expanded our practice by 150% since partnering.',
                            'results' => [
                                ['value' => '40+', 'label' => 'Joint Engagements'],
                                ['value' => 'Industry', 'label' => 'Recognition']
                            ],
                            'collaboration' => [
                                'Strategic advisory board participation',
                                'Joint thought leadership content',
                                'Co-developed industry solutions',
                                'Executive briefings'
                            ],
                            'link' => '/partners/strategic-consulting'
                        ],
                        [
                            'id' => 5,
                            'icon' => 'database',
                            'category' => 'technology',
                            'featured' => false,
                            'partnerType' => 'Technology Partner',
                            'partnerSince' => '2023',
                            'author' => 'Robert Taylor',
                            'role' => 'CTO',
                            'company' => 'DataSync Technologies',
                            'rating' => 4,
                            'quote' => 'The platform\'s flexibility made integration straightforward. We\'re excited about the joint value we can deliver to customers.',
                            'fullQuote' => 'The platform\'s flexibility made integration straightforward. We\'re excited about the joint value we can deliver to customers. The API-first approach aligns perfectly with our product strategy. We\'ve already launched three joint customer implementations.',
                            'results' => [
                                ['value' => 'Seamless', 'label' => 'Integration'],
                                ['value' => 'Enhanced', 'label' => 'Product Offering']
                            ],
                            'collaboration' => [
                                'Joint product roadmap alignment',
                                'Co-marketing initiatives',
                                'Technical integration support',
                                'Customer success alignment'
                            ],
                            'link' => '/partners/datasync'
                        ]
                    ],
                    'showSuccessMetrics' => true,
                    'successMetrics' => [
                        ['icon' => 'chart', 'value' => '150+', 'label' => 'Joint Customers'],
                        ['icon' => 'trending', 'value' => '200%', 'label' => 'Partner Revenue Growth'],
                        ['icon' => 'users', 'value' => '50+', 'label' => 'Certified Partners']
                    ],
                    'showTrustIndicators' => true,
                    'trustText' => 'Trusted by industry leaders worldwide',
                    'trustLogos' => [
                        ['icon' => 'google', 'name' => 'Google'],
                        ['icon' => 'microsoft', 'name' => 'Microsoft'],
                        ['icon' => 'amazon', 'name' => 'Amazon']
                    ],
                    'showPartnerProgram' => true,
                    'partnerCtaText' => 'Join our growing partner ecosystem',
                    'partnerCtaButtonText' => 'Become a Partner',
                    'partnerCtaLink' => '/partners'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 243,
                'section_key' => 'partnerTestimonials',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Partner Success',
                        'backgroundColor' => 'bg-blue-100 dark:bg-blue-900/30',
                        'borderColor' => 'border-blue-200 dark:border-blue-800',
                        'textColor' => 'text-blue-700 dark:text-blue-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Our',
                        'highlightedText' => 'Partner Ecosystem',
                        'suffix' => 'in Action',
                        'highlightGradient' => 'from-blue-600 to-indigo-600'
                    ],
                    'description' => 'Discover how our partners are driving success for their clients while growing their own businesses.',
                    'stats' => [
                        ['icon' => 'handshake', 'value' => '150+', 'label' => 'Global Partners', 'trend' => '+12%'],
                        ['icon' => 'globe', 'value' => '45+', 'label' => 'Countries Served', 'trend' => '+8'],
                        ['icon' => 'trending', 'value' => '98%', 'label' => 'Partner Satisfaction', 'trend' => '+3%'],
                        ['icon' => 'chart', 'value' => '3x', 'label' => 'Revenue Growth', 'trend' => '+0.5x']
                    ],
                    'categories' => ['all', 'technology', 'implementation', 'reseller', 'strategic'],
                    'testimonials' => [
                        [
                            'id' => 1,
                            'icon' => 'chip',
                            'category' => 'technology',
                            'featured' => true,
                            'partnerType' => 'Technology Partner',
                            'partnerSince' => '2022',
                            'annualRevenue' => 5000000,
                            'author' => 'Sarah Johnson',
                            'role' => 'VP of Alliances',
                            'company' => 'TechIntegrate Solutions',
                            'rating' => 5,
                            'quote' => 'The integration was seamless and their API documentation is outstanding. Our joint customers have seen remarkable results with the combined solution.',
                            'fullQuote' => 'The integration was seamless and their API documentation is outstanding. Our joint customers have seen remarkable results with the combined solution. The support team has been responsive and collaborative throughout our partnership. We\'ve grown our joint business by 40% year over year.',
                            'results' => [
                                ['value' => '35%', 'label' => 'Faster Implementation'],
                                ['value' => '98%', 'label' => 'Customer Satisfaction'],
                                ['value' => '40%', 'label' => 'Revenue Growth']
                            ],
                            'collaboration' => [
                                'Joint go-to-market strategy launched in Q1 2024',
                                'Co-developed integration framework',
                                'Shared customer success stories',
                                'Quarterly business reviews'
                            ],
                            'link' => '/partners/techintegrate',
                            'caseStudyLink' => '/case-studies/techintegrate'
                        ],
                        [
                            'id' => 2,
                            'icon' => 'sparkles',
                            'category' => 'implementation',
                            'featured' => false,
                            'partnerType' => 'Implementation Partner',
                            'partnerSince' => '2021',
                            'annualRevenue' => 3500000,
                            'author' => 'Michael Chen',
                            'role' => 'Managing Director',
                            'company' => 'Global Implementations',
                            'rating' => 5,
                            'quote' => 'We\'ve implemented this platform for over 50 clients and the feedback has been overwhelmingly positive. The ROI is consistently impressive.',
                            'fullQuote' => 'We\'ve implemented this platform for over 50 clients and the feedback has been overwhelmingly positive. The ROI is consistently impressive. The training and certification program prepared our team thoroughly. We\'ve expanded our implementation team by 200% to meet demand.',
                            'results' => [
                                ['value' => '50+', 'label' => 'Implementations'],
                                ['value' => '100%', 'label' => 'Client Retention'],
                                ['value' => '200%', 'label' => 'Team Growth']
                            ],
                            'collaboration' => [
                                'Certified implementation specialists',
                                'Dedicated partner success manager',
                                'Regular joint training sessions',
                                'Pre-sales support'
                            ],
                            'link' => '/partners/global-implementations',
                            'caseStudyLink' => '/case-studies/global-implementations'
                        ],
                        [
                            'id' => 3,
                            'icon' => 'handshake',
                            'category' => 'reseller',
                            'featured' => false,
                            'partnerType' => 'Reseller Partner',
                            'partnerSince' => '2023',
                            'annualRevenue' => 2500000,
                            'author' => 'David Williams',
                            'role' => 'VP of Sales',
                            'company' => 'Enterprise Software Solutions',
                            'rating' => 5,
                            'quote' => 'The partner program provides excellent margins and support. Our sales team loves selling this solution because it delivers real value.',
                            'fullQuote' => 'The partner program provides excellent margins and support. Our sales team loves selling this solution because it delivers real value. The joint marketing support has been exceptional. We\'ve already exceeded our first-year sales targets.',
                            'results' => [
                                ['value' => '$2.5M', 'label' => 'Joint Revenue'],
                                ['value' => '25+', 'label' => 'New Customers'],
                                ['value' => '150%', 'label' => 'Target Achievement']
                            ],
                            'collaboration' => [
                                'Co-marketing campaigns',
                                'Sales enablement training',
                                'Quarterly business reviews',
                                'Lead sharing program'
                            ],
                            'link' => '/partners/enterprise-software',
                            'caseStudyLink' => '/case-studies/enterprise-software'
                        ],
                        [
                            'id' => 4,
                            'icon' => 'trending',
                            'category' => 'strategic',
                            'featured' => false,
                            'partnerType' => 'Strategic Partner',
                            'partnerSince' => '2020',
                            'annualRevenue' => 8000000,
                            'author' => 'Lisa Anderson',
                            'role' => 'SVP Strategic Alliances',
                            'company' => 'Strategic Consulting Group',
                            'rating' => 5,
                            'quote' => 'This partnership has been transformative for our consulting practice. The platform\'s capabilities set us apart from competitors.',
                            'fullQuote' => 'This partnership has been transformative for our consulting practice. The platform\'s capabilities set us apart from competitors. Our clients consistently praise the solution\'s ease of use and powerful analytics. We\'ve expanded our practice by 150% since partnering.',
                            'results' => [
                                ['value' => '40+', 'label' => 'Joint Engagements'],
                                ['value' => 'Industry', 'label' => 'Recognition'],
                                ['value' => '150%', 'label' => 'Practice Growth']
                            ],
                            'collaboration' => [
                                'Strategic advisory board participation',
                                'Joint thought leadership content',
                                'Co-developed industry solutions',
                                'Executive briefings'
                            ],
                            'link' => '/partners/strategic-consulting',
                            'caseStudyLink' => '/case-studies/strategic-consulting'
                        ],
                        [
                            'id' => 5,
                            'icon' => 'database',
                            'category' => 'technology',
                            'featured' => false,
                            'partnerType' => 'Technology Partner',
                            'partnerSince' => '2023',
                            'annualRevenue' => 1800000,
                            'author' => 'Robert Taylor',
                            'role' => 'CTO',
                            'company' => 'DataSync Technologies',
                            'rating' => 4,
                            'quote' => 'The platform\'s flexibility made integration straightforward. We\'re excited about the joint value we can deliver to customers.',
                            'fullQuote' => 'The platform\'s flexibility made integration straightforward. We\'re excited about the joint value we can deliver to customers. The API-first approach aligns perfectly with our product strategy. We\'ve already launched three joint customer implementations.',
                            'results' => [
                                ['value' => 'Seamless', 'label' => 'Integration'],
                                ['value' => 'Enhanced', 'label' => 'Product Offering'],
                                ['value' => '3', 'label' => 'Joint Customers']
                            ],
                            'collaboration' => [
                                'Joint product roadmap alignment',
                                'Co-marketing initiatives',
                                'Technical integration support',
                                'Customer success alignment'
                            ],
                            'link' => '/partners/datasync',
                            'caseStudyLink' => '/case-studies/datasync'
                        ]
                    ],
                    'partnerSpotlights' => [
                        [
                            'icon' => 'building',
                            'category' => 'technology',
                            'partnerType' => 'Technology Partner',
                            'partnerSince' => '2022',
                            'company' => 'TechIntegrate Solutions',
                            'image' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=400&fit=crop',
                            'description' => 'TechIntegrate Solutions has been instrumental in expanding our reach into the enterprise market. Their deep technical expertise and commitment to customer success have made them an invaluable partner.',
                            'metric1' => '35%',
                            'metric1Label' => 'Faster Implementations',
                            'metric2' => '$5M',
                            'metric2Label' => 'Joint Revenue',
                            'link' => '/partners/techintegrate-spotlight'
                        ],
                        [
                            'icon' => 'users',
                            'category' => 'implementation',
                            'partnerType' => 'Implementation Partner',
                            'partnerSince' => '2021',
                            'company' => 'Global Implementations',
                            'image' => 'https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?w=800&h=400&fit=crop',
                            'description' => 'Global Implementations has successfully delivered our platform to over 50 enterprise clients. Their certified implementation specialists ensure smooth deployments and rapid time-to-value.',
                            'metric1' => '50+',
                            'metric1Label' => 'Implementations',
                            'metric2' => '100%',
                            'metric2Label' => 'Success Rate',
                            'link' => '/partners/global-spotlight'
                        ]
                    ],
                    'successMetrics' => [
                        [
                            'icon' => 'chart',
                            'value' => '$50M+',
                            'label' => 'Partner Revenue',
                            'description' => 'Total revenue generated through partner ecosystem'
                        ],
                        [
                            'icon' => 'users',
                            'value' => '500+',
                            'label' => 'Joint Customers',
                            'description' => 'Customers served through partner relationships'
                        ],
                        [
                            'icon' => 'trending',
                            'value' => '200%',
                            'label' => 'Partner Growth',
                            'description' => 'Year-over-year partner revenue growth'
                        ]
                    ],
                    'growthTrends' => [
                        ['year' => '2021', 'growth' => '+45%', 'percentage' => '45%'],
                        ['year' => '2022', 'growth' => '+78%', 'percentage' => '78%'],
                        ['year' => '2023', 'growth' => '+112%', 'percentage' => '100%'],
                        ['year' => '2024', 'growth' => '+156%', 'percentage' => '100%']
                    ],
                    'showTrustIndicators' => true,
                    'trustText' => 'Trusted by industry leaders worldwide',
                    'trustLogos' => [
                        ['icon' => 'google', 'name' => 'Google'],
                        ['icon' => 'microsoft', 'name' => 'Microsoft'],
                        ['icon' => 'amazon', 'name' => 'Amazon']
                    ],
                    'showPartnerProgram' => true,
                    'partnerCtaText' => 'Ready to join our partner ecosystem?',
                    'partnerCtaButtonText' => 'Apply to Become a Partner',
                    'partnerCtaLink' => '/partners'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 244,
                'section_key' => 'partnerTestimonials',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Ratings & Awards Section
            [
                'id' => 245,
                'section_key' => 'ratingAndAwards',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Ratings & Awards',
                        'backgroundColor' => 'bg-yellow-100 dark:bg-yellow-900/30',
                        'borderColor' => 'border-yellow-200 dark:border-yellow-800',
                        'textColor' => 'text-yellow-700 dark:text-yellow-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Recognized',
                        'highlightedText' => 'Excellence',
                        'suffix' => 'Across Platforms',
                        'highlightGradient' => 'from-yellow-600 to-amber-600'
                    ],
                    'description' => 'See why customers and industry experts consistently rate us as a top solution in our category.',
                    'platforms' => [
                        ['id' => 'g2', 'name' => 'G2'],
                        ['id' => 'capterra', 'name' => 'Capterra'],
                        ['id' => 'trustpilot', 'name' => 'Trustpilot'],
                        ['id' => 'google', 'name' => 'Google'],
                        ['id' => 'softwareadvice', 'name' => 'Software Advice']
                    ],
                    'ratings' => [
                        [
                            'platform' => 'g2',
                            'rating' => 4.9,
                            'reviewCount' => 2847,
                            'badge' => 'Leader',
                            'snippet' => 'The best inventory management platform we\'ve ever used. The AI forecasting is incredibly accurate and has saved us millions.',
                            'breakdown' => [
                                ['star' => 5, 'count' => 2450],
                                ['star' => 4, 'count' => 320],
                                ['star' => 3, 'count' => 50],
                                ['star' => 2, 'count' => 15],
                                ['star' => 1, 'count' => 12]
                            ],
                            'link' => 'https://g2.com/products/reviews'
                        ],
                        [
                            'platform' => 'capterra',
                            'rating' => 4.8,
                            'reviewCount' => 1256,
                            'badge' => 'Top Rated',
                            'snippet' => 'Excellent customer support and powerful analytics. The implementation was smooth and the ROI was evident within months.',
                            'breakdown' => [
                                ['star' => 5, 'count' => 980],
                                ['star' => 4, 'count' => 210],
                                ['star' => 3, 'count' => 40],
                                ['star' => 2, 'count' => 15],
                                ['star' => 1, 'count' => 11]
                            ],
                            'link' => 'https://capterra.com/products/reviews'
                        ],
                        [
                            'platform' => 'trustpilot',
                            'rating' => 4.9,
                            'reviewCount' => 892,
                            'badge' => 'Excellent',
                            'snippet' => 'This platform has transformed our supply chain operations. Highly recommended for any business looking to optimize inventory.',
                            'breakdown' => [
                                ['star' => 5, 'count' => 780],
                                ['star' => 4, 'count' => 85],
                                ['star' => 3, 'count' => 15],
                                ['star' => 2, 'count' => 7],
                                ['star' => 1, 'count' => 5]
                            ],
                            'link' => 'https://trustpilot.com/reviews'
                        ],
                        [
                            'platform' => 'google',
                            'rating' => 4.7,
                            'reviewCount' => 523,
                            'badge' => 'Verified',
                            'snippet' => 'Great platform with excellent features. The team is responsive and always helpful.',
                            'breakdown' => [
                                ['star' => 5, 'count' => 380],
                                ['star' => 4, 'count' => 100],
                                ['star' => 3, 'count' => 25],
                                ['star' => 2, 'count' => 10],
                                ['star' => 1, 'count' => 8]
                            ],
                            'link' => 'https://google.com/reviews'
                        ],
                        [
                            'platform' => 'softwareadvice',
                            'rating' => 4.8,
                            'reviewCount' => 342,
                            'badge' => 'Recommended',
                            'snippet' => 'Excellent value for money. The AI capabilities are impressive and have helped us reduce inventory costs significantly.',
                            'breakdown' => [
                                ['star' => 5, 'count' => 260],
                                ['star' => 4, 'count' => 60],
                                ['star' => 3, 'count' => 12],
                                ['star' => 2, 'count' => 6],
                                ['star' => 1, 'count' => 4]
                            ],
                            'link' => 'https://softwareadvice.com/reviews'
                        ]
                    ],
                    'awardsTitle' => 'Awards & Recognition',
                    'awards' => [
                        [
                            'icon' => 'trophy',
                            'title' => 'Best Supply Chain Innovation',
                            'presentedBy' => 'Supply Chain Excellence Awards',
                            'year' => '2024',
                            'description' => 'Recognized for AI-driven inventory optimization platform'
                        ],
                        [
                            'icon' => 'trophy',
                            'title' => 'Leader in Supply Chain Planning',
                            'presentedBy' => 'Gartner Magic Quadrant',
                            'year' => '2024',
                            'description' => 'Positioned as a Leader for ability to execute and completeness of vision'
                        ],
                        [
                            'icon' => 'trophy',
                            'title' => 'Customer Satisfaction Leader',
                            'presentedBy' => 'Software Reviews',
                            'year' => '2024',
                            'description' => 'Highest customer satisfaction score in supply chain software category'
                        ],
                        [
                            'icon' => 'trophy',
                            'title' => 'AI Platform of the Year',
                            'presentedBy' => 'Tech Innovation Awards',
                            'year' => '2023',
                            'description' => 'Recognized for breakthrough AI/ML capabilities in inventory management'
                        ],
                        [
                            'icon' => 'trophy',
                            'title' => 'Top Rated Software',
                            'presentedBy' => 'Capterra',
                            'year' => '2024',
                            'description' => 'Consistently rated 4.8+ stars by verified users'
                        ],
                        [
                            'icon' => 'trophy',
                            'title' => 'Best Place to Work',
                            'presentedBy' => 'Great Place to Work',
                            'year' => '2024',
                            'description' => 'Recognized for company culture and employee satisfaction'
                        ]
                    ],
                    'stats' => [
                        ['icon' => 'star', 'value' => '4.9', 'label' => 'Average Rating'],
                        ['icon' => 'users', 'value' => '5,000+', 'label' => 'Verified Reviews'],
                        ['icon' => 'trending', 'value' => '98%', 'label' => 'Would Recommend'],
                        ['icon' => 'globe', 'value' => '25+', 'label' => 'Countries Served']
                    ],
                    'showTrustIndicators' => true,
                    'trustText' => 'Trusted by industry leaders worldwide',
                    'trustLogos' => [
                        ['icon' => 'google', 'name' => 'Google'],
                        ['icon' => 'microsoft', 'name' => 'Microsoft'],
                        ['icon' => 'amazon', 'name' => 'Amazon']
                    ],
                    'showCta' => true,
                    'ctaText' => 'See why our customers rate us 4.9 stars',
                    'ctaButtonText' => 'Read All Reviews',
                    'ctaLink' => '/reviews'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 246,
                'section_key' => 'ratingAndAwards',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Ratings & Awards',
                        'backgroundColor' => 'bg-yellow-100 dark:bg-yellow-900/30',
                        'borderColor' => 'border-yellow-200 dark:border-yellow-800',
                        'textColor' => 'text-yellow-700 dark:text-yellow-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Recognized',
                        'highlightedText' => 'Excellence',
                        'suffix' => 'Across Platforms',
                        'highlightGradient' => 'from-yellow-600 to-amber-600'
                    ],
                    'description' => 'See why customers and industry experts consistently rate us as a top solution in our category.',
                    'stats' => [
                        ['icon' => 'star', 'value' => '4.9', 'label' => 'Average Rating', 'trend' => '+0.2'],
                        ['icon' => 'users', 'value' => '5,000+', 'label' => 'Verified Reviews', 'trend' => '+15%'],
                        ['icon' => 'trending', 'value' => '98%', 'label' => 'Would Recommend', 'trend' => '+3%'],
                        ['icon' => 'globe', 'value' => '25+', 'label' => 'Countries Served', 'trend' => '+5']
                    ],
                    'ratings' => [
                        [
                            'platform' => 'g2',
                            'rating' => 4.9,
                            'reviewCount' => 2847,
                            'badge' => 'Leader',
                            'lastUpdated' => 'March 2024',
                            'snippet' => 'The best inventory management platform we\'ve ever used. The AI forecasting is incredibly accurate and has saved us millions.',
                            'breakdown' => [
                                ['star' => 5, 'count' => 2450],
                                ['star' => 4, 'count' => 320],
                                ['star' => 3, 'count' => 50],
                                ['star' => 2, 'count' => 15],
                                ['star' => 1, 'count' => 12]
                            ],
                            'link' => 'https://g2.com/products/reviews'
                        ],
                        [
                            'platform' => 'capterra',
                            'rating' => 4.8,
                            'reviewCount' => 1256,
                            'badge' => 'Top Rated',
                            'lastUpdated' => 'February 2024',
                            'snippet' => 'Excellent customer support and powerful analytics. The implementation was smooth and the ROI was evident within months.',
                            'breakdown' => [
                                ['star' => 5, 'count' => 980],
                                ['star' => 4, 'count' => 210],
                                ['star' => 3, 'count' => 40],
                                ['star' => 2, 'count' => 15],
                                ['star' => 1, 'count' => 11]
                            ],
                            'link' => 'https://capterra.com/products/reviews'
                        ],
                        [
                            'platform' => 'trustpilot',
                            'rating' => 4.9,
                            'reviewCount' => 892,
                            'badge' => 'Excellent',
                            'lastUpdated' => 'January 2024',
                            'snippet' => 'This platform has transformed our supply chain operations. Highly recommended for any business looking to optimize inventory.',
                            'breakdown' => [
                                ['star' => 5, 'count' => 780],
                                ['star' => 4, 'count' => 85],
                                ['star' => 3, 'count' => 15],
                                ['star' => 2, 'count' => 7],
                                ['star' => 1, 'count' => 5]
                            ],
                            'link' => 'https://trustpilot.com/reviews'
                        ],
                        [
                            'platform' => 'google',
                            'rating' => 4.7,
                            'reviewCount' => 523,
                            'badge' => 'Verified',
                            'lastUpdated' => 'December 2023',
                            'snippet' => 'Great platform with excellent features. The team is responsive and always helpful.',
                            'breakdown' => [
                                ['star' => 5, 'count' => 380],
                                ['star' => 4, 'count' => 100],
                                ['star' => 3, 'count' => 25],
                                ['star' => 2, 'count' => 10],
                                ['star' => 1, 'count' => 8]
                            ],
                            'link' => 'https://google.com/reviews'
                        ],
                        [
                            'platform' => 'softwareadvice',
                            'rating' => 4.8,
                            'reviewCount' => 342,
                            'badge' => 'Recommended',
                            'lastUpdated' => 'November 2023',
                            'snippet' => 'Excellent value for money. The AI capabilities are impressive and have helped us reduce inventory costs significantly.',
                            'breakdown' => [
                                ['star' => 5, 'count' => 260],
                                ['star' => 4, 'count' => 60],
                                ['star' => 3, 'count' => 12],
                                ['star' => 2, 'count' => 6],
                                ['star' => 1, 'count' => 4]
                            ],
                            'link' => 'https://softwareadvice.com/reviews'
                        ]
                    ],
                    'awardsTitle' => 'Awards & Recognition',
                    'awards' => [
                        [
                            'icon' => 'trophy',
                            'title' => 'Best Supply Chain Innovation',
                            'presentedBy' => 'Supply Chain Excellence Awards',
                            'year' => '2024',
                            'category' => 'innovation',
                            'featuredIn' => 'Forbes',
                            'isNew' => true,
                            'description' => 'Recognized for AI-driven inventory optimization platform that delivers measurable ROI within months.',
                            'fullDescription' => 'The Supply Chain Excellence Awards recognized our platform for its groundbreaking AI-driven inventory optimization capabilities. The judges were impressed by the measurable ROI our clients achieve, with average inventory reductions of 25-35% within the first six months.',
                            'highlights' => [
                                'First company to achieve 99.9% forecast accuracy',
                                'Recognized for innovative AI/ML approach',
                                'Strong customer satisfaction metrics'
                            ],
                            'link' => '/awards/supply-chain-excellence'
                        ],
                        [
                            'icon' => 'trophy',
                            'title' => 'Leader in Supply Chain Planning',
                            'presentedBy' => 'Gartner Magic Quadrant',
                            'year' => '2024',
                            'category' => 'technology',
                            'featuredIn' => 'Gartner',
                            'isNew' => true,
                            'description' => 'Positioned as a Leader for ability to execute and completeness of vision in supply chain planning.',
                            'fullDescription' => 'Gartner positioned our platform as a Leader in the Magic Quadrant for Supply Chain Planning. We were recognized for our strong ability to execute and completeness of vision, particularly in AI-driven forecasting and inventory optimization.',
                            'highlights' => [
                                'Highest score for AI/ML capabilities',
                                'Strong customer satisfaction ratings',
                                'Recognized for innovation in demand sensing'
                            ],
                            'link' => '/awards/gartner-magic-quadrant'
                        ],
                        [
                            'icon' => 'trophy',
                            'title' => 'Customer Satisfaction Leader',
                            'presentedBy' => 'Software Reviews',
                            'year' => '2024',
                            'category' => 'customer',
                            'featuredIn' => 'Software Reviews',
                            'isNew' => true,
                            'description' => 'Highest customer satisfaction score in supply chain software category.',
                            'fullDescription' => 'Software Reviews named us a Customer Satisfaction Leader based on aggregated customer reviews. We achieved the highest overall satisfaction score in the supply chain software category, with particular strength in ease of use and customer support.',
                            'highlights' => [
                                '#1 in customer satisfaction',
                                'Highest recommendation score (98%)',
                                'Strong marks for implementation support'
                            ],
                            'link' => '/awards/software-reviews'
                        ],
                        [
                            'icon' => 'trophy',
                            'title' => 'AI Platform of the Year',
                            'presentedBy' => 'Tech Innovation Awards',
                            'year' => '2023',
                            'category' => 'innovation',
                            'featuredIn' => 'TechCrunch',
                            'isNew' => false,
                            'description' => 'Recognized for breakthrough AI/ML capabilities in inventory management and demand forecasting.',
                            'fullDescription' => 'The Tech Innovation Awards recognized our platform as AI Platform of the Year for our breakthrough machine learning capabilities in inventory management and demand forecasting.',
                            'highlights' => [
                                'Breakthrough AI/ML technology',
                                'Proven customer ROI',
                                'Scalable enterprise solution'
                            ],
                            'link' => '/awards/tech-innovation'
                        ],
                        [
                            'icon' => 'trophy',
                            'title' => 'Top Rated Software',
                            'presentedBy' => 'Capterra',
                            'year' => '2024',
                            'category' => 'customer',
                            'featuredIn' => 'Capterra',
                            'isNew' => false,
                            'description' => 'Consistently rated 4.8+ stars by verified users across multiple categories.',
                            'fullDescription' => 'Capterra recognized us as Top Rated Software based on consistently high ratings from verified users. Our platform maintains a 4.8+ star rating across all categories, with particular strength in ease of use and customer support.',
                            'highlights' => [
                                '4.8+ star average rating',
                                '500+ verified reviews',
                                'Top 1% in category'
                            ],
                            'link' => '/awards/capterra-top-rated'
                        ],
                        [
                            'icon' => 'trophy',
                            'title' => 'Best Place to Work',
                            'presentedBy' => 'Great Place to Work',
                            'year' => '2024',
                            'category' => 'growth',
                            'featuredIn' => 'Fortune',
                            'isNew' => false,
                            'description' => 'Recognized for company culture, employee satisfaction, and workplace excellence.',
                            'fullDescription' => 'Great Place to Work certified our organization as a Best Place to Work based on employee feedback. We scored particularly high in areas of trust, pride, and camaraderie.',
                            'highlights' => [
                                '95% employee satisfaction',
                                'Recognized for inclusive culture',
                                'Strong leadership trust scores'
                            ],
                            'link' => '/awards/great-place-to-work'
                        ]
                    ],
                    'showBadges' => true,
                    'badges' => [
                        ['icon' => 'shield', 'name' => 'ISO 27001', 'description' => 'Information Security Certified'],
                        ['icon' => 'shield', 'name' => 'SOC 2 Type II', 'description' => 'Security & Compliance'],
                        ['icon' => 'shield', 'name' => 'GDPR Compliant', 'description' => 'Data Protection'],
                        ['icon' => 'shield', 'name' => 'HIPAA Ready', 'description' => 'Healthcare Compliance']
                    ],
                    'showTrustIndicators' => true,
                    'trustText' => 'Trusted by industry leaders worldwide',
                    'trustLogos' => [
                        ['icon' => 'google', 'name' => 'Google'],
                        ['icon' => 'microsoft', 'name' => 'Microsoft'],
                        ['icon' => 'amazon', 'name' => 'Amazon']
                    ],
                    'showCta' => true,
                    'ctaText' => 'Join our satisfied customers',
                    'ctaButtonText' => 'Get Started Today',
                    'ctaLink' => '/demo'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 247,
                'section_key' => 'ratingAndAwards',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Ratings & Awards',
                        'backgroundColor' => 'bg-yellow-100 dark:bg-yellow-900/30',
                        'borderColor' => 'border-yellow-200 dark:border-yellow-800',
                        'textColor' => 'text-yellow-700 dark:text-yellow-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Industry',
                        'highlightedText' => 'Recognition',
                        'suffix' => 'Showcase',
                        'highlightGradient' => 'from-yellow-600 to-amber-600'
                    ],
                    'description' => 'See why customers and industry experts consistently rate us as a top solution in our category.',
                    'stats' => [
                        ['icon' => 'star', 'value' => '4.9', 'label' => 'Average Rating'],
                        ['icon' => 'users', 'value' => '5,000+', 'label' => 'Verified Reviews'],
                        ['icon' => 'trending', 'value' => '98%', 'label' => 'Would Recommend'],
                        ['icon' => 'globe', 'value' => '25+', 'label' => 'Countries Served']
                    ],
                    'ratings' => [
                        [
                            'platform' => 'g2',
                            'rating' => 4.9,
                            'reviewCount' => 2847,
                            'badge' => 'Leader',
                            'snippet' => 'The best inventory management platform we\'ve ever used.',
                            'breakdown' => [
                                ['star' => 5, 'count' => 2450],
                                ['star' => 4, 'count' => 320],
                                ['star' => 3, 'count' => 50],
                                ['star' => 2, 'count' => 15],
                                ['star' => 1, 'count' => 12]
                            ],
                            'link' => 'https://g2.com/products/reviews'
                        ],
                        [
                            'platform' => 'capterra',
                            'rating' => 4.8,
                            'reviewCount' => 1256,
                            'badge' => 'Top Rated',
                            'snippet' => 'Excellent customer support and powerful analytics.',
                            'breakdown' => [
                                ['star' => 5, 'count' => 980],
                                ['star' => 4, 'count' => 210],
                                ['star' => 3, 'count' => 40],
                                ['star' => 2, 'count' => 15],
                                ['star' => 1, 'count' => 11]
                            ],
                            'link' => 'https://capterra.com/products/reviews'
                        ],
                        [
                            'platform' => 'trustpilot',
                            'rating' => 4.9,
                            'reviewCount' => 892,
                            'badge' => 'Excellent',
                            'snippet' => 'This platform has transformed our supply chain operations.',
                            'breakdown' => [
                                ['star' => 5, 'count' => 780],
                                ['star' => 4, 'count' => 85],
                                ['star' => 3, 'count' => 15],
                                ['star' => 2, 'count' => 7],
                                ['star' => 1, 'count' => 5]
                            ],
                            'link' => 'https://trustpilot.com/reviews'
                        ],
                        [
                            'platform' => 'google',
                            'rating' => 4.7,
                            'reviewCount' => 523,
                            'badge' => 'Verified',
                            'snippet' => 'Great platform with excellent features.',
                            'breakdown' => [
                                ['star' => 5, 'count' => 380],
                                ['star' => 4, 'count' => 100],
                                ['star' => 3, 'count' => 25],
                                ['star' => 2, 'count' => 10],
                                ['star' => 1, 'count' => 8]
                            ],
                            'link' => 'https://google.com/reviews'
                        ],
                        [
                            'platform' => 'softwareadvice',
                            'rating' => 4.8,
                            'reviewCount' => 342,
                            'badge' => 'Recommended',
                            'snippet' => 'Excellent value for money. The AI capabilities are impressive.',
                            'breakdown' => [
                                ['star' => 5, 'count' => 260],
                                ['star' => 4, 'count' => 60],
                                ['star' => 3, 'count' => 12],
                                ['star' => 2, 'count' => 6],
                                ['star' => 1, 'count' => 4]
                            ],
                            'link' => 'https://softwareadvice.com/reviews'
                        ]
                    ],
                    'awards' => [
                        [
                            'icon' => 'trophy',
                            'title' => 'Best Supply Chain Innovation',
                            'presentedBy' => 'Supply Chain Excellence Awards',
                            'year' => '2024',
                            'featured' => true,
                            'description' => 'Recognized for AI-driven inventory optimization platform that delivers measurable ROI within months.'
                        ],
                        [
                            'icon' => 'trophy',
                            'title' => 'Leader in Supply Chain Planning',
                            'presentedBy' => 'Gartner Magic Quadrant',
                            'year' => '2024',
                            'featured' => true,
                            'description' => 'Positioned as a Leader for ability to execute and completeness of vision.'
                        ],
                        [
                            'icon' => 'trophy',
                            'title' => 'Customer Satisfaction Leader',
                            'presentedBy' => 'Software Reviews',
                            'year' => '2024',
                            'featured' => true,
                            'description' => 'Highest customer satisfaction score in supply chain software category.'
                        ],
                        [
                            'icon' => 'trophy',
                            'title' => 'AI Platform of the Year',
                            'presentedBy' => 'Tech Innovation Awards',
                            'year' => '2023',
                            'featured' => false,
                            'description' => 'Recognized for breakthrough AI/ML capabilities in inventory management.'
                        ],
                        [
                            'icon' => 'trophy',
                            'title' => 'Top Rated Software',
                            'presentedBy' => 'Capterra',
                            'year' => '2024',
                            'featured' => false,
                            'description' => 'Consistently rated 4.8+ stars by verified users.'
                        ],
                        [
                            'icon' => 'trophy',
                            'title' => 'Best Place to Work',
                            'presentedBy' => 'Great Place to Work',
                            'year' => '2024',
                            'featured' => false,
                            'description' => 'Recognized for company culture and employee satisfaction.'
                        ],
                        [
                            'icon' => 'trophy',
                            'title' => 'Inc. 5000 Fastest Growing',
                            'presentedBy' => 'Inc. Magazine',
                            'year' => '2023',
                            'featured' => false,
                            'description' => 'Recognized as one of America\'s fastest-growing private companies.'
                        ],
                        [
                            'icon' => 'trophy',
                            'title' => 'Best AI Solution',
                            'presentedBy' => 'AI Summit Awards',
                            'year' => '2023',
                            'featured' => false,
                            'description' => 'Awarded for excellence in artificial intelligence applications.'
                        ]
                    ],
                    'certifications' => [
                        [
                            'icon' => 'shield',
                            'name' => 'ISO 27001',
                            'validator' => 'International Organization for Standardization',
                            'year' => '2024',
                            'description' => 'Certified for information security management systems.'
                        ],
                        [
                            'icon' => 'shield',
                            'name' => 'SOC 2 Type II',
                            'validator' => 'American Institute of CPAs',
                            'year' => '2024',
                            'description' => 'Validated for security, availability, and confidentiality controls.'
                        ],
                        [
                            'icon' => 'shield',
                            'name' => 'GDPR Compliant',
                            'validator' => 'European Union',
                            'year' => '2024',
                            'description' => 'Compliant with data protection and privacy regulations.'
                        ],
                        [
                            'icon' => 'shield',
                            'name' => 'HIPAA Ready',
                            'validator' => 'U.S. Department of Health',
                            'year' => '2024',
                            'description' => 'Ready for healthcare data compliance requirements.'
                        ],
                        [
                            'icon' => 'shield',
                            'name' => 'PCI DSS Level 1',
                            'validator' => 'PCI Security Standards Council',
                            'year' => '2024',
                            'description' => 'Highest level of payment card industry compliance.'
                        ],
                        [
                            'icon' => 'shield',
                            'name' => 'CSA STAR',
                            'validator' => 'Cloud Security Alliance',
                            'year' => '2024',
                            'description' => 'Cloud security and privacy certification.'
                        ]
                    ],
                    'badges' => [
                        ['icon' => 'shield', 'name' => 'ISO 27001', 'description' => 'Information Security Certified'],
                        ['icon' => 'shield', 'name' => 'SOC 2 Type II', 'description' => 'Security & Compliance'],
                        ['icon' => 'shield', 'name' => 'GDPR Compliant', 'description' => 'Data Protection'],
                        ['icon' => 'shield', 'name' => 'HIPAA Ready', 'description' => 'Healthcare Compliance']
                    ],
                    'showTrustIndicators' => true,
                    'trustText' => 'Trusted by industry leaders worldwide',
                    'trustLogos' => [
                        ['icon' => 'google', 'name' => 'Google'],
                        ['icon' => 'microsoft', 'name' => 'Microsoft'],
                        ['icon' => 'amazon', 'name' => 'Amazon']
                    ],
                    'showCta' => true,
                    'ctaText' => 'Experience the award-winning platform yourself',
                    'ctaButtonText' => 'Start Free Trial',
                    'ctaLink' => '/demo'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 248,
                'section_key' => 'ratingAndAwards',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

        // Add the new Services variants
        DB::table('section_variants')->upsert(
            $variants,
            ['section_key', 'variant'],
            ['config', 'updated_at']
        );
    }
}
