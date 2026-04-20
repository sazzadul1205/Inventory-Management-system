<?php

namespace Database\Seeders\PageRelatedSeeders\SectionVariantSeeder;

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

            // Implementation Section
            [
                'id' => 289,
                'section_key' => 'implementation',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Implementation',
                        'backgroundColor' => 'bg-blue-100 dark:bg-blue-900/30',
                        'borderColor' => 'border-blue-200 dark:border-blue-800',
                        'textColor' => 'text-blue-700 dark:text-blue-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Implementation',
                        'highlightedText' => 'Guide',
                        'suffix' => 'FAQ',
                        'highlightGradient' => 'from-blue-600 to-indigo-600'
                    ],
                    'description' => 'Everything you need to know about implementing our platform. From planning to go-live, we\'ve got you covered.',
                    'stats' => [
                        [
                            'icon' => 'clock',
                            'value' => '2-4 weeks',
                            'label' => 'Avg Implementation Time'
                        ],
                        [
                            'icon' => 'star',
                            'value' => '99%',
                            'label' => 'Success Rate'
                        ],
                        [
                            'icon' => 'users',
                            'value' => '500+',
                            'label' => 'Customers Implemented'
                        ],
                        [
                            'icon' => 'handshake',
                            'value' => '24/7',
                            'label' => 'Support Available'
                        ]
                    ],
                    'timeline' => [
                        [
                            'icon' => 'calendar',
                            'duration' => 'Week 1',
                            'title' => 'Planning & Discovery',
                            'description' => 'Requirements gathering, team alignment, and project timeline definition.'
                        ],
                        [
                            'icon' => 'database',
                            'duration' => 'Week 2',
                            'title' => 'Data Migration',
                            'description' => 'Data mapping, cleansing, and migration from existing systems.'
                        ],
                        [
                            'icon' => 'code',
                            'duration' => 'Week 3',
                            'title' => 'Integration & Customization',
                            'description' => 'API integrations, custom workflows, and feature configuration.'
                        ],
                        [
                            'icon' => 'academic',
                            'duration' => 'Week 4',
                            'title' => 'Training & Go-Live',
                            'description' => 'User training, UAT, and final deployment to production.'
                        ]
                    ],
                    'categories' => [
                        [
                            'id' => 'planning',
                            'name' => 'Planning',
                            'icon' => 'calendar'
                        ],
                        [
                            'id' => 'migration',
                            'name' => 'Data Migration',
                            'icon' => 'database'
                        ],
                        [
                            'id' => 'integration',
                            'name' => 'Integration',
                            'icon' => 'code'
                        ],
                        [
                            'id' => 'training',
                            'name' => 'Training',
                            'icon' => 'academic'
                        ]
                    ],
                    'faqs' => [
                        [
                            'id' => 1,
                            'question' => 'How long does implementation typically take?',
                            'answer' => 'Implementation typically takes 2-4 weeks depending on your business complexity, data volume, and integration requirements. We work with you to create a customized timeline that fits your schedule.',
                            'category' => 'planning',
                            'icon' => 'clock',
                            'tags' => ['timeline', 'duration', 'schedule'],
                            'link' => '/implementation/timeline'
                        ],
                        [
                            'id' => 2,
                            'question' => 'What data do I need to prepare for migration?',
                            'answer' => 'You\'ll need to prepare product data (SKUs, descriptions, prices), inventory levels, supplier information, customer data, and historical sales records. We provide detailed data templates and validation tools.',
                            'category' => 'migration',
                            'icon' => 'database',
                            'tags' => ['data', 'migration', 'preparation'],
                            'link' => '/docs/data-migration'
                        ],
                        [
                            'id' => 3,
                            'question' => 'Do you offer API integration support?',
                            'answer' => 'Yes, we provide comprehensive API documentation, code samples, and dedicated integration support. Our team can help you connect with ERP, POS, e-commerce, and other third-party systems.',
                            'category' => 'integration',
                            'icon' => 'code',
                            'tags' => ['API', 'integration', 'support'],
                            'link' => '/docs/api-integration'
                        ],
                        [
                            'id' => 4,
                            'question' => 'What training is provided during implementation?',
                            'answer' => 'We provide role-based training including live webinars, video tutorials, documentation, and hands-on workshops. Enterprise plans include on-site training and dedicated success managers.',
                            'category' => 'training',
                            'icon' => 'academic',
                            'tags' => ['training', 'onboarding', 'education'],
                            'link' => '/training'
                        ],
                        [
                            'id' => 5,
                            'question' => 'Can we migrate data from our existing system?',
                            'answer' => 'Absolutely! We support data migration from all major inventory systems including SAP, Oracle, NetSuite, Fishbowl, and custom solutions. Our migration tools automate most of the process.',
                            'category' => 'migration',
                            'icon' => 'database',
                            'tags' => ['migration', 'existing system', 'import'],
                            'link' => '/migration'
                        ],
                        [
                            'id' => 6,
                            'question' => 'What is the implementation process like?',
                            'answer' => 'Our proven 4-phase process includes: 1) Planning & Discovery, 2) Data Migration, 3) Integration & Customization, 4) Training & Go-Live. Each phase has clear milestones and deliverables.',
                            'category' => 'planning',
                            'icon' => 'calendar',
                            'tags' => ['process', 'phases', 'methodology'],
                            'link' => '/implementation/process'
                        ],
                        [
                            'id' => 7,
                            'question' => 'Do you offer sandbox environment for testing?',
                            'answer' => 'Yes, all paid plans include a sandbox environment where you can test configurations, integrations, and workflows before going live. This ensures a smooth production deployment.',
                            'category' => 'integration',
                            'icon' => 'cloud',
                            'tags' => ['sandbox', 'testing', 'staging'],
                            'link' => '/docs/sandbox'
                        ],
                        [
                            'id' => 8,
                            'question' => 'What support is available during implementation?',
                            'answer' => 'You\'ll have access to a dedicated implementation specialist, email support, live chat, and video calls. Enterprise plans include 24/7 priority support with a dedicated project manager.',
                            'category' => 'planning',
                            'icon' => 'users',
                            'tags' => ['support', 'dedicated', 'assistance'],
                            'link' => '/support'
                        ],
                        [
                            'id' => 9,
                            'question' => 'How do we handle user permissions and roles?',
                            'answer' => 'Our platform supports granular role-based access control (RBAC). You can define custom roles with specific permissions for different user types during implementation.',
                            'category' => 'training',
                            'icon' => 'users',
                            'tags' => ['permissions', 'roles', 'access control'],
                            'link' => '/docs/rbac'
                        ],
                        [
                            'id' => 10,
                            'question' => 'What happens after go-live?',
                            'answer' => 'Post go-live, we provide a 30-day stabilization period with enhanced support. You\'ll continue to have access to our support team, knowledge base, and regular check-ins to ensure success.',
                            'category' => 'planning',
                            'icon' => 'handshake',
                            'tags' => ['post-launch', 'stabilization', 'ongoing support'],
                            'link' => '/post-implementation'
                        ]
                    ],
                    'contactText' => 'Need help with implementation? Our team is here to assist.',
                    'contactLink' => '/contact',
                    'contactButtonText' => 'Contact Support',
                    'showGuarantee' => true,
                    'guaranteeText' => 'Enterprise plans include dedicated implementation support'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 290,
                'section_key' => 'implementation',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Implementation',
                        'backgroundColor' => 'bg-blue-100 dark:bg-blue-900/30',
                        'borderColor' => 'border-blue-200 dark:border-blue-800',
                        'textColor' => 'text-blue-700 dark:text-blue-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Implementation',
                        'highlightedText' => 'Help Center',
                        'suffix' => 'Plan Your Go-Live',
                        'highlightGradient' => 'from-blue-600 to-indigo-600'
                    ],
                    'description' => 'Everything you need to know about implementing our platform. From planning to go-live, we\'ve got you covered.',
                    'stats' => [
                        [
                            'icon' => 'clock',
                            'value' => '2-4 weeks',
                            'label' => 'Avg Implementation Time'
                        ],
                        [
                            'icon' => 'star',
                            'value' => '99%',
                            'label' => 'Success Rate'
                        ],
                        [
                            'icon' => 'users',
                            'value' => '500+',
                            'label' => 'Customers Implemented'
                        ],
                        [
                            'icon' => 'handshake',
                            'value' => '24/7',
                            'label' => 'Support Available'
                        ]
                    ],
                    'checklist' => [
                        [
                            'task' => 'Kickoff Meeting',
                            'description' => 'Schedule initial meeting with implementation team to align on goals and timeline',
                            'estimatedTime' => '1 hour'
                        ],
                        [
                            'task' => 'Data Mapping & Preparation',
                            'description' => 'Map existing data fields to platform requirements and prepare data for migration',
                            'estimatedTime' => '2-3 days'
                        ],
                        [
                            'task' => 'API Integration Setup',
                            'description' => 'Configure API connections with ERP, POS, and e-commerce platforms',
                            'estimatedTime' => '3-5 days'
                        ],
                        [
                            'task' => 'User Acceptance Testing (UAT)',
                            'description' => 'Conduct testing with key stakeholders to validate configurations',
                            'estimatedTime' => '2-3 days'
                        ],
                        [
                            'task' => 'User Training',
                            'description' => 'Complete role-based training sessions for all user groups',
                            'estimatedTime' => '1-2 days'
                        ],
                        [
                            'task' => 'Go-Live Preparation',
                            'description' => 'Final data migration, system checks, and go-live readiness review',
                            'estimatedTime' => '1 day'
                        ],
                        [
                            'task' => 'Go-Live Day',
                            'description' => 'Execute migration, verify data integrity, and monitor system performance',
                            'estimatedTime' => '1 day'
                        ],
                        [
                            'task' => 'Post Go-Live Support',
                            'description' => '30-day stabilization period with enhanced support and check-ins',
                            'estimatedTime' => '30 days'
                        ]
                    ],
                    'popularQuestions' => [
                        'How long does implementation take?',
                        'What data do I need to prepare?',
                        'Do you offer API integration support?',
                        'What training is provided?'
                    ],
                    'categories' => [
                        [
                            'id' => 'planning',
                            'name' => 'Planning',
                            'icon' => 'calendar'
                        ],
                        [
                            'id' => 'migration',
                            'name' => 'Data Migration',
                            'icon' => 'database'
                        ],
                        [
                            'id' => 'integration',
                            'name' => 'Integration',
                            'icon' => 'code'
                        ],
                        [
                            'id' => 'training',
                            'name' => 'Training',
                            'icon' => 'academic'
                        ]
                    ],
                    'faqs' => [
                        [
                            'id' => 1,
                            'question' => 'How long does implementation typically take?',
                            'answer' => 'Implementation typically takes 2-4 weeks depending on your business complexity, data volume, and integration requirements. We work with you to create a customized timeline that fits your schedule.',
                            'category' => 'planning',
                            'icon' => 'clock',
                            'tags' => ['timeline', 'duration', 'schedule'],
                            'link' => '/implementation/timeline'
                        ],
                        [
                            'id' => 2,
                            'question' => 'What data do I need to prepare for migration?',
                            'answer' => 'You\'ll need to prepare product data (SKUs, descriptions, prices), inventory levels, supplier information, customer data, and historical sales records. We provide detailed data templates and validation tools.',
                            'category' => 'migration',
                            'icon' => 'database',
                            'tags' => ['data', 'migration', 'preparation'],
                            'link' => '/docs/data-migration'
                        ],
                        [
                            'id' => 3,
                            'question' => 'Do you offer API integration support?',
                            'answer' => 'Yes, we provide comprehensive API documentation, code samples, and dedicated integration support. Our team can help you connect with ERP, POS, e-commerce, and other third-party systems.',
                            'category' => 'integration',
                            'icon' => 'code',
                            'tags' => ['API', 'integration', 'support'],
                            'link' => '/docs/api-integration'
                        ],
                        [
                            'id' => 4,
                            'question' => 'What training is provided during implementation?',
                            'answer' => 'We provide role-based training including live webinars, video tutorials, documentation, and hands-on workshops. Enterprise plans include on-site training and dedicated success managers.',
                            'category' => 'training',
                            'icon' => 'academic',
                            'tags' => ['training', 'onboarding', 'education'],
                            'link' => '/training'
                        ],
                        [
                            'id' => 5,
                            'question' => 'Can we migrate data from our existing system?',
                            'answer' => 'Absolutely! We support data migration from all major inventory systems including SAP, Oracle, NetSuite, Fishbowl, and custom solutions. Our migration tools automate most of the process.',
                            'category' => 'migration',
                            'icon' => 'database',
                            'tags' => ['migration', 'existing system', 'import'],
                            'link' => '/migration'
                        ],
                        [
                            'id' => 6,
                            'question' => 'What is the implementation process like?',
                            'answer' => 'Our proven 4-phase process includes: 1) Planning & Discovery, 2) Data Migration, 3) Integration & Customization, 4) Training & Go-Live. Each phase has clear milestones and deliverables.',
                            'category' => 'planning',
                            'icon' => 'calendar',
                            'tags' => ['process', 'phases', 'methodology'],
                            'link' => '/implementation/process'
                        ],
                        [
                            'id' => 7,
                            'question' => 'Do you offer sandbox environment for testing?',
                            'answer' => 'Yes, all paid plans include a sandbox environment where you can test configurations, integrations, and workflows before going live. This ensures a smooth production deployment.',
                            'category' => 'integration',
                            'icon' => 'cloud',
                            'tags' => ['sandbox', 'testing', 'staging'],
                            'link' => '/docs/sandbox'
                        ],
                        [
                            'id' => 8,
                            'question' => 'What support is available during implementation?',
                            'answer' => 'You\'ll have access to a dedicated implementation specialist, email support, live chat, and video calls. Enterprise plans include 24/7 priority support with a dedicated project manager.',
                            'category' => 'planning',
                            'icon' => 'users',
                            'tags' => ['support', 'dedicated', 'assistance'],
                            'link' => '/support'
                        ],
                        [
                            'id' => 9,
                            'question' => 'How do we handle user permissions and roles?',
                            'answer' => 'Our platform supports granular role-based access control (RBAC). You can define custom roles with specific permissions for different user types during implementation.',
                            'category' => 'training',
                            'icon' => 'users',
                            'tags' => ['permissions', 'roles', 'access control'],
                            'link' => '/docs/rbac'
                        ],
                        [
                            'id' => 10,
                            'question' => 'What happens after go-live?',
                            'answer' => 'Post go-live, we provide a 30-day stabilization period with enhanced support. You\'ll continue to have access to our support team, knowledge base, and regular check-ins to ensure success.',
                            'category' => 'planning',
                            'icon' => 'handshake',
                            'tags' => ['post-launch', 'stabilization', 'ongoing support'],
                            'link' => '/post-implementation'
                        ]
                    ],
                    'contactText' => 'Need help with implementation? Our team is here to assist.',
                    'contactLink' => '/contact',
                    'contactButtonText' => 'Contact Implementation Team',
                    'showGuarantee' => true,
                    'guaranteeText' => 'Enterprise plans include dedicated implementation support'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 291,
                'section_key' => 'implementation',
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
                        'prefix' => 'Implementation',
                        'highlightedText' => 'Knowledge Base',
                        'suffix' => 'Plan Your Go-Live',
                        'highlightGradient' => 'from-blue-600 to-indigo-600'
                    ],
                    'description' => 'Everything you need to know about implementing our platform. From planning to go-live, we\'ve got you covered.',
                    'stats' => [
                        [
                            'icon' => 'clock',
                            'value' => '2-4 weeks',
                            'label' => 'Avg Implementation Time'
                        ],
                        [
                            'icon' => 'star',
                            'value' => '99%',
                            'label' => 'Success Rate'
                        ],
                        [
                            'icon' => 'users',
                            'value' => '500+',
                            'label' => 'Customers Implemented'
                        ],
                        [
                            'icon' => 'handshake',
                            'value' => '24/7',
                            'label' => 'Support Available'
                        ]
                    ],
                    'timeline' => [
                        'standard' => [
                            [
                                'icon' => 'calendar',
                                'duration' => 'Week 1',
                                'title' => 'Planning & Discovery',
                                'description' => 'Requirements gathering, team alignment, and project timeline definition.',
                                'tasks' => ['Kickoff meeting', 'Requirements documentation', 'Success criteria definition']
                            ],
                            [
                                'icon' => 'database',
                                'duration' => 'Week 2',
                                'title' => 'Data Migration',
                                'description' => 'Data mapping, cleansing, and migration from existing systems.',
                                'tasks' => ['Data mapping', 'Data validation', 'Test migration']
                            ],
                            [
                                'icon' => 'code',
                                'duration' => 'Week 3',
                                'title' => 'Integration & Customization',
                                'description' => 'API integrations, custom workflows, and feature configuration.',
                                'tasks' => ['API setup', 'Workflow configuration', 'Custom field mapping']
                            ],
                            [
                                'icon' => 'academic',
                                'duration' => 'Week 4',
                                'title' => 'Training & Go-Live',
                                'description' => 'User training, UAT, and final deployment to production.',
                                'tasks' => ['User training', 'UAT signoff', 'Production deployment']
                            ]
                        ],
                        'accelerated' => [
                            [
                                'icon' => 'calendar',
                                'duration' => 'Days 1-2',
                                'title' => 'Rapid Planning',
                                'description' => 'Accelerated requirements gathering and timeline definition.',
                                'tasks' => ['Quick kickoff', 'Priority requirements', 'Expedited approvals']
                            ],
                            [
                                'icon' => 'database',
                                'duration' => 'Days 3-5',
                                'title' => 'Fast Data Migration',
                                'description' => 'Streamlined data migration with automated tools.',
                                'tasks' => ['Automated mapping', 'Quick validation', 'Incremental migration']
                            ],
                            [
                                'icon' => 'code',
                                'duration' => 'Days 6-8',
                                'title' => 'Rapid Integration',
                                'description' => 'Pre-built connectors and quick configuration.',
                                'tasks' => ['Pre-built connectors', 'Template workflows', 'Quick testing']
                            ],
                            [
                                'icon' => 'academic',
                                'duration' => 'Days 9-10',
                                'title' => 'Fast Training & Go-Live',
                                'description' => 'Condensed training and accelerated go-live.',
                                'tasks' => ['Micro-training', 'Express UAT', 'Weekend go-live']
                            ]
                        ],
                        'enterprise' => [
                            [
                                'icon' => 'calendar',
                                'duration' => 'Weeks 1-2',
                                'title' => 'Enterprise Planning',
                                'description' => 'Comprehensive planning with stakeholder workshops.',
                                'tasks' => ['Multi-stakeholder workshops', 'Risk assessment', 'Compliance review', 'Change management planning']
                            ],
                            [
                                'icon' => 'database',
                                'duration' => 'Weeks 3-5',
                                'title' => 'Enterprise Data Migration',
                                'description' => 'Large-scale data migration with governance.',
                                'tasks' => ['Data governance', 'Multiple iterations', 'Audit trails', 'Rollback planning']
                            ],
                            [
                                'icon' => 'code',
                                'duration' => 'Weeks 6-8',
                                'title' => 'Complex Integrations',
                                'description' => 'Multiple system integrations and custom development.',
                                'tasks' => ['Multi-system integration', 'Custom development', 'Performance testing', 'Security review']
                            ],
                            [
                                'icon' => 'academic',
                                'duration' => 'Weeks 9-10',
                                'title' => 'Enterprise Training & Go-Live',
                                'description' => 'Comprehensive training and phased rollout.',
                                'tasks' => ['Role-based training', 'Pilot rollout', 'Phased deployment', 'Post-launch support']
                            ]
                        ]
                    ],
                    'checklist' => [
                        [
                            'task' => 'Kickoff Meeting',
                            'description' => 'Schedule initial meeting with implementation team to align on goals and timeline',
                            'estimatedTime' => '1 hour',
                            'resources' => '/docs/kickoff-guide'
                        ],
                        [
                            'task' => 'Data Mapping & Preparation',
                            'description' => 'Map existing data fields to platform requirements and prepare data for migration',
                            'estimatedTime' => '2-3 days',
                            'resources' => '/docs/data-mapping-template'
                        ],
                        [
                            'task' => 'API Integration Setup',
                            'description' => 'Configure API connections with ERP, POS, and e-commerce platforms',
                            'estimatedTime' => '3-5 days',
                            'resources' => '/docs/api-integration-guide'
                        ],
                        [
                            'task' => 'User Acceptance Testing (UAT)',
                            'description' => 'Conduct testing with key stakeholders to validate configurations',
                            'estimatedTime' => '2-3 days',
                            'resources' => '/docs/uat-checklist'
                        ],
                        [
                            'task' => 'User Training',
                            'description' => 'Complete role-based training sessions for all user groups',
                            'estimatedTime' => '1-2 days',
                            'resources' => '/training/schedule'
                        ],
                        [
                            'task' => 'Go-Live Preparation',
                            'description' => 'Final data migration, system checks, and go-live readiness review',
                            'estimatedTime' => '1 day',
                            'resources' => '/docs/go-live-checklist'
                        ],
                        [
                            'task' => 'Go-Live Day',
                            'description' => 'Execute migration, verify data integrity, and monitor system performance',
                            'estimatedTime' => '1 day'
                        ],
                        [
                            'task' => 'Post Go-Live Support',
                            'description' => '30-day stabilization period with enhanced support and check-ins',
                            'estimatedTime' => '30 days'
                        ]
                    ],
                    'popularQuestions' => [
                        'How long does implementation take?',
                        'What data do I need to prepare?',
                        'Do you offer API integration support?',
                        'What training is provided?'
                    ],
                    'categories' => [
                        [
                            'id' => 'planning',
                            'name' => 'Planning',
                            'description' => 'Project planning and timeline management',
                            'icon' => 'calendar',
                            'image' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop'
                        ],
                        [
                            'id' => 'migration',
                            'name' => 'Data Migration',
                            'description' => 'Data preparation and migration processes',
                            'icon' => 'database',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop'
                        ],
                        [
                            'id' => 'integration',
                            'name' => 'Integration',
                            'description' => 'API and third-party integrations',
                            'icon' => 'code',
                            'image' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop'
                        ],
                        [
                            'id' => 'training',
                            'name' => 'Training',
                            'description' => 'User training and onboarding',
                            'icon' => 'academic',
                            'image' => 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=300&fit=crop'
                        ]
                    ],
                    'faqs' => [
                        [
                            'id' => 1,
                            'question' => 'How long does implementation typically take?',
                            'answer' => 'Implementation typically takes 2-4 weeks depending on your business complexity, data volume, and integration requirements. We work with you to create a customized timeline that fits your schedule.',
                            'category' => 'planning',
                            'icon' => 'clock',
                            'tags' => ['timeline', 'duration', 'schedule'],
                            'link' => '/implementation/timeline',
                            'updatedAt' => '2024-01-15',
                            'views' => 1250
                        ],
                        [
                            'id' => 2,
                            'question' => 'What data do I need to prepare for migration?',
                            'answer' => 'You\'ll need to prepare product data (SKUs, descriptions, prices), inventory levels, supplier information, customer data, and historical sales records. We provide detailed data templates and validation tools.',
                            'category' => 'migration',
                            'icon' => 'database',
                            'tags' => ['data', 'migration', 'preparation'],
                            'link' => '/docs/data-migration',
                            'updatedAt' => '2024-01-10',
                            'views' => 980
                        ],
                        [
                            'id' => 3,
                            'question' => 'Do you offer API integration support?',
                            'answer' => 'Yes, we provide comprehensive API documentation, code samples, and dedicated integration support. Our team can help you connect with ERP, POS, e-commerce, and other third-party systems.',
                            'category' => 'integration',
                            'icon' => 'code',
                            'tags' => ['API', 'integration', 'support'],
                            'link' => '/docs/api-integration',
                            'updatedAt' => '2024-01-08',
                            'views' => 2100
                        ],
                        [
                            'id' => 4,
                            'question' => 'What training is provided during implementation?',
                            'answer' => 'We provide role-based training including live webinars, video tutorials, documentation, and hands-on workshops. Enterprise plans include on-site training and dedicated success managers.',
                            'category' => 'training',
                            'icon' => 'academic',
                            'tags' => ['training', 'onboarding', 'education'],
                            'link' => '/training',
                            'updatedAt' => '2024-01-12',
                            'views' => 1850
                        ],
                        [
                            'id' => 5,
                            'question' => 'Can we migrate data from our existing system?',
                            'answer' => 'Absolutely! We support data migration from all major inventory systems including SAP, Oracle, NetSuite, Fishbowl, and custom solutions. Our migration tools automate most of the process.',
                            'category' => 'migration',
                            'icon' => 'database',
                            'tags' => ['migration', 'existing system', 'import'],
                            'link' => '/migration',
                            'updatedAt' => '2024-01-05',
                            'views' => 1560
                        ],
                        [
                            'id' => 6,
                            'question' => 'What is the implementation process like?',
                            'answer' => 'Our proven 4-phase process includes: 1) Planning & Discovery, 2) Data Migration, 3) Integration & Customization, 4) Training & Go-Live. Each phase has clear milestones and deliverables.',
                            'category' => 'planning',
                            'icon' => 'calendar',
                            'tags' => ['process', 'phases', 'methodology'],
                            'link' => '/implementation/process',
                            'updatedAt' => '2024-01-14',
                            'views' => 720
                        ],
                        [
                            'id' => 7,
                            'question' => 'Do you offer sandbox environment for testing?',
                            'answer' => 'Yes, all paid plans include a sandbox environment where you can test configurations, integrations, and workflows before going live. This ensures a smooth production deployment.',
                            'category' => 'integration',
                            'icon' => 'cloud',
                            'tags' => ['sandbox', 'testing', 'staging'],
                            'link' => '/docs/sandbox',
                            'updatedAt' => '2024-01-18',
                            'views' => 890
                        ],
                        [
                            'id' => 8,
                            'question' => 'What support is available during implementation?',
                            'answer' => 'You\'ll have access to a dedicated implementation specialist, email support, live chat, and video calls. Enterprise plans include 24/7 priority support with a dedicated project manager.',
                            'category' => 'planning',
                            'icon' => 'users',
                            'tags' => ['support', 'dedicated', 'assistance'],
                            'link' => '/support',
                            'updatedAt' => '2024-01-07',
                            'views' => 540
                        ],
                        [
                            'id' => 9,
                            'question' => 'How do we handle user permissions and roles?',
                            'answer' => 'Our platform supports granular role-based access control (RBAC). You can define custom roles with specific permissions for different user types during implementation.',
                            'category' => 'training',
                            'icon' => 'users',
                            'tags' => ['permissions', 'roles', 'access control'],
                            'link' => '/docs/rbac',
                            'updatedAt' => '2024-01-03',
                            'views' => 1120
                        ],
                        [
                            'id' => 10,
                            'question' => 'What happens after go-live?',
                            'answer' => 'Post go-live, we provide a 30-day stabilization period with enhanced support. You\'ll continue to have access to our support team, knowledge base, and regular check-ins to ensure success.',
                            'category' => 'planning',
                            'icon' => 'handshake',
                            'tags' => ['post-launch', 'stabilization', 'ongoing support'],
                            'link' => '/post-implementation',
                            'updatedAt' => '2024-01-16',
                            'views' => 680
                        ]
                    ],
                    'heroImage' => 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=400&fit=crop',
                    'contactImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop',
                    'contactText' => 'Need help with implementation? Our team is here to assist.',
                    'contactLink' => '/contact',
                    'contactButtonText' => 'Contact Implementation Team',
                    'showGuarantee' => true,
                    'guaranteeText' => 'Enterprise plans include dedicated implementation support'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 292,
                'section_key' => 'implementation',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Integrations FAQ Section 
            [
                'id' => 293,
                'section_key' => 'integrationsFAQ',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Integrations',
                        'backgroundColor' => 'bg-blue-100 dark:bg-blue-900/30',
                        'borderColor' => 'border-blue-200 dark:border-blue-800',
                        'textColor' => 'text-blue-700 dark:text-blue-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Connect Your',
                        'highlightedText' => 'Tech Stack',
                        'suffix' => 'Integrations FAQ',
                        'highlightGradient' => 'from-blue-600 to-indigo-600'
                    ],
                    'description' => 'Learn how to connect our platform with your favorite tools and systems. Find answers to common integration questions.',
                    'stats' => [
                        [
                            'icon' => 'plug',
                            'value' => '100+',
                            'label' => 'Pre-built Integrations'
                        ],
                        [
                            'icon' => 'code',
                            'value' => '50+',
                            'label' => 'API Endpoints'
                        ],
                        [
                            'icon' => 'users',
                            'value' => '10K+',
                            'label' => 'Connected Apps'
                        ],
                        [
                            'icon' => 'clock',
                            'value' => '< 5 min',
                            'label' => 'Avg Setup Time'
                        ]
                    ],
                    'integrations' => [
                        ['name' => 'Shopify', 'category' => 'E-commerce', 'icon' => 'plug'],
                        ['name' => 'WooCommerce', 'category' => 'E-commerce', 'icon' => 'plug'],
                        ['name' => 'Salesforce', 'category' => 'CRM', 'icon' => 'database'],
                        ['name' => 'HubSpot', 'category' => 'CRM', 'icon' => 'database'],
                        ['name' => 'Zapier', 'category' => 'Automation', 'icon' => 'cog'],
                        ['name' => 'Slack', 'category' => 'Communication', 'icon' => 'cloud'],
                        ['name' => 'QuickBooks', 'category' => 'Accounting', 'icon' => 'database'],
                        ['name' => 'Power BI', 'category' => 'Analytics', 'icon' => 'chart']
                    ],
                    'categories' => [
                        [
                            'id' => 'setup',
                            'name' => 'Setup',
                            'icon' => 'wrench'
                        ],
                        [
                            'id' => 'api',
                            'name' => 'API',
                            'icon' => 'code'
                        ],
                        [
                            'id' => 'troubleshooting',
                            'name' => 'Troubleshooting',
                            'icon' => 'search'
                        ],
                        [
                            'id' => 'security',
                            'name' => 'Security',
                            'icon' => 'shield'
                        ]
                    ],
                    'faqs' => [
                        [
                            'id' => 1,
                            'question' => 'How do I connect my Shopify store?',
                            'answer' => 'To connect your Shopify store, go to Settings > Integrations > Shopify. Click \'Connect\' and authorize the connection. You\'ll need your Shopify store URL and admin credentials. The integration syncs products, orders, and inventory automatically.',
                            'category' => 'setup',
                            'icon' => 'plug',
                            'tags' => ['shopify', 'ecommerce', 'setup'],
                            'link' => '/integrations/shopify'
                        ],
                        [
                            'id' => 2,
                            'question' => 'How do I get an API key?',
                            'answer' => 'API keys can be generated in your dashboard under Settings > API Keys. Click \'Generate New Key\', select the permissions you need, and save the key securely. You can create multiple keys for different applications.',
                            'category' => 'api',
                            'icon' => 'code',
                            'tags' => ['api', 'keys', 'authentication'],
                            'link' => '/docs/api-keys'
                        ],
                        [
                            'id' => 3,
                            'question' => 'What integrations are available?',
                            'answer' => 'We offer 100+ pre-built integrations including Shopify, WooCommerce, Salesforce, HubSpot, Zapier, Slack, QuickBooks, and many more. Check our Integrations page for the complete list and documentation.',
                            'category' => 'setup',
                            'icon' => 'plug',
                            'tags' => ['integrations', 'list', 'available'],
                            'link' => '/integrations'
                        ],
                        [
                            'id' => 4,
                            'question' => 'How do I troubleshoot sync issues?',
                            'answer' => 'First, check your API key permissions and connection status. Verify that webhook URLs are correctly configured. Check the integration logs in your dashboard for error messages. If issues persist, contact support with the error details.',
                            'category' => 'troubleshooting',
                            'icon' => 'wrench',
                            'tags' => ['sync', 'troubleshooting', 'errors']
                        ],
                        [
                            'id' => 5,
                            'question' => 'Is my data secure when using integrations?',
                            'answer' => 'Yes, all integrations use OAuth 2.0 authentication and encrypted connections (TLS 1.3). We never store your third-party credentials and comply with GDPR, CCPA, and SOC 2 Type II standards.',
                            'category' => 'security',
                            'icon' => 'shield',
                            'tags' => ['security', 'encryption', 'privacy'],
                            'link' => '/security'
                        ],
                        [
                            'id' => 6,
                            'question' => 'Can I build custom integrations?',
                            'answer' => 'Absolutely! Our RESTful API allows you to build custom integrations with any system. We provide comprehensive documentation, code samples, and dedicated developer support for enterprise customers.',
                            'category' => 'api',
                            'icon' => 'code',
                            'tags' => ['custom', 'api', 'development'],
                            'link' => '/developers/api'
                        ],
                        [
                            'id' => 7,
                            'question' => 'How do webhooks work?',
                            'answer' => 'Webhooks send real-time notifications when events occur (e.g., order created, inventory updated). Configure webhook endpoints in Settings > Webhooks. We\'ll POST JSON payloads to your URL for selected events.',
                            'category' => 'api',
                            'icon' => 'code',
                            'tags' => ['webhooks', 'events', 'realtime'],
                            'link' => '/docs/webhooks'
                        ],
                        [
                            'id' => 8,
                            'question' => 'What are the API rate limits?',
                            'answer' => 'Rate limits vary by plan: Starter (100 req/min), Professional (500 req/min), Business (2,000 req/min), and Enterprise (custom). Rate limit headers (X-RateLimit-*) are included in all responses.',
                            'category' => 'api',
                            'icon' => 'code',
                            'tags' => ['rate limits', 'api', 'performance'],
                            'link' => '/docs/rate-limits'
                        ],
                        [
                            'id' => 9,
                            'question' => 'How do I disconnect an integration?',
                            'answer' => 'Go to Settings > Integrations, find the integration you want to remove, and click \'Disconnect\'. This will revoke access and stop all data sync. You can reconnect at any time.',
                            'category' => 'setup',
                            'icon' => 'wrench',
                            'tags' => ['disconnect', 'remove', 'revoke']
                        ],
                        [
                            'id' => 10,
                            'question' => 'Do you support Zapier integrations?',
                            'answer' => 'Yes, we have a Zapier app that lets you connect with 5,000+ apps. Create zaps to automate workflows like creating orders from forms or sending inventory alerts to Slack.',
                            'category' => 'setup',
                            'icon' => 'plug',
                            'tags' => ['zapier', 'automation', 'workflows'],
                            'link' => '/integrations/zapier'
                        ]
                    ],
                    'contactText' => 'Need help with integrations? Our team is here to assist.',
                    'contactLink' => '/contact',
                    'contactButtonText' => 'Contact Support'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 294,
                'section_key' => 'integrationsFAQ',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Integrations',
                        'backgroundColor' => 'bg-blue-100 dark:bg-blue-900/30',
                        'borderColor' => 'border-blue-200 dark:border-blue-800',
                        'textColor' => 'text-blue-700 dark:text-blue-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Connect Your',
                        'highlightedText' => 'Tech Stack',
                        'suffix' => 'Help Center',
                        'highlightGradient' => 'from-blue-600 to-indigo-600'
                    ],
                    'description' => 'Learn how to connect our platform with your favorite tools and systems. Find answers to common integration questions.',
                    'stats' => [
                        [
                            'icon' => 'plug',
                            'value' => '100+',
                            'label' => 'Pre-built Integrations'
                        ],
                        [
                            'icon' => 'code',
                            'value' => '50+',
                            'label' => 'API Endpoints'
                        ],
                        [
                            'icon' => 'users',
                            'value' => '10K+',
                            'label' => 'Connected Apps'
                        ],
                        [
                            'icon' => 'clock',
                            'value' => '< 5 min',
                            'label' => 'Avg Setup Time'
                        ]
                    ],
                    'allIntegrations' => [
                        ['name' => 'Shopify', 'category' => 'E-commerce', 'icon' => 'plug', 'status' => 'Available'],
                        ['name' => 'WooCommerce', 'category' => 'E-commerce', 'icon' => 'plug', 'status' => 'Available'],
                        ['name' => 'Salesforce', 'category' => 'CRM', 'icon' => 'database', 'status' => 'Available'],
                        ['name' => 'HubSpot', 'category' => 'CRM', 'icon' => 'database', 'status' => 'Available'],
                        ['name' => 'Zapier', 'category' => 'Automation', 'icon' => 'cog', 'status' => 'Available'],
                        ['name' => 'Slack', 'category' => 'Communication', 'icon' => 'cloud', 'status' => 'Available'],
                        ['name' => 'QuickBooks', 'category' => 'Accounting', 'icon' => 'database', 'status' => 'Available'],
                        ['name' => 'Power BI', 'category' => 'Analytics', 'icon' => 'chart', 'status' => 'Available']
                    ],
                    'popularQuestions' => [
                        'How do I connect my Shopify store?',
                        'How do I get an API key?',
                        'What integrations are available?',
                        'How do I troubleshoot sync issues?'
                    ],
                    'categories' => [
                        [
                            'id' => 'setup',
                            'name' => 'Setup',
                            'icon' => 'wrench'
                        ],
                        [
                            'id' => 'api',
                            'name' => 'API',
                            'icon' => 'code'
                        ],
                        [
                            'id' => 'troubleshooting',
                            'name' => 'Troubleshooting',
                            'icon' => 'search'
                        ],
                        [
                            'id' => 'security',
                            'name' => 'Security',
                            'icon' => 'shield'
                        ]
                    ],
                    'faqs' => [
                        [
                            'id' => 1,
                            'question' => 'How do I connect my Shopify store?',
                            'answer' => 'To connect your Shopify store, go to Settings > Integrations > Shopify. Click \'Connect\' and authorize the connection. You\'ll need your Shopify store URL and admin credentials. The integration syncs products, orders, and inventory automatically.',
                            'category' => 'setup',
                            'icon' => 'plug',
                            'tags' => ['shopify', 'ecommerce', 'setup'],
                            'link' => '/integrations/shopify',
                            'updatedAt' => '2024-01-15',
                            'views' => 1250
                        ],
                        [
                            'id' => 2,
                            'question' => 'How do I get an API key?',
                            'answer' => 'API keys can be generated in your dashboard under Settings > API Keys. Click \'Generate New Key\', select the permissions you need, and save the key securely. You can create multiple keys for different applications.',
                            'category' => 'api',
                            'icon' => 'code',
                            'tags' => ['api', 'keys', 'authentication'],
                            'link' => '/docs/api-keys',
                            'updatedAt' => '2024-01-10',
                            'views' => 2100,
                            'codeSnippet' => "curl -X GET https://api.yourdomain.com/v1/products \\\n  -H 'Authorization: Bearer YOUR_API_KEY' \\\n  -H 'Content-Type: application/json'"
                        ],
                        [
                            'id' => 3,
                            'question' => 'What integrations are available?',
                            'answer' => 'We offer 100+ pre-built integrations including Shopify, WooCommerce, Salesforce, HubSpot, Zapier, Slack, QuickBooks, and many more. Check our Integrations page for the complete list and documentation.',
                            'category' => 'setup',
                            'icon' => 'plug',
                            'tags' => ['integrations', 'list', 'available'],
                            'link' => '/integrations',
                            'updatedAt' => '2024-01-08',
                            'views' => 1850
                        ],
                        [
                            'id' => 4,
                            'question' => 'How do I troubleshoot sync issues?',
                            'answer' => 'First, check your API key permissions and connection status. Verify that webhook URLs are correctly configured. Check the integration logs in your dashboard for error messages. If issues persist, contact support with the error details.',
                            'category' => 'troubleshooting',
                            'icon' => 'wrench',
                            'tags' => ['sync', 'troubleshooting', 'errors'],
                            'updatedAt' => '2024-01-12',
                            'views' => 980
                        ],
                        [
                            'id' => 5,
                            'question' => 'Is my data secure when using integrations?',
                            'answer' => 'Yes, all integrations use OAuth 2.0 authentication and encrypted connections (TLS 1.3). We never store your third-party credentials and comply with GDPR, CCPA, and SOC 2 Type II standards.',
                            'category' => 'security',
                            'icon' => 'shield',
                            'tags' => ['security', 'encryption', 'privacy'],
                            'link' => '/security',
                            'updatedAt' => '2024-01-18',
                            'views' => 720
                        ],
                        [
                            'id' => 6,
                            'question' => 'Can I build custom integrations?',
                            'answer' => 'Absolutely! Our RESTful API allows you to build custom integrations with any system. We provide comprehensive documentation, code samples, and dedicated developer support for enterprise customers.',
                            'category' => 'api',
                            'icon' => 'code',
                            'tags' => ['custom', 'api', 'development'],
                            'link' => '/developers/api',
                            'updatedAt' => '2024-01-14',
                            'views' => 1560
                        ],
                        [
                            'id' => 7,
                            'question' => 'How do webhooks work?',
                            'answer' => 'Webhooks send real-time notifications when events occur (e.g., order created, inventory updated). Configure webhook endpoints in Settings > Webhooks. We\'ll POST JSON payloads to your URL for selected events.',
                            'category' => 'api',
                            'icon' => 'code',
                            'tags' => ['webhooks', 'events', 'realtime'],
                            'link' => '/docs/webhooks',
                            'updatedAt' => '2024-01-07',
                            'views' => 890,
                            'codeSnippet' => "{\n  \"event\": \"order.created\",\n  \"data\": {\n    \"id\": \"ord_12345\",\n    \"total\": 299.99\n  },\n  \"timestamp\": \"2024-01-15T10:30:00Z\"\n}"
                        ],
                        [
                            'id' => 8,
                            'question' => 'What are the API rate limits?',
                            'answer' => 'Rate limits vary by plan: Starter (100 req/min), Professional (500 req/min), Business (2,000 req/min), and Enterprise (custom). Rate limit headers (X-RateLimit-*) are included in all responses.',
                            'category' => 'api',
                            'icon' => 'code',
                            'tags' => ['rate limits', 'api', 'performance'],
                            'link' => '/docs/rate-limits',
                            'updatedAt' => '2024-01-16',
                            'views' => 1120
                        ],
                        [
                            'id' => 9,
                            'question' => 'How do I disconnect an integration?',
                            'answer' => 'Go to Settings > Integrations, find the integration you want to remove, and click \'Disconnect\'. This will revoke access and stop all data sync. You can reconnect at any time.',
                            'category' => 'setup',
                            'icon' => 'wrench',
                            'tags' => ['disconnect', 'remove', 'revoke'],
                            'updatedAt' => '2024-01-05',
                            'views' => 540
                        ],
                        [
                            'id' => 10,
                            'question' => 'Do you support Zapier integrations?',
                            'answer' => 'Yes, we have a Zapier app that lets you connect with 5,000+ apps. Create zaps to automate workflows like creating orders from forms or sending inventory alerts to Slack.',
                            'category' => 'setup',
                            'icon' => 'plug',
                            'tags' => ['zapier', 'automation', 'workflows'],
                            'link' => '/integrations/zapier',
                            'updatedAt' => '2024-01-03',
                            'views' => 680
                        ]
                    ],
                    'contactText' => 'Need help with integrations? Our team is here to assist.',
                    'contactLink' => '/contact',
                    'contactButtonText' => 'Contact Integration Support'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 295,
                'section_key' => 'integrationsFAQ',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Integrations',
                        'backgroundColor' => 'bg-blue-100 dark:bg-blue-900/30',
                        'borderColor' => 'border-blue-200 dark:border-blue-800',
                        'textColor' => 'text-blue-700 dark:text-blue-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Connect Your',
                        'highlightedText' => 'Tech Stack',
                        'suffix' => 'Knowledge Base',
                        'highlightGradient' => 'from-blue-600 to-indigo-600'
                    ],
                    'description' => 'Learn how to connect our platform with your favorite tools and systems. Find answers to common integration questions.',
                    'stats' => [
                        [
                            'icon' => 'plug',
                            'value' => '100+',
                            'label' => 'Pre-built Integrations'
                        ],
                        [
                            'icon' => 'code',
                            'value' => '50+',
                            'label' => 'API Endpoints'
                        ],
                        [
                            'icon' => 'users',
                            'value' => '10K+',
                            'label' => 'Connected Apps'
                        ],
                        [
                            'icon' => 'clock',
                            'value' => '< 5 min',
                            'label' => 'Avg Setup Time'
                        ]
                    ],
                    'allIntegrations' => [
                        ['name' => 'Shopify', 'category' => 'E-commerce', 'icon' => 'plug', 'status' => 'Available'],
                        ['name' => 'WooCommerce', 'category' => 'E-commerce', 'icon' => 'plug', 'status' => 'Available'],
                        ['name' => 'Salesforce', 'category' => 'CRM', 'icon' => 'database', 'status' => 'Available'],
                        ['name' => 'HubSpot', 'category' => 'CRM', 'icon' => 'database', 'status' => 'Available'],
                        ['name' => 'Zapier', 'category' => 'Automation', 'icon' => 'cog', 'status' => 'Available'],
                        ['name' => 'Slack', 'category' => 'Communication', 'icon' => 'cloud', 'status' => 'Available'],
                        ['name' => 'QuickBooks', 'category' => 'Accounting', 'icon' => 'database', 'status' => 'Available'],
                        ['name' => 'Power BI', 'category' => 'Analytics', 'icon' => 'chart', 'status' => 'Available']
                    ],
                    'apiEndpoints' => [
                        [
                            'method' => 'GET',
                            'path' => '/api/v1/inventory',
                            'description' => 'Retrieve inventory levels',
                            'sampleResponse' => ['items' => [['sku' => 'ABC123', 'quantity' => 100]]]
                        ],
                        [
                            'method' => 'POST',
                            'path' => '/api/v1/orders',
                            'description' => 'Create a new order',
                            'sampleResponse' => ['orderId' => 'ORD-12345', 'status' => 'created']
                        ],
                        [
                            'method' => 'PUT',
                            'path' => '/api/v1/products/{id}',
                            'description' => 'Update product details',
                            'sampleResponse' => ['id' => 'prod_123', 'updated' => true]
                        ],
                        [
                            'method' => 'DELETE',
                            'path' => '/api/v1/webhooks/{id}',
                            'description' => 'Delete a webhook endpoint',
                            'sampleResponse' => ['deleted' => true]
                        ]
                    ],
                    'popularQuestions' => [
                        'How do I connect my Shopify store?',
                        'How do I get an API key?',
                        'What integrations are available?',
                        'How do I troubleshoot sync issues?'
                    ],
                    'categories' => [
                        [
                            'id' => 'setup',
                            'name' => 'Setup',
                            'description' => 'Getting started with integrations',
                            'icon' => 'wrench',
                            'image' => 'https://images.unsplash.com/photo-1551434678-e076c2236a9a?w=400&h=300&fit=crop'
                        ],
                        [
                            'id' => 'api',
                            'name' => 'API',
                            'description' => 'API access and usage',
                            'icon' => 'code',
                            'image' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop'
                        ],
                        [
                            'id' => 'troubleshooting',
                            'name' => 'Troubleshooting',
                            'description' => 'Common issues and solutions',
                            'icon' => 'search',
                            'image' => 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop'
                        ],
                        [
                            'id' => 'security',
                            'name' => 'Security',
                            'description' => 'Security and compliance',
                            'icon' => 'shield',
                            'image' => 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=300&fit=crop'
                        ]
                    ],
                    'faqs' => [
                        [
                            'id' => 1,
                            'question' => 'How do I connect my Shopify store?',
                            'answer' => 'To connect your Shopify store, go to Settings > Integrations > Shopify. Click \'Connect\' and authorize the connection. You\'ll need your Shopify store URL and admin credentials. The integration syncs products, orders, and inventory automatically.',
                            'category' => 'setup',
                            'icon' => 'plug',
                            'tags' => ['shopify', 'ecommerce', 'setup'],
                            'link' => '/integrations/shopify',
                            'updatedAt' => '2024-01-15',
                            'views' => 1250
                        ],
                        [
                            'id' => 2,
                            'question' => 'How do I get an API key?',
                            'answer' => 'API keys can be generated in your dashboard under Settings > API Keys. Click \'Generate New Key\', select the permissions you need, and save the key securely. You can create multiple keys for different applications.',
                            'category' => 'api',
                            'icon' => 'code',
                            'tags' => ['api', 'keys', 'authentication'],
                            'link' => '/docs/api-keys',
                            'updatedAt' => '2024-01-10',
                            'views' => 2100,
                            'codeSnippet' => "curl -X GET https://api.yourdomain.com/v1/products \\\n  -H 'Authorization: Bearer YOUR_API_KEY' \\\n  -H 'Content-Type: application/json'"
                        ],
                        [
                            'id' => 3,
                            'question' => 'What integrations are available?',
                            'answer' => 'We offer 100+ pre-built integrations including Shopify, WooCommerce, Salesforce, HubSpot, Zapier, Slack, QuickBooks, and many more. Check our Integrations page for the complete list and documentation.',
                            'category' => 'setup',
                            'icon' => 'plug',
                            'tags' => ['integrations', 'list', 'available'],
                            'link' => '/integrations',
                            'updatedAt' => '2024-01-08',
                            'views' => 1850
                        ],
                        [
                            'id' => 4,
                            'question' => 'How do I troubleshoot sync issues?',
                            'answer' => 'First, check your API key permissions and connection status. Verify that webhook URLs are correctly configured. Check the integration logs in your dashboard for error messages. If issues persist, contact support with the error details.',
                            'category' => 'troubleshooting',
                            'icon' => 'wrench',
                            'tags' => ['sync', 'troubleshooting', 'errors'],
                            'updatedAt' => '2024-01-12',
                            'views' => 980
                        ],
                        [
                            'id' => 5,
                            'question' => 'Is my data secure when using integrations?',
                            'answer' => 'Yes, all integrations use OAuth 2.0 authentication and encrypted connections (TLS 1.3). We never store your third-party credentials and comply with GDPR, CCPA, and SOC 2 Type II standards.',
                            'category' => 'security',
                            'icon' => 'shield',
                            'tags' => ['security', 'encryption', 'privacy'],
                            'link' => '/security',
                            'updatedAt' => '2024-01-18',
                            'views' => 720
                        ],
                        [
                            'id' => 6,
                            'question' => 'Can I build custom integrations?',
                            'answer' => 'Absolutely! Our RESTful API allows you to build custom integrations with any system. We provide comprehensive documentation, code samples, and dedicated developer support for enterprise customers.',
                            'category' => 'api',
                            'icon' => 'code',
                            'tags' => ['custom', 'api', 'development'],
                            'link' => '/developers/api',
                            'updatedAt' => '2024-01-14',
                            'views' => 1560
                        ],
                        [
                            'id' => 7,
                            'question' => 'How do webhooks work?',
                            'answer' => 'Webhooks send real-time notifications when events occur (e.g., order created, inventory updated). Configure webhook endpoints in Settings > Webhooks. We\'ll POST JSON payloads to your URL for selected events.',
                            'category' => 'api',
                            'icon' => 'code',
                            'tags' => ['webhooks', 'events', 'realtime'],
                            'link' => '/docs/webhooks',
                            'updatedAt' => '2024-01-07',
                            'views' => 890,
                            'codeSnippet' => "{\n  \"event\": \"order.created\",\n  \"data\": {\n    \"id\": \"ord_12345\",\n    \"total\": 299.99\n  },\n  \"timestamp\": \"2024-01-15T10:30:00Z\"\n}"
                        ],
                        [
                            'id' => 8,
                            'question' => 'What are the API rate limits?',
                            'answer' => 'Rate limits vary by plan: Starter (100 req/min), Professional (500 req/min), Business (2,000 req/min), and Enterprise (custom). Rate limit headers (X-RateLimit-*) are included in all responses.',
                            'category' => 'api',
                            'icon' => 'code',
                            'tags' => ['rate limits', 'api', 'performance'],
                            'link' => '/docs/rate-limits',
                            'updatedAt' => '2024-01-16',
                            'views' => 1120
                        ],
                        [
                            'id' => 9,
                            'question' => 'How do I disconnect an integration?',
                            'answer' => 'Go to Settings > Integrations, find the integration you want to remove, and click \'Disconnect\'. This will revoke access and stop all data sync. You can reconnect at any time.',
                            'category' => 'setup',
                            'icon' => 'wrench',
                            'tags' => ['disconnect', 'remove', 'revoke'],
                            'updatedAt' => '2024-01-05',
                            'views' => 540
                        ],
                        [
                            'id' => 10,
                            'question' => 'Do you support Zapier integrations?',
                            'answer' => 'Yes, we have a Zapier app that lets you connect with 5,000+ apps. Create zaps to automate workflows like creating orders from forms or sending inventory alerts to Slack.',
                            'category' => 'setup',
                            'icon' => 'plug',
                            'tags' => ['zapier', 'automation', 'workflows'],
                            'link' => '/integrations/zapier',
                            'updatedAt' => '2024-01-03',
                            'views' => 680
                        ]
                    ],
                    'heroImage' => 'https://images.unsplash.com/photo-1551434678-e076c2236a9a?w=1200&h=400&fit=crop',
                    'contactImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop',
                    'contactText' => 'Need help with integrations? Our team is here to assist.',
                    'contactLink' => '/contact',
                    'contactButtonText' => 'Contact Integration Support'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 296,
                'section_key' => 'integrationsFAQ',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Data Security Sections 
            [
                'id' => 297,
                'section_key' => 'dataSecurity',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Data Security',
                        'backgroundColor' => 'bg-blue-100 dark:bg-blue-900/30',
                        'borderColor' => 'border-blue-200 dark:border-blue-800',
                        'textColor' => 'text-blue-700 dark:text-blue-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Your Data is',
                        'highlightedText' => 'Secure',
                        'suffix' => 'with Us',
                        'highlightGradient' => 'from-blue-600 to-indigo-600'
                    ],
                    'description' => 'Learn about our security practices, compliance standards, and how we protect your sensitive information.',
                    'stats' => [
                        [
                            'icon' => 'lock',
                            'value' => 'AES-256',
                            'label' => 'Encryption Standard'
                        ],
                        [
                            'icon' => 'clipboard',
                            'value' => 'SOC 2',
                            'label' => 'Type II Certified'
                        ],
                        [
                            'icon' => 'server',
                            'value' => '99.9%',
                            'label' => 'Uptime SLA'
                        ],
                        [
                            'icon' => 'clock',
                            'value' => '24/7',
                            'label' => 'Security Monitoring'
                        ]
                    ],
                    'certifications' => [
                        [
                            'name' => 'SOC 2 Type II',
                            'description' => 'Security & Compliance',
                            'icon' => 'clipboard'
                        ],
                        [
                            'name' => 'ISO 27001',
                            'description' => 'Information Security',
                            'icon' => 'document'
                        ],
                        [
                            'name' => 'GDPR',
                            'description' => 'Data Protection',
                            'icon' => 'shield'
                        ],
                        [
                            'name' => 'HIPAA',
                            'description' => 'Healthcare Ready',
                            'icon' => 'key'
                        ]
                    ],
                    'categories' => [
                        [
                            'id' => 'encryption',
                            'name' => 'Encryption',
                            'icon' => 'lock'
                        ],
                        [
                            'id' => 'compliance',
                            'name' => 'Compliance',
                            'icon' => 'clipboard'
                        ],
                        [
                            'id' => 'access',
                            'name' => 'Access Control',
                            'icon' => 'key'
                        ],
                        [
                            'id' => 'breach',
                            'name' => 'Breach Response',
                            'icon' => 'shield'
                        ]
                    ],
                    'faqs' => [
                        [
                            'id' => 1,
                            'question' => 'How is my data encrypted?',
                            'answer' => 'All data is encrypted at rest using AES-256 encryption and in transit using TLS 1.3. We use industry-standard encryption algorithms to ensure your data remains secure at all times.',
                            'category' => 'encryption',
                            'icon' => 'lock',
                            'tags' => ['encryption', 'AES-256', 'TLS'],
                            'link' => '/security/encryption'
                        ],
                        [
                            'id' => 2,
                            'question' => 'What security certifications do you have?',
                            'answer' => 'We are SOC 2 Type II certified and comply with GDPR, CCPA, and HIPAA (upon request). Our security practices are audited annually by third-party firms.',
                            'category' => 'compliance',
                            'icon' => 'clipboard',
                            'tags' => ['certifications', 'SOC2', 'GDPR', 'HIPAA'],
                            'link' => '/security/compliance'
                        ],
                        [
                            'id' => 3,
                            'question' => 'How do you handle data backups?',
                            'answer' => 'We perform automated daily backups with point-in-time recovery. Backups are encrypted and stored redundantly across multiple geographic regions. Retention period is 30 days for standard plans and 1 year for enterprise.',
                            'category' => 'encryption',
                            'icon' => 'server',
                            'tags' => ['backups', 'disaster recovery', 'retention'],
                            'link' => '/security/backups'
                        ],
                        [
                            'id' => 4,
                            'question' => 'Do you offer SSO and MFA?',
                            'answer' => 'Yes, we support SSO (SAML 2.0, OIDC) on Enterprise plans and MFA (TOTP, SMS) on all plans. We also support hardware security keys (WebAuthn) for enhanced security.',
                            'category' => 'access',
                            'icon' => 'key',
                            'tags' => ['SSO', 'MFA', 'authentication'],
                            'link' => '/security/sso-mfa'
                        ],
                        [
                            'id' => 5,
                            'question' => 'Where is my data stored?',
                            'answer' => 'Data is stored on AWS servers in the US (East/West), EU (Frankfurt), and APAC (Sydney). You can choose your preferred region during onboarding. All data centers are SOC 2 and ISO 27001 certified.',
                            'category' => 'compliance',
                            'icon' => 'server',
                            'tags' => ['data residency', 'AWS', 'regions'],
                            'link' => '/security/data-residency'
                        ],
                        [
                            'id' => 6,
                            'question' => 'How do you handle security incidents?',
                            'answer' => 'We have a dedicated incident response team available 24/7. Upon discovery, we investigate, contain, and remediate incidents. Affected customers are notified within 72 hours with detailed RCA.',
                            'category' => 'breach',
                            'icon' => 'shield',
                            'tags' => ['incident response', 'breach', 'notification'],
                            'link' => '/security/incident-response'
                        ],
                        [
                            'id' => 7,
                            'question' => 'Can I audit your security practices?',
                            'answer' => 'Yes, enterprise customers can request security audits, penetration test results, and compliance reports under NDA. We also provide access to our SOC 2 Type II report upon request.',
                            'category' => 'compliance',
                            'icon' => 'document',
                            'tags' => ['audit', 'penetration testing', 'compliance'],
                            'link' => '/security/audit'
                        ],
                        [
                            'id' => 8,
                            'question' => 'How do I report a security vulnerability?',
                            'answer' => 'Please email security@inventory-platform.com with details. We have a responsible disclosure program and reward valid findings. Do not disclose vulnerabilities publicly until we\'ve had time to address them.',
                            'category' => 'breach',
                            'icon' => 'mail',
                            'tags' => ['vulnerability', 'disclosure', 'reporting'],
                            'link' => '/security/disclosure'
                        ],
                        [
                            'id' => 9,
                            'question' => 'What access controls do you have?',
                            'answer' => 'We offer role-based access control (RBAC), IP whitelisting, session timeouts, and audit logging. All access is logged and monitored for suspicious activity.',
                            'category' => 'access',
                            'icon' => 'users',
                            'tags' => ['RBAC', 'access control', 'audit logs'],
                            'link' => '/security/access-control'
                        ],
                        [
                            'id' => 10,
                            'question' => 'Do you have a bug bounty program?',
                            'answer' => 'Yes, we run a private bug bounty program through HackerOne. Security researchers can apply to participate. We reward based on severity with bounties ranging from $500 to $10,000.',
                            'category' => 'breach',
                            'icon' => 'star',
                            'tags' => ['bug bounty', 'rewards', 'hackerone'],
                            'link' => '/security/bug-bounty'
                        ]
                    ],
                    'contactText' => 'Have more security questions? Our team is here to help.',
                    'contactLink' => '/contact',
                    'contactButtonText' => 'Contact Security Team',
                    'trustText' => 'Your data is protected with bank-grade security. We never sell or share your information.'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 298,
                'section_key' => 'dataSecurity',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Data Security',
                        'backgroundColor' => 'bg-blue-100 dark:bg-blue-900/30',
                        'borderColor' => 'border-blue-200 dark:border-blue-800',
                        'textColor' => 'text-blue-700 dark:text-blue-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Your Data is',
                        'highlightedText' => 'Secure',
                        'suffix' => 'with Us',
                        'highlightGradient' => 'from-blue-600 to-indigo-600'
                    ],
                    'description' => 'Learn about our security practices, compliance standards, and how we protect your sensitive information.',
                    'stats' => [
                        [
                            'icon' => 'lock',
                            'value' => 'AES-256',
                            'label' => 'Encryption Standard'
                        ],
                        [
                            'icon' => 'clipboard',
                            'value' => 'SOC 2',
                            'label' => 'Type II Certified'
                        ],
                        [
                            'icon' => 'server',
                            'value' => '99.9%',
                            'label' => 'Uptime SLA'
                        ],
                        [
                            'icon' => 'clock',
                            'value' => '24/7',
                            'label' => 'Security Monitoring'
                        ]
                    ],
                    'certifications' => [
                        [
                            'name' => 'SOC 2 Type II',
                            'description' => 'Security & Compliance',
                            'icon' => 'clipboard'
                        ],
                        [
                            'name' => 'ISO 27001',
                            'description' => 'Information Security',
                            'icon' => 'document'
                        ],
                        [
                            'name' => 'GDPR',
                            'description' => 'Data Protection',
                            'icon' => 'shield'
                        ],
                        [
                            'name' => 'HIPAA',
                            'description' => 'Healthcare Ready',
                            'icon' => 'key'
                        ]
                    ],
                    'complianceBadges' => [
                        'PCI DSS Level 1',
                        'CCPA Compliant',
                        'FedRAMP Ready',
                        'CSA STAR Certified'
                    ],
                    'popularQuestions' => [
                        'How is my data encrypted?',
                        'What security certifications do you have?',
                        'Do you offer SSO and MFA?',
                        'Where is my data stored?'
                    ],
                    'categories' => [
                        [
                            'id' => 'encryption',
                            'name' => 'Encryption',
                            'icon' => 'lock'
                        ],
                        [
                            'id' => 'compliance',
                            'name' => 'Compliance',
                            'icon' => 'clipboard'
                        ],
                        [
                            'id' => 'access',
                            'name' => 'Access Control',
                            'icon' => 'key'
                        ],
                        [
                            'id' => 'breach',
                            'name' => 'Breach Response',
                            'icon' => 'shield'
                        ]
                    ],
                    'faqs' => [
                        [
                            'id' => 1,
                            'question' => 'How is my data encrypted?',
                            'answer' => 'All data is encrypted at rest using AES-256 encryption and in transit using TLS 1.3. We use industry-standard encryption algorithms to ensure your data remains secure at all times.',
                            'category' => 'encryption',
                            'icon' => 'lock',
                            'tags' => ['encryption', 'AES-256', 'TLS'],
                            'link' => '/security/encryption',
                            'updatedAt' => '2024-01-15',
                            'views' => 1250
                        ],
                        [
                            'id' => 2,
                            'question' => 'What security certifications do you have?',
                            'answer' => 'We are SOC 2 Type II certified and comply with GDPR, CCPA, and HIPAA (upon request). Our security practices are audited annually by third-party firms.',
                            'category' => 'compliance',
                            'icon' => 'clipboard',
                            'tags' => ['certifications', 'SOC2', 'GDPR', 'HIPAA'],
                            'link' => '/security/compliance',
                            'updatedAt' => '2024-01-10',
                            'views' => 2100
                        ],
                        [
                            'id' => 3,
                            'question' => 'How do you handle data backups?',
                            'answer' => 'We perform automated daily backups with point-in-time recovery. Backups are encrypted and stored redundantly across multiple geographic regions. Retention period is 30 days for standard plans and 1 year for enterprise.',
                            'category' => 'encryption',
                            'icon' => 'server',
                            'tags' => ['backups', 'disaster recovery', 'retention'],
                            'link' => '/security/backups',
                            'updatedAt' => '2024-01-08',
                            'views' => 1850
                        ],
                        [
                            'id' => 4,
                            'question' => 'Do you offer SSO and MFA?',
                            'answer' => 'Yes, we support SSO (SAML 2.0, OIDC) on Enterprise plans and MFA (TOTP, SMS) on all plans. We also support hardware security keys (WebAuthn) for enhanced security.',
                            'category' => 'access',
                            'icon' => 'key',
                            'tags' => ['SSO', 'MFA', 'authentication'],
                            'link' => '/security/sso-mfa',
                            'updatedAt' => '2024-01-12',
                            'views' => 980
                        ],
                        [
                            'id' => 5,
                            'question' => 'Where is my data stored?',
                            'answer' => 'Data is stored on AWS servers in the US (East/West), EU (Frankfurt), and APAC (Sydney). You can choose your preferred region during onboarding. All data centers are SOC 2 and ISO 27001 certified.',
                            'category' => 'compliance',
                            'icon' => 'server',
                            'tags' => ['data residency', 'AWS', 'regions'],
                            'link' => '/security/data-residency',
                            'updatedAt' => '2024-01-18',
                            'views' => 720
                        ],
                        [
                            'id' => 6,
                            'question' => 'How do you handle security incidents?',
                            'answer' => 'We have a dedicated incident response team available 24/7. Upon discovery, we investigate, contain, and remediate incidents. Affected customers are notified within 72 hours with detailed RCA.',
                            'category' => 'breach',
                            'icon' => 'shield',
                            'tags' => ['incident response', 'breach', 'notification'],
                            'link' => '/security/incident-response',
                            'updatedAt' => '2024-01-14',
                            'views' => 1560
                        ],
                        [
                            'id' => 7,
                            'question' => 'Can I audit your security practices?',
                            'answer' => 'Yes, enterprise customers can request security audits, penetration test results, and compliance reports under NDA. We also provide access to our SOC 2 Type II report upon request.',
                            'category' => 'compliance',
                            'icon' => 'document',
                            'tags' => ['audit', 'penetration testing', 'compliance'],
                            'link' => '/security/audit',
                            'updatedAt' => '2024-01-07',
                            'views' => 890
                        ],
                        [
                            'id' => 8,
                            'question' => 'How do I report a security vulnerability?',
                            'answer' => 'Please email security@inventory-platform.com with details. We have a responsible disclosure program and reward valid findings. Do not disclose vulnerabilities publicly until we\'ve had time to address them.',
                            'category' => 'breach',
                            'icon' => 'mail',
                            'tags' => ['vulnerability', 'disclosure', 'reporting'],
                            'link' => '/security/disclosure',
                            'updatedAt' => '2024-01-16',
                            'views' => 1120
                        ],
                        [
                            'id' => 9,
                            'question' => 'What access controls do you have?',
                            'answer' => 'We offer role-based access control (RBAC), IP whitelisting, session timeouts, and audit logging. All access is logged and monitored for suspicious activity.',
                            'category' => 'access',
                            'icon' => 'users',
                            'tags' => ['RBAC', 'access control', 'audit logs'],
                            'link' => '/security/access-control',
                            'updatedAt' => '2024-01-05',
                            'views' => 540
                        ],
                        [
                            'id' => 10,
                            'question' => 'Do you have a bug bounty program?',
                            'answer' => 'Yes, we run a private bug bounty program through HackerOne. Security researchers can apply to participate. We reward based on severity with bounties ranging from $500 to $10,000.',
                            'category' => 'breach',
                            'icon' => 'star',
                            'tags' => ['bug bounty', 'rewards', 'hackerone'],
                            'link' => '/security/bug-bounty',
                            'updatedAt' => '2024-01-03',
                            'views' => 680
                        ]
                    ],
                    'contactText' => 'Have more security questions? Our team is here to help.',
                    'contactLink' => '/contact',
                    'contactButtonText' => 'Contact Security Team',
                    'trustText' => 'Your data is protected with bank-grade security. We never sell or share your information.'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 299,
                'section_key' => 'dataSecurity',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Data Security',
                        'backgroundColor' => 'bg-blue-100 dark:bg-blue-900/30',
                        'borderColor' => 'border-blue-200 dark:border-blue-800',
                        'textColor' => 'text-blue-700 dark:text-blue-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Your Data is',
                        'highlightedText' => 'Secure',
                        'suffix' => 'with Us',
                        'highlightGradient' => 'from-blue-600 to-indigo-600'
                    ],
                    'description' => 'Learn about our security practices, compliance standards, and how we protect your sensitive information.',
                    'stats' => [
                        [
                            'icon' => 'lock',
                            'value' => 'AES-256',
                            'label' => 'Encryption Standard'
                        ],
                        [
                            'icon' => 'clipboard',
                            'value' => 'SOC 2',
                            'label' => 'Type II Certified'
                        ],
                        [
                            'icon' => 'server',
                            'value' => '99.9%',
                            'label' => 'Uptime SLA'
                        ],
                        [
                            'icon' => 'clock',
                            'value' => '24/7',
                            'label' => 'Security Monitoring'
                        ]
                    ],
                    'securityMetrics' => [
                        [
                            'icon' => 'shield',
                            'value' => '0',
                            'label' => 'Security Incidents (YTD)',
                            'description' => 'No major security breaches'
                        ],
                        [
                            'icon' => 'clock',
                            'value' => '< 15 min',
                            'label' => 'Mean Time to Detect',
                            'description' => 'Average detection time'
                        ],
                        [
                            'icon' => 'trending',
                            'value' => '99.5%',
                            'label' => 'Threat Block Rate',
                            'description' => 'Automated threat prevention'
                        ]
                    ],
                    'certifications' => [
                        [
                            'name' => 'SOC 2 Type II',
                            'description' => 'Security & Compliance',
                            'icon' => 'clipboard',
                            'lastAudit' => 'December 2023',
                            'validThrough' => 'December 2025',
                            'certificateNumber' => 'SOC-2-2023-0421',
                            'reportSummary' => 'No material findings. All controls operating effectively.',
                            'image' => 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=300&fit=crop'
                        ],
                        [
                            'name' => 'ISO 27001',
                            'description' => 'Information Security',
                            'icon' => 'document',
                            'lastAudit' => 'November 2023',
                            'validThrough' => 'November 2026',
                            'certificateNumber' => 'ISO-27001-2023-1122',
                            'reportSummary' => 'Full compliance with all 114 controls.',
                            'image' => 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop'
                        ],
                        [
                            'name' => 'GDPR',
                            'description' => 'Data Protection',
                            'icon' => 'shield',
                            'lastAudit' => 'October 2023',
                            'validThrough' => 'Continuous',
                            'certificateNumber' => 'GDPR-COMP-2023-08',
                            'reportSummary' => 'Fully compliant with GDPR requirements.',
                            'image' => 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&h=300&fit=crop'
                        ],
                        [
                            'name' => 'HIPAA',
                            'description' => 'Healthcare Ready',
                            'icon' => 'key',
                            'lastAudit' => 'September 2023',
                            'validThrough' => 'September 2025',
                            'certificateNumber' => 'HIPAA-2023-0915',
                            'reportSummary' => 'Business Associate Agreement available.',
                            'image' => 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop'
                        ]
                    ],
                    'complianceBadges' => [
                        'PCI DSS Level 1',
                        'CCPA Compliant',
                        'FedRAMP Ready',
                        'CSA STAR Certified'
                    ],
                    'popularQuestions' => [
                        'How is my data encrypted?',
                        'What security certifications do you have?',
                        'Do you offer SSO and MFA?',
                        'Where is my data stored?'
                    ],
                    'categories' => [
                        [
                            'id' => 'encryption',
                            'name' => 'Encryption',
                            'description' => 'Data encryption standards and practices',
                            'icon' => 'lock',
                            'image' => 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop'
                        ],
                        [
                            'id' => 'compliance',
                            'name' => 'Compliance',
                            'description' => 'Security certifications and regulatory compliance',
                            'icon' => 'clipboard',
                            'image' => 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop'
                        ],
                        [
                            'id' => 'access',
                            'name' => 'Access Control',
                            'description' => 'Authentication and authorization',
                            'icon' => 'key',
                            'image' => 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop'
                        ],
                        [
                            'id' => 'breach',
                            'name' => 'Breach Response',
                            'description' => 'Incident response and reporting',
                            'icon' => 'shield',
                            'image' => 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop'
                        ]
                    ],
                    'faqs' => [
                        [
                            'id' => 1,
                            'question' => 'How is my data encrypted?',
                            'answer' => 'All data is encrypted at rest using AES-256 encryption and in transit using TLS 1.3. We use industry-standard encryption algorithms to ensure your data remains secure at all times.',
                            'category' => 'encryption',
                            'icon' => 'lock',
                            'tags' => ['encryption', 'AES-256', 'TLS'],
                            'link' => '/security/encryption',
                            'updatedAt' => '2024-01-15',
                            'views' => 1250
                        ],
                        [
                            'id' => 2,
                            'question' => 'What security certifications do you have?',
                            'answer' => 'We are SOC 2 Type II certified and comply with GDPR, CCPA, and HIPAA (upon request). Our security practices are audited annually by third-party firms.',
                            'category' => 'compliance',
                            'icon' => 'clipboard',
                            'tags' => ['certifications', 'SOC2', 'GDPR', 'HIPAA'],
                            'link' => '/security/compliance',
                            'updatedAt' => '2024-01-10',
                            'views' => 2100
                        ],
                        [
                            'id' => 3,
                            'question' => 'How do you handle data backups?',
                            'answer' => 'We perform automated daily backups with point-in-time recovery. Backups are encrypted and stored redundantly across multiple geographic regions. Retention period is 30 days for standard plans and 1 year for enterprise.',
                            'category' => 'encryption',
                            'icon' => 'server',
                            'tags' => ['backups', 'disaster recovery', 'retention'],
                            'link' => '/security/backups',
                            'updatedAt' => '2024-01-08',
                            'views' => 1850
                        ],
                        [
                            'id' => 4,
                            'question' => 'Do you offer SSO and MFA?',
                            'answer' => 'Yes, we support SSO (SAML 2.0, OIDC) on Enterprise plans and MFA (TOTP, SMS) on all plans. We also support hardware security keys (WebAuthn) for enhanced security.',
                            'category' => 'access',
                            'icon' => 'key',
                            'tags' => ['SSO', 'MFA', 'authentication'],
                            'link' => '/security/sso-mfa',
                            'updatedAt' => '2024-01-12',
                            'views' => 980,
                            'codeSnippet' => "// Example MFA configuration\n{\n  \"mfa\": {\n    \"enabled\": true,\n    \"methods\": [\"totp\", \"sms\"],\n    \"enforcement\": \"optional\"\n  }\n}"
                        ],
                        [
                            'id' => 5,
                            'question' => 'Where is my data stored?',
                            'answer' => 'Data is stored on AWS servers in the US (East/West), EU (Frankfurt), and APAC (Sydney). You can choose your preferred region during onboarding. All data centers are SOC 2 and ISO 27001 certified.',
                            'category' => 'compliance',
                            'icon' => 'server',
                            'tags' => ['data residency', 'AWS', 'regions'],
                            'link' => '/security/data-residency',
                            'updatedAt' => '2024-01-18',
                            'views' => 720
                        ],
                        [
                            'id' => 6,
                            'question' => 'How do you handle security incidents?',
                            'answer' => 'We have a dedicated incident response team available 24/7. Upon discovery, we investigate, contain, and remediate incidents. Affected customers are notified within 72 hours with detailed RCA.',
                            'category' => 'breach',
                            'icon' => 'shield',
                            'tags' => ['incident response', 'breach', 'notification'],
                            'link' => '/security/incident-response',
                            'updatedAt' => '2024-01-14',
                            'views' => 1560
                        ],
                        [
                            'id' => 7,
                            'question' => 'Can I audit your security practices?',
                            'answer' => 'Yes, enterprise customers can request security audits, penetration test results, and compliance reports under NDA. We also provide access to our SOC 2 Type II report upon request.',
                            'category' => 'compliance',
                            'icon' => 'document',
                            'tags' => ['audit', 'penetration testing', 'compliance'],
                            'link' => '/security/audit',
                            'updatedAt' => '2024-01-07',
                            'views' => 890
                        ],
                        [
                            'id' => 8,
                            'question' => 'How do I report a security vulnerability?',
                            'answer' => 'Please email security@inventory-platform.com with details. We have a responsible disclosure program and reward valid findings. Do not disclose vulnerabilities publicly until we\'ve had time to address them.',
                            'category' => 'breach',
                            'icon' => 'mail',
                            'tags' => ['vulnerability', 'disclosure', 'reporting'],
                            'link' => '/security/disclosure',
                            'updatedAt' => '2024-01-16',
                            'views' => 1120
                        ],
                        [
                            'id' => 9,
                            'question' => 'What access controls do you have?',
                            'answer' => 'We offer role-based access control (RBAC), IP whitelisting, session timeouts, and audit logging. All access is logged and monitored for suspicious activity.',
                            'category' => 'access',
                            'icon' => 'users',
                            'tags' => ['RBAC', 'access control', 'audit logs'],
                            'link' => '/security/access-control',
                            'updatedAt' => '2024-01-05',
                            'views' => 540
                        ],
                        [
                            'id' => 10,
                            'question' => 'Do you have a bug bounty program?',
                            'answer' => 'Yes, we run a private bug bounty program through HackerOne. Security researchers can apply to participate. We reward based on severity with bounties ranging from $500 to $10,000.',
                            'category' => 'breach',
                            'icon' => 'star',
                            'tags' => ['bug bounty', 'rewards', 'hackerone'],
                            'link' => '/security/bug-bounty',
                            'updatedAt' => '2024-01-03',
                            'views' => 680
                        ]
                    ],
                    'heroImage' => 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=400&fit=crop',
                    'contactImage' => 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
                    'contactText' => 'Have more security questions? Our team is here to help.',
                    'contactLink' => '/contact',
                    'contactButtonText' => 'Contact Security Team',
                    'trustText' => 'Your data is protected with bank-grade security. We never sell or share your information.'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 300,
                'section_key' => 'dataSecurity',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Account Management Section
            [
                'id' => 301,
                'section_key' => 'accountManagement',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Account Management',
                        'backgroundColor' => 'bg-blue-100 dark:bg-blue-900/30',
                        'borderColor' => 'border-blue-200 dark:border-blue-800',
                        'textColor' => 'text-blue-700 dark:text-blue-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Manage Your',
                        'highlightedText' => 'Account',
                        'suffix' => 'with Ease',
                        'highlightGradient' => 'from-blue-600 to-indigo-600'
                    ],
                    'description' => 'Find answers to common questions about account setup, security settings, billing, and more.',
                    'stats' => [
                        [
                            'icon' => 'users',
                            'value' => '50K+',
                            'label' => 'Active Users'
                        ],
                        [
                            'icon' => 'clock',
                            'value' => '< 2h',
                            'label' => 'Avg Response Time'
                        ],
                        [
                            'icon' => 'star',
                            'value' => '98%',
                            'label' => 'Satisfaction Rate'
                        ],
                        [
                            'icon' => 'handshake',
                            'value' => '24/7',
                            'label' => 'Support Available'
                        ]
                    ],
                    'categories' => [
                        [
                            'id' => 'setup',
                            'name' => 'Account Setup',
                            'icon' => 'user-add'
                        ],
                        [
                            'id' => 'security',
                            'name' => 'Security',
                            'icon' => 'lock'
                        ],
                        [
                            'id' => 'billing',
                            'name' => 'Billing',
                            'icon' => 'credit-card'
                        ],
                        [
                            'id' => 'settings',
                            'name' => 'Settings',
                            'icon' => 'cog'
                        ]
                    ],
                    'faqs' => [
                        [
                            'id' => 1,
                            'question' => 'How do I create an account?',
                            'answer' => 'To create an account, click the \'Sign Up\' button on our homepage. Fill in your name, email address, and create a password. You\'ll receive a verification email to activate your account. The entire process takes less than 2 minutes.',
                            'category' => 'setup',
                            'icon' => 'user-add',
                            'tags' => ['signup', 'registration', 'create account'],
                            'link' => '/signup'
                        ],
                        [
                            'id' => 2,
                            'question' => 'How do I reset my password?',
                            'answer' => 'Go to the login page and click \'Forgot Password\'. Enter your registered email address and we\'ll send you a password reset link. Click the link and follow the instructions to create a new password.',
                            'category' => 'security',
                            'icon' => 'key',
                            'tags' => ['password', 'reset', 'forgot password'],
                            'link' => '/forgot-password'
                        ],
                        [
                            'id' => 3,
                            'question' => 'How do I update my billing information?',
                            'answer' => 'Navigate to Settings > Billing from your dashboard. You can update your payment method, billing address, and tax information. Changes take effect immediately for future invoices.',
                            'category' => 'billing',
                            'icon' => 'credit-card',
                            'tags' => ['billing', 'payment', 'invoice'],
                            'link' => '/settings/billing'
                        ],
                        [
                            'id' => 4,
                            'question' => 'How do I change my email address?',
                            'answer' => 'Go to Settings > Account Profile. Click \'Edit\' next to your email address, enter your new email, and confirm your password. A verification email will be sent to your new address to confirm the change.',
                            'category' => 'settings',
                            'icon' => 'user',
                            'tags' => ['email', 'change email', 'profile'],
                            'link' => '/settings/profile'
                        ],
                        [
                            'id' => 5,
                            'question' => 'How do I enable two-factor authentication?',
                            'answer' => 'Go to Settings > Security > Two-Factor Authentication. Click \'Enable\', scan the QR code with your authenticator app (Google Authenticator, Authy, etc.), and enter the verification code to activate.',
                            'category' => 'security',
                            'icon' => 'shield',
                            'tags' => ['2FA', 'MFA', 'security', 'authentication'],
                            'link' => '/settings/security'
                        ],
                        [
                            'id' => 6,
                            'question' => 'How do I add team members to my account?',
                            'answer' => 'Go to Settings > Team Members. Click \'Invite Member\', enter their email address and select their role permissions. They\'ll receive an invitation email to join your organization.',
                            'category' => 'settings',
                            'icon' => 'users',
                            'tags' => ['team', 'invite', 'collaboration'],
                            'link' => '/settings/team'
                        ],
                        [
                            'id' => 7,
                            'question' => 'How do I cancel my subscription?',
                            'answer' => 'Go to Settings > Billing > Subscription. Click \'Cancel Subscription\' and confirm your choice. Your account will remain active until the end of your current billing period, then it will be downgraded to a free tier.',
                            'category' => 'billing',
                            'icon' => 'credit-card',
                            'tags' => ['cancel', 'subscription', 'downgrade'],
                            'link' => '/settings/billing'
                        ],
                        [
                            'id' => 8,
                            'question' => 'How do I view my account activity?',
                            'answer' => 'Go to Settings > Activity Log. You\'ll see a chronological list of all actions taken on your account, including logins, setting changes, and team member actions. You can filter by date and action type.',
                            'category' => 'security',
                            'icon' => 'clock',
                            'tags' => ['activity', 'audit log', 'history'],
                            'link' => '/settings/activity'
                        ],
                        [
                            'id' => 9,
                            'question' => 'How do I update my profile information?',
                            'answer' => 'Go to Settings > Account Profile. You can update your name, profile picture, phone number, and timezone. Changes are saved automatically.',
                            'category' => 'settings',
                            'icon' => 'user',
                            'tags' => ['profile', 'information', 'update'],
                            'link' => '/settings/profile'
                        ],
                        [
                            'id' => 10,
                            'question' => 'What should I do if I\'m locked out of my account?',
                            'answer' => 'Use the \'Forgot Password\' option on the login page. If that doesn\'t work, contact our support team at support@inventory-platform.com with your account email. We\'ll verify your identity and help restore access.',
                            'category' => 'security',
                            'icon' => 'lock',
                            'tags' => ['locked out', 'access', 'support'],
                            'link' => '/contact'
                        ]
                    ],
                    'contactText' => 'Still have account questions? Our team is here to help.',
                    'contactLink' => '/contact',
                    'contactButtonText' => 'Contact Support'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 302,
                'section_key' => 'accountManagement',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Account Management',
                        'backgroundColor' => 'bg-blue-100 dark:bg-blue-900/30',
                        'borderColor' => 'border-blue-200 dark:border-blue-800',
                        'textColor' => 'text-blue-700 dark:text-blue-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Manage Your',
                        'highlightedText' => 'Account',
                        'suffix' => 'Help Center',
                        'highlightGradient' => 'from-blue-600 to-indigo-600'
                    ],
                    'description' => 'Find answers to common questions about account setup, security settings, billing, and more.',
                    'stats' => [
                        [
                            'icon' => 'users',
                            'value' => '50K+',
                            'label' => 'Active Users'
                        ],
                        [
                            'icon' => 'clock',
                            'value' => '< 2h',
                            'label' => 'Avg Response Time'
                        ],
                        [
                            'icon' => 'star',
                            'value' => '98%',
                            'label' => 'Satisfaction Rate'
                        ],
                        [
                            'icon' => 'handshake',
                            'value' => '24/7',
                            'label' => 'Support Available'
                        ]
                    ],
                    'popularQuestions' => [
                        'How do I reset my password?',
                        'How do I update my billing information?',
                        'How do I add team members?',
                        'How do I cancel my subscription?'
                    ],
                    'categories' => [
                        [
                            'id' => 'setup',
                            'name' => 'Account Setup',
                            'icon' => 'user-add'
                        ],
                        [
                            'id' => 'security',
                            'name' => 'Security',
                            'icon' => 'lock'
                        ],
                        [
                            'id' => 'billing',
                            'name' => 'Billing',
                            'icon' => 'credit-card'
                        ],
                        [
                            'id' => 'settings',
                            'name' => 'Settings',
                            'icon' => 'cog'
                        ]
                    ],
                    'faqs' => [
                        [
                            'id' => 1,
                            'question' => 'How do I create an account?',
                            'answer' => 'To create an account, click the \'Sign Up\' button on our homepage. Fill in your name, email address, and create a password. You\'ll receive a verification email to activate your account. The entire process takes less than 2 minutes.',
                            'category' => 'setup',
                            'icon' => 'user-add',
                            'tags' => ['signup', 'registration', 'create account'],
                            'link' => '/signup',
                            'updatedAt' => '2024-01-15',
                            'views' => 1250
                        ],
                        [
                            'id' => 2,
                            'question' => 'How do I reset my password?',
                            'answer' => 'Go to the login page and click \'Forgot Password\'. Enter your registered email address and we\'ll send you a password reset link. Click the link and follow the instructions to create a new password.',
                            'category' => 'security',
                            'icon' => 'key',
                            'tags' => ['password', 'reset', 'forgot password'],
                            'link' => '/forgot-password',
                            'updatedAt' => '2024-01-10',
                            'views' => 2100
                        ],
                        [
                            'id' => 3,
                            'question' => 'How do I update my billing information?',
                            'answer' => 'Navigate to Settings > Billing from your dashboard. You can update your payment method, billing address, and tax information. Changes take effect immediately for future invoices.',
                            'category' => 'billing',
                            'icon' => 'credit-card',
                            'tags' => ['billing', 'payment', 'invoice'],
                            'link' => '/settings/billing',
                            'updatedAt' => '2024-01-08',
                            'views' => 1850
                        ],
                        [
                            'id' => 4,
                            'question' => 'How do I change my email address?',
                            'answer' => 'Go to Settings > Account Profile. Click \'Edit\' next to your email address, enter your new email, and confirm your password. A verification email will be sent to your new address to confirm the change.',
                            'category' => 'settings',
                            'icon' => 'user',
                            'tags' => ['email', 'change email', 'profile'],
                            'link' => '/settings/profile',
                            'updatedAt' => '2024-01-12',
                            'views' => 980
                        ],
                        [
                            'id' => 5,
                            'question' => 'How do I enable two-factor authentication?',
                            'answer' => 'Go to Settings > Security > Two-Factor Authentication. Click \'Enable\', scan the QR code with your authenticator app (Google Authenticator, Authy, etc.), and enter the verification code to activate.',
                            'category' => 'security',
                            'icon' => 'shield',
                            'tags' => ['2FA', 'MFA', 'security', 'authentication'],
                            'link' => '/settings/security',
                            'updatedAt' => '2024-01-18',
                            'views' => 720
                        ],
                        [
                            'id' => 6,
                            'question' => 'How do I add team members to my account?',
                            'answer' => 'Go to Settings > Team Members. Click \'Invite Member\', enter their email address and select their role permissions. They\'ll receive an invitation email to join your organization.',
                            'category' => 'settings',
                            'icon' => 'users',
                            'tags' => ['team', 'invite', 'collaboration'],
                            'link' => '/settings/team',
                            'updatedAt' => '2024-01-14',
                            'views' => 1560
                        ],
                        [
                            'id' => 7,
                            'question' => 'How do I cancel my subscription?',
                            'answer' => 'Go to Settings > Billing > Subscription. Click \'Cancel Subscription\' and confirm your choice. Your account will remain active until the end of your current billing period, then it will be downgraded to a free tier.',
                            'category' => 'billing',
                            'icon' => 'credit-card',
                            'tags' => ['cancel', 'subscription', 'downgrade'],
                            'link' => '/settings/billing',
                            'updatedAt' => '2024-01-07',
                            'views' => 890
                        ],
                        [
                            'id' => 8,
                            'question' => 'How do I view my account activity?',
                            'answer' => 'Go to Settings > Activity Log. You\'ll see a chronological list of all actions taken on your account, including logins, setting changes, and team member actions. You can filter by date and action type.',
                            'category' => 'security',
                            'icon' => 'clock',
                            'tags' => ['activity', 'audit log', 'history'],
                            'link' => '/settings/activity',
                            'updatedAt' => '2024-01-16',
                            'views' => 1120
                        ],
                        [
                            'id' => 9,
                            'question' => 'How do I update my profile information?',
                            'answer' => 'Go to Settings > Account Profile. You can update your name, profile picture, phone number, and timezone. Changes are saved automatically.',
                            'category' => 'settings',
                            'icon' => 'user',
                            'tags' => ['profile', 'information', 'update'],
                            'link' => '/settings/profile',
                            'updatedAt' => '2024-01-05',
                            'views' => 540
                        ],
                        [
                            'id' => 10,
                            'question' => 'What should I do if I\'m locked out of my account?',
                            'answer' => 'Use the \'Forgot Password\' option on the login page. If that doesn\'t work, contact our support team at support@inventory-platform.com with your account email. We\'ll verify your identity and help restore access.',
                            'category' => 'security',
                            'icon' => 'lock',
                            'tags' => ['locked out', 'access', 'support'],
                            'link' => '/contact',
                            'updatedAt' => '2024-01-03',
                            'views' => 680
                        ]
                    ],
                    'contactText' => 'Still have account questions? Our team is here to help.',
                    'contactLink' => '/contact',
                    'contactButtonText' => 'Contact Support'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 303,
                'section_key' => 'accountManagement',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Account Management',
                        'backgroundColor' => 'bg-blue-100 dark:bg-blue-900/30',
                        'borderColor' => 'border-blue-200 dark:border-blue-800',
                        'textColor' => 'text-blue-700 dark:text-blue-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Manage Your',
                        'highlightedText' => 'Account',
                        'suffix' => 'Knowledge Base',
                        'highlightGradient' => 'from-blue-600 to-indigo-600'
                    ],
                    'description' => 'Find answers to common questions about account setup, security settings, billing, and more.',
                    'stats' => [
                        [
                            'icon' => 'users',
                            'value' => '50K+',
                            'label' => 'Active Users'
                        ],
                        [
                            'icon' => 'clock',
                            'value' => '< 2h',
                            'label' => 'Avg Response Time'
                        ],
                        [
                            'icon' => 'star',
                            'value' => '98%',
                            'label' => 'Satisfaction Rate'
                        ],
                        [
                            'icon' => 'handshake',
                            'value' => '24/7',
                            'label' => 'Support Available'
                        ]
                    ],
                    'popularQuestions' => [
                        'How do I reset my password?',
                        'How do I update my billing information?',
                        'How do I add team members?',
                        'How do I cancel my subscription?'
                    ],
                    'categories' => [
                        [
                            'id' => 'setup',
                            'name' => 'Account Setup',
                            'description' => 'Creating and configuring your account',
                            'icon' => 'user-add',
                            'image' => 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=300&fit=crop'
                        ],
                        [
                            'id' => 'security',
                            'name' => 'Security',
                            'description' => 'Password, 2FA, and account protection',
                            'icon' => 'lock',
                            'image' => 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=300&fit=crop'
                        ],
                        [
                            'id' => 'billing',
                            'name' => 'Billing',
                            'description' => 'Payments, invoices, and subscriptions',
                            'icon' => 'credit-card',
                            'image' => 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=300&fit=crop'
                        ],
                        [
                            'id' => 'settings',
                            'name' => 'Settings',
                            'description' => 'Profile, team, and preferences',
                            'icon' => 'cog',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop'
                        ]
                    ],
                    'glossary' => [
                        [
                            'term' => '2FA',
                            'definition' => 'Two-Factor Authentication - An additional security layer that requires a verification code from your mobile device when logging in.',
                            'icon' => 'shield'
                        ],
                        [
                            'term' => 'RBAC',
                            'definition' => 'Role-Based Access Control - A system that restricts access based on user roles and permissions within an organization.',
                            'icon' => 'users'
                        ],
                        [
                            'term' => 'SSO',
                            'definition' => 'Single Sign-On - Allows users to authenticate using their existing corporate credentials (Okta, Azure AD, Google Workspace).',
                            'icon' => 'key'
                        ],
                        [
                            'term' => 'API Key',
                            'definition' => 'A unique identifier used to authenticate API requests. Keep it secure and rotate regularly.',
                            'icon' => 'code'
                        ],
                        [
                            'term' => 'Webhook',
                            'definition' => 'An automated message sent from an app when an event occurs. Used for real-time notifications and integrations.',
                            'icon' => 'external-link'
                        ],
                        [
                            'term' => 'Tenant',
                            'definition' => 'An isolated instance of the application for your organization. Each tenant has its own data and settings.',
                            'icon' => 'building'
                        ]
                    ],
                    'faqs' => [
                        [
                            'id' => 1,
                            'question' => 'How do I create an account?',
                            'answer' => 'To create an account, click the \'Sign Up\' button on our homepage. Fill in your name, email address, and create a password. You\'ll receive a verification email to activate your account. The entire process takes less than 2 minutes.',
                            'category' => 'setup',
                            'icon' => 'user-add',
                            'tags' => ['signup', 'registration', 'create account'],
                            'link' => '/signup',
                            'updatedAt' => '2024-01-15',
                            'views' => 1250
                        ],
                        [
                            'id' => 2,
                            'question' => 'How do I reset my password?',
                            'answer' => 'Go to the login page and click \'Forgot Password\'. Enter your registered email address and we\'ll send you a password reset link. Click the link and follow the instructions to create a new password.',
                            'category' => 'security',
                            'icon' => 'key',
                            'tags' => ['password', 'reset', 'forgot password'],
                            'link' => '/forgot-password',
                            'updatedAt' => '2024-01-10',
                            'views' => 2100
                        ],
                        [
                            'id' => 3,
                            'question' => 'How do I update my billing information?',
                            'answer' => 'Navigate to Settings > Billing from your dashboard. You can update your payment method, billing address, and tax information. Changes take effect immediately for future invoices.',
                            'category' => 'billing',
                            'icon' => 'credit-card',
                            'tags' => ['billing', 'payment', 'invoice'],
                            'link' => '/settings/billing',
                            'updatedAt' => '2024-01-08',
                            'views' => 1850
                        ],
                        [
                            'id' => 4,
                            'question' => 'How do I change my email address?',
                            'answer' => 'Go to Settings > Account Profile. Click \'Edit\' next to your email address, enter your new email, and confirm your password. A verification email will be sent to your new address to confirm the change.',
                            'category' => 'settings',
                            'icon' => 'user',
                            'tags' => ['email', 'change email', 'profile'],
                            'link' => '/settings/profile',
                            'updatedAt' => '2024-01-12',
                            'views' => 980
                        ],
                        [
                            'id' => 5,
                            'question' => 'How do I enable two-factor authentication?',
                            'answer' => 'Go to Settings > Security > Two-Factor Authentication. Click \'Enable\', scan the QR code with your authenticator app (Google Authenticator, Authy, etc.), and enter the verification code to activate.',
                            'category' => 'security',
                            'icon' => 'shield',
                            'tags' => ['2FA', 'MFA', 'security', 'authentication'],
                            'link' => '/settings/security',
                            'updatedAt' => '2024-01-18',
                            'views' => 720
                        ],
                        [
                            'id' => 6,
                            'question' => 'How do I add team members to my account?',
                            'answer' => 'Go to Settings > Team Members. Click \'Invite Member\', enter their email address and select their role permissions. They\'ll receive an invitation email to join your organization.',
                            'category' => 'settings',
                            'icon' => 'users',
                            'tags' => ['team', 'invite', 'collaboration'],
                            'link' => '/settings/team',
                            'updatedAt' => '2024-01-14',
                            'views' => 1560
                        ],
                        [
                            'id' => 7,
                            'question' => 'How do I cancel my subscription?',
                            'answer' => 'Go to Settings > Billing > Subscription. Click \'Cancel Subscription\' and confirm your choice. Your account will remain active until the end of your current billing period, then it will be downgraded to a free tier.',
                            'category' => 'billing',
                            'icon' => 'credit-card',
                            'tags' => ['cancel', 'subscription', 'downgrade'],
                            'link' => '/settings/billing',
                            'updatedAt' => '2024-01-07',
                            'views' => 890
                        ],
                        [
                            'id' => 8,
                            'question' => 'How do I view my account activity?',
                            'answer' => 'Go to Settings > Activity Log. You\'ll see a chronological list of all actions taken on your account, including logins, setting changes, and team member actions. You can filter by date and action type.',
                            'category' => 'security',
                            'icon' => 'clock',
                            'tags' => ['activity', 'audit log', 'history'],
                            'link' => '/settings/activity',
                            'updatedAt' => '2024-01-16',
                            'views' => 1120
                        ],
                        [
                            'id' => 9,
                            'question' => 'How do I update my profile information?',
                            'answer' => 'Go to Settings > Account Profile. You can update your name, profile picture, phone number, and timezone. Changes are saved automatically.',
                            'category' => 'settings',
                            'icon' => 'user',
                            'tags' => ['profile', 'information', 'update'],
                            'link' => '/settings/profile',
                            'updatedAt' => '2024-01-05',
                            'views' => 540
                        ],
                        [
                            'id' => 10,
                            'question' => 'What should I do if I\'m locked out of my account?',
                            'answer' => 'Use the \'Forgot Password\' option on the login page. If that doesn\'t work, contact our support team at support@inventory-platform.com with your account email. We\'ll verify your identity and help restore access.',
                            'category' => 'security',
                            'icon' => 'lock',
                            'tags' => ['locked out', 'access', 'support'],
                            'link' => '/contact',
                            'updatedAt' => '2024-01-03',
                            'views' => 680
                        ]
                    ],
                    'heroImage' => 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&h=400&fit=crop',
                    'contactImage' => 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
                    'contactText' => 'Still have account questions? Our team is here to help.',
                    'contactLink' => '/contact',
                    'contactButtonText' => 'Contact Support'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 304,
                'section_key' => 'accountManagement',
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
