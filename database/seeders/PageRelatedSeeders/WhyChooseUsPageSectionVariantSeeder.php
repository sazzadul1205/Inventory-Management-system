<?php

namespace Database\Seeders\PageRelatedSeeders;

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

        ];

        // Add the new Services variants
        DB::table('section_variants')->upsert(
            $variants,
            ['section_key', 'variant'],
            ['config', 'updated_at']
        );
    }
}
