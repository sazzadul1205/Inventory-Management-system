<?php

namespace Database\Seeders\PageRelatedSeeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ServicesPageSectionVariantSeeder extends Seeder
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
            // All Services Section
            [
                'id' => 89,
                'section_key' => 'allServices',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => [
                        'show' => true,
                        'showPulse' => true,
                        'text' => 'OUR SERVICES',
                        'backgroundColor' => 'bg-blue-100 dark:bg-gray-800',
                        'borderColor' => 'border-blue-200 dark:border-gray-700',
                        'textColor' => 'text-blue-700 dark:text-gray-300'
                    ],
                    'title' => [
                        'prefix' => 'Comprehensive',
                        'highlightedText' => 'Logistics Solutions',
                        'suffix' => 'for Your Business',
                        'highlightGradient' => 'from-blue-600 to-indigo-600'
                    ],
                    'description' => 'End-to-end supply chain management services designed to optimize your operations, reduce costs, and improve efficiency.',
                    'services' => [
                        [
                            'id' => 1,
                            'title' => 'Warehouse Management',
                            'description' => 'Optimize your warehouse operations with real-time tracking and automated workflows.',
                            'icon' => 'cube',
                            'features' => ['Real-time inventory tracking', 'Automated picking & packing', 'Space optimization', 'Barcode scanning'],
                            'link' => '/services/warehouse-management'
                        ],
                        [
                            'id' => 2,
                            'title' => 'Transportation',
                            'description' => 'Efficient fleet management and route optimization for faster deliveries.',
                            'icon' => 'truck',
                            'features' => ['Route optimization', 'Real-time tracking', 'Fuel monitoring', 'Delivery analytics'],
                            'link' => '/services/transportation'
                        ],
                        [
                            'id' => 3,
                            'title' => 'Supply Chain Consulting',
                            'description' => 'Expert guidance to streamline your supply chain and improve efficiency.',
                            'icon' => 'chart',
                            'features' => ['Process optimization', 'Cost reduction strategies', 'Performance metrics', 'Inventory optimization'],
                            'link' => '/services/supply-chain-consulting'
                        ],
                        [
                            'id' => 4,
                            'title' => 'Order Fulfillment',
                            'description' => 'Fast and accurate order processing from warehouse to customer door.',
                            'icon' => 'clock',
                            'features' => ['Same-day processing', 'Quality control', 'Returns management', 'Multi-channel fulfillment'],
                            'link' => '/services/order-fulfillment'
                        ],
                        [
                            'id' => 5,
                            'title' => 'Global Logistics',
                            'description' => 'International shipping and customs clearance for global reach.',
                            'icon' => 'globe',
                            'features' => ['International shipping', 'Customs clearance', 'Global tracking', 'Multi-currency support'],
                            'link' => '/services/global-logistics'
                        ],
                        [
                            'id' => 6,
                            'title' => 'Security & Compliance',
                            'description' => 'Enterprise-grade security and compliance for your logistics operations.',
                            'icon' => 'shield',
                            'features' => ['Data encryption', 'GDPR compliance', 'Audit trails', 'Security monitoring'],
                            'link' => '/services/security-compliance'
                        ]
                    ],
                    'showCta' => true,
                    'ctaText' => 'Ready to optimize your supply chain?',
                    'ctaLink' => '/contact',
                    'ctaButton' => [
                        'text' => 'Contact Us',
                        'backgroundColor' => 'bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600',
                        'textColor' => 'text-white'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 90,
                'section_key' => 'allServices',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => 'WHAT WE OFFER',
                    'title' => 'End-to-End Supply Chain Solutions',
                    'description' => 'From warehousing to last-mile delivery, we provide complete logistics services tailored to your business needs.',
                    'services' => [
                        [
                            'id' => 1,
                            'title' => 'Warehouse Management',
                            'category' => 'STORAGE & INVENTORY',
                            'description' => 'State-of-the-art warehousing with real-time inventory management and automated picking systems.',
                            'icon' => 'cube',
                            'bgColor' => 'bg-blue-600',
                            'textColor' => 'text-blue-600 dark:text-blue-400',
                            'overlayGradient' => 'from-blue-600/30 to-indigo-600/30',
                            'features' => [
                                'Real-time inventory tracking',
                                'Automated picking & packing',
                                'Climate-controlled storage',
                                'Barcode scanning'
                            ],
                            'stats' => [
                                ['value' => '500K+', 'label' => 'Sq Ft Space'],
                                ['value' => '99.9%', 'label' => 'Accuracy']
                            ],
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop',
                            'link' => '/services/warehouse-management'
                        ],
                        [
                            'id' => 2,
                            'title' => 'Transportation',
                            'category' => 'FLEET & DELIVERY',
                            'description' => 'Efficient fleet management and route optimization for faster, cost-effective deliveries.',
                            'icon' => 'truck',
                            'bgColor' => 'bg-green-600',
                            'textColor' => 'text-green-600 dark:text-green-400',
                            'overlayGradient' => 'from-green-600/30 to-emerald-600/30',
                            'features' => [
                                'Route optimization',
                                'Real-time tracking',
                                'Temperature-controlled transport',
                                'Same-day delivery'
                            ],
                            'stats' => [
                                ['value' => '50K+', 'label' => 'Daily Shipments'],
                                ['value' => '100%', 'label' => 'Coverage']
                            ],
                            'image' => 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&h=600&fit=crop',
                            'link' => '/services/transportation'
                        ],
                        [
                            'id' => 3,
                            'title' => 'Supply Chain Consulting',
                            'category' => 'STRATEGY & OPTIMIZATION',
                            'description' => 'Expert guidance to streamline operations, reduce costs, and improve efficiency across your supply chain.',
                            'icon' => 'chart',
                            'bgColor' => 'bg-purple-600',
                            'textColor' => 'text-purple-600 dark:text-purple-400',
                            'overlayGradient' => 'from-purple-600/30 to-pink-600/30',
                            'features' => [
                                'Process optimization',
                                'Cost reduction strategies',
                                'Performance metrics',
                                'Inventory optimization'
                            ],
                            'stats' => [
                                ['value' => '30%', 'label' => 'Cost Savings'],
                                ['value' => '500+', 'label' => 'Projects']
                            ],
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
                            'link' => '/services/supply-chain-consulting'
                        ]
                    ],
                    'showCta' => true,
                    'ctaText' => 'Ready to transform your supply chain?',
                    'ctaLink' => '/contact',
                    'ctaButtonText' => 'Get Started Today'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 91,
                'section_key' => 'allServices',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => 'OUR SERVICES',
                    'title' => 'Comprehensive Logistics Solutions',
                    'description' => 'End-to-end supply chain management services designed to optimize your operations and drive growth.',
                    'tabs' => [
                        ['id' => 1, 'label' => 'Warehouse & Storage'],
                        ['id' => 2, 'label' => 'Transportation'],
                        ['id' => 3, 'label' => 'Value Added Services']
                    ],
                    'services' => [
                        [
                            'id' => 1,
                            'tabId' => 1,
                            'title' => 'Smart Warehousing',
                            'description' => 'State-of-the-art warehousing with real-time inventory management and automated systems.',
                            'icon' => 'cube',
                            'gradient' => 'from-blue-600 to-indigo-600',
                            'price' => 'Custom',
                            'priceUnit' => '',
                            'features' => ['Real-time tracking', 'Automated picking', 'Climate control', 'Barcode scanning', 'Inventory optimization'],
                            'link' => '/services/smart-warehousing'
                        ],
                        [
                            'id' => 2,
                            'tabId' => 1,
                            'title' => 'Cold Storage',
                            'description' => 'Temperature-controlled warehousing for perishable goods and pharmaceuticals.',
                            'icon' => 'clock',
                            'gradient' => 'from-cyan-600 to-blue-600',
                            'price' => 'Custom',
                            'priceUnit' => '',
                            'features' => ['Temperature monitoring', 'Humidity control', 'Real-time alerts', 'Compliance tracking'],
                            'link' => '/services/cold-storage'
                        ],
                        [
                            'id' => 3,
                            'tabId' => 1,
                            'title' => 'Fulfillment Center',
                            'description' => 'Fast and accurate order fulfillment with multi-channel integration.',
                            'icon' => 'cog',
                            'gradient' => 'from-indigo-600 to-purple-600',
                            'price' => 'Custom',
                            'priceUnit' => '',
                            'features' => ['Same-day shipping', 'Returns processing', 'Multi-channel sync', 'Quality control'],
                            'link' => '/services/fulfillment'
                        ],
                        [
                            'id' => 4,
                            'tabId' => 2,
                            'title' => 'Fleet Management',
                            'description' => 'Efficient fleet management with real-time tracking and route optimization.',
                            'icon' => 'truck',
                            'gradient' => 'from-green-600 to-emerald-600',
                            'price' => '$499',
                            'priceUnit' => '/month',
                            'features' => ['Route optimization', 'Fuel monitoring', 'Live tracking', 'Maintenance alerts'],
                            'link' => '/services/fleet-management'
                        ],
                        [
                            'id' => 5,
                            'tabId' => 2,
                            'title' => 'Last-Mile Delivery',
                            'description' => 'Fast and reliable last-mile delivery solutions for e-commerce businesses.',
                            'icon' => 'clock',
                            'gradient' => 'from-orange-600 to-red-600',
                            'price' => '$299',
                            'priceUnit' => '/month',
                            'features' => ['Same-day delivery', 'Real-time tracking', 'Proof of delivery', 'Customer notifications'],
                            'link' => '/services/last-mile'
                        ],
                        [
                            'id' => 6,
                            'tabId' => 2,
                            'title' => 'Global Shipping',
                            'description' => 'International shipping and customs clearance for global reach.',
                            'icon' => 'globe',
                            'gradient' => 'from-teal-600 to-cyan-600',
                            'price' => 'Custom',
                            'priceUnit' => '',
                            'features' => ['International rates', 'Customs clearance', 'Global tracking', 'Multi-carrier'],
                            'link' => '/services/global-shipping'
                        ],
                        [
                            'id' => 7,
                            'tabId' => 3,
                            'title' => 'Supply Chain Consulting',
                            'description' => 'Expert guidance to optimize your supply chain and reduce costs.',
                            'icon' => 'chart',
                            'gradient' => 'from-purple-600 to-pink-600',
                            'price' => '$999',
                            'priceUnit' => '/project',
                            'features' => ['Process optimization', 'Cost analysis', 'Strategy development', 'Implementation support'],
                            'link' => '/services/consulting'
                        ],
                        [
                            'id' => 8,
                            'tabId' => 3,
                            'title' => 'Returns Management',
                            'description' => 'Streamlined returns processing and restocking solutions.',
                            'icon' => 'refresh',
                            'gradient' => 'from-rose-600 to-pink-600',
                            'price' => '$199',
                            'priceUnit' => '/month',
                            'features' => ['Auto approvals', 'Quality inspection', 'Fast restocking', 'Customer portal'],
                            'link' => '/services/returns'
                        ],
                        [
                            'id' => 9,
                            'tabId' => 3,
                            'title' => 'Analytics Dashboard',
                            'description' => 'Data-driven insights to optimize your logistics operations.',
                            'icon' => 'chart',
                            'gradient' => 'from-sky-600 to-blue-600',
                            'price' => '$149',
                            'priceUnit' => '/month',
                            'features' => ['Custom reports', 'KPI tracking', 'Predictive analytics', 'Real-time data'],
                            'link' => '/services/analytics'
                        ]
                    ],
                    'showFeatured' => true,
                    'featuredTitle' => 'Custom Enterprise Solutions',
                    'featuredDescription' => 'Need a tailored solution for your business? Contact our team for a custom quote.',
                    'featuredButtonText' => 'Contact Sales',
                    'featuredLink' => '/contact',
                    'showTrust' => true,
                    'trustItems' => [
                        ['text' => '24/7 Support', 'icon' => 'users', 'gradient' => 'from-blue-600 to-indigo-600'],
                        ['text' => '99.9% Uptime', 'icon' => 'shield', 'gradient' => 'from-green-600 to-emerald-600'],
                        ['text' => '500+ Clients', 'icon' => 'users', 'gradient' => 'from-purple-600 to-pink-600'],
                        ['text' => 'Global Coverage', 'icon' => 'globe', 'gradient' => 'from-teal-600 to-cyan-600']
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 92,
                'section_key' => 'allServices',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Warehouse Management Section
            [
                'id' => 93,
                'section_key' => 'warehouseManagement',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => 'WAREHOUSE MANAGEMENT',
                    'title' => 'Smart Warehouse Solutions for Modern Logistics',
                    'description' => 'Optimize your warehouse operations with real-time inventory tracking, automated workflows, and intelligent analytics.',
                    'features' => [
                        'title' => 'Key Features',
                        'items' => [
                            [
                                'id' => 1,
                                'title' => 'Real-time Inventory Tracking',
                                'description' => 'Monitor stock levels across multiple locations with live updates and instant alerts.',
                                'icon' => 'cube',
                                'bgColor' => 'bg-blue-600'
                            ],
                            [
                                'id' => 2,
                                'title' => 'Automated Picking & Packing',
                                'description' => 'Increase efficiency with smart picking routes and automated packing workflows.',
                                'icon' => 'refresh',
                                'bgColor' => 'bg-green-600'
                            ],
                            [
                                'id' => 3,
                                'title' => 'Advanced Analytics Dashboard',
                                'description' => 'Gain insights into warehouse performance with custom reports and KPIs.',
                                'icon' => 'chart',
                                'bgColor' => 'bg-purple-600'
                            ],
                            [
                                'id' => 4,
                                'title' => 'Barcode & RFID Integration',
                                'description' => 'Fast and accurate scanning for inventory management and asset tracking.',
                                'icon' => 'search',
                                'bgColor' => 'bg-orange-600'
                            ]
                        ]
                    ],
                    'ctaText' => 'Start Optimizing Your Warehouse',
                    'ctaLink' => '/contact',
                    'image' => [
                        'src' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop',
                        'alt' => 'Warehouse management dashboard preview'
                    ],
                    'stats' => [
                        [
                            'id' => 1,
                            'label' => 'Inventory Accuracy',
                            'value' => '99.9%',
                            'trend' => '+2.5% vs last month',
                            'trendColor' => 'text-green-600'
                        ],
                        [
                            'id' => 2,
                            'label' => 'Order Fulfillment',
                            'value' => '98.5%',
                            'trend' => '+5% vs last month',
                            'trendColor' => 'text-green-600'
                        ]
                    ],
                    'floatingBadge' => 'AI-Powered',
                    'metrics' => [
                        ['id' => 1, 'value' => '500K+', 'label' => 'Sq Ft Managed'],
                        ['id' => 2, 'value' => '98%', 'label' => 'Space Utilization'],
                        ['id' => 3, 'value' => '40%', 'label' => 'Faster Picking'],
                        ['id' => 4, 'value' => '24/7', 'label' => 'Operations']
                    ],
                    'techStack' => [
                        'show' => true,
                        'title' => 'Enterprise-Grade Technology Stack',
                        'description' => 'Powered by industry-leading technologies to ensure reliability and scalability.',
                        'items' => [
                            ['id' => 1, 'name' => 'IoT Sensors', 'icon' => 'cube'],
                            ['id' => 2, 'name' => 'RFID Tags', 'icon' => 'search'],
                            ['id' => 3, 'name' => 'Cloud Platform', 'icon' => 'refresh'],
                            ['id' => 4, 'name' => 'AI Analytics', 'icon' => 'chart']
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 94,
                'section_key' => 'warehouseManagement',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => 'WAREHOUSE MANAGEMENT',
                    'title' => 'Intelligent Warehouse Operations',
                    'description' => 'Transform your warehouse with AI-powered automation and real-time visibility.',
                    'ctaText' => 'View All Features',
                    'ctaLink' => '/features',
                    'features' => [
                        [
                            'id' => 1,
                            'title' => 'Real-time Inventory Tracking',
                            'shortDesc' => 'Live visibility across all locations',
                            'icon' => 'cube',
                            'badge' => 'Most Popular',
                            'badgeColor' => 'bg-green-500 text-white',
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
                            'description' => 'Monitor stock levels across multiple warehouses with real-time updates, automated alerts, and complete traceability.',
                            'benefits' => [
                                'Reduce stockouts by up to 40%',
                                'Real-time sync across locations',
                                'Automated reorder points',
                                'Complete audit trail'
                            ],
                            'stats' => [
                                ['value' => '99.9%', 'label' => 'Accuracy'],
                                ['value' => 'Real-time', 'label' => 'Updates'],
                                ['value' => '50%', 'label' => 'Faster']
                            ],
                            'link' => '/features/inventory-tracking'
                        ],
                        [
                            'id' => 2,
                            'title' => 'Smart Picking & Packing',
                            'shortDesc' => 'Optimize order fulfillment',
                            'icon' => 'refresh',
                            'badge' => 'New',
                            'badgeColor' => 'bg-purple-500 text-white',
                            'image' => 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
                            'description' => 'Increase picking efficiency with optimized routes, batch picking, and automated packing workflows.',
                            'benefits' => [
                                '40% faster picking times',
                                'Reduce picking errors by 90%',
                                'Batch and wave picking',
                                'Automated packing validation'
                            ],
                            'stats' => [
                                ['value' => '40%', 'label' => 'Faster'],
                                ['value' => '99%', 'label' => 'Accuracy'],
                                ['value' => '30%', 'label' => 'Savings']
                            ],
                            'link' => '/features/picking-packing'
                        ],
                        [
                            'id' => 3,
                            'title' => 'Advanced Analytics',
                            'shortDesc' => 'Data-driven insights',
                            'icon' => 'chart',
                            'badge' => 'AI-Powered',
                            'badgeColor' => 'bg-blue-500 text-white',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
                            'description' => 'Gain actionable insights with custom dashboards, predictive analytics, and performance metrics.',
                            'benefits' => [
                                'Real-time KPI tracking',
                                'Predictive demand forecasting',
                                'Custom report builder',
                                'Performance benchmarking'
                            ],
                            'stats' => [
                                ['value' => '95%', 'label' => 'Forecast'],
                                ['value' => '50+', 'label' => 'KPIs'],
                                ['value' => '24/7', 'label' => 'Monitoring']
                            ],
                            'link' => '/features/analytics'
                        ]
                    ],
                    'integrations' => [
                        'show' => true,
                        'title' => 'Trusted By Industry Leaders',
                        'partners' => [
                            ['name' => 'Shopify', 'icon' => 'cube'],
                            ['name' => 'Salesforce', 'icon' => 'cog'],
                            ['name' => 'AWS', 'icon' => 'refresh'],
                            ['name' => 'Stripe', 'icon' => 'chart']
                        ]
                    ],
                    'roi' => [
                        'show' => true,
                        'title' => 'Calculate Your ROI',
                        'description' => 'See how much you can save with our warehouse management solution.',
                        'buttonText' => 'Calculate Savings',
                        'link' => '/roi-calculator',
                        'stats' => [
                            ['value' => '40%', 'label' => 'Cost Reduction'],
                            ['value' => '6mos', 'label' => 'Payback Period'],
                            ['value' => '3x', 'label' => 'ROI']
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 95,
                'section_key' => 'warehouseManagement',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => 'AI-POWERED WAREHOUSE',
                    'title' => 'Smart Warehouse Management',
                    'description' => 'Transform your warehouse operations with AI-driven insights and real-time automation.',
                    'headerStats' => [
                        ['value' => '99.9%', 'label' => 'Inventory Accuracy'],
                        ['value' => '40%', 'label' => 'Faster Fulfillment'],
                        ['value' => '50%', 'label' => 'Cost Reduction'],
                        ['value' => '24/7', 'label' => 'Operations']
                    ],
                    'dashboardImage' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=800&fit=crop',
                    'process' => [
                        'show' => true,
                        'title' => 'How It Works',
                        'steps' => [
                            [
                                'id' => 1,
                                'number' => '01',
                                'title' => 'Receive',
                                'description' => 'Scan incoming inventory',
                                'icon' => 'cube',
                                'bgColor' => 'bg-blue-600'
                            ],
                            [
                                'id' => 2,
                                'number' => '02',
                                'title' => 'Store',
                                'description' => 'Smart bin assignment',
                                'icon' => 'location',
                                'bgColor' => 'bg-green-600'
                            ],
                            [
                                'id' => 3,
                                'number' => '03',
                                'title' => 'Pick',
                                'description' => 'Optimized routes',
                                'icon' => 'refresh',
                                'bgColor' => 'bg-purple-600'
                            ],
                            [
                                'id' => 4,
                                'number' => '04',
                                'title' => 'Ship',
                                'description' => 'Fast dispatch',
                                'icon' => 'clock',
                                'bgColor' => 'bg-orange-600'
                            ]
                        ]
                    ],
                    'featureCards' => [
                        [
                            'id' => 1,
                            'title' => 'Real-time Tracking',
                            'description' => 'Monitor inventory movement across all locations with live updates.',
                            'icon' => 'location',
                            'bgColor' => 'bg-blue-600',
                            'features' => 8
                        ],
                        [
                            'id' => 2,
                            'title' => 'Smart Automation',
                            'description' => 'Automate routine tasks and workflows to boost efficiency.',
                            'icon' => 'cog',
                            'bgColor' => 'bg-green-600',
                            'features' => 12
                        ],
                        [
                            'id' => 3,
                            'title' => 'Analytics Dashboard',
                            'description' => 'Gain insights with custom reports and predictive analytics.',
                            'icon' => 'chart',
                            'bgColor' => 'bg-purple-600',
                            'features' => 10
                        ]
                    ],
                    'capabilities' => [
                        'show' => true,
                        'title' => 'Key Capabilities',
                        'items' => [
                            [
                                'id' => 1,
                                'title' => 'Barcode Scanning',
                                'description' => 'Fast and accurate inventory tracking',
                                'icon' => 'search',
                                'bgColor' => 'bg-blue-600'
                            ],
                            [
                                'id' => 2,
                                'title' => 'Mobile Access',
                                'description' => 'Manage from anywhere',
                                'icon' => 'mobile',
                                'bgColor' => 'bg-green-600'
                            ],
                            [
                                'id' => 3,
                                'title' => 'Cloud Sync',
                                'description' => 'Real-time data synchronization',
                                'icon' => 'cloud',
                                'bgColor' => 'bg-purple-600'
                            ],
                            [
                                'id' => 4,
                                'title' => 'Security',
                                'description' => 'Enterprise-grade protection',
                                'icon' => 'shield',
                                'bgColor' => 'bg-orange-600'
                            ]
                        ]
                    ],
                    'quickStats' => [
                        ['label' => 'Storage Utilization', 'value' => '94%', 'percentage' => '94%'],
                        ['label' => 'Pick Accuracy', 'value' => '99.5%', 'percentage' => '99.5%'],
                        ['label' => 'Order Cycle Time', 'value' => '2.4h', 'percentage' => '80%']
                    ],
                    'statsLink' => '/reports',
                    'ctaText' => 'Join 5000+ warehouses using our platform',
                    'ctaLink' => '/demo',
                    'ctaButtonText' => 'Start Free Trial'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 96,
                'section_key' => 'warehouseManagement',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Order Fulfillment Section 
            [
                'id' => 97,
                'section_key' => 'orderFulfillment',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => 'ORDER FULFILLMENT',
                    'title' => 'Fast, Accurate Order Fulfillment',
                    'description' => 'Streamline your order processing from receipt to delivery with our intelligent fulfillment platform.',
                    'stats' => [
                        ['id' => 1, 'value' => '99.9%', 'label' => 'Order Accuracy'],
                        ['id' => 2, 'value' => '2.4h', 'label' => 'Avg. Fulfillment'],
                        ['id' => 3, 'value' => '50k+', 'label' => 'Daily Orders'],
                        ['id' => 4, 'value' => '98%', 'label' => 'On-Time Delivery']
                    ],
                    'process' => [
                        'title' => 'How It Works',
                        'steps' => [
                            [
                                'id' => 1,
                                'title' => 'Order Received',
                                'description' => 'Orders are automatically synced from your sales channels',
                                'bgColor' => 'bg-blue-600'
                            ],
                            [
                                'id' => 2,
                                'title' => 'Smart Routing',
                                'description' => 'Intelligent warehouse assignment based on inventory and location',
                                'bgColor' => 'bg-green-600'
                            ],
                            [
                                'id' => 3,
                                'title' => 'Pick & Pack',
                                'description' => 'Optimized picking routes and automated packing',
                                'bgColor' => 'bg-purple-600'
                            ],
                            [
                                'id' => 4,
                                'title' => 'Ship & Track',
                                'description' => 'Carrier selection and real-time tracking',
                                'bgColor' => 'bg-orange-600'
                            ]
                        ]
                    ],
                    'ctaText' => 'Start Fulfilling Faster',
                    'ctaLink' => '/demo',
                    'dashboardImage' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop',
                    'avgFulfillmentTime' => '2.4h',
                    'orderStats' => [
                        ['id' => 1, 'label' => 'Orders Today', 'value' => '1,247'],
                        ['id' => 2, 'label' => 'Fulfilled', 'value' => '1,189']
                    ],
                    'features' => [
                        [
                            'id' => 1,
                            'title' => 'Multi-Channel Integration',
                            'description' => 'Connect all your sales channels for unified order management.',
                            'icon' => 'bag',
                            'bgColor' => 'bg-blue-600',
                            'link' => '/features/multi-channel'
                        ],
                        [
                            'id' => 2,
                            'title' => 'Smart Inventory Sync',
                            'description' => 'Real-time inventory updates across all locations.',
                            'icon' => 'refresh',
                            'bgColor' => 'bg-green-600',
                            'link' => '/features/inventory-sync'
                        ],
                        [
                            'id' => 3,
                            'title' => 'Real-time Tracking',
                            'description' => 'End-to-end visibility for you and your customers.',
                            'icon' => 'location',
                            'bgColor' => 'bg-purple-600',
                            'link' => '/features/tracking'
                        ]
                    ],
                    'integrations' => [
                        'show' => true,
                        'title' => 'Integrated With Leading Platforms',
                        'partners' => [
                            ['name' => 'Shopify', 'icon' => 'bag'],
                            ['name' => 'Salesforce', 'icon' => 'user'],
                            ['name' => 'Stripe', 'icon' => 'cash'],
                            ['name' => 'ShipStation', 'icon' => 'truck']
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 98,
                'section_key' => 'orderFulfillment',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => 'ORDER FULFILLMENT',
                    'liveStatus' => 'LIVE',
                    'title' => 'Real-time Order Fulfillment Dashboard',
                    'description' => 'Track and manage orders from receipt to delivery with our intelligent fulfillment platform.',
                    'liveCounter' => [
                        'label' => 'Orders Today',
                        'value' => '1,247',
                        'trend' => '+12%'
                    ],
                    'orderTypes' => [
                        ['id' => 1, 'label' => 'All Orders', 'icon' => 'bag', 'count' => 156],
                        ['id' => 2, 'label' => 'Pending', 'icon' => 'clock', 'count' => 42],
                        ['id' => 3, 'label' => 'Processing', 'icon' => 'refresh', 'count' => 38],
                        ['id' => 4, 'label' => 'Shipped', 'icon' => 'truck', 'count' => 76]
                    ],
                    'orderList' => [
                        'title' => 'Recent Orders',
                        'orders' => [
                            ['id' => '#ORD-1234', 'customer' => 'Sarah Johnson', 'items' => 3, 'time' => '2 min ago', 'status' => 'Processing', 'statusColor' => 'bg-blue-100 text-blue-700'],
                            ['id' => '#ORD-1235', 'customer' => 'Michael Chen', 'items' => 1, 'time' => '5 min ago', 'status' => 'Pending', 'statusColor' => 'bg-yellow-100 text-yellow-700'],
                            ['id' => '#ORD-1236', 'customer' => 'Emily Rodriguez', 'items' => 2, 'time' => '8 min ago', 'status' => 'Shipped', 'statusColor' => 'bg-green-100 text-green-700'],
                            ['id' => '#ORD-1237', 'customer' => 'David Kim', 'items' => 4, 'time' => '12 min ago', 'status' => 'Processing', 'statusColor' => 'bg-blue-100 text-blue-700']
                        ],
                        'viewAllLink' => '/orders'
                    ],
                    'fulfillmentCenter' => [
                        'title' => 'Fulfillment Progress',
                        'steps' => [
                            ['id' => 1, 'label' => 'Order Received', 'time' => '12:30 PM', 'completed' => true, 'active' => false],
                            ['id' => 2, 'label' => 'Processing', 'time' => '12:35 PM', 'completed' => false, 'active' => true],
                            ['id' => 3, 'label' => 'Picking', 'time' => 'Est. 12:40 PM', 'completed' => false, 'active' => false],
                            ['id' => 4, 'label' => 'Shipping', 'time' => 'Est. 1:00 PM', 'completed' => false, 'active' => false]
                        ]
                    ],
                    'currentOrder' => [
                        'id' => '#ORD-1234',
                        'status' => 'Processing',
                        'statusColor' => 'bg-blue-100 text-blue-700',
                        'customer' => 'Sarah Johnson',
                        'items' => '3 items',
                        'destination' => 'New York, NY',
                        'eta' => 'Tomorrow, 2:00 PM'
                    ],
                    'quickActions' => [
                        ['id' => 1, 'label' => 'Scan Barcode', 'icon' => 'mobile', 'bgColor' => 'bg-blue-600'],
                        ['id' => 2, 'label' => 'Print Label', 'icon' => 'document', 'bgColor' => 'bg-green-600'],
                        ['id' => 3, 'label' => 'Notify Customer', 'icon' => 'mail', 'bgColor' => 'bg-purple-600']
                    ],
                    'metrics' => [
                        ['id' => 1, 'label' => 'Fulfillment Rate', 'value' => '98.5%', 'trend' => '+2.3%', 'trendColor' => 'text-green-600', 'icon' => 'chart', 'bgColor' => 'bg-blue-600'],
                        ['id' => 2, 'label' => 'Avg. Processing', 'value' => '2.4h', 'trend' => '-15%', 'trendColor' => 'text-green-600', 'icon' => 'clock', 'bgColor' => 'bg-green-600'],
                        ['id' => 3, 'label' => 'Order Accuracy', 'value' => '99.9%', 'trend' => '+0.5%', 'trendColor' => 'text-green-600', 'icon' => 'check', 'bgColor' => 'bg-purple-600'],
                        ['id' => 4, 'label' => 'Returns Rate', 'value' => '2.1%', 'trend' => '-0.8%', 'trendColor' => 'text-green-600', 'icon' => 'refresh', 'bgColor' => 'bg-orange-600']
                    ],
                    'features' => [
                        [
                            'id' => 1,
                            'title' => 'Multi-Channel Sync',
                            'description' => 'Connect all your sales channels for unified order management.',
                            'icon' => 'bag',
                            'bgColor' => 'bg-blue-600',
                            'link' => '/features/multi-channel'
                        ],
                        [
                            'id' => 2,
                            'title' => 'Smart Routing',
                            'description' => 'Intelligent warehouse assignment based on inventory and location.',
                            'icon' => 'location',
                            'bgColor' => 'bg-green-600',
                            'link' => '/features/smart-routing'
                        ],
                        [
                            'id' => 3,
                            'title' => 'Real-time Tracking',
                            'description' => 'End-to-end visibility for you and your customers.',
                            'icon' => 'truck',
                            'bgColor' => 'bg-purple-600',
                            'link' => '/features/tracking'
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 99,
                'section_key' => 'orderFulfillment',
                'variant' => 'variant3',
                'config' => json_encode([
                    'backgroundImage' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&h=800&fit=crop',
                    'badge' => 'AI-POWERED FULFILLMENT',
                    'title' => [
                        'prefix' => 'Next-Generation',
                        'highlight' => 'Order Fulfillment'
                    ],
                    'description' => 'Intelligent automation for faster, more accurate order processing from receipt to delivery.',
                    'primaryCta' => [
                        'text' => 'Start Free Trial',
                        'link' => '/signup'
                    ],
                    'secondaryCta' => [
                        'text' => 'Watch Demo',
                        'link' => '/demo'
                    ],
                    'trustText' => 'Trusted by 5000+ businesses',
                    'ratingText' => '4.9/5 from 2000+ reviews',
                    'todayFulfilled' => '1,247',
                    'avgFulfillment' => '2.4h',
                    'liveStats' => [
                        ['value' => '156', 'label' => 'Pending'],
                        ['value' => '38', 'label' => 'Processing'],
                        ['value' => '76', 'label' => 'Shipped']
                    ],
                    'dashboardImage' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=800&fit=crop',
                    'features' => [
                        [
                            'id' => 1,
                            'title' => 'Smart Order Routing',
                            'description' => 'Intelligent warehouse assignment based on inventory levels and shipping location.',
                            'icon' => 'location',
                            'gradient' => 'from-blue-600 to-indigo-600',
                            'highlights' => ['Optimized warehouse selection', 'Real-time inventory check', 'Cost-based routing'],
                            'link' => '/features/smart-routing'
                        ],
                        [
                            'id' => 2,
                            'title' => 'Real-time Tracking',
                            'description' => 'End-to-end visibility for you and your customers with live updates.',
                            'icon' => 'globe',
                            'gradient' => 'from-green-600 to-emerald-600',
                            'highlights' => ['Live order status', 'GPS tracking', 'Estimated delivery times'],
                            'link' => '/features/tracking'
                        ],
                        [
                            'id' => 3,
                            'title' => 'Automated Returns',
                            'description' => 'Streamlined returns processing with instant approvals and fast restocking.',
                            'icon' => 'refresh',
                            'gradient' => 'from-purple-600 to-pink-600',
                            'highlights' => ['Self-service returns portal', 'Instant refunds', 'Quality inspection'],
                            'link' => '/features/returns'
                        ]
                    ],
                    'globalStats' => [
                        'show' => true,
                        'title' => 'Global Fulfillment Network',
                        'description' => 'Our platform powers order fulfillment for businesses across the globe.',
                        'buttonText' => 'Learn More',
                        'link' => '/global-network',
                        'stats' => [
                            ['value' => '50+', 'label' => 'Countries'],
                            ['value' => '100M+', 'label' => 'Orders/year'],
                            ['value' => '99.9%', 'label' => 'Uptime'],
                            ['value' => '24/7', 'label' => 'Support']
                        ]
                    ],
                    'testimonials' => [
                        [
                            'id' => 1,
                            'name' => 'Sarah Johnson',
                            'role' => 'Operations Director, TechLogix',
                            'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
                            'quote' => 'This platform transformed our fulfillment operations. We\'ve seen a 40% reduction in processing time and significantly improved customer satisfaction.'
                        ],
                        [
                            'id' => 2,
                            'name' => 'Michael Chen',
                            'role' => 'CEO, AutoParts Global',
                            'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
                            'quote' => 'The real-time tracking and automated routing have been game-changers for our business. Highly recommended!'
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 100,
                'section_key' => 'orderFulfillment',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
