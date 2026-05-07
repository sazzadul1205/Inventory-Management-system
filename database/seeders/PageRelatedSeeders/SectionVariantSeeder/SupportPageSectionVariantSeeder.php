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
        ];

        // Add the new Services variants
        DB::table('section_variants')->upsert(
            $variants,
            ['section_key', 'variant'],
            ['config', 'updated_at']
        );
    }
}
