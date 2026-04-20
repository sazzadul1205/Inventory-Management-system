<?php

namespace Database\Seeders\PageRelatedSeeders\SectionVariantSeeder;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ContactPageSectionVariantSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Upsert only this page's variants so other page seeders do not get wiped out.
        $variants = [
            // Contact Form Section
            [
                'id' => 305,
                'section_key' => 'contactForm',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => [
                        'backgroundColor' => 'bg-purple-100 dark:bg-purple-900/30',
                        'borderColor' => 'border-purple-200 dark:border-purple-800',
                        'textColor' => 'text-purple-700 dark:text-purple-300',
                        'text' => 'Get in Touch',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'We\'d Love to',
                        'highlightGradient' => 'from-purple-600 to-pink-600',
                        'highlightedText' => 'Hear From You',
                        'suffix' => ''
                    ],
                    'description' => 'Have a question, feedback, or need assistance? Our team is ready to help you. Fill out the form below and we\'ll get back to you shortly.',
                    'stats' => [
                        ['icon' => 'users', 'value' => '10k+', 'label' => 'Happy Customers'],
                        ['icon' => 'chat', 'value' => '24/7', 'label' => 'Support Available'],
                        ['icon' => 'clock', 'value' => '< 2hrs', 'label' => 'Avg Response Time'],
                        ['icon' => 'star', 'value' => '4.9', 'label' => 'Customer Rating']
                    ],
                    'contactMethods' => [
                        [
                            'icon' => 'mail',
                            'title' => 'Email Us',
                            'value' => 'hello@example.com',
                            'link' => 'mailto:hello@example.com',
                            'linkText' => 'Send Email'
                        ],
                        [
                            'icon' => 'chat',
                            'title' => 'Live Chat',
                            'value' => 'Available 24/7',
                            'link' => '/chat',
                            'linkText' => 'Start Chat'
                        ],
                        [
                            'icon' => 'phone',
                            'title' => 'Call Us',
                            'value' => '+1 (555) 123-4567',
                            'link' => 'tel:+15551234567',
                            'linkText' => 'Call Now'
                        ],
                        [
                            'icon' => 'location',
                            'title' => 'Visit Us',
                            'value' => '123 Main St, Suite 100, San Francisco, CA',
                            'link' => '/map',
                            'linkText' => 'Get Directions'
                        ]
                    ],
                    'supportHours' => [
                        ['days' => 'Monday - Friday', 'hours' => '9:00 AM - 6:00 PM EST'],
                        ['days' => 'Saturday', 'hours' => '10:00 AM - 4:00 PM EST'],
                        ['days' => 'Sunday', 'hours' => 'Closed']
                    ],
                    'showTrustBadge' => true,
                    'trustText' => 'We respond to all inquiries within 24 hours. Your privacy is our priority.',
                    'faqCategories' => [
                        ['id' => 'sales', 'name' => 'Sales', 'icon' => 'rocket', 'description' => 'Questions about pricing and plans'],
                        ['id' => 'technical', 'name' => 'Technical', 'icon' => 'cog', 'description' => 'API, integration, and platform help'],
                        ['id' => 'billing', 'name' => 'Billing', 'icon' => 'credit-card', 'description' => 'Invoices, payments, and subscriptions'],
                        ['id' => 'account', 'name' => 'Account', 'icon' => 'user', 'description' => 'Profile, security, and settings']
                    ],
                    'popularQuestions' => [
                        'How do I reset my password?',
                        'What payment methods do you accept?',
                        'How long does implementation take?',
                        'Is my data secure?'
                    ],
                    'faqs' => [
                        [
                            'id' => '1',
                            'category' => 'account',
                            'icon' => 'user',
                            'question' => 'How do I create an account?',
                            'answer' => 'Click the \'Sign Up\' button in the top right corner. Fill in your email, create a password, and verify your email address. You\'ll then have access to our 14-day free trial.',
                            'tags' => ['signup', 'registration', 'trial'],
                            'views' => 1250,
                            'updatedAt' => '2024-01-15'
                        ],
                        [
                            'id' => '2',
                            'category' => 'billing',
                            'icon' => 'credit-card',
                            'question' => 'What payment methods do you accept?',
                            'answer' => 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for annual plans. For enterprise customers, we also offer invoice-based billing.',
                            'tags' => ['payment', 'credit card', 'paypal', 'invoice'],
                            'views' => 980,
                            'updatedAt' => '2024-01-20'
                        ],
                        [
                            'id' => '3',
                            'category' => 'sales',
                            'icon' => 'rocket',
                            'question' => 'Can I switch plans at any time?',
                            'answer' => 'Yes, you can upgrade or downgrade your plan at any time from your account dashboard. Changes take effect immediately, and we\'ll prorate the difference.',
                            'tags' => ['upgrade', 'downgrade', 'plan change'],
                            'views' => 750,
                            'updatedAt' => '2024-01-10'
                        ],
                        [
                            'id' => '4',
                            'category' => 'technical',
                            'icon' => 'cog',
                            'question' => 'Do you offer API access?',
                            'answer' => 'Yes, all paid plans include full REST API access. Our API documentation includes code examples in multiple languages including cURL, Python, Node.js, and PHP.',
                            'codeSnippet' => "curl -X GET https://api.example.com/v1/users \\\n  -H 'Authorization: Bearer YOUR_API_KEY' \\\n  -H 'Content-Type: application/json'",
                            'tags' => ['api', 'rest', 'integration'],
                            'views' => 2100,
                            'updatedAt' => '2024-01-25'
                        ],
                        [
                            'id' => '5',
                            'category' => 'security',
                            'icon' => 'shield',
                            'question' => 'How is my data protected?',
                            'answer' => 'We use bank-grade AES-256 encryption for data at rest and TLS 1.3 for data in transit. We\'re SOC 2 Type II certified and GDPR compliant. Regular third-party security audits are conducted.',
                            'tags' => ['encryption', 'security', 'compliance', 'gdpr'],
                            'views' => 890,
                            'updatedAt' => '2024-01-18'
                        ]
                    ],
                    'glossary' => [
                        ['term' => 'API', 'definition' => 'Application Programming Interface - allows different software applications to communicate with each other.', 'icon' => 'code'],
                        ['term' => 'SOC 2', 'definition' => 'A security and compliance standard that ensures service providers securely manage data.', 'icon' => 'shield'],
                        ['term' => 'GDPR', 'definition' => 'General Data Protection Regulation - EU data protection and privacy law.', 'icon' => 'lock']
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 306,
                'section_key' => 'contactForm',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => [
                        'backgroundColor' => 'bg-emerald-100 dark:bg-emerald-900/30',
                        'borderColor' => 'border-emerald-200 dark:border-emerald-800',
                        'textColor' => 'text-emerald-700 dark:text-emerald-300',
                        'text' => 'Let\'s Talk',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Start a',
                        'highlightGradient' => 'from-emerald-600 to-teal-600',
                        'highlightedText' => 'Conversation',
                        'suffix' => 'With Us'
                    ],
                    'description' => 'Whether you\'re ready to start your journey or just exploring options, our team is here to answer your questions and guide you every step of the way.',
                    'stats' => [
                        ['icon' => 'users', 'value' => '15k+', 'label' => 'Businesses Served'],
                        ['icon' => 'globe', 'value' => '98%', 'label' => 'Customer Satisfaction'],
                        ['icon' => 'lightbulb', 'value' => '24/7', 'label' => 'Global Support'],
                        ['icon' => 'trophy', 'value' => '50+', 'label' => 'Industry Awards']
                    ],
                    'contactMethods' => [
                        [
                            'icon' => 'mail',
                            'title' => 'Email Support',
                            'value' => 'support@example.com',
                            'link' => 'mailto:support@example.com',
                            'linkText' => 'Send Email'
                        ],
                        [
                            'icon' => 'whatsapp',
                            'title' => 'WhatsApp',
                            'value' => '+1 (555) 123-4567',
                            'link' => 'https://wa.me/15551234567',
                            'linkText' => 'Message Us'
                        ],
                        [
                            'icon' => 'video',
                            'title' => 'Video Call',
                            'value' => 'Schedule a meeting',
                            'link' => '/schedule',
                            'linkText' => 'Book Now'
                        ],
                        [
                            'icon' => 'globe',
                            'title' => 'Headquarters',
                            'value' => '500 Market St, San Francisco, CA',
                            'link' => '/visit',
                            'linkText' => 'Get Directions'
                        ]
                    ],
                    'inquiryTypes' => [
                        ['value' => 'general', 'label' => 'General Question'],
                        ['value' => 'sales', 'label' => 'Sales & Pricing'],
                        ['value' => 'technical', 'label' => 'Technical Support'],
                        ['value' => 'partnership', 'label' => 'Partnership Opportunity'],
                        ['value' => 'media', 'label' => 'Press & Media']
                    ],
                    'companySizes' => [
                        ['value' => '1-10', 'label' => 'Startup (1-10)'],
                        ['value' => '11-50', 'label' => 'Small Business (11-50)'],
                        ['value' => '51-200', 'label' => 'Mid-size (51-200)'],
                        ['value' => '201-1000', 'label' => 'Large (201-1000)'],
                        ['value' => '1000+', 'label' => 'Enterprise (1000+)']
                    ],
                    'showEmergencyContact' => true,
                    'showTrustBadge' => true,
                    'trustText' => 'All information is encrypted and secure. We respect your privacy and never share your data with third parties.',
                    'features' => [
                        ['icon' => 'shield', 'title' => 'Enterprise Security', 'description' => 'Bank-grade encryption for all communications'],
                        ['icon' => 'globe', 'title' => 'Multi-language Support', 'description' => 'Support in 12+ languages worldwide'],
                        ['icon' => 'chart', 'title' => 'Dedicated Account Manager', 'description' => 'Personalized support for business plans']
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 307,
                'section_key' => 'contactForm',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'backgroundColor' => 'bg-amber-100 dark:bg-amber-900/30',
                        'borderColor' => 'border-amber-200 dark:border-amber-800',
                        'textColor' => 'text-amber-700 dark:text-amber-300',
                        'text' => 'Support Center',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'We\'re',
                        'highlightGradient' => 'from-amber-600 to-orange-600',
                        'highlightedText' => 'Here to Help',
                        'suffix' => '24/7'
                    ],
                    'description' => 'Have questions? Need assistance? Our dedicated support team is ready to help you with any issue, big or small. Reach out through any channel below.',
                    'stats' => [
                        ['icon' => 'users', 'value' => '50k+', 'label' => 'Happy Customers'],
                        ['icon' => 'chat', 'value' => '99.9%', 'label' => 'Uptime SLA'],
                        ['icon' => 'truck', 'value' => '< 1hr', 'label' => 'Response Time'],
                        ['icon' => 'badge', 'value' => '4.9/5', 'label' => 'Customer Rating']
                    ],
                    'heroImage' => 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=400&fit=crop',
                    'contactMethods' => [
                        [
                            'icon' => 'mail',
                            'title' => 'Email Support',
                            'value' => 'support@example.com',
                            'link' => 'mailto:support@example.com',
                            'linkText' => 'Send Email',
                            'image' => 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=400&h=300&fit=crop'
                        ],
                        [
                            'icon' => 'chat',
                            'title' => 'Live Chat',
                            'value' => 'Click to start chatting',
                            'link' => '/chat',
                            'linkText' => 'Start Chat',
                            'image' => 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=400&h=300&fit=crop'
                        ],
                        [
                            'icon' => 'phone',
                            'title' => 'Phone Support',
                            'value' => '+1 (800) 555-0123',
                            'link' => 'tel:+18005550123',
                            'linkText' => 'Call Now',
                            'image' => 'https://images.unsplash.com/photo-1557425493-6f90ae4659fc?w=400&h=300&fit=crop'
                        ],
                        [
                            'icon' => 'globe',
                            'title' => 'Help Center',
                            'value' => 'Self-service resources',
                            'link' => '/help',
                            'linkText' => 'Browse Articles',
                            'image' => 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=300&fit=crop'
                        ]
                    ],
                    'inquiryTypes' => [
                        ['value' => 'general', 'label' => 'General Question'],
                        ['value' => 'technical', 'label' => 'Technical Support'],
                        ['value' => 'billing', 'label' => 'Billing & Payments'],
                        ['value' => 'feature', 'label' => 'Feature Request'],
                        ['value' => 'bug', 'label' => 'Report a Bug'],
                        ['value' => 'other', 'label' => 'Other']
                    ],
                    'companySizes' => [
                        ['value' => '1-10', 'label' => 'Just me (1)'],
                        ['value' => '11-50', 'label' => 'Small team (2-10)'],
                        ['value' => '51-200', 'label' => 'Growing team (11-50)'],
                        ['value' => '201-1000', 'label' => 'Mid-size (51-200)'],
                        ['value' => '1000+', 'label' => 'Enterprise (200+)']
                    ],
                    'departments' => [
                        ['value' => 'support', 'label' => 'Customer Support'],
                        ['value' => 'sales', 'label' => 'Sales'],
                        ['value' => 'billing', 'label' => 'Billing'],
                        ['value' => 'technical', 'label' => 'Technical'],
                        ['value' => 'partnerships', 'label' => 'Partnerships']
                    ],
                    'supportHours' => [
                        ['days' => 'Monday - Friday', 'hours' => '24/7 Support'],
                        ['days' => 'Weekend', 'hours' => '24/7 Support'],
                        ['days' => 'Holidays', 'hours' => 'Limited Support']
                    ],
                    'showEmergencyContact' => true,
                    'emergencyContact' => [
                        'title' => 'Emergency Support',
                        'phone' => '+1 (888) 555-0999',
                        'description' => 'For critical issues affecting production systems'
                    ],
                    'showTrustBadge' => true,
                    'trustText' => 'Your information is encrypted and secure. We never share your data with third parties.',
                    'faqCategories' => [
                        ['id' => 'all', 'name' => 'All Questions', 'icon' => 'collection'],
                        ['id' => 'getting-started', 'name' => 'Getting Started', 'icon' => 'rocket'],
                        ['id' => 'account', 'name' => 'Account & Profile', 'icon' => 'user'],
                        ['id' => 'billing', 'name' => 'Billing & Plans', 'icon' => 'credit-card'],
                        ['id' => 'technical', 'name' => 'Technical', 'icon' => 'cog'],
                        ['id' => 'security', 'name' => 'Security & Privacy', 'icon' => 'shield']
                    ],
                    'faqs' => [
                        [
                            'id' => 'faq-1',
                            'category' => 'getting-started',
                            'icon' => 'rocket',
                            'question' => 'How do I get started with the platform?',
                            'answer' => 'Getting started is easy! Simply sign up for a free trial, complete your profile setup, and you\'ll have access to our onboarding wizard. The wizard will guide you through importing your data, inviting team members, and configuring your first workflow. You can also schedule a personalized demo with our team.',
                            'tags' => ['setup', 'onboarding', 'trial'],
                            'link' => '/getting-started',
                            'updatedAt' => '2024-01-15',
                            'views' => 1250
                        ],
                        [
                            'id' => 'faq-2',
                            'category' => 'account',
                            'icon' => 'user',
                            'question' => 'How do I reset my password?',
                            'answer' => 'To reset your password, click the \'Forgot Password?\' link on the login page. Enter your email address, and we\'ll send you a secure reset link. The link expires in 1 hour for security. If you don\'t receive the email, check your spam folder or contact support.',
                            'tags' => ['password', 'login', 'security'],
                            'updatedAt' => '2024-01-10',
                            'views' => 2100
                        ],
                        [
                            'id' => 'faq-3',
                            'category' => 'billing',
                            'icon' => 'credit-card',
                            'question' => 'What payment methods do you accept?',
                            'answer' => 'We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, and bank transfers for annual plans. Enterprise customers can request invoice-based billing with net-30 terms. All payments are processed securely through Stripe.',
                            'tags' => ['payment', 'credit card', 'invoice'],
                            'link' => '/pricing',
                            'updatedAt' => '2024-01-08',
                            'views' => 1850
                        ],
                        [
                            'id' => 'faq-4',
                            'category' => 'technical',
                            'icon' => 'cog',
                            'question' => 'Do you offer API access?',
                            'answer' => 'Yes! All paid plans include full REST API access. Our API documentation includes authentication guides, endpoint references, and code examples in cURL, Python, JavaScript, and PHP. Rate limits vary by plan: 1000 requests/hour for Professional, 5000 for Business, and 20000 for Enterprise.',
                            'tags' => ['api', 'integration', 'developer'],
                            'link' => '/docs/api',
                            'updatedAt' => '2024-01-12',
                            'views' => 980,
                            'codeSnippet' => "curl -X GET https://api.example.com/v1/users \\\n  -H 'Authorization: Bearer YOUR_API_KEY' \\\n  -H 'Content-Type: application/json'"
                        ],
                        [
                            'id' => 'faq-5',
                            'category' => 'security',
                            'icon' => 'shield',
                            'question' => 'How is my data protected?',
                            'answer' => 'We take security seriously. All data is encrypted at rest using AES-256 and in transit using TLS 1.3. We\'re SOC 2 Type II certified, GDPR compliant, and undergo annual third-party penetration testing. Your data is backed up daily to geographically redundant locations.',
                            'tags' => ['encryption', 'security', 'compliance'],
                            'link' => '/security',
                            'updatedAt' => '2024-01-18',
                            'views' => 720
                        ]
                    ],
                    'contactImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop',
                    'mapImage' => 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=600&h=400&fit=crop'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 308,
                'section_key' => 'contactForm',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],


            // Sales Inquiries Section 
            [
                'id' => 309,
                'section_key' => 'salesInquiries',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => [
                        'backgroundColor' => 'bg-indigo-100 dark:bg-indigo-900/30',
                        'borderColor' => 'border-indigo-200 dark:border-indigo-800',
                        'textColor' => 'text-indigo-700 dark:text-indigo-300',
                        'text' => 'Sales Inquiries',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Start Your',
                        'highlightGradient' => 'from-indigo-600 to-purple-600',
                        'highlightedText' => 'Journey',
                        'suffix' => 'with Us'
                    ],
                    'description' => 'Ready to transform your business? Our sales team is here to help you find the perfect plan, answer your questions, and guide you through every step of the buying process.',
                    'stats' => [
                        ['icon' => 'building', 'value' => '15,000+', 'label' => 'Businesses Onboarded'],
                        ['icon' => 'globe', 'value' => '98%', 'label' => 'Customer Retention'],
                        ['icon' => 'trophy', 'value' => '4.9/5', 'label' => 'Sales Satisfaction'],
                        ['icon' => 'trending', 'value' => '3x', 'label' => 'Average ROI']
                    ],
                    'plans' => [
                        [
                            'name' => 'Professional',
                            'icon' => 'rocket',
                            'price' => '99',
                            'billing' => 'month',
                            'description' => 'Perfect for growing businesses',
                            'popular' => false,
                            'ctaText' => 'Start Free Trial',
                            'ctaLink' => '/signup/professional',
                            'features' => [
                                'Up to 500,000 SKUs',
                                '5 user accounts included',
                                'Basic analytics dashboard',
                                'Email support (24/7)',
                                'API access (1,000 calls/day)'
                            ]
                        ],
                        [
                            'name' => 'Business',
                            'icon' => 'office-building',
                            'price' => '299',
                            'billing' => 'month',
                            'description' => 'For scaling enterprises',
                            'popular' => true,
                            'ctaText' => 'Start Free Trial',
                            'ctaLink' => '/signup/business',
                            'features' => [
                                'Unlimited SKUs',
                                'Unlimited users',
                                'Advanced analytics + reports',
                                'Priority phone support',
                                'API access (10,000 calls/day)',
                                'Custom integrations'
                            ]
                        ],
                        [
                            'name' => 'Enterprise',
                            'icon' => 'globe',
                            'price' => 'Custom',
                            'billing' => 'custom',
                            'description' => 'For large organizations',
                            'popular' => false,
                            'ctaText' => 'Contact Sales',
                            'ctaLink' => '/contact-sales',
                            'features' => [
                                'Everything in Business',
                                'Dedicated account manager',
                                'Custom SLAs (99.99% uptime)',
                                'On-premise deployment option',
                                'SAML/SSO authentication',
                                'White-labeling available'
                            ]
                        ]
                    ],
                    'categories' => [
                        ['id' => 'pricing', 'name' => 'Pricing & Plans', 'icon' => 'dollar'],
                        ['id' => 'features', 'name' => 'Features & Capabilities', 'icon' => 'sparkles'],
                        ['id' => 'enterprise', 'name' => 'Enterprise Solutions', 'icon' => 'office-building'],
                        ['id' => 'roi', 'name' => 'ROI & Value', 'icon' => 'chart']
                    ],
                    'faqs' => [
                        [
                            'category' => 'pricing',
                            'icon' => 'dollar',
                            'question' => 'What\'s included in the free trial?',
                            'answer' => 'Our 14-day free trial includes full access to the Professional plan features, including up to 500,000 SKUs, 5 user accounts, API access, and email support. No credit card required to start.',
                            'tags' => ['trial', 'free', 'demo'],
                            'link' => '/pricing'
                        ],
                        [
                            'category' => 'pricing',
                            'icon' => 'credit-card',
                            'question' => 'Can I switch plans at any time?',
                            'answer' => 'Yes, you can upgrade or downgrade your plan at any time from your account dashboard. Changes take effect immediately, and we\'ll prorate the difference for the current billing cycle.',
                            'tags' => ['upgrade', 'downgrade', 'billing'],
                            'link' => '/pricing'
                        ],
                        [
                            'category' => 'enterprise',
                            'icon' => 'office-building',
                            'question' => 'Do you offer custom pricing for enterprise?',
                            'answer' => 'Absolutely! Enterprise plans are tailored to your specific needs including custom user limits, dedicated infrastructure, on-premise deployment, and custom SLAs. Contact our sales team for a personalized quote.',
                            'tags' => ['enterprise', 'custom', 'quote'],
                            'link' => '/contact-sales'
                        ],
                        [
                            'category' => 'features',
                            'icon' => 'sparkles',
                            'question' => 'What integrations are available?',
                            'answer' => 'We offer native integrations with over 50+ tools including Shopify, Magento, Salesforce, SAP, Oracle, and many more. Our REST API also allows for custom integrations with any third-party system.',
                            'tags' => ['integrations', 'api', 'connectors'],
                            'link' => '/integrations'
                        ],
                        [
                            'category' => 'roi',
                            'icon' => 'chart',
                            'question' => 'What kind of ROI can I expect?',
                            'answer' => 'Our customers typically see a 3x ROI within the first year through reduced operational costs, improved inventory accuracy, and fewer stockouts. Use our ROI calculator for a personalized estimate.',
                            'tags' => ['roi', 'savings', 'efficiency'],
                            'link' => '/roi-calculator'
                        ],
                        [
                            'category' => 'pricing',
                            'icon' => 'shield',
                            'question' => 'Is there a contract or cancellation fee?',
                            'answer' => 'Monthly plans have no long-term contract - you can cancel anytime. Annual plans offer a 20% discount with a 12-month commitment but no cancellation fee. Enterprise contracts are custom.',
                            'tags' => ['contract', 'cancel', 'commitment'],
                            'link' => '/terms'
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 310,
                'section_key' => 'salesInquiries',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => [
                        'backgroundColor' => 'bg-cyan-100 dark:bg-cyan-900/30',
                        'borderColor' => 'border-cyan-200 dark:border-cyan-800',
                        'textColor' => 'text-cyan-700 dark:text-cyan-300',
                        'text' => 'Enterprise Sales',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Get a',
                        'highlightGradient' => 'from-cyan-600 to-blue-600',
                        'highlightedText' => 'Custom Quote',
                        'suffix' => 'Tailored to Your Needs'
                    ],
                    'description' => 'Every business is unique. Our sales team will work with you to create a customized solution that fits your specific requirements, budget, and growth goals.',
                    'stats' => [
                        ['icon' => 'building', 'value' => '2,500+', 'label' => 'Enterprise Clients'],
                        ['icon' => 'chart', 'value' => '99.99%', 'label' => 'Uptime SLA'],
                        ['icon' => 'users', 'value' => '24/7', 'label' => 'Priority Support'],
                        ['icon' => 'globe', 'value' => '99%', 'label' => 'Client Retention']
                    ],
                    'plans' => [
                        [
                            'name' => 'Professional',
                            'icon' => 'rocket',
                            'price' => '99',
                            'billing' => 'month',
                            'description' => 'Perfect for growing businesses',
                            'popular' => false,
                            'ctaText' => 'Start Free Trial',
                            'ctaLink' => '/signup/professional',
                            'features' => [
                                'Up to 500,000 SKUs',
                                '5 user accounts included',
                                'Basic analytics dashboard',
                                'Email support (24/7)',
                                'API access (1,000 calls/day)'
                            ]
                        ],
                        [
                            'name' => 'Business',
                            'icon' => 'office-building',
                            'price' => '299',
                            'billing' => 'month',
                            'description' => 'For scaling enterprises',
                            'popular' => true,
                            'ctaText' => 'Start Free Trial',
                            'ctaLink' => '/signup/business',
                            'features' => [
                                'Unlimited SKUs',
                                'Unlimited users',
                                'Advanced analytics + reports',
                                'Priority phone support',
                                'API access (10,000 calls/day)',
                                'Custom integrations'
                            ]
                        ],
                        [
                            'name' => 'Enterprise',
                            'icon' => 'globe',
                            'price' => 'Custom',
                            'billing' => 'custom',
                            'description' => 'For large organizations',
                            'popular' => false,
                            'ctaText' => 'Contact Sales',
                            'ctaLink' => '/contact-sales',
                            'features' => [
                                'Everything in Business',
                                'Dedicated account manager',
                                'Custom SLAs (99.99% uptime)',
                                'On-premise deployment option',
                                'SAML/SSO authentication',
                                'White-labeling available'
                            ]
                        ]
                    ],
                    'enterpriseFeatures' => [
                        ['icon' => 'shield', 'title' => 'Enterprise-Grade Security', 'description' => 'SOC 2 Type II, GDPR compliant, and annual penetration testing'],
                        ['icon' => 'users', 'title' => 'Dedicated Support Team', 'description' => '24/7 priority support with < 1hr response time'],
                        ['icon' => 'chip', 'title' => 'Custom Infrastructure', 'description' => 'Dedicated servers or on-premise deployment options'],
                        ['icon' => 'academic', 'title' => 'Onboarding & Training', 'description' => 'Personalized training sessions for your team'],
                        ['icon' => 'chart', 'title' => 'Advanced Analytics', 'description' => 'Custom dashboards and predictive insights'],
                        ['icon' => 'code', 'title' => 'API & Integrations', 'description' => 'Unlimited API calls and custom integration support']
                    ],
                    'categories' => [
                        ['id' => 'pricing', 'name' => 'Pricing & Plans', 'icon' => 'dollar'],
                        ['id' => 'enterprise', 'name' => 'Enterprise', 'icon' => 'office-building'],
                        ['id' => 'implementation', 'name' => 'Implementation', 'icon' => 'cog'],
                        ['id' => 'support', 'name' => 'Support & SLA', 'icon' => 'support']
                    ],
                    'popularQuestions' => [
                        'What\'s included in Enterprise plan?',
                        'Can I get a custom quote?',
                        'How long does implementation take?',
                        'Do you offer on-premise deployment?'
                    ],
                    'faqs' => [
                        [
                            'id' => 'faq-1',
                            'category' => 'enterprise',
                            'icon' => 'office-building',
                            'question' => 'What\'s included in the Enterprise plan?',
                            'answer' => 'The Enterprise plan includes everything in Business plus dedicated infrastructure, custom SLAs with 99.99% uptime guarantee, a dedicated account manager, 24/7 priority support with <1hr response time, on-premise deployment options, SAML/SSO authentication, white-labeling, and custom training sessions for your team.',
                            'tags' => ['enterprise', 'features', 'included'],
                            'link' => '/enterprise',
                            'views' => 1250,
                            'updatedAt' => '2024-01-15'
                        ],
                        [
                            'id' => 'faq-2',
                            'category' => 'pricing',
                            'icon' => 'dollar',
                            'question' => 'Do you offer custom pricing for Enterprise?',
                            'answer' => 'Yes! Enterprise pricing is fully customized based on your specific requirements including user count, data volume, deployment type, and add-on features. Contact our sales team for a personalized quote tailored to your business needs and budget.',
                            'tags' => ['pricing', 'custom', 'quote', 'enterprise'],
                            'link' => '/contact-sales',
                            'views' => 980,
                            'updatedAt' => '2024-01-20'
                        ],
                        [
                            'id' => 'faq-3',
                            'category' => 'implementation',
                            'icon' => 'cog',
                            'question' => 'How long does enterprise implementation take?',
                            'answer' => 'Implementation timeline varies based on complexity. Standard enterprise deployments take 4-6 weeks, including data migration, integration setup, custom configurations, and team training. We provide a dedicated implementation manager who works with you to create a detailed project plan with clear milestones.',
                            'tags' => ['implementation', 'timeline', 'onboarding'],
                            'link' => '/implementation',
                            'views' => 750,
                            'updatedAt' => '2024-01-10'
                        ],
                        [
                            'id' => 'faq-4',
                            'category' => 'support',
                            'icon' => 'support',
                            'question' => 'What SLAs do you offer for Enterprise?',
                            'answer' => 'Enterprise plans include a custom SLA with 99.99% uptime guarantee, <1 hour response time for critical issues (P1), <4 hours for high-priority issues (P2), and 24/7/365 support coverage. We also provide a dedicated technical account manager who proactively monitors your system health.',
                            'tags' => ['sla', 'uptime', 'support', 'response time'],
                            'link' => '/sla',
                            'views' => 620,
                            'updatedAt' => '2024-01-25'
                        ],
                        [
                            'id' => 'faq-5',
                            'category' => 'pricing',
                            'icon' => 'credit-card',
                            'question' => 'Can I switch from monthly to annual billing?',
                            'answer' => 'Absolutely! You can switch from monthly to annual billing at any time. Annual plans offer a 20% discount compared to monthly billing. The switch takes effect immediately, and we\'ll prorate the remaining time on your current billing cycle.',
                            'tags' => ['billing', 'annual', 'discount'],
                            'views' => 890,
                            'updatedAt' => '2024-01-18'
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 311,
                'section_key' => 'salesInquiries',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'backgroundColor' => 'bg-violet-100 dark:bg-violet-900/30',
                        'borderColor' => 'border-violet-200 dark:border-violet-800',
                        'textColor' => 'text-violet-700 dark:text-violet-300',
                        'text' => 'Enterprise Sales Hub',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Enterprise-Grade',
                        'highlightGradient' => 'from-violet-600 to-purple-600',
                        'highlightedText' => 'Solutions',
                        'suffix' => 'Built for Scale'
                    ],
                    'description' => 'Join industry leaders who trust our platform to power their critical operations. Get a customized solution with enterprise-grade security, dedicated support, and flexible deployment options.',
                    'stats' => [
                        ['icon' => 'building', 'value' => '500+', 'label' => 'Enterprise Clients'],
                        ['icon' => 'chart', 'value' => '99.99%', 'label' => 'Uptime SLA'],
                        ['icon' => 'users', 'value' => '< 1hr', 'label' => 'Response Time'],
                        ['icon' => 'globe', 'value' => '99%', 'label' => 'Renewal Rate']
                    ],
                    'heroImage' => 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&h=400&fit=crop',
                    'testimonials' => [
                        [
                            'name' => 'Sarah Johnson',
                            'title' => 'CTO',
                            'company' => 'TechCorp',
                            'quote' => 'The platform transformed our inventory management. Implementation was smooth and support is exceptional.',
                            'rating' => 5,
                            'image' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
                        ],
                        [
                            'name' => 'Michael Chen',
                            'title' => 'Operations Director',
                            'company' => 'Global Retail',
                            'quote' => 'Scalable, secure, and reliable. Best decision we made for our supply chain.',
                            'rating' => 5,
                            'image' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
                        ],
                        [
                            'name' => 'David Williams',
                            'title' => 'VP of Supply Chain',
                            'company' => 'LogiPro',
                            'quote' => 'The ROI has been outstanding. Our team loves the intuitive interface.',
                            'rating' => 5,
                            'image' => 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop'
                        ]
                    ],
                    'plans' => [
                        [
                            'name' => 'Starter',
                            'icon' => 'rocket',
                            'price' => '49',
                            'billing' => 'month',
                            'description' => 'For small businesses',
                            'popular' => false,
                            'ctaText' => 'Start Free Trial',
                            'ctaLink' => '/signup/starter',
                            'features' => [
                                'Up to 1,000 SKUs',
                                'Up to 5 users',
                                '1 location',
                                'Email support',
                                'Basic reports'
                            ]
                        ],
                        [
                            'name' => 'Professional',
                            'icon' => 'office-building',
                            'price' => '99',
                            'billing' => 'month',
                            'description' => 'For growing businesses',
                            'popular' => true,
                            'ctaText' => 'Start Free Trial',
                            'ctaLink' => '/signup/professional',
                            'features' => [
                                'Up to 10,000 SKUs',
                                'Up to 20 users',
                                'Up to 5 locations',
                                '24/7 email support',
                                'Advanced analytics'
                            ]
                        ],
                        [
                            'name' => 'Enterprise',
                            'icon' => 'globe',
                            'price' => 'Custom',
                            'billing' => 'custom',
                            'description' => 'For large organizations',
                            'popular' => false,
                            'ctaText' => 'Contact Sales',
                            'ctaLink' => '/contact-sales',
                            'features' => [
                                'Unlimited SKUs',
                                'Unlimited users',
                                'Unlimited locations',
                                '24/7 priority support',
                                'Custom reports',
                                'Dedicated account manager'
                            ]
                        ]
                    ],
                    'enterpriseFeatures' => [
                        ['icon' => 'shield', 'title' => 'Enterprise Security', 'description' => 'SOC 2 Type II, GDPR compliant, SSO/SAML'],
                        ['icon' => 'users', 'title' => 'Dedicated Support', 'description' => '24/7 priority support with <1hr response'],
                        ['icon' => 'chip', 'title' => 'Custom Infrastructure', 'description' => 'Dedicated servers or on-premise deployment'],
                        ['icon' => 'academic', 'title' => 'Team Training', 'description' => 'Customized onboarding and training sessions'],
                        ['icon' => 'chart', 'title' => 'Advanced Analytics', 'description' => 'Custom dashboards and predictive insights'],
                        ['icon' => 'code', 'title' => 'Full API Access', 'description' => 'Unlimited API calls + webhooks']
                    ],
                    'categories' => [
                        ['id' => 'pricing', 'name' => 'Pricing & Plans', 'icon' => 'dollar', 'description' => 'Questions about our pricing structure'],
                        ['id' => 'enterprise', 'name' => 'Enterprise', 'icon' => 'office-building', 'description' => 'Enterprise-specific features and solutions'],
                        ['id' => 'implementation', 'name' => 'Implementation', 'icon' => 'cog', 'description' => 'Onboarding and deployment process'],
                        ['id' => 'security', 'name' => 'Security & Compliance', 'icon' => 'shield', 'description' => 'Data protection and certifications']
                    ],
                    'industries' => [
                        ['value' => 'retail', 'label' => 'Retail & E-commerce'],
                        ['value' => 'manufacturing', 'label' => 'Manufacturing'],
                        ['value' => 'healthcare', 'label' => 'Healthcare'],
                        ['value' => 'logistics', 'label' => 'Logistics & Supply Chain'],
                        ['value' => 'technology', 'label' => 'Technology'],
                        ['value' => 'other', 'label' => 'Other']
                    ],
                    'popularQuestions' => [
                        'What\'s included in the Enterprise plan?',
                        'How long does implementation take?',
                        'Do you offer on-premise deployment?',
                        'What security certifications do you have?'
                    ],
                    'faqs' => [
                        [
                            'id' => 'faq-1',
                            'category' => 'enterprise',
                            'icon' => 'office-building',
                            'question' => 'What\'s included in the Enterprise plan?',
                            'answer' => 'The Enterprise plan includes everything in Professional plus unlimited SKUs, users, and locations, dedicated infrastructure, custom SLAs with 99.99% uptime guarantee, a dedicated account manager, 24/7 priority support with <1hr response time, on-premise deployment options, SAML/SSO authentication, white-labeling, and custom training sessions.',
                            'tags' => ['enterprise', 'features', 'included'],
                            'link' => '/enterprise',
                            'views' => 1250,
                            'updatedAt' => '2024-01-15'
                        ],
                        [
                            'id' => 'faq-2',
                            'category' => 'pricing',
                            'icon' => 'dollar',
                            'question' => 'Do you offer custom pricing for Enterprise?',
                            'answer' => 'Yes! Enterprise pricing is fully customized based on your specific requirements including user count, data volume, deployment type, and add-on features. Contact our sales team for a personalized quote tailored to your business needs and budget.',
                            'tags' => ['pricing', 'custom', 'quote'],
                            'link' => '/contact-sales',
                            'views' => 980,
                            'updatedAt' => '2024-01-20'
                        ],
                        [
                            'id' => 'faq-3',
                            'category' => 'implementation',
                            'icon' => 'cog',
                            'question' => 'How long does enterprise implementation take?',
                            'answer' => 'Implementation timeline varies based on complexity. Standard enterprise deployments take 4-6 weeks, including data migration, integration setup, custom configurations, and team training. We provide a dedicated implementation manager who works with you to create a detailed project plan with clear milestones.',
                            'tags' => ['implementation', 'timeline', 'onboarding'],
                            'link' => '/implementation',
                            'views' => 750,
                            'updatedAt' => '2024-01-10'
                        ],
                        [
                            'id' => 'faq-4',
                            'category' => 'security',
                            'icon' => 'shield',
                            'question' => 'What security certifications do you have?',
                            'answer' => 'We maintain SOC 2 Type II certification, are GDPR compliant, and undergo annual third-party penetration testing. All data is encrypted at rest using AES-256 and in transit using TLS 1.3. We also support SAML/SSO for enterprise customers.',
                            'tags' => ['security', 'compliance', 'soc2', 'gdpr'],
                            'link' => '/security',
                            'views' => 890,
                            'updatedAt' => '2024-01-18'
                        ],
                        [
                            'id' => 'faq-5',
                            'category' => 'enterprise',
                            'icon' => 'server',
                            'question' => 'Do you offer on-premise deployment?',
                            'answer' => 'Yes, enterprise customers can choose on-premise deployment within their own infrastructure. We provide full installation support, maintenance packages, and can work with your IT team to ensure seamless integration with existing systems.',
                            'tags' => ['on-premise', 'deployment', 'self-hosted'],
                            'views' => 620,
                            'updatedAt' => '2024-01-25'
                        ]
                    ],
                    'contactImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop',
                    'salesTeamImage' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 312,
                'section_key' => 'salesInquiries',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Support Requests Section 
            [
                'id' => 313,
                'section_key' => 'supportRequests',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => [
                        'backgroundColor' => 'bg-rose-100 dark:bg-rose-900/30',
                        'borderColor' => 'border-rose-200 dark:border-rose-800',
                        'textColor' => 'text-rose-700 dark:text-rose-300',
                        'text' => '24/7 Support',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'We\'re Here to',
                        'highlightGradient' => 'from-rose-600 to-pink-600',
                        'highlightedText' => 'Help You',
                        'suffix' => 'Every Step of the Way'
                    ],
                    'description' => 'Need assistance? Our dedicated support team is available around the clock to help you resolve issues, answer questions, and ensure your success with our platform.',
                    'stats' => [
                        ['icon' => 'users', 'value' => '50+', 'label' => 'Support Agents'],
                        ['icon' => 'clock', 'value' => '< 2hrs', 'label' => 'Avg Response Time'],
                        ['icon' => 'chat', 'value' => '98%', 'label' => 'Satisfaction Rate'],
                        ['icon' => 'globe', 'value' => '24/7', 'label' => 'Global Coverage']
                    ],
                    'supportChannels' => [
                        [
                            'icon' => 'chat',
                            'title' => 'Live Chat',
                            'description' => 'Get instant answers from our support team',
                            'availability' => 'Available 24/7 for all plans',
                            'buttonText' => 'Start Chat',
                            'link' => '/support/chat'
                        ],
                        [
                            'icon' => 'mail',
                            'title' => 'Email Support',
                            'description' => 'Send us a message and we\'ll respond promptly',
                            'availability' => 'Response within 2 hours',
                            'buttonText' => 'Send Email',
                            'link' => '/support/email'
                        ],
                        [
                            'icon' => 'phone',
                            'title' => 'Phone Support',
                            'description' => 'Speak directly with a support specialist',
                            'availability' => 'Available for Business & Enterprise plans',
                            'buttonText' => 'Call Now',
                            'link' => '/support/phone'
                        ]
                    ],
                    'categories' => [
                        ['id' => 'getting-started', 'name' => 'Getting Started', 'icon' => 'rocket'],
                        ['id' => 'account', 'name' => 'Account Management', 'icon' => 'user'],
                        ['id' => 'technical', 'name' => 'Technical Issues', 'icon' => 'cog'],
                        ['id' => 'billing', 'name' => 'Billing & Payments', 'icon' => 'credit-card']
                    ],
                    'faqs' => [
                        [
                            'category' => 'getting-started',
                            'icon' => 'rocket',
                            'question' => 'How do I create a support ticket?',
                            'answer' => 'You can create a support ticket by clicking the \'Submit Request\' button above, or by emailing support@example.com. Please include your account email, a detailed description of the issue, and any relevant screenshots. Enterprise customers can also use the priority support portal.',
                            'tags' => ['ticket', 'support', 'request'],
                            'link' => '/support/request'
                        ],
                        [
                            'category' => 'technical',
                            'icon' => 'cog',
                            'question' => 'What information should I include in my support request?',
                            'answer' => 'To help us resolve your issue quickly, please include: your account email, steps to reproduce the issue, any error messages you\'re seeing, screenshots or screen recordings if possible, and your browser/device information. The more detail you provide, the faster we can assist you.',
                            'tags' => ['troubleshooting', 'information', 'details'],
                            'link' => '/support/best-practices'
                        ],
                        [
                            'category' => 'account',
                            'icon' => 'user',
                            'question' => 'How do I reset my password?',
                            'answer' => 'Click \'Forgot Password\' on the login page and enter your email address. You\'ll receive a secure reset link within minutes. The link expires in 1 hour for security. If you don\'t receive the email, check your spam folder or contact support.',
                            'tags' => ['password', 'reset', 'login'],
                            'link' => '/account/reset'
                        ],
                        [
                            'category' => 'billing',
                            'icon' => 'credit-card',
                            'question' => 'How do I update my billing information?',
                            'answer' => 'Go to Settings > Billing in your account dashboard. You can update your payment method, view invoices, and change your billing address. All changes are encrypted and secure. Enterprise customers can request invoice-based billing.',
                            'tags' => ['billing', 'payment', 'invoice'],
                            'link' => '/billing'
                        ],
                        [
                            'category' => 'technical',
                            'icon' => 'cog',
                            'question' => 'What is your average response time?',
                            'answer' => 'Our average response time is under 2 hours for standard support requests. Enterprise customers receive priority support with responses typically within 30 minutes. Live chat offers immediate responses during business hours, and our knowledge base is available 24/7 for self-service.',
                            'tags' => ['response', 'sla', 'time'],
                            'link' => '/sla'
                        ]
                    ],
                    'showGuarantee' => true,
                    'guaranteeText' => 'All support requests receive a response within 24 hours. Enterprise customers get priority 1-hour response.',
                    'contactText' => 'Can\'t find what you\'re looking for? Submit a support request and our team will assist you.',
                    'contactButtonText' => 'Submit Request',
                    'contactLink' => '/support/request'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 314,
                'section_key' => 'supportRequests',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => [
                        'backgroundColor' => 'bg-orange-100 dark:bg-orange-900/30',
                        'borderColor' => 'border-orange-200 dark:border-orange-800',
                        'textColor' => 'text-orange-700 dark:text-orange-300',
                        'text' => 'Priority Support',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Get the',
                        'highlightGradient' => 'from-orange-600 to-amber-600',
                        'highlightedText' => 'Help You Need',
                        'suffix' => 'Fast'
                    ],
                    'description' => 'Our expert support team is ready to assist you with any technical issues, questions, or concerns. Submit a ticket, browse our knowledge base, or connect with us directly.',
                    'stats' => [
                        ['icon' => 'users', 'value' => '100+', 'label' => 'Support Engineers'],
                        ['icon' => 'clock', 'value' => '< 30min', 'label' => 'Avg First Response'],
                        ['icon' => 'chat', 'value' => '99%', 'label' => 'Customer Satisfaction'],
                        ['icon' => 'globe', 'value' => '24/7/365', 'label' => 'Global Coverage']
                    ],
                    'supportChannels' => [
                        [
                            'icon' => 'chat',
                            'title' => 'Live Chat',
                            'description' => 'Instant messaging with support agents',
                            'availability' => '24/7 for all plans',
                            'buttonText' => 'Start Chat',
                            'link' => '/support/chat'
                        ],
                        [
                            'icon' => 'mail',
                            'title' => 'Email Support',
                            'description' => 'Detailed responses within 30 minutes',
                            'availability' => '24/7 response',
                            'buttonText' => 'Send Email',
                            'link' => '/support/email'
                        ],
                        [
                            'icon' => 'phone',
                            'title' => 'Phone Support',
                            'description' => 'Speak directly with a specialist',
                            'availability' => 'Business & Enterprise plans',
                            'buttonText' => 'Call Now',
                            'link' => '/support/phone'
                        ]
                    ],
                    'ticketCategories' => [
                        ['value' => 'technical', 'label' => 'Technical Issue'],
                        ['value' => 'account', 'label' => 'Account Management'],
                        ['value' => 'billing', 'label' => 'Billing & Payments'],
                        ['value' => 'feature', 'label' => 'Feature Request'],
                        ['value' => 'bug', 'label' => 'Bug Report'],
                        ['value' => 'other', 'label' => 'Other']
                    ],
                    'categories' => [
                        ['id' => 'technical', 'name' => 'Technical Issues', 'icon' => 'cog'],
                        ['id' => 'account', 'name' => 'Account Help', 'icon' => 'user'],
                        ['id' => 'billing', 'name' => 'Billing Support', 'icon' => 'credit-card'],
                        ['id' => 'troubleshooting', 'name' => 'Troubleshooting', 'icon' => 'wrench']
                    ],
                    'popularQuestions' => [
                        'How do I reset my password?',
                        'Why am I getting a 500 error?',
                        'How do I update my payment method?',
                        'What\'s your refund policy?'
                    ],
                    'faqs' => [
                        [
                            'id' => 'faq-1',
                            'category' => 'technical',
                            'icon' => 'cog',
                            'question' => 'Why am I getting a 500 server error?',
                            'answer' => 'A 500 error typically indicates a temporary server issue. Please try refreshing the page after a few minutes. If the issue persists, clear your browser cache and cookies. If you continue to experience the error, please submit a ticket with the timestamp and any steps that led to the error.',
                            'tags' => ['500', 'error', 'server'],
                            'link' => '/docs/500-error',
                            'views' => 1250,
                            'updatedAt' => '2024-01-15'
                        ],
                        [
                            'id' => 'faq-2',
                            'category' => 'account',
                            'icon' => 'user',
                            'question' => 'How do I reset my password?',
                            'answer' => 'Click \'Forgot Password\' on the login page and enter your email address. You\'ll receive a secure reset link within minutes. The link expires in 1 hour. If you don\'t receive the email, check your spam folder or contact support to verify your email address.',
                            'tags' => ['password', 'reset', 'login'],
                            'link' => '/account/reset',
                            'views' => 980,
                            'updatedAt' => '2024-01-20'
                        ],
                        [
                            'id' => 'faq-3',
                            'category' => 'billing',
                            'icon' => 'credit-card',
                            'question' => 'How do I update my payment method?',
                            'answer' => 'Go to Settings > Billing in your account dashboard. Click \'Update Payment Method\' to add a new card or change your billing address. All information is encrypted and secure. Enterprise customers can contact their account manager for invoice-based billing.',
                            'tags' => ['payment', 'billing', 'credit card'],
                            'link' => '/billing',
                            'views' => 750,
                            'updatedAt' => '2024-01-10'
                        ],
                        [
                            'id' => 'faq-4',
                            'category' => 'troubleshooting',
                            'icon' => 'wrench',
                            'question' => 'The dashboard is loading slowly. What can I do?',
                            'answer' => 'Try these steps: 1) Clear your browser cache, 2) Disable browser extensions, 3) Check your internet connection, 4) Try a different browser. If the issue persists, check our status page for any ongoing incidents or submit a ticket with a HAR file of the slow request.',
                            'tags' => ['performance', 'slow', 'loading'],
                            'link' => '/status',
                            'views' => 620,
                            'updatedAt' => '2024-01-25'
                        ],
                        [
                            'id' => 'faq-5',
                            'category' => 'technical',
                            'icon' => 'cog',
                            'question' => 'What\'s your refund policy?',
                            'answer' => 'We offer a 14-day money-back guarantee on all monthly plans. Annual plans are non-refundable but can be cancelled at any time to prevent renewal. Enterprise contracts are custom and negotiated individually. Contact billing@example.com for refund requests.',
                            'tags' => ['refund', 'money back', 'cancel'],
                            'link' => '/refund-policy',
                            'views' => 890,
                            'updatedAt' => '2024-01-18'
                        ]
                    ],
                    'showGuarantee' => true,
                    'guaranteeText' => 'All support tickets receive a response within 30 minutes during business hours. Enterprise customers get priority 24/7 support with <15min response.',
                    'contactText' => 'Need immediate assistance? Our support team is ready to help.',
                    'contactButtonText' => 'Contact Support',
                    'contactLink' => '/support/chat'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 315,
                'section_key' => 'supportRequests',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'backgroundColor' => 'bg-teal-100 dark:bg-teal-900/30',
                        'borderColor' => 'border-teal-200 dark:border-teal-800',
                        'textColor' => 'text-teal-700 dark:text-teal-300',
                        'text' => 'Enterprise Support Hub',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'World-Class',
                        'highlightGradient' => 'from-teal-600 to-cyan-600',
                        'highlightedText' => 'Support',
                        'suffix' => 'When You Need It Most'
                    ],
                    'description' => 'Get the help you need with our multi-channel support system. Submit detailed tickets, browse our knowledge base, or track existing requests — all in one place.',
                    'stats' => [
                        ['icon' => 'users', 'value' => '200+', 'label' => 'Support Engineers'],
                        ['icon' => 'clock', 'value' => '< 15min', 'label' => 'Enterprise Response'],
                        ['icon' => 'chat', 'value' => '99.5%', 'label' => 'Satisfaction Rate'],
                        ['icon' => 'globe', 'value' => '24/7/365', 'label' => 'Global Coverage']
                    ],
                    'heroImage' => 'https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=1200&h=400&fit=crop',
                    'slas' => [
                        ['plan' => 'Starter', 'responseTime' => '24 hours', 'description' => 'Business hours support'],
                        ['plan' => 'Professional', 'responseTime' => '4 hours', 'description' => 'Priority support'],
                        ['plan' => 'Enterprise', 'responseTime' => '1 hour', 'description' => '24/7 priority support']
                    ],
                    'supportChannels' => [
                        [
                            'icon' => 'chat',
                            'title' => 'Live Chat',
                            'description' => 'Instant messaging with support agents',
                            'availability' => '24/7 for all plans',
                            'buttonText' => 'Start Chat',
                            'link' => '/support/chat',
                            'image' => 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=400&h=300&fit=crop'
                        ],
                        [
                            'icon' => 'mail',
                            'title' => 'Email Support',
                            'description' => 'Detailed responses within SLA',
                            'availability' => '24/7 response',
                            'buttonText' => 'Send Email',
                            'link' => '/support/email',
                            'image' => 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=400&h=300&fit=crop'
                        ],
                        [
                            'icon' => 'phone',
                            'title' => 'Phone Support',
                            'description' => 'Speak directly with a specialist',
                            'availability' => 'Enterprise plans only',
                            'buttonText' => 'Call Now',
                            'link' => '/support/phone',
                            'image' => 'https://images.unsplash.com/photo-1557425493-6f90ae4659fc?w=400&h=300&fit=crop'
                        ]
                    ],
                    'ticketCategories' => [
                        ['value' => 'technical', 'label' => 'Technical Issue'],
                        ['value' => 'account', 'label' => 'Account Management'],
                        ['value' => 'billing', 'label' => 'Billing & Payments'],
                        ['value' => 'feature', 'label' => 'Feature Request'],
                        ['value' => 'bug', 'label' => 'Bug Report'],
                        ['value' => 'security', 'label' => 'Security Concern'],
                        ['value' => 'other', 'label' => 'Other']
                    ],
                    'subcategories' => [
                        'technical' => [
                            ['value' => 'api', 'label' => 'API Issues'],
                            ['value' => 'integration', 'label' => 'Integration Problems'],
                            ['value' => 'performance', 'label' => 'Performance Issues'],
                            ['value' => 'error', 'label' => 'Error Messages']
                        ],
                        'account' => [
                            ['value' => 'login', 'label' => 'Login Issues'],
                            ['value' => 'permissions', 'label' => 'Permissions & Access'],
                            ['value' => 'profile', 'label' => 'Profile Updates'],
                            ['value' => '2fa', 'label' => 'Two-Factor Authentication']
                        ],
                        'billing' => [
                            ['value' => 'invoice', 'label' => 'Invoicing Questions'],
                            ['value' => 'payment', 'label' => 'Payment Issues'],
                            ['value' => 'refund', 'label' => 'Refund Requests'],
                            ['value' => 'upgrade', 'label' => 'Plan Upgrades']
                        ]
                    ],
                    'knowledgeBaseArticles' => [
                        ['icon' => 'cog', 'title' => 'Troubleshooting Common Issues', 'description' => 'Step-by-step guide to resolve the most frequent technical problems', 'readTime' => 5, 'link' => '/kb/troubleshooting'],
                        ['icon' => 'user', 'title' => 'Account Management Guide', 'description' => 'Everything you need to know about managing your account settings', 'readTime' => 8, 'link' => '/kb/account-guide'],
                        ['icon' => 'credit-card', 'title' => 'Billing & Payments FAQ', 'description' => 'Answers to common billing questions and payment issues', 'readTime' => 6, 'link' => '/kb/billing-faq'],
                        ['icon' => 'shield', 'title' => 'Security Best Practices', 'description' => 'How to keep your account and data secure', 'readTime' => 7, 'link' => '/kb/security']
                    ],
                    'categories' => [
                        ['id' => 'technical', 'name' => 'Technical Issues', 'icon' => 'cog', 'description' => 'API, integration, and platform errors'],
                        ['id' => 'account', 'name' => 'Account Help', 'icon' => 'user', 'description' => 'Login, permissions, and profile settings'],
                        ['id' => 'billing', 'name' => 'Billing Support', 'icon' => 'credit-card', 'description' => 'Invoices, payments, and refunds'],
                        ['id' => 'troubleshooting', 'name' => 'Troubleshooting', 'icon' => 'wrench', 'description' => 'Common issues and solutions']
                    ],
                    'popularQuestions' => [
                        'How do I reset my password?',
                        'Why is my API returning a 401 error?',
                        'How do I upgrade my plan?',
                        'What\'s your refund policy?'
                    ],
                    'faqs' => [
                        [
                            'id' => 'faq-1',
                            'category' => 'technical',
                            'icon' => 'cog',
                            'question' => 'Why is my API returning a 401 error?',
                            'answer' => 'A 401 Unauthorized error means your API key is invalid or missing. Please check that you\'re including a valid API key in the Authorization header. If you\'ve regenerated your API key recently, update it in your application. Contact support if the issue persists.',
                            'tags' => ['api', '401', 'authentication'],
                            'link' => '/docs/api-auth',
                            'views' => 1250,
                            'updatedAt' => '2024-01-15'
                        ],
                        [
                            'id' => 'faq-2',
                            'category' => 'account',
                            'icon' => 'user',
                            'question' => 'How do I reset my password?',
                            'answer' => 'Click \'Forgot Password\' on the login page and enter your email address. You\'ll receive a secure reset link within minutes. The link expires in 1 hour. If you don\'t receive the email, check your spam folder or contact support to verify your email address.',
                            'tags' => ['password', 'reset', 'login'],
                            'link' => '/account/reset',
                            'views' => 980,
                            'updatedAt' => '2024-01-20'
                        ],
                        [
                            'id' => 'faq-3',
                            'category' => 'billing',
                            'icon' => 'credit-card',
                            'question' => 'How do I upgrade my plan?',
                            'answer' => 'Go to Settings > Billing in your account dashboard. Click \'Change Plan\' to view available plans and select the one that fits your needs. Upgrades take effect immediately and we\'ll prorate the difference. Downgrades take effect at the next billing cycle.',
                            'tags' => ['upgrade', 'plan', 'billing'],
                            'link' => '/billing',
                            'views' => 750,
                            'updatedAt' => '2024-01-10'
                        ],
                        [
                            'id' => 'faq-4',
                            'category' => 'troubleshooting',
                            'icon' => 'wrench',
                            'question' => 'What\'s your refund policy?',
                            'answer' => 'We offer a 14-day money-back guarantee on all monthly plans. Annual plans are non-refundable but can be cancelled at any time to prevent renewal. Enterprise contracts are custom and negotiated individually. Contact billing@example.com for refund requests.',
                            'tags' => ['refund', 'money back', 'cancel'],
                            'link' => '/refund-policy',
                            'views' => 890,
                            'updatedAt' => '2024-01-18'
                        ],
                        [
                            'id' => 'faq-5',
                            'category' => 'technical',
                            'icon' => 'cog',
                            'question' => 'How do I enable Two-Factor Authentication?',
                            'answer' => 'Go to Security Settings in your account dashboard. Click \'Enable 2FA\' and scan the QR code with your authenticator app (Google Authenticator, Authy, etc.). Enter the verification code to confirm. We recommend saving backup codes in a secure location.',
                            'tags' => ['2fa', 'security', 'authentication'],
                            'link' => '/security/2fa',
                            'views' => 620,
                            'updatedAt' => '2024-01-25'
                        ]
                    ],
                    'contactImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop',
                    'supportTeamImage' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop',
                    'showGuarantee' => true,
                    'guaranteeText' => 'All support tickets receive a response within SLA timeframe. Enterprise customers get priority 1-hour response.',
                    'contactText' => 'Need immediate assistance? Our support team is ready to help 24/7.',
                    'contactButtonText' => 'Contact Support',
                    'contactLink' => '/support/chat'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 316,
                'section_key' => 'supportRequests',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Partner Inquiries Section
            [
                'id' => 317,
                'section_key' => 'partnerInquiries',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => [
                        'backgroundColor' => 'bg-amber-100 dark:bg-amber-900/30',
                        'borderColor' => 'border-amber-200 dark:border-amber-800',
                        'textColor' => 'text-amber-700 dark:text-amber-300',
                        'text' => 'Partner Program',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Grow Together',
                        'highlightGradient' => 'from-amber-600 to-yellow-600',
                        'highlightedText' => 'Become a Partner',
                        'suffix' => 'Join Our Ecosystem'
                    ],
                    'description' => 'Join our partner network and unlock new revenue streams, access exclusive resources, and collaborate with industry leaders. Together, we\'ll build something extraordinary.',
                    'stats' => [
                        ['icon' => 'users', 'value' => '500+', 'label' => 'Active Partners'],
                        ['icon' => 'globe', 'value' => '40+', 'label' => 'Countries'],
                        ['icon' => 'chart', 'value' => '200%', 'label' => 'Avg Partner Growth'],
                        ['icon' => 'trophy', 'value' => '98%', 'label' => 'Partner Satisfaction']
                    ],
                    'partnerTypes' => [
                        [
                            'name' => 'Solution Partner',
                            'icon' => 'chip',
                            'description' => 'Integrate our platform into your solutions',
                            'ctaText' => 'Learn More',
                            'ctaLink' => '/partners/solution',
                            'features' => [
                                'Technical integration support',
                                'Co-marketing opportunities',
                                'Access to beta features',
                                'Dedicated partner manager'
                            ]
                        ],
                        [
                            'name' => 'Reseller Partner',
                            'icon' => 'shopping-cart',
                            'description' => 'Sell our platform to your customers',
                            'ctaText' => 'Join Program',
                            'ctaLink' => '/partners/reseller',
                            'features' => [
                                'Competitive commission rates',
                                'Sales enablement resources',
                                'Demo environment access',
                                'Priority support'
                            ]
                        ],
                        [
                            'name' => 'Technology Partner',
                            'icon' => 'code',
                            'description' => 'Build custom integrations and apps',
                            'ctaText' => 'Get Started',
                            'ctaLink' => '/partners/technology',
                            'features' => [
                                'API documentation',
                                'Sandbox environment',
                                'Technical certification',
                                'List on marketplace'
                            ]
                        ]
                    ],
                    'benefits' => [
                        ['icon' => 'cash', 'title' => 'Revenue Share', 'description' => 'Competitive commission rates'],
                        ['icon' => 'academic', 'title' => 'Training & Certification', 'description' => 'Free partner training'],
                        ['icon' => 'globe', 'title' => 'Global Reach', 'description' => 'Access to new markets'],
                        ['icon' => 'support', 'title' => 'Priority Support', 'description' => 'Dedicated partner support']
                    ],
                    'categories' => [
                        ['id' => 'program', 'name' => 'Program Overview', 'icon' => 'info'],
                        ['id' => 'benefits', 'name' => 'Benefits & Rewards', 'icon' => 'gift'],
                        ['id' => 'requirements', 'name' => 'Requirements', 'icon' => 'clipboard'],
                        ['id' => 'process', 'name' => 'Application Process', 'icon' => 'document']
                    ],
                    'faqs' => [
                        [
                            'id' => 'faq-1',
                            'category' => 'program',
                            'icon' => 'info',
                            'question' => 'What types of partners do you work with?',
                            'answer' => 'We work with three main types of partners: Solution Partners who integrate our platform into their offerings, Reseller Partners who sell our platform to their customers, and Technology Partners who build custom integrations and apps on our API. Each program has tailored benefits and requirements.',
                            'tags' => ['partner types', 'programs', 'categories'],
                            'link' => '/partners/programs',
                            'views' => 1250,
                            'updatedAt' => '2024-01-15'
                        ],
                        [
                            'id' => 'faq-2',
                            'category' => 'benefits',
                            'icon' => 'gift',
                            'question' => 'What are the benefits of becoming a partner?',
                            'answer' => 'Partners receive competitive revenue sharing, free technical training and certification, access to co-marketing opportunities, dedicated partner manager support, early access to new features, and listing in our partner directory. Top performers also receive special recognition and incentives.',
                            'tags' => ['benefits', 'rewards', 'incentives'],
                            'link' => '/partners/benefits',
                            'views' => 980,
                            'updatedAt' => '2024-01-20'
                        ],
                        [
                            'id' => 'faq-3',
                            'category' => 'requirements',
                            'icon' => 'clipboard',
                            'question' => 'What are the requirements to become a partner?',
                            'answer' => 'Requirements vary by partner type. Generally, we look for established businesses with relevant industry experience, technical capability (for Solution and Technology partners), customer base alignment, and commitment to quality. All partners must complete our onboarding program and sign a partner agreement.',
                            'tags' => ['requirements', 'eligibility', 'criteria'],
                            'link' => '/partners/requirements',
                            'views' => 750,
                            'updatedAt' => '2024-01-10'
                        ],
                        [
                            'id' => 'faq-4',
                            'category' => 'process',
                            'icon' => 'document',
                            'question' => 'How do I apply to become a partner?',
                            'answer' => 'Click \'Apply Now\' above to fill out our partner application form. Our partner team will review your application within 5-7 business days. If approved, you\'ll be invited to join our onboarding program, which includes training sessions, certification, and access to partner resources.',
                            'tags' => ['application', 'process', 'onboarding'],
                            'link' => '/partners/apply',
                            'views' => 890,
                            'updatedAt' => '2024-01-18'
                        ],
                        [
                            'id' => 'faq-5',
                            'category' => 'program',
                            'icon' => 'info',
                            'question' => 'Is there a cost to join the partner program?',
                            'answer' => 'There is no cost to apply or join our partner program. We invest in your success through free training, resources, and support. Revenue sharing is based on successful referrals or resales. Some premium benefits or certifications may have associated costs, but these are optional.',
                            'tags' => ['cost', 'free', 'investment'],
                            'views' => 620,
                            'updatedAt' => '2024-01-25'
                        ]
                    ],
                    'showGuarantee' => true,
                    'guaranteeText' => 'Join our partner network and receive dedicated support, training, and competitive commission rates',
                    'contactText' => 'Ready to become a partner? Join our growing network of partners today.',
                    'contactButtonText' => 'Apply Now',
                    'contactLink' => '/partner/apply'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 318,
                'section_key' => 'partnerInquiries',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => [
                        'backgroundColor' => 'bg-emerald-100 dark:bg-emerald-900/30',
                        'borderColor' => 'border-emerald-200 dark:border-emerald-800',
                        'textColor' => 'text-emerald-700 dark:text-emerald-300',
                        'text' => 'Partner Network',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Join Our',
                        'highlightGradient' => 'from-emerald-600 to-teal-600',
                        'highlightedText' => 'Partner Ecosystem',
                        'suffix' => 'Grow With Us'
                    ],
                    'description' => 'Become a certified partner and unlock new revenue streams, access exclusive resources, and collaborate with industry leaders. Together, we\'ll build something extraordinary.',
                    'stats' => [
                        ['icon' => 'users', 'value' => '1,000+', 'label' => 'Global Partners'],
                        ['icon' => 'globe', 'value' => '50+', 'label' => 'Countries'],
                        ['icon' => 'chart', 'value' => '250%', 'label' => 'Avg Partner Growth'],
                        ['icon' => 'trophy', 'value' => '99%', 'label' => 'Partner Satisfaction']
                    ],
                    'partnerLevels' => [
                        [
                            'name' => 'Registered',
                            'icon' => 'user-add',
                            'commission' => '10%',
                            'description' => 'Entry-level partnership',
                            'featured' => false,
                            'ctaText' => 'Get Started',
                            'ctaLink' => '/partners/registered',
                            'features' => [
                                'Basic training access',
                                'Partner directory listing',
                                'Email support',
                                'Marketing collateral',
                                'Quarterly business reviews'
                            ]
                        ],
                        [
                            'name' => 'Certified',
                            'icon' => 'badge',
                            'commission' => '15%',
                            'description' => 'Verified expertise',
                            'featured' => true,
                            'ctaText' => 'Apply Now',
                            'ctaLink' => '/partners/certified',
                            'features' => [
                                'All Registered benefits',
                                'Enhanced commission rates',
                                'Dedicated partner manager',
                                'Co-marketing opportunities',
                                'Priority support',
                                'Early access to features'
                            ]
                        ],
                        [
                            'name' => 'Premier',
                            'icon' => 'star',
                            'commission' => '20%',
                            'description' => 'Top-tier partnership',
                            'featured' => false,
                            'ctaText' => 'Contact Sales',
                            'ctaLink' => '/partners/premier',
                            'features' => [
                                'All Certified benefits',
                                'Maximum commission rates',
                                'Strategic account planning',
                                'Joint go-to-market programs',
                                'Executive business reviews',
                                'Custom solution development'
                            ]
                        ]
                    ],
                    'partnerTypes' => [
                        [
                            'name' => 'Implementation Partner',
                            'icon' => 'cog',
                            'description' => 'Help customers deploy and optimize our platform',
                            'ctaText' => 'Learn More',
                            'ctaLink' => '/partners/implementation',
                            'features' => [
                                'Technical certification',
                                'Implementation methodology',
                                'Sandbox environment',
                                'Partner rewards'
                            ]
                        ],
                        [
                            'name' => 'Technology Partner',
                            'icon' => 'code',
                            'description' => 'Build integrations and apps on our platform',
                            'ctaText' => 'Get Started',
                            'ctaLink' => '/partners/technology',
                            'features' => [
                                'API documentation',
                                'Developer sandbox',
                                'Co-marketing support',
                                'Marketplace listing'
                            ]
                        ],
                        [
                            'name' => 'Reseller Partner',
                            'icon' => 'shopping-cart',
                            'description' => 'Sell our platform to your customer base',
                            'ctaText' => 'Join Program',
                            'ctaLink' => '/partners/reseller',
                            'features' => [
                                'Competitive margins',
                                'Sales enablement',
                                'Demo environment',
                                'Deal registration'
                            ]
                        ]
                    ],
                    'benefits' => [
                        ['icon' => 'cash', 'title' => 'Revenue Share', 'description' => 'Competitive commission rates up to 20%'],
                        ['icon' => 'academic', 'title' => 'Free Training', 'description' => 'Comprehensive certification programs'],
                        ['icon' => 'globe', 'title' => 'Global Reach', 'description' => 'Access to international markets'],
                        ['icon' => 'support', 'title' => 'Priority Support', 'description' => 'Dedicated partner support team']
                    ],
                    'categories' => [
                        ['id' => 'program', 'name' => 'Program Details', 'icon' => 'info'],
                        ['id' => 'benefits', 'name' => 'Benefits & Rewards', 'icon' => 'gift'],
                        ['id' => 'requirements', 'name' => 'Requirements', 'icon' => 'clipboard'],
                        ['id' => 'process', 'name' => 'Application Process', 'icon' => 'document']
                    ],
                    'popularQuestions' => [
                        'What are the partner requirements?',
                        'How much commission can I earn?',
                        'How long does the application take?',
                        'What training is provided?'
                    ],
                    'countries' => [
                        ['value' => 'US', 'label' => 'United States'],
                        ['value' => 'CA', 'label' => 'Canada'],
                        ['value' => 'UK', 'label' => 'United Kingdom'],
                        ['value' => 'AU', 'label' => 'Australia'],
                        ['value' => 'DE', 'label' => 'Germany'],
                        ['value' => 'FR', 'label' => 'France'],
                        ['value' => 'JP', 'label' => 'Japan'],
                        ['value' => 'SG', 'label' => 'Singapore']
                    ],
                    'faqs' => [
                        [
                            'id' => 'faq-1',
                            'category' => 'program',
                            'icon' => 'info',
                            'question' => 'What are the requirements to become a partner?',
                            'answer' => 'Requirements vary by partner level. Registered partners need a registered business, relevant industry experience, and agreement to partner terms. Certified partners require additional training completion and reference customers. Premier partners must demonstrate proven success and meet revenue targets.',
                            'tags' => ['requirements', 'eligibility', 'criteria'],
                            'link' => '/partners/requirements',
                            'views' => 1250,
                            'updatedAt' => '2024-01-15'
                        ],
                        [
                            'id' => 'faq-2',
                            'category' => 'benefits',
                            'icon' => 'gift',
                            'question' => 'How much commission can I earn?',
                            'answer' => 'Commission rates range from 10% to 20% based on your partner level. Registered partners earn 10%, Certified partners earn 15%, and Premier partners earn 20%. Additional bonuses are available for exceeding sales targets and referring enterprise deals.',
                            'tags' => ['commission', 'revenue', 'earnings'],
                            'link' => '/partners/commission',
                            'views' => 980,
                            'updatedAt' => '2024-01-20'
                        ],
                        [
                            'id' => 'faq-3',
                            'category' => 'process',
                            'icon' => 'document',
                            'question' => 'How long does the application process take?',
                            'answer' => 'Initial application review takes 5-7 business days. Once approved, you\'ll receive access to our partner portal and onboarding materials. The full onboarding process, including training and certification, typically takes 2-4 weeks depending on your availability.',
                            'tags' => ['timeline', 'process', 'onboarding'],
                            'link' => '/partners/process',
                            'views' => 750,
                            'updatedAt' => '2024-01-10'
                        ],
                        [
                            'id' => 'faq-4',
                            'category' => 'requirements',
                            'icon' => 'clipboard',
                            'question' => 'What training is provided to partners?',
                            'answer' => 'We provide comprehensive training including product certification, sales training, technical implementation workshops, and ongoing webinars. All training materials are available on-demand through our partner portal. Certified partners receive additional advanced training and certification.',
                            'tags' => ['training', 'certification', 'education'],
                            'link' => '/partners/training',
                            'views' => 890,
                            'updatedAt' => '2024-01-18'
                        ],
                        [
                            'id' => 'faq-5',
                            'category' => 'program',
                            'icon' => 'info',
                            'question' => 'Is there a cost to join the partner program?',
                            'answer' => 'There is no cost to apply or join our partner program. We invest in your success through free training, resources, and support. Some premium certifications or exclusive events may have associated costs, but these are optional and provide additional value.',
                            'tags' => ['cost', 'free', 'investment'],
                            'views' => 620,
                            'updatedAt' => '2024-01-25'
                        ]
                    ],
                    'showGuarantee' => true,
                    'guaranteeText' => 'Join our partner network and receive dedicated support, training, and competitive commission rates',
                    'contactText' => 'Ready to become a partner? Join our growing network of partners today.',
                    'contactButtonText' => 'Apply Now',
                    'contactLink' => '/partner/apply'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 319,
                'section_key' => 'partnerInquiries',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'backgroundColor' => 'bg-indigo-100 dark:bg-indigo-900/30',
                        'borderColor' => 'border-indigo-200 dark:border-indigo-800',
                        'textColor' => 'text-indigo-700 dark:text-indigo-300',
                        'text' => 'Partner Ecosystem',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Accelerate Your',
                        'highlightGradient' => 'from-indigo-600 to-purple-600',
                        'highlightedText' => 'Growth',
                        'suffix' => 'as a Partner'
                    ],
                    'description' => 'Join our global partner network and unlock new revenue streams, access exclusive resources, and collaborate with industry leaders. Together, we\'ll build something extraordinary.',
                    'stats' => [
                        ['icon' => 'users', 'value' => '2,500+', 'label' => 'Global Partners'],
                        ['icon' => 'globe', 'value' => '60+', 'label' => 'Countries'],
                        ['icon' => 'chart', 'value' => '300%', 'label' => 'Avg Partner Growth'],
                        ['icon' => 'trophy', 'value' => '99%', 'label' => 'Partner Satisfaction']
                    ],
                    'heroImage' => 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&h=400&fit=crop',
                    'partnerLevels' => [
                        [
                            'name' => 'Registered',
                            'icon' => 'user-add',
                            'commission' => '10%',
                            'description' => 'Entry-level partnership with essential benefits',
                            'featured' => false,
                            'ctaText' => 'Get Started',
                            'ctaLink' => '/partners/registered',
                            'features' => [
                                'Basic training access',
                                'Partner directory listing',
                                'Email support',
                                'Marketing collateral',
                                'Quarterly business reviews'
                            ],
                            'image' => 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=300&fit=crop'
                        ],
                        [
                            'name' => 'Certified',
                            'icon' => 'badge',
                            'commission' => '15%',
                            'description' => 'Verified expertise with enhanced benefits',
                            'featured' => true,
                            'ctaText' => 'Apply Now',
                            'ctaLink' => '/partners/certified',
                            'features' => [
                                'All Registered benefits',
                                'Enhanced commission rates',
                                'Dedicated partner manager',
                                'Co-marketing opportunities',
                                'Priority support',
                                'Early access to features'
                            ],
                            'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop'
                        ],
                        [
                            'name' => 'Premier',
                            'icon' => 'star',
                            'commission' => '20%',
                            'description' => 'Top-tier partnership with maximum benefits',
                            'featured' => false,
                            'ctaText' => 'Contact Sales',
                            'ctaLink' => '/partners/premier',
                            'features' => [
                                'All Certified benefits',
                                'Maximum commission rates',
                                'Strategic account planning',
                                'Joint go-to-market programs',
                                'Executive business reviews',
                                'Custom solution development'
                            ],
                            'image' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop'
                        ]
                    ],
                    'successStories' => [
                        [
                            'company' => 'Tech Solutions Inc',
                            'partnerType' => 'Implementation Partner',
                            'quote' => 'Partnering with them transformed our business. We\'ve seen 200% growth in our services revenue.',
                            'result' => '2x revenue growth',
                            'link' => '/stories/tech-solutions',
                            'icon' => 'building',
                            'image' => 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop'
                        ],
                        [
                            'company' => 'Global Systems',
                            'partnerType' => 'Technology Partner',
                            'quote' => 'The integration capabilities and support have been outstanding. Our clients love the seamless experience.',
                            'result' => '100+ joint customers',
                            'link' => '/stories/global-systems',
                            'icon' => 'chip',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop'
                        ],
                        [
                            'company' => 'Enterprise Advisors',
                            'partnerType' => 'Reseller Partner',
                            'quote' => 'The commission structure and sales support helped us scale rapidly. Best partnership decision we made.',
                            'result' => '3x revenue increase',
                            'link' => '/stories/enterprise-advisors',
                            'icon' => 'building',
                            'image' => 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop'
                        ]
                    ],
                    'partnerEvents' => [
                        ['icon' => 'calendar', 'title' => 'Partner Summit 2024', 'date' => 'May 15-17, 2024', 'description' => 'Annual partner conference with training and networking', 'link' => '/events/summit-2024'],
                        ['icon' => 'academic', 'title' => 'Certification Bootcamp', 'date' => 'June 5-6, 2024', 'description' => 'Intensive training and certification program', 'link' => '/events/bootcamp'],
                        ['icon' => 'code', 'title' => 'Developer Workshop', 'date' => 'July 10, 2024', 'description' => 'Hands-on API and integration training', 'link' => '/events/workshop']
                    ],
                    'partnerResources' => [
                        ['icon' => 'document', 'title' => 'Sales & Marketing', 'description' => 'Deck templates, case studies, and battle cards', 'items' => '25', 'link' => '/resources/sales'],
                        ['icon' => 'academic', 'title' => 'Training & Certification', 'description' => 'On-demand courses and certification programs', 'items' => '15', 'link' => '/resources/training'],
                        ['icon' => 'code', 'title' => 'Technical Resources', 'description' => 'API docs, SDKs, and integration guides', 'items' => '30', 'link' => '/resources/technical']
                    ],
                    'companySizes' => [
                        ['value' => '1-10', 'label' => '1-10 employees'],
                        ['value' => '11-50', 'label' => '11-50 employees'],
                        ['value' => '51-200', 'label' => '51-200 employees'],
                        ['value' => '201-500', 'label' => '201-500 employees'],
                        ['value' => '500+', 'label' => '500+ employees']
                    ],
                    'countries' => [
                        ['value' => 'US', 'label' => 'United States'],
                        ['value' => 'CA', 'label' => 'Canada'],
                        ['value' => 'UK', 'label' => 'United Kingdom'],
                        ['value' => 'AU', 'label' => 'Australia'],
                        ['value' => 'DE', 'label' => 'Germany'],
                        ['value' => 'FR', 'label' => 'France'],
                        ['value' => 'JP', 'label' => 'Japan'],
                        ['value' => 'SG', 'label' => 'Singapore']
                    ],
                    'categories' => [
                        ['id' => 'program', 'name' => 'Program Details', 'icon' => 'info', 'description' => 'Partner program structure and benefits'],
                        ['id' => 'benefits', 'name' => 'Benefits & Rewards', 'icon' => 'gift', 'description' => 'Commission, training, and support'],
                        ['id' => 'requirements', 'name' => 'Requirements', 'icon' => 'clipboard', 'description' => 'Eligibility and application criteria'],
                        ['id' => 'process', 'name' => 'Application Process', 'icon' => 'document', 'description' => 'How to apply and onboard']
                    ],
                    'popularQuestions' => [
                        'What are the partner requirements?',
                        'How much commission can I earn?',
                        'How long does the application take?',
                        'What training is provided?'
                    ],
                    'faqs' => [
                        [
                            'id' => 'faq-1',
                            'category' => 'program',
                            'icon' => 'info',
                            'question' => 'What are the requirements to become a partner?',
                            'answer' => 'Requirements vary by partner level. Registered partners need a registered business, relevant industry experience, and agreement to partner terms. Certified partners require additional training completion and reference customers. Premier partners must demonstrate proven success and meet revenue targets.',
                            'tags' => ['requirements', 'eligibility', 'criteria'],
                            'link' => '/partners/requirements',
                            'views' => 1250,
                            'updatedAt' => '2024-01-15'
                        ],
                        [
                            'id' => 'faq-2',
                            'category' => 'benefits',
                            'icon' => 'gift',
                            'question' => 'How much commission can I earn?',
                            'answer' => 'Commission rates range from 10% to 20% based on your partner level. Registered partners earn 10%, Certified partners earn 15%, and Premier partners earn 20%. Additional bonuses are available for exceeding sales targets and referring enterprise deals.',
                            'tags' => ['commission', 'revenue', 'earnings'],
                            'link' => '/partners/commission',
                            'views' => 980,
                            'updatedAt' => '2024-01-20'
                        ],
                        [
                            'id' => 'faq-3',
                            'category' => 'process',
                            'icon' => 'document',
                            'question' => 'How long does the application process take?',
                            'answer' => 'Initial application review takes 5-7 business days. Once approved, you\'ll receive access to our partner portal and onboarding materials. The full onboarding process, including training and certification, typically takes 2-4 weeks depending on your availability.',
                            'tags' => ['timeline', 'process', 'onboarding'],
                            'link' => '/partners/process',
                            'views' => 750,
                            'updatedAt' => '2024-01-10'
                        ],
                        [
                            'id' => 'faq-4',
                            'category' => 'requirements',
                            'icon' => 'clipboard',
                            'question' => 'What training is provided to partners?',
                            'answer' => 'We provide comprehensive training including product certification, sales training, technical implementation workshops, and ongoing webinars. All training materials are available on-demand through our partner portal. Certified partners receive additional advanced training and certification.',
                            'tags' => ['training', 'certification', 'education'],
                            'link' => '/partners/training',
                            'views' => 890,
                            'updatedAt' => '2024-01-18'
                        ],
                        [
                            'id' => 'faq-5',
                            'category' => 'program',
                            'icon' => 'info',
                            'question' => 'Is there a cost to join the partner program?',
                            'answer' => 'There is no cost to apply or join our partner program. We invest in your success through free training, resources, and support. Some premium certifications or exclusive events may have associated costs, but these are optional and provide additional value.',
                            'tags' => ['cost', 'free', 'investment'],
                            'views' => 620,
                            'updatedAt' => '2024-01-25'
                        ]
                    ],
                    'contactImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop',
                    'partnershipImage' => 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop',
                    'showGuarantee' => true,
                    'guaranteeText' => 'Join our partner network and receive dedicated support, training, and competitive commission rates',
                    'contactText' => 'Ready to become a partner? Join our growing network of partners today.',
                    'contactButtonText' => 'Apply Now',
                    'contactLink' => '/partner/apply'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 320,
                'section_key' => 'partnerInquiries',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Office Locations Section
            [
                'id' => 321,
                'section_key' => 'officeLocations',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => [
                        'backgroundColor' => 'bg-sky-100 dark:bg-sky-900/30',
                        'borderColor' => 'border-sky-200 dark:border-sky-800',
                        'textColor' => 'text-sky-700 dark:text-sky-300',
                        'text' => 'Global Presence',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Find Us',
                        'highlightGradient' => 'from-sky-600 to-blue-600',
                        'highlightedText' => 'Around the World',
                        'suffix' => 'We\'re Everywhere You Need Us'
                    ],
                    'description' => 'With strategic offices across the globe, we\'re always nearby to serve you better. Visit us at any of our locations or connect with our regional teams.',
                    'stats' => [
                        ['icon' => 'office-building', 'value' => '15+', 'label' => 'Global Offices'],
                        ['icon' => 'users', 'value' => '500+', 'label' => 'Team Members'],
                        ['icon' => 'globe', 'value' => '30+', 'label' => 'Countries Served'],
                        ['icon' => 'clock', 'value' => '24/7', 'label' => 'Global Support']
                    ],
                    'regions' => [
                        ['id' => 'north-america', 'name' => 'North America', 'icon' => 'globe', 'officeCount' => 4],
                        ['id' => 'europe', 'name' => 'Europe', 'icon' => 'globe', 'officeCount' => 3],
                        ['id' => 'asia-pacific', 'name' => 'Asia Pacific', 'icon' => 'globe', 'officeCount' => 3],
                        ['id' => 'middle-east', 'name' => 'Middle East', 'icon' => 'globe', 'officeCount' => 1]
                    ],
                    'offices' => [
                        [
                            'city' => 'San Francisco',
                            'country' => 'United States',
                            'region' => 'north-america',
                            'address' => '500 Market Street, Suite 300, San Francisco, CA 94105',
                            'phone' => '+1 (415) 555-0100',
                            'email' => 'sf@example.com',
                            'hours' => 'Mon-Fri: 9am - 6pm PST',
                            'mapLink' => '/maps/sf',
                            'image' => 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=500&fit=crop'
                        ],
                        [
                            'city' => 'New York',
                            'country' => 'United States',
                            'region' => 'north-america',
                            'address' => '350 Fifth Avenue, Suite 4500, New York, NY 10118',
                            'phone' => '+1 (212) 555-0200',
                            'email' => 'ny@example.com',
                            'hours' => 'Mon-Fri: 9am - 6pm EST',
                            'mapLink' => '/maps/ny',
                            'image' => 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&h=500&fit=crop'
                        ],
                        [
                            'city' => 'Toronto',
                            'country' => 'Canada',
                            'region' => 'north-america',
                            'address' => '120 Adelaide Street West, Suite 2500, Toronto, ON M5H 1T1',
                            'phone' => '+1 (416) 555-0300',
                            'email' => 'toronto@example.com',
                            'hours' => 'Mon-Fri: 9am - 6pm EST',
                            'mapLink' => '/maps/toronto',
                            'image' => 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=800&h=500&fit=crop'
                        ],
                        [
                            'city' => 'London',
                            'country' => 'United Kingdom',
                            'region' => 'europe',
                            'address' => '30 St Mary Axe, 20th Floor, London EC3A 8BF',
                            'phone' => '+44 20 7946 0400',
                            'email' => 'london@example.com',
                            'hours' => 'Mon-Fri: 9am - 6pm GMT',
                            'mapLink' => '/maps/london',
                            'image' => 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=500&fit=crop'
                        ],
                        [
                            'city' => 'Berlin',
                            'country' => 'Germany',
                            'region' => 'europe',
                            'address' => 'Potsdamer Platz 10, 10785 Berlin',
                            'phone' => '+49 30 1234 5678',
                            'email' => 'berlin@example.com',
                            'hours' => 'Mon-Fri: 9am - 6pm CET',
                            'mapLink' => '/maps/berlin',
                            'image' => 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&h=500&fit=crop'
                        ],
                        [
                            'city' => 'Paris',
                            'country' => 'France',
                            'region' => 'europe',
                            'address' => '15 Rue de la Paix, 75002 Paris',
                            'phone' => '+33 1 42 96 15 00',
                            'email' => 'paris@example.com',
                            'hours' => 'Mon-Fri: 9am - 6pm CET',
                            'mapLink' => '/maps/paris',
                            'image' => 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=500&fit=crop'
                        ],
                        [
                            'city' => 'Singapore',
                            'country' => 'Singapore',
                            'region' => 'asia-pacific',
                            'address' => '1 Raffles Place, #30-00, Singapore 048616',
                            'phone' => '+65 6221 1234',
                            'email' => 'singapore@example.com',
                            'hours' => 'Mon-Fri: 9am - 6pm SGT',
                            'mapLink' => '/maps/singapore',
                            'image' => 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&h=500&fit=crop'
                        ],
                        [
                            'city' => 'Sydney',
                            'country' => 'Australia',
                            'region' => 'asia-pacific',
                            'address' => '1 Martin Place, Level 50, Sydney NSW 2000',
                            'phone' => '+61 2 8296 1234',
                            'email' => 'sydney@example.com',
                            'hours' => 'Mon-Fri: 9am - 6pm AEST',
                            'mapLink' => '/maps/sydney',
                            'image' => 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&h=500&fit=crop'
                        ],
                        [
                            'city' => 'Dubai',
                            'country' => 'United Arab Emirates',
                            'region' => 'middle-east',
                            'address' => 'Burj Khalifa, 123rd Floor, Downtown Dubai',
                            'phone' => '+971 4 567 8901',
                            'email' => 'dubai@example.com',
                            'hours' => 'Sun-Thu: 9am - 6pm GST',
                            'mapLink' => '/maps/dubai',
                            'image' => 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=500&fit=crop'
                        ]
                    ],
                    'faqs' => [
                        [
                            'id' => 'faq-1',
                            'icon' => 'location',
                            'question' => 'Do you have offices outside the US?',
                            'answer' => 'Yes, we have global offices in London, Berlin, Paris, Singapore, Sydney, and Dubai. Each office serves its regional customers with local teams who understand local business practices and languages.',
                            'tags' => ['international', 'global', 'offices'],
                            'link' => '/locations'
                        ],
                        [
                            'id' => 'faq-2',
                            'icon' => 'clock',
                            'question' => 'What are your office hours?',
                            'answer' => 'Office hours vary by location. Generally, our offices are open Monday through Friday from 9am to 6pm local time. Our global support team is available 24/7 via phone, email, and live chat regardless of office hours.',
                            'tags' => ['hours', 'schedule', 'business hours'],
                            'link' => '/support'
                        ],
                        [
                            'id' => 'faq-3',
                            'icon' => 'users',
                            'question' => 'Can I visit your office for support?',
                            'answer' => 'Yes, you can visit any of our offices during business hours for in-person support. For enterprise customers, we recommend scheduling an appointment with your account manager to ensure the right team members are available.',
                            'tags' => ['visit', 'in-person', 'appointment'],
                            'link' => '/contact'
                        ],
                        [
                            'id' => 'faq-4',
                            'icon' => 'mail',
                            'question' => 'How do I contact a specific office?',
                            'answer' => 'Each office has its own direct phone number and email address listed on this page. You can also use our general contact form and specify which office you\'d like to reach, and we\'ll route your inquiry appropriately.',
                            'tags' => ['contact', 'email', 'phone'],
                            'link' => '/contact'
                        ],
                        [
                            'id' => 'faq-5',
                            'icon' => 'globe',
                            'question' => 'Do you offer support in multiple languages?',
                            'answer' => 'Yes, our regional offices provide support in local languages. We offer support in English, Spanish, French, German, Mandarin, Japanese, Arabic, and more depending on the region. Our global support team can also arrange translation services.',
                            'tags' => ['languages', 'translation', 'multilingual'],
                            'link' => '/support'
                        ]
                    ],
                    'showGuarantee' => true,
                    'guaranteeText' => 'Global presence with local expertise — we\'re here to serve you wherever you are.',
                    'contactText' => 'Can\'t find what you\'re looking for? Contact our global support team.',
                    'contactButtonText' => 'Contact Us',
                    'contactLink' => '/contact'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 322,
                'section_key' => 'officeLocations',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => [
                        'backgroundColor' => 'bg-violet-100 dark:bg-violet-900/30',
                        'borderColor' => 'border-violet-200 dark:border-violet-800',
                        'textColor' => 'text-violet-700 dark:text-violet-300',
                        'text' => 'Our Offices',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Visit Our',
                        'highlightGradient' => 'from-violet-600 to-purple-600',
                        'highlightedText' => 'Global Offices',
                        'suffix' => 'We\'re Here to Welcome You'
                    ],
                    'description' => 'With offices spanning across continents, we\'re always within reach. Visit us for meetings, events, or just to say hello. Our doors are open to partners and customers alike.',
                    'stats' => [
                        ['icon' => 'office-building', 'value' => '12+', 'label' => 'Office Locations'],
                        ['icon' => 'users', 'value' => '1,200+', 'label' => 'Global Employees'],
                        ['icon' => 'globe', 'value' => '25+', 'label' => 'Countries'],
                        ['icon' => 'calendar', 'value' => '15+', 'label' => 'Years of Excellence']
                    ],
                    'regions' => [
                        ['id' => 'nam', 'name' => 'North America', 'icon' => '🌎', 'officeCount' => 4, 'flag' => '🇺🇸🇨🇦'],
                        ['id' => 'emea', 'name' => 'Europe', 'icon' => '🌍', 'officeCount' => 3, 'flag' => '🇬🇧🇩🇪🇫🇷'],
                        ['id' => 'apac', 'name' => 'Asia Pacific', 'icon' => '🌏', 'officeCount' => 3, 'flag' => '🇸🇬🇦🇺🇯🇵'],
                        ['id' => 'latam', 'name' => 'Latin America', 'icon' => '🌎', 'officeCount' => 2, 'flag' => '🇧🇷🇲🇽']
                    ],
                    'countries' => ['United States', 'Canada', 'United Kingdom', 'Germany', 'France', 'Singapore', 'Australia', 'Japan', 'Brazil', 'Mexico'],
                    'offices' => [
                        [
                            'city' => 'San Francisco',
                            'country' => 'United States',
                            'flag' => '🇺🇸',
                            'region' => 'nam',
                            'address' => '500 Market Street, Suite 300, San Francisco, CA 94105',
                            'phone' => '+1 (415) 555-0100',
                            'email' => 'sf@example.com',
                            'hours' => 'Mon-Fri: 9am - 6pm PST',
                            'mapLink' => '/maps/sf',
                            'teamSize' => '150',
                            'image' => 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=500&fit=crop'
                        ],
                        [
                            'city' => 'New York',
                            'country' => 'United States',
                            'flag' => '🇺🇸',
                            'region' => 'nam',
                            'address' => '350 Fifth Avenue, Suite 4500, New York, NY 10118',
                            'phone' => '+1 (212) 555-0200',
                            'email' => 'ny@example.com',
                            'hours' => 'Mon-Fri: 9am - 6pm EST',
                            'mapLink' => '/maps/ny',
                            'teamSize' => '200',
                            'image' => 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&h=500&fit=crop'
                        ],
                        [
                            'city' => 'Toronto',
                            'country' => 'Canada',
                            'flag' => '🇨🇦',
                            'region' => 'nam',
                            'address' => '120 Adelaide Street West, Suite 2500, Toronto, ON M5H 1T1',
                            'phone' => '+1 (416) 555-0300',
                            'email' => 'toronto@example.com',
                            'hours' => 'Mon-Fri: 9am - 6pm EST',
                            'mapLink' => '/maps/toronto',
                            'teamSize' => '80',
                            'image' => 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=800&h=500&fit=crop'
                        ],
                        [
                            'city' => 'Vancouver',
                            'country' => 'Canada',
                            'flag' => '🇨🇦',
                            'region' => 'nam',
                            'address' => '1095 West Pender Street, Suite 800, Vancouver, BC V6E 2M6',
                            'phone' => '+1 (604) 555-0400',
                            'email' => 'vancouver@example.com',
                            'hours' => 'Mon-Fri: 9am - 6pm PST',
                            'mapLink' => '/maps/vancouver',
                            'teamSize' => '60',
                            'image' => 'https://images.unsplash.com/photo-1507680434567-5739c80be1ac?w=800&h=500&fit=crop'
                        ],
                        [
                            'city' => 'London',
                            'country' => 'United Kingdom',
                            'flag' => '🇬🇧',
                            'region' => 'emea',
                            'address' => '30 St Mary Axe, 20th Floor, London EC3A 8BF',
                            'phone' => '+44 20 7946 0400',
                            'email' => 'london@example.com',
                            'hours' => 'Mon-Fri: 9am - 6pm GMT',
                            'mapLink' => '/maps/london',
                            'teamSize' => '120',
                            'image' => 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=500&fit=crop'
                        ],
                        [
                            'city' => 'Berlin',
                            'country' => 'Germany',
                            'flag' => '🇩🇪',
                            'region' => 'emea',
                            'address' => 'Potsdamer Platz 10, 10785 Berlin',
                            'phone' => '+49 30 1234 5678',
                            'email' => 'berlin@example.com',
                            'hours' => 'Mon-Fri: 9am - 6pm CET',
                            'mapLink' => '/maps/berlin',
                            'teamSize' => '90',
                            'image' => 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&h=500&fit=crop'
                        ],
                        [
                            'city' => 'Paris',
                            'country' => 'France',
                            'flag' => '🇫🇷',
                            'region' => 'emea',
                            'address' => '15 Rue de la Paix, 75002 Paris',
                            'phone' => '+33 1 42 96 15 00',
                            'email' => 'paris@example.com',
                            'hours' => 'Mon-Fri: 9am - 6pm CET',
                            'mapLink' => '/maps/paris',
                            'teamSize' => '70',
                            'image' => 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=500&fit=crop'
                        ],
                        [
                            'city' => 'Singapore',
                            'country' => 'Singapore',
                            'flag' => '🇸🇬',
                            'region' => 'apac',
                            'address' => '1 Raffles Place, #30-00, Singapore 048616',
                            'phone' => '+65 6221 1234',
                            'email' => 'singapore@example.com',
                            'hours' => 'Mon-Fri: 9am - 6pm SGT',
                            'mapLink' => '/maps/singapore',
                            'teamSize' => '100',
                            'image' => 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&h=500&fit=crop'
                        ],
                        [
                            'city' => 'Sydney',
                            'country' => 'Australia',
                            'flag' => '🇦🇺',
                            'region' => 'apac',
                            'address' => '1 Martin Place, Level 50, Sydney NSW 2000',
                            'phone' => '+61 2 8296 1234',
                            'email' => 'sydney@example.com',
                            'hours' => 'Mon-Fri: 9am - 6pm AEST',
                            'mapLink' => '/maps/sydney',
                            'teamSize' => '85',
                            'image' => 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&h=500&fit=crop'
                        ],
                        [
                            'city' => 'Tokyo',
                            'country' => 'Japan',
                            'flag' => '🇯🇵',
                            'region' => 'apac',
                            'address' => '6-10-1 Roppongi, Minato-ku, Tokyo 106-6108',
                            'phone' => '+81 3 1234 5678',
                            'email' => 'tokyo@example.com',
                            'hours' => 'Mon-Fri: 9am - 6pm JST',
                            'mapLink' => '/maps/tokyo',
                            'teamSize' => '75',
                            'image' => 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=500&fit=crop'
                        ]
                    ],
                    'faqs' => [
                        [
                            'id' => 'faq-1',
                            'icon' => 'location',
                            'question' => 'Can I visit your offices for business meetings?',
                            'answer' => 'Yes, we welcome customers and partners for scheduled business meetings at all our global offices. Please contact the specific office in advance to arrange a meeting time and ensure the appropriate team members are available.',
                            'tags' => ['meetings', 'visits', 'appointments'],
                            'link' => '/contact'
                        ],
                        [
                            'id' => 'faq-2',
                            'icon' => 'clock',
                            'question' => 'What are your office hours across different time zones?',
                            'answer' => 'Our offices operate Monday through Friday from 9am to 6pm local time. For urgent support outside business hours, our 24/7 global support team is always available via phone, email, or live chat regardless of office hours.',
                            'tags' => ['hours', 'time zones', 'support'],
                            'link' => '/support'
                        ],
                        [
                            'id' => 'faq-3',
                            'icon' => 'users',
                            'question' => 'Do you have parking facilities at your offices?',
                            'answer' => 'Parking availability varies by location. Most of our urban offices are in central business districts with nearby public parking garages. Please check with the specific office when scheduling your visit for detailed parking information.',
                            'tags' => ['parking', 'transportation', 'directions'],
                            'link' => '/locations'
                        ],
                        [
                            'id' => 'faq-4',
                            'icon' => 'mail',
                            'question' => 'How do I contact a specific office directly?',
                            'answer' => 'Each office has its own direct phone number and email address listed on this page. You can also use our general contact form and specify which office you\'d like to reach, and we\'ll route your inquiry appropriately.',
                            'tags' => ['contact', 'email', 'phone'],
                            'link' => '/contact'
                        ],
                        [
                            'id' => 'faq-5',
                            'icon' => 'globe',
                            'question' => 'Do you offer tours of your offices?',
                            'answer' => 'Yes, we offer guided tours of our major offices for prospective customers and partners. Tours typically take 30-45 minutes and include our workspaces, collaboration areas, and innovation labs. Please schedule in advance through your account manager or via our contact form.',
                            'tags' => ['tours', 'visits', 'showroom'],
                            'link' => '/contact'
                        ]
                    ],
                    'showGuarantee' => true,
                    'guaranteeText' => 'Global presence with local expertise — we\'re here to serve you wherever you are.',
                    'contactText' => 'Can\'t find what you\'re looking for? Contact our global support team.',
                    'contactButtonText' => 'Contact Us',
                    'contactLink' => '/contact'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 323,
                'section_key' => 'officeLocations',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'backgroundColor' => 'bg-rose-100 dark:bg-rose-900/30',
                        'borderColor' => 'border-rose-200 dark:border-rose-800',
                        'textColor' => 'text-rose-700 dark:text-rose-300',
                        'text' => 'Global Network',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Our',
                        'highlightGradient' => 'from-rose-600 to-pink-600',
                        'highlightedText' => 'Global Footprint',
                        'suffix' => 'Serving You Worldwide'
                    ],
                    'description' => 'With strategic offices and service centers across the globe, we deliver localized support and expertise wherever you need us. Find your nearest location and connect with our team.',
                    'stats' => [
                        ['icon' => 'office-building', 'value' => '18+', 'label' => 'Office Locations'],
                        ['icon' => 'truck', 'value' => '12+', 'label' => 'Service Centers'],
                        ['icon' => 'users', 'value' => '2,500+', 'label' => 'Global Employees'],
                        ['icon' => 'globe', 'value' => '35+', 'label' => 'Countries Served']
                    ],
                    'heroImage' => 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&h=400&fit=crop',
                    'mapImage' => 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=500&fit=crop',
                    'regions' => [
                        ['id' => 'nam', 'name' => 'North America', 'icon' => '🌎', 'officeCount' => 5],
                        ['id' => 'emea', 'name' => 'Europe', 'icon' => '🌍', 'officeCount' => 4],
                        ['id' => 'apac', 'name' => 'Asia Pacific', 'icon' => '🌏', 'officeCount' => 4],
                        ['id' => 'latam', 'name' => 'Latin America', 'icon' => '🌎', 'officeCount' => 3]
                    ],
                    'countries' => ['United States', 'Canada', 'Mexico', 'United Kingdom', 'Germany', 'France', 'Netherlands', 'Singapore', 'Australia', 'Japan', 'India', 'Brazil'],
                    'offices' => [
                        [
                            'city' => 'San Francisco',
                            'country' => 'United States',
                            'flag' => '🇺🇸',
                            'region' => 'nam',
                            'address' => '500 Market Street, Suite 300, San Francisco, CA 94105',
                            'phone' => '+1 (415) 555-0100',
                            'email' => 'sf@example.com',
                            'hours' => 'Mon-Fri: 9am - 6pm PST',
                            'mapLink' => '/maps/sf',
                            'teamSize' => '180',
                            'services' => ['Sales', 'Support', 'R&D', 'Training'],
                            'image' => 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=500&fit=crop'
                        ],
                        [
                            'city' => 'New York',
                            'country' => 'United States',
                            'flag' => '🇺🇸',
                            'region' => 'nam',
                            'address' => '350 Fifth Avenue, Suite 4500, New York, NY 10118',
                            'phone' => '+1 (212) 555-0200',
                            'email' => 'ny@example.com',
                            'hours' => 'Mon-Fri: 9am - 6pm EST',
                            'mapLink' => '/maps/ny',
                            'teamSize' => '220',
                            'services' => ['Sales', 'Support', 'Marketing'],
                            'image' => 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&h=500&fit=crop'
                        ],
                        [
                            'city' => 'London',
                            'country' => 'United Kingdom',
                            'flag' => '🇬🇧',
                            'region' => 'emea',
                            'address' => '30 St Mary Axe, 20th Floor, London EC3A 8BF',
                            'phone' => '+44 20 7946 0400',
                            'email' => 'london@example.com',
                            'hours' => 'Mon-Fri: 9am - 6pm GMT',
                            'mapLink' => '/maps/london',
                            'teamSize' => '150',
                            'services' => ['Sales', 'Support', 'Professional Services'],
                            'image' => 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=500&fit=crop'
                        ],
                        [
                            'city' => 'Singapore',
                            'country' => 'Singapore',
                            'flag' => '🇸🇬',
                            'region' => 'apac',
                            'address' => '1 Raffles Place, #30-00, Singapore 048616',
                            'phone' => '+65 6221 1234',
                            'email' => 'singapore@example.com',
                            'hours' => 'Mon-Fri: 9am - 6pm SGT',
                            'mapLink' => '/maps/singapore',
                            'teamSize' => '120',
                            'services' => ['Sales', 'Support', 'APAC Operations'],
                            'image' => 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&h=500&fit=crop'
                        ]
                    ],
                    'serviceCenters' => [
                        [
                            'name' => 'Americas Distribution Center',
                            'icon' => '🏭',
                            'location' => 'Dallas, Texas, USA',
                            'hours' => 'Mon-Fri: 8am - 8pm CST',
                            'phone' => '+1 (972) 555-1000',
                            'services' => ['Parts Distribution', 'Repair Services', 'Logistics'],
                            'mapLink' => '/maps/dallas',
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=500&fit=crop'
                        ],
                        [
                            'name' => 'EMEA Service Hub',
                            'icon' => '🔧',
                            'location' => 'Amsterdam, Netherlands',
                            'hours' => 'Mon-Fri: 8am - 6pm CET',
                            'phone' => '+31 20 123 4567',
                            'services' => ['Technical Support', 'Repair Services', 'Training'],
                            'mapLink' => '/maps/amsterdam',
                            'image' => 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800&h=500&fit=crop'
                        ],
                        [
                            'name' => 'Asia Pacific Logistics Center',
                            'icon' => '📦',
                            'location' => 'Shanghai, China',
                            'hours' => 'Mon-Fri: 8am - 8pm CST',
                            'phone' => '+86 21 1234 5678',
                            'services' => ['Distribution', 'Local Assembly', 'Quality Control'],
                            'mapLink' => '/maps/shanghai',
                            'image' => 'https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?w=800&h=500&fit=crop'
                        ],
                        [
                            'name' => 'Latin America Support Center',
                            'icon' => '🛠️',
                            'location' => 'Sao Paulo, Brazil',
                            'hours' => 'Mon-Fri: 9am - 7pm BRT',
                            'phone' => '+55 11 2345 6789',
                            'services' => ['Technical Support', 'Sales Support', 'Training'],
                            'mapLink' => '/maps/saopaulo',
                            'image' => 'https://images.unsplash.com/photo-1549208614-3d2cd153e2e3?w=800&h=500&fit=crop'
                        ]
                    ],
                    'headquarters' => [
                        'address' => '123 Main Street, Suite 100, San Francisco, CA 94105, USA',
                        'phone' => '+1 (888) 123-4567',
                        'email' => 'corporate@example.com',
                        'image' => 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=500&fit=crop'
                    ],
                    'faqCategories' => [
                        ['id' => 'locations', 'name' => 'Office Locations', 'icon' => 'location', 'description' => 'Finding and visiting our offices'],
                        ['id' => 'services', 'name' => 'Services Offered', 'icon' => 'sparkles', 'description' => 'What services are available'],
                        ['id' => 'support', 'name' => 'Support & Assistance', 'icon' => 'support', 'description' => 'Getting help from our teams']
                    ],
                    'faqs' => [
                        [
                            'id' => 'faq-1',
                            'category' => 'locations',
                            'icon' => 'location',
                            'question' => 'How do I find the nearest office to me?',
                            'answer' => 'Use our interactive map or region filters above to browse all our global office locations. You can also enter your city or country in the search bar to find the closest office. Each office listing includes full address, contact details, and directions via Google Maps.',
                            'tags' => ['nearest', 'directions', 'find'],
                            'link' => '/locations',
                            'updatedAt' => '2024-01-15',
                            'views' => 1250
                        ],
                        [
                            'id' => 'faq-2',
                            'category' => 'services',
                            'icon' => 'sparkles',
                            'question' => 'What services are available at each office?',
                            'answer' => 'Services vary by location. Major offices offer sales, support, training, and professional services. Our service centers provide technical support, repair services, parts distribution, and logistics. Check each office\'s service tags or contact them directly for specific capabilities.',
                            'tags' => ['services', 'offerings', 'capabilities'],
                            'link' => '/services',
                            'updatedAt' => '2024-01-10',
                            'views' => 980
                        ],
                        [
                            'id' => 'faq-3',
                            'category' => 'support',
                            'icon' => 'support',
                            'question' => 'Do I need an appointment to visit an office?',
                            'answer' => 'For general inquiries, you\'re welcome during business hours. For specific meetings with sales, support, or technical teams, we recommend scheduling an appointment to ensure the right people are available. Use the \'Contact This Office\' button to arrange a visit.',
                            'tags' => ['appointment', 'visit', 'meeting'],
                            'link' => '/contact',
                            'updatedAt' => '2024-01-18',
                            'views' => 750
                        ],
                        [
                            'id' => 'faq-4',
                            'category' => 'locations',
                            'icon' => 'clock',
                            'question' => 'What are your office hours across different time zones?',
                            'answer' => 'Our offices operate Monday through Friday from 9am to 6pm local time. For urgent support outside business hours, our 24/7 global support team is always available via phone, email, or live chat regardless of office hours.',
                            'tags' => ['hours', 'time zones', 'support'],
                            'link' => '/support',
                            'updatedAt' => '2024-01-20',
                            'views' => 620
                        ],
                        [
                            'id' => 'faq-5',
                            'category' => 'services',
                            'icon' => 'globe',
                            'question' => 'Do you offer support in multiple languages?',
                            'answer' => 'Yes, our regional offices provide support in local languages. We offer support in English, Spanish, French, German, Mandarin, Japanese, Portuguese, and more depending on the region. Our global support team can also arrange translation services.',
                            'tags' => ['languages', 'translation', 'multilingual'],
                            'link' => '/support',
                            'updatedAt' => '2024-01-25',
                            'views' => 890
                        ]
                    ],
                    'contactImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop',
                    'showGuarantee' => true,
                    'guaranteeText' => 'Global presence with local expertise — we\'re here to serve you wherever you are.',
                    'contactText' => 'Can\'t find what you\'re looking for? Contact our global support team.',
                    'contactButtonText' => 'Contact Us',
                    'contactLink' => '/contact'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 324,
                'section_key' => 'officeLocations',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Phone Numbers Section
            [
                'id' => 325,
                'section_key' => 'phoneNumbers',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => [
                        'backgroundColor' => 'bg-blue-100 dark:bg-blue-900/30',
                        'borderColor' => 'border-blue-200 dark:border-blue-800',
                        'textColor' => 'text-blue-700 dark:text-blue-300',
                        'text' => 'Global Support Lines',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Connect with',
                        'highlightGradient' => 'from-blue-600 to-cyan-600',
                        'highlightedText' => 'Our Support Team',
                        'suffix' => 'Worldwide'
                    ],
                    'description' => 'Get immediate assistance from our global support network. Find the right phone number for your region and get connected with our expert team members who speak your language.',
                    'stats' => [
                        ['icon' => 'phone', 'value' => '25+', 'label' => 'Support Lines'],
                        ['icon' => 'globe', 'value' => '15+', 'label' => 'Countries'],
                        ['icon' => 'clock', 'value' => '24/7', 'label' => 'Global Coverage'],
                        ['icon' => 'users', 'value' => '200+', 'label' => 'Support Agents']
                    ],
                    'emergencyNumber' => '+1 (888) 999-9999',
                    'heroImage' => 'https://images.unsplash.com/photo-1557425493-6f90ae4659fc?w=1200&h=400&fit=crop',
                    'regions' => [
                        ['id' => 'north-america', 'name' => 'North America', 'icon' => '🌎'],
                        ['id' => 'europe', 'name' => 'Europe', 'icon' => '🌍'],
                        ['id' => 'asia-pacific', 'name' => 'Asia Pacific', 'icon' => '🌏'],
                        ['id' => 'latin-america', 'name' => 'Latin America', 'icon' => '🌎']
                    ],
                    'phoneNumbers' => [
                        [
                            'department' => 'Technical Support',
                            'type' => 'support',
                            'icon' => 'cog',
                            'region' => 'north-america',
                            'regionName' => 'North America',
                            'phone' => '+1 (800) 555-0100',
                            'hours' => '24/7',
                            'email' => 'tech.support@example.com',
                            'languages' => ['English', 'Spanish', 'French']
                        ],
                        [
                            'department' => 'Sales Inquiries',
                            'type' => 'sales',
                            'icon' => 'shopping-bag',
                            'region' => 'north-america',
                            'regionName' => 'North America',
                            'phone' => '+1 (800) 555-0200',
                            'hours' => 'Mon-Fri: 9am - 8pm EST',
                            'email' => 'sales@example.com',
                            'languages' => ['English', 'Spanish']
                        ],
                        [
                            'department' => 'Billing Support',
                            'type' => 'billing',
                            'icon' => 'credit-card',
                            'region' => 'north-america',
                            'regionName' => 'North America',
                            'phone' => '+1 (800) 555-0300',
                            'hours' => 'Mon-Fri: 9am - 6pm EST',
                            'email' => 'billing@example.com',
                            'languages' => ['English']
                        ],
                        [
                            'department' => 'Technical Support',
                            'type' => 'support',
                            'icon' => 'cog',
                            'region' => 'europe',
                            'regionName' => 'Europe',
                            'phone' => '+44 20 7946 0123',
                            'hours' => '24/7',
                            'email' => 'tech.support@example.com',
                            'languages' => ['English', 'French', 'German', 'Spanish']
                        ],
                        [
                            'department' => 'Sales Inquiries',
                            'type' => 'sales',
                            'icon' => 'shopping-bag',
                            'region' => 'europe',
                            'regionName' => 'Europe',
                            'phone' => '+44 20 7946 0456',
                            'hours' => 'Mon-Fri: 9am - 6pm GMT',
                            'email' => 'sales@example.com',
                            'languages' => ['English', 'French', 'German']
                        ],
                        [
                            'department' => 'Technical Support',
                            'type' => 'support',
                            'icon' => 'cog',
                            'region' => 'asia-pacific',
                            'regionName' => 'Asia Pacific',
                            'phone' => '+65 6221 7890',
                            'hours' => '24/7',
                            'email' => 'tech.support@example.com',
                            'languages' => ['English', 'Mandarin', 'Japanese', 'Korean']
                        ],
                        [
                            'department' => 'Sales Inquiries',
                            'type' => 'sales',
                            'icon' => 'shopping-bag',
                            'region' => 'asia-pacific',
                            'regionName' => 'Asia Pacific',
                            'phone' => '+65 6221 1234',
                            'hours' => 'Mon-Fri: 9am - 6pm SGT',
                            'email' => 'sales@example.com',
                            'languages' => ['English', 'Mandarin']
                        ],
                        [
                            'department' => 'Technical Support',
                            'type' => 'support',
                            'icon' => 'cog',
                            'region' => 'latin-america',
                            'regionName' => 'Latin America',
                            'phone' => '+55 11 2345 6789',
                            'hours' => '24/7',
                            'email' => 'tech.support@example.com',
                            'languages' => ['Spanish', 'Portuguese', 'English']
                        ],
                        [
                            'department' => 'Sales Inquiries',
                            'type' => 'sales',
                            'icon' => 'shopping-bag',
                            'region' => 'latin-america',
                            'regionName' => 'Latin America',
                            'phone' => '+55 11 2345 0123',
                            'hours' => 'Mon-Fri: 9am - 6pm BRT',
                            'email' => 'sales@example.com',
                            'languages' => ['Spanish', 'Portuguese']
                        ]
                    ],
                    'faqs' => [
                        [
                            'id' => 'faq-1',
                            'icon' => 'clock',
                            'question' => 'What are your support hours?',
                            'answer' => 'Technical support is available 24/7/365 for all customers with active subscriptions. Sales and billing support are available Monday through Friday from 9am to 6pm local time in each region. Enterprise customers receive priority 24/7 support.',
                            'tags' => ['hours', 'availability', 'schedule'],
                            'link' => '/support'
                        ],
                        [
                            'id' => 'faq-2',
                            'icon' => 'globe',
                            'question' => 'Do you offer support in multiple languages?',
                            'answer' => 'Yes, our global support team provides assistance in over 12 languages including English, Spanish, French, German, Mandarin, Japanese, Portuguese, and more. Each regional office is staffed with local language speakers.',
                            'tags' => ['languages', 'translation', 'multilingual'],
                            'link' => '/support'
                        ],
                        [
                            'id' => 'faq-3',
                            'icon' => 'shield',
                            'question' => 'Is there an emergency support number?',
                            'answer' => 'Yes, enterprise customers have access to our 24/7 emergency hotline at +1 (888) 999-9999. This line is for critical system outages affecting business operations. Please use standard support channels for non-urgent issues.',
                            'tags' => ['emergency', 'critical', 'urgent'],
                            'link' => '/emergency'
                        ],
                        [
                            'id' => 'faq-4',
                            'icon' => 'cash',
                            'question' => 'Is there a charge for support calls?',
                            'answer' => 'Support calls are free for all customers with an active subscription. Standard calling rates may apply depending on your phone carrier and location. We recommend using our toll-free numbers when available in your region.',
                            'tags' => ['cost', 'free', 'charges'],
                            'link' => '/pricing'
                        ],
                        [
                            'id' => 'faq-5',
                            'icon' => 'mail',
                            'question' => 'What if I can\'t reach anyone by phone?',
                            'answer' => 'If you\'re unable to reach us by phone, you can submit a support ticket via email, use our live chat feature, or request a callback through our website. Our support team will respond to all inquiries within the SLA timeframe.',
                            'tags' => ['callback', 'alternative', 'contact'],
                            'link' => '/contact'
                        ]
                    ],
                    'showSecurityNote' => true,
                    'securityText' => 'We never ask for passwords or sensitive information over the phone',
                    'contactText' => 'Need help finding the right number? Contact our support team.',
                    'contactButtonText' => 'Contact Us',
                    'contactLink' => '/contact'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 326,
                'section_key' => 'phoneNumbers',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => [
                        'backgroundColor' => 'bg-teal-100 dark:bg-teal-900/30',
                        'borderColor' => 'border-teal-200 dark:border-teal-800',
                        'textColor' => 'text-teal-700 dark:text-teal-300',
                        'text' => 'Contact Center',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Reach Us',
                        'highlightGradient' => 'from-teal-600 to-emerald-600',
                        'highlightedText' => 'Instantly',
                        'suffix' => 'Global Phone Support'
                    ],
                    'description' => 'Connect with our expert support team instantly. Our global phone network ensures you\'re always connected to the right person, no matter where you are in the world.',
                    'stats' => [
                        ['icon' => 'phone', 'value' => '30+', 'label' => 'Direct Lines'],
                        ['icon' => 'globe', 'value' => '20+', 'label' => 'Countries'],
                        ['icon' => 'clock', 'value' => '24/7', 'label' => 'Availability'],
                        ['icon' => 'users', 'value' => '350+', 'label' => 'Support Agents']
                    ],
                    'emergencyNumber' => '+1 (888) 777-8888',
                    'departments' => [
                        ['type' => 'support', 'name' => 'Technical Support', 'icon' => 'cog'],
                        ['type' => 'sales', 'name' => 'Sales', 'icon' => 'shopping-bag'],
                        ['type' => 'billing', 'name' => 'Billing', 'icon' => 'credit-card'],
                        ['type' => 'partnership', 'name' => 'Partnerships', 'icon' => 'handshake']
                    ],
                    'regions' => [
                        ['id' => 'nam', 'name' => 'North America', 'icon' => '🌎', 'officeCount' => 4],
                        ['id' => 'emea', 'name' => 'Europe', 'icon' => '🌍', 'officeCount' => 3],
                        ['id' => 'apac', 'name' => 'Asia Pacific', 'icon' => '🌏', 'officeCount' => 3],
                        ['id' => 'latam', 'name' => 'Latin America', 'icon' => '🌎', 'officeCount' => 2]
                    ],
                    'phoneNumbers' => [
                        [
                            'department' => 'Technical Support',
                            'type' => 'support',
                            'icon' => 'cog',
                            'region' => 'nam',
                            'regionName' => 'North America',
                            'phone' => '+1 (800) 555-0100',
                            'hours' => '24/7',
                            'email' => 'tech.support@example.com',
                            'alternateNumber' => '+1 (888) 555-0101',
                            'languages' => ['English', 'Spanish', 'French']
                        ],
                        [
                            'department' => 'Sales Inquiries',
                            'type' => 'sales',
                            'icon' => 'shopping-bag',
                            'region' => 'nam',
                            'regionName' => 'North America',
                            'phone' => '+1 (800) 555-0200',
                            'hours' => 'Mon-Fri: 8am - 8pm EST',
                            'email' => 'sales@example.com',
                            'alternateNumber' => '+1 (888) 555-0201',
                            'languages' => ['English', 'Spanish']
                        ],
                        [
                            'department' => 'Billing Support',
                            'type' => 'billing',
                            'icon' => 'credit-card',
                            'region' => 'nam',
                            'regionName' => 'North America',
                            'phone' => '+1 (800) 555-0300',
                            'hours' => 'Mon-Fri: 9am - 6pm EST',
                            'email' => 'billing@example.com',
                            'languages' => ['English']
                        ],
                        [
                            'department' => 'Technical Support',
                            'type' => 'support',
                            'icon' => 'cog',
                            'region' => 'emea',
                            'regionName' => 'Europe',
                            'phone' => '+44 20 7946 0123',
                            'hours' => '24/7',
                            'email' => 'tech.support@example.com',
                            'alternateNumber' => '+44 20 7946 0124',
                            'languages' => ['English', 'French', 'German', 'Spanish']
                        ],
                        [
                            'department' => 'Sales Inquiries',
                            'type' => 'sales',
                            'icon' => 'shopping-bag',
                            'region' => 'emea',
                            'regionName' => 'Europe',
                            'phone' => '+44 20 7946 0456',
                            'hours' => 'Mon-Fri: 9am - 6pm GMT',
                            'email' => 'sales@example.com',
                            'languages' => ['English', 'French', 'German']
                        ],
                        [
                            'department' => 'Technical Support',
                            'type' => 'support',
                            'icon' => 'cog',
                            'region' => 'apac',
                            'regionName' => 'Asia Pacific',
                            'phone' => '+65 6221 7890',
                            'hours' => '24/7',
                            'email' => 'tech.support@example.com',
                            'alternateNumber' => '+65 6221 7891',
                            'languages' => ['English', 'Mandarin', 'Japanese', 'Korean']
                        ],
                        [
                            'department' => 'Partnership Inquiries',
                            'type' => 'partnership',
                            'icon' => 'handshake',
                            'region' => 'apac',
                            'regionName' => 'Asia Pacific',
                            'phone' => '+65 6221 3456',
                            'hours' => 'Mon-Fri: 9am - 6pm SGT',
                            'email' => 'partners@example.com',
                            'languages' => ['English', 'Mandarin']
                        ],
                        [
                            'department' => 'Technical Support',
                            'type' => 'support',
                            'icon' => 'cog',
                            'region' => 'latam',
                            'regionName' => 'Latin America',
                            'phone' => '+55 11 2345 6789',
                            'hours' => '24/7',
                            'email' => 'tech.support@example.com',
                            'alternateNumber' => '+55 11 2345 6790',
                            'languages' => ['Spanish', 'Portuguese', 'English']
                        ]
                    ],
                    'faqs' => [
                        [
                            'id' => 'faq-1',
                            'icon' => 'clock',
                            'question' => 'What are your support hours?',
                            'answer' => 'Technical support is available 24/7/365 for all customers with active subscriptions. Sales and billing support are available Monday through Friday from 9am to 6pm local time in each region. Enterprise customers receive priority 24/7 support.',
                            'tags' => ['hours', 'availability', 'schedule'],
                            'link' => '/support'
                        ],
                        [
                            'id' => 'faq-2',
                            'icon' => 'globe',
                            'question' => 'Do you offer support in multiple languages?',
                            'answer' => 'Yes, our global support team provides assistance in over 15 languages including English, Spanish, French, German, Mandarin, Japanese, Portuguese, Italian, Dutch, and more. Each regional office is staffed with local language speakers.',
                            'tags' => ['languages', 'translation', 'multilingual'],
                            'link' => '/support'
                        ],
                        [
                            'id' => 'faq-3',
                            'icon' => 'shield',
                            'question' => 'Is there an emergency support number?',
                            'answer' => 'Yes, enterprise customers have access to our 24/7 emergency hotline at +1 (888) 777-8888. This line is reserved for critical system outages affecting business operations. Please use standard support channels for non-urgent issues.',
                            'tags' => ['emergency', 'critical', 'urgent'],
                            'link' => '/emergency'
                        ],
                        [
                            'id' => 'faq-4',
                            'icon' => 'cash',
                            'question' => 'Are there any charges for support calls?',
                            'answer' => 'Support calls are completely free for all customers with an active subscription. Standard long-distance calling rates may apply depending on your phone carrier and location. We recommend using our toll-free numbers when available in your region.',
                            'tags' => ['cost', 'free', 'charges', 'toll-free'],
                            'link' => '/pricing'
                        ],
                        [
                            'id' => 'faq-5',
                            'icon' => 'device-mobile',
                            'question' => 'What if I can\'t reach anyone by phone?',
                            'answer' => 'If you\'re unable to reach us by phone, you can submit a support ticket via email, use our live chat feature, or request a callback through our website. Our support team will respond to all inquiries within the SLA timeframe.',
                            'tags' => ['callback', 'alternative', 'contact'],
                            'link' => '/contact'
                        ]
                    ],
                    'showSecurityNote' => true,
                    'securityText' => 'We never ask for passwords, credit card numbers, or sensitive information over the phone',
                    'contactText' => 'Need help finding the right number? Contact our support team.',
                    'contactButtonText' => 'Contact Us',
                    'contactLink' => '/contact'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 327,
                'section_key' => 'phoneNumbers',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'backgroundColor' => 'bg-amber-100 dark:bg-amber-900/30',
                        'borderColor' => 'border-amber-200 dark:border-amber-800',
                        'textColor' => 'text-amber-700 dark:text-amber-300',
                        'text' => 'Voice Support',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Talk to',
                        'highlightGradient' => 'from-amber-600 to-orange-600',
                        'highlightedText' => 'Our Experts',
                        'suffix' => 'Global Phone Support Network'
                    ],
                    'description' => 'Get instant answers from our global support team. With dedicated lines for every department and region, you\'re always just a call away from the help you need.',
                    'stats' => [
                        ['icon' => 'phone', 'value' => '45+', 'label' => 'Direct Lines'],
                        ['icon' => 'globe', 'value' => '25+', 'label' => 'Countries'],
                        ['icon' => 'clock', 'value' => '24/7', 'label' => 'Global Coverage'],
                        ['icon' => 'users', 'value' => '500+', 'label' => 'Support Agents']
                    ],
                    'heroImage' => 'https://images.unsplash.com/photo-1557425493-6f90ae4659fc?w=1200&h=400&fit=crop',
                    'contactCenterImage' => 'https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=600&h=400&fit=crop',
                    'emergencyNumber' => '+1 (888) 777-6666',
                    'departments' => [
                        ['type' => 'support', 'name' => 'Technical Support', 'icon' => 'cog'],
                        ['type' => 'sales', 'name' => 'Sales', 'icon' => 'shopping-bag'],
                        ['type' => 'billing', 'name' => 'Billing', 'icon' => 'credit-card'],
                        ['type' => 'partnership', 'name' => 'Partnerships', 'icon' => 'handshake']
                    ],
                    'regions' => [
                        ['id' => 'nam', 'name' => 'North America', 'icon' => '🌎', 'officeCount' => 5],
                        ['id' => 'emea', 'name' => 'Europe', 'icon' => '🌍', 'officeCount' => 4],
                        ['id' => 'apac', 'name' => 'Asia Pacific', 'icon' => '🌏', 'officeCount' => 4],
                        ['id' => 'latam', 'name' => 'Latin America', 'icon' => '🌎', 'officeCount' => 3]
                    ],
                    'languages' => [
                        ['code' => 'en', 'name' => 'English'],
                        ['code' => 'es', 'name' => 'Español'],
                        ['code' => 'fr', 'name' => 'Français'],
                        ['code' => 'de', 'name' => 'Deutsch'],
                        ['code' => 'zh', 'name' => '中文'],
                        ['code' => 'ja', 'name' => '日本語'],
                        ['code' => 'pt', 'name' => 'Português'],
                        ['code' => 'ar', 'name' => 'العربية']
                    ],
                    'callbackReasons' => [
                        ['value' => 'general', 'label' => 'General Inquiry'],
                        ['value' => 'technical', 'label' => 'Technical Issue'],
                        ['value' => 'sales', 'label' => 'Sales Question'],
                        ['value' => 'billing', 'label' => 'Billing Issue'],
                        ['value' => 'partnership', 'label' => 'Partnership Opportunity']
                    ],
                    'supportHours' => [
                        ['days' => 'Monday - Friday', 'hours' => '24/7 Support'],
                        ['days' => 'Saturday', 'hours' => '24/7 Support'],
                        ['days' => 'Sunday', 'hours' => '24/7 Support'],
                        ['days' => 'Enterprise Priority', 'hours' => '15-minute response SLA']
                    ],
                    'phoneNumbers' => [
                        [
                            'department' => 'Technical Support',
                            'type' => 'support',
                            'icon' => 'cog',
                            'region' => 'nam',
                            'regionName' => 'North America',
                            'phone' => '+1 (800) 555-0100',
                            'hours' => '24/7',
                            'email' => 'tech@example.com',
                            'priority' => 1,
                            'languages' => ['en', 'es', 'fr'],
                            'alternateNumber' => '+1 (888) 555-0101',
                            'image' => 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=400&h=300&fit=crop'
                        ],
                        [
                            'department' => 'Sales Inquiries',
                            'type' => 'sales',
                            'icon' => 'shopping-bag',
                            'region' => 'nam',
                            'regionName' => 'North America',
                            'phone' => '+1 (800) 555-0200',
                            'hours' => 'Mon-Fri: 8am - 8pm EST',
                            'email' => 'sales@example.com',
                            'priority' => 2,
                            'languages' => ['en', 'es'],
                            'image' => 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=300&fit=crop'
                        ],
                        [
                            'department' => 'Technical Support',
                            'type' => 'support',
                            'icon' => 'cog',
                            'region' => 'emea',
                            'regionName' => 'Europe',
                            'phone' => '+44 20 7946 0123',
                            'hours' => '24/7',
                            'email' => 'tech@example.com',
                            'priority' => 1,
                            'languages' => ['en', 'fr', 'de', 'es'],
                            'alternateNumber' => '+44 20 7946 0124',
                            'image' => 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=300&fit=crop'
                        ],
                        [
                            'department' => 'Technical Support',
                            'type' => 'support',
                            'icon' => 'cog',
                            'region' => 'apac',
                            'regionName' => 'Asia Pacific',
                            'phone' => '+65 6221 7890',
                            'hours' => '24/7',
                            'email' => 'tech@example.com',
                            'priority' => 1,
                            'languages' => ['en', 'zh', 'ja'],
                            'alternateNumber' => '+65 6221 7891',
                            'image' => 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400&h=300&fit=crop'
                        ],
                        [
                            'department' => 'Partnership Inquiries',
                            'type' => 'partnership',
                            'icon' => 'handshake',
                            'region' => 'emea',
                            'regionName' => 'Europe',
                            'phone' => '+44 20 7946 0456',
                            'hours' => 'Mon-Fri: 9am - 6pm GMT',
                            'email' => 'partners@example.com',
                            'priority' => 3,
                            'languages' => ['en', 'fr', 'de'],
                            'image' => 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop'
                        ],
                        [
                            'department' => 'Technical Support',
                            'type' => 'support',
                            'icon' => 'cog',
                            'region' => 'latam',
                            'regionName' => 'Latin America',
                            'phone' => '+55 11 2345 6789',
                            'hours' => '24/7',
                            'email' => 'tech@example.com',
                            'priority' => 1,
                            'languages' => ['es', 'pt', 'en'],
                            'alternateNumber' => '+55 11 2345 6790',
                            'image' => 'https://images.unsplash.com/photo-1549208614-3d2cd153e2e3?w=400&h=300&fit=crop'
                        ]
                    ],
                    'faqCategories' => [
                        ['id' => 'general', 'name' => 'General Questions', 'icon' => 'question', 'description' => 'Common questions about phone support'],
                        ['id' => 'emergency', 'name' => 'Emergency Support', 'icon' => 'shield', 'description' => 'Critical issue response'],
                        ['id' => 'callback', 'name' => 'Callback Service', 'icon' => 'calendar', 'description' => 'Scheduling and callback requests']
                    ],
                    'faqs' => [
                        [
                            'id' => 'faq-1',
                            'category' => 'general',
                            'icon' => 'clock',
                            'question' => 'What are your support hours?',
                            'answer' => 'Technical support is available 24/7/365 for all customers with active subscriptions. Sales and billing support are available Monday through Friday from 9am to 6pm local time in each region. Enterprise customers receive priority 24/7 support with a 15-minute response SLA.',
                            'tags' => ['hours', 'availability', 'schedule', 'sla'],
                            'link' => '/support',
                            'updatedAt' => '2024-01-15',
                            'views' => 1250
                        ],
                        [
                            'id' => 'faq-2',
                            'category' => 'general',
                            'icon' => 'globe',
                            'question' => 'Do you offer support in multiple languages?',
                            'answer' => 'Yes, our global support team provides assistance in over 20 languages including English, Spanish, French, German, Mandarin, Japanese, Portuguese, Arabic, Italian, Dutch, and more. Each regional office is staffed with native or fluent local language speakers.',
                            'tags' => ['languages', 'translation', 'multilingual'],
                            'link' => '/support',
                            'updatedAt' => '2024-01-10',
                            'views' => 980
                        ],
                        [
                            'id' => 'faq-3',
                            'category' => 'emergency',
                            'icon' => 'shield',
                            'question' => 'Is there an emergency support number?',
                            'answer' => 'Yes, enterprise customers have access to our 24/7 emergency hotline at +1 (888) 777-6666. This line is reserved for critical system outages affecting business operations. When calling, please have your account ID ready for verification. Standard support channels should be used for non-urgent issues.',
                            'tags' => ['emergency', 'critical', 'urgent', 'hotline'],
                            'link' => '/emergency',
                            'updatedAt' => '2024-01-18',
                            'views' => 750
                        ],
                        [
                            'id' => 'faq-4',
                            'category' => 'callback',
                            'icon' => 'calendar',
                            'question' => 'How do I request a callback?',
                            'answer' => 'You can request a callback by filling out the callback form on this page. Simply provide your name, phone number, and reason for the callback. Our team will contact you within 30 minutes during business hours. Enterprise customers receive priority callback within 10 minutes.',
                            'tags' => ['callback', 'scheduling', 'request'],
                            'link' => '/callback',
                            'updatedAt' => '2024-01-20',
                            'views' => 620
                        ],
                        [
                            'id' => 'faq-5',
                            'category' => 'general',
                            'icon' => 'cash',
                            'question' => 'Are support calls free?',
                            'answer' => 'Support calls are completely free for all customers with an active subscription. Standard long-distance calling rates may apply depending on your phone carrier and location. We recommend using our toll-free numbers when available in your region. Enterprise customers have access to dedicated toll-free lines.',
                            'tags' => ['cost', 'free', 'charges', 'toll-free'],
                            'link' => '/pricing',
                            'updatedAt' => '2024-01-25',
                            'views' => 890
                        ]
                    ],
                    'contactImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop',
                    'showSecurityNote' => true,
                    'securityText' => 'We never ask for passwords, credit card numbers, or sensitive information over the phone',
                    'contactText' => 'Need help finding the right number? Contact our support team.',
                    'contactButtonText' => 'Contact Us',
                    'contactLink' => '/contact'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 328,
                'section_key' => 'phoneNumbers',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Email Addresses Section
            [
                'id' => 329,
                'section_key' => 'emailAddresses',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => [
                        'backgroundColor' => 'bg-sky-100 dark:bg-sky-900/30',
                        'borderColor' => 'border-sky-200 dark:border-sky-800',
                        'textColor' => 'text-sky-700 dark:text-sky-300',
                        'text' => 'Email Support',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Reach Out',
                        'highlightGradient' => 'from-sky-600 to-blue-600',
                        'highlightedText' => 'Via Email',
                        'suffix' => 'We\'re Just a Message Away'
                    ],
                    'description' => 'Send us an email and our team will get back to you promptly. Choose the right department for your inquiry and expect a response within our guaranteed response times.',
                    'stats' => [
                        ['icon' => 'mail', 'value' => '15+', 'label' => 'Email Channels'],
                        ['icon' => 'clock', 'value' => '< 24hrs', 'label' => 'Response Time'],
                        ['icon' => 'globe', 'value' => '24/7', 'label' => 'Monitoring'],
                        ['icon' => 'users', 'value' => '98%', 'label' => 'Satisfaction Rate']
                    ],
                    'heroImage' => 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=1200&h=400&fit=crop',
                    'categories' => [
                        ['id' => 'general', 'name' => 'General', 'icon' => 'question'],
                        ['id' => 'technical', 'name' => 'Technical', 'icon' => 'cog'],
                        ['id' => 'security', 'name' => 'Security', 'icon' => 'shield'],
                        ['id' => 'billing', 'name' => 'Billing', 'icon' => 'credit-card']
                    ],
                    'emailAddresses' => [
                        [
                            'department' => 'Technical Support',
                            'type' => 'support',
                            'icon' => 'cog',
                            'region' => 'Global',
                            'email' => 'tech.support@example.com',
                            'description' => 'For technical issues, bug reports, and platform assistance',
                            'responseTime' => 'Response within 4 hours (24/7)',
                            'priority' => 1,
                            'image' => 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=400&h=300&fit=crop'
                        ],
                        [
                            'department' => 'Sales Inquiries',
                            'type' => 'sales',
                            'icon' => 'shopping-bag',
                            'region' => 'Global',
                            'email' => 'sales@example.com',
                            'description' => 'For pricing questions, demos, and sales support',
                            'responseTime' => 'Response within 8 business hours',
                            'priority' => 2,
                            'image' => 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=300&fit=crop'
                        ],
                        [
                            'department' => 'Billing Support',
                            'type' => 'billing',
                            'icon' => 'credit-card',
                            'region' => 'Global',
                            'email' => 'billing@example.com',
                            'description' => 'For invoice questions, payment issues, and refunds',
                            'responseTime' => 'Response within 8 business hours',
                            'priority' => 2,
                            'image' => 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=300&fit=crop'
                        ],
                        [
                            'department' => 'Security Team',
                            'type' => 'security',
                            'icon' => 'shield',
                            'region' => 'Global',
                            'email' => 'security@example.com',
                            'description' => 'For security vulnerabilities, incident reports, and security questions',
                            'responseTime' => 'Response within 1 hour (24/7)',
                            'priority' => 1,
                            'image' => 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=300&fit=crop'
                        ],
                        [
                            'department' => 'Partnerships',
                            'type' => 'partnership',
                            'icon' => 'handshake',
                            'region' => 'Global',
                            'email' => 'partners@example.com',
                            'description' => 'For partnership opportunities and alliance inquiries',
                            'responseTime' => 'Response within 12 business hours',
                            'priority' => 3,
                            'image' => 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop'
                        ],
                        [
                            'department' => 'Press & Media',
                            'type' => 'press',
                            'icon' => 'newspaper',
                            'region' => 'Global',
                            'email' => 'press@example.com',
                            'description' => 'For media inquiries, press releases, and interview requests',
                            'responseTime' => 'Response within 4 business hours',
                            'priority' => 2,
                            'image' => 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=300&fit=crop'
                        ]
                    ],
                    'faqs' => [
                        [
                            'id' => 'faq-1',
                            'category' => 'general',
                            'icon' => 'clock',
                            'question' => 'How quickly will I get a response?',
                            'answer' => 'Our response times vary by department: Technical Support responds within 4 hours (24/7), Security within 1 hour, Sales and Billing within 8 business hours, and Partnerships within 12 business hours. Enterprise customers receive priority responses.',
                            'tags' => ['response time', 'sla', 'speed'],
                            'link' => '/sla'
                        ],
                        [
                            'id' => 'faq-2',
                            'category' => 'general',
                            'icon' => 'globe',
                            'question' => 'Do you offer support in multiple languages?',
                            'answer' => 'Yes, our email support is available in English, Spanish, French, German, Japanese, and Portuguese. Please indicate your preferred language in the subject line, and we\'ll route your inquiry to the appropriate team.',
                            'tags' => ['languages', 'translation', 'multilingual'],
                            'link' => '/support'
                        ],
                        [
                            'id' => 'faq-3',
                            'category' => 'security',
                            'icon' => 'shield',
                            'question' => 'How do I report a security vulnerability?',
                            'answer' => 'Please email security@example.com with the details of the vulnerability. We have a responsible disclosure program and will acknowledge your report within 1 hour. Do not share security vulnerabilities on public forums.',
                            'tags' => ['security', 'vulnerability', 'disclosure'],
                            'link' => '/security'
                        ],
                        [
                            'id' => 'faq-4',
                            'category' => 'technical',
                            'icon' => 'cog',
                            'question' => 'What information should I include in my email?',
                            'answer' => 'To help us resolve your issue quickly, please include: your account email, a detailed description of the issue, steps to reproduce (for bugs), screenshots if applicable, and your browser/device information.',
                            'tags' => ['troubleshooting', 'information', 'details'],
                            'link' => '/support'
                        ],
                        [
                            'id' => 'faq-5',
                            'category' => 'billing',
                            'icon' => 'credit-card',
                            'question' => 'How do I request a refund?',
                            'answer' => 'Please email billing@example.com with your account email, invoice number, and reason for the refund request. Refunds are processed within 5-7 business days. Our 14-day money-back guarantee applies to monthly plans.',
                            'tags' => ['refund', 'money back', 'billing'],
                            'link' => '/refund-policy'
                        ]
                    ],
                    'showGuarantee' => true,
                    'guaranteeText' => 'All emails receive a response within 24 hours. Enterprise customers get priority response within 4 hours.',
                    'contactText' => 'Need help finding the right email address? Contact our support team.',
                    'contactButtonText' => 'Contact Us',
                    'contactLink' => '/contact'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 330,
                'section_key' => 'emailAddresses',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => [
                        'backgroundColor' => 'bg-indigo-100 dark:bg-indigo-900/30',
                        'borderColor' => 'border-indigo-200 dark:border-indigo-800',
                        'textColor' => 'text-indigo-700 dark:text-indigo-300',
                        'text' => 'Email Support Center',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Get in',
                        'highlightGradient' => 'from-indigo-600 to-purple-600',
                        'highlightedText' => 'Touch',
                        'suffix' => 'Via Email'
                    ],
                    'description' => 'Connect with the right team through our department-specific email addresses. Whether you need technical support, have sales questions, or want to discuss partnerships, we\'re just an email away.',
                    'stats' => [
                        ['icon' => 'mail', 'value' => '20+', 'label' => 'Email Channels'],
                        ['icon' => 'clock', 'value' => '< 12hrs', 'label' => 'Avg Response'],
                        ['icon' => 'globe', 'value' => '24/7', 'label' => 'Monitoring'],
                        ['icon' => 'users', 'value' => '99%', 'label' => 'Customer Satisfaction']
                    ],
                    'emailTypes' => [
                        ['value' => 'support', 'label' => 'Technical Support', 'icon' => 'cog'],
                        ['value' => 'sales', 'label' => 'Sales', 'icon' => 'shopping-bag'],
                        ['value' => 'billing', 'label' => 'Billing', 'icon' => 'credit-card'],
                        ['value' => 'security', 'label' => 'Security', 'icon' => 'shield'],
                        ['value' => 'partnership', 'label' => 'Partnerships', 'icon' => 'handshake']
                    ],
                    'categories' => [
                        ['id' => 'general', 'name' => 'General'],
                        ['id' => 'technical', 'name' => 'Technical'],
                        ['id' => 'security', 'name' => 'Security'],
                        ['id' => 'billing', 'name' => 'Billing']
                    ],
                    'emailAddresses' => [
                        [
                            'department' => 'Technical Support',
                            'type' => 'support',
                            'icon' => 'cog',
                            'region' => 'Global',
                            'email' => 'tech@example.com',
                            'description' => 'For technical issues, bug reports, API questions, and platform assistance',
                            'responseTime' => 'Response within 4 hours (24/7)',
                            'priority' => 1,
                            'image' => 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=400&h=300&fit=crop'
                        ],
                        [
                            'department' => 'Sales Inquiries',
                            'type' => 'sales',
                            'icon' => 'shopping-bag',
                            'region' => 'Global',
                            'email' => 'sales@example.com',
                            'description' => 'For pricing questions, product demos, and enterprise sales',
                            'responseTime' => 'Response within 8 business hours',
                            'priority' => 2,
                            'image' => 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=300&fit=crop'
                        ],
                        [
                            'department' => 'Billing Support',
                            'type' => 'billing',
                            'icon' => 'credit-card',
                            'region' => 'Global',
                            'email' => 'billing@example.com',
                            'description' => 'For invoice questions, payment issues, and refund requests',
                            'responseTime' => 'Response within 8 business hours',
                            'priority' => 2,
                            'image' => 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=300&fit=crop'
                        ],
                        [
                            'department' => 'Security Team',
                            'type' => 'security',
                            'icon' => 'shield',
                            'region' => 'Global',
                            'email' => 'security@example.com',
                            'description' => 'For security vulnerabilities, incident reports, and security questions',
                            'responseTime' => 'Response within 1 hour (24/7)',
                            'priority' => 1,
                            'image' => 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=300&fit=crop'
                        ],
                        [
                            'department' => 'Partnerships',
                            'type' => 'partnership',
                            'icon' => 'handshake',
                            'region' => 'Global',
                            'email' => 'partners@example.com',
                            'description' => 'For partnership opportunities and alliance inquiries',
                            'responseTime' => 'Response within 12 business hours',
                            'priority' => 3,
                            'image' => 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop'
                        ],
                        [
                            'department' => 'Press & Media',
                            'type' => 'press',
                            'icon' => 'newspaper',
                            'region' => 'Global',
                            'email' => 'press@example.com',
                            'description' => 'For media inquiries and interview requests',
                            'responseTime' => 'Response within 4 business hours',
                            'priority' => 2,
                            'image' => 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=300&fit=crop'
                        ]
                    ],
                    'faqs' => [
                        [
                            'id' => 'faq-1',
                            'category' => 'general',
                            'icon' => 'clock',
                            'question' => 'How quickly will I get a response?',
                            'answer' => 'Response times vary by department: Technical Support responds within 4 hours (24/7), Security within 1 hour, Sales and Billing within 8 business hours, and Partnerships within 12 business hours. Enterprise customers receive priority responses.',
                            'tags' => ['response time', 'sla', 'speed'],
                            'link' => '/sla'
                        ],
                        [
                            'id' => 'faq-2',
                            'category' => 'general',
                            'icon' => 'globe',
                            'question' => 'Do you offer email support in multiple languages?',
                            'answer' => 'Yes, our email support is available in English, Spanish, French, German, Japanese, and Portuguese. Please indicate your preferred language in the subject line, and we\'ll route your inquiry to the appropriate team.',
                            'tags' => ['languages', 'translation', 'multilingual'],
                            'link' => '/support'
                        ],
                        [
                            'id' => 'faq-3',
                            'category' => 'security',
                            'icon' => 'shield',
                            'question' => 'How do I report a security vulnerability?',
                            'answer' => 'Please email security@example.com with the details of the vulnerability. We have a responsible disclosure program and will acknowledge your report within 1 hour. Do not share security vulnerabilities on public forums.',
                            'tags' => ['security', 'vulnerability', 'disclosure'],
                            'link' => '/security'
                        ],
                        [
                            'id' => 'faq-4',
                            'category' => 'technical',
                            'icon' => 'cog',
                            'question' => 'What information should I include in my email?',
                            'answer' => 'To help us resolve your issue quickly, please include: your account email, a detailed description of the issue, steps to reproduce (for bugs), screenshots if applicable, and your browser/device information.',
                            'tags' => ['troubleshooting', 'information', 'details'],
                            'link' => '/support'
                        ],
                        [
                            'id' => 'faq-5',
                            'category' => 'billing',
                            'icon' => 'credit-card',
                            'question' => 'How do I request a refund?',
                            'answer' => 'Please email billing@example.com with your account email, invoice number, and reason for the refund request. Refunds are processed within 5-7 business days. Our 14-day money-back guarantee applies to monthly plans.',
                            'tags' => ['refund', 'money back', 'billing'],
                            'link' => '/refund-policy'
                        ]
                    ],
                    'showGuarantee' => true,
                    'guaranteeText' => 'All emails receive a response within 24 hours. Enterprise customers get priority response within 4 hours.',
                    'contactText' => 'Need help finding the right email address? Contact our support team.',
                    'contactButtonText' => 'Contact Us',
                    'contactLink' => '/contact'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 331,
                'section_key' => 'emailAddresses',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'backgroundColor' => 'bg-emerald-100 dark:bg-emerald-900/30',
                        'borderColor' => 'border-emerald-200 dark:border-emerald-800',
                        'textColor' => 'text-emerald-700 dark:text-emerald-300',
                        'text' => 'Email Support Hub',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Send Us',
                        'highlightGradient' => 'from-emerald-600 to-teal-600',
                        'highlightedText' => 'a Message',
                        'suffix' => 'We\'re Here to Help'
                    ],
                    'description' => 'Connect with our global support team via email. Choose the right department, include relevant details, and expect a prompt response. Your questions matter to us.',
                    'stats' => [
                        ['icon' => 'mail', 'value' => '25+', 'label' => 'Email Channels'],
                        ['icon' => 'clock', 'value' => '< 24hrs', 'label' => 'Response SLA'],
                        ['icon' => 'globe', 'value' => '24/7', 'label' => 'Monitoring'],
                        ['icon' => 'users', 'value' => '500+', 'label' => 'Team Members']
                    ],
                    'heroImage' => 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=1200&h=400&fit=crop',
                    'emailTypes' => [
                        ['value' => 'support', 'label' => 'Technical Support', 'icon' => 'cog'],
                        ['value' => 'sales', 'label' => 'Sales', 'icon' => 'shopping-bag'],
                        ['value' => 'billing', 'label' => 'Billing', 'icon' => 'credit-card'],
                        ['value' => 'security', 'label' => 'Security', 'icon' => 'shield'],
                        ['value' => 'partnership', 'label' => 'Partnerships', 'icon' => 'handshake']
                    ],
                    'regions' => [
                        ['id' => 'nam', 'name' => 'North America', 'icon' => '🌎'],
                        ['id' => 'emea', 'name' => 'Europe', 'icon' => '🌍'],
                        ['id' => 'apac', 'name' => 'Asia Pacific', 'icon' => '🌏'],
                        ['id' => 'latam', 'name' => 'Latin America', 'icon' => '🌎']
                    ],
                    'categories' => [
                        ['id' => 'general', 'name' => 'General', 'icon' => 'question', 'description' => 'General email support questions'],
                        ['id' => 'technical', 'name' => 'Technical', 'icon' => 'cog', 'description' => 'Technical issue resolution'],
                        ['id' => 'security', 'name' => 'Security', 'icon' => 'shield', 'description' => 'Security and privacy concerns'],
                        ['id' => 'billing', 'name' => 'Billing', 'icon' => 'credit-card', 'description' => 'Billing and payment questions']
                    ],
                    'emailAddresses' => [
                        [
                            'department' => 'Technical Support',
                            'type' => 'support',
                            'icon' => 'cog',
                            'region' => 'Global',
                            'email' => 'tech@example.com',
                            'description' => 'For technical issues, bug reports, API questions, and platform assistance',
                            'responseTime' => 'Response within 4 hours (24/7)',
                            'priority' => 1,
                            'languages' => ['en', 'es', 'fr', 'de'],
                            'availability' => '24/7',
                            'image' => 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=400&h=300&fit=crop'
                        ],
                        [
                            'department' => 'Sales Inquiries',
                            'type' => 'sales',
                            'icon' => 'shopping-bag',
                            'region' => 'Global',
                            'email' => 'sales@example.com',
                            'description' => 'For pricing questions, product demos, and enterprise sales',
                            'responseTime' => 'Response within 8 business hours',
                            'priority' => 2,
                            'languages' => ['en', 'es', 'fr'],
                            'availability' => 'Mon-Fri, 9am-6pm local',
                            'image' => 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=300&fit=crop'
                        ],
                        [
                            'department' => 'Billing Support',
                            'type' => 'billing',
                            'icon' => 'credit-card',
                            'region' => 'Global',
                            'email' => 'billing@example.com',
                            'description' => 'For invoice questions, payment issues, and refund requests',
                            'responseTime' => 'Response within 8 business hours',
                            'priority' => 2,
                            'languages' => ['en'],
                            'availability' => 'Mon-Fri, 9am-6pm EST',
                            'image' => 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=300&fit=crop'
                        ],
                        [
                            'department' => 'Security Team',
                            'type' => 'security',
                            'icon' => 'shield',
                            'region' => 'Global',
                            'email' => 'security@example.com',
                            'description' => 'For security vulnerabilities, incident reports, and security questions',
                            'responseTime' => 'Response within 1 hour (24/7)',
                            'priority' => 1,
                            'languages' => ['en'],
                            'availability' => '24/7',
                            'image' => 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=300&fit=crop'
                        ],
                        [
                            'department' => 'Partnerships',
                            'type' => 'partnership',
                            'icon' => 'handshake',
                            'region' => 'Global',
                            'email' => 'partners@example.com',
                            'description' => 'For partnership opportunities and alliance inquiries',
                            'responseTime' => 'Response within 12 business hours',
                            'priority' => 3,
                            'languages' => ['en'],
                            'availability' => 'Mon-Fri, 9am-6pm',
                            'image' => 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop'
                        ],
                        [
                            'department' => 'Press & Media',
                            'type' => 'press',
                            'icon' => 'newspaper',
                            'region' => 'Global',
                            'email' => 'press@example.com',
                            'description' => 'For media inquiries and interview requests',
                            'responseTime' => 'Response within 4 business hours',
                            'priority' => 2,
                            'languages' => ['en'],
                            'availability' => 'Mon-Fri, 9am-6pm',
                            'image' => 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=300&fit=crop'
                        ]
                    ],
                    'autoResponses' => [
                        'You\'ll receive an automated acknowledgment within 5 minutes',
                        'Our team reviews your message and assigns it to the right specialist',
                        'A support agent responds with a solution or requests more information',
                        'We follow up to ensure your issue is fully resolved'
                    ],
                    'faqs' => [
                        [
                            'id' => 'faq-1',
                            'category' => 'general',
                            'icon' => 'clock',
                            'question' => 'How quickly will I get a response?',
                            'answer' => 'Response times vary by department: Technical Support responds within 4 hours (24/7), Security within 1 hour, Sales and Billing within 8 business hours, and Partnerships within 12 business hours. Enterprise customers receive priority responses within 2 hours.',
                            'tags' => ['response time', 'sla', 'speed'],
                            'link' => '/sla',
                            'updatedAt' => '2024-01-15',
                            'views' => 1250
                        ],
                        [
                            'id' => 'faq-2',
                            'category' => 'general',
                            'icon' => 'globe',
                            'question' => 'Do you offer email support in multiple languages?',
                            'answer' => 'Yes, our email support is available in English, Spanish, French, German, Japanese, Portuguese, and Italian. Please indicate your preferred language in the subject line (e.g., [FR] for French), and we\'ll route your inquiry to the appropriate team.',
                            'tags' => ['languages', 'translation', 'multilingual'],
                            'link' => '/support',
                            'updatedAt' => '2024-01-10',
                            'views' => 980
                        ],
                        [
                            'id' => 'faq-3',
                            'category' => 'security',
                            'icon' => 'shield',
                            'question' => 'How do I report a security vulnerability?',
                            'answer' => 'Please email security@example.com with the details of the vulnerability. Use PGP encryption if possible (our public key is available on our security page). We have a responsible disclosure program and will acknowledge your report within 1 hour. Do not share security vulnerabilities on public forums.',
                            'tags' => ['security', 'vulnerability', 'disclosure', 'pgp'],
                            'link' => '/security',
                            'updatedAt' => '2024-01-18',
                            'views' => 750
                        ],
                        [
                            'id' => 'faq-4',
                            'category' => 'technical',
                            'icon' => 'cog',
                            'question' => 'What information should I include in my email?',
                            'answer' => 'To help us resolve your issue quickly, please include: your account email, a detailed description of the issue, steps to reproduce (for bugs), screenshots if applicable, your browser/device information, and any error messages you\'re seeing. The more detail, the faster we can help.',
                            'tags' => ['troubleshooting', 'information', 'details'],
                            'link' => '/support',
                            'updatedAt' => '2024-01-20',
                            'views' => 620
                        ],
                        [
                            'id' => 'faq-5',
                            'category' => 'billing',
                            'icon' => 'credit-card',
                            'question' => 'How do I request a refund?',
                            'answer' => 'Please email billing@example.com with your account email, invoice number, and reason for the refund request. Refunds are processed within 5-7 business days. Our 14-day money-back guarantee applies to monthly plans. Annual plans are non-refundable but can be cancelled to prevent renewal.',
                            'tags' => ['refund', 'money back', 'billing', 'cancellation'],
                            'link' => '/refund-policy',
                            'updatedAt' => '2024-01-25',
                            'views' => 890
                        ]
                    ],
                    'contactImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop',
                    'showGuarantee' => true,
                    'guaranteeText' => 'All emails receive a response within 24 hours. Enterprise customers get priority response within 4 hours.',
                    'contactText' => 'Need help finding the right email address? Contact our support team.',
                    'contactButtonText' => 'Contact Us',
                    'contactLink' => '/contact'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 332,
                'section_key' => 'emailAddresses',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Live Chat Option Section
            [
                'id' => 333,
                'section_key' => 'liveChatOption',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => [
                        'backgroundColor' => 'bg-purple-100 dark:bg-purple-900/30',
                        'borderColor' => 'border-purple-200 dark:border-purple-800',
                        'textColor' => 'text-purple-700 dark:text-purple-300',
                        'text' => 'Live Chat',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Chat with',
                        'highlightGradient' => 'from-purple-600 to-pink-600',
                        'highlightedText' => 'Our Team',
                        'suffix' => 'Real-Time Support'
                    ],
                    'description' => 'Get instant answers from our support specialists. Live chat is the fastest way to resolve your questions and get the help you need, right when you need it.',
                    'stats' => [
                        ['icon' => 'chat', 'value' => '< 2min', 'label' => 'Avg Response Time'],
                        ['icon' => 'clock', 'value' => '24/7', 'label' => 'Enterprise Support'],
                        ['icon' => 'users', 'value' => '15+', 'label' => 'Agents Online'],
                        ['icon' => 'globe', 'value' => '98%', 'label' => 'Satisfaction Rate']
                    ],
                    'heroImage' => 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=1200&h=400&fit=crop',
                    'agentsOnline' => 15,
                    'chatHours' => [
                        ['days' => 'Monday - Friday', 'hours' => '24/7 Support'],
                        ['days' => 'Saturday', 'hours' => '24/7 Support'],
                        ['days' => 'Sunday', 'hours' => '24/7 Support'],
                        ['days' => 'Enterprise Priority', 'hours' => '15-minute response SLA']
                    ],
                    'languages' => ['English', 'Spanish', 'French', 'German', 'Japanese', 'Portuguese', 'Italian', 'Dutch'],
                    'categories' => [
                        ['id' => 'general', 'name' => 'General', 'icon' => 'question'],
                        ['id' => 'technical', 'name' => 'Technical', 'icon' => 'cog'],
                        ['id' => 'billing', 'name' => 'Billing', 'icon' => 'credit-card'],
                        ['id' => 'account', 'name' => 'Account', 'icon' => 'user']
                    ],
                    'faqs' => [
                        [
                            'id' => 'faq-1',
                            'category' => 'general',
                            'icon' => 'clock',
                            'question' => 'How fast is the live chat response?',
                            'answer' => 'Our average response time is under 2 minutes. During peak hours, wait times may be slightly longer, but we always have multiple agents available. Enterprise customers receive priority routing with response times under 30 seconds.',
                            'tags' => ['response time', 'speed', 'wait time'],
                            'link' => '/chat',
                            'views' => 1250,
                            'updatedAt' => '2024-01-15'
                        ],
                        [
                            'id' => 'faq-2',
                            'category' => 'general',
                            'icon' => 'globe',
                            'question' => 'What languages do you support in chat?',
                            'answer' => 'Our live chat support is available in English, Spanish, French, German, Japanese, Portuguese, Italian, and Dutch. When you start a chat, you can select your preferred language, and we\'ll route you to an agent who speaks it.',
                            'tags' => ['languages', 'translation', 'multilingual'],
                            'link' => '/support',
                            'views' => 980,
                            'updatedAt' => '2024-01-20'
                        ],
                        [
                            'id' => 'faq-3',
                            'category' => 'technical',
                            'icon' => 'cog',
                            'question' => 'Can I share screenshots or files in chat?',
                            'answer' => 'Yes, our chat system supports file sharing. You can upload screenshots, error logs, and documents up to 10MB. This helps our support team diagnose issues faster and provide more accurate solutions.',
                            'tags' => ['screenshots', 'files', 'attachments'],
                            'link' => '/chat',
                            'views' => 750,
                            'updatedAt' => '2024-01-10'
                        ],
                        [
                            'id' => 'faq-4',
                            'category' => 'general',
                            'icon' => 'users',
                            'question' => 'Is live chat available 24/7?',
                            'answer' => 'Live chat is available 24/7 for all customers. Enterprise customers receive priority routing with guaranteed response within 15 minutes. Standard support may have slightly longer wait times during off-peak hours.',
                            'tags' => ['hours', 'availability', '24/7'],
                            'link' => '/support',
                            'views' => 890,
                            'updatedAt' => '2024-01-18'
                        ],
                        [
                            'id' => 'faq-5',
                            'category' => 'account',
                            'icon' => 'user',
                            'question' => 'Do I need an account to use live chat?',
                            'answer' => 'You don\'t need an account to start a chat, but providing your email helps us follow up if the chat gets disconnected. Having an account allows us to access your account information and provide faster, more personalized support.',
                            'tags' => ['account', 'login', 'registration'],
                            'link' => '/signup',
                            'views' => 620,
                            'updatedAt' => '2024-01-25'
                        ]
                    ],
                    'showGuarantee' => true,
                    'guaranteeText' => 'Enterprise customers get priority chat routing and 24/7 live chat support with <15 minute response SLA',
                    'contactText' => 'Need immediate assistance? Start a live chat with our support team.',
                    'contactButtonText' => 'Start Live Chat',
                    'contactLink' => '/chat'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 334,
                'section_key' => 'liveChatOption',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => [
                        'backgroundColor' => 'bg-rose-100 dark:bg-rose-900/30',
                        'borderColor' => 'border-rose-200 dark:border-rose-800',
                        'textColor' => 'text-rose-700 dark:text-rose-300',
                        'text' => 'Live Support',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Instant',
                        'highlightGradient' => 'from-rose-600 to-pink-600',
                        'highlightedText' => 'Live Chat',
                        'suffix' => 'Support Anytime'
                    ],
                    'description' => 'Get real-time answers from our support specialists. Live chat is the fastest way to resolve your questions, with average response times under 2 minutes.',
                    'stats' => [
                        ['icon' => 'chat', 'value' => '< 2min', 'label' => 'Avg Response'],
                        ['icon' => 'clock', 'value' => '24/7', 'label' => 'Enterprise Support'],
                        ['icon' => 'users', 'value' => '12+', 'label' => 'Agents Online'],
                        ['icon' => 'globe', 'value' => '99%', 'label' => 'Satisfaction Rate']
                    ],
                    'agentsOnline' => 12,
                    'chatHours' => [
                        ['days' => 'Monday - Friday', 'hours' => '24/7 Support'],
                        ['days' => 'Saturday', 'hours' => '24/7 Support'],
                        ['days' => 'Sunday', 'hours' => '24/7 Support']
                    ],
                    'languages' => [
                        ['code' => 'en', 'name' => 'English'],
                        ['code' => 'es', 'name' => 'Español'],
                        ['code' => 'fr', 'name' => 'Français'],
                        ['code' => 'de', 'name' => 'Deutsch'],
                        ['code' => 'ja', 'name' => '日本語'],
                        ['code' => 'pt', 'name' => 'Português']
                    ],
                    'quickResponses' => [
                        'I need help with a technical issue',
                        'I have a billing question',
                        'How do I reset my password?',
                        'I want to upgrade my plan'
                    ],
                    'categories' => [
                        ['id' => 'general', 'name' => 'General', 'icon' => 'question'],
                        ['id' => 'technical', 'name' => 'Technical', 'icon' => 'cog'],
                        ['id' => 'billing', 'name' => 'Billing', 'icon' => 'credit-card'],
                        ['id' => 'account', 'name' => 'Account', 'icon' => 'user']
                    ],
                    'faqs' => [
                        [
                            'id' => 'faq-1',
                            'category' => 'general',
                            'icon' => 'clock',
                            'question' => 'How fast is the live chat response?',
                            'answer' => 'Our average response time is under 2 minutes. During peak hours, wait times may be slightly longer, but we always have multiple agents available. Enterprise customers receive priority routing with response times under 30 seconds.',
                            'tags' => ['response time', 'speed', 'wait time'],
                            'link' => '/chat',
                            'views' => 1250,
                            'updatedAt' => '2024-01-15'
                        ],
                        [
                            'id' => 'faq-2',
                            'category' => 'general',
                            'icon' => 'globe',
                            'question' => 'What languages do you support in chat?',
                            'answer' => 'Our live chat support is available in English, Spanish, French, German, Japanese, and Portuguese. When you start a chat, you can select your preferred language, and we\'ll route you to an agent who speaks it.',
                            'tags' => ['languages', 'translation', 'multilingual'],
                            'link' => '/support',
                            'views' => 980,
                            'updatedAt' => '2024-01-20'
                        ],
                        [
                            'id' => 'faq-3',
                            'category' => 'technical',
                            'icon' => 'cog',
                            'question' => 'Can I share screenshots or files in chat?',
                            'answer' => 'Yes, our chat system supports file sharing. You can upload screenshots, error logs, and documents up to 10MB. This helps our support team diagnose issues faster and provide more accurate solutions.',
                            'tags' => ['screenshots', 'files', 'attachments'],
                            'link' => '/chat',
                            'views' => 750,
                            'updatedAt' => '2024-01-10'
                        ],
                        [
                            'id' => 'faq-4',
                            'category' => 'general',
                            'icon' => 'users',
                            'question' => 'Is live chat available 24/7?',
                            'answer' => 'Live chat is available 24/7 for all customers. Enterprise customers receive priority routing with guaranteed response within 15 minutes. Standard support may have slightly longer wait times during off-peak hours.',
                            'tags' => ['hours', 'availability', '24/7'],
                            'link' => '/support',
                            'views' => 890,
                            'updatedAt' => '2024-01-18'
                        ],
                        [
                            'id' => 'faq-5',
                            'category' => 'account',
                            'icon' => 'user',
                            'question' => 'Do I need an account to use live chat?',
                            'answer' => 'You don\'t need an account to start a chat, but providing your email helps us follow up if the chat gets disconnected. Having an account allows us to access your account information and provide faster, more personalized support.',
                            'tags' => ['account', 'login', 'registration'],
                            'link' => '/signup',
                            'views' => 620,
                            'updatedAt' => '2024-01-25'
                        ]
                    ],
                    'showGuarantee' => true,
                    'guaranteeText' => 'Enterprise customers get priority chat routing and 24/7 live chat support with <15 minute response SLA',
                    'contactText' => 'Need immediate assistance? Start a live chat with our support team.',
                    'contactButtonText' => 'Start Live Chat',
                    'contactLink' => '/chat'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 335,
                'section_key' => 'liveChatOption',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'backgroundColor' => 'bg-cyan-100 dark:bg-cyan-900/30',
                        'borderColor' => 'border-cyan-200 dark:border-cyan-800',
                        'textColor' => 'text-cyan-700 dark:text-cyan-300',
                        'text' => 'Live Support',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Real-Time',
                        'highlightGradient' => 'from-cyan-600 to-blue-600',
                        'highlightedText' => 'Chat Support',
                        'suffix' => 'Get Help Instantly'
                    ],
                    'description' => 'Connect with our support specialists in real-time. Live chat is the fastest way to get answers, resolve issues, and get back to business.',
                    'stats' => [
                        ['icon' => 'chat', 'value' => '< 2min', 'label' => 'Avg Response'],
                        ['icon' => 'clock', 'value' => '24/7', 'label' => 'Enterprise Support'],
                        ['icon' => 'users', 'value' => '10+', 'label' => 'Agents Online'],
                        ['icon' => 'globe', 'value' => '98%', 'label' => 'Satisfaction Rate']
                    ],
                    'heroImage' => 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=1200&h=400&fit=crop',
                    'agentsOnline' => 10,
                    'chatHours' => [
                        ['days' => 'Monday - Friday', 'hours' => '24/7 Support'],
                        ['days' => 'Saturday', 'hours' => '24/7 Support'],
                        ['days' => 'Sunday', 'hours' => '24/7 Support']
                    ],
                    'languages' => [
                        ['code' => 'en', 'name' => 'English'],
                        ['code' => 'es', 'name' => 'Español'],
                        ['code' => 'fr', 'name' => 'Français'],
                        ['code' => 'de', 'name' => 'Deutsch'],
                        ['code' => 'ja', 'name' => '日本語'],
                        ['code' => 'pt', 'name' => 'Português'],
                        ['code' => 'it', 'name' => 'Italiano'],
                        ['code' => 'nl', 'name' => 'Nederlands']
                    ],
                    'resources' => [
                        ['icon' => '📘', 'title' => 'Chat Guide', 'description' => 'Learn how to get the most out of live chat', 'linkText' => 'Read Guide', 'link' => '/guides/chat'],
                        ['icon' => '🎥', 'title' => 'Video Tutorial', 'description' => 'Watch how our chat support works', 'linkText' => 'Watch Video', 'link' => '/videos/chat'],
                        ['icon' => '📋', 'title' => 'Best Practices', 'description' => 'Tips for effective chat communication', 'linkText' => 'Learn More', 'link' => '/best-practices/chat']
                    ],
                    'categories' => [
                        ['id' => 'general', 'name' => 'General', 'icon' => 'question', 'description' => 'General chat support questions'],
                        ['id' => 'technical', 'name' => 'Technical', 'icon' => 'cog', 'description' => 'Technical issue resolution'],
                        ['id' => 'billing', 'name' => 'Billing', 'icon' => 'credit-card', 'description' => 'Billing and payment questions'],
                        ['id' => 'account', 'name' => 'Account', 'icon' => 'user', 'description' => 'Account management help']
                    ],
                    'faqs' => [
                        [
                            'id' => 'faq-1',
                            'category' => 'general',
                            'icon' => 'clock',
                            'question' => 'How fast is the live chat response?',
                            'answer' => 'Our average response time is under 2 minutes. During peak hours, wait times may be slightly longer, but we always have multiple agents available. Enterprise customers receive priority routing with response times under 30 seconds.',
                            'tags' => ['response time', 'speed', 'wait time'],
                            'link' => '/chat',
                            'views' => 1250,
                            'updatedAt' => '2024-01-15'
                        ],
                        [
                            'id' => 'faq-2',
                            'category' => 'general',
                            'icon' => 'globe',
                            'question' => 'What languages do you support in chat?',
                            'answer' => 'Our live chat support is available in English, Spanish, French, German, Japanese, Portuguese, Italian, and Dutch. When you start a chat, you can select your preferred language, and we\'ll route you to an agent who speaks it.',
                            'tags' => ['languages', 'translation', 'multilingual'],
                            'link' => '/support',
                            'views' => 980,
                            'updatedAt' => '2024-01-20'
                        ],
                        [
                            'id' => 'faq-3',
                            'category' => 'technical',
                            'icon' => 'cog',
                            'question' => 'Can I share screenshots or files in chat?',
                            'answer' => 'Yes, our chat system supports file sharing. You can upload screenshots, error logs, and documents up to 10MB. This helps our support team diagnose issues faster and provide more accurate solutions.',
                            'tags' => ['screenshots', 'files', 'attachments'],
                            'link' => '/chat',
                            'views' => 750,
                            'updatedAt' => '2024-01-10'
                        ],
                        [
                            'id' => 'faq-4',
                            'category' => 'general',
                            'icon' => 'users',
                            'question' => 'Is live chat available 24/7?',
                            'answer' => 'Live chat is available 24/7 for all customers. Enterprise customers receive priority routing with guaranteed response within 15 minutes. Standard support may have slightly longer wait times during off-peak hours.',
                            'tags' => ['hours', 'availability', '24/7'],
                            'link' => '/support',
                            'views' => 890,
                            'updatedAt' => '2024-01-18'
                        ],
                        [
                            'id' => 'faq-5',
                            'category' => 'account',
                            'icon' => 'user',
                            'question' => 'Do I need an account to use live chat?',
                            'answer' => 'You don\'t need an account to start a chat, but providing your email helps us follow up if the chat gets disconnected. Having an account allows us to access your account information and provide faster, more personalized support.',
                            'tags' => ['account', 'login', 'registration'],
                            'link' => '/signup',
                            'views' => 620,
                            'updatedAt' => '2024-01-25'
                        ]
                    ],
                    'agentImage' => 'https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=600&h=400&fit=crop',
                    'contactImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop',
                    'showGuarantee' => true,
                    'guaranteeText' => 'Enterprise customers get priority chat routing and 24/7 live chat support with <15 minute response SLA',
                    'contactText' => 'Need immediate assistance? Start a live chat with our support team.',
                    'contactButtonText' => 'Start Live Chat',
                    'contactLink' => '/chat'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 336,
                'section_key' => 'liveChatOption',
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
