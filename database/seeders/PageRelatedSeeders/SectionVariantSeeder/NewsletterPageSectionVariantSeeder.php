<?php

namespace Database\Seeders\PageRelatedSeeders\SectionVariantSeeder;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class NewsletterPageSectionVariantSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Upsert only this page's variants so other page seeders do not get wiped out.
        $variants = [
            // Subscribe Form Section
            [
                'id' => 561,
                'section_key' => 'subscribeForm',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => 'Don\'t Miss Out',
                    'title' => [
                        'prefix' => 'Join Our',
                        'highlight' => 'Weekly Newsletter',
                        'suffix' => ''
                    ],
                    'description' => 'Get expert insights, industry trends, and exclusive content delivered directly to your inbox. Join thousands of forward-thinking professionals.',
                    'heroImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=500&fit=crop',
                    'stats' => [
                        ['value' => '15,000+', 'label' => 'Active Readers', 'icon' => 'users'],
                        ['value' => '45%', 'label' => 'Avg. Open Rate', 'icon' => 'eye'],
                        ['value' => 'Bi-Weekly', 'label' => 'Newsletter', 'icon' => 'calendar'],
                        ['value' => 'Always', 'label' => 'Free', 'icon' => 'gift']
                    ],
                    'benefits' => [
                        ['title' => 'Curated Insights', 'description' => 'Hand-picked supply chain news and analysis to save you time.', 'icon' => 'star', 'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'],
                        ['title' => 'Case Studies', 'description' => 'Learn how peers are solving real-world logistics challenges.', 'icon' => 'newspaper', 'image' => 'https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?w=600&h=400&fit=crop'],
                        ['title' => 'Tech Deep Dives', 'description' => 'Understand how AI and blockchain are reshaping the industry.', 'icon' => 'chip', 'image' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop'],
                        ['title' => 'Expert Webinars', 'description' => 'Get access to exclusive sessions with industry leaders.', 'icon' => 'academic', 'image' => 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop']
                    ],
                    'interestOptions' => [
                        ['value' => 'trends', 'label' => 'Market Trends'],
                        ['value' => 'tech', 'label' => 'Emerging Tech'],
                        ['value' => 'ops', 'label' => 'Operational Excellence'],
                        ['value' => 'sustainability', 'label' => 'Green Logistics']
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 562,
                'section_key' => 'subscribeForm',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => 'Weekly Digital Dispatch',
                    'title' => [
                        'prefix' => 'Join the',
                        'highlight' => 'Insider Circle'
                    ],
                    'description' => 'Get exclusive supply chain analysis, early access to reports, and invites to private webinars. Join 50,000+ industry leaders who rely on our insights.',
                    'heroImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=500&fit=crop',
                    'stats' => [
                        ['value' => '50,000+', 'label' => 'Subscribers', 'icon' => 'users', 'trend' => '+2,500 this month', 'trendUp' => true],
                        ['value' => '92%', 'label' => 'Open Rate', 'icon' => 'eye', 'trend' => 'Industry avg: 35%', 'trendUp' => true],
                        ['value' => '45%', 'label' => 'Click-through Rate', 'icon' => 'chart', 'trend' => '+8% vs last month', 'trendUp' => true],
                        ['value' => '4.9/5', 'label' => 'Reader Satisfaction', 'icon' => 'star', 'trend' => 'From 2,000+ reviews', 'trendUp' => true]
                    ],
                    'benefits' => [
                        ['title' => 'Weekly Insights', 'description' => 'Get the latest supply chain trends', 'icon' => 'newspaper', 'gradient' => 'from-blue-500 to-blue-600', 'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'],
                        ['title' => 'Expert Tips', 'description' => 'Actionable advice from leaders', 'icon' => 'academic', 'gradient' => 'from-emerald-500 to-emerald-600', 'image' => 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop'],
                        ['title' => 'Product Updates', 'description' => 'Stay informed about new features', 'icon' => 'chip', 'gradient' => 'from-purple-500 to-purple-600', 'image' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop'],
                        ['title' => 'Exclusive Content', 'description' => 'Access subscriber-only resources', 'icon' => 'star', 'gradient' => 'from-amber-500 to-amber-600', 'image' => 'https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?w=600&h=400&fit=crop']
                    ],
                    'interestOptions' => [
                        ['value' => 'supply-chain', 'label' => 'Supply Chain Trends'],
                        ['value' => 'technology', 'label' => 'Technology & AI'],
                        ['value' => 'product', 'label' => 'Product Updates'],
                        ['value' => 'events', 'label' => 'Events & Webinars'],
                        ['value' => 'case-studies', 'label' => 'Case Studies'],
                        ['value' => 'best-practices', 'label' => 'Best Practices']
                    ],
                    'roleOptions' => [
                        'Supply Chain Manager',
                        'Logistics Director',
                        'Operations Manager',
                        'Procurement Specialist',
                        'CEO/Founder',
                        'Consultant',
                        'Student',
                        'Other'
                    ],
                    'recentNewsletters' => [
                        [
                            'title' => 'Supply Chain Trends 2024',
                            'date' => 'March 15, 2024',
                            'description' => 'The top 10 trends shaping supply chain management this year',
                            'readTime' => '5 min read',
                            'category' => 'Trends',
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=200&fit=crop'
                        ],
                        [
                            'title' => 'AI in Supply Chain',
                            'date' => 'March 8, 2024',
                            'description' => 'How artificial intelligence is revolutionizing logistics',
                            'readTime' => '4 min read',
                            'category' => 'Technology',
                            'image' => 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=200&fit=crop'
                        ],
                        [
                            'title' => 'Sustainability Strategies',
                            'date' => 'March 1, 2024',
                            'description' => 'Building a greener supply chain',
                            'readTime' => '6 min read',
                            'category' => 'Sustainability',
                            'image' => 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=200&fit=crop'
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 563,
                'section_key' => 'subscribeForm',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => 'Weekly Digital Dispatch',
                    'title' => [
                        'prefix' => 'Join the',
                        'highlight' => 'Insider Circle'
                    ],
                    'description' => 'Get exclusive supply chain analysis, early access to reports, and invites to private webinars. Join 50,000+ industry leaders who rely on our insights.',
                    'heroImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=500&fit=crop',
                    'autoPlayCarousel' => true,
                    'stats' => [
                        ['value' => '50,000+', 'label' => 'Subscribers', 'icon' => 'users'],
                        ['value' => '92%', 'label' => 'Open Rate', 'icon' => 'eye'],
                        ['value' => '45%', 'label' => 'CTR', 'icon' => 'chart'],
                        ['value' => '4.9/5', 'label' => 'Satisfaction', 'icon' => 'star']
                    ],
                    'testimonials' => [
                        [
                            'name' => 'Sarah Johnson',
                            'role' => 'Supply Chain Director',
                            'company' => 'Global Retail Corp',
                            'quote' => 'This newsletter has become my go-to resource for industry insights. The weekly updates keep me informed about the latest trends and best practices.',
                            'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop',
                            'image' => 'https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?w=600&h=400&fit=crop'
                        ],
                        [
                            'name' => 'Michael Chen',
                            'role' => 'Operations Manager',
                            'company' => 'HealthTech Solutions',
                            'quote' => 'The expert tips and case studies have helped me implement several process improvements. Highly recommended for any supply chain professional.',
                            'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop',
                            'image' => 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop'
                        ],
                        [
                            'name' => 'Emily Rodriguez',
                            'role' => 'Logistics Director',
                            'company' => 'EuroLogistics',
                            'quote' => 'I\'ve been a subscriber for over two years. The content is always relevant, timely, and actionable. It\'s helped me stay ahead of industry changes.',
                            'avatar' => 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop',
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop'
                        ]
                    ],
                    'interestOptions' => [
                        ['value' => 'supply-chain', 'label' => 'Supply Chain Trends', 'icon' => 'globe'],
                        ['value' => 'technology', 'label' => 'Technology & AI', 'icon' => 'chip'],
                        ['value' => 'product', 'label' => 'Product Updates', 'icon' => 'sparkles'],
                        ['value' => 'events', 'label' => 'Events & Webinars', 'icon' => 'calendar'],
                        ['value' => 'case-studies', 'label' => 'Case Studies', 'icon' => 'document'],
                        ['value' => 'best-practices', 'label' => 'Best Practices', 'icon' => 'academic']
                    ],
                    'roleOptions' => [
                        'Supply Chain Manager',
                        'Logistics Director',
                        'Operations Manager',
                        'Procurement Specialist',
                        'CEO/Founder',
                        'Consultant',
                        'Student',
                        'Other'
                    ],
                    'formImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 564,
                'section_key' => 'subscribeForm',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Newsletter Archive Section
            [
                'id' => 565,
                'section_key' => 'newsletterArchive',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => 'Knowledge Base',
                    'title' => [
                        'prefix' => 'Explore Our',
                        'highlight' => 'Complete Archive'
                    ],
                    'description' => 'Discover months of supply chain expertise, from emerging trends to proven strategies. Download, share, and learn from every issue.',
                    'heroImage' => 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=500&fit=crop',
                    'searchPlaceholder' => 'Search by title, topic, or keywords...',
                    'stats' => [
                        ['value' => '36+', 'label' => 'Published Issues', 'icon' => 'newspaper'],
                        ['value' => '18,000+', 'label' => 'Total Views', 'icon' => 'eye'],
                        ['value' => '94%', 'label' => 'Reader Satisfaction', 'icon' => 'star'],
                        ['value' => '20+', 'label' => 'Expert Contributors', 'icon' => 'users']
                    ],
                    'categories' => [
                        ['id' => 'all', 'label' => 'All Categories', 'icon' => 'newspaper'],
                        ['id' => 'Trends', 'label' => 'Market Trends', 'icon' => 'chart'],
                        ['id' => 'Technology', 'label' => 'Digital Innovation', 'icon' => 'chip'],
                        ['id' => 'Sustainability', 'label' => 'Green Supply Chain', 'icon' => 'globe'],
                        ['id' => 'Risk Management', 'label' => 'Risk & Resilience', 'icon' => 'shield'],
                        ['id' => 'People', 'label' => 'Talent & Leadership', 'icon' => 'users']
                    ],
                    'years' => ['2024', '2023', '2022'],
                    'newsletterIssues' => [
                        [
                            'id' => 1,
                            'title' => 'Supply Chain Trends 2024',
                            'date' => 'March 15, 2024',
                            'category' => 'Trends',
                            'readTime' => '5 min read',
                            'views' => '2,847',
                            'likes' => '342',
                            'description' => 'The top 10 trends shaping supply chain management this year, from AI integration to sustainability initiatives.',
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=250&fit=crop',
                            'featured' => true,
                            'content' => 'In this issue, we explore the most significant trends transforming supply chain management in 2024. From the rise of generative AI in demand forecasting to the growing importance of circular economy principles, we cover what supply chain professionals need to know.',
                            'keyTopics' => [
                                'AI and Machine Learning in Demand Forecasting',
                                'Sustainability and Circular Economy',
                                'Resilience and Risk Management',
                                'Digital Twins and Simulation'
                            ]
                        ],
                        [
                            'id' => 2,
                            'title' => 'AI in Supply Chain',
                            'date' => 'March 8, 2024',
                            'category' => 'Technology',
                            'readTime' => '4 min read',
                            'views' => '3,124',
                            'likes' => '567',
                            'description' => 'How artificial intelligence is revolutionizing logistics and supply chain operations.',
                            'image' => 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop',
                            'featured' => true,
                            'content' => 'Artificial intelligence is no longer a futuristic concept—it\'s transforming supply chains today. This edition explores practical applications of AI in inventory management, route optimization, and predictive maintenance.',
                            'keyTopics' => [
                                'Predictive Analytics for Demand Planning',
                                'Computer Vision in Warehouse Operations',
                                'Autonomous Vehicles and Drones',
                                'AI-Powered Supplier Risk Assessment'
                            ]
                        ],
                        [
                            'id' => 3,
                            'title' => 'Sustainability Strategies',
                            'date' => 'March 1, 2024',
                            'category' => 'Sustainability',
                            'readTime' => '6 min read',
                            'views' => '2,103',
                            'likes' => '892',
                            'description' => 'Building a greener supply chain: Strategies for reducing carbon footprint and waste.',
                            'image' => 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=250&fit=crop',
                            'featured' => false,
                            'content' => 'Sustainability is becoming a competitive advantage. This issue provides actionable strategies for reducing emissions, minimizing waste, and building a more environmentally responsible supply chain.',
                            'keyTopics' => [
                                'Carbon Footprint Measurement',
                                'Sustainable Sourcing Practices',
                                'Green Logistics and Transportation',
                                'Circular Economy Implementation'
                            ]
                        ],
                        [
                            'id' => 4,
                            'title' => 'Supply Chain Resilience',
                            'date' => 'February 23, 2024',
                            'category' => 'Risk Management',
                            'readTime' => '5 min read',
                            'views' => '1,892',
                            'likes' => '234',
                            'description' => 'Building resilient supply chains that can withstand disruptions and adapt to change.',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
                            'featured' => false,
                            'content' => 'Recent global disruptions have highlighted the importance of supply chain resilience. This edition explores strategies for building more robust and adaptable supply chains.',
                            'keyTopics' => [
                                'Multi-Sourcing Strategies',
                                'Inventory Buffering Techniques',
                                'Supplier Diversification',
                                'Scenario Planning and Simulation'
                            ]
                        ],
                        [
                            'id' => 5,
                            'title' => 'Digital Transformation',
                            'date' => 'February 16, 2024',
                            'category' => 'Technology',
                            'readTime' => '4 min read',
                            'views' => '2,456',
                            'likes' => '456',
                            'description' => 'How digital technologies are reshaping supply chain management.',
                            'image' => 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop',
                            'featured' => true,
                            'content' => 'Digital transformation is accelerating across supply chains. This issue covers the technologies driving change and how organizations can successfully navigate their digital journey.',
                            'keyTopics' => [
                                'Cloud-Based Supply Chain Platforms',
                                'IoT and Real-Time Tracking',
                                'Blockchain for Traceability',
                                'Low-Code Automation Tools'
                            ]
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 566,
                'section_key' => 'newsletterArchive',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => 'Insights Library',
                    'title' => [
                        'prefix' => 'Explore Our',
                        'highlight' => 'Complete Archive'
                    ],
                    'description' => 'Discover months of supply chain expertise, from emerging trends to proven strategies. Download, share, and learn from every issue.',
                    'heroImage' => 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=500&fit=crop',
                    'searchPlaceholder' => 'Search by title, topic, or keywords...',
                    'defaultViewMode' => 'grid',
                    'stats' => [
                        ['value' => '36+', 'label' => 'Published Issues', 'icon' => 'newspaper', 'trend' => '+8 this year', 'trendUp' => true],
                        ['value' => '18,000+', 'label' => 'Total Views', 'icon' => 'eye', 'trend' => '+22%', 'trendUp' => true],
                        ['value' => '94%', 'label' => 'Reader Satisfaction', 'icon' => 'star', 'trend' => '+3%', 'trendUp' => true],
                        ['value' => '20+', 'label' => 'Expert Contributors', 'icon' => 'users', 'trend' => 'Expanding', 'trendUp' => true]
                    ],
                    'categories' => [
                        ['id' => 'all', 'label' => 'All Categories', 'icon' => 'newspaper', 'count' => 12],
                        ['id' => 'Trends', 'label' => 'Market Trends', 'icon' => 'chart', 'count' => 3],
                        ['id' => 'Technology', 'label' => 'Digital Innovation', 'icon' => 'chip', 'count' => 4],
                        ['id' => 'Sustainability', 'label' => 'Green Supply Chain', 'icon' => 'globe', 'count' => 2],
                        ['id' => 'Risk Management', 'label' => 'Risk & Resilience', 'icon' => 'shield', 'count' => 2],
                        ['id' => 'People', 'label' => 'Talent & Leadership', 'icon' => 'users', 'count' => 1]
                    ],
                    'newsletterIssues' => [
                        [
                            'id' => 1,
                            'title' => 'Supply Chain Trends 2024',
                            'date' => 'March 15, 2024',
                            'dateRaw' => '2024-03-15',
                            'category' => 'Trends',
                            'readTime' => '5 min read',
                            'views' => '2,847',
                            'likes' => '342',
                            'description' => 'The top 10 trends shaping supply chain management this year, from AI integration to sustainability initiatives.',
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=250&fit=crop',
                            'featured' => true,
                            'popular' => true,
                            'content' => 'In this issue, we explore the most significant trends transforming supply chain management in 2024.',
                            'keyTopics' => [
                                'AI and Machine Learning in Demand Forecasting',
                                'Sustainability and Circular Economy',
                                'Resilience and Risk Management',
                                'Digital Twins and Simulation'
                            ]
                        ],
                        [
                            'id' => 2,
                            'title' => 'AI in Supply Chain',
                            'date' => 'March 8, 2024',
                            'dateRaw' => '2024-03-08',
                            'category' => 'Technology',
                            'readTime' => '4 min read',
                            'views' => '3,124',
                            'likes' => '567',
                            'description' => 'How artificial intelligence is revolutionizing logistics and supply chain operations.',
                            'image' => 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop',
                            'featured' => true,
                            'popular' => true,
                            'content' => 'Artificial intelligence is no longer a futuristic concept—it\'s transforming supply chains today.',
                            'keyTopics' => [
                                'Predictive Analytics for Demand Planning',
                                'Computer Vision in Warehouse Operations',
                                'Autonomous Vehicles and Drones',
                                'AI-Powered Supplier Risk Assessment'
                            ]
                        ],
                        [
                            'id' => 3,
                            'title' => 'Sustainability Strategies',
                            'date' => 'March 1, 2024',
                            'dateRaw' => '2024-03-01',
                            'category' => 'Sustainability',
                            'readTime' => '6 min read',
                            'views' => '2,103',
                            'likes' => '892',
                            'description' => 'Building a greener supply chain: Strategies for reducing carbon footprint and waste.',
                            'image' => 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=250&fit=crop',
                            'featured' => false,
                            'popular' => true,
                            'content' => 'Sustainability is becoming a competitive advantage. This issue provides actionable strategies.',
                            'keyTopics' => [
                                'Carbon Footprint Measurement',
                                'Sustainable Sourcing Practices',
                                'Green Logistics and Transportation',
                                'Circular Economy Implementation'
                            ]
                        ],
                        [
                            'id' => 4,
                            'title' => 'Supply Chain Resilience',
                            'date' => 'February 23, 2024',
                            'dateRaw' => '2024-02-23',
                            'category' => 'Risk Management',
                            'readTime' => '5 min read',
                            'views' => '1,892',
                            'likes' => '234',
                            'description' => 'Building resilient supply chains that can withstand disruptions and adapt to change.',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
                            'featured' => false,
                            'popular' => false,
                            'content' => 'Recent global disruptions have highlighted the importance of supply chain resilience.',
                            'keyTopics' => [
                                'Multi-Sourcing Strategies',
                                'Inventory Buffering Techniques',
                                'Supplier Diversification',
                                'Scenario Planning and Simulation'
                            ]
                        ],
                        [
                            'id' => 5,
                            'title' => 'Digital Transformation',
                            'date' => 'February 16, 2024',
                            'dateRaw' => '2024-02-16',
                            'category' => 'Technology',
                            'readTime' => '4 min read',
                            'views' => '2,456',
                            'likes' => '456',
                            'description' => 'How digital technologies are reshaping supply chain management.',
                            'image' => 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop',
                            'featured' => true,
                            'popular' => true,
                            'content' => 'Digital transformation is accelerating across supply chains.',
                            'keyTopics' => [
                                'Cloud-Based Supply Chain Platforms',
                                'IoT and Real-Time Tracking',
                                'Blockchain for Traceability',
                                'Low-Code Automation Tools'
                            ]
                        ],
                        [
                            'id' => 6,
                            'title' => 'Talent Management',
                            'date' => 'February 9, 2024',
                            'dateRaw' => '2024-02-09',
                            'category' => 'People',
                            'readTime' => '5 min read',
                            'views' => '1,567',
                            'likes' => '189',
                            'description' => 'Attracting and retaining top talent in supply chain management.',
                            'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=250&fit=crop',
                            'featured' => false,
                            'popular' => false,
                            'content' => 'The supply chain talent gap is widening.',
                            'keyTopics' => [
                                'Skills Gap Analysis',
                                'Training and Development Programs',
                                'Remote Work in Supply Chain',
                                'Diversity and Inclusion Initiatives'
                            ]
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 567,
                'section_key' => 'newsletterArchive',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => 'Knowledge Library',
                    'title' => [
                        'prefix' => 'Explore Our',
                        'highlight' => 'Complete Archive'
                    ],
                    'description' => 'Discover months of supply chain expertise, from emerging trends to proven strategies. Download, share, and learn from every issue.',
                    'heroImage' => 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=500&fit=crop',
                    'autoPlayCarousel' => true,
                    'stats' => [
                        ['value' => '36+', 'label' => 'Published Issues', 'icon' => 'newspaper'],
                        ['value' => '18,000+', 'label' => 'Total Views', 'icon' => 'eye'],
                        ['value' => '94%', 'label' => 'Reader Satisfaction', 'icon' => 'star'],
                        ['value' => '20+', 'label' => 'Expert Contributors', 'icon' => 'users']
                    ],
                    'categories' => [
                        ['id' => 'all', 'label' => 'All Categories', 'icon' => 'newspaper'],
                        ['id' => 'Trends', 'label' => 'Market Trends', 'icon' => 'chart'],
                        ['id' => 'Technology', 'label' => 'Digital Innovation', 'icon' => 'chip'],
                        ['id' => 'Sustainability', 'label' => 'Green Supply Chain', 'icon' => 'globe'],
                        ['id' => 'Risk Management', 'label' => 'Risk & Resilience', 'icon' => 'shield'],
                        ['id' => 'People', 'label' => 'Talent & Leadership', 'icon' => 'users']
                    ],
                    'newsletterIssues' => [
                        [
                            'id' => 1,
                            'title' => 'Supply Chain Trends 2024',
                            'date' => 'March 15, 2024',
                            'dateRaw' => '2024-03-15',
                            'category' => 'Trends',
                            'readTime' => '5 min read',
                            'views' => '2,847',
                            'likes' => '342',
                            'description' => 'The top 10 trends shaping supply chain management this year, from AI integration to sustainability initiatives.',
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
                            'featured' => true,
                            'popular' => true,
                            'content' => 'In this issue, we explore the most significant trends transforming supply chain management in 2024. From the rise of generative AI in demand forecasting to the growing importance of circular economy principles, we cover what supply chain professionals need to know.',
                            'keyTopics' => [
                                'AI and Machine Learning in Demand Forecasting',
                                'Sustainability and Circular Economy',
                                'Resilience and Risk Management',
                                'Digital Twins and Simulation'
                            ]
                        ],
                        [
                            'id' => 2,
                            'title' => 'AI in Supply Chain',
                            'date' => 'March 8, 2024',
                            'dateRaw' => '2024-03-08',
                            'category' => 'Technology',
                            'readTime' => '4 min read',
                            'views' => '3,124',
                            'likes' => '567',
                            'description' => 'How artificial intelligence is revolutionizing logistics and supply chain operations.',
                            'image' => 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
                            'featured' => true,
                            'popular' => true,
                            'content' => 'Artificial intelligence is no longer a futuristic concept—it\'s transforming supply chains today. This edition explores practical applications of AI in inventory management, route optimization, and predictive maintenance.',
                            'keyTopics' => [
                                'Predictive Analytics for Demand Planning',
                                'Computer Vision in Warehouse Operations',
                                'Autonomous Vehicles and Drones',
                                'AI-Powered Supplier Risk Assessment'
                            ]
                        ],
                        [
                            'id' => 3,
                            'title' => 'Sustainability Strategies',
                            'date' => 'March 1, 2024',
                            'dateRaw' => '2024-03-01',
                            'category' => 'Sustainability',
                            'readTime' => '6 min read',
                            'views' => '2,103',
                            'likes' => '892',
                            'description' => 'Building a greener supply chain: Strategies for reducing carbon footprint and waste.',
                            'image' => 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop',
                            'featured' => false,
                            'popular' => true,
                            'content' => 'Sustainability is becoming a competitive advantage. This issue provides actionable strategies for reducing emissions, minimizing waste, and building a more environmentally responsible supply chain.',
                            'keyTopics' => [
                                'Carbon Footprint Measurement',
                                'Sustainable Sourcing Practices',
                                'Green Logistics and Transportation',
                                'Circular Economy Implementation'
                            ]
                        ],
                        [
                            'id' => 4,
                            'title' => 'Supply Chain Resilience',
                            'date' => 'February 23, 2024',
                            'dateRaw' => '2024-02-23',
                            'category' => 'Risk Management',
                            'readTime' => '5 min read',
                            'views' => '1,892',
                            'likes' => '234',
                            'description' => 'Building resilient supply chains that can withstand disruptions and adapt to change.',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
                            'featured' => false,
                            'popular' => false,
                            'content' => 'Recent global disruptions have highlighted the importance of supply chain resilience. This edition explores strategies for building more robust and adaptable supply chains.',
                            'keyTopics' => [
                                'Multi-Sourcing Strategies',
                                'Inventory Buffering Techniques',
                                'Supplier Diversification',
                                'Scenario Planning and Simulation'
                            ]
                        ],
                        [
                            'id' => 5,
                            'title' => 'Digital Transformation',
                            'date' => 'February 16, 2024',
                            'dateRaw' => '2024-02-16',
                            'category' => 'Technology',
                            'readTime' => '4 min read',
                            'views' => '2,456',
                            'likes' => '456',
                            'description' => 'How digital technologies are reshaping supply chain management.',
                            'image' => 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
                            'featured' => true,
                            'popular' => true,
                            'content' => 'Digital transformation is accelerating across supply chains. This issue covers the technologies driving change and how organizations can successfully navigate their digital journey.',
                            'keyTopics' => [
                                'Cloud-Based Supply Chain Platforms',
                                'IoT and Real-Time Tracking',
                                'Blockchain for Traceability',
                                'Low-Code Automation Tools'
                            ]
                        ],
                        [
                            'id' => 6,
                            'title' => 'Talent Management',
                            'date' => 'February 9, 2024',
                            'dateRaw' => '2024-02-09',
                            'category' => 'People',
                            'readTime' => '5 min read',
                            'views' => '1,567',
                            'likes' => '189',
                            'description' => 'Attracting and retaining top talent in supply chain management.',
                            'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop',
                            'featured' => false,
                            'popular' => false,
                            'content' => 'The supply chain talent gap is widening. This edition provides insights on recruiting, developing, and retaining skilled professionals in a competitive market.',
                            'keyTopics' => [
                                'Skills Gap Analysis',
                                'Training and Development Programs',
                                'Remote Work in Supply Chain',
                                'Diversity and Inclusion Initiatives'
                            ]
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 568,
                'section_key' => 'newsletterArchive',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Content Preview Section
            [
                'id' => 569,
                'section_key' => 'contentPreview',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => 'Sneak Peek',
                    'title' => [
                        'prefix' => 'Preview Our',
                        'highlight' => 'Upcoming Issue'
                    ],
                    'description' => 'Get an exclusive first look at this week\'s featured content. Subscribe to receive the complete newsletter with all articles, insights, and analysis.',
                    'heroImage' => 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=500&fit=crop',
                    'stats' => [
                        ['value' => '15,000+', 'label' => 'Subscribers', 'icon' => 'users'],
                        ['value' => '45+', 'label' => 'Issues Published', 'icon' => 'newspaper'],
                        ['value' => '92%', 'label' => 'Open Rate', 'icon' => 'eye'],
                        ['value' => '4.9/5', 'label' => 'Reader Rating', 'icon' => 'star']
                    ],
                    'featuredContent' => [
                        'title' => 'The Future of Supply Chain: AI-Driven Logistics',
                        'description' => 'Discover how artificial intelligence is transforming supply chain operations, from predictive analytics to autonomous delivery systems. This week\'s featured article explores real-world applications and ROI metrics.',
                        'author' => 'Sarah Johnson',
                        'authorRole' => 'Senior Supply Chain Analyst',
                        'authorAvatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop',
                        'readTime' => '8 min read',
                        'category' => 'Technology',
                        'image' => 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
                        'highlights' => [
                            'How AI predicts demand with 95% accuracy',
                            'Case study: 40% reduction in logistics costs',
                            'The rise of autonomous delivery vehicles',
                            'Implementation roadmap for mid-size companies'
                        ],
                        'stats' => [
                            'views' => '2.4K',
                            'shares' => '342',
                            'saves' => '156'
                        ]
                    ],
                    'additionalArticles' => [
                        [
                            'id' => 1,
                            'title' => 'Sustainability Metrics That Matter',
                            'description' => 'Key performance indicators for measuring supply chain sustainability and carbon footprint reduction.',
                            'author' => 'Michael Chen',
                            'readTime' => '5 min read',
                            'category' => 'Sustainability',
                            'image' => 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=250&fit=crop',
                            'featured' => true
                        ],
                        [
                            'id' => 2,
                            'title' => 'Warehouse Automation Trends',
                            'description' => 'The latest innovations in warehouse robotics and automation technology.',
                            'author' => 'Emily Rodriguez',
                            'readTime' => '6 min read',
                            'category' => 'Technology',
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=250&fit=crop',
                            'featured' => false
                        ],
                        [
                            'id' => 3,
                            'title' => 'Supply Chain Risk Management',
                            'description' => 'Strategies for building resilient supply chains in an uncertain world.',
                            'author' => 'David Kim',
                            'readTime' => '7 min read',
                            'category' => 'Risk Management',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
                            'featured' => false
                        ],
                        [
                            'id' => 4,
                            'title' => 'Procurement Best Practices',
                            'description' => 'How leading companies are transforming their procurement processes.',
                            'author' => 'Lisa Wong',
                            'readTime' => '4 min read',
                            'category' => 'Procurement',
                            'image' => 'https://images.unsplash.com/photo-1556742049-0cfed2f13f2b?w=400&h=250&fit=crop',
                            'featured' => false
                        ]
                    ],
                    'upcomingTopics' => [
                        'Blockchain in Supply Chain',
                        'Circular Economy Models',
                        'Supply Chain Talent Development',
                        'Cross-border Logistics',
                        'Inventory Optimization Strategies'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 570,
                'section_key' => 'contentPreview',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => 'Exclusive Preview',
                    'title' => [
                        'prefix' => 'Discover Our',
                        'highlight' => 'Latest Articles'
                    ],
                    'description' => 'Get an exclusive first look at this week\'s featured content. Subscribe to receive complete articles, expert insights, and industry analysis delivered to your inbox.',
                    'heroImage' => 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=500&fit=crop',
                    'stats' => [
                        ['value' => '15,000+', 'label' => 'Subscribers', 'icon' => 'users'],
                        ['value' => '45+', 'label' => 'Articles', 'icon' => 'newspaper'],
                        ['value' => '92%', 'label' => 'Engagement Rate', 'icon' => 'eye'],
                        ['value' => '4.9/5', 'label' => 'Reader Rating', 'icon' => 'star']
                    ],
                    'upcomingTopics' => [
                        'Blockchain in Supply Chain',
                        'Circular Economy Models',
                        'Supply Chain Talent Development',
                        'Cross-border Logistics',
                        'Inventory Optimization Strategies'
                    ],
                    'articles' => [
                        [
                            'id' => 1,
                            'title' => 'The Future of Supply Chain: AI-Driven Logistics',
                            'description' => 'Discover how artificial intelligence is transforming supply chain operations, from predictive analytics to autonomous delivery systems. This week\'s featured article explores real-world applications and ROI metrics.',
                            'excerpt' => 'How AI predicts demand with 95% accuracy and reduces logistics costs by up to 40%.',
                            'author' => 'Sarah Johnson',
                            'authorRole' => 'Senior Supply Chain Analyst',
                            'authorAvatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop',
                            'date' => 'March 15, 2024',
                            'dateRaw' => '2024-03-15',
                            'readTime' => '8 min read',
                            'category' => 'Technology',
                            'image' => 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
                            'featured' => true,
                            'popular' => true,
                            'views' => '2.4K',
                            'likes' => '342',
                            'highlights' => [
                                'How AI predicts demand with 95% accuracy',
                                'Case study: 40% reduction in logistics costs',
                                'The rise of autonomous delivery vehicles',
                                'Implementation roadmap for mid-size companies'
                            ]
                        ],
                        [
                            'id' => 2,
                            'title' => 'Sustainability Metrics That Matter',
                            'description' => 'Key performance indicators for measuring supply chain sustainability and carbon footprint reduction.',
                            'excerpt' => 'Learn which sustainability metrics actually drive meaningful change.',
                            'author' => 'Michael Chen',
                            'authorRole' => 'Sustainability Lead',
                            'authorAvatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop',
                            'date' => 'March 8, 2024',
                            'dateRaw' => '2024-03-08',
                            'readTime' => '5 min read',
                            'category' => 'Sustainability',
                            'image' => 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop',
                            'featured' => true,
                            'popular' => true,
                            'views' => '1.8K',
                            'likes' => '567',
                            'highlights' => [
                                'Carbon footprint measurement frameworks',
                                'Supplier sustainability scorecards',
                                'Waste reduction metrics',
                                'Circular economy indicators'
                            ]
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 571,
                'section_key' => 'contentPreview',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => 'First Look',
                    'title' => [
                        'prefix' => 'Get an Exclusive',
                        'highlight' => 'Sneak Peek'
                    ],
                    'description' => 'Be the first to see what\'s coming in this week\'s newsletter. Subscribe now to get complete access to all articles, expert insights, and industry analysis delivered straight to your inbox.',
                    'heroImage' => 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=500&fit=crop',
                    'stats' => [
                        ['value' => '25,000+', 'label' => 'Subscribers', 'icon' => 'users', 'trend' => '+15%', 'trendUp' => true],
                        ['value' => '50+', 'label' => 'Issues Published', 'icon' => 'newspaper', 'trend' => 'Weekly', 'trendUp' => true],
                        ['value' => '94%', 'label' => 'Open Rate', 'icon' => 'eye', 'trend' => '+2%', 'trendUp' => true],
                        ['value' => '4.9/5', 'label' => 'Reader Rating', 'icon' => 'star', 'trend' => '4.9', 'trendUp' => true]
                    ],
                    'featuredContent' => [
                        'id' => 1,
                        'title' => 'The Future of Supply Chain: AI-Driven Logistics',
                        'description' => 'Discover how artificial intelligence is transforming supply chain operations, from predictive analytics to autonomous delivery systems. This week\'s featured article explores real-world applications and ROI metrics.',
                        'author' => 'Sarah Johnson',
                        'authorRole' => 'Senior Supply Chain Analyst',
                        'authorAvatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop',
                        'readTime' => '8 min read',
                        'category' => 'Technology',
                        'image' => 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
                        'highlights' => [
                            'How AI predicts demand with 95% accuracy',
                            'Case study: 40% reduction in logistics costs',
                            'The rise of autonomous delivery vehicles',
                            'Implementation roadmap for mid-size companies'
                        ],
                        'stats' => [
                            'views' => '2.4K',
                            'likes' => '342',
                            'saves' => '156',
                            'comments' => '28'
                        ],
                        'quote' => 'AI isn\'t just the future of supply chain—it\'s the present. Companies that embrace AI-driven logistics are seeing unprecedented efficiency gains.'
                    ],
                    'carouselArticles' => [
                        [
                            'id' => 1,
                            'title' => 'Sustainability Metrics That Matter',
                            'description' => 'Key performance indicators for measuring supply chain sustainability and carbon footprint reduction.',
                            'author' => 'Michael Chen',
                            'readTime' => '5 min read',
                            'category' => 'Sustainability',
                            'image' => 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop',
                            'trending' => true,
                            'stats' => ['views' => '1.8K', 'likes' => '234']
                        ],
                        [
                            'id' => 2,
                            'title' => 'Warehouse Automation Trends',
                            'description' => 'The latest innovations in warehouse robotics and automation technology.',
                            'author' => 'Emily Rodriguez',
                            'readTime' => '6 min read',
                            'category' => 'Technology',
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
                            'trending' => true,
                            'stats' => ['views' => '2.1K', 'likes' => '456']
                        ],
                        [
                            'id' => 3,
                            'title' => 'Supply Chain Risk Management',
                            'description' => 'Strategies for building resilient supply chains in an uncertain world.',
                            'author' => 'David Kim',
                            'readTime' => '7 min read',
                            'category' => 'Risk Management',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
                            'trending' => false,
                            'stats' => ['views' => '1.2K', 'likes' => '189']
                        ],
                        [
                            'id' => 4,
                            'title' => 'Procurement Best Practices',
                            'description' => 'How leading companies are transforming their procurement processes.',
                            'author' => 'Lisa Wong',
                            'readTime' => '4 min read',
                            'category' => 'Procurement',
                            'image' => 'https://images.unsplash.com/photo-1556742049-0cfed2f13f2b?w=600&h=400&fit=crop',
                            'trending' => false,
                            'stats' => ['views' => '956', 'likes' => '123']
                        ]
                    ],
                    'additionalArticles' => [
                        [
                            'id' => 5,
                            'title' => 'Cross-border Logistics Challenges',
                            'description' => 'Navigating international trade regulations and customs compliance.',
                            'author' => 'James Wilson',
                            'readTime' => '6 min read',
                            'category' => 'Logistics',
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=300&fit=crop'
                        ],
                        [
                            'id' => 6,
                            'title' => 'Inventory Optimization Strategies',
                            'description' => 'Balancing stock levels with demand variability using AI.',
                            'author' => 'Anna Martinez',
                            'readTime' => '5 min read',
                            'category' => 'Inventory',
                            'image' => 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=300&fit=crop'
                        ],
                        [
                            'id' => 7,
                            'title' => 'Supplier Relationship Management',
                            'description' => 'Building stronger partnerships for supply chain resilience.',
                            'author' => 'Robert Taylor',
                            'readTime' => '4 min read',
                            'category' => 'Procurement',
                            'image' => 'https://images.unsplash.com/photo-1556741533-6e6a3bd4b0a2?w=600&h=300&fit=crop'
                        ]
                    ],
                    'upcomingTopics' => [
                        'Blockchain in Supply Chain',
                        'Circular Economy Models',
                        'Supply Chain Talent Development',
                        'Cross-border Logistics',
                        'Inventory Optimization Strategies',
                        'Last-Mile Delivery Innovation'
                    ],
                    'expertInsights' => [
                        [
                            'name' => 'Dr. Maria Garcia',
                            'role' => 'Supply Chain Professor, MIT',
                            'quote' => 'The next decade will see AI become as fundamental to supply chains as electricity is to manufacturing.',
                            'avatar' => 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop',
                            'image' => 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop'
                        ],
                        [
                            'name' => 'James Chen',
                            'role' => 'CEO, Logistics Tech Inc.',
                            'quote' => 'Companies that fail to digitize their supply chains will be left behind. The ROI is clear and compelling.',
                            'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop',
                            'image' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop'
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 572,
                'section_key' => 'contentPreview',
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
