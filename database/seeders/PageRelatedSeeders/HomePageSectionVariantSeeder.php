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
                            'accentColor' => 'bg-gradient-to-r from-blue-500 to-cyan-500',
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
                            'accentColor' => 'bg-gradient-to-r from-green-500 to-emerald-500',
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
                            'accentColor' => 'bg-gradient-to-r from-purple-500 to-pink-500',
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
                            'accentColor' => 'bg-gradient-to-r from-orange-500 to-red-500',
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
                            'accentColor' => 'bg-gradient-to-r from-teal-500 to-cyan-500',
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
                            'accentColor' => 'bg-gradient-to-r from-yellow-500 to-amber-500',
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
        ]);
    }
}
