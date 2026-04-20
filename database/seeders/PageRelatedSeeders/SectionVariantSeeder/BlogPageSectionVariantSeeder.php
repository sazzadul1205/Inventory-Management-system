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
        ];

        // Add the new Services variants
        DB::table('section_variants')->upsert(
            $variants,
            ['section_key', 'variant'],
            ['config', 'updated_at']
        );
    }
}
