<?php

namespace Database\Seeders\PageRelatedSeeders;

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
        ];

        // Add the new Services variants
        DB::table('section_variants')->upsert(
            $variants,
            ['section_key', 'variant'],
            ['config', 'updated_at']
        );
    }
}
