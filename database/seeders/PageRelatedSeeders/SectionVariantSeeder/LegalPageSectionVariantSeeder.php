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

        ];

        // Add the new Services variants
        DB::table('section_variants')->upsert(
            $variants,
            ['section_key', 'variant'],
            ['config', 'updated_at']
        );
    }
}
