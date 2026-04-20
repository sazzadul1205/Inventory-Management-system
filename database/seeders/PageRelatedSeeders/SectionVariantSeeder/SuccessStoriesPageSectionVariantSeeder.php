<?php

namespace Database\Seeders\PageRelatedSeeders\SectionVariantSeeder;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SuccessStoriesPageSectionVariantSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Upsert only this page's variants so other page seeders do not get wiped out.
        $variants = [
            // Client Success Metrics Section
            [
                'id' => 209,
                'section_key' => 'clientSuccessMetrics',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Trusted by Industry Leaders',
                        'backgroundColor' => 'bg-indigo-100 dark:bg-indigo-900/30',
                        'borderColor' => 'border-indigo-200 dark:border-indigo-800',
                        'textColor' => 'text-indigo-700 dark:text-indigo-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Real',
                        'highlightedText' => 'Results',
                        'suffix' => 'That Speak Volumes',
                        'highlightGradient' => 'from-indigo-600 to-blue-600'
                    ],
                    'description' => 'See how we\'ve helped businesses achieve remarkable growth and efficiency across various industries.',
                    'metrics' => [
                        [
                            'icon' => 'trending',
                            'value' => '95%',
                            'label' => 'Client Retention Rate',
                            'description' => 'Average annual retention across all clients',
                            'trend' => '+12%'
                        ],
                        [
                            'icon' => 'dollar',
                            'value' => '$2.5B',
                            'label' => 'Client Revenue Generated',
                            'description' => 'Total value driven for our clients',
                            'trend' => '+35%'
                        ],
                        [
                            'icon' => 'clock',
                            'value' => '40%',
                            'label' => 'Average Efficiency Gain',
                            'description' => 'Reduction in operational costs',
                            'trend' => '+8%'
                        ],
                        [
                            'icon' => 'users',
                            'value' => '500+',
                            'label' => 'Happy Clients',
                            'description' => 'Across 25+ countries worldwide',
                            'trend' => '+50'
                        ]
                    ],
                    'testimonialsTitle' => 'What Our Clients Say',
                    'testimonials' => [
                        [
                            'quote' => 'This platform transformed our supply chain. We saw a 30% reduction in costs within the first 6 months. The team\'s expertise is unmatched.',
                            'author' => 'Sarah Johnson',
                            'role' => 'VP of Operations',
                            'company' => 'Global Logistics Inc.',
                            'icon' => 'user'
                        ],
                        [
                            'quote' => 'The analytics and insights provided have been game-changing for our inventory management. Highly recommend to any growing business.',
                            'author' => 'Michael Chen',
                            'role' => 'CTO',
                            'company' => 'TechRetail Group',
                            'icon' => 'user'
                        ],
                        [
                            'quote' => 'Exceptional support and a robust platform. Our implementation was smooth, and the ROI was evident in the first quarter.',
                            'author' => 'David Rodriguez',
                            'role' => 'Supply Chain Director',
                            'company' => 'Manufacturing Solutions Ltd.',
                            'icon' => 'user'
                        ]
                    ],
                    'showHighlights' => true,
                    'highlightTitle' => 'Key Achievements',
                    'highlights' => [
                        'Winner of \'Best Supply Chain Innovation\' award 2023',
                        'ISO 27001 certified for data security',
                        '98% customer satisfaction score',
                        'Deployed across 500+ enterprise clients'
                    ],
                    'industryBreakdownTitle' => 'Client Distribution by Industry',
                    'industryBreakdown' => [
                        ['name' => 'Manufacturing', 'value' => '35%', 'percentage' => '35%'],
                        ['name' => 'Retail & E-commerce', 'value' => '28%', 'percentage' => '28%'],
                        ['name' => 'Healthcare', 'value' => '20%', 'percentage' => '20%'],
                        ['name' => 'Logistics', 'value' => '17%', 'percentage' => '17%']
                    ],
                    'showROI' => true,
                    'roiMetrics' => [
                        ['value' => '20-35%', 'label' => 'Cost Reduction'],
                        ['value' => '3-6', 'label' => 'Months Payback'],
                        ['value' => '99.9%', 'label' => 'Accuracy Rate']
                    ],
                    'roiLink' => '/roi-calculator',
                    'showTrustIndicators' => true,
                    'trustText' => 'Trusted by industry leaders worldwide',
                    'trustLogos' => [
                        ['name' => 'Google', 'icon' => 'google'],
                        ['name' => 'Microsoft', 'icon' => 'microsoft'],
                        ['name' => 'Amazon', 'icon' => 'amazon'],
                        ['name' => 'Apple', 'icon' => 'apple']
                    ],
                    'showFinalCta' => true,
                    'finalCtaText' => 'Start Your Success Story Today',
                    'finalCtaLink' => '/contact'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 210,
                'section_key' => 'clientSuccessMetrics',
                'variant' => 'variant2',
                'config' => json_encode([
                    'initialTab' => 'metrics',
                    'autoplayInterval' => 6000,
                    'badge' => [
                        'text' => 'Trusted by Industry Leaders',
                        'backgroundColor' => 'bg-indigo-100 dark:bg-indigo-900/30',
                        'borderColor' => 'border-indigo-200 dark:border-indigo-800',
                        'textColor' => 'text-indigo-700 dark:text-indigo-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Our',
                        'highlightedText' => 'Success Metrics',
                        'suffix' => 'Dashboard',
                        'highlightGradient' => 'from-indigo-600 to-blue-600'
                    ],
                    'description' => 'Track record of excellence and measurable results for our clients worldwide.',
                    'metrics' => [
                        [
                            'icon' => 'trending',
                            'value' => '95%',
                            'label' => 'Client Retention Rate',
                            'description' => 'Average annual retention across all enterprise clients',
                            'trend' => '+12%',
                            'trendDirection' => 'up'
                        ],
                        [
                            'icon' => 'dollar',
                            'value' => '$2.5B',
                            'label' => 'Client Revenue Generated',
                            'description' => 'Total incremental revenue driven for our clients',
                            'trend' => '+35%',
                            'trendDirection' => 'up'
                        ],
                        [
                            'icon' => 'clock',
                            'value' => '40%',
                            'label' => 'Average Efficiency Gain',
                            'description' => 'Reduction in operational costs and cycle time',
                            'trend' => '+8%',
                            'trendDirection' => 'up'
                        ],
                        [
                            'icon' => 'users',
                            'value' => '500+',
                            'label' => 'Happy Clients',
                            'description' => 'Across 25+ countries and 6 continents',
                            'trend' => '+50',
                            'trendDirection' => 'up'
                        ]
                    ],
                    'achievementsTitle' => 'Milestone Achievements',
                    'achievements' => [
                        ['icon' => 'star', 'value' => '150+', 'label' => 'Industry Awards'],
                        ['icon' => 'document', 'value' => '50+', 'label' => 'Case Studies Published'],
                        ['icon' => 'users', 'value' => '10K+', 'label' => 'Users Trained'],
                        ['icon' => 'globe', 'value' => '25+', 'label' => 'Countries Served']
                    ],
                    'regionalTitle' => 'Global Impact',
                    'regionalData' => [
                        ['icon' => 'globe', 'name' => 'North America', 'value' => '45%', 'metric' => 'Client Base'],
                        ['icon' => 'globe', 'name' => 'Europe', 'value' => '28%', 'metric' => 'Client Base'],
                        ['icon' => 'globe', 'name' => 'Asia-Pacific', 'value' => '18%', 'metric' => 'Client Base'],
                        ['icon' => 'globe', 'name' => 'Rest of World', 'value' => '9%', 'metric' => 'Client Base']
                    ],
                    'successStories' => [
                        [
                            'icon' => 'building',
                            'companyIcon' => 'building',
                            'category' => 'Manufacturing',
                            'title' => 'Digital Transformation Success',
                            'description' => 'Global manufacturer reduced inventory costs by 35% and improved forecast accuracy by 50% within 6 months of implementation.',
                            'company' => 'Precision Industries',
                            'industry' => 'Aerospace & Defense',
                            'location' => 'Detroit, MI',
                            'metrics' => [
                                ['value' => '35%', 'label' => 'Cost Reduction'],
                                ['value' => '50%', 'label' => 'Forecast Accuracy'],
                                ['value' => '99.5%', 'label' => 'On-Time Delivery'],
                                ['value' => '3x', 'label' => 'Inventory Turns']
                            ],
                            'testimonial' => [
                                'quote' => 'The platform transformed our supply chain visibility. We\'re now able to make data-driven decisions in real-time.',
                                'author' => 'Sarah Johnson',
                                'role' => 'VP of Operations'
                            ],
                            'link' => '/case-studies/precision-industries'
                        ],
                        [
                            'icon' => 'cloud',
                            'companyIcon' => 'cloud',
                            'category' => 'Retail & E-commerce',
                            'title' => 'Omnichannel Excellence',
                            'description' => 'Leading retailer achieved 99.9% order accuracy and reduced fulfillment costs by 28% through intelligent inventory optimization.',
                            'company' => 'Global Retail Group',
                            'industry' => 'Fashion & Apparel',
                            'location' => 'New York, NY',
                            'metrics' => [
                                ['value' => '28%', 'label' => 'Fulfillment Cost Reduction'],
                                ['value' => '99.9%', 'label' => 'Order Accuracy'],
                                ['value' => '40%', 'label' => 'Faster Shipping'],
                                ['value' => '25%', 'label' => 'Return Reduction']
                            ],
                            'testimonial' => [
                                'quote' => 'Our customers are happier, our team is more efficient, and our margins have never been better.',
                                'author' => 'Michael Chen',
                                'role' => 'CTO'
                            ],
                            'link' => '/case-studies/global-retail-group'
                        ],
                        [
                            'icon' => 'shield',
                            'companyIcon' => 'shield',
                            'category' => 'Healthcare',
                            'title' => 'Patient-Centric Supply Chain',
                            'description' => 'Healthcare provider reduced waste by 45% and improved patient satisfaction scores by 30% with real-time inventory tracking.',
                            'company' => 'HealthFirst Systems',
                            'industry' => 'Healthcare & Pharma',
                            'location' => 'Boston, MA',
                            'metrics' => [
                                ['value' => '45%', 'label' => 'Waste Reduction'],
                                ['value' => '30%', 'label' => 'Patient Satisfaction'],
                                ['value' => '100%', 'label' => 'Compliance Rate'],
                                ['value' => '2x', 'label' => 'Inventory Efficiency']
                            ],
                            'testimonial' => [
                                'quote' => 'We\'ve seen unprecedented improvements in both operational efficiency and patient outcomes.',
                                'author' => 'Dr. Emily Rodriguez',
                                'role' => 'Director of Operations'
                            ],
                            'link' => '/case-studies/healthfirst-systems'
                        ]
                    ],
                    'timelineEvents' => [
                        [
                            'icon' => 'star',
                            'date' => '2024',
                            'title' => 'Global Expansion',
                            'description' => 'Expanded operations to 5 new countries, serving clients across 25+ nations worldwide.',
                            'metric' => '500+ Enterprise Clients'
                        ],
                        [
                            'icon' => 'sparkles',
                            'date' => '2023',
                            'title' => 'Innovation Award',
                            'description' => 'Recognized as \'Best Supply Chain Innovation\' by industry analysts.',
                            'metric' => 'Industry Leadership Recognition'
                        ],
                        [
                            'icon' => 'shield',
                            'date' => '2022',
                            'title' => 'Security Certification',
                            'description' => 'Achieved ISO 27001 and SOC 2 Type II certifications for data security.',
                            'metric' => 'Enterprise-Grade Security'
                        ],
                        [
                            'icon' => 'users',
                            'date' => '2021',
                            'title' => 'Client Milestone',
                            'description' => 'Reached 500+ enterprise clients across manufacturing, retail, and healthcare sectors.',
                            'metric' => 'Rapid Growth Trajectory'
                        ],
                        [
                            'icon' => 'bulb',
                            'date' => '2020',
                            'title' => 'Platform Launch',
                            'description' => 'Launched next-generation inventory optimization platform with AI-powered forecasting.',
                            'metric' => 'Technology Innovation'
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 211,
                'section_key' => 'clientSuccessMetrics',
                'variant' => 'variant3',
                'config' => json_encode([
                    'initialMetric' => 0,
                    'badge' => [
                        'text' => 'Proven Results',
                        'backgroundColor' => 'bg-blue-100 dark:bg-blue-900/30',
                        'borderColor' => 'border-blue-200 dark:border-blue-800',
                        'textColor' => 'text-blue-700 dark:text-blue-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Client',
                        'highlightedText' => 'Success',
                        'suffix' => 'Metrics',
                        'highlightGradient' => 'from-blue-600 to-indigo-600'
                    ],
                    'description' => 'Real results from real clients across industries. See how we deliver measurable impact.',
                    'metrics' => [
                        [
                            'icon' => 'trending',
                            'value' => '287%',
                            'label' => 'Average ROI',
                            'description' => 'Return on investment for our clients'
                        ],
                        [
                            'icon' => 'dollar',
                            'value' => '$2.5B',
                            'label' => 'Client Value Created',
                            'description' => 'Total incremental revenue generated'
                        ],
                        [
                            'icon' => 'clock',
                            'value' => '40%',
                            'label' => 'Efficiency Gain',
                            'description' => 'Average operational improvement'
                        ],
                        [
                            'icon' => 'users',
                            'value' => '500+',
                            'label' => 'Enterprise Clients',
                            'description' => 'Trusted by industry leaders'
                        ]
                    ],
                    'detailedTitle' => 'Performance by Industry',
                    'detailedMetrics' => [
                        [
                            'icon' => 'building',
                            'industry' => 'Manufacturing',
                            'value' => '35%',
                            'percentage' => '35%',
                            'label' => 'Cost Reduction',
                            'improvement' => '+28% YoY'
                        ],
                        [
                            'icon' => 'truck',
                            'industry' => 'Logistics & 3PL',
                            'value' => '42%',
                            'percentage' => '42%',
                            'label' => 'Warehouse Efficiency',
                            'improvement' => '+35% YoY'
                        ],
                        [
                            'icon' => 'database',
                            'industry' => 'Retail & E-commerce',
                            'value' => '38%',
                            'percentage' => '38%',
                            'label' => 'Inventory Optimization',
                            'improvement' => '+42% YoY'
                        ],
                        [
                            'icon' => 'shield',
                            'industry' => 'Healthcare',
                            'value' => '45%',
                            'percentage' => '45%',
                            'label' => 'Waste Reduction',
                            'improvement' => '+31% YoY'
                        ]
                    ],
                    'caseStudyTitle' => 'Featured Case Study',
                    'caseStudies' => [
                        [
                            'icon' => 'building',
                            'industry' => 'Manufacturing',
                            'title' => 'Digital Transformation Success',
                            'description' => 'Global aerospace manufacturer reduced inventory costs and improved forecast accuracy with AI-driven supply chain optimization.',
                            'results' => [
                                ['value' => '35%', 'label' => 'Cost Reduction'],
                                ['value' => '50%', 'label' => 'Forecast Accuracy'],
                                ['value' => '99.5%', 'label' => 'On-Time Delivery'],
                                ['value' => '3x', 'label' => 'Inventory Turns']
                            ],
                            'link' => '/case-studies/aerospace-manufacturing'
                        ],
                        [
                            'icon' => 'truck',
                            'industry' => 'Logistics & 3PL',
                            'title' => 'Warehouse Efficiency Breakthrough',
                            'description' => 'Leading 3PL provider achieved 42% productivity gain and eliminated billing errors with automated warehouse management.',
                            'results' => [
                                ['value' => '42%', 'label' => 'Productivity Gain'],
                                ['value' => '100%', 'label' => 'Billing Accuracy'],
                                ['value' => '35%', 'label' => 'Labor Cost Savings'],
                                ['value' => '6mo', 'label' => 'Payback Period']
                            ],
                            'link' => '/case-studies/global-3pl'
                        ],
                        [
                            'icon' => 'database',
                            'industry' => 'Retail & E-commerce',
                            'title' => 'Omnichannel Inventory Excellence',
                            'description' => 'Major fashion retailer reduced stockouts by 65% and improved margins with real-time inventory visibility across channels.',
                            'results' => [
                                ['value' => '65%', 'label' => 'Stockout Reduction'],
                                ['value' => '28%', 'label' => 'Fulfillment Cost Cut'],
                                ['value' => '99.9%', 'label' => 'Order Accuracy'],
                                ['value' => '15%', 'label' => 'Margin Improvement']
                            ],
                            'link' => '/case-studies/fashion-retailer'
                        ],
                        [
                            'icon' => 'shield',
                            'industry' => 'Healthcare',
                            'title' => 'Patient-Centric Supply Chain',
                            'description' => 'Healthcare network reduced waste by 45% and improved patient satisfaction with real-time inventory tracking.',
                            'results' => [
                                ['value' => '45%', 'label' => 'Waste Reduction'],
                                ['value' => '30%', 'label' => 'Patient Satisfaction'],
                                ['value' => '100%', 'label' => 'Compliance Rate'],
                                ['value' => '2x', 'label' => 'Inventory Efficiency']
                            ],
                            'link' => '/case-studies/healthcare-network'
                        ]
                    ],
                    'showROICalculator' => true,
                    'roiTitle' => 'Calculate Your Potential ROI',
                    'roiDescription' => 'Based on data from 500+ implementations across industries, see what you could achieve with our solutions.',
                    'roiMetrics' => [
                        ['value' => '2.5x', 'label' => 'Average ROI'],
                        ['value' => '4-6', 'label' => 'Months Payback'],
                        ['value' => '25-35%', 'label' => 'Cost Reduction']
                    ],
                    'roiLink' => '/roi-calculator',
                    'testimonialsTitle' => 'What Our Clients Say',
                    'testimonials' => [
                        [
                            'icon' => 'users',
                            'rating' => 5,
                            'quote' => 'The platform transformed our supply chain visibility. We\'re now able to make data-driven decisions in real-time. The ROI was evident within the first quarter.',
                            'author' => 'Sarah Johnson',
                            'role' => 'VP of Operations',
                            'company' => 'Precision Industries',
                            'result' => '35% cost reduction, 99.5% delivery accuracy'
                        ],
                        [
                            'icon' => 'users',
                            'rating' => 5,
                            'quote' => 'Exceptional support and a robust platform. Our implementation was smooth, and the team\'s expertise is unmatched in the industry.',
                            'author' => 'Michael Chen',
                            'role' => 'CTO',
                            'company' => 'Global Retail Group',
                            'result' => '28% fulfillment cost reduction, 99.9% accuracy'
                        ],
                        [
                            'icon' => 'users',
                            'rating' => 5,
                            'quote' => 'We\'ve seen unprecedented improvements in both operational efficiency and patient outcomes. A game-changer for our organization.',
                            'author' => 'Dr. Emily Rodriguez',
                            'role' => 'Director of Operations',
                            'company' => 'HealthFirst Systems',
                            'result' => '45% waste reduction, 30% satisfaction increase'
                        ]
                    ],
                    'showTrust' => true,
                    'trustText' => 'Recognized by industry leaders and analysts worldwide',
                    'trustBadges' => [
                        ['icon' => 'google', 'name' => 'Google'],
                        ['icon' => 'microsoft', 'name' => 'Microsoft'],
                        ['icon' => 'amazon', 'name' => 'Amazon'],
                        ['icon' => 'trophy', 'name' => 'Best Innovation 2024'],
                        ['icon' => 'shield', 'name' => 'ISO 27001']
                    ],
                    'showDownload' => true,
                    'downloadText' => 'Download Full Success Report',
                    'downloadLink' => '/reports/success-report.pdf'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 212,
                'section_key' => 'clientSuccessMetrics',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Before & After Scenarios Section
            [
                'id' => 213,
                'section_key' => 'beforeAfterScenarios',
                'variant' => 'variant1',
                'config' => json_encode([
                    'initialScenario' => 0,
                    'badge' => [
                        'text' => 'Transformation Stories',
                        'backgroundColor' => 'bg-green-100 dark:bg-green-900/30',
                        'borderColor' => 'border-green-200 dark:border-green-800',
                        'textColor' => 'text-green-700 dark:text-green-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Before vs',
                        'highlightedText' => 'After',
                        'suffix' => 'Real Transformations',
                        'highlightGradient' => 'from-green-600 to-emerald-600'
                    ],
                    'description' => 'See how we\'ve helped businesses overcome challenges and achieve remarkable results across industries.',
                    'beforeLabel' => 'Before Transformation',
                    'afterLabel' => 'After Transformation',
                    'scenarios' => [
                        [
                            'icon' => 'building',
                            'industry' => 'Manufacturing',
                            'company' => 'Precision Industries',
                            'location' => 'Detroit, MI',
                            'caseStudyLink' => '/case-studies/precision-industries',
                            'demoLink' => '/demo/manufacturing',
                            'before' => [
                                'challenge' => 'Legacy systems caused inventory visibility gaps, leading to $2.5M in excess stock and frequent production delays.',
                                'metrics' => [
                                    ['label' => 'Inventory Carrying Cost', 'value' => '$8.2M'],
                                    ['label' => 'Forecast Accuracy', 'value' => '68%'],
                                    ['label' => 'On-Time Delivery', 'value' => '82%']
                                ],
                                'painPoints' => [
                                    'Manual data entry errors across 3 ERP systems',
                                    '4-week lag in inventory reconciliation',
                                    'Frequent stockouts of critical components',
                                    'Limited visibility across 12 warehouses'
                                ]
                            ],
                            'after' => [
                                'solution' => 'Implemented AI-powered inventory optimization with real-time sync across all ERP systems and warehouses.',
                                'metrics' => [
                                    ['label' => 'Inventory Carrying Cost', 'value' => '$5.3M', 'improvement' => '35%'],
                                    ['label' => 'Forecast Accuracy', 'value' => '94%', 'improvement' => '+26%'],
                                    ['label' => 'On-Time Delivery', 'value' => '99.2%', 'improvement' => '+17%']
                                ],
                                'improvements' => [
                                    'Real-time inventory visibility across all locations',
                                    'Automated replenishment with 95% accuracy',
                                    '30% reduction in safety stock levels',
                                    'Eliminated manual data reconciliation'
                                ]
                            ],
                            'impact' => [
                                ['icon' => 'dollar', 'value' => '$2.9M', 'label' => 'Annual Savings'],
                                ['icon' => 'clock', 'value' => '6', 'label' => 'Months Payback'],
                                ['icon' => 'trending', 'value' => '287%', 'label' => 'ROI'],
                                ['icon' => 'chart', 'value' => '35%', 'label' => 'Inventory Reduction']
                            ],
                            'testimonial' => [
                                'quote' => 'The transformation has been remarkable. We\'ve eliminated our inventory visibility issues and achieved results we didn\'t think were possible.',
                                'author' => 'Sarah Johnson',
                                'role' => 'VP of Operations',
                                'company' => 'Precision Industries',
                                'rating' => 5
                            ]
                        ],
                        [
                            'icon' => 'truck',
                            'industry' => 'Logistics & 3PL',
                            'company' => 'Global Logistics Solutions',
                            'location' => 'Chicago, IL',
                            'caseStudyLink' => '/case-studies/global-logistics',
                            'demoLink' => '/demo/logistics',
                            'before' => [
                                'challenge' => 'Manual billing processes caused revenue leakage and client disputes, with 15% of invoices requiring rework.',
                                'metrics' => [
                                    ['label' => 'Billing Accuracy', 'value' => '87%'],
                                    ['label' => 'Invoice Processing Time', 'value' => '5 days'],
                                    ['label' => 'Revenue Leakage', 'value' => '$1.8M']
                                ],
                                'painPoints' => [
                                    'Time-consuming manual invoice verification',
                                    'High rate of billing disputes',
                                    'Delayed revenue recognition',
                                    'Limited audit trail for charges'
                                ]
                            ],
                            'after' => [
                                'solution' => 'Deployed automated billing engine with real-time rate validation and client-specific business rules.',
                                'metrics' => [
                                    ['label' => 'Billing Accuracy', 'value' => '99.9%', 'improvement' => '+13%'],
                                    ['label' => 'Invoice Processing Time', 'value' => '4 hours', 'improvement' => '96%'],
                                    ['label' => 'Revenue Recovery', 'value' => '$2.1M', 'improvement' => '+117%']
                                ],
                                'improvements' => [
                                    'Fully automated invoice generation',
                                    'Real-time rate validation',
                                    '90% reduction in billing disputes',
                                    'Complete audit trail for every charge'
                                ]
                            ],
                            'impact' => [
                                ['icon' => 'dollar', 'value' => '$2.1M', 'label' => 'Revenue Recovered'],
                                ['icon' => 'clock', 'value' => '4', 'label' => 'Months Payback'],
                                ['icon' => 'trending', 'value' => '312%', 'label' => 'ROI'],
                                ['icon' => 'chart', 'value' => '96%', 'label' => 'Time Reduction']
                            ],
                            'testimonial' => [
                                'quote' => 'The billing automation alone paid for the entire platform within 4 months. We\'ve never had such accurate and efficient billing.',
                                'author' => 'Michael Chen',
                                'role' => 'CFO',
                                'company' => 'Global Logistics Solutions',
                                'rating' => 5
                            ]
                        ],
                        [
                            'icon' => 'database',
                            'industry' => 'Retail & E-commerce',
                            'company' => 'Fashion Forward Retail',
                            'location' => 'New York, NY',
                            'caseStudyLink' => '/case-studies/fashion-forward',
                            'demoLink' => '/demo/retail',
                            'before' => [
                                'challenge' => 'Poor inventory visibility across channels led to $3.2M in lost sales and 18% markdown rate.',
                                'metrics' => [
                                    ['label' => 'Stockout Rate', 'value' => '22%'],
                                    ['label' => 'Markdown Rate', 'value' => '18%'],
                                    ['label' => 'Inventory Turnover', 'value' => '2.8x']
                                ],
                                'painPoints' => [
                                    'Disconnected online and store inventory',
                                    'Slow replenishment cycles',
                                    'High seasonal write-offs',
                                    'Poor demand forecasting'
                                ]
                            ],
                            'after' => [
                                'solution' => 'Implemented omnichannel inventory platform with unified commerce and AI demand forecasting.',
                                'metrics' => [
                                    ['label' => 'Stockout Rate', 'value' => '5%', 'improvement' => '77%'],
                                    ['label' => 'Markdown Rate', 'value' => '9%', 'improvement' => '50%'],
                                    ['label' => 'Inventory Turnover', 'value' => '4.6x', 'improvement' => '+64%']
                                ],
                                'improvements' => [
                                    'Real-time inventory across all channels',
                                    '50% reduction in lost sales',
                                    'Automated replenishment',
                                    'Improved demand forecast accuracy'
                                ]
                            ],
                            'impact' => [
                                ['icon' => 'dollar', 'value' => '$4.5M', 'label' => 'Revenue Recovery'],
                                ['icon' => 'clock', 'value' => '5', 'label' => 'Months Payback'],
                                ['icon' => 'trending', 'value' => '245%', 'label' => 'ROI'],
                                ['icon' => 'chart', 'value' => '50%', 'label' => 'Markdown Reduction']
                            ],
                            'testimonial' => [
                                'quote' => 'We finally have a single view of inventory across all channels. Our customers can buy anywhere, and we can fulfill from anywhere.',
                                'author' => 'Jessica Williams',
                                'role' => 'VP of Merchandising',
                                'company' => 'Fashion Forward Retail',
                                'rating' => 5
                            ]
                        ],
                        [
                            'icon' => 'shield',
                            'industry' => 'Healthcare',
                            'company' => 'HealthFirst Medical Network',
                            'location' => 'Boston, MA',
                            'caseStudyLink' => '/case-studies/healthfirst',
                            'demoLink' => '/demo/healthcare',
                            'before' => [
                                'challenge' => 'Expiring medical supplies caused $1.2M in annual waste and compliance risks across 15 facilities.',
                                'metrics' => [
                                    ['label' => 'Expired Inventory Value', 'value' => '$1.2M'],
                                    ['label' => 'Stockout Rate', 'value' => '18%'],
                                    ['label' => 'Manual Hours/Week', 'value' => '120']
                                ],
                                'painPoints' => [
                                    'No visibility into expiration dates',
                                    'Reactive inventory management',
                                    'Compliance audit challenges',
                                    'Wasted staff time on manual checks'
                                ]
                            ],
                            'after' => [
                                'solution' => 'Deployed RFID-based inventory tracking with expiration date alerts and automated reordering.',
                                'metrics' => [
                                    ['label' => 'Expired Inventory Value', 'value' => '$120K', 'improvement' => '90%'],
                                    ['label' => 'Stockout Rate', 'value' => '3%', 'improvement' => '83%'],
                                    ['label' => 'Manual Hours/Week', 'value' => '15', 'improvement' => '88%']
                                ],
                                'improvements' => [
                                    'Real-time expiration tracking',
                                    'Automated reorder alerts',
                                    '100% audit compliance',
                                    'Reduced staff workload'
                                ]
                            ],
                            'impact' => [
                                ['icon' => 'dollar', 'value' => '$1.1M', 'label' => 'Waste Reduction'],
                                ['icon' => 'clock', 'value' => '3', 'label' => 'Months Payback'],
                                ['icon' => 'trending', 'value' => '420%', 'label' => 'ROI'],
                                ['icon' => 'chart', 'value' => '88%', 'label' => 'Labor Savings']
                            ],
                            'testimonial' => [
                                'quote' => 'We\'ve eliminated expired inventory waste and improved patient care. The system pays for itself many times over.',
                                'author' => 'Dr. Emily Rodriguez',
                                'role' => 'Director of Operations',
                                'company' => 'HealthFirst Medical Network',
                                'rating' => 5
                            ]
                        ]
                    ],
                    'showStats' => true,
                    'transformationStats' => [
                        ['icon' => 'dollar', 'value' => '$150M+', 'label' => 'Client Savings Generated'],
                        ['icon' => 'clock', 'value' => '94%', 'label' => 'Client Retention Rate'],
                        ['icon' => 'users', 'value' => '500+', 'label' => 'Successful Transformations'],
                        ['icon' => 'star', 'value' => '4.9/5', 'label' => 'Client Satisfaction Score']
                    ],
                    'showCta' => true,
                    'ctaText' => 'Ready to write your own transformation story?',
                    'ctaButtonText' => 'Start Your Journey',
                    'ctaLink' => '/demo'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 214,
                'section_key' => 'beforeAfterScenarios',
                'variant' => 'variant2',
                'config' => json_encode([
                    'initialSlide' => 0,
                    'autoplay' => true,
                    'autoplayInterval' => 6000,
                    'badge' => [
                        'text' => 'Visual Transformations',
                        'backgroundColor' => 'bg-green-100 dark:bg-green-900/30',
                        'borderColor' => 'border-green-200 dark:border-green-800',
                        'textColor' => 'text-green-700 dark:text-green-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'See the',
                        'highlightedText' => 'Difference',
                        'suffix' => 'Before & After',
                        'highlightGradient' => 'from-green-600 to-emerald-600'
                    ],
                    'description' => 'Drag the slider to see how we\'ve transformed operations for our clients.',
                    'beforeLabel' => 'Before Transformation',
                    'afterLabel' => 'After Transformation',
                    'scenarios' => [
                        [
                            'icon' => 'building',
                            'industry' => 'Manufacturing',
                            'company' => 'Precision Industries',
                            'location' => 'Detroit, MI',
                            'year' => '2024',
                            'beforeImage' => 'https://placehold.co/1200x800/ef4444/ffffff?text=BEFORE:+Legacy+Warehouse',
                            'afterImage' => 'https://placehold.co/1200x800/10b981/ffffff?text=AFTER:+Automated+Facility',
                            'keyMetrics' => [
                                ['value' => '35%', 'label' => 'Cost Reduction', 'improvement' => 'Reduced from $8.2M to $5.3M'],
                                ['value' => '94%', 'label' => 'Forecast Accuracy', 'improvement' => 'Up from 68%'],
                                ['value' => '99.2%', 'label' => 'On-Time Delivery', 'improvement' => 'Up from 82%'],
                                ['value' => '287%', 'label' => 'ROI', 'improvement' => 'Within 6 months']
                            ],
                            'beforeMetrics' => [
                                ['label' => 'Inventory Carrying Cost', 'value' => '$8.2M', 'percentage' => '100%'],
                                ['label' => 'Forecast Accuracy', 'value' => '68%', 'percentage' => '68%'],
                                ['label' => 'On-Time Delivery', 'value' => '82%', 'percentage' => '82%'],
                                ['label' => 'Manual Data Entry Hours', 'value' => '120hrs/wk', 'percentage' => '100%']
                            ],
                            'afterMetrics' => [
                                ['label' => 'Inventory Carrying Cost', 'value' => '$5.3M', 'percentage' => '65%', 'improvement' => '35%'],
                                ['label' => 'Forecast Accuracy', 'value' => '94%', 'percentage' => '94%', 'improvement' => '+26%'],
                                ['label' => 'On-Time Delivery', 'value' => '99.2%', 'percentage' => '99%', 'improvement' => '+17%'],
                                ['label' => 'Manual Data Entry Hours', 'value' => '15hrs/wk', 'percentage' => '13%', 'improvement' => '88%']
                            ],
                            'timeline' => [
                                ['period' => 'Month 1', 'title' => 'Assessment & Planning', 'description' => 'Completed full inventory audit and system requirements gathering.', 'result' => 'Identified $2.5M in optimization opportunities'],
                                ['period' => 'Month 2-3', 'title' => 'Platform Implementation', 'description' => 'Deployed AI-powered inventory optimization across 12 warehouses.', 'result' => 'Real-time visibility achieved'],
                                ['period' => 'Month 4', 'title' => 'Process Automation', 'description' => 'Automated replenishment and forecast generation.', 'result' => 'Manual work reduced by 88%'],
                                ['period' => 'Month 5-6', 'title' => 'Optimization & ROI', 'description' => 'Fine-tuned algorithms and realized full benefits.', 'result' => '35% cost reduction achieved']
                            ],
                            'testimonial' => [
                                'quote' => 'The transformation has been remarkable. We\'ve eliminated our inventory visibility issues and achieved results we didn\'t think were possible. The slider really shows the dramatic change we\'ve made.',
                                'author' => 'Sarah Johnson',
                                'role' => 'VP of Operations',
                                'company' => 'Precision Industries'
                            ]
                        ],
                        [
                            'icon' => 'truck',
                            'industry' => 'Logistics & 3PL',
                            'company' => 'Global Logistics Solutions',
                            'location' => 'Chicago, IL',
                            'year' => '2024',
                            'beforeImage' => 'https://placehold.co/1200x800/ef4444/ffffff?text=BEFORE:+Manual+Billing+Process',
                            'afterImage' => 'https://placehold.co/1200x800/10b981/ffffff?text=AFTER:+Automated+Billing+System',
                            'keyMetrics' => [
                                ['value' => '99.9%', 'label' => 'Billing Accuracy', 'improvement' => 'Up from 87%'],
                                ['value' => '4hrs', 'label' => 'Invoice Processing', 'improvement' => 'Down from 5 days'],
                                ['value' => '$2.1M', 'label' => 'Revenue Recovered', 'improvement' => 'Annual recovery'],
                                ['value' => '312%', 'label' => 'ROI', 'improvement' => 'Within 4 months']
                            ],
                            'beforeMetrics' => [
                                ['label' => 'Billing Accuracy', 'value' => '87%', 'percentage' => '87%'],
                                ['label' => 'Invoice Processing Time', 'value' => '5 days', 'percentage' => '100%'],
                                ['label' => 'Revenue Leakage', 'value' => '$1.8M', 'percentage' => '100%'],
                                ['label' => 'Dispute Rate', 'value' => '15%', 'percentage' => '15%']
                            ],
                            'afterMetrics' => [
                                ['label' => 'Billing Accuracy', 'value' => '99.9%', 'percentage' => '100%', 'improvement' => '+13%'],
                                ['label' => 'Invoice Processing Time', 'value' => '4 hours', 'percentage' => '3%', 'improvement' => '96%'],
                                ['label' => 'Revenue Recovery', 'value' => '$2.1M', 'percentage' => '117%', 'improvement' => '+117%'],
                                ['label' => 'Dispute Rate', 'value' => '2%', 'percentage' => '2%', 'improvement' => '87%']
                            ],
                            'timeline' => [
                                ['period' => 'Week 1-2', 'title' => 'Billing Audit', 'description' => 'Analyzed current billing processes and identified leakage points.', 'result' => 'Discovered $1.8M annual leakage'],
                                ['period' => 'Week 3-4', 'title' => 'System Integration', 'description' => 'Integrated automated billing engine with existing TMS/WMS.', 'result' => 'Seamless data flow established'],
                                ['period' => 'Week 5-6', 'title' => 'Rule Configuration', 'description' => 'Set up client-specific billing rules and validation logic.', 'result' => 'Custom rules for 50+ clients'],
                                ['period' => 'Week 7-8', 'title' => 'Go Live & Optimization', 'description' => 'Launched automated billing and fine-tuned for accuracy.', 'result' => '99.9% accuracy achieved']
                            ],
                            'testimonial' => [
                                'quote' => 'The billing automation alone paid for the entire platform within 4 months. We\'ve never had such accurate and efficient billing. The before/after difference is night and day.',
                                'author' => 'Michael Chen',
                                'role' => 'CFO',
                                'company' => 'Global Logistics Solutions'
                            ]
                        ],
                        [
                            'icon' => 'database',
                            'industry' => 'Retail & E-commerce',
                            'company' => 'Fashion Forward Retail',
                            'location' => 'New York, NY',
                            'year' => '2024',
                            'beforeImage' => 'https://placehold.co/1200x800/ef4444/ffffff?text=BEFORE:+Disconnected+Channels',
                            'afterImage' => 'https://placehold.co/1200x800/10b981/ffffff?text=AFTER:+Omnichannel+Unity',
                            'keyMetrics' => [
                                ['value' => '5%', 'label' => 'Stockout Rate', 'improvement' => 'Down from 22%'],
                                ['value' => '9%', 'label' => 'Markdown Rate', 'improvement' => 'Down from 18%'],
                                ['value' => '4.6x', 'label' => 'Inventory Turnover', 'improvement' => 'Up from 2.8x'],
                                ['value' => '245%', 'label' => 'ROI', 'improvement' => 'Within 5 months']
                            ],
                            'beforeMetrics' => [
                                ['label' => 'Stockout Rate', 'value' => '22%', 'percentage' => '22%'],
                                ['label' => 'Markdown Rate', 'value' => '18%', 'percentage' => '18%'],
                                ['label' => 'Inventory Turnover', 'value' => '2.8x', 'percentage' => '61%'],
                                ['label' => 'Lost Sales', 'value' => '$3.2M', 'percentage' => '100%']
                            ],
                            'afterMetrics' => [
                                ['label' => 'Stockout Rate', 'value' => '5%', 'percentage' => '5%', 'improvement' => '77%'],
                                ['label' => 'Markdown Rate', 'value' => '9%', 'percentage' => '9%', 'improvement' => '50%'],
                                ['label' => 'Inventory Turnover', 'value' => '4.6x', 'percentage' => '100%', 'improvement' => '+64%'],
                                ['label' => 'Lost Sales Recovered', 'value' => '$4.5M', 'percentage' => '141%', 'improvement' => '+141%']
                            ],
                            'timeline' => [
                                ['period' => 'Month 1', 'title' => 'Channel Assessment', 'description' => 'Evaluated inventory visibility across all sales channels.', 'result' => 'Identified 40% inventory discrepancies'],
                                ['period' => 'Month 2', 'title' => 'Platform Integration', 'description' => 'Connected online store, POS, and warehouse systems.', 'result' => 'Unified inventory view created'],
                                ['period' => 'Month 3', 'title' => 'Forecasting Implementation', 'description' => 'Deployed AI demand forecasting across all categories.', 'result' => 'Forecast accuracy improved to 92%'],
                                ['period' => 'Month 4-5', 'title' => 'Optimization', 'description' => 'Fine-tuned replenishment and allocation rules.', 'result' => '50% markdown reduction achieved']
                            ],
                            'testimonial' => [
                                'quote' => 'We finally have a single view of inventory across all channels. Our customers can buy anywhere, and we can fulfill from anywhere. The transformation is incredible.',
                                'author' => 'Jessica Williams',
                                'role' => 'VP of Merchandising',
                                'company' => 'Fashion Forward Retail'
                            ]
                        ]
                    ],
                    'showTimeline' => true,
                    'timelineTitle' => 'Transformation Journey Timeline',
                    'showCta' => true,
                    'ctaText' => 'Ready to see your own transformation?',
                    'ctaButtonText' => 'Start Your Journey',
                    'ctaLink' => '/demo'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 215,
                'section_key' => 'beforeAfterScenarios',
                'variant' => 'variant3',
                'config' => json_encode([
                    'initialScenario' => 0,
                    'badge' => [
                        'text' => 'Transformation Library',
                        'backgroundColor' => 'bg-green-100 dark:bg-green-900/30',
                        'borderColor' => 'border-green-200 dark:border-green-800',
                        'textColor' => 'text-green-700 dark:text-green-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Client',
                        'highlightedText' => 'Transformation',
                        'suffix' => 'Stories',
                        'highlightGradient' => 'from-green-600 to-emerald-600'
                    ],
                    'description' => 'Explore real-world examples of how we\'ve helped businesses overcome challenges and achieve remarkable results.',
                    'scenarios' => [
                        [
                            'icon' => 'building',
                            'industry' => 'Aerospace & Defense Manufacturing',
                            'company' => 'Precision Industries',
                            'location' => 'Detroit, MI',
                            'badge' => 'Featured',
                            'keyResult' => '35% cost reduction',
                            'beforeMetric' => '$8.2M',
                            'afterMetric' => '$5.3M',
                            'downloadLink' => '/case-studies/precision-industries.pdf',
                            'shareUrl' => 'https://yourdomain.com/case-studies/precision-industries',
                            'caseStudyLink' => '/case-studies/precision-industries',
                            'demoLink' => '/demo/manufacturing',
                            'before' => [
                                'challenge' => 'Legacy systems caused inventory visibility gaps across 12 warehouses, leading to $2.5M in excess stock and frequent production delays. Manual data entry errors resulted in 68% forecast accuracy and 82% on-time delivery rates.',
                                'metrics' => [
                                    ['label' => 'Inventory Carrying Cost', 'value' => '$8.2M', 'percentage' => '100%'],
                                    ['label' => 'Forecast Accuracy', 'value' => '68%', 'percentage' => '68%'],
                                    ['label' => 'On-Time Delivery', 'value' => '82%', 'percentage' => '82%'],
                                    ['label' => 'Manual Data Entry Hours', 'value' => '120hrs/wk', 'percentage' => '100%']
                                ],
                                'painPoints' => [
                                    'Manual data entry errors across 3 disconnected ERP systems',
                                    '4-week lag in inventory reconciliation',
                                    'Frequent stockouts of critical aerospace components',
                                    'Limited visibility across 12 warehouse locations'
                                ]
                            ],
                            'after' => [
                                'solution' => 'Implemented AI-powered inventory optimization platform with real-time sync across all ERP systems and warehouses. Deployed automated replenishment algorithms and predictive analytics for demand forecasting.',
                                'metrics' => [
                                    ['label' => 'Inventory Carrying Cost', 'value' => '$5.3M', 'percentage' => '65%', 'improvement' => '35%'],
                                    ['label' => 'Forecast Accuracy', 'value' => '94%', 'percentage' => '94%', 'improvement' => '+26%'],
                                    ['label' => 'On-Time Delivery', 'value' => '99.2%', 'percentage' => '99%', 'improvement' => '+17%'],
                                    ['label' => 'Manual Data Entry Hours', 'value' => '15hrs/wk', 'percentage' => '13%', 'improvement' => '88%']
                                ],
                                'improvements' => [
                                    'Real-time inventory visibility across all 12 warehouses',
                                    'Automated replenishment with 95% accuracy',
                                    '30% reduction in safety stock levels',
                                    'Eliminated manual data reconciliation between systems'
                                ]
                            ],
                            'impact' => [
                                ['icon' => 'dollar', 'value' => '$2.9M', 'label' => 'Annual Savings'],
                                ['icon' => 'clock', 'value' => '6', 'label' => 'Months Payback'],
                                ['icon' => 'trending', 'value' => '287%', 'label' => 'ROI'],
                                ['icon' => 'chart', 'value' => '35%', 'label' => 'Inventory Reduction']
                            ],
                            'roiCalculator' => [
                                'savings' => '25-35%',
                                'payback' => '4-6',
                                'roi' => '250%+',
                                'link' => '/roi-calculator?industry=manufacturing'
                            ],
                            'details' => [
                                [
                                    'icon' => 'chart',
                                    'title' => 'Implementation Approach',
                                    'content' => 'The implementation followed a phased approach over 6 months: Month 1 focused on assessment and planning, Months 2-3 on platform deployment across 3 pilot warehouses, Month 4 on integration with existing ERP systems, and Months 5-6 on full rollout and optimization across all 12 locations.'
                                ],
                                [
                                    'icon' => 'users',
                                    'title' => 'Team Training & Adoption',
                                    'content' => 'Provided comprehensive training to 150+ supply chain staff members across all shifts. Created role-specific workflows and dashboards. Achieved 95% user adoption rate within 60 days of go-live.'
                                ],
                                [
                                    'icon' => 'shield',
                                    'title' => 'Security & Compliance',
                                    'content' => 'Solution maintains SOC 2 Type II certification and complies with aerospace industry regulations (AS9100D). All data is encrypted at rest and in transit with role-based access controls.'
                                ]
                            ],
                            'testimonial' => [
                                'quote' => 'The transformation has been remarkable. We\'ve eliminated our inventory visibility issues and achieved results we didn\'t think were possible. The platform paid for itself within 6 months.',
                                'author' => 'Sarah Johnson',
                                'role' => 'VP of Operations',
                                'company' => 'Precision Industries'
                            ]
                        ],
                        [
                            'icon' => 'truck',
                            'industry' => 'Third-Party Logistics',
                            'company' => 'Global Logistics Solutions',
                            'location' => 'Chicago, IL',
                            'badge' => 'Top Performer',
                            'keyResult' => '$2.1M recovered',
                            'beforeMetric' => '87%',
                            'afterMetric' => '99.9%',
                            'downloadLink' => '/case-studies/global-logistics.pdf',
                            'shareUrl' => 'https://yourdomain.com/case-studies/global-logistics',
                            'caseStudyLink' => '/case-studies/global-logistics',
                            'demoLink' => '/demo/logistics',
                            'before' => [
                                'challenge' => 'Manual billing processes caused significant revenue leakage and frequent client disputes. With 15% of invoices requiring rework, the finance team spent 5 days per week on reconciliation instead of strategic analysis.',
                                'metrics' => [
                                    ['label' => 'Billing Accuracy', 'value' => '87%', 'percentage' => '87%'],
                                    ['label' => 'Invoice Processing Time', 'value' => '5 days', 'percentage' => '100%'],
                                    ['label' => 'Revenue Leakage', 'value' => '$1.8M', 'percentage' => '100%'],
                                    ['label' => 'Dispute Rate', 'value' => '15%', 'percentage' => '15%']
                                ],
                                'painPoints' => [
                                    'Time-consuming manual invoice verification across 200+ clients',
                                    'High rate of billing disputes leading to delayed payments',
                                    'Delayed revenue recognition (45+ days)',
                                    'Limited audit trail for disputed charges'
                                ]
                            ],
                            'after' => [
                                'solution' => 'Deployed automated billing engine with real-time rate validation, client-specific business rules, and automated dispute resolution workflows integrated with existing TMS and WMS systems.',
                                'metrics' => [
                                    ['label' => 'Billing Accuracy', 'value' => '99.9%', 'percentage' => '100%', 'improvement' => '+13%'],
                                    ['label' => 'Invoice Processing Time', 'value' => '4 hours', 'percentage' => '3%', 'improvement' => '96%'],
                                    ['label' => 'Revenue Recovery', 'value' => '$2.1M', 'percentage' => '117%', 'improvement' => '+117%'],
                                    ['label' => 'Dispute Rate', 'value' => '2%', 'percentage' => '2%', 'improvement' => '87%']
                                ],
                                'improvements' => [
                                    'Fully automated invoice generation and delivery',
                                    'Real-time rate validation against client contracts',
                                    '90% reduction in billing disputes',
                                    'Complete audit trail for every charge with 7-year retention'
                                ]
                            ],
                            'impact' => [
                                ['icon' => 'dollar', 'value' => '$2.1M', 'label' => 'Revenue Recovered'],
                                ['icon' => 'clock', 'value' => '4', 'label' => 'Months Payback'],
                                ['icon' => 'trending', 'value' => '312%', 'label' => 'ROI'],
                                ['icon' => 'chart', 'value' => '96%', 'label' => 'Time Reduction']
                            ],
                            'roiCalculator' => [
                                'savings' => '3-5%',
                                'payback' => '3-4',
                                'roi' => '300%+',
                                'link' => '/roi-calculator?industry=logistics'
                            ],
                            'details' => [
                                [
                                    'icon' => 'cog',
                                    'title' => 'Integration Architecture',
                                    'content' => 'Seamlessly integrated with existing transportation management system (TMS), warehouse management system (WMS), and ERP platform. APIs enabled real-time data flow with automated rate validation against 500+ client contracts.'
                                ],
                                [
                                    'icon' => 'users',
                                    'title' => 'Client Portal Launch',
                                    'content' => 'Launched self-service client portal allowing real-time invoice access, dispute submission, and payment history. Client satisfaction scores increased from 4.2 to 4.8 within 3 months.'
                                ]
                            ],
                            'testimonial' => [
                                'quote' => 'The billing automation alone paid for the entire platform within 4 months. We\'ve never had such accurate and efficient billing. Our finance team can now focus on strategic initiatives instead of manual reconciliation.',
                                'author' => 'Michael Chen',
                                'role' => 'CFO',
                                'company' => 'Global Logistics Solutions'
                            ]
                        ],
                        [
                            'icon' => 'database',
                            'industry' => 'Fashion & Apparel Retail',
                            'company' => 'Fashion Forward Retail',
                            'location' => 'New York, NY',
                            'badge' => 'Fastest ROI',
                            'keyResult' => '50% markdown reduction',
                            'beforeMetric' => '22%',
                            'afterMetric' => '5%',
                            'downloadLink' => '/case-studies/fashion-forward.pdf',
                            'shareUrl' => 'https://yourdomain.com/case-studies/fashion-forward',
                            'caseStudyLink' => '/case-studies/fashion-forward',
                            'demoLink' => '/demo/retail',
                            'before' => [
                                'challenge' => 'Poor inventory visibility across online and 50+ physical stores led to $3.2M in lost sales annually. The company struggled with 22% stockout rates and 18% markdown rates due to disconnected systems.',
                                'metrics' => [
                                    ['label' => 'Stockout Rate', 'value' => '22%', 'percentage' => '22%'],
                                    ['label' => 'Markdown Rate', 'value' => '18%', 'percentage' => '18%'],
                                    ['label' => 'Inventory Turnover', 'value' => '2.8x', 'percentage' => '61%'],
                                    ['label' => 'Lost Sales', 'value' => '$3.2M', 'percentage' => '100%']
                                ],
                                'painPoints' => [
                                    'Disconnected online and physical store inventory systems',
                                    'Slow 14-day replenishment cycles',
                                    'High seasonal write-offs (25% of seasonal inventory)',
                                    'Poor demand forecasting for new collections'
                                ]
                            ],
                            'after' => [
                                'solution' => 'Implemented omnichannel inventory platform with unified commerce, AI-powered demand forecasting, and automated allocation across all channels.',
                                'metrics' => [
                                    ['label' => 'Stockout Rate', 'value' => '5%', 'percentage' => '5%', 'improvement' => '77%'],
                                    ['label' => 'Markdown Rate', 'value' => '9%', 'percentage' => '9%', 'improvement' => '50%'],
                                    ['label' => 'Inventory Turnover', 'value' => '4.6x', 'percentage' => '100%', 'improvement' => '+64%'],
                                    ['label' => 'Lost Sales Recovered', 'value' => '$4.5M', 'percentage' => '141%', 'improvement' => '+141%']
                                ],
                                'improvements' => [
                                    'Real-time inventory visibility across all sales channels',
                                    'Buy online, return in-store capabilities',
                                    '50% reduction in lost sales through better allocation',
                                    'Automated replenishment with 3-day cycles'
                                ]
                            ],
                            'impact' => [
                                ['icon' => 'dollar', 'value' => '$4.5M', 'label' => 'Revenue Recovery'],
                                ['icon' => 'clock', 'value' => '5', 'label' => 'Months Payback'],
                                ['icon' => 'trending', 'value' => '245%', 'label' => 'ROI'],
                                ['icon' => 'chart', 'value' => '50%', 'label' => 'Markdown Reduction']
                            ],
                            'roiCalculator' => [
                                'savings' => '20-30%',
                                'payback' => '4-6',
                                'roi' => '200%+',
                                'link' => '/roi-calculator?industry=retail'
                            ],
                            'details' => [
                                [
                                    'icon' => 'chart',
                                    'title' => 'AI Forecasting Implementation',
                                    'content' => 'Deployed machine learning models trained on 5 years of sales data to predict demand at SKU-store level with 94% accuracy. The system automatically adjusts for seasonality, promotions, and external factors.'
                                ],
                                [
                                    'icon' => 'globe',
                                    'title' => 'Omnichannel Capabilities',
                                    'content' => 'Enabled ship-from-store, buy-online-pickup-in-store (BOPIS), and endless aisle capabilities. Customers can now see real-time inventory across all locations and purchase from any channel.'
                                ]
                            ],
                            'testimonial' => [
                                'quote' => 'We finally have a single view of inventory across all channels. Our customers can buy anywhere, and we can fulfill from anywhere. The AI forecasting has been a game-changer for our buying team.',
                                'author' => 'Jessica Williams',
                                'role' => 'VP of Merchandising',
                                'company' => 'Fashion Forward Retail'
                            ]
                        ],
                        [
                            'icon' => 'shield',
                            'industry' => 'Healthcare & Pharmaceuticals',
                            'company' => 'HealthFirst Medical Network',
                            'location' => 'Boston, MA',
                            'badge' => 'Most Impactful',
                            'keyResult' => '90% waste reduction',
                            'beforeMetric' => '$1.2M',
                            'afterMetric' => '$120K',
                            'downloadLink' => '/case-studies/healthfirst.pdf',
                            'shareUrl' => 'https://yourdomain.com/case-studies/healthfirst',
                            'caseStudyLink' => '/case-studies/healthfirst',
                            'demoLink' => '/demo/healthcare',
                            'before' => [
                                'challenge' => 'Expiring medical supplies caused $1.2M in annual waste across 15 facilities. Staff spent 120 hours weekly manually checking expiration dates, and stockouts of critical items occurred 18% of the time.',
                                'metrics' => [
                                    ['label' => 'Expired Inventory Value', 'value' => '$1.2M', 'percentage' => '100%'],
                                    ['label' => 'Stockout Rate', 'value' => '18%', 'percentage' => '18%'],
                                    ['label' => 'Manual Hours/Week', 'value' => '120', 'percentage' => '100%'],
                                    ['label' => 'Compliance Audit Findings', 'value' => '12', 'percentage' => '100%']
                                ],
                                'painPoints' => [
                                    'No visibility into expiration dates across facilities',
                                    'Reactive inventory management causing last-minute orders',
                                    'Compliance audit challenges with paper-based tracking',
                                    'Wasted clinical staff time on inventory management'
                                ]
                            ],
                            'after' => [
                                'solution' => 'Deployed RFID-based inventory tracking with expiration date alerts, automated reordering, and real-time visibility across all 15 facilities.',
                                'metrics' => [
                                    ['label' => 'Expired Inventory Value', 'value' => '$120K', 'percentage' => '10%', 'improvement' => '90%'],
                                    ['label' => 'Stockout Rate', 'value' => '3%', 'percentage' => '3%', 'improvement' => '83%'],
                                    ['label' => 'Manual Hours/Week', 'value' => '15', 'percentage' => '13%', 'improvement' => '88%'],
                                    ['label' => 'Compliance Audit Findings', 'value' => '0', 'percentage' => '0%', 'improvement' => '100%']
                                ],
                                'improvements' => [
                                    'Real-time expiration tracking with 30/60/90 day alerts',
                                    'Automated reorder alerts at par levels',
                                    '100% audit compliance across all facilities',
                                    'Reduced clinical staff time on inventory by 88%'
                                ]
                            ],
                            'impact' => [
                                ['icon' => 'dollar', 'value' => '$1.1M', 'label' => 'Waste Reduction'],
                                ['icon' => 'clock', 'value' => '3', 'label' => 'Months Payback'],
                                ['icon' => 'trending', 'value' => '420%', 'label' => 'ROI'],
                                ['icon' => 'chart', 'value' => '88%', 'label' => 'Labor Savings']
                            ],
                            'roiCalculator' => [
                                'savings' => '30-40%',
                                'payback' => '3-5',
                                'roi' => '400%+',
                                'link' => '/roi-calculator?industry=healthcare'
                            ],
                            'details' => [
                                [
                                    'icon' => 'chip',
                                    'title' => 'RFID Technology Implementation',
                                    'content' => 'Deployed passive UHF RFID tags on 50,000+ SKUs across 15 facilities with automated scanning portals at receiving and dispensing points. Real-time inventory visibility with 99.5% accuracy.'
                                ],
                                [
                                    'icon' => 'clock',
                                    'title' => 'Shelf-Life Management',
                                    'content' => 'Automated FIFO (First-In-First-Out) enforcement with expiration date alerts. The system automatically suggests which batches to use first and flags approaching expiration dates.'
                                ]
                            ],
                            'testimonial' => [
                                'quote' => 'We\'ve eliminated expired inventory waste and improved patient care. The system pays for itself many times over. Our audit scores have never been better.',
                                'author' => 'Dr. Emily Rodriguez',
                                'role' => 'Director of Operations',
                                'company' => 'HealthFirst Medical Network'
                            ]
                        ]
                    ],
                    'showCta' => true,
                    'ctaText' => 'Ready to write your own transformation story?',
                    'ctaButtonText' => 'Start Your Journey',
                    'ctaLink' => '/demo'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 216,
                'section_key' => 'beforeAfterScenarios',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // ROI Calculations Section
            [
                'id' => 217,
                'section_key' => 'roiCalculations',
                'variant' => 'variant1',
                'config' => json_encode([
                    'initialIndustry' => 0,
                    'badge' => [
                        'text' => 'ROI Calculator',
                        'backgroundColor' => 'bg-blue-100 dark:bg-blue-900/30',
                        'borderColor' => 'border-blue-200 dark:border-blue-800',
                        'textColor' => 'text-blue-700 dark:text-blue-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Calculate Your',
                        'highlightedText' => 'ROI',
                        'suffix' => 'Potential',
                        'highlightGradient' => 'from-blue-600 to-indigo-600'
                    ],
                    'description' => 'See how much you could save with our intelligent inventory optimization platform. Adjust the sliders to match your business metrics.',
                    'industries' => [
                        [
                            'icon' => 'building',
                            'name' => 'Manufacturing',
                            'inventoryReduction' => 0.35,
                            'laborSavings' => 0.25,
                            'stockoutReduction' => 0.9,
                            'accuracyImprovement' => 0.85,
                            'implementationCost' => 150000,
                            'paybackMonths' => 6
                        ],
                        [
                            'icon' => 'truck',
                            'name' => 'Logistics & 3PL',
                            'inventoryReduction' => 0.25,
                            'laborSavings' => 0.35,
                            'stockoutReduction' => 0.85,
                            'accuracyImprovement' => 0.9,
                            'implementationCost' => 120000,
                            'paybackMonths' => 4
                        ],
                        [
                            'icon' => 'database',
                            'name' => 'Retail & E-commerce',
                            'inventoryReduction' => 0.3,
                            'laborSavings' => 0.2,
                            'stockoutReduction' => 0.95,
                            'accuracyImprovement' => 0.8,
                            'implementationCost' => 130000,
                            'paybackMonths' => 5
                        ],
                        [
                            'icon' => 'shield',
                            'name' => 'Healthcare',
                            'inventoryReduction' => 0.4,
                            'laborSavings' => 0.3,
                            'stockoutReduction' => 0.95,
                            'accuracyImprovement' => 0.9,
                            'implementationCost' => 180000,
                            'paybackMonths' => 3
                        ]
                    ],
                    'showBenchmarks' => true,
                    'benchmarksTitle' => 'Industry Benchmarks',
                    'showSuccessStories' => true,
                    'successStoriesTitle' => 'Real Results from Real Clients',
                    'successStories' => [
                        [
                            'icon' => 'building',
                            'company' => 'Precision Industries',
                            'industry' => 'Manufacturing',
                            'before' => '$8.2M Inventory',
                            'after' => '$5.3M Inventory',
                            'savings' => '$2.9M'
                        ],
                        [
                            'icon' => 'truck',
                            'company' => 'Global Logistics',
                            'industry' => '3PL',
                            'before' => '87% Accuracy',
                            'after' => '99.9% Accuracy',
                            'savings' => '$2.1M'
                        ],
                        [
                            'icon' => 'database',
                            'company' => 'Fashion Forward',
                            'industry' => 'Retail',
                            'before' => '22% Stockouts',
                            'after' => '5% Stockouts',
                            'savings' => '$4.5M'
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
                    'ctaText' => 'Ready to see your actual ROI?',
                    'ctaButtonText' => 'Schedule a Consultation',
                    'ctaLink' => '/demo'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 218,
                'section_key' => 'roiCalculations',
                'variant' => 'variant2',
                'config' => json_encode([
                    'initialScenario' => 'retail',
                    'defaultInvestment' => 150000,
                    'defaultTimeHorizon' => 3,
                    'investmentMin' => 50000,
                    'investmentMax' => 500000,
                    'investmentStep' => 10000,
                    'badge' => [
                        'text' => 'ROI Projection Dashboard',
                        'backgroundColor' => 'bg-blue-100 dark:bg-blue-900/30',
                        'borderColor' => 'border-blue-200 dark:border-blue-800',
                        'textColor' => 'text-blue-700 dark:text-blue-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Project Your',
                        'highlightedText' => 'Investment Returns',
                        'suffix' => 'Over Time',
                        'highlightGradient' => 'from-blue-600 to-indigo-600'
                    ],
                    'description' => 'Interactive dashboard to visualize potential ROI based on your industry, investment, and time horizon.',
                    'scenarios' => [
                        'retail' => [
                            'icon' => 'database',
                            'name' => 'Retail',
                            'savingsRate' => 0.35,
                            'paybackPeriod' => 4,
                            'description' => 'Inventory optimization, stockout reduction, and omnichannel fulfillment'
                        ],
                        'manufacturing' => [
                            'icon' => 'building',
                            'name' => 'Manufacturing',
                            'savingsRate' => 0.30,
                            'paybackPeriod' => 6,
                            'description' => 'Predictive maintenance, demand forecasting, and supply chain visibility'
                        ],
                        'logistics' => [
                            'icon' => 'truck',
                            'name' => 'Logistics',
                            'savingsRate' => 0.32,
                            'paybackPeriod' => 5,
                            'description' => 'Warehouse optimization, labor efficiency, and route planning'
                        ],
                        'healthcare' => [
                            'icon' => 'shield',
                            'name' => 'Healthcare',
                            'savingsRate' => 0.28,
                            'paybackPeriod' => 5,
                            'description' => 'Inventory accuracy, cold chain compliance, and waste reduction'
                        ]
                    ],
                    'showComparison' => true,
                    'comparisonTitle' => 'ROI Comparison by Investment Level',
                    'investmentLevels' => [
                        ['value' => 100000, 'label' => '$100K'],
                        ['value' => 250000, 'label' => '$250K'],
                        ['value' => 500000, 'label' => '$500K'],
                        ['value' => 1000000, 'label' => '$1M']
                    ],
                    'showTestimonial' => true,
                    'testimonial' => [
                        'quote' => 'We achieved full ROI in just 4 months and have saved over $2.5M annually. The platform paid for itself within the first quarter. The ROI dashboard was instrumental in helping us make the investment decision.',
                        'author' => 'Sarah Johnson',
                        'role' => 'Supply Chain Director, RetailCo'
                    ],
                    'showTrustIndicators' => true,
                    'trustText' => 'Trusted by industry leaders worldwide',
                    'trustLogos' => [
                        ['icon' => 'google', 'name' => 'Google'],
                        ['icon' => 'microsoft', 'name' => 'Microsoft'],
                        ['icon' => 'amazon', 'name' => 'Amazon']
                    ],
                    'showCta' => true,
                    'ctaText' => 'Ready to see your personalized ROI projection?',
                    'ctaButtonText' => 'Get Custom Analysis',
                    'ctaLink' => '/demo'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 219,
                'section_key' => 'roiCalculations',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'ROI Calculator',
                        'backgroundColor' => 'bg-blue-100 dark:bg-blue-900/30',
                        'borderColor' => 'border-blue-200 dark:border-blue-800',
                        'textColor' => 'text-blue-700 dark:text-blue-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Calculate Your',
                        'highlightedText' => 'ROI',
                        'suffix' => 'in 3 Simple Steps',
                        'highlightGradient' => 'from-blue-600 to-indigo-600'
                    ],
                    'description' => 'Enter your business metrics to get a personalized ROI estimate based on industry benchmarks.',
                    'disclaimer' => 'This is an estimate based on industry averages. Actual results may vary. Contact us for a personalized assessment.',
                    'industries' => [
                        'retail' => [
                            'icon' => 'database',
                            'name' => 'Retail & E-commerce',
                            'multiplier' => 1.0,
                            'inventoryReduction' => 0.30,
                            'laborSavings' => 0.25,
                            'stockoutReduction' => 0.60,
                            'expeditedReduction' => 0.40,
                            'implementationPercent' => 0.015
                        ],
                        'manufacturing' => [
                            'icon' => 'building',
                            'name' => 'Manufacturing',
                            'multiplier' => 0.95,
                            'inventoryReduction' => 0.28,
                            'laborSavings' => 0.22,
                            'stockoutReduction' => 0.55,
                            'expeditedReduction' => 0.35,
                            'implementationPercent' => 0.014
                        ],
                        'logistics' => [
                            'icon' => 'truck',
                            'name' => 'Logistics & 3PL',
                            'multiplier' => 1.05,
                            'inventoryReduction' => 0.25,
                            'laborSavings' => 0.30,
                            'stockoutReduction' => 0.65,
                            'expeditedReduction' => 0.45,
                            'implementationPercent' => 0.016
                        ],
                        'healthcare' => [
                            'icon' => 'shield',
                            'name' => 'Healthcare & Pharma',
                            'multiplier' => 0.90,
                            'inventoryReduction' => 0.35,
                            'laborSavings' => 0.20,
                            'stockoutReduction' => 0.70,
                            'expeditedReduction' => 0.50,
                            'implementationPercent' => 0.018
                        ],
                        'food' => [
                            'icon' => 'star',
                            'name' => 'Food & Beverage',
                            'multiplier' => 0.92,
                            'inventoryReduction' => 0.32,
                            'laborSavings' => 0.23,
                            'stockoutReduction' => 0.58,
                            'expeditedReduction' => 0.38,
                            'implementationPercent' => 0.015
                        ]
                    ],
                    'showCta' => true,
                    'ctaText' => 'Ready to get started?',
                    'ctaButtonText' => 'Schedule Consultation',
                    'ctaLink' => '/demo'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 220,
                'section_key' => 'roiCalculations',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Industry Specific Examples Section
            [
                'id' => 221,
                'section_key' => 'industrySpecificExamples',
                'variant' => 'variant1',
                'config' => json_encode([
                    'initialIndustry' => 'retail',
                    'badge' => [
                        'text' => 'Industry Solutions',
                        'backgroundColor' => 'bg-blue-100 dark:bg-blue-900/30',
                        'borderColor' => 'border-blue-200 dark:border-blue-800',
                        'textColor' => 'text-blue-700 dark:text-blue-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Tailored Solutions for',
                        'highlightedText' => 'Every Industry',
                        'suffix' => '',
                        'highlightGradient' => 'from-blue-600 to-indigo-600'
                    ],
                    'description' => 'See how we\'ve helped businesses across different sectors overcome unique challenges and achieve remarkable results.',
                    'industries' => [
                        'retail' => [
                            'title' => 'Retail & E-commerce Solutions',
                            'description' => 'Optimize inventory across channels, reduce stockouts, and improve margins with AI-powered demand forecasting and omnichannel fulfillment.',
                            'icon' => 'database',
                            'metrics' => [
                                ['icon' => 'trending', 'value' => '35%', 'label' => 'Inventory Reduction'],
                                ['icon' => 'dollar', 'value' => '$4.5M', 'label' => 'Revenue Recovery'],
                                ['icon' => 'clock', 'value' => '5', 'label' => 'Months Payback'],
                                ['icon' => 'chart', 'value' => '99.5%', 'label' => 'Order Accuracy']
                            ],
                            'challenges' => [
                                'Disconnected inventory across online and physical stores',
                                'High stockout rates (15-25%) leading to lost sales',
                                'Excessive markdowns (18-25%) on seasonal merchandise',
                                'Poor demand forecasting for new products',
                                'Slow replenishment cycles (7-14 days)'
                            ],
                            'solutions' => [
                                'Unified commerce platform with real-time inventory visibility',
                                'AI-powered demand forecasting with 94% accuracy',
                                'Automated replenishment with 3-day cycles',
                                'Buy-online-return-in-store capabilities',
                                'Endless aisle and ship-from-store optimization'
                            ],
                            'stories' => [
                                [
                                    'icon' => 'database',
                                    'company' => 'Fashion Forward Retail',
                                    'location' => 'New York, NY',
                                    'before' => '$3.2M lost sales, 22% stockout rate',
                                    'after' => '$4.5M recovered, 5% stockout rate',
                                    'results' => ['35% cost reduction', '50% markdown reduction', '99.9% accuracy'],
                                    'link' => '/case-studies/fashion-forward'
                                ],
                                [
                                    'icon' => 'database',
                                    'company' => 'HomeGoods Distributors',
                                    'location' => 'Chicago, IL',
                                    'before' => '18% markdown rate, 2.8x turnover',
                                    'after' => '9% markdown rate, 4.6x turnover',
                                    'results' => ['$2.8M savings', '64% turnover increase', '6mo payback'],
                                    'link' => '/case-studies/homegoods'
                                ]
                            ],
                            'roiHighlight' => [
                                'value' => '245% Average ROI',
                                'description' => 'Based on 50+ retail implementations'
                            ],
                            'cta' => [
                                'text' => 'Explore Retail Solutions',
                                'link' => '/industries/retail'
                            ]
                        ],
                        'manufacturing' => [
                            'title' => 'Manufacturing Solutions',
                            'description' => 'Streamline production, reduce inventory costs, and improve on-time delivery with real-time supply chain visibility.',
                            'icon' => 'building',
                            'metrics' => [
                                ['icon' => 'trending', 'value' => '35%', 'label' => 'Cost Reduction'],
                                ['icon' => 'dollar', 'value' => '$2.9M', 'label' => 'Annual Savings'],
                                ['icon' => 'clock', 'value' => '6', 'label' => 'Months Payback'],
                                ['icon' => 'chart', 'value' => '99.2%', 'label' => 'On-Time Delivery']
                            ],
                            'challenges' => [
                                'Legacy ERP systems with limited visibility',
                                'Excess inventory carrying costs ($8M+)',
                                'Poor forecast accuracy (60-70%)',
                                'Production delays from component shortages',
                                'Manual data entry across disconnected systems'
                            ],
                            'solutions' => [
                                'AI-powered demand forecasting and planning',
                                'Real-time inventory visibility across all locations',
                                'Automated replenishment with 95% accuracy',
                                'Supplier collaboration portal',
                                'Production scheduling optimization'
                            ],
                            'stories' => [
                                [
                                    'icon' => 'building',
                                    'company' => 'Precision Industries',
                                    'location' => 'Detroit, MI',
                                    'before' => '$8.2M inventory, 68% forecast accuracy',
                                    'after' => '$5.3M inventory, 94% forecast accuracy',
                                    'results' => ['35% cost reduction', '287% ROI', '6mo payback'],
                                    'link' => '/case-studies/precision-industries'
                                ],
                                [
                                    'icon' => 'building',
                                    'company' => 'AeroTech Components',
                                    'location' => 'Seattle, WA',
                                    'before' => '82% on-time delivery, $2.5M expedite costs',
                                    'after' => '99.2% on-time delivery, 90% expedite reduction',
                                    'results' => ['$2.2M savings', '17% delivery improvement', '4mo payback'],
                                    'link' => '/case-studies/aerotech'
                                ]
                            ],
                            'roiHighlight' => [
                                'value' => '287% Average ROI',
                                'description' => 'Based on 100+ manufacturing implementations'
                            ],
                            'cta' => [
                                'text' => 'Explore Manufacturing Solutions',
                                'link' => '/industries/manufacturing'
                            ]
                        ],
                        'logistics' => [
                            'title' => 'Logistics & 3PL Solutions',
                            'description' => 'Optimize warehouse operations, automate billing, and improve client satisfaction with real-time visibility.',
                            'icon' => 'truck',
                            'metrics' => [
                                ['icon' => 'trending', 'value' => '96%', 'label' => 'Time Reduction'],
                                ['icon' => 'dollar', 'value' => '$2.1M', 'label' => 'Revenue Recovered'],
                                ['icon' => 'clock', 'value' => '4', 'label' => 'Months Payback'],
                                ['icon' => 'chart', 'value' => '99.9%', 'label' => 'Billing Accuracy']
                            ],
                            'challenges' => [
                                'Manual billing processes with 15% rework rate',
                                'Revenue leakage from un-billed services',
                                'Slow invoice processing (5+ days)',
                                'High dispute rate leading to delayed payments',
                                'Limited audit trail for charges'
                            ],
                            'solutions' => [
                                'Automated billing engine with real-time validation',
                                'Client-specific business rules and rate cards',
                                'Automated dispute resolution workflow',
                                'Real-time revenue analytics dashboard',
                                'EDI and API integrations with client systems'
                            ],
                            'stories' => [
                                [
                                    'icon' => 'truck',
                                    'company' => 'Global Logistics Solutions',
                                    'location' => 'Chicago, IL',
                                    'before' => '87% billing accuracy, $1.8M leakage',
                                    'after' => '99.9% billing accuracy, $2.1M recovered',
                                    'results' => ['312% ROI', '96% time reduction', '4mo payback'],
                                    'link' => '/case-studies/global-logistics'
                                ],
                                [
                                    'icon' => 'truck',
                                    'company' => 'Pacific Freight Services',
                                    'location' => 'Los Angeles, CA',
                                    'before' => '5-day invoice processing, 15% disputes',
                                    'after' => '4-hour processing, 2% disputes',
                                    'results' => ['$1.5M recovered', '87% dispute reduction', '3mo payback'],
                                    'link' => '/case-studies/pacific-freight'
                                ]
                            ],
                            'roiHighlight' => [
                                'value' => '312% Average ROI',
                                'description' => 'Based on 75+ 3PL implementations'
                            ],
                            'cta' => [
                                'text' => 'Explore Logistics Solutions',
                                'link' => '/industries/logistics'
                            ]
                        ],
                        'healthcare' => [
                            'title' => 'Healthcare & Pharmaceutical Solutions',
                            'description' => 'Reduce waste, improve patient care, and ensure compliance with real-time inventory tracking and expiration management.',
                            'icon' => 'shield',
                            'metrics' => [
                                ['icon' => 'trending', 'value' => '90%', 'label' => 'Waste Reduction'],
                                ['icon' => 'dollar', 'value' => '$1.1M', 'label' => 'Annual Savings'],
                                ['icon' => 'clock', 'value' => '3', 'label' => 'Months Payback'],
                                ['icon' => 'chart', 'value' => '100%', 'label' => 'Compliance Rate']
                            ],
                            'challenges' => [
                                'Expiring inventory causing $1M+ annual waste',
                                'Stockouts of critical medications (18% rate)',
                                'Manual expiration date tracking (120+ hours/week)',
                                'Compliance audit challenges',
                                'Limited visibility across multiple facilities'
                            ],
                            'solutions' => [
                                'RFID-based inventory tracking with expiration alerts',
                                'Automated reordering at par levels',
                                'Real-time visibility across all facilities',
                                'FIFO enforcement with expiration date management',
                                'Compliance reporting and audit trails'
                            ],
                            'stories' => [
                                [
                                    'icon' => 'shield',
                                    'company' => 'HealthFirst Medical Network',
                                    'location' => 'Boston, MA',
                                    'before' => '$1.2M expired inventory, 120 manual hours/week',
                                    'after' => '$120K expired inventory, 15 manual hours/week',
                                    'results' => ['90% waste reduction', '420% ROI', '3mo payback'],
                                    'link' => '/case-studies/healthfirst'
                                ],
                                [
                                    'icon' => 'shield',
                                    'company' => 'CarePoint Hospitals',
                                    'location' => 'Dallas, TX',
                                    'before' => '18% stockout rate, 12 audit findings',
                                    'after' => '3% stockout rate, 0 audit findings',
                                    'results' => ['$850K savings', '83% stockout reduction', '100% compliance'],
                                    'link' => '/case-studies/carepoint'
                                ]
                            ],
                            'roiHighlight' => [
                                'value' => '420% Average ROI',
                                'description' => 'Based on 40+ healthcare implementations'
                            ],
                            'cta' => [
                                'text' => 'Explore Healthcare Solutions',
                                'link' => '/industries/healthcare'
                            ]
                        ],
                        'food' => [
                            'title' => 'Food & Beverage Solutions',
                            'description' => 'Optimize shelf-life management, reduce spoilage, and ensure food safety compliance with real-time tracking.',
                            'icon' => 'star',
                            'metrics' => [
                                ['icon' => 'trending', 'value' => '45%', 'label' => 'Spoilage Reduction'],
                                ['icon' => 'dollar', 'value' => '$1.5M', 'label' => 'Annual Savings'],
                                ['icon' => 'clock', 'value' => '4', 'label' => 'Months Payback'],
                                ['icon' => 'chart', 'value' => '100%', 'label' => 'FSMA Compliance']
                            ],
                            'challenges' => [
                                'Product spoilage from poor expiration tracking',
                                'Temperature excursions during transport',
                                'Complex recall management',
                                'Limited lot traceability',
                                'Manual compliance documentation'
                            ],
                            'solutions' => [
                                'Real-time expiration date management',
                                'Cold chain monitoring with alerts',
                                'Lot-level traceability from farm to fork',
                                'Automated recall management',
                                'FSMA and HACCP compliance reporting'
                            ],
                            'stories' => [
                                [
                                    'icon' => 'star',
                                    'company' => 'FreshFood Distributors',
                                    'location' => 'Atlanta, GA',
                                    'before' => '$2.1M annual spoilage, 25% waste rate',
                                    'after' => '$600K spoilage, 8% waste rate',
                                    'results' => ['$1.5M savings', '71% waste reduction', '4mo payback'],
                                    'link' => '/case-studies/freshfood'
                                ],
                                [
                                    'icon' => 'star',
                                    'company' => 'BeverageCo International',
                                    'location' => 'Denver, CO',
                                    'before' => '3-day recall response, 45% traceability',
                                    'after' => '2-hour recall response, 100% traceability',
                                    'results' => ['$2.1M risk reduction', '100% compliance', '6mo payback'],
                                    'link' => '/case-studies/beverageco'
                                ]
                            ],
                            'roiHighlight' => [
                                'value' => '350% Average ROI',
                                'description' => 'Based on 30+ food & beverage implementations'
                            ],
                            'cta' => [
                                'text' => 'Explore Food & Beverage Solutions',
                                'link' => '/industries/food'
                            ]
                        ],
                        'electronics' => [
                            'title' => 'Electronics Solutions',
                            'description' => 'Manage component obsolescence, improve traceability, and reduce inventory costs with intelligent supply chain management.',
                            'icon' => 'chip',
                            'metrics' => [
                                ['icon' => 'trending', 'value' => '50%', 'label' => 'Obsolescence Reduction'],
                                ['icon' => 'dollar', 'value' => '$2.5M', 'label' => 'Annual Savings'],
                                ['icon' => 'clock', 'value' => '6', 'label' => 'Months Payback'],
                                ['icon' => 'chart', 'value' => '99.5%', 'label' => 'Component Traceability']
                            ],
                            'challenges' => [
                                'Component obsolescence causing redesign costs',
                                'Counterfeit component risks',
                                'Long lead times for critical parts',
                                'Limited visibility into component lifecycle',
                                'High expediting costs for end-of-life purchases'
                            ],
                            'solutions' => [
                                'Obsolescence monitoring and prediction',
                                'Last-time buy optimization',
                                'Counterfeit detection and prevention',
                                'Supplier collaboration portal',
                                'Lifecycle management dashboard'
                            ],
                            'stories' => [
                                [
                                    'icon' => 'chip',
                                    'company' => 'ElectroTech Manufacturing',
                                    'location' => 'Austin, TX',
                                    'before' => '$3.2M obsolescence costs, 40% redesign rate',
                                    'after' => '$1.2M obsolescence costs, 15% redesign rate',
                                    'results' => ['$2M savings', '63% obsolescence reduction', '6mo payback'],
                                    'link' => '/case-studies/electrotech'
                                ],
                                [
                                    'icon' => 'chip',
                                    'company' => 'Semiconductor Solutions',
                                    'location' => 'San Jose, CA',
                                    'before' => '12-week lead times, $1.5M expedite costs',
                                    'after' => '4-week lead times, $500K expedite costs',
                                    'results' => ['$1M savings', '67% lead time reduction', '5mo payback'],
                                    'link' => '/case-studies/semiconductor'
                                ]
                            ],
                            'roiHighlight' => [
                                'value' => '280% Average ROI',
                                'description' => 'Based on 25+ electronics implementations'
                            ],
                            'cta' => [
                                'text' => 'Explore Electronics Solutions',
                                'link' => '/industries/electronics'
                            ]
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
                    'ctaText' => 'Ready to see how we can help your industry?',
                    'ctaButtonText' => 'Schedule a Consultation',
                    'ctaLink' => '/demo'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 222,
                'section_key' => 'industrySpecificExamples',
                'variant' => 'variant2',
                'config' => json_encode([
                    'initialIndustry' => 'retail',
                    'autoplay' => true,
                    'autoplayInterval' => 6000,
                    'badge' => [
                        'text' => 'Industry Success Stories',
                        'backgroundColor' => 'bg-blue-100 dark:bg-blue-900/30',
                        'borderColor' => 'border-blue-200 dark:border-blue-800',
                        'textColor' => 'text-blue-700 dark:text-blue-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Success Stories Across',
                        'highlightedText' => 'Every Industry',
                        'suffix' => '',
                        'highlightGradient' => 'from-blue-600 to-indigo-600'
                    ],
                    'description' => 'Explore how we\'ve helped businesses across different sectors overcome challenges and achieve remarkable results.',
                    'industries' => [
                        'retail' => [
                            'icon' => 'database',
                            'title' => 'Retail & E-commerce Solutions',
                            'description' => 'Optimize inventory across channels, reduce stockouts, and improve margins with AI-powered demand forecasting and omnichannel fulfillment.',
                            'gradient' => 'from-blue-600 to-indigo-600',
                            'metrics' => [
                                ['icon' => 'trending', 'value' => '35%', 'label' => 'Inventory Reduction', 'description' => 'Average reduction in carrying costs'],
                                ['icon' => 'dollar', 'value' => '$4.5M', 'label' => 'Revenue Recovery', 'description' => 'Average recovered revenue per client'],
                                ['icon' => 'clock', 'value' => '5', 'label' => 'Months Payback', 'description' => 'Average time to positive ROI'],
                                ['icon' => 'chart', 'value' => '99.5%', 'label' => 'Order Accuracy', 'description' => 'Post-implementation accuracy rate']
                            ],
                            'challenges' => [
                                'Disconnected inventory across online and physical stores',
                                'High stockout rates (15-25%) leading to lost sales',
                                'Excessive markdowns (18-25%) on seasonal merchandise',
                                'Poor demand forecasting for new products',
                                'Slow replenishment cycles (7-14 days)'
                            ],
                            'solutions' => [
                                'Unified commerce platform with real-time inventory visibility',
                                'AI-powered demand forecasting with 94% accuracy',
                                'Automated replenishment with 3-day cycles',
                                'Buy-online-return-in-store capabilities',
                                'Endless aisle and ship-from-store optimization'
                            ],
                            'stories' => [
                                [
                                    'icon' => 'database',
                                    'company' => 'Fashion Forward Retail',
                                    'location' => 'New York, NY',
                                    'before' => '$3.2M lost sales, 22% stockout rate',
                                    'after' => '$4.5M recovered, 5% stockout rate',
                                    'results' => ['35% cost reduction', '50% markdown reduction', '99.9% accuracy'],
                                    'resultHighlight' => '$4.5M',
                                    'resultLabel' => 'Annual Revenue Recovery',
                                    'testimonial' => 'The platform transformed our inventory management. We\'ve seen unprecedented improvements in both efficiency and customer satisfaction.',
                                    'author' => 'Jessica Williams, VP of Merchandising',
                                    'link' => '/case-studies/fashion-forward'
                                ],
                                [
                                    'icon' => 'database',
                                    'company' => 'HomeGoods Distributors',
                                    'location' => 'Chicago, IL',
                                    'before' => '18% markdown rate, 2.8x turnover',
                                    'after' => '9% markdown rate, 4.6x turnover',
                                    'results' => ['$2.8M savings', '64% turnover increase', '6mo payback'],
                                    'resultHighlight' => '64%',
                                    'resultLabel' => 'Inventory Turnover Increase',
                                    'testimonial' => 'The AI forecasting has been a game-changer. We\'re now buying the right products for the right stores at the right time.',
                                    'author' => 'Michael Chen, Supply Chain Director',
                                    'link' => '/case-studies/homegoods'
                                ]
                            ],
                            'roiHighlight' => [
                                'value' => '245% Average ROI',
                                'description' => 'Based on 50+ retail implementations'
                            ],
                            'cta' => [
                                'text' => 'Explore Retail Solutions',
                                'link' => '/industries/retail'
                            ]
                        ],
                        'manufacturing' => [
                            'icon' => 'building',
                            'title' => 'Manufacturing Solutions',
                            'description' => 'Streamline production, reduce inventory costs, and improve on-time delivery with real-time supply chain visibility.',
                            'gradient' => 'from-purple-600 to-pink-600',
                            'metrics' => [
                                ['icon' => 'trending', 'value' => '35%', 'label' => 'Cost Reduction', 'description' => 'Average reduction in inventory costs'],
                                ['icon' => 'dollar', 'value' => '$2.9M', 'label' => 'Annual Savings', 'description' => 'Average savings per client'],
                                ['icon' => 'clock', 'value' => '6', 'label' => 'Months Payback', 'description' => 'Average time to positive ROI'],
                                ['icon' => 'chart', 'value' => '99.2%', 'label' => 'On-Time Delivery', 'description' => 'Post-implementation delivery rate']
                            ],
                            'challenges' => [
                                'Legacy ERP systems with limited visibility',
                                'Excess inventory carrying costs ($8M+)',
                                'Poor forecast accuracy (60-70%)',
                                'Production delays from component shortages',
                                'Manual data entry across disconnected systems'
                            ],
                            'solutions' => [
                                'AI-powered demand forecasting and planning',
                                'Real-time inventory visibility across all locations',
                                'Automated replenishment with 95% accuracy',
                                'Supplier collaboration portal',
                                'Production scheduling optimization'
                            ],
                            'stories' => [
                                [
                                    'icon' => 'building',
                                    'company' => 'Precision Industries',
                                    'location' => 'Detroit, MI',
                                    'before' => '$8.2M inventory, 68% forecast accuracy',
                                    'after' => '$5.3M inventory, 94% forecast accuracy',
                                    'results' => ['35% cost reduction', '287% ROI', '6mo payback'],
                                    'resultHighlight' => '287%',
                                    'resultLabel' => 'ROI Achieved',
                                    'testimonial' => 'The transformation has been remarkable. We\'ve eliminated our inventory visibility issues and achieved results we didn\'t think were possible.',
                                    'author' => 'Sarah Johnson, VP of Operations',
                                    'link' => '/case-studies/precision-industries'
                                ]
                            ],
                            'roiHighlight' => [
                                'value' => '287% Average ROI',
                                'description' => 'Based on 100+ manufacturing implementations'
                            ],
                            'cta' => [
                                'text' => 'Explore Manufacturing Solutions',
                                'link' => '/industries/manufacturing'
                            ]
                        ],
                        'logistics' => [
                            'icon' => 'truck',
                            'title' => 'Logistics & 3PL Solutions',
                            'description' => 'Optimize warehouse operations, automate billing, and improve client satisfaction with real-time visibility.',
                            'gradient' => 'from-cyan-600 to-blue-600',
                            'metrics' => [
                                ['icon' => 'trending', 'value' => '96%', 'label' => 'Time Reduction', 'description' => 'Reduction in invoice processing time'],
                                ['icon' => 'dollar', 'value' => '$2.1M', 'label' => 'Revenue Recovered', 'description' => 'Average recovered revenue per client'],
                                ['icon' => 'clock', 'value' => '4', 'label' => 'Months Payback', 'description' => 'Average time to positive ROI'],
                                ['icon' => 'chart', 'value' => '99.9%', 'label' => 'Billing Accuracy', 'description' => 'Post-implementation accuracy rate']
                            ],
                            'challenges' => [
                                'Manual billing processes with 15% rework rate',
                                'Revenue leakage from un-billed services',
                                'Slow invoice processing (5+ days)',
                                'High dispute rate leading to delayed payments',
                                'Limited audit trail for charges'
                            ],
                            'solutions' => [
                                'Automated billing engine with real-time validation',
                                'Client-specific business rules and rate cards',
                                'Automated dispute resolution workflow',
                                'Real-time revenue analytics dashboard',
                                'EDI and API integrations with client systems'
                            ],
                            'stories' => [
                                [
                                    'icon' => 'truck',
                                    'company' => 'Global Logistics Solutions',
                                    'location' => 'Chicago, IL',
                                    'before' => '87% billing accuracy, $1.8M leakage',
                                    'after' => '99.9% billing accuracy, $2.1M recovered',
                                    'results' => ['312% ROI', '96% time reduction', '4mo payback'],
                                    'resultHighlight' => '312%',
                                    'resultLabel' => 'ROI Achieved',
                                    'testimonial' => 'The billing automation alone paid for the entire platform within 4 months. We\'ve never had such accurate and efficient billing.',
                                    'author' => 'Michael Chen, CFO',
                                    'link' => '/case-studies/global-logistics'
                                ]
                            ],
                            'roiHighlight' => [
                                'value' => '312% Average ROI',
                                'description' => 'Based on 75+ 3PL implementations'
                            ],
                            'cta' => [
                                'text' => 'Explore Logistics Solutions',
                                'link' => '/industries/logistics'
                            ]
                        ],
                        'healthcare' => [
                            'icon' => 'shield',
                            'title' => 'Healthcare & Pharmaceutical Solutions',
                            'description' => 'Reduce waste, improve patient care, and ensure compliance with real-time inventory tracking and expiration management.',
                            'gradient' => 'from-teal-600 to-emerald-600',
                            'metrics' => [
                                ['icon' => 'trending', 'value' => '90%', 'label' => 'Waste Reduction', 'description' => 'Reduction in expired inventory'],
                                ['icon' => 'dollar', 'value' => '$1.1M', 'label' => 'Annual Savings', 'description' => 'Average savings per client'],
                                ['icon' => 'clock', 'value' => '3', 'label' => 'Months Payback', 'description' => 'Average time to positive ROI'],
                                ['icon' => 'chart', 'value' => '100%', 'label' => 'Compliance Rate', 'description' => 'Audit compliance rate']
                            ],
                            'challenges' => [
                                'Expiring inventory causing $1M+ annual waste',
                                'Stockouts of critical medications (18% rate)',
                                'Manual expiration date tracking (120+ hours/week)',
                                'Compliance audit challenges',
                                'Limited visibility across multiple facilities'
                            ],
                            'solutions' => [
                                'RFID-based inventory tracking with expiration alerts',
                                'Automated reordering at par levels',
                                'Real-time visibility across all facilities',
                                'FIFO enforcement with expiration date management',
                                'Compliance reporting and audit trails'
                            ],
                            'stories' => [
                                [
                                    'icon' => 'shield',
                                    'company' => 'HealthFirst Medical Network',
                                    'location' => 'Boston, MA',
                                    'before' => '$1.2M expired inventory, 120 manual hours/week',
                                    'after' => '$120K expired inventory, 15 manual hours/week',
                                    'results' => ['90% waste reduction', '420% ROI', '3mo payback'],
                                    'resultHighlight' => '420%',
                                    'resultLabel' => 'ROI Achieved',
                                    'testimonial' => 'We\'ve eliminated expired inventory waste and improved patient care. The system pays for itself many times over.',
                                    'author' => 'Dr. Emily Rodriguez, Director of Operations',
                                    'link' => '/case-studies/healthfirst'
                                ]
                            ],
                            'roiHighlight' => [
                                'value' => '420% Average ROI',
                                'description' => 'Based on 40+ healthcare implementations'
                            ],
                            'cta' => [
                                'text' => 'Explore Healthcare Solutions',
                                'link' => '/industries/healthcare'
                            ]
                        ],
                        'food' => [
                            'icon' => 'star',
                            'title' => 'Food & Beverage Solutions',
                            'description' => 'Optimize shelf-life management, reduce spoilage, and ensure food safety compliance with real-time tracking.',
                            'gradient' => 'from-orange-600 to-red-600',
                            'metrics' => [
                                ['icon' => 'trending', 'value' => '45%', 'label' => 'Spoilage Reduction', 'description' => 'Reduction in product waste'],
                                ['icon' => 'dollar', 'value' => '$1.5M', 'label' => 'Annual Savings', 'description' => 'Average savings per client'],
                                ['icon' => 'clock', 'value' => '4', 'label' => 'Months Payback', 'description' => 'Average time to positive ROI'],
                                ['icon' => 'chart', 'value' => '100%', 'label' => 'FSMA Compliance', 'description' => 'Regulatory compliance rate']
                            ],
                            'challenges' => [
                                'Product spoilage from poor expiration tracking',
                                'Temperature excursions during transport',
                                'Complex recall management',
                                'Limited lot traceability',
                                'Manual compliance documentation'
                            ],
                            'solutions' => [
                                'Real-time expiration date management',
                                'Cold chain monitoring with alerts',
                                'Lot-level traceability from farm to fork',
                                'Automated recall management',
                                'FSMA and HACCP compliance reporting'
                            ],
                            'stories' => [
                                [
                                    'icon' => 'star',
                                    'company' => 'FreshFood Distributors',
                                    'location' => 'Atlanta, GA',
                                    'before' => '$2.1M annual spoilage, 25% waste rate',
                                    'after' => '$600K spoilage, 8% waste rate',
                                    'results' => ['$1.5M savings', '71% waste reduction', '4mo payback'],
                                    'resultHighlight' => '71%',
                                    'resultLabel' => 'Waste Reduction',
                                    'testimonial' => 'The expiration tracking has transformed our operations. We\'ve dramatically reduced waste and improved our bottom line.',
                                    'author' => 'David Martinez, Operations Director',
                                    'link' => '/case-studies/freshfood'
                                ]
                            ],
                            'roiHighlight' => [
                                'value' => '350% Average ROI',
                                'description' => 'Based on 30+ food & beverage implementations'
                            ],
                            'cta' => [
                                'text' => 'Explore Food & Beverage Solutions',
                                'link' => '/industries/food'
                            ]
                        ],
                        'electronics' => [
                            'icon' => 'chip',
                            'title' => 'Electronics Solutions',
                            'description' => 'Manage component obsolescence, improve traceability, and reduce inventory costs with intelligent supply chain management.',
                            'gradient' => 'from-indigo-600 to-purple-600',
                            'metrics' => [
                                ['icon' => 'trending', 'value' => '50%', 'label' => 'Obsolescence Reduction', 'description' => 'Reduction in component obsolescence costs'],
                                ['icon' => 'dollar', 'value' => '$2.5M', 'label' => 'Annual Savings', 'description' => 'Average savings per client'],
                                ['icon' => 'clock', 'value' => '6', 'label' => 'Months Payback', 'description' => 'Average time to positive ROI'],
                                ['icon' => 'chart', 'value' => '99.5%', 'label' => 'Traceability', 'description' => 'Component traceability rate']
                            ],
                            'challenges' => [
                                'Component obsolescence causing redesign costs',
                                'Counterfeit component risks',
                                'Long lead times for critical parts',
                                'Limited visibility into component lifecycle',
                                'High expediting costs for end-of-life purchases'
                            ],
                            'solutions' => [
                                'Obsolescence monitoring and prediction',
                                'Last-time buy optimization',
                                'Counterfeit detection and prevention',
                                'Supplier collaboration portal',
                                'Lifecycle management dashboard'
                            ],
                            'stories' => [
                                [
                                    'icon' => 'chip',
                                    'company' => 'ElectroTech Manufacturing',
                                    'location' => 'Austin, TX',
                                    'before' => '$3.2M obsolescence costs, 40% redesign rate',
                                    'after' => '$1.2M obsolescence costs, 15% redesign rate',
                                    'results' => ['$2M savings', '63% obsolescence reduction', '6mo payback'],
                                    'resultHighlight' => '63%',
                                    'resultLabel' => 'Obsolescence Reduction',
                                    'testimonial' => 'The obsolescence alerts have saved us millions. We\'re now proactively managing component lifecycles instead of reacting to crises.',
                                    'author' => 'Lisa Wong, Supply Chain Manager',
                                    'link' => '/case-studies/electrotech'
                                ]
                            ],
                            'roiHighlight' => [
                                'value' => '280% Average ROI',
                                'description' => 'Based on 25+ electronics implementations'
                            ],
                            'cta' => [
                                'text' => 'Explore Electronics Solutions',
                                'link' => '/industries/electronics'
                            ]
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
                    'ctaText' => 'Ready to see your industry\'s success story?',
                    'ctaButtonText' => 'Schedule a Consultation',
                    'ctaLink' => '/demo'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 223,
                'section_key' => 'industrySpecificExamples',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Use Case Library',
                        'backgroundColor' => 'bg-blue-100 dark:bg-blue-900/30',
                        'borderColor' => 'border-blue-200 dark:border-blue-800',
                        'textColor' => 'text-blue-700 dark:text-blue-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Industry',
                        'highlightedText' => 'Use Cases',
                        'suffix' => 'Library',
                        'highlightGradient' => 'from-blue-600 to-indigo-600'
                    ],
                    'description' => 'Browse real-world examples of how we\'ve helped businesses solve challenges and achieve measurable results across industries.',
                    'industries' => [
                        [
                            'id' => 'retail',
                            'icon' => 'database',
                            'name' => 'Retail',
                            'keyChallenge' => 'Inventory visibility across channels',
                            'typicalSavings' => '$2.5M - $5M',
                            'paybackPeriod' => '4-6 months',
                            'avgROI' => '245%'
                        ],
                        [
                            'id' => 'manufacturing',
                            'icon' => 'building',
                            'name' => 'Manufacturing',
                            'keyChallenge' => 'Supply chain disruption',
                            'typicalSavings' => '$1.5M - $4M',
                            'paybackPeriod' => '5-7 months',
                            'avgROI' => '287%'
                        ],
                        [
                            'id' => 'logistics',
                            'icon' => 'truck',
                            'name' => 'Logistics',
                            'keyChallenge' => 'Billing accuracy & revenue leakage',
                            'typicalSavings' => '$1M - $3M',
                            'paybackPeriod' => '3-5 months',
                            'avgROI' => '312%'
                        ],
                        [
                            'id' => 'healthcare',
                            'icon' => 'shield',
                            'name' => 'Healthcare',
                            'keyChallenge' => 'Expiring inventory & compliance',
                            'typicalSavings' => '$800K - $2M',
                            'paybackPeriod' => '3-4 months',
                            'avgROI' => '420%'
                        ],
                        [
                            'id' => 'food',
                            'icon' => 'star',
                            'name' => 'Food & Bev',
                            'keyChallenge' => 'Spoilage & shelf-life management',
                            'typicalSavings' => '$1M - $3M',
                            'paybackPeriod' => '4-6 months',
                            'avgROI' => '350%'
                        ],
                        [
                            'id' => 'electronics',
                            'icon' => 'chip',
                            'name' => 'Electronics',
                            'keyChallenge' => 'Component obsolescence',
                            'typicalSavings' => '$1.5M - $4M',
                            'paybackPeriod' => '5-7 months',
                            'avgROI' => '280%'
                        ]
                    ],
                    'useCases' => [
                        [
                            'id' => 1,
                            'icon' => 'database',
                            'industry' => 'retail',
                            'industryName' => 'Retail',
                            'company' => 'Fashion Forward Retail',
                            'title' => 'Omnichannel Inventory Optimization',
                            'description' => 'Leading fashion retailer struggled with disconnected inventory across 50+ stores and e-commerce, causing $3.2M in lost sales annually.',
                            'bgColor' => 'bg-linear-to-r from-blue-600 to-indigo-600',
                            'challenge' => 'Poor inventory visibility across online and physical stores led to 22% stockout rates and 18% markdown rates. Manual processes caused slow 14-day replenishment cycles.',
                            'solution' => 'Implemented unified commerce platform with AI-powered demand forecasting, real-time inventory visibility, and automated replenishment across all channels.',
                            'results' => [
                                ['label' => 'Stockout Reduction', 'value' => '77%'],
                                ['label' => 'Markdown Reduction', 'value' => '50%'],
                                ['label' => 'Annual Savings', 'value' => '$4.5M'],
                                ['label' => 'Inventory Turnover', 'value' => '+64%']
                            ],
                            'tags' => ['Omnichannel', 'Inventory Optimization', 'AI Forecasting'],
                            'testimonial' => [
                                'quote' => 'We finally have a single view of inventory across all channels. The AI forecasting has been a game-changer for our buying team.',
                                'author' => 'Jessica Williams',
                                'role' => 'VP of Merchandising'
                            ],
                            'caseStudyLink' => '/case-studies/fashion-forward',
                            'link' => '/case-studies/fashion-forward'
                        ],
                        [
                            'id' => 2,
                            'icon' => 'building',
                            'industry' => 'manufacturing',
                            'industryName' => 'Manufacturing',
                            'company' => 'Precision Industries',
                            'title' => 'AI-Powered Inventory Management',
                            'description' => 'Aerospace manufacturer reduced inventory costs by 35% and improved forecast accuracy from 68% to 94% with AI-driven supply chain optimization.',
                            'bgColor' => 'bg-linear-to-r from-purple-600 to-pink-600',
                            'challenge' => 'Legacy systems caused inventory visibility gaps across 12 warehouses, leading to $2.5M in excess stock and frequent production delays.',
                            'solution' => 'Deployed AI-powered inventory optimization platform with real-time sync across all ERP systems and warehouses.',
                            'results' => [
                                ['label' => 'Cost Reduction', 'value' => '35%'],
                                ['label' => 'Forecast Accuracy', 'value' => '94%'],
                                ['label' => 'Annual Savings', 'value' => '$2.9M'],
                                ['label' => 'ROI', 'value' => '287%']
                            ],
                            'tags' => ['AI Forecasting', 'Supply Chain', 'ERP Integration'],
                            'testimonial' => [
                                'quote' => 'The transformation has been remarkable. We\'ve eliminated our inventory visibility issues and achieved results we didn\'t think were possible.',
                                'author' => 'Sarah Johnson',
                                'role' => 'VP of Operations'
                            ],
                            'caseStudyLink' => '/case-studies/precision-industries',
                            'link' => '/case-studies/precision-industries'
                        ],
                        [
                            'id' => 3,
                            'icon' => 'truck',
                            'industry' => 'logistics',
                            'industryName' => 'Logistics',
                            'company' => 'Global Logistics Solutions',
                            'title' => 'Automated Billing & Revenue Recovery',
                            'description' => '3PL provider recovered $2.1M in revenue and achieved 99.9% billing accuracy with automated billing engine.',
                            'bgColor' => 'bg-linear-to-r from-cyan-600 to-blue-600',
                            'challenge' => 'Manual billing processes caused 15% invoice rework rate and $1.8M annual revenue leakage from un-billed services.',
                            'solution' => 'Deployed automated billing engine with real-time rate validation, client-specific business rules, and automated dispute resolution.',
                            'results' => [
                                ['label' => 'Billing Accuracy', 'value' => '99.9%'],
                                ['label' => 'Time Reduction', 'value' => '96%'],
                                ['label' => 'Revenue Recovered', 'value' => '$2.1M'],
                                ['label' => 'ROI', 'value' => '312%']
                            ],
                            'tags' => ['Billing Automation', 'Revenue Recovery', 'EDI Integration'],
                            'testimonial' => [
                                'quote' => 'The billing automation alone paid for the entire platform within 4 months. We\'ve never had such accurate and efficient billing.',
                                'author' => 'Michael Chen',
                                'role' => 'CFO'
                            ],
                            'caseStudyLink' => '/case-studies/global-logistics',
                            'link' => '/case-studies/global-logistics'
                        ],
                        [
                            'id' => 4,
                            'icon' => 'shield',
                            'industry' => 'healthcare',
                            'industryName' => 'Healthcare',
                            'company' => 'HealthFirst Medical Network',
                            'title' => 'RFID-Based Inventory Tracking',
                            'description' => 'Healthcare network reduced expired inventory waste by 90% and achieved 100% audit compliance with RFID tracking.',
                            'bgColor' => 'bg-linear-to-r from-teal-600 to-emerald-600',
                            'challenge' => 'Expiring medical supplies caused $1.2M in annual waste across 15 facilities with 120+ manual hours weekly checking expiration dates.',
                            'solution' => 'Deployed RFID-based inventory tracking with expiration date alerts, automated reordering, and real-time visibility.',
                            'results' => [
                                ['label' => 'Waste Reduction', 'value' => '90%'],
                                ['label' => 'Labor Savings', 'value' => '88%'],
                                ['label' => 'Annual Savings', 'value' => '$1.1M'],
                                ['label' => 'ROI', 'value' => '420%']
                            ],
                            'tags' => ['RFID', 'Expiration Management', 'Compliance'],
                            'testimonial' => [
                                'quote' => 'We\'ve eliminated expired inventory waste and improved patient care. The system pays for itself many times over.',
                                'author' => 'Dr. Emily Rodriguez',
                                'role' => 'Director of Operations'
                            ],
                            'caseStudyLink' => '/case-studies/healthfirst',
                            'link' => '/case-studies/healthfirst'
                        ],
                        [
                            'id' => 5,
                            'icon' => 'star',
                            'industry' => 'food',
                            'industryName' => 'Food & Bev',
                            'company' => 'FreshFood Distributors',
                            'title' => 'Shelf-Life Management Solution',
                            'description' => 'Food distributor reduced spoilage by 71% and saved $1.5M annually with real-time expiration tracking.',
                            'bgColor' => 'bg-linear-to-r from-orange-600 to-red-600',
                            'challenge' => 'Product spoilage from poor expiration tracking caused $2.1M annual waste with limited lot traceability and recall capabilities.',
                            'solution' => 'Implemented real-time expiration date management with cold chain monitoring and automated recall management.',
                            'results' => [
                                ['label' => 'Spoilage Reduction', 'value' => '71%'],
                                ['label' => 'Annual Savings', 'value' => '$1.5M'],
                                ['label' => 'Recall Response', 'value' => '2 hours'],
                                ['label' => 'ROI', 'value' => '350%']
                            ],
                            'tags' => ['Shelf-Life', 'Cold Chain', 'Recall Management'],
                            'testimonial' => [
                                'quote' => 'The expiration tracking has transformed our operations. We\'ve dramatically reduced waste and improved our bottom line.',
                                'author' => 'David Martinez',
                                'role' => 'Operations Director'
                            ],
                            'caseStudyLink' => '/case-studies/freshfood',
                            'link' => '/case-studies/freshfood'
                        ],
                        [
                            'id' => 6,
                            'icon' => 'chip',
                            'industry' => 'electronics',
                            'industryName' => 'Electronics',
                            'company' => 'ElectroTech Manufacturing',
                            'title' => 'Component Obsolescence Management',
                            'description' => 'Electronics manufacturer reduced obsolescence costs by 63% with proactive lifecycle management.',
                            'bgColor' => 'bg-linear-to-r from-indigo-600 to-purple-600',
                            'challenge' => 'Component obsolescence caused $3.2M in redesign costs with 40% of products requiring costly redesigns due to end-of-life components.',
                            'solution' => 'Deployed obsolescence monitoring and prediction with last-time buy optimization and lifecycle management dashboard.',
                            'results' => [
                                ['label' => 'Obsolescence Reduction', 'value' => '63%'],
                                ['label' => 'Annual Savings', 'value' => '$2.0M'],
                                ['label' => 'Lead Time Reduction', 'value' => '67%'],
                                ['label' => 'ROI', 'value' => '280%']
                            ],
                            'tags' => ['Obsolescence', 'Lifecycle Management', 'Supply Chain'],
                            'testimonial' => [
                                'quote' => 'The obsolescence alerts have saved us millions. We\'re now proactively managing component lifecycles instead of reacting to crises.',
                                'author' => 'Lisa Wong',
                                'role' => 'Supply Chain Manager'
                            ],
                            'caseStudyLink' => '/case-studies/electrotech',
                            'link' => '/case-studies/electrotech'
                        ]
                    ],
                    'showComparison' => true,
                    'comparisonTitle' => 'Industry Comparison at a Glance',
                    'showResources' => true,
                    'resourcesTitle' => 'Industry Resources',
                    'resources' => [
                        [
                            'icon' => 'document',
                            'title' => 'Retail Industry Report 2024',
                            'description' => 'Latest trends and benchmarks for retail inventory management.',
                            'link' => '/resources/retail-report.pdf'
                        ],
                        [
                            'icon' => 'document',
                            'title' => 'Manufacturing ROI Guide',
                            'description' => 'How to calculate ROI for manufacturing optimization.',
                            'link' => '/resources/manufacturing-roi.pdf'
                        ],
                        [
                            'icon' => 'document',
                            'title' => 'Healthcare Compliance Handbook',
                            'description' => 'Guide to regulatory compliance in healthcare supply chain.',
                            'link' => '/resources/healthcare-compliance.pdf'
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
                    'ctaText' => 'Ready to find your industry\'s solution?',
                    'ctaButtonText' => 'Schedule a Consultation',
                    'ctaLink' => '/demo'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 224,
                'section_key' => 'industrySpecificExamples',
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
