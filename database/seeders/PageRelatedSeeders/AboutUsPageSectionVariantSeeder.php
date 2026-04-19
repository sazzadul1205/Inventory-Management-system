<?php

namespace Database\Seeders\PageRelatedSeeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AboutUsPageSectionVariantSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        // Upsert only this page's variants so other page seeders do not get wiped out.
        $variants = [
            // Company Story Section
            [
                'id' => 337,
                'section_key' => 'companyStory',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => [
                        'backgroundColor' => 'bg-amber-100 dark:bg-amber-900/30',
                        'borderColor' => 'border-amber-200 dark:border-amber-800',
                        'textColor' => 'text-amber-700 dark:text-amber-300',
                        'text' => 'Our Story',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'The',
                        'highlightGradient' => 'from-amber-600 to-orange-600',
                        'highlightedText' => 'Journey',
                        'suffix' => 'Behind Our Platform'
                    ],
                    'description' => 'From a small startup to a global inventory management platform, our story is one of passion, innovation, and unwavering commitment to our customers.',
                    'heroImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=500&fit=crop',
                    'story' => [
                        'title' => 'Our Journey',
                        'paragraph1' => 'Founded in 2020 with a simple mission: to revolutionize inventory management for businesses of all sizes. What started as a small team of passionate engineers and supply chain experts has grown into a global platform trusted by thousands of companies worldwide.',
                        'paragraph2' => 'Today, we\'re proud to serve customers across 45+ countries, helping them streamline operations, reduce costs, and grow their businesses. Our journey is just beginning, and we\'re excited to continue innovating for our customers.'
                    ],
                    'stats' => [
                        ['icon' => 'users', 'value' => '10,000+', 'label' => 'Businesses Served'],
                        ['icon' => 'globe', 'value' => '45+', 'label' => 'Countries'],
                        ['icon' => 'chart', 'value' => '98%', 'label' => 'Customer Satisfaction'],
                        ['icon' => 'rocket', 'value' => '500M+', 'label' => 'Items Managed']
                    ],
                    'values' => [
                        ['icon' => 'users', 'title' => 'Customer First', 'description' => 'Our customers\' success is our success. We put their needs at the center of everything we do.'],
                        ['icon' => 'lightbulb', 'title' => 'Innovation', 'description' => 'We constantly push boundaries to deliver cutting-edge solutions that solve real problems.'],
                        ['icon' => 'shield', 'title' => 'Integrity', 'description' => 'We operate with transparency, honesty, and accountability in all our relationships.']
                    ],
                    'timeline' => [
                        [
                            'year' => '2020',
                            'icon' => '🏢',
                            'title' => 'Company Founded',
                            'description' => 'Started with a vision to transform inventory management',
                            'details' => 'Founded in San Francisco with a team of 5 passionate engineers',
                            'image' => 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=500&fit=crop'
                        ],
                        [
                            'year' => '2021',
                            'icon' => '🚀',
                            'title' => 'Platform Launch',
                            'description' => 'Launched our first version to early adopters',
                            'details' => 'Onboarded 100+ beta customers within first 3 months',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop'
                        ],
                        [
                            'year' => '2022',
                            'icon' => '🌍',
                            'title' => 'Global Expansion',
                            'description' => 'Expanded operations to Europe and Asia Pacific',
                            'details' => 'Opened offices in London, Singapore, and Sydney',
                            'image' => 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=500&fit=crop'
                        ],
                        [
                            'year' => '2023',
                            'icon' => '🤝',
                            'title' => 'Enterprise Growth',
                            'description' => 'Reached 5,000+ enterprise customers worldwide',
                            'details' => 'Launched advanced AI-powered forecasting features',
                            'image' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=500&fit=crop'
                        ],
                        [
                            'year' => '2024',
                            'icon' => '🏆',
                            'title' => 'Industry Recognition',
                            'description' => 'Named Best Inventory Management Platform',
                            'details' => 'Recognized by leading industry analysts',
                            'image' => 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=500&fit=crop'
                        ]
                    ],
                    'mission' => 'To empower businesses with intelligent inventory management solutions that drive efficiency, reduce waste, and enable growth.',
                    'vision' => 'To become the world\'s most trusted inventory management platform, helping businesses of all sizes achieve operational excellence.',
                    'quote' => 'Our team is passionate about solving real-world problems. Every day, we work to make inventory management simpler, smarter, and more accessible for businesses everywhere.',
                    'quoteAuthor' => 'Alex Chen, CEO & Co-founder',
                    'quoteImage' => 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
                    'contactText' => 'Want to be part of our story? Join our team or partner with us.',
                    'contactButtonText' => 'Join Our Team',
                    'contactLink' => '/careers'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 338,
                'section_key' => 'companyStory',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => [
                        'backgroundColor' => 'bg-emerald-100 dark:bg-emerald-900/30',
                        'borderColor' => 'border-emerald-200 dark:border-emerald-800',
                        'textColor' => 'text-emerald-700 dark:text-emerald-300',
                        'text' => 'Our Heritage',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'The',
                        'highlightGradient' => 'from-emerald-600 to-teal-600',
                        'highlightedText' => 'Story',
                        'suffix' => 'Behind Our Success'
                    ],
                    'description' => 'From humble beginnings to industry leadership, our journey is defined by innovation, dedication, and a relentless focus on customer success. Discover the milestones that shaped our company.',
                    'heroImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=500&fit=crop',
                    'videoUrl' => '/videos/company-story.mp4',
                    'videoPoster' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=500&fit=crop',
                    'stats' => [
                        ['icon' => 'users', 'value' => '15,000+', 'label' => 'Customers Worldwide'],
                        ['icon' => 'globe', 'value' => '60+', 'label' => 'Countries'],
                        ['icon' => 'chart', 'value' => '99%', 'label' => 'Customer Retention'],
                        ['icon' => 'trophy', 'value' => '25+', 'label' => 'Industry Awards']
                    ],
                    'values' => [
                        ['icon' => 'sparkles', 'title' => 'Innovation First', 'description' => 'We constantly push boundaries to deliver cutting-edge solutions'],
                        ['icon' => 'users', 'title' => 'Customer Obsessed', 'description' => 'Our customers\' success drives everything we do'],
                        ['icon' => 'shield', 'title' => 'Uncompromising Integrity', 'description' => 'We operate with transparency and honesty']
                    ],
                    'timeline' => [
                        [
                            'year' => '2020',
                            'icon' => '🏢',
                            'title' => 'Company Founded',
                            'description' => 'Started with a vision to transform inventory management',
                            'details' => 'Founded in San Francisco with a team of 5 passionate engineers. Our first prototype was built in just 3 months.',
                            'image' => 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=500&fit=crop'
                        ],
                        [
                            'year' => '2021',
                            'icon' => '🚀',
                            'title' => 'Platform Launch',
                            'description' => 'Launched our first version to early adopters',
                            'details' => 'Onboarded 100+ beta customers within first 3 months. Received overwhelmingly positive feedback.',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop'
                        ],
                        [
                            'year' => '2022',
                            'icon' => '🌍',
                            'title' => 'Global Expansion',
                            'description' => 'Expanded operations to Europe and Asia Pacific',
                            'details' => 'Opened offices in London, Singapore, and Sydney. Grew team to 150+ employees.',
                            'image' => 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=500&fit=crop'
                        ],
                        [
                            'year' => '2023',
                            'icon' => '🤝',
                            'title' => 'Enterprise Growth',
                            'description' => 'Reached 5,000+ enterprise customers worldwide',
                            'details' => 'Launched advanced AI-powered forecasting features. Named Gartner Cool Vendor.',
                            'image' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=500&fit=crop'
                        ],
                        [
                            'year' => '2024',
                            'icon' => '🏆',
                            'title' => 'Industry Recognition',
                            'description' => 'Named Best Inventory Management Platform',
                            'details' => 'Recognized by Forbes, Gartner, and Inc. Magazine as industry leader.',
                            'image' => 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=500&fit=crop'
                        ]
                    ],
                    'gallery' => [
                        ['image' => 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop', 'caption' => 'Our founding team in 2020', 'year' => '2020'],
                        ['image' => 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&h=400&fit=crop', 'caption' => 'First office in San Francisco', 'year' => '2021'],
                        ['image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop', 'caption' => 'Celebrating 1,000th customer', 'year' => '2022'],
                        ['image' => 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=400&fit=crop', 'caption' => 'London office opening', 'year' => '2023']
                    ],
                    'leadership' => [
                        ['name' => 'Alex Chen', 'title' => 'CEO & Co-founder', 'icon' => 'user', 'bio' => 'Former Amazon executive with 15+ years in supply chain', 'image' => 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop'],
                        ['name' => 'Sarah Johnson', 'title' => 'CTO', 'icon' => 'chip', 'bio' => 'AI expert and former Google engineering lead', 'image' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop'],
                        ['name' => 'Michael Lee', 'title' => 'CPO', 'icon' => 'sparkles', 'bio' => 'Product visionary with multiple successful exits', 'image' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop'],
                        ['name' => 'Jessica Williams', 'title' => 'CMO', 'icon' => 'chart', 'bio' => 'B2B SaaS marketing leader from Salesforce', 'image' => 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop']
                    ],
                    'mission' => 'To empower businesses with intelligent inventory management solutions that drive efficiency, reduce waste, and enable growth.',
                    'vision' => 'To become the world\'s most trusted inventory management platform, helping businesses of all sizes achieve operational excellence.',
                    'quote' => 'Our team is passionate about solving real-world problems. Every day, we work to make inventory management simpler, smarter, and more accessible for businesses everywhere.',
                    'quoteAuthor' => 'Alex Chen, CEO & Co-founder',
                    'contactText' => 'Want to be part of our story? Join our team or partner with us.',
                    'contactButtonText' => 'Join Our Team',
                    'contactLink' => '/careers'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 339,
                'section_key' => 'companyStory',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'backgroundColor' => 'bg-indigo-100 dark:bg-indigo-900/30',
                        'borderColor' => 'border-indigo-200 dark:border-indigo-800',
                        'textColor' => 'text-indigo-700 dark:text-indigo-300',
                        'text' => 'Our Heritage',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Building',
                        'highlightGradient' => 'from-indigo-600 to-purple-600',
                        'highlightedText' => 'Tomorrow',
                        'suffix' => 'Together'
                    ],
                    'description' => 'Discover the story behind our platform, the values that drive us, and the impact we\'re making in the world. From our founding to our future, we\'re committed to innovation and excellence.',
                    'heroImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=500&fit=crop',
                    'videoUrl' => '/videos/company-story.mp4',
                    'videoPoster' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=500&fit=crop',
                    'videoDuration' => '3:45 min',
                    'stats' => [
                        ['icon' => 'users', 'value' => '20,000+', 'label' => 'Customers Worldwide'],
                        ['icon' => 'globe', 'value' => '75+', 'label' => 'Countries'],
                        ['icon' => 'chart', 'value' => '99.5%', 'label' => 'Customer Retention'],
                        ['icon' => 'trophy', 'value' => '35+', 'label' => 'Industry Awards']
                    ],
                    'story' => [
                        'title' => 'Our Journey',
                        'paragraph1' => 'Founded in 2020 with a simple mission: to revolutionize inventory management for businesses of all sizes. What started as a small team of passionate engineers and supply chain experts has grown into a global platform trusted by thousands of companies worldwide.',
                        'paragraph2' => 'Today, we\'re proud to serve customers across 75+ countries, helping them streamline operations, reduce costs, and grow their businesses. Our journey is just beginning, and we\'re excited to continue innovating for our customers.'
                    ],
                    'timeline' => [
                        [
                            'year' => '2020',
                            'icon' => '🏢',
                            'title' => 'Company Founded',
                            'description' => 'Started with a vision to transform inventory management',
                            'details' => 'Founded in San Francisco with a team of 5 passionate engineers. Our first prototype was built in just 3 months.',
                            'image' => 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=500&fit=crop'
                        ],
                        [
                            'year' => '2021',
                            'icon' => '🚀',
                            'title' => 'Platform Launch',
                            'description' => 'Launched our first version to early adopters',
                            'details' => 'Onboarded 100+ beta customers within first 3 months. Received overwhelmingly positive feedback.',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop'
                        ],
                        [
                            'year' => '2022',
                            'icon' => '🌍',
                            'title' => 'Global Expansion',
                            'description' => 'Expanded operations to Europe and Asia Pacific',
                            'details' => 'Opened offices in London, Singapore, and Sydney. Grew team to 150+ employees.',
                            'image' => 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=500&fit=crop'
                        ],
                        [
                            'year' => '2023',
                            'icon' => '🤝',
                            'title' => 'Enterprise Growth',
                            'description' => 'Reached 5,000+ enterprise customers worldwide',
                            'details' => 'Launched advanced AI-powered forecasting features. Named Gartner Cool Vendor.',
                            'image' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=500&fit=crop'
                        ],
                        [
                            'year' => '2024',
                            'icon' => '🏆',
                            'title' => 'Industry Recognition',
                            'description' => 'Named Best Inventory Management Platform',
                            'details' => 'Recognized by Forbes, Gartner, and Inc. Magazine as industry leader.',
                            'image' => 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=500&fit=crop'
                        ]
                    ],
                    'values' => [
                        [
                            'icon' => 'sparkles',
                            'title' => 'Innovation First',
                            'description' => 'We constantly push boundaries to deliver cutting-edge solutions',
                            'details' => 'We invest 20% of our revenue into R&D and have filed over 50 patents.',
                            'image' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop'
                        ],
                        [
                            'icon' => 'users',
                            'title' => 'Customer Obsessed',
                            'description' => 'Our customers\' success drives everything we do',
                            'details' => '98% of our product roadmap comes directly from customer feedback.',
                            'image' => 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop'
                        ],
                        [
                            'icon' => 'shield',
                            'title' => 'Uncompromising Integrity',
                            'description' => 'We operate with transparency and honesty',
                            'details' => 'SOC 2 Type II certified and GDPR compliant since day one.',
                            'image' => 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop'
                        ]
                    ],
                    'gallery' => [
                        ['image' => 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop', 'caption' => 'Our founding team in 2020', 'year' => '2020'],
                        ['image' => 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&h=400&fit=crop', 'caption' => 'First office in San Francisco', 'year' => '2021'],
                        ['image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop', 'caption' => 'Celebrating 1,000th customer', 'year' => '2022'],
                        ['image' => 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=400&fit=crop', 'caption' => 'London office opening', 'year' => '2023']
                    ],
                    'leadership' => [
                        ['name' => 'Alex Chen', 'title' => 'CEO & Co-founder', 'icon' => '👨‍💼', 'bio' => 'Former Amazon executive with 15+ years in supply chain', 'image' => 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop'],
                        ['name' => 'Sarah Johnson', 'title' => 'CTO', 'icon' => '👩‍💻', 'bio' => 'AI expert and former Google engineering lead', 'image' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop'],
                        ['name' => 'Michael Lee', 'title' => 'CPO', 'icon' => '👨‍🎨', 'bio' => 'Product visionary with multiple successful exits', 'image' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop'],
                        ['name' => 'Jessica Williams', 'title' => 'CMO', 'icon' => '👩‍💼', 'bio' => 'B2B SaaS marketing leader from Salesforce', 'image' => 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop']
                    ],
                    'offices' => [
                        ['city' => 'San Francisco', 'country' => 'USA', 'address' => '500 Market Street, Suite 300', 'teamSize' => '120', 'image' => 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&h=400&fit=crop'],
                        ['city' => 'London', 'country' => 'UK', 'address' => '30 St Mary Axe, 20th Floor', 'teamSize' => '85', 'image' => 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=400&fit=crop'],
                        ['city' => 'Singapore', 'country' => 'Singapore', 'address' => '1 Raffles Place, #30-00', 'teamSize' => '70', 'image' => 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600&h=400&fit=crop'],
                        ['city' => 'Sydney', 'country' => 'Australia', 'address' => '1 Martin Place, Level 50', 'teamSize' => '45', 'image' => 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600&h=400&fit=crop']
                    ],
                    'achievements' => [
                        ['icon' => '🏆', 'value' => '50+', 'title' => 'Industry Awards', 'description' => 'Recognized for innovation and excellence'],
                        ['icon' => '⭐', 'value' => '4.9/5', 'title' => 'Customer Rating', 'description' => 'Based on 5,000+ reviews on G2'],
                        ['icon' => '📈', 'value' => '300%', 'title' => 'Revenue Growth', 'description' => 'Year-over-year growth since 2020']
                    ],
                    'partners' => [
                        ['name' => 'Microsoft', 'icon' => '💻', 'logo' => 'https://images.unsplash.com/photo-1573804633927-b8b9b6d6f2f5?w=100&h=100&fit=crop'],
                        ['name' => 'Google', 'icon' => '🔍', 'logo' => 'https://images.unsplash.com/photo-1573804633927-b8b9b6d6f2f5?w=100&h=100&fit=crop'],
                        ['name' => 'Amazon', 'icon' => '📦', 'logo' => 'https://images.unsplash.com/photo-1573804633927-b8b9b6d6f2f5?w=100&h=100&fit=crop'],
                        ['name' => 'Salesforce', 'icon' => '☁️', 'logo' => 'https://images.unsplash.com/photo-1573804633927-b8b9b6d6f2f5?w=100&h=100&fit=crop']
                    ],
                    'mission' => 'To empower businesses with intelligent inventory management solutions that drive efficiency, reduce waste, and enable growth.',
                    'vision' => 'To become the world\'s most trusted inventory management platform, helping businesses of all sizes achieve operational excellence.',
                    'cultureQuote' => 'We believe that great products come from great teams. Our culture is built on trust, transparency, and a shared passion for solving real problems.',
                    'cultureAuthor' => 'People & Culture Team',
                    'communityText' => 'We believe in giving back. Through our 1% Pledge initiative, we donate 1% of our time, product, and profit to organizations that support sustainable business practices and education.',
                    'communityImage' => 'https://images.unsplash.com/photo-1532622785990-d2c36a76f5a6?w=800&h=500&fit=crop',
                    'quote' => 'Our team is passionate about solving real-world problems. Every day, we work to make inventory management simpler, smarter, and more accessible for businesses everywhere.',
                    'quoteAuthor' => 'Alex Chen, CEO & Co-founder',
                    'contactText' => 'Want to be part of our story? Join our team or partner with us.',
                    'contactButtonText' => 'Join Our Team',
                    'contactLink' => '/careers'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 340,
                'section_key' => 'companyStory',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Mission & Vision Section
            [
                'id' => 341,
                'section_key' => 'missionVision',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Our Purpose',
                        'backgroundColor' => 'bg-sky-100 dark:bg-sky-900/30',
                        'borderColor' => 'border-sky-200 dark:border-sky-800',
                        'textColor' => 'text-sky-700 dark:text-sky-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Driving',
                        'highlightedText' => 'Innovation',
                        'suffix' => 'Through Purpose',
                        'highlightGradient' => 'from-sky-600 to-blue-600'
                    ],
                    'description' => 'Our mission and vision define who we are, what we stand for, and where we\'re headed. We\'re committed to creating meaningful change through technology, integrity, and collaboration.',
                    'heroImage' => 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=500&fit=crop',
                    'stats' => [
                        ['icon' => 'globe', 'value' => '25+', 'label' => 'Countries Served'],
                        ['icon' => 'users', 'value' => '500+', 'label' => 'Team Members'],
                        ['icon' => 'check', 'value' => '99.9%', 'label' => 'Customer Satisfaction'],
                        ['icon' => 'trending', 'value' => '200%', 'label' => 'Growth YoY']
                    ],
                    'mission' => [
                        'title' => 'Our Mission',
                        'description' => 'To democratize access to cutting-edge technology, empowering businesses of all sizes to compete and thrive in the digital economy through intuitive, reliable, and scalable solutions.',
                        'icon' => 'rocket',
                        'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop'
                    ],
                    'vision' => [
                        'title' => 'Our Vision',
                        'description' => 'A world where technology eliminates barriers, unlocks human potential, and creates a more connected, efficient, and sustainable future for everyone.',
                        'icon' => 'eye',
                        'image' => 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop'
                    ],
                    'pillars' => [
                        [
                            'icon' => 'shield',
                            'title' => 'Trust & Security',
                            'description' => 'Building systems that protect data and privacy as if it were our own.',
                            'image' => 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop'
                        ],
                        [
                            'icon' => 'sparkles',
                            'title' => 'Continuous Innovation',
                            'description' => 'Relentlessly improving and pushing the boundaries of what\'s possible.',
                            'image' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop'
                        ],
                        [
                            'icon' => 'users',
                            'title' => 'Customer-Centricity',
                            'description' => 'Putting our customers at the heart of every decision we make.',
                            'image' => 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop'
                        ]
                    ],
                    'goals' => [
                        [
                            'icon' => 'globe',
                            'title' => 'Global Expansion',
                            'description' => 'Establish a presence in 15 new markets by 2027, bringing our solutions to underserved regions.',
                            'target' => '15 New Markets'
                        ],
                        [
                            'icon' => 'chip',
                            'title' => 'AI-First Platform',
                            'description' => 'Integrate advanced AI capabilities across all core products to enhance automation and insights.',
                            'target' => 'Q4 2026'
                        ],
                        [
                            'icon' => 'users',
                            'title' => 'Community Impact',
                            'description' => 'Launch a global partner program to train 10,000 developers and consultants on our platform.',
                            'target' => '10,000 Partners'
                        ],
                        [
                            'icon' => 'leaf',
                            'title' => 'Sustainable Operations',
                            'description' => 'Achieve carbon-neutral operations and power all data centers with renewable energy.',
                            'target' => '2028'
                        ]
                    ],
                    'faqs' => [
                        [
                            'id' => 'faq-mv-1',
                            'category' => 'company',
                            'icon' => 'question',
                            'question' => 'What makes your mission unique?',
                            'answer' => 'Our mission is unique because it combines technological excellence with a deep commitment to social and environmental responsibility. We don\'t just build products; we build solutions that contribute to a better world by empowering businesses to operate more sustainably and efficiently.',
                            'tags' => ['mission', 'values', 'company'],
                            'link' => '/about/mission',
                            'updatedAt' => '2024-01-15',
                            'views' => 1250
                        ],
                        [
                            'id' => 'faq-mv-2',
                            'category' => 'company',
                            'icon' => 'lightbulb',
                            'question' => 'How do you measure progress toward your vision?',
                            'answer' => 'We measure progress through a combination of key performance indicators including customer success metrics (NPS, retention, time-to-value), innovation benchmarks (patents filed, product releases, feature adoption), and our impact on operational efficiency for our clients.',
                            'tags' => ['vision', 'metrics', 'progress'],
                            'link' => '/about/impact',
                            'updatedAt' => '2024-01-10',
                            'views' => 980
                        ],
                        [
                            'id' => 'faq-mv-3',
                            'category' => 'values',
                            'icon' => 'heart',
                            'question' => 'How do your core pillars influence daily operations?',
                            'answer' => 'Our pillars are integrated into everything we do. Trust guides our security protocols, Innovation drives our R&D roadmap, and Customer-Centricity shapes our support and product design processes. They are part of our performance reviews, strategic planning, and daily stand-ups.',
                            'tags' => ['pillars', 'operations', 'culture'],
                            'updatedAt' => '2024-01-18',
                            'views' => 750
                        ],
                        [
                            'id' => 'faq-mv-4',
                            'category' => 'goals',
                            'icon' => 'chart',
                            'question' => 'What is the timeline for achieving your strategic goals?',
                            'answer' => 'Our strategic goals are set on a rolling 3-5 year horizon, with specific milestones reviewed quarterly. The AI-First Platform initiative has already begun with beta features launching next quarter, and our Global Expansion plan kicks off with the Asia-Pacific region in early 2025.',
                            'tags' => ['goals', 'timeline', 'strategy'],
                            'updatedAt' => '2024-01-20',
                            'views' => 620
                        ]
                    ],
                    'faqCategories' => [
                        ['id' => 'company', 'name' => 'Company', 'icon' => 'office-building', 'description' => 'Questions about our company and mission'],
                        ['id' => 'values', 'name' => 'Values', 'icon' => 'heart', 'description' => 'Our guiding principles and culture'],
                        ['id' => 'goals', 'name' => 'Strategic Goals', 'icon' => 'chart', 'description' => 'Our long-term objectives and roadmap']
                    ],
                    'contactText' => 'Ready to make an impact? Join us on our mission.',
                    'contactLink' => '/careers',
                    'contactButtonText' => 'Join Our Team',
                    'contactImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 342,
                'section_key' => 'missionVision',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Why We Exist',
                        'backgroundColor' => 'bg-emerald-100 dark:bg-emerald-900/30',
                        'borderColor' => 'border-emerald-200 dark:border-emerald-800',
                        'textColor' => 'text-emerald-700 dark:text-emerald-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Shaping',
                        'highlightedText' => 'Tomorrow',
                        'suffix' => 'Through Action',
                        'highlightGradient' => 'from-emerald-600 to-teal-600'
                    ],
                    'description' => 'Our mission and vision are more than words—they are the compass guiding our innovation, partnerships, and commitment to building a better, more connected world.',
                    'heroImage' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=500&fit=crop',
                    'stats' => [
                        ['icon' => 'globe', 'value' => '40+', 'label' => 'Countries Served'],
                        ['icon' => 'users', 'value' => '1,200+', 'label' => 'Global Team Members'],
                        ['icon' => 'check', 'value' => '98%', 'label' => 'Customer Retention Rate'],
                        ['icon' => 'chart', 'value' => '3.5x', 'label' => 'Revenue Growth (3 Years)']
                    ],
                    'mission' => [
                        'title' => 'Our Mission',
                        'description' => 'To empower organizations with intelligent, accessible technology that transforms complex data into actionable insights, fostering sustainable growth and operational excellence.',
                        'icon' => 'rocket',
                        'image' => 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop'
                    ],
                    'vision' => [
                        'title' => 'Our Vision',
                        'description' => 'A future where seamless, intelligent systems enable every business to operate with unprecedented efficiency, agility, and purpose, unlocking human potential on a global scale.',
                        'icon' => 'eye',
                        'image' => 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop'
                    ],
                    'pillars' => [
                        [
                            'icon' => 'chip',
                            'title' => 'Technical Excellence',
                            'description' => 'Building robust, scalable, and secure solutions that set industry standards.',
                            'details' => 'Our engineering teams adhere to rigorous coding standards, conduct regular security audits, and invest 20% of development time in technical debt reduction and architectural improvements.',
                            'image' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop'
                        ],
                        [
                            'icon' => 'users',
                            'title' => 'Customer Partnership',
                            'description' => 'Working alongside our clients as trusted advisors, not just vendors.',
                            'details' => 'We assign dedicated customer success managers, provide 24/7 support, and conduct quarterly business reviews to ensure our solutions evolve with client needs.',
                            'image' => 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop'
                        ],
                        [
                            'icon' => 'leaf',
                            'title' => 'Responsible Innovation',
                            'description' => 'Creating technology that serves people and the planet responsibly.',
                            'details' => 'We prioritize energy-efficient algorithms, promote digital inclusion, and ensure our supply chain partners meet strict environmental and ethical standards.',
                            'image' => 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop'
                        ]
                    ],
                    'goals' => [
                        [
                            'icon' => 'globe',
                            'title' => 'Global Accessibility',
                            'description' => 'Localize our platform into 25 languages and establish regional data centers in 5 new continents.',
                            'target' => '30 Languages',
                            'progress' => 40
                        ],
                        [
                            'icon' => 'chip',
                            'title' => 'AI Integration',
                            'description' => 'Embed predictive AI and machine learning capabilities across all core product modules.',
                            'target' => 'Q2 2027',
                            'progress' => 65
                        ],
                        [
                            'icon' => 'users',
                            'title' => 'Community Empowerment',
                            'description' => 'Launch a global training academy to certify 50,000 professionals on our platform.',
                            'target' => '50,000 Certified',
                            'progress' => 25
                        ],
                        [
                            'icon' => 'sparkles',
                            'title' => 'Zero Carbon Operations',
                            'description' => 'Achieve net-zero carbon emissions across all direct and indirect operations.',
                            'target' => '2030',
                            'progress' => 55
                        ]
                    ],
                    'impactMetrics' => [
                        ['icon' => 'globe', 'value' => '5,000+', 'label' => 'Businesses Empowered', 'description' => 'From startups to Fortune 500 enterprises'],
                        ['icon' => 'chart', 'value' => '$2.5B+', 'label' => 'Value Unlocked', 'description' => 'Operational savings and revenue growth for clients'],
                        ['icon' => 'leaf', 'value' => '15,000+', 'label' => 'Tons CO2 Reduced', 'description' => 'Through optimized logistics and reduced waste'],
                        ['icon' => 'users', 'value' => '2,000+', 'label' => 'Community Projects', 'description' => 'Supported globally through our foundation']
                    ],
                    'initiatives' => [
                        [
                            'icon' => 'academic',
                            'title' => 'Digital Literacy Program',
                            'description' => 'Free training and certification for underserved communities to build digital skills.',
                            'status' => 'Active',
                            'progress' => 75,
                            'link' => '/initiatives/digital-literacy',
                            'image' => 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop'
                        ],
                        [
                            'icon' => 'globe',
                            'title' => 'Open Data for Good',
                            'description' => 'Providing anonymized, aggregated data to researchers and non-profits solving critical challenges.',
                            'status' => 'Ongoing',
                            'progress' => 90,
                            'link' => '/initiatives/open-data',
                            'image' => 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop'
                        ],
                        [
                            'icon' => 'sparkles',
                            'title' => 'Green Cloud Initiative',
                            'description' => 'Transitioning all data centers to 100% renewable energy sources.',
                            'status' => 'In Progress',
                            'progress' => 60,
                            'link' => '/initiatives/green-cloud',
                            'image' => 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=600&h=400&fit=crop'
                        ]
                    ],
                    'faqCategories' => [
                        ['id' => 'company', 'name' => 'Our Company', 'icon' => 'office-building', 'description' => 'Questions about our organization and history'],
                        ['id' => 'strategy', 'name' => 'Strategy & Goals', 'icon' => 'chart', 'description' => 'Our long-term direction and objectives'],
                        ['id' => 'impact', 'name' => 'Social Impact', 'icon' => 'heart', 'description' => 'How we\'re making a difference']
                    ],
                    'faqs' => [
                        [
                            'id' => 'faq-1',
                            'category' => 'company',
                            'icon' => 'question',
                            'question' => 'How does your mission influence product development?',
                            'answer' => 'Every feature we build is evaluated against our mission of \'transforming complex data into actionable insights.\' This means we prioritize intuitive design, powerful analytics, and seamless integrations that directly contribute to our customers\' operational efficiency and growth.',
                            'tags' => ['mission', 'product', 'development'],
                            'link' => '/about/product-philosophy',
                            'updatedAt' => '2025-01-15',
                            'views' => 1240
                        ],
                        [
                            'id' => 'faq-2',
                            'category' => 'strategy',
                            'icon' => 'lightbulb',
                            'question' => 'What is your approach to achieving carbon neutrality?',
                            'answer' => 'Our approach follows a three-phase plan: first, reducing emissions through energy efficiency and optimized logistics; second, transitioning to renewable energy for all operations; and third, investing in verified carbon removal projects for any remaining emissions. We publish an annual sustainability report tracking our progress.',
                            'tags' => ['sustainability', 'carbon', 'environment'],
                            'link' => '/sustainability',
                            'updatedAt' => '2025-02-10',
                            'views' => 890
                        ],
                        [
                            'id' => 'faq-3',
                            'category' => 'impact',
                            'icon' => 'heart',
                            'question' => 'How can my organization partner with your foundation?',
                            'answer' => 'We welcome partnerships with non-profits, educational institutions, and community organizations aligned with our mission of digital empowerment. Reach out to our foundation team via the link below to explore collaboration opportunities, including pro-bono consulting, software grants, and joint research projects.',
                            'tags' => ['foundation', 'partnership', 'non-profit'],
                            'link' => '/foundation/partners',
                            'updatedAt' => '2025-01-28',
                            'views' => 567
                        ]
                    ],
                    'contactText' => 'Be part of something bigger. Join our mission-driven team.',
                    'contactLink' => '/careers',
                    'contactButtonText' => 'Explore Careers',
                    'contactImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 343,
                'section_key' => 'missionVision',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Our Guiding Star',
                        'backgroundColor' => 'bg-amber-100 dark:bg-amber-900/30',
                        'borderColor' => 'border-amber-200 dark:border-amber-800',
                        'textColor' => 'text-amber-700 dark:text-amber-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Building',
                        'highlightedText' => 'Legacy',
                        'suffix' => 'Through Purpose',
                        'highlightGradient' => 'from-amber-600 to-orange-600'
                    ],
                    'description' => 'Our mission and vision are the foundation of everything we create. They drive our innovation, define our culture, and inspire us to build technology that empowers people and protects the planet.',
                    'heroImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=500&fit=crop',
                    'stats' => [
                        ['icon' => 'globe', 'value' => '50+', 'label' => 'Countries Served'],
                        ['icon' => 'users', 'value' => '2,000+', 'label' => 'Team Members Worldwide'],
                        ['icon' => 'check', 'value' => '4.9/5', 'label' => 'Customer Trust Score'],
                        ['icon' => 'chart', 'value' => '400%', 'label' => 'Growth Since Launch']
                    ],
                    'mission' => [
                        'title' => 'Our Mission',
                        'description' => 'To democratize access to powerful technology, enabling every organization—regardless of size or location—to compete, innovate, and thrive in a rapidly changing digital economy.',
                        'icon' => 'rocket',
                        'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop'
                    ],
                    'vision' => [
                        'title' => 'Our Vision',
                        'description' => 'A connected, equitable, and sustainable world where technology serves as a bridge to opportunity, unlocking human potential and fostering prosperity for all.',
                        'icon' => 'eye',
                        'image' => 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop'
                    ],
                    'pillars' => [
                        [
                            'icon' => 'shield',
                            'title' => 'Trust & Transparency',
                            'description' => 'Building systems that are secure, reliable, and accountable to our users.',
                            'details' => 'We undergo annual third-party security audits, publish transparency reports, and maintain an open bug bounty program. Our commitment to data privacy is certified by GDPR and CCPA compliance.',
                            'image' => 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop'
                        ],
                        [
                            'icon' => 'sparkles',
                            'title' => 'Bold Innovation',
                            'description' => 'Pushing boundaries to solve real-world problems with creative technology.',
                            'details' => 'We dedicate 30% of our engineering resources to R&D, maintain a portfolio of 50+ patents, and partner with leading research universities to explore emerging technologies.',
                            'image' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop'
                        ],
                        [
                            'icon' => 'users',
                            'title' => 'Inclusive Growth',
                            'description' => 'Creating opportunities for everyone, everywhere, to succeed.',
                            'details' => 'Our platform is designed with accessibility standards (WCAG 2.1 AA), we offer discounted pricing for non-profits and educational institutions, and our workforce reflects the diversity of the communities we serve.',
                            'image' => 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=400&fit=crop'
                        ]
                    ],
                    'goals' => [
                        [
                            'icon' => 'globe',
                            'title' => 'Universal Access',
                            'description' => 'Expand platform availability to every country and support 100 languages.',
                            'target' => '100 Languages',
                            'progress' => 55
                        ],
                        [
                            'icon' => 'chip',
                            'title' => 'AI for Good',
                            'description' => 'Deploy predictive AI models that help businesses reduce waste by 50%.',
                            'target' => '50% Waste Reduction',
                            'progress' => 35
                        ],
                        [
                            'icon' => 'users',
                            'title' => 'Developer Ecosystem',
                            'description' => 'Build a community of 100,000 certified developers and partners.',
                            'target' => '100,000 Developers',
                            'progress' => 40
                        ],
                        [
                            'icon' => 'leaf',
                            'title' => 'Net Positive Operations',
                            'description' => 'Remove more carbon from the atmosphere than we emit by 2030.',
                            'target' => 'Net Positive by 2030',
                            'progress' => 60
                        ]
                    ],
                    'impactMetrics' => [
                        ['icon' => 'globe', 'value' => '10,000+', 'label' => 'Businesses Transformed', 'description' => 'From local shops to global enterprises'],
                        ['icon' => 'chart', 'value' => '$10B+', 'label' => 'Client Value Created', 'description' => 'Combined savings and revenue growth'],
                        ['icon' => 'leaf', 'value' => '50,000+', 'label' => 'Tons CO2 Offset', 'description' => 'Through renewable energy and efficiency'],
                        ['icon' => 'users', 'value' => '1,000+', 'label' => 'Community Partners', 'description' => 'Non-profits and educational institutions']
                    ],
                    'initiatives' => [
                        [
                            'icon' => 'academic',
                            'title' => 'Future Ready Skills',
                            'description' => 'Free technology training and certification for underrepresented groups in tech.',
                            'status' => 'Active',
                            'progress' => 85,
                            'link' => '/initiatives/skills-training',
                            'image' => 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop'
                        ],
                        [
                            'icon' => 'globe',
                            'title' => 'Connect the Unconnected',
                            'description' => 'Providing offline-capable solutions and low-bandwidth access to remote communities.',
                            'status' => 'In Progress',
                            'progress' => 45,
                            'link' => '/initiatives/digital-inclusion',
                            'image' => 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop'
                        ],
                        [
                            'icon' => 'sparkles',
                            'title' => 'Green Innovation Lab',
                            'description' => 'Incubating and funding startups focused on climate-tech solutions.',
                            'status' => 'Active',
                            'progress' => 70,
                            'link' => '/initiatives/green-lab',
                            'image' => 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=600&h=400&fit=crop'
                        ]
                    ],
                    'milestones' => [
                        [
                            'year' => '2020',
                            'title' => 'Platform Launch',
                            'description' => 'Launched our first public beta with a core team of 50 engineers, serving 100 early-adopter businesses.',
                            'impact' => 'Enabled first 100 businesses to digitize operations',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
                        ],
                        [
                            'year' => '2022',
                            'title' => 'Global Expansion',
                            'description' => 'Opened regional offices in EMEA and APAC, growing our team to 500+ employees worldwide.',
                            'impact' => 'Reduced latency by 60% for international customers',
                            'image' => 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&h=400&fit=crop'
                        ],
                        [
                            'year' => '2024',
                            'title' => 'AI Integration',
                            'description' => 'Released our first suite of AI-powered analytics tools, helping clients predict demand with 95% accuracy.',
                            'impact' => 'Saved clients $500M in inventory costs',
                            'image' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop'
                        ],
                        [
                            'year' => '2026',
                            'title' => 'Carbon Neutral',
                            'description' => 'Achieved carbon-neutral operations through renewable energy and verified offsets.',
                            'impact' => 'Powered 100% of operations by clean energy',
                            'image' => 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=600&h=400&fit=crop'
                        ]
                    ],
                    'quotes' => [
                        [
                            'text' => 'Technology is best when it brings people together and solves problems that matter. That\'s what drives us every single day.',
                            'author' => 'Sarah Chen',
                            'title' => 'CEO & Co-Founder',
                            'image' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop'
                        ]
                    ],
                    'faqCategories' => [
                        ['id' => 'mission', 'name' => 'Our Mission', 'icon' => 'rocket', 'description' => 'Understanding our core purpose'],
                        ['id' => 'vision', 'name' => 'Our Vision', 'icon' => 'eye', 'description' => 'Where we\'re headed as a company'],
                        ['id' => 'values', 'name' => 'Our Values', 'icon' => 'heart', 'description' => 'The principles that guide us']
                    ],
                    'faqs' => [
                        [
                            'id' => 'faq-1',
                            'category' => 'mission',
                            'icon' => 'question',
                            'question' => 'How does your mission guide day-to-day decisions?',
                            'answer' => 'Our mission of democratizing technology means every feature, partnership, and pricing decision is evaluated against its impact on accessibility and value for customers of all sizes. We regularly ask: "Does this make technology more accessible or less?" If the answer is "less," we go back to the drawing board.',
                            'tags' => ['mission', 'decision-making', 'accessibility'],
                            'link' => '/about/decision-framework',
                            'updatedAt' => '2025-01-20',
                            'views' => 2150
                        ],
                        [
                            'id' => 'faq-2',
                            'category' => 'vision',
                            'icon' => 'lightbulb',
                            'question' => 'What does "net positive operations" mean in practice?',
                            'answer' => 'Net positive means we remove more greenhouse gases from the atmosphere than we emit. We achieve this through aggressive reduction (energy efficiency, renewable energy, remote-first culture), followed by investment in verified carbon removal projects like reforestation and direct air capture. Our goal is to be net positive by 2030, five years ahead of the Paris Agreement targets.',
                            'tags' => ['sustainability', 'carbon', 'net-positive'],
                            'link' => '/sustainability/roadmap',
                            'updatedAt' => '2025-02-05',
                            'views' => 1430
                        ],
                        [
                            'id' => 'faq-3',
                            'category' => 'values',
                            'icon' => 'heart',
                            'question' => 'How do you ensure your technology is inclusive?',
                            'answer' => 'Inclusion is built into our product development lifecycle from day one. We follow WCAG 2.1 AA accessibility standards, conduct user testing with diverse groups, offer our platform in 50+ languages, and provide discounted pricing for non-profits and educational institutions. We also have an Accessibility Council made up of employees and external advisors who review all major product releases.',
                            'tags' => ['inclusion', 'accessibility', 'diversity'],
                            'link' => '/accessibility',
                            'updatedAt' => '2025-01-10',
                            'views' => 980
                        ]
                    ],
                    'contactText' => 'Join us in building a legacy of impact. Explore careers and partnerships.',
                    'contactLink' => '/careers',
                    'contactButtonText' => 'Join Our Mission',
                    'contactImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 344,
                'section_key' => 'missionVision',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],


            // Core Values Section 
            [
                'id' => 345,
                'section_key' => 'coreValues',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Our Foundation',
                        'backgroundColor' => 'bg-cyan-100 dark:bg-cyan-900/30',
                        'borderColor' => 'border-cyan-200 dark:border-cyan-800',
                        'textColor' => 'text-cyan-700 dark:text-cyan-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'The Principles That',
                        'highlightedText' => 'Guide Us',
                        'suffix' => 'Every Day',
                        'highlightGradient' => 'from-cyan-600 to-teal-600'
                    ],
                    'description' => 'Our core values are the bedrock of our culture and decision-making. They define how we work, how we treat each other, and how we serve our customers. These principles are non-negotiable and lived daily.',
                    'heroImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=500&fit=crop',
                    'stats' => [
                        ['icon' => 'users', 'value' => '500+', 'label' => 'Team Members'],
                        ['icon' => 'globe', 'value' => '35+', 'label' => 'Nationalities Represented'],
                        ['icon' => 'chart', 'value' => '98%', 'label' => 'Employee Satisfaction'],
                        ['icon' => 'heart', 'value' => '15+', 'label' => 'Years of Shared Values']
                    ],
                    'values' => [
                        [
                            'icon' => 'users',
                            'title' => 'Customer First',
                            'description' => 'We start with the customer and work backwards. Every decision is made with our users\' success in mind.',
                            'example' => 'Weekly customer advisory board meetings',
                            'image' => 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop'
                        ],
                        [
                            'icon' => 'sparkles',
                            'title' => 'Innovate Relentlessly',
                            'description' => 'We embrace curiosity and challenge the status quo. Great ideas can come from anywhere.',
                            'example' => 'Monthly innovation sprints with team-wide participation',
                            'image' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop'
                        ],
                        [
                            'icon' => 'shield',
                            'title' => 'Own It',
                            'description' => 'We take responsibility for outcomes, celebrate successes together, and learn from failures openly.',
                            'example' => 'Blameless post-mortems and shared accountability',
                            'image' => 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop'
                        ],
                        [
                            'icon' => 'users',
                            'title' => 'One Team',
                            'description' => 'We collaborate across boundaries, respect diverse perspectives, and lift each other up.',
                            'example' => 'Cross-functional project pods and mentorship programs',
                            'image' => 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=400&fit=crop'
                        ],
                        [
                            'icon' => 'lightbulb',
                            'title' => 'Learn Daily',
                            'description' => 'We are lifelong learners who seek feedback, share knowledge, and grow continuously.',
                            'example' => 'Learning stipends and internal knowledge-sharing sessions',
                            'image' => 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop'
                        ],
                        [
                            'icon' => 'heart',
                            'title' => 'Lead with Empathy',
                            'description' => 'We treat everyone with kindness, listen actively, and assume positive intent.',
                            'example' => 'Mental health days and compassionate leave policies',
                            'image' => 'https://images.unsplash.com/photo-1532622785990-d2c36a76f5a6?w=600&h=400&fit=crop'
                        ]
                    ],
                    'testimonials' => [
                        [
                            'quote' => 'The values here aren\'t just posters on the wall—they\'re lived daily. I\'ve never worked somewhere where \'Customer First\' is actually the first question in every strategy meeting.',
                            'name' => 'Priya Sharma',
                            'role' => 'Senior Product Manager',
                            'icon' => 'user',
                            'image' => 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&h=150&fit=crop'
                        ],
                        [
                            'quote' => 'The culture of \'Own It\' means I can take risks without fear. When things go wrong, we fix them together. When they go right, we celebrate as a team.',
                            'name' => 'Marcus Chen',
                            'role' => 'Lead Software Engineer',
                            'icon' => 'user',
                            'image' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop'
                        ],
                        [
                            'quote' => 'From day one, I felt the \'One Team\' value in action. Everyone is willing to help, share context, and ensure we all succeed together.',
                            'name' => 'Elena Rodriguez',
                            'role' => 'Customer Success Manager',
                            'icon' => 'user',
                            'image' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop'
                        ]
                    ],
                    'faqCategories' => [
                        ['id' => 'culture', 'name' => 'Work Culture', 'icon' => 'office-building', 'description' => 'How values shape our daily work'],
                        ['id' => 'hiring', 'name' => 'Hiring & Values', 'icon' => 'user-add', 'description' => 'How we assess value alignment'],
                        ['id' => 'growth', 'name' => 'Growth & Development', 'icon' => 'trending', 'description' => 'Living values through learning']
                    ],
                    'faqs' => [
                        [
                            'id' => 'faq-values-1',
                            'category' => 'hiring',
                            'icon' => 'question',
                            'question' => 'How do you assess cultural alignment during hiring?',
                            'answer' => 'We use behavior-based interviewing focused on past actions, not hypotheticals. Candidates are asked to share specific examples of times they demonstrated our core values, such as owning a mistake, putting a customer first, or collaborating across teams. We also have a values-based panel interview where multiple team members assess alignment.',
                            'tags' => ['hiring', 'culture', 'interview'],
                            'link' => '/careers/interview-process',
                            'updatedAt' => '2025-01-18',
                            'views' => 1250
                        ],
                        [
                            'id' => 'faq-values-2',
                            'category' => 'culture',
                            'icon' => 'lightbulb',
                            'question' => 'What does \'Innovate Relentlessly\' look like in practice?',
                            'answer' => 'We dedicate 20% of engineering time to exploration and prototyping. Every quarter, we host company-wide innovation sprints where anyone can pitch an idea and form a team to build a prototype. The best ideas get funded for full development. Recent innovations include our AI-powered forecasting tool and mobile offline mode.',
                            'tags' => ['innovation', 'process', 'development'],
                            'link' => '/innovation-lab',
                            'updatedAt' => '2025-02-01',
                            'views' => 890
                        ],
                        [
                            'id' => 'faq-values-3',
                            'category' => 'growth',
                            'icon' => 'academic',
                            'question' => 'How does the company support continuous learning?',
                            'answer' => 'Every employee receives an annual learning stipend for courses, conferences, and books. We host weekly \'Lunch & Learn\' sessions where team members share expertise. We also have internal mentorship programs, a book club, and encourage job shadowing across departments. Learning is a key component of our performance review process.',
                            'tags' => ['learning', 'development', 'growth'],
                            'link' => '/learning',
                            'updatedAt' => '2025-01-25',
                            'views' => 760
                        ]
                    ],
                    'contactText' => 'Share our values? Join a team where principles drive impact.',
                    'contactLink' => '/careers',
                    'contactButtonText' => 'Explore Careers',
                    'contactImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 346,
                'section_key' => 'coreValues',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Our Compass',
                        'backgroundColor' => 'bg-rose-100 dark:bg-rose-900/30',
                        'borderColor' => 'border-rose-200 dark:border-rose-800',
                        'textColor' => 'text-rose-700 dark:text-rose-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Values That',
                        'highlightedText' => 'Define Us',
                        'suffix' => 'And Drive Us Forward',
                        'highlightGradient' => 'from-rose-600 to-pink-600'
                    ],
                    'description' => 'Our core values aren\'t just words—they\'re the DNA of our company. They shape our culture, guide our decisions, and define how we show up for each other and our customers every single day.',
                    'heroImage' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=500&fit=crop',
                    'stats' => [
                        ['icon' => 'users', 'value' => '750+', 'label' => 'Team Members'],
                        ['icon' => 'globe', 'value' => '45+', 'label' => 'Countries Represented'],
                        ['icon' => 'chart', 'value' => '4.9/5', 'label' => 'Culture Score'],
                        ['icon' => 'trophy', 'value' => '25+', 'label' => 'Best Place to Work Awards']
                    ],
                    'values' => [
                        [
                            'icon' => 'sparkles',
                            'title' => 'Bold Curiosity',
                            'description' => 'We ask \'what if\' constantly, challenge assumptions, and embrace the unknown as an opportunity to learn and grow.',
                            'example' => 'Weekly exploration time for new technologies and ideas',
                            'image' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop'
                        ],
                        [
                            'icon' => 'shield',
                            'title' => 'Radical Accountability',
                            'description' => 'We own our outcomes—good and bad—without blame, learning from every experience to do better next time.',
                            'example' => 'Blameless post-mortems and transparent retrospectives',
                            'image' => 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop'
                        ],
                        [
                            'icon' => 'heart',
                            'title' => 'Generous Empathy',
                            'description' => 'We listen deeply, assume positive intent, and extend grace, recognizing that everyone is doing their best.',
                            'example' => 'Compassionate leave policies and mental health support',
                            'image' => 'https://images.unsplash.com/photo-1532622785990-d2c36a76f5a6?w=600&h=400&fit=crop'
                        ],
                        [
                            'icon' => 'users',
                            'title' => 'Collective Genius',
                            'description' => 'We believe the best solutions emerge from diverse perspectives working together toward a shared purpose.',
                            'example' => 'Cross-functional pods and inclusive decision-making',
                            'image' => 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=400&fit=crop'
                        ],
                        [
                            'icon' => 'lightbulb',
                            'title' => 'Courageous Candor',
                            'description' => 'We speak truth with respect, share feedback generously, and invite dissent to make better decisions.',
                            'example' => 'Regular feedback loops and anonymous suggestion channels',
                            'image' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop'
                        ],
                        [
                            'icon' => 'globe',
                            'title' => 'Purposeful Impact',
                            'description' => 'We measure success not just by results, but by the positive difference we make in people\'s lives.',
                            'example' => '1% of time donated to pro-bono projects',
                            'image' => 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop'
                        ]
                    ],
                    'testimonials' => [
                        [
                            'quote' => 'What stands out most is how values aren\'t just celebrated when things go right—they\'re invoked when things go wrong too. That\'s real integrity.',
                            'name' => 'Aisha Patel',
                            'role' => 'Engineering Director',
                            'icon' => 'user',
                            'image' => 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&h=150&fit=crop'
                        ],
                        [
                            'quote' => 'I\'ve never experienced a place where \'psychological safety\' is actually practiced, not just preached. Here, I can bring my whole self to work.',
                            'name' => 'James O\'Brien',
                            'role' => 'Product Designer',
                            'icon' => 'user',
                            'image' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop'
                        ],
                        [
                            'quote' => 'The emphasis on learning and growth is incredible. My manager actively encourages me to take risks and learn from failures.',
                            'name' => 'Lin Wei',
                            'role' => 'Data Scientist',
                            'icon' => 'user',
                            'image' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop'
                        ]
                    ],
                    'videos' => [
                        [
                            'title' => 'Living Our Values: A Day in the Life',
                            'duration' => '3:45',
                            'author' => 'Culture Team',
                            'url' => '/videos/values-day-in-life.mp4',
                            'thumbnail' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop'
                        ],
                        [
                            'title' => 'Why I Joined: Team Stories',
                            'duration' => '4:20',
                            'author' => 'Employee Stories',
                            'url' => '/videos/why-we-joined.mp4',
                            'thumbnail' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop'
                        ],
                        [
                            'title' => 'Values in Action: Customer First',
                            'duration' => '2:50',
                            'author' => 'Customer Success',
                            'url' => '/videos/customer-first.mp4',
                            'thumbnail' => 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=300&fit=crop'
                        ]
                    ],
                    'recognitions' => [
                        ['icon' => 'trophy', 'title' => 'Best Company Culture', 'awarder' => 'Forbes', 'year' => '2024'],
                        ['icon' => 'heart', 'title' => 'Top Workplace for Diversity', 'awarder' => 'Fortune', 'year' => '2024'],
                        ['icon' => 'users', 'title' => 'Employee Approved', 'awarder' => 'Glassdoor', 'year' => '2024']
                    ],
                    'faqCategories' => [
                        ['id' => 'culture', 'name' => 'Culture & Environment', 'icon' => 'office-building', 'description' => 'How values shape our workplace'],
                        ['id' => 'practices', 'name' => 'Daily Practices', 'icon' => 'calendar', 'description' => 'Values in action every day'],
                        ['id' => 'recognition', 'name' => 'Recognition & Growth', 'icon' => 'trophy', 'description' => 'How we celebrate values']
                    ],
                    'faqs' => [
                        [
                            'id' => 'faq-values-1',
                            'category' => 'practices',
                            'icon' => 'question',
                            'question' => 'How does \'Radical Accountability\' work in practice?',
                            'answer' => 'When something goes wrong, we focus on the system, not the person. Our blameless post-mortem process asks: "What can we learn?" and "How can we improve the system?" rather than "Who made a mistake?" This encourages innovation and risk-taking because people know they won\'t be punished for good-faith efforts.',
                            'tags' => ['accountability', 'blameless', 'learning'],
                            'link' => '/culture/accountability',
                            'updatedAt' => '2025-01-22',
                            'views' => 1120
                        ],
                        [
                            'id' => 'faq-values-2',
                            'category' => 'culture',
                            'icon' => 'lightbulb',
                            'question' => 'What does \'Courageous Candor\' look like in meetings?',
                            'answer' => 'We practice \'disagree and commit.\' Every team member is expected to voice concerns or alternative viewpoints before a decision is made. We use techniques like \'silent brainstorming\' to ensure introverts are heard, and we have an \'oops\' jar for when someone says \'I told you so\' (the jar funds team lunches). After a decision, everyone commits fully.',
                            'tags' => ['candor', 'feedback', 'meetings'],
                            'link' => '/culture/candor',
                            'updatedAt' => '2025-02-03',
                            'views' => 980
                        ],
                        [
                            'id' => 'faq-values-3',
                            'category' => 'recognition',
                            'icon' => 'trophy',
                            'question' => 'How do you recognize value-driven behavior?',
                            'answer' => 'We have a peer-to-peer recognition program called \'Value Shoutouts\' where anyone can nominate a colleague for living a value. Winners receive a bonus and are featured in our company newsletter. We also have quarterly \'Value Awards\' with larger prizes, and value demonstration is a key component of performance reviews and promotion decisions.',
                            'tags' => ['recognition', 'awards', 'rewards'],
                            'link' => '/culture/recognition',
                            'updatedAt' => '2025-01-15',
                            'views' => 845
                        ]
                    ],
                    'contactText' => 'Values-driven culture awaits. Join a team that puts principles into practice.',
                    'contactLink' => '/careers',
                    'contactButtonText' => 'Explore Opportunities',
                    'contactImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 347,
                'section_key' => 'coreValues',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Our DNA',
                        'backgroundColor' => 'bg-violet-100 dark:bg-violet-900/30',
                        'borderColor' => 'border-violet-200 dark:border-violet-800',
                        'textColor' => 'text-violet-700 dark:text-violet-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Values That',
                        'highlightedText' => 'Move Us',
                        'suffix' => 'Forward Together',
                        'highlightGradient' => 'from-violet-600 to-purple-600'
                    ],
                    'description' => 'Our core values are the heartbeat of our organization. They shape our culture, guide our decisions, and define how we show up for each other, our customers, and the world around us.',
                    'heroImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=500&fit=crop',
                    'stats' => [
                        ['icon' => 'users', 'value' => '850+', 'label' => 'Team Members'],
                        ['icon' => 'globe', 'value' => '50+', 'label' => 'Countries'],
                        ['icon' => 'chart', 'value' => '92%', 'label' => 'Employee Engagement'],
                        ['icon' => 'trophy', 'value' => '35+', 'label' => 'Culture Awards']
                    ],
                    'values' => [
                        [
                            'icon' => 'sparkles',
                            'title' => 'Bold Curiosity',
                            'description' => 'We question everything, embrace the unknown, and treat every challenge as an opportunity to learn, grow, and innovate.',
                            'example' => 'Weekly \'What If\' sessions where any team member can pitch experimental ideas.',
                            'initiative' => 'Innovation Lab: 20% time for passion projects and cross-team collaboration.',
                            'image' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop'
                        ],
                        [
                            'icon' => 'shield',
                            'title' => 'Unwavering Integrity',
                            'description' => 'We do the right thing, even when no one is watching. Honesty and transparency are never negotiable.',
                            'example' => 'Public transparency reports and open salary bands for all roles.',
                            'initiative' => 'Ethics First: Quarterly ethics training and anonymous reporting channels.',
                            'image' => 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop'
                        ],
                        [
                            'icon' => 'heart',
                            'title' => 'Radical Empathy',
                            'description' => 'We listen deeply, assume positive intent, and lead with compassion in every interaction.',
                            'example' => 'Mental health days, compassionate leave, and global well-being stipends.',
                            'initiative' => 'Empathy in Action: Monthly team-building focused on active listening.',
                            'image' => 'https://images.unsplash.com/photo-1532622785990-d2c36a76f5a6?w=600&h=400&fit=crop'
                        ],
                        [
                            'icon' => 'users',
                            'title' => 'Collective Genius',
                            'description' => 'We believe the best solutions emerge when diverse voices collaborate toward a shared purpose.',
                            'example' => 'Cross-functional pods and inclusive decision-making frameworks.',
                            'initiative' => 'Diverse Perspectives: Rotating meeting facilitators and silent brainstorming.',
                            'image' => 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=400&fit=crop'
                        ],
                        [
                            'icon' => 'lightbulb',
                            'title' => 'Courageous Candor',
                            'description' => 'We share feedback generously, invite dissent, and speak truth with respect and kindness.',
                            'example' => 'Real-time feedback tools and \'disagree and commit\' culture.',
                            'initiative' => 'Candor Corps: Peer coaches trained in giving effective feedback.',
                            'image' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop'
                        ],
                        [
                            'icon' => 'globe',
                            'title' => 'Purposeful Impact',
                            'description' => 'We measure success not just by results, but by the positive difference we make in people\'s lives.',
                            'example' => '1% of equity set aside for social impact initiatives.',
                            'initiative' => 'Impact First: Annual pro-bono projects for non-profits.',
                            'image' => 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop'
                        ]
                    ],
                    'testimonials' => [
                        [
                            'quote' => 'What I love most is how values are woven into everyday decisions—from hiring to promotions to how we handle mistakes. It\'s authentic.',
                            'name' => 'Zara Khan',
                            'role' => 'VP of Product',
                            'icon' => 'user',
                            'value' => 'Unwavering Integrity',
                            'image' => 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&h=150&fit=crop'
                        ],
                        [
                            'quote' => 'I\'ve never been somewhere where \'psychological safety\' is actually practiced, not just preached. Here, I can bring my whole self to work.',
                            'name' => 'Carlos Mendez',
                            'role' => 'Senior Designer',
                            'icon' => 'user',
                            'value' => 'Radical Empathy',
                            'image' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop'
                        ],
                        [
                            'quote' => 'The emphasis on learning and growth is incredible. My manager actively encourages me to take risks and learn from failures.',
                            'name' => 'Mei Lin',
                            'role' => 'Data Engineer',
                            'icon' => 'user',
                            'value' => 'Bold Curiosity',
                            'image' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop'
                        ]
                    ],
                    'videos' => [
                        [
                            'title' => 'Values in Action: A Day in Our Culture',
                            'duration' => '4:30',
                            'author' => 'Sarah Chen',
                            'role' => 'Culture Lead',
                            'url' => '/videos/values-in-action.mp4',
                            'thumbnail' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop'
                        ],
                        [
                            'title' => 'Why I Joined: Stories from Our Team',
                            'duration' => '5:15',
                            'author' => 'Marcus Thompson',
                            'role' => 'Engineering Manager',
                            'url' => '/videos/why-we-joined.mp4',
                            'thumbnail' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop'
                        ],
                        [
                            'title' => 'Living Our Values: Customer First',
                            'duration' => '3:45',
                            'author' => 'Aisha Patel',
                            'role' => 'Customer Success',
                            'url' => '/videos/customer-first.mp4',
                            'thumbnail' => 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=300&fit=crop'
                        ]
                    ],
                    'recognitions' => [
                        [
                            'icon' => 'trophy',
                            'title' => 'Best Company Culture',
                            'awarder' => 'Forbes',
                            'year' => '2024',
                            'description' => 'Recognized for exceptional workplace culture and employee satisfaction.',
                            'details' => 'This award is based on anonymous employee surveys measuring trust, inclusion, and work-life balance.'
                        ],
                        [
                            'icon' => 'heart',
                            'title' => 'Top Workplace for Diversity',
                            'awarder' => 'Fortune',
                            'year' => '2024',
                            'description' => 'Celebrating our commitment to inclusive hiring and belonging.',
                            'details' => 'Ranked in top 10 for representation across leadership and technical roles.'
                        ],
                        [
                            'icon' => 'users',
                            'title' => 'Employee Approved',
                            'awarder' => 'Glassdoor',
                            'year' => '2024',
                            'description' => '95% of employees would recommend working here to a friend.',
                            'details' => 'Based on over 500 verified employee reviews.'
                        ]
                    ],
                    'initiatives' => [
                        [
                            'icon' => 'academic',
                            'title' => 'Values Fellowship',
                            'description' => 'Annual program where employees take 6 weeks to work on a passion project aligned with our values.',
                            'value' => 'Bold Curiosity',
                            'impact' => '12 projects funded, 3 launched as products',
                            'image' => 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop'
                        ],
                        [
                            'icon' => 'globe',
                            'title' => 'Community Impact Week',
                            'description' => 'Twice-yearly company-wide volunteering across 20+ global locations.',
                            'value' => 'Purposeful Impact',
                            'impact' => '3,500+ hours donated annually',
                            'image' => 'https://images.unsplash.com/photo-1532622785990-d2c36a76f5a6?w=600&h=400&fit=crop'
                        ],
                        [
                            'icon' => 'chat',
                            'title' => 'Candor Circles',
                            'description' => 'Small peer groups practicing radical candor and giving real-time feedback.',
                            'value' => 'Courageous Candor',
                            'impact' => '85% participation rate',
                            'image' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop'
                        ]
                    ],
                    'faqCategories' => [
                        ['id' => 'values', 'name' => 'Our Values', 'icon' => 'heart', 'description' => 'Understanding our core principles'],
                        ['id' => 'culture', 'name' => 'Work Culture', 'icon' => 'office-building', 'description' => 'How values shape daily work'],
                        ['id' => 'recognition', 'name' => 'Recognition', 'icon' => 'trophy', 'description' => 'How we celebrate values']
                    ],
                    'faqs' => [
                        [
                            'id' => 'faq-values-1',
                            'category' => 'values',
                            'icon' => 'question',
                            'question' => 'How do you ensure values aren\'t just words on a wall?',
                            'answer' => 'Values are integrated into everything: hiring (values-based interview questions), onboarding (values immersion week), performance reviews (values demonstrated), promotions (values leadership), and offboarding (exit interviews ask about values alignment). We also have a quarterly \'Values Audit\' where employees anonymously rate how well we\'re living each value.',
                            'tags' => ['values', 'accountability', 'culture'],
                            'link' => '/culture/values-in-action',
                            'updatedAt' => '2025-01-20',
                            'views' => 1340
                        ],
                        [
                            'id' => 'faq-values-2',
                            'category' => 'culture',
                            'icon' => 'lightbulb',
                            'question' => 'What happens when values conflict?',
                            'answer' => 'We prioritize using our \'Values Compass\' framework: first, do no harm (Integrity). Second, seek to understand (Empathy). Third, speak up (Candor). Fourth, innovate (Curiosity). For example, if speed conflicts with quality, we ask: "Does moving fast compromise our integrity or customer trust?" If yes, we slow down.',
                            'tags' => ['conflict', 'decision-making', 'priorities'],
                            'link' => '/culture/values-compass',
                            'updatedAt' => '2025-02-05',
                            'views' => 1120
                        ],
                        [
                            'id' => 'faq-values-3',
                            'category' => 'recognition',
                            'icon' => 'trophy',
                            'question' => 'How are values recognized and rewarded?',
                            'answer' => 'We have a peer-to-peer \'Value Shoutout\' program where anyone can nominate a colleague. Winners receive a bonus and are featured in our newsletter. Quarterly \'Value Awards\' include a larger cash prize and a donation to a charity of the winner\'s choice. Values demonstration is also a key factor in promotion decisions and annual bonuses.',
                            'tags' => ['recognition', 'rewards', 'promotion'],
                            'link' => '/culture/rewards',
                            'updatedAt' => '2025-01-12',
                            'views' => 980
                        ]
                    ],
                    'contactText' => 'Values-driven culture awaits. Join a team where principles meet practice.',
                    'contactLink' => '/careers',
                    'contactButtonText' => 'Join Our Team',
                    'contactImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 348,
                'section_key' => 'coreValues',
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
