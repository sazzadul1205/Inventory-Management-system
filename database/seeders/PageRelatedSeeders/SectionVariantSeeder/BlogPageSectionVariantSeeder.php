<?php

namespace Database\Seeders\PageRelatedSeeders\SectionVariantSeeder;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BlogPageSectionVariantSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Upsert only this page's variants so other page seeders do not get wiped out.
        $variants = [

            // Industry Insights Section
            [
                'id' => 393,
                'section_key' => 'industryInsights',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => [
                        'backgroundColor' => 'bg-emerald-100 dark:bg-emerald-900/30',
                        'borderColor' => 'border-emerald-200 dark:border-emerald-800',
                        'textColor' => 'text-emerald-700 dark:text-emerald-300',
                        'text' => 'Industry Pulse',
                        'showPulse' => true,
                        'icon' => 'trending'
                    ],
                    'title' => [
                        'prefix' => '',
                        'highlightedText' => 'Industry Insights',
                        'suffix' => 'That Drive Results',
                        'highlightGradient' => 'from-emerald-600 to-teal-600'
                    ],
                    'description' => 'Cutting-edge analysis, expert perspectives, and actionable strategies to keep your business ahead of the curve.',
                    'heroImage' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=500&fit=crop',
                    'featuredArticle' => [
                        'id' => 'feat-001',
                        'title' => 'The Future of Supply Chain: AI-Driven Predictive Inventory',
                        'excerpt' => 'Discover how leading enterprises are leveraging artificial intelligence to predict demand with 94% accuracy, reduce carrying costs, and prevent stockouts before they happen.',
                        'content' => 'Full article content here...',
                        'image' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
                        'category' => 'AI & Automation',
                        'publishDate' => '2024-03-15',
                        'link' => '/blog/future-supply-chain-ai',
                        'author' => [
                            'name' => 'Dr. Sarah Chen',
                            'role' => 'Chief Innovation Officer',
                            'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
                        ]
                    ],
                    'articles' => [
                        [
                            'id' => 'art-001',
                            'title' => 'Navigating Global Trade Compliance in 2024',
                            'excerpt' => 'A comprehensive guide to changing regulations, tariff strategies, and cross-border inventory optimization for multinational operations.',
                            'content' => 'Full article content here...',
                            'image' => 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop',
                            'category' => 'Compliance',
                            'publishDate' => '2024-03-10',
                            'readTime' => '1.2k',
                            'isTrending' => true,
                            'link' => '/blog/global-trade-compliance-2024',
                            'author' => [
                                'name' => 'Michael Torres',
                                'role' => 'Trade Compliance Expert',
                                'avatar' => 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop'
                            ]
                        ],
                        [
                            'id' => 'art-002',
                            'title' => 'Omnichannel Inventory Synchronization Best Practices',
                            'excerpt' => 'How top retailers are breaking down silos between physical and digital channels to achieve unified commerce and real-time inventory visibility.',
                            'content' => 'Full article content here...',
                            'image' => 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop',
                            'category' => 'Retail Strategy',
                            'publishDate' => '2024-03-05',
                            'readTime' => '890',
                            'isTrending' => false,
                            'link' => '/blog/omnichannel-inventory-best-practices',
                            'author' => [
                                'name' => 'Jessica Wu',
                                'role' => 'Retail Solutions Lead',
                                'avatar' => 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=80&h=80&fit=crop'
                            ]
                        ],
                        [
                            'id' => 'art-003',
                            'title' => 'Sustainable Inventory: Reducing Waste Through Predictive Analytics',
                            'excerpt' => 'Learn how data-driven forecasting can dramatically reduce overstock waste, lower carbon footprint, and improve sustainability metrics.',
                            'content' => 'Full article content here...',
                            'image' => 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop',
                            'category' => 'Sustainability',
                            'publishDate' => '2024-02-28',
                            'readTime' => '2.1k',
                            'isTrending' => true,
                            'link' => '/blog/sustainable-inventory-predictive-analytics',
                            'author' => [
                                'name' => 'David Kim',
                                'role' => 'Sustainability Director',
                                'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop'
                            ]
                        ],
                        [
                            'id' => 'art-004',
                            'title' => 'The Rise of Headless Commerce and Inventory APIs',
                            'excerpt' => 'Exploring how API-first architecture is enabling unprecedented flexibility in inventory management across disparate sales channels.',
                            'content' => 'Full article content here...',
                            'image' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop',
                            'category' => 'Technology',
                            'publishDate' => '2024-02-22',
                            'readTime' => '980',
                            'isTrending' => false,
                            'link' => '/blog/headless-commerce-inventory-apis',
                            'author' => [
                                'name' => 'Alex Rivera',
                                'role' => 'Principal Architect',
                                'avatar' => 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop'
                            ]
                        ],
                        [
                            'id' => 'art-005',
                            'title' => '3PL Selection Framework: Key Metrics That Matter',
                            'excerpt' => 'A data-driven approach to evaluating third-party logistics partners based on fill rates, cycle times, and cost-to-serve analytics.',
                            'content' => 'Full article content here...',
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop',
                            'category' => 'Logistics',
                            'publishDate' => '2024-02-18',
                            'readTime' => '1.5k',
                            'isTrending' => false,
                            'link' => '/blog/3pl-selection-framework',
                            'author' => [
                                'name' => 'Rachel Okonkwo',
                                'role' => 'Logistics Strategist',
                                'avatar' => 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop'
                            ]
                        ],
                        [
                            'id' => 'art-006',
                            'title' => 'Inventory Turnover Benchmarks by Industry',
                            'excerpt' => 'Latest data on average inventory turnover ratios across manufacturing, retail, wholesale, and e-commerce sectors with improvement strategies.',
                            'content' => 'Full article content here...',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
                            'category' => 'Analytics',
                            'publishDate' => '2024-02-12',
                            'readTime' => '1.8k',
                            'isTrending' => false,
                            'link' => '/blog/inventory-turnover-benchmarks',
                            'author' => [
                                'name' => 'Dr. Emily Park',
                                'role' => 'Data Science Lead',
                                'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop'
                            ]
                        ]
                    ],
                    'categories' => [
                        ['id' => 'all', 'label' => 'All Insights'],
                        ['id' => 'ai', 'label' => 'AI & Automation'],
                        ['id' => 'retail', 'label' => 'Retail Strategy'],
                        ['id' => 'technology', 'label' => 'Technology'],
                        ['id' => 'sustainability', 'label' => 'Sustainability'],
                        ['id' => 'logistics', 'label' => 'Logistics']
                    ],
                    'showCategories' => true,
                    'showViewAll' => true,
                    'viewAllLink' => '/blog',
                    'viewAllText' => 'Explore All Insights',
                    'showNewsletter' => true,
                    'newsletter' => [
                        'title' => 'Transform Insights Into Action',
                        'description' => 'Weekly analysis, case studies, and frameworks delivered to your inbox.',
                        'disclaimer' => 'Join 15,000+ supply chain professionals. Unsubscribe anytime.',
                        'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 394,
                'section_key' => 'industryInsights',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => 'Deep Intelligence',
                    'title' => [
                        'prefix' => 'Beyond the',
                        'highlight' => 'Supply Chain Horizon',
                        'suffix' => ''
                    ],
                    'description' => 'Proprietary research, predictive analytics, and strategic frameworks that redefine what\'s possible in inventory management.',
                    'heroImage' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=500&fit=crop',
                    'searchPlaceholder' => 'Explore 500+ articles, white papers, and case studies...',
                    'showTopics' => true,
                    'topics' => ['Predictive Analytics', 'Resilience Planning', 'ESG Metrics', 'Automation', 'Talent Strategy', 'Global Trade'],
                    'tabs' => [
                        ['id' => 'latest', 'label' => 'Latest', 'icon' => 'sparkles', 'count' => 24],
                        ['id' => 'trending', 'label' => 'Trending', 'icon' => 'fire', 'count' => 12],
                        ['id' => 'popular', 'label' => 'Most Popular', 'icon' => 'chart', 'count' => 18]
                    ],
                    'showRss' => true,
                    'rssLink' => '/insights/rss',
                    'featuredArticle' => [
                        'id' => 'feat-001',
                        'title' => 'The Self-Optimizing Supply Chain: How Generative AI is Rewriting Demand Forecasting',
                        'excerpt' => 'We analyze how multi-agent AI systems are achieving 97% forecast accuracy by ingesting real-time market signals, weather patterns, and social sentiment.',
                        'content' => 'Full article content...',
                        'image' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop',
                        'category' => 'Artificial Intelligence',
                        'publishDate' => '2024-03-18',
                        'link' => '/insights/generative-ai-demand-forecasting',
                        'views' => 3450
                    ],
                    'editorsPicks' => [
                        [
                            'id' => 'pick-001',
                            'title' => 'Decarbonizing Logistics: A Practical Roadmap for Scope 3 Reduction',
                            'image' => 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=300&h=200&fit=crop',
                            'category' => 'Sustainability',
                            'publishDate' => '2024-03-15',
                            'link' => '/insights/decarbonizing-logistics',
                            'views' => 2100,
                            'content' => 'Article content...'
                        ],
                        [
                            'id' => 'pick-002',
                            'title' => 'Resilience as a Service: The New Imperative for Global Supply Chains',
                            'image' => 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=300&h=200&fit=crop',
                            'category' => 'Risk Management',
                            'publishDate' => '2024-03-12',
                            'link' => '/insights/resilience-as-a-service',
                            'views' => 1870,
                            'content' => 'Article content...'
                        ],
                        [
                            'id' => 'pick-003',
                            'title' => 'From Siloed to Synchronized: Real-time Inventory Optimization',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop',
                            'category' => 'Technology',
                            'publishDate' => '2024-03-10',
                            'link' => '/insights/real-time-inventory-optimization',
                            'views' => 1540,
                            'content' => 'Article content...'
                        ]
                    ],
                    'editorsPickLink' => '/insights/editors-picks',
                    'articles' => [
                        [
                            'id' => 'art-001',
                            'title' => 'The Geopolitical Inventory Buffer: Strategic Stockpiling in an Uncertain World',
                            'excerpt' => 'How leading companies are rethinking safety stock levels amid trade tensions and regional instability.',
                            'content' => 'Full content...',
                            'image' => 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
                            'category' => 'Strategy',
                            'publishDate' => '2024-03-14',
                            'views' => 2300,
                            'comments' => 18,
                            'isTrending' => true,
                            'link' => '/insights/geopolitical-inventory-buffer',
                            'author' => [
                                'name' => 'Elena Volkov',
                                'role' => 'Geopolitical Risk Analyst',
                                'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop'
                            ]
                        ],
                        [
                            'id' => 'art-002',
                            'title' => 'Digital Twins for Inventory: Simulating the Perfect Stock Profile',
                            'excerpt' => 'Case studies from 3 global manufacturers using digital twin technology to reduce working capital by 18%.',
                            'content' => 'Full content...',
                            'image' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
                            'category' => 'Technology',
                            'publishDate' => '2024-03-11',
                            'views' => 1950,
                            'comments' => 9,
                            'isTrending' => false,
                            'link' => '/insights/digital-twins-inventory',
                            'author' => [
                                'name' => 'Marcus Thorne',
                                'role' => 'Industry 4.0 Lead',
                                'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop'
                            ]
                        ],
                        [
                            'id' => 'art-003',
                            'title' => 'The Hidden Cost of Rush Orders: A Data-Driven Analysis',
                            'excerpt' => 'Quantifying the true expense of expedited shipping and production across 10,000 SKUs.',
                            'content' => 'Full content...',
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
                            'category' => 'Analytics',
                            'publishDate' => '2024-03-08',
                            'views' => 1680,
                            'comments' => 24,
                            'isTrending' => false,
                            'link' => '/insights/hidden-cost-rush-orders',
                            'author' => [
                                'name' => 'Priya Sharma',
                                'role' => 'Operations Research Lead',
                                'avatar' => 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=80&h=80&fit=crop'
                            ]
                        ],
                        [
                            'id' => 'art-004',
                            'title' => 'Blockchain in Perishables: From Farm to Shelf Traceability',
                            'excerpt' => 'How major grocers are using distributed ledgers to reduce food waste by 31% and boost consumer trust.',
                            'content' => 'Full content...',
                            'image' => 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&h=400&fit=crop',
                            'category' => 'Innovation',
                            'publishDate' => '2024-03-05',
                            'views' => 1420,
                            'comments' => 7,
                            'isTrending' => false,
                            'link' => '/insights/blockchain-perishables',
                            'author' => [
                                'name' => 'Carlos Mendez',
                                'role' => 'Supply Chain Tech Lead',
                                'avatar' => 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop'
                            ]
                        ]
                    ],
                    'showLoadMore' => true,
                    'showContributors' => true,
                    'contributors' => [
                        ['name' => 'Dr. Elena Volkov', 'role' => 'Geopolitical Risk', 'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop', 'articles' => 24],
                        ['name' => 'Marcus Thorne', 'role' => 'Industry 4.0', 'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop', 'articles' => 18],
                        ['name' => 'Priya Sharma', 'role' => 'Analytics', 'avatar' => 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=80&h=80&fit=crop', 'articles' => 31],
                        ['name' => 'Carlos Mendez', 'role' => 'Traceability', 'avatar' => 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop', 'articles' => 12],
                        ['name' => 'Sarah Chen', 'role' => 'AI Research', 'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop', 'articles' => 27],
                        ['name' => 'David Okafor', 'role' => 'Logistics', 'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop', 'articles' => 19]
                    ],
                    'showNewsletter' => true,
                    'newsletter' => [
                        'title' => 'Join the Intelligence Briefing',
                        'description' => 'Weekly data-driven insights, proprietary models, and strategic frameworks delivered to senior supply chain leaders.',
                        'disclaimer' => 'We respect your inbox. Unsubscribe with one click.',
                        'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 395,
                'section_key' => 'industryInsights',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => 'Knowledge Hub',
                    'title' => [
                        'prefix' => 'Explore',
                        'highlight' => 'Industry Insights'
                    ],
                    'description' => 'Deep dives, expert analysis, and actionable insights to help you navigate the future of supply chain and logistics.',
                    'heroImage' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=500&fit=crop',
                    'searchPlaceholder' => 'Search articles, topics, authors...',
                    'showPopularTags' => true,
                    'popularTags' => ['Supply Chain', 'AI', 'Sustainability', 'Inventory Optimization', 'Logistics', 'Risk Management'],
                    'initialDisplayCount' => 9,
                    'loadMoreCount' => 6,
                    'defaultViewMode' => 'grid',
                    'showFilters' => true,
                    'showFeaturedContent' => true,
                    'featuredContent' => [
                        'title' => 'The Future of Inventory Management',
                        'description' => 'Join our experts as they discuss AI-driven forecasting, autonomous replenishment, and the death of manual planning.',
                        'link' => '/podcast/future-inventory-management',
                        'image' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop'
                    ],
                    'showNewsletter' => true,
                    'newsletter' => [
                        'title' => 'Subscribe to Our Newsletter',
                        'description' => 'Get the latest insights delivered straight to your inbox. Join 10,000+ industry professionals.',
                        'disclaimer' => 'No spam, unsubscribe anytime.',
                        'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                    ],
                    'articles' => [
                        [
                            'id' => 'art-001',
                            'title' => 'Autonomous Supply Chain: From Hype to Reality',
                            'excerpt' => 'A practical framework for implementing autonomous decision-making in inventory management, with case studies from early adopters.',
                            'content' => 'Full content...',
                            'image' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
                            'category' => 'AI & Automation',
                            'publishDate' => '2024-03-18',
                            'views' => 3420,
                            'comments' => 45,
                            'isTrending' => true,
                            'link' => '/insights/autonomous-supply-chain',
                            'author' => [
                                'name' => 'Dr. Sarah Chen',
                                'role' => 'AI Research Lead',
                                'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop'
                            ]
                        ],
                        [
                            'id' => 'art-002',
                            'title' => 'Circular Economy: Redesigning Returns Management',
                            'excerpt' => 'How leading retailers are turning reverse logistics into a profit center through refurbishment and recommerce strategies.',
                            'content' => 'Full content...',
                            'image' => 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop',
                            'category' => 'Sustainability',
                            'publishDate' => '2024-03-15',
                            'views' => 2870,
                            'comments' => 32,
                            'isTrending' => false,
                            'link' => '/insights/circular-economy-returns',
                            'author' => [
                                'name' => 'Marcus Thorne',
                                'role' => 'Sustainability Lead',
                                'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop'
                            ]
                        ],
                        [
                            'id' => 'art-003',
                            'title' => 'Real-Time Inventory Visibility: The Competitive Edge',
                            'excerpt' => 'Why batch processing is dead and how real-time inventory tracking is becoming table stakes for omnichannel success.',
                            'content' => 'Full content...',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
                            'category' => 'Technology',
                            'publishDate' => '2024-03-12',
                            'views' => 2150,
                            'comments' => 28,
                            'isTrending' => false,
                            'link' => '/insights/real-time-inventory-visibility',
                            'author' => [
                                'name' => 'Priya Sharma',
                                'role' => 'Product Director',
                                'avatar' => 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=80&h=80&fit=crop'
                            ]
                        ],
                        [
                            'id' => 'art-004',
                            'title' => 'Nearshoring Renaissance: Reshaping Global Supply Chains',
                            'excerpt' => 'Data-driven analysis of the shift from Asia to Mexico, Eastern Europe, and Turkey for manufacturing and distribution.',
                            'content' => 'Full content...',
                            'image' => 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&h=400&fit=crop',
                            'category' => 'Strategy',
                            'publishDate' => '2024-03-10',
                            'views' => 1890,
                            'comments' => 41,
                            'isTrending' => true,
                            'link' => '/insights/nearshoring-renaissance',
                            'author' => [
                                'name' => 'Elena Volkov',
                                'role' => 'Global Trade Analyst',
                                'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop'
                            ]
                        ],
                        [
                            'id' => 'art-005',
                            'title' => 'Inventory Optimization Under Uncertainty',
                            'excerpt' => 'New mathematical models for safety stock calculation when historical demand patterns no longer predict the future.',
                            'content' => 'Full content...',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
                            'category' => 'Analytics',
                            'publishDate' => '2024-03-08',
                            'views' => 1560,
                            'comments' => 19,
                            'isTrending' => false,
                            'link' => '/insights/inventory-optimization-uncertainty',
                            'author' => [
                                'name' => 'David Kim',
                                'role' => 'Data Science Lead',
                                'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop'
                            ]
                        ],
                        [
                            'id' => 'art-006',
                            'title' => 'Warehouse Automation ROI: Real Numbers',
                            'excerpt' => 'A comprehensive analysis of payback periods for ASRS, AMRs, and pick-to-light systems across different business models.',
                            'content' => 'Full content...',
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
                            'category' => 'Operations',
                            'publishDate' => '2024-03-05',
                            'views' => 2340,
                            'comments' => 53,
                            'isTrending' => false,
                            'link' => '/insights/warehouse-automation-roi',
                            'author' => [
                                'name' => 'Carlos Mendez',
                                'role' => 'Operations Lead',
                                'avatar' => 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop'
                            ]
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 396,
                'section_key' => 'industryInsights',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],


            // Product Updates Section 
            [
                'id' => 397,
                'section_key' => 'productUpdates',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => [
                        'backgroundColor' => 'bg-emerald-100 dark:bg-emerald-900/30',
                        'borderColor' => 'border-emerald-200 dark:border-emerald-800',
                        'textColor' => 'text-emerald-700 dark:text-emerald-300',
                        'text' => 'Continuous Innovation',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Latest',
                        'highlightedText' => 'Product Updates',
                        'suffix' => '',
                        'highlightGradient' => 'from-emerald-600 to-teal-600'
                    ],
                    'description' => 'We ship weekly. Here\'s what\'s new, improved, and coming soon to help you manage inventory smarter.',
                    'heroImage' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=500&fit=crop',
                    'showVersionSelector' => true,
                    'versions' => [
                        ['version' => 'v3.2', 'label' => 'v3.2', 'isLatest' => true],
                        ['version' => 'v3.1', 'label' => 'v3.1', 'isLatest' => false],
                        ['version' => 'v3.0', 'label' => 'v3.0', 'isLatest' => false]
                    ],
                    'latestRelease' => [
                        'version' => 'v3.2.0',
                        'date' => '2024-03-15',
                        'link' => '/releases/v3.2.0'
                    ],
                    'featureHighlights' => [
                        [
                            'icon' => 'brain',
                            'title' => 'AI Demand Forecasting',
                            'description' => 'Predict inventory needs with 96% accuracy using our new neural network engine.',
                            'status' => 'live',
                            'bgColor' => 'bg-emerald-100 dark:bg-emerald-900/30',
                            'link' => '/features/ai-forecasting',
                            'image' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop'
                        ],
                        [
                            'icon' => 'bolt',
                            'title' => 'Real-time Sync Engine',
                            'description' => 'Sub-100ms inventory updates across all sales channels simultaneously.',
                            'status' => 'beta',
                            'bgColor' => 'bg-amber-100 dark:bg-amber-900/30',
                            'link' => '/features/real-time-sync',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop'
                        ],
                        [
                            'icon' => 'shield',
                            'title' => 'Advanced Role Permissions',
                            'description' => 'Granular access controls with audit trails for enterprise compliance.',
                            'status' => 'coming-soon',
                            'bgColor' => 'bg-blue-100 dark:bg-blue-900/30',
                            'link' => '/features/role-permissions',
                            'image' => 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=300&fit=crop'
                        ]
                    ],
                    'showCategories' => true,
                    'initialDisplayCount' => 5,
                    'showViewMore' => true,
                    'updates' => [
                        [
                            'id' => 'upd-001',
                            'title' => 'Bulk Inventory Import/Export 2.0',
                            'description' => 'Import up to 100,000 SKUs in seconds with our redesigned CSV/Excel processor. Automatic data validation and error mapping included.',
                            'date' => '2024-03-15',
                            'status' => 'live',
                            'category' => 'new',
                            'tags' => ['import', 'export', 'csv'],
                            'features' => [
                                '100k SKUs in under 10 seconds',
                                'Smart column mapping with auto-detection',
                                'Detailed error reporting with fix suggestions'
                            ],
                            'link' => '/updates/bulk-import-export',
                            'demoLink' => '/demos/bulk-import',
                            'docsLink' => '/docs/import-export',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'upd-002',
                            'title' => 'Automated Reorder Point Calculation',
                            'description' => 'Dynamic safety stock levels that adjust automatically based on demand velocity, lead time variability, and seasonality.',
                            'date' => '2024-03-10',
                            'status' => 'live',
                            'category' => 'improvement',
                            'tags' => ['automation', 'replenishment'],
                            'features' => [
                                'Real-time demand variability scoring',
                                'Lead time confidence intervals',
                                'Multi-echelon optimization support'
                            ],
                            'link' => '/updates/reorder-points',
                            'image' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'upd-003',
                            'title' => 'REST API Rate Limit Dashboard',
                            'description' => 'Monitor your API usage with real-time metrics and automatic alerts when approaching limits.',
                            'date' => '2024-03-05',
                            'status' => 'live',
                            'category' => 'new',
                            'tags' => ['api', 'developers'],
                            'features' => [
                                'Real-time usage graphs',
                                'Per-endpoint breakdown',
                                'Email and webhook alerts'
                            ],
                            'link' => '/updates/api-dashboard',
                            'docsLink' => '/docs/api-rate-limits',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'upd-004',
                            'title' => 'Mobile Warehouse Scanner',
                            'description' => 'Native iOS and Android app with barcode scanning, cycle counting, and putaway optimization.',
                            'date' => '2024-02-28',
                            'status' => 'live',
                            'category' => 'new',
                            'tags' => ['mobile', 'warehouse', 'scanning'],
                            'features' => [
                                'Offline mode for low-connectivity areas',
                                'Batch scanning with voice confirmation',
                                'Real-time inventory verification'
                            ],
                            'link' => '/updates/mobile-scanner',
                            'demoLink' => '/demos/mobile-scanning',
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'upd-005',
                            'title' => 'Sage 500 Integration',
                            'description' => 'Native two-way sync with Sage 500 for unified financial and inventory management.',
                            'date' => '2024-02-25',
                            'status' => 'live',
                            'category' => 'integration',
                            'tags' => ['erp', 'sage', 'accounting'],
                            'features' => [
                                'Automatic COGS reconciliation',
                                'Real-time GL posting',
                                'Historical data migration tools'
                            ],
                            'link' => '/updates/sage-integration',
                            'docsLink' => '/docs/sage-setup',
                            'image' => 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'upd-006',
                            'title' => 'Custom Reporting Builder (Beta)',
                            'description' => 'Drag-and-drop report builder with 50+ metrics, custom calculations, and scheduled exports.',
                            'date' => '2024-02-20',
                            'status' => 'beta',
                            'category' => 'improvement',
                            'tags' => ['analytics', 'reports', 'beta'],
                            'features' => [
                                'Visual drag-and-drop interface',
                                'Custom formula support',
                                'Automated email delivery'
                            ],
                            'link' => '/updates/custom-reports',
                            'demoLink' => '/demos/report-builder',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
                        ]
                    ],
                    'showRoadmap' => true,
                    'roadmap' => [
                        'description' => 'See what we\'re building next based on customer feedback and our vision.',
                        'link' => '/roadmap',
                        'quarters' => [
                            [
                                'name' => 'Q2 2024',
                                'items' => [
                                    ['title' => 'Multi-warehouse transfers', 'status' => 'in-progress'],
                                    ['title' => 'EDI 856 integration', 'status' => 'planned'],
                                    ['title' => 'Lot/batch traceability', 'status' => 'in-progress']
                                ]
                            ],
                            [
                                'name' => 'Q3 2024',
                                'items' => [
                                    ['title' => 'Demand sensing (ML)', 'status' => 'planned'],
                                    ['title' => 'Returns management portal', 'status' => 'planned'],
                                    ['title' => 'Par-level forecasting', 'status' => 'planned']
                                ]
                            ],
                            [
                                'name' => 'Q4 2024',
                                'items' => [
                                    ['title' => 'Supplier collaboration hub', 'status' => 'planned'],
                                    ['title' => 'Carbon footprint tracking', 'status' => 'planned']
                                ]
                            ]
                        ]
                    ],
                    'showNotification' => true,
                    'notificationText' => 'Get product updates delivered to your inbox weekly',
                    'notificationImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 398,
                'section_key' => 'productUpdates',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => 'Release Notes',
                    'title' => [
                        'prefix' => 'What\'s',
                        'highlight' => 'New'
                    ],
                    'description' => 'Follow our journey of continuous improvement. Here\'s what we\'ve been building to make your experience better.',
                    'heroImage' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=500&fit=crop',
                    'stats' => [
                        'totalReleases' => 24,
                        'newFeatures' => 12,
                        'improvements' => 45
                    ],
                    'showViewAll' => true,
                    'showNewsletter' => true,
                    'newsletter' => [
                        'title' => 'Get release notes in your inbox',
                        'description' => 'Subscribe to receive weekly updates about new features, improvements, and product announcements.',
                        'disclaimer' => 'No spam, unsubscribe anytime.',
                        'stats' => [
                            'weekly' => '2-3',
                            'subscribers' => '5k+'
                        ],
                        'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                    ],
                    'showRss' => true,
                    'rssLink' => '/changelog.rss',
                    'updates' => [
                        [
                            'id' => 'upd-001',
                            'title' => 'Advanced Inventory Segmentation Engine',
                            'description' => 'Categorize products dynamically using ABC-XYZ analysis with automatic replenishment strategy recommendations.',
                            'date' => '2024-03-18',
                            'status' => 'live',
                            'category' => 'new',
                            'version' => '3.2.0',
                            'likes' => 47,
                            'comments' => 12,
                            'tags' => ['analytics', 'segmentation', 'automation'],
                            'features' => [
                                'Multi-criteria classification (revenue, velocity, variability)',
                                'Visual segment heatmaps with drill-down capability',
                                'Automated policy assignment per segment'
                            ],
                            'link' => '/updates/segmentation-engine',
                            'demoLink' => '/demos/segmentation',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'upd-002',
                            'title' => 'Supplier Performance Scorecards',
                            'description' => 'Track and compare supplier metrics including on-time delivery, quality rates, and lead time consistency.',
                            'date' => '2024-03-14',
                            'status' => 'live',
                            'category' => 'new',
                            'version' => '3.1.5',
                            'likes' => 38,
                            'comments' => 9,
                            'tags' => ['procurement', 'suppliers', 'analytics'],
                            'features' => [
                                'Automated score calculation from PO data',
                                'Trend analysis with anomaly detection',
                                'Supplier benchmarking across categories'
                            ],
                            'link' => '/updates/supplier-scorecards',
                            'docsLink' => '/docs/supplier-scorecards',
                            'image' => 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'upd-003',
                            'title' => 'Bulk Edit Performance Optimizations',
                            'description' => 'Edit up to 50,000 SKUs simultaneously with 80% faster processing and real-time progress tracking.',
                            'date' => '2024-03-10',
                            'status' => 'live',
                            'category' => 'improvement',
                            'version' => '3.1.4',
                            'likes' => 52,
                            'comments' => 7,
                            'tags' => ['performance', 'ux', 'bulk-ops'],
                            'features' => [
                                'Batch operations with undo capability',
                                'Smart validation before submission',
                                'Export failed changes for correction'
                            ],
                            'link' => '/updates/bulk-edit',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'upd-004',
                            'title' => 'Real-time Stock Alerts Webhooks',
                            'description' => 'Trigger custom workflows when inventory crosses thresholds with sub-second webhook delivery.',
                            'date' => '2024-03-05',
                            'status' => 'live',
                            'category' => 'new',
                            'version' => '3.1.3',
                            'likes' => 44,
                            'comments' => 15,
                            'tags' => ['api', 'automation', 'webhooks'],
                            'features' => [
                                'Customizable alert conditions',
                                'Retry logic with exponential backoff',
                                'Delivery audit logs'
                            ],
                            'link' => '/updates/stock-alerts-webhooks',
                            'docsLink' => '/docs/webhooks',
                            'image' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'upd-005',
                            'title' => 'Mobile Barcode Scanning Performance',
                            'description' => '60% faster barcode recognition with new camera pipeline and offline batch scanning support.',
                            'date' => '2024-02-28',
                            'status' => 'live',
                            'category' => 'improvement',
                            'version' => '3.1.2',
                            'likes' => 61,
                            'comments' => 18,
                            'tags' => ['mobile', 'warehouse', 'scanning'],
                            'features' => [
                                'Continuous scanning mode for high-volume counting',
                                'Ambient light adaptation',
                                'Support for damaged label reading'
                            ],
                            'link' => '/updates/mobile-scanning',
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'upd-006',
                            'title' => 'Data Export API (Beta)',
                            'description' => 'Programmatic access to all inventory reports with pagination, filtering, and scheduling capabilities.',
                            'date' => '2024-02-25',
                            'status' => 'beta',
                            'category' => 'new',
                            'version' => '3.2.0-beta',
                            'likes' => 27,
                            'comments' => 8,
                            'tags' => ['api', 'beta', 'reporting'],
                            'features' => [
                                'Async job processing for large exports',
                                'Multiple format support (JSON, CSV, Parquet)',
                                'Scheduled delivery to S3/Google Cloud'
                            ],
                            'link' => '/updates/export-api',
                            'docsLink' => '/docs/export-api',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'upd-007',
                            'title' => 'Security Patch: API Authentication Enhancement',
                            'description' => 'Added support for API key rotation with automatic expiry and usage quotas.',
                            'date' => '2024-02-20',
                            'status' => 'live',
                            'category' => 'security',
                            'version' => '3.1.1',
                            'likes' => 19,
                            'comments' => 4,
                            'tags' => ['security', 'api'],
                            'features' => [
                                'Key rotation without downtime',
                                'Per-key usage limits',
                                'Last used tracking'
                            ],
                            'link' => '/updates/api-security',
                            'image' => 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'upd-008',
                            'title' => 'Custom Dashboard Widgets',
                            'description' => 'Build personalized dashboards with drag-and-drop widgets for KPIs, charts, and alerts.',
                            'date' => '2024-02-15',
                            'status' => 'coming-soon',
                            'category' => 'new',
                            'version' => '3.3.0',
                            'likes' => 73,
                            'comments' => 31,
                            'tags' => ['dashboard', 'analytics', 'customization'],
                            'features' => [
                                '20+ pre-built widget templates',
                                'Custom SQL queries for advanced metrics',
                                'Shared dashboards across teams'
                            ],
                            'link' => '/updates/custom-dashboards',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 399,
                'section_key' => 'productUpdates',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => 'Release Hub',
                    'title' => [
                        'prefix' => 'Product',
                        'highlight' => 'Updates'
                    ],
                    'description' => 'Track our journey of continuous innovation. Discover new features, improvements, and what\'s coming next.',
                    'heroImage' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=500&fit=crop',
                    'searchPlaceholder' => 'Search updates, features, or tags...',
                    'defaultViewMode' => 'timeline',
                    'showFeatured' => true,
                    'showNewsletter' => true,
                    'newsletter' => [
                        'title' => 'Get release notes in your inbox',
                        'description' => 'Subscribe to receive weekly updates about new features, improvements, and product announcements.',
                        'stats' => [
                            'releases' => '50+',
                            'features' => '200+'
                        ],
                        'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                    ],
                    'featuredReleases' => [
                        [
                            'id' => 'feat-001',
                            'title' => 'Intelligent Inventory Planning Suite',
                            'description' => 'Machine learning-powered demand forecasting with automated replenishment recommendations.',
                            'version' => '3.2.0',
                            'date' => '2024-03-15',
                            'isFeatured' => true,
                            'features' => ['Predictive demand sensing', 'Multi-echelon optimization', 'Automated PO generation'],
                            'category' => 'new',
                            'status' => 'live',
                            'image' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'feat-002',
                            'title' => 'Real-time Collaboration Platform',
                            'description' => 'Share inventory forecasts and purchase plans with suppliers through a secure portal.',
                            'version' => '3.1.0',
                            'date' => '2024-02-20',
                            'isFeatured' => true,
                            'features' => ['Supplier scorecards', 'Collaborative forecasting', 'Exception alerts'],
                            'category' => 'improvement',
                            'status' => 'live',
                            'image' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'feat-003',
                            'title' => 'Advanced Analytics Dashboard',
                            'description' => 'Customizable dashboards with 50+ pre-built widgets and drag-and-drop interface.',
                            'version' => '3.3.0',
                            'date' => '2024-04-01',
                            'isFeatured' => true,
                            'features' => ['Real-time KPIs', 'Anomaly detection', 'Automated reporting'],
                            'category' => 'new',
                            'status' => 'beta',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
                        ]
                    ],
                    'updates' => [
                        [
                            'id' => 'upd-001',
                            'title' => 'Predictive Reorder Points',
                            'description' => 'Dynamic safety stock calculations that automatically adjust for seasonal demand and lead time variability.',
                            'date' => '2024-03-18',
                            'status' => 'live',
                            'category' => 'new',
                            'version' => '3.2.1',
                            'likes' => 124,
                            'tags' => ['forecasting', 'automation', 'replenishment'],
                            'features' => [
                                'Machine learning demand forecasting with 94% accuracy',
                                'Automated lead time tracking from PO data',
                                'Real-time safety stock optimization'
                            ],
                            'link' => '/updates/predictive-reorder-points',
                            'image' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'upd-002',
                            'title' => 'Bulk Inventory Edit 2.0',
                            'description' => 'Edit up to 100,000 SKUs simultaneously with smart validation and rollback capabilities.',
                            'date' => '2024-03-14',
                            'status' => 'live',
                            'category' => 'improvement',
                            'version' => '3.2.0',
                            'likes' => 89,
                            'tags' => ['bulk-ops', 'ux', 'performance'],
                            'features' => [
                                '80% faster processing with async jobs',
                                'Real-time validation with error highlighting',
                                'One-click rollback for bulk changes'
                            ],
                            'link' => '/updates/bulk-edit-2',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'upd-003',
                            'title' => 'API Rate Limit Dashboard',
                            'description' => 'Monitor API usage with real-time charts and configurable alerts for approaching limits.',
                            'date' => '2024-03-10',
                            'status' => 'live',
                            'category' => 'new',
                            'version' => '3.1.5',
                            'likes' => 56,
                            'tags' => ['api', 'developers', 'monitoring'],
                            'features' => [
                                'Per-endpoint usage breakdown',
                                'Email and webhook alerting',
                                'Historical usage analytics'
                            ],
                            'link' => '/updates/api-rate-limits',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'upd-004',
                            'title' => 'Security Hardening Update',
                            'description' => 'Enhanced API authentication with support for rotating keys and IP whitelisting.',
                            'date' => '2024-03-05',
                            'status' => 'live',
                            'category' => 'security',
                            'version' => '3.1.4',
                            'likes' => 42,
                            'tags' => ['security', 'api', 'compliance'],
                            'features' => [
                                'API key rotation without downtime',
                                'Per-key permission scoping',
                                'Comprehensive audit logging'
                            ],
                            'link' => '/updates/security-hardening',
                            'image' => 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'upd-005',
                            'title' => 'Mobile Warehouse Scanner',
                            'description' => 'Native iOS and Android app with offline barcode scanning and cycle counting.',
                            'date' => '2024-02-28',
                            'status' => 'live',
                            'category' => 'new',
                            'version' => '3.1.3',
                            'likes' => 167,
                            'tags' => ['mobile', 'warehouse', 'scanning'],
                            'features' => [
                                'Offline mode for remote locations',
                                'Voice confirmation for hands-free operation',
                                'Real-time sync when online'
                            ],
                            'link' => '/updates/mobile-scanner',
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'upd-006',
                            'title' => 'Custom Reporting Beta',
                            'description' => 'Build custom reports with drag-and-drop interface and 100+ available metrics.',
                            'date' => '2024-02-20',
                            'status' => 'beta',
                            'category' => 'improvement',
                            'version' => '3.2.0-beta',
                            'likes' => 78,
                            'tags' => ['analytics', 'beta', 'reports'],
                            'features' => [
                                'Visual query builder',
                                'Scheduled email delivery',
                                'Export to CSV, Excel, and PDF'
                            ],
                            'link' => '/updates/custom-reports',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 400,
                'section_key' => 'productUpdates',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],


            // How-to Guides Section 
            [
                'id' => 401,
                'section_key' => 'howToGuides',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => 'Step-by-Step Tutorials',
                    'title' => [
                        'prefix' => 'How-to',
                        'highlight' => 'Guides'
                    ],
                    'description' => 'Master supply chain operations with our comprehensive step-by-step guides. From setup to advanced optimization, we\'ve got you covered.',
                    'heroImage' => 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=500&fit=crop',
                    'searchPlaceholder' => 'Search guides by title, topic, or keyword...',
                    'categories' => [
                        ['id' => 'all', 'label' => 'All Guides'],
                        ['id' => 'getting-started', 'label' => 'Getting Started'],
                        ['id' => 'warehouse', 'label' => 'Warehouse'],
                        ['id' => 'fulfillment', 'label' => 'Fulfillment'],
                        ['id' => 'analytics', 'label' => 'Analytics'],
                        ['id' => 'api', 'label' => 'API & Integration']
                    ],
                    'showViewAll' => true,
                    'viewAllLink' => '/guides',
                    'showResourceHub' => true,
                    'resourceHub' => [
                        'title' => 'Need more help?',
                        'description' => 'Explore our comprehensive library of video tutorials, templates, and downloadable resources.',
                        'videoLink' => '/videos',
                        'templateLink' => '/templates',
                        'stats' => [
                            ['value' => '50+', 'label' => 'Video Tutorials'],
                            ['value' => '25+', 'label' => 'Downloadable Templates'],
                            ['value' => '100+', 'label' => 'FAQ Articles'],
                            ['value' => '24/7', 'label' => 'Support Available']
                        ],
                        'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                    ],
                    'featuredGuide' => [
                        'id' => 'feat-001',
                        'title' => 'Mastering Multi-Warehouse Inventory Management',
                        'description' => 'Learn how to optimize inventory across multiple locations, automate transfers, and maintain perfect stock visibility.',
                        'date' => '2024-03-15',
                        'readTime' => '15 min read',
                        'views' => '3.2k',
                        'difficulty' => 'intermediate',
                        'category' => 'warehouse',
                        'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
                        'link' => '/guides/multi-warehouse-inventory',
                        'videoUrl' => 'https://example.com/video',
                        'author' => [
                            'name' => 'Sarah Chen',
                            'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop'
                        ]
                    ],
                    'guides' => [
                        [
                            'id' => 'guide-001',
                            'title' => 'Setting Up Your First Inventory Dashboard',
                            'description' => 'Create custom dashboards to track real-time stock levels, turnover rates, and reorder points.',
                            'date' => '2024-03-14',
                            'readTime' => '8 min read',
                            'views' => '2.1k',
                            'difficulty' => 'beginner',
                            'category' => 'analytics',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
                            'link' => '/guides/first-inventory-dashboard',
                            'tags' => ['dashboard', 'analytics', 'reporting'],
                            'steps' => [
                                'Navigate to Analytics > Dashboards',
                                'Click \'Create New Dashboard\'',
                                'Select pre-built widgets or add custom metrics',
                                'Configure refresh rate and data sources',
                                'Save and share with team members'
                            ],
                            'author' => [
                                'name' => 'John Smith',
                                'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop'
                            ]
                        ],
                        [
                            'id' => 'guide-002',
                            'title' => 'Optimizing Warehouse Picking Routes',
                            'description' => 'Reduce travel time by 40% with dynamic slotting and optimized pick paths.',
                            'date' => '2024-03-12',
                            'readTime' => '12 min read',
                            'views' => '1.8k',
                            'difficulty' => 'intermediate',
                            'category' => 'warehouse',
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop',
                            'link' => '/guides/optimize-picking-routes',
                            'tags' => ['warehouse', 'efficiency', 'picking'],
                            'steps' => [
                                'Analyze current pick data for velocity zones',
                                'Implement ABC slotting for fast-movers',
                                'Configure pick-to-light or voice picking',
                                'Test batch picking vs zone picking',
                                'Monitor metrics and iterate weekly'
                            ],
                            'author' => [
                                'name' => 'Maria Rodriguez',
                                'avatar' => 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=80&h=80&fit=crop'
                            ]
                        ],
                        [
                            'id' => 'guide-003',
                            'title' => 'Connecting Your E-commerce Store',
                            'description' => 'Step-by-step integration for Shopify, WooCommerce, Magento, and custom APIs.',
                            'date' => '2024-03-10',
                            'readTime' => '10 min read',
                            'views' => '4.2k',
                            'difficulty' => 'beginner',
                            'category' => 'api',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
                            'link' => '/guides/connect-ecommerce-store',
                            'tags' => ['api', 'integration', 'ecommerce'],
                            'steps' => [
                                'Generate API credentials from your store',
                                'Navigate to Integrations > Add New',
                                'Select your platform from the list',
                                'Enter store URL and API keys',
                                'Test connection and sync initial inventory'
                            ],
                            'author' => [
                                'name' => 'Alex Rivera',
                                'avatar' => 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop'
                            ]
                        ],
                        [
                            'id' => 'guide-004',
                            'title' => 'Automating Reorder Point Calculations',
                            'description' => 'Set up dynamic safety stock that adjusts automatically for demand variability and lead times.',
                            'date' => '2024-03-08',
                            'readTime' => '14 min read',
                            'views' => '2.9k',
                            'difficulty' => 'advanced',
                            'category' => 'fulfillment',
                            'image' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop',
                            'link' => '/guides/automated-reorder-points',
                            'tags' => ['automation', 'replenishment', 'forecasting'],
                            'steps' => [
                                'Configure lead time variance tracking',
                                'Set demand forecasting parameters',
                                'Define service level targets by SKU class',
                                'Enable automatic PO generation',
                                'Create approval workflows for exceptions'
                            ],
                            'author' => [
                                'name' => 'Dr. Emily Park',
                                'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop'
                            ]
                        ],
                        [
                            'id' => 'guide-005',
                            'title' => 'Conducting Cycle Counts with Mobile Scanner',
                            'description' => 'Use our mobile app for efficient cycle counting with offline support and real-time validation.',
                            'date' => '2024-03-05',
                            'readTime' => '7 min read',
                            'views' => '1.5k',
                            'difficulty' => 'beginner',
                            'category' => 'warehouse',
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop',
                            'link' => '/guides/mobile-cycle-counts',
                            'tags' => ['mobile', 'scanning', 'inventory'],
                            'steps' => [
                                'Download the mobile app from app stores',
                                'Log in with your warehouse credentials',
                                'Select \'Cycle Count\' from menu',
                                'Scan barcode or search for SKU',
                                'Enter counted quantity and submit'
                            ],
                            'author' => [
                                'name' => 'John Smith',
                                'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop'
                            ]
                        ],
                        [
                            'id' => 'guide-006',
                            'title' => 'Building Custom Analytics Reports',
                            'description' => 'Create powerful custom reports with our drag-and-drop report builder and scheduled exports.',
                            'date' => '2024-03-01',
                            'readTime' => '11 min read',
                            'views' => '2.3k',
                            'difficulty' => 'intermediate',
                            'category' => 'analytics',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
                            'link' => '/guides/custom-analytics-reports',
                            'tags' => ['analytics', 'reporting', 'data'],
                            'steps' => [
                                'Navigate to Analytics > Custom Reports',
                                'Select metrics from the available library',
                                'Drag and drop to arrange layout',
                                'Apply filters and date ranges',
                                'Schedule automated email delivery'
                            ],
                            'author' => [
                                'name' => 'Maria Rodriguez',
                                'avatar' => 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=80&h=80&fit=crop'
                            ]
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 402,
                'section_key' => 'howToGuides',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => 'Interactive Tutorials',
                    'title' => [
                        'prefix' => 'Learn',
                        'highlight' => 'Supply Chain',
                        'suffix' => 'Operations'
                    ],
                    'description' => 'Master supply chain management with our interactive tutorials, video walkthroughs, and step-by-step guides. Learn at your own pace.',
                    'heroImage' => 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=500&fit=crop',
                    'searchPlaceholder' => 'Search tutorials, guides, or topics...',
                    'defaultViewMode' => 'grid',
                    'stats' => [
                        'totalGuides' => 50,
                        'videoTutorials' => 25,
                        'students' => '10k+'
                    ],
                    'showLearningPaths' => true,
                    'showNewsletter' => true,
                    'newsletter' => [
                        'title' => 'Get new guides in your inbox',
                        'description' => 'Subscribe to receive weekly tutorials, tips, and best practices delivered straight to your inbox.',
                        'disclaimer' => 'No spam, unsubscribe anytime. Get 1-2 emails per week.',
                        'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                    ],
                    'popularTopics' => ['Inventory Optimization', 'Warehouse Automation', 'Demand Forecasting', 'Supplier Collaboration', 'Returns Management'],
                    'categories' => [
                        ['id' => 'all', 'label' => 'All Guides', 'icon' => 'sparkles'],
                        ['id' => 'getting-started', 'label' => 'Getting Started', 'icon' => 'rocket'],
                        ['id' => 'warehouse', 'label' => 'Warehouse', 'icon' => 'cube'],
                        ['id' => 'fulfillment', 'label' => 'Fulfillment', 'icon' => 'truck'],
                        ['id' => 'analytics', 'label' => 'Analytics', 'icon' => 'chart'],
                        ['id' => 'api', 'label' => 'API & Integration', 'icon' => 'code']
                    ],
                    'learningPaths' => [
                        [
                            'id' => 'lp-001',
                            'title' => 'Inventory Management Fundamentals',
                            'description' => 'Master the core concepts of inventory control, safety stock, and reorder points.',
                            'icon' => 'cube',
                            'bgColor' => 'bg-blue-600',
                            'guides' => 8,
                            'duration' => '4 hours',
                            'progress' => 35,
                            'link' => '/learning-paths/inventory-fundamentals',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'lp-002',
                            'title' => 'Warehouse Operations Excellence',
                            'description' => 'Optimize picking, packing, and putaway processes for maximum efficiency.',
                            'icon' => 'truck',
                            'bgColor' => 'bg-purple-600',
                            'guides' => 6,
                            'duration' => '3 hours',
                            'progress' => 15,
                            'link' => '/learning-paths/warehouse-excellence',
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'lp-003',
                            'title' => 'Analytics & Reporting Mastery',
                            'description' => 'Transform data into actionable insights with custom dashboards and reports.',
                            'icon' => 'chart',
                            'bgColor' => 'bg-green-600',
                            'guides' => 5,
                            'duration' => '2.5 hours',
                            'progress' => 60,
                            'link' => '/learning-paths/analytics-mastery',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
                        ]
                    ],
                    'guides' => [
                        [
                            'id' => 'guide-001',
                            'title' => 'Setting Up Your First Inventory Dashboard',
                            'description' => 'Create custom dashboards to track real-time stock levels, turnover rates, and reorder points.',
                            'readTime' => '8 min read',
                            'views' => '2.1k',
                            'rating' => '4.9',
                            'reviews' => 124,
                            'difficulty' => 'beginner',
                            'category' => 'analytics',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
                            'link' => '/guides/first-inventory-dashboard',
                            'videoUrl' => 'https://example.com/video',
                            'tags' => ['dashboard', 'analytics', 'reporting', 'kpi'],
                            'steps' => [
                                'Navigate to Analytics > Dashboards',
                                'Click \'Create New Dashboard\' from template gallery',
                                'Select pre-built widgets or add custom metrics',
                                'Configure refresh rate and data sources',
                                'Set up user permissions and sharing',
                                'Schedule automated email reports'
                            ],
                            'author' => [
                                'name' => 'Sarah Chen',
                                'role' => 'Analytics Lead',
                                'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop'
                            ]
                        ],
                        [
                            'id' => 'guide-002',
                            'title' => 'Optimizing Warehouse Picking Routes',
                            'description' => 'Reduce travel time by 40% with dynamic slotting and optimized pick paths.',
                            'readTime' => '12 min read',
                            'views' => '1.8k',
                            'rating' => '4.7',
                            'reviews' => 89,
                            'difficulty' => 'intermediate',
                            'category' => 'warehouse',
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
                            'link' => '/guides/optimize-picking-routes',
                            'videoUrl' => 'https://example.com/video',
                            'tags' => ['warehouse', 'efficiency', 'picking', 'slotting'],
                            'steps' => [
                                'Analyze current pick data for velocity zones',
                                'Implement ABC slotting for fast-movers',
                                'Configure pick-to-light or voice picking',
                                'Test batch picking vs zone picking',
                                'Monitor metrics and iterate weekly'
                            ],
                            'author' => [
                                'name' => 'Marcus Thorne',
                                'role' => 'Warehouse Operations',
                                'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop'
                            ]
                        ],
                        [
                            'id' => 'guide-003',
                            'title' => 'Connecting Your E-commerce Store',
                            'description' => 'Step-by-step integration for Shopify, WooCommerce, Magento, and custom APIs.',
                            'readTime' => '10 min read',
                            'views' => '4.2k',
                            'rating' => '4.8',
                            'reviews' => 203,
                            'difficulty' => 'beginner',
                            'category' => 'api',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
                            'link' => '/guides/connect-ecommerce-store',
                            'tags' => ['api', 'integration', 'ecommerce', 'shopify'],
                            'steps' => [
                                'Generate API credentials from your store',
                                'Navigate to Integrations > Add New',
                                'Select your platform from the list',
                                'Enter store URL and API keys',
                                'Test connection and sync initial inventory',
                                'Configure sync frequency and conflict resolution'
                            ],
                            'author' => [
                                'name' => 'Alex Rivera',
                                'role' => 'Integration Specialist',
                                'avatar' => 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop'
                            ]
                        ],
                        [
                            'id' => 'guide-004',
                            'title' => 'Automating Reorder Point Calculations',
                            'description' => 'Set up dynamic safety stock that adjusts automatically for demand variability and lead times.',
                            'readTime' => '14 min read',
                            'views' => '2.9k',
                            'rating' => '4.9',
                            'reviews' => 156,
                            'difficulty' => 'advanced',
                            'category' => 'fulfillment',
                            'image' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
                            'link' => '/guides/automated-reorder-points',
                            'tags' => ['automation', 'replenishment', 'forecasting'],
                            'steps' => [
                                'Configure lead time variance tracking',
                                'Set demand forecasting parameters',
                                'Define service level targets by SKU class',
                                'Enable automatic PO generation',
                                'Create approval workflows for exceptions',
                                'Set up email alerts for critical thresholds'
                            ],
                            'author' => [
                                'name' => 'Dr. Emily Park',
                                'role' => 'Data Science Lead',
                                'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop'
                            ]
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 403,
                'section_key' => 'howToGuides',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => 'Learning Center',
                    'title' => [
                        'prefix' => 'Master',
                        'highlight' => 'Supply Chain',
                        'suffix' => 'Operations'
                    ],
                    'description' => 'Comprehensive video courses, interactive tutorials, and hands-on exercises to help you become a supply chain expert.',
                    'heroImage' => 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=500&fit=crop',
                    'searchPlaceholder' => 'Search courses, tutorials, or topics...',
                    'showFeaturedCourses' => true,
                    'showNewsletter' => true,
                    'newsletter' => [
                        'title' => 'Get new tutorials in your inbox',
                        'description' => 'Subscribe to receive weekly tutorials, expert tips, and exclusive resources.',
                        'stats' => [
                            'tutorials' => '50+',
                            'videos' => '25+'
                        ],
                        'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                    ],
                    'categories' => [
                        ['id' => 'all', 'label' => 'All Guides', 'icon' => 'sparkles', 'count' => 12],
                        ['id' => 'getting-started', 'label' => 'Getting Started', 'icon' => 'rocket'],
                        ['id' => 'warehouse', 'label' => 'Warehouse', 'icon' => 'cube'],
                        ['id' => 'fulfillment', 'label' => 'Fulfillment', 'icon' => 'truck'],
                        ['id' => 'analytics', 'label' => 'Analytics', 'icon' => 'chart'],
                        ['id' => 'automation', 'label' => 'Automation', 'icon' => 'cog']
                    ],
                    'featuredCourses' => [
                        [
                            'id' => 'course-001',
                            'title' => 'Inventory Management Fundamentals',
                            'description' => 'Master the core concepts of safety stock, reorder points, and demand forecasting.',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
                            'category' => 'getting-started',
                            'difficulty' => 'beginner',
                            'duration' => '4 hours',
                            'rating' => 4.9,
                            'reviews' => 1240,
                            'badge' => 'Most Popular',
                            'progress' => 0,
                            'author' => [
                                'name' => 'Sarah Chen',
                                'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop'
                            ]
                        ],
                        [
                            'id' => 'course-002',
                            'title' => 'Warehouse Automation & Robotics',
                            'description' => 'Learn how to integrate ASRS, AMRs, and pick-to-light systems into your warehouse.',
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
                            'category' => 'automation',
                            'difficulty' => 'intermediate',
                            'duration' => '6 hours',
                            'rating' => 4.8,
                            'reviews' => 890,
                            'badge' => 'Trending',
                            'progress' => 0,
                            'author' => [
                                'name' => 'Marcus Thorne',
                                'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop'
                            ]
                        ],
                        [
                            'id' => 'course-003',
                            'title' => 'Supply Chain Analytics Dashboard',
                            'description' => 'Build powerful dashboards to visualize KPIs and identify optimization opportunities.',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
                            'category' => 'analytics',
                            'difficulty' => 'intermediate',
                            'duration' => '5 hours',
                            'rating' => 4.7,
                            'reviews' => 560,
                            'badge' => 'New',
                            'progress' => 0,
                            'author' => [
                                'name' => 'Dr. Emily Park',
                                'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop'
                            ]
                        ]
                    ],
                    'guides' => [
                        [
                            'id' => 'guide-001',
                            'title' => 'Setting Up Safety Stock Calculations',
                            'description' => 'Learn how to calculate optimal safety stock levels using demand variability and lead time data.',
                            'date' => '2024-03-15',
                            'readTime' => '15 min read',
                            'views' => '3.2k',
                            'rating' => 4.9,
                            'reviews' => 234,
                            'difficulty' => 'intermediate',
                            'category' => 'getting-started',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
                            'link' => '/guides/safety-stock-calculations',
                            'videoUrl' => 'https://example.com/video',
                            'videoPoster' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
                            'tags' => ['inventory', 'safety-stock', 'forecasting'],
                            'learningObjectives' => [
                                'Calculate safety stock using standard deviation method',
                                'Apply service level targets to determine Z-scores',
                                'Adjust calculations for lead time variability'
                            ],
                            'steps' => [
                                ['title' => 'Gather Historical Demand Data', 'description' => 'Export at least 12 months of SKU-level demand data from your system.'],
                                ['title' => 'Calculate Demand Standard Deviation', 'description' => 'Use the STDEV function to measure demand variability.'],
                                ['title' => 'Determine Target Service Level', 'description' => 'Select Z-score based on your business requirements (90% = 1.28, 95% = 1.65, 99% = 2.33).'],
                                ['title' => 'Calculate Lead Time Variability', 'description' => 'Measure the standard deviation of supplier lead times.']
                            ],
                            'quiz' => [
                                'questions' => [
                                    [
                                        'text' => 'What Z-score corresponds to a 95% service level?',
                                        'options' => ['1.28', '1.65', '2.33', '1.96'],
                                        'correctAnswer' => 1
                                    ],
                                    [
                                        'text' => 'Which of the following increases safety stock requirements?',
                                        'options' => ['Lower demand variability', 'Shorter lead times', 'Higher demand variability', 'Lower service level target'],
                                        'correctAnswer' => 2
                                    ]
                                ]
                            ],
                            'resources' => [
                                ['title' => 'Safety Stock Calculator Template', 'description' => 'Excel template with formulas', 'icon' => 'document', 'link' => '/resources/safety-stock-calculator'],
                                ['title' => 'Service Level Guide', 'description' => 'PDF guide to selecting targets', 'icon' => 'download', 'link' => '/resources/service-level-guide']
                            ],
                            'proTip' => 'Always recalculate safety stock quarterly as demand patterns change with seasons.',
                            'author' => [
                                'name' => 'Sarah Chen',
                                'role' => 'Inventory Analytics Lead',
                                'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop'
                            ]
                        ],
                        [
                            'id' => 'guide-002',
                            'title' => 'Optimizing Warehouse Picking Routes',
                            'description' => 'Reduce travel time by 40% with dynamic slotting and optimized pick paths.',
                            'date' => '2024-03-12',
                            'readTime' => '12 min read',
                            'views' => '2.1k',
                            'rating' => 4.7,
                            'reviews' => 156,
                            'difficulty' => 'intermediate',
                            'category' => 'warehouse',
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
                            'link' => '/guides/picking-optimization',
                            'videoUrl' => 'https://example.com/video',
                            'tags' => ['warehouse', 'picking', 'efficiency'],
                            'learningObjectives' => [
                                'Implement ABC analysis for slotting',
                                'Design efficient pick paths using clustering',
                                'Measure pick productivity metrics'
                            ],
                            'steps' => [
                                ['title' => 'Analyze Order Data', 'description' => 'Export last 90 days of order lines to identify fast-moving SKUs.'],
                                ['title' => 'Implement ABC Slotting', 'description' => 'Place A-items in primary pick faces closest to shipping.'],
                                ['title' => 'Configure Batch Picking', 'description' => 'Group similar orders together to reduce travel.'],
                                ['title' => 'Measure and Iterate', 'description' => 'Track picks per hour before and after changes.']
                            ],
                            'quiz' => [
                                'questions' => [
                                    [
                                        'text' => 'Which items should be placed in the most accessible locations?',
                                        'options' => ['A-items (fastest moving)', 'C-items (slowest moving)', 'New items', 'Heavy items'],
                                        'correctAnswer' => 0
                                    ]
                                ]
                            ],
                            'resources' => [
                                ['title' => 'ABC Analysis Template', 'description' => 'Excel template', 'icon' => 'document', 'link' => '/resources/abc-analysis']
                            ],
                            'proTip' => 'Run ABC analysis monthly as product velocity changes.',
                            'author' => [
                                'name' => 'Marcus Thorne',
                                'role' => 'Warehouse Operations',
                                'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop'
                            ]
                        ],
                        [
                            'id' => 'guide-003',
                            'title' => 'Connecting Your E-commerce Store API',
                            'description' => 'Step-by-step integration for Shopify, WooCommerce, and custom APIs.',
                            'date' => '2024-03-10',
                            'readTime' => '10 min read',
                            'views' => '4.5k',
                            'rating' => 4.8,
                            'reviews' => 312,
                            'difficulty' => 'beginner',
                            'category' => 'api',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
                            'link' => '/guides/ecommerce-api',
                            'tags' => ['api', 'integration', 'ecommerce'],
                            'learningObjectives' => [
                                'Generate API credentials from your store',
                                'Configure webhook endpoints for real-time sync',
                                'Test and monitor integration health'
                            ],
                            'steps' => [
                                ['title' => 'Generate API Credentials', 'description' => 'Navigate to your store\'s developer settings to create API keys.'],
                                ['title' => 'Configure Webhook Endpoints', 'description' => 'Set up inventory update webhooks for real-time sync.'],
                                ['title' => 'Test Connection', 'description' => 'Run a test sync with a single SKU to validate.'],
                                ['title' => 'Monitor Sync Health', 'description' => 'Check logs regularly for failed webhooks.']
                            ],
                            'quiz' => [
                                'questions' => [
                                    [
                                        'text' => 'What should you do first when integrating a new store?',
                                        'options' => ['Configure webhooks', 'Generate API credentials', 'Sync all inventory', 'Test with one SKU'],
                                        'correctAnswer' => 1
                                    ]
                                ]
                            ],
                            'resources' => [
                                ['title' => 'API Integration Checklist', 'description' => 'Step-by-step checklist', 'icon' => 'clipboard', 'link' => '/resources/api-checklist']
                            ],
                            'proTip' => 'Start with a sandbox environment before connecting production.',
                            'author' => [
                                'name' => 'Alex Rivera',
                                'role' => 'Integration Specialist',
                                'avatar' => 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop'
                            ]
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 404,
                'section_key' => 'howToGuides',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],


            // Best Practices Section 
            [
                'id' => 405,
                'section_key' => 'bestPractices',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => 'Industry Best Practices',
                    'title' => [
                        'prefix' => 'Proven',
                        'highlight' => 'Best Practices',
                        'suffix' => 'for Supply Chain Excellence'
                    ],
                    'description' => 'Discover proven strategies and expert-recommended approaches to optimize your supply chain operations, reduce costs, and improve efficiency.',
                    'heroImage' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=500&fit=crop',
                    'searchPlaceholder' => 'Search best practices by topic, benefit, or keyword...',
                    'showResources' => true,
                    'resourcesLink' => '/resources/best-practices',
                    'showNewsletter' => true,
                    'newsletter' => [
                        'title' => 'Get Weekly Best Practices',
                        'description' => 'Subscribe to receive curated best practices, expert insights, and implementation guides delivered to your inbox.',
                        'disclaimer' => 'No spam, unsubscribe anytime. Get 1-2 emails per week.',
                        'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                    ],
                    'categories' => [
                        ['id' => 'all', 'label' => 'All Practices', 'icon' => 'sparkles'],
                        ['id' => 'inventory', 'label' => 'Inventory', 'icon' => 'cube'],
                        ['id' => 'warehouse', 'label' => 'Warehouse', 'icon' => 'cube'],
                        ['id' => 'transportation', 'label' => 'Transportation', 'icon' => 'truck'],
                        ['id' => 'fulfillment', 'label' => 'Fulfillment', 'icon' => 'check'],
                        ['id' => 'technology', 'label' => 'Technology', 'icon' => 'cog']
                    ],
                    'featuredPractice' => [
                        'id' => 'feat-001',
                        'title' => 'Demand-Driven Inventory Optimization',
                        'description' => 'Transition from forecast-driven to demand-driven inventory management to reduce carrying costs by 25% while maintaining service levels.',
                        'date' => '2024-03-15',
                        'readTime' => '12 min read',
                        'views' => '3.2k',
                        'category' => 'inventory',
                        'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
                        'link' => '/best-practices/demand-driven-inventory',
                        'impact' => [
                            ['value' => '25%', 'label' => 'Carrying Cost Reduction'],
                            ['value' => '99.5%', 'label' => 'Service Level'],
                            ['value' => '30%', 'label' => 'Faster Turnover']
                        ],
                        'author' => [
                            'name' => 'Sarah Chen',
                            'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop'
                        ]
                    ],
                    'practices' => [
                        [
                            'id' => 'practice-001',
                            'title' => 'ABC-XYZ Segmentation for Inventory Control',
                            'description' => 'Classify inventory based on revenue contribution and demand variability to optimize service levels and safety stock.',
                            'category' => 'inventory',
                            'benefits' => ['20-30% inventory reduction', 'Improved cash flow', 'Higher fill rates'],
                            'details' => 'ABC analysis categorizes items by annual consumption value (A=70%, B=20%, C=10%). XYZ analysis adds demand variability dimension. The intersection creates 9 strategic zones for differentiated policies.',
                            'implementation' => [
                                'Run ABC analysis on 12 months of sales data',
                                'Calculate coefficient of variation for each SKU',
                                'Create 3x3 segmentation matrix',
                                'Define service level targets per segment'
                            ],
                            'impactValue' => '25% reduction',
                            'tags' => ['inventory', 'segmentation', 'analytics'],
                            'link' => '/best-practices/abc-xyz-segmentation',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
                            'author' => [
                                'name' => 'Sarah Chen',
                                'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop'
                            ]
                        ],
                        [
                            'id' => 'practice-002',
                            'title' => 'Cross-Docking for High-Velocity SKUs',
                            'description' => 'Implement cross-docking operations for fast-moving items to eliminate storage costs and reduce lead times.',
                            'category' => 'warehouse',
                            'benefits' => ['50% less handling', '24-hour turnaround', 'Reduced storage needs'],
                            'details' => 'Cross-docking transfers incoming shipments directly to outbound shipping without storage. Best for predictable, high-volume SKUs with stable demand patterns.',
                            'implementation' => [
                                'Identify SKUs with daily turnover >10 units',
                                'Design dedicated receiving-to-shipping flow',
                                'Implement wave planning for outbound consolidation',
                                'Train staff on direct transfer procedures'
                            ],
                            'impactValue' => '50% faster',
                            'tags' => ['warehouse', 'cross-docking', 'efficiency'],
                            'link' => '/best-practices/cross-docking',
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop',
                            'author' => [
                                'name' => 'Marcus Thorne',
                                'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop'
                            ]
                        ],
                        [
                            'id' => 'practice-003',
                            'title' => 'Vendor-Managed Inventory (VMI) Programs',
                            'description' => 'Empower key suppliers to manage inventory levels based on real-time consumption data and agreed targets.',
                            'category' => 'fulfillment',
                            'benefits' => ['40% fewer stockouts', 'Reduced admin costs', 'Better supplier relationships'],
                            'details' => 'VMI shifts replenishment responsibility to suppliers who access your inventory data. Suppliers proactively ship to maintain agreed levels.',
                            'implementation' => [
                                'Select strategic suppliers for pilot program',
                                'Establish data sharing protocols and APIs',
                                'Define min/max levels and service agreements',
                                'Set up exception alerts and performance dashboards'
                            ],
                            'impactValue' => '40% improvement',
                            'tags' => ['suppliers', 'vmi', 'replenishment'],
                            'link' => '/best-practices/vendor-managed-inventory',
                            'image' => 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=300&fit=crop',
                            'author' => [
                                'name' => 'Alex Rivera',
                                'avatar' => 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop'
                            ]
                        ],
                        [
                            'id' => 'practice-004',
                            'title' => 'Dynamic Slotting for Warehouse Efficiency',
                            'description' => 'Continuously optimize product placement based on demand velocity, physical characteristics, and order profiles.',
                            'category' => 'warehouse',
                            'benefits' => ['30% travel reduction', 'Higher pick rates', 'Better space utilization'],
                            'details' => 'Dynamic slotting moves products based on real-time demand patterns. Fast-movers go to prime locations near shipping, slow-movers to reserve storage.',
                            'implementation' => [
                                'Analyze pick density by location zone',
                                'Run slotting optimization weekly',
                                'Implement wave-based replenishment',
                                'Measure travel distance reduction'
                            ],
                            'impactValue' => '30% less travel',
                            'tags' => ['warehouse', 'slotting', 'productivity'],
                            'link' => '/best-practices/dynamic-slotting',
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop',
                            'author' => [
                                'name' => 'Marcus Thorne',
                                'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop'
                            ]
                        ],
                        [
                            'id' => 'practice-005',
                            'title' => 'Real-Time Inventory Visibility Across Channels',
                            'description' => 'Implement unified inventory platform to provide single source of truth across all sales channels and warehouses.',
                            'category' => 'technology',
                            'benefits' => ['Zero overselling', 'Better customer experience', 'Optimized fulfillment'],
                            'details' => 'Real-time visibility prevents overselling by allocating inventory across channels based on demand and proximity to customers.',
                            'implementation' => [
                                'Connect all warehouses and POS systems',
                                'Implement inventory buffer logic for each channel',
                                'Set up webhooks for real-time updates',
                                'Configure safety stock by channel'
                            ],
                            'impactValue' => '99.99% accuracy',
                            'tags' => ['visibility', 'omni-channel', 'real-time'],
                            'link' => '/best-practices/real-time-visibility',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
                            'author' => [
                                'name' => 'Dr. Emily Park',
                                'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop'
                            ]
                        ],
                        [
                            'id' => 'practice-006',
                            'title' => 'Sustainable Packaging Optimization',
                            'description' => 'Reduce packaging waste and shipping costs through right-sizing and material selection strategies.',
                            'category' => 'sustainability',
                            'benefits' => ['25% less waste', 'Lower shipping costs', 'Better brand perception'],
                            'details' => 'Analyze product dimensions to select optimal box sizes. Use automated packaging equipment for consistency and waste reduction.',
                            'implementation' => [
                                'Audit current packaging usage by SKU',
                                'Implement dimensional weight pricing analysis',
                                'Train packers on right-sizing protocols',
                                'Track waste reduction metrics monthly'
                            ],
                            'impactValue' => '25% waste reduction',
                            'tags' => ['sustainability', 'packaging', 'cost'],
                            'link' => '/best-practices/sustainable-packaging',
                            'image' => 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop',
                            'author' => [
                                'name' => 'Elena Volkov',
                                'avatar' => 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=80&h=80&fit=crop'
                            ]
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 406,
                'section_key' => 'bestPractices',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => 'Industry Best Practices',
                    'title' => [
                        'prefix' => 'Proven',
                        'highlight' => 'Best Practices'
                    ],
                    'description' => 'Data-driven strategies and real-world case studies to help you optimize your supply chain operations.',
                    'heroImage' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=500&fit=crop',
                    'searchPlaceholder' => 'Search best practices, case studies, or topics...',
                    'defaultViewMode' => 'grid',
                    'stats' => [
                        'practices' => 50,
                        'caseStudies' => 25,
                        'companies' => '500+'
                    ],
                    'showCalculator' => true,
                    'showCaseStudies' => true,
                    'showExpertInsights' => true,
                    'showNewsletter' => true,
                    'newsletter' => [
                        'title' => 'Get Weekly Best Practices',
                        'description' => 'Subscribe to receive curated best practices, case studies, and implementation guides.',
                        'disclaimer' => 'No spam, unsubscribe anytime. Get 1-2 emails per week.',
                        'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                    ],
                    'expertInsights' => [
                        'title' => 'Get personalized recommendations',
                        'description' => 'Schedule a free consultation with our supply chain experts to get tailored best practices for your business.',
                        'link' => '/consultation',
                        'experts' => [
                            ['name' => 'Sarah Chen', 'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop'],
                            ['name' => 'Marcus Thorne', 'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop'],
                            ['name' => 'Alex Rivera', 'avatar' => 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop']
                        ]
                    ],
                    'categories' => [
                        ['id' => 'all', 'label' => 'All Practices', 'icon' => 'sparkles', 'count' => 50],
                        ['id' => 'inventory', 'label' => 'Inventory', 'icon' => 'cube'],
                        ['id' => 'warehouse', 'label' => 'Warehouse', 'icon' => 'cube'],
                        ['id' => 'transportation', 'label' => 'Transportation', 'icon' => 'truck'],
                        ['id' => 'fulfillment', 'label' => 'Fulfillment', 'icon' => 'check'],
                        ['id' => 'technology', 'label' => 'Technology', 'icon' => 'cog']
                    ],
                    'caseStudies' => [
                        [
                            'id' => 'cs-001',
                            'company' => 'Global Logistics Inc.',
                            'industry' => 'Transportation',
                            'description' => 'Reduced freight costs by 28% through route optimization and carrier consolidation.',
                            'image' => 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&h=400&fit=crop',
                            'category' => 'transportation',
                            'results' => [
                                ['value' => '28%', 'label' => 'Cost Reduction'],
                                ['value' => '15%', 'label' => 'Faster Delivery'],
                                ['value' => '99.5%', 'label' => 'On-Time Rate']
                            ],
                            'link' => '/case-studies/global-logistics'
                        ],
                        [
                            'id' => 'cs-002',
                            'company' => 'Retail Chain Co.',
                            'industry' => 'Retail',
                            'description' => 'Inventory turnover increased 40% with demand-driven replenishment system.',
                            'image' => 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop',
                            'category' => 'inventory',
                            'results' => [
                                ['value' => '40%', 'label' => 'Turnover Increase'],
                                ['value' => '25%', 'label' => 'Stock Reduction'],
                                ['value' => '98%', 'label' => 'Fill Rate']
                            ],
                            'link' => '/case-studies/retail-chain'
                        ],
                        [
                            'id' => 'cs-003',
                            'company' => 'Manufacturing Solutions',
                            'industry' => 'Manufacturing',
                            'description' => 'Warehouse productivity improved 35% with dynamic slotting and pick optimization.',
                            'image' => 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&h=400&fit=crop',
                            'category' => 'warehouse',
                            'results' => [
                                ['value' => '35%', 'label' => 'Productivity Gain'],
                                ['value' => '50%', 'label' => 'Travel Reduction'],
                                ['value' => '3x', 'label' => 'Picks per Hour']
                            ],
                            'link' => '/case-studies/manufacturing-solutions'
                        ]
                    ],
                    'practices' => [
                        [
                            'id' => 'practice-001',
                            'title' => 'Demand-Driven Inventory Optimization',
                            'description' => 'Transition from forecast-driven to demand-driven inventory management to reduce carrying costs while maintaining service levels.',
                            'category' => 'inventory',
                            'readTime' => '12 min read',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
                            'impactBadge' => '25% Cost Reduction',
                            'link' => '/best-practices/demand-driven-inventory',
                            'tags' => ['inventory', 'forecasting', 'optimization'],
                            'metrics' => [
                                ['value' => '25%', 'label' => 'Cost Reduction'],
                                ['value' => '99.5%', 'label' => 'Service Level'],
                                ['value' => '30%', 'label' => 'Faster Turnover']
                            ],
                            'steps' => ['Analyze demand patterns', 'Set service levels', 'Calculate safety stock', 'Monitor and adjust'],
                            'downloadable' => true,
                            'author' => [
                                'name' => 'Sarah Chen',
                                'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop'
                            ]
                        ],
                        [
                            'id' => 'practice-002',
                            'title' => 'Cross-Docking for High-Velocity SKUs',
                            'description' => 'Implement cross-docking operations for fast-moving items to eliminate storage costs and reduce lead times.',
                            'category' => 'warehouse',
                            'readTime' => '10 min read',
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
                            'impactBadge' => '50% Faster Throughput',
                            'link' => '/best-practices/cross-docking',
                            'tags' => ['warehouse', 'cross-docking', 'efficiency'],
                            'metrics' => [
                                ['value' => '50%', 'label' => 'Faster Throughput'],
                                ['value' => '30%', 'label' => 'Labor Savings'],
                                ['value' => '24h', 'label' => 'Turnaround']
                            ],
                            'steps' => ['Identify high-velocity SKUs', 'Design direct flow', 'Train staff', 'Monitor metrics'],
                            'downloadable' => true,
                            'author' => [
                                'name' => 'Marcus Thorne',
                                'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop'
                            ]
                        ],
                        [
                            'id' => 'practice-003',
                            'title' => 'Vendor-Managed Inventory Programs',
                            'description' => 'Empower key suppliers to manage inventory levels based on real-time consumption data.',
                            'category' => 'fulfillment',
                            'readTime' => '8 min read',
                            'image' => 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop',
                            'impactBadge' => '40% Fewer Stockouts',
                            'link' => '/best-practices/vendor-managed-inventory',
                            'tags' => ['suppliers', 'vmi', 'replenishment'],
                            'metrics' => [
                                ['value' => '40%', 'label' => 'Fewer Stockouts'],
                                ['value' => '25%', 'label' => 'Admin Reduction'],
                                ['value' => '15%', 'label' => 'Inventory Reduction']
                            ],
                            'steps' => ['Select strategic suppliers', 'Set up data sharing', 'Define service levels', 'Monitor performance'],
                            'downloadable' => true,
                            'author' => [
                                'name' => 'Alex Rivera',
                                'avatar' => 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop'
                            ]
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 407,
                'section_key' => 'bestPractices',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => 'Best Practices Hub',
                    'title' => [
                        'prefix' => 'Supply Chain',
                        'highlight' => 'Best Practices'
                    ],
                    'description' => 'Comprehensive resources, expert insights, and proven frameworks to help you achieve supply chain excellence.',
                    'heroImage' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=500&fit=crop',
                    'searchPlaceholder' => 'Search best practices, webinars, or toolkits...',
                    'defaultViewMode' => 'grid',
                    'showNewsletter' => true,
                    'newsletter' => [
                        'title' => 'Get the latest best practices',
                        'description' => 'Subscribe to receive weekly best practices, case studies, and expert insights.',
                        'stats' => [
                            'practices' => '50+',
                            'experts' => '25+'
                        ],
                        'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                    ],
                    'categories' => [
                        ['id' => 'all', 'label' => 'All Practices', 'icon' => 'sparkles', 'count' => 12],
                        ['id' => 'inventory', 'label' => 'Inventory', 'icon' => 'cube'],
                        ['id' => 'warehouse', 'label' => 'Warehouse', 'icon' => 'cube'],
                        ['id' => 'transportation', 'label' => 'Transportation', 'icon' => 'truck'],
                        ['id' => 'fulfillment', 'label' => 'Fulfillment', 'icon' => 'check'],
                        ['id' => 'technology', 'label' => 'Technology', 'icon' => 'cog']
                    ],
                    'maturityAssessment' => [
                        'questions' => [
                            'How well do you track inventory accuracy across all locations?',
                            'How automated are your replenishment decisions?',
                            'How integrated are your supply chain systems?',
                            'How effectively do you forecast demand?',
                            'How mature is your supplier collaboration process?'
                        ],
                        'recommendations' => [
                            'initial' => ['Establish baseline inventory accuracy metrics', 'Implement basic cycle counting', 'Document current processes'],
                            'developing' => ['Automate reorder point calculations', 'Integrate sales and inventory data', 'Set service level targets'],
                            'defined' => ['Implement demand forecasting', 'Establish supplier scorecards', 'Create exception management workflows'],
                            'managed' => ['Deploy predictive analytics', 'Enable real-time visibility', 'Optimize safety stock dynamically'],
                            'optimizing' => ['Implement AI-driven replenishment', 'Build digital twin capabilities', 'Create autonomous exception resolution']
                        ],
                        'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
                    ],
                    'practices' => [
                        [
                            'id' => 'practice-001',
                            'title' => 'Demand-Driven Inventory Optimization',
                            'description' => 'Transition from forecast-driven to demand-driven inventory management to reduce carrying costs while maintaining service levels.',
                            'category' => 'inventory',
                            'readTime' => '12 min read',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
                            'link' => '/best-practices/demand-driven-inventory',
                            'videoUrl' => 'https://example.com/video',
                            'tags' => ['inventory', 'forecasting', 'optimization'],
                            'keyMetrics' => [
                                ['value' => '25%', 'label' => 'Cost Reduction'],
                                ['value' => '99.5%', 'label' => 'Service Level'],
                                ['value' => '30%', 'label' => 'Turnover']
                            ],
                            'author' => [
                                'name' => 'Sarah Chen',
                                'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop'
                            ]
                        ],
                        [
                            'id' => 'practice-002',
                            'title' => 'Warehouse Slotting Optimization',
                            'description' => 'Continuously optimize product placement based on demand velocity to reduce travel time and increase throughput.',
                            'category' => 'warehouse',
                            'readTime' => '10 min read',
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
                            'link' => '/best-practices/slotting-optimization',
                            'videoUrl' => 'https://example.com/video',
                            'tags' => ['warehouse', 'slotting', 'efficiency'],
                            'keyMetrics' => [
                                ['value' => '30%', 'label' => 'Less Travel'],
                                ['value' => '25%', 'label' => 'Higher Picks'],
                                ['value' => '15%', 'label' => 'Space Savings']
                            ],
                            'author' => [
                                'name' => 'Marcus Thorne',
                                'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop'
                            ]
                        ],
                        [
                            'id' => 'practice-003',
                            'title' => 'Vendor-Managed Inventory',
                            'description' => 'Empower key suppliers to manage inventory levels based on real-time consumption data and agreed targets.',
                            'category' => 'fulfillment',
                            'readTime' => '8 min read',
                            'image' => 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop',
                            'link' => '/best-practices/vendor-managed-inventory',
                            'videoUrl' => 'https://example.com/video',
                            'tags' => ['suppliers', 'vmi', 'replenishment'],
                            'keyMetrics' => [
                                ['value' => '40%', 'label' => 'Fewer Stockouts'],
                                ['value' => '25%', 'label' => 'Admin Reduction'],
                                ['value' => '15%', 'label' => 'Inventory Reduction']
                            ],
                            'author' => [
                                'name' => 'Alex Rivera',
                                'avatar' => 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop'
                            ]
                        ],
                        [
                            'id' => 'practice-004',
                            'title' => 'Real-Time Inventory Visibility',
                            'description' => 'Implement unified inventory platform for single source of truth across all sales channels and warehouses.',
                            'category' => 'technology',
                            'readTime' => '11 min read',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
                            'link' => '/best-practices/real-time-visibility',
                            'videoUrl' => 'https://example.com/video',
                            'tags' => ['visibility', 'omni-channel', 'real-time'],
                            'keyMetrics' => [
                                ['value' => '100%', 'label' => 'Accuracy'],
                                ['value' => '0', 'label' => 'Overselling'],
                                ['value' => '99.9%', 'label' => 'Uptime']
                            ],
                            'author' => [
                                'name' => 'Dr. Emily Park',
                                'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop'
                            ]
                        ]
                    ],
                    'webinars' => [
                        [
                            'id' => 'web-001',
                            'title' => 'The Future of Inventory Management',
                            'description' => 'Join industry experts as they discuss AI-driven forecasting and autonomous replenishment.',
                            'thumbnail' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
                            'videoUrl' => 'https://example.com/video',
                            'duration' => '45 min',
                            'date' => 'Mar 15, 2024',
                            'category' => 'technology',
                            'speaker' => [
                                'name' => 'Sarah Chen',
                                'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop'
                            ]
                        ],
                        [
                            'id' => 'web-002',
                            'title' => 'Warehouse Automation Strategies',
                            'description' => 'Learn how to implement robotics and automation in your warehouse operations.',
                            'thumbnail' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
                            'videoUrl' => 'https://example.com/video',
                            'duration' => '60 min',
                            'date' => 'Mar 10, 2024',
                            'category' => 'warehouse',
                            'speaker' => [
                                'name' => 'Marcus Thorne',
                                'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop'
                            ]
                        ],
                        [
                            'id' => 'web-003',
                            'title' => 'Supply Chain Sustainability',
                            'description' => 'Reduce carbon footprint while improving efficiency and reducing costs.',
                            'thumbnail' => 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop',
                            'videoUrl' => 'https://example.com/video',
                            'duration' => '50 min',
                            'date' => 'Mar 5, 2024',
                            'category' => 'sustainability',
                            'speaker' => [
                                'name' => 'Elena Volkov',
                                'avatar' => 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=80&h=80&fit=crop'
                            ]
                        ]
                    ],
                    'toolkits' => [
                        [
                            'id' => 'tk-001',
                            'title' => 'Inventory Optimization Toolkit',
                            'description' => 'Templates, calculators, and checklists for implementing demand-driven inventory management.',
                            'format' => 'PDF + Excel',
                            'pages' => 45,
                            'icon' => 'calculator',
                            'downloadLink' => '/toolkits/inventory-optimization',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop'
                        ],
                        [
                            'id' => 'tk-002',
                            'title' => 'Warehouse Efficiency Guide',
                            'description' => 'Step-by-step implementation guide for slotting optimization and process improvement.',
                            'format' => 'PDF + Video',
                            'pages' => 38,
                            'icon' => 'template',
                            'downloadLink' => '/toolkits/warehouse-efficiency',
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop'
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 408,
                'section_key' => 'bestPractices',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],


            // Company News Section 
            [
                'id' => 409,
                'section_key' => 'companyNews',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => 'Latest News',
                    'title' => [
                        'prefix' => 'Company',
                        'highlight' => 'News',
                        'suffix' => '& Announcements'
                    ],
                    'description' => 'Stay updated with the latest company announcements, product releases, partnerships, and industry recognition.',
                    'heroImage' => 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&h=500&fit=crop',
                    'searchPlaceholder' => 'Search news by title, category, or keyword...',
                    'showViewAll' => true,
                    'viewAllLink' => '/news',
                    'showPressMentions' => true,
                    'showNewsletter' => true,
                    'newsletter' => [
                        'title' => 'Subscribe to Our Newsletter',
                        'description' => 'Get the latest company news, product updates, and industry insights delivered straight to your inbox.',
                        'disclaimer' => 'No spam, unsubscribe anytime. We respect your privacy.',
                        'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                    ],
                    'categories' => [
                        ['id' => 'all', 'label' => 'All News', 'icon' => 'newspaper'],
                        ['id' => 'announcement', 'label' => 'Announcements', 'icon' => 'sparkles'],
                        ['id' => 'product', 'label' => 'Product Updates', 'icon' => 'chip'],
                        ['id' => 'partnership', 'label' => 'Partnerships', 'icon' => 'handshake'],
                        ['id' => 'award', 'label' => 'Awards', 'icon' => 'trophy'],
                        ['id' => 'event', 'label' => 'Events', 'icon' => 'calendar']
                    ],
                    'pressMentions' => [
                        ['name' => 'TechCrunch', 'logo' => 'https://placehold.co/120x40/1e293b/ffffff?text=TechCrunch', 'link' => 'https://techcrunch.com'],
                        ['name' => 'Forbes', 'logo' => 'https://placehold.co/120x40/1e293b/ffffff?text=Forbes', 'link' => 'https://forbes.com'],
                        ['name' => 'VentureBeat', 'logo' => 'https://placehold.co/120x40/1e293b/ffffff?text=VentureBeat', 'link' => 'https://venturebeat.com'],
                        ['name' => 'Supply Chain Dive', 'logo' => 'https://placehold.co/140x40/1e293b/ffffff?text=Supply+Chain+Dive', 'link' => 'https://supplychaindive.com']
                    ],
                    'featuredNews' => [
                        'id' => 'feat-001',
                        'title' => 'Inventory Platform Raises $50M Series C to Transform Supply Chain Intelligence',
                        'excerpt' => 'The funding will accelerate AI product development and global expansion to serve enterprise customers across North America, Europe, and Asia-Pacific.',
                        'date' => '2024-03-18',
                        'views' => '5.2k',
                        'category' => 'announcement',
                        'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
                        'link' => '/news/series-c-funding',
                        'author' => [
                            'name' => 'Sarah Chen',
                            'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop'
                        ]
                    ],
                    'news' => [
                        [
                            'id' => 'news-001',
                            'title' => 'Strategic Partnership with Global Logistics Provider',
                            'excerpt' => 'New integration enables real-time freight tracking and automated carrier selection across 50+ countries.',
                            'date' => '2024-03-15',
                            'views' => '2.1k',
                            'category' => 'partnership',
                            'image' => 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&h=400&fit=crop',
                            'link' => '/news/strategic-partnership-logistics',
                            'tags' => ['partnership', 'logistics', 'integration'],
                            'author' => [
                                'name' => 'Marcus Thorne',
                                'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop'
                            ]
                        ],
                        [
                            'id' => 'news-002',
                            'title' => 'Named G2 Leader for Inventory Management 2024',
                            'excerpt' => 'Recognized as a Leader in the Winter 2024 Grid Report with highest customer satisfaction score.',
                            'date' => '2024-03-12',
                            'views' => '3.4k',
                            'category' => 'award',
                            'image' => 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&h=400&fit=crop',
                            'link' => '/news/g2-leader-2024',
                            'tags' => ['award', 'recognition', 'g2'],
                            'author' => [
                                'name' => 'Alex Rivera',
                                'avatar' => 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop'
                            ]
                        ],
                        [
                            'id' => 'news-003',
                            'title' => 'Introducing AI-Powered Demand Forecasting',
                            'excerpt' => 'New machine learning models achieve 96% forecast accuracy with automated exception handling.',
                            'date' => '2024-03-10',
                            'views' => '4.2k',
                            'category' => 'product',
                            'image' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
                            'link' => '/news/ai-demand-forecasting',
                            'videoUrl' => 'https://example.com/video',
                            'tags' => ['product', 'ai', 'forecasting'],
                            'author' => [
                                'name' => 'Dr. Emily Park',
                                'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop'
                            ]
                        ],
                        [
                            'id' => 'news-004',
                            'title' => 'Supply Chain Summit 2024 - Save the Date',
                            'excerpt' => 'Join us in San Francisco for our annual user conference featuring keynotes from industry leaders.',
                            'date' => '2024-03-05',
                            'views' => '1.8k',
                            'category' => 'event',
                            'image' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop',
                            'link' => '/news/supply-chain-summit-2024',
                            'tags' => ['event', 'conference', 'community'],
                            'author' => [
                                'name' => 'Elena Volkov',
                                'avatar' => 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=80&h=80&fit=crop'
                            ]
                        ],
                        [
                            'id' => 'news-005',
                            'title' => 'New European Data Center Now Live',
                            'excerpt' => 'Frankfurt-based facility ensures GDPR compliance and reduces latency for EU customers by 70%.',
                            'date' => '2024-02-28',
                            'views' => '2.3k',
                            'category' => 'announcement',
                            'image' => 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
                            'link' => '/news/europe-data-center',
                            'tags' => ['infrastructure', 'europe', 'compliance'],
                            'author' => [
                                'name' => 'Marcus Thorne',
                                'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop'
                            ]
                        ],
                        [
                            'id' => 'news-006',
                            'title' => 'Celebrating 10 Years of Innovation',
                            'excerpt' => 'A decade of transforming supply chain management with customer-first technology and continuous improvement.',
                            'date' => '2024-02-20',
                            'views' => '3.1k',
                            'category' => 'announcement',
                            'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop',
                            'link' => '/news/10-year-anniversary',
                            'videoUrl' => 'https://example.com/video',
                            'tags' => ['milestone', 'anniversary', 'company'],
                            'author' => [
                                'name' => 'Sarah Chen',
                                'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop'
                            ]
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 410,
                'section_key' => 'companyNews',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => 'Newsroom',
                    'title' => [
                        'prefix' => 'Latest',
                        'highlight' => 'News',
                        'suffix' => '& Press Releases'
                    ],
                    'description' => 'Stay informed about our latest announcements, product innovations, partnerships, and company milestones.',
                    'heroImage' => 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&h=500&fit=crop',
                    'searchPlaceholder' => 'Search news, press releases, or topics...',
                    'defaultViewMode' => 'grid',
                    'heroStats' => [
                        ['value' => '150+', 'label' => 'News Articles'],
                        ['value' => '50+', 'label' => 'Press Releases'],
                        ['value' => '30+', 'label' => 'Awards Received'],
                        ['value' => '100+', 'label' => 'Media Mentions']
                    ],
                    'showPressKit' => true,
                    'pressKitLink' => '/press-kit',
                    'showMediaContact' => true,
                    'mediaContact' => [
                        'name' => 'Sarah Johnson',
                        'title' => 'Head of Communications',
                        'email' => 'media@supplychainpro.com',
                        'phone' => '+1 (555) 123-4567',
                        'image' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
                    ],
                    'categories' => [
                        ['id' => 'all', 'label' => 'All News', 'icon' => 'newspaper'],
                        ['id' => 'announcement', 'label' => 'Announcements', 'icon' => 'sparkles'],
                        ['id' => 'product', 'label' => 'Product Updates', 'icon' => 'chip'],
                        ['id' => 'partnership', 'label' => 'Partnerships', 'icon' => 'handshake'],
                        ['id' => 'award', 'label' => 'Awards', 'icon' => 'trophy'],
                        ['id' => 'event', 'label' => 'Events', 'icon' => 'calendar']
                    ],
                    'news' => [
                        [
                            'id' => 'news-001',
                            'title' => 'Series C Funding: $75M to Accelerate Global Expansion',
                            'excerpt' => 'New funding round led by Global Ventures to expand AI capabilities and enter three new international markets.',
                            'content' => 'The oversubscribed round brings total funding to $150M and will be used to double our engineering team and open offices in Singapore, London, and São Paulo.',
                            'date' => '2024-03-18',
                            'views' => '8.2k',
                            'category' => 'announcement',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
                            'link' => '/news/series-c-funding',
                            'isPressRelease' => true,
                            'tags' => ['funding', 'expansion', 'ai'],
                            'author' => [
                                'name' => 'Sarah Johnson',
                                'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop'
                            ]
                        ],
                        [
                            'id' => 'news-002',
                            'title' => 'Strategic Partnership with Global Logistics Leader',
                            'excerpt' => 'Integration with Maersk enables real-time shipment tracking and automated carrier selection across 100+ countries.',
                            'content' => 'This partnership will provide mutual customers with seamless visibility from warehouse to final delivery, reducing transit times by up to 30%.',
                            'date' => '2024-03-14',
                            'views' => '4.5k',
                            'category' => 'partnership',
                            'image' => 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&h=400&fit=crop',
                            'link' => '/news/global-logistics-partnership',
                            'isPressRelease' => true,
                            'tags' => ['partnership', 'logistics', 'integration'],
                            'author' => [
                                'name' => 'Marcus Chen',
                                'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop'
                            ]
                        ],
                        [
                            'id' => 'news-003',
                            'title' => 'Named G2 Leader for Fifth Consecutive Quarter',
                            'excerpt' => 'Highest customer satisfaction score in inventory management category with 98% recommendation rate.',
                            'content' => 'We\'re honored to be recognized as a Leader in the G2 Spring 2024 Grid Report. Our customers consistently rate us highest for ease of use, quality of support, and ROI.',
                            'date' => '2024-03-10',
                            'views' => '3.2k',
                            'category' => 'award',
                            'image' => 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&h=400&fit=crop',
                            'link' => '/news/g2-leader-2024',
                            'tags' => ['award', 'g2', 'recognition'],
                            'author' => [
                                'name' => 'Emily Park',
                                'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop'
                            ]
                        ],
                        [
                            'id' => 'news-004',
                            'title' => 'AI-Powered Demand Forecasting Now Generally Available',
                            'excerpt' => 'New machine learning models achieve 96% forecast accuracy with automated exception handling.',
                            'content' => 'After six months in beta with 50+ enterprise customers, our AI Demand Forecasting engine is now available to all customers.',
                            'date' => '2024-03-05',
                            'views' => '5.8k',
                            'category' => 'product',
                            'image' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
                            'link' => '/news/ai-demand-forecasting',
                            'videoUrl' => 'https://example.com/video',
                            'tags' => ['product', 'ai', 'forecasting'],
                            'author' => [
                                'name' => 'Alex Rivera',
                                'avatar' => 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop'
                            ]
                        ],
                        [
                            'id' => 'news-005',
                            'title' => 'Supply Chain Summit 2024 Agenda Announced',
                            'excerpt' => 'Join industry leaders in San Francisco for two days of keynotes, workshops, and networking.',
                            'content' => 'The summit will feature keynotes from Fortune 500 supply chain executives, hands-on workshops on AI and automation, and exclusive previews of our 2025 product roadmap.',
                            'date' => '2024-02-28',
                            'views' => '2.4k',
                            'category' => 'event',
                            'image' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop',
                            'link' => '/news/supply-chain-summit-2024',
                            'tags' => ['event', 'conference', 'community'],
                            'author' => [
                                'name' => 'Elena Volkov',
                                'avatar' => 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=80&h=80&fit=crop'
                            ]
                        ],
                        [
                            'id' => 'news-006',
                            'title' => 'New European Data Center Launches in Frankfurt',
                            'excerpt' => 'GDPR-compliant infrastructure reduces latency for EU customers by 70% and adds regional failover capabilities.',
                            'content' => 'The new data center is part of our commitment to data sovereignty and performance for European customers.',
                            'date' => '2024-02-20',
                            'views' => '1.9k',
                            'category' => 'announcement',
                            'image' => 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
                            'link' => '/news/europe-data-center',
                            'isPressRelease' => true,
                            'tags' => ['infrastructure', 'europe', 'compliance'],
                            'author' => [
                                'name' => 'Marcus Chen',
                                'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop'
                            ]
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 411,
                'section_key' => 'companyNews',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => 'Media Center',
                    'title' => [
                        'prefix' => 'News',
                        'highlight' => 'Media Center'
                    ],
                    'description' => 'Latest news, press releases, media assets, and company announcements.',
                    'heroImage' => 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&h=500&fit=crop',
                    'autoPlayCarousel' => true,
                    'showNewsletter' => true,
                    'categories' => [
                        ['id' => 'all', 'label' => 'All News', 'icon' => 'newspaper'],
                        ['id' => 'announcement', 'label' => 'Announcements', 'icon' => 'sparkles'],
                        ['id' => 'product', 'label' => 'Product Updates', 'icon' => 'chip'],
                        ['id' => 'partnership', 'label' => 'Partnerships', 'icon' => 'handshake'],
                        ['id' => 'award', 'label' => 'Awards', 'icon' => 'trophy'],
                        ['id' => 'event', 'label' => 'Events', 'icon' => 'calendar'],
                        ['id' => 'financial', 'label' => 'Financial', 'icon' => 'chart']
                    ],
                    'featuredNews' => [
                        [
                            'id' => 'feat-001',
                            'title' => 'Inventory Platform Raises $75M Series C',
                            'excerpt' => 'Oversubscribed round led by Global Ventures to accelerate AI development and global expansion.',
                            'date' => '2024-03-18',
                            'category' => 'financial',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop',
                            'link' => '/news/series-c-funding',
                            'isPressRelease' => true
                        ],
                        [
                            'id' => 'feat-002',
                            'title' => 'Strategic Partnership with Global Logistics Provider',
                            'excerpt' => 'Integration enables real-time tracking across 100+ countries with automated carrier selection.',
                            'date' => '2024-03-14',
                            'category' => 'partnership',
                            'image' => 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1200&h=600&fit=crop',
                            'link' => '/news/global-logistics-partnership',
                            'isPressRelease' => false
                        ]
                    ],
                    'news' => [
                        [
                            'id' => 'news-001',
                            'title' => 'AI-Powered Demand Forecasting Now GA',
                            'excerpt' => 'Machine learning models achieve 96% forecast accuracy with automated exception handling.',
                            'date' => '2024-03-10',
                            'views' => '4.2k',
                            'category' => 'product',
                            'image' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
                            'link' => '/news/ai-demand-forecasting',
                            'author' => [
                                'name' => 'Sarah Chen',
                                'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop'
                            ]
                        ],
                        [
                            'id' => 'news-002',
                            'title' => 'Named G2 Leader for Fifth Consecutive Quarter',
                            'excerpt' => 'Highest customer satisfaction score in inventory management category.',
                            'date' => '2024-03-05',
                            'views' => '3.1k',
                            'category' => 'award',
                            'image' => 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&h=400&fit=crop',
                            'link' => '/news/g2-leader-2024',
                            'author' => [
                                'name' => 'Marcus Thorne',
                                'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop'
                            ]
                        ],
                        [
                            'id' => 'news-003',
                            'title' => 'New European Data Center Launches',
                            'excerpt' => 'GDPR-compliant infrastructure reduces latency for EU customers by 70%.',
                            'date' => '2024-02-28',
                            'views' => '2.3k',
                            'category' => 'announcement',
                            'image' => 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
                            'link' => '/news/europe-data-center',
                            'author' => [
                                'name' => 'Alex Rivera',
                                'avatar' => 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop'
                            ]
                        ]
                    ],
                    'pressReleases' => [
                        [
                            'id' => 'pr-001',
                            'title' => 'Company Announces Q4 2023 Financial Results',
                            'excerpt' => 'Revenue grew 45% YoY with record customer acquisition and retention.',
                            'date' => '2024-02-15',
                            'link' => '/press/q4-2023-earnings'
                        ],
                        [
                            'id' => 'pr-002',
                            'title' => 'Appointment of New Chief Technology Officer',
                            'excerpt' => 'Former Google AI leader joins to accelerate product innovation.',
                            'date' => '2024-01-20',
                            'link' => '/press/new-cto-appointment'
                        ]
                    ],
                    'mediaGallery' => [
                        [
                            'id' => 'media-001',
                            'title' => 'Product Demo - AI Forecasting',
                            'type' => 'video',
                            'thumbnail' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
                            'date' => '2024-03-01',
                            'downloadUrl' => '/media/video-001.mp4'
                        ],
                        [
                            'id' => 'media-002',
                            'title' => 'Company Logo Package',
                            'type' => 'image',
                            'thumbnail' => 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop',
                            'date' => '2024-02-15',
                            'downloadUrl' => '/media/logos.zip'
                        ]
                    ],
                    'brandAssets' => [
                        ['name' => 'Logo - Primary', 'format' => 'PNG, SVG', 'icon' => 'photo', 'link' => '/assets/logo-primary.zip'],
                        ['name' => 'Logo - Secondary', 'format' => 'PNG, SVG', 'icon' => 'photo', 'link' => '/assets/logo-secondary.zip'],
                        ['name' => 'Brand Guidelines', 'format' => 'PDF', 'icon' => 'document', 'link' => '/assets/brand-guidelines.pdf'],
                        ['name' => 'Product Screenshots', 'format' => 'ZIP', 'icon' => 'archive', 'link' => '/assets/screenshots.zip']
                    ],
                    'stockInfo' => [
                        'symbol' => 'SCP',
                        'price' => '$45.67',
                        'marketCap' => '$2.5B',
                        'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop'
                    ],
                    'financialReports' => [
                        ['title' => 'Annual Report 2023', 'date' => 'Feb 2024', 'link' => '/reports/annual-2023.pdf'],
                        ['title' => 'Q4 2023 Earnings', 'date' => 'Feb 2024', 'link' => '/reports/q4-2023.pdf'],
                        ['title' => 'Investor Presentation', 'date' => 'Jan 2024', 'link' => '/reports/investor-presentation.pdf']
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 412,
                'section_key' => 'companyNews',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],


            // Expert Articles Section 
            [
                'id' => 413,
                'section_key' => 'expertArticles',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => 'Expert Insights',
                    'title' => [
                        'prefix' => 'Thought',
                        'highlight' => 'Leadership',
                        'suffix' => 'Articles'
                    ],
                    'description' => 'Expert perspectives, industry insights, and actionable advice from supply chain leaders and innovators.',
                    'heroImage' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=500&fit=crop',
                    'searchPlaceholder' => 'Search articles by title, topic, or expert...',
                    'showExperts' => true,
                    'showViewAll' => true,
                    'viewAllLink' => '/expert-articles',
                    'showNewsletter' => true,
                    'newsletter' => [
                        'title' => 'Get Expert Insights Delivered',
                        'description' => 'Subscribe to receive the latest expert articles, industry insights, and thought leadership content.',
                        'disclaimer' => 'No spam, unsubscribe anytime. Get 1-2 emails per week.',
                        'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                    ],
                    'categories' => [
                        ['id' => 'all', 'label' => 'All Topics', 'icon' => 'newspaper'],
                        ['id' => 'strategy', 'label' => 'Strategy', 'icon' => 'chart'],
                        ['id' => 'technology', 'label' => 'Technology', 'icon' => 'chip'],
                        ['id' => 'operations', 'label' => 'Operations', 'icon' => 'cog'],
                        ['id' => 'sustainability', 'label' => 'Sustainability', 'icon' => 'globe'],
                        ['id' => 'leadership', 'label' => 'Leadership', 'icon' => 'users'],
                        ['id' => 'innovation', 'label' => 'Innovation', 'icon' => 'rocket']
                    ],
                    'experts' => [
                        [
                            'id' => 'exp-001',
                            'name' => 'Dr. Sarah Chen',
                            'title' => 'Chief Supply Chain Officer',
                            'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop'
                        ],
                        [
                            'id' => 'exp-002',
                            'name' => 'Marcus Thorne',
                            'title' => 'VP of Operations',
                            'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop'
                        ],
                        [
                            'id' => 'exp-003',
                            'name' => 'Alex Rivera',
                            'title' => 'Technology Innovation Lead',
                            'avatar' => 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop'
                        ],
                        [
                            'id' => 'exp-004',
                            'name' => 'Dr. Emily Park',
                            'title' => 'AI Research Director',
                            'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop'
                        ]
                    ],
                    'featuredArticle' => [
                        'id' => 'feat-001',
                        'title' => 'The AI Revolution in Supply Chain: Beyond the Hype',
                        'excerpt' => 'How generative AI and machine learning are transforming demand forecasting, inventory optimization, and logistics planning.',
                        'date' => '2024-03-18',
                        'readTime' => '12 min read',
                        'views' => '4.2k',
                        'category' => 'technology',
                        'image' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop',
                        'link' => '/expert-articles/ai-supply-chain-revolution',
                        'author' => [
                            'name' => 'Dr. Sarah Chen',
                            'title' => 'Chief Supply Chain Officer',
                            'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop'
                        ]
                    ],
                    'articles' => [
                        [
                            'id' => 'art-001',
                            'title' => 'Building Resilient Supply Chains in a Volatile World',
                            'excerpt' => 'Strategies for creating adaptive, multi-sourced supply networks that withstand disruptions.',
                            'date' => '2024-03-15',
                            'readTime' => '10 min read',
                            'views' => '2.8k',
                            'category' => 'strategy',
                            'image' => 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&h=400&fit=crop',
                            'link' => '/expert-articles/resilient-supply-chains',
                            'tags' => ['resilience', 'risk', 'strategy'],
                            'author' => [
                                'name' => 'Marcus Thorne',
                                'title' => 'VP of Operations',
                                'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop'
                            ]
                        ],
                        [
                            'id' => 'art-002',
                            'title' => 'Sustainable Logistics: Reducing Carbon Footprint',
                            'excerpt' => 'Practical approaches to green logistics, electric fleets, and carbon-neutral shipping.',
                            'date' => '2024-03-12',
                            'readTime' => '8 min read',
                            'views' => '1.9k',
                            'category' => 'sustainability',
                            'image' => 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop',
                            'link' => '/expert-articles/sustainable-logistics',
                            'tags' => ['sustainability', 'logistics', 'green'],
                            'author' => [
                                'name' => 'Alex Rivera',
                                'title' => 'Technology Innovation Lead',
                                'avatar' => 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop'
                            ]
                        ],
                        [
                            'id' => 'art-003',
                            'title' => 'Predictive Analytics for Inventory Optimization',
                            'excerpt' => 'Leveraging machine learning to reduce stockouts while minimizing carrying costs.',
                            'date' => '2024-03-10',
                            'readTime' => '11 min read',
                            'views' => '3.4k',
                            'category' => 'technology',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
                            'link' => '/expert-articles/predictive-analytics',
                            'tags' => ['analytics', 'forecasting', 'ai'],
                            'author' => [
                                'name' => 'Dr. Emily Park',
                                'title' => 'AI Research Director',
                                'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop'
                            ]
                        ],
                        [
                            'id' => 'art-004',
                            'title' => 'Leading Through Uncertainty: Supply Chain Leadership',
                            'excerpt' => 'How effective leaders navigate disruption, build trust, and drive transformation.',
                            'date' => '2024-03-05',
                            'readTime' => '9 min read',
                            'views' => '2.1k',
                            'category' => 'leadership',
                            'image' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop',
                            'link' => '/expert-articles/leadership-through-uncertainty',
                            'tags' => ['leadership', 'culture', 'change'],
                            'author' => [
                                'name' => 'Dr. Sarah Chen',
                                'title' => 'Chief Supply Chain Officer',
                                'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop'
                            ]
                        ],
                        [
                            'id' => 'art-005',
                            'title' => 'Warehouse Automation: ROI and Implementation',
                            'excerpt' => 'Real-world case studies on ASRS, AMRs, and pick-to-light systems.',
                            'date' => '2024-02-28',
                            'readTime' => '10 min read',
                            'views' => '2.5k',
                            'category' => 'operations',
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
                            'link' => '/expert-articles/warehouse-automation',
                            'tags' => ['warehouse', 'automation', 'roi'],
                            'author' => [
                                'name' => 'Marcus Thorne',
                                'title' => 'VP of Operations',
                                'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop'
                            ]
                        ],
                        [
                            'id' => 'art-006',
                            'title' => 'The Circular Economy: Redesigning Returns',
                            'excerpt' => 'How leading retailers are turning reverse logistics into a profit center.',
                            'date' => '2024-02-25',
                            'readTime' => '7 min read',
                            'views' => '1.7k',
                            'category' => 'sustainability',
                            'image' => 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&h=400&fit=crop',
                            'link' => '/expert-articles/circular-economy',
                            'tags' => ['circular', 'returns', 'sustainability'],
                            'author' => [
                                'name' => 'Alex Rivera',
                                'title' => 'Technology Innovation Lead',
                                'avatar' => 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop'
                            ]
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 414,
                'section_key' => 'expertArticles',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => 'Expert Voices',
                    'title' => [
                        'prefix' => 'Insights from',
                        'highlight' => 'Industry Leaders'
                    ],
                    'description' => 'Exclusive interviews, deep-dive analysis, and expert perspectives on the future of supply chain management.',
                    'heroImage' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=500&fit=crop',
                    'showNewsletter' => true,
                    'newsletter' => [
                        'title' => 'Get the latest expert articles',
                        'description' => 'Subscribe to receive weekly insights from industry leaders delivered to your inbox.',
                        'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                    ],
                    'categories' => [
                        ['id' => 'all', 'label' => 'All Topics', 'icon' => 'newspaper'],
                        ['id' => 'strategy', 'label' => 'Strategy', 'icon' => 'chart'],
                        ['id' => 'technology', 'label' => 'Technology', 'icon' => 'chip'],
                        ['id' => 'operations', 'label' => 'Operations', 'icon' => 'cog'],
                        ['id' => 'sustainability', 'label' => 'Sustainability', 'icon' => 'globe'],
                        ['id' => 'leadership', 'label' => 'Leadership', 'icon' => 'users'],
                        ['id' => 'innovation', 'label' => 'Innovation', 'icon' => 'rocket']
                    ],
                    'experts' => [
                        [
                            'id' => 'exp-001',
                            'name' => 'Dr. Sarah Chen',
                            'title' => 'Chief Supply Chain Officer',
                            'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop',
                            'bio' => 'Former VP at Fortune 500 retailer with 20+ years of experience in global supply chain transformation.',
                            'articles' => 24,
                            'views' => '15k+',
                            'linkedin' => 'https://linkedin.com/in/sarahchen',
                            'videoIntro' => 'https://example.com/intro-sarah.mp4'
                        ],
                        [
                            'id' => 'exp-002',
                            'name' => 'Marcus Thorne',
                            'title' => 'VP of Operations',
                            'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop',
                            'bio' => 'Operations leader specializing in warehouse automation and lean methodologies.',
                            'articles' => 18,
                            'views' => '12k+',
                            'linkedin' => 'https://linkedin.com/in/marcusthorne'
                        ],
                        [
                            'id' => 'exp-003',
                            'name' => 'Dr. Emily Park',
                            'title' => 'AI Research Director',
                            'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop',
                            'bio' => 'PhD in Machine Learning, leading AI innovation for supply chain optimization.',
                            'articles' => 31,
                            'views' => '22k+',
                            'linkedin' => 'https://linkedin.com/in/emilypark'
                        ]
                    ],
                    'qaItems' => [
                        [
                            'question' => 'What\'s the biggest challenge facing supply chains today?',
                            'answer' => 'The lack of real-time visibility across multi-tier supplier networks. Most companies still operate with weeks-old data, making proactive risk management impossible.',
                            'expert' => [
                                'name' => 'Dr. Sarah Chen',
                                'title' => 'Chief Supply Chain Officer',
                                'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop'
                            ]
                        ],
                        [
                            'question' => 'How can small businesses compete with larger competitors on inventory management?',
                            'answer' => 'Leverage cloud-based inventory platforms that offer enterprise-grade features without the overhead. Focus on your niche and use data to optimize what matters most.',
                            'expert' => [
                                'name' => 'Marcus Thorne',
                                'title' => 'VP of Operations',
                                'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop'
                            ]
                        ],
                        [
                            'question' => 'What\'s the ROI of AI in inventory management?',
                            'answer' => 'Our research shows 15-25% reduction in carrying costs, 30-40% fewer stockouts, and 10-15% improvement in forecast accuracy within the first 6 months.',
                            'expert' => [
                                'name' => 'Dr. Emily Park',
                                'title' => 'AI Research Director',
                                'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop'
                            ]
                        ]
                    ],
                    'videoLibrary' => [
                        [
                            'id' => 'vid-001',
                            'title' => 'The Future of Predictive Inventory',
                            'duration' => '15:23',
                            'thumbnail' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
                            'url' => 'https://example.com/video1.mp4',
                            'expert' => [
                                'name' => 'Dr. Sarah Chen',
                                'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop'
                            ]
                        ],
                        [
                            'id' => 'vid-002',
                            'title' => 'Warehouse Automation Walkthrough',
                            'duration' => '12:45',
                            'thumbnail' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
                            'url' => 'https://example.com/video2.mp4',
                            'expert' => [
                                'name' => 'Marcus Thorne',
                                'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop'
                            ]
                        ]
                    ],
                    'articles' => [
                        [
                            'id' => 'art-001',
                            'title' => 'Building Resilient Supply Chains in a Volatile World',
                            'excerpt' => 'Strategies for creating adaptive, multi-sourced supply networks that withstand disruptions.',
                            'date' => '2024-03-15',
                            'readTime' => '10 min read',
                            'category' => 'strategy',
                            'image' => 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&h=400&fit=crop',
                            'link' => '/expert-articles/resilient-supply-chains',
                            'tags' => ['resilience', 'risk', 'strategy'],
                            'author' => [
                                'id' => 'exp-002',
                                'name' => 'Marcus Thorne',
                                'title' => 'VP of Operations',
                                'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop'
                            ]
                        ],
                        [
                            'id' => 'art-002',
                            'title' => 'Predictive Analytics for Inventory Optimization',
                            'excerpt' => 'Leveraging machine learning to reduce stockouts while minimizing carrying costs.',
                            'date' => '2024-03-10',
                            'readTime' => '11 min read',
                            'category' => 'technology',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
                            'link' => '/expert-articles/predictive-analytics',
                            'tags' => ['analytics', 'forecasting', 'ai'],
                            'author' => [
                                'id' => 'exp-003',
                                'name' => 'Dr. Emily Park',
                                'title' => 'AI Research Director',
                                'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop'
                            ]
                        ],
                        [
                            'id' => 'art-003',
                            'title' => 'The AI Revolution in Supply Chain',
                            'excerpt' => 'How generative AI is transforming demand forecasting and inventory planning.',
                            'date' => '2024-03-05',
                            'readTime' => '12 min read',
                            'category' => 'innovation',
                            'image' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
                            'link' => '/expert-articles/ai-supply-chain',
                            'tags' => ['ai', 'innovation', 'future'],
                            'author' => [
                                'id' => 'exp-001',
                                'name' => 'Dr. Sarah Chen',
                                'title' => 'Chief Supply Chain Officer',
                                'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop'
                            ]
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 415,
                'section_key' => 'expertArticles',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => 'Expert Knowledge Hub',
                    'title' => [
                        'prefix' => 'Learn from',
                        'highlight' => 'World-Class Experts'
                    ],
                    'description' => 'Access masterclasses, research papers, and exclusive content from leading supply chain experts and practitioners.',
                    'heroImage' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=500&fit=crop',
                    'showNewsletter' => true,
                    'newsletter' => [
                        'title' => 'Get Expert Insights',
                        'description' => 'Subscribe to receive exclusive masterclasses, research papers, and expert articles.',
                        'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                    ],
                    'categories' => [
                        ['id' => 'all', 'label' => 'All Topics', 'icon' => 'newspaper'],
                        ['id' => 'strategy', 'label' => 'Strategy', 'icon' => 'chart'],
                        ['id' => 'technology', 'label' => 'Technology', 'icon' => 'chip'],
                        ['id' => 'operations', 'label' => 'Operations', 'icon' => 'cog'],
                        ['id' => 'sustainability', 'label' => 'Sustainability', 'icon' => 'globe'],
                        ['id' => 'leadership', 'label' => 'Leadership', 'icon' => 'users'],
                        ['id' => 'innovation', 'label' => 'Innovation', 'icon' => 'rocket']
                    ],
                    'featuredMasterclass' => [
                        'id' => 'mc-feat',
                        'title' => 'Supply Chain Digital Transformation',
                        'description' => 'A comprehensive 8-week program covering AI, automation, and analytics for modern supply chains.',
                        'level' => 'Advanced',
                        'duration' => '8 weeks',
                        'lessons' => 24,
                        'rating' => 4.9,
                        'reviews' => 1240,
                        'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
                        'link' => '/masterclasses/digital-transformation',
                        'instructor' => [
                            'name' => 'Dr. Sarah Chen',
                            'title' => 'Chief Supply Chain Officer',
                            'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop'
                        ]
                    ],
                    'masterclasses' => [
                        [
                            'id' => 'mc-001',
                            'title' => 'AI-Powered Demand Forecasting',
                            'description' => 'Master machine learning techniques for accurate demand prediction and inventory optimization.',
                            'level' => 'Intermediate',
                            'duration' => '6 hours',
                            'lessons' => 12,
                            'rating' => 4.8,
                            'reviews' => 890,
                            'image' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
                            'link' => '/masterclasses/ai-demand-forecasting',
                            'instructor' => [
                                'name' => 'Dr. Emily Park',
                                'title' => 'AI Research Director',
                                'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop'
                            ]
                        ],
                        [
                            'id' => 'mc-002',
                            'title' => 'Warehouse Automation Strategy',
                            'description' => 'Learn to design and implement robotics and automation solutions for distribution centers.',
                            'level' => 'Advanced',
                            'duration' => '5 hours',
                            'lessons' => 10,
                            'rating' => 4.7,
                            'reviews' => 560,
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
                            'link' => '/masterclasses/warehouse-automation',
                            'instructor' => [
                                'name' => 'Marcus Thorne',
                                'title' => 'VP of Operations',
                                'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop'
                            ]
                        ],
                        [
                            'id' => 'mc-003',
                            'title' => 'Supply Chain Sustainability',
                            'description' => 'Practical frameworks for reducing carbon footprint while improving efficiency.',
                            'level' => 'Beginner',
                            'duration' => '4 hours',
                            'lessons' => 8,
                            'rating' => 4.9,
                            'reviews' => 430,
                            'image' => 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop',
                            'link' => '/masterclasses/supply-chain-sustainability',
                            'instructor' => [
                                'name' => 'Elena Volkov',
                                'title' => 'Sustainability Lead',
                                'avatar' => 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=80&h=80&fit=crop'
                            ]
                        ]
                    ],
                    'researchPapers' => [
                        [
                            'id' => 'rp-001',
                            'title' => 'The Impact of AI on Inventory Optimization',
                            'excerpt' => 'A comprehensive study of 500+ enterprises showing 25% reduction in carrying costs.',
                            'abstract' => 'This research analyzes implementation of AI-based inventory optimization across retail, manufacturing, and distribution sectors, revealing key success factors and ROI metrics.',
                            'authors' => ['Dr. Sarah Chen', 'Dr. Emily Park'],
                            'citations' => 127,
                            'date' => '2024-01-15',
                            'category' => 'technology',
                            'downloadUrl' => '/papers/ai-inventory-optimization.pdf',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'rp-002',
                            'title' => 'Resilience in Global Supply Chains',
                            'excerpt' => 'Post-pandemic analysis of supply chain disruption mitigation strategies.',
                            'abstract' => 'This paper examines how companies built resilience through multi-sourcing, inventory buffers, and nearshoring strategies during global disruptions.',
                            'authors' => ['Marcus Thorne', 'Elena Volkov'],
                            'citations' => 89,
                            'date' => '2023-12-10',
                            'category' => 'strategy',
                            'downloadUrl' => '/papers/resilience-supply-chains.pdf',
                            'image' => 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&h=400&fit=crop'
                        ]
                    ],
                    'experts' => [
                        [
                            'id' => 'exp-001',
                            'name' => 'Dr. Sarah Chen',
                            'title' => 'Chief Supply Chain Officer',
                            'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop',
                            'bio' => 'Former VP at Fortune 500 with 20+ years in global supply chain transformation.',
                            'articles' => 24,
                            'yearsExperience' => 20
                        ],
                        [
                            'id' => 'exp-002',
                            'name' => 'Marcus Thorne',
                            'title' => 'VP of Operations',
                            'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop',
                            'bio' => 'Operations leader specializing in warehouse automation and lean methodologies.',
                            'articles' => 18,
                            'yearsExperience' => 15
                        ],
                        [
                            'id' => 'exp-003',
                            'name' => 'Dr. Emily Park',
                            'title' => 'AI Research Director',
                            'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop',
                            'bio' => 'PhD in Machine Learning, leading AI innovation for supply chain optimization.',
                            'articles' => 31,
                            'yearsExperience' => 12
                        ]
                    ],
                    'upcomingEvents' => [
                        [
                            'id' => 'evt-001',
                            'title' => 'Supply Chain AI Summit 2024',
                            'description' => 'Join industry leaders to explore the future of AI in supply chain management.',
                            'date' => '2024-04-15',
                            'time' => '10:00 AM EST',
                            'location' => 'Virtual',
                            'type' => 'Conference',
                            'image' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
                            'link' => '/events/ai-summit-2024',
                            'speaker' => [
                                'name' => 'Dr. Sarah Chen',
                                'title' => 'Chief Supply Chain Officer',
                                'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop'
                            ]
                        ],
                        [
                            'id' => 'evt-002',
                            'title' => 'Warehouse Automation Workshop',
                            'description' => 'Hand-on workshop on implementing robotics and automation in distribution centers.',
                            'date' => '2024-04-22',
                            'time' => '2:00 PM EST',
                            'location' => 'San Francisco, CA',
                            'type' => 'Workshop',
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
                            'link' => '/events/automation-workshop',
                            'speaker' => [
                                'name' => 'Marcus Thorne',
                                'title' => 'VP of Operations',
                                'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop'
                            ]
                        ]
                    ],
                    'articles' => [
                        [
                            'id' => 'art-001',
                            'title' => 'The AI Revolution in Supply Chain',
                            'excerpt' => 'How generative AI is transforming demand forecasting and inventory planning.',
                            'date' => '2024-03-18',
                            'readTime' => '12 min read',
                            'category' => 'technology',
                            'image' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
                            'link' => '/expert-articles/ai-supply-chain',
                            'tags' => ['ai', 'innovation'],
                            'author' => [
                                'id' => 'exp-001',
                                'name' => 'Dr. Sarah Chen',
                                'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop'
                            ]
                        ],
                        [
                            'id' => 'art-002',
                            'title' => 'Building Resilient Supply Chains',
                            'excerpt' => 'Strategies for creating adaptive networks that withstand disruptions.',
                            'date' => '2024-03-15',
                            'readTime' => '10 min read',
                            'category' => 'strategy',
                            'image' => 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&h=400&fit=crop',
                            'link' => '/expert-articles/resilient-supply-chains',
                            'tags' => ['resilience', 'strategy'],
                            'author' => [
                                'id' => 'exp-002',
                                'name' => 'Marcus Thorne',
                                'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop'
                            ]
                        ],
                        [
                            'id' => 'art-003',
                            'title' => 'Predictive Analytics for Inventory',
                            'excerpt' => 'Leveraging ML to reduce stockouts while minimizing carrying costs.',
                            'date' => '2024-03-10',
                            'readTime' => '11 min read',
                            'category' => 'technology',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
                            'link' => '/expert-articles/predictive-analytics',
                            'tags' => ['analytics', 'forecasting'],
                            'author' => [
                                'id' => 'exp-003',
                                'name' => 'Dr. Emily Park',
                                'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop'
                            ]
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 416,
                'section_key' => 'expertArticles',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],


            // Video Content Section
            [
                'id' => 417,
                'section_key' => 'videoContent',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => 'Video Library',
                    'title' => [
                        'prefix' => 'Watch &',
                        'highlight' => 'Learn',
                        'suffix' => 'from Our Experts'
                    ],
                    'description' => 'Explore our collection of video tutorials, webinars, case studies, and expert interviews to enhance your supply chain knowledge.',
                    'heroImage' => 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=1200&h=500&fit=crop',
                    'searchPlaceholder' => 'Search videos by title, topic, or expert...',
                    'showViewAll' => true,
                    'viewAllLink' => '/videos',
                    'showNewsletter' => true,
                    'newsletter' => [
                        'title' => 'Get New Videos Delivered',
                        'description' => 'Subscribe to receive notifications when we release new video content, tutorials, and webinars.',
                        'disclaimer' => 'No spam, unsubscribe anytime. Get 1-2 emails per week.',
                        'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                    ],
                    'categories' => [
                        ['id' => 'all', 'label' => 'All Videos', 'icon' => 'video', 'count' => 12],
                        ['id' => 'tutorial', 'label' => 'Tutorials', 'icon' => 'play'],
                        ['id' => 'webinar', 'label' => 'Webinars', 'icon' => 'video'],
                        ['id' => 'case-study', 'label' => 'Case Studies', 'icon' => 'briefcase'],
                        ['id' => 'interview', 'label' => 'Interviews', 'icon' => 'microphone'],
                        ['id' => 'product-demo', 'label' => 'Product Demos', 'icon' => 'chip']
                    ],
                    'featuredVideo' => [
                        'id' => 'feat-001',
                        'title' => 'The Future of Supply Chain: AI-Driven Inventory Management',
                        'description' => 'Join our experts as they explore how artificial intelligence is transforming inventory optimization and demand forecasting.',
                        'duration' => '45:32',
                        'views' => 15234,
                        'date' => '2024-03-18',
                        'category' => 'webinar',
                        'thumbnail' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1280&h=720&fit=crop',
                        'videoUrl' => 'https://example.com/video.mp4',
                        'presenter' => [
                            'name' => 'Dr. Sarah Chen',
                            'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop'
                        ]
                    ],
                    'playlists' => [
                        [
                            'id' => 'pl-001',
                            'title' => 'Supply Chain Fundamentals',
                            'description' => 'Essential concepts and best practices for inventory management beginners.',
                            'thumbnail' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
                            'videoCount' => 8,
                            'totalDuration' => '2h 15m',
                            'link' => '/playlists/supply-chain-fundamentals'
                        ],
                        [
                            'id' => 'pl-002',
                            'title' => 'Advanced Analytics Series',
                            'description' => 'Deep dive into predictive analytics and demand forecasting techniques.',
                            'thumbnail' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
                            'videoCount' => 6,
                            'totalDuration' => '3h 20m',
                            'link' => '/playlists/advanced-analytics'
                        ],
                        [
                            'id' => 'pl-003',
                            'title' => 'Warehouse Automation',
                            'description' => 'Learn about robotics, ASRS, and pick-to-light systems.',
                            'thumbnail' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
                            'videoCount' => 5,
                            'totalDuration' => '1h 45m',
                            'link' => '/playlists/warehouse-automation'
                        ]
                    ],
                    'videos' => [
                        [
                            'id' => 'vid-001',
                            'title' => 'Getting Started with Inventory Management',
                            'description' => 'Learn the basics of setting up your inventory, managing stock levels, and tracking products.',
                            'duration' => '12:34',
                            'views' => 8450,
                            'date' => '2024-03-15',
                            'category' => 'tutorial',
                            'thumbnail' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
                            'videoUrl' => 'https://example.com/video.mp4',
                            'tags' => ['basics', 'setup', 'onboarding'],
                            'presenter' => [
                                'name' => 'Sarah Johnson',
                                'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop'
                            ]
                        ],
                        [
                            'id' => 'vid-002',
                            'title' => 'Predictive Analytics for Demand Forecasting',
                            'description' => 'How machine learning models can predict demand with 96% accuracy and reduce stockouts.',
                            'duration' => '28:45',
                            'views' => 12450,
                            'date' => '2024-03-12',
                            'category' => 'webinar',
                            'thumbnail' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
                            'videoUrl' => 'https://example.com/video.mp4',
                            'tags' => ['analytics', 'forecasting', 'ai'],
                            'presenter' => [
                                'name' => 'Dr. Emily Park',
                                'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop'
                            ]
                        ],
                        [
                            'id' => 'vid-003',
                            'title' => 'Global Retailer: 40% Inventory Reduction Case Study',
                            'description' => 'How a major retailer reduced inventory by 40% while maintaining 99% service levels.',
                            'duration' => '18:22',
                            'views' => 9870,
                            'date' => '2024-03-10',
                            'category' => 'case-study',
                            'thumbnail' => 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop',
                            'videoUrl' => 'https://example.com/video.mp4',
                            'tags' => ['case-study', 'retail', 'success'],
                            'presenter' => [
                                'name' => 'Marcus Thorne',
                                'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop'
                            ]
                        ],
                        [
                            'id' => 'vid-004',
                            'title' => 'Interview with Supply Chain Director: Resilience Strategies',
                            'description' => 'Expert discussion on building resilient supply chains in a volatile global market.',
                            'duration' => '35:12',
                            'views' => 5670,
                            'date' => '2024-03-05',
                            'category' => 'interview',
                            'thumbnail' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop',
                            'videoUrl' => 'https://example.com/video.mp4',
                            'tags' => ['interview', 'resilience', 'leadership'],
                            'presenter' => [
                                'name' => 'Elena Volkov',
                                'avatar' => 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=80&h=80&fit=crop'
                            ]
                        ],
                        [
                            'id' => 'vid-005',
                            'title' => 'Product Demo: AI Demand Forecasting Engine',
                            'description' => 'See our AI-powered demand forecasting tool in action with real-world data.',
                            'duration' => '15:45',
                            'views' => 7340,
                            'date' => '2024-03-01',
                            'category' => 'product-demo',
                            'thumbnail' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
                            'videoUrl' => 'https://example.com/video.mp4',
                            'tags' => ['demo', 'ai', 'product'],
                            'presenter' => [
                                'name' => 'Alex Rivera',
                                'avatar' => 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop'
                            ]
                        ],
                        [
                            'id' => 'vid-006',
                            'title' => 'Warehouse Slotting Optimization Tutorial',
                            'description' => 'Step-by-step guide to optimizing product placement for maximum picking efficiency.',
                            'duration' => '22:18',
                            'views' => 6230,
                            'date' => '2024-02-25',
                            'category' => 'tutorial',
                            'thumbnail' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
                            'videoUrl' => 'https://example.com/video.mp4',
                            'tags' => ['warehouse', 'slotting', 'optimization'],
                            'presenter' => [
                                'name' => 'Marcus Thorne',
                                'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop'
                            ]
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 418,
                'section_key' => 'videoContent',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => 'Video Hub',
                    'title' => [
                        'prefix' => 'Video',
                        'highlight' => 'Library'
                    ],
                    'description' => 'Watch tutorials, webinars, and expert interviews to master supply chain management.',
                    'heroImage' => 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=1200&h=500&fit=crop',
                    'autoPlayCarousel' => true,
                    'stats' => [
                        'videos' => 50,
                        'hours' => 100,
                        'learners' => '50K'
                    ],
                    'categories' => [
                        ['id' => 'all', 'label' => 'All Videos', 'icon' => 'video'],
                        ['id' => 'tutorial', 'label' => 'Tutorials', 'icon' => 'play'],
                        ['id' => 'webinar', 'label' => 'Webinars', 'icon' => 'video'],
                        ['id' => 'case-study', 'label' => 'Case Studies', 'icon' => 'briefcase'],
                        ['id' => 'interview', 'label' => 'Interviews', 'icon' => 'microphone'],
                        ['id' => 'product-demo', 'label' => 'Product Demos', 'icon' => 'chip']
                    ],
                    'heroVideos' => [
                        [
                            'id' => 'hero-001',
                            'title' => 'The Future of Supply Chain: AI-Driven Inventory Management',
                            'description' => 'Join our experts as they explore how artificial intelligence is transforming inventory optimization and demand forecasting.',
                            'duration' => '45:32',
                            'views' => 15234,
                            'date' => '2024-03-18',
                            'category' => 'webinar',
                            'thumbnail' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1280&h=720&fit=crop',
                            'videoUrl' => 'https://example.com/video.mp4'
                        ],
                        [
                            'id' => 'hero-002',
                            'title' => 'Warehouse Automation: From Manual to Autonomous',
                            'description' => 'Learn how robotics and automation can transform your warehouse operations.',
                            'duration' => '38:15',
                            'views' => 12450,
                            'date' => '2024-03-10',
                            'category' => 'tutorial',
                            'thumbnail' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1280&h=720&fit=crop',
                            'videoUrl' => 'https://example.com/video.mp4'
                        ]
                    ],
                    'videos' => [
                        [
                            'id' => 'vid-001',
                            'title' => 'Getting Started with Inventory Management',
                            'description' => 'Learn the basics of setting up your inventory, managing stock levels, and tracking products.',
                            'duration' => '12:34',
                            'views' => 8450,
                            'date' => '2024-03-15',
                            'category' => 'tutorial',
                            'thumbnail' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
                            'videoUrl' => 'https://example.com/video.mp4',
                            'tags' => ['basics', 'setup'],
                            'presenter' => [
                                'name' => 'Sarah Johnson',
                                'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop'
                            ]
                        ],
                        [
                            'id' => 'vid-002',
                            'title' => 'Predictive Analytics for Demand Forecasting',
                            'description' => 'How machine learning models can predict demand with 96% accuracy.',
                            'duration' => '28:45',
                            'views' => 12450,
                            'date' => '2024-03-12',
                            'category' => 'webinar',
                            'thumbnail' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
                            'videoUrl' => 'https://example.com/video.mp4',
                            'tags' => ['analytics', 'forecasting'],
                            'presenter' => [
                                'name' => 'Dr. Emily Park',
                                'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop'
                            ]
                        ],
                        [
                            'id' => 'vid-003',
                            'title' => 'Global Retailer Case Study: 40% Inventory Reduction',
                            'description' => 'How a major retailer reduced inventory by 40% while maintaining 99% service levels.',
                            'duration' => '18:22',
                            'views' => 9870,
                            'date' => '2024-03-10',
                            'category' => 'case-study',
                            'thumbnail' => 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop',
                            'videoUrl' => 'https://example.com/video.mp4',
                            'tags' => ['retail', 'success'],
                            'presenter' => [
                                'name' => 'Marcus Thorne',
                                'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop'
                            ]
                        ],
                        [
                            'id' => 'vid-004',
                            'title' => 'Supply Chain Resilience Interview',
                            'description' => 'Expert discussion on building resilient supply chains in a volatile global market.',
                            'duration' => '35:12',
                            'views' => 5670,
                            'date' => '2024-03-05',
                            'category' => 'interview',
                            'thumbnail' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop',
                            'videoUrl' => 'https://example.com/video.mp4',
                            'tags' => ['resilience', 'leadership'],
                            'presenter' => [
                                'name' => 'Elena Volkov',
                                'avatar' => 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=80&h=80&fit=crop'
                            ]
                        ],
                        [
                            'id' => 'vid-005',
                            'title' => 'AI Demand Forecasting Product Demo',
                            'description' => 'See our AI-powered demand forecasting tool in action with real-world data.',
                            'duration' => '15:45',
                            'views' => 7340,
                            'date' => '2024-03-01',
                            'category' => 'product-demo',
                            'thumbnail' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
                            'videoUrl' => 'https://example.com/video.mp4',
                            'tags' => ['demo', 'ai'],
                            'presenter' => [
                                'name' => 'Alex Rivera',
                                'avatar' => 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop'
                            ]
                        ],
                        [
                            'id' => 'vid-006',
                            'title' => 'Warehouse Slotting Optimization',
                            'description' => 'Step-by-step guide to optimizing product placement for maximum picking efficiency.',
                            'duration' => '22:18',
                            'views' => 6230,
                            'date' => '2024-02-25',
                            'category' => 'tutorial',
                            'thumbnail' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
                            'videoUrl' => 'https://example.com/video.mp4',
                            'tags' => ['warehouse', 'optimization'],
                            'presenter' => [
                                'name' => 'Marcus Thorne',
                                'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop'
                            ]
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 419,
                'section_key' => 'videoContent',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => 'Learning Platform',
                    'title' => [
                        'prefix' => 'Video',
                        'highlight' => 'Learning',
                        'suffix' => 'Platform'
                    ],
                    'description' => 'Comprehensive video courses, live streams, and certification programs to advance your supply chain career.',
                    'heroImage' => 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=1200&h=500&fit=crop',
                    'featuredCourses' => [
                        [
                            'id' => 'course-001',
                            'title' => 'Supply Chain Analytics Masterclass',
                            'description' => 'Master data-driven decision making with hands-on analytics projects and real-world datasets.',
                            'duration' => '8 hours',
                            'lessons' => 24,
                            'rating' => 4.9,
                            'reviews' => 1240,
                            'category' => 'course',
                            'thumbnail' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
                            'videoUrl' => 'https://example.com/video.mp4',
                            'instructor' => [
                                'name' => 'Dr. Sarah Chen',
                                'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop'
                            ],
                            'chapters' => [
                                ['title' => 'Introduction to Supply Chain Analytics', 'duration' => '15:30', 'time' => 0, 'description' => 'Course overview and key concepts'],
                                ['title' => 'Data Collection & Preparation', 'duration' => '25:45', 'time' => 930, 'description' => 'Gathering and cleaning supply chain data'],
                                ['title' => 'Demand Forecasting Techniques', 'duration' => '32:20', 'time' => 2850, 'description' => 'Statistical and ML forecasting methods'],
                                ['title' => 'Inventory Optimization Models', 'duration' => '28:15', 'time' => 4545, 'description' => 'Safety stock and reorder point calculations']
                            ],
                            'quiz' => [
                                'questions' => [
                                    ['text' => 'What is the standard method for measuring forecast accuracy?', 'options' => ['MAD', 'MAPE', 'RMSE', 'All of the above'], 'correctAnswer' => 3],
                                    ['text' => 'Which distribution is commonly used for demand modeling?', 'options' => ['Normal', 'Poisson', 'Gamma', 'All of the above'], 'correctAnswer' => 3]
                                ]
                            ],
                            'transcript' => [
                                ['time' => 0, 'timestamp' => '00:00', 'text' => 'Welcome to the Supply Chain Analytics Masterclass...'],
                                ['time' => 30, 'timestamp' => '00:30', 'text' => 'In this course, you\'ll learn how to leverage data for better decisions...']
                            ]
                        ],
                        [
                            'id' => 'course-002',
                            'title' => 'Warehouse Automation & Robotics',
                            'description' => 'Learn to implement ASRS, AMRs, and pick-to-light systems in modern distribution centers.',
                            'duration' => '6 hours',
                            'lessons' => 18,
                            'rating' => 4.8,
                            'reviews' => 890,
                            'category' => 'course',
                            'thumbnail' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
                            'videoUrl' => 'https://example.com/video.mp4',
                            'instructor' => [
                                'name' => 'Marcus Thorne',
                                'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop'
                            ],
                            'chapters' => [
                                ['title' => 'Warehouse Automation Overview', 'duration' => '12:30', 'time' => 0, 'description' => 'Types of automation technologies'],
                                ['title' => 'ASRS Implementation', 'duration' => '22:15', 'time' => 750, 'description' => 'Automated Storage and Retrieval Systems'],
                                ['title' => 'AMR Deployment', 'duration' => '18:45', 'time' => 2085, 'description' => 'Autonomous Mobile Robots']
                            ],
                            'quiz' => [
                                'questions' => [
                                    ['text' => 'What does ASRS stand for?', 'options' => ['Automated Storage and Retrieval System', 'Automated Sortation and Routing System', 'Automatic Storage and Retrieval Solution'], 'correctAnswer' => 0]
                                ]
                            ]
                        ],
                        [
                            'id' => 'course-003',
                            'title' => 'Sustainable Supply Chain Management',
                            'description' => 'Reduce carbon footprint while improving efficiency and reducing costs.',
                            'duration' => '5 hours',
                            'lessons' => 14,
                            'rating' => 4.9,
                            'reviews' => 560,
                            'category' => 'course',
                            'thumbnail' => 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop',
                            'videoUrl' => 'https://example.com/video.mp4',
                            'instructor' => [
                                'name' => 'Elena Volkov',
                                'avatar' => 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=80&h=80&fit=crop'
                            ]
                        ]
                    ],
                    'liveStream' => [
                        'id' => 'live-001',
                        'title' => 'AI in Supply Chain: Live Q&A with Experts',
                        'description' => 'Join our experts for a live discussion on implementing AI in inventory management.',
                        'thumbnail' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1280&h=720&fit=crop',
                        'videoUrl' => 'https://example.com/live.mp4',
                        'nextDate' => 'April 15, 2024',
                        'nextTopic' => 'Predictive Analytics for Inventory',
                        'host' => [
                            'name' => 'Dr. Sarah Chen',
                            'title' => 'Chief Supply Chain Officer',
                            'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop'
                        ]
                    ],
                    'certifications' => [
                        [
                            'id' => 'cert-001',
                            'title' => 'Certified Supply Chain Professional',
                            'description' => 'Industry-recognized certification covering end-to-end supply chain management.',
                            'duration' => '40 hours',
                            'modules' => 12,
                            'popularity' => 85,
                            'students' => '10k',
                            'link' => '/certifications/cscp',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'cert-002',
                            'title' => 'Inventory Optimization Specialist',
                            'description' => 'Master demand forecasting, safety stock, and replenishment strategies.',
                            'duration' => '25 hours',
                            'modules' => 8,
                            'popularity' => 92,
                            'students' => '5k',
                            'link' => '/certifications/inventory-specialist',
                            'image' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop'
                        ]
                    ],
                    'videos' => [
                        [
                            'id' => 'vid-001',
                            'title' => 'Getting Started with Inventory Management',
                            'description' => 'Learn the basics of setting up your inventory, managing stock levels, and tracking products.',
                            'duration' => '12:34',
                            'views' => 8450,
                            'date' => '2024-03-15',
                            'category' => 'tutorial',
                            'thumbnail' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
                            'videoUrl' => 'https://example.com/video.mp4',
                            'presenter' => [
                                'name' => 'Sarah Johnson',
                                'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop'
                            ]
                        ],
                        [
                            'id' => 'vid-002',
                            'title' => 'Predictive Analytics Webinar',
                            'description' => 'How machine learning models can predict demand with 96% accuracy.',
                            'duration' => '28:45',
                            'views' => 12450,
                            'date' => '2024-03-12',
                            'category' => 'webinar',
                            'thumbnail' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
                            'videoUrl' => 'https://example.com/video.mp4',
                            'presenter' => [
                                'name' => 'Dr. Emily Park',
                                'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop'
                            ]
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 420,
                'section_key' => 'videoContent',
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
