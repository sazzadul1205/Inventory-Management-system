<?php

namespace Database\Seeders\PageRelatedSeeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FAQPageSectionVariantSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        // Upsert only this page's variants so other page seeders do not get wiped out.
        $variants = [

            // General Questions Section 
            [
                'id' => 277,
                'section_key' => 'generalQuestions',
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
                        'suffix' => 'Got Questions? We Have Answers',
                        'highlightGradient' => 'from-blue-600 to-indigo-600'
                    ],
                    'description' => 'Find answers to common questions about our platform, features, and services.',
                    'stats' => [
                        [
                            'icon' => 'clock',
                            'value' => '< 24h',
                            'label' => 'Avg Response Time'
                        ],
                        [
                            'icon' => 'star',
                            'value' => '98%',
                            'label' => 'Satisfaction Rate'
                        ],
                        [
                            'icon' => 'users',
                            'value' => '10K+',
                            'label' => 'Active Users'
                        ],
                        [
                            'icon' => 'handshake',
                            'value' => '500+',
                            'label' => 'Enterprise Clients'
                        ]
                    ],
                    'categories' => [
                        [
                            'id' => 'general',
                            'name' => 'General',
                            'icon' => 'sparkles'
                        ],
                        [
                            'id' => 'account',
                            'name' => 'Account',
                            'icon' => 'user'
                        ],
                        [
                            'id' => 'billing',
                            'name' => 'Billing',
                            'icon' => 'credit-card'
                        ],
                        [
                            'id' => 'features',
                            'name' => 'Features',
                            'icon' => 'cog'
                        ]
                    ],
                    'faqs' => [
                        [
                            'question' => 'What is your platform and how does it work?',
                            'answer' => 'Our platform is a comprehensive inventory management solution that helps businesses track, manage, and optimize their inventory across multiple locations. It provides real-time insights, automated reordering, and advanced analytics to streamline your operations.',
                            'category' => 'general',
                            'icon' => 'sparkles',
                            'link' => '/how-it-works'
                        ],
                        [
                            'question' => 'How do I create an account?',
                            'answer' => 'Creating an account is simple! Click the \'Get Started\' button on our homepage, fill in your basic information, verify your email, and you\'re ready to go. The entire process takes less than 5 minutes.',
                            'category' => 'account',
                            'icon' => 'user',
                            'link' => '/signup'
                        ],
                        [
                            'question' => 'What payment methods do you accept?',
                            'answer' => 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for annual plans. For enterprise customers, we also offer invoice-based billing with net-30 terms.',
                            'category' => 'billing',
                            'icon' => 'credit-card',
                            'link' => '/pricing'
                        ],
                        [
                            'question' => 'Can I cancel my subscription at any time?',
                            'answer' => 'Yes, you can cancel your subscription at any time from your account settings. There are no cancellation fees, and you\'ll continue to have access until the end of your billing period.',
                            'category' => 'billing',
                            'icon' => 'credit-card'
                        ],
                        [
                            'question' => 'What kind of support do you offer?',
                            'answer' => 'We offer 24/7 email support for all plans, live chat for Professional and Enterprise plans, and dedicated account managers for Enterprise customers. Our average response time is under 2 hours.',
                            'category' => 'features',
                            'icon' => 'chat',
                            'link' => '/support'
                        ],
                        [
                            'question' => 'Is my data secure?',
                            'answer' => 'Absolutely. We use enterprise-grade encryption (AES-256) for data at rest and TLS 1.3 for data in transit. We are SOC 2 Type II certified and GDPR compliant.',
                            'category' => 'features',
                            'icon' => 'shield',
                            'link' => '/security'
                        ],
                        [
                            'question' => 'Do you offer a free trial?',
                            'answer' => 'Yes, we offer a 14-day free trial on all our paid plans. No credit card is required to start your trial, and you can cancel at any time.',
                            'category' => 'general',
                            'icon' => 'sparkles',
                            'link' => '/free-trial'
                        ],
                        [
                            'question' => 'Can I change my plan later?',
                            'answer' => 'Yes, you can upgrade or downgrade your plan at any time from your account settings. Changes take effect immediately, and we\'ll prorate the difference.',
                            'category' => 'billing',
                            'icon' => 'credit-card'
                        ]
                    ],
                    'contactText' => 'Still have questions? Our team is here to help.',
                    'contactLink' => '/contact',
                    'contactButtonText' => 'Contact Us'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 278,
                'section_key' => 'generalQuestions',
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
                        'suffix' => 'Got Questions? We Have Answers',
                        'highlightGradient' => 'from-blue-600 to-indigo-600'
                    ],
                    'description' => 'Find answers to common questions about our platform, features, and services.',
                    'stats' => [
                        [
                            'icon' => 'clock',
                            'value' => '< 24h',
                            'label' => 'Avg Response Time'
                        ],
                        [
                            'icon' => 'star',
                            'value' => '98%',
                            'label' => 'Satisfaction Rate'
                        ],
                        [
                            'icon' => 'users',
                            'value' => '10K+',
                            'label' => 'Active Users'
                        ],
                        [
                            'icon' => 'handshake',
                            'value' => '500+',
                            'label' => 'Enterprise Clients'
                        ]
                    ],
                    'popularQuestions' => [
                        'How do I create an account?',
                        'What payment methods do you accept?',
                        'Can I cancel my subscription?',
                        'Is my data secure?'
                    ],
                    'categories' => [
                        [
                            'id' => 'general',
                            'name' => 'General',
                            'icon' => 'sparkles'
                        ],
                        [
                            'id' => 'account',
                            'name' => 'Account',
                            'icon' => 'user'
                        ],
                        [
                            'id' => 'billing',
                            'name' => 'Billing',
                            'icon' => 'credit-card'
                        ],
                        [
                            'id' => 'features',
                            'name' => 'Features',
                            'icon' => 'cog'
                        ],
                        [
                            'id' => 'enterprise',
                            'name' => 'Enterprise',
                            'icon' => 'shield'
                        ]
                    ],
                    'faqs' => [
                        [
                            'id' => 1,
                            'question' => 'What is your platform and how does it work?',
                            'answer' => 'Our platform is a comprehensive inventory management solution that helps businesses track, manage, and optimize their inventory across multiple locations. It provides real-time insights, automated reordering, and advanced analytics to streamline your operations.',
                            'category' => 'general',
                            'icon' => 'sparkles',
                            'tags' => ['platform', 'overview'],
                            'link' => '/how-it-works'
                        ],
                        [
                            'id' => 2,
                            'question' => 'How do I create an account?',
                            'answer' => 'Creating an account is simple! Click the \'Get Started\' button on our homepage, fill in your basic information, verify your email, and you\'re ready to go. The entire process takes less than 5 minutes.',
                            'category' => 'account',
                            'icon' => 'user',
                            'tags' => ['signup', 'registration'],
                            'link' => '/signup'
                        ],
                        [
                            'id' => 3,
                            'question' => 'What payment methods do you accept?',
                            'answer' => 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for annual plans. For enterprise customers, we also offer invoice-based billing with net-30 terms.',
                            'category' => 'billing',
                            'icon' => 'credit-card',
                            'tags' => ['payment', 'billing'],
                            'link' => '/pricing'
                        ],
                        [
                            'id' => 4,
                            'question' => 'Can I cancel my subscription at any time?',
                            'answer' => 'Yes, you can cancel your subscription at any time from your account settings. There are no cancellation fees, and you\'ll continue to have access until the end of your billing period.',
                            'category' => 'billing',
                            'icon' => 'credit-card',
                            'tags' => ['cancellation', 'subscription']
                        ],
                        [
                            'id' => 5,
                            'question' => 'What kind of support do you offer?',
                            'answer' => 'We offer 24/7 email support for all plans, live chat for Professional and Enterprise plans, and dedicated account managers for Enterprise customers. Our average response time is under 2 hours.',
                            'category' => 'features',
                            'icon' => 'chat',
                            'tags' => ['support', 'help'],
                            'link' => '/support'
                        ],
                        [
                            'id' => 6,
                            'question' => 'Is my data secure?',
                            'answer' => 'Absolutely. We use enterprise-grade encryption (AES-256) for data at rest and TLS 1.3 for data in transit. We are SOC 2 Type II certified and GDPR compliant.',
                            'category' => 'enterprise',
                            'icon' => 'shield',
                            'tags' => ['security', 'encryption', 'compliance'],
                            'link' => '/security'
                        ],
                        [
                            'id' => 7,
                            'question' => 'Do you offer a free trial?',
                            'answer' => 'Yes, we offer a 14-day free trial on all our paid plans. No credit card is required to start your trial, and you can cancel at any time.',
                            'category' => 'general',
                            'icon' => 'sparkles',
                            'tags' => ['trial', 'free'],
                            'link' => '/free-trial'
                        ],
                        [
                            'id' => 8,
                            'question' => 'Can I change my plan later?',
                            'answer' => 'Yes, you can upgrade or downgrade your plan at any time from your account settings. Changes take effect immediately, and we\'ll prorate the difference.',
                            'category' => 'billing',
                            'icon' => 'credit-card',
                            'tags' => ['upgrade', 'downgrade', 'plan']
                        ]
                    ],
                    'contactText' => 'Still have questions? Our team is here to help.',
                    'contactLink' => '/contact',
                    'contactButtonText' => 'Contact Us'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 279,
                'section_key' => 'generalQuestions',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Knowledge Base',
                        'backgroundColor' => 'bg-blue-100 dark:bg-blue-900/30',
                        'borderColor' => 'border-blue-200 dark:border-blue-800',
                        'textColor' => 'text-blue-700 dark:text-blue-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Frequently Asked',
                        'highlightedText' => 'Questions',
                        'suffix' => 'Find Answers Here',
                        'highlightGradient' => 'from-blue-600 to-indigo-600'
                    ],
                    'description' => 'Browse our knowledge base for answers to common questions about our platform, features, and services.',
                    'stats' => [
                        [
                            'icon' => 'clock',
                            'value' => '< 24h',
                            'label' => 'Avg Response Time'
                        ],
                        [
                            'icon' => 'star',
                            'value' => '98%',
                            'label' => 'Satisfaction Rate'
                        ],
                        [
                            'icon' => 'users',
                            'value' => '10K+',
                            'label' => 'Active Users'
                        ],
                        [
                            'icon' => 'handshake',
                            'value' => '500+',
                            'label' => 'Enterprise Clients'
                        ]
                    ],
                    'popularQuestions' => [
                        'How do I create an account?',
                        'What payment methods do you accept?',
                        'Can I cancel my subscription?',
                        'Is my data secure?'
                    ],
                    'categories' => [
                        [
                            'id' => 'general',
                            'name' => 'General',
                            'description' => 'General questions about our platform',
                            'icon' => 'sparkles',
                            'image' => 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop'
                        ],
                        [
                            'id' => 'account',
                            'name' => 'Account',
                            'description' => 'Account setup and management',
                            'icon' => 'user',
                            'image' => 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=300&fit=crop'
                        ],
                        [
                            'id' => 'billing',
                            'name' => 'Billing',
                            'description' => 'Pricing, payments, and subscriptions',
                            'icon' => 'credit-card',
                            'image' => 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=300&fit=crop'
                        ],
                        [
                            'id' => 'features',
                            'name' => 'Features',
                            'description' => 'Platform features and capabilities',
                            'icon' => 'cog',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop'
                        ],
                        [
                            'id' => 'enterprise',
                            'name' => 'Enterprise',
                            'description' => 'Enterprise-grade solutions',
                            'icon' => 'shield',
                            'image' => 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&h=300&fit=crop'
                        ]
                    ],
                    'faqs' => [
                        [
                            'id' => 1,
                            'question' => 'What is your platform and how does it work?',
                            'answer' => 'Our platform is a comprehensive inventory management solution that helps businesses track, manage, and optimize their inventory across multiple locations. It provides real-time insights, automated reordering, and advanced analytics to streamline your operations.',
                            'category' => 'general',
                            'icon' => 'sparkles',
                            'tags' => ['platform', 'overview', 'how it works'],
                            'link' => '/how-it-works',
                            'updatedAt' => '2024-01-15',
                            'views' => 1250
                        ],
                        [
                            'id' => 2,
                            'question' => 'How do I create an account?',
                            'answer' => 'Creating an account is simple! Click the \'Get Started\' button on our homepage, fill in your basic information, verify your email, and you\'re ready to go. The entire process takes less than 5 minutes.',
                            'category' => 'account',
                            'icon' => 'user',
                            'tags' => ['signup', 'registration', 'account creation'],
                            'link' => '/signup',
                            'updatedAt' => '2024-01-10',
                            'views' => 2100
                        ],
                        [
                            'id' => 3,
                            'question' => 'What payment methods do you accept?',
                            'answer' => 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for annual plans. For enterprise customers, we also offer invoice-based billing with net-30 terms.',
                            'category' => 'billing',
                            'icon' => 'credit-card',
                            'tags' => ['payment', 'billing', 'credit card'],
                            'link' => '/pricing',
                            'updatedAt' => '2024-01-05',
                            'views' => 1850
                        ],
                        [
                            'id' => 4,
                            'question' => 'Can I cancel my subscription at any time?',
                            'answer' => 'Yes, you can cancel your subscription at any time from your account settings. There are no cancellation fees, and you\'ll continue to have access until the end of your billing period.',
                            'category' => 'billing',
                            'icon' => 'credit-card',
                            'tags' => ['cancellation', 'subscription', 'refund'],
                            'updatedAt' => '2024-01-08',
                            'views' => 950
                        ],
                        [
                            'id' => 5,
                            'question' => 'What kind of support do you offer?',
                            'answer' => 'We offer 24/7 email support for all plans, live chat for Professional and Enterprise plans, and dedicated account managers for Enterprise customers. Our average response time is under 2 hours.',
                            'category' => 'features',
                            'icon' => 'chat',
                            'tags' => ['support', 'help', 'customer service'],
                            'link' => '/support',
                            'updatedAt' => '2024-01-12',
                            'views' => 780
                        ],
                        [
                            'id' => 6,
                            'question' => 'Is my data secure?',
                            'answer' => 'Absolutely. We use enterprise-grade encryption (AES-256) for data at rest and TLS 1.3 for data in transit. We are SOC 2 Type II certified and GDPR compliant.',
                            'category' => 'enterprise',
                            'icon' => 'shield',
                            'tags' => ['security', 'encryption', 'compliance', 'GDPR'],
                            'link' => '/security',
                            'updatedAt' => '2024-01-18',
                            'views' => 3200
                        ],
                        [
                            'id' => 7,
                            'question' => 'Do you offer a free trial?',
                            'answer' => 'Yes, we offer a 14-day free trial on all our paid plans. No credit card is required to start your trial, and you can cancel at any time.',
                            'category' => 'general',
                            'icon' => 'sparkles',
                            'tags' => ['trial', 'free', 'demo'],
                            'link' => '/free-trial',
                            'updatedAt' => '2024-01-03',
                            'views' => 1650
                        ],
                        [
                            'id' => 8,
                            'question' => 'Can I change my plan later?',
                            'answer' => 'Yes, you can upgrade or downgrade your plan at any time from your account settings. Changes take effect immediately, and we\'ll prorate the difference.',
                            'category' => 'billing',
                            'icon' => 'credit-card',
                            'tags' => ['upgrade', 'downgrade', 'plan change'],
                            'updatedAt' => '2024-01-07',
                            'views' => 620
                        ],
                        [
                            'id' => 9,
                            'question' => 'Do you offer API access?',
                            'answer' => 'Yes, we offer a comprehensive REST API for all plans. Professional and Enterprise plans include full API access with higher rate limits and dedicated support.',
                            'category' => 'features',
                            'icon' => 'cog',
                            'tags' => ['API', 'integration', 'developer'],
                            'link' => '/api-docs',
                            'updatedAt' => '2024-01-14',
                            'views' => 890
                        ],
                        [
                            'id' => 10,
                            'question' => 'What is your uptime guarantee?',
                            'answer' => 'We offer a 99.9% uptime SLA for all paid plans. If we fall below this threshold, you\'re eligible for service credits as outlined in our SLA.',
                            'category' => 'enterprise',
                            'icon' => 'shield',
                            'tags' => ['uptime', 'SLA', 'reliability'],
                            'link' => '/sla',
                            'updatedAt' => '2024-01-16',
                            'views' => 430
                        ]
                    ],
                    'heroImage' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=400&fit=crop',
                    'contactImage' => 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop',
                    'contactText' => 'Still have questions? Our team is here to help.',
                    'contactLink' => '/contact',
                    'contactButtonText' => 'Contact Us'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 280,
                'section_key' => 'generalQuestions',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Billing & Pricing Section 
            [
                'id' => 281,
                'section_key' => 'billingPricing',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Billing & Pricing',
                        'backgroundColor' => 'bg-blue-100 dark:bg-blue-900/30',
                        'borderColor' => 'border-blue-200 dark:border-blue-800',
                        'textColor' => 'text-blue-700 dark:text-blue-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Billing &',
                        'highlightedText' => 'Pricing',
                        'suffix' => 'FAQ',
                        'highlightGradient' => 'from-blue-600 to-indigo-600'
                    ],
                    'description' => 'Find answers to common questions about our pricing plans, billing policies, and payment options.',
                    'stats' => [
                        [
                            'icon' => 'clock',
                            'value' => '< 24h',
                            'label' => 'Avg Response Time'
                        ],
                        [
                            'icon' => 'star',
                            'value' => '98%',
                            'label' => 'Satisfaction Rate'
                        ],
                        [
                            'icon' => 'users',
                            'value' => '10K+',
                            'label' => 'Active Customers'
                        ],
                        [
                            'icon' => 'handshake',
                            'value' => '500+',
                            'label' => 'Enterprise Clients'
                        ]
                    ],
                    'categories' => [
                        [
                            'id' => 'pricing',
                            'name' => 'Pricing Plans',
                            'icon' => 'dollar'
                        ],
                        [
                            'id' => 'billing',
                            'name' => 'Billing',
                            'icon' => 'credit-card'
                        ],
                        [
                            'id' => 'payment',
                            'name' => 'Payment',
                            'icon' => 'cash'
                        ],
                        [
                            'id' => 'invoicing',
                            'name' => 'Invoicing',
                            'icon' => 'receipt'
                        ]
                    ],
                    'faqs' => [
                        [
                            'question' => 'What pricing plans do you offer?',
                            'answer' => 'We offer four pricing tiers: Starter ($29/month), Professional ($99/month), Business ($299/month), and Enterprise (custom pricing). Each plan includes different feature sets and support levels. You can compare all plans on our pricing page.',
                            'category' => 'pricing',
                            'icon' => 'dollar',
                            'link' => '/pricing'
                        ],
                        [
                            'question' => 'Do you offer annual billing?',
                            'answer' => 'Yes, we offer annual billing with a 20% discount compared to monthly billing. Annual plans are available for all paid tiers. You can switch between monthly and annual billing at any time.',
                            'category' => 'billing',
                            'icon' => 'calendar',
                            'link' => '/pricing'
                        ],
                        [
                            'question' => 'What payment methods do you accept?',
                            'answer' => 'We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, and bank transfers for annual plans. Enterprise customers can also request invoice-based billing with net-30 terms.',
                            'category' => 'payment',
                            'icon' => 'credit-card'
                        ],
                        [
                            'question' => 'Can I cancel my subscription at any time?',
                            'answer' => 'Yes, you can cancel your subscription at any time from your account settings. There are no cancellation fees, and you\'ll continue to have access until the end of your billing period.',
                            'category' => 'billing',
                            'icon' => 'credit-card'
                        ],
                        [
                            'question' => 'Do you offer refunds?',
                            'answer' => 'We offer a 30-day money-back guarantee on all annual plans. For monthly plans, you can cancel anytime and won\'t be charged for the next billing cycle. Contact our support team for refund requests.',
                            'category' => 'billing',
                            'icon' => 'cash'
                        ],
                        [
                            'question' => 'How do I update my billing information?',
                            'answer' => 'You can update your billing information at any time from the Billing section in your account settings. This includes payment methods, billing address, and tax information.',
                            'category' => 'billing',
                            'icon' => 'credit-card'
                        ],
                        [
                            'question' => 'Do you offer custom pricing for enterprise?',
                            'answer' => 'Yes, we offer custom pricing for enterprise customers with specific needs. Contact our sales team to discuss volume discounts, custom features, and dedicated support options.',
                            'category' => 'pricing',
                            'icon' => 'handshake',
                            'link' => '/contact'
                        ],
                        [
                            'question' => 'How do I get an invoice?',
                            'answer' => 'Invoices are automatically generated and sent to your billing email after each successful payment. You can also download past invoices from the Billing section in your account settings.',
                            'category' => 'invoicing',
                            'icon' => 'receipt'
                        ],
                        [
                            'question' => 'Do you charge any hidden fees?',
                            'answer' => 'No, we believe in transparent pricing. The price you see is the price you pay. There are no setup fees, hidden charges, or surprise costs. Any applicable taxes will be clearly shown at checkout.',
                            'category' => 'pricing',
                            'icon' => 'badge-check'
                        ],
                        [
                            'question' => 'Can I upgrade or downgrade my plan?',
                            'answer' => 'Yes, you can change your plan at any time from your account settings. When upgrading, the new price is prorated for the remaining billing period. When downgrading, the new price takes effect at the next billing cycle.',
                            'category' => 'billing',
                            'icon' => 'arrow-right'
                        ]
                    ],
                    'contactText' => 'Still have questions about billing? Our team is here to help.',
                    'contactLink' => '/contact',
                    'contactButtonText' => 'Contact Billing Support',
                    'showGuarantee' => true,
                    'guaranteeText' => '30-day money-back guarantee on all annual plans'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 282,
                'section_key' => 'billingPricing',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Billing & Pricing',
                        'backgroundColor' => 'bg-blue-100 dark:bg-blue-900/30',
                        'borderColor' => 'border-blue-200 dark:border-blue-800',
                        'textColor' => 'text-blue-700 dark:text-blue-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Billing &',
                        'highlightedText' => 'Pricing',
                        'suffix' => 'FAQ',
                        'highlightGradient' => 'from-blue-600 to-indigo-600'
                    ],
                    'description' => 'Find answers to common questions about our pricing plans, billing policies, and payment options.',
                    'stats' => [
                        [
                            'icon' => 'clock',
                            'value' => '< 24h',
                            'label' => 'Avg Response Time'
                        ],
                        [
                            'icon' => 'star',
                            'value' => '98%',
                            'label' => 'Satisfaction Rate'
                        ],
                        [
                            'icon' => 'users',
                            'value' => '10K+',
                            'label' => 'Active Customers'
                        ],
                        [
                            'icon' => 'handshake',
                            'value' => '500+',
                            'label' => 'Enterprise Clients'
                        ]
                    ],
                    'popularQuestions' => [
                        'What payment methods do you accept?',
                        'Can I cancel my subscription?',
                        'Do you offer refunds?',
                        'How do I update my billing information?'
                    ],
                    'categories' => [
                        [
                            'id' => 'pricing',
                            'name' => 'Pricing Plans',
                            'icon' => 'dollar'
                        ],
                        [
                            'id' => 'billing',
                            'name' => 'Billing',
                            'icon' => 'credit-card'
                        ],
                        [
                            'id' => 'payment',
                            'name' => 'Payment Methods',
                            'icon' => 'cash'
                        ],
                        [
                            'id' => 'invoicing',
                            'name' => 'Invoicing',
                            'icon' => 'receipt'
                        ]
                    ],
                    'faqs' => [
                        [
                            'id' => 1,
                            'question' => 'What pricing plans do you offer?',
                            'answer' => 'We offer four pricing tiers: Starter ($29/month), Professional ($99/month), Business ($299/month), and Enterprise (custom pricing). Each plan includes different feature sets and support levels. You can compare all plans on our pricing page.',
                            'category' => 'pricing',
                            'icon' => 'dollar',
                            'tags' => ['plans', 'tiers', 'pricing'],
                            'link' => '/pricing'
                        ],
                        [
                            'id' => 2,
                            'question' => 'Do you offer annual billing?',
                            'answer' => 'Yes, we offer annual billing with a 20% discount compared to monthly billing. Annual plans are available for all paid tiers. You can switch between monthly and annual billing at any time.',
                            'category' => 'billing',
                            'icon' => 'calendar',
                            'tags' => ['annual', 'discount', 'billing cycle'],
                            'link' => '/pricing'
                        ],
                        [
                            'id' => 3,
                            'question' => 'What payment methods do you accept?',
                            'answer' => 'We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, and bank transfers for annual plans. Enterprise customers can also request invoice-based billing with net-30 terms.',
                            'category' => 'payment',
                            'icon' => 'credit-card',
                            'tags' => ['payment', 'credit card', 'paypal', 'bank transfer']
                        ],
                        [
                            'id' => 4,
                            'question' => 'Can I cancel my subscription at any time?',
                            'answer' => 'Yes, you can cancel your subscription at any time from your account settings. There are no cancellation fees, and you\'ll continue to have access until the end of your billing period.',
                            'category' => 'billing',
                            'icon' => 'credit-card',
                            'tags' => ['cancellation', 'subscription', 'refund']
                        ],
                        [
                            'id' => 5,
                            'question' => 'Do you offer refunds?',
                            'answer' => 'We offer a 30-day money-back guarantee on all annual plans. For monthly plans, you can cancel anytime and won\'t be charged for the next billing cycle. Contact our support team for refund requests.',
                            'category' => 'billing',
                            'icon' => 'cash',
                            'tags' => ['refund', 'money-back', 'guarantee']
                        ],
                        [
                            'id' => 6,
                            'question' => 'How do I update my billing information?',
                            'answer' => 'You can update your billing information at any time from the Billing section in your account settings. This includes payment methods, billing address, and tax information.',
                            'category' => 'billing',
                            'icon' => 'credit-card',
                            'tags' => ['update', 'billing info', 'payment method']
                        ],
                        [
                            'id' => 7,
                            'question' => 'Do you offer custom pricing for enterprise?',
                            'answer' => 'Yes, we offer custom pricing for enterprise customers with specific needs. Contact our sales team to discuss volume discounts, custom features, and dedicated support options.',
                            'category' => 'pricing',
                            'icon' => 'handshake',
                            'tags' => ['enterprise', 'custom', 'volume discount'],
                            'link' => '/contact'
                        ],
                        [
                            'id' => 8,
                            'question' => 'How do I get an invoice?',
                            'answer' => 'Invoices are automatically generated and sent to your billing email after each successful payment. You can also download past invoices from the Billing section in your account settings.',
                            'category' => 'invoicing',
                            'icon' => 'receipt',
                            'tags' => ['invoice', 'receipt', 'billing history']
                        ],
                        [
                            'id' => 9,
                            'question' => 'Do you charge any hidden fees?',
                            'answer' => 'No, we believe in transparent pricing. The price you see is the price you pay. There are no setup fees, hidden charges, or surprise costs. Any applicable taxes will be clearly shown at checkout.',
                            'category' => 'pricing',
                            'icon' => 'badge-check',
                            'tags' => ['fees', 'hidden fees', 'transparent pricing']
                        ],
                        [
                            'id' => 10,
                            'question' => 'Can I upgrade or downgrade my plan?',
                            'answer' => 'Yes, you can change your plan at any time from your account settings. When upgrading, the new price is prorated for the remaining billing period. When downgrading, the new price takes effect at the next billing cycle.',
                            'category' => 'billing',
                            'icon' => 'arrow-right',
                            'tags' => ['upgrade', 'downgrade', 'plan change']
                        ]
                    ],
                    'contactText' => 'Still have billing questions? Our team is here to help.',
                    'contactLink' => '/contact',
                    'contactButtonText' => 'Contact Billing Support',
                    'showGuarantee' => true,
                    'guaranteeText' => '30-day money-back guarantee on all annual plans'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 283,
                'section_key' => 'billingPricing',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Help Center',
                        'backgroundColor' => 'bg-blue-100 dark:bg-blue-900/30',
                        'borderColor' => 'border-blue-200 dark:border-blue-800',
                        'textColor' => 'text-blue-700 dark:text-blue-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Billing &',
                        'highlightedText' => 'Pricing',
                        'suffix' => 'Help Center',
                        'highlightGradient' => 'from-blue-600 to-indigo-600'
                    ],
                    'description' => 'Find answers to common questions about our pricing plans, billing policies, and payment options. Use our price calculator to estimate your monthly cost.',
                    'stats' => [
                        [
                            'icon' => 'clock',
                            'value' => '< 24h',
                            'label' => 'Avg Response Time'
                        ],
                        [
                            'icon' => 'star',
                            'value' => '98%',
                            'label' => 'Satisfaction Rate'
                        ],
                        [
                            'icon' => 'users',
                            'value' => '10K+',
                            'label' => 'Active Customers'
                        ],
                        [
                            'icon' => 'handshake',
                            'value' => '500+',
                            'label' => 'Enterprise Clients'
                        ]
                    ],
                    'popularQuestions' => [
                        'What payment methods do you accept?',
                        'Can I cancel my subscription?',
                        'Do you offer refunds?',
                        'How do I update my billing information?'
                    ],
                    'categories' => [
                        [
                            'id' => 'pricing',
                            'name' => 'Pricing Plans',
                            'icon' => 'dollar',
                            'image' => 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop'
                        ],
                        [
                            'id' => 'billing',
                            'name' => 'Billing',
                            'icon' => 'credit-card',
                            'image' => 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop'
                        ],
                        [
                            'id' => 'payment',
                            'name' => 'Payment Methods',
                            'icon' => 'cash',
                            'image' => 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=400&h=300&fit=crop'
                        ],
                        [
                            'id' => 'invoicing',
                            'name' => 'Invoicing',
                            'icon' => 'receipt',
                            'image' => 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=300&fit=crop'
                        ]
                    ],
                    'faqs' => [
                        [
                            'id' => 1,
                            'question' => 'What pricing plans do you offer?',
                            'answer' => 'We offer four pricing tiers: Starter ($29/month), Professional ($99/month), Business ($299/month), and Enterprise (custom pricing). Each plan includes different feature sets and support levels. You can compare all plans on our pricing page.',
                            'category' => 'pricing',
                            'icon' => 'dollar',
                            'tags' => ['plans', 'tiers', 'pricing'],
                            'link' => '/pricing',
                            'updatedAt' => '2024-01-15',
                            'views' => 1250
                        ],
                        [
                            'id' => 2,
                            'question' => 'Do you offer annual billing?',
                            'answer' => 'Yes, we offer annual billing with a 20% discount compared to monthly billing. Annual plans are available for all paid tiers. You can switch between monthly and annual billing at any time.',
                            'category' => 'billing',
                            'icon' => 'calendar',
                            'tags' => ['annual', 'discount', 'billing cycle'],
                            'link' => '/pricing',
                            'updatedAt' => '2024-01-10',
                            'views' => 980
                        ],
                        [
                            'id' => 3,
                            'question' => 'What payment methods do you accept?',
                            'answer' => 'We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, and bank transfers for annual plans. Enterprise customers can also request invoice-based billing with net-30 terms.',
                            'category' => 'payment',
                            'icon' => 'credit-card',
                            'tags' => ['payment', 'credit card', 'paypal', 'bank transfer'],
                            'updatedAt' => '2024-01-08',
                            'views' => 2100
                        ],
                        [
                            'id' => 4,
                            'question' => 'Can I cancel my subscription at any time?',
                            'answer' => 'Yes, you can cancel your subscription at any time from your account settings. There are no cancellation fees, and you\'ll continue to have access until the end of your billing period.',
                            'category' => 'billing',
                            'icon' => 'credit-card',
                            'tags' => ['cancellation', 'subscription', 'refund'],
                            'updatedAt' => '2024-01-12',
                            'views' => 1850
                        ],
                        [
                            'id' => 5,
                            'question' => 'Do you offer refunds?',
                            'answer' => 'We offer a 30-day money-back guarantee on all annual plans. For monthly plans, you can cancel anytime and won\'t be charged for the next billing cycle. Contact our support team for refund requests.',
                            'category' => 'billing',
                            'icon' => 'cash',
                            'tags' => ['refund', 'money-back', 'guarantee'],
                            'updatedAt' => '2024-01-05',
                            'views' => 1560
                        ],
                        [
                            'id' => 6,
                            'question' => 'How do I update my billing information?',
                            'answer' => 'You can update your billing information at any time from the Billing section in your account settings. This includes payment methods, billing address, and tax information.',
                            'category' => 'billing',
                            'icon' => 'credit-card',
                            'tags' => ['update', 'billing info', 'payment method'],
                            'updatedAt' => '2024-01-14',
                            'views' => 720
                        ],
                        [
                            'id' => 7,
                            'question' => 'Do you offer custom pricing for enterprise?',
                            'answer' => 'Yes, we offer custom pricing for enterprise customers with specific needs. Contact our sales team to discuss volume discounts, custom features, and dedicated support options.',
                            'category' => 'pricing',
                            'icon' => 'handshake',
                            'tags' => ['enterprise', 'custom', 'volume discount'],
                            'link' => '/contact',
                            'updatedAt' => '2024-01-18',
                            'views' => 890
                        ],
                        [
                            'id' => 8,
                            'question' => 'How do I get an invoice?',
                            'answer' => 'Invoices are automatically generated and sent to your billing email after each successful payment. You can also download past invoices from the Billing section in your account settings.',
                            'category' => 'invoicing',
                            'icon' => 'receipt',
                            'tags' => ['invoice', 'receipt', 'billing history'],
                            'updatedAt' => '2024-01-07',
                            'views' => 540
                        ],
                        [
                            'id' => 9,
                            'question' => 'Do you charge any hidden fees?',
                            'answer' => 'No, we believe in transparent pricing. The price you see is the price you pay. There are no setup fees, hidden charges, or surprise costs. Any applicable taxes will be clearly shown at checkout.',
                            'category' => 'pricing',
                            'icon' => 'badge-check',
                            'tags' => ['fees', 'hidden fees', 'transparent pricing'],
                            'updatedAt' => '2024-01-03',
                            'views' => 1120
                        ],
                        [
                            'id' => 10,
                            'question' => 'Can I upgrade or downgrade my plan?',
                            'answer' => 'Yes, you can change your plan at any time from your account settings. When upgrading, the new price is prorated for the remaining billing period. When downgrading, the new price takes effect at the next billing cycle.',
                            'category' => 'billing',
                            'icon' => 'arrow-right',
                            'tags' => ['upgrade', 'downgrade', 'plan change'],
                            'updatedAt' => '2024-01-16',
                            'views' => 680
                        ]
                    ],
                    'heroImage' => 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=400&fit=crop',
                    'contactImage' => 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
                    'contactText' => 'Still have billing questions? Our team is here to help.',
                    'contactLink' => '/contact',
                    'contactButtonText' => 'Contact Billing Support',
                    'showGuarantee' => true,
                    'guaranteeText' => '30-day money-back guarantee on all annual plans',
                    'priceCalculator' => [
                        'enabled' => true,
                        'plans' => [
                            ['name' => 'Starter', 'price' => 29],
                            ['name' => 'Professional', 'price' => 99],
                            ['name' => 'Business', 'price' => 299]
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 284,
                'section_key' => 'billingPricing',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Technical Support Section
            [
                'id' => 285,
                'section_key' => 'technicalSupport',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Technical Support',
                        'backgroundColor' => 'bg-blue-100 dark:bg-blue-900/30',
                        'borderColor' => 'border-blue-200 dark:border-blue-800',
                        'textColor' => 'text-blue-700 dark:text-blue-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Technical',
                        'highlightedText' => 'Support',
                        'suffix' => 'FAQ',
                        'highlightGradient' => 'from-blue-600 to-indigo-600'
                    ],
                    'description' => 'Find answers to common technical questions about API, integrations, troubleshooting, and security.',
                    'stats' => [
                        [
                            'icon' => 'clock',
                            'value' => '< 2h',
                            'label' => 'Avg Response Time'
                        ],
                        [
                            'icon' => 'star',
                            'value' => '99%',
                            'label' => 'Satisfaction Rate'
                        ],
                        [
                            'icon' => 'server',
                            'value' => '99.9%',
                            'label' => 'Uptime SLA'
                        ],
                        [
                            'icon' => 'users',
                            'value' => '24/7',
                            'label' => 'Support Availability'
                        ]
                    ],
                    'categories' => [
                        [
                            'id' => 'api',
                            'name' => 'API',
                            'icon' => 'code'
                        ],
                        [
                            'id' => 'integration',
                            'name' => 'Integration',
                            'icon' => 'switch'
                        ],
                        [
                            'id' => 'troubleshooting',
                            'name' => 'Troubleshooting',
                            'icon' => 'wrench'
                        ],
                        [
                            'id' => 'security',
                            'name' => 'Security',
                            'icon' => 'lock'
                        ]
                    ],
                    'faqs' => [
                        [
                            'id' => 1,
                            'question' => 'How do I get API access?',
                            'answer' => 'API access is available on all paid plans. To get your API key, go to Settings > API Keys in your dashboard. You can generate multiple keys with different permission levels. For security, we recommend rotating keys regularly.',
                            'category' => 'api',
                            'icon' => 'code',
                            'tags' => ['API', 'keys', 'authentication'],
                            'link' => '/docs/api'
                        ],
                        [
                            'id' => 2,
                            'question' => 'What rate limits does your API have?',
                            'answer' => 'Our API rate limits vary by plan: Starter (100 requests/minute), Professional (500 requests/minute), Business (2,000 requests/minute), and Enterprise (custom limits). Rate limit headers are included in all API responses.',
                            'category' => 'api',
                            'icon' => 'code',
                            'tags' => ['API', 'rate limits', 'performance'],
                            'link' => '/docs/api-rate-limits'
                        ],
                        [
                            'id' => 3,
                            'question' => 'How do I integrate with third-party apps?',
                            'answer' => 'We offer pre-built integrations with popular platforms including Shopify, WooCommerce, Salesforce, HubSpot, and Zapier. You can find the integration settings in your dashboard under Integrations. Custom integrations are also available via our webhook system.',
                            'category' => 'integration',
                            'icon' => 'switch',
                            'tags' => ['integration', 'third-party', 'webhooks'],
                            'link' => '/integrations'
                        ],
                        [
                            'id' => 4,
                            'question' => 'Why is my data not syncing?',
                            'answer' => 'Data sync issues can often be resolved by checking your API key permissions, verifying webhook configurations, or checking the connection status in your integration settings. If the issue persists, contact support with your integration details and timestamps.',
                            'category' => 'troubleshooting',
                            'icon' => 'wrench',
                            'tags' => ['sync', 'data', 'troubleshooting']
                        ],
                        [
                            'id' => 5,
                            'question' => 'Is my data encrypted?',
                            'answer' => 'Yes, all data is encrypted at rest using AES-256 and in transit using TLS 1.3. We are SOC 2 Type II certified and undergo regular security audits. For additional security, we offer SSO and IP whitelisting on Enterprise plans.',
                            'category' => 'security',
                            'icon' => 'lock',
                            'tags' => ['encryption', 'security', 'compliance'],
                            'link' => '/security'
                        ],
                        [
                            'id' => 6,
                            'question' => 'How do I set up webhooks?',
                            'answer' => 'You can configure webhooks in your dashboard under Settings > Webhooks. Enter the endpoint URL, select the events you want to receive, and save. We\'ll send a test event to verify the connection. Webhook logs are available for debugging.',
                            'category' => 'api',
                            'icon' => 'code',
                            'tags' => ['webhooks', 'events', 'notifications'],
                            'link' => '/docs/webhooks'
                        ],
                        [
                            'id' => 7,
                            'question' => 'What should I do if I encounter an error?',
                            'answer' => 'First, check the error message and status code in the response. Common errors include rate limiting (429), authentication issues (401), and validation errors (422). Check our API documentation for error handling best practices.',
                            'category' => 'troubleshooting',
                            'icon' => 'wrench',
                            'tags' => ['error', 'debugging', 'API'],
                            'link' => '/docs/error-handling'
                        ],
                        [
                            'id' => 8,
                            'question' => 'Do you support single sign-on (SSO)?',
                            'answer' => 'Yes, SSO is available on our Enterprise plan. We support SAML 2.0 and OIDC providers including Okta, Azure AD, Google Workspace, and OneLogin. Contact our sales team to enable SSO for your organization.',
                            'category' => 'security',
                            'icon' => 'lock',
                            'tags' => ['SSO', 'authentication', 'SAML'],
                            'link' => '/enterprise/sso'
                        ],
                        [
                            'id' => 9,
                            'question' => 'How do I migrate from another platform?',
                            'answer' => 'We provide migration tools and documentation for importing data from major platforms. You can use our CSV importer, REST API, or schedule a migration consultation with our technical team. We offer free migration support for Enterprise customers.',
                            'category' => 'troubleshooting',
                            'icon' => 'database',
                            'tags' => ['migration', 'import', 'data transfer'],
                            'link' => '/migration'
                        ],
                        [
                            'id' => 10,
                            'question' => 'What is your system status and uptime guarantee?',
                            'answer' => 'We maintain a 99.9% uptime SLA for all paid plans. You can check real-time system status at status.yourdomain.com. We post incident reports and maintenance schedules there. For SLA credits, contact support with your plan details.',
                            'category' => 'api',
                            'icon' => 'server',
                            'tags' => ['uptime', 'SLA', 'status'],
                            'link' => '/status'
                        ]
                    ],
                    'contactText' => 'Need technical assistance? Our support team is here to help.',
                    'contactLink' => '/contact',
                    'contactButtonText' => 'Contact Support',
                    'showSla' => true,
                    'slaText' => 'Enterprise plans include 24/7 priority support with 1-hour response time'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 286,
                'section_key' => 'technicalSupport',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Technical Support',
                        'backgroundColor' => 'bg-blue-100 dark:bg-blue-900/30',
                        'borderColor' => 'border-blue-200 dark:border-blue-800',
                        'textColor' => 'text-blue-700 dark:text-blue-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Technical',
                        'highlightedText' => 'Support',
                        'suffix' => 'Help Center',
                        'highlightGradient' => 'from-blue-600 to-indigo-600'
                    ],
                    'description' => 'Find answers to common technical questions about API, integrations, troubleshooting, and security.',
                    'stats' => [
                        [
                            'icon' => 'clock',
                            'value' => '< 2h',
                            'label' => 'Avg Response Time'
                        ],
                        [
                            'icon' => 'star',
                            'value' => '99%',
                            'label' => 'Satisfaction Rate'
                        ],
                        [
                            'icon' => 'server',
                            'value' => '99.9%',
                            'label' => 'Uptime SLA'
                        ],
                        [
                            'icon' => 'users',
                            'value' => '24/7',
                            'label' => 'Support Availability'
                        ]
                    ],
                    'popularQuestions' => [
                        'How do I get API access?',
                        'Why is my data not syncing?',
                        'What are your rate limits?',
                        'How do I set up webhooks?'
                    ],
                    'categories' => [
                        [
                            'id' => 'api',
                            'name' => 'API',
                            'icon' => 'code'
                        ],
                        [
                            'id' => 'integration',
                            'name' => 'Integration',
                            'icon' => 'switch'
                        ],
                        [
                            'id' => 'troubleshooting',
                            'name' => 'Troubleshooting',
                            'icon' => 'wrench'
                        ],
                        [
                            'id' => 'security',
                            'name' => 'Security',
                            'icon' => 'lock'
                        ]
                    ],
                    'faqs' => [
                        [
                            'id' => 1,
                            'question' => 'How do I get API access?',
                            'answer' => 'API access is available on all paid plans. To get your API key, go to Settings > API Keys in your dashboard. You can generate multiple keys with different permission levels. For security, we recommend rotating keys regularly.',
                            'category' => 'api',
                            'icon' => 'code',
                            'tags' => ['API', 'keys', 'authentication'],
                            'link' => '/docs/api'
                        ],
                        [
                            'id' => 2,
                            'question' => 'What rate limits does your API have?',
                            'answer' => 'Our API rate limits vary by plan: Starter (100 requests/minute), Professional (500 requests/minute), Business (2,000 requests/minute), and Enterprise (custom limits). Rate limit headers are included in all API responses.',
                            'category' => 'api',
                            'icon' => 'code',
                            'tags' => ['API', 'rate limits', 'performance'],
                            'link' => '/docs/api-rate-limits'
                        ],
                        [
                            'id' => 3,
                            'question' => 'How do I integrate with third-party apps?',
                            'answer' => 'We offer pre-built integrations with popular platforms including Shopify, WooCommerce, Salesforce, HubSpot, and Zapier. You can find the integration settings in your dashboard under Integrations. Custom integrations are also available via our webhook system.',
                            'category' => 'integration',
                            'icon' => 'switch',
                            'tags' => ['integration', 'third-party', 'webhooks'],
                            'link' => '/integrations'
                        ],
                        [
                            'id' => 4,
                            'question' => 'Why is my data not syncing?',
                            'answer' => 'Data sync issues can often be resolved by checking your API key permissions, verifying webhook configurations, or checking the connection status in your integration settings. If the issue persists, contact support with your integration details and timestamps.',
                            'category' => 'troubleshooting',
                            'icon' => 'wrench',
                            'tags' => ['sync', 'data', 'troubleshooting']
                        ],
                        [
                            'id' => 5,
                            'question' => 'Is my data encrypted?',
                            'answer' => 'Yes, all data is encrypted at rest using AES-256 and in transit using TLS 1.3. We are SOC 2 Type II certified and undergo regular security audits. For additional security, we offer SSO and IP whitelisting on Enterprise plans.',
                            'category' => 'security',
                            'icon' => 'lock',
                            'tags' => ['encryption', 'security', 'compliance'],
                            'link' => '/security'
                        ],
                        [
                            'id' => 6,
                            'question' => 'How do I set up webhooks?',
                            'answer' => 'You can configure webhooks in your dashboard under Settings > Webhooks. Enter the endpoint URL, select the events you want to receive, and save. We\'ll send a test event to verify the connection. Webhook logs are available for debugging.',
                            'category' => 'api',
                            'icon' => 'code',
                            'tags' => ['webhooks', 'events', 'notifications'],
                            'link' => '/docs/webhooks'
                        ],
                        [
                            'id' => 7,
                            'question' => 'What should I do if I encounter an error?',
                            'answer' => 'First, check the error message and status code in the response. Common errors include rate limiting (429), authentication issues (401), and validation errors (422). Check our API documentation for error handling best practices.',
                            'category' => 'troubleshooting',
                            'icon' => 'wrench',
                            'tags' => ['error', 'debugging', 'API'],
                            'link' => '/docs/error-handling'
                        ],
                        [
                            'id' => 8,
                            'question' => 'Do you support single sign-on (SSO)?',
                            'answer' => 'Yes, SSO is available on our Enterprise plan. We support SAML 2.0 and OIDC providers including Okta, Azure AD, Google Workspace, and OneLogin. Contact our sales team to enable SSO for your organization.',
                            'category' => 'security',
                            'icon' => 'lock',
                            'tags' => ['SSO', 'authentication', 'SAML'],
                            'link' => '/enterprise/sso'
                        ],
                        [
                            'id' => 9,
                            'question' => 'How do I migrate from another platform?',
                            'answer' => 'We provide migration tools and documentation for importing data from major platforms. You can use our CSV importer, REST API, or schedule a migration consultation with our technical team. We offer free migration support for Enterprise customers.',
                            'category' => 'troubleshooting',
                            'icon' => 'database',
                            'tags' => ['migration', 'import', 'data transfer'],
                            'link' => '/migration'
                        ],
                        [
                            'id' => 10,
                            'question' => 'What is your system status and uptime guarantee?',
                            'answer' => 'We maintain a 99.9% uptime SLA for all paid plans. You can check real-time system status at status.yourdomain.com. We post incident reports and maintenance schedules there. For SLA credits, contact support with your plan details.',
                            'category' => 'api',
                            'icon' => 'server',
                            'tags' => ['uptime', 'SLA', 'status'],
                            'link' => '/status'
                        ]
                    ],
                    'contactText' => 'Need technical assistance? Our support team is here to help.',
                    'contactLink' => '/contact',
                    'contactButtonText' => 'Contact Technical Support',
                    'showSla' => true,
                    'slaText' => 'Enterprise plans include 24/7 priority support with 1-hour response time'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 287,
                'section_key' => 'technicalSupport',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Knowledge Base',
                        'backgroundColor' => 'bg-blue-100 dark:bg-blue-900/30',
                        'borderColor' => 'border-blue-200 dark:border-blue-800',
                        'textColor' => 'text-blue-700 dark:text-blue-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Technical',
                        'highlightedText' => 'Support',
                        'suffix' => 'Knowledge Base',
                        'highlightGradient' => 'from-blue-600 to-indigo-600'
                    ],
                    'description' => 'Find answers to common technical questions about API, integrations, troubleshooting, and security.',
                    'stats' => [
                        [
                            'icon' => 'clock',
                            'value' => '< 2h',
                            'label' => 'Avg Response Time'
                        ],
                        [
                            'icon' => 'star',
                            'value' => '99%',
                            'label' => 'Satisfaction Rate'
                        ],
                        [
                            'icon' => 'server',
                            'value' => '99.9%',
                            'label' => 'Uptime SLA'
                        ],
                        [
                            'icon' => 'users',
                            'value' => '24/7',
                            'label' => 'Support Availability'
                        ]
                    ],
                    'systemStatus' => [
                        'status' => 'operational',
                        'uptime' => '99.9%'
                    ],
                    'popularQuestions' => [
                        'How do I get API access?',
                        'Why is my data not syncing?',
                        'What are your rate limits?',
                        'How do I set up webhooks?'
                    ],
                    'categories' => [
                        [
                            'id' => 'api',
                            'name' => 'API',
                            'description' => 'API access, authentication, rate limits, and webhooks',
                            'icon' => 'code',
                            'image' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop'
                        ],
                        [
                            'id' => 'integration',
                            'name' => 'Integration',
                            'description' => 'Third-party integrations and data syncing',
                            'icon' => 'switch',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop'
                        ],
                        [
                            'id' => 'troubleshooting',
                            'name' => 'Troubleshooting',
                            'description' => 'Common issues and error resolution',
                            'icon' => 'wrench',
                            'image' => 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop'
                        ],
                        [
                            'id' => 'security',
                            'name' => 'Security',
                            'description' => 'Data encryption, SSO, and compliance',
                            'icon' => 'lock',
                            'image' => 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=300&fit=crop'
                        ]
                    ],
                    'faqs' => [
                        [
                            'id' => 1,
                            'question' => 'How do I get API access?',
                            'answer' => 'API access is available on all paid plans. To get your API key, go to Settings > API Keys in your dashboard. You can generate multiple keys with different permission levels. For security, we recommend rotating keys regularly.',
                            'category' => 'api',
                            'icon' => 'code',
                            'tags' => ['API', 'keys', 'authentication'],
                            'link' => '/docs/api',
                            'updatedAt' => '2024-01-15',
                            'views' => 1250,
                            'codeSnippet' => "curl -X GET https://api.yourdomain.com/v1/products \\\n  -H 'Authorization: Bearer YOUR_API_KEY' \\\n  -H 'Content-Type: application/json'"
                        ],
                        [
                            'id' => 2,
                            'question' => 'What rate limits does your API have?',
                            'answer' => 'Our API rate limits vary by plan: Starter (100 requests/minute), Professional (500 requests/minute), Business (2,000 requests/minute), and Enterprise (custom limits). Rate limit headers are included in all API responses.',
                            'category' => 'api',
                            'icon' => 'code',
                            'tags' => ['API', 'rate limits', 'performance'],
                            'link' => '/docs/api-rate-limits',
                            'updatedAt' => '2024-01-10',
                            'views' => 980
                        ],
                        [
                            'id' => 3,
                            'question' => 'How do I integrate with third-party apps?',
                            'answer' => 'We offer pre-built integrations with popular platforms including Shopify, WooCommerce, Salesforce, HubSpot, and Zapier. You can find the integration settings in your dashboard under Integrations. Custom integrations are also available via our webhook system.',
                            'category' => 'integration',
                            'icon' => 'switch',
                            'tags' => ['integration', 'third-party', 'webhooks'],
                            'link' => '/integrations',
                            'updatedAt' => '2024-01-08',
                            'views' => 2100
                        ],
                        [
                            'id' => 4,
                            'question' => 'Why is my data not syncing?',
                            'answer' => 'Data sync issues can often be resolved by checking your API key permissions, verifying webhook configurations, or checking the connection status in your integration settings. If the issue persists, contact support with your integration details and timestamps.',
                            'category' => 'troubleshooting',
                            'icon' => 'wrench',
                            'tags' => ['sync', 'data', 'troubleshooting'],
                            'updatedAt' => '2024-01-12',
                            'views' => 1850
                        ],
                        [
                            'id' => 5,
                            'question' => 'Is my data encrypted?',
                            'answer' => 'Yes, all data is encrypted at rest using AES-256 and in transit using TLS 1.3. We are SOC 2 Type II certified and undergo regular security audits. For additional security, we offer SSO and IP whitelisting on Enterprise plans.',
                            'category' => 'security',
                            'icon' => 'lock',
                            'tags' => ['encryption', 'security', 'compliance'],
                            'link' => '/security',
                            'updatedAt' => '2024-01-18',
                            'views' => 3200
                        ],
                        [
                            'id' => 6,
                            'question' => 'How do I set up webhooks?',
                            'answer' => 'You can configure webhooks in your dashboard under Settings > Webhooks. Enter the endpoint URL, select the events you want to receive, and save. We\'ll send a test event to verify the connection. Webhook logs are available for debugging.',
                            'category' => 'api',
                            'icon' => 'code',
                            'tags' => ['webhooks', 'events', 'notifications'],
                            'link' => '/docs/webhooks',
                            'updatedAt' => '2024-01-14',
                            'views' => 720,
                            'codeSnippet' => "{\n  \"event\": \"order.created\",\n  \"data\": {\n    \"id\": \"ord_12345\",\n    \"total\": 299.99,\n    \"status\": \"pending\"\n  },\n  \"timestamp\": \"2024-01-15T10:30:00Z\"\n}"
                        ],
                        [
                            'id' => 7,
                            'question' => 'What should I do if I encounter an error?',
                            'answer' => 'First, check the error message and status code in the response. Common errors include rate limiting (429), authentication issues (401), and validation errors (422). Check our API documentation for error handling best practices.',
                            'category' => 'troubleshooting',
                            'icon' => 'wrench',
                            'tags' => ['error', 'debugging', 'API'],
                            'link' => '/docs/error-handling',
                            'updatedAt' => '2024-01-07',
                            'views' => 1560
                        ],
                        [
                            'id' => 8,
                            'question' => 'Do you support single sign-on (SSO)?',
                            'answer' => 'Yes, SSO is available on our Enterprise plan. We support SAML 2.0 and OIDC providers including Okta, Azure AD, Google Workspace, and OneLogin. Contact our sales team to enable SSO for your organization.',
                            'category' => 'security',
                            'icon' => 'lock',
                            'tags' => ['SSO', 'authentication', 'SAML'],
                            'link' => '/enterprise/sso',
                            'updatedAt' => '2024-01-16',
                            'views' => 890
                        ],
                        [
                            'id' => 9,
                            'question' => 'How do I migrate from another platform?',
                            'answer' => 'We provide migration tools and documentation for importing data from major platforms. You can use our CSV importer, REST API, or schedule a migration consultation with our technical team. We offer free migration support for Enterprise customers.',
                            'category' => 'troubleshooting',
                            'icon' => 'database',
                            'tags' => ['migration', 'import', 'data transfer'],
                            'link' => '/migration',
                            'updatedAt' => '2024-01-05',
                            'views' => 1120
                        ],
                        [
                            'id' => 10,
                            'question' => 'What is your system status and uptime guarantee?',
                            'answer' => 'We maintain a 99.9% uptime SLA for all paid plans. You can check real-time system status at status.yourdomain.com. We post incident reports and maintenance schedules there. For SLA credits, contact support with your plan details.',
                            'category' => 'api',
                            'icon' => 'server',
                            'tags' => ['uptime', 'SLA', 'status'],
                            'link' => '/status',
                            'updatedAt' => '2024-01-03',
                            'views' => 680
                        ]
                    ],
                    'heroImage' => 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&h=400&fit=crop',
                    'contactImage' => 'https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=600&h=400&fit=crop',
                    'contactText' => 'Need technical assistance? Our support team is here to help.',
                    'contactLink' => '/contact',
                    'contactButtonText' => 'Contact Technical Support',
                    'showSla' => true,
                    'slaText' => 'Enterprise plans include 24/7 priority support with 1-hour response time'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 288,
                'section_key' => 'technicalSupport',
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
