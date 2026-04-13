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
                            'accentColor' => 'bg-linear-to-r from-blue-500 to-cyan-500',
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
                            'accentColor' => 'bg-linear-to-r from-purple-500 to-pink-500',
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
                            'accentColor' => 'bg-linear-to-r from-green-500 to-emerald-500',
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
                            'accentColor' => 'bg-linear-to-r from-orange-500 to-red-500',
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
                            'accentColor' => 'bg-linear-to-r from-teal-500 to-cyan-500',
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
                            'accentColor' => 'bg-linear-to-r from-yellow-500 to-amber-500',
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

            // How It Works Section
            [
                'id' => 13,
                'section_key' => 'howItWorks',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => [
                        'show' => true,
                        'showPulse' => true,
                        'text' => 'SIMPLE PROCESS'
                    ],
                    'heading' => [
                        'prefix' => 'How It',
                        'highlightedText' => 'Works',
                        'suffix' => ''
                    ],
                    'description' => 'Get started with our platform in four simple steps and transform your logistics operations.',
                    'steps' => [
                        [
                            'id' => 1,
                            'number' => 1,
                            'title' => 'Sign Up',
                            'description' => 'Create your account and set up your company profile in minutes.',
                            'icon' => 'clipboard',
                            'duration' => '~5 minutes',
                            'image' => 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 2,
                            'number' => 2,
                            'title' => 'Connect Systems',
                            'description' => 'Integrate your existing systems and import your inventory data.',
                            'icon' => 'cube',
                            'duration' => '~30 minutes',
                            'image' => 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 3,
                            'number' => 3,
                            'title' => 'Configure Workflows',
                            'description' => 'Set up automation rules and customize your logistics workflows.',
                            'icon' => 'document',
                            'duration' => '~15 minutes',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 4,
                            'number' => 4,
                            'title' => 'Start Operating',
                            'description' => 'Go live and start managing your supply chain efficiently.',
                            'icon' => 'truck',
                            'duration' => 'Instant',
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop'
                        ]
                    ],
                    'bottomCta' => [
                        'show' => true,
                        'text' => 'Get Started Now',
                        'url' => '/signup',
                        'ariaLabel' => 'Start using our platform'
                    ],
                    'highlights' => [
                        'show' => true,
                        'items' => [
                            [
                                'title' => 'No Credit Card Required',
                                'description' => 'Start with a free trial, no commitment needed'
                            ],
                            [
                                'title' => 'Dedicated Support',
                                'description' => 'Get help from our team at every step'
                            ],
                            [
                                'title' => 'Cancel Anytime',
                                'description' => 'Flexible plans with no long-term contracts'
                            ]
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 14,
                'section_key' => 'howItWorks',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'HOW IT WORKS'
                    ],
                    'heading' => [
                        'line1' => 'Simple Steps to',
                        'highlighted' => 'Smart Logistics'
                    ],
                    'description' => 'Get started in minutes with our intuitive platform. Follow these simple steps to transform your supply chain.',
                    'steps' => [
                        [
                            'id' => 1,
                            'title' => 'Create Account',
                            'description' => 'Sign up for free and set up your company profile in minutes.',
                            'icon' => 'user',
                            'duration' => '~5 minutes',
                            'features' => ['No credit card required', 'Free 14-day trial', 'Team onboarding included'],
                            'image' => 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 2,
                            'title' => 'Connect Systems',
                            'description' => 'Integrate your existing tools and import your inventory data.',
                            'icon' => 'database',
                            'duration' => '~30 minutes',
                            'features' => ['API integrations', 'CSV import', 'Third-party connectors'],
                            'image' => 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 3,
                            'title' => 'Configure Workflows',
                            'description' => 'Set up automation rules and customize your logistics processes.',
                            'icon' => 'chart',
                            'duration' => '~15 minutes',
                            'features' => ['Custom rules', 'Smart alerts', 'Approval workflows'],
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 4,
                            'title' => 'Go Live',
                            'description' => 'Launch your optimized supply chain and start tracking in real-time.',
                            'icon' => 'truck',
                            'duration' => 'Instant',
                            'features' => ['Real-time tracking', 'Performance analytics', '24/7 support'],
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop'
                        ]
                    ],
                    'previewContent' => [
                        [
                            [
                                'icon' => 'user',
                                'text' => 'Create your workspace',
                                'subtext' => 'Set up company profile',
                                'bgColor' => 'bg-blue-600',
                                'status' => 'New',
                                'statusColor' => 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
                            ],
                            [
                                'icon' => 'check',
                                'text' => 'Email verified',
                                'subtext' => 'Account activated',
                                'bgColor' => 'bg-green-600',
                                'status' => 'Done',
                                'statusColor' => 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                            ]
                        ],
                        [
                            [
                                'icon' => 'database',
                                'text' => 'Importing inventory data',
                                'subtext' => '12,847 items synced',
                                'bgColor' => 'bg-purple-600',
                                'status' => 'Syncing',
                                'statusColor' => 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300'
                            ],
                            [
                                'icon' => 'check',
                                'text' => 'API connected',
                                'subtext' => 'Shopify integration',
                                'bgColor' => 'bg-green-600',
                                'status' => 'Active',
                                'statusColor' => 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                            ]
                        ],
                        [
                            [
                                'icon' => 'chart',
                                'text' => 'Setting automation rules',
                                'subtext' => 'Low stock alerts configured',
                                'bgColor' => 'bg-orange-600',
                                'status' => 'Setup',
                                'statusColor' => 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
                            ],
                            [
                                'icon' => 'check',
                                'text' => 'Workflows active',
                                'subtext' => '3 rules enabled',
                                'bgColor' => 'bg-green-600',
                                'status' => 'Live',
                                'statusColor' => 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                            ]
                        ],
                        [
                            [
                                'icon' => 'truck',
                                'text' => 'System operational',
                                'subtext' => 'Real-time tracking active',
                                'bgColor' => 'bg-green-600',
                                'status' => 'Live',
                                'statusColor' => 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                            ],
                            [
                                'icon' => 'chart',
                                'text' => 'Performance metrics',
                                'subtext' => '99.9% uptime',
                                'bgColor' => 'bg-blue-600',
                                'status' => 'Tracking',
                                'statusColor' => 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
                            ]
                        ]
                    ],
                    'bottomCta' => [
                        'show' => true,
                        'text' => 'Start Your Free Trial',
                        'url' => '/signup',
                        'ariaLabel' => 'Start free trial now'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 15,
                'section_key' => 'howItWorks',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'JOURNEY MAP'
                    ],
                    'heading' => [
                        'prefix' => 'Your Path to',
                        'highlightedText' => 'Supply Chain Excellence',
                        'suffix' => ''
                    ],
                    'description' => 'Follow our proven framework to transform your logistics operations step by step.',
                    'steps' => [
                        [
                            'id' => 1,
                            'number' => 1,
                            'title' => 'Discovery & Assessment',
                            'description' => 'We analyze your current operations and identify areas for improvement.',
                            'icon' => 'document',
                            'badgeColor' => 'from-amber-500 to-orange-500',
                            'markerColor' => 'from-amber-500 to-orange-500',
                            'overlayColor' => 'from-amber-500/20 to-orange-500/20',
                            'features' => [
                                'Operations audit',
                                'Pain points identification',
                                'Goal setting',
                                'Timeline planning'
                            ],
                            'metrics' => [
                                ['value' => '2-3 days', 'label' => 'Duration', 'color' => 'from-amber-500 to-orange-500'],
                                ['value' => '100%', 'label' => 'Analysis', 'color' => 'from-amber-500 to-orange-500']
                            ],
                            'image' => 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
                            'floatingCard' => [
                                'label' => 'Current Efficiency',
                                'value' => '65%',
                                'icon' => 'chart',
                                'bgColor' => 'bg-amber-600'
                            ]
                        ],
                        [
                            'id' => 2,
                            'number' => 2,
                            'title' => 'Strategy & Planning',
                            'description' => 'We design a customized solution tailored to your specific needs.',
                            'icon' => 'chart',
                            'badgeColor' => 'from-orange-500 to-pink-500',
                            'markerColor' => 'from-orange-500 to-pink-500',
                            'overlayColor' => 'from-orange-500/20 to-pink-500/20',
                            'features' => [
                                'Custom solution design',
                                'Integration planning',
                                'Resource allocation',
                                'KPI definition'
                            ],
                            'metrics' => [
                                ['value' => '5-7 days', 'label' => 'Planning', 'color' => 'from-orange-500 to-pink-500'],
                                ['value' => '3x', 'label' => 'ROI Projected', 'color' => 'from-orange-500 to-pink-500']
                            ],
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
                            'floatingCard' => [
                                'label' => 'Projected ROI',
                                'value' => '300%',
                                'icon' => 'lightning',
                                'bgColor' => 'bg-orange-600'
                            ]
                        ],
                        [
                            'id' => 3,
                            'number' => 3,
                            'title' => 'Implementation',
                            'description' => 'We deploy and integrate our solution with your existing systems.',
                            'icon' => 'cube',
                            'badgeColor' => 'from-pink-500 to-rose-500',
                            'markerColor' => 'from-pink-500 to-rose-500',
                            'overlayColor' => 'from-pink-500/20 to-rose-500/20',
                            'features' => [
                                'System integration',
                                'Data migration',
                                'Team training',
                                'Go-live support'
                            ],
                            'metrics' => [
                                ['value' => '14 days', 'label' => 'Implementation', 'color' => 'from-pink-500 to-rose-500'],
                                ['value' => '24/7', 'label' => 'Support', 'color' => 'from-pink-500 to-rose-500']
                            ],
                            'image' => 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&h=400&fit=crop',
                            'floatingCard' => [
                                'label' => 'Progress',
                                'value' => '100%',
                                'icon' => 'check',
                                'bgColor' => 'bg-green-600'
                            ]
                        ],
                        [
                            'id' => 4,
                            'number' => 4,
                            'title' => 'Optimization',
                            'description' => 'Continuous improvement and ongoing support for maximum results.',
                            'icon' => 'truck',
                            'badgeColor' => 'from-rose-500 to-purple-500',
                            'markerColor' => 'from-rose-500 to-purple-500',
                            'overlayColor' => 'from-rose-500/20 to-purple-500/20',
                            'features' => [
                                'Performance monitoring',
                                'Regular optimization',
                                'Dedicated support',
                                'Quarterly reviews'
                            ],
                            'metrics' => [
                                ['value' => '40%', 'label' => 'Efficiency Gain', 'color' => 'from-rose-500 to-purple-500'],
                                ['value' => '25%', 'label' => 'Cost Reduction', 'color' => 'from-rose-500 to-purple-500']
                            ],
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
                            'floatingCard' => [
                                'label' => 'Performance',
                                'value' => '98%',
                                'icon' => 'shield',
                                'bgColor' => 'bg-purple-600'
                            ]
                        ]
                    ],
                    'bottomCards' => [
                        [
                            'title' => 'Dedicated Support',
                            'description' => 'Get personalized assistance from our expert team throughout your journey.',
                            'icon' => 'user',
                            'iconBg' => 'bg-linear-to-r from-amber-500 to-orange-500'
                        ],
                        [
                            'title' => 'Proven Methodology',
                            'description' => 'Our framework has helped 5000+ businesses optimize their supply chain.',
                            'icon' => 'globe',
                            'iconBg' => 'bg-linear-to-r from-orange-500 to-pink-500'
                        ],
                        [
                            'title' => 'Continuous Improvement',
                            'description' => 'Regular updates and optimizations to keep your operations at peak performance.',
                            'icon' => 'lightning',
                            'iconBg' => 'bg-linear-to-r from-pink-500 to-purple-500'
                        ]
                    ],
                    'bottomCta' => [
                        'show' => true,
                        'text' => 'Start Your Journey Today',
                        'url' => '/contact',
                        'ariaLabel' => 'Begin your supply chain transformation'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 16,
                'section_key' => 'howItWorks',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Industries Section
            [
                'id' => 17,
                'section_key' => 'industries',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => [
                        'show' => true,
                        'showPulse' => true,
                        'text' => 'INDUSTRIES WE SERVE'
                    ],
                    'heading' => [
                        'prefix' => 'Logistics Solutions for',
                        'highlightedText' => 'Every Industry',
                        'suffix' => ''
                    ],
                    'description' => 'Tailored supply chain solutions designed to meet the unique challenges of your industry.',
                    'industries' => [
                        [
                            'id' => 1,
                            'title' => 'E-Commerce & Retail',
                            'description' => 'Streamlined fulfillment and last-mile delivery for online retailers.',
                            'icon' => 'retail',
                            'features' => ['Same-day shipping', 'Returns management', 'Inventory sync'],
                            'link' => '/industries/ecommerce',
                            'caseStudy' => '/industries/ecommerce-retail',
                            'image' => 'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 2,
                            'title' => 'Manufacturing',
                            'description' => 'Just-in-time inventory and raw material management.',
                            'icon' => 'manufacturing',
                            'features' => ['Raw material tracking', 'Production scheduling', 'Quality control'],
                            'link' => '/industries/manufacturing',
                            'caseStudy' => '/industries/manufacturing',
                            'image' => 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 3,
                            'title' => 'Healthcare',
                            'description' => 'Temperature-controlled logistics for medical supplies.',
                            'icon' => 'healthcare',
                            'features' => ['Cold chain monitoring', 'Compliance tracking', 'Expiry management'],
                            'link' => '/industries/healthcare',
                            'caseStudy' => '/industries/healthcare',
                            'image' => 'https://images.unsplash.com/photo-1579154392128-bf8c7ebee541?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 4,
                            'title' => 'Food & Beverage',
                            'description' => 'Fresh food logistics with real-time temperature tracking.',
                            'icon' => 'food',
                            'features' => ['Cold storage', 'Batch tracking', 'FDA compliance'],
                            'link' => '/industries/food-beverage',
                            'caseStudy' => '/industries/food-beverage',
                            'image' => 'https://images.unsplash.com/photo-1578911373431-0a84c5c6c6b2?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 5,
                            'title' => 'Automotive',
                            'description' => 'Complex supply chain management for auto parts.',
                            'icon' => 'automotive',
                            'features' => ['Just-in-time delivery', 'Part traceability', 'Warehouse optimization'],
                            'link' => '/industries/automotive',
                            'caseStudy' => '/industries/automotive',
                            'image' => 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 6,
                            'title' => 'Technology',
                            'description' => 'High-value electronics logistics with security.',
                            'icon' => 'technology',
                            'features' => ['Asset tracking', 'Secure storage', 'Global distribution'],
                            'link' => '/industries/technology',
                            'caseStudy' => '/industries/technology',
                            'image' => 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 7,
                            'title' => 'Pharmaceuticals',
                            'description' => 'Regulated logistics for sensitive medical products.',
                            'icon' => 'pharma',
                            'features' => ['GDP compliance', 'Temperature monitoring', 'Serialization'],
                            'link' => '/industries/pharmaceuticals',
                            'caseStudy' => '/industries/pharmaceuticals',
                            'image' => 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 8,
                            'title' => 'Logistics Providers',
                            'description' => 'Scalable solutions for 3PL and freight forwarders.',
                            'icon' => 'logistics',
                            'features' => ['Multi-client support', 'Billing automation', 'Network optimization'],
                            'link' => '/industries/logistics',
                            'caseStudy' => '/industries/logistics',
                            'image' => 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=600&h=400&fit=crop'
                        ]
                    ],
                    'bottomCta' => [
                        'show' => true,
                        'text' => 'Explore All Industries',
                        'url' => '/industries',
                        'ariaLabel' => 'View all industries we serve'
                    ],
                    'trustIndicators' => [
                        'show' => true,
                        'items' => [
                            ['value' => '5000+', 'label' => 'Businesses Served'],
                            ['value' => '50+', 'label' => 'Countries'],
                            ['value' => '98%', 'label' => 'Satisfaction Rate'],
                            ['value' => '24/7', 'label' => 'Support']
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 18,
                'section_key' => 'industries',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'INDUSTRIES WE SERVE'
                    ],
                    'heading' => [
                        'line1' => 'Tailored Solutions for',
                        'highlighted' => 'Every Industry'
                    ],
                    'description' => 'Specialized logistics solutions designed to meet the unique challenges of your sector.',
                    'categories' => [
                        ['id' => 'commercial', 'name' => 'Commercial'],
                        ['id' => 'industrial', 'name' => 'Industrial'],
                        ['id' => 'health', 'name' => 'Health & Science'],
                        ['id' => 'specialty', 'name' => 'Specialty']
                    ],
                    'industries' => [
                        [
                            'id' => 1,
                            'title' => 'E-Commerce',
                            'description' => 'Fast, reliable fulfillment and last-mile delivery for online retailers.',
                            'icon' => 'retail',
                            'category' => 'commercial',
                            'iconBg' => 'bg-linear-to-r from-blue-500 to-cyan-500',
                            'image' => 'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?w=600&h=400&fit=crop',
                            'solutions' => ['Same-day shipping', 'Returns management', 'Inventory sync'],
                            'stats' => [
                                ['value' => '99.9%', 'label' => 'Accuracy'],
                                ['value' => '24h', 'label' => 'Delivery']
                            ],
                            'link' => '/industries/ecommerce'
                        ],
                        [
                            'id' => 2,
                            'title' => 'Manufacturing',
                            'description' => 'Just-in-time inventory and raw material management for production lines.',
                            'icon' => 'manufacturing',
                            'category' => 'industrial',
                            'iconBg' => 'bg-linear-to-r from-purple-500 to-pink-500',
                            'image' => 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&h=400&fit=crop',
                            'solutions' => ['Raw material tracking', 'Production scheduling', 'Quality control'],
                            'stats' => [
                                ['value' => '30%', 'label' => 'Cost Reduction'],
                                ['value' => '24/7', 'label' => 'Operations']
                            ],
                            'link' => '/industries/manufacturing'
                        ],
                        [
                            'id' => 3,
                            'title' => 'Healthcare',
                            'description' => 'Temperature-controlled logistics for medical supplies and equipment.',
                            'icon' => 'healthcare',
                            'category' => 'health',
                            'iconBg' => 'bg-linear-to-r from-green-500 to-teal-500',
                            'image' => 'https://images.unsplash.com/photo-1579154392128-bf8c7ebee541?w=600&h=400&fit=crop',
                            'solutions' => ['Cold chain monitoring', 'Compliance tracking', 'Expiry management'],
                            'stats' => [
                                ['value' => '100%', 'label' => 'Compliance'],
                                ['value' => 'Real-time', 'label' => 'Monitoring']
                            ],
                            'link' => '/industries/healthcare'
                        ],
                        [
                            'id' => 4,
                            'title' => 'Food & Beverage',
                            'description' => 'Fresh food logistics with real-time temperature and humidity tracking.',
                            'icon' => 'food',
                            'category' => 'specialty',
                            'iconBg' => 'bg-linear-to-r from-orange-500 to-yellow-500',
                            'image' => 'https://images.unsplash.com/photo-1578911373431-0a84c5c6c6b2?w=600&h=400&fit=crop',
                            'solutions' => ['Cold storage', 'Batch tracking', 'FDA compliance'],
                            'stats' => [
                                ['value' => '98%', 'label' => 'Freshness'],
                                ['value' => '24/7', 'label' => 'Monitoring']
                            ],
                            'link' => '/industries/food-beverage'
                        ],
                        [
                            'id' => 5,
                            'title' => 'Automotive',
                            'description' => 'Complex supply chain management for auto parts and components.',
                            'icon' => 'automotive',
                            'category' => 'industrial',
                            'iconBg' => 'bg-linear-to-r from-red-500 to-rose-500',
                            'image' => 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=600&h=400&fit=crop',
                            'solutions' => ['Just-in-time delivery', 'Part traceability', 'Warehouse optimization'],
                            'stats' => [
                                ['value' => '40%', 'label' => 'Faster Delivery'],
                                ['value' => '99%', 'label' => 'Traceability']
                            ],
                            'link' => '/industries/automotive'
                        ],
                        [
                            'id' => 6,
                            'title' => 'Technology',
                            'description' => 'High-value electronics logistics with enhanced security and tracking.',
                            'icon' => 'technology',
                            'category' => 'commercial',
                            'iconBg' => 'bg-linear-to-r from-indigo-500 to-blue-500',
                            'image' => 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
                            'solutions' => ['Asset tracking', 'Secure storage', 'Global distribution'],
                            'stats' => [
                                ['value' => '100%', 'label' => 'Security'],
                                ['value' => 'Global', 'label' => 'Coverage']
                            ],
                            'link' => '/industries/technology'
                        ]
                    ],
                    'bottomCta' => [
                        'show' => true,
                        'text' => 'Explore All Industries',
                        'url' => '/industries',
                        'ariaLabel' => 'View all industries we serve'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 19,
                'section_key' => 'industries',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'INDUSTRIES WE SERVE'
                    ],
                    'heading' => [
                        'prefix' => 'Specialized Logistics for',
                        'highlightedText' => 'Your Industry',
                        'suffix' => ''
                    ],
                    'description' => 'Industry-specific solutions designed to address your unique supply chain challenges.',
                    'industries' => [
                        [
                            'id' => 1,
                            'title' => 'E-Commerce',
                            'shortDesc' => 'Fast fulfillment for online retailers',
                            'detailedDesc' => 'Complete e-commerce logistics solution with same-day shipping, returns management, and real-time inventory sync across all sales channels.',
                            'icon' => 'retail',
                            'category' => 'Commercial',
                            'iconBg' => 'from-blue-500 to-cyan-500',
                            'rating' => '4.9',
                            'challenges' => [
                                'Inventory accuracy across channels',
                                'Fast shipping expectations',
                                'Returns processing efficiency'
                            ],
                            'solutions' => [
                                'Multi-channel inventory sync',
                                'Same-day fulfillment centers',
                                'Automated returns portal'
                            ],
                            'metrics' => [
                                ['value' => '99.9%', 'label' => 'Accuracy'],
                                ['value' => '24h', 'label' => 'Delivery'],
                                ['value' => '50%', 'label' => 'Faster Returns']
                            ],
                            'caseStudy' => [
                                'title' => 'How BrandX scaled from 1K to 100K orders monthly',
                                'link' => '/industries/ecommerce'
                            ],
                            'image' => 'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 2,
                            'title' => 'Healthcare',
                            'shortDesc' => 'Temperature-controlled logistics',
                            'detailedDesc' => 'Compliant logistics for medical devices, pharmaceuticals, and healthcare supplies with real-time temperature monitoring.',
                            'icon' => 'healthcare',
                            'category' => 'Health',
                            'iconBg' => 'from-green-500 to-teal-500',
                            'rating' => '4.8',
                            'challenges' => [
                                'Temperature compliance',
                                'Regulatory requirements',
                                'Expiry management'
                            ],
                            'solutions' => [
                                'Cold chain monitoring',
                                'FDA/GDP compliant processes',
                                'Automated expiry alerts'
                            ],
                            'metrics' => [
                                ['value' => '100%', 'label' => 'Compliance'],
                                ['value' => 'Real-time', 'label' => 'Monitoring'],
                                ['value' => '0%', 'label' => 'Spoilage']
                            ],
                            'caseStudy' => [
                                'title' => 'Medical Supply Co achieves 100% compliance',
                                'link' => '/industries/healthcare'
                            ],
                            'image' => 'https://images.unsplash.com/photo-1579154392128-bf8c7ebee541?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 3,
                            'title' => 'Manufacturing',
                            'shortDesc' => 'Just-in-time inventory management',
                            'detailedDesc' => 'Optimize production lines with JIT delivery, raw material tracking, and automated replenishment.',
                            'icon' => 'manufacturing',
                            'category' => 'Industrial',
                            'iconBg' => 'from-purple-500 to-pink-500',
                            'rating' => '4.7',
                            'challenges' => [
                                'Production line downtime',
                                'Inventory carrying costs',
                                'Supplier coordination'
                            ],
                            'solutions' => [
                                'JIT delivery scheduling',
                                'Raw material tracking',
                                'Automated PO generation'
                            ],
                            'metrics' => [
                                ['value' => '40%', 'label' => 'Less Inventory'],
                                ['value' => '99%', 'label' => 'On-time'],
                                ['value' => '25%', 'label' => 'Cost Savings']
                            ],
                            'caseStudy' => [
                                'title' => 'AutoParts Inc reduces inventory by 40%',
                                'link' => '/industries/manufacturing'
                            ],
                            'image' => 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 4,
                            'title' => 'Food & Beverage',
                            'shortDesc' => 'Fresh food logistics',
                            'detailedDesc' => 'Temperature-controlled logistics with real-time tracking and FDA compliance for perishable goods.',
                            'icon' => 'food',
                            'category' => 'Specialty',
                            'iconBg' => 'from-orange-500 to-yellow-500',
                            'rating' => '4.9',
                            'challenges' => [
                                'Temperature control',
                                'Short shelf life',
                                'FDA regulations'
                            ],
                            'solutions' => [
                                'Cold chain management',
                                'FIFO inventory system',
                                'Compliance automation'
                            ],
                            'metrics' => [
                                ['value' => '98%', 'label' => 'Freshness'],
                                ['value' => '24/7', 'label' => 'Monitoring'],
                                ['value' => '30%', 'label' => 'Less Waste']
                            ],
                            'caseStudy' => [
                                'title' => 'FreshFoods reduces waste by 30%',
                                'link' => '/industries/food-beverage'
                            ],
                            'image' => 'https://images.unsplash.com/photo-1578911373431-0a84c5c6c6b2?w=600&h=400&fit=crop'
                        ]
                    ],
                    'bottomCta' => [
                        'show' => true,
                        'text' => 'Explore All Industries',
                        'url' => '/industries',
                        'ariaLabel' => 'View all industries we serve'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 20,
                'section_key' => 'industries',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Success Stories Section
            [
                'id' => 21,
                'section_key' => 'successStories',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => [
                        'show' => true,
                        'showPulse' => true,
                        'text' => 'SUCCESS STORIES'
                    ],
                    'heading' => [
                        'prefix' => 'Trusted by',
                        'highlightedText' => 'Leading Companies',
                        'suffix' => 'Worldwide'
                    ],
                    'description' => 'See how businesses like yours have transformed their supply chain with our platform.',
                    'categories' => [
                        ['id' => 'ecommerce', 'name' => 'E-Commerce'],
                        ['id' => 'manufacturing', 'name' => 'Manufacturing'],
                        ['id' => 'logistics', 'name' => 'Logistics']
                    ],
                    'stories' => [
                        [
                            'id' => 1,
                            'companyName' => 'TechLogix Solutions',
                            'companyInitials' => 'TL',
                            'industry' => 'E-Commerce',
                            'location' => 'San Francisco, CA',
                            'category' => 'ecommerce',
                            'rating' => 5,
                            'reviewCount' => 128,
                            'quote' => 'This platform revolutionized our inventory management. We\'ve seen a 40% reduction in stockouts and significantly improved customer satisfaction.',
                            'authorName' => 'Sarah Johnson',
                            'authorTitle' => 'Supply Chain Director',
                            'authorImage' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
                            'image' => 'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?w=600&h=400&fit=crop',
                            'hasVideo' => false,
                            'link' => '/success-stories/techlogix',
                            'metrics' => [
                                ['value' => '40%', 'label' => 'Reduced Stockouts'],
                                ['value' => '99.9%', 'label' => 'Order Accuracy'],
                                ['value' => '2x', 'label' => 'Faster Fulfillment']
                            ]
                        ],
                        [
                            'id' => 2,
                            'companyName' => 'AutoParts Global',
                            'companyInitials' => 'AP',
                            'industry' => 'Manufacturing',
                            'location' => 'Detroit, MI',
                            'category' => 'manufacturing',
                            'rating' => 5,
                            'reviewCount' => 95,
                            'quote' => 'Real-time tracking and automated reordering saved us millions in inventory carrying costs.',
                            'authorName' => 'Michael Chen',
                            'authorTitle' => 'Operations Manager',
                            'authorImage' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
                            'image' => 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=600&h=400&fit=crop',
                            'hasVideo' => true,
                            'link' => '/success-stories/autoparts',
                            'metrics' => [
                                ['value' => '30%', 'label' => 'Cost Savings'],
                                ['value' => '25%', 'label' => 'Faster Delivery'],
                                ['value' => '100%', 'label' => 'Traceability']
                            ]
                        ],
                        [
                            'id' => 3,
                            'companyName' => 'FreshFoods Co',
                            'companyInitials' => 'FF',
                            'industry' => 'Food & Beverage',
                            'location' => 'Chicago, IL',
                            'category' => 'logistics',
                            'rating' => 4,
                            'reviewCount' => 203,
                            'quote' => 'Temperature monitoring and cold chain management reduced our waste by 50%.',
                            'authorName' => 'Emily Rodriguez',
                            'authorTitle' => 'Logistics Director',
                            'authorImage' => 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
                            'image' => 'https://images.unsplash.com/photo-1578911373431-0a84c5c6c6b2?w=600&h=400&fit=crop',
                            'hasVideo' => false,
                            'link' => '/success-stories/freshfoods',
                            'metrics' => [
                                ['value' => '50%', 'label' => 'Less Waste'],
                                ['value' => '100%', 'label' => 'Compliance'],
                                ['value' => '24/7', 'label' => 'Monitoring']
                            ]
                        ]
                    ],
                    'bottomCta' => [
                        'show' => true,
                        'text' => 'View All Success Stories',
                        'url' => '/success-stories',
                        'ariaLabel' => 'See all customer success stories'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 22,
                'section_key' => 'successStories',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => [
                        'show' => true,
                        'showPulse' => true,
                        'text' => 'SUCCESS STORIES'
                    ],
                    'heading' => [
                        'prefix' => 'Trusted by',
                        'highlightedText' => 'Leading Companies',
                        'suffix' => 'Worldwide'
                    ],
                    'description' => 'See how businesses like yours have transformed their supply chain with our platform.',
                    'categories' => [
                        ['id' => 'ecommerce', 'name' => 'E-Commerce'],
                        ['id' => 'manufacturing', 'name' => 'Manufacturing'],
                        ['id' => 'logistics', 'name' => 'Logistics']
                    ],
                    'stories' => [
                        [
                            'id' => 1,
                            'companyName' => 'TechLogix Solutions',
                            'companyInitials' => 'TL',
                            'industry' => 'E-Commerce',
                            'location' => 'San Francisco, CA',
                            'category' => 'ecommerce',
                            'rating' => 5,
                            'reviewCount' => 128,
                            'quote' => 'This platform revolutionized our inventory management. We\'ve seen a 40% reduction in stockouts and significantly improved customer satisfaction.',
                            'authorName' => 'Sarah Johnson',
                            'authorTitle' => 'Supply Chain Director',
                            'authorImage' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
                            'image' => 'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?w=600&h=400&fit=crop',
                            'hasVideo' => false,
                            'link' => '/success-stories/techlogix',
                            'metrics' => [
                                ['value' => '40%', 'label' => 'Reduced Stockouts'],
                                ['value' => '99.9%', 'label' => 'Order Accuracy'],
                                ['value' => '2x', 'label' => 'Faster Fulfillment']
                            ]
                        ],
                        [
                            'id' => 2,
                            'companyName' => 'AutoParts Global',
                            'companyInitials' => 'AP',
                            'industry' => 'Manufacturing',
                            'location' => 'Detroit, MI',
                            'category' => 'manufacturing',
                            'rating' => 5,
                            'reviewCount' => 95,
                            'quote' => 'Real-time tracking and automated reordering saved us millions in inventory carrying costs.',
                            'authorName' => 'Michael Chen',
                            'authorTitle' => 'Operations Manager',
                            'authorImage' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
                            'image' => 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=600&h=400&fit=crop',
                            'hasVideo' => true,
                            'link' => '/success-stories/autoparts',
                            'metrics' => [
                                ['value' => '30%', 'label' => 'Cost Savings'],
                                ['value' => '25%', 'label' => 'Faster Delivery'],
                                ['value' => '100%', 'label' => 'Traceability']
                            ]
                        ],
                        [
                            'id' => 3,
                            'companyName' => 'FreshFoods Co',
                            'companyInitials' => 'FF',
                            'industry' => 'Food & Beverage',
                            'location' => 'Chicago, IL',
                            'category' => 'logistics',
                            'rating' => 4,
                            'reviewCount' => 203,
                            'quote' => 'Temperature monitoring and cold chain management reduced our waste by 50%.',
                            'authorName' => 'Emily Rodriguez',
                            'authorTitle' => 'Logistics Director',
                            'authorImage' => 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
                            'image' => 'https://images.unsplash.com/photo-1578911373431-0a84c5c6c6b2?w=600&h=400&fit=crop',
                            'hasVideo' => false,
                            'link' => '/success-stories/freshfoods',
                            'metrics' => [
                                ['value' => '50%', 'label' => 'Less Waste'],
                                ['value' => '100%', 'label' => 'Compliance'],
                                ['value' => '24/7', 'label' => 'Monitoring']
                            ]
                        ]
                    ],
                    'bottomCta' => [
                        'show' => true,
                        'text' => 'View All Success Stories',
                        'url' => '/success-stories',
                        'ariaLabel' => 'See all customer success stories'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 23,
                'section_key' => 'successStories',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'CUSTOMER LOVE'
                    ],
                    'heading' => [
                        'prefix' => 'What Our',
                        'highlightedText' => 'Customers Say',
                        'suffix' => ''
                    ],
                    'description' => 'Real stories from businesses that transformed their supply chain with our platform.',
                    'stories' => [
                        [
                            'id' => 1,
                            'companyName' => 'TechLogix',
                            'companyInitials' => 'TL',
                            'industry' => 'E-Commerce',
                            'rating' => 5,
                            'reviewCount' => 128,
                            'quote' => 'This platform revolutionized our inventory management. We\'ve seen a 50% reduction in fulfillment time.',
                            'quotePreview' => 'This platform revolutionized our inventory management...',
                            'featuredImage' => 'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?w=800&h=500&fit=crop',
                            'image' => 'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?w=400&h=300&fit=crop',
                            'videoDuration' => '3:45',
                            'results' => [
                                ['value' => '50%', 'label' => 'Faster Fulfillment'],
                                ['value' => '99.9%', 'label' => 'Accuracy'],
                                ['value' => '40%', 'label' => 'Cost Savings']
                            ],
                            'authorName' => 'Sarah Johnson',
                            'authorTitle' => 'Supply Chain Director',
                            'authorImage' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
                            'keyResult' => ['value' => '50%', 'label' => 'Faster Fulfillment'],
                            'link' => '/success-stories/techlogix'
                        ],
                        [
                            'id' => 2,
                            'companyName' => 'AutoParts Pro',
                            'companyInitials' => 'AP',
                            'industry' => 'Automotive',
                            'rating' => 5,
                            'reviewCount' => 95,
                            'quote' => 'Real-time tracking and analytics saved us millions in inventory carrying costs.',
                            'quotePreview' => 'Real-time tracking and analytics saved us millions...',
                            'featuredImage' => 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&h=500&fit=crop',
                            'image' => 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=400&h=300&fit=crop',
                            'videoDuration' => '4:20',
                            'results' => [
                                ['value' => '30%', 'label' => 'Cost Savings'],
                                ['value' => '25%', 'label' => 'Faster Delivery'],
                                ['value' => '100%', 'label' => 'Traceability']
                            ],
                            'authorName' => 'Michael Chen',
                            'authorTitle' => 'Operations Manager',
                            'authorImage' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
                            'keyResult' => ['value' => '30%', 'label' => 'Cost Savings'],
                            'link' => '/success-stories/autoparts'
                        ],
                        [
                            'id' => 3,
                            'companyName' => 'FreshDirect',
                            'companyInitials' => 'FD',
                            'industry' => 'Food & Beverage',
                            'rating' => 4,
                            'reviewCount' => 203,
                            'quote' => 'Cold chain monitoring reduced our product waste by 50% and ensured FDA compliance.',
                            'quotePreview' => 'Cold chain monitoring reduced our product waste...',
                            'featuredImage' => 'https://images.unsplash.com/photo-1578911373431-0a84c5c6c6b2?w=800&h=500&fit=crop',
                            'image' => 'https://images.unsplash.com/photo-1578911373431-0a84c5c6c6b2?w=400&h=300&fit=crop',
                            'videoDuration' => '3:15',
                            'results' => [
                                ['value' => '50%', 'label' => 'Less Waste'],
                                ['value' => '100%', 'label' => 'Compliance'],
                                ['value' => '24/7', 'label' => 'Monitoring']
                            ],
                            'authorName' => 'Emily Rodriguez',
                            'authorTitle' => 'Logistics Director',
                            'authorImage' => 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
                            'keyResult' => ['value' => '50%', 'label' => 'Less Waste'],
                            'link' => '/success-stories/freshdirect'
                        ],
                        [
                            'id' => 4,
                            'companyName' => 'MedSupply',
                            'companyInitials' => 'MS',
                            'industry' => 'Healthcare',
                            'rating' => 5,
                            'reviewCount' => 67,
                            'quote' => 'Temperature-controlled logistics helped us achieve 100% compliance with FDA regulations.',
                            'quotePreview' => 'Temperature-controlled logistics helped us achieve...',
                            'featuredImage' => 'https://images.unsplash.com/photo-1579154392128-bf8c7ebee541?w=800&h=500&fit=crop',
                            'image' => 'https://images.unsplash.com/photo-1579154392128-bf8c7ebee541?w=400&h=300&fit=crop',
                            'videoDuration' => '5:00',
                            'results' => [
                                ['value' => '100%', 'label' => 'Compliance'],
                                ['value' => '0%', 'label' => 'Spoilage'],
                                ['value' => '99.9%', 'label' => 'Accuracy']
                            ],
                            'authorName' => 'David Kim',
                            'authorTitle' => 'Quality Director',
                            'authorImage' => 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
                            'keyResult' => ['value' => '100%', 'label' => 'Compliance'],
                            'link' => '/success-stories/medsupply'
                        ]
                    ],
                    'bottomCta' => [
                        'show' => true,
                        'text' => 'Read More Success Stories',
                        'url' => '/success-stories',
                        'ariaLabel' => 'View all customer success stories'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 24,
                'section_key' => 'successStories',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Testimonials Section
            [
                'id' => 25,
                'section_key' => 'testimonials',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => [
                        'show' => true,
                        'showPulse' => true,
                        'text' => 'CLIENT TESTIMONIALS'
                    ],
                    'heading' => [
                        'prefix' => 'What Our',
                        'highlightedText' => 'Clients Say',
                        'suffix' => ''
                    ],
                    'description' => 'Don\'t just take our word for it. Here\'s what our customers have to say about their experience.',
                    'categories' => [
                        ['id' => 'ecommerce', 'name' => 'E-Commerce'],
                        ['id' => 'manufacturing', 'name' => 'Manufacturing'],
                        ['id' => 'logistics', 'name' => 'Logistics']
                    ],
                    'testimonials' => [
                        [
                            'id' => 1,
                            'authorName' => 'Sarah Johnson',
                            'authorTitle' => 'Supply Chain Director',
                            'companyName' => 'TechLogix',
                            'companyInitials' => 'TL',
                            'industry' => 'E-Commerce',
                            'location' => 'San Francisco, CA',
                            'category' => 'ecommerce',
                            'rating' => 5,
                            'testimonial' => 'This platform transformed our inventory management. We\'ve seen a 40% reduction in stockouts and our fulfillment accuracy is now 99.9%. The real-time tracking feature alone saved us countless hours.',
                            'keyBenefit' => '40% reduction in stockouts',
                            'date' => 'March 15, 2024',
                            'authorImage' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
                        ],
                        [
                            'id' => 2,
                            'authorName' => 'Michael Chen',
                            'authorTitle' => 'Operations Manager',
                            'companyName' => 'AutoParts Global',
                            'companyInitials' => 'AP',
                            'industry' => 'Automotive',
                            'location' => 'Detroit, MI',
                            'category' => 'manufacturing',
                            'rating' => 5,
                            'testimonial' => 'The automated reordering system has been a game-changer. We reduced our inventory carrying costs by 30% and improved our delivery times significantly. The team\'s support has been exceptional.',
                            'keyBenefit' => '30% cost reduction',
                            'date' => 'February 28, 2024',
                            'authorImage' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
                        ],
                        [
                            'id' => 3,
                            'authorName' => 'Emily Rodriguez',
                            'authorTitle' => 'Logistics Director',
                            'companyName' => 'FreshFoods Co',
                            'companyInitials' => 'FF',
                            'industry' => 'Food & Beverage',
                            'location' => 'Chicago, IL',
                            'category' => 'logistics',
                            'rating' => 4,
                            'testimonial' => 'The cold chain monitoring feature gave us peace of mind. We\'ve reduced product waste by 50% and achieved 100% FDA compliance. The real-time alerts are invaluable.',
                            'keyBenefit' => '50% less waste',
                            'date' => 'January 10, 2024',
                            'authorImage' => 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop'
                        ]
                    ],
                    'bottomCta' => [
                        'show' => true,
                        'text' => 'Read More Testimonials',
                        'url' => '/testimonials',
                        'ariaLabel' => 'View all client testimonials'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 26,
                'section_key' => 'testimonials',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => [
                        'show' => true,
                        'showPulse' => true,
                        'text' => 'CLIENT TESTIMONIALS'
                    ],
                    'heading' => [
                        'prefix' => 'What Our',
                        'highlightedText' => 'Clients Say',
                        'suffix' => ''
                    ],
                    'description' => 'Don\'t just take our word for it. Here\'s what our customers have to say about their experience.',
                    'categories' => [
                        ['id' => 'ecommerce', 'name' => 'E-Commerce'],
                        ['id' => 'manufacturing', 'name' => 'Manufacturing'],
                        ['id' => 'logistics', 'name' => 'Logistics']
                    ],
                    'testimonials' => [
                        [
                            'id' => 1,
                            'authorName' => 'Sarah Johnson',
                            'authorTitle' => 'Supply Chain Director',
                            'companyName' => 'TechLogix',
                            'companyInitials' => 'TL',
                            'industry' => 'E-Commerce',
                            'location' => 'San Francisco, CA',
                            'category' => 'ecommerce',
                            'rating' => 5,
                            'testimonial' => 'This platform transformed our inventory management. We\'ve seen a 40% reduction in stockouts and our fulfillment accuracy is now 99.9%. The real-time tracking feature alone saved us countless hours.',
                            'keyBenefit' => '40% reduction in stockouts',
                            'date' => 'March 15, 2024',
                            'authorImage' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
                        ],
                        [
                            'id' => 2,
                            'authorName' => 'Michael Chen',
                            'authorTitle' => 'Operations Manager',
                            'companyName' => 'AutoParts Global',
                            'companyInitials' => 'AP',
                            'industry' => 'Automotive',
                            'location' => 'Detroit, MI',
                            'category' => 'manufacturing',
                            'rating' => 5,
                            'testimonial' => 'The automated reordering system has been a game-changer. We reduced our inventory carrying costs by 30% and improved our delivery times significantly. The team\'s support has been exceptional.',
                            'keyBenefit' => '30% cost reduction',
                            'date' => 'February 28, 2024',
                            'authorImage' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
                        ],
                        [
                            'id' => 3,
                            'authorName' => 'Emily Rodriguez',
                            'authorTitle' => 'Logistics Director',
                            'companyName' => 'FreshFoods Co',
                            'companyInitials' => 'FF',
                            'industry' => 'Food & Beverage',
                            'location' => 'Chicago, IL',
                            'category' => 'logistics',
                            'rating' => 4,
                            'testimonial' => 'The cold chain monitoring feature gave us peace of mind. We\'ve reduced product waste by 50% and achieved 100% FDA compliance. The real-time alerts are invaluable.',
                            'keyBenefit' => '50% less waste',
                            'date' => 'January 10, 2024',
                            'authorImage' => 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop'
                        ]
                    ],
                    'bottomCta' => [
                        'show' => true,
                        'text' => 'Read More Testimonials',
                        'url' => '/testimonials',
                        'ariaLabel' => 'View all client testimonials'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 27,
                'section_key' => 'testimonials',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'CUSTOMER STORIES'
                    ],
                    'heading' => [
                        'line1' => 'Trusted by',
                        'highlighted' => '5000+ Businesses'
                    ],
                    'description' => 'Don\'t just take our word for it. Here\'s what our customers have to say about their experience.',
                    'stats' => [
                        'show' => true,
                        'items' => [
                            ['value' => '5000+', 'label' => 'Happy Clients'],
                            ['value' => '98%', 'label' => 'Satisfaction Rate'],
                            ['value' => '50M+', 'label' => 'Orders Processed'],
                            ['value' => '24/7', 'label' => 'Support Available']
                        ]
                    ],
                    'testimonials' => [
                        [
                            'id' => 1,
                            'authorName' => 'Sarah Johnson',
                            'authorTitle' => 'Supply Chain Director',
                            'companyName' => 'TechLogix Solutions',
                            'companyInitials' => 'TL',
                            'location' => 'San Francisco, CA',
                            'rating' => 5,
                            'testimonial' => 'This platform transformed our inventory management. We\'ve seen a 40% reduction in stockouts and our fulfillment accuracy is now 99.9%. The real-time tracking feature alone saved us countless hours of manual work.',
                            'date' => 'March 15, 2024',
                            'authorImage' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
                        ],
                        [
                            'id' => 2,
                            'authorName' => 'Michael Chen',
                            'authorTitle' => 'Operations Manager',
                            'companyName' => 'AutoParts Global',
                            'companyInitials' => 'AP',
                            'location' => 'Detroit, MI',
                            'rating' => 5,
                            'testimonial' => 'The automated reordering system has been a game-changer. We reduced our inventory carrying costs by 30% and improved delivery times significantly. Exceptional support team!',
                            'date' => 'February 28, 2024',
                            'authorImage' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
                        ],
                        [
                            'id' => 3,
                            'authorName' => 'Emily Rodriguez',
                            'authorTitle' => 'Logistics Director',
                            'companyName' => 'FreshFoods Co',
                            'companyInitials' => 'FF',
                            'location' => 'Chicago, IL',
                            'rating' => 4,
                            'testimonial' => 'The cold chain monitoring feature gave us peace of mind. We\'ve reduced product waste by 50% and achieved 100% FDA compliance. The real-time alerts are invaluable.',
                            'date' => 'January 10, 2024',
                            'authorImage' => 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop'
                        ],
                        [
                            'id' => 4,
                            'authorName' => 'David Kim',
                            'authorTitle' => 'CEO',
                            'companyName' => 'MedSupply Inc',
                            'companyInitials' => 'MS',
                            'location' => 'Boston, MA',
                            'rating' => 5,
                            'testimonial' => 'Implementing this solution was the best decision we made this year. Our supply chain visibility is now unmatched, and our customers love the real-time tracking.',
                            'date' => 'December 5, 2023',
                            'authorImage' => 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop'
                        ]
                    ],
                    'bottomCta' => [
                        'show' => true,
                        'text' => 'Read More Testimonials',
                        'url' => '/testimonials',
                        'ariaLabel' => 'View all customer testimonials'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 28,
                'section_key' => 'testimonials',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Pricing Plans Section
            [
                'id' => 29,
                'section_key' => 'pricingPlans',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => [
                        'show' => true,
                        'showPulse' => true,
                        'text' => 'PRICING PLANS'
                    ],
                    'heading' => [
                        'prefix' => 'Simple, Transparent',
                        'highlightedText' => 'Pricing',
                        'suffix' => ''
                    ],
                    'description' => 'Choose the perfect plan for your business needs. No hidden fees, no surprises.',
                    'saveBadge' => [
                        'text' => 'Save 20%'
                    ],
                    'plans' => [
                        [
                            'id' => 'starter',
                            'name' => 'Starter',
                            'description' => 'Perfect for small businesses',
                            'priceMonthly' => 29,
                            'priceAnnual' => 290,
                            'popular' => false,
                            'ctaText' => 'Get Started',
                            'features' => [
                                ['text' => 'Up to 1,000 orders/month', 'included' => true],
                                ['text' => 'Basic inventory tracking', 'included' => true],
                                ['text' => 'Email support', 'included' => true],
                                ['text' => 'Real-time analytics', 'included' => false],
                                ['text' => 'API access', 'included' => false],
                                ['text' => 'Dedicated account manager', 'included' => false]
                            ]
                        ],
                        [
                            'id' => 'professional',
                            'name' => 'Professional',
                            'description' => 'Best for growing businesses',
                            'priceMonthly' => 79,
                            'priceAnnual' => 790,
                            'popular' => true,
                            'ctaText' => 'Get Started',
                            'features' => [
                                ['text' => 'Up to 10,000 orders/month', 'included' => true],
                                ['text' => 'Advanced inventory tracking', 'included' => true],
                                ['text' => 'Priority email & chat support', 'included' => true],
                                ['text' => 'Real-time analytics', 'included' => true],
                                ['text' => 'API access', 'included' => true],
                                ['text' => 'Dedicated account manager', 'included' => false]
                            ]
                        ],
                        [
                            'id' => 'business',
                            'name' => 'Business',
                            'description' => 'For scaling enterprises',
                            'priceMonthly' => 199,
                            'priceAnnual' => 1990,
                            'popular' => false,
                            'ctaText' => 'Get Started',
                            'features' => [
                                ['text' => 'Up to 50,000 orders/month', 'included' => true],
                                ['text' => 'Advanced inventory tracking', 'included' => true],
                                ['text' => '24/7 phone & chat support', 'included' => true],
                                ['text' => 'Real-time analytics + forecasting', 'included' => true],
                                ['text' => 'Full API access', 'included' => true],
                                ['text' => 'Dedicated account manager', 'included' => true]
                            ]
                        ],
                        [
                            'id' => 'enterprise',
                            'name' => 'Enterprise',
                            'description' => 'Custom solutions',
                            'priceMonthly' => null,
                            'priceAnnual' => null,
                            'popular' => false,
                            'ctaText' => 'Contact Sales',
                            'features' => [
                                ['text' => 'Unlimited orders', 'included' => true],
                                ['text' => 'Custom inventory solutions', 'included' => true],
                                ['text' => '24/7 priority support', 'included' => true],
                                ['text' => 'Custom analytics & reporting', 'included' => true],
                                ['text' => 'Full API access + webhooks', 'included' => true],
                                ['text' => 'Dedicated success team', 'included' => true]
                            ]
                        ]
                    ],
                    'enterprise' => [
                        'show' => true,
                        'title' => 'Need a Custom Solution?',
                        'description' => 'Get tailored pricing and features for your specific business requirements.',
                        'features' => [
                            'Custom integrations with your existing systems',
                            'SLA guarantees with 99.9% uptime',
                            'On-premise deployment options',
                            'Dedicated support team and training'
                        ],
                        'logos' => ['Company A', 'Company B', 'Company C', 'Company D'],
                        'link' => '/contact',
                        'linkText' => 'Contact our sales team'
                    ],
                    'faqLink' => [
                        'show' => true,
                        'text' => 'Have questions about pricing?',
                        'linkText' => 'Visit our FAQ',
                        'url' => '/faq'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 30,
                'section_key' => 'pricingPlans',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'SIMPLE PRICING'
                    ],
                    'heading' => [
                        'line1' => 'Choose the',
                        'highlighted' => 'Perfect Plan'
                    ],
                    'description' => 'Flexible pricing options for businesses of all sizes. Start with a free trial, no credit card required.',
                    'saveBadge' => [
                        'text' => 'Save up to 20% with annual billing'
                    ],
                    'plans' => [
                        [
                            'id' => 'starter',
                            'name' => 'Starter',
                            'description' => 'For small businesses',
                            'priceMonthly' => 29,
                            'priceAnnual' => 290,
                            'popular' => false,
                            'trial' => '14-day free trial',
                            'guarantee' => '30-day money back guarantee',
                            'ctaText' => 'Start Free Trial',
                            'link' => '/signup',
                            'features' => [
                                ['text' => 'Up to 1,000 orders/month', 'included' => true],
                                ['text' => 'Basic inventory tracking', 'included' => true],
                                ['text' => 'Email support', 'included' => true],
                                ['text' => 'Real-time analytics', 'included' => false],
                                ['text' => 'API access', 'included' => false, 'tooltip' => 'Available on higher plans'],
                                ['text' => 'Dedicated support', 'included' => false]
                            ]
                        ],
                        [
                            'id' => 'professional',
                            'name' => 'Professional',
                            'description' => 'For growing businesses',
                            'priceMonthly' => 79,
                            'priceAnnual' => 790,
                            'popular' => true,
                            'trial' => '14-day free trial',
                            'guarantee' => '30-day money back guarantee',
                            'ctaText' => 'Start Free Trial',
                            'link' => '/signup',
                            'features' => [
                                ['text' => 'Up to 10,000 orders/month', 'included' => true],
                                ['text' => 'Advanced inventory tracking', 'included' => true],
                                ['text' => 'Priority email & chat support', 'included' => true],
                                ['text' => 'Real-time analytics', 'included' => true],
                                ['text' => 'API access', 'included' => true],
                                ['text' => 'Dedicated support', 'included' => false, 'tooltip' => 'Upgrade to Business']
                            ]
                        ],
                        [
                            'id' => 'business',
                            'name' => 'Business',
                            'description' => 'For large enterprises',
                            'priceMonthly' => 199,
                            'priceAnnual' => 1990,
                            'popular' => false,
                            'trial' => '14-day free trial',
                            'guarantee' => '30-day money back guarantee',
                            'ctaText' => 'Contact Sales',
                            'link' => '/contact',
                            'features' => [
                                ['text' => 'Unlimited orders', 'included' => true],
                                ['text' => 'Enterprise inventory suite', 'included' => true],
                                ['text' => '24/7 phone & chat support', 'included' => true],
                                ['text' => 'Advanced analytics + AI', 'included' => true],
                                ['text' => 'Full API + webhooks', 'included' => true],
                                ['text' => 'Dedicated account manager', 'included' => true]
                            ]
                        ]
                    ],
                    'comparison' => [
                        'show' => true,
                        'title' => 'Feature Comparison',
                        'features' => [
                            ['name' => 'Orders per month', 'values' => ['1,000', '10,000', 'Unlimited']],
                            ['name' => 'Inventory tracking', 'values' => ['Basic', 'Advanced', 'Enterprise']],
                            ['name' => 'Support', 'values' => ['Email', 'Priority Chat', '24/7 Phone']],
                            ['name' => 'Analytics', 'values' => [false, true, 'Advanced + AI']],
                            ['name' => 'API Access', 'values' => [false, true, 'Full + Webhooks']],
                            ['name' => 'Dedicated Manager', 'values' => [false, false, true]]
                        ]
                    ],
                    'guarantee' => [
                        'show' => true,
                        'text' => '30-day money-back guarantee. No questions asked.'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 31,
                'section_key' => 'pricingPlans',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'PRICING PLANS'
                    ],
                    'heading' => [
                        'prefix' => 'Simple, Transparent',
                        'highlightedText' => 'Pricing',
                        'suffix' => 'for Every Business'
                    ],
                    'description' => 'Choose the plan that fits your needs. All plans include a 14-day free trial.',
                    'saveBadge' => [
                        'text' => 'Save 20%'
                    ],
                    'plans' => [
                        [
                            'id' => 'starter',
                            'name' => 'Starter',
                            'description' => 'Perfect for small businesses',
                            'icon' => 'starter',
                            'priceMonthly' => 29,
                            'priceAnnual' => 290,
                            'popular' => false,
                            'trial' => '14-day free trial',
                            'ctaText' => 'Start Free Trial',
                            'link' => '/signup',
                            'features' => [
                                ['text' => 'Up to 1,000 orders/month', 'included' => true],
                                ['text' => 'Basic inventory tracking', 'included' => true],
                                ['text' => 'Email support', 'included' => true],
                                ['text' => 'Real-time analytics', 'included' => false],
                                ['text' => 'API access', 'included' => false],
                                ['text' => 'Dedicated account manager', 'included' => false]
                            ]
                        ],
                        [
                            'id' => 'professional',
                            'name' => 'Professional',
                            'description' => 'Best for growing businesses',
                            'icon' => 'professional',
                            'priceMonthly' => 79,
                            'priceAnnual' => 790,
                            'popular' => true,
                            'trial' => '14-day free trial',
                            'ctaText' => 'Start Free Trial',
                            'link' => '/signup',
                            'features' => [
                                ['text' => 'Up to 10,000 orders/month', 'included' => true],
                                ['text' => 'Advanced inventory tracking', 'included' => true],
                                ['text' => 'Priority email & chat support', 'included' => true],
                                ['text' => 'Real-time analytics + reports', 'included' => true],
                                ['text' => 'API access', 'included' => true],
                                ['text' => 'Dedicated account manager', 'included' => false]
                            ]
                        ],
                        [
                            'id' => 'business',
                            'name' => 'Business',
                            'description' => 'For large enterprises',
                            'icon' => 'business',
                            'priceMonthly' => 199,
                            'priceAnnual' => 1990,
                            'popular' => false,
                            'trial' => '14-day free trial',
                            'ctaText' => 'Contact Sales',
                            'link' => '/contact',
                            'features' => [
                                ['text' => 'Unlimited orders', 'included' => true],
                                ['text' => 'Enterprise inventory suite', 'included' => true],
                                ['text' => '24/7 phone & chat support', 'included' => true],
                                ['text' => 'Advanced analytics + AI', 'included' => true],
                                ['text' => 'Full API + webhooks', 'included' => true],
                                ['text' => 'Dedicated success team', 'included' => true]
                            ]
                        ]
                    ],
                    'enterprise' => [
                        'show' => true,
                        'title' => 'Need a Custom Solution?',
                        'description' => 'Get tailored pricing and features for your specific business requirements.',
                        'linkText' => 'Contact Our Sales Team',
                        'link' => '/contact'
                    ],
                    'guarantee' => [
                        'show' => true,
                        'text' => '30-day money-back guarantee. No questions asked.'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 32,
                'section_key' => 'pricingPlans',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // FAQ Section
            [
                'id' => 33,
                'section_key' => 'faq',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => [
                        'show' => true,
                        'showPulse' => true,
                        'text' => 'FAQ'
                    ],
                    'heading' => [
                        'prefix' => 'Frequently Asked',
                        'highlightedText' => 'Questions',
                        'suffix' => ''
                    ],
                    'description' => 'Find answers to common questions about our platform, pricing, and services.',
                    'search' => [
                        'show' => true,
                        'placeholder' => 'Search FAQs...'
                    ],
                    'categories' => [
                        ['id' => 'general', 'name' => 'General'],
                        ['id' => 'pricing', 'name' => 'Pricing'],
                        ['id' => 'technical', 'name' => 'Technical'],
                        ['id' => 'account', 'name' => 'Account']
                    ],
                    'faqs' => [
                        [
                            'id' => 1,
                            'question' => 'What is your platform?',
                            'answer' => 'Our platform is a comprehensive inventory management and logistics solution that helps businesses track stock, manage orders, and optimize their supply chain in real-time.',
                            'category' => 'general'
                        ],
                        [
                            'id' => 2,
                            'question' => 'How much does it cost?',
                            'answer' => 'We offer flexible pricing plans starting at $29/month for small businesses. Visit our pricing page for detailed information about all plans and features.',
                            'category' => 'pricing',
                            'link' => '/pricing',
                            'linkText' => 'View pricing plans'
                        ],
                        [
                            'id' => 3,
                            'question' => 'Is there a free trial?',
                            'answer' => 'Yes, we offer a 14-day free trial on all our plans. No credit card required to start your trial.',
                            'category' => 'pricing'
                        ],
                        [
                            'id' => 4,
                            'question' => 'Can I cancel anytime?',
                            'answer' => 'Absolutely! You can cancel your subscription at any time with no hidden fees or long-term contracts.',
                            'category' => 'account'
                        ],
                        [
                            'id' => 5,
                            'question' => 'What kind of support do you offer?',
                            'answer' => 'We offer 24/7 email and chat support for all plans. Professional and Business plans include priority phone support and dedicated account managers.',
                            'category' => 'technical'
                        ],
                        [
                            'id' => 6,
                            'question' => 'Is my data secure?',
                            'answer' => 'Yes, we use bank-level 256-bit encryption and are SOC2 Type II compliant. Your data is always secure with us.',
                            'category' => 'technical'
                        ]
                    ],
                    'contact' => [
                        'show' => true,
                        'title' => 'Still have questions?',
                        'description' => 'Can\'t find the answer you\'re looking for? Please chat with our friendly team.',
                        'email' => 'support@example.com',
                        'phone' => '+1 (555) 123-4567',
                        'chat' => true,
                        'responseTime' => 'Typically responds within 5 minutes'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 34,
                'section_key' => 'faq',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'FAQ'
                    ],
                    'heading' => [
                        'line1' => 'Got Questions?',
                        'highlighted' => 'We\'ve Got Answers'
                    ],
                    'description' => 'Find answers to common questions about our platform, features, and services.',
                    'search' => [
                        'show' => true,
                        'placeholder' => 'Search FAQs...'
                    ],
                    'categories' => [
                        ['id' => 'general', 'name' => 'General', 'icon' => 'general'],
                        ['id' => 'account', 'name' => 'Account', 'icon' => 'account'],
                        ['id' => 'features', 'name' => 'Features', 'icon' => 'features'],
                        ['id' => 'support', 'name' => 'Support', 'icon' => 'support'],
                        ['id' => 'billing', 'name' => 'Billing', 'icon' => 'billing'],
                        ['id' => 'tutorial', 'name' => 'Tutorials', 'icon' => 'tutorial']
                    ],
                    'faqs' => [
                        [
                            'id' => 1,
                            'question' => 'What is your platform?',
                            'answer' => 'Our platform is a comprehensive inventory management and logistics solution that helps businesses track stock, manage orders, and optimize supply chains in real-time.',
                            'category' => 'general'
                        ],
                        [
                            'id' => 2,
                            'question' => 'How do I create an account?',
                            'answer' => 'Click the \'Sign Up\' button on our homepage, fill in your details, and follow the verification steps. It takes less than 5 minutes.',
                            'category' => 'account'
                        ],
                        [
                            'id' => 3,
                            'question' => 'What features are included?',
                            'answer' => 'Features include real-time tracking, automated reordering, multi-warehouse support, barcode scanning, analytics dashboard, and API access.',
                            'category' => 'features'
                        ],
                        [
                            'id' => 4,
                            'question' => 'Is there a free trial?',
                            'answer' => 'Yes, we offer a 14-day free trial on all plans. No credit card required to start.',
                            'category' => 'billing'
                        ],
                        [
                            'id' => 5,
                            'question' => 'What kind of support do you offer?',
                            'answer' => 'We offer 24/7 email and chat support. Professional and Business plans include priority phone support.',
                            'category' => 'support'
                        ],
                        [
                            'id' => 6,
                            'question' => 'Can I cancel anytime?',
                            'answer' => 'Yes, you can cancel your subscription at any time with no hidden fees or long-term contracts.',
                            'category' => 'billing'
                        ],
                        [
                            'id' => 7,
                            'question' => 'How do I get started?',
                            'answer' => 'Sign up for a free trial, complete the onboarding process, and our team will guide you through setup.',
                            'category' => 'tutorial'
                        ],
                        [
                            'id' => 8,
                            'question' => 'Is my data secure?',
                            'answer' => 'Yes, we use bank-level 256-bit encryption and are SOC2 Type II compliant.',
                            'category' => 'security'
                        ]
                    ],
                    'helpCenter' => [
                        'show' => true,
                        'text' => 'Visit our Help Center for detailed guides',
                        'url' => '/help'
                    ],
                    'contact' => [
                        'show' => true,
                        'email' => 'support@example.com',
                        'emailResponseTime' => 'Response within 24 hours',
                        'phone' => '+1 (555) 123-4567',
                        'phoneHours' => 'Mon-Fri, 9am-6pm EST',
                        'chat' => true,
                        'chatHours' => '24/7 Live Support'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 35,
                'section_key' => 'faq',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'FAQ'
                    ],
                    'heading' => [
                        'prefix' => 'Frequently Asked',
                        'highlightedText' => 'Questions',
                        'suffix' => ''
                    ],
                    'description' => 'Find answers to common questions about our platform, features, and services.',
                    'search' => [
                        'show' => true,
                        'placeholder' => 'Search FAQs...',
                        'popularSearches' => ['pricing', 'free trial', 'integration', 'API', 'security']
                    ],
                    'categories' => [
                        ['id' => 'general', 'name' => 'General', 'icon' => 'general'],
                        ['id' => 'account', 'name' => 'Account', 'icon' => 'account'],
                        ['id' => 'features', 'name' => 'Features', 'icon' => 'features'],
                        ['id' => 'support', 'name' => 'Support', 'icon' => 'support'],
                        ['id' => 'billing', 'name' => 'Billing', 'icon' => 'billing'],
                        ['id' => 'tutorial', 'name' => 'Tutorials', 'icon' => 'tutorial']
                    ],
                    'faqs' => [
                        [
                            'id' => 1,
                            'question' => 'What is your platform?',
                            'answer' => 'Our platform is a comprehensive inventory management and logistics solution that helps businesses track stock, manage orders, and optimize supply chains in real-time.',
                            'category' => 'general',
                            'categoryName' => 'General',
                            'relatedLinks' => [
                                ['text' => 'Platform Overview', 'url' => '/features'],
                                ['text' => 'Getting Started Guide', 'url' => '/docs/getting-started']
                            ]
                        ],
                        [
                            'id' => 2,
                            'question' => 'How do I create an account?',
                            'answer' => 'Click the \'Sign Up\' button on our homepage, fill in your details, and follow the verification steps. It takes less than 5 minutes.',
                            'category' => 'account',
                            'categoryName' => 'Account',
                            'videoUrl' => 'https://youtube.com/watch?v=example'
                        ],
                        [
                            'id' => 3,
                            'question' => 'What features are included?',
                            'answer' => 'Features include real-time tracking, automated reordering, multi-warehouse support, barcode scanning, analytics dashboard, and API access.',
                            'category' => 'features',
                            'categoryName' => 'Features',
                            'relatedLinks' => [
                                ['text' => 'All Features', 'url' => '/features'],
                                ['text' => 'API Documentation', 'url' => '/docs/api']
                            ]
                        ],
                        [
                            'id' => 4,
                            'question' => 'Is there a free trial?',
                            'answer' => 'Yes, we offer a 14-day free trial on all plans. No credit card required to start.',
                            'category' => 'billing',
                            'categoryName' => 'Billing'
                        ],
                        [
                            'id' => 5,
                            'question' => 'What kind of support do you offer?',
                            'answer' => 'We offer 24/7 email and chat support. Professional and Business plans include priority phone support.',
                            'category' => 'support',
                            'categoryName' => 'Support'
                        ],
                        [
                            'id' => 6,
                            'question' => 'Can I cancel anytime?',
                            'answer' => 'Yes, you can cancel your subscription at any time with no hidden fees or long-term contracts.',
                            'category' => 'billing',
                            'categoryName' => 'Billing'
                        ],
                        [
                            'id' => 7,
                            'question' => 'How do I get started?',
                            'answer' => 'Sign up for a free trial, complete the onboarding process, and our team will guide you through setup.',
                            'category' => 'tutorial',
                            'categoryName' => 'Tutorials',
                            'videoUrl' => 'https://youtube.com/watch?v=example2'
                        ],
                        [
                            'id' => 8,
                            'question' => 'Is my data secure?',
                            'answer' => 'Yes, we use bank-level 256-bit encryption and are SOC2 Type II compliant.',
                            'category' => 'security',
                            'categoryName' => 'Security',
                            'relatedLinks' => [
                                ['text' => 'Security Overview', 'url' => '/security'],
                                ['text' => 'Privacy Policy', 'url' => '/privacy']
                            ]
                        ]
                    ],
                    'contact' => [
                        'show' => true,
                        'email' => 'support@example.com',
                        'phone' => '+1 (555) 123-4567',
                        'chat' => true,
                        'responseTime' => 'Average response time: < 5 minutes'
                    ],
                    'feedback' => [
                        'show' => true,
                        'text' => 'Help us improve this page',
                        'url' => '/feedback'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 36,
                'section_key' => 'faq',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Contact Section
            [
                'id' => 37,
                'section_key' => 'contact',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => [
                        'show' => true,
                        'showPulse' => true,
                        'text' => 'GET IN TOUCH'
                    ],
                    'heading' => [
                        'prefix' => 'Let\'s Start a',
                        'highlightedText' => 'Conversation',
                        'suffix' => ''
                    ],
                    'description' => 'Have questions about our platform? We\'re here to help. Reach out to us and we\'ll get back to you promptly.',
                    'contactInfo' => [
                        'email' => [
                            'description' => 'Get back within 24 hours',
                            'address' => 'support@inventorylogistics.com'
                        ],
                        'phone' => [
                            'description' => 'Mon-Fri, 9am-6pm EST',
                            'number' => '+1 (555) 123-4567'
                        ],
                        'office' => [
                            'description' => 'Main office location',
                            'address' => '123 Business Ave, Suite 100, New York, NY 10001',
                            'image' => 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop'
                        ],
                        'hours' => [
                            ['day' => 'Monday - Friday', 'time' => '9:00 - 18:00'],
                            ['day' => 'Saturday', 'time' => '10:00 - 14:00'],
                            ['day' => 'Sunday', 'time' => 'Closed']
                        ]
                    ],
                    'map' => [
                        'show' => true,
                        'embedUrl' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316bbafd17%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1644262072188!5m2!1sen!2us'
                    ],
                    'form' => [
                        'title' => 'Send Us a Message',
                        'successMessage' => 'Thank you for your message! We\'ll get back to you soon.',
                        'submitText' => 'Send Message',
                        'privacyText' => 'By submitting this form, you agree to our ',
                        'fields' => [
                            'name' => [
                                'label' => 'Your Name',
                                'placeholder' => 'John Doe',
                                'required' => true
                            ],
                            'email' => [
                                'label' => 'Email Address',
                                'placeholder' => 'john@company.com',
                                'required' => true
                            ],
                            'company' => [
                                'label' => 'Company Name',
                                'placeholder' => 'Your Company',
                                'required' => false
                            ],
                            'message' => [
                                'label' => 'Your Message',
                                'placeholder' => 'How can we help you?',
                                'required' => true
                            ]
                        ]
                    ],
                    'links' => [
                        'privacy' => '/privacy'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 38,
                'section_key' => 'contact',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => [
                        'show' => true,
                        'showPulse' => true,
                        'text' => 'GET IN TOUCH'
                    ],
                    'heading' => [
                        'prefix' => 'Let\'s Start a',
                        'highlightedText' => 'Conversation',
                        'suffix' => ''
                    ],
                    'description' => 'Have questions about our platform? We\'re here to help. Reach out to us and we\'ll get back to you promptly.',
                    'contactInfo' => [
                        'email' => [
                            'description' => 'Get back within 24 hours',
                            'address' => 'support@inventorylogistics.com'
                        ],
                        'phone' => [
                            'description' => 'Mon-Fri, 9am-6pm EST',
                            'number' => '+1 (555) 123-4567'
                        ],
                        'office' => [
                            'description' => 'Main office location',
                            'address' => '123 Business Ave, Suite 100, New York, NY 10001',
                            'image' => 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop'
                        ],
                        'hours' => [
                            ['day' => 'Monday - Friday', 'time' => '9:00 - 18:00'],
                            ['day' => 'Saturday', 'time' => '10:00 - 14:00'],
                            ['day' => 'Sunday', 'time' => 'Closed']
                        ]
                    ],
                    'map' => [
                        'show' => true,
                        'embedUrl' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316bbafd17%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1644262072188!5m2!1sen!2us'
                    ],
                    'form' => [
                        'title' => 'Send Us a Message',
                        'successMessage' => 'Thank you for your message! We\'ll get back to you soon.',
                        'submitText' => 'Send Message',
                        'privacyText' => 'By submitting this form, you agree to our ',
                        'fields' => [
                            'name' => [
                                'label' => 'Your Name',
                                'placeholder' => 'John Doe',
                                'required' => true
                            ],
                            'email' => [
                                'label' => 'Email Address',
                                'placeholder' => 'john@company.com',
                                'required' => true
                            ],
                            'company' => [
                                'label' => 'Company Name',
                                'placeholder' => 'Your Company',
                                'required' => false
                            ],
                            'message' => [
                                'label' => 'Your Message',
                                'placeholder' => 'How can we help you?',
                                'required' => true
                            ]
                        ]
                    ],
                    'links' => [
                        'privacy' => '/privacy'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 39,
                'section_key' => 'contact',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'CONTACT US'
                    ],
                    'heading' => [
                        'prefix' => 'We\'re Here to',
                        'highlightedText' => 'Help',
                        'suffix' => ''
                    ],
                    'description' => 'Have questions about our platform? Our team is ready to assist you.',
                    'hero' => [
                        'title' => 'We\'d Love to Hear From You',
                        'subtitle' => 'Our team is ready to help with any questions you might have.',
                        'responseTime' => 'Average response: 2 hours',
                        'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop'
                    ],
                    'contactInfo' => [
                        'email' => 'support@inventorylogistics.com',
                        'phone' => '+1 (555) 123-4567'
                    ],
                    'office' => [
                        'address' => '123 Business Avenue, Suite 100, New York, NY 10001',
                        'mapsUrl' => 'https://maps.google.com/?q=123+Business+Avenue+New+York+NY',
                        'image' => 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop'
                    ],
                    'officeHours' => [
                        ['day' => 'Monday - Friday', 'time' => '9:00 - 18:00'],
                        ['day' => 'Saturday', 'time' => '10:00 - 14:00'],
                        ['day' => 'Sunday', 'time' => 'Closed']
                    ],
                    'map' => [
                        'show' => true,
                        'embedUrl' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316bbafd17%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1644262072188!5m2!1sen!2us'
                    ],
                    'social' => [
                        'show' => true,
                        'links' => [
                            ['label' => 'Facebook', 'url' => 'https://facebook.com', 'icon' => 'f'],
                            ['label' => 'Twitter', 'url' => 'https://twitter.com', 'icon' => 't'],
                            ['label' => 'LinkedIn', 'url' => 'https://linkedin.com', 'icon' => 'in'],
                            ['label' => 'Instagram', 'url' => 'https://instagram.com', 'icon' => 'ig']
                        ]
                    ],
                    'form' => [
                        'successMessage' => 'Thank you for your message! We\'ll get back to you soon.'
                    ],
                    'links' => [
                        'privacy' => '/privacy'
                    ],
                    'trustBadges' => [
                        'show' => true
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 40,
                'section_key' => 'contact',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // About Us Section
            [
                'id' => 41,
                'section_key' => 'aboutUs',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => [
                        'show' => true,
                        'showPulse' => true,
                        'text' => 'ABOUT US'
                    ],
                    'heading' => [
                        'prefix' => 'We\'re',
                        'highlightedText' => 'Transforming',
                        'suffix' => 'Supply Chain Management'
                    ],
                    'description' => 'Learn about our mission, values, and the team behind our innovative logistics platform.',
                    'image' => [
                        'src' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
                        'alt' => 'Our team collaborating'
                    ],
                    'experience' => [
                        'show' => true,
                        'years' => '10',
                        'text' => 'Years of Excellence'
                    ],
                    'content' => [
                        'title' => 'We\'re on a Mission to Transform Supply Chains',
                        'paragraphs' => [
                            'Founded in 2020, our platform has grown from a small team of logistics enthusiasts to a comprehensive solution serving businesses worldwide. Our journey began with a simple observation: supply chain management was too complex, too fragmented, and too inaccessible.',
                            'Today, we\'re proud to serve over 5000 companies across 50+ industries, helping them streamline operations, reduce costs, and improve customer satisfaction.'
                        ],
                        'points' => [
                            '5000+ satisfied customers',
                            '99.9% uptime guarantee',
                            '24/7 expert support',
                            'Enterprise-grade security'
                        ],
                        'cta' => [
                            'show' => true,
                            'text' => 'Learn More About Us',
                            'url' => '/about'
                        ]
                    ],
                    'stats' => [
                        'show' => true,
                        'items' => [
                            ['value' => '5000+', 'label' => 'Happy Clients'],
                            ['value' => '50M+', 'label' => 'Orders Processed'],
                            ['value' => '98%', 'label' => 'Customer Satisfaction'],
                            ['value' => '50+', 'label' => 'Countries Served']
                        ]
                    ],
                    'values' => [
                        'show' => true,
                        'title' => 'Our Core Values',
                        'items' => [
                            [
                                'title' => 'Innovation',
                                'description' => 'Constantly pushing boundaries to deliver cutting-edge solutions.',
                                'icon' => 'lightning'
                            ],
                            [
                                'title' => 'Customer First',
                                'description' => 'Our customers\' success is our top priority.',
                                'icon' => 'heart'
                            ],
                            [
                                'title' => 'Integrity',
                                'description' => 'Transparent, honest, and ethical in everything we do.',
                                'icon' => 'shield'
                            ],
                            [
                                'title' => 'Excellence',
                                'description' => 'Striving for the highest quality in all our services.',
                                'icon' => 'star'
                            ]
                        ]
                    ],
                    'team' => [
                        'show' => true,
                        'title' => 'Meet Our Leadership Team',
                        'description' => 'The passionate people behind our success',
                        'members' => [
                            [
                                'name' => 'Sarah Johnson',
                                'position' => 'CEO & Founder',
                                'image' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop'
                            ],
                            [
                                'name' => 'Michael Chen',
                                'position' => 'CTO',
                                'image' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'
                            ],
                            [
                                'name' => 'Emily Rodriguez',
                                'position' => 'Head of Operations',
                                'image' => 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop'
                            ],
                            [
                                'name' => 'David Kim',
                                'position' => 'Sales Director',
                                'image' => 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop'
                            ]
                        ]
                    ],
                    'bottomCta' => [
                        'show' => true,
                        'text' => 'Join Our Journey',
                        'url' => '/contact',
                        'ariaLabel' => 'Contact us to learn more'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 42,
                'section_key' => 'aboutUs',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'ABOUT US'
                    ],
                    'heading' => [
                        'line1' => 'We\'re',
                        'highlighted' => 'Transforming Logistics'
                    ],
                    'description' => 'Learn about our journey, mission, and the team behind our innovative platform.',
                    'video' => [
                        'url' => 'https://www.youtube.com/embed/dQw4w9WgXcQ',
                        'title' => 'About Our Company'
                    ],
                    'showcase' => [
                        'show' => true,
                        'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=600&fit=crop',
                        'alt' => 'Our team working together',
                        'duration' => '2:30',
                        'caption' => 'Watch our story in 2 minutes'
                    ],
                    'mission' => [
                        'title' => 'Our Mission',
                        'description' => 'To empower businesses of all sizes with intelligent, accessible supply chain solutions that drive efficiency, reduce costs, and foster sustainable growth.'
                    ],
                    'vision' => [
                        'title' => 'Our Vision',
                        'description' => 'To create a world where supply chain management is seamless, transparent, and accessible to every business, enabling them to focus on what they do best.'
                    ],
                    'timeline' => [
                        'show' => true,
                        'title' => 'Our Journey',
                        'events' => [
                            [
                                'year' => '2020',
                                'title' => 'Company Founded',
                                'description' => 'Started with a vision to simplify supply chain management for businesses of all sizes.'
                            ],
                            [
                                'year' => '2021',
                                'title' => 'Platform Launch',
                                'description' => 'Launched our first version of the inventory management platform.'
                            ],
                            [
                                'year' => '2022',
                                'title' => 'Global Expansion',
                                'description' => 'Expanded operations to serve customers in 50+ countries worldwide.'
                            ],
                            [
                                'year' => '2023',
                                'title' => '5000+ Customers',
                                'description' => 'Reached milestone of serving over 5000 satisfied businesses globally.'
                            ]
                        ]
                    ],
                    'values' => [
                        'show' => true,
                        'title' => 'What Drives Us',
                        'description' => 'The principles that guide everything we do',
                        'items' => [
                            [
                                'title' => 'Innovation',
                                'icon' => 'lightning',
                                'description' => 'We constantly push boundaries to deliver cutting-edge solutions that solve real-world problems.',
                                'points' => [
                                    'Continuous product improvement',
                                    'Embracing new technologies',
                                    'Customer-driven innovation'
                                ]
                            ],
                            [
                                'title' => 'Customer First',
                                'icon' => 'heart',
                                'description' => 'Our customers\' success is our top priority in everything we do.',
                                'points' => [
                                    '24/7 dedicated support',
                                    'Regular feedback sessions',
                                    'Tailored solutions'
                                ]
                            ],
                            [
                                'title' => 'Integrity',
                                'icon' => 'shield',
                                'description' => 'We operate with transparency, honesty, and ethical practices at all times.',
                                'points' => [
                                    'Transparent pricing',
                                    'Data privacy protection',
                                    'Honest communication'
                                ]
                            ],
                            [
                                'title' => 'Excellence',
                                'icon' => 'star',
                                'description' => 'We strive for the highest quality in all our services and products.',
                                'points' => [
                                    'Rigorous testing standards',
                                    'Continuous improvement',
                                    'Quality certifications'
                                ]
                            ]
                        ]
                    ],
                    'team' => [
                        'show' => true,
                        'title' => 'Meet Our Leadership',
                        'description' => 'Experienced leaders dedicated to your success',
                        'members' => [
                            [
                                'name' => 'Sarah Johnson',
                                'position' => 'CEO & Founder',
                                'image' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop'
                            ],
                            [
                                'name' => 'Michael Chen',
                                'position' => 'CTO',
                                'image' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'
                            ],
                            [
                                'name' => 'Emily Rodriguez',
                                'position' => 'Head of Operations',
                                'image' => 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop'
                            ],
                            [
                                'name' => 'David Kim',
                                'position' => 'Sales Director',
                                'image' => 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop'
                            ]
                        ]
                    ],
                    'stats' => [
                        'show' => true,
                        'items' => [
                            ['value' => '5000+', 'label' => 'Happy Clients', 'icon' => 'users'],
                            ['value' => '50M+', 'label' => 'Orders Processed', 'icon' => 'cube'],
                            ['value' => '98%', 'label' => 'Satisfaction', 'icon' => 'star'],
                            ['value' => '50+', 'label' => 'Countries', 'icon' => 'globe']
                        ]
                    ],
                    'bottomCta' => [
                        'show' => true,
                        'text' => 'Join Our Journey',
                        'url' => '/contact',
                        'ariaLabel' => 'Contact us to learn more'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 43,
                'section_key' => 'aboutUs',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'ABOUT US'
                    ],
                    'heading' => [
                        'prefix' => 'We\'re on a',
                        'highlightedText' => 'Mission',
                        'suffix' => 'to Transform Logistics'
                    ],
                    'description' => 'Learn about our journey, values, and the team behind our innovative platform.',
                    'hero' => [
                        'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=600&fit=crop',
                        'alt' => 'Our team working together',
                        'title' => 'We\'re on a Mission',
                        'subtitle' => 'To transform supply chain management for businesses worldwide'
                    ],
                    'floatingStats' => [
                        'show' => true,
                        'items' => [
                            ['value' => '5000+', 'label' => 'Happy Clients'],
                            ['value' => '50M+', 'label' => 'Orders Processed'],
                            ['value' => '98%', 'label' => 'Satisfaction'],
                            ['value' => '24/7', 'label' => 'Support']
                        ]
                    ],
                    'story' => [
                        'badge' => 'OUR STORY',
                        'title' => 'From a Simple Idea to a Global Platform',
                        'paragraphs' => [
                            'Founded in 2020, our platform began with a simple observation: supply chain management was too complex and inaccessible for many businesses.',
                            'What started as a small project has grown into a comprehensive platform serving over 5000 companies across 50+ countries. Today, we\'re proud to help businesses of all sizes streamline their operations and achieve their goals.'
                        ],
                        'quote' => [
                            'text' => 'We believe that every business deserves access to powerful, easy-to-use supply chain tools. That\'s why we built this platform.',
                            'author' => 'Sarah Johnson',
                            'position' => 'CEO & Co-founder'
                        ],
                        'images' => [
                            'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop',
                            'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
                            'https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=600&h=400&fit=crop'
                        ]
                    ],
                    'mission' => [
                        'title' => 'Our Mission',
                        'description' => 'To empower businesses with intelligent supply chain solutions that drive efficiency, reduce costs, and foster sustainable growth.'
                    ],
                    'vision' => [
                        'title' => 'Our Vision',
                        'description' => 'To create a world where supply chain management is seamless, transparent, and accessible to every business.'
                    ],
                    'valuesCard' => [
                        'title' => 'Our Values',
                        'description' => 'Excellence, innovation, customer-first, and teamwork guide everything we do.'
                    ],
                    'timeline' => [
                        'show' => true,
                        'title' => 'Our Journey',
                        'events' => [
                            [
                                'year' => '2020',
                                'title' => 'Company Founded',
                                'description' => 'Started with a vision to simplify supply chain management.'
                            ],
                            [
                                'year' => '2021',
                                'title' => 'Platform Launch',
                                'description' => 'Launched our first version of the inventory management platform.'
                            ],
                            [
                                'year' => '2022',
                                'title' => 'Global Expansion',
                                'description' => 'Expanded operations to serve customers in 50+ countries.'
                            ],
                            [
                                'year' => '2023',
                                'title' => '5000+ Customers',
                                'description' => 'Reached milestone of serving over 5000 satisfied businesses.'
                            ]
                        ]
                    ],
                    'team' => [
                        'show' => true,
                        'title' => 'Meet Our Leadership',
                        'description' => 'The passionate people behind our success',
                        'members' => [
                            [
                                'name' => 'Sarah Johnson',
                                'position' => 'CEO & Founder',
                                'image' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop'
                            ],
                            [
                                'name' => 'Michael Chen',
                                'position' => 'CTO',
                                'image' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'
                            ],
                            [
                                'name' => 'Emily Rodriguez',
                                'position' => 'Head of Operations',
                                'image' => 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop'
                            ],
                            [
                                'name' => 'David Kim',
                                'position' => 'Sales Director',
                                'image' => 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop'
                            ]
                        ]
                    ],
                    'stats' => [
                        'show' => true,
                        'items' => [
                            ['value' => '5000+', 'label' => 'Happy Clients', 'icon' => 'users'],
                            ['value' => '50M+', 'label' => 'Orders Processed', 'icon' => 'cube'],
                            ['value' => '98%', 'label' => 'Satisfaction', 'icon' => 'star'],
                            ['value' => '50+', 'label' => 'Countries', 'icon' => 'globe']
                        ]
                    ],
                    'bottomCta' => [
                        'show' => true,
                        'text' => 'Join Our Journey',
                        'url' => '/contact',
                        'ariaLabel' => 'Contact us to learn more'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 44,
                'section_key' => 'aboutUs',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Why Choose Us Section
            [
                'id' => 45,
                'section_key' => 'whyChooseUs',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => [
                        'show' => true,
                        'showPulse' => true,
                        'text' => 'WHY CHOOSE US'
                    ],
                    'heading' => [
                        'prefix' => 'Why Businesses',
                        'highlightedText' => 'Choose Us',
                        'suffix' => ''
                    ],
                    'description' => 'Discover what makes our platform the preferred choice for businesses worldwide.',
                    'features' => [
                        [
                            'id' => 1,
                            'title' => 'Enterprise Security',
                            'description' => 'Bank-level encryption and security protocols to protect your business data.',
                            'icon' => 'shield',
                            'stats' => [
                                'label' => 'Data Protection',
                                'value' => '256-bit'
                            ],
                            'image' => 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 2,
                            'title' => 'Lightning Fast',
                            'description' => 'High-performance platform with real-time updates and instant responses.',
                            'icon' => 'lightning',
                            'stats' => [
                                'label' => 'Response Time',
                                'value' => '< 100ms'
                            ],
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 3,
                            'title' => 'Expert Support',
                            'description' => '24/7 dedicated support team to help you whenever you need assistance.',
                            'icon' => 'users',
                            'stats' => [
                                'label' => 'Support Hours',
                                'value' => '24/7'
                            ],
                            'image' => 'https://images.unsplash.com/photo-1552581234-26160f608093?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 4,
                            'title' => 'Global Reach',
                            'description' => 'Connect with carriers and warehouses across 50+ countries worldwide.',
                            'icon' => 'globe',
                            'stats' => [
                                'label' => 'Countries Covered',
                                'value' => '50+'
                            ],
                            'image' => 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 5,
                            'title' => 'Smart Automation',
                            'description' => 'Automate routine tasks and workflows to save time and reduce errors.',
                            'icon' => 'cog',
                            'stats' => [
                                'label' => 'Time Saved',
                                'value' => '75%'
                            ],
                            'image' => 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 6,
                            'title' => 'Cost Effective',
                            'description' => 'Reduce operational costs with our optimized logistics solutions.',
                            'icon' => 'dollar',
                            'stats' => [
                                'label' => 'Cost Reduction',
                                'value' => '30%'
                            ],
                            'image' => 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop'
                        ]
                    ],
                    'bottomCta' => [
                        'show' => true,
                        'text' => 'Start Your Journey Today',
                        'url' => '/contact',
                        'ariaLabel' => 'Get started with our platform'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 46,
                'section_key' => 'whyChooseUs',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'WHY CHOOSE US'
                    ],
                    'heading' => [
                        'line1' => 'Why Businesses',
                        'highlighted' => 'Trust Us'
                    ],
                    'description' => 'Discover what makes our platform the preferred choice for supply chain management.',
                    'stats' => [
                        'show' => true,
                        'items' => [
                            ['value' => '5000+', 'label' => 'Happy Clients'],
                            ['value' => '50M+', 'label' => 'Orders Processed'],
                            ['value' => '98%', 'label' => 'Satisfaction'],
                            ['value' => '24/7', 'label' => 'Support']
                        ]
                    ],
                    'image' => [
                        'src' => 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
                        'alt' => 'Team collaboration'
                    ],
                    'floatingStats' => [
                        'show' => true,
                        'text' => 'Trusted by 5000+ companies',
                        'rating' => '4.9★'
                    ],
                    'tabs' => [
                        [
                            'title' => 'Security',
                            'description' => 'Enterprise-grade security to protect your sensitive business data and ensure compliance.',
                            'features' => [
                                '256-bit AES encryption',
                                'Multi-factor authentication',
                                'GDPR & SOC2 compliant',
                                'Automated backups'
                            ],
                            'metrics' => [
                                ['value' => '256-bit', 'label' => 'Encryption'],
                                ['value' => '99.99%', 'label' => 'Uptime']
                            ],
                            'image' => 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop'
                        ],
                        [
                            'title' => 'Performance',
                            'description' => 'Lightning-fast platform with real-time updates and instant response times.',
                            'features' => [
                                '<100ms response time',
                                'Real-time data sync',
                                '99.9% uptime guarantee',
                                'Global CDN delivery'
                            ],
                            'metrics' => [
                                ['value' => '<100ms', 'label' => 'Response Time'],
                                ['value' => '99.9%', 'label' => 'Uptime']
                            ],
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
                        ],
                        [
                            'title' => 'Support',
                            'description' => '24/7 dedicated support team to help you whenever you need assistance.',
                            'features' => [
                                '24/7 availability',
                                'Dedicated account manager',
                                'Emergency response team',
                                'Training & onboarding'
                            ],
                            'metrics' => [
                                ['value' => '24/7', 'label' => 'Availability'],
                                ['value' => '<5min', 'label' => 'Response']
                            ],
                            'image' => 'https://images.unsplash.com/photo-1552581234-26160f608093?w=600&h=400&fit=crop'
                        ]
                    ],
                    'featuresTitle' => 'What Sets Us Apart',
                    'features' => [
                        [
                            'id' => 1,
                            'title' => 'Enterprise Security',
                            'description' => 'Bank-level encryption and security protocols',
                            'icon' => 'shield'
                        ],
                        [
                            'id' => 2,
                            'title' => 'Lightning Fast',
                            'description' => 'High-performance with real-time updates',
                            'icon' => 'lightning'
                        ],
                        [
                            'id' => 3,
                            'title' => 'Expert Support',
                            'description' => '24/7 dedicated support team',
                            'icon' => 'users'
                        ],
                        [
                            'id' => 4,
                            'title' => 'Global Reach',
                            'description' => 'Connect with carriers worldwide',
                            'icon' => 'globe'
                        ]
                    ],
                    'testimonial' => [
                        'show' => true,
                        'quote' => 'This platform transformed our supply chain operations. The real-time tracking and automated features saved us countless hours.',
                        'author' => 'Sarah Johnson',
                        'position' => 'Supply Chain Director, TechLogix'
                    ],
                    'bottomCta' => [
                        'show' => true,
                        'text' => 'Experience the Difference',
                        'url' => '/contact',
                        'ariaLabel' => 'Start your journey with us'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 47,
                'section_key' => 'whyChooseUs',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'WHY CHOOSE US'
                    ],
                    'heading' => [
                        'prefix' => 'The',
                        'highlightedText' => 'Smarter Choice',
                        'suffix' => 'for Your Business'
                    ],
                    'description' => 'Discover what makes our platform the preferred solution for supply chain management.',
                    'comparison' => [
                        'show' => true,
                        'traditional' => [
                            'title' => 'Traditional Approach',
                            'points' => [
                                'Manual data entry & spreadsheets',
                                'Delayed updates & reporting',
                                'Limited visibility across channels',
                                'Reactive problem solving'
                            ]
                        ],
                        'sazzad' => [
                            'title' => 'Our Approach',
                            'points' => [
                                'Automated real-time tracking',
                                'Instant insights & analytics',
                                'Complete end-to-end visibility',
                                'Proactive optimization'
                            ]
                        ]
                    ],
                    'features' => [
                        [
                            'id' => 1,
                            'title' => 'Enterprise Security',
                            'description' => 'Bank-level encryption to protect your business data.',
                            'detailedDescription' => 'We take security seriously. Our platform uses 256-bit AES encryption, multi-factor authentication, and is SOC2 Type II compliant to ensure your data is always protected.',
                            'icon' => 'shield',
                            'popular' => true,
                            'stat' => ['label' => 'Data Protection', 'value' => '256-bit'],
                            'benefits' => [
                                '256-bit AES encryption',
                                'Multi-factor authentication',
                                'GDPR & SOC2 compliant',
                                'Automated daily backups'
                            ],
                            'metrics' => [
                                ['value' => '256-bit', 'label' => 'Encryption'],
                                ['value' => '99.99%', 'label' => 'Uptime']
                            ],
                            'image' => 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop',
                            'badge' => ['label' => 'Security Score', 'value' => 'A+ Rated', 'icon' => 'shield']
                        ],
                        [
                            'id' => 2,
                            'title' => 'Lightning Fast',
                            'description' => 'High-performance with real-time updates.',
                            'detailedDescription' => 'Experience blazing fast performance with response times under 100ms. Our global CDN ensures your data is always available when you need it.',
                            'icon' => 'lightning',
                            'popular' => false,
                            'stat' => ['label' => 'Response Time', 'value' => '<100ms'],
                            'benefits' => [
                                '<100ms response time',
                                'Real-time data sync',
                                '99.9% uptime guarantee',
                                'Global CDN delivery'
                            ],
                            'metrics' => [
                                ['value' => '<100ms', 'label' => 'Response'],
                                ['value' => '99.9%', 'label' => 'Uptime']
                            ],
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
                            'badge' => ['label' => 'Performance', 'value' => '99.9% Uptime', 'icon' => 'lightning']
                        ],
                        [
                            'id' => 3,
                            'title' => 'Expert Support',
                            'description' => '24/7 dedicated support team.',
                            'detailedDescription' => 'Our support team is available 24/7 to help you with any questions or issues. Get dedicated account managers and priority assistance.',
                            'icon' => 'users',
                            'popular' => false,
                            'stat' => ['label' => 'Support Hours', 'value' => '24/7'],
                            'benefits' => [
                                '24/7 availability',
                                'Dedicated account manager',
                                'Emergency response team',
                                'Training & onboarding'
                            ],
                            'metrics' => [
                                ['value' => '24/7', 'label' => 'Availability'],
                                ['value' => '<5min', 'label' => 'Response']
                            ],
                            'image' => 'https://images.unsplash.com/photo-1552581234-26160f608093?w=600&h=400&fit=crop',
                            'badge' => ['label' => 'Support Rating', 'value' => '98% Happy', 'icon' => 'happy']
                        ]
                    ],
                    'stats' => [
                        'show' => true,
                        'items' => [
                            ['value' => '5000+', 'label' => 'Happy Clients', 'icon' => 'users'],
                            ['value' => '50M+', 'label' => 'Orders Processed', 'icon' => 'cube'],
                            ['value' => '98%', 'label' => 'Satisfaction', 'icon' => 'star'],
                            ['value' => '24/7', 'label' => 'Support', 'icon' => 'clock']
                        ]
                    ],
                    'trustBadges' => [
                        'show' => true,
                        'items' => ['SSL Secure', 'GDPR Compliant', 'PCI DSS Certified', 'ISO 27001']
                    ],
                    'bottomCta' => [
                        'show' => true,
                        'text' => 'Experience the Difference',
                        'url' => '/contact',
                        'ariaLabel' => 'Start your journey with us'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 48,
                'section_key' => 'whyChooseUs',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Integrations Section
            [
                'id' => 49,
                'section_key' => 'integrations',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => [
                        'show' => true,
                        'showPulse' => true,
                        'text' => 'INTEGRATIONS'
                    ],
                    'heading' => [
                        'prefix' => 'Connect with',
                        'highlightedText' => '100+ Tools',
                        'suffix' => ''
                    ],
                    'description' => 'Seamlessly integrate with your favorite apps and platforms to create a unified logistics ecosystem.',
                    'stats' => [
                        'show' => true,
                        'items' => [
                            ['value' => '100+', 'label' => 'Integrations'],
                            ['value' => '50K+', 'label' => 'API Calls/Day'],
                            ['value' => '99.9%', 'label' => 'Uptime']
                        ]
                    ],
                    'integrations' => [
                        ['id' => 1, 'name' => 'Shopify', 'category' => 'E-commerce', 'icon' => 'cart', 'popular' => true, 'link' => 'https://shopify.com'],
                        ['id' => 2, 'name' => 'WooCommerce', 'category' => 'E-commerce', 'icon' => 'cart', 'popular' => false, 'link' => 'https://woocommerce.com'],
                        ['id' => 3, 'name' => 'Magento', 'category' => 'E-commerce', 'icon' => 'cart', 'popular' => false, 'link' => 'https://magento.com'],
                        ['id' => 4, 'name' => 'Stripe', 'category' => 'Payment', 'icon' => 'credit', 'popular' => true, 'link' => 'https://stripe.com'],
                        ['id' => 5, 'name' => 'PayPal', 'category' => 'Payment', 'icon' => 'credit', 'popular' => false, 'link' => 'https://paypal.com'],
                        ['id' => 6, 'name' => 'Salesforce', 'category' => 'CRM', 'icon' => 'cloud', 'popular' => true, 'link' => 'https://salesforce.com'],
                        ['id' => 7, 'name' => 'HubSpot', 'category' => 'CRM', 'icon' => 'users', 'popular' => false, 'link' => 'https://hubspot.com'],
                        ['id' => 8, 'name' => 'Mailchimp', 'category' => 'Marketing', 'icon' => 'mail', 'popular' => false, 'link' => 'https://mailchimp.com'],
                        ['id' => 9, 'name' => 'Slack', 'category' => 'Communication', 'icon' => 'users', 'popular' => true, 'link' => 'https://slack.com'],
                        ['id' => 10, 'name' => 'QuickBooks', 'category' => 'Accounting', 'icon' => 'document', 'popular' => false, 'link' => 'https://quickbooks.com'],
                        ['id' => 11, 'name' => 'Tableau', 'category' => 'Analytics', 'icon' => 'chart', 'popular' => false, 'link' => 'https://tableau.com'],
                        ['id' => 12, 'name' => 'AWS', 'category' => 'Cloud', 'icon' => 'cloud', 'popular' => true, 'link' => 'https://aws.amazon.com']
                    ],
                    'viewAll' => [
                        'text' => 'View All Integrations',
                        'url' => '/integrations'
                    ],
                    'featured' => [
                        'show' => true,
                        'title' => 'Shopify Integration',
                        'description' => 'Sync your inventory, orders, and products seamlessly between our platform and your Shopify store.',
                        'features' => [
                            'Real-time inventory sync',
                            'Automatic order fulfillment',
                            'Product catalog management',
                            'Returns processing'
                        ],
                        'image' => 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop',
                        'learnMoreUrl' => '/integrations/shopify',
                        'docsUrl' => '/docs/shopify-integration',
                        'logoIcon' => 'cart',
                        'logoLabel' => 'Featured Partner',
                        'logoValue' => 'Shopify Plus Certified'
                    ],
                    'api' => [
                        'show' => true,
                        'title' => 'Build Custom Integrations',
                        'description' => 'Our powerful REST API allows you to build custom integrations and extend our platform to fit your unique needs.',
                        'docsUrl' => '/docs/api',
                        'consoleUrl' => '/api-console'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 50,
                'section_key' => 'integrations',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'INTEGRATIONS'
                    ],
                    'heading' => [
                        'line1' => 'Connect with Your',
                        'highlighted' => 'Favorite Tools'
                    ],
                    'description' => 'Seamlessly integrate with the apps and platforms you already use every day.',
                    'search' => [
                        'placeholder' => 'Search integrations...'
                    ],
                    'integrations' => [
                        ['id' => 1, 'name' => 'Shopify', 'category' => 'E-commerce', 'icon' => 'cart', 'popular' => true, 'link' => 'https://shopify.com'],
                        ['id' => 2, 'name' => 'WooCommerce', 'category' => 'E-commerce', 'icon' => 'cart', 'popular' => false, 'link' => 'https://woocommerce.com'],
                        ['id' => 3, 'name' => 'Magento', 'category' => 'E-commerce', 'icon' => 'cart', 'popular' => false, 'link' => 'https://magento.com'],
                        ['id' => 4, 'name' => 'Stripe', 'category' => 'Payment', 'icon' => 'credit', 'popular' => true, 'link' => 'https://stripe.com'],
                        ['id' => 5, 'name' => 'PayPal', 'category' => 'Payment', 'icon' => 'credit', 'popular' => false, 'link' => 'https://paypal.com'],
                        ['id' => 6, 'name' => 'Salesforce', 'category' => 'CRM', 'icon' => 'cloud', 'popular' => true, 'link' => 'https://salesforce.com'],
                        ['id' => 7, 'name' => 'HubSpot', 'category' => 'CRM', 'icon' => 'users', 'popular' => false, 'link' => 'https://hubspot.com'],
                        ['id' => 8, 'name' => 'Mailchimp', 'category' => 'Marketing', 'icon' => 'mail', 'popular' => false, 'link' => 'https://mailchimp.com'],
                        ['id' => 9, 'name' => 'Slack', 'category' => 'Communication', 'icon' => 'users', 'popular' => true, 'link' => 'https://slack.com'],
                        ['id' => 10, 'name' => 'QuickBooks', 'category' => 'Accounting', 'icon' => 'document', 'popular' => false, 'link' => 'https://quickbooks.com'],
                        ['id' => 11, 'name' => 'Tableau', 'category' => 'Analytics', 'icon' => 'chart', 'popular' => false, 'link' => 'https://tableau.com'],
                        ['id' => 12, 'name' => 'AWS', 'category' => 'Cloud', 'icon' => 'cloud', 'popular' => true, 'link' => 'https://aws.amazon.com']
                    ],
                    'viewAll' => [
                        'text' => 'Browse All Integrations',
                        'url' => '/integrations'
                    ],
                    'partners' => [
                        'show' => true,
                        'title' => 'Trusted Partners',
                        'items' => [
                            ['name' => 'Partner A', 'logo' => null],
                            ['name' => 'Partner B', 'logo' => null],
                            ['name' => 'Partner C', 'logo' => null],
                            ['name' => 'Partner D', 'logo' => null]
                        ]
                    ],
                    'api' => [
                        'show' => true,
                        'title' => 'Build Custom Integrations',
                        'description' => 'Our powerful REST API allows you to build custom integrations and extend our platform.',
                        'features' => [
                            'RESTful API with comprehensive documentation',
                            'Webhooks for real-time events',
                            'OAuth 2.0 authentication',
                            'Rate limiting up to 1000 requests/minute'
                        ],
                        'docsUrl' => '/docs/api',
                        'consoleUrl' => '/api-console'
                    ],
                    'bottomCta' => [
                        'show' => true,
                        'text' => 'Explore All Integrations',
                        'url' => '/integrations',
                        'ariaLabel' => 'View all available integrations'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 51,
                'section_key' => 'integrations',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'INTEGRATIONS'
                    ],
                    'heading' => [
                        'prefix' => 'Connect with',
                        'highlightedText' => '100+ Tools',
                        'suffix' => ''
                    ],
                    'description' => 'Seamlessly integrate with your favorite apps and platforms to create a unified logistics ecosystem.',
                    'search' => [
                        'placeholder' => 'Search integrations...'
                    ],
                    'categories' => [
                        ['id' => 'ecommerce', 'name' => 'E-commerce', 'count' => 25],
                        ['id' => 'payment', 'name' => 'Payment', 'count' => 15],
                        ['id' => 'crm', 'name' => 'CRM', 'count' => 18],
                        ['id' => 'marketing', 'name' => 'Marketing', 'count' => 12],
                        ['id' => 'analytics', 'name' => 'Analytics', 'count' => 10],
                        ['id' => 'accounting', 'name' => 'Accounting', 'count' => 8]
                    ],
                    'popularTags' => [
                        'show' => true,
                        'items' => ['Shopify', 'Stripe', 'Salesforce', 'QuickBooks', 'Slack', 'Zapier']
                    ],
                    'integrations' => [
                        [
                            'id' => 1,
                            'name' => 'Shopify',
                            'category' => 'E-commerce',
                            'icon' => 'cart',
                            'description' => 'Sync your inventory, orders, and products seamlessly between our platform and your Shopify store.',
                            'rating' => 4.9,
                            'verified' => true,
                            'popular' => true,
                            'link' => 'https://shopify.com',
                            'image' => 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=100&h=100&fit=crop'
                        ],
                        [
                            'id' => 2,
                            'name' => 'Stripe',
                            'category' => 'Payment',
                            'icon' => 'credit',
                            'description' => 'Process payments and manage billing directly through our integrated Stripe connection.',
                            'rating' => 4.8,
                            'verified' => true,
                            'popular' => true,
                            'link' => 'https://stripe.com',
                            'image' => 'https://images.unsplash.com/photo-1614680376739-414d95ff43df?w=100&h=100&fit=crop'
                        ],
                        [
                            'id' => 3,
                            'name' => 'Salesforce',
                            'category' => 'CRM',
                            'icon' => 'cloud',
                            'description' => 'Sync customer data and sales orders between Salesforce and our platform.',
                            'rating' => 4.7,
                            'verified' => true,
                            'popular' => false,
                            'link' => 'https://salesforce.com',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&h=100&fit=crop'
                        ],
                        [
                            'id' => 4,
                            'name' => 'QuickBooks',
                            'category' => 'Accounting',
                            'icon' => 'document',
                            'description' => 'Automatically sync financial data and generate invoices in QuickBooks.',
                            'rating' => 4.6,
                            'verified' => true,
                            'popular' => false,
                            'link' => 'https://quickbooks.com',
                            'image' => 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=100&h=100&fit=crop'
                        ]
                    ],
                    'api' => [
                        'show' => true,
                        'title' => 'Build Custom Integrations',
                        'description' => 'Our powerful REST API allows you to build custom integrations and extend our platform to fit your unique needs.',
                        'docsUrl' => '/docs/api',
                        'consoleUrl' => '/api-console'
                    ],
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 52,
                'section_key' => 'integrations',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // News Section
            [
                'id' => 53,
                'section_key' => 'news',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => [
                        'show' => true,
                        'showPulse' => true,
                        'text' => 'LATEST NEWS'
                    ],
                    'heading' => [
                        'prefix' => 'Company',
                        'highlightedText' => 'News',
                        'suffix' => '& Updates'
                    ],
                    'description' => 'Stay up to date with the latest announcements, product updates, and company news.',
                    'breakingNews' => [
                        'show' => true,
                        'text' => '🚀 Major Product Launch Coming Soon! Stay tuned for exciting updates...'
                    ],
                    'featured' => [
                        'show' => true,
                        'type' => 'announcement',
                        'date' => '2024-01-15',
                        'title' => 'Introducing AI-Powered Inventory Forecasting',
                        'excerpt' => 'We\'re excited to announce our new AI-driven forecasting engine that helps businesses predict demand with 95% accuracy. This revolutionary feature will transform how you manage your inventory.',
                        'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
                        'link' => '/news/ai-forecasting-launch'
                    ],
                    'news' => [
                        [
                            'id' => 1,
                            'title' => 'New Integration with Shopify Now Available',
                            'excerpt' => 'Seamlessly sync your inventory and orders between our platform and your Shopify store with our new native integration.',
                            'date' => '2024-03-15',
                            'type' => 'update',
                            'readTime' => '3 min read',
                            'image' => 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
                            'tags' => ['Integration', 'E-commerce'],
                            'likes' => 127,
                            'source' => 'Product Team',
                            'link' => '/news/shopify-integration'
                        ],
                        [
                            'id' => 2,
                            'title' => 'Sazzad Named Top Logistics Platform 2024',
                            'excerpt' => 'We\'re honored to be recognized as the best logistics platform by Supply Chain Excellence Awards.',
                            'date' => '2024-03-10',
                            'type' => 'award',
                            'readTime' => '2 min read',
                            'image' => 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=600&h=400&fit=crop',
                            'tags' => ['Award', 'Recognition'],
                            'likes' => 342,
                            'source' => 'Marketing Team',
                            'link' => '/news/award-2024'
                        ],
                        [
                            'id' => 3,
                            'title' => 'New Warehouse Management Features',
                            'excerpt' => 'Enhanced warehouse management capabilities including barcode scanning and automated picking.',
                            'date' => '2024-03-05',
                            'type' => 'update',
                            'readTime' => '4 min read',
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
                            'tags' => ['Product', 'Warehouse'],
                            'likes' => 89,
                            'source' => 'Product Team',
                            'link' => '/news/warehouse-features'
                        ]
                    ],
                    'viewAll' => [
                        'show' => true,
                        'text' => 'View All News',
                        'url' => '/news'
                    ],
                    'pressReleases' => [
                        'show' => true,
                        'url' => '/press',
                        'items' => [
                            [
                                'date' => 'March 1, 2024',
                                'title' => 'Sazzad Raises $50M Series B to Expand Global Operations',
                                'embargo' => false,
                                'link' => '/press/series-b-funding'
                            ],
                            [
                                'date' => 'February 15, 2024',
                                'title' => 'Sazzad Announces Strategic Partnership with Major Retailer',
                                'embargo' => false,
                                'link' => '/press/strategic-partnership'
                            ],
                            [
                                'date' => 'January 20, 2024',
                                'title' => 'Sazzad Launches Sustainability Initiative',
                                'embargo' => true,
                                'link' => '/press/sustainability-initiative'
                            ]
                        ]
                    ],
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 54,
                'section_key' => 'news',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'NEWS & UPDATES'
                    ],
                    'heading' => [
                        'line1' => 'Latest',
                        'highlighted' => 'Company News'
                    ],
                    'description' => 'Stay informed about the latest announcements, product updates, and company milestones.',
                    'stats' => [
                        'show' => true
                    ],
                    'search' => [
                        'placeholder' => 'Search news...'
                    ],
                    'pagination' => [
                        'perPage' => 6
                    ],
                    'featured' => [
                        'show' => true,
                        'title' => 'Sazzad Raises $50M Series B Funding',
                        'excerpt' => 'We\'re excited to announce our $50M Series B funding round led by leading venture capital firms to accelerate global expansion.',
                        'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
                        'link' => '/news/series-b-funding'
                    ],
                    'news' => [
                        [
                            'id' => 1,
                            'title' => 'New AI-Powered Forecasting Engine Launched',
                            'excerpt' => 'Introducing our new predictive analytics feature that helps businesses forecast demand with 95% accuracy.',
                            'date' => '2024-03-20',
                            'type' => 'Announcement',
                            'readTime' => '3 min read',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
                            'tags' => ['AI', 'Forecasting', 'Product'],
                            'likes' => 245,
                            'source' => 'Product Team',
                            'link' => '/news/ai-forecasting'
                        ],
                        [
                            'id' => 2,
                            'title' => 'Sazzad Wins \'Best Logistics Platform\' Award',
                            'excerpt' => 'We\'re honored to receive the Best Logistics Platform award at the 2024 Supply Chain Excellence Awards.',
                            'date' => '2024-03-15',
                            'type' => 'Award',
                            'readTime' => '2 min read',
                            'image' => 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=600&h=400&fit=crop',
                            'tags' => ['Award', 'Recognition'],
                            'likes' => 567,
                            'source' => 'Marketing Team',
                            'link' => '/news/award-2024'
                        ],
                        [
                            'id' => 3,
                            'title' => 'Strategic Partnership with Major Retailer',
                            'excerpt' => 'Sazzad announces strategic partnership to power supply chain operations for leading retailer.',
                            'date' => '2024-03-10',
                            'type' => 'Partnership',
                            'readTime' => '3 min read',
                            'image' => 'https://images.unsplash.com/photo-1556742031-c6961e8560b0?w=600&h=400&fit=crop',
                            'tags' => ['Partnership', 'Retail'],
                            'likes' => 189,
                            'source' => 'Business Development',
                            'link' => '/news/partnership'
                        ],
                        [
                            'id' => 4,
                            'title' => 'Warehouse Management System Update',
                            'excerpt' => 'New features including barcode scanning and automated picking now available in WMS.',
                            'date' => '2024-03-05',
                            'type' => 'Update',
                            'readTime' => '2 min read',
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
                            'tags' => ['Warehouse', 'Update'],
                            'likes' => 134,
                            'source' => 'Product Team',
                            'link' => '/news/wms-update'
                        ],
                        [
                            'id' => 5,
                            'title' => 'Customer Success Story: How Company X Scaled 300%',
                            'excerpt' => 'Learn how Company X used Sazzad to scale their operations and reduce logistics costs by 40%.',
                            'date' => '2024-02-28',
                            'type' => 'Case Study',
                            'readTime' => '5 min read',
                            'image' => 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
                            'tags' => ['Case Study', 'Success'],
                            'likes' => 423,
                            'source' => 'Customer Success',
                            'link' => '/case-studies/company-x'
                        ],
                        [
                            'id' => 6,
                            'title' => 'New API Version 2.0 Released',
                            'excerpt' => 'Introducing API v2.0 with enhanced features, better performance, and improved documentation.',
                            'date' => '2024-02-20',
                            'type' => 'Announcement',
                            'readTime' => '2 min read',
                            'image' => 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
                            'tags' => ['API', 'Developer'],
                            'likes' => 98,
                            'source' => 'Engineering',
                            'link' => '/news/api-v2'
                        ]
                    ],
                    'viewAll' => [
                        'show' => true,
                        'text' => 'Browse All News',
                        'url' => '/news'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 55,
                'section_key' => 'news',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'show' => true,
                        'showPulse' => true,
                        'text' => 'NEWSROOM'
                    ],
                    'heading' => [
                        'prefix' => 'Company',
                        'highlightedText' => 'News',
                        'suffix' => '& Insights'
                    ],
                    'description' => 'Stay up to date with the latest announcements, product updates, and industry insights.',
                    'pagination' => [
                        'perPage' => 4
                    ],
                    'featured' => [
                        'show' => true,
                        'type' => 'Announcement',
                        'date' => '2024-03-15',
                        'title' => 'Sazzad Raises $50M Series B Funding',
                        'excerpt' => 'We\'re excited to announce our $50M Series B funding round led by leading venture capital firms to accelerate global expansion and product innovation.',
                        'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
                        'readTime' => '4 min read',
                        'source' => 'Press Release',
                        'views' => 2500,
                        'likes' => 342,
                        'link' => '/news/series-b-funding'
                    ],
                    'news' => [
                        [
                            'id' => 1,
                            'title' => 'New AI-Powered Forecasting Engine Launched',
                            'excerpt' => 'Introducing our new predictive analytics feature that helps businesses forecast demand with 95% accuracy.',
                            'date' => '2024-03-20',
                            'type' => 'Announcement',
                            'readTime' => '3 min read',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
                            'tags' => ['AI', 'Forecasting'],
                            'views' => 1200,
                            'source' => 'Product Team',
                            'link' => '/news/ai-forecasting'
                        ],
                        [
                            'id' => 2,
                            'title' => 'Sazzad Wins \'Best Logistics Platform\' Award',
                            'excerpt' => 'We\'re honored to receive the Best Logistics Platform award at the 2024 Supply Chain Excellence Awards.',
                            'date' => '2024-03-15',
                            'type' => 'Award',
                            'readTime' => '2 min read',
                            'image' => 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=400&h=300&fit=crop',
                            'tags' => ['Award'],
                            'views' => 3400,
                            'source' => 'Marketing Team',
                            'link' => '/news/award-2024'
                        ],
                        [
                            'id' => 3,
                            'title' => 'Strategic Partnership with Major Retailer',
                            'excerpt' => 'Sazzad announces strategic partnership to power supply chain operations for leading retailer.',
                            'date' => '2024-03-10',
                            'type' => 'Partnership',
                            'readTime' => '3 min read',
                            'image' => 'https://images.unsplash.com/photo-1556742031-c6961e8560b0?w=400&h=300&fit=crop',
                            'tags' => ['Partnership'],
                            'views' => 890,
                            'source' => 'Business Development',
                            'link' => '/news/partnership'
                        ],
                        [
                            'id' => 4,
                            'title' => 'Warehouse Management System Update',
                            'excerpt' => 'New features including barcode scanning and automated picking now available in WMS.',
                            'date' => '2024-03-05',
                            'type' => 'Update',
                            'readTime' => '2 min read',
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop',
                            'tags' => ['Warehouse'],
                            'views' => 560,
                            'source' => 'Product Team',
                            'link' => '/news/wms-update'
                        ]
                    ],
                    'sidebar' => [
                        'about' => [
                            'description' => 'Your source for the latest company news, product updates, and industry insights.',
                            'views' => '15.2k'
                        ],
                        'contacts' => [
                            'show' => true
                        ],
                        'social' => [
                            'show' => true,
                            'facebook' => 'https://facebook.com',
                            'twitter' => 'https://twitter.com',
                            'linkedin' => 'https://linkedin.com'
                        ]
                    ],
                    'viewAll' => [
                        'show' => true,
                        'text' => 'Browse All News',
                        'url' => '/news'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 56,
                'section_key' => 'news',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Partners Section
            [
                'id' => 57,
                'section_key' => 'partner',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => [
                        'show' => true,
                        'showPulse' => true,
                        'text' => 'OUR PARTNERS'
                    ],
                    'heading' => [
                        'prefix' => 'Trusted by',
                        'highlightedText' => 'Industry Leaders',
                        'suffix' => ''
                    ],
                    'description' => 'We partner with the best technology providers and service companies to deliver exceptional value to our customers.',
                    'stats' => [
                        'show' => true,
                        'items' => [
                            ['value' => '200+', 'label' => 'Global Partners'],
                            ['value' => '50+', 'label' => 'Countries'],
                            ['value' => '1000+', 'label' => 'Joint Customers'],
                            ['value' => '99%', 'label' => 'Partner Satisfaction']
                        ]
                    ],
                    'featured' => [
                        'show' => true,
                        'name' => 'Shopify Plus',
                        'type' => 'Strategic Technology',
                        'logo' => 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100&h=100&fit=crop',
                        'description' => 'Our strategic partnership with Shopify Plus enables seamless integration between our logistics platform and the world\'s leading e-commerce solution.',
                        'badges' => ['Certified Partner', '2023 Partner of the Year', 'Global Strategic Alliance'],
                        'metrics' => [
                            ['value' => '500+', 'label' => 'Joint Customers'],
                            ['value' => '2M+', 'label' => 'Orders Processed'],
                            ['value' => '99.9%', 'label' => 'Uptime'],
                            ['value' => '40%', 'label' => 'Faster Integration']
                        ],
                        'link' => '/partners/shopify'
                    ],
                    'partners' => [
                        [
                            'id' => 1,
                            'name' => 'Salesforce',
                            'type' => 'CRM Partner',
                            'logo' => 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=80&h=80&fit=crop',
                            'description' => 'Enterprise CRM integration for seamless customer data sync.',
                            'link' => '/partners/salesforce'
                        ],
                        [
                            'id' => 2,
                            'name' => 'Stripe',
                            'type' => 'Payment Partner',
                            'logo' => 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=80&h=80&fit=crop',
                            'description' => 'Secure payment processing and billing automation.',
                            'link' => '/partners/stripe'
                        ],
                        [
                            'id' => 3,
                            'name' => 'AWS',
                            'type' => 'Cloud Partner',
                            'logo' => 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=80&h=80&fit=crop',
                            'description' => 'Enterprise-grade cloud infrastructure and hosting.',
                            'link' => '/partners/aws'
                        ],
                        [
                            'id' => 4,
                            'name' => 'Slack',
                            'type' => 'Communication Partner',
                            'logo' => 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=80&h=80&fit=crop',
                            'description' => 'Real-time notifications and team collaboration.',
                            'link' => '/partners/slack'
                        ]
                    ],
                    'cta' => [
                        'show' => true,
                        'title' => 'Become a Partner',
                        'description' => 'Join our growing network of partners and help businesses transform their supply chain operations.',
                        'primaryButton' => [
                            'text' => 'Apply Now',
                            'url' => '/become-a-partner'
                        ],
                        'secondaryButton' => [
                            'show' => true,
                            'text' => 'Contact Partnership Team',
                            'url' => '/contact?type=partnership'
                        ],
                        'note' => 'Applications reviewed within 5 business days'
                    ],
                    'testimonials' => [
                        'show' => true,
                        'items' => [
                            [
                                'partner' => 'Shopify',
                                'author' => 'John Smith, Partnership Director',
                                'logo' => 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=50&h=50&fit=crop',
                                'quote' => 'Sazzad has been an incredible partner. Their platform integrates seamlessly with ours and their team is always responsive.',
                                'rating' => 5
                            ],
                            [
                                'partner' => 'Salesforce',
                                'author' => 'Sarah Johnson, Ecosystem Manager',
                                'logo' => 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=50&h=50&fit=crop',
                                'quote' => 'Working with Sazzad has opened new opportunities for our joint customers. Their commitment to innovation is impressive.',
                                'rating' => 5
                            ]
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 58,
                'section_key' => 'partner',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'OUR ECOSYSTEM'
                    ],
                    'heading' => [
                        'line1' => 'Powered by',
                        'highlighted' => 'Trusted Partners'
                    ],
                    'description' => 'We collaborate with industry-leading partners to deliver comprehensive logistics solutions.',
                    'stats' => [
                        'show' => true,
                        'items' => [
                            ['value' => '200+', 'label' => 'Global Partners'],
                            ['value' => '50+', 'label' => 'Countries'],
                            ['value' => '1000+', 'label' => 'Joint Customers'],
                            ['value' => '99%', 'label' => 'Partner Satisfaction']
                        ]
                    ],
                    'search' => [
                        'placeholder' => 'Search partners...'
                    ],
                    'pagination' => [
                        'perPage' => 8
                    ],
                    'partners' => [
                        [
                            'id' => 1,
                            'name' => 'Shopify Plus',
                            'type' => 'Technology',
                            'logo' => 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100&h=100&fit=crop',
                            'description' => 'Leading e-commerce platform powering millions of businesses worldwide.',
                            'tags' => ['E-commerce', 'Retail'],
                            'featured' => true,
                            'link' => '/partners/shopify'
                        ],
                        [
                            'id' => 2,
                            'name' => 'Salesforce',
                            'type' => 'Technology',
                            'logo' => 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100&h=100&fit=crop',
                            'description' => 'Enterprise CRM platform for customer relationship management.',
                            'tags' => ['CRM', 'Sales'],
                            'featured' => false,
                            'link' => '/partners/salesforce'
                        ],
                        [
                            'id' => 3,
                            'name' => 'FedEx',
                            'type' => 'Logistics',
                            'logo' => 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100&h=100&fit=crop',
                            'description' => 'Global shipping and logistics services provider.',
                            'tags' => ['Shipping', 'Delivery'],
                            'featured' => true,
                            'link' => '/partners/fedex'
                        ],
                        [
                            'id' => 4,
                            'name' => 'AWS',
                            'type' => 'Technology',
                            'logo' => 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100&h=100&fit=crop',
                            'description' => 'Cloud infrastructure and hosting services.',
                            'tags' => ['Cloud', 'Infrastructure'],
                            'featured' => false,
                            'link' => '/partners/aws'
                        ],
                        [
                            'id' => 5,
                            'name' => 'Deloitte',
                            'type' => 'Consulting',
                            'logo' => 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100&h=100&fit=crop',
                            'description' => 'Global consulting and professional services firm.',
                            'tags' => ['Consulting', 'Strategy'],
                            'featured' => false,
                            'link' => '/partners/deloitte'
                        ],
                        [
                            'id' => 6,
                            'name' => 'Stripe',
                            'type' => 'Technology',
                            'logo' => 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100&h=100&fit=crop',
                            'description' => 'Payment processing and financial infrastructure.',
                            'tags' => ['Payments', 'Billing'],
                            'featured' => false,
                            'link' => '/partners/stripe'
                        ],
                        [
                            'id' => 7,
                            'name' => 'DHL',
                            'type' => 'Logistics',
                            'logo' => 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100&h=100&fit=crop',
                            'description' => 'International shipping and courier services.',
                            'tags' => ['International', 'Shipping'],
                            'featured' => false,
                            'link' => '/partners/dhl'
                        ],
                        [
                            'id' => 8,
                            'name' => 'McKinsey',
                            'type' => 'Consulting',
                            'logo' => 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100&h=100&fit=crop',
                            'description' => 'Global management consulting firm.',
                            'tags' => ['Strategy', 'Operations'],
                            'featured' => false,
                            'link' => '/partners/mckinsey'
                        ]
                    ],
                    'programCta' => [
                        'show' => true,
                        'title' => 'Become a Partner',
                        'description' => 'Join our partner ecosystem and help businesses transform their supply chain operations.',
                        'primaryButton' => [
                            'text' => 'Apply Now',
                            'url' => '/become-a-partner'
                        ],
                        'secondaryButton' => [
                            'text' => 'Contact Partnership Team',
                            'url' => '/contact?type=partnership'
                        ],
                        'benefits' => [
                            'Access to partner portal and resources',
                            'Co-marketing opportunities',
                            'Technical training and certification',
                            'Priority support and dedicated account manager'
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 59,
                'section_key' => 'partner',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'show' => true,
                        'showPulse' => true,
                        'text' => 'PARTNER ECOSYSTEM'
                    ],
                    'heading' => [
                        'prefix' => 'Our',
                        'highlightedText' => 'Global Partner',
                        'suffix' => 'Network'
                    ],
                    'description' => 'Collaborating with industry leaders to deliver exceptional value to our customers.',
                    'pagination' => [
                        'perPage' => 6
                    ],
                    'featured' => [
                        'show' => true,
                        'name' => 'Shopify Plus',
                        'type' => 'Technology',
                        'tier' => 'Platinum',
                        'region' => 'Global',
                        'logo' => 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=150&h=150&fit=crop',
                        'description' => 'Strategic partnership enabling seamless e-commerce and logistics integration for enterprise merchants.',
                        'metrics' => [
                            ['value' => '500+', 'label' => 'Joint Customers'],
                            ['value' => '2M+', 'label' => 'Orders Processed'],
                            ['value' => '99.9%', 'label' => 'Uptime'],
                            ['value' => '40%', 'label' => 'Faster Integration']
                        ],
                        'link' => '/partners/shopify'
                    ],
                    'partners' => [
                        [
                            'id' => 1,
                            'name' => 'Salesforce',
                            'type' => 'Technology',
                            'tier' => 'Gold',
                            'logo' => 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100&h=100&fit=crop',
                            'description' => 'Enterprise CRM platform for customer relationship management.',
                            'tags' => ['CRM', 'Sales'],
                            'link' => '/partners/salesforce'
                        ],
                        [
                            'id' => 2,
                            'name' => 'FedEx',
                            'type' => 'Logistics',
                            'tier' => 'Platinum',
                            'logo' => 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100&h=100&fit=crop',
                            'description' => 'Global shipping and logistics services provider.',
                            'tags' => ['Shipping', 'Delivery'],
                            'link' => '/partners/fedex'
                        ],
                        [
                            'id' => 3,
                            'name' => 'AWS',
                            'type' => 'Technology',
                            'tier' => 'Strategic',
                            'logo' => 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100&h=100&fit=crop',
                            'description' => 'Cloud infrastructure and hosting services.',
                            'tags' => ['Cloud', 'Infrastructure'],
                            'link' => '/partners/aws'
                        ],
                        [
                            'id' => 4,
                            'name' => 'Deloitte',
                            'type' => 'Consulting',
                            'tier' => 'Gold',
                            'logo' => 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100&h=100&fit=crop',
                            'description' => 'Global consulting and professional services firm.',
                            'tags' => ['Consulting', 'Strategy'],
                            'link' => '/partners/deloitte'
                        ],
                        [
                            'id' => 5,
                            'name' => 'Stripe',
                            'type' => 'Technology',
                            'tier' => 'Silver',
                            'logo' => 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100&h=100&fit=crop',
                            'description' => 'Payment processing and financial infrastructure.',
                            'tags' => ['Payments', 'Billing'],
                            'link' => '/partners/stripe'
                        ],
                        [
                            'id' => 6,
                            'name' => 'DHL',
                            'type' => 'Logistics',
                            'tier' => 'Gold',
                            'logo' => 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100&h=100&fit=crop',
                            'description' => 'International shipping and courier services.',
                            'tags' => ['International', 'Shipping'],
                            'link' => '/partners/dhl'
                        ]
                    ],
                    'testimonial' => [
                        'show' => true,
                        'partner' => 'Shopify',
                        'author' => 'John Smith, Partnership Director',
                        'logo' => 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=50&h=50&fit=crop',
                        'quote' => 'Sazzad has been an incredible partner. Their platform integrates seamlessly with ours and their team is always responsive.',
                        'rating' => 5
                    ],
                    'viewAll' => [
                        'show' => true,
                        'text' => 'Explore All Partners',
                        'url' => '/partners'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 60,
                'section_key' => 'partner',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Global Presence Section
            [
                'id' => 61,
                'section_key' => 'globalPresence',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => [
                        'show' => true,
                        'showPulse' => true,
                        'text' => 'GLOBAL PRESENCE'
                    ],
                    'heading' => [
                        'prefix' => 'Our',
                        'highlightedText' => 'Global Reach',
                        'suffix' => ''
                    ],
                    'description' => 'Operating across continents with local expertise and global standards.',
                    'map' => [
                        'show' => true,
                        'image' => 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&h=600&fit=crop',
                        'locations' => [
                            ['city' => 'New York', 'country' => 'USA', 'top' => '35%', 'left' => '15%'],
                            ['city' => 'London', 'country' => 'UK', 'top' => '25%', 'left' => '45%'],
                            ['city' => 'Singapore', 'country' => 'Singapore', 'top' => '55%', 'left' => '75%'],
                            ['city' => 'Sydney', 'country' => 'Australia', 'top' => '70%', 'left' => '85%'],
                            ['city' => 'Tokyo', 'country' => 'Japan', 'top' => '40%', 'left' => '82%'],
                            ['city' => 'Dubai', 'country' => 'UAE', 'top' => '40%', 'left' => '60%']
                        ]
                    ],
                    'stats' => [
                        'show' => true,
                        'items' => [
                            ['value' => '20+', 'label' => 'Countries'],
                            ['value' => '30+', 'label' => 'Offices Worldwide'],
                            ['value' => '500+', 'label' => 'Global Employees'],
                            ['value' => '24/7', 'label' => 'Global Support']
                        ]
                    ],
                    'regions' => [
                        [
                            'id' => 1,
                            'name' => 'North America',
                            'headquarters' => 'New York, USA',
                            'coverage' => 'USA, Canada, Mexico',
                            'timezone' => 'EST, PST, CST',
                            'officeCount' => 8,
                            'link' => '/locations/north-america'
                        ],
                        [
                            'id' => 2,
                            'name' => 'Europe',
                            'headquarters' => 'London, UK',
                            'coverage' => 'UK, Germany, France, Spain',
                            'timezone' => 'GMT, CET',
                            'officeCount' => 6,
                            'link' => '/locations/europe'
                        ],
                        [
                            'id' => 3,
                            'name' => 'Asia Pacific',
                            'headquarters' => 'Singapore',
                            'coverage' => 'Singapore, Japan, Australia, India',
                            'timezone' => 'SGT, JST, AEST',
                            'officeCount' => 10,
                            'link' => '/locations/asia-pacific'
                        ],
                        [
                            'id' => 4,
                            'name' => 'Middle East & Africa',
                            'headquarters' => 'Dubai, UAE',
                            'coverage' => 'UAE, Saudi Arabia, South Africa',
                            'timezone' => 'GST, SAST',
                            'officeCount' => 4,
                            'link' => '/locations/mea'
                        ]
                    ],
                    'offices' => [
                        'show' => true,
                        'items' => [
                            [
                                'city' => 'New York',
                                'address' => '350 5th Ave, New York, NY 10118',
                                'phone' => '+1 (212) 555-1234'
                            ],
                            [
                                'city' => 'London',
                                'address' => '25 Bank St, London E14 5JP',
                                'phone' => '+44 20 7123 4567'
                            ],
                            [
                                'city' => 'Singapore',
                                'address' => '1 Raffles Place, Singapore 048616',
                                'phone' => '+65 6789 0123'
                            ],
                            [
                                'city' => 'Sydney',
                                'address' => '1 Harbour St, Sydney NSW 2000',
                                'phone' => '+61 2 9123 4567'
                            ],
                            [
                                'city' => 'Tokyo',
                                'address' => '1-1-1 Marunouchi, Chiyoda-ku, Tokyo',
                                'phone' => '+81 3 4567 8901'
                            ],
                            [
                                'city' => 'Dubai',
                                'address' => 'Dubai International Financial Centre',
                                'phone' => '+971 4 567 8901'
                            ]
                        ]
                    ],
                    'cta' => [
                        'show' => true,
                        'title' => 'Global Solutions, Local Support',
                        'description' => 'Experience seamless logistics with our worldwide network of offices and partners.',
                        'button' => [
                            'text' => 'Find Your Local Office',
                            'url' => '/contact'
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 62,
                'section_key' => 'globalPresence',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'WORLDWIDE REACH'
                    ],
                    'heading' => [
                        'line1' => 'Our',
                        'highlighted' => 'Global Footprint'
                    ],
                    'description' => 'Operating across continents with local expertise and global standards.',
                    'stats' => [
                        'show' => true,
                        'items' => [
                            ['value' => '20+', 'label' => 'Countries', 'icon' => 'globe'],
                            ['value' => '30+', 'label' => 'Offices', 'icon' => 'building'],
                            ['value' => '500+', 'label' => 'Employees', 'icon' => 'users'],
                            ['value' => '24/7', 'label' => 'Support', 'icon' => 'clock']
                        ]
                    ],
                    'continents' => [
                        [
                            'id' => 1,
                            'name' => 'North America',
                            'headquarters' => 'New York, USA',
                            'coverage' => 'USA, Canada, Mexico',
                            'timezones' => 'EST, PST, CST, MST',
                            'officeCount' => 8,
                            'countryCount' => 3,
                            'description' => 'Our North American headquarters in New York serves as the hub for our operations across USA, Canada, and Mexico, providing comprehensive logistics solutions.',
                            'image' => 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=500&fit=crop',
                            'link' => '/locations/north-america'
                        ],
                        [
                            'id' => 2,
                            'name' => 'Europe',
                            'headquarters' => 'London, UK',
                            'coverage' => 'UK, Germany, France, Spain, Italy',
                            'timezones' => 'GMT, CET, EET',
                            'officeCount' => 6,
                            'countryCount' => 5,
                            'description' => 'Our European operations are centered in London, with regional offices across major European cities delivering localized logistics solutions.',
                            'image' => 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=500&fit=crop',
                            'link' => '/locations/europe'
                        ],
                        [
                            'id' => 3,
                            'name' => 'Asia Pacific',
                            'headquarters' => 'Singapore',
                            'coverage' => 'Singapore, Japan, Australia, India, China',
                            'timezones' => 'SGT, JST, AEST, IST, CST',
                            'officeCount' => 10,
                            'countryCount' => 5,
                            'description' => 'Our Asia Pacific headquarters in Singapore leads our rapidly growing presence across the region\'s key markets.',
                            'image' => 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&h=500&fit=crop',
                            'link' => '/locations/asia-pacific'
                        ]
                    ],
                    'offices' => [
                        'show' => true,
                        'items' => [
                            [
                                'city' => 'New York',
                                'address' => '350 5th Ave, New York, NY 10118',
                                'phone' => '+1 (212) 555-1234',
                                'email' => 'nyc@example.com'
                            ],
                            [
                                'city' => 'London',
                                'address' => '25 Bank St, London E14 5JP',
                                'phone' => '+44 20 7123 4567',
                                'email' => 'london@example.com'
                            ],
                            [
                                'city' => 'Singapore',
                                'address' => '1 Raffles Place, Singapore 048616',
                                'phone' => '+65 6789 0123',
                                'email' => 'singapore@example.com'
                            ]
                        ]
                    ],
                    'timezone' => [
                        'show' => true,
                        'title' => '24/7 Global Support',
                        'description' => 'Our global team operates across multiple time zones to provide round-the-clock support.',
                        'coverage' => '24/7',
                        'zones' => ['EST', 'GMT', 'SGT', 'AEST']
                    ],
                    'cta' => [
                        'show' => true,
                        'title' => 'Connect With Your Local Office',
                        'description' => 'Find your nearest office and discover how we can help optimize your supply chain.',
                        'primaryButton' => [
                            'text' => 'Find an Office',
                            'url' => '/contact'
                        ],
                        'secondaryButton' => [
                            'show' => true,
                            'text' => 'Contact Global Team',
                            'url' => '/global-contact'
                        ],
                        'social' => [
                            'show' => true,
                            'linkedin' => 'https://linkedin.com',
                            'twitter' => 'https://twitter.com',
                            'facebook' => 'https://facebook.com'
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 63,
                'section_key' => 'globalPresence',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'show' => true,
                        'showPulse' => true,
                        'text' => 'GLOBAL NETWORK'
                    ],
                    'heading' => [
                        'prefix' => 'Worldwide',
                        'highlightedText' => 'Presence',
                        'suffix' => ''
                    ],
                    'description' => 'Serving customers across the globe with local expertise and international standards.',
                    'globalStats' => [
                        'show' => true,
                        'items' => [
                            ['value' => '20+', 'label' => 'Countries'],
                            ['value' => '30+', 'label' => 'Offices'],
                            ['value' => '500+', 'label' => 'Employees'],
                            ['value' => '24/7', 'label' => 'Support']
                        ]
                    ],
                    'regions' => [
                        [
                            'id' => 1,
                            'name' => 'North America',
                            'headquarters' => 'New York, USA',
                            'coverage' => 'USA, Canada, Mexico',
                            'timezones' => 'EST, PST, CST, MST',
                            'officeCount' => 8,
                            'markets' => ['United States', 'Canada', 'Mexico'],
                            'link' => '/locations/north-america'
                        ],
                        [
                            'id' => 2,
                            'name' => 'Europe',
                            'headquarters' => 'London, UK',
                            'coverage' => 'UK, Germany, France, Spain, Italy',
                            'timezones' => 'GMT, CET, EET',
                            'officeCount' => 6,
                            'markets' => ['United Kingdom', 'Germany', 'France', 'Spain', 'Italy'],
                            'link' => '/locations/europe'
                        ],
                        [
                            'id' => 3,
                            'name' => 'Asia Pacific',
                            'headquarters' => 'Singapore',
                            'coverage' => 'Singapore, Japan, Australia, India, China',
                            'timezones' => 'SGT, JST, AEST, IST, CST',
                            'officeCount' => 10,
                            'markets' => ['Singapore', 'Japan', 'Australia', 'India', 'China'],
                            'link' => '/locations/asia-pacific'
                        ],
                        [
                            'id' => 4,
                            'name' => 'Middle East & Africa',
                            'headquarters' => 'Dubai, UAE',
                            'coverage' => 'UAE, Saudi Arabia, South Africa, Egypt',
                            'timezones' => 'GST, SAST, EET',
                            'officeCount' => 4,
                            'markets' => ['UAE', 'Saudi Arabia', 'South Africa', 'Egypt'],
                            'link' => '/locations/mea'
                        ]
                    ],
                    'featuredOffices' => [
                        'show' => true,
                        'items' => [
                            [
                                'city' => 'New York',
                                'country' => 'USA',
                                'address' => '350 5th Ave, New York, NY 10118',
                                'phone' => '+1 (212) 555-1234',
                                'email' => 'nyc@example.com',
                                'description' => 'Our global headquarters serving North American operations and international clients.',
                                'image' => 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&h=500&fit=crop',
                                'link' => '/offices/new-york'
                            ],
                            [
                                'city' => 'London',
                                'country' => 'UK',
                                'address' => '25 Bank St, London E14 5JP',
                                'phone' => '+44 20 7123 4567',
                                'email' => 'london@example.com',
                                'description' => 'European headquarters driving logistics innovation across the continent.',
                                'image' => 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=500&fit=crop',
                                'link' => '/offices/london'
                            ],
                            [
                                'city' => 'Singapore',
                                'country' => 'Singapore',
                                'address' => '1 Raffles Place, Singapore 048616',
                                'phone' => '+65 6789 0123',
                                'email' => 'singapore@example.com',
                                'description' => 'Asia Pacific hub connecting markets across the region.',
                                'image' => 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&h=500&fit=crop',
                                'link' => '/offices/singapore'
                            ]
                        ]
                    ],
                    'businessHours' => [
                        'show' => true,
                        'items' => [
                            ['region' => 'North America', 'hours' => '9:00 AM - 6:00 PM EST'],
                            ['region' => 'Europe', 'hours' => '9:00 AM - 6:00 PM GMT'],
                            ['region' => 'Asia Pacific', 'hours' => '9:00 AM - 6:00 PM SGT'],
                            ['region' => 'Middle East', 'hours' => '9:00 AM - 6:00 PM GST']
                        ]
                    ],
                    'events' => [
                        'show' => true,
                        'items' => [
                            [
                                'month' => 'MAR',
                                'day' => '15',
                                'title' => 'Supply Chain Summit',
                                'location' => 'New York',
                                'link' => '/events/supply-chain-summit'
                            ],
                            [
                                'month' => 'APR',
                                'day' => '22',
                                'title' => 'Logistics Innovation Forum',
                                'location' => 'London',
                                'link' => '/events/logistics-forum'
                            ],
                            [
                                'month' => 'MAY',
                                'day' => '10',
                                'title' => 'E-commerce Logistics Expo',
                                'location' => 'Singapore',
                                'link' => '/events/ecommerce-expo'
                            ]
                        ]
                    ],
                    'contacts' => [
                        'show' => true,
                        'items' => [
                            ['region' => 'North America', 'name' => 'John Smith', 'email' => 'na@example.com'],
                            ['region' => 'Europe', 'name' => 'Sarah Johnson', 'email' => 'eu@example.com'],
                            ['region' => 'Asia Pacific', 'name' => 'Michael Chen', 'email' => 'apac@example.com']
                        ]
                    ],
                    'social' => [
                        'show' => true,
                        'linkedin' => 'https://linkedin.com',
                        'twitter' => 'https://twitter.com',
                        'facebook' => 'https://facebook.com'
                    ],
                    'viewAll' => [
                        'show' => true,
                        'text' => 'Explore Global Locations',
                        'url' => '/locations'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 64,
                'section_key' => 'globalPresence',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Career Section
            [
                'id' => 65,
                'section_key' => 'career',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => [
                        'show' => true,
                        'showPulse' => true,
                        'text' => 'CAREERS'
                    ],
                    'heading' => [
                        'prefix' => 'Join Our',
                        'highlightedText' => 'Team',
                        'suffix' => ''
                    ],
                    'description' => 'Build your career with us and help shape the future of supply chain management.',
                    'whyJoin' => [
                        'show' => true,
                        'title' => 'Why Join Us?',
                        'items' => [
                            [
                                'title' => 'Great Culture',
                                'description' => 'Collaborative, inclusive, and innovative work environment.',
                                'icon' => 'users'
                            ],
                            [
                                'title' => 'Work-Life Balance',
                                'description' => 'Flexible hours and remote work options available.',
                                'icon' => 'heart'
                            ],
                            [
                                'title' => 'Growth Opportunities',
                                'description' => 'Continuous learning and career advancement programs.',
                                'icon' => 'lightning'
                            ],
                            [
                                'title' => 'Learning & Development',
                                'description' => 'Access to training, courses, and certification programs.',
                                'icon' => 'academic'
                            ]
                        ]
                    ],
                    'positions' => [
                        'show' => true,
                        'title' => 'Open Positions',
                        'viewAllUrl' => '/careers',
                        'items' => [
                            [
                                'id' => 1,
                                'title' => 'Senior Software Engineer',
                                'department' => 'Engineering',
                                'location' => 'Remote / New York',
                                'type' => 'Full-time',
                                'salary' => '$120k - $160k',
                                'isNew' => true,
                                'description' => 'Looking for an experienced engineer to help build our next-generation logistics platform.',
                                'link' => '/careers/senior-software-engineer'
                            ],
                            [
                                'id' => 2,
                                'title' => 'Product Manager',
                                'department' => 'Product',
                                'location' => 'San Francisco, CA',
                                'type' => 'Full-time',
                                'salary' => '$110k - $150k',
                                'isNew' => false,
                                'description' => 'Drive product strategy and roadmap for our core logistics solutions.',
                                'link' => '/careers/product-manager'
                            ],
                            [
                                'id' => 3,
                                'title' => 'Sales Director',
                                'department' => 'Sales',
                                'location' => 'Remote / US',
                                'type' => 'Full-time',
                                'salary' => '$150k - $200k + Commission',
                                'isNew' => true,
                                'description' => 'Lead our enterprise sales team and drive revenue growth.',
                                'link' => '/careers/sales-director'
                            ],
                            [
                                'id' => 4,
                                'title' => 'Customer Success Manager',
                                'department' => 'Customer Success',
                                'location' => 'Chicago, IL',
                                'type' => 'Full-time',
                                'salary' => '$70k - $90k',
                                'isNew' => false,
                                'description' => 'Ensure customer satisfaction and drive adoption of our platform.',
                                'link' => '/careers/customer-success-manager'
                            ],
                            [
                                'id' => 5,
                                'title' => 'Data Scientist',
                                'department' => 'Data',
                                'location' => 'Remote / Austin',
                                'type' => 'Full-time',
                                'salary' => '$130k - $170k',
                                'isNew' => false,
                                'description' => 'Build predictive models and analytics solutions for supply chain optimization.',
                                'link' => '/careers/data-scientist'
                            ],
                            [
                                'id' => 6,
                                'title' => 'Marketing Manager',
                                'department' => 'Marketing',
                                'location' => 'New York, NY',
                                'type' => 'Full-time',
                                'salary' => '$80k - $110k',
                                'isNew' => false,
                                'description' => 'Lead demand generation and brand awareness campaigns.',
                                'link' => '/careers/marketing-manager'
                            ]
                        ]
                    ],
                    'life' => [
                        'show' => true,
                        'title' => 'Life at Sazzad',
                        'description' => 'We believe in creating an environment where everyone can thrive and do their best work.',
                        'highlights' => [
                            'Collaborative and inclusive workplace',
                            'Weekly team lunches and events',
                            'Wellness programs and gym membership',
                            'Quarterly team offsites'
                        ],
                        'images' => [
                            'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop',
                            'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
                            'https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=600&h=400&fit=crop'
                        ],
                        'link' => '/about/culture'
                    ],
                    'perks' => [
                        'show' => true,
                        'title' => 'Perks & Benefits',
                        'items' => [
                            [
                                'title' => 'Health Insurance',
                                'description' => 'Comprehensive medical, dental, and vision coverage',
                                'icon' => 'health'
                            ],
                            [
                                'title' => 'Flexible Work',
                                'description' => 'Remote-first culture with flexible hours',
                                'icon' => 'office'
                            ],
                            [
                                'title' => 'Paid Time Off',
                                'description' => 'Unlimited PTO and paid parental leave',
                                'icon' => 'clock'
                            ],
                            [
                                'title' => 'Learning Stipend',
                                'description' => '$2,000 annual budget for courses and conferences',
                                'icon' => 'academic'
                            ]
                        ]
                    ],
                    'cta' => [
                        'show' => true,
                        'title' => 'Ready to Make an Impact?',
                        'description' => 'Join us in building the future of logistics technology.',
                        'button' => [
                            'text' => 'View All Openings',
                            'url' => '/careers'
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 66,
                'section_key' => 'career',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'CAREERS'
                    ],
                    'heading' => [
                        'line1' => 'Build Your',
                        'highlighted' => 'Future With Us'
                    ],
                    'description' => 'Join a team of innovators and help shape the future of supply chain technology.',
                    'stats' => [
                        'show' => true,
                        'items' => [
                            ['value' => '50+', 'label' => 'Open Positions'],
                            ['value' => '500+', 'label' => 'Team Members'],
                            ['value' => '10+', 'label' => 'Countries'],
                            ['value' => '98%', 'label' => 'Retention Rate']
                        ]
                    ],
                    'search' => [
                        'placeholder' => 'Search jobs by title, department, or keyword...'
                    ],
                    'pagination' => [
                        'perPage' => 6
                    ],
                    'positions' => [
                        'items' => [
                            [
                                'id' => 1,
                                'title' => 'Senior Software Engineer',
                                'department' => 'Engineering',
                                'location' => 'Remote / New York',
                                'type' => 'Full-time',
                                'salary' => '$120k - $160k',
                                'isNew' => true,
                                'description' => 'Looking for an experienced engineer to help build our next-generation logistics platform.',
                                'tags' => ['React', 'Node.js', 'AWS'],
                                'link' => '/careers/senior-software-engineer'
                            ],
                            [
                                'id' => 2,
                                'title' => 'Product Manager',
                                'department' => 'Product',
                                'location' => 'San Francisco, CA',
                                'type' => 'Full-time',
                                'salary' => '$110k - $150k',
                                'isNew' => false,
                                'description' => 'Drive product strategy and roadmap for our core logistics solutions.',
                                'tags' => ['Product Strategy', 'Agile', 'SaaS'],
                                'link' => '/careers/product-manager'
                            ],
                            [
                                'id' => 3,
                                'title' => 'Sales Director',
                                'department' => 'Sales',
                                'location' => 'Remote / US',
                                'type' => 'Full-time',
                                'salary' => '$150k - $200k + Commission',
                                'isNew' => true,
                                'description' => 'Lead our enterprise sales team and drive revenue growth.',
                                'tags' => ['Enterprise Sales', 'SaaS', 'Leadership'],
                                'link' => '/careers/sales-director'
                            ],
                            [
                                'id' => 4,
                                'title' => 'Customer Success Manager',
                                'department' => 'Customer Success',
                                'location' => 'New York, NY',
                                'type' => 'Full-time',
                                'salary' => '$70k - $90k',
                                'isNew' => false,
                                'description' => 'Ensure customer satisfaction and drive adoption of our platform.',
                                'tags' => ['Customer Success', 'Account Management'],
                                'link' => '/careers/customer-success-manager'
                            ],
                            [
                                'id' => 5,
                                'title' => 'Data Scientist',
                                'department' => 'Data',
                                'location' => 'Remote / Austin',
                                'type' => 'Full-time',
                                'salary' => '$130k - $170k',
                                'isNew' => false,
                                'description' => 'Build predictive models and analytics solutions for supply chain optimization.',
                                'tags' => ['Python', 'Machine Learning', 'SQL'],
                                'link' => '/careers/data-scientist'
                            ],
                            [
                                'id' => 6,
                                'title' => 'Marketing Manager',
                                'department' => 'Marketing',
                                'location' => 'Remote / US',
                                'type' => 'Full-time',
                                'salary' => '$80k - $110k',
                                'isNew' => false,
                                'description' => 'Lead demand generation and brand awareness campaigns.',
                                'tags' => ['Digital Marketing', 'Content Strategy'],
                                'link' => '/careers/marketing-manager'
                            ]
                        ]
                    ],
                    'culture' => [
                        'show' => true,
                        'title' => 'Life at Sazzad',
                        'items' => [
                            [
                                'title' => 'Collaborative Culture',
                                'description' => 'Work with talented people who support and inspire each other.',
                                'icon' => 'users'
                            ],
                            [
                                'title' => 'Global Impact',
                                'description' => 'Make a difference for businesses around the world.',
                                'icon' => 'globe'
                            ],
                            [
                                'title' => 'Growth Mindset',
                                'description' => 'Continuous learning and career advancement opportunities.',
                                'icon' => 'trophy'
                            ]
                        ]
                    ],
                    'cta' => [
                        'show' => true,
                        'title' => 'Ready to Make an Impact?',
                        'description' => 'Join us in building the future of logistics technology.',
                        'primaryButton' => [
                            'text' => 'View All Openings',
                            'url' => '/careers'
                        ],
                        'secondaryButton' => [
                            'show' => true,
                            'text' => 'Learn About Benefits',
                            'url' => '/careers/benefits'
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 67,
                'section_key' => 'career',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'show' => true,
                        'showPulse' => true,
                        'text' => 'CAREERS'
                    ],
                    'heading' => [
                        'prefix' => 'Shape the',
                        'highlightedText' => 'Future of Logistics',
                        'suffix' => ''
                    ],
                    'description' => 'Join our mission to revolutionize supply chain management and build technology that powers global commerce.',
                    'featuredRole' => [
                        'show' => true,
                        'title' => 'Senior Product Manager',
                        'department' => 'Product',
                        'location' => 'San Francisco, CA',
                        'type' => 'Full-time',
                        'description' => 'Lead product strategy for our core logistics platform and shape the future of supply chain technology.',
                        'benefits' => [
                            'Own a key strategic product area',
                            'Work with cutting-edge technology',
                            'Direct impact on customer success',
                            'Collaborate with world-class engineers'
                        ],
                        'link' => '/careers/senior-product-manager'
                    ],
                    'departments' => [
                        [
                            'id' => 1,
                            'name' => 'Engineering',
                            'jobs' => [
                                [
                                    'id' => 1,
                                    'title' => 'Senior Frontend Engineer',
                                    'location' => 'Remote / US',
                                    'type' => 'Full-time',
                                    'salary' => '$140k - $180k',
                                    'link' => '/careers/frontend-engineer'
                                ],
                                [
                                    'id' => 2,
                                    'title' => 'Backend Engineer',
                                    'location' => 'Remote / US',
                                    'type' => 'Full-time',
                                    'salary' => '$130k - $170k',
                                    'link' => '/careers/backend-engineer'
                                ]
                            ]
                        ],
                        [
                            'id' => 2,
                            'name' => 'Product',
                            'jobs' => [
                                [
                                    'id' => 3,
                                    'title' => 'Product Designer',
                                    'location' => 'San Francisco, CA',
                                    'type' => 'Full-time',
                                    'salary' => '$110k - $150k',
                                    'link' => '/careers/product-designer'
                                ]
                            ]
                        ],
                        [
                            'id' => 3,
                            'name' => 'Sales',
                            'jobs' => [
                                [
                                    'id' => 4,
                                    'title' => 'Enterprise Account Executive',
                                    'location' => 'Remote / US',
                                    'type' => 'Full-time',
                                    'salary' => '$150k - $200k + Commission',
                                    'link' => '/careers/enterprise-ae'
                                ]
                            ]
                        ]
                    ],
                    'whyJoin' => [
                        'show' => true,
                        'items' => [
                            'Work with talented and passionate people',
                            'Solve challenging problems at scale',
                            'Competitive compensation and equity',
                            'Flexible work arrangements',
                            'Comprehensive health benefits',
                            'Professional development budget'
                        ]
                    ],
                    'perks' => [
                        'show' => true,
                        'items' => [
                            [
                                'title' => 'Health & Wellness',
                                'description' => 'Comprehensive medical, dental, and vision coverage',
                                'icon' => 'health'
                            ],
                            [
                                'title' => 'Remote-First',
                                'description' => 'Work from anywhere with flexible hours',
                                'icon' => 'remote'
                            ],
                            [
                                'title' => 'Flexible PTO',
                                'description' => 'Unlimited paid time off',
                                'icon' => 'flex'
                            ],
                            [
                                'title' => 'Learning Stipend',
                                'description' => '$2,000 annual budget for courses and conferences',
                                'icon' => 'learn'
                            ],
                            [
                                'title' => 'Snacks & Coffee',
                                'description' => 'Fully stocked kitchen in all offices',
                                'icon' => 'food'
                            ],
                            [
                                'title' => 'Birthday Off',
                                'description' => 'Paid day off for your birthday',
                                'icon' => 'cake'
                            ]
                        ]
                    ],
                    'team' => [
                        'show' => true,
                        'members' => [
                            [
                                'name' => 'Sarah Chen',
                                'role' => 'Engineering Manager',
                                'quote' => 'The best part about working here is the collaborative culture and the impact we make every day.',
                                'image' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop'
                            ],
                            [
                                'name' => 'Michael Rodriguez',
                                'role' => 'Product Lead',
                                'quote' => 'We\'re building technology that truly transforms how businesses operate globally.',
                                'image' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop'
                            ],
                            [
                                'name' => 'Emily Watson',
                                'role' => 'Sales Director',
                                'quote' => 'The energy and passion of this team is unmatched. Everyone is committed to excellence.',
                                'image' => 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop'
                            ]
                        ]
                    ],
                    'social' => [
                        'show' => true,
                        'linkedin' => 'https://linkedin.com',
                        'twitter' => 'https://twitter.com',
                        'facebook' => 'https://facebook.com'
                    ],
                    'viewAll' => [
                        'show' => true,
                        'text' => 'View All Open Positions',
                        'url' => '/careers'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 68,
                'section_key' => 'career',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Trust Signal Section
            [
                'id' => 69,
                'section_key' => 'trustSignal',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => [
                        'show' => true,
                        'showPulse' => true,
                        'text' => 'TRUST & SECURITY'
                    ],
                    'heading' => [
                        'prefix' => 'Built on',
                        'highlightedText' => 'Trust',
                        'suffix' => ''
                    ],
                    'description' => 'We\'re committed to the highest standards of security, compliance, and customer satisfaction.',
                    'stats' => [
                        'show' => true,
                        'items' => [
                            ['value' => '5000+', 'label' => 'Happy Customers'],
                            ['value' => '99.9%', 'label' => 'Uptime'],
                            ['value' => '98%', 'label' => 'Satisfaction Rate'],
                            ['value' => '24/7', 'label' => 'Support']
                        ]
                    ],
                    'badges' => [
                        'show' => true,
                        'title' => 'Industry Recognition',
                        'items' => [
                            ['name' => 'Best Logistics Platform', 'issuer' => 'Supply Chain Awards 2024', 'icon' => 'award'],
                            ['name' => 'ISO 27001 Certified', 'issuer' => 'International Standards', 'icon' => 'certificate'],
                            ['name' => 'Top Rated Platform', 'issuer' => 'G2 2024', 'icon' => 'ribbon'],
                            ['name' => 'GDPR Compliant', 'issuer' => 'EU Standards', 'icon' => 'shield']
                        ]
                    ],
                    'certifications' => [
                        'show' => true,
                        'title' => 'Certifications & Compliance',
                        'items' => [
                            ['name' => 'ISO 27001', 'issuer' => 'International Organization', 'year' => '2024'],
                            ['name' => 'SOC 2 Type II', 'issuer' => 'AICPA', 'year' => '2024'],
                            ['name' => 'GDPR Compliant', 'issuer' => 'EU', 'year' => '2024'],
                            ['name' => 'PCI DSS Level 1', 'issuer' => 'PCI Council', 'year' => '2024']
                        ]
                    ],
                    'trustIndicators' => [
                        [
                            'title' => '5000+ Customers',
                            'description' => 'Trusted by businesses worldwide',
                            'icon' => 'users'
                        ],
                        [
                            'title' => 'Global Coverage',
                            'description' => '50+ countries served',
                            'icon' => 'globe'
                        ],
                        [
                            'title' => '24/7 Support',
                            'description' => 'Round-the-clock assistance',
                            'icon' => 'clock'
                        ]
                    ],
                    'security' => [
                        'show' => true,
                        'title' => 'Security Features',
                        'items' => [
                            ['title' => '256-bit Encryption', 'description' => 'Bank-level security for your data'],
                            ['title' => 'Multi-factor Authentication', 'description' => 'Enhanced account protection'],
                            ['title' => 'Automated Backups', 'description' => 'Daily encrypted backups'],
                            ['title' => 'Real-time Monitoring', 'description' => '24/7 security monitoring']
                        ]
                    ],
                    'testimonials' => [
                        'show' => true,
                        'title' => 'What Our Customers Say',
                        'items' => [
                            [
                                'name' => 'Sarah Johnson',
                                'role' => 'Supply Chain Director',
                                'company' => 'TechLogix',
                                'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
                                'rating' => 5,
                                'quote' => 'The most reliable platform we\'ve used. Their security and uptime have been exceptional.'
                            ],
                            [
                                'name' => 'Michael Chen',
                                'role' => 'Operations Manager',
                                'company' => 'AutoParts Global',
                                'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
                                'rating' => 5,
                                'quote' => 'We trust them with our most critical supply chain data. Their security standards are top-notch.'
                            ],
                            [
                                'name' => 'Emily Rodriguez',
                                'role' => 'Logistics Director',
                                'company' => 'FreshFoods Co',
                                'avatar' => 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
                                'rating' => 4,
                                'quote' => 'Excellent platform with robust security features and reliable customer support.'
                            ]
                        ]
                    ],
                    'cta' => [
                        'show' => true,
                        'title' => 'Experience Enterprise Security',
                        'description' => 'Join thousands of businesses that trust us with their supply chain operations.',
                        'button' => [
                            'text' => 'Start Free Trial',
                            'url' => '/signup'
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 70,
                'section_key' => 'trustSignal',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'TRUST & SECURITY'
                    ],
                    'heading' => [
                        'line1' => 'Your Security is Our',
                        'highlighted' => 'Top Priority'
                    ],
                    'description' => 'We maintain the highest standards of security and compliance to protect your data.',
                    'stats' => [
                        'show' => true,
                        'items' => [
                            ['value' => '5000+', 'label' => 'Customers Protected', 'icon' => 'users'],
                            ['value' => '99.99%', 'label' => 'Uptime SLA', 'icon' => 'clock'],
                            ['value' => '256-bit', 'label' => 'Encryption', 'icon' => 'lock'],
                            ['value' => '24/7', 'label' => 'Monitoring', 'icon' => 'shield']
                        ]
                    ],
                    'tabs' => [
                        'show' => true,
                        'items' => [
                            [
                                'name' => 'Data Security',
                                'title' => 'Bank-Level Security',
                                'description' => 'Your data is protected with enterprise-grade security measures.',
                                'points' => [
                                    '256-bit AES encryption for data at rest',
                                    'TLS 1.3 for data in transit',
                                    'Regular security audits and penetration testing',
                                    'Automated backup and disaster recovery'
                                ],
                                'badges' => [
                                    ['name' => 'ISO 27001', 'icon' => 'certificate'],
                                    ['name' => 'SOC 2', 'icon' => 'award']
                                ]
                            ],
                            [
                                'name' => 'Compliance',
                                'title' => 'Global Compliance Standards',
                                'description' => 'We meet rigorous compliance requirements across multiple jurisdictions.',
                                'points' => [
                                    'GDPR compliant for EU data protection',
                                    'CCPA compliant for California privacy',
                                    'PCI DSS Level 1 for payment security',
                                    'HIPAA ready for healthcare data'
                                ],
                                'badges' => [
                                    ['name' => 'GDPR', 'icon' => 'ribbon'],
                                    ['name' => 'CCPA', 'icon' => 'certificate']
                                ]
                            ],
                            [
                                'name' => 'Privacy',
                                'title' => 'Your Privacy Matters',
                                'description' => 'We\'re committed to protecting your personal information.',
                                'points' => [
                                    'No selling of personal data',
                                    'Transparent data practices',
                                    'Right to access and delete your data',
                                    'Privacy by design approach'
                                ],
                                'badges' => [
                                    ['name' => 'Privacy Shield', 'icon' => 'award'],
                                    ['name' => 'ePrivacy', 'icon' => 'ribbon']
                                ]
                            ]
                        ]
                    ],
                    'certifications' => [
                        'show' => true,
                        'title' => 'Certifications & Compliance',
                        'items' => [
                            ['name' => 'ISO 27001', 'issuer' => 'International Organization', 'year' => '2024', 'link' => '/certifications/iso-27001'],
                            ['name' => 'SOC 2 Type II', 'issuer' => 'AICPA', 'year' => '2024', 'link' => '/certifications/soc2'],
                            ['name' => 'GDPR Compliant', 'issuer' => 'EU', 'year' => '2024', 'link' => '/certifications/gdpr'],
                            ['name' => 'PCI DSS Level 1', 'issuer' => 'PCI Council', 'year' => '2024', 'link' => '/certifications/pci']
                        ]
                    ],
                    'security' => [
                        'show' => true,
                        'title' => 'Security Features',
                        'items' => [
                            ['title' => 'Encryption at Rest', 'description' => 'All data stored is encrypted using AES-256', 'icon' => 'lock'],
                            ['title' => 'Encryption in Transit', 'description' => 'TLS 1.3 for all data transmission', 'icon' => 'shield'],
                            ['title' => 'Access Controls', 'description' => 'Role-based access and MFA', 'icon' => 'users'],
                            ['title' => 'Audit Logging', 'description' => 'Complete audit trail of all actions', 'icon' => 'scale']
                        ]
                    ],
                    'trustedBy' => [
                        'show' => true,
                        'title' => 'Trusted by Industry Leaders',
                        'logos' => [
                            ['name' => 'Company A', 'url' => '#'],
                            ['name' => 'Company B', 'url' => '#'],
                            ['name' => 'Company C', 'url' => '#'],
                            ['name' => 'Company D', 'url' => '#']
                        ]
                    ],
                    'testimonials' => [
                        'show' => true,
                        'title' => 'What Our Customers Say',
                        'items' => [
                            [
                                'name' => 'Sarah Johnson',
                                'role' => 'CTO',
                                'company' => 'TechCorp',
                                'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
                                'rating' => 5,
                                'quote' => 'Their security measures give us complete peace of mind. We trust them with our most sensitive data.'
                            ],
                            [
                                'name' => 'Michael Chen',
                                'role' => 'Security Director',
                                'company' => 'SecureSoft',
                                'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
                                'rating' => 5,
                                'quote' => 'Best-in-class security infrastructure. Their compliance certifications are impressive.'
                            ],
                            [
                                'name' => 'Emily Rodriguez',
                                'role' => 'Compliance Officer',
                                'company' => 'GlobalFinance',
                                'avatar' => 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
                                'rating' => 4,
                                'quote' => 'They\'ve made compliance easy with their comprehensive security framework.'
                            ]
                        ]
                    ],
                    'compliance' => [
                        'show' => true,
                        'items' => ['GDPR', 'CCPA', 'SOC 2', 'ISO 27001', 'PCI DSS', 'HIPAA Ready']
                    ],
                    'cta' => [
                        'show' => true,
                        'title' => 'Ready to Experience Enterprise Security?',
                        'description' => 'Join thousands of businesses that trust us with their supply chain operations.',
                        'primaryButton' => [
                            'text' => 'Start Free Trial',
                            'url' => '/signup'
                        ],
                        'secondaryButton' => [
                            'show' => true,
                            'text' => 'Contact Security Team',
                            'url' => '/contact'
                        ],
                        'avatars' => [
                            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop',
                            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop',
                            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop'
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 71,
                'section_key' => 'trustSignal',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'show' => true,
                        'showPulse' => true,
                        'text' => 'TRUST & SECURITY'
                    ],
                    'heading' => [
                        'prefix' => 'Built on',
                        'highlightedText' => 'Trust',
                        'suffix' => 'and Transparency'
                    ],
                    'description' => 'We\'re committed to the highest standards of security, compliance, and customer satisfaction.',
                    'featured' => [
                        'show' => true,
                        'label' => 'ISO 27001 Certified',
                        'title' => 'Enterprise-Grade Security',
                        'description' => 'We maintain the highest security standards with ISO 27001 certification and SOC 2 compliance.',
                        'buttonText' => 'View Security Overview',
                        'link' => '/security'
                    ],
                    'stats' => [
                        'show' => true,
                        'items' => [
                            ['value' => '5000+', 'label' => 'Customers'],
                            ['value' => '99.99%', 'label' => 'Uptime'],
                            ['value' => '256-bit', 'label' => 'Encryption'],
                            ['value' => '24/7', 'label' => 'Monitoring']
                        ]
                    ],
                    'certifications' => [
                        'show' => true,
                        'title' => 'Certifications',
                        'items' => [
                            ['name' => 'ISO 27001', 'issuer' => 'International Organization', 'year' => '2024'],
                            ['name' => 'SOC 2 Type II', 'issuer' => 'AICPA', 'year' => '2024'],
                            ['name' => 'GDPR Compliant', 'issuer' => 'EU', 'year' => '2024'],
                            ['name' => 'PCI DSS Level 1', 'issuer' => 'PCI Council', 'year' => '2024']
                        ]
                    ],
                    'security' => [
                        'show' => true,
                        'title' => 'Security Features',
                        'items' => [
                            ['title' => 'Encryption at Rest', 'description' => 'AES-256 encryption for all stored data', 'icon' => 'lock'],
                            ['title' => 'Encryption in Transit', 'description' => 'TLS 1.3 for all data transmission', 'icon' => 'shield'],
                            ['title' => 'Access Controls', 'description' => 'Role-based access and MFA required', 'icon' => 'users'],
                            ['title' => 'Audit Logging', 'description' => 'Complete audit trail of all actions', 'icon' => 'eye']
                        ]
                    ],
                    'rating' => [
                        'show' => true,
                        'score' => 4.8,
                        'count' => '1,200+'
                    ],
                    'testimonials' => [
                        'show' => true,
                        'items' => [
                            [
                                'name' => 'Sarah Johnson',
                                'company' => 'TechCorp',
                                'rating' => 5,
                                'quote' => 'Their security measures give us complete peace of mind. We trust them with our most sensitive data.'
                            ],
                            [
                                'name' => 'Michael Chen',
                                'company' => 'SecureSoft',
                                'rating' => 5,
                                'quote' => 'Best-in-class security infrastructure. Their compliance certifications are impressive.'
                            ],
                            [
                                'name' => 'Emily Rodriguez',
                                'company' => 'GlobalFinance',
                                'rating' => 4,
                                'quote' => 'They\'ve made compliance easy with their comprehensive security framework.'
                            ],
                            [
                                'name' => 'David Kim',
                                'company' => 'DataSafe',
                                'rating' => 5,
                                'quote' => 'Excellent security practices and transparent about their compliance standards.'
                            ]
                        ]
                    ],
                    'compliance' => [
                        'show' => true,
                        'items' => ['GDPR', 'CCPA', 'SOC 2', 'ISO 27001', 'PCI DSS']
                    ],
                    'trustedBy' => [
                        'show' => true,
                        'logos' => [
                            ['name' => 'Company A', 'url' => '#'],
                            ['name' => 'Company B', 'url' => '#'],
                            ['name' => 'Company C', 'url' => '#'],
                            ['name' => 'Company D', 'url' => '#']
                        ]
                    ],
                    'report' => [
                        'show' => true,
                        'title' => 'Security Report',
                        'description' => 'Download our latest security audit report',
                        'link' => '/security-report.pdf'
                    ],
                    'cta' => [
                        'show' => true,
                        'text' => 'Learn More About Security',
                        'url' => '/security'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 72,
                'section_key' => 'trustSignal',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Newsletter Section
            [
                'id' => 73,
                'section_key' => 'newsletter',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => [
                        'show' => true,
                        'showPulse' => true,
                        'text' => 'NEWSLETTER'
                    ],
                    'heading' => [
                        'prefix' => 'Stay',
                        'highlightedText' => 'Updated',
                        'suffix' => ''
                    ],
                    'description' => 'Get the latest news, product updates, and industry insights delivered straight to your inbox.',
                    'benefits' => [
                        'show' => true,
                        'items' => [
                            'Weekly industry insights and trends',
                            'Exclusive product updates and features',
                            'Early access to webinars and events',
                            'Special offers and promotions'
                        ]
                    ],
                    'socialProof' => [
                        'show' => true,
                        'avatars' => [
                            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop',
                            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop',
                            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop'
                        ],
                        'count' => '10,000',
                        'text' => 'subscribers already joined'
                    ],
                    'successMessage' => [
                        'title' => 'Thanks for Subscribing!',
                        'description' => 'You\'ve been added to our newsletter. Check your inbox for a welcome email.'
                    ],
                    'form' => [
                        'title' => 'Subscribe to Our Newsletter',
                        'showName' => true,
                        'namePlaceholder' => 'Enter your name',
                        'emailPlaceholder' => 'you@example.com',
                        'buttonText' => 'Subscribe Now',
                        'privacyText' => 'We respect your privacy. Unsubscribe at any time.',
                        'privacyLink' => '/privacy',
                        'frequency' => 'Weekly newsletter. No spam, ever.',
                        'showInterests' => true,
                        'interests' => [
                            'Product Updates',
                            'Industry News',
                            'Tips & Tutorials',
                            'Events & Webinars'
                        ]
                    ],
                    'trustBadges' => [
                        'show' => true,
                        'items' => [
                            ['text' => 'No spam, ever', 'icon' => 'shield'],
                            ['text' => 'Unsubscribe anytime', 'icon' => 'shield'],
                            ['text' => 'Your data is safe', 'icon' => 'shield']
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 74,
                'section_key' => 'newsletter',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'NEWSLETTER'
                    ],
                    'heading' => [
                        'line1' => 'Join Our',
                        'highlighted' => 'Newsletter'
                    ],
                    'description' => 'Get the latest updates, industry insights, and exclusive offers delivered straight to your inbox.',
                    'topics' => [
                        'Product Updates',
                        'Industry News',
                        'Tips & Best Practices',
                        'Case Studies',
                        'Events & Webinars'
                    ],
                    'successMessage' => [
                        'title' => 'Successfully Subscribed!',
                        'description' => 'Thank you for subscribing to our newsletter. You\'ll receive a confirmation email shortly.'
                    ],
                    'form' => [
                        'namePlaceholder' => 'John Doe',
                        'emailPlaceholder' => 'john@example.com',
                        'buttonText' => 'Subscribe to Newsletter'
                    ],
                    'links' => [
                        'privacy' => '/privacy'
                    ],
                    'social' => [
                        'show' => true,
                        'text' => 'Connect with us on social media',
                        'facebook' => 'https://facebook.com',
                        'twitter' => 'https://twitter.com',
                        'linkedin' => 'https://linkedin.com'
                    ],
                    'trustBadges' => [
                        'show' => true,
                        'items' => [
                            ['number' => '10,000+', 'label' => 'Subscribers'],
                            ['number' => '98%', 'label' => 'Satisfaction'],
                            ['number' => 'Weekly', 'label' => 'Newsletter'],
                            ['number' => 'Free', 'label' => 'Subscription']
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 75,
                'section_key' => 'newsletter',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'show' => true,
                        'showPulse' => true,
                        'text' => 'NEWSLETTER'
                    ],
                    'heading' => [
                        'prefix' => 'Stay',
                        'highlightedText' => 'Informed',
                        'suffix' => '& Inspired'
                    ],
                    'description' => 'Get the latest logistics insights, product updates, and exclusive content delivered to your inbox.',
                    'featured' => [
                        'show' => true,
                        'badge' => 'FREE BONUS',
                        'title' => 'Get Our Exclusive E-Book',
                        'description' => 'Subscribe today and receive our comprehensive guide to supply chain optimization - absolutely free!'
                    ],
                    'benefits' => [
                        'show' => true,
                        'title' => 'What You\'ll Get',
                        'items' => [
                            [
                                'title' => 'Weekly Industry Insights',
                                'description' => 'Stay ahead with the latest logistics trends and best practices',
                                'icon' => 'book'
                            ],
                            [
                                'title' => 'Product Updates',
                                'description' => 'Be the first to know about new features and improvements',
                                'icon' => 'star'
                            ],
                            [
                                'title' => 'Expert Tips',
                                'description' => 'Actionable advice from supply chain professionals',
                                'icon' => 'chat'
                            ],
                            [
                                'title' => 'Exclusive Offers',
                                'description' => 'Special discounts and early access to events',
                                'icon' => 'heart'
                            ]
                        ]
                    ],
                    'testimonials' => [
                        'show' => true,
                        'avatars' => [
                            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop',
                            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop',
                            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop'
                        ],
                        'quote' => 'This newsletter has been invaluable for staying current with logistics trends. The insights are practical and actionable.'
                    ],
                    'successMessage' => [
                        'title' => 'Check Your Inbox!',
                        'description' => 'We\'ve sent a confirmation link to your email. Please click it to verify your subscription.'
                    ],
                    'form' => [
                        'title' => 'Get the Newsletter',
                        'showName' => true,
                        'namePlaceholder' => 'Enter your name',
                        'emailPlaceholder' => 'you@example.com',
                        'buttonText' => 'Subscribe Now',
                        'privacyText' => 'We respect your privacy. Unsubscribe at any time.',
                        'showFrequency' => true
                    ],
                    'recent' => [
                        'show' => true,
                        'avatars' => [
                            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=30&h=30&fit=crop',
                            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=30&h=30&fit=crop'
                        ],
                        'count' => '150'
                    ],
                    'footerNote' => 'No spam, ever. Unsubscribe at any time with just one click.'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 76,
                'section_key' => 'newsletter',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Mobile App Section
            [
                'id' => 77,
                'section_key' => 'mobileApp',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => [
                        'show' => true,
                        'showPulse' => true,
                        'text' => 'MOBILE APP'
                    ],
                    'heading' => [
                        'prefix' => 'Manage Your',
                        'highlightedText' => 'Supply Chain',
                        'suffix' => 'On the Go'
                    ],
                    'description' => 'Take full control of your inventory and logistics from anywhere with our powerful mobile app.',
                    'features' => [
                        'show' => true,
                        'items' => [
                            ['text' => 'Scan barcodes with camera', 'icon' => 'camera'],
                            ['text' => 'Real-time inventory updates', 'icon' => 'clock'],
                            ['text' => 'Push notifications for alerts', 'icon' => 'bell'],
                            ['text' => 'Offline mode support', 'icon' => 'cloud'],
                            ['text' => 'QR code scanning', 'icon' => 'qrcode'],
                            ['text' => 'Enterprise security', 'icon' => 'shield']
                        ]
                    ],
                    'appButtons' => [
                        'show' => true,
                        'ios' => [
                            'url' => 'https://apps.apple.com/app/example'
                        ],
                        'android' => [
                            'url' => 'https://play.google.com/store/apps/details?id=com.example'
                        ]
                    ],
                    'qrCode' => [
                        'show' => true,
                        'image' => 'https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://example.com/download',
                        'title' => 'Scan to Download',
                        'description' => 'Get the app directly on your phone'
                    ],
                    'screenshots' => [
                        'main' => 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=500&fit=crop',
                        'floating' => [
                            [
                                'image' => 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=100&h=100&fit=crop',
                                'position' => '-top-6 -right-6'
                            ],
                            [
                                'image' => 'https://images.unsplash.com/photo-1611162617263-4ec3060a058e?w=100&h=100&fit=crop',
                                'position' => '-bottom-6 -left-6'
                            ]
                        ]
                    ],
                    'rating' => [
                        'show' => true,
                        'stars' => 5,
                        'score' => '4.9',
                        'count' => '10k+'
                    ],
                    'stats' => [
                        'show' => true,
                        'items' => [
                            ['value' => '100k+', 'label' => 'Downloads'],
                            ['value' => '4.9', 'label' => 'App Store Rating'],
                            ['value' => '98%', 'label' => 'User Satisfaction'],
                            ['value' => '24/7', 'label' => 'Mobile Access']
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 78,
                'section_key' => 'mobileApp',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'MOBILE APP'
                    ],
                    'heading' => [
                        'line1' => 'Powerful Mobile',
                        'highlighted' => 'App'
                    ],
                    'description' => 'Manage your inventory and logistics from anywhere with our feature-rich mobile application.',
                    'features' => [
                        [
                            'title' => 'Barcode Scanning',
                            'description' => 'Scan barcodes instantly to update inventory levels',
                            'icon' => 'qrcode'
                        ],
                        [
                            'title' => 'Photo Management',
                            'description' => 'Add and manage product photos on the go',
                            'icon' => 'camera'
                        ],
                        [
                            'title' => 'Smart Alerts',
                            'description' => 'Get notified about low stock and shipments',
                            'icon' => 'bell'
                        ],
                        [
                            'title' => 'Offline Mode',
                            'description' => 'Work offline and sync when connected',
                            'icon' => 'clock'
                        ]
                    ],
                    'appButtons' => [
                        'ios' => [
                            'url' => 'https://apps.apple.com/app/example'
                        ],
                        'android' => [
                            'url' => 'https://play.google.com/store/apps/details?id=com.example'
                        ]
                    ],
                    'qrCode' => [
                        'show' => true,
                        'image' => 'https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://example.com/download',
                        'title' => 'Scan to Download',
                        'description' => 'Get the app directly on your phone'
                    ],
                    'screenshots' => [
                        'main' => 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=500&fit=crop'
                    ],
                    'rating' => [
                        'show' => true,
                        'stars' => 5,
                        'score' => '4.9',
                        'count' => '10k+'
                    ],
                    'downloadBadge' => 'FREE DOWNLOAD',
                    'stats' => [
                        'show' => true,
                        'items' => [
                            ['value' => '100k+', 'label' => 'Downloads'],
                            ['value' => '4.9', 'label' => 'Rating'],
                            ['value' => '98%', 'label' => 'Satisfaction'],
                            ['value' => '24/7', 'label' => 'Access']
                        ]
                    ],
                    'testimonials' => [
                        'show' => true,
                        'items' => [
                            [
                                'name' => 'Sarah Johnson',
                                'role' => 'Warehouse Manager',
                                'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop',
                                'rating' => 5,
                                'quote' => 'The mobile app has revolutionized how we manage inventory. I can scan barcodes and update stock in seconds.'
                            ],
                            [
                                'name' => 'Michael Chen',
                                'role' => 'Logistics Coordinator',
                                'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop',
                                'rating' => 5,
                                'quote' => 'Offline mode is a lifesaver. I can work even in areas with poor connectivity.'
                            ],
                            [
                                'name' => 'Emily Rodriguez',
                                'role' => 'Operations Director',
                                'avatar' => 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop',
                                'rating' => 4,
                                'quote' => 'Real-time alerts keep me informed about critical inventory levels.'
                            ]
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 79,
                'section_key' => 'mobileApp',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'show' => true,
                        'showPulse' => true,
                        'text' => 'MOBILE APP'
                    ],
                    'heading' => [
                        'prefix' => 'Manage Your',
                        'highlightedText' => 'Inventory',
                        'suffix' => 'On the Go'
                    ],
                    'description' => 'Take full control of your supply chain from anywhere with our powerful mobile application.',
                    'features' => [
                        [
                            'title' => 'Instant Scanning',
                            'description' => 'Scan barcodes and QR codes in real-time',
                            'icon' => 'qrcode',
                            'color' => 'from-blue-500 to-blue-600'
                        ],
                        [
                            'title' => 'Photo Capture',
                            'description' => 'Add photos to inventory items on the go',
                            'icon' => 'camera',
                            'color' => 'from-indigo-500 to-indigo-600'
                        ],
                        [
                            'title' => 'Smart Alerts',
                            'description' => 'Get notified about low stock and movements',
                            'icon' => 'bell',
                            'color' => 'from-purple-500 to-purple-600'
                        ],
                        [
                            'title' => 'Offline Mode',
                            'description' => 'Work without internet and sync later',
                            'icon' => 'clock',
                            'color' => 'from-pink-500 to-pink-600'
                        ],
                        [
                            'title' => 'Cloud Sync',
                            'description' => 'Seamless sync across all your devices',
                            'icon' => 'cloud',
                            'color' => 'from-cyan-500 to-cyan-600'
                        ],
                        [
                            'title' => 'Biometric Security',
                            'description' => 'Secure access with fingerprint or face ID',
                            'icon' => 'shield',
                            'color' => 'from-emerald-500 to-emerald-600'
                        ]
                    ],
                    'screenshots' => [
                        'main' => 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=500&fit=crop',
                        '0' => 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=600&fit=crop',
                        '1' => 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=600&h=600&fit=crop',
                        '2' => 'https://images.unsplash.com/photo-1611162617263-4ec3060a058e?w=600&h=600&fit=crop',
                        '3' => 'https://images.unsplash.com/photo-1611162616457-8d0f3f8e1c9b?w=600&h=600&fit=crop',
                        '4' => 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=600&fit=crop',
                        '5' => 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=600&h=600&fit=crop'
                    ],
                    'rating' => [
                        'show' => true,
                        'stars' => 5,
                        'score' => '4.9'
                    ],
                    'appButtons' => [
                        'ios' => [
                            'url' => 'https://apps.apple.com/app/example'
                        ],
                        'android' => [
                            'url' => 'https://play.google.com/store/apps/details?id=com.example'
                        ]
                    ],
                    'qrCode' => [
                        'show' => true,
                        'image' => 'https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://example.com/download',
                        'title' => 'Scan to Download',
                        'description' => 'Get the app directly on your phone'
                    ],
                    'stats' => [
                        'show' => true,
                        'items' => [
                            ['value' => '100k+', 'label' => 'Downloads'],
                            ['value' => '4.9', 'label' => 'Rating'],
                            ['value' => '98%', 'label' => 'Satisfaction'],
                            ['value' => '24/7', 'label' => 'Access']
                        ]
                    ],
                    'compatibility' => 'Compatible with iOS 14+ and Android 10+. Requires 100MB free space.',
                    'cta' => [
                        'show' => true,
                        'text' => 'Download the App Now',
                        'url' => '/download-app'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 80,
                'section_key' => 'mobileApp',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Event Section
            [
                'id' => 81,
                'section_key' => 'event',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => [
                        'show' => true,
                        'showPulse' => true,
                        'text' => 'EVENTS'
                    ],
                    'heading' => [
                        'prefix' => 'Upcoming',
                        'highlightedText' => 'Events',
                        'suffix' => ''
                    ],
                    'description' => 'Join us for webinars, conferences, and workshops to stay ahead in the logistics industry.',
                    'featured' => [
                        'show' => true,
                        'title' => 'Supply Chain Innovation Summit 2024',
                        'description' => 'Join industry leaders and experts for a day of insights, networking, and innovation in supply chain management.',
                        'date' => '2024-05-15',
                        'location' => 'San Francisco, CA',
                        'time' => '9:00 AM - 6:00 PM PST',
                        'price' => '$299',
                        'attendees' => 450,
                        'capacity' => '75%',
                        'spotsLeft' => '150',
                        'link' => '/events/supply-chain-summit'
                    ],
                    'events' => [
                        [
                            'id' => 1,
                            'title' => 'Warehouse Automation Webinar',
                            'description' => 'Learn how AI and robotics are transforming warehouse operations.',
                            'date' => '2024-04-10',
                            'location' => 'Virtual',
                            'time' => '10:00 AM EST',
                            'type' => 'Webinar',
                            'attendees' => 120,
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
                            'link' => '/events/warehouse-automation'
                        ],
                        [
                            'id' => 2,
                            'title' => 'Logistics Leaders Conference',
                            'description' => 'Connect with logistics professionals and discover new strategies for growth.',
                            'date' => '2024-05-20',
                            'location' => 'Chicago, IL',
                            'time' => '8:30 AM - 5:00 PM CST',
                            'type' => 'Conference',
                            'attendees' => 350,
                            'image' => 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop',
                            'link' => '/events/logistics-conference'
                        ],
                        [
                            'id' => 3,
                            'title' => 'Inventory Optimization Workshop',
                            'description' => 'Hands-on workshop to master inventory management techniques.',
                            'date' => '2024-06-05',
                            'location' => 'Virtual',
                            'time' => '2:00 PM EST',
                            'type' => 'Workshop',
                            'attendees' => 85,
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
                            'link' => '/events/inventory-workshop'
                        ]
                    ],
                    'categories' => [
                        'show' => true,
                        'title' => 'Event Categories',
                        'items' => [
                            ['name' => 'Webinars', 'icon' => 'video', 'link' => '/events/webinars'],
                            ['name' => 'Conferences', 'icon' => 'map', 'link' => '/events/conferences'],
                            ['name' => 'Workshops', 'icon' => 'star', 'link' => '/events/workshops'],
                            ['name' => 'Networking', 'icon' => 'calendar', 'link' => '/events/networking']
                        ]
                    ],
                    'cta' => [
                        'show' => true,
                        'text' => 'View All Events',
                        'url' => '/events'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 82,
                'section_key' => 'event',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'EVENTS'
                    ],
                    'heading' => [
                        'line1' => 'Join Us at',
                        'highlighted' => 'Upcoming Events'
                    ],
                    'description' => 'Connect with industry experts, learn new skills, and stay ahead of the curve.',
                    'search' => [
                        'placeholder' => 'Search events...'
                    ],
                    'pagination' => [
                        'perPage' => 4
                    ],
                    'events' => [
                        [
                            'id' => 1,
                            'title' => 'Supply Chain Innovation Summit',
                            'description' => 'Join industry leaders for a day of insights into the future of supply chain management.',
                            'date' => '2024-05-15',
                            'location' => 'San Francisco, CA',
                            'time' => '9:00 AM - 6:00 PM PST',
                            'type' => 'Conference',
                            'attendees' => 450,
                            'image' => 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop',
                            'link' => '/events/supply-chain-summit'
                        ],
                        [
                            'id' => 2,
                            'title' => 'Warehouse Automation Webinar',
                            'description' => 'Learn how AI and robotics are transforming warehouse operations.',
                            'date' => '2024-04-10',
                            'location' => 'Virtual',
                            'time' => '10:00 AM EST',
                            'type' => 'Webinar',
                            'attendees' => 120,
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
                            'link' => '/events/warehouse-automation'
                        ],
                        [
                            'id' => 3,
                            'title' => 'Logistics Leaders Conference',
                            'description' => 'Connect with logistics professionals and discover new strategies for growth.',
                            'date' => '2024-05-20',
                            'location' => 'Chicago, IL',
                            'time' => '8:30 AM - 5:00 PM CST',
                            'type' => 'Conference',
                            'attendees' => 350,
                            'image' => 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop',
                            'link' => '/events/logistics-conference'
                        ],
                        [
                            'id' => 4,
                            'title' => 'Inventory Optimization Workshop',
                            'description' => 'Hands-on workshop to master inventory management techniques.',
                            'date' => '2024-06-05',
                            'location' => 'Virtual',
                            'time' => '2:00 PM EST',
                            'type' => 'Workshop',
                            'attendees' => 85,
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
                            'link' => '/events/inventory-workshop'
                        ]
                    ],
                    'calendar' => [
                        'show' => true,
                        'text' => 'View Calendar View',
                        'url' => '/events/calendar'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 83,
                'section_key' => 'event',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'show' => true,
                        'showPulse' => true,
                        'text' => 'EVENTS'
                    ],
                    'heading' => [
                        'prefix' => 'Don\'t Miss',
                        'highlightedText' => 'Upcoming Events',
                        'suffix' => ''
                    ],
                    'description' => 'Join us for webinars, conferences, and workshops to stay ahead in the logistics industry.',
                    'events' => [
                        [
                            'id' => 1,
                            'title' => 'Supply Chain Innovation Summit',
                            'description' => 'Join industry leaders for a day of insights into the future of supply chain management.',
                            'date' => '2024-05-15',
                            'location' => 'San Francisco, CA',
                            'time' => '9:00 AM - 6:00 PM PST',
                            'type' => 'Conference',
                            'attendees' => 450,
                            'image' => 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=500&fit=crop',
                            'link' => '/events/supply-chain-summit'
                        ],
                        [
                            'id' => 2,
                            'title' => 'Warehouse Automation Webinar',
                            'description' => 'Learn how AI and robotics are transforming warehouse operations.',
                            'date' => '2024-04-10',
                            'location' => 'Virtual',
                            'time' => '10:00 AM EST',
                            'type' => 'Webinar',
                            'attendees' => 120,
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=500&fit=crop',
                            'link' => '/events/warehouse-automation'
                        ],
                        [
                            'id' => 3,
                            'title' => 'Logistics Leaders Conference',
                            'description' => 'Connect with logistics professionals and discover new strategies for growth.',
                            'date' => '2024-05-20',
                            'location' => 'Chicago, IL',
                            'time' => '8:30 AM - 5:00 PM CST',
                            'type' => 'Conference',
                            'attendees' => 350,
                            'image' => 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=500&fit=crop',
                            'link' => '/events/logistics-conference'
                        ],
                        [
                            'id' => 4,
                            'title' => 'Inventory Optimization Workshop',
                            'description' => 'Hands-on workshop to master inventory management techniques.',
                            'date' => '2024-06-05',
                            'location' => 'Virtual',
                            'time' => '2:00 PM EST',
                            'type' => 'Workshop',
                            'attendees' => 85,
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
                            'link' => '/events/inventory-workshop'
                        ]
                    ],
                    'thisMonth' => [
                        'show' => true,
                        'count' => '8',
                        'events' => [
                            ['name' => 'Supply Chain Summit', 'date' => 'May 15'],
                            ['name' => 'Logistics Conference', 'date' => 'May 20'],
                            ['name' => 'Networking Mixer', 'date' => 'May 25']
                        ]
                    ],
                    'popular' => [
                        'show' => true,
                        'items' => [
                            ['title' => 'Supply Chain Innovation Summit', 'attendees' => 450, 'link' => '/events/supply-chain-summit'],
                            ['title' => 'Logistics Leaders Conference', 'attendees' => 350, 'link' => '/events/logistics-conference'],
                            ['title' => 'Warehouse Automation Webinar', 'attendees' => 120, 'link' => '/events/warehouse-automation']
                        ]
                    ],
                    'types' => [
                        'show' => true,
                        'items' => [
                            ['name' => 'Conferences', 'icon' => 'map'],
                            ['name' => 'Webinars', 'icon' => 'video'],
                            ['name' => 'Workshops', 'icon' => 'star'],
                            ['name' => 'Networking', 'icon' => 'calendar']
                        ]
                    ],
                    'newsletter' => [
                        'show' => true,
                        'title' => 'Event Alerts',
                        'description' => 'Get notified about upcoming events',
                        'placeholder' => 'Your email address',
                        'buttonText' => 'Subscribe'
                    ],
                    'social' => [
                        'show' => true,
                        'facebook' => 'https://facebook.com',
                        'twitter' => 'https://twitter.com',
                        'linkedin' => 'https://linkedin.com'
                    ],
                    'viewAll' => [
                        'show' => true,
                        'text' => 'View All Events',
                        'url' => '/events'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 84,
                'section_key' => 'event',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Blog Section
            [
                'id' => 85,
                'section_key' => 'blog',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => [
                        'show' => true,
                        'showPulse' => true,
                        'text' => 'BLOG'
                    ],
                    'heading' => [
                        'prefix' => 'Latest',
                        'highlightedText' => 'Insights',
                        'suffix' => ''
                    ],
                    'description' => 'Stay updated with the latest trends, tips, and best practices in supply chain management.',
                    'featured' => [
                        'show' => true,
                        'title' => 'The Future of Supply Chain: AI and Automation',
                        'excerpt' => 'Discover how artificial intelligence and automation are revolutionizing supply chain operations, from predictive analytics to autonomous vehicles.',
                        'category' => 'Technology',
                        'readTime' => '5 min read',
                        'date' => '2024-03-15',
                        'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
                        'link' => '/blog/future-of-supply-chain',
                        'author' => [
                            'name' => 'Sarah Johnson',
                            'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
                        ]
                    ],
                    'posts' => [
                        [
                            'id' => 1,
                            'title' => '10 Ways to Optimize Your Warehouse Layout',
                            'excerpt' => 'Learn proven strategies to maximize space utilization and improve workflow efficiency in your warehouse.',
                            'date' => '2024-03-10',
                            'category' => 'Warehouse',
                            'readTime' => '4 min read',
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
                            'likes' => 234,
                            'comments' => 45,
                            'link' => '/blog/optimize-warehouse-layout',
                            'author' => [
                                'name' => 'Michael Chen',
                                'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
                            ]
                        ],
                        [
                            'id' => 2,
                            'title' => 'Inventory Management Best Practices',
                            'excerpt' => 'Essential strategies to reduce stockouts, minimize carrying costs, and improve inventory accuracy.',
                            'date' => '2024-03-05',
                            'category' => 'Inventory',
                            'readTime' => '6 min read',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
                            'likes' => 189,
                            'comments' => 32,
                            'link' => '/blog/inventory-best-practices',
                            'author' => [
                                'name' => 'Emily Rodriguez',
                                'avatar' => 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop'
                            ]
                        ],
                        [
                            'id' => 3,
                            'title' => 'Sustainable Logistics: Green Supply Chain',
                            'excerpt' => 'How companies are reducing their carbon footprint through eco-friendly logistics practices.',
                            'date' => '2024-02-28',
                            'category' => 'Sustainability',
                            'readTime' => '5 min read',
                            'image' => 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop',
                            'likes' => 312,
                            'comments' => 67,
                            'link' => '/blog/sustainable-logistics',
                            'author' => [
                                'name' => 'David Kim',
                                'avatar' => 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop'
                            ]
                        ]
                    ],
                    'viewAll' => [
                        'show' => true,
                        'text' => 'View All Articles',
                        'url' => '/blog'
                    ],
                    'newsletter' => [
                        'show' => true,
                        'title' => 'Subscribe to Our Newsletter',
                        'description' => 'Get the latest insights delivered straight to your inbox',
                        'placeholder' => 'Enter your email',
                        'buttonText' => 'Subscribe',
                        'privacyText' => 'We respect your privacy. Unsubscribe at any time.'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 86,
                'section_key' => 'blog',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'OUR BLOG'
                    ],
                    'heading' => [
                        'line1' => 'Latest',
                        'highlighted' => 'Insights'
                    ],
                    'description' => 'Stay updated with the latest trends, tips, and best practices in supply chain management.',
                    'search' => [
                        'placeholder' => 'Search articles...'
                    ],
                    'pagination' => [
                        'perPage' => 6
                    ],
                    'posts' => [
                        [
                            'id' => 1,
                            'title' => 'The Future of Supply Chain: AI and Automation',
                            'excerpt' => 'Discover how artificial intelligence and automation are revolutionizing supply chain operations.',
                            'date' => '2024-03-15',
                            'category' => 'Technology',
                            'readTime' => '5 min read',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
                            'likes' => 234,
                            'comments' => 45,
                            'link' => '/blog/future-of-supply-chain',
                            'author' => [
                                'name' => 'Sarah Johnson',
                                'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop'
                            ]
                        ],
                        [
                            'id' => 2,
                            'title' => '10 Ways to Optimize Your Warehouse Layout',
                            'excerpt' => 'Learn proven strategies to maximize space utilization and improve workflow efficiency.',
                            'date' => '2024-03-10',
                            'category' => 'Warehouse',
                            'readTime' => '4 min read',
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
                            'likes' => 189,
                            'comments' => 32,
                            'link' => '/blog/optimize-warehouse-layout',
                            'author' => [
                                'name' => 'Michael Chen',
                                'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop'
                            ]
                        ],
                        [
                            'id' => 3,
                            'title' => 'Inventory Management Best Practices',
                            'excerpt' => 'Essential strategies to reduce stockouts and improve inventory accuracy.',
                            'date' => '2024-03-05',
                            'category' => 'Inventory',
                            'readTime' => '6 min read',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
                            'likes' => 312,
                            'comments' => 67,
                            'link' => '/blog/inventory-best-practices',
                            'author' => [
                                'name' => 'Emily Rodriguez',
                                'avatar' => 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop'
                            ]
                        ],
                        [
                            'id' => 4,
                            'title' => 'Sustainable Logistics: Green Supply Chain',
                            'excerpt' => 'How companies are reducing their carbon footprint through eco-friendly practices.',
                            'date' => '2024-02-28',
                            'category' => 'Sustainability',
                            'readTime' => '5 min read',
                            'image' => 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop',
                            'likes' => 278,
                            'comments' => 53,
                            'link' => '/blog/sustainable-logistics',
                            'author' => [
                                'name' => 'David Kim',
                                'avatar' => 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop'
                            ]
                        ],
                        [
                            'id' => 5,
                            'title' => 'Real-time Tracking Benefits',
                            'excerpt' => 'Why real-time visibility is crucial for modern supply chain management.',
                            'date' => '2024-02-20',
                            'category' => 'Technology',
                            'readTime' => '3 min read',
                            'image' => 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop',
                            'likes' => 156,
                            'comments' => 28,
                            'link' => '/blog/real-time-tracking',
                            'author' => [
                                'name' => 'Sarah Johnson',
                                'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop'
                            ]
                        ],
                        [
                            'id' => 6,
                            'title' => 'Returns Management Strategies',
                            'excerpt' => 'Best practices for handling product returns efficiently and cost-effectively.',
                            'date' => '2024-02-15',
                            'category' => 'Operations',
                            'readTime' => '4 min read',
                            'image' => 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
                            'likes' => 198,
                            'comments' => 41,
                            'link' => '/blog/returns-management',
                            'author' => [
                                'name' => 'Michael Chen',
                                'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop'
                            ]
                        ]
                    ],
                    'popularTags' => [
                        'show' => true,
                        'items' => ['AI', 'Warehouse', 'Inventory', 'Sustainability', 'Logistics', 'E-commerce']
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 87,
                'section_key' => 'blog',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'show' => true,
                        'showPulse' => true,
                        'text' => 'BLOG'
                    ],
                    'heading' => [
                        'prefix' => 'Latest',
                        'highlightedText' => 'Insights',
                        'suffix' => '& Updates'
                    ],
                    'description' => 'Stay updated with the latest trends, tips, and best practices in supply chain management.',
                    'featured' => [
                        'show' => true,
                        'title' => 'The Future of Supply Chain: AI and Automation',
                        'excerpt' => 'Discover how artificial intelligence and automation are revolutionizing supply chain operations, from predictive analytics to autonomous vehicles.',
                        'category' => 'Technology',
                        'readTime' => '5 min read',
                        'date' => '2024-03-15',
                        'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
                        'likes' => 234,
                        'comments' => 45,
                        'link' => '/blog/future-of-supply-chain',
                        'author' => [
                            'name' => 'Sarah Johnson',
                            'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
                        ]
                    ],
                    'posts' => [
                        [
                            'id' => 1,
                            'title' => 'The Future of Supply Chain: AI and Automation',
                            'excerpt' => 'Discover how artificial intelligence and automation are revolutionizing supply chain operations.',
                            'date' => '2024-03-15',
                            'category' => 'Technology',
                            'readTime' => '5 min read',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
                            'likes' => 234,
                            'comments' => 45,
                            'link' => '/blog/future-of-supply-chain',
                            'author' => [
                                'name' => 'Sarah Johnson',
                                'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop'
                            ]
                        ],
                        [
                            'id' => 2,
                            'title' => '10 Ways to Optimize Your Warehouse Layout',
                            'excerpt' => 'Learn proven strategies to maximize space utilization and improve workflow efficiency.',
                            'date' => '2024-03-10',
                            'category' => 'Warehouse',
                            'readTime' => '4 min read',
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
                            'likes' => 189,
                            'comments' => 32,
                            'link' => '/blog/optimize-warehouse-layout',
                            'author' => [
                                'name' => 'Michael Chen',
                                'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop'
                            ]
                        ],
                        [
                            'id' => 3,
                            'title' => 'Inventory Management Best Practices',
                            'excerpt' => 'Essential strategies to reduce stockouts and improve inventory accuracy.',
                            'date' => '2024-03-05',
                            'category' => 'Inventory',
                            'readTime' => '6 min read',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
                            'likes' => 312,
                            'comments' => 67,
                            'link' => '/blog/inventory-best-practices',
                            'author' => [
                                'name' => 'Emily Rodriguez',
                                'avatar' => 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop'
                            ]
                        ],
                        [
                            'id' => 4,
                            'title' => 'Sustainable Logistics: Green Supply Chain',
                            'excerpt' => 'How companies are reducing their carbon footprint through eco-friendly practices.',
                            'date' => '2024-02-28',
                            'category' => 'Sustainability',
                            'readTime' => '5 min read',
                            'image' => 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop',
                            'likes' => 278,
                            'comments' => 53,
                            'link' => '/blog/sustainable-logistics',
                            'author' => [
                                'name' => 'David Kim',
                                'avatar' => 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop'
                            ]
                        ]
                    ],
                    'sidebar' => [
                        'about' => [
                            'show' => true,
                            'description' => 'Stay updated with the latest trends, tips, and best practices in inventory management and logistics.',
                            'views' => '12.5k'
                        ],
                        'recent' => [
                            'show' => true
                        ],
                        'popular' => [
                            'show' => true
                        ],
                        'categories' => [
                            'show' => true
                        ],
                        'newsletter' => [
                            'show' => true,
                            'title' => 'Newsletter',
                            'description' => 'Get the latest insights delivered to your inbox.',
                            'placeholder' => 'Your email',
                            'buttonText' => 'Subscribe'
                        ],
                        'social' => [
                            'show' => true,
                            'facebook' => 'https://facebook.com',
                            'twitter' => 'https://twitter.com',
                            'linkedin' => 'https://linkedin.com'
                        ]
                    ],
                    'viewAll' => [
                        'show' => true,
                        'text' => 'View All Articles',
                        'url' => '/blog'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 88,
                'section_key' => 'blog',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
