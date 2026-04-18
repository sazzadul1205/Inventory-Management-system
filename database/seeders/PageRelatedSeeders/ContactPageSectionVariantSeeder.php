<?php

namespace Database\Seeders\PageRelatedSeeders;

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


        ];

        // Add the new Services variants
        DB::table('section_variants')->upsert(
            $variants,
            ['section_key', 'variant'],
            ['config', 'updated_at']
        );
    }
}
