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
                        'src' => '/storage/images/hero/hero-illustration.webp',
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
                        'src' => '/storage/images/hero/hero-illustration.webp',
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
        ]);
    }
}
