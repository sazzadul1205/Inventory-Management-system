<?php

namespace Database\Seeders\PageRelatedSeeders\SectionVariantSeeder;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SitemapPageSectionVariantSeeder extends Seeder
{

    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Upsert only this page's variants so other page seeders do not get wiped out.
        $variants = [

            // All Pages Index Section Variants
            [
                'id' => 701,
                'section_key' => 'allPagesIndex',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => 'Sitemap',
                    'title' => [
                        'prefix' => 'Site',
                        'highlight' => 'Map'
                    ],
                    'description' => 'Find your way around SupplyChainPro. This sitemap provides an overview of all pages available on our website.',
                    'lastUpdated' => 'April 8, 2026',
                    'sitemapCategories' => [
                        [
                            'id' => 'home',
                            'name' => 'Home & Overview',
                            'icon' => 'home',
                            'color' => 'from-blue-500 to-blue-600',
                            'pages' => [
                                ['name' => 'Home', 'path' => '/', 'description' => 'Main landing page'],
                                ['name' => 'About Us', 'path' => '/about', 'description' => 'Company information and mission'],
                                ['name' => 'Contact', 'path' => '/contact', 'description' => 'Contact information and support'],
                                ['name' => 'Careers', 'path' => '/careers', 'description' => 'Job opportunities at SupplyChainPro'],
                                ['name' => 'Blog', 'path' => '/blog', 'description' => 'Latest news and updates'],
                                ['name' => 'Press', 'path' => '/press', 'description' => 'Press releases and media kit']
                            ]
                        ],
                        [
                            'id' => 'product',
                            'name' => 'Product',
                            'icon' => 'briefcase',
                            'color' => 'from-green-500 to-green-600',
                            'pages' => [
                                ['name' => 'Features', 'path' => '/features', 'description' => 'All product features'],
                                ['name' => 'Pricing', 'path' => '/pricing', 'description' => 'Subscription plans and pricing'],
                                ['name' => 'Demo', 'path' => '/demo', 'description' => 'Request a product demo'],
                                ['name' => 'Integrations', 'path' => '/integrations', 'description' => 'Third-party integrations'],
                                ['name' => 'API Documentation', 'path' => '/api/docs', 'description' => 'API reference and documentation'],
                                ['name' => 'Release Notes', 'path' => '/release-notes', 'description' => 'Version history and updates'],
                                ['name' => 'Roadmap', 'path' => '/roadmap', 'description' => 'Product development roadmap']
                            ]
                        ],
                        [
                            'id' => 'mobile-apps',
                            'name' => 'Mobile Apps',
                            'icon' => 'mobile',
                            'color' => 'from-purple-500 to-purple-600',
                            'pages' => [
                                ['name' => 'iOS App', 'path' => '/mobile/ios', 'description' => 'iOS mobile application'],
                                ['name' => 'Android App', 'path' => '/mobile/android', 'description' => 'Android mobile application'],
                                ['name' => 'Mobile Features', 'path' => '/mobile/features', 'description' => 'Mobile app features'],
                                ['name' => 'App Store Listing', 'path' => '/mobile/app-store', 'description' => 'Apple App Store page'],
                                ['name' => 'Google Play Listing', 'path' => '/mobile/google-play', 'description' => 'Google Play Store page'],
                                ['name' => 'Mobile Security', 'path' => '/mobile/security', 'description' => 'Mobile app security']
                            ]
                        ],
                        [
                            'id' => 'solutions',
                            'name' => 'Solutions',
                            'icon' => 'cloud',
                            'color' => 'from-cyan-500 to-cyan-600',
                            'pages' => [
                                ['name' => 'Supply Chain Management', 'path' => '/solutions/supply-chain', 'description' => 'End-to-end supply chain solutions'],
                                ['name' => 'Inventory Management', 'path' => '/solutions/inventory', 'description' => 'Real-time inventory tracking'],
                                ['name' => 'Warehouse Management', 'path' => '/solutions/warehouse', 'description' => 'Warehouse optimization'],
                                ['name' => 'Logistics & Shipping', 'path' => '/solutions/logistics', 'description' => 'Shipping and logistics management'],
                                ['name' => 'Procurement', 'path' => '/solutions/procurement', 'description' => 'Procurement automation'],
                                ['name' => 'Demand Forecasting', 'path' => '/solutions/forecasting', 'description' => 'AI-powered demand prediction'],
                                ['name' => 'Retail', 'path' => '/solutions/retail', 'description' => 'Solutions for retailers'],
                                ['name' => 'Manufacturing', 'path' => '/solutions/manufacturing', 'description' => 'Solutions for manufacturers'],
                                ['name' => 'Healthcare', 'path' => '/solutions/healthcare', 'description' => 'Healthcare supply chain']
                            ]
                        ],
                        [
                            'id' => 'industries',
                            'name' => 'Industries',
                            'icon' => 'building',
                            'color' => 'from-orange-500 to-orange-600',
                            'pages' => [
                                ['name' => 'Retail & E-commerce', 'path' => '/industries/retail', 'description' => 'Retail supply chain solutions'],
                                ['name' => 'Manufacturing', 'path' => '/industries/manufacturing', 'description' => 'Manufacturing supply chain'],
                                ['name' => 'Healthcare', 'path' => '/industries/healthcare', 'description' => 'Healthcare logistics'],
                                ['name' => 'Pharmaceutical', 'path' => '/industries/pharmaceutical', 'description' => 'Pharma supply chain'],
                                ['name' => 'Automotive', 'path' => '/industries/automotive', 'description' => 'Automotive parts logistics'],
                                ['name' => 'Food & Beverage', 'path' => '/industries/food-beverage', 'description' => 'Food supply chain'],
                                ['name' => 'Logistics & 3PL', 'path' => '/industries/logistics', 'description' => 'Third-party logistics']
                            ]
                        ],
                        [
                            'id' => 'resources',
                            'name' => 'Resources',
                            'icon' => 'document',
                            'color' => 'from-red-500 to-red-600',
                            'pages' => [
                                ['name' => 'Documentation', 'path' => '/docs', 'description' => 'Product documentation'],
                                ['name' => 'Help Center', 'path' => '/help', 'description' => 'Support and FAQs'],
                                ['name' => 'Tutorials', 'path' => '/tutorials', 'description' => 'Video tutorials and guides'],
                                ['name' => 'Webinars', 'path' => '/webinars', 'description' => 'Live and recorded webinars'],
                                ['name' => 'Case Studies', 'path' => '/case-studies', 'description' => 'Customer success stories'],
                                ['name' => 'White Papers', 'path' => '/white-papers', 'description' => 'In-depth research papers'],
                                ['name' => 'E-books', 'path' => '/ebooks', 'description' => 'Free e-books and guides'],
                                ['name' => 'Infographics', 'path' => '/infographics', 'description' => 'Visual data insights'],
                                ['name' => 'Glossary', 'path' => '/glossary', 'description' => 'Supply chain terminology']
                            ]
                        ],
                        [
                            'id' => 'support',
                            'name' => 'Support',
                            'icon' => 'heart',
                            'color' => 'from-pink-500 to-pink-600',
                            'pages' => [
                                ['name' => 'Support Center', 'path' => '/support', 'description' => 'Customer support portal'],
                                ['name' => 'FAQs', 'path' => '/faq', 'description' => 'Frequently asked questions'],
                                ['name' => 'Knowledge Base', 'path' => '/knowledge-base', 'description' => 'Articles and guides'],
                                ['name' => 'Community Forum', 'path' => '/community', 'description' => 'User community'],
                                ['name' => 'Status Page', 'path' => '/status', 'description' => 'System status and uptime'],
                                ['name' => 'Submit Ticket', 'path' => '/support/ticket', 'description' => 'Create support ticket'],
                                ['name' => 'Live Chat', 'path' => '/support/chat', 'description' => 'Live chat support']
                            ]
                        ],
                        [
                            'id' => 'legal',
                            'name' => 'Legal & Compliance',
                            'icon' => 'scale',
                            'color' => 'from-indigo-500 to-indigo-600',
                            'pages' => [
                                ['name' => 'Terms of Service', 'path' => '/legal/terms', 'description' => 'Terms and conditions'],
                                ['name' => 'Privacy Policy', 'path' => '/legal/privacy', 'description' => 'Privacy practices'],
                                ['name' => 'Cookie Policy', 'path' => '/legal/cookies', 'description' => 'Cookie usage'],
                                ['name' => 'GDPR Compliance', 'path' => '/legal/gdpr', 'description' => 'GDPR information'],
                                ['name' => 'Data Processing Agreement', 'path' => '/legal/dpa', 'description' => 'DPA for customers'],
                                ['name' => 'Security Policy', 'path' => '/legal/security', 'description' => 'Security practices'],
                                ['name' => 'Acceptable Use Policy', 'path' => '/legal/aup', 'description' => 'AUP guidelines'],
                                ['name' => 'SubProcessors', 'path' => '/legal/subprocessors', 'description' => 'List of subprocessors'],
                                ['name' => 'Compliance Reports', 'path' => '/legal/compliance', 'description' => 'SOC 2, ISO reports'],
                                ['name' => 'Data Request Form', 'path' => '/legal/data-request', 'description' => 'Submit DSAR']
                            ]
                        ],
                        [
                            'id' => 'company',
                            'name' => 'Company',
                            'icon' => 'building',
                            'color' => 'from-teal-500 to-teal-600',
                            'pages' => [
                                ['name' => 'About Us', 'path' => '/company/about', 'description' => 'Company overview'],
                                ['name' => 'Leadership', 'path' => '/company/leadership', 'description' => 'Executive team'],
                                ['name' => 'Mission & Values', 'path' => '/company/values', 'description' => 'Core values'],
                                ['name' => 'Newsroom', 'path' => '/company/news', 'description' => 'Latest news'],
                                ['name' => 'Events', 'path' => '/company/events', 'description' => 'Upcoming events'],
                                ['name' => 'Partners', 'path' => '/company/partners', 'description' => 'Partner program'],
                                ['name' => 'Customers', 'path' => '/company/customers', 'description' => 'Customer stories']
                            ]
                        ],
                        [
                            'id' => 'security',
                            'name' => 'Security',
                            'icon' => 'shield',
                            'color' => 'from-emerald-500 to-emerald-600',
                            'pages' => [
                                ['name' => 'Security Overview', 'path' => '/security/overview', 'description' => 'Security program'],
                                ['name' => 'Security Certifications', 'path' => '/security/certifications', 'description' => 'SOC 2, ISO 27001'],
                                ['name' => 'Vulnerability Disclosure', 'path' => '/security/disclosure', 'description' => 'Report vulnerabilities'],
                                ['name' => 'Bug Bounty Program', 'path' => '/security/bug-bounty', 'description' => 'Security researchers'],
                                ['name' => 'Data Encryption', 'path' => '/security/encryption', 'description' => 'Encryption standards'],
                                ['name' => 'Incident Response', 'path' => '/security/incident-response', 'description' => 'Breach procedures']
                            ]
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 702,
                'section_key' => 'allPagesIndex',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => 'Sitemap',
                    'title' => [
                        'prefix' => 'Site',
                        'highlight' => 'Map'
                    ],
                    'description' => 'Find your way around SupplyChainPro. This sitemap provides an overview of all pages available on our website.',
                    'lastUpdated' => 'April 8, 2026',
                    'popularPages' => [
                        ['name' => 'Home', 'path' => '/', 'views' => '1.2M', 'trend' => '+12%'],
                        ['name' => 'Pricing', 'path' => '/pricing', 'views' => '890K', 'trend' => '+8%'],
                        ['name' => 'Features', 'path' => '/features', 'views' => '756K', 'trend' => '+15%'],
                        ['name' => 'Android App', 'path' => '/mobile/android', 'views' => '234K', 'trend' => '+25%'],
                        ['name' => 'iOS App', 'path' => '/mobile/ios', 'views' => '198K', 'trend' => '+18%'],
                        ['name' => 'API Documentation', 'path' => '/api/docs', 'views' => '167K', 'trend' => '+10%'],
                        ['name' => 'Contact Support', 'path' => '/support', 'views' => '145K', 'trend' => '+5%'],
                        ['name' => 'Terms of Service', 'path' => '/legal/terms', 'views' => '98K', 'trend' => '-2%'],
                        ['name' => 'Privacy Policy', 'path' => '/legal/privacy', 'views' => '87K', 'trend' => '+3%'],
                        ['name' => 'Case Studies', 'path' => '/case-studies', 'views' => '76K', 'trend' => '+22%']
                    ],
                    'recentlyUpdated' => [
                        ['name' => 'GDPR Compliance', 'path' => '/legal/gdpr', 'date' => 'April 8, 2026', 'author' => 'Legal Team'],
                        ['name' => 'Security Policy', 'path' => '/legal/security', 'date' => 'April 5, 2026', 'author' => 'Security Team'],
                        ['name' => 'Data Processing Agreement', 'path' => '/legal/dpa', 'date' => 'April 1, 2026', 'author' => 'Legal Team'],
                        ['name' => 'Android App v3.0', 'path' => '/mobile/android', 'date' => 'March 28, 2026', 'author' => 'Mobile Team'],
                        ['name' => 'iOS App v3.0', 'path' => '/mobile/ios', 'date' => 'March 28, 2026', 'author' => 'Mobile Team'],
                        ['name' => 'Cookie Policy', 'path' => '/legal/cookies', 'date' => 'March 25, 2026', 'author' => 'Legal Team'],
                        ['name' => 'Acceptable Use Policy', 'path' => '/legal/aup', 'date' => 'March 20, 2026', 'author' => 'Legal Team'],
                        ['name' => 'Supply Chain Guide', 'path' => '/resources/supply-chain-guide', 'date' => 'March 15, 2026', 'author' => 'Content Team']
                    ],
                    'sitemapCategories' => [
                        [
                            'id' => 'home',
                            'name' => 'Home & Overview',
                            'icon' => 'home',
                            'color' => 'from-blue-500 to-blue-600',
                            'count' => 6,
                            'pages' => [
                                ['name' => 'Home', 'path' => '/', 'description' => 'Main landing page', 'updated' => 'April 8, 2026'],
                                ['name' => 'About Us', 'path' => '/about', 'description' => 'Company information and mission', 'updated' => 'March 15, 2026'],
                                ['name' => 'Contact', 'path' => '/contact', 'description' => 'Contact information and support', 'updated' => 'April 1, 2026'],
                                ['name' => 'Careers', 'path' => '/careers', 'description' => 'Job opportunities at SupplyChainPro', 'updated' => 'March 20, 2026'],
                                ['name' => 'Blog', 'path' => '/blog', 'description' => 'Latest news and updates', 'updated' => 'April 7, 2026'],
                                ['name' => 'Press', 'path' => '/press', 'description' => 'Press releases and media kit', 'updated' => 'March 10, 2026']
                            ]
                        ],
                        [
                            'id' => 'product',
                            'name' => 'Product',
                            'icon' => 'briefcase',
                            'color' => 'from-green-500 to-green-600',
                            'count' => 7,
                            'pages' => [
                                ['name' => 'Features', 'path' => '/features', 'description' => 'All product features', 'updated' => 'April 5, 2026'],
                                ['name' => 'Pricing', 'path' => '/pricing', 'description' => 'Subscription plans and pricing', 'updated' => 'March 25, 2026'],
                                ['name' => 'Demo', 'path' => '/demo', 'description' => 'Request a product demo', 'updated' => 'April 2, 2026'],
                                ['name' => 'Integrations', 'path' => '/integrations', 'description' => 'Third-party integrations', 'updated' => 'March 28, 2026'],
                                ['name' => 'API Documentation', 'path' => '/api/docs', 'description' => 'API reference and documentation', 'updated' => 'April 6, 2026'],
                                ['name' => 'Release Notes', 'path' => '/release-notes', 'description' => 'Version history and updates', 'updated' => 'March 30, 2026'],
                                ['name' => 'Roadmap', 'path' => '/roadmap', 'description' => 'Product development roadmap', 'updated' => 'April 3, 2026']
                            ]
                        ],
                        [
                            'id' => 'mobile-apps',
                            'name' => 'Mobile Apps',
                            'icon' => 'mobile',
                            'color' => 'from-purple-500 to-purple-600',
                            'count' => 6,
                            'pages' => [
                                ['name' => 'iOS App', 'path' => '/mobile/ios', 'description' => 'iOS mobile application', 'updated' => 'March 28, 2026'],
                                ['name' => 'Android App', 'path' => '/mobile/android', 'description' => 'Android mobile application', 'updated' => 'March 28, 2026'],
                                ['name' => 'Mobile Features', 'path' => '/mobile/features', 'description' => 'Mobile app features', 'updated' => 'March 15, 2026'],
                                ['name' => 'App Store Listing', 'path' => '/mobile/app-store', 'description' => 'Apple App Store page', 'updated' => 'March 28, 2026'],
                                ['name' => 'Google Play Listing', 'path' => '/mobile/google-play', 'description' => 'Google Play Store page', 'updated' => 'March 28, 2026'],
                                ['name' => 'Mobile Security', 'path' => '/mobile/security', 'description' => 'Mobile app security', 'updated' => 'April 1, 2026']
                            ]
                        ],
                        [
                            'id' => 'solutions',
                            'name' => 'Solutions',
                            'icon' => 'cloud',
                            'color' => 'from-cyan-500 to-cyan-600',
                            'count' => 9,
                            'pages' => [
                                ['name' => 'Supply Chain Management', 'path' => '/solutions/supply-chain', 'description' => 'End-to-end supply chain solutions', 'updated' => 'March 20, 2026'],
                                ['name' => 'Inventory Management', 'path' => '/solutions/inventory', 'description' => 'Real-time inventory tracking', 'updated' => 'March 18, 2026'],
                                ['name' => 'Warehouse Management', 'path' => '/solutions/warehouse', 'description' => 'Warehouse optimization', 'updated' => 'March 22, 2026'],
                                ['name' => 'Logistics & Shipping', 'path' => '/solutions/logistics', 'description' => 'Shipping and logistics management', 'updated' => 'March 25, 2026'],
                                ['name' => 'Procurement', 'path' => '/solutions/procurement', 'description' => 'Procurement automation', 'updated' => 'March 19, 2026'],
                                ['name' => 'Demand Forecasting', 'path' => '/solutions/forecasting', 'description' => 'AI-powered demand prediction', 'updated' => 'March 30, 2026'],
                                ['name' => 'Retail', 'path' => '/solutions/retail', 'description' => 'Solutions for retailers', 'updated' => 'March 21, 2026'],
                                ['name' => 'Manufacturing', 'path' => '/solutions/manufacturing', 'description' => 'Solutions for manufacturers', 'updated' => 'March 23, 2026'],
                                ['name' => 'Healthcare', 'path' => '/solutions/healthcare', 'description' => 'Healthcare supply chain', 'updated' => 'March 26, 2026']
                            ]
                        ],
                        [
                            'id' => 'industries',
                            'name' => 'Industries',
                            'icon' => 'building',
                            'color' => 'from-orange-500 to-orange-600',
                            'count' => 7,
                            'pages' => [
                                ['name' => 'Retail & E-commerce', 'path' => '/industries/retail', 'description' => 'Retail supply chain solutions', 'updated' => 'March 15, 2026'],
                                ['name' => 'Manufacturing', 'path' => '/industries/manufacturing', 'description' => 'Manufacturing supply chain', 'updated' => 'March 16, 2026'],
                                ['name' => 'Healthcare', 'path' => '/industries/healthcare', 'description' => 'Healthcare logistics', 'updated' => 'March 17, 2026'],
                                ['name' => 'Pharmaceutical', 'path' => '/industries/pharmaceutical', 'description' => 'Pharma supply chain', 'updated' => 'March 18, 2026'],
                                ['name' => 'Automotive', 'path' => '/industries/automotive', 'description' => 'Automotive parts logistics', 'updated' => 'March 19, 2026'],
                                ['name' => 'Food & Beverage', 'path' => '/industries/food-beverage', 'description' => 'Food supply chain', 'updated' => 'March 20, 2026'],
                                ['name' => 'Logistics & 3PL', 'path' => '/industries/logistics', 'description' => 'Third-party logistics', 'updated' => 'March 21, 2026']
                            ]
                        ],
                        [
                            'id' => 'resources',
                            'name' => 'Resources',
                            'icon' => 'document',
                            'color' => 'from-red-500 to-red-600',
                            'count' => 9,
                            'pages' => [
                                ['name' => 'Documentation', 'path' => '/docs', 'description' => 'Product documentation', 'updated' => 'April 5, 2026'],
                                ['name' => 'Help Center', 'path' => '/help', 'description' => 'Support and FAQs', 'updated' => 'April 4, 2026'],
                                ['name' => 'Tutorials', 'path' => '/tutorials', 'description' => 'Video tutorials and guides', 'updated' => 'April 3, 2026'],
                                ['name' => 'Webinars', 'path' => '/webinars', 'description' => 'Live and recorded webinars', 'updated' => 'April 2, 2026'],
                                ['name' => 'Case Studies', 'path' => '/case-studies', 'description' => 'Customer success stories', 'updated' => 'April 1, 2026'],
                                ['name' => 'White Papers', 'path' => '/white-papers', 'description' => 'In-depth research papers', 'updated' => 'March 30, 2026'],
                                ['name' => 'E-books', 'path' => '/ebooks', 'description' => 'Free e-books and guides', 'updated' => 'March 28, 2026'],
                                ['name' => 'Infographics', 'path' => '/infographics', 'description' => 'Visual data insights', 'updated' => 'March 25, 2026'],
                                ['name' => 'Glossary', 'path' => '/glossary', 'description' => 'Supply chain terminology', 'updated' => 'March 20, 2026']
                            ]
                        ],
                        [
                            'id' => 'support',
                            'name' => 'Support',
                            'icon' => 'heart',
                            'color' => 'from-pink-500 to-pink-600',
                            'count' => 7,
                            'pages' => [
                                ['name' => 'Support Center', 'path' => '/support', 'description' => 'Customer support portal', 'updated' => 'April 7, 2026'],
                                ['name' => 'FAQs', 'path' => '/faq', 'description' => 'Frequently asked questions', 'updated' => 'April 6, 2026'],
                                ['name' => 'Knowledge Base', 'path' => '/knowledge-base', 'description' => 'Articles and guides', 'updated' => 'April 5, 2026'],
                                ['name' => 'Community Forum', 'path' => '/community', 'description' => 'User community', 'updated' => 'April 4, 2026'],
                                ['name' => 'Status Page', 'path' => '/status', 'description' => 'System status and uptime', 'updated' => 'April 8, 2026'],
                                ['name' => 'Submit Ticket', 'path' => '/support/ticket', 'description' => 'Create support ticket', 'updated' => 'April 3, 2026'],
                                ['name' => 'Live Chat', 'path' => '/support/chat', 'description' => 'Live chat support', 'updated' => 'April 2, 2026']
                            ]
                        ],
                        [
                            'id' => 'legal',
                            'name' => 'Legal & Compliance',
                            'icon' => 'scale',
                            'color' => 'from-indigo-500 to-indigo-600',
                            'count' => 10,
                            'pages' => [
                                ['name' => 'Terms of Service', 'path' => '/legal/terms', 'description' => 'Terms and conditions', 'updated' => 'April 8, 2026'],
                                ['name' => 'Privacy Policy', 'path' => '/legal/privacy', 'description' => 'Privacy practices', 'updated' => 'April 8, 2026'],
                                ['name' => 'Cookie Policy', 'path' => '/legal/cookies', 'description' => 'Cookie usage', 'updated' => 'April 8, 2026'],
                                ['name' => 'GDPR Compliance', 'path' => '/legal/gdpr', 'description' => 'GDPR information', 'updated' => 'April 8, 2026'],
                                ['name' => 'Data Processing Agreement', 'path' => '/legal/dpa', 'description' => 'DPA for customers', 'updated' => 'April 1, 2026'],
                                ['name' => 'Security Policy', 'path' => '/legal/security', 'description' => 'Security practices', 'updated' => 'April 5, 2026'],
                                ['name' => 'Acceptable Use Policy', 'path' => '/legal/aup', 'description' => 'AUP guidelines', 'updated' => 'March 20, 2026'],
                                ['name' => 'Subprocessors', 'path' => '/legal/subprocessors', 'description' => 'List of subprocessors', 'updated' => 'March 15, 2026'],
                                ['name' => 'Compliance Reports', 'path' => '/legal/compliance', 'description' => 'SOC 2, ISO reports', 'updated' => 'March 10, 2026'],
                                ['name' => 'Data Request Form', 'path' => '/legal/data-request', 'description' => 'Submit DSAR', 'updated' => 'March 5, 2026']
                            ]
                        ],
                        [
                            'id' => 'company',
                            'name' => 'Company',
                            'icon' => 'building',
                            'color' => 'from-teal-500 to-teal-600',
                            'count' => 7,
                            'pages' => [
                                ['name' => 'About Us', 'path' => '/company/about', 'description' => 'Company overview', 'updated' => 'March 15, 2026'],
                                ['name' => 'Leadership', 'path' => '/company/leadership', 'description' => 'Executive team', 'updated' => 'March 10, 2026'],
                                ['name' => 'Mission & Values', 'path' => '/company/values', 'description' => 'Core values', 'updated' => 'March 5, 2026'],
                                ['name' => 'Newsroom', 'path' => '/company/news', 'description' => 'Latest news', 'updated' => 'April 7, 2026'],
                                ['name' => 'Events', 'path' => '/company/events', 'description' => 'Upcoming events', 'updated' => 'April 1, 2026'],
                                ['name' => 'Partners', 'path' => '/company/partners', 'description' => 'Partner program', 'updated' => 'March 25, 2026'],
                                ['name' => 'Customers', 'path' => '/company/customers', 'description' => 'Customer stories', 'updated' => 'March 20, 2026']
                            ]
                        ],
                        [
                            'id' => 'security',
                            'name' => 'Security',
                            'icon' => 'shield',
                            'color' => 'from-emerald-500 to-emerald-600',
                            'count' => 6,
                            'pages' => [
                                ['name' => 'Security Overview', 'path' => '/security/overview', 'description' => 'Security program', 'updated' => 'April 5, 2026'],
                                ['name' => 'Security Certifications', 'path' => '/security/certifications', 'description' => 'SOC 2, ISO 27001', 'updated' => 'April 4, 2026'],
                                ['name' => 'Vulnerability Disclosure', 'path' => '/security/disclosure', 'description' => 'Report vulnerabilities', 'updated' => 'April 3, 2026'],
                                ['name' => 'Bug Bounty Program', 'path' => '/security/bug-bounty', 'description' => 'Security researchers', 'updated' => 'April 2, 2026'],
                                ['name' => 'Data Encryption', 'path' => '/security/encryption', 'description' => 'Encryption standards', 'updated' => 'April 1, 2026'],
                                ['name' => 'Incident Response', 'path' => '/security/incident-response', 'description' => 'Breach procedures', 'updated' => 'March 30, 2026']
                            ]
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 703,
                'section_key' => 'allPagesIndex',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => 'Sitemap Navigator',
                    'title' => [
                        'prefix' => 'Complete Site',
                        'highlight' => 'Index'
                    ],
                    'description' => 'Your complete navigation guide to all pages, resources, and legal documentation on SupplyChainPro.',
                    'lastUpdated' => 'April 8, 2026',
                    'autoPlayCarousel' => true,
                    'featuredSections' => [
                        ['title' => 'Mobile Apps', 'description' => 'Download our iOS and Android apps for on-the-go supply chain management.', 'icon' => 'mobile', 'color' => 'from-purple-500 to-purple-600', 'path' => '/mobile', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'],
                        ['title' => 'Security & Compliance', 'description' => 'Learn about our security certifications and compliance frameworks.', 'icon' => 'shield', 'color' => 'from-emerald-500 to-emerald-600', 'path' => '/security', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'],
                        ['title' => 'Developer Resources', 'description' => 'Access our API documentation, SDKs, and integration guides.', 'icon' => 'chip', 'color' => 'from-cyan-500 to-cyan-600', 'path' => '/api/docs', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFunflies.mp4'],
                        ['title' => 'Customer Support', 'description' => 'Get help from our support team or browse our knowledge base.', 'icon' => 'heart', 'color' => 'from-pink-500 to-pink-600', 'path' => '/support', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4']
                    ],
                    'tabs' => [
                        ['id' => 'sitemap', 'label' => 'Sitemap', 'icon' => 'view-grid'],
                        ['id' => 'popular', 'label' => 'Popular Pages', 'icon' => 'star'],
                        ['id' => 'new', 'label' => 'New & Updated', 'icon' => 'sparkles'],
                        ['id' => 'categories', 'label' => 'Categories', 'icon' => 'folder']
                    ],
                    'popularPages' => [
                        ['name' => 'Home', 'path' => '/', 'views' => '1.2M', 'trend' => '+12%'],
                        ['name' => 'Pricing', 'path' => '/pricing', 'views' => '890K', 'trend' => '+8%'],
                        ['name' => 'Features', 'path' => '/features', 'views' => '756K', 'trend' => '+15%'],
                        ['name' => 'Android App', 'path' => '/mobile/android', 'views' => '234K', 'trend' => '+25%'],
                        ['name' => 'iOS App', 'path' => '/mobile/ios', 'views' => '198K', 'trend' => '+18%'],
                        ['name' => 'API Documentation', 'path' => '/api/docs', 'views' => '167K', 'trend' => '+10%'],
                        ['name' => 'Contact Support', 'path' => '/support', 'views' => '145K', 'trend' => '+5%'],
                        ['name' => 'Terms of Service', 'path' => '/legal/terms', 'views' => '98K', 'trend' => '-2%'],
                        ['name' => 'Privacy Policy', 'path' => '/legal/privacy', 'views' => '87K', 'trend' => '+3%'],
                        ['name' => 'Case Studies', 'path' => '/case-studies', 'views' => '76K', 'trend' => '+22%']
                    ],
                    'recentlyUpdated' => [
                        ['name' => 'GDPR Compliance', 'path' => '/legal/gdpr', 'date' => 'April 8, 2026', 'author' => 'Legal Team'],
                        ['name' => 'Security Policy', 'path' => '/legal/security', 'date' => 'April 5, 2026', 'author' => 'Security Team'],
                        ['name' => 'Data Processing Agreement', 'path' => '/legal/dpa', 'date' => 'April 1, 2026', 'author' => 'Legal Team'],
                        ['name' => 'Android App v3.0', 'path' => '/mobile/android', 'date' => 'March 28, 2026', 'author' => 'Mobile Team'],
                        ['name' => 'iOS App v3.0', 'path' => '/mobile/ios', 'date' => 'March 28, 2026', 'author' => 'Mobile Team'],
                        ['name' => 'Cookie Policy', 'path' => '/legal/cookies', 'date' => 'March 25, 2026', 'author' => 'Legal Team'],
                        ['name' => 'Acceptable Use Policy', 'path' => '/legal/aup', 'date' => 'March 20, 2026', 'author' => 'Legal Team'],
                        ['name' => 'Supply Chain Guide', 'path' => '/resources/supply-chain-guide', 'date' => 'March 15, 2026', 'author' => 'Content Team']
                    ],
                    'sitemapCategories' => [
                        [
                            'id' => 'home',
                            'name' => 'Home & Overview',
                            'icon' => 'home',
                            'color' => 'from-blue-500 to-blue-600',
                            'pages' => [
                                ['name' => 'Home', 'path' => '/', 'description' => 'Main landing page', 'updated' => 'April 8, 2026'],
                                ['name' => 'About Us', 'path' => '/about', 'description' => 'Company information and mission', 'updated' => 'March 15, 2026'],
                                ['name' => 'Contact', 'path' => '/contact', 'description' => 'Contact information and support', 'updated' => 'April 1, 2026'],
                                ['name' => 'Careers', 'path' => '/careers', 'description' => 'Job opportunities at SupplyChainPro', 'updated' => 'March 20, 2026'],
                                ['name' => 'Blog', 'path' => '/blog', 'description' => 'Latest news and updates', 'updated' => 'April 7, 2026'],
                                ['name' => 'Press', 'path' => '/press', 'description' => 'Press releases and media kit', 'updated' => 'March 10, 2026']
                            ]
                        ],
                        [
                            'id' => 'product',
                            'name' => 'Product',
                            'icon' => 'briefcase',
                            'color' => 'from-green-500 to-green-600',
                            'pages' => [
                                ['name' => 'Features', 'path' => '/features', 'description' => 'All product features', 'updated' => 'April 5, 2026'],
                                ['name' => 'Pricing', 'path' => '/pricing', 'description' => 'Subscription plans and pricing', 'updated' => 'March 25, 2026'],
                                ['name' => 'Demo', 'path' => '/demo', 'description' => 'Request a product demo', 'updated' => 'April 2, 2026'],
                                ['name' => 'Integrations', 'path' => '/integrations', 'description' => 'Third-party integrations', 'updated' => 'March 28, 2026'],
                                ['name' => 'API Documentation', 'path' => '/api/docs', 'description' => 'API reference and documentation', 'updated' => 'April 6, 2026'],
                                ['name' => 'Release Notes', 'path' => '/release-notes', 'description' => 'Version history and updates', 'updated' => 'March 30, 2026'],
                                ['name' => 'Roadmap', 'path' => '/roadmap', 'description' => 'Product development roadmap', 'updated' => 'April 3, 2026']
                            ]
                        ],
                        [
                            'id' => 'mobile-apps',
                            'name' => 'Mobile Apps',
                            'icon' => 'mobile',
                            'color' => 'from-purple-500 to-purple-600',
                            'pages' => [
                                ['name' => 'iOS App', 'path' => '/mobile/ios', 'description' => 'iOS mobile application', 'updated' => 'March 28, 2026'],
                                ['name' => 'Android App', 'path' => '/mobile/android', 'description' => 'Android mobile application', 'updated' => 'March 28, 2026'],
                                ['name' => 'Mobile Features', 'path' => '/mobile/features', 'description' => 'Mobile app features', 'updated' => 'March 15, 2026'],
                                ['name' => 'App Store Listing', 'path' => '/mobile/app-store', 'description' => 'Apple App Store page', 'updated' => 'March 28, 2026'],
                                ['name' => 'Google Play Listing', 'path' => '/mobile/google-play', 'description' => 'Google Play Store page', 'updated' => 'March 28, 2026'],
                                ['name' => 'Mobile Security', 'path' => '/mobile/security', 'description' => 'Mobile app security', 'updated' => 'April 1, 2026']
                            ]
                        ],
                        [
                            'id' => 'solutions',
                            'name' => 'Solutions',
                            'icon' => 'cloud',
                            'color' => 'from-cyan-500 to-cyan-600',
                            'pages' => [
                                ['name' => 'Supply Chain Management', 'path' => '/solutions/supply-chain', 'description' => 'End-to-end supply chain solutions', 'updated' => 'March 20, 2026'],
                                ['name' => 'Inventory Management', 'path' => '/solutions/inventory', 'description' => 'Real-time inventory tracking', 'updated' => 'March 18, 2026'],
                                ['name' => 'Warehouse Management', 'path' => '/solutions/warehouse', 'description' => 'Warehouse optimization', 'updated' => 'March 22, 2026'],
                                ['name' => 'Logistics & Shipping', 'path' => '/solutions/logistics', 'description' => 'Shipping and logistics management', 'updated' => 'March 25, 2026'],
                                ['name' => 'Procurement', 'path' => '/solutions/procurement', 'description' => 'Procurement automation', 'updated' => 'March 19, 2026'],
                                ['name' => 'Demand Forecasting', 'path' => '/solutions/forecasting', 'description' => 'AI-powered demand prediction', 'updated' => 'March 30, 2026'],
                                ['name' => 'Retail', 'path' => '/solutions/retail', 'description' => 'Solutions for retailers', 'updated' => 'March 21, 2026'],
                                ['name' => 'Manufacturing', 'path' => '/solutions/manufacturing', 'description' => 'Solutions for manufacturers', 'updated' => 'March 23, 2026'],
                                ['name' => 'Healthcare', 'path' => '/solutions/healthcare', 'description' => 'Healthcare supply chain', 'updated' => 'March 26, 2026']
                            ]
                        ],
                        [
                            'id' => 'industries',
                            'name' => 'Industries',
                            'icon' => 'building',
                            'color' => 'from-orange-500 to-orange-600',
                            'pages' => [
                                ['name' => 'Retail & E-commerce', 'path' => '/industries/retail', 'description' => 'Retail supply chain solutions', 'updated' => 'March 15, 2026'],
                                ['name' => 'Manufacturing', 'path' => '/industries/manufacturing', 'description' => 'Manufacturing supply chain', 'updated' => 'March 16, 2026'],
                                ['name' => 'Healthcare', 'path' => '/industries/healthcare', 'description' => 'Healthcare logistics', 'updated' => 'March 17, 2026'],
                                ['name' => 'Pharmaceutical', 'path' => '/industries/pharmaceutical', 'description' => 'Pharma supply chain', 'updated' => 'March 18, 2026'],
                                ['name' => 'Automotive', 'path' => '/industries/automotive', 'description' => 'Automotive parts logistics', 'updated' => 'March 19, 2026'],
                                ['name' => 'Food & Beverage', 'path' => '/industries/food-beverage', 'description' => 'Food supply chain', 'updated' => 'March 20, 2026'],
                                ['name' => 'Logistics & 3PL', 'path' => '/industries/logistics', 'description' => 'Third-party logistics', 'updated' => 'March 21, 2026']
                            ]
                        ],
                        [
                            'id' => 'resources',
                            'name' => 'Resources',
                            'icon' => 'document',
                            'color' => 'from-red-500 to-red-600',
                            'pages' => [
                                ['name' => 'Documentation', 'path' => '/docs', 'description' => 'Product documentation', 'updated' => 'April 5, 2026'],
                                ['name' => 'Help Center', 'path' => '/help', 'description' => 'Support and FAQs', 'updated' => 'April 4, 2026'],
                                ['name' => 'Tutorials', 'path' => '/tutorials', 'description' => 'Video tutorials and guides', 'updated' => 'April 3, 2026'],
                                ['name' => 'Webinars', 'path' => '/webinars', 'description' => 'Live and recorded webinars', 'updated' => 'April 2, 2026'],
                                ['name' => 'Case Studies', 'path' => '/case-studies', 'description' => 'Customer success stories', 'updated' => 'April 1, 2026'],
                                ['name' => 'White Papers', 'path' => '/white-papers', 'description' => 'In-depth research papers', 'updated' => 'March 30, 2026'],
                                ['name' => 'E-books', 'path' => '/ebooks', 'description' => 'Free e-books and guides', 'updated' => 'March 28, 2026'],
                                ['name' => 'Infographics', 'path' => '/infographics', 'description' => 'Visual data insights', 'updated' => 'March 25, 2026'],
                                ['name' => 'Glossary', 'path' => '/glossary', 'description' => 'Supply chain terminology', 'updated' => 'March 20, 2026']
                            ]
                        ],
                        [
                            'id' => 'support',
                            'name' => 'Support',
                            'icon' => 'heart',
                            'color' => 'from-pink-500 to-pink-600',
                            'pages' => [
                                ['name' => 'Support Center', 'path' => '/support', 'description' => 'Customer support portal', 'updated' => 'April 7, 2026'],
                                ['name' => 'FAQs', 'path' => '/faq', 'description' => 'Frequently asked questions', 'updated' => 'April 6, 2026'],
                                ['name' => 'Knowledge Base', 'path' => '/knowledge-base', 'description' => 'Articles and guides', 'updated' => 'April 5, 2026'],
                                ['name' => 'Community Forum', 'path' => '/community', 'description' => 'User community', 'updated' => 'April 4, 2026'],
                                ['name' => 'Status Page', 'path' => '/status', 'description' => 'System status and uptime', 'updated' => 'April 8, 2026'],
                                ['name' => 'Submit Ticket', 'path' => '/support/ticket', 'description' => 'Create support ticket', 'updated' => 'April 3, 2026'],
                                ['name' => 'Live Chat', 'path' => '/support/chat', 'description' => 'Live chat support', 'updated' => 'April 2, 2026']
                            ]
                        ],
                        [
                            'id' => 'legal',
                            'name' => 'Legal & Compliance',
                            'icon' => 'scale',
                            'color' => 'from-indigo-500 to-indigo-600',
                            'pages' => [
                                ['name' => 'Terms of Service', 'path' => '/legal/terms', 'description' => 'Terms and conditions', 'updated' => 'April 8, 2026'],
                                ['name' => 'Privacy Policy', 'path' => '/legal/privacy', 'description' => 'Privacy practices', 'updated' => 'April 8, 2026'],
                                ['name' => 'Cookie Policy', 'path' => '/legal/cookies', 'description' => 'Cookie usage', 'updated' => 'April 8, 2026'],
                                ['name' => 'GDPR Compliance', 'path' => '/legal/gdpr', 'description' => 'GDPR information', 'updated' => 'April 8, 2026'],
                                ['name' => 'Data Processing Agreement', 'path' => '/legal/dpa', 'description' => 'DPA for customers', 'updated' => 'April 1, 2026'],
                                ['name' => 'Security Policy', 'path' => '/legal/security', 'description' => 'Security practices', 'updated' => 'April 5, 2026'],
                                ['name' => 'Acceptable Use Policy', 'path' => '/legal/aup', 'description' => 'AUP guidelines', 'updated' => 'March 20, 2026'],
                                ['name' => 'Subprocessors', 'path' => '/legal/subprocessors', 'description' => 'List of subprocessors', 'updated' => 'March 15, 2026'],
                                ['name' => 'Compliance Reports', 'path' => '/legal/compliance', 'description' => 'SOC 2, ISO reports', 'updated' => 'March 10, 2026'],
                                ['name' => 'Data Request Form', 'path' => '/legal/data-request', 'description' => 'Submit DSAR', 'updated' => 'March 5, 2026']
                            ]
                        ],
                        [
                            'id' => 'company',
                            'name' => 'Company',
                            'icon' => 'building',
                            'color' => 'from-teal-500 to-teal-600',
                            'pages' => [
                                ['name' => 'About Us', 'path' => '/company/about', 'description' => 'Company overview', 'updated' => 'March 15, 2026'],
                                ['name' => 'Leadership', 'path' => '/company/leadership', 'description' => 'Executive team', 'updated' => 'March 10, 2026'],
                                ['name' => 'Mission & Values', 'path' => '/company/values', 'description' => 'Core values', 'updated' => 'March 5, 2026'],
                                ['name' => 'Newsroom', 'path' => '/company/news', 'description' => 'Latest news', 'updated' => 'April 7, 2026'],
                                ['name' => 'Events', 'path' => '/company/events', 'description' => 'Upcoming events', 'updated' => 'April 1, 2026'],
                                ['name' => 'Partners', 'path' => '/company/partners', 'description' => 'Partner program', 'updated' => 'March 25, 2026'],
                                ['name' => 'Customers', 'path' => '/company/customers', 'description' => 'Customer stories', 'updated' => 'March 20, 2026']
                            ]
                        ],
                        [
                            'id' => 'security',
                            'name' => 'Security',
                            'icon' => 'shield',
                            'color' => 'from-emerald-500 to-emerald-600',
                            'pages' => [
                                ['name' => 'Security Overview', 'path' => '/security/overview', 'description' => 'Security program', 'updated' => 'April 5, 2026'],
                                ['name' => 'Security Certifications', 'path' => '/security/certifications', 'description' => 'SOC 2, ISO 27001', 'updated' => 'April 4, 2026'],
                                ['name' => 'Vulnerability Disclosure', 'path' => '/security/disclosure', 'description' => 'Report vulnerabilities', 'updated' => 'April 3, 2026'],
                                ['name' => 'Bug Bounty Program', 'path' => '/security/bug-bounty', 'description' => 'Security researchers', 'updated' => 'April 2, 2026'],
                                ['name' => 'Data Encryption', 'path' => '/security/encryption', 'description' => 'Encryption standards', 'updated' => 'April 1, 2026'],
                                ['name' => 'Incident Response', 'path' => '/security/incident-response', 'description' => 'Breach procedures', 'updated' => 'March 30, 2026']
                            ]
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 704,
                'section_key' => 'allPagesIndex',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Category Links Section Variants
            [
                'id' => 705,
                'section_key' => 'categoryLinks',
                'variant' => 'variant1',
                'config' => json_encode([
                    'lastUpdated' => 'April 8, 2026',
                    'badge' => 'Quick Navigation',
                    'title' => [
                        'prefix' => 'Browse by',
                        'highlight' => 'Category'
                    ],
                    'description' => 'Navigate our website by category. Find the information you need quickly and easily.',
                    'categoryLinks' => [
                        [
                            'id' => 'home',
                            'name' => 'Home & Overview',
                            'icon' => 'home',
                            'color' => 'from-blue-500 to-blue-600',
                            'bgColor' => 'bg-blue-50 dark:bg-blue-900/20',
                            'description' => 'Main website pages and company information',
                            'linkCount' => 6,
                            'links' => [
                                ['name' => 'Home', 'path' => '/', 'description' => 'Main landing page'],
                                ['name' => 'About Us', 'path' => '/about', 'description' => 'Company information and mission'],
                                ['name' => 'Contact', 'path' => '/contact', 'description' => 'Contact information and support'],
                                ['name' => 'Careers', 'path' => '/careers', 'description' => 'Job opportunities at SupplyChainPro'],
                                ['name' => 'Blog', 'path' => '/blog', 'description' => 'Latest news and updates'],
                                ['name' => 'Press', 'path' => '/press', 'description' => 'Press releases and media kit']
                            ]
                        ],
                        [
                            'id' => 'product',
                            'name' => 'Product',
                            'icon' => 'briefcase',
                            'color' => 'from-green-500 to-green-600',
                            'bgColor' => 'bg-green-50 dark:bg-green-900/20',
                            'description' => 'Product features, pricing, and documentation',
                            'linkCount' => 7,
                            'links' => [
                                ['name' => 'Features', 'path' => '/features', 'description' => 'All product features'],
                                ['name' => 'Pricing', 'path' => '/pricing', 'description' => 'Subscription plans and pricing'],
                                ['name' => 'Demo', 'path' => '/demo', 'description' => 'Request a product demo'],
                                ['name' => 'Integrations', 'path' => '/integrations', 'description' => 'Third-party integrations'],
                                ['name' => 'API Documentation', 'path' => '/api/docs', 'description' => 'API reference and documentation'],
                                ['name' => 'Release Notes', 'path' => '/release-notes', 'description' => 'Version history and updates'],
                                ['name' => 'Roadmap', 'path' => '/roadmap', 'description' => 'Product development roadmap']
                            ]
                        ],
                        [
                            'id' => 'mobile',
                            'name' => 'Mobile Apps',
                            'icon' => 'mobile',
                            'color' => 'from-purple-500 to-purple-600',
                            'bgColor' => 'bg-purple-50 dark:bg-purple-900/20',
                            'description' => 'iOS and Android mobile applications',
                            'linkCount' => 6,
                            'links' => [
                                ['name' => 'iOS App', 'path' => '/mobile/ios', 'description' => 'iPhone and iPad mobile application'],
                                ['name' => 'Android App', 'path' => '/mobile/android', 'description' => 'Android mobile application'],
                                ['name' => 'Mobile Features', 'path' => '/mobile/features', 'description' => 'Mobile app features overview'],
                                ['name' => 'App Store', 'path' => '/mobile/app-store', 'description' => 'Apple App Store listing'],
                                ['name' => 'Google Play', 'path' => '/mobile/google-play', 'description' => 'Google Play Store listing'],
                                ['name' => 'Mobile Security', 'path' => '/mobile/security', 'description' => 'Mobile app security practices']
                            ]
                        ],
                        [
                            'id' => 'solutions',
                            'name' => 'Solutions',
                            'icon' => 'cloud',
                            'color' => 'from-cyan-500 to-cyan-600',
                            'bgColor' => 'bg-cyan-50 dark:bg-cyan-900/20',
                            'description' => 'Industry-specific supply chain solutions',
                            'linkCount' => 9,
                            'links' => [
                                ['name' => 'Supply Chain Management', 'path' => '/solutions/supply-chain', 'description' => 'End-to-end supply chain solutions'],
                                ['name' => 'Inventory Management', 'path' => '/solutions/inventory', 'description' => 'Real-time inventory tracking'],
                                ['name' => 'Warehouse Management', 'path' => '/solutions/warehouse', 'description' => 'Warehouse optimization'],
                                ['name' => 'Logistics & Shipping', 'path' => '/solutions/logistics', 'description' => 'Shipping and logistics management'],
                                ['name' => 'Procurement', 'path' => '/solutions/procurement', 'description' => 'Procurement automation'],
                                ['name' => 'Demand Forecasting', 'path' => '/solutions/forecasting', 'description' => 'AI-powered demand predictions'],
                                ['name' => 'Retail', 'path' => '/solutions/retail', 'description' => 'Solutions for retailers'],
                                ['name' => 'Manufacturing', 'path' => '/solutions/manufacturing', 'description' => 'Solutions for manufacturers'],
                                ['name' => 'Healthcare', 'path' => '/solutions/healthcare', 'description' => 'Healthcare supply chain']
                            ]
                        ],
                        [
                            'id' => 'industries',
                            'name' => 'Industries',
                            'icon' => 'building',
                            'color' => 'from-orange-500 to-orange-600',
                            'bgColor' => 'bg-orange-50 dark:bg-orange-900/20',
                            'description' => 'Solutions by industry vertical',
                            'linkCount' => 7,
                            'links' => [
                                ['name' => 'Retail & E-commerce', 'path' => '/industries/retail', 'description' => 'Retail supply chain solutions'],
                                ['name' => 'Manufacturing', 'path' => '/industries/manufacturing', 'description' => 'Manufacturing supply chain'],
                                ['name' => 'Healthcare', 'path' => '/industries/healthcare', 'description' => 'Healthcare logistics'],
                                ['name' => 'Pharmaceutical', 'path' => '/industries/pharmaceutical', 'description' => 'Pharma supply chain'],
                                ['name' => 'Automotive', 'path' => '/industries/automotive', 'description' => 'Auto parts logistics'],
                                ['name' => 'Food & Beverage', 'path' => '/industries/food-beverage', 'description' => 'Food supply chain'],
                                ['name' => 'Logistics & 3PL', 'path' => '/industries/logistics', 'description' => 'Third-party logistics']
                            ]
                        ],
                        [
                            'id' => 'resources',
                            'name' => 'Resources',
                            'icon' => 'document',
                            'color' => 'from-red-500 to-red-600',
                            'bgColor' => 'bg-red-50 dark:bg-red-900/20',
                            'description' => 'Documentation, guides, and learning materials',
                            'linkCount' => 9,
                            'links' => [
                                ['name' => 'Documentation', 'path' => '/docs', 'description' => 'Product documentation'],
                                ['name' => 'Help Center', 'path' => '/help', 'description' => 'Support and FAQs'],
                                ['name' => 'Tutorials', 'path' => '/tutorials', 'description' => 'Video tutorials and guides'],
                                ['name' => 'Webinars', 'path' => '/webinars', 'description' => 'Live and recorded webinars'],
                                ['name' => 'Case Studies', 'path' => '/case-studies', 'description' => 'Customer success stories'],
                                ['name' => 'White Papers', 'path' => '/white-papers', 'description' => 'In-depth research papers'],
                                ['name' => 'E-books', 'path' => '/ebooks', 'description' => 'Free e-books and guides'],
                                ['name' => 'Infographics', 'path' => '/infographics', 'description' => 'Visual data insights'],
                                ['name' => 'Glossary', 'path' => '/glossary', 'description' => 'Supply chain terminology']
                            ]
                        ],
                        [
                            'id' => 'support',
                            'name' => 'Support',
                            'icon' => 'heart',
                            'color' => 'from-pink-500 to-pink-600',
                            'bgColor' => 'bg-pink-50 dark:bg-pink-900/20',
                            'description' => 'Customer support and assistance',
                            'linkCount' => 7,
                            'links' => [
                                ['name' => 'Support Center', 'path' => '/support', 'description' => 'Customer support portal'],
                                ['name' => 'FAQs', 'path' => '/faq', 'description' => 'Frequently asked questions'],
                                ['name' => 'Knowledge Base', 'path' => '/knowledge-base', 'description' => 'Articles and guides'],
                                ['name' => 'Community Forum', 'path' => '/community', 'description' => 'User community'],
                                ['name' => 'Status Page', 'path' => '/status', 'description' => 'System status and uptime'],
                                ['name' => 'Submit Ticket', 'path' => '/support/ticket', 'description' => 'Create support ticket'],
                                ['name' => 'Live Chat', 'path' => '/support/chat', 'description' => 'Live chat support']
                            ]
                        ],
                        [
                            'id' => 'legal',
                            'name' => 'Legal & Compliance',
                            'icon' => 'scale',
                            'color' => 'from-indigo-500 to-indigo-600',
                            'bgColor' => 'bg-indigo-50 dark:bg-indigo-900/20',
                            'description' => 'Legal documents and compliance information',
                            'linkCount' => 10,
                            'links' => [
                                ['name' => 'Terms of Service', 'path' => '/legal/terms', 'description' => 'Terms and conditions'],
                                ['name' => 'Privacy Policy', 'path' => '/legal/privacy', 'description' => 'Privacy practices'],
                                ['name' => 'Cookie Policy', 'path' => '/legal/cookies', 'description' => 'Cookie usage'],
                                ['name' => 'GDPR Compliance', 'path' => '/legal/gdpr', 'description' => 'GDPR information'],
                                ['name' => 'Data Processing Agreement', 'path' => '/legal/dpa', 'description' => 'DPA for customers'],
                                ['name' => 'Security Policy', 'path' => '/legal/security', 'description' => 'Security practices'],
                                ['name' => 'Acceptable Use Policy', 'path' => '/legal/aup', 'description' => 'AUP guidelines'],
                                ['name' => 'Subprocessors', 'path' => '/legal/subprocessors', 'description' => 'List of subprocessors'],
                                ['name' => 'Compliance Reports', 'path' => '/legal/compliance', 'description' => 'SOC 2, ISO reports'],
                                ['name' => 'Data Request Form', 'path' => '/legal/data-request', 'description' => 'Submit DSAR']
                            ]
                        ],
                        [
                            'id' => 'company',
                            'name' => 'Company',
                            'icon' => 'building',
                            'color' => 'from-teal-500 to-teal-600',
                            'bgColor' => 'bg-teal-50 dark:bg-teal-900/20',
                            'description' => 'Company information and news',
                            'linkCount' => 7,
                            'links' => [
                                ['name' => 'About Us', 'path' => '/company/about', 'description' => 'Company overview'],
                                ['name' => 'Leadership', 'path' => '/company/leadership', 'description' => 'Executive team'],
                                ['name' => 'Mission & Values', 'path' => '/company/values', 'description' => 'Core values'],
                                ['name' => 'Newsroom', 'path' => '/company/news', 'description' => 'Latest news'],
                                ['name' => 'Events', 'path' => '/company/events', 'description' => 'Upcoming events'],
                                ['name' => 'Partners', 'path' => '/company/partners', 'description' => 'Partner program'],
                                ['name' => 'Customers', 'path' => '/company/customers', 'description' => 'Customer stories']
                            ]
                        ],
                        [
                            'id' => 'security',
                            'name' => 'Security',
                            'icon' => 'shield',
                            'color' => 'from-emerald-500 to-emerald-600',
                            'bgColor' => 'bg-emerald-50 dark:bg-emerald-900/20',
                            'description' => 'Security practices and certifications',
                            'linkCount' => 6,
                            'links' => [
                                ['name' => 'Security Overview', 'path' => '/security/overview', 'description' => 'Security program'],
                                ['name' => 'Certifications', 'path' => '/security/certifications', 'description' => 'SOC 2, ISO certifications'],
                                ['name' => 'Vulnerability Disclosure', 'path' => '/security/disclosure', 'description' => 'Report vulnerabilities'],
                                ['name' => 'Bug Bounty', 'path' => '/security/bug-bounty', 'description' => 'Bug bounty program'],
                                ['name' => 'Data Encryption', 'path' => '/security/encryption', 'description' => 'Encryption standards'],
                                ['name' => 'Incident Response', 'path' => '/security/incident-response', 'description' => 'Breach procedures']
                            ]
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 706,
                'section_key' => 'categoryLinks',
                'variant' => 'variant2',
                'config' => json_encode([
                    'lastUpdated' => 'April 8, 2026',
                    'badge' => 'Smart Navigation',
                    'title' => [
                        'prefix' => 'Explore by',
                        'highlight' => 'Category'
                    ],
                    'description' => 'Navigate our website by category. Find the information you need quickly and easily.',
                    'tabs' => [
                        ['id' => 'categories', 'label' => 'All Categories', 'icon' => 'folder'],
                        ['id' => 'popular', 'label' => 'Popular Links', 'icon' => 'star'],
                        ['id' => 'recent', 'label' => 'Recent Updates', 'icon' => 'trending-up']
                    ],
                    'popularLinks' => [
                        ['name' => 'Pricing Plans', 'path' => '/pricing', 'category' => 'Product', 'clicks' => '12.5K'],
                        ['name' => 'Android App Download', 'path' => '/mobile/android', 'category' => 'Mobile', 'clicks' => '8.2K'],
                        ['name' => 'iOS App Download', 'path' => '/mobile/ios', 'category' => 'Mobile', 'clicks' => '7.8K'],
                        ['name' => 'API Documentation', 'path' => '/api/docs', 'category' => 'Product', 'clicks' => '6.5K'],
                        ['name' => 'Contact Support', 'path' => '/support', 'category' => 'Support', 'clicks' => '5.9K'],
                        ['name' => 'Features Overview', 'path' => '/features', 'category' => 'Product', 'clicks' => '5.2K'],
                        ['name' => 'Privacy Policy', 'path' => '/legal/privacy', 'category' => 'Legal', 'clicks' => '4.1K'],
                        ['name' => 'Terms of Service', 'path' => '/legal/terms', 'category' => 'Legal', 'clicks' => '3.8K'],
                        ['name' => 'Request Demo', 'path' => '/demo', 'category' => 'Product', 'clicks' => '3.2K'],
                        ['name' => 'Security Overview', 'path' => '/security/overview', 'category' => 'Security', 'clicks' => '2.9K']
                    ],
                    'recentlyUpdated' => [
                        ['name' => 'GDPR Compliance', 'path' => '/legal/gdpr', 'category' => 'Legal', 'date' => 'April 8, 2026', 'author' => 'Legal Team'],
                        ['name' => 'Security Policy', 'path' => '/legal/security', 'category' => 'Legal', 'date' => 'April 5, 2026', 'author' => 'Security Team'],
                        ['name' => 'Data Processing Agreement', 'path' => '/legal/dpa', 'category' => 'Legal', 'date' => 'April 1, 2026', 'author' => 'Legal Team'],
                        ['name' => 'Android App v3.0', 'path' => '/mobile/android', 'category' => 'Mobile', 'date' => 'March 28, 2026', 'author' => 'Mobile Team'],
                        ['name' => 'iOS App v3.0', 'path' => '/mobile/ios', 'category' => 'Mobile', 'date' => 'March 28, 2026', 'author' => 'Mobile Team'],
                        ['name' => 'Cookie Policy', 'path' => '/legal/cookies', 'category' => 'Legal', 'date' => 'March 25, 2026', 'author' => 'Legal Team'],
                        ['name' => 'Acceptable Use Policy', 'path' => '/legal/aup', 'category' => 'Legal', 'date' => 'March 20, 2026', 'author' => 'Legal Team'],
                        ['name' => 'Bug Bounty Program', 'path' => '/security/bug-bounty', 'category' => 'Security', 'date' => 'March 15, 2026', 'author' => 'Security Team']
                    ],
                    'categoryLinks' => [
                        [
                            'id' => 'home',
                            'name' => 'Home & Overview',
                            'icon' => 'home',
                            'color' => 'from-blue-500 to-blue-600',
                            'bgColor' => 'bg-blue-50 dark:bg-blue-900/20',
                            'description' => 'Main website pages and company information',
                            'linkCount' => 6,
                            'links' => [
                                ['name' => 'Home', 'path' => '/', 'description' => 'Main landing page', 'updated' => 'April 8, 2026'],
                                ['name' => 'About Us', 'path' => '/about', 'description' => 'Company information and mission', 'updated' => 'March 15, 2026'],
                                ['name' => 'Contact', 'path' => '/contact', 'description' => 'Contact information and support', 'updated' => 'April 1, 2026'],
                                ['name' => 'Careers', 'path' => '/careers', 'description' => 'Job opportunities at SupplyChainPro', 'updated' => 'March 20, 2026'],
                                ['name' => 'Blog', 'path' => '/blog', 'description' => 'Latest news and updates', 'updated' => 'April 7, 2026'],
                                ['name' => 'Press', 'path' => '/press', 'description' => 'Press releases and media kit', 'updated' => 'March 10, 2026']
                            ]
                        ],
                        [
                            'id' => 'product',
                            'name' => 'Product',
                            'icon' => 'briefcase',
                            'color' => 'from-green-500 to-green-600',
                            'bgColor' => 'bg-green-50 dark:bg-green-900/20',
                            'description' => 'Product features, pricing, and documentation',
                            'linkCount' => 7,
                            'links' => [
                                ['name' => 'Features', 'path' => '/features', 'description' => 'All product features', 'updated' => 'April 5, 2026'],
                                ['name' => 'Pricing', 'path' => '/pricing', 'description' => 'Subscription plans and pricing', 'updated' => 'March 25, 2026'],
                                ['name' => 'Demo', 'path' => '/demo', 'description' => 'Request a product demo', 'updated' => 'April 2, 2026'],
                                ['name' => 'Integrations', 'path' => '/integrations', 'description' => 'Third-party integrations', 'updated' => 'March 28, 2026'],
                                ['name' => 'API Documentation', 'path' => '/api/docs', 'description' => 'API reference and documentation', 'updated' => 'April 6, 2026'],
                                ['name' => 'Release Notes', 'path' => '/release-notes', 'description' => 'Version history and updates', 'updated' => 'March 30, 2026'],
                                ['name' => 'Roadmap', 'path' => '/roadmap', 'description' => 'Product development roadmap', 'updated' => 'April 3, 2026']
                            ]
                        ],
                        [
                            'id' => 'mobile',
                            'name' => 'Mobile Apps',
                            'icon' => 'mobile',
                            'color' => 'from-purple-500 to-purple-600',
                            'bgColor' => 'bg-purple-50 dark:bg-purple-900/20',
                            'description' => 'iOS and Android mobile applications',
                            'linkCount' => 6,
                            'links' => [
                                ['name' => 'iOS App', 'path' => '/mobile/ios', 'description' => 'iPhone and iPad mobile application', 'updated' => 'March 28, 2026'],
                                ['name' => 'Android App', 'path' => '/mobile/android', 'description' => 'Android mobile application', 'updated' => 'March 28, 2026'],
                                ['name' => 'Mobile Features', 'path' => '/mobile/features', 'description' => 'Mobile app features overview', 'updated' => 'March 15, 2026'],
                                ['name' => 'App Store', 'path' => '/mobile/app-store', 'description' => 'Apple App Store listing', 'updated' => 'March 28, 2026'],
                                ['name' => 'Google Play', 'path' => '/mobile/google-play', 'description' => 'Google Play Store listing', 'updated' => 'March 28, 2026'],
                                ['name' => 'Mobile Security', 'path' => '/mobile/security', 'description' => 'Mobile app security practices', 'updated' => 'April 1, 2026']
                            ]
                        ],
                        [
                            'id' => 'solutions',
                            'name' => 'Solutions',
                            'icon' => 'cloud',
                            'color' => 'from-cyan-500 to-cyan-600',
                            'bgColor' => 'bg-cyan-50 dark:bg-cyan-900/20',
                            'description' => 'Industry-specific supply chain solutions',
                            'linkCount' => 9,
                            'links' => [
                                ['name' => 'Supply Chain Management', 'path' => '/solutions/supply-chain', 'description' => 'End-to-end supply chain solutions', 'updated' => 'March 20, 2026'],
                                ['name' => 'Inventory Management', 'path' => '/solutions/inventory', 'description' => 'Real-time inventory tracking', 'updated' => 'March 18, 2026'],
                                ['name' => 'Warehouse Management', 'path' => '/solutions/warehouse', 'description' => 'Warehouse optimization', 'updated' => 'March 22, 2026'],
                                ['name' => 'Logistics & Shipping', 'path' => '/solutions/logistics', 'description' => 'Shipping and logistics management', 'updated' => 'March 25, 2026'],
                                ['name' => 'Procurement', 'path' => '/solutions/procurement', 'description' => 'Procurement automation', 'updated' => 'March 19, 2026'],
                                ['name' => 'Demand Forecasting', 'path' => '/solutions/forecasting', 'description' => 'AI-powered demand predictions', 'updated' => 'March 30, 2026'],
                                ['name' => 'Retail', 'path' => '/solutions/retail', 'description' => 'Solutions for retailers', 'updated' => 'March 21, 2026'],
                                ['name' => 'Manufacturing', 'path' => '/solutions/manufacturing', 'description' => 'Solutions for manufacturers', 'updated' => 'March 23, 2026'],
                                ['name' => 'Healthcare', 'path' => '/solutions/healthcare', 'description' => 'Healthcare supply chain', 'updated' => 'March 26, 2026']
                            ]
                        ],
                        [
                            'id' => 'industries',
                            'name' => 'Industries',
                            'icon' => 'building',
                            'color' => 'from-orange-500 to-orange-600',
                            'bgColor' => 'bg-orange-50 dark:bg-orange-900/20',
                            'description' => 'Solutions by industry vertical',
                            'linkCount' => 7,
                            'links' => [
                                ['name' => 'Retail & E-commerce', 'path' => '/industries/retail', 'description' => 'Retail supply chain solutions', 'updated' => 'March 15, 2026'],
                                ['name' => 'Manufacturing', 'path' => '/industries/manufacturing', 'description' => 'Manufacturing supply chain', 'updated' => 'March 16, 2026'],
                                ['name' => 'Healthcare', 'path' => '/industries/healthcare', 'description' => 'Healthcare logistics', 'updated' => 'March 17, 2026'],
                                ['name' => 'Pharmaceutical', 'path' => '/industries/pharmaceutical', 'description' => 'Pharma supply chain', 'updated' => 'March 18, 2026'],
                                ['name' => 'Automotive', 'path' => '/industries/automotive', 'description' => 'Auto parts logistics', 'updated' => 'March 19, 2026'],
                                ['name' => 'Food & Beverage', 'path' => '/industries/food-beverage', 'description' => 'Food supply chain', 'updated' => 'March 20, 2026'],
                                ['name' => 'Logistics & 3PL', 'path' => '/industries/logistics', 'description' => 'Third-party logistics', 'updated' => 'March 21, 2026']
                            ]
                        ],
                        [
                            'id' => 'resources',
                            'name' => 'Resources',
                            'icon' => 'document',
                            'color' => 'from-red-500 to-red-600',
                            'bgColor' => 'bg-red-50 dark:bg-red-900/20',
                            'description' => 'Documentation, guides, and learning materials',
                            'linkCount' => 9,
                            'links' => [
                                ['name' => 'Documentation', 'path' => '/docs', 'description' => 'Product documentation', 'updated' => 'April 5, 2026'],
                                ['name' => 'Help Center', 'path' => '/help', 'description' => 'Support and FAQs', 'updated' => 'April 4, 2026'],
                                ['name' => 'Tutorials', 'path' => '/tutorials', 'description' => 'Video tutorials and guides', 'updated' => 'April 3, 2026'],
                                ['name' => 'Webinars', 'path' => '/webinars', 'description' => 'Live and recorded webinars', 'updated' => 'April 2, 2026'],
                                ['name' => 'Case Studies', 'path' => '/case-studies', 'description' => 'Customer success stories', 'updated' => 'April 1, 2026'],
                                ['name' => 'White Papers', 'path' => '/white-papers', 'description' => 'In-depth research papers', 'updated' => 'March 30, 2026'],
                                ['name' => 'E-books', 'path' => '/ebooks', 'description' => 'Free e-books and guides', 'updated' => 'March 28, 2026'],
                                ['name' => 'Infographics', 'path' => '/infographics', 'description' => 'Visual data insights', 'updated' => 'March 25, 2026'],
                                ['name' => 'Glossary', 'path' => '/glossary', 'description' => 'Supply chain terminology', 'updated' => 'March 20, 2026']
                            ]
                        ],
                        [
                            'id' => 'support',
                            'name' => 'Support',
                            'icon' => 'heart',
                            'color' => 'from-pink-500 to-pink-600',
                            'bgColor' => 'bg-pink-50 dark:bg-pink-900/20',
                            'description' => 'Customer support and assistance',
                            'linkCount' => 7,
                            'links' => [
                                ['name' => 'Support Center', 'path' => '/support', 'description' => 'Customer support portal', 'updated' => 'April 7, 2026'],
                                ['name' => 'FAQs', 'path' => '/faq', 'description' => 'Frequently asked questions', 'updated' => 'April 6, 2026'],
                                ['name' => 'Knowledge Base', 'path' => '/knowledge-base', 'description' => 'Articles and guides', 'updated' => 'April 5, 2026'],
                                ['name' => 'Community Forum', 'path' => '/community', 'description' => 'User community', 'updated' => 'April 4, 2026'],
                                ['name' => 'Status Page', 'path' => '/status', 'description' => 'System status and uptime', 'updated' => 'April 8, 2026'],
                                ['name' => 'Submit Ticket', 'path' => '/support/ticket', 'description' => 'Create support ticket', 'updated' => 'April 3, 2026'],
                                ['name' => 'Live Chat', 'path' => '/support/chat', 'description' => 'Live chat support', 'updated' => 'April 2, 2026']
                            ]
                        ],
                        [
                            'id' => 'legal',
                            'name' => 'Legal & Compliance',
                            'icon' => 'scale',
                            'color' => 'from-indigo-500 to-indigo-600',
                            'bgColor' => 'bg-indigo-50 dark:bg-indigo-900/20',
                            'description' => 'Legal documents and compliance information',
                            'linkCount' => 10,
                            'links' => [
                                ['name' => 'Terms of Service', 'path' => '/legal/terms', 'description' => 'Terms and conditions', 'updated' => 'April 8, 2026'],
                                ['name' => 'Privacy Policy', 'path' => '/legal/privacy', 'description' => 'Privacy practices', 'updated' => 'April 8, 2026'],
                                ['name' => 'Cookie Policy', 'path' => '/legal/cookies', 'description' => 'Cookie usage', 'updated' => 'April 8, 2026'],
                                ['name' => 'GDPR Compliance', 'path' => '/legal/gdpr', 'description' => 'GDPR information', 'updated' => 'April 8, 2026'],
                                ['name' => 'Data Processing Agreement', 'path' => '/legal/dpa', 'description' => 'DPA for customers', 'updated' => 'April 1, 2026'],
                                ['name' => 'Security Policy', 'path' => '/legal/security', 'description' => 'Security practices', 'updated' => 'April 5, 2026'],
                                ['name' => 'Acceptable Use Policy', 'path' => '/legal/aup', 'description' => 'AUP guidelines', 'updated' => 'March 20, 2026'],
                                ['name' => 'Subprocessors', 'path' => '/legal/subprocessors', 'description' => 'List of subprocessors', 'updated' => 'March 15, 2026'],
                                ['name' => 'Compliance Reports', 'path' => '/legal/compliance', 'description' => 'SOC 2, ISO reports', 'updated' => 'March 10, 2026'],
                                ['name' => 'Data Request Form', 'path' => '/legal/data-request', 'description' => 'Submit DSAR', 'updated' => 'March 5, 2026']
                            ]
                        ],
                        [
                            'id' => 'company',
                            'name' => 'Company',
                            'icon' => 'building',
                            'color' => 'from-teal-500 to-teal-600',
                            'bgColor' => 'bg-teal-50 dark:bg-teal-900/20',
                            'description' => 'Company information and news',
                            'linkCount' => 7,
                            'links' => [
                                ['name' => 'About Us', 'path' => '/company/about', 'description' => 'Company overview', 'updated' => 'March 15, 2026'],
                                ['name' => 'Leadership', 'path' => '/company/leadership', 'description' => 'Executive team', 'updated' => 'March 10, 2026'],
                                ['name' => 'Mission & Values', 'path' => '/company/values', 'description' => 'Core values', 'updated' => 'March 5, 2026'],
                                ['name' => 'Newsroom', 'path' => '/company/news', 'description' => 'Latest news', 'updated' => 'April 7, 2026'],
                                ['name' => 'Events', 'path' => '/company/events', 'description' => 'Upcoming events', 'updated' => 'April 1, 2026'],
                                ['name' => 'Partners', 'path' => '/company/partners', 'description' => 'Partner program', 'updated' => 'March 25, 2026'],
                                ['name' => 'Customers', 'path' => '/company/customers', 'description' => 'Customer stories', 'updated' => 'March 20, 2026']
                            ]
                        ],
                        [
                            'id' => 'security',
                            'name' => 'Security',
                            'icon' => 'shield',
                            'color' => 'from-emerald-500 to-emerald-600',
                            'bgColor' => 'bg-emerald-50 dark:bg-emerald-900/20',
                            'description' => 'Security practices and certifications',
                            'linkCount' => 6,
                            'links' => [
                                ['name' => 'Security Overview', 'path' => '/security/overview', 'description' => 'Security program', 'updated' => 'April 5, 2026'],
                                ['name' => 'Certifications', 'path' => '/security/certifications', 'description' => 'SOC 2, ISO certifications', 'updated' => 'April 4, 2026'],
                                ['name' => 'Vulnerability Disclosure', 'path' => '/security/disclosure', 'description' => 'Report vulnerabilities', 'updated' => 'April 3, 2026'],
                                ['name' => 'Bug Bounty', 'path' => '/security/bug-bounty', 'description' => 'Bug bounty program', 'updated' => 'April 2, 2026'],
                                ['name' => 'Data Encryption', 'path' => '/security/encryption', 'description' => 'Encryption standards', 'updated' => 'April 1, 2026'],
                                ['name' => 'Incident Response', 'path' => '/security/incident-response', 'description' => 'Breach procedures', 'updated' => 'March 30, 2026']
                            ]
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 707,
                'section_key' => 'categoryLinks',
                'variant' => 'variant3',
                'config' => json_encode([
                    'lastUpdated' => 'April 8, 2026',
                    'autoPlayCarousel' => true,
                    'badge' => 'Smart Navigation Hub',
                    'title' => [
                        'prefix' => 'Explore by',
                        'highlight' => 'Category'
                    ],
                    'description' => 'Navigate our website by category. Find the information you need quickly and easily.',
                    'featuredCategories' => [
                        ['title' => 'Mobile Apps', 'description' => 'Download our iOS and Android apps for on-the-go supply chain management.', 'icon' => 'mobile', 'color' => 'from-purple-500 to-purple-600', 'path' => '/mobile', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'],
                        ['title' => 'Security & Compliance', 'description' => 'Learn about our security certifications and compliance frameworks.', 'icon' => 'shield', 'color' => 'from-emerald-500 to-emerald-600', 'path' => '/security', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'],
                        ['title' => 'API Documentation', 'description' => 'Access our API documentation, SDKs, and integration guides.', 'icon' => 'chip', 'color' => 'from-cyan-500 to-cyan-600', 'path' => '/api/docs', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFunflies.mp4'],
                        ['title' => 'Customer Support', 'description' => 'Get help from our support team or browse our knowledge base.', 'icon' => 'heart', 'color' => 'from-pink-500 to-pink-600', 'path' => '/support', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4']
                    ],
                    'tabs' => [
                        ['id' => 'categories', 'label' => 'All Categories', 'icon' => 'folder'],
                        ['id' => 'popular', 'label' => 'Popular Links', 'icon' => 'star'],
                        ['id' => 'recent', 'label' => 'Recent Updates', 'icon' => 'trending-up']
                    ],
                    'popularLinks' => [
                        ['name' => 'Pricing Plans', 'path' => '/pricing', 'category' => 'Product', 'clicks' => '12.5K', 'trend' => '+8%'],
                        ['name' => 'Android App Download', 'path' => '/mobile/android', 'category' => 'Mobile', 'clicks' => '8.2K', 'trend' => '+25%'],
                        ['name' => 'iOS App Download', 'path' => '/mobile/ios', 'category' => 'Mobile', 'clicks' => '7.8K', 'trend' => '+18%'],
                        ['name' => 'API Documentation', 'path' => '/api/docs', 'category' => 'Product', 'clicks' => '6.5K', 'trend' => '+10%'],
                        ['name' => 'Contact Support', 'path' => '/support', 'category' => 'Support', 'clicks' => '5.9K', 'trend' => '+5%'],
                        ['name' => 'Features Overview', 'path' => '/features', 'category' => 'Product', 'clicks' => '5.2K', 'trend' => '+15%'],
                        ['name' => 'Privacy Policy', 'path' => '/legal/privacy', 'category' => 'Legal', 'clicks' => '4.1K', 'trend' => '+3%'],
                        ['name' => 'Terms of Service', 'path' => '/legal/terms', 'category' => 'Legal', 'clicks' => '3.8K', 'trend' => '-2%'],
                        ['name' => 'Request Demo', 'path' => '/demo', 'category' => 'Product', 'clicks' => '3.2K', 'trend' => '+12%'],
                        ['name' => 'Security Overview', 'path' => '/security/overview', 'category' => 'Security', 'clicks' => '2.9K', 'trend' => '+7%']
                    ],
                    'recentlyUpdated' => [
                        ['name' => 'GDPR Compliance', 'path' => '/legal/gdpr', 'category' => 'Legal', 'date' => 'April 8, 2026', 'author' => 'Legal Team'],
                        ['name' => 'Security Policy', 'path' => '/legal/security', 'category' => 'Legal', 'date' => 'April 5, 2026', 'author' => 'Security Team'],
                        ['name' => 'Data Processing Agreement', 'path' => '/legal/dpa', 'category' => 'Legal', 'date' => 'April 1, 2026', 'author' => 'Legal Team'],
                        ['name' => 'Android App v3.0', 'path' => '/mobile/android', 'category' => 'Mobile', 'date' => 'March 28, 2026', 'author' => 'Mobile Team'],
                        ['name' => 'iOS App v3.0', 'path' => '/mobile/ios', 'category' => 'Mobile', 'date' => 'March 28, 2026', 'author' => 'Mobile Team'],
                        ['name' => 'Cookie Policy', 'path' => '/legal/cookies', 'category' => 'Legal', 'date' => 'March 25, 2026', 'author' => 'Legal Team'],
                        ['name' => 'Acceptable Use Policy', 'path' => '/legal/aup', 'category' => 'Legal', 'date' => 'March 20, 2026', 'author' => 'Legal Team'],
                        ['name' => 'Bug Bounty Program', 'path' => '/security/bug-bounty', 'category' => 'Security', 'date' => 'March 15, 2026', 'author' => 'Security Team']
                    ],
                    'categoryLinks' => [
                        [
                            'id' => 'home',
                            'name' => 'Home & Overview',
                            'icon' => 'home',
                            'color' => 'from-blue-500 to-blue-600',
                            'bgColor' => 'bg-blue-50 dark:bg-blue-900/20',
                            'description' => 'Main website pages and company information',
                            'linkCount' => 6,
                            'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
                            'links' => [
                                ['name' => 'Home', 'path' => '/', 'description' => 'Main landing page', 'updated' => 'April 8, 2026'],
                                ['name' => 'About Us', 'path' => '/about', 'description' => 'Company information and mission', 'updated' => 'March 15, 2026'],
                                ['name' => 'Contact', 'path' => '/contact', 'description' => 'Contact information and support', 'updated' => 'April 1, 2026'],
                                ['name' => 'Careers', 'path' => '/careers', 'description' => 'Job opportunities at SupplyChainPro', 'updated' => 'March 20, 2026'],
                                ['name' => 'Blog', 'path' => '/blog', 'description' => 'Latest news and updates', 'updated' => 'April 7, 2026'],
                                ['name' => 'Press', 'path' => '/press', 'description' => 'Press releases and media kit', 'updated' => 'March 10, 2026']
                            ]
                        ],
                        [
                            'id' => 'product',
                            'name' => 'Product',
                            'icon' => 'briefcase',
                            'color' => 'from-green-500 to-green-600',
                            'bgColor' => 'bg-green-50 dark:bg-green-900/20',
                            'description' => 'Product features, pricing, and documentation',
                            'linkCount' => 7,
                            'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
                            'links' => [
                                ['name' => 'Features', 'path' => '/features', 'description' => 'All product features', 'updated' => 'April 5, 2026'],
                                ['name' => 'Pricing', 'path' => '/pricing', 'description' => 'Subscription plans and pricing', 'updated' => 'March 25, 2026'],
                                ['name' => 'Demo', 'path' => '/demo', 'description' => 'Request a product demo', 'updated' => 'April 2, 2026'],
                                ['name' => 'Integrations', 'path' => '/integrations', 'description' => 'Third-party integrations', 'updated' => 'March 28, 2026'],
                                ['name' => 'API Documentation', 'path' => '/api/docs', 'description' => 'API reference and documentation', 'updated' => 'April 6, 2026'],
                                ['name' => 'Release Notes', 'path' => '/release-notes', 'description' => 'Version history and updates', 'updated' => 'March 30, 2026'],
                                ['name' => 'Roadmap', 'path' => '/roadmap', 'description' => 'Product development roadmap', 'updated' => 'April 3, 2026']
                            ]
                        ],
                        [
                            'id' => 'mobile',
                            'name' => 'Mobile Apps',
                            'icon' => 'mobile',
                            'color' => 'from-purple-500 to-purple-600',
                            'bgColor' => 'bg-purple-50 dark:bg-purple-900/20',
                            'description' => 'iOS and Android mobile applications',
                            'linkCount' => 6,
                            'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFunflies.mp4',
                            'links' => [
                                ['name' => 'iOS App', 'path' => '/mobile/ios', 'description' => 'iPhone and iPad mobile application', 'updated' => 'March 28, 2026'],
                                ['name' => 'Android App', 'path' => '/mobile/android', 'description' => 'Android mobile application', 'updated' => 'March 28, 2026'],
                                ['name' => 'Mobile Features', 'path' => '/mobile/features', 'description' => 'Mobile app features overview', 'updated' => 'March 15, 2026'],
                                ['name' => 'App Store', 'path' => '/mobile/app-store', 'description' => 'Apple App Store listing', 'updated' => 'March 28, 2026'],
                                ['name' => 'Google Play', 'path' => '/mobile/google-play', 'description' => 'Google Play Store listing', 'updated' => 'March 28, 2026'],
                                ['name' => 'Mobile Security', 'path' => '/mobile/security', 'description' => 'Mobile app security practices', 'updated' => 'April 1, 2026']
                            ]
                        ],
                        [
                            'id' => 'solutions',
                            'name' => 'Solutions',
                            'icon' => 'cloud',
                            'color' => 'from-cyan-500 to-cyan-600',
                            'bgColor' => 'bg-cyan-50 dark:bg-cyan-900/20',
                            'description' => 'Industry-specific supply chain solutions',
                            'linkCount' => 9,
                            'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
                            'links' => [
                                ['name' => 'Supply Chain Management', 'path' => '/solutions/supply-chain', 'description' => 'End-to-end supply chain solutions', 'updated' => 'March 20, 2026'],
                                ['name' => 'Inventory Management', 'path' => '/solutions/inventory', 'description' => 'Real-time inventory tracking', 'updated' => 'March 18, 2026'],
                                ['name' => 'Warehouse Management', 'path' => '/solutions/warehouse', 'description' => 'Warehouse optimization', 'updated' => 'March 22, 2026'],
                                ['name' => 'Logistics & Shipping', 'path' => '/solutions/logistics', 'description' => 'Shipping and logistics management', 'updated' => 'March 25, 2026'],
                                ['name' => 'Procurement', 'path' => '/solutions/procurement', 'description' => 'Procurement automation', 'updated' => 'March 19, 2026'],
                                ['name' => 'Demand Forecasting', 'path' => '/solutions/forecasting', 'description' => 'AI-powered demand predictions', 'updated' => 'March 30, 2026'],
                                ['name' => 'Retail', 'path' => '/solutions/retail', 'description' => 'Solutions for retailers', 'updated' => 'March 21, 2026'],
                                ['name' => 'Manufacturing', 'path' => '/solutions/manufacturing', 'description' => 'Solutions for manufacturers', 'updated' => 'March 23, 2026'],
                                ['name' => 'Healthcare', 'path' => '/solutions/healthcare', 'description' => 'Healthcare supply chain', 'updated' => 'March 26, 2026']
                            ]
                        ],
                        [
                            'id' => 'industries',
                            'name' => 'Industries',
                            'icon' => 'building',
                            'color' => 'from-orange-500 to-orange-600',
                            'bgColor' => 'bg-orange-50 dark:bg-orange-900/20',
                            'description' => 'Solutions by industry vertical',
                            'linkCount' => 7,
                            'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
                            'links' => [
                                ['name' => 'Retail & E-commerce', 'path' => '/industries/retail', 'description' => 'Retail supply chain solutions', 'updated' => 'March 15, 2026'],
                                ['name' => 'Manufacturing', 'path' => '/industries/manufacturing', 'description' => 'Manufacturing supply chain', 'updated' => 'March 16, 2026'],
                                ['name' => 'Healthcare', 'path' => '/industries/healthcare', 'description' => 'Healthcare logistics', 'updated' => 'March 17, 2026'],
                                ['name' => 'Pharmaceutical', 'path' => '/industries/pharmaceutical', 'description' => 'Pharma supply chain', 'updated' => 'March 18, 2026'],
                                ['name' => 'Automotive', 'path' => '/industries/automotive', 'description' => 'Auto parts logistics', 'updated' => 'March 19, 2026'],
                                ['name' => 'Food & Beverage', 'path' => '/industries/food-beverage', 'description' => 'Food supply chain', 'updated' => 'March 20, 2026'],
                                ['name' => 'Logistics & 3PL', 'path' => '/industries/logistics', 'description' => 'Third-party logistics', 'updated' => 'March 21, 2026']
                            ]
                        ],
                        [
                            'id' => 'resources',
                            'name' => 'Resources',
                            'icon' => 'document',
                            'color' => 'from-red-500 to-red-600',
                            'bgColor' => 'bg-red-50 dark:bg-red-900/20',
                            'description' => 'Documentation, guides, and learning materials',
                            'linkCount' => 9,
                            'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
                            'links' => [
                                ['name' => 'Documentation', 'path' => '/docs', 'description' => 'Product documentation', 'updated' => 'April 5, 2026'],
                                ['name' => 'Help Center', 'path' => '/help', 'description' => 'Support and FAQs', 'updated' => 'April 4, 2026'],
                                ['name' => 'Tutorials', 'path' => '/tutorials', 'description' => 'Video tutorials and guides', 'updated' => 'April 3, 2026'],
                                ['name' => 'Webinars', 'path' => '/webinars', 'description' => 'Live and recorded webinars', 'updated' => 'April 2, 2026'],
                                ['name' => 'Case Studies', 'path' => '/case-studies', 'description' => 'Customer success stories', 'updated' => 'April 1, 2026'],
                                ['name' => 'White Papers', 'path' => '/white-papers', 'description' => 'In-depth research papers', 'updated' => 'March 30, 2026'],
                                ['name' => 'E-books', 'path' => '/ebooks', 'description' => 'Free e-books and guides', 'updated' => 'March 28, 2026'],
                                ['name' => 'Infographics', 'path' => '/infographics', 'description' => 'Visual data insights', 'updated' => 'March 25, 2026'],
                                ['name' => 'Glossary', 'path' => '/glossary', 'description' => 'Supply chain terminology', 'updated' => 'March 20, 2026']
                            ]
                        ],
                        [
                            'id' => 'support',
                            'name' => 'Support',
                            'icon' => 'heart',
                            'color' => 'from-pink-500 to-pink-600',
                            'bgColor' => 'bg-pink-50 dark:bg-pink-900/20',
                            'description' => 'Customer support and assistance',
                            'linkCount' => 7,
                            'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFunflies.mp4',
                            'links' => [
                                ['name' => 'Support Center', 'path' => '/support', 'description' => 'Customer support portal', 'updated' => 'April 7, 2026'],
                                ['name' => 'FAQs', 'path' => '/faq', 'description' => 'Frequently asked questions', 'updated' => 'April 6, 2026'],
                                ['name' => 'Knowledge Base', 'path' => '/knowledge-base', 'description' => 'Articles and guides', 'updated' => 'April 5, 2026'],
                                ['name' => 'Community Forum', 'path' => '/community', 'description' => 'User community', 'updated' => 'April 4, 2026'],
                                ['name' => 'Status Page', 'path' => '/status', 'description' => 'System status and uptime', 'updated' => 'April 8, 2026'],
                                ['name' => 'Submit Ticket', 'path' => '/support/ticket', 'description' => 'Create support ticket', 'updated' => 'April 3, 2026'],
                                ['name' => 'Live Chat', 'path' => '/support/chat', 'description' => 'Live chat support', 'updated' => 'April 2, 2026']
                            ]
                        ],
                        [
                            'id' => 'legal',
                            'name' => 'Legal & Compliance',
                            'icon' => 'scale',
                            'color' => 'from-indigo-500 to-indigo-600',
                            'bgColor' => 'bg-indigo-50 dark:bg-indigo-900/20',
                            'description' => 'Legal documents and compliance information',
                            'linkCount' => 10,
                            'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
                            'links' => [
                                ['name' => 'Terms of Service', 'path' => '/legal/terms', 'description' => 'Terms and conditions', 'updated' => 'April 8, 2026'],
                                ['name' => 'Privacy Policy', 'path' => '/legal/privacy', 'description' => 'Privacy practices', 'updated' => 'April 8, 2026'],
                                ['name' => 'Cookie Policy', 'path' => '/legal/cookies', 'description' => 'Cookie usage', 'updated' => 'April 8, 2026'],
                                ['name' => 'GDPR Compliance', 'path' => '/legal/gdpr', 'description' => 'GDPR information', 'updated' => 'April 8, 2026'],
                                ['name' => 'Data Processing Agreement', 'path' => '/legal/dpa', 'description' => 'DPA for customers', 'updated' => 'April 1, 2026'],
                                ['name' => 'Security Policy', 'path' => '/legal/security', 'description' => 'Security practices', 'updated' => 'April 5, 2026'],
                                ['name' => 'Acceptable Use Policy', 'path' => '/legal/aup', 'description' => 'AUP guidelines', 'updated' => 'March 20, 2026'],
                                ['name' => 'Subprocessors', 'path' => '/legal/subprocessors', 'description' => 'List of subprocessors', 'updated' => 'March 15, 2026'],
                                ['name' => 'Compliance Reports', 'path' => '/legal/compliance', 'description' => 'SOC 2, ISO reports', 'updated' => 'March 10, 2026'],
                                ['name' => 'Data Request Form', 'path' => '/legal/data-request', 'description' => 'Submit DSAR', 'updated' => 'March 5, 2026']
                            ]
                        ],
                        [
                            'id' => 'company',
                            'name' => 'Company',
                            'icon' => 'building',
                            'color' => 'from-teal-500 to-teal-600',
                            'bgColor' => 'bg-teal-50 dark:bg-teal-900/20',
                            'description' => 'Company information and news',
                            'linkCount' => 7,
                            'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
                            'links' => [
                                ['name' => 'About Us', 'path' => '/company/about', 'description' => 'Company overview', 'updated' => 'March 15, 2026'],
                                ['name' => 'Leadership', 'path' => '/company/leadership', 'description' => 'Executive team', 'updated' => 'March 10, 2026'],
                                ['name' => 'Mission & Values', 'path' => '/company/values', 'description' => 'Core values', 'updated' => 'March 5, 2026'],
                                ['name' => 'Newsroom', 'path' => '/company/news', 'description' => 'Latest news', 'updated' => 'April 7, 2026'],
                                ['name' => 'Events', 'path' => '/company/events', 'description' => 'Upcoming events', 'updated' => 'April 1, 2026'],
                                ['name' => 'Partners', 'path' => '/company/partners', 'description' => 'Partner program', 'updated' => 'March 25, 2026'],
                                ['name' => 'Customers', 'path' => '/company/customers', 'description' => 'Customer stories', 'updated' => 'March 20, 2026']
                            ]
                        ],
                        [
                            'id' => 'security',
                            'name' => 'Security',
                            'icon' => 'shield',
                            'color' => 'from-emerald-500 to-emerald-600',
                            'bgColor' => 'bg-emerald-50 dark:bg-emerald-900/20',
                            'description' => 'Security practices and certifications',
                            'linkCount' => 6,
                            'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
                            'links' => [
                                ['name' => 'Security Overview', 'path' => '/security/overview', 'description' => 'Security program', 'updated' => 'April 5, 2026'],
                                ['name' => 'Certifications', 'path' => '/security/certifications', 'description' => 'SOC 2, ISO certifications', 'updated' => 'April 4, 2026'],
                                ['name' => 'Vulnerability Disclosure', 'path' => '/security/disclosure', 'description' => 'Report vulnerabilities', 'updated' => 'April 3, 2026'],
                                ['name' => 'Bug Bounty', 'path' => '/security/bug-bounty', 'description' => 'Bug bounty program', 'updated' => 'April 2, 2026'],
                                ['name' => 'Data Encryption', 'path' => '/security/encryption', 'description' => 'Encryption standards', 'updated' => 'April 1, 2026'],
                                ['name' => 'Incident Response', 'path' => '/security/incident-response', 'description' => 'Breach procedures', 'updated' => 'March 30, 2026']
                            ]
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 708,
                'section_key' => 'categoryLinks',
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
