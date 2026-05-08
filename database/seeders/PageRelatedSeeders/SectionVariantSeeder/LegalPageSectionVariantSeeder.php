<?php

namespace Database\Seeders\PageRelatedSeeders\SectionVariantSeeder;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class LegalPageSectionVariantSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Upsert only this page's variants so other page seeders do not get wiped out.
        $variants = [

            // Privacy Policy Variants
            [
                'id' => 673,
                'section_key' => 'privacyPolicy',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => 'Legal & Compliance',
                    'title' => [
                        'prefix' => 'Privacy',
                        'highlight' => 'Policy'
                    ],
                    'description' => 'At SupplyChainPro, we take your privacy seriously. This policy describes how we collect, use, and protect your personal information when you use our mobile application and services.',
                    'lastUpdated' => 'April 8, 2026',
                    'company' => [
                        'name' => 'SupplyChainPro Inc.',
                        'address' => '123 Supply Chain Boulevard, Suite 400, San Francisco, CA 94105',
                        'email' => 'privacy@supplychainpro.com',
                        'phone' => '+1 (800) 555-0123',
                        'dpo' => 'Data Protection Officer: Dr. Sarah Chen',
                        'registration' => 'California Consumer Privacy Act (CCPA) compliant',
                        'certifications' => ['SOC 2 Type II', 'ISO 27001', 'GDPR Ready']
                    ],
                    'sections' => [
                        ['id' => 'introduction', 'label' => 'Introduction', 'icon' => 'document'],
                        ['id' => 'information-collection', 'label' => 'Information We Collect', 'icon' => 'database'],
                        ['id' => 'usage-of-information', 'label' => 'How We Use Your Information', 'icon' => 'chip'],
                        ['id' => 'data-sharing', 'label' => 'Data Sharing & Disclosure', 'icon' => 'globe'],
                        ['id' => 'data-security', 'label' => 'Data Security', 'icon' => 'shield'],
                        ['id' => 'user-rights', 'label' => 'Your Rights & Choices', 'icon' => 'user'],
                        ['id' => 'cookies', 'label' => 'Cookies & Tracking', 'icon' => 'eye'],
                        ['id' => 'children-privacy', 'label' => 'Children\'s Privacy', 'icon' => 'user-group'],
                        ['id' => 'international-transfer', 'label' => 'International Data Transfers', 'icon' => 'location'],
                        ['id' => 'policy-updates', 'label' => 'Updates to This Policy', 'icon' => 'refresh'],
                        ['id' => 'contact-us', 'label' => 'Contact Us', 'icon' => 'mail']
                    ],
                    'dataCollectionCategories' => [
                        [
                            'title' => 'Personal Information',
                            'icon' => 'user',
                            'items' => [
                                'Full name and contact information (email address, phone number)',
                                'Billing and shipping addresses',
                                'Company name and job title',
                                'Government-issued ID for verification purposes'
                            ]
                        ],
                        [
                            'title' => 'Account Information',
                            'icon' => 'briefcase',
                            'items' => [
                                'Username and password (encrypted)',
                                'Profile preferences and settings',
                                'Account activity logs',
                                'Team member associations and permissions'
                            ]
                        ],
                        [
                            'title' => 'Supply Chain Data',
                            'icon' => 'clipboard',
                            'items' => [
                                'Inventory levels and product information',
                                'Shipment tracking details and locations',
                                'Supplier and customer information',
                                'Order history and transaction records'
                            ]
                        ],
                        [
                            'title' => 'Technical Information',
                            'icon' => 'chip',
                            'items' => [
                                'Device information (model, OS version, unique device identifiers)',
                                'IP address and network information',
                                'App usage statistics and crash reports',
                                'Browser type and settings'
                            ]
                        ],
                        [
                            'title' => 'Location Information',
                            'icon' => 'location',
                            'items' => [
                                'Precise GPS location (with your consent for shipment tracking)',
                                'Approximate location based on IP address',
                                'Warehouse and facility check-in/out locations'
                            ]
                        ],
                        [
                            'title' => 'Payment Information',
                            'icon' => 'credit-card',
                            'items' => [
                                'Payment method details (processed by secure third-party payment processors)',
                                'Billing history and invoices',
                                'Subscription plan information'
                            ]
                        ]
                    ],
                    'dataUsagePurposes' => [
                        [
                            'title' => 'Service Delivery',
                            'description' => 'To provide, maintain, and improve our supply chain management services',
                            'items' => [
                                'Process shipments and track inventory',
                                'Generate analytics and reports',
                                'Sync data across devices',
                                'Provide customer support'
                            ]
                        ],
                        [
                            'title' => 'Communication',
                            'description' => 'To communicate with you about your account and our services',
                            'items' => [
                                'Send important updates about your shipments',
                                'Respond to support inquiries',
                                'Notify you about service changes',
                                'Share relevant product announcements'
                            ]
                        ],
                        [
                            'title' => 'Security & Compliance',
                            'description' => 'To protect our services and comply with legal obligations',
                            'items' => [
                                'Detect and prevent fraud or unauthorized access',
                                'Maintain audit logs for compliance',
                                'Enforce our terms of service',
                                'Comply with legal and regulatory requirements'
                            ]
                        ],
                        [
                            'title' => 'Improvement & Development',
                            'description' => 'To analyze usage and improve our platform',
                            'items' => [
                                'Identify usage trends and patterns',
                                'Develop new features and functionalities',
                                'Optimize app performance',
                                'Conduct research and analytics'
                            ]
                        ]
                    ],
                    'dataSharingScenarios' => [
                        [
                            'title' => 'Service Providers',
                            'icon' => 'office-building',
                            'items' => [
                                'Cloud hosting providers (AWS, Google Cloud)',
                                'Payment processors (Stripe, PayPal)',
                                'Customer support platforms',
                                'Analytics and monitoring services'
                            ],
                            'note' => 'These providers are contractually obligated to protect your data and can only use it for specified services.'
                        ],
                        [
                            'title' => 'Business Partners',
                            'icon' => 'office-building',
                            'items' => [
                                'Logistics and shipping carriers',
                                'Supplier and vendor platforms',
                                'Integration partners (ERP, WMS systems)'
                            ],
                            'note' => 'Data shared is limited to what\'s necessary for supply chain operations.'
                        ],
                        [
                            'title' => 'Legal Compliance',
                            'icon' => 'scale',
                            'items' => [
                                'Law enforcement or government agencies when required by law',
                                'Legal proceedings to protect our rights',
                                'Regulatory compliance audits'
                            ],
                            'note' => 'We will notify you of such requests unless prohibited by law.'
                        ]
                    ],
                    'userRights' => [
                        ['title' => 'Right to Access', 'description' => 'You can request a copy of all personal data we hold about you.', 'icon' => 'eye', 'timeframe' => 'Respond within 30 days'],
                        ['title' => 'Right to Rectification', 'description' => 'You can correct inaccurate or incomplete information.', 'icon' => 'document', 'timeframe' => 'Immediate update available'],
                        ['title' => 'Right to Deletion', 'description' => 'You can request deletion of your data (subject to legal retention requirements).', 'icon' => 'trash', 'timeframe' => '90 days for complete removal'],
                        ['title' => 'Right to Restrict Processing', 'description' => 'You can limit how we use your data in certain circumstances.', 'icon' => 'shield-exclamation', 'timeframe' => 'Within 15 days'],
                        ['title' => 'Right to Data Portability', 'description' => 'You can receive your data in a structured, machine-readable format.', 'icon' => 'database', 'timeframe' => '30 days for export'],
                        ['title' => 'Right to Object', 'description' => 'You can object to specific data processing activities.', 'icon' => 'refresh', 'timeframe' => 'Within 15 days']
                    ],
                    'cookieTypes' => [
                        ['name' => 'Essential Cookies', 'description' => 'Required for basic app functionality and security.', 'duration' => 'Session', 'required' => true],
                        ['name' => 'Preference Cookies', 'description' => 'Remember your settings and preferences.', 'duration' => '1 year', 'required' => false],
                        ['name' => 'Analytics Cookies', 'description' => 'Help us understand how you use the app.', 'duration' => '2 years', 'required' => false],
                        ['name' => 'Marketing Cookies', 'description' => 'Used to deliver relevant advertisements.', 'duration' => '90 days', 'required' => false]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 674,
                'section_key' => 'privacyPolicy',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => 'Legal & Compliance',
                    'title' => [
                        'prefix' => 'Privacy',
                        'highlight' => 'Policy'
                    ],
                    'description' => 'At SupplyChainPro, we take your privacy seriously. This policy describes how we collect, use, and protect your personal information.',
                    'lastUpdated' => 'April 8, 2026',
                    'quickFacts' => [
                        ['label' => 'Data Collection Categories', 'value' => '6', 'icon' => 'database'],
                        ['label' => 'User Rights', 'value' => '6', 'icon' => 'user'],
                        ['label' => 'Security Certifications', 'value' => '4', 'icon' => 'shield'],
                        ['label' => 'Response Time', 'value' => '30 days', 'icon' => 'clock']
                    ],
                    'sections' => [
                        [
                            'id' => 'introduction',
                            'label' => 'Introduction',
                            'icon' => 'document',
                            'summary' => 'Overview of our privacy commitment and policy scope',
                            'content' => [
                                'title' => 'Introduction to Our Privacy Practices',
                                'paragraphs' => [
                                    'Welcome to SupplyChainPro\'s Privacy Policy. Your privacy is critically important to us. This Privacy Policy applies to all information collected through our mobile application ("App"), website, and related services (collectively, the "Services").',
                                    'By using our Services, you agree to the collection and use of information in accordance with this policy. We are committed to protecting your personal data and being transparent about how we handle it.',
                                    'This policy explains what data we collect, why we collect it, how we use it, and the choices you have regarding your information.'
                                ],
                                'keyPoints' => [
                                    'We only collect data necessary for service delivery',
                                    'You retain ownership of your business data',
                                    'We never sell your personal information',
                                    'You can request data deletion at any time'
                                ]
                            ]
                        ],
                        [
                            'id' => 'information-collection',
                            'label' => 'Information We Collect',
                            'icon' => 'database',
                            'summary' => 'Categories of personal and business data we gather',
                            'content' => [
                                'title' => 'Data Collection Categories',
                                'categories' => [
                                    ['name' => 'Personal Information', 'icon' => 'user', 'items' => ['Full name and contact information', 'Billing and shipping addresses', 'Company name and job title', 'Government-issued ID for verification']],
                                    ['name' => 'Account Information', 'icon' => 'briefcase', 'items' => ['Username and password (encrypted)', 'Profile preferences', 'Account activity logs', 'Team member associations']],
                                    ['name' => 'Supply Chain Data', 'icon' => 'clipboard', 'items' => ['Inventory levels', 'Shipment tracking details', 'Supplier information', 'Order history']],
                                    ['name' => 'Technical Information', 'icon' => 'chip', 'items' => ['Device information', 'IP address', 'App usage statistics', 'Crash reports']]
                                ],
                                'legalBasis' => 'We collect this data based on contractual necessity, legal obligations, and legitimate business interests.'
                            ]
                        ],
                        [
                            'id' => 'usage-of-information',
                            'label' => 'How We Use Your Information',
                            'icon' => 'chip',
                            'summary' => 'Purposes for processing your data',
                            'content' => [
                                'title' => 'Data Usage Purposes',
                                'purposes' => [
                                    ['title' => 'Service Delivery', 'description' => 'To provide, maintain, and improve our supply chain management services', 'items' => ['Process shipments and track inventory', 'Generate analytics and reports', 'Sync data across devices', 'Provide customer support']],
                                    ['title' => 'Communication', 'description' => 'To communicate with you about your account and our services', 'items' => ['Send shipment updates', 'Respond to support inquiries', 'Notify about service changes', 'Share product announcements']],
                                    ['title' => 'Security & Compliance', 'description' => 'To protect our services and comply with legal obligations', 'items' => ['Detect and prevent fraud', 'Maintain audit logs', 'Enforce terms of service', 'Comply with legal requirements']]
                                ]
                            ]
                        ],
                        [
                            'id' => 'data-sharing',
                            'label' => 'Data Sharing & Disclosure',
                            'icon' => 'globe',
                            'summary' => 'When and why we share your information',
                            'content' => [
                                'title' => 'Information Sharing Practices',
                                'sharingScenarios' => [
                                    ['title' => 'Service Providers', 'description' => 'Third parties who help us deliver our services', 'parties' => ['Cloud hosting (AWS, Google Cloud)', 'Payment processors (Stripe, PayPal)', 'Customer support platforms', 'Analytics services'], 'safeguards' => 'All providers sign data processing agreements and are GDPR/CCPA compliant'],
                                    ['title' => 'Business Partners', 'description' => 'Logistics and supply chain partners', 'parties' => ['Shipping carriers', 'Supplier platforms', 'Integration partners (ERP, WMS)'], 'safeguards' => 'Data shared is limited to operational necessity'],
                                    ['title' => 'Legal Compliance', 'description' => 'When required by law or to protect rights', 'parties' => ['Law enforcement', 'Regulatory bodies', 'Legal proceedings'], 'safeguards' => 'We verify legal requests before compliance']
                                ],
                                'note' => 'We NEVER sell your personal information to third parties.'
                            ]
                        ],
                        [
                            'id' => 'data-security',
                            'label' => 'Data Security',
                            'icon' => 'shield',
                            'summary' => 'How we protect your information',
                            'content' => [
                                'title' => 'Security Measures',
                                'measures' => [
                                    ['name' => 'Encryption', 'description' => '256-bit AES for data at rest, TLS 1.3 for data in transit', 'status' => 'Active'],
                                    ['name' => 'Access Control', 'description' => 'Role-based access with multi-factor authentication', 'status' => 'Active'],
                                    ['name' => 'Monitoring', 'description' => '24/7 security monitoring and intrusion detection', 'status' => 'Active'],
                                    ['name' => 'Backups', 'description' => 'Automated daily backups with 30-day retention', 'status' => 'Active'],
                                    ['name' => 'Penetration Testing', 'description' => 'Quarterly third-party security audits', 'status' => 'Scheduled'],
                                    ['name' => 'Incident Response', 'description' => 'Dedicated response team with 72-hour notification', 'status' => 'Ready']
                                ],
                                'certifications' => ['SOC 2 Type II', 'ISO 27001', 'GDPR Ready', 'CCPA Compliant']
                            ]
                        ],
                        [
                            'id' => 'user-rights',
                            'label' => 'Your Rights & Choices',
                            'icon' => 'user',
                            'summary' => 'Control over your personal data',
                            'content' => [
                                'title' => 'Data Subject Rights',
                                'rights' => [
                                    ['name' => 'Right to Access', 'description' => 'Request a copy of your data', 'timeframe' => '30 days', 'method' => 'Email privacy@supplychainpro.com'],
                                    ['name' => 'Right to Rectification', 'description' => 'Correct inaccurate information', 'timeframe' => 'Immediate', 'method' => 'In-app profile settings'],
                                    ['name' => 'Right to Deletion', 'description' => 'Request data removal', 'timeframe' => '90 days', 'method' => 'Account deletion settings'],
                                    ['name' => 'Right to Restrict Processing', 'description' => 'Limit how we use your data', 'timeframe' => '15 days', 'method' => 'Email request'],
                                    ['name' => 'Right to Data Portability', 'description' => 'Export your data', 'timeframe' => '30 days', 'method' => 'Data export tool'],
                                    ['name' => 'Right to Object', 'description' => 'Object to specific processing', 'timeframe' => '15 days', 'method' => 'Email request']
                                ],
                                'howToExercise' => 'To exercise any of these rights, contact our Data Protection Officer at privacy@supplychainpro.com or use the in-app privacy center.'
                            ]
                        ],
                        [
                            'id' => 'cookies',
                            'label' => 'Cookies & Tracking',
                            'icon' => 'eye',
                            'summary' => 'Technologies we use to enhance your experience',
                            'content' => [
                                'title' => 'Cookie Usage',
                                'cookieTypes' => [
                                    ['name' => 'Essential Cookies', 'description' => 'Required for basic functionality', 'duration' => 'Session', 'required' => true],
                                    ['name' => 'Preference Cookies', 'description' => 'Remember your settings', 'duration' => '1 year', 'required' => false],
                                    ['name' => 'Analytics Cookies', 'description' => 'Usage analytics and improvement', 'duration' => '2 years', 'required' => false],
                                    ['name' => 'Marketing Cookies', 'description' => 'Personalized advertisements', 'duration' => '90 days', 'required' => false]
                                ],
                                'controlOptions' => 'You can manage cookie preferences in your device settings or via our cookie consent manager.'
                            ]
                        ],
                        [
                            'id' => 'children-privacy',
                            'label' => 'Children\'s Privacy',
                            'icon' => 'user-group',
                            'summary' => 'Our policy regarding users under 13',
                            'content' => [
                                'title' => 'Children Under 13',
                                'paragraphs' => [
                                    'Our Services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13.',
                                    'If you believe a child has provided us with personal information, please contact us immediately at privacy@supplychainpro.com.',
                                    'Upon verification, we will take steps to delete that information from our servers.'
                                ]
                            ]
                        ],
                        [
                            'id' => 'international-transfer',
                            'label' => 'International Transfers',
                            'icon' => 'location',
                            'summary' => 'How we handle cross-border data transfers',
                            'content' => [
                                'title' => 'Cross-Border Data Processing',
                                'paragraphs' => [
                                    'Your information may be transferred to and processed in countries other than your own.',
                                    'We ensure appropriate safeguards are in place for international data transfers:',
                                    '• Standard Contractual Clauses (SCCs) for EEA/UK/Switzerland transfers',
                                    '• Data Processing Agreements with all third-party processors',
                                    '• Privacy Shield framework adherence (where applicable)',
                                    '• Regional data hosting options available for enterprise customers'
                                ]
                            ]
                        ],
                        [
                            'id' => 'policy-updates',
                            'label' => 'Updates to This Policy',
                            'icon' => 'refresh',
                            'summary' => 'How we notify you of changes',
                            'content' => [
                                'title' => 'Policy Change Management',
                                'paragraphs' => [
                                    'We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements.',
                                    'Material changes will be notified via:',
                                    '• Email to registered account holders (30 days prior notice)',
                                    '• In-app notification with change summary',
                                    '• Updated "Last Updated" date at the top of this policy',
                                    'We encourage you to review this policy periodically for any changes.'
                                ],
                                'versionHistory' => [
                                    ['version' => '3.0.0', 'date' => 'April 8, 2026', 'changes' => 'GDPR compliance updates, new data retention policies'],
                                    ['version' => '2.5.0', 'date' => 'January 15, 2026', 'changes' => 'Added cookie preferences, updated sharing disclosures'],
                                    ['version' => '2.0.0', 'date' => 'October 1, 2025', 'changes' => 'Major revision for CCPA compliance']
                                ]
                            ]
                        ],
                        [
                            'id' => 'contact-us',
                            'label' => 'Contact Us',
                            'icon' => 'mail',
                            'summary' => 'How to reach our privacy team',
                            'content' => [
                                'title' => 'Contact Information',
                                'company' => [
                                    'name' => 'SupplyChainPro Inc.',
                                    'address' => '123 Supply Chain Boulevard, Suite 400, San Francisco, CA 94105',
                                    'email' => 'privacy@supplychainpro.com',
                                    'phone' => '+1 (800) 555-0123',
                                    'dpo' => 'Dr. Sarah Chen, Data Protection Officer',
                                    'registration' => 'California Consumer Privacy Act (CCPA) compliant'
                                ],
                                'responseTime' => 'We typically respond to privacy inquiries within 3-5 business days.',
                                'escalationPath' => 'If you are unsatisfied with our response, you have the right to lodge a complaint with your local supervisory authority.'
                            ]
                        ]
                    ],
                    'faqs' => [
                        ['question' => 'How long do you keep my data?', 'answer' => 'We retain your personal data for as long as your account is active or as needed to provide you services. After account deletion, we retain certain data for up to 90 days for legal compliance and fraud prevention purposes. You can request earlier deletion in most cases.'],
                        ['question' => 'Do you sell my personal information?', 'answer' => 'No. We never sell your personal information to third parties. We only share data as described in this policy: with service providers who help us operate, with business partners for supply chain operations, or when required by law.'],
                        ['question' => 'Can I delete my account and all my data?', 'answer' => 'Yes. You can delete your account at any time from the app settings. Upon deletion, we will remove your personal information within 30 days, though some data may be retained for legal compliance (e.g., transaction records for tax purposes) for up to 7 years.'],
                        ['question' => 'Is my data encrypted?', 'answer' => 'Yes. We use industry-standard encryption: 256-bit AES for data at rest and TLS 1.3 for data in transit. Your passwords are hashed and never stored in plain text.'],
                        ['question' => 'Do you comply with GDPR?', 'answer' => 'Yes. We are fully GDPR compliant for users in the European Union. This includes the right to access, rectification, erasure, restriction, portability, and objection. We have appointed a Data Protection Officer (DPO) to oversee compliance.'],
                        ['question' => 'How do I request my data?', 'answer' => 'You can request a copy of your data through the in-app Privacy Center or by emailing privacy@supplychainpro.com. We will provide your data in a structured, machine-readable format within 30 days.']
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 675,
                'section_key' => 'privacyPolicy',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => 'Legal & Compliance',
                    'title' => [
                        'prefix' => 'Privacy',
                        'highlight' => 'Policy'
                    ],
                    'description' => 'At SupplyChainPro, we take your privacy seriously. This policy describes how we collect, use, and protect your personal information.',
                    'lastUpdated' => 'April 8, 2026',
                    'autoPlayCarousel' => true,
                    'quickFacts' => [
                        ['label' => 'Data Collection Categories', 'value' => '6', 'icon' => 'database', 'trend' => '+2 new'],
                        ['label' => 'User Rights', 'value' => '6', 'icon' => 'user', 'trend' => 'GDPR aligned'],
                        ['label' => 'Security Certifications', 'value' => '4', 'icon' => 'shield', 'trend' => 'SOC 2 Type II'],
                        ['label' => 'Response Time', 'value' => '30 days', 'icon' => 'clock', 'trend' => 'Average 5 days']
                    ],
                    'policyHighlights' => [
                        ['title' => 'Your Data, Your Control', 'description' => 'You have full control over your personal information. Access, update, or delete your data at any time.', 'icon' => 'user', 'color' => 'from-blue-500 to-blue-600', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'],
                        ['title' => 'Enterprise-Grade Security', 'description' => 'Bank-level encryption and security measures protect your data at all times.', 'icon' => 'shield', 'color' => 'from-indigo-500 to-indigo-600', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'],
                        ['title' => 'GDPR & CCPA Compliant', 'description' => 'We adhere to global privacy regulations to protect your rights wherever you are.', 'icon' => 'globe', 'color' => 'from-green-500 to-green-600', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFunflies.mp4'],
                        ['title' => 'No Data Selling', 'description' => 'We never sell your personal information to third parties. Period.', 'icon' => 'heart', 'color' => 'from-red-500 to-red-600', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4']
                    ],
                    'sections' => [
                        [
                            'id' => 'introduction',
                            'label' => 'Introduction',
                            'icon' => 'document',
                            'summary' => 'Overview of our privacy commitment and policy scope',
                            'content' => [
                                'title' => 'Introduction to Our Privacy Practices',
                                'paragraphs' => [
                                    'Welcome to SupplyChainPro\'s Privacy Policy. Your privacy is critically important to us. This Privacy Policy applies to all information collected through our mobile application ("App"), website, and related services (collectively, the "Services").',
                                    'By using our Services, you agree to the collection and use of information in accordance with this policy. We are committed to protecting your personal data and being transparent about how we handle it.',
                                    'This policy explains what data we collect, why we collect it, how we use it, and the choices you have regarding your information.'
                                ],
                                'keyPoints' => [
                                    'We only collect data necessary for service delivery',
                                    'You retain ownership of your business data',
                                    'We never sell your personal information',
                                    'You can request data deletion at any time'
                                ],
                                'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
                            ]
                        ],
                        [
                            'id' => 'information-collection',
                            'label' => 'Information We Collect',
                            'icon' => 'database',
                            'summary' => 'Categories of personal and business data we gather',
                            'content' => [
                                'title' => 'Data Collection Categories',
                                'categories' => [
                                    ['name' => 'Personal Information', 'icon' => 'user', 'items' => ['Full name and contact information', 'Billing and shipping addresses', 'Company name and job title', 'Government-issued ID for verification']],
                                    ['name' => 'Account Information', 'icon' => 'briefcase', 'items' => ['Username and password (encrypted)', 'Profile preferences', 'Account activity logs', 'Team member associations']],
                                    ['name' => 'Supply Chain Data', 'icon' => 'clipboard', 'items' => ['Inventory levels', 'Shipment tracking details', 'Supplier information', 'Order history']],
                                    ['name' => 'Technical Information', 'icon' => 'chip', 'items' => ['Device information', 'IP address', 'App usage statistics', 'Crash reports']]
                                ],
                                'legalBasis' => 'We collect this data based on contractual necessity, legal obligations, and legitimate business interests.'
                            ]
                        ],
                        [
                            'id' => 'usage-of-information',
                            'label' => 'How We Use Your Information',
                            'icon' => 'chip',
                            'summary' => 'Purposes for processing your data',
                            'content' => [
                                'title' => 'Data Usage Purposes',
                                'purposes' => [
                                    ['title' => 'Service Delivery', 'description' => 'To provide, maintain, and improve our supply chain management services', 'items' => ['Process shipments and track inventory', 'Generate analytics and reports', 'Sync data across devices', 'Provide customer support']],
                                    ['title' => 'Communication', 'description' => 'To communicate with you about your account and our services', 'items' => ['Send shipment updates', 'Respond to support inquiries', 'Notify about service changes', 'Share product announcements']],
                                    ['title' => 'Security & Compliance', 'description' => 'To protect our services and comply with legal obligations', 'items' => ['Detect and prevent fraud', 'Maintain audit logs', 'Enforce terms of service', 'Comply with legal requirements']]
                                ]
                            ]
                        ],
                        [
                            'id' => 'data-sharing',
                            'label' => 'Data Sharing & Disclosure',
                            'icon' => 'globe',
                            'summary' => 'When and why we share your information',
                            'content' => [
                                'title' => 'Information Sharing Practices',
                                'sharingScenarios' => [
                                    ['title' => 'Service Providers', 'description' => 'Third parties who help us deliver our services', 'parties' => ['Cloud hosting (AWS, Google Cloud)', 'Payment processors (Stripe, PayPal)', 'Customer support platforms', 'Analytics services'], 'safeguards' => 'All providers sign data processing agreements and are GDPR/CCPA compliant'],
                                    ['title' => 'Business Partners', 'description' => 'Logistics and supply chain partners', 'parties' => ['Shipping carriers', 'Supplier platforms', 'Integration partners (ERP, WMS)'], 'safeguards' => 'Data shared is limited to operational necessity'],
                                    ['title' => 'Legal Compliance', 'description' => 'When required by law or to protect rights', 'parties' => ['Law enforcement', 'Regulatory bodies', 'Legal proceedings'], 'safeguards' => 'We verify legal requests before compliance']
                                ],
                                'note' => 'We NEVER sell your personal information to third parties.'
                            ]
                        ],
                        [
                            'id' => 'data-security',
                            'label' => 'Data Security',
                            'icon' => 'shield',
                            'summary' => 'How we protect your information',
                            'content' => [
                                'title' => 'Security Measures',
                                'measures' => [
                                    ['name' => 'Encryption', 'description' => '256-bit AES for data at rest, TLS 1.3 for data in transit', 'status' => 'Active'],
                                    ['name' => 'Access Control', 'description' => 'Role-based access with multi-factor authentication', 'status' => 'Active'],
                                    ['name' => 'Monitoring', 'description' => '24/7 security monitoring and intrusion detection', 'status' => 'Active'],
                                    ['name' => 'Backups', 'description' => 'Automated daily backups with 30-day retention', 'status' => 'Active'],
                                    ['name' => 'Penetration Testing', 'description' => 'Quarterly third-party security audits', 'status' => 'Scheduled'],
                                    ['name' => 'Incident Response', 'description' => 'Dedicated response team with 72-hour notification', 'status' => 'Ready']
                                ],
                                'certifications' => ['SOC 2 Type II', 'ISO 27001', 'GDPR Ready', 'CCPA Compliant']
                            ]
                        ],
                        [
                            'id' => 'user-rights',
                            'label' => 'Your Rights & Choices',
                            'icon' => 'user',
                            'summary' => 'Control over your personal data',
                            'content' => [
                                'title' => 'Data Subject Rights',
                                'rights' => [
                                    ['name' => 'Right to Access', 'description' => 'Request a copy of your data', 'timeframe' => '30 days', 'method' => 'Email privacy@supplychainpro.com'],
                                    ['name' => 'Right to Rectification', 'description' => 'Correct inaccurate information', 'timeframe' => 'Immediate', 'method' => 'In-app profile settings'],
                                    ['name' => 'Right to Deletion', 'description' => 'Request data removal', 'timeframe' => '90 days', 'method' => 'Account deletion settings'],
                                    ['name' => 'Right to Restrict Processing', 'description' => 'Limit how we use your data', 'timeframe' => '15 days', 'method' => 'Email request'],
                                    ['name' => 'Right to Data Portability', 'description' => 'Export your data', 'timeframe' => '30 days', 'method' => 'Data export tool'],
                                    ['name' => 'Right to Object', 'description' => 'Object to specific processing', 'timeframe' => '15 days', 'method' => 'Email request']
                                ],
                                'howToExercise' => 'To exercise any of these rights, contact our Data Protection Officer at privacy@supplychainpro.com or use the in-app privacy center.'
                            ]
                        ],
                        [
                            'id' => 'cookies',
                            'label' => 'Cookies & Tracking',
                            'icon' => 'eye',
                            'summary' => 'Technologies we use to enhance your experience',
                            'content' => [
                                'title' => 'Cookie Usage',
                                'cookieTypes' => [
                                    ['name' => 'Essential Cookies', 'description' => 'Required for basic functionality', 'duration' => 'Session', 'required' => true],
                                    ['name' => 'Preference Cookies', 'description' => 'Remember your settings', 'duration' => '1 year', 'required' => false],
                                    ['name' => 'Analytics Cookies', 'description' => 'Usage analytics and improvement', 'duration' => '2 years', 'required' => false],
                                    ['name' => 'Marketing Cookies', 'description' => 'Personalized advertisements', 'duration' => '90 days', 'required' => false]
                                ],
                                'controlOptions' => 'You can manage cookie preferences in your device settings or via our cookie consent manager.'
                            ]
                        ],
                        [
                            'id' => 'children-privacy',
                            'label' => 'Children\'s Privacy',
                            'icon' => 'user-group',
                            'summary' => 'Our policy regarding users under 13',
                            'content' => [
                                'title' => 'Children Under 13',
                                'paragraphs' => [
                                    'Our Services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13.',
                                    'If you believe a child has provided us with personal information, please contact us immediately at privacy@supplychainpro.com.',
                                    'Upon verification, we will take steps to delete that information from our servers.'
                                ]
                            ]
                        ],
                        [
                            'id' => 'international-transfer',
                            'label' => 'International Transfers',
                            'icon' => 'location',
                            'summary' => 'How we handle cross-border data transfers',
                            'content' => [
                                'title' => 'Cross-Border Data Processing',
                                'paragraphs' => [
                                    'Your information may be transferred to and processed in countries other than your own.',
                                    'We ensure appropriate safeguards are in place for international data transfers:',
                                    '• Standard Contractual Clauses (SCCs) for EEA/UK/Switzerland transfers',
                                    '• Data Processing Agreements with all third-party processors',
                                    '• Privacy Shield framework adherence (where applicable)',
                                    '• Regional data hosting options available for enterprise customers'
                                ]
                            ]
                        ],
                        [
                            'id' => 'policy-updates',
                            'label' => 'Updates to This Policy',
                            'icon' => 'refresh',
                            'summary' => 'How we notify you of changes',
                            'content' => [
                                'title' => 'Policy Change Management',
                                'paragraphs' => [
                                    'We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements.',
                                    'Material changes will be notified via:',
                                    '• Email to registered account holders (30 days prior notice)',
                                    '• In-app notification with change summary',
                                    '• Updated "Last Updated" date at the top of this policy',
                                    'We encourage you to review this policy periodically for any changes.'
                                ],
                                'versionHistory' => [
                                    ['version' => '3.0.0', 'date' => 'April 8, 2026', 'changes' => 'GDPR compliance updates, new data retention policies'],
                                    ['version' => '2.5.0', 'date' => 'January 15, 2026', 'changes' => 'Added cookie preferences, updated sharing disclosures'],
                                    ['version' => '2.0.0', 'date' => 'October 1, 2025', 'changes' => 'Major revision for CCPA compliance']
                                ]
                            ]
                        ],
                        [
                            'id' => 'contact-us',
                            'label' => 'Contact Us',
                            'icon' => 'mail',
                            'summary' => 'How to reach our privacy team',
                            'content' => [
                                'title' => 'Contact Information',
                                'company' => [
                                    'name' => 'SupplyChainPro Inc.',
                                    'address' => '123 Supply Chain Boulevard, Suite 400, San Francisco, CA 94105',
                                    'email' => 'privacy@supplychainpro.com',
                                    'phone' => '+1 (800) 555-0123',
                                    'dpo' => 'Dr. Sarah Chen, Data Protection Officer',
                                    'registration' => 'California Consumer Privacy Act (CCPA) compliant'
                                ],
                                'responseTime' => 'We typically respond to privacy inquiries within 3-5 business days.',
                                'escalationPath' => 'If you are unsatisfied with our response, you have the right to lodge a complaint with your local supervisory authority.'
                            ]
                        ]
                    ],
                    'faqs' => [
                        ['question' => 'How long do you keep my data?', 'answer' => 'We retain your personal data for as long as your account is active or as needed to provide you services. After account deletion, we retain certain data for up to 90 days for legal compliance and fraud prevention purposes. You can request earlier deletion in most cases.', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'],
                        ['question' => 'Do you sell my personal information?', 'answer' => 'No. We never sell your personal information to third parties. We only share data as described in this policy: with service providers who help us operate, with business partners for supply chain operations, or when required by law.', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'],
                        ['question' => 'Can I delete my account and all my data?', 'answer' => 'Yes. You can delete your account at any time from the app settings. Upon deletion, we will remove your personal information within 30 days, though some data may be retained for legal compliance (e.g., transaction records for tax purposes) for up to 7 years.', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFunflies.mp4'],
                        ['question' => 'Is my data encrypted?', 'answer' => 'Yes. We use industry-standard encryption: 256-bit AES for data at rest and TLS 1.3 for data in transit. Your passwords are hashed and never stored in plain text.', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4'],
                        ['question' => 'Do you comply with GDPR?', 'answer' => 'Yes. We are fully GDPR compliant for users in the European Union. This includes the right to access, rectification, erasure, restriction, portability, and objection. We have appointed a Data Protection Officer (DPO) to oversee compliance.', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'],
                        ['question' => 'How do I request my data?', 'answer' => 'You can request a copy of your data through the in-app Privacy Center or by emailing privacy@supplychainpro.com. We will provide your data in a structured, machine-readable format within 30 days.', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4']
                    ],
                    'rightsTestimonials' => [
                        ['name' => 'Sarah Johnson', 'role' => 'Supply Chain Director', 'quote' => 'The transparency around data handling gave our team complete confidence in using SupplyChainPro.', 'rating' => 5],
                        ['name' => 'Michael Chen', 'role' => 'Operations Manager', 'quote' => 'Requesting my data export was simple and fast. Received it within a week in a clean format.', 'rating' => 5],
                        ['name' => 'Emily Rodriguez', 'role' => 'Logistics Director', 'quote' => 'Their commitment to privacy and security is unmatched in the supply chain space.', 'rating' => 5]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 676,
                'section_key' => 'privacyPolicy',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],


            // Terms of Service Variants
            [
                'id' => 677,
                'section_key' => 'termsOfService',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => 'Legal Agreement',
                    'title' => [
                        'prefix' => 'Terms of',
                        'highlight' => 'Service'
                    ],
                    'description' => 'These Terms of Service govern your use of SupplyChainPro\'s mobile application, website, and related services. Please read them carefully.',
                    'lastUpdated' => 'April 8, 2026',
                    'effectiveDate' => 'April 8, 2026',
                    'company' => [
                        'name' => 'SupplyChainPro Inc.',
                        'legalName' => 'SupplyChainPro Inc., a Delaware corporation',
                        'address' => '123 Supply Chain Boulevard, Suite 400, San Francisco, CA 94105',
                        'email' => 'legal@supplychainpro.com',
                        'phone' => '+1 (800) 555-0123',
                        'registration' => 'Registered in Delaware, USA',
                        'ein' => 'XX-XXXXXXX'
                    ],
                    'quickFacts' => [
                        ['label' => 'Last Updated', 'value' => 'April 8, 2026', 'icon' => 'clock'],
                        ['label' => 'Effective Date', 'value' => 'April 8, 2026', 'icon' => 'calendar'],
                        ['label' => 'Governing Law', 'value' => 'California, USA', 'icon' => 'globe'],
                        ['label' => 'Free Trial', 'value' => '14 days', 'icon' => 'check']
                    ],
                    'subscriptionPlans' => [
                        [
                            'name' => 'Starter',
                            'price' => '$49',
                            'period' => 'per month',
                            'features' => ['Up to 5 users', '1,000 shipments/month', 'Basic analytics', 'Email support'],
                            'billingCycle' => 'Monthly'
                        ],
                        [
                            'name' => 'Professional',
                            'price' => '$99',
                            'period' => 'per month',
                            'features' => ['Up to 20 users', '10,000 shipments/month', 'Advanced analytics', 'Priority support', 'API access'],
                            'billingCycle' => 'Monthly or Annual',
                            'popular' => true
                        ],
                        [
                            'name' => 'Enterprise',
                            'price' => 'Custom',
                            'period' => 'contact us',
                            'features' => ['Unlimited users', 'Unlimited shipments', 'Custom analytics', '24/7 dedicated support', 'SLA agreement'],
                            'billingCycle' => 'Annual'
                        ]
                    ],
                    'sections' => [
                        ['id' => 'introduction', 'label' => 'Introduction', 'icon' => 'document'],
                        ['id' => 'acceptance', 'label' => 'Acceptance of Terms', 'icon' => 'check'],
                        ['id' => 'eligibility', 'label' => 'Eligibility', 'icon' => 'user'],
                        ['id' => 'account-registration', 'label' => 'Account Registration', 'icon' => 'briefcase'],
                        ['id' => 'license-grant', 'label' => 'License to Use', 'icon' => 'lock'],
                        ['id' => 'user-obligations', 'label' => 'User Obligations', 'icon' => 'shield'],
                        ['id' => 'prohibited-activities', 'label' => 'Prohibited Activities', 'icon' => 'scale'],
                        ['id' => 'intellectual-property', 'label' => 'Intellectual Property', 'icon' => 'document'],
                        ['id' => 'subscriptions-fees', 'label' => 'Subscriptions & Fees', 'icon' => 'credit-card'],
                        ['id' => 'data-privacy', 'label' => 'Data & Privacy', 'icon' => 'database'],
                        ['id' => 'termination', 'label' => 'Termination', 'icon' => 'x'],
                        ['id' => 'limitations-liability', 'label' => 'Limitations of Liability', 'icon' => 'shield'],
                        ['id' => 'indemnification', 'label' => 'Indemnification', 'icon' => 'scale'],
                        ['id' => 'governing-law', 'label' => 'Governing Law', 'icon' => 'globe'],
                        ['id' => 'changes-to-terms', 'label' => 'Changes to Terms', 'icon' => 'clock'],
                        ['id' => 'contact-us', 'label' => 'Contact Us', 'icon' => 'mail']
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 678,
                'section_key' => 'termsOfService',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => 'Legal Agreement',
                    'title' => [
                        'prefix' => 'Terms of',
                        'highlight' => 'Service'
                    ],
                    'description' => 'These Terms of Service govern your use of SupplyChainPro\'s mobile application, website, and related services. Please read them carefully.',
                    'lastUpdated' => 'April 8, 2026',
                    'effectiveDate' => 'April 8, 2026',
                    'quickFacts' => [
                        ['label' => 'Last Updated', 'value' => 'April 8, 2026', 'icon' => 'clock', 'color' => 'blue'],
                        ['label' => 'Effective Date', 'value' => 'April 8, 2026', 'icon' => 'calendar', 'color' => 'indigo'],
                        ['label' => 'Governing Law', 'value' => 'California, USA', 'icon' => 'globe', 'color' => 'purple'],
                        ['label' => 'Free Trial', 'value' => '14 days', 'icon' => 'heart', 'color' => 'green'],
                        ['label' => 'Response Time', 'value' => '24-48 hours', 'icon' => 'clock', 'color' => 'orange'],
                        ['label' => 'User Satisfaction', 'value' => '98%', 'icon' => 'star', 'color' => 'yellow']
                    ],
                    'company' => [
                        'name' => 'SupplyChainPro Inc.',
                        'legalName' => 'SupplyChainPro Inc., a Delaware corporation',
                        'address' => '123 Supply Chain Boulevard, Suite 400, San Francisco, CA 94105',
                        'email' => 'legal@supplychainpro.com',
                        'phone' => '+1 (800) 555-0123',
                        'registration' => 'Registered in Delaware, USA',
                        'ein' => 'XX-XXXXXXX',
                        'dpaEmail' => 'dpa@supplychainpro.com'
                    ],
                    'subscriptionPlans' => [
                        [
                            'id' => 'starter',
                            'name' => 'Starter',
                            'price' => '$49',
                            'period' => 'per month',
                            'annualPrice' => '$490',
                            'annualSavings' => '$98',
                            'features' => ['Up to 5 users', '1,000 shipments/month', 'Basic analytics', 'Email support', '48-hour response time'],
                            'billingCycle' => 'Monthly',
                            'color' => 'from-green-500 to-green-600',
                            'icon' => 'briefcase',
                            'popular' => false
                        ],
                        [
                            'id' => 'professional',
                            'name' => 'Professional',
                            'price' => '$99',
                            'period' => 'per month',
                            'annualPrice' => '$990',
                            'annualSavings' => '$198',
                            'features' => ['Up to 20 users', '10,000 shipments/month', 'Advanced analytics', 'Priority support', 'API access', '24-hour response time', 'Custom reports'],
                            'billingCycle' => 'Monthly or Annual',
                            'color' => 'from-blue-500 to-blue-600',
                            'icon' => 'star',
                            'popular' => true
                        ],
                        [
                            'id' => 'enterprise',
                            'name' => 'Enterprise',
                            'price' => 'Custom',
                            'period' => 'contact us',
                            'annualPrice' => 'Custom',
                            'annualSavings' => 'Volume pricing',
                            'features' => ['Unlimited users', 'Unlimited shipments', 'Custom analytics', '24/7 dedicated support', 'SLA agreement', 'On-premise option', 'SSO integration'],
                            'billingCycle' => 'Annual',
                            'color' => 'from-purple-500 to-purple-600',
                            'icon' => 'building',
                            'popular' => false
                        ]
                    ],
                    'sections' => [
                        [
                            'id' => 'introduction',
                            'label' => 'Introduction',
                            'icon' => 'document',
                            'summary' => 'Overview of our Terms of Service',
                            'color' => 'from-blue-500 to-blue-600',
                            'content' => [
                                'paragraphs' => [
                                    'Welcome to SupplyChainPro ("Company," "we," "our," "us"). These Terms of Service ("Terms") govern your access to and use of our mobile application, website, and related services (collectively, the "Services").',
                                    'By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our Services.',
                                    'These Terms constitute a legally binding agreement between you and SupplyChainPro regarding your use of our Services.'
                                ],
                                'keyPoints' => [
                                    'These Terms are legally binding',
                                    'Your use constitutes acceptance',
                                    'We may modify Terms with notice',
                                    'Continued use means acceptance'
                                ]
                            ]
                        ],
                        [
                            'id' => 'acceptance',
                            'label' => 'Acceptance of Terms',
                            'icon' => 'check',
                            'summary' => 'How you agree to these terms',
                            'color' => 'from-green-500 to-green-600',
                            'content' => [
                                'paragraphs' => [
                                    'By creating an account, accessing, or using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms, including any future modifications.',
                                    'If you are using our Services on behalf of an organization, you represent and warrant that you have the authority to bind that organization to these Terms.',
                                    'Your continued use of our Services following any changes constitutes your acceptance of those changes.'
                                ]
                            ]
                        ],
                        [
                            'id' => 'eligibility',
                            'label' => 'Eligibility',
                            'icon' => 'user',
                            'summary' => 'Who can use our services',
                            'color' => 'from-teal-500 to-teal-600',
                            'content' => [
                                'requirements' => [
                                    'Be at least 18 years of age or the age of majority in your jurisdiction',
                                    'Have the legal capacity to enter into a binding agreement',
                                    'Not be prohibited from using our Services under applicable laws',
                                    'Provide accurate and complete registration information',
                                    'Not be a competitor or using our Services for competitive analysis'
                                ]
                            ]
                        ],
                        [
                            'id' => 'account',
                            'label' => 'Account Registration',
                            'icon' => 'briefcase',
                            'summary' => 'Creating and managing your account',
                            'color' => 'from-cyan-500 to-cyan-600',
                            'content' => [
                                'responsibilities' => [
                                    'Provide accurate, current, and complete information during registration',
                                    'Maintain the security of your password and account credentials',
                                    'Promptly update your information as needed',
                                    'Accept responsibility for all activities that occur under your account',
                                    'Notify us immediately of any unauthorized use of your account'
                                ],
                                'security' => 'We implement industry-standard security measures, but you are responsible for maintaining the confidentiality of your login credentials.'
                            ]
                        ],
                        [
                            'id' => 'license',
                            'label' => 'License to Use',
                            'icon' => 'lock',
                            'summary' => 'What we grant you',
                            'color' => 'from-indigo-500 to-indigo-600',
                            'content' => [
                                'grant' => 'Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to:',
                                'permissions' => [
                                    'Download and install our mobile application on your device',
                                    'Access and use our Services for your internal business purposes',
                                    'Use our API in accordance with our API documentation'
                                ],
                                'restrictions' => [
                                    'You may not copy, modify, or distribute our software',
                                    'You may not reverse engineer or decompile our Services',
                                    'You may not resell or redistribute access to our Services'
                                ]
                            ]
                        ],
                        [
                            'id' => 'obligations',
                            'label' => 'User Obligations',
                            'icon' => 'shield',
                            'summary' => 'Your responsibilities',
                            'color' => 'from-red-500 to-red-600',
                            'content' => [
                                'responsibilities' => [
                                    'All data, content, and information you upload to our Services',
                                    'Maintaining the confidentiality of your account credentials',
                                    'All activities that occur under your account',
                                    'Complying with our acceptable use policies',
                                    'Paying all applicable fees on time'
                                ]
                            ]
                        ],
                        [
                            'id' => 'prohibited',
                            'label' => 'Prohibited Activities',
                            'icon' => 'scale',
                            'summary' => 'What you cannot do',
                            'color' => 'from-orange-500 to-orange-600',
                            'content' => [
                                'activities' => [
                                    'Violating any applicable laws or regulations',
                                    'Attempting to gain unauthorized access to our systems',
                                    'Interfering with other users\' use of our Services',
                                    'Reverse engineering or copying our software',
                                    'Uploading malicious code or harmful content',
                                    'Reselling or redistributing our Services without authorization',
                                    'Using our Services to compete with us',
                                    'Harvesting user data without consent'
                                ]
                            ]
                        ],
                        [
                            'id' => 'intellectual-property',
                            'label' => 'Intellectual Property',
                            'icon' => 'document',
                            'summary' => 'Ownership of content',
                            'color' => 'from-pink-500 to-pink-600',
                            'content' => [
                                'ourRights' => 'Our Services and their entire contents, features, and functionality are owned by SupplyChainPro and are protected by copyright, trademark, and other intellectual property laws.',
                                'yourRights' => 'You retain ownership of any data or content you submit to our Services. By submitting content, you grant us a license to use, store, and process that content to provide our Services to you.',
                                'trademarks' => 'SupplyChainPro and all related logos are trademarks of SupplyChainPro Inc. You may not use these marks without our prior written consent.'
                            ]
                        ],
                        [
                            'id' => 'fees',
                            'label' => 'Subscriptions & Fees',
                            'icon' => 'credit-card',
                            'summary' => 'Pricing and payment terms',
                            'color' => 'from-yellow-500 to-yellow-600',
                            'content' => [
                                'description' => 'Certain features of our Services require a paid subscription. By subscribing, you agree to pay all applicable fees as described.',
                                'paymentTerms' => 'Fees are billed in advance on a monthly or annual basis. Payments are non-refundable except as required by law.',
                                'changes' => 'We may change our fees upon 30 days\' notice. Your continued use after changes constitutes acceptance.',
                                'taxes' => 'You are responsible for all applicable taxes associated with your subscription.'
                            ]
                        ],
                        [
                            'id' => 'privacy',
                            'label' => 'Data & Privacy',
                            'icon' => 'database',
                            'summary' => 'How we handle your data',
                            'color' => 'from-emerald-500 to-emerald-600',
                            'content' => [
                                'description' => 'Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your personal information.',
                                'consent' => 'By using our Services, you consent to our data practices as described in our Privacy Policy, including the transfer of your data to countries where we operate.',
                                'security' => 'We implement industry-standard security measures to protect your data. However, no method of transmission is 100% secure.'
                            ]
                        ],
                        [
                            'id' => 'termination',
                            'label' => 'Termination',
                            'icon' => 'x',
                            'summary' => 'How either party can end the agreement',
                            'color' => 'from-rose-500 to-rose-600',
                            'content' => [
                                'userTermination' => 'You may terminate your account at any time by following the account deletion process in our app.',
                                'companyTermination' => 'We may suspend or terminate your access immediately, without notice, for violation of these Terms, non-payment of fees, illegal conduct, or extended inactivity.',
                                'effects' => 'Upon termination, your right to use our Services will immediately cease, and we may delete your data in accordance with our data retention policies.'
                            ]
                        ],
                        [
                            'id' => 'liability',
                            'label' => 'Limitations of Liability',
                            'icon' => 'shield',
                            'summary' => 'Our liability to you',
                            'color' => 'from-slate-500 to-slate-600',
                            'content' => [
                                'disclaimer' => 'To the maximum extent permitted by law, SupplyChainPro shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our Services.',
                                'cap' => 'Our total liability for any claims arising from these Terms shall not exceed the amount you paid us in the past 12 months.',
                                'exclusions' => 'Some jurisdictions do not allow certain liability limitations, so some of the above limitations may not apply to you.'
                            ]
                        ],
                        [
                            'id' => 'indemnification',
                            'label' => 'Indemnification',
                            'icon' => 'scale',
                            'summary' => 'Your obligation to defend us',
                            'color' => 'from-amber-500 to-amber-600',
                            'content' => [
                                'description' => 'You agree to indemnify, defend, and hold harmless SupplyChainPro and its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from:',
                                'scenarios' => [
                                    'Your violation of these Terms',
                                    'Your use of our Services',
                                    'Your violation of any law or third-party rights',
                                    'Any content you submit to our Services'
                                ]
                            ]
                        ],
                        [
                            'id' => 'governing-law',
                            'label' => 'Governing Law',
                            'icon' => 'globe',
                            'summary' => 'Which laws apply',
                            'color' => 'from-sky-500 to-sky-600',
                            'content' => [
                                'law' => 'These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.',
                                'venue' => 'Any legal action arising from these Terms shall be brought exclusively in the federal or state courts located in San Francisco County, California.',
                                'disputeResolution' => 'Before filing a claim, you agree to contact us to attempt to resolve any dispute informally. If we cannot resolve the dispute within 60 days, either party may initiate formal proceedings.'
                            ]
                        ],
                        [
                            'id' => 'changes',
                            'label' => 'Changes to Terms',
                            'icon' => 'clock',
                            'summary' => 'How we update these terms',
                            'color' => 'from-lime-500 to-lime-600',
                            'content' => [
                                'description' => 'We reserve the right to modify these Terms at any time. We will notify you of material changes by:',
                                'notificationMethods' => [
                                    'Posting the updated Terms on our website',
                                    'Sending an email to registered users',
                                    'Displaying an in-app notification'
                                ],
                                'acceptance' => 'Your continued use of our Services after the effective date constitutes your acceptance of the modified Terms.'
                            ]
                        ],
                        [
                            'id' => 'contact',
                            'label' => 'Contact Us',
                            'icon' => 'mail',
                            'summary' => 'How to reach us',
                            'color' => 'from-violet-500 to-violet-600',
                            'content' => [
                                'company' => [
                                    'name' => 'SupplyChainPro Inc.',
                                    'address' => '123 Supply Chain Boulevard, Suite 400, San Francisco, CA 94105',
                                    'email' => 'legal@supplychainpro.com',
                                    'phone' => '+1 (800) 555-0123',
                                    'registration' => 'Registered in Delaware, USA'
                                ],
                                'responseTime' => 'We typically respond to inquiries within 24-48 hours.'
                            ]
                        ]
                    ],
                    'faqs' => [
                        ['question' => 'Can I cancel my subscription at any time?', 'answer' => 'Yes, you can cancel your subscription at any time from your account settings. Cancellation will take effect at the end of your current billing cycle. You will not receive a refund for the current period, but you will retain access until the end of your paid term.'],
                        ['question' => 'What happens to my data if I cancel?', 'answer' => 'When you cancel your subscription, your data will be retained for 90 days in case you decide to reactivate. After 90 days, your data will be permanently deleted from our active systems. You can request an export of your data before cancellation.'],
                        ['question' => 'Do you offer refunds?', 'answer' => 'We generally do not offer refunds for unused subscription time. However, if you experience technical issues that prevent you from using our Services, please contact our support team and we will work to resolve the issue or provide a prorated refund.'],
                        ['question' => 'Can I upgrade or downgrade my plan?', 'answer' => 'Yes, you can change your plan at any time. Upgrades take effect immediately with a prorated charge. Downgrades take effect at the end of your current billing cycle.'],
                        ['question' => 'Is my data secure?', 'answer' => 'Yes, we implement industry-standard security measures including 256-bit AES encryption for data at rest, TLS 1.3 for data in transit, and regular security audits. We are SOC 2 Type II certified.'],
                        ['question' => 'Do you offer a free trial?', 'answer' => 'Yes, we offer a 14-day free trial for our Professional plan. No credit card is required to start the trial. You can cancel anytime during the trial period with no charge.']
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 679,
                'section_key' => 'termsOfService',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => 'Legal Agreement',
                    'title' => [
                        'prefix' => 'Terms of',
                        'highlight' => 'Service'
                    ],
                    'description' => 'These Terms of Service govern your use of SupplyChainPro\'s mobile application, website, and related services. Please read them carefully.',
                    'lastUpdated' => 'April 8, 2026',
                    'effectiveDate' => 'April 8, 2026',
                    'autoPlayCarousel' => true,
                    'quickFacts' => [
                        ['label' => 'Last Updated', 'value' => 'April 8, 2026', 'icon' => 'clock', 'color' => 'blue', 'trend' => 'Version 3.0'],
                        ['label' => 'Effective Date', 'value' => 'April 8, 2026', 'icon' => 'calendar', 'color' => 'indigo', 'trend' => 'Immediate'],
                        ['label' => 'Governing Law', 'value' => 'California, USA', 'icon' => 'globe', 'color' => 'purple', 'trend' => 'San Francisco'],
                        ['label' => 'Free Trial', 'value' => '14 days', 'icon' => 'heart', 'color' => 'green', 'trend' => 'No credit card'],
                        ['label' => 'Response Time', 'value' => '24-48 hours', 'icon' => 'clock', 'color' => 'orange', 'trend' => 'Legal inquiries'],
                        ['label' => 'User Satisfaction', 'value' => '98%', 'icon' => 'star', 'color' => 'yellow', 'trend' => 'Based on reviews']
                    ],
                    'company' => [
                        'name' => 'SupplyChainPro Inc.',
                        'legalName' => 'SupplyChainPro Inc., a Delaware corporation',
                        'address' => '123 Supply Chain Boulevard, Suite 400, San Francisco, CA 94105',
                        'email' => 'legal@supplychainpro.com',
                        'phone' => '+1 (800) 555-0123',
                        'registration' => 'Registered in Delaware, USA',
                        'ein' => 'XX-XXXXXXX',
                        'dpaEmail' => 'dpa@supplychainpro.com'
                    ],
                    'highlights' => [
                        ['title' => 'Fair & Transparent', 'description' => 'We believe in clear, straightforward terms that protect both you and us.', 'icon' => 'scale', 'color' => 'from-indigo-500 to-indigo-600', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'],
                        ['title' => 'Your Data, Your Control', 'description' => 'You retain ownership of your data. We only use it to provide our services.', 'icon' => 'database', 'color' => 'from-blue-500 to-blue-600', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'],
                        ['title' => 'Enterprise-Grade Security', 'description' => 'Bank-level encryption and security measures protect your information.', 'icon' => 'shield', 'color' => 'from-green-500 to-green-600', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFunflies.mp4'],
                        ['title' => 'Fair Use Policy', 'description' => 'Reasonable usage limits ensure quality service for all customers.', 'icon' => 'user-group', 'color' => 'from-purple-500 to-purple-600', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4']
                    ],
                    'subscriptionPlans' => [
                        [
                            'id' => 'starter',
                            'name' => 'Starter',
                            'price' => '$49',
                            'period' => 'per month',
                            'annualPrice' => '$490',
                            'annualSavings' => '$98',
                            'features' => ['Up to 5 users', '1,000 shipments/month', 'Basic analytics', 'Email support', '48-hour response time'],
                            'billingCycle' => 'Monthly',
                            'color' => 'from-green-500 to-green-600',
                            'icon' => 'briefcase',
                            'popular' => false,
                            'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
                        ],
                        [
                            'id' => 'professional',
                            'name' => 'Professional',
                            'price' => '$99',
                            'period' => 'per month',
                            'annualPrice' => '$990',
                            'annualSavings' => '$198',
                            'features' => ['Up to 20 users', '10,000 shipments/month', 'Advanced analytics', 'Priority support', 'API access', '24-hour response time', 'Custom reports'],
                            'billingCycle' => 'Monthly or Annual',
                            'color' => 'from-blue-500 to-blue-600',
                            'icon' => 'star',
                            'popular' => true,
                            'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'
                        ],
                        [
                            'id' => 'enterprise',
                            'name' => 'Enterprise',
                            'price' => 'Custom',
                            'period' => 'contact us',
                            'annualPrice' => 'Custom',
                            'annualSavings' => 'Volume pricing',
                            'features' => ['Unlimited users', 'Unlimited shipments', 'Custom analytics', '24/7 dedicated support', 'SLA agreement', 'On-premise option', 'SSO integration'],
                            'billingCycle' => 'Annual',
                            'color' => 'from-purple-500 to-purple-600',
                            'icon' => 'building',
                            'popular' => false,
                            'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFunflies.mp4'
                        ]
                    ],
                    'sections' => [
                        [
                            'id' => 'introduction',
                            'label' => 'Introduction',
                            'icon' => 'document',
                            'summary' => 'Overview of our Terms of Service',
                            'color' => 'from-blue-500 to-blue-600',
                            'content' => [
                                'paragraphs' => [
                                    'Welcome to SupplyChainPro ("Company," "we," "our," "us"). These Terms of Service ("Terms") govern your access to and use of our mobile application, website, and related services (collectively, the "Services").',
                                    'By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our Services.',
                                    'These Terms constitute a legally binding agreement between you and SupplyChainPro regarding your use of our Services.'
                                ],
                                'keyPoints' => [
                                    'These Terms are legally binding',
                                    'Your use constitutes acceptance',
                                    'We may modify Terms with notice',
                                    'Continued use means acceptance'
                                ],
                                'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
                            ]
                        ],
                        [
                            'id' => 'acceptance',
                            'label' => 'Acceptance of Terms',
                            'icon' => 'check',
                            'summary' => 'How you agree to these terms',
                            'color' => 'from-green-500 to-green-600',
                            'content' => [
                                'paragraphs' => [
                                    'By creating an account, accessing, or using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms, including any future modifications.',
                                    'If you are using our Services on behalf of an organization, you represent and warrant that you have the authority to bind that organization to these Terms.',
                                    'Your continued use of our Services following any changes constitutes your acceptance of those changes.'
                                ]
                            ]
                        ],
                        [
                            'id' => 'eligibility',
                            'label' => 'Eligibility',
                            'icon' => 'user',
                            'summary' => 'Who can use our services',
                            'color' => 'from-teal-500 to-teal-600',
                            'content' => [
                                'requirements' => [
                                    'Be at least 18 years of age or the age of majority in your jurisdiction',
                                    'Have the legal capacity to enter into a binding agreement',
                                    'Not be prohibited from using our Services under applicable laws',
                                    'Provide accurate and complete registration information',
                                    'Not be a competitor or using our Services for competitive analysis'
                                ]
                            ]
                        ],
                        [
                            'id' => 'account',
                            'label' => 'Account Registration',
                            'icon' => 'briefcase',
                            'summary' => 'Creating and managing your account',
                            'color' => 'from-cyan-500 to-cyan-600',
                            'content' => [
                                'responsibilities' => [
                                    'Provide accurate, current, and complete information during registration',
                                    'Maintain the security of your password and account credentials',
                                    'Promptly update your information as needed',
                                    'Accept responsibility for all activities that occur under your account',
                                    'Notify us immediately of any unauthorized use of your account'
                                ],
                                'security' => 'We implement industry-standard security measures, but you are responsible for maintaining the confidentiality of your login credentials.',
                                'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'
                            ]
                        ],
                        [
                            'id' => 'license',
                            'label' => 'License to Use',
                            'icon' => 'lock',
                            'summary' => 'What we grant you',
                            'color' => 'from-indigo-500 to-indigo-600',
                            'content' => [
                                'grant' => 'Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to:',
                                'permissions' => [
                                    'Download and install our mobile application on your device',
                                    'Access and use our Services for your internal business purposes',
                                    'Use our API in accordance with our API documentation'
                                ],
                                'restrictions' => [
                                    'You may not copy, modify, or distribute our software',
                                    'You may not reverse engineer or decompile our Services',
                                    'You may not resell or redistribute access to our Services'
                                ]
                            ]
                        ],
                        [
                            'id' => 'obligations',
                            'label' => 'User Obligations',
                            'icon' => 'shield',
                            'summary' => 'Your responsibilities',
                            'color' => 'from-red-500 to-red-600',
                            'content' => [
                                'responsibilities' => [
                                    'All data, content, and information you upload to our Services',
                                    'Maintaining the confidentiality of your account credentials',
                                    'All activities that occur under your account',
                                    'Complying with our acceptable use policies',
                                    'Paying all applicable fees on time'
                                ]
                            ]
                        ],
                        [
                            'id' => 'prohibited',
                            'label' => 'Prohibited Activities',
                            'icon' => 'scale',
                            'summary' => 'What you cannot do',
                            'color' => 'from-orange-500 to-orange-600',
                            'content' => [
                                'activities' => [
                                    'Violating any applicable laws or regulations',
                                    'Attempting to gain unauthorized access to our systems',
                                    'Interfering with other users\' use of our Services',
                                    'Reverse engineering or copying our software',
                                    'Uploading malicious code or harmful content',
                                    'Reselling or redistributing our Services without authorization',
                                    'Using our Services to compete with us',
                                    'Harvesting user data without consent'
                                ],
                                'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFunflies.mp4'
                            ]
                        ],
                        [
                            'id' => 'intellectual-property',
                            'label' => 'Intellectual Property',
                            'icon' => 'document',
                            'summary' => 'Ownership of content',
                            'color' => 'from-pink-500 to-pink-600',
                            'content' => [
                                'ourRights' => 'Our Services and their entire contents, features, and functionality are owned by SupplyChainPro and are protected by copyright, trademark, and other intellectual property laws.',
                                'yourRights' => 'You retain ownership of any data or content you submit to our Services. By submitting content, you grant us a license to use, store, and process that content to provide our Services to you.',
                                'trademarks' => 'SupplyChainPro and all related logos are trademarks of SupplyChainPro Inc. You may not use these marks without our prior written consent.'
                            ]
                        ],
                        [
                            'id' => 'fees',
                            'label' => 'Subscriptions & Fees',
                            'icon' => 'credit-card',
                            'summary' => 'Pricing and payment terms',
                            'color' => 'from-yellow-500 to-yellow-600',
                            'content' => [
                                'description' => 'Certain features of our Services require a paid subscription. By subscribing, you agree to pay all applicable fees as described.',
                                'paymentTerms' => 'Fees are billed in advance on a monthly or annual basis. Payments are non-refundable except as required by law.',
                                'changes' => 'We may change our fees upon 30 days\' notice. Your continued use after changes constitutes acceptance.',
                                'taxes' => 'You are responsible for all applicable taxes associated with your subscription.',
                                'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4'
                            ]
                        ],
                        [
                            'id' => 'privacy',
                            'label' => 'Data & Privacy',
                            'icon' => 'database',
                            'summary' => 'How we handle your data',
                            'color' => 'from-emerald-500 to-emerald-600',
                            'content' => [
                                'description' => 'Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your personal information.',
                                'consent' => 'By using our Services, you consent to our data practices as described in our Privacy Policy, including the transfer of your data to countries where we operate.',
                                'security' => 'We implement industry-standard security measures to protect your data. However, no method of transmission is 100% secure.'
                            ]
                        ],
                        [
                            'id' => 'termination',
                            'label' => 'Termination',
                            'icon' => 'x',
                            'summary' => 'How either party can end the agreement',
                            'color' => 'from-rose-500 to-rose-600',
                            'content' => [
                                'userTermination' => 'You may terminate your account at any time by following the account deletion process in our app.',
                                'companyTermination' => 'We may suspend or terminate your access immediately, without notice, for violation of these Terms, non-payment of fees, illegal conduct, or extended inactivity.',
                                'effects' => 'Upon termination, your right to use our Services will immediately cease, and we may delete your data in accordance with our data retention policies.',
                                'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
                            ]
                        ],
                        [
                            'id' => 'liability',
                            'label' => 'Limitations of Liability',
                            'icon' => 'shield',
                            'summary' => 'Our liability to you',
                            'color' => 'from-slate-500 to-slate-600',
                            'content' => [
                                'disclaimer' => 'To the maximum extent permitted by law, SupplyChainPro shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our Services.',
                                'cap' => 'Our total liability for any claims arising from these Terms shall not exceed the amount you paid us in the past 12 months.',
                                'exclusions' => 'Some jurisdictions do not allow certain liability limitations, so some of the above limitations may not apply to you.'
                            ]
                        ],
                        [
                            'id' => 'indemnification',
                            'label' => 'Indemnification',
                            'icon' => 'scale',
                            'summary' => 'Your obligation to defend us',
                            'color' => 'from-amber-500 to-amber-600',
                            'content' => [
                                'description' => 'You agree to indemnify, defend, and hold harmless SupplyChainPro and its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from:',
                                'scenarios' => [
                                    'Your violation of these Terms',
                                    'Your use of our Services',
                                    'Your violation of any law or third-party rights',
                                    'Any content you submit to our Services'
                                ]
                            ]
                        ],
                        [
                            'id' => 'governing-law',
                            'label' => 'Governing Law',
                            'icon' => 'globe',
                            'summary' => 'Which laws apply',
                            'color' => 'from-sky-500 to-sky-600',
                            'content' => [
                                'law' => 'These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.',
                                'venue' => 'Any legal action arising from these Terms shall be brought exclusively in the federal or state courts located in San Francisco County, California.',
                                'disputeResolution' => 'Before filing a claim, you agree to contact us to attempt to resolve any dispute informally. If we cannot resolve the dispute within 60 days, either party may initiate formal proceedings.',
                                'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'
                            ]
                        ],
                        [
                            'id' => 'changes',
                            'label' => 'Changes to Terms',
                            'icon' => 'clock',
                            'summary' => 'How we update these terms',
                            'color' => 'from-lime-500 to-lime-600',
                            'content' => [
                                'description' => 'We reserve the right to modify these Terms at any time. We will notify you of material changes by:',
                                'notificationMethods' => [
                                    'Posting the updated Terms on our website',
                                    'Sending an email to registered users',
                                    'Displaying an in-app notification'
                                ],
                                'acceptance' => 'Your continued use of our Services after the effective date constitutes your acceptance of the modified Terms.'
                            ]
                        ],
                        [
                            'id' => 'contact',
                            'label' => 'Contact Us',
                            'icon' => 'mail',
                            'summary' => 'How to reach us',
                            'color' => 'from-violet-500 to-violet-600',
                            'content' => [
                                'company' => [
                                    'name' => 'SupplyChainPro Inc.',
                                    'address' => '123 Supply Chain Boulevard, Suite 400, San Francisco, CA 94105',
                                    'email' => 'legal@supplychainpro.com',
                                    'phone' => '+1 (800) 555-0123',
                                    'registration' => 'Registered in Delaware, USA'
                                ],
                                'responseTime' => 'We typically respond to inquiries within 24-48 hours.'
                            ]
                        ]
                    ],
                    'faqs' => [
                        ['question' => 'Can I cancel my subscription at any time?', 'answer' => 'Yes, you can cancel your subscription at any time from your account settings. Cancellation will take effect at the end of your current billing cycle. You will not receive a refund for the current period, but you will retain access until the end of your paid term.', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'],
                        ['question' => 'What happens to my data if I cancel?', 'answer' => 'When you cancel your subscription, your data will be retained for 90 days in case you decide to reactivate. After 90 days, your data will be permanently deleted from our active systems. You can request an export of your data before cancellation.', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'],
                        ['question' => 'Do you offer refunds?', 'answer' => 'We generally do not offer refunds for unused subscription time. However, if you experience technical issues that prevent you from using our Services, please contact our support team and we will work to resolve the issue or provide a prorated refund.', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFunflies.mp4'],
                        ['question' => 'Can I upgrade or downgrade my plan?', 'answer' => 'Yes, you can change your plan at any time. Upgrades take effect immediately with a prorated charge. Downgrades take effect at the end of your current billing cycle.', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4'],
                        ['question' => 'Is my data secure?', 'answer' => 'Yes, we implement industry-standard security measures including 256-bit AES encryption for data at rest, TLS 1.3 for data in transit, and regular security audits. We are SOC 2 Type II certified.', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'],
                        ['question' => 'Do you offer a free trial?', 'answer' => 'Yes, we offer a 14-day free trial for our Professional plan. No credit card is required to start the trial. You can cancel anytime during the trial period with no charge.', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4']
                    ],
                    'testimonials' => [
                        ['name' => 'Sarah Johnson', 'role' => 'Supply Chain Director', 'company' => 'Global Retail Corp', 'quote' => 'The terms are clear and fair. We appreciate the transparency and data ownership policies.', 'rating' => 5],
                        ['name' => 'Michael Chen', 'role' => 'Operations Manager', 'quote' => 'Best terms of service we\'ve seen in the supply chain space. Very customer-friendly.', 'rating' => 5],
                        ['name' => 'Emily Rodriguez', 'role' => 'Legal Counsel', 'quote' => 'As a legal professional, I appreciate how well-documented and fair these terms are.', 'rating' => 5]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 680,
                'section_key' => 'termsOfService',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Cookie Policy Variants
            [
                'id' => 681,
                'section_key' => 'cookiePolicy',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => 'Cookie Notice',
                    'title' => [
                        'prefix' => 'Cookie',
                        'highlight' => 'Policy'
                    ],
                    'description' => 'This Cookie Policy explains how SupplyChainPro uses cookies and similar technologies to recognize you when you visit our website and use our mobile application.',
                    'lastUpdated' => 'April 8, 2026',
                    'company' => [
                        'name' => 'SupplyChainPro Inc.',
                        'address' => '123 Supply Chain Boulevard, Suite 400, San Francisco, CA 94105',
                        'email' => 'privacy@supplychainpro.com',
                        'phone' => '+1 (800) 555-0123'
                    ],
                    'quickFacts' => [
                        ['label' => 'Last Updated', 'value' => 'April 8, 2026', 'icon' => 'calendar'],
                        ['label' => 'Cookie Categories', 'value' => '4', 'icon' => 'chip'],
                        ['label' => 'Third-Party Cookies', 'value' => '4+', 'icon' => 'globe'],
                        ['label' => 'Opt-Out Available', 'value' => 'Yes', 'icon' => 'user']
                    ],
                    'sections' => [
                        ['id' => 'introduction', 'label' => 'Introduction', 'icon' => 'document'],
                        ['id' => 'what-are-cookies', 'label' => 'What Are Cookies?', 'icon' => 'cookie'],
                        ['id' => 'types-of-cookies', 'label' => 'Types of Cookies We Use', 'icon' => 'chip'],
                        ['id' => 'cookie-purposes', 'label' => 'Why We Use Cookies', 'icon' => 'chart'],
                        ['id' => 'third-party-cookies', 'label' => 'Third-Party Cookies', 'icon' => 'globe'],
                        ['id' => 'cookie-preferences', 'label' => 'Manage Your Preferences', 'icon' => 'user'],
                        ['id' => 'consent', 'label' => 'Your Consent', 'icon' => 'check'],
                        ['id' => 'policy-updates', 'label' => 'Updates to This Policy', 'icon' => 'clock'],
                        ['id' => 'contact-us', 'label' => 'Contact Us', 'icon' => 'mail']
                    ],
                    'cookieTypes' => [
                        [
                            'name' => 'Essential Cookies',
                            'icon' => 'lock',
                            'description' => 'These cookies are necessary for our Services to function properly. They enable core functionality such as security, network management, and accessibility.',
                            'examples' => ['Authentication tokens', 'Session identifiers', 'Security verification', 'Load balancing'],
                            'duration' => 'Session to 1 year',
                            'required' => true,
                            'color' => 'from-blue-500 to-blue-600'
                        ],
                        [
                            'name' => 'Functional Cookies',
                            'icon' => 'user',
                            'description' => 'These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings.',
                            'examples' => ['Language preferences', 'Theme settings', 'Saved filters', 'Recent searches'],
                            'duration' => '1 year',
                            'required' => false,
                            'color' => 'from-green-500 to-green-600'
                        ],
                        [
                            'name' => 'Analytics Cookies',
                            'icon' => 'chart',
                            'description' => 'These cookies help us understand how visitors interact with our Services by collecting and reporting information anonymously.',
                            'examples' => ['Page views', 'Click tracking', 'Session duration', 'User flow analysis'],
                            'duration' => '2 years',
                            'required' => false,
                            'color' => 'from-purple-500 to-purple-600'
                        ],
                        [
                            'name' => 'Marketing Cookies',
                            'icon' => 'heart',
                            'description' => 'These cookies track your online activity to help us deliver more relevant advertising and limit how many times you see an ad.',
                            'examples' => ['Ad performance', 'Retargeting', 'Campaign attribution', 'Audience segmentation'],
                            'duration' => '90 days',
                            'required' => false,
                            'color' => 'from-orange-500 to-orange-600'
                        ]
                    ],
                    'thirdPartyCookies' => [
                        [
                            'name' => 'Google Analytics',
                            'purpose' => 'Website and app usage analytics',
                            'dataCollected' => ['Page views', 'User interactions', 'Device information', 'Traffic sources'],
                            'optOut' => 'https://tools.google.com/dlpage/gaoptout',
                            'policy' => 'https://policies.google.com/privacy'
                        ],
                        [
                            'name' => 'Mixpanel',
                            'purpose' => 'Product analytics and user behavior',
                            'dataCollected' => ['Feature usage', 'User journeys', 'Event tracking', 'Retention metrics'],
                            'optOut' => 'https://mixpanel.com/optout',
                            'policy' => 'https://mixpanel.com/legal/privacy-policy/'
                        ],
                        [
                            'name' => 'Intercom',
                            'purpose' => 'Customer support and messaging',
                            'dataCollected' => ['Chat interactions', 'Support tickets', 'User identification', 'Conversation history'],
                            'optOut' => 'https://www.intercom.com/legal/privacy',
                            'policy' => 'https://www.intercom.com/legal/privacy'
                        ],
                        [
                            'name' => 'Stripe',
                            'purpose' => 'Payment processing',
                            'dataCollected' => ['Payment information', 'Transaction data', 'Fraud prevention', 'Billing details'],
                            'optOut' => 'N/A (essential for payments)',
                            'policy' => 'https://stripe.com/privacy'
                        ]
                    ],
                    'cookiePurposes' => [
                        ['title' => 'Security & Authentication', 'description' => 'Protect your account and verify your identity when you log in.', 'icon' => 'shield'],
                        ['title' => 'Performance & Analytics', 'description' => 'Understand how you use our Services to improve functionality and user experience.', 'icon' => 'chart'],
                        ['title' => 'Preferences & Settings', 'description' => 'Remember your choices and personalize your experience.', 'icon' => 'user'],
                        ['title' => 'Marketing & Advertising', 'description' => 'Show relevant content and measure campaign effectiveness.', 'icon' => 'heart']
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 682,
                'section_key' => 'cookiePolicy',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => 'Cookie Notice',
                    'title' => [
                        'prefix' => 'Cookie',
                        'highlight' => 'Policy'
                    ],
                    'description' => 'This Cookie Policy explains how SupplyChainPro uses cookies and similar technologies to recognize you when you visit our website and use our mobile application.',
                    'lastUpdated' => 'April 8, 2026',
                    'quickFacts' => [
                        ['label' => 'Last Updated', 'value' => 'April 8, 2026', 'icon' => 'calendar', 'color' => 'amber', 'trend' => 'Version 2.0'],
                        ['label' => 'Cookie Categories', 'value' => '4', 'icon' => 'chip', 'color' => 'blue', 'trend' => 'Essential, Functional, Analytics, Marketing'],
                        ['label' => 'Third-Party Cookies', 'value' => '4+', 'icon' => 'globe', 'color' => 'purple', 'trend' => 'Google, Mixpanel, Intercom, Stripe'],
                        ['label' => 'Opt-Out Available', 'value' => 'Yes', 'icon' => 'user', 'color' => 'green', 'trend' => 'For non-essential cookies']
                    ],
                    'cookieTypes' => [
                        [
                            'id' => 'essential',
                            'name' => 'Essential Cookies',
                            'icon' => 'lock',
                            'description' => 'These cookies are necessary for our Services to function properly. They enable core functionality such as security, network management, and accessibility.',
                            'examples' => ['Authentication tokens', 'Session identifiers', 'Security verification', 'Load balancing', 'CSRF tokens'],
                            'duration' => 'Session to 1 year',
                            'required' => true,
                            'color' => 'from-blue-500 to-blue-600',
                            'bgColor' => 'bg-blue-50 dark:bg-blue-900/20',
                            'borderColor' => 'border-blue-200 dark:border-blue-800'
                        ],
                        [
                            'id' => 'functional',
                            'name' => 'Functional Cookies',
                            'icon' => 'user',
                            'description' => 'These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings.',
                            'examples' => ['Language preferences', 'Theme settings', 'Saved filters', 'Recent searches', 'Layout preferences'],
                            'duration' => '1 year',
                            'required' => false,
                            'color' => 'from-green-500 to-green-600',
                            'bgColor' => 'bg-green-50 dark:bg-green-900/20',
                            'borderColor' => 'border-green-200 dark:border-green-800'
                        ],
                        [
                            'id' => 'analytics',
                            'name' => 'Analytics Cookies',
                            'icon' => 'chart',
                            'description' => 'These cookies help us understand how visitors interact with our Services by collecting and reporting information anonymously.',
                            'examples' => ['Page views', 'Click tracking', 'Session duration', 'User flow analysis', 'Heat mapping'],
                            'duration' => '2 years',
                            'required' => false,
                            'color' => 'from-purple-500 to-purple-600',
                            'bgColor' => 'bg-purple-50 dark:bg-purple-900/20',
                            'borderColor' => 'border-purple-200 dark:border-purple-800'
                        ],
                        [
                            'id' => 'marketing',
                            'name' => 'Marketing Cookies',
                            'icon' => 'heart',
                            'description' => 'These cookies track your online activity to help us deliver more relevant advertising and limit how many times you see an ad.',
                            'examples' => ['Ad performance', 'Retargeting', 'Campaign attribution', 'Audience segmentation', 'Conversion tracking'],
                            'duration' => '90 days',
                            'required' => false,
                            'color' => 'from-orange-500 to-orange-600',
                            'bgColor' => 'bg-orange-50 dark:bg-orange-900/20',
                            'borderColor' => 'border-orange-200 dark:border-orange-800'
                        ]
                    ],
                    'thirdPartyCookies' => [
                        [
                            'name' => 'Google Analytics',
                            'purpose' => 'Website and app usage analytics',
                            'dataCollected' => ['Page views', 'User interactions', 'Device information', 'Traffic sources', 'Geolocation (approx)'],
                            'optOut' => 'https://tools.google.com/dlpage/gaoptout',
                            'policy' => 'https://policies.google.com/privacy',
                            'cookieType' => 'analytics'
                        ],
                        [
                            'name' => 'Mixpanel',
                            'purpose' => 'Product analytics and user behavior',
                            'dataCollected' => ['Feature usage', 'User journeys', 'Event tracking', 'Retention metrics', 'A/B testing data'],
                            'optOut' => 'https://mixpanel.com/optout',
                            'policy' => 'https://mixpanel.com/legal/privacy-policy/',
                            'cookieType' => 'analytics'
                        ],
                        [
                            'name' => 'Intercom',
                            'purpose' => 'Customer support and messaging',
                            'dataCollected' => ['Chat interactions', 'Support tickets', 'User identification', 'Conversation history', 'In-app messages'],
                            'optOut' => 'https://www.intercom.com/legal/privacy',
                            'policy' => 'https://www.intercom.com/legal/privacy',
                            'cookieType' => 'functional'
                        ],
                        [
                            'name' => 'Stripe',
                            'purpose' => 'Payment processing',
                            'dataCollected' => ['Payment information', 'Transaction data', 'Fraud prevention', 'Billing details', 'Card verification'],
                            'optOut' => 'N/A (essential for payments)',
                            'policy' => 'https://stripe.com/privacy',
                            'cookieType' => 'essential'
                        ],
                        [
                            'name' => 'LinkedIn Insights',
                            'purpose' => 'Marketing and analytics',
                            'dataCollected' => ['Ad performance', 'Conversion tracking', 'Audience insights', 'Campaign attribution'],
                            'optOut' => 'https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out',
                            'policy' => 'https://www.linkedin.com/legal/privacy-policy',
                            'cookieType' => 'marketing'
                        ]
                    ],
                    'cookiePurposes' => [
                        ['title' => 'Security & Authentication', 'description' => 'Protect your account and verify your identity when you log in.', 'icon' => 'shield', 'color' => 'blue'],
                        ['title' => 'Performance & Analytics', 'description' => 'Understand how you use our Services to improve functionality and user experience.', 'icon' => 'chart', 'color' => 'purple'],
                        ['title' => 'Preferences & Settings', 'description' => 'Remember your choices and personalize your experience.', 'icon' => 'user', 'color' => 'green'],
                        ['title' => 'Marketing & Advertising', 'description' => 'Show relevant content and measure campaign effectiveness.', 'icon' => 'heart', 'color' => 'orange']
                    ],
                    'faqs' => [
                        ['question' => 'How long do cookies stay on my device?', 'answer' => 'The duration varies by cookie type. Session cookies are deleted when you close your browser. Persistent cookies remain for a set period (from 90 days to 2 years) unless you delete them manually. You can always clear cookies through your browser settings.'],
                        ['question' => 'Can I disable cookies completely?', 'answer' => 'Yes, you can disable cookies through your browser settings. However, please note that disabling essential cookies will prevent our Services from functioning properly. You may not be able to log in or use core features.'],
                        ['question' => 'Do you use cookies for tracking across different websites?', 'answer' => 'We use analytics cookies that may track your behavior across our own Services, but we do not engage in cross-site tracking for advertising purposes without your explicit consent. Third-party marketing cookies may track your activity across other sites that use the same ad networks.'],
                        ['question' => 'How do I clear existing cookies?', 'answer' => 'You can clear cookies through your browser settings. For Chrome: Settings > Privacy and Security > Clear browsing data > Cookies. For Safari: Preferences > Privacy > Manage Website Data > Remove All. For Firefox: Options > Privacy & Security > Cookies and Site Data > Clear Data.'],
                        ['question' => 'What happens if I don\'t accept cookies?', 'answer' => 'If you decline non-essential cookies, our Services will still function but with reduced functionality. You may lose personalized settings, analytics data won\'t be collected, and you may see more generic advertising.'],
                        ['question' => 'Do your third-party partners comply with privacy regulations?', 'answer' => 'Yes, all our third-party partners are GDPR and CCPA compliant. They sign Data Processing Agreements and are contractually obligated to protect your data. You can review their individual privacy policies via the links provided in our third-party cookies section.']
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 683,
                'section_key' => 'cookiePolicy',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => 'Cookie Notice',
                    'title' => [
                        'prefix' => 'Cookie',
                        'highlight' => 'Policy'
                    ],
                    'description' => 'This Cookie Policy explains how SupplyChainPro uses cookies and similar technologies to recognize you when you visit our website and use our mobile application.',
                    'lastUpdated' => 'April 8, 2026',
                    'autoPlayCarousel' => true,
                    'quickFacts' => [
                        ['label' => 'Last Updated', 'value' => 'April 8, 2026', 'icon' => 'calendar', 'color' => 'amber', 'trend' => 'Version 3.0'],
                        ['label' => 'Cookie Categories', 'value' => '4', 'icon' => 'chip', 'color' => 'blue', 'trend' => 'Essential, Functional, Analytics, Marketing'],
                        ['label' => 'Third-Party Cookies', 'value' => '5+', 'icon' => 'globe', 'color' => 'purple', 'trend' => 'Google, Mixpanel, Intercom, Stripe, LinkedIn'],
                        ['label' => 'Opt-Out Available', 'value' => 'Yes', 'icon' => 'user', 'color' => 'green', 'trend' => 'For non-essential cookies']
                    ],
                    'highlights' => [
                        ['title' => 'Your Privacy, Your Choice', 'description' => 'You have full control over which cookies you accept. Manage your preferences anytime.', 'icon' => 'user', 'color' => 'from-amber-500 to-amber-600', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'],
                        ['title' => 'Essential Cookies Always Active', 'description' => 'Security and authentication cookies are always on to protect your account.', 'icon' => 'shield', 'color' => 'from-blue-500 to-blue-600', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'],
                        ['title' => 'Transparent & Compliant', 'description' => 'We follow GDPR, CCPA, and ePrivacy regulations for cookie consent.', 'icon' => 'globe', 'color' => 'from-green-500 to-green-600', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFunflies.mp4'],
                        ['title' => 'Analytics Help Us Improve', 'description' => 'Anonymous data helps us make SupplyChainPro better for everyone.', 'icon' => 'chart', 'color' => 'from-purple-500 to-purple-600', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4']
                    ],
                    'cookieTypes' => [
                        [
                            'id' => 'essential',
                            'name' => 'Essential Cookies',
                            'icon' => 'lock',
                            'description' => 'These cookies are necessary for our Services to function properly. They enable core functionality such as security, network management, and accessibility.',
                            'examples' => ['Authentication tokens', 'Session identifiers', 'Security verification', 'Load balancing', 'CSRF tokens'],
                            'duration' => 'Session to 1 year',
                            'required' => true,
                            'color' => 'from-blue-500 to-blue-600',
                            'bgColor' => 'bg-blue-50 dark:bg-blue-900/20',
                            'borderColor' => 'border-blue-200 dark:border-blue-800',
                            'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
                        ],
                        [
                            'id' => 'functional',
                            'name' => 'Functional Cookies',
                            'icon' => 'user',
                            'description' => 'These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings.',
                            'examples' => ['Language preferences', 'Theme settings', 'Saved filters', 'Recent searches', 'Layout preferences'],
                            'duration' => '1 year',
                            'required' => false,
                            'color' => 'from-green-500 to-green-600',
                            'bgColor' => 'bg-green-50 dark:bg-green-900/20',
                            'borderColor' => 'border-green-200 dark:border-green-800',
                            'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'
                        ],
                        [
                            'id' => 'analytics',
                            'name' => 'Analytics Cookies',
                            'icon' => 'chart',
                            'description' => 'These cookies help us understand how visitors interact with our Services by collecting and reporting information anonymously.',
                            'examples' => ['Page views', 'Click tracking', 'Session duration', 'User flow analysis', 'Heat mapping'],
                            'duration' => '2 years',
                            'required' => false,
                            'color' => 'from-purple-500 to-purple-600',
                            'bgColor' => 'bg-purple-50 dark:bg-purple-900/20',
                            'borderColor' => 'border-purple-200 dark:border-purple-800',
                            'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFunflies.mp4'
                        ],
                        [
                            'id' => 'marketing',
                            'name' => 'Marketing Cookies',
                            'icon' => 'heart',
                            'description' => 'These cookies track your online activity to help us deliver more relevant advertising and limit how many times you see an ad.',
                            'examples' => ['Ad performance', 'Retargeting', 'Campaign attribution', 'Audience segmentation', 'Conversion tracking'],
                            'duration' => '90 days',
                            'required' => false,
                            'color' => 'from-orange-500 to-orange-600',
                            'bgColor' => 'bg-orange-50 dark:bg-orange-900/20',
                            'borderColor' => 'border-orange-200 dark:border-orange-800',
                            'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4'
                        ]
                    ],
                    'thirdPartyCookies' => [
                        [
                            'name' => 'Google Analytics',
                            'purpose' => 'Website and app usage analytics',
                            'dataCollected' => ['Page views', 'User interactions', 'Device information', 'Traffic sources', 'Geolocation (approx)'],
                            'optOut' => 'https://tools.google.com/dlpage/gaoptout',
                            'policy' => 'https://policies.google.com/privacy',
                            'cookieType' => 'analytics',
                            'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
                        ],
                        [
                            'name' => 'Mixpanel',
                            'purpose' => 'Product analytics and user behavior',
                            'dataCollected' => ['Feature usage', 'User journeys', 'Event tracking', 'Retention metrics', 'A/B testing data'],
                            'optOut' => 'https://mixpanel.com/optout',
                            'policy' => 'https://mixpanel.com/legal/privacy-policy/',
                            'cookieType' => 'analytics'
                        ],
                        [
                            'name' => 'Intercom',
                            'purpose' => 'Customer support and messaging',
                            'dataCollected' => ['Chat interactions', 'Support tickets', 'User identification', 'Conversation history', 'In-app messages'],
                            'optOut' => 'https://www.intercom.com/legal/privacy',
                            'policy' => 'https://www.intercom.com/legal/privacy',
                            'cookieType' => 'functional'
                        ],
                        [
                            'name' => 'Stripe',
                            'purpose' => 'Payment processing',
                            'dataCollected' => ['Payment information', 'Transaction data', 'Fraud prevention', 'Billing details', 'Card verification'],
                            'optOut' => 'N/A (essential for payments)',
                            'policy' => 'https://stripe.com/privacy',
                            'cookieType' => 'essential'
                        ],
                        [
                            'name' => 'LinkedIn Insights',
                            'purpose' => 'Marketing and analytics',
                            'dataCollected' => ['Ad performance', 'Conversion tracking', 'Audience insights', 'Campaign attribution'],
                            'optOut' => 'https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out',
                            'policy' => 'https://www.linkedin.com/legal/privacy-policy',
                            'cookieType' => 'marketing'
                        ]
                    ],
                    'cookiePurposes' => [
                        ['title' => 'Security & Authentication', 'description' => 'Protect your account and verify your identity when you log in.', 'icon' => 'shield', 'color' => 'blue'],
                        ['title' => 'Performance & Analytics', 'description' => 'Understand how you use our Services to improve functionality and user experience.', 'icon' => 'chart', 'color' => 'purple'],
                        ['title' => 'Preferences & Settings', 'description' => 'Remember your choices and personalize your experience.', 'icon' => 'user', 'color' => 'green'],
                        ['title' => 'Marketing & Advertising', 'description' => 'Show relevant content and measure campaign effectiveness.', 'icon' => 'heart', 'color' => 'orange']
                    ],
                    'testimonials' => [
                        ['name' => 'Sarah Johnson', 'role' => 'Supply Chain Director', 'company' => 'Global Retail Corp', 'quote' => 'I appreciate how transparent SupplyChainPro is about cookie usage. The preference center is easy to use.', 'rating' => 5],
                        ['name' => 'Michael Chen', 'role' => 'Operations Manager', 'quote' => 'Clear cookie policy and easy opt-out options. This is how all apps should handle privacy.', 'rating' => 5],
                        ['name' => 'Emily Rodriguez', 'role' => 'Legal Counsel', 'quote' => 'As a legal professional, I\'m impressed with their GDPR-compliant cookie consent implementation.', 'rating' => 5]
                    ],
                    'faqs' => [
                        ['question' => 'How long do cookies stay on my device?', 'answer' => 'The duration varies by cookie type. Session cookies are deleted when you close your browser. Persistent cookies remain for a set period (from 90 days to 2 years) unless you delete them manually. You can always clear cookies through your browser settings.', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'],
                        ['question' => 'Can I disable cookies completely?', 'answer' => 'Yes, you can disable cookies through your browser settings. However, please note that disabling essential cookies will prevent our Services from functioning properly. You may not be able to log in or use core features.', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'],
                        ['question' => 'Do you use cookies for tracking across different websites?', 'answer' => 'We use analytics cookies that may track your behavior across our own Services, but we do not engage in cross-site tracking for advertising purposes without your explicit consent. Third-party marketing cookies may track your activity across other sites that use the same ad networks.', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFunflies.mp4'],
                        ['question' => 'How do I clear existing cookies?', 'answer' => 'You can clear cookies through your browser settings. For Chrome: Settings > Privacy and Security > Clear browsing data > Cookies. For Safari: Preferences > Privacy > Manage Website Data > Remove All. For Firefox: Options > Privacy & Security > Cookies and Site Data > Clear Data.', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4'],
                        ['question' => 'What happens if I don\'t accept cookies?', 'answer' => 'If you decline non-essential cookies, our Services will still function but with reduced functionality. You may lose personalized settings, analytics data won\'t be collected, and you may see more generic advertising.', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'],
                        ['question' => 'Do your third-party partners comply with privacy regulations?', 'answer' => 'Yes, all our third-party partners are GDPR and CCPA compliant. They sign Data Processing Agreements and are contractually obligated to protect your data. You can review their individual privacy policies via the links provided in our third-party cookies section.', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4']
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 684,
                'section_key' => 'cookiePolicy',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // GDPR Compliance Variants
            [
                'id' => 685,
                'section_key' => 'gdprCompliance',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => 'GDPR Compliance',
                    'title' => [
                        'prefix' => 'GDPR',
                        'highlight' => 'Compliance'
                    ],
                    'description' => 'SupplyChainPro is committed to protecting your personal data and complying with the General Data Protection Regulation (GDPR). This page outlines our GDPR compliance framework and your rights as a data subject.',
                    'company' => [
                        'name' => 'SupplyChainPro Inc.',
                        'legalName' => 'SupplyChainPro Inc.',
                        'address' => '123 Supply Chain Boulevard, Suite 400, San Francisco, CA 94105',
                        'email' => 'privacy@supplychainpro.com',
                        'phone' => '+1 (800) 555-0123',
                        'dpoName' => 'Dr. Sarah Chen',
                        'dpoEmail' => 'dpo@supplychainpro.com',
                        'representativeEU' => 'SupplyChainPro EU Ltd., 123 Dublin Street, Dublin, Ireland'
                    ],
                    'quickFacts' => [
                        ['label' => 'GDPR Compliant', 'value' => 'Yes', 'icon' => 'check', 'color' => 'green'],
                        ['label' => 'Data Subject Rights', 'value' => '8', 'icon' => 'user', 'color' => 'blue'],
                        ['label' => 'DPO Appointed', 'value' => 'Yes', 'icon' => 'mail', 'color' => 'purple'],
                        ['label' => 'EU Representative', 'value' => 'Appointed', 'icon' => 'globe', 'color' => 'amber']
                    ],
                    'sections' => [
                        ['id' => 'introduction', 'label' => 'Introduction to GDPR', 'icon' => 'document'],
                        ['id' => 'data-controller', 'label' => 'Data Controller', 'icon' => 'building'],
                        ['id' => 'legal-basis', 'label' => 'Legal Basis for Processing', 'icon' => 'scale'],
                        ['id' => 'data-subject-rights', 'label' => 'Data Subject Rights', 'icon' => 'user'],
                        ['id' => 'lawful-processing', 'label' => 'Lawful Processing Conditions', 'icon' => 'check'],
                        ['id' => 'consent-management', 'label' => 'Consent Management', 'icon' => 'heart'],
                        ['id' => 'data-security', 'label' => 'Data Security Measures', 'icon' => 'shield'],
                        ['id' => 'data-breach', 'label' => 'Data Breach Procedures', 'icon' => 'bell'],
                        ['id' => 'international-transfers', 'label' => 'International Transfers', 'icon' => 'globe'],
                        ['id' => 'data-retention', 'label' => 'Data Retention Policy', 'icon' => 'clock'],
                        ['id' => 'dpo-information', 'label' => 'DPO Information', 'icon' => 'mail'],
                        ['id' => 'supervisory-authority', 'label' => 'Supervisory Authority', 'icon' => 'scale'],
                        ['id' => 'compliance-certifications', 'label' => 'Compliance Certifications', 'icon' => 'shield'],
                        ['id' => 'contact-us', 'label' => 'Contact Us', 'icon' => 'mail']
                    ],
                    'dataSubjectRights' => [
                        ['title' => 'Right to Access', 'description' => 'You have the right to obtain confirmation from us whether we are processing your personal data, and where that is the case, access to that personal data.', 'articles' => 'Art. 15 GDPR', 'timeframe' => '30 days', 'icon' => 'eye'],
                        ['title' => 'Right to Rectification', 'description' => 'You have the right to obtain from us the rectification of inaccurate personal data concerning you.', 'articles' => 'Art. 16 GDPR', 'timeframe' => 'Immediate', 'icon' => 'check'],
                        ['title' => 'Right to Erasure (Right to be Forgotten)', 'description' => 'You have the right to obtain from us the erasure of personal data concerning you without undue delay.', 'articles' => 'Art. 17 GDPR', 'timeframe' => '30 days', 'icon' => 'x'],
                        ['title' => 'Right to Restriction of Processing', 'description' => 'You have the right to obtain from us restriction of processing of your personal data.', 'articles' => 'Art. 18 GDPR', 'timeframe' => '15 days', 'icon' => 'clock'],
                        ['title' => 'Right to Data Portability', 'description' => 'You have the right to receive your personal data in a structured, commonly used, and machine-readable format.', 'articles' => 'Art. 20 GDPR', 'timeframe' => '30 days', 'icon' => 'database'],
                        ['title' => 'Right to Object', 'description' => 'You have the right to object to processing of your personal data based on our legitimate interests.', 'articles' => 'Art. 21 GDPR', 'timeframe' => '15 days', 'icon' => 'scale'],
                        ['title' => 'Right to Withdraw Consent', 'description' => 'You have the right to withdraw your consent at any time without affecting the lawfulness of processing based on consent before its withdrawal.', 'articles' => 'Art. 7(3) GDPR', 'timeframe' => 'Immediate', 'icon' => 'heart'],
                        ['title' => 'Right to Lodge a Complaint', 'description' => 'You have the right to lodge a complaint with a supervisory authority if you believe our processing infringes the GDPR.', 'articles' => 'Art. 77 GDPR', 'timeframe' => 'Anytime', 'icon' => 'mail']
                    ],
                    'legalBases' => [
                        ['basis' => 'Consent', 'article' => 'Art. 6(1)(a) GDPR', 'description' => 'The data subject has given consent to the processing of their personal data for one or more specific purposes.', 'examples' => ['Marketing communications', 'Cookie preferences', 'Optional profiling']],
                        ['basis' => 'Contract', 'article' => 'Art. 6(1)(b) GDPR', 'description' => 'Processing is necessary for the performance of a contract to which the data subject is party.', 'examples' => ['Account creation', 'Service delivery', 'Payment processing']],
                        ['basis' => 'Legal Obligation', 'article' => 'Art. 6(1)(c) GDPR', 'description' => 'Processing is necessary for compliance with a legal obligation to which the controller is subject.', 'examples' => ['Tax records', 'Regulatory reporting', 'Fraud prevention']],
                        ['basis' => 'Vital Interests', 'article' => 'Art. 6(1)(d) GDPR', 'description' => 'Processing is necessary to protect the vital interests of the data subject or another natural person.', 'examples' => ['Emergency situations', 'Health emergencies']],
                        ['basis' => 'Public Interest', 'article' => 'Art. 6(1)(e) GDPR', 'description' => 'Processing is necessary for the performance of a task carried out in the public interest.', 'examples' => ['Public health', 'Scientific research']],
                        ['basis' => 'Legitimate Interests', 'article' => 'Art. 6(1)(f) GDPR', 'description' => 'Processing is necessary for the purposes of legitimate interests pursued by the controller.', 'examples' => ['Security monitoring', 'Fraud detection', 'Direct marketing']]
                    ],
                    'securityMeasures' => [
                        ['name' => 'Encryption', 'description' => '256-bit AES encryption for data at rest, TLS 1.3 for data in transit', 'status' => 'Implemented'],
                        ['name' => 'Access Control', 'description' => 'Role-based access control with multi-factor authentication', 'status' => 'Implemented'],
                        ['name' => 'Pseudonymization', 'description' => 'Personal data is pseudonymized where possible', 'status' => 'Implemented'],
                        ['name' => 'Data Minimization', 'description' => 'We only collect data necessary for specified purposes', 'status' => 'Implemented'],
                        ['name' => 'Regular Audits', 'description' => 'Annual GDPR compliance audits by third-party experts', 'status' => 'Scheduled'],
                        ['name' => 'Staff Training', 'description' => 'Regular GDPR training for all employees handling personal data', 'status' => 'Ongoing']
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 686,
                'section_key' => 'gdprCompliance',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => 'GDPR Compliance',
                    'title' => [
                        'prefix' => 'GDPR',
                        'highlight' => 'Compliance'
                    ],
                    'description' => 'SupplyChainPro is committed to protecting your personal data and complying with the General Data Protection Regulation (GDPR). This page outlines our GDPR compliance framework and your rights as a data subject.',
                    'company' => [
                        'name' => 'SupplyChainPro Inc.',
                        'legalName' => 'SupplyChainPro Inc.',
                        'address' => '123 Supply Chain Boulevard, Suite 400, San Francisco, CA 94105',
                        'email' => 'privacy@supplychainpro.com',
                        'phone' => '+1 (800) 555-0123',
                        'dpoName' => 'Dr. Sarah Chen',
                        'dpoEmail' => 'dpo@supplychainpro.com',
                        'representativeEU' => 'SupplyChainPro EU Ltd., 123 Dublin Street, Dublin, Ireland',
                        'registrationNumber' => 'IE123456'
                    ],
                    'quickFacts' => [
                        ['label' => 'GDPR Compliant', 'value' => 'Yes', 'icon' => 'check', 'color' => 'green', 'trend' => 'Certified'],
                        ['label' => 'Data Subject Rights', 'value' => '8', 'icon' => 'user', 'color' => 'blue', 'trend' => 'Full compliance'],
                        ['label' => 'DPO Appointed', 'value' => 'Dr. Sarah Chen', 'icon' => 'mail', 'color' => 'purple', 'trend' => 'Available 24/7'],
                        ['label' => 'Response Time', 'value' => '30 days', 'icon' => 'clock', 'color' => 'amber', 'trend' => 'Average: 5 days'],
                        ['label' => 'Data Processing Locations', 'value' => 'EU, US', 'icon' => 'globe', 'color' => 'indigo', 'trend' => 'SCCs in place'],
                        ['label' => 'Security Certifications', 'value' => 'SOC 2, ISO 27001', 'icon' => 'shield', 'color' => 'teal', 'trend' => 'Annual audits']
                    ],
                    'dataSubjectRights' => [
                        [
                            'id' => 'access',
                            'title' => 'Right to Access',
                            'description' => 'You have the right to obtain confirmation from us whether we are processing your personal data, and where that is the case, access to that personal data.',
                            'articles' => 'Art. 15 GDPR',
                            'timeframe' => '30 days',
                            'icon' => 'eye',
                            'color' => 'from-blue-500 to-blue-600',
                            'bgColor' => 'bg-blue-50 dark:bg-blue-900/20',
                            'howToExercise' => 'Submit a Data Access Request through our privacy portal or email our DPO.',
                            'limitations' => 'We may need to verify your identity before processing your request.'
                        ],
                        [
                            'id' => 'rectification',
                            'title' => 'Right to Rectification',
                            'description' => 'You have the right to obtain from us the rectification of inaccurate personal data concerning you.',
                            'articles' => 'Art. 16 GDPR',
                            'timeframe' => 'Immediate',
                            'icon' => 'check',
                            'color' => 'from-green-500 to-green-600',
                            'bgColor' => 'bg-green-50 dark:bg-green-900/20',
                            'howToExercise' => 'Update your information directly in your account settings or contact support.',
                            'limitations' => 'We may ask for supporting documentation for certain changes.'
                        ],
                        [
                            'id' => 'erasure',
                            'title' => 'Right to Erasure (Right to be Forgotten)',
                            'description' => 'You have the right to obtain from us the erasure of personal data concerning you without undue delay.',
                            'articles' => 'Art. 17 GDPR',
                            'timeframe' => '30 days',
                            'icon' => 'x',
                            'color' => 'from-red-500 to-red-600',
                            'bgColor' => 'bg-red-50 dark:bg-red-900/20',
                            'howToExercise' => 'Request account deletion through settings or submit an erasure request.',
                            'limitations' => 'We may retain data for legal obligations (tax, fraud prevention).'
                        ],
                        [
                            'id' => 'restriction',
                            'title' => 'Right to Restriction of Processing',
                            'description' => 'You have the right to obtain from us restriction of processing of your personal data.',
                            'articles' => 'Art. 18 GDPR',
                            'timeframe' => '15 days',
                            'icon' => 'clock',
                            'color' => 'from-amber-500 to-amber-600',
                            'bgColor' => 'bg-amber-50 dark:bg-amber-900/20',
                            'howToExercise' => 'Contact our DPO to request processing restriction.',
                            'limitations' => 'We may still store your data but not process it actively.'
                        ],
                        [
                            'id' => 'portability',
                            'title' => 'Right to Data Portability',
                            'description' => 'You have the right to receive your personal data in a structured, commonly used, and machine-readable format.',
                            'articles' => 'Art. 20 GDPR',
                            'timeframe' => '30 days',
                            'icon' => 'database',
                            'color' => 'from-purple-500 to-purple-600',
                            'bgColor' => 'bg-purple-50 dark:bg-purple-900/20',
                            'howToExercise' => 'Use the Data Export feature in your account settings.',
                            'limitations' => 'Applies only to data you provided, based on consent or contract.'
                        ],
                        [
                            'id' => 'object',
                            'title' => 'Right to Object',
                            'description' => 'You have the right to object to processing of your personal data based on our legitimate interests.',
                            'articles' => 'Art. 21 GDPR',
                            'timeframe' => '15 days',
                            'icon' => 'scale',
                            'color' => 'from-orange-500 to-orange-600',
                            'bgColor' => 'bg-orange-50 dark:bg-orange-900/20',
                            'howToExercise' => 'Opt-out of marketing communications or contact our DPO.',
                            'limitations' => 'We may continue processing if we have compelling legitimate grounds.'
                        ],
                        [
                            'id' => 'withdraw-consent',
                            'title' => 'Right to Withdraw Consent',
                            'description' => 'You have the right to withdraw your consent at any time without affecting the lawfulness of processing based on consent before its withdrawal.',
                            'articles' => 'Art. 7(3) GDPR',
                            'timeframe' => 'Immediate',
                            'icon' => 'heart',
                            'color' => 'from-pink-500 to-pink-600',
                            'bgColor' => 'bg-pink-50 dark:bg-pink-900/20',
                            'howToExercise' => 'Manage cookie preferences or update marketing preferences.',
                            'limitations' => 'Withdrawal doesn\'t affect past processing.'
                        ],
                        [
                            'id' => 'complaint',
                            'title' => 'Right to Lodge a Complaint',
                            'description' => 'You have the right to lodge a complaint with a supervisory authority if you believe our processing infringes the GDPR.',
                            'articles' => 'Art. 77 GDPR',
                            'timeframe' => 'Anytime',
                            'icon' => 'flag',
                            'color' => 'from-indigo-500 to-indigo-600',
                            'bgColor' => 'bg-indigo-50 dark:bg-indigo-900/20',
                            'howToExercise' => 'Contact your local supervisory authority directly.',
                            'limitations' => 'We encourage you to contact us first to resolve any issues.'
                        ]
                    ],
                    'legalBases' => [
                        ['basis' => 'Consent', 'article' => 'Art. 6(1)(a) GDPR', 'description' => 'The data subject has given consent to the processing of their personal data for one or more specific purposes.', 'examples' => ['Marketing communications', 'Cookie preferences', 'Optional profiling'], 'icon' => 'heart'],
                        ['basis' => 'Contract', 'article' => 'Art. 6(1)(b) GDPR', 'description' => 'Processing is necessary for the performance of a contract to which the data subject is party.', 'examples' => ['Account creation', 'Service delivery', 'Payment processing'], 'icon' => 'document'],
                        ['basis' => 'Legal Obligation', 'article' => 'Art. 6(1)(c) GDPR', 'description' => 'Processing is necessary for compliance with a legal obligation to which the controller is subject.', 'examples' => ['Tax records', 'Regulatory reporting', 'Fraud prevention'], 'icon' => 'scale'],
                        ['basis' => 'Vital Interests', 'article' => 'Art. 6(1)(d) GDPR', 'description' => 'Processing is necessary to protect the vital interests of the data subject or another natural person.', 'examples' => ['Emergency situations', 'Health emergencies'], 'icon' => 'shield'],
                        ['basis' => 'Public Interest', 'article' => 'Art. 6(1)(e) GDPR', 'description' => 'Processing is necessary for the performance of a task carried out in the public interest.', 'examples' => ['Public health', 'Scientific research'], 'icon' => 'globe'],
                        ['basis' => 'Legitimate Interests', 'article' => 'Art. 6(1)(f) GDPR', 'description' => 'Processing is necessary for the purposes of legitimate interests pursued by the controller.', 'examples' => ['Security monitoring', 'Fraud detection', 'Direct marketing'], 'icon' => 'chart']
                    ],
                    'securityMeasures' => [
                        ['name' => 'Encryption', 'description' => '256-bit AES encryption for data at rest, TLS 1.3 for data in transit', 'status' => 'Implemented', 'percentage' => 100],
                        ['name' => 'Access Control', 'description' => 'Role-based access control with multi-factor authentication', 'status' => 'Implemented', 'percentage' => 100],
                        ['name' => 'Pseudonymization', 'description' => 'Personal data is pseudonymized where possible', 'status' => 'Implemented', 'percentage' => 95],
                        ['name' => 'Data Minimization', 'description' => 'We only collect data necessary for specified purposes', 'status' => 'Implemented', 'percentage' => 100],
                        ['name' => 'Regular Audits', 'description' => 'Annual GDPR compliance audits by third-party experts', 'status' => 'Scheduled', 'percentage' => 75],
                        ['name' => 'Staff Training', 'description' => 'Regular GDPR training for all employees handling personal data', 'status' => 'Ongoing', 'percentage' => 100]
                    ],
                    'faqs' => [
                        ['question' => 'What is GDPR and who does it apply to?', 'answer' => 'The General Data Protection Regulation (GDPR) is a European Union regulation that protects the personal data of EU residents. It applies to any organization, regardless of location, that processes the personal data of individuals in the EU.'],
                        ['question' => 'How do I request a copy of my data?', 'answer' => 'You can request a copy of your data through our in-app Privacy Center or by emailing our DPO at dpo@supplychainpro.com. We will provide your data in a structured, machine-readable format within 30 days.'],
                        ['question' => 'How long do you keep my data?', 'answer' => 'We retain your personal data for as long as your account is active or as needed to provide you services. After account deletion, we retain certain data for up to 90 days for legal compliance. You can request earlier deletion in most cases.'],
                        ['question' => 'Is my data transferred outside the EU?', 'answer' => 'Yes, we may transfer data to the United States and other countries. We ensure appropriate safeguards are in place, including Standard Contractual Clauses (SCCs) adopted by the European Commission.'],
                        ['question' => 'What should I do if I suspect a data breach?', 'answer' => 'If you suspect a data breach, please contact our DPO immediately at dpo@supplychainpro.com. We will investigate and notify affected individuals and supervisory authorities as required by law.'],
                        ['question' => 'How do I delete my account and all my data?', 'answer' => 'You can delete your account from the app settings. Upon deletion, we will remove your personal information within 30 days, though some data may be retained for legal compliance (e.g., transaction records for tax purposes) for up to 7 years.']
                    ],
                    'certifications' => [
                        ['name' => 'SOC 2 Type II', 'issuer' => 'AICPA', 'description' => 'Service Organization Control 2 certification for security, availability, and confidentiality.', 'validUntil' => 'December 2026', 'icon' => 'shield'],
                        ['name' => 'ISO 27001', 'issuer' => 'International Organization for Standardization', 'description' => 'Information Security Management System certification.', 'validUntil' => 'September 2026', 'icon' => 'check'],
                        ['name' => 'GDPR Certified', 'issuer' => 'EU Data Protection Board', 'description' => 'GDPR compliance certification for data controllers.', 'validUntil' => 'January 2027', 'icon' => 'globe'],
                        ['name' => 'Privacy Shield', 'issuer' => 'U.S. Department of Commerce', 'description' => 'EU-US Data Privacy Framework certification.', 'validUntil' => 'Active', 'icon' => 'scale']
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 687,
                'section_key' => 'gdprCompliance',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => 'GDPR Compliance',
                    'title' => [
                        'prefix' => 'GDPR',
                        'highlight' => 'Compliance'
                    ],
                    'description' => 'SupplyChainPro is committed to protecting your personal data and complying with the General Data Protection Regulation (GDPR). This page outlines our GDPR compliance framework and your rights as a data subject.',
                    'autoPlayCarousel' => true,
                    'company' => [
                        'name' => 'SupplyChainPro Inc.',
                        'legalName' => 'SupplyChainPro Inc.',
                        'address' => '123 Supply Chain Boulevard, Suite 400, San Francisco, CA 94105',
                        'email' => 'privacy@supplychainpro.com',
                        'phone' => '+1 (800) 555-0123',
                        'dpoName' => 'Dr. Sarah Chen',
                        'dpoEmail' => 'dpo@supplychainpro.com',
                        'representativeEU' => 'SupplyChainPro EU Ltd., 123 Dublin Street, Dublin, Ireland',
                        'registrationNumber' => 'IE123456'
                    ],
                    'quickFacts' => [
                        ['label' => 'GDPR Compliant', 'value' => 'Yes', 'icon' => 'check', 'color' => 'green', 'trend' => 'Certified since 2018'],
                        ['label' => 'Data Subject Rights', 'value' => '8', 'icon' => 'user', 'color' => 'blue', 'trend' => 'Full compliance'],
                        ['label' => 'DPO Appointed', 'value' => 'Dr. Sarah Chen', 'icon' => 'mail', 'color' => 'purple', 'trend' => 'Available 24/7'],
                        ['label' => 'Response Time', 'value' => '30 days', 'icon' => 'clock', 'color' => 'amber', 'trend' => 'Average: 5 days'],
                        ['label' => 'Data Processing Locations', 'value' => 'EU, US, APAC', 'icon' => 'globe', 'color' => 'indigo', 'trend' => 'SCCs in place'],
                        ['label' => 'Security Certifications', 'value' => 'SOC 2, ISO 27001', 'icon' => 'shield', 'color' => 'teal', 'trend' => 'Annual audits']
                    ],
                    'highlights' => [
                        ['title' => 'Your Data, Your Control', 'description' => 'You have full control over your personal data. Access, update, or delete your information at any time.', 'icon' => 'user', 'color' => 'from-blue-500 to-blue-600', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'],
                        ['title' => 'Enterprise-Grade Security', 'description' => 'Bank-level encryption and security measures protect your data at all times.', 'icon' => 'shield', 'color' => 'from-green-500 to-green-600', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'],
                        ['title' => 'GDPR & CCPA Compliant', 'description' => 'We adhere to global privacy regulations to protect your rights wherever you are.', 'icon' => 'globe', 'color' => 'from-purple-500 to-purple-600', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFunflies.mp4'],
                        ['title' => 'Transparent Processing', 'description' => 'We clearly explain how and why we process your personal data.', 'icon' => 'eye', 'color' => 'from-amber-500 to-amber-600', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4'],
                        ['title' => 'DPO Available 24/7', 'description' => 'Our Data Protection Officer is available to answer your privacy questions.', 'icon' => 'mail', 'color' => 'from-indigo-500 to-indigo-600', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4']
                    ],
                    'dataSubjectRights' => [
                        [
                            'id' => 'access',
                            'title' => 'Right to Access',
                            'description' => 'You have the right to obtain confirmation from us whether we are processing your personal data, and where that is the case, access to that personal data.',
                            'articles' => 'Art. 15 GDPR',
                            'timeframe' => '30 days',
                            'icon' => 'eye',
                            'color' => 'from-blue-500 to-blue-600',
                            'bgColor' => 'bg-blue-50 dark:bg-blue-900/20',
                            'howToExercise' => 'Submit a Data Access Request through our privacy portal or email our DPO.',
                            'limitations' => 'We may need to verify your identity before processing your request.',
                            'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
                        ],
                        [
                            'id' => 'rectification',
                            'title' => 'Right to Rectification',
                            'description' => 'You have the right to obtain from us the rectification of inaccurate personal data concerning you.',
                            'articles' => 'Art. 16 GDPR',
                            'timeframe' => 'Immediate',
                            'icon' => 'check',
                            'color' => 'from-green-500 to-green-600',
                            'bgColor' => 'bg-green-50 dark:bg-green-900/20',
                            'howToExercise' => 'Update your information directly in your account settings or contact support.',
                            'limitations' => 'We may ask for supporting documentation for certain changes.',
                            'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'
                        ],
                        [
                            'id' => 'erasure',
                            'title' => 'Right to Erasure (Right to be Forgotten)',
                            'description' => 'You have the right to obtain from us the erasure of personal data concerning you without undue delay.',
                            'articles' => 'Art. 17 GDPR',
                            'timeframe' => '30 days',
                            'icon' => 'x',
                            'color' => 'from-red-500 to-red-600',
                            'bgColor' => 'bg-red-50 dark:bg-red-900/20',
                            'howToExercise' => 'Request account deletion through settings or submit an erasure request.',
                            'limitations' => 'We may retain data for legal obligations (tax, fraud prevention).',
                            'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFunflies.mp4'
                        ],
                        [
                            'id' => 'restriction',
                            'title' => 'Right to Restriction of Processing',
                            'description' => 'You have the right to obtain from us restriction of processing of your personal data.',
                            'articles' => 'Art. 18 GDPR',
                            'timeframe' => '15 days',
                            'icon' => 'clock',
                            'color' => 'from-amber-500 to-amber-600',
                            'bgColor' => 'bg-amber-50 dark:bg-amber-900/20',
                            'howToExercise' => 'Contact our DPO to request processing restriction.',
                            'limitations' => 'We may still store your data but not process it actively.'
                        ],
                        [
                            'id' => 'portability',
                            'title' => 'Right to Data Portability',
                            'description' => 'You have the right to receive your personal data in a structured, commonly used, and machine-readable format.',
                            'articles' => 'Art. 20 GDPR',
                            'timeframe' => '30 days',
                            'icon' => 'database',
                            'color' => 'from-purple-500 to-purple-600',
                            'bgColor' => 'bg-purple-50 dark:bg-purple-900/20',
                            'howToExercise' => 'Use the Data Export feature in your account settings.',
                            'limitations' => 'Applies only to data you provided, based on consent or contract.',
                            'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4'
                        ],
                        [
                            'id' => 'object',
                            'title' => 'Right to Object',
                            'description' => 'You have the right to object to processing of your personal data based on our legitimate interests.',
                            'articles' => 'Art. 21 GDPR',
                            'timeframe' => '15 days',
                            'icon' => 'scale',
                            'color' => 'from-orange-500 to-orange-600',
                            'bgColor' => 'bg-orange-50 dark:bg-orange-900/20',
                            'howToExercise' => 'Opt-out of marketing communications or contact our DPO.',
                            'limitations' => 'We may continue processing if we have compelling legitimate grounds.'
                        ],
                        [
                            'id' => 'withdraw-consent',
                            'title' => 'Right to Withdraw Consent',
                            'description' => 'You have the right to withdraw your consent at any time without affecting the lawfulness of processing based on consent before its withdrawal.',
                            'articles' => 'Art. 7(3) GDPR',
                            'timeframe' => 'Immediate',
                            'icon' => 'heart',
                            'color' => 'from-pink-500 to-pink-600',
                            'bgColor' => 'bg-pink-50 dark:bg-pink-900/20',
                            'howToExercise' => 'Manage cookie preferences or update marketing preferences.',
                            'limitations' => 'Withdrawal doesn\'t affect past processing.',
                            'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
                        ],
                        [
                            'id' => 'complaint',
                            'title' => 'Right to Lodge a Complaint',
                            'description' => 'You have the right to lodge a complaint with a supervisory authority if you believe our processing infringes the GDPR.',
                            'articles' => 'Art. 77 GDPR',
                            'timeframe' => 'Anytime',
                            'icon' => 'flag',
                            'color' => 'from-indigo-500 to-indigo-600',
                            'bgColor' => 'bg-indigo-50 dark:bg-indigo-900/20',
                            'howToExercise' => 'Contact your local supervisory authority directly.',
                            'limitations' => 'We encourage you to contact us first to resolve any issues.'
                        ]
                    ],
                    'legalBases' => [
                        ['basis' => 'Consent', 'article' => 'Art. 6(1)(a) GDPR', 'description' => 'The data subject has given consent to the processing of their personal data for one or more specific purposes.', 'examples' => ['Marketing communications', 'Cookie preferences', 'Optional profiling'], 'icon' => 'heart'],
                        ['basis' => 'Contract', 'article' => 'Art. 6(1)(b) GDPR', 'description' => 'Processing is necessary for the performance of a contract to which the data subject is party.', 'examples' => ['Account creation', 'Service delivery', 'Payment processing'], 'icon' => 'document'],
                        ['basis' => 'Legal Obligation', 'article' => 'Art. 6(1)(c) GDPR', 'description' => 'Processing is necessary for compliance with a legal obligation to which the controller is subject.', 'examples' => ['Tax records', 'Regulatory reporting', 'Fraud prevention'], 'icon' => 'scale'],
                        ['basis' => 'Vital Interests', 'article' => 'Art. 6(1)(d) GDPR', 'description' => 'Processing is necessary to protect the vital interests of the data subject or another natural person.', 'examples' => ['Emergency situations', 'Health emergencies'], 'icon' => 'shield'],
                        ['basis' => 'Public Interest', 'article' => 'Art. 6(1)(e) GDPR', 'description' => 'Processing is necessary for the performance of a task carried out in the public interest.', 'examples' => ['Public health', 'Scientific research'], 'icon' => 'globe'],
                        ['basis' => 'Legitimate Interests', 'article' => 'Art. 6(1)(f) GDPR', 'description' => 'Processing is necessary for the purposes of legitimate interests pursued by the controller.', 'examples' => ['Security monitoring', 'Fraud detection', 'Direct marketing'], 'icon' => 'chart']
                    ],
                    'securityMeasures' => [
                        ['name' => 'Encryption', 'description' => '256-bit AES encryption for data at rest, TLS 1.3 for data in transit', 'status' => 'Implemented', 'percentage' => 100],
                        ['name' => 'Access Control', 'description' => 'Role-based access control with multi-factor authentication', 'status' => 'Implemented', 'percentage' => 100],
                        ['name' => 'Pseudonymization', 'description' => 'Personal data is pseudonymized where possible', 'status' => 'Implemented', 'percentage' => 95],
                        ['name' => 'Data Minimization', 'description' => 'We only collect data necessary for specified purposes', 'status' => 'Implemented', 'percentage' => 100],
                        ['name' => 'Regular Audits', 'description' => 'Annual GDPR compliance audits by third-party experts', 'status' => 'Scheduled', 'percentage' => 75],
                        ['name' => 'Staff Training', 'description' => 'Regular GDPR training for all employees handling personal data', 'status' => 'Ongoing', 'percentage' => 100]
                    ],
                    'testimonials' => [
                        ['name' => 'Sarah Johnson', 'role' => 'Supply Chain Director', 'company' => 'Global Retail Corp', 'quote' => 'SupplyChainPro\'s GDPR compliance gave our legal team full confidence. The transparency around data handling is exceptional.', 'rating' => 5],
                        ['name' => 'Michael Chen', 'role' => 'Operations Manager', 'quote' => 'Submitting a data access request was simple and fast. Received my data export within a week.', 'rating' => 5],
                        ['name' => 'Emily Rodriguez', 'role' => 'Legal Counsel', 'quote' => 'As a legal professional, I\'m impressed with their GDPR compliance framework and DPO responsiveness.', 'rating' => 5]
                    ],
                    'faqs' => [
                        ['question' => 'What is GDPR and who does it apply to?', 'answer' => 'The General Data Protection Regulation (GDPR) is a European Union regulation that protects the personal data of EU residents. It applies to any organization, regardless of location, that processes the personal data of individuals in the EU.', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'],
                        ['question' => 'How do I request a copy of my data?', 'answer' => 'You can request a copy of your data through our in-app Privacy Center or by emailing our DPO at dpo@supplychainpro.com. We will provide your data in a structured, machine-readable format within 30 days.', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'],
                        ['question' => 'How long do you keep my data?', 'answer' => 'We retain your personal data for as long as your account is active or as needed to provide you services. After account deletion, we retain certain data for up to 90 days for legal compliance. You can request earlier deletion in most cases.', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFunflies.mp4'],
                        ['question' => 'Is my data transferred outside the EU?', 'answer' => 'Yes, we may transfer data to the United States and other countries. We ensure appropriate safeguards are in place, including Standard Contractual Clauses (SCCs) adopted by the European Commission.', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4'],
                        ['question' => 'What should I do if I suspect a data breach?', 'answer' => 'If you suspect a data breach, please contact our DPO immediately at dpo@supplychainpro.com. We will investigate and notify affected individuals and supervisory authorities as required by law.', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'],
                        ['question' => 'How do I delete my account and all my data?', 'answer' => 'You can delete your account from the app settings. Upon deletion, we will remove your personal information within 30 days, though some data may be retained for legal compliance (e.g., transaction records for tax purposes) for up to 7 years.', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4']
                    ],
                    'certifications' => [
                        ['name' => 'SOC 2 Type II', 'issuer' => 'AICPA', 'description' => 'Service Organization Control 2 certification for security, availability, and confidentiality.', 'validUntil' => 'December 2026', 'icon' => 'shield'],
                        ['name' => 'ISO 27001', 'issuer' => 'International Organization for Standardization', 'description' => 'Information Security Management System certification.', 'validUntil' => 'September 2026', 'icon' => 'check'],
                        ['name' => 'GDPR Certified', 'issuer' => 'EU Data Protection Board', 'description' => 'GDPR compliance certification for data controllers.', 'validUntil' => 'January 2027', 'icon' => 'globe'],
                        ['name' => 'Privacy Shield', 'issuer' => 'U.S. Department of Commerce', 'description' => 'EU-US Data Privacy Framework certification.', 'validUntil' => 'Active', 'icon' => 'scale']
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 688,
                'section_key' => 'gdprCompliance',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Data Processing Agreement Variants
            [
                'id' => 689,
                'section_key' => 'dataProcessingAgreement',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => 'Data Processing Agreement',
                    'title' => [
                        'prefix' => 'Data Processing',
                        'highlight' => 'Agreement'
                    ],
                    'description' => 'This Data Processing Agreement (DPA) reflects the parties\' agreement with respect to the processing of personal data under the General Data Protection Regulation (GDPR).',
                    'lastUpdated' => 'April 8, 2026',
                    'company' => [
                        'name' => 'SupplyChainPro Inc.',
                        'legalName' => 'SupplyChainPro Inc.',
                        'address' => '123 Supply Chain Boulevard, Suite 400, San Francisco, CA 94105',
                        'email' => 'privacy@supplychainpro.com',
                        'phone' => '+1 (800) 555-0123',
                        'dpoName' => 'Dr. Sarah Chen',
                        'dpoEmail' => 'dpo@supplychainpro.com'
                    ],
                    'quickFacts' => [
                        ['label' => 'Last Updated', 'value' => 'April 8, 2026', 'icon' => 'calendar', 'color' => 'blue'],
                        ['label' => 'SubProcessors', 'value' => '5+', 'icon' => 'chip', 'color' => 'green'],
                        ['label' => 'Security Certifications', 'value' => 'SOC 2, ISO 27001', 'icon' => 'shield', 'color' => 'purple'],
                        ['label' => 'Data Locations', 'value' => 'US, EU, APAC', 'icon' => 'globe', 'color' => 'amber']
                    ],
                    'sections' => [
                        ['id' => 'introduction', 'label' => 'Introduction', 'icon' => 'document'],
                        ['id' => 'definitions', 'label' => 'Definitions', 'icon' => 'info'],
                        ['id' => 'scope-application', 'label' => 'Scope & Application', 'icon' => 'globe'],
                        ['id' => 'obligations-processor', 'label' => 'Processor Obligations', 'icon' => 'shield'],
                        ['id' => 'obligations-controller', 'label' => 'Controller Obligations', 'icon' => 'user'],
                        ['id' => 'subProcessing', 'label' => 'SubProcessing', 'icon' => 'chip'],
                        ['id' => 'data-subject-rights', 'label' => 'Data Subject Rights', 'icon' => 'user-group'],
                        ['id' => 'security-measures', 'label' => 'Security Measures', 'icon' => 'lock'],
                        ['id' => 'data-breach', 'label' => 'Data Breach Notification', 'icon' => 'bell'],
                        ['id' => 'international-transfers', 'label' => 'International Transfers', 'icon' => 'globe'],
                        ['id' => 'audit-rights', 'label' => 'Audit Rights', 'icon' => 'eye'],
                        ['id' => 'data-deletion', 'label' => 'Data Deletion & Return', 'icon' => 'refresh'],
                        ['id' => 'term-termination', 'label' => 'Term & Termination', 'icon' => 'clock'],
                        ['id' => 'liability', 'label' => 'Liability', 'icon' => 'scale'],
                        ['id' => 'governing-law', 'label' => 'Governing Law', 'icon' => 'scale'],
                        ['id' => 'contact-us', 'label' => 'Contact Us', 'icon' => 'mail']
                    ],
                    'definitions' => [
                        ['term' => 'Agreement', 'definition' => 'This Data Processing Agreement including all schedules, annexes, and appendices attached hereto.'],
                        ['term' => 'Controller', 'definition' => 'The natural or legal person, public authority, agency or other body which, alone or jointly with others, determines the purposes and means of the processing of personal data.'],
                        ['term' => 'Processor', 'definition' => 'A natural or legal person which processes personal data on behalf of the controller.'],
                        ['term' => 'Data Subject', 'definition' => 'An identified or identifiable natural person whose personal data is processed.'],
                        ['term' => 'Personal Data', 'definition' => 'Any information relating to an identified or identifiable natural person (\'data subject\').'],
                        ['term' => 'Processing', 'definition' => 'Any operation or set of operations performed on personal data, whether by automated means.'],
                        ['term' => 'SubProcessor', 'definition' => 'Any processor engaged by the Processor to assist in fulfilling its obligations under this Agreement.'],
                        ['term' => 'Security Incident', 'definition' => 'A breach of security leading to the accidental or unlawful destruction, loss, alteration, unauthorized disclosure of, or access to, personal data.']
                    ],
                    'processorObligations' => [
                        'Process personal data only on documented instructions from the Controller',
                        'Ensure that persons authorized to process personal data have committed themselves to confidentiality',
                        'Implement appropriate technical and organizational security measures',
                        'Assist the Controller in responding to data subject requests',
                        'Notify the Controller without undue delay after becoming aware of a personal data breach',
                        'Delete or return all personal data to the Controller after the end of the provision of services',
                        'Make available to the Controller all information necessary to demonstrate compliance'
                    ],
                    'authorizedSubProcessors' => [
                        [
                            'name' => 'Amazon Web Services (AWS)',
                            'location' => 'US, EU, APAC',
                            'services' => 'Cloud hosting and infrastructure',
                            'securityCertifications' => 'SOC 1, SOC 2, ISO 27001, PCI DSS'
                        ],
                        [
                            'name' => 'Google Cloud Platform (GCP)',
                            'location' => 'US, EU',
                            'services' => 'Cloud hosting, data analytics',
                            'securityCertifications' => 'SOC 2, ISO 27001, ISO 27701'
                        ],
                        [
                            'name' => 'Stripe',
                            'location' => 'US, EU',
                            'services' => 'Payment processing',
                            'securityCertifications' => 'SOC 1, SOC 2, PCI DSS Level 1'
                        ],
                        [
                            'name' => 'Intercom',
                            'location' => 'US, EU',
                            'services' => 'Customer support and messaging',
                            'securityCertifications' => 'SOC 2, ISO 27001, GDPR compliant'
                        ],
                        [
                            'name' => 'Mixpanel',
                            'location' => 'US',
                            'services' => 'Product analytics',
                            'securityCertifications' => 'SOC 2, ISO 27001, Privacy Shield'
                        ]
                    ],
                    'securityMeasures' => [
                        [
                            'category' => 'Access Control',
                            'measures' => [
                                'Role-based access control (RBAC)',
                                'Multi-factor authentication (MFA)',
                                'Principle of least privilege',
                                'Regular access reviews',
                                'Password complexity requirements'
                            ]
                        ],
                        [
                            'category' => 'Data Protection',
                            'measures' => [
                                '256-bit AES encryption at rest',
                                'TLS 1.3 encryption in transit',
                                'Data pseudonymization where possible',
                                'Regular backup and recovery testing'
                            ]
                        ],
                        [
                            'category' => 'Network Security',
                            'measures' => [
                                'Firewall and intrusion detection systems',
                                'DDoS protection',
                                'Regular vulnerability scanning',
                                'Penetration testing (quarterly)'
                            ]
                        ],
                        [
                            'category' => 'Organizational Measures',
                            'measures' => [
                                'GDPR and security training for all employees',
                                'Confidentiality agreements',
                                'Incident response plan',
                                'Regular compliance audits'
                            ]
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 690,
                'section_key' => 'dataProcessingAgreement',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => 'Data Processing Agreement',
                    'title' => [
                        'prefix' => 'Data Processing',
                        'highlight' => 'Agreement'
                    ],
                    'description' => 'This Data Processing Agreement (DPA) reflects the parties\' agreement with respect to the processing of personal data under the General Data Protection Regulation (GDPR).',
                    'lastUpdated' => 'April 8, 2026',
                    'company' => [
                        'name' => 'SupplyChainPro Inc.',
                        'legalName' => 'SupplyChainPro Inc.',
                        'address' => '123 Supply Chain Boulevard, Suite 400, San Francisco, CA 94105',
                        'email' => 'privacy@supplychainpro.com',
                        'phone' => '+1 (800) 555-0123',
                        'dpoName' => 'Dr. Sarah Chen',
                        'dpoEmail' => 'dpo@supplychainpro.com'
                    ],
                    'quickFacts' => [
                        ['label' => 'Last Updated', 'value' => 'April 8, 2026', 'icon' => 'calendar', 'color' => 'indigo', 'trend' => 'Version 2.0'],
                        ['label' => 'SubProcessors', 'value' => '5', 'icon' => 'chip', 'color' => 'blue', 'trend' => 'All GDPR compliant'],
                        ['label' => 'Security Certifications', 'value' => 'SOC 2, ISO 27001', 'icon' => 'shield', 'color' => 'green', 'trend' => 'Annual audits'],
                        ['label' => 'Data Locations', 'value' => 'US, EU, APAC', 'icon' => 'globe', 'color' => 'purple', 'trend' => 'SCCs in place'],
                        ['label' => 'Breach Notification', 'value' => '24 hours', 'icon' => 'bell', 'color' => 'amber', 'trend' => 'Without undue delay'],
                        ['label' => 'Audit Rights', 'value' => 'Annual', 'icon' => 'eye', 'color' => 'teal', 'trend' => 'With 30 days notice']
                    ],
                    'definitions' => [
                        ['term' => 'Agreement', 'definition' => 'This Data Processing Agreement including all schedules, annexes, and appendices attached hereto.'],
                        ['term' => 'Controller', 'definition' => 'The natural or legal person which determines the purposes and means of the processing of personal data.'],
                        ['term' => 'Processor', 'definition' => 'A natural or legal person which processes personal data on behalf of the controller.'],
                        ['term' => 'Data Subject', 'definition' => 'An identified or identifiable natural person whose personal data is processed.'],
                        ['term' => 'Personal Data', 'definition' => 'Any information relating to an identified or identifiable natural person.'],
                        ['term' => 'Processing', 'definition' => 'Any operation performed on personal data, whether by automated means.'],
                        ['term' => 'SubProcessor', 'definition' => 'Any processor engaged by the Processor to assist in fulfilling its obligations.'],
                        ['term' => 'Security Incident', 'definition' => 'A breach of security leading to accidental or unlawful destruction, loss, alteration, unauthorized disclosure of, or access to, personal data.']
                    ],
                    'processorObligations' => [
                        'Process personal data only on documented instructions from the Controller',
                        'Ensure that persons authorized to process personal data have committed themselves to confidentiality',
                        'Implement appropriate technical and organizational security measures',
                        'Assist the Controller in responding to data subject requests',
                        'Notify the Controller without undue delay after becoming aware of a personal data breach',
                        'Delete or return all personal data to the Controller after the end of the provision of services',
                        'Make available to the Controller all information necessary to demonstrate compliance',
                        'Maintain records of processing activities',
                        'Cooperate with supervisory authorities',
                        'Conduct data protection impact assessments when required'
                    ],
                    'controllerObligations' => [
                        'Have sole responsibility for the accuracy, quality, and legality of personal data processed',
                        'Ensure it has obtained all necessary consents and provided all required notices',
                        'Respond to data subject requests and provide necessary assistance',
                        'Comply with all applicable data protection laws and regulations',
                        'Provide documented instructions for processing',
                        'Ensure that its instructions do not violate data protection laws'
                    ],
                    'authorizedSubProcessors' => [
                        [
                            'id' => 1,
                            'name' => 'Amazon Web Services (AWS)',
                            'location' => 'US, EU, APAC',
                            'services' => 'Cloud hosting and infrastructure',
                            'securityCertifications' => 'SOC 1, SOC 2, ISO 27001, PCI DSS',
                            'dataProcessingTerms' => 'Standard Contractual Clauses',
                            'breachNotification' => '24 hours',
                            'website' => 'https://aws.amazon.com/compliance/gdpr-center/'
                        ],
                        [
                            'id' => 2,
                            'name' => 'Google Cloud Platform (GCP)',
                            'location' => 'US, EU',
                            'services' => 'Cloud hosting, data analytics',
                            'securityCertifications' => 'SOC 2, ISO 27001, ISO 27701',
                            'dataProcessingTerms' => 'Standard Contractual Clauses',
                            'breachNotification' => '24 hours',
                            'website' => 'https://cloud.google.com/security/gdpr'
                        ],
                        [
                            'id' => 3,
                            'name' => 'Stripe',
                            'location' => 'US, EU',
                            'services' => 'Payment processing',
                            'securityCertifications' => 'SOC 1, SOC 2, PCI DSS Level 1',
                            'dataProcessingTerms' => 'Standard Contractual Clauses',
                            'breachNotification' => '48 hours',
                            'website' => 'https://stripe.com/privacy'
                        ],
                        [
                            'id' => 4,
                            'name' => 'Intercom',
                            'location' => 'US, EU',
                            'services' => 'Customer support and messaging',
                            'securityCertifications' => 'SOC 2, ISO 27001',
                            'dataProcessingTerms' => 'Standard Contractual Clauses',
                            'breachNotification' => '48 hours',
                            'website' => 'https://www.intercom.com/legal/privacy'
                        ],
                        [
                            'id' => 5,
                            'name' => 'Mixpanel',
                            'location' => 'US',
                            'services' => 'Product analytics',
                            'securityCertifications' => 'SOC 2, ISO 27001',
                            'dataProcessingTerms' => 'Standard Contractual Clauses',
                            'breachNotification' => '72 hours',
                            'website' => 'https://mixpanel.com/legal/privacy-policy/'
                        ]
                    ],
                    'securityMeasures' => [
                        [
                            'category' => 'Access Control',
                            'icon' => 'lock',
                            'measures' => [
                                'Role-based access control (RBAC)',
                                'Multi-factor authentication (MFA)',
                                'Principle of least privilege',
                                'Regular access reviews (quarterly)',
                                'Password complexity requirements',
                                'Automated account lockout after failed attempts'
                            ]
                        ],
                        [
                            'category' => 'Data Protection',
                            'icon' => 'database',
                            'measures' => [
                                '256-bit AES encryption at rest',
                                'TLS 1.3 encryption in transit',
                                'Data pseudonymization where possible',
                                'Regular backup and recovery testing',
                                'Data minimization by default',
                                'Secure key management'
                            ]
                        ],
                        [
                            'category' => 'Network Security',
                            'icon' => 'globe',
                            'measures' => [
                                'Enterprise-grade firewalls',
                                'Intrusion detection/prevention systems',
                                'DDoS protection',
                                'Regular vulnerability scanning (weekly)',
                                'Penetration testing (quarterly)',
                                'Network segmentation'
                            ]
                        ],
                        [
                            'category' => 'Organizational Measures',
                            'icon' => 'user-group',
                            'measures' => [
                                'GDPR and security training for all employees (annual)',
                                'Confidentiality agreements for all staff',
                                'Incident response plan (tested quarterly)',
                                'Regular compliance audits (annual)',
                                'Background checks for sensitive roles',
                                'Data protection by design and default'
                            ]
                        ]
                    ],
                    'faqs' => [
                        ['question' => 'What is a Data Processing Agreement (DPA)?', 'answer' => 'A Data Processing Agreement (DPA) is a legally binding contract between a data controller and a data processor that outlines the terms and conditions for processing personal data. It is required under GDPR Article 28 and ensures that processors implement appropriate security measures and comply with data protection laws.'],
                        ['question' => 'Do I need to sign this DPA?', 'answer' => 'By using our Services, you agree to the terms of this DPA. No physical signature is required. The DPA is incorporated into our Terms of Service and becomes effective when you create an account or continue using our Services.'],
                        ['question' => 'How do I add or remove subProcessors?', 'answer' => 'We maintain a list of authorized subProcessors on our website. We will notify you of any changes to our subprocessor list via email. You may object to new subProcessors within 10 days of notice. If you have a reasonable objection, we will work to find an alternative solution.'],
                        ['question' => 'What happens to my data if I terminate the agreement?', 'answer' => 'Upon termination, we will return all personal data to you in a structured, machine-readable format within 30 days. After return, we will delete all copies of your data from our systems within 90 days, unless we are required to retain data for legal compliance.'],
                        ['question' => 'How do you handle data breaches?', 'answer' => 'We have a comprehensive incident response plan. In the event of a personal data breach, we will notify you within 24 hours of becoming aware of the breach, provide all relevant information, and cooperate fully with your investigation and remediation efforts.'],
                        ['question' => 'Where is my data stored?', 'answer' => 'Your data may be stored in the United States, European Union, or Asia-Pacific region, depending on your location and service requirements. All cross-border transfers are protected by Standard Contractual Clauses (SCCs) adopted by the European Commission.']
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 691,
                'section_key' => 'dataProcessingAgreement',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => 'Data Processing Agreement',
                    'title' => [
                        'prefix' => 'Data Processing',
                        'highlight' => 'Agreement'
                    ],
                    'description' => 'This Data Processing Agreement (DPA) reflects the parties\' agreement with respect to the processing of personal data under the General Data Protection Regulation (GDPR).',
                    'lastUpdated' => 'April 8, 2026',
                    'autoPlayCarousel' => true,
                    'company' => [
                        'name' => 'SupplyChainPro Inc.',
                        'legalName' => 'SupplyChainPro Inc.',
                        'address' => '123 Supply Chain Boulevard, Suite 400, San Francisco, CA 94105',
                        'email' => 'privacy@supplychainpro.com',
                        'phone' => '+1 (800) 555-0123',
                        'dpoName' => 'Dr. Sarah Chen',
                        'dpoEmail' => 'dpo@supplychainpro.com',
                        'representativeEU' => 'SupplyChainPro EU Ltd., 123 Dublin Street, Dublin, Ireland'
                    ],
                    'quickFacts' => [
                        ['label' => 'Last Updated', 'value' => 'April 8, 2026', 'icon' => 'calendar', 'color' => 'indigo', 'trend' => 'Version 3.0'],
                        ['label' => 'SubProcessors', 'value' => '5', 'icon' => 'chip', 'color' => 'blue', 'trend' => 'All GDPR compliant'],
                        ['label' => 'Security Certifications', 'value' => 'SOC 2, ISO 27001', 'icon' => 'shield', 'color' => 'green', 'trend' => 'Annual audits'],
                        ['label' => 'Data Locations', 'value' => 'US, EU, APAC', 'icon' => 'globe', 'color' => 'purple', 'trend' => 'SCCs in place'],
                        ['label' => 'Breach Notification', 'value' => '24 hours', 'icon' => 'bell', 'color' => 'amber', 'trend' => 'Without undue delay'],
                        ['label' => 'Audit Rights', 'value' => 'Annual', 'icon' => 'eye', 'color' => 'teal', 'trend' => 'With 30 days notice']
                    ],
                    'highlights' => [
                        ['title' => 'GDPR Compliant Processing', 'description' => 'We process personal data in strict compliance with GDPR Article 28 requirements.', 'icon' => 'shield', 'color' => 'from-indigo-500 to-indigo-600', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'],
                        ['title' => '24-Hour Breach Notification', 'description' => 'We commit to notifying you of any personal data breach within 24 hours of discovery.', 'icon' => 'bell', 'color' => 'from-red-500 to-red-600', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'],
                        ['title' => 'Secure SubProcessing', 'description' => 'All subProcessors are vetted and bound by the same data protection obligations.', 'icon' => 'chip', 'color' => 'from-green-500 to-green-600', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFunflies.mp4'],
                        ['title' => 'International Data Transfers', 'description' => 'Cross-border transfers protected by Standard Contractual Clauses (SCCs).', 'icon' => 'globe', 'color' => 'from-blue-500 to-blue-600', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4'],
                        ['title' => 'Audit Rights', 'description' => 'You have the right to audit our compliance with this DPA annually.', 'icon' => 'eye', 'color' => 'from-purple-500 to-purple-600', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4']
                    ],
                    'definitions' => [
                        ['term' => 'Agreement', 'definition' => 'This Data Processing Agreement including all schedules, annexes, and appendices attached hereto.'],
                        ['term' => 'Controller', 'definition' => 'The natural or legal person which determines the purposes and means of the processing of personal data.'],
                        ['term' => 'Processor', 'definition' => 'A natural or legal person which processes personal data on behalf of the controller.'],
                        ['term' => 'Data Subject', 'definition' => 'An identified or identifiable natural person whose personal data is processed.'],
                        ['term' => 'Personal Data', 'definition' => 'Any information relating to an identified or identifiable natural person.'],
                        ['term' => 'Processing', 'definition' => 'Any operation performed on personal data, whether by automated means.'],
                        ['term' => 'SubProcessor', 'definition' => 'Any processor engaged by the Processor to assist in fulfilling its obligations.'],
                        ['term' => 'Security Incident', 'definition' => 'A breach of security leading to accidental or unlawful destruction, loss, alteration, unauthorized disclosure of, or access to, personal data.']
                    ],
                    'processorObligations' => [
                        'Process personal data only on documented instructions from the Controller',
                        'Ensure that persons authorized to process personal data have committed themselves to confidentiality',
                        'Implement appropriate technical and organizational security measures',
                        'Assist the Controller in responding to data subject requests',
                        'Notify the Controller without undue delay after becoming aware of a personal data breach',
                        'Delete or return all personal data to the Controller after the end of the provision of services',
                        'Make available to the Controller all information necessary to demonstrate compliance',
                        'Maintain records of processing activities',
                        'Cooperate with supervisory authorities',
                        'Conduct data protection impact assessments when required'
                    ],
                    'controllerObligations' => [
                        'Have sole responsibility for the accuracy, quality, and legality of personal data processed',
                        'Ensure it has obtained all necessary consents and provided all required notices',
                        'Respond to data subject requests and provide necessary assistance',
                        'Comply with all applicable data protection laws and regulations',
                        'Provide documented instructions for processing',
                        'Ensure that its instructions do not violate data protection laws'
                    ],
                    'authorizedSubProcessors' => [
                        [
                            'id' => 1,
                            'name' => 'Amazon Web Services (AWS)',
                            'location' => 'US, EU, APAC',
                            'services' => 'Cloud hosting and infrastructure',
                            'securityCertifications' => 'SOC 1, SOC 2, ISO 27001, PCI DSS',
                            'dataProcessingTerms' => 'Standard Contractual Clauses',
                            'breachNotification' => '24 hours',
                            'website' => 'https://aws.amazon.com/compliance/gdpr-center/',
                            'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
                        ],
                        [
                            'id' => 2,
                            'name' => 'Google Cloud Platform (GCP)',
                            'location' => 'US, EU',
                            'services' => 'Cloud hosting, data analytics',
                            'securityCertifications' => 'SOC 2, ISO 27001, ISO 27701',
                            'dataProcessingTerms' => 'Standard Contractual Clauses',
                            'breachNotification' => '24 hours',
                            'website' => 'https://cloud.google.com/security/gdpr',
                            'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'
                        ],
                        [
                            'id' => 3,
                            'name' => 'Stripe',
                            'location' => 'US, EU',
                            'services' => 'Payment processing',
                            'securityCertifications' => 'SOC 1, SOC 2, PCI DSS Level 1',
                            'dataProcessingTerms' => 'Standard Contractual Clauses',
                            'breachNotification' => '48 hours',
                            'website' => 'https://stripe.com/privacy'
                        ],
                        [
                            'id' => 4,
                            'name' => 'Intercom',
                            'location' => 'US, EU',
                            'services' => 'Customer support and messaging',
                            'securityCertifications' => 'SOC 2, ISO 27001',
                            'dataProcessingTerms' => 'Standard Contractual Clauses',
                            'breachNotification' => '48 hours',
                            'website' => 'https://www.intercom.com/legal/privacy'
                        ],
                        [
                            'id' => 5,
                            'name' => 'Mixpanel',
                            'location' => 'US',
                            'services' => 'Product analytics',
                            'securityCertifications' => 'SOC 2, ISO 27001',
                            'dataProcessingTerms' => 'Standard Contractual Clauses',
                            'breachNotification' => '72 hours',
                            'website' => 'https://mixpanel.com/legal/privacy-policy/'
                        ]
                    ],
                    'securityMeasures' => [
                        [
                            'category' => 'Access Control',
                            'icon' => 'lock',
                            'measures' => [
                                'Role-based access control (RBAC)',
                                'Multi-factor authentication (MFA)',
                                'Principle of least privilege',
                                'Regular access reviews (quarterly)',
                                'Password complexity requirements',
                                'Automated account lockout after failed attempts'
                            ],
                            'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
                        ],
                        [
                            'category' => 'Data Protection',
                            'icon' => 'database',
                            'measures' => [
                                '256-bit AES encryption at rest',
                                'TLS 1.3 encryption in transit',
                                'Data pseudonymization where possible',
                                'Regular backup and recovery testing',
                                'Data minimization by default',
                                'Secure key management'
                            ],
                            'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'
                        ],
                        [
                            'category' => 'Network Security',
                            'icon' => 'globe',
                            'measures' => [
                                'Enterprise-grade firewalls',
                                'Intrusion detection/prevention systems',
                                'DDoS protection',
                                'Regular vulnerability scanning (weekly)',
                                'Penetration testing (quarterly)',
                                'Network segmentation'
                            ],
                            'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFunflies.mp4'
                        ],
                        [
                            'category' => 'Organizational Measures',
                            'icon' => 'user-group',
                            'measures' => [
                                'GDPR and security training for all employees (annual)',
                                'Confidentiality agreements for all staff',
                                'Incident response plan (tested quarterly)',
                                'Regular compliance audits (annual)',
                                'Background checks for sensitive roles',
                                'Data protection by design and default'
                            ],
                            'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4'
                        ]
                    ],
                    'testimonials' => [
                        ['name' => 'Sarah Johnson', 'role' => 'Supply Chain Director', 'company' => 'Global Retail Corp', 'quote' => 'SupplyChainPro\'s DPA gave our legal team full confidence. The subProcessor transparency is exceptional.', 'rating' => 5],
                        ['name' => 'Michael Chen', 'role' => 'Operations Manager', 'quote' => 'The 24-hour breach notification commitment and SCCs for data transfers meet our strict compliance requirements.', 'rating' => 5],
                        ['name' => 'Emily Rodriguez', 'role' => 'Legal Counsel', 'quote' => 'As a legal professional, I\'m impressed with their comprehensive DPA and GDPR compliance framework.', 'rating' => 5]
                    ],
                    'faqs' => [
                        ['question' => 'What is a Data Processing Agreement (DPA)?', 'answer' => 'A Data Processing Agreement (DPA) is a legally binding contract between a data controller and a data processor that outlines the terms and conditions for processing personal data. It is required under GDPR Article 28 and ensures that processors implement appropriate security measures and comply with data protection laws.', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'],
                        ['question' => 'Do I need to sign this DPA?', 'answer' => 'By using our Services, you agree to the terms of this DPA. No physical signature is required. The DPA is incorporated into our Terms of Service and becomes effective when you create an account or continue using our Services.', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'],
                        ['question' => 'How do I add or remove subProcessors?', 'answer' => 'We maintain a list of authorized subProcessors on our website. We will notify you of any changes to our subProcessor list via email. You may object to new subProcessors within 10 days of notice. If you have a reasonable objection, we will work to find an alternative solution.', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFunflies.mp4'],
                        ['question' => 'What happens to my data if I terminate the agreement?', 'answer' => 'Upon termination, we will return all personal data to you in a structured, machine-readable format within 30 days. After return, we will delete all copies of your data from our systems within 90 days, unless we are required to retain data for legal compliance.', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4'],
                        ['question' => 'How do you handle data breaches?', 'answer' => 'We have a comprehensive incident response plan. In the event of a personal data breach, we will notify you within 24 hours of becoming aware of the breach, provide all relevant information, and cooperate fully with your investigation and remediation efforts.', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'],
                        ['question' => 'Where is my data stored?', 'answer' => 'Your data may be stored in the United States, European Union, or Asia-Pacific region, depending on your location and service requirements. All cross-border transfers are protected by Standard Contractual Clauses (SCCs) adopted by the European Commission.', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4']
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 692,
                'section_key' => 'dataProcessingAgreement',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Security Policy Variants
            [
                'id' => 693,
                'section_key' => 'securityPolicy',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => 'Security Policy',
                    'title' => [
                        'prefix' => 'Security',
                        'highlight' => 'Policy'
                    ],
                    'description' => 'At SupplyChainPro, security is our top priority. This policy outlines the technical and organizational measures we implement to protect your data from unauthorized access, disclosure, alteration, and destruction.',
                    'lastUpdated' => 'April 8, 2026',
                    'company' => [
                        'name' => 'SupplyChainPro Inc.',
                        'address' => '123 Supply Chain Boulevard, Suite 400, San Francisco, CA 94105',
                        'email' => 'security@supplychainpro.com',
                        'phone' => '+1 (800) 555-0123',
                        'securityTeam' => 'security@supplychainpro.com'
                    ],
                    'quickFacts' => [
                        ['label' => 'Last Updated', 'value' => 'April 8, 2026', 'icon' => 'calendar', 'color' => 'blue'],
                        ['label' => 'Security Certifications', 'value' => 'SOC 2, ISO 27001', 'icon' => 'shield', 'color' => 'green'],
                        ['label' => 'Encryption Standard', 'value' => '256-bit AES, TLS 1.3', 'icon' => 'lock', 'color' => 'purple'],
                        ['label' => 'MFA Required', 'value' => 'Yes', 'icon' => 'fingerprint', 'color' => 'indigo'],
                        ['label' => 'Penetration Testing', 'value' => 'Quarterly', 'icon' => 'search', 'color' => 'amber'],
                        ['label' => 'Data Centers', 'value' => 'US, EU, APAC', 'icon' => 'globe', 'color' => 'teal']
                    ],
                    'sections' => [
                        ['id' => 'introduction', 'label' => 'Introduction', 'icon' => 'document'],
                        ['id' => 'security-governance', 'label' => 'Security Governance', 'icon' => 'office-building'],
                        ['id' => 'access-control', 'label' => 'Access Control', 'icon' => 'lock'],
                        ['id' => 'data-encryption', 'label' => 'Data Encryption', 'icon' => 'key'],
                        ['id' => 'network-security', 'label' => 'Network Security', 'icon' => 'server'],
                        ['id' => 'application-security', 'label' => 'Application Security', 'icon' => 'chip'],
                        ['id' => 'incident-response', 'label' => 'Incident Response', 'icon' => 'bell'],
                        ['id' => 'business-continuity', 'label' => 'Business Continuity', 'icon' => 'refresh'],
                        ['id' => 'third-party-security', 'label' => 'Third-Party Security', 'icon' => 'user-group'],
                        ['id' => 'compliance-audits', 'label' => 'Compliance & Audits', 'icon' => 'check'],
                        ['id' => 'security-training', 'label' => 'Security Training', 'icon' => 'user'],
                        ['id' => 'vulnerability-management', 'label' => 'Vulnerability Management', 'icon' => 'search'],
                        ['id' => 'physical-security', 'label' => 'Physical Security', 'icon' => 'building'],
                        ['id' => 'contact-us', 'label' => 'Contact Us', 'icon' => 'mail']
                    ],
                    'securityCertifications' => [
                        [
                            'name' => 'SOC 2 Type II',
                            'issuer' => 'AICPA',
                            'description' => 'Service Organization Control 2 certification for security, availability, processing integrity, confidentiality, and privacy.',
                            'validUntil' => 'December 2026'
                        ],
                        [
                            'name' => 'ISO 27001',
                            'issuer' => 'International Organization for Standardization',
                            'description' => 'Information Security Management System (ISMS) certification.',
                            'validUntil' => 'September 2026'
                        ],
                        [
                            'name' => 'ISO 27017',
                            'issuer' => 'International Organization for Standardization',
                            'description' => 'Code of practice for information security controls for cloud services.',
                            'validUntil' => 'September 2026'
                        ],
                        [
                            'name' => 'ISO 27018',
                            'issuer' => 'International Organization for Standardization',
                            'description' => 'Code of practice for protection of personally identifiable information (PII) in public clouds.',
                            'validUntil' => 'September 2026'
                        ]
                    ],
                    'thirdPartyAssessments' => [
                        [
                            'provider' => 'Ernst & Young',
                            'assessmentType' => 'SOC 2 Type II Audit',
                            'frequency' => 'Annual',
                            'lastPerformed' => 'March 2026'
                        ],
                        [
                            'provider' => 'Bishop Fox',
                            'assessmentType' => 'Penetration Testing',
                            'frequency' => 'Quarterly',
                            'lastPerformed' => 'February 2026'
                        ],
                        [
                            'provider' => 'TrustArc',
                            'assessmentType' => 'GDPR Compliance Assessment',
                            'frequency' => 'Annual',
                            'lastPerformed' => 'January 2026'
                        ],
                        [
                            'provider' => 'Internal Security Team',
                            'assessmentType' => 'Vulnerability Scanning',
                            'frequency' => 'Weekly',
                            'lastPerformed' => 'Ongoing'
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 694,
                'section_key' => 'securityPolicy',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => 'Security Policy',
                    'title' => [
                        'prefix' => 'Security',
                        'highlight' => 'Policy'
                    ],
                    'description' => 'At SupplyChainPro, security is our top priority. This policy outlines the technical and organizational measures we implement to protect your data.',
                    'lastUpdated' => 'April 8, 2026',
                    'company' => [
                        'name' => 'SupplyChainPro Inc.',
                        'address' => '123 Supply Chain Boulevard, Suite 400, San Francisco, CA 94105',
                        'email' => 'security@supplychainpro.com',
                        'phone' => '+1 (800) 555-0123',
                        'securityTeam' => 'security@supplychainpro.com',
                        'CISOName' => 'John Anderson'
                    ],
                    'quickFacts' => [
                        ['label' => 'Last Updated', 'value' => 'April 8, 2026', 'icon' => 'calendar', 'color' => 'cyan', 'trend' => 'Version 2.0'],
                        ['label' => 'Security Certifications', 'value' => 'SOC 2, ISO 27001', 'icon' => 'shield', 'color' => 'green', 'trend' => 'Annual audits'],
                        ['label' => 'Encryption Standard', 'value' => '256-bit AES, TLS 1.3', 'icon' => 'lock', 'color' => 'blue', 'trend' => 'At rest and in transit'],
                        ['label' => 'MFA Required', 'value' => 'Yes', 'icon' => 'fingerprint', 'color' => 'purple', 'trend' => 'For all users'],
                        ['label' => 'Penetration Testing', 'value' => 'Quarterly', 'icon' => 'search', 'color' => 'amber', 'trend' => 'Third-party'],
                        ['label' => 'Breach Notification', 'value' => '24 hours', 'icon' => 'bell', 'color' => 'red', 'trend' => 'Guaranteed SLA']
                    ],
                    'securityCertifications' => [
                        [
                            'name' => 'SOC 2 Type II',
                            'issuer' => 'AICPA',
                            'description' => 'Service Organization Control 2 certification for security, availability, processing integrity, confidentiality, and privacy.',
                            'validUntil' => 'December 2026',
                            'status' => 'Active',
                            'reportUrl' => '/security/soc2-report.pdf'
                        ],
                        [
                            'name' => 'ISO 27001',
                            'issuer' => 'International Organization for Standardization',
                            'description' => 'Information Security Management System (ISMS) certification.',
                            'validUntil' => 'September 2026',
                            'status' => 'Active',
                            'reportUrl' => '/security/iso27001-cert.pdf'
                        ],
                        [
                            'name' => 'ISO 27017',
                            'issuer' => 'International Organization for Standardization',
                            'description' => 'Code of practice for information security controls for cloud services.',
                            'validUntil' => 'September 2026',
                            'status' => 'Active',
                            'reportUrl' => '/security/iso27017-cert.pdf'
                        ],
                        [
                            'name' => 'ISO 27018',
                            'issuer' => 'International Organization for Standardization',
                            'description' => 'Code of practice for protection of personally identifiable information (PII) in public clouds.',
                            'validUntil' => 'September 2026',
                            'status' => 'Active',
                            'reportUrl' => '/security/iso27018-cert.pdf'
                        ],
                        [
                            'name' => 'PCI DSS Level 1',
                            'issuer' => 'PCI Security Standards Council',
                            'description' => 'Payment Card Industry Data Security Standard compliance for payment processing.',
                            'validUntil' => 'March 2027',
                            'status' => 'Active',
                            'reportUrl' => '/security/pci-dss.pdf'
                        ]
                    ],
                    'securityControls' => [
                        [
                            'domain' => 'Access Control',
                            'icon' => 'lock',
                            'metrics' => '99.9% MFA adoption',
                            'controls' => [
                                'Multi-factor authentication (MFA) for all users',
                                'Role-based access control (RBAC)',
                                'Principle of least privilege',
                                'Regular access reviews (quarterly)',
                                'Automated deprovisioning',
                                'Password complexity requirements (12+ characters)',
                                'Account lockout after 5 failed attempts'
                            ]
                        ],
                        [
                            'domain' => 'Data Protection',
                            'icon' => 'database',
                            'metrics' => '256-bit encryption',
                            'controls' => [
                                '256-bit AES encryption for data at rest',
                                'TLS 1.3 encryption for data in transit',
                                'Data pseudonymization where possible',
                                'Secure key management (90-day rotation)',
                                'Data loss prevention (DLP) controls',
                                'Secure backup with 30-day retention',
                                'Data minimization by design'
                            ]
                        ],
                        [
                            'domain' => 'Network Security',
                            'icon' => 'globe',
                            'metrics' => '24/7 monitoring',
                            'controls' => [
                                'Next-generation firewalls with IPS',
                                'DDoS protection and mitigation',
                                'Network segmentation',
                                'VPN required for remote access',
                                'Weekly vulnerability scanning',
                                'Quarterly penetration testing',
                                '24/7 Security Operations Center (SOC)'
                            ]
                        ],
                        [
                            'domain' => 'Application Security',
                            'icon' => 'chip',
                            'metrics' => 'Zero critical vulnerabilities',
                            'controls' => [
                                'Secure SDLC with security gates',
                                'Code review for all changes',
                                'Static Application Security Testing (SAST)',
                                'Dynamic Application Security Testing (DAST)',
                                'Software Composition Analysis (SCA)',
                                'Bug bounty program',
                                'Regular security training for developers'
                            ]
                        ],
                        [
                            'domain' => 'Incident Response',
                            'icon' => 'bell',
                            'metrics' => '24-hour notification',
                            'controls' => [
                                '24/7 security incident response team',
                                'Incident response plan (tested quarterly)',
                                'Breach notification within 24 hours',
                                'Forensic investigation capabilities',
                                'Customer notification procedures',
                                'Post-incident review and remediation'
                            ]
                        ],
                        [
                            'domain' => 'Physical Security',
                            'icon' => 'building',
                            'metrics' => 'Biometric access',
                            'controls' => [
                                '24/7 on-site security guards',
                                'Biometric access controls',
                                'CCTV surveillance (90-day retention)',
                                'Two-factor authentication for data center access',
                                'Visitor logging and escort requirements',
                                'Environmental controls (fire suppression, UPS)'
                            ]
                        ]
                    ],
                    'incidentResponseTimeline' => [
                        ['phase' => 'Detection', 'time' => 'Real-time', 'description' => 'Automated monitoring and alerting systems detect potential security events.'],
                        ['phase' => 'Analysis', 'time' => '< 15 minutes', 'description' => 'Security team triages and analyzes the event to determine severity.'],
                        ['phase' => 'Containment', 'time' => '< 1 hour', 'description' => 'Immediate actions taken to contain the incident and prevent spread.'],
                        ['phase' => 'Eradication', 'time' => '< 4 hours', 'description' => 'Root cause identified and threat completely removed from environment.'],
                        ['phase' => 'Recovery', 'time' => '< 8 hours', 'description' => 'Systems restored to normal operation from verified clean backups.'],
                        ['phase' => 'Notification', 'time' => '24 hours', 'description' => 'Affected customers notified with details and remediation plan.']
                    ],
                    'thirdPartyAssessments' => [
                        [
                            'provider' => 'Ernst & Young',
                            'assessmentType' => 'SOC 2 Type II Audit',
                            'frequency' => 'Annual',
                            'lastPerformed' => 'March 2026',
                            'nextScheduled' => 'March 2027',
                            'reportAvailable' => true
                        ],
                        [
                            'provider' => 'Bishop Fox',
                            'assessmentType' => 'Penetration Testing',
                            'frequency' => 'Quarterly',
                            'lastPerformed' => 'February 2026',
                            'nextScheduled' => 'May 2026',
                            'reportAvailable' => true
                        ],
                        [
                            'provider' => 'TrustArc',
                            'assessmentType' => 'GDPR Compliance Assessment',
                            'frequency' => 'Annual',
                            'lastPerformed' => 'January 2026',
                            'nextScheduled' => 'January 2027',
                            'reportAvailable' => true
                        ],
                        [
                            'provider' => 'Internal Security Team',
                            'assessmentType' => 'Vulnerability Scanning',
                            'frequency' => 'Weekly',
                            'lastPerformed' => 'Ongoing',
                            'nextScheduled' => 'Ongoing',
                            'reportAvailable' => false
                        ]
                    ],
                    'faqs' => [
                        ['question' => 'What security certifications does SupplyChainPro hold?', 'answer' => 'We maintain SOC 2 Type II, ISO 27001, ISO 27017, ISO 27018, and PCI DSS Level 1 certifications. These are audited annually by independent third-party firms.'],
                        ['question' => 'How is my data encrypted?', 'answer' => 'We use 256-bit AES encryption for data at rest and TLS 1.3 for data in transit. Encryption keys are managed securely and rotated every 90 days. Enterprise customers can use customer-managed keys (CMK).'],
                        ['question' => 'Do you perform penetration testing?', 'answer' => 'Yes, we conduct quarterly penetration tests by third-party security firms like Bishop Fox. We also perform weekly automated vulnerability scans and maintain a bug bounty program for responsible disclosure.'],
                        ['question' => 'How quickly do you notify customers of a breach?', 'answer' => 'We commit to notifying affected customers within 24 hours of confirming a personal data breach. Our incident response plan is tested quarterly to ensure we meet this SLA.'],
                        ['question' => 'Where can I access your security reports?', 'answer' => 'Security reports, including our SOC 2 Type II report and penetration test summaries, are available to customers under NDA. Please contact our security team at security@supplychainpro.com to request access.'],
                        ['question' => 'How do I report a security vulnerability?', 'answer' => 'Please report security vulnerabilities to security@supplychainpro.com. We will acknowledge receipt within 24 hours and provide regular updates on remediation progress. We have a bug bounty program for qualifying findings.']
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 695,
                'section_key' => 'securityPolicy',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => 'Security Policy',
                    'title' => [
                        'prefix' => 'Security',
                        'highlight' => 'Policy'
                    ],
                    'description' => 'At SupplyChainPro, security is our top priority. This policy outlines the technical and organizational measures we implement to protect your data.',
                    'lastUpdated' => 'April 8, 2026',
                    'autoPlayCarousel' => true,
                    'company' => [
                        'name' => 'SupplyChainPro Inc.',
                        'address' => '123 Supply Chain Boulevard, Suite 400, San Francisco, CA 94105',
                        'email' => 'security@supplychainpro.com',
                        'phone' => '+1 (800) 555-0123',
                        'securityTeam' => 'security@supplychainpro.com',
                        'cisoName' => 'John Anderson',
                        'cisoEmail' => 'ciso@supplychainpro.com'
                    ],
                    'quickFacts' => [
                        ['label' => 'Last Updated', 'value' => 'April 8, 2026', 'icon' => 'calendar', 'color' => 'cyan', 'trend' => 'Version 3.0'],
                        ['label' => 'Security Certifications', 'value' => 'SOC 2, ISO 27001', 'icon' => 'shield', 'color' => 'green', 'trend' => 'Annual audits'],
                        ['label' => 'Encryption Standard', 'value' => '256-bit AES, TLS 1.3', 'icon' => 'lock', 'color' => 'blue', 'trend' => 'At rest and in transit'],
                        ['label' => 'MFA Required', 'value' => 'Yes', 'icon' => 'fingerprint', 'color' => 'purple', 'trend' => 'For all users'],
                        ['label' => 'Penetration Testing', 'value' => 'Quarterly', 'icon' => 'search', 'color' => 'amber', 'trend' => 'Third-party'],
                        ['label' => 'Breach Notification', 'value' => '24 hours', 'icon' => 'bell', 'color' => 'red', 'trend' => 'Guaranteed SLA']
                    ],
                    'highlights' => [
                        ['title' => 'Defense in Depth', 'description' => 'Multiple layers of security controls protect your data at every level.', 'icon' => 'shield', 'color' => 'from-cyan-500 to-cyan-600', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'],
                        ['title' => 'Zero Trust Architecture', 'description' => 'Never trust, always verify. Every access request is fully authenticated and authorized.', 'icon' => 'lock', 'color' => 'from-blue-500 to-blue-600', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'],
                        ['title' => '24/7 Security Monitoring', 'description' => 'Our Security Operations Center monitors for threats around the clock.', 'icon' => 'eye', 'color' => 'from-purple-500 to-purple-600', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFunflies.mp4'],
                        ['title' => 'Encryption Everywhere', 'description' => '256-bit AES encryption at rest and TLS 1.3 in transit.', 'icon' => 'key', 'color' => 'from-green-500 to-green-600', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4'],
                        ['title' => 'Regular Penetration Testing', 'description' => 'Quarterly third-party penetration tests ensure our defenses remain strong.', 'icon' => 'search', 'color' => 'from-amber-500 to-amber-600', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4']
                    ],
                    'securityCertifications' => [
                        [
                            'name' => 'SOC 2 Type II',
                            'issuer' => 'AICPA',
                            'description' => 'Service Organization Control 2 certification for security, availability, processing integrity, confidentiality, and privacy.',
                            'validUntil' => 'December 2026',
                            'status' => 'Active',
                            'reportUrl' => '/security/soc2-report.pdf',
                            'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
                        ],
                        [
                            'name' => 'ISO 27001',
                            'issuer' => 'International Organization for Standardization',
                            'description' => 'Information Security Management System (ISMS) certification.',
                            'validUntil' => 'September 2026',
                            'status' => 'Active',
                            'reportUrl' => '/security/iso27001-cert.pdf',
                            'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'
                        ],
                        [
                            'name' => 'ISO 27017',
                            'issuer' => 'International Organization for Standardization',
                            'description' => 'Code of practice for information security controls for cloud services.',
                            'validUntil' => 'September 2026',
                            'status' => 'Active',
                            'reportUrl' => '/security/iso27017-cert.pdf'
                        ],
                        [
                            'name' => 'ISO 27018',
                            'issuer' => 'International Organization for Standardization',
                            'description' => 'Code of practice for protection of personally identifiable information (PII) in public clouds.',
                            'validUntil' => 'September 2026',
                            'status' => 'Active',
                            'reportUrl' => '/security/iso27018-cert.pdf'
                        ],
                        [
                            'name' => 'PCI DSS Level 1',
                            'issuer' => 'PCI Security Standards Council',
                            'description' => 'Payment Card Industry Data Security Standard compliance for payment processing.',
                            'validUntil' => 'March 2027',
                            'status' => 'Active',
                            'reportUrl' => '/security/pci-dss.pdf'
                        ]
                    ],
                    'securityControls' => [
                        [
                            'domain' => 'Access Control',
                            'icon' => 'lock',
                            'metrics' => '99.9% MFA adoption',
                            'controls' => [
                                'Multi-factor authentication (MFA) for all users',
                                'Role-based access control (RBAC)',
                                'Principle of least privilege',
                                'Regular access reviews (quarterly)',
                                'Automated deprovisioning',
                                'Password complexity requirements (12+ characters)',
                                'Account lockout after 5 failed attempts'
                            ],
                            'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
                        ],
                        [
                            'domain' => 'Data Protection',
                            'icon' => 'database',
                            'metrics' => '256-bit encryption',
                            'controls' => [
                                '256-bit AES encryption for data at rest',
                                'TLS 1.3 encryption for data in transit',
                                'Data pseudonymization where possible',
                                'Secure key management (90-day rotation)',
                                'Data loss prevention (DLP) controls',
                                'Secure backup with 30-day retention',
                                'Data minimization by design'
                            ],
                            'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'
                        ],
                        [
                            'domain' => 'Network Security',
                            'icon' => 'globe',
                            'metrics' => '24/7 monitoring',
                            'controls' => [
                                'Next-generation firewalls with IPS',
                                'DDoS protection and mitigation',
                                'Network segmentation',
                                'VPN required for remote access',
                                'Weekly vulnerability scanning',
                                'Quarterly penetration testing',
                                '24/7 Security Operations Center (SOC)'
                            ],
                            'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFunflies.mp4'
                        ],
                        [
                            'domain' => 'Application Security',
                            'icon' => 'chip',
                            'metrics' => 'Zero critical vulnerabilities',
                            'controls' => [
                                'Secure SDLC with security gates',
                                'Code review for all changes',
                                'Static Application Security Testing (SAST)',
                                'Dynamic Application Security Testing (DAST)',
                                'Software Composition Analysis (SCA)',
                                'Bug bounty program',
                                'Regular security training for developers'
                            ],
                            'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4'
                        ],
                        [
                            'domain' => 'Incident Response',
                            'icon' => 'bell',
                            'metrics' => '24-hour notification',
                            'controls' => [
                                '24/7 security incident response team',
                                'Incident response plan (tested quarterly)',
                                'Breach notification within 24 hours',
                                'Forensic investigation capabilities',
                                'Customer notification procedures',
                                'Post-incident review and remediation'
                            ],
                            'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
                        ],
                        [
                            'domain' => 'Physical Security',
                            'icon' => 'building',
                            'metrics' => 'Biometric access',
                            'controls' => [
                                '24/7 on-site security guards',
                                'Biometric access controls',
                                'CCTV surveillance (90-day retention)',
                                'Two-factor authentication for data center access',
                                'Visitor logging and escort requirements',
                                'Environmental controls (fire suppression, UPS)'
                            ],
                            'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'
                        ]
                    ],
                    'testimonials' => [
                        ['name' => 'Sarah Johnson', 'role' => 'Supply Chain Director', 'company' => 'Global Retail Corp', 'quote' => 'SupplyChainPro\'s security posture gave our compliance team full confidence. The SOC 2 Type II report was thorough.', 'rating' => 5],
                        ['name' => 'Michael Chen', 'role' => 'Operations Manager', 'quote' => 'The transparency around their security controls and regular penetration testing meets our strict requirements.', 'rating' => 5],
                        ['name' => 'Emily Rodriguez', 'role' => 'Legal Counsel', 'quote' => 'As a legal professional handling sensitive data, I\'m impressed with their comprehensive security framework.', 'rating' => 5]
                    ],
                    'faqs' => [
                        ['question' => 'What security certifications does SupplyChainPro hold?', 'answer' => 'We maintain SOC 2 Type II, ISO 27001, ISO 27017, ISO 27018, and PCI DSS Level 1 certifications. These are audited annually by independent third-party firms like Ernst & Young.', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'],
                        ['question' => 'How is my data encrypted?', 'answer' => 'We use 256-bit AES encryption for data at rest and TLS 1.3 for data in transit. Encryption keys are managed securely and rotated every 90 days. Enterprise customers can use customer-managed keys (CMK).', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'],
                        ['question' => 'Do you perform penetration testing?', 'answer' => 'Yes, we conduct quarterly penetration tests by third-party security firms like Bishop Fox. We also perform weekly automated vulnerability scans and maintain a bug bounty program for responsible disclosure.', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFunflies.mp4'],
                        ['question' => 'How quickly do you notify customers of a breach?', 'answer' => 'We commit to notifying affected customers within 24 hours of confirming a personal data breach. Our incident response plan is tested quarterly to ensure we meet this SLA.', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4'],
                        ['question' => 'Where can I access your security reports?', 'answer' => 'Security reports, including our SOC 2 Type II report and penetration test summaries, are available to customers under NDA. Please use the Request Reports tab or contact our security team.', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'],
                        ['question' => 'How do I report a security vulnerability?', 'answer' => 'Please report security vulnerabilities to security@supplychainpro.com. We will acknowledge receipt within 24 hours and provide regular updates on remediation progress. We have a bug bounty program for qualifying findings.', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4']
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 696,
                'section_key' => 'securityPolicy',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Acceptable Use Policy Variants
            [
                'id' => 697,
                'section_key' => 'acceptableUsePolicy',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => 'Acceptable Use Policy',
                    'title' => [
                        'prefix' => 'Acceptable',
                        'highlight' => 'Use Policy'
                    ],
                    'description' => 'This Acceptable Use Policy (AUP) outlines the rules and guidelines for using SupplyChainPro\'s Services. By using our Services, you agree to comply with this policy.',
                    'lastUpdated' => 'April 8, 2026',
                    'company' => [
                        'name' => 'SupplyChainPro Inc.',
                        'address' => '123 Supply Chain Boulevard, Suite 400, San Francisco, CA 94105',
                        'email' => 'abuse@supplychainpro.com',
                        'phone' => '+1 (800) 555-0123'
                    ],
                    'quickFacts' => [
                        ['label' => 'Last Updated', 'value' => 'April 8, 2026', 'icon' => 'calendar'],
                        ['label' => 'Prohibited Activities', 'value' => '15+', 'icon' => 'ban'],
                        ['label' => 'Content Standards', 'value' => 'Strict', 'icon' => 'document'],
                        ['label' => 'Report Response', 'value' => '24 hours', 'icon' => 'clock']
                    ],
                    'acceptableUse' => [
                        'Use the Services for legitimate supply chain management purposes',
                        'Provide accurate and complete information when creating accounts',
                        'Maintain the security and confidentiality of your account credentials',
                        'Use the Services in compliance with all applicable laws and regulations',
                        'Respect the intellectual property rights of SupplyChainPro and third parties',
                        'Use the Services in a manner that does not disrupt or interfere with other users',
                        'Report any security vulnerabilities or suspected abuse to our abuse team'
                    ],
                    'prohibitedActivities' => [
                        [
                            'category' => 'Illegal Activities',
                            'icon' => 'scale',
                            'activities' => [
                                'Violating any applicable laws, regulations, or third-party rights',
                                'Engaging in fraudulent, deceptive, or misleading activities',
                                'Processing illegal or prohibited goods or services',
                                'Money laundering or terrorist financing',
                                'Export control violations'
                            ]
                        ],
                        [
                            'category' => 'System Abuse',
                            'icon' => 'shield',
                            'activities' => [
                                'Attempting to gain unauthorized access to our systems',
                                'Distributing malware, viruses, or other harmful code',
                                'Launching denial-of-service (DoS) attacks',
                                'Scanning or probing system vulnerabilities',
                                'Bypassing security measures or access controls'
                            ]
                        ],
                        [
                            'category' => 'Content Violations',
                            'icon' => 'document',
                            'activities' => [
                                'Uploading illegal, obscene, or defamatory content',
                                'Sharing infringing or unauthorized copyrighted material',
                                'Posting hate speech or discriminatory content',
                                'Harassing, threatening, or abusing others',
                                'Impersonating any person or entity'
                            ]
                        ],
                        [
                            'category' => 'Resource Misuse',
                            'icon' => 'database',
                            'activities' => [
                                'Exceeding reasonable API rate limits',
                                'Using the Services for cryptocurrency mining',
                                'Engaging in web scraping without authorization',
                                'Storing excessive amounts of non-business data',
                                'Using the Services for competitive analysis'
                            ]
                        ],
                        [
                            'category' => 'Data Misuse',
                            'icon' => 'database',
                            'activities' => [
                                'Accessing data without proper authorization',
                                'Sharing account credentials with unauthorized parties',
                                'Exporting data in violation of export controls',
                                'Processing sensitive data without proper safeguards',
                                'Using data for purposes not authorized by the data owner'
                            ]
                        ],
                        [
                            'category' => 'Interference',
                            'icon' => 'globe',
                            'activities' => [
                                'Interfering with other users\' use of the Services',
                                'Disrupting or impairing Service functionality',
                                'Circumventing usage limits or restrictions',
                                'Reselling or redistributing Services without authorization',
                                'Creating multiple accounts to bypass restrictions'
                            ]
                        ]
                    ],
                    'contentStandards' => [
                        'Content must be accurate, truthful, and not misleading',
                        'Content must comply with all applicable laws and regulations',
                        'Content must not infringe on any third-party rights',
                        'Content must not contain malware, viruses, or harmful code',
                        'Content must not be defamatory, obscene, or offensive',
                        'Content must not promote violence, discrimination, or illegal activities',
                        'Content must respect the privacy and confidentiality of others'
                    ],
                    'enforcementActions' => [
                        ['level' => 'Warning', 'description' => 'Written notice of violation with request for corrective action', 'timeframe' => 'Immediate'],
                        ['level' => 'Temporary Suspension', 'description' => 'Limited access to certain features pending investigation', 'timeframe' => '24-72 hours'],
                        ['level' => 'Full Suspension', 'description' => 'Complete account suspension pending resolution', 'timeframe' => 'Within 24 hours'],
                        ['level' => 'Termination', 'description' => 'Permanent account termination for severe or repeated violations', 'timeframe' => 'Immediate'],
                        ['level' => 'Legal Action', 'description' => 'Referral to law enforcement for criminal violations', 'timeframe' => 'As appropriate']
                    ],
                    'sections' => [
                        ['id' => 'introduction', 'label' => 'Introduction', 'icon' => 'document'],
                        ['id' => 'purpose-scope', 'label' => 'Purpose & Scope', 'icon' => 'globe'],
                        ['id' => 'acceptable-use', 'label' => 'Acceptable Use', 'icon' => 'check'],
                        ['id' => 'prohibited-activities', 'label' => 'Prohibited Activities', 'icon' => 'ban'],
                        ['id' => 'content-standards', 'label' => 'Content Standards', 'icon' => 'document'],
                        ['id' => 'system-security', 'label' => 'System Security', 'icon' => 'shield'],
                        ['id' => 'data-protection', 'label' => 'Data Protection', 'icon' => 'database'],
                        ['id' => 'intellectual-property', 'label' => 'Intellectual Property', 'icon' => 'scale'],
                        ['id' => 'reporting-violations', 'label' => 'Reporting Violations', 'icon' => 'flag'],
                        ['id' => 'enforcement', 'label' => 'Enforcement', 'icon' => 'exclamation'],
                        ['id' => 'consequences', 'label' => 'Consequences of Violation', 'icon' => 'x'],
                        ['id' => 'policy-updates', 'label' => 'Policy Updates', 'icon' => 'clock'],
                        ['id' => 'contact-us', 'label' => 'Contact Us', 'icon' => 'mail']
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 698,
                'section_key' => 'acceptableUsePolicy',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => 'Acceptable Use Policy',
                    'title' => [
                        'prefix' => 'Acceptable',
                        'highlight' => 'Use Policy'
                    ],
                    'description' => 'This Acceptable Use Policy (AUP) outlines the rules and guidelines for using SupplyChainPro\'s Services. By using our Services, you agree to comply with this policy.',
                    'lastUpdated' => 'April 8, 2026',
                    'quickFacts' => [
                        ['label' => 'Last Updated', 'value' => 'April 8, 2026', 'icon' => 'calendar', 'color' => 'red', 'trend' => 'Version 2.0'],
                        ['label' => 'Prohibited Categories', 'value' => '6', 'icon' => 'ban', 'color' => 'orange', 'trend' => '15+ activities'],
                        ['label' => 'Content Standards', 'value' => '7', 'icon' => 'document', 'color' => 'blue', 'trend' => 'Strict enforcement'],
                        ['label' => 'Report Response', 'value' => '24 hours', 'icon' => 'clock', 'color' => 'green', 'trend' => 'SLA guaranteed'],
                        ['label' => 'Enforcement Levels', 'value' => '5', 'icon' => 'exclamation', 'color' => 'purple', 'trend' => 'Escalating'],
                        ['label' => 'User Violations', 'value' => '0.01%', 'icon' => 'shield', 'color' => 'teal', 'trend' => 'Low violation rate']
                    ],
                    'acceptableUse' => [
                        'Use the Services for legitimate supply chain management purposes',
                        'Provide accurate and complete information when creating accounts',
                        'Maintain the security and confidentiality of your account credentials',
                        'Use the Services in compliance with all applicable laws and regulations',
                        'Respect the intellectual property rights of SupplyChainPro and third parties',
                        'Use the Services in a manner that does not disrupt or interfere with other users',
                        'Report any security vulnerabilities or suspected abuse to our abuse team',
                        'Cooperate with our investigation of any suspected violation'
                    ],
                    'prohibitedCategories' => [
                        [
                            'id' => 'illegal',
                            'category' => 'Illegal Activities',
                            'icon' => 'scale',
                            'color' => 'from-red-500 to-red-600',
                            'bgColor' => 'bg-red-50 dark:bg-red-900/20',
                            'activities' => [
                                'Violating any applicable laws, regulations, or third-party rights',
                                'Engaging in fraudulent, deceptive, or misleading activities',
                                'Processing illegal or prohibited goods or services',
                                'Money laundering or terrorist financing',
                                'Export control violations',
                                'Tax evasion or fraud'
                            ],
                            'severity' => 'Critical'
                        ],
                        [
                            'id' => 'security',
                            'category' => 'System Abuse',
                            'icon' => 'shield',
                            'color' => 'from-orange-500 to-orange-600',
                            'bgColor' => 'bg-orange-50 dark:bg-orange-900/20',
                            'activities' => [
                                'Attempting to gain unauthorized access to our systems',
                                'Distributing malware, viruses, or other harmful code',
                                'Launching denial-of-service (DoS) attacks',
                                'Scanning or probing system vulnerabilities',
                                'Bypassing security measures or access controls',
                                'Reverse engineering our software'
                            ],
                            'severity' => 'Critical'
                        ],
                        [
                            'id' => 'content',
                            'category' => 'Content Violations',
                            'icon' => 'document',
                            'color' => 'from-amber-500 to-amber-600',
                            'bgColor' => 'bg-amber-50 dark:bg-amber-900/20',
                            'activities' => [
                                'Uploading illegal, obscene, or defamatory content',
                                'Sharing infringing or unauthorized copyrighted material',
                                'Posting hate speech or discriminatory content',
                                'Harassing, threatening, or abusing others',
                                'Impersonating any person or entity',
                                'Posting misleading or false information'
                            ],
                            'severity' => 'High'
                        ],
                        [
                            'id' => 'resources',
                            'category' => 'Resource Misuse',
                            'icon' => 'database',
                            'color' => 'from-green-500 to-green-600',
                            'bgColor' => 'bg-green-50 dark:bg-green-900/20',
                            'activities' => [
                                'Exceeding reasonable API rate limits',
                                'Using the Services for cryptocurrency mining',
                                'Engaging in web scraping without authorization',
                                'Storing excessive amounts of non-business data',
                                'Using the Services for competitive analysis',
                                'Automated account creation'
                            ],
                            'severity' => 'Medium'
                        ],
                        [
                            'id' => 'data',
                            'category' => 'Data Misuse',
                            'icon' => 'database',
                            'color' => 'from-blue-500 to-blue-600',
                            'bgColor' => 'bg-blue-50 dark:bg-blue-900/20',
                            'activities' => [
                                'Accessing data without proper authorization',
                                'Sharing account credentials with unauthorized parties',
                                'Exporting data in violation of export controls',
                                'Processing sensitive data without proper safeguards',
                                'Using data for purposes not authorized by the data owner',
                                'Selling or renting access to your account'
                            ],
                            'severity' => 'High'
                        ],
                        [
                            'id' => 'interference',
                            'category' => 'Service Interference',
                            'icon' => 'globe',
                            'color' => 'from-purple-500 to-purple-600',
                            'bgColor' => 'bg-purple-50 dark:bg-purple-900/20',
                            'activities' => [
                                'Interfering with other users\' use of the Services',
                                'Disrupting or impairing Service functionality',
                                'Circumventing usage limits or restrictions',
                                'Reselling or redistributing Services without authorization',
                                'Creating multiple accounts to bypass restrictions',
                                'Using automated means to access Services'
                            ],
                            'severity' => 'Medium'
                        ]
                    ],
                    'enforcementActions' => [
                        ['level' => 'Warning', 'description' => 'Written notice of violation with request for corrective action', 'timeframe' => 'Immediate', 'icon' => 'warning', 'color' => 'from-yellow-500 to-yellow-600'],
                        ['level' => 'Temporary Suspension', 'description' => 'Limited access to certain features pending investigation', 'timeframe' => '24-72 hours', 'icon' => 'clock', 'color' => 'from-orange-500 to-orange-600'],
                        ['level' => 'Full Suspension', 'description' => 'Complete account suspension pending resolution', 'timeframe' => 'Within 24 hours', 'icon' => 'x', 'color' => 'from-red-500 to-red-600'],
                        ['level' => 'Termination', 'description' => 'Permanent account termination for severe or repeated violations', 'timeframe' => 'Immediate', 'icon' => 'ban', 'color' => 'from-red-700 to-red-800'],
                        ['level' => 'Legal Action', 'description' => 'Referral to law enforcement for criminal violations', 'timeframe' => 'As appropriate', 'icon' => 'scale', 'color' => 'from-purple-500 to-purple-600']
                    ],
                    'faqs' => [
                        ['question' => 'What happens if I accidentally violate the AUP?', 'answer' => 'We understand that mistakes can happen. If you accidentally violate the AUP, please contact us immediately at abuse@supplychainpro.com. We will work with you to resolve the issue and may issue a warning instead of suspension for first-time, non-malicious violations.'],
                        ['question' => 'Can I appeal an enforcement action?', 'answer' => 'Yes, you can appeal enforcement actions by contacting our abuse team at abuse@supplychainpro.com. Please provide your account information, details of the action taken, and your explanation. We will review all appeals within 5 business days.'],
                        ['question' => 'How do I report someone else violating the AUP?', 'answer' => 'Use the Report Violation tab on this page or email abuse@supplychainpro.com with details including the violator\'s username, description of the violation, timestamps, and any supporting evidence (screenshots, logs).'],
                        ['question' => 'What is considered excessive API usage?', 'answer' => 'Excessive API usage is defined as exceeding the documented rate limits for your subscription plan. Rate limits are designed to ensure fair usage across all customers. Please refer to our API documentation for specific limits.'],
                        ['question' => 'Can I use SupplyChainPro for competitive analysis?', 'answer' => 'No, using our Services for competitive analysis, benchmarking, or building competing products is strictly prohibited. This includes scraping data, reverse engineering, or using our APIs for competitive intelligence.'],
                        ['question' => 'What types of content are prohibited?', 'answer' => 'Prohibited content includes illegal material, obscene or pornographic content, defamatory statements, hate speech, harassing content, infringing copyrighted material, and misleading or fraudulent information.']
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 699,
                'section_key' => 'acceptableUsePolicy',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => 'Acceptable Use Policy',
                    'title' => [
                        'prefix' => 'Acceptable',
                        'highlight' => 'Use Policy'
                    ],
                    'description' => 'This Acceptable Use Policy (AUP) outlines the rules and guidelines for using SupplyChainPro\'s Services. By using our Services, you agree to comply with this policy.',
                    'lastUpdated' => 'April 8, 2026',
                    'autoPlayCarousel' => true,
                    'quickFacts' => [
                        ['label' => 'Last Updated', 'value' => 'April 8, 2026', 'icon' => 'calendar', 'color' => 'red', 'trend' => 'Version 3.0'],
                        ['label' => 'Prohibited Categories', 'value' => '6', 'icon' => 'ban', 'color' => 'orange', 'trend' => '15+ activities'],
                        ['label' => 'Content Standards', 'value' => '7', 'icon' => 'document', 'color' => 'blue', 'trend' => 'Strict enforcement'],
                        ['label' => 'Report Response', 'value' => '24 hours', 'icon' => 'clock', 'color' => 'green', 'trend' => 'SLA guaranteed'],
                        ['label' => 'Enforcement Levels', 'value' => '5', 'icon' => 'exclamation', 'color' => 'purple', 'trend' => 'Escalating'],
                        ['label' => 'User Satisfaction', 'value' => '98%', 'icon' => 'star', 'color' => 'yellow', 'trend' => 'Policy clarity']
                    ],
                    'highlights' => [
                        ['title' => 'Fair Use for All', 'description' => 'Our AUP ensures a safe, secure, and reliable environment for every user.', 'icon' => 'shield', 'color' => 'from-red-500 to-red-600', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'],
                        ['title' => 'Zero Tolerance for Abuse', 'description' => 'System abuse, hacking attempts, and malicious activities are strictly prohibited.', 'icon' => 'ban', 'color' => 'from-orange-500 to-orange-600', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'],
                        ['title' => 'Protect Your Data', 'description' => 'Unauthorized data access and sharing credentials violates our policy.', 'icon' => 'database', 'color' => 'from-blue-500 to-blue-600', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFunflies.mp4'],
                        ['title' => 'Report Violations', 'description' => 'Help us maintain a safe community by reporting AUP violations.', 'icon' => 'flag', 'color' => 'from-green-500 to-green-600', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4'],
                        ['title' => 'Enforcement Actions', 'description' => 'Violations result in warnings, suspension, termination, or legal action.', 'icon' => 'exclamation', 'color' => 'from-purple-500 to-purple-600', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4']
                    ],
                    'acceptableUse' => [
                        'Use the Services for legitimate supply chain management purposes',
                        'Provide accurate and complete information when creating accounts',
                        'Maintain the security and confidentiality of your account credentials',
                        'Use the Services in compliance with all applicable laws and regulations',
                        'Respect the intellectual property rights of SupplyChainPro and third parties',
                        'Use the Services in a manner that does not disrupt or interfere with other users',
                        'Report any security vulnerabilities or suspected abuse to our abuse team',
                        'Cooperate with our investigation of any suspected violation'
                    ],
                    'testimonials' => [
                        ['name' => 'Sarah Johnson', 'role' => 'Supply Chain Director', 'company' => 'Global Retail Corp', 'quote' => 'The clear AUP guidelines help our team understand what\'s expected. The reporting process is straightforward.', 'rating' => 5],
                        ['name' => 'Michael Chen', 'role' => 'Operations Manager', 'quote' => 'I appreciate the transparency around prohibited activities. The enforcement escalation is fair and clear.', 'rating' => 5],
                        ['name' => 'Emily Rodriguez', 'role' => 'Legal Counsel', 'quote' => 'As a legal professional, I find this AUP comprehensive and well-structured. It protects both parties effectively.', 'rating' => 5]
                    ],
                    'prohibitedCategories' => [
                        [
                            'id' => 'illegal',
                            'category' => 'Illegal Activities',
                            'icon' => 'scale',
                            'color' => 'from-red-500 to-red-600',
                            'bgColor' => 'bg-red-50 dark:bg-red-900/20',
                            'activities' => [
                                'Violating any applicable laws, regulations, or third-party rights',
                                'Engaging in fraudulent, deceptive, or misleading activities',
                                'Processing illegal or prohibited goods or services',
                                'Money laundering or terrorist financing',
                                'Export control violations',
                                'Tax evasion or fraud'
                            ],
                            'severity' => 'Critical',
                            'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
                        ],
                        [
                            'id' => 'security',
                            'category' => 'System Abuse',
                            'icon' => 'shield',
                            'color' => 'from-orange-500 to-orange-600',
                            'bgColor' => 'bg-orange-50 dark:bg-orange-900/20',
                            'activities' => [
                                'Attempting to gain unauthorized access to our systems',
                                'Distributing malware, viruses, or other harmful code',
                                'Launching denial-of-service (DoS) attacks',
                                'Scanning or probing system vulnerabilities',
                                'Bypassing security measures or access controls',
                                'Reverse engineering our software'
                            ],
                            'severity' => 'Critical',
                            'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'
                        ],
                        [
                            'id' => 'content',
                            'category' => 'Content Violations',
                            'icon' => 'document',
                            'color' => 'from-amber-500 to-amber-600',
                            'bgColor' => 'bg-amber-50 dark:bg-amber-900/20',
                            'activities' => [
                                'Uploading illegal, obscene, or defamatory content',
                                'Sharing infringing or unauthorized copyrighted material',
                                'Posting hate speech or discriminatory content',
                                'Harassing, threatening, or abusing others',
                                'Impersonating any person or entity',
                                'Posting misleading or false information'
                            ],
                            'severity' => 'High',
                            'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFunflies.mp4'
                        ],
                        [
                            'id' => 'resources',
                            'category' => 'Resource Misuse',
                            'icon' => 'database',
                            'color' => 'from-green-500 to-green-600',
                            'bgColor' => 'bg-green-50 dark:bg-green-900/20',
                            'activities' => [
                                'Exceeding reasonable API rate limits',
                                'Using the Services for cryptocurrency mining',
                                'Engaging in web scraping without authorization',
                                'Storing excessive amounts of non-business data',
                                'Using the Services for competitive analysis',
                                'Automated account creation'
                            ],
                            'severity' => 'Medium',
                            'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4'
                        ],
                        [
                            'id' => 'data',
                            'category' => 'Data Misuse',
                            'icon' => 'database',
                            'color' => 'from-blue-500 to-blue-600',
                            'bgColor' => 'bg-blue-50 dark:bg-blue-900/20',
                            'activities' => [
                                'Accessing data without proper authorization',
                                'Sharing account credentials with unauthorized parties',
                                'Exporting data in violation of export controls',
                                'Processing sensitive data without proper safeguards',
                                'Using data for purposes not authorized by the data owner',
                                'Selling or renting access to your account'
                            ],
                            'severity' => 'High',
                            'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
                        ],
                        [
                            'id' => 'interference',
                            'category' => 'Service Interference',
                            'icon' => 'globe',
                            'color' => 'from-purple-500 to-purple-600',
                            'bgColor' => 'bg-purple-50 dark:bg-purple-900/20',
                            'activities' => [
                                'Interfering with other users\' use of the Services',
                                'Disrupting or impairing Service functionality',
                                'Circumventing usage limits or restrictions',
                                'Reselling or redistributing Services without authorization',
                                'Creating multiple accounts to bypass restrictions',
                                'Using automated means to access Services'
                            ],
                            'severity' => 'Medium',
                            'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'
                        ]
                    ],
                    'enforcementActions' => [
                        ['level' => 'Warning', 'description' => 'Written notice of violation with request for corrective action', 'timeframe' => 'Immediate', 'icon' => 'warning', 'color' => 'from-yellow-500 to-yellow-600'],
                        ['level' => 'Temporary Suspension', 'description' => 'Limited access to certain features pending investigation', 'timeframe' => '24-72 hours', 'icon' => 'clock', 'color' => 'from-orange-500 to-orange-600'],
                        ['level' => 'Full Suspension', 'description' => 'Complete account suspension pending resolution', 'timeframe' => 'Within 24 hours', 'icon' => 'x', 'color' => 'from-red-500 to-red-600'],
                        ['level' => 'Termination', 'description' => 'Permanent account termination for severe or repeated violations', 'timeframe' => 'Immediate', 'icon' => 'ban', 'color' => 'from-red-700 to-red-800'],
                        ['level' => 'Legal Action', 'description' => 'Referral to law enforcement for criminal violations', 'timeframe' => 'As appropriate', 'icon' => 'scale', 'color' => 'from-purple-500 to-purple-600']
                    ],
                    'faqs' => [
                        ['question' => 'What happens if I accidentally violate the AUP?', 'answer' => 'We understand that mistakes can happen. If you accidentally violate the AUP, please contact us immediately at abuse@supplychainpro.com. We will work with you to resolve the issue and may issue a warning instead of suspension for first-time, non-malicious violations.', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'],
                        ['question' => 'Can I appeal an enforcement action?', 'answer' => 'Yes, you can appeal enforcement actions by contacting our abuse team at abuse@supplychainpro.com. Please provide your account information, details of the action taken, and your explanation. We will review all appeals within 5 business days.', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'],
                        ['question' => 'How do I report someone else violating the AUP?', 'answer' => 'Use the Report Violation tab on this page or email abuse@supplychainpro.com with details including the violator\'s username, description of the violation, timestamps, and any supporting evidence (screenshots, logs).', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFunflies.mp4'],
                        ['question' => 'What is considered excessive API usage?', 'answer' => 'Excessive API usage is defined as exceeding the documented rate limits for your subscription plan. Rate limits are designed to ensure fair usage across all customers. Please refer to our API documentation for specific limits.', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4'],
                        ['question' => 'Can I use SupplyChainPro for competitive analysis?', 'answer' => 'No, using our Services for competitive analysis, benchmarking, or building competing products is strictly prohibited. This includes scraping data, reverse engineering, or using our APIs for competitive intelligence.', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'],
                        ['question' => 'What types of content are prohibited?', 'answer' => 'Prohibited content includes illegal material, obscene or pornographic content, defamatory statements, hate speech, harassing content, infringing copyrighted material, and misleading or fraudulent information.', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4']
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 700,
                'section_key' => 'acceptableUsePolicy',
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
