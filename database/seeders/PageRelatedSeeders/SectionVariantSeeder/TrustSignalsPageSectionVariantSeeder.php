<?php

namespace Database\Seeders\PageRelatedSeeders\SectionVariantSeeder;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TrustSignalsPageSectionVariantSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        // Upsert only this page's variants so other page seeders do not get wiped out.
        $variants = [

            // Security Certifications Section
            [
                'id' => 529,
                'section_key' => 'securityCertifications',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => 'Security & Compliance',
                    'title' => [
                        'prefix' => 'Enterprise-Grade',
                        'highlight' => 'Security',
                        'suffix' => 'Certifications'
                    ],
                    'description' => 'We\'re committed to the highest standards of security and compliance. Our certifications demonstrate our dedication to protecting your data and meeting global regulatory requirements.',
                    'heroImage' => 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=500&fit=crop',
                    'stats' => [
                        ['value' => '99.99%', 'label' => 'Uptime SLA', 'icon' => 'bolt'],
                        ['value' => '24/7', 'label' => 'Security Monitoring', 'icon' => 'eye'],
                        ['value' => '256-bit', 'label' => 'Encryption', 'icon' => 'lock'],
                        ['value' => '100+', 'label' => 'Security Audits', 'icon' => 'check']
                    ],
                    'certifications' => [
                        [
                            'id' => 'soc2',
                            'name' => 'SOC 2 Type II',
                            'issuer' => 'AICPA',
                            'description' => 'SOC 2 Type II certification demonstrates our commitment to security, availability, processing integrity, confidentiality, and privacy. This audit validates our controls over a period of time, not just a point in time.',
                            'scope' => 'All core services, infrastructure, and supporting systems',
                            'validity' => 'Annual audit',
                            'standard' => 'Trust Services Criteria',
                            'features' => [
                                'Security controls validated quarterly',
                                'Availability monitoring and incident response',
                                'Confidentiality and privacy protections',
                                'Processing integrity verification'
                            ],
                            'icon' => 'shield',
                            'color' => 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
                            'gradient' => 'from-blue-500 to-blue-600',
                            'image' => 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'iso27001',
                            'name' => 'ISO 27001:2022',
                            'issuer' => 'International Organization for Standardization',
                            'description' => 'ISO 27001 is the international standard for information security management systems (ISMS). This certification validates our systematic approach to managing sensitive company and customer information.',
                            'scope' => 'Global operations, all products and services',
                            'validity' => '3 years with annual surveillance audits',
                            'standard' => 'ISO/IEC 27001:2022',
                            'features' => [
                                'Information security management system',
                                'Risk assessment and treatment',
                                'Continuous improvement framework',
                                'Security policy and controls'
                            ],
                            'icon' => 'certificate',
                            'color' => 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
                            'gradient' => 'from-emerald-500 to-emerald-600',
                            'image' => 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'gdpr',
                            'name' => 'GDPR Compliant',
                            'issuer' => 'European Union',
                            'description' => 'We maintain full compliance with the General Data Protection Regulation (GDPR), ensuring that personal data of EU citizens is processed lawfully, transparently, and with appropriate security measures.',
                            'scope' => 'All EU customer data processing',
                            'validity' => 'Ongoing compliance',
                            'standard' => 'Regulation (EU) 2016/679',
                            'features' => [
                                'Data protection by design and default',
                                'Right to access and erasure',
                                'Data processing agreements',
                                'Breach notification procedures'
                            ],
                            'icon' => 'globe',
                            'color' => 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
                            'gradient' => 'from-purple-500 to-purple-600',
                            'image' => 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'hipaa',
                            'name' => 'HIPAA Ready',
                            'issuer' => 'U.S. Department of Health and Human Services',
                            'description' => 'Our platform is built to support HIPAA compliance for healthcare organizations handling protected health information (PHI). We provide the necessary controls and agreements for covered entities and business associates.',
                            'scope' => 'Healthcare customer deployments',
                            'validity' => 'Ongoing compliance',
                            'standard' => 'HIPAA Security Rule',
                            'features' => [
                                'Business Associate Agreements',
                                'Administrative safeguards',
                                'Physical and technical safeguards',
                                'Audit controls and integrity'
                            ],
                            'icon' => 'shield',
                            'color' => 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400',
                            'gradient' => 'from-rose-500 to-rose-600',
                            'image' => 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop'
                        ]
                    ],
                    'frameworks' => [
                        ['name' => 'NIST Cybersecurity Framework', 'icon' => 'shield'],
                        ['name' => 'CSA STAR', 'icon' => 'cloud'],
                        ['name' => 'PCI DSS Level 1', 'icon' => 'credit'],
                        ['name' => 'FedRAMP Ready', 'icon' => 'flag']
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 530,
                'section_key' => 'securityCertifications',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => 'Security & Compliance',
                    'title' => [
                        'prefix' => 'Enterprise-Grade',
                        'highlight' => 'Security',
                        'suffix' => 'Certifications'
                    ],
                    'description' => 'We\'re committed to the highest standards of security and compliance. Our certifications demonstrate our dedication to protecting your data and meeting global regulatory requirements.',
                    'heroImage' => 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=500&fit=crop',
                    'stats' => [
                        ['value' => '99.99%', 'label' => 'Uptime SLA', 'icon' => 'bolt', 'trend' => '99.99%', 'trendUp' => true],
                        ['value' => '24/7', 'label' => 'Security Monitoring', 'icon' => 'eye', 'trend' => '24/7', 'trendUp' => true],
                        ['value' => '256-bit', 'label' => 'Encryption', 'icon' => 'lock', 'trend' => 'AES-256', 'trendUp' => true],
                        ['value' => '100+', 'label' => 'Security Audits', 'icon' => 'check', 'trend' => '+25', 'trendUp' => true]
                    ],
                    'certifications' => [
                        [
                            'id' => 'soc2',
                            'name' => 'SOC 2 Type II',
                            'issuer' => 'AICPA',
                            'type' => 'compliance',
                            'description' => 'SOC 2 Type II certification demonstrates our commitment to security, availability, processing integrity, confidentiality, and privacy.',
                            'scope' => 'All core services, infrastructure, and supporting systems',
                            'validity' => 'Annual audit',
                            'standard' => 'Trust Services Criteria',
                            'status' => 'active',
                            'lastAudit' => 'December 2023',
                            'nextAudit' => 'December 2024',
                            'reportUrl' => '/security/soc2-report.pdf',
                            'features' => [
                                'Security controls validated quarterly',
                                'Availability monitoring and incident response',
                                'Confidentiality and privacy protections',
                                'Processing integrity verification'
                            ],
                            'icon' => 'shield',
                            'gradient' => 'from-blue-500 to-blue-600',
                            'badgeColor' => 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
                            'image' => 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'iso27001',
                            'name' => 'ISO 27001:2022',
                            'issuer' => 'International Organization for Standardization',
                            'type' => 'security',
                            'description' => 'ISO 27001 is the international standard for information security management systems (ISMS).',
                            'scope' => 'Global operations, all products and services',
                            'validity' => '3 years with annual surveillance audits',
                            'standard' => 'ISO/IEC 27001:2022',
                            'status' => 'active',
                            'lastAudit' => 'October 2023',
                            'nextAudit' => 'October 2024',
                            'reportUrl' => '/security/iso27001-report.pdf',
                            'features' => [
                                'Information security management system',
                                'Risk assessment and treatment',
                                'Continuous improvement framework',
                                'Security policy and controls'
                            ],
                            'icon' => 'certificate',
                            'gradient' => 'from-emerald-500 to-emerald-600',
                            'badgeColor' => 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
                            'image' => 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'gdpr',
                            'name' => 'GDPR Compliant',
                            'issuer' => 'European Union',
                            'type' => 'privacy',
                            'description' => 'We maintain full compliance with the General Data Protection Regulation (GDPR).',
                            'scope' => 'All EU customer data processing',
                            'validity' => 'Ongoing compliance',
                            'standard' => 'Regulation (EU) 2016/679',
                            'status' => 'active',
                            'lastAudit' => 'January 2024',
                            'nextAudit' => 'January 2025',
                            'reportUrl' => '/security/gdpr-compliance.pdf',
                            'features' => [
                                'Data protection by design and default',
                                'Right to access and erasure',
                                'Data processing agreements',
                                'Breach notification procedures'
                            ],
                            'icon' => 'globe',
                            'gradient' => 'from-purple-500 to-purple-600',
                            'badgeColor' => 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
                            'image' => 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'hipaa',
                            'name' => 'HIPAA Ready',
                            'issuer' => 'U.S. Department of Health and Human Services',
                            'type' => 'industry',
                            'description' => 'Our platform is built to support HIPAA compliance for healthcare organizations.',
                            'scope' => 'Healthcare customer deployments',
                            'validity' => 'Ongoing compliance',
                            'standard' => 'HIPAA Security Rule',
                            'status' => 'active',
                            'lastAudit' => 'February 2024',
                            'nextAudit' => 'February 2025',
                            'reportUrl' => '/security/hipaa-readiness.pdf',
                            'features' => [
                                'Business Associate Agreements',
                                'Administrative safeguards',
                                'Physical and technical safeguards',
                                'Audit controls and integrity'
                            ],
                            'icon' => 'shield',
                            'gradient' => 'from-rose-500 to-rose-600',
                            'badgeColor' => 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400',
                            'image' => 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop'
                        ]
                    ],
                    'controlFrameworks' => [
                        [
                            'id' => 'nist',
                            'name' => 'NIST Cybersecurity Framework',
                            'description' => 'Aligns with NIST CSF for comprehensive cybersecurity risk management.',
                            'icon' => 'shield',
                            'maturity' => 'Advanced',
                            'controls' => [
                                'Identify: Asset management, risk assessment',
                                'Protect: Access control, awareness training',
                                'Detect: Anomalies, continuous monitoring',
                                'Respond: Response planning, communications',
                                'Recover: Recovery planning, improvements'
                            ],
                            'status' => 'implemented',
                            'image' => 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'csa',
                            'name' => 'CSA STAR',
                            'description' => 'Cloud Security Alliance STAR Registry self-assessment and continuous monitoring.',
                            'icon' => 'cloud',
                            'maturity' => 'Advanced',
                            'controls' => [
                                'Cloud control matrix compliance',
                                'Consensus Assessments Initiative',
                                'Continuous monitoring program',
                                'Transparency reporting'
                            ],
                            'status' => 'implemented',
                            'image' => 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'pci',
                            'name' => 'PCI DSS Level 1',
                            'description' => 'Payment Card Industry Data Security Standard compliance for payment processing.',
                            'icon' => 'credit',
                            'maturity' => 'Advanced',
                            'controls' => [
                                'Secure network infrastructure',
                                'Cardholder data protection',
                                'Vulnerability management',
                                'Access control measures'
                            ],
                            'status' => 'implemented',
                            'image' => 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop'
                        ]
                    ],
                    'securityControls' => [
                        [
                            'category' => 'Data Encryption',
                            'icon' => 'lock',
                            'controls' => [
                                ['name' => 'At-rest encryption', 'status' => 'enabled', 'description' => 'AES-256 encryption for all stored data'],
                                ['name' => 'In-transit encryption', 'status' => 'enabled', 'description' => 'TLS 1.3 for all data in transit'],
                                ['name' => 'Key management', 'status' => 'enabled', 'description' => 'Hardware Security Module (HSM) for key management']
                            ],
                            'image' => 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop'
                        ],
                        [
                            'category' => 'Access Control',
                            'icon' => 'users',
                            'controls' => [
                                ['name' => 'Multi-factor authentication', 'status' => 'enabled', 'description' => 'MFA required for all admin access'],
                                ['name' => 'Role-based access', 'status' => 'enabled', 'description' => 'Granular RBAC with least privilege'],
                                ['name' => 'SSO integration', 'status' => 'enabled', 'description' => 'SAML 2.0 and OIDC support']
                            ],
                            'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                        ],
                        [
                            'category' => 'Monitoring & Detection',
                            'icon' => 'eye',
                            'controls' => [
                                ['name' => '24/7 security monitoring', 'status' => 'enabled', 'description' => 'Continuous threat detection'],
                                ['name' => 'Vulnerability scanning', 'status' => 'enabled', 'description' => 'Weekly automated scans'],
                                ['name' => 'Penetration testing', 'status' => 'enabled', 'description' => 'Quarterly third-party tests']
                            ],
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
                        ],
                        [
                            'category' => 'Incident Response',
                            'icon' => 'bell',
                            'controls' => [
                                ['name' => 'Incident response plan', 'status' => 'enabled', 'description' => 'Documented and tested plan'],
                                ['name' => 'Breach notification', 'status' => 'enabled', 'description' => '24-hour notification commitment'],
                                ['name' => 'Forensic readiness', 'status' => 'enabled', 'description' => 'Preserved logs and audit trails']
                            ],
                            'image' => 'https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=600&h=400&fit=crop'
                        ]
                    ],
                    'timeline' => [
                        ['year' => '2024', 'event' => 'ISO 27001:2022 Recertification', 'completed' => true, 'quarter' => 'Q1'],
                        ['year' => '2024', 'event' => 'SOC 2 Type II Audit', 'completed' => false, 'quarter' => 'Q2'],
                        ['year' => '2024', 'event' => 'HIPAA Security Assessment', 'completed' => false, 'quarter' => 'Q3'],
                        ['year' => '2025', 'event' => 'FedRAMP Readiness Review', 'completed' => false, 'quarter' => 'Q1']
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 531,
                'section_key' => 'securityCertifications',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => 'Security & Compliance',
                    'title' => [
                        'prefix' => 'Enterprise-Grade',
                        'highlight' => 'Security'
                    ],
                    'description' => 'We\'re committed to the highest standards of security and compliance. Our certifications demonstrate our dedication to protecting your data and meeting global regulatory requirements.',
                    'heroImage' => 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=500&fit=crop',
                    'autoPlayCarousel' => true,
                    'stats' => [
                        ['value' => '99.99%', 'label' => 'Uptime SLA', 'icon' => 'bolt'],
                        ['value' => '24/7', 'label' => 'Security Monitoring', 'icon' => 'eye'],
                        ['value' => '256-bit', 'label' => 'Encryption', 'icon' => 'lock'],
                        ['value' => '100%', 'label' => 'Compliance Rate', 'icon' => 'check']
                    ],
                    'certifications' => [
                        [
                            'id' => 'soc2',
                            'name' => 'SOC 2 Type II',
                            'issuer' => 'AICPA',
                            'type' => 'compliance',
                            'description' => 'SOC 2 Type II certification demonstrates our commitment to security, availability, processing integrity, confidentiality, and privacy.',
                            'scope' => 'All core services, infrastructure, and supporting systems',
                            'validity' => 'Annual audit',
                            'status' => 'active',
                            'lastAudit' => 'December 2023',
                            'nextAudit' => 'December 2024',
                            'reportUrl' => '/security/soc2-report.pdf',
                            'features' => [
                                'Security controls validated quarterly',
                                'Availability monitoring and incident response',
                                'Confidentiality and privacy protections',
                                'Processing integrity verification'
                            ],
                            'icon' => 'shield',
                            'gradient' => 'from-blue-500 to-blue-600',
                            'badgeColor' => 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
                            'image' => 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'iso27001',
                            'name' => 'ISO 27001:2022',
                            'issuer' => 'International Organization for Standardization',
                            'type' => 'security',
                            'description' => 'ISO 27001 is the international standard for information security management systems (ISMS).',
                            'scope' => 'Global operations, all products and services',
                            'validity' => '3 years with annual surveillance audits',
                            'status' => 'active',
                            'lastAudit' => 'October 2023',
                            'nextAudit' => 'October 2024',
                            'reportUrl' => '/security/iso27001-report.pdf',
                            'features' => [
                                'Information security management system',
                                'Risk assessment and treatment',
                                'Continuous improvement framework',
                                'Security policy and controls'
                            ],
                            'icon' => 'certificate',
                            'gradient' => 'from-emerald-500 to-emerald-600',
                            'badgeColor' => 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
                            'image' => 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'gdpr',
                            'name' => 'GDPR Compliant',
                            'issuer' => 'European Union',
                            'type' => 'privacy',
                            'description' => 'We maintain full compliance with the General Data Protection Regulation (GDPR).',
                            'scope' => 'All EU customer data processing',
                            'validity' => 'Ongoing compliance',
                            'status' => 'active',
                            'lastAudit' => 'January 2024',
                            'nextAudit' => 'January 2025',
                            'reportUrl' => '/security/gdpr-compliance.pdf',
                            'features' => [
                                'Data protection by design and default',
                                'Right to access and erasure',
                                'Data processing agreements',
                                'Breach notification procedures'
                            ],
                            'icon' => 'globe',
                            'gradient' => 'from-purple-500 to-purple-600',
                            'badgeColor' => 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
                            'image' => 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'hipaa',
                            'name' => 'HIPAA Ready',
                            'issuer' => 'U.S. Department of Health and Human Services',
                            'type' => 'industry',
                            'description' => 'Our platform is built to support HIPAA compliance for healthcare organizations.',
                            'scope' => 'Healthcare customer deployments',
                            'validity' => 'Ongoing compliance',
                            'status' => 'active',
                            'lastAudit' => 'February 2024',
                            'nextAudit' => 'February 2025',
                            'reportUrl' => '/security/hipaa-readiness.pdf',
                            'features' => [
                                'Business Associate Agreements',
                                'Administrative safeguards',
                                'Physical and technical safeguards',
                                'Audit controls and integrity'
                            ],
                            'icon' => 'shield',
                            'gradient' => 'from-rose-500 to-rose-600',
                            'badgeColor' => 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400',
                            'image' => 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop'
                        ]
                    ],
                    'customerStories' => [
                        [
                            'id' => 1,
                            'name' => 'Global Retail Corp',
                            'industry' => 'Retail',
                            'logo' => 'https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?w=80&h=80&fit=crop',
                            'quote' => 'SupplyChainPro\'s security certifications gave us the confidence to migrate our entire supply chain operations to their platform. The SOC 2 and ISO 27001 certifications were critical for our compliance requirements.',
                            'author' => 'Sarah Johnson, CTO',
                            'metrics' => [
                                ['label' => 'Compliance Time', 'value' => '-75%'],
                                ['label' => 'Audit Preparation', 'value' => '-60%']
                            ],
                            'image' => 'https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 2,
                            'name' => 'HealthTech Solutions',
                            'industry' => 'Healthcare',
                            'logo' => 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=80&h=80&fit=crop',
                            'quote' => 'As a healthcare provider, HIPAA compliance is non-negotiable. SupplyChainPro\'s HIPAA-ready platform and their commitment to security made them the obvious choice for our supply chain needs.',
                            'author' => 'Michael Chen, VP of Operations',
                            'metrics' => [
                                ['label' => 'Security Incidents', 'value' => '0'],
                                ['label' => 'Compliance Score', 'value' => '100%']
                            ],
                            'image' => 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 3,
                            'name' => 'EuroLogistics',
                            'industry' => 'Logistics',
                            'logo' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=80&h=80&fit=crop',
                            'quote' => 'GDPR compliance was a major concern for our European operations. SupplyChainPro\'s comprehensive approach to data privacy and their transparent compliance framework gave us peace of mind.',
                            'author' => 'Elena Rodriguez, Data Protection Officer',
                            'metrics' => [
                                ['label' => 'Data Protection', 'value' => '100%'],
                                ['label' => 'Customer Trust', 'value' => '+45%']
                            ],
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop'
                        ]
                    ],
                    'complianceResources' => [
                        ['title' => 'Security Whitepaper', 'description' => 'Comprehensive overview of our security architecture and controls', 'icon' => 'document', 'link' => '/security/whitepaper', 'type' => 'pdf', 'image' => 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop'],
                        ['title' => 'Data Processing Agreement', 'description' => 'Standard contractual clauses for GDPR compliance', 'icon' => 'document', 'link' => '/security/dpa', 'type' => 'pdf', 'image' => 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop'],
                        ['title' => 'Subprocessor List', 'description' => 'Current list of subprocessors and their roles', 'icon' => 'users', 'link' => '/security/subprocessors', 'type' => 'list', 'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'],
                        ['title' => 'Penetration Testing Report', 'description' => 'Summary of latest third-party penetration tests', 'icon' => 'shield', 'link' => '/security/pen-test', 'type' => 'pdf', 'image' => 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop'],
                        ['title' => 'Incident Response Plan', 'description' => 'Overview of our incident response procedures', 'icon' => 'bolt', 'link' => '/security/incident-response', 'type' => 'pdf', 'image' => 'https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=600&h=400&fit=crop'],
                        ['title' => 'Privacy Policy', 'description' => 'How we collect, use, and protect your data', 'icon' => 'lock', 'link' => '/privacy', 'type' => 'page', 'image' => 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop']
                    ],
                    'timeline' => [
                        ['year' => '2024', 'event' => 'ISO 27001:2022 Recertification', 'completed' => true, 'quarter' => 'Q1', 'status' => 'completed'],
                        ['year' => '2024', 'event' => 'SOC 2 Type II Audit', 'completed' => false, 'quarter' => 'Q2', 'status' => 'in-progress'],
                        ['year' => '2024', 'event' => 'HIPAA Security Assessment', 'completed' => false, 'quarter' => 'Q3', 'status' => 'upcoming'],
                        ['year' => '2025', 'event' => 'FedRAMP Readiness Review', 'completed' => false, 'quarter' => 'Q1', 'status' => 'planned']
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 532,
                'section_key' => 'securityCertifications',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Data Protection Section
            [
                'id' => 533,
                'section_key' => 'dataProtection',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => 'Data Protection',
                    'title' => [
                        'prefix' => 'Your Data is',
                        'highlight' => 'Protected',
                        'suffix' => ''
                    ],
                    'description' => 'We take data protection seriously. Our practices are designed to give you control over your personal information while ensuring the highest level of security.',
                    'heroImage' => 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=500&fit=crop',
                    'stats' => [
                        ['value' => '100%', 'label' => 'GDPR Compliant', 'icon' => 'globe'],
                        ['value' => '256-bit', 'label' => 'Encryption', 'icon' => 'lock'],
                        ['value' => '24/7', 'label' => 'Data Monitoring', 'icon' => 'eye'],
                        ['value' => '0', 'label' => 'Data Breaches', 'icon' => 'shield']
                    ],
                    'principles' => [
                        [
                            'title' => 'Data Minimization',
                            'description' => 'We only collect data that is necessary for providing our services. We don\'t collect or retain data we don\'t need.',
                            'icon' => 'database',
                            'color' => 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
                            'gradient' => 'from-blue-500 to-blue-600',
                            'details' => [
                                'Limited data collection to essential information',
                                'Regular data retention reviews',
                                'Automatic data deletion policies',
                                'Purpose-specific data usage'
                            ],
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
                        ],
                        [
                            'title' => 'Purpose Limitation',
                            'description' => 'Data is collected for specified, explicit, and legitimate purposes only. We don\'t use data for purposes beyond what we\'ve disclosed.',
                            'icon' => 'flag',
                            'color' => 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
                            'gradient' => 'from-emerald-500 to-emerald-600',
                            'details' => [
                                'Clear purpose documentation',
                                'Consent-based processing',
                                'No undisclosed data usage',
                                'Regular purpose reviews'
                            ],
                            'image' => 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop'
                        ],
                        [
                            'title' => 'Storage Limitation',
                            'description' => 'Data is retained only as long as necessary for the purposes for which it was collected.',
                            'icon' => 'clock',
                            'color' => 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
                            'gradient' => 'from-purple-500 to-purple-600',
                            'details' => [
                                'Defined retention periods',
                                'Automated deletion schedules',
                                'Annual data reviews',
                                'Secure data disposal'
                            ],
                            'image' => 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&h=400&fit=crop'
                        ],
                        [
                            'title' => 'Integrity & Confidentiality',
                            'description' => 'Data is processed securely with appropriate technical and organizational measures.',
                            'icon' => 'shield',
                            'color' => 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400',
                            'gradient' => 'from-rose-500 to-rose-600',
                            'details' => [
                                'AES-256 encryption at rest',
                                'TLS 1.3 encryption in transit',
                                'Access controls and authentication',
                                'Regular security audits'
                            ],
                            'image' => 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop'
                        ],
                        [
                            'title' => 'Accuracy',
                            'description' => 'We maintain processes to ensure data is accurate and up-to-date.',
                            'icon' => 'check',
                            'color' => 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
                            'gradient' => 'from-amber-500 to-amber-600',
                            'details' => [
                                'User access to update data',
                                'Automated validation checks',
                                'Regular data quality reviews',
                                'Correction procedures'
                            ],
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
                        ],
                        [
                            'title' => 'Accountability',
                            'description' => 'We\'re responsible for compliance with data protection principles and can demonstrate our compliance.',
                            'icon' => 'badge',
                            'color' => 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400',
                            'gradient' => 'from-indigo-500 to-indigo-600',
                            'details' => [
                                'Designated Data Protection Officer',
                                'Comprehensive documentation',
                                'Regular compliance audits',
                                'Transparent reporting'
                            ],
                            'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                        ]
                    ],
                    'rights' => [
                        ['title' => 'Right to Access', 'description' => 'You can request a copy of all personal data we hold about you.', 'icon' => 'eye', 'action' => 'Request Access'],
                        ['title' => 'Right to Rectification', 'description' => 'You can correct inaccurate or incomplete data.', 'icon' => 'edit', 'action' => 'Correct Data'],
                        ['title' => 'Right to Erasure', 'description' => 'You can request deletion of your personal data.', 'icon' => 'trash', 'action' => 'Request Deletion'],
                        ['title' => 'Right to Restrict Processing', 'description' => 'You can limit how we use your data.', 'icon' => 'pause', 'action' => 'Restrict Processing'],
                        ['title' => 'Right to Data Portability', 'description' => 'You can receive your data in a machine-readable format.', 'icon' => 'download', 'action' => 'Export Data'],
                        ['title' => 'Right to Object', 'description' => 'You can object to data processing for specific purposes.', 'icon' => 'x', 'action' => 'Object to Processing']
                    ],
                    'locations' => [
                        ['region' => 'North America', 'flag' => '🇺🇸', 'datacenter' => 'us-east-1, us-west-2', 'compliance' => 'SOC 2, HIPAA', 'image' => 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&h=400&fit=crop'],
                        ['region' => 'Europe', 'flag' => '🇪🇺', 'datacenter' => 'eu-west-1, eu-central-1', 'compliance' => 'GDPR, ISO 27001', 'image' => 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=400&fit=crop'],
                        ['region' => 'Asia Pacific', 'flag' => '🌏', 'datacenter' => 'ap-southeast-1, ap-northeast-1', 'compliance' => 'PDPA, ISO 27001', 'image' => 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600&h=400&fit=crop']
                    ],
                    'formTitle' => 'Data Protection Request',
                    'formDescription' => 'Submit a request to exercise your data protection rights. We\'ll respond within 30 days.',
                    'formImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 534,
                'section_key' => 'dataProtection',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => 'Data Protection',
                    'title' => [
                        'prefix' => 'Your Data is',
                        'highlight' => 'Protected'
                    ],
                    'description' => 'We take data protection seriously. Our practices are designed to give you control over your personal information while ensuring the highest level of security.',
                    'heroImage' => 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=500&fit=crop',
                    'stats' => [
                        ['value' => '100%', 'label' => 'GDPR Compliant', 'icon' => 'globe', 'trend' => 'Certified', 'trendUp' => true],
                        ['value' => '256-bit', 'label' => 'Encryption', 'icon' => 'lock', 'trend' => 'AES-256', 'trendUp' => true],
                        ['value' => '<30', 'label' => 'Days Response', 'icon' => 'clock', 'trend' => 'Average', 'trendUp' => true],
                        ['value' => '0', 'label' => 'Data Breaches', 'icon' => 'shield', 'trend' => '2024', 'trendUp' => true]
                    ],
                    'principles' => [
                        [
                            'title' => 'Data Minimization',
                            'description' => 'We only collect data that is necessary for providing our services.',
                            'icon' => 'database',
                            'status' => 'Implemented',
                            'metrics' => '30% less data collected',
                            'gradient' => 'from-blue-500 to-blue-600',
                            'details' => [
                                'Limited data collection to essential information',
                                'Regular data retention reviews',
                                'Automatic data deletion policies'
                            ],
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
                        ],
                        [
                            'title' => 'Purpose Limitation',
                            'description' => 'Data is collected for specified, explicit, and legitimate purposes only.',
                            'icon' => 'flag',
                            'status' => 'Implemented',
                            'metrics' => '100% purpose alignment',
                            'gradient' => 'from-emerald-500 to-emerald-600',
                            'details' => [
                                'Clear purpose documentation',
                                'Consent-based processing',
                                'No undisclosed data usage'
                            ],
                            'image' => 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop'
                        ],
                        [
                            'title' => 'Storage Limitation',
                            'description' => 'Data is retained only as long as necessary.',
                            'icon' => 'clock',
                            'status' => 'Implemented',
                            'metrics' => 'Automated deletion',
                            'gradient' => 'from-purple-500 to-purple-600',
                            'details' => [
                                'Defined retention periods',
                                'Automated deletion schedules',
                                'Secure data disposal'
                            ],
                            'image' => 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&h=400&fit=crop'
                        ],
                        [
                            'title' => 'Integrity & Confidentiality',
                            'description' => 'Data is processed securely with appropriate measures.',
                            'icon' => 'shield',
                            'status' => 'Certified',
                            'metrics' => 'AES-256 | TLS 1.3',
                            'gradient' => 'from-rose-500 to-rose-600',
                            'details' => [
                                'AES-256 encryption at rest',
                                'TLS 1.3 encryption in transit',
                                'Access controls and authentication'
                            ],
                            'image' => 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop'
                        ]
                    ],
                    'rights' => [
                        [
                            'title' => 'Right to Access',
                            'description' => 'Request a copy of all personal data we hold about you.',
                            'icon' => 'eye',
                            'processTime' => '30 days',
                            'formRequired' => true,
                            'details' => 'You have the right to obtain confirmation that your data is being processed, access to your personal data, and information about how it\'s being used.',
                            'image' => 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=600&h=400&fit=crop'
                        ],
                        [
                            'title' => 'Right to Rectification',
                            'description' => 'Correct inaccurate or incomplete data.',
                            'icon' => 'edit',
                            'processTime' => '15 days',
                            'formRequired' => true,
                            'details' => 'You have the right to have inaccurate personal data rectified and incomplete data completed.',
                            'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                        ],
                        [
                            'title' => 'Right to Erasure',
                            'description' => 'Request deletion of your personal data.',
                            'icon' => 'trash',
                            'processTime' => '30 days',
                            'formRequired' => true,
                            'details' => 'Also known as the \'right to be forgotten\', you can request deletion of your data when it\'s no longer necessary or if consent is withdrawn.',
                            'image' => 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop'
                        ],
                        [
                            'title' => 'Right to Restrict Processing',
                            'description' => 'Limit how we use your data.',
                            'icon' => 'pause',
                            'processTime' => '15 days',
                            'formRequired' => true,
                            'details' => 'You can request that we stop processing your data while we verify its accuracy or the lawfulness of processing.',
                            'image' => 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&h=400&fit=crop'
                        ],
                        [
                            'title' => 'Right to Data Portability',
                            'description' => 'Receive your data in a machine-readable format.',
                            'icon' => 'download',
                            'processTime' => '30 days',
                            'formRequired' => true,
                            'details' => 'You have the right to receive your data in a structured, commonly used, machine-readable format and transmit it to another controller.',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
                        ],
                        [
                            'title' => 'Right to Object',
                            'description' => 'Object to data processing for specific purposes.',
                            'icon' => 'x',
                            'processTime' => '15 days',
                            'formRequired' => true,
                            'details' => 'You have the right to object to processing based on legitimate interests, direct marketing, or for scientific/historical research.',
                            'image' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop'
                        ]
                    ],
                    'processingActivities' => [
                        ['purpose' => 'Service Delivery', 'categories' => ['Account Data', 'Usage Data', 'Transaction Data'], 'legalBasis' => 'Contract Performance', 'retention' => '7 years', 'location' => 'US, EU', 'image' => 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop'],
                        ['purpose' => 'Analytics & Improvement', 'categories' => ['Usage Data', 'Technical Data'], 'legalBasis' => 'Legitimate Interest', 'retention' => '2 years', 'location' => 'US, EU', 'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'],
                        ['purpose' => 'Marketing Communications', 'categories' => ['Contact Data', 'Preferences'], 'legalBasis' => 'Consent', 'retention' => 'Until consent withdrawn', 'location' => 'Global', 'image' => 'https://images.unsplash.com/photo-1557838923-2985c318be48?w=600&h=400&fit=crop'],
                        ['purpose' => 'Security & Fraud Prevention', 'categories' => ['Log Data', 'Technical Data'], 'legalBasis' => 'Legal Obligation', 'retention' => '1 year', 'location' => 'US, EU', 'image' => 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop']
                    ],
                    'locations' => [
                        ['region' => 'North America', 'flag' => '🇺🇸', 'datacenter' => 'us-east-1, us-west-2', 'color' => 'from-blue-500 to-blue-600', 'image' => 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&h=400&fit=crop'],
                        ['region' => 'Europe', 'flag' => '🇪🇺', 'datacenter' => 'eu-west-1, eu-central-1', 'color' => 'from-emerald-500 to-emerald-600', 'image' => 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=400&fit=crop'],
                        ['region' => 'Asia Pacific', 'flag' => '🌏', 'datacenter' => 'ap-southeast-1, ap-northeast-1', 'color' => 'from-purple-500 to-purple-600', 'image' => 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600&h=400&fit=crop'],
                        ['region' => 'Data Residency', 'flag' => '🌍', 'datacenter' => 'Customer-selectable regions', 'color' => 'from-amber-500 to-amber-600', 'image' => 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&h=400&fit=crop']
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 535,
                'section_key' => 'dataProtection',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => 'Data Protection',
                    'title' => [
                        'prefix' => 'Your Data is',
                        'highlight' => 'Protected'
                    ],
                    'description' => 'We take data protection seriously. Our practices are designed to give you control over your personal information while ensuring the highest level of security.',
                    'heroImage' => 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=500&fit=crop',
                    'autoPlayCarousel' => true,
                    'stats' => [
                        ['value' => '100%', 'label' => 'GDPR Compliant', 'icon' => 'globe'],
                        ['value' => '256-bit', 'label' => 'Encryption', 'icon' => 'lock'],
                        ['value' => '<30', 'label' => 'Days Response', 'icon' => 'clock'],
                        ['value' => '0', 'label' => 'Data Breaches', 'icon' => 'shield']
                    ],
                    'principles' => [
                        [
                            'title' => 'Data Minimization',
                            'description' => 'We only collect data that is necessary for providing our services.',
                            'icon' => 'database',
                            'gradient' => 'from-blue-500 to-blue-600',
                            'stats' => '30% less data collected',
                            'details' => [
                                'Limited data collection to essential information',
                                'Regular data retention reviews',
                                'Automatic data deletion policies'
                            ],
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
                        ],
                        [
                            'title' => 'Purpose Limitation',
                            'description' => 'Data is collected for specified, explicit, and legitimate purposes only.',
                            'icon' => 'flag',
                            'gradient' => 'from-emerald-500 to-emerald-600',
                            'stats' => '100% purpose alignment',
                            'details' => [
                                'Clear purpose documentation',
                                'Consent-based processing',
                                'No undisclosed data usage'
                            ],
                            'image' => 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop'
                        ],
                        [
                            'title' => 'Storage Limitation',
                            'description' => 'Data is retained only as long as necessary.',
                            'icon' => 'clock',
                            'gradient' => 'from-purple-500 to-purple-600',
                            'stats' => 'Automated deletion',
                            'details' => [
                                'Defined retention periods',
                                'Automated deletion schedules',
                                'Secure data disposal'
                            ],
                            'image' => 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&h=400&fit=crop'
                        ],
                        [
                            'title' => 'Integrity & Confidentiality',
                            'description' => 'Data is processed securely with appropriate measures.',
                            'icon' => 'shield',
                            'gradient' => 'from-rose-500 to-rose-600',
                            'stats' => 'AES-256 | TLS 1.3',
                            'details' => [
                                'AES-256 encryption at rest',
                                'TLS 1.3 encryption in transit',
                                'Access controls and authentication'
                            ],
                            'image' => 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop'
                        ]
                    ],
                    'rights' => [
                        ['title' => 'Right to Access', 'icon' => 'eye', 'description' => 'Request a copy of all personal data we hold about you.', 'processTime' => '30 days', 'image' => 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=600&h=400&fit=crop'],
                        ['title' => 'Right to Rectification', 'icon' => 'edit', 'description' => 'Correct inaccurate or incomplete data.', 'processTime' => '15 days', 'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'],
                        ['title' => 'Right to Erasure', 'icon' => 'trash', 'description' => 'Request deletion of your personal data.', 'processTime' => '30 days', 'image' => 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop'],
                        ['title' => 'Right to Restrict Processing', 'icon' => 'pause', 'description' => 'Limit how we use your data.', 'processTime' => '15 days', 'image' => 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&h=400&fit=crop'],
                        ['title' => 'Right to Data Portability', 'icon' => 'download', 'description' => 'Receive your data in a machine-readable format.', 'processTime' => '30 days', 'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'],
                        ['title' => 'Right to Object', 'icon' => 'x', 'description' => 'Object to data processing for specific purposes.', 'processTime' => '15 days', 'image' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop']
                    ],
                    'customerStories' => [
                        [
                            'id' => 1,
                            'name' => 'Global Retail Corp',
                            'role' => 'CTO',
                            'company' => 'Global Retail Corp',
                            'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop',
                            'quote' => 'SupplyChainPro\'s data protection practices gave us the confidence to trust them with our sensitive supply chain data. Their GDPR compliance and transparent approach to data handling set them apart.',
                            'image' => 'https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 2,
                            'name' => 'HealthTech Solutions',
                            'role' => 'VP of Security',
                            'company' => 'HealthTech Solutions',
                            'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop',
                            'quote' => 'As a healthcare company, data protection is critical. SupplyChainPro\'s commitment to data minimization and security gave us complete peace of mind.',
                            'image' => 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 3,
                            'name' => 'EuroLogistics',
                            'role' => 'DPO',
                            'company' => 'EuroLogistics',
                            'avatar' => 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop',
                            'quote' => 'Managing data across EU borders is complex, but SupplyChainPro\'s data protection framework made compliance straightforward. Their DPO was incredibly helpful.',
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop'
                        ]
                    ],
                    'formTitle' => 'Data Protection Request',
                    'formDescription' => 'Submit a request to exercise your data protection rights.',
                    'formImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 536,
                'section_key' => 'dataProtection',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Privacy Policy Section
            [
                'id' => 537,
                'section_key' => 'privacyPolicy',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => 'Privacy Policy',
                    'title' => [
                        'prefix' => 'Your',
                        'highlight' => 'Privacy',
                        'suffix' => 'Matters to Us'
                    ],
                    'description' => 'We are committed to transparency about how we collect, use, and protect your personal information. This policy explains our data practices.',
                    'heroImage' => 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=500&fit=crop',
                    'lastUpdated' => 'March 15, 2024',
                    'stats' => [
                        ['value' => 'GDPR', 'label' => 'Compliant', 'icon' => 'globe'],
                        ['value' => 'CCPA', 'label' => 'Ready', 'icon' => 'shield'],
                        ['value' => 'ISO 27001', 'label' => 'Certified', 'icon' => 'certificate'],
                        ['value' => 'Privacy Shield', 'label' => 'Framework', 'icon' => 'badge']
                    ],
                    'sections' => [
                        [
                            'id' => 'introduction',
                            'title' => 'Introduction',
                            'icon' => 'document',
                            'content' => 'We at SupplyChainPro are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform and services. Please read this policy carefully to understand our views and practices regarding your personal data.',
                            'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'information-collection',
                            'title' => 'Information We Collect',
                            'icon' => 'database',
                            'content' => 'We collect information you provide directly to us, such as when you create an account, use our services, or communicate with us. This may include your name, email address, phone number, company information, and payment details. We also automatically collect certain information about your device and usage of our services, including IP address, browser type, and pages visited.',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'use-of-information',
                            'title' => 'How We Use Your Information',
                            'icon' => 'cog',
                            'content' => 'We use the information we collect to provide, maintain, and improve our services; to process transactions; to communicate with you; to personalize your experience; and to comply with legal obligations. We may also use your information for research and analytics purposes to better understand user needs.',
                            'image' => 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'data-sharing',
                            'title' => 'Data Sharing & Disclosure',
                            'icon' => 'share',
                            'content' => 'We do not sell your personal information. We may share your information with service providers who perform services on our behalf, with your consent, or as required by law. We may also share aggregated or de-identified information that cannot reasonably be used to identify you.',
                            'image' => 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'data-security',
                            'title' => 'Data Security',
                            'icon' => 'shield',
                            'content' => 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encryption, access controls, and regular security assessments.',
                            'image' => 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'your-rights',
                            'title' => 'Your Privacy Rights',
                            'icon' => 'users',
                            'content' => 'Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, delete, or restrict processing of your data. You may also have the right to data portability and to withdraw consent at any time.',
                            'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'cookies',
                            'title' => 'Cookies & Tracking',
                            'icon' => 'tag',
                            'content' => 'We use cookies and similar tracking technologies to collect information about your browsing activities. You can control cookies through your browser settings and other tools. We use both session cookies (which expire when you close your browser) and persistent cookies (which remain until deleted).',
                            'image' => 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'children-privacy',
                            'title' => 'Children\'s Privacy',
                            'icon' => 'heart',
                            'content' => 'Our services are not directed to children under 16. We do not knowingly collect personal information from children under 16. If we become aware that we have collected personal information from a child under 16, we will take steps to delete that information.',
                            'image' => 'https://images.unsplash.com/photo-1516589091380-5d8e87df6999?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'international-transfers',
                            'title' => 'International Data Transfers',
                            'icon' => 'globe',
                            'content' => 'Your information may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ. We take appropriate safeguards to ensure your data remains protected.',
                            'image' => 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'policy-updates',
                            'title' => 'Updates to This Policy',
                            'icon' => 'refresh',
                            'content' => 'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date. We encourage you to review this policy periodically.',
                            'image' => 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'contact-us',
                            'title' => 'Contact Us',
                            'icon' => 'mail',
                            'content' => 'If you have questions or concerns about this Privacy Policy or our data practices, please contact us at privacy@supplychainpro.com or by mail at the address provided on our website. Our Data Protection Officer is available to address your concerns.',
                            'image' => 'https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=600&h=400&fit=crop'
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 538,
                'section_key' => 'privacyPolicy',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => 'Privacy Policy',
                    'title' => [
                        'prefix' => 'Your',
                        'highlight' => 'Privacy',
                        'suffix' => 'Matters to Us'
                    ],
                    'description' => 'We are committed to transparency about how we collect, use, and protect your personal information. This policy explains our data practices.',
                    'heroImage' => 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=500&fit=crop',
                    'lastUpdated' => 'March 15, 2024',
                    'stats' => [
                        ['value' => 'GDPR', 'label' => 'Compliant', 'icon' => 'globe', 'gradient' => 'from-blue-500 to-blue-600'],
                        ['value' => 'CCPA', 'label' => 'Ready', 'icon' => 'shield', 'gradient' => 'from-emerald-500 to-emerald-600'],
                        ['value' => 'ISO 27001', 'label' => 'Certified', 'icon' => 'certificate', 'gradient' => 'from-purple-500 to-purple-600'],
                        ['value' => 'ePrivacy', 'label' => 'Compliant', 'icon' => 'lock', 'gradient' => 'from-amber-500 to-amber-600']
                    ],
                    'sections' => [
                        [
                            'id' => 'introduction',
                            'title' => 'Introduction',
                            'icon' => 'document',
                            'summary' => 'Overview of our privacy commitment and policy scope.',
                            'content' => 'We at SupplyChainPro are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform and services. Please read this policy carefully to understand our views and practices regarding your personal data.',
                            'lastUpdated' => 'March 15, 2024',
                            'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'information-collection',
                            'title' => 'Information We Collect',
                            'icon' => 'database',
                            'summary' => 'Types of personal data we collect from users.',
                            'content' => 'We collect information you provide directly to us, such as when you create an account, use our services, or communicate with us. This may include your name, email address, phone number, company information, and payment details. We also automatically collect certain information about your device and usage of our services, including IP address, browser type, and pages visited.',
                            'dataTypes' => ['Account Information', 'Usage Data', 'Device Information', 'Location Data'],
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'use-of-information',
                            'title' => 'How We Use Your Information',
                            'icon' => 'cog',
                            'summary' => 'Purposes for processing your personal data.',
                            'content' => 'We use the information we collect to provide, maintain, and improve our services; to process transactions; to communicate with you; to personalize your experience; and to comply with legal obligations.',
                            'purposes' => ['Service Delivery', 'Analytics & Improvement', 'Customer Support', 'Legal Compliance'],
                            'image' => 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'data-sharing',
                            'title' => 'Data Sharing & Disclosure',
                            'icon' => 'share',
                            'summary' => 'When and why we share your information.',
                            'content' => 'We do not sell your personal information. We may share your information with service providers who perform services on our behalf, with your consent, or as required by law.',
                            'thirdParties' => ['Cloud Providers', 'Payment Processors', 'Analytics Services', 'Customer Support Tools'],
                            'image' => 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'data-security',
                            'title' => 'Data Security',
                            'icon' => 'shield',
                            'summary' => 'Measures we take to protect your data.',
                            'content' => 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.',
                            'securityMeasures' => ['AES-256 Encryption', 'TLS 1.3', 'Access Controls', 'Regular Audits'],
                            'image' => 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'your-rights',
                            'title' => 'Your Privacy Rights',
                            'icon' => 'users',
                            'summary' => 'Control you have over your personal data.',
                            'content' => 'Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, delete, or restrict processing of your data.',
                            'rights' => ['Right to Access', 'Right to Rectification', 'Right to Erasure', 'Right to Portability'],
                            'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'cookies',
                            'title' => 'Cookies & Tracking',
                            'icon' => 'tag',
                            'summary' => 'How we use cookies and similar technologies.',
                            'content' => 'We use cookies and similar tracking technologies to collect information about your browsing activities. You can control cookies through your browser settings and other tools.',
                            'cookieTypes' => ['Necessary', 'Functional', 'Analytics', 'Marketing'],
                            'image' => 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'data-retention',
                            'title' => 'Data Retention',
                            'icon' => 'clock',
                            'summary' => 'How long we keep your information.',
                            'content' => 'We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required or permitted by law.',
                            'retentionPeriods' => ['Account Data: 7 years', 'Usage Data: 2 years', 'Log Data: 1 year'],
                            'image' => 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'international-transfers',
                            'title' => 'International Data Transfers',
                            'icon' => 'globe',
                            'summary' => 'How we handle cross-border data transfers.',
                            'content' => 'Your information may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ.',
                            'transferMechanisms' => ['Standard Contractual Clauses', 'Data Processing Agreements', 'Privacy Shield Framework'],
                            'image' => 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'policy-updates',
                            'title' => 'Updates to This Policy',
                            'icon' => 'refresh',
                            'summary' => 'How we notify you of changes.',
                            'content' => 'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.',
                            'notificationMethods' => ['Email Notification', 'Website Notice', 'In-App Notification'],
                            'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'contact-us',
                            'title' => 'Contact Us',
                            'icon' => 'mail',
                            'summary' => 'How to reach our privacy team.',
                            'content' => 'If you have questions or concerns about this Privacy Policy or our data practices, please contact us at privacy@supplychainpro.com.',
                            'contactInfo' => [
                                'email' => 'privacy@supplychainpro.com',
                                'dpo' => 'dpo@supplychainpro.com',
                                'address' => '123 Supply Chain Way, San Francisco, CA 94105'
                            ],
                            'image' => 'https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=600&h=400&fit=crop'
                        ]
                    ],
                    'faqs' => [
                        [
                            'question' => 'How do I request access to my personal data?',
                            'answer' => 'You can submit a data access request through our Privacy Request form or by emailing privacy@supplychainpro.com. We will respond within 30 days.',
                            'image' => 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=600&h=400&fit=crop'
                        ],
                        [
                            'question' => 'How long do you keep my data?',
                            'answer' => 'We retain data as long as necessary to provide our services and as required by law. Account data is kept for 7 years, usage data for 2 years, and log data for 1 year.'
                        ],
                        [
                            'question' => 'Do you sell my personal information?',
                            'answer' => 'No, we do not sell your personal information. We only share data with service providers who help us deliver our services, under strict confidentiality agreements.'
                        ],
                        [
                            'question' => 'How do I delete my account?',
                            'answer' => 'You can delete your account through your account settings or by contacting our support team. We will permanently delete your data within 30 days of request.'
                        ],
                        [
                            'question' => 'What security measures do you have in place?',
                            'answer' => 'We use industry-standard security measures including AES-256 encryption, TLS 1.3, multi-factor authentication, and regular security audits by third-party firms.'
                        ],
                        [
                            'question' => 'How do you handle data breaches?',
                            'answer' => 'We have an incident response plan that includes notification to affected users and regulatory authorities within 72 hours of detection, as required by GDPR and other regulations.'
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 539,
                'section_key' => 'privacyPolicy',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => 'Privacy Policy',
                    'title' => [
                        'prefix' => 'Your',
                        'highlight' => 'Privacy'
                    ],
                    'description' => 'We are committed to transparency about how we collect, use, and protect your personal information.',
                    'heroImage' => 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=500&fit=crop',
                    'autoPlayCarousel' => true,
                    'lastUpdated' => 'March 15, 2024',
                    'stats' => [
                        ['value' => '100%', 'label' => 'GDPR Compliant', 'icon' => 'globe', 'gradient' => 'from-blue-500 to-blue-600'],
                        ['value' => '256-bit', 'label' => 'Encryption', 'icon' => 'lock', 'gradient' => 'from-emerald-500 to-emerald-600'],
                        ['value' => '24/7', 'label' => 'Monitoring', 'icon' => 'eye', 'gradient' => 'from-purple-500 to-purple-600'],
                        ['value' => '0', 'label' => 'Breaches', 'icon' => 'shield', 'gradient' => 'from-amber-500 to-amber-600']
                    ],
                    'sections' => [
                        [
                            'id' => 'introduction',
                            'title' => 'Introduction',
                            'icon' => 'document',
                            'summary' => 'Overview of our privacy commitment and policy scope.',
                            'content' => 'We at SupplyChainPro are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform and services. Please read this policy carefully to understand our views and practices regarding your personal data.',
                            'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'information-collection',
                            'title' => 'Information We Collect',
                            'icon' => 'database',
                            'summary' => 'Types of personal data we collect from users.',
                            'content' => 'We collect information you provide directly to us, such as when you create an account, use our services, or communicate with us. This may include your name, email address, phone number, company information, and payment details.',
                            'dataTypes' => ['Account Information', 'Usage Data', 'Device Information', 'Location Data'],
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'use-of-information',
                            'title' => 'How We Use Your Information',
                            'icon' => 'cog',
                            'summary' => 'Purposes for processing your personal data.',
                            'content' => 'We use the information we collect to provide, maintain, and improve our services; to process transactions; to communicate with you; to personalize your experience; and to comply with legal obligations.',
                            'purposes' => ['Service Delivery', 'Analytics & Improvement', 'Customer Support', 'Legal Compliance'],
                            'image' => 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'your-rights',
                            'title' => 'Your Privacy Rights',
                            'icon' => 'users',
                            'summary' => 'Control you have over your personal data.',
                            'content' => 'Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, delete, or restrict processing of your data.',
                            'rights' => [
                                ['name' => 'Right to Access', 'description' => 'Request a copy of your data', 'action' => 'Request Access'],
                                ['name' => 'Right to Rectification', 'description' => 'Correct inaccurate data', 'action' => 'Correct Data'],
                                ['name' => 'Right to Erasure', 'description' => 'Request data deletion', 'action' => 'Request Deletion'],
                                ['name' => 'Right to Portability', 'description' => 'Export your data', 'action' => 'Export Data']
                            ],
                            'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'data-security',
                            'title' => 'Data Security',
                            'icon' => 'shield',
                            'summary' => 'Measures we take to protect your data.',
                            'content' => 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.',
                            'securityMeasures' => ['AES-256 Encryption', 'TLS 1.3', 'Access Controls', 'Regular Audits'],
                            'image' => 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop'
                        ]
                    ],
                    'customerStories' => [
                        [
                            'id' => 1,
                            'name' => 'Global Retail Corp',
                            'role' => 'CTO',
                            'company' => 'Global Retail Corp',
                            'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop',
                            'quote' => 'SupplyChainPro\'s transparent privacy policy and commitment to data protection gave us complete confidence in their platform.',
                            'image' => 'https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 2,
                            'name' => 'HealthTech Solutions',
                            'role' => 'VP of Security',
                            'company' => 'HealthTech Solutions',
                            'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop',
                            'quote' => 'Their GDPR compliance and privacy-first approach made them the obvious choice for our healthcare data.',
                            'image' => 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 3,
                            'name' => 'EuroLogistics',
                            'role' => 'DPO',
                            'company' => 'EuroLogistics',
                            'avatar' => 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop',
                            'quote' => 'Managing cross-border data is complex, but SupplyChainPro\'s privacy framework made compliance straightforward.',
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop'
                        ]
                    ],
                    'faqs' => [
                        [
                            'question' => 'How do I request access to my personal data?',
                            'answer' => 'You can submit a data access request through our Privacy Request form or by emailing privacy@supplychainpro.com. We will respond within 30 days.',
                            'image' => 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=600&h=400&fit=crop'
                        ],
                        [
                            'question' => 'How long do you keep my data?',
                            'answer' => 'We retain data as long as necessary to provide our services and as required by law. Account data is kept for 7 years, usage data for 2 years, and log data for 1 year.'
                        ],
                        [
                            'question' => 'Do you sell my personal information?',
                            'answer' => 'No, we do not sell your personal information. We only share data with service providers who help us deliver our services, under strict confidentiality agreements.'
                        ],
                        [
                            'question' => 'How do I delete my account?',
                            'answer' => 'You can delete your account through your account settings or by contacting our support team. We will permanently delete your data within 30 days of request.'
                        ]
                    ],
                    'formTitle' => 'Privacy Request',
                    'formDescription' => 'Submit a request regarding your personal data.',
                    'formImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 540,
                'section_key' => 'privacyPolicy',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Terms of Service Section 
            [
                'id' => 541,
                'section_key' => 'termsOfService',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => 'Terms of Service',
                    'title' => [
                        'prefix' => 'Our',
                        'highlight' => 'Terms',
                        'suffix' => 'of Service'
                    ],
                    'description' => 'These terms govern your use of SupplyChainPro\'s platform and services. Please read them carefully before using our platform.',
                    'heroImage' => 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=500&fit=crop',
                    'effectiveDate' => 'January 1, 2024',
                    'stats' => [
                        ['value' => '13', 'label' => 'Sections', 'icon' => 'document'],
                        ['value' => '24/7', 'label' => 'Support', 'icon' => 'chat'],
                        ['value' => '99.9%', 'label' => 'Uptime SLA', 'icon' => 'chart'],
                        ['value' => 'GDPR', 'label' => 'Compliant', 'icon' => 'globe']
                    ],
                    'sections' => [
                        ['id' => 'acceptance', 'title' => 'Acceptance of Terms', 'icon' => 'clipboard', 'content' => 'By accessing or using SupplyChainPro\'s platform, services, or website, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. These terms constitute a legally binding agreement between you and SupplyChainPro.', 'image' => 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop'],
                        ['id' => 'definitions', 'title' => 'Definitions', 'icon' => 'document', 'content' => '"Platform" refers to SupplyChainPro\'s software and services. "User" refers to any individual or entity accessing our services. "Account" refers to the user\'s registered account. "Content" refers to any data, information, or materials uploaded or processed through the platform.', 'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'],
                        ['id' => 'account-registration', 'title' => 'Account Registration', 'icon' => 'users', 'content' => 'To access certain features, you must register for an account. You agree to provide accurate, current, and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.', 'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'],
                        ['id' => 'user-obligations', 'title' => 'User Obligations', 'icon' => 'shield', 'content' => 'You agree to use our services in compliance with all applicable laws and regulations. You shall not: misuse the platform, attempt to gain unauthorized access, interfere with service operations, or use the platform for any illegal purpose.', 'image' => 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop'],
                        ['id' => 'intellectual-property', 'title' => 'Intellectual Property', 'icon' => 'badge', 'content' => 'SupplyChainPro owns all rights, title, and interest in the platform, including software, trademarks, and content. You retain ownership of your data. You grant us a license to use your data to provide and improve our services.', 'image' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop'],
                        ['id' => 'payment-terms', 'title' => 'Payment Terms', 'icon' => 'credit', 'content' => 'Fees for paid services are described on our pricing page. Payments are due in accordance with your subscription plan. Fees are non-refundable except as required by law. We may change fees with notice.', 'image' => 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop'],
                        ['id' => 'data-privacy', 'title' => 'Data Privacy', 'icon' => 'lock', 'content' => 'Our Privacy Policy governs how we collect, use, and protect your personal information. By using our services, you consent to our data practices as described in the Privacy Policy.', 'image' => 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop'],
                        ['id' => 'service-level', 'title' => 'Service Level', 'icon' => 'chart', 'content' => 'We strive to maintain high availability and performance. Our service level agreement (SLA) outlines uptime commitments and support response times. We are not liable for downtime caused by factors beyond our control.', 'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'],
                        ['id' => 'termination', 'title' => 'Termination', 'icon' => 'x', 'content' => 'Either party may terminate this agreement. You may cancel your account at any time. We may suspend or terminate your access for violation of these terms. Upon termination, your right to use the service ends immediately.', 'image' => 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop'],
                        ['id' => 'limitation-liability', 'title' => 'Limitation of Liability', 'icon' => 'shield', 'content' => 'To the maximum extent permitted by law, SupplyChainPro shall not be liable for indirect, incidental, or consequential damages. Our total liability shall not exceed the amount paid by you for the services.', 'image' => 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop'],
                        ['id' => 'governing-law', 'title' => 'Governing Law', 'icon' => 'globe', 'content' => 'These terms shall be governed by the laws of the State of Delaware, without regard to conflict of law principles. Any disputes shall be resolved in the courts of San Francisco County, California.', 'image' => 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&h=400&fit=crop'],
                        ['id' => 'modifications', 'title' => 'Modifications to Terms', 'icon' => 'refresh', 'content' => 'We may update these terms from time to time. We will notify you of material changes via email or through the platform. Your continued use of the service constitutes acceptance of the modified terms.', 'image' => 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&h=400&fit=crop'],
                        ['id' => 'contact', 'title' => 'Contact Information', 'icon' => 'mail', 'content' => 'For questions about these Terms of Service, please contact us at legal@supplychainpro.com or by mail at the address provided on our website. Our legal team will respond to inquiries promptly.', 'image' => 'https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=600&h=400&fit=crop']
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 542,
                'section_key' => 'termsOfService',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => 'Terms of Service',
                    'title' => [
                        'prefix' => 'Our',
                        'highlight' => 'Terms',
                        'suffix' => 'of Service'
                    ],
                    'description' => 'These terms govern your use of SupplyChainPro\'s platform and services. Please read them carefully before using our platform.',
                    'heroImage' => 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=500&fit=crop',
                    'effectiveDate' => 'January 1, 2024',
                    'stats' => [
                        ['value' => '14', 'label' => 'Sections', 'icon' => 'document', 'trend' => 'Complete', 'trendUp' => true],
                        ['value' => '24/7', 'label' => 'Legal Support', 'icon' => 'chat', 'trend' => 'Available', 'trendUp' => true],
                        ['value' => '99.9%', 'label' => 'SLA', 'icon' => 'chart', 'trend' => 'Guaranteed', 'trendUp' => true],
                        ['value' => 'Global', 'label' => 'Jurisdiction', 'icon' => 'globe', 'trend' => 'Delaware', 'trendUp' => true]
                    ],
                    'sections' => [
                        [
                            'id' => 'acceptance',
                            'title' => 'Acceptance of Terms',
                            'icon' => 'clipboard',
                            'summary' => 'Agreement to be bound by these terms',
                            'content' => 'By accessing or using SupplyChainPro\'s platform, services, or website, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. These terms constitute a legally binding agreement between you and SupplyChainPro.',
                            'keyPoints' => ['Legally binding agreement', 'Acceptance by use', 'Right to refuse'],
                            'image' => 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'definitions',
                            'title' => 'Definitions',
                            'icon' => 'document',
                            'summary' => 'Key terms used throughout this agreement',
                            'content' => '"Platform" refers to SupplyChainPro\'s software and services. "User" refers to any individual or entity accessing our services. "Account" refers to the user\'s registered account. "Content" refers to any data, information, or materials uploaded or processed through the platform.',
                            'keyPoints' => ['Platform definition', 'User definition', 'Account definition'],
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'account-registration',
                            'title' => 'Account Registration',
                            'icon' => 'users',
                            'summary' => 'Requirements for creating and maintaining an account',
                            'content' => 'To access certain features, you must register for an account. You agree to provide accurate, current, and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.',
                            'keyPoints' => ['Accurate information required', 'Account security responsibility', 'Age requirements apply'],
                            'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'user-obligations',
                            'title' => 'User Obligations',
                            'icon' => 'shield',
                            'summary' => 'Your responsibilities when using our platform',
                            'content' => 'You agree to use our services in compliance with all applicable laws and regulations. You shall not: misuse the platform, attempt to gain unauthorized access, interfere with service operations, or use the platform for any illegal purpose.',
                            'keyPoints' => ['Comply with laws', 'No unauthorized access', 'No interference with services'],
                            'image' => 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'intellectual-property',
                            'title' => 'Intellectual Property',
                            'icon' => 'badge',
                            'summary' => 'Ownership of platform and user content',
                            'content' => 'SupplyChainPro owns all rights, title, and interest in the platform, including software, trademarks, and content. You retain ownership of your data. You grant us a license to use your data to provide and improve our services.',
                            'keyPoints' => ['Platform owned by SupplyChainPro', 'User retains data ownership', 'License to provide services'],
                            'image' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'payment-terms',
                            'title' => 'Payment Terms',
                            'icon' => 'credit',
                            'summary' => 'Fees, billing, and refund policies',
                            'content' => 'Fees for paid services are described on our pricing page. Payments are due in accordance with your subscription plan. Fees are non-refundable except as required by law. We may change fees with notice.',
                            'keyPoints' => ['Fees as described', 'Non-refundable', 'Fee changes with notice'],
                            'image' => 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'data-privacy',
                            'title' => 'Data Privacy',
                            'icon' => 'lock',
                            'summary' => 'How we handle your personal information',
                            'content' => 'Our Privacy Policy governs how we collect, use, and protect your personal information. By using our services, you consent to our data practices as described in the Privacy Policy.',
                            'keyPoints' => ['Privacy Policy applies', 'Consent to data practices', 'GDPR compliant'],
                            'image' => 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'service-level',
                            'title' => 'Service Level',
                            'icon' => 'chart',
                            'summary' => 'Uptime and support commitments',
                            'content' => 'We strive to maintain high availability and performance. Our service level agreement (SLA) outlines uptime commitments and support response times. We are not liable for downtime caused by factors beyond our control.',
                            'keyPoints' => ['99.9% uptime target', 'SLA commitments', 'Force majeure exceptions'],
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'termination',
                            'title' => 'Termination',
                            'icon' => 'x',
                            'summary' => 'How and when this agreement ends',
                            'content' => 'Either party may terminate this agreement. You may cancel your account at any time. We may suspend or terminate your access for violation of these terms. Upon termination, your right to use the service ends immediately.',
                            'keyPoints' => ['Account cancellation allowed', 'Termination for violation', 'Immediate effect upon termination'],
                            'image' => 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'limitation-liability',
                            'title' => 'Limitation of Liability',
                            'icon' => 'shield',
                            'summary' => 'Limits on our legal responsibility',
                            'content' => 'To the maximum extent permitted by law, SupplyChainPro shall not be liable for indirect, incidental, or consequential damages. Our total liability shall not exceed the amount paid by you for the services.',
                            'keyPoints' => ['No indirect damages', 'Liability capped at fees paid', 'Exceptions where required by law'],
                            'image' => 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'indemnification',
                            'title' => 'Indemnification',
                            'icon' => 'shield',
                            'summary' => 'Your obligation to protect us from claims',
                            'content' => 'You agree to indemnify and hold harmless SupplyChainPro from any claims arising from your use of the service, violation of these terms, or infringement of any third-party rights.',
                            'keyPoints' => ['Indemnify SupplyChainPro', 'Cover legal fees', 'Third-party claims included'],
                            'image' => 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'governing-law',
                            'title' => 'Governing Law',
                            'icon' => 'globe',
                            'summary' => 'Which laws apply to this agreement',
                            'content' => 'These terms shall be governed by the laws of the State of Delaware, without regard to conflict of law principles. Any disputes shall be resolved in the courts of San Francisco County, California.',
                            'keyPoints' => ['Delaware law applies', 'Venue in California', 'No conflict of laws'],
                            'image' => 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'modifications',
                            'title' => 'Modifications to Terms',
                            'icon' => 'refresh',
                            'summary' => 'How we may update these terms',
                            'content' => 'We may update these terms from time to time. We will notify you of material changes via email or through the platform. Your continued use of the service constitutes acceptance of the modified terms.',
                            'keyPoints' => ['Terms may be updated', 'Notice of material changes', 'Continued use equals acceptance'],
                            'image' => 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'contact',
                            'title' => 'Contact Information',
                            'icon' => 'mail',
                            'summary' => 'How to reach our legal team',
                            'content' => 'For questions about these Terms of Service, please contact us at legal@supplychainpro.com or by mail at the address provided on our website. Our legal team will respond to inquiries promptly.',
                            'keyPoints' => ['Email: legal@supplychainpro.com', 'Legal team available', 'Prompt responses'],
                            'image' => 'https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=600&h=400&fit=crop'
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 543,
                'section_key' => 'termsOfService',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => 'Terms of Service',
                    'title' => [
                        'prefix' => 'Our',
                        'highlight' => 'Terms'
                    ],
                    'description' => 'These terms govern your use of SupplyChainPro\'s platform and services. Please read them carefully before using our platform.',
                    'heroImage' => 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=500&fit=crop',
                    'autoPlayCarousel' => true,
                    'effectiveDate' => 'January 1, 2024',
                    'version' => 'v3.0',
                    'stats' => [
                        ['value' => '9', 'label' => 'Key Sections', 'icon' => 'document'],
                        ['value' => '24/7', 'label' => 'Legal Support', 'icon' => 'chat'],
                        ['value' => '99.9%', 'label' => 'SLA', 'icon' => 'chart'],
                        ['value' => 'Global', 'label' => 'Jurisdiction', 'icon' => 'globe']
                    ],
                    'sections' => [
                        [
                            'id' => 'acceptance',
                            'title' => 'Acceptance of Terms',
                            'icon' => 'clipboard',
                            'summary' => 'Agreement to be bound by these terms',
                            'content' => 'By accessing or using SupplyChainPro\'s platform, services, or website, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. These terms constitute a legally binding agreement between you and SupplyChainPro.',
                            'keyPoints' => ['Legally binding agreement', 'Acceptance by use', 'Right to refuse'],
                            'image' => 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'account-registration',
                            'title' => 'Account Registration',
                            'icon' => 'users',
                            'summary' => 'Requirements for creating and maintaining an account',
                            'content' => 'To access certain features, you must register for an account. You agree to provide accurate, current, and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.',
                            'keyPoints' => ['Accurate information required', 'Account security responsibility', 'Age requirements apply'],
                            'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'user-obligations',
                            'title' => 'User Obligations',
                            'icon' => 'shield',
                            'summary' => 'Your responsibilities when using our platform',
                            'content' => 'You agree to use our services in compliance with all applicable laws and regulations. You shall not: misuse the platform, attempt to gain unauthorized access, interfere with service operations, or use the platform for any illegal purpose.',
                            'keyPoints' => ['Comply with laws', 'No unauthorized access', 'No interference with services'],
                            'image' => 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'intellectual-property',
                            'title' => 'Intellectual Property',
                            'icon' => 'badge',
                            'summary' => 'Ownership of platform and user content',
                            'content' => 'SupplyChainPro owns all rights, title, and interest in the platform, including software, trademarks, and content. You retain ownership of your data. You grant us a license to use your data to provide and improve our services.',
                            'keyPoints' => ['Platform owned by SupplyChainPro', 'User retains data ownership', 'License to provide services'],
                            'image' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'payment-terms',
                            'title' => 'Payment Terms',
                            'icon' => 'credit',
                            'summary' => 'Fees, billing, and refund policies',
                            'content' => 'Fees for paid services are described on our pricing page. Payments are due in accordance with your subscription plan. Fees are non-refundable except as required by law. We may change fees with notice.',
                            'keyPoints' => ['Fees as described', 'Non-refundable', 'Fee changes with notice'],
                            'image' => 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'termination',
                            'title' => 'Termination',
                            'icon' => 'x',
                            'summary' => 'How and when this agreement ends',
                            'content' => 'Either party may terminate this agreement. You may cancel your account at any time. We may suspend or terminate your access for violation of these terms. Upon termination, your right to use the service ends immediately.',
                            'keyPoints' => ['Account cancellation allowed', 'Termination for violation', 'Immediate effect upon termination'],
                            'image' => 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'limitation-liability',
                            'title' => 'Limitation of Liability',
                            'icon' => 'shield',
                            'summary' => 'Limits on our legal responsibility',
                            'content' => 'To the maximum extent permitted by law, SupplyChainPro shall not be liable for indirect, incidental, or consequential damages. Our total liability shall not exceed the amount paid by you for the services.',
                            'keyPoints' => ['No indirect damages', 'Liability capped at fees paid', 'Exceptions where required by law'],
                            'image' => 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'governing-law',
                            'title' => 'Governing Law',
                            'icon' => 'globe',
                            'summary' => 'Which laws apply to this agreement',
                            'content' => 'These terms shall be governed by the laws of the State of Delaware, without regard to conflict of law principles. Any disputes shall be resolved in the courts of San Francisco County, California.',
                            'keyPoints' => ['Delaware law applies', 'Venue in California', 'No conflict of laws'],
                            'image' => 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'contact',
                            'title' => 'Contact Information',
                            'icon' => 'mail',
                            'summary' => 'How to reach our legal team',
                            'content' => 'For questions about these Terms of Service, please contact us at legal@supplychainpro.com. Our legal team will respond to inquiries promptly.',
                            'keyPoints' => ['Email: legal@supplychainpro.com', 'Legal team available', 'Prompt responses'],
                            'image' => 'https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=600&h=400&fit=crop'
                        ]
                    ],
                    'customerStories' => [
                        [
                            'id' => 1,
                            'name' => 'Global Retail Corp',
                            'role' => 'CEO',
                            'company' => 'Global Retail Corp',
                            'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop',
                            'quote' => 'The transparent terms and fair policies made signing up with SupplyChainPro an easy decision. Their commitment to customer success is unmatched.',
                            'image' => 'https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 2,
                            'name' => 'HealthTech Solutions',
                            'role' => 'COO',
                            'company' => 'HealthTech Solutions',
                            'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop',
                            'quote' => 'We reviewed their terms carefully and found them to be fair and customer-friendly. The 99.9% SLA gives us confidence.',
                            'image' => 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 3,
                            'name' => 'EuroLogistics',
                            'role' => 'Legal Counsel',
                            'company' => 'EuroLogistics',
                            'avatar' => 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop',
                            'quote' => 'Their terms are clear, transparent, and aligned with international standards. We appreciate the straightforward language and fair policies.',
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop'
                        ]
                    ],
                    'faqs' => [
                        [
                            'question' => 'Can I cancel my account at any time?',
                            'answer' => 'Yes, you can cancel your account at any time through your account settings or by contacting our support team. Upon cancellation, your data will be deleted according to our data retention policy.',
                            'image' => 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop'
                        ],
                        [
                            'question' => 'What happens if I violate the terms?',
                            'answer' => 'Violation of these terms may result in suspension or termination of your account. We will notify you of any violations and provide an opportunity to remedy the issue when possible.'
                        ],
                        [
                            'question' => 'Are fees refundable?',
                            'answer' => 'Fees are generally non-refundable except as required by law. If you believe you\'re entitled to a refund, please contact our support team for review.'
                        ],
                        [
                            'question' => 'How are disputes resolved?',
                            'answer' => 'Disputes are resolved through binding arbitration in San Francisco, California, unless you opt out within 30 days of accepting these terms. Small claims court is also available for qualifying disputes.'
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 544,
                'section_key' => 'termsOfService',
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
