<?php

namespace Database\Seeders\PageRelatedSeeders\SectionVariantSeeder;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FeaturesPageSectionVariantSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        // Upsert only this page's variants so other page seeders do not get wiped out.
        $variants = [
            // Real-Time Tracking Section
            [
                'id' => 117,
                'section_key' => 'realTimeTracking',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => [
                        'show' => true,
                        'showPulse' => true,
                        'text' => 'REAL-TIME TRACKING',
                        'backgroundColor' => 'bg-blue-100 dark:bg-gray-800',
                        'borderColor' => 'border-blue-200 dark:border-gray-700',
                        'textColor' => 'text-blue-700 dark:text-gray-300'
                    ],
                    'title' => [
                        'prefix' => 'Live',
                        'highlightedText' => 'Real-Time Tracking',
                        'suffix' => 'for Every Shipment',
                        'highlightGradient' => 'from-blue-600 to-indigo-600'
                    ],
                    'description' => 'Gain complete visibility into your supply chain with live GPS tracking, accurate ETAs, and instant notifications.',
                    'features' => [
                        [
                            'id' => 1,
                            'title' => 'Live GPS Tracking',
                            'description' => 'Monitor your shipments in real-time with precise GPS location updates.',
                            'icon' => 'location',
                            'details' => ['Real-time location updates', 'Route history playback', 'Geofencing alerts'],
                            'link' => '/features/live-gps-tracking'
                        ],
                        [
                            'id' => 2,
                            'title' => 'Smart ETA Predictions',
                            'description' => 'AI-powered arrival time predictions based on traffic and historical data.',
                            'icon' => 'clock',
                            'details' => ['Dynamic ETA updates', 'Traffic-aware routing', 'Delay notifications'],
                            'link' => '/features/smart-eta'
                        ],
                        [
                            'id' => 3,
                            'title' => 'Instant Alerts',
                            'description' => 'Get real-time notifications for important shipment events and milestones.',
                            'icon' => 'bell',
                            'details' => ['Custom alert rules', 'Email & SMS notifications', 'Webhook support'],
                            'link' => '/features/instant-alerts'
                        ],
                        [
                            'id' => 4,
                            'title' => 'Performance Analytics',
                            'description' => 'Track delivery performance with detailed analytics and reporting.',
                            'icon' => 'chart',
                            'details' => ['On-time delivery metrics', 'Driver performance tracking', 'Custom dashboards'],
                            'link' => '/features/performance-analytics'
                        ],
                        [
                            'id' => 5,
                            'title' => 'Mobile App Access',
                            'description' => 'Track shipments on the go with our native mobile applications.',
                            'icon' => 'mobile',
                            'details' => ['iOS & Android apps', 'Push notifications', 'Offline access'],
                            'link' => '/features/mobile-app'
                        ],
                        [
                            'id' => 6,
                            'title' => 'Live Sync',
                            'description' => 'Real-time data synchronization across all your devices and platforms.',
                            'icon' => 'refresh',
                            'details' => ['Instant data updates', 'Multi-platform sync', 'WebSocket integration'],
                            'link' => '/features/live-sync'
                        ]
                    ],
                    'showCta' => true,
                    'ctaText' => 'Ready to track your shipments in real-time?',
                    'ctaLink' => '/demo',
                    'ctaButton' => [
                        'text' => 'Start Free Trial',
                        'backgroundColor' => 'bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600',
                        'textColor' => 'text-white'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 118,
                'section_key' => 'realTimeTracking',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => [
                        'show' => true,
                        'showPulse' => true,
                        'text' => 'LIVE TRACKING',
                        'backgroundColor' => 'bg-blue-100 dark:bg-gray-800',
                        'borderColor' => 'border-blue-200 dark:border-gray-700',
                        'textColor' => 'text-blue-700 dark:text-gray-300'
                    ],
                    'title' => [
                        'prefix' => 'End-to-End',
                        'highlightedText' => 'Real-Time Visibility',
                        'suffix' => '',
                        'highlightGradient' => 'from-blue-600 to-indigo-600'
                    ],
                    'description' => 'Track your shipments from origin to destination with precise GPS coordinates and live status updates.',
                    'features' => [
                        [
                            'id' => 1,
                            'title' => 'Live GPS Tracking',
                            'description' => 'Pinpoint your shipments with accurate location data updated every few seconds.',
                            'icon' => 'location',
                            'details' => ['Real-time position updates', 'Route playback history', 'Geofence alerts'],
                            'link' => '/features/gps-tracking',
                            'demoText' => 'Shipment moving along route',
                            'highlightText' => 'GPS accuracy up to 3 meters enables precise location tracking.'
                        ],
                        [
                            'id' => 2,
                            'title' => 'Dynamic ETAs',
                            'description' => 'AI-powered arrival predictions that adjust based on real-time conditions.',
                            'icon' => 'clock',
                            'details' => ['Traffic-aware calculations', 'Weather impact integration', 'Historical pattern analysis'],
                            'link' => '/features/dynamic-eta',
                            'demoText' => 'ETA updating based on traffic',
                            'highlightText' => 'Dynamic ETAs are 35% more accurate than static estimates.'
                        ],
                        [
                            'id' => 3,
                            'title' => 'Instant Notifications',
                            'description' => 'Real-time alerts for important milestones and unexpected delays.',
                            'icon' => 'bell',
                            'details' => ['Custom notification rules', 'Multi-channel delivery', 'Real-time triggers'],
                            'link' => '/features/notifications',
                            'demoText' => 'Alert triggered at checkpoint',
                            'highlightText' => 'Instant notifications reduce response time by 60%.'
                        ],
                        [
                            'id' => 4,
                            'title' => 'Performance Analytics',
                            'description' => 'Comprehensive insights into delivery performance and trends.',
                            'icon' => 'chart',
                            'details' => ['On-time delivery metrics', 'Carrier performance', 'Trend analysis'],
                            'link' => '/features/analytics',
                            'demoText' => 'Dashboard updating live',
                            'highlightText' => 'Data-driven decisions improve delivery performance by 25%.'
                        ],
                        [
                            'id' => 5,
                            'title' => 'Mobile Access',
                            'description' => 'Track shipments on the go with our iOS and Android apps.',
                            'icon' => 'mobile',
                            'details' => ['Push notifications', 'Offline access', 'Barcode scanning'],
                            'link' => '/features/mobile',
                            'demoText' => 'Mobile app interface',
                            'highlightText' => 'Mobile tracking increases driver productivity by 30%.'
                        ],
                        [
                            'id' => 6,
                            'title' => 'Live Dashboard',
                            'description' => 'Centralized view of all shipments with customizable widgets.',
                            'icon' => 'eye',
                            'details' => ['Custom views', 'Real-time filters', 'Export capabilities'],
                            'link' => '/features/dashboard',
                            'demoText' => 'Dashboard with live data',
                            'highlightText' => 'Centralized dashboards save 15+ hours per week in manual tracking.'
                        ]
                    ],
                    'showCta' => true,
                    'ctaText' => 'Ready to get real-time visibility?',
                    'ctaLink' => '/demo',
                    'ctaButton' => [
                        'text' => 'Start Free Trial',
                        'backgroundColor' => 'bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600',
                        'textColor' => 'text-white'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 119,
                'section_key' => 'realTimeTracking',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'show' => true,
                        'showPulse' => true,
                        'text' => 'REAL-TIME TRACKING',
                        'backgroundColor' => 'bg-blue-100 dark:bg-gray-800',
                        'borderColor' => 'border-blue-200 dark:border-gray-700',
                        'textColor' => 'text-blue-700 dark:text-gray-300'
                    ],
                    'title' => [
                        'prefix' => 'Ultimate',
                        'highlightedText' => 'Visibility',
                        'suffix' => 'for Your Supply Chain',
                        'highlightGradient' => 'from-blue-600 to-indigo-600'
                    ],
                    'description' => 'Track every shipment in real-time with precise GPS coordinates, live ETAs, and instant alerts.',
                    'stats' => [
                        ['value' => '99.9%', 'label' => 'Uptime'],
                        ['value' => '<2s', 'label' => 'Update Speed'],
                        ['value' => '500M+', 'label' => 'Tracked Shipments'],
                        ['value' => '98%', 'label' => 'Accuracy Rate']
                    ],
                    'features' => [
                        [
                            'id' => 1,
                            'title' => 'Live GPS Tracking',
                            'description' => 'Real-time location updates with precise GPS coordinates for every shipment.',
                            'icon' => 'location',
                            'isNew' => false,
                            'isPopular' => true,
                            'details' => ['Pinpoint accuracy up to 3 meters', 'Live route visualization', 'Geofence alerts'],
                            'link' => '/features/live-gps'
                        ],
                        [
                            'id' => 2,
                            'title' => 'Smart ETAs',
                            'description' => 'AI-powered arrival predictions that adapt to real-time conditions.',
                            'icon' => 'clock',
                            'isNew' => true,
                            'isPopular' => false,
                            'details' => ['Traffic-aware calculations', 'Weather impact integration', 'Dynamic updates'],
                            'link' => '/features/smart-eta'
                        ],
                        [
                            'id' => 3,
                            'title' => 'Instant Alerts',
                            'description' => 'Get real-time notifications for important shipment events.',
                            'icon' => 'bell',
                            'isNew' => false,
                            'isPopular' => true,
                            'details' => ['Custom notification rules', 'Email & SMS delivery', 'Webhook support'],
                            'link' => '/features/alerts'
                        ],
                        [
                            'id' => 4,
                            'title' => 'Analytics Dashboard',
                            'description' => 'Comprehensive insights into delivery performance and trends.',
                            'icon' => 'chart',
                            'isNew' => false,
                            'isPopular' => false,
                            'details' => ['On-time delivery metrics', 'Carrier comparison', 'Custom reports'],
                            'link' => '/features/analytics'
                        ],
                        [
                            'id' => 5,
                            'title' => 'Mobile Access',
                            'description' => 'Track shipments on the go with iOS and Android apps.',
                            'icon' => 'mobile',
                            'isNew' => false,
                            'isPopular' => true,
                            'details' => ['Push notifications', 'Offline mode', 'Barcode scanning'],
                            'link' => '/features/mobile'
                        ],
                        [
                            'id' => 6,
                            'title' => 'API Integration',
                            'description' => 'Connect with your existing systems via powerful APIs.',
                            'icon' => 'cloud',
                            'isNew' => false,
                            'isPopular' => false,
                            'details' => ['RESTful API', 'Webhook events', 'SDK libraries'],
                            'link' => '/features/api'
                        ]
                    ],
                    'showIntegrations' => true,
                    'integrationsTitle' => 'Works with your favorite tools',
                    'integrationsDescription' => 'Seamlessly integrate with your existing software ecosystem',
                    'integrations' => [
                        ['name' => 'Shopify', 'icon' => 'shopping-bag'],
                        ['name' => 'Salesforce', 'icon' => 'cloud'],
                        ['name' => 'Slack', 'icon' => 'message'],
                        ['name' => 'Zapier', 'icon' => 'zap'],
                        ['name' => 'Tableau', 'icon' => 'bar-chart-2'],
                        ['name' => 'PowerBI', 'icon' => 'trending-up']
                    ],
                    'showCta' => true,
                    'ctaTitle' => 'Ready to transform your tracking experience?',
                    'ctaDescription' => 'Join thousands of businesses that trust our real-time tracking solution',
                    'ctaPrimaryLink' => '/demo',
                    'ctaSecondaryLink' => '/contact',
                    'ctaButton' => [
                        'primaryText' => 'Start Free Trial',
                        'secondaryText' => 'Contact Sales'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 120,
                'section_key' => 'realTimeTracking',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Automated Reordering Section
            [
                'id' => 121,
                'section_key' => 'automatedReordering',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => [
                        'show' => true,
                        'showPulse' => true,
                        'text' => 'AUTOMATED REORDERING',
                        'backgroundColor' => 'bg-green-100 dark:bg-gray-800',
                        'borderColor' => 'border-green-200 dark:border-gray-700',
                        'textColor' => 'text-green-700 dark:text-gray-300'
                    ],
                    'title' => [
                        'prefix' => 'Smart',
                        'highlightedText' => 'Automated Reordering',
                        'suffix' => 'for Optimal Inventory',
                        'highlightGradient' => 'from-green-600 to-emerald-600'
                    ],
                    'description' => 'Never run out of stock again with AI-powered demand forecasting and automatic purchase order generation.',
                    'benefits' => [
                        [
                            'title' => '99.9% Stock Availability',
                            'description' => 'Eliminate stockouts and lost sales with intelligent reordering',
                            'icon' => 'sparkles'
                        ],
                        [
                            'title' => 'Reduce Inventory Costs',
                            'description' => 'Lower carrying costs by maintaining optimal stock levels',
                            'icon' => 'trending'
                        ],
                        [
                            'title' => 'Save Time',
                            'description' => 'Eliminate manual order processing and focus on growth',
                            'icon' => 'clock'
                        ]
                    ],
                    'features' => [
                        [
                            'id' => 1,
                            'title' => 'AI Demand Forecasting',
                            'description' => 'Predict future demand with machine learning algorithms.',
                            'icon' => 'chip',
                            'details' => ['Seasonal trend analysis', 'Sales pattern recognition', 'Promotion impact prediction'],
                            'link' => '/features/demand-forecasting'
                        ],
                        [
                            'id' => 2,
                            'title' => 'Smart Reorder Points',
                            'description' => 'Dynamic reorder points based on real-time data.',
                            'icon' => 'chart',
                            'details' => ['Lead time optimization', 'Safety stock calculation', 'Automatic threshold updates'],
                            'link' => '/features/reorder-points'
                        ],
                        [
                            'id' => 3,
                            'title' => 'Supplier Integration',
                            'description' => 'Seamless PO generation and supplier communication.',
                            'icon' => 'database',
                            'details' => ['Auto PO creation', 'Supplier portal access', 'Order confirmation tracking'],
                            'link' => '/features/supplier-integration'
                        ],
                        [
                            'id' => 4,
                            'title' => 'Multi-Location Sync',
                            'description' => 'Coordinate inventory across all your warehouses.',
                            'icon' => 'refresh',
                            'details' => ['Inter-warehouse transfers', 'Centralized inventory view', 'Real-time sync'],
                            'link' => '/features/multi-location'
                        ],
                        [
                            'id' => 5,
                            'title' => 'Automated Alerts',
                            'description' => 'Get notified about low stock and order status.',
                            'icon' => 'bell',
                            'details' => ['Custom alert rules', 'Email & SMS notifications', 'Dashboard warnings'],
                            'link' => '/features/alerts'
                        ],
                        [
                            'id' => 6,
                            'title' => 'Sales Channel Sync',
                            'description' => 'Sync inventory across all your sales channels.',
                            'icon' => 'cart',
                            'details' => ['Real-time inventory updates', 'Channel-specific rules', 'Prevent overselling'],
                            'link' => '/features/sales-sync'
                        ]
                    ],
                    'showWorkflow' => true,
                    'workflowTitle' => 'How Automated Reordering Works',
                    'workflowDescription' => 'A seamless process that eliminates stockouts and overstock situations',
                    'workflowSteps' => [
                        ['title' => 'Monitor', 'description' => 'Track inventory levels in real-time'],
                        ['title' => 'Predict', 'description' => 'AI forecasts future demand'],
                        ['title' => 'Trigger', 'description' => 'Auto-generate purchase orders'],
                        ['title' => 'Fulfill', 'description' => 'Supplier delivers and updates stock']
                    ],
                    'showCta' => true,
                    'ctaText' => 'Ready to automate your inventory management?',
                    'ctaLink' => '/demo',
                    'ctaButton' => [
                        'text' => 'Start Free Trial',
                        'backgroundColor' => 'bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600',
                        'textColor' => 'text-white'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 122,
                'section_key' => 'automatedReordering',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => [
                        'show' => true,
                        'showPulse' => true,
                        'text' => 'AUTOMATED REORDERING',
                        'backgroundColor' => 'bg-green-100 dark:bg-gray-800',
                        'borderColor' => 'border-green-200 dark:border-gray-700',
                        'textColor' => 'text-green-700 dark:text-gray-300'
                    ],
                    'title' => [
                        'prefix' => 'AI-Powered',
                        'highlightedText' => 'Inventory Automation',
                        'suffix' => '',
                        'highlightGradient' => 'from-green-600 to-emerald-600'
                    ],
                    'description' => 'Smart reordering system that predicts demand, optimizes stock levels, and automatically generates purchase orders.',
                    'features' => [
                        [
                            'id' => 'inventory',
                            'title' => 'Dynamic Reorder Points',
                            'description' => 'Smart thresholds that adapt to changing demand patterns.',
                            'icon' => 'refresh',
                            'details' => ['Lead time optimization', 'Safety stock calculation', 'Automatic threshold updates'],
                            'link' => '/features/reorder-points',
                            'simulationTitle' => 'Inventory Level Simulator',
                            'highlightText' => 'Dynamic reorder points prevent stockouts while reducing excess inventory by 25-40%.'
                        ],
                        [
                            'id' => 'forecast',
                            'title' => 'Demand Forecasting',
                            'description' => 'AI predictions for future inventory needs.',
                            'icon' => 'chart',
                            'details' => ['Seasonal trend analysis', 'Sales pattern recognition', 'Promotion impact prediction'],
                            'link' => '/features/forecasting',
                            'simulationTitle' => 'Demand Forecast',
                            'highlightText' => 'Machine learning models achieve 95%+ forecast accuracy for optimal inventory planning.'
                        ],
                        [
                            'id' => 'supplier',
                            'title' => 'Supplier Management',
                            'description' => 'Automated PO generation and supplier communication.',
                            'icon' => 'truck',
                            'details' => ['Auto PO creation', 'Supplier portal access', 'Order confirmation tracking'],
                            'link' => '/features/supplier',
                            'simulationTitle' => 'Supplier Performance',
                            'highlightText' => 'Supplier integration reduces order processing time by 75%.'
                        ]
                    ],
                    'showMetrics' => true,
                    'metrics' => [
                        ['value' => '99.9%', 'label' => 'Stock Availability', 'description' => 'Eliminate stockouts'],
                        ['value' => '30%', 'label' => 'Cost Reduction', 'description' => 'Lower carrying costs'],
                        ['value' => '95%', 'label' => 'Forecast Accuracy', 'description' => 'AI-powered predictions'],
                        ['value' => '75%', 'label' => 'Time Saved', 'description' => 'Manual order processing']
                    ],
                    'showCta' => true,
                    'ctaText' => 'Ready to automate your inventory management?',
                    'ctaLink' => '/demo',
                    'ctaButton' => [
                        'text' => 'Start Free Trial',
                        'backgroundColor' => 'bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600',
                        'textColor' => 'text-white'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 123,
                'section_key' => 'automatedReordering',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'show' => true,
                        'showPulse' => true,
                        'text' => 'AUTOMATED REORDERING',
                        'backgroundColor' => 'bg-green-100 dark:bg-gray-800',
                        'borderColor' => 'border-green-200 dark:border-gray-700',
                        'textColor' => 'text-green-700 dark:text-gray-300'
                    ],
                    'title' => [
                        'prefix' => 'Intelligent',
                        'highlightedText' => 'Inventory Automation',
                        'suffix' => '',
                        'highlightGradient' => 'from-green-600 to-emerald-600'
                    ],
                    'description' => 'AI-powered automated reordering system that eliminates stockouts and optimizes inventory levels.',
                    'stats' => [
                        ['value' => '99.9%', 'label' => 'Stock Availability'],
                        ['value' => '30%', 'label' => 'Cost Reduction'],
                        ['value' => '95%', 'label' => 'Forecast Accuracy'],
                        ['value' => '20+', 'label' => 'Hours Saved/Week']
                    ],
                    'features' => [
                        [
                            'id' => 1,
                            'title' => 'AI Demand Forecasting',
                            'description' => 'Predict future demand with machine learning algorithms.',
                            'icon' => 'chip',
                            'isNew' => false,
                            'isPopular' => true,
                            'details' => ['Seasonal trend analysis', 'Sales pattern recognition', 'Promotion impact prediction'],
                            'metrics' => [
                                ['value' => '95%', 'label' => 'Accuracy'],
                                ['value' => '12w', 'label' => 'Forecast Horizon']
                            ],
                            'link' => '/features/ai-forecasting'
                        ],
                        [
                            'id' => 2,
                            'title' => 'Smart Reorder Points',
                            'description' => 'Dynamic thresholds that adapt to changing demand.',
                            'icon' => 'trending',
                            'isNew' => true,
                            'isPopular' => false,
                            'details' => ['Lead time optimization', 'Safety stock calculation', 'Automatic updates'],
                            'metrics' => [
                                ['value' => '40%', 'label' => 'Less Stock'],
                                ['value' => '98%', 'label' => 'Fill Rate']
                            ],
                            'link' => '/features/smart-reorder'
                        ],
                        [
                            'id' => 3,
                            'title' => 'Supplier Integration',
                            'description' => 'Automated PO generation and tracking.',
                            'icon' => 'truck',
                            'isNew' => false,
                            'isPopular' => true,
                            'details' => ['Auto PO creation', 'Supplier portal', 'Order tracking'],
                            'metrics' => [
                                ['value' => '75%', 'label' => 'Faster'],
                                ['value' => '100%', 'label' => 'Accuracy']
                            ],
                            'link' => '/features/supplier-integration'
                        ]
                    ],
                    'showAIInsights' => true,
                    'aiInsightsTitle' => 'AI-Powered Business Insights',
                    'aiInsightsDescription' => 'Get actionable recommendations to optimize your inventory',
                    'aiInsights' => [
                        [
                            'title' => 'Stockout Prevention',
                            'description' => 'AI predicts potential stockouts 2 weeks in advance',
                            'impact' => 'Prevents 95% of stockouts',
                            'icon' => 'bell'
                        ],
                        [
                            'title' => 'Inventory Optimization',
                            'description' => 'Smart recommendations to reduce excess inventory',
                            'impact' => '30% reduction in carrying costs',
                            'icon' => 'chart'
                        ],
                        [
                            'title' => 'Supplier Performance',
                            'description' => 'Real-time supplier lead time analytics',
                            'impact' => '25% faster order processing',
                            'icon' => 'truck'
                        ]
                    ],
                    'showIntegrations' => true,
                    'integrationsTitle' => 'Seamless Platform Integration',
                    'integrationsDescription' => 'Connect with your existing business ecosystem',
                    'integrationCategories' => [
                        ['name' => 'E-commerce'],
                        ['name' => 'ERP'],
                        ['name' => 'Marketplaces']
                    ],
                    'integrations' => [
                        [
                            'items' => [
                                ['name' => 'Shopify', 'type' => 'e-commerce', 'icon' => 'shopping-bag'],
                                ['name' => 'WooCommerce', 'type' => 'e-commerce', 'icon' => 'shopping-cart'],
                                ['name' => 'Magento', 'type' => 'e-commerce', 'icon' => 'cube'],
                                ['name' => 'BigCommerce', 'type' => 'e-commerce', 'icon' => 'building']
                            ]
                        ],
                        [
                            'items' => [
                                ['name' => 'SAP', 'type' => 'ERP', 'icon' => 'building'],
                                ['name' => 'Oracle', 'type' => 'ERP', 'icon' => 'cloud'],
                                ['name' => 'Microsoft', 'type' => 'ERP', 'icon' => 'database'],
                                ['name' => 'NetSuite', 'type' => 'ERP', 'icon' => 'globe']
                            ]
                        ],
                        [
                            'items' => [
                                ['name' => 'Amazon', 'type' => 'marketplace', 'icon' => 'shopping-bag'],
                                ['name' => 'eBay', 'type' => 'marketplace', 'icon' => 'cash'],
                                ['name' => 'Walmart', 'type' => 'marketplace', 'icon' => 'building'],
                                ['name' => 'Etsy', 'type' => 'marketplace', 'icon' => 'shopping-cart']
                            ]
                        ]
                    ],
                    'showROICalculator' => true,
                    'roiTitle' => 'Calculate Your ROI',
                    'roiDescription' => 'See how much you can save with automated reordering',
                    'roiExample' => 'Up to 3x ROI',
                    'roiLink' => '/calculator',
                    'showCta' => true,
                    'ctaText' => 'Ready to transform your inventory management?',
                    'ctaPrimaryLink' => '/trial',
                    'ctaSecondaryLink' => '/demo',
                    'ctaButton' => [
                        'primaryText' => 'Start Free Trial',
                        'secondaryText' => 'Watch Demo'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 124,
                'section_key' => 'automatedReordering',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Multi-Warehouse Support Section
            [
                'id' => 125,
                'section_key' => 'multiWarehouseSupport',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => [
                        'show' => true,
                        'showPulse' => true,
                        'text' => 'MULTI-WAREHOUSE SUPPORT',
                        'backgroundColor' => 'bg-purple-100 dark:bg-gray-800',
                        'borderColor' => 'border-purple-200 dark:border-gray-700',
                        'textColor' => 'text-purple-700 dark:text-gray-300'
                    ],
                    'title' => [
                        'prefix' => 'Centralized',
                        'highlightedText' => 'Multi-Warehouse',
                        'suffix' => 'Management',
                        'highlightGradient' => 'from-purple-600 to-indigo-600'
                    ],
                    'description' => 'Manage inventory across multiple warehouses with real-time synchronization and intelligent allocation.',
                    'benefits' => [
                        [
                            'title' => 'Centralized Control',
                            'description' => 'Manage all warehouses from a single dashboard',
                            'icon' => 'globe'
                        ],
                        [
                            'title' => 'Real-time Sync',
                            'description' => 'Instant inventory updates across locations',
                            'icon' => 'sync'
                        ],
                        [
                            'title' => 'Smart Allocation',
                            'description' => 'AI-powered inventory distribution',
                            'icon' => 'chip'
                        ]
                    ],
                    'features' => [
                        [
                            'id' => 1,
                            'title' => 'Real-time Inventory Sync',
                            'description' => 'Instant updates across all warehouse locations.',
                            'icon' => 'sync',
                            'details' => ['Cross-warehouse visibility', 'Automatic stock updates', 'Centralized control'],
                            'link' => '/features/real-time-sync'
                        ],
                        [
                            'id' => 2,
                            'title' => 'Smart Inventory Allocation',
                            'description' => 'AI-powered distribution based on demand patterns.',
                            'icon' => 'chip',
                            'details' => ['Demand-based allocation', 'Optimized stock levels', 'Reduce transfer costs'],
                            'link' => '/features/smart-allocation'
                        ],
                        [
                            'id' => 3,
                            'title' => 'Performance Analytics',
                            'description' => 'Comprehensive metrics across all locations.',
                            'icon' => 'chart',
                            'details' => ['Warehouse KPIs', 'Efficiency tracking', 'Cost analysis'],
                            'link' => '/features/analytics'
                        ],
                        [
                            'id' => 4,
                            'title' => 'Automated Transfers',
                            'description' => 'Smart inter-warehouse stock transfers.',
                            'icon' => 'truck',
                            'details' => ['Auto-transfer rules', 'Cost optimization', 'Real-time tracking'],
                            'link' => '/features/auto-transfers'
                        ],
                        [
                            'id' => 5,
                            'title' => 'Global Visibility',
                            'description' => 'Unified view of all warehouse operations.',
                            'icon' => 'globe',
                            'details' => ['Global dashboard', 'Multi-language support', 'Currency conversion'],
                            'link' => '/features/global-visibility'
                        ],
                        [
                            'id' => 6,
                            'title' => 'Demand Forecasting',
                            'description' => 'Predictive analytics for each location.',
                            'icon' => 'chart',
                            'details' => ['Location-based forecasts', 'Seasonal adjustments', 'Stock recommendations'],
                            'link' => '/features/forecasting'
                        ]
                    ],
                    'showNetwork' => true,
                    'networkTitle' => 'Global Warehouse Network',
                    'networkDescription' => 'Centrally manage warehouses across multiple locations',
                    'warehouses' => [
                        [
                            'location' => 'New York, USA',
                            'code' => 'NY-001',
                            'capacity' => '50,000 sq ft',
                            'utilization' => '75%',
                            'utilizationPercent' => '75%',
                            'skus' => '5,200'
                        ],
                        [
                            'location' => 'London, UK',
                            'code' => 'LD-002',
                            'capacity' => '40,000 sq ft',
                            'utilization' => '82%',
                            'utilizationPercent' => '82%',
                            'skus' => '4,800'
                        ],
                        [
                            'location' => 'Singapore',
                            'code' => 'SG-003',
                            'capacity' => '60,000 sq ft',
                            'utilization' => '68%',
                            'utilizationPercent' => '68%',
                            'skus' => '6,500'
                        ],
                        [
                            'location' => 'Sydney, AU',
                            'code' => 'SY-004',
                            'capacity' => '35,000 sq ft',
                            'utilization' => '71%',
                            'utilizationPercent' => '71%',
                            'skus' => '3,900'
                        ]
                    ],
                    'showCta' => true,
                    'ctaText' => 'Ready to scale your warehouse operations?',
                    'ctaLink' => '/contact',
                    'ctaButton' => [
                        'text' => 'Get Started',
                        'backgroundColor' => 'bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600',
                        'textColor' => 'text-white'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 126,
                'section_key' => 'multiWarehouseSupport',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => [
                        'show' => true,
                        'showPulse' => true,
                        'text' => 'MULTI-WAREHOUSE SUPPORT',
                        'backgroundColor' => 'bg-purple-100 dark:bg-gray-800',
                        'borderColor' => 'border-purple-200 dark:border-gray-700',
                        'textColor' => 'text-purple-700 dark:text-gray-300'
                    ],
                    'title' => [
                        'prefix' => 'Intelligent',
                        'highlightedText' => 'Warehouse Network',
                        'suffix' => '',
                        'highlightGradient' => 'from-purple-600 to-indigo-600'
                    ],
                    'description' => 'Centrally manage multiple warehouses with real-time synchronization and smart inventory allocation.',
                    'features' => [
                        [
                            'id' => 'inventory',
                            'title' => 'Centralized Inventory',
                            'description' => 'Unified view of stock across all locations.',
                            'icon' => 'inventory',
                            'details' => ['Real-time stock levels', 'Cross-warehouse visibility', 'Automated reconciliation'],
                            'link' => '/features/centralized-inventory'
                        ],
                        [
                            'id' => 'routing',
                            'title' => 'Smart Order Routing',
                            'description' => 'AI-powered warehouse selection for optimal fulfillment.',
                            'icon' => 'truck',
                            'details' => ['Lowest cost routing', 'Fastest delivery selection', 'Inventory availability check'],
                            'link' => '/features/smart-routing'
                        ],
                        [
                            'id' => 'transfers',
                            'title' => 'Auto Transfers',
                            'description' => 'Automated inter-warehouse stock transfers.',
                            'icon' => 'sync',
                            'details' => ['Demand-based transfers', 'Cost optimization', 'Real-time tracking'],
                            'link' => '/features/auto-transfers'
                        ]
                    ],
                    'warehouses' => [
                        [
                            'name' => 'North America Hub',
                            'location' => 'Chicago, IL',
                            'region' => 'North America',
                            'inventory' => '15,234',
                            'orders' => '2,450',
                            'utilization' => '78%',
                            'utilizationPercent' => '78%',
                            'fillRate' => '98.5%',
                            'shippingTime' => '2.3 days',
                            'accuracy' => '99.9%',
                            'deliveryTime' => '2-3 days'
                        ],
                        [
                            'name' => 'Europe Hub',
                            'location' => 'Amsterdam, NL',
                            'region' => 'Europe',
                            'inventory' => '12,567',
                            'orders' => '1,890',
                            'utilization' => '72%',
                            'utilizationPercent' => '72%',
                            'fillRate' => '97.8%',
                            'shippingTime' => '1.8 days',
                            'accuracy' => '99.7%',
                            'deliveryTime' => '1-2 days'
                        ],
                        [
                            'name' => 'Asia Pacific Hub',
                            'location' => 'Singapore',
                            'region' => 'Asia Pacific',
                            'inventory' => '18,923',
                            'orders' => '3,120',
                            'utilization' => '85%',
                            'utilizationPercent' => '85%',
                            'fillRate' => '99.1%',
                            'shippingTime' => '2.1 days',
                            'accuracy' => '99.8%',
                            'deliveryTime' => '2-4 days'
                        ]
                    ],
                    'showMetrics' => true,
                    'metrics' => [
                        ['value' => '99.9%', 'label' => 'Uptime', 'description' => 'System reliability'],
                        ['value' => '30%', 'label' => 'Cost Savings', 'description' => 'Optimized routing'],
                        ['value' => '50+', 'label' => 'Warehouses', 'description' => 'Supported locations'],
                        ['value' => '24/7', 'label' => 'Monitoring', 'description' => 'Real-time sync']
                    ],
                    'showDistribution' => true,
                    'distributionTitle' => 'Global Inventory Distribution',
                    'distributionDescription' => 'Real-time visibility of stock across all locations',
                    'inventoryDistribution' => [
                        ['location' => 'North America', 'stock' => '15,234', 'x' => '25%', 'y' => '35%'],
                        ['location' => 'Europe', 'stock' => '12,567', 'x' => '55%', 'y' => '30%'],
                        ['location' => 'Asia Pacific', 'stock' => '18,923', 'x' => '80%', 'y' => '55%']
                    ],
                    'showCta' => true,
                    'ctaText' => 'Ready to optimize your warehouse network?',
                    'ctaLink' => '/demo',
                    'ctaButton' => [
                        'text' => 'Start Free Trial',
                        'backgroundColor' => 'bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600',
                        'textColor' => 'text-white'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 127,
                'section_key' => 'multiWarehouseSupport',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'show' => true,
                        'showPulse' => true,
                        'text' => 'MULTI-WAREHOUSE SUPPORT',
                        'backgroundColor' => 'bg-purple-100 dark:bg-gray-800',
                        'borderColor' => 'border-purple-200 dark:border-gray-700',
                        'textColor' => 'text-purple-700 dark:text-gray-300'
                    ],
                    'title' => [
                        'prefix' => 'Enterprise',
                        'highlightedText' => 'Warehouse Network',
                        'suffix' => '',
                        'highlightGradient' => 'from-purple-600 to-indigo-600'
                    ],
                    'description' => 'Centrally manage and optimize your global warehouse network with AI-powered intelligence.',
                    'stats' => [
                        ['value' => '99.99%', 'label' => 'Uptime'],
                        ['value' => '50+', 'label' => 'Warehouses'],
                        ['value' => '100M+', 'label' => 'SKUs Managed'],
                        ['value' => '24/7', 'label' => 'Monitoring']
                    ],
                    'features' => [
                        [
                            'id' => 1,
                            'title' => 'Global Inventory Sync',
                            'description' => 'Real-time inventory visibility across all warehouse locations.',
                            'icon' => 'globe',
                            'isNew' => false,
                            'isPopular' => true,
                            'details' => ['Real-time updates', 'Cross-location visibility', 'Automatic reconciliation'],
                            'metrics' => [
                                ['value' => '<1s', 'label' => 'Sync Speed'],
                                ['value' => '100%', 'label' => 'Accuracy']
                            ],
                            'link' => '/features/global-sync'
                        ],
                        [
                            'id' => 2,
                            'title' => 'Smart Order Routing',
                            'description' => 'AI-powered warehouse selection for optimal fulfillment.',
                            'icon' => 'chip',
                            'isNew' => true,
                            'isPopular' => false,
                            'details' => ['Cost optimization', 'Fastest delivery', 'Inventory availability'],
                            'metrics' => [
                                ['value' => '30%', 'label' => 'Cost Savings'],
                                ['value' => '40%', 'label' => 'Faster']
                            ],
                            'link' => '/features/smart-routing'
                        ],
                        [
                            'id' => 3,
                            'title' => 'Auto Replenishment',
                            'description' => 'Automated inter-warehouse stock transfers.',
                            'icon' => 'sync',
                            'isNew' => false,
                            'isPopular' => true,
                            'details' => ['Demand-based transfers', 'Cost optimization', 'Real-time tracking'],
                            'metrics' => [
                                ['value' => '95%', 'label' => 'Fill Rate'],
                                ['value' => '75%', 'label' => 'Less Transfers']
                            ],
                            'link' => '/features/auto-replenishment'
                        ]
                    ],
                    'showNetwork' => true,
                    'networkTitle' => 'Global Warehouse Network',
                    'networkDescription' => 'Centrally manage warehouses across multiple regions',
                    'regions' => [
                        ['id' => 'na', 'name' => 'North America'],
                        ['id' => 'eu', 'name' => 'Europe'],
                        ['id' => 'apac', 'name' => 'Asia Pacific']
                    ],
                    'warehouses' => [
                        [
                            'name' => 'North America Hub',
                            'location' => 'Chicago, IL',
                            'region' => 'na',
                            'capacity' => '150,000 sq ft',
                            'utilization' => '78%',
                            'utilizationPercent' => '78%',
                            'skus' => '15,234',
                            'orders' => '2,450',
                            'fillRate' => '98.5%',
                            'shippingTime' => '2.3 days'
                        ],
                        [
                            'name' => 'West Coast Hub',
                            'location' => 'Los Angeles, CA',
                            'region' => 'na',
                            'capacity' => '120,000 sq ft',
                            'utilization' => '82%',
                            'utilizationPercent' => '82%',
                            'skus' => '12,890',
                            'orders' => '1,980',
                            'fillRate' => '98.9%',
                            'shippingTime' => '1.8 days'
                        ],
                        [
                            'name' => 'Europe Hub',
                            'location' => 'Amsterdam, NL',
                            'region' => 'eu',
                            'capacity' => '100,000 sq ft',
                            'utilization' => '72%',
                            'utilizationPercent' => '72%',
                            'skus' => '12,567',
                            'orders' => '1,890',
                            'fillRate' => '97.8%',
                            'shippingTime' => '1.8 days'
                        ],
                        [
                            'name' => 'Asia Pacific Hub',
                            'location' => 'Singapore',
                            'region' => 'apac',
                            'capacity' => '200,000 sq ft',
                            'utilization' => '85%',
                            'utilizationPercent' => '85%',
                            'skus' => '18,923',
                            'orders' => '3,120',
                            'fillRate' => '99.1%',
                            'shippingTime' => '2.1 days'
                        ]
                    ],
                    'showAIInsights' => true,
                    'aiInsightsTitle' => 'AI-Powered Warehouse Intelligence',
                    'aiInsightsDescription' => 'Smart recommendations to optimize your warehouse operations',
                    'aiInsights' => [
                        [
                            'title' => 'Stockout Prediction',
                            'description' => 'AI predicts potential stockouts 7 days in advance',
                            'impact' => '95% prevention rate',
                            'icon' => 'bell'
                        ],
                        [
                            'title' => 'Routing Optimization',
                            'description' => 'Smart warehouse selection for each order',
                            'impact' => '30% cost reduction',
                            'icon' => 'truck'
                        ],
                        [
                            'title' => 'Capacity Planning',
                            'description' => 'Predictive analytics for warehouse space',
                            'impact' => '25% better utilization',
                            'icon' => 'chart'
                        ]
                    ],
                    'showIntegrations' => true,
                    'integrationsTitle' => 'Seamless Platform Integration',
                    'integrationsDescription' => 'Connect your warehouse management system with your entire tech stack',
                    'integrationCategories' => [
                        ['name' => 'WMS'],
                        ['name' => 'ERP'],
                        ['name' => 'Carriers']
                    ],
                    'integrations' => [
                        [
                            'items' => [
                                ['name' => 'Manhattan', 'type' => 'WMS', 'icon' => 'building'],
                                ['name' => 'HighJump', 'type' => 'WMS', 'icon' => 'cube'],
                                ['name' => 'Blue Yonder', 'type' => 'WMS', 'icon' => 'cloud'],
                                ['name' => 'Oracle WMS', 'type' => 'WMS', 'icon' => 'database']
                            ]
                        ],
                        [
                            'items' => [
                                ['name' => 'SAP', 'type' => 'ERP', 'icon' => 'building'],
                                ['name' => 'Oracle', 'type' => 'ERP', 'icon' => 'cloud'],
                                ['name' => 'NetSuite', 'type' => 'ERP', 'icon' => 'database'],
                                ['name' => 'Microsoft', 'type' => 'ERP', 'icon' => 'cube']
                            ]
                        ],
                        [
                            'items' => [
                                ['name' => 'FedEx', 'type' => 'Carrier', 'icon' => 'truck'],
                                ['name' => 'UPS', 'type' => 'Carrier', 'icon' => 'truck'],
                                ['name' => 'DHL', 'type' => 'Carrier', 'icon' => 'globe'],
                                ['name' => 'USPS', 'type' => 'Carrier', 'icon' => 'mail']
                            ]
                        ]
                    ],
                    'showROICalculator' => true,
                    'roiTitle' => 'Calculate Your Multi-Warehouse ROI',
                    'roiDescription' => 'See how much you can save with centralized warehouse management',
                    'roiExample' => 'Up to 4x ROI',
                    'roiLink' => '/calculator',
                    'showCta' => true,
                    'ctaText' => 'Ready to scale your warehouse operations?',
                    'ctaPrimaryLink' => '/trial',
                    'ctaSecondaryLink' => '/demo',
                    'ctaButton' => [
                        'primaryText' => 'Start Free Trial',
                        'secondaryText' => 'Watch Demo'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 128,
                'section_key' => 'multiWarehouseSupport',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Barcode Scanning Section
            [
                'id' => 129,
                'section_key' => 'barcodeScanning',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => [
                        'show' => true,
                        'showPulse' => true,
                        'text' => 'BARCODE SCANNING',
                        'backgroundColor' => 'bg-cyan-100 dark:bg-gray-800',
                        'borderColor' => 'border-cyan-200 dark:border-gray-700',
                        'textColor' => 'text-cyan-700 dark:text-gray-300'
                    ],
                    'title' => [
                        'prefix' => 'Fast & Accurate',
                        'highlightedText' => 'Barcode Scanning',
                        'suffix' => '',
                        'highlightGradient' => 'from-cyan-600 to-blue-600'
                    ],
                    'description' => 'Instantly scan, track, and update inventory with our advanced barcode scanning technology.',
                    'benefits' => [
                        [
                            'title' => '99.9% Accuracy',
                            'description' => 'Eliminate manual data entry errors',
                            'icon' => 'barcode'
                        ],
                        [
                            'title' => 'Real-time Updates',
                            'description' => 'Instant inventory synchronization',
                            'icon' => 'sync'
                        ],
                        [
                            'title' => 'Multi-Format Support',
                            'description' => 'Compatible with all major barcode types',
                            'icon' => 'scanner'
                        ]
                    ],
                    'features' => [
                        [
                            'id' => 1,
                            'title' => 'Multi-Format Scanning',
                            'description' => 'Support for all major barcode formats including QR, UPC, EAN, and Code128.',
                            'icon' => 'barcode',
                            'details' => ['QR Code support', 'UPC/EAN compatibility', 'Code128/Code39 support', 'Custom format support'],
                            'link' => '/features/multi-format'
                        ],
                        [
                            'id' => 2,
                            'title' => 'Camera Integration',
                            'description' => 'Use your device camera for fast and accurate barcode scanning.',
                            'icon' => 'camera',
                            'details' => ['Auto-focus detection', 'Low-light optimization', 'Batch scanning mode', 'Image processing'],
                            'link' => '/features/camera-scanning'
                        ],
                        [
                            'id' => 3,
                            'title' => 'Real-time Sync',
                            'description' => 'Inventory updates instantly across all connected systems.',
                            'icon' => 'sync',
                            'details' => ['Cloud synchronization', 'Offline mode support', 'Conflict resolution', 'Audit trail'],
                            'link' => '/features/real-time-sync'
                        ],
                        [
                            'id' => 4,
                            'title' => 'Mobile App',
                            'description' => 'Scan and manage inventory from anywhere with our mobile app.',
                            'icon' => 'mobile',
                            'details' => ['iOS & Android support', 'Offline scanning', 'Bulk scanning mode', 'Export capabilities'],
                            'link' => '/features/mobile-app'
                        ],
                        [
                            'id' => 5,
                            'title' => 'Analytics Dashboard',
                            'description' => 'Track scanning metrics and inventory movement.',
                            'icon' => 'chart',
                            'details' => ['Scan history', 'Inventory velocity', 'User activity tracking', 'Custom reports'],
                            'link' => '/features/analytics'
                        ],
                        [
                            'id' => 6,
                            'title' => 'Hardware Integration',
                            'description' => 'Compatible with professional barcode scanners and hardware.',
                            'icon' => 'scanner',
                            'details' => ['USB scanner support', 'Bluetooth connectivity', 'Warehouse hardware', 'API integration'],
                            'link' => '/features/hardware'
                        ]
                    ],
                    'showBarcodeTypes' => true,
                    'barcodeTypesTitle' => 'Supported Barcode Formats',
                    'barcodeTypesDescription' => 'Compatible with all major barcode standards',
                    'barcodeTypes' => [
                        ['name' => 'QR Code', 'format' => '2D Barcode', 'icon' => 'barcode'],
                        ['name' => 'UPC-A', 'format' => '12 digits', 'icon' => 'barcode'],
                        ['name' => 'EAN-13', 'format' => '13 digits', 'icon' => 'barcode'],
                        ['name' => 'Code128', 'format' => 'Alphanumeric', 'icon' => 'barcode'],
                        ['name' => 'Code39', 'format' => 'Alphanumeric', 'icon' => 'barcode'],
                        ['name' => 'PDF417', 'format' => '2D Stacked', 'icon' => 'barcode']
                    ],
                    'showCta' => true,
                    'ctaText' => 'Ready to streamline your inventory operations?',
                    'ctaLink' => '/demo',
                    'ctaButton' => [
                        'text' => 'Start Free Trial',
                        'backgroundColor' => 'bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-cyan-600',
                        'textColor' => 'text-white'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 130,
                'section_key' => 'barcodeScanning',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => [
                        'show' => true,
                        'showPulse' => true,
                        'text' => 'BARCODE SCANNING',
                        'backgroundColor' => 'bg-cyan-100 dark:bg-gray-800',
                        'borderColor' => 'border-cyan-200 dark:border-gray-700',
                        'textColor' => 'text-cyan-700 dark:text-gray-300'
                    ],
                    'title' => [
                        'prefix' => 'Instant',
                        'highlightedText' => 'Barcode Recognition',
                        'suffix' => '',
                        'highlightGradient' => 'from-cyan-600 to-blue-600'
                    ],
                    'description' => 'Scan, identify, and update inventory instantly with our advanced barcode recognition technology.',
                    'sampleProducts' => [
                        '8901234567890' => ['name' => 'Wireless Headphones', 'price' => '$89.99', 'stock' => 245, 'location' => 'Aisle 3, Bin B12'],
                        '5901234123457' => ['name' => 'Smart Watch', 'price' => '$199.99', 'stock' => 128, 'location' => 'Aisle 2, Bin A05'],
                        '4006381333931' => ['name' => 'Bluetooth Speaker', 'price' => '$59.99', 'stock' => 312, 'location' => 'Aisle 4, Bin C08'],
                        '7891234567890' => ['name' => 'USB-C Cable', 'price' => '$12.99', 'stock' => 856, 'location' => 'Aisle 1, Bin D03'],
                        '1234567890123' => ['name' => 'Phone Case', 'price' => '$24.99', 'stock' => 423, 'location' => 'Aisle 1, Bin E02']
                    ],
                    'features' => [
                        [
                            'id' => 'camera',
                            'title' => 'Camera Integration',
                            'description' => 'Use your device camera for fast and accurate barcode scanning.',
                            'icon' => 'camera',
                            'details' => ['Auto-focus detection', 'Low-light optimization', 'Batch scanning mode', 'Image processing'],
                            'link' => '/features/camera-scanning'
                        ],
                        [
                            'id' => 'formats',
                            'title' => 'Multi-Format Support',
                            'description' => 'Compatible with all major barcode formats.',
                            'icon' => 'barcode',
                            'details' => ['QR Code support', 'UPC/EAN compatibility', 'Code128/Code39 support', 'Custom format support'],
                            'link' => '/features/multi-format'
                        ],
                        [
                            'id' => 'sync',
                            'title' => 'Real-time Sync',
                            'description' => 'Inventory updates instantly across all connected systems.',
                            'icon' => 'sync',
                            'details' => ['Cloud synchronization', 'Offline mode support', 'Conflict resolution', 'Audit trail'],
                            'link' => '/features/real-time-sync'
                        ]
                    ],
                    'showMetrics' => true,
                    'metrics' => [
                        ['value' => '0.2s', 'label' => 'Avg Scan Time', 'description' => 'Lightning fast'],
                        ['value' => '99.9%', 'label' => 'Accuracy', 'description' => 'Industry leading'],
                        ['value' => '50+', 'label' => 'Formats', 'description' => 'Universal support'],
                        ['value' => '24/7', 'label' => 'Availability', 'description' => 'Always ready']
                    ],
                    'showBarcodeTypes' => true,
                    'barcodeTypesTitle' => 'Supported Barcode Formats',
                    'barcodeTypesDescription' => 'Compatible with all major barcode standards',
                    'barcodeTypes' => [
                        ['name' => 'QR Code', 'format' => '2D Barcode', 'icon' => 'barcode'],
                        ['name' => 'UPC-A', 'format' => '12 digits', 'icon' => 'barcode'],
                        ['name' => 'EAN-13', 'format' => '13 digits', 'icon' => 'barcode'],
                        ['name' => 'Code128', 'format' => 'Alphanumeric', 'icon' => 'barcode'],
                        ['name' => 'Code39', 'format' => 'Alphanumeric', 'icon' => 'barcode'],
                        ['name' => 'PDF417', 'format' => '2D Stacked', 'icon' => 'barcode']
                    ],
                    'showCta' => true,
                    'ctaText' => 'Ready to streamline your inventory operations?',
                    'ctaLink' => '/demo',
                    'ctaButton' => [
                        'text' => 'Start Free Trial',
                        'backgroundColor' => 'bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-cyan-600',
                        'textColor' => 'text-white'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 131,
                'section_key' => 'barcodeScanning',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Scanning Intelligence',
                        'backgroundColor' => 'bg-cyan-50 dark:bg-cyan-900/30',
                        'borderColor' => 'border-cyan-200 dark:border-cyan-800',
                        'textColor' => 'text-cyan-700 dark:text-cyan-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Next-Gen',
                        'highlightedText' => 'Barcode Scanning',
                        'suffix' => 'Solution',
                        'highlightGradient' => 'from-cyan-500 to-blue-500'
                    ],
                    'description' => 'Enterprise-grade scanning technology that transforms inventory management with AI-powered precision and real-time insights.',
                    'stats' => [
                        ['value' => '99.9%', 'label' => 'Accuracy Rate'],
                        ['value' => '5x', 'label' => 'Faster Processing'],
                        ['value' => '50+', 'label' => 'Format Support'],
                        ['value' => '24/7', 'label' => 'Real-time Sync']
                    ],
                    'features' => [
                        [
                            'id' => 1,
                            'icon' => 'scanner',
                            'title' => 'Multi-Format Scanning',
                            'description' => 'Instantly recognize and process any barcode type with unmatched speed and accuracy.',
                            'details' => [
                                '1D, 2D, QR, PDF417 support',
                                'Batch scanning mode',
                                'Auto-format detection'
                            ],
                            'metrics' => [
                                ['value' => '0.1s', 'label' => 'Scan Time'],
                                ['value' => '98%', 'label' => '1st Read Rate']
                            ],
                            'link' => '/features/multi-format',
                            'isNew' => true
                        ],
                        [
                            'id' => 2,
                            'icon' => 'cloud',
                            'title' => 'Cloud Sync',
                            'description' => 'Real-time synchronization across all devices and locations with enterprise-grade security.',
                            'details' => [
                                'Offline mode support',
                                'Automatic backups',
                                'Multi-location sync'
                            ],
                            'metrics' => [
                                ['value' => '100%', 'label' => 'Uptime SLA'],
                                ['value' => '5GB', 'label' => 'Free Storage']
                            ],
                            'link' => '/features/cloud-sync',
                            'isPopular' => true
                        ],
                        [
                            'id' => 3,
                            'icon' => 'chip',
                            'title' => 'AI Analytics',
                            'description' => 'Leverage machine learning for predictive insights and anomaly detection in your inventory.',
                            'details' => [
                                'Demand forecasting',
                                'Stock optimization',
                                'Anomaly alerts'
                            ],
                            'metrics' => [
                                ['value' => '94%', 'label' => 'Forecast Acc.'],
                                ['value' => '30%', 'label' => 'Less Waste']
                            ],
                            'link' => '/features/ai-analytics'
                        ]
                    ],
                    'showAIInsights' => true,
                    'aiInsightsTitle' => 'AI-Powered Scanning Intelligence',
                    'aiInsightsDescription' => 'Smart insights to optimize your scanning operations',
                    'aiInsights' => [
                        [
                            'icon' => 'bulb',
                            'title' => 'Smart Recognition',
                            'description' => 'Auto-detects damaged or poorly printed barcodes with 94% accuracy.',
                            'impact' => 'Reduces manual entry by 87%'
                        ],
                        [
                            'icon' => 'chart',
                            'title' => 'Predictive Analytics',
                            'description' => 'Forecast inventory needs based on scanning patterns and trends.',
                            'impact' => 'Cut stockouts by 45%'
                        ],
                        [
                            'icon' => 'shield',
                            'title' => 'Fraud Detection',
                            'description' => 'Identifies duplicate or suspicious barcode scans in real-time.',
                            'impact' => 'Prevents $50k+ annual loss'
                        ]
                    ],
                    'showHardware' => true,
                    'hardwareTitle' => 'Hardware Compatibility',
                    'hardwareDescription' => 'Works with a wide range of scanning devices',
                    'hardwareDevices' => [
                        ['icon' => 'mobile', 'name' => 'Mobile Camera', 'type' => 'iOS/Android', 'compatibility' => 'All models'],
                        ['icon' => 'scanner', 'name' => 'USB Scanners', 'type' => 'Honeywell/Zebra', 'compatibility' => 'Plug & play'],
                        ['icon' => 'bluetooth', 'name' => 'Bluetooth', 'type' => 'Wireless', 'compatibility' => '100ft range'],
                        ['icon' => 'webcam', 'name' => 'Desktop', 'type' => 'Webcam', 'compatibility' => 'HD required']
                    ],
                    'showIntegrations' => true,
                    'integrationsTitle' => 'Seamless Platform Integration',
                    'integrationsDescription' => 'Connect your scanning system with your entire tech stack',
                    'integrationCategories' => [
                        ['name' => 'ERP Systems'],
                        ['name' => 'E-commerce'],
                        ['name' => 'Warehouse']
                    ],
                    'integrations' => [
                        [
                            'items' => [
                                ['icon' => 'server', 'name' => 'SAP', 'type' => 'ERP'],
                                ['icon' => 'cloud', 'name' => 'Oracle NetSuite', 'type' => 'ERP'],
                                ['icon' => 'office', 'name' => 'Microsoft Dynamics', 'type' => 'ERP'],
                                ['icon' => 'cube', 'name' => 'Odoo', 'type' => 'ERP']
                            ]
                        ],
                        [
                            'items' => [
                                ['icon' => 'shopping-cart', 'name' => 'Shopify', 'type' => 'E-commerce'],
                                ['icon' => 'globe', 'name' => 'WooCommerce', 'type' => 'E-commerce'],
                                ['icon' => 'shopping-cart', 'name' => 'Magento', 'type' => 'E-commerce'],
                                ['icon' => 'globe', 'name' => 'BigCommerce', 'type' => 'E-commerce']
                            ]
                        ],
                        [
                            'items' => [
                                ['icon' => 'inventory', 'name' => 'Fishbowl', 'type' => 'WMS'],
                                ['icon' => 'shipping', 'name' => 'ShipStation', 'type' => 'Shipping'],
                                ['icon' => 'document', 'name' => 'Zoho Inventory', 'type' => 'WMS']
                            ]
                        ]
                    ],
                    'showROICalculator' => true,
                    'roiTitle' => 'Calculate Your Barcode Scanning ROI',
                    'roiDescription' => 'See how much you can save with automated barcode scanning',
                    'roiExample' => 'Up to 5x ROI',
                    'roiLink' => '/calculator',
                    'showBarcodeTypes' => true,
                    'barcodeTypesTitle' => 'Supported Barcode Formats',
                    'barcodeTypesDescription' => 'Compatible with all major barcode standards',
                    'barcodeTypes' => [
                        ['icon' => 'barcode', 'name' => 'UPC-A', 'format' => '12-digit', 'usage' => 'Retail'],
                        ['icon' => 'barcode', 'name' => 'Code 128', 'format' => 'Alphanumeric', 'usage' => 'Shipping'],
                        ['icon' => 'scanner', 'name' => 'QR Code', 'format' => '2D Matrix', 'usage' => 'Marketing'],
                        ['icon' => 'document', 'name' => 'PDF417', 'format' => 'Stacked', 'usage' => 'IDs'],
                        ['icon' => 'barcode', 'name' => 'EAN-13', 'format' => '13-digit', 'usage' => 'Global Retail'],
                        ['icon' => 'barcode', 'name' => 'Code 39', 'format' => 'Variable', 'usage' => 'Military']
                    ],
                    'showCta' => true,
                    'ctaText' => 'Ready to transform your inventory operations?',
                    'ctaPrimaryLink' => '/trial',
                    'ctaSecondaryLink' => '/demo',
                    'ctaButton' => [
                        'primaryText' => 'Start Free Trial',
                        'primaryBackground' => 'bg-linear-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700',
                        'secondaryText' => 'Watch Demo'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 132,
                'section_key' => 'barcodeScanning',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Reporting & Analytics Section
            [
                'id' => 133,
                'section_key' => 'reportingAnalytics',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Data Intelligence',
                        'backgroundColor' => 'bg-purple-50 dark:bg-purple-900/30',
                        'borderColor' => 'border-purple-200 dark:border-purple-800',
                        'textColor' => 'text-purple-700 dark:text-purple-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Real-Time',
                        'highlightedText' => 'Reporting & Analytics',
                        'suffix' => 'Suite',
                        'highlightGradient' => 'from-purple-500 to-indigo-500'
                    ],
                    'description' => 'Transform your data into actionable insights with AI-powered analytics, customizable dashboards, and real-time reporting capabilities.',
                    'benefits' => [
                        [
                            'icon' => 'trending',
                            'title' => '30% Faster Decisions',
                            'description' => 'Real-time data processing reduces decision-making time by up to 30%'
                        ],
                        [
                            'icon' => 'database',
                            'title' => 'Unified Data Hub',
                            'description' => 'Centralize all your business metrics in one intelligent platform'
                        ],
                        [
                            'icon' => 'chart-pie',
                            'title' => 'Predictive Insights',
                            'description' => 'AI-powered forecasts with 94% accuracy to anticipate trends'
                        ]
                    ],
                    'features' => [
                        [
                            'id' => 1,
                            'icon' => 'chart-bar',
                            'title' => 'Custom Dashboards',
                            'description' => 'Build personalized dashboards with drag-and-drop widgets and real-time data visualization.',
                            'details' => [
                                'Drag-and-drop interface',
                                '50+ chart types',
                                'Real-time data updates',
                                'Save custom templates'
                            ],
                            'link' => '/features/custom-dashboards'
                        ],
                        [
                            'id' => 2,
                            'icon' => 'analytics',
                            'title' => 'Predictive Analytics',
                            'description' => 'Leverage machine learning to forecast trends, identify patterns, and predict outcomes.',
                            'details' => [
                                'Demand forecasting',
                                'Anomaly detection',
                                'Trend prediction',
                                'What-if analysis'
                            ],
                            'link' => '/features/predictive-analytics',
                            'isPopular' => true
                        ],
                        [
                            'id' => 3,
                            'icon' => 'report',
                            'title' => 'Automated Reports',
                            'description' => 'Schedule and automate report generation with custom delivery to stakeholders.',
                            'details' => [
                                'Automated scheduling',
                                'Email delivery',
                                'PDF/Excel exports',
                                'White-label branding'
                            ],
                            'link' => '/features/automated-reports'
                        ]
                    ],
                    'showMetricsPreview' => true,
                    'metricsTitle' => 'Key Performance Indicators',
                    'metricsDescription' => 'Track the metrics that matter most to your business',
                    'keyMetrics' => [
                        [
                            'icon' => 'users',
                            'value' => '12.5K',
                            'label' => 'Active Users',
                            'change' => '+18%',
                            'trend' => 'up',
                            'description' => 'Monthly active users'
                        ],
                        [
                            'icon' => 'cart',
                            'value' => '$2.4M',
                            'label' => 'Revenue Tracked',
                            'change' => '+32%',
                            'trend' => 'up',
                            'description' => 'Total revenue analyzed'
                        ],
                        [
                            'icon' => 'clock',
                            'value' => '2.3s',
                            'label' => 'Query Response',
                            'change' => '-41%',
                            'trend' => 'down',
                            'description' => 'Average query time'
                        ],
                        [
                            'icon' => 'star',
                            'value' => '98%',
                            'label' => 'Accuracy Rate',
                            'change' => '+5%',
                            'trend' => 'up',
                            'description' => 'Prediction accuracy'
                        ]
                    ],
                    'showReportTypes' => true,
                    'reportTypesTitle' => 'Pre-Built Reports',
                    'reportTypesDescription' => 'Ready-to-use reports for common business needs',
                    'reportTypes' => [
                        ['icon' => 'presentation', 'name' => 'Sales Performance', 'description' => 'Track revenue, conversions, and sales team performance metrics.', 'frequency' => 'Daily/Weekly'],
                        ['icon' => 'users', 'name' => 'Customer Analytics', 'description' => 'Understand customer behavior, retention, and lifetime value.', 'frequency' => 'Weekly/Monthly'],
                        ['icon' => 'inventory', 'name' => 'Inventory Report', 'description' => 'Monitor stock levels, turnover rates, and reorder points.', 'frequency' => 'Real-time'],
                        ['icon' => 'truck', 'name' => 'Supply Chain', 'description' => 'Track logistics, delivery times, and supplier performance.', 'frequency' => 'Daily'],
                        ['icon' => 'dollar', 'name' => 'Financial Summary', 'description' => 'View P&L, cash flow, and expense breakdowns.', 'frequency' => 'Monthly'],
                        ['icon' => 'chart-bar', 'name' => 'Marketing ROI', 'description' => 'Measure campaign effectiveness and channel performance.', 'frequency' => 'Weekly']
                    ],
                    'showExportOptions' => true,
                    'exportTitle' => 'Multiple Export Formats',
                    'exportDescription' => 'Export your data in any format you need',
                    'exportFormats' => ['PDF', 'Excel', 'CSV', 'JSON', 'HTML'],
                    'showCta' => true,
                    'ctaText' => 'Ready to unlock actionable insights?',
                    'ctaPrimaryLink' => '/contact',
                    'ctaSecondaryLink' => '/demo',
                    'ctaButton' => [
                        'primaryText' => 'Get Started',
                        'primaryBackground' => 'bg-linear-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700',
                        'secondaryText' => 'Watch Demo'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 134,
                'section_key' => 'reportingAnalytics',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Live Analytics',
                        'backgroundColor' => 'bg-purple-50 dark:bg-purple-900/30',
                        'borderColor' => 'border-purple-200 dark:border-purple-800',
                        'textColor' => 'text-purple-700 dark:text-purple-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Interactive',
                        'highlightedText' => 'Analytics Dashboard',
                        'suffix' => '',
                        'highlightGradient' => 'from-purple-500 to-indigo-500'
                    ],
                    'description' => 'Explore your data with our interactive dashboard simulator. Click on any metric to see real-time visualizations and insights.',
                    'initialMetric' => 'inventory',
                    'initialTimeRange' => 'weekly',
                    'initialChart' => 'trend',
                    'features' => [
                        [
                            'id' => 'inventory',
                            'icon' => 'inventory',
                            'title' => 'Inventory Analytics',
                            'description' => 'Track stock levels, turnover rates, and optimize inventory management.',
                            'details' => [
                                'Real-time stock monitoring',
                                'Automated reorder alerts',
                                'Dead stock identification',
                                'Inventory valuation reports'
                            ],
                            'link' => '/features/inventory-analytics'
                        ],
                        [
                            'id' => 'sales',
                            'icon' => 'cart',
                            'title' => 'Sales Performance',
                            'description' => 'Monitor revenue, conversion rates, and sales team performance metrics.',
                            'details' => [
                                'Revenue trend analysis',
                                'Conversion funnel tracking',
                                'Sales team KPIs',
                                'Seasonal trend detection'
                            ],
                            'link' => '/features/sales-analytics'
                        ],
                        [
                            'id' => 'fulfillment',
                            'icon' => 'truck',
                            'title' => 'Fulfillment Metrics',
                            'description' => 'Track order processing times, shipping accuracy, and delivery performance.',
                            'details' => [
                                'Order cycle time',
                                'Shipping accuracy rate',
                                'Carrier performance',
                                'Returns analysis'
                            ],
                            'link' => '/features/fulfillment-analytics'
                        ]
                    ],
                    'timeRanges' => [
                        ['value' => 'daily', 'label' => 'Daily'],
                        ['value' => 'weekly', 'label' => 'Weekly'],
                        ['value' => 'monthly', 'label' => 'Monthly']
                    ],
                    'chartTypes' => [
                        ['value' => 'trend', 'label' => 'Trend', 'icon' => 'trending'],
                        ['value' => 'pie', 'label' => 'Pie', 'icon' => 'chart-pie'],
                        ['value' => 'bar', 'label' => 'Bar', 'icon' => 'chart-bar']
                    ],
                    'chartData' => [
                        'inventory' => [
                            'trend' => [65, 72, 68, 85, 92, 88, 95],
                            'pie' => [45, 30, 25],
                            'bar' => [120, 85, 95, 110, 130, 125, 140]
                        ],
                        'sales' => [
                            'trend' => [45, 52, 58, 65, 72, 78, 85],
                            'pie' => [55, 25, 20],
                            'bar' => [85, 92, 98, 105, 112, 118, 125]
                        ],
                        'fulfillment' => [
                            'trend' => [92, 94, 95, 96, 97, 98, 99],
                            'pie' => [98, 2],
                            'bar' => [88, 91, 93, 95, 96, 97, 98]
                        ]
                    ],
                    'showMetricStats' => true,
                    'metricStats' => [
                        'inventory' => [
                            ['value' => '92%', 'label' => 'Accuracy'],
                            ['value' => '12.5K', 'label' => 'SKUs'],
                            ['value' => '+8%', 'label' => 'Growth']
                        ],
                        'sales' => [
                            ['value' => '+18%', 'label' => 'Growth'],
                            ['value' => '$45.2K', 'label' => 'Revenue'],
                            ['value' => '+12%', 'label' => 'vs Last']
                        ],
                        'fulfillment' => [
                            ['value' => '98%', 'label' => 'Rate'],
                            ['value' => '2.3d', 'label' => 'Avg Time'],
                            ['value' => '+2%', 'label' => 'Improvement']
                        ]
                    ],
                    'showMetrics' => true,
                    'metrics' => [
                        ['icon' => 'users', 'value' => '12.5K', 'label' => 'Active Users', 'description' => 'Monthly active users'],
                        ['icon' => 'dollar', 'value' => '$2.4M', 'label' => 'Revenue Tracked', 'description' => 'Total revenue analyzed'],
                        ['icon' => 'clock', 'value' => '2.3s', 'label' => 'Query Response', 'description' => 'Average query time'],
                        ['icon' => 'star', 'value' => '98%', 'label' => 'Accuracy Rate', 'description' => 'Prediction accuracy']
                    ],
                    'showTemplates' => true,
                    'templatesTitle' => 'Popular Report Templates',
                    'templatesDescription' => 'Ready-to-use templates for common analytics needs',
                    'reportTemplates' => [
                        ['icon' => 'presentation', 'name' => 'Sales Performance', 'description' => 'Track revenue, conversions, and sales team performance metrics.', 'frequency' => 'Daily/Weekly'],
                        ['icon' => 'users', 'name' => 'Customer Analytics', 'description' => 'Understand customer behavior, retention, and lifetime value.', 'frequency' => 'Weekly/Monthly'],
                        ['icon' => 'inventory', 'name' => 'Inventory Report', 'description' => 'Monitor stock levels, turnover rates, and reorder points.', 'frequency' => 'Real-time']
                    ],
                    'showCta' => true,
                    'ctaText' => 'Ready to unlock actionable insights?',
                    'ctaPrimaryLink' => '/contact',
                    'ctaSecondaryLink' => '/demo',
                    'ctaButton' => [
                        'primaryText' => 'Get Started',
                        'primaryBackground' => 'bg-linear-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700',
                        'secondaryText' => 'Watch Demo'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 135,
                'section_key' => 'reportingAnalytics',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Advanced Analytics',
                        'backgroundColor' => 'bg-purple-50 dark:bg-purple-900/30',
                        'borderColor' => 'border-purple-200 dark:border-purple-800',
                        'textColor' => 'text-purple-700 dark:text-purple-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Enterprise',
                        'highlightedText' => 'Reporting & Analytics',
                        'suffix' => 'Platform',
                        'highlightGradient' => 'from-purple-500 to-indigo-500'
                    ],
                    'description' => 'Enterprise-grade analytics platform that delivers actionable insights, predictive intelligence, and real-time data visualization at scale.',
                    'stats' => [
                        ['value' => '99.9%', 'label' => 'Platform Uptime'],
                        ['value' => '50+', 'label' => 'Report Templates'],
                        ['value' => '10M+', 'label' => 'Data Points/sec'],
                        ['value' => '24/7', 'label' => 'Real-time Sync']
                    ],
                    'features' => [
                        [
                            'id' => 1,
                            'icon' => 'presentation',
                            'title' => 'Executive Dashboards',
                            'description' => 'C-suite ready dashboards with real-time KPIs and customizable visualizations.',
                            'details' => [
                                'Real-time data refresh',
                                'Role-based views',
                                'Drill-down capabilities',
                                'Mobile responsive'
                            ],
                            'metrics' => [
                                ['value' => '<1s', 'label' => 'Load Time'],
                                ['value' => '50+', 'label' => 'Widgets']
                            ],
                            'link' => '/features/executive-dashboards',
                            'isNew' => true
                        ],
                        [
                            'id' => 2,
                            'icon' => 'chip',
                            'title' => 'Predictive Intelligence',
                            'description' => 'Machine learning algorithms that forecast trends and identify opportunities.',
                            'details' => [
                                'Demand forecasting',
                                'Anomaly detection',
                                'Sentiment analysis',
                                'Risk assessment'
                            ],
                            'metrics' => [
                                ['value' => '94%', 'label' => 'Accuracy'],
                                ['value' => '30%', 'label' => 'Cost Savings']
                            ],
                            'link' => '/features/predictive-intelligence',
                            'isPopular' => true
                        ],
                        [
                            'id' => 3,
                            'icon' => 'cloud',
                            'title' => 'Cloud Analytics Hub',
                            'description' => 'Centralized data platform with enterprise-grade security and scalability.',
                            'details' => [
                                'Auto-scaling infrastructure',
                                'End-to-end encryption',
                                'Global CDN delivery',
                                '99.99% uptime SLA'
                            ],
                            'metrics' => [
                                ['value' => '100%', 'label' => 'Encrypted'],
                                ['value' => '5TB', 'label' => 'Storage']
                            ],
                            'link' => '/features/cloud-analytics'
                        ]
                    ],
                    'showAIInsights' => true,
                    'aiInsightsTitle' => 'AI-Powered Analytics Intelligence',
                    'aiInsightsDescription' => 'Smart insights that drive better business decisions',
                    'aiInsights' => [
                        [
                            'icon' => 'trending',
                            'title' => 'Trend Prediction',
                            'description' => 'AI algorithms predict market trends with 94% accuracy up to 6 months ahead.',
                            'impact' => 'Increase revenue by 25%'
                        ],
                        [
                            'icon' => 'shield',
                            'title' => 'Anomaly Detection',
                            'description' => 'Real-time identification of unusual patterns and potential fraud.',
                            'impact' => 'Prevent $100k+ losses'
                        ],
                        [
                            'icon' => 'sparkles',
                            'title' => 'Smart Recommendations',
                            'description' => 'Actionable insights delivered directly to decision-makers.',
                            'impact' => 'Save 20+ hours weekly'
                        ]
                    ],
                    'showAdvancedFeatures' => true,
                    'advancedTitle' => 'Advanced Analytics Capabilities',
                    'advancedDescription' => 'Powerful tools for deep data exploration',
                    'advancedFeatures' => [
                        ['icon' => 'database', 'name' => 'Data Mining', 'description' => 'Pattern discovery in large datasets'],
                        ['icon' => 'chart-bar', 'name' => 'Cohort Analysis', 'description' => 'User behavior tracking'],
                        ['icon' => 'filter', 'name' => 'Funnel Analysis', 'description' => 'Conversion optimization'],
                        ['icon' => 'clock', 'name' => 'Time Series', 'description' => 'Temporal data analysis']
                    ],
                    'showIntegrations' => true,
                    'integrationsTitle' => 'Seamless Data Integration',
                    'integrationsDescription' => 'Connect your analytics with your entire business ecosystem',
                    'integrationCategories' => [
                        ['name' => 'Data Sources'],
                        ['name' => 'Business Apps'],
                        ['name' => 'Cloud Storage']
                    ],
                    'integrations' => [
                        [
                            'items' => [
                                ['icon' => 'database', 'name' => 'SQL Server', 'type' => 'Database'],
                                ['icon' => 'database', 'name' => 'PostgreSQL', 'type' => 'Database'],
                                ['icon' => 'database', 'name' => 'MongoDB', 'type' => 'NoSQL'],
                                ['icon' => 'database', 'name' => 'Snowflake', 'type' => 'Cloud DB']
                            ]
                        ],
                        [
                            'items' => [
                                ['icon' => 'shopping-cart', 'name' => 'Salesforce', 'type' => 'CRM'],
                                ['icon' => 'shopping-cart', 'name' => 'Shopify', 'type' => 'E-commerce'],
                                ['icon' => 'office', 'name' => 'SAP', 'type' => 'ERP'],
                                ['icon' => 'users', 'name' => 'HubSpot', 'type' => 'Marketing']
                            ]
                        ],
                        [
                            'items' => [
                                ['icon' => 'cloud', 'name' => 'AWS S3', 'type' => 'Cloud'],
                                ['icon' => 'cloud', 'name' => 'Google Cloud', 'type' => 'Cloud'],
                                ['icon' => 'cloud', 'name' => 'Azure', 'type' => 'Cloud'],
                                ['icon' => 'cube', 'name' => 'Dropbox', 'type' => 'Storage']
                            ]
                        ]
                    ],
                    'showROICalculator' => true,
                    'roiTitle' => 'Calculate Your Analytics ROI',
                    'roiDescription' => 'See how data-driven decisions impact your bottom line',
                    'roiExample' => 'Up to 6x ROI',
                    'roiLink' => '/calculator',
                    'showReportGallery' => true,
                    'galleryTitle' => 'Comprehensive Report Library',
                    'galleryDescription' => '50+ pre-built templates for every business need',
                    'reportGallery' => [
                        ['icon' => 'presentation', 'name' => 'Sales Performance', 'category' => 'Sales'],
                        ['icon' => 'users', 'name' => 'Customer Analytics', 'category' => 'Marketing'],
                        ['icon' => 'truck', 'name' => 'Supply Chain', 'category' => 'Operations'],
                        ['icon' => 'dollar', 'name' => 'Financial Summary', 'category' => 'Finance'],
                        ['icon' => 'chart-bar', 'name' => 'Marketing ROI', 'category' => 'Marketing'],
                        ['icon' => 'database', 'name' => 'Data Quality', 'category' => 'Technical'],
                        ['icon' => 'clock', 'name' => 'Time Series', 'category' => 'Analytics'],
                        ['icon' => 'chip', 'name' => 'Predictive Model', 'category' => 'AI/ML']
                    ],
                    'showScheduledReports' => true,
                    'scheduledTitle' => 'Automated Report Scheduling',
                    'scheduledDescription' => 'Never miss important insights with automated delivery',
                    'schedulingFeatures' => [
                        ['icon' => 'calendar', 'title' => 'Flexible Scheduling', 'description' => 'Daily, weekly, monthly cadence'],
                        ['icon' => 'mail', 'title' => 'Email Delivery', 'description' => 'Send to stakeholders automatically'],
                        ['icon' => 'download', 'title' => 'Multiple Formats', 'description' => 'PDF, Excel, CSV exports']
                    ],
                    'showCta' => true,
                    'ctaText' => 'Ready to unlock the power of data-driven decisions?',
                    'ctaPrimaryLink' => '/trial',
                    'ctaSecondaryLink' => '/demo',
                    'ctaButton' => [
                        'primaryText' => 'Start Free Trial',
                        'primaryBackground' => 'bg-linear-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700',
                        'secondaryText' => 'Watch Demo'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 136,
                'section_key' => 'reportingAnalytics',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Integration Capabilities Section
            [
                'id' => 137,
                'section_key' => 'integrationCapabilities',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Seamless Integration',
                        'backgroundColor' => 'bg-teal-50 dark:bg-teal-900/30',
                        'borderColor' => 'border-teal-200 dark:border-teal-800',
                        'textColor' => 'text-teal-700 dark:text-teal-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Enterprise',
                        'highlightedText' => 'Integration Capabilities',
                        'suffix' => '',
                        'highlightGradient' => 'from-teal-500 to-cyan-500'
                    ],
                    'description' => 'Connect your entire business ecosystem with our powerful integration platform. Seamlessly sync data across all your tools and systems.',
                    'benefits' => [
                        [
                            'icon' => 'lightning',
                            'title' => 'Real-time Sync',
                            'description' => 'Data synchronization in milliseconds across all connected platforms'
                        ],
                        [
                            'icon' => 'lock',
                            'title' => 'Enterprise Security',
                            'description' => 'Bank-grade encryption and compliance with industry standards'
                        ],
                        [
                            'icon' => 'plug',
                            'title' => '500+ Connectors',
                            'description' => 'Pre-built integrations for popular business applications'
                        ]
                    ],
                    'features' => [
                        [
                            'id' => 1,
                            'icon' => 'cloud',
                            'title' => 'Cloud-Native Architecture',
                            'description' => 'Built for scale with auto-scaling infrastructure and 99.99% uptime SLA.',
                            'details' => [
                                'Serverless architecture',
                                'Global CDN delivery',
                                'Automatic failover',
                                'Real-time monitoring'
                            ],
                            'link' => '/features/cloud-native'
                        ],
                        [
                            'id' => 2,
                            'icon' => 'code',
                            'title' => 'RESTful API',
                            'description' => 'Comprehensive API with detailed documentation and SDK support for all major languages.',
                            'details' => [
                                'REST API endpoints',
                                'Webhook support',
                                'Rate limiting',
                                'API versioning'
                            ],
                            'link' => '/features/api',
                            'isPopular' => true
                        ],
                        [
                            'id' => 3,
                            'icon' => 'database',
                            'title' => 'Data Transformation',
                            'description' => 'Powerful ETL capabilities to map, transform, and enrich your data in real-time.',
                            'details' => [
                                'Custom field mapping',
                                'Data validation rules',
                                'Error handling',
                                'Batch processing'
                            ],
                            'link' => '/features/data-transformation'
                        ]
                    ],
                    'showCategories' => true,
                    'categoriesTitle' => 'Connect with Your Ecosystem',
                    'categoriesDescription' => 'Pre-built connectors for popular platforms',
                    'integrationCategories' => [
                        [
                            'icon' => 'cart',
                            'name' => 'E-commerce',
                            'description' => 'Connect your online stores',
                            'platforms' => ['Shopify', 'WooCommerce', 'Magento', 'BigCommerce']
                        ],
                        [
                            'icon' => 'database',
                            'name' => 'Databases',
                            'description' => 'Sync with your data sources',
                            'platforms' => ['PostgreSQL', 'MySQL', 'MongoDB', 'Snowflake']
                        ],
                        [
                            'icon' => 'cloud',
                            'name' => 'Cloud Storage',
                            'description' => 'Connect cloud platforms',
                            'platforms' => ['AWS S3', 'Google Cloud', 'Azure', 'Dropbox']
                        ],
                        [
                            'icon' => 'mail',
                            'name' => 'Marketing Tools',
                            'description' => 'Integrate marketing platforms',
                            'platforms' => ['Mailchimp', 'HubSpot', 'Salesforce', 'Marketo']
                        ]
                    ],
                    'showAPIFeatures' => true,
                    'apiTitle' => 'Powerful API Capabilities',
                    'apiDescription' => 'Build custom integrations with our comprehensive API',
                    'apiFeatures' => [
                        ['icon' => 'code', 'title' => 'RESTful API', 'description' => 'Full REST API support with JSON payloads'],
                        ['icon' => 'sync', 'title' => 'Webhooks', 'description' => 'Real-time event notifications'],
                        ['icon' => 'lock', 'title' => 'OAuth 2.0', 'description' => 'Secure authentication protocol'],
                        ['icon' => 'document', 'title' => 'Interactive Docs', 'description' => 'Live API explorer and testing']
                    ],
                    'showIntegrationsCounter' => true,
                    'counterTitle' => '500+ Pre-Built Integrations',
                    'counterDescription' => 'Connect seamlessly with your favorite tools and platforms',
                    'counterLink' => '/integrations',
                    'showCta' => true,
                    'ctaText' => 'Ready to connect your ecosystem?',
                    'ctaPrimaryLink' => '/contact',
                    'ctaSecondaryLink' => '/docs',
                    'ctaButton' => [
                        'primaryText' => 'Get Started',
                        'primaryBackground' => 'bg-linear-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700',
                        'secondaryText' => 'View API Docs'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 138,
                'section_key' => 'integrationCapabilities',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Developer Friendly',
                        'backgroundColor' => 'bg-teal-50 dark:bg-teal-900/30',
                        'borderColor' => 'border-teal-200 dark:border-teal-800',
                        'textColor' => 'text-teal-700 dark:text-teal-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Powerful',
                        'highlightedText' => 'API & Integrations',
                        'suffix' => 'Platform',
                        'highlightGradient' => 'from-teal-500 to-cyan-500'
                    ],
                    'description' => 'Build custom integrations with our comprehensive REST API. Test endpoints live and see real responses.',
                    'initialFeature' => 'api',
                    'initialEndpoint' => '/api/v1/inventory',
                    'features' => [
                        [
                            'id' => 'api',
                            'icon' => 'code',
                            'title' => 'RESTful API',
                            'description' => 'Full-featured REST API with comprehensive documentation and SDK support.',
                            'details' => [
                                'Resource-based endpoints',
                                'JSON request/response',
                                'Webhook support',
                                'Real-time events'
                            ],
                            'link' => '/features/api'
                        ],
                        [
                            'id' => 'auth',
                            'icon' => 'lock',
                            'title' => 'Authentication',
                            'description' => 'Secure authentication methods including OAuth 2.0, API keys, and JWT tokens.',
                            'details' => [
                                'OAuth 2.0 support',
                                'API key management',
                                'JWT authentication',
                                'Role-based access control'
                            ],
                            'link' => '/features/auth'
                        ],
                        [
                            'id' => 'webhooks',
                            'icon' => 'sync',
                            'title' => 'Webhooks',
                            'description' => 'Real-time event notifications to keep your systems in sync automatically.',
                            'details' => [
                                'Event-based triggers',
                                'Retry mechanism',
                                'Payload signing',
                                'Delivery monitoring'
                            ],
                            'link' => '/features/webhooks'
                        ]
                    ],
                    'apiEndpoints' => [
                        ['value' => '/api/v1/inventory', 'label' => 'GET /api/v1/inventory'],
                        ['value' => '/api/v1/orders', 'label' => 'GET /api/v1/orders'],
                        ['value' => '/api/v1/warehouses', 'label' => 'GET /api/v1/warehouses']
                    ],
                    'apiResponses' => [
                        '/api/v1/inventory' => [
                            'status' => 200,
                            'data' => [
                                'products' => [
                                    ['id' => 1, 'name' => 'Wireless Headphones', 'stock' => 245, 'location' => 'WH-A-12'],
                                    ['id' => 2, 'name' => 'Smart Watch', 'stock' => 128, 'location' => 'WH-B-05'],
                                    ['id' => 3, 'name' => 'Bluetooth Speaker', 'stock' => 312, 'location' => 'WH-C-08']
                                ],
                                'total' => 685,
                                'lastUpdated' => '2024-01-15T10:30:00Z'
                            ]
                        ],
                        '/api/v1/orders' => [
                            'status' => 200,
                            'data' => [
                                'orders' => [
                                    ['id' => 'ORD-001', 'status' => 'shipped', 'total' => 129.99, 'date' => '2024-01-15'],
                                    ['id' => 'ORD-002', 'status' => 'processing', 'total' => 89.99, 'date' => '2024-01-16'],
                                    ['id' => 'ORD-003', 'status' => 'delivered', 'total' => 199.99, 'date' => '2024-01-14']
                                ],
                                'totalOrders' => 3
                            ]
                        ],
                        '/api/v1/warehouses' => [
                            'status' => 200,
                            'data' => [
                                'warehouses' => [
                                    ['id' => 'WH-001', 'name' => 'North America Hub', 'capacity' => 50000, 'utilization' => 78],
                                    ['id' => 'WH-002', 'name' => 'Europe Distribution', 'capacity' => 35000, 'utilization' => 65],
                                    ['id' => 'WH-003', 'name' => 'Asia Pacific Center', 'capacity' => 45000, 'utilization' => 82]
                                ]
                            ]
                        ]
                    ],
                    'apiStats' => [
                        ['value' => '99.99%', 'label' => 'Uptime SLA'],
                        ['value' => '<100ms', 'label' => 'Response Time'],
                        ['value' => '10K/min', 'label' => 'Rate Limit']
                    ],
                    'showPartners' => true,
                    'partnersTitle' => 'Trusted by Leading Platforms',
                    'partnersDescription' => 'Connect with 200+ pre-built integrations',
                    'integrationPartners' => [
                        ['icon' => 'cloud', 'name' => 'AWS'],
                        ['icon' => 'database', 'name' => 'MongoDB'],
                        ['icon' => 'cart', 'name' => 'Shopify'],
                        ['icon' => 'office', 'name' => 'Salesforce'],
                        ['icon' => 'mail', 'name' => 'Mailchimp'],
                        ['icon' => 'globe', 'name' => 'WordPress']
                    ],
                    'showMetrics' => true,
                    'metrics' => [
                        ['icon' => 'lightning', 'value' => '10M+', 'label' => 'API Calls/Day', 'description' => 'Daily request volume'],
                        ['icon' => 'users', 'value' => '5K+', 'label' => 'Active Developers', 'description' => 'Building integrations'],
                        ['icon' => 'database', 'value' => '200+', 'label' => 'Pre-built Connectors', 'description' => 'Ready to use'],
                        ['icon' => 'globe', 'value' => '99.99%', 'label' => 'Uptime SLA', 'description' => 'Enterprise grade']
                    ],
                    'showCta' => true,
                    'ctaText' => 'Ready to integrate your stack?',
                    'ctaPrimaryLink' => '/contact',
                    'ctaSecondaryLink' => '/docs',
                    'ctaButton' => [
                        'primaryText' => 'Get Started',
                        'primaryBackground' => 'bg-linear-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700',
                        'secondaryText' => 'View API Docs'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 139,
                'section_key' => 'integrationCapabilities',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Integration Ecosystem',
                        'backgroundColor' => 'bg-teal-50 dark:bg-teal-900/30',
                        'borderColor' => 'border-teal-200 dark:border-teal-800',
                        'textColor' => 'text-teal-700 dark:text-teal-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Seamless',
                        'highlightedText' => 'Integration Ecosystem',
                        'suffix' => '',
                        'highlightGradient' => 'from-teal-500 to-cyan-500'
                    ],
                    'description' => 'Connect, automate, and scale with our extensive integration marketplace. 500+ pre-built connectors for your entire tech stack.',
                    'stats' => [
                        ['value' => '500+', 'label' => 'Pre-built Integrations'],
                        ['value' => '50K+', 'label' => 'Active Connections'],
                        ['value' => '99.99%', 'label' => 'Platform Uptime'],
                        ['value' => '24/7', 'label' => 'Support Available']
                    ],
                    'features' => [
                        [
                            'id' => 1,
                            'icon' => 'plug',
                            'title' => 'Plug & Play Connectors',
                            'description' => 'Ready-to-use integrations that work out of the box with minimal configuration.',
                            'details' => [
                                'One-click setup',
                                'Auto-configuration',
                                'Pre-mapped fields',
                                'Test mode available'
                            ],
                            'metrics' => [
                                ['value' => '<5min', 'label' => 'Setup Time'],
                                ['value' => '500+', 'label' => 'Connectors']
                            ],
                            'link' => '/features/connectors',
                            'isNew' => true
                        ],
                        [
                            'id' => 2,
                            'icon' => 'sync',
                            'title' => 'Real-time Sync',
                            'description' => 'Bi-directional data synchronization with millisecond latency across all platforms.',
                            'details' => [
                                'Instant data sync',
                                'Conflict resolution',
                                'Error recovery',
                                'Sync history'
                            ],
                            'metrics' => [
                                ['value' => '<100ms', 'label' => 'Latency'],
                                ['value' => '99.99%', 'label' => 'Success Rate']
                            ],
                            'link' => '/features/real-time-sync',
                            'isPopular' => true
                        ],
                        [
                            'id' => 3,
                            'icon' => 'shield',
                            'title' => 'Enterprise Security',
                            'description' => 'Bank-grade encryption and compliance with SOC2, GDPR, and HIPAA standards.',
                            'details' => [
                                'End-to-end encryption',
                                'Audit logging',
                                'Access controls',
                                'Compliance certified'
                            ],
                            'metrics' => [
                                ['value' => '256-bit', 'label' => 'Encryption'],
                                ['value' => '100%', 'label' => 'Compliant']
                            ],
                            'link' => '/features/security'
                        ]
                    ],
                    'showMarketplace' => true,
                    'marketplaceTitle' => 'Integration Marketplace',
                    'marketplaceDescription' => 'Connect with 200+ popular apps and services',
                    'categories' => [
                        ['id' => 'ecommerce', 'name' => 'E-commerce'],
                        ['id' => 'crm', 'name' => 'CRM'],
                        ['id' => 'marketing', 'name' => 'Marketing'],
                        ['id' => 'accounting', 'name' => 'Accounting']
                    ],
                    'integrations' => [
                        ['icon' => 'cart', 'name' => 'Shopify', 'category' => 'ecommerce', 'setupTime' => '5 min', 'isPopular' => true],
                        ['icon' => 'cart', 'name' => 'WooCommerce', 'category' => 'ecommerce', 'setupTime' => '5 min', 'isPopular' => false],
                        ['icon' => 'office', 'name' => 'Salesforce', 'category' => 'crm', 'setupTime' => '10 min', 'isPopular' => true],
                        ['icon' => 'users', 'name' => 'HubSpot', 'category' => 'crm', 'setupTime' => '8 min', 'isPopular' => true],
                        ['icon' => 'mail', 'name' => 'Mailchimp', 'category' => 'marketing', 'setupTime' => '3 min', 'isPopular' => true],
                        ['icon' => 'mail', 'name' => 'Klaviyo', 'category' => 'marketing', 'setupTime' => '5 min', 'isPopular' => false],
                        ['icon' => 'dollar', 'name' => 'QuickBooks', 'category' => 'accounting', 'setupTime' => '10 min', 'isPopular' => true],
                        ['icon' => 'dollar', 'name' => 'Xero', 'category' => 'accounting', 'setupTime' => '8 min', 'isPopular' => false]
                    ],
                    'showAIInsights' => true,
                    'aiInsightsTitle' => 'AI-Powered Integration Intelligence',
                    'aiInsightsDescription' => 'Smart recommendations for your integration needs',
                    'aiInsights' => [
                        [
                            'icon' => 'sparkles',
                            'title' => 'Smart Recommendations',
                            'description' => 'AI suggests the best integrations based on your tech stack.',
                            'impact' => 'Reduce setup time by 60%'
                        ],
                        [
                            'icon' => 'chart',
                            'title' => 'Usage Analytics',
                            'description' => 'Track integration performance and usage patterns.',
                            'impact' => 'Optimize workflow efficiency'
                        ],
                        [
                            'icon' => 'bell',
                            'title' => 'Proactive Alerts',
                            'description' => 'Get notified about sync issues before they impact business.',
                            'impact' => 'Prevent 95% of disruptions'
                        ]
                    ],
                    'showDeveloperResources' => true,
                    'devResourcesTitle' => 'Developer Resources',
                    'devResourcesDescription' => 'Everything you need to build powerful integrations',
                    'developerResources' => [
                        ['icon' => 'document', 'title' => 'API Documentation', 'description' => 'Comprehensive API guides and references.', 'link' => '/docs/api'],
                        ['icon' => 'terminal', 'title' => 'SDKs & Libraries', 'description' => 'Official SDKs for all major languages.', 'link' => '/docs/sdks'],
                        ['icon' => 'code', 'title' => 'Code Examples', 'description' => 'Real-world integration examples.', 'link' => '/docs/examples'],
                        ['icon' => 'server', 'title' => 'Webhook Simulator', 'description' => 'Test webhooks in a safe environment.', 'link' => '/docs/webhooks']
                    ],
                    'showSecurity' => true,
                    'securityTitle' => 'Enterprise-Grade Security',
                    'securityDescription' => 'Your data is protected with industry-leading security standards',
                    'securityFeatures' => [
                        'SOC2 Type II Certified',
                        'GDPR & CCPA Compliant',
                        '256-bit Encryption at Rest & Transit',
                        'Regular Security Audits',
                        'SSO & MFA Support',
                        'Role-based Access Control'
                    ],
                    'securityBadges' => [
                        ['icon' => 'shield', 'name' => 'SOC2'],
                        ['icon' => 'globe', 'name' => 'GDPR'],
                        ['icon' => 'lock', 'name' => 'HIPAA'],
                        ['icon' => 'fingerprint', 'name' => 'ISO 27001']
                    ],
                    'showCta' => true,
                    'ctaText' => 'Ready to connect your entire ecosystem?',
                    'ctaPrimaryLink' => '/trial',
                    'ctaSecondaryLink' => '/docs',
                    'ctaButton' => [
                        'primaryText' => 'Start Building',
                        'primaryBackground' => 'bg-linear-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700',
                        'secondaryText' => 'View Documentation'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 140,
                'section_key' => 'integrationCapabilities',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Mobile App Features Section
            [
                'id' => 141,
                'section_key' => 'mobileAppFeatures',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Mobile-First Solution',
                        'backgroundColor' => 'bg-orange-50 dark:bg-orange-900/30',
                        'borderColor' => 'border-orange-200 dark:border-orange-800',
                        'textColor' => 'text-orange-700 dark:text-orange-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Powerful',
                        'highlightedText' => 'Mobile App',
                        'suffix' => 'for Modern Teams',
                        'highlightGradient' => 'from-orange-500 to-amber-500'
                    ],
                    'description' => 'Transform your operations with our feature-rich mobile app. Scan, track, and manage everything from the palm of your hand.',
                    'showAppBadges' => true,
                    'iosLink' => '/app-store',
                    'androidLink' => '/play-store',
                    'benefits' => [
                        [
                            'icon' => 'sync',
                            'title' => 'Real-time Sync',
                            'description' => 'Data syncs instantly across all devices'
                        ],
                        [
                            'icon' => 'shield',
                            'title' => 'Enterprise Security',
                            'description' => 'Bank-grade encryption and biometric auth'
                        ],
                        [
                            'icon' => 'offline',
                            'title' => 'Offline Mode',
                            'description' => 'Work anywhere, even without internet'
                        ]
                    ],
                    'features' => [
                        [
                            'id' => 1,
                            'icon' => 'qrcode',
                            'title' => 'Barcode Scanning',
                            'description' => 'Fast and accurate barcode scanning for inventory management.',
                            'details' => [
                                'Scan 100+ barcodes per minute',
                                'Supports 50+ barcode formats',
                                'Batch scanning mode',
                                'Auto-fill product details'
                            ],
                            'link' => '/features/barcode-scanning',
                            'isNew' => true
                        ],
                        [
                            'id' => 2,
                            'icon' => 'location',
                            'title' => 'GPS Tracking',
                            'description' => 'Real-time location tracking for fleet and asset management.',
                            'details' => [
                                'Live vehicle tracking',
                                'Geofencing alerts',
                                'Route optimization',
                                'Delivery confirmation'
                            ],
                            'link' => '/features/gps-tracking',
                            'isPopular' => true
                        ],
                        [
                            'id' => 3,
                            'icon' => 'chart',
                            'title' => 'Analytics Dashboard',
                            'description' => 'Mobile-optimized dashboards with real-time KPIs and insights.',
                            'details' => [
                                'Customizable widgets',
                                'Real-time metrics',
                                'Export reports',
                                'Data visualization'
                            ],
                            'link' => '/features/mobile-analytics'
                        ]
                    ],
                    'showScreenshots' => true,
                    'screenshotsTitle' => 'App Experience',
                    'screenshotsDescription' => 'See the mobile app in action',
                    'screenshots' => [
                        ['icon' => 'qrcode', 'title' => 'Scanning', 'description' => 'Fast barcode recognition'],
                        ['icon' => 'chart', 'title' => 'Analytics', 'description' => 'Real-time insights'],
                        ['icon' => 'inventory', 'title' => 'Inventory', 'description' => 'Manage stock levels'],
                        ['icon' => 'bell', 'title' => 'Alerts', 'description' => 'Smart notifications']
                    ],
                    'showOffline' => true,
                    'offlineTitle' => 'Works Offline',
                    'offlineDescription' => 'Continue working even without internet connection. All data syncs automatically when you\'re back online.',
                    'offlineFeatures' => [
                        'Scan and save data offline',
                        'Automatic sync when online',
                        'Queue management',
                        'Conflict resolution'
                    ],
                    'showAppHighlights' => true,
                    'highlightsTitle' => 'Why Choose Our Mobile App',
                    'highlightsDescription' => 'Everything you need to manage your operations on the go',
                    'appHighlights' => [
                        ['icon' => 'mobile', 'title' => 'iOS & Android', 'description' => 'Native apps for both platforms'],
                        ['icon' => 'shield', 'title' => 'Biometric Login', 'description' => 'Face ID & Fingerprint support'],
                        ['icon' => 'cloud', 'title' => 'Cloud Sync', 'description' => 'Real-time data sync'],
                        ['icon' => 'bell', 'title' => 'Push Notifications', 'description' => 'Instant alerts']
                    ],
                    'showCta' => true,
                    'ctaText' => 'Ready to take your operations mobile?',
                    'ctaPrimaryLink' => '/download',
                    'ctaSecondaryLink' => '/demo',
                    'ctaButton' => [
                        'primaryText' => 'Download App',
                        'primaryBackground' => 'bg-linear-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700',
                        'secondaryText' => 'Watch Demo'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 142,
                'section_key' => 'mobileAppFeatures',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Interactive Demo',
                        'backgroundColor' => 'bg-orange-50 dark:bg-orange-900/30',
                        'borderColor' => 'border-orange-200 dark:border-orange-800',
                        'textColor' => 'text-orange-700 dark:text-orange-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Experience the',
                        'highlightedText' => 'Mobile App',
                        'suffix' => 'in Action',
                        'highlightGradient' => 'from-orange-500 to-amber-500'
                    ],
                    'description' => 'Interact with our mobile app simulator. Scan barcodes, track orders, and manage inventory in real-time.',
                    'initialTab' => 'dashboard',
                    'appName' => 'Inventory Pro',
                    'features' => [
                        [
                            'id' => 'dashboard',
                            'icon' => 'home',
                            'title' => 'Real-time Dashboard',
                            'description' => 'View key metrics and KPIs at a glance with our intuitive dashboard.',
                            'details' => [
                                'Live inventory counts',
                                'Order status tracking',
                                'Revenue analytics',
                                'Performance indicators'
                            ],
                            'link' => '/features/mobile-dashboard'
                        ],
                        [
                            'id' => 'scan',
                            'icon' => 'qrcode',
                            'title' => 'Smart Barcode Scanning',
                            'description' => 'Fast and accurate scanning with instant product information retrieval.',
                            'details' => [
                                '50+ barcode formats',
                                'Batch scanning mode',
                                'Auto product lookup',
                                'History tracking'
                            ],
                            'link' => '/features/mobile-scanning',
                            'isPopular' => true
                        ],
                        [
                            'id' => 'orders',
                            'icon' => 'cart',
                            'title' => 'Order Management',
                            'description' => 'Track, update, and manage orders from anywhere.',
                            'details' => [
                                'Real-time order updates',
                                'Status tracking',
                                'Customer notifications',
                                'Delivery confirmation'
                            ],
                            'link' => '/features/mobile-orders'
                        ],
                        [
                            'id' => 'inventory',
                            'icon' => 'inventory',
                            'title' => 'Inventory Control',
                            'description' => 'Manage stock levels, locations, and transfers on the go.',
                            'details' => [
                                'Stock level alerts',
                                'Location tracking',
                                'Transfer management',
                                'Cycle counting'
                            ],
                            'link' => '/features/mobile-inventory'
                        ]
                    ],
                    'dashboardStats' => [
                        ['value' => '245', 'label' => 'Total Orders'],
                        ['value' => '128', 'label' => 'Low Stock']
                    ],
                    'dashboardRevenue' => [
                        'label' => 'Today\'s Revenue',
                        'value' => '$1,245',
                        'progress' => '75%'
                    ],
                    'scanTitle' => 'Barcode Scanner',
                    'scanInstruction' => 'Position barcode in frame',
                    'scanPlaceholder' => 'Enter barcode',
                    'scanButtonText' => 'Scan',
                    'notFoundMessage' => 'Product not found',
                    'productDatabase' => [
                        '8901234567890' => ['name' => 'Wireless Headphones', 'price' => '$89.99', 'stock' => 245],
                        '5901234123457' => ['name' => 'Smart Watch', 'price' => '$199.99', 'stock' => 128],
                        '4006381333931' => ['name' => 'Bluetooth Speaker', 'price' => '$59.99', 'stock' => 312]
                    ],
                    'ordersTitle' => 'Recent Orders',
                    'recentOrders' => [
                        ['id' => 'ORD-001', 'status' => 'Shipped', 'total' => '$129.99'],
                        ['id' => 'ORD-002', 'status' => 'Processing', 'total' => '$89.99'],
                        ['id' => 'ORD-003', 'status' => 'Delivered', 'total' => '$199.99']
                    ],
                    'trackButtonText' => 'Track',
                    'inventoryTitle' => 'Inventory',
                    'inventoryItems' => [
                        ['name' => 'Wireless Headphones', 'stock' => 245, 'location' => 'A-12'],
                        ['name' => 'Smart Watch', 'stock' => 128, 'location' => 'B-05'],
                        ['name' => 'Bluetooth Speaker', 'stock' => 312, 'location' => 'C-08']
                    ],
                    'bottomNavItems' => [
                        ['id' => 'dashboard', 'icon' => 'home'],
                        ['id' => 'scan', 'icon' => 'qrcode'],
                        ['id' => 'orders', 'icon' => 'cart'],
                        ['id' => 'inventory', 'icon' => 'inventory']
                    ],
                    'showAppBadges' => true,
                    'iosLink' => '/app-store',
                    'androidLink' => '/play-store',
                    'showCta' => true,
                    'ctaText' => 'Ready to take your operations mobile?',
                    'ctaPrimaryLink' => '/download',
                    'ctaSecondaryLink' => '/demo',
                    'ctaButton' => [
                        'primaryText' => 'Download App',
                        'primaryBackground' => 'bg-linear-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700',
                        'secondaryText' => 'Watch Demo'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 143,
                'section_key' => 'mobileAppFeatures',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Multi-Platform',
                        'backgroundColor' => 'bg-orange-50 dark:bg-orange-900/30',
                        'borderColor' => 'border-orange-200 dark:border-orange-800',
                        'textColor' => 'text-orange-700 dark:text-orange-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Native',
                        'highlightedText' => 'iOS & Android',
                        'suffix' => 'Apps',
                        'highlightGradient' => 'from-orange-500 to-amber-500'
                    ],
                    'description' => 'Fully native mobile apps for both iOS and Android platforms, delivering optimal performance and user experience.',
                    'initialPlatform' => 'ios',
                    'stats' => [
                        ['value' => '500K+', 'label' => 'App Downloads'],
                        ['value' => '4.9', 'label' => 'App Store Rating'],
                        ['value' => '99.9%', 'label' => 'Crash-Free'],
                        ['value' => '<100ms', 'label' => 'Response Time']
                    ],
                    'showPlatformSelector' => true,
                    'features' => [
                        [
                            'id' => 1,
                            'icon' => 'sparkles',
                            'title' => 'Native Performance',
                            'description' => 'Optimized for each platform with native UI components and gestures.',
                            'details' => [
                                'Smooth 60fps animations',
                                'Platform-specific UI',
                                'Hardware acceleration',
                                'Memory optimization'
                            ],
                            'link' => '/features/native-performance',
                            'platform' => 'both',
                            'isNew' => true
                        ],
                        [
                            'id' => 2,
                            'icon' => 'fingerprint',
                            'title' => 'Biometric Auth',
                            'description' => 'Secure login with Face ID, Touch ID, or fingerprint authentication.',
                            'details' => [
                                'Face ID support',
                                'Touch ID integration',
                                'Fingerprint scanning',
                                'Secure keychain storage'
                            ],
                            'link' => '/features/biometric-auth',
                            'platform' => 'both',
                            'isPopular' => true
                        ],
                        [
                            'id' => 3,
                            'icon' => 'sync',
                            'title' => 'iCloud/Google Sync',
                            'description' => 'Seamless cloud sync across all your devices.',
                            'details' => [
                                'Cross-device sync',
                                'Background updates',
                                'Conflict resolution',
                                'Offline support'
                            ],
                            'link' => '/features/cloud-sync',
                            'platform' => 'both'
                        ]
                    ],
                    'showWearable' => true,
                    'wearableTitle' => 'Wearable Device Integration',
                    'wearableDescription' => 'Extend your reach to smartwatches and wearables',
                    'wearableDevices' => [
                        [
                            'icon' => 'watch',
                            'name' => 'Apple Watch',
                            'description' => 'View notifications and quick actions',
                            'features' => 'Glanceable information'
                        ],
                        [
                            'icon' => 'watch',
                            'name' => 'Wear OS',
                            'description' => 'Smartwatch companion app',
                            'features' => 'Quick actions'
                        ],
                        [
                            'icon' => 'desktop',
                            'name' => 'Widgets',
                            'description' => 'Home screen widgets',
                            'features' => 'At-a-glance data'
                        ]
                    ],
                    'showFeaturesShowcase' => true,
                    'showcaseTitle' => 'What\'s Inside the App',
                    'showcaseDescription' => 'Everything you need to manage your business on the go',
                    'appFeatures' => [
                        ['icon' => 'qrcode', 'title' => 'Barcode Scanner', 'description' => 'Fast & accurate scanning'],
                        ['icon' => 'chart', 'title' => 'Analytics', 'description' => 'Real-time insights'],
                        ['icon' => 'bell', 'title' => 'Push Notifications', 'description' => 'Instant alerts'],
                        ['icon' => 'shield', 'title' => 'Secure', 'description' => 'Bank-grade security']
                    ],
                    'showSecurity' => true,
                    'securityTitle' => 'Bank-Grade Security',
                    'securityDescription' => 'Your data is protected with enterprise-level security measures',
                    'securityFeatures' => [
                        'End-to-end encryption',
                        'Biometric authentication (Face ID / Fingerprint)',
                        'Remote wipe capabilities',
                        'Automatic session timeout',
                        'Secure data storage'
                    ],
                    'securityIcons' => [
                        ['icon' => 'fingerprint', 'label' => 'Face ID'],
                        ['icon' => 'chip', 'label' => 'Secure Enclave'],
                        ['icon' => 'lock', 'label' => 'Auto-Lock']
                    ],
                    'showAppBadges' => true,
                    'iosLink' => '/app-store',
                    'androidLink' => '/play-store',
                    'rating' => 5,
                    'ratingText' => '4.9 (15,000+ reviews)',
                    'showCta' => true,
                    'ctaText' => 'Ready to take your operations mobile?',
                    'ctaPrimaryLink' => '/download',
                    'ctaSecondaryLink' => '/demo',
                    'ctaButton' => [
                        'primaryText' => 'Download App',
                        'primaryBackground' => 'bg-linear-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700',
                        'secondaryText' => 'Watch Demo'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 144,
                'section_key' => 'mobileAppFeatures',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Security Features Section
            [
                'id' => 145,
                'section_key' => 'securityFeatures',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Enterprise Security',
                        'backgroundColor' => 'bg-emerald-50 dark:bg-emerald-900/30',
                        'borderColor' => 'border-emerald-200 dark:border-emerald-800',
                        'textColor' => 'text-emerald-700 dark:text-emerald-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Enterprise-Grade',
                        'highlightedText' => 'Security',
                        'suffix' => 'Infrastructure',
                        'highlightGradient' => 'from-emerald-500 to-green-500'
                    ],
                    'description' => 'Protect your business with our comprehensive security framework. SOC2 compliant, GDPR ready, and built with zero-trust architecture.',
                    'benefits' => [
                        [
                            'icon' => 'shield',
                            'title' => 'Zero-Trust Architecture',
                            'description' => 'Every request is verified, authenticated, and encrypted'
                        ],
                        [
                            'icon' => 'lock',
                            'title' => 'End-to-End Encryption',
                            'description' => '256-bit AES encryption for data at rest and in transit'
                        ],
                        [
                            'icon' => 'fingerprint',
                            'title' => 'Multi-Factor Auth',
                            'description' => 'Biometric and TOTP support for all accounts'
                        ]
                    ],
                    'certificationsTitle' => 'Industry-Leading Certifications',
                    'certifications' => [
                        ['icon' => 'shield', 'name' => 'SOC 2 Type II', 'description' => 'Security & Compliance'],
                        ['icon' => 'globe', 'name' => 'GDPR', 'description' => 'Data Protection'],
                        ['icon' => 'lock', 'name' => 'ISO 27001', 'description' => 'Security Management'],
                        ['icon' => 'server', 'name' => 'HIPAA', 'description' => 'Healthcare Compliance']
                    ],
                    'features' => [
                        [
                            'id' => 1,
                            'icon' => 'lock',
                            'title' => 'Advanced Encryption',
                            'description' => 'Military-grade encryption protecting your data at all times.',
                            'details' => [
                                'AES-256 encryption at rest',
                                'TLS 1.3 for data in transit',
                                'Hardware security modules',
                                'Key rotation policies'
                            ],
                            'link' => '/security/encryption',
                            'isNew' => true
                        ],
                        [
                            'id' => 2,
                            'icon' => 'fingerprint',
                            'title' => 'Identity Management',
                            'description' => 'Robust authentication and access control for all users.',
                            'details' => [
                                'SSO integration (SAML/OIDC)',
                                'Multi-factor authentication',
                                'Role-based access control',
                                'Automated user provisioning'
                            ],
                            'link' => '/security/identity',
                            'isPopular' => true
                        ],
                        [
                            'id' => 3,
                            'icon' => 'eye',
                            'title' => 'Audit & Monitoring',
                            'description' => 'Real-time monitoring and comprehensive audit logs.',
                            'details' => [
                                'Real-time threat detection',
                                'Comprehensive audit trails',
                                'Automated alerts',
                                'Security analytics'
                            ],
                            'link' => '/security/audit'
                        ]
                    ],
                    'complianceTitle' => 'Global Compliance Standards',
                    'complianceDescription' => 'Meet regulatory requirements worldwide',
                    'complianceBadges' => [
                        ['icon' => 'shield', 'name' => 'SOC 2', 'region' => 'Global'],
                        ['icon' => 'globe', 'name' => 'GDPR', 'region' => 'Europe'],
                        ['icon' => 'shield', 'name' => 'CCPA', 'region' => 'California'],
                        ['icon' => 'server', 'name' => 'HIPAA', 'region' => 'Healthcare']
                    ],
                    'showDataProtection' => true,
                    'dataProtectionTitle' => 'Your Data, Your Control',
                    'dataProtectionDescription' => 'We take data protection seriously. Your information is encrypted, securely stored, and never shared without your consent.',
                    'dataProtectionFeatures' => [
                        'Data encryption at rest and in transit',
                        'Automated backup and recovery',
                        'Data retention policies',
                        'Privacy by design principles'
                    ],
                    'showSecurityMetrics' => true,
                    'metricsTitle' => 'Security by the Numbers',
                    'metricsDescription' => 'Our commitment to security in measurable terms',
                    'securityMetrics' => [
                        ['icon' => 'shield', 'value' => '99.99%', 'label' => 'Uptime SLA'],
                        ['icon' => 'lock', 'value' => '256-bit', 'label' => 'Encryption'],
                        ['icon' => 'key', 'value' => '10M+', 'label' => 'Audit Events/Day'],
                        ['icon' => 'users', 'value' => '100%', 'label' => 'MFA Coverage']
                    ],
                    'showCta' => true,
                    'ctaText' => 'Ready to secure your operations?',
                    'ctaPrimaryLink' => '/contact',
                    'ctaSecondaryLink' => '/security',
                    'ctaButton' => [
                        'primaryText' => 'Contact Security Team',
                        'primaryBackground' => 'bg-linear-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700',
                        'secondaryText' => 'Read Security Whitepaper'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 146,
                'section_key' => 'securityFeatures',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Interactive Security',
                        'backgroundColor' => 'bg-emerald-50 dark:bg-emerald-900/30',
                        'borderColor' => 'border-emerald-200 dark:border-emerald-800',
                        'textColor' => 'text-emerald-700 dark:text-emerald-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Test Our',
                        'highlightedText' => 'Security Features',
                        'suffix' => 'Interactive Demo',
                        'highlightGradient' => 'from-emerald-500 to-green-500'
                    ],
                    'description' => 'Experience our security measures firsthand with interactive demonstrations of encryption, MFA, RBAC, and audit logging.',
                    'initialFeature' => 'encryption',
                    'simulatorTitle' => 'Security Simulator',
                    'features' => [
                        [
                            'id' => 'encryption',
                            'icon' => 'lock',
                            'title' => 'AES-256 Encryption',
                            'description' => 'Military-grade encryption protecting your data at rest and in transit.',
                            'details' => [
                                'End-to-end encryption',
                                'Perfect forward secrecy',
                                'Hardware security modules',
                                'Automated key rotation'
                            ],
                            'link' => '/security/encryption'
                        ],
                        [
                            'id' => 'mfa',
                            'icon' => 'key',
                            'title' => 'Multi-Factor Auth',
                            'description' => 'Additional layer of security with biometric and TOTP support.',
                            'details' => [
                                'TOTP authenticator apps',
                                'SMS verification',
                                'Biometric authentication',
                                'Backup codes'
                            ],
                            'link' => '/security/mfa',
                            'isPopular' => true
                        ],
                        [
                            'id' => 'rbac',
                            'icon' => 'users',
                            'title' => 'Role-Based Access',
                            'description' => 'Granular access controls based on user roles and permissions.',
                            'details' => [
                                'Custom role creation',
                                'Permission hierarchies',
                                'Just-in-time access',
                                'Access reviews'
                            ],
                            'link' => '/security/rbac'
                        ],
                        [
                            'id' => 'audit',
                            'icon' => 'clipboard',
                            'title' => 'Audit Logging',
                            'description' => 'Comprehensive logging of all security events and user actions.',
                            'details' => [
                                'Real-time monitoring',
                                'Tamper-proof logs',
                                'Automated alerts',
                                'Compliance reporting'
                            ],
                            'link' => '/security/audit'
                        ]
                    ],
                    'encryptionTitle' => 'AES-256 Encryption',
                    'encryptionSubtitle' => 'Your data is securely encrypted',
                    'originalDataLabel' => 'Original Data',
                    'originalData' => 'Sensitive Customer Data: Order #12345, Total $1,299.99',
                    'encryptedDataLabel' => 'Encrypted Data',
                    'encryptedData' => '7b3d8e2f9a1c4e5b8d7f2a3c6e9f1b4d8e2c5f7a9b3d6e8c1f4a7b9e2d5c8f1a4b7',
                    'encryptionFeatures' => [
                        'AES-256 encryption (military-grade)',
                        'TLS 1.3 for data in transit',
                        'HSM key protection'
                    ],
                    'mfaTitle' => 'Multi-Factor Authentication',
                    'mfaSubtitle' => 'Test the MFA flow',
                    'passwordPrompt' => 'Enter your password:',
                    'passwordPlaceholder' => '••••••••',
                    'demoPassword' => 'password123',
                    'verifyPasswordText' => 'Verify Password',
                    'codePrompt' => 'Enter verification code from authenticator app:',
                    'codePlaceholder' => '123456',
                    'verifyCodeText' => 'Verify',
                    'backText' => 'Back',
                    'demoCodeMessage' => 'Demo code: 123456',
                    'mfaDemoCode' => '123456',
                    'invalidCodeMessage' => 'Invalid code. Try: 123456',
                    'successMessage' => 'Authentication Successful!',
                    'accessGrantedMessage' => 'MFA verified. Access granted.',
                    'tryAgainText' => 'Try Again',
                    'rbacTitle' => 'Role-Based Access Control',
                    'rbacSubtitle' => 'Simulate different user roles',
                    'rbacRoles' => [
                        [
                            'name' => 'Admin',
                            'accessLevel' => 'Full Access',
                            'badgeClass' => 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
                            'description' => 'Can create, edit, delete, and manage users'
                        ],
                        [
                            'name' => 'Manager',
                            'accessLevel' => 'Edit Access',
                            'badgeClass' => 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
                            'description' => 'Can edit inventory and create orders'
                        ],
                        [
                            'name' => 'Viewer',
                            'accessLevel' => 'Read Only',
                            'badgeClass' => 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300',
                            'description' => 'Can only view data and generate reports'
                        ]
                    ],
                    'auditTitle' => 'Audit Log Simulator',
                    'auditSubtitle' => 'Recent security events',
                    'auditLogs' => [
                        ['action' => 'User Login', 'user' => 'john.doe@company.com', 'time' => '2 minutes ago', 'status' => 'success'],
                        ['action' => 'Password Change', 'user' => 'jane.smith@company.com', 'time' => '15 minutes ago', 'status' => 'success'],
                        ['action' => 'MFA Enabled', 'user' => 'mike.wilson@company.com', 'time' => '1 hour ago', 'status' => 'success'],
                        ['action' => 'Failed Login Attempt', 'user' => 'unknown@ip.com', 'time' => '2 hours ago', 'status' => 'failed'],
                        ['action' => 'Role Updated', 'user' => 'admin@company.com', 'time' => '3 hours ago', 'status' => 'success'],
                        ['action' => 'Data Export', 'user' => 'analyst@company.com', 'time' => '5 hours ago', 'status' => 'success']
                    ],
                    'securityScoreLabel' => 'Security Score',
                    'securityScore' => '98',
                    'securityScoreWidth' => '98%',
                    'securityFeatures' => [
                        'Encryption: Active',
                        'MFA: Available',
                        'Audit Logs: Enabled',
                        'RBAC: Configured'
                    ],
                    'certificationsTitle' => 'Industry-Leading Certifications',
                    'certifications' => [
                        ['icon' => 'shield', 'name' => 'SOC 2 Type II', 'description' => 'Security & Compliance'],
                        ['icon' => 'globe', 'name' => 'GDPR', 'description' => 'Data Protection'],
                        ['icon' => 'lock', 'name' => 'ISO 27001', 'description' => 'Security Management'],
                        ['icon' => 'server', 'name' => 'HIPAA', 'description' => 'Healthcare Compliance']
                    ],
                    'showCta' => true,
                    'ctaText' => 'Ready to secure your operations?',
                    'ctaPrimaryLink' => '/contact',
                    'ctaSecondaryLink' => '/security',
                    'ctaButton' => [
                        'primaryText' => 'Contact Security Team',
                        'primaryBackground' => 'bg-linear-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700',
                        'secondaryText' => 'Read Security Whitepaper'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 147,
                'section_key' => 'securityFeatures',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Enterprise Security',
                        'backgroundColor' => 'bg-emerald-50 dark:bg-emerald-900/30',
                        'borderColor' => 'border-emerald-200 dark:border-emerald-800',
                        'textColor' => 'text-emerald-700 dark:text-emerald-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Comprehensive',
                        'highlightedText' => 'Security Framework',
                        'suffix' => '',
                        'highlightGradient' => 'from-emerald-500 to-green-500'
                    ],
                    'description' => 'Enterprise-grade security with global compliance certifications, AI-powered threat detection, and 24/7 monitoring.',
                    'initialTab' => 'compliance',
                    'stats' => [
                        ['value' => '99.99%', 'label' => 'Uptime SLA'],
                        ['value' => '0', 'label' => 'Security Breaches'],
                        ['value' => '24/7', 'label' => 'Security Monitoring'],
                        ['value' => '100%', 'label' => 'Data Encryption']
                    ],
                    'features' => [
                        [
                            'id' => 1,
                            'icon' => 'shield',
                            'title' => 'Zero-Trust Architecture',
                            'description' => 'Never trust, always verify. Every request is authenticated and authorized.',
                            'details' => [
                                'Continuous verification',
                                'Least privilege access',
                                'Micro-segmentation',
                                'Real-time monitoring'
                            ],
                            'metrics' => [
                                ['value' => '100%', 'label' => 'Verification Rate'],
                                ['value' => '<50ms', 'label' => 'Auth Time']
                            ],
                            'link' => '/security/zero-trust',
                            'isNew' => true
                        ],
                        [
                            'id' => 2,
                            'icon' => 'chip',
                            'title' => 'AI Threat Detection',
                            'description' => 'Machine learning models that identify and respond to threats in real-time.',
                            'details' => [
                                'Anomaly detection',
                                'Behavioral analytics',
                                'Automated response',
                                'Threat intelligence'
                            ],
                            'metrics' => [
                                ['value' => '99.9%', 'label' => 'Detection Rate'],
                                ['value' => '<1s', 'label' => 'Response Time']
                            ],
                            'link' => '/security/ai-detection',
                            'isPopular' => true
                        ],
                        [
                            'id' => 3,
                            'icon' => 'lock',
                            'title' => 'Data Protection',
                            'description' => 'Military-grade encryption and data loss prevention.',
                            'details' => [
                                'AES-256 encryption',
                                'DLP policies',
                                'Backup & recovery',
                                'Data masking'
                            ],
                            'metrics' => [
                                ['value' => '256-bit', 'label' => 'Encryption'],
                                ['value' => 'RTO <15min', 'label' => 'Recovery']
                            ],
                            'link' => '/security/data-protection'
                        ]
                    ],
                    'showCompliance' => true,
                    'complianceTitle' => 'Global Compliance & Certifications',
                    'complianceDescription' => 'Meet the highest security and privacy standards worldwide',
                    'complianceStandards' => [
                        ['icon' => 'shield', 'name' => 'SOC 2 Type II', 'region' => 'Global'],
                        ['icon' => 'globe-alt', 'name' => 'GDPR', 'region' => 'Europe'],
                        ['icon' => 'shield', 'name' => 'CCPA', 'region' => 'California'],
                        ['icon' => 'server', 'name' => 'HIPAA', 'region' => 'Healthcare'],
                        ['icon' => 'lock', 'name' => 'ISO 27001', 'region' => 'Global'],
                        ['icon' => 'key', 'name' => 'PCI DSS', 'region' => 'Payments'],
                        ['icon' => 'office', 'name' => 'SOX', 'region' => 'Financial'],
                        ['icon' => 'cloud', 'name' => 'FedRAMP', 'region' => 'US Government']
                    ],
                    'securityCertifications' => [
                        ['icon' => 'shield', 'name' => 'SOC 2', 'type' => 'Type II'],
                        ['icon' => 'lock', 'name' => 'ISO 27001', 'type' => 'Certified'],
                        ['icon' => 'key', 'name' => 'PCI DSS', 'type' => 'Level 1'],
                        ['icon' => 'globe-alt', 'name' => 'GDPR', 'type' => 'Compliant'],
                        ['icon' => 'server', 'name' => 'HIPAA', 'type' => 'Compliant'],
                        ['icon' => 'cloud', 'name' => 'CSA STAR', 'type' => 'Level 2']
                    ],
                    'dataRegions' => [
                        ['icon' => 'globe-alt', 'name' => 'US East', 'location' => 'N. Virginia'],
                        ['icon' => 'globe-alt', 'name' => 'US West', 'location' => 'Oregon'],
                        ['icon' => 'globe-alt', 'name' => 'EU Central', 'location' => 'Frankfurt'],
                        ['icon' => 'globe-alt', 'name' => 'APAC', 'location' => 'Singapore'],
                        ['icon' => 'globe-alt', 'name' => 'UK', 'location' => 'London'],
                        ['icon' => 'globe-alt', 'name' => 'Canada', 'location' => 'Montreal']
                    ],
                    'showAIInsights' => true,
                    'aiInsightsTitle' => 'AI-Powered Security Intelligence',
                    'aiInsightsDescription' => 'Proactive threat detection and automated response',
                    'aiInsights' => [
                        [
                            'icon' => 'eye',
                            'title' => 'Real-time Monitoring',
                            'description' => 'Continuous scanning for anomalies and suspicious activities.',
                            'impact' => '99.9% threat detection rate'
                        ],
                        [
                            'icon' => 'sparkles',
                            'title' => 'Predictive Analytics',
                            'description' => 'AI predicts potential vulnerabilities before they\'re exploited.',
                            'impact' => '70% fewer security incidents'
                        ],
                        [
                            'icon' => 'clock',
                            'title' => 'Automated Response',
                            'description' => 'Instant containment and remediation of security threats.',
                            'impact' => '<1 minute response time'
                        ]
                    ],
                    'showArchitecture' => true,
                    'architectureTitle' => 'Zero-Trust Security Architecture',
                    'architectureDescription' => 'Never trust, always verify. Our security model ensures continuous validation at every access point.',
                    'architectureFeatures' => [
                        'Continuous authentication & authorization',
                        'Micro-segmentation & least privilege',
                        'End-to-end encryption for all traffic',
                        'Real-time monitoring & auditing'
                    ],
                    'securityLayers' => [
                        ['icon' => 'lock', 'name' => 'Identity', 'description' => 'MFA & SSO'],
                        ['icon' => 'shield', 'name' => 'Network', 'description' => 'Zero-trust'],
                        ['icon' => 'database', 'name' => 'Data', 'description' => 'Encryption'],
                        ['icon' => 'eye', 'name' => 'Monitoring', 'description' => '24/7 SOC']
                    ],
                    'showSupport' => true,
                    'supportTitle' => '24/7 Security Operations Center',
                    'supportDescription' => 'Our dedicated security team monitors and protects your data around the clock',
                    'securitySupport' => [
                        ['icon' => 'user', 'title' => 'Dedicated Team', 'description' => 'Security experts on call 24/7'],
                        ['icon' => 'phone', 'title' => 'Emergency Response', 'description' => '15-minute SLA for critical issues'],
                        ['icon' => 'chat', 'title' => 'Security Advisory', 'description' => 'Best practices & guidance']
                    ],
                    'showCta' => true,
                    'ctaText' => 'Ready to secure your operations?',
                    'ctaPrimaryLink' => '/security-contact',
                    'ctaSecondaryLink' => '/security-white-paper',
                    'ctaButton' => [
                        'primaryText' => 'Contact Security Team',
                        'primaryBackground' => 'bg-linear-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700',
                        'secondaryText' => 'Read White Paper'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 148,
                'section_key' => 'securityFeatures',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

        // Add the new FeatureP variants
        DB::table('section_variants')->upsert(
            $variants,
            ['section_key', 'variant'],
            ['config', 'updated_at']
        );
    }
}
