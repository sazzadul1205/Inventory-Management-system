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

            // Barcode Scanning Section
            [
                'id' => 601,
                'section_key' => 'barcodeScanning',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => 'Scan & Go',
                    'title' => [
                        'prefix' => 'Scan, Track, and',
                        'highlight' => 'Manage'
                    ],
                    'description' => 'Transform your warehouse operations with lightning-fast barcode scanning. Scan products instantly, update inventory in real-time, and streamline your supply chain from any mobile device.',
                    'stats' => [
                        ['value' => '20+', 'label' => 'Barcode Formats', 'icon' => 'qrcode'],
                        ['value' => '10K+', 'label' => 'Scans per Day', 'icon' => 'bolt'],
                        ['value' => '99.9%', 'label' => 'Accuracy Rate', 'icon' => 'check'],
                        ['value' => '<1s', 'label' => 'Scan Time', 'icon' => 'clock']
                    ],
                    'features' => [
                        [
                            'title' => 'Instant Barcode Recognition',
                            'description' => 'Scan any barcode type instantly with your device\'s camera. Supports UPC, EAN, Code 128, QR codes, and more.',
                            'icon' => 'qrcode',
                            'gradient' => 'from-blue-500 to-blue-600',
                            'details' => [
                                'Supports 20+ barcode formats',
                                'Real-time recognition',
                                'Works in low light conditions',
                                'Auto-focus and zoom capabilities'
                            ]
                        ],
                        [
                            'title' => 'Batch Scanning Mode',
                            'description' => 'Scan multiple items in rapid succession for inventory counts and receiving operations.',
                            'icon' => 'bolt',
                            'gradient' => 'from-emerald-500 to-emerald-600',
                            'details' => [
                                'Continuous scanning mode',
                                'Audible feedback for each scan',
                                'Batch count tracking',
                                'Export scan history'
                            ]
                        ],
                        [
                            'title' => 'Product Information Lookup',
                            'description' => 'Get instant product details including pricing, stock levels, and location data.',
                            'icon' => 'database',
                            'gradient' => 'from-purple-500 to-purple-600',
                            'details' => [
                                'Real-time inventory data',
                                'Pricing and cost information',
                                'Warehouse location mapping',
                                'Product images and descriptions'
                            ]
                        ],
                        [
                            'title' => 'Offline Scanning',
                            'description' => 'Continue scanning even without an internet connection. Data syncs automatically when back online.',
                            'icon' => 'wifi',
                            'gradient' => 'from-amber-500 to-amber-600',
                            'details' => [
                                'Works without internet',
                                'Local data storage',
                                'Automatic sync on reconnect',
                                'No data loss guarantee'
                            ]
                        ],
                        [
                            'title' => 'Custom Actions',
                            'description' => 'Configure custom actions for scanned items like update inventory, create orders, or generate labels.',
                            'icon' => 'cog',
                            'gradient' => 'from-rose-500 to-rose-600',
                            'details' => [
                                'Workflow automation',
                                'Custom rule engine',
                                'Integration with existing systems',
                                'One-tap actions'
                            ]
                        ],
                        [
                            'title' => 'Scan History',
                            'description' => 'Access your complete scan history with timestamps, locations, and user information.',
                            'icon' => 'clock',
                            'gradient' => 'from-indigo-500 to-indigo-600',
                            'details' => [
                                'Unlimited history retention',
                                'Search and filter capabilities',
                                'Export to CSV/Excel',
                                'Audit trail for compliance'
                            ]
                        ]
                    ],
                    'barcodeTypes' => [
                        ['name' => 'UPC-A', 'icon' => 'qrcode', 'color' => 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'],
                        ['name' => 'EAN-13', 'icon' => 'qrcode', 'color' => 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400'],
                        ['name' => 'Code 128', 'icon' => 'qrcode', 'color' => 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400'],
                        ['name' => 'QR Code', 'icon' => 'qrcode', 'color' => 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'],
                        ['name' => 'Data Matrix', 'icon' => 'qrcode', 'color' => 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400'],
                        ['name' => 'PDF417', 'icon' => 'qrcode', 'color' => 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400']
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 602,
                'section_key' => 'barcodeScanning',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => 'Smart Scan',
                    'title' => [
                        'prefix' => 'Scan, Track, and',
                        'highlight' => 'Manage'
                    ],
                    'description' => 'Transform your warehouse operations with lightning-fast barcode scanning. Scan products instantly, update inventory in real-time, and streamline your supply chain from any mobile device.',
                    'stats' => [
                        ['value' => '20+', 'label' => 'Barcode Formats', 'icon' => 'qrcode', 'trend' => '+5 this year', 'trendUp' => true],
                        ['value' => '10K+', 'label' => 'Scans per Day', 'icon' => 'bolt', 'trend' => '+25%', 'trendUp' => true],
                        ['value' => '99.9%', 'label' => 'Accuracy Rate', 'icon' => 'check', 'trend' => 'Industry best', 'trendUp' => true],
                        ['value' => '<1s', 'label' => 'Scan Time', 'icon' => 'clock', 'trend' => 'Average', 'trendUp' => true]
                    ],
                    'features' => [
                        [
                            'id' => 1,
                            'title' => 'Instant Barcode Recognition',
                            'description' => 'Scan any barcode type instantly with your device\'s camera. Supports UPC, EAN, Code 128, QR codes, and more.',
                            'icon' => 'qrcode',
                            'gradient' => 'from-blue-500 to-blue-600',
                            'category' => 'Core',
                            'metrics' => '99.9% accuracy',
                            'details' => [
                                'Supports 20+ barcode formats',
                                'Real-time recognition',
                                'Works in low light conditions',
                                'Auto-focus and zoom capabilities'
                            ],
                            'videoUrl' => 'https://www.w3schools.com/html/mov_bbb.mp4'
                        ],
                        [
                            'id' => 2,
                            'title' => 'Batch Scanning Mode',
                            'description' => 'Scan multiple items in rapid succession for inventory counts and receiving operations.',
                            'icon' => 'bolt',
                            'gradient' => 'from-emerald-500 to-emerald-600',
                            'category' => 'Productivity',
                            'metrics' => '10K+ scans/day',
                            'details' => [
                                'Continuous scanning mode',
                                'Audible feedback for each scan',
                                'Batch count tracking',
                                'Export scan history'
                            ]
                        ],
                        [
                            'id' => 3,
                            'title' => 'Product Information Lookup',
                            'description' => 'Get instant product details including pricing, stock levels, and location data.',
                            'icon' => 'database',
                            'gradient' => 'from-purple-500 to-purple-600',
                            'category' => 'Data',
                            'metrics' => 'Real-time',
                            'details' => [
                                'Real-time inventory data',
                                'Pricing and cost information',
                                'Warehouse location mapping',
                                'Product images and descriptions'
                            ]
                        ],
                        [
                            'id' => 4,
                            'title' => 'Offline Scanning',
                            'description' => 'Continue scanning even without an internet connection. Data syncs automatically when back online.',
                            'icon' => 'wifi',
                            'gradient' => 'from-amber-500 to-amber-600',
                            'category' => 'Reliability',
                            'metrics' => '100% uptime',
                            'details' => [
                                'Works without internet',
                                'Local data storage',
                                'Automatic sync on reconnect',
                                'No data loss guarantee'
                            ]
                        ],
                        [
                            'id' => 5,
                            'title' => 'Custom Actions',
                            'description' => 'Configure custom actions for scanned items like update inventory, create orders, or generate labels.',
                            'icon' => 'cog',
                            'gradient' => 'from-rose-500 to-rose-600',
                            'category' => 'Automation',
                            'metrics' => '50+ actions',
                            'details' => [
                                'Workflow automation',
                                'Custom rule engine',
                                'Integration with existing systems',
                                'One-tap actions'
                            ]
                        ],
                        [
                            'id' => 6,
                            'title' => 'Scan History',
                            'description' => 'Access your complete scan history with timestamps, locations, and user information.',
                            'icon' => 'clock',
                            'gradient' => 'from-indigo-500 to-indigo-600',
                            'category' => 'Analytics',
                            'metrics' => 'Unlimited',
                            'details' => [
                                'Unlimited history retention',
                                'Search and filter capabilities',
                                'Export to CSV/Excel',
                                'Audit trail for compliance'
                            ]
                        ]
                    ],
                    'recentScans' => [
                        ['id' => 1, 'code' => 'PROD-ABC123', 'product' => 'Wireless Headphones', 'location' => 'Aisle 4, Shelf B', 'timestamp' => '2 minutes ago', 'format' => 'QR Code', 'status' => 'success'],
                        ['id' => 2, 'code' => 'PROD-DEF456', 'product' => 'USB-C Cable', 'location' => 'Aisle 2, Shelf D', 'timestamp' => '15 minutes ago', 'format' => 'UPC-A', 'status' => 'success'],
                        ['id' => 3, 'code' => 'PROD-GHI789', 'product' => 'Laptop Stand', 'location' => 'Aisle 5, Shelf A', 'timestamp' => '1 hour ago', 'format' => 'EAN-13', 'status' => 'success'],
                        ['id' => 4, 'code' => 'PROD-JKL012', 'product' => 'Wireless Mouse', 'location' => 'Aisle 2, Shelf C', 'timestamp' => '3 hours ago', 'format' => 'Code 128', 'status' => 'warning']
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 603,
                'section_key' => 'barcodeScanning',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => 'Smart Scan',
                    'title' => [
                        'prefix' => 'Scan, Track, and',
                        'highlight' => 'Manage'
                    ],
                    'description' => 'Transform your warehouse operations with lightning-fast barcode scanning. Scan products instantly, update inventory in real-time, and streamline your supply chain from any mobile device.',
                    'autoPlayCarousel' => true,
                    'stats' => [
                        ['value' => '20+', 'label' => 'Barcode Formats', 'icon' => 'qrcode', 'trend' => '+5 this year', 'trendUp' => true],
                        ['value' => '10K+', 'label' => 'Scans per Day', 'icon' => 'bolt', 'trend' => '+25%', 'trendUp' => true],
                        ['value' => '99.9%', 'label' => 'Accuracy Rate', 'icon' => 'check', 'trend' => 'Industry best', 'trendUp' => true],
                        ['value' => '<1s', 'label' => 'Scan Time', 'icon' => 'clock', 'trend' => 'Average', 'trendUp' => true]
                    ],
                    'features' => [
                        [
                            'id' => 1,
                            'title' => 'Instant Barcode Recognition',
                            'description' => 'Scan any barcode type instantly with your device\'s camera. Supports UPC, EAN, Code 128, QR codes, and more.',
                            'icon' => 'qrcode',
                            'gradient' => 'from-blue-500 to-blue-600',
                            'category' => 'Core',
                            'metrics' => '99.9% accuracy',
                            'details' => [
                                'Supports 20+ barcode formats',
                                'Real-time recognition',
                                'Works in low light conditions',
                                'Auto-focus and zoom capabilities'
                            ],
                            'videoUrl' => 'https://www.w3schools.com/html/mov_bbb.mp4'
                        ],
                        [
                            'id' => 2,
                            'title' => 'Batch Scanning Mode',
                            'description' => 'Scan multiple items in rapid succession for inventory counts and receiving operations.',
                            'icon' => 'bolt',
                            'gradient' => 'from-emerald-500 to-emerald-600',
                            'category' => 'Productivity',
                            'metrics' => '10K+ scans/day',
                            'details' => [
                                'Continuous scanning mode',
                                'Audible feedback for each scan',
                                'Batch count tracking',
                                'Export scan history'
                            ]
                        ],
                        [
                            'id' => 3,
                            'title' => 'Product Information Lookup',
                            'description' => 'Get instant product details including pricing, stock levels, and location data.',
                            'icon' => 'database',
                            'gradient' => 'from-purple-500 to-purple-600',
                            'category' => 'Data',
                            'metrics' => 'Real-time',
                            'details' => [
                                'Real-time inventory data',
                                'Pricing and cost information',
                                'Warehouse location mapping',
                                'Product images and descriptions'
                            ]
                        ],
                        [
                            'id' => 4,
                            'title' => 'Offline Scanning',
                            'description' => 'Continue scanning even without an internet connection. Data syncs automatically when back online.',
                            'icon' => 'wifi',
                            'gradient' => 'from-amber-500 to-amber-600',
                            'category' => 'Reliability',
                            'metrics' => '100% uptime',
                            'details' => [
                                'Works without internet',
                                'Local data storage',
                                'Automatic sync on reconnect',
                                'No data loss guarantee'
                            ]
                        ],
                        [
                            'id' => 5,
                            'title' => 'Custom Actions',
                            'description' => 'Configure custom actions for scanned items like update inventory, create orders, or generate labels.',
                            'icon' => 'cog',
                            'gradient' => 'from-rose-500 to-rose-600',
                            'category' => 'Automation',
                            'metrics' => '50+ actions',
                            'details' => [
                                'Workflow automation',
                                'Custom rule engine',
                                'Integration with existing systems',
                                'One-tap actions'
                            ]
                        ],
                        [
                            'id' => 6,
                            'title' => 'Scan History',
                            'description' => 'Access your complete scan history with timestamps, locations, and user information.',
                            'icon' => 'clock',
                            'gradient' => 'from-indigo-500 to-indigo-600',
                            'category' => 'Analytics',
                            'metrics' => 'Unlimited',
                            'details' => [
                                'Unlimited history retention',
                                'Search and filter capabilities',
                                'Export to CSV/Excel',
                                'Audit trail for compliance'
                            ]
                        ]
                    ],
                    'screenshots' => [
                        ['src' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop', 'title' => 'Scan View', 'description' => 'Point and scan interface'],
                        ['src' => 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop', 'title' => 'Batch Mode', 'description' => 'Scan multiple items quickly'],
                        ['src' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop', 'title' => 'Product Info', 'description' => 'Instant product details'],
                        ['src' => 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop', 'title' => 'Scan History', 'description' => 'Track all scans']
                    ],
                    'testimonials' => [
                        [
                            'name' => 'Sarah Johnson',
                            'role' => 'Warehouse Manager',
                            'company' => 'Global Retail Corp',
                            'quote' => 'The barcode scanning feature has revolutionized our inventory management. We\'ve reduced counting time by 70%.',
                            'rating' => 5,
                            'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop',
                            'videoUrl' => 'https://www.w3schools.com/html/mov_bbb.mp4'
                        ],
                        [
                            'name' => 'Michael Chen',
                            'role' => 'Operations Director',
                            'company' => 'HealthTech Solutions',
                            'quote' => 'Batch scanning mode is a game-changer for our receiving operations. So fast and accurate!',
                            'rating' => 5,
                            'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop'
                        ],
                        [
                            'name' => 'Emily Rodriguez',
                            'role' => 'Logistics Coordinator',
                            'company' => 'EuroLogistics',
                            'quote' => 'Offline scanning means we never miss a scan, even when our Wi-Fi is down. Perfect for warehouse environments.',
                            'rating' => 5,
                            'avatar' => 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop'
                        ]
                    ],
                    'recentScans' => [
                        ['id' => 1, 'code' => 'PROD-ABC123', 'product' => 'Wireless Headphones', 'location' => 'Aisle 4, Shelf B', 'timestamp' => '2 minutes ago', 'format' => 'QR Code', 'status' => 'success'],
                        ['id' => 2, 'code' => 'PROD-DEF456', 'product' => 'USB-C Cable', 'location' => 'Aisle 2, Shelf D', 'timestamp' => '15 minutes ago', 'format' => 'UPC-A', 'status' => 'success'],
                        ['id' => 3, 'code' => 'PROD-GHI789', 'product' => 'Laptop Stand', 'location' => 'Aisle 5, Shelf A', 'timestamp' => '1 hour ago', 'format' => 'EAN-13', 'status' => 'success'],
                        ['id' => 4, 'code' => 'PROD-JKL012', 'product' => 'Wireless Mouse', 'location' => 'Aisle 2, Shelf C', 'timestamp' => '3 hours ago', 'format' => 'Code 128', 'status' => 'warning']
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 604,
                'section_key' => 'barcodeScanning',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Push Notifications Section
            [
                'id' => 605,
                'section_key' => 'pushNotifications',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => 'Stay Connected',
                    'title' => [
                        'prefix' => 'Never Miss an',
                        'highlight' => 'Important Update'
                    ],
                    'description' => 'Get real-time push notifications for critical supply chain events. Stay informed about shipments, inventory levels, orders, and team activities — all directly on your mobile device.',
                    'stats' => [
                        ['value' => 'Real-time', 'label' => 'Delivery', 'icon' => 'bolt'],
                        ['value' => '99.9%', 'label' => 'Reliability', 'icon' => 'shield'],
                        ['value' => '10K+', 'label' => 'Notifications/day', 'icon' => 'bell'],
                        ['value' => 'Customizable', 'label' => 'Preferences', 'icon' => 'cog']
                    ],
                    'notificationTypes' => [
                        [
                            'title' => 'Shipment Updates',
                            'description' => 'Get real-time notifications when shipments are created, in transit, delivered, or delayed.',
                            'icon' => 'globe',
                            'gradient' => 'from-blue-500 to-blue-600',
                            'examples' => [
                                'Shipment #SC-12345 has been dispatched',
                                'Your package is out for delivery',
                                'Shipment #SC-12346 has been delivered'
                            ]
                        ],
                        [
                            'title' => 'Inventory Alerts',
                            'description' => 'Receive alerts when stock levels are low, items are restocked, or inventory counts are completed.',
                            'icon' => 'database',
                            'gradient' => 'from-emerald-500 to-emerald-600',
                            'examples' => [
                                'Low stock alert: SKU-1234 (only 5 left)',
                                'Inventory count completed for Warehouse A',
                                'New shipment received: +250 units'
                            ]
                        ],
                        [
                            'title' => 'Order Notifications',
                            'description' => 'Stay informed about new orders, order status changes, and fulfillment updates.',
                            'icon' => 'tag',
                            'gradient' => 'from-purple-500 to-purple-600',
                            'examples' => [
                                'New order #ORD-4567 received',
                                'Order #ORD-4567 has been processed',
                                'Order #ORD-4567 is ready for pickup'
                            ]
                        ],
                        [
                            'title' => 'System Alerts',
                            'description' => 'Get notified about system maintenance, updates, and important announcements.',
                            'icon' => 'cog',
                            'gradient' => 'from-amber-500 to-amber-600',
                            'examples' => [
                                'System maintenance scheduled for Sunday 2 AM',
                                'New feature: Batch scanning now available',
                                'API update: Version 2.0 released'
                            ]
                        ],
                        [
                            'title' => 'Team Activity',
                            'description' => 'Stay connected with team actions like task assignments, comments, and approvals.',
                            'icon' => 'users',
                            'gradient' => 'from-rose-500 to-rose-600',
                            'examples' => [
                                'Sarah assigned you a new task',
                                'Michael commented on your report',
                                'Emily approved your request'
                            ]
                        ],
                        [
                            'title' => 'Custom Alerts',
                            'description' => 'Create custom notification rules based on your specific business needs.',
                            'icon' => 'cog',
                            'gradient' => 'from-indigo-500 to-indigo-600',
                            'examples' => [
                                'Custom rule: High-value order alert',
                                'Temperature threshold exceeded',
                                'Delivery window approaching'
                            ]
                        ]
                    ],
                    'sampleNotifications' => [
                        ['id' => 1, 'type' => 'Shipment Updates', 'title' => 'Shipment Delivered', 'message' => 'Shipment #SC-12345 has been delivered successfully.', 'time' => '2 minutes ago', 'icon' => 'globe', 'read' => false],
                        ['id' => 2, 'type' => 'Inventory Alerts', 'title' => 'Low Stock Alert', 'message' => 'SKU-1234 is running low. Only 5 units remaining.', 'time' => '15 minutes ago', 'icon' => 'database', 'read' => false],
                        ['id' => 3, 'type' => 'Order Notifications', 'title' => 'New Order Received', 'message' => 'New order #ORD-4567 has been placed. Value: $2,450.', 'time' => '1 hour ago', 'icon' => 'tag', 'read' => true],
                        ['id' => 4, 'type' => 'System Alerts', 'title' => 'Maintenance Scheduled', 'message' => 'System maintenance scheduled for Sunday at 2 AM. Expected downtime: 30 minutes.', 'time' => '3 hours ago', 'icon' => 'cog', 'read' => true]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 606,
                'section_key' => 'pushNotifications',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => 'Stay Connected',
                    'title' => [
                        'prefix' => 'Never Miss an',
                        'highlight' => 'Important Update'
                    ],
                    'description' => 'Get real-time push notifications for critical supply chain events. Stay informed about shipments, inventory levels, orders, and team activities — all directly on your mobile device.',
                    'stats' => [
                        ['value' => 'Real-time', 'label' => 'Delivery', 'icon' => 'bolt', 'trend' => '< 1 second', 'trendUp' => true],
                        ['value' => '99.9%', 'label' => 'Reliability', 'icon' => 'shield', 'trend' => 'SLA guaranteed', 'trendUp' => true],
                        ['value' => '10K+', 'label' => 'Notifications/day', 'icon' => 'bell', 'trend' => 'Scalable', 'trendUp' => true],
                        ['value' => '100%', 'label' => 'Customizable', 'icon' => 'cog', 'trend' => 'Per user', 'trendUp' => true]
                    ],
                    'notificationTypes' => [
                        [
                            'id' => 'shipment',
                            'title' => 'Shipment Updates',
                            'description' => 'Get real-time notifications when shipments are created, in transit, delivered, or delayed.',
                            'icon' => 'globe',
                            'gradient' => 'from-blue-500 to-blue-600',
                            'category' => 'Logistics',
                            'enabled' => true,
                            'count' => 24,
                            'examples' => [
                                'Shipment #SC-12345 has been dispatched',
                                'Your package is out for delivery',
                                'Shipment #SC-12346 has been delivered'
                            ]
                        ],
                        [
                            'id' => 'inventory',
                            'title' => 'Inventory Alerts',
                            'description' => 'Receive alerts when stock levels are low, items are restocked, or inventory counts are completed.',
                            'icon' => 'database',
                            'gradient' => 'from-emerald-500 to-emerald-600',
                            'category' => 'Inventory',
                            'enabled' => true,
                            'count' => 12,
                            'examples' => [
                                'Low stock alert: SKU-1234 (only 5 left)',
                                'Inventory count completed for Warehouse A',
                                'New shipment received: +250 units'
                            ]
                        ],
                        [
                            'id' => 'order',
                            'title' => 'Order Notifications',
                            'description' => 'Stay informed about new orders, order status changes, and fulfillment updates.',
                            'icon' => 'tag',
                            'gradient' => 'from-purple-500 to-purple-600',
                            'category' => 'Orders',
                            'enabled' => true,
                            'count' => 18,
                            'examples' => [
                                'New order #ORD-4567 received',
                                'Order #ORD-4567 has been processed',
                                'Order #ORD-4567 is ready for pickup'
                            ]
                        ],
                        [
                            'id' => 'system',
                            'title' => 'System Alerts',
                            'description' => 'Get notified about system maintenance, updates, and important announcements.',
                            'icon' => 'cog',
                            'gradient' => 'from-amber-500 to-amber-600',
                            'category' => 'System',
                            'enabled' => false,
                            'count' => 3,
                            'examples' => [
                                'System maintenance scheduled for Sunday 2 AM',
                                'New feature: Batch scanning now available',
                                'API update: Version 2.0 released'
                            ]
                        ],
                        [
                            'id' => 'team',
                            'title' => 'Team Activity',
                            'description' => 'Stay connected with team actions like task assignments, comments, and approvals.',
                            'icon' => 'users',
                            'gradient' => 'from-rose-500 to-rose-600',
                            'category' => 'Collaboration',
                            'enabled' => true,
                            'count' => 8,
                            'examples' => [
                                'Sarah assigned you a new task',
                                'Michael commented on your report',
                                'Emily approved your request'
                            ]
                        ],
                        [
                            'id' => 'custom',
                            'title' => 'Custom Alerts',
                            'description' => 'Create custom notification rules based on your specific business needs.',
                            'icon' => 'cog',
                            'gradient' => 'from-indigo-500 to-indigo-600',
                            'category' => 'Custom',
                            'enabled' => false,
                            'count' => 0,
                            'examples' => [
                                'Custom rule: High-value order alert',
                                'Temperature threshold exceeded',
                                'Delivery window approaching'
                            ]
                        ]
                    ],
                    'recentNotifications' => [
                        ['id' => 1, 'type' => 'shipment', 'title' => 'Shipment Delivered', 'message' => 'Shipment #SC-12345 has been delivered successfully.', 'time' => '2 minutes ago', 'read' => false, 'priority' => 'high'],
                        ['id' => 2, 'type' => 'inventory', 'title' => 'Low Stock Alert', 'message' => 'SKU-1234 is running low. Only 5 units remaining.', 'time' => '15 minutes ago', 'read' => false, 'priority' => 'medium'],
                        ['id' => 3, 'type' => 'order', 'title' => 'New Order Received', 'message' => 'New order #ORD-4567 has been placed. Value: $2,450.', 'time' => '1 hour ago', 'read' => true, 'priority' => 'high'],
                        ['id' => 4, 'type' => 'system', 'title' => 'Maintenance Scheduled', 'message' => 'System maintenance scheduled for Sunday at 2 AM.', 'time' => '3 hours ago', 'read' => true, 'priority' => 'low'],
                        ['id' => 5, 'type' => 'team', 'title' => 'Task Assigned', 'message' => 'Sarah assigned you a new task: Review Q3 inventory report.', 'time' => '5 hours ago', 'read' => true, 'priority' => 'medium'],
                        ['id' => 6, 'type' => 'shipment', 'title' => 'Shipment Delayed', 'message' => 'Shipment #SC-12347 is delayed due to weather conditions.', 'time' => '1 day ago', 'read' => true, 'priority' => 'high']
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 607,
                'section_key' => 'pushNotifications',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => 'Stay Connected',
                    'title' => [
                        'prefix' => 'Never Miss an',
                        'highlight' => 'Important Update'
                    ],
                    'description' => 'Get real-time push notifications for critical supply chain events. Stay informed about shipments, inventory levels, orders, and team activities — all directly on your mobile device.',
                    'autoPlayCarousel' => true,
                    'stats' => [
                        ['value' => 'Real-time', 'label' => 'Delivery', 'icon' => 'bolt', 'trend' => '< 1 second', 'trendUp' => true],
                        ['value' => '99.9%', 'label' => 'Reliability', 'icon' => 'shield', 'trend' => 'SLA guaranteed', 'trendUp' => true],
                        ['value' => '10K+', 'label' => 'Notifications/day', 'icon' => 'bell', 'trend' => 'Scalable', 'trendUp' => true],
                        ['value' => '100%', 'label' => 'Customizable', 'icon' => 'cog', 'trend' => 'Per user', 'trendUp' => true]
                    ],
                    'notificationTypes' => [
                        [
                            'id' => 'shipment',
                            'title' => 'Shipment Updates',
                            'description' => 'Get real-time notifications when shipments are created, in transit, delivered, or delayed.',
                            'icon' => 'globe',
                            'gradient' => 'from-blue-500 to-blue-600',
                            'category' => 'Logistics',
                            'enabled' => true,
                            'count' => 24,
                            'examples' => [
                                'Shipment #SC-12345 has been dispatched',
                                'Your package is out for delivery',
                                'Shipment #SC-12346 has been delivered'
                            ],
                            'videoUrl' => 'https://www.w3schools.com/html/mov_bbb.mp4'
                        ],
                        [
                            'id' => 'inventory',
                            'title' => 'Inventory Alerts',
                            'description' => 'Receive alerts when stock levels are low, items are restocked, or inventory counts are completed.',
                            'icon' => 'database',
                            'gradient' => 'from-emerald-500 to-emerald-600',
                            'category' => 'Inventory',
                            'enabled' => true,
                            'count' => 12,
                            'examples' => [
                                'Low stock alert: SKU-1234 (only 5 left)',
                                'Inventory count completed for Warehouse A',
                                'New shipment received: +250 units'
                            ]
                        ],
                        [
                            'id' => 'order',
                            'title' => 'Order Notifications',
                            'description' => 'Stay informed about new orders, order status changes, and fulfillment updates.',
                            'icon' => 'tag',
                            'gradient' => 'from-purple-500 to-purple-600',
                            'category' => 'Orders',
                            'enabled' => true,
                            'count' => 18,
                            'examples' => [
                                'New order #ORD-4567 received',
                                'Order #ORD-4567 has been processed',
                                'Order #ORD-4567 is ready for pickup'
                            ]
                        ],
                        [
                            'id' => 'system',
                            'title' => 'System Alerts',
                            'description' => 'Get notified about system maintenance, updates, and important announcements.',
                            'icon' => 'cog',
                            'gradient' => 'from-amber-500 to-amber-600',
                            'category' => 'System',
                            'enabled' => false,
                            'count' => 3,
                            'examples' => [
                                'System maintenance scheduled for Sunday 2 AM',
                                'New feature: Batch scanning now available',
                                'API update: Version 2.0 released'
                            ]
                        ],
                        [
                            'id' => 'team',
                            'title' => 'Team Activity',
                            'description' => 'Stay connected with team actions like task assignments, comments, and approvals.',
                            'icon' => 'users',
                            'gradient' => 'from-rose-500 to-rose-600',
                            'category' => 'Collaboration',
                            'enabled' => true,
                            'count' => 8,
                            'examples' => [
                                'Sarah assigned you a new task',
                                'Michael commented on your report',
                                'Emily approved your request'
                            ]
                        ],
                        [
                            'id' => 'custom',
                            'title' => 'Custom Alerts',
                            'description' => 'Create custom notification rules based on your specific business needs.',
                            'icon' => 'cog',
                            'gradient' => 'from-indigo-500 to-indigo-600',
                            'category' => 'Custom',
                            'enabled' => false,
                            'count' => 0,
                            'examples' => [
                                'Custom rule: High-value order alert',
                                'Temperature threshold exceeded',
                                'Delivery window approaching'
                            ]
                        ]
                    ],
                    'screenshots' => [
                        ['src' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop', 'title' => 'Notification List', 'description' => 'View all your notifications'],
                        ['src' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop', 'title' => 'Notification Detail', 'description' => 'Detailed view with actions'],
                        ['src' => 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop', 'title' => 'Settings', 'description' => 'Customize your preferences'],
                        ['src' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop', 'title' => 'Filters', 'description' => 'Filter by type and priority']
                    ],
                    'testimonials' => [
                        [
                            'name' => 'Sarah Johnson',
                            'role' => 'Supply Chain Director',
                            'company' => 'Global Retail Corp',
                            'quote' => 'Push notifications keep me updated on critical shipments without having to constantly check the app. A game-changer for our operations.',
                            'rating' => 5,
                            'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop',
                            'videoUrl' => 'https://www.w3schools.com/html/mov_bbb.mp4'
                        ],
                        [
                            'name' => 'Michael Chen',
                            'role' => 'Operations Manager',
                            'company' => 'HealthTech Solutions',
                            'quote' => 'The customizable notification settings mean I only get alerts that matter to me. No more notification overload.',
                            'rating' => 5,
                            'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop'
                        ],
                        [
                            'name' => 'Emily Rodriguez',
                            'role' => 'Logistics Director',
                            'company' => 'EuroLogistics',
                            'quote' => 'Real-time alerts for delays and exceptions have helped us respond faster and keep customers informed.',
                            'rating' => 5,
                            'avatar' => 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop'
                        ]
                    ],
                    'recentNotifications' => [
                        ['id' => 1, 'type' => 'shipment', 'title' => 'Shipment Delivered', 'message' => 'Shipment #SC-12345 has been delivered successfully.', 'time' => '2 minutes ago', 'read' => false, 'priority' => 'high'],
                        ['id' => 2, 'type' => 'inventory', 'title' => 'Low Stock Alert', 'message' => 'SKU-1234 is running low. Only 5 units remaining.', 'time' => '15 minutes ago', 'read' => false, 'priority' => 'medium'],
                        ['id' => 3, 'type' => 'order', 'title' => 'New Order Received', 'message' => 'New order #ORD-4567 has been placed. Value: $2,450.', 'time' => '1 hour ago', 'read' => true, 'priority' => 'high'],
                        ['id' => 4, 'type' => 'system', 'title' => 'Maintenance Scheduled', 'message' => 'System maintenance scheduled for Sunday at 2 AM.', 'time' => '3 hours ago', 'read' => true, 'priority' => 'low'],
                        ['id' => 5, 'type' => 'team', 'title' => 'Task Assigned', 'message' => 'Sarah assigned you a new task: Review Q3 inventory report.', 'time' => '5 hours ago', 'read' => true, 'priority' => 'medium'],
                        ['id' => 6, 'type' => 'shipment', 'title' => 'Shipment Delayed', 'message' => 'Shipment #SC-12347 is delayed due to weather conditions.', 'time' => '1 day ago', 'read' => true, 'priority' => 'high']
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 608,
                'section_key' => 'pushNotifications',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Offline Mode Section
            [
                'id' => 609,
                'section_key' => 'offlineMode',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => 'Work Offline',
                    'title' => [
                        'prefix' => 'Stay Productive',
                        'highlight' => 'Anywhere, Anytime'
                    ],
                    'description' => 'Never let a poor connection stop you from getting work done. Our mobile app works seamlessly offline — access data, scan barcodes, and manage orders even without internet. Everything syncs automatically when you\'re back online.',
                    'stats' => [
                        ['value' => '100%', 'label' => 'Uptime Guarantee', 'icon' => 'clock'],
                        ['value' => 'Auto', 'label' => 'Sync', 'icon' => 'refresh'],
                        ['value' => '256-bit', 'label' => 'Encryption', 'icon' => 'shield'],
                        ['value' => 'Unlimited', 'label' => 'Offline Storage', 'icon' => 'database']
                    ],
                    'features' => [
                        [
                            'title' => 'Offline Data Access',
                            'description' => 'Access critical data like inventory levels, shipment status, and customer information even without internet connection.',
                            'icon' => 'database',
                            'gradient' => 'from-blue-500 to-blue-600',
                            'details' => [
                                'View cached inventory data',
                                'Access shipment information',
                                'Review customer details',
                                'Check product specifications'
                            ]
                        ],
                        [
                            'title' => 'Offline Scanning',
                            'description' => 'Continue scanning barcodes and QR codes even when offline. Data is stored locally and synced when connection returns.',
                            'icon' => 'qrcode',
                            'gradient' => 'from-emerald-500 to-emerald-600',
                            'details' => [
                                'Scan barcodes offline',
                                'Batch scanning support',
                                'Local data storage',
                                'Auto-sync when online'
                            ]
                        ],
                        [
                            'title' => 'Offline Order Management',
                            'description' => 'Create and manage orders offline. All changes are queued and synchronized automatically.',
                            'icon' => 'tag',
                            'gradient' => 'from-purple-500 to-purple-600',
                            'details' => [
                                'Create new orders',
                                'Update existing orders',
                                'Add order items',
                                'Sync when connected'
                            ]
                        ],
                        [
                            'title' => 'Automatic Sync',
                            'description' => 'Changes made offline are automatically synchronized when your device reconnects to the internet.',
                            'icon' => 'refresh',
                            'gradient' => 'from-amber-500 to-amber-600',
                            'details' => [
                                'Background sync',
                                'Conflict resolution',
                                'Sync status indicators',
                                'Manual sync option'
                            ]
                        ],
                        [
                            'title' => 'Offline Search',
                            'description' => 'Search through cached data to find products, shipments, and orders without an internet connection.',
                            'icon' => 'search',
                            'gradient' => 'from-rose-500 to-rose-600',
                            'details' => [
                                'Product search',
                                'Shipment tracking',
                                'Order lookup',
                                'Customer search'
                            ]
                        ],
                        [
                            'title' => 'Data Encryption',
                            'description' => 'All offline data is encrypted on your device to ensure security and privacy.',
                            'icon' => 'shield',
                            'gradient' => 'from-indigo-500 to-indigo-600',
                            'details' => [
                                'AES-256 encryption',
                                'Secure local storage',
                                'Biometric access',
                                'Auto-clear on logout'
                            ]
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 610,
                'section_key' => 'offlineMode',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => 'Work Offline',
                    'title' => [
                        'prefix' => 'Stay Productive',
                        'highlight' => 'Anywhere, Anytime'
                    ],
                    'description' => 'Never let a poor connection stop you from getting work done. Our mobile app works seamlessly offline — access data, scan barcodes, and manage orders even without internet. Everything syncs automatically when you\'re back online.',
                    'stats' => [
                        ['value' => '100%', 'label' => 'Uptime Guarantee', 'icon' => 'clock', 'trend' => 'SLA backed', 'trendUp' => true],
                        ['value' => 'Auto', 'label' => 'Sync', 'icon' => 'refresh', 'trend' => 'Background', 'trendUp' => true],
                        ['value' => '256-bit', 'label' => 'Encryption', 'icon' => 'shield', 'trend' => 'Military grade', 'trendUp' => true],
                        ['value' => 'Unlimited', 'label' => 'Offline Storage', 'icon' => 'database', 'trend' => 'Scalable', 'trendUp' => true]
                    ],
                    'features' => [
                        [
                            'id' => 1,
                            'title' => 'Offline Data Access',
                            'description' => 'Access critical data like inventory levels, shipment status, and customer information even without internet connection.',
                            'icon' => 'database',
                            'gradient' => 'from-blue-500 to-blue-600',
                            'category' => 'Data',
                            'metrics' => '100% cached',
                            'details' => [
                                'View cached inventory data',
                                'Access shipment information',
                                'Review customer details',
                                'Check product specifications'
                            ],
                            'status' => 'available'
                        ],
                        [
                            'id' => 2,
                            'title' => 'Offline Scanning',
                            'description' => 'Continue scanning barcodes and QR codes even when offline. Data is stored locally and synced when connection returns.',
                            'icon' => 'qrcode',
                            'gradient' => 'from-emerald-500 to-emerald-600',
                            'category' => 'Scanning',
                            'metrics' => '10K+ scans',
                            'details' => [
                                'Scan barcodes offline',
                                'Batch scanning support',
                                'Local data storage',
                                'Auto-sync when online'
                            ],
                            'status' => 'available'
                        ],
                        [
                            'id' => 3,
                            'title' => 'Offline Order Management',
                            'description' => 'Create and manage orders offline. All changes are queued and synchronized automatically.',
                            'icon' => 'tag',
                            'gradient' => 'from-purple-500 to-purple-600',
                            'category' => 'Orders',
                            'metrics' => '100% reliable',
                            'details' => [
                                'Create new orders',
                                'Update existing orders',
                                'Add order items',
                                'Sync when connected'
                            ],
                            'status' => 'available'
                        ],
                        [
                            'id' => 4,
                            'title' => 'Automatic Sync',
                            'description' => 'Changes made offline are automatically synchronized when your device reconnects to the internet.',
                            'icon' => 'refresh',
                            'gradient' => 'from-amber-500 to-amber-600',
                            'category' => 'Sync',
                            'metrics' => 'Background',
                            'details' => [
                                'Background sync',
                                'Conflict resolution',
                                'Sync status indicators',
                                'Manual sync option'
                            ],
                            'status' => 'available'
                        ],
                        [
                            'id' => 5,
                            'title' => 'Offline Search',
                            'description' => 'Search through cached data to find products, shipments, and orders without an internet connection.',
                            'icon' => 'search',
                            'gradient' => 'from-rose-500 to-rose-600',
                            'category' => 'Search',
                            'metrics' => 'Instant',
                            'details' => [
                                'Product search',
                                'Shipment tracking',
                                'Order lookup',
                                'Customer search'
                            ],
                            'status' => 'available'
                        ],
                        [
                            'id' => 6,
                            'title' => 'Data Encryption',
                            'description' => 'All offline data is encrypted on your device to ensure security and privacy.',
                            'icon' => 'shield',
                            'gradient' => 'from-indigo-500 to-indigo-600',
                            'category' => 'Security',
                            'metrics' => '256-bit',
                            'details' => [
                                'AES-256 encryption',
                                'Secure local storage',
                                'Biometric access',
                                'Auto-clear on logout'
                            ],
                            'status' => 'available'
                        ]
                    ],
                    'cachedData' => [
                        ['type' => 'Products', 'count' => '2,847', 'size' => '45 MB', 'lastSync' => '2 minutes ago'],
                        ['type' => 'Shipments', 'count' => '1,234', 'size' => '28 MB', 'lastSync' => '5 minutes ago'],
                        ['type' => 'Orders', 'count' => '567', 'size' => '12 MB', 'lastSync' => '10 minutes ago'],
                        ['type' => 'Customers', 'count' => '892', 'size' => '18 MB', 'lastSync' => '15 minutes ago']
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 611,
                'section_key' => 'offlineMode',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => 'Work Offline',
                    'title' => [
                        'prefix' => 'Stay Productive',
                        'highlight' => 'Anywhere, Anytime'
                    ],
                    'description' => 'Never let a poor connection stop you from getting work done. Our mobile app works seamlessly offline — access data, scan barcodes, and manage orders even without internet. Everything syncs automatically when you\'re back online.',
                    'autoPlayCarousel' => true,
                    'stats' => [
                        ['value' => '100%', 'label' => 'Uptime Guarantee', 'icon' => 'clock', 'trend' => 'SLA backed', 'trendUp' => true],
                        ['value' => 'Auto', 'label' => 'Sync', 'icon' => 'refresh', 'trend' => 'Background', 'trendUp' => true],
                        ['value' => '256-bit', 'label' => 'Encryption', 'icon' => 'shield', 'trend' => 'Military grade', 'trendUp' => true],
                        ['value' => 'Unlimited', 'label' => 'Offline Storage', 'icon' => 'database', 'trend' => 'Scalable', 'trendUp' => true]
                    ],
                    'features' => [
                        [
                            'id' => 1,
                            'title' => 'Offline Data Access',
                            'description' => 'Access critical data like inventory levels, shipment status, and customer information even without internet connection.',
                            'icon' => 'database',
                            'gradient' => 'from-blue-500 to-blue-600',
                            'category' => 'Data',
                            'metrics' => '100% cached',
                            'details' => [
                                'View cached inventory data',
                                'Access shipment information',
                                'Review customer details',
                                'Check product specifications'
                            ],
                            'videoUrl' => 'https://www.w3schools.com/html/mov_bbb.mp4'
                        ],
                        [
                            'id' => 2,
                            'title' => 'Offline Scanning',
                            'description' => 'Continue scanning barcodes and QR codes even when offline. Data is stored locally and synced when connection returns.',
                            'icon' => 'qrcode',
                            'gradient' => 'from-emerald-500 to-emerald-600',
                            'category' => 'Scanning',
                            'metrics' => '10K+ scans',
                            'details' => [
                                'Scan barcodes offline',
                                'Batch scanning support',
                                'Local data storage',
                                'Auto-sync when online'
                            ]
                        ],
                        [
                            'id' => 3,
                            'title' => 'Offline Order Management',
                            'description' => 'Create and manage orders offline. All changes are queued and synchronized automatically.',
                            'icon' => 'tag',
                            'gradient' => 'from-purple-500 to-purple-600',
                            'category' => 'Orders',
                            'metrics' => '100% reliable',
                            'details' => [
                                'Create new orders',
                                'Update existing orders',
                                'Add order items',
                                'Sync when connected'
                            ]
                        ],
                        [
                            'id' => 4,
                            'title' => 'Automatic Sync',
                            'description' => 'Changes made offline are automatically synchronized when your device reconnects to the internet.',
                            'icon' => 'refresh',
                            'gradient' => 'from-amber-500 to-amber-600',
                            'category' => 'Sync',
                            'metrics' => 'Background',
                            'details' => [
                                'Background sync',
                                'Conflict resolution',
                                'Sync status indicators',
                                'Manual sync option'
                            ]
                        ],
                        [
                            'id' => 5,
                            'title' => 'Offline Search',
                            'description' => 'Search through cached data to find products, shipments, and orders without an internet connection.',
                            'icon' => 'search',
                            'gradient' => 'from-rose-500 to-rose-600',
                            'category' => 'Search',
                            'metrics' => 'Instant',
                            'details' => [
                                'Product search',
                                'Shipment tracking',
                                'Order lookup',
                                'Customer search'
                            ]
                        ],
                        [
                            'id' => 6,
                            'title' => 'Data Encryption',
                            'description' => 'All offline data is encrypted on your device to ensure security and privacy.',
                            'icon' => 'shield',
                            'gradient' => 'from-indigo-500 to-indigo-600',
                            'category' => 'Security',
                            'metrics' => '256-bit',
                            'details' => [
                                'AES-256 encryption',
                                'Secure local storage',
                                'Biometric access',
                                'Auto-clear on logout'
                            ]
                        ]
                    ],
                    'screenshots' => [
                        ['src' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop', 'title' => 'Offline Mode Active', 'description' => 'Work without internet connection'],
                        ['src' => 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop', 'title' => 'Sync Queue', 'description' => 'Track pending changes'],
                        ['src' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop', 'title' => 'Cached Data', 'description' => 'View offline-available data'],
                        ['src' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop', 'title' => 'Offline Scanning', 'description' => 'Scan barcodes offline']
                    ],
                    'testimonials' => [
                        [
                            'name' => 'Sarah Johnson',
                            'role' => 'Warehouse Manager',
                            'company' => 'Global Retail Corp',
                            'quote' => 'Offline mode has been a game-changer for our warehouse operations. We can keep scanning even when our Wi-Fi goes down.',
                            'rating' => 5,
                            'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop',
                            'videoUrl' => 'https://www.w3schools.com/html/mov_bbb.mp4'
                        ],
                        [
                            'name' => 'Michael Chen',
                            'role' => 'Operations Director',
                            'company' => 'HealthTech Solutions',
                            'quote' => 'The automatic sync feature is flawless. I never have to worry about losing data when connectivity is poor.',
                            'rating' => 5,
                            'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop'
                        ],
                        [
                            'name' => 'Emily Rodriguez',
                            'role' => 'Logistics Coordinator',
                            'company' => 'EuroLogistics',
                            'quote' => 'Being able to access cached inventory data offline has saved us countless hours of downtime.',
                            'rating' => 5,
                            'avatar' => 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop'
                        ]
                    ],
                    'cachedData' => [
                        ['type' => 'Products', 'count' => '2,847', 'size' => '45 MB', 'lastSync' => '2 minutes ago'],
                        ['type' => 'Shipments', 'count' => '1,234', 'size' => '28 MB', 'lastSync' => '5 minutes ago'],
                        ['type' => 'Orders', 'count' => '567', 'size' => '12 MB', 'lastSync' => '10 minutes ago'],
                        ['type' => 'Customers', 'count' => '892', 'size' => '18 MB', 'lastSync' => '15 minutes ago']
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 612,
                'section_key' => 'offlineMode',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // App Store Links Section
            [
                'id' => 613,
                'section_key' => 'appStoreLinks',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => 'Download Now',
                    'title' => [
                        'prefix' => 'Get Started with',
                        'highlight' => 'SupplyChainPro'
                    ],
                    'description' => 'Take full control of your supply chain from anywhere. Download our mobile app for iOS and Android devices and experience powerful supply chain management on the go.',
                    'stats' => [
                        ['value' => '4.9', 'label' => 'App Store Rating', 'icon' => 'star', 'store' => 'appStore'],
                        ['value' => '4.8', 'label' => 'Play Store Rating', 'icon' => 'star', 'store' => 'playStore'],
                        ['value' => '100K+', 'label' => 'Downloads', 'icon' => 'download', 'store' => 'both'],
                        ['value' => '99.9%', 'label' => 'Uptime', 'icon' => 'clock', 'store' => 'both']
                    ],
                    'features' => [
                        ['title' => 'Real-time Tracking', 'description' => 'Track shipments and inventory in real-time', 'icon' => 'globe'],
                        ['title' => 'Offline Mode', 'description' => 'Work without internet connection', 'icon' => 'wifi'],
                        ['title' => 'Barcode Scanning', 'description' => 'Scan products instantly', 'icon' => 'qrcode'],
                        ['title' => 'Push Notifications', 'description' => 'Get instant alerts', 'icon' => 'bell'],
                        ['title' => 'Secure Access', 'description' => 'Biometric authentication', 'icon' => 'shield'],
                        ['title' => 'Analytics Dashboard', 'description' => 'View key metrics', 'icon' => 'chart']
                    ],
                    'compatibility' => [
                        ['platform' => 'iOS', 'version' => 'iOS 15.0 or later', 'devices' => 'iPhone, iPad, iPod touch', 'icon' => 'mobile', 'store' => 'appStore'],
                        ['platform' => 'Android', 'version' => 'Android 8.0 or later', 'devices' => 'Phones & Tablets', 'icon' => 'mobile', 'store' => 'playStore'],
                        ['platform' => 'macOS', 'version' => 'macOS 12.0 or later', 'devices' => 'Mac with Apple M1 chip or later', 'icon' => 'desktop', 'store' => 'appStore']
                    ],
                    'stores' => [
                        [
                            'id' => 'appStore',
                            'name' => 'App Store',
                            'platform' => 'iOS',
                            'gradient' => 'from-blue-500 to-blue-600',
                            'bgColor' => 'bg-blue-600',
                            'icon' => 'mobile',
                            'rating' => '4.9',
                            'reviews' => '5,000+',
                            'features' => ['iPhone', 'iPad', 'Mac', 'Apple Watch']
                        ],
                        [
                            'id' => 'playStore',
                            'name' => 'Google Play',
                            'platform' => 'Android',
                            'gradient' => 'from-emerald-500 to-emerald-600',
                            'bgColor' => 'bg-emerald-600',
                            'icon' => 'mobile',
                            'rating' => '4.8',
                            'reviews' => '10,000+',
                            'features' => ['Phones', 'Tablets', 'Wear OS', 'Android Auto']
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 614,
                'section_key' => 'appStoreLinks',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => 'Download Now',
                    'title' => [
                        'prefix' => 'Get Started with',
                        'highlight' => 'SupplyChainPro'
                    ],
                    'description' => 'Take full control of your supply chain from anywhere. Download our mobile app for iOS and Android devices and experience powerful supply chain management on the go.',
                    'stats' => [
                        ['value' => '4.9', 'label' => 'App Store Rating', 'icon' => 'star', 'store' => 'appStore', 'reviews' => '5,000+', 'trend' => '+0.2', 'trendUp' => true],
                        ['value' => '4.8', 'label' => 'Play Store Rating', 'icon' => 'star', 'store' => 'playStore', 'reviews' => '10,000+', 'trend' => '+0.1', 'trendUp' => true],
                        ['value' => '100K+', 'label' => 'Downloads', 'icon' => 'download', 'store' => 'both', 'trend' => '+25%', 'trendUp' => true],
                        ['value' => '99.9%', 'label' => 'Uptime', 'icon' => 'clock', 'store' => 'both', 'trend' => 'SLA', 'trendUp' => true]
                    ],
                    'features' => [
                        [
                            'id' => 1,
                            'title' => 'Real-time Tracking',
                            'description' => 'Track shipments and inventory in real-time with live updates and push notifications.',
                            'icon' => 'globe',
                            'gradient' => 'from-blue-500 to-blue-600',
                            'category' => 'Tracking',
                            'platforms' => ['iOS', 'Android'],
                            'metrics' => '99.9% accuracy'
                        ],
                        [
                            'id' => 2,
                            'title' => 'Offline Mode',
                            'description' => 'Work without internet connection. All data is cached and syncs automatically when you\'re back online.',
                            'icon' => 'wifi',
                            'gradient' => 'from-emerald-500 to-emerald-600',
                            'category' => 'Offline',
                            'platforms' => ['iOS', 'Android'],
                            'metrics' => '100% uptime'
                        ],
                        [
                            'id' => 3,
                            'title' => 'Barcode Scanning',
                            'description' => 'Scan products instantly with your device\'s camera. Supports 20+ barcode formats.',
                            'icon' => 'qrcode',
                            'gradient' => 'from-purple-500 to-purple-600',
                            'category' => 'Scanning',
                            'platforms' => ['iOS', 'Android'],
                            'metrics' => '<1s scan time'
                        ],
                        [
                            'id' => 4,
                            'title' => 'Push Notifications',
                            'description' => 'Get instant alerts about shipments, inventory, and orders right on your device.',
                            'icon' => 'bell',
                            'gradient' => 'from-amber-500 to-amber-600',
                            'category' => 'Alerts',
                            'platforms' => ['iOS', 'Android'],
                            'metrics' => 'Real-time'
                        ],
                        [
                            'id' => 5,
                            'title' => 'Secure Access',
                            'description' => 'Biometric authentication (Face ID / Fingerprint) for secure access to your data.',
                            'icon' => 'shield',
                            'gradient' => 'from-rose-500 to-rose-600',
                            'category' => 'Security',
                            'platforms' => ['iOS', 'Android'],
                            'metrics' => '256-bit encryption'
                        ],
                        [
                            'id' => 6,
                            'title' => 'Analytics Dashboard',
                            'description' => 'View key metrics and performance indicators in a mobile-optimized dashboard.',
                            'icon' => 'chart',
                            'gradient' => 'from-indigo-500 to-indigo-600',
                            'category' => 'Analytics',
                            'platforms' => ['iOS', 'Android'],
                            'metrics' => '50+ KPIs'
                        ]
                    ],
                    'stores' => [
                        [
                            'id' => 'appStore',
                            'name' => 'App Store',
                            'platform' => 'iOS',
                            'gradient' => 'from-blue-500 to-blue-600',
                            'bgColor' => 'bg-blue-600',
                            'hoverColor' => 'hover:bg-blue-700',
                            'icon' => 'mobile',
                            'rating' => '4.9',
                            'reviews' => '5,000+',
                            'features' => ['iPhone', 'iPad', 'Mac', 'Apple Watch', 'iMessage App'],
                            'requirements' => 'iOS 15.0 or later',
                            'size' => '185 MB',
                            'version' => '3.0.0',
                            'lastUpdated' => 'March 15, 2024'
                        ],
                        [
                            'id' => 'playStore',
                            'name' => 'Google Play',
                            'platform' => 'Android',
                            'gradient' => 'from-emerald-500 to-emerald-600',
                            'bgColor' => 'bg-emerald-600',
                            'hoverColor' => 'hover:bg-emerald-700',
                            'icon' => 'mobile',
                            'rating' => '4.8',
                            'reviews' => '10,000+',
                            'features' => ['Phones', 'Tablets', 'Wear OS', 'Android Auto', 'Chrome OS'],
                            'requirements' => 'Android 8.0 or later',
                            'size' => '162 MB',
                            'version' => '3.0.0',
                            'lastUpdated' => 'March 15, 2024'
                        ]
                    ],
                    'compatibility' => [
                        ['platform' => 'iOS', 'version' => 'iOS 15.0 or later', 'devices' => 'iPhone, iPad, iPod touch', 'icon' => 'mobile', 'store' => 'appStore', 'features' => ['Face ID', 'Widgets', 'Siri Shortcuts']],
                        ['platform' => 'Android', 'version' => 'Android 8.0 or later', 'devices' => 'Phones & Tablets', 'icon' => 'mobile', 'store' => 'playStore', 'features' => ['Fingerprint', 'Widgets', 'Google Assistant']],
                        ['platform' => 'macOS', 'version' => 'macOS 12.0 or later', 'devices' => 'Mac with Apple M1 chip or later', 'icon' => 'desktop', 'store' => 'appStore', 'features' => ['Keyboard shortcuts', 'Multi-window', 'Touch Bar support']]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 615,
                'section_key' => 'appStoreLinks',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => 'Download Now',
                    'title' => [
                        'prefix' => 'Get Started with',
                        'highlight' => 'SupplyChainPro'
                    ],
                    'description' => 'Take full control of your supply chain from anywhere. Download our mobile app for iOS and Android devices and experience powerful supply chain management on the go.',
                    'autoPlayCarousel' => true,
                    'stats' => [
                        ['value' => '4.9', 'label' => 'App Store Rating', 'icon' => 'star', 'store' => 'appStore', 'reviews' => '5,000+', 'trend' => '+0.2', 'trendUp' => true],
                        ['value' => '4.8', 'label' => 'Play Store Rating', 'icon' => 'star', 'store' => 'playStore', 'reviews' => '10,000+', 'trend' => '+0.1', 'trendUp' => true],
                        ['value' => '100K+', 'label' => 'Downloads', 'icon' => 'download', 'store' => 'both', 'trend' => '+25%', 'trendUp' => true],
                        ['value' => '99.9%', 'label' => 'Uptime', 'icon' => 'clock', 'store' => 'both', 'trend' => 'SLA', 'trendUp' => true]
                    ],
                    'features' => [
                        [
                            'id' => 1,
                            'title' => 'Real-time Tracking',
                            'description' => 'Track shipments and inventory in real-time with live updates and push notifications.',
                            'icon' => 'globe',
                            'gradient' => 'from-blue-500 to-blue-600',
                            'category' => 'Tracking',
                            'platforms' => ['iOS', 'Android'],
                            'metrics' => '99.9% accuracy',
                            'videoUrl' => 'https://www.w3schools.com/html/mov_bbb.mp4'
                        ],
                        [
                            'id' => 2,
                            'title' => 'Offline Mode',
                            'description' => 'Work without internet connection. All data is cached and syncs automatically when you\'re back online.',
                            'icon' => 'wifi',
                            'gradient' => 'from-emerald-500 to-emerald-600',
                            'category' => 'Offline',
                            'platforms' => ['iOS', 'Android'],
                            'metrics' => '100% uptime'
                        ],
                        [
                            'id' => 3,
                            'title' => 'Barcode Scanning',
                            'description' => 'Scan products instantly with your device\'s camera. Supports 20+ barcode formats.',
                            'icon' => 'qrcode',
                            'gradient' => 'from-purple-500 to-purple-600',
                            'category' => 'Scanning',
                            'platforms' => ['iOS', 'Android'],
                            'metrics' => '<1s scan time',
                            'videoUrl' => 'https://www.w3schools.com/html/mov_bbb.mp4'
                        ],
                        [
                            'id' => 4,
                            'title' => 'Push Notifications',
                            'description' => 'Get instant alerts about shipments, inventory, and orders right on your device.',
                            'icon' => 'bell',
                            'gradient' => 'from-amber-500 to-amber-600',
                            'category' => 'Alerts',
                            'platforms' => ['iOS', 'Android'],
                            'metrics' => 'Real-time'
                        ],
                        [
                            'id' => 5,
                            'title' => 'Secure Access',
                            'description' => 'Biometric authentication (Face ID / Fingerprint) for secure access to your data.',
                            'icon' => 'shield',
                            'gradient' => 'from-rose-500 to-rose-600',
                            'category' => 'Security',
                            'platforms' => ['iOS', 'Android'],
                            'metrics' => '256-bit encryption'
                        ],
                        [
                            'id' => 6,
                            'title' => 'Analytics Dashboard',
                            'description' => 'View key metrics and performance indicators in a mobile-optimized dashboard.',
                            'icon' => 'chart',
                            'gradient' => 'from-indigo-500 to-indigo-600',
                            'category' => 'Analytics',
                            'platforms' => ['iOS', 'Android'],
                            'metrics' => '50+ KPIs'
                        ]
                    ],
                    'screenshots' => [
                        ['src' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop', 'title' => 'Dashboard', 'description' => 'View key metrics at a glance', 'platform' => 'iOS'],
                        ['src' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop', 'title' => 'Live Tracking', 'description' => 'Track shipments in real-time', 'platform' => 'Android'],
                        ['src' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop', 'title' => 'Barcode Scanner', 'description' => 'Scan products instantly', 'platform' => 'iOS'],
                        ['src' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop', 'title' => 'Analytics', 'description' => 'Deep dive into your data', 'platform' => 'Android'],
                        ['src' => 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop', 'title' => 'Offline Mode', 'description' => 'Work without internet', 'platform' => 'iOS']
                    ],
                    'testimonials' => [
                        [
                            'name' => 'Sarah Johnson',
                            'role' => 'Supply Chain Director',
                            'company' => 'Global Retail Corp',
                            'quote' => 'The mobile app has transformed how we manage our supply chain. The offline mode is a lifesaver in our warehouses.',
                            'rating' => 5,
                            'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop',
                            'videoUrl' => 'https://www.w3schools.com/html/mov_bbb.mp4',
                            'platform' => 'iOS'
                        ],
                        [
                            'name' => 'Michael Chen',
                            'role' => 'Operations Manager',
                            'company' => 'HealthTech Solutions',
                            'quote' => 'Best supply chain app on the market. The barcode scanning feature alone saves us hours every day.',
                            'rating' => 5,
                            'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop',
                            'platform' => 'Android'
                        ],
                        [
                            'name' => 'Emily Rodriguez',
                            'role' => 'Logistics Director',
                            'company' => 'EuroLogistics',
                            'quote' => 'The analytics dashboard gives me real-time visibility into our entire operation. Highly recommended!',
                            'rating' => 5,
                            'avatar' => 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop',
                            'platform' => 'iOS'
                        ]
                    ],
                    'stores' => [
                        [
                            'id' => 'appStore',
                            'name' => 'App Store',
                            'platform' => 'iOS',
                            'gradient' => 'from-blue-500 to-blue-600',
                            'bgColor' => 'bg-blue-600',
                            'hoverColor' => 'hover:bg-blue-700',
                            'icon' => 'mobile',
                            'rating' => '4.9',
                            'reviews' => '5,000+',
                            'features' => ['iPhone', 'iPad', 'Mac', 'Apple Watch', 'iMessage App'],
                            'requirements' => 'iOS 15.0 or later',
                            'size' => '185 MB',
                            'version' => '3.0.0',
                            'lastUpdated' => 'March 15, 2024',
                            'videoUrl' => 'https://www.w3schools.com/html/mov_bbb.mp4'
                        ],
                        [
                            'id' => 'playStore',
                            'name' => 'Google Play',
                            'platform' => 'Android',
                            'gradient' => 'from-emerald-500 to-emerald-600',
                            'bgColor' => 'bg-emerald-600',
                            'hoverColor' => 'hover:bg-emerald-700',
                            'icon' => 'mobile',
                            'rating' => '4.8',
                            'reviews' => '10,000+',
                            'features' => ['Phones', 'Tablets', 'Wear OS', 'Android Auto', 'Chrome OS'],
                            'requirements' => 'Android 8.0 or later',
                            'size' => '162 MB',
                            'version' => '3.0.0',
                            'lastUpdated' => 'March 15, 2024',
                            'videoUrl' => 'https://www.w3schools.com/html/mov_bbb.mp4'
                        ]
                    ],
                    'compatibility' => [
                        ['platform' => 'iOS', 'version' => 'iOS 15.0 or later', 'devices' => 'iPhone, iPad, iPod touch', 'icon' => 'mobile', 'store' => 'appStore', 'features' => ['Face ID', 'Widgets', 'Siri Shortcuts']],
                        ['platform' => 'Android', 'version' => 'Android 8.0 or later', 'devices' => 'Phones & Tablets', 'icon' => 'mobile', 'store' => 'playStore', 'features' => ['Fingerprint', 'Widgets', 'Google Assistant']],
                        ['platform' => 'macOS', 'version' => 'macOS 12.0 or later', 'devices' => 'Mac with Apple M1 chip or later', 'icon' => 'desktop', 'store' => 'appStore', 'features' => ['Keyboard shortcuts', 'Multi-window', 'Touch Bar support']]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 616,
                'section_key' => 'appStoreLinks',
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
