<?php

namespace Database\Seeders\PageRelatedSeeders\SectionVariantSeeder;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CareersPageSectionVariantSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Upsert only this page's variants so other page seeders do not get wiped out.
        $variants = [

            // Open Positions Section
            [
                'id' => 501,
                'section_key' => 'openPositions',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => 'Join Our Team',
                    'title' => [
                        'prefix' => 'Current',
                        'highlight' => 'Open Positions',
                        'suffix' => ''
                    ],
                    'description' => 'Join our mission to transform supply chain management. Explore opportunities to grow your career with a team of innovators and problem-solvers.',
                    'heroImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=500&fit=crop',
                    'searchPlaceholder' => 'Search by job title, department, or keyword...',
                    'stats' => [
                        ['value' => '25+', 'label' => 'Open Positions', 'icon' => 'briefcase'],
                        ['value' => '8', 'label' => 'Departments', 'icon' => 'users'],
                        ['value' => '6', 'label' => 'Locations', 'icon' => 'globe'],
                        ['value' => '100+', 'label' => 'Team Members', 'icon' => 'users']
                    ],
                    'departments' => [
                        ['id' => 'all', 'label' => 'All Departments', 'icon' => 'briefcase'],
                        ['id' => 'engineering', 'label' => 'Engineering', 'icon' => 'code'],
                        ['id' => 'product', 'label' => 'Product', 'icon' => 'lightbulb'],
                        ['id' => 'sales', 'label' => 'Sales', 'icon' => 'chart'],
                        ['id' => 'marketing', 'label' => 'Marketing', 'icon' => 'trending'],
                        ['id' => 'customer-success', 'label' => 'Customer Success', 'icon' => 'users'],
                        ['id' => 'operations', 'label' => 'Operations', 'icon' => 'cog']
                    ],
                    'locations' => [
                        ['id' => 'all', 'label' => 'All Locations'],
                        ['id' => 'remote', 'label' => 'Remote'],
                        ['id' => 'new-york', 'label' => 'New York, NY'],
                        ['id' => 'san-francisco', 'label' => 'San Francisco, CA'],
                        ['id' => 'london', 'label' => 'London, UK'],
                        ['id' => 'singapore', 'label' => 'Singapore']
                    ],
                    'featuredPosition' => [
                        'id' => 'pos-001',
                        'title' => 'Senior Full Stack Engineer',
                        'department' => 'engineering',
                        'type' => 'full-time',
                        'location' => 'San Francisco, CA',
                        'salary' => '$150k - $200k',
                        'description' => 'Join our engineering team to build the next generation of supply chain management platform. You\'ll work with modern technologies including React, Node.js, and GraphQL to create scalable solutions that help businesses optimize their operations.',
                        'requirements' => ['5+ years of experience', 'React & Node.js expertise', 'Experience with GraphQL', 'Cloud architecture knowledge'],
                        'image' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop',
                        'link' => '/careers/senior-full-stack-engineer',
                        'isFeatured' => true
                    ],
                    'positions' => [
                        [
                            'id' => 'pos-001',
                            'title' => 'Senior Full Stack Engineer',
                            'department' => 'engineering',
                            'type' => 'full-time',
                            'location' => 'San Francisco, CA',
                            'salary' => '$150k - $200k',
                            'description' => 'Join our engineering team to build the next generation of supply chain management platform. You\'ll work with modern technologies including React, Node.js, and GraphQL to create scalable solutions that help businesses optimize their operations.',
                            'requirements' => ['5+ years of experience', 'React & Node.js expertise', 'Experience with GraphQL', 'Cloud architecture knowledge'],
                            'tags' => ['React', 'Node.js', 'GraphQL', 'AWS'],
                            'postedDate' => '2024-01-15',
                            'isUrgent' => true,
                            'isFeatured' => true,
                            'image' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop',
                            'link' => '/careers/senior-full-stack-engineer'
                        ],
                        [
                            'id' => 'pos-002',
                            'title' => 'Product Manager - Supply Chain',
                            'department' => 'product',
                            'type' => 'full-time',
                            'location' => 'Remote',
                            'salary' => '$130k - $170k',
                            'description' => 'Lead product strategy for our supply chain optimization suite. Work closely with customers and engineering to deliver impactful features that solve real-world logistics challenges.',
                            'requirements' => ['3+ years of product management', 'Supply chain experience', 'Technical background', 'Excellent communication skills'],
                            'tags' => ['Product Strategy', 'Supply Chain', 'Agile'],
                            'postedDate' => '2024-01-10',
                            'isUrgent' => false,
                            'image' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=500&fit=crop',
                            'link' => '/careers/product-manager-supply-chain'
                        ],
                        [
                            'id' => 'pos-003',
                            'title' => 'Enterprise Sales Director',
                            'department' => 'sales',
                            'type' => 'full-time',
                            'location' => 'New York, NY',
                            'salary' => '$180k - $250k + Commission',
                            'description' => 'Drive enterprise sales and build relationships with Fortune 500 companies. Lead a team of account executives and develop go-to-market strategies.',
                            'requirements' => ['7+ years of enterprise sales', 'SaaS experience', 'Leadership skills', 'Supply chain knowledge'],
                            'tags' => ['Enterprise Sales', 'SaaS', 'Leadership'],
                            'postedDate' => '2024-01-05',
                            'isUrgent' => true,
                            'image' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=500&fit=crop',
                            'link' => '/careers/enterprise-sales-director'
                        ],
                        [
                            'id' => 'pos-004',
                            'title' => 'Customer Success Manager',
                            'department' => 'customer-success',
                            'type' => 'full-time',
                            'location' => 'Remote',
                            'salary' => '$80k - $110k',
                            'description' => 'Ensure customer success and adoption of our platform. Work with clients to understand their needs and help them achieve their business goals.',
                            'requirements' => ['2+ years of customer success', 'Supply chain experience', 'Problem-solving skills', 'Excellent communication'],
                            'tags' => ['Customer Success', 'Support', 'Account Management'],
                            'postedDate' => '2024-01-12',
                            'isUrgent' => false,
                            'image' => 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=500&fit=crop',
                            'link' => '/careers/customer-success-manager'
                        ],
                        [
                            'id' => 'pos-005',
                            'title' => 'Marketing Operations Specialist',
                            'department' => 'marketing',
                            'type' => 'full-time',
                            'location' => 'London, UK',
                            'salary' => '£50k - £70k',
                            'description' => 'Manage marketing automation and CRM systems. Optimize lead generation campaigns and analyze marketing performance metrics.',
                            'requirements' => ['2+ years of marketing operations', 'HubSpot expertise', 'Analytical skills', 'Data-driven mindset'],
                            'tags' => ['Marketing Automation', 'HubSpot', 'Analytics'],
                            'postedDate' => '2024-01-08',
                            'isUrgent' => false,
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
                            'link' => '/careers/marketing-operations-specialist'
                        ],
                        [
                            'id' => 'pos-006',
                            'title' => 'DevOps Engineer',
                            'department' => 'engineering',
                            'type' => 'contract',
                            'location' => 'Remote',
                            'salary' => '$80 - $120 per hour',
                            'description' => 'Design and maintain cloud infrastructure. Implement CI/CD pipelines and ensure system reliability and security.',
                            'requirements' => ['3+ years of DevOps', 'AWS expertise', 'Kubernetes experience', 'Infrastructure as Code'],
                            'tags' => ['AWS', 'Kubernetes', 'Terraform', 'CI/CD'],
                            'postedDate' => '2024-01-14',
                            'isUrgent' => false,
                            'image' => 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=500&fit=crop',
                            'link' => '/careers/devops-engineer'
                        ]
                    ],
                    'talentTitle' => 'Don\'t See the Right Fit?',
                    'talentDescription' => 'Join our talent community to receive updates about future opportunities that match your skills and interests.',
                    'talentLink' => '/talent-community',
                    'talentImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop',
                    'showNewsletter' => true,
                    'newsletter' => [
                        'title' => 'Job Alert Updates',
                        'description' => 'Subscribe to receive notifications about new job openings and career opportunities.',
                        'disclaimer' => 'No spam, unsubscribe anytime. Get 1-2 emails per month.',
                        'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 502,
                'section_key' => 'openPositions',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => 'Join Our Team',
                    'title' => [
                        'prefix' => 'Current',
                        'highlight' => 'Open Positions'
                    ],
                    'description' => 'Join our mission to transform supply chain management. Explore opportunities to grow your career with a team of innovators and problem-solvers.',
                    'heroImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=500&fit=crop',
                    'searchPlaceholder' => 'Search by job title, department, or keyword...',
                    'defaultViewMode' => 'grid',
                    'stats' => [
                        ['value' => '25+', 'label' => 'Open Positions', 'icon' => 'briefcase', 'trend' => '+5', 'trendUp' => true],
                        ['value' => '8', 'label' => 'Departments', 'icon' => 'users', 'trend' => '+2', 'trendUp' => true],
                        ['value' => '6', 'label' => 'Locations', 'icon' => 'globe', 'trend' => '+1', 'trendUp' => true],
                        ['value' => '100+', 'label' => 'Team Members', 'icon' => 'users', 'trend' => '+20', 'trendUp' => true]
                    ],
                    'departments' => [
                        ['id' => 'all', 'label' => 'All Departments', 'icon' => 'briefcase'],
                        ['id' => 'engineering', 'label' => 'Engineering', 'icon' => 'code'],
                        ['id' => 'product', 'label' => 'Product', 'icon' => 'lightbulb'],
                        ['id' => 'sales', 'label' => 'Sales', 'icon' => 'chart'],
                        ['id' => 'marketing', 'label' => 'Marketing', 'icon' => 'trending'],
                        ['id' => 'customer-success', 'label' => 'Customer Success', 'icon' => 'users'],
                        ['id' => 'operations', 'label' => 'Operations', 'icon' => 'cog']
                    ],
                    'locations' => [
                        ['id' => 'all', 'label' => 'All Locations', 'flag' => '🌐'],
                        ['id' => 'remote', 'label' => 'Remote', 'flag' => '🏠'],
                        ['id' => 'new-york', 'label' => 'New York, NY', 'flag' => '🗽'],
                        ['id' => 'san-francisco', 'label' => 'San Francisco, CA', 'flag' => '🌉'],
                        ['id' => 'london', 'label' => 'London, UK', 'flag' => '🇬🇧'],
                        ['id' => 'singapore', 'label' => 'Singapore', 'flag' => '🇸🇬']
                    ],
                    'positions' => [
                        [
                            'id' => 'pos-001',
                            'title' => 'Senior Full Stack Engineer',
                            'department' => 'engineering',
                            'type' => 'full-time',
                            'experience' => 'senior',
                            'location' => 'San Francisco, CA',
                            'salary' => '$150k - $200k',
                            'description' => 'Join our engineering team to build the next generation of supply chain management platform. You\'ll work with modern technologies including React, Node.js, and GraphQL to create scalable solutions that help businesses optimize their operations.',
                            'requirements' => ['5+ years of experience', 'React & Node.js expertise', 'Experience with GraphQL', 'Cloud architecture knowledge'],
                            'tags' => ['React', 'Node.js', 'GraphQL', 'AWS'],
                            'postedDate' => '2024-01-15',
                            'views' => 2500,
                            'isFeatured' => true,
                            'link' => '/careers/senior-full-stack-engineer',
                            'image' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop'
                        ],
                        [
                            'id' => 'pos-002',
                            'title' => 'Product Manager - Supply Chain',
                            'department' => 'product',
                            'type' => 'full-time',
                            'experience' => 'senior',
                            'location' => 'Remote',
                            'salary' => '$130k - $170k',
                            'description' => 'Lead product strategy for our supply chain optimization suite. Work closely with customers and engineering to deliver impactful features that solve real-world logistics challenges.',
                            'requirements' => ['3+ years of product management', 'Supply chain experience', 'Technical background', 'Excellent communication skills'],
                            'tags' => ['Product Strategy', 'Supply Chain', 'Agile'],
                            'postedDate' => '2024-01-10',
                            'views' => 2100,
                            'link' => '/careers/product-manager-supply-chain',
                            'image' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=500&fit=crop'
                        ],
                        [
                            'id' => 'pos-003',
                            'title' => 'Enterprise Sales Director',
                            'department' => 'sales',
                            'type' => 'full-time',
                            'experience' => 'lead',
                            'location' => 'New York, NY',
                            'salary' => '$180k - $250k + Commission',
                            'description' => 'Drive enterprise sales and build relationships with Fortune 500 companies. Lead a team of account executives and develop go-to-market strategies.',
                            'requirements' => ['7+ years of enterprise sales', 'SaaS experience', 'Leadership skills', 'Supply chain knowledge'],
                            'tags' => ['Enterprise Sales', 'SaaS', 'Leadership'],
                            'postedDate' => '2024-01-05',
                            'views' => 1800,
                            'link' => '/careers/enterprise-sales-director',
                            'image' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=500&fit=crop'
                        ],
                        [
                            'id' => 'pos-004',
                            'title' => 'Customer Success Manager',
                            'department' => 'customer-success',
                            'type' => 'full-time',
                            'experience' => 'mid',
                            'location' => 'Remote',
                            'salary' => '$80k - $110k',
                            'description' => 'Ensure customer success and adoption of our platform. Work with clients to understand their needs and help them achieve their business goals.',
                            'requirements' => ['2+ years of customer success', 'Supply chain experience', 'Problem-solving skills', 'Excellent communication'],
                            'tags' => ['Customer Success', 'Support', 'Account Management'],
                            'postedDate' => '2024-01-12',
                            'views' => 1500,
                            'link' => '/careers/customer-success-manager',
                            'image' => 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=500&fit=crop'
                        ],
                        [
                            'id' => 'pos-005',
                            'title' => 'Marketing Operations Specialist',
                            'department' => 'marketing',
                            'type' => 'full-time',
                            'experience' => 'mid',
                            'location' => 'London, UK',
                            'salary' => '£50k - £70k',
                            'description' => 'Manage marketing automation and CRM systems. Optimize lead generation campaigns and analyze marketing performance metrics.',
                            'requirements' => ['2+ years of marketing operations', 'HubSpot expertise', 'Analytical skills', 'Data-driven mindset'],
                            'tags' => ['Marketing Automation', 'HubSpot', 'Analytics'],
                            'postedDate' => '2024-01-08',
                            'views' => 1200,
                            'link' => '/careers/marketing-operations-specialist',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop'
                        ],
                        [
                            'id' => 'pos-006',
                            'title' => 'DevOps Engineer',
                            'department' => 'engineering',
                            'type' => 'contract',
                            'experience' => 'senior',
                            'location' => 'Remote',
                            'salary' => '$80 - $120 per hour',
                            'description' => 'Design and maintain cloud infrastructure. Implement CI/CD pipelines and ensure system reliability and security.',
                            'requirements' => ['3+ years of DevOps', 'AWS expertise', 'Kubernetes experience', 'Infrastructure as Code'],
                            'tags' => ['AWS', 'Kubernetes', 'Terraform', 'CI/CD'],
                            'postedDate' => '2024-01-14',
                            'views' => 1100,
                            'link' => '/careers/devops-engineer',
                            'image' => 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=500&fit=crop'
                        ]
                    ],
                    'talentLink' => '/talent-community',
                    'showNewsletter' => true,
                    'newsletter' => [
                        'title' => 'Job Alert Updates',
                        'description' => 'Subscribe to receive notifications about new job openings and career opportunities.',
                        'disclaimer' => 'No spam, unsubscribe anytime. Get 1-2 emails per month.',
                        'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 503,
                'section_key' => 'openPositions',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => 'Join Our Team',
                    'title' => [
                        'prefix' => 'Current',
                        'highlight' => 'Open Positions'
                    ],
                    'description' => 'Join our mission to transform supply chain management. Explore opportunities to grow your career with a team of innovators and problem-solvers.',
                    'heroImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=500&fit=crop',
                    'stats' => [
                        ['value' => '25+', 'label' => 'Open Positions', 'icon' => 'briefcase'],
                        ['value' => '8', 'label' => 'Departments', 'icon' => 'building'],
                        ['value' => '6', 'label' => 'Locations', 'icon' => 'globe'],
                        ['value' => '100+', 'label' => 'Team Members', 'icon' => 'users']
                    ],
                    'autoPlayCarousel' => true,
                    'featuredDepartments' => [
                        ['name' => 'Engineering', 'description' => 'Build the future of supply chain technology', 'icon' => 'code', 'openRoles' => 8, 'image' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop'],
                        ['name' => 'Product', 'description' => 'Shape the product strategy and user experience', 'icon' => 'lightbulb', 'openRoles' => 5, 'image' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=500&fit=crop'],
                        ['name' => 'Sales', 'description' => 'Drive growth and build customer relationships', 'icon' => 'chart', 'openRoles' => 6, 'image' => 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=500&fit=crop'],
                        ['name' => 'Customer Success', 'description' => 'Ensure customer satisfaction and retention', 'icon' => 'users', 'openRoles' => 4, 'image' => 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=500&fit=crop']
                    ],
                    'departments' => [
                        ['id' => 'all', 'label' => 'All Positions', 'icon' => 'briefcase'],
                        ['id' => 'engineering', 'label' => 'Engineering', 'icon' => 'code'],
                        ['id' => 'product', 'label' => 'Product', 'icon' => 'lightbulb'],
                        ['id' => 'sales', 'label' => 'Sales', 'icon' => 'chart'],
                        ['id' => 'marketing', 'label' => 'Marketing', 'icon' => 'trending'],
                        ['id' => 'customer-success', 'label' => 'Customer Success', 'icon' => 'users'],
                        ['id' => 'operations', 'label' => 'Operations', 'icon' => 'cog']
                    ],
                    'locations' => [
                        ['id' => 'all', 'label' => 'All Locations', 'flag' => '🌐'],
                        ['id' => 'remote', 'label' => 'Remote', 'flag' => '🏠'],
                        ['id' => 'new-york', 'label' => 'New York, NY', 'flag' => '🗽'],
                        ['id' => 'san-francisco', 'label' => 'San Francisco, CA', 'flag' => '🌉'],
                        ['id' => 'london', 'label' => 'London, UK', 'flag' => '🇬🇧'],
                        ['id' => 'singapore', 'label' => 'Singapore', 'flag' => '🇸🇬']
                    ],
                    'positions' => [
                        [
                            'id' => 'pos-001',
                            'title' => 'Senior Full Stack Engineer',
                            'department' => 'engineering',
                            'type' => 'full-time',
                            'experience' => 'senior',
                            'location' => 'San Francisco, CA',
                            'salary' => '$150k - $200k',
                            'description' => 'Join our engineering team to build the next generation of supply chain management platform. You\'ll work with modern technologies including React, Node.js, and GraphQL to create scalable solutions that help businesses optimize their operations.',
                            'requirements' => ['5+ years of experience', 'React & Node.js expertise', 'Experience with GraphQL', 'Cloud architecture knowledge'],
                            'tags' => ['React', 'Node.js', 'GraphQL', 'AWS'],
                            'postedDate' => '2024-01-15',
                            'views' => 2500,
                            'isFeatured' => true,
                            'link' => '/careers/senior-full-stack-engineer',
                            'image' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop'
                        ],
                        [
                            'id' => 'pos-002',
                            'title' => 'Product Manager - Supply Chain',
                            'department' => 'product',
                            'type' => 'full-time',
                            'experience' => 'senior',
                            'location' => 'Remote',
                            'salary' => '$130k - $170k',
                            'description' => 'Lead product strategy for our supply chain optimization suite. Work closely with customers and engineering to deliver impactful features that solve real-world logistics challenges.',
                            'requirements' => ['3+ years of product management', 'Supply chain experience', 'Technical background', 'Excellent communication skills'],
                            'tags' => ['Product Strategy', 'Supply Chain', 'Agile'],
                            'postedDate' => '2024-01-10',
                            'views' => 2100,
                            'isFeatured' => true,
                            'link' => '/careers/product-manager-supply-chain',
                            'image' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=500&fit=crop'
                        ],
                        [
                            'id' => 'pos-003',
                            'title' => 'Enterprise Sales Director',
                            'department' => 'sales',
                            'type' => 'full-time',
                            'experience' => 'lead',
                            'location' => 'New York, NY',
                            'salary' => '$180k - $250k + Commission',
                            'description' => 'Drive enterprise sales and build relationships with Fortune 500 companies. Lead a team of account executives and develop go-to-market strategies.',
                            'requirements' => ['7+ years of enterprise sales', 'SaaS experience', 'Leadership skills', 'Supply chain knowledge'],
                            'tags' => ['Enterprise Sales', 'SaaS', 'Leadership'],
                            'postedDate' => '2024-01-05',
                            'views' => 1800,
                            'link' => '/careers/enterprise-sales-director',
                            'image' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=500&fit=crop'
                        ],
                        [
                            'id' => 'pos-004',
                            'title' => 'Customer Success Manager',
                            'department' => 'customer-success',
                            'type' => 'full-time',
                            'experience' => 'mid',
                            'location' => 'Remote',
                            'salary' => '$80k - $110k',
                            'description' => 'Ensure customer success and adoption of our platform. Work with clients to understand their needs and help them achieve their business goals.',
                            'requirements' => ['2+ years of customer success', 'Supply chain experience', 'Problem-solving skills', 'Excellent communication'],
                            'tags' => ['Customer Success', 'Support', 'Account Management'],
                            'postedDate' => '2024-01-12',
                            'views' => 1500,
                            'link' => '/careers/customer-success-manager',
                            'image' => 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=500&fit=crop'
                        ],
                        [
                            'id' => 'pos-005',
                            'title' => 'Marketing Operations Specialist',
                            'department' => 'marketing',
                            'type' => 'full-time',
                            'experience' => 'mid',
                            'location' => 'London, UK',
                            'salary' => '£50k - £70k',
                            'description' => 'Manage marketing automation and CRM systems. Optimize lead generation campaigns and analyze marketing performance metrics.',
                            'requirements' => ['2+ years of marketing operations', 'HubSpot expertise', 'Analytical skills', 'Data-driven mindset'],
                            'tags' => ['Marketing Automation', 'HubSpot', 'Analytics'],
                            'postedDate' => '2024-01-08',
                            'views' => 1200,
                            'link' => '/careers/marketing-operations-specialist',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop'
                        ],
                        [
                            'id' => 'pos-006',
                            'title' => 'DevOps Engineer',
                            'department' => 'engineering',
                            'type' => 'contract',
                            'experience' => 'senior',
                            'location' => 'Remote',
                            'salary' => '$80 - $120 per hour',
                            'description' => 'Design and maintain cloud infrastructure. Implement CI/CD pipelines and ensure system reliability and security.',
                            'requirements' => ['3+ years of DevOps', 'AWS expertise', 'Kubernetes experience', 'Infrastructure as Code'],
                            'tags' => ['AWS', 'Kubernetes', 'Terraform', 'CI/CD'],
                            'postedDate' => '2024-01-14',
                            'views' => 1100,
                            'link' => '/careers/devops-engineer',
                            'image' => 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=500&fit=crop'
                        ]
                    ],
                    'talentLink' => '/talent-community',
                    'showNewsletter' => false
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 504,
                'section_key' => 'openPositions',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Company Culture Section 
            [
                'id' => 505,
                'section_key' => 'companyCulture',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => 'Our Culture',
                    'title' => [
                        'prefix' => 'Life at',
                        'highlight' => 'SupplyChainPro'
                    ],
                    'description' => 'We\'re building a workplace where innovation thrives, diversity is celebrated, and every team member feels valued and empowered.',
                    'heroImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=500&fit=crop',
                    'searchPlaceholder' => 'Search stories, values, or experiences...',
                    'stats' => [
                        ['value' => '98%', 'label' => 'Employee Satisfaction', 'icon' => 'star'],
                        ['value' => '25+', 'label' => 'Countries', 'icon' => 'globe'],
                        ['value' => '15+', 'label' => 'Employee Resource Groups', 'icon' => 'users'],
                        ['value' => '1000+', 'label' => 'Team Members', 'icon' => 'users']
                    ],
                    'categories' => [
                        ['id' => 'all', 'label' => 'All Stories', 'icon' => 'heart'],
                        ['id' => 'values', 'label' => 'Core Values', 'icon' => 'heart'],
                        ['id' => 'benefits', 'label' => 'Benefits & Perks', 'icon' => 'gift'],
                        ['id' => 'events', 'label' => 'Events & Activities', 'icon' => 'calendar'],
                        ['id' => 'testimonials', 'label' => 'Employee Stories', 'icon' => 'chat'],
                        ['id' => 'diversity', 'label' => 'Diversity & Inclusion', 'icon' => 'users']
                    ],
                    'coreValues' => [
                        ['title' => 'Customer First', 'description' => 'We put our customers at the center of everything we do.', 'icon' => 'heart'],
                        ['title' => 'Innovation', 'description' => 'We embrace curiosity and push boundaries to create breakthrough solutions.', 'icon' => 'lightbulb'],
                        ['title' => 'Integrity', 'description' => 'We act with honesty, transparency, and accountability.', 'icon' => 'badge'],
                        ['title' => 'Collaboration', 'description' => 'We achieve more together through teamwork and mutual respect.', 'icon' => 'handshake'],
                        ['title' => 'Excellence', 'description' => 'We strive for excellence in everything we do.', 'icon' => 'trophy'],
                        ['title' => 'Inclusion', 'description' => 'We celebrate diversity and create a culture where everyone belongs.', 'icon' => 'users']
                    ],
                    'benefits' => [
                        ['title' => 'Competitive Compensation', 'description' => 'Market-leading salaries and equity packages', 'icon' => 'credit', 'image' => 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop'],
                        ['title' => 'Health & Wellness', 'description' => 'Comprehensive medical, dental, and vision coverage', 'icon' => 'heart', 'image' => 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop'],
                        ['title' => 'Flexible Work', 'description' => 'Remote-first culture with flexible hours', 'icon' => 'wifi', 'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'],
                        ['title' => 'Learning & Development', 'description' => '$5,000 annual learning stipend', 'icon' => 'academic', 'image' => 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop'],
                        ['title' => 'Paid Time Off', 'description' => 'Unlimited PTO and 12 company holidays', 'icon' => 'calendar', 'image' => 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&h=400&fit=crop'],
                        ['title' => 'Parental Leave', 'description' => '16 weeks fully paid parental leave', 'icon' => 'gift', 'image' => 'https://images.unsplash.com/photo-1516589091380-5d8e87df6999?w=600&h=400&fit=crop']
                    ],
                    'featuredStory' => [
                        'id' => 'story-001',
                        'title' => 'From Intern to Engineering Lead: My Journey at SupplyChainPro',
                        'excerpt' => 'When I joined as an intern three years ago, I never imagined I\'d be leading a team of 10 engineers today. The growth opportunities here are truly unparalleled.',
                        'content' => 'When I joined as an intern three years ago, I never imagined I\'d be leading a team of 10 engineers today. The growth opportunities here are truly unparalleled. From day one, I was given meaningful projects and mentorship that helped me develop both technical and leadership skills. The culture of continuous learning and support has been instrumental in my career growth.',
                        'category' => 'testimonials',
                        'isFeatured' => true,
                        'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop',
                        'author' => [
                            'name' => 'Sarah Johnson',
                            'role' => 'Engineering Lead',
                            'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
                        ],
                        'quote' => [
                            'text' => 'The culture of continuous learning and support has been instrumental in my career growth.',
                            'author' => 'Sarah Johnson'
                        ],
                        'date' => 'January 15, 2024'
                    ],
                    'stories' => [
                        [
                            'id' => 'story-001',
                            'title' => 'From Intern to Engineering Lead: My Journey at SupplyChainPro',
                            'excerpt' => 'When I joined as an intern three years ago, I never imagined I\'d be leading a team of 10 engineers today. The growth opportunities here are truly unparalleled.',
                            'content' => 'When I joined as an intern three years ago, I never imagined I\'d be leading a team of 10 engineers today. The growth opportunities here are truly unparalleled. From day one, I was given meaningful projects and mentorship that helped me develop both technical and leadership skills.',
                            'category' => 'testimonials',
                            'isFeatured' => true,
                            'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop',
                            'author' => [
                                'name' => 'Sarah Johnson',
                                'role' => 'Engineering Lead',
                                'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
                            ],
                            'tags' => ['Career Growth', 'Engineering', 'Leadership'],
                            'date' => 'January 15, 2024'
                        ],
                        [
                            'id' => 'story-002',
                            'title' => 'Celebrating Diversity: Our ERG Impact Report',
                            'excerpt' => 'Our Employee Resource Groups have grown to include 500+ members across 6 different communities, driving meaningful change and fostering belonging.',
                            'category' => 'diversity',
                            'image' => 'https://images.unsplash.com/photo-1528605105345-5344ea20e269?w=800&h=500&fit=crop',
                            'author' => [
                                'name' => 'Marcus Chen',
                                'role' => 'DEI Program Manager',
                                'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
                            ],
                            'tags' => ['Diversity', 'Inclusion', 'ERGs'],
                            'date' => 'January 10, 2024'
                        ],
                        [
                            'id' => 'story-003',
                            'title' => 'Innovation Week 2024: Hackathon Highlights',
                            'excerpt' => 'Teams from across the globe came together to build 15+ prototypes addressing real customer challenges. See what our creative minds accomplished.',
                            'category' => 'events',
                            'image' => 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=800&h=500&fit=crop',
                            'author' => [
                                'name' => 'Emily Rodriguez',
                                'role' => 'Product Manager',
                                'avatar' => 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop'
                            ],
                            'tags' => ['Innovation', 'Hackathon', 'Events'],
                            'date' => 'December 5, 2023'
                        ],
                        [
                            'id' => 'story-004',
                            'title' => 'New Parental Leave Policy: Supporting Families',
                            'excerpt' => 'We\'re proud to announce our enhanced parental leave policy, offering 16 weeks fully paid to all new parents. Here\'s how we\'re supporting growing families.',
                            'category' => 'benefits',
                            'image' => 'https://images.unsplash.com/photo-1516589091380-5d8e87df6999?w=800&h=500&fit=crop',
                            'author' => [
                                'name' => 'Jessica Williams',
                                'role' => 'HR Director',
                                'avatar' => 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop'
                            ],
                            'tags' => ['Benefits', 'Parental Leave', 'Family'],
                            'date' => 'November 20, 2023'
                        ]
                    ],
                    'ctaTitle' => 'Join Our Team',
                    'ctaDescription' => 'Ready to be part of something special? Explore open positions and find your place at SupplyChainPro.',
                    'ctaLink' => '/careers',
                    'ctaImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop',
                    'showNewsletter' => true,
                    'newsletter' => [
                        'title' => 'Life at SupplyChainPro',
                        'description' => 'Subscribe to get updates about company culture, events, and career opportunities.',
                        'disclaimer' => 'No spam, unsubscribe anytime. Get 1-2 emails per month.',
                        'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 506,
                'section_key' => 'companyCulture',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => 'Our Culture',
                    'title' => [
                        'prefix' => 'Life at',
                        'highlight' => 'SupplyChainPro'
                    ],
                    'description' => 'We\'re building a workplace where innovation thrives, diversity is celebrated, and every team member feels valued and empowered.',
                    'heroImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=500&fit=crop',
                    'searchPlaceholder' => 'Search stories, values, or experiences...',
                    'defaultViewMode' => 'grid',
                    'stats' => [
                        ['value' => '98%', 'label' => 'Employee Satisfaction', 'icon' => 'star', 'trend' => '+2%', 'trendUp' => true],
                        ['value' => '25+', 'label' => 'Countries', 'icon' => 'globe', 'trend' => '+5', 'trendUp' => true],
                        ['value' => '15+', 'label' => 'Employee Resource Groups', 'icon' => 'users', 'trend' => '+3', 'trendUp' => true],
                        ['value' => '1000+', 'label' => 'Team Members', 'icon' => 'users', 'trend' => '+200', 'trendUp' => true]
                    ],
                    'categories' => [
                        ['id' => 'all', 'label' => 'All Stories', 'icon' => 'heart'],
                        ['id' => 'values', 'label' => 'Core Values', 'icon' => 'heart'],
                        ['id' => 'benefits', 'label' => 'Benefits & Perks', 'icon' => 'gift'],
                        ['id' => 'events', 'label' => 'Events & Activities', 'icon' => 'calendar'],
                        ['id' => 'testimonials', 'label' => 'Employee Stories', 'icon' => 'chat'],
                        ['id' => 'diversity', 'label' => 'Diversity & Inclusion', 'icon' => 'users']
                    ],
                    'stories' => [
                        [
                            'id' => 'story-001',
                            'title' => 'From Intern to Engineering Lead: My Journey at SupplyChainPro',
                            'excerpt' => 'When I joined as an intern three years ago, I never imagined I\'d be leading a team of 10 engineers today. The growth opportunities here are truly unparalleled.',
                            'content' => 'When I joined as an intern three years ago, I never imagined I\'d be leading a team of 10 engineers today. The growth opportunities here are truly unparalleled. From day one, I was given meaningful projects and mentorship that helped me develop both technical and leadership skills.',
                            'category' => 'testimonials',
                            'moment' => 'milestone',
                            'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop',
                            'author' => [
                                'name' => 'Sarah Johnson',
                                'role' => 'Engineering Lead',
                                'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
                            ],
                            'tags' => ['Career Growth', 'Engineering', 'Leadership'],
                            'date' => 'January 15, 2024',
                            'likes' => 234,
                            'views' => 3450,
                            'trendingScore' => 95
                        ],
                        [
                            'id' => 'story-002',
                            'title' => 'Celebrating Diversity: Our ERG Impact Report',
                            'excerpt' => 'Our Employee Resource Groups have grown to include 500+ members across 6 different communities, driving meaningful change and fostering belonging.',
                            'category' => 'diversity',
                            'moment' => 'celebration',
                            'image' => 'https://images.unsplash.com/photo-1528605105345-5344ea20e269?w=800&h=500&fit=crop',
                            'author' => [
                                'name' => 'Marcus Chen',
                                'role' => 'DEI Program Manager',
                                'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
                            ],
                            'tags' => ['Diversity', 'Inclusion', 'ERGs'],
                            'date' => 'January 10, 2024',
                            'likes' => 189,
                            'views' => 2870,
                            'trendingScore' => 88
                        ],
                        [
                            'id' => 'story-003',
                            'title' => 'Innovation Week 2024: Hackathon Highlights',
                            'excerpt' => 'Teams from across the globe came together to build 15+ prototypes addressing real customer challenges. See what our creative minds accomplished.',
                            'category' => 'events',
                            'moment' => 'team-bonding',
                            'image' => 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=800&h=500&fit=crop',
                            'author' => [
                                'name' => 'Emily Rodriguez',
                                'role' => 'Product Manager',
                                'avatar' => 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop'
                            ],
                            'tags' => ['Innovation', 'Hackathon', 'Events'],
                            'date' => 'December 5, 2023',
                            'likes' => 145,
                            'views' => 2100,
                            'trendingScore' => 82
                        ],
                        [
                            'id' => 'story-004',
                            'title' => 'New Parental Leave Policy: Supporting Families',
                            'excerpt' => 'We\'re proud to announce our enhanced parental leave policy, offering 16 weeks fully paid to all new parents. Here\'s how we\'re supporting growing families.',
                            'category' => 'benefits',
                            'moment' => 'milestone',
                            'image' => 'https://images.unsplash.com/photo-1516589091380-5d8e87df6999?w=800&h=500&fit=crop',
                            'author' => [
                                'name' => 'Jessica Williams',
                                'role' => 'HR Director',
                                'avatar' => 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop'
                            ],
                            'tags' => ['Benefits', 'Parental Leave', 'Family'],
                            'date' => 'November 20, 2023',
                            'likes' => 167,
                            'views' => 2530,
                            'trendingScore' => 85
                        ],
                        [
                            'id' => 'story-005',
                            'title' => 'Wellness Wednesday: Mental Health Initiatives',
                            'excerpt' => 'Our new mental health program includes free therapy sessions, meditation apps, and monthly wellness workshops. Here\'s how we\'re prioritizing employee wellbeing.',
                            'category' => 'benefits',
                            'moment' => 'wellness',
                            'image' => 'https://images.unsplash.com/photo-1516876437184-593fda40c7ce?w=800&h=500&fit=crop',
                            'author' => [
                                'name' => 'David Kim',
                                'role' => 'Wellness Coach',
                                'avatar' => 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop'
                            ],
                            'tags' => ['Wellness', 'Mental Health', 'Benefits'],
                            'date' => 'October 10, 2023',
                            'likes' => 198,
                            'views' => 3100,
                            'trendingScore' => 91
                        ]
                    ],
                    'ctaLink' => '/careers',
                    'showNewsletter' => true,
                    'newsletter' => [
                        'title' => 'Life at SupplyChainPro',
                        'description' => 'Subscribe to get updates about company culture, events, and career opportunities.',
                        'disclaimer' => 'No spam, unsubscribe anytime. Get 1-2 emails per month.',
                        'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 507,
                'section_key' => 'companyCulture',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => 'Our Culture',
                    'title' => [
                        'prefix' => 'Life at',
                        'highlight' => 'SupplyChainPro'
                    ],
                    'description' => 'We\'re building a workplace where innovation thrives, diversity is celebrated, and every team member feels valued and empowered.',
                    'heroImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=500&fit=crop',
                    'stats' => [
                        ['value' => '98%', 'label' => 'Employee Satisfaction', 'icon' => 'star'],
                        ['value' => '25+', 'label' => 'Countries', 'icon' => 'globe'],
                        ['value' => '15+', 'label' => 'Employee Resource Groups', 'icon' => 'users'],
                        ['value' => '1000+', 'label' => 'Team Members', 'icon' => 'users']
                    ],
                    'autoPlayCarousel' => true,
                    'coreValues' => [
                        ['title' => 'Customer First', 'description' => 'We put our customers at the center of everything we do. Their success is our success.', 'icon' => 'heart', 'color' => 'from-rose-500 to-pink-500', 'image' => 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop'],
                        ['title' => 'Innovation', 'description' => 'We embrace curiosity and push boundaries to create breakthrough solutions that transform supply chains.', 'icon' => 'lightbulb', 'color' => 'from-amber-500 to-orange-500', 'image' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop'],
                        ['title' => 'Integrity', 'description' => 'We act with honesty, transparency, and accountability in everything we do.', 'icon' => 'badge', 'color' => 'from-emerald-500 to-green-500', 'image' => 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop'],
                        ['title' => 'Collaboration', 'description' => 'We achieve more together through teamwork and mutual respect across all boundaries.', 'icon' => 'handshake', 'color' => 'from-blue-500 to-cyan-500', 'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'],
                        ['title' => 'Excellence', 'description' => 'We strive for excellence in everything we do, delivering quality and value to our customers.', 'icon' => 'trophy', 'color' => 'from-purple-500 to-indigo-500', 'image' => 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&h=400&fit=crop'],
                        ['title' => 'Inclusion', 'description' => 'We celebrate diversity and create a culture where everyone belongs and can thrive.', 'icon' => 'users', 'color' => 'from-pink-500 to-rose-500', 'image' => 'https://images.unsplash.com/photo-1528605105345-5344ea20e269?w=600&h=400&fit=crop']
                    ],
                    'categories' => [
                        ['id' => 'all', 'label' => 'All Stories', 'icon' => 'heart'],
                        ['id' => 'values', 'label' => 'Core Values', 'icon' => 'heart'],
                        ['id' => 'benefits', 'label' => 'Benefits & Perks', 'icon' => 'gift'],
                        ['id' => 'events', 'label' => 'Events & Activities', 'icon' => 'calendar'],
                        ['id' => 'testimonials', 'label' => 'Employee Stories', 'icon' => 'chat'],
                        ['id' => 'diversity', 'label' => 'Diversity & Inclusion', 'icon' => 'users']
                    ],
                    'stories' => [
                        [
                            'id' => 'story-001',
                            'title' => 'From Intern to Engineering Lead: My Journey at SupplyChainPro',
                            'excerpt' => 'When I joined as an intern three years ago, I never imagined I\'d be leading a team of 10 engineers today. The growth opportunities here are truly unparalleled.',
                            'content' => 'When I joined as an intern three years ago, I never imagined I\'d be leading a team of 10 engineers today. The growth opportunities here are truly unparalleled. From day one, I was given meaningful projects and mentorship that helped me develop both technical and leadership skills.',
                            'category' => 'testimonials',
                            'values' => ['customer-first', 'excellence'],
                            'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop',
                            'author' => [
                                'name' => 'Sarah Johnson',
                                'role' => 'Engineering Lead',
                                'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
                            ],
                            'tags' => ['Career Growth', 'Engineering', 'Leadership'],
                            'date' => 'January 15, 2024',
                            'views' => 3450,
                            'isFeatured' => true
                        ],
                        [
                            'id' => 'story-002',
                            'title' => 'Celebrating Diversity: Our ERG Impact Report',
                            'excerpt' => 'Our Employee Resource Groups have grown to include 500+ members across 6 different communities, driving meaningful change and fostering belonging.',
                            'content' => 'Our Employee Resource Groups have grown to include 500+ members across 6 different communities, driving meaningful change and fostering belonging. From cultural celebrations to mentorship programs, our ERGs are making a real impact.',
                            'category' => 'diversity',
                            'values' => ['inclusion', 'collaboration'],
                            'image' => 'https://images.unsplash.com/photo-1528605105345-5344ea20e269?w=800&h=500&fit=crop',
                            'author' => [
                                'name' => 'Marcus Chen',
                                'role' => 'DEI Program Manager',
                                'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
                            ],
                            'tags' => ['Diversity', 'Inclusion', 'ERGs'],
                            'date' => 'January 10, 2024',
                            'views' => 2870,
                            'quote' => [
                                'text' => 'Our ERGs have become the heartbeat of our inclusive culture.',
                                'author' => 'Marcus Chen'
                            ]
                        ],
                        [
                            'id' => 'story-003',
                            'title' => 'Innovation Week 2024: Hackathon Highlights',
                            'excerpt' => 'Teams from across the globe came together to build 15+ prototypes addressing real customer challenges. See what our creative minds accomplished.',
                            'content' => 'Teams from across the globe came together to build 15+ prototypes addressing real customer challenges. From AI-powered demand forecasting to blockchain-based traceability, our teams showcased incredible creativity.',
                            'category' => 'events',
                            'values' => ['innovation', 'collaboration'],
                            'image' => 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=800&h=500&fit=crop',
                            'author' => [
                                'name' => 'Emily Rodriguez',
                                'role' => 'Product Manager',
                                'avatar' => 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop'
                            ],
                            'tags' => ['Innovation', 'Hackathon', 'Events'],
                            'date' => 'December 5, 2023',
                            'views' => 2100
                        ],
                        [
                            'id' => 'story-004',
                            'title' => 'New Parental Leave Policy: Supporting Families',
                            'excerpt' => 'We\'re proud to announce our enhanced parental leave policy, offering 16 weeks fully paid to all new parents.',
                            'content' => 'We\'re proud to announce our enhanced parental leave policy, offering 16 weeks fully paid to all new parents. This policy reflects our commitment to supporting our team members through all of life\'s milestones.',
                            'category' => 'benefits',
                            'values' => ['integrity', 'inclusion'],
                            'image' => 'https://images.unsplash.com/photo-1516589091380-5d8e87df6999?w=800&h=500&fit=crop',
                            'author' => [
                                'name' => 'Jessica Williams',
                                'role' => 'HR Director',
                                'avatar' => 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop'
                            ],
                            'tags' => ['Benefits', 'Parental Leave', 'Family'],
                            'date' => 'November 20, 2023',
                            'views' => 2530
                        ]
                    ],
                    'ctaLink' => '/careers',
                    'showNewsletter' => false
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 508,
                'section_key' => 'companyCulture',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Benefits & Perks Section 
            [
                'id' => 509,
                'section_key' => 'benefitsPerks',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => 'Benefits & Perks',
                    'title' => [
                        'prefix' => 'Benefits That',
                        'highlight' => 'Empower You'
                    ],
                    'description' => 'We believe in taking care of our people. From comprehensive health coverage to learning opportunities, we\'ve designed benefits that support your well-being and growth.',
                    'heroImage' => 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=500&fit=crop',
                    'searchPlaceholder' => 'Search benefits by name, category, or type...',
                    'stats' => [
                        ['value' => '100%', 'label' => 'Employee Coverage', 'icon' => 'users'],
                        ['value' => '$5,000', 'label' => 'Learning Stipend', 'icon' => 'academic'],
                        ['value' => '16', 'label' => 'Weeks Parental Leave', 'icon' => 'heart'],
                        ['value' => '25+', 'label' => 'Countries', 'icon' => 'globe']
                    ],
                    'categories' => [
                        ['id' => 'all', 'label' => 'All Benefits', 'icon' => 'gift'],
                        ['id' => 'health', 'label' => 'Health & Wellness', 'icon' => 'heart'],
                        ['id' => 'financial', 'label' => 'Financial Benefits', 'icon' => 'currency-dollar'],
                        ['id' => 'work-life', 'label' => 'Work-Life Balance', 'icon' => 'clock'],
                        ['id' => 'development', 'label' => 'Learning & Development', 'icon' => 'academic'],
                        ['id' => 'family', 'label' => 'Family Support', 'icon' => 'users'],
                        ['id' => 'perks', 'label' => 'Daily Perks', 'icon' => 'gift']
                    ],
                    'featuredBenefit' => [
                        'id' => 'benefit-001',
                        'title' => 'Comprehensive Health Coverage',
                        'description' => 'We offer premium medical, dental, and vision insurance plans with 100% employer-paid premiums for employees and 80% for dependents. Plus, we cover mental health services and wellness programs.',
                        'category' => 'health',
                        'type' => 'core',
                        'details' => ['Medical, Dental & Vision', '100% employer-paid premiums', 'Mental health coverage', 'Wellness reimbursement', 'Global coverage'],
                        'tags' => ['Health', 'Insurance', 'Wellness'],
                        'isFeatured' => true,
                        'image' => 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=500&fit=crop',
                        'link' => '/benefits/health-coverage'
                    ],
                    'benefits' => [
                        [
                            'id' => 'benefit-001',
                            'title' => 'Comprehensive Health Coverage',
                            'description' => 'Premium medical, dental, and vision insurance with 100% employer-paid premiums for employees.',
                            'category' => 'health',
                            'type' => 'core',
                            'details' => ['Medical, Dental & Vision', '100% employer-paid premiums', 'Mental health coverage', 'Wellness reimbursement'],
                            'tags' => ['Health', 'Insurance', 'Wellness'],
                            'isFeatured' => true,
                            'image' => 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=500&fit=crop',
                            'link' => '/benefits/health-coverage'
                        ],
                        [
                            'id' => 'benefit-002',
                            'title' => '401(k) Matching',
                            'description' => 'We help you save for retirement with a generous 401(k) matching program. 100% match on the first 6% of your contributions.',
                            'category' => 'financial',
                            'type' => 'core',
                            'details' => ['100% match on first 6%', 'Immediate vesting', 'Investment options', 'Financial planning resources'],
                            'tags' => ['Retirement', 'Savings', 'Financial'],
                            'image' => 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=500&fit=crop',
                            'link' => '/benefits/401k-matching'
                        ],
                        [
                            'id' => 'benefit-003',
                            'title' => 'Flexible Work Arrangements',
                            'description' => 'Work from anywhere with our remote-first culture. Enjoy flexible hours and the freedom to work when you\'re most productive.',
                            'category' => 'work-life',
                            'type' => 'core',
                            'details' => ['Remote-first culture', 'Flexible hours', 'Home office stipend', 'Coworking space access'],
                            'tags' => ['Remote', 'Flexibility', 'Work-Life Balance'],
                            'isNew' => true,
                            'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop',
                            'link' => '/benefits/flexible-work'
                        ],
                        [
                            'id' => 'benefit-004',
                            'title' => 'Professional Development',
                            'description' => '$5,000 annual learning stipend for courses, conferences, and certifications. Plus internal mentorship programs.',
                            'category' => 'development',
                            'type' => 'core',
                            'details' => ['$5,000 annual stipend', 'Conference attendance', 'Certification courses', 'Mentorship program'],
                            'tags' => ['Learning', 'Growth', 'Education'],
                            'image' => 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=500&fit=crop',
                            'link' => '/benefits/development'
                        ],
                        [
                            'id' => 'benefit-005',
                            'title' => 'Parental Leave',
                            'description' => '16 weeks fully paid parental leave for all new parents, plus flexible return-to-work options.',
                            'category' => 'family',
                            'type' => 'core',
                            'details' => ['16 weeks fully paid', 'Equal for all parents', 'Flexible return options', 'Childcare assistance'],
                            'tags' => ['Family', 'Parental Leave', 'Childcare'],
                            'image' => 'https://images.unsplash.com/photo-1516589091380-5d8e87df6999?w=800&h=500&fit=crop',
                            'link' => '/benefits/parental-leave'
                        ],
                        [
                            'id' => 'benefit-006',
                            'title' => 'Daily Perks',
                            'description' => 'Free lunch, snacks, and coffee at our offices. Plus monthly wellness stipends and team-building events.',
                            'category' => 'perks',
                            'type' => 'premium',
                            'details' => ['Free lunch daily', 'Snacks and coffee', 'Wellness stipend', 'Team events'],
                            'tags' => ['Perks', 'Office', 'Wellness'],
                            'image' => 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=500&fit=crop',
                            'link' => '/benefits/daily-perks'
                        ]
                    ],
                    'summaryTitle' => 'Total Rewards Package',
                    'summaryDescription' => 'Our comprehensive benefits package is designed to support you at every stage of your life and career. We\'re committed to your well-being, growth, and success.',
                    'summaryLink' => '/benefits-guide',
                    'summaryImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop',
                    'showNewsletter' => true,
                    'newsletter' => [
                        'title' => 'Benefits Updates',
                        'description' => 'Subscribe to receive updates about new benefits, wellness programs, and employee perks.',
                        'disclaimer' => 'No spam, unsubscribe anytime. Get 1-2 emails per month.',
                        'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 510,
                'section_key' => 'benefitsPerks',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => 'Benefits & Perks',
                    'title' => [
                        'prefix' => 'Benefits That',
                        'highlight' => 'Empower You'
                    ],
                    'description' => 'We believe in taking care of our people. From comprehensive health coverage to learning opportunities, we\'ve designed benefits that support your well-being and growth.',
                    'heroImage' => 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=500&fit=crop',
                    'searchPlaceholder' => 'Search benefits by name, category, or type...',
                    'defaultViewMode' => 'grid',
                    'stats' => [
                        ['value' => '100%', 'label' => 'Employee Coverage', 'icon' => 'users', 'trend' => '+5%', 'trendUp' => true],
                        ['value' => '$5,000', 'label' => 'Learning Stipend', 'icon' => 'academic', 'trend' => '+$1,000', 'trendUp' => true],
                        ['value' => '16', 'label' => 'Weeks Parental Leave', 'icon' => 'heart', 'trend' => '+4', 'trendUp' => true],
                        ['value' => '25+', 'label' => 'Countries', 'icon' => 'globe', 'trend' => '+5', 'trendUp' => true]
                    ],
                    'categories' => [
                        ['id' => 'all', 'label' => 'All Benefits', 'icon' => 'gift'],
                        ['id' => 'health', 'label' => 'Health & Wellness', 'icon' => 'heart'],
                        ['id' => 'financial', 'label' => 'Financial Benefits', 'icon' => 'currency-dollar'],
                        ['id' => 'work-life', 'label' => 'Work-Life Balance', 'icon' => 'clock'],
                        ['id' => 'development', 'label' => 'Learning & Development', 'icon' => 'academic'],
                        ['id' => 'family', 'label' => 'Family Support', 'icon' => 'users'],
                        ['id' => 'perks', 'label' => 'Daily Perks', 'icon' => 'gift']
                    ],
                    'regions' => [
                        ['id' => 'all', 'label' => 'All Regions', 'flag' => '🌐'],
                        ['id' => 'global', 'label' => 'Global', 'flag' => '🌐'],
                        ['id' => 'north-america', 'label' => 'North America', 'flag' => '🇺🇸'],
                        ['id' => 'europe', 'label' => 'Europe', 'flag' => '🇪🇺'],
                        ['id' => 'asia-pacific', 'label' => 'Asia Pacific', 'flag' => '🌏']
                    ],
                    'benefits' => [
                        [
                            'id' => 'benefit-001',
                            'title' => 'Comprehensive Health Coverage',
                            'description' => 'Premium medical, dental, and vision insurance with 100% employer-paid premiums for employees.',
                            'category' => 'health',
                            'tier' => 'core',
                            'region' => 'global',
                            'details' => ['Medical, Dental & Vision', '100% employer-paid premiums', 'Mental health coverage', 'Wellness reimbursement'],
                            'tags' => ['Health', 'Insurance', 'Wellness'],
                            'popularity' => 95,
                            'isNew' => false,
                            'image' => 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=500&fit=crop',
                            'link' => '/benefits/health-coverage',
                            'updatedDate' => 'Mar 2024'
                        ],
                        [
                            'id' => 'benefit-002',
                            'title' => '401(k) Matching',
                            'description' => 'We help you save for retirement with a generous 401(k) matching program.',
                            'category' => 'financial',
                            'tier' => 'core',
                            'region' => 'north-america',
                            'details' => ['100% match on first 6%', 'Immediate vesting', 'Investment options'],
                            'tags' => ['Retirement', 'Savings', 'Financial'],
                            'popularity' => 92,
                            'isNew' => false,
                            'image' => 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=500&fit=crop',
                            'link' => '/benefits/401k-matching',
                            'updatedDate' => 'Mar 2024'
                        ],
                        [
                            'id' => 'benefit-003',
                            'title' => 'Flexible Work Arrangements',
                            'description' => 'Work from anywhere with our remote-first culture. Enjoy flexible hours.',
                            'category' => 'work-life',
                            'tier' => 'core',
                            'region' => 'global',
                            'details' => ['Remote-first culture', 'Flexible hours', 'Home office stipend'],
                            'tags' => ['Remote', 'Flexibility', 'Work-Life Balance'],
                            'popularity' => 98,
                            'isNew' => true,
                            'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop',
                            'link' => '/benefits/flexible-work',
                            'updatedDate' => 'Feb 2024'
                        ],
                        [
                            'id' => 'benefit-004',
                            'title' => 'Professional Development',
                            'description' => '$5,000 annual learning stipend for courses, conferences, and certifications.',
                            'category' => 'development',
                            'tier' => 'premium',
                            'region' => 'global',
                            'details' => ['$5,000 annual stipend', 'Conference attendance', 'Certification courses'],
                            'tags' => ['Learning', 'Growth', 'Education'],
                            'popularity' => 88,
                            'isNew' => false,
                            'image' => 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=500&fit=crop',
                            'link' => '/benefits/development',
                            'updatedDate' => 'Mar 2024'
                        ],
                        [
                            'id' => 'benefit-005',
                            'title' => 'Parental Leave',
                            'description' => '16 weeks fully paid parental leave for all new parents.',
                            'category' => 'family',
                            'tier' => 'core',
                            'region' => 'global',
                            'details' => ['16 weeks fully paid', 'Equal for all parents', 'Flexible return options'],
                            'tags' => ['Family', 'Parental Leave', 'Childcare'],
                            'popularity' => 90,
                            'isNew' => false,
                            'image' => 'https://images.unsplash.com/photo-1516589091380-5d8e87df6999?w=800&h=500&fit=crop',
                            'link' => '/benefits/parental-leave',
                            'updatedDate' => 'Jan 2024'
                        ],
                        [
                            'id' => 'benefit-006',
                            'title' => 'Daily Perks',
                            'description' => 'Free lunch, snacks, and coffee at our offices. Plus wellness stipends.',
                            'category' => 'perks',
                            'tier' => 'premium',
                            'region' => 'north-america',
                            'details' => ['Free lunch daily', 'Snacks and coffee', 'Wellness stipend'],
                            'tags' => ['Perks', 'Office', 'Wellness'],
                            'popularity' => 85,
                            'isNew' => false,
                            'image' => 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=500&fit=crop',
                            'link' => '/benefits/daily-perks',
                            'updatedDate' => 'Mar 2024'
                        ]
                    ],
                    'summaryLink' => '/benefits-guide',
                    'showNewsletter' => true,
                    'newsletter' => [
                        'title' => 'Benefits Updates',
                        'description' => 'Subscribe to receive updates about new benefits, wellness programs, and employee perks.',
                        'disclaimer' => 'No spam, unsubscribe anytime. Get 1-2 emails per month.',
                        'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 511,
                'section_key' => 'benefitsPerks',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => 'Benefits & Perks',
                    'title' => [
                        'prefix' => 'Benefits That',
                        'highlight' => 'Empower You'
                    ],
                    'description' => 'We believe in taking care of our team. From comprehensive health coverage to professional development, we offer benefits that support your whole life.',
                    'heroImage' => 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=500&fit=crop',
                    'stats' => [
                        ['value' => '100%', 'label' => 'Remote-First', 'icon' => 'wifi'],
                        ['value' => '4.9', 'label' => 'Employee Rating', 'icon' => 'star'],
                        ['value' => '$2k', 'label' => 'Learning Stipend', 'icon' => 'academic'],
                        ['value' => '20+', 'label' => 'Benefits', 'icon' => 'gift']
                    ],
                    'autoPlayCarousel' => true,
                    'featuredBenefits' => [
                        [
                            'id' => 'featured-001',
                            'title' => 'Unlimited PTO',
                            'description' => 'Take the time you need to recharge with our flexible paid time off policy. No more worrying about accrual limits.',
                            'category' => 'work-life',
                            'isFeatured' => true,
                            'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop',
                            'icon' => 'home'
                        ],
                        [
                            'id' => 'featured-002',
                            'title' => 'Health & Wellness Stipend',
                            'description' => 'Annual $1,200 stipend for gym memberships, yoga classes, meditation apps, and mental health services.',
                            'category' => 'health',
                            'isFeatured' => true,
                            'image' => 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=500&fit=crop',
                            'icon' => 'heart'
                        ],
                        [
                            'id' => 'featured-003',
                            'title' => 'Learning & Development',
                            'description' => '$2,000 annual budget for courses, conferences, books, and certifications to fuel your growth.',
                            'category' => 'professional',
                            'isFeatured' => true,
                            'image' => 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=500&fit=crop',
                            'icon' => 'academic'
                        ]
                    ],
                    'categories' => [
                        ['id' => 'all', 'label' => 'All Benefits', 'icon' => 'gift'],
                        ['id' => 'health', 'label' => 'Health & Wellness', 'icon' => 'heart'],
                        ['id' => 'financial', 'label' => 'Financial', 'icon' => 'credit'],
                        ['id' => 'work-life', 'label' => 'Work-Life', 'icon' => 'home'],
                        ['id' => 'professional', 'label' => 'Professional', 'icon' => 'academic'],
                        ['id' => 'lifestyle', 'label' => 'Lifestyle', 'icon' => 'coffee'],
                        ['id' => 'family', 'label' => 'Family', 'icon' => 'users']
                    ],
                    'benefits' => [
                        [
                            'id' => 'benefit-001',
                            'title' => 'Comprehensive Health Coverage',
                            'description' => 'Premium medical, dental, and vision insurance with 100% employer-paid premiums for employees.',
                            'category' => 'health',
                            'icon' => 'heart',
                            'details' => ['Medical, Dental & Vision', '100% employer-paid premiums', 'Mental health coverage', 'Wellness reimbursement'],
                            'eligibility' => 'All Employees',
                            'isFeatured' => true,
                            'image' => 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'benefit-002',
                            'title' => '401(k) Matching',
                            'description' => 'We help you save for retirement with a generous 401(k) matching program. 100% match on the first 6%.',
                            'category' => 'financial',
                            'icon' => 'credit',
                            'details' => ['100% match on first 6%', 'Immediate vesting', 'Investment options', 'Financial planning'],
                            'eligibility' => 'All Employees',
                            'image' => 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'benefit-003',
                            'title' => 'Flexible Work Arrangements',
                            'description' => 'Work from anywhere with our remote-first culture. Enjoy flexible hours and the freedom to work when you\'re most productive.',
                            'category' => 'work-life',
                            'icon' => 'home',
                            'details' => ['Remote-first culture', 'Flexible hours', 'Home office stipend', 'Coworking access'],
                            'eligibility' => 'All Employees',
                            'isNew' => true,
                            'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'benefit-004',
                            'title' => 'Learning Stipend',
                            'description' => '$2,000 annual learning stipend for courses, conferences, and certifications.',
                            'category' => 'professional',
                            'icon' => 'academic',
                            'details' => ['$2,000 annual stipend', 'Conference attendance', 'Certification courses', 'Mentorship program'],
                            'eligibility' => 'All Employees',
                            'image' => 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'benefit-005',
                            'title' => 'Parental Leave',
                            'description' => '16 weeks fully paid parental leave for all new parents, plus flexible return-to-work options.',
                            'category' => 'family',
                            'icon' => 'users',
                            'details' => ['16 weeks fully paid', 'Equal for all parents', 'Flexible return options', 'Childcare assistance'],
                            'eligibility' => 'All Employees',
                            'image' => 'https://images.unsplash.com/photo-1516589091380-5d8e87df6999?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'benefit-006',
                            'title' => 'Daily Perks',
                            'description' => 'Free lunch, snacks, and coffee at our offices. Plus monthly wellness stipends and team-building events.',
                            'category' => 'lifestyle',
                            'icon' => 'coffee',
                            'details' => ['Free lunch daily', 'Snacks and coffee', 'Wellness stipend', 'Team events'],
                            'eligibility' => 'Office-Based',
                            'image' => 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=400&fit=crop'
                        ]
                    ],
                    'employeeStories' => [
                        [
                            'name' => 'Sarah Johnson',
                            'role' => 'Senior Software Engineer',
                            'location' => 'San Francisco, CA',
                            'quote' => 'The flexible work policy has completely transformed my work-life balance. I can pick up my kids from school AND still deliver high-quality code.',
                            'benefitsMentioned' => ['Flexible Work', 'Unlimited PTO', 'Health Coverage'],
                            'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
                            'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                        ],
                        [
                            'name' => 'Marcus Chen',
                            'role' => 'Product Manager',
                            'location' => 'Remote',
                            'quote' => 'The learning stipend helped me get my PMP certification, which opened up new career opportunities. The company truly invests in our growth.',
                            'benefitsMentioned' => ['Learning Stipend', 'Health Coverage', '401(k)'],
                            'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
                            'image' => 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop'
                        ],
                        [
                            'name' => 'Emily Rodriguez',
                            'role' => 'UX Designer',
                            'location' => 'New York, NY',
                            'quote' => 'The parental leave policy gave me the time I needed to bond with my newborn without worrying about work. I\'m so grateful to work for a family-first company.',
                            'benefitsMentioned' => ['Parental Leave', 'Flexible Work', 'Health Coverage'],
                            'avatar' => 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
                            'image' => 'https://images.unsplash.com/photo-1516589091380-5d8e87df6999?w=600&h=400&fit=crop'
                        ]
                    ],
                    'careersLink' => '/careers/openings',
                    'showNewsletter' => false
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 512,
                'section_key' => 'benefitsPerks',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Life at Company Section 
            [
                'id' => 513,
                'section_key' => 'lifeAtCompany',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => 'Life at SupplyChainPro',
                    'title' => [
                        'prefix' => 'More Than Just',
                        'highlight' => 'Work',
                        'suffix' => ''
                    ],
                    'description' => 'We\'re building a culture where innovation thrives, collaboration flourishes, and everyone feels valued. Join us and experience what makes SupplyChainPro a great place to work.',
                    'heroImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=500&fit=crop',
                    'stats' => [
                        ['value' => '500+', 'label' => 'Employees Worldwide', 'icon' => 'users'],
                        ['value' => '25+', 'label' => 'Countries', 'icon' => 'globe'],
                        ['value' => '15+', 'label' => 'Years of Excellence', 'icon' => 'trophy'],
                        ['value' => '95%', 'label' => 'Employee Satisfaction', 'icon' => 'star']
                    ],
                    'values' => [
                        ['title' => 'Innovation First', 'description' => 'We embrace creativity and push boundaries to solve complex challenges.', 'icon' => 'bolt'],
                        ['title' => 'Customer Obsession', 'description' => 'Our customers\' success is our success. We go above and beyond.', 'icon' => 'heart'],
                        ['title' => 'One Team', 'description' => 'Collaboration and mutual respect drive our achievements.', 'icon' => 'users'],
                        ['title' => 'Integrity Always', 'description' => 'We do the right thing, even when no one is watching.', 'icon' => 'shield']
                    ],
                    'perksTitle' => 'Perks & Benefits',
                    'perks' => [
                        ['title' => 'Remote-First Culture', 'description' => 'Work from anywhere with flexible hours and a global team.', 'icon' => 'wifi'],
                        ['title' => 'Learning Stipend', 'description' => '$2,000 annual budget for courses, conferences, and books.', 'icon' => 'academic'],
                        ['title' => 'Health & Wellness', 'description' => 'Comprehensive health coverage and gym reimbursement.', 'icon' => 'heart'],
                        ['title' => 'Parental Leave', 'description' => 'Generous parental leave for all new parents.', 'icon' => 'gift'],
                        ['title' => 'Team Offsites', 'description' => 'Quarterly team retreats in amazing locations.', 'icon' => 'globe'],
                        ['title' => 'Stock Options', 'description' => 'Everyone is an owner with equity in the company.', 'icon' => 'chart']
                    ],
                    'testimonials' => [
                        [
                            'id' => 1,
                            'name' => 'Sarah Johnson',
                            'role' => 'Senior Software Engineer',
                            'quote' => 'The culture here is truly special. I\'ve never worked in a place where I feel so supported and empowered to grow. The team genuinely cares about each other\'s success.',
                            'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
                            'location' => 'San Francisco, CA'
                        ],
                        [
                            'id' => 2,
                            'name' => 'Michael Chen',
                            'role' => 'Product Manager',
                            'quote' => 'What I love most is the balance between hard work and fun. We\'re solving real problems, but we also take time to celebrate wins and enjoy each other\'s company.',
                            'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
                            'location' => 'New York, NY'
                        ],
                        [
                            'id' => 3,
                            'name' => 'Emily Rodriguez',
                            'role' => 'Customer Success Lead',
                            'quote' => 'From day one, I felt welcomed. The mentorship program helped me grow, and the flexible work culture has been a game-changer for my work-life balance.',
                            'avatar' => 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
                            'location' => 'Austin, TX'
                        ]
                    ],
                    'categories' => [
                        ['id' => 'all', 'label' => 'All Moments', 'icon' => 'camera'],
                        ['id' => 'culture', 'label' => 'Culture', 'icon' => 'users'],
                        ['id' => 'events', 'label' => 'Events', 'icon' => 'calendar'],
                        ['id' => 'office', 'label' => 'Office Life', 'icon' => 'building'],
                        ['id' => 'volunteer', 'label' => 'Volunteer', 'icon' => 'heart'],
                        ['id' => 'celebrations', 'label' => 'Celebrations', 'icon' => 'gift']
                    ],
                    'galleryImages' => [
                        ['src' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop', 'alt' => 'Team collaboration', 'caption' => 'Team brainstorming session', 'description' => 'Our engineering team collaborating on a new feature.', 'category' => 'culture'],
                        ['src' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop', 'alt' => 'Office celebration', 'caption' => 'Company anniversary celebration', 'description' => 'Celebrating 10 years of innovation together.', 'category' => 'celebrations'],
                        ['src' => 'https://images.unsplash.com/photo-1528605105345-5344ea20e269?w=800&h=600&fit=crop', 'alt' => 'Volunteer event', 'caption' => 'Giving back to the community', 'description' => 'Volunteering at local food bank.', 'category' => 'volunteer'],
                        ['src' => 'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&h=600&fit=crop', 'alt' => 'Modern office', 'caption' => 'Our creative workspace', 'description' => 'Open and collaborative office environment.', 'category' => 'office'],
                        ['src' => 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=800&h=600&fit=crop', 'alt' => 'Team event', 'caption' => 'Annual company retreat', 'description' => 'Team building activities in nature.', 'category' => 'events'],
                        ['src' => 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop', 'alt' => 'Office culture', 'caption' => 'Casual Friday vibes', 'description' => 'Relaxed atmosphere with team bonding.', 'category' => 'culture']
                    ],
                    'ctaTitle' => 'Ready to Join Us?',
                    'ctaDescription' => 'Explore open positions and become part of a team that\'s transforming supply chains worldwide.',
                    'openingsLink' => '/careers/openings',
                    'cultureLink' => '/careers/culture',
                    'ctaImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 514,
                'section_key' => 'lifeAtCompany',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => 'Life at SupplyChainPro',
                    'title' => [
                        'prefix' => 'More Than Just',
                        'highlight' => 'Work'
                    ],
                    'description' => 'We\'re building a culture where innovation thrives, collaboration flourishes, and everyone feels valued. Join us and experience what makes SupplyChainPro a great place to work.',
                    'heroImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=500&fit=crop',
                    'defaultViewMode' => 'grid',
                    'stats' => [
                        ['value' => '500+', 'label' => 'Employees Worldwide', 'icon' => 'users', 'trend' => '+15%', 'trendUp' => true],
                        ['value' => '25+', 'label' => 'Countries', 'icon' => 'globe', 'trend' => '+5', 'trendUp' => true],
                        ['value' => '15+', 'label' => 'Years of Excellence', 'icon' => 'trophy', 'trend' => '15', 'trendUp' => true],
                        ['value' => '95%', 'label' => 'Employee Satisfaction', 'icon' => 'star', 'trend' => '+2%', 'trendUp' => true]
                    ],
                    'featuredMoments' => [
                        [
                            'id' => 'featured-001',
                            'src' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=600&fit=crop',
                            'alt' => 'Team collaboration',
                            'caption' => 'Team Brainstorming Session',
                            'description' => 'Our engineering team collaborating on a new supply chain optimization feature.',
                            'category' => 'culture',
                            'date' => 'March 15, 2024',
                            'likes' => 234,
                            'isFeatured' => true
                        ],
                        [
                            'id' => 'featured-002',
                            'src' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=600&fit=crop',
                            'alt' => 'Office celebration',
                            'caption' => 'Company Anniversary Celebration',
                            'description' => 'Celebrating 10 years of innovation and growth together.',
                            'category' => 'celebrations',
                            'date' => 'February 10, 2024',
                            'likes' => 312,
                            'isFeatured' => true
                        ],
                        [
                            'id' => 'featured-003',
                            'src' => 'https://images.unsplash.com/photo-1528605105345-5344ea20e269?w=1200&h=600&fit=crop',
                            'alt' => 'Volunteer event',
                            'caption' => 'Giving Back to Our Community',
                            'description' => 'Volunteering at the local food bank with our amazing team.',
                            'category' => 'volunteer',
                            'date' => 'January 20, 2024',
                            'likes' => 187,
                            'isFeatured' => true
                        ]
                    ],
                    'values' => [
                        ['title' => 'Innovation First', 'description' => 'We embrace creativity and push boundaries to solve complex challenges.', 'icon' => 'bolt', 'trend' => '+45%', 'trendUp' => true],
                        ['title' => 'Customer Obsession', 'description' => 'Our customers\' success is our success. We go above and beyond.', 'icon' => 'heart', 'trend' => '4.9/5', 'trendUp' => true],
                        ['title' => 'One Team', 'description' => 'Collaboration and mutual respect drive our achievements.', 'icon' => 'users', 'trend' => '98%', 'trendUp' => true],
                        ['title' => 'Integrity Always', 'description' => 'We do the right thing, even when no one is watching.', 'icon' => 'shield', 'trend' => '0', 'trendUp' => true]
                    ],
                    'perksTitle' => 'Perks & Benefits',
                    'perks' => [
                        ['title' => 'Remote-First Culture', 'description' => 'Work from anywhere with flexible hours and a global team.', 'icon' => 'wifi'],
                        ['title' => 'Learning Stipend', 'description' => '$2,000 annual budget for courses, conferences, and books.', 'icon' => 'academic'],
                        ['title' => 'Health & Wellness', 'description' => 'Comprehensive health coverage and gym reimbursement.', 'icon' => 'heart'],
                        ['title' => 'Parental Leave', 'description' => 'Generous parental leave for all new parents.', 'icon' => 'gift'],
                        ['title' => 'Team Offsites', 'description' => 'Quarterly team retreats in amazing locations.', 'icon' => 'globe'],
                        ['title' => 'Stock Options', 'description' => 'Everyone is an owner with equity in the company.', 'icon' => 'chart']
                    ],
                    'testimonials' => [
                        [
                            'name' => 'Sarah Johnson',
                            'role' => 'Senior Software Engineer',
                            'quote' => 'The culture here is truly special. I\'ve never worked in a place where I feel so supported and empowered to grow.',
                            'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
                            'location' => 'San Francisco, CA'
                        ],
                        [
                            'name' => 'Michael Chen',
                            'role' => 'Product Manager',
                            'quote' => 'What I love most is the balance between hard work and fun. We\'re solving real problems, but we also take time to celebrate wins.',
                            'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
                            'location' => 'New York, NY'
                        ],
                        [
                            'name' => 'Emily Rodriguez',
                            'role' => 'Customer Success Lead',
                            'quote' => 'From day one, I felt welcomed. The mentorship program helped me grow, and the flexible work culture has been a game-changer.',
                            'avatar' => 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
                            'location' => 'Austin, TX'
                        ]
                    ],
                    'categories' => [
                        ['id' => 'all', 'label' => 'All Moments', 'icon' => 'camera'],
                        ['id' => 'culture', 'label' => 'Culture', 'icon' => 'users'],
                        ['id' => 'events', 'label' => 'Events', 'icon' => 'calendar'],
                        ['id' => 'office', 'label' => 'Office Life', 'icon' => 'building'],
                        ['id' => 'volunteer', 'label' => 'Volunteer', 'icon' => 'heart'],
                        ['id' => 'celebrations', 'label' => 'Celebrations', 'icon' => 'gift']
                    ],
                    'galleryImages' => [
                        [
                            'id' => 'img-001',
                            'src' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
                            'alt' => 'Team collaboration',
                            'caption' => 'Team brainstorming session',
                            'description' => 'Our engineering team collaborating on a new feature.',
                            'category' => 'culture',
                            'date' => 'March 15, 2024',
                            'likes' => 234,
                            'views' => 1234,
                            'tags' => ['teamwork', 'collaboration', 'engineering']
                        ],
                        [
                            'id' => 'img-002',
                            'src' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop',
                            'alt' => 'Office celebration',
                            'caption' => 'Company anniversary celebration',
                            'description' => 'Celebrating 10 years of innovation together.',
                            'category' => 'celebrations',
                            'date' => 'February 10, 2024',
                            'likes' => 312,
                            'views' => 2100,
                            'tags' => ['celebration', 'anniversary', 'team'],
                            'isFeatured' => true
                        ],
                        [
                            'id' => 'img-003',
                            'src' => 'https://images.unsplash.com/photo-1528605105345-5344ea20e269?w=800&h=600&fit=crop',
                            'alt' => 'Volunteer event',
                            'caption' => 'Giving back to the community',
                            'description' => 'Volunteering at local food bank.',
                            'category' => 'volunteer',
                            'date' => 'January 20, 2024',
                            'likes' => 187,
                            'views' => 987,
                            'tags' => ['volunteer', 'community', 'giving back']
                        ],
                        [
                            'id' => 'img-004',
                            'src' => 'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&h=600&fit=crop',
                            'alt' => 'Modern office',
                            'caption' => 'Our creative workspace',
                            'description' => 'Open and collaborative office environment.',
                            'category' => 'office',
                            'date' => 'March 5, 2024',
                            'likes' => 156,
                            'views' => 876,
                            'tags' => ['office', 'workspace', 'creative']
                        ],
                        [
                            'id' => 'img-005',
                            'src' => 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=800&h=600&fit=crop',
                            'alt' => 'Team event',
                            'caption' => 'Annual company retreat',
                            'description' => 'Team building activities in nature.',
                            'category' => 'events',
                            'date' => 'December 10, 2023',
                            'likes' => 234,
                            'views' => 1543,
                            'tags' => ['retreat', 'team building', 'events']
                        ],
                        [
                            'id' => 'img-006',
                            'src' => 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop',
                            'alt' => 'Office culture',
                            'caption' => 'Casual Friday vibes',
                            'description' => 'Relaxed atmosphere with team bonding.',
                            'category' => 'culture',
                            'date' => 'February 25, 2024',
                            'likes' => 198,
                            'views' => 1100,
                            'tags' => ['culture', 'casual friday', 'team bonding']
                        ]
                    ],
                    'openingsLink' => '/careers/openings',
                    'cultureLink' => '/careers/culture'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 515,
                'section_key' => 'lifeAtCompany',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => 'Life at SupplyChainPro',
                    'title' => [
                        'prefix' => 'More Than Just',
                        'highlight' => 'Work'
                    ],
                    'description' => 'We\'re building a culture where innovation thrives, collaboration flourishes, and everyone feels valued. Join us and experience what makes SupplyChainPro a great place to work.',
                    'heroImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=500&fit=crop',
                    'stats' => [
                        ['value' => '500+', 'label' => 'Employees Worldwide', 'icon' => 'users'],
                        ['value' => '25+', 'label' => 'Countries', 'icon' => 'globe'],
                        ['value' => '15+', 'label' => 'Years of Excellence', 'icon' => 'trophy'],
                        ['value' => '95%', 'label' => 'Employee Satisfaction', 'icon' => 'star']
                    ],
                    'autoPlayCarousel' => true,
                    'featuredMoments' => [
                        [
                            'id' => 'featured-001',
                            'src' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=600&fit=crop',
                            'alt' => 'Team collaboration',
                            'caption' => 'Team Brainstorming Session',
                            'description' => 'Our engineering team collaborating on a new supply chain optimization feature.',
                            'category' => 'culture',
                            'type' => 'image',
                            'date' => 'March 15, 2024',
                            'likes' => 234,
                            'isFeatured' => true
                        ],
                        [
                            'id' => 'featured-002',
                            'src' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=600&fit=crop',
                            'alt' => 'Office celebration',
                            'caption' => 'Company Anniversary Celebration',
                            'description' => 'Celebrating 10 years of innovation and growth together.',
                            'category' => 'celebrations',
                            'type' => 'image',
                            'date' => 'February 10, 2024',
                            'likes' => 312,
                            'isFeatured' => true
                        ],
                        [
                            'id' => 'featured-003',
                            'src' => 'https://images.unsplash.com/photo-1528605105345-5344ea20e269?w=1200&h=600&fit=crop',
                            'alt' => 'Volunteer event',
                            'caption' => 'Giving Back to Our Community',
                            'description' => 'Volunteering at the local food bank with our amazing team.',
                            'category' => 'volunteer',
                            'type' => 'image',
                            'date' => 'January 20, 2024',
                            'likes' => 187,
                            'isFeatured' => true
                        ]
                    ],
                    'categories' => [
                        ['id' => 'all', 'label' => 'All Moments', 'icon' => 'camera'],
                        ['id' => 'culture', 'label' => 'Culture', 'icon' => 'users'],
                        ['id' => 'events', 'label' => 'Events', 'icon' => 'calendar'],
                        ['id' => 'office', 'label' => 'Office Life', 'icon' => 'building'],
                        ['id' => 'volunteer', 'label' => 'Volunteer', 'icon' => 'heart'],
                        ['id' => 'celebrations', 'label' => 'Celebrations', 'icon' => 'gift']
                    ],
                    'values' => [
                        [
                            'title' => 'Innovation First',
                            'description' => 'We embrace creativity and push boundaries to solve complex challenges.',
                            'icon' => 'bolt',
                            'gradient' => 'from-blue-500 to-blue-600',
                            'quote' => 'Innovation is at the heart of everything we do.',
                            'author' => 'Sarah Johnson, CTO',
                            'image' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop'
                        ],
                        [
                            'title' => 'Customer Obsession',
                            'description' => 'Our customers\' success is our success. We go above and beyond.',
                            'icon' => 'heart',
                            'gradient' => 'from-rose-500 to-pink-500',
                            'quote' => 'We put our customers first in every decision.',
                            'author' => 'Michael Chen, VP of Product',
                            'image' => 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop'
                        ],
                        [
                            'title' => 'One Team',
                            'description' => 'Collaboration and mutual respect drive our achievements.',
                            'icon' => 'users',
                            'gradient' => 'from-purple-500 to-indigo-500',
                            'quote' => 'Together we achieve more than we ever could alone.',
                            'author' => 'Emily Rodriguez, Engineering Lead',
                            'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                        ],
                        [
                            'title' => 'Integrity Always',
                            'description' => 'We do the right thing, even when no one is watching.',
                            'icon' => 'shield',
                            'gradient' => 'from-emerald-500 to-green-500',
                            'quote' => 'Trust is our most valuable currency.',
                            'author' => 'David Kim, Head of Operations',
                            'image' => 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop'
                        ]
                    ],
                    'employeeStories' => [
                        [
                            'name' => 'Sarah Johnson',
                            'role' => 'Senior Software Engineer',
                            'location' => 'San Francisco, CA',
                            'quote' => 'The culture here is truly special. I\'ve never worked in a place where I feel so supported and empowered to grow.',
                            'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
                            'tenure' => '3 years',
                            'rating' => 5,
                            'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                        ],
                        [
                            'name' => 'Michael Chen',
                            'role' => 'Product Manager',
                            'location' => 'New York, NY',
                            'quote' => 'What I love most is the balance between hard work and fun. We\'re solving real problems, but we also take time to celebrate wins.',
                            'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
                            'tenure' => '2 years',
                            'rating' => 5,
                            'image' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop'
                        ],
                        [
                            'name' => 'Emily Rodriguez',
                            'role' => 'Customer Success Lead',
                            'location' => 'Austin, TX',
                            'quote' => 'From day one, I felt welcomed. The mentorship program helped me grow, and the flexible work culture has been a game-changer.',
                            'avatar' => 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
                            'tenure' => '1.5 years',
                            'rating' => 5,
                            'image' => 'https://images.unsplash.com/photo-1528605105345-5344ea20e269?w=600&h=400&fit=crop'
                        ]
                    ],
                    'galleryImages' => [
                        [
                            'id' => 'img-001',
                            'src' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
                            'alt' => 'Team collaboration',
                            'caption' => 'Team brainstorming session',
                            'description' => 'Our engineering team collaborating on a new feature.',
                            'category' => 'culture',
                            'type' => 'image',
                            'date' => 'March 15, 2024',
                            'views' => 1234,
                            'likes' => 234,
                            'tags' => ['teamwork', 'collaboration', 'engineering']
                        ],
                        [
                            'id' => 'img-002',
                            'src' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop',
                            'alt' => 'Office celebration',
                            'caption' => 'Company anniversary celebration',
                            'description' => 'Celebrating 10 years of innovation together.',
                            'category' => 'celebrations',
                            'type' => 'image',
                            'date' => 'February 10, 2024',
                            'views' => 2100,
                            'likes' => 312,
                            'tags' => ['celebration', 'anniversary', 'team'],
                            'isFeatured' => true
                        ],
                        [
                            'id' => 'img-003',
                            'src' => 'https://images.unsplash.com/photo-1528605105345-5344ea20e269?w=800&h=600&fit=crop',
                            'alt' => 'Volunteer event',
                            'caption' => 'Giving back to the community',
                            'description' => 'Volunteering at local food bank.',
                            'category' => 'volunteer',
                            'type' => 'image',
                            'date' => 'January 20, 2024',
                            'views' => 987,
                            'likes' => 187,
                            'tags' => ['volunteer', 'community', 'giving back']
                        ],
                        [
                            'id' => 'img-004',
                            'src' => 'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&h=600&fit=crop',
                            'alt' => 'Modern office',
                            'caption' => 'Our creative workspace',
                            'description' => 'Open and collaborative office environment.',
                            'category' => 'office',
                            'type' => 'image',
                            'date' => 'March 5, 2024',
                            'views' => 876,
                            'likes' => 156,
                            'tags' => ['office', 'workspace', 'creative']
                        ],
                        [
                            'id' => 'img-005',
                            'src' => 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=800&h=600&fit=crop',
                            'alt' => 'Team event',
                            'caption' => 'Annual company retreat',
                            'description' => 'Team building activities in nature.',
                            'category' => 'events',
                            'type' => 'image',
                            'date' => 'December 10, 2023',
                            'views' => 1543,
                            'likes' => 234,
                            'tags' => ['retreat', 'team building', 'events']
                        ],
                        [
                            'id' => 'img-006',
                            'src' => 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop',
                            'alt' => 'Office culture',
                            'caption' => 'Casual Friday vibes',
                            'description' => 'Relaxed atmosphere with team bonding.',
                            'category' => 'culture',
                            'type' => 'image',
                            'date' => 'February 25, 2024',
                            'views' => 1100,
                            'likes' => 198,
                            'tags' => ['culture', 'casual friday', 'team bonding']
                        ]
                    ],
                    'openingsLink' => '/careers/openings',
                    'cultureLink' => '/careers/culture'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 516,
                'section_key' => 'lifeAtCompany',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],


            // Internship Programs Section 
            [
                'id' => 517,
                'section_key' => 'internshipPrograms',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => 'Internship Programs',
                    'title' => [
                        'prefix' => 'Launch Your',
                        'highlight' => 'Career',
                        'suffix' => 'with Us'
                    ],
                    'description' => 'Gain real-world experience, work on impactful projects, and learn from industry experts. Our internship programs are designed to help you grow and succeed.',
                    'heroImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=500&fit=crop',
                    'searchPlaceholder' => 'Search programs by title, department, or skills...',
                    'stats' => [
                        ['value' => '200+', 'label' => 'Interns Hired', 'icon' => 'users'],
                        ['value' => '85%', 'label' => 'Conversion Rate', 'icon' => 'trophy'],
                        ['value' => '15+', 'label' => 'Countries', 'icon' => 'globe'],
                        ['value' => '4.9', 'label' => 'Program Rating', 'icon' => 'star']
                    ],
                    'programTypes' => [
                        ['id' => 'all', 'label' => 'All Programs', 'icon' => 'academic'],
                        ['id' => 'engineering', 'label' => 'Software Engineering', 'icon' => 'code'],
                        ['id' => 'product', 'label' => 'Product Management', 'icon' => 'briefcase'],
                        ['id' => 'data', 'label' => 'Data Science & Analytics', 'icon' => 'chart'],
                        ['id' => 'marketing', 'label' => 'Marketing', 'icon' => 'trending'],
                        ['id' => 'design', 'label' => 'Product Design', 'icon' => 'template']
                    ],
                    'locations' => [
                        ['id' => 'all', 'label' => 'All Locations', 'flag' => '🌐'],
                        ['id' => 'remote', 'label' => 'Remote', 'flag' => '🌍'],
                        ['id' => 'sf', 'label' => 'San Francisco, CA', 'flag' => '🇺🇸'],
                        ['id' => 'nyc', 'label' => 'New York, NY', 'flag' => '🇺🇸'],
                        ['id' => 'london', 'label' => 'London, UK', 'flag' => '🇬🇧'],
                        ['id' => 'bangalore', 'label' => 'Bangalore, India', 'flag' => '🇮🇳']
                    ],
                    'featuredProgram' => [
                        'id' => 'prog-001',
                        'title' => 'Software Engineering Intern',
                        'type' => 'engineering',
                        'location' => 'sf',
                        'duration' => 'Summer (12 weeks)',
                        'startDate' => 'June 3, 2024',
                        'deadline' => 'Apply by March 15',
                        'description' => 'Join our engineering team to build scalable supply chain solutions. Work on real-world projects, collaborate with experienced engineers, and gain hands-on experience with modern technologies including React, Node.js, and GraphQL.',
                        'skills' => ['React', 'Node.js', 'GraphQL', 'PostgreSQL', 'AWS', 'TypeScript'],
                        'image' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop',
                        'isFeatured' => true
                    ],
                    'programs' => [
                        [
                            'id' => 'prog-001',
                            'title' => 'Software Engineering Intern',
                            'type' => 'engineering',
                            'location' => 'sf',
                            'duration' => 'Summer (12 weeks)',
                            'startDate' => 'June 3, 2024',
                            'deadline' => 'Apply by March 15',
                            'description' => 'Join our engineering team to build scalable supply chain solutions. Work on real-world projects, collaborate with experienced engineers, and gain hands-on experience.',
                            'skills' => ['React', 'Node.js', 'GraphQL', 'PostgreSQL', 'AWS', 'TypeScript'],
                            'image' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop',
                            'isFeatured' => true
                        ],
                        [
                            'id' => 'prog-002',
                            'title' => 'Product Management Intern',
                            'type' => 'product',
                            'location' => 'remote',
                            'duration' => 'Summer (12 weeks)',
                            'startDate' => 'June 3, 2024',
                            'deadline' => 'Apply by March 15',
                            'description' => 'Work closely with product leaders to define features, analyze user data, and help shape the future of our platform.',
                            'skills' => ['Product Strategy', 'Data Analysis', 'User Research', 'Agile', 'Communication'],
                            'image' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=500&fit=crop'
                        ],
                        [
                            'id' => 'prog-003',
                            'title' => 'Data Science Intern',
                            'type' => 'data',
                            'location' => 'nyc',
                            'duration' => 'Summer (12 weeks)',
                            'startDate' => 'June 3, 2024',
                            'deadline' => 'Apply by March 15',
                            'description' => 'Apply machine learning and statistical techniques to solve complex supply chain problems and drive business insights.',
                            'skills' => ['Python', 'SQL', 'Machine Learning', 'Statistics', 'Pandas', 'TensorFlow'],
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop'
                        ],
                        [
                            'id' => 'prog-004',
                            'title' => 'Marketing Intern',
                            'type' => 'marketing',
                            'location' => 'london',
                            'duration' => 'Fall (12 weeks)',
                            'startDate' => 'September 9, 2024',
                            'deadline' => 'Apply by July 1',
                            'description' => 'Support our marketing team in campaign execution, content creation, and social media strategy.',
                            'skills' => ['Content Creation', 'Social Media', 'Analytics', 'SEO', 'Email Marketing'],
                            'image' => 'https://images.unsplash.com/photo-1557838923-2985c318be48?w=800&h=500&fit=crop'
                        ],
                        [
                            'id' => 'prog-005',
                            'title' => 'Product Design Intern',
                            'type' => 'design',
                            'location' => 'sf',
                            'duration' => 'Summer (12 weeks)',
                            'startDate' => 'June 3, 2024',
                            'deadline' => 'Apply by March 15',
                            'description' => 'Help design intuitive user experiences for our supply chain platform. Work alongside senior designers and product managers.',
                            'skills' => ['Figma', 'UI/UX Design', 'Prototyping', 'User Research', 'Design Systems'],
                            'image' => 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=500&fit=crop'
                        ],
                        [
                            'id' => 'prog-006',
                            'title' => 'Sales Intern',
                            'type' => 'sales',
                            'location' => 'remote',
                            'duration' => 'Year-Round (6 months)',
                            'startDate' => 'Flexible',
                            'deadline' => 'Rolling',
                            'description' => 'Learn the fundamentals of B2B sales, support account executives, and help drive revenue growth.',
                            'skills' => ['Communication', 'CRM', 'Lead Generation', 'Negotiation', 'Sales Process'],
                            'image' => 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=800&h=500&fit=crop'
                        ]
                    ],
                    'testimonials' => [
                        [
                            'name' => 'Sarah Johnson',
                            'role' => 'Software Engineering Intern',
                            'university' => 'Stanford University',
                            'quote' => 'The internship program gave me real ownership over impactful projects. I learned more in 12 weeks than in a full semester of classes.',
                            'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
                            'image' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop'
                        ],
                        [
                            'name' => 'Michael Chen',
                            'role' => 'Product Management Intern',
                            'university' => 'University of Michigan',
                            'quote' => 'The mentorship and culture at SupplyChainPro are incredible. I felt valued from day one and received amazing guidance throughout.',
                            'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
                            'image' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop'
                        ],
                        [
                            'name' => 'Emily Rodriguez',
                            'role' => 'Data Science Intern',
                            'university' => 'UC Berkeley',
                            'quote' => 'Working on real supply chain data and seeing my models in production was an incredible experience. I accepted my full-time offer!',
                            'avatar' => 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
                        ]
                    ],
                    'formTitle' => 'Apply for Internship',
                    'formDescription' => 'Fill out the form below and our recruiting team will review your application.',
                    'formImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 518,
                'section_key' => 'internshipPrograms',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => 'Internship Programs',
                    'title' => [
                        'prefix' => 'Launch Your',
                        'highlight' => 'Career',
                        'suffix' => 'with Us'
                    ],
                    'description' => 'Gain real-world experience, work on impactful projects, and learn from industry experts. Our internship programs are designed to help you grow and succeed.',
                    'heroImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=500&fit=crop',
                    'searchPlaceholder' => 'Search programs by title, department, or skills...',
                    'defaultViewMode' => 'grid',
                    'stats' => [
                        ['value' => '200+', 'label' => 'Interns Hired', 'icon' => 'users', 'trend' => '+25%', 'trendUp' => true],
                        ['value' => '85%', 'label' => 'Conversion Rate', 'icon' => 'trophy', 'trend' => '+5%', 'trendUp' => true],
                        ['value' => '15+', 'label' => 'Countries', 'icon' => 'globe', 'trend' => '+3', 'trendUp' => true],
                        ['value' => '4.9', 'label' => 'Program Rating', 'icon' => 'star', 'trend' => '4.9', 'trendUp' => true]
                    ],
                    'programTypes' => [
                        ['id' => 'all', 'label' => 'All Programs', 'icon' => 'academic'],
                        ['id' => 'engineering', 'label' => 'Engineering', 'icon' => 'code'],
                        ['id' => 'product', 'label' => 'Product', 'icon' => 'briefcase'],
                        ['id' => 'data', 'label' => 'Data Science', 'icon' => 'chart'],
                        ['id' => 'marketing', 'label' => 'Marketing', 'icon' => 'trending'],
                        ['id' => 'design', 'label' => 'Design', 'icon' => 'template']
                    ],
                    'locations' => [
                        ['id' => 'all', 'label' => 'All Locations', 'flag' => '🌐'],
                        ['id' => 'remote', 'label' => 'Remote', 'flag' => '🌍'],
                        ['id' => 'sf', 'label' => 'San Francisco, CA', 'flag' => '🇺🇸'],
                        ['id' => 'nyc', 'label' => 'New York, NY', 'flag' => '🇺🇸'],
                        ['id' => 'london', 'label' => 'London, UK', 'flag' => '🇬🇧'],
                        ['id' => 'bangalore', 'label' => 'Bangalore, India', 'flag' => '🇮🇳']
                    ],
                    'featuredPrograms' => [
                        [
                            'id' => 'prog-001',
                            'title' => 'Software Engineering Intern',
                            'type' => 'engineering',
                            'location' => 'sf',
                            'duration' => 'Summer (12 weeks)',
                            'startDate' => 'June 3, 2024',
                            'deadline' => 'March 15, 2024',
                            'deadlineDate' => '2024-03-15',
                            'description' => 'Join our engineering team to build scalable supply chain solutions. Work on real-world projects and collaborate with experienced engineers.',
                            'skills' => ['React', 'Node.js', 'GraphQL', 'PostgreSQL'],
                            'isFeatured' => true,
                            'image' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop'
                        ],
                        [
                            'id' => 'prog-002',
                            'title' => 'Product Management Intern',
                            'type' => 'product',
                            'location' => 'remote',
                            'duration' => 'Summer (12 weeks)',
                            'startDate' => 'June 3, 2024',
                            'deadline' => 'March 20, 2024',
                            'deadlineDate' => '2024-03-20',
                            'description' => 'Work closely with product leaders to define features, analyze user data, and help shape the future of our platform.',
                            'skills' => ['Product Strategy', 'Data Analysis', 'User Research', 'Agile'],
                            'isFeatured' => true,
                            'image' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=500&fit=crop'
                        ],
                        [
                            'id' => 'prog-003',
                            'title' => 'Data Science Intern',
                            'type' => 'data',
                            'location' => 'nyc',
                            'duration' => 'Summer (12 weeks)',
                            'startDate' => 'June 3, 2024',
                            'deadline' => 'April 1, 2024',
                            'deadlineDate' => '2024-04-01',
                            'description' => 'Apply machine learning and statistical techniques to solve complex supply chain problems and drive business insights.',
                            'skills' => ['Python', 'SQL', 'Machine Learning', 'Statistics'],
                            'isFeatured' => true,
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop'
                        ]
                    ],
                    'programs' => [
                        [
                            'id' => 'prog-001',
                            'title' => 'Software Engineering Intern',
                            'type' => 'engineering',
                            'location' => 'sf',
                            'duration' => 'Summer (12 weeks)',
                            'startDate' => 'June 3, 2024',
                            'deadline' => 'March 15, 2024',
                            'deadlineDate' => '2024-03-15',
                            'description' => 'Join our engineering team to build scalable supply chain solutions. Work on real-world projects and collaborate with experienced engineers.',
                            'skills' => ['React', 'Node.js', 'GraphQL', 'PostgreSQL', 'AWS', 'TypeScript'],
                            'isFeatured' => true,
                            'image' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop'
                        ],
                        [
                            'id' => 'prog-002',
                            'title' => 'Product Management Intern',
                            'type' => 'product',
                            'location' => 'remote',
                            'duration' => 'Summer (12 weeks)',
                            'startDate' => 'June 3, 2024',
                            'deadline' => 'March 20, 2024',
                            'deadlineDate' => '2024-03-20',
                            'description' => 'Work closely with product leaders to define features, analyze user data, and help shape the future of our platform.',
                            'skills' => ['Product Strategy', 'Data Analysis', 'User Research', 'Agile', 'Communication'],
                            'image' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=500&fit=crop'
                        ],
                        [
                            'id' => 'prog-003',
                            'title' => 'Data Science Intern',
                            'type' => 'data',
                            'location' => 'nyc',
                            'duration' => 'Summer (12 weeks)',
                            'startDate' => 'June 3, 2024',
                            'deadline' => 'April 1, 2024',
                            'deadlineDate' => '2024-04-01',
                            'description' => 'Apply machine learning and statistical techniques to solve complex supply chain problems and drive business insights.',
                            'skills' => ['Python', 'SQL', 'Machine Learning', 'Statistics', 'Pandas', 'TensorFlow'],
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop'
                        ],
                        [
                            'id' => 'prog-004',
                            'title' => 'Marketing Intern',
                            'type' => 'marketing',
                            'location' => 'london',
                            'duration' => 'Fall (12 weeks)',
                            'startDate' => 'September 9, 2024',
                            'deadline' => 'July 1, 2024',
                            'deadlineDate' => '2024-07-01',
                            'description' => 'Support our marketing team in campaign execution, content creation, and social media strategy.',
                            'skills' => ['Content Creation', 'Social Media', 'Analytics', 'SEO', 'Email Marketing'],
                            'image' => 'https://images.unsplash.com/photo-1557838923-2985c318be48?w=800&h=500&fit=crop'
                        ],
                        [
                            'id' => 'prog-005',
                            'title' => 'Product Design Intern',
                            'type' => 'design',
                            'location' => 'sf',
                            'duration' => 'Summer (12 weeks)',
                            'startDate' => 'June 3, 2024',
                            'deadline' => 'March 25, 2024',
                            'deadlineDate' => '2024-03-25',
                            'description' => 'Help design intuitive user experiences for our supply chain platform. Work alongside senior designers and product managers.',
                            'skills' => ['Figma', 'UI/UX Design', 'Prototyping', 'User Research', 'Design Systems'],
                            'image' => 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=500&fit=crop'
                        ],
                        [
                            'id' => 'prog-006',
                            'title' => 'Sales Intern',
                            'type' => 'sales',
                            'location' => 'remote',
                            'duration' => 'Year-Round (6 months)',
                            'startDate' => 'Flexible',
                            'deadline' => 'Rolling',
                            'deadlineDate' => '2024-12-31',
                            'description' => 'Learn the fundamentals of B2B sales, support account executives, and help drive revenue growth.',
                            'skills' => ['Communication', 'CRM', 'Lead Generation', 'Negotiation', 'Sales Process'],
                            'image' => 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=800&h=500&fit=crop'
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 519,
                'section_key' => 'internshipPrograms',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => 'Internship Programs',
                    'title' => [
                        'prefix' => 'Launch Your',
                        'highlight' => 'Career'
                    ],
                    'description' => 'Gain real-world experience, work on impactful projects, and learn from industry experts. Our internship programs are designed to help you grow and succeed.',
                    'heroImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=500&fit=crop',
                    'stats' => [
                        ['value' => '200+', 'label' => 'Interns Hired', 'icon' => 'users'],
                        ['value' => '85%', 'label' => 'Conversion Rate', 'icon' => 'trophy'],
                        ['value' => '15+', 'label' => 'Countries', 'icon' => 'globe'],
                        ['value' => '4.9', 'label' => 'Program Rating', 'icon' => 'star']
                    ],
                    'autoPlayCarousel' => true,
                    'programTypes' => [
                        ['id' => 'all', 'label' => 'All Programs', 'icon' => 'academic'],
                        ['id' => 'engineering', 'label' => 'Software Engineering', 'icon' => 'code'],
                        ['id' => 'product', 'label' => 'Product Management', 'icon' => 'briefcase'],
                        ['id' => 'data', 'label' => 'Data Science & Analytics', 'icon' => 'chart'],
                        ['id' => 'marketing', 'label' => 'Marketing', 'icon' => 'trending'],
                        ['id' => 'design', 'label' => 'Product Design', 'icon' => 'template']
                    ],
                    'locations' => [
                        ['id' => 'all', 'label' => 'All Locations', 'flag' => '🌐'],
                        ['id' => 'remote', 'label' => 'Remote', 'flag' => '🌍'],
                        ['id' => 'sf', 'label' => 'San Francisco, CA', 'flag' => '🇺🇸'],
                        ['id' => 'nyc', 'label' => 'New York, NY', 'flag' => '🇺🇸'],
                        ['id' => 'london', 'label' => 'London, UK', 'flag' => '🇬🇧'],
                        ['id' => 'bangalore', 'label' => 'Bangalore, India', 'flag' => '🇮🇳']
                    ],
                    'successStories' => [
                        [
                            'name' => 'Sarah Johnson',
                            'role' => 'Software Engineering Intern → Full-Time Engineer',
                            'university' => 'Stanford University',
                            'quote' => 'The internship gave me real ownership over impactful projects. I learned more in 12 weeks than in a full semester of classes.',
                            'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
                            'metrics' => [
                                ['value' => '3', 'label' => 'Projects Shipped'],
                                ['value' => '2', 'label' => 'Patents Filed'],
                                ['value' => '100%', 'label' => 'Offer Rate']
                            ],
                            'image' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop'
                        ],
                        [
                            'name' => 'Michael Chen',
                            'role' => 'Product Management Intern → Product Manager',
                            'university' => 'University of Michigan',
                            'quote' => 'The mentorship and culture at SupplyChainPro are incredible. I felt valued from day one and received amazing guidance.',
                            'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
                            'metrics' => [
                                ['value' => '5', 'label' => 'Features Launched'],
                                ['value' => '95%', 'label' => 'User Satisfaction'],
                                ['value' => '3', 'label' => 'Team Projects']
                            ],
                            'image' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop'
                        ],
                        [
                            'name' => 'Emily Rodriguez',
                            'role' => 'Data Science Intern → Data Scientist',
                            'university' => 'UC Berkeley',
                            'quote' => 'Working on real supply chain data and seeing my models in production was an incredible experience.',
                            'avatar' => 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
                            'metrics' => [
                                ['value' => '2', 'label' => 'ML Models'],
                                ['value' => '$1M', 'label' => 'Cost Savings'],
                                ['value' => '98%', 'label' => 'Accuracy']
                            ],
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
                        ]
                    ],
                    'programs' => [
                        [
                            'id' => 'prog-001',
                            'title' => 'Software Engineering Intern',
                            'type' => 'engineering',
                            'location' => 'sf',
                            'duration' => 'Summer (12 weeks)',
                            'startDate' => 'June 3, 2024',
                            'deadline' => 'March 15, 2024',
                            'deadlineDate' => '2024-03-15',
                            'description' => 'Join our engineering team to build scalable supply chain solutions. Work on real-world projects and collaborate with experienced engineers.',
                            'skills' => ['React', 'Node.js', 'GraphQL', 'PostgreSQL', 'AWS', 'TypeScript'],
                            'isFeatured' => true,
                            'image' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop'
                        ],
                        [
                            'id' => 'prog-002',
                            'title' => 'Product Management Intern',
                            'type' => 'product',
                            'location' => 'remote',
                            'duration' => 'Summer (12 weeks)',
                            'startDate' => 'June 3, 2024',
                            'deadline' => 'March 20, 2024',
                            'deadlineDate' => '2024-03-20',
                            'description' => 'Work closely with product leaders to define features, analyze user data, and help shape the future of our platform.',
                            'skills' => ['Product Strategy', 'Data Analysis', 'User Research', 'Agile', 'Communication'],
                            'image' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=500&fit=crop'
                        ],
                        [
                            'id' => 'prog-003',
                            'title' => 'Data Science Intern',
                            'type' => 'data',
                            'location' => 'nyc',
                            'duration' => 'Summer (12 weeks)',
                            'startDate' => 'June 3, 2024',
                            'deadline' => 'April 1, 2024',
                            'deadlineDate' => '2024-04-01',
                            'description' => 'Apply machine learning and statistical techniques to solve complex supply chain problems and drive business insights.',
                            'skills' => ['Python', 'SQL', 'Machine Learning', 'Statistics', 'Pandas', 'TensorFlow'],
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop'
                        ],
                        [
                            'id' => 'prog-004',
                            'title' => 'Marketing Intern',
                            'type' => 'marketing',
                            'location' => 'london',
                            'duration' => 'Fall (12 weeks)',
                            'startDate' => 'September 9, 2024',
                            'deadline' => 'July 1, 2024',
                            'deadlineDate' => '2024-07-01',
                            'description' => 'Support our marketing team in campaign execution, content creation, and social media strategy.',
                            'skills' => ['Content Creation', 'Social Media', 'Analytics', 'SEO', 'Email Marketing'],
                            'image' => 'https://images.unsplash.com/photo-1557838923-2985c318be48?w=800&h=500&fit=crop'
                        ],
                        [
                            'id' => 'prog-005',
                            'title' => 'Product Design Intern',
                            'type' => 'design',
                            'location' => 'sf',
                            'duration' => 'Summer (12 weeks)',
                            'startDate' => 'June 3, 2024',
                            'deadline' => 'March 25, 2024',
                            'deadlineDate' => '2024-03-25',
                            'description' => 'Help design intuitive user experiences for our supply chain platform. Work alongside senior designers and product managers.',
                            'skills' => ['Figma', 'UI/UX Design', 'Prototyping', 'User Research', 'Design Systems'],
                            'image' => 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=500&fit=crop'
                        ],
                        [
                            'id' => 'prog-006',
                            'title' => 'Sales Intern',
                            'type' => 'sales',
                            'location' => 'remote',
                            'duration' => 'Year-Round (6 months)',
                            'startDate' => 'Flexible',
                            'deadline' => 'Rolling',
                            'deadlineDate' => '2024-12-31',
                            'description' => 'Learn the fundamentals of B2B sales, support account executives, and help drive revenue growth.',
                            'skills' => ['Communication', 'CRM', 'Lead Generation', 'Negotiation', 'Sales Process'],
                            'image' => 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=800&h=500&fit=crop'
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 520,
                'section_key' => 'internshipPrograms',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Remote Opportunities Section
            [
                'id' => 521,
                'section_key' => 'remoteOpportunities',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => 'Remote Opportunities',
                    'title' => [
                        'prefix' => 'Work from',
                        'highlight' => 'Anywhere',
                        'suffix' => ''
                    ],
                    'description' => 'Join our fully remote team and build your career from anywhere in the world. We\'re hiring across multiple departments and time zones.',
                    'heroImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=500&fit=crop',
                    'searchPlaceholder' => 'Search jobs by title, department, or skills...',
                    'stats' => [
                        ['value' => '100%', 'label' => 'Remote-First', 'icon' => 'wifi'],
                        ['value' => '25+', 'label' => 'Countries', 'icon' => 'globe'],
                        ['value' => '40+', 'label' => 'Open Roles', 'icon' => 'briefcase'],
                        ['value' => '4.9', 'label' => 'Employee Rating', 'icon' => 'star']
                    ],
                    'benefitsTitle' => 'Remote Work Benefits',
                    'benefits' => [
                        ['title' => 'Work from Anywhere', 'description' => 'Choose your ideal workspace, whether at home, a co-working space, or while traveling.', 'icon' => 'wifi', 'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'],
                        ['title' => 'Flexible Hours', 'description' => 'Focus on outcomes, not hours. Design your schedule around what works best for you.', 'icon' => 'clock', 'image' => 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&h=400&fit=crop'],
                        ['title' => 'Home Office Stipend', 'description' => '$1,000 annual budget for home office equipment and setup.', 'icon' => 'desktop', 'image' => 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=600&h=400&fit=crop'],
                        ['title' => 'Wellness Reimbursement', 'description' => 'Monthly stipend for gym memberships, mental health support, and wellness activities.', 'icon' => 'heart', 'image' => 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop'],
                        ['title' => 'Global Meetups', 'description' => 'Annual team retreats in amazing locations around the world.', 'icon' => 'globe', 'image' => 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&h=400&fit=crop'],
                        ['title' => 'Learning & Development', 'description' => '$2,000 annual budget for courses, conferences, and professional development.', 'icon' => 'academic', 'image' => 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop']
                    ],
                    'departments' => [
                        ['id' => 'all', 'label' => 'All Departments', 'icon' => 'users'],
                        ['id' => 'engineering', 'label' => 'Engineering', 'icon' => 'code'],
                        ['id' => 'product', 'label' => 'Product', 'icon' => 'briefcase'],
                        ['id' => 'design', 'label' => 'Design', 'icon' => 'template'],
                        ['id' => 'marketing', 'label' => 'Marketing', 'icon' => 'chart'],
                        ['id' => 'sales', 'label' => 'Sales', 'icon' => 'briefcase'],
                        ['id' => 'customer-success', 'label' => 'Customer Success', 'icon' => 'users']
                    ],
                    'regions' => [
                        ['id' => 'all', 'label' => 'All Regions', 'flag' => '🌐'],
                        ['id' => 'north-america', 'label' => 'North America', 'flag' => '🇺🇸'],
                        ['id' => 'europe', 'label' => 'Europe', 'flag' => '🇪🇺'],
                        ['id' => 'asia-pacific', 'label' => 'Asia Pacific', 'flag' => '🌏'],
                        ['id' => 'latin-america', 'label' => 'Latin America', 'flag' => '🌎'],
                        ['id' => 'global', 'label' => 'Global', 'flag' => '🌍']
                    ],
                    'featuredJob' => [
                        'id' => 'job-001',
                        'title' => 'Senior Full Stack Engineer',
                        'department' => 'engineering',
                        'level' => 'senior',
                        'region' => 'global',
                        'remoteType' => 'Fully Remote',
                        'postedDate' => 'January 15, 2024',
                        'description' => 'Join our core engineering team to build scalable supply chain solutions. You\'ll work with modern technologies including React, Node.js, and GraphQL. As a fully remote role, you can work from anywhere with a reliable internet connection.',
                        'skills' => ['React', 'Node.js', 'GraphQL', 'PostgreSQL', 'AWS', 'TypeScript', 'Docker', 'Kubernetes'],
                        'image' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop',
                        'isFeatured' => true
                    ],
                    'jobs' => [
                        [
                            'id' => 'job-001',
                            'title' => 'Senior Full Stack Engineer',
                            'department' => 'engineering',
                            'level' => 'senior',
                            'region' => 'global',
                            'remoteType' => 'Fully Remote',
                            'postedDate' => 'January 15, 2024',
                            'description' => 'Join our core engineering team to build scalable supply chain solutions. You\'ll work with modern technologies including React, Node.js, and GraphQL.',
                            'skills' => ['React', 'Node.js', 'GraphQL', 'PostgreSQL', 'AWS', 'TypeScript'],
                            'image' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop',
                            'isFeatured' => true
                        ],
                        [
                            'id' => 'job-002',
                            'title' => 'Product Manager',
                            'department' => 'product',
                            'level' => 'mid',
                            'region' => 'north-america',
                            'remoteType' => 'Remote (North America)',
                            'postedDate' => 'January 10, 2024',
                            'description' => 'Lead product strategy for our supply chain optimization suite. Work closely with customers and engineering to deliver impactful features.',
                            'skills' => ['Product Strategy', 'Data Analysis', 'User Research', 'Agile', 'Communication'],
                            'image' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=500&fit=crop'
                        ],
                        [
                            'id' => 'job-003',
                            'title' => 'UX/UI Designer',
                            'department' => 'design',
                            'level' => 'mid',
                            'region' => 'europe',
                            'remoteType' => 'Remote (Europe)',
                            'postedDate' => 'January 8, 2024',
                            'description' => 'Design intuitive user experiences for our supply chain platform. Work alongside product managers and engineers to create beautiful, functional interfaces.',
                            'skills' => ['Figma', 'UI/UX Design', 'Prototyping', 'User Research', 'Design Systems'],
                            'image' => 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=500&fit=crop'
                        ],
                        [
                            'id' => 'job-004',
                            'title' => 'Content Marketing Specialist',
                            'department' => 'marketing',
                            'level' => 'entry',
                            'region' => 'global',
                            'remoteType' => 'Fully Remote',
                            'postedDate' => 'January 12, 2024',
                            'description' => 'Create engaging content for our blog, social media, and email campaigns. Help tell the story of how we\'re transforming supply chain management.',
                            'skills' => ['Content Writing', 'SEO', 'Social Media', 'Email Marketing', 'Analytics'],
                            'image' => 'https://images.unsplash.com/photo-1557838923-2985c318be48?w=800&h=500&fit=crop'
                        ],
                        [
                            'id' => 'job-005',
                            'title' => 'Enterprise Sales Representative',
                            'department' => 'sales',
                            'level' => 'senior',
                            'region' => 'north-america',
                            'remoteType' => 'Remote (USA)',
                            'postedDate' => 'January 5, 2024',
                            'description' => 'Drive enterprise sales and build relationships with Fortune 500 companies. Lead complex sales cycles and negotiate contracts.',
                            'skills' => ['Enterprise Sales', 'SaaS', 'Negotiation', 'CRM', 'Account Management'],
                            'image' => 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=800&h=500&fit=crop'
                        ],
                        [
                            'id' => 'job-006',
                            'title' => 'Customer Success Manager',
                            'department' => 'customer-success',
                            'level' => 'mid',
                            'region' => 'asia-pacific',
                            'remoteType' => 'Remote (APAC)',
                            'postedDate' => 'January 3, 2024',
                            'description' => 'Ensure customer success and adoption of our platform. Work with clients to understand their needs and help them achieve their business goals.',
                            'skills' => ['Customer Success', 'Account Management', 'Problem Solving', 'Communication', 'SaaS'],
                            'image' => 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=500&fit=crop'
                        ]
                    ],
                    'formTitle' => 'Apply for Remote Position',
                    'formDescription' => 'Fill out the form below and our recruiting team will review your application.',
                    'formImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 522,
                'section_key' => 'remoteOpportunities',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => 'Remote Opportunities',
                    'title' => [
                        'prefix' => 'Work from',
                        'highlight' => 'Anywhere'
                    ],
                    'description' => 'Join our fully remote team and build your career from anywhere in the world. We\'re hiring across multiple departments and time zones.',
                    'heroImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=500&fit=crop',
                    'searchPlaceholder' => 'Search jobs by title, department, or skills...',
                    'defaultViewMode' => 'grid',
                    'stats' => [
                        ['value' => '100%', 'label' => 'Remote-First', 'icon' => 'wifi', 'trend' => '100%', 'trendUp' => true],
                        ['value' => '25+', 'label' => 'Countries', 'icon' => 'globe', 'trend' => '+5', 'trendUp' => true],
                        ['value' => '40+', 'label' => 'Open Roles', 'icon' => 'briefcase', 'trend' => '+12', 'trendUp' => true],
                        ['value' => '4.9', 'label' => 'Employee Rating', 'icon' => 'star', 'trend' => '+0.2', 'trendUp' => true]
                    ],
                    'departments' => [
                        ['id' => 'all', 'label' => 'All Departments', 'icon' => 'users'],
                        ['id' => 'engineering', 'label' => 'Engineering', 'icon' => 'code'],
                        ['id' => 'product', 'label' => 'Product', 'icon' => 'briefcase'],
                        ['id' => 'design', 'label' => 'Design', 'icon' => 'template'],
                        ['id' => 'marketing', 'label' => 'Marketing', 'icon' => 'chart'],
                        ['id' => 'sales', 'label' => 'Sales', 'icon' => 'briefcase'],
                        ['id' => 'customer-success', 'label' => 'Customer Success', 'icon' => 'users']
                    ],
                    'regions' => [
                        ['id' => 'all', 'label' => 'All Regions', 'flag' => '🌐'],
                        ['id' => 'north-america', 'label' => 'North America', 'flag' => '🇺🇸'],
                        ['id' => 'europe', 'label' => 'Europe', 'flag' => '🇪🇺'],
                        ['id' => 'asia-pacific', 'label' => 'Asia Pacific', 'flag' => '🌏'],
                        ['id' => 'latin-america', 'label' => 'Latin America', 'flag' => '🌎'],
                        ['id' => 'global', 'label' => 'Global', 'flag' => '🌍']
                    ],
                    'featuredJobs' => [
                        [
                            'id' => 'job-001',
                            'title' => 'Senior Full Stack Engineer',
                            'department' => 'engineering',
                            'level' => 'senior',
                            'region' => 'global',
                            'remoteType' => 'fully-remote',
                            'salary' => '$150k - $200k',
                            'postedDate' => 'Jan 15',
                            'postedDateRaw' => '2024-01-15',
                            'description' => 'Join our core engineering team to build scalable supply chain solutions. You\'ll work with modern technologies including React, Node.js, and GraphQL.',
                            'skills' => ['React', 'Node.js', 'GraphQL', 'PostgreSQL', 'AWS', 'TypeScript'],
                            'isFeatured' => true,
                            'image' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop'
                        ],
                        [
                            'id' => 'job-002',
                            'title' => 'Product Manager',
                            'department' => 'product',
                            'level' => 'mid',
                            'region' => 'north-america',
                            'remoteType' => 'remote-first',
                            'salary' => '$120k - $160k',
                            'postedDate' => 'Jan 10',
                            'postedDateRaw' => '2024-01-10',
                            'description' => 'Lead product strategy for our supply chain optimization suite. Work closely with customers and engineering.',
                            'skills' => ['Product Strategy', 'Data Analysis', 'User Research', 'Agile'],
                            'isFeatured' => true,
                            'image' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=500&fit=crop'
                        ],
                        [
                            'id' => 'job-003',
                            'title' => 'UX/UI Designer',
                            'department' => 'design',
                            'level' => 'mid',
                            'region' => 'europe',
                            'remoteType' => 'fully-remote',
                            'salary' => '$90k - $130k',
                            'postedDate' => 'Jan 8',
                            'postedDateRaw' => '2024-01-08',
                            'description' => 'Design intuitive user experiences for our supply chain platform. Work alongside product managers and engineers.',
                            'skills' => ['Figma', 'UI/UX Design', 'Prototyping', 'User Research'],
                            'isFeatured' => true,
                            'image' => 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=500&fit=crop'
                        ]
                    ],
                    'jobs' => [
                        [
                            'id' => 'job-001',
                            'title' => 'Senior Full Stack Engineer',
                            'department' => 'engineering',
                            'level' => 'senior',
                            'region' => 'global',
                            'remoteType' => 'fully-remote',
                            'salary' => '$150k - $200k',
                            'postedDate' => 'Jan 15',
                            'postedDateRaw' => '2024-01-15',
                            'description' => 'Join our core engineering team to build scalable supply chain solutions. You\'ll work with modern technologies including React, Node.js, and GraphQL.',
                            'skills' => ['React', 'Node.js', 'GraphQL', 'PostgreSQL', 'AWS', 'TypeScript'],
                            'isFeatured' => true,
                            'isUrgent' => false,
                            'image' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop'
                        ],
                        [
                            'id' => 'job-002',
                            'title' => 'Product Manager',
                            'department' => 'product',
                            'level' => 'mid',
                            'region' => 'north-america',
                            'remoteType' => 'remote-first',
                            'salary' => '$120k - $160k',
                            'postedDate' => 'Jan 10',
                            'postedDateRaw' => '2024-01-10',
                            'description' => 'Lead product strategy for our supply chain optimization suite. Work closely with customers and engineering to deliver impactful features.',
                            'skills' => ['Product Strategy', 'Data Analysis', 'User Research', 'Agile', 'Communication'],
                            'isFeatured' => false,
                            'isUrgent' => false,
                            'image' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=500&fit=crop'
                        ],
                        [
                            'id' => 'job-003',
                            'title' => 'UX/UI Designer',
                            'department' => 'design',
                            'level' => 'mid',
                            'region' => 'europe',
                            'remoteType' => 'fully-remote',
                            'salary' => '$90k - $130k',
                            'postedDate' => 'Jan 8',
                            'postedDateRaw' => '2024-01-08',
                            'description' => 'Design intuitive user experiences for our supply chain platform. Work alongside product managers and engineers.',
                            'skills' => ['Figma', 'UI/UX Design', 'Prototyping', 'User Research', 'Design Systems'],
                            'isFeatured' => false,
                            'isUrgent' => true,
                            'image' => 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=500&fit=crop'
                        ],
                        [
                            'id' => 'job-004',
                            'title' => 'Content Marketing Specialist',
                            'department' => 'marketing',
                            'level' => 'entry',
                            'region' => 'global',
                            'remoteType' => 'fully-remote',
                            'salary' => '$60k - $80k',
                            'postedDate' => 'Jan 12',
                            'postedDateRaw' => '2024-01-12',
                            'description' => 'Create engaging content for our blog, social media, and email campaigns.',
                            'skills' => ['Content Writing', 'SEO', 'Social Media', 'Email Marketing'],
                            'isFeatured' => false,
                            'isUrgent' => false,
                            'image' => 'https://images.unsplash.com/photo-1557838923-2985c318be48?w=800&h=500&fit=crop'
                        ],
                        [
                            'id' => 'job-005',
                            'title' => 'Enterprise Sales Representative',
                            'department' => 'sales',
                            'level' => 'senior',
                            'region' => 'north-america',
                            'remoteType' => 'timezone-specific',
                            'salary' => '$100k - $150k + Commission',
                            'postedDate' => 'Jan 5',
                            'postedDateRaw' => '2024-01-05',
                            'description' => 'Drive enterprise sales and build relationships with Fortune 500 companies.',
                            'skills' => ['Enterprise Sales', 'SaaS', 'Negotiation', 'CRM', 'Account Management'],
                            'isFeatured' => false,
                            'isUrgent' => true,
                            'image' => 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=800&h=500&fit=crop'
                        ],
                        [
                            'id' => 'job-006',
                            'title' => 'Customer Success Manager',
                            'department' => 'customer-success',
                            'level' => 'mid',
                            'region' => 'asia-pacific',
                            'remoteType' => 'flexible',
                            'salary' => '$70k - $100k',
                            'postedDate' => 'Jan 3',
                            'postedDateRaw' => '2024-01-03',
                            'description' => 'Ensure customer success and adoption of our platform.',
                            'skills' => ['Customer Success', 'Account Management', 'Problem Solving', 'Communication'],
                            'isFeatured' => false,
                            'isUrgent' => false,
                            'image' => 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=500&fit=crop'
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 523,
                'section_key' => 'remoteOpportunities',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => 'Remote Opportunities',
                    'title' => [
                        'prefix' => 'Work from',
                        'highlight' => 'Anywhere'
                    ],
                    'description' => 'Join our fully remote team and build your career from anywhere in the world. We\'re hiring across multiple departments and time zones.',
                    'heroImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=500&fit=crop',
                    'stats' => [
                        ['value' => '100%', 'label' => 'Remote-First', 'icon' => 'wifi'],
                        ['value' => '25+', 'label' => 'Countries', 'icon' => 'globe'],
                        ['value' => '40+', 'label' => 'Open Roles', 'icon' => 'briefcase'],
                        ['value' => '4.9', 'label' => 'Employee Rating', 'icon' => 'star']
                    ],
                    'autoPlayCarousel' => true,
                    'departments' => [
                        ['id' => 'all', 'label' => 'All Departments', 'icon' => 'users'],
                        ['id' => 'engineering', 'label' => 'Engineering', 'icon' => 'code'],
                        ['id' => 'product', 'label' => 'Product', 'icon' => 'briefcase'],
                        ['id' => 'design', 'label' => 'Design', 'icon' => 'template'],
                        ['id' => 'marketing', 'label' => 'Marketing', 'icon' => 'chart'],
                        ['id' => 'sales', 'label' => 'Sales', 'icon' => 'briefcase'],
                        ['id' => 'customer-success', 'label' => 'Customer Success', 'icon' => 'users']
                    ],
                    'regions' => [
                        ['id' => 'all', 'label' => 'All Regions', 'flag' => '🌐'],
                        ['id' => 'north-america', 'label' => 'North America', 'flag' => '🇺🇸'],
                        ['id' => 'europe', 'label' => 'Europe', 'flag' => '🇪🇺'],
                        ['id' => 'asia-pacific', 'label' => 'Asia Pacific', 'flag' => '🌏'],
                        ['id' => 'latin-america', 'label' => 'Latin America', 'flag' => '🌎'],
                        ['id' => 'global', 'label' => 'Global', 'flag' => '🌍']
                    ],
                    'remoteStories' => [
                        [
                            'name' => 'Sarah Johnson',
                            'role' => 'Senior Software Engineer',
                            'region' => 'north-america',
                            'yearsRemote' => 4,
                            'quote' => 'Working remotely has given me the freedom to design my day around my peak productivity hours. I\'ve never been more focused or fulfilled in my career.',
                            'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
                            'image' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop'
                        ],
                        [
                            'name' => 'Marcus Chen',
                            'role' => 'Product Manager',
                            'region' => 'asia-pacific',
                            'yearsRemote' => 3,
                            'quote' => 'Being able to work from Bali while collaborating with a global team has been life-changing. The flexibility and trust from the company are unmatched.',
                            'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
                            'image' => 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600&h=400&fit=crop'
                        ],
                        [
                            'name' => 'Elena Rodriguez',
                            'role' => 'Marketing Lead',
                            'region' => 'europe',
                            'yearsRemote' => 5,
                            'quote' => 'Remote work allows me to be present for my family while still growing my career. The work-life balance is incredible.',
                            'avatar' => 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
                            'image' => 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=400&fit=crop'
                        ]
                    ],
                    'jobs' => [
                        [
                            'id' => 'job-001',
                            'title' => 'Senior Full Stack Engineer',
                            'department' => 'engineering',
                            'level' => 'senior',
                            'region' => 'global',
                            'remoteType' => 'fully-remote',
                            'salary' => '$150k - $200k',
                            'postedDate' => 'Jan 15',
                            'description' => 'Join our core engineering team to build scalable supply chain solutions. You\'ll work with modern technologies including React, Node.js, and GraphQL.',
                            'skills' => ['React', 'Node.js', 'GraphQL', 'PostgreSQL', 'AWS', 'TypeScript'],
                            'isFeatured' => true,
                            'isUrgent' => false,
                            'image' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop'
                        ],
                        [
                            'id' => 'job-002',
                            'title' => 'Product Manager',
                            'department' => 'product',
                            'level' => 'mid',
                            'region' => 'north-america',
                            'remoteType' => 'remote-first',
                            'salary' => '$120k - $160k',
                            'postedDate' => 'Jan 10',
                            'description' => 'Lead product strategy for our supply chain optimization suite. Work closely with customers and engineering.',
                            'skills' => ['Product Strategy', 'Data Analysis', 'User Research', 'Agile', 'Communication'],
                            'isFeatured' => false,
                            'isUrgent' => false,
                            'image' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=500&fit=crop'
                        ],
                        [
                            'id' => 'job-003',
                            'title' => 'UX/UI Designer',
                            'department' => 'design',
                            'level' => 'mid',
                            'region' => 'europe',
                            'remoteType' => 'fully-remote',
                            'salary' => '$90k - $130k',
                            'postedDate' => 'Jan 8',
                            'description' => 'Design intuitive user experiences for our supply chain platform.',
                            'skills' => ['Figma', 'UI/UX Design', 'Prototyping', 'User Research', 'Design Systems'],
                            'isFeatured' => false,
                            'isUrgent' => true,
                            'image' => 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=500&fit=crop'
                        ],
                        [
                            'id' => 'job-004',
                            'title' => 'Content Marketing Specialist',
                            'department' => 'marketing',
                            'level' => 'entry',
                            'region' => 'global',
                            'remoteType' => 'fully-remote',
                            'salary' => '$60k - $80k',
                            'postedDate' => 'Jan 12',
                            'description' => 'Create engaging content for our blog, social media, and email campaigns.',
                            'skills' => ['Content Writing', 'SEO', 'Social Media', 'Email Marketing'],
                            'isFeatured' => false,
                            'isUrgent' => false,
                            'image' => 'https://images.unsplash.com/photo-1557838923-2985c318be48?w=800&h=500&fit=crop'
                        ],
                        [
                            'id' => 'job-005',
                            'title' => 'Enterprise Sales Representative',
                            'department' => 'sales',
                            'level' => 'senior',
                            'region' => 'north-america',
                            'remoteType' => 'timezone-specific',
                            'salary' => '$100k - $150k + Commission',
                            'postedDate' => 'Jan 5',
                            'description' => 'Drive enterprise sales and build relationships with Fortune 500 companies.',
                            'skills' => ['Enterprise Sales', 'SaaS', 'Negotiation', 'CRM', 'Account Management'],
                            'isFeatured' => false,
                            'isUrgent' => true,
                            'image' => 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=800&h=500&fit=crop'
                        ],
                        [
                            'id' => 'job-006',
                            'title' => 'Customer Success Manager',
                            'department' => 'customer-success',
                            'level' => 'mid',
                            'region' => 'asia-pacific',
                            'remoteType' => 'flexible',
                            'salary' => '$70k - $100k',
                            'postedDate' => 'Jan 3',
                            'description' => 'Ensure customer success and adoption of our platform.',
                            'skills' => ['Customer Success', 'Account Management', 'Problem Solving', 'Communication'],
                            'isFeatured' => false,
                            'isUrgent' => false,
                            'image' => 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=500&fit=crop'
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 524,
                'section_key' => 'remoteOpportunities',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Application Process Section 
            [
                'id' => 525,
                'section_key' => 'applicationProcess',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => 'Application Process',
                    'title' => [
                        'prefix' => 'Your Journey to',
                        'highlight' => 'Joining Us',
                        'suffix' => ''
                    ],
                    'description' => 'We\'ve designed a transparent and supportive application process to help you showcase your best self. Here\'s what to expect when you apply.',
                    'heroImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=500&fit=crop',
                    'stats' => [
                        ['value' => '2-4', 'label' => 'Weeks to Offer', 'icon' => 'clock'],
                        ['value' => '95%', 'label' => 'Candidate Satisfaction', 'icon' => 'star'],
                        ['value' => '24h', 'label' => 'Response Time', 'icon' => 'bolt'],
                        ['value' => '5', 'label' => 'Steps to Join', 'icon' => 'check']
                    ],
                    'stepsTitle' => 'How to Apply',
                    'steps' => [
                        [
                            'id' => 1,
                            'title' => 'Submit Application',
                            'description' => 'Complete the online application form with your resume and cover letter.',
                            'icon' => 'document',
                            'duration' => '15-20 min',
                            'tips' => ['Tailor your resume to the role', 'Highlight relevant experience', 'Proofread before submitting'],
                            'image' => 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 2,
                            'title' => 'Initial Screening',
                            'description' => 'Recruiting team reviews applications and reaches out to qualified candidates.',
                            'icon' => 'users',
                            'duration' => '3-5 business days',
                            'tips' => ['Check your email regularly', 'Be ready to discuss your background', 'Prepare questions about the role'],
                            'image' => 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 3,
                            'title' => 'Technical Assessment',
                            'description' => 'Complete a skills assessment or technical challenge relevant to the role.',
                            'icon' => 'code',
                            'duration' => '2-4 hours',
                            'tips' => ['Review core concepts', 'Practice problem-solving', 'Show your thought process'],
                            'image' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 4,
                            'title' => 'Team Interviews',
                            'description' => 'Meet with hiring manager and potential team members to discuss fit and culture.',
                            'icon' => 'chat',
                            'duration' => '2-3 rounds',
                            'tips' => ['Research the company', 'Prepare examples of your work', 'Ask thoughtful questions'],
                            'image' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 5,
                            'title' => 'Offer & Onboarding',
                            'description' => 'Receive offer and begin the onboarding process to join the team.',
                            'icon' => 'gift',
                            'duration' => '1-2 weeks',
                            'tips' => ['Review offer details', 'Complete onboarding paperwork', 'Connect with your new team'],
                            'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                        ]
                    ],
                    'tipsTitle' => 'Tips for Success',
                    'tips' => [
                        ['title' => 'Research the Company', 'description' => 'Understand our mission, values, and products before your interview.', 'icon' => 'globe', 'image' => 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&h=400&fit=crop'],
                        ['title' => 'Show Your Impact', 'description' => 'Use specific examples and metrics to demonstrate your achievements.', 'icon' => 'chart', 'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'],
                        ['title' => 'Ask Questions', 'description' => 'Prepare thoughtful questions about the role, team, and company culture.', 'icon' => 'chat', 'image' => 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=600&h=400&fit=crop'],
                        ['title' => 'Be Authentic', 'description' => 'Be yourself and share what makes you unique as a candidate.', 'icon' => 'heart', 'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop']
                    ],
                    'faqTitle' => 'Frequently Asked Questions',
                    'faqs' => [
                        [
                            'question' => 'How long does the application process typically take?',
                            'answer' => 'The entire process usually takes 2-4 weeks from application to offer, depending on the role and number of candidates.'
                        ],
                        [
                            'question' => 'What should I include in my resume?',
                            'answer' => 'Include relevant work experience, projects, technical skills, and any accomplishments that demonstrate your impact. Tailor it to the specific role you\'re applying for.'
                        ],
                        [
                            'question' => 'Do you provide feedback for rejected applications?',
                            'answer' => 'Due to the volume of applications, we\'re unable to provide individual feedback for all candidates. However, candidates who advance to interviews will receive detailed feedback.'
                        ],
                        [
                            'question' => 'Can I apply for multiple positions?',
                            'answer' => 'Yes, you can apply for multiple positions that match your skills and experience. We recommend focusing on roles where you\'re most qualified.'
                        ]
                    ],
                    'formTitle' => 'Start Your Application',
                    'formDescription' => 'Ready to join us? Complete the form below to begin your application journey.',
                    'formImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 526,
                'section_key' => 'applicationProcess',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => 'Application Process',
                    'title' => [
                        'prefix' => 'Your Journey to',
                        'highlight' => 'Joining Us'
                    ],
                    'description' => 'We\'ve designed a transparent and supportive application process to help you showcase your best self. Here\'s what to expect when you apply.',
                    'heroImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=500&fit=crop',
                    'stats' => [
                        ['value' => '2-4', 'label' => 'Weeks to Offer', 'icon' => 'clock', 'trend' => 'Fast', 'trendUp' => true],
                        ['value' => '95%', 'label' => 'Candidate Satisfaction', 'icon' => 'star', 'trend' => '+5%', 'trendUp' => true],
                        ['value' => '24h', 'label' => 'Response Time', 'icon' => 'bolt', 'trend' => 'Average', 'trendUp' => true],
                        ['value' => '85%', 'label' => 'Offer Acceptance', 'icon' => 'check', 'trend' => '+10%', 'trendUp' => true]
                    ],
                    'steps' => [
                        [
                            'id' => 1,
                            'title' => 'Submit Application',
                            'description' => 'Complete the online application form with your resume and cover letter.',
                            'icon' => 'document',
                            'duration' => '15-20 min',
                            'tips' => ['Tailor your resume to the role', 'Highlight relevant experience', 'Proofread before submitting'],
                            'checklist' => ['Resume uploaded', 'Cover letter attached', 'Portfolio link added'],
                            'image' => 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 2,
                            'title' => 'Initial Screening',
                            'description' => 'Recruiting team reviews applications and reaches out to qualified candidates.',
                            'icon' => 'users',
                            'duration' => '3-5 business days',
                            'tips' => ['Check your email regularly', 'Be ready to discuss your background', 'Prepare questions about the role'],
                            'checklist' => ['Application reviewed', 'Screening call scheduled', 'Availability confirmed'],
                            'image' => 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 3,
                            'title' => 'Technical Assessment',
                            'description' => 'Complete a skills assessment or technical challenge relevant to the role.',
                            'icon' => 'code',
                            'duration' => '2-4 hours',
                            'tips' => ['Review core concepts', 'Practice problem-solving', 'Show your thought process'],
                            'checklist' => ['Assessment invitation received', 'Assessment completed', 'Results reviewed'],
                            'image' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 4,
                            'title' => 'Team Interviews',
                            'description' => 'Meet with hiring manager and potential team members to discuss fit and culture.',
                            'icon' => 'chat',
                            'duration' => '2-3 rounds',
                            'tips' => ['Research the company', 'Prepare examples of your work', 'Ask thoughtful questions'],
                            'checklist' => ['Interview scheduled', 'Interview completed', 'Feedback collected'],
                            'image' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 5,
                            'title' => 'Offer & Onboarding',
                            'description' => 'Receive offer and begin the onboarding process to join the team.',
                            'icon' => 'gift',
                            'duration' => '1-2 weeks',
                            'tips' => ['Review offer details', 'Complete onboarding paperwork', 'Connect with your new team'],
                            'checklist' => ['Offer extended', 'Offer accepted', 'Onboarding started'],
                            'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                        ]
                    ],
                    'resources' => [
                        ['title' => 'Resume Writing Guide', 'description' => 'Tips for crafting an effective resume', 'icon' => 'document', 'link' => '/resources/resume-guide', 'image' => 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop'],
                        ['title' => 'Interview Preparation', 'description' => 'Common questions and how to prepare', 'icon' => 'chat', 'link' => '/resources/interview-prep', 'image' => 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=600&h=400&fit=crop'],
                        ['title' => 'Portfolio Best Practices', 'description' => 'Showcase your work effectively', 'icon' => 'template', 'link' => '/resources/portfolio-guide', 'image' => 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&h=400&fit=crop'],
                        ['title' => 'Company Culture Guide', 'description' => 'Learn about our values and culture', 'icon' => 'heart', 'link' => '/resources/culture-guide', 'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop']
                    ],
                    'faqTitle' => 'Frequently Asked Questions',
                    'faqs' => [
                        [
                            'question' => 'How long does the application process typically take?',
                            'answer' => 'The entire process usually takes 2-4 weeks from application to offer, depending on the role and number of candidates. We aim to provide timely updates at each stage.'
                        ],
                        [
                            'question' => 'What should I include in my resume?',
                            'answer' => 'Include relevant work experience, projects, technical skills, and any accomplishments that demonstrate your impact. Use metrics where possible to quantify your achievements. Tailor it to the specific role you\'re applying for.'
                        ],
                        [
                            'question' => 'Do you provide feedback for rejected applications?',
                            'answer' => 'Due to the volume of applications, we\'re unable to provide individual feedback for all candidates. However, candidates who advance to interviews will receive detailed feedback to help with future opportunities.'
                        ],
                        [
                            'question' => 'Can I apply for multiple positions?',
                            'answer' => 'Yes, you can apply for multiple positions that match your skills and experience. We recommend focusing on roles where you\'re most qualified and customizing your application for each.'
                        ],
                        [
                            'question' => 'What happens after I submit my application?',
                            'answer' => 'You\'ll receive a confirmation email immediately. Our recruiting team will review your application within 3-5 business days. If there\'s a match, you\'ll be contacted for an initial screening call.'
                        ],
                        [
                            'question' => 'Do you offer remote positions?',
                            'answer' => 'Yes! We\'re a remote-first company with team members across the globe. Most of our roles are fully remote, with some requiring timezone alignment for collaboration.'
                        ]
                    ],
                    'positions' => ['Software Engineer', 'Product Manager', 'Data Scientist', 'UX Designer', 'Marketing Manager', 'Sales Representative', 'Customer Success Manager', 'DevOps Engineer'],
                    'formTitle' => 'Start Your Application',
                    'formDescription' => 'Ready to join us? Complete the form below to begin your application journey.',
                    'formImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 527,
                'section_key' => 'applicationProcess',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => 'Application Process',
                    'title' => [
                        'prefix' => 'Your Journey to',
                        'highlight' => 'Joining Us'
                    ],
                    'description' => 'We\'ve designed a transparent and supportive application process to help you showcase your best self. Here\'s what to expect when you apply.',
                    'heroImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=500&fit=crop',
                    'stats' => [
                        ['value' => '2-4', 'label' => 'Weeks to Offer', 'icon' => 'clock', 'trend' => 'Fast', 'trendUp' => true],
                        ['value' => '95%', 'label' => 'Candidate Satisfaction', 'icon' => 'star', 'trend' => '+5%', 'trendUp' => true],
                        ['value' => '24h', 'label' => 'Response Time', 'icon' => 'bolt', 'trend' => 'Average', 'trendUp' => true],
                        ['value' => '85%', 'label' => 'Offer Acceptance', 'icon' => 'check', 'trend' => '+10%', 'trendUp' => true]
                    ],
                    'autoPlayCarousel' => true,
                    'steps' => [
                        [
                            'id' => 1,
                            'title' => 'Submit Application',
                            'description' => 'Complete the online application form with your resume and cover letter.',
                            'icon' => 'document',
                            'duration' => '15-20 min',
                            'tips' => ['Tailor your resume to the role', 'Highlight relevant experience', 'Proofread before submitting'],
                            'checklist' => ['Resume uploaded', 'Cover letter attached', 'Portfolio link added'],
                            'image' => 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 2,
                            'title' => 'Initial Screening',
                            'description' => 'Recruiting team reviews applications and reaches out to qualified candidates.',
                            'icon' => 'users',
                            'duration' => '3-5 business days',
                            'tips' => ['Check your email regularly', 'Be ready to discuss your background', 'Prepare questions about the role'],
                            'checklist' => ['Application reviewed', 'Screening call scheduled', 'Availability confirmed'],
                            'image' => 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 3,
                            'title' => 'Technical Assessment',
                            'description' => 'Complete a skills assessment or technical challenge relevant to the role.',
                            'icon' => 'code',
                            'duration' => '2-4 hours',
                            'tips' => ['Review core concepts', 'Practice problem-solving', 'Show your thought process'],
                            'checklist' => ['Assessment invitation received', 'Assessment completed', 'Results reviewed'],
                            'image' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 4,
                            'title' => 'Team Interviews',
                            'description' => 'Meet with hiring manager and potential team members to discuss fit and culture.',
                            'icon' => 'chat',
                            'duration' => '2-3 rounds',
                            'tips' => ['Research the company', 'Prepare examples of your work', 'Ask thoughtful questions'],
                            'checklist' => ['Interview scheduled', 'Interview completed', 'Feedback collected'],
                            'image' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 5,
                            'title' => 'Offer & Onboarding',
                            'description' => 'Receive offer and begin the onboarding process to join the team.',
                            'icon' => 'gift',
                            'duration' => '1-2 weeks',
                            'tips' => ['Review offer details', 'Complete onboarding paperwork', 'Connect with your new team'],
                            'checklist' => ['Offer extended', 'Offer accepted', 'Onboarding started'],
                            'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                        ]
                    ],
                    'candidateStories' => [
                        [
                            'name' => 'Sarah Johnson',
                            'role' => 'Senior Software Engineer',
                            'hireDate' => 'March 2024',
                            'processDuration' => '3 weeks',
                            'quote' => 'The application process was transparent and efficient. I received regular updates and felt supported throughout.',
                            'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
                            'tags' => ['Engineering', 'Remote'],
                            'image' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop'
                        ],
                        [
                            'name' => 'Michael Chen',
                            'role' => 'Product Manager',
                            'hireDate' => 'February 2024',
                            'processDuration' => '4 weeks',
                            'quote' => 'The team interviews were engaging and gave me great insight into the company culture. I knew this was the right place for me.',
                            'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
                            'tags' => ['Product', 'Remote'],
                            'image' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop'
                        ],
                        [
                            'name' => 'Emily Rodriguez',
                            'role' => 'UX Designer',
                            'hireDate' => 'January 2024',
                            'processDuration' => '2.5 weeks',
                            'quote' => 'The technical assessment was well-designed and relevant to the actual work I\'d be doing. Great experience overall!',
                            'avatar' => 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
                            'tags' => ['Design', 'Creative'],
                            'image' => 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&h=400&fit=crop'
                        ]
                    ],
                    'resources' => [
                        ['title' => 'Resume Writing Guide', 'description' => 'Tips for crafting an effective resume', 'icon' => 'document', 'link' => '/resources/resume-guide', 'image' => 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop'],
                        ['title' => 'Interview Preparation', 'description' => 'Common questions and how to prepare', 'icon' => 'chat', 'link' => '/resources/interview-prep', 'image' => 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=600&h=400&fit=crop'],
                        ['title' => 'Portfolio Best Practices', 'description' => 'Showcase your work effectively', 'icon' => 'template', 'link' => '/resources/portfolio-guide', 'image' => 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&h=400&fit=crop'],
                        ['title' => 'Company Culture Guide', 'description' => 'Learn about our values and culture', 'icon' => 'heart', 'link' => '/resources/culture-guide', 'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop']
                    ],
                    'faqTitle' => 'Frequently Asked Questions',
                    'faqs' => [
                        [
                            'question' => 'How long does the application process typically take?',
                            'answer' => 'The entire process usually takes 2-4 weeks from application to offer, depending on the role and number of candidates.'
                        ],
                        [
                            'question' => 'What should I include in my resume?',
                            'answer' => 'Include relevant work experience, projects, technical skills, and any accomplishments that demonstrate your impact.'
                        ],
                        [
                            'question' => 'Do you provide feedback for rejected applications?',
                            'answer' => 'Candidates who advance to interviews will receive detailed feedback to help with future opportunities.'
                        ],
                        [
                            'question' => 'Can I apply for multiple positions?',
                            'answer' => 'Yes, you can apply for multiple positions that match your skills and experience.'
                        ]
                    ],
                    'positions' => ['Software Engineer', 'Product Manager', 'Data Scientist', 'UX Designer', 'Marketing Manager', 'Sales Representative', 'Customer Success Manager', 'DevOps Engineer'],
                    'formTitle' => 'Start Your Application',
                    'formDescription' => 'Complete the form below to begin your journey with us.',
                    'formImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 528,
                'section_key' => 'applicationProcess',
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
