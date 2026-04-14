<?php

namespace Database\Seeders\PageRelatedSeeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class HowItWorksPageSectionVariantSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Upsert only this page's variants so other page seeders do not get wiped out.
        $variants = [
            // Step by Step Process Section
            [
                'id' => 149,
                'section_key' => 'stepByStepProcess',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Simple Setup',
                        'backgroundColor' => 'bg-blue-50 dark:bg-blue-900/30',
                        'borderColor' => 'border-blue-200 dark:border-blue-800',
                        'textColor' => 'text-blue-700 dark:text-blue-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Get Started in',
                        'highlightedText' => '4 Simple Steps',
                        'suffix' => '',
                        'highlightGradient' => 'from-blue-500 to-indigo-500'
                    ],
                    'description' => 'From setup to insights - our streamlined process gets you up and running quickly with minimal effort.',
                    'initialStep' => 0,
                    'steps' => [
                        [
                            'id' => 1,
                            'number' => 1,
                            'icon' => 'user',
                            'title' => 'Create Account',
                            'description' => 'Sign up for your free account and set up your organization profile.',
                            'keyPoints' => [
                                'No credit card required',
                                'Instant activation',
                                'Team member invites'
                            ],
                            'estimatedTime' => '2 minutes',
                            'progressTip' => 'Start by creating your free account'
                        ],
                        [
                            'id' => 2,
                            'number' => 2,
                            'icon' => 'database',
                            'title' => 'Connect Data',
                            'description' => 'Integrate your existing systems or import your data seamlessly.',
                            'keyPoints' => [
                                'API integration ready',
                                'CSV/Excel import',
                                '50+ connectors available'
                            ],
                            'estimatedTime' => '5 minutes',
                            'progressTip' => 'Connect your data sources'
                        ],
                        [
                            'id' => 3,
                            'number' => 3,
                            'icon' => 'qrcode',
                            'title' => 'Configure Scanning',
                            'description' => 'Set up barcode scanning preferences and inventory rules.',
                            'keyPoints' => [
                                'Custom barcode formats',
                                'Automated rules',
                                'Real-time validation'
                            ],
                            'estimatedTime' => '10 minutes',
                            'progressTip' => 'Configure your scanning preferences'
                        ],
                        [
                            'id' => 4,
                            'number' => 4,
                            'icon' => 'chart',
                            'title' => 'Go Live',
                            'description' => 'Launch your system and start tracking inventory in real-time.',
                            'keyPoints' => [
                                'Team onboarding',
                                'Live monitoring',
                                'Analytics dashboard'
                            ],
                            'estimatedTime' => '15 minutes',
                            'progressTip' => 'You\'re ready to go live!'
                        ]
                    ],
                    'showProgress' => true,
                    'showCta' => true,
                    'ctaText' => 'Ready to get started?',
                    'ctaPrimaryLink' => '/contact',
                    'ctaButton' => [
                        'primaryText' => 'Get Started',
                        'primaryBackground' => 'bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 150,
                'section_key' => 'stepByStepProcess',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Your Journey',
                        'backgroundColor' => 'bg-blue-50 dark:bg-blue-900/30',
                        'borderColor' => 'border-blue-200 dark:border-blue-800',
                        'textColor' => 'text-blue-700 dark:text-blue-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Your',
                        'highlightedText' => 'Journey to Success',
                        'suffix' => '',
                        'highlightGradient' => 'from-blue-500 to-indigo-500'
                    ],
                    'description' => 'Follow our proven process to transform your operations with minimal friction and maximum results.',
                    'initialExpandedStep' => 1,
                    'steps' => [
                        [
                            'id' => 1,
                            'number' => 1,
                            'icon' => 'user',
                            'title' => 'Onboarding & Setup',
                            'shortDescription' => 'Get your account ready and configure your preferences.',
                            'fullDescription' => 'Our guided onboarding process helps you set up your organization, invite team members, and configure your initial settings. We\'ll help you every step of the way with video tutorials and live support.',
                            'keyPoints' => [
                                'Personalized onboarding session',
                                'Team member invitations',
                                'Custom role configuration',
                                'Security settings setup'
                            ],
                            'estimatedTime' => '15-20 minutes',
                            'resources' => [
                                ['name' => 'Setup Guide', 'link' => '/guides/setup'],
                                ['name' => 'Video Tutorial', 'link' => '/videos/onboarding']
                            ],
                            'actionLink' => '/setup',
                            'actionText' => 'Start onboarding →',
                            'isNew' => true
                        ],
                        [
                            'id' => 2,
                            'number' => 2,
                            'icon' => 'database',
                            'title' => 'Data Integration',
                            'shortDescription' => 'Connect your existing systems and import your data.',
                            'fullDescription' => 'Seamlessly integrate with your current tech stack. Whether you\'re using APIs, CSV imports, or our pre-built connectors, we make data migration simple and secure.',
                            'keyPoints' => [
                                '50+ pre-built connectors',
                                'CSV/Excel import wizard',
                                'API documentation',
                                'Data validation tools'
                            ],
                            'estimatedTime' => '30 minutes',
                            'resources' => [
                                ['name' => 'API Docs', 'link' => '/docs/api'],
                                ['name' => 'Integration Guide', 'link' => '/guides/integration']
                            ],
                            'actionLink' => '/integrations',
                            'actionText' => 'Connect your data →'
                        ],
                        [
                            'id' => 3,
                            'number' => 3,
                            'icon' => 'qrcode',
                            'title' => 'Configuration',
                            'shortDescription' => 'Customize workflows and scanning rules.',
                            'fullDescription' => 'Tailor the platform to your specific needs. Set up barcode scanning preferences, inventory rules, and automated workflows that match your business processes.',
                            'keyPoints' => [
                                'Custom barcode formats',
                                'Automated business rules',
                                'Workflow automation',
                                'Real-time validation'
                            ],
                            'estimatedTime' => '20 minutes',
                            'resources' => [
                                ['name' => 'Workflow Guide', 'link' => '/guides/workflows'],
                                ['name' => 'Best Practices', 'link' => '/guides/best-practices']
                            ],
                            'actionLink' => '/settings',
                            'actionText' => 'Configure now →'
                        ],
                        [
                            'id' => 4,
                            'number' => 4,
                            'icon' => 'chart',
                            'title' => 'Go Live',
                            'shortDescription' => 'Launch your system and start tracking.',
                            'fullDescription' => 'With everything configured, it\'s time to go live! Train your team, monitor initial performance, and start seeing real-time insights from day one.',
                            'keyPoints' => [
                                'Team training materials',
                                'Launch checklist',
                                'Live support',
                                'Performance monitoring'
                            ],
                            'estimatedTime' => '1 hour',
                            'resources' => [
                                ['name' => 'Launch Checklist', 'link' => '/guides/launch'],
                                ['name' => 'Support Portal', 'link' => '/support']
                            ],
                            'actionLink' => '/go-live',
                            'actionText' => 'Launch now →'
                        ]
                    ],
                    'showStats' => true,
                    'stats' => [
                        ['icon' => 'clock', 'value' => '< 2 hrs', 'label' => 'Time to Go Live', 'description' => 'Average setup time'],
                        ['icon' => 'database', 'value' => '50+', 'label' => 'Integrations', 'description' => 'Pre-built connectors'],
                        ['icon' => 'users', 'value' => '99%', 'label' => 'Customer Satisfaction', 'description' => 'Based on 500+ reviews'],
                        ['icon' => 'star', 'value' => '24/7', 'label' => 'Support', 'description' => 'Live chat & phone']
                    ],
                    'showCta' => true,
                    'ctaText' => 'Ready to start your journey?',
                    'ctaPrimaryLink' => '/signup',
                    'ctaButton' => [
                        'primaryText' => 'Get Started',
                        'primaryBackground' => 'bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 151,
                'section_key' => 'stepByStepProcess',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Interactive Guide',
                        'backgroundColor' => 'bg-blue-50 dark:bg-blue-900/30',
                        'borderColor' => 'border-blue-200 dark:border-blue-800',
                        'textColor' => 'text-blue-700 dark:text-blue-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Follow Our',
                        'highlightedText' => 'Interactive Setup',
                        'suffix' => 'Guide',
                        'highlightGradient' => 'from-blue-500 to-indigo-500'
                    ],
                    'description' => 'Track your progress as you complete each step. Mark tasks as done and see your journey to launch.',
                    'initialStep' => 1,
                    'initialCompletedSteps' => [],
                    'showCompleteButton' => true,
                    'completeButtonText' => 'Mark as Complete',
                    'progressTitle' => 'Overall Progress',
                    'completionMessage' => '🎉 Congratulations! You\'re ready to go live!',
                    'previewPlaceholderText' => 'Interactive preview available when you start this step',
                    'steps' => [
                        [
                            'id' => 1,
                            'number' => 1,
                            'icon' => 'user',
                            'title' => 'Create Account',
                            'shortDescription' => 'Sign up for your free account',
                            'fullDescription' => 'Get started by creating your account. Choose your plan, set up your organization profile, and invite team members to collaborate.',
                            'estimatedTime' => '5 minutes',
                            'keyPoints' => [
                                'Choose your subscription plan',
                                'Set up organization profile',
                                'Invite team members',
                                'Configure security settings'
                            ],
                            'resources' => [
                                ['name' => 'Account Setup Guide', 'link' => '/guides/account-setup'],
                                ['name' => 'Video Tutorial', 'link' => '/videos/account-setup']
                            ],
                            'actionLink' => '/signup',
                            'actionText' => 'Create Account',
                            'preview' => [
                                'icon' => 'user',
                                'title' => 'Account Creation',
                                'description' => 'Simple signup process with email verification'
                            ]
                        ],
                        [
                            'id' => 2,
                            'number' => 2,
                            'icon' => 'database',
                            'title' => 'Connect Data',
                            'shortDescription' => 'Integrate your existing systems',
                            'fullDescription' => 'Connect your data sources seamlessly. Use our API, pre-built connectors, or CSV import to bring your inventory data into the platform.',
                            'estimatedTime' => '15 minutes',
                            'keyPoints' => [
                                'API integration setup',
                                'CSV/Excel data import',
                                'Real-time sync configuration',
                                'Data validation'
                            ],
                            'resources' => [
                                ['name' => 'API Documentation', 'link' => '/docs/api'],
                                ['name' => 'Integration Guide', 'link' => '/guides/integration']
                            ],
                            'actionLink' => '/integrations',
                            'actionText' => 'Connect Data',
                            'preview' => [
                                'icon' => 'database',
                                'title' => 'Data Integration',
                                'description' => 'Connect your data sources in minutes'
                            ]
                        ],
                        [
                            'id' => 3,
                            'number' => 3,
                            'icon' => 'qrcode',
                            'title' => 'Configure Scanning',
                            'shortDescription' => 'Set up barcode scanning',
                            'fullDescription' => 'Configure barcode scanning preferences, set up automated rules, and customize workflows to match your business processes.',
                            'estimatedTime' => '10 minutes',
                            'keyPoints' => [
                                'Barcode format selection',
                                'Automated business rules',
                                'Workflow customization',
                                'Real-time validation rules'
                            ],
                            'resources' => [
                                ['name' => 'Scanning Guide', 'link' => '/guides/scanning'],
                                ['name' => 'Best Practices', 'link' => '/guides/best-practices']
                            ],
                            'actionLink' => '/settings/scanning',
                            'actionText' => 'Configure Now',
                            'preview' => [
                                'icon' => 'qrcode',
                                'title' => 'Scanning Setup',
                                'description' => 'Customize scanning preferences'
                            ]
                        ],
                        [
                            'id' => 4,
                            'number' => 4,
                            'icon' => 'chart',
                            'title' => 'Go Live',
                            'shortDescription' => 'Launch your system',
                            'fullDescription' => 'Train your team, run final checks, and go live! Monitor initial performance and start seeing real-time insights.',
                            'estimatedTime' => '30 minutes',
                            'keyPoints' => [
                                'Team training materials',
                                'Launch checklist review',
                                'Performance monitoring setup',
                                'Support resources'
                            ],
                            'resources' => [
                                ['name' => 'Launch Checklist', 'link' => '/guides/launch'],
                                ['name' => 'Support Portal', 'link' => '/support']
                            ],
                            'actionLink' => '/backend/dashboard',
                            'actionText' => 'Launch Now',
                            'preview' => [
                                'icon' => 'chart',
                                'title' => 'Go Live',
                                'description' => 'Launch and start tracking'
                            ]
                        ]
                    ],
                    'showProgress' => true,
                    'showCta' => true,
                    'ctaText' => 'Ready to begin your journey?',
                    'ctaPrimaryLink' => '/signup',
                    'ctaButton' => [
                        'primaryText' => 'Start Free Trial',
                        'primaryBackground' => 'bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 152,
                'section_key' => 'stepByStepProcess',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Onboarding Guide Section
            [
                'id' => 153,
                'section_key' => 'onboardingGuide',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Getting Started',
                        'backgroundColor' => 'bg-teal-50 dark:bg-teal-900/30',
                        'borderColor' => 'border-teal-200 dark:border-teal-800',
                        'textColor' => 'text-teal-700 dark:text-teal-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Your',
                        'highlightedText' => 'Onboarding Guide',
                        'suffix' => '',
                        'highlightGradient' => 'from-teal-500 to-cyan-500'
                    ],
                    'description' => 'Everything you need to get started. Follow our step-by-step guide, track your setup progress, and access resources.',
                    'initialTab' => 'guide',
                    'initialCompletedItems' => [],
                    'welcomeVideoTitle' => 'Welcome Video',
                    'welcomeVideoDescription' => 'Watch this 5-minute overview to understand the platform\'s key features and how to get started.',
                    'quickStats' => [
                        ['value' => '15 min', 'label' => 'Average setup time'],
                        ['value' => '200+', 'label' => 'Pre-built integrations'],
                        ['value' => '24/7', 'label' => 'Support available']
                    ],
                    'guideStepsTitle' => 'Step-by-Step Guide',
                    'guideSteps' => [
                        ['title' => 'Create Your Account', 'description' => 'Sign up for your free account and verify your email address.', 'time' => '2 min', 'link' => '/signup'],
                        ['title' => 'Set Up Your Organization', 'description' => 'Configure your company profile, team members, and preferences.', 'time' => '5 min', 'link' => '/settings/organization'],
                        ['title' => 'Connect Your Data Sources', 'description' => 'Integrate your existing systems or import your data.', 'time' => '10 min', 'link' => '/integrations'],
                        ['title' => 'Configure Scanning Rules', 'description' => 'Set up barcode scanning preferences and automated workflows.', 'time' => '5 min', 'link' => '/settings/scanning']
                    ],
                    'progressTitle' => 'Setup Progress',
                    'checklist' => [
                        ['id' => 1, 'title' => 'Account Creation', 'description' => 'Create your account and verify email', 'isRequired' => true, 'link' => '/signup'],
                        ['id' => 2, 'title' => 'Organization Setup', 'description' => 'Configure company profile and team members', 'isRequired' => true, 'link' => '/settings/organization'],
                        ['id' => 3, 'title' => 'Data Integration', 'description' => 'Connect your data sources', 'isRequired' => true, 'link' => '/integrations'],
                        ['id' => 4, 'title' => 'Scanning Configuration', 'description' => 'Set up barcode scanning preferences', 'isRequired' => false, 'link' => '/settings/scanning'],
                        ['id' => 5, 'title' => 'Team Training', 'description' => 'Complete team onboarding and training', 'isRequired' => false, 'link' => '/training']
                    ],
                    'completionMessage' => 'Congratulations! You\'ve completed all setup steps!',
                    'completionSubmessage' => 'You\'re ready to start using the platform.',
                    'documentationTitle' => 'Documentation',
                    'documentation' => [
                        ['title' => 'API Reference', 'link' => '/docs/api'],
                        ['title' => 'Integration Guide', 'link' => '/docs/integrations'],
                        ['title' => 'Security Overview', 'link' => '/docs/security'],
                        ['title' => 'FAQ', 'link' => '/docs/faq']
                    ],
                    'supportTitle' => 'Support Channels',
                    'supportChannels' => [
                        ['icon' => 'chat', 'name' => 'Live Chat', 'description' => '24/7 instant support', 'link' => '/support/chat'],
                        ['icon' => 'mail', 'name' => 'Email Support', 'description' => 'Response within 1 hour', 'link' => '/support/email'],
                        ['icon' => 'phone', 'name' => 'Phone Support', 'description' => 'Priority support line', 'link' => '/support/phone']
                    ],
                    'trainingTitle' => 'Training Videos',
                    'trainingVideos' => [
                        ['title' => 'Platform Overview', 'duration' => '5:00', 'link' => '/videos/overview'],
                        ['title' => 'Barcode Scanning Tutorial', 'duration' => '10:00', 'link' => '/videos/scanning'],
                        ['title' => 'Analytics Dashboard', 'duration' => '8:00', 'link' => '/videos/analytics']
                    ],
                    'communityTitle' => 'Community',
                    'communityLinks' => [
                        ['name' => 'Community Forum', 'icon' => 'globe', 'url' => '/community/forum'],
                        ['name' => 'Slack Channel', 'icon' => 'chat', 'url' => '/community/slack'],
                        ['name' => 'Developer Community', 'icon' => 'globe', 'url' => '/community/developers']
                    ],
                    'showDemoCta' => true,
                    'demoText' => 'Need personalized help?',
                    'demoButtonText' => 'Schedule a Demo',
                    'demoLink' => '/demo'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 154,
                'section_key' => 'onboardingGuide',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Interactive Setup',
                        'backgroundColor' => 'bg-teal-50 dark:bg-teal-900/30',
                        'borderColor' => 'border-teal-200 dark:border-teal-800',
                        'textColor' => 'text-teal-700 dark:text-teal-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Interactive',
                        'highlightedText' => 'Setup Wizard',
                        'suffix' => '',
                        'highlightGradient' => 'from-teal-500 to-cyan-500'
                    ],
                    'description' => 'Answer a few questions and complete these steps to get your account fully configured.',
                    'initialStep' => 0,
                    'initialCompletedSteps' => [],
                    'initialAnswers' => [],
                    'autoAdvanceDelay' => 500,
                    'progressTitle' => 'Setup Progress',
                    'previousButtonText' => 'Previous',
                    'nextButtonText' => 'Next',
                    'completeButtonText' => 'Complete Setup',
                    'completionLink' => '/dashboard',
                    'wizardSteps' => [
                        [
                            'id' => 'welcome',
                            'icon' => 'user',
                            'shortTitle' => 'Welcome',
                            'title' => 'Welcome to the Platform!',
                            'description' => 'Let\'s get you set up in just a few minutes.',
                            'type' => 'info',
                            'infoText' => 'We\'ll guide you through the essential setup steps. You can complete this wizard in under 10 minutes.',
                            'tip' => 'You can save your progress and come back anytime.',
                            'continueText' => 'Start Setup'
                        ],
                        [
                            'id' => 'role',
                            'icon' => 'user',
                            'shortTitle' => 'Your Role',
                            'title' => 'Tell us about your role',
                            'description' => 'This helps us personalize your experience.',
                            'type' => 'question',
                            'question' => 'What best describes your role?',
                            'options' => [
                                ['value' => 'owner', 'label' => 'Business Owner', 'description' => 'I own or run the business'],
                                ['value' => 'manager', 'label' => 'Operations Manager', 'description' => 'I manage daily operations'],
                                ['value' => 'developer', 'label' => 'Developer', 'description' => 'I\'m integrating with APIs'],
                                ['value' => 'other', 'label' => 'Other', 'description' => 'Another role']
                            ]
                        ],
                        [
                            'id' => 'business_type',
                            'icon' => 'database',
                            'shortTitle' => 'Business Type',
                            'title' => 'What type of business?',
                            'description' => 'Select the option that best fits.',
                            'type' => 'question',
                            'question' => 'What industry are you in?',
                            'options' => [
                                ['value' => 'retail', 'label' => 'Retail', 'description' => 'Physical or online store'],
                                ['value' => 'warehouse', 'label' => 'Warehouse/Logistics', 'description' => 'Inventory management'],
                                ['value' => 'manufacturing', 'label' => 'Manufacturing', 'description' => 'Production tracking'],
                                ['value' => 'healthcare', 'label' => 'Healthcare', 'description' => 'Medical inventory']
                            ]
                        ],
                        [
                            'id' => 'watch_tutorial',
                            'icon' => 'video',
                            'shortTitle' => 'Tutorial',
                            'title' => 'Watch Quick Tutorial',
                            'description' => 'Learn the basics in 2 minutes.',
                            'type' => 'video',
                            'videoUrl' => 'https://www.youtube.com/watch?v=example',
                            'videoDescription' => 'This quick tutorial covers the main features you\'ll use daily.',
                            'watchButtonText' => 'Mark as watched'
                        ],
                        [
                            'id' => 'first_action',
                            'icon' => 'qrcode',
                            'shortTitle' => 'First Scan',
                            'title' => 'Try Your First Scan',
                            'description' => 'Let\'s test the barcode scanner.',
                            'type' => 'action',
                            'actionIcon' => 'qrcode',
                            'actionDescription' => 'Use your device camera to scan a product barcode and see how it works.',
                            'actionButtonText' => 'Open Scanner',
                            'actionLink' => '/scanner/demo',
                            'skipText' => 'Skip for now'
                        ],
                        [
                            'id' => 'complete',
                            'icon' => 'chart',
                            'shortTitle' => 'Complete',
                            'title' => 'You\'re All Set!',
                            'description' => 'Your account is ready to use.',
                            'type' => 'info',
                            'infoText' => 'You\'ve completed the essential setup steps. You can now explore the platform and customize additional settings.',
                            'tip' => 'Check out the dashboard for real-time insights.',
                            'continueText' => 'Go to Dashboard'
                        ]
                    ],
                    'showSupport' => true,
                    'supportText' => 'Need help?',
                    'supportLink' => '/support',
                    'supportLinkText' => 'Contact our support team',
                    'orText' => 'or check our',
                    'docsLink' => '/docs',
                    'docsLinkText' => 'documentation'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 155,
                'section_key' => 'onboardingGuide',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Learning Center',
                        'backgroundColor' => 'bg-teal-50 dark:bg-teal-900/30',
                        'borderColor' => 'border-teal-200 dark:border-teal-800',
                        'textColor' => 'text-teal-700 dark:text-teal-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Your',
                        'highlightedText' => 'Learning Journey',
                        'suffix' => '',
                        'highlightGradient' => 'from-teal-500 to-cyan-500'
                    ],
                    'description' => 'Master the platform at your own pace with video tutorials, interactive milestones, and downloadable resources.',
                    'initialWatchedVideos' => [],
                    'initialCompletedMilestones' => [],
                    'initialExpandedSection' => 'videos',
                    'videosCardTitle' => 'Video Tutorials',
                    'milestonesCardTitle' => 'Milestones',
                    'estimatedTimeValue' => '~30 min',
                    'timeCardTitle' => 'Estimated Time',
                    'timeCardDescription' => 'Complete all tutorials and milestones',
                    'videosNavText' => 'Video Tutorials',
                    'milestonesNavText' => 'Getting Started Milestones',
                    'resourcesNavText' => 'Resources & Downloads',
                    'videoPlaceholderText' => 'Select a video tutorial to start learning',
                    'watchNowText' => 'Watch now',
                    'markCompleteText' => 'Mark as complete',
                    'completedText' => 'Completed',
                    'completionTitle' => 'Congratulations!',
                    'completionMessage' => 'You\'ve completed all onboarding milestones. You\'re ready to start using the platform!',
                    'completionLink' => '/dashboard',
                    'dashboardButtonText' => 'Go to Dashboard',
                    'documentationTitle' => 'Documentation',
                    'downloadsTitle' => 'Downloadable Resources',
                    'supportTitle' => 'Get Help',
                    'videoTutorials' => [
                        ['id' => 1, 'title' => 'Platform Overview', 'description' => 'Learn the key features and navigation', 'duration' => '5:00', 'src' => '/videos/overview.mp4'],
                        ['id' => 2, 'title' => 'Barcode Scanning Basics', 'description' => 'How to scan and manage inventory', 'duration' => '8:00', 'src' => '/videos/scanning.mp4'],
                        ['id' => 3, 'title' => 'Analytics Dashboard', 'description' => 'Understanding your data insights', 'duration' => '6:00', 'src' => '/videos/analytics.mp4'],
                        ['id' => 4, 'title' => 'Integrations Setup', 'description' => 'Connect your existing tools', 'duration' => '10:00', 'src' => '/videos/integrations.mp4']
                    ],
                    'milestones' => [
                        ['id' => 1, 'title' => 'Create Your Account', 'description' => 'Sign up and verify your email address', 'estimatedTime' => '2 min', 'actionLink' => '/signup', 'actionText' => 'Create account'],
                        ['id' => 2, 'title' => 'Set Up Organization', 'description' => 'Configure your company profile and team', 'estimatedTime' => '5 min', 'actionLink' => '/settings/organization', 'actionText' => 'Configure now'],
                        ['id' => 3, 'title' => 'Complete First Scan', 'description' => 'Scan your first product barcode', 'estimatedTime' => '3 min', 'actionLink' => '/scanner/demo', 'actionText' => 'Try scanner'],
                        ['id' => 4, 'title' => 'Invite Team Members', 'description' => 'Add your colleagues to the platform', 'estimatedTime' => '3 min', 'actionLink' => '/team/invite', 'actionText' => 'Invite team']
                    ],
                    'documentation' => [
                        ['title' => 'API Reference', 'link' => '/docs/api'],
                        ['title' => 'Integration Guide', 'link' => '/docs/integrations'],
                        ['title' => 'Security Overview', 'link' => '/docs/security'],
                        ['title' => 'FAQ', 'link' => '/docs/faq']
                    ],
                    'downloads' => [
                        ['name' => 'Quick Start Guide', 'type' => 'PDF', 'size' => '2.5 MB', 'link' => '/downloads/quick-start.pdf'],
                        ['name' => 'API Documentation', 'type' => 'PDF', 'size' => '5.1 MB', 'link' => '/downloads/api-docs.pdf'],
                        ['name' => 'Best Practices Guide', 'type' => 'PDF', 'size' => '3.2 MB', 'link' => '/downloads/best-practices.pdf']
                    ],
                    'supportChannels' => [
                        ['icon' => 'chat', 'name' => 'Live Chat', 'description' => '24/7 support', 'link' => '/support/chat'],
                        ['icon' => 'mail', 'name' => 'Email', 'description' => 'Response within 1h', 'link' => '/support/email'],
                        ['icon' => 'phone', 'name' => 'Phone', 'description' => 'Priority line', 'link' => '/support/phone']
                    ],
                    'showCta' => true,
                    'ctaText' => 'Need personalized assistance?',
                    'ctaButtonText' => 'Schedule a Coaching Session',
                    'ctaLink' => '/demo'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 156,
                'section_key' => 'onboardingGuide',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Implementation Timeline Section
            [
                'id' => 157,
                'section_key' => 'implementationTimeline',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Proven Process',
                        'backgroundColor' => 'bg-blue-50 dark:bg-blue-900/30',
                        'borderColor' => 'border-blue-200 dark:border-blue-800',
                        'textColor' => 'text-blue-700 dark:text-blue-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Your',
                        'highlightedText' => 'Implementation Timeline',
                        'suffix' => '',
                        'highlightGradient' => 'from-blue-500 to-indigo-500'
                    ],
                    'description' => 'A structured approach to get you up and running quickly with minimal disruption to your operations.',
                    'initialExpandedPhase' => null,
                    'timelineStats' => [
                        ['value' => '4-6 weeks', 'label' => 'Typical Implementation'],
                        ['value' => 'Dedicated Team', 'label' => 'Project Manager + Technical Support'],
                        ['value' => '24/7', 'label' => 'Support During Implementation']
                    ],
                    'phases' => [
                        [
                            'id' => 1,
                            'number' => 1,
                            'icon' => 'discovery',
                            'title' => 'Discovery & Planning',
                            'weekRange' => '1-2',
                            'shortDescription' => 'Understanding your business needs and mapping out the implementation strategy.',
                            'fullDescription' => 'We start by learning about your specific requirements, existing systems, and goals. Our team works with you to create a detailed implementation plan tailored to your business.',
                            'duration' => '1-2 weeks',
                            'responsible' => 'Project Manager + Your Team',
                            'activities' => [
                                'Requirements gathering workshop',
                                'System architecture review',
                                'Integration planning',
                                'Timeline and milestone definition',
                                'Success criteria establishment'
                            ],
                            'deliverables' => [
                                'Implementation Plan',
                                'Technical Specification',
                                'Timeline Document',
                                'Success Metrics Framework'
                            ],
                            'actionLink' => '/implementation/discovery',
                            'actionText' => 'Learn about discovery phase'
                        ],
                        [
                            'id' => 2,
                            'number' => 2,
                            'icon' => 'setup',
                            'title' => 'Setup & Integration',
                            'weekRange' => '2-3',
                            'shortDescription' => 'Configuring your environment and connecting your data sources.',
                            'fullDescription' => 'Our technical team sets up your environment, configures integrations with your existing systems, and ensures all data flows properly.',
                            'duration' => '1-2 weeks',
                            'responsible' => 'Technical Team',
                            'activities' => [
                                'Environment provisioning',
                                'API integrations setup',
                                'Data migration planning',
                                'Security configuration',
                                'Test environment setup'
                            ],
                            'deliverables' => [
                                'Configured Environment',
                                'Integration Documentation',
                                'Data Migration Plan',
                                'Security Audit Report'
                            ],
                            'actionLink' => '/implementation/setup',
                            'actionText' => 'Learn about setup phase'
                        ],
                        [
                            'id' => 3,
                            'number' => 3,
                            'icon' => 'configuration',
                            'title' => 'Configuration & Testing',
                            'weekRange' => '3-4',
                            'shortDescription' => 'Customizing the platform and validating functionality.',
                            'fullDescription' => 'We configure the platform according to your requirements, set up workflows, and conduct thorough testing to ensure everything works as expected.',
                            'duration' => '1-2 weeks',
                            'responsible' => 'Technical Team + Your Team',
                            'activities' => [
                                'Workflow configuration',
                                'User role setup',
                                'UAT (User Acceptance Testing)',
                                'Performance testing',
                                'Security validation'
                            ],
                            'deliverables' => [
                                'Configured Workflows',
                                'UAT Sign-off',
                                'Test Results Report',
                                'User Access Matrix'
                            ],
                            'actionLink' => '/implementation/configuration',
                            'actionText' => 'Learn about configuration'
                        ],
                        [
                            'id' => 4,
                            'number' => 4,
                            'icon' => 'launch',
                            'title' => 'Go-Live & Training',
                            'weekRange' => '4-5',
                            'shortDescription' => 'Launching the system and training your team.',
                            'fullDescription' => 'We execute the go-live plan, provide comprehensive training to your team, and ensure a smooth transition to the new system.',
                            'duration' => '1 week',
                            'responsible' => 'Project Manager + Your Team',
                            'activities' => [
                                'Production deployment',
                                'User training sessions',
                                'Documentation handover',
                                'Go-live support',
                                'Post-launch monitoring'
                            ],
                            'deliverables' => [
                                'Live System',
                                'Training Materials',
                                'User Documentation',
                                'Go-Live Sign-off'
                            ],
                            'actionLink' => '/implementation/go-live',
                            'actionText' => 'Learn about go-live'
                        ],
                        [
                            'id' => 5,
                            'number' => 5,
                            'icon' => 'optimization',
                            'title' => 'Optimization & Support',
                            'weekRange' => '5-6+',
                            'shortDescription' => 'Continuous improvement and ongoing support.',
                            'fullDescription' => 'After launch, we continue to monitor performance, gather feedback, and make optimizations to ensure you\'re getting maximum value from the platform.',
                            'duration' => 'Ongoing',
                            'responsible' => 'Support Team',
                            'activities' => [
                                'Performance monitoring',
                                'User feedback collection',
                                'Optimization recommendations',
                                'Regular check-ins',
                                'Ongoing support'
                            ],
                            'deliverables' => [
                                'Performance Reports',
                                'Optimization Plan',
                                'Support SLA',
                                'Quarterly Business Review'
                            ],
                            'actionLink' => '/implementation/support',
                            'actionText' => 'Learn about ongoing support'
                        ]
                    ],
                    'showMetrics' => true,
                    'metricsTitle' => 'What You Can Expect',
                    'metricsDescription' => 'Measurable results after successful implementation',
                    'metrics' => [
                        ['icon' => 'clock', 'value' => '50%', 'label' => 'Faster Processing', 'description' => 'Reduction in inventory processing time'],
                        ['icon' => 'check', 'value' => '99.9%', 'label' => 'Accuracy', 'description' => 'Barcode scanning accuracy rate'],
                        ['icon' => 'rocket', 'value' => '3x', 'label' => 'Faster ROI', 'description' => 'Return on investment timeline'],
                        ['icon' => 'shield', 'value' => '100%', 'label' => 'Compliant', 'description' => 'Security & compliance standards']
                    ],
                    'showCta' => true,
                    'ctaText' => 'Ready to start your implementation?',
                    'ctaButtonText' => 'Schedule a Discovery Call',
                    'ctaLink' => '/contact'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 158,
                'section_key' => 'implementationTimeline',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Visual Timeline',
                        'backgroundColor' => 'bg-blue-50 dark:bg-blue-900/30',
                        'borderColor' => 'border-blue-200 dark:border-blue-800',
                        'textColor' => 'text-blue-700 dark:text-blue-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Interactive',
                        'highlightedText' => 'Project Timeline',
                        'suffix' => '',
                        'highlightGradient' => 'from-blue-500 to-indigo-500'
                    ],
                    'description' => 'Explore your implementation journey with our interactive Gantt chart. Zoom, click, and track every milestone.',
                    'initialSelectedPhase' => null,
                    'initialZoom' => 1,
                    'totalWeeks' => 12,
                    'zoomStep' => 0.2,
                    'minZoom' => 0.6,
                    'maxZoom' => 2,
                    'defaultPhaseColor' => '#3b82f6',
                    'defaultMilestoneColor' => '#10b981',
                    'phaseColumnHeader' => 'Phase / Milestone',
                    'weekLabel' => 'Week',
                    'downloadText' => 'Download Timeline',
                    'activitiesLabel' => 'Key Activities:',
                    'deliverablesLabel' => 'Deliverables:',
                    'downloadLink' => '/timeline/download',
                    'phases' => [
                        [
                            'id' => 1,
                            'number' => 1,
                            'title' => 'Discovery',
                            'duration' => '2 weeks',
                            'startWeek' => 1,
                            'endWeek' => 2,
                            'color' => '#3b82f6',
                            'fullDescription' => 'We start by learning about your specific requirements, existing systems, and goals. Our team works with you to create a detailed implementation plan tailored to your business.',
                            'activities' => [
                                'Requirements gathering workshop',
                                'System architecture review',
                                'Integration planning',
                                'Timeline and milestone definition'
                            ],
                            'deliverables' => [
                                'Implementation Plan',
                                'Technical Specification',
                                'Timeline Document'
                            ],
                            'milestones' => [
                                ['id' => 'm1', 'title' => 'Project Kickoff', 'week' => 1, 'color' => '#10b981'],
                                ['id' => 'm2', 'title' => 'Requirements Approved', 'week' => 2, 'color' => '#10b981']
                            ]
                        ],
                        [
                            'id' => 2,
                            'number' => 2,
                            'title' => 'Setup & Integration',
                            'duration' => '2 weeks',
                            'startWeek' => 2,
                            'endWeek' => 4,
                            'color' => '#8b5cf6',
                            'fullDescription' => 'Our technical team sets up your environment, configures integrations with your existing systems, and ensures all data flows properly.',
                            'activities' => [
                                'Environment provisioning',
                                'API integrations setup',
                                'Data migration planning',
                                'Security configuration'
                            ],
                            'deliverables' => [
                                'Configured Environment',
                                'Integration Documentation',
                                'Data Migration Plan'
                            ],
                            'milestones' => [
                                ['id' => 'm3', 'title' => 'Test Environment Ready', 'week' => 3, 'color' => '#10b981'],
                                ['id' => 'm4', 'title' => 'Integration Complete', 'week' => 4, 'color' => '#10b981']
                            ]
                        ],
                        [
                            'id' => 3,
                            'number' => 3,
                            'title' => 'Configuration & Testing',
                            'duration' => '2 weeks',
                            'startWeek' => 4,
                            'endWeek' => 6,
                            'color' => '#ec4898',
                            'fullDescription' => 'We configure the platform according to your requirements, set up workflows, and conduct thorough testing to ensure everything works as expected.',
                            'activities' => [
                                'Workflow configuration',
                                'User role setup',
                                'UAT (User Acceptance Testing)',
                                'Performance testing'
                            ],
                            'deliverables' => [
                                'Configured Workflows',
                                'UAT Sign-off',
                                'Test Results Report'
                            ],
                            'milestones' => [
                                ['id' => 'm5', 'title' => 'UAT Complete', 'week' => 5, 'color' => '#10b981'],
                                ['id' => 'm6', 'title' => 'Testing Sign-off', 'week' => 6, 'color' => '#10b981']
                            ]
                        ],
                        [
                            'id' => 4,
                            'number' => 4,
                            'title' => 'Training & Go-Live',
                            'duration' => '2 weeks',
                            'startWeek' => 6,
                            'endWeek' => 8,
                            'color' => '#f59e0b',
                            'fullDescription' => 'We execute the go-live plan, provide comprehensive training to your team, and ensure a smooth transition to the new system.',
                            'activities' => [
                                'User training sessions',
                                'Documentation handover',
                                'Production deployment',
                                'Go-live support'
                            ],
                            'deliverables' => [
                                'Live System',
                                'Training Materials',
                                'User Documentation'
                            ],
                            'milestones' => [
                                ['id' => 'm7', 'title' => 'Training Complete', 'week' => 7, 'color' => '#10b981'],
                                ['id' => 'm8', 'title' => 'System Go-Live', 'week' => 8, 'color' => '#10b981']
                            ]
                        ],
                        [
                            'id' => 5,
                            'number' => 5,
                            'title' => 'Optimization',
                            'duration' => '4 weeks',
                            'startWeek' => 8,
                            'endWeek' => 12,
                            'color' => '#06b6d4',
                            'fullDescription' => 'After launch, we continue to monitor performance, gather feedback, and make optimizations to ensure you\'re getting maximum value from the platform.',
                            'activities' => [
                                'Performance monitoring',
                                'User feedback collection',
                                'Optimization recommendations',
                                'Regular check-ins'
                            ],
                            'deliverables' => [
                                'Performance Reports',
                                'Optimization Plan',
                                'Support SLA'
                            ],
                            'milestones' => [
                                ['id' => 'm9', 'title' => 'First Review', 'week' => 10, 'color' => '#10b981'],
                                ['id' => 'm10', 'title' => 'Project Closure', 'week' => 12, 'color' => '#10b981']
                            ]
                        ]
                    ],
                    'showMilestones' => true,
                    'milestonesTitle' => 'Key Milestones',
                    'milestonesSummary' => [
                        ['week' => 2, 'title' => 'Discovery Complete', 'description' => 'Requirements and plan approved'],
                        ['week' => 4, 'title' => 'Integration Complete', 'description' => 'Systems connected and tested'],
                        ['week' => 6, 'title' => 'UAT Complete', 'description' => 'User acceptance testing done'],
                        ['week' => 8, 'title' => 'Go-Live', 'description' => 'System launched to production']
                    ],
                    'timelineStats' => [
                        ['icon' => 'calendar', 'value' => '8-12 weeks', 'label' => 'Total Implementation'],
                        ['icon' => 'check', 'value' => '10+', 'label' => 'Key Milestones'],
                        ['icon' => 'users', 'value' => 'Dedicated', 'label' => 'Project Team'],
                        ['icon' => 'clock', 'value' => '24/7', 'label' => 'Support Available']
                    ],
                    'showCta' => true,
                    'ctaText' => 'Ready to see your custom timeline?',
                    'ctaButtonText' => 'Get Custom Timeline',
                    'ctaLink' => '/contact'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 159,
                'section_key' => 'implementationTimeline',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Track Progress',
                        'backgroundColor' => 'bg-blue-50 dark:bg-blue-900/30',
                        'borderColor' => 'border-blue-200 dark:border-blue-800',
                        'textColor' => 'text-blue-700 dark:text-blue-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Track Your',
                        'highlightedText' => 'Implementation Progress',
                        'suffix' => '',
                        'highlightGradient' => 'from-blue-500 to-indigo-500'
                    ],
                    'description' => 'Follow your journey from kickoff to go-live. Mark milestones as complete and watch your progress grow.',
                    'initialCompletedMilestones' => [],
                    'avgDaysPerMilestone' => 3,
                    'progressLabel' => 'Overall Progress',
                    'milestonesLabel' => 'milestones',
                    'remainingLabel' => 'Est. Remaining Time',
                    'remainingDescription' => 'Based on average completion',
                    'teamLabel' => 'Your Implementation Team',
                    'teamSize' => 'Dedicated Team',
                    'availabilityText' => 'Available 24/7',
                    'weekLabel' => 'Week',
                    'estimatedLabel' => 'estimated',
                    'tasksLabel' => 'Tasks:',
                    'markCompleteText' => 'Mark as Complete',
                    'completedText' => 'Completed',
                    'daysText' => 'days',
                    'weeksText' => 'weeks',
                    'monthsText' => 'months',
                    'completionText' => 'Complete!',
                    'celebrationTitle' => 'Congratulations!',
                    'celebrationMessage' => 'You\'ve completed all implementation milestones!',
                    'teamTitle' => 'Your Implementation Team',
                    'contactText' => 'Contact',
                    'chatText' => 'Live Chat',
                    'emailText' => 'Email Support',
                    'phoneText' => 'Phone Support',
                    'completionCelebrationTitle' => 'Implementation Complete!',
                    'completionCelebrationMessage' => 'Congratulations! You\'ve successfully completed all implementation milestones. You\'re now ready to make the most of the platform.',
                    'completionLink' => '/dashboard',
                    'dashboardButtonText' => 'Go to Dashboard',
                    'milestones' => [
                        [
                            'id' => 1,
                            'icon' => 'flag',
                            'title' => 'Project Kickoff',
                            'week' => 1,
                            'responsible' => 'Project Manager',
                            'estimatedHours' => '1 hour',
                            'description' => 'Initial meeting to align on goals, timelines, and success criteria.',
                            'tasks' => [
                                'Schedule kickoff meeting',
                                'Review project scope',
                                'Define success metrics',
                                'Set up communication channels'
                            ],
                            'resources' => [
                                ['name' => 'Kickoff Agenda', 'link' => '/resources/kickoff-agenda'],
                                ['name' => 'Project Plan Template', 'link' => '/resources/project-plan']
                            ]
                        ],
                        [
                            'id' => 2,
                            'icon' => 'check',
                            'title' => 'Requirements Gathering',
                            'week' => 2,
                            'responsible' => 'Business Analyst',
                            'estimatedHours' => '4 hours',
                            'description' => 'Detailed discovery of your business needs and system requirements.',
                            'tasks' => [
                                'Requirements workshop',
                                'System integration review',
                                'User role definition',
                                'Customization needs'
                            ],
                            'resources' => [
                                ['name' => 'Requirements Template', 'link' => '/resources/requirements']
                            ]
                        ],
                        [
                            'id' => 3,
                            'icon' => 'rocket',
                            'title' => 'Environment Setup',
                            'week' => 3,
                            'responsible' => 'Technical Team',
                            'estimatedHours' => '8 hours',
                            'description' => 'Provisioning and configuring your dedicated environment.',
                            'tasks' => [
                                'Environment provisioning',
                                'Security configuration',
                                'Integration setup',
                                'Data migration prep'
                            ],
                            'resources' => [
                                ['name' => 'Setup Guide', 'link' => '/resources/setup-guide']
                            ]
                        ],
                        [
                            'id' => 4,
                            'icon' => 'star',
                            'title' => 'Configuration & Testing',
                            'week' => 4,
                            'responsible' => 'Technical Team + Your Team',
                            'estimatedHours' => '6 hours',
                            'description' => 'Customizing the platform and conducting user acceptance testing.',
                            'tasks' => [
                                'Workflow configuration',
                                'User acceptance testing',
                                'Performance validation',
                                'Bug fixes'
                            ],
                            'resources' => [
                                ['name' => 'UAT Checklist', 'link' => '/resources/uat-checklist']
                            ]
                        ],
                        [
                            'id' => 5,
                            'icon' => 'sparkles',
                            'title' => 'Training & Go-Live',
                            'week' => 5,
                            'responsible' => 'Training Team',
                            'estimatedHours' => '4 hours',
                            'description' => 'Team training and production deployment.',
                            'tasks' => [
                                'User training sessions',
                                'Documentation handover',
                                'Production deployment',
                                'Go-live support'
                            ],
                            'resources' => [
                                ['name' => 'Training Materials', 'link' => '/resources/training'],
                                ['name' => 'User Guide', 'link' => '/resources/user-guide']
                            ]
                        ]
                    ],
                    'showTeam' => true,
                    'teamMembers' => [
                        ['name' => 'Sarah Johnson', 'role' => 'Project Manager', 'contact' => '/team/sarah'],
                        ['name' => 'Mike Chen', 'role' => 'Technical Lead', 'contact' => '/team/mike'],
                        ['name' => 'Emma Davis', 'role' => 'Support Specialist', 'contact' => '/team/emma'],
                        ['name' => 'Your Success Manager', 'role' => 'Customer Success', 'contact' => '/team/success']
                    ],
                    'showSupport' => true,
                    'supportChatLink' => '/support/chat',
                    'supportEmailLink' => '/support/email',
                    'supportPhoneLink' => '/support/phone',
                    'showCta' => true,
                    'ctaText' => 'Need help with your implementation?',
                    'ctaButtonText' => 'Contact Support',
                    'ctaLink' => '/support'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 160,
                'section_key' => 'implementationTimeline',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],


            // Training and Support Section
            [
                'id' => 161,
                'section_key' => 'trainingAndSupport',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Learn & Grow',
                        'backgroundColor' => 'bg-purple-50 dark:bg-purple-900/30',
                        'borderColor' => 'border-purple-200 dark:border-purple-800',
                        'textColor' => 'text-purple-700 dark:text-purple-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Comprehensive',
                        'highlightedText' => 'Training & Support',
                        'suffix' => '',
                        'highlightGradient' => 'from-purple-500 to-pink-500'
                    ],
                    'description' => 'Get the training and support you need to succeed. From video tutorials to live sessions, we\'re here to help.',
                    'initialTab' => 'training',
                    'trainingTabText' => 'Training Programs',
                    'supportTabText' => 'Support Channels',
                    'resourcesTabText' => 'Learning Resources',
                    'learnMoreText' => 'Learn more',
                    'watchNowText' => 'Watch now',
                    'videosTitle' => 'Video Tutorials',
                    'documentationTitle' => 'Documentation',
                    'downloadsTitle' => 'Downloadable Resources',
                    'stats' => [
                        ['icon' => 'video', 'value' => '50+', 'label' => 'Video Tutorials'],
                        ['icon' => 'document', 'value' => '24/7', 'label' => 'Support Available'],
                        ['icon' => 'users', 'value' => '1000+', 'label' => 'Trained Users'],
                        ['icon' => 'star', 'value' => '98%', 'label' => 'Satisfaction Rate']
                    ],
                    'trainingPrograms' => [
                        [
                            'icon' => 'academic',
                            'title' => 'Platform Basics',
                            'description' => 'Learn the fundamentals of the platform and core features.',
                            'duration' => '2 hours',
                            'audience' => 'All users',
                            'features' => [
                                'Navigation and UI overview',
                                'Core feature walkthrough',
                                'Best practices',
                                'Hands-on exercises'
                            ],
                            'link' => '/training/basics'
                        ],
                        [
                            'icon' => 'video',
                            'title' => 'Advanced Features',
                            'description' => 'Master advanced capabilities like automation and integrations.',
                            'duration' => '3 hours',
                            'audience' => 'Power users',
                            'features' => [
                                'Workflow automation',
                                'API integrations',
                                'Custom reporting',
                                'Performance optimization'
                            ],
                            'link' => '/training/advanced'
                        ],
                        [
                            'icon' => 'users',
                            'title' => 'Admin Training',
                            'description' => 'Comprehensive training for system administrators.',
                            'duration' => '4 hours',
                            'audience' => 'Admins',
                            'features' => [
                                'User management',
                                'Security configuration',
                                'System settings',
                                'Troubleshooting'
                            ],
                            'link' => '/training/admin'
                        ]
                    ],
                    'supportChannels' => [
                        [
                            'icon' => 'chat',
                            'name' => 'Live Chat',
                            'description' => 'Get instant answers from our support team',
                            'availability' => '24/7',
                            'cta' => 'Start Chat',
                            'link' => '/support/chat'
                        ],
                        [
                            'icon' => 'mail',
                            'name' => 'Email Support',
                            'description' => 'Send us your questions anytime',
                            'availability' => 'Response within 1 hour',
                            'cta' => 'Send Email',
                            'link' => '/support/email'
                        ],
                        [
                            'icon' => 'phone',
                            'name' => 'Phone Support',
                            'description' => 'Speak directly with a support specialist',
                            'availability' => 'Mon-Fri, 9am-6pm ET',
                            'cta' => 'Call Us',
                            'link' => '/support/phone'
                        ],
                        [
                            'icon' => 'globe',
                            'name' => 'Community Forum',
                            'description' => 'Connect with other users and experts',
                            'availability' => '24/7',
                            'cta' => 'Join Community',
                            'link' => '/community'
                        ]
                    ],
                    'videoTutorials' => [
                        ['title' => 'Getting Started Guide', 'duration' => '5:00', 'link' => '/videos/getting-started'],
                        ['title' => 'Barcode Scanning Tutorial', 'duration' => '8:00', 'link' => '/videos/scanning'],
                        ['title' => 'Analytics Dashboard Deep Dive', 'duration' => '10:00', 'link' => '/videos/analytics']
                    ],
                    'documentation' => [
                        ['title' => 'API Reference', 'link' => '/docs/api'],
                        ['title' => 'Integration Guide', 'link' => '/docs/integrations'],
                        ['title' => 'Security Overview', 'link' => '/docs/security'],
                        ['title' => 'FAQ', 'link' => '/docs/faq']
                    ],
                    'downloads' => [
                        ['name' => 'Quick Start Guide', 'type' => 'PDF', 'size' => '2.5 MB', 'link' => '/downloads/quick-start.pdf'],
                        ['name' => 'Best Practices Guide', 'type' => 'PDF', 'size' => '3.2 MB', 'link' => '/downloads/best-practices.pdf'],
                        ['name' => 'Training Workbook', 'type' => 'PDF', 'size' => '4.1 MB', 'link' => '/downloads/workbook.pdf']
                    ],
                    'showLiveTraining' => true,
                    'liveTrainingTitle' => 'Live Training Sessions',
                    'liveTrainingDescription' => 'Join our expert-led live training sessions to get hands-on experience and ask questions in real-time.',
                    'liveTrainingFrequency' => 'Weekly sessions',
                    'liveTrainingGroupSize' => 'Small groups',
                    'liveTrainingLink' => '/training/live',
                    'viewScheduleText' => 'View Schedule',
                    'showCta' => true,
                    'ctaText' => 'Ready to get started with training?',
                    'ctaButtonText' => 'Contact Training Team',
                    'ctaLink' => '/contact'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 162,
                'section_key' => 'trainingAndSupport',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Support Hub',
                        'backgroundColor' => 'bg-purple-50 dark:bg-purple-900/30',
                        'borderColor' => 'border-purple-200 dark:border-purple-800',
                        'textColor' => 'text-purple-700 dark:text-purple-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Training &',
                        'highlightedText' => 'Support Center',
                        'suffix' => '',
                        'highlightGradient' => 'from-purple-500 to-pink-500'
                    ],
                    'description' => 'Access live training sessions, video tutorials, and get support from our team.',
                    'initialSupportType' => 'chat',
                    'sessionsTitle' => 'Upcoming Training Sessions',
                    'seatsLeftText' => 'seats left',
                    'registerNowText' => 'Register Now',
                    'viewAllSessionsText' => 'View all sessions',
                    'videosTitle' => 'Popular Video Tutorials',
                    'browseAllTutorialsText' => 'Browse all tutorials',
                    'resourcesTitle' => 'Quick Resources',
                    'supportTitle' => 'Get Support',
                    'chatText' => 'Chat',
                    'emailText' => 'Email',
                    'phoneText' => 'Phone',
                    'agentName' => 'Support Agent',
                    'onlineText' => 'Online',
                    'welcomeMessage' => 'Hi! How can I help you today?',
                    'generalOption' => 'General Question',
                    'technicalOption' => 'Technical Issue',
                    'billingOption' => 'Billing Question',
                    'trainingOption' => 'Training Request',
                    'messagePlaceholder' => 'Type your message...',
                    'sendMessageText' => 'Send Message',
                    'confirmationMessage' => 'Message sent! We\'ll respond within 2 hours.',
                    'emailDescription' => 'Get a response within 2 hours during business hours.',
                    'emailPlaceholder' => 'Your email address',
                    'emailMessagePlaceholder' => 'Describe your question or issue...',
                    'sendEmailText' => 'Send Email',
                    'phoneNumber' => '1-800-XXX-XXXX',
                    'phoneAvailability' => 'Available Mon-Fri, 9am-6pm EST',
                    'prioritySupportText' => 'Enterprise customers have 24/7 priority support',
                    'callbackText' => 'Request Callback',
                    'knowledgeBaseTitle' => 'Knowledge Base',
                    'searchPlaceholder' => 'Search for answers...',
                    'browseAllArticlesText' => 'Browse all articles',
                    'communityTitle' => 'Join Our Community',
                    'communityDescription' => 'Connect with 10,000+ users, share best practices, and get help from experts.',
                    'communityMembers' => '10K+',
                    'activeMembersText' => 'Active Members',
                    'joinNowText' => 'Join Now',
                    'trainingSessions' => [
                        [
                            'date' => 'Jan 15, 2024',
                            'time' => '10:00 AM EST',
                            'title' => 'Platform Basics',
                            'description' => 'Learn the fundamentals of the platform',
                            'duration' => '2 hours',
                            'seats' => 15,
                            'registerLink' => '/training/register/basics'
                        ],
                        [
                            'date' => 'Jan 18, 2024',
                            'time' => '2:00 PM EST',
                            'title' => 'Advanced Analytics',
                            'description' => 'Master data insights and reporting',
                            'duration' => '3 hours',
                            'seats' => 8,
                            'registerLink' => '/training/register/analytics'
                        ],
                        [
                            'date' => 'Jan 22, 2024',
                            'time' => '11:00 AM EST',
                            'title' => 'Integration Workshop',
                            'description' => 'Connect your existing systems',
                            'duration' => '4 hours',
                            'seats' => 12,
                            'registerLink' => '/training/register/integrations'
                        ]
                    ],
                    'videoTutorials' => [
                        ['title' => 'Getting Started Guide', 'duration' => '5:00', 'link' => '/videos/getting-started'],
                        ['title' => 'Barcode Scanning Tutorial', 'duration' => '8:00', 'link' => '/videos/scanning'],
                        ['title' => 'Analytics Dashboard', 'duration' => '10:00', 'link' => '/videos/analytics']
                    ],
                    'quickResources' => [
                        ['icon' => 'document', 'name' => 'Quick Start Guide', 'type' => 'PDF', 'link' => '/downloads/quick-start.pdf'],
                        ['icon' => 'document', 'name' => 'API Reference', 'type' => 'PDF', 'link' => '/downloads/api-reference.pdf'],
                        ['icon' => 'document', 'name' => 'Best Practices', 'type' => 'PDF', 'link' => '/downloads/best-practices.pdf'],
                        ['icon' => 'document', 'name' => 'Training Workbook', 'type' => 'PDF', 'link' => '/downloads/workbook.pdf']
                    ],
                    'knowledgeBase' => [
                        ['title' => 'How to set up your account', 'link' => '/kb/account-setup'],
                        ['title' => 'Troubleshooting scan issues', 'link' => '/kb/scan-issues'],
                        ['title' => 'Integrating with Shopify', 'link' => '/kb/shopify-integration'],
                        ['title' => 'Understanding analytics reports', 'link' => '/kb/analytics-reports'],
                        ['title' => 'Managing team permissions', 'link' => '/kb/team-permissions']
                    ],
                    'knowledgeBaseLink' => '/support/kb',
                    'callbackLink' => '/support/callback',
                    'communityLink' => '/community',
                    'allTrainingsLink' => '/training',
                    'allVideosLink' => '/videos',
                    'showCta' => true,
                    'ctaText' => 'Need dedicated training for your team?',
                    'ctaButtonText' => 'Request Enterprise Training',
                    'ctaLink' => '/contact'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 163,
                'section_key' => 'trainingAndSupport',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Learning Hub',
                        'backgroundColor' => 'bg-purple-50 dark:bg-purple-900/30',
                        'borderColor' => 'border-purple-200 dark:border-purple-800',
                        'textColor' => 'text-purple-700 dark:text-purple-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Learning &',
                        'highlightedText' => 'Support Hub',
                        'suffix' => '',
                        'highlightGradient' => 'from-purple-500 to-pink-500'
                    ],
                    'description' => 'Accelerate your success with structured learning paths, live support, and a vibrant community.',
                    'initialPath' => 'beginner',
                    'initialCompletedLessons' => [],
                    'learningPathsTitle' => 'Learning Paths',
                    'learningPathsDescription' => 'Choose your journey and earn certificates',
                    'completeLabel' => 'Complete',
                    'lessonsLabel' => 'lessons',
                    'completedLabel' => 'completed',
                    'lessonLabel' => 'Lesson',
                    'reviewText' => 'Review →',
                    'startText' => 'Start →',
                    'congratulationsTitle' => 'Congratulations!',
                    'certificateMessage' => 'You\'ve completed the {path} path! Download your certificate of completion.',
                    'downloadCertificateText' => 'Download Certificate',
                    'liveSupportTitle' => 'Live Support',
                    'liveSupportDescription' => 'Get instant help from our support team',
                    'agentsOnlineText' => '5 agents online',
                    'startLiveChatText' => 'Start Live Chat',
                    'emailSupportText' => 'Email support',
                    'emailResponseText' => '2hr response',
                    'phoneSupportText' => 'Phone support',
                    'priorityText' => 'Priority for Enterprise',
                    'knowledgeBaseTitle' => 'Knowledge Base',
                    'searchPlaceholder' => 'Search for articles, guides, and FAQs...',
                    'browseAllText' => 'Browse all articles',
                    'eventsTitle' => 'Upcoming Events',
                    'eventsDescription' => 'Live webinars and training sessions',
                    'viewAllText' => 'View all',
                    'registerText' => 'Register',
                    'communityTitle' => 'Join Our Community',
                    'communityDescription' => 'Connect with 10,000+ users, share best practices, get help, and stay updated on new features.',
                    'joinCommunityText' => 'Join Community',
                    'browseForumText' => 'Browse Forum',
                    'certificateLink' => '/certificate/download',
                    'chatLink' => '/support/chat',
                    'knowledgeBaseLink' => '/support/kb',
                    'allEventsLink' => '/events',
                    'communityLink' => '/community',
                    'forumLink' => '/forum',
                    'stats' => [
                        ['icon' => 'video', 'value' => '50+', 'label' => 'Video Tutorials'],
                        ['icon' => 'users', 'value' => '10K+', 'label' => 'Community Members'],
                        ['icon' => 'clock', 'value' => '24/7', 'label' => 'Support Available'],
                        ['icon' => 'star', 'value' => '98%', 'label' => 'Satisfaction Rate']
                    ],
                    'learningPaths' => [
                        [
                            'id' => 'beginner',
                            'name' => 'Getting Started',
                            'icon' => 'academic',
                            'description' => 'Learn the fundamentals and core features',
                            'lessons' => [
                                ['id' => 'b1', 'title' => 'Platform Overview', 'description' => 'Understand the key features and navigation', 'duration' => '5 min', 'type' => 'video', 'link' => '/lessons/overview'],
                                ['id' => 'b2', 'title' => 'Setting Up Your Account', 'description' => 'Configure your profile and preferences', 'duration' => '10 min', 'type' => 'video', 'link' => '/lessons/setup'],
                                ['id' => 'b3', 'title' => 'First Scan Tutorial', 'description' => 'Learn how to scan barcodes', 'duration' => '8 min', 'type' => 'video', 'link' => '/lessons/first-scan'],
                                ['id' => 'b4', 'title' => 'Knowledge Check', 'description' => 'Test your understanding', 'duration' => '5 min', 'type' => 'quiz', 'link' => '/lessons/quiz-beginner']
                            ]
                        ],
                        [
                            'id' => 'intermediate',
                            'name' => 'Advanced Features',
                            'icon' => 'badge',
                            'description' => 'Master automation and integrations',
                            'lessons' => [
                                ['id' => 'i1', 'title' => 'Workflow Automation', 'description' => 'Create automated processes', 'duration' => '15 min', 'type' => 'video', 'link' => '/lessons/automation'],
                                ['id' => 'i2', 'title' => 'API Integration', 'description' => 'Connect with external systems', 'duration' => '20 min', 'type' => 'video', 'link' => '/lessons/api'],
                                ['id' => 'i3', 'title' => 'Custom Reporting', 'description' => 'Build powerful analytics', 'duration' => '12 min', 'type' => 'video', 'link' => '/lessons/reporting'],
                                ['id' => 'i4', 'title' => 'Advanced Quiz', 'description' => 'Validate your skills', 'duration' => '10 min', 'type' => 'quiz', 'link' => '/lessons/quiz-advanced']
                            ]
                        ],
                        [
                            'id' => 'expert',
                            'name' => 'Admin & Security',
                            'icon' => 'shield',
                            'description' => 'Enterprise administration and security',
                            'lessons' => [
                                ['id' => 'e1', 'title' => 'User Management', 'description' => 'Manage team access and roles', 'duration' => '10 min', 'type' => 'video', 'link' => '/lessons/users'],
                                ['id' => 'e2', 'title' => 'Security Settings', 'description' => 'Configure security policies', 'duration' => '15 min', 'type' => 'video', 'link' => '/lessons/security'],
                                ['id' => 'e3', 'title' => 'Compliance & Auditing', 'description' => 'Meet regulatory requirements', 'duration' => '12 min', 'type' => 'video', 'link' => '/lessons/compliance'],
                                ['id' => 'e4', 'title' => 'Expert Certification', 'description' => 'Final assessment', 'duration' => '15 min', 'type' => 'quiz', 'link' => '/lessons/quiz-expert']
                            ]
                        ]
                    ],
                    'categories' => [
                        ['id' => 'all', 'name' => 'All'],
                        ['id' => 'getting-started', 'name' => 'Getting Started'],
                        ['id' => 'integration', 'name' => 'Integration'],
                        ['id' => 'automation', 'name' => 'Automation'],
                        ['id' => 'troubleshooting', 'name' => 'Troubleshooting']
                    ],
                    'supportResources' => [
                        ['icon' => 'book', 'title' => 'How to set up your account', 'category' => 'getting-started', 'link' => '/kb/account-setup'],
                        ['icon' => 'bulb', 'title' => 'Troubleshooting scan issues', 'category' => 'troubleshooting', 'link' => '/kb/scan-issues'],
                        ['icon' => 'globe', 'title' => 'Integrating with Shopify', 'category' => 'integration', 'link' => '/kb/shopify-integration'],
                        ['icon' => 'chart', 'title' => 'Understanding analytics reports', 'category' => 'getting-started', 'link' => '/kb/analytics-reports'],
                        ['icon' => 'users', 'title' => 'Managing team permissions', 'category' => 'getting-started', 'link' => '/kb/team-permissions'],
                        ['icon' => 'play', 'title' => 'Automation rules guide', 'category' => 'automation', 'link' => '/kb/automation-rules'],
                        ['icon' => 'mail', 'title' => 'Setting up email notifications', 'category' => 'automation', 'link' => '/kb/email-notifications']
                    ],
                    'upcomingEvents' => [
                        [
                            'icon' => 'video',
                            'date' => 'Jan 15, 2024',
                            'time' => '10:00 AM EST',
                            'title' => 'Platform Basics Webinar',
                            'description' => 'Learn the fundamentals',
                            'duration' => '1 hour',
                            'registerLink' => '/events/basics'
                        ],
                        [
                            'icon' => 'academic',
                            'date' => 'Jan 18, 2024',
                            'time' => '2:00 PM EST',
                            'title' => 'Advanced Analytics Workshop',
                            'description' => 'Master data insights',
                            'duration' => '2 hours',
                            'registerLink' => '/events/analytics'
                        ],
                        [
                            'icon' => 'chat',
                            'date' => 'Jan 22, 2024',
                            'time' => '11:00 AM EST',
                            'title' => 'Integration Q&A Session',
                            'description' => 'Live troubleshooting',
                            'duration' => '1.5 hours',
                            'registerLink' => '/events/integration-qa'
                        ]
                    ],
                    'communityFeatures' => [
                        ['icon' => 'check', 'label' => 'Active discussions'],
                        ['icon' => 'star', 'label' => 'Expert answers'],
                        ['icon' => 'bulb', 'label' => 'Feature ideas']
                    ],
                    'showCta' => true,
                    'ctaText' => 'Need custom training for your organization?',
                    'ctaButtonText' => 'Contact Learning Team',
                    'ctaLink' => '/contact'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 164,
                'section_key' => 'trainingAndSupport',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Success Metrics Section
            [
                'id' => 165,
                'section_key' => 'successMetrics',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Proven Results',
                        'backgroundColor' => 'bg-green-50 dark:bg-green-900/30',
                        'borderColor' => 'border-green-200 dark:border-green-800',
                        'textColor' => 'text-green-700 dark:text-green-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Measurable',
                        'highlightedText' => 'Success Metrics',
                        'suffix' => 'That Matter',
                        'highlightGradient' => 'from-green-500 to-emerald-500'
                    ],
                    'description' => 'See how our customers are achieving remarkable results with our platform. Real data, real outcomes.',
                    'initialTab' => 'overview',
                    'metrics' => [
                        [
                            'id' => 'efficiency',
                            'icon' => 'clock',
                            'value' => '75',
                            'suffix' => '%',
                            'label' => 'Faster Processing',
                            'description' => 'Reduction in inventory processing time',
                            'trend' => 'up',
                            'change' => '+32%'
                        ],
                        [
                            'id' => 'accuracy',
                            'icon' => 'check',
                            'value' => '99.9',
                            'suffix' => '%',
                            'label' => 'Scan Accuracy',
                            'description' => 'Barcode scanning success rate',
                            'trend' => 'up',
                            'change' => '+15%'
                        ],
                        [
                            'id' => 'savings',
                            'icon' => 'dollar',
                            'value' => '250000',
                            'suffix' => '',
                            'label' => 'Annual Savings',
                            'description' => 'Average customer cost reduction',
                            'trend' => 'up',
                            'change' => '+28%'
                        ],
                        [
                            'id' => 'customers',
                            'icon' => 'users',
                            'value' => '10000',
                            'suffix' => '',
                            'label' => 'Happy Customers',
                            'description' => 'Businesses trust our platform',
                            'trend' => 'up',
                            'change' => '+45%'
                        ]
                    ],
                    'testimonial' => [
                        'quote' => 'The platform transformed our inventory management. We\'ve seen dramatic improvements in efficiency and accuracy across all our warehouses.',
                        'author' => 'Sarah Johnson',
                        'role' => 'Operations Director',
                        'company' => 'Global Logistics Inc.',
                        'result' => '287% ROI',
                        'timeline' => '8 months'
                    ],
                    'detailedMetrics' => [
                        'overview' => [
                            [
                                'icon' => 'chart',
                                'title' => 'Overall Efficiency Gain',
                                'value' => '+67%',
                                'description' => 'Average improvement in operational efficiency across all customers',
                                'industryAvg' => '+25%',
                                'beatsAverage' => true
                            ],
                            [
                                'icon' => 'trending',
                                'title' => 'Time to Value',
                                'value' => '2.5 weeks',
                                'description' => 'Average time from implementation to seeing measurable results',
                                'industryAvg' => '6 weeks',
                                'beatsAverage' => true
                            ]
                        ],
                        'operational' => [
                            [
                                'icon' => 'clock',
                                'title' => 'Processing Time Reduction',
                                'value' => '-68%',
                                'description' => 'Reduction in inventory processing and fulfillment time',
                                'industryAvg' => '-30%',
                                'beatsAverage' => true
                            ],
                            [
                                'icon' => 'database',
                                'title' => 'Data Entry Errors',
                                'value' => '-94%',
                                'description' => 'Reduction in manual data entry mistakes',
                                'industryAvg' => '-60%',
                                'beatsAverage' => true
                            ],
                            [
                                'icon' => 'truck',
                                'title' => 'Order Fulfillment Speed',
                                'value' => '+53%',
                                'description' => 'Improvement in order processing and shipping times',
                                'industryAvg' => '+25%',
                                'beatsAverage' => true
                            ],
                            [
                                'icon' => 'shield',
                                'title' => 'Inventory Accuracy',
                                'value' => '99.7%',
                                'description' => 'Real-time inventory accuracy rate',
                                'industryAvg' => '95%',
                                'beatsAverage' => true
                            ]
                        ],
                        'financial' => [
                            [
                                'icon' => 'dollar',
                                'title' => 'Cost Savings',
                                'value' => '$250K',
                                'description' => 'Average annual cost savings for enterprise customers',
                                'industryAvg' => '$100K',
                                'beatsAverage' => true
                            ],
                            [
                                'icon' => 'calculator',
                                'title' => 'ROI',
                                'value' => '287%',
                                'description' => 'Average return on investment over 12 months',
                                'industryAvg' => '150%',
                                'beatsAverage' => true
                            ],
                            [
                                'icon' => 'clock',
                                'title' => 'Payback Period',
                                'value' => '4.2 months',
                                'description' => 'Time to recoup initial investment',
                                'industryAvg' => '9 months',
                                'beatsAverage' => true
                            ],
                            [
                                'icon' => 'chart',
                                'title' => 'Revenue Growth',
                                'value' => '+42%',
                                'description' => 'Average revenue increase after implementation',
                                'industryAvg' => '+18%',
                                'beatsAverage' => true
                            ]
                        ],
                        'customer' => [
                            [
                                'icon' => 'star',
                                'title' => 'Customer Satisfaction',
                                'value' => '4.9/5',
                                'description' => 'Average customer satisfaction rating',
                                'industryAvg' => '4.2/5',
                                'beatsAverage' => true
                            ],
                            [
                                'icon' => 'users',
                                'title' => 'Customer Retention',
                                'value' => '98%',
                                'description' => 'Annual customer retention rate',
                                'industryAvg' => '85%',
                                'beatsAverage' => true
                            ],
                            [
                                'icon' => 'check',
                                'title' => 'Implementation Success',
                                'value' => '99%',
                                'description' => 'Successful implementation rate',
                                'industryAvg' => '85%',
                                'beatsAverage' => true
                            ],
                            [
                                'icon' => 'group',
                                'title' => 'User Adoption',
                                'value' => '94%',
                                'description' => 'Active user adoption rate after 30 days',
                                'industryAvg' => '70%',
                                'beatsAverage' => true
                            ]
                        ]
                    ],
                    'showRoiCalculator' => true,
                    'roiTitle' => 'Calculate Your ROI',
                    'roiDescription' => 'See how much you could save with our platform. Get a personalized estimate in minutes.',
                    'roiLink' => '/roi-calculator',
                    'avgSavings' => '25-35%',
                    'avgPayback' => '3-6',
                    'avgRoi' => '300%',
                    'showStories' => true,
                    'storiesTitle' => 'Customer Success Stories',
                    'storiesDescription' => 'Real results from real businesses',
                    'successStories' => [
                        [
                            'icon' => 'cart',
                            'company' => 'RetailPro Solutions',
                            'description' => 'Streamlined inventory across 50+ locations, reducing stockouts by 78%',
                            'result' => '78% reduction',
                            'link' => '/stories/retailpro'
                        ],
                        [
                            'icon' => 'truck',
                            'company' => 'LogiChain Logistics',
                            'description' => 'Automated warehouse operations, cutting processing time by 65%',
                            'result' => '65% faster',
                            'link' => '/stories/logichain'
                        ],
                        [
                            'icon' => 'users',
                            'company' => 'HealthCare Plus',
                            'description' => 'Improved patient supply tracking with 99.9% accuracy',
                            'result' => '$1.2M saved',
                            'link' => '/stories/healthcare'
                        ]
                    ],
                    'showCta' => true,
                    'ctaText' => 'Ready to achieve these results?',
                    'ctaButtonText' => 'Start Your Success Story',
                    'ctaLink' => '/demo'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 166,
                'section_key' => 'successMetrics',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Performance Dashboard',
                        'backgroundColor' => 'bg-green-50 dark:bg-green-900/30',
                        'borderColor' => 'border-green-200 dark:border-green-800',
                        'textColor' => 'text-green-700 dark:text-green-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Interactive',
                        'highlightedText' => 'Performance Dashboard',
                        'suffix' => '',
                        'highlightGradient' => 'from-green-500 to-emerald-500'
                    ],
                    'description' => 'Track your success with real-time metrics, industry benchmarks, and ROI projections. Click on any KPI to explore detailed trends.',
                    'initialMetric' => 'inventory',
                    'initialTimeRange' => '6months',
                    'timeRanges' => [
                        ['value' => '3months', 'label' => '3 Months'],
                        ['value' => '6months', 'label' => '6 Months'],
                        ['value' => '1year', 'label' => '1 Year']
                    ],
                    'metrics' => [
                        [
                            'id' => 'inventory',
                            'icon' => 'database',
                            'current' => '99.7',
                            'suffix' => '%',
                            'label' => 'Inventory Accuracy',
                            'previous' => '94.2%',
                            'trend' => 'up',
                            'change' => '+5.5%'
                        ],
                        [
                            'id' => 'efficiency',
                            'icon' => 'clock',
                            'current' => '68',
                            'suffix' => '%',
                            'label' => 'Process Efficiency',
                            'previous' => '45%',
                            'trend' => 'up',
                            'change' => '+23%'
                        ],
                        [
                            'id' => 'savings',
                            'icon' => 'dollar',
                            'current' => '187000',
                            'suffix' => '',
                            'label' => 'Annual Savings',
                            'previous' => '$89K',
                            'trend' => 'up',
                            'change' => '+110%'
                        ],
                        [
                            'id' => 'roi',
                            'icon' => 'calculator',
                            'current' => '287',
                            'suffix' => '%',
                            'label' => 'Average ROI',
                            'previous' => '156%',
                            'trend' => 'up',
                            'change' => '+131%'
                        ]
                    ],
                    'chartData' => [
                        'inventory' => [
                            '3months' => [
                                ['label' => 'Oct', 'value' => 96.2, 'suffix' => '%'],
                                ['label' => 'Nov', 'value' => 97.8, 'suffix' => '%'],
                                ['label' => 'Dec', 'value' => 98.5, 'suffix' => '%'],
                                ['label' => 'Jan', 'value' => 99.1, 'suffix' => '%'],
                                ['label' => 'Feb', 'value' => 99.4, 'suffix' => '%'],
                                ['label' => 'Mar', 'value' => 99.7, 'suffix' => '%']
                            ],
                            '6months' => [
                                ['label' => 'Oct', 'value' => 94.2, 'suffix' => '%'],
                                ['label' => 'Nov', 'value' => 95.8, 'suffix' => '%'],
                                ['label' => 'Dec', 'value' => 97.3, 'suffix' => '%'],
                                ['label' => 'Jan', 'value' => 98.2, 'suffix' => '%'],
                                ['label' => 'Feb', 'value' => 98.9, 'suffix' => '%'],
                                ['label' => 'Mar', 'value' => 99.7, 'suffix' => '%']
                            ],
                            '1year' => [
                                ['label' => 'Apr', 'value' => 92.1, 'suffix' => '%'],
                                ['label' => 'May', 'value' => 93.5, 'suffix' => '%'],
                                ['label' => 'Jun', 'value' => 94.8, 'suffix' => '%'],
                                ['label' => 'Jul', 'value' => 95.9, 'suffix' => '%'],
                                ['label' => 'Aug', 'value' => 96.7, 'suffix' => '%'],
                                ['label' => 'Sep', 'value' => 97.4, 'suffix' => '%'],
                                ['label' => 'Oct', 'value' => 98.1, 'suffix' => '%'],
                                ['label' => 'Nov', 'value' => 98.6, 'suffix' => '%'],
                                ['label' => 'Dec', 'value' => 99.0, 'suffix' => '%'],
                                ['label' => 'Jan', 'value' => 99.3, 'suffix' => '%'],
                                ['label' => 'Feb', 'value' => 99.5, 'suffix' => '%'],
                                ['label' => 'Mar', 'value' => 99.7, 'suffix' => '%']
                            ]
                        ],
                        'efficiency' => [
                            '3months' => [
                                ['label' => 'Oct', 'value' => 52, 'suffix' => '%'],
                                ['label' => 'Nov', 'value' => 56, 'suffix' => '%'],
                                ['label' => 'Dec', 'value' => 59, 'suffix' => '%'],
                                ['label' => 'Jan', 'value' => 63, 'suffix' => '%'],
                                ['label' => 'Feb', 'value' => 66, 'suffix' => '%'],
                                ['label' => 'Mar', 'value' => 68, 'suffix' => '%']
                            ],
                            '6months' => [
                                ['label' => 'Oct', 'value' => 45, 'suffix' => '%'],
                                ['label' => 'Nov', 'value' => 48, 'suffix' => '%'],
                                ['label' => 'Dec', 'value' => 52, 'suffix' => '%'],
                                ['label' => 'Jan', 'value' => 57, 'suffix' => '%'],
                                ['label' => 'Feb', 'value' => 63, 'suffix' => '%'],
                                ['label' => 'Mar', 'value' => 68, 'suffix' => '%']
                            ],
                            '1year' => [
                                ['label' => 'Apr', 'value' => 38, 'suffix' => '%'],
                                ['label' => 'May', 'value' => 40, 'suffix' => '%'],
                                ['label' => 'Jun', 'value' => 42, 'suffix' => '%'],
                                ['label' => 'Jul', 'value' => 44, 'suffix' => '%'],
                                ['label' => 'Aug', 'value' => 46, 'suffix' => '%'],
                                ['label' => 'Sep', 'value' => 48, 'suffix' => '%'],
                                ['label' => 'Oct', 'value' => 52, 'suffix' => '%'],
                                ['label' => 'Nov', 'value' => 56, 'suffix' => '%'],
                                ['label' => 'Dec', 'value' => 59, 'suffix' => '%'],
                                ['label' => 'Jan', 'value' => 63, 'suffix' => '%'],
                                ['label' => 'Feb', 'value' => 66, 'suffix' => '%'],
                                ['label' => 'Mar', 'value' => 68, 'suffix' => '%']
                            ]
                        ],
                        'savings' => [
                            '3months' => [
                                ['label' => 'Oct', 'value' => 12500, 'suffix' => ''],
                                ['label' => 'Nov', 'value' => 14200, 'suffix' => ''],
                                ['label' => 'Dec', 'value' => 15800, 'suffix' => ''],
                                ['label' => 'Jan', 'value' => 16900, 'suffix' => ''],
                                ['label' => 'Feb', 'value' => 17800, 'suffix' => ''],
                                ['label' => 'Mar', 'value' => 18700, 'suffix' => '']
                            ],
                            '6months' => [
                                ['label' => 'Oct', 'value' => 8900, 'suffix' => ''],
                                ['label' => 'Nov', 'value' => 10200, 'suffix' => ''],
                                ['label' => 'Dec', 'value' => 11800, 'suffix' => ''],
                                ['label' => 'Jan', 'value' => 13500, 'suffix' => ''],
                                ['label' => 'Feb', 'value' => 15200, 'suffix' => ''],
                                ['label' => 'Mar', 'value' => 18700, 'suffix' => '']
                            ],
                            '1year' => [
                                ['label' => 'Apr', 'value' => 6200, 'suffix' => ''],
                                ['label' => 'May', 'value' => 7100, 'suffix' => ''],
                                ['label' => 'Jun', 'value' => 7900, 'suffix' => ''],
                                ['label' => 'Jul', 'value' => 8500, 'suffix' => ''],
                                ['label' => 'Aug', 'value' => 9200, 'suffix' => ''],
                                ['label' => 'Sep', 'value' => 10100, 'suffix' => ''],
                                ['label' => 'Oct', 'value' => 11200, 'suffix' => ''],
                                ['label' => 'Nov', 'value' => 12500, 'suffix' => ''],
                                ['label' => 'Dec', 'value' => 14000, 'suffix' => ''],
                                ['label' => 'Jan', 'value' => 15600, 'suffix' => ''],
                                ['label' => 'Feb', 'value' => 17100, 'suffix' => ''],
                                ['label' => 'Mar', 'value' => 18700, 'suffix' => '']
                            ]
                        ],
                        'roi' => [
                            '3months' => [
                                ['label' => 'Oct', 'value' => 210, 'suffix' => '%'],
                                ['label' => 'Nov', 'value' => 225, 'suffix' => '%'],
                                ['label' => 'Dec', 'value' => 238, 'suffix' => '%'],
                                ['label' => 'Jan', 'value' => 252, 'suffix' => '%'],
                                ['label' => 'Feb', 'value' => 268, 'suffix' => '%'],
                                ['label' => 'Mar', 'value' => 287, 'suffix' => '%']
                            ],
                            '6months' => [
                                ['label' => 'Oct', 'value' => 156, 'suffix' => '%'],
                                ['label' => 'Nov', 'value' => 168, 'suffix' => '%'],
                                ['label' => 'Dec', 'value' => 182, 'suffix' => '%'],
                                ['label' => 'Jan', 'value' => 198, 'suffix' => '%'],
                                ['label' => 'Feb', 'value' => 215, 'suffix' => '%'],
                                ['label' => 'Mar', 'value' => 287, 'suffix' => '%']
                            ],
                            '1year' => [
                                ['label' => 'Apr', 'value' => 95, 'suffix' => '%'],
                                ['label' => 'May', 'value' => 108, 'suffix' => '%'],
                                ['label' => 'Jun', 'value' => 120, 'suffix' => '%'],
                                ['label' => 'Jul', 'value' => 132, 'suffix' => '%'],
                                ['label' => 'Aug', 'value' => 143, 'suffix' => '%'],
                                ['label' => 'Sep', 'value' => 156, 'suffix' => '%'],
                                ['label' => 'Oct', 'value' => 170, 'suffix' => '%'],
                                ['label' => 'Nov', 'value' => 185, 'suffix' => '%'],
                                ['label' => 'Dec', 'value' => 201, 'suffix' => '%'],
                                ['label' => 'Jan', 'value' => 220, 'suffix' => '%'],
                                ['label' => 'Feb', 'value' => 242, 'suffix' => '%'],
                                ['label' => 'Mar', 'value' => 287, 'suffix' => '%']
                            ]
                        ],
                        'default' => [
                            '3months' => [
                                ['label' => 'Oct', 'value' => 100, 'suffix' => ''],
                                ['label' => 'Nov', 'value' => 120, 'suffix' => ''],
                                ['label' => 'Dec', 'value' => 140, 'suffix' => ''],
                                ['label' => 'Jan', 'value' => 160, 'suffix' => ''],
                                ['label' => 'Feb', 'value' => 180, 'suffix' => ''],
                                ['label' => 'Mar', 'value' => 200, 'suffix' => '']
                            ],
                            '6months' => [
                                ['label' => 'Oct', 'value' => 80, 'suffix' => ''],
                                ['label' => 'Nov', 'value' => 95, 'suffix' => ''],
                                ['label' => 'Dec', 'value' => 110, 'suffix' => ''],
                                ['label' => 'Jan', 'value' => 130, 'suffix' => ''],
                                ['label' => 'Feb', 'value' => 155, 'suffix' => ''],
                                ['label' => 'Mar', 'value' => 200, 'suffix' => '']
                            ],
                            '1year' => [
                                ['label' => 'Apr', 'value' => 45, 'suffix' => ''],
                                ['label' => 'May', 'value' => 52, 'suffix' => ''],
                                ['label' => 'Jun', 'value' => 60, 'suffix' => ''],
                                ['label' => 'Jul', 'value' => 68, 'suffix' => ''],
                                ['label' => 'Aug', 'value' => 78, 'suffix' => ''],
                                ['label' => 'Sep', 'value' => 88, 'suffix' => ''],
                                ['label' => 'Oct', 'value' => 100, 'suffix' => ''],
                                ['label' => 'Nov', 'value' => 115, 'suffix' => ''],
                                ['label' => 'Dec', 'value' => 132, 'suffix' => ''],
                                ['label' => 'Jan', 'value' => 152, 'suffix' => ''],
                                ['label' => 'Feb', 'value' => 175, 'suffix' => ''],
                                ['label' => 'Mar', 'value' => 200, 'suffix' => '']
                            ]
                        ]
                    ],
                    'benchmarks' => [
                        ['metric' => 'Inventory Accuracy', 'yourScore' => 99.7, 'industryAvg' => 94.2],
                        ['metric' => 'Order Fulfillment Speed', 'yourScore' => 2.3, 'industryAvg' => 4.1],
                        ['metric' => 'Cost Reduction', 'yourScore' => 28, 'industryAvg' => 15],
                        ['metric' => 'Customer Satisfaction', 'yourScore' => 4.9, 'industryAvg' => 4.2]
                    ],
                    'roiProjection' => [
                        'year1' => '125K',
                        'year3' => '450K',
                        'payback' => '4.2'
                    ],
                    'roiLink' => '/roi-calculator',
                    'showTimeline' => true,
                    'timeline' => [
                        ['month' => 'Month 1', 'title' => 'Implementation Complete', 'description' => 'System deployed and initial training completed', 'result' => '85% user adoption'],
                        ['month' => 'Month 3', 'title' => 'First Milestone Achieved', 'description' => 'Inventory accuracy reaches 98%', 'result' => '$25K saved'],
                        ['month' => 'Month 6', 'title' => 'Process Optimization', 'description' => 'Automated workflows fully operational', 'result' => '50% time reduction'],
                        ['month' => 'Month 12', 'title' => 'ROI Target Exceeded', 'description' => 'Full platform optimization achieved', 'result' => '287% ROI achieved']
                    ],
                    'showCustomers' => true,
                    'customersTitle' => 'Trusted by Industry Leaders',
                    'customersDescription' => 'Join 10,000+ businesses achieving remarkable results',
                    'customerLogos' => [
                        ['icon' => 'cart', 'name' => 'RetailPro', 'result' => '78% faster'],
                        ['icon' => 'truck', 'name' => 'LogiChain', 'result' => '$1.2M saved'],
                        ['icon' => 'users', 'name' => 'HealthPlus', 'result' => '99.9% accuracy'],
                        ['icon' => 'database', 'name' => 'TechCorp', 'result' => '3x ROI']
                    ],
                    'showDownload' => true,
                    'downloadText' => 'Want the full picture?',
                    'reportLink' => '/reports/success-metrics',
                    'showCta' => true,
                    'ctaText' => 'Ready to see these results for your business?',
                    'ctaButtonText' => 'Get Your Free Assessment',
                    'ctaLink' => '/demo'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 167,
                'section_key' => 'successMetrics',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Advanced Analytics',
                        'backgroundColor' => 'bg-green-50 dark:bg-green-900/30',
                        'borderColor' => 'border-green-200 dark:border-green-800',
                        'textColor' => 'text-green-700 dark:text-green-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Data-Driven',
                        'highlightedText' => 'Success Metrics',
                        'suffix' => '',
                        'highlightGradient' => 'from-green-500 to-emerald-500'
                    ],
                    'description' => 'Advanced analytics dashboard with AI-powered insights, predictive forecasting, and goal tracking to help you achieve your business objectives.',
                    'initialSegment' => 'all',
                    'initialPrediction' => 'inventory',
                    'showAIInsights' => true,
                    'aiInsightText' => 'Based on your data, we predict you could achieve 32% faster inventory turnover by implementing automated reordering. Early adopters are seeing 2.5x ROI within 6 months.',
                    'aiInsightLink' => '/insights',
                    'showSegmentation' => true,
                    'customerSegments' => [
                        [
                            'id' => 'retail',
                            'name' => 'Retail',
                            'icon' => 'cart',
                            'metrics' => [
                                ['icon' => 'chart', 'label' => 'Avg. ROI', 'value' => '312%', 'trend' => 'up', 'change' => '+28%'],
                                ['icon' => 'clock', 'label' => 'Time to Value', 'value' => '2.3 mo', 'trend' => 'down', 'change' => '-35%'],
                                ['icon' => 'users', 'label' => 'Adoption Rate', 'value' => '96%', 'trend' => 'up', 'change' => '+12%'],
                                ['icon' => 'dollar', 'label' => 'Cost Savings', 'value' => '$187K', 'trend' => 'up', 'change' => '+42%']
                            ]
                        ],
                        [
                            'id' => 'warehouse',
                            'name' => 'Warehouse',
                            'icon' => 'truck',
                            'metrics' => [
                                ['icon' => 'chart', 'label' => 'Avg. ROI', 'value' => '287%', 'trend' => 'up', 'change' => '+31%'],
                                ['icon' => 'clock', 'label' => 'Time to Value', 'value' => '3.1 mo', 'trend' => 'down', 'change' => '-28%'],
                                ['icon' => 'users', 'label' => 'Adoption Rate', 'value' => '94%', 'trend' => 'up', 'change' => '+15%'],
                                ['icon' => 'dollar', 'label' => 'Cost Savings', 'value' => '$245K', 'trend' => 'up', 'change' => '+38%']
                            ]
                        ],
                        [
                            'id' => 'manufacturing',
                            'name' => 'Manufacturing',
                            'icon' => 'cog',
                            'metrics' => [
                                ['icon' => 'chart', 'label' => 'Avg. ROI', 'value' => '254%', 'trend' => 'up', 'change' => '+22%'],
                                ['icon' => 'clock', 'label' => 'Time to Value', 'value' => '3.8 mo', 'trend' => 'down', 'change' => '-25%'],
                                ['icon' => 'users', 'label' => 'Adoption Rate', 'value' => '91%', 'trend' => 'up', 'change' => '+18%'],
                                ['icon' => 'dollar', 'label' => 'Cost Savings', 'value' => '$312K', 'trend' => 'up', 'change' => '+45%']
                            ]
                        ]
                    ],
                    'overviewMetrics' => [
                        ['icon' => 'chart', 'label' => 'Avg. ROI', 'value' => '287%', 'trend' => 'up', 'change' => '+28%'],
                        ['icon' => 'clock', 'label' => 'Time to Value', 'value' => '2.8 mo', 'trend' => 'down', 'change' => '-32%'],
                        ['icon' => 'users', 'label' => 'Adoption Rate', 'value' => '94%', 'trend' => 'up', 'change' => '+14%'],
                        ['icon' => 'dollar', 'label' => 'Cost Savings', 'value' => '$215K', 'trend' => 'up', 'change' => '+40%']
                    ],
                    'showPredictions' => true,
                    'predictionTypes' => [
                        ['value' => 'inventory', 'label' => 'Inventory', 'icon' => 'database'],
                        ['value' => 'demand', 'label' => 'Demand', 'icon' => 'trending'],
                        ['value' => 'costs', 'label' => 'Cost Savings', 'icon' => 'dollar']
                    ],
                    'predictions' => [
                        'inventory' => [
                            'title' => 'Inventory Turnover Forecast',
                            'current' => 72,
                            'potential' => 94,
                            'improvement' => 22,
                            'insight' => 'AI analysis suggests implementing automated reordering could increase turnover by 31% within 90 days.',
                            'data' => [
                                ['month' => 'Jan', 'actual' => 65, 'predicted' => 68, 'suffix' => '%'],
                                ['month' => 'Feb', 'actual' => 68, 'predicted' => 72, 'suffix' => '%'],
                                ['month' => 'Mar', 'actual' => 72, 'predicted' => 76, 'suffix' => '%'],
                                ['month' => 'Apr', 'actual' => 74, 'predicted' => 81, 'suffix' => '%'],
                                ['month' => 'May', 'actual' => 76, 'predicted' => 85, 'suffix' => '%'],
                                ['month' => 'Jun', 'actual' => 78, 'predicted' => 90, 'suffix' => '%']
                            ]
                        ],
                        'demand' => [
                            'title' => 'Demand Forecast Accuracy',
                            'current' => 68,
                            'potential' => 89,
                            'improvement' => 21,
                            'insight' => 'Machine learning models can improve forecast accuracy by 32% using historical pattern recognition.',
                            'data' => [
                                ['month' => 'Jan', 'actual' => 62, 'predicted' => 65, 'suffix' => '%'],
                                ['month' => 'Feb', 'actual' => 64, 'predicted' => 68, 'suffix' => '%'],
                                ['month' => 'Mar', 'actual' => 66, 'predicted' => 72, 'suffix' => '%'],
                                ['month' => 'Apr', 'actual' => 68, 'predicted' => 76, 'suffix' => '%'],
                                ['month' => 'May', 'actual' => 69, 'predicted' => 81, 'suffix' => '%'],
                                ['month' => 'Jun', 'actual' => 70, 'predicted' => 85, 'suffix' => '%']
                            ]
                        ],
                        'costs' => [
                            'title' => 'Cost Reduction Forecast',
                            'current' => 15,
                            'potential' => 28,
                            'improvement' => 13,
                            'insight' => 'Optimized inventory management could reduce carrying costs by up to 35% annually.',
                            'data' => [
                                ['month' => 'Jan', 'actual' => 12, 'predicted' => 14, 'suffix' => '%'],
                                ['month' => 'Feb', 'actual' => 13, 'predicted' => 16, 'suffix' => '%'],
                                ['month' => 'Mar', 'actual' => 14, 'predicted' => 18, 'suffix' => '%'],
                                ['month' => 'Apr', 'actual' => 15, 'predicted' => 21, 'suffix' => '%'],
                                ['month' => 'May', 'actual' => 16, 'predicted' => 24, 'suffix' => '%'],
                                ['month' => 'Jun', 'actual' => 17, 'predicted' => 27, 'suffix' => '%']
                            ]
                        ]
                    ],
                    'showGoals' => true,
                    'goals' => [
                        ['id' => 'inventory_accuracy', 'icon' => 'check', 'title' => 'Inventory Accuracy', 'target' => '99.5%', 'current' => '97.2%', 'remaining' => '2.3%', 'link' => '/goals/inventory'],
                        ['id' => 'order_fulfillment', 'icon' => 'truck', 'title' => 'Order Fulfillment Speed', 'target' => '2.0 hours', 'current' => '2.8 hours', 'remaining' => '0.8 hours', 'link' => '/goals/fulfillment'],
                        ['id' => 'cost_reduction', 'icon' => 'dollar', 'title' => 'Operational Cost Reduction', 'target' => '30%', 'current' => '22%', 'remaining' => '8%', 'link' => '/goals/costs'],
                        ['id' => 'customer_satisfaction', 'icon' => 'star', 'title' => 'Customer Satisfaction', 'target' => '4.9', 'current' => '4.7', 'remaining' => '0.2', 'link' => '/goals/csat']
                    ],
                    'showROI' => true,
                    'roiByDepartment' => [
                        ['name' => 'Operations', 'roi' => 42],
                        ['name' => 'Warehouse', 'roi' => 38],
                        ['name' => 'Inventory', 'roi' => 45],
                        ['name' => 'Logistics', 'roi' => 35]
                    ],
                    'efficiencyGains' => [
                        ['area' => 'Scanning Speed', 'description' => 'Average time per scan', 'improvement' => '+67%'],
                        ['area' => 'Data Entry', 'description' => 'Manual entry reduction', 'improvement' => '-89%'],
                        ['area' => 'Error Rate', 'description' => 'Scanning accuracy', 'improvement' => '-94%'],
                        ['area' => 'Training Time', 'description' => 'New user onboarding', 'improvement' => '-52%']
                    ],
                    'showStories' => true,
                    'storiesTitle' => 'Customer Success Stories',
                    'storiesDescription' => 'Real results from real businesses',
                    'successStories' => [
                        [
                            'icon' => 'cart',
                            'company' => 'RetailPro Solutions',
                            'description' => 'Streamlined inventory across 50+ locations, reducing stockouts by 78% and improving customer satisfaction.',
                            'metric1' => '78%',
                            'label1' => 'Stockout Reduction',
                            'metric2' => '$1.2M',
                            'label2' => 'Annual Savings',
                            'link' => '/stories/retailpro'
                        ],
                        [
                            'icon' => 'truck',
                            'company' => 'LogiChain Logistics',
                            'description' => 'Automated warehouse operations, cutting processing time by 65% and eliminating manual errors.',
                            'metric1' => '65%',
                            'label1' => 'Faster Processing',
                            'metric2' => '99.9%',
                            'label2' => 'Accuracy Rate',
                            'link' => '/stories/logichain'
                        ],
                        [
                            'icon' => 'users',
                            'company' => 'HealthCare Plus',
                            'description' => 'Improved patient supply tracking with 99.9% accuracy, saving $850K annually in operational costs.',
                            'metric1' => '$850K',
                            'label1' => 'Annual Savings',
                            'metric2' => '3x',
                            'label2' => 'ROI',
                            'link' => '/stories/healthcare'
                        ]
                    ],
                    'showCta' => true,
                    'ctaText' => 'Ready to achieve these results?',
                    'ctaButtonText' => 'Start Your Journey',
                    'ctaLink' => '/demo'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 168,
                'section_key' => 'successMetrics',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Case Studies Section
            [
                'id' => 169,
                'section_key' => 'caseStudies',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Customer Success',
                        'backgroundColor' => 'bg-blue-50 dark:bg-blue-900/30',
                        'borderColor' => 'border-blue-200 dark:border-blue-800',
                        'textColor' => 'text-blue-700 dark:text-blue-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Customer',
                        'highlightedText' => 'Success Stories',
                        'suffix' => '',
                        'highlightGradient' => 'from-blue-500 to-indigo-500'
                    ],
                    'description' => 'See how businesses like yours are achieving remarkable results with our platform. Real stories, real outcomes.',
                    'initialCategory' => 'all',
                    'stats' => [
                        ['icon' => 'chart', 'value' => '500+', 'label' => 'Businesses Transformed'],
                        ['icon' => 'trending', 'value' => '287%', 'label' => 'Average ROI'],
                        ['icon' => 'star', 'value' => '98%', 'label' => 'Customer Satisfaction']
                    ],
                    'caseStudies' => [
                        [
                            'id' => 'retailpro',
                            'icon' => 'cart',
                            'company' => 'RetailPro Solutions',
                            'industry' => 'Retail',
                            'category' => 'retail',
                            'description' => 'Multi-channel retailer with 50+ locations struggling with inventory accuracy and stockouts across their supply chain.',
                            'challenge' => 'RetailPro was experiencing 15% stockout rates, manual inventory tracking errors, and delayed replenishment across their 50+ store locations. Their legacy system couldn\'t handle real-time synchronization between online and offline channels.',
                            'solution' => 'Implemented our unified inventory management platform with real-time barcode scanning, automated reordering, and multi-location sync. Integrated with their existing POS and e-commerce systems.',
                            'results' => [
                                ['value' => '78%', 'label' => 'Stockout Reduction'],
                                ['value' => '99.7%', 'label' => 'Inventory Accuracy'],
                                ['value' => '$1.2M', 'label' => 'Annual Savings'],
                                ['value' => '3x', 'label' => 'ROI']
                            ],
                            'tags' => ['Retail', 'Multi-location', 'E-commerce'],
                            'testimonial' => [
                                'quote' => 'The platform transformed our inventory management. We\'ve seen dramatic improvements in efficiency and accuracy across all our locations.',
                                'author' => 'Sarah Johnson',
                                'role' => 'Operations Director'
                            ],
                            'downloadLink' => '/case-studies/retailpro/download',
                            'videoLink' => '/case-studies/retailpro/video'
                        ],
                        [
                            'id' => 'logichain',
                            'icon' => 'truck',
                            'company' => 'LogiChain Logistics',
                            'industry' => 'Logistics',
                            'category' => 'logistics',
                            'description' => 'Third-party logistics provider managing 500K+ sq ft warehouse with manual scanning processes.',
                            'challenge' => 'Manual barcode scanning was causing 3+ hour processing delays, high error rates, and employee fatigue. Peak seasons were particularly challenging with increased order volume.',
                            'solution' => 'Deployed our automated scanning solution with batch processing, real-time validation, and integration with their WMS. Implemented mobile scanners for all warehouse staff.',
                            'results' => [
                                ['value' => '65%', 'label' => 'Faster Processing'],
                                ['value' => '99.9%', 'label' => 'Scan Accuracy'],
                                ['value' => '$850K', 'label' => 'Annual Savings'],
                                ['value' => '2.5x', 'label' => 'ROI']
                            ],
                            'tags' => ['Logistics', 'Warehouse', 'Automation'],
                            'testimonial' => [
                                'quote' => 'Processing time has been cut by over 60% and our error rate is virtually zero. This has been a game-changer for our operations.',
                                'author' => 'Mike Chen',
                                'role' => 'Warehouse Manager'
                            ],
                            'downloadLink' => '/case-studies/logichain/download',
                            'videoLink' => '/case-studies/logichain/video'
                        ],
                        [
                            'id' => 'healthcareplus',
                            'icon' => 'users',
                            'company' => 'HealthCare Plus',
                            'industry' => 'Healthcare',
                            'category' => 'healthcare',
                            'description' => 'Healthcare provider managing medical supplies across 12 facilities with compliance requirements.',
                            'challenge' => 'Tracking medical supplies across multiple facilities was inefficient and prone to errors. Compliance reporting was manual and time-consuming, risking regulatory issues.',
                            'solution' => 'Implemented our HIPAA-compliant tracking solution with chain-of-custody tracking, automated expiration alerts, and compliance reporting dashboards.',
                            'results' => [
                                ['value' => '99.9%', 'label' => 'Traceability'],
                                ['value' => '$450K', 'label' => 'Annual Savings'],
                                ['value' => '4 hrs', 'label' => 'Daily Time Saved'],
                                ['value' => '100%', 'label' => 'Compliance']
                            ],
                            'tags' => ['Healthcare', 'Compliance', 'Traceability'],
                            'testimonial' => [
                                'quote' => 'We now have complete visibility into our supply chain. Compliance reporting that took days now takes minutes.',
                                'author' => 'Dr. Emily Wilson',
                                'role' => 'Supply Chain Director'
                            ],
                            'downloadLink' => '/case-studies/healthcareplus/download',
                            'videoLink' => '/case-studies/healthcareplus/video'
                        ],
                        [
                            'id' => 'manutech',
                            'icon' => 'cog',
                            'company' => 'ManuTech Industries',
                            'industry' => 'Manufacturing',
                            'category' => 'manufacturing',
                            'description' => 'Manufacturing company with complex parts tracking across multiple production lines.',
                            'challenge' => 'Tracking thousands of parts across production lines was causing bottlenecks, production delays, and inventory discrepancies.',
                            'solution' => 'Deployed our manufacturing execution system with real-time parts tracking, automated quality checks, and production line integration.',
                            'results' => [
                                ['value' => '42%', 'label' => 'Faster Production'],
                                ['value' => '99.5%', 'label' => 'Parts Traceability'],
                                ['value' => '$620K', 'label' => 'Annual Savings'],
                                ['value' => '4.2x', 'label' => 'ROI']
                            ],
                            'tags' => ['Manufacturing', 'Production', 'Quality Control'],
                            'testimonial' => [
                                'quote' => 'Real-time tracking has eliminated production bottlenecks and improved our quality control significantly.',
                                'author' => 'Robert Taylor',
                                'role' => 'Production Manager'
                            ],
                            'downloadLink' => '/case-studies/manutech/download',
                            'videoLink' => '/case-studies/manutech/video'
                        ]
                    ],
                    'showVideos' => true,
                    'videosTitle' => 'Video Testimonials',
                    'videosDescription' => 'Hear directly from our customers',
                    'videoTestimonials' => [
                        [
                            'quote' => 'The best decision we made for our inventory management. Implementation was smooth and results were immediate.',
                            'author' => 'Jennifer Lee',
                            'role' => 'CEO',
                            'company' => 'RetailPro Solutions'
                        ],
                        [
                            'quote' => 'Our warehouse efficiency has never been better. The scanning accuracy is incredible.',
                            'author' => 'David Park',
                            'role' => 'Operations Manager',
                            'company' => 'LogiChain Logistics'
                        ],
                        [
                            'quote' => 'Compliance reporting that used to take days now takes minutes. Absolutely transformative.',
                            'author' => 'Sarah Martinez',
                            'role' => 'Compliance Officer',
                            'company' => 'HealthCare Plus'
                        ]
                    ],
                    'showDownload' => true,
                    'downloadAllLink' => '/case-studies/all',
                    'showCta' => true,
                    'ctaText' => 'Ready to write your own success story?',
                    'ctaButtonText' => 'Start Your Journey',
                    'ctaLink' => '/demo'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 170,
                'section_key' => 'caseStudies',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Success Stories',
                        'backgroundColor' => 'bg-blue-50 dark:bg-blue-900/30',
                        'borderColor' => 'border-blue-200 dark:border-blue-800',
                        'textColor' => 'text-blue-700 dark:text-blue-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Featured',
                        'highlightedText' => 'Success Stories',
                        'suffix' => '',
                        'highlightGradient' => 'from-blue-500 to-indigo-500'
                    ],
                    'description' => 'Explore our featured customer success stories. See how businesses are achieving remarkable results with our platform.',
                    'initialIndex' => 0,
                    'initialTab' => 'overview',
                    'autoplay' => true,
                    'autoplayInterval' => 5000,
                    'caseStudies' => [
                        [
                            'id' => 'retailpro',
                            'icon' => 'cart',
                            'company' => 'RetailPro Solutions',
                            'industry' => 'Retail',
                            'challenge' => 'RetailPro was experiencing 15% stockout rates, manual inventory tracking errors, and delayed replenishment across their 50+ store locations. Their legacy system couldn\'t handle real-time synchronization between online and offline channels.',
                            'solution' => 'Implemented our unified inventory management platform with real-time barcode scanning, automated reordering, and multi-location sync. Integrated with their existing POS and e-commerce systems within 4 weeks.',
                            'results' => [
                                ['value' => '78%', 'label' => 'Stockout Reduction'],
                                ['value' => '99.7%', 'label' => 'Inventory Accuracy'],
                                ['value' => '$1.2M', 'label' => 'Annual Savings'],
                                ['value' => '3x', 'label' => 'ROI']
                            ],
                            'keyImpact' => 'Eliminated stockouts during peak seasons and reduced manual work by 20+ hours weekly across all locations.',
                            'timeline' => [
                                ['period' => 'Week 1-2', 'title' => 'Implementation & Integration', 'description' => 'System deployed and integrated with existing POS and e-commerce platforms.'],
                                ['period' => 'Week 3-4', 'title' => 'Training & Go-Live', 'description' => 'Staff trained and system went live across all 50+ locations.'],
                                ['period' => 'Month 2', 'title' => 'First Results', 'description' => 'Inventory accuracy improved to 98% and stockouts reduced by 45%.'],
                                ['period' => 'Month 6', 'title' => 'Full Optimization', 'description' => 'Achieved 99.7% accuracy and $1.2M annual savings.']
                            ],
                            'testimonial' => [
                                'quote' => 'The platform transformed our inventory management. We\'ve seen dramatic improvements in efficiency and accuracy across all our locations. The implementation was smooth and the results were immediate.',
                                'author' => 'Sarah Johnson',
                                'role' => 'Operations Director'
                            ],
                            'readTime' => '6 min',
                            'downloadLink' => '/case-studies/retailpro/download',
                            'videoLink' => '/case-studies/retailpro/video'
                        ],
                        [
                            'id' => 'logichain',
                            'icon' => 'truck',
                            'company' => 'LogiChain Logistics',
                            'industry' => 'Logistics',
                            'challenge' => 'Manual barcode scanning was causing 3+ hour processing delays, high error rates (8%), and employee fatigue. Peak seasons were particularly challenging with increased order volume.',
                            'solution' => 'Deployed our automated scanning solution with batch processing, real-time validation, and integration with their WMS. Implemented mobile scanners for all 200+ warehouse staff.',
                            'results' => [
                                ['value' => '65%', 'label' => 'Faster Processing'],
                                ['value' => '99.9%', 'label' => 'Scan Accuracy'],
                                ['value' => '$850K', 'label' => 'Annual Savings'],
                                ['value' => '2.5x', 'label' => 'ROI']
                            ],
                            'keyImpact' => 'Processing time reduced from 3+ hours to under 1 hour. Error rate dropped from 8% to near zero.',
                            'timeline' => [
                                ['period' => 'Week 1', 'title' => 'Assessment & Planning', 'description' => 'Site assessment and implementation planning completed.'],
                                ['period' => 'Week 2-3', 'title' => 'System Deployment', 'description' => 'Hardware deployed and software configured.'],
                                ['period' => 'Week 4', 'title' => 'Training & Go-Live', 'description' => 'Staff trained and system went live.'],
                                ['period' => 'Month 3', 'title' => 'Full Adoption', 'description' => 'Achieved 65% faster processing and 99.9% accuracy.']
                            ],
                            'testimonial' => [
                                'quote' => 'Processing time has been cut by over 60% and our error rate is virtually zero. This has been a game-changer for our operations, especially during peak seasons.',
                                'author' => 'Mike Chen',
                                'role' => 'Warehouse Manager'
                            ],
                            'readTime' => '5 min',
                            'downloadLink' => '/case-studies/logichain/download',
                            'videoLink' => '/case-studies/logichain/video'
                        ],
                        [
                            'id' => 'healthcareplus',
                            'icon' => 'users',
                            'company' => 'HealthCare Plus',
                            'industry' => 'Healthcare',
                            'challenge' => 'Tracking medical supplies across 12 facilities was inefficient and prone to errors. Compliance reporting was manual and time-consuming, risking regulatory issues.',
                            'solution' => 'Implemented our HIPAA-compliant tracking solution with chain-of-custody tracking, automated expiration alerts, and compliance reporting dashboards.',
                            'results' => [
                                ['value' => '99.9%', 'label' => 'Traceability'],
                                ['value' => '$450K', 'label' => 'Annual Savings'],
                                ['value' => '4 hrs', 'label' => 'Daily Time Saved'],
                                ['value' => '100%', 'label' => 'Compliance']
                            ],
                            'keyImpact' => 'Eliminated manual compliance reporting. Reduced supply waste by 35% through expiration tracking.',
                            'timeline' => [
                                ['period' => 'Month 1', 'title' => 'System Setup', 'description' => 'HIPAA-compliant environment configured.'],
                                ['period' => 'Month 2', 'title' => 'Integration & Testing', 'description' => 'Integrated with existing systems and tested.'],
                                ['period' => 'Month 3', 'title' => 'Go-Live', 'description' => 'System launched across all 12 facilities.'],
                                ['period' => 'Month 6', 'title' => 'Optimization', 'description' => 'Achieved full compliance and $450K annual savings.']
                            ],
                            'testimonial' => [
                                'quote' => 'We now have complete visibility into our supply chain. Compliance reporting that took days now takes minutes. The expiration tracking has saved us thousands in waste.',
                                'author' => 'Dr. Emily Wilson',
                                'role' => 'Supply Chain Director'
                            ],
                            'readTime' => '7 min',
                            'downloadLink' => '/case-studies/healthcareplus/download',
                            'videoLink' => '/case-studies/healthcareplus/video'
                        ]
                    ],
                    'showLogos' => true,
                    'companyLogos' => [
                        ['icon' => 'cart', 'name' => 'RetailPro'],
                        ['icon' => 'truck', 'name' => 'LogiChain'],
                        ['icon' => 'users', 'name' => 'HealthPlus'],
                        ['icon' => 'database', 'name' => 'TechCorp'],
                        ['icon' => 'shield', 'name' => 'SecureLogix']
                    ],
                    'showMetrics' => true,
                    'aggregateMetrics' => [
                        ['icon' => 'trending', 'value' => '287%', 'label' => 'Average ROI'],
                        ['icon' => 'users', 'value' => '500+', 'label' => 'Businesses Transformed'],
                        ['icon' => 'star', 'value' => '98%', 'label' => 'Customer Satisfaction']
                    ],
                    'showCta' => true,
                    'ctaText' => 'Ready to become our next success story?',
                    'ctaButtonText' => 'Start Your Journey',
                    'ctaLink' => '/demo'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 171,
                'section_key' => 'caseStudies',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Customer Voices',
                        'backgroundColor' => 'bg-blue-50 dark:bg-blue-900/30',
                        'borderColor' => 'border-blue-200 dark:border-blue-800',
                        'textColor' => 'text-blue-700 dark:text-blue-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'What Our',
                        'highlightedText' => 'Customers Say',
                        'suffix' => '',
                        'highlightGradient' => 'from-blue-500 to-indigo-500'
                    ],
                    'description' => 'Real testimonials from businesses that transformed their operations with our platform. See the results they achieved.',
                    'initialIndustry' => 'all',
                    'showMetricsBanner' => true,
                    'successMetrics' => [
                        ['icon' => 'trending', 'value' => '287%', 'label' => 'Average ROI'],
                        ['icon' => 'clock', 'value' => '4.2', 'label' => 'Months Payback'],
                        ['icon' => 'star', 'value' => '98%', 'label' => 'Satisfaction Rate'],
                        ['icon' => 'users', 'value' => '500+', 'label' => 'Businesses Transformed']
                    ],
                    'caseStudies' => [
                        [
                            'id' => 'retailpro',
                            'icon' => 'cart',
                            'company' => 'RetailPro Solutions',
                            'industry' => 'Retail',
                            'location' => 'New York, USA',
                            'beforeMetric' => '15% stockout rate',
                            'afterMetric' => '78% reduction',
                            'resultTags' => ['99.7% accuracy', '$1.2M saved', '3x ROI'],
                            'testimonial' => [
                                'author' => 'Sarah Johnson',
                                'role' => 'Operations Director',
                                'quote' => 'The platform transformed our inventory management. We\'ve seen dramatic improvements in efficiency and accuracy across all our 50+ locations. Stockouts are virtually eliminated.',
                                'shortQuote' => 'The platform transformed our inventory management. We\'ve seen dramatic improvements in efficiency and accuracy.'
                            ],
                            'videoLink' => '/videos/retailpro-testimonial',
                            'downloadLink' => '/case-studies/retailpro'
                        ],
                        [
                            'id' => 'logichain',
                            'icon' => 'truck',
                            'company' => 'LogiChain Logistics',
                            'industry' => 'Logistics',
                            'location' => 'Chicago, USA',
                            'beforeMetric' => '3+ hour processing',
                            'afterMetric' => '65% faster',
                            'resultTags' => ['99.9% accuracy', '$850K saved', '2.5x ROI'],
                            'testimonial' => [
                                'author' => 'Mike Chen',
                                'role' => 'Warehouse Manager',
                                'quote' => 'Processing time has been cut by over 60% and our error rate is virtually zero. This has been a game-changer for our operations, especially during peak seasons.',
                                'shortQuote' => 'Processing time has been cut by over 60% and our error rate is virtually zero.'
                            ],
                            'videoLink' => '/videos/logichain-testimonial',
                            'downloadLink' => '/case-studies/logichain'
                        ],
                        [
                            'id' => 'healthcareplus',
                            'icon' => 'users',
                            'company' => 'HealthCare Plus',
                            'industry' => 'Healthcare',
                            'location' => 'Boston, USA',
                            'beforeMetric' => '4+ hours reporting',
                            'afterMetric' => '99.9% traceability',
                            'resultTags' => ['$450K saved', '100% compliance', '35% less waste'],
                            'testimonial' => [
                                'author' => 'Dr. Emily Wilson',
                                'role' => 'Supply Chain Director',
                                'quote' => 'We now have complete visibility into our supply chain. Compliance reporting that took days now takes minutes. The expiration tracking has saved us thousands.',
                                'shortQuote' => 'Compliance reporting that took days now takes minutes. Absolutely transformative.'
                            ],
                            'videoLink' => '/videos/healthcareplus-testimonial',
                            'downloadLink' => '/case-studies/healthcareplus'
                        ],
                        [
                            'id' => 'manutech',
                            'icon' => 'cog',
                            'company' => 'ManuTech Industries',
                            'industry' => 'Manufacturing',
                            'location' => 'Detroit, USA',
                            'beforeMetric' => '15% production delay',
                            'afterMetric' => '42% faster',
                            'resultTags' => ['99.5% traceability', '$620K saved', '4.2x ROI'],
                            'testimonial' => [
                                'author' => 'Robert Taylor',
                                'role' => 'Production Manager',
                                'quote' => 'Real-time tracking has eliminated production bottlenecks and improved our quality control significantly. The ROI has exceeded our expectations.',
                                'shortQuote' => 'Real-time tracking has eliminated production bottlenecks and improved quality control significantly.'
                            ],
                            'videoLink' => '/videos/manutech-testimonial',
                            'downloadLink' => '/case-studies/manutech'
                        ],
                        [
                            'id' => 'swiftretail',
                            'icon' => 'cart',
                            'company' => 'SwiftRetail',
                            'industry' => 'E-commerce',
                            'location' => 'Los Angeles, USA',
                            'beforeMetric' => '8% return rate',
                            'afterMetric' => '56% reduction',
                            'resultTags' => ['98% accuracy', '$320K saved', '2.8x ROI'],
                            'testimonial' => [
                                'author' => 'Amanda Lee',
                                'role' => 'E-commerce Director',
                                'quote' => 'Inventory accuracy improved dramatically. Our return rate dropped by over 50% and customer satisfaction is at an all-time high.',
                                'shortQuote' => 'Inventory accuracy improved dramatically. Our return rate dropped by over 50%.'
                            ],
                            'videoLink' => '/videos/swiftretail-testimonial',
                            'downloadLink' => '/case-studies/swiftretail'
                        ],
                        [
                            'id' => 'wholesalehub',
                            'icon' => 'database',
                            'company' => 'Wholesale Hub',
                            'industry' => 'Wholesale',
                            'location' => 'Dallas, USA',
                            'beforeMetric' => '12% overstock',
                            'afterMetric' => '45% reduction',
                            'resultTags' => ['97% accuracy', '$510K saved', '3.1x ROI'],
                            'testimonial' => [
                                'author' => 'James Wilson',
                                'role' => 'Operations VP',
                                'quote' => 'The platform helped us optimize our inventory levels across all warehouses. Overstock is down 45% and we\'re saving over $500K annually.',
                                'shortQuote' => 'The platform helped us optimize our inventory levels across all warehouses.'
                            ],
                            'videoLink' => '/videos/wholesalehub-testimonial',
                            'downloadLink' => '/case-studies/wholesalehub'
                        ]
                    ],
                    'showSpotlight' => true,
                    'spotlight' => [
                        'icon' => 'star',
                        'company' => 'Global Retail Group',
                        'description' => 'A multinational retail chain with 200+ stores saw unprecedented transformation after implementing our platform. Within 6 months, they achieved 99.9% inventory accuracy and reduced stockouts by 85%.',
                        'result1' => '85%',
                        'label1' => 'Stockout Reduction',
                        'result2' => '$2.5M',
                        'label2' => 'Annual Savings',
                        'link' => '/case-studies/global-retail'
                    ],
                    'showROI' => true,
                    'roiSavings' => '25-35%',
                    'roiPayback' => '3-6',
                    'roiLink' => '/roi-calculator',
                    'showDownload' => true,
                    'downloadAllLink' => '/case-studies/all',
                    'showCta' => true,
                    'ctaText' => 'Ready to write your own success story?',
                    'ctaButtonText' => 'Get Started Today',
                    'ctaLink' => '/demo'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 172,
                'section_key' => 'caseStudies',
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
