<?php

namespace Database\Seeders\PageRelatedSeeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PricingPlansPageSectionVariantSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        // Upsert only this page's variants so other page seeders do not get wiped out.
        $variants = [
            // Starter Plan Section
            [
                'id' => 249,
                'section_key' => 'starterPlan',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Simple Pricing',
                        'backgroundColor' => 'bg-blue-100 dark:bg-blue-900/30',
                        'borderColor' => 'border-blue-200 dark:border-blue-800',
                        'textColor' => 'text-blue-700 dark:text-blue-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Choose the',
                        'highlightedText' => 'Perfect Plan',
                        'suffix' => 'for Your Business',
                        'highlightGradient' => 'from-blue-600 to-indigo-600'
                    ],
                    'description' => 'Start small and scale as you grow. No hidden fees, cancel anytime.',
                    'showBillingToggle' => true,
                    'yearlySavingsBadge' => '20%',
                    'plans' => [
                        [
                            'id' => 'starter',
                            'name' => 'Starter',
                            'description' => 'Perfect for small businesses and startups',
                            'icon' => 'rocket',
                            'priceMonthly' => 29,
                            'priceYearly' => 290,
                            'popular' => false,
                            'ctaText' => 'Start Free Trial',
                            'ctaLink' => '/signup?plan=starter',
                            'features' => [
                                'Up to 1,000 contacts',
                                'Basic analytics dashboard',
                                'Email support',
                                'API access',
                                'Monthly reports'
                            ]
                        ],
                        [
                            'id' => 'professional',
                            'name' => 'Professional',
                            'description' => 'Ideal for growing businesses',
                            'icon' => 'briefcase',
                            'priceMonthly' => 79,
                            'priceYearly' => 790,
                            'popular' => true,
                            'ctaText' => 'Get Started',
                            'ctaLink' => '/signup?plan=professional',
                            'features' => [
                                'Up to 10,000 contacts',
                                'Advanced analytics',
                                'Priority email & chat support',
                                'API access with higher limits',
                                'Weekly reports',
                                'Custom integrations',
                                'Team collaboration tools'
                            ]
                        ],
                        [
                            'id' => 'enterprise',
                            'name' => 'Enterprise',
                            'description' => 'For large organizations with complex needs',
                            'icon' => 'building',
                            'priceMonthly' => 199,
                            'priceYearly' => 1990,
                            'popular' => false,
                            'ctaText' => 'Contact Sales',
                            'ctaLink' => '/contact',
                            'features' => [
                                'Unlimited contacts',
                                'Predictive analytics & AI insights',
                                '24/7 phone & dedicated support',
                                'Unlimited API access',
                                'Daily reports',
                                'Custom development',
                                'SLA guarantee',
                                'On-premise deployment option',
                                'SSO & advanced security'
                            ]
                        ]
                    ],
                    'showComparison' => true,
                    'comparisonFeatures' => [
                        ['name' => 'Up to 1,000 contacts'],
                        ['name' => 'Up to 10,000 contacts'],
                        ['name' => 'Unlimited contacts'],
                        ['name' => 'Basic analytics'],
                        ['name' => 'Advanced analytics'],
                        ['name' => 'AI-powered insights'],
                        ['name' => 'Email support'],
                        ['name' => 'Priority support'],
                        ['name' => '24/7 phone support'],
                        ['name' => 'API access'],
                        ['name' => 'Custom integrations'],
                        ['name' => 'SLA guarantee']
                    ],
                    'showFaq' => true,
                    'faqs' => [
                        [
                            'question' => 'Can I change plans later?',
                            'answer' => 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and you\'ll be billed prorated for the remainder of your billing cycle.'
                        ],
                        [
                            'question' => 'Is there a setup fee?',
                            'answer' => 'No, there are no setup fees for any of our plans. You only pay the monthly or yearly subscription price.'
                        ],
                        [
                            'question' => 'What payment methods do you accept?',
                            'answer' => 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for enterprise plans.'
                        ],
                        [
                            'question' => 'Can I cancel my subscription anytime?',
                            'answer' => 'Absolutely. You can cancel your subscription at any time from your account settings. There are no cancellation fees.'
                        ]
                    ],
                    'showGuarantee' => true,
                    'guaranteeText' => '30-day money-back guarantee. No questions asked.',
                    'showContactSales' => true,
                    'contactText' => 'Need a custom plan?',
                    'contactLink' => '/contact'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 250,
                'section_key' => 'starterPlan',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Simple Pricing',
                        'backgroundColor' => 'bg-blue-100 dark:bg-blue-900/30',
                        'borderColor' => 'border-blue-200 dark:border-blue-800',
                        'textColor' => 'text-blue-700 dark:text-blue-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Choose the',
                        'highlightedText' => 'Perfect Plan',
                        'suffix' => 'for Your Business',
                        'highlightGradient' => 'from-blue-600 to-indigo-600'
                    ],
                    'description' => 'Start small and scale as you grow. No hidden fees, cancel anytime.',
                    'plans' => [
                        [
                            'id' => 'starter',
                            'name' => 'Starter',
                            'description' => 'Perfect for small businesses and startups',
                            'icon' => 'rocket',
                            'priceMonthly' => 29,
                            'priceYearly' => 290,
                            'savingsPercentage' => 17,
                            'popular' => false,
                            'ctaText' => 'Start Free Trial',
                            'ctaLink' => '/signup?plan=starter',
                            'features' => [
                                'Up to 1,000 contacts',
                                'Basic analytics dashboard',
                                'Email support',
                                'API access',
                                'Monthly reports'
                            ]
                        ],
                        [
                            'id' => 'professional',
                            'name' => 'Professional',
                            'description' => 'Ideal for growing businesses',
                            'icon' => 'briefcase',
                            'priceMonthly' => 79,
                            'priceYearly' => 790,
                            'savingsPercentage' => 17,
                            'popular' => true,
                            'ctaText' => 'Get Started',
                            'ctaLink' => '/signup?plan=professional',
                            'features' => [
                                'Up to 10,000 contacts',
                                'Advanced analytics',
                                'Priority email & chat support',
                                'API access with higher limits',
                                'Weekly reports',
                                'Custom integrations',
                                'Team collaboration tools'
                            ]
                        ],
                        [
                            'id' => 'enterprise',
                            'name' => 'Enterprise',
                            'description' => 'For large organizations with complex needs',
                            'icon' => 'building',
                            'priceMonthly' => 199,
                            'priceYearly' => 1990,
                            'savingsPercentage' => 17,
                            'popular' => false,
                            'ctaText' => 'Contact Sales',
                            'ctaLink' => '/contact',
                            'features' => [
                                'Unlimited contacts',
                                'Predictive analytics & AI insights',
                                '24/7 phone & dedicated support',
                                'Unlimited API access',
                                'Daily reports',
                                'Custom development',
                                'SLA guarantee',
                                'On-premise deployment option',
                                'SSO & advanced security'
                            ]
                        ]
                    ],
                    'showComparison' => true,
                    'comparisonFeatures' => [
                        ['name' => 'Up to 1,000 contacts'],
                        ['name' => 'Up to 10,000 contacts'],
                        ['name' => 'Unlimited contacts'],
                        ['name' => 'Basic analytics'],
                        ['name' => 'Advanced analytics'],
                        ['name' => 'AI-powered insights'],
                        ['name' => 'Email support'],
                        ['name' => 'Priority support'],
                        ['name' => '24/7 phone support'],
                        ['name' => 'API access'],
                        ['name' => 'Custom integrations'],
                        ['name' => 'SLA guarantee']
                    ],
                    'showROICalculator' => true,
                    'roiLink' => '/roi-calculator',
                    'trustBadges' => [
                        ['icon' => 'google', 'name' => 'Google'],
                        ['icon' => 'microsoft', 'name' => 'Microsoft'],
                        ['icon' => 'amazon', 'name' => 'Amazon']
                    ],
                    'showFaq' => true,
                    'faqs' => [
                        [
                            'question' => 'Can I change plans later?',
                            'answer' => 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and you\'ll be billed prorated for the remainder of your billing cycle.'
                        ],
                        [
                            'question' => 'Is there a setup fee?',
                            'answer' => 'No, there are no setup fees for any of our plans. You only pay the monthly or yearly subscription price.'
                        ],
                        [
                            'question' => 'What payment methods do you accept?',
                            'answer' => 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for enterprise plans.'
                        ],
                        [
                            'question' => 'Can I cancel my subscription anytime?',
                            'answer' => 'Absolutely. You can cancel your subscription at any time from your account settings. There are no cancellation fees.'
                        ]
                    ],
                    'showGuarantee' => true,
                    'guaranteeText' => '30-day money-back guarantee. No risk, no questions asked.',
                    'showContactSales' => true,
                    'contactText' => 'Need a custom solution for your business?',
                    'contactLink' => '/contact'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 251,
                'section_key' => 'starterPlan',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Simple Pricing',
                        'backgroundColor' => 'bg-blue-100 dark:bg-blue-900/30',
                        'borderColor' => 'border-blue-200 dark:border-blue-800',
                        'textColor' => 'text-blue-700 dark:text-blue-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Choose the',
                        'highlightedText' => 'Perfect Plan',
                        'suffix' => 'for Your Business',
                        'highlightGradient' => 'from-blue-600 to-indigo-600'
                    ],
                    'description' => 'Start small and scale as you grow. No hidden fees, cancel anytime.',
                    'stats' => [
                        ['icon' => 'chart', 'value' => '4.9/5', 'label' => 'Customer Rating'],
                        ['icon' => 'users', 'value' => '1,000+', 'label' => 'Happy Customers'],
                        ['icon' => 'sparkles', 'value' => '98%', 'label' => 'Satisfaction Rate'],
                        ['icon' => 'chart', 'value' => '24/7', 'label' => 'Support Coverage']
                    ],
                    'plans' => [
                        [
                            'id' => 'starter',
                            'name' => 'Starter',
                            'description' => 'Perfect for small businesses and startups',
                            'icon' => 'rocket',
                            'priceMonthly' => 29,
                            'priceYearly' => 290,
                            'popular' => false,
                            'ctaText' => 'Start Free Trial',
                            'ctaLink' => '/signup?plan=starter',
                            'features' => [
                                'Up to 1,000 contacts',
                                'Basic analytics dashboard',
                                'Email support',
                                'API access',
                                'Monthly reports'
                            ],
                            'limitedFeatures' => ['Advanced analytics']
                        ],
                        [
                            'id' => 'professional',
                            'name' => 'Professional',
                            'description' => 'Ideal for growing businesses',
                            'icon' => 'briefcase',
                            'priceMonthly' => 79,
                            'priceYearly' => 790,
                            'popular' => true,
                            'ctaText' => 'Get Started',
                            'ctaLink' => '/signup?plan=professional',
                            'features' => [
                                'Up to 10,000 contacts',
                                'Advanced analytics',
                                'Priority email & chat support',
                                'API access with higher limits',
                                'Weekly reports',
                                'Custom integrations',
                                'Team collaboration tools'
                            ],
                            'limitedFeatures' => []
                        ],
                        [
                            'id' => 'enterprise',
                            'name' => 'Enterprise',
                            'description' => 'For large organizations with complex needs',
                            'icon' => 'building',
                            'priceMonthly' => 199,
                            'priceYearly' => 1990,
                            'popular' => false,
                            'ctaText' => 'Contact Sales',
                            'ctaLink' => '/contact',
                            'features' => [
                                'Unlimited contacts',
                                'Predictive analytics & AI insights',
                                '24/7 phone & dedicated support',
                                'Unlimited API access',
                                'Daily reports',
                                'Custom development',
                                'SLA guarantee',
                                'On-premise deployment option',
                                'SSO & advanced security'
                            ],
                            'limitedFeatures' => []
                        ]
                    ],
                    'comparisonFeatures' => [
                        ['name' => 'Contacts limit'],
                        ['name' => 'Analytics'],
                        ['name' => 'Support'],
                        ['name' => 'API access'],
                        ['name' => 'Custom integrations'],
                        ['name' => 'SLA guarantee']
                    ],
                    'testimonials' => [
                        [
                            'quote' => 'This platform transformed our business operations. The ROI has been incredible and the support team is always there when we need them.',
                            'author' => 'Sarah Johnson',
                            'role' => 'CEO',
                            'company' => 'TechStart Inc',
                            'avatar' => 'user1'
                        ],
                        [
                            'quote' => 'The best investment we\'ve made this year. Our team productivity increased by 40% within the first month of implementation.',
                            'author' => 'Michael Chen',
                            'role' => 'CTO',
                            'company' => 'InnovateLabs',
                            'avatar' => 'user2'
                        ],
                        [
                            'quote' => 'Exceptional value for money. The features and support you get at this price point are unmatched in the industry.',
                            'author' => 'Emily Rodriguez',
                            'role' => 'Operations Director',
                            'company' => 'Global Logistics',
                            'avatar' => 'user3'
                        ]
                    ],
                    'showFaq' => true,
                    'faqs' => [
                        [
                            'question' => 'Can I change plans later?',
                            'answer' => 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and you\'ll be billed prorated for the remainder of your billing cycle.'
                        ],
                        [
                            'question' => 'Is there a setup fee?',
                            'answer' => 'No, there are no setup fees for any of our plans. You only pay the monthly or yearly subscription price.'
                        ],
                        [
                            'question' => 'What payment methods do you accept?',
                            'answer' => 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for enterprise plans.'
                        ],
                        [
                            'question' => 'Can I cancel my subscription anytime?',
                            'answer' => 'Absolutely. You can cancel your subscription at any time from your account settings. There are no cancellation fees.'
                        ]
                    ],
                    'guaranteeText' => '30-day money-back guarantee. No questions asked.',
                    'contactText' => 'Have questions about our plans? Need a custom solution?',
                    'contactLink' => '/contact'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 252,
                'section_key' => 'starterPlan',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Professional Plan Section
            [
                'id' => 253,
                'section_key' => 'professionalPlan',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Professional Plan',
                        'backgroundColor' => 'bg-purple-100 dark:bg-purple-900/30',
                        'borderColor' => 'border-purple-200 dark:border-purple-800',
                        'textColor' => 'text-purple-700 dark:text-purple-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Grow Your Business with',
                        'highlightedText' => 'Professional',
                        'suffix' => 'Plan',
                        'highlightGradient' => 'from-purple-600 to-indigo-600'
                    ],
                    'description' => 'Everything you need to scale your operations with advanced features and priority support.',
                    'plans' => [
                        [
                            'id' => 'starter',
                            'name' => 'Starter',
                            'priceMonthly' => 29,
                            'priceYearly' => 290,
                            'features' => ['Up to 1,000 contacts', 'Basic analytics', 'Email support', 'API access']
                        ],
                        [
                            'id' => 'professional',
                            'name' => 'Professional',
                            'description' => 'Perfect for growing businesses with advanced needs',
                            'icon' => 'briefcase',
                            'priceMonthly' => 79,
                            'priceYearly' => 790,
                            'popular' => true,
                            'ctaText' => 'Start Free Trial',
                            'ctaLink' => '/signup?plan=professional',
                            'features' => [
                                'Up to 10,000 contacts',
                                'Advanced analytics & reporting',
                                'Priority email & chat support',
                                'API access with higher limits',
                                'Weekly reports',
                                'Custom integrations',
                                'Team collaboration tools',
                                'Data export capabilities'
                            ]
                        ]
                    ],
                    'showAddons' => true,
                    'addons' => [
                        [
                            'name' => 'Advanced Analytics',
                            'icon' => 'database',
                            'description' => 'Custom dashboards and predictive insights',
                            'price' => 49
                        ],
                        [
                            'name' => 'Premium Support',
                            'icon' => 'shield',
                            'description' => '24/7 phone support & SLA guarantee',
                            'price' => 99
                        ],
                        [
                            'name' => 'Enterprise Security',
                            'icon' => 'cloud',
                            'description' => 'SSO, audit logs, compliance tools',
                            'price' => 149
                        ]
                    ],
                    'showComparison' => true,
                    'comparisonFeatures' => [
                        ['name' => 'Contact limit', 'starter' => true],
                        ['name' => 'Advanced analytics', 'starter' => false],
                        ['name' => 'Priority support', 'starter' => false],
                        ['name' => 'API access', 'starter' => true],
                        ['name' => 'Custom integrations', 'starter' => false],
                        ['name' => 'Team collaboration', 'starter' => false]
                    ],
                    'showROICalculator' => true,
                    'roiLink' => '/roi-calculator',
                    'showAPI' => true,
                    'apiLink' => '/developers',
                    'integrations' => ['Slack', 'Salesforce', 'HubSpot', 'Zapier', 'Mailchimp', 'Shopify'],
                    'testimonial' => [
                        'quote' => 'The Professional plan transformed how we manage our operations. The advanced analytics alone paid for itself within the first month.',
                        'author' => 'Sarah Johnson',
                        'role' => 'CEO',
                        'company' => 'TechStart Inc',
                        'avatar' => 'sarah'
                    ],
                    'guaranteeText' => '30-day money-back guarantee. No questions asked.',
                    'contactText' => 'Need help choosing the right plan? Our team is here to help.',
                    'contactLink' => '/contact'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 254,
                'section_key' => 'professionalPlan',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Professional Plan',
                        'backgroundColor' => 'bg-purple-100 dark:bg-purple-900/30',
                        'borderColor' => 'border-purple-200 dark:border-purple-800',
                        'textColor' => 'text-purple-700 dark:text-purple-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Supercharge Your',
                        'highlightedText' => 'Business Growth',
                        'suffix' => 'with Professional Plan',
                        'highlightGradient' => 'from-purple-600 to-indigo-600'
                    ],
                    'description' => 'Everything you need to scale your operations with advanced features and priority support.',
                    'plans' => [
                        [
                            'id' => 'professional',
                            'name' => 'Professional',
                            'description' => 'Perfect for growing businesses with advanced needs',
                            'icon' => 'briefcase',
                            'priceMonthly' => 79,
                            'priceYearly' => 790,
                            'ctaLink' => '/signup?plan=professional',
                            'features' => [
                                'Up to 10,000 contacts',
                                'Advanced analytics & reporting',
                                'Priority email & chat support',
                                'API access with higher limits',
                                'Weekly reports',
                                'Custom integrations',
                                'Team collaboration tools',
                                'Data export capabilities',
                                'Advanced security features',
                                'Dedicated account manager'
                            ]
                        ]
                    ],
                    'features' => [
                        [
                            'name' => 'Analytics',
                            'icon' => 'analytics',
                            'title' => 'Advanced Analytics & Insights',
                            'description' => 'Get deep insights into your business performance with our advanced analytics suite.',
                            'highlights' => [
                                'Real-time dashboards',
                                'Custom report builder',
                                'Predictive analytics',
                                'Data visualization tools'
                            ],
                            'statIcon' => 'chart',
                            'statValue' => '40%',
                            'statLabel' => 'Faster insights'
                        ],
                        [
                            'name' => 'Security',
                            'icon' => 'security',
                            'title' => 'Enterprise-Grade Security',
                            'description' => 'Keep your data safe with our comprehensive security features and compliance tools.',
                            'highlights' => [
                                '256-bit encryption',
                                'SOC 2 Type II certified',
                                'GDPR compliant',
                                'Regular security audits'
                            ],
                            'statIcon' => 'lock',
                            'statValue' => '99.99%',
                            'statLabel' => 'Uptime SLA'
                        ],
                        [
                            'name' => 'Support',
                            'icon' => 'support',
                            'title' => 'Priority Support',
                            'description' => 'Get help when you need it with our priority support channels.',
                            'highlights' => [
                                '24/7 chat support',
                                '4-hour response time',
                                'Dedicated support team',
                                'Video call assistance'
                            ],
                            'statIcon' => 'chat',
                            'statValue' => '95%',
                            'statLabel' => 'Satisfaction rate'
                        ]
                    ],
                    'testimonials' => [
                        [
                            'quote' => 'The Professional plan transformed how we manage our operations. The advanced analytics alone paid for itself within the first month.',
                            'author' => 'Sarah Johnson',
                            'role' => 'CEO',
                            'company' => 'TechStart Inc',
                            'avatar' => 'sarah',
                            'result' => '40% increase in efficiency'
                        ],
                        [
                            'quote' => 'We\'ve seen remarkable growth since upgrading to Professional. The support team is incredibly responsive and the features are exactly what we needed.',
                            'author' => 'Michael Chen',
                            'role' => 'CTO',
                            'company' => 'InnovateLabs',
                            'avatar' => 'michael',
                            'result' => '3x ROI in 6 months'
                        ],
                        [
                            'quote' => 'The custom integrations and API access have allowed us to build seamless workflows. It\'s been a game-changer for our team.',
                            'author' => 'Emily Rodriguez',
                            'role' => 'Operations Director',
                            'company' => 'Global Logistics',
                            'avatar' => 'emily',
                            'result' => '50+ connected apps'
                        ]
                    ],
                    'roiLink' => '/roi-calculator',
                    'integrations' => [
                        ['icon' => 'slack', 'name' => 'Slack'],
                        ['icon' => 'salesforce', 'name' => 'Salesforce'],
                        ['icon' => 'hubspot', 'name' => 'HubSpot'],
                        ['icon' => 'zapier', 'name' => 'Zapier'],
                        ['icon' => 'mailchimp', 'name' => 'Mailchimp'],
                        ['icon' => 'shopify', 'name' => 'Shopify']
                    ],
                    'guaranteeText' => '30-day money-back guarantee. No questions asked.',
                    'contactText' => 'Need a custom quote or have questions about the Professional plan?',
                    'contactLink' => '/contact'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 255,
                'section_key' => 'professionalPlan',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Compare Plans',
                        'backgroundColor' => 'bg-purple-100 dark:bg-purple-900/30',
                        'borderColor' => 'border-purple-200 dark:border-purple-800',
                        'textColor' => 'text-purple-700 dark:text-purple-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Choose the',
                        'highlightedText' => 'Right Plan',
                        'suffix' => 'for Your Growth',
                        'highlightGradient' => 'from-purple-600 to-indigo-600'
                    ],
                    'description' => 'Compare features and pricing to find the perfect plan for your business needs.',
                    'plans' => [
                        [
                            'id' => 'starter',
                            'name' => 'Starter',
                            'priceMonthly' => 29,
                            'priceYearly' => 290,
                            'ctaLink' => '/signup?plan=starter',
                            'features' => [
                                'Up to 1,000 contacts',
                                'Basic analytics dashboard',
                                'Email support',
                                'API access',
                                'Monthly reports',
                                'Basic security features'
                            ]
                        ],
                        [
                            'id' => 'professional',
                            'name' => 'Professional',
                            'description' => 'Perfect for growing businesses with advanced needs',
                            'icon' => 'briefcase',
                            'priceMonthly' => 79,
                            'priceYearly' => 790,
                            'ctaLink' => '/signup?plan=professional',
                            'features' => [
                                'Up to 10,000 contacts',
                                'Advanced analytics & reporting',
                                'Priority email & chat support',
                                'API access with higher limits',
                                'Weekly reports',
                                'Custom integrations',
                                'Team collaboration tools',
                                'Data export capabilities',
                                'Advanced security features',
                                'Dedicated account manager',
                                'AI forecasting',
                                'Custom dashboards'
                            ]
                        ]
                    ],
                    'roiMetrics' => [
                        [
                            'icon' => 'trending',
                            'value' => '25-35%',
                            'label' => 'Cost Reduction',
                            'description' => 'Average operational cost savings'
                        ],
                        [
                            'icon' => 'clock',
                            'value' => '3-6 mo',
                            'label' => 'Payback Period',
                            'description' => 'Time to recoup investment'
                        ],
                        [
                            'icon' => 'chart',
                            'value' => '2.5x',
                            'label' => 'Average ROI',
                            'description' => 'Return on investment'
                        ]
                    ],
                    'comparisonFeatures' => [
                        ['name' => 'Contact limit', 'starter' => true, 'starterValue' => '1,000'],
                        ['name' => 'Advanced analytics', 'starter' => false, 'starterValue' => '—'],
                        ['name' => 'AI forecasting', 'starter' => false, 'starterValue' => '—'],
                        ['name' => 'Priority support', 'starter' => false, 'starterValue' => '—'],
                        ['name' => '24/7 phone support', 'starter' => false, 'starterValue' => '—'],
                        ['name' => 'API access', 'starter' => true, 'starterValue' => 'Basic'],
                        ['name' => 'Custom integrations', 'starter' => false, 'starterValue' => '—'],
                        ['name' => 'Team collaboration', 'starter' => false, 'starterValue' => '—'],
                        ['name' => 'Custom dashboards', 'starter' => false, 'starterValue' => '—'],
                        ['name' => 'Data export', 'starter' => true, 'starterValue' => 'Monthly'],
                        ['name' => 'Dedicated account manager', 'starter' => false, 'starterValue' => '—'],
                        ['name' => 'SLA guarantee', 'starter' => false, 'starterValue' => '—'],
                        ['name' => 'On-premise deployment', 'starter' => false, 'starterValue' => '—'],
                        ['name' => 'SSO & advanced security', 'starter' => false, 'starterValue' => '—']
                    ],
                    'roiLink' => '/roi-calculator',
                    'successStories' => [
                        [
                            'company' => 'TechStart Inc',
                            'industry' => 'SaaS',
                            'avatar' => 'techstart',
                            'result' => '40%',
                            'resultLabel' => 'Efficiency gain',
                            'description' => 'Reduced operational costs by 35% within 3 months of upgrading.'
                        ],
                        [
                            'company' => 'InnovateLabs',
                            'industry' => 'AI/ML',
                            'avatar' => 'innovatelabs',
                            'result' => '3x',
                            'resultLabel' => 'ROI achieved',
                            'description' => 'Generated 3x return on investment in first 6 months.'
                        ],
                        [
                            'company' => 'Global Logistics',
                            'industry' => 'Supply Chain',
                            'avatar' => 'global',
                            'result' => '50+',
                            'resultLabel' => 'Integrations',
                            'description' => 'Connected 50+ tools and automated workflows across departments.'
                        ]
                    ],
                    'trustBadges' => [
                        ['icon' => 'google', 'name' => 'Google'],
                        ['icon' => 'microsoft', 'name' => 'Microsoft'],
                        ['icon' => 'amazon', 'name' => 'Amazon']
                    ],
                    'guaranteeText' => '30-day money-back guarantee. No questions asked.',
                    'contactText' => 'Ready to upgrade? Our team is here to help you get started.',
                    'contactLink' => '/contact'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 256,
                'section_key' => 'professionalPlan',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Enterprise Plan Section
            [
                'id' => 257,
                'section_key' => 'enterprisePlan',
                'variant' => 'variant1',
                'config' => json_encode([
                    "badge" => [
                        "text" => "Enterprise Plan",
                        "backgroundColor" => "bg-blue-100 dark:bg-blue-900/30",
                        "borderColor" => "border-blue-200 dark:border-blue-800",
                        "textColor" => "text-blue-700 dark:text-blue-300",
                        "showPulse" => true
                    ],
                    "title" => [
                        "prefix" => "Built for",
                        "highlightedText" => "Enterprise",
                        "suffix" => "Scale",
                        "highlightGradient" => "from-blue-600 to-indigo-600"
                    ],
                    "description" => "Custom solutions for large organizations with complex needs, offering unmatched scalability, security, and support.",
                    "stats" => [
                        ["value" => "99.9%", "label" => "Uptime SLA"],
                        ["value" => "24/7", "label" => "Support"],
                        ["value" => "15min", "label" => "Response Time"],
                        ["value" => "100+", "label" => "Integrations"]
                    ],
                    "features" => [
                        [
                            "icon" => "shield",
                            "title" => "Advanced Security",
                            "description" => "Enterprise-grade security with SOC 2, ISO 27001, and GDPR compliance. Protect your data with bank-level encryption and continuous monitoring."
                        ],
                        [
                            "icon" => "chart",
                            "title" => "Advanced Analytics",
                            "description" => "Custom dashboards, predictive analytics, and business intelligence tools. Make data-driven decisions with real-time insights."
                        ],
                        [
                            "icon" => "headset",
                            "title" => "24/7 Priority Support",
                            "description" => "Dedicated account manager with 15-minute response time SLA. Get the help you need whenever you need it."
                        ],
                        [
                            "icon" => "database",
                            "title" => "Custom Integrations",
                            "description" => "Connect with any system using our flexible API and webhooks. Seamlessly integrate with your existing tech stack."
                        ],
                        [
                            "icon" => "cloud",
                            "title" => "Multi-Cloud Deployment",
                            "description" => "Deploy on AWS, Azure, GCP, or on-premises infrastructure. Choose the deployment option that fits your requirements."
                        ],
                        [
                            "icon" => "users",
                            "title" => "Unlimited Users",
                            "description" => "No per-seat pricing. Scale your team without constraints. Add as many users as your organization needs."
                        ]
                    ],
                    "benefits" => [
                        ["icon" => "chart", "value" => "25-35%", "label" => "Average Cost Reduction"],
                        ["icon" => "clock", "value" => "3-6 mo", "label" => "Payback Period"],
                        ["icon" => "trending", "value" => "2.5x", "label" => "Average ROI"]
                    ],
                    "industries" => [
                        [
                            "id" => "retail",
                            "icon" => "retail",
                            "name" => "Retail",
                            "description" => "Omnichannel solutions for modern retailers. Manage inventory across hundreds of locations with real-time synchronization.",
                            "highlights" => [
                                "Multi-location inventory sync",
                                "Real-time pricing optimization",
                                "Customer behavior analytics",
                                "POS system integration"
                            ]
                        ],
                        [
                            "id" => "finance",
                            "icon" => "finance",
                            "name" => "Finance",
                            "description" => "Secure, compliant solutions for financial institutions. Meet regulatory requirements while optimizing operations.",
                            "highlights" => [
                                "Regulatory compliance automation",
                                "Fraud detection algorithms",
                                "Real-time transaction monitoring",
                                "Audit trail and reporting"
                            ]
                        ],
                        [
                            "id" => "healthcare",
                            "icon" => "healthcare",
                            "name" => "Healthcare",
                            "description" => "HIPAA-compliant inventory and supply chain management. Ensure patient data protection while streamlining operations.",
                            "highlights" => [
                                "HIPAA compliance ready",
                                "Patient data protection",
                                "Supply chain optimization",
                                "Expiration tracking"
                            ]
                        ],
                        [
                            "id" => "manufacturing",
                            "icon" => "manufacturing",
                            "name" => "Manufacturing",
                            "description" => "End-to-end manufacturing inventory and production planning. Optimize your entire supply chain from raw materials to finished goods.",
                            "highlights" => [
                                "Raw material tracking",
                                "Production scheduling",
                                "Quality control integration",
                                "Supply chain visibility"
                            ]
                        ],
                        [
                            "id" => "tech",
                            "icon" => "tech",
                            "name" => "Technology",
                            "description" => "Scalable solutions for SaaS and tech companies. API-first architecture that grows with your business.",
                            "highlights" => [
                                "API-first architecture",
                                "Developer tools and SDKs",
                                "Usage-based analytics",
                                "Custom integrations"
                            ]
                        ]
                    ],
                    "complianceBadges" => ["SOC 2 Type II", "ISO 27001", "GDPR", "HIPAA"],
                    "successStories" => [
                        [
                            "company" => "Global Finance Corp",
                            "industry" => "Financial Services",
                            "icon" => "building",
                            "quote" => "The enterprise plan gave us the security and scalability we needed to handle millions of transactions daily. Their compliance team made the audit process seamless.",
                            "result" => "$2.5M",
                            "link" => "/case-studies/global-finance"
                        ],
                        [
                            "company" => "HealthTech Solutions",
                            "industry" => "Healthcare",
                            "icon" => "shield",
                            "quote" => "HIPAA compliance was a must for us. Their enterprise solution exceeded our expectations and helped us scale to serve 10M+ patients.",
                            "result" => "$1.8M",
                            "link" => "/case-studies/healthtech"
                        ]
                    ],
                    "ctaText" => "Ready to take your enterprise operations to the next level?",
                    "ctaButtonText" => "Contact Sales"
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 258,
                'section_key' => 'enterprisePlan',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Enterprise Plan',
                        'backgroundColor' => 'bg-blue-100 dark:bg-blue-900/30',
                        'borderColor' => 'border-blue-200 dark:border-blue-800',
                        'textColor' => 'text-blue-700 dark:text-blue-300',
                        'showPulse' => true,
                    ],
                    'title' => [
                        'prefix' => 'Enterprise-Grade',
                        'highlightedText' => 'Solutions',
                        'suffix' => 'for Global Operations',
                        'highlightGradient' => 'from-blue-600 to-indigo-600',
                    ],
                    'description' => 'Everything you need to run your enterprise with confidence, security, and scale.',
                    'stats' => [
                        [
                            'icon' => 'chart',
                            'value' => '99.9%',
                            'label' => 'Uptime SLA',
                        ],
                        [
                            'icon' => 'clock',
                            'value' => '15min',
                            'label' => 'Response Time',
                        ],
                        [
                            'icon' => 'trending',
                            'value' => '3x',
                            'label' => 'Faster ROI',
                        ],
                        [
                            'icon' => 'users',
                            'value' => '500+',
                            'label' => 'Enterprise Clients',
                        ],
                    ],
                    'testimonials' => [
                        [
                            'quote' => 'The enterprise solution transformed our supply chain operations. We\'ve seen unprecedented efficiency gains and cost savings across our global network.',
                            'author' => 'Sarah Johnson',
                            'role' => 'VP of Operations',
                            'company' => 'Global Retail Corp',
                            'avatar' => 'sarah',
                            'result' => '40% reduction in inventory costs',
                        ],
                        [
                            'quote' => 'Security and compliance were our top priorities. This platform exceeded our expectations with enterprise-grade features and dedicated support.',
                            'author' => 'Michael Chen',
                            'role' => 'CTO',
                            'company' => 'FinTech Solutions',
                            'avatar' => 'michael',
                            'result' => '$2.5M annual savings',
                        ],
                        [
                            'quote' => 'The scalability of this solution allowed us to grow from 10 to 100+ warehouses without missing a beat. Absolutely essential for our expansion.',
                            'author' => 'Emily Rodriguez',
                            'role' => 'Supply Chain Director',
                            'company' => 'Manufacturing Pro',
                            'avatar' => 'emily',
                            'result' => '3x warehouse capacity',
                        ],
                    ],
                    'features' => [
                        [
                            'icon' => 'security',
                            'title' => 'Enterprise Security',
                            'shortDescription' => 'Bank-level encryption and compliance',
                            'description' => 'Protect your sensitive data with military-grade encryption, multi-factor authentication, and comprehensive audit trails. Our platform meets the highest security standards including SOC 2 Type II, ISO 27001, and GDPR compliance.',
                            'highlights' => [
                                '256-bit encryption at rest and in transit',
                                'Multi-factor authentication (MFA)',
                                'Role-based access control (RBAC)',
                                'Comprehensive audit logging',
                                'SOC 2 Type II certified',
                            ],
                            'statIcon' => 'shield',
                            'statValue' => '100%',
                            'statLabel' => 'Data Protection',
                        ],
                        [
                            'icon' => 'analytics',
                            'title' => 'Advanced Analytics',
                            'shortDescription' => 'AI-powered insights and forecasting',
                            'description' => 'Leverage machine learning algorithms to predict demand, optimize inventory levels, and identify cost-saving opportunities. Get real-time dashboards customized for your KPIs.',
                            'highlights' => [
                                'AI-powered demand forecasting (95% accuracy)',
                                'Real-time customizable dashboards',
                                'Predictive inventory optimization',
                                'Automated reporting and alerts',
                                'Integration with Tableau and Power BI',
                            ],
                            'statIcon' => 'trending',
                            'statValue' => '40%',
                            'statLabel' => 'Efficiency Gain',
                        ],
                        [
                            'icon' => 'support',
                            'title' => 'Dedicated Support',
                            'shortDescription' => '24/7 priority support team',
                            'description' => 'Get a dedicated account manager and technical support team available 24/7 with guaranteed 15-minute response times for critical issues.',
                            'highlights' => [
                                'Dedicated account manager',
                                '24/7/365 technical support',
                                '15-minute response SLA',
                                'Quarterly business reviews',
                                'On-site training available',
                            ],
                            'statIcon' => 'clock',
                            'statValue' => '99.9%',
                            'statLabel' => 'Customer Satisfaction',
                        ],
                    ],
                    'enterprisePlan' => [
                        'fullFeatures' => [
                            'Unlimited users and locations',
                            'Custom API rate limits (5000+ requests/second)',
                            'White-labeled platform option',
                            'Custom contract terms',
                            'SLA guarantees with financial backing',
                            'On-premise deployment option',
                            'Single Sign-On (SSO) integration',
                            'Custom workflow automation',
                            'Advanced security features (IP whitelisting, audit logs)',
                            'Priority feature requests',
                            'Dedicated success manager',
                            'Quarterly business reviews',
                        ],
                    ],
                    'caseStudies' => [
                        [
                            'image' => '/images/case-studies/global-retail.jpg',
                            'icon' => 'building',
                            'industry' => 'Retail',
                            'company' => 'Global Retail Corp',
                            'description' => 'How Global Retail Corp optimized inventory across 500+ locations, reducing stockouts by 85% and saving $3.2M annually.',
                            'result' => '$3.2M',
                            'roi' => '287%',
                            'link' => '/case-studies/global-retail-corp',
                        ],
                        [
                            'image' => '/images/case-studies/first-national-bank.jpg',
                            'icon' => 'shield',
                            'industry' => 'Finance',
                            'company' => 'First National Bank',
                            'description' => 'First National Bank achieved 100% compliance and reduced asset tracking time by 75% with our enterprise solution.',
                            'result' => '$1.8M',
                            'roi' => '195%',
                            'link' => '/case-studies/first-national-bank',
                        ],
                    ],
                    'ctaText' => 'Ready to discuss your enterprise needs?',
                    'ctaButtonText' => 'Contact Sales',
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 259,
                'section_key' => 'enterprisePlan',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Enterprise Comparison',
                        'backgroundColor' => 'bg-blue-100 dark:bg-blue-900/30',
                        'borderColor' => 'border-blue-200 dark:border-blue-800',
                        'textColor' => 'text-blue-700 dark:text-blue-300',
                        'showPulse' => true,
                    ],
                    'title' => [
                        'prefix' => 'Why',
                        'highlightedText' => 'Enterprises',
                        'suffix' => 'Choose Us',
                        'highlightGradient' => 'from-blue-600 to-indigo-600',
                    ],
                    'description' => 'Compare features, see ROI metrics, and discover why leading enterprises trust our platform.',
                    'roiMetrics' => [
                        [
                            'icon' => 'chart',
                            'value' => '35-45%',
                            'label' => 'Cost Reduction',
                            'description' => 'Average operational cost savings',
                        ],
                        [
                            'icon' => 'clock',
                            'value' => '6-9 mo',
                            'label' => 'Payback Period',
                            'description' => 'Average time to ROI',
                        ],
                        [
                            'icon' => 'trending',
                            'value' => '3.2x',
                            'label' => 'Average ROI',
                            'description' => 'Return on investment',
                        ],
                    ],
                    'comparisonData' => [
                        [
                            'feature' => 'Inventory Tracking',
                            'starter' => true,
                            'professional' => true,
                            'enterprise' => true,
                        ],
                        [
                            'feature' => 'Real-time Analytics',
                            'starter' => false,
                            'professional' => true,
                            'enterprise' => true,
                        ],
                        [
                            'feature' => 'API Access',
                            'starter' => false,
                            'professional' => true,
                            'enterprise' => true,
                        ],
                        [
                            'feature' => 'Custom Integrations',
                            'starter' => false,
                            'professional' => false,
                            'enterprise' => true,
                        ],
                        [
                            'feature' => 'Dedicated Support',
                            'starter' => false,
                            'professional' => false,
                            'enterprise' => true,
                        ],
                        [
                            'feature' => 'SLA Guarantee',
                            'starter' => false,
                            'professional' => '99.5%',
                            'enterprise' => '99.9%',
                        ],
                        [
                            'feature' => 'SSO Integration',
                            'starter' => false,
                            'professional' => false,
                            'enterprise' => true,
                        ],
                        [
                            'feature' => 'Custom Reporting',
                            'starter' => false,
                            'professional' => false,
                            'enterprise' => true,
                        ],
                        [
                            'feature' => 'White Labeling',
                            'starter' => false,
                            'professional' => false,
                            'enterprise' => true,
                        ],
                        [
                            'feature' => 'On-premise Deployment',
                            'starter' => false,
                            'professional' => false,
                            'enterprise' => true,
                        ],
                        [
                            'feature' => 'Compliance Certifications',
                            'starter' => false,
                            'professional' => false,
                            'enterprise' => true,
                        ],
                    ],
                    'vendorComparison' => [
                        [
                            'capability' => 'Real-time Inventory Sync',
                            'competitorA' => true,
                            'competitorB' => false,
                        ],
                        [
                            'capability' => 'AI Demand Forecasting',
                            'competitorA' => false,
                            'competitorB' => false,
                        ],
                        [
                            'capability' => 'Multi-warehouse Support',
                            'competitorA' => true,
                            'competitorB' => true,
                        ],
                        [
                            'capability' => 'Custom API Access',
                            'competitorA' => false,
                            'competitorB' => true,
                        ],
                        [
                            'capability' => '24/7 Priority Support',
                            'competitorA' => false,
                            'competitorB' => false,
                        ],
                        [
                            'capability' => '99.9% Uptime SLA',
                            'competitorA' => false,
                            'competitorB' => false,
                        ],
                        [
                            'capability' => 'SOC 2 Type II Certified',
                            'competitorA' => false,
                            'competitorB' => false,
                        ],
                        [
                            'capability' => 'Custom Reporting Dashboard',
                            'competitorA' => false,
                            'competitorB' => true,
                        ],
                        [
                            'capability' => 'Mobile App Access',
                            'competitorA' => true,
                            'competitorB' => true,
                        ],
                    ],
                    'deploymentOptions' => [
                        [
                            'icon' => 'cloud',
                            'name' => 'Cloud Deployment',
                            'description' => 'Fully managed SaaS solution with automatic updates',
                            'features' => [
                                'No infrastructure management',
                                'Automatic updates and patches',
                                'Global CDN for fast access',
                                '99.9% uptime SLA',
                                'Pay-as-you-go pricing',
                            ],
                        ],
                        [
                            'icon' => 'onprem',
                            'name' => 'On-Premise Deployment',
                            'description' => 'Self-hosted solution for maximum control',
                            'features' => [
                                'Complete data control',
                                'Air-gapped security options',
                                'Custom infrastructure scaling',
                                'Private network access',
                                'Annual licensing model',
                            ],
                        ],
                        [
                            'icon' => 'hybrid',
                            'name' => 'Hybrid Deployment',
                            'description' => 'Best of both worlds for enterprise needs',
                            'features' => [
                                'Flexible data placement',
                                'Edge computing support',
                                'Disaster recovery ready',
                                'Gradual cloud migration',
                                'Custom integration options',
                            ],
                        ],
                    ],
                    'complianceBadges' => [
                        ['name' => 'SOC 2 Type II'],
                        ['name' => 'ISO 27001'],
                        ['name' => 'GDPR Compliant'],
                        ['name' => 'HIPAA Ready'],
                        ['name' => 'PCI DSS Level 1'],
                    ],
                    'clientLogos' => [
                        ['icon' => 'building', 'name' => 'Global Retail Corp'],
                        ['icon' => 'building', 'name' => 'First National Bank'],
                        ['icon' => 'building', 'name' => 'Manufacturing Pro'],
                        ['icon' => 'building', 'name' => 'Tech Solutions Inc'],
                        ['icon' => 'building', 'name' => 'Healthcare Systems'],
                    ],
                    'ctaText' => 'Ready to transform your enterprise operations?',
                    'ctaButtonText' => 'Schedule Enterprise Demo',
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 260,
                'section_key' => 'enterprisePlan',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Custom Pricing Section
            [
                'id' => 261,
                'section_key' => 'customPricing',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Custom Pricing',
                        'backgroundColor' => 'bg-green-100 dark:bg-green-900/30',
                        'borderColor' => 'border-green-200 dark:border-green-800',
                        'textColor' => 'text-green-700 dark:text-green-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Pricing',
                        'highlightedText' => 'Tailored to You',
                        'suffix' => '',
                        'highlightGradient' => 'from-green-600 to-emerald-600'
                    ],
                    'description' => 'Get a pricing plan that fits your unique business needs. Pay only for what you need, scale as you grow.',
                    'benefits' => [
                        [
                            'icon' => 'calculator',
                            'title' => 'Pay for What You Need',
                            'description' => 'Only pay for the features and services your business actually uses.'
                        ],
                        [
                            'icon' => 'handshake',
                            'title' => 'Flexible Terms',
                            'description' => 'Choose payment schedules and contract lengths that work for you.'
                        ],
                        [
                            'icon' => 'infographic',
                            'title' => 'Volume Discounts',
                            'description' => 'Save more as your business scales with tiered pricing.'
                        ]
                    ],
                    'industries' => [
                        [
                            'id' => 'retail',
                            'icon' => 'shopping-bag',
                            'name' => 'Retail',
                            'description' => 'Custom POS and inventory management solutions for retail chains.',
                            'features' => ['Multi-location support', 'Real-time inventory sync', 'Customer loyalty integration', 'Omnichannel reporting'],
                            'avgSavings' => '25-30%'
                        ],
                        [
                            'id' => 'manufacturing',
                            'icon' => 'building',
                            'name' => 'Manufacturing',
                            'description' => 'Enterprise-grade supply chain and production planning tools.',
                            'features' => ['Production scheduling', 'Quality control modules', 'Supplier management', 'Demand forecasting'],
                            'avgSavings' => '30-40%'
                        ],
                        [
                            'id' => 'logistics',
                            'icon' => 'truck',
                            'name' => 'Logistics',
                            'description' => 'Fleet management and route optimization for logistics companies.',
                            'features' => ['Real-time tracking', 'Route optimization', 'Driver management', 'Fuel efficiency reporting'],
                            'avgSavings' => '20-25%'
                        ],
                        [
                            'id' => 'healthcare',
                            'icon' => 'shield',
                            'name' => 'Healthcare',
                            'description' => 'HIPAA-compliant patient management and scheduling.',
                            'features' => ['Patient records', 'Appointment scheduling', 'Billing integration', 'Telehealth tools'],
                            'avgSavings' => '15-20%'
                        ]
                    ],
                    'useCases' => [
                        [
                            'icon' => 'sparkles',
                            'title' => 'Enterprise Deployment',
                            'description' => 'Large-scale implementations with custom onboarding and dedicated support.',
                            'benefit' => 'Save up to 40% with enterprise contracts'
                        ],
                        [
                            'icon' => 'users',
                            'title' => 'Multi-Location Business',
                            'description' => 'Centralized management for businesses with 10+ locations.',
                            'benefit' => 'Volume discounts starting at 10+ locations'
                        ],
                        [
                            'icon' => 'chart',
                            'title' => 'High-Volume Processing',
                            'description' => 'Custom pricing for businesses processing large volumes of transactions.',
                            'benefit' => 'Pay-as-you-go with volume-based tiers'
                        ],
                        [
                            'icon' => 'building-2',
                            'title' => 'White Label Solutions',
                            'description' => 'Fully branded solutions for partners and resellers.',
                            'benefit' => 'Custom pricing based on reseller volume'
                        ]
                    ],
                    'testimonial' => [
                        'quote' => 'The custom pricing model saved us 30% compared to standard plans. We only pay for what we need, and scaling has been seamless.',
                        'author' => 'Sarah Johnson',
                        'role' => 'CTO',
                        'company' => 'TechFlow Solutions',
                        'icon' => 'user'
                    ],
                    'faqs' => [
                        [
                            'question' => 'How does custom pricing work?',
                            'answer' => 'We assess your specific business needs, scale, and requirements to create a tailored pricing plan that fits your budget and goals.'
                        ],
                        [
                            'question' => 'Is there a minimum commitment?',
                            'answer' => 'Minimum commitments vary by plan. We offer flexible options for businesses of all sizes, including month-to-month for smaller deployments.'
                        ],
                        [
                            'question' => 'Can I change my plan later?',
                            'answer' => 'Yes! You can upgrade, downgrade, or adjust your custom plan as your business needs evolve.'
                        ],
                        [
                            'question' => 'What support is included?',
                            'answer' => 'Custom plans include dedicated account management, priority support, and optional SLAs based on your requirements.'
                        ]
                    ],
                    'ctaText' => 'Ready to get your custom quote?',
                    'ctaButtonText' => 'Request a Quote'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 262,
                'section_key' => 'customPricing',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Custom Pricing',
                        'backgroundColor' => 'bg-green-100 dark:bg-green-900/30',
                        'borderColor' => 'border-green-200 dark:border-green-800',
                        'textColor' => 'text-green-700 dark:text-green-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Pricing',
                        'highlightedText' => 'Calculator',
                        'suffix' => '',
                        'highlightGradient' => 'from-green-600 to-emerald-600'
                    ],
                    'description' => 'Get an instant estimate based on your business needs. Adjust the sliders to see your custom price.',
                    'features' => [
                        [
                            'icon' => 'sparkles',
                            'title' => 'Custom Integrations',
                            'description' => 'Connect with any third-party system or API of your choice'
                        ],
                        [
                            'icon' => 'shield',
                            'title' => 'Advanced Security',
                            'description' => 'Enterprise-grade security with custom compliance options'
                        ],
                        [
                            'icon' => 'handshake',
                            'title' => 'Dedicated Support',
                            'description' => '24/7 priority support with assigned account manager'
                        ]
                    ],
                    'enterpriseFeatures' => [
                        [
                            'name' => 'Custom SLA',
                            'description' => 'Tailored service level agreements for your business needs'
                        ],
                        [
                            'name' => 'On-Premise Deployment',
                            'description' => 'Host the solution in your own infrastructure'
                        ],
                        [
                            'name' => 'White Labeling',
                            'description' => 'Fully branded solution with your logo and colors'
                        ],
                        [
                            'name' => 'Custom Reporting',
                            'description' => 'Build custom dashboards and analytics reports'
                        ]
                    ],
                    'comparisonData' => [
                        [
                            'feature' => 'API Access',
                            'standard' => 'Limited',
                            'professional' => 'Full Access',
                            'custom' => 'Full + Custom Endpoints'
                        ],
                        [
                            'feature' => 'Support Response Time',
                            'standard' => '48 hours',
                            'professional' => '24 hours',
                            'custom' => '2 hours'
                        ],
                        [
                            'feature' => 'Custom Integrations',
                            'standard' => '✓',
                            'professional' => '✓',
                            'custom' => 'Unlimited'
                        ],
                        [
                            'feature' => 'Account Manager',
                            'standard' => '—',
                            'professional' => '✓',
                            'custom' => 'Dedicated'
                        ]
                    ],
                    'testimonials' => [
                        [
                            'quote' => 'The custom pricing model allowed us to scale without breaking the bank. We saved 35% compared to standard plans.',
                            'author' => 'Michael Chen',
                            'role' => 'VP of Operations',
                            'company' => 'Global Logistics Inc.',
                            'icon' => 'user',
                            'result' => '35% cost savings'
                        ],
                        [
                            'quote' => 'The calculator gave us an accurate estimate in seconds. The custom plan fit our exact needs perfectly.',
                            'author' => 'Jessica Williams',
                            'role' => 'CTO',
                            'company' => 'Retail Innovations',
                            'icon' => 'user',
                            'result' => '40% faster deployment'
                        ]
                    ],
                    'ctaText' => 'Ready to get your personalized quote?',
                    'ctaButtonText' => 'Request Custom Quote'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 263,
                'section_key' => 'customPricing',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Custom Pricing',
                        'backgroundColor' => 'bg-green-100 dark:bg-green-900/30',
                        'borderColor' => 'border-green-200 dark:border-green-800',
                        'textColor' => 'text-green-700 dark:text-green-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Get Your',
                        'highlightedText' => 'Custom Quote',
                        'suffix' => '',
                        'highlightGradient' => 'from-green-600 to-emerald-600'
                    ],
                    'description' => 'Fill out the form below and our team will prepare a personalized pricing plan tailored to your business needs.',
                    'industries' => [
                        ['id' => 'retail', 'name' => 'Retail'],
                        ['id' => 'manufacturing', 'name' => 'Manufacturing'],
                        ['id' => 'logistics', 'name' => 'Logistics'],
                        ['id' => 'healthcare', 'name' => 'Healthcare'],
                        ['id' => 'technology', 'name' => 'Technology'],
                        ['id' => 'food-beverage', 'name' => 'Food & Beverage']
                    ],
                    'companySizes' => ['1-50', '51-200', '201-500', '501-1000', '1000+'],
                    'integrationOptions' => [
                        'Salesforce',
                        'Shopify',
                        'Magento',
                        'WooCommerce',
                        'SAP',
                        'Oracle',
                        'NetSuite',
                        'QuickBooks',
                        'Xero',
                        'Custom API'
                    ],
                    'featureOptions' => [
                        'Advanced Analytics',
                        'Custom Reporting',
                        'White Labeling',
                        'SSO Integration',
                        'Audit Logs',
                        'API Access',
                        'Mobile App',
                        'Bulk Import/Export'
                    ],
                    'timelineOptions' => [
                        ['value' => 'immediate', 'label' => 'Immediate (ASAP)'],
                        ['value' => '1-3months', 'label' => '1-3 months'],
                        ['value' => '3-6months', 'label' => '3-6 months'],
                        ['value' => '6-12months', 'label' => '6-12 months']
                    ],
                    'budgetOptions' => [
                        ['value' => 'under-25k', 'label' => 'Under $25,000/year'],
                        ['value' => '25k-50k', 'label' => '$25,000 - $50,000/year'],
                        ['value' => '50k-100k', 'label' => '$50,000 - $100,000/year'],
                        ['value' => '100k-250k', 'label' => '$100,000 - $250,000/year'],
                        ['value' => '250k+', 'label' => '$250,000+/year']
                    ],
                    'trustBadges' => [
                        ['icon' => 'shield', 'name' => 'ISO 27001'],
                        ['icon' => 'handshake', 'name' => 'GDPR Compliant'],
                        ['icon' => 'sparkles', 'name' => 'SOC 2 Type II']
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 264,
                'section_key' => 'customPricing',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Free Trial Section
            [
                'id' => 265,
                'section_key' => 'freeTrial',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Free Trial',
                        'backgroundColor' => 'bg-blue-100 dark:bg-blue-900/30',
                        'borderColor' => 'border-blue-200 dark:border-blue-800',
                        'textColor' => 'text-blue-700 dark:text-blue-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Start Your',
                        'highlightedText' => 'Free Trial',
                        'suffix' => 'Today',
                        'highlightGradient' => 'from-blue-600 to-indigo-600'
                    ],
                    'description' => 'Experience the full power of our platform with a 14-day free trial. No credit card required, cancel anytime.',
                    'plans' => [
                        [
                            'id' => 'professional',
                            'name' => 'Professional',
                            'features' => [
                                'Up to 10 users',
                                '50,000 SKUs',
                                'Basic analytics',
                                'Email support',
                                'API access'
                            ]
                        ],
                        [
                            'id' => 'enterprise',
                            'name' => 'Enterprise',
                            'features' => [
                                'Unlimited users',
                                'Unlimited SKUs',
                                'Advanced analytics',
                                '24/7 priority support',
                                'Custom integrations',
                                'Dedicated account manager'
                            ]
                        ]
                    ],
                    'features' => [
                        [
                            'icon' => 'chart',
                            'title' => 'Real-time Analytics',
                            'description' => 'Get instant insights with live dashboards and custom reports'
                        ],
                        [
                            'icon' => 'database',
                            'title' => 'Unlimited Storage',
                            'description' => 'Store all your data with no limits during trial period'
                        ],
                        [
                            'icon' => 'users',
                            'title' => 'Team Collaboration',
                            'description' => 'Invite team members and work together seamlessly'
                        ],
                        [
                            'icon' => 'cog',
                            'title' => 'Custom Workflows',
                            'description' => 'Build automated workflows tailored to your business'
                        ],
                        [
                            'icon' => 'handshake',
                            'title' => 'Integration Ready',
                            'description' => 'Connect with 100+ third-party tools and services'
                        ],
                        [
                            'icon' => 'support',
                            'title' => '24/7 Support',
                            'description' => 'Get help anytime from our dedicated support team'
                        ]
                    ],
                    'testimonials' => [
                        [
                            'quote' => 'The free trial gave us everything we needed to evaluate the platform. We signed up for the enterprise plan within a week.',
                            'author' => 'Sarah Johnson',
                            'role' => 'CTO',
                            'company' => 'TechFlow Solutions',
                            'icon' => 'users'
                        ],
                        [
                            'quote' => 'Amazing onboarding experience. The support team helped us set up everything in just 2 days.',
                            'author' => 'Michael Chen',
                            'role' => 'Operations Director',
                            'company' => 'Global Logistics',
                            'icon' => 'users'
                        ]
                    ],
                    'faqs' => [
                        [
                            'question' => 'Do I need a credit card to start?',
                            'answer' => 'No, we never ask for credit card information during the free trial period. You can start immediately with just your email.'
                        ],
                        [
                            'question' => 'What happens after the 14-day trial?',
                            'answer' => 'You\'ll receive a notification before your trial ends. You can choose a subscription plan or export your data at any time.'
                        ],
                        [
                            'question' => 'Can I upgrade or downgrade my plan?',
                            'answer' => 'Yes, you can switch between plans at any time. During the trial, you have access to all features regardless of plan.'
                        ],
                        [
                            'question' => 'Is there a setup fee?',
                            'answer' => 'No, there are no setup fees. All plans include free onboarding and setup support.'
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 266,
                'section_key' => 'freeTrial',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Free Trial',
                        'backgroundColor' => 'bg-blue-100 dark:bg-blue-900/30',
                        'borderColor' => 'border-blue-200 dark:border-blue-800',
                        'textColor' => 'text-blue-700 dark:text-blue-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Start Your',
                        'highlightedText' => 'Free Trial',
                        'suffix' => 'Today',
                        'highlightGradient' => 'from-blue-600 to-indigo-600'
                    ],
                    'description' => 'Experience the full power of our platform with a 14-day free trial. No credit card required, cancel anytime.',
                    'plans' => [
                        [
                            'id' => 'professional',
                            'icon' => 'sparkles',
                            'name' => 'Professional',
                            'price' => 99,
                            'description' => 'Perfect for growing businesses',
                            'features' => [
                                'Up to 10 users',
                                '50,000 SKUs',
                                'Basic analytics',
                                'Email support',
                                'API access'
                            ]
                        ],
                        [
                            'id' => 'business',
                            'icon' => 'chart',
                            'name' => 'Business',
                            'price' => 249,
                            'description' => 'For scaling organizations',
                            'features' => [
                                'Up to 50 users',
                                '200,000 SKUs',
                                'Advanced analytics',
                                'Priority support',
                                'Custom reports'
                            ]
                        ],
                        [
                            'id' => 'enterprise',
                            'icon' => 'rocket',
                            'name' => 'Enterprise',
                            'price' => 499,
                            'description' => 'For large enterprises',
                            'features' => [
                                'Unlimited users',
                                'Unlimited SKUs',
                                'AI-powered analytics',
                                '24/7 dedicated support',
                                'Custom integrations'
                            ]
                        ]
                    ],
                    'industries' => [
                        ['id' => 'retail', 'name' => 'Retail'],
                        ['id' => 'manufacturing', 'name' => 'Manufacturing'],
                        ['id' => 'logistics', 'name' => 'Logistics'],
                        ['id' => 'healthcare', 'name' => 'Healthcare'],
                        ['id' => 'technology', 'name' => 'Technology'],
                        ['id' => 'food-beverage', 'name' => 'Food & Beverage']
                    ],
                    'features' => [
                        [
                            'icon' => 'database',
                            'title' => 'Full Platform Access',
                            'description' => 'Try all premium features with no restrictions during your trial'
                        ],
                        [
                            'icon' => 'users',
                            'title' => 'Team Collaboration',
                            'description' => 'Invite your whole team and work together seamlessly'
                        ],
                        [
                            'icon' => 'support',
                            'title' => 'Dedicated Support',
                            'description' => 'Get help from our customer success team whenever you need it'
                        ]
                    ],
                    'videoTestimonials' => [
                        [
                            'thumbnail' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800',
                            'title' => 'How Acme Corp increased efficiency by 40%',
                            'author' => 'Sarah Johnson, CTO at Acme Corp'
                        ],
                        [
                            'thumbnail' => 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800',
                            'title' => 'Streamlining operations at Global Logistics',
                            'author' => 'Michael Chen, Operations Director'
                        ]
                    ],
                    'faqs' => [
                        [
                            'question' => 'Do I need a credit card to start?',
                            'answer' => 'No, we never ask for credit card information during the free trial period. You can start immediately with just your email.'
                        ],
                        [
                            'question' => 'What happens after the 14-day trial?',
                            'answer' => 'You\'ll receive a notification before your trial ends. You can choose a subscription plan or export your data at any time.'
                        ],
                        [
                            'question' => 'Can I upgrade or downgrade my plan?',
                            'answer' => 'Yes, you can switch between plans at any time. During the trial, you have access to all features regardless of plan.'
                        ],
                        [
                            'question' => 'Is there a setup fee?',
                            'answer' => 'No, there are no setup fees. All plans include free onboarding and setup support.'
                        ]
                    ],
                    'trustBadges' => [
                        ['icon' => 'shield', 'name' => 'SOC 2 Type II'],
                        ['icon' => 'handshake', 'name' => 'GDPR Compliant'],
                        ['icon' => 'clock', 'name' => '99.9% Uptime']
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 267,
                'section_key' => 'freeTrial',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Free Trial',
                        'backgroundColor' => 'bg-blue-100 dark:bg-blue-900/30',
                        'borderColor' => 'border-blue-200 dark:border-blue-800',
                        'textColor' => 'text-blue-700 dark:text-blue-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Start Your',
                        'highlightedText' => 'Free Trial',
                        'suffix' => 'Today',
                        'highlightGradient' => 'from-blue-600 to-indigo-600'
                    ],
                    'description' => 'Experience the full power of our platform with a 14-day free trial. No credit card required, cancel anytime.',
                    'benefits' => [
                        'Full access to all premium features',
                        'No credit card required',
                        'Cancel anytime during trial',
                        'Dedicated onboarding support',
                        'Team collaboration tools'
                    ],
                    'plans' => [
                        [
                            'id' => 'professional',
                            'name' => 'Professional',
                            'features' => [
                                'Up to 10 users',
                                '50,000 SKUs',
                                'Basic analytics',
                                'Email support',
                                'API access',
                                'Basic reporting'
                            ]
                        ],
                        [
                            'id' => 'business',
                            'name' => 'Business',
                            'features' => [
                                'Up to 50 users',
                                '200,000 SKUs',
                                'Advanced analytics',
                                'Priority support',
                                'Custom reports',
                                'Team collaboration'
                            ]
                        ],
                        [
                            'id' => 'enterprise',
                            'name' => 'Enterprise',
                            'features' => [
                                'Unlimited users',
                                'Unlimited SKUs',
                                'AI-powered analytics',
                                '24/7 dedicated support',
                                'Custom integrations',
                                'SLA guarantee'
                            ]
                        ]
                    ],
                    'demoSteps' => [
                        [
                            'icon' => 'rocket',
                            'title' => 'Welcome to the Platform',
                            'description' => 'See how our intuitive dashboard gives you complete control over your operations.',
                            'highlights' => [
                                'Real-time data visualization',
                                'Customizable widgets',
                                'One-click reporting'
                            ],
                            'visualIcon' => 'rocket'
                        ],
                        [
                            'icon' => 'chart',
                            'title' => 'Powerful Analytics',
                            'description' => 'Make data-driven decisions with our advanced analytics engine.',
                            'highlights' => [
                                'Predictive insights',
                                'Trend analysis',
                                'Export any report'
                            ],
                            'visualIcon' => 'chart'
                        ],
                        [
                            'icon' => 'users',
                            'title' => 'Team Collaboration',
                            'description' => 'Work seamlessly with your team in real-time.',
                            'highlights' => [
                                'Role-based access',
                                'Real-time updates',
                                'Comment and review'
                            ],
                            'visualIcon' => 'users'
                        ],
                        [
                            'icon' => 'handshake',
                            'title' => 'Ready to Get Started?',
                            'description' => 'Join thousands of businesses already using our platform.',
                            'highlights' => [
                                '14-day free trial',
                                'No setup fees',
                                'Cancel anytime'
                            ],
                            'visualIcon' => 'handshake'
                        ]
                    ],
                    'comparisonFeatures' => [
                        ['name' => 'API Access'],
                        ['name' => 'Advanced Analytics'],
                        ['name' => 'Priority Support'],
                        ['name' => 'Custom Reports'],
                        ['name' => 'Team Collaboration'],
                        ['name' => 'SLA Guarantee']
                    ],
                    'faqs' => [
                        [
                            'question' => 'Do I need a credit card to start?',
                            'answer' => 'No, we never ask for credit card information during the free trial period. You can start immediately with just your email.'
                        ],
                        [
                            'question' => 'What happens after the 14-day trial?',
                            'answer' => 'You\'ll receive a notification before your trial ends. You can choose a subscription plan or export your data at any time.'
                        ],
                        [
                            'question' => 'Can I upgrade or downgrade my plan?',
                            'answer' => 'Yes, you can switch between plans at any time. During the trial, you have access to all features regardless of plan.'
                        ],
                        [
                            'question' => 'Is there a setup fee?',
                            'answer' => 'No, there are no setup fees. All plans include free onboarding and setup support.'
                        ]
                    ],
                    'trustBadges' => [
                        ['icon' => 'shield', 'name' => 'SOC 2 Type II'],
                        ['icon' => 'globe', 'name' => 'GDPR Compliant'],
                        ['icon' => 'clock', 'name' => '99.9% Uptime'],
                        ['icon' => 'users', 'name' => '1,000+ Customers']
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 268,
                'section_key' => 'freeTrial',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Feature Comparison Table Section
            [
                'id' => 269,
                'section_key' => 'featureComparisonTable',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Compare Plans',
                        'backgroundColor' => 'bg-blue-100 dark:bg-blue-900/30',
                        'borderColor' => 'border-blue-200 dark:border-blue-800',
                        'textColor' => 'text-blue-700 dark:text-blue-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Compare',
                        'highlightedText' => 'Plans & Features',
                        'suffix' => '',
                        'highlightGradient' => 'from-blue-600 to-indigo-600'
                    ],
                    'description' => 'Find the perfect plan for your business needs. Compare features across all our pricing tiers.',
                    'plans' => [
                        [
                            'id' => 'starter',
                            'icon' => 'sparkles',
                            'name' => 'Starter',
                            'price' => 49,
                            'popular' => false,
                            'description' => 'Perfect for small businesses and startups'
                        ],
                        [
                            'id' => 'professional',
                            'icon' => 'rocket',
                            'name' => 'Professional',
                            'price' => 99,
                            'popular' => true,
                            'description' => 'Most popular for growing businesses'
                        ],
                        [
                            'id' => 'business',
                            'icon' => 'chart',
                            'name' => 'Business',
                            'price' => 249,
                            'popular' => false,
                            'description' => 'For scaling organizations'
                        ],
                        [
                            'id' => 'enterprise',
                            'icon' => 'handshake',
                            'name' => 'Enterprise',
                            'price' => 499,
                            'popular' => false,
                            'description' => 'Custom solutions for large enterprises'
                        ]
                    ],
                    'categories' => [
                        ['id' => 'core', 'icon' => 'cog', 'name' => 'Core Features'],
                        ['id' => 'advanced', 'icon' => 'chart', 'name' => 'Advanced'],
                        ['id' => 'support', 'icon' => 'support', 'name' => 'Support'],
                        ['id' => 'integrations', 'icon' => 'cloud', 'name' => 'Integrations']
                    ],
                    'features' => [
                        [
                            'icon' => 'users',
                            'name' => 'User Seats',
                            'category' => 'core',
                            'tooltip' => 'Number of team members who can access the platform',
                            'starter' => 'Up to 5',
                            'professional' => 'Up to 20',
                            'business' => 'Up to 100',
                            'enterprise' => 'Unlimited'
                        ],
                        [
                            'icon' => 'database',
                            'name' => 'Storage',
                            'category' => 'core',
                            'tooltip' => 'Total storage space for your data',
                            'starter' => '10 GB',
                            'professional' => '100 GB',
                            'business' => '1 TB',
                            'enterprise' => 'Unlimited'
                        ],
                        [
                            'icon' => 'chart',
                            'name' => 'Advanced Analytics',
                            'category' => 'advanced',
                            'tooltip' => 'In-depth reporting and data visualization',
                            'starter' => false,
                            'professional' => true,
                            'business' => true,
                            'enterprise' => true
                        ],
                        [
                            'icon' => 'shield',
                            'name' => 'SSO Integration',
                            'category' => 'integrations',
                            'tooltip' => 'Single sign-on for enterprise security',
                            'starter' => false,
                            'professional' => false,
                            'business' => true,
                            'enterprise' => true
                        ],
                        [
                            'icon' => 'clock',
                            'name' => 'Support Response Time',
                            'category' => 'support',
                            'tooltip' => 'Average time for support ticket response',
                            'starter' => '48 hours',
                            'professional' => '24 hours',
                            'business' => '4 hours',
                            'enterprise' => '1 hour'
                        ],
                        [
                            'icon' => 'phone',
                            'name' => 'Phone Support',
                            'category' => 'support',
                            'tooltip' => 'Dedicated phone support line',
                            'starter' => false,
                            'professional' => false,
                            'business' => true,
                            'enterprise' => true
                        ],
                        [
                            'icon' => 'cloud',
                            'name' => 'Custom Integrations',
                            'category' => 'integrations',
                            'tooltip' => 'Connect with any third-party API',
                            'starter' => false,
                            'professional' => '5',
                            'business' => '20',
                            'enterprise' => 'Unlimited'
                        ],
                        [
                            'icon' => 'mail',
                            'name' => 'Email Reports',
                            'category' => 'advanced',
                            'tooltip' => 'Automated email reports and summaries',
                            'starter' => false,
                            'professional' => true,
                            'business' => true,
                            'enterprise' => true
                        ],
                        [
                            'icon' => 'credit-card',
                            'name' => 'API Access',
                            'category' => 'integrations',
                            'tooltip' => 'REST API for custom development',
                            'starter' => false,
                            'professional' => true,
                            'business' => true,
                            'enterprise' => true
                        ],
                        [
                            'icon' => 'support',
                            'name' => 'Dedicated Account Manager',
                            'category' => 'support',
                            'tooltip' => 'Personal account manager for your business',
                            'starter' => false,
                            'professional' => false,
                            'business' => false,
                            'enterprise' => true
                        ]
                    ],
                    'ctaText' => 'Not sure which plan is right for you?',
                    'ctaLink' => '/contact',
                    'ctaButtonText' => 'Contact Sales',
                    'footnote' => '* All prices are in USD and billed monthly. Annual billing options available with 20% discount.'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 270,
                'section_key' => 'featureComparisonTable',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Compare Plans',
                        'backgroundColor' => 'bg-blue-100 dark:bg-blue-900/30',
                        'borderColor' => 'border-blue-200 dark:border-blue-800',
                        'textColor' => 'text-blue-700 dark:text-blue-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Find Your',
                        'highlightedText' => 'Perfect Plan',
                        'suffix' => '',
                        'highlightGradient' => 'from-blue-600 to-indigo-600'
                    ],
                    'description' => 'Compare features across all our pricing tiers to find the perfect fit for your business.',
                    'plans' => [
                        ['id' => 'starter', 'icon' => 'sparkles', 'name' => 'Starter', 'price' => 49, 'popular' => false],
                        ['id' => 'professional', 'icon' => 'rocket', 'name' => 'Professional', 'price' => 99, 'popular' => true],
                        ['id' => 'business', 'icon' => 'chart', 'name' => 'Business', 'price' => 249, 'popular' => false],
                        ['id' => 'enterprise', 'icon' => 'handshake', 'name' => 'Enterprise', 'price' => 'Custom', 'popular' => false]
                    ],
                    'featuresByCategory' => [
                        [
                            'icon' => 'cog',
                            'name' => 'Core Features',
                            'features' => [
                                [
                                    'icon' => 'users',
                                    'name' => 'User Seats',
                                    'tooltip' => 'Number of team members who can access the platform',
                                    'starter' => 'Up to 5',
                                    'professional' => 'Up to 20',
                                    'business' => 'Up to 100',
                                    'enterprise' => 'Unlimited'
                                ],
                                [
                                    'icon' => 'database',
                                    'name' => 'Storage',
                                    'tooltip' => 'Total storage space for your data',
                                    'starter' => '10 GB',
                                    'professional' => '100 GB',
                                    'business' => '1 TB',
                                    'enterprise' => 'Unlimited'
                                ],
                                [
                                    'icon' => 'chart',
                                    'name' => 'Basic Analytics',
                                    'tooltip' => 'Standard reporting and dashboards',
                                    'starter' => true,
                                    'professional' => true,
                                    'business' => true,
                                    'enterprise' => true
                                ],
                                [
                                    'icon' => 'chart',
                                    'name' => 'Advanced Analytics',
                                    'tooltip' => 'In-depth reporting and data visualization',
                                    'starter' => false,
                                    'professional' => true,
                                    'business' => true,
                                    'enterprise' => true
                                ],
                                [
                                    'icon' => 'cloud',
                                    'name' => 'API Access',
                                    'tooltip' => 'REST API for custom development',
                                    'starter' => false,
                                    'professional' => true,
                                    'business' => true,
                                    'enterprise' => true
                                ]
                            ]
                        ],
                        [
                            'icon' => 'shield',
                            'name' => 'Security & Compliance',
                            'features' => [
                                [
                                    'icon' => 'shield',
                                    'name' => 'SSO Integration',
                                    'tooltip' => 'Single sign-on for enterprise security',
                                    'starter' => false,
                                    'professional' => false,
                                    'business' => true,
                                    'enterprise' => true
                                ],
                                [
                                    'icon' => 'shield',
                                    'name' => 'Data Encryption',
                                    'tooltip' => 'AES-256 encryption for data at rest',
                                    'starter' => true,
                                    'professional' => true,
                                    'business' => true,
                                    'enterprise' => true
                                ],
                                [
                                    'icon' => 'clock',
                                    'name' => 'Audit Logs',
                                    'tooltip' => 'Track all user actions and changes',
                                    'starter' => false,
                                    'professional' => true,
                                    'business' => true,
                                    'enterprise' => true
                                ]
                            ]
                        ],
                        [
                            'icon' => 'support',
                            'name' => 'Support',
                            'features' => [
                                [
                                    'icon' => 'mail',
                                    'name' => 'Email Support',
                                    'tooltip' => 'Support via email tickets',
                                    'starter' => true,
                                    'professional' => true,
                                    'business' => true,
                                    'enterprise' => true
                                ],
                                [
                                    'icon' => 'chat',
                                    'name' => 'Live Chat Support',
                                    'tooltip' => 'Real-time chat support',
                                    'starter' => false,
                                    'professional' => true,
                                    'business' => true,
                                    'enterprise' => true
                                ],
                                [
                                    'icon' => 'phone',
                                    'name' => 'Phone Support',
                                    'tooltip' => 'Dedicated phone support line',
                                    'starter' => false,
                                    'professional' => false,
                                    'business' => true,
                                    'enterprise' => true
                                ],
                                [
                                    'icon' => 'clock',
                                    'name' => 'Support Response Time',
                                    'tooltip' => 'Average time for support ticket response',
                                    'starter' => '48 hours',
                                    'professional' => '24 hours',
                                    'business' => '4 hours',
                                    'enterprise' => '1 hour'
                                ]
                            ]
                        ]
                    ],
                    'ctaText' => 'Ready to get started?',
                    'ctaLink' => '/contact',
                    'ctaButtonText' => 'Start Free Trial',
                    'trialLink' => '/free-trial',
                    'footnote' => '* All prices are in USD and billed monthly. Annual billing options available with 20% discount.'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 271,
                'section_key' => 'featureComparisonTable',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Compare Plans',
                        'backgroundColor' => 'bg-blue-100 dark:bg-blue-900/30',
                        'borderColor' => 'border-blue-200 dark:border-blue-800',
                        'textColor' => 'text-blue-700 dark:text-blue-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Compare',
                        'highlightedText' => 'Plans & Features',
                        'suffix' => '',
                        'highlightGradient' => 'from-blue-600 to-indigo-600'
                    ],
                    'description' => 'Compare features across all our pricing tiers to find the perfect fit for your business.',
                    'plans' => [
                        ['id' => 'starter', 'icon' => 'sparkles', 'name' => 'Starter', 'price' => 49, 'popular' => false],
                        ['id' => 'professional', 'icon' => 'rocket', 'name' => 'Professional', 'price' => 99, 'popular' => true],
                        ['id' => 'business', 'icon' => 'chart', 'name' => 'Business', 'price' => 249, 'popular' => false],
                        ['id' => 'enterprise', 'icon' => 'handshake', 'name' => 'Enterprise', 'price' => 'Custom', 'popular' => false]
                    ],
                    'categories' => [
                        ['id' => 'core', 'icon' => 'cog', 'name' => 'Core'],
                        ['id' => 'security', 'icon' => 'shield', 'name' => 'Security'],
                        ['id' => 'support', 'icon' => 'support', 'name' => 'Support'],
                        ['id' => 'integrations', 'icon' => 'cloud', 'name' => 'Integrations']
                    ],
                    'features' => [
                        [
                            'id' => 'users',
                            'icon' => 'users',
                            'name' => 'User Seats',
                            'description' => 'Number of team members who can access the platform',
                            'category' => 'core',
                            'starter' => 'Up to 5',
                            'professional' => 'Up to 20',
                            'business' => 'Up to 100',
                            'enterprise' => 'Unlimited'
                        ],
                        [
                            'id' => 'storage',
                            'icon' => 'database',
                            'name' => 'Storage',
                            'description' => 'Total storage space for your data',
                            'category' => 'core',
                            'starter' => '10 GB',
                            'professional' => '100 GB',
                            'business' => '1 TB',
                            'enterprise' => 'Unlimited'
                        ],
                        [
                            'id' => 'analytics',
                            'icon' => 'chart',
                            'name' => 'Advanced Analytics',
                            'description' => 'In-depth reporting and data visualization',
                            'category' => 'core',
                            'starter' => false,
                            'professional' => true,
                            'business' => true,
                            'enterprise' => true
                        ],
                        [
                            'id' => 'sso',
                            'icon' => 'shield',
                            'name' => 'SSO Integration',
                            'description' => 'Single sign-on for enterprise security',
                            'category' => 'security',
                            'starter' => false,
                            'professional' => false,
                            'business' => true,
                            'enterprise' => true
                        ],
                        [
                            'id' => 'phone-support',
                            'icon' => 'phone',
                            'name' => 'Phone Support',
                            'description' => 'Dedicated phone support line',
                            'category' => 'support',
                            'starter' => false,
                            'professional' => false,
                            'business' => true,
                            'enterprise' => true
                        ],
                        [
                            'id' => 'api-access',
                            'icon' => 'cloud',
                            'name' => 'API Access',
                            'description' => 'REST API for custom development',
                            'category' => 'integrations',
                            'starter' => false,
                            'professional' => true,
                            'business' => true,
                            'enterprise' => true
                        ],
                        [
                            'id' => 'response-time',
                            'icon' => 'clock',
                            'name' => 'Support Response Time',
                            'description' => 'Average time for support ticket response',
                            'category' => 'support',
                            'starter' => '48 hours',
                            'professional' => '24 hours',
                            'business' => '4 hours',
                            'enterprise' => '1 hour'
                        ],
                        [
                            'id' => 'custom-reports',
                            'icon' => 'chart',
                            'name' => 'Custom Reports',
                            'description' => 'Build custom dashboards and reports',
                            'category' => 'core',
                            'starter' => false,
                            'professional' => false,
                            'business' => true,
                            'enterprise' => true
                        ]
                    ],
                    'ctaText' => 'Ready to get started with the perfect plan?',
                    'ctaLink' => '/contact',
                    'ctaButtonText' => 'Start Free Trial',
                    'trialLink' => '/free-trial',
                    'footnote' => '* All prices are in USD and billed monthly. Annual billing options available with 20% discount.'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 272,
                'section_key' => 'featureComparisonTable',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // FAQ About Pricing Section
            [
                'id' => 273,
                'section_key' => 'faqAboutPricing',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'FAQ',
                        'backgroundColor' => 'bg-blue-100 dark:bg-blue-900/30',
                        'borderColor' => 'border-blue-200 dark:border-blue-800',
                        'textColor' => 'text-blue-700 dark:text-blue-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Frequently Asked',
                        'highlightedText' => 'Questions',
                        'suffix' => 'About Pricing',
                        'highlightGradient' => 'from-blue-600 to-indigo-600'
                    ],
                    'description' => 'Find answers to common questions about our pricing, plans, and billing.',
                    'stats' => [
                        [
                            'icon' => 'clock',
                            'value' => '< 24h',
                            'label' => 'Avg Response Time'
                        ],
                        [
                            'icon' => 'star',
                            'value' => '4.9',
                            'label' => 'Customer Satisfaction'
                        ],
                        [
                            'icon' => 'users',
                            'value' => '10,000+',
                            'label' => 'Happy Customers'
                        ],
                        [
                            'icon' => 'handshake',
                            'value' => '98%',
                            'label' => 'Would Recommend'
                        ]
                    ],
                    'categories' => [
                        ['id' => 'general', 'icon' => 'question', 'name' => 'General'],
                        ['id' => 'billing', 'icon' => 'credit-card', 'name' => 'Billing'],
                        ['id' => 'features', 'icon' => 'sparkles', 'name' => 'Features'],
                        ['id' => 'enterprise', 'icon' => 'building', 'name' => 'Enterprise']
                    ],
                    'faqs' => [
                        [
                            'icon' => 'credit-card',
                            'question' => 'What payment methods do you accept?',
                            'answer' => 'We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers for annual plans. Enterprise customers can also pay by invoice.',
                            'category' => 'billing',
                            'link' => '/payment-methods'
                        ],
                        [
                            'icon' => 'question',
                            'question' => 'Can I change my plan later?',
                            'answer' => 'Yes, you can upgrade, downgrade, or cancel your plan at any time. Changes take effect immediately for upgrades and at the next billing cycle for downgrades.',
                            'category' => 'general',
                            'link' => '/change-plan'
                        ],
                        [
                            'icon' => 'credit-card',
                            'question' => 'Do you offer discounts for annual billing?',
                            'answer' => 'Yes, annual plans come with a 20% discount compared to monthly billing. You\'ll save two months free when you commit to a full year.',
                            'category' => 'billing',
                            'link' => '/annual-pricing'
                        ],
                        [
                            'icon' => 'users',
                            'question' => 'Is there a free trial available?',
                            'answer' => 'Yes, we offer a 14-day free trial on all paid plans. No credit card required. You\'ll have full access to all features during the trial period.',
                            'category' => 'general',
                            'link' => '/free-trial'
                        ],
                        [
                            'icon' => 'shield',
                            'question' => 'What is your refund policy?',
                            'answer' => 'We offer a 30-day money-back guarantee on all annual plans. If you\'re not satisfied, we\'ll refund your full payment - no questions asked.',
                            'category' => 'billing',
                            'link' => '/refund-policy'
                        ],
                        [
                            'icon' => 'building',
                            'question' => 'Do you offer custom enterprise pricing?',
                            'answer' => 'Yes, we offer custom pricing for enterprise customers with specific needs. Contact our sales team for a personalized quote based on your requirements.',
                            'category' => 'enterprise',
                            'link' => '/enterprise'
                        ],
                        [
                            'icon' => 'cog',
                            'question' => 'Can I add custom features to my plan?',
                            'answer' => 'Yes, many features can be added as add-ons to any plan. Contact support to discuss your specific requirements and custom pricing.',
                            'category' => 'features',
                            'link' => '/custom-features'
                        ],
                        [
                            'icon' => 'question',
                            'question' => 'Is there a setup fee?',
                            'answer' => 'No, there are no setup fees for any of our plans. You can start using the platform immediately after signing up.',
                            'category' => 'general'
                        ]
                    ],
                    'contactText' => 'Still have questions? Our team is here to help.',
                    'contactLink' => '/contact',
                    'contactButtonText' => 'Contact Sales',
                    'showGuarantee' => true,
                    'guaranteeText' => '30-day money-back guarantee on all annual plans'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 274,
                'section_key' => 'faqAboutPricing',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'FAQ',
                        'backgroundColor' => 'bg-blue-100 dark:bg-blue-900/30',
                        'borderColor' => 'border-blue-200 dark:border-blue-800',
                        'textColor' => 'text-blue-700 dark:text-blue-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Frequently Asked',
                        'highlightedText' => 'Questions',
                        'suffix' => 'About Pricing',
                        'highlightGradient' => 'from-blue-600 to-indigo-600'
                    ],
                    'description' => 'Find answers to common questions about our pricing, plans, and billing.',
                    'popularQuestions' => [
                        'What payment methods do you accept?',
                        'Can I change my plan later?',
                        'Do you offer discounts for annual billing?',
                        'Is there a free trial available?'
                    ],
                    'categories' => [
                        ['id' => 'general', 'icon' => 'question', 'name' => 'General'],
                        ['id' => 'billing', 'icon' => 'credit-card', 'name' => 'Billing'],
                        ['id' => 'features', 'icon' => 'sparkles', 'name' => 'Features'],
                        ['id' => 'enterprise', 'icon' => 'building', 'name' => 'Enterprise']
                    ],
                    'faqs' => [
                        [
                            'icon' => 'credit-card',
                            'question' => 'What payment methods do you accept?',
                            'answer' => 'We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers for annual plans. Enterprise customers can also pay by invoice.',
                            'category' => 'billing',
                            'tags' => ['payment', 'billing'],
                            'link' => '/payment-methods'
                        ],
                        [
                            'icon' => 'question',
                            'question' => 'Can I change my plan later?',
                            'answer' => 'Yes, you can upgrade, downgrade, or cancel your plan at any time. Changes take effect immediately for upgrades and at the next billing cycle for downgrades.',
                            'category' => 'general',
                            'tags' => ['plan', 'upgrade', 'downgrade'],
                            'link' => '/change-plan'
                        ],
                        [
                            'icon' => 'credit-card',
                            'question' => 'Do you offer discounts for annual billing?',
                            'answer' => 'Yes, annual plans come with a 20% discount compared to monthly billing. You\'ll save two months free when you commit to a full year.',
                            'category' => 'billing',
                            'tags' => ['discount', 'annual', 'savings'],
                            'link' => '/annual-pricing'
                        ],
                        [
                            'icon' => 'users',
                            'question' => 'Is there a free trial available?',
                            'answer' => 'Yes, we offer a 14-day free trial on all paid plans. No credit card required. You\'ll have full access to all features during the trial period.',
                            'category' => 'general',
                            'tags' => ['trial', 'free', 'demo'],
                            'link' => '/free-trial'
                        ],
                        [
                            'icon' => 'shield',
                            'question' => 'What is your refund policy?',
                            'answer' => 'We offer a 30-day money-back guarantee on all annual plans. If you\'re not satisfied, we\'ll refund your full payment - no questions asked.',
                            'category' => 'billing',
                            'tags' => ['refund', 'guarantee', 'money-back'],
                            'link' => '/refund-policy'
                        ],
                        [
                            'icon' => 'building',
                            'question' => 'Do you offer custom enterprise pricing?',
                            'answer' => 'Yes, we offer custom pricing for enterprise customers with specific needs. Contact our sales team for a personalized quote based on your requirements.',
                            'category' => 'enterprise',
                            'tags' => ['enterprise', 'custom', 'quote'],
                            'link' => '/enterprise'
                        ]
                    ],
                    'glossary' => [
                        [
                            'icon' => 'credit-card',
                            'term' => 'Annual Billing',
                            'definition' => 'A payment model where customers pay for a full year of service upfront, typically receiving a discount compared to monthly billing.'
                        ],
                        [
                            'icon' => 'users',
                            'term' => 'Per-Seat Pricing',
                            'definition' => 'A pricing model where you pay based on the number of users or \'seats\' that need access to the platform.'
                        ],
                        [
                            'icon' => 'clock',
                            'term' => 'Usage-Based Pricing',
                            'definition' => 'A flexible pricing model where you pay only for what you use, such as API calls, storage, or transactions.'
                        ],
                        [
                            'icon' => 'handshake',
                            'term' => 'Enterprise Agreement',
                            'definition' => 'A custom contract for large organizations that includes tailored pricing, SLAs, and dedicated support.'
                        ]
                    ],
                    'contactText' => 'Still have questions? Our team is here to help.',
                    'contactLink' => '/contact',
                    'contactButtonText' => 'Contact Sales',
                    'trustText' => 'Trusted by 1,000+ businesses worldwide'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 275,
                'section_key' => 'faqAboutPricing',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'FAQ',
                        'backgroundColor' => 'bg-blue-100 dark:bg-blue-900/30',
                        'borderColor' => 'border-blue-200 dark:border-blue-800',
                        'textColor' => 'text-blue-700 dark:text-blue-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Frequently Asked',
                        'highlightedText' => 'Questions',
                        'suffix' => 'About Pricing',
                        'highlightGradient' => 'from-blue-600 to-indigo-600'
                    ],
                    'description' => 'Find answers to common questions about our pricing, plans, and billing.',
                    'stats' => [
                        ['icon' => 'clock', 'value' => '< 24h', 'label' => 'Avg Response Time'],
                        ['icon' => 'star', 'value' => '4.9', 'label' => 'Customer Satisfaction'],
                        ['icon' => 'users', 'value' => '10,000+', 'label' => 'Happy Customers'],
                        ['icon' => 'handshake', 'value' => '98%', 'label' => 'Would Recommend']
                    ],
                    'categories' => [
                        ['id' => 'general', 'icon' => 'question', 'name' => 'General'],
                        ['id' => 'billing', 'icon' => 'credit-card', 'name' => 'Billing'],
                        ['id' => 'features', 'icon' => 'sparkles', 'name' => 'Features'],
                        ['id' => 'enterprise', 'icon' => 'building', 'name' => 'Enterprise']
                    ],
                    'faqs' => [
                        [
                            'id' => 'payment-methods',
                            'icon' => 'credit-card',
                            'question' => 'What payment methods do you accept?',
                            'answer' => 'We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers for annual plans. Enterprise customers can also pay by invoice.',
                            'category' => 'billing',
                            'tags' => ['payment', 'billing'],
                            'link' => '/payment-methods'
                        ],
                        [
                            'id' => 'change-plan',
                            'icon' => 'cog',
                            'question' => 'Can I change my plan later?',
                            'answer' => 'Yes, you can upgrade, downgrade, or cancel your plan at any time. Changes take effect immediately for upgrades and at the next billing cycle for downgrades.',
                            'category' => 'general',
                            'tags' => ['plan', 'upgrade', 'downgrade'],
                            'link' => '/change-plan'
                        ],
                        [
                            'id' => 'annual-discount',
                            'icon' => 'credit-card',
                            'question' => 'Do you offer discounts for annual billing?',
                            'answer' => 'Yes, annual plans come with a 20% discount compared to monthly billing. You\'ll save two months free when you commit to a full year.',
                            'category' => 'billing',
                            'tags' => ['discount', 'annual', 'savings'],
                            'link' => '/annual-pricing'
                        ],
                        [
                            'id' => 'free-trial',
                            'icon' => 'sparkles',
                            'question' => 'Is there a free trial available?',
                            'answer' => 'Yes, we offer a 14-day free trial on all paid plans. No credit card required. You\'ll have full access to all features during the trial period.',
                            'category' => 'general',
                            'tags' => ['trial', 'free', 'demo'],
                            'link' => '/free-trial'
                        ],
                        [
                            'id' => 'refund-policy',
                            'icon' => 'shield',
                            'question' => 'What is your refund policy?',
                            'answer' => 'We offer a 30-day money-back guarantee on all annual plans. If you\'re not satisfied, we\'ll refund your full payment - no questions asked.',
                            'category' => 'billing',
                            'tags' => ['refund', 'guarantee', 'money-back'],
                            'link' => '/refund-policy'
                        ],
                        [
                            'id' => 'enterprise-pricing',
                            'icon' => 'building',
                            'question' => 'Do you offer custom enterprise pricing?',
                            'answer' => 'Yes, we offer custom pricing for enterprise customers with specific needs. Contact our sales team for a personalized quote based on your requirements.',
                            'category' => 'enterprise',
                            'tags' => ['enterprise', 'custom', 'quote'],
                            'link' => '/enterprise'
                        ]
                    ],
                    'contactText' => 'Can\'t find what you\'re looking for?',
                    'contactLink' => '/contact',
                    'contactButtonText' => 'Contact Support',
                    'showGuarantee' => true,
                    'guaranteeText' => '30-day money-back guarantee on all annual plans'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 276,
                'section_key' => 'faqAboutPricing',
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
