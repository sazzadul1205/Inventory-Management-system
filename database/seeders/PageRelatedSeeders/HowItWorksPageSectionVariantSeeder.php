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
        ];

        // Add the new FeatureP variants
        DB::table('section_variants')->upsert(
            $variants,
            ['section_key', 'variant'],
            ['config', 'updated_at']
        );
    }
}
