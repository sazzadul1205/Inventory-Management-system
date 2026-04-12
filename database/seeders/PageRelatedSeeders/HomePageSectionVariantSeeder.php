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
        ]);
    }
}
