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
        // Upsert only this page's variants so other page seeders do not get wiped out.
        $variants = [
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

            // Supply Chain Consulting Section
            [
                'id' => 101,
                'section_key' => 'supplyChainConsulting',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => 'CONSULTING SERVICES',
                    'title' => 'Strategic Supply Chain Consulting',
                    'description' => 'Transform your supply chain with expert guidance, data-driven insights, and proven methodologies.',
                    'valueProps' => [
                        [
                            'id' => 1,
                            'title' => 'Data-Driven Strategy',
                            'description' => 'Make informed decisions with advanced analytics and market intelligence.',
                            'icon' => 'chart',
                            'bgColor' => 'bg-blue-600'
                        ],
                        [
                            'id' => 2,
                            'title' => 'Cost Optimization',
                            'description' => 'Identify and eliminate inefficiencies to reduce operational costs.',
                            'icon' => 'trending',
                            'bgColor' => 'bg-green-600'
                        ],
                        [
                            'id' => 3,
                            'title' => 'Risk Management',
                            'description' => 'Proactively identify and mitigate supply chain risks.',
                            'icon' => 'shield',
                            'bgColor' => 'bg-purple-600'
                        ]
                    ],
                    'consultingAreas' => [
                        'title' => 'Our Consulting Expertise',
                        'areas' => [
                            [
                                'id' => 1,
                                'title' => 'Supply Chain Strategy',
                                'description' => 'Develop comprehensive strategies aligned with your business goals.',
                                'icon' => 'chart',
                                'bgColor' => 'bg-blue-600',
                                'subAreas' => ['Network Design', 'Sourcing Strategy', 'Inventory Optimization']
                            ],
                            [
                                'id' => 2,
                                'title' => 'Operations Excellence',
                                'description' => 'Streamline operations for maximum efficiency and productivity.',
                                'icon' => 'cog',
                                'bgColor' => 'bg-green-600',
                                'subAreas' => ['Process Improvement', 'Lean Manufacturing', 'Quality Management']
                            ],
                            [
                                'id' => 3,
                                'title' => 'Digital Transformation',
                                'description' => 'Leverage technology to modernize your supply chain.',
                                'icon' => 'bolt',
                                'bgColor' => 'bg-purple-600',
                                'subAreas' => ['Automation', 'AI/ML Integration', 'IoT Solutions']
                            ]
                        ]
                    ],
                    'ctaText' => 'Start Your Transformation',
                    'ctaLink' => '/consulting',
                    'results' => [
                        'title' => 'Proven Results',
                        'metrics' => [
                            ['id' => 1, 'label' => 'Cost Reduction', 'value' => '25-35%', 'percentage' => '30%'],
                            ['id' => 2, 'label' => 'Efficiency Gain', 'value' => '40%+', 'percentage' => '40%'],
                            ['id' => 3, 'label' => 'Customer Satisfaction', 'value' => '95%+', 'percentage' => '95%']
                        ],
                        'stats' => [
                            ['value' => '500+', 'label' => 'Projects'],
                            ['value' => '98%', 'label' => 'Success Rate'],
                            ['value' => '30%', 'label' => 'Avg. Cost Savings'],
                            ['value' => '40%', 'label' => 'Efficiency Gain']
                        ]
                    ],
                    'testimonial' => [
                        'name' => 'Sarah Johnson',
                        'role' => 'Supply Chain Director, TechLogix',
                        'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
                        'quote' => 'Their consulting team transformed our supply chain operations. We\'ve seen remarkable improvements in efficiency and cost savings.'
                    ],
                    'methodology' => [
                        'show' => true,
                        'title' => 'Our Methodology',
                        'steps' => [
                            ['id' => 1, 'number' => '01', 'title' => 'Discovery', 'description' => 'Assess current state and identify opportunities'],
                            ['id' => 2, 'number' => '02', 'title' => 'Strategy', 'description' => 'Develop tailored roadmap and action plan'],
                            ['id' => 3, 'number' => '03', 'title' => 'Implementation', 'description' => 'Execute with hands-on support'],
                            ['id' => 4, 'number' => '04', 'title' => 'Optimization', 'description' => 'Continuous improvement and monitoring']
                        ]
                    ],
                    'industries' => [
                        'show' => true,
                        'title' => 'Industries We Serve',
                        'items' => [
                            ['id' => 1, 'name' => 'Retail', 'icon' => 'briefcase'],
                            ['id' => 2, 'name' => 'Manufacturing', 'icon' => 'cog'],
                            ['id' => 3, 'name' => 'Healthcare', 'icon' => 'shield'],
                            ['id' => 4, 'name' => 'Logistics', 'icon' => 'globe']
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 102,
                'section_key' => 'supplyChainConsulting',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => 'CONSULTING SERVICES',
                    'experience' => '25+ Years Experience',
                    'title' => 'Supply Chain Consulting That Delivers Results',
                    'description' => 'Expert guidance to optimize your supply chain, reduce costs, and improve operational efficiency.',
                    'quickStats' => [
                        ['value' => '500+', 'label' => 'Projects'],
                        ['value' => '98%', 'label' => 'Success Rate'],
                        ['value' => '30%', 'label' => 'Avg. Cost Savings'],
                        ['value' => '40%', 'label' => 'Efficiency Gain']
                    ],
                    'caseStudies' => [
                        'title' => 'Featured Case Studies',
                        'studies' => [
                            [
                                'id' => 1,
                                'title' => 'Global Retail Supply Chain Optimization',
                                'industry' => 'Retail',
                                'description' => 'Complete supply chain redesign for a Fortune 500 retailer.',
                                'timeline' => '6 months',
                                'savings' => '$50M saved',
                                'company' => 'Global Retail Co',
                                'initials' => 'GRC',
                                'size' => 'Fortune 500',
                                'challenge' => 'Inefficient distribution network causing high costs and delayed deliveries across 500+ stores.',
                                'solution' => 'Redesigned distribution network, implemented demand forecasting, and optimized inventory levels.',
                                'results' => [
                                    ['value' => '30%', 'label' => 'Cost Reduction'],
                                    ['value' => '40%', 'label' => 'Faster Delivery'],
                                    ['value' => '95%', 'label' => 'Forecast Accuracy']
                                ],
                                'testimonial' => [
                                    'quote' => 'Their expertise transformed our supply chain. We\'ve seen unprecedented improvements in efficiency.',
                                    'name' => 'Sarah Johnson',
                                    'role' => 'Supply Chain Director',
                                    'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
                                ]
                            ],
                            [
                                'id' => 2,
                                'title' => 'Manufacturing Inventory Optimization',
                                'industry' => 'Manufacturing',
                                'description' => 'Inventory reduction while maintaining service levels.',
                                'timeline' => '4 months',
                                'savings' => '$25M saved',
                                'company' => 'AutoParts Inc',
                                'initials' => 'API',
                                'size' => 'Mid-size',
                                'challenge' => 'Excessive inventory levels with frequent stockouts of critical parts.',
                                'solution' => 'Implemented demand-driven inventory planning and supplier collaboration program.',
                                'results' => [
                                    ['value' => '35%', 'label' => 'Inventory Reduction'],
                                    ['value' => '99%', 'label' => 'Service Level'],
                                    ['value' => '$25M', 'label' => 'Working Capital']
                                ],
                                'testimonial' => [
                                    'quote' => 'Inventory optimization was a game-changer. We freed up significant working capital.',
                                    'name' => 'Michael Chen',
                                    'role' => 'Operations Manager',
                                    'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
                                ]
                            ]
                        ]
                    ],
                    'services' => [
                        'show' => true,
                        'title' => 'Our Consulting Services',
                        'items' => [
                            [
                                'id' => 1,
                                'title' => 'Supply Chain Strategy',
                                'description' => 'Develop comprehensive strategies aligned with business goals.',
                                'icon' => 'chart',
                                'bgColor' => 'bg-blue-600',
                                'highlights' => ['Network design', 'Sourcing strategy', 'Risk assessment'],
                                'link' => '/services/strategy'
                            ],
                            [
                                'id' => 2,
                                'title' => 'Operations Excellence',
                                'description' => 'Streamline operations for maximum efficiency.',
                                'icon' => 'cog',
                                'bgColor' => 'bg-green-600',
                                'highlights' => ['Process improvement', 'Lean manufacturing', 'Quality management'],
                                'link' => '/services/operations'
                            ],
                            [
                                'id' => 3,
                                'title' => 'Digital Transformation',
                                'description' => 'Leverage technology to modernize your supply chain.',
                                'icon' => 'bolt',
                                'bgColor' => 'bg-purple-600',
                                'highlights' => ['Automation', 'AI/ML integration', 'IoT solutions'],
                                'link' => '/services/digital'
                            ]
                        ]
                    ],
                    'methodology' => [
                        'show' => true,
                        'title' => 'Our Proven Methodology',
                        'steps' => [
                            ['id' => 1, 'number' => '01', 'title' => 'Discovery', 'description' => 'Assess current state', 'duration' => '2-3 weeks'],
                            ['id' => 2, 'number' => '02', 'title' => 'Strategy', 'description' => 'Develop roadmap', 'duration' => '3-4 weeks'],
                            ['id' => 3, 'number' => '03', 'title' => 'Implementation', 'description' => 'Execute plan', 'duration' => '2-6 months'],
                            ['id' => 4, 'number' => '04', 'title' => 'Optimization', 'description' => 'Continuous improvement', 'duration' => 'Ongoing']
                        ]
                    ],
                    'cta' => [
                        'show' => true,
                        'title' => 'Ready to Transform Your Supply Chain?',
                        'description' => 'Let\'s discuss how our consulting expertise can help you achieve your business goals.',
                        'primaryText' => 'Schedule Consultation',
                        'primaryLink' => '/contact',
                        'secondaryText' => 'Download Brochure',
                        'secondaryLink' => '/brochure'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 103,
                'section_key' => 'supplyChainConsulting',
                'variant' => 'variant3',
                'config' => json_encode([
                    'backgroundImage' => 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&h=800&fit=crop',
                    'badge' => 'EXPERT CONSULTING',
                    'hero' => [
                        'title' => [
                            'prefix' => 'Transform Your',
                            'highlight' => 'Supply Chain'
                        ],
                        'description' => 'Strategic consulting to optimize operations, reduce costs, and drive sustainable growth.',
                        'primaryCta' => [
                            'text' => 'Schedule Consultation',
                            'link' => '/contact'
                        ],
                        'secondaryCta' => [
                            'text' => 'Watch Overview',
                            'link' => '/demo'
                        ]
                    ],
                    'trustText' => 'Trusted by 500+ enterprises',
                    'ratingText' => '4.9/5 from 200+ clients',
                    'expertise' => [
                        [
                            'id' => 1,
                            'title' => 'Strategic Planning',
                            'description' => 'Develop comprehensive supply chain strategies aligned with business goals.',
                            'icon' => 'presentation',
                            'gradient' => 'from-blue-600 to-indigo-600',
                            'capabilities' => ['Network optimization', 'Sourcing strategy', 'Risk management']
                        ],
                        [
                            'id' => 2,
                            'title' => 'Operational Excellence',
                            'description' => 'Streamline operations for maximum efficiency and productivity.',
                            'icon' => 'cog',
                            'gradient' => 'from-green-600 to-emerald-600',
                            'capabilities' => ['Process improvement', 'Lean implementation', 'Quality management']
                        ],
                        [
                            'id' => 3,
                            'title' => 'Digital Transformation',
                            'description' => 'Leverage technology to modernize your supply chain.',
                            'icon' => 'bolt',
                            'gradient' => 'from-purple-600 to-pink-600',
                            'capabilities' => ['Automation', 'AI/ML integration', 'IoT solutions']
                        ]
                    ],
                    'roi' => [
                        'show' => true,
                        'title' => 'Calculate Your Potential ROI',
                        'description' => 'See how our consulting services can drive measurable business results.',
                        'buttonText' => 'Try ROI Calculator',
                        'link' => '/roi-calculator',
                        'stats' => [
                            ['value' => '25-35%', 'label' => 'Cost Reduction'],
                            ['value' => '40%+', 'label' => 'Efficiency Gain'],
                            ['value' => '95%+', 'label' => 'Service Level'],
                            ['value' => '6-9 mos', 'label' => 'Payback Period']
                        ]
                    ],
                    'approach' => [
                        'show' => true,
                        'title' => 'Our Consulting Approach',
                        'steps' => [
                            ['id' => 1, 'number' => '01', 'title' => 'Discover', 'description' => 'Assess current state', 'duration' => '2-3 weeks'],
                            ['id' => 2, 'number' => '02', 'title' => 'Strategize', 'description' => 'Develop roadmap', 'duration' => '3-4 weeks'],
                            ['id' => 3, 'number' => '03', 'title' => 'Execute', 'description' => 'Implement solutions', 'duration' => '2-6 months'],
                            ['id' => 4, 'number' => '04', 'title' => 'Optimize', 'description' => 'Continuous improvement', 'duration' => 'Ongoing']
                        ]
                    ],
                    'caseStudies' => [
                        'show' => true,
                        'title' => 'Success Stories',
                        'viewAllLink' => '/case-studies',
                        'studies' => [
                            [
                                'id' => 1,
                                'title' => 'Global Retailer',
                                'industry' => 'Retail',
                                'description' => 'Complete supply chain redesign for Fortune 500 retailer.',
                                'results' => [
                                    ['value' => '30%', 'label' => 'Cost Reduction'],
                                    ['value' => '40%', 'label' => 'Faster Delivery'],
                                    ['value' => '$50M', 'label' => 'Saved']
                                ],
                                'link' => '/case-studies/global-retailer'
                            ],
                            [
                                'id' => 2,
                                'title' => 'Manufacturing Co',
                                'industry' => 'Manufacturing',
                                'description' => 'Inventory optimization and demand planning.',
                                'results' => [
                                    ['value' => '35%', 'label' => 'Inventory Reduction'],
                                    ['value' => '99%', 'label' => 'Service Level'],
                                    ['value' => '$25M', 'label' => 'Freed Capital']
                                ],
                                'link' => '/case-studies/manufacturing'
                            ],
                            [
                                'id' => 3,
                                'title' => 'Healthcare Provider',
                                'industry' => 'Healthcare',
                                'description' => 'Supply chain resilience and risk management.',
                                'results' => [
                                    ['value' => '50%', 'label' => 'Stockout Reduction'],
                                    ['value' => '99.9%', 'label' => 'Availability'],
                                    ['value' => '24/7', 'label' => 'Monitoring']
                                ],
                                'link' => '/case-studies/healthcare'
                            ]
                        ]
                    ],
                    'testimonials' => [
                        [
                            'id' => 1,
                            'name' => 'Sarah Johnson',
                            'role' => 'Supply Chain Director, Global Retail Co',
                            'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
                            'quote' => 'Their expertise transformed our supply chain. We\'ve seen remarkable improvements in efficiency and cost savings.'
                        ],
                        [
                            'id' => 2,
                            'name' => 'Michael Chen',
                            'role' => 'Operations Manager, AutoParts Inc',
                            'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
                            'quote' => 'The team\'s strategic guidance helped us navigate complex supply chain challenges with confidence.'
                        ]
                    ],
                    'footerCta' => [
                        'show' => true,
                        'title' => 'Ready to Optimize Your Supply Chain?',
                        'description' => 'Let\'s discuss how our consulting expertise can help you achieve your business goals.',
                        'buttonText' => 'Schedule Free Consultation',
                        'link' => '/contact'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 104,
                'section_key' => 'supplyChainConsulting',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Transportation Management Section
            [
                'id' => 105,
                'section_key' => 'transportationManagement',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => 'TRANSPORTATION MANAGEMENT',
                    'title' => 'Smart Fleet & Route Optimization',
                    'description' => 'Reduce costs, improve efficiency, and gain real-time visibility into your transportation operations.',
                    'stats' => [
                        ['id' => 1, 'value' => '99.9%', 'label' => 'On-Time Delivery'],
                        ['id' => 2, 'value' => '30%', 'label' => 'Fuel Savings'],
                        ['id' => 3, 'value' => '25%', 'label' => 'Cost Reduction'],
                        ['id' => 4, 'value' => '50K+', 'label' => 'Daily Shipments']
                    ],
                    'features' => [
                        'title' => 'Key Capabilities',
                        'items' => [
                            [
                                'id' => 1,
                                'title' => 'Real-time Tracking',
                                'description' => 'Live GPS tracking and ETA updates for every vehicle.',
                                'icon' => 'location',
                                'bgColor' => 'bg-blue-600'
                            ],
                            [
                                'id' => 2,
                                'title' => 'Route Optimization',
                                'description' => 'AI-powered routing to minimize distance and fuel costs.',
                                'icon' => 'chart',
                                'bgColor' => 'bg-green-600'
                            ],
                            [
                                'id' => 3,
                                'title' => 'Fleet Analytics',
                                'description' => 'Comprehensive reports on vehicle performance and utilization.',
                                'icon' => 'report',
                                'bgColor' => 'bg-purple-600'
                            ]
                        ]
                    ],
                    'ctaText' => 'Start Optimizing Fleet',
                    'ctaLink' => '/contact',
                    'mapImage' => 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=600&fit=crop',
                    'liveTracking' => 'Live Tracking Active',
                    'vehicleStats' => [
                        ['id' => 1, 'label' => 'Active Vehicles', 'value' => '247'],
                        ['id' => 2, 'label' => 'On Route', 'value' => '189']
                    ],
                    'routeOptimized' => 'Route Optimized',
                    'modes' => [
                        'show' => true,
                        'title' => 'Transportation Modes',
                        'items' => [
                            ['id' => 1, 'title' => 'Ground', 'description' => 'Truck & LTL', 'icon' => 'truck', 'bgColor' => 'bg-blue-600'],
                            ['id' => 2, 'title' => 'Air', 'description' => 'Express Freight', 'icon' => 'globe', 'bgColor' => 'bg-cyan-600'],
                            ['id' => 3, 'title' => 'Ocean', 'description' => 'International', 'icon' => 'scale', 'bgColor' => 'bg-teal-600'],
                            ['id' => 4, 'title' => 'Rail', 'description' => 'Bulk Shipping', 'icon' => 'scale', 'bgColor' => 'bg-gray-600']
                        ]
                    ],
                    'keyFeatures' => [
                        [
                            'id' => 1,
                            'title' => 'Load Optimization',
                            'description' => 'Maximize vehicle capacity and reduce trips.',
                            'icon' => 'cube',
                            'bgColor' => 'bg-blue-600',
                            'benefit' => 'Save up to 25% on fuel'
                        ],
                        [
                            'id' => 2,
                            'title' => 'Driver Management',
                            'description' => 'Track hours, compliance, and performance.',
                            'icon' => 'users',
                            'bgColor' => 'bg-green-600',
                            'benefit' => 'Improve driver retention'
                        ],
                        [
                            'id' => 3,
                            'title' => 'Carbon Tracking',
                            'description' => 'Monitor and reduce environmental impact.',
                            'icon' => 'shield',
                            'bgColor' => 'bg-purple-600',
                            'benefit' => 'Meet sustainability goals'
                        ]
                    ],
                    'network' => [
                        'show' => true,
                        'title' => 'Global Carrier Network',
                        'description' => 'Connect with 500+ trusted carriers worldwide for seamless shipping.',
                        'stats' => [
                            ['value' => '500+', 'label' => 'Carriers'],
                            ['value' => '50+', 'label' => 'Countries'],
                            ['value' => '24/7', 'label' => 'Support']
                        ],
                        'carriers' => [
                            ['name' => 'FedEx', 'icon' => 'truck'],
                            ['name' => 'UPS', 'icon' => 'truck'],
                            ['name' => 'DHL', 'icon' => 'globe']
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 106,
                'section_key' => 'transportationManagement',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => 'FLEET MANAGEMENT',
                    'liveStatus' => 'LIVE',
                    'title' => 'Real-time Fleet Intelligence',
                    'description' => 'Monitor and optimize your entire fleet with real-time tracking and predictive analytics.',
                    'fleetCounter' => [
                        'label' => 'Active Fleet',
                        'value' => '247',
                        'additional' => '12'
                    ],
                    'fleet' => [
                        'title' => 'Active Vehicles',
                        'vehicles' => [
                            [
                                'id' => 'TRK-001',
                                'driver' => 'John Smith',
                                'type' => 'Heavy Truck',
                                'status' => 'Active',
                                'eta' => '2:30 PM',
                                'location' => 'I-95 North, mile 42',
                                'origin' => 'Warehouse A',
                                'destination' => 'Distribution Center B',
                                'progress' => '65%',
                                'stats' => [
                                    ['value' => '65%', 'label' => 'Trip Progress'],
                                    ['value' => '45 min', 'label' => 'Est. Arrival'],
                                    ['value' => '12°C', 'label' => 'Temp'],
                                    ['value' => '18.5 L/100km', 'label' => 'Fuel Efficiency']
                                ],
                                'mapImage' => 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=300&fit=crop',
                                'events' => [
                                    ['description' => 'Departed from Warehouse A', 'time' => '08:30 AM', 'color' => 'bg-blue-500'],
                                    ['description' => 'Passed checkpoint - mile 42', 'time' => '10:15 AM', 'color' => 'bg-green-500'],
                                    ['description' => 'Traffic delay reported', 'time' => '11:45 AM', 'color' => 'bg-yellow-500']
                                ]
                            ],
                            [
                                'id' => 'TRK-002',
                                'driver' => 'Sarah Johnson',
                                'type' => 'Medium Truck',
                                'status' => 'Active',
                                'eta' => '3:15 PM',
                                'location' => 'Route 66, mile 128',
                                'origin' => 'Distribution Center C',
                                'destination' => 'Retail Store D',
                                'progress' => '45%',
                                'stats' => [
                                    ['value' => '45%', 'label' => 'Trip Progress'],
                                    ['value' => '75 min', 'label' => 'Est. Arrival'],
                                    ['value' => '15°C', 'label' => 'Temp'],
                                    ['value' => '14.2 L/100km', 'label' => 'Fuel Efficiency']
                                ],
                                'mapImage' => 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=300&fit=crop',
                                'events' => [
                                    ['description' => 'Departed from Distribution Center C', 'time' => '09:15 AM', 'color' => 'bg-blue-500'],
                                    ['description' => 'Passed checkpoint - mile 128', 'time' => '11:30 AM', 'color' => 'bg-green-500']
                                ]
                            ],
                            [
                                'id' => 'TRK-003',
                                'driver' => 'Michael Chen',
                                'type' => 'Light Van',
                                'status' => 'Loading',
                                'eta' => '4:00 PM',
                                'location' => 'Warehouse E',
                                'origin' => 'Warehouse E',
                                'destination' => 'Multiple Stops',
                                'progress' => '10%',
                                'stats' => [
                                    ['value' => '10%', 'label' => 'Trip Progress'],
                                    ['value' => '120 min', 'label' => 'Est. Arrival'],
                                    ['value' => '18°C', 'label' => 'Temp'],
                                    ['value' => '9.5 L/100km', 'label' => 'Fuel Efficiency']
                                ],
                                'mapImage' => 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=300&fit=crop',
                                'events' => [
                                    ['description' => 'Loading in progress', 'time' => '12:00 PM', 'color' => 'bg-yellow-500']
                                ]
                            ]
                        ]
                    ],
                    'metrics' => [
                        ['id' => 1, 'label' => 'Fleet Utilization', 'value' => '94%', 'trend' => '+5%', 'trendColor' => 'text-green-600', 'icon' => 'chart', 'bgColor' => 'bg-blue-600'],
                        ['id' => 2, 'label' => 'On-Time Delivery', 'value' => '98.5%', 'trend' => '+2.3%', 'trendColor' => 'text-green-600', 'icon' => 'clock', 'bgColor' => 'bg-green-600'],
                        ['id' => 3, 'label' => 'Fuel Efficiency', 'value' => '14.2 L/100km', 'trend' => '-8%', 'trendColor' => 'text-green-600', 'icon' => 'dollar', 'bgColor' => 'bg-purple-600'],
                        ['id' => 4, 'label' => 'Maintenance Cost', 'value' => '$0.12/km', 'trend' => '-15%', 'trendColor' => 'text-green-600', 'icon' => 'cog', 'bgColor' => 'bg-orange-600']
                    ],
                    'tools' => [
                        [
                            'id' => 1,
                            'title' => 'Route Optimization',
                            'description' => 'AI-powered routing to minimize distance and fuel costs.',
                            'icon' => 'location',
                            'bgColor' => 'bg-blue-600',
                            'features' => ['Dynamic rerouting', 'Traffic prediction', 'Multi-stop optimization'],
                            'link' => '/features/route-optimization'
                        ],
                        [
                            'id' => 2,
                            'title' => 'Predictive Maintenance',
                            'description' => 'AI-driven maintenance alerts to prevent breakdowns.',
                            'icon' => 'cog',
                            'bgColor' => 'bg-green-600',
                            'features' => ['Real-time diagnostics', 'Service scheduling', 'Parts inventory'],
                            'link' => '/features/predictive-maintenance'
                        ],
                        [
                            'id' => 3,
                            'title' => 'Driver Safety Analytics',
                            'description' => 'Monitor driver behavior and improve safety scores.',
                            'icon' => 'shield',
                            'bgColor' => 'bg-purple-600',
                            'features' => ['Speed monitoring', 'Harsh braking alerts', 'Safety scoring'],
                            'link' => '/features/driver-safety'
                        ]
                    ],
                    'network' => [
                        'show' => true,
                        'title' => 'Global Carrier Network',
                        'description' => 'Connect with 500+ trusted carriers for seamless shipping worldwide.',
                        'carriers' => [
                            ['name' => 'FedEx', 'icon' => 'truck'],
                            ['name' => 'UPS', 'icon' => 'truck'],
                            ['name' => 'DHL', 'icon' => 'globe'],
                            ['name' => 'USPS', 'icon' => 'truck']
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 107,
                'section_key' => 'transportationManagement',
                'variant' => 'variant3',
                'config' => json_encode([
                    'backgroundImage' => 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=1920&h=800&fit=crop',
                    'badge' => 'AI-POWERED FLEET',
                    'hero' => [
                        'title' => [
                            'prefix' => 'Intelligent',
                            'highlight' => 'Transportation Management'
                        ],
                        'description' => 'AI-driven platform for optimizing fleet operations, reducing costs, and improving delivery performance.',
                        'primaryCta' => [
                            'text' => 'Start Free Trial',
                            'link' => '/signup'
                        ],
                        'secondaryCta' => [
                            'text' => 'Watch Demo',
                            'link' => '/demo'
                        ]
                    ],
                    'trustText' => 'Trusted by 1000+ fleets',
                    'ratingText' => '4.9/5 from 500+ reviews',
                    'stats' => [
                        ['id' => 1, 'value' => '99.9%', 'label' => 'On-Time Delivery', 'description' => 'Industry-leading performance'],
                        ['id' => 2, 'value' => '30%', 'label' => 'Fuel Savings', 'description' => 'AI-optimized routes'],
                        ['id' => 3, 'value' => '25%', 'label' => 'Cost Reduction', 'description' => 'Operational efficiency'],
                        ['id' => 4, 'value' => '50K+', 'label' => 'Daily Shipments', 'description' => 'Global scale']
                    ],
                    'intelligence' => [
                        'show' => true,
                        'title' => 'AI-Powered Intelligence',
                        'description' => 'Leverage machine learning to predict delays, optimize routes, and improve fleet performance.',
                        'features' => [
                            [
                                'id' => 1,
                                'title' => 'Predictive ETA',
                                'description' => 'Accurate arrival times using historical and real-time data',
                                'icon' => 'clock',
                                'bgColor' => 'bg-blue-600'
                            ],
                            [
                                'id' => 2,
                                'title' => 'Dynamic Routing',
                                'description' => 'Real-time route adjustments based on traffic and conditions',
                                'icon' => 'location',
                                'bgColor' => 'bg-green-600'
                            ],
                            [
                                'id' => 3,
                                'title' => 'Fuel Optimization',
                                'description' => 'Reduce fuel consumption with intelligent driving recommendations',
                                'icon' => 'dollar',
                                'bgColor' => 'bg-purple-600'
                            ]
                        ],
                        'link' => '/ai-capabilities',
                        'insights' => [
                            ['label' => 'Route Efficiency', 'value' => '94%'],
                            ['label' => 'Fuel Savings', 'value' => '$2.3M'],
                            ['label' => 'Carbon Reduction', 'value' => '35%']
                        ],
                        'lastUpdated' => '2 minutes ago'
                    ],
                    'solutions' => [
                        [
                            'id' => 1,
                            'title' => 'Real-time Tracking',
                            'description' => 'Live GPS tracking with accurate ETA predictions.',
                            'icon' => 'location',
                            'gradient' => 'from-blue-600 to-indigo-600',
                            'benefits' => ['Live location updates', 'ETA predictions', 'Geofencing alerts'],
                            'link' => '/solutions/tracking'
                        ],
                        [
                            'id' => 2,
                            'title' => 'Route Optimization',
                            'description' => 'AI-powered routing to minimize distance and fuel costs.',
                            'icon' => 'chart',
                            'gradient' => 'from-green-600 to-emerald-600',
                            'benefits' => ['Multi-stop optimization', 'Traffic avoidance', 'Dynamic rerouting'],
                            'link' => '/solutions/routing'
                        ],
                        [
                            'id' => 3,
                            'title' => 'Fleet Analytics',
                            'description' => 'Comprehensive analytics for fleet performance and utilization.',
                            'icon' => 'chart',
                            'gradient' => 'from-purple-600 to-pink-600',
                            'benefits' => ['Performance dashboards', 'Utilization reports', 'Maintenance alerts'],
                            'link' => '/solutions/analytics'
                        ]
                    ],
                    'network' => [
                        'show' => true,
                        'title' => 'Global Carrier Network',
                        'description' => 'Connect with 500+ carriers across 50+ countries for seamless shipping.',
                        'stats' => [
                            ['value' => '500+', 'label' => 'Carriers'],
                            ['value' => '50+', 'label' => 'Countries'],
                            ['value' => '24/7', 'label' => 'Support']
                        ],
                        'link' => '/network-map',
                        'regions' => [
                            ['name' => 'North America', 'percentage' => '45%'],
                            ['name' => 'Europe', 'percentage' => '30%'],
                            ['name' => 'Asia Pacific', 'percentage' => '25%']
                        ]
                    ],
                    'testimonials' => [
                        [
                            'id' => 1,
                            'name' => 'Sarah Johnson',
                            'role' => 'Fleet Operations Director',
                            'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
                            'quote' => 'This platform transformed how we manage our fleet. We\'ve seen a 30% reduction in fuel costs and improved on-time delivery to 99.9%.'
                        ],
                        [
                            'id' => 2,
                            'name' => 'Michael Chen',
                            'role' => 'Logistics Manager',
                            'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
                            'quote' => 'The AI-powered route optimization has been a game-changer for our delivery operations. Highly recommended!'
                        ]
                    ],
                    'footerCta' => [
                        'show' => true,
                        'title' => 'Ready to Transform Your Fleet?',
                        'description' => 'Join thousands of businesses already optimizing their transportation operations.',
                        'buttonText' => 'Start Free Trial',
                        'link' => '/signup'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 108,
                'section_key' => 'transportationManagement',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Returns Management Section
            [
                'id' => 109,
                'section_key' => 'returnManagement',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => 'RETURNS MANAGEMENT',
                    'title' => 'Streamlined Returns Processing',
                    'description' => 'Simplify and automate your returns process to reduce costs and improve customer satisfaction.',
                    'stats' => [
                        ['id' => 1, 'value' => '98%', 'label' => 'Customer Satisfaction'],
                        ['id' => 2, 'value' => '24h', 'label' => 'Processing Time'],
                        ['id' => 3, 'value' => '50%', 'label' => 'Faster Restocking'],
                        ['id' => 4, 'value' => '30%', 'label' => 'Cost Reduction']
                    ],
                    'process' => [
                        'show' => true,
                        'title' => 'Returns Process Flow',
                        'steps' => [
                            ['id' => 1, 'number' => '01', 'title' => 'Request', 'description' => 'Customer initiates return', 'duration' => '2 min', 'bgColor' => 'bg-blue-600'],
                            ['id' => 2, 'number' => '02', 'title' => 'Approval', 'description' => 'Auto-approved based on rules', 'duration' => 'Instant', 'bgColor' => 'bg-green-600'],
                            ['id' => 3, 'number' => '03', 'title' => 'Inspection', 'description' => 'Quality check & grading', 'duration' => '24h', 'bgColor' => 'bg-orange-600'],
                            ['id' => 4, 'number' => '04', 'title' => 'Resolution', 'description' => 'Refund or replacement', 'duration' => '48h', 'bgColor' => 'bg-purple-600']
                        ]
                    ],
                    'dashboardImage' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop',
                    'todayReturns' => '156',
                    'returnStats' => [
                        ['id' => 1, 'label' => 'Pending', 'value' => '42'],
                        ['id' => 2, 'label' => 'Inspecting', 'value' => '28'],
                        ['id' => 3, 'label' => 'Approved', 'value' => '86']
                    ],
                    'processingTime' => '2.4h avg',
                    'features' => [
                        'title' => 'Key Capabilities',
                        'items' => [
                            [
                                'id' => 1,
                                'title' => 'Automated Approvals',
                                'description' => 'Rule-based return authorization for instant approval.',
                                'icon' => 'check',
                                'bgColor' => 'bg-green-600'
                            ],
                            [
                                'id' => 2,
                                'title' => 'Quality Inspection',
                                'description' => 'Digital inspection workflows with condition grading.',
                                'icon' => 'shield',
                                'bgColor' => 'bg-blue-600'
                            ],
                            [
                                'id' => 3,
                                'title' => 'Fast Restocking',
                                'description' => 'Automated restocking to get products back in inventory.',
                                'icon' => 'cube',
                                'bgColor' => 'bg-orange-600'
                            ]
                        ]
                    ],
                    'ctaText' => 'Optimize Returns Process',
                    'ctaLink' => '/contact',
                    'methods' => [
                        [
                            'id' => 1,
                            'title' => 'Drop-off',
                            'description' => 'Return items at convenient locations',
                            'icon' => 'location',
                            'bgColor' => 'bg-blue-600',
                            'timeframe' => '1-2 days'
                        ],
                        [
                            'id' => 2,
                            'title' => 'Pickup',
                            'description' => 'Schedule home pickup service',
                            'icon' => 'truck',
                            'bgColor' => 'bg-green-600',
                            'timeframe' => '24 hours'
                        ],
                        [
                            'id' => 3,
                            'title' => 'Mail-in',
                            'description' => 'Print label and ship back',
                            'icon' => 'document',
                            'bgColor' => 'bg-purple-600',
                            'timeframe' => '3-5 days'
                        ]
                    ],
                    'inspection' => [
                        'show' => true,
                        'title' => 'Inspection Workflow',
                        'description' => 'Thorough quality checks to ensure accurate restocking.',
                        'steps' => [
                            'Verify item matches return request',
                            'Check for damage or wear',
                            'Grade condition (New, Like New, Good)',
                            'Update inventory status'
                        ]
                    ],
                    'restocking' => [
                        'show' => true,
                        'title' => 'Restocking Intelligence',
                        'description' => 'Smart restocking to maximize inventory value.',
                        'stats' => [
                            ['value' => '85%', 'label' => 'Restocked'],
                            ['value' => '10%', 'label' => 'Recycled'],
                            ['value' => '5%', 'label' => 'Donated']
                        ]
                    ],
                    'benefits' => [
                        ['id' => 1, 'value' => '98%', 'label' => 'Accuracy', 'icon' => 'check'],
                        ['id' => 2, 'value' => '24h', 'label' => 'Processing', 'icon' => 'clock'],
                        ['id' => 3, 'value' => '50%', 'label' => 'Faster', 'icon' => 'refresh'],
                        ['id' => 4, 'value' => '30%', 'label' => 'Savings', 'icon' => 'dollar']
                    ],
                    'footerCta' => [
                        'show' => true,
                        'title' => 'Ready to Transform Your Returns?',
                        'description' => 'Join thousands of businesses already optimizing their returns process.',
                        'buttonText' => 'Get Started',
                        'link' => '/signup'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 110,
                'section_key' => 'returnManagement',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => 'RETURNS MANAGEMENT',
                    'liveStatus' => 'LIVE',
                    'title' => 'Returns Operations Dashboard',
                    'description' => 'Streamline your returns processing with real-time tracking and automated workflows.',
                    'returnCounter' => [
                        'label' => 'Open Returns',
                        'value' => '156',
                        'trend' => '+12%'
                    ],
                    'returnsQueue' => [
                        'title' => 'Returns Queue',
                        'items' => [
                            [
                                'id' => 'RMA-001',
                                'customer' => 'Sarah Johnson',
                                'email' => 'sarah.j@example.com',
                                'date' => '2024-03-15',
                                'status' => 'Pending',
                                'statusColor' => 'bg-yellow-100 text-yellow-700',
                                'items' => '2 items',
                                'time' => '2 min ago',
                                'product' => 'Wireless Headphones',
                                'sku' => 'WH-001',
                                'price' => '$89.99',
                                'reason' => 'Defective product',
                                'condition' => [
                                    ['label' => 'Packaging', 'value' => 'Damaged', 'color' => 'text-red-600'],
                                    ['label' => 'Product', 'value' => 'Scratched', 'color' => 'text-orange-600'],
                                    ['label' => 'Accessories', 'value' => 'Missing', 'color' => 'text-red-600']
                                ],
                                'disposition' => [
                                    ['label' => 'Restock', 'selected' => false, 'color' => 'bg-green-600 text-white'],
                                    ['label' => 'Refurbish', 'selected' => false, 'color' => 'bg-blue-600 text-white'],
                                    ['label' => 'Recycle', 'selected' => false, 'color' => 'bg-gray-600 text-white'],
                                    ['label' => 'Refund', 'selected' => true, 'color' => 'bg-orange-600 text-white']
                                ]
                            ],
                            [
                                'id' => 'RMA-002',
                                'customer' => 'Michael Chen',
                                'email' => 'michael.c@example.com',
                                'date' => '2024-03-15',
                                'status' => 'Inspecting',
                                'statusColor' => 'bg-blue-100 text-blue-700',
                                'items' => '1 item',
                                'time' => '15 min ago',
                                'product' => 'Smart Watch',
                                'sku' => 'SW-002',
                                'price' => '$199.99',
                                'reason' => 'Wrong size',
                                'condition' => [
                                    ['label' => 'Packaging', 'value' => 'Good', 'color' => 'text-green-600'],
                                    ['label' => 'Product', 'value' => 'Like New', 'color' => 'text-green-600'],
                                    ['label' => 'Accessories', 'value' => 'Complete', 'color' => 'text-green-600']
                                ],
                                'disposition' => [
                                    ['label' => 'Restock', 'selected' => true, 'color' => 'bg-green-600 text-white'],
                                    ['label' => 'Refurbish', 'selected' => false, 'color' => 'bg-blue-600 text-white'],
                                    ['label' => 'Recycle', 'selected' => false, 'color' => 'bg-gray-600 text-white'],
                                    ['label' => 'Refund', 'selected' => false, 'color' => 'bg-orange-600 text-white']
                                ]
                            ]
                        ]
                    ],
                    'analytics' => [
                        ['id' => 1, 'label' => 'Return Rate', 'value' => '8.5%', 'trend' => '-0.5%', 'trendColor' => 'text-green-600', 'icon' => 'refresh', 'bgColor' => 'bg-blue-600'],
                        ['id' => 2, 'label' => 'Processing Time', 'value' => '2.4h', 'trend' => '-15%', 'trendColor' => 'text-green-600', 'icon' => 'clock', 'bgColor' => 'bg-green-600'],
                        ['id' => 3, 'label' => 'Restock Rate', 'value' => '85%', 'trend' => '+5%', 'trendColor' => 'text-green-600', 'icon' => 'cube', 'bgColor' => 'bg-purple-600'],
                        ['id' => 4, 'label' => 'Customer Satisfaction', 'value' => '94%', 'trend' => '+2%', 'trendColor' => 'text-green-600', 'icon' => 'user', 'bgColor' => 'bg-orange-600']
                    ],
                    'reasons' => [
                        'title' => 'Return Reasons',
                        'items' => [
                            ['id' => 1, 'label' => 'Defective Product', 'percentage' => '35%', 'color' => 'bg-red-500'],
                            ['id' => 2, 'label' => 'Wrong Size/Fit', 'percentage' => '25%', 'color' => 'bg-orange-500'],
                            ['id' => 3, 'label' => 'Changed Mind', 'percentage' => '20%', 'color' => 'bg-yellow-500'],
                            ['id' => 4, 'label' => 'Better Price Found', 'percentage' => '15%', 'color' => 'bg-blue-500'],
                            ['id' => 5, 'label' => 'Other', 'percentage' => '5%', 'color' => 'bg-gray-500']
                        ]
                    ],
                    'processing' => [
                        'title' => 'Processing Stages',
                        'stages' => [
                            ['id' => 1, 'name' => 'Pending', 'count' => 42, 'time' => '0-2h', 'progress' => '30%', 'bgColor' => 'bg-yellow-500', 'barColor' => 'bg-yellow-500'],
                            ['id' => 2, 'name' => 'Inspecting', 'count' => 28, 'time' => '2-4h', 'progress' => '45%', 'bgColor' => 'bg-blue-500', 'barColor' => 'bg-blue-500'],
                            ['id' => 3, 'name' => 'Approved', 'count' => 86, 'time' => '4-24h', 'progress' => '80%', 'bgColor' => 'bg-green-500', 'barColor' => 'bg-green-500']
                        ]
                    ],
                    'workflow' => [
                        'show' => true,
                        'title' => 'Automated Restocking Workflow',
                        'steps' => [
                            ['id' => 1, 'title' => 'Receive', 'description' => 'Scan incoming returns', 'icon' => 'package'],
                            ['id' => 2, 'title' => 'Inspect', 'description' => 'Quality check', 'icon' => 'check'],
                            ['id' => 3, 'title' => 'Grade', 'description' => 'Condition assessment', 'icon' => 'chart'],
                            ['id' => 4, 'title' => 'Restock', 'description' => 'Update inventory', 'icon' => 'cube']
                        ]
                    ],
                    'footerCta' => [
                        'show' => true,
                        'title' => 'Ready to Transform Your Returns Process?',
                        'description' => 'Join thousands of businesses already optimizing their returns management.',
                        'buttonText' => 'Start Free Trial',
                        'link' => '/signup'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 111,
                'section_key' => 'returnManagement',
                'variant' => 'variant3',
                'config' => json_encode([
                    'backgroundImage' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&h=800&fit=crop',
                    'badge' => 'SMART RETURNS',
                    'hero' => [
                        'title' => [
                            'prefix' => 'Intelligent',
                            'highlight' => 'Returns Management'
                        ],
                        'description' => 'AI-powered platform for automating returns, reducing costs, and improving customer loyalty.',
                        'primaryCta' => [
                            'text' => 'Start Free Trial',
                            'link' => '/signup'
                        ],
                        'secondaryCta' => [
                            'text' => 'Watch Demo',
                            'link' => '/demo'
                        ]
                    ],
                    'trustText' => 'Trusted by 2000+ merchants',
                    'ratingText' => '4.9/5 from 800+ reviews',
                    'stats' => [
                        ['id' => 1, 'value' => '98%', 'label' => 'Customer Satisfaction', 'description' => 'Post-return satisfaction'],
                        ['id' => 2, 'value' => '24h', 'label' => 'Processing Time', 'description' => 'Average turnaround'],
                        ['id' => 3, 'value' => '50%', 'label' => 'Faster Restocking', 'description' => 'Inventory recovery'],
                        ['id' => 4, 'value' => '30%', 'label' => 'Cost Reduction', 'description' => 'Operational savings']
                    ],
                    'intelligence' => [
                        'show' => true,
                        'title' => 'AI-Powered Returns Intelligence',
                        'description' => 'Leverage machine learning to predict return patterns and automate decision-making.',
                        'features' => [
                            [
                                'id' => 1,
                                'title' => 'Predictive Analytics',
                                'description' => 'Forecast return volumes and identify trends',
                                'icon' => 'chart',
                                'bgColor' => 'bg-blue-600'
                            ],
                            [
                                'id' => 2,
                                'title' => 'Smart Disposition',
                                'description' => 'AI recommends optimal restocking path',
                                'icon' => 'cube',
                                'bgColor' => 'bg-green-600'
                            ],
                            [
                                'id' => 3,
                                'title' => 'Fraud Detection',
                                'description' => 'Identify suspicious return patterns',
                                'icon' => 'shield',
                                'bgColor' => 'bg-purple-600'
                            ]
                        ],
                        'link' => '/ai-capabilities',
                        'insights' => [
                            ['label' => 'Return Rate Forecast', 'value' => '8.2%'],
                            ['label' => 'Fraud Risk Score', 'value' => 'Low'],
                            ['label' => 'Restock Recommendation', 'value' => '85%']
                        ],
                        'lastUpdated' => '2 minutes ago'
                    ],
                    'solutions' => [
                        [
                            'id' => 1,
                            'title' => 'Self-Service Portal',
                            'description' => 'Customer-friendly returns portal with instant approvals.',
                            'icon' => 'user',
                            'gradient' => 'from-blue-600 to-indigo-600',
                            'benefits' => ['24/7 returns initiation', 'Instant label generation', 'Real-time tracking'],
                            'link' => '/solutions/portal'
                        ],
                        [
                            'id' => 2,
                            'title' => 'Automated Inspection',
                            'description' => 'AI-powered quality assessment and condition grading.',
                            'icon' => 'check',
                            'gradient' => 'from-green-600 to-emerald-600',
                            'benefits' => ['Visual inspection', 'Condition scoring', 'Auto-disposition'],
                            'link' => '/solutions/inspection'
                        ],
                        [
                            'id' => 3,
                            'title' => 'Smart Restocking',
                            'description' => 'Intelligent inventory replenishment and value recovery.',
                            'icon' => 'refresh',
                            'gradient' => 'from-orange-600 to-yellow-600',
                            'benefits' => ['Real-time inventory sync', 'Optimal restocking', 'Value optimization'],
                            'link' => '/solutions/restocking'
                        ]
                    ],
                    'sustainability' => [
                        'show' => true,
                        'title' => 'Sustainable Returns',
                        'description' => 'Reduce environmental impact with eco-friendly returns processing.',
                        'stats' => [
                            ['value' => '50K+', 'label' => 'Items Recycled'],
                            ['value' => '75%', 'label' => 'Waste Reduction'],
                            ['value' => '100K+', 'label' => 'Carbon Offset'],
                            ['value' => '90%', 'label' => 'Packaging Reused']
                        ],
                        'link' => '/sustainability',
                        'initiatives' => [
                            ['title' => 'Recycling', 'impact' => '50K+ items', 'emoji' => '♻️'],
                            ['title' => 'Carbon Neutral', 'impact' => '100K+ offset', 'emoji' => '🌱'],
                            ['title' => 'Zero Waste', 'impact' => '75% reduction', 'emoji' => '🌍'],
                            ['title' => 'Green Packaging', 'impact' => '90% reused', 'emoji' => '📦']
                        ]
                    ],
                    'testimonials' => [
                        [
                            'id' => 1,
                            'name' => 'Sarah Johnson',
                            'role' => 'Customer Experience Director',
                            'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
                            'quote' => 'This platform transformed our returns process. Customer satisfaction has improved dramatically.'
                        ],
                        [
                            'id' => 2,
                            'name' => 'Michael Chen',
                            'role' => 'Operations Manager',
                            'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
                            'quote' => 'The AI-powered insights help us optimize our returns strategy and reduce costs significantly.'
                        ]
                    ],
                    'footerCta' => [
                        'show' => true,
                        'title' => 'Ready to Transform Your Returns?',
                        'description' => 'Join thousands of businesses already optimizing their returns process.',
                        'buttonText' => 'Start Free Trial',
                        'link' => '/signup'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 112,
                'section_key' => 'returnManagement',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Custom Solution Section
            [
                'id' => 113,
                'section_key' => 'customSolution',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => 'CUSTOM SOLUTIONS',
                    'title' => 'Tailored Supply Chain Solutions',
                    'description' => 'Get custom-built logistics solutions designed specifically for your business needs and workflows.',
                    'stats' => [
                        ['id' => 1, 'value' => '500+', 'label' => 'Custom Projects'],
                        ['id' => 2, 'value' => '100%', 'label' => 'Client Satisfaction'],
                        ['id' => 3, 'value' => '50+', 'label' => 'Integrations'],
                        ['id' => 4, 'value' => '24/7', 'label' => 'Support']
                    ],
                    'solutions' => [
                        [
                            'id' => 1,
                            'title' => 'Custom Workflows',
                            'description' => 'Build automated workflows tailored to your specific business processes.',
                            'icon' => 'cog',
                            'bgColor' => 'bg-blue-600',
                            'features' => ['Custom approval chains', 'Automated notifications', 'Integration with existing systems'],
                            'link' => '/solutions/custom-workflows'
                        ],
                        [
                            'id' => 2,
                            'title' => 'White-Label Platform',
                            'description' => 'Fully branded solution with your company logo and colors.',
                            'icon' => 'shield',
                            'bgColor' => 'bg-purple-600',
                            'features' => ['Custom branding', 'Domain customization', 'User management'],
                            'link' => '/solutions/white-label'
                        ],
                        [
                            'id' => 3,
                            'title' => 'Enterprise Integration',
                            'description' => 'Seamless integration with your existing ERP and business systems.',
                            'icon' => 'code',
                            'bgColor' => 'bg-green-600',
                            'features' => ['API development', 'Data migration', 'System synchronization'],
                            'link' => '/solutions/enterprise-integration'
                        ]
                    ],
                    'integration' => [
                        'show' => true,
                        'title' => 'Seamless Integration Capabilities',
                        'description' => 'Connect with your existing systems and tools through our powerful API.',
                        'features' => [
                            [
                                'id' => 1,
                                'title' => 'RESTful API',
                                'description' => 'Comprehensive API with full CRUD operations',
                                'icon' => 'code',
                                'bgColor' => 'bg-blue-600'
                            ],
                            [
                                'id' => 2,
                                'title' => 'Webhook Support',
                                'description' => 'Real-time event notifications',
                                'icon' => 'refresh',
                                'bgColor' => 'bg-green-600'
                            ],
                            [
                                'id' => 3,
                                'title' => 'SDK Libraries',
                                'description' => 'Ready-to-use SDKs for popular languages',
                                'icon' => 'cube',
                                'bgColor' => 'bg-purple-600'
                            ]
                        ],
                        'link' => '/integrations',
                        'codeExamples' => [
                            ['method' => 'GET', 'endpoint' => '/api/v1/inventory', 'description' => 'Fetch inventory data'],
                            ['method' => 'POST', 'endpoint' => '/api/v1/orders', 'description' => 'Create new order'],
                            ['method' => 'PUT', 'endpoint' => '/api/v1/shipments/{id}', 'description' => 'Update shipment status']
                        ]
                    ],
                    'process' => [
                        'show' => true,
                        'title' => 'Our Development Process',
                        'steps' => [
                            ['id' => 1, 'number' => '01', 'title' => 'Discovery', 'description' => 'Understand your requirements', 'duration' => '1-2 weeks'],
                            ['id' => 2, 'number' => '02', 'title' => 'Design', 'description' => 'Architecture & planning', 'duration' => '2-3 weeks'],
                            ['id' => 3, 'number' => '03', 'title' => 'Development', 'description' => 'Agile implementation', 'duration' => '4-8 weeks'],
                            ['id' => 4, 'number' => '04', 'title' => 'Deployment', 'description' => 'Launch & support', 'duration' => '1 week']
                        ]
                    ],
                    'techStack' => [
                        'show' => true,
                        'title' => 'Enterprise Technology Stack',
                        'items' => [
                            ['id' => 1, 'name' => 'React', 'category' => 'Frontend', 'icon' => 'cube'],
                            ['id' => 2, 'name' => 'Node.js', 'category' => 'Backend', 'icon' => 'cog'],
                            ['id' => 3, 'name' => 'AWS', 'category' => 'Cloud', 'icon' => 'cloud'],
                            ['id' => 4, 'name' => 'AI/ML', 'category' => 'Intelligence', 'icon' => 'chip']
                        ]
                    ],
                    'caseStudies' => [
                        [
                            'id' => 1,
                            'title' => 'Enterprise Logistics Platform',
                            'industry' => 'Retail',
                            'description' => 'Custom-built logistics platform for a Fortune 500 retailer.',
                            'results' => [
                                ['value' => '40%', 'label' => 'Efficiency Gain'],
                                ['value' => '99.9%', 'label' => 'Accuracy'],
                                ['value' => '30%', 'label' => 'Cost Savings']
                            ],
                            'link' => '/case-studies/enterprise-logistics'
                        ],
                        [
                            'id' => 2,
                            'title' => 'IoT Warehouse Solution',
                            'industry' => 'Manufacturing',
                            'description' => 'IoT-enabled warehouse management system.',
                            'results' => [
                                ['value' => '50%', 'label' => 'Faster Picking'],
                                ['value' => '100%', 'label' => 'Visibility'],
                                ['value' => '25%', 'label' => 'Inventory Reduction']
                            ],
                            'link' => '/case-studies/iot-warehouse'
                        ]
                    ],
                    'footerCta' => [
                        'show' => true,
                        'title' => 'Ready for a Custom Solution?',
                        'description' => 'Let\'s discuss your specific requirements and build a solution tailored to your business.',
                        'primaryText' => 'Schedule Consultation',
                        'primaryLink' => '/contact',
                        'secondaryText' => 'View Pricing',
                        'secondaryLink' => '/pricing'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 114,
                'section_key' => 'customSolution',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => 'CUSTOM SOLUTIONS',
                    'expertise' => '10+ Years Expertise',
                    'title' => 'Tailored Technology Solutions',
                    'description' => 'Custom-built supply chain solutions designed specifically for your business requirements.',
                    'projectCounter' => [
                        'label' => 'Successful Projects',
                        'value' => '500+',
                        'trend' => '+12%'
                    ],
                    'tabs' => [
                        ['id' => 1, 'label' => 'API Integration', 'icon' => 'code'],
                        ['id' => 2, 'label' => 'IoT Solutions', 'icon' => 'chip'],
                        ['id' => 3, 'label' => 'Analytics Platform', 'icon' => 'chart']
                    ],
                    'solutions' => [
                        [
                            'id' => 1,
                            'tabId' => 1,
                            'title' => 'RESTful API Gateway',
                            'description' => 'Custom API gateway for seamless integration with your existing systems.',
                            'icon' => 'code',
                            'bgColor' => 'bg-blue-600',
                            'techStack' => ['Node.js', 'GraphQL', 'OAuth'],
                            'link' => '/solutions/api-gateway'
                        ],
                        [
                            'id' => 2,
                            'tabId' => 1,
                            'title' => 'Webhook Service',
                            'description' => 'Real-time event notifications and data synchronization.',
                            'icon' => 'refresh',
                            'bgColor' => 'bg-green-600',
                            'techStack' => ['Webhooks', 'RabbitMQ', 'Redis'],
                            'link' => '/solutions/webhook'
                        ],
                        [
                            'id' => 3,
                            'tabId' => 1,
                            'title' => 'SDK Development',
                            'description' => 'Custom SDKs for popular programming languages.',
                            'icon' => 'cube',
                            'bgColor' => 'bg-purple-600',
                            'techStack' => ['Python', 'Java', 'JavaScript'],
                            'link' => '/solutions/sdk'
                        ],
                        [
                            'id' => 4,
                            'tabId' => 2,
                            'title' => 'IoT Sensor Network',
                            'description' => 'Real-time monitoring with connected sensors.',
                            'icon' => 'chip',
                            'bgColor' => 'bg-teal-600',
                            'techStack' => ['MQTT', 'LoRaWAN', '5G'],
                            'link' => '/solutions/iot-sensors'
                        ],
                        [
                            'id' => 5,
                            'tabId' => 2,
                            'title' => 'Asset Tracking',
                            'description' => 'GPS and BLE-based asset tracking solutions.',
                            'icon' => 'location',
                            'bgColor' => 'bg-orange-600',
                            'techStack' => ['GPS', 'BLE', 'RTLS'],
                            'link' => '/solutions/asset-tracking'
                        ],
                        [
                            'id' => 6,
                            'tabId' => 2,
                            'title' => 'Predictive Maintenance',
                            'description' => 'AI-driven equipment monitoring and alerts.',
                            'icon' => 'bolt',
                            'bgColor' => 'bg-red-600',
                            'techStack' => ['AI/ML', 'Edge Computing', 'Time Series'],
                            'link' => '/solutions/predictive-maintenance'
                        ],
                        [
                            'id' => 7,
                            'tabId' => 3,
                            'title' => 'Custom Dashboards',
                            'description' => 'Tailored analytics dashboards for your KPIs.',
                            'icon' => 'chart',
                            'bgColor' => 'bg-indigo-600',
                            'techStack' => ['React', 'D3.js', 'WebSockets'],
                            'link' => '/solutions/dashboards'
                        ],
                        [
                            'id' => 8,
                            'tabId' => 3,
                            'title' => 'Predictive Analytics',
                            'description' => 'Machine learning models for demand forecasting.',
                            'icon' => 'trending',
                            'bgColor' => 'bg-cyan-600',
                            'techStack' => ['Python', 'TensorFlow', 'Pandas'],
                            'link' => '/solutions/predictive-analytics'
                        ],
                        [
                            'id' => 9,
                            'tabId' => 3,
                            'title' => 'BI Integration',
                            'description' => 'Connect with your existing BI tools.',
                            'icon' => 'database',
                            'bgColor' => 'bg-amber-600',
                            'techStack' => ['Tableau', 'PowerBI', 'Looker'],
                            'link' => '/solutions/bi-integration'
                        ]
                    ],
                    'architecture' => [
                        'show' => true,
                        'title' => 'Modern Cloud Architecture',
                        'description' => 'Scalable, secure, and highly available infrastructure designed for enterprise needs.',
                        'features' => [
                            [
                                'id' => 1,
                                'title' => 'Microservices',
                                'description' => 'Independent scalable services',
                                'icon' => 'cube',
                                'bgColor' => 'bg-blue-600'
                            ],
                            [
                                'id' => 2,
                                'title' => 'Container Orchestration',
                                'description' => 'Kubernetes-based deployment',
                                'icon' => 'cloud',
                                'bgColor' => 'bg-green-600'
                            ],
                            [
                                'id' => 3,
                                'title' => 'Auto-scaling',
                                'description' => 'Dynamic resource allocation',
                                'icon' => 'refresh',
                                'bgColor' => 'bg-purple-600'
                            ]
                        ],
                        'link' => '/architecture',
                        'layers' => [
                            ['name' => 'Presentation', 'tech' => 'React/Next.js', 'icon' => 'mobile'],
                            ['name' => 'Application', 'tech' => 'Node.js/Go', 'icon' => 'code'],
                            ['name' => 'Data', 'tech' => 'PostgreSQL/MongoDB', 'icon' => 'database'],
                            ['name' => 'Infrastructure', 'tech' => 'AWS/Kubernetes', 'icon' => 'cloud']
                        ]
                    ],
                    'metrics' => [
                        ['id' => 1, 'label' => 'Projects Delivered', 'value' => '500+', 'trend' => '+12%', 'trendColor' => 'text-green-600', 'icon' => 'cube', 'bgColor' => 'bg-blue-600'],
                        ['id' => 2, 'label' => 'Client Retention', 'value' => '98%', 'trend' => '+2%', 'trendColor' => 'text-green-600', 'icon' => 'users', 'bgColor' => 'bg-green-600'],
                        ['id' => 3, 'label' => 'Avg. Time to Market', 'value' => '8 weeks', 'trend' => '-20%', 'trendColor' => 'text-green-600', 'icon' => 'clock', 'bgColor' => 'bg-purple-600'],
                        ['id' => 4, 'label' => 'Satisfaction Score', 'value' => '4.9/5', 'trend' => '+0.2', 'trendColor' => 'text-green-600', 'icon' => 'star', 'bgColor' => 'bg-orange-600']
                    ],
                    'timeline' => [
                        'show' => true,
                        'title' => 'Implementation Timeline',
                        'phases' => [
                            ['id' => 1, 'number' => '01', 'name' => 'Discovery', 'description' => 'Requirements gathering', 'duration' => '1-2 weeks', 'bgColor' => 'bg-blue-600'],
                            ['id' => 2, 'number' => '02', 'name' => 'Design', 'description' => 'Architecture planning', 'duration' => '2-3 weeks', 'bgColor' => 'bg-green-600'],
                            ['id' => 3, 'number' => '03', 'name' => 'Development', 'description' => 'Agile sprints', 'duration' => '4-8 weeks', 'bgColor' => 'bg-purple-600'],
                            ['id' => 4, 'number' => '04', 'name' => 'Deployment', 'description' => 'Launch & support', 'duration' => '1 week', 'bgColor' => 'bg-orange-600']
                        ]
                    ],
                    'successStories' => [
                        [
                            'id' => 1,
                            'company' => 'Global Retail Co',
                            'initials' => 'GRC',
                            'industry' => 'Retail',
                            'testimonial' => 'The custom platform they built transformed our supply chain operations completely.',
                            'results' => [
                                ['value' => '40%', 'label' => 'Efficiency'],
                                ['value' => '99.9%', 'label' => 'Accuracy'],
                                ['value' => '30%', 'label' => 'Savings']
                            ],
                            'link' => '/case-studies/global-retail'
                        ],
                        [
                            'id' => 2,
                            'company' => 'TechLogix',
                            'initials' => 'TL',
                            'industry' => 'Technology',
                            'testimonial' => 'Their IoT solution gave us real-time visibility across our entire warehouse network.',
                            'results' => [
                                ['value' => '50%', 'label' => 'Visibility'],
                                ['value' => '100%', 'label' => 'Tracking'],
                                ['value' => '25%', 'label' => 'Faster']
                            ],
                            'link' => '/case-studies/techlogix'
                        ]
                    ],
                    'footerCta' => [
                        'show' => true,
                        'title' => 'Ready to Build Something Great?',
                        'description' => 'Let\'s discuss your custom solution requirements and build something amazing together.',
                        'primaryText' => 'Start Your Project',
                        'primaryLink' => '/contact',
                        'secondaryText' => 'View Case Studies',
                        'secondaryLink' => '/case-studies'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 115,
                'section_key' => 'customSolution',
                'variant' => 'variant3',
                'config' => json_encode([
                    'backgroundImage' => 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&h=800&fit=crop',
                    'badge' => 'CUSTOM SOLUTIONS',
                    'hero' => [
                        'title' => [
                            'prefix' => 'Build',
                            'highlight' => 'Tailored Solutions'
                        ],
                        'description' => 'Custom-developed supply chain solutions designed specifically for your unique business needs.',
                        'primaryCta' => [
                            'text' => 'Start Your Project',
                            'link' => '/contact'
                        ],
                        'secondaryCta' => [
                            'text' => 'View Case Studies',
                            'link' => '/case-studies'
                        ]
                    ],
                    'trustText' => 'Trusted by 500+ enterprises',
                    'ratingText' => '4.9/5 from 200+ clients',
                    'stats' => [
                        ['id' => 1, 'value' => '500+', 'label' => 'Custom Projects', 'description' => 'Successfully delivered'],
                        ['id' => 2, 'value' => '100%', 'label' => 'Client Satisfaction', 'description' => '5-star reviews'],
                        ['id' => 3, 'value' => '50+', 'label' => 'Integrations', 'description' => 'Systems connected'],
                        ['id' => 4, 'value' => '24/7', 'label' => 'Support', 'description' => 'Enterprise-grade']
                    ],
                    'innovation' => [
                        'show' => true,
                        'title' => 'Innovation Lab',
                        'description' => 'Cutting-edge technology solutions developed by our expert engineering team.',
                        'features' => [
                            [
                                'id' => 1,
                                'title' => 'AI/ML Integration',
                                'description' => 'Custom machine learning models',
                                'icon' => 'chip',
                                'bgColor' => 'bg-blue-600'
                            ],
                            [
                                'id' => 2,
                                'title' => 'IoT Solutions',
                                'description' => 'Connected device platforms',
                                'icon' => 'mobile',
                                'bgColor' => 'bg-green-600'
                            ],
                            [
                                'id' => 3,
                                'title' => 'Blockchain',
                                'description' => 'Secure distributed ledgers',
                                'icon' => 'cube',
                                'bgColor' => 'bg-purple-600'
                            ]
                        ],
                        'link' => '/innovation-lab',
                        'projects' => [
                            ['name' => 'AI Demand Forecasting', 'status' => 'Beta Testing', 'progress' => '85%'],
                            ['name' => 'IoT Warehouse', 'status' => 'Development', 'progress' => '60%'],
                            ['name' => 'Blockchain Tracking', 'status' => 'Research', 'progress' => '40%']
                        ],
                        'nextRelease' => 'Q2 2024'
                    ],
                    'showcase' => [
                        [
                            'id' => 1,
                            'title' => 'Enterprise Integration',
                            'description' => 'Seamless integration with existing enterprise systems.',
                            'icon' => 'code',
                            'gradient' => 'from-blue-600 to-indigo-600',
                            'capabilities' => ['API Gateway', 'Data Sync', 'Legacy Integration'],
                            'link' => '/solutions/integration'
                        ],
                        [
                            'id' => 2,
                            'title' => 'Data Analytics Platform',
                            'description' => 'Custom analytics dashboards and reporting tools.',
                            'icon' => 'chart',
                            'gradient' => 'from-green-600 to-emerald-600',
                            'capabilities' => ['Real-time Analytics', 'Predictive Models', 'Custom Reports'],
                            'link' => '/solutions/analytics'
                        ],
                        [
                            'id' => 3,
                            'title' => 'Mobile Solutions',
                            'description' => 'Native mobile apps for field operations.',
                            'icon' => 'mobile',
                            'gradient' => 'from-purple-600 to-pink-600',
                            'capabilities' => ['iOS/Android', 'Offline Mode', 'Real-time Sync'],
                            'link' => '/solutions/mobile'
                        ]
                    ],
                    'success' => [
                        'show' => true,
                        'title' => 'Client Success Platform',
                        'description' => 'Real results from our custom solutions delivered to enterprise clients.',
                        'stats' => [
                            ['value' => '98%', 'label' => 'Client Retention'],
                            ['value' => '40%', 'label' => 'Efficiency Gain'],
                            ['value' => '50+', 'label' => 'Enterprise Clients'],
                            ['value' => '3x', 'label' => 'Avg. ROI']
                        ],
                        'link' => '/success-stories',
                        'testimonials' => [
                            ['name' => 'Sarah Johnson', 'role' => 'CTO', 'quote' => 'Transformed our operations completely'],
                            ['name' => 'Michael Chen', 'role' => 'VP of Supply Chain', 'quote' => 'Exceeded all expectations'],
                            ['name' => 'Emily Rodriguez', 'role' => 'Director of Logistics', 'quote' => 'Game-changing solution'],
                            ['name' => 'David Kim', 'role' => 'Operations Manager', 'quote' => 'Outstanding partnership']
                        ]
                    ],
                    'techRadar' => [
                        'show' => true,
                        'title' => 'Technology Radar',
                        'categories' => [
                            [
                                'name' => 'Frontend',
                                'technologies' => [
                                    ['name' => 'React', 'status' => 'Adopt', 'badgeColor' => 'bg-green-100 text-green-700'],
                                    ['name' => 'Vue.js', 'status' => 'Trial', 'badgeColor' => 'bg-blue-100 text-blue-700'],
                                    ['name' => 'Angular', 'status' => 'Hold', 'badgeColor' => 'bg-yellow-100 text-yellow-700']
                                ]
                            ],
                            [
                                'name' => 'Backend',
                                'technologies' => [
                                    ['name' => 'Node.js', 'status' => 'Adopt', 'badgeColor' => 'bg-green-100 text-green-700'],
                                    ['name' => 'Python', 'status' => 'Adopt', 'badgeColor' => 'bg-green-100 text-green-700'],
                                    ['name' => 'Go', 'status' => 'Trial', 'badgeColor' => 'bg-blue-100 text-blue-700']
                                ]
                            ],
                            [
                                'name' => 'Cloud',
                                'technologies' => [
                                    ['name' => 'AWS', 'status' => 'Adopt', 'badgeColor' => 'bg-green-100 text-green-700'],
                                    ['name' => 'Azure', 'status' => 'Trial', 'badgeColor' => 'bg-blue-100 text-blue-700'],
                                    ['name' => 'GCP', 'status' => 'Assess', 'badgeColor' => 'bg-purple-100 text-purple-700']
                                ]
                            ],
                            [
                                'name' => 'Data',
                                'technologies' => [
                                    ['name' => 'PostgreSQL', 'status' => 'Adopt', 'badgeColor' => 'bg-green-100 text-green-700'],
                                    ['name' => 'MongoDB', 'status' => 'Adopt', 'badgeColor' => 'bg-green-100 text-green-700'],
                                    ['name' => 'Redis', 'status' => 'Adopt', 'badgeColor' => 'bg-green-100 text-green-700']
                                ]
                            ]
                        ]
                    ],
                    'testimonials' => [
                        [
                            'id' => 1,
                            'name' => 'Sarah Johnson',
                            'role' => 'CTO, TechCorp',
                            'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
                            'quote' => 'Their custom solution transformed our supply chain operations completely. The team\'s expertise is unmatched.'
                        ],
                        [
                            'id' => 2,
                            'name' => 'Michael Chen',
                            'role' => 'VP of Supply Chain, Global Retail',
                            'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
                            'quote' => 'The custom platform they built exceeded all our expectations. Highly recommended for complex projects.'
                        ]
                    ],
                    'footerCta' => [
                        'show' => true,
                        'title' => 'Ready to Build Something Great?',
                        'description' => 'Let\'s discuss your custom solution requirements and build something amazing together.',
                        'buttonText' => 'Schedule Consultation',
                        'link' => '/contact'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 116,
                'section_key' => 'customSolution',
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
