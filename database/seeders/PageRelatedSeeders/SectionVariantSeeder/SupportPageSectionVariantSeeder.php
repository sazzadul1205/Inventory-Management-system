<?php

namespace Database\Seeders\PageRelatedSeeders\SectionVariantSeeder;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SupportPageSectionVariantSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Upsert only this page's variants so other page seeders do not get wiped out.
        $variants = [
            // Help Center Variants
            [
                'id' => 645,
                'section_key' => 'helpCenter',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => 'Support Center',
                    'title' => [
                        'prefix' => 'How Can We',
                        'highlight' => 'Help You',
                        'suffix' => '?'
                    ],
                    'description' => 'Find answers to common questions, browse documentation, or contact our support team. We\'re here to help you succeed.',
                    'stats' => [
                        ['icon' => 'articles', 'value' => '250+', 'label' => 'Help Articles'],
                        ['icon' => 'users', 'value' => '98%', 'label' => 'Satisfied Users'],
                        ['icon' => 'clock', 'value' => '< 2h', 'label' => 'Avg Response Time'],
                        ['icon' => 'check', 'value' => '95%', 'label' => 'Resolution Rate']
                    ],
                    'faqs' => [
                        [
                            'id' => 1,
                            'question' => 'How do I get started with the platform?',
                            'answer' => 'To get started, sign up for an account, complete your profile, and explore our onboarding tutorial. Our getting started guide will walk you through the key features.',
                            'category' => 'getting-started',
                            'tags' => ['onboarding', 'setup', 'tutorial']
                        ],
                        [
                            'id' => 2,
                            'question' => 'What are the pricing plans available?',
                            'answer' => 'We offer three plans: Basic ($49/mo), Professional ($99/mo), and Enterprise (custom pricing). Each plan includes different features and support levels.',
                            'category' => 'account',
                            'tags' => ['pricing', 'billing', 'plans']
                        ],
                        [
                            'id' => 3,
                            'question' => 'How do I reset my password?',
                            'answer' => 'Click on \'Forgot Password\' on the login page. You\'ll receive an email with a secure link to reset your password.',
                            'category' => 'account',
                            'tags' => ['password', 'security', 'login']
                        ],
                        [
                            'id' => 4,
                            'question' => 'Can I integrate with third-party applications?',
                            'answer' => 'Yes, we offer REST APIs and pre-built integrations with popular tools like Salesforce, SAP, Oracle, and Microsoft Dynamics.',
                            'category' => 'features',
                            'tags' => ['api', 'integration', 'third-party']
                        ],
                        [
                            'id' => 5,
                            'question' => 'What should I do if I encounter an error?',
                            'answer' => 'First, try refreshing your browser and clearing cache. If the issue persists, contact support with screenshots and error details.',
                            'category' => 'troubleshooting',
                            'tags' => ['error', 'debug', 'support']
                        ],
                        [
                            'id' => 6,
                            'question' => 'Is my data secure?',
                            'answer' => 'Yes, we use enterprise-grade encryption (AES-256) for data at rest and TLS 1.3 for data in transit. We are SOC 2 Type II compliant.',
                            'category' => 'security',
                            'tags' => ['security', 'encryption', 'compliance']
                        ]
                    ],
                    'popularArticles' => [
                        ['title' => 'Getting Started Guide: First 30 Days'],
                        ['title' => 'Understanding Dashboard Analytics'],
                        ['title' => 'Setting Up Team Permissions'],
                        ['title' => 'Exporting Reports & Data']
                    ],
                    'videoTutorials' => [
                        [
                            'title' => 'Platform Overview & Key Features',
                            'thumbnail' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=225&fit=crop',
                            'duration' => '5:23'
                        ],
                        [
                            'title' => 'Setting Up Your First Workflow',
                            'thumbnail' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=225&fit=crop',
                            'duration' => '8:15'
                        ],
                        [
                            'title' => 'Advanced Analytics & Reporting',
                            'thumbnail' => 'https://images.unsplash.com/photo-1551434678-e076c2236a4e?w=400&h=225&fit=crop',
                            'duration' => '12:47'
                        ]
                    ],
                    'contactInfo' => [
                        'email' => 'support@supplychainpro.com',
                        'phone' => '+1 (800) 555-0123',
                        'chat' => 'Available 24/7',
                        'hours' => 'Mon-Fri, 9am-6pm EST'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 646,
                'section_key' => 'helpCenter',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => 'Help Center',
                    'title' => [
                        'prefix' => 'Welcome to the',
                        'highlight' => 'Help Center'
                    ],
                    'description' => 'Find answers, browse guides, or connect with our support team. We\'re here to help you succeed.',
                    'stats' => [
                        ['icon' => 'articles', 'value' => '250+', 'label' => 'Help Articles'],
                        ['icon' => 'users', 'value' => '98%', 'label' => 'Customer Satisfaction'],
                        ['icon' => 'clock', 'value' => '< 2h', 'label' => 'Avg Response Time'],
                        ['icon' => 'check', 'value' => '95%', 'label' => 'Resolution Rate']
                    ],
                    'faqs' => [
                        [
                            'id' => 1,
                            'question' => 'How do I get started with the platform?',
                            'answer' => 'To get started, sign up for an account, complete your profile, and explore our onboarding tutorial. Our getting started guide will walk you through the key features.',
                            'category' => 'getting-started',
                            'tags' => ['onboarding', 'setup', 'tutorial']
                        ],
                        [
                            'id' => 2,
                            'question' => 'What are the pricing plans available?',
                            'answer' => 'We offer three plans: Basic ($49/mo), Professional ($99/mo), and Enterprise (custom pricing). Each plan includes different features and support levels.',
                            'category' => 'account',
                            'tags' => ['pricing', 'billing', 'plans']
                        ],
                        [
                            'id' => 3,
                            'question' => 'How do I reset my password?',
                            'answer' => 'Click on \'Forgot Password\' on the login page. You\'ll receive an email with a secure link to reset your password.',
                            'category' => 'account',
                            'tags' => ['password', 'security', 'login']
                        ],
                        [
                            'id' => 4,
                            'question' => 'Can I integrate with third-party applications?',
                            'answer' => 'Yes, we offer REST APIs and pre-built integrations with popular tools like Salesforce, SAP, Oracle, and Microsoft Dynamics.',
                            'category' => 'features',
                            'tags' => ['api', 'integration', 'third-party']
                        ],
                        [
                            'id' => 5,
                            'question' => 'What should I do if I encounter an error?',
                            'answer' => 'First, try refreshing your browser and clearing cache. If the issue persists, contact support with screenshots and error details.',
                            'category' => 'troubleshooting',
                            'tags' => ['error', 'debug', 'support']
                        ],
                        [
                            'id' => 6,
                            'question' => 'Is my data secure?',
                            'answer' => 'Yes, we use enterprise-grade encryption (AES-256) for data at rest and TLS 1.3 for data in transit. We are SOC 2 Type II compliant.',
                            'category' => 'security',
                            'tags' => ['security', 'encryption', 'compliance']
                        ]
                    ],
                    'knowledgeBase' => [
                        [
                            'id' => 1,
                            'title' => 'Getting Started: Platform Overview',
                            'description' => 'Learn the basics of navigating and using the Supply Chain Pro platform.',
                            'content' => 'This article covers the main dashboard, navigation menus, and key features...',
                            'category' => 'getting-started',
                            'tags' => ['overview', 'basics'],
                            'updatedAt' => 'Jan 15, 2024'
                        ],
                        [
                            'id' => 2,
                            'title' => 'Setting Up User Roles and Permissions',
                            'description' => 'Configure team access with customizable role-based permissions.',
                            'content' => 'Administrators can assign roles such as Admin, Manager, Viewer...',
                            'category' => 'account',
                            'tags' => ['roles', 'permissions', 'team'],
                            'updatedAt' => 'Jan 20, 2024'
                        ],
                        [
                            'id' => 3,
                            'title' => 'Best Practices for Data Import',
                            'description' => 'Tips for bulk importing your supply chain data efficiently.',
                            'content' => 'Supported formats include CSV, Excel, and JSON. Maximum file size is 100MB...',
                            'category' => 'features',
                            'tags' => ['data', 'import', 'csv'],
                            'updatedAt' => 'Feb 1, 2024'
                        ]
                    ],
                    'guides' => [
                        [
                            'id' => 1,
                            'title' => 'Complete Platform Walkthrough',
                            'description' => 'A comprehensive guide to all platform features and capabilities.',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=340&fit=crop',
                            'duration' => '15 min',
                            'level' => 'Beginner'
                        ],
                        [
                            'id' => 2,
                            'title' => 'Mastering Analytics Dashboard',
                            'description' => 'Learn how to interpret and use data analytics for better decisions.',
                            'image' => 'https://images.unsplash.com/photo-1551434678-e076c2236a4e?w=600&h=340&fit=crop',
                            'duration' => '12 min',
                            'level' => 'Intermediate'
                        ],
                        [
                            'id' => 3,
                            'title' => 'Advanced Integration Setup',
                            'description' => 'Connect your existing systems with our API and pre-built connectors.',
                            'image' => 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=340&fit=crop',
                            'duration' => '20 min',
                            'level' => 'Advanced'
                        ]
                    ],
                    'contactInfo' => [
                        'email' => 'support@supplychainpro.com',
                        'phone' => '+1 (800) 555-0123',
                        'chat' => 'Available 24/7',
                        'hours' => 'Mon-Fri, 9am-6pm EST'
                    ],
                    'communityForums' => [
                        [
                            'id' => 1,
                            'title' => 'Welcome to the Community! Introduce yourself here',
                            'author' => 'Community Team',
                            'date' => '2024-01-01T00:00:00.000Z',
                            'replies' => 45,
                            'likes' => 128,
                            'isPinned' => true
                        ],
                        [
                            'id' => 2,
                            'title' => 'Best practices for demand forecasting?',
                            'author' => 'Sarah Johnson',
                            'date' => '2024-01-15T00:00:00.000Z',
                            'replies' => 12,
                            'likes' => 34,
                            'isPinned' => false
                        ],
                        [
                            'id' => 3,
                            'title' => 'Integration with ERP systems - success stories',
                            'author' => 'Michael Chen',
                            'date' => '2024-01-20T00:00:00.000Z',
                            'replies' => 8,
                            'likes' => 22,
                            'isPinned' => false
                        ],
                        [
                            'id' => 4,
                            'title' => 'Tips for reducing supply chain costs',
                            'author' => 'Emily Rodriguez',
                            'date' => '2024-01-25T00:00:00.000Z',
                            'replies' => 19,
                            'likes' => 56,
                            'isPinned' => false
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 647,
                'section_key' => 'helpCenter',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => 'AI-Powered Support',
                    'title' => [
                        'prefix' => 'Intelligent',
                        'highlight' => 'Support Center'
                    ],
                    'description' => 'AI-powered support with intelligent chatbot, knowledge graph, ticket analytics, and proactive assistance. Get help faster than ever before.',
                    'contactInfo' => [
                        'email' => 'support@supplychainpro.com',
                        'phone' => '+1 (800) 555-0123',
                        'chat' => 'Available 24/7',
                        'hours' => 'Mon-Fri, 9am-6pm EST'
                    ],
                    'faqs' => [
                        [
                            'id' => 1,
                            'question' => 'How do I get started with the platform?',
                            'answer' => 'To get started, sign up for an account, complete your profile, and explore our onboarding tutorial. Our getting started guide will walk you through the key features.',
                            'category' => 'getting-started',
                            'tags' => ['onboarding', 'setup', 'tutorial']
                        ],
                        [
                            'id' => 2,
                            'question' => 'What are the pricing plans available?',
                            'answer' => 'We offer three plans: Basic ($49/mo), Professional ($99/mo), and Enterprise (custom pricing). Each plan includes different features and support levels.',
                            'category' => 'account',
                            'tags' => ['pricing', 'billing', 'plans']
                        ],
                        [
                            'id' => 3,
                            'question' => 'How do I reset my password?',
                            'answer' => 'Click on \'Forgot Password\' on the login page. You\'ll receive an email with a secure link to reset your password.',
                            'category' => 'account',
                            'tags' => ['password', 'security', 'login']
                        ],
                        [
                            'id' => 4,
                            'question' => 'Can I integrate with third-party applications?',
                            'answer' => 'Yes, we offer REST APIs and pre-built integrations with popular tools like Salesforce, SAP, Oracle, and Microsoft Dynamics.',
                            'category' => 'features',
                            'tags' => ['api', 'integration', 'third-party']
                        ],
                        [
                            'id' => 5,
                            'question' => 'What should I do if I encounter an error?',
                            'answer' => 'First, try refreshing your browser and clearing cache. If the issue persists, contact support with screenshots and error details.',
                            'category' => 'troubleshooting',
                            'tags' => ['error', 'debug', 'support']
                        ],
                        [
                            'id' => 6,
                            'question' => 'Is my data secure?',
                            'answer' => 'Yes, we use enterprise-grade encryption (AES-256) for data at rest and TLS 1.3 for data in transit. We are SOC 2 Type II compliant.',
                            'category' => 'security',
                            'tags' => ['security', 'encryption', 'compliance']
                        ]
                    ],
                    'knowledgeBase' => [
                        [
                            'id' => 1,
                            'title' => 'Getting Started: Platform Overview',
                            'description' => 'Learn the basics of navigating and using the Supply Chain Pro platform.',
                            'content' => 'This article covers the main dashboard, navigation menus, and key features...',
                            'category' => 'getting-started',
                            'tags' => ['overview', 'basics'],
                            'updatedAt' => 'Jan 15, 2024',
                            'views' => 1250
                        ],
                        [
                            'id' => 2,
                            'title' => 'Setting Up User Roles and Permissions',
                            'description' => 'Configure team access with customizable role-based permissions.',
                            'content' => 'Administrators can assign roles such as Admin, Manager, Viewer...',
                            'category' => 'account',
                            'tags' => ['roles', 'permissions', 'team'],
                            'updatedAt' => 'Jan 20, 2024',
                            'views' => 890
                        ],
                        [
                            'id' => 3,
                            'title' => 'Best Practices for Data Import',
                            'description' => 'Tips for bulk importing your supply chain data efficiently.',
                            'content' => 'Supported formats include CSV, Excel, and JSON. Maximum file size is 100MB...',
                            'category' => 'features',
                            'tags' => ['data', 'import', 'csv'],
                            'updatedAt' => 'Feb 1, 2024',
                            'views' => 2340
                        ]
                    ],
                    'tickets' => []
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 648,
                'section_key' => 'helpCenter',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Knowledge Base Variants
            [
                'id' => 649,
                'section_key' => 'knowledgeBase',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => 'Knowledge Base',
                    'title' => [
                        'prefix' => 'Browse Our',
                        'highlight' => 'Documentation'
                    ],
                    'description' => 'Find detailed guides, API references, and tutorials to help you make the most of our platform.',
                    'stats' => [
                        ['icon' => 'articles', 'value' => '150+', 'label' => 'Articles'],
                        ['icon' => 'categories', 'value' => '7', 'label' => 'Categories'],
                        ['icon' => 'authors', 'value' => '12', 'label' => 'Contributors'],
                        ['icon' => 'star', 'value' => '95%', 'label' => 'Satisfaction']
                    ],
                    'categories' => [
                        ['id' => 'getting-started', 'name' => 'Getting Started'],
                        ['id' => 'account-billing', 'name' => 'Account & Billing'],
                        ['id' => 'features', 'name' => 'Features'],
                        ['id' => 'troubleshooting', 'name' => 'Troubleshooting'],
                        ['id' => 'security', 'name' => 'Security'],
                        ['id' => 'integrations', 'name' => 'Integrations'],
                        ['id' => 'api', 'name' => 'API Reference']
                    ],
                    'featuredArticles' => [
                        [
                            'id' => 1,
                            'title' => 'Getting Started with Supply Chain Pro',
                            'description' => 'A comprehensive guide to setting up and using the Supply Chain Pro platform.',
                            'content' => '<p>Welcome to Supply Chain Pro! This guide will help you get started with the platform.</p><h2>Step 1: Create Your Account</h2><p>Sign up for an account using your work email address.</p><h2>Step 2: Complete Your Profile</h2><p>Add your company information and role details.</p><h2>Step 3: Explore the Dashboard</h2><p>Familiarize yourself with the main dashboard and navigation menus.</p>',
                            'category' => 'getting-started',
                            'readTime' => 10,
                            'updatedAt' => '2024-01-15T00:00:00.000Z',
                            'views' => 1250,
                            'tags' => ['onboarding', 'setup', 'tutorial']
                        ],
                        [
                            'id' => 2,
                            'title' => 'Understanding Platform Analytics',
                            'description' => 'Learn how to interpret data analytics and make informed decisions.',
                            'content' => '<p>Our analytics dashboard provides real-time insights into your supply chain operations.</p><h2>Key Metrics</h2><p>Track inventory levels, order fulfillment rates, and supplier performance.</p><h2>Custom Reports</h2><p>Create custom reports with our drag-and-drop report builder.</p>',
                            'category' => 'features',
                            'readTime' => 8,
                            'updatedAt' => '2024-01-20T00:00:00.000Z',
                            'views' => 890,
                            'tags' => ['analytics', 'reporting', 'dashboard']
                        ],
                        [
                            'id' => 3,
                            'title' => 'API Integration Guide',
                            'description' => 'Connect your existing systems with our powerful REST API.',
                            'content' => '<p>Our REST API allows you to programmatically access all platform features.</p><h2>Authentication</h2><p>Use API keys to authenticate your requests.</p><h2>Endpoints</h2><p>Explore available endpoints for products, orders, and inventory management.</p>',
                            'category' => 'api',
                            'readTime' => 12,
                            'updatedAt' => '2024-01-25T00:00:00.000Z',
                            'views' => 2340,
                            'tags' => ['api', 'integration', 'developer']
                        ]
                    ],
                    'articles' => [
                        [
                            'id' => 101,
                            'title' => 'Creating Your First Dashboard',
                            'description' => 'Step-by-step guide to creating custom dashboards for your team.',
                            'content' => '<p>Learn how to create and customize dashboards for different team roles.</p>',
                            'category' => 'getting-started',
                            'readTime' => 5,
                            'updatedAt' => '2024-01-10T00:00:00.000Z',
                            'views' => 450,
                            'tags' => ['dashboard', 'customization']
                        ],
                        [
                            'id' => 102,
                            'title' => 'Managing User Permissions',
                            'description' => 'Configure role-based access controls for team members.',
                            'content' => '<p>Set up user roles and permissions to control access to sensitive data.</p>',
                            'category' => 'account-billing',
                            'readTime' => 6,
                            'updatedAt' => '2024-01-12T00:00:00.000Z',
                            'views' => 320,
                            'tags' => ['permissions', 'roles', 'security']
                        ],
                        [
                            'id' => 103,
                            'title' => 'Troubleshooting Common Issues',
                            'description' => 'Solutions for frequently encountered platform issues.',
                            'content' => '<p>Find solutions for common problems like login issues, data sync errors, and more.</p>',
                            'category' => 'troubleshooting',
                            'readTime' => 7,
                            'updatedAt' => '2024-01-18T00:00:00.000Z',
                            'views' => 580,
                            'tags' => ['troubleshooting', 'errors', 'debug']
                        ],
                        [
                            'id' => 104,
                            'title' => 'Data Security Best Practices',
                            'description' => 'Recommendations for keeping your supply chain data secure.',
                            'content' => '<p>Follow these best practices to ensure your data remains protected.</p>',
                            'category' => 'security',
                            'readTime' => 8,
                            'updatedAt' => '2024-01-22T00:00:00.000Z',
                            'views' => 410,
                            'tags' => ['security', 'encryption', 'compliance']
                        ],
                        [
                            'id' => 105,
                            'title' => 'Third-Party Integrations Setup',
                            'description' => 'Connect with popular ERP and CRM systems.',
                            'content' => '<p>Step-by-step instructions for integrating with external platforms.</p>',
                            'category' => 'integrations',
                            'readTime' => 10,
                            'updatedAt' => '2024-01-28T00:00:00.000Z',
                            'views' => 670,
                            'tags' => ['integrations', 'erp', 'crm']
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 650,
                'section_key' => 'knowledgeBase',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => 'Knowledge Base',
                    'title' => [
                        'prefix' => 'Comprehensive',
                        'highlight' => 'Documentation'
                    ],
                    'description' => 'Find detailed guides, API references, and tutorials. Track versions, see contributor analytics, and get personalized suggestions.',
                    'categories' => [
                        ['id' => 'getting-started', 'name' => 'Getting Started'],
                        ['id' => 'account-billing', 'name' => 'Account & Billing'],
                        ['id' => 'features', 'name' => 'Features'],
                        ['id' => 'troubleshooting', 'name' => 'Troubleshooting'],
                        ['id' => 'security', 'name' => 'Security'],
                        ['id' => 'integrations', 'name' => 'Integrations'],
                        ['id' => 'api', 'name' => 'API Reference']
                    ],
                    'contributors' => [
                        [
                            'name' => 'Dr. Sarah Johnson',
                            'role' => 'Technical Writer',
                            'bio' => 'Dr. Johnson has over 10 years of experience in technical documentation and supply chain management.',
                            'articles' => 45,
                            'edits' => 128,
                            'rating' => 4.9,
                            'expertise' => ['Supply Chain', 'API Documentation', 'Tutorials']
                        ],
                        [
                            'name' => 'Michael Chen',
                            'role' => 'Product Manager',
                            'bio' => 'Michael leads product strategy and contributes to feature documentation.',
                            'articles' => 28,
                            'edits' => 94,
                            'rating' => 4.8,
                            'expertise' => ['Product Features', 'Roadmap', 'Best Practices']
                        ],
                        [
                            'name' => 'Emily Rodriguez',
                            'role' => 'Senior Developer',
                            'bio' => 'Emily specializes in API development and integration guides.',
                            'articles' => 62,
                            'edits' => 256,
                            'rating' => 4.95,
                            'expertise' => ['API', 'Integrations', 'Code Examples']
                        ]
                    ],
                    'articles' => [
                        [
                            'id' => 1,
                            'title' => 'Getting Started with Supply Chain Pro',
                            'description' => 'A comprehensive guide to setting up and using the Supply Chain Pro platform.',
                            'content' => '<p>Welcome to Supply Chain Pro! This guide will help you get started with the platform.</p><h2>Step 1: Create Your Account</h2><p>Sign up for an account using your work email address.</p><h2>Step 2: Complete Your Profile</h2><p>Add your company information and role details.</p><h2>Step 3: Explore the Dashboard</h2><p>Familiarize yourself with the main dashboard and navigation menus.</p>',
                            'category' => 'getting-started',
                            'author' => ['name' => 'Dr. Sarah Johnson'],
                            'readTime' => 10,
                            'rating' => 4.8,
                            'views' => 1250,
                            'updatedAt' => '2024-01-15T00:00:00.000Z',
                            'tags' => ['onboarding', 'setup', 'tutorial'],
                            'versions' => [
                                [
                                    'version' => '1.0',
                                    'date' => '2024-01-15T00:00:00.000Z',
                                    'content' => '<p>Welcome to Supply Chain Pro! This guide will help you get started with the platform.</p><h2>Step 1: Create Your Account</h2><p>Sign up for an account using your work email address.</p><h2>Step 2: Complete Your Profile</h2><p>Add your company information and role details.</p><h2>Step 3: Explore the Dashboard</h2><p>Familiarize yourself with the main dashboard and navigation menus.</p>',
                                    'author' => 'Dr. Sarah Johnson'
                                ]
                            ]
                        ],
                        [
                            'id' => 2,
                            'title' => 'API Authentication Guide',
                            'description' => 'Learn how to authenticate API requests using API keys and OAuth.',
                            'content' => '<p>Our REST API uses API keys for authentication. To get started, generate an API key from your account settings.</p><h2>Generating an API Key</h2><p>Navigate to Settings > API Keys and click \'Generate New Key\'.</p><h2>Making Authenticated Requests</h2><p>Include your API key in the Authorization header: Bearer YOUR_API_KEY</p>',
                            'category' => 'api',
                            'author' => ['name' => 'Emily Rodriguez'],
                            'readTime' => 8,
                            'rating' => 4.9,
                            'views' => 2340,
                            'updatedAt' => '2024-01-20T00:00:00.000Z',
                            'tags' => ['api', 'authentication', 'security'],
                            'versions' => [
                                [
                                    'version' => '1.0',
                                    'date' => '2024-01-20T00:00:00.000Z',
                                    'content' => '<p>Our REST API uses API keys for authentication. To get started, generate an API key from your account settings.</p><h2>Generating an API Key</h2><p>Navigate to Settings > API Keys and click \'Generate New Key\'.</p><h2>Making Authenticated Requests</h2><p>Include your API key in the Authorization header: Bearer YOUR_API_KEY</p>',
                                    'author' => 'Emily Rodriguez'
                                ]
                            ]
                        ],
                        [
                            'id' => 3,
                            'title' => 'Understanding Analytics Dashboard',
                            'description' => 'Learn how to interpret data analytics and make informed decisions.',
                            'content' => '<p>Our analytics dashboard provides real-time insights into your supply chain operations.</p><h2>Key Metrics</h2><p>Track inventory levels, order fulfillment rates, and supplier performance.</p><h2>Custom Reports</h2><p>Create custom reports with our drag-and-drop report builder.</p>',
                            'category' => 'features',
                            'author' => ['name' => 'Michael Chen'],
                            'readTime' => 6,
                            'rating' => 4.7,
                            'views' => 890,
                            'updatedAt' => '2024-01-25T00:00:00.000Z',
                            'tags' => ['analytics', 'reporting', 'dashboard'],
                            'versions' => [
                                [
                                    'version' => '1.0',
                                    'date' => '2024-01-25T00:00:00.000Z',
                                    'content' => '<p>Our analytics dashboard provides real-time insights into your supply chain operations.</p><h2>Key Metrics</h2><p>Track inventory levels, order fulfillment rates, and supplier performance.</p><h2>Custom Reports</h2><p>Create custom reports with our drag-and-drop report builder.</p>',
                                    'author' => 'Michael Chen'
                                ]
                            ]
                        ],
                        [
                            'id' => 4,
                            'title' => 'Troubleshooting Common Issues',
                            'description' => 'Solutions for frequently encountered platform issues.',
                            'content' => '<p>Find solutions for common problems like login issues, data sync errors, and more.</p><h2>Login Issues</h2><p>Clear your browser cache and try resetting your password.</p><h2>Data Sync Errors</h2><p>Check your internet connection and ensure your data file is in the correct format.</p>',
                            'category' => 'troubleshooting',
                            'author' => ['name' => 'Dr. Sarah Johnson'],
                            'readTime' => 7,
                            'rating' => 4.6,
                            'views' => 580,
                            'updatedAt' => '2024-01-28T00:00:00.000Z',
                            'tags' => ['troubleshooting', 'errors', 'debug'],
                            'versions' => [
                                [
                                    'version' => '1.0',
                                    'date' => '2024-01-28T00:00:00.000Z',
                                    'content' => '<p>Find solutions for common problems like login issues, data sync errors, and more.</p><h2>Login Issues</h2><p>Clear your browser cache and try resetting your password.</p><h2>Data Sync Errors</h2><p>Check your internet connection and ensure your data file is in the correct format.</p>',
                                    'author' => 'Dr. Sarah Johnson'
                                ]
                            ]
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 651,
                'section_key' => 'knowledgeBase',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => 'AI-Powered Knowledge',
                    'title' => [
                        'prefix' => 'Intelligent',
                        'highlight' => 'Knowledge Base'
                    ],
                    'description' => 'AI-powered search, content generation, personalized learning paths, and collaborative documentation. Find answers faster than ever.',
                    'categories' => [
                        ['id' => 'getting-started', 'name' => 'Getting Started'],
                        ['id' => 'account-billing', 'name' => 'Account & Billing'],
                        ['id' => 'features', 'name' => 'Features'],
                        ['id' => 'troubleshooting', 'name' => 'Troubleshooting'],
                        ['id' => 'security', 'name' => 'Security'],
                        ['id' => 'integrations', 'name' => 'Integrations'],
                        ['id' => 'api', 'name' => 'API Reference']
                    ],
                    'contributors' => [
                        [
                            'name' => 'Dr. Sarah Johnson',
                            'role' => 'Technical Writer',
                            'bio' => 'Dr. Johnson has over 10 years of experience in technical documentation and supply chain management.',
                            'articles' => 45,
                            'edits' => 128,
                            'rating' => 4.9,
                            'expertise' => ['Supply Chain', 'API Documentation', 'Tutorials']
                        ],
                        [
                            'name' => 'Michael Chen',
                            'role' => 'Product Manager',
                            'bio' => 'Michael leads product strategy and contributes to feature documentation.',
                            'articles' => 28,
                            'edits' => 94,
                            'rating' => 4.8,
                            'expertise' => ['Product Features', 'Roadmap', 'Best Practices']
                        ],
                        [
                            'name' => 'Emily Rodriguez',
                            'role' => 'Senior Developer',
                            'bio' => 'Emily specializes in API development and integration guides.',
                            'articles' => 62,
                            'edits' => 256,
                            'rating' => 4.95,
                            'expertise' => ['API', 'Integrations', 'Code Examples']
                        ]
                    ],
                    'articles' => [
                        [
                            'id' => 1,
                            'title' => 'Getting Started with Supply Chain Pro',
                            'description' => 'A comprehensive guide to setting up and using the Supply Chain Pro platform.',
                            'content' => '<p>Welcome to Supply Chain Pro! This guide will help you get started with the platform.</p><h2>Step 1: Create Your Account</h2><p>Sign up for an account using your work email address.</p><h2>Step 2: Complete Your Profile</h2><p>Add your company information and role details.</p><h2>Step 3: Explore the Dashboard</h2><p>Familiarize yourself with the main dashboard and navigation menus.</p>',
                            'category' => 'getting-started',
                            'author' => ['name' => 'Dr. Sarah Johnson'],
                            'readTime' => 10,
                            'rating' => 4.8,
                            'views' => 1250,
                            'difficulty' => 'beginner',
                            'type' => 'guide',
                            'updatedAt' => '2024-01-15T00:00:00.000Z',
                            'tags' => ['onboarding', 'setup', 'tutorial'],
                            'aiGenerated' => false,
                            'versions' => [
                                [
                                    'version' => '1.0',
                                    'date' => '2024-01-15T00:00:00.000Z',
                                    'content' => '<p>Welcome to Supply Chain Pro! This guide will help you get started with the platform.</p><h2>Step 1: Create Your Account</h2><p>Sign up for an account using your work email address.</p><h2>Step 2: Complete Your Profile</h2><p>Add your company information and role details.</p><h2>Step 3: Explore the Dashboard</h2><p>Familiarize yourself with the main dashboard and navigation menus.</p>',
                                    'author' => 'Dr. Sarah Johnson'
                                ]
                            ]
                        ],
                        [
                            'id' => 2,
                            'title' => 'API Authentication Guide',
                            'description' => 'Learn how to authenticate API requests using API keys and OAuth.',
                            'content' => '<p>Our REST API uses API keys for authentication. To get started, generate an API key from your account settings.</p><h2>Generating an API Key</h2><p>Navigate to Settings > API Keys and click \'Generate New Key\'.</p><h2>Making Authenticated Requests</h2><p>Include your API key in the Authorization header: Bearer YOUR_API_KEY</p>',
                            'category' => 'api',
                            'author' => ['name' => 'Emily Rodriguez'],
                            'readTime' => 8,
                            'rating' => 4.9,
                            'views' => 2340,
                            'difficulty' => 'intermediate',
                            'type' => 'reference',
                            'updatedAt' => '2024-01-20T00:00:00.000Z',
                            'tags' => ['api', 'authentication', 'security'],
                            'aiGenerated' => false,
                            'versions' => [
                                [
                                    'version' => '1.0',
                                    'date' => '2024-01-20T00:00:00.000Z',
                                    'content' => '<p>Our REST API uses API keys for authentication. To get started, generate an API key from your account settings.</p><h2>Generating an API Key</h2><p>Navigate to Settings > API Keys and click \'Generate New Key\'.</p><h2>Making Authenticated Requests</h2><p>Include your API key in the Authorization header: Bearer YOUR_API_KEY</p>',
                                    'author' => 'Emily Rodriguez'
                                ]
                            ]
                        ],
                        [
                            'id' => 3,
                            'title' => 'Understanding Analytics Dashboard',
                            'description' => 'Learn how to interpret data analytics and make informed decisions.',
                            'content' => '<p>Our analytics dashboard provides real-time insights into your supply chain operations.</p><h2>Key Metrics</h2><p>Track inventory levels, order fulfillment rates, and supplier performance.</p><h2>Custom Reports</h2><p>Create custom reports with our drag-and-drop report builder.</p>',
                            'category' => 'features',
                            'author' => ['name' => 'Michael Chen'],
                            'readTime' => 6,
                            'rating' => 4.7,
                            'views' => 890,
                            'difficulty' => 'beginner',
                            'type' => 'guide',
                            'updatedAt' => '2024-01-25T00:00:00.000Z',
                            'tags' => ['analytics', 'reporting', 'dashboard'],
                            'aiGenerated' => false,
                            'versions' => [
                                [
                                    'version' => '1.0',
                                    'date' => '2024-01-25T00:00:00.000Z',
                                    'content' => '<p>Our analytics dashboard provides real-time insights into your supply chain operations.</p><h2>Key Metrics</h2><p>Track inventory levels, order fulfillment rates, and supplier performance.</p><h2>Custom Reports</h2><p>Create custom reports with our drag-and-drop report builder.</p>',
                                    'author' => 'Michael Chen'
                                ]
                            ]
                        ],
                        [
                            'id' => 4,
                            'title' => 'AI-Powered Demand Forecasting',
                            'description' => 'Learn how our AI models can predict demand with high accuracy.',
                            'content' => '<p>Our AI-powered demand forecasting uses machine learning to predict future demand patterns.</p><h2>How It Works</h2><p>The system analyzes historical data, seasonal patterns, and market trends.</p><h2>Getting Started</h2><p>Enable AI forecasting from the Settings menu and upload your historical data.</p>',
                            'category' => 'features',
                            'author' => ['name' => 'Emily Rodriguez'],
                            'readTime' => 7,
                            'rating' => 4.9,
                            'views' => 1560,
                            'difficulty' => 'intermediate',
                            'type' => 'tutorial',
                            'updatedAt' => '2024-02-01T00:00:00.000Z',
                            'tags' => ['ai', 'forecasting', 'machine-learning'],
                            'aiGenerated' => true,
                            'versions' => [
                                [
                                    'version' => '1.0',
                                    'date' => '2024-02-01T00:00:00.000Z',
                                    'content' => '<p>Our AI-powered demand forecasting uses machine learning to predict future demand patterns.</p><h2>How It Works</h2><p>The system analyzes historical data, seasonal patterns, and market trends.</p><h2>Getting Started</h2><p>Enable AI forecasting from the Settings menu and upload your historical data.</p>',
                                    'author' => 'Emily Rodriguez'
                                ]
                            ]
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 652,
                'section_key' => 'knowledgeBase',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Video Tutorials Variants
            [
                'id' => 653,
                'section_key' => 'videoTutorials',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => 'Video Tutorials',
                    'title' => [
                        'prefix' => 'Learn with',
                        'highlight' => 'Video Tutorials'
                    ],
                    'description' => 'Watch step-by-step video guides to master our platform. From beginner to advanced, we\'ve got you covered.',
                    'stats' => [
                        ['icon' => 'videos', 'value' => '50+', 'label' => 'Tutorial Videos'],
                        ['icon' => 'hours', 'value' => '12+', 'label' => 'Hours of Content'],
                        ['icon' => 'students', 'value' => '10,000+', 'label' => 'Students Trained'],
                        ['icon' => 'star', 'value' => '4.9', 'label' => 'Avg Rating']
                    ],
                    'featuredVideo' => [
                        'id' => 1,
                        'title' => 'Complete Platform Walkthrough',
                        'description' => 'A comprehensive guide to all platform features and capabilities. Learn how to navigate the dashboard, manage users, and optimize your supply chain operations.',
                        'duration' => '15',
                        'level' => 'beginner',
                        'views' => 12500,
                        'thumbnail' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=340&fit=crop',
                        'videoUrl' => 'https://www.w3schools.com/html/mov_bbb.mp4',
                        'instructor' => [
                            'name' => 'Dr. Sarah Johnson',
                            'title' => 'Lead Instructor'
                        ],
                        'transcript' => 'Welcome to this comprehensive platform walkthrough. In this tutorial, we\'ll cover everything you need to know to get started with our supply chain management platform.'
                    ],
                    'categories' => [
                        ['id' => 'getting-started', 'name' => 'Getting Started'],
                        ['id' => 'features', 'name' => 'Features'],
                        ['id' => 'integrations', 'name' => 'Integrations'],
                        ['id' => 'api', 'name' => 'API Tutorials'],
                        ['id' => 'best-practices', 'name' => 'Best Practices']
                    ],
                    'videos' => [
                        [
                            'id' => 1,
                            'title' => 'Getting Started with Supply Chain Pro',
                            'description' => 'Learn how to create your account and set up your company profile.',
                            'duration' => '8',
                            'level' => 'beginner',
                            'views' => 8450,
                            'category' => 'getting-started',
                            'thumbnail' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=340&fit=crop',
                            'videoUrl' => 'https://www.w3schools.com/html/mov_bbb.mp4',
                            'instructor' => ['name' => 'Dr. Sarah Johnson'],
                            'tags' => ['onboarding', 'setup', 'account'],
                            'transcript' => 'In this tutorial, we\'ll walk through the account creation process and initial setup steps.'
                        ],
                        [
                            'id' => 2,
                            'title' => 'Dashboard Overview & Analytics',
                            'description' => 'Understand key metrics and how to interpret your supply chain data.',
                            'duration' => '12',
                            'level' => 'intermediate',
                            'views' => 6720,
                            'category' => 'features',
                            'thumbnail' => 'https://images.unsplash.com/photo-1551434678-e076c2236a4e?w=600&h=340&fit=crop',
                            'videoUrl' => 'https://www.w3schools.com/html/mov_bbb.mp4',
                            'instructor' => ['name' => 'Michael Chen'],
                            'tags' => ['analytics', 'dashboard', 'metrics'],
                            'transcript' => 'Learn how to navigate the analytics dashboard and interpret key performance indicators.'
                        ],
                        [
                            'id' => 3,
                            'title' => 'API Integration Deep Dive',
                            'description' => 'Connect your existing systems with our REST API.',
                            'duration' => '20',
                            'level' => 'advanced',
                            'views' => 4230,
                            'category' => 'api',
                            'thumbnail' => 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=340&fit=crop',
                            'videoUrl' => 'https://www.w3schools.com/html/mov_bbb.mp4',
                            'instructor' => ['name' => 'Emily Rodriguez'],
                            'tags' => ['api', 'integration', 'developer'],
                            'transcript' => 'This advanced tutorial covers API authentication, endpoints, and best practices.'
                        ],
                        [
                            'id' => 4,
                            'title' => 'Supply Chain Optimization Strategies',
                            'description' => 'Learn proven strategies to optimize your supply chain operations.',
                            'duration' => '18',
                            'level' => 'advanced',
                            'views' => 5890,
                            'category' => 'best-practices',
                            'thumbnail' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=340&fit=crop',
                            'videoUrl' => 'https://www.w3schools.com/html/mov_bbb.mp4',
                            'instructor' => ['name' => 'Dr. Sarah Johnson'],
                            'tags' => ['optimization', 'strategy', 'best-practices'],
                            'transcript' => 'Discover advanced techniques for optimizing your supply chain and reducing costs.'
                        ],
                        [
                            'id' => 5,
                            'title' => 'Third-Party Integrations Setup',
                            'description' => 'Connect with popular ERP and CRM systems.',
                            'duration' => '14',
                            'level' => 'intermediate',
                            'views' => 3560,
                            'category' => 'integrations',
                            'thumbnail' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=340&fit=crop',
                            'videoUrl' => 'https://www.w3schools.com/html/mov_bbb.mp4',
                            'instructor' => ['name' => 'Michael Chen'],
                            'tags' => ['integrations', 'erp', 'crm'],
                            'transcript' => 'Step-by-step guide to connecting your existing business systems with our platform.'
                        ]
                    ],
                    'playlists' => [
                        [
                            'id' => 1,
                            'title' => 'Beginner\'s Guide to Supply Chain Pro',
                            'description' => 'Start here if you\'re new to the platform. This playlist covers everything you need to know.',
                            'videoCount' => 4,
                            'totalDuration' => '45 min',
                            'progress' => 0,
                            'videos' => []
                        ],
                        [
                            'id' => 2,
                            'title' => 'Advanced API & Integrations',
                            'description' => 'Master API integrations and connect with external systems.',
                            'videoCount' => 3,
                            'totalDuration' => '52 min',
                            'progress' => 0,
                            'videos' => []
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 654,
                'section_key' => 'videoTutorials',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => 'Learning Platform',
                    'title' => [
                        'prefix' => 'Master',
                        'highlight' => 'Supply Chain',
                        'suffix' => 'with Video Courses'
                    ],
                    'description' => 'Comprehensive video courses with quizzes, certificates, and progress tracking. Learn at your own pace and earn professional credentials.',
                    'stats' => [
                        ['icon' => 'courses', 'value' => '12+', 'label' => 'Expert Courses'],
                        ['icon' => 'students', 'value' => '5,000+', 'label' => 'Active Students'],
                        ['icon' => 'hours', 'value' => '50+', 'label' => 'Learning Hours'],
                        ['icon' => 'certificate', 'value' => '100%', 'label' => 'Certificate Rate']
                    ],
                    'featuredCourse' => [
                        'id' => 1,
                        'title' => 'Supply Chain Management Fundamentals',
                        'description' => 'Master the core concepts of supply chain management, from procurement to delivery. This comprehensive course covers everything you need to know.',
                        'duration' => '8 hours',
                        'level' => 'beginner',
                        'hasCertificate' => true,
                        'rating' => 4.9,
                        'videos' => [1, 2, 3, 4],
                        'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=340&fit=crop',
                        'instructor' => [
                            'name' => 'Dr. Sarah Johnson',
                            'title' => 'Supply Chain Expert',
                            'courses' => 8,
                            'students' => 12500,
                            'rating' => 4.9,
                            'bio' => 'Dr. Johnson has over 15 years of experience in supply chain management and has taught thousands of students worldwide.',
                            'expertise' => ['Supply Chain Strategy', 'Logistics', 'Inventory Management']
                        ],
                        'quiz' => [
                            'passingScore' => 70,
                            'questions' => [
                                [
                                    'id' => 1,
                                    'text' => 'What is the primary goal of supply chain management?',
                                    'options' => ['Cost reduction', 'Customer satisfaction', 'Both', 'None'],
                                    'correctAnswer' => 'Both'
                                ],
                                [
                                    'id' => 2,
                                    'text' => 'Which of the following is a key component of SCM?',
                                    'options' => ['Procurement', 'Logistics', 'Demand Planning', 'All of the above'],
                                    'correctAnswer' => 'All of the above'
                                ]
                            ]
                        ]
                    ],
                    'categories' => [
                        ['id' => 'getting-started', 'name' => 'Getting Started'],
                        ['id' => 'features', 'name' => 'Features'],
                        ['id' => 'integrations', 'name' => 'Integrations'],
                        ['id' => 'api', 'name' => 'API Tutorials'],
                        ['id' => 'best-practices', 'name' => 'Best Practices']
                    ],
                    'courses' => [
                        [
                            'id' => 1,
                            'title' => 'Supply Chain Management Fundamentals',
                            'description' => 'Learn the core principles of supply chain management from industry experts.',
                            'duration' => '8 hours',
                            'level' => 'beginner',
                            'rating' => 4.9,
                            'hasCertificate' => true,
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=340&fit=crop',
                            'videos' => [1, 2, 3, 4],
                            'instructor' => ['name' => 'Dr. Sarah Johnson'],
                            'quiz' => ['passingScore' => 70, 'questions' => []]
                        ],
                        [
                            'id' => 2,
                            'title' => 'Advanced Supply Chain Analytics',
                            'description' => 'Master data-driven decision making in supply chain operations.',
                            'duration' => '10 hours',
                            'level' => 'advanced',
                            'rating' => 4.8,
                            'hasCertificate' => true,
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=340&fit=crop',
                            'videos' => [5, 6, 7, 8],
                            'instructor' => ['name' => 'Michael Chen'],
                            'quiz' => ['passingScore' => 75, 'questions' => []]
                        ]
                    ],
                    'videos' => [
                        [
                            'id' => 1,
                            'title' => 'Introduction to Supply Chain Management',
                            'description' => 'Learn what supply chain management is and why it matters.',
                            'duration' => '8',
                            'level' => 'beginner',
                            'views' => 8450,
                            'category' => 'getting-started',
                            'thumbnail' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=340&fit=crop',
                            'videoUrl' => 'https://www.w3schools.com/html/mov_bbb.mp4',
                            'instructor' => ['name' => 'Dr. Sarah Johnson'],
                            'tags' => ['introduction', 'basics', 'overview']
                        ],
                        [
                            'id' => 2,
                            'title' => 'Procurement Best Practices',
                            'description' => 'Learn how to optimize your procurement processes.',
                            'duration' => '12',
                            'level' => 'intermediate',
                            'views' => 6720,
                            'category' => 'features',
                            'thumbnail' => 'https://images.unsplash.com/photo-1551434678-e076c2236a4e?w=600&h=340&fit=crop',
                            'videoUrl' => 'https://www.w3schools.com/html/mov_bbb.mp4',
                            'instructor' => ['name' => 'Michael Chen'],
                            'tags' => ['procurement', 'sourcing', 'suppliers']
                        ],
                        [
                            'id' => 3,
                            'title' => 'Logistics and Distribution',
                            'description' => 'Master the art of efficient logistics and distribution networks.',
                            'duration' => '15',
                            'level' => 'intermediate',
                            'views' => 5890,
                            'category' => 'best-practices',
                            'thumbnail' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=340&fit=crop',
                            'videoUrl' => 'https://www.w3schools.com/html/mov_bbb.mp4',
                            'instructor' => ['name' => 'Dr. Sarah Johnson'],
                            'tags' => ['logistics', 'distribution', 'transportation']
                        ],
                        [
                            'id' => 4,
                            'title' => 'API Integration Guide',
                            'description' => 'Connect your systems with our powerful REST API.',
                            'duration' => '20',
                            'level' => 'advanced',
                            'views' => 4230,
                            'category' => 'api',
                            'thumbnail' => 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=340&fit=crop',
                            'videoUrl' => 'https://www.w3schools.com/html/mov_bbb.mp4',
                            'instructor' => ['name' => 'Emily Rodriguez'],
                            'tags' => ['api', 'integration', 'developer']
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 655,
                'section_key' => 'videoTutorials',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => 'AI-Powered Learning',
                    'title' => [
                        'prefix' => 'Master',
                        'highlight' => 'Supply Chain',
                        'suffix' => 'with AI'
                    ],
                    'description' => 'AI-powered video tutorials, interactive coding environments, peer reviews, and gamified learning. Earn points, badges, and certificates as you progress.',
                    'stats' => [
                        ['icon' => 'courses', 'value' => '15+', 'label' => 'Expert Courses'],
                        ['icon' => 'students', 'value' => '8,000+', 'label' => 'Active Learners'],
                        ['icon' => 'hours', 'value' => '60+', 'label' => 'Learning Hours'],
                        ['icon' => 'certificate', 'value' => '100%', 'label' => 'Certificate Rate']
                    ],
                    'featuredCourse' => [
                        'id' => 1,
                        'title' => 'Supply Chain Management Fundamentals',
                        'description' => 'Master the core concepts of supply chain management, from procurement to delivery. This comprehensive course covers everything you need to know.',
                        'duration' => '8 hours',
                        'level' => 'beginner',
                        'hasCertificate' => true,
                        'rating' => 4.9,
                        'videos' => [1, 2, 3, 4],
                        'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=340&fit=crop',
                        'instructor' => [
                            'name' => 'Dr. Sarah Johnson',
                            'title' => 'Supply Chain Expert',
                            'courses' => 8,
                            'students' => 12500,
                            'rating' => 4.9,
                            'bio' => 'Dr. Johnson has over 15 years of experience in supply chain management and has taught thousands of students worldwide.'
                        ],
                        'quiz' => [
                            'passingScore' => 70,
                            'questions' => [
                                [
                                    'id' => 1,
                                    'text' => 'What is the primary goal of supply chain management?',
                                    'options' => ['Cost reduction', 'Customer satisfaction', 'Both', 'None'],
                                    'correctAnswer' => 'Both'
                                ],
                                [
                                    'id' => 2,
                                    'text' => 'Which of the following is a key component of SCM?',
                                    'options' => ['Procurement', 'Logistics', 'Demand Planning', 'All of the above'],
                                    'correctAnswer' => 'All of the above'
                                ]
                            ]
                        ]
                    ],
                    'categories' => [
                        ['id' => 'getting-started', 'name' => 'Getting Started'],
                        ['id' => 'features', 'name' => 'Features'],
                        ['id' => 'integrations', 'name' => 'Integrations'],
                        ['id' => 'api', 'name' => 'API Tutorials'],
                        ['id' => 'best-practices', 'name' => 'Best Practices']
                    ],
                    'courses' => [
                        [
                            'id' => 1,
                            'title' => 'Supply Chain Management Fundamentals',
                            'description' => 'Learn the core principles of supply chain management from industry experts.',
                            'duration' => '8 hours',
                            'level' => 'beginner',
                            'rating' => 4.9,
                            'hasCertificate' => true,
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=340&fit=crop',
                            'videos' => [1, 2, 3, 4],
                            'instructor' => ['name' => 'Dr. Sarah Johnson'],
                            'quiz' => ['passingScore' => 70, 'questions' => []]
                        ],
                        [
                            'id' => 2,
                            'title' => 'Advanced Supply Chain Analytics',
                            'description' => 'Master data-driven decision making in supply chain operations.',
                            'duration' => '10 hours',
                            'level' => 'advanced',
                            'rating' => 4.8,
                            'hasCertificate' => true,
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=340&fit=crop',
                            'videos' => [5, 6, 7, 8],
                            'instructor' => ['name' => 'Michael Chen'],
                            'quiz' => ['passingScore' => 75, 'questions' => []]
                        ]
                    ],
                    'videos' => [
                        [
                            'id' => 1,
                            'title' => 'Introduction to Supply Chain Management',
                            'description' => 'Learn what supply chain management is and why it matters.',
                            'duration' => '8',
                            'level' => 'beginner',
                            'views' => 8450,
                            'category' => 'getting-started',
                            'thumbnail' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=340&fit=crop',
                            'videoUrl' => 'https://www.w3schools.com/html/mov_bbb.mp4',
                            'instructor' => ['name' => 'Dr. Sarah Johnson'],
                            'tags' => ['introduction', 'basics', 'overview'],
                            'transcript' => [
                                ['startTime' => 0, 'text' => 'Welcome to this introduction to supply chain management.'],
                                ['startTime' => 30, 'text' => 'Supply chain management is the backbone of modern commerce.']
                            ]
                        ],
                        [
                            'id' => 2,
                            'title' => 'Procurement Best Practices',
                            'description' => 'Learn how to optimize your procurement processes.',
                            'duration' => '12',
                            'level' => 'intermediate',
                            'views' => 6720,
                            'category' => 'features',
                            'thumbnail' => 'https://images.unsplash.com/photo-1551434678-e076c2236a4e?w=600&h=340&fit=crop',
                            'videoUrl' => 'https://www.w3schools.com/html/mov_bbb.mp4',
                            'instructor' => ['name' => 'Michael Chen'],
                            'tags' => ['procurement', 'sourcing', 'suppliers'],
                            'transcript' => [
                                ['startTime' => 0, 'text' => 'Procurement is a critical function in supply chain management.'],
                                ['startTime' => 45, 'text' => 'Let\'s explore best practices for supplier relationships.']
                            ]
                        ],
                        [
                            'id' => 3,
                            'title' => 'API Integration Guide',
                            'description' => 'Connect your systems with our powerful REST API.',
                            'duration' => '20',
                            'level' => 'advanced',
                            'views' => 4230,
                            'category' => 'api',
                            'thumbnail' => 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=340&fit=crop',
                            'videoUrl' => 'https://www.w3schools.com/html/mov_bbb.mp4',
                            'instructor' => ['name' => 'Emily Rodriguez'],
                            'tags' => ['api', 'integration', 'developer'],
                            'transcript' => [
                                ['startTime' => 0, 'text' => 'Welcome to our API integration tutorial.'],
                                ['startTime' => 60, 'text' => 'First, let\'s set up authentication.']
                            ]
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 656,
                'section_key' => 'videoTutorials',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Documentation Variants
            [
                'id' => 657,
                'section_key' => 'documentation',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => 'Documentation',
                    'title' => [
                        'prefix' => 'Technical',
                        'highlight' => 'Documentation'
                    ],
                    'description' => 'Comprehensive guides, API references, and developer resources to help you integrate and build with our platform.',
                    'versions' => ['latest', 'v2.0', 'v1.0'],
                    'stats' => [
                        ['icon' => 'pages', 'value' => '150+', 'label' => 'Documentation Pages'],
                        ['icon' => 'sections', 'value' => '8', 'label' => 'Content Sections'],
                        ['icon' => 'api', 'value' => '50+', 'label' => 'API Endpoints'],
                        ['icon' => 'contributors', 'value' => '12', 'label' => 'Contributors']
                    ],
                    'sections' => [
                        ['id' => 'getting-started', 'name' => 'Getting Started'],
                        ['id' => 'guides', 'name' => 'User Guides'],
                        ['id' => 'api-reference', 'name' => 'API Reference'],
                        ['id' => 'sdk', 'name' => 'SDK Documentation'],
                        ['id' => 'cli', 'name' => 'CLI Tools'],
                        ['id' => 'security', 'name' => 'Security'],
                        ['id' => 'integrations', 'name' => 'Integrations'],
                        ['id' => 'faq', 'name' => 'FAQ']
                    ],
                    'documentation' => [
                        [
                            'id' => 'getting-started-overview',
                            'title' => 'Platform Overview',
                            'description' => 'An introduction to the Supply Chain Pro platform and its core features.',
                            'section' => 'getting-started',
                            'content' => '<h2>Welcome to Supply Chain Pro</h2><p>Supply Chain Pro is a comprehensive platform designed to optimize and streamline your supply chain operations. Our platform provides real-time visibility, predictive analytics, and automated workflows to help you make better decisions faster.</p><h3>Key Features</h3><ul><li>Real-time Inventory Tracking</li><li>Demand Forecasting with AI</li><li>Supplier Management</li><li>Logistics Optimization</li><li>Analytics Dashboard</li></ul><h3>System Requirements</h3><p>Supply Chain Pro is a cloud-based platform accessible from any modern web browser. No additional software installation is required.</p>',
                            'updatedAt' => '2024-01-15T00:00:00.000Z',
                            'tags' => ['overview', 'introduction', 'features']
                        ],
                        [
                            'id' => 'api-authentication',
                            'title' => 'Authentication Guide',
                            'description' => 'Learn how to authenticate API requests using API keys.',
                            'section' => 'api-reference',
                            'content' => '<h2>API Authentication</h2><p>All API requests require authentication using an API key. You can generate API keys from your account settings.</p><h3>Generating an API Key</h3><ol><li>Navigate to Settings &gt; API Keys</li><li>Click \'Generate New Key\'</li><li>Copy the generated key (it will only be shown once)</li></ol><h3>Using the API Key</h3><p>Include your API key in the Authorization header of your HTTP requests:</p>',
                            'updatedAt' => '2024-01-20T00:00:00.000Z',
                            'tags' => ['api', 'authentication', 'security'],
                            'codeExamples' => [
                                [
                                    'language' => 'bash',
                                    'code' => 'curl -X GET "https://api.supplychainpro.com/v1/inventory" \\\n  -H "Authorization: Bearer YOUR_API_KEY"'
                                ],
                                [
                                    'language' => 'javascript',
                                    'code' => 'const response = await fetch(\'https://api.supplychainpro.com/v1/inventory\', {\n  headers: {\n    \'Authorization\': \'Bearer YOUR_API_KEY\'\n  }\n});\nconst data = await response.json();'
                                ]
                            ],
                            'endpoints' => [
                                [
                                    'method' => 'GET',
                                    'path' => '/v1/inventory',
                                    'description' => 'Retrieve inventory levels for all products.',
                                    'parameters' => [
                                        ['name' => 'page', 'type' => 'integer', 'required' => false, 'description' => 'Page number for pagination'],
                                        ['name' => 'limit', 'type' => 'integer', 'required' => false, 'description' => 'Number of items per page']
                                    ],
                                    'response' => ['data' => [], 'total' => 100, 'page' => 1, 'limit' => 20]
                                ]
                            ]
                        ],
                        [
                            'id' => 'dashboard-guide',
                            'title' => 'Dashboard Guide',
                            'description' => 'Learn how to navigate and use the analytics dashboard.',
                            'section' => 'guides',
                            'content' => '<h2>Analytics Dashboard</h2><p>The dashboard provides real-time insights into your supply chain operations. Key metrics include inventory levels, order fulfillment rates, and supplier performance.</p><h3>Customizing Your Dashboard</h3><p>You can add, remove, and rearrange widgets to create a personalized view of your data.</p>',
                            'updatedAt' => '2024-01-25T00:00:00.000Z',
                            'tags' => ['dashboard', 'analytics', 'reports'],
                            'relatedDocs' => ['api-authentication']
                        ],
                        [
                            'id' => 'security-overview',
                            'title' => 'Security Overview',
                            'description' => 'Learn about our security practices and data protection measures.',
                            'section' => 'security',
                            'content' => '<h2>Security at Supply Chain Pro</h2><p>We take security seriously and implement industry-standard practices to protect your data.</p><h3>Data Encryption</h3><p>All data is encrypted at rest using AES-256 and in transit using TLS 1.3.</p><h3>Compliance</h3><p>We are SOC 2 Type II compliant and GDPR ready.</p>',
                            'updatedAt' => '2024-01-28T00:00:00.000Z',
                            'tags' => ['security', 'encryption', 'compliance']
                        ],
                        [
                            'id' => 'cli-installation',
                            'title' => 'CLI Installation',
                            'description' => 'Install and configure the Supply Chain Pro CLI tool.',
                            'section' => 'cli',
                            'content' => '<h2>Installing the CLI</h2><p>The Supply Chain Pro CLI allows you to interact with the platform from your terminal.</p><h3>Installation</h3><p>Run the following command to install the CLI:</p>',
                            'updatedAt' => '2024-02-01T00:00:00.000Z',
                            'tags' => ['cli', 'terminal', 'tools'],
                            'codeExamples' => [
                                ['language' => 'bash', 'code' => 'npm install -g supplychain-cli']
                            ]
                        ],
                        [
                            'id' => 'sdk-python',
                            'title' => 'Python SDK',
                            'description' => 'Use our Python SDK to integrate with the platform.',
                            'section' => 'sdk',
                            'content' => '<h2>Python SDK</h2><p>Our Python SDK makes it easy to integrate Supply Chain Pro into your Python applications.</p><h3>Installation</h3><p>Install using pip:</p>',
                            'updatedAt' => '2024-02-05T00:00:00.000Z',
                            'tags' => ['sdk', 'python', 'integration'],
                            'codeExamples' => [
                                ['language' => 'bash', 'code' => 'pip install supplychain-sdk'],
                                ['language' => 'python', 'code' => 'from supplychain import Client\n\nclient = Client(api_key=\'YOUR_API_KEY\')\ninventory = client.inventory.list()']
                            ]
                        ],
                        [
                            'id' => 'erp-integration',
                            'title' => 'ERP Integration',
                            'description' => 'Connect your ERP system with Supply Chain Pro.',
                            'section' => 'integrations',
                            'content' => '<h2>ERP Integration</h2><p>Integrate with popular ERP systems including SAP, Oracle, and Microsoft Dynamics.</p><h3>Setup Process</h3><p>Follow these steps to connect your ERP system:</p><ol><li>Navigate to Integrations in Settings</li><li>Select your ERP provider</li><li>Enter your API credentials</li><li>Map data fields</li><li>Test the connection</li></ol>',
                            'updatedAt' => '2024-02-10T00:00:00.000Z',
                            'tags' => ['erp', 'integration', 'sap', 'oracle'],
                            'relatedDocs' => ['api-authentication']
                        ],
                        [
                            'id' => 'faq-general',
                            'title' => 'General FAQ',
                            'description' => 'Frequently asked questions about the platform.',
                            'section' => 'faq',
                            'content' => '<h2>Frequently Asked Questions</h2><h3>How do I reset my password?</h3><p>Click \'Forgot Password\' on the login page and follow the instructions sent to your email.</p><h3>What browsers are supported?</h3><p>We support the latest versions of Chrome, Firefox, Safari, and Edge.</p><h3>Is there a mobile app?</h3><p>Yes, we offer iOS and Android apps available on the App Store and Google Play.</p>',
                            'updatedAt' => '2024-02-12T00:00:00.000Z',
                            'tags' => ['faq', 'support', 'help'],
                            'relatedDocs' => ['getting-started-overview']
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 658,
                'section_key' => 'documentation',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => 'Developer Docs',
                    'title' => [
                        'prefix' => 'Developer',
                        'highlight' => 'Documentation'
                    ],
                    'description' => 'Interactive API explorer, code playground, and comprehensive guides for developers building on our platform.',
                    'versions' => ['latest', 'v2.0', 'v1.0'],
                    'stats' => [
                        ['icon' => 'pages', 'value' => '200+', 'label' => 'Documentation Pages'],
                        ['icon' => 'api', 'value' => '75+', 'label' => 'API Endpoints'],
                        ['icon' => 'contributors', 'value' => '18', 'label' => 'Contributors'],
                        ['icon' => 'star', 'value' => '4.9', 'label' => 'Developer Rating']
                    ],
                    'sections' => [
                        ['id' => 'getting-started', 'name' => 'Getting Started'],
                        ['id' => 'guides', 'name' => 'Developer Guides'],
                        ['id' => 'api-reference', 'name' => 'API Reference'],
                        ['id' => 'sdk', 'name' => 'SDK Documentation'],
                        ['id' => 'cli', 'name' => 'CLI Tools'],
                        ['id' => 'security', 'name' => 'Security'],
                        ['id' => 'integrations', 'name' => 'Integrations'],
                        ['id' => 'faq', 'name' => 'FAQ']
                    ],
                    'contributors' => [
                        ['name' => 'Dr. Sarah Johnson', 'role' => 'Technical Writer', 'contributions' => 85],
                        ['name' => 'Michael Chen', 'role' => 'API Architect', 'contributions' => 64],
                        ['name' => 'Emily Rodriguez', 'role' => 'Developer Advocate', 'contributions' => 42],
                        ['name' => 'David Kim', 'role' => 'SDK Engineer', 'contributions' => 38],
                        ['name' => 'Lisa Wong', 'role' => 'Documentation Specialist', 'contributions' => 31]
                    ],
                    'documentation' => [
                        [
                            'id' => 'getting-started-overview',
                            'title' => 'Platform Overview',
                            'description' => 'An introduction to the Supply Chain Pro platform and its core features.',
                            'section' => 'getting-started',
                            'content' => '<h2>Welcome to Supply Chain Pro</h2><p>Supply Chain Pro is a comprehensive platform designed to optimize and streamline your supply chain operations.</p><h3>Key Features</h3><ul><li>Real-time Inventory Tracking</li><li>Demand Forecasting with AI</li><li>Supplier Management</li><li>Logistics Optimization</li></ul>',
                            'updatedAt' => '2024-01-15T00:00:00.000Z',
                            'tags' => ['overview', 'introduction', 'features']
                        ],
                        [
                            'id' => 'api-authentication',
                            'title' => 'Authentication Guide',
                            'description' => 'Learn how to authenticate API requests using API keys.',
                            'section' => 'api-reference',
                            'content' => '<h2>API Authentication</h2><p>All API requests require authentication using an API key.</p><h3>Generating an API Key</h3><ol><li>Navigate to Settings &gt; API Keys</li><li>Click \'Generate New Key\'</li><li>Copy the generated key</li></ol>',
                            'updatedAt' => '2024-01-20T00:00:00.000Z',
                            'tags' => ['api', 'authentication', 'security'],
                            'codeExamples' => [
                                [
                                    'language' => 'bash',
                                    'code' => 'curl -X GET "https://api.supplychainpro.com/v1/inventory" \\\n  -H "Authorization: Bearer YOUR_API_KEY"'
                                ]
                            ],
                            'endpoints' => [
                                [
                                    'method' => 'GET',
                                    'path' => '/v1/inventory',
                                    'description' => 'Retrieve inventory levels for all products.',
                                    'parameters' => [
                                        ['name' => 'page', 'type' => 'integer', 'required' => false, 'description' => 'Page number'],
                                        ['name' => 'limit', 'type' => 'integer', 'required' => false, 'description' => 'Items per page']
                                    ]
                                ]
                            ],
                            'relatedDocs' => ['sdk-python']
                        ],
                        [
                            'id' => 'sdk-python',
                            'title' => 'Python SDK',
                            'description' => 'Use our Python SDK to integrate with the platform.',
                            'section' => 'sdk',
                            'content' => '<h2>Python SDK</h2><p>Our Python SDK makes it easy to integrate Supply Chain Pro.</p><h3>Installation</h3><p>Install using pip:</p>',
                            'updatedAt' => '2024-02-05T00:00:00.000Z',
                            'tags' => ['sdk', 'python', 'integration'],
                            'codeExamples' => [
                                ['language' => 'bash', 'code' => 'pip install supplychain-sdk'],
                                ['language' => 'python', 'code' => 'from supplychain import Client\n\nclient = Client(api_key=\'YOUR_API_KEY\')\ninventory = client.inventory.list()']
                            ]
                        ],
                        [
                            'id' => 'cli-installation',
                            'title' => 'CLI Installation',
                            'description' => 'Install and configure the Supply Chain Pro CLI tool.',
                            'section' => 'cli',
                            'content' => '<h2>Installing the CLI</h2><p>The Supply Chain Pro CLI allows you to interact with the platform from your terminal.</p>',
                            'updatedAt' => '2024-02-01T00:00:00.000Z',
                            'tags' => ['cli', 'terminal', 'tools'],
                            'codeExamples' => [
                                ['language' => 'bash', 'code' => 'npm install -g supplychain-cli']
                            ]
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 659,
                'section_key' => 'documentation',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => 'AI-Powered Documentation',
                    'title' => [
                        'prefix' => 'Intelligent',
                        'highlight' => 'Documentation'
                    ],
                    'description' => 'AI-powered search, intelligent code completion, real-time collaboration, and version comparison. The smartest way to explore our documentation.',
                    'versions' => ['latest', 'v2.0', 'v1.0'],
                    'stats' => [
                        ['icon' => 'pages', 'value' => '250+', 'label' => 'Documentation Pages'],
                        ['icon' => 'api', 'value' => '100+', 'label' => 'API Endpoints'],
                        ['icon' => 'contributors', 'value' => '25', 'label' => 'Contributors'],
                        ['icon' => 'ai', 'value' => '98%', 'label' => 'Search Accuracy']
                    ],
                    'sections' => [
                        ['id' => 'getting-started', 'name' => 'Getting Started'],
                        ['id' => 'guides', 'name' => 'Developer Guides'],
                        ['id' => 'api-reference', 'name' => 'API Reference'],
                        ['id' => 'sdk', 'name' => 'SDK Documentation'],
                        ['id' => 'cli', 'name' => 'CLI Tools'],
                        ['id' => 'security', 'name' => 'Security'],
                        ['id' => 'integrations', 'name' => 'Integrations'],
                        ['id' => 'faq', 'name' => 'FAQ']
                    ],
                    'contributors' => [
                        ['name' => 'Dr. Sarah Johnson', 'role' => 'Technical Writer', 'contributions' => 95],
                        ['name' => 'Michael Chen', 'role' => 'API Architect', 'contributions' => 72],
                        ['name' => 'Emily Rodriguez', 'role' => 'Developer Advocate', 'contributions' => 48],
                        ['name' => 'David Kim', 'role' => 'SDK Engineer', 'contributions' => 42],
                        ['name' => 'Lisa Wong', 'role' => 'Documentation Specialist', 'contributions' => 35],
                        ['name' => 'James Wilson', 'role' => 'AI Integration Lead', 'contributions' => 28]
                    ],
                    'documentation' => [
                        [
                            'id' => 'getting-started-overview',
                            'title' => 'Platform Overview',
                            'description' => 'An introduction to the Supply Chain Pro platform and its core features.',
                            'section' => 'getting-started',
                            'type' => 'guide',
                            'version' => '2.0',
                            'content' => '<h2 id=\'welcome\'>Welcome to Supply Chain Pro</h2><p>Supply Chain Pro is a comprehensive platform designed to optimize and streamline your supply chain operations.</p><h3 id=\'key-features\'>Key Features</h3><ul><li>Real-time Inventory Tracking</li><li>Demand Forecasting with AI</li><li>Supplier Management</li><li>Logistics Optimization</li></ul><h3 id=\'system-requirements\'>System Requirements</h3><p>Supply Chain Pro is a cloud-based platform accessible from any modern web browser.</p>',
                            'updatedAt' => '2024-01-15T00:00:00.000Z',
                            'tags' => ['overview', 'introduction', 'features']
                        ],
                        [
                            'id' => 'api-authentication',
                            'title' => 'Authentication Guide',
                            'description' => 'Learn how to authenticate API requests using API keys and OAuth.',
                            'section' => 'api-reference',
                            'type' => 'api',
                            'version' => '2.0',
                            'content' => '<h2 id=\'api-authentication\'>API Authentication</h2><p>All API requests require authentication using an API key.</p><h3 id=\'generating-key\'>Generating an API Key</h3><ol><li>Navigate to Settings &gt; API Keys</li><li>Click \'Generate New Key\'</li><li>Copy the generated key</li></ol><h3 id=\'making-requests\'>Making Authenticated Requests</h3><p>Include your API key in the Authorization header: Bearer YOUR_API_KEY</p>',
                            'updatedAt' => '2024-01-20T00:00:00.000Z',
                            'tags' => ['api', 'authentication', 'security'],
                            'codeExamples' => [
                                [
                                    'language' => 'bash',
                                    'code' => 'curl -X GET "https://api.supplychainpro.com/v1/inventory" \\\n  -H "Authorization: Bearer YOUR_API_KEY"'
                                ],
                                [
                                    'language' => 'javascript',
                                    'code' => 'const response = await fetch(\'https://api.supplychainpro.com/v1/inventory\', {\n  headers: {\n    \'Authorization\': \'Bearer YOUR_API_KEY\'\n  }\n});\nconst data = await response.json();'
                                ]
                            ],
                            'endpoints' => [
                                [
                                    'method' => 'GET',
                                    'path' => '/v1/inventory',
                                    'description' => 'Retrieve inventory levels for all products.',
                                    'parameters' => [
                                        ['name' => 'page', 'type' => 'integer', 'required' => false, 'description' => 'Page number for pagination'],
                                        ['name' => 'limit', 'type' => 'integer', 'required' => false, 'description' => 'Number of items per page']
                                    ]
                                ]
                            ],
                            'relatedDocs' => ['sdk-python', 'cli-installation']
                        ],
                        [
                            'id' => 'sdk-python',
                            'title' => 'Python SDK',
                            'description' => 'Use our Python SDK to integrate with the platform.',
                            'section' => 'sdk',
                            'type' => 'guide',
                            'version' => '2.0',
                            'content' => '<h2 id=\'python-sdk\'>Python SDK</h2><p>Our Python SDK makes it easy to integrate Supply Chain Pro into your Python applications.</p><h3 id=\'installation\'>Installation</h3><p>Install using pip:</p><h3 id=\'usage\'>Usage Example</h3><p>Here\'s a quick example of using the SDK:</p>',
                            'updatedAt' => '2024-02-05T00:00:00.000Z',
                            'tags' => ['sdk', 'python', 'integration'],
                            'codeExamples' => [
                                ['language' => 'bash', 'code' => 'pip install supplychain-sdk'],
                                ['language' => 'python', 'code' => 'from supplychain import Client\n\nclient = Client(api_key=\'YOUR_API_KEY\')\ninventory = client.inventory.list()\nprint(inventory)']
                            ],
                            'relatedDocs' => ['api-authentication']
                        ],
                        [
                            'id' => 'cli-installation',
                            'title' => 'CLI Installation',
                            'description' => 'Install and configure the Supply Chain Pro CLI tool.',
                            'section' => 'cli',
                            'type' => 'guide',
                            'version' => '2.0',
                            'content' => '<h2 id=\'cli-installation\'>Installing the CLI</h2><p>The Supply Chain Pro CLI allows you to interact with the platform from your terminal.</p><h3 id=\'installation-steps\'>Installation Steps</h3><p>Run the following command to install the CLI globally:</p><h3 id=\'basic-commands\'>Basic Commands</h3><p>After installation, you can use the \'supplychain\' command to interact with the platform.</p>',
                            'updatedAt' => '2024-02-01T00:00:00.000Z',
                            'tags' => ['cli', 'terminal', 'tools'],
                            'codeExamples' => [
                                ['language' => 'bash', 'code' => 'npm install -g supplychain-cli'],
                                ['language' => 'bash', 'code' => 'supplychain login --api-key YOUR_API_KEY\nsupplychain inventory list']
                            ]
                        ],
                        [
                            'id' => 'security-best-practices',
                            'title' => 'Security Best Practices',
                            'description' => 'Learn about our security practices and how to keep your data safe.',
                            'section' => 'security',
                            'type' => 'guide',
                            'version' => '2.0',
                            'content' => '<h2 id=\'security-overview\'>Security Overview</h2><p>We take security seriously and implement industry-standard practices.</p><h3 id=\'encryption\'>Data Encryption</h3><p>All data is encrypted at rest using AES-256 and in transit using TLS 1.3.</p><h3 id=\'compliance\'>Compliance</h3><p>We are SOC 2 Type II compliant and GDPR ready.</p>',
                            'updatedAt' => '2024-01-28T00:00:00.000Z',
                            'tags' => ['security', 'encryption', 'compliance'],
                            'relatedDocs' => ['api-authentication']
                        ],
                        [
                            'id' => 'erp-integration',
                            'title' => 'ERP Integration Setup',
                            'description' => 'Connect your ERP system with Supply Chain Pro.',
                            'section' => 'integrations',
                            'type' => 'guide',
                            'version' => '2.0',
                            'content' => '<h2 id=\'erp-integration\'>ERP Integration</h2><p>Integrate with popular ERP systems including SAP, Oracle, and Microsoft Dynamics.</p><h3 id=\'setup-process\'>Setup Process</h3><ol><li>Navigate to Integrations in Settings</li><li>Select your ERP provider</li><li>Enter your API credentials</li><li>Map data fields</li><li>Test the connection</li></ol>',
                            'updatedAt' => '2024-02-10T00:00:00.000Z',
                            'tags' => ['erp', 'integration', 'sap', 'oracle'],
                            'relatedDocs' => ['api-authentication']
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 660,
                'section_key' => 'documentation',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Ticket System Variants
            [
                'id' => 661,
                'section_key' => 'ticketSystem',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => 'Support Tickets',
                    'title' => [
                        'prefix' => 'Manage',
                        'highlight' => 'Support Tickets'
                    ],
                    'description' => 'Track, manage, and resolve customer support tickets efficiently. Monitor response times and customer satisfaction.',
                    'categories' => [
                        ['id' => 'general', 'name' => 'General Inquiry'],
                        ['id' => 'technical', 'name' => 'Technical Issue'],
                        ['id' => 'billing', 'name' => 'Billing Question'],
                        ['id' => 'feature', 'name' => 'Feature Request'],
                        ['id' => 'account', 'name' => 'Account Management']
                    ],
                    'tickets' => [
                        [
                            'id' => 'TKT-ABC123',
                            'subject' => 'Unable to access dashboard',
                            'category' => 'technical',
                            'priority' => 'high',
                            'status' => 'open',
                            'description' => 'I\'ve been trying to access the analytics dashboard but keep getting a 500 error. This started happening after the latest update.',
                            'createdAt' => '2024-01-15T10:30:00.000Z',
                            'updatedAt' => '2024-01-15T10:30:00.000Z',
                            'contactName' => 'John Doe',
                            'contactEmail' => 'john@example.com',
                            'attachments' => ['screenshot.png'],
                            'replies' => []
                        ],
                        [
                            'id' => 'TKT-DEF456',
                            'subject' => 'Billing question about invoice',
                            'category' => 'billing',
                            'priority' => 'medium',
                            'status' => 'in-progress',
                            'description' => 'I received an invoice but I think I was overcharged. Can you please review my account?',
                            'createdAt' => '2024-01-14T14:20:00.000Z',
                            'updatedAt' => '2024-01-15T09:00:00.000Z',
                            'contactName' => 'Jane Smith',
                            'contactEmail' => 'jane@example.com',
                            'attachments' => ['invoice.pdf'],
                            'replies' => [
                                [
                                    'id' => 1,
                                    'message' => 'Thank you for reaching out. Our billing team is reviewing your account and will get back to you shortly.',
                                    'author' => 'Support Agent',
                                    'authorType' => 'agent',
                                    'isInternal' => false,
                                    'createdAt' => '2024-01-15T09:00:00.000Z'
                                ]
                            ]
                        ],
                        [
                            'id' => 'TKT-GHI789',
                            'subject' => 'Feature request: Bulk export',
                            'category' => 'feature',
                            'priority' => 'low',
                            'status' => 'resolved',
                            'description' => 'It would be great to have a bulk export feature for all inventory data. Currently we have to export page by page.',
                            'createdAt' => '2024-01-10T11:00:00.000Z',
                            'updatedAt' => '2024-01-12T15:30:00.000Z',
                            'contactName' => 'Mike Johnson',
                            'contactEmail' => 'mike@example.com',
                            'attachments' => [],
                            'replies' => [
                                [
                                    'id' => 2,
                                    'message' => 'Thank you for this suggestion! We\'ve added it to our roadmap for the next quarter.',
                                    'author' => 'Support Agent',
                                    'authorType' => 'agent',
                                    'isInternal' => false,
                                    'createdAt' => '2024-01-12T15:30:00.000Z'
                                ]
                            ]
                        ],
                        [
                            'id' => 'TKT-JKL012',
                            'subject' => 'Account setup assistance',
                            'category' => 'account',
                            'priority' => 'high',
                            'status' => 'open',
                            'description' => 'I need help setting up user roles and permissions for my team. We have 15 team members that need different access levels.',
                            'createdAt' => '2024-01-16T09:15:00.000Z',
                            'updatedAt' => '2024-01-16T09:15:00.000Z',
                            'contactName' => 'Sarah Williams',
                            'contactEmail' => 'sarah@example.com',
                            'attachments' => [],
                            'replies' => []
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 662,
                'section_key' => 'ticketSystem',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => 'Ticket System',
                    'title' => [
                        'prefix' => 'Intelligent',
                        'highlight' => 'Ticket Management'
                    ],
                    'description' => 'SLA management, automated routing, canned responses, and customer satisfaction tracking.',
                    'categories' => [
                        ['id' => 'general', 'name' => 'General Inquiry', 'routing' => 'agent1'],
                        ['id' => 'technical', 'name' => 'Technical Issue', 'routing' => 'agent2'],
                        ['id' => 'billing', 'name' => 'Billing Question', 'routing' => 'agent3'],
                        ['id' => 'feature', 'name' => 'Feature Request', 'routing' => 'agent1'],
                        ['id' => 'account', 'name' => 'Account Management', 'routing' => 'agent3']
                    ],
                    'agents' => [
                        ['id' => 'agent1', 'name' => 'Sarah Johnson', 'role' => 'Senior Support Specialist', 'online' => true],
                        ['id' => 'agent2', 'name' => 'Michael Chen', 'role' => 'Support Engineer', 'online' => true],
                        ['id' => 'agent3', 'name' => 'Emily Rodriguez', 'role' => 'Customer Success Manager', 'online' => false]
                    ],
                    'cannedResponses' => [
                        ['id' => 'c1', 'title' => 'Welcome Message', 'content' => 'Thank you for contacting support. We will review your request and get back to you shortly.', 'category' => 'general'],
                        ['id' => 'c2', 'title' => 'Password Reset', 'content' => 'To reset your password, please click on \'Forgot Password\' on the login page. You will receive an email with reset instructions.', 'category' => 'account'],
                        ['id' => 'c3', 'title' => 'API Key Generation', 'content' => 'You can generate API keys in your account settings under \'Developer Settings\'. Please ensure you have the necessary permissions.', 'category' => 'technical'],
                        ['id' => 'c4', 'title' => 'Billing Inquiry', 'content' => 'For billing inquiries, please visit your account billing page or contact our finance team at finance@example.com.', 'category' => 'billing']
                    ],
                    'slaPolicies' => [
                        ['id' => 'sla1', 'priority' => 'urgent', 'responseTime' => 1, 'resolutionTime' => 4, 'unit' => 'hours'],
                        ['id' => 'sla2', 'priority' => 'high', 'responseTime' => 4, 'resolutionTime' => 8, 'unit' => 'hours'],
                        ['id' => 'sla3', 'priority' => 'medium', 'responseTime' => 24, 'resolutionTime' => 48, 'unit' => 'hours'],
                        ['id' => 'sla4', 'priority' => 'low', 'responseTime' => 48, 'resolutionTime' => 72, 'unit' => 'hours']
                    ],
                    'tickets' => [
                        [
                            'id' => 'TKT-ABC123',
                            'subject' => 'Unable to access dashboard',
                            'category' => 'technical',
                            'priority' => 'high',
                            'status' => 'open',
                            'description' => 'I\'ve been trying to access the analytics dashboard but keep getting a 500 error. This started happening after the latest update.',
                            'createdAt' => '2024-01-15T10:30:00.000Z',
                            'updatedAt' => '2024-01-15T10:30:00.000Z',
                            'contactName' => 'John Doe',
                            'contactEmail' => 'john@example.com',
                            'assignee' => 'agent2',
                            'attachments' => ['screenshot.png'],
                            'replies' => [],
                            'firstResponseAt' => null,
                            'satisfaction' => null
                        ],
                        [
                            'id' => 'TKT-DEF456',
                            'subject' => 'Billing question about invoice',
                            'category' => 'billing',
                            'priority' => 'medium',
                            'status' => 'in-progress',
                            'description' => 'I received an invoice but I think I was overcharged. Can you please review my account?',
                            'createdAt' => '2024-01-14T14:20:00.000Z',
                            'updatedAt' => '2024-01-15T09:00:00.000Z',
                            'contactName' => 'Jane Smith',
                            'contactEmail' => 'jane@example.com',
                            'assignee' => 'agent3',
                            'attachments' => ['invoice.pdf'],
                            'replies' => [
                                [
                                    'id' => 1,
                                    'message' => 'Thank you for reaching out. Our billing team is reviewing your account and will get back to you shortly.',
                                    'author' => 'Support Agent',
                                    'authorType' => 'agent',
                                    'isInternal' => false,
                                    'createdAt' => '2024-01-15T09:00:00.000Z'
                                ]
                            ],
                            'firstResponseAt' => '2024-01-15T09:00:00.000Z',
                            'satisfaction' => null
                        ],
                        [
                            'id' => 'TKT-GHI789',
                            'subject' => 'Feature request: Bulk export',
                            'category' => 'feature',
                            'priority' => 'low',
                            'status' => 'resolved',
                            'description' => 'It would be great to have a bulk export feature for all inventory data.',
                            'createdAt' => '2024-01-10T11:00:00.000Z',
                            'updatedAt' => '2024-01-12T15:30:00.000Z',
                            'contactName' => 'Mike Johnson',
                            'contactEmail' => 'mike@example.com',
                            'assignee' => 'agent1',
                            'attachments' => [],
                            'replies' => [
                                [
                                    'id' => 2,
                                    'message' => 'Thank you for this suggestion! We\'ve added it to our roadmap for the next quarter.',
                                    'author' => 'Support Agent',
                                    'authorType' => 'agent',
                                    'isInternal' => false,
                                    'createdAt' => '2024-01-12T15:30:00.000Z'
                                ]
                            ],
                            'firstResponseAt' => '2024-01-12T15:30:00.000Z',
                            'satisfaction' => 5
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 663,
                'section_key' => 'ticketSystem',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => 'AI-Powered Support',
                    'title' => [
                        'prefix' => 'Intelligent',
                        'highlight' => 'Ticket Management'
                    ],
                    'description' => 'AI-powered classification, sentiment analysis, predictive routing, and automated workflows for enterprise support.',
                    'categories' => [
                        ['id' => 'general', 'name' => 'General Inquiry', 'routing' => 'agent1', 'keywords' => ['help', 'question', 'how to']],
                        ['id' => 'technical', 'name' => 'Technical Issue', 'routing' => 'agent2', 'keywords' => ['error', 'bug', 'crash', 'not working']],
                        ['id' => 'billing', 'name' => 'Billing Question', 'routing' => 'agent3', 'keywords' => ['invoice', 'payment', 'refund', 'charge']],
                        ['id' => 'feature', 'name' => 'Feature Request', 'routing' => 'agent1', 'keywords' => ['suggest', 'idea', 'improve']],
                        ['id' => 'account', 'name' => 'Account Management', 'routing' => 'agent3', 'keywords' => ['login', 'password', 'profile']]
                    ],
                    'agents' => [
                        ['id' => 'agent1', 'name' => 'Sarah Johnson', 'role' => 'Senior Support Specialist', 'online' => true, 'efficiency' => 92],
                        ['id' => 'agent2', 'name' => 'Michael Chen', 'role' => 'Support Engineer', 'online' => true, 'efficiency' => 88],
                        ['id' => 'agent3', 'name' => 'Emily Rodriguez', 'role' => 'Customer Success Manager', 'online' => false, 'efficiency' => 95]
                    ],
                    'cannedResponses' => [
                        ['id' => 'c1', 'title' => 'Welcome Message', 'content' => 'Thank you for contacting support. We will review your request and get back to you shortly.', 'category' => 'general', 'usageCount' => 156],
                        ['id' => 'c2', 'title' => 'Password Reset', 'content' => 'To reset your password, please click on \'Forgot Password\' on the login page. You will receive an email with reset instructions.', 'category' => 'account', 'usageCount' => 89],
                        ['id' => 'c3', 'title' => 'API Key Generation', 'content' => 'You can generate API keys in your account settings under \'Developer Settings\'. Please ensure you have the necessary permissions.', 'category' => 'technical', 'usageCount' => 234],
                        ['id' => 'c4', 'title' => 'Billing Inquiry', 'content' => 'For billing inquiries, please visit your account billing page or contact our finance team at finance@example.com.', 'category' => 'billing', 'usageCount' => 67]
                    ],
                    'slaPolicies' => [
                        ['id' => 'sla1', 'priority' => 'urgent', 'responseTime' => 1, 'resolutionTime' => 4, 'unit' => 'hours'],
                        ['id' => 'sla2', 'priority' => 'high', 'responseTime' => 4, 'resolutionTime' => 8, 'unit' => 'hours'],
                        ['id' => 'sla3', 'priority' => 'medium', 'responseTime' => 24, 'resolutionTime' => 48, 'unit' => 'hours'],
                        ['id' => 'sla4', 'priority' => 'low', 'responseTime' => 48, 'resolutionTime' => 72, 'unit' => 'hours']
                    ],
                    'workflows' => [
                        ['id' => 'w1', 'name' => 'High Priority Escalation', 'trigger' => 'priority = urgent', 'action' => 'assign_to_manager', 'enabled' => true],
                        ['id' => 'w2', 'name' => 'Auto-Close Resolved', 'trigger' => 'status = resolved for 3 days', 'action' => 'close_ticket', 'enabled' => true],
                        ['id' => 'w3', 'name' => 'Spam Detection', 'trigger' => 'contains spam keywords', 'action' => 'mark_as_spam', 'enabled' => true]
                    ],
                    'tickets' => [
                        [
                            'id' => 'TKT-ABC123',
                            'subject' => 'Unable to access dashboard',
                            'category' => 'technical',
                            'priority' => 'high',
                            'status' => 'open',
                            'description' => 'I\'ve been trying to access the analytics dashboard but keep getting a 500 error. This started happening after the latest update.',
                            'createdAt' => '2024-01-15T10:30:00.000Z',
                            'updatedAt' => '2024-01-15T10:30:00.000Z',
                            'contactName' => 'John Doe',
                            'contactEmail' => 'john@example.com',
                            'assignee' => 'agent2',
                            'attachments' => ['screenshot.png'],
                            'replies' => [],
                            'firstResponseAt' => null,
                            'satisfaction' => null,
                            'aiConfidence' => 85,
                            'sentiment' => 'negative'
                        ],
                        [
                            'id' => 'TKT-DEF456',
                            'subject' => 'Billing question about invoice',
                            'category' => 'billing',
                            'priority' => 'medium',
                            'status' => 'in-progress',
                            'description' => 'I received an invoice but I think I was overcharged. Can you please review my account?',
                            'createdAt' => '2024-01-14T14:20:00.000Z',
                            'updatedAt' => '2024-01-15T09:00:00.000Z',
                            'contactName' => 'Jane Smith',
                            'contactEmail' => 'jane@example.com',
                            'assignee' => 'agent3',
                            'attachments' => ['invoice.pdf'],
                            'replies' => [
                                [
                                    'id' => 1,
                                    'message' => 'Thank you for reaching out. Our billing team is reviewing your account and will get back to you shortly.',
                                    'author' => 'Support Agent',
                                    'authorType' => 'agent',
                                    'isInternal' => false,
                                    'createdAt' => '2024-01-15T09:00:00.000Z'
                                ]
                            ],
                            'firstResponseAt' => '2024-01-15T09:00:00.000Z',
                            'satisfaction' => null,
                            'aiConfidence' => 78,
                            'sentiment' => 'neutral'
                        ],
                        [
                            'id' => 'TKT-GHI789',
                            'subject' => 'Feature request: Bulk export',
                            'category' => 'feature',
                            'priority' => 'low',
                            'status' => 'resolved',
                            'description' => 'It would be great to have a bulk export feature for all inventory data.',
                            'createdAt' => '2024-01-10T11:00:00.000Z',
                            'updatedAt' => '2024-01-12T15:30:00.000Z',
                            'contactName' => 'Mike Johnson',
                            'contactEmail' => 'mike@example.com',
                            'assignee' => 'agent1',
                            'attachments' => [],
                            'replies' => [
                                [
                                    'id' => 2,
                                    'message' => 'Thank you for this suggestion! We\'ve added it to our roadmap for the next quarter.',
                                    'author' => 'Support Agent',
                                    'authorType' => 'agent',
                                    'isInternal' => false,
                                    'createdAt' => '2024-01-12T15:30:00.000Z'
                                ]
                            ],
                            'firstResponseAt' => '2024-01-12T15:30:00.000Z',
                            'satisfaction' => 5,
                            'aiConfidence' => 92,
                            'sentiment' => 'positive'
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 664,
                'section_key' => 'ticketSystem',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Live Chat Variants
            [
                'id' => 665,
                'section_key' => 'liveChat',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => 'Live Chat',
                    'title' => [
                        'prefix' => 'Real-time',
                        'highlight' => 'Customer Support'
                    ],
                    'description' => 'Connect with customers in real-time, resolve issues faster, and provide exceptional support experience.',
                    'agents' => [
                        ['id' => 'agent1', 'name' => 'Sarah Johnson', 'role' => 'Senior Support Agent', 'status' => 'online', 'activeChats' => 2, 'email' => 'sarah@example.com'],
                        ['id' => 'agent2', 'name' => 'Michael Chen', 'role' => 'Support Agent', 'status' => 'online', 'activeChats' => 1, 'email' => 'michael@example.com'],
                        ['id' => 'agent3', 'name' => 'Emily Rodriguez', 'role' => 'Support Agent', 'status' => 'away', 'activeChats' => 0, 'email' => 'emily@example.com'],
                        ['id' => 'agent4', 'name' => 'David Kim', 'role' => 'Technical Specialist', 'status' => 'offline', 'activeChats' => 0, 'email' => 'david@example.com']
                    ],
                    'visitors' => [
                        ['id' => 'visitor1', 'name' => 'John Doe', 'email' => 'john@example.com', 'page' => '/pricing', 'timeOnSite' => '2m', 'country' => 'US'],
                        ['id' => 'visitor2', 'name' => 'Jane Smith', 'email' => 'jane@example.com', 'page' => '/support', 'timeOnSite' => '5m', 'country' => 'UK'],
                        ['id' => 'visitor3', 'name' => 'Bob Wilson', 'email' => 'bob@example.com', 'page' => '/product', 'timeOnSite' => '1m', 'country' => 'Canada']
                    ],
                    'chats' => [
                        [
                            'id' => 'chat1',
                            'customerId' => 'cust1',
                            'customerName' => 'John Smith',
                            'customerEmail' => 'john.smith@example.com',
                            'status' => 'active',
                            'assignedAgent' => 'agent1',
                            'createdAt' => '2024-01-15T10:30:00.000Z',
                            'updatedAt' => '2024-01-15T10:35:00.000Z',
                            'lastMessage' => 'I need help with my account',
                            'lastMessageTime' => '2024-01-15T10:35:00.000Z',
                            'page' => '/dashboard',
                            'messages' => [
                                [
                                    'id' => 1,
                                    'text' => 'Hello, I need help with my account login',
                                    'sender' => 'customer',
                                    'senderName' => 'John Smith',
                                    'timestamp' => '2024-01-15T10:30:00.000Z',
                                    'read' => true
                                ],
                                [
                                    'id' => 2,
                                    'text' => 'Hi John, I\'d be happy to help. Can you tell me what issue you\'re experiencing?',
                                    'sender' => 'agent',
                                    'senderName' => 'Sarah Johnson',
                                    'timestamp' => '2024-01-15T10:32:00.000Z',
                                    'read' => true
                                ]
                            ]
                        ],
                        [
                            'id' => 'chat2',
                            'customerId' => 'cust2',
                            'customerName' => 'Sarah Wilson',
                            'customerEmail' => 'sarah.wilson@example.com',
                            'status' => 'waiting',
                            'assignedAgent' => null,
                            'createdAt' => '2024-01-15T10:45:00.000Z',
                            'updatedAt' => '2024-01-15T10:45:00.000Z',
                            'lastMessage' => 'I have a billing question',
                            'lastMessageTime' => '2024-01-15T10:45:00.000Z',
                            'page' => '/billing',
                            'messages' => [
                                [
                                    'id' => 3,
                                    'text' => 'I was charged twice for my subscription',
                                    'sender' => 'customer',
                                    'senderName' => 'Sarah Wilson',
                                    'timestamp' => '2024-01-15T10:45:00.000Z',
                                    'read' => false
                                ]
                            ]
                        ],
                        [
                            'id' => 'chat3',
                            'customerId' => 'cust3',
                            'customerName' => 'Mike Brown',
                            'customerEmail' => 'mike.brown@example.com',
                            'status' => 'resolved',
                            'assignedAgent' => 'agent2',
                            'createdAt' => '2024-01-14T14:20:00.000Z',
                            'updatedAt' => '2024-01-14T15:30:00.000Z',
                            'lastMessage' => 'Thank you for your help!',
                            'lastMessageTime' => '2024-01-14T15:30:00.000Z',
                            'page' => '/support',
                            'messages' => [
                                [
                                    'id' => 4,
                                    'text' => 'How do I reset my password?',
                                    'sender' => 'customer',
                                    'senderName' => 'Mike Brown',
                                    'timestamp' => '2024-01-14T14:20:00.000Z',
                                    'read' => true
                                ],
                                [
                                    'id' => 5,
                                    'text' => 'You can reset your password by clicking \'Forgot Password\' on the login page',
                                    'sender' => 'agent',
                                    'senderName' => 'Michael Chen',
                                    'timestamp' => '2024-01-14T14:22:00.000Z',
                                    'read' => true
                                ],
                                [
                                    'id' => 6,
                                    'text' => 'Thank you for your help!',
                                    'sender' => 'customer',
                                    'senderName' => 'Mike Brown',
                                    'timestamp' => '2024-01-14T15:30:00.000Z',
                                    'read' => true
                                ]
                            ]
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 666,
                'section_key' => 'liveChat',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => 'Live Chat',
                    'title' => [
                        'prefix' => 'Intelligent',
                        'highlight' => 'Live Chat'
                    ],
                    'description' => 'AI-powered live chat with chatbot integration, canned responses, file sharing, and real-time analytics.',
                    'agents' => [
                        ['id' => 'agent1', 'name' => 'Sarah Johnson', 'role' => 'Senior Support Agent', 'status' => 'online', 'activeChats' => 2, 'email' => 'sarah@example.com', 'efficiency' => 95],
                        ['id' => 'agent2', 'name' => 'Michael Chen', 'role' => 'Support Agent', 'status' => 'online', 'activeChats' => 1, 'email' => 'michael@example.com', 'efficiency' => 88],
                        ['id' => 'agent3', 'name' => 'Emily Rodriguez', 'role' => 'Support Agent', 'status' => 'away', 'activeChats' => 0, 'email' => 'emily@example.com', 'efficiency' => 92],
                        ['id' => 'agent4', 'name' => 'David Kim', 'role' => 'Technical Specialist', 'status' => 'offline', 'activeChats' => 0, 'email' => 'david@example.com', 'efficiency' => 96]
                    ],
                    'visitors' => [
                        ['id' => 'visitor1', 'name' => 'John Doe', 'email' => 'john@example.com', 'page' => '/pricing', 'timeOnSite' => '2m', 'country' => 'US', 'device' => 'Desktop'],
                        ['id' => 'visitor2', 'name' => 'Jane Smith', 'email' => 'jane@example.com', 'page' => '/support', 'timeOnSite' => '5m', 'country' => 'UK', 'device' => 'Mobile'],
                        ['id' => 'visitor3', 'name' => 'Bob Wilson', 'email' => 'bob@example.com', 'page' => '/product', 'timeOnSite' => '1m', 'country' => 'Canada', 'device' => 'Desktop']
                    ],
                    'cannedResponses' => [
                        ['id' => 'c1', 'title' => 'Welcome Message', 'content' => 'Welcome to our support! How can I help you today?', 'category' => 'greeting', 'usageCount' => 156],
                        ['id' => 'c2', 'title' => 'Password Reset', 'content' => 'To reset your password, please click on \'Forgot Password\' on the login page. You will receive an email with reset instructions.', 'category' => 'account', 'usageCount' => 89],
                        ['id' => 'c3', 'title' => 'API Key', 'content' => 'You can generate API keys in your account settings under \'Developer Settings\'.', 'category' => 'technical', 'usageCount' => 234],
                        ['id' => 'c4', 'title' => 'Billing Inquiry', 'content' => 'For billing inquiries, please visit your account billing page or contact our finance team.', 'category' => 'billing', 'usageCount' => 67],
                        ['id' => 'c5', 'title' => 'Thanks & Close', 'content' => 'You\'re welcome! If you need further assistance, feel free to reach out. Have a great day!', 'category' => 'closing', 'usageCount' => 312]
                    ],
                    'chats' => [
                        [
                            'id' => 'chat1',
                            'customerId' => 'cust1',
                            'customerName' => 'John Smith',
                            'customerEmail' => 'john.smith@example.com',
                            'status' => 'active',
                            'assignedAgent' => 'agent1',
                            'createdAt' => '2024-01-15T10:30:00.000Z',
                            'updatedAt' => '2024-01-15T10:35:00.000Z',
                            'lastMessage' => 'I need help with my account',
                            'lastMessageTime' => '2024-01-15T10:35:00.000Z',
                            'page' => '/dashboard',
                            'device' => 'Desktop',
                            'messages' => [
                                [
                                    'id' => 1,
                                    'text' => 'Hello, I need help with my account login',
                                    'sender' => 'customer',
                                    'senderName' => 'John Smith',
                                    'timestamp' => '2024-01-15T10:30:00.000Z',
                                    'read' => true
                                ],
                                [
                                    'id' => 2,
                                    'text' => 'Hi John, I\'d be happy to help. Can you tell me what issue you\'re experiencing?',
                                    'sender' => 'agent',
                                    'senderName' => 'Sarah Johnson',
                                    'timestamp' => '2024-01-15T10:32:00.000Z',
                                    'read' => true
                                ]
                            ]
                        ],
                        [
                            'id' => 'chat2',
                            'customerId' => 'cust2',
                            'customerName' => 'Sarah Wilson',
                            'customerEmail' => 'sarah.wilson@example.com',
                            'status' => 'waiting',
                            'assignedAgent' => null,
                            'createdAt' => '2024-01-15T10:45:00.000Z',
                            'updatedAt' => '2024-01-15T10:45:00.000Z',
                            'lastMessage' => 'I have a billing question',
                            'lastMessageTime' => '2024-01-15T10:45:00.000Z',
                            'page' => '/billing',
                            'device' => 'Mobile',
                            'messages' => [
                                [
                                    'id' => 3,
                                    'text' => 'I was charged twice for my subscription',
                                    'sender' => 'customer',
                                    'senderName' => 'Sarah Wilson',
                                    'timestamp' => '2024-01-15T10:45:00.000Z',
                                    'read' => false
                                ]
                            ]
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 667,
                'section_key' => 'liveChat',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => 'AI-Powered Live Chat',
                    'title' => [
                        'prefix' => 'Intelligent',
                        'highlight' => 'Live Chat'
                    ],
                    'description' => 'AI-powered sentiment analysis, smart routing, video calls, co-browsing, and advanced analytics.',
                    'agents' => [
                        ['id' => 'agent1', 'name' => 'Sarah Johnson', 'role' => 'Senior Support Agent', 'status' => 'online', 'activeChats' => 2, 'email' => 'sarah@example.com', 'efficiency' => 95, 'skills' => ['technical', 'billing'], 'languages' => ['en', 'es']],
                        ['id' => 'agent2', 'name' => 'Michael Chen', 'role' => 'Support Engineer', 'status' => 'online', 'activeChats' => 1, 'email' => 'michael@example.com', 'efficiency' => 88, 'skills' => ['technical', 'api'], 'languages' => ['en', 'zh']],
                        ['id' => 'agent3', 'name' => 'Emily Rodriguez', 'role' => 'Customer Success', 'status' => 'away', 'activeChats' => 0, 'email' => 'emily@example.com', 'efficiency' => 92, 'skills' => ['account', 'billing'], 'languages' => ['en', 'es']],
                        ['id' => 'agent4', 'name' => 'David Kim', 'role' => 'Technical Specialist', 'status' => 'offline', 'activeChats' => 0, 'email' => 'david@example.com', 'efficiency' => 96, 'skills' => ['technical', 'security'], 'languages' => ['en', 'ko']]
                    ],
                    'visitors' => [
                        ['id' => 'visitor1', 'name' => 'John Doe', 'email' => 'john@example.com', 'page' => '/pricing', 'timeOnSite' => '2m', 'country' => 'US', 'device' => 'Desktop', 'sentiment' => 'neutral'],
                        ['id' => 'visitor2', 'name' => 'Jane Smith', 'email' => 'jane@example.com', 'page' => '/support', 'timeOnSite' => '5m', 'country' => 'UK', 'device' => 'Mobile', 'sentiment' => 'negative'],
                        ['id' => 'visitor3', 'name' => 'Bob Wilson', 'email' => 'bob@example.com', 'page' => '/product', 'timeOnSite' => '1m', 'country' => 'Canada', 'device' => 'Desktop', 'sentiment' => 'positive']
                    ],
                    'cannedResponses' => [
                        ['id' => 'c1', 'title' => 'Welcome Message', 'content' => 'Welcome to our support! How can I help you today?', 'category' => 'greeting', 'usageCount' => 156],
                        ['id' => 'c2', 'title' => 'Password Reset', 'content' => 'To reset your password, please click on \'Forgot Password\' on the login page.', 'category' => 'account', 'usageCount' => 89],
                        ['id' => 'c3', 'title' => 'API Key', 'content' => 'You can generate API keys in your account settings under \'Developer Settings\'.', 'category' => 'technical', 'usageCount' => 234],
                        ['id' => 'c4', 'title' => 'Billing Inquiry', 'content' => 'For billing inquiries, please visit your account billing page.', 'category' => 'billing', 'usageCount' => 67],
                        ['id' => 'c5', 'title' => 'Thanks & Close', 'content' => 'You\'re welcome! Have a great day!', 'category' => 'closing', 'usageCount' => 312]
                    ],
                    'chats' => [
                        [
                            'id' => 'chat1',
                            'customerId' => 'cust1',
                            'customerName' => 'John Smith',
                            'customerEmail' => 'john.smith@example.com',
                            'status' => 'active',
                            'assignedAgent' => 'agent1',
                            'createdAt' => '2024-01-15T10:30:00.000Z',
                            'updatedAt' => '2024-01-15T10:35:00.000Z',
                            'lastMessage' => 'I need help with my account',
                            'lastMessageTime' => '2024-01-15T10:35:00.000Z',
                            'page' => '/dashboard',
                            'device' => 'Desktop',
                            'sentiment' => 'neutral',
                            'messages' => [
                                [
                                    'id' => 1,
                                    'text' => 'Hello, I need help with my account login',
                                    'sender' => 'customer',
                                    'senderName' => 'John Smith',
                                    'timestamp' => '2024-01-15T10:30:00.000Z',
                                    'read' => true,
                                    'sentiment' => 'neutral'
                                ],
                                [
                                    'id' => 2,
                                    'text' => 'Hi John, I\'d be happy to help. Can you tell me what issue you\'re experiencing?',
                                    'sender' => 'agent',
                                    'senderName' => 'Sarah Johnson',
                                    'timestamp' => '2024-01-15T10:32:00.000Z',
                                    'read' => true,
                                    'sentiment' => 'positive'
                                ]
                            ]
                        ],
                        [
                            'id' => 'chat2',
                            'customerId' => 'cust2',
                            'customerName' => 'Sarah Wilson',
                            'customerEmail' => 'sarah.wilson@example.com',
                            'status' => 'waiting',
                            'assignedAgent' => null,
                            'createdAt' => '2024-01-15T10:45:00.000Z',
                            'updatedAt' => '2024-01-15T10:45:00.000Z',
                            'lastMessage' => 'I have a billing question',
                            'lastMessageTime' => '2024-01-15T10:45:00.000Z',
                            'page' => '/billing',
                            'device' => 'Mobile',
                            'sentiment' => 'negative',
                            'messages' => [
                                [
                                    'id' => 3,
                                    'text' => 'I was charged twice for my subscription',
                                    'sender' => 'customer',
                                    'senderName' => 'Sarah Wilson',
                                    'timestamp' => '2024-01-15T10:45:00.000Z',
                                    'read' => false,
                                    'sentiment' => 'negative'
                                ]
                            ]
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 668,
                'section_key' => 'liveChat',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Community Forum Variants
            [
                'id' => 669,
                'section_key' => 'communityForum',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => 'Community Forum',
                    'title' => [
                        'prefix' => 'Join the',
                        'highlight' => 'Conversation'
                    ],
                    'description' => 'Connect with fellow users, share knowledge, ask questions, and get the most out of our platform.',
                    'categories' => [
                        ['id' => 'general', 'name' => 'General Discussion', 'icon' => 'chat', 'description' => 'General conversations about the platform', 'color' => 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300', 'postCount' => 156],
                        ['id' => 'announcements', 'name' => 'Announcements', 'icon' => 'megaphone', 'description' => 'Product updates and news', 'color' => 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300', 'postCount' => 23],
                        ['id' => 'help', 'name' => 'Help & Support', 'icon' => 'support', 'description' => 'Get help with technical issues', 'color' => 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300', 'postCount' => 342],
                        ['id' => 'feature-requests', 'name' => 'Feature Requests', 'icon' => 'star', 'description' => 'Suggest and vote on new features', 'color' => 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300', 'postCount' => 89],
                        ['id' => 'tips-tricks', 'name' => 'Tips & Tricks', 'icon' => 'lightbulb', 'description' => 'Share your knowledge and insights', 'color' => 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300', 'postCount' => 67]
                    ],
                    'users' => [
                        ['id' => 'user1', 'name' => 'Sarah Johnson', 'role' => 'Community Manager', 'avatar' => null, 'reputation' => 1245, 'posts' => 342, 'joinedAt' => '2023-01-15', 'badges' => ['Expert', 'Helper']],
                        ['id' => 'user2', 'name' => 'Michael Chen', 'role' => 'Power User', 'avatar' => null, 'reputation' => 892, 'posts' => 187, 'joinedAt' => '2023-03-20', 'badges' => ['Contributor']],
                        ['id' => 'user3', 'name' => 'Emily Rodriguez', 'role' => 'Member', 'avatar' => null, 'reputation' => 456, 'posts' => 89, 'joinedAt' => '2023-06-10', 'badges' => []],
                        ['id' => 'user4', 'name' => 'David Kim', 'role' => 'Moderator', 'avatar' => null, 'reputation' => 2100, 'posts' => 567, 'joinedAt' => '2022-11-01', 'badges' => ['Moderator', 'Expert']]
                    ],
                    'topics' => [
                        [
                            'id' => 1,
                            'title' => 'Welcome to the Community!',
                            'category' => 'announcements',
                            'content' => 'Welcome to our community forum! This is a place to connect, share ideas, and get help. Please read our guidelines before posting.',
                            'tags' => ['welcome', 'announcement'],
                            'author' => 'user1',
                            'createdAt' => '2024-01-10T09:00:00.000Z',
                            'lastActivity' => '2024-01-10T09:00:00.000Z',
                            'views' => 1250,
                            'likes' => 45,
                            'isPinned' => true,
                            'isLocked' => false,
                            'posts' => []
                        ],
                        [
                            'id' => 2,
                            'title' => 'How to integrate with ERP systems?',
                            'category' => 'help',
                            'content' => 'We\'re trying to connect our ERP system with the platform. Has anyone successfully done this? Looking for best practices.',
                            'tags' => ['api', 'integration', 'erp'],
                            'author' => 'user2',
                            'createdAt' => '2024-01-12T14:30:00.000Z',
                            'lastActivity' => '2024-01-13T10:15:00.000Z',
                            'views' => 342,
                            'likes' => 12,
                            'isPinned' => false,
                            'isLocked' => false,
                            'posts' => [
                                [
                                    'id' => 101,
                                    'content' => 'We successfully integrated with SAP using the REST API. Happy to share our approach!',
                                    'author' => 'user3',
                                    'createdAt' => '2024-01-12T16:20:00.000Z',
                                    'likes' => 8
                                ],
                                [
                                    'id' => 102,
                                    'content' => 'The API documentation has a section on ERP integrations. Check out the \'Integrations\' guide.',
                                    'author' => 'user1',
                                    'createdAt' => '2024-01-13T10:15:00.000Z',
                                    'likes' => 5
                                ]
                            ]
                        ],
                        [
                            'id' => 3,
                            'title' => 'Feature Request: Bulk Export',
                            'category' => 'feature-requests',
                            'content' => 'It would be great to have a bulk export feature for all inventory data. Currently we have to export page by page.',
                            'tags' => ['export', 'feature', 'inventory'],
                            'author' => 'user3',
                            'createdAt' => '2024-01-14T11:00:00.000Z',
                            'lastActivity' => '2024-01-14T11:00:00.000Z',
                            'views' => 89,
                            'likes' => 23,
                            'isPinned' => false,
                            'isLocked' => false,
                            'posts' => []
                        ],
                        [
                            'id' => 4,
                            'title' => '5 Tips for Better Dashboard Analytics',
                            'category' => 'tips-tricks',
                            'content' => 'Here are my top 5 tips for getting the most out of the analytics dashboard. Hope this helps someone!',
                            'tags' => ['analytics', 'dashboard', 'tips'],
                            'author' => 'user4',
                            'createdAt' => '2024-01-15T08:30:00.000Z',
                            'lastActivity' => '2024-01-15T12:45:00.000Z',
                            'views' => 567,
                            'likes' => 67,
                            'isPinned' => false,
                            'isLocked' => false,
                            'posts' => [
                                [
                                    'id' => 103,
                                    'content' => 'Great tips! The custom report builder has been a game changer for us.',
                                    'author' => 'user2',
                                    'createdAt' => '2024-01-15T12:45:00.000Z',
                                    'likes' => 12
                                ]
                            ]
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 670,
                'section_key' => 'communityForum',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => 'Community Forum',
                    'title' => [
                        'prefix' => 'Connect with',
                        'highlight' => 'Fellow Users'
                    ],
                    'description' => 'Engage with the community, earn reputation, send private messages, and help shape the future of our platform.',
                    'categories' => [
                        ['id' => 'general', 'name' => 'General Discussion', 'icon' => 'chat', 'postCount' => 156, 'color' => 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300', 'moderation' => false],
                        ['id' => 'announcements', 'name' => 'Announcements', 'icon' => 'megaphone', 'postCount' => 23, 'color' => 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300', 'moderation' => true],
                        ['id' => 'help', 'name' => 'Help & Support', 'icon' => 'support', 'postCount' => 342, 'color' => 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300', 'moderation' => false],
                        ['id' => 'feature-requests', 'name' => 'Feature Requests', 'icon' => 'star', 'postCount' => 89, 'color' => 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300', 'moderation' => false],
                        ['id' => 'tips-tricks', 'name' => 'Tips & Tricks', 'icon' => 'lightbulb', 'postCount' => 67, 'color' => 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300', 'moderation' => false]
                    ],
                    'users' => [
                        ['id' => 'user1', 'name' => 'Sarah Johnson', 'role' => 'Community Manager', 'reputation' => 1245, 'posts' => 342, 'joinedAt' => '2023-01-15', 'badges' => ['Expert', 'Helper', 'Moderator'], 'isOnline' => true],
                        ['id' => 'user2', 'name' => 'Michael Chen', 'role' => 'Power User', 'reputation' => 892, 'posts' => 187, 'joinedAt' => '2023-03-20', 'badges' => ['Contributor'], 'isOnline' => true],
                        ['id' => 'user3', 'name' => 'Emily Rodriguez', 'role' => 'Member', 'reputation' => 456, 'posts' => 89, 'joinedAt' => '2023-06-10', 'badges' => [], 'isOnline' => false],
                        ['id' => 'user4', 'name' => 'David Kim', 'role' => 'Moderator', 'reputation' => 2100, 'posts' => 567, 'joinedAt' => '2022-11-01', 'badges' => ['Moderator', 'Expert'], 'isOnline' => true]
                    ],
                    'topics' => [
                        [
                            'id' => 1,
                            'title' => 'Welcome to the Community!',
                            'category' => 'announcements',
                            'content' => 'Welcome to our community forum! This is a place to connect, share ideas, and get help.',
                            'tags' => ['welcome', 'announcement'],
                            'author' => 'user1',
                            'createdAt' => '2024-01-10T09:00:00.000Z',
                            'lastActivity' => '2024-01-10T09:00:00.000Z',
                            'views' => 1250,
                            'likes' => 45,
                            'isPinned' => true,
                            'isLocked' => false,
                            'posts' => []
                        ],
                        [
                            'id' => 2,
                            'title' => 'How to integrate with ERP systems?',
                            'category' => 'help',
                            'content' => 'We\'re trying to connect our ERP system with the platform. Has anyone successfully done this?',
                            'tags' => ['api', 'integration', 'erp'],
                            'author' => 'user2',
                            'createdAt' => '2024-01-12T14:30:00.000Z',
                            'lastActivity' => '2024-01-13T10:15:00.000Z',
                            'views' => 342,
                            'likes' => 12,
                            'isPinned' => false,
                            'isLocked' => false,
                            'posts' => [
                                [
                                    'id' => 101,
                                    'content' => 'We successfully integrated with SAP using the REST API. Happy to share our approach!',
                                    'author' => 'user3',
                                    'createdAt' => '2024-01-12T16:20:00.000Z',
                                    'likes' => 8
                                ],
                                [
                                    'id' => 102,
                                    'content' => 'The API documentation has a section on ERP integrations. Check out the \'Integrations\' guide.',
                                    'author' => 'user1',
                                    'createdAt' => '2024-01-13T10:15:00.000Z',
                                    'likes' => 5
                                ]
                            ]
                        ],
                        [
                            'id' => 3,
                            'title' => 'Feature Request: Bulk Export',
                            'category' => 'feature-requests',
                            'content' => 'It would be great to have a bulk export feature for all inventory data.',
                            'tags' => ['export', 'feature', 'inventory'],
                            'author' => 'user3',
                            'createdAt' => '2024-01-14T11:00:00.000Z',
                            'lastActivity' => '2024-01-14T11:00:00.000Z',
                            'views' => 89,
                            'likes' => 23,
                            'isPinned' => false,
                            'isLocked' => false,
                            'posts' => []
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 671,
                'section_key' => 'communityForum',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => 'AI-Powered Community',
                    'title' => [
                        'prefix' => 'Intelligent',
                        'highlight' => 'Community Forum'
                    ],
                    'description' => 'AI-powered moderation, gamification, advanced search, and analytics. Connect, learn, and grow with our intelligent community platform.',
                    'categories' => [
                        ['id' => 'general', 'name' => 'General Discussion', 'icon' => 'chat', 'color' => 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300', 'postCount' => 156],
                        ['id' => 'announcements', 'name' => 'Announcements', 'icon' => 'megaphone', 'color' => 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300', 'postCount' => 23],
                        ['id' => 'help', 'name' => 'Help & Support', 'icon' => 'support', 'color' => 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300', 'postCount' => 342],
                        ['id' => 'feature-requests', 'name' => 'Feature Requests', 'icon' => 'star', 'color' => 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300', 'postCount' => 89],
                        ['id' => 'tips-tricks', 'name' => 'Tips & Tricks', 'icon' => 'lightbulb', 'color' => 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300', 'postCount' => 67]
                    ],
                    'users' => [
                        ['id' => 'user1', 'name' => 'Sarah Johnson', 'role' => 'Community Manager', 'reputation' => 1245, 'posts' => 342, 'joinedAt' => '2023-01-15', 'badges' => ['Expert', 'Helper', 'Moderator'], 'isOnline' => true, 'level' => 8, 'xp' => 2450],
                        ['id' => 'user2', 'name' => 'Michael Chen', 'role' => 'Power User', 'reputation' => 892, 'posts' => 187, 'joinedAt' => '2023-03-20', 'badges' => ['Contributor'], 'isOnline' => true, 'level' => 5, 'xp' => 1200],
                        ['id' => 'user3', 'name' => 'Emily Rodriguez', 'role' => 'Member', 'reputation' => 456, 'posts' => 89, 'joinedAt' => '2023-06-10', 'badges' => [], 'isOnline' => false, 'level' => 3, 'xp' => 450],
                        ['id' => 'user4', 'name' => 'David Kim', 'role' => 'Moderator', 'reputation' => 2100, 'posts' => 567, 'joinedAt' => '2022-11-01', 'badges' => ['Moderator', 'Expert'], 'isOnline' => true, 'level' => 10, 'xp' => 3200]
                    ],
                    'topics' => [
                        [
                            'id' => 1,
                            'title' => 'Welcome to the Community!',
                            'category' => 'announcements',
                            'content' => 'Welcome to our community forum! This is a place to connect, share ideas, and get help. Please read our guidelines before posting.',
                            'tags' => ['welcome', 'announcement'],
                            'author' => 'user1',
                            'createdAt' => '2024-01-10T09:00:00.000Z',
                            'lastActivity' => '2024-01-10T09:00:00.000Z',
                            'views' => 1250,
                            'likes' => 45,
                            'isPinned' => true,
                            'isLocked' => false,
                            'posts' => []
                        ],
                        [
                            'id' => 2,
                            'title' => 'How to integrate with ERP systems?',
                            'category' => 'help',
                            'content' => 'We\'re trying to connect our ERP system with the platform. Has anyone successfully done this? Looking for best practices.',
                            'tags' => ['api', 'integration', 'erp'],
                            'author' => 'user2',
                            'createdAt' => '2024-01-12T14:30:00.000Z',
                            'lastActivity' => '2024-01-13T10:15:00.000Z',
                            'views' => 342,
                            'likes' => 12,
                            'isPinned' => false,
                            'isLocked' => false,
                            'posts' => [
                                [
                                    'id' => 101,
                                    'content' => 'We successfully integrated with SAP using the REST API. Happy to share our approach!',
                                    'author' => 'user3',
                                    'createdAt' => '2024-01-12T16:20:00.000Z',
                                    'likes' => 8
                                ],
                                [
                                    'id' => 102,
                                    'content' => 'The API documentation has a section on ERP integrations. Check out the \'Integrations\' guide.',
                                    'author' => 'user1',
                                    'createdAt' => '2024-01-13T10:15:00.000Z',
                                    'likes' => 5
                                ]
                            ]
                        ],
                        [
                            'id' => 3,
                            'title' => 'Feature Request: Bulk Export',
                            'category' => 'feature-requests',
                            'content' => 'It would be great to have a bulk export feature for all inventory data. Currently we have to export page by page.',
                            'tags' => ['export', 'feature', 'inventory'],
                            'author' => 'user3',
                            'createdAt' => '2024-01-14T11:00:00.000Z',
                            'lastActivity' => '2024-01-14T11:00:00.000Z',
                            'views' => 89,
                            'likes' => 23,
                            'isPinned' => false,
                            'isLocked' => false,
                            'posts' => []
                        ],
                        [
                            'id' => 4,
                            'title' => '5 Tips for Better Dashboard Analytics',
                            'category' => 'tips-tricks',
                            'content' => 'Here are my top 5 tips for getting the most out of the analytics dashboard. Hope this helps someone!',
                            'tags' => ['analytics', 'dashboard', 'tips'],
                            'author' => 'user4',
                            'createdAt' => '2024-01-15T08:30:00.000Z',
                            'lastActivity' => '2024-01-15T12:45:00.000Z',
                            'views' => 567,
                            'likes' => 67,
                            'isPinned' => false,
                            'isLocked' => false,
                            'posts' => [
                                [
                                    'id' => 103,
                                    'content' => 'Great tips! The custom report builder has been a game changer for us.',
                                    'author' => 'user2',
                                    'createdAt' => '2024-01-15T12:45:00.000Z',
                                    'likes' => 12
                                ]
                            ]
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 672,
                'section_key' => 'communityForum',
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
