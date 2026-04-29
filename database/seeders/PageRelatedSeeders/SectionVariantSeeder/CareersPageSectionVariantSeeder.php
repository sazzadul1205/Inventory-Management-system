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
        ];

        // Add the new Services variants
        DB::table('section_variants')->upsert(
            $variants,
            ['section_key', 'variant'],
            ['config', 'updated_at']
        );
    }
}
