<?php

namespace Database\Seeders\PageRelatedSeeders\SectionVariantSeeder;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MobileAppPageSectionVariantSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Upsert only this page's variants so other page seeders do not get wiped out.
        $variants = [

            // App Features Section
            [
                'id' => 585,
                'section_key' => 'appFeatures',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => 'Mobile Experience',
                    'title' => [
                        'prefix' => 'Powerful',
                        'highlight' => 'Features',
                        'suffix' => 'at Your Fingertips'
                    ],
                    'description' => 'Take full control of your supply chain from anywhere. Our mobile app delivers enterprise-grade functionality with a seamless, intuitive interface designed for on-the-go professionals.',
                    'heroImage' => 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=500&fit=crop',
                    'stats' => [
                        ['value' => '4.9', 'label' => 'App Store Rating', 'icon' => 'star'],
                        ['value' => '100K+', 'label' => 'Downloads', 'icon' => 'download'],
                        ['value' => '99.9%', 'label' => 'Uptime', 'icon' => 'clock'],
                        ['value' => '24/7', 'label' => 'Support', 'icon' => 'chat']
                    ],
                    'features' => [
                        [
                            'title' => 'Real-time Tracking',
                            'description' => 'Track shipments and inventory in real-time with live updates and push notifications.',
                            'icon' => 'globe',
                            'gradient' => 'from-blue-500 to-blue-600',
                            'details' => [
                                'Live shipment tracking with GPS',
                                'Inventory level monitoring',
                                'Push notifications for status changes',
                                'Estimated arrival times'
                            ],
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop'
                        ],
                        [
                            'title' => 'Offline Mode',
                            'description' => 'Access critical data and continue working even without an internet connection.',
                            'icon' => 'wifi',
                            'gradient' => 'from-emerald-500 to-emerald-600',
                            'details' => [
                                'Offline data synchronization',
                                'Cached inventory information',
                                'Scan barcodes offline',
                                'Auto-sync when connection restored'
                            ],
                            'image' => 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop'
                        ],
                        [
                            'title' => 'Barcode Scanning',
                            'description' => 'Quickly scan product barcodes using your device\'s camera for instant information.',
                            'icon' => 'photo',
                            'gradient' => 'from-purple-500 to-purple-600',
                            'details' => [
                                'Support for all major barcode types',
                                'Batch scanning capability',
                                'Real-time product lookup',
                                'Inventory count automation'
                            ],
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop'
                        ],
                        [
                            'title' => 'Analytics Dashboard',
                            'description' => 'View key metrics and performance indicators in a mobile-optimized dashboard.',
                            'icon' => 'chart',
                            'gradient' => 'from-amber-500 to-amber-600',
                            'details' => [
                                'Customizable KPIs',
                                'Interactive charts',
                                'Export reports',
                                'Trend analysis'
                            ],
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
                        ],
                        [
                            'title' => 'Team Collaboration',
                            'description' => 'Communicate and collaborate with team members directly within the app.',
                            'icon' => 'users',
                            'gradient' => 'from-rose-500 to-rose-600',
                            'details' => [
                                'Team messaging',
                                'Task assignment',
                                'File sharing',
                                'Activity feed'
                            ],
                            'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                        ],
                        [
                            'title' => 'Secure Access',
                            'description' => 'Enterprise-grade security with biometric authentication and data encryption.',
                            'icon' => 'shield',
                            'gradient' => 'from-indigo-500 to-indigo-600',
                            'details' => [
                                'Face ID / Fingerprint login',
                                'End-to-end encryption',
                                'Role-based access control',
                                'Session management'
                            ],
                            'image' => 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop'
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 586,
                'section_key' => 'appFeatures',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => 'Mobile Experience',
                    'title' => [
                        'prefix' => 'Powerful',
                        'highlight' => 'Features'
                    ],
                    'description' => 'Take full control of your supply chain from anywhere. Our mobile app delivers enterprise-grade functionality with a seamless, intuitive interface designed for on-the-go professionals.',
                    'heroImage' => 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=500&fit=crop',
                    'stats' => [
                        ['value' => '4.9', 'label' => 'App Store Rating', 'icon' => 'star', 'trend' => '5,000+ reviews', 'trendUp' => true],
                        ['value' => '100K+', 'label' => 'Downloads', 'icon' => 'download', 'trend' => '+25% this month', 'trendUp' => true],
                        ['value' => '99.9%', 'label' => 'Uptime', 'icon' => 'clock', 'trend' => 'Monthly average', 'trendUp' => true],
                        ['value' => '24/7', 'label' => 'Support', 'icon' => 'chat', 'trend' => 'Average 2-min response', 'trendUp' => true]
                    ],
                    'features' => [
                        [
                            'title' => 'Real-time Tracking',
                            'description' => 'Track shipments and inventory in real-time with live updates and push notifications.',
                            'icon' => 'globe',
                            'gradient' => 'from-blue-500 to-blue-600',
                            'category' => 'Tracking',
                            'metrics' => '2.5M+ shipments tracked',
                            'details' => [
                                'Live shipment tracking with GPS',
                                'Inventory level monitoring',
                                'Push notifications for status changes',
                                'Estimated arrival times'
                            ],
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop'
                        ],
                        [
                            'title' => 'Offline Mode',
                            'description' => 'Access critical data and continue working even without an internet connection.',
                            'icon' => 'wifi',
                            'gradient' => 'from-emerald-500 to-emerald-600',
                            'category' => 'Accessibility',
                            'metrics' => '100% uptime guaranteed',
                            'details' => [
                                'Offline data synchronization',
                                'Cached inventory information',
                                'Scan barcodes offline',
                                'Auto-sync when connection restored'
                            ],
                            'image' => 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop'
                        ],
                        [
                            'title' => 'Barcode Scanning',
                            'description' => 'Quickly scan product barcodes using your device\'s camera for instant information.',
                            'icon' => 'photo',
                            'gradient' => 'from-purple-500 to-purple-600',
                            'category' => 'Scanning',
                            'metrics' => '10K+ scans per day',
                            'details' => [
                                'Support for all major barcode types',
                                'Batch scanning capability',
                                'Real-time product lookup',
                                'Inventory count automation'
                            ],
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop'
                        ],
                        [
                            'title' => 'Analytics Dashboard',
                            'description' => 'View key metrics and performance indicators in a mobile-optimized dashboard.',
                            'icon' => 'chart',
                            'gradient' => 'from-amber-500 to-amber-600',
                            'category' => 'Analytics',
                            'metrics' => '50+ KPIs tracked',
                            'details' => [
                                'Customizable KPIs',
                                'Interactive charts',
                                'Export reports',
                                'Trend analysis'
                            ],
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
                        ],
                        [
                            'title' => 'Team Collaboration',
                            'description' => 'Communicate and collaborate with team members directly within the app.',
                            'icon' => 'users',
                            'gradient' => 'from-rose-500 to-rose-600',
                            'category' => 'Collaboration',
                            'metrics' => '1,000+ team messages daily',
                            'details' => [
                                'Team messaging',
                                'Task assignment',
                                'File sharing',
                                'Activity feed'
                            ],
                            'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                        ],
                        [
                            'title' => 'Secure Access',
                            'description' => 'Enterprise-grade security with biometric authentication and data encryption.',
                            'icon' => 'shield',
                            'gradient' => 'from-indigo-500 to-indigo-600',
                            'category' => 'Security',
                            'metrics' => 'SOC 2 compliant',
                            'details' => [
                                'Face ID / Fingerprint login',
                                'End-to-end encryption',
                                'Role-based access control',
                                'Session management'
                            ],
                            'image' => 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop'
                        ]
                    ],
                    'screenshots' => [
                        ['src' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=500&fit=crop', 'title' => 'Dashboard', 'description' => 'View key metrics at a glance'],
                        ['src' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=500&fit=crop', 'title' => 'Live Tracking', 'description' => 'Track shipments in real-time'],
                        ['src' => 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=500&fit=crop', 'title' => 'Barcode Scanner', 'description' => 'Scan products instantly'],
                        ['src' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=500&fit=crop', 'title' => 'Analytics', 'description' => 'Deep dive into your data']
                    ],
                    'reviews' => [
                        [
                            'name' => 'Sarah Johnson',
                            'rating' => 5,
                            'date' => 'March 15, 2024',
                            'comment' => 'This app has transformed how we manage our supply chain. The offline mode is a lifesaver when I\'m in the warehouse with poor connectivity.',
                            'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop',
                            'image' => 'https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?w=600&h=400&fit=crop'
                        ],
                        [
                            'name' => 'Michael Chen',
                            'rating' => 5,
                            'date' => 'March 10, 2024',
                            'comment' => 'The barcode scanning feature is incredibly fast and accurate. Saves us hours of manual data entry every day.',
                            'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop',
                            'image' => 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop'
                        ],
                        [
                            'name' => 'Emily Rodriguez',
                            'rating' => 4,
                            'date' => 'March 5, 2024',
                            'comment' => 'Great app overall. The analytics dashboard gives me all the insights I need at my fingertips.',
                            'avatar' => 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop',
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop'
                        ]
                    ],
                    'downloadLinks' => [
                        'ios' => 'https://apps.apple.com/app/id123456789',
                        'android' => 'https://play.google.com/store/apps/details?id=com.supplychainpro.app'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 587,
                'section_key' => 'appFeatures',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => 'Mobile Experience',
                    'title' => [
                        'prefix' => 'Powerful',
                        'highlight' => 'Features'
                    ],
                    'description' => 'Take full control of your supply chain from anywhere. Our mobile app delivers enterprise-grade functionality with a seamless, intuitive interface designed for on-the-go professionals.',
                    'heroImage' => 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=500&fit=crop',
                    'autoPlayCarousel' => true,
                    'stats' => [
                        ['value' => '4.9', 'label' => 'App Store Rating', 'icon' => 'star', 'trend' => '5,000+ reviews', 'trendUp' => true],
                        ['value' => '100K+', 'label' => 'Downloads', 'icon' => 'download', 'trend' => '+25% this month', 'trendUp' => true],
                        ['value' => '99.9%', 'label' => 'Uptime', 'icon' => 'clock', 'trend' => 'Monthly average', 'trendUp' => true],
                        ['value' => '24/7', 'label' => 'Support', 'icon' => 'chat', 'trend' => 'Average 2-min response', 'trendUp' => true]
                    ],
                    'features' => [
                        [
                            'title' => 'Real-time Tracking',
                            'description' => 'Track shipments and inventory in real-time with live updates and push notifications.',
                            'icon' => 'globe',
                            'gradient' => 'from-blue-500 to-blue-600',
                            'category' => 'Tracking',
                            'metrics' => '2.5M+ shipments tracked',
                            'details' => [
                                'Live shipment tracking with GPS',
                                'Inventory level monitoring',
                                'Push notifications for status changes',
                                'Estimated arrival times'
                            ],
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=500&fit=crop',
                            'isFeatured' => true
                        ],
                        [
                            'title' => 'Offline Mode',
                            'description' => 'Access critical data and continue working even without an internet connection.',
                            'icon' => 'wifi',
                            'gradient' => 'from-emerald-500 to-emerald-600',
                            'category' => 'Accessibility',
                            'metrics' => '100% uptime guaranteed',
                            'details' => [
                                'Offline data synchronization',
                                'Cached inventory information',
                                'Scan barcodes offline',
                                'Auto-sync when connection restored'
                            ],
                            'image' => 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop'
                        ],
                        [
                            'title' => 'Barcode Scanning',
                            'description' => 'Quickly scan product barcodes using your device\'s camera for instant information.',
                            'icon' => 'photo',
                            'gradient' => 'from-purple-500 to-purple-600',
                            'category' => 'Scanning',
                            'metrics' => '10K+ scans per day',
                            'details' => [
                                'Support for all major barcode types',
                                'Batch scanning capability',
                                'Real-time product lookup',
                                'Inventory count automation'
                            ],
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=500&fit=crop',
                            'isFeatured' => true
                        ],
                        [
                            'title' => 'Analytics Dashboard',
                            'description' => 'View key metrics and performance indicators in a mobile-optimized dashboard.',
                            'icon' => 'chart',
                            'gradient' => 'from-amber-500 to-amber-600',
                            'category' => 'Analytics',
                            'metrics' => '50+ KPIs tracked',
                            'details' => [
                                'Customizable KPIs',
                                'Interactive charts',
                                'Export reports',
                                'Trend analysis'
                            ],
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop'
                        ],
                        [
                            'title' => 'Team Collaboration',
                            'description' => 'Communicate and collaborate with team members directly within the app.',
                            'icon' => 'users',
                            'gradient' => 'from-rose-500 to-rose-600',
                            'category' => 'Collaboration',
                            'metrics' => '1,000+ team messages daily',
                            'details' => [
                                'Team messaging',
                                'Task assignment',
                                'File sharing',
                                'Activity feed'
                            ],
                            'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop',
                            'isFeatured' => true
                        ],
                        [
                            'title' => 'Secure Access',
                            'description' => 'Enterprise-grade security with biometric authentication and data encryption.',
                            'icon' => 'shield',
                            'gradient' => 'from-indigo-500 to-indigo-600',
                            'category' => 'Security',
                            'metrics' => 'SOC 2 compliant',
                            'details' => [
                                'Face ID / Fingerprint login',
                                'End-to-end encryption',
                                'Role-based access control',
                                'Session management'
                            ],
                            'image' => 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=500&fit=crop'
                        ]
                    ],
                    'downloadLinks' => [
                        'ios' => 'https://apps.apple.com/app/id123456789',
                        'android' => 'https://play.google.com/store/apps/details?id=com.supplychainpro.app'
                    ],
                    'formImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 588,
                'section_key' => 'appFeatures',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // iOS App Section
            [
                'id' => 589,
                'section_key' => 'iosApp',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => 'iOS App',
                    'title' => [
                        'prefix' => 'SupplyChainPro for',
                        'highlight' => 'iOS'
                    ],
                    'description' => 'Manage your entire supply chain from your iPhone, iPad, or Mac. Our native iOS app delivers the full power of SupplyChainPro with an intuitive interface optimized for Apple devices.',
                    'stats' => [
                        ['value' => '4.9', 'label' => 'App Store Rating', 'icon' => 'star'],
                        ['value' => '100K+', 'label' => 'Downloads', 'icon' => 'download'],
                        ['value' => '99.9%', 'label' => 'Uptime', 'icon' => 'clock'],
                        ['value' => '24/7', 'label' => 'Support', 'icon' => 'chat']
                    ],
                    'features' => [
                        [
                            'title' => 'Real-time Tracking',
                            'description' => 'Track shipments and inventory in real-time',
                            'icon' => 'globe'
                        ],
                        [
                            'title' => 'Offline Mode',
                            'description' => 'Work without internet connection',
                            'icon' => 'wifi'
                        ],
                        [
                            'title' => 'Barcode Scanning',
                            'description' => 'Scan products instantly',
                            'icon' => 'qrcode'
                        ],
                        [
                            'title' => 'Push Notifications',
                            'description' => 'Get instant alerts',
                            'icon' => 'bell'
                        ],
                        [
                            'title' => 'Secure Access',
                            'description' => 'Face ID & fingerprint login',
                            'icon' => 'shield'
                        ],
                        [
                            'title' => 'Analytics Dashboard',
                            'description' => 'View key metrics',
                            'icon' => 'chart'
                        ]
                    ],
                    'compatibility' => [
                        ['version' => 'iOS 15.0 or later', 'device' => 'iPhone, iPod touch', 'icon' => 'mobile'],
                        ['version' => 'iPadOS 15.0 or later', 'device' => 'iPad', 'icon' => 'tablet'],
                        ['version' => 'macOS 12.0 or later', 'device' => 'Mac with Apple M1 chip or later', 'icon' => 'desktop']
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 590,
                'section_key' => 'iosApp',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => 'iOS App',
                    'title' => [
                        'prefix' => 'SupplyChainPro for',
                        'highlight' => 'iOS'
                    ],
                    'description' => 'Take full control of your supply chain from your iPhone, iPad, or Mac. Our native iOS app delivers real-time tracking, offline access, and enterprise-grade security in a beautiful, intuitive interface.',
                    'stats' => [
                        ['value' => '4.9', 'label' => 'App Store Rating', 'icon' => 'star', 'trend' => '5,000+ reviews', 'trendUp' => true],
                        ['value' => '100K+', 'label' => 'Downloads', 'icon' => 'download', 'trend' => '+25% this month', 'trendUp' => true],
                        ['value' => '99.9%', 'label' => 'Uptime', 'icon' => 'clock', 'trend' => 'Monthly average', 'trendUp' => true],
                        ['value' => '24/7', 'label' => 'Support', 'icon' => 'chat', 'trend' => 'Average 2-min response', 'trendUp' => true]
                    ],
                    'features' => [
                        [
                            'title' => 'Real-time Tracking',
                            'description' => 'Track shipments and inventory in real-time with live updates and push notifications.',
                            'icon' => 'globe',
                            'gradient' => 'from-blue-500 to-blue-600',
                            'details' => [
                                'Live GPS tracking of shipments',
                                'Real-time inventory levels',
                                'Push notifications for status changes',
                                'ETA predictions and alerts'
                            ]
                        ],
                        [
                            'title' => 'Offline Mode',
                            'description' => 'Access critical data and continue working even without an internet connection.',
                            'icon' => 'wifi',
                            'gradient' => 'from-emerald-500 to-emerald-600',
                            'details' => [
                                'Offline data synchronization',
                                'Cached inventory information',
                                'Scan barcodes offline',
                                'Auto-sync when connection restored'
                            ]
                        ],
                        [
                            'title' => 'Barcode Scanning',
                            'description' => 'Quickly scan product barcodes using your device\'s camera for instant information.',
                            'icon' => 'qrcode',
                            'gradient' => 'from-purple-500 to-purple-600',
                            'details' => [
                                'Support for all major barcode types',
                                'Batch scanning capability',
                                'Real-time product lookup',
                                'Inventory count automation'
                            ]
                        ],
                        [
                            'title' => 'Analytics Dashboard',
                            'description' => 'View key metrics and performance indicators in a mobile-optimized dashboard.',
                            'icon' => 'chart',
                            'gradient' => 'from-amber-500 to-amber-600',
                            'details' => [
                                'Customizable KPIs',
                                'Interactive charts',
                                'Export reports',
                                'Trend analysis'
                            ]
                        ],
                        [
                            'title' => 'Team Collaboration',
                            'description' => 'Communicate and collaborate with team members directly within the app.',
                            'icon' => 'users',
                            'gradient' => 'from-rose-500 to-rose-600',
                            'details' => [
                                'Team messaging',
                                'Task assignment',
                                'File sharing',
                                'Activity feed'
                            ]
                        ],
                        [
                            'title' => 'Secure Access',
                            'description' => 'Enterprise-grade security with biometric authentication and data encryption.',
                            'icon' => 'shield',
                            'gradient' => 'from-indigo-500 to-indigo-600',
                            'details' => [
                                'Face ID / Touch ID login',
                                'End-to-end encryption',
                                'Role-based access control',
                                'Session management'
                            ]
                        ]
                    ],
                    'compatibility' => [
                        ['version' => 'iOS 15.0 or later', 'device' => 'iPhone, iPod touch', 'icon' => 'mobile'],
                        ['version' => 'iPadOS 15.0 or later', 'device' => 'iPad', 'icon' => 'tablet'],
                        ['version' => 'macOS 12.0 or later', 'device' => 'Mac with Apple M1 chip or later', 'icon' => 'desktop']
                    ],
                    'whatsNew' => [
                        ['version' => '3.0.0', 'date' => 'March 15, 2024', 'features' => ['Dark mode support', 'Widgets for home screen', 'Siri shortcuts integration', 'Performance improvements']],
                        ['version' => '2.5.0', 'date' => 'February 1, 2024', 'features' => ['Offline mode enhanced', 'Batch scanning added', 'Push notifications upgrade']],
                        ['version' => '2.0.0', 'date' => 'December 10, 2023', 'features' => ['Analytics dashboard', 'Team collaboration tools', 'Biometric authentication']]
                    ],
                    'reviews' => [
                        ['name' => 'Sarah Johnson', 'rating' => 5, 'title' => 'Game changer for our supply chain', 'comment' => 'This app has completely transformed how we manage our inventory. The offline mode is a lifesaver when I\'m in the warehouse.', 'date' => 'March 15, 2024'],
                        ['name' => 'Michael Chen', 'rating' => 5, 'title' => 'Best supply chain app on the App Store', 'comment' => 'The barcode scanning feature alone is worth the download. So fast and accurate!', 'date' => 'March 10, 2024'],
                        ['name' => 'Emily Rodriguez', 'rating' => 4, 'title' => 'Great app, keeps getting better', 'comment' => 'Love the new dark mode and widgets. The team is constantly improving the app.', 'date' => 'March 5, 2024']
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 591,
                'section_key' => 'iosApp',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => 'iOS App',
                    'title' => [
                        'prefix' => 'SupplyChainPro for',
                        'highlight' => 'iOS'
                    ],
                    'description' => 'Take full control of your supply chain from your iPhone, iPad, or Mac. Our native iOS app delivers real-time tracking, offline access, and enterprise-grade security in a beautiful, intuitive interface.',
                    'autoPlayCarousel' => true,
                    'stats' => [
                        ['value' => '4.9', 'label' => 'App Store Rating', 'icon' => 'star', 'trend' => '5,000+ reviews', 'trendUp' => true],
                        ['value' => '100K+', 'label' => 'Downloads', 'icon' => 'download', 'trend' => '+25% this month', 'trendUp' => true],
                        ['value' => '99.9%', 'label' => 'Uptime', 'icon' => 'clock', 'trend' => 'Monthly average', 'trendUp' => true],
                        ['value' => '24/7', 'label' => 'Support', 'icon' => 'chat', 'trend' => 'Average 2-min response', 'trendUp' => true]
                    ],
                    'features' => [
                        [
                            'title' => 'Real-time Tracking',
                            'description' => 'Track shipments and inventory in real-time with live updates and push notifications.',
                            'icon' => 'globe',
                            'gradient' => 'from-blue-500 to-blue-600',
                            'details' => [
                                'Live GPS tracking of shipments',
                                'Real-time inventory levels',
                                'Push notifications for status changes',
                                'ETA predictions and alerts'
                            ],
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
                            'videoUrl' => 'https://www.w3schools.com/html/mov_bbb.mp4'
                        ],
                        [
                            'title' => 'Offline Mode',
                            'description' => 'Access critical data and continue working even without an internet connection.',
                            'icon' => 'wifi',
                            'gradient' => 'from-emerald-500 to-emerald-600',
                            'details' => [
                                'Offline data synchronization',
                                'Cached inventory information',
                                'Scan barcodes offline',
                                'Auto-sync when connection restored'
                            ],
                            'image' => 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop'
                        ],
                        [
                            'title' => 'Barcode Scanning',
                            'description' => 'Quickly scan product barcodes using your device\'s camera for instant information.',
                            'icon' => 'qrcode',
                            'gradient' => 'from-purple-500 to-purple-600',
                            'details' => [
                                'Support for all major barcode types',
                                'Batch scanning capability',
                                'Real-time product lookup',
                                'Inventory count automation'
                            ],
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
                            'videoUrl' => 'https://www.w3schools.com/html/mov_bbb.mp4'
                        ],
                        [
                            'title' => 'Analytics Dashboard',
                            'description' => 'View key metrics and performance indicators in a mobile-optimized dashboard.',
                            'icon' => 'chart',
                            'gradient' => 'from-amber-500 to-amber-600',
                            'details' => [
                                'Customizable KPIs',
                                'Interactive charts',
                                'Export reports',
                                'Trend analysis'
                            ],
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
                        ],
                        [
                            'title' => 'Team Collaboration',
                            'description' => 'Communicate and collaborate with team members directly within the app.',
                            'icon' => 'users',
                            'gradient' => 'from-rose-500 to-rose-600',
                            'details' => [
                                'Team messaging',
                                'Task assignment',
                                'File sharing',
                                'Activity feed'
                            ],
                            'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop',
                            'videoUrl' => 'https://www.w3schools.com/html/mov_bbb.mp4'
                        ],
                        [
                            'title' => 'Secure Access',
                            'description' => 'Enterprise-grade security with biometric authentication and data encryption.',
                            'icon' => 'shield',
                            'gradient' => 'from-indigo-500 to-indigo-600',
                            'details' => [
                                'Face ID / Touch ID login',
                                'End-to-end encryption',
                                'Role-based access control',
                                'Session management'
                            ],
                            'image' => 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop'
                        ]
                    ],
                    'screenshots' => [
                        ['src' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=500&fit=crop', 'title' => 'Dashboard', 'description' => 'View key metrics at a glance'],
                        ['src' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=500&fit=crop', 'title' => 'Live Tracking', 'description' => 'Track shipments in real-time'],
                        ['src' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=500&fit=crop', 'title' => 'Barcode Scanner', 'description' => 'Scan products instantly'],
                        ['src' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=500&fit=crop', 'title' => 'Analytics', 'description' => 'Deep dive into your data'],
                        ['src' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=500&fit=crop', 'title' => 'Team Chat', 'description' => 'Collaborate with your team']
                    ],
                    'testimonials' => [
                        [
                            'name' => 'Sarah Johnson',
                            'role' => 'Supply Chain Director',
                            'company' => 'Global Retail Corp',
                            'quote' => 'The iOS app has transformed how we manage our supply chain. The offline mode is a lifesaver in our warehouses.',
                            'rating' => 5,
                            'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop',
                            'videoUrl' => 'https://www.w3schools.com/html/mov_bbb.mp4'
                        ],
                        [
                            'name' => 'Michael Chen',
                            'role' => 'Operations Manager',
                            'company' => 'HealthTech Solutions',
                            'quote' => 'Best supply chain app on the App Store. The barcode scanning feature alone saves us hours every day.',
                            'rating' => 5,
                            'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop'
                        ],
                        [
                            'name' => 'Emily Rodriguez',
                            'role' => 'Logistics Director',
                            'company' => 'EuroLogistics',
                            'quote' => 'The analytics dashboard gives me real-time visibility into our entire operation. Highly recommended!',
                            'rating' => 5,
                            'avatar' => 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop',
                            'videoUrl' => 'https://www.w3schools.com/html/mov_bbb.mp4'
                        ]
                    ],
                    'compatibility' => [
                        ['version' => 'iOS 15.0 or later', 'device' => 'iPhone, iPod touch', 'icon' => 'mobile'],
                        ['version' => 'iPadOS 15.0 or later', 'device' => 'iPad', 'icon' => 'tablet'],
                        ['version' => 'macOS 12.0 or later', 'device' => 'Mac with Apple M1 chip or later', 'icon' => 'desktop']
                    ],
                    'whatsNew' => [
                        ['version' => '3.0.0', 'date' => 'March 15, 2024', 'features' => ['Dark mode support', 'Widgets for home screen', 'Siri shortcuts integration', 'Performance improvements']],
                        ['version' => '2.5.0', 'date' => 'February 1, 2024', 'features' => ['Offline mode enhanced', 'Batch scanning added', 'Push notifications upgrade']],
                        ['version' => '2.0.0', 'date' => 'December 10, 2023', 'features' => ['Analytics dashboard', 'Team collaboration tools', 'Biometric authentication']]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 592,
                'section_key' => 'iosApp',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Android App Section
            [
                'id' => 593,
                'section_key' => 'androidApp',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => 'Android App',
                    'title' => [
                        'prefix' => 'SupplyChainPro for',
                        'highlight' => 'Android'
                    ],
                    'description' => 'Manage your entire supply chain from your Android phone, tablet, or Wear OS device. Our native Android app delivers the full power of SupplyChainPro with Material Design and seamless Google integration.',
                    'stats' => [
                        ['value' => '4.8', 'label' => 'Play Store Rating', 'icon' => 'star'],
                        ['value' => '500K+', 'label' => 'Downloads', 'icon' => 'download'],
                        ['value' => '99.9%', 'label' => 'Uptime', 'icon' => 'clock'],
                        ['value' => '24/7', 'label' => 'Support', 'icon' => 'chat']
                    ],
                    'features' => [
                        [
                            'title' => 'Real-time Tracking',
                            'description' => 'Track shipments and inventory in real-time',
                            'icon' => 'globe'
                        ],
                        [
                            'title' => 'Offline Mode',
                            'description' => 'Work without internet connection',
                            'icon' => 'wifi'
                        ],
                        [
                            'title' => 'Barcode Scanning',
                            'description' => 'Scan products instantly',
                            'icon' => 'qrcode'
                        ],
                        [
                            'title' => 'Push Notifications',
                            'description' => 'Get instant alerts',
                            'icon' => 'bell'
                        ],
                        [
                            'title' => 'Secure Access',
                            'description' => 'Biometric authentication',
                            'icon' => 'shield'
                        ],
                        [
                            'title' => 'Analytics Dashboard',
                            'description' => 'View key metrics',
                            'icon' => 'chart'
                        ]
                    ],
                    'compatibility' => [
                        ['version' => 'Android 8.0 (Oreo) or later', 'device' => 'Phones & Tablets', 'icon' => 'mobile'],
                        ['version' => 'Wear OS', 'device' => 'Smartwatches', 'icon' => 'watch'],
                        ['version' => 'Android Auto', 'device' => 'In-car support', 'icon' => 'car']
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 594,
                'section_key' => 'androidApp',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => 'Android App',
                    'title' => [
                        'prefix' => 'SupplyChainPro for',
                        'highlight' => 'Android'
                    ],
                    'description' => 'Manage your entire supply chain from your Android phone, tablet, or Wear OS device. Our native Android app delivers the full power of SupplyChainPro with Material Design and seamless Google integration.',
                    'stats' => [
                        ['value' => '4.8', 'label' => 'Play Store Rating', 'icon' => 'star', 'trend' => '50,000+ reviews', 'trendUp' => true],
                        ['value' => '500K+', 'label' => 'Downloads', 'icon' => 'download', 'trend' => '+50K this month', 'trendUp' => true],
                        ['value' => '99.9%', 'label' => 'Uptime', 'icon' => 'clock', 'trend' => 'Monthly average', 'trendUp' => true],
                        ['value' => '24/7', 'label' => 'Support', 'icon' => 'chat', 'trend' => 'Average 2-min response', 'trendUp' => true]
                    ],
                    'features' => [
                        [
                            'title' => 'Real-time Tracking',
                            'description' => 'Track shipments and inventory in real-time with live updates and push notifications.',
                            'icon' => 'globe',
                            'gradient' => 'from-green-500 to-green-600',
                            'category' => 'Tracking',
                            'details' => [
                                'Live GPS tracking of shipments',
                                'Real-time inventory levels',
                                'Push notifications for status changes',
                                'ETA predictions and alerts'
                            ]
                        ],
                        [
                            'title' => 'Offline Mode',
                            'description' => 'Access critical data and continue working even without an internet connection.',
                            'icon' => 'wifi',
                            'gradient' => 'from-teal-500 to-teal-600',
                            'category' => 'Accessibility',
                            'details' => [
                                'Offline data synchronization',
                                'Cached inventory information',
                                'Scan barcodes offline',
                                'Auto-sync when connection restored'
                            ]
                        ],
                        [
                            'title' => 'Barcode Scanning',
                            'description' => 'Quickly scan product barcodes using your device\'s camera for instant information.',
                            'icon' => 'qrcode',
                            'gradient' => 'from-emerald-500 to-emerald-600',
                            'category' => 'Scanning',
                            'details' => [
                                'Support for all major barcode types',
                                'Batch scanning capability',
                                'Real-time product lookup',
                                'Inventory count automation'
                            ]
                        ],
                        [
                            'title' => 'Analytics Dashboard',
                            'description' => 'View key metrics and performance indicators in a mobile-optimized dashboard.',
                            'icon' => 'chart',
                            'gradient' => 'from-cyan-500 to-cyan-600',
                            'category' => 'Analytics',
                            'details' => [
                                'Customizable KPIs',
                                'Interactive charts',
                                'Export reports',
                                'Trend analysis'
                            ]
                        ],
                        [
                            'title' => 'Team Collaboration',
                            'description' => 'Communicate and collaborate with team members directly within the app.',
                            'icon' => 'users',
                            'gradient' => 'from-blue-500 to-blue-600',
                            'category' => 'Collaboration',
                            'details' => [
                                'Team messaging',
                                'Task assignment',
                                'File sharing',
                                'Activity feed'
                            ]
                        ],
                        [
                            'title' => 'Secure Access',
                            'description' => 'Enterprise-grade security with biometric authentication and data encryption.',
                            'icon' => 'shield',
                            'gradient' => 'from-indigo-500 to-indigo-600',
                            'category' => 'Security',
                            'details' => [
                                'Fingerprint / Face unlock',
                                'End-to-end encryption',
                                'Role-based access control',
                                'Session management'
                            ]
                        ]
                    ],
                    'compatibility' => [
                        ['version' => 'Android 8.0 (Oreo) or later', 'device' => 'Phones & Tablets', 'icon' => 'mobile', 'gradient' => 'from-green-500 to-green-600'],
                        ['version' => 'Wear OS 3.0 or later', 'device' => 'Smartwatches', 'icon' => 'watch', 'gradient' => 'from-teal-500 to-teal-600'],
                        ['version' => 'Android Auto', 'device' => 'In-car support', 'icon' => 'car', 'gradient' => 'from-emerald-500 to-emerald-600']
                    ],
                    'whatsNew' => [
                        ['version' => '3.0.0', 'date' => 'March 15, 2024', 'features' => ['Material You design', 'Wear OS support', 'Android Auto integration', 'Performance improvements', 'Dark mode enhancements']],
                        ['version' => '2.5.0', 'date' => 'February 1, 2024', 'features' => ['Offline mode enhanced', 'Batch scanning added', 'Push notifications upgrade', 'Tablet layout improvements']],
                        ['version' => '2.0.0', 'date' => 'December 10, 2023', 'features' => ['Analytics dashboard', 'Team collaboration tools', 'Biometric authentication', 'Widget support']]
                    ],
                    'reviews' => [
                        [
                            'name' => 'Sarah Johnson',
                            'rating' => 5,
                            'title' => 'Best supply chain app on Android',
                            'comment' => 'This app has transformed how we manage our inventory. The offline mode is a lifesaver in our warehouses.',
                            'date' => 'March 15, 2024',
                            'verified' => true,
                            'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop'
                        ],
                        [
                            'name' => 'Michael Chen',
                            'rating' => 5,
                            'title' => 'Incredibly useful',
                            'comment' => 'The barcode scanning feature alone is worth the download. So fast and accurate!',
                            'date' => 'March 10, 2024',
                            'verified' => true,
                            'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop'
                        ],
                        [
                            'name' => 'Emily Rodriguez',
                            'rating' => 4,
                            'title' => 'Great app, keeps getting better',
                            'comment' => 'Love the Material Design and smooth animations. The team is constantly improving the app.',
                            'date' => 'March 5, 2024',
                            'verified' => true,
                            'avatar' => 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop'
                        ],
                        [
                            'name' => 'David Kim',
                            'rating' => 5,
                            'title' => 'Essential tool for supply chain',
                            'comment' => 'Real-time tracking and push notifications keep me updated on everything.',
                            'date' => 'February 28, 2024',
                            'verified' => true,
                            'avatar' => 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop'
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 595,
                'section_key' => 'androidApp',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => 'Android App',
                    'title' => [
                        'prefix' => 'SupplyChainPro for',
                        'highlight' => 'Android'
                    ],
                    'description' => 'Take full control of your supply chain from your Android phone, tablet, or Wear OS device. Our native Android app delivers real-time tracking, offline access, and enterprise-grade security with Material Design and seamless Google integration.',
                    'autoPlayCarousel' => true,
                    'stats' => [
                        ['value' => '4.8', 'label' => 'Play Store Rating', 'icon' => 'star', 'trend' => '50,000+ reviews', 'trendUp' => true],
                        ['value' => '500K+', 'label' => 'Downloads', 'icon' => 'download', 'trend' => '+50K this month', 'trendUp' => true],
                        ['value' => '99.9%', 'label' => 'Uptime', 'icon' => 'clock', 'trend' => 'Monthly average', 'trendUp' => true],
                        ['value' => '24/7', 'label' => 'Support', 'icon' => 'chat', 'trend' => 'Average 2-min response', 'trendUp' => true]
                    ],
                    'features' => [
                        [
                            'title' => 'Real-time Tracking',
                            'description' => 'Track shipments and inventory in real-time with live updates and push notifications.',
                            'icon' => 'globe',
                            'gradient' => 'from-green-500 to-green-600',
                            'category' => 'Tracking',
                            'details' => [
                                'Live GPS tracking of shipments',
                                'Real-time inventory levels',
                                'Push notifications for status changes',
                                'ETA predictions and alerts'
                            ],
                            'videoUrl' => 'https://www.w3schools.com/html/mov_bbb.mp4'
                        ],
                        [
                            'title' => 'Offline Mode',
                            'description' => 'Access critical data and continue working even without an internet connection.',
                            'icon' => 'wifi',
                            'gradient' => 'from-teal-500 to-teal-600',
                            'category' => 'Accessibility',
                            'details' => [
                                'Offline data synchronization',
                                'Cached inventory information',
                                'Scan barcodes offline',
                                'Auto-sync when connection restored'
                            ]
                        ],
                        [
                            'title' => 'Barcode Scanning',
                            'description' => 'Quickly scan product barcodes using your device\'s camera for instant information.',
                            'icon' => 'qrcode',
                            'gradient' => 'from-emerald-500 to-emerald-600',
                            'category' => 'Scanning',
                            'details' => [
                                'Support for all major barcode types',
                                'Batch scanning capability',
                                'Real-time product lookup',
                                'Inventory count automation'
                            ],
                            'videoUrl' => 'https://www.w3schools.com/html/mov_bbb.mp4'
                        ],
                        [
                            'title' => 'Analytics Dashboard',
                            'description' => 'View key metrics and performance indicators in a mobile-optimized dashboard.',
                            'icon' => 'chart',
                            'gradient' => 'from-cyan-500 to-cyan-600',
                            'category' => 'Analytics',
                            'details' => [
                                'Customizable KPIs',
                                'Interactive charts',
                                'Export reports',
                                'Trend analysis'
                            ]
                        ],
                        [
                            'title' => 'Team Collaboration',
                            'description' => 'Communicate and collaborate with team members directly within the app.',
                            'icon' => 'users',
                            'gradient' => 'from-blue-500 to-blue-600',
                            'category' => 'Collaboration',
                            'details' => [
                                'Team messaging',
                                'Task assignment',
                                'File sharing',
                                'Activity feed'
                            ],
                            'videoUrl' => 'https://www.w3schools.com/html/mov_bbb.mp4'
                        ],
                        [
                            'title' => 'Secure Access',
                            'description' => 'Enterprise-grade security with biometric authentication and data encryption.',
                            'icon' => 'shield',
                            'gradient' => 'from-indigo-500 to-indigo-600',
                            'category' => 'Security',
                            'details' => [
                                'Fingerprint / Face unlock',
                                'End-to-end encryption',
                                'Role-based access control',
                                'Session management'
                            ]
                        ]
                    ],
                    'screenshots' => [
                        ['src' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=500&fit=crop', 'title' => 'Dashboard', 'description' => 'View key metrics at a glance'],
                        ['src' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=500&fit=crop', 'title' => 'Live Tracking', 'description' => 'Track shipments in real-time'],
                        ['src' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=500&fit=crop', 'title' => 'Barcode Scanner', 'description' => 'Scan products instantly'],
                        ['src' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=500&fit=crop', 'title' => 'Analytics', 'description' => 'Deep dive into your data'],
                        ['src' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=500&fit=crop', 'title' => 'Team Chat', 'description' => 'Collaborate with your team'],
                        ['src' => 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=500&fit=crop', 'title' => 'Settings', 'description' => 'Customize your experience']
                    ],
                    'testimonials' => [
                        [
                            'name' => 'Sarah Johnson',
                            'role' => 'Supply Chain Director',
                            'company' => 'Global Retail Corp',
                            'quote' => 'The Android app has transformed how we manage our supply chain. The offline mode is a lifesaver in our warehouses.',
                            'rating' => 5,
                            'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop',
                            'videoUrl' => 'https://www.w3schools.com/html/mov_bbb.mp4'
                        ],
                        [
                            'name' => 'Michael Chen',
                            'role' => 'Operations Manager',
                            'company' => 'HealthTech Solutions',
                            'quote' => 'Best supply chain app on the Play Store. The barcode scanning feature alone saves us hours every day.',
                            'rating' => 5,
                            'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop'
                        ],
                        [
                            'name' => 'Emily Rodriguez',
                            'role' => 'Logistics Director',
                            'company' => 'EuroLogistics',
                            'quote' => 'The analytics dashboard gives me real-time visibility into our entire operation. Highly recommended!',
                            'rating' => 5,
                            'avatar' => 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop',
                            'videoUrl' => 'https://www.w3schools.com/html/mov_bbb.mp4'
                        ]
                    ],
                    'compatibility' => [
                        ['version' => 'Android 8.0 (Oreo) or later', 'device' => 'Phones & Tablets', 'icon' => 'mobile', 'gradient' => 'from-green-500 to-green-600'],
                        ['version' => 'Wear OS 3.0 or later', 'device' => 'Smartwatches', 'icon' => 'watch', 'gradient' => 'from-teal-500 to-teal-600'],
                        ['version' => 'Android Auto', 'device' => 'In-car support', 'icon' => 'car', 'gradient' => 'from-emerald-500 to-emerald-600']
                    ],
                    'whatsNew' => [
                        ['version' => '3.0.0', 'date' => 'March 15, 2024', 'features' => ['Material You design', 'Wear OS support', 'Android Auto integration', 'Performance improvements', 'Dark mode enhancements']],
                        ['version' => '2.5.0', 'date' => 'February 1, 2024', 'features' => ['Offline mode enhanced', 'Batch scanning added', 'Push notifications upgrade', 'Tablet layout improvements']],
                        ['version' => '2.0.0', 'date' => 'December 10, 2023', 'features' => ['Analytics dashboard', 'Team collaboration tools', 'Biometric authentication', 'Widget support']]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 596,
                'section_key' => 'androidApp',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Mobile Dashboard Section
            [
                'id' => 597,
                'section_key' => 'mobileDashboard',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => 'Mobile Dashboard',
                    'title' => [
                        'prefix' => 'Your Supply Chain',
                        'highlight' => 'At a Glance'
                    ],
                    'description' => 'Monitor key metrics, track shipments, and manage inventory from your mobile device. Get real-time insights wherever you are with our intuitive dashboard.',
                    'stats' => [
                        ['value' => '4.9', 'label' => 'App Rating', 'icon' => 'star'],
                        ['value' => '100K+', 'label' => 'Downloads', 'icon' => 'download'],
                        ['value' => '99.9%', 'label' => 'Uptime', 'icon' => 'clock'],
                        ['value' => '24/7', 'label' => 'Support', 'icon' => 'chat']
                    ],
                    'metrics' => [
                        [
                            'value' => '2,847',
                            'label' => 'Total Shipments',
                            'icon' => 'globe',
                            'change' => '+12.5%',
                            'changeUp' => true,
                            'gradient' => 'from-blue-500 to-blue-600'
                        ],
                        [
                            'value' => '156',
                            'label' => 'Active Orders',
                            'icon' => 'clock',
                            'change' => '+8.2%',
                            'changeUp' => true,
                            'gradient' => 'from-emerald-500 to-emerald-600'
                        ],
                        [
                            'value' => '98.5%',
                            'label' => 'On-Time Delivery',
                            'icon' => 'check',
                            'change' => '+2.1%',
                            'changeUp' => true,
                            'gradient' => 'from-purple-500 to-purple-600'
                        ],
                        [
                            'value' => '$2.4M',
                            'label' => 'Inventory Value',
                            'icon' => 'database',
                            'change' => '-3.2%',
                            'changeUp' => false,
                            'gradient' => 'from-amber-500 to-amber-600'
                        ]
                    ],
                    'recentActivity' => [
                        ['id' => 1, 'action' => 'Shipment #SC-12345 delivered', 'time' => '2 minutes ago', 'status' => 'completed', 'icon' => 'check'],
                        ['id' => 2, 'action' => 'Inventory updated for SKU-7890', 'time' => '15 minutes ago', 'status' => 'updated', 'icon' => 'refresh'],
                        ['id' => 3, 'action' => 'New order received #ORD-4567', 'time' => '1 hour ago', 'status' => 'pending', 'icon' => 'bell'],
                        ['id' => 4, 'action' => 'Shipment #SC-12346 in transit', 'time' => '3 hours ago', 'status' => 'in-progress', 'icon' => 'globe'],
                        ['id' => 5, 'action' => 'Stock alert: Low inventory for SKU-1234', 'time' => '5 hours ago', 'status' => 'alert', 'icon' => 'bell']
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 598,
                'section_key' => 'mobileDashboard',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => 'Mobile Dashboard',
                    'title' => [
                        'prefix' => 'Your Supply Chain',
                        'highlight' => 'At a Glance'
                    ],
                    'description' => 'Monitor key metrics, track shipments, and manage inventory from your mobile device. Get real-time insights wherever you are with our intuitive dashboard.',
                    'stats' => [
                        ['value' => '4.9', 'label' => 'App Rating', 'icon' => 'star', 'trend' => '5,000+ reviews', 'trendUp' => true],
                        ['value' => '100K+', 'label' => 'Downloads', 'icon' => 'download', 'trend' => '+25% this month', 'trendUp' => true],
                        ['value' => '99.9%', 'label' => 'Uptime', 'icon' => 'clock', 'trend' => 'Monthly average', 'trendUp' => true],
                        ['value' => '24/7', 'label' => 'Support', 'icon' => 'chat', 'trend' => 'Average 2-min response', 'trendUp' => true]
                    ],
                    'metrics' => [
                        [
                            'id' => 1,
                            'value' => '2,847',
                            'label' => 'Total Shipments',
                            'icon' => 'globe',
                            'change' => '+12.5%',
                            'changeUp' => true,
                            'gradient' => 'from-blue-500 to-blue-600',
                            'trend' => [1200, 1400, 1600, 1800, 2000, 2200, 2847],
                            'details' => 'Total shipments processed this month across all carriers and destinations.'
                        ],
                        [
                            'id' => 2,
                            'value' => '156',
                            'label' => 'Active Orders',
                            'icon' => 'clock',
                            'change' => '+8.2%',
                            'changeUp' => true,
                            'gradient' => 'from-emerald-500 to-emerald-600',
                            'trend' => [98, 105, 112, 120, 135, 148, 156],
                            'details' => 'Orders currently in progress across all fulfillment centers.'
                        ],
                        [
                            'id' => 3,
                            'value' => '98.5%',
                            'label' => 'On-Time Delivery',
                            'icon' => 'check',
                            'change' => '+2.1%',
                            'changeUp' => true,
                            'gradient' => 'from-purple-500 to-purple-600',
                            'trend' => [94.2, 95.1, 96.3, 97.0, 97.8, 98.2, 98.5],
                            'details' => 'Percentage of shipments delivered on or before promised date.'
                        ],
                        [
                            'id' => 4,
                            'value' => '$2.4M',
                            'label' => 'Inventory Value',
                            'icon' => 'database',
                            'change' => '-3.2%',
                            'changeUp' => false,
                            'gradient' => 'from-amber-500 to-amber-600',
                            'trend' => [2.8, 2.7, 2.6, 2.55, 2.5, 2.45, 2.4],
                            'details' => 'Current value of inventory across all warehouses.'
                        ]
                    ],
                    'shipmentStatus' => [
                        ['status' => 'Delivered', 'count' => 1847, 'percentage' => 65, 'color' => 'bg-emerald-500'],
                        ['status' => 'In Transit', 'count' => 642, 'percentage' => 22, 'color' => 'bg-blue-500'],
                        ['status' => 'Processing', 'count' => 234, 'percentage' => 8, 'color' => 'bg-amber-500'],
                        ['status' => 'Delayed', 'count' => 124, 'percentage' => 5, 'color' => 'bg-red-500']
                    ],
                    'recentShipments' => [
                        ['id' => 'SC-12345', 'destination' => 'Los Angeles, CA', 'status' => 'Delivered', 'date' => '2024-03-15', 'value' => '$2,450', 'carrier' => 'FedEx'],
                        ['id' => 'SC-12346', 'destination' => 'Chicago, IL', 'status' => 'In Transit', 'date' => '2024-03-15', 'value' => '$1,890', 'carrier' => 'UPS'],
                        ['id' => 'SC-12347', 'destination' => 'Houston, TX', 'status' => 'Processing', 'date' => '2024-03-14', 'value' => '$3,200', 'carrier' => 'DHL'],
                        ['id' => 'SC-12348', 'destination' => 'Phoenix, AZ', 'status' => 'Delivered', 'date' => '2024-03-14', 'value' => '$876', 'carrier' => 'FedEx'],
                        ['id' => 'SC-12349', 'destination' => 'Philadelphia, PA', 'status' => 'Delayed', 'date' => '2024-03-13', 'value' => '$4,500', 'carrier' => 'UPS']
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 599,
                'section_key' => 'mobileDashboard',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => 'Mobile Dashboard',
                    'title' => [
                        'prefix' => 'Your Supply Chain',
                        'highlight' => 'At a Glance'
                    ],
                    'description' => 'Monitor key metrics, track shipments, and manage inventory from your mobile device. Get real-time insights wherever you are with our intuitive dashboard.',
                    'autoPlayCarousel' => true,
                    'stats' => [
                        ['value' => '4.9', 'label' => 'App Rating', 'icon' => 'star', 'trend' => '5,000+ reviews', 'trendUp' => true],
                        ['value' => '100K+', 'label' => 'Downloads', 'icon' => 'download', 'trend' => '+25% this month', 'trendUp' => true],
                        ['value' => '99.9%', 'label' => 'Uptime', 'icon' => 'clock', 'trend' => 'Monthly average', 'trendUp' => true],
                        ['value' => '24/7', 'label' => 'Support', 'icon' => 'chat', 'trend' => 'Average 2-min response', 'trendUp' => true]
                    ],
                    'metrics' => [
                        [
                            'id' => 1,
                            'value' => '2,847',
                            'label' => 'Total Shipments',
                            'icon' => 'globe',
                            'change' => '+12.5%',
                            'changeUp' => true,
                            'gradient' => 'from-blue-500 to-blue-600',
                            'trend' => [1200, 1400, 1600, 1800, 2000, 2200, 2847],
                            'details' => 'Total shipments processed this month across all carriers and destinations.',
                            'videoUrl' => 'https://www.w3schools.com/html/mov_bbb.mp4'
                        ],
                        [
                            'id' => 2,
                            'value' => '156',
                            'label' => 'Active Orders',
                            'icon' => 'clock',
                            'change' => '+8.2%',
                            'changeUp' => true,
                            'gradient' => 'from-emerald-500 to-emerald-600',
                            'trend' => [98, 105, 112, 120, 135, 148, 156],
                            'details' => 'Orders currently in progress across all fulfillment centers.'
                        ],
                        [
                            'id' => 3,
                            'value' => '98.5%',
                            'label' => 'On-Time Delivery',
                            'icon' => 'check',
                            'change' => '+2.1%',
                            'changeUp' => true,
                            'gradient' => 'from-purple-500 to-purple-600',
                            'trend' => [94.2, 95.1, 96.3, 97.0, 97.8, 98.2, 98.5],
                            'details' => 'Percentage of shipments delivered on or before promised date.'
                        ],
                        [
                            'id' => 4,
                            'value' => '$2.4M',
                            'label' => 'Inventory Value',
                            'icon' => 'database',
                            'change' => '-3.2%',
                            'changeUp' => false,
                            'gradient' => 'from-amber-500 to-amber-600',
                            'trend' => [2.8, 2.7, 2.6, 2.55, 2.5, 2.45, 2.4],
                            'details' => 'Current value of inventory across all warehouses.'
                        ]
                    ],
                    'shipmentStatus' => [
                        ['status' => 'Delivered', 'count' => 1847, 'percentage' => 65, 'color' => 'bg-emerald-500'],
                        ['status' => 'In Transit', 'count' => 642, 'percentage' => 22, 'color' => 'bg-blue-500'],
                        ['status' => 'Processing', 'count' => 234, 'percentage' => 8, 'color' => 'bg-amber-500'],
                        ['status' => 'Delayed', 'count' => 124, 'percentage' => 5, 'color' => 'bg-red-500']
                    ],
                    'recentShipments' => [
                        ['id' => 'SC-12345', 'destination' => 'Los Angeles, CA', 'status' => 'Delivered', 'date' => '2024-03-15', 'value' => '$2,450', 'carrier' => 'FedEx'],
                        ['id' => 'SC-12346', 'destination' => 'Chicago, IL', 'status' => 'In Transit', 'date' => '2024-03-15', 'value' => '$1,890', 'carrier' => 'UPS'],
                        ['id' => 'SC-12347', 'destination' => 'Houston, TX', 'status' => 'Processing', 'date' => '2024-03-14', 'value' => '$3,200', 'carrier' => 'DHL'],
                        ['id' => 'SC-12348', 'destination' => 'Phoenix, AZ', 'status' => 'Delivered', 'date' => '2024-03-14', 'value' => '$876', 'carrier' => 'FedEx'],
                        ['id' => 'SC-12349', 'destination' => 'Philadelphia, PA', 'status' => 'Delayed', 'date' => '2024-03-13', 'value' => '$4,500', 'carrier' => 'UPS']
                    ],
                    'screenshots' => [
                        ['src' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop', 'title' => 'Dashboard Overview', 'description' => 'View all key metrics at a glance'],
                        ['src' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop', 'title' => 'Shipment Tracking', 'description' => 'Track shipments in real-time'],
                        ['src' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop', 'title' => 'Analytics', 'description' => 'Deep dive into performance data'],
                        ['src' => 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop', 'title' => 'Inventory Management', 'description' => 'Monitor stock levels']
                    ],
                    'testimonials' => [
                        [
                            'name' => 'Sarah Johnson',
                            'role' => 'Supply Chain Director',
                            'company' => 'Global Retail Corp',
                            'quote' => 'The mobile dashboard has transformed how I monitor our supply chain. Real-time data at my fingertips wherever I am.',
                            'rating' => 5,
                            'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop',
                            'videoUrl' => 'https://www.w3schools.com/html/mov_bbb.mp4'
                        ],
                        [
                            'name' => 'Michael Chen',
                            'role' => 'Operations Manager',
                            'company' => 'HealthTech Solutions',
                            'quote' => 'Being able to check shipment status and inventory levels from my phone has saved me countless hours.',
                            'rating' => 5,
                            'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop'
                        ],
                        [
                            'name' => 'Emily Rodriguez',
                            'role' => 'Logistics Director',
                            'company' => 'EuroLogistics',
                            'quote' => 'The analytics dashboard gives me real-time visibility into our entire operation. Highly recommended!',
                            'rating' => 5,
                            'avatar' => 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop'
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 600,
                'section_key' => 'mobileDashboard',
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
