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

                'section_key' => 'starterPlan',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Professional Plan Section
            [

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

                'section_key' => 'professionalPlan',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Enterprise Plan Section
            [

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

                'section_key' => 'enterprisePlan',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Custom Pricing Section
            [
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
                'section_key' => 'customPricing',
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
