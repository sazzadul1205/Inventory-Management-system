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

            // Mobile App Section
            [
                'id' => 585,
                'section_key' => 'mobileApp',
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
                'section_key' => 'mobileApp',
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
                'section_key' => 'mobileApp',
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
                'section_key' => 'mobileApp',
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
