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

            // Leadership Team Section
            [
                'id' => 349,
                'section_key' => 'leadershipTeam',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Meet Our Leaders',
                        'backgroundColor' => 'bg-sky-100 dark:bg-sky-900/30',
                        'borderColor' => 'border-sky-200 dark:border-sky-800',
                        'textColor' => 'text-sky-700 dark:text-sky-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'The Visionaries',
                        'highlightedText' => 'Behind Our Success',
                        'suffix' => '',
                        'highlightGradient' => 'from-sky-600 to-blue-600'
                    ],
                    'description' => 'Our leadership team brings together decades of experience, diverse perspectives, and a shared passion for innovation. Meet the people shaping our strategy and driving our mission forward.',
                    'heroImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=500&fit=crop',
                    'stats' => [
                        ['icon' => 'users', 'value' => '12', 'label' => 'Executive Leaders'],
                        ['icon' => 'globe', 'value' => '8', 'label' => 'Countries Represented'],
                        ['icon' => 'chart', 'value' => '150+', 'label' => 'Combined Years Experience'],
                        ['icon' => 'academic', 'value' => '45+', 'label' => 'Degrees & Certifications']
                    ],
                    'departments' => [
                        ['id' => 'executive', 'name' => 'Executive', 'icon' => 'star'],
                        ['id' => 'product', 'name' => 'Product', 'icon' => 'sparkles'],
                        ['id' => 'engineering', 'name' => 'Engineering', 'icon' => 'chip'],
                        ['id' => 'sales', 'name' => 'Sales', 'icon' => 'chart'],
                        ['id' => 'marketing', 'name' => 'Marketing', 'icon' => 'megaphone'],
                        ['id' => 'people', 'name' => 'People', 'icon' => 'users']
                    ],
                    'leaders' => [
                        [
                            'name' => 'Dr. Elena Vasquez',
                            'title' => 'Chief Executive Officer',
                            'department' => 'executive',
                            'icon' => 'user',
                            'bio' => 'Elena brings over 20 years of experience scaling enterprise technology companies. Previously CTO at DataVision, she holds a PhD in Computer Science from MIT.',
                            'fullBio' => 'Dr. Elena Vasquez joined us as CEO in 2020, bringing a unique blend of technical expertise and business acumen. Under her leadership, the company has tripled its revenue and expanded into 15 new markets. Prior to joining, Elena served as CTO at DataVision, where she led the development of their flagship AI platform. She holds a PhD in Computer Science from MIT and serves on the board of TechForward, a non-profit promoting women in technology.',
                            'experience' => 22,
                            'education' => 'PhD, MIT',
                            'previousRoles' => ['CTO at DataVision', 'VP Engineering at CloudScale', 'Lead Architect at InnoSoft'],
                            'linkedin' => 'https://linkedin.com/in/elena-vasquez',
                            'twitter' => 'https://twitter.com/elenavasquez',
                            'email' => 'elena@example.com',
                            'image' => 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&h=300&fit=crop'
                        ],
                        [
                            'name' => 'Marcus Chen',
                            'title' => 'Chief Product Officer',
                            'department' => 'product',
                            'icon' => 'user',
                            'bio' => 'Marcus has led product teams at Fortune 500 companies and successful startups. He\'s passionate about creating intuitive experiences that solve real problems.',
                            'fullBio' => 'Marcus Chen is a product visionary with a track record of launching award-winning products. Before joining us, he was VP of Product at Innovate Labs, where he grew the platform from 0 to 1 million users. Marcus holds an MBA from Stanford and a BS in Computer Science from UC Berkeley. He\'s a frequent speaker at industry conferences and mentors early-stage founders.',
                            'experience' => 18,
                            'education' => 'MBA, Stanford',
                            'previousRoles' => ['VP Product at Innovate Labs', 'Senior PM at Google', 'Founder of ProductFlow'],
                            'linkedin' => 'https://linkedin.com/in/marcus-chen',
                            'twitter' => 'https://twitter.com/marcuschen',
                            'email' => 'marcus@example.com',
                            'image' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop'
                        ],
                        [
                            'name' => 'Priya Kapoor',
                            'title' => 'Chief Technology Officer',
                            'department' => 'engineering',
                            'icon' => 'user',
                            'bio' => 'Priya is a distributed systems expert who has built engineering teams from the ground up at multiple unicorn startups.',
                            'fullBio' => 'Priya Kapoor leads our global engineering organization of 200+ developers. She previously served as VP Engineering at ScaleTech, where she architected a platform handling billions of requests daily. Priya holds a Master\'s in Computer Science from Carnegie Mellon and is passionate about developer productivity and open source. She\'s also the founder of WomenWhoCode in her local community.',
                            'experience' => 16,
                            'education' => 'MS, Carnegie Mellon',
                            'previousRoles' => ['VP Engineering at ScaleTech', 'Tech Lead at Amazon', 'Software Engineer at Microsoft'],
                            'linkedin' => 'https://linkedin.com/in/priya-kapoor',
                            'twitter' => 'https://twitter.com/priyakapoor',
                            'email' => 'priya@example.com',
                            'image' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop'
                        ],
                        [
                            'name' => 'David Okafor',
                            'title' => 'Chief Revenue Officer',
                            'department' => 'sales',
                            'icon' => 'user',
                            'bio' => 'David has consistently delivered double-digit revenue growth across B2B SaaS companies in North America and EMEA.',
                            'fullBio' => 'David Okafor brings 20 years of sales leadership experience, having scaled revenue from $10M to $200M at two previous companies. He holds an MBA from Harvard Business School and a BA in Economics from Oxford. David is known for building high-performance sales cultures and customer-centric revenue strategies.',
                            'experience' => 20,
                            'education' => 'MBA, Harvard',
                            'previousRoles' => ['CRO at GrowthTech', 'VP Sales at EnterpriseSoft', 'Regional Director at Salesforce'],
                            'linkedin' => 'https://linkedin.com/in/david-okafor',
                            'twitter' => 'https://twitter.com/davidokafor',
                            'email' => 'david@example.com',
                            'image' => 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop'
                        ],
                        [
                            'name' => 'Sophia Laurent',
                            'title' => 'Chief Marketing Officer',
                            'department' => 'marketing',
                            'icon' => 'user',
                            'bio' => 'Sophia is a brand builder and demand generation expert who has led marketing for both B2B and B2C tech companies.',
                            'fullBio' => 'Sophia Laurent has been recognized as one of the top 50 CMOs in the world. She previously led marketing at BrandWave, where she grew organic traffic by 300% and increased conversion rates by 45%. Sophia holds a Master\'s in Marketing from Northwestern and is a frequent contributor to industry publications.',
                            'experience' => 15,
                            'education' => 'MS, Northwestern',
                            'previousRoles' => ['CMO at BrandWave', 'VP Marketing at ConsumerTech', 'Director at Ogilvy'],
                            'linkedin' => 'https://linkedin.com/in/sophia-laurent',
                            'twitter' => 'https://twitter.com/sophialaurent',
                            'email' => 'sophia@example.com',
                            'image' => 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop'
                        ],
                        [
                            'name' => 'James Wilson',
                            'title' => 'Chief People Officer',
                            'department' => 'people',
                            'icon' => 'user',
                            'bio' => 'James has built award-winning workplace cultures at high-growth tech companies, focusing on inclusion and development.',
                            'fullBio' => 'James Wilson is an expert in organizational development and talent strategy. He previously served as VP of People at UnicornSoft, where he scaled the team from 50 to 500 while maintaining a 4.9 Glassdoor rating. James holds a Master\'s in Industrial-Organizational Psychology from Columbia and is a certified executive coach.',
                            'experience' => 14,
                            'education' => 'MA, Columbia',
                            'previousRoles' => ['VP People at UnicornSoft', 'HR Director at FastScale', 'People Lead at Accenture'],
                            'linkedin' => 'https://linkedin.com/in/james-wilson',
                            'twitter' => 'https://twitter.com/jameswilson',
                            'email' => 'james@example.com',
                            'image' => 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop'
                        ]
                    ],
                    'faqCategories' => [
                        ['id' => 'team', 'name' => 'Leadership Team', 'icon' => 'users', 'description' => 'Questions about our leaders'],
                        ['id' => 'approach', 'name' => 'Leadership Approach', 'icon' => 'lightbulb', 'description' => 'How leaders guide the company']
                    ],
                    'faqs' => [
                        [
                            'id' => 'faq-leadership-1',
                            'category' => 'team',
                            'icon' => 'question',
                            'question' => 'How often does the leadership team communicate with employees?',
                            'answer' => 'Our leadership team prioritizes transparency and regular communication. We hold weekly all-hands meetings where leaders share company updates, financial performance, and strategic priorities. There\'s also a monthly AMA (Ask Me Anything) session with a rotating executive, and quarterly off-sites where cross-functional teams present directly to leadership.',
                            'tags' => ['communication', 'transparency', 'meetings'],
                            'link' => '/culture/communication',
                            'updatedAt' => '2025-01-18',
                            'views' => 890
                        ],
                        [
                            'id' => 'faq-leadership-2',
                            'category' => 'approach',
                            'icon' => 'lightbulb',
                            'question' => 'What is the leadership team\'s approach to diversity and inclusion?',
                            'answer' => 'Diversity and inclusion are core priorities from the top down. Our CEO co-chairs the D&I council, and every executive has D&I goals tied to their compensation. We\'ve implemented blind resume screening, diverse interview panels, and leadership sponsorship programs for underrepresented groups.',
                            'tags' => ['diversity', 'inclusion', 'DEI'],
                            'link' => '/diversity',
                            'updatedAt' => '2025-02-01',
                            'views' => 1240
                        ],
                        [
                            'id' => 'faq-leadership-3',
                            'category' => 'team',
                            'icon' => 'star',
                            'question' => 'How can I connect with a member of the leadership team?',
                            'answer' => 'We encourage open communication! You can reach any leader via email (firstname@company.com) or Slack. Our CEO also holds monthly office hours where any employee can sign up for a 15-minute slot. For external inquiries, please contact our Communications team at press@company.com.',
                            'tags' => ['communication', 'accessibility', 'office hours'],
                            'link' => '/contact',
                            'updatedAt' => '2025-01-25',
                            'views' => 760
                        ]
                    ],
                    'contactText' => 'Interested in connecting with our leadership team? Reach out to learn more.',
                    'contactLink' => '/contact',
                    'contactButtonText' => 'Get in Touch',
                    'contactImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 350,
                'section_key' => 'leadershipTeam',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Executive Leadership',
                        'backgroundColor' => 'bg-indigo-100 dark:bg-indigo-900/30',
                        'borderColor' => 'border-indigo-200 dark:border-indigo-800',
                        'textColor' => 'text-indigo-700 dark:text-indigo-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Meet the',
                        'highlightedText' => 'Executive Team',
                        'suffix' => 'Driving Our Vision',
                        'highlightGradient' => 'from-indigo-600 to-purple-600'
                    ],
                    'description' => 'Our executive leadership team brings together unparalleled expertise, diverse backgrounds, and a shared commitment to excellence. Get to know the people steering our strategic direction and shaping our future.',
                    'heroImage' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=500&fit=crop',
                    'stats' => [
                        ['icon' => 'users', 'value' => '8', 'label' => 'Executive Leaders'],
                        ['icon' => 'globe', 'value' => '6', 'label' => 'Nationalities'],
                        ['icon' => 'chart', 'value' => '120+', 'label' => 'Combined Years Experience'],
                        ['icon' => 'academic', 'value' => '25+', 'label' => 'Advanced Degrees']
                    ],
                    'departments' => [
                        ['id' => 'executive', 'name' => 'Executive', 'icon' => 'star'],
                        ['id' => 'product', 'name' => 'Product', 'icon' => 'sparkles'],
                        ['id' => 'technology', 'name' => 'Technology', 'icon' => 'chip'],
                        ['id' => 'revenue', 'name' => 'Revenue', 'icon' => 'chart'],
                        ['id' => 'marketing', 'name' => 'Marketing', 'icon' => 'megaphone'],
                        ['id' => 'people', 'name' => 'People & Culture', 'icon' => 'users']
                    ],
                    'leaders' => [
                        [
                            'name' => 'Dr. Sarah Chen',
                            'title' => 'Chief Executive Officer',
                            'department' => 'executive',
                            'icon' => 'user',
                            'bio' => 'Sarah is a visionary leader with a track record of scaling tech companies from startup to IPO. She holds a PhD in Computer Science from Stanford.',
                            'fullBio' => 'Dr. Sarah Chen joined as CEO in 2019, bringing 18 years of leadership experience. Under her guidance, the company has tripled its valuation and expanded into 12 new markets. Prior to her current role, Sarah served as COO at TechScale and led product at DataVision. She\'s a passionate advocate for women in tech.',
                            'experience' => 18,
                            'education' => 'PhD, Stanford University',
                            'joined' => '2019',
                            'previousRoles' => ['COO at TechScale', 'VP Product at DataVision', 'Lead Engineer at Google'],
                            'achievements' => ['Forbes 50 Over 50', 'Fortune Most Powerful Women', 'Inc. CEO of the Year Finalist'],
                            'linkedin' => 'https://linkedin.com/in/sarah-chen',
                            'twitter' => 'https://twitter.com/sarahchen',
                            'email' => 'sarah.chen@example.com',
                            'image' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop'
                        ],
                        [
                            'name' => 'Michael Okonkwo',
                            'title' => 'Chief Product Officer',
                            'department' => 'product',
                            'icon' => 'user',
                            'bio' => 'Michael has led product teams at both Fortune 500 companies and successful startups, launching products used by millions globally.',
                            'fullBio' => 'Michael Okonkwo is a product visionary who has shipped over 50 major product releases. Before joining us, he was VP of Product at InnovateSoft, where he grew the platform from 0 to 5 million users. Michael holds an MBA from Harvard and a BS in Computer Science from MIT.',
                            'experience' => 15,
                            'education' => 'MBA, Harvard Business School',
                            'joined' => '2020',
                            'previousRoles' => ['VP Product at InnovateSoft', 'Senior PM at Amazon', 'Product Lead at Microsoft'],
                            'achievements' => ['Product Leader of the Year 2023', 'Forbes 30 Under 30 Alumni', 'Holder of 12 product patents'],
                            'linkedin' => 'https://linkedin.com/in/michael-okonkwo',
                            'twitter' => 'https://twitter.com/michaelokonkwo',
                            'email' => 'michael.o@example.com',
                            'image' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop'
                        ],
                        [
                            'name' => 'Elena Kowalski',
                            'title' => 'Chief Technology Officer',
                            'department' => 'technology',
                            'icon' => 'user',
                            'bio' => 'Elena is a distributed systems expert who has built and led engineering teams at multiple unicorn startups.',
                            'fullBio' => 'Elena Kowalski leads our global engineering organization of 300+ developers. She previously served as VP Engineering at ScaleTech, where she architected a platform handling over 1 billion requests daily. Elena holds a Master\'s in Computer Science from Carnegie Mellon and is passionate about open source.',
                            'experience' => 16,
                            'education' => 'MS, Carnegie Mellon University',
                            'joined' => '2021',
                            'previousRoles' => ['VP Engineering at ScaleTech', 'Tech Lead at Netflix', 'Software Engineer at Google'],
                            'achievements' => ['Top 50 Women in Tech 2024', 'ACM Distinguished Engineer', 'Open Source Contributor of the Year'],
                            'linkedin' => 'https://linkedin.com/in/elena-kowalski',
                            'twitter' => 'https://twitter.com/elenakowalski',
                            'email' => 'elena.k@example.com',
                            'image' => 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop'
                        ],
                        [
                            'name' => 'David Park',
                            'title' => 'Chief Revenue Officer',
                            'department' => 'revenue',
                            'icon' => 'user',
                            'bio' => 'David has consistently delivered double-digit revenue growth across B2B SaaS companies in North America, EMEA, and APAC.',
                            'fullBio' => 'David Park brings 20 years of sales leadership experience, having scaled revenue from $10M to $200M at two previous companies. He holds an MBA from Wharton and a BA in Economics from Yale. David is known for building high-performance sales cultures.',
                            'experience' => 20,
                            'education' => 'MBA, Wharton School',
                            'joined' => '2018',
                            'previousRoles' => ['CRO at GrowthTech', 'VP Sales at EnterpriseSoft', 'Regional Director at Salesforce'],
                            'achievements' => ['Sales Leader of the Year 2022', 'President\'s Club (10x)', 'Top 25 SaaS Sales Leaders'],
                            'linkedin' => 'https://linkedin.com/in/david-park',
                            'twitter' => 'https://twitter.com/davidpark',
                            'email' => 'david.park@example.com',
                            'image' => 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop'
                        ],
                        [
                            'name' => 'Isabella Rossi',
                            'title' => 'Chief Marketing Officer',
                            'department' => 'marketing',
                            'icon' => 'user',
                            'bio' => 'Isabella is a brand builder and demand generation expert who has led marketing for both B2B and B2C tech companies.',
                            'fullBio' => 'Isabella Rossi has been recognized as one of the top 50 CMOs in the world. She previously led marketing at BrandWave, where she grew organic traffic by 400% and increased conversion rates by 55%. Isabella holds a Master\'s in Marketing from Northwestern.',
                            'experience' => 14,
                            'education' => 'MS, Northwestern University',
                            'joined' => '2019',
                            'previousRoles' => ['CMO at BrandWave', 'VP Marketing at ConsumerTech', 'Director at Ogilvy'],
                            'achievements' => ['CMO of the Year 2023', 'Forbes Top 50 CMOs', 'AdWeek Brand Genius'],
                            'linkedin' => 'https://linkedin.com/in/isabella-rossi',
                            'twitter' => 'https://twitter.com/isabellarossi',
                            'email' => 'isabella.rossi@example.com',
                            'image' => 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&h=300&fit=crop'
                        ],
                        [
                            'name' => 'James Whitaker',
                            'title' => 'Chief People Officer',
                            'department' => 'people',
                            'icon' => 'user',
                            'bio' => 'James has built award-winning workplace cultures at high-growth tech companies, focusing on inclusion and employee development.',
                            'fullBio' => 'James Whitaker is an expert in organizational development and talent strategy. He previously served as VP of People at UnicornSoft, where he scaled the team from 50 to 500 while maintaining a 4.9 Glassdoor rating. James holds a Master\'s in Industrial-Organizational Psychology from Columbia.',
                            'experience' => 12,
                            'education' => 'MA, Columbia University',
                            'joined' => '2020',
                            'previousRoles' => ['VP People at UnicornSoft', 'HR Director at FastScale', 'People Lead at Accenture'],
                            'achievements' => ['HR Executive of the Year 2024', 'Best Places to Work (5x)', 'DEI Champion Award'],
                            'linkedin' => 'https://linkedin.com/in/james-whitaker',
                            'twitter' => 'https://twitter.com/jameswhitaker',
                            'email' => 'james.whitaker@example.com',
                            'image' => 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop'
                        ]
                    ],
                    'categories' => [
                        ['id' => 'strategy', 'name' => 'Strategy & Vision', 'icon' => 'lightbulb'],
                        ['id' => 'culture', 'name' => 'Leadership Culture', 'icon' => 'heart'],
                        ['id' => 'engagement', 'name' => 'Employee Engagement', 'icon' => 'users']
                    ],
                    'faqs' => [
                        [
                            'id' => 'faq-leadership-1',
                            'category' => 'strategy',
                            'icon' => 'lightbulb',
                            'question' => 'What is the leadership team\'s strategic focus for the next 3 years?',
                            'answer' => 'Our strategic focus is threefold: 1) AI-first product innovation to deliver predictive insights, 2) Global expansion into emerging markets with localized solutions, and 3) Sustainable growth through customer-centric operations. Each executive leads a pillar, and we review progress quarterly with the board.',
                            'tags' => ['strategy', 'vision', 'growth'],
                            'link' => '/strategy',
                            'updatedAt' => '2025-01-15',
                            'views' => 1250
                        ],
                        [
                            'id' => 'faq-leadership-2',
                            'category' => 'culture',
                            'icon' => 'heart',
                            'question' => 'How does the leadership team model company values?',
                            'answer' => 'Every executive has values-based goals tied to their compensation, including metrics like employee engagement scores, diversity representation, and customer NPS. Leaders also participate in skip-level meetings, anonymous AMAs, and quarterly \'Values in Action\' awards.',
                            'tags' => ['values', 'modeling', 'accountability'],
                            'link' => '/culture/leadership',
                            'updatedAt' => '2025-01-28',
                            'views' => 980
                        ],
                        [
                            'id' => 'faq-leadership-3',
                            'category' => 'engagement',
                            'icon' => 'users',
                            'question' => 'How accessible are executives to employees?',
                            'answer' => 'We prioritize open communication. Every executive holds monthly office hours where any employee can sign up for a 15-minute slot. Our CEO hosts a weekly all-hands with live Q&A, and all leaders are active on our internal Slack, responding to questions within 24 hours.',
                            'tags' => ['accessibility', 'communication', 'office hours'],
                            'link' => '/culture/open-door',
                            'updatedAt' => '2025-02-05',
                            'views' => 1100
                        ]
                    ],
                    'contactText' => 'Interested in connecting with our leadership team? Reach out to learn more about speaking engagements or partnerships.',
                    'contactLink' => '/contact',
                    'contactButtonText' => 'Contact Us',
                    'contactImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 351,
                'section_key' => 'leadershipTeam',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Executive Leadership',
                        'backgroundColor' => 'bg-amber-100 dark:bg-amber-900/30',
                        'borderColor' => 'border-amber-200 dark:border-amber-800',
                        'textColor' => 'text-amber-700 dark:text-amber-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'The Leaders',
                        'highlightedText' => 'Behind the Mission',
                        'suffix' => '',
                        'highlightGradient' => 'from-amber-600 to-orange-600'
                    ],
                    'description' => 'Our leadership team brings together visionary thinking, deep expertise, and a shared commitment to excellence. Learn about the people who guide our strategy, shape our culture, and inspire our teams to achieve the extraordinary.',
                    'heroImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=500&fit=crop',
                    'stats' => [
                        ['icon' => 'users', 'value' => '10', 'label' => 'Executive Leaders'],
                        ['icon' => 'globe', 'value' => '7', 'label' => 'Countries of Origin'],
                        ['icon' => 'chart', 'value' => '150+', 'label' => 'Combined Years Experience'],
                        ['icon' => 'academic', 'value' => '30+', 'label' => 'Advanced Degrees']
                    ],
                    'departments' => [
                        ['id' => 'executive', 'name' => 'Executive', 'icon' => 'star'],
                        ['id' => 'product', 'name' => 'Product', 'icon' => 'sparkles'],
                        ['id' => 'technology', 'name' => 'Technology', 'icon' => 'chip'],
                        ['id' => 'commercial', 'name' => 'Commercial', 'icon' => 'chart'],
                        ['id' => 'marketing', 'name' => 'Marketing', 'icon' => 'megaphone'],
                        ['id' => 'people', 'name' => 'People', 'icon' => 'users'],
                        ['id' => 'finance', 'name' => 'Finance', 'icon' => 'dollar']
                    ],
                    'leaders' => [
                        [
                            'name' => 'Dr. Amira Hassan',
                            'title' => 'Chief Executive Officer',
                            'department' => 'executive',
                            'icon' => 'user',
                            'bio' => 'Amira is a transformative leader who has scaled multiple tech companies. She holds a PhD in Artificial Intelligence from Oxford and is passionate about ethical technology.',
                            'fullBio' => 'Dr. Amira Hassan joined as CEO in 2021, bringing 22 years of experience in enterprise software and AI. Under her leadership, the company has achieved 3x growth and expanded into 15 new markets. Amira is a Rhodes Scholar, a frequent keynote speaker on responsible AI, and serves on the board of Women in Technology International.',
                            'experience' => 22,
                            'education' => 'PhD, University of Oxford',
                            'joined' => '2021',
                            'previousRoles' => ['COO at DataSphere', 'SVP Product at TechGiant', 'AI Research Lead at DeepMind'],
                            'achievements' => ['Forbes 50 Over 50', 'AI Ethics Champion Award', 'Inc. CEO of the Year'],
                            'linkedin' => 'https://linkedin.com/in/amira-hassan',
                            'twitter' => 'https://twitter.com/amirahassan',
                            'email' => 'amira.hassan@example.com',
                            'image' => 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&h=300&fit=crop'
                        ],
                        [
                            'name' => 'Wei Zhang',
                            'title' => 'Chief Product Officer',
                            'department' => 'product',
                            'icon' => 'user',
                            'bio' => 'Wei has led product teams at both Fortune 500 companies and successful startups, launching products used by over 100 million users globally.',
                            'fullBio' => 'Wei Zhang is a product visionary with a track record of delivering award-winning products. Before joining us, he was VP of Product at InnovateSoft, where he grew the platform from 0 to 10 million users. Wei holds an MBA from Stanford and a BS in Computer Science from Tsinghua University.',
                            'experience' => 18,
                            'education' => 'MBA, Stanford University',
                            'joined' => '2020',
                            'previousRoles' => ['VP Product at InnovateSoft', 'Senior PM at Google', 'Product Lead at Microsoft'],
                            'achievements' => ['Product Leader of the Year 2023', 'Forbes 30 Under 30 Alumni', 'Holder of 15 product patents'],
                            'linkedin' => 'https://linkedin.com/in/wei-zhang',
                            'twitter' => 'https://twitter.com/weizhang',
                            'email' => 'wei.zhang@example.com',
                            'image' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop'
                        ],
                        [
                            'name' => 'Carlos Mendez',
                            'title' => 'Chief Technology Officer',
                            'department' => 'technology',
                            'icon' => 'user',
                            'bio' => 'Carlos is a distributed systems expert who has built engineering teams at multiple unicorn startups, scaling infrastructure to support billions of requests.',
                            'fullBio' => 'Carlos Mendez leads our global engineering organization of 400+ developers. He previously served as VP Engineering at ScaleTech, where he architected a platform handling over 2 billion requests daily. Carlos holds a Master\'s in Computer Science from Carnegie Mellon and is the founder of TechLatino.',
                            'experience' => 20,
                            'education' => 'MS, Carnegie Mellon University',
                            'joined' => '2019',
                            'previousRoles' => ['VP Engineering at ScaleTech', 'Tech Lead at Netflix', 'Senior Engineer at Amazon'],
                            'achievements' => ['Top 50 CTOs 2024', 'ACM Distinguished Engineer', 'Open Source Contributor of the Decade'],
                            'linkedin' => 'https://linkedin.com/in/carlos-mendez',
                            'twitter' => 'https://twitter.com/carlosmendez',
                            'email' => 'carlos.mendez@example.com',
                            'image' => 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop'
                        ],
                        [
                            'name' => 'Naomi Okonkwo',
                            'title' => 'Chief Revenue Officer',
                            'department' => 'commercial',
                            'icon' => 'user',
                            'bio' => 'Naomi has consistently delivered double-digit revenue growth across B2B SaaS companies in North America, EMEA, and APAC.',
                            'fullBio' => 'Naomi Okonkwo brings 20 years of sales leadership experience, having scaled revenue from $5M to $250M at two previous companies. She holds an MBA from Wharton and a BA in Economics from Yale. Naomi is known for building high-performance sales cultures and customer-centric revenue strategies.',
                            'experience' => 20,
                            'education' => 'MBA, Wharton School',
                            'joined' => '2020',
                            'previousRoles' => ['CRO at GrowthTech', 'VP Sales at EnterpriseSoft', 'Regional Director at Salesforce'],
                            'achievements' => ['Sales Leader of the Year 2022', 'President\'s Club (12x)', 'Top 25 SaaS Sales Leaders'],
                            'linkedin' => 'https://linkedin.com/in/naomi-okonkwo',
                            'twitter' => 'https://twitter.com/naomiokonkwo',
                            'email' => 'naomi.okonkwo@example.com',
                            'image' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop'
                        ],
                        [
                            'name' => 'Emma Laurent',
                            'title' => 'Chief Marketing Officer',
                            'department' => 'marketing',
                            'icon' => 'user',
                            'bio' => 'Emma is a brand builder and demand generation expert who has led marketing for both B2B and B2C tech companies, driving exponential growth.',
                            'fullBio' => 'Emma Laurent has been recognized as one of the top 50 CMOs in the world. She previously led marketing at BrandWave, where she grew organic traffic by 500% and increased conversion rates by 65%. Emma holds a Master\'s in Marketing from Northwestern and is a frequent contributor to industry publications.',
                            'experience' => 16,
                            'education' => 'MS, Northwestern University',
                            'joined' => '2021',
                            'previousRoles' => ['CMO at BrandWave', 'VP Marketing at ConsumerTech', 'Director at Ogilvy'],
                            'achievements' => ['CMO of the Year 2023', 'Forbes Top 50 CMOs', 'AdWeek Brand Genius'],
                            'linkedin' => 'https://linkedin.com/in/emma-laurent',
                            'twitter' => 'https://twitter.com/emmalaurent',
                            'email' => 'emma.laurent@example.com',
                            'image' => 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop'
                        ],
                        [
                            'name' => 'David Kim',
                            'title' => 'Chief People Officer',
                            'department' => 'people',
                            'icon' => 'user',
                            'bio' => 'David has built award-winning workplace cultures at high-growth tech companies, focusing on inclusion, development, and employee wellbeing.',
                            'fullBio' => 'David Kim is an expert in organizational development and talent strategy. He previously served as VP of People at UnicornSoft, where he scaled the team from 50 to 600 while maintaining a 4.9 Glassdoor rating. David holds a Master\'s in Industrial-Organizational Psychology from Columbia.',
                            'experience' => 15,
                            'education' => 'MA, Columbia University',
                            'joined' => '2022',
                            'previousRoles' => ['VP People at UnicornSoft', 'HR Director at FastScale', 'People Lead at Accenture'],
                            'achievements' => ['HR Executive of the Year 2024', 'Best Places to Work (6x)', 'DEI Champion Award'],
                            'linkedin' => 'https://linkedin.com/in/david-kim',
                            'twitter' => 'https://twitter.com/davidkim',
                            'email' => 'david.kim@example.com',
                            'image' => 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop'
                        ],
                        [
                            'name' => 'Sophia Chen',
                            'title' => 'Chief Financial Officer',
                            'department' => 'finance',
                            'icon' => 'user',
                            'bio' => 'Sophia brings deep financial expertise from both public companies and high-growth startups, leading successful IPOs and acquisitions.',
                            'fullBio' => 'Sophia Chen has over 20 years of finance leadership experience, including serving as CFO at two publicly traded companies. She led the successful IPO of DataLogic and has overseen 15+ acquisitions. Sophia holds an MBA from Harvard and is a Certified Public Accountant.',
                            'experience' => 24,
                            'education' => 'MBA, Harvard Business School',
                            'joined' => '2018',
                            'previousRoles' => ['CFO at DataLogic', 'VP Finance at EnterpriseCo', 'Investment Banking at Goldman Sachs'],
                            'achievements' => ['CFO of the Year 2023', 'IPO of the Year', 'Fortune 50 CFO'],
                            'linkedin' => 'https://linkedin.com/in/sophia-chen',
                            'twitter' => 'https://twitter.com/sophiachen',
                            'email' => 'sophia.chen@example.com',
                            'image' => 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&h=300&fit=crop'
                        ]
                    ],
                    'videos' => [
                        [
                            'title' => 'CEO Fireside Chat: Our Vision for the Future',
                            'duration' => '12:45',
                            'author' => 'Dr. Amira Hassan',
                            'role' => 'CEO',
                            'url' => '/videos/ceo-fireside.mp4',
                            'thumbnail' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop'
                        ],
                        [
                            'title' => 'Product Philosophy with Our CPO',
                            'duration' => '8:30',
                            'author' => 'Wei Zhang',
                            'role' => 'CPO',
                            'url' => '/videos/product-philosophy.mp4',
                            'thumbnail' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop'
                        ],
                        [
                            'title' => 'Engineering Excellence: A CTO Perspective',
                            'duration' => '10:15',
                            'author' => 'Carlos Mendez',
                            'role' => 'CTO',
                            'url' => '/videos/engineering-excellence.mp4',
                            'thumbnail' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop'
                        ]
                    ],
                    'quotes' => [
                        [
                            'icon' => 'lightbulb',
                            'text' => 'Great leaders don\'t create followers—they create more leaders. Our job is to empower every person on this team to reach their full potential.',
                            'author' => 'Dr. Amira Hassan',
                            'title' => 'Chief Executive Officer',
                            'image' => 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop'
                        ],
                        [
                            'icon' => 'sparkles',
                            'text' => 'Innovation happens at the intersection of diverse perspectives. We actively seek out voices that challenge our thinking and expand our possibilities.',
                            'author' => 'Wei Zhang',
                            'title' => 'Chief Product Officer',
                            'image' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
                        ],
                        [
                            'icon' => 'heart',
                            'text' => 'Culture isn\'t a perk—it\'s the foundation. When people feel safe, valued, and seen, they do the best work of their lives.',
                            'author' => 'David Kim',
                            'title' => 'Chief People Officer',
                            'image' => 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop'
                        ]
                    ],
                    'categories' => [
                        ['id' => 'leadership', 'name' => 'Leadership Philosophy', 'icon' => 'lightbulb', 'description' => 'How our leaders think and act'],
                        ['id' => 'strategy', 'name' => 'Strategy & Direction', 'icon' => 'chart', 'description' => 'Where we\'re headed'],
                        ['id' => 'culture', 'name' => 'Leadership & Culture', 'icon' => 'heart', 'description' => 'How leaders shape our environment']
                    ],
                    'faqs' => [
                        [
                            'id' => 'faq-leadership-1',
                            'category' => 'leadership',
                            'icon' => 'lightbulb',
                            'question' => 'What is the leadership team\'s approach to decision-making?',
                            'answer' => 'We practice \'disagree and commit\'—every leader is expected to voice concerns and alternative viewpoints before decisions are made. Once a decision is reached, everyone commits fully. We also use a RAPID framework (Recommend, Agree, Perform, Input, Decide) to clarify roles in major decisions, ensuring accountability and speed.',
                            'tags' => ['decision-making', 'process', 'accountability'],
                            'link' => '/leadership/decision-making',
                            'updatedAt' => '2025-01-20',
                            'views' => 1450
                        ],
                        [
                            'id' => 'faq-leadership-2',
                            'category' => 'strategy',
                            'icon' => 'chart',
                            'question' => 'How do leaders stay connected with employees across the company?',
                            'answer' => 'Every executive holds monthly \'Office Hours\'—open 1:1 slots where any employee can sign up. Our CEO hosts a weekly all-hands with live Q&A, and all leaders are active on Slack, responding within 24 hours. We also run quarterly \'Executive Shadow\' programs where employees can spend a day with a leader.',
                            'tags' => ['communication', 'transparency', 'office hours'],
                            'link' => '/culture/leadership-access',
                            'updatedAt' => '2025-02-01',
                            'views' => 1120
                        ],
                        [
                            'id' => 'faq-leadership-3',
                            'category' => 'culture',
                            'icon' => 'heart',
                            'question' => 'How does the leadership team model psychological safety?',
                            'answer' => 'Leaders are trained in active listening and vulnerability—they regularly share their own mistakes and lessons learned. We have \'Blameless Post-Mortems\' where the focus is on systems, not people. Leaders also participate in \'Listening Circles\' where employees share experiences anonymously.',
                            'tags' => ['psychological safety', 'trust', 'culture'],
                            'link' => '/culture/psychological-safety',
                            'updatedAt' => '2025-01-25',
                            'views' => 980
                        ]
                    ],
                    'contactText' => 'Interested in speaking with a member of our leadership team? Reach out to learn more.',
                    'contactLink' => '/contact',
                    'contactButtonText' => 'Contact Leadership',
                    'contactImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 352,
                'section_key' => 'leadershipTeam',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Company Timeline Section
            [
                'id' => 353,
                'section_key' => 'companyTimeline',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Our Journey',
                        'backgroundColor' => 'bg-slate-100 dark:bg-slate-900/30',
                        'borderColor' => 'border-slate-200 dark:border-slate-800',
                        'textColor' => 'text-slate-700 dark:text-slate-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Tracing Our',
                        'highlightedText' => 'Path to Impact',
                        'suffix' => '',
                        'highlightGradient' => 'from-slate-600 to-gray-600'
                    ],
                    'description' => 'From humble beginnings to global impact, our journey is defined by innovation, resilience, and an unwavering commitment to our customers. Explore the milestones that have shaped who we are today.',
                    'heroImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=500&fit=crop',
                    'stats' => [
                        ['icon' => 'calendar', 'value' => '8+', 'label' => 'Years of Innovation'],
                        ['icon' => 'users', 'value' => '500+', 'label' => 'Team Members'],
                        ['icon' => 'globe', 'value' => '40+', 'label' => 'Countries Served'],
                        ['icon' => 'chart', 'value' => '10,000+', 'label' => 'Customers Worldwide']
                    ],
                    'eras' => [
                        ['id' => 'founding', 'name' => 'Founding Era', 'icon' => 'rocket'],
                        ['id' => 'growth', 'name' => 'Growth Era', 'icon' => 'trending'],
                        ['id' => 'innovation', 'name' => 'Innovation Era', 'icon' => 'sparkles'],
                        ['id' => 'global', 'name' => 'Global Era', 'icon' => 'globe']
                    ],
                    'timeline' => [
                        [
                            'year' => '2016',
                            'title' => 'The Spark',
                            'description' => 'Founded in a small garage with a big dream: to revolutionize inventory management for small businesses.',
                            'icon' => 'rocket',
                            'era' => 'founding',
                            'details' => 'Three co-founders bootstrapped the company with $50,000 in personal savings. The first prototype was built in just 90 days.',
                            'metric' => 'First 10 beta customers signed',
                            'image' => 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop'
                        ],
                        [
                            'year' => '2018',
                            'title' => 'Series A Funding',
                            'description' => 'Raised $15M to accelerate product development and expand our engineering team.',
                            'icon' => 'chart',
                            'era' => 'growth',
                            'details' => 'Led by Vision Capital, the funding enabled us to triple our engineering team and launch our mobile app.',
                            'metric' => 'Team grew from 15 to 60 employees',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
                        ],
                        [
                            'year' => '2019',
                            'title' => 'Global Launch',
                            'description' => 'Expanded operations to EMEA and APAC, serving customers in 25+ countries.',
                            'icon' => 'globe',
                            'era' => 'global',
                            'details' => 'Opened regional offices in London and Singapore, localizing our platform into 12 languages.',
                            'metric' => 'International revenue grew 300%',
                            'image' => 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&h=400&fit=crop'
                        ],
                        [
                            'year' => '2021',
                            'title' => 'AI Breakthrough',
                            'description' => 'Launched our first AI-powered demand forecasting engine, achieving 95% accuracy.',
                            'icon' => 'sparkles',
                            'era' => 'innovation',
                            'details' => 'After 18 months of R&D, our machine learning models helped customers reduce inventory waste by 30% on average.',
                            'metric' => 'Saved customers $50M in inventory costs',
                            'image' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop'
                        ],
                        [
                            'year' => '2022',
                            'title' => 'Industry Recognition',
                            'description' => 'Named to Forbes Cloud 100 and recognized as a leader in inventory management software.',
                            'icon' => 'trophy',
                            'era' => 'growth',
                            'details' => 'Received multiple awards for product innovation and workplace culture, including \'Best Place to Work\'.',
                            'metric' => '4.9/5 customer satisfaction rating',
                            'image' => 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&h=400&fit=crop'
                        ],
                        [
                            'year' => '2024',
                            'title' => '10,000 Customers',
                            'description' => 'Reached the milestone of 10,000 businesses trusting our platform worldwide.',
                            'icon' => 'users',
                            'era' => 'global',
                            'details' => 'From startups to Fortune 500 companies, our platform now powers over $10B in inventory value.',
                            'metric' => 'Processed 1B+ transactions',
                            'image' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop'
                        ]
                    ],
                    'futureVision' => 'The next chapter is even more ambitious. We\'re building predictive AI that will forecast supply chain disruptions before they happen, expanding into emerging markets, and aiming to help 100,000 businesses achieve operational excellence by 2028.',
                    'futureImage' => 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop',
                    'contactText' => 'Be part of our journey. Join us as we shape the future of inventory management.',
                    'contactLink' => '/careers',
                    'contactButtonText' => 'Join Our Team',
                    'contactImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 354,
                'section_key' => 'companyTimeline',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Our Evolution',
                        'backgroundColor' => 'bg-cyan-100 dark:bg-cyan-900/30',
                        'borderColor' => 'border-cyan-200 dark:border-cyan-800',
                        'textColor' => 'text-cyan-700 dark:text-cyan-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Charting Our',
                        'highlightedText' => 'Course to Excellence',
                        'suffix' => '',
                        'highlightGradient' => 'from-cyan-600 to-teal-600'
                    ],
                    'description' => 'Every great journey has defining moments. Our timeline captures the key milestones, breakthrough innovations, and pivotal decisions that have shaped our evolution from a bold idea to a global force in inventory management.',
                    'heroImage' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=500&fit=crop',
                    'stats' => [
                        ['icon' => 'calendar', 'value' => '9+', 'label' => 'Years of Excellence'],
                        ['icon' => 'users', 'value' => '750+', 'label' => 'Team Members'],
                        ['icon' => 'globe', 'value' => '50+', 'label' => 'Countries Served'],
                        ['icon' => 'chart', 'value' => '15,000+', 'label' => 'Happy Customers']
                    ],
                    'eras' => [
                        ['id' => 'foundation', 'name' => 'Foundation Era', 'icon' => 'rocket'],
                        ['id' => 'acceleration', 'name' => 'Acceleration Era', 'icon' => 'trending'],
                        ['id' => 'transformation', 'name' => 'Transformation Era', 'icon' => 'sparkles'],
                        ['id' => 'globalization', 'name' => 'Globalization Era', 'icon' => 'globe']
                    ],
                    'timeline' => [
                        [
                            'year' => '2015',
                            'title' => 'The Founding Vision',
                            'description' => 'Company founded with a mission to transform inventory management through intelligent, accessible technology.',
                            'icon' => 'rocket',
                            'era' => 'foundation',
                            'details' => 'Four co-founders, frustrated by the complexity of existing solutions, set out to build a platform that would make inventory management simple, powerful, and affordable for businesses of all sizes.',
                            'metric' => '$100K seed funding raised',
                            'image' => 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop'
                        ],
                        [
                            'year' => '2017',
                            'title' => 'First Product Launch',
                            'description' => 'Released our first commercial product, serving 50 beta customers across retail and e-commerce.',
                            'icon' => 'sparkles',
                            'era' => 'foundation',
                            'details' => 'After 18 months of intensive development and customer testing, we launched version 1.0 to critical acclaim from early adopters.',
                            'metric' => '50 beta customers, 99% retention',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
                        ],
                        [
                            'year' => '2019',
                            'title' => 'Series B Funding',
                            'description' => 'Raised $35M to accelerate product innovation and expand our global footprint.',
                            'icon' => 'chart',
                            'era' => 'acceleration',
                            'details' => 'Led by leading venture capital firms, this funding round enabled us to triple our engineering team and open our first international office.',
                            'metric' => 'Team grew from 40 to 150 employees',
                            'image' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop'
                        ],
                        [
                            'year' => '2020',
                            'title' => 'International Expansion',
                            'description' => 'Opened offices in London, Singapore, and São Paulo, serving customers across 30+ countries.',
                            'icon' => 'globe',
                            'era' => 'globalization',
                            'details' => 'Localized our platform into 15 languages, built regional support teams, and achieved ISO 27001 certification for security.',
                            'metric' => 'International revenue grew 400%',
                            'image' => 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&h=400&fit=crop'
                        ],
                        [
                            'year' => '2021',
                            'title' => 'AI Innovation Breakthrough',
                            'description' => 'Launched our patented AI demand forecasting engine, achieving 97% accuracy.',
                            'icon' => 'sparkles',
                            'era' => 'transformation',
                            'details' => 'After two years of R&D, our machine learning models helped customers reduce inventory waste by 40% and improve cash flow.',
                            'metric' => 'Saved customers $100M+ in inventory costs',
                            'image' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop'
                        ],
                        [
                            'year' => '2022',
                            'title' => 'Industry Leadership',
                            'description' => 'Recognized as a leader by Gartner and named to the Forbes Cloud 100.',
                            'icon' => 'trophy',
                            'era' => 'acceleration',
                            'details' => 'Received multiple awards for product innovation, workplace culture, and customer success. Achieved a 4.9/5 Gartner Peer Insights rating.',
                            'metric' => '4.9/5 customer satisfaction rating',
                            'image' => 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&h=400&fit=crop'
                        ],
                        [
                            'year' => '2024',
                            'title' => '15,000 Customers Milestone',
                            'description' => 'Reached 15,000 businesses trusting our platform to power their operations worldwide.',
                            'icon' => 'users',
                            'era' => 'globalization',
                            'details' => 'From startups to Fortune 500 companies, our platform now manages over $15B in inventory value and processes billions of transactions annually.',
                            'metric' => '15,000+ customers, $15B+ inventory value',
                            'image' => 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop'
                        ]
                    ],
                    'milestones' => [
                        ['year' => '2015', 'title' => 'Company Founded', 'description' => 'Founded with a mission to transform inventory management.', 'details' => 'Four co-founders set out to build a platform that would make inventory management simple, powerful, and affordable.', 'metric' => '$100K seed funding'],
                        ['year' => '2017', 'title' => 'First Product Launch', 'description' => 'Released our first commercial product to beta customers.', 'details' => 'Version 1.0 launched with core inventory tracking and reporting features.', 'metric' => '50 beta customers'],
                        ['year' => '2019', 'title' => 'Series B Funding', 'description' => 'Raised $35M to accelerate growth and innovation.', 'details' => 'Funding enabled international expansion and product development.', 'metric' => '150 team members'],
                        ['year' => '2020', 'title' => 'International Expansion', 'description' => 'Opened offices in London, Singapore, and São Paulo.', 'details' => 'Localized platform into 15 languages with regional support teams.', 'metric' => '30+ countries served'],
                        ['year' => '2021', 'title' => 'AI Innovation', 'description' => 'Launched patented AI demand forecasting engine.', 'details' => 'Achieved 97% accuracy in demand prediction for customers.', 'metric' => '$100M+ customer savings'],
                        ['year' => '2022', 'title' => 'Industry Recognition', 'description' => 'Named a leader by Gartner and Forbes Cloud 100.', 'details' => 'Recognized for product innovation and workplace culture.', 'metric' => '4.9/5 customer rating'],
                        ['year' => '2024', 'title' => 'Customer Milestone', 'description' => 'Reached 15,000 businesses trusting our platform.', 'details' => 'Manages $15B+ in inventory value globally.', 'metric' => '15,000+ customers']
                    ],
                    'futureVision' => 'The horizon is bright. We\'re investing in predictive supply chain AI that will anticipate disruptions before they happen, expanding into emerging markets across Africa and Southeast Asia, and building a platform that will help 200,000 businesses achieve operational excellence by 2030.',
                    'futureImage' => 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop',
                    'contactText' => 'Be part of our journey. Join us as we shape the future of inventory management.',
                    'contactLink' => '/careers',
                    'contactButtonText' => 'Join Our Team',
                    'contactImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 355,
                'section_key' => 'companyTimeline',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Our Story',
                        'backgroundColor' => 'bg-amber-100 dark:bg-amber-900/30',
                        'borderColor' => 'border-amber-200 dark:border-amber-800',
                        'textColor' => 'text-amber-700 dark:text-amber-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'The Moments That',
                        'highlightedText' => 'Define Us',
                        'suffix' => '',
                        'highlightGradient' => 'from-amber-600 to-orange-600'
                    ],
                    'description' => 'Every milestone, every breakthrough, every challenge overcome—our journey is built on moments that matter. Explore the timeline of our evolution, from a bold idea to a global movement transforming inventory management.',
                    'heroImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=500&fit=crop',
                    'stats' => [
                        ['icon' => 'calendar', 'value' => '10+', 'label' => 'Years of Impact'],
                        ['icon' => 'users', 'value' => '1,000+', 'label' => 'Team Members'],
                        ['icon' => 'globe', 'value' => '60+', 'label' => 'Countries Served'],
                        ['icon' => 'chart', 'value' => '20,000+', 'label' => 'Customers Worldwide']
                    ],
                    'eras' => [
                        ['id' => 'founding', 'name' => 'Founding Era', 'icon' => 'rocket'],
                        ['id' => 'growth', 'name' => 'Growth Era', 'icon' => 'trending'],
                        ['id' => 'innovation', 'name' => 'Innovation Era', 'icon' => 'sparkles'],
                        ['id' => 'global', 'name' => 'Global Era', 'icon' => 'globe']
                    ],
                    'timeline' => [
                        [
                            'year' => '2014',
                            'title' => 'The Beginning',
                            'description' => 'Founded with a vision to democratize inventory management for businesses everywhere.',
                            'icon' => 'rocket',
                            'era' => 'founding',
                            'details' => 'Three co-founders, frustrated by expensive and complex legacy systems, set out to build an intuitive, affordable solution that any business could use.',
                            'metric' => 'Bootstrapped with $50K',
                            'image' => 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop'
                        ],
                        [
                            'year' => '2016',
                            'title' => 'Product Launch',
                            'description' => 'Released our first commercial product to 100 beta customers.',
                            'icon' => 'sparkles',
                            'era' => 'founding',
                            'details' => 'After two years of development and customer feedback, version 1.0 launched to critical acclaim from early adopters.',
                            'metric' => '100 beta customers, 98% retention',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
                        ],
                        [
                            'year' => '2018',
                            'title' => 'Series A Funding',
                            'description' => 'Raised $25M to accelerate product development and expand our team.',
                            'icon' => 'chart',
                            'era' => 'growth',
                            'details' => 'Led by top-tier venture capital firms, this funding enabled us to triple our engineering team and launch our mobile app.',
                            'metric' => 'Team grew from 15 to 80 employees',
                            'image' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop'
                        ],
                        [
                            'year' => '2019',
                            'title' => 'Global Expansion',
                            'description' => 'Opened offices in London, Singapore, and São Paulo.',
                            'icon' => 'globe',
                            'era' => 'global',
                            'details' => 'Localized our platform into 20 languages, built regional support teams, and achieved compliance with international data regulations.',
                            'metric' => '300% international revenue growth',
                            'image' => 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&h=400&fit=crop'
                        ],
                        [
                            'year' => '2021',
                            'title' => 'AI Breakthrough',
                            'description' => 'Launched our patented AI demand forecasting engine.',
                            'icon' => 'sparkles',
                            'era' => 'innovation',
                            'details' => 'After two years of R&D, our machine learning models achieved 97% accuracy, helping customers reduce inventory waste by 40%.',
                            'metric' => 'Saved customers $150M+',
                            'image' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop'
                        ],
                        [
                            'year' => '2022',
                            'title' => 'Industry Leadership',
                            'description' => 'Recognized as a leader by Gartner and named to Forbes Cloud 100.',
                            'icon' => 'trophy',
                            'era' => 'growth',
                            'details' => 'Received multiple awards for product innovation, workplace culture, and customer success.',
                            'metric' => '4.9/5 Gartner rating',
                            'image' => 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&h=400&fit=crop'
                        ],
                        [
                            'year' => '2024',
                            'title' => '20,000 Customers',
                            'description' => 'Reached 20,000 businesses trusting our platform worldwide.',
                            'icon' => 'users',
                            'era' => 'global',
                            'details' => 'From startups to Fortune 500 companies, our platform now manages over $20B in inventory value.',
                            'metric' => '20,000+ customers',
                            'image' => 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop'
                        ]
                    ],
                    'milestones' => [
                        ['year' => '2014', 'title' => 'Company Founded', 'description' => 'Founded with a mission to transform inventory management.', 'details' => 'Three co-founders bootstrapped the company with a shared vision.', 'metric' => '$50K seed funding', 'era' => 'founding'],
                        ['year' => '2016', 'title' => 'First Product Launch', 'description' => 'Released our first commercial product.', 'details' => 'Version 1.0 launched with core inventory tracking features.', 'metric' => '100 beta customers', 'era' => 'founding'],
                        ['year' => '2018', 'title' => 'Series A Funding', 'description' => 'Raised $25M to accelerate growth.', 'details' => 'Funding enabled team expansion and mobile app launch.', 'metric' => '80 team members', 'era' => 'growth'],
                        ['year' => '2019', 'title' => 'Global Expansion', 'description' => 'Opened international offices.', 'details' => 'Localized into 20 languages with regional support.', 'metric' => '60+ countries served', 'era' => 'global'],
                        ['year' => '2021', 'title' => 'AI Innovation', 'description' => 'Launched AI demand forecasting.', 'details' => '97% accuracy, 40% waste reduction for customers.', 'metric' => '$150M+ customer savings', 'era' => 'innovation'],
                        ['year' => '2022', 'title' => 'Industry Recognition', 'description' => 'Named a leader by Gartner.', 'details' => 'Forbes Cloud 100 and multiple industry awards.', 'metric' => '4.9/5 customer rating', 'era' => 'growth'],
                        ['year' => '2024', 'title' => 'Customer Milestone', 'description' => '20,000 customers worldwide.', 'details' => 'Managing $20B+ in inventory value globally.', 'metric' => '20,000+ customers', 'era' => 'global']
                    ],
                    'yearlyBreakdown' => [
                        '2014-2016' => [
                            ['icon' => 'rocket', 'title' => 'Company Founded', 'description' => 'Bootstrapped with $50K', 'metric' => '3 co-founders'],
                            ['icon' => 'sparkles', 'title' => 'First Prototype', 'description' => 'Built in 6 months', 'metric' => 'MVP completed']
                        ],
                        '2017-2019' => [
                            ['icon' => 'chart', 'title' => 'Series A', 'description' => '$25M raised', 'metric' => 'Team grew to 80'],
                            ['icon' => 'globe', 'title' => 'Global Offices', 'description' => 'London, Singapore, São Paulo', 'metric' => '20 languages']
                        ],
                        '2020-2022' => [
                            ['icon' => 'sparkles', 'title' => 'AI Platform', 'description' => 'Patented forecasting engine', 'metric' => '97% accuracy'],
                            ['icon' => 'trophy', 'title' => 'Industry Awards', 'description' => 'Forbes Cloud 100', 'metric' => 'Gartner Leader']
                        ],
                        '2023-Present' => [
                            ['icon' => 'users', 'title' => '20K Customers', 'description' => 'Global milestone', 'metric' => '$20B+ inventory value'],
                            ['icon' => 'sparkles', 'title' => 'Next-Gen AI', 'description' => 'Predictive supply chain', 'metric' => 'In development']
                        ]
                    ],
                    'quotes' => [
                        [
                            'icon' => 'lightbulb',
                            'text' => 'The best way to predict the future is to create it. Every challenge we\'ve overcome has made us stronger and more focused on our mission.',
                            'author' => 'Sarah Chen',
                            'title' => 'CEO & Co-Founder',
                            'year' => '2024',
                            'image' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
                        ],
                        [
                            'icon' => 'heart',
                            'text' => 'Our growth isn\'t just about numbers—it\'s about the thousands of businesses we\'ve helped succeed. That\'s what drives us every day.',
                            'author' => 'Marcus Thompson',
                            'title' => 'Chief Product Officer',
                            'year' => '2024',
                            'image' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
                        ],
                        [
                            'icon' => 'sparkles',
                            'text' => 'Innovation is in our DNA. From day one, we\'ve challenged ourselves to think bigger and build better solutions for our customers.',
                            'author' => 'Dr. Amira Hassan',
                            'title' => 'CTO',
                            'year' => '2024',
                            'image' => 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop'
                        ]
                    ],
                    'futureVision' => 'The journey continues. We\'re investing in predictive supply chain AI that will anticipate disruptions before they happen, expanding into emerging markets, and building a platform that will help 200,000 businesses achieve operational excellence by 2030.',
                    'futureImage' => 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop',
                    'contactText' => 'Be part of our story. Join us as we write the next chapter.',
                    'contactLink' => '/careers',
                    'contactButtonText' => 'Join Our Journey',
                    'contactImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 356,
                'section_key' => 'companyTimeline',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],


            // Culture & Careers Section
            [
                'id' => 357,
                'section_key' => 'cultureCareers',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Join Our Team',
                        'backgroundColor' => 'bg-teal-100 dark:bg-teal-900/30',
                        'borderColor' => 'border-teal-200 dark:border-teal-800',
                        'textColor' => 'text-teal-700 dark:text-teal-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'A Place Where',
                        'highlightedText' => 'You Belong',
                        'suffix' => '',
                        'highlightGradient' => 'from-teal-600 to-emerald-600'
                    ],
                    'description' => 'We\'re building more than a company—we\'re building a community. A place where diverse perspectives are celebrated, growth is nurtured, and every voice matters. Come see why our people love what they do.',
                    'heroImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=500&fit=crop',
                    'stats' => [
                        ['icon' => 'users', 'value' => '500+', 'label' => 'Team Members'],
                        ['icon' => 'globe', 'value' => '35+', 'label' => 'Nationalities'],
                        ['icon' => 'chart', 'value' => '92%', 'label' => 'Employee Satisfaction'],
                        ['icon' => 'heart', 'value' => '4.9/5', 'label' => 'Glassdoor Rating']
                    ],
                    'benefits' => [
                        ['icon' => 'heart', 'title' => 'Comprehensive Healthcare', 'description' => 'Medical, dental, and vision coverage for you and your family'],
                        ['icon' => 'cash', 'title' => 'Competitive Compensation', 'description' => 'Fair pay, equity packages, and performance bonuses'],
                        ['icon' => 'calendar', 'title' => 'Flexible Time Off', 'description' => 'Unlimited PTO and 16 paid holidays'],
                        ['icon' => 'academic', 'title' => 'Learning Stipend', 'description' => '$2,000 annually for courses, conferences, and books'],
                        ['icon' => 'home', 'title' => 'Remote-First Culture', 'description' => 'Work from anywhere with home office stipend'],
                        ['icon' => 'heart', 'title' => 'Wellness Program', 'description' => 'Mental health support and fitness reimbursement'],
                        ['icon' => 'users', 'title' => 'Parental Leave', 'description' => '16 weeks fully paid for all parents'],
                        ['icon' => 'globe', 'title' => 'Global Offsites', 'description' => 'Annual team gatherings in amazing locations']
                    ],
                    'cultureValues' => [
                        ['icon' => 'lightbulb', 'title' => 'Bold Curiosity', 'description' => 'We question everything and embrace learning as a lifelong journey.'],
                        ['icon' => 'heart', 'title' => 'Radical Empathy', 'description' => 'We listen deeply, assume positive intent, and lead with kindness.'],
                        ['icon' => 'users', 'title' => 'Collective Genius', 'description' => 'We believe the best solutions emerge from diverse voices.']
                    ],
                    'departments' => [
                        ['id' => 'engineering', 'name' => 'Engineering', 'icon' => 'chip'],
                        ['id' => 'product', 'name' => 'Product', 'icon' => 'sparkles'],
                        ['id' => 'sales', 'name' => 'Sales', 'icon' => 'chart'],
                        ['id' => 'marketing', 'name' => 'Marketing', 'icon' => 'megaphone'],
                        ['id' => 'people', 'name' => 'People & Culture', 'icon' => 'users']
                    ],
                    'openPositions' => [
                        [
                            'title' => 'Senior Software Engineer',
                            'department' => 'engineering',
                            'location' => 'Remote (US/Canada)',
                            'type' => 'Full-time',
                            'status' => 'Open',
                            'postedDate' => '2 days ago',
                            'description' => 'Join our core platform team to build scalable, resilient systems that power inventory management for thousands of businesses.',
                            'link' => '/careers/software-engineer'
                        ],
                        [
                            'title' => 'Product Manager',
                            'department' => 'product',
                            'location' => 'Remote (EU/UK)',
                            'type' => 'Full-time',
                            'status' => 'Open',
                            'postedDate' => '1 week ago',
                            'description' => 'Lead product discovery and delivery for our AI forecasting engine, working with world-class engineers and designers.',
                            'link' => '/careers/product-manager'
                        ],
                        [
                            'title' => 'Enterprise Account Executive',
                            'department' => 'sales',
                            'location' => 'Remote (US)',
                            'type' => 'Full-time',
                            'status' => 'Open',
                            'postedDate' => '3 days ago',
                            'description' => 'Drive growth by building relationships with Fortune 500 companies and helping them transform their operations.',
                            'link' => '/careers/account-executive'
                        ],
                        [
                            'title' => 'Content Marketing Manager',
                            'department' => 'marketing',
                            'location' => 'Remote (Global)',
                            'type' => 'Full-time',
                            'status' => 'Open',
                            'postedDate' => '5 days ago',
                            'description' => 'Shape our brand voice through compelling stories, case studies, and thought leadership content.',
                            'link' => '/careers/content-marketing'
                        ],
                        [
                            'title' => 'Talent Acquisition Partner',
                            'department' => 'people',
                            'location' => 'Remote (EMEA)',
                            'type' => 'Full-time',
                            'status' => 'Open',
                            'postedDate' => '1 week ago',
                            'description' => 'Help us find and hire exceptional talent while delivering an outstanding candidate experience.',
                            'link' => '/careers/talent-acquisition'
                        ]
                    ],
                    'categories' => [
                        ['id' => 'hiring', 'name' => 'Hiring Process', 'icon' => 'user-add'],
                        ['id' => 'culture', 'name' => 'Work Culture', 'icon' => 'heart'],
                        ['id' => 'benefits', 'name' => 'Benefits', 'icon' => 'gift'],
                        ['id' => 'growth', 'name' => 'Growth & Development', 'icon' => 'trending']
                    ],
                    'faqs' => [
                        [
                            'id' => 'faq-careers-1',
                            'category' => 'hiring',
                            'icon' => 'question',
                            'question' => 'What is your interview process like?',
                            'answer' => 'Our process typically includes: (1) Recruiter screen (30 min), (2) Hiring manager interview (45 min), (3) Technical or skills assessment (depending on role), (4) Panel interviews with future teammates (3 hours). We aim to complete the process within 2-3 weeks and provide feedback after every stage.',
                            'tags' => ['hiring', 'interview', 'process'],
                            'link' => '/careers/process',
                            'updatedAt' => '2025-01-18',
                            'views' => 1250
                        ],
                        [
                            'id' => 'faq-careers-2',
                            'category' => 'culture',
                            'icon' => 'heart',
                            'question' => 'How do you support remote employees?',
                            'answer' => 'We\'re remote-first, meaning everyone works from wherever they\'re most productive. We provide a $1,000 home office stipend, monthly internet reimbursement, and access to co-working spaces. We also have virtual coffee chats, team offsites twice a year, and asynchronous communication practices to ensure everyone feels connected.',
                            'tags' => ['remote', 'work-from-home', 'support'],
                            'link' => '/careers/remote',
                            'updatedAt' => '2025-02-01',
                            'views' => 980
                        ],
                        [
                            'id' => 'faq-careers-3',
                            'category' => 'benefits',
                            'icon' => 'gift',
                            'question' => 'What does your learning and development program include?',
                            'answer' => 'Every employee receives a $2,000 annual learning stipend for courses, conferences, certifications, and books. We also have internal mentorship programs, lunch-and-learns, and a book club. Plus, we offer 5 dedicated learning days per year where you can focus entirely on professional development.',
                            'tags' => ['learning', 'development', 'stipend'],
                            'link' => '/careers/learning',
                            'updatedAt' => '2025-01-15',
                            'views' => 760
                        ]
                    ],
                    'contactText' => 'Ready to join our team? Explore open positions and start your journey with us.',
                    'contactLink' => '/careers',
                    'contactButtonText' => 'View All Jobs',
                    'contactImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 358,
                'section_key' => 'cultureCareers',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Join Our Journey',
                        'backgroundColor' => 'bg-rose-100 dark:bg-rose-900/30',
                        'borderColor' => 'border-rose-200 dark:border-rose-800',
                        'textColor' => 'text-rose-700 dark:text-rose-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Build Your',
                        'highlightedText' => 'Career With Us',
                        'suffix' => '',
                        'highlightGradient' => 'from-rose-600 to-pink-600'
                    ],
                    'description' => 'We\'re more than a company—we\'re a community of passionate, curious, and driven individuals. If you\'re looking for a place where you can grow, make an impact, and do the best work of your life, you\'ve found it.',
                    'heroImage' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=500&fit=crop',
                    'stats' => [
                        ['icon' => 'users', 'value' => '600+', 'label' => 'Team Members'],
                        ['icon' => 'globe', 'value' => '40+', 'label' => 'Nationalities'],
                        ['icon' => 'chart', 'value' => '94%', 'label' => 'Employee Retention'],
                        ['icon' => 'heart', 'value' => '4.9/5', 'label' => 'Glassdoor Rating']
                    ],
                    'benefits' => [
                        ['icon' => 'heart', 'title' => 'Health Coverage', 'description' => '100% employer-paid premiums for medical, dental, and vision'],
                        ['icon' => 'cash', 'title' => 'Competitive Pay', 'description' => 'Top-tier salaries, equity, and performance bonuses'],
                        ['icon' => 'calendar', 'title' => 'Unlimited PTO', 'description' => 'Take the time you need, plus 20 company holidays'],
                        ['icon' => 'academic', 'title' => 'Learning Fund', 'description' => '$3,000 annual stipend for your professional development'],
                        ['icon' => 'home', 'title' => 'Remote-First', 'description' => 'Work from anywhere with home office setup budget'],
                        ['icon' => 'sparkles', 'title' => 'Wellness Stipend', 'description' => 'Monthly reimbursement for gym, therapy, or mindfulness apps'],
                        ['icon' => 'users', 'title' => 'Family Leave', 'description' => '20 weeks fully paid parental leave'],
                        ['icon' => 'globe', 'title' => 'Global Offsites', 'description' => 'All-expenses-paid team retreats twice per year']
                    ],
                    'cultureValues' => [
                        ['icon' => 'sparkles', 'title' => 'Bold Ambition', 'description' => 'We set audacious goals and pursue them relentlessly.'],
                        ['icon' => 'heart', 'title' => 'Deep Empathy', 'description' => 'We lead with kindness and seek first to understand.'],
                        ['icon' => 'users', 'title' => 'Collective Power', 'description' => 'We know the best solutions come from diverse voices.']
                    ],
                    'departments' => [
                        ['id' => 'engineering', 'name' => 'Engineering', 'icon' => 'chip'],
                        ['id' => 'product', 'name' => 'Product', 'icon' => 'sparkles'],
                        ['id' => 'sales', 'name' => 'Sales', 'icon' => 'chart'],
                        ['id' => 'marketing', 'name' => 'Marketing', 'icon' => 'megaphone'],
                        ['id' => 'people', 'name' => 'People & Culture', 'icon' => 'users']
                    ],
                    'openPositions' => [
                        [
                            'title' => 'Senior Backend Engineer',
                            'department' => 'engineering',
                            'location' => 'Remote (Global)',
                            'type' => 'Full-time',
                            'status' => 'Open',
                            'postedDate' => '2 days ago',
                            'description' => 'Join our core platform team to build scalable, resilient systems that power inventory management for thousands of businesses worldwide.',
                            'link' => '/careers/backend-engineer'
                        ],
                        [
                            'title' => 'Product Manager, AI',
                            'department' => 'product',
                            'location' => 'Remote (US/Canada)',
                            'type' => 'Full-time',
                            'status' => 'Open',
                            'postedDate' => '1 week ago',
                            'description' => 'Lead product discovery and delivery for our AI forecasting engine, working with world-class engineers and data scientists.',
                            'link' => '/careers/product-manager-ai'
                        ],
                        [
                            'title' => 'Enterprise Account Executive',
                            'department' => 'sales',
                            'location' => 'Remote (UK/EU)',
                            'type' => 'Full-time',
                            'status' => 'Open',
                            'postedDate' => '3 days ago',
                            'description' => 'Drive growth by building relationships with enterprise customers and helping them transform their operations.',
                            'link' => '/careers/account-executive'
                        ],
                        [
                            'title' => 'Content Marketing Manager',
                            'department' => 'marketing',
                            'location' => 'Remote (Global)',
                            'type' => 'Full-time',
                            'status' => 'Open',
                            'postedDate' => '5 days ago',
                            'description' => 'Shape our brand voice through compelling stories, case studies, and thought leadership content.',
                            'link' => '/careers/content-marketing'
                        ],
                        [
                            'title' => 'Talent Acquisition Partner',
                            'department' => 'people',
                            'location' => 'Remote (EMEA)',
                            'type' => 'Full-time',
                            'status' => 'Open',
                            'postedDate' => '1 week ago',
                            'description' => 'Help us find and hire exceptional talent while delivering an outstanding candidate experience.',
                            'link' => '/careers/talent-acquisition'
                        ]
                    ],
                    'teamMembers' => [
                        [
                            'name' => 'Alex Rivera',
                            'role' => 'Senior Software Engineer',
                            'quote' => 'The autonomy and trust here are unmatched. I\'ve grown more in two years than in five years elsewhere.',
                            'image' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop'
                        ],
                        [
                            'name' => 'Jamie Park',
                            'role' => 'Product Designer',
                            'quote' => 'I love how every voice is heard. My ideas are taken seriously regardless of my title.',
                            'image' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop'
                        ],
                        [
                            'name' => 'Taylor Brooks',
                            'role' => 'Customer Success Lead',
                            'quote' => 'The culture of empathy isn\'t just talk—it\'s how we show up for each other every single day.',
                            'image' => 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&h=150&fit=crop'
                        ],
                        [
                            'name' => 'Jordan Lee',
                            'role' => 'Data Scientist',
                            'quote' => 'Working on real-world problems with cutting-edge tech? This is the dream job I didn\'t know existed.',
                            'image' => 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop'
                        ]
                    ],
                    'cultureMoments' => [
                        ['icon' => '🎉', 'title' => 'Global Offsite 2024', 'description' => '150 teammates from 20 countries gathered in Lisbon for a week of connection and collaboration.'],
                        ['icon' => '🏆', 'title' => 'Hackathon Champions', 'description' => 'Quarterly hackathons where anyone can pitch ideas and build prototypes with cross-functional teams.'],
                        ['icon' => '🌱', 'title' => 'Learning Fridays', 'description' => 'Dedicated time every other Friday for professional development and skill-building.']
                    ],
                    'categories' => [
                        ['id' => 'hiring', 'name' => 'Hiring Process', 'icon' => 'user-add'],
                        ['id' => 'culture', 'name' => 'Work Culture', 'icon' => 'heart'],
                        ['id' => 'benefits', 'name' => 'Benefits & Perks', 'icon' => 'gift'],
                        ['id' => 'growth', 'name' => 'Career Growth', 'icon' => 'trending']
                    ],
                    'faqs' => [
                        [
                            'id' => 'faq-careers-1',
                            'category' => 'hiring',
                            'icon' => 'question',
                            'question' => 'What does your interview process look like?',
                            'answer' => 'Our process is designed to be transparent and respectful of your time: (1) Recruiter chat (30 min) to learn about you and answer questions, (2) Hiring manager interview (45 min) focused on your experience, (3) Technical or skills assessment (take-home or live, your choice), (4) Final panel with future teammates (2 hours). We typically complete everything within 2 weeks and provide feedback at every stage.',
                            'tags' => ['hiring', 'interview', 'process'],
                            'link' => '/careers/process',
                            'updatedAt' => '2025-01-20',
                            'views' => 2100
                        ],
                        [
                            'id' => 'faq-careers-2',
                            'category' => 'culture',
                            'icon' => 'heart',
                            'question' => 'How do you support remote employees?',
                            'answer' => 'We\'re remote-first, meaning everyone works from wherever they\'re most productive. We provide a $1,500 home office stipend, monthly internet reimbursement, and access to co-working spaces. We have virtual coffee chats, team offsites twice a year, and asynchronous communication practices.',
                            'tags' => ['remote', 'work-from-home', 'flexibility'],
                            'link' => '/careers/remote',
                            'updatedAt' => '2025-02-01',
                            'views' => 1850
                        ],
                        [
                            'id' => 'faq-careers-3',
                            'category' => 'benefits',
                            'icon' => 'gift',
                            'question' => 'What\'s included in the learning and development program?',
                            'answer' => 'Every employee receives a $3,000 annual learning stipend for courses, conferences, certifications, and books. We also have internal mentorship programs, lunch-and-learns, and a book club. Plus, we offer 5 dedicated learning days per year where you can focus entirely on professional development without meetings.',
                            'tags' => ['learning', 'development', 'stipend'],
                            'link' => '/careers/learning',
                            'updatedAt' => '2025-01-15',
                            'views' => 1560
                        ]
                    ],
                    'contactText' => 'Ready to join our team? Explore open positions and start your journey with us.',
                    'contactLink' => '/careers',
                    'contactButtonText' => 'View All Jobs',
                    'contactImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 359,
                'section_key' => 'cultureCareers',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Come Grow With Us',
                        'backgroundColor' => 'bg-violet-100 dark:bg-violet-900/30',
                        'borderColor' => 'border-violet-200 dark:border-violet-800',
                        'textColor' => 'text-violet-700 dark:text-violet-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Where Your',
                        'highlightedText' => 'Career Takes Flight',
                        'suffix' => '',
                        'highlightGradient' => 'from-violet-600 to-purple-600'
                    ],
                    'description' => 'We believe that great companies are built by great people. If you\'re looking for a place where you can make an impact, grow continuously, and work alongside passionate colleagues, you\'ve found your home.',
                    'heroImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=500&fit=crop',
                    'stats' => [
                        ['icon' => 'users', 'value' => '800+', 'label' => 'Team Members'],
                        ['icon' => 'globe', 'value' => '45+', 'label' => 'Nationalities'],
                        ['icon' => 'chart', 'value' => '96%', 'label' => 'Employee Engagement'],
                        ['icon' => 'heart', 'value' => '5.0/5', 'label' => 'Glassdoor Rating']
                    ],
                    'benefits' => [
                        ['icon' => 'heart', 'title' => 'Health & Wellness', 'description' => 'Comprehensive medical, dental, vision, and mental health support'],
                        ['icon' => 'cash', 'title' => 'Competitive Pay', 'description' => 'Top market salaries, equity, and performance bonuses'],
                        ['icon' => 'calendar', 'title' => 'Flexible Time Off', 'description' => 'Unlimited PTO, 20 holidays, and summer Fridays'],
                        ['icon' => 'academic', 'title' => 'Learning Budget', 'description' => '$3,500 annual stipend for your professional growth'],
                        ['icon' => 'home', 'title' => 'Remote-First', 'description' => 'Work from anywhere with home office stipend'],
                        ['icon' => 'sparkles', 'title' => 'Wellness Perks', 'description' => 'Gym, therapy, meditation app reimbursements'],
                        ['icon' => 'users', 'title' => 'Family Support', 'description' => '20 weeks parental leave + fertility benefits'],
                        ['icon' => 'globe', 'title' => 'Global Retreats', 'description' => 'Annual all-expenses-paid team gatherings worldwide']
                    ],
                    'cultureValues' => [
                        ['icon' => 'sparkles', 'title' => 'Fearless Innovation', 'description' => 'We take smart risks and learn from every outcome.'],
                        ['icon' => 'heart', 'title' => 'Authentic Empathy', 'description' => 'We show up for each other with genuine care.'],
                        ['icon' => 'users', 'title' => 'United Diversity', 'description' => 'Our differences make us stronger and wiser.']
                    ],
                    'departments' => [
                        ['id' => 'engineering', 'name' => 'Engineering', 'icon' => 'chip'],
                        ['id' => 'product', 'name' => 'Product', 'icon' => 'sparkles'],
                        ['id' => 'sales', 'name' => 'Sales', 'icon' => 'chart'],
                        ['id' => 'marketing', 'name' => 'Marketing', 'icon' => 'megaphone'],
                        ['id' => 'people', 'name' => 'People & Culture', 'icon' => 'users'],
                        ['id' => 'design', 'name' => 'Design', 'icon' => 'color-swatch']
                    ],
                    'locations' => ['Remote (Global)', 'Remote (US)', 'Remote (EMEA)', 'Remote (APAC)', 'Hybrid - NYC', 'Hybrid - London', 'Hybrid - Singapore'],
                    'openPositions' => [
                        [
                            'title' => 'Staff Software Engineer',
                            'department' => 'engineering',
                            'location' => 'Remote (Global)',
                            'type' => 'Full-time',
                            'status' => 'Open',
                            'postedDate' => '1 day ago',
                            'description' => 'Lead technical architecture for our core platform, mentor junior engineers, and drive innovation in distributed systems.',
                            'link' => '/careers/staff-engineer'
                        ],
                        [
                            'title' => 'Senior Product Manager - AI',
                            'department' => 'product',
                            'location' => 'Remote (US)',
                            'type' => 'Full-time',
                            'status' => 'Open',
                            'postedDate' => '3 days ago',
                            'description' => 'Shape the roadmap for our AI-powered forecasting engine, working with world-class data scientists and engineers.',
                            'link' => '/careers/product-manager-ai'
                        ],
                        [
                            'title' => 'Enterprise Account Director',
                            'department' => 'sales',
                            'location' => 'Remote (US)',
                            'type' => 'Full-time',
                            'status' => 'Open',
                            'postedDate' => '5 days ago',
                            'description' => 'Build strategic relationships with Fortune 500 companies and drive transformational deals.',
                            'link' => '/careers/account-director'
                        ],
                        [
                            'title' => 'Content Strategy Lead',
                            'department' => 'marketing',
                            'location' => 'Remote (Global)',
                            'type' => 'Full-time',
                            'status' => 'Open',
                            'postedDate' => '1 week ago',
                            'description' => 'Lead our content strategy, develop thought leadership, and shape our brand narrative.',
                            'link' => '/careers/content-lead'
                        ],
                        [
                            'title' => 'Senior Technical Recruiter',
                            'department' => 'people',
                            'location' => 'Remote (US)',
                            'type' => 'Full-time',
                            'status' => 'Open',
                            'postedDate' => '2 days ago',
                            'description' => 'Help us find and hire exceptional engineering talent while delivering an outstanding candidate experience.',
                            'link' => '/careers/technical-recruiter'
                        ],
                        [
                            'title' => 'Lead Product Designer',
                            'department' => 'design',
                            'location' => 'Remote (EMEA)',
                            'type' => 'Full-time',
                            'status' => 'Open',
                            'postedDate' => '4 days ago',
                            'description' => 'Lead design for our core product, mentor other designers, and shape our design system.',
                            'link' => '/careers/lead-designer'
                        ]
                    ],
                    'teamMembers' => [
                        [
                            'name' => 'Sofia Ramirez',
                            'role' => 'Senior Engineering Manager',
                            'quote' => 'The autonomy and trust here are unlike anywhere I\'ve worked. I\'m empowered to make real decisions.',
                            'image' => 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&h=150&fit=crop'
                        ],
                        [
                            'name' => 'Kenji Tanaka',
                            'role' => 'Product Designer',
                            'quote' => 'I love that my voice is heard regardless of my level. Everyone\'s ideas are taken seriously.',
                            'image' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop'
                        ],
                        [
                            'name' => 'Priya Mehta',
                            'role' => 'Customer Success Lead',
                            'quote' => 'The culture of empathy isn\'t just talk—it\'s how we show up for each other every single day.',
                            'image' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop'
                        ],
                        [
                            'name' => 'Marcus Williams',
                            'role' => 'Data Scientist',
                            'quote' => 'Working on real-world problems with cutting-edge tech? This is the dream job I didn\'t know existed.',
                            'image' => 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop'
                        ]
                    ],
                    'cultureMoments' => [
                        ['icon' => '🌍', 'title' => 'Global Offsite 2024', 'description' => '200 teammates from 30 countries gathered in Bali for a week of connection, learning, and celebration.', 'image' => 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&h=400&fit=crop'],
                        ['icon' => '🏆', 'title' => 'Hackathon Champions', 'description' => 'Quarterly hackathons where anyone can pitch ideas and build prototypes with cross-functional teams.', 'image' => 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop'],
                        ['icon' => '📚', 'title' => 'Learning Days', 'description' => 'Dedicated time every other Friday for professional development and skill-building.', 'image' => 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop']
                    ],
                    'testimonials' => [
                        ['icon' => '💬', 'quote' => 'I\'ve never felt more supported in my career. The mentorship and growth opportunities are incredible.', 'name' => 'Alex Rivera', 'role' => 'Software Engineer', 'rating' => 5, 'image' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'],
                        ['icon' => '💬', 'quote' => 'The diversity of perspectives here makes every project better. I\'m constantly learning from my colleagues.', 'name' => 'Jordan Lee', 'role' => 'Product Manager', 'rating' => 5, 'image' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'],
                        ['icon' => '💬', 'quote' => 'Work-life balance is real here. I can be a great parent and a great employee without burning out.', 'name' => 'Taylor Brooks', 'role' => 'Marketing Lead', 'rating' => 5, 'image' => 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop']
                    ],
                    'videos' => [
                        ['title' => 'A Day in the Life', 'author' => 'Engineering Team', 'role' => 'Software Engineer', 'url' => '/videos/day-in-life.mp4', 'thumbnail' => 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=400&h=300&fit=crop'],
                        ['title' => 'Why I Joined', 'author' => 'Product Team', 'role' => 'Product Manager', 'url' => '/videos/why-joined.mp4', 'thumbnail' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop'],
                        ['title' => 'Culture of Belonging', 'author' => 'People Team', 'role' => 'Head of People', 'url' => '/videos/belonging.mp4', 'thumbnail' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop']
                    ],
                    'values' => [
                        ['icon' => '🔮', 'title' => 'Bold Vision', 'description' => 'We set audacious goals and pursue them with relentless energy.', 'example' => 'Annual moonshot projects that push our boundaries.'],
                        ['icon' => '❤️', 'title' => 'Radical Candor', 'description' => 'We care personally and challenge directly, always with respect.', 'example' => 'Real-time feedback loops and peer coaching.'],
                        ['icon' => '🤝', 'title' => 'One Team', 'description' => 'We win together, learn together, and support each other unconditionally.', 'example' => 'Cross-functional pods and shared success metrics.']
                    ],
                    'categories' => [
                        ['id' => 'hiring', 'name' => 'Hiring Process', 'icon' => 'user-add', 'description' => 'How we find and select talent'],
                        ['id' => 'culture', 'name' => 'Work Culture', 'icon' => 'heart', 'description' => 'What makes our environment special'],
                        ['id' => 'benefits', 'name' => 'Benefits & Perks', 'icon' => 'gift', 'description' => 'How we support our people'],
                        ['id' => 'growth', 'name' => 'Career Growth', 'icon' => 'trending', 'description' => 'Development opportunities']
                    ],
                    'faqs' => [
                        [
                            'id' => 'faq-careers-1',
                            'category' => 'hiring',
                            'icon' => 'question',
                            'question' => 'What\'s unique about your hiring process?',
                            'answer' => 'We prioritize transparency and respect for your time. Our process: (1) Recruiter chat (30 min) to learn about you, (2) Hiring manager conversation (45 min) on your experience, (3) Skills assessment (choose take-home or live), (4) Final panel with future teammates (2 hours). We provide feedback after every stage and aim to complete within 2 weeks.',
                            'tags' => ['hiring', 'interview', 'transparency'],
                            'link' => '/careers/process',
                            'updatedAt' => '2025-01-20',
                            'views' => 2450
                        ],
                        [
                            'id' => 'faq-careers-2',
                            'category' => 'culture',
                            'icon' => 'heart',
                            'question' => 'How do you build community in a remote-first company?',
                            'answer' => 'We invest heavily in connection: weekly virtual coffee chats, interest-based Slack channels, quarterly offsites, and annual all-expenses-paid global retreats. We also have regional meetups, virtual game nights, and a \'buddy system\' for new hires. Our async-first culture means no pressure to be online at specific times, but plenty of opportunities to connect.',
                            'tags' => ['remote', 'community', 'connection'],
                            'link' => '/careers/remote-community',
                            'updatedAt' => '2025-02-01',
                            'views' => 2120
                        ],
                        [
                            'id' => 'faq-careers-3',
                            'category' => 'benefits',
                            'icon' => 'gift',
                            'question' => 'What does your learning and development program include?',
                            'answer' => 'Every employee receives a $3,500 annual learning stipend for courses, conferences, certifications, and books. We have internal mentorship programs, lunch-and-learns, and a book club. We also offer 5 dedicated learning days per year where you can focus entirely on professional development without meetings.',
                            'tags' => ['learning', 'development', 'stipend'],
                            'link' => '/careers/learning',
                            'updatedAt' => '2025-01-15',
                            'views' => 1890
                        ]
                    ],
                    'contactText' => 'Ready to join our team? Explore open positions and start your journey with us.',
                    'contactLink' => '/careers',
                    'contactButtonText' => 'View All Jobs',
                    'contactImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 360,
                'section_key' => 'cultureCareers',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Awards & Recognition Section 
            [
                'id' => 361,
                'section_key' => 'awardsRecognition',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Celebrating Excellence',
                        'backgroundColor' => 'bg-yellow-100 dark:bg-yellow-900/30',
                        'borderColor' => 'border-yellow-200 dark:border-yellow-800',
                        'textColor' => 'text-yellow-700 dark:text-yellow-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Recognized for',
                        'highlightedText' => 'Innovation & Impact',
                        'suffix' => '',
                        'highlightGradient' => 'from-yellow-600 to-amber-600'
                    ],
                    'description' => 'Our commitment to excellence has been recognized by industry leaders, analysts, and customers around the world. These awards reflect our dedication to innovation, customer success, and building a product that truly makes a difference.',
                    'heroImage' => 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&h=500&fit=crop',
                    'stats' => [
                        ['icon' => 'trophy', 'value' => '25+', 'label' => 'Industry Awards'],
                        ['icon' => 'star', 'value' => '4.9/5', 'label' => 'Customer Rating'],
                        ['icon' => 'users', 'value' => '50+', 'label' => 'Analyst Recognitions'],
                        ['icon' => 'globe', 'value' => '15+', 'label' => 'Countries Recognized']
                    ],
                    'featuredAward' => [
                        'title' => 'Best Inventory Management Platform 2024',
                        'awarder' => 'Software Advice',
                        'year' => '2024',
                        'description' => 'Recognized as the top-rated inventory management solution based on customer reviews, feature set, and value for money. This award highlights our commitment to delivering exceptional value to businesses of all sizes.',
                        'image' => 'https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?w=800&h=500&fit=crop'
                    ],
                    'years' => ['2024', '2023', '2022', '2021', '2020'],
                    'awards' => [
                        [
                            'title' => 'Leader in Inventory Management',
                            'awarder' => 'Gartner Peer Insights',
                            'year' => '2024',
                            'icon' => '🏆',
                            'description' => 'Recognized as a Customers\' Choice for Inventory Management Software with a 4.8/5 rating based on 500+ verified customer reviews.',
                            'link' => '/press/gartner-2024',
                            'image' => 'https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?w=400&h=300&fit=crop'
                        ],
                        [
                            'title' => 'Best Place to Work',
                            'awarder' => 'Forbes',
                            'year' => '2024',
                            'icon' => '⭐',
                            'description' => 'Ranked #42 on Forbes list of America\'s Best Employers, recognized for exceptional workplace culture and employee satisfaction.',
                            'link' => '/press/forbes-2024',
                            'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop'
                        ],
                        [
                            'title' => 'Cloud 100',
                            'awarder' => 'Forbes',
                            'year' => '2023',
                            'icon' => '☁️',
                            'description' => 'Named to the Forbes Cloud 100 for the third consecutive year, recognizing the world\'s top private cloud companies.',
                            'link' => '/press/cloud100-2023',
                            'image' => 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop'
                        ],
                        [
                            'title' => 'Fastest-Growing Tech Company',
                            'awarder' => 'Deloitte',
                            'year' => '2023',
                            'icon' => '🚀',
                            'description' => 'Ranked #15 on Deloitte\'s Technology Fast 500, recognizing 1,200% revenue growth over three years.',
                            'link' => '/press/deloitte-2023',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop'
                        ],
                        [
                            'title' => 'Innovation Award',
                            'awarder' => 'SaaS Awards',
                            'year' => '2024',
                            'icon' => '💡',
                            'description' => 'Winner of the Best AI-Powered Solution category for our demand forecasting engine.',
                            'link' => '/press/saas-awards-2024',
                            'image' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop'
                        ],
                        [
                            'title' => 'Customer Service Excellence',
                            'awarder' => 'Stevie Awards',
                            'year' => '2024',
                            'icon' => '🎖️',
                            'description' => 'Gold winner for Customer Service Department of the Year, with a 98% customer satisfaction rating.',
                            'link' => '/press/stevie-2024',
                            'image' => 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=400&h=300&fit=crop'
                        ]
                    ],
                    'categories' => [
                        ['id' => 'product', 'name' => 'Product Awards', 'icon' => 'sparkles'],
                        ['id' => 'workplace', 'name' => 'Workplace Awards', 'icon' => 'heart'],
                        ['id' => 'growth', 'name' => 'Growth Awards', 'icon' => 'chart']
                    ],
                    'faqs' => [
                        [
                            'id' => 'faq-awards-1',
                            'category' => 'product',
                            'icon' => 'question',
                            'question' => 'How are award winners determined?',
                            'answer' => 'Each award has its own methodology. For customer-based awards like Gartner Peer Insights, winners are determined by verified customer reviews across criteria like product capabilities, support quality, and value. Analyst awards like the Forbes Cloud 100 evaluate factors including revenue growth, valuation, and market leadership.',
                            'tags' => ['methodology', 'criteria', 'transparency'],
                            'link' => '/press/methodology',
                            'updatedAt' => '2025-01-15',
                            'views' => 890
                        ],
                        [
                            'id' => 'faq-awards-2',
                            'category' => 'workplace',
                            'icon' => 'heart',
                            'question' => 'What makes you a \'Best Place to Work\'?',
                            'answer' => 'Our recognition as a Best Place to Work is based on anonymous employee surveys measuring trust, inclusion, work-life balance, and career development. Key factors include our remote-first culture, generous benefits (20 weeks parental leave, $3,500 learning stipend), and our commitment to diversity (45% women in leadership).',
                            'tags' => ['culture', 'benefits', 'employee satisfaction'],
                            'link' => '/careers/culture',
                            'updatedAt' => '2025-01-20',
                            'views' => 1250
                        ],
                        [
                            'id' => 'faq-awards-3',
                            'category' => 'growth',
                            'icon' => 'chart',
                            'question' => 'How have you achieved such rapid growth?',
                            'answer' => 'Our growth is driven by product-led innovation (AI forecasting, intuitive UX), customer-centric culture (98% retention), and strategic expansion into new markets. We\'ve also benefited from strong tailwinds as businesses digitize operations.',
                            'tags' => ['growth', 'strategy', 'expansion'],
                            'link' => '/about/growth',
                            'updatedAt' => '2025-01-25',
                            'views' => 980
                        ]
                    ],
                    'contactText' => 'Want to learn more about our achievements? Contact our media team.',
                    'contactLink' => '/press',
                    'contactButtonText' => 'Press & Media',
                    'contactImage' => 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&h=400&fit=crop'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 362,
                'section_key' => 'awardsRecognition',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Our Accolades',
                        'backgroundColor' => 'bg-blue-100 dark:bg-blue-900/30',
                        'borderColor' => 'border-blue-200 dark:border-blue-800',
                        'textColor' => 'text-blue-700 dark:text-blue-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Celebrating',
                        'highlightedText' => 'Industry Leadership',
                        'suffix' => '',
                        'highlightGradient' => 'from-blue-600 to-indigo-600'
                    ],
                    'description' => 'We\'re honored to be recognized by leading industry analysts, prestigious publications, and most importantly, our customers. These awards reflect our relentless commitment to innovation, customer success, and building a product that truly makes a difference.',
                    'heroImage' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=500&fit=crop',
                    'stats' => [
                        ['icon' => 'trophy', 'value' => '35+', 'label' => 'Industry Awards'],
                        ['icon' => 'star', 'value' => '4.9/5', 'label' => 'Customer Rating'],
                        ['icon' => 'users', 'value' => '75+', 'label' => 'Analyst Recognitions'],
                        ['icon' => 'globe', 'value' => '20+', 'label' => 'Countries Recognized']
                    ],
                    'featuredAward' => [
                        'title' => 'Best Inventory Management Platform 2024',
                        'awarder' => 'Software Advice',
                        'year' => '2024',
                        'type' => 'product',
                        'description' => 'Recognized as the top-rated inventory management solution based on customer reviews, feature set, and value for money.',
                        'details' => 'The judges praised our intuitive interface, powerful analytics, and exceptional customer support. One customer noted: \'This platform transformed how we manage inventory - we\'ve reduced waste by 40% and improved cash flow significantly.\'',
                        'image' => 'https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?w=800&h=500&fit=crop'
                    ],
                    'years' => ['2024', '2023', '2022', '2021', '2020'],
                    'awardTypes' => [
                        ['value' => 'product', 'label' => 'Product Awards'],
                        ['value' => 'company', 'label' => 'Company Awards'],
                        ['value' => 'customer', 'label' => 'Customer Success'],
                        ['value' => 'workplace', 'label' => 'Workplace Culture'],
                        ['value' => 'innovation', 'label' => 'Innovation Awards']
                    ],
                    'awards' => [
                        [
                            'title' => 'Leader in Inventory Management',
                            'awarder' => 'Gartner Peer Insights',
                            'year' => '2024',
                            'type' => 'product',
                            'icon' => '🏆',
                            'description' => 'Recognized as a Customers\' Choice for Inventory Management Software with a 4.8/5 rating based on 500+ verified customer reviews.',
                            'details' => 'Customers highlighted our ease of use, responsive support, and continuous innovation.',
                            'link' => '/press/gartner-2024',
                            'image' => 'https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?w=400&h=300&fit=crop'
                        ],
                        [
                            'title' => 'Best Place to Work',
                            'awarder' => 'Forbes',
                            'year' => '2024',
                            'type' => 'workplace',
                            'icon' => '⭐',
                            'description' => 'Ranked #42 on Forbes list of America\'s Best Employers, recognized for exceptional workplace culture and employee satisfaction.',
                            'details' => 'Employees praised our remote-first culture, generous benefits, and commitment to diversity and inclusion.',
                            'link' => '/press/forbes-2024',
                            'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop'
                        ],
                        [
                            'title' => 'Cloud 100',
                            'awarder' => 'Forbes',
                            'year' => '2023',
                            'type' => 'company',
                            'icon' => '☁️',
                            'description' => 'Named to the Forbes Cloud 100 for the third consecutive year, recognizing the world\'s top private cloud companies.',
                            'details' => 'This award recognizes our sustained growth, product innovation, and market leadership in the cloud software space.',
                            'link' => '/press/cloud100-2023',
                            'image' => 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop'
                        ],
                        [
                            'title' => 'Fastest-Growing Tech Company',
                            'awarder' => 'Deloitte',
                            'year' => '2023',
                            'type' => 'company',
                            'icon' => '🚀',
                            'description' => 'Ranked #15 on Deloitte\'s Technology Fast 500, recognizing 1,200% revenue growth over three years.',
                            'details' => 'Our growth reflects strong market demand and our team\'s exceptional execution.',
                            'link' => '/press/deloitte-2023',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop'
                        ],
                        [
                            'title' => 'Innovation Award',
                            'awarder' => 'SaaS Awards',
                            'year' => '2024',
                            'type' => 'innovation',
                            'icon' => '💡',
                            'description' => 'Winner of the Best AI-Powered Solution category for our demand forecasting engine.',
                            'details' => 'Our AI forecasting engine achieves 97% accuracy, helping customers reduce inventory waste by 40% and improve cash flow.',
                            'link' => '/press/saas-awards-2024',
                            'image' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop'
                        ],
                        [
                            'title' => 'Customer Service Excellence',
                            'awarder' => 'Stevie Awards',
                            'year' => '2024',
                            'type' => 'customer',
                            'icon' => '🎖️',
                            'description' => 'Gold winner for Customer Service Department of the Year, with a 98% customer satisfaction rating.',
                            'details' => 'Our support team resolves 90% of tickets within 2 hours and maintains a 4.9/5 customer satisfaction score.',
                            'link' => '/press/stevie-2024',
                            'image' => 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=400&h=300&fit=crop'
                        ]
                    ],
                    'categories' => [
                        ['id' => 'product', 'name' => 'Product Awards', 'icon' => 'sparkles'],
                        ['id' => 'workplace', 'name' => 'Workplace Awards', 'icon' => 'heart'],
                        ['id' => 'growth', 'name' => 'Growth Awards', 'icon' => 'chart'],
                        ['id' => 'innovation', 'name' => 'Innovation Awards', 'icon' => 'lightbulb']
                    ],
                    'faqs' => [
                        [
                            'id' => 'faq-awards-1',
                            'category' => 'product',
                            'icon' => 'question',
                            'question' => 'How are award winners determined?',
                            'answer' => 'Each award has its own methodology. For customer-based awards like Gartner Peer Insights, winners are determined by verified customer reviews across criteria like product capabilities, support quality, and value. Analyst awards like the Forbes Cloud 100 evaluate factors including revenue growth, valuation, and market leadership.',
                            'tags' => ['methodology', 'criteria', 'transparency'],
                            'link' => '/press/methodology',
                            'updatedAt' => '2025-01-15',
                            'views' => 890
                        ],
                        [
                            'id' => 'faq-awards-2',
                            'category' => 'workplace',
                            'icon' => 'heart',
                            'question' => 'What makes you a \'Best Place to Work\'?',
                            'answer' => 'Our recognition as a Best Place to Work is based on anonymous employee surveys measuring trust, inclusion, work-life balance, and career development. Key factors include our remote-first culture, generous benefits, and commitment to diversity.',
                            'tags' => ['culture', 'benefits', 'employee satisfaction'],
                            'link' => '/careers/culture',
                            'updatedAt' => '2025-01-20',
                            'views' => 1250
                        ],
                        [
                            'id' => 'faq-awards-3',
                            'category' => 'growth',
                            'icon' => 'chart',
                            'question' => 'How have you achieved such rapid growth?',
                            'answer' => 'Our growth is driven by product-led innovation (AI forecasting, intuitive UX), customer-centric culture (98% retention), and strategic expansion into new markets.',
                            'tags' => ['growth', 'strategy', 'expansion'],
                            'link' => '/about/growth',
                            'updatedAt' => '2025-01-25',
                            'views' => 980
                        ]
                    ],
                    'contactText' => 'Want to learn more about our achievements? Contact our media team.',
                    'contactLink' => '/press',
                    'contactButtonText' => 'Press & Media',
                    'contactImage' => 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&h=400&fit=crop'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 363,
                'section_key' => 'awardsRecognition',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Honors & Accolades',
                        'backgroundColor' => 'bg-indigo-100 dark:bg-indigo-900/30',
                        'borderColor' => 'border-indigo-200 dark:border-indigo-800',
                        'textColor' => 'text-indigo-700 dark:text-indigo-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'A Legacy of',
                        'highlightedText' => 'Excellence',
                        'suffix' => '',
                        'highlightGradient' => 'from-indigo-600 to-purple-600'
                    ],
                    'description' => 'Our commitment to innovation, customer success, and workplace culture has earned recognition from industry leaders worldwide. These awards reflect the dedication of our team and the trust of our customers.',
                    'heroImage' => 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&h=500&fit=crop',
                    'stats' => [
                        ['icon' => 'trophy', 'value' => '40+', 'label' => 'Industry Awards'],
                        ['icon' => 'star', 'value' => '4.9/5', 'label' => 'Customer Rating'],
                        ['icon' => 'users', 'value' => '80+', 'label' => 'Analyst Recognitions'],
                        ['icon' => 'globe', 'value' => '25+', 'label' => 'Countries Recognized']
                    ],
                    'featuredAward' => [
                        'title' => 'Best Inventory Management Platform 2024',
                        'awarder' => 'Software Advice',
                        'year' => '2024',
                        'type' => 'product',
                        'description' => 'Recognized as the top-rated inventory management solution based on customer reviews, feature set, and value for money.',
                        'details' => 'The judges praised our intuitive interface, powerful analytics, and exceptional customer support.',
                        'image' => 'https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?w=800&h=500&fit=crop'
                    ],
                    'years' => ['2024', '2023', '2022', '2021', '2020'],
                    'awardTypes' => [
                        ['value' => 'product', 'label' => 'Product Awards'],
                        ['value' => 'company', 'label' => 'Company Awards'],
                        ['value' => 'customer', 'label' => 'Customer Success'],
                        ['value' => 'workplace', 'label' => 'Workplace Culture'],
                        ['value' => 'innovation', 'label' => 'Innovation Awards']
                    ],
                    'awards' => [
                        [
                            'title' => 'Leader in Inventory Management',
                            'awarder' => 'Gartner Peer Insights',
                            'year' => '2024',
                            'type' => 'product',
                            'icon' => '🏆',
                            'description' => 'Recognized as a Customers\' Choice for Inventory Management Software with a 4.8/5 rating based on 500+ verified customer reviews.',
                            'details' => 'Customers highlighted our ease of use, responsive support, and continuous innovation.',
                            'link' => '/press/gartner-2024',
                            'image' => 'https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?w=400&h=300&fit=crop'
                        ],
                        [
                            'title' => 'Best Place to Work',
                            'awarder' => 'Forbes',
                            'year' => '2024',
                            'type' => 'workplace',
                            'icon' => '⭐',
                            'description' => 'Ranked #42 on Forbes list of America\'s Best Employers, recognized for exceptional workplace culture and employee satisfaction.',
                            'details' => 'Employees praised our remote-first culture, generous benefits, and commitment to diversity.',
                            'link' => '/press/forbes-2024',
                            'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop'
                        ],
                        [
                            'title' => 'Cloud 100',
                            'awarder' => 'Forbes',
                            'year' => '2023',
                            'type' => 'company',
                            'icon' => '☁️',
                            'description' => 'Named to the Forbes Cloud 100 for the third consecutive year, recognizing the world\'s top private cloud companies.',
                            'details' => 'This award recognizes our sustained growth, product innovation, and market leadership.',
                            'link' => '/press/cloud100-2023',
                            'image' => 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop'
                        ],
                        [
                            'title' => 'Fastest-Growing Tech Company',
                            'awarder' => 'Deloitte',
                            'year' => '2023',
                            'type' => 'company',
                            'icon' => '🚀',
                            'description' => 'Ranked #15 on Deloitte\'s Technology Fast 500, recognizing 1,200% revenue growth over three years.',
                            'details' => 'Our growth reflects strong market demand and our team\'s exceptional execution.',
                            'link' => '/press/deloitte-2023',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop'
                        ],
                        [
                            'title' => 'Innovation Award',
                            'awarder' => 'SaaS Awards',
                            'year' => '2024',
                            'type' => 'innovation',
                            'icon' => '💡',
                            'description' => 'Winner of the Best AI-Powered Solution category for our demand forecasting engine.',
                            'details' => 'Our AI forecasting engine achieves 97% accuracy, helping customers reduce inventory waste by 40%.',
                            'link' => '/press/saas-awards-2024',
                            'image' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop'
                        ],
                        [
                            'title' => 'Customer Service Excellence',
                            'awarder' => 'Stevie Awards',
                            'year' => '2024',
                            'type' => 'customer',
                            'icon' => '🎖️',
                            'description' => 'Gold winner for Customer Service Department of the Year, with a 98% customer satisfaction rating.',
                            'details' => 'Our support team resolves 90% of tickets within 2 hours.',
                            'link' => '/press/stevie-2024',
                            'image' => 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=400&h=300&fit=crop'
                        ]
                    ],
                    'testimonials' => [
                        [
                            'icon' => '💬',
                            'quote' => 'The platform has completely transformed our operations. We\'ve reduced inventory costs by 35% while improving fill rates to 99%.',
                            'name' => 'Sarah Johnson',
                            'title' => 'COO',
                            'company' => 'Global Retail Co.',
                            'award' => 'Customer Impact Award 2024',
                            'image' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
                        ],
                        [
                            'icon' => '💬',
                            'quote' => 'Working with this team has been a game-changer. Their AI forecasting saved us millions in the first year alone.',
                            'name' => 'Michael Chen',
                            'title' => 'Supply Chain Director',
                            'company' => 'TechLogistics',
                            'award' => 'Innovation Partner Award',
                            'image' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
                        ],
                        [
                            'icon' => '💬',
                            'quote' => 'The culture here is unlike anywhere I\'ve worked. People genuinely care about each other and the mission.',
                            'name' => 'Jessica Williams',
                            'title' => 'Senior Engineer',
                            'company' => 'Inventory Platform',
                            'award' => 'Best Workplace Recognition',
                            'image' => 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop'
                        ]
                    ],
                    'categories' => [
                        ['id' => 'product', 'name' => 'Product Awards', 'icon' => 'sparkles', 'description' => 'Recognitions for our platform excellence'],
                        ['id' => 'workplace', 'name' => 'Workplace Awards', 'icon' => 'heart', 'description' => 'Recognitions for our culture'],
                        ['id' => 'growth', 'name' => 'Growth Awards', 'icon' => 'chart', 'description' => 'Recognitions for our business success'],
                        ['id' => 'innovation', 'name' => 'Innovation Awards', 'icon' => 'lightbulb', 'description' => 'Recognitions for our technology']
                    ],
                    'faqs' => [
                        [
                            'id' => 'faq-awards-1',
                            'category' => 'product',
                            'icon' => 'question',
                            'question' => 'How are award winners determined?',
                            'answer' => 'Each award has its own methodology. For customer-based awards like Gartner Peer Insights, winners are determined by verified customer reviews across criteria like product capabilities, support quality, and value. Analyst awards like the Forbes Cloud 100 evaluate factors including revenue growth, valuation, and market leadership.',
                            'tags' => ['methodology', 'criteria', 'transparency'],
                            'link' => '/press/methodology',
                            'updatedAt' => '2025-01-15',
                            'views' => 890
                        ],
                        [
                            'id' => 'faq-awards-2',
                            'category' => 'workplace',
                            'icon' => 'heart',
                            'question' => 'What makes you a \'Best Place to Work\'?',
                            'answer' => 'Our recognition as a Best Place to Work is based on anonymous employee surveys measuring trust, inclusion, work-life balance, and career development. Key factors include our remote-first culture, generous benefits (20 weeks parental leave, $3,500 learning stipend), and our commitment to diversity (45% women in leadership).',
                            'tags' => ['culture', 'benefits', 'employee satisfaction'],
                            'link' => '/careers/culture',
                            'updatedAt' => '2025-01-20',
                            'views' => 1250
                        ],
                        [
                            'id' => 'faq-awards-3',
                            'category' => 'growth',
                            'icon' => 'chart',
                            'question' => 'How have you achieved such rapid growth?',
                            'answer' => 'Our growth is driven by product-led innovation (AI forecasting, intuitive UX), customer-centric culture (98% retention), and strategic expansion into new markets. We\'ve also benefited from strong tailwinds as businesses digitize operations. Our 1,200% three-year growth reflects both market demand and our team\'s execution.',
                            'tags' => ['growth', 'strategy', 'expansion'],
                            'link' => '/about/growth',
                            'updatedAt' => '2025-01-25',
                            'views' => 980
                        ]
                    ],
                    'contactText' => 'Want to learn more about our achievements? Contact our media team.',
                    'contactLink' => '/press',
                    'contactButtonText' => 'Press & Media',
                    'contactImage' => 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&h=400&fit=crop'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 364,
                'section_key' => 'awardsRecognition',
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
