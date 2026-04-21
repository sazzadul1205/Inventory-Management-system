<?php

namespace Database\Seeders\PageRelatedSeeders\SectionVariantSeeder;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class NewsPageSectionVariantSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        // Upsert only this page's variants so other page seeders do not get wiped out.
        $variants = [

            // Press Releases Section
            [
                'id' => 421,
                'section_key' => 'pressReleases',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => 'Press Center',
                    'title' => [
                        'prefix' => 'Official',
                        'highlight' => 'Press Releases',
                        'suffix' => ''
                    ],
                    'description' => 'Get the latest official announcements, company news, and media resources from SupplyChainPro.',
                    'heroImage' => 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&h=500&fit=crop',
                    'searchPlaceholder' => 'Search press releases by title, topic, or keyword...',
                    'categories' => [
                        ['id' => 'all', 'label' => 'All Press Releases', 'icon' => 'newspaper'],
                        ['id' => 'product', 'label' => 'Product Launches', 'icon' => 'chip'],
                        ['id' => 'partnership', 'label' => 'Partnerships', 'icon' => 'users'],
                        ['id' => 'award', 'label' => 'Awards', 'icon' => 'trophy'],
                        ['id' => 'funding', 'label' => 'Funding', 'icon' => 'credit'],
                        ['id' => 'acquisition', 'label' => 'Acquisitions', 'icon' => 'rocket'],
                        ['id' => 'executive', 'label' => 'Executive', 'icon' => 'briefcase']
                    ],
                    'pressReleases' => [
                        [
                            'id' => 'pr-1',
                            'title' => 'SupplyChainPro Raises $150M Series D to Transform Global Logistics',
                            'excerpt' => 'The new funding round will accelerate AI-powered supply chain optimization and expand operations across Asia-Pacific markets.',
                            'content' => 'SupplyChainPro, the leading AI-driven supply chain platform, today announced it has raised $150 million in Series D funding...',
                            'date' => '2024-03-15',
                            'category' => 'funding',
                            'views' => '3.2k',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
                            'link' => '/press/series-d-funding',
                            'author' => [
                                'name' => 'Sarah Johnson',
                                'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop'
                            ],
                            'tags' => ['funding', 'ai', 'logistics', 'series-d'],
                            'isFeatured' => true,
                            'isEmbargoed' => false,
                            'source' => 'TechCrunch',
                            'pdfUrl' => '/pdfs/press-release-series-d.pdf'
                        ],
                        [
                            'id' => 'pr-2',
                            'title' => 'SupplyChainPro Announces Strategic Partnership with Global Logistics Leader Maersk',
                            'excerpt' => 'The partnership integrates SupplyChainPro\'s AI platform with Maersk\'s global shipping network to provide end-to-end supply chain visibility.',
                            'content' => 'This strategic alliance will enable joint customers to optimize shipping routes, reduce carbon emissions, and improve delivery times...',
                            'date' => '2024-03-10',
                            'category' => 'partnership',
                            'views' => '2.1k',
                            'image' => 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&h=400&fit=crop',
                            'link' => '/press/maersk-partnership',
                            'author' => [
                                'name' => 'Michael Chen',
                                'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop'
                            ],
                            'tags' => ['partnership', 'maersk', 'logistics', 'integration'],
                            'isFeatured' => false,
                            'isEmbargoed' => false,
                            'source' => 'Reuters',
                            'pdfUrl' => '/pdfs/press-release-maersk.pdf'
                        ],
                        [
                            'id' => 'pr-3',
                            'title' => 'SupplyChainPro Named Leader in 2024 Gartner Magic Quadrant for Supply Chain Planning',
                            'excerpt' => 'The recognition highlights SupplyChainPro\'s vision, execution capabilities, and customer satisfaction in supply chain planning solutions.',
                            'content' => 'We believe this recognition validates our commitment to innovation and customer success in supply chain planning...',
                            'date' => '2024-03-05',
                            'category' => 'award',
                            'views' => '4.5k',
                            'image' => 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&h=400&fit=crop',
                            'link' => '/press/gartner-leader',
                            'author' => [
                                'name' => 'Emily Rodriguez',
                                'avatar' => 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=80&h=80&fit=crop'
                            ],
                            'tags' => ['award', 'gartner', 'supply-chain-planning', 'recognition'],
                            'isFeatured' => false,
                            'isEmbargoed' => false,
                            'source' => 'PR Newswire',
                            'pdfUrl' => '/pdfs/press-release-gartner.pdf'
                        ],
                        [
                            'id' => 'pr-4',
                            'title' => 'SupplyChainPro Launches Next-Generation AI Inventory Optimization Engine',
                            'excerpt' => 'New predictive capabilities reduce stockouts by 40% while decreasing inventory carrying costs by an average of 25%.',
                            'content' => 'The new engine leverages advanced machine learning algorithms to provide real-time demand forecasting and automated replenishment...',
                            'date' => '2024-02-28',
                            'category' => 'product',
                            'views' => '1.8k',
                            'image' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
                            'link' => '/press/ai-inventory-engine',
                            'author' => [
                                'name' => 'David Kim',
                                'avatar' => 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop'
                            ],
                            'tags' => ['product-launch', 'ai', 'inventory', 'optimization'],
                            'isFeatured' => false,
                            'isEmbargoed' => false,
                            'source' => 'VentureBeat',
                            'pdfUrl' => '/pdfs/press-release-ai-engine.pdf'
                        ],
                        [
                            'id' => 'pr-5',
                            'title' => 'SupplyChainPro Appoints Former Amazon Executive as Chief Technology Officer',
                            'excerpt' => 'Industry veteran Dr. Lisa Wang joins to lead technology strategy and product innovation at the company.',
                            'content' => 'Dr. Wang brings over 15 years of experience in supply chain technology and artificial intelligence from her previous role at Amazon...',
                            'date' => '2024-02-20',
                            'category' => 'executive',
                            'views' => '1.5k',
                            'image' => 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=400&fit=crop',
                            'link' => '/press/new-cto-appointment',
                            'author' => [
                                'name' => 'Sarah Johnson',
                                'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop'
                            ],
                            'tags' => ['executive', 'cto', 'amazon', 'leadership'],
                            'isFeatured' => false,
                            'isEmbargoed' => true,
                            'source' => 'Bloomberg',
                            'pdfUrl' => '/pdfs/press-release-cto.pdf'
                        ],
                        [
                            'id' => 'pr-6',
                            'title' => 'SupplyChainPro Reports Record Q4 2023 Revenue Growth of 65% Year-over-Year',
                            'excerpt' => 'Annual recurring revenue surpasses $200 million milestone as enterprise customer base expands globally.',
                            'content' => 'The company achieved record financial performance in Q4 2023, driven by strong demand for its AI-powered supply chain platform...',
                            'date' => '2024-02-15',
                            'category' => 'financial',
                            'views' => '2.9k',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
                            'link' => '/press/q4-2023-earnings',
                            'author' => [
                                'name' => 'Michael Chen',
                                'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop'
                            ],
                            'tags' => ['financial', 'earnings', 'revenue', 'growth'],
                            'isFeatured' => false,
                            'isEmbargoed' => false,
                            'source' => 'Wall Street Journal',
                            'pdfUrl' => '/pdfs/press-release-earnings.pdf'
                        ]
                    ],
                    'featuredStats' => [
                        ['value' => '95%', 'label' => 'Forecast Accuracy'],
                        ['value' => '40%', 'label' => 'Stockout Reduction'],
                        ['value' => '25%', 'label' => 'Inventory Savings']
                    ],
                    'showMediaKit' => true,
                    'mediaKitLink' => '/media-kit',
                    'showMediaContact' => true,
                    'mediaContact' => [
                        'name' => 'Sarah Johnson',
                        'title' => 'Head of Communications',
                        'email' => 'media@supplychainpro.com',
                        'phone' => '+1 (555) 123-4567',
                        'image' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
                    ],
                    'showNewsletter' => true,
                    'newsletter' => [
                        'title' => 'Get Press Releases Delivered',
                        'description' => 'Subscribe to receive official press releases and company announcements directly in your inbox.',
                        'disclaimer' => 'No spam, unsubscribe anytime. Get 1-2 emails per month.',
                        'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 422,
                'section_key' => 'pressReleases',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => 'Newsroom',
                    'title' => [
                        'prefix' => 'Press',
                        'highlight' => 'Releases',
                        'suffix' => '& Announcements'
                    ],
                    'description' => 'Official statements, company news, and media resources from SupplyChainPro.',
                    'heroImage' => 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&h=500&fit=crop',
                    'searchPlaceholder' => 'Search press releases, topics, or keywords...',
                    'defaultViewMode' => 'grid',
                    'categories' => [
                        ['id' => 'all', 'label' => 'All Releases', 'icon' => 'newspaper', 'count' => 6],
                        ['id' => 'product', 'label' => 'Product Launches', 'icon' => 'chip'],
                        ['id' => 'partnership', 'label' => 'Partnerships', 'icon' => 'users'],
                        ['id' => 'award', 'label' => 'Awards', 'icon' => 'trophy'],
                        ['id' => 'funding', 'label' => 'Funding', 'icon' => 'credit'],
                        ['id' => 'acquisition', 'label' => 'Acquisitions', 'icon' => 'rocket']
                    ],
                    'stats' => [
                        ['value' => '50+', 'label' => 'Press Releases', 'icon' => 'newspaper'],
                        ['value' => '25+', 'label' => 'Media Mentions', 'icon' => 'globe'],
                        ['value' => '100+', 'label' => 'Media Contacts', 'icon' => 'users'],
                        ['value' => '15+', 'label' => 'Awards Won', 'icon' => 'trophy']
                    ],
                    'pressReleases' => [
                        [
                            'id' => 'pr-1',
                            'title' => 'SupplyChainPro Raises $150M Series D to Transform Global Logistics',
                            'excerpt' => 'The new funding round will accelerate AI-powered supply chain optimization and expand operations across Asia-Pacific markets.',
                            'content' => 'SupplyChainPro, the leading AI-driven supply chain platform, today announced it has raised $150 million in Series D funding led by Global Ventures...',
                            'date' => '2024-03-15',
                            'category' => 'funding',
                            'views' => '3.2k',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
                            'link' => '/press/series-d-funding',
                            'author' => [
                                'name' => 'Sarah Johnson',
                                'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop'
                            ],
                            'tags' => ['funding', 'ai', 'logistics', 'series-d'],
                            'isFeatured' => true,
                            'isEmbargoed' => false,
                            'region' => 'Global',
                            'pdfUrl' => '/pdfs/press-release-series-d.pdf',
                            'quote' => [
                                'text' => 'This investment validates our vision of transforming supply chain operations through artificial intelligence.',
                                'author' => 'Sarah Johnson',
                                'title' => 'CEO, SupplyChainPro'
                            ]
                        ],
                        [
                            'id' => 'pr-2',
                            'title' => 'SupplyChainPro Announces Strategic Partnership with Global Logistics Leader Maersk',
                            'excerpt' => 'The partnership integrates SupplyChainPro\'s AI platform with Maersk\'s global shipping network to provide end-to-end supply chain visibility.',
                            'content' => 'This strategic alliance will enable joint customers to optimize shipping routes, reduce carbon emissions, and improve delivery times...',
                            'date' => '2024-03-10',
                            'category' => 'partnership',
                            'views' => '2.1k',
                            'image' => 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&h=400&fit=crop',
                            'link' => '/press/maersk-partnership',
                            'author' => [
                                'name' => 'Michael Chen',
                                'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop'
                            ],
                            'tags' => ['partnership', 'maersk', 'logistics', 'integration'],
                            'isFeatured' => false,
                            'isEmbargoed' => false,
                            'region' => 'Global',
                            'pdfUrl' => '/pdfs/press-release-maersk.pdf'
                        ],
                        [
                            'id' => 'pr-3',
                            'title' => 'SupplyChainPro Named Leader in 2024 Gartner Magic Quadrant for Supply Chain Planning',
                            'excerpt' => 'The recognition highlights SupplyChainPro\'s vision, execution capabilities, and customer satisfaction in supply chain planning solutions.',
                            'content' => 'We believe this recognition validates our commitment to innovation and customer success in supply chain planning...',
                            'date' => '2024-03-05',
                            'category' => 'award',
                            'views' => '4.5k',
                            'image' => 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&h=400&fit=crop',
                            'link' => '/press/gartner-leader',
                            'author' => [
                                'name' => 'Emily Rodriguez',
                                'avatar' => 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=80&h=80&fit=crop'
                            ],
                            'tags' => ['award', 'gartner', 'supply-chain-planning', 'recognition'],
                            'isFeatured' => false,
                            'isEmbargoed' => false,
                            'region' => 'North America',
                            'pdfUrl' => '/pdfs/press-release-gartner.pdf'
                        ],
                        [
                            'id' => 'pr-4',
                            'title' => 'SupplyChainPro Launches Next-Generation AI Inventory Optimization Engine',
                            'excerpt' => 'New predictive capabilities reduce stockouts by 40% while decreasing inventory carrying costs by an average of 25%.',
                            'content' => 'The new engine leverages advanced machine learning algorithms to provide real-time demand forecasting, automated replenishment recommendations...',
                            'date' => '2024-02-28',
                            'category' => 'product',
                            'views' => '1.8k',
                            'image' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
                            'link' => '/press/ai-inventory-engine',
                            'author' => [
                                'name' => 'David Kim',
                                'avatar' => 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop'
                            ],
                            'tags' => ['product-launch', 'ai', 'inventory', 'optimization'],
                            'isFeatured' => false,
                            'isEmbargoed' => false,
                            'region' => 'Global',
                            'pdfUrl' => '/pdfs/press-release-ai-engine.pdf',
                            'quote' => [
                                'text' => 'This technology represents a quantum leap in how businesses manage inventory across complex supply chains.',
                                'author' => 'David Kim',
                                'title' => 'CPO, SupplyChainPro'
                            ]
                        ],
                        [
                            'id' => 'pr-5',
                            'title' => 'SupplyChainPro Appoints Former Amazon Executive as Chief Technology Officer',
                            'excerpt' => 'Industry veteran Dr. Lisa Wang joins to lead technology strategy and product innovation at the company.',
                            'content' => 'Dr. Wang brings over 15 years of experience in supply chain technology and artificial intelligence from her previous role as VP of Supply Chain Technology at Amazon...',
                            'date' => '2024-02-20',
                            'category' => 'executive',
                            'views' => '1.5k',
                            'image' => 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=400&fit=crop',
                            'link' => '/press/new-cto-appointment',
                            'author' => [
                                'name' => 'Sarah Johnson',
                                'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop'
                            ],
                            'tags' => ['executive', 'cto', 'amazon', 'leadership'],
                            'isFeatured' => false,
                            'isEmbargoed' => true,
                            'region' => 'North America',
                            'pdfUrl' => '/pdfs/press-release-cto.pdf'
                        ],
                        [
                            'id' => 'pr-6',
                            'title' => 'SupplyChainPro Reports Record Q4 2023 Revenue Growth of 65% Year-over-Year',
                            'excerpt' => 'Annual recurring revenue surpasses $200 million milestone as enterprise customer base expands globally.',
                            'content' => 'The company achieved record financial performance in Q4 2023, driven by strong demand for its AI-powered supply chain platform...',
                            'date' => '2024-02-15',
                            'category' => 'financial',
                            'views' => '2.9k',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
                            'link' => '/press/q4-2023-earnings',
                            'author' => [
                                'name' => 'Michael Chen',
                                'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop'
                            ],
                            'tags' => ['financial', 'earnings', 'revenue', 'growth'],
                            'isFeatured' => false,
                            'isEmbargoed' => false,
                            'region' => 'Global',
                            'pdfUrl' => '/pdfs/press-release-earnings.pdf'
                        ]
                    ],
                    'showPressKit' => true,
                    'pressKitLink' => '/press-kit',
                    'pressKitResources' => [
                        ['name' => 'Logo Assets', 'format' => 'PNG, SVG, EPS', 'icon' => 'photo', 'link' => '/press-kit/logos'],
                        ['name' => 'Executive Headshots', 'format' => 'JPG, PNG', 'icon' => 'users', 'link' => '/press-kit/headshots'],
                        ['name' => 'Brand Guidelines', 'format' => 'PDF', 'icon' => 'document', 'link' => '/press-kit/brand-guidelines'],
                        ['name' => 'Fact Sheet', 'format' => 'PDF', 'icon' => 'chart', 'link' => '/press-kit/fact-sheet']
                    ],
                    'showMediaContact' => true,
                    'mediaContact' => [
                        'name' => 'Sarah Johnson',
                        'title' => 'Head of Communications',
                        'email' => 'media@supplychainpro.com',
                        'phone' => '+1 (555) 123-4567',
                        'image' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
                    ],
                    'showNewsletter' => true,
                    'newsletter' => [
                        'title' => 'Subscribe to Press Release Alerts',
                        'description' => 'Get the latest press releases and company announcements delivered straight to your inbox.',
                        'disclaimer' => 'No spam, unsubscribe anytime. Get 1-2 emails per month.',
                        'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 423,
                'section_key' => 'pressReleases',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => 'Media Center',
                    'title' => [
                        'prefix' => 'Press',
                        'highlight' => 'Center'
                    ],
                    'description' => 'Official news, press releases, and media resources from SupplyChainPro.',
                    'heroImage' => 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&h=500&fit=crop',
                    'autoPlayCarousel' => true,
                    'categories' => [
                        ['id' => 'all', 'label' => 'All Releases', 'icon' => 'newspaper'],
                        ['id' => 'product', 'label' => 'Product Launches', 'icon' => 'chip'],
                        ['id' => 'partnership', 'label' => 'Partnerships', 'icon' => 'users'],
                        ['id' => 'award', 'label' => 'Awards', 'icon' => 'trophy'],
                        ['id' => 'funding', 'label' => 'Funding', 'icon' => 'credit'],
                        ['id' => 'acquisition', 'label' => 'Acquisitions', 'icon' => 'rocket']
                    ],
                    'featuredReleases' => [
                        [
                            'id' => 'featured-1',
                            'title' => 'SupplyChainPro Raises $150M Series D to Transform Global Logistics',
                            'excerpt' => 'The new funding round will accelerate AI-powered supply chain optimization and expand operations across Asia-Pacific markets.',
                            'date' => '2024-03-15',
                            'category' => 'funding',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop',
                            'link' => '/press/series-d-funding',
                            'isPressRelease' => true
                        ],
                        [
                            'id' => 'featured-2',
                            'title' => 'SupplyChainPro Named Leader in 2024 Gartner Magic Quadrant',
                            'excerpt' => 'The recognition highlights SupplyChainPro\'s vision and execution capabilities in supply chain planning.',
                            'date' => '2024-03-05',
                            'category' => 'award',
                            'image' => 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&h=600&fit=crop',
                            'link' => '/press/gartner-leader',
                            'isPressRelease' => true
                        ]
                    ],
                    'pressReleases' => [
                        [
                            'id' => 'pr-1',
                            'title' => 'SupplyChainPro Raises $150M Series D to Transform Global Logistics',
                            'excerpt' => 'The new funding round will accelerate AI-powered supply chain optimization and expand operations across Asia-Pacific markets.',
                            'content' => 'SupplyChainPro, the leading AI-driven supply chain platform, today announced it has raised $150 million in Series D funding led by Global Ventures...',
                            'date' => '2024-03-15',
                            'category' => 'funding',
                            'views' => '3.2k',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
                            'link' => '/press/series-d-funding',
                            'author' => [
                                'name' => 'Sarah Johnson',
                                'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop'
                            ],
                            'tags' => ['funding', 'ai', 'logistics'],
                            'pdfUrl' => '/pdfs/release.pdf',
                            'quote' => [
                                'text' => 'This investment validates our vision of transforming supply chain operations through artificial intelligence.',
                                'author' => 'Sarah Johnson, CEO'
                            ]
                        ],
                        [
                            'id' => 'pr-2',
                            'title' => 'SupplyChainPro Announces Strategic Partnership with Maersk',
                            'excerpt' => 'The partnership integrates SupplyChainPro\'s AI platform with Maersk\'s global shipping network.',
                            'content' => 'This strategic alliance will enable joint customers to optimize shipping routes and reduce carbon emissions...',
                            'date' => '2024-03-10',
                            'category' => 'partnership',
                            'views' => '2.1k',
                            'image' => 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&h=400&fit=crop',
                            'link' => '/press/maersk-partnership',
                            'author' => [
                                'name' => 'Michael Chen',
                                'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop'
                            ],
                            'tags' => ['partnership', 'maersk'],
                            'pdfUrl' => '/pdfs/maersk.pdf'
                        ],
                        [
                            'id' => 'pr-3',
                            'title' => 'SupplyChainPro Named Leader in Gartner Magic Quadrant',
                            'excerpt' => 'The recognition highlights SupplyChainPro\'s vision and execution capabilities.',
                            'content' => 'We believe this recognition validates our commitment to innovation and customer success...',
                            'date' => '2024-03-05',
                            'category' => 'award',
                            'views' => '4.5k',
                            'image' => 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&h=400&fit=crop',
                            'link' => '/press/gartner-leader',
                            'author' => [
                                'name' => 'Emily Rodriguez',
                                'avatar' => 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=80&h=80&fit=crop'
                            ],
                            'tags' => ['award', 'gartner'],
                            'pdfUrl' => '/pdfs/gartner.pdf',
                            'quote' => [
                                'text' => 'Being named a Leader validates our approach to supply chain planning.',
                                'author' => 'Emily Rodriguez, CMO'
                            ]
                        ]
                    ],
                    'mediaGallery' => [
                        [
                            'id' => 'media-1',
                            'title' => 'Product Launch Event 2024',
                            'type' => 'image',
                            'thumbnail' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop',
                            'url' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=800&fit=crop',
                            'downloadUrl' => '/downloads/event-photo.jpg',
                            'date' => 'March 2024'
                        ],
                        [
                            'id' => 'media-2',
                            'title' => 'CEO Interview: Supply Chain Innovation',
                            'type' => 'video',
                            'thumbnail' => 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=400&h=300&fit=crop',
                            'url' => 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
                            'downloadUrl' => '/downloads/interview.mp4',
                            'date' => 'February 2024'
                        ]
                    ],
                    'brandAssets' => [
                        ['name' => 'Logo Assets', 'format' => 'PNG, SVG, EPS', 'icon' => 'photo', 'link' => '/brand/logos'],
                        ['name' => 'Brand Guidelines', 'format' => 'PDF', 'icon' => 'document', 'link' => '/brand/guidelines'],
                        ['name' => 'Fact Sheet', 'format' => 'PDF', 'icon' => 'chart', 'link' => '/brand/fact-sheet'],
                        ['name' => 'Executive Bios', 'format' => 'PDF', 'icon' => 'users', 'link' => '/brand/executives']
                    ],
                    'mediaContact' => [
                        'name' => 'Sarah Johnson',
                        'title' => 'Head of Communications',
                        'email' => 'media@supplychainpro.com',
                        'phone' => '+1 (555) 123-4567',
                        'image' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
                    ],
                    'showNewsletter' => true,
                    'newsletter' => [
                        'title' => 'Subscribe to Press Alerts',
                        'description' => 'Get the latest press releases delivered to your inbox.',
                        'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 424,
                'section_key' => 'pressReleases',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Media Coverage Section 
            [
                'id' => 425,
                'section_key' => 'mediaCoverage',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => 'In the News',
                    'title' => [
                        'prefix' => 'Media',
                        'highlight' => 'Coverage'
                    ],
                    'description' => 'Discover what leading publications are saying about SupplyChainPro. From feature articles to expert interviews, see our latest media mentions.',
                    'heroImage' => 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&h=500&fit=crop',
                    'searchPlaceholder' => 'Search media coverage by publication, topic, or keyword...',
                    'stats' => [
                        ['value' => '50+', 'label' => 'Media Mentions', 'icon' => 'newspaper'],
                        ['value' => '25+', 'label' => 'Publications', 'icon' => 'globe'],
                        ['value' => '2M+', 'label' => 'Impressions', 'icon' => 'eye'],
                        ['value' => '4.8', 'label' => 'Avg. Rating', 'icon' => 'star']
                    ],
                    'categories' => [
                        ['id' => 'all', 'label' => 'All Coverage', 'icon' => 'newspaper'],
                        ['id' => 'feature', 'label' => 'Features', 'icon' => 'star'],
                        ['id' => 'interview', 'label' => 'Interviews', 'icon' => 'microphone'],
                        ['id' => 'review', 'label' => 'Reviews', 'icon' => 'document'],
                        ['id' => 'mention', 'label' => 'Mentions', 'icon' => 'quote']
                    ],
                    'mediaCoverage' => [
                        [
                            'id' => 'cov-1',
                            'title' => 'How SupplyChainPro Is Using AI to Revolutionize Global Logistics',
                            'excerpt' => 'The company\'s predictive analytics platform is helping enterprises reduce inventory costs by 25% while improving service levels.',
                            'date' => '2024-03-15',
                            'publication' => 'techcrunch',
                            'category' => 'feature',
                            'views' => '3.2k',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
                            'link' => 'https://techcrunch.com/article',
                            'author' => [
                                'name' => 'Sarah Perez',
                                'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop'
                            ],
                            'tags' => ['ai', 'logistics', 'innovation'],
                            'isFeatured' => true,
                            'publicationLogo' => 'https://placehold.co/100x40/ff6600/ffffff?text=TechCrunch',
                            'quote' => 'SupplyChainPro\'s approach to demand forecasting represents a significant leap forward for the industry.'
                        ],
                        [
                            'id' => 'cov-2',
                            'title' => 'Supply Chain Startups to Watch in 2024',
                            'excerpt' => 'SupplyChainPro makes the list of top innovators transforming how businesses manage their supply chains.',
                            'date' => '2024-03-10',
                            'publication' => 'forbes',
                            'category' => 'mention',
                            'views' => '2.1k',
                            'image' => 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&h=400&fit=crop',
                            'link' => 'https://forbes.com/article',
                            'author' => [
                                'name' => 'John Smith',
                                'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop'
                            ],
                            'tags' => ['startups', 'innovation', '2024'],
                            'isFeatured' => false,
                            'publicationLogo' => 'https://placehold.co/100x40/1a1a1a/ffffff?text=Forbes'
                        ],
                        [
                            'id' => 'cov-3',
                            'title' => 'SupplyChainPro Named Leader in Gartner Magic Quadrant',
                            'excerpt' => 'The recognition validates the company\'s vision and execution in supply chain planning solutions.',
                            'date' => '2024-03-05',
                            'publication' => 'gartner',
                            'category' => 'review',
                            'views' => '4.5k',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
                            'link' => 'https://gartner.com/report',
                            'author' => [
                                'name' => 'Emily Rodriguez',
                                'avatar' => 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=80&h=80&fit=crop'
                            ],
                            'tags' => ['gartner', 'award', 'recognition'],
                            'isFeatured' => false,
                            'publicationLogo' => 'https://placehold.co/100x40/6b21a8/ffffff?text=Gartner'
                        ],
                        [
                            'id' => 'cov-4',
                            'title' => 'CEO Sarah Johnson on Building a Resilient Supply Chain',
                            'excerpt' => 'In this exclusive interview, Johnson shares insights on navigating global disruptions and leveraging technology.',
                            'date' => '2024-02-28',
                            'publication' => 'bloomberg',
                            'category' => 'interview',
                            'views' => '1.8k',
                            'image' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop',
                            'link' => 'https://bloomberg.com/interview',
                            'author' => [
                                'name' => 'Michael Chen',
                                'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop'
                            ],
                            'tags' => ['interview', 'leadership', 'resilience'],
                            'isFeatured' => false,
                            'publicationLogo' => 'https://placehold.co/100x40/f59e0b/ffffff?text=Bloomberg'
                        ],
                        [
                            'id' => 'cov-5',
                            'title' => 'SupplyChainPro Integrates with Major ERP Providers',
                            'excerpt' => 'New integrations with SAP and Oracle simplify data flow and enhance supply chain visibility.',
                            'date' => '2024-02-20',
                            'publication' => 'wsj',
                            'category' => 'feature',
                            'views' => '1.5k',
                            'image' => 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop',
                            'link' => 'https://wsj.com/article',
                            'author' => [
                                'name' => 'David Kim',
                                'avatar' => 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop'
                            ],
                            'tags' => ['integration', 'erp', 'sap', 'oracle'],
                            'isFeatured' => false,
                            'publicationLogo' => 'https://placehold.co/100x40/8b5cf6/ffffff?text=WSJ'
                        ],
                        [
                            'id' => 'cov-6',
                            'title' => 'SupplyChainPro Recognized for Sustainability Innovation',
                            'excerpt' => 'The company\'s carbon tracking features help customers reduce logistics emissions by up to 30%.',
                            'date' => '2024-02-15',
                            'publication' => 'supplychain',
                            'category' => 'award',
                            'views' => '2.9k',
                            'image' => 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop',
                            'link' => 'https://supplychaindigital.com/award',
                            'author' => [
                                'name' => 'Lisa Wang',
                                'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop'
                            ],
                            'tags' => ['sustainability', 'innovation', 'award'],
                            'isFeatured' => true,
                            'publicationLogo' => 'https://placehold.co/100x40/10b981/ffffff?text=SupplyChain+Digital'
                        ]
                    ],
                    'featuredCoverage' => null,
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
                    'showNewsletter' => true,
                    'newsletter' => [
                        'title' => 'Get Media Coverage Updates',
                        'description' => 'Subscribe to receive the latest media mentions and press coverage directly in your inbox.',
                        'disclaimer' => 'No spam, unsubscribe anytime. Get 1-2 emails per month.',
                        'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 426,
                'section_key' => 'mediaCoverage',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => 'Media Mentions',
                    'title' => [
                        'prefix' => 'What the',
                        'highlight' => 'Press',
                        'suffix' => 'Is Saying'
                    ],
                    'description' => 'Discover how SupplyChainPro is being featured in leading publications worldwide. From product reviews to expert interviews, see our latest media mentions.',
                    'heroImage' => 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&h=500&fit=crop',
                    'searchPlaceholder' => 'Search media coverage by publication, topic, or keyword...',
                    'defaultViewMode' => 'grid',
                    'stats' => [
                        ['value' => '50+', 'label' => 'Media Mentions', 'icon' => 'newspaper', 'trend' => '+12%', 'trendUp' => true],
                        ['value' => '25+', 'label' => 'Publications', 'icon' => 'globe', 'trend' => '+5', 'trendUp' => true],
                        ['value' => '2M+', 'label' => 'Total Impressions', 'icon' => 'eye', 'trend' => '+28%', 'trendUp' => true],
                        ['value' => '4.8', 'label' => 'Avg. Rating', 'icon' => 'star', 'trend' => '+0.3', 'trendUp' => true]
                    ],
                    'categories' => [
                        ['id' => 'all', 'label' => 'All Coverage', 'icon' => 'newspaper'],
                        ['id' => 'feature', 'label' => 'Features', 'icon' => 'star'],
                        ['id' => 'interview', 'label' => 'Interviews', 'icon' => 'microphone'],
                        ['id' => 'review', 'label' => 'Reviews', 'icon' => 'document'],
                        ['id' => 'award', 'label' => 'Awards', 'icon' => 'trophy'],
                        ['id' => 'mention', 'label' => 'Mentions', 'icon' => 'quote']
                    ],
                    'mediaCoverage' => [
                        [
                            'id' => 'cov-1',
                            'title' => 'How SupplyChainPro Is Using AI to Revolutionize Global Logistics',
                            'excerpt' => 'The company\'s predictive analytics platform is helping enterprises reduce inventory costs by 25% while improving service levels.',
                            'date' => '2024-03-15',
                            'publication' => 'TechCrunch',
                            'category' => 'feature',
                            'views' => '3.2k',
                            'likes' => 89,
                            'trendingScore' => 95,
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
                            'link' => 'https://techcrunch.com/article',
                            'author' => ['name' => 'Sarah Perez'],
                            'tags' => ['ai', 'logistics', 'innovation'],
                            'isFeatured' => true,
                            'isTrending' => true,
                            'publicationLogo' => 'https://placehold.co/100x40/ff6600/ffffff?text=TechCrunch',
                            'quote' => 'SupplyChainPro\'s approach to demand forecasting represents a significant leap forward for the industry.'
                        ],
                        [
                            'id' => 'cov-2',
                            'title' => 'Supply Chain Startups to Watch in 2024',
                            'excerpt' => 'SupplyChainPro makes the list of top innovators transforming how businesses manage their supply chains.',
                            'date' => '2024-03-10',
                            'publication' => 'Forbes',
                            'category' => 'mention',
                            'views' => '2.1k',
                            'likes' => 45,
                            'trendingScore' => 72,
                            'image' => 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&h=400&fit=crop',
                            'link' => 'https://forbes.com/article',
                            'author' => ['name' => 'John Smith'],
                            'tags' => ['startups', 'innovation', '2024'],
                            'isFeatured' => false,
                            'isTrending' => false,
                            'publicationLogo' => 'https://placehold.co/100x40/1a1a1a/ffffff?text=Forbes'
                        ],
                        [
                            'id' => 'cov-3',
                            'title' => 'SupplyChainPro Named Leader in Gartner Magic Quadrant',
                            'excerpt' => 'The recognition validates the company\'s vision and execution in supply chain planning solutions.',
                            'date' => '2024-03-05',
                            'publication' => 'Gartner',
                            'category' => 'award',
                            'views' => '4.5k',
                            'likes' => 156,
                            'trendingScore' => 98,
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
                            'link' => 'https://gartner.com/report',
                            'author' => ['name' => 'Emily Rodriguez'],
                            'tags' => ['gartner', 'award', 'recognition'],
                            'isFeatured' => false,
                            'isTrending' => true,
                            'publicationLogo' => 'https://placehold.co/100x40/6b21a8/ffffff?text=Gartner'
                        ],
                        [
                            'id' => 'cov-4',
                            'title' => 'CEO Sarah Johnson on Building a Resilient Supply Chain',
                            'excerpt' => 'In this exclusive interview, Johnson shares insights on navigating global disruptions and leveraging technology.',
                            'date' => '2024-02-28',
                            'publication' => 'Bloomberg',
                            'category' => 'interview',
                            'views' => '1.8k',
                            'likes' => 67,
                            'trendingScore' => 65,
                            'image' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop',
                            'link' => 'https://bloomberg.com/interview',
                            'author' => ['name' => 'Michael Chen'],
                            'tags' => ['interview', 'leadership', 'resilience'],
                            'isFeatured' => false,
                            'isTrending' => false,
                            'publicationLogo' => 'https://placehold.co/100x40/f59e0b/ffffff?text=Bloomberg'
                        ],
                        [
                            'id' => 'cov-5',
                            'title' => 'SupplyChainPro Integrates with Major ERP Providers',
                            'excerpt' => 'New integrations with SAP and Oracle simplify data flow and enhance supply chain visibility.',
                            'date' => '2024-02-20',
                            'publication' => 'Wall Street Journal',
                            'category' => 'feature',
                            'views' => '1.5k',
                            'likes' => 34,
                            'trendingScore' => 58,
                            'image' => 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop',
                            'link' => 'https://wsj.com/article',
                            'author' => ['name' => 'David Kim'],
                            'tags' => ['integration', 'erp', 'sap', 'oracle'],
                            'isFeatured' => false,
                            'isTrending' => false,
                            'publicationLogo' => 'https://placehold.co/100x40/8b5cf6/ffffff?text=WSJ'
                        ],
                        [
                            'id' => 'cov-6',
                            'title' => 'SupplyChainPro Recognized for Sustainability Innovation',
                            'excerpt' => 'The company\'s carbon tracking features help customers reduce logistics emissions by up to 30%.',
                            'date' => '2024-02-15',
                            'publication' => 'Fast Company',
                            'category' => 'award',
                            'views' => '2.9k',
                            'likes' => 112,
                            'trendingScore' => 82,
                            'image' => 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop',
                            'link' => 'https://fastcompany.com/award',
                            'author' => ['name' => 'Lisa Wang'],
                            'tags' => ['sustainability', 'innovation', 'award'],
                            'isFeatured' => true,
                            'isTrending' => true,
                            'publicationLogo' => 'https://placehold.co/100x40/ec4899/ffffff?text=Fast+Company'
                        ]
                    ],
                    'pressKitResources' => [
                        ['name' => 'Logo Assets', 'format' => 'PNG, SVG, EPS', 'icon' => 'photo', 'link' => '/press-kit/logos'],
                        ['name' => 'Brand Guidelines', 'format' => 'PDF', 'icon' => 'document', 'link' => '/press-kit/brand-guidelines'],
                        ['name' => 'Executive Headshots', 'format' => 'JPG, PNG', 'icon' => 'users', 'link' => '/press-kit/headshots'],
                        ['name' => 'Fact Sheet', 'format' => 'PDF', 'icon' => 'chart', 'link' => '/press-kit/fact-sheet']
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
                    'showNewsletter' => true,
                    'newsletter' => [
                        'title' => 'Get Media Coverage Updates',
                        'description' => 'Subscribe to receive the latest media mentions and press coverage directly in your inbox.',
                        'disclaimer' => 'No spam, unsubscribe anytime. Get 1-2 emails per month.',
                        'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 427,
                'section_key' => 'mediaCoverage',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => 'Media Hub',
                    'title' => [
                        'prefix' => 'In the',
                        'highlight' => 'Spotlight'
                    ],
                    'description' => 'Discover how SupplyChainPro is making waves in leading publications worldwide. From feature articles to expert interviews, see our latest media coverage.',
                    'heroImage' => 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&h=500&fit=crop',
                    'autoPlayCarousel' => true,
                    'stats' => [
                        ['value' => '50+', 'label' => 'Media Mentions', 'icon' => 'newspaper'],
                        ['value' => '25+', 'label' => 'Publications', 'icon' => 'globe'],
                        ['value' => '2M+', 'label' => 'Total Impressions', 'icon' => 'eye'],
                        ['value' => '4.8', 'label' => 'Avg. Rating', 'icon' => 'star']
                    ],
                    'categories' => [
                        ['id' => 'all', 'label' => 'All Coverage', 'icon' => 'newspaper'],
                        ['id' => 'featured', 'label' => 'Featured', 'icon' => 'star'],
                        ['id' => 'trending', 'label' => 'Trending', 'icon' => 'fire'],
                        ['id' => 'recent', 'label' => 'Recent', 'icon' => 'clock']
                    ],
                    'featuredCoverage' => [
                        [
                            'id' => 'featured-1',
                            'title' => 'How SupplyChainPro Is Using AI to Revolutionize Global Logistics',
                            'excerpt' => 'The company\'s predictive analytics platform is helping enterprises reduce inventory costs by 25% while improving service levels.',
                            'date' => '2024-03-15',
                            'publication' => 'TechCrunch',
                            'category' => 'feature',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop',
                            'link' => 'https://techcrunch.com/article'
                        ],
                        [
                            'id' => 'featured-2',
                            'title' => 'SupplyChainPro Named Leader in Gartner Magic Quadrant',
                            'excerpt' => 'The recognition validates the company\'s vision and execution in supply chain planning solutions.',
                            'date' => '2024-03-05',
                            'publication' => 'Gartner',
                            'category' => 'award',
                            'image' => 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&h=600&fit=crop',
                            'link' => 'https://gartner.com/report'
                        ]
                    ],
                    'mediaCoverage' => [
                        [
                            'id' => 'cov-1',
                            'title' => 'How SupplyChainPro Is Using AI to Revolutionize Global Logistics',
                            'excerpt' => 'The company\'s predictive analytics platform is helping enterprises reduce inventory costs by 25% while improving service levels.',
                            'date' => '2024-03-15',
                            'publication' => 'TechCrunch',
                            'category' => 'feature',
                            'views' => '3.2k',
                            'likes' => 89,
                            'trendingScore' => 95,
                            'isFeatured' => true,
                            'publicationLogo' => 'https://placehold.co/100x40/ff6600/ffffff?text=TechCrunch',
                            'link' => 'https://techcrunch.com/article',
                            'tags' => ['ai', 'logistics', 'innovation'],
                            'quote' => 'SupplyChainPro\'s approach to demand forecasting represents a significant leap forward for the industry.'
                        ],
                        [
                            'id' => 'cov-2',
                            'title' => 'Supply Chain Startups to Watch in 2024',
                            'excerpt' => 'SupplyChainPro makes the list of top innovators transforming how businesses manage their supply chains.',
                            'date' => '2024-03-10',
                            'publication' => 'Forbes',
                            'category' => 'mention',
                            'views' => '2.1k',
                            'likes' => 45,
                            'trendingScore' => 72,
                            'isFeatured' => false,
                            'publicationLogo' => 'https://placehold.co/100x40/1a1a1a/ffffff?text=Forbes',
                            'link' => 'https://forbes.com/article',
                            'tags' => ['startups', 'innovation', '2024']
                        ],
                        [
                            'id' => 'cov-3',
                            'title' => 'SupplyChainPro Named Leader in Gartner Magic Quadrant',
                            'excerpt' => 'The recognition validates the company\'s vision and execution in supply chain planning solutions.',
                            'date' => '2024-03-05',
                            'publication' => 'Gartner',
                            'category' => 'award',
                            'views' => '4.5k',
                            'likes' => 156,
                            'trendingScore' => 98,
                            'isFeatured' => true,
                            'publicationLogo' => 'https://placehold.co/100x40/6b21a8/ffffff?text=Gartner',
                            'link' => 'https://gartner.com/report',
                            'tags' => ['gartner', 'award', 'recognition'],
                            'quote' => 'Being named a Leader validates our approach to supply chain planning.'
                        ],
                        [
                            'id' => 'cov-4',
                            'title' => 'CEO Sarah Johnson on Building a Resilient Supply Chain',
                            'excerpt' => 'In this exclusive interview, Johnson shares insights on navigating global disruptions and leveraging technology.',
                            'date' => '2024-02-28',
                            'publication' => 'Bloomberg',
                            'category' => 'interview',
                            'views' => '1.8k',
                            'likes' => 67,
                            'trendingScore' => 65,
                            'isFeatured' => false,
                            'publicationLogo' => 'https://placehold.co/100x40/f59e0b/ffffff?text=Bloomberg',
                            'link' => 'https://bloomberg.com/interview',
                            'tags' => ['interview', 'leadership', 'resilience']
                        ],
                        [
                            'id' => 'cov-5',
                            'title' => 'SupplyChainPro Integrates with Major ERP Providers',
                            'excerpt' => 'New integrations with SAP and Oracle simplify data flow and enhance supply chain visibility.',
                            'date' => '2024-02-20',
                            'publication' => 'Wall Street Journal',
                            'category' => 'review',
                            'views' => '1.5k',
                            'likes' => 34,
                            'trendingScore' => 58,
                            'isFeatured' => false,
                            'publicationLogo' => 'https://placehold.co/100x40/8b5cf6/ffffff?text=WSJ',
                            'link' => 'https://wsj.com/article',
                            'tags' => ['integration', 'erp', 'sap', 'oracle']
                        ],
                        [
                            'id' => 'cov-6',
                            'title' => 'SupplyChainPro Recognized for Sustainability Innovation',
                            'excerpt' => 'The company\'s carbon tracking features help customers reduce logistics emissions by up to 30%.',
                            'date' => '2024-02-15',
                            'publication' => 'Fast Company',
                            'category' => 'award',
                            'views' => '2.9k',
                            'likes' => 112,
                            'trendingScore' => 82,
                            'isFeatured' => true,
                            'publicationLogo' => 'https://placehold.co/100x40/ec4899/ffffff?text=Fast+Company',
                            'link' => 'https://fastcompany.com/award',
                            'tags' => ['sustainability', 'innovation', 'award'],
                            'quote' => 'This recognition highlights our commitment to sustainable supply chain solutions.'
                        ]
                    ],
                    'mentionsTimeline' => [
                        ['publication' => 'TechCrunch', 'title' => 'AI in Supply Chain', 'date' => '2024-03-15', 'link' => '#'],
                        ['publication' => 'Forbes', 'title' => 'Startups to Watch', 'date' => '2024-03-10', 'link' => '#'],
                        ['publication' => 'Gartner', 'title' => 'Magic Quadrant Leader', 'date' => '2024-03-05', 'link' => '#'],
                        ['publication' => 'Bloomberg', 'title' => 'CEO Interview', 'date' => '2024-02-28', 'link' => '#'],
                        ['publication' => 'WSJ', 'title' => 'ERP Integration', 'date' => '2024-02-20', 'link' => '#']
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
                    'showNewsletter' => true,
                    'newsletter' => [
                        'title' => 'Get Media Coverage Updates',
                        'description' => 'Subscribe to receive the latest media mentions and press coverage directly in your inbox.',
                        'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 428,
                'section_key' => 'mediaCoverage',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],


            // Company Announcements Section
            [
                'id' => 429,
                'section_key' => 'companyAnnouncements',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => 'Company Updates',
                    'title' => [
                        'prefix' => 'Official',
                        'highlight' => 'Announcements'
                    ],
                    'description' => 'Stay informed about the latest company news, product launches, awards, and important updates from SupplyChainPro.',
                    'heroImage' => 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&h=500&fit=crop',
                    'searchPlaceholder' => 'Search announcements by title, category, or keyword...',
                    'stats' => [
                        ['value' => '50+', 'label' => 'Announcements', 'icon' => 'megaphone'],
                        ['value' => '15+', 'label' => 'Product Launches', 'icon' => 'chip'],
                        ['value' => '20+', 'label' => 'Awards Won', 'icon' => 'trophy'],
                        ['value' => '10+', 'label' => 'Partnerships', 'icon' => 'users']
                    ],
                    'categories' => [
                        ['id' => 'all', 'label' => 'All Announcements', 'icon' => 'megaphone'],
                        ['id' => 'product', 'label' => 'Product Launches', 'icon' => 'chip'],
                        ['id' => 'company', 'label' => 'Company News', 'icon' => 'building'],
                        ['id' => 'award', 'label' => 'Awards', 'icon' => 'trophy'],
                        ['id' => 'partnership', 'label' => 'Partnerships', 'icon' => 'users'],
                        ['id' => 'event', 'label' => 'Events', 'icon' => 'calendar'],
                        ['id' => 'milestone', 'label' => 'Milestones', 'icon' => 'rocket']
                    ],
                    'announcements' => [
                        [
                            'id' => 'ann-1',
                            'title' => 'SupplyChainPro Raises $150M Series D to Transform Global Logistics',
                            'excerpt' => 'The new funding round will accelerate AI-powered supply chain optimization and expand operations across Asia-Pacific markets.',
                            'content' => 'SupplyChainPro, the leading AI-driven supply chain platform, today announced it has raised $150 million in Series D funding led by Global Ventures...',
                            'date' => '2024-03-15',
                            'category' => 'company',
                            'views' => '3.2k',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
                            'link' => '/announcements/series-d-funding',
                            'author' => [
                                'name' => 'Sarah Johnson',
                                'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop'
                            ],
                            'tags' => ['funding', 'ai', 'logistics', 'series-d'],
                            'isFeatured' => true,
                            'isUrgent' => false,
                            'quote' => [
                                'text' => 'This investment validates our vision of transforming supply chain operations through artificial intelligence.',
                                'author' => 'Sarah Johnson',
                                'title' => 'CEO, SupplyChainPro'
                            ]
                        ],
                        [
                            'id' => 'ann-2',
                            'title' => 'SupplyChainPro Launches Next-Generation AI Inventory Optimization Engine',
                            'excerpt' => 'New predictive capabilities reduce stockouts by 40% while decreasing inventory carrying costs by an average of 25%.',
                            'content' => 'The new engine leverages advanced machine learning algorithms to provide real-time demand forecasting, automated replenishment recommendations...',
                            'date' => '2024-03-10',
                            'category' => 'product',
                            'views' => '2.1k',
                            'image' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
                            'link' => '/announcements/ai-inventory-engine',
                            'author' => [
                                'name' => 'David Kim',
                                'avatar' => 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop'
                            ],
                            'tags' => ['product-launch', 'ai', 'inventory', 'optimization'],
                            'isFeatured' => false,
                            'isUrgent' => false
                        ],
                        [
                            'id' => 'ann-3',
                            'title' => 'SupplyChainPro Named Leader in 2024 Gartner Magic Quadrant',
                            'excerpt' => 'The recognition highlights SupplyChainPro\'s vision, execution capabilities, and customer satisfaction in supply chain planning solutions.',
                            'content' => 'We believe this recognition validates our commitment to innovation and customer success in supply chain planning...',
                            'date' => '2024-03-05',
                            'category' => 'award',
                            'views' => '4.5k',
                            'image' => 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&h=400&fit=crop',
                            'link' => '/announcements/gartner-leader',
                            'author' => [
                                'name' => 'Emily Rodriguez',
                                'avatar' => 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=80&h=80&fit=crop'
                            ],
                            'tags' => ['award', 'gartner', 'supply-chain-planning', 'recognition'],
                            'isFeatured' => false,
                            'isUrgent' => false,
                            'quote' => [
                                'text' => 'Being named a Leader validates our approach to supply chain planning.',
                                'author' => 'Emily Rodriguez',
                                'title' => 'CMO, SupplyChainPro'
                            ]
                        ],
                        [
                            'id' => 'ann-4',
                            'title' => 'SupplyChainPro Announces Strategic Partnership with Maersk',
                            'excerpt' => 'The partnership integrates SupplyChainPro\'s AI platform with Maersk\'s global shipping network to provide end-to-end supply chain visibility.',
                            'content' => 'This strategic alliance will enable joint customers to optimize shipping routes, reduce carbon emissions, and improve delivery times...',
                            'date' => '2024-02-28',
                            'category' => 'partnership',
                            'views' => '1.8k',
                            'image' => 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&h=400&fit=crop',
                            'link' => '/announcements/maersk-partnership',
                            'author' => [
                                'name' => 'Michael Chen',
                                'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop'
                            ],
                            'tags' => ['partnership', 'maersk', 'logistics', 'integration'],
                            'isFeatured' => false,
                            'isUrgent' => false
                        ],
                        [
                            'id' => 'ann-5',
                            'title' => 'SupplyChainPro Appoints Former Amazon Executive as Chief Technology Officer',
                            'excerpt' => 'Industry veteran Dr. Lisa Wang joins to lead technology strategy and product innovation at the company.',
                            'content' => 'Dr. Wang brings over 15 years of experience in supply chain technology and artificial intelligence from her previous role as VP of Supply Chain Technology at Amazon...',
                            'date' => '2024-02-20',
                            'category' => 'leadership',
                            'views' => '1.5k',
                            'image' => 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=400&fit=crop',
                            'link' => '/announcements/new-cto-appointment',
                            'author' => [
                                'name' => 'Sarah Johnson',
                                'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop'
                            ],
                            'tags' => ['executive', 'cto', 'amazon', 'leadership'],
                            'isFeatured' => false,
                            'isUrgent' => false
                        ],
                        [
                            'id' => 'ann-6',
                            'title' => 'SupplyChainPro Celebrates 10 Years of Innovation in Supply Chain Technology',
                            'excerpt' => 'Company marks decade milestone with record growth and expanded global presence.',
                            'content' => 'SupplyChainPro celebrates its 10th anniversary this month, marking a decade of innovation in supply chain technology...',
                            'date' => '2024-02-15',
                            'category' => 'milestone',
                            'views' => '2.9k',
                            'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop',
                            'link' => '/announcements/10-year-anniversary',
                            'author' => [
                                'name' => 'Lisa Wang',
                                'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop'
                            ],
                            'tags' => ['milestone', 'anniversary', 'growth'],
                            'isFeatured' => true,
                            'isUrgent' => false
                        ]
                    ],
                    'featuredAnnouncement' => null,
                    'showViewAll' => true,
                    'viewAllLink' => '/announcements',
                    'showNewsletter' => true,
                    'newsletter' => [
                        'title' => 'Get Announcements Delivered',
                        'description' => 'Subscribe to receive company announcements, product updates, and important news directly in your inbox.',
                        'disclaimer' => 'No spam, unsubscribe anytime. Get 1-2 emails per month.',
                        'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 430,
                'section_key' => 'companyAnnouncements',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => 'Company Updates',
                    'title' => [
                        'prefix' => 'Latest',
                        'highlight' => 'Announcements'
                    ],
                    'description' => 'Stay informed about the latest company news, product launches, awards, and important updates from SupplyChainPro.',
                    'heroImage' => 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&h=500&fit=crop',
                    'searchPlaceholder' => 'Search announcements by title, category, or keyword...',
                    'defaultViewMode' => 'grid',
                    'stats' => [
                        ['value' => '50+', 'label' => 'Announcements', 'icon' => 'megaphone', 'trend' => '+12%', 'trendUp' => true],
                        ['value' => '15+', 'label' => 'Product Launches', 'icon' => 'chip', 'trend' => '+3', 'trendUp' => true],
                        ['value' => '20+', 'label' => 'Awards Won', 'icon' => 'trophy', 'trend' => '+5', 'trendUp' => true],
                        ['value' => '10+', 'label' => 'Partnerships', 'icon' => 'users', 'trend' => '+2', 'trendUp' => true]
                    ],
                    'categories' => [
                        ['id' => 'all', 'label' => 'All Announcements', 'icon' => 'megaphone', 'count' => 6],
                        ['id' => 'product', 'label' => 'Product Launches', 'icon' => 'chip'],
                        ['id' => 'company', 'label' => 'Company News', 'icon' => 'building'],
                        ['id' => 'award', 'label' => 'Awards', 'icon' => 'trophy'],
                        ['id' => 'partnership', 'label' => 'Partnerships', 'icon' => 'users'],
                        ['id' => 'milestone', 'label' => 'Milestones', 'icon' => 'rocket']
                    ],
                    'announcements' => [
                        [
                            'id' => 'ann-1',
                            'title' => 'SupplyChainPro Raises $150M Series D to Transform Global Logistics',
                            'excerpt' => 'The new funding round will accelerate AI-powered supply chain optimization and expand operations across Asia-Pacific markets.',
                            'content' => 'SupplyChainPro, the leading AI-driven supply chain platform, today announced it has raised $150 million in Series D funding...',
                            'date' => '2024-03-15',
                            'category' => 'company',
                            'views' => '3.2k',
                            'likes' => 89,
                            'trendingScore' => 95,
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
                            'link' => '/announcements/series-d-funding',
                            'author' => [
                                'name' => 'Sarah Johnson',
                                'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop'
                            ],
                            'tags' => ['funding', 'ai', 'logistics'],
                            'isFeatured' => true,
                            'isUrgent' => false,
                            'type' => 'press-release',
                            'quote' => [
                                'text' => 'This investment validates our vision of transforming supply chain operations through artificial intelligence.',
                                'author' => 'Sarah Johnson, CEO'
                            ]
                        ],
                        [
                            'id' => 'ann-2',
                            'title' => 'SupplyChainPro Launches Next-Generation AI Inventory Optimization Engine',
                            'excerpt' => 'New predictive capabilities reduce stockouts by 40% while decreasing inventory carrying costs by an average of 25%.',
                            'content' => 'The new engine leverages advanced machine learning algorithms to provide real-time demand forecasting...',
                            'date' => '2024-03-10',
                            'category' => 'product',
                            'views' => '2.1k',
                            'likes' => 45,
                            'trendingScore' => 72,
                            'image' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
                            'link' => '/announcements/ai-inventory-engine',
                            'author' => [
                                'name' => 'David Kim',
                                'avatar' => 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop'
                            ],
                            'tags' => ['product-launch', 'ai', 'inventory'],
                            'isFeatured' => false,
                            'isUrgent' => false,
                            'type' => 'press-release'
                        ],
                        [
                            'id' => 'ann-3',
                            'title' => 'SupplyChainPro Named Leader in 2024 Gartner Magic Quadrant',
                            'excerpt' => 'The recognition highlights SupplyChainPro\'s vision, execution capabilities, and customer satisfaction.',
                            'content' => 'We believe this recognition validates our commitment to innovation and customer success in supply chain planning...',
                            'date' => '2024-03-05',
                            'category' => 'award',
                            'views' => '4.5k',
                            'likes' => 156,
                            'trendingScore' => 98,
                            'image' => 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&h=400&fit=crop',
                            'link' => '/announcements/gartner-leader',
                            'author' => [
                                'name' => 'Emily Rodriguez',
                                'avatar' => 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=80&h=80&fit=crop'
                            ],
                            'tags' => ['award', 'gartner', 'recognition'],
                            'isFeatured' => false,
                            'isUrgent' => false,
                            'type' => 'press-release',
                            'quote' => [
                                'text' => 'Being named a Leader validates our approach to supply chain planning.',
                                'author' => 'Emily Rodriguez, CMO'
                            ]
                        ],
                        [
                            'id' => 'ann-4',
                            'title' => 'SupplyChainPro Announces Strategic Partnership with Maersk',
                            'excerpt' => 'The partnership integrates SupplyChainPro\'s AI platform with Maersk\'s global shipping network.',
                            'content' => 'This strategic alliance will enable joint customers to optimize shipping routes, reduce carbon emissions...',
                            'date' => '2024-02-28',
                            'category' => 'partnership',
                            'views' => '1.8k',
                            'likes' => 67,
                            'trendingScore' => 65,
                            'image' => 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&h=400&fit=crop',
                            'link' => '/announcements/maersk-partnership',
                            'author' => [
                                'name' => 'Michael Chen',
                                'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop'
                            ],
                            'tags' => ['partnership', 'maersk', 'logistics'],
                            'isFeatured' => false,
                            'isUrgent' => false,
                            'type' => 'press-release'
                        ],
                        [
                            'id' => 'ann-5',
                            'title' => 'SupplyChainPro Appoints Former Amazon Executive as Chief Technology Officer',
                            'excerpt' => 'Industry veteran Dr. Lisa Wang joins to lead technology strategy and product innovation.',
                            'content' => 'Dr. Wang brings over 15 years of experience in supply chain technology and artificial intelligence...',
                            'date' => '2024-02-20',
                            'category' => 'company',
                            'views' => '1.5k',
                            'likes' => 34,
                            'trendingScore' => 58,
                            'image' => 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=400&fit=crop',
                            'link' => '/announcements/new-cto-appointment',
                            'author' => [
                                'name' => 'Sarah Johnson',
                                'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop'
                            ],
                            'tags' => ['executive', 'cto', 'leadership'],
                            'isFeatured' => false,
                            'isUrgent' => false,
                            'type' => 'press-release'
                        ],
                        [
                            'id' => 'ann-6',
                            'title' => 'SupplyChainPro Celebrates 10 Years of Innovation',
                            'excerpt' => 'Company marks decade milestone with record growth and expanded global presence.',
                            'content' => 'SupplyChainPro celebrates its 10th anniversary this month, marking a decade of innovation...',
                            'date' => '2024-02-15',
                            'category' => 'milestone',
                            'views' => '2.9k',
                            'likes' => 112,
                            'trendingScore' => 82,
                            'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop',
                            'link' => '/announcements/10-year-anniversary',
                            'author' => [
                                'name' => 'Lisa Wang',
                                'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop'
                            ],
                            'tags' => ['milestone', 'anniversary', 'growth'],
                            'isFeatured' => true,
                            'isUrgent' => false,
                            'type' => 'press-release',
                            'quote' => [
                                'text' => 'This milestone reflects our team\'s dedication to transforming supply chain operations.',
                                'author' => 'Lisa Wang, CTO'
                            ]
                        ]
                    ],
                    'featuredAnnouncement' => null,
                    'showNewsletter' => true,
                    'newsletter' => [
                        'title' => 'Get Announcements Delivered',
                        'description' => 'Subscribe to receive company announcements, product updates, and important news directly in your inbox.',
                        'disclaimer' => 'No spam, unsubscribe anytime. Get 1-2 emails per month.',
                        'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 431,
                'section_key' => 'companyAnnouncements',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => 'Announcements Hub',
                    'title' => [
                        'prefix' => 'Company',
                        'highlight' => 'Announcements'
                    ],
                    'description' => 'Stay informed about the latest company news, product launches, awards, and important updates from SupplyChainPro.',
                    'heroImage' => 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&h=500&fit=crop',
                    'autoPlayCarousel' => true,
                    'stats' => [
                        ['value' => '50+', 'label' => 'Announcements', 'icon' => 'megaphone'],
                        ['value' => '15+', 'label' => 'Product Launches', 'icon' => 'chip'],
                        ['value' => '20+', 'label' => 'Awards Won', 'icon' => 'trophy'],
                        ['value' => '10+', 'label' => 'Partnerships', 'icon' => 'users']
                    ],
                    'categories' => [
                        ['id' => 'all', 'label' => 'All Announcements', 'icon' => 'megaphone'],
                        ['id' => 'featured', 'label' => 'Featured', 'icon' => 'star'],
                        ['id' => 'trending', 'label' => 'Trending', 'icon' => 'fire'],
                        ['id' => 'recent', 'label' => 'Recent', 'icon' => 'clock']
                    ],
                    'featuredAnnouncements' => [
                        [
                            'id' => 'featured-1',
                            'title' => 'SupplyChainPro Raises $150M Series D to Transform Global Logistics',
                            'excerpt' => 'The new funding round will accelerate AI-powered supply chain optimization and expand operations across Asia-Pacific markets.',
                            'date' => '2024-03-15',
                            'category' => 'company',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop',
                            'link' => '/announcements/series-d-funding',
                            'isUrgent' => false
                        ],
                        [
                            'id' => 'featured-2',
                            'title' => 'SupplyChainPro Launches Next-Generation AI Inventory Optimization Engine',
                            'excerpt' => 'New predictive capabilities reduce stockouts by 40% while decreasing inventory carrying costs by an average of 25%.',
                            'date' => '2024-03-10',
                            'category' => 'product',
                            'image' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=600&fit=crop',
                            'link' => '/announcements/ai-inventory-engine',
                            'isUrgent' => false
                        ]
                    ],
                    'announcements' => [
                        [
                            'id' => 'ann-1',
                            'title' => 'SupplyChainPro Raises $150M Series D to Transform Global Logistics',
                            'excerpt' => 'The new funding round will accelerate AI-powered supply chain optimization and expand operations across Asia-Pacific markets.',
                            'content' => 'SupplyChainPro, the leading AI-driven supply chain platform, today announced it has raised $150 million in Series D funding...',
                            'date' => '2024-03-15',
                            'category' => 'company',
                            'views' => '3.2k',
                            'likes' => 89,
                            'trendingScore' => 95,
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
                            'link' => '/announcements/series-d-funding',
                            'author' => [
                                'name' => 'Sarah Johnson',
                                'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop'
                            ],
                            'tags' => ['funding', 'ai', 'logistics'],
                            'isFeatured' => true,
                            'isUrgent' => false,
                            'quote' => [
                                'text' => 'This investment validates our vision of transforming supply chain operations through artificial intelligence.',
                                'author' => 'Sarah Johnson, CEO'
                            ]
                        ],
                        [
                            'id' => 'ann-2',
                            'title' => 'SupplyChainPro Launches Next-Generation AI Inventory Optimization Engine',
                            'excerpt' => 'New predictive capabilities reduce stockouts by 40% while decreasing inventory carrying costs by an average of 25%.',
                            'content' => 'The new engine leverages advanced machine learning algorithms to provide real-time demand forecasting...',
                            'date' => '2024-03-10',
                            'category' => 'product',
                            'views' => '2.1k',
                            'likes' => 45,
                            'trendingScore' => 72,
                            'image' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
                            'link' => '/announcements/ai-inventory-engine',
                            'author' => [
                                'name' => 'David Kim',
                                'avatar' => 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop'
                            ],
                            'tags' => ['product-launch', 'ai', 'inventory'],
                            'isFeatured' => false,
                            'isUrgent' => false
                        ],
                        [
                            'id' => 'ann-3',
                            'title' => 'SupplyChainPro Named Leader in 2024 Gartner Magic Quadrant',
                            'excerpt' => 'The recognition highlights SupplyChainPro\'s vision, execution capabilities, and customer satisfaction.',
                            'content' => 'We believe this recognition validates our commitment to innovation and customer success...',
                            'date' => '2024-03-05',
                            'category' => 'award',
                            'views' => '4.5k',
                            'likes' => 156,
                            'trendingScore' => 98,
                            'image' => 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&h=400&fit=crop',
                            'link' => '/announcements/gartner-leader',
                            'author' => [
                                'name' => 'Emily Rodriguez',
                                'avatar' => 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=80&h=80&fit=crop'
                            ],
                            'tags' => ['award', 'gartner', 'recognition'],
                            'isFeatured' => false,
                            'isUrgent' => false,
                            'quote' => [
                                'text' => 'Being named a Leader validates our approach to supply chain planning.',
                                'author' => 'Emily Rodriguez, CMO'
                            ]
                        ],
                        [
                            'id' => 'ann-4',
                            'title' => 'SupplyChainPro Announces Strategic Partnership with Maersk',
                            'excerpt' => 'The partnership integrates SupplyChainPro\'s AI platform with Maersk\'s global shipping network.',
                            'content' => 'This strategic alliance will enable joint customers to optimize shipping routes, reduce carbon emissions...',
                            'date' => '2024-02-28',
                            'category' => 'partnership',
                            'views' => '1.8k',
                            'likes' => 67,
                            'trendingScore' => 65,
                            'image' => 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&h=400&fit=crop',
                            'link' => '/announcements/maersk-partnership',
                            'author' => [
                                'name' => 'Michael Chen',
                                'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop'
                            ],
                            'tags' => ['partnership', 'maersk', 'logistics'],
                            'isFeatured' => false,
                            'isUrgent' => false
                        ],
                        [
                            'id' => 'ann-5',
                            'title' => 'SupplyChainPro Appoints Former Amazon Executive as Chief Technology Officer',
                            'excerpt' => 'Industry veteran Dr. Lisa Wang joins to lead technology strategy and product innovation.',
                            'content' => 'Dr. Wang brings over 15 years of experience in supply chain technology and artificial intelligence...',
                            'date' => '2024-02-20',
                            'category' => 'leadership',
                            'views' => '1.5k',
                            'likes' => 34,
                            'trendingScore' => 58,
                            'image' => 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=400&fit=crop',
                            'link' => '/announcements/new-cto-appointment',
                            'author' => [
                                'name' => 'Sarah Johnson',
                                'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop'
                            ],
                            'tags' => ['executive', 'cto', 'leadership'],
                            'isFeatured' => false,
                            'isUrgent' => true
                        ],
                        [
                            'id' => 'ann-6',
                            'title' => 'SupplyChainPro Celebrates 10 Years of Innovation',
                            'excerpt' => 'Company marks decade milestone with record growth and expanded global presence.',
                            'content' => 'SupplyChainPro celebrates its 10th anniversary this month, marking a decade of innovation...',
                            'date' => '2024-02-15',
                            'category' => 'milestone',
                            'views' => '2.9k',
                            'likes' => 112,
                            'trendingScore' => 82,
                            'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop',
                            'link' => '/announcements/10-year-anniversary',
                            'author' => [
                                'name' => 'Lisa Wang',
                                'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop'
                            ],
                            'tags' => ['milestone', 'anniversary', 'growth'],
                            'isFeatured' => true,
                            'isUrgent' => false,
                            'quote' => [
                                'text' => 'This milestone reflects our team\'s dedication to transforming supply chain operations.',
                                'author' => 'Lisa Wang, CTO'
                            ]
                        ]
                    ],
                    'showMediaResources' => true,
                    'showMediaContact' => true,
                    'mediaContact' => [
                        'name' => 'Sarah Johnson',
                        'title' => 'Head of Communications',
                        'email' => 'media@supplychainpro.com',
                        'phone' => '+1 (555) 123-4567',
                        'image' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
                    ],
                    'showNewsletter' => true,
                    'newsletter' => [
                        'title' => 'Subscribe to Announcements',
                        'description' => 'Get the latest company announcements delivered to your inbox.',
                        'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 432,
                'section_key' => 'companyAnnouncements',
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
