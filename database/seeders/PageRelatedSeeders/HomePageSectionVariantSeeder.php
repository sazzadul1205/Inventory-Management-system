<?php

namespace Database\Seeders\PageRelatedSeeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class HomePageSectionVariantSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Truncate the table to remove existing content
        DB::table('section_variants')->truncate();

        // Insert fresh data
        DB::table('section_variants')->insert([

            // Hero Section
            [
                'id' => 1,
                'section_key' => 'hero',
                'variant' => 'variant1',
                'config' => json_encode([
                    'trustBadge' => [
                        'showPulse' => true,
                        'text' => 'Trusted by 5000+ Businesses'
                    ],
                    'heading' => [
                        'prefix' => 'Smart',
                        'highlightedText' => 'Inventory & Logistics',
                        'suffix' => 'Management'
                    ],
                    'description' => 'Streamline your supply chain with real-time tracking, automated inventory management, and intelligent logistics solutions.',
                    'features' => [
                        ['id' => 1, 'text' => 'Real-time Tracking', 'icon' => 'HiTruck'],
                        ['id' => 2, 'text' => 'Warehouse Optimization', 'icon' => 'FaWarehouse'],
                        ['id' => 3, 'text' => 'Automated Reordering', 'icon' => 'HiRefresh'],
                        ['id' => 4, 'text' => 'Analytics Dashboard', 'icon' => 'HiChartBar']
                    ],
                    'buttons' => [
                        'primary' => [
                            'text' => 'Get Started',
                            'url' => '/contact'
                        ],
                        'secondary' => [
                            'text' => 'Watch Demo',
                            'url' => '/demo'
                        ]
                    ],
                    'trustIndicators' => [
                        'stats' => [
                            'number' => '10,000+',
                            'text' => 'Active Users Worldwide'
                        ]
                    ],
                    'image' => [
                        'src' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop',
                        'alt' => 'Warehouse management dashboard'
                    ],
                    'floatingCards' => [
                        'stats' => [
                            'label' => 'Live Shipments',
                            'value' => '2,847 Active'
                        ],
                        'rating' => '4.9/5'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 2,
                'section_key' => 'hero',
                'variant' => 'variant2',
                'config' => json_encode([
                    'trustBadge' => [
                        'showPulse' => true,
                        'text' => 'Trusted by 5000+ Businesses'
                    ],
                    'heading' => [
                        'prefix' => 'Smart',
                        'highlightedText' => 'Inventory & Logistics',
                        'suffix' => 'Management'
                    ],
                    'description' => 'Streamline your supply chain with real-time tracking, automated inventory management, and intelligent logistics solutions.',
                    'features' => [
                        ['id' => 1, 'text' => 'Real-time Tracking', 'icon' => 'HiTruck'],
                        ['id' => 2, 'text' => 'Warehouse Optimization', 'icon' => 'FaWarehouse'],
                        ['id' => 3, 'text' => 'Automated Reordering', 'icon' => 'HiRefresh'],
                        ['id' => 4, 'text' => 'Analytics Dashboard', 'icon' => 'HiChartBar']
                    ],
                    'buttons' => [
                        'primary' => [
                            'text' => 'Get Started',
                            'url' => '/contact'
                        ],
                        'secondary' => [
                            'text' => 'Watch Demo',
                            'url' => '/demo'
                        ]
                    ],
                    'trustIndicators' => [
                        'stats' => [
                            'number' => '10,000+',
                            'text' => 'Active Users Worldwide'
                        ]
                    ],
                    'image' => [
                        'src' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop',
                        'alt' => 'Warehouse management dashboard'
                    ],
                    'floatingCards' => [
                        'stats' => [
                            'label' => 'Live Shipments',
                            'value' => '2,847 Active'
                        ],
                        'rating' => '4.9/5'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 3,
                'section_key' => 'hero',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'showPulse' => true,
                        'text' => 'Trusted by 5000+ Companies Worldwide'
                    ],
                    'heading' => [
                        'prefix' => 'Smart',
                        'highlightedText' => 'Logistics Solutions',
                        'suffix' => 'for Modern Business'
                    ],
                    'description' => 'Streamline your supply chain with our intelligent platform. Real-time tracking, automated operations, and data-driven insights.',
                    'buttons' => [
                        'primary' => [
                            'text' => 'Start Free Trial',
                            'url' => '/signup'
                        ],
                        'secondary' => [
                            'text' => 'View Pricing',
                            'url' => '/pricing'
                        ]
                    ],
                    'stats' => [
                        ['id' => 1, 'value' => '5000+', 'label' => 'Happy Clients'],
                        ['id' => 2, 'value' => '50M+', 'label' => 'Shipments Delivered'],
                        ['id' => 3, 'value' => '99.9%', 'label' => 'Uptime Guarantee'],
                        ['id' => 4, 'value' => '24/7', 'label' => 'Support Available']
                    ],
                    'features' => [
                        ['id' => 1, 'text' => 'Real-time Tracking', 'icon' => 'truck'],
                        ['id' => 2, 'text' => 'Fast Delivery', 'icon' => 'clock'],
                        ['id' => 3, 'text' => 'Global Coverage', 'icon' => 'globe']
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 4,
                'section_key' => 'hero',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Services Section
            [
                'id' => 5,
                'section_key' => 'services',
                'variant' => 'variant1',
                'config' => json_encode([
                    'headerImage' => [
                        'show' => true,
                        'src' => 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=1200&h=400&fit=crop',
                        'alt' => 'Modern warehouse with automated systems',
                        'title' => 'Our Services',
                        'subtitle' => 'Comprehensive logistics solutions tailored to your business needs'
                    ],
                    'badge' => [
                        'text' => 'WHAT WE OFFER'
                    ],
                    'heading' => [
                        'main' => 'End-to-End Supply Chain Solutions'
                    ],
                    'description' => 'From warehousing to last-mile delivery, we provide complete logistics solutions that scale with your business.',
                    'services' => [
                        [
                            'id' => 1,
                            'title' => 'Smart Warehousing',
                            'description' => 'State-of-the-art warehousing with real-time inventory management and automated picking systems.',
                            'icon' => 'cube',
                            'features' => ['Real-time inventory tracking', 'Automated picking & packing', 'Climate-controlled storage', 'Barcode scanning'],
                            'image' => 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=600&h=400&fit=crop',
                            'link' => '/services/warehousing',
                            'linkText' => 'Explore Warehousing',
                            'stats' => [
                                ['value' => '500K+', 'label' => 'Sq Ft Space'],
                                ['value' => '99.9%', 'label' => 'Accuracy']
                            ]
                        ],
                        [
                            'id' => 2,
                            'title' => 'Transportation',
                            'description' => 'Efficient fleet management and route optimization for faster, cost-effective deliveries.',
                            'icon' => 'truck',
                            'features' => ['Route optimization', 'Real-time tracking', 'Temperature-controlled transport', 'Same-day delivery'],
                            'image' => 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&h=400&fit=crop',
                            'link' => '/services/transportation',
                            'linkText' => 'Explore Transportation',
                            'stats' => [
                                ['value' => '50K+', 'label' => 'Daily Shipments'],
                                ['value' => '100%', 'label' => 'Coverage']
                            ]
                        ],
                        [
                            'id' => 3,
                            'title' => 'Supply Chain Consulting',
                            'description' => 'Expert guidance to streamline operations, reduce costs, and improve efficiency.',
                            'icon' => 'chartBar',
                            'features' => ['Process optimization', 'Cost reduction strategies', 'Performance metrics', 'Inventory optimization'],
                            'image' => 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
                            'link' => '/services/consulting',
                            'linkText' => 'Explore Consulting',
                            'stats' => [
                                ['value' => '30%', 'label' => 'Cost Savings'],
                                ['value' => '500+', 'label' => 'Projects']
                            ]
                        ]
                    ],
                    'bottomCta' => [
                        'show' => true,
                        'title' => 'Ready to Optimize Your Supply Chain?',
                        'description' => 'Join thousands of businesses that trust us for their logistics needs.',
                        'buttonText' => 'Get Started Today',
                        'url' => '/contact',
                        'ariaLabel' => 'Get started with our services'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 6,
                'section_key' => 'services',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'OUR SERVICES'
                    ],
                    'heading' => [
                        'line1' => 'Comprehensive',
                        'highlighted' => 'Logistics Solutions'
                    ],
                    'description' => 'End-to-end supply chain management services designed to optimize your operations and drive growth.',
                    'categories' => [
                        ['id' => 'inventory', 'name' => 'Inventory'],
                        ['id' => 'transport', 'name' => 'Transport'],
                        ['id' => 'warehouse', 'name' => 'Warehouse'],
                        ['id' => 'analytics', 'name' => 'Analytics']
                    ],
                    'services' => [
                        [
                            'id' => 1,
                            'title' => 'Smart Inventory Management',
                            'description' => 'Real-time tracking and automated replenishment to optimize stock levels.',
                            'icon' => 'cube',
                            'category' => 'inventory',
                            'accentColor' => 'bg-linear-to-r from-blue-500 to-cyan-500',
                            'iconBg' => 'bg-blue-100 dark:bg-blue-900/30',
                            'features' => ['Real-time tracking', 'Auto reordering', 'Multi-location sync'],
                            'link' => '/services/inventory',
                            'deliveryTime' => 'Instant Setup',
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 2,
                            'title' => 'Fleet Management',
                            'description' => 'Optimize routes, track vehicles, and reduce fuel costs.',
                            'icon' => 'truck',
                            'category' => 'transport',
                            'accentColor' => 'bg-linear-to-r from-green-500 to-emerald-500',
                            'iconBg' => 'bg-green-100 dark:bg-green-900/30',
                            'features' => ['Route optimization', 'Live tracking', 'Fuel monitoring'],
                            'link' => '/services/fleet',
                            'deliveryTime' => '24/7 Monitoring',
                            'image' => 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 3,
                            'title' => 'Warehouse Automation',
                            'description' => 'Automate picking, packing, and inventory control.',
                            'icon' => 'cog',
                            'category' => 'warehouse',
                            'accentColor' => 'bg-linear-to-r from-purple-500 to-pink-500',
                            'iconBg' => 'bg-purple-100 dark:bg-purple-900/30',
                            'features' => ['Automated picking', 'Barcode scanning', 'Space optimization'],
                            'link' => '/services/warehouse',
                            'deliveryTime' => 'Quick Deployment',
                            'image' => 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 4,
                            'title' => 'Analytics Dashboard',
                            'description' => 'Data-driven insights for better decision making.',
                            'icon' => 'chartBar',
                            'category' => 'analytics',
                            'accentColor' => 'bg-linear-to-r from-orange-500 to-red-500',
                            'iconBg' => 'bg-orange-100 dark:bg-orange-900/30',
                            'features' => ['Custom reports', 'Predictive analytics', 'KPI tracking'],
                            'link' => '/services/analytics',
                            'deliveryTime' => 'Real-time Data',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 5,
                            'title' => 'Supply Chain Visibility',
                            'description' => 'End-to-end visibility across your entire supply chain.',
                            'icon' => 'globe',
                            'category' => 'analytics',
                            'accentColor' => 'bg-linear-to-r from-teal-500 to-cyan-500',
                            'iconBg' => 'bg-teal-100 dark:bg-teal-900/30',
                            'features' => ['End-to-end tracking', 'Supplier integration', 'Risk monitoring'],
                            'link' => '/services/visibility',
                            'deliveryTime' => 'Global Coverage',
                            'image' => 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 6,
                            'title' => 'Returns Management',
                            'description' => 'Streamlined returns processing and restocking.',
                            'icon' => 'refresh',
                            'category' => 'inventory',
                            'accentColor' => 'bg-linear-to-r from-yellow-500 to-amber-500',
                            'iconBg' => 'bg-yellow-100 dark:bg-yellow-900/30',
                            'features' => ['Automated returns', 'Quality control', 'Fast restocking'],
                            'link' => '/services/returns',
                            'deliveryTime' => 'Easy Process',
                            'image' => 'https://images.unsplash.com/photo-1604928141064-207cea6f571f?w=600&h=400&fit=crop'
                        ]
                    ],
                    'bottomCards' => [
                        [
                            'title' => '24/7 Support',
                            'description' => 'Round-the-clock customer support for all your logistics needs.',
                            'icon' => 'clock',
                            'iconBg' => 'bg-blue-100 dark:bg-blue-900/30'
                        ],
                        [
                            'title' => '100% Uptime',
                            'description' => 'Reliable platform with guaranteed 99.9% uptime SLA.',
                            'icon' => 'shieldCheck',
                            'iconBg' => 'bg-green-100 dark:bg-green-900/30'
                        ],
                        [
                            'title' => 'Data Security',
                            'description' => 'Enterprise-grade security with ISO certification.',
                            'icon' => 'shieldCheck',
                            'iconBg' => 'bg-purple-100 dark:bg-purple-900/30'
                        ]
                    ],
                    'trustIndicators' => [
                        'show' => true,
                        'items' => [
                            ['value' => '5000+', 'label' => 'Happy Clients'],
                            ['value' => '50M+', 'label' => 'Shipments'],
                            ['value' => '99.9%', 'label' => 'Uptime'],
                            ['value' => '24/7', 'label' => 'Support']
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 7,
                'section_key' => 'services',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'OUR SERVICES'
                    ],
                    'heading' => [
                        'line1' => 'Comprehensive',
                        'highlighted' => 'Logistics Solutions'
                    ],
                    'description' => 'End-to-end supply chain management services designed to optimize your operations and drive growth.',
                    'categories' => [
                        ['id' => 'inventory', 'name' => 'Inventory'],
                        ['id' => 'transport', 'name' => 'Transport'],
                        ['id' => 'warehouse', 'name' => 'Warehouse'],
                        ['id' => 'analytics', 'name' => 'Analytics']
                    ],
                    'services' => [
                        [
                            'id' => 1,
                            'title' => 'Smart Inventory Management',
                            'description' => 'Real-time tracking and automated replenishment to optimize stock levels.',
                            'icon' => 'cube',
                            'category' => 'inventory',
                            'accentColor' => 'bg-linear-to-r from-blue-500 to-cyan-500',
                            'iconBg' => 'bg-blue-100 dark:bg-blue-900/30',
                            'features' => ['Real-time tracking', 'Auto reordering', 'Multi-location sync'],
                            'link' => '/services/inventory',
                            'deliveryTime' => 'Instant Setup',
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 2,
                            'title' => 'Fleet Management',
                            'description' => 'Optimize routes, track vehicles, and reduce fuel costs.',
                            'icon' => 'truck',
                            'category' => 'transport',
                            'accentColor' => 'bg-linear-to-r from-green-500 to-emerald-500',
                            'iconBg' => 'bg-green-100 dark:bg-green-900/30',
                            'features' => ['Route optimization', 'Live tracking', 'Fuel monitoring'],
                            'link' => '/services/fleet',
                            'deliveryTime' => '24/7 Monitoring',
                            'image' => 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 3,
                            'title' => 'Warehouse Automation',
                            'description' => 'Automate picking, packing, and inventory control.',
                            'icon' => 'cog',
                            'category' => 'warehouse',
                            'accentColor' => 'bg-linear-to-r from-purple-500 to-pink-500',
                            'iconBg' => 'bg-purple-100 dark:bg-purple-900/30',
                            'features' => ['Automated picking', 'Barcode scanning', 'Space optimization'],
                            'link' => '/services/warehouse',
                            'deliveryTime' => 'Quick Deployment',
                            'image' => 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 4,
                            'title' => 'Analytics Dashboard',
                            'description' => 'Data-driven insights for better decision making.',
                            'icon' => 'chartBar',
                            'category' => 'analytics',
                            'accentColor' => 'bg-linear-to-r from-orange-500 to-red-500',
                            'iconBg' => 'bg-orange-100 dark:bg-orange-900/30',
                            'features' => ['Custom reports', 'Predictive analytics', 'KPI tracking'],
                            'link' => '/services/analytics',
                            'deliveryTime' => 'Real-time Data',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 5,
                            'title' => 'Supply Chain Visibility',
                            'description' => 'End-to-end visibility across your entire supply chain.',
                            'icon' => 'globe',
                            'category' => 'analytics',
                            'accentColor' => 'bg-linear-to-r from-teal-500 to-cyan-500',
                            'iconBg' => 'bg-teal-100 dark:bg-teal-900/30',
                            'features' => ['End-to-end tracking', 'Supplier integration', 'Risk monitoring'],
                            'link' => '/services/visibility',
                            'deliveryTime' => 'Global Coverage',
                            'image' => 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 6,
                            'title' => 'Returns Management',
                            'description' => 'Streamlined returns processing and restocking.',
                            'icon' => 'refresh',
                            'category' => 'inventory',
                            'accentColor' => 'bg-linear-to-r from-yellow-500 to-amber-500',
                            'iconBg' => 'bg-yellow-100 dark:bg-yellow-900/30',
                            'features' => ['Automated returns', 'Quality control', 'Fast restocking'],
                            'link' => '/services/returns',
                            'deliveryTime' => 'Easy Process',
                            'image' => 'https://images.unsplash.com/photo-1604928141064-207cea6f571f?w=600&h=400&fit=crop'
                        ]
                    ],
                    'bottomCards' => [
                        [
                            'title' => '24/7 Support',
                            'description' => 'Round-the-clock customer support for all your logistics needs.',
                            'icon' => 'clock',
                            'iconBg' => 'bg-blue-100 dark:bg-blue-900/30'
                        ],
                        [
                            'title' => '100% Uptime',
                            'description' => 'Reliable platform with guaranteed 99.9% uptime SLA.',
                            'icon' => 'shieldCheck',
                            'iconBg' => 'bg-green-100 dark:bg-green-900/30'
                        ],
                        [
                            'title' => 'Data Security',
                            'description' => 'Enterprise-grade security with ISO certification.',
                            'icon' => 'shieldCheck',
                            'iconBg' => 'bg-purple-100 dark:bg-purple-900/30'
                        ]
                    ],
                    'trustIndicators' => [
                        'show' => true,
                        'items' => [
                            ['value' => '5000+', 'label' => 'Happy Clients'],
                            ['value' => '50M+', 'label' => 'Shipments'],
                            ['value' => '99.9%', 'label' => 'Uptime'],
                            ['value' => '24/7', 'label' => 'Support']
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 8,
                'section_key' => 'services',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Services Section
            [
                'id' => 9,
                'section_key' => 'features',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => [
                        'show' => true,
                        'showPulse' => true,
                        'text' => 'WHY CHOOSE US'
                    ],
                    'heading' => [
                        'prefix' => 'Powerful Features for',
                        'highlightedText' => 'Modern Logistics',
                        'suffix' => ''
                    ],
                    'description' => 'Everything you need to manage and optimize your supply chain in one intelligent platform.',
                    'features' => [
                        [
                            'id' => 1,
                            'title' => 'Real-time Tracking',
                            'description' => 'Monitor your inventory and shipments in real-time with live updates and instant alerts.',
                            'icon' => 'clock',
                            'stat' => [
                                'value' => '99.9%',
                                'label' => 'Accuracy'
                            ],
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 2,
                            'title' => 'Advanced Analytics',
                            'description' => 'Data-driven insights and predictive analytics to optimize your supply chain decisions.',
                            'icon' => 'chart',
                            'stat' => [
                                'value' => '40%',
                                'label' => 'Faster Decisions'
                            ],
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 3,
                            'title' => 'Enterprise Security',
                            'description' => 'Bank-level encryption and security protocols to protect your business data.',
                            'icon' => 'shield',
                            'stat' => [
                                'value' => '256-bit',
                                'label' => 'Encryption'
                            ],
                            'image' => 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 4,
                            'title' => 'Smart Automation',
                            'description' => 'Automate routine tasks and workflows to save time and reduce human errors.',
                            'icon' => 'cog',
                            'stat' => [
                                'value' => '75%',
                                'label' => 'Time Saved'
                            ],
                            'image' => 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 5,
                            'title' => 'Global Coverage',
                            'description' => 'Connect with carriers and warehouses across 50+ countries worldwide.',
                            'icon' => 'globe',
                            'stat' => [
                                'value' => '50+',
                                'label' => 'Countries'
                            ],
                            'image' => 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 6,
                            'title' => 'Fleet Management',
                            'description' => 'Optimize routes, track vehicles, and reduce fuel costs with smart algorithms.',
                            'icon' => 'truck',
                            'stat' => [
                                'value' => '30%',
                                'label' => 'Fuel Savings'
                            ],
                            'image' => 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 7,
                            'title' => 'Cost Optimization',
                            'description' => 'Identify cost-saving opportunities and optimize your logistics spending.',
                            'icon' => 'dollar',
                            'stat' => [
                                'value' => '25%',
                                'label' => 'Cost Reduction'
                            ],
                            'image' => 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 8,
                            'title' => '24/7 Support',
                            'description' => 'Round-the-clock customer support with dedicated account managers.',
                            'icon' => 'users',
                            'stat' => [
                                'value' => '24/7',
                                'label' => 'Support'
                            ],
                            'image' => 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop'
                        ]
                    ],
                    'bottomCta' => [
                        'show' => true,
                        'text' => 'Explore All Features',
                        'url' => '/features',
                        'ariaLabel' => 'View all platform features'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 10,
                'section_key' => 'features',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'PLATFORM FEATURES'
                    ],
                    'heading' => [
                        'line1' => 'Everything You Need to',
                        'highlighted' => 'Scale Your Logistics'
                    ],
                    'description' => 'Powerful features designed to streamline your supply chain and boost operational efficiency.',
                    'categories' => [
                        ['id' => 'analytics', 'name' => 'Analytics'],
                        ['id' => 'security', 'name' => 'Security'],
                        ['id' => 'automation', 'name' => 'Automation']
                    ],
                    'features' => [
                        [
                            'id' => 1,
                            'title' => 'Real-time Analytics Dashboard',
                            'description' => 'Get instant insights into your supply chain performance with interactive dashboards and reports.',
                            'category' => 'analytics',
                            'categoryName' => 'Analytics',
                            'categoryIcon' => 'chart',
                            'icon' => 'chart',
                            'bullets' => [
                                'Live inventory tracking',
                                'Predictive demand forecasting',
                                'Custom KPI dashboards',
                                'Automated report generation'
                            ],
                            'metrics' => [
                                ['value' => '99.9%', 'label' => 'Data Accuracy'],
                                ['value' => 'Real-time', 'label' => 'Updates']
                            ],
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
                            'link' => '/features/analytics',
                            'floatingCard' => [
                                'label' => 'Active Shipments',
                                'value' => '2,847',
                                'icon' => 'truck',
                                'iconBg' => 'bg-blue-600'
                            ]
                        ],
                        [
                            'id' => 2,
                            'title' => 'Enterprise Security Suite',
                            'description' => 'Bank-level security to protect your sensitive business data and ensure compliance.',
                            'category' => 'security',
                            'categoryName' => 'Security',
                            'categoryIcon' => 'lock',
                            'icon' => 'lock',
                            'bullets' => [
                                '256-bit AES encryption',
                                'Multi-factor authentication',
                                'GDPR & SOC2 compliant',
                                'Automated backups'
                            ],
                            'metrics' => [
                                ['value' => '256-bit', 'label' => 'Encryption'],
                                ['value' => '99.99%', 'label' => 'Uptime']
                            ],
                            'image' => 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop',
                            'link' => '/features/security',
                            'floatingCard' => [
                                'label' => 'Security Score',
                                'value' => 'A+ Rated',
                                'icon' => 'shield',
                                'iconBg' => 'bg-green-600'
                            ]
                        ],
                        [
                            'id' => 3,
                            'title' => 'Smart Automation Tools',
                            'description' => 'Automate repetitive tasks and workflows to save time and reduce manual errors.',
                            'category' => 'automation',
                            'categoryName' => 'Automation',
                            'categoryIcon' => 'lightning',
                            'icon' => 'lightning',
                            'bullets' => [
                                'Automated reordering',
                                'Smart route optimization',
                                'Workflow automation',
                                'Email & SMS alerts'
                            ],
                            'metrics' => [
                                ['value' => '75%', 'label' => 'Time Saved'],
                                ['value' => 'Zero', 'label' => 'Manual Errors']
                            ],
                            'image' => 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&h=400&fit=crop',
                            'link' => '/features/automation',
                            'floatingCard' => [
                                'label' => 'Automation Rate',
                                'value' => '94%',
                                'icon' => 'lightning',
                                'iconBg' => 'bg-yellow-600'
                            ]
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 11,
                'section_key' => 'features',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'WHY CHOOSE US',
                        'icon' => 'star'
                    ],
                    'heading' => [
                        'prefix' => 'The',
                        'highlightedText' => 'Smartest Way',
                        'suffix' => 'to Manage Logistics'
                    ],
                    'description' => 'Discover why thousands of businesses trust our platform for their supply chain needs.',
                    'features' => [
                        [
                            'id' => 1,
                            'title' => 'Real-time Tracking',
                            'description' => 'Track your shipments and inventory in real-time with live updates and instant notifications.',
                            'icon' => 'globe',
                            'accentColor' => 'bg-gradient-to-r from-blue-500 to-cyan-500',
                            'iconBg' => 'bg-blue-100 dark:bg-blue-900/30',
                            'tags' => [
                                ['text' => 'Live Updates', 'bgColor' => 'bg-blue-100 dark:bg-blue-900/30', 'textColor' => 'text-blue-700 dark:text-blue-300'],
                                ['text' => 'GPS Enabled', 'bgColor' => 'bg-cyan-100 dark:bg-cyan-900/30', 'textColor' => 'text-cyan-700 dark:text-cyan-300']
                            ],
                            'stats' => [
                                ['value' => '99.9%', 'label' => 'Accuracy'],
                                ['value' => 'Real-time', 'label' => 'Updates']
                            ],
                            'link' => '/features/tracking',
                            'linkColor' => 'text-blue-600 dark:text-blue-400',
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 2,
                            'title' => 'Smart Automation',
                            'description' => 'Automate repetitive tasks and workflows to save time and reduce manual errors.',
                            'icon' => 'lightning',
                            'accentColor' => 'bg-gradient-to-r from-purple-500 to-pink-500',
                            'iconBg' => 'bg-purple-100 dark:bg-purple-900/30',
                            'tags' => [
                                ['text' => 'AI Powered', 'bgColor' => 'bg-purple-100 dark:bg-purple-900/30', 'textColor' => 'text-purple-700 dark:text-purple-300'],
                                ['text' => 'Smart Rules', 'bgColor' => 'bg-pink-100 dark:bg-pink-900/30', 'textColor' => 'text-pink-700 dark:text-pink-300']
                            ],
                            'stats' => [
                                ['value' => '75%', 'label' => 'Time Saved'],
                                ['value' => 'Zero', 'label' => 'Errors']
                            ],
                            'link' => '/features/automation',
                            'linkColor' => 'text-purple-600 dark:text-purple-400',
                            'image' => 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 3,
                            'title' => 'Enterprise Security',
                            'description' => 'Bank-level encryption and security protocols to protect your sensitive business data.',
                            'icon' => 'shield',
                            'accentColor' => 'bg-gradient-to-r from-green-500 to-emerald-500',
                            'iconBg' => 'bg-green-100 dark:bg-green-900/30',
                            'tags' => [
                                ['text' => '256-bit', 'bgColor' => 'bg-green-100 dark:bg-green-900/30', 'textColor' => 'text-green-700 dark:text-green-300'],
                                ['text' => 'SOC2', 'bgColor' => 'bg-emerald-100 dark:bg-emerald-900/30', 'textColor' => 'text-emerald-700 dark:text-emerald-300']
                            ],
                            'stats' => [
                                ['value' => '99.99%', 'label' => 'Uptime'],
                                ['value' => '24/7', 'label' => 'Monitoring']
                            ],
                            'link' => '/features/security',
                            'linkColor' => 'text-green-600 dark:text-green-400',
                            'image' => 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 4,
                            'title' => 'Advanced Analytics',
                            'description' => 'Data-driven insights and predictive analytics to optimize your supply chain decisions.',
                            'icon' => 'chart',
                            'accentColor' => 'bg-gradient-to-r from-orange-500 to-red-500',
                            'iconBg' => 'bg-orange-100 dark:bg-orange-900/30',
                            'tags' => [
                                ['text' => 'Predictive', 'bgColor' => 'bg-orange-100 dark:bg-orange-900/30', 'textColor' => 'text-orange-700 dark:text-orange-300'],
                                ['text' => 'Real-time', 'bgColor' => 'bg-red-100 dark:bg-red-900/30', 'textColor' => 'text-red-700 dark:text-red-300']
                            ],
                            'list' => [
                                ['text' => 'Custom dashboards'],
                                ['text' => 'KPI tracking'],
                                ['text' => 'Forecasting tools']
                            ],
                            'link' => '/features/analytics',
                            'linkColor' => 'text-orange-600 dark:text-orange-400',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 5,
                            'title' => 'Seamless Integration',
                            'description' => 'Connect with hundreds of apps and services through our powerful API.',
                            'icon' => 'cog',
                            'accentColor' => 'bg-gradient-to-r from-teal-500 to-cyan-500',
                            'iconBg' => 'bg-teal-100 dark:bg-teal-900/30',
                            'tags' => [
                                ['text' => 'REST API', 'bgColor' => 'bg-teal-100 dark:bg-teal-900/30', 'textColor' => 'text-teal-700 dark:text-teal-300'],
                                ['text' => 'Webhooks', 'bgColor' => 'bg-cyan-100 dark:bg-cyan-900/30', 'textColor' => 'text-cyan-700 dark:text-cyan-300']
                            ],
                            'list' => [
                                ['text' => '200+ integrations'],
                                ['text' => 'Custom webhooks'],
                                ['text' => 'Zapier ready']
                            ],
                            'link' => '/features/integrations',
                            'linkColor' => 'text-teal-600 dark:text-teal-400',
                            'image' => 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 6,
                            'title' => '24/7 Customer Support',
                            'description' => 'Round-the-clock expert support with dedicated account managers for enterprise clients.',
                            'icon' => 'users',
                            'accentColor' => 'bg-gradient-to-r from-yellow-500 to-amber-500',
                            'iconBg' => 'bg-yellow-100 dark:bg-yellow-900/30',
                            'tags' => [
                                ['text' => '24/7', 'bgColor' => 'bg-yellow-100 dark:bg-yellow-900/30', 'textColor' => 'text-yellow-700 dark:text-yellow-300'],
                                ['text' => 'Dedicated', 'bgColor' => 'bg-amber-100 dark:bg-amber-900/30', 'textColor' => 'text-amber-700 dark:text-amber-300']
                            ],
                            'stats' => [
                                ['value' => '24/7', 'label' => 'Availability'],
                                ['value' => '< 5min', 'label' => 'Response']
                            ],
                            'link' => '/features/support',
                            'linkColor' => 'text-yellow-600 dark:text-yellow-400',
                            'image' => 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop'
                        ]
                    ],
                    'bottomHighlight' => [
                        'show' => true,
                        'title' => 'Ready to Transform Your Logistics?',
                        'description' => 'Join thousands of businesses already optimizing their supply chain with our platform.',
                        'buttonText' => 'Start Free Trial',
                        'buttonUrl' => '/signup'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 12,
                'section_key' => 'features',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
