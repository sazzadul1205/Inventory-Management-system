<?php

namespace Database\Seeders\PageRelatedSeeders;

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
        ];

        // Add the new FeatureP variants
        DB::table('section_variants')->upsert(
            $variants,
            ['section_key', 'variant'],
            ['config', 'updated_at']
        );
    }
}
