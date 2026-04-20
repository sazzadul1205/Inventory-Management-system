<?php

namespace Database\Seeders\PageRelatedSeeders\SectionVariantSeeder;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class WhyChooseUsPageSectionVariantSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        // Upsert only this page's variants so other page seeders do not get wiped out.
        $variants = [
            // Competitive Advantages Section 
            [
                'id' => 365,
                'section_key' => 'competitiveAdvantages',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => [
                        'backgroundColor' => 'bg-blue-100 dark:bg-blue-900/30',
                        'borderColor' => 'border-blue-200 dark:border-blue-800',
                        'showPulse' => true,
                        'textColor' => 'text-blue-700 dark:text-blue-300',
                        'text' => 'Why We Stand Out'
                    ],
                    'title' => [
                        'prefix' => 'Our',
                        'highlightGradient' => 'from-blue-600 to-cyan-600',
                        'highlightedText' => 'Competitive Edge',
                        'suffix' => 'in Inventory Management'
                    ],
                    'description' => 'In a crowded market, we differentiate through cutting-edge technology, customer-centric innovation, and an unwavering commitment to reliability. Discover what makes us the preferred choice for thousands of businesses.',
                    'heroImage' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=500&fit=crop',
                    'stats' => [
                        ['icon' => 'FaRobot', 'value' => '99.9%', 'label' => 'Forecast Accuracy'],
                        ['icon' => 'HiOutlineClock', 'value' => '<2s', 'label' => 'Sync Speed'],
                        ['icon' => 'MdIntegrationInstructions', 'value' => '250+', 'label' => 'Integrations'],
                        ['icon' => 'HiOutlineSupport', 'value' => '24/7', 'label' => 'Human Support']
                    ],
                    'advantages' => [
                        [
                            'icon' => 'SiGooglecloud',
                            'title' => 'Quantum Leap Architecture',
                            'description' => 'Powered by a distributed cloud system that processes 1M+ transactions per second, ensuring zero downtime during peak seasons like Black Friday.',
                            'feature' => '99.999% Uptime SLA',
                            'image' => 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop'
                        ],
                        [
                            'icon' => 'TbDeviceAnalytics',
                            'title' => 'Predictive Intelligence',
                            'description' => 'Our proprietary AI doesn\'t just track stock; it predicts demand fluctuations, identifies anomalies, and auto-generates purchase orders.',
                            'feature' => 'Reduce overstock by 35%',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
                        ],
                        [
                            'icon' => 'BsShieldCheck',
                            'title' => 'Bank-Grade Security',
                            'description' => 'SOC 2 Type II certified with end-to-end encryption. Your data is protected by the same standards as global financial institutions.',
                            'feature' => 'Enterprise SSO & Audits',
                            'image' => 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop'
                        ]
                    ],
                    'comparisonFeatures' => [
                        ['feature' => 'Processing Speed', 'ourValue' => '1M+ tx/sec', 'theirValue' => '5K-50K tx/sec'],
                        ['feature' => 'Onboarding Time', 'ourValue' => '3-5 Days', 'theirValue' => '4-6 Weeks'],
                        ['feature' => 'Custom Reporting', 'ourValue' => 'Drag & Drop Builder', 'theirValue' => 'Fixed Templates'],
                        ['feature' => 'Support Channel', 'ourValue' => 'Live Chat + Slack', 'theirValue' => 'Email only']
                    ],
                    'faqCategories' => [
                        ['id' => 'tech', 'icon' => 'HiOutlineChip', 'name' => 'Technology'],
                        ['id' => 'security', 'icon' => 'HiOutlineShieldCheck', 'name' => 'Security'],
                        ['id' => 'support', 'icon' => 'HiOutlineSupport', 'name' => 'Support']
                    ],
                    'faqs' => [
                        [
                            'id' => 1,
                            'category' => 'tech',
                            'icon' => 'HiOutlineChip',
                            'question' => 'How does your AI forecasting differ from standard analytics?',
                            'answer' => 'Unlike standard analytics which are reactive, our AI uses a hybrid model combining LSTMs and Gradient Boosting to predict seasonal trends, supply chain disruptions, and even weather-related inventory shifts with 99.9% accuracy.',
                            'tags' => ['AI', 'Forecasting', 'Machine Learning'],
                            'link' => '/ai-forecasting',
                            'updatedAt' => '2025-01-15',
                            'views' => 1250
                        ],
                        [
                            'id' => 2,
                            'category' => 'security',
                            'icon' => 'HiOutlineShieldCheck',
                            'question' => 'Is the platform compliant with GDPR and CCPA?',
                            'answer' => 'Yes. We are fully compliant with GDPR (Europe), CCPA (California), and SOC 2 Type II. We also offer data residency options (US, EU, APAC) to meet local regulatory requirements.',
                            'tags' => ['Compliance', 'Privacy', 'GDPR'],
                            'link' => '/security',
                            'updatedAt' => '2025-01-20',
                            'views' => 980
                        ],
                        [
                            'id' => 3,
                            'category' => 'support',
                            'icon' => 'HiOutlineSupport',
                            'question' => 'What is the average response time for critical issues?',
                            'answer' => 'P1 (Critical) issues are triaged within 15 minutes via our dedicated Slack channel. Average time to resolution for critical bugs is under 2 hours.',
                            'tags' => ['Support', 'SLA', 'Uptime'],
                            'link' => '/support-sla',
                            'updatedAt' => '2025-01-10',
                            'views' => 750
                        ]
                    ],
                    'contactText' => 'Experience the platform trusted by industry leaders.',
                    'contactLink' => '/demo',
                    'contactButtonText' => 'Claim Your Demo',
                    'contactImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 366,
                'section_key' => 'competitiveAdvantages',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => [
                        'backgroundColor' => 'bg-emerald-100 dark:bg-emerald-900/30',
                        'borderColor' => 'border-emerald-200 dark:border-emerald-800',
                        'showPulse' => true,
                        'textColor' => 'text-emerald-700 dark:text-emerald-300',
                        'text' => 'The Clear Winner'
                    ],
                    'title' => [
                        'prefix' => 'Why',
                        'highlightGradient' => 'from-emerald-600 to-teal-600',
                        'highlightedText' => 'Smart Businesses',
                        'suffix' => 'Choose Us'
                    ],
                    'description' => 'Stop settling for outdated systems and hidden fees. We deliver enterprise-grade performance with startup agility. See how we stack up against the competition across the metrics that actually drive your bottom line.',
                    'heroImage' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=500&fit=crop',
                    'stats' => [
                        ['icon' => 'profit', 'value' => '312%', 'label' => 'Avg. ROI'],
                        ['icon' => 'chart', 'value' => '15min', 'label' => 'Time to Value'],
                        ['icon' => 'verified', 'value' => '4.9/5', 'label' => 'G2 Rating'],
                        ['icon' => 'world', 'value' => '99.5%', 'label' => 'Customer Retention']
                    ],
                    'advantages' => [
                        [
                            'icon' => 'tensorflow',
                            'title' => 'Autonomous Supply Chain',
                            'description' => 'Move beyond dashboards. Our AI doesn\'t just predict—it acts, auto-reordering stock and rerouting logistics before you even know there\'s a problem.',
                            'feature' => 'Self-Healing Inventory',
                            'advantageDetail' => 'Unlike competitors that offer static reports, our autonomous engine uses reinforcement learning to optimize reorder points and safety stock levels continuously, reducing stockouts by up to 78%.',
                            'testimonial' => 'We used to have weekly inventory fire drills. Now, the system just handles it. It\'s like hiring a genius supply chain manager who works 24/7.',
                            'testimonialAuthor' => 'Sarah Johnson, COO',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
                        ],
                        [
                            'icon' => 'piggy',
                            'title' => 'True Total Cost',
                            'description' => 'What you see is what you pay. No surprise overage fees, no \'per API call\' charges. Our pricing is radically transparent and scales with your success.',
                            'feature' => 'Predictable Pricing',
                            'advantageDetail' => 'Most platforms lure you in with a low base fee, then charge exorbitantly for integrations, extra users, and data exports. We bundle it all. Your first million API calls are on us.',
                            'testimonial' => 'Our last provider cost us 3x more than quoted due to hidden fees. With this platform, our finance team finally has peace of mind.',
                            'testimonialAuthor' => 'Michael Chen, CFO',
                            'image' => 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop'
                        ],
                        [
                            'icon' => 'server',
                            'title' => 'Hyperlocal Edge',
                            'description' => 'Global reach, local speed. Our edge network processes data in your region, ensuring sub-50ms latency whether you\'re in Boston, Berlin, or Bangalore.',
                            'feature' => 'Lowest Latency',
                            'advantageDetail' => 'Legacy competitors force your data through centralized servers. Our cloud-native architecture runs on 30+ global regions, putting compute power inches from your operations.',
                            'testimonial' => 'Our warehouses across three continents now sync in real-time. It\'s a game-changer for our global fulfillment strategy.',
                            'testimonialAuthor' => 'David Park, VP Operations',
                            'image' => 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&h=400&fit=crop'
                        ]
                    ],
                    'comparisonMetrics' => [
                        ['id' => 'roi', 'label' => 'Avg. ROI (12 mo)', 'us' => 312, 'competitor' => 87, 'unit' => '%'],
                        ['id' => 'timeToValue', 'label' => 'Time to Value', 'us' => 0.25, 'competitor' => 6, 'unit' => 'weeks'],
                        ['id' => 'dataFreshness', 'label' => 'Data Freshness', 'us' => 'Real-Time', 'competitor' => '15 min delay', 'unit' => ''],
                        ['id' => 'hiddenCosts', 'label' => 'Hidden Costs', 'us' => 'None', 'competitor' => 'Avg. +47% bill', 'unit' => '']
                    ],
                    'faqCategories' => [
                        ['id' => 'pricing', 'icon' => 'cash', 'name' => 'Pricing & Value'],
                        ['id' => 'performance', 'icon' => 'lightning', 'name' => 'Performance'],
                        ['id' => 'migration', 'icon' => 'switch', 'name' => 'Migration']
                    ],
                    'faqs' => [
                        [
                            'id' => 1,
                            'category' => 'pricing',
                            'icon' => 'cash',
                            'question' => 'How does your pricing compare to legacy ERP add-ons?',
                            'answer' => 'Legacy ERPs charge per module, per user, often with 20-30% annual uplift. We offer a single, all-inclusive platform fee. Customers typically save 62% in their first year by replacing 3-5 disparate tools with our unified solution.',
                            'tags' => ['Pricing', 'ERP', 'ROI'],
                            'link' => '/pricing-comparison',
                            'updatedAt' => '2025-01-18',
                            'views' => 1120
                        ],
                        [
                            'id' => 2,
                            'category' => 'performance',
                            'icon' => 'lightning',
                            'question' => 'Can it handle our Black Friday volume?',
                            'answer' => 'Yes. Our architecture auto-scales to handle 10x normal traffic spikes. During 2023 peak, we processed 2.3M inventory events per minute with zero latency degradation. We offer a free load test simulation for enterprise prospects.',
                            'tags' => ['Scalability', 'Peak', 'Performance'],
                            'link' => '/scalability',
                            'updatedAt' => '2025-01-22',
                            'views' => 980
                        ],
                        [
                            'id' => 3,
                            'category' => 'migration',
                            'icon' => 'switch',
                            'question' => 'How painful is migrating from our current system?',
                            'answer' => 'We\'ve migrated 500+ customers with zero data loss. Our \'Smart Migration Toolkit\' includes automated data mapping, dual-write validation, and a dedicated migration engineer. Most SMBs complete the switch in one weekend.',
                            'tags' => ['Migration', 'Onboarding', 'Data'],
                            'link' => '/migration-guarantee',
                            'updatedAt' => '2025-01-14',
                            'views' => 850
                        ]
                    ],
                    'contactText' => 'Ready to leave legacy limitations behind?',
                    'contactLink' => '/roi-calculator',
                    'contactButtonText' => 'Calculate Your Savings',
                    'contactImage' => 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 367,
                'section_key' => 'competitiveAdvantages',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'backgroundColor' => 'bg-violet-100 dark:bg-violet-900/30',
                        'borderColor' => 'border-violet-200 dark:border-violet-800',
                        'showPulse' => true,
                        'textColor' => 'text-violet-700 dark:text-violet-300',
                        'text' => 'Unfair Advantage'
                    ],
                    'title' => [
                        'prefix' => 'The',
                        'highlightGradient' => 'from-violet-600 to-purple-600',
                        'highlightedText' => 'Intelligent Edge',
                        'suffix' => 'Over Legacy Systems'
                    ],
                    'description' => 'While others chase features, we\'ve reimagined the foundation. From predictive automation to invisible infrastructure, discover the architectural advantages that make our platform the smartest choice for forward-thinking operations.',
                    'heroImage' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=500&fit=crop',
                    'stats' => [
                        ['icon' => 'math', 'value' => '98.7%', 'label' => 'Forecast Precision'],
                        ['icon' => 'bolt', 'value' => '99.99%', 'label' => 'Schedule Adherence'],
                        ['icon' => 'opensource', 'value' => '0', 'label' => 'Vendor Lock-in'],
                        ['icon' => 'graph', 'value' => '2.4x', 'label' => 'Faster Throughput']
                    ],
                    'architectureAdvantages' => [
                        [
                            'icon' => 'network',
                            'title' => 'Event-Driven Mesh',
                            'description' => 'Move beyond batch processing. Our platform reacts to inventory changes in milliseconds, triggering workflows across your ecosystem instantly.',
                            'feature' => 'Real-time everywhere',
                            'advantageDetail' => 'Legacy systems poll for changes every 15-30 minutes. Our event mesh pushes updates instantly, eliminating the \'sync gap\' that causes stockouts and overselling.',
                            'testimonial' => 'Our old system would show stock available that was already sold. This platform reflects reality instantly. We\'ve cut oversell cancellations by 94%.',
                            'testimonialAuthor' => 'Jessica Williams, Operations Director',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
                        ],
                        [
                            'icon' => 'auto-awesome',
                            'title' => 'Autonomous Optimization',
                            'description' => 'Set it and forget it. Machine learning continuously tunes reorder points, safety stock, and allocation rules without manual intervention.',
                            'feature' => 'Self-tuning parameters',
                            'advantageDetail' => 'Traditional systems require quarterly manual calibration. Our reinforcement learning agents evaluate millions of scenarios daily, adapting to seasonality and demand shocks automatically.',
                            'testimonial' => 'We used to spend 20 hours a month tweaking reorder points. Now the system handles it, and our service levels are the highest they\'ve ever been.',
                            'testimonialAuthor' => 'Marcus Thompson, Supply Chain Lead',
                            'image' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop'
                        ],
                        [
                            'icon' => 'hub',
                            'title' => 'Headless Core',
                            'description' => 'API-first from day one. Use our engine as a standalone service or plug it into your existing stack without disruption.',
                            'feature' => 'Build, don\'t replace',
                            'advantageDetail' => 'Competitors force you into their UI and data model. Our headless architecture lets you keep your ERP, WMS, or custom dashboard while upgrading your inventory intelligence.',
                            'testimonial' => 'We didn\'t want to rip out our ERP. The API-first approach let us add advanced inventory logic in two weeks instead of two years.',
                            'testimonialAuthor' => 'Elena Rodriguez, CTO',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
                        ]
                    ],
                    'comparisonDimensions' => [
                        ['id' => 'latency', 'label' => 'Data Latency', 'us' => 'Real-time', 'competitor' => '15-30 min', 'unit' => ''],
                        ['id' => 'automation', 'label' => 'Decision Automation', 'us' => 'Fully Autonomous', 'competitor' => 'Manual Rules', 'unit' => ''],
                        ['id' => 'integration', 'label' => 'Integration Depth', 'us' => 'Headless API', 'competitor' => 'Limited Webhooks', 'unit' => ''],
                        ['id' => 'adaptability', 'label' => 'Learning Adaptability', 'us' => 'Continuous RL', 'competitor' => 'Static Models', 'unit' => '']
                    ],
                    'faqCategories' => [
                        ['id' => 'architecture', 'icon' => 'network', 'name' => 'Architecture'],
                        ['id' => 'automation', 'icon' => 'auto-awesome', 'name' => 'Automation'],
                        ['id' => 'integration', 'icon' => 'hub', 'name' => 'Integration']
                    ],
                    'faqs' => [
                        [
                            'id' => 1,
                            'category' => 'architecture',
                            'icon' => 'network',
                            'question' => 'What happens if your API goes down?',
                            'answer' => 'Our architecture is designed for zero single points of failure. We deploy across multiple cloud availability zones with automatic failover. In 2023, we maintained 99.99% uptime including planned maintenance. We also offer an on-premise air-gapped deployment for mission-critical operations.',
                            'tags' => ['Uptime', 'Reliability', 'SLA'],
                            'link' => '/uptime-guarantee',
                            'updatedAt' => '2025-01-19',
                            'views' => 1340
                        ],
                        [
                            'id' => 2,
                            'category' => 'automation',
                            'icon' => 'auto-awesome',
                            'question' => 'How does the AI learn my specific business patterns?',
                            'answer' => 'Our reinforcement learning agent starts with a pre-trained base model, then personalizes to your data within 14 days. It learns from every decision—successful or not—and continuously updates its policy. You can also inject human overrides that the AI learns from.',
                            'tags' => ['AI', 'Machine Learning', 'Personalization'],
                            'link' => '/ai-whitepaper',
                            'updatedAt' => '2025-01-25',
                            'views' => 1120
                        ],
                        [
                            'id' => 3,
                            'category' => 'integration',
                            'icon' => 'hub',
                            'question' => 'Can we migrate away easily if we choose?',
                            'answer' => 'Absolutely. We provide full data portability with one-click export of all your models, rules, and historical data. There are no termination fees, and we offer a 90-day transition assistance window. We win by being the best, not by trapping you.',
                            'tags' => ['Data Portability', 'Exit Strategy', 'Transparency'],
                            'link' => '/data-portability',
                            'updatedAt' => '2025-01-22',
                            'views' => 980
                        ]
                    ],
                    'contactText' => 'Ready to upgrade your inventory intelligence?',
                    'contactLink' => '/architecture-demo',
                    'contactButtonText' => 'See the Engine',
                    'contactImage' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 368,
                'section_key' => 'competitiveAdvantages',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Unique Selling Points Section
            [
                'id' => 369,
                'section_key' => 'uniqueSellingPoints',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => [
                        'backgroundColor' => 'bg-amber-100 dark:bg-amber-900/30',
                        'borderColor' => 'border-amber-200 dark:border-amber-800',
                        'showPulse' => true,
                        'textColor' => 'text-amber-700 dark:text-amber-300',
                        'text' => 'The X Factor'
                    ],
                    'title' => [
                        'prefix' => 'What Makes Us',
                        'highlightGradient' => 'from-amber-600 to-orange-600',
                        'highlightedText' => 'Truly Different',
                        'suffix' => ''
                    ],
                    'description' => 'In a sea of sameness, we stand out through radical transparency, customer obsession, and engineering excellence. These aren\'t just buzzwords—they\'re promises we deliver on every single day.',
                    'heroImage' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=500&fit=crop',
                    'stats' => [
                        ['icon' => 'openai', 'value' => '15s', 'label' => 'Avg. Time to Value'],
                        ['icon' => 'verified', 'value' => '100%', 'label' => 'Data Portability'],
                        ['icon' => 'human', 'value' => '24/7', 'label' => 'Human Support'],
                        ['icon' => 'cloud', 'value' => '50ms', 'label' => 'Global Latency']
                    ],
                    'usps' => [
                        [
                            'icon' => 'dollar',
                            'title' => 'Radical Pricing Transparency',
                            'description' => 'One simple price. No per-seat fees, no integration charges, no surprise overages. Your first million API calls are always free.',
                            'benefit' => 'Predictable costs, predictable budget',
                            'image' => 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop'
                        ],
                        [
                            'icon' => 'headset',
                            'title' => 'Human-First Support',
                            'description' => 'Real humans. Real fast. Average response time under 2 minutes. No chatbots, no tier-1 runaround, no 24-hour email delays.',
                            'benefit' => 'Talk to an expert, not a robot',
                            'image' => 'https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=600&h=400&fit=crop'
                        ],
                        [
                            'icon' => 'data',
                            'title' => 'Zero Data Lock-in',
                            'description' => 'Your data is yours. One-click export to CSV, JSON, or our open format. We\'ll even help you migrate to a competitor (but you won\'t want to).',
                            'benefit' => 'Complete ownership and freedom',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
                        ]
                    ],
                    'highlightText' => 'We built this platform because we were tired of broken promises. Every feature, every integration, every line of code exists to solve real problems—not to upsell you or lock you in.',
                    'highlightImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop',
                    'faqCategories' => [
                        ['id' => 'transparency', 'icon' => 'dollar', 'name' => 'Pricing & Transparency'],
                        ['id' => 'support', 'icon' => 'headset', 'name' => 'Customer Support'],
                        ['id' => 'freedom', 'icon' => 'data', 'name' => 'Data Ownership']
                    ],
                    'faqs' => [
                        [
                            'id' => 1,
                            'category' => 'transparency',
                            'icon' => 'dollar',
                            'question' => 'Do you have hidden fees like setup costs or overage charges?',
                            'answer' => 'None. Zero. We believe in radical transparency. Your monthly fee covers everything: unlimited users, all integrations, priority support, and up to 1M API calls. If you exceed 1M calls, we simply ask you to upgrade to the next tier—no surprise bills.',
                            'tags' => ['Pricing', 'Transparency', 'No Hidden Fees'],
                            'link' => '/pricing',
                            'updatedAt' => '2025-01-15',
                            'views' => 1250
                        ],
                        [
                            'id' => 2,
                            'category' => 'support',
                            'icon' => 'headset',
                            'question' => 'What\'s the average response time for support?',
                            'answer' => 'For standard tickets, under 2 hours. For critical issues (P1), our median response time is 90 seconds via live chat. We have support engineers in US, EU, and APAC timezones, so you\'re never left waiting overnight.',
                            'tags' => ['Support', 'Response Time', 'SLA'],
                            'link' => '/support-sla',
                            'updatedAt' => '2025-01-20',
                            'views' => 980
                        ],
                        [
                            'id' => 3,
                            'category' => 'freedom',
                            'icon' => 'data',
                            'question' => 'How do I get my data out if I cancel?',
                            'answer' => 'You can export everything—your product catalog, order history, inventory levels, forecasts, and settings—with one click. We provide CSV, JSON, and our open XML format. We\'ll also assign a migration engineer to help you transition for 90 days after cancellation, free of charge.',
                            'tags' => ['Data Export', 'Migration', 'Ownership'],
                            'link' => '/data-portability',
                            'updatedAt' => '2025-01-10',
                            'views' => 750
                        ]
                    ],
                    'contactText' => 'Ready to experience a different kind of platform?',
                    'contactLink' => '/demo',
                    'contactButtonText' => 'See the Difference',
                    'contactImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 370,
                'section_key' => 'uniqueSellingPoints',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => [
                        'backgroundColor' => 'bg-sky-100 dark:bg-sky-900/30',
                        'borderColor' => 'border-sky-200 dark:border-sky-800',
                        'showPulse' => true,
                        'textColor' => 'text-sky-700 dark:text-sky-300',
                        'text' => 'Why Smart Teams Switch'
                    ],
                    'title' => [
                        'prefix' => 'The',
                        'highlightGradient' => 'from-sky-600 to-blue-600',
                        'highlightedText' => 'Clear Winner',
                        'suffix' => 'Across Every Dimension'
                    ],
                    'description' => 'Don\'t just take our word for it. We\'ve mapped our platform against legacy solutions across the metrics that actually matter to your operations, your team, and your bottom line.',
                    'heroImage' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=500&fit=crop',
                    'stats' => [
                        ['icon' => 'clock', 'value' => '3x', 'label' => 'Faster Implementation'],
                        ['icon' => 'savings', 'value' => '67%', 'label' => 'Lower TCO'],
                        ['icon' => 'check', 'value' => '98%', 'label' => 'Customer Retention'],
                        ['icon' => 'analytics', 'value' => '24/7', 'label' => 'Real-time Insights']
                    ],
                    'usps' => [
                        [
                            'icon' => 'brain',
                            'title' => 'Predictive Intelligence',
                            'description' => 'Our AI doesn\'t just report the past—it predicts the future with 94% accuracy, automatically adjusting reorder points before demand spikes.',
                            'benefit' => 'Eliminate stockouts by up to 78%',
                            'detail' => 'Unlike static forecasting tools, our models continuously learn from your sales patterns, seasonality, and even external factors like weather and holidays.',
                            'image' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop'
                        ],
                        [
                            'icon' => 'people',
                            'title' => 'Collaborative Workflows',
                            'description' => 'Break down silos with role-based dashboards, approval chains, and real-time notifications that keep every stakeholder aligned.',
                            'benefit' => 'Reduce communication overhead by 50%',
                            'detail' => 'From procurement to sales to warehouse ops, everyone sees the same truth. No more spreadsheet ping-pong or outdated reports.',
                            'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                        ],
                        [
                            'icon' => 'plug',
                            'title' => 'Plug-and-Play Ecosystem',
                            'description' => 'Connect once, work everywhere. Pre-built connectors for Shopify, NetSuite, SAP, and 200+ other tools work out of the box.',
                            'benefit' => 'Go live in days, not months',
                            'detail' => 'Most platforms require expensive custom integration work. Our unified API and pre-built connectors mean you\'re up and running in under a week.',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
                        ]
                    ],
                    'comparisonPoints' => [
                        ['category' => 'ai', 'feature' => 'Demand Forecasting Accuracy', 'us' => '94% AI-driven', 'other' => '60-70% Basic Stats'],
                        ['category' => 'ai', 'feature' => 'Auto-reordering', 'us' => 'Fully Autonomous', 'other' => 'Manual or Basic Rules'],
                        ['category' => 'support', 'feature' => 'Support Response (Critical)', 'us' => '< 90 seconds', 'other' => '2-4 hours'],
                        ['category' => 'support', 'feature' => 'Support Channel', 'us' => 'Chat + Phone + Slack', 'other' => 'Email Only'],
                        ['category' => 'integrations', 'feature' => 'Pre-built Connectors', 'us' => '200+', 'other' => '20-50'],
                        ['category' => 'integrations', 'feature' => 'API First', 'us' => 'Full REST API', 'other' => 'Limited Webhooks']
                    ],
                    'highlightText' => 'We didn\'t build a "me too" product. We listened to thousands of inventory managers and built what they actually asked for: predictive intelligence that works, workflows that make sense, and a platform that connects to everything.',
                    'highlightImage' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=500&fit=crop',
                    'faqCategories' => [
                        ['id' => 'intelligence', 'icon' => 'brain', 'name' => 'Predictive Intelligence'],
                        ['id' => 'workflows', 'icon' => 'people', 'name' => 'Collaboration'],
                        ['id' => 'integration', 'icon' => 'plug', 'name' => 'Ecosystem']
                    ],
                    'faqs' => [
                        [
                            'id' => 1,
                            'category' => 'intelligence',
                            'icon' => 'brain',
                            'question' => 'How does your AI handle seasonal demand spikes?',
                            'answer' => 'Our models analyze up to 3 years of historical data plus external signals (promotions, competitor pricing, even weather). When Black Friday or holiday season hits, the system automatically increases safety stock recommendations and adjusts reorder points 60 days in advance.',
                            'tags' => ['AI', 'Seasonality', 'Forecasting'],
                            'link' => '/ai-forecasting',
                            'updatedAt' => '2025-01-18',
                            'views' => 1120
                        ],
                        [
                            'id' => 2,
                            'category' => 'workflows',
                            'icon' => 'people',
                            'question' => 'Can different teams see different views of the same data?',
                            'answer' => 'Absolutely. Role-based access controls let you customize dashboards for procurement, warehouse, sales, and finance. Everyone sees the same real-time inventory positions, but with metrics and actions tailored to their role. Approvals can be routed automatically.',
                            'tags' => ['RBAC', 'Collaboration', 'Dashboards'],
                            'link' => '/role-based-access',
                            'updatedAt' => '2025-01-22',
                            'views' => 980
                        ],
                        [
                            'id' => 3,
                            'category' => 'integration',
                            'icon' => 'plug',
                            'question' => 'What if my ERP isn\'t in your connector list?',
                            'answer' => 'We offer two options: 1) Our API-first approach means any system with REST capabilities can integrate within days. 2) We build custom connectors for enterprise customers at no additional charge as part of your onboarding. Just ask.',
                            'tags' => ['Integration', 'API', 'Custom'],
                            'link' => '/integrations',
                            'updatedAt' => '2025-01-14',
                            'views' => 850
                        ]
                    ],
                    'contactText' => 'Ready to see the clear winner in action?',
                    'contactLink' => '/demo',
                    'contactButtonText' => 'Book Your Demo',
                    'contactImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 371,
                'section_key' => 'uniqueSellingPoints',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'backgroundColor' => 'bg-amber-100 dark:bg-amber-900/30',
                        'borderColor' => 'border-amber-200 dark:border-amber-800',
                        'showPulse' => true,
                        'textColor' => 'text-amber-700 dark:text-amber-300',
                        'text' => 'Proof Not Promises'
                    ],
                    'title' => [
                        'prefix' => 'The',
                        'highlightGradient' => 'from-amber-600 to-orange-600',
                        'highlightedText' => 'Evidence Stack',
                        'suffix' => 'Behind Our Claims'
                    ],
                    'description' => 'Every feature we ship, every metric we claim, every promise we make is backed by real data, third-party validation, and thousands of successful implementations. Here\'s the proof.',
                    'heroImage' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=500&fit=crop',
                    'stats' => [
                        ['icon' => 'warehouse', 'value' => '15k+', 'label' => 'Active Warehouses'],
                        ['icon' => 'analytics', 'value' => '8.2B', 'label' => 'Inventory Events/Month'],
                        ['icon' => 'security', 'value' => 'SOC2', 'label' => 'Type II Certified'],
                        ['icon' => 'award', 'value' => '47', 'label' => 'Industry Awards']
                    ],
                    'usps' => [
                        [
                            'icon' => 'math',
                            'title' => '94% Forecast Accuracy',
                            'description' => 'Validated by third-party analysis across 500+ enterprise customers. Our ensemble models outperform traditional statistical methods by 42 percentage points.',
                            'benefit' => 'Eliminate stockouts and overstock',
                            'detail' => 'Methodology: We compare our predictions against actual demand over 90-day rolling windows. The 94% figure represents weighted average across all SKUs, normalized for volume.',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
                        ],
                        [
                            'icon' => 'stopwatch',
                            'title' => '47min Avg Time-to-Value',
                            'description' => 'From signup to first insight. Our guided onboarding and pre-built templates get you live faster than any competitor—proven by real customer data.',
                            'benefit' => 'See results in under an hour',
                            'detail' => 'Measured from account creation to first inventory recommendation. Excludes custom integrations (average 3 days for non-standard ERP connections).',
                            'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                        ],
                        [
                            'icon' => 'verified',
                            'title' => '99.99% Verified Uptime',
                            'description' => 'Not a promise—a historical fact. Third-party monitored across 2023, including Black Friday peak. Our SLA backs this with service credits.',
                            'benefit' => 'Never worry about downtime',
                            'detail' => 'Verified by independent monitoring service. Excludes planned maintenance (average 4 hours/year, always communicated 14 days in advance).',
                            'image' => 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop'
                        ]
                    ],
                    'metrics' => [
                        ['icon' => 'chart', 'value' => '312%', 'label' => 'Avg. ROI', 'description' => '12-month customer average'],
                        ['icon' => 'clock', 'value' => '94%', 'label' => 'Faster Onboarding', 'description' => 'vs. legacy ERP'],
                        ['icon' => 'users', 'value' => '98%', 'label' => 'Retention Rate', 'description' => 'Enterprise customers'],
                        ['icon' => 'file', 'value' => '0', 'label' => 'Hidden Fees', 'description' => 'Guaranteed']
                    ],
                    'testimonials' => [
                        [
                            'icon' => 'quote',
                            'quote' => 'We switched from a legacy system that cost 3x more and gave us 1/10th the capability. The forecast accuracy alone paid for the platform in 4 months.',
                            'name' => 'Sarah Chen',
                            'role' => 'VP of Supply Chain, OmniRetail',
                            'result' => 'Reduced stockouts by 78%',
                            'image' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
                        ],
                        [
                            'icon' => 'quote',
                            'quote' => 'The API-first approach let us keep our ERP while upgrading our inventory intelligence. Implementation took 5 days instead of 5 months.',
                            'name' => 'Michael Rodriguez',
                            'role' => 'CTO, Global Logistics Co',
                            'result' => '5-day implementation',
                            'image' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
                        ],
                        [
                            'icon' => 'quote',
                            'quote' => 'The support team responds in under 2 minutes on Slack. That\'s faster than our internal IT. We\'ve never looked back.',
                            'name' => 'David Kim',
                            'role' => 'Operations Director, FreshFoods',
                            'result' => '99.99% uptime achieved',
                            'image' => 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop'
                        ]
                    ],
                    'videos' => [
                        [
                            'title' => 'How OmniRetail Cut Stockouts by 78%',
                            'author' => 'Sarah Chen',
                            'company' => 'OmniRetail',
                            'url' => '/videos/omni-retail-case-study.mp4',
                            'thumbnail' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop'
                        ],
                        [
                            'title' => '5-Day Implementation with Global Logistics Co',
                            'author' => 'Michael Rodriguez',
                            'company' => 'Global Logistics Co',
                            'url' => '/videos/global-logistics-case-study.mp4',
                            'thumbnail' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop'
                        ],
                        [
                            'title' => 'Why FreshFoods Switched from NetSuite',
                            'author' => 'David Kim',
                            'company' => 'FreshFoods',
                            'url' => '/videos/fresh-foods-case-study.mp4',
                            'thumbnail' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop'
                        ]
                    ],
                    'faqCategories' => [
                        ['id' => 'accuracy', 'icon' => 'math', 'name' => 'Forecast Accuracy'],
                        ['id' => 'implementation', 'icon' => 'stopwatch', 'name' => 'Time-to-Value'],
                        ['id' => 'reliability', 'icon' => 'verified', 'name' => 'Uptime & SLA']
                    ],
                    'faqs' => [
                        [
                            'id' => 1,
                            'category' => 'accuracy',
                            'icon' => 'math',
                            'question' => 'How is your 94% forecast accuracy measured and verified?',
                            'answer' => 'We use third-party monitoring (G2 and independent auditors) who analyze rolling 90-day forecast windows. The 94% represents weighted MAPE (Mean Absolute Percentage Error) across all customer SKUs, normalized for volume. For high-volume SKUs, accuracy exceeds 97%. We publish quarterly transparency reports.',
                            'tags' => ['Accuracy', 'Measurement', 'Verification'],
                            'link' => '/forecast-methodology',
                            'updatedAt' => '2025-01-19',
                            'views' => 1340
                        ],
                        [
                            'id' => 2,
                            'category' => 'implementation',
                            'icon' => 'stopwatch',
                            'question' => 'What does \'47 minutes to value\' actually include?',
                            'answer' => '47 minutes is the median time from account creation to receiving the first AI-powered inventory recommendation. This includes: signup (2 min), connecting your first channel via pre-built connector (15 min), data sync (25 min), and first insight generation (5 min). Custom ERP integrations average 3 days, but standard ecommerce platforms hit the 47-min benchmark.',
                            'tags' => ['Onboarding', 'Time-to-Value', 'Implementation'],
                            'link' => '/onboarding-benchmarks',
                            'updatedAt' => '2025-01-25',
                            'views' => 1120
                        ],
                        [
                            'id' => 3,
                            'category' => 'reliability',
                            'icon' => 'verified',
                            'question' => 'What happens if you miss your 99.99% uptime SLA?',
                            'answer' => 'We publish real-time uptime stats at status.inventoryplatform.com. If we fall below 99.99% in any calendar month (excluding planned maintenance), we automatically credit 10% of your monthly fee per additional 0.01% below threshold. In 3 years, we\'ve paid credits exactly twice—both for under 15 minutes.',
                            'tags' => ['Uptime', 'SLA', 'Reliability'],
                            'link' => '/uptime-guarantee',
                            'updatedAt' => '2025-01-22',
                            'views' => 980
                        ]
                    ],
                    'highlightText' => 'We\'re so confident in our claims that we put them in writing—with service credits if we miss. No fine print, no gotchas, just accountable performance.',
                    'highlightImage' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
                    'contactText' => 'See the evidence for yourself. Book a data-driven demo.',
                    'contactLink' => '/demo',
                    'contactButtonText' => 'See the Proof',
                    'contactImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 372,
                'section_key' => 'uniqueSellingPoints',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Customer Satisfaction Stats Section 
            [
                'id' => 373,
                'section_key' => 'customerSatisfactionStats',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => [
                        'backgroundColor' => 'bg-emerald-100 dark:bg-emerald-900/30',
                        'borderColor' => 'border-emerald-200 dark:border-emerald-800',
                        'showPulse' => true,
                        'textColor' => 'text-emerald-700 dark:text-emerald-300',
                        'text' => 'Voice of the Customer'
                    ],
                    'title' => [
                        'prefix' => 'What',
                        'highlightGradient' => 'from-emerald-600 to-teal-600',
                        'highlightedText' => '2,000+ Businesses',
                        'suffix' => 'Say About Us'
                    ],
                    'description' => 'Don\'t just take our word for it. Our customer satisfaction scores, retention rates, and real testimonials tell the real story of how we deliver value every single day.',
                    'heroImage' => 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&h=500&fit=crop',
                    'stats' => [
                        ['icon' => 'star', 'value' => '4.96', 'label' => 'G2 Rating'],
                        ['icon' => 'users', 'value' => '98.7%', 'label' => 'Customer Retention'],
                        ['icon' => 'message', 'value' => '89', 'label' => 'Net Promoter Score'],
                        ['icon' => 'chart', 'value' => '312%', 'label' => 'Average ROI']
                    ],
                    'featuredTestimonial' => [
                        'quote' => 'We\'ve tried five inventory systems over a decade. This is the only one where the support team actually answers in under 2 minutes and the software just works. It\'s not magic—it\'s just well-built.',
                        'name' => 'Jennifer Walters',
                        'role' => 'VP of Operations',
                        'company' => 'OmniRetail Group',
                        'icon' => 'quote',
                        'image' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop'
                    ],
                    'testimonials' => [
                        [
                            'icon' => 'user',
                            'quote' => 'Implementation took 4 days instead of the 4 weeks we budgeted. The ROI was positive in month two. Our warehouse team actually enjoys using it.',
                            'name' => 'Marcus Chen',
                            'role' => 'Supply Chain Director',
                            'company' => 'Global Logistics Inc',
                            'image' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
                        ],
                        [
                            'icon' => 'user',
                            'quote' => 'The AI forecast accuracy reduced our emergency air freight by 73% in the first quarter alone. That single metric paid for the platform three times over.',
                            'name' => 'Sarah O\'Brien',
                            'role' => 'Inventory Manager',
                            'company' => 'FreshFoods Market',
                            'image' => 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop'
                        ],
                        [
                            'icon' => 'user',
                            'quote' => 'We migrated from NetSuite Inventory. The data export was one click. The support team held our hand the whole way. We\'ve never felt locked in.',
                            'name' => 'David Kim',
                            'role' => 'CTO',
                            'company' => 'TechSupply Co',
                            'image' => 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop'
                        ]
                    ],
                    'satisfactionScore' => '4.96',
                    'reviewCount' => '1,847',
                    'faqCategories' => [
                        ['id' => 'support', 'icon' => 'headset', 'name' => 'Support Quality'],
                        ['id' => 'roi', 'icon' => 'chart', 'name' => 'ROI & Value'],
                        ['id' => 'reliability', 'icon' => 'shield', 'name' => 'Reliability']
                    ],
                    'faqs' => [
                        [
                            'id' => 1,
                            'category' => 'support',
                            'icon' => 'headset',
                            'question' => 'What\'s the average support response time for paying customers?',
                            'answer' => 'For standard tickets, median response is 90 seconds via live chat. For P1 critical issues, we guarantee a human response within 15 minutes via Slack or phone. These numbers are pulled from our internal metrics dashboard, which we share with enterprise customers on request.',
                            'tags' => ['Support', 'Response Time', 'SLA'],
                            'link' => '/support-sla',
                            'updatedAt' => '2025-01-15',
                            'views' => 1250
                        ],
                        [
                            'id' => 2,
                            'category' => 'roi',
                            'icon' => 'chart',
                            'question' => 'How do you calculate the 312% average ROI figure?',
                            'answer' => 'We analyze anonymized data from customers who have been live for 12+ months. ROI calculation includes: inventory carrying cost reduction (avg 27%), stockout prevention (avg 78% reduction), labor savings (avg 40 hours/week reclaimed), and reduced emergency shipping (avg 63% reduction).',
                            'tags' => ['ROI', 'Methodology', 'Metrics'],
                            'link' => '/roi-whitepaper',
                            'updatedAt' => '2025-01-20',
                            'views' => 980
                        ],
                        [
                            'id' => 3,
                            'category' => 'reliability',
                            'icon' => 'shield',
                            'question' => 'What happens during peak season? Can you handle the load?',
                            'answer' => 'We processed 2.3M inventory events per minute during Black Friday 2023 with zero latency degradation. Our auto-scaling infrastructure adds capacity within seconds of demand spikes. We offer free load testing for enterprise prospects.',
                            'tags' => ['Scalability', 'Peak', 'Performance'],
                            'link' => '/scalability',
                            'updatedAt' => '2025-01-10',
                            'views' => 750
                        ]
                    ],
                    'contactText' => 'Join 2,000+ businesses already experiencing the difference.',
                    'contactLink' => '/demo',
                    'contactButtonText' => 'Start Your Trial',
                    'contactImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 374,
                'section_key' => 'customerSatisfactionStats',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => [
                        'backgroundColor' => 'bg-purple-100 dark:bg-purple-900/30',
                        'borderColor' => 'border-purple-200 dark:border-purple-800',
                        'showPulse' => true,
                        'textColor' => 'text-purple-700 dark:text-purple-300',
                        'text' => 'Trusted by Industry Leaders'
                    ],
                    'title' => [
                        'prefix' => 'The',
                        'highlightGradient' => 'from-purple-600 to-pink-600',
                        'highlightedText' => 'Proof Is in the Numbers',
                        'suffix' => ''
                    ],
                    'description' => 'We don\'t just claim to be great—we prove it with verified ratings, real customer reviews, and transparent satisfaction metrics across every major review platform.',
                    'heroImage' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=500&fit=crop',
                    'stats' => [
                        ['icon' => 'g2', 'value' => '4.96', 'label' => 'G2 Rating'],
                        ['icon' => 'trustpilot', 'value' => '4.8', 'label' => 'Trustpilot'],
                        ['icon' => 'capterra', 'value' => '4.9', 'label' => 'Capterra'],
                        ['icon' => 'users', 'value' => '98%', 'label' => 'Would Recommend']
                    ],
                    'overallRating' => '4.92',
                    'reviewCount' => '2,847',
                    'reviewPlatforms' => [
                        ['name' => 'G2', 'rating' => '4.96', 'icon' => 'g2'],
                        ['name' => 'Trustpilot', 'rating' => '4.8', 'icon' => 'trustpilot'],
                        ['name' => 'Capterra', 'rating' => '4.9', 'icon' => 'capterra'],
                        ['name' => 'Google', 'rating' => '4.7', 'icon' => 'google']
                    ],
                    'ratingDistribution' => ['5' => 82, '4' => 12, '3' => 4, '2' => 1, '1' => 1],
                    'featuredTestimonial' => [
                        'rating' => 5,
                        'quote' => 'After evaluating 12 different inventory platforms, we chose this one for three reasons: the AI accuracy, the support team\'s response time, and the transparent pricing. Two years later, we\'ve never regretted it.',
                        'name' => 'Michael Torres',
                        'role' => 'Director of Supply Chain',
                        'company' => 'Global Retail Solutions',
                        'icon' => 'user-tie',
                        'verified' => true,
                        'date' => 'March 15, 2024',
                        'detail' => 'We migrated 15 warehouses across 3 continents. The implementation team was with us every step of the way. Our inventory accuracy went from 92% to 99.7% in 60 days.',
                        'image' => 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop'
                    ],
                    'testimonials' => [
                        [
                            'rating' => 5,
                            'quote' => 'The forecasting feature alone saved us $2.3M in carrying costs last year. We\'ve reduced stockouts by 84% and increased inventory turns from 4x to 7x annually.',
                            'name' => 'Jennifer Walsh',
                            'role' => 'COO',
                            'company' => 'OmniChannel Brands',
                            'icon' => 'user',
                            'verified' => true,
                            'date' => 'February 28, 2024',
                            'image' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
                        ],
                        [
                            'rating' => 5,
                            'quote' => 'Support response time is consistently under 2 minutes on chat. When we had a critical issue during Black Friday, they had an engineer on a Zoom call within 90 seconds.',
                            'name' => 'David Park',
                            'role' => 'CTO',
                            'company' => 'FastShip Logistics',
                            'icon' => 'user',
                            'verified' => true,
                            'date' => 'February 10, 2024',
                            'image' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
                        ],
                        [
                            'rating' => 4,
                            'quote' => 'The migration from our legacy system was surprisingly smooth. The API documentation is excellent, and the pre-built connectors saved us weeks of development time.',
                            'name' => 'Sarah Mitchell',
                            'role' => 'VP of Technology',
                            'company' => 'HealthSupplies Co',
                            'icon' => 'user',
                            'verified' => true,
                            'date' => 'January 22, 2024',
                            'image' => 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop'
                        ]
                    ],
                    'faqCategories' => [
                        ['id' => 'reviews', 'icon' => 'message-star', 'name' => 'Review Methodology'],
                        ['id' => 'metrics', 'icon' => 'chart', 'name' => 'Satisfaction Metrics'],
                        ['id' => 'verification', 'icon' => 'verified', 'name' => 'Verification Process']
                    ],
                    'faqs' => [
                        [
                            'id' => 1,
                            'category' => 'reviews',
                            'icon' => 'message-star',
                            'question' => 'Are your G2 reviews verified and authentic?',
                            'answer' => 'Yes. G2 uses a strict verification process requiring users to verify their email and employment. We do not incentivize positive reviews or filter negative ones. Our 4.96 rating is based on 847 verified reviews, with 94% rating us 5 stars.',
                            'tags' => ['G2', 'Verification', 'Authenticity'],
                            'link' => '/g2-profile',
                            'updatedAt' => '2025-01-18',
                            'views' => 1120
                        ],
                        [
                            'id' => 2,
                            'category' => 'metrics',
                            'icon' => 'chart',
                            'question' => 'How do you calculate your 98% recommendation rate?',
                            'answer' => 'This metric comes from our post-onboarding survey sent to all customers after 90 days. The question is: "On a scale of 1-10, how likely are you to recommend Inventory Platform to a colleague?" We consider scores of 9-10 as promoters. 98% of respondents fall into this category.',
                            'tags' => ['NPS', 'Recommendation', 'Methodology'],
                            'link' => '/customer-satisfaction',
                            'updatedAt' => '2025-01-22',
                            'views' => 980
                        ],
                        [
                            'id' => 3,
                            'category' => 'verification',
                            'icon' => 'verified',
                            'question' => 'How can I verify that these testimonials are from real customers?',
                            'answer' => 'All testimonials on this page are from verified customers who have signed our testimonial release form. We provide case studies with verifiable ROI metrics and can arrange reference calls with any enterprise prospect. G2 reviews also serve as third-party verification.',
                            'tags' => ['Verification', 'References', 'Case Studies'],
                            'link' => '/case-studies',
                            'updatedAt' => '2025-01-14',
                            'views' => 850
                        ]
                    ],
                    'contactText' => 'See why 2,000+ businesses trust us with their inventory.',
                    'contactLink' => '/demo',
                    'contactButtonText' => 'Read More Reviews',
                    'contactImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 375,
                'section_key' => 'customerSatisfactionStats',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'backgroundColor' => 'bg-rose-100 dark:bg-rose-900/30',
                        'borderColor' => 'border-rose-200 dark:border-rose-800',
                        'showPulse' => true,
                        'textColor' => 'text-rose-700 dark:text-rose-300',
                        'text' => 'The Proof is in the Performance'
                    ],
                    'title' => [
                        'prefix' => 'Customer Satisfaction',
                        'highlightGradient' => 'from-rose-600 to-pink-600',
                        'highlightedText' => 'By the Numbers',
                        'suffix' => ''
                    ],
                    'description' => 'Behind every metric is a real business achieving real results. From NPS scores to retention rates, here\'s the data that shows how we deliver on our promises.',
                    'heroImage' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=500&fit=crop',
                    'stats' => [
                        ['icon' => 'chart', 'value' => '98.7%', 'label' => 'Customer Retention'],
                        ['icon' => 'message', 'value' => '+72', 'label' => 'NPS Score'],
                        ['icon' => 'star', 'value' => '4.96', 'label' => 'G2 Rating'],
                        ['icon' => 'users', 'value' => '312%', 'label' => 'Avg. ROI']
                    ],
                    'metrics' => [
                        ['icon' => 'stopwatch', 'value' => '47min', 'label' => 'Time to Value', 'description' => 'From signup to first insight'],
                        ['icon' => 'headset', 'value' => '90s', 'label' => 'Support Response', 'description' => 'Median critical issue response'],
                        ['icon' => 'cloud-check', 'value' => '99.99%', 'label' => 'Uptime SLA', 'description' => 'Historical 12-month average'],
                        ['icon' => 'chart', 'value' => '312%', 'label' => 'Average ROI', 'description' => '12-month customer average']
                    ],
                    'overallRating' => '4.96',
                    'reviewCount' => '1,847',
                    'reviewPlatforms' => [
                        ['name' => 'G2', 'rating' => '4.96'],
                        ['name' => 'Trustpilot', 'rating' => '4.8'],
                        ['name' => 'Capterra', 'rating' => '4.9']
                    ],
                    'ratingDistribution' => ['5' => 84, '4' => 11, '3' => 3, '2' => 1, '1' => 1],
                    'nps' => '72',
                    'promoters' => 72,
                    'passives' => 22,
                    'detractors' => 6,
                    'npsData' => [
                        ['quarter' => 'Q1 2023', 'score' => 58],
                        ['quarter' => 'Q2 2023', 'score' => 62],
                        ['quarter' => 'Q3 2023', 'score' => 67],
                        ['quarter' => 'Q4 2023', 'score' => 72]
                    ],
                    'testimonials' => [
                        [
                            'rating' => 5,
                            'quote' => 'The AI forecasting reduced our stockouts by 84% and cut carrying costs by $2.3M annually. This isn\'t just software—it\'s a strategic advantage.',
                            'name' => 'Jennifer Walsh',
                            'role' => 'COO',
                            'company' => 'OmniChannel Brands',
                            'icon' => 'user',
                            'verified' => true,
                            'date' => 'February 2024',
                            'result' => '84% stockout reduction',
                            'detail' => 'We migrated 12 warehouses across 3 countries. The implementation team had us live in 11 days. The ROI was positive by month three.',
                            'image' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
                        ],
                        [
                            'rating' => 5,
                            'quote' => 'Support response time is consistently under 2 minutes on chat. During Black Friday, they had an engineer on Zoom in 90 seconds.',
                            'name' => 'David Park',
                            'role' => 'CTO',
                            'company' => 'FastShip Logistics',
                            'icon' => 'user',
                            'verified' => true,
                            'date' => 'January 2024',
                            'result' => '99.99% uptime',
                            'detail' => 'We processed 2.3M inventory events during peak with zero degradation. The auto-scaling just worked.',
                            'image' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
                        ]
                    ],
                    'videos' => [
                        [
                            'title' => 'How OmniChannel Reduced Stockouts by 84%',
                            'author' => 'Jennifer Walsh',
                            'company' => 'OmniChannel Brands',
                            'url' => '/videos/omnichannel-case-study.mp4',
                            'thumbnail' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop'
                        ]
                    ],
                    'faqCategories' => [
                        ['id' => 'metrics', 'icon' => 'chart', 'name' => 'Metric Methodology'],
                        ['id' => 'nps', 'icon' => 'message', 'name' => 'NPS & Loyalty'],
                        ['id' => 'verification', 'icon' => 'verified', 'name' => 'Data Verification']
                    ],
                    'faqs' => [
                        [
                            'id' => 1,
                            'category' => 'metrics',
                            'icon' => 'chart',
                            'question' => 'How is the 312% average ROI calculated?',
                            'answer' => 'ROI is calculated from anonymized data of customers live for 12+ months. Components include: inventory carrying cost reduction (avg 27%), stockout prevention (avg 84% reduction), labor savings (avg 40 hours/week reclaimed), and reduced emergency shipping (avg 63%). Full methodology available in our ROI whitepaper.',
                            'tags' => ['ROI', 'Methodology', 'Metrics'],
                            'link' => '/roi-whitepaper',
                            'updatedAt' => '2025-01-19',
                            'views' => 1340
                        ],
                        [
                            'id' => 2,
                            'category' => 'nps',
                            'icon' => 'message',
                            'question' => 'What does your NPS of 72 mean?',
                            'answer' => 'NPS measures customer loyalty on a scale from -100 to +100. A score above 50 is considered \'excellent.\' 72 places us in the top 5% of B2B software companies. Our promoters (scoring 9-10) are 72%, passives (7-8) are 22%, and detractors (0-6) are 6%.',
                            'tags' => ['NPS', 'Loyalty', 'Benchmark'],
                            'link' => '/nps-explanation',
                            'updatedAt' => '2025-01-25',
                            'views' => 1120
                        ],
                        [
                            'id' => 3,
                            'category' => 'verification',
                            'icon' => 'verified',
                            'question' => 'How are customer reviews verified?',
                            'answer' => 'All reviews on G2 and Trustpilot require email and employment verification. We do not incentivize positive reviews or filter negative ones. For testimonials on this page, we require signed release forms and offer reference calls with prospects.',
                            'tags' => ['Verification', 'Authenticity', 'Reviews'],
                            'link' => '/review-verification',
                            'updatedAt' => '2025-01-22',
                            'views' => 980
                        ]
                    ],
                    'contactText' => 'See the metrics that matter to your business.',
                    'contactLink' => '/demo',
                    'contactButtonText' => 'Get the Data Pack',
                    'contactImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 376,
                'section_key' => 'customerSatisfactionStats',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Industry Expertise Section 
            [
                'id' => 377,
                'section_key' => 'industryExpertise',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => [
                        'backgroundColor' => 'bg-blue-100 dark:bg-blue-900/30',
                        'borderColor' => 'border-blue-200 dark:border-blue-800',
                        'showPulse' => true,
                        'textColor' => 'text-blue-700 dark:text-blue-300',
                        'text' => 'Deep Domain Knowledge'
                    ],
                    'title' => [
                        'prefix' => 'Industry-Specific',
                        'highlightGradient' => 'from-blue-600 to-cyan-600',
                        'highlightedText' => 'Supply Chain Intelligence',
                        'suffix' => ''
                    ],
                    'description' => 'We don\'t build generic software. We build purpose-built solutions informed by decades of hands-on supply chain experience across manufacturing, retail, distribution, and logistics.',
                    'heroImage' => 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=1200&h=500&fit=crop',
                    'stats' => [
                        ['icon' => 'factory', 'value' => '500+', 'label' => 'Manufacturing Plants'],
                        ['icon' => 'store', 'value' => '15k+', 'label' => 'Retail Locations'],
                        ['icon' => 'package', 'value' => '2,000+', 'label' => 'Warehouses'],
                        ['icon' => 'truck', 'value' => '50M+', 'label' => 'Orders Processed']
                    ],
                    'industries' => [
                        ['icon' => 'factory', 'name' => 'Manufacturing', 'description' => 'Raw materials, WIP, finished goods across multi-site operations'],
                        ['icon' => 'store', 'name' => 'Retail', 'description' => 'Omnichannel inventory, store replenishment, demand sensing'],
                        ['icon' => 'package', 'name' => 'Distribution', 'description' => '3PL operations, cross-docking, wave planning'],
                        ['icon' => 'truck', 'name' => 'Logistics', 'description' => 'Fleet optimization, route planning, carrier integration']
                    ],
                    'expertise' => [
                        ['icon' => 'brain', 'title' => 'Demand Forecasting', 'description' => 'ML models that learn your seasonality, promotions, and market trends', 'stat' => '94% average accuracy'],
                        ['icon' => 'chart', 'title' => 'Inventory Optimization', 'description' => 'Multi-echelon optimization across your entire network', 'stat' => '27% carrying cost reduction'],
                        ['icon' => 'plug', 'title' => 'ERP Integration', 'description' => 'Deep expertise with SAP, Oracle, NetSuite, Microsoft Dynamics', 'stat' => '500+ successful integrations']
                    ],
                    'expertQuote' => 'After 20 years in supply chain consulting, I\'ve never seen a team that combines deep domain expertise with such elegant technology. They don\'t just understand the theory—they\'ve lived the pain points we face daily.',
                    'expertName' => 'Michael Chen',
                    'expertTitle' => 'Former VP of Supply Chain, Fortune 500 Retailer',
                    'expertImage' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
                    'faqCategories' => [
                        ['id' => 'manufacturing', 'icon' => 'factory', 'name' => 'Manufacturing'],
                        ['id' => 'retail', 'icon' => 'store', 'name' => 'Retail & E-commerce'],
                        ['id' => 'logistics', 'icon' => 'truck', 'name' => 'Logistics & 3PL']
                    ],
                    'faqs' => [
                        [
                            'id' => 1,
                            'category' => 'manufacturing',
                            'icon' => 'factory',
                            'question' => 'How does your platform handle multi-site manufacturing with shared components?',
                            'answer' => 'Our multi-echelon inventory optimization models treat your entire network as a connected system. It accounts for BOM dependencies, lead time variability across sites, and can optimize safety stock placement at component, sub-assembly, and finished good levels simultaneously.',
                            'tags' => ['Multi-site', 'Manufacturing', 'BOM'],
                            'link' => '/manufacturing-solutions',
                            'updatedAt' => '2025-01-15',
                            'views' => 1250
                        ],
                        [
                            'id' => 2,
                            'category' => 'retail',
                            'icon' => 'store',
                            'question' => 'Can you handle retail-specific challenges like store replenishment and seasonality?',
                            'answer' => 'Yes. Our demand sensing models incorporate store-level POS data, local events, weather patterns, and promotional calendars. The system auto-generates store replenishment recommendations with configurable min/max, case pack constraints, and transportation lead times.',
                            'tags' => ['Retail', 'Store Replenishment', 'Seasonality'],
                            'link' => '/retail-solutions',
                            'updatedAt' => '2025-01-20',
                            'views' => 980
                        ],
                        [
                            'id' => 3,
                            'category' => 'logistics',
                            'icon' => 'truck',
                            'question' => 'What logistics-specific features do you offer for 3PLs?',
                            'answer' => 'For 3PLs, we offer multi-tenant inventory segmentation, client-specific allocation rules, wave planning optimization, and carrier rate shopping. The platform also handles complex billing scenarios like storage fees based on cube utilization and activity-based transaction pricing.',
                            'tags' => ['3PL', 'Warehousing', 'Carrier Integration'],
                            'link' => '/logistics-solutions',
                            'updatedAt' => '2025-01-10',
                            'views' => 750
                        ]
                    ],
                    'contactText' => 'Let\'s discuss your specific industry challenges.',
                    'contactLink' => '/industry-consultation',
                    'contactButtonText' => 'Book a Consultation',
                    'contactImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 378,
                'section_key' => 'industryExpertise',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => [
                        'backgroundColor' => 'bg-indigo-100 dark:bg-indigo-900/30',
                        'borderColor' => 'border-indigo-200 dark:border-indigo-800',
                        'showPulse' => true,
                        'textColor' => 'text-indigo-700 dark:text-indigo-300',
                        'text' => 'Trusted by Industry Leaders'
                    ],
                    'title' => [
                        'prefix' => 'Vertical-Specific',
                        'highlightGradient' => 'from-indigo-600 to-purple-600',
                        'highlightedText' => 'Supply Chain Solutions',
                        'suffix' => ''
                    ],
                    'description' => 'Every industry has unique inventory challenges. Our platform is purpose-built with deep domain expertise across manufacturing, retail, distribution, and logistics — backed by real customer success stories.',
                    'heroImage' => 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=1200&h=500&fit=crop',
                    'stats' => [
                        ['icon' => 'factory', 'value' => '500+', 'label' => 'Manufacturing Plants'],
                        ['icon' => 'store', 'value' => '15k+', 'label' => 'Retail Locations'],
                        ['icon' => 'package', 'value' => '2,000+', 'label' => 'Distribution Centers'],
                        ['icon' => 'truck', 'value' => '98%', 'label' => 'On-Time Delivery']
                    ],
                    'industries' => [
                        [
                            'id' => 'manufacturing',
                            'icon' => 'factory',
                            'name' => 'Manufacturing',
                            'description' => 'Multi-site production, BOM optimization, WIP tracking',
                            'fullDescription' => 'From automotive to electronics, we help manufacturers optimize raw material inventory, reduce WIP, and synchronize production schedules across global facilities.',
                            'challenges' => ['Raw material stockouts', 'High WIP inventory', 'Multi-site coordination'],
                            'solutions' => ['Multi-echelon optimization', 'BOM-driven forecasting', 'Production scheduling integration'],
                            'caseStudy' => 'An automotive parts manufacturer reduced inventory by 27% while improving service levels from 92% to 98.5%.',
                            'image' => 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'retail',
                            'icon' => 'store',
                            'name' => 'Retail & E-commerce',
                            'description' => 'Omnichannel inventory, store replenishment, demand sensing',
                            'fullDescription' => 'Retailers use our platform to unify inventory across physical stores, distribution centers, and drop-ship vendors — delivering a single source of truth.',
                            'challenges' => ['Channel conflict', 'Store out-of-stocks', 'Slow-moving inventory'],
                            'solutions' => ['Omnichannel allocation', 'Dynamic replenishment', 'Markdown optimization'],
                            'caseStudy' => 'A national retailer cut store stockouts by 54% and reduced e-commerce cancellations by 78%.',
                            'image' => 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'distribution',
                            'icon' => 'package',
                            'name' => 'Distribution & 3PL',
                            'description' => 'Multi-tenant inventory, wave planning, client allocation',
                            'fullDescription' => '3PLs and distributors gain real-time visibility across clients, automate wave planning, and optimize slotting to maximize warehouse throughput.',
                            'challenges' => ['Client-specific rules', 'Labor inefficiency', 'Space utilization'],
                            'solutions' => ['Multi-tenant architecture', 'Wave optimization', 'Dynamic slotting'],
                            'caseStudy' => 'A leading 3PL increased warehouse throughput by 34% while reducing labor costs by 18%.',
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'logistics',
                            'icon' => 'truck',
                            'name' => 'Logistics & Freight',
                            'description' => 'Fleet optimization, route planning, carrier integration',
                            'fullDescription' => 'Logistics providers leverage our platform to optimize fleet utilization, consolidate shipments, and provide customers with real-time tracking.',
                            'challenges' => ['Empty miles', 'Carrier fragmentation', 'Real-time visibility'],
                            'solutions' => ['Route optimization', 'Carrier rate shopping', 'Track & trace'],
                            'caseStudy' => 'A freight forwarder reduced empty miles by 23% and improved on-time delivery to 98.7%.',
                            'image' => 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&h=400&fit=crop'
                        ]
                    ],
                    'expertise' => [
                        ['icon' => 'brain', 'title' => 'Demand Forecasting', 'description' => 'ML models that learn your industry-specific seasonality and trends', 'stat' => '94% average accuracy across industries'],
                        ['icon' => 'chart', 'title' => 'Multi-Echelon Optimization', 'description' => 'Optimize inventory across your entire network, not just one node', 'stat' => '27% carrying cost reduction'],
                        ['icon' => 'plug', 'title' => 'ERP Integration', 'description' => 'Deep expertise with SAP, Oracle, NetSuite, and Microsoft Dynamics', 'stat' => '500+ successful integrations']
                    ],
                    'caseStudies' => [
                        ['icon' => 'factory', 'company' => 'Precision Auto Parts', 'industry' => 'manufacturing', 'year' => '2024', 'quote' => 'The multi-echelon optimization reduced our tier 1 supplier inventory by 31% while eliminating production line stockouts completely.', 'result' => '31% inventory reduction, 100% line service level', 'link' => '/case-studies/precision-auto', 'image' => 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=100&h=100&fit=crop'],
                        ['icon' => 'store', 'company' => 'Fashion Retail Group', 'industry' => 'retail', 'year' => '2023', 'quote' => 'Store-level demand sensing cut our markdowns by 42% and improved full-price sell-through by 28%.', 'result' => '42% fewer markdowns, 28% higher sell-through', 'link' => '/case-studies/fashion-retail', 'image' => 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=100&h=100&fit=crop'],
                        ['icon' => 'package', 'company' => 'Global 3PL Solutions', 'industry' => 'distribution', 'year' => '2024', 'quote' => 'Wave planning optimization increased our warehouse throughput by 34% without adding headcount.', 'result' => '34% throughput increase', 'link' => '/case-studies/global-3pl', 'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=100&h=100&fit=crop']
                    ],
                    'expertQuote' => 'After 25 years in supply chain leadership across retail, manufacturing, and logistics, I can say this is the first platform that truly understands industry nuances — not just generic inventory math.',
                    'expertName' => 'David Rodriguez',
                    'expertTitle' => 'Former SVP of Supply Chain, Fortune 100 Retailer',
                    'expertImage' => 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
                    'faqCategories' => [
                        ['id' => 'manufacturing', 'icon' => 'factory', 'name' => 'Manufacturing Solutions'],
                        ['id' => 'retail', 'icon' => 'store', 'name' => 'Retail & E-commerce'],
                        ['id' => 'logistics', 'icon' => 'truck', 'name' => 'Logistics & Distribution']
                    ],
                    'faqs' => [
                        [
                            'id' => 1,
                            'category' => 'manufacturing',
                            'icon' => 'factory',
                            'question' => 'How does your platform handle complex BOMs with shared components across multiple products?',
                            'answer' => 'Our multi-echelon optimization treats your entire BOM network as an integrated system. It accounts for component commonality, lead time variability at each tier, and can recommend safety stock placement at component, sub-assembly, and finished good levels simultaneously.',
                            'tags' => ['BOM', 'Multi-echelon', 'Manufacturing'],
                            'link' => '/manufacturing-bom-optimization',
                            'updatedAt' => '2025-01-18',
                            'views' => 1120
                        ],
                        [
                            'id' => 2,
                            'category' => 'retail',
                            'icon' => 'store',
                            'question' => 'Can you handle omnichannel inventory allocation across stores, warehouses, and drop-ship vendors?',
                            'answer' => 'Yes. Our omnichannel allocation engine considers store-level demand signals, warehouse capacity, shipping costs, and customer proximity. It dynamically decides the optimal fulfillment source for each order to minimize cost while maximizing service levels.',
                            'tags' => ['Omnichannel', 'Allocation', 'Retail'],
                            'link' => '/retail-omnichannel',
                            'updatedAt' => '2025-01-22',
                            'views' => 980
                        ],
                        [
                            'id' => 3,
                            'category' => 'logistics',
                            'icon' => 'truck',
                            'question' => 'How does your platform help 3PLs manage inventory across multiple clients with different rules?',
                            'answer' => 'Our multi-tenant architecture provides complete data isolation between clients while allowing the 3PL to manage operations from a single interface. Features include client-specific allocation rules, storage fee calculation based on cube utilization, activity-based billing, and wave planning.',
                            'tags' => ['3PL', 'Multi-tenant', 'Warehouse'],
                            'link' => '/3pl-solutions',
                            'updatedAt' => '2025-01-14',
                            'views' => 850
                        ]
                    ],
                    'contactText' => 'Let\'s discuss your industry-specific challenges.',
                    'contactLink' => '/industry-consultation',
                    'contactButtonText' => 'Request Industry Consultation',
                    'contactImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 379,
                'section_key' => 'industryExpertise',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'backgroundColor' => 'bg-teal-100 dark:bg-teal-900/30',
                        'borderColor' => 'border-teal-200 dark:border-teal-800',
                        'showPulse' => true,
                        'textColor' => 'text-teal-700 dark:text-teal-300',
                        'text' => 'Domain Authority'
                    ],
                    'title' => [
                        'prefix' => 'Supply Chain',
                        'highlightGradient' => 'from-teal-600 to-emerald-600',
                        'highlightedText' => 'Deep Expertise',
                        'suffix' => 'Across Every Vertical'
                    ],
                    'description' => 'Our team brings decades of hands-on supply chain experience across manufacturing, retail, distribution, and logistics. We don\'t just build software—we solve problems we\'ve personally faced.',
                    'heroImage' => 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=1200&h=500&fit=crop',
                    'stats' => [
                        ['icon' => 'factory', 'value' => '500+', 'label' => 'Manufacturing Plants'],
                        ['icon' => 'store', 'value' => '15k+', 'label' => 'Retail Locations'],
                        ['icon' => 'package', 'value' => '2,000+', 'label' => 'Distribution Centers'],
                        ['icon' => 'users', 'value' => '98%', 'label' => 'Customer Retention']
                    ],
                    'industries' => [
                        [
                            'id' => 'manufacturing',
                            'icon' => 'factory',
                            'name' => 'Manufacturing',
                            'description' => 'Multi-site production, BOM optimization, WIP tracking',
                            'fullDescription' => 'From automotive to electronics, we help manufacturers optimize raw material inventory, reduce WIP, and synchronize production schedules across global facilities.',
                            'challenges' => ['Raw material stockouts', 'High WIP inventory', 'Multi-site coordination'],
                            'solutions' => ['Multi-echelon optimization', 'BOM-driven forecasting', 'Production scheduling integration'],
                            'caseStudy' => 'An automotive parts manufacturer reduced inventory by 27% while improving service levels from 92% to 98.5%.',
                            'image' => 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'retail',
                            'icon' => 'store',
                            'name' => 'Retail & E-commerce',
                            'description' => 'Omnichannel inventory, store replenishment, demand sensing',
                            'fullDescription' => 'Retailers use our platform to unify inventory across physical stores, distribution centers, and drop-ship vendors — delivering a single source of truth.',
                            'challenges' => ['Channel conflict', 'Store out-of-stocks', 'Slow-moving inventory'],
                            'solutions' => ['Omnichannel allocation', 'Dynamic replenishment', 'Markdown optimization'],
                            'caseStudy' => 'A national retailer cut store stockouts by 54% and reduced e-commerce cancellations by 78%.',
                            'image' => 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'distribution',
                            'icon' => 'package',
                            'name' => 'Distribution & 3PL',
                            'description' => 'Multi-tenant inventory, wave planning, client allocation',
                            'fullDescription' => '3PLs and distributors gain real-time visibility across clients, automate wave planning, and optimize slotting to maximize warehouse throughput.',
                            'challenges' => ['Client-specific rules', 'Labor inefficiency', 'Space utilization'],
                            'solutions' => ['Multi-tenant architecture', 'Wave optimization', 'Dynamic slotting'],
                            'caseStudy' => 'A leading 3PL increased warehouse throughput by 34% while reducing labor costs by 18%.',
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'logistics',
                            'icon' => 'truck',
                            'name' => 'Logistics & Freight',
                            'description' => 'Fleet optimization, route planning, carrier integration',
                            'fullDescription' => 'Logistics providers leverage our platform to optimize fleet utilization, consolidate shipments, and provide customers with real-time tracking.',
                            'challenges' => ['Empty miles', 'Carrier fragmentation', 'Real-time visibility'],
                            'solutions' => ['Route optimization', 'Carrier rate shopping', 'Track & trace'],
                            'caseStudy' => 'A freight forwarder reduced empty miles by 23% and improved on-time delivery to 98.7%.',
                            'image' => 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&h=400&fit=crop'
                        ]
                    ],
                    'expertise' => [
                        ['icon' => 'brain', 'title' => 'Demand Forecasting', 'description' => 'ML models that learn your industry-specific seasonality and trends', 'stat' => '94% average accuracy across industries'],
                        ['icon' => 'chart', 'title' => 'Multi-Echelon Optimization', 'description' => 'Optimize inventory across your entire network, not just one node', 'stat' => '27% carrying cost reduction'],
                        ['icon' => 'plug', 'title' => 'ERP Integration', 'description' => 'Deep expertise with SAP, Oracle, NetSuite, and Microsoft Dynamics', 'stat' => '500+ successful integrations']
                    ],
                    'expertQuote' => 'After 25 years in supply chain leadership across retail, manufacturing, and logistics, I can say this is the first platform that truly understands industry nuances — not just generic inventory math.',
                    'expertName' => 'David Rodriguez',
                    'expertTitle' => 'Former SVP of Supply Chain, Fortune 100 Retailer',
                    'expertImage' => 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
                    'testimonials' => [
                        ['icon' => 'user', 'quote' => 'The team\'s understanding of automotive manufacturing constraints saved us months of trial and error. They\'ve lived the problems we face daily.', 'name' => 'Jennifer Walsh', 'role' => 'VP of Operations', 'company' => 'Precision Auto Parts', 'result' => '27% inventory reduction', 'image' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'],
                        ['icon' => 'user', 'quote' => 'Finally, a platform that understands retail seasonality and store-level replenishment. Our markdowns dropped 42% in the first year.', 'name' => 'Michael Chen', 'role' => 'SVP of Merchandising', 'company' => 'Fashion Retail Group', 'result' => '42% fewer markdowns', 'image' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'],
                        ['icon' => 'user', 'quote' => 'As a 3PL, we need multi-tenant capabilities. This platform delivered client isolation with unified operations. Our throughput increased 34%.', 'name' => 'Sarah O\'Brien', 'role' => 'COO', 'company' => 'Global 3PL Solutions', 'result' => '34% throughput increase', 'image' => 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop']
                    ],
                    'videos' => [
                        ['title' => 'How Precision Auto Reduced Inventory by 27%', 'author' => 'Jennifer Walsh', 'company' => 'Precision Auto Parts', 'url' => '/videos/precision-auto-case-study.mp4', 'thumbnail' => 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=400&h=300&fit=crop'],
                        ['title' => 'Fashion Retail\'s Omnichannel Transformation', 'author' => 'Michael Chen', 'company' => 'Fashion Retail Group', 'url' => '/videos/fashion-retail-case-study.mp4', 'thumbnail' => 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop']
                    ],
                    'events' => [
                        ['icon' => 'calendar', 'title' => 'Manufacturing Supply Chain Summit', 'date' => 'April 15, 2024', 'time' => '11:00 AM EST', 'description' => 'Join industry experts discussing multi-echelon inventory optimization for complex BOMs.', 'type' => 'Virtual Webinar', 'link' => '/events/manufacturing-summit'],
                        ['icon' => 'calendar', 'title' => 'Retail Inventory Planning Workshop', 'date' => 'April 22, 2024', 'time' => '2:00 PM EST', 'description' => 'Learn how leading retailers use demand sensing to reduce markdowns and improve sell-through.', 'type' => 'Virtual Workshop', 'link' => '/events/retail-workshop']
                    ],
                    'faqCategories' => [
                        ['id' => 'manufacturing', 'icon' => 'factory', 'name' => 'Manufacturing'],
                        ['id' => 'retail', 'icon' => 'store', 'name' => 'Retail'],
                        ['id' => 'logistics', 'icon' => 'truck', 'name' => 'Logistics & 3PL']
                    ],
                    'faqs' => [
                        [
                            'id' => 1,
                            'category' => 'manufacturing',
                            'icon' => 'factory',
                            'question' => 'How does your platform handle complex BOMs with shared components across multiple products?',
                            'answer' => 'Our multi-echelon optimization treats your entire BOM network as an integrated system. It accounts for component commonality, lead time variability at each tier, and can recommend safety stock placement at component, sub-assembly, and finished good levels simultaneously.',
                            'tags' => ['BOM', 'Multi-echelon', 'Manufacturing'],
                            'link' => '/manufacturing-bom-optimization',
                            'updatedAt' => '2025-01-19',
                            'views' => 1340
                        ],
                        [
                            'id' => 2,
                            'category' => 'retail',
                            'icon' => 'store',
                            'question' => 'Can you handle omnichannel inventory allocation across stores, warehouses, and drop-ship vendors?',
                            'answer' => 'Yes. Our omnichannel allocation engine considers store-level demand signals, warehouse capacity, shipping costs, and customer proximity. It dynamically decides the optimal fulfillment source for each order to minimize cost while maximizing service levels.',
                            'tags' => ['Omnichannel', 'Allocation', 'Retail'],
                            'link' => '/retail-omnichannel',
                            'updatedAt' => '2025-01-25',
                            'views' => 1120
                        ],
                        [
                            'id' => 3,
                            'category' => 'logistics',
                            'icon' => 'truck',
                            'question' => 'How does your platform help 3PLs manage inventory across multiple clients with different rules?',
                            'answer' => 'Our multi-tenant architecture provides complete data isolation between clients while allowing the 3PL to manage operations from a single interface. Features include client-specific allocation rules, storage fee calculation based on cube utilization, activity-based billing, and wave planning.',
                            'tags' => ['3PL', 'Multi-tenant', 'Warehouse'],
                            'link' => '/3pl-solutions',
                            'updatedAt' => '2025-01-22',
                            'views' => 980
                        ]
                    ],
                    'contactText' => 'Let\'s discuss your specific industry challenges.',
                    'contactLink' => '/industry-consultation',
                    'contactButtonText' => 'Talk to an Industry Expert',
                    'contactImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 380,
                'section_key' => 'industryExpertise',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Technology & Innovation Section 
            [
                'id' => 381,
                'section_key' => 'technologyInnovation',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => [
                        'backgroundColor' => 'bg-slate-100 dark:bg-slate-900/30',
                        'borderColor' => 'border-slate-200 dark:border-slate-800',
                        'showPulse' => true,
                        'textColor' => 'text-slate-700 dark:text-slate-300',
                        'text' => 'Built for Scale'
                    ],
                    'title' => [
                        'prefix' => 'Modern',
                        'highlightGradient' => 'from-slate-600 to-gray-600',
                        'highlightedText' => 'Technology Stack',
                        'suffix' => 'Powering Inventory Intelligence'
                    ],
                    'description' => 'We\'ve rebuilt inventory management from the ground up using cloud-native architecture, real-time processing, and AI-native intelligence. No legacy constraints. No technical debt. Just modern technology that works.',
                    'heroImage' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=500&fit=crop',
                    'stats' => [
                        ['icon' => 'cloud', 'value' => '99.99%', 'label' => 'Uptime SLA'],
                        ['icon' => 'chart', 'value' => '50ms', 'label' => 'Global Latency'],
                        ['icon' => 'api', 'value' => '10k+', 'label' => 'API Calls/sec'],
                        ['icon' => 'database', 'value' => '50B+', 'label' => 'Events Processed']
                    ],
                    'technologies' => [
                        ['icon' => 'kubernetes', 'name' => 'Kubernetes', 'description' => 'Auto-scaling container orchestration across 15+ global regions'],
                        ['icon' => 'kafka', 'name' => 'Kafka Streams', 'description' => 'Real-time event processing at 1M+ events per second'],
                        ['icon' => 'tensorflow', 'name' => 'TensorFlow', 'description' => 'Custom ML models for demand forecasting and anomaly detection'],
                        ['icon' => 'graphql', 'name' => 'GraphQL API', 'description' => 'Flexible query interface with 99.9% type safety']
                    ],
                    'innovations' => [
                        ['icon' => 'brain', 'title' => 'Reinforcement Learning for Inventory Optimization', 'description' => 'Our RL agents continuously learn from every decision, automatically adjusting safety stock and reorder points without human intervention.', 'benefit' => '27% reduction in carrying costs', 'image' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop'],
                        ['icon' => 'network', 'title' => 'Event-Driven Architecture', 'description' => 'Changes propagate in milliseconds across your entire ecosystem. No batch processing delays, no stale data.', 'benefit' => 'Real-time everywhere', 'image' => 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop'],
                        ['icon' => 'shield', 'title' => 'Zero-Trust Security Model', 'description' => 'Every API call is authenticated, encrypted, and audited. SOC 2 Type II certified with end-to-end encryption.', 'benefit' => 'Bank-grade security', 'image' => 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop'],
                        ['icon' => 'chart', 'title' => 'Predictive Analytics Engine', 'description' => 'Ensemble models combining LSTMs, Gradient Boosting, and classical time series for 94% forecast accuracy.', 'benefit' => '94% average accuracy', 'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop']
                    ],
                    'innovationLabText' => 'We invest 20% of engineering time in R&D, exploring emerging technologies to solve tomorrow\'s inventory challenges. Our innovation lab has produced 15+ patents and counting, with 3 new products in private beta.',
                    'innovationLabImage' => 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=500&fit=crop',
                    'faqCategories' => [
                        ['id' => 'architecture', 'icon' => 'cloud', 'name' => 'Architecture'],
                        ['id' => 'security', 'icon' => 'shield', 'name' => 'Security'],
                        ['id' => 'integration', 'icon' => 'api', 'name' => 'API & Integration']
                    ],
                    'faqs' => [
                        [
                            'id' => 1,
                            'category' => 'architecture',
                            'icon' => 'cloud',
                            'question' => 'How do you handle data consistency across multiple regions?',
                            'answer' => 'We use a strongly consistent, globally distributed database with configurable read/write preferences. For inventory-critical operations, we use quorum-based writes. For analytics workloads, we offer eventual consistency with < 50ms lag. Our architecture supports active-active failover across all regions.',
                            'tags' => ['Consistency', 'Global', 'Database'],
                            'link' => '/architecture-white-paper',
                            'updatedAt' => '2025-01-15',
                            'views' => 1250
                        ],
                        [
                            'id' => 2,
                            'category' => 'security',
                            'icon' => 'shield',
                            'question' => 'What security certifications do you hold?',
                            'answer' => 'We maintain SOC 2 Type II certification, ISO 27001, and GDPR/CCPA compliance. All data is encrypted at rest (AES-256) and in transit (TLS 1.3). We offer SSO (SAML 2.0), SCIM provisioning, and audit logs with 7-year retention for enterprise customers.',
                            'tags' => ['Security', 'Compliance', 'Certifications'],
                            'link' => '/security',
                            'updatedAt' => '2025-01-20',
                            'views' => 980
                        ],
                        [
                            'id' => 3,
                            'category' => 'integration',
                            'icon' => 'api',
                            'question' => 'What rate limits do you have on your API?',
                            'answer' => 'The default rate limit is 10,000 requests per minute per API key. Bursts up to 20,000 RPM are allowed for up to 30 seconds. Enterprise customers can request custom limits. All limits are clearly documented and returned in API response headers.',
                            'tags' => ['API', 'Rate Limits', 'Performance'],
                            'link' => '/api-docs',
                            'updatedAt' => '2025-01-10',
                            'views' => 750
                        ]
                    ],
                    'contactText' => 'Want to geek out on our architecture? Schedule a technical deep-dive.',
                    'contactLink' => '/technical-demo',
                    'contactButtonText' => 'Talk to Engineering',
                    'contactImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 382,
                'section_key' => 'technologyInnovation',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => [
                        'backgroundColor' => 'bg-violet-100 dark:bg-violet-900/30',
                        'borderColor' => 'border-violet-200 dark:border-violet-800',
                        'showPulse' => true,
                        'textColor' => 'text-violet-700 dark:text-violet-300',
                        'text' => 'Developer First'
                    ],
                    'title' => [
                        'prefix' => 'API-First',
                        'highlightGradient' => 'from-violet-600 to-purple-600',
                        'highlightedText' => 'Platform Architecture',
                        'suffix' => ''
                    ],
                    'description' => 'We built our platform with developers in mind. Every feature is available via API first, with comprehensive documentation, SDKs, and a fully interactive API playground to test before you code.',
                    'heroImage' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=500&fit=crop',
                    'stats' => [
                        ['icon' => 'api', 'value' => '200+', 'label' => 'API Endpoints'],
                        ['icon' => 'database', 'value' => '99.99%', 'label' => 'API Uptime'],
                        ['icon' => 'chart', 'value' => '50ms', 'label' => 'Avg Response'],
                        ['icon' => 'users', 'value' => '10k+', 'label' => 'Active Developers']
                    ],
                    'technologies' => [
                        ['icon' => 'graphql', 'name' => 'GraphQL', 'description' => 'Flexible queries with automatic batching and persisted queries'],
                        ['icon' => 'apollo', 'name' => 'Apollo Federation', 'description' => 'Unified GraphQL gateway across microservices'],
                        ['icon' => 'redis', 'name' => 'Redis', 'description' => 'Sub-ms caching for frequently accessed data'],
                        ['icon' => 'kubernetes', 'name' => 'Kubernetes', 'description' => 'Auto-scaling across 15+ global regions']
                    ],
                    'innovations' => [
                        ['icon' => 'api', 'title' => 'GraphQL Federation', 'description' => 'Our unified GraphQL gateway composes schemas from 20+ microservices, providing a single endpoint for all inventory operations.', 'benefit' => 'One API for everything', 'image' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop'],
                        ['icon' => 'bolt', 'title' => 'Real-time Subscriptions', 'description' => 'WebSocket-based subscriptions push inventory changes instantly to your applications. No polling, no delays.', 'benefit' => 'Instant updates', 'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'],
                        ['icon' => 'shield', 'title' => 'Fine-grained RBAC', 'description' => 'API keys with scoped permissions. Limit access to specific resources, operations, or data fields.', 'benefit' => 'Granular security', 'image' => 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop'],
                        ['icon' => 'chart', 'title' => 'Batch Operations', 'description' => 'Perform bulk create, update, and delete operations with a single API call. Up to 10,000 items per batch.', 'benefit' => 'Efficient bulk ops', 'image' => 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop']
                    ],
                    'performanceMetrics' => [
                        ['icon' => 'clock', 'value' => '50ms', 'label' => 'P95 Latency', 'description' => 'Global average'],
                        ['icon' => 'database', 'value' => '99.99%', 'label' => 'API Uptime', 'description' => 'Rolling 12 months'],
                        ['icon' => 'api', 'value' => '10k+', 'label' => 'Requests/sec', 'description' => 'Peak capacity'],
                        ['icon' => 'chart', 'value' => '100%', 'label' => 'Schema Coverage', 'description' => 'GraphQL introspection']
                    ],
                    'apiEndpoints' => [
                        ['method' => 'GET', 'path' => '/inventory/products', 'description' => 'List all products with filtering and pagination', 'sampleResponse' => '{"data":{"products":[{"id":"prod_123","sku":"INV-001","name":"Wireless Mouse","quantity":147}]}}'],
                        ['method' => 'POST', 'path' => '/inventory/forecast', 'description' => 'Generate demand forecast for a product', 'sampleResponse' => '{"data":{"forecast":[{"date":"2024-04-01","predicted":342,"lower_bound":310,"upper_bound":374}]}}'],
                        ['method' => 'POST', 'path' => '/inventory/reorder', 'description' => 'Create purchase order recommendation', 'sampleResponse' => '{"data":{"recommendation":{"product_id":"prod_123","quantity":500,"suggested_vendor":"vendor_456","delivery_date":"2024-04-15"}}}']
                    ],
                    'innovationLabText' => 'Our GraphQL federation layer processes over 1 billion requests monthly. We contribute to open-source GraphQL tooling and have 3 core team members maintaining Apollo Federation extensions.',
                    'faqCategories' => [
                        ['id' => 'api', 'icon' => 'api', 'name' => 'API & GraphQL'],
                        ['id' => 'security', 'icon' => 'shield', 'name' => 'Authentication'],
                        ['id' => 'performance', 'icon' => 'clock', 'name' => 'Performance']
                    ],
                    'faqs' => [
                        [
                            'id' => 1,
                            'category' => 'api',
                            'icon' => 'api',
                            'question' => 'What\'s the difference between your REST and GraphQL APIs?',
                            'answer' => 'Our REST API follows standard resource-based conventions and is ideal for simple integrations. Our GraphQL API offers flexible queries, real-time subscriptions, and automatic batching. Both hit the same underlying services and have identical rate limits. We recommend GraphQL for new integrations.',
                            'tags' => ['API', 'GraphQL', 'REST'],
                            'link' => '/api-comparison',
                            'updatedAt' => '2025-01-18',
                            'views' => 1120
                        ],
                        [
                            'id' => 2,
                            'category' => 'security',
                            'icon' => 'shield',
                            'question' => 'How do API keys work with role-based access control?',
                            'answer' => 'Each API key can be scoped to specific resources (e.g., product catalog only), operations (read vs write), and data fields (e.g., exclude cost fields). Keys are hashed at rest and never logged. We support JWT authentication for server-to-server and OAuth 2.0 for user-facing applications.',
                            'tags' => ['Authentication', 'RBAC', 'Security'],
                            'link' => '/api-auth',
                            'updatedAt' => '2025-01-22',
                            'views' => 980
                        ],
                        [
                            'id' => 3,
                            'category' => 'performance',
                            'icon' => 'clock',
                            'question' => 'What rate limits should I expect?',
                            'answer' => 'Default: 10,000 requests per minute per API key with bursts to 20,000 RPM. Response headers include X-RateLimit-Limit, X-RateLimit-Remaining, and X-RateLimit-Reset. Enterprise plans support custom limits. Our GraphQL persisted query feature can reduce request volume by 60-80%.',
                            'tags' => ['Rate Limits', 'Performance', 'Scalability'],
                            'link' => '/rate-limits',
                            'updatedAt' => '2025-01-14',
                            'views' => 850
                        ]
                    ],
                    'contactText' => 'Ready to build on our API-first platform?',
                    'contactLink' => '/developer-portal',
                    'contactButtonText' => 'Get API Keys',
                    'contactImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 383,
                'section_key' => 'technologyInnovation',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'backgroundColor' => 'bg-cyan-100 dark:bg-cyan-900/30',
                        'borderColor' => 'border-cyan-200 dark:border-cyan-800',
                        'showPulse' => true,
                        'textColor' => 'text-cyan-700 dark:text-cyan-300',
                        'text' => 'Future-Forward'
                    ],
                    'title' => [
                        'prefix' => 'Inside Our',
                        'highlightGradient' => 'from-cyan-600 to-blue-600',
                        'highlightedText' => 'Innovation Engine',
                        'suffix' => ''
                    ],
                    'description' => 'From our R&D lab to our public roadmap, see how we\'re building the future of inventory management. We invest 20% of engineering time in exploring emerging technologies and pushing boundaries.',
                    'heroImage' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=500&fit=crop',
                    'stats' => [
                        ['icon' => 'brain', 'value' => '20%', 'label' => 'Engineering Time in R&D'],
                        ['icon' => 'certificate', 'value' => '15+', 'label' => 'Patents Filed'],
                        ['icon' => 'chart', 'value' => '3', 'label' => 'New Products in Beta'],
                        ['icon' => 'users', 'value' => '50+', 'label' => 'Research Collaborations']
                    ],
                    'technologies' => [
                        ['icon' => 'kubernetes', 'name' => 'Kubernetes', 'description' => 'Auto-scaling across 15+ global regions'],
                        ['icon' => 'tensorflow', 'name' => 'TensorFlow', 'description' => 'Custom ML models for demand forecasting'],
                        ['icon' => 'apollo', 'name' => 'Apollo Federation', 'description' => 'Unified GraphQL gateway'],
                        ['icon' => 'redis', 'name' => 'Redis', 'description' => 'Sub-ms caching layer']
                    ],
                    'innovations' => [
                        ['icon' => 'ai', 'title' => 'Reinforcement Learning for Inventory', 'description' => 'Our RL agents continuously optimize safety stock and reorder points across your network, learning from every decision.', 'benefit' => '27% avg carrying cost reduction', 'image' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop'],
                        ['icon' => 'network', 'title' => 'Federated Learning', 'description' => 'Train models across customer data without sharing sensitive information. Collective intelligence with privacy guarantees.', 'benefit' => 'Privacy-preserving AI', 'image' => 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop'],
                        ['icon' => 'api', 'title' => 'GraphQL Federation', 'description' => 'Unified API gateway that composes schemas from 20+ microservices into a single, type-safe endpoint.', 'benefit' => 'One API for everything', 'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'],
                        ['icon' => 'shield', 'title' => 'Zero-Trust Architecture', 'description' => 'Every request authenticated and authorized at every layer. SOC 2 Type II and ISO 27001 certified.', 'benefit' => 'Bank-grade security', 'image' => 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop']
                    ],
                    'performanceMetrics' => [
                        ['icon' => 'clock', 'value' => '50ms', 'label' => 'P95 Latency', 'description' => 'Global average'],
                        ['icon' => 'database', 'value' => '99.99%', 'label' => 'API Uptime', 'description' => 'Rolling 12 months'],
                        ['icon' => 'api', 'value' => '10k+', 'label' => 'Requests/sec', 'description' => 'Peak capacity'],
                        ['icon' => 'chart', 'value' => '1B+', 'label' => 'Monthly API Calls', 'description' => 'Across all customers']
                    ],
                    'roadmapItems' => [
                        ['icon' => 'ai', 'title' => 'AI-Powered Demand Sensing', 'description' => 'Real-time demand sensing using POS data and external signals (weather, promotions, events)', 'status' => 'current', 'eta' => 'Q2 2024', 'betaAvailable' => true],
                        ['icon' => 'api', 'title' => 'GraphQL Federation v2', 'description' => 'Improved schema composition, better error handling, and query cost analysis', 'status' => 'upcoming', 'eta' => 'Q3 2024', 'betaAvailable' => false],
                        ['icon' => 'shield', 'title' => 'Zero-Trust Security Enhancements', 'description' => 'Fine-grained RBAC with attribute-based access control', 'status' => 'planned', 'eta' => 'Q4 2024', 'betaAvailable' => false]
                    ],
                    'researchProjects' => [
                        ['icon' => 'ai', 'title' => 'Generative AI for Inventory Planning', 'description' => 'Using LLMs to generate natural language inventory recommendations and explanations', 'status' => 'In Progress'],
                        ['icon' => 'network', 'title' => 'Quantum-Inspired Optimization', 'description' => 'Exploring quantum annealing algorithms for multi-echelon inventory optimization', 'status' => 'Early Stage'],
                        ['icon' => 'api', 'title' => 'WebAssembly Edge Computing', 'description' => 'Running inventory logic at the edge for sub-10ms decision latency', 'status' => 'Prototype']
                    ],
                    'patents' => [
                        ['title' => 'Reinforcement Learning for Multi-Echelon Inventory Optimization', 'number' => 'US2024-0123456', 'filedDate' => 'January 2024'],
                        ['title' => 'Federated Learning for Demand Forecasting', 'number' => 'US2023-9876543', 'filedDate' => 'August 2023'],
                        ['title' => 'GraphQL Federation for Real-Time Inventory', 'number' => 'US2023-4567890', 'filedDate' => 'March 2023']
                    ],
                    'videos' => [
                        ['title' => 'How Our RL Engine Optimizes Inventory', 'author' => 'Engineering Team', 'url' => '/videos/rl-inventory.mp4', 'thumbnail' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop'],
                        ['title' => 'GraphQL Federation Deep Dive', 'author' => 'API Team', 'url' => '/videos/graphql-federation.mp4', 'thumbnail' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop']
                    ],
                    'apiEndpoints' => [
                        ['method' => 'GET', 'path' => '/inventory/products', 'description' => 'List all products with filtering and pagination', 'sampleResponse' => '{"data":{"products":[{"id":"prod_123","sku":"INV-001","quantity":147}]}}'],
                        ['method' => 'POST', 'path' => '/inventory/forecast', 'description' => 'Generate demand forecast for a product', 'sampleResponse' => '{"data":{"forecast":[{"date":"2024-04-01","predicted":342}]}}']
                    ],
                    'innovationLabText' => 'Our innovation lab has produced 15+ patents and 3 new products currently in private beta. We collaborate with top research universities and contribute to open-source AI tooling.',
                    'innovationLabImage' => 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=500&fit=crop',
                    'faqCategories' => [
                        ['id' => 'ai', 'icon' => 'ai', 'name' => 'AI & Machine Learning'],
                        ['id' => 'roadmap', 'icon' => 'calendar', 'name' => 'Roadmap'],
                        ['id' => 'research', 'icon' => 'lightbulb', 'name' => 'Research']
                    ],
                    'faqs' => [
                        [
                            'id' => 1,
                            'category' => 'ai',
                            'icon' => 'ai',
                            'question' => 'How does your reinforcement learning model differ from traditional forecasting?',
                            'answer' => 'Traditional forecasting predicts future demand. Our RL model goes further—it recommends optimal actions (reorder points, safety stock, allocation rules) based on predicted outcomes. It continuously learns from the results of its decisions, improving over time. This closed-loop approach reduces inventory by 27% on average while improving service levels.',
                            'tags' => ['RL', 'AI', 'Optimization'],
                            'link' => '/rl-whitepaper',
                            'updatedAt' => '2025-01-19',
                            'views' => 1340
                        ],
                        [
                            'id' => 2,
                            'category' => 'roadmap',
                            'icon' => 'calendar',
                            'question' => 'How can I access beta features?',
                            'answer' => 'Beta features are available to enterprise customers and select early adopters. You can request beta access through your customer success manager or via our beta program page. We typically run 3-4 concurrent beta programs with 50-100 customers each.',
                            'tags' => ['Beta', 'Early Access', 'Roadmap'],
                            'link' => '/beta-program',
                            'updatedAt' => '2025-01-25',
                            'views' => 1120
                        ],
                        [
                            'id' => 3,
                            'category' => 'research',
                            'icon' => 'lightbulb',
                            'question' => 'How can my company collaborate on research?',
                            'answer' => 'We partner with select customers on joint research projects, particularly around novel use cases or industry-specific challenges. Partners get early access to emerging technology and co-authorship on publications. Contact our research team to discuss opportunities.',
                            'tags' => ['Research', 'Partnership', 'Innovation'],
                            'link' => '/research-partnerships',
                            'updatedAt' => '2025-01-22',
                            'views' => 980
                        ]
                    ],
                    'contactText' => 'Want to peek behind the curtain?',
                    'contactLink' => '/innovation-lab',
                    'contactButtonText' => 'Explore Our Research',
                    'contactImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 384,
                'section_key' => 'technologyInnovation',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Support 24x7 Section 
            [
                'id' => 385,
                'section_key' => 'support24x7',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => [
                        'backgroundColor' => 'bg-amber-100 dark:bg-amber-900/30',
                        'borderColor' => 'border-amber-200 dark:border-amber-800',
                        'showPulse' => true,
                        'textColor' => 'text-amber-700 dark:text-amber-300',
                        'text' => 'We\'re Here 24/7'
                    ],
                    'title' => [
                        'prefix' => 'Around-the-Clock',
                        'highlightGradient' => 'from-amber-600 to-orange-600',
                        'highlightedText' => 'Expert Support',
                        'suffix' => 'When You Need It Most'
                    ],
                    'description' => 'Your business never sleeps, and neither does our support team. Whether it\'s 2 PM or 2 AM, our technical experts are ready to help with real-time assistance across every channel.',
                    'heroImage' => 'https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=1200&h=500&fit=crop',
                    'stats' => [
                        ['icon' => 'clock', 'value' => '< 90s', 'label' => 'Avg. Response'],
                        ['icon' => 'users', 'value' => '98%', 'label' => 'CSAT Score'],
                        ['icon' => 'headset', 'value' => '24/7', 'label' => 'Live Coverage'],
                        ['icon' => 'message', 'value' => '15min', 'label' => 'P1 Response SLA']
                    ],
                    'emergencyNumber' => '+1 (888) 555-0123',
                    'emergencyImage' => 'https://images.unsplash.com/photo-1557425493-6f90ae4659fc?w=600&h=400&fit=crop',
                    'supportChannels' => [
                        [
                            'icon' => 'chat',
                            'title' => 'Live Chat',
                            'description' => 'Instant messaging with support engineers',
                            'availability' => '24/7 • < 90s response',
                            'link' => '/support/chat',
                            'buttonText' => 'Start Chat',
                            'image' => 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=400&h=300&fit=crop'
                        ],
                        [
                            'icon' => 'phone',
                            'title' => 'Phone Support',
                            'description' => 'Speak directly with a technical expert',
                            'availability' => '24/7 • Enterprise priority queue',
                            'link' => '/support/phone',
                            'buttonText' => 'Call Now',
                            'image' => 'https://images.unsplash.com/photo-1557425493-6f90ae4659fc?w=400&h=300&fit=crop'
                        ],
                        [
                            'icon' => 'mail',
                            'title' => 'Email Support',
                            'description' => 'Get detailed responses within SLA',
                            'availability' => '24/7 • 2hr response',
                            'link' => '/support/email',
                            'buttonText' => 'Send Email',
                            'image' => 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=400&h=300&fit=crop'
                        ]
                    ],
                    'slas' => [
                        ['plan' => 'Standard', 'responseTime' => '< 2 hours', 'description' => 'Business hours support'],
                        ['plan' => 'Professional', 'responseTime' => '< 30 min', 'description' => '24/5 coverage'],
                        ['plan' => 'Enterprise', 'responseTime' => '< 15 min', 'description' => '24/7 dedicated team']
                    ],
                    'faqCategories' => [
                        ['id' => 'response', 'icon' => 'clock', 'name' => 'Response Times'],
                        ['id' => 'channels', 'icon' => 'headset', 'name' => 'Support Channels'],
                        ['id' => 'sla', 'icon' => 'shield', 'name' => 'SLA & Guarantees']
                    ],
                    'faqs' => [
                        [
                            'id' => 1,
                            'category' => 'response',
                            'icon' => 'clock',
                            'question' => 'What\'s the average response time for critical issues?',
                            'answer' => 'For P1 (Critical) issues affecting production, our median response time is 90 seconds via live chat. Enterprise customers have a guaranteed 15-minute response SLA with automatic escalation if missed. We publish our response metrics monthly.',
                            'tags' => ['Response Time', 'SLA', 'Critical'],
                            'link' => '/support-sla',
                            'updatedAt' => '2025-01-15',
                            'views' => 1250
                        ],
                        [
                            'id' => 2,
                            'category' => 'channels',
                            'icon' => 'headset',
                            'question' => 'Can I get phone support on weekends?',
                            'answer' => 'Yes. Phone support is available 24/7 for all customers, with priority queue for Professional and Enterprise plans. Weekend calls are routed to our global support centers in US, EU, and APAC regions.',
                            'tags' => ['Phone', 'Weekend', 'Availability'],
                            'link' => '/phone-support',
                            'updatedAt' => '2025-01-20',
                            'views' => 980
                        ],
                        [
                            'id' => 3,
                            'category' => 'sla',
                            'icon' => 'shield',
                            'question' => 'What happens if you miss your SLA response time?',
                            'answer' => 'We automatically credit your account: 10% of monthly fee per missed SLA window, up to 50%. Credits are applied within 5 business days. We\'ve paid credits exactly twice in 3 years—both for under 15 minutes.',
                            'tags' => ['SLA', 'Credits', 'Guarantee'],
                            'link' => '/sla-credits',
                            'updatedAt' => '2025-01-10',
                            'views' => 750
                        ]
                    ],
                    'callbackText' => 'Can\'t reach us? Leave your number and we\'ll call you back within 30 minutes during business hours.',
                    'contactText' => 'Need immediate assistance? Our support team is ready 24/7.',
                    'contactLink' => '/support/chat',
                    'contactButtonText' => 'Start Live Chat',
                    'contactImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop',
                    'showGuarantee' => true,
                    'guaranteeText' => 'All support requests receive a response within SLA timeframe. Enterprise customers get priority 1-hour response with automatic escalation.'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 386,
                'section_key' => 'support24x7',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => [
                        'backgroundColor' => 'bg-emerald-100 dark:bg-emerald-900/30',
                        'borderColor' => 'border-emerald-200 dark:border-emerald-800',
                        'showPulse' => true,
                        'textColor' => 'text-emerald-700 dark:text-emerald-300',
                        'text' => 'We\'ve Got Your Back'
                    ],
                    'title' => [
                        'prefix' => 'Enterprise-Grade',
                        'highlightGradient' => 'from-emerald-600 to-teal-600',
                        'highlightedText' => 'Ticket Management',
                        'suffix' => 'System'
                    ],
                    'description' => 'From critical emergencies to routine inquiries, our centralized ticket system ensures every support request is tracked, prioritized, and resolved within guaranteed SLAs. Submit, track, and manage all your support interactions in one place.',
                    'heroImage' => 'https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=1200&h=500&fit=crop',
                    'stats' => [
                        ['icon' => 'ticket', 'value' => '99.9%', 'label' => 'SLA Compliance'],
                        ['icon' => 'clock', 'value' => '< 90s', 'label' => 'P1 Response'],
                        ['icon' => 'users', 'value' => '98%', 'label' => 'CSAT Score'],
                        ['icon' => 'headset', 'value' => '24/7', 'label' => 'Coverage']
                    ],
                    'emergencyNumber' => '+1 (888) 555-0199',
                    'supportChannels' => [
                        ['icon' => 'chat', 'title' => 'Live Chat', 'description' => 'Instant messaging with support engineers', 'availability' => '24/7 • < 90s response', 'link' => '/support/chat', 'buttonText' => 'Start Chat'],
                        ['icon' => 'phone', 'title' => 'Phone Support', 'description' => 'Speak directly with a technical expert', 'availability' => '24/7 • Enterprise priority', 'link' => '/support/phone', 'buttonText' => 'Call Now'],
                        ['icon' => 'mail', 'title' => 'Email Support', 'description' => 'Get detailed responses within SLA', 'availability' => '24/7 • 2hr response', 'link' => '/support/email', 'buttonText' => 'Send Email']
                    ],
                    'slas' => [
                        ['plan' => 'Standard', 'responseTime' => '< 4 hours', 'description' => 'Business hours support'],
                        ['plan' => 'Professional', 'responseTime' => '< 1 hour', 'description' => '24/5 coverage'],
                        ['plan' => 'Enterprise', 'responseTime' => '< 15 min', 'description' => '24/7 dedicated team']
                    ],
                    'ticketCategories' => [
                        ['value' => 'technical', 'label' => 'Technical Issue'],
                        ['value' => 'billing', 'label' => 'Billing Question'],
                        ['value' => 'feature', 'label' => 'Feature Request'],
                        ['value' => 'integration', 'label' => 'Integration Help'],
                        ['value' => 'account', 'label' => 'Account Management']
                    ],
                    'faqCategories' => [
                        ['id' => 'ticketing', 'icon' => 'ticket', 'name' => 'Ticketing System'],
                        ['id' => 'slas', 'icon' => 'shield', 'name' => 'SLA & Escalation'],
                        ['id' => 'status', 'icon' => 'search', 'name' => 'Ticket Status']
                    ],
                    'faqs' => [
                        [
                            'id' => 1,
                            'category' => 'ticketing',
                            'icon' => 'ticket',
                            'question' => 'What happens after I submit a support ticket?',
                            'answer' => 'You\'ll receive an automated confirmation email with your ticket number (format: TKT-XXXXX). Our system automatically routes the ticket based on category and priority. You\'ll get status updates at each stage: Received → In Review → Assigned → In Progress → Resolved. Response time SLA starts from submission.',
                            'tags' => ['Ticket', 'Process', 'Workflow'],
                            'link' => '/ticket-workflow',
                            'updatedAt' => '2025-01-18',
                            'views' => 1120
                        ],
                        [
                            'id' => 2,
                            'category' => 'slas',
                            'icon' => 'shield',
                            'question' => 'How does ticket escalation work for critical issues?',
                            'answer' => 'P1 (Critical) tickets automatically trigger our escalation protocol: 5min no response → page on-call engineer, 15min no response → page engineering manager, 30min no response → page VP of Engineering. We publish our escalation matrix and provide real-time status updates.',
                            'tags' => ['Escalation', 'P1', 'Critical'],
                            'link' => '/escalation-policy',
                            'updatedAt' => '2025-01-22',
                            'views' => 980
                        ],
                        [
                            'id' => 3,
                            'category' => 'status',
                            'icon' => 'search',
                            'question' => 'Can I check my ticket status online?',
                            'answer' => 'Yes. Enter your ticket number on our status portal for real-time updates including current stage, assigned engineer, estimated resolution time, and history of all interactions. Enterprise customers get a dedicated dashboard with analytics and SLAs.',
                            'tags' => ['Status', 'Tracking', 'Portal'],
                            'link' => '/ticket-status',
                            'updatedAt' => '2025-01-14',
                            'views' => 850
                        ]
                    ],
                    'guaranteeText' => 'All support tickets receive a response within SLA timeframe. Enterprise customers get priority 1-hour response with automatic escalation if missed.',
                    'contactText' => 'Need immediate assistance? Our support team is ready 24/7.',
                    'contactLink' => '/support/chat',
                    'contactButtonText' => 'Start Live Chat',
                    'contactImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop',
                    'showGuarantee' => true
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 387,
                'section_key' => 'support24x7',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'backgroundColor' => 'bg-rose-100 dark:bg-rose-900/30',
                        'borderColor' => 'border-rose-200 dark:border-rose-800',
                        'showPulse' => true,
                        'textColor' => 'text-rose-700 dark:text-rose-300',
                        'text' => 'Data-Driven Support'
                    ],
                    'title' => [
                        'prefix' => 'Intelligent',
                        'highlightGradient' => 'from-rose-600 to-pink-600',
                        'highlightedText' => 'Support Analytics',
                        'suffix' => 'Dashboard'
                    ],
                    'description' => 'Track every support interaction with real-time metrics, SLA compliance, customer satisfaction scores, and resolution trends. Our transparent dashboard shows you exactly how we\'re performing.',
                    'heroImage' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=500&fit=crop',
                    'stats' => [
                        ['icon' => 'clock', 'value' => '98%', 'label' => 'SLA Compliance'],
                        ['icon' => 'users', 'value' => '4.9/5', 'label' => 'CSAT Score'],
                        ['icon' => 'headset', 'value' => '90s', 'label' => 'Avg Response'],
                        ['icon' => 'ticket', 'value' => '15k+', 'label' => 'Tickets Resolved']
                    ],
                    'emergencyNumber' => '+1 (888) 555-0127',
                    'supportChannels' => [
                        ['icon' => 'chat', 'title' => 'Live Chat', 'description' => 'Instant messaging with support engineers', 'availability' => '24/7 • < 90s response', 'link' => '/support/chat', 'buttonText' => 'Start Chat'],
                        ['icon' => 'phone', 'title' => 'Phone Support', 'description' => 'Speak directly with a technical expert', 'availability' => '24/7 • Enterprise priority', 'link' => '/support/phone', 'buttonText' => 'Call Now'],
                        ['icon' => 'mail', 'title' => 'Email Support', 'description' => 'Get detailed responses within SLA', 'availability' => '24/7 • 2hr response', 'link' => '/support/email', 'buttonText' => 'Send Email']
                    ],
                    'slas' => [
                        ['plan' => 'Standard', 'responseTime' => '< 4 hours', 'description' => 'Business hours support'],
                        ['plan' => 'Professional', 'responseTime' => '< 1 hour', 'description' => '24/5 coverage'],
                        ['plan' => 'Enterprise', 'responseTime' => '< 15 min', 'description' => '24/7 dedicated team']
                    ],
                    'supportMetrics' => [
                        ['icon' => 'clock', 'value' => '98.5%', 'label' => 'SLA Compliance', 'description' => 'Rolling 12 months'],
                        ['icon' => 'users', 'value' => '4.92', 'label' => 'CSAT Score', 'description' => 'Out of 5'],
                        ['icon' => 'headset', 'value' => '89s', 'label' => 'Avg Response', 'description' => 'Median across all channels'],
                        ['icon' => 'ticket', 'value' => '99%', 'label' => 'Resolution Rate', 'description' => 'First contact']
                    ],
                    'ticketCategories' => [
                        ['value' => 'technical', 'label' => 'Technical Issue'],
                        ['value' => 'billing', 'label' => 'Billing Question'],
                        ['value' => 'feature', 'label' => 'Feature Request'],
                        ['value' => 'integration', 'label' => 'Integration Help'],
                        ['value' => 'account', 'label' => 'Account Management']
                    ],
                    'faqCategories' => [
                        ['id' => 'metrics', 'icon' => 'chart', 'name' => 'Support Metrics'],
                        ['id' => 'sla', 'icon' => 'shield', 'name' => 'SLA Performance'],
                        ['id' => 'reporting', 'icon' => 'file', 'name' => 'Reporting']
                    ],
                    'faqs' => [
                        [
                            'id' => 1,
                            'category' => 'metrics',
                            'icon' => 'chart',
                            'question' => 'How is your CSAT score calculated?',
                            'answer' => 'CSAT is measured immediately after ticket resolution via a 1-5 scale survey. We report the average of all responses for the trailing 30 days. Our current CSAT of 4.92 is based on 2,847 responses over the last 12 months. We publish these metrics monthly in our transparency report.',
                            'tags' => ['CSAT', 'Metrics', 'Satisfaction'],
                            'link' => '/support-metrics',
                            'updatedAt' => '2025-01-19',
                            'views' => 1340
                        ],
                        [
                            'id' => 2,
                            'category' => 'sla',
                            'icon' => 'shield',
                            'question' => 'What\'s your SLA compliance by priority level?',
                            'answer' => 'P1 (Critical): 99.9% compliance, average response 90s. P2 (High): 99.5% compliance, average response 15min. P3 (Normal): 99.2% compliance, average response 2hrs. P4 (Low): 98.8% compliance, average response 8hrs. Full breakdown available on our status page.',
                            'tags' => ['SLA', 'Compliance', 'Priority'],
                            'link' => '/sla-performance',
                            'updatedAt' => '2025-01-25',
                            'views' => 1120
                        ],
                        [
                            'id' => 3,
                            'category' => 'reporting',
                            'icon' => 'file',
                            'question' => 'Can I get a custom support report for my account?',
                            'answer' => 'Yes. Enterprise customers receive monthly custom reports including ticket volume by category, average response/resolution times, SLA compliance, and CSAT breakdown. Reports can be filtered by team, product area, or time period. Available via the Support Analytics dashboard.',
                            'tags' => ['Reporting', 'Analytics', 'Custom'],
                            'link' => '/support-reports',
                            'updatedAt' => '2025-01-22',
                            'views' => 980
                        ]
                    ],
                    'reviewCount' => '2,847',
                    'guaranteeText' => 'All support tickets receive a response within SLA timeframe. Enterprise customers get priority 1-hour response with automatic escalation if missed.',
                    'contactText' => 'Need immediate assistance? Our support team is ready 24/7.',
                    'contactLink' => '/support/chat',
                    'contactButtonText' => 'Start Live Chat',
                    'contactImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop',
                    'showGuarantee' => true,
                    'dashboardImage' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 388,
                'section_key' => 'support24x7',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Global Reach Section 
            [
                'id' => 389,
                'section_key' => 'globalReach',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => [
                        'backgroundColor' => 'bg-indigo-100 dark:bg-indigo-900/30',
                        'borderColor' => 'border-indigo-200 dark:border-indigo-800',
                        'showPulse' => true,
                        'textColor' => 'text-indigo-700 dark:text-indigo-300',
                        'text' => 'Borderless Operations'
                    ],
                    'title' => [
                        'prefix' => 'Global',
                        'highlightGradient' => 'from-indigo-600 to-purple-600',
                        'highlightedText' => 'Infrastructure',
                        'suffix' => 'Powering Local Excellence'
                    ],
                    'description' => 'Your business spans continents, and so do we. With data centers across North America, Europe, Asia Pacific, and Latin America, we deliver sub-50ms latency and local compliance wherever you operate.',
                    'heroImage' => 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&h=500&fit=crop',
                    'stats' => [
                        ['icon' => 'cloud', 'value' => '15+', 'label' => 'Global Regions'],
                        ['icon' => 'database', 'value' => '50ms', 'label' => 'Avg Latency'],
                        ['icon' => 'users', 'value' => '75+', 'label' => 'Countries Served'],
                        ['icon' => 'language', 'value' => '12', 'label' => 'Languages Supported']
                    ],
                    'mapImage' => 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=500&fit=crop',
                    'regions' => [
                        ['id' => 'namerica', 'icon' => 'world-america', 'name' => 'North America', 'officeCount' => '5'],
                        ['id' => 'europe', 'icon' => 'world-europe', 'name' => 'Europe', 'officeCount' => '4'],
                        ['id' => 'apac', 'icon' => 'world-asia', 'name' => 'Asia Pacific', 'officeCount' => '3'],
                        ['id' => 'latam', 'icon' => 'world-south-america', 'name' => 'Latin America', 'officeCount' => '2']
                    ],
                    'offices' => [
                        ['region' => 'namerica', 'city' => 'San Francisco', 'country' => 'USA', 'address' => '548 Market St, Suite 12345', 'hours' => '9AM - 6PM PT', 'teamSize' => '45', 'mapLink' => '/maps/sf', 'image' => 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&h=400&fit=crop'],
                        ['region' => 'namerica', 'city' => 'New York', 'country' => 'USA', 'address' => '350 Fifth Ave, Floor 34', 'hours' => '9AM - 6PM ET', 'teamSize' => '32', 'mapLink' => '/maps/nyc', 'image' => 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&h=400&fit=crop'],
                        ['region' => 'europe', 'city' => 'London', 'country' => 'UK', 'address' => '123 Shoreditch High St', 'hours' => '9AM - 6PM GMT', 'teamSize' => '28', 'mapLink' => '/maps/london', 'image' => 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=400&fit=crop'],
                        ['region' => 'europe', 'city' => 'Berlin', 'country' => 'Germany', 'address' => 'Alexanderplatz 1', 'hours' => '9AM - 6PM CET', 'teamSize' => '24', 'mapLink' => '/maps/berlin', 'image' => 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&h=400&fit=crop'],
                        ['region' => 'apac', 'city' => 'Singapore', 'country' => 'Singapore', 'address' => '1 Marina Boulevard', 'hours' => '9AM - 6PM SGT', 'teamSize' => '35', 'mapLink' => '/maps/singapore', 'image' => 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600&h=400&fit=crop'],
                        ['region' => 'apac', 'city' => 'Sydney', 'country' => 'Australia', 'address' => '1 Martin Place', 'hours' => '9AM - 6PM AEST', 'teamSize' => '22', 'mapLink' => '/maps/sydney', 'image' => 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600&h=400&fit=crop'],
                        ['region' => 'latam', 'city' => 'São Paulo', 'country' => 'Brazil', 'address' => 'Av Paulista, 1000', 'hours' => '9AM - 6PM BRT', 'teamSize' => '18', 'mapLink' => '/maps/saopaulo', 'image' => 'https://images.unsplash.com/photo-1549208614-3d2cd153e2e3?w=600&h=400&fit=crop'],
                        ['region' => 'latam', 'city' => 'Mexico City', 'country' => 'Mexico', 'address' => 'Paseo de la Reforma 26', 'hours' => '9AM - 6PM CST', 'teamSize' => '15', 'mapLink' => '/maps/mexicocity', 'image' => 'https://images.unsplash.com/photo-1516307365426-bea591f05011?w=600&h=400&fit=crop']
                    ],
                    'languages' => ['English', 'Spanish', 'Portuguese', 'French', 'German', 'Italian', 'Dutch', 'Japanese', 'Korean', 'Mandarin', 'Hindi', 'Arabic'],
                    'faqCategories' => [
                        ['id' => 'regions', 'icon' => 'world', 'name' => 'Global Regions'],
                        ['id' => 'compliance', 'icon' => 'shield', 'name' => 'Data Compliance'],
                        ['id' => 'support', 'icon' => 'headset', 'name' => 'Local Support']
                    ],
                    'faqs' => [
                        [
                            'id' => 1,
                            'category' => 'regions',
                            'icon' => 'world',
                            'question' => 'Which regions have local data centers?',
                            'answer' => 'We operate data centers in US-East (Virginia), US-West (Oregon), EU-West (Ireland), EU-Central (Frankfurt), APAC-Southeast (Singapore), APAC-Northeast (Tokyo), and LATAM (São Paulo). All regions support active-active failover with sub-50ms latency to major metros.',
                            'tags' => ['Data Centers', 'Regions', 'Latency'],
                            'link' => '/data-centers',
                            'updatedAt' => '2025-01-15',
                            'views' => 1250
                        ],
                        [
                            'id' => 2,
                            'category' => 'compliance',
                            'icon' => 'shield',
                            'question' => 'How do you handle GDPR and data residency requirements?',
                            'answer' => 'We offer data residency options for EU, US, and APAC customers. Data can be pinned to specific regions with guaranteed no cross-border transfer. We maintain GDPR compliance, CCPA, and local data protection laws in all operating regions. SOC 2 Type II and ISO 27001 certified globally.',
                            'tags' => ['GDPR', 'Data Residency', 'Compliance'],
                            'link' => '/data-compliance',
                            'updatedAt' => '2025-01-20',
                            'views' => 980
                        ],
                        [
                            'id' => 3,
                            'category' => 'support',
                            'icon' => 'headset',
                            'question' => 'Do you offer local language support?',
                            'answer' => 'Yes. Our support team covers 12 languages with local business hours in each region. Live chat is available 24/7 in English, Spanish, Portuguese, French, German, and Japanese. Phone support in local languages during regional business hours.',
                            'tags' => ['Languages', 'Support', 'Local'],
                            'link' => '/language-support',
                            'updatedAt' => '2025-01-10',
                            'views' => 750
                        ]
                    ],
                    'contactText' => 'Ready to expand globally? Our team can help you scale across borders.',
                    'contactLink' => '/contact',
                    'contactButtonText' => 'Contact Global Team',
                    'contactImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 390,
                'section_key' => 'globalReach',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => [
                        'backgroundColor' => 'bg-cyan-100 dark:bg-cyan-900/30',
                        'borderColor' => 'border-cyan-200 dark:border-cyan-800',
                        'showPulse' => true,
                        'textColor' => 'text-cyan-700 dark:text-cyan-300',
                        'text' => 'Borderless Commerce'
                    ],
                    'title' => [
                        'prefix' => 'Global',
                        'highlightGradient' => 'from-cyan-600 to-blue-600',
                        'highlightedText' => 'Operations Hub',
                        'suffix' => 'Local Experience'
                    ],
                    'description' => 'Run your global inventory operations from a single platform with localized support for currencies, languages, tax compliance, and shipping carriers across 75+ countries.',
                    'heroImage' => 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&h=500&fit=crop',
                    'stats' => [
                        ['icon' => 'world', 'value' => '75+', 'label' => 'Countries Served'],
                        ['icon' => 'language', 'value' => '12', 'label' => 'Languages'],
                        ['icon' => 'dollar', 'value' => '35+', 'label' => 'Currencies'],
                        ['icon' => 'truck', 'value' => '50+', 'label' => 'Carrier Integrations']
                    ],
                    'regions' => [
                        ['id' => 'nam', 'icon' => 'world-america', 'name' => 'North America', 'officeCount' => '5'],
                        ['id' => 'emea', 'icon' => 'world-europe', 'name' => 'EMEA', 'officeCount' => '6'],
                        ['id' => 'apac', 'icon' => 'world-asia', 'name' => 'Asia Pacific', 'officeCount' => '4'],
                        ['id' => 'latam', 'icon' => 'world-south-america', 'name' => 'Latin America', 'officeCount' => '3']
                    ],
                    'offices' => [
                        ['region' => 'nam', 'city' => 'San Francisco', 'country' => 'USA', 'address' => '548 Market St, Suite 12345, San Francisco, CA 94104', 'hours' => '9AM - 6PM PT', 'teamSize' => '45', 'languages' => ['English', 'Spanish'], 'mapLink' => '/maps/sf', 'image' => 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&h=400&fit=crop'],
                        ['region' => 'nam', 'city' => 'New York', 'country' => 'USA', 'address' => '350 Fifth Ave, Floor 34, New York, NY 10118', 'hours' => '9AM - 6PM ET', 'teamSize' => '32', 'languages' => ['English', 'French'], 'mapLink' => '/maps/nyc', 'image' => 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&h=400&fit=crop'],
                        ['region' => 'nam', 'city' => 'Toronto', 'country' => 'Canada', 'address' => '1 King St W, Toronto, ON M5H 1A1', 'hours' => '9AM - 6PM ET', 'teamSize' => '18', 'languages' => ['English', 'French'], 'mapLink' => '/maps/toronto', 'image' => 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=600&h=400&fit=crop'],
                        ['region' => 'emea', 'city' => 'London', 'country' => 'UK', 'address' => '123 Shoreditch High St, London, E1 6JE', 'hours' => '9AM - 6PM GMT', 'teamSize' => '28', 'languages' => ['English', 'French', 'German'], 'mapLink' => '/maps/london', 'image' => 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=400&fit=crop'],
                        ['region' => 'emea', 'city' => 'Berlin', 'country' => 'Germany', 'address' => 'Alexanderplatz 1, 10178 Berlin', 'hours' => '9AM - 6PM CET', 'teamSize' => '24', 'languages' => ['German', 'English', 'Polish'], 'mapLink' => '/maps/berlin', 'image' => 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&h=400&fit=crop'],
                        ['region' => 'emea', 'city' => 'Paris', 'country' => 'France', 'address' => '15 Rue de la Paix, 75002 Paris', 'hours' => '9AM - 6PM CET', 'teamSize' => '22', 'languages' => ['French', 'English', 'Arabic'], 'mapLink' => '/maps/paris', 'image' => 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&h=400&fit=crop'],
                        ['region' => 'apac', 'city' => 'Singapore', 'country' => 'Singapore', 'address' => '1 Marina Boulevard, Singapore 018989', 'hours' => '9AM - 6PM SGT', 'teamSize' => '35', 'languages' => ['English', 'Mandarin', 'Malay'], 'mapLink' => '/maps/singapore', 'image' => 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600&h=400&fit=crop'],
                        ['region' => 'apac', 'city' => 'Sydney', 'country' => 'Australia', 'address' => '1 Martin Place, Sydney NSW 2000', 'hours' => '9AM - 6PM AEST', 'teamSize' => '22', 'languages' => ['English'], 'mapLink' => '/maps/sydney', 'image' => 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600&h=400&fit=crop'],
                        ['region' => 'apac', 'city' => 'Tokyo', 'country' => 'Japan', 'address' => '2-3-1 Marunouchi, Chiyoda-ku, Tokyo 100-0005', 'hours' => '9AM - 6PM JST', 'teamSize' => '30', 'languages' => ['Japanese', 'English'], 'mapLink' => '/maps/tokyo', 'image' => 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&h=400&fit=crop'],
                        ['region' => 'latam', 'city' => 'São Paulo', 'country' => 'Brazil', 'address' => 'Av Paulista, 1000, São Paulo - SP, 01310-100', 'hours' => '9AM - 6PM BRT', 'teamSize' => '18', 'languages' => ['Portuguese', 'English', 'Spanish'], 'mapLink' => '/maps/saopaulo', 'image' => 'https://images.unsplash.com/photo-1549208614-3d2cd153e2e3?w=600&h=400&fit=crop'],
                        ['region' => 'latam', 'city' => 'Mexico City', 'country' => 'Mexico', 'address' => 'Paseo de la Reforma 26, Juárez, Cuauhtémoc, 06600 CDMX', 'hours' => '9AM - 6PM CST', 'teamSize' => '15', 'languages' => ['Spanish', 'English'], 'mapLink' => '/maps/mexicocity', 'image' => 'https://images.unsplash.com/photo-1516307365426-bea591f05011?w=600&h=400&fit=crop'],
                        ['region' => 'latam', 'city' => 'Buenos Aires', 'country' => 'Argentina', 'address' => 'Av. Corrientes 818, C1043 CABA', 'hours' => '9AM - 6PM ART', 'teamSize' => '12', 'languages' => ['Spanish', 'English', 'Italian'], 'mapLink' => '/maps/buenosaires', 'image' => 'https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=600&h=400&fit=crop']
                    ],
                    'languages' => ['English', 'Spanish', 'Portuguese', 'French', 'German', 'Italian', 'Dutch', 'Japanese', 'Korean', 'Mandarin', 'Hindi', 'Arabic'],
                    'currencies' => ['USD', 'EUR', 'GBP', 'CAD', 'AUD', 'JPY', 'CNY', 'BRL', 'MXN', 'SGD', 'CHF', 'NZD', 'KRW', 'ZAR', 'SEK', 'NOK', 'DKK', 'PLN', 'TRY', 'AED', 'SAR', 'HKD', 'TWD', 'THB', 'VND', 'MYR', 'PHP', 'IDR', 'ILS', 'CLP', 'COP', 'PEN', 'ARS', 'UYU'],
                    'faqCategories' => [
                        ['id' => 'localization', 'icon' => 'language', 'name' => 'Localization'],
                        ['id' => 'shipping', 'icon' => 'truck', 'name' => 'Global Shipping'],
                        ['id' => 'taxes', 'icon' => 'tax', 'name' => 'Tax Compliance']
                    ],
                    'faqs' => [
                        [
                            'id' => 1,
                            'category' => 'localization',
                            'icon' => 'language',
                            'question' => 'Can I display product prices in local currencies?',
                            'answer' => 'Yes. Our platform supports 35+ currencies with real-time exchange rate updates. Customers see prices in their local currency, and you can set rounding rules, display preferences, and multi-currency reporting. Exchange rates update every 6 hours from reliable financial data providers.',
                            'tags' => ['Currencies', 'Pricing', 'Localization'],
                            'link' => '/multi-currency',
                            'updatedAt' => '2025-01-18',
                            'views' => 1120
                        ],
                        [
                            'id' => 2,
                            'category' => 'shipping',
                            'icon' => 'truck',
                            'question' => 'Which carriers do you integrate with internationally?',
                            'answer' => 'We integrate with 50+ global and regional carriers including FedEx, UPS, DHL, USPS, Canada Post, Royal Mail, Deutsche Post, La Poste, Australia Post, Japan Post, Singapore Post, and many more. Our carrier API automatically selects the cheapest shipping option based on destination, weight, and delivery speed requirements.',
                            'tags' => ['Shipping', 'Carriers', 'Integration'],
                            'link' => '/carrier-integrations',
                            'updatedAt' => '2025-01-22',
                            'views' => 980
                        ],
                        [
                            'id' => 3,
                            'category' => 'taxes',
                            'icon' => 'tax',
                            'question' => 'How do you handle international tax compliance?',
                            'answer' => 'We integrate with tax compliance providers (Avalara, TaxJar) to automatically calculate VAT, GST, HST, and sales tax for 100+ jurisdictions. Our system handles tax code mapping, exemption certificates, and generates tax-ready reports for filing. We support digital goods tax rules for EU, UK, and other regions.',
                            'tags' => ['Tax', 'VAT', 'GST', 'Compliance'],
                            'link' => '/tax-compliance',
                            'updatedAt' => '2025-01-14',
                            'views' => 850
                        ]
                    ],
                    'contactText' => 'Ready to expand globally? Our team can help you scale across borders.',
                    'contactLink' => '/contact',
                    'contactButtonText' => 'Contact Global Team',
                    'contactImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 391,
                'section_key' => 'globalReach',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'backgroundColor' => 'bg-teal-100 dark:bg-teal-900/30',
                        'borderColor' => 'border-teal-200 dark:border-teal-800',
                        'showPulse' => true,
                        'textColor' => 'text-teal-700 dark:text-teal-300',
                        'text' => 'Worldwide Presence'
                    ],
                    'title' => [
                        'prefix' => 'Borderless',
                        'highlightGradient' => 'from-teal-600 to-emerald-600',
                        'highlightedText' => 'Global Operations',
                        'suffix' => 'Local Impact'
                    ],
                    'description' => 'From San Francisco to Singapore, our global team delivers local expertise, language support, and 24/7 coverage across time zones. See how we\'re helping businesses succeed worldwide.',
                    'heroImage' => 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&h=500&fit=crop',
                    'stats' => [
                        ['icon' => 'world', 'value' => '75+', 'label' => 'Countries Served'],
                        ['icon' => 'language', 'value' => '12', 'label' => 'Languages'],
                        ['icon' => 'dollar', 'value' => '35+', 'label' => 'Currencies'],
                        ['icon' => 'users', 'value' => '200+', 'label' => 'Global Team Members']
                    ],
                    'regions' => [
                        ['id' => 'nam', 'icon' => 'world-america', 'name' => 'North America', 'officeCount' => '5'],
                        ['id' => 'emea', 'icon' => 'world-europe', 'name' => 'EMEA', 'officeCount' => '6'],
                        ['id' => 'apac', 'icon' => 'world-asia', 'name' => 'Asia Pacific', 'officeCount' => '4'],
                        ['id' => 'latam', 'icon' => 'world-south-america', 'name' => 'Latin America', 'officeCount' => '3']
                    ],
                    'offices' => [
                        ['region' => 'nam', 'city' => 'San Francisco', 'country' => 'USA', 'address' => '548 Market St, Suite 12345, San Francisco, CA 94104', 'hours' => '9AM - 6PM PT', 'teamSize' => '45', 'languages' => ['English', 'Spanish', 'Mandarin'], 'mapLink' => '/maps/sf', 'image' => 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&h=400&fit=crop'],
                        ['region' => 'nam', 'city' => 'New York', 'country' => 'USA', 'address' => '350 Fifth Ave, Floor 34, New York, NY 10118', 'hours' => '9AM - 6PM ET', 'teamSize' => '32', 'languages' => ['English', 'French', 'Spanish'], 'mapLink' => '/maps/nyc', 'image' => 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&h=400&fit=crop'],
                        ['region' => 'nam', 'city' => 'Toronto', 'country' => 'Canada', 'address' => '1 King St W, Toronto, ON M5H 1A1', 'hours' => '9AM - 6PM ET', 'teamSize' => '18', 'languages' => ['English', 'French'], 'mapLink' => '/maps/toronto', 'image' => 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=600&h=400&fit=crop'],
                        ['region' => 'emea', 'city' => 'London', 'country' => 'UK', 'address' => '123 Shoreditch High St, London, E1 6JE', 'hours' => '9AM - 6PM GMT', 'teamSize' => '28', 'languages' => ['English', 'French', 'German', 'Polish'], 'mapLink' => '/maps/london', 'image' => 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=400&fit=crop'],
                        ['region' => 'emea', 'city' => 'Berlin', 'country' => 'Germany', 'address' => 'Alexanderplatz 1, 10178 Berlin', 'hours' => '9AM - 6PM CET', 'teamSize' => '24', 'languages' => ['German', 'English', 'Turkish', 'Polish'], 'mapLink' => '/maps/berlin', 'image' => 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&h=400&fit=crop'],
                        ['region' => 'emea', 'city' => 'Paris', 'country' => 'France', 'address' => '15 Rue de la Paix, 75002 Paris', 'hours' => '9AM - 6PM CET', 'teamSize' => '22', 'languages' => ['French', 'English', 'Arabic', 'Spanish'], 'mapLink' => '/maps/paris', 'image' => 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&h=400&fit=crop'],
                        ['region' => 'emea', 'city' => 'Dubai', 'country' => 'UAE', 'address' => 'Dubai Internet City, Building 1, Dubai', 'hours' => '9AM - 6PM GST', 'teamSize' => '15', 'languages' => ['English', 'Arabic', 'Urdu', 'Hindi'], 'mapLink' => '/maps/dubai', 'image' => 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&h=400&fit=crop'],
                        ['region' => 'apac', 'city' => 'Singapore', 'country' => 'Singapore', 'address' => '1 Marina Boulevard, Singapore 018989', 'hours' => '9AM - 6PM SGT', 'teamSize' => '35', 'languages' => ['English', 'Mandarin', 'Malay', 'Tamil'], 'mapLink' => '/maps/singapore', 'image' => 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600&h=400&fit=crop'],
                        ['region' => 'apac', 'city' => 'Sydney', 'country' => 'Australia', 'address' => '1 Martin Place, Sydney NSW 2000', 'hours' => '9AM - 6PM AEST', 'teamSize' => '22', 'languages' => ['English', 'Mandarin', 'Vietnamese'], 'mapLink' => '/maps/sydney', 'image' => 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600&h=400&fit=crop'],
                        ['region' => 'apac', 'city' => 'Tokyo', 'country' => 'Japan', 'address' => '2-3-1 Marunouchi, Chiyoda-ku, Tokyo 100-0005', 'hours' => '9AM - 6PM JST', 'teamSize' => '30', 'languages' => ['Japanese', 'English', 'Korean', 'Chinese'], 'mapLink' => '/maps/tokyo', 'image' => 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&h=400&fit=crop'],
                        ['region' => 'apac', 'city' => 'Mumbai', 'country' => 'India', 'address' => 'Bandra Kurla Complex, Mumbai 400051', 'hours' => '9AM - 6PM IST', 'teamSize' => '45', 'languages' => ['Hindi', 'English', 'Marathi', 'Gujarati', 'Tamil'], 'mapLink' => '/maps/mumbai', 'image' => 'https://images.unsplash.com/photo-1529255484355-cb73c25c4e7a?w=600&h=400&fit=crop'],
                        ['region' => 'latam', 'city' => 'São Paulo', 'country' => 'Brazil', 'address' => 'Av Paulista, 1000, São Paulo - SP, 01310-100', 'hours' => '9AM - 6PM BRT', 'teamSize' => '18', 'languages' => ['Portuguese', 'English', 'Spanish'], 'mapLink' => '/maps/saopaulo', 'image' => 'https://images.unsplash.com/photo-1549208614-3d2cd153e2e3?w=600&h=400&fit=crop'],
                        ['region' => 'latam', 'city' => 'Mexico City', 'country' => 'Mexico', 'address' => 'Paseo de la Reforma 26, Juárez, Cuauhtémoc, 06600 CDMX', 'hours' => '9AM - 6PM CST', 'teamSize' => '15', 'languages' => ['Spanish', 'English', 'Nahuatl'], 'mapLink' => '/maps/mexicocity', 'image' => 'https://images.unsplash.com/photo-1516307365426-bea591f05011?w=600&h=400&fit=crop'],
                        ['region' => 'latam', 'city' => 'Buenos Aires', 'country' => 'Argentina', 'address' => 'Av. Corrientes 818, C1043 CABA', 'hours' => '9AM - 6PM ART', 'teamSize' => '12', 'languages' => ['Spanish', 'English', 'Italian', 'Portuguese'], 'mapLink' => '/maps/buenosaires', 'image' => 'https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=600&h=400&fit=crop']
                    ],
                    'languages' => ['English', 'Spanish', 'Portuguese', 'French', 'German', 'Italian', 'Dutch', 'Japanese', 'Korean', 'Mandarin', 'Cantonese', 'Hindi', 'Arabic', 'Turkish', 'Polish', 'Vietnamese', 'Thai', 'Swedish', 'Danish', 'Finnish', 'Norwegian'],
                    'currencies' => ['USD', 'EUR', 'GBP', 'CAD', 'AUD', 'JPY', 'CNY', 'INR', 'BRL', 'MXN', 'SGD', 'CHF', 'NZD', 'KRW', 'ZAR', 'SEK', 'NOK', 'DKK', 'PLN', 'TRY', 'AED', 'SAR', 'HKD', 'TWD', 'THB', 'VND', 'MYR', 'PHP', 'IDR', 'ILS', 'CLP', 'COP', 'PEN', 'ARS', 'UYU'],
                    'testimonials' => [
                        ['icon' => 'user', 'quote' => 'The local support in Singapore has been incredible. They understand our market and respond within minutes, not hours.', 'name' => 'Wei Lin Tan', 'role' => 'Operations Director', 'company' => 'Lazada Logistics', 'country' => 'Singapore', 'result' => '99.9% uptime achieved', 'image' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'],
                        ['icon' => 'user', 'quote' => 'Having a London office means we get real-time support during our business hours. No more waiting for US time zones.', 'name' => 'James Wilkinson', 'role' => 'Supply Chain VP', 'company' => 'ASOS', 'country' => 'United Kingdom', 'result' => '47% faster resolution', 'image' => 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop'],
                        ['icon' => 'user', 'quote' => 'The São Paulo team understands Brazilian tax complexity. They\'ve saved us months of compliance headaches.', 'name' => 'Ricardo Almeida', 'role' => 'CFO', 'company' => 'Magazine Luiza', 'country' => 'Brazil', 'result' => '100% tax compliance', 'image' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop']
                    ],
                    'videos' => [
                        ['title' => 'How ASOS Scaled Global Operations', 'author' => 'James Wilkinson', 'company' => 'ASOS', 'country' => 'UK', 'url' => '/videos/asos-global.mp4', 'thumbnail' => 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=300&fit=crop'],
                        ['title' => 'From Singapore to the World', 'author' => 'Wei Lin Tan', 'company' => 'Lazada Logistics', 'country' => 'Singapore', 'url' => '/videos/lazada-global.mp4', 'thumbnail' => 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400&h=300&fit=crop']
                    ],
                    'globalEvents' => [
                        ['icon' => 'calendar', 'title' => 'Global Supply Chain Summit', 'date' => 'May 15-17, 2024', 'location' => 'Singapore', 'description' => 'Join industry leaders discussing cross-border inventory optimization and AI-driven forecasting.', 'link' => '/events/singapore-summit', 'image' => 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600&h=400&fit=crop'],
                        ['icon' => 'calendar', 'title' => 'EMEA User Conference', 'date' => 'June 5-6, 2024', 'location' => 'London, UK', 'description' => 'Network with regional customers and learn best practices for European inventory management.', 'link' => '/events/london-conference', 'image' => 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=400&fit=crop'],
                        ['icon' => 'calendar', 'title' => 'Latin America Logistics Forum', 'date' => 'July 10-11, 2024', 'location' => 'São Paulo, Brazil', 'description' => 'Deep dive into Brazilian tax compliance and cross-border shipping solutions.', 'link' => '/events/saopaulo-forum', 'image' => 'https://images.unsplash.com/photo-1549208614-3d2cd153e2e3?w=600&h=400&fit=crop']
                    ],
                    'faqCategories' => [
                        ['id' => 'localization', 'icon' => 'language', 'name' => 'Localization'],
                        ['id' => 'compliance', 'icon' => 'shield', 'name' => 'Global Compliance'],
                        ['id' => 'support', 'icon' => 'headset', 'name' => 'Regional Support']
                    ],
                    'faqs' => [
                        [
                            'id' => 1,
                            'category' => 'localization',
                            'icon' => 'language',
                            'question' => 'Can I display product information in local languages?',
                            'answer' => 'Yes. Our platform supports 21+ languages for UI, product descriptions, and customer notifications. Language detection auto-selects based on browser settings or customer location. All content fields support multi-language input with fallback rules.',
                            'tags' => ['Localization', 'Languages', 'UI'],
                            'link' => '/localization',
                            'updatedAt' => '2025-01-19',
                            'views' => 1340
                        ],
                        [
                            'id' => 2,
                            'category' => 'compliance',
                            'icon' => 'shield',
                            'question' => 'How do you handle VAT/GST across different regions?',
                            'answer' => 'We integrate with Avalara and TaxJar to automatically calculate VAT, GST, HST, and sales tax for 100+ jurisdictions. The system handles reverse charge, digital services tax, and marketplace facilitator rules. We generate tax-ready reports for filing in each jurisdiction.',
                            'tags' => ['VAT', 'GST', 'Tax Compliance'],
                            'link' => '/tax-compliance',
                            'updatedAt' => '2025-01-25',
                            'views' => 1120
                        ],
                        [
                            'id' => 3,
                            'category' => 'support',
                            'icon' => 'headset',
                            'question' => 'What are your support hours in Asia Pacific?',
                            'answer' => 'Our Singapore and Tokyo offices provide local business hours support (9AM-6PM SGT/JST) plus 24/7 emergency coverage. Support is available in English, Mandarin, Japanese, Korean, and Thai during regional hours.',
                            'tags' => ['Support', 'APAC', 'Hours'],
                            'link' => '/apac-support',
                            'updatedAt' => '2025-01-22',
                            'views' => 980
                        ]
                    ],
                    'contactText' => 'Ready to expand globally? Our team can help you scale across borders.',
                    'contactLink' => '/contact',
                    'contactButtonText' => 'Contact Global Team',
                    'contactImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 392,
                'section_key' => 'globalReach',
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
