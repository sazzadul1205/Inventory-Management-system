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

            // Resource Links Section Variants
            [
                'id' => 709,
                'section_key' => 'resourceLinks',
                'variant' => 'variant1',
                'config' => json_encode([
                    'lastUpdated' => 'April 8, 2026',
                    'badge' => 'Knowledge Base',
                    'title' => [
                        'prefix' => 'Learning',
                        'highlight' => 'Resources'
                    ],
                    'description' => 'Access our library of documentation, tutorials, case studies, and other resources to help you succeed with SupplyChainPro.',
                    'resourceCategories' => [
                        [
                            'id' => 'documentation',
                            'name' => 'Documentation',
                            'icon' => 'document',
                            'color' => 'from-blue-500 to-blue-600',
                            'bgColor' => 'bg-blue-50 dark:bg-blue-900/20',
                            'description' => 'Technical documentation and product guides',
                            'resourceCount' => 8,
                            'resources' => [
                                ['name' => 'Getting Started Guide', 'path' => '/docs/getting-started', 'description' => 'Learn the basics of SupplyChainPro', 'type' => 'Guide', 'updated' => 'April 1, 2026'],
                                ['name' => 'API Reference', 'path' => '/api/docs', 'description' => 'Complete API documentation', 'type' => 'Technical', 'updated' => 'April 5, 2026'],
                                ['name' => 'Integration Guide', 'path' => '/docs/integrations', 'description' => 'Connect with third-party services', 'type' => 'Guide', 'updated' => 'March 28, 2026'],
                                ['name' => 'Security Best Practices', 'path' => '/docs/security', 'description' => 'Keep your data secure', 'type' => 'Guide', 'updated' => 'March 25, 2026'],
                                ['name' => 'Data Modeling Guide', 'path' => '/docs/data-modeling', 'description' => 'Understand data structures', 'type' => 'Technical', 'updated' => 'March 20, 2026'],
                                ['name' => 'Troubleshooting Guide', 'path' => '/docs/troubleshooting', 'description' => 'Common issues and solutions', 'type' => 'Guide', 'updated' => 'March 15, 2026'],
                                ['name' => 'SDK Documentation', 'path' => '/docs/sdk', 'description' => 'Mobile SDK documentation', 'type' => 'Technical', 'updated' => 'March 10, 2026'],
                                ['name' => 'Release Notes', 'path' => '/release-notes', 'description' => 'Version history and updates', 'type' => 'Reference', 'updated' => 'April 8, 2026']
                            ]
                        ],
                        [
                            'id' => 'tutorials',
                            'name' => 'Tutorials & Videos',
                            'icon' => 'video',
                            'color' => 'from-purple-500 to-purple-600',
                            'bgColor' => 'bg-purple-50 dark:bg-purple-900/20',
                            'description' => 'Step-by-step tutorials and video guides',
                            'resourceCount' => 6,
                            'resources' => [
                                ['name' => 'Video: Getting Started', 'path' => '/tutorials/getting-started', 'description' => '5-minute overview of SupplyChainPro', 'type' => 'Video', 'duration' => '5:32', 'updated' => 'April 2, 2026'],
                                ['name' => 'Video: Inventory Management', 'path' => '/tutorials/inventory', 'description' => 'Manage your inventory effectively', 'type' => 'Video', 'duration' => '12:15', 'updated' => 'March 28, 2026'],
                                ['name' => 'Video: API Integration', 'path' => '/tutorials/api-integration', 'description' => 'Connect your systems', 'type' => 'Video', 'duration' => '18:45', 'updated' => 'March 25, 2026'],
                                ['name' => 'Written Tutorial: Analytics', 'path' => '/tutorials/analytics', 'description' => 'Master the analytics dashboard', 'type' => 'Written', 'updated' => 'March 20, 2026'],
                                ['name' => 'Video: Mobile App Setup', 'path' => '/tutorials/mobile-setup', 'description' => 'Configure mobile access', 'type' => 'Video', 'duration' => '8:22', 'updated' => 'March 15, 2026'],
                                ['name' => 'Written Tutorial: Reports', 'path' => '/tutorials/reports', 'description' => 'Create custom reports', 'type' => 'Written', 'updated' => 'March 10, 2026']
                            ]
                        ],
                        [
                            'id' => 'webinars',
                            'name' => 'Webinars & Events',
                            'icon' => 'presentation',
                            'color' => 'from-green-500 to-green-600',
                            'bgColor' => 'bg-green-50 dark:bg-green-900/20',
                            'description' => 'Live and recorded webinars',
                            'resourceCount' => 5,
                            'resources' => [
                                ['name' => 'Supply Chain Trends 2026', 'path' => '/webinars/trends-2026', 'description' => 'Industry insights and predictions', 'type' => 'Recording', 'date' => 'March 15, 2026', 'duration' => '45:00'],
                                ['name' => 'Advanced Analytics Workshop', 'path' => '/webinars/analytics-workshop', 'description' => 'Deep dive into analytics', 'type' => 'Recording', 'date' => 'February 28, 2026', 'duration' => '60:00'],
                                ['name' => 'API Best Practices', 'path' => '/webinars/api-best-practices', 'description' => 'Optimize your API usage', 'type' => 'Recording', 'date' => 'February 10, 2026', 'duration' => '50:00'],
                                ['name' => 'Security Deep Dive (Upcoming)', 'path' => '/webinars/security-deep-dive', 'description' => 'Learn about our security framework', 'type' => 'Upcoming', 'date' => 'May 5, 2026', 'duration' => '55:00'],
                                ['name' => 'Mobile App Masterclass', 'path' => '/webinars/mobile-masterclass', 'description' => 'Get the most from mobile', 'type' => 'Recording', 'date' => 'January 20, 2026', 'duration' => '40:00']
                            ]
                        ],
                        [
                            'id' => 'case-studies',
                            'name' => 'Case Studies',
                            'icon' => 'document',
                            'color' => 'from-orange-500 to-orange-600',
                            'bgColor' => 'bg-orange-50 dark:bg-orange-900/20',
                            'description' => 'Customer success stories',
                            'resourceCount' => 6,
                            'resources' => [
                                ['name' => 'Global Retail Corp: 50% Efficiency Gain', 'path' => '/case-studies/global-retail', 'description' => 'How a major retailer transformed operations', 'industry' => 'Retail', 'updated' => 'March 20, 2026'],
                                ['name' => 'HealthTech Solutions: Compliance Success', 'path' => '/case-studies/healthtech', 'description' => 'Meeting healthcare compliance requirements', 'industry' => 'Healthcare', 'updated' => 'March 15, 2026'],
                                ['name' => 'EuroLogistics: Real-time Tracking', 'path' => '/case-studies/eurologistics', 'description' => 'Improved visibility across Europe', 'industry' => 'Logistics', 'updated' => 'March 10, 2026'],
                                ['name' => 'Manufacturing Co: Inventory Optimization', 'path' => '/case-studies/manufacturing', 'description' => 'Reduced inventory costs by 30%', 'industry' => 'Manufacturing', 'updated' => 'March 5, 2026'],
                                ['name' => 'Food Distributor: Cold Chain Management', 'path' => '/case-studies/food-distributor', 'description' => 'Maintaining temperature compliance', 'industry' => 'Food & Beverage', 'updated' => 'February 28, 2026'],
                                ['name' => 'Pharma Company: Serialization', 'path' => '/case-studies/pharma', 'description' => 'Track and trace compliance', 'industry' => 'Pharmaceutical', 'updated' => 'February 20, 2026']
                            ]
                        ],
                        [
                            'id' => 'white-papers',
                            'name' => 'White Papers',
                            'icon' => 'academic',
                            'color' => 'from-red-500 to-red-600',
                            'bgColor' => 'bg-red-50 dark:bg-red-900/20',
                            'description' => 'In-depth research and analysis',
                            'resourceCount' => 4,
                            'resources' => [
                                ['name' => 'The Future of Supply Chain AI', 'path' => '/white-papers/ai-supply-chain', 'description' => 'How AI is transforming logistics', 'pages' => 24, 'updated' => 'March 1, 2026'],
                                ['name' => 'Sustainability in Supply Chain', 'path' => '/white-papers/sustainability', 'description' => 'Green logistics strategies', 'pages' => 32, 'updated' => 'February 15, 2026'],
                                ['name' => 'Blockchain for Traceability', 'path' => '/white-papers/blockchain', 'description' => 'Distributed ledger applications', 'pages' => 28, 'updated' => 'January 20, 2026'],
                                ['name' => 'Supply Chain Risk Management', 'path' => '/white-papers/risk-management', 'description' => 'Mitigating disruptions', 'pages' => 36, 'updated' => 'December 10, 2025']
                            ]
                        ],
                        [
                            'id' => 'ebooks',
                            'name' => 'E-books & Guides',
                            'icon' => 'book',
                            'color' => 'from-pink-500 to-pink-600',
                            'bgColor' => 'bg-pink-50 dark:bg-pink-900/20',
                            'description' => 'Free downloadable guides',
                            'resourceCount' => 5,
                            'resources' => [
                                ['name' => 'Supply Chain Management Guide', 'path' => '/ebooks/scm-guide', 'description' => 'Comprehensive introduction', 'pages' => 48, 'updated' => 'March 10, 2026'],
                                ['name' => 'Inventory Optimization Workbook', 'path' => '/ebooks/inventory-workbook', 'description' => 'Practical exercises and templates', 'pages' => 32, 'updated' => 'February 20, 2026'],
                                ['name' => 'API Integration Handbook', 'path' => '/ebooks/api-handbook', 'description' => 'Developer guide to APIs', 'pages' => 56, 'updated' => 'January 25, 2026'],
                                ['name' => 'Data Security Checklist', 'path' => '/ebooks/security-checklist', 'description' => 'Essential security practices', 'pages' => 24, 'updated' => 'January 5, 2026'],
                                ['name' => 'Mobile App User Guide', 'path' => '/ebooks/mobile-guide', 'description' => 'Tips and tricks for mobile users', 'pages' => 40, 'updated' => 'December 15, 2025']
                            ]
                        ],
                        [
                            'id' => 'infographics',
                            'name' => 'Infographics',
                            'icon' => 'document',
                            'color' => 'from-cyan-500 to-cyan-600',
                            'bgColor' => 'bg-cyan-50 dark:bg-cyan-900/20',
                            'description' => 'Visual data and insights',
                            'resourceCount' => 4,
                            'resources' => [
                                ['name' => 'Supply Chain Metrics', 'path' => '/infographics/metrics', 'description' => 'Key performance indicators', 'type' => 'PDF', 'updated' => 'March 5, 2026'],
                                ['name' => 'Digital Transformation Roadmap', 'path' => '/infographics/roadmap', 'description' => 'Step-by-step guide', 'type' => 'PDF', 'updated' => 'February 25, 2026'],
                                ['name' => 'Data Flow Architecture', 'path' => '/infographics/architecture', 'description' => 'How data moves through our system', 'type' => 'PDF', 'updated' => 'February 10, 2026'],
                                ['name' => 'Compliance Overview', 'path' => '/infographics/compliance', 'description' => 'GDPR, SOC 2, ISO explained', 'type' => 'PDF', 'updated' => 'January 30, 2026']
                            ]
                        ],
                        [
                            'id' => 'blog',
                            'name' => 'Blog & News',
                            'icon' => 'newspaper',
                            'color' => 'from-teal-500 to-teal-600',
                            'bgColor' => 'bg-teal-50 dark:bg-teal-900/20',
                            'description' => 'Latest articles and company news',
                            'resourceCount' => 6,
                            'resources' => [
                                ['name' => 'Introducing SupplyChainPro v3.0', 'path' => '/blog/v3-launch', 'description' => 'What\'s new in our latest release', 'author' => 'Product Team', 'date' => 'April 8, 2026'],
                                ['name' => 'Top 10 Supply Chain Trends for 2026', 'path' => '/blog/trends-2026', 'description' => 'Industry predictions', 'author' => 'Industry Analyst', 'date' => 'April 1, 2026'],
                                ['name' => 'How to Reduce Inventory Costs', 'path' => '/blog/reduce-inventory-costs', 'description' => 'Practical strategies', 'author' => 'Operations Expert', 'date' => 'March 25, 2026'],
                                ['name' => 'Company Announcement: New Funding', 'path' => '/blog/funding-announcement', 'description' => '$50M Series C round', 'author' => 'CEO', 'date' => 'March 18, 2026'],
                                ['name' => 'Customer Spotlight: Global Retail Corp', 'path' => '/blog/customer-spotlight', 'description' => 'How they achieved 50% efficiency gain', 'author' => 'Customer Success', 'date' => 'March 10, 2026'],
                                ['name' => 'Security Update: SOC 2 Certification', 'path' => '/blog/soc2-certification', 'description' => 'Achieving SOC 2 Type II', 'author' => 'Security Team', 'date' => 'March 5, 2026']
                            ]
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 710,
                'section_key' => 'resourceLinks',
                'variant' => 'variant2',
                'config' => json_encode([
                    'lastUpdated' => 'April 8, 2026',
                    'badge' => 'Resource Center',
                    'title' => [
                        'prefix' => 'Knowledge',
                        'highlight' => 'Library'
                    ],
                    'description' => 'Access our library of documentation, tutorials, case studies, and other resources to help you succeed with SupplyChainPro.',
                    'tabs' => [
                        ['id' => 'all', 'label' => 'All Resources', 'icon' => 'folder'],
                        ['id' => 'popular', 'label' => 'Popular', 'icon' => 'star'],
                        ['id' => 'recent', 'label' => 'Recently Added', 'icon' => 'trending-up']
                    ],
                    'resourceTypes' => [
                        ['id' => 'all', 'label' => 'All Types'],
                        ['id' => 'Guide', 'label' => 'Guides'],
                        ['id' => 'Video', 'label' => 'Videos'],
                        ['id' => 'Technical', 'label' => 'Technical Docs'],
                        ['id' => 'Recording', 'label' => 'Webinar Recordings'],
                        ['id' => 'Case Study', 'label' => 'Case Studies'],
                        ['id' => 'White Paper', 'label' => 'White Papers'],
                        ['id' => 'E-book', 'label' => 'E-books']
                    ],
                    'popularResources' => [
                        ['name' => 'Getting Started Guide', 'path' => '/docs/getting-started', 'category' => 'Documentation', 'type' => 'Guide', 'downloads' => '15.2K'],
                        ['name' => 'API Reference', 'path' => '/api/docs', 'category' => 'Documentation', 'type' => 'Technical', 'downloads' => '12.8K'],
                        ['name' => 'Video: Getting Started', 'path' => '/tutorials/getting-started', 'category' => 'Tutorials', 'type' => 'Video', 'views' => '8.5K'],
                        ['name' => 'Supply Chain Management Guide', 'path' => '/ebooks/scm-guide', 'category' => 'E-books', 'type' => 'E-book', 'downloads' => '7.2K'],
                        ['name' => 'Global Retail Corp Case Study', 'path' => '/case-studies/global-retail', 'category' => 'Case Studies', 'type' => 'Case Study', 'downloads' => '5.6K'],
                        ['name' => 'Inventory Optimization Workbook', 'path' => '/ebooks/inventory-workbook', 'category' => 'E-books', 'type' => 'E-book', 'downloads' => '4.9K']
                    ],
                    'recentlyAdded' => [
                        ['name' => 'Introducing SupplyChainPro v3.0', 'path' => '/blog/v3-launch', 'category' => 'Blog', 'type' => 'Article', 'date' => 'April 8, 2026'],
                        ['name' => 'Security Policy Update', 'path' => '/legal/security', 'category' => 'Legal', 'type' => 'Policy', 'date' => 'April 5, 2026'],
                        ['name' => 'Data Processing Agreement v2', 'path' => '/legal/dpa', 'category' => 'Legal', 'type' => 'Agreement', 'date' => 'April 1, 2026'],
                        ['name' => 'Android App v3.0 Guide', 'path' => '/docs/android-v3', 'category' => 'Documentation', 'type' => 'Guide', 'date' => 'March 28, 2026'],
                        ['name' => 'iOS App v3.0 Guide', 'path' => '/docs/ios-v3', 'category' => 'Documentation', 'type' => 'Guide', 'date' => 'March 28, 2026'],
                        ['name' => 'Cookie Policy Update', 'path' => '/legal/cookies', 'category' => 'Legal', 'type' => 'Policy', 'date' => 'March 25, 2026']
                    ],
                    'resourceCategories' => [
                        [
                            'id' => 'documentation',
                            'name' => 'Documentation',
                            'icon' => 'document',
                            'color' => 'from-blue-500 to-blue-600',
                            'bgColor' => 'bg-blue-50 dark:bg-blue-900/20',
                            'description' => 'Technical documentation and product guides',
                            'resourceCount' => 8,
                            'resources' => [
                                ['name' => 'Getting Started Guide', 'path' => '/docs/getting-started', 'description' => 'Learn the basics of SupplyChainPro', 'type' => 'Guide', 'updated' => 'April 1, 2026', 'downloads' => '15.2K'],
                                ['name' => 'API Reference', 'path' => '/api/docs', 'description' => 'Complete API documentation', 'type' => 'Technical', 'updated' => 'April 5, 2026', 'downloads' => '12.8K'],
                                ['name' => 'Integration Guide', 'path' => '/docs/integrations', 'description' => 'Connect with third-party services', 'type' => 'Guide', 'updated' => 'March 28, 2026', 'downloads' => '8.3K'],
                                ['name' => 'Security Best Practices', 'path' => '/docs/security', 'description' => 'Keep your data secure', 'type' => 'Guide', 'updated' => 'March 25, 2026', 'downloads' => '6.7K'],
                                ['name' => 'Data Modeling Guide', 'path' => '/docs/data-modeling', 'description' => 'Understand data structures', 'type' => 'Technical', 'updated' => 'March 20, 2026', 'downloads' => '5.2K'],
                                ['name' => 'Troubleshooting Guide', 'path' => '/docs/troubleshooting', 'description' => 'Common issues and solutions', 'type' => 'Guide', 'updated' => 'March 15, 2026', 'downloads' => '4.8K'],
                                ['name' => 'SDK Documentation', 'path' => '/docs/sdk', 'description' => 'Mobile SDK documentation', 'type' => 'Technical', 'updated' => 'March 10, 2026', 'downloads' => '3.9K'],
                                ['name' => 'Release Notes', 'path' => '/release-notes', 'description' => 'Version history and updates', 'type' => 'Reference', 'updated' => 'April 8, 2026', 'downloads' => '11.2K']
                            ]
                        ],
                        [
                            'id' => 'tutorials',
                            'name' => 'Tutorials & Videos',
                            'icon' => 'video',
                            'color' => 'from-purple-500 to-purple-600',
                            'bgColor' => 'bg-purple-50 dark:bg-purple-900/20',
                            'description' => 'Step-by-step tutorials and video guides',
                            'resourceCount' => 6,
                            'resources' => [
                                ['name' => 'Video: Getting Started', 'path' => '/tutorials/getting-started', 'description' => '5-minute overview of SupplyChainPro', 'type' => 'Video', 'duration' => '5:32', 'updated' => 'April 2, 2026', 'views' => '8.5K'],
                                ['name' => 'Video: Inventory Management', 'path' => '/tutorials/inventory', 'description' => 'Manage your inventory effectively', 'type' => 'Video', 'duration' => '12:15', 'updated' => 'March 28, 2026', 'views' => '6.2K'],
                                ['name' => 'Video: API Integration', 'path' => '/tutorials/api-integration', 'description' => 'Connect your systems', 'type' => 'Video', 'duration' => '18:45', 'updated' => 'March 25, 2026', 'views' => '5.1K'],
                                ['name' => 'Written Tutorial: Analytics', 'path' => '/tutorials/analytics', 'description' => 'Master the analytics dashboard', 'type' => 'Guide', 'updated' => 'March 20, 2026', 'views' => '4.3K'],
                                ['name' => 'Video: Mobile App Setup', 'path' => '/tutorials/mobile-setup', 'description' => 'Configure mobile access', 'type' => 'Video', 'duration' => '8:22', 'updated' => 'March 15, 2026', 'views' => '3.8K'],
                                ['name' => 'Written Tutorial: Reports', 'path' => '/tutorials/reports', 'description' => 'Create custom reports', 'type' => 'Guide', 'updated' => 'March 10, 2026', 'views' => '3.2K']
                            ]
                        ],
                        [
                            'id' => 'webinars',
                            'name' => 'Webinars & Events',
                            'icon' => 'presentation',
                            'color' => 'from-green-500 to-green-600',
                            'bgColor' => 'bg-green-50 dark:bg-green-900/20',
                            'description' => 'Live and recorded webinars',
                            'resourceCount' => 5,
                            'resources' => [
                                ['name' => 'Supply Chain Trends 2026', 'path' => '/webinars/trends-2026', 'description' => 'Industry insights and predictions', 'type' => 'Recording', 'date' => 'March 15, 2026', 'duration' => '45:00', 'attendees' => '1.2K'],
                                ['name' => 'Advanced Analytics Workshop', 'path' => '/webinars/analytics-workshop', 'description' => 'Deep dive into analytics', 'type' => 'Recording', 'date' => 'February 28, 2026', 'duration' => '60:00', 'attendees' => '856'],
                                ['name' => 'API Best Practices', 'path' => '/webinars/api-best-practices', 'description' => 'Optimize your API usage', 'type' => 'Recording', 'date' => 'February 10, 2026', 'duration' => '50:00', 'attendees' => '1.1K'],
                                ['name' => 'Security Deep Dive (Upcoming)', 'path' => '/webinars/security-deep-dive', 'description' => 'Learn about our security framework', 'type' => 'Upcoming', 'date' => 'May 5, 2026', 'duration' => '55:00'],
                                ['name' => 'Mobile App Masterclass', 'path' => '/webinars/mobile-masterclass', 'description' => 'Get the most from mobile', 'type' => 'Recording', 'date' => 'January 20, 2026', 'duration' => '40:00', 'attendees' => '934']
                            ]
                        ],
                        [
                            'id' => 'case-studies',
                            'name' => 'Case Studies',
                            'icon' => 'document',
                            'color' => 'from-orange-500 to-orange-600',
                            'bgColor' => 'bg-orange-50 dark:bg-orange-900/20',
                            'description' => 'Customer success stories',
                            'resourceCount' => 6,
                            'resources' => [
                                ['name' => 'Global Retail Corp: 50% Efficiency Gain', 'path' => '/case-studies/global-retail', 'description' => 'How a major retailer transformed operations', 'type' => 'Case Study', 'industry' => 'Retail', 'updated' => 'March 20, 2026', 'downloads' => '5.6K'],
                                ['name' => 'HealthTech Solutions: Compliance Success', 'path' => '/case-studies/healthtech', 'description' => 'Meeting healthcare compliance requirements', 'type' => 'Case Study', 'industry' => 'Healthcare', 'updated' => 'March 15, 2026', 'downloads' => '4.2K'],
                                ['name' => 'EuroLogistics: Real-time Tracking', 'path' => '/case-studies/eurologistics', 'description' => 'Improved visibility across Europe', 'type' => 'Case Study', 'industry' => 'Logistics', 'updated' => 'March 10, 2026', 'downloads' => '3.8K'],
                                ['name' => 'Manufacturing Co: Inventory Optimization', 'path' => '/case-studies/manufacturing', 'description' => 'Reduced inventory costs by 30%', 'type' => 'Case Study', 'industry' => 'Manufacturing', 'updated' => 'March 5, 2026', 'downloads' => '3.5K'],
                                ['name' => 'Food Distributor: Cold Chain Management', 'path' => '/case-studies/food-distributor', 'description' => 'Maintaining temperature compliance', 'type' => 'Case Study', 'industry' => 'Food & Beverage', 'updated' => 'February 28, 2026', 'downloads' => '2.9K'],
                                ['name' => 'Pharma Company: Serialization', 'path' => '/case-studies/pharma', 'description' => 'Track and trace compliance', 'type' => 'Case Study', 'industry' => 'Pharmaceutical', 'updated' => 'February 20, 2026', 'downloads' => '2.7K']
                            ]
                        ],
                        [
                            'id' => 'white-papers',
                            'name' => 'White Papers',
                            'icon' => 'academic',
                            'color' => 'from-red-500 to-red-600',
                            'bgColor' => 'bg-red-50 dark:bg-red-900/20',
                            'description' => 'In-depth research and analysis',
                            'resourceCount' => 4,
                            'resources' => [
                                ['name' => 'The Future of Supply Chain AI', 'path' => '/white-papers/ai-supply-chain', 'description' => 'How AI is transforming logistics', 'type' => 'White Paper', 'pages' => 24, 'updated' => 'March 1, 2026', 'downloads' => '3.2K'],
                                ['name' => 'Sustainability in Supply Chain', 'path' => '/white-papers/sustainability', 'description' => 'Green logistics strategies', 'type' => 'White Paper', 'pages' => 32, 'updated' => 'February 15, 2026', 'downloads' => '2.8K'],
                                ['name' => 'Blockchain for Traceability', 'path' => '/white-papers/blockchain', 'description' => 'Distributed ledger applications', 'type' => 'White Paper', 'pages' => 28, 'updated' => 'January 20, 2026', 'downloads' => '2.3K'],
                                ['name' => 'Supply Chain Risk Management', 'path' => '/white-papers/risk-management', 'description' => 'Mitigating disruptions', 'type' => 'White Paper', 'pages' => 36, 'updated' => 'December 10, 2025', 'downloads' => '2.1K']
                            ]
                        ],
                        [
                            'id' => 'ebooks',
                            'name' => 'E-books & Guides',
                            'icon' => 'book',
                            'color' => 'from-pink-500 to-pink-600',
                            'bgColor' => 'bg-pink-50 dark:bg-pink-900/20',
                            'description' => 'Free downloadable guides',
                            'resourceCount' => 5,
                            'resources' => [
                                ['name' => 'Supply Chain Management Guide', 'path' => '/ebooks/scm-guide', 'description' => 'Comprehensive introduction', 'type' => 'E-book', 'pages' => 48, 'updated' => 'March 10, 2026', 'downloads' => '7.2K'],
                                ['name' => 'Inventory Optimization Workbook', 'path' => '/ebooks/inventory-workbook', 'description' => 'Practical exercises and templates', 'type' => 'E-book', 'pages' => 32, 'updated' => 'February 20, 2026', 'downloads' => '4.9K'],
                                ['name' => 'API Integration Handbook', 'path' => '/ebooks/api-handbook', 'description' => 'Developer guide to APIs', 'type' => 'E-book', 'pages' => 56, 'updated' => 'January 25, 2026', 'downloads' => '3.8K'],
                                ['name' => 'Data Security Checklist', 'path' => '/ebooks/security-checklist', 'description' => 'Essential security practices', 'type' => 'E-book', 'pages' => 24, 'updated' => 'January 5, 2026', 'downloads' => '3.1K'],
                                ['name' => 'Mobile App User Guide', 'path' => '/ebooks/mobile-guide', 'description' => 'Tips and tricks for mobile users', 'type' => 'E-book', 'pages' => 40, 'updated' => 'December 15, 2025', 'downloads' => '2.6K']
                            ]
                        ],
                        [
                            'id' => 'infographics',
                            'name' => 'Infographics',
                            'icon' => 'document',
                            'color' => 'from-cyan-500 to-cyan-600',
                            'bgColor' => 'bg-cyan-50 dark:bg-cyan-900/20',
                            'description' => 'Visual data and insights',
                            'resourceCount' => 4,
                            'resources' => [
                                ['name' => 'Supply Chain Metrics', 'path' => '/infographics/metrics', 'description' => 'Key performance indicators', 'type' => 'Infographic', 'updated' => 'March 5, 2026', 'downloads' => '2.1K'],
                                ['name' => 'Digital Transformation Roadmap', 'path' => '/infographics/roadmap', 'description' => 'Step-by-step guide', 'type' => 'Infographic', 'updated' => 'February 25, 2026', 'downloads' => '1.9K'],
                                ['name' => 'Data Flow Architecture', 'path' => '/infographics/architecture', 'description' => 'How data moves through our system', 'type' => 'Infographic', 'updated' => 'February 10, 2026', 'downloads' => '1.6K'],
                                ['name' => 'Compliance Overview', 'path' => '/infographics/compliance', 'description' => 'GDPR, SOC 2, ISO explained', 'type' => 'Infographic', 'updated' => 'January 30, 2026', 'downloads' => '1.8K']
                            ]
                        ],
                        [
                            'id' => 'blog',
                            'name' => 'Blog & News',
                            'icon' => 'newspaper',
                            'color' => 'from-teal-500 to-teal-600',
                            'bgColor' => 'bg-teal-50 dark:bg-teal-900/20',
                            'description' => 'Latest articles and company news',
                            'resourceCount' => 6,
                            'resources' => [
                                ['name' => 'Introducing SupplyChainPro v3.0', 'path' => '/blog/v3-launch', 'description' => 'What\'s new in our latest release', 'type' => 'Article', 'author' => 'Product Team', 'date' => 'April 8, 2026', 'reads' => '3.2K'],
                                ['name' => 'Top 10 Supply Chain Trends for 2026', 'path' => '/blog/trends-2026', 'description' => 'Industry predictions', 'type' => 'Article', 'author' => 'Industry Analyst', 'date' => 'April 1, 2026', 'reads' => '2.8K'],
                                ['name' => 'How to Reduce Inventory Costs', 'path' => '/blog/reduce-inventory-costs', 'description' => 'Practical strategies', 'type' => 'Article', 'author' => 'Operations Expert', 'date' => 'March 25, 2026', 'reads' => '2.1K'],
                                ['name' => 'Company Announcement: New Funding', 'path' => '/blog/funding-announcement', 'description' => '$50M Series C round', 'type' => 'Announcement', 'author' => 'CEO', 'date' => 'March 18, 2026', 'reads' => '4.5K'],
                                ['name' => 'Customer Spotlight: Global Retail Corp', 'path' => '/blog/customer-spotlight', 'description' => 'How they achieved 50% efficiency gain', 'type' => 'Article', 'author' => 'Customer Success', 'date' => 'March 10, 2026', 'reads' => '1.9K'],
                                ['name' => 'Security Update: SOC 2 Certification', 'path' => '/blog/soc2-certification', 'description' => 'Achieving SOC 2 Type II', 'type' => 'Announcement', 'author' => 'Security Team', 'date' => 'March 5, 2026', 'reads' => '2.3K']
                            ]
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 711,
                'section_key' => 'resourceLinks',
                'variant' => 'variant3',
                'config' => json_encode([
                    'lastUpdated' => 'April 8, 2026',
                    'autoPlayCarousel' => true,
                    'badge' => 'Resource Hub',
                    'title' => [
                        'prefix' => 'Knowledge',
                        'highlight' => 'Center'
                    ],
                    'description' => 'Access our library of documentation, tutorials, case studies, and other resources to help you succeed with SupplyChainPro.',
                    'featuredResources' => [
                        ['title' => 'Getting Started Guide', 'description' => 'Learn the basics of SupplyChainPro in under 30 minutes.', 'icon' => 'document', 'color' => 'from-blue-500 to-blue-600', 'path' => '/docs/getting-started', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'],
                        ['title' => 'API Masterclass', 'description' => 'Deep dive into our API with practical examples.', 'icon' => 'video', 'color' => 'from-purple-500 to-purple-600', 'path' => '/webinars/api-best-practices', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'],
                        ['title' => 'Supply Chain Trends 2026', 'description' => 'Industry insights and predictions from experts.', 'icon' => 'presentation', 'color' => 'from-green-500 to-green-600', 'path' => '/webinars/trends-2026', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFunflies.mp4'],
                        ['title' => 'Security Best Practices', 'description' => 'Keep your data secure with our security guide.', 'icon' => 'shield', 'color' => 'from-red-500 to-red-600', 'path' => '/docs/security', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4']
                    ],
                    'tabs' => [
                        ['id' => 'all', 'label' => 'All Resources', 'icon' => 'folder'],
                        ['id' => 'popular', 'label' => 'Popular', 'icon' => 'star'],
                        ['id' => 'recent', 'label' => 'Recently Added', 'icon' => 'trending-up']
                    ],
                    'resourceTypes' => [
                        ['id' => 'all', 'label' => 'All Types'],
                        ['id' => 'Guide', 'label' => 'Guides'],
                        ['id' => 'Video', 'label' => 'Videos'],
                        ['id' => 'Technical', 'label' => 'Technical Docs'],
                        ['id' => 'Recording', 'label' => 'Webinar Recordings'],
                        ['id' => 'Case Study', 'label' => 'Case Studies'],
                        ['id' => 'White Paper', 'label' => 'White Papers'],
                        ['id' => 'E-book', 'label' => 'E-books']
                    ],
                    'popularResources' => [
                        ['name' => 'Getting Started Guide', 'path' => '/docs/getting-started', 'category' => 'Documentation', 'type' => 'Guide', 'downloads' => '15.2K', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'],
                        ['name' => 'API Reference', 'path' => '/api/docs', 'category' => 'Documentation', 'type' => 'Technical', 'downloads' => '12.8K'],
                        ['name' => 'Video: Getting Started', 'path' => '/tutorials/getting-started', 'category' => 'Tutorials', 'type' => 'Video', 'views' => '8.5K', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'],
                        ['name' => 'Supply Chain Management Guide', 'path' => '/ebooks/scm-guide', 'category' => 'E-books', 'type' => 'E-book', 'downloads' => '7.2K'],
                        ['name' => 'Global Retail Corp Case Study', 'path' => '/case-studies/global-retail', 'category' => 'Case Studies', 'type' => 'Case Study', 'downloads' => '5.6K'],
                        ['name' => 'Inventory Optimization Workbook', 'path' => '/ebooks/inventory-workbook', 'category' => 'E-books', 'type' => 'E-book', 'downloads' => '4.9K']
                    ],
                    'recentlyAdded' => [
                        ['name' => 'Introducing SupplyChainPro v3.0', 'path' => '/blog/v3-launch', 'category' => 'Blog', 'type' => 'Article', 'date' => 'April 8, 2026', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'],
                        ['name' => 'Security Policy Update', 'path' => '/legal/security', 'category' => 'Legal', 'type' => 'Policy', 'date' => 'April 5, 2026'],
                        ['name' => 'Data Processing Agreement v2', 'path' => '/legal/dpa', 'category' => 'Legal', 'type' => 'Agreement', 'date' => 'April 1, 2026'],
                        ['name' => 'Android App v3.0 Guide', 'path' => '/docs/android-v3', 'category' => 'Documentation', 'type' => 'Guide', 'date' => 'March 28, 2026'],
                        ['name' => 'iOS App v3.0 Guide', 'path' => '/docs/ios-v3', 'category' => 'Documentation', 'type' => 'Guide', 'date' => 'March 28, 2026'],
                        ['name' => 'Cookie Policy Update', 'path' => '/legal/cookies', 'category' => 'Legal', 'type' => 'Policy', 'date' => 'March 25, 2026']
                    ],
                    'resourceCategories' => [
                        [
                            'id' => 'documentation',
                            'name' => 'Documentation',
                            'icon' => 'document',
                            'color' => 'from-blue-500 to-blue-600',
                            'bgColor' => 'bg-blue-50 dark:bg-blue-900/20',
                            'description' => 'Technical documentation and product guides',
                            'resourceCount' => 8,
                            'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
                            'resources' => [
                                ['name' => 'Getting Started Guide', 'path' => '/docs/getting-started', 'description' => 'Learn the basics of SupplyChainPro', 'type' => 'Guide', 'updated' => 'April 1, 2026', 'downloads' => '15.2K', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'],
                                ['name' => 'API Reference', 'path' => '/api/docs', 'description' => 'Complete API documentation', 'type' => 'Technical', 'updated' => 'April 5, 2026', 'downloads' => '12.8K'],
                                ['name' => 'Integration Guide', 'path' => '/docs/integrations', 'description' => 'Connect with third-party services', 'type' => 'Guide', 'updated' => 'March 28, 2026', 'downloads' => '8.3K'],
                                ['name' => 'Security Best Practices', 'path' => '/docs/security', 'description' => 'Keep your data secure', 'type' => 'Guide', 'updated' => 'March 25, 2026', 'downloads' => '6.7K', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4'],
                                ['name' => 'Data Modeling Guide', 'path' => '/docs/data-modeling', 'description' => 'Understand data structures', 'type' => 'Technical', 'updated' => 'March 20, 2026', 'downloads' => '5.2K'],
                                ['name' => 'Troubleshooting Guide', 'path' => '/docs/troubleshooting', 'description' => 'Common issues and solutions', 'type' => 'Guide', 'updated' => 'March 15, 2026', 'downloads' => '4.8K'],
                                ['name' => 'SDK Documentation', 'path' => '/docs/sdk', 'description' => 'Mobile SDK documentation', 'type' => 'Technical', 'updated' => 'March 10, 2026', 'downloads' => '3.9K'],
                                ['name' => 'Release Notes', 'path' => '/release-notes', 'description' => 'Version history and updates', 'type' => 'Reference', 'updated' => 'April 8, 2026', 'downloads' => '11.2K']
                            ]
                        ],
                        [
                            'id' => 'tutorials',
                            'name' => 'Tutorials & Videos',
                            'icon' => 'video',
                            'color' => 'from-purple-500 to-purple-600',
                            'bgColor' => 'bg-purple-50 dark:bg-purple-900/20',
                            'description' => 'Step-by-step tutorials and video guides',
                            'resourceCount' => 6,
                            'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
                            'resources' => [
                                ['name' => 'Video: Getting Started', 'path' => '/tutorials/getting-started', 'description' => '5-minute overview of SupplyChainPro', 'type' => 'Video', 'duration' => '5:32', 'updated' => 'April 2, 2026', 'views' => '8.5K', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'],
                                ['name' => 'Video: Inventory Management', 'path' => '/tutorials/inventory', 'description' => 'Manage your inventory effectively', 'type' => 'Video', 'duration' => '12:15', 'updated' => 'March 28, 2026', 'views' => '6.2K', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'],
                                ['name' => 'Video: API Integration', 'path' => '/tutorials/api-integration', 'description' => 'Connect your systems', 'type' => 'Video', 'duration' => '18:45', 'updated' => 'March 25, 2026', 'views' => '5.1K', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFunflies.mp4'],
                                ['name' => 'Written Tutorial: Analytics', 'path' => '/tutorials/analytics', 'description' => 'Master the analytics dashboard', 'type' => 'Guide', 'updated' => 'March 20, 2026', 'views' => '4.3K'],
                                ['name' => 'Video: Mobile App Setup', 'path' => '/tutorials/mobile-setup', 'description' => 'Configure mobile access', 'type' => 'Video', 'duration' => '8:22', 'updated' => 'March 15, 2026', 'views' => '3.8K', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4'],
                                ['name' => 'Written Tutorial: Reports', 'path' => '/tutorials/reports', 'description' => 'Create custom reports', 'type' => 'Guide', 'updated' => 'March 10, 2026', 'views' => '3.2K']
                            ]
                        ],
                        [
                            'id' => 'webinars',
                            'name' => 'Webinars & Events',
                            'icon' => 'presentation',
                            'color' => 'from-green-500 to-green-600',
                            'bgColor' => 'bg-green-50 dark:bg-green-900/20',
                            'description' => 'Live and recorded webinars',
                            'resourceCount' => 5,
                            'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFunflies.mp4',
                            'resources' => [
                                ['name' => 'Supply Chain Trends 2026', 'path' => '/webinars/trends-2026', 'description' => 'Industry insights and predictions', 'type' => 'Recording', 'date' => 'March 15, 2026', 'duration' => '45:00', 'attendees' => '1.2K', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'],
                                ['name' => 'Advanced Analytics Workshop', 'path' => '/webinars/analytics-workshop', 'description' => 'Deep dive into analytics', 'type' => 'Recording', 'date' => 'February 28, 2026', 'duration' => '60:00', 'attendees' => '856', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'],
                                ['name' => 'API Best Practices', 'path' => '/webinars/api-best-practices', 'description' => 'Optimize your API usage', 'type' => 'Recording', 'date' => 'February 10, 2026', 'duration' => '50:00', 'attendees' => '1.1K', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFunflies.mp4'],
                                ['name' => 'Security Deep Dive (Upcoming)', 'path' => '/webinars/security-deep-dive', 'description' => 'Learn about our security framework', 'type' => 'Upcoming', 'date' => 'May 5, 2026', 'duration' => '55:00'],
                                ['name' => 'Mobile App Masterclass', 'path' => '/webinars/mobile-masterclass', 'description' => 'Get the most from mobile', 'type' => 'Recording', 'date' => 'January 20, 2026', 'duration' => '40:00', 'attendees' => '934', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4']
                            ]
                        ],
                        [
                            'id' => 'case-studies',
                            'name' => 'Case Studies',
                            'icon' => 'document',
                            'color' => 'from-orange-500 to-orange-600',
                            'bgColor' => 'bg-orange-50 dark:bg-orange-900/20',
                            'description' => 'Customer success stories',
                            'resourceCount' => 6,
                            'resources' => [
                                ['name' => 'Global Retail Corp: 50% Efficiency Gain', 'path' => '/case-studies/global-retail', 'description' => 'How a major retailer transformed operations', 'type' => 'Case Study', 'industry' => 'Retail', 'updated' => 'March 20, 2026', 'downloads' => '5.6K'],
                                ['name' => 'HealthTech Solutions: Compliance Success', 'path' => '/case-studies/healthtech', 'description' => 'Meeting healthcare compliance requirements', 'type' => 'Case Study', 'industry' => 'Healthcare', 'updated' => 'March 15, 2026', 'downloads' => '4.2K'],
                                ['name' => 'EuroLogistics: Real-time Tracking', 'path' => '/case-studies/eurologistics', 'description' => 'Improved visibility across Europe', 'type' => 'Case Study', 'industry' => 'Logistics', 'updated' => 'March 10, 2026', 'downloads' => '3.8K'],
                                ['name' => 'Manufacturing Co: Inventory Optimization', 'path' => '/case-studies/manufacturing', 'description' => 'Reduced inventory costs by 30%', 'type' => 'Case Study', 'industry' => 'Manufacturing', 'updated' => 'March 5, 2026', 'downloads' => '3.5K'],
                                ['name' => 'Food Distributor: Cold Chain Management', 'path' => '/case-studies/food-distributor', 'description' => 'Maintaining temperature compliance', 'type' => 'Case Study', 'industry' => 'Food & Beverage', 'updated' => 'February 28, 2026', 'downloads' => '2.9K'],
                                ['name' => 'Pharma Company: Serialization', 'path' => '/case-studies/pharma', 'description' => 'Track and trace compliance', 'type' => 'Case Study', 'industry' => 'Pharmaceutical', 'updated' => 'February 20, 2026', 'downloads' => '2.7K']
                            ]
                        ],
                        [
                            'id' => 'white-papers',
                            'name' => 'White Papers',
                            'icon' => 'academic',
                            'color' => 'from-red-500 to-red-600',
                            'bgColor' => 'bg-red-50 dark:bg-red-900/20',
                            'description' => 'In-depth research and analysis',
                            'resourceCount' => 4,
                            'resources' => [
                                ['name' => 'The Future of Supply Chain AI', 'path' => '/white-papers/ai-supply-chain', 'description' => 'How AI is transforming logistics', 'type' => 'White Paper', 'pages' => 24, 'updated' => 'March 1, 2026', 'downloads' => '3.2K'],
                                ['name' => 'Sustainability in Supply Chain', 'path' => '/white-papers/sustainability', 'description' => 'Green logistics strategies', 'type' => 'White Paper', 'pages' => 32, 'updated' => 'February 15, 2026', 'downloads' => '2.8K'],
                                ['name' => 'Blockchain for Traceability', 'path' => '/white-papers/blockchain', 'description' => 'Distributed ledger applications', 'type' => 'White Paper', 'pages' => 28, 'updated' => 'January 20, 2026', 'downloads' => '2.3K'],
                                ['name' => 'Supply Chain Risk Management', 'path' => '/white-papers/risk-management', 'description' => 'Mitigating disruptions', 'type' => 'White Paper', 'pages' => 36, 'updated' => 'December 10, 2025', 'downloads' => '2.1K']
                            ]
                        ],
                        [
                            'id' => 'ebooks',
                            'name' => 'E-books & Guides',
                            'icon' => 'book',
                            'color' => 'from-pink-500 to-pink-600',
                            'bgColor' => 'bg-pink-50 dark:bg-pink-900/20',
                            'description' => 'Free downloadable guides',
                            'resourceCount' => 5,
                            'resources' => [
                                ['name' => 'Supply Chain Management Guide', 'path' => '/ebooks/scm-guide', 'description' => 'Comprehensive introduction', 'type' => 'E-book', 'pages' => 48, 'updated' => 'March 10, 2026', 'downloads' => '7.2K'],
                                ['name' => 'Inventory Optimization Workbook', 'path' => '/ebooks/inventory-workbook', 'description' => 'Practical exercises and templates', 'type' => 'E-book', 'pages' => 32, 'updated' => 'February 20, 2026', 'downloads' => '4.9K'],
                                ['name' => 'API Integration Handbook', 'path' => '/ebooks/api-handbook', 'description' => 'Developer guide to APIs', 'type' => 'E-book', 'pages' => 56, 'updated' => 'January 25, 2026', 'downloads' => '3.8K'],
                                ['name' => 'Data Security Checklist', 'path' => '/ebooks/security-checklist', 'description' => 'Essential security practices', 'type' => 'E-book', 'pages' => 24, 'updated' => 'January 5, 2026', 'downloads' => '3.1K'],
                                ['name' => 'Mobile App User Guide', 'path' => '/ebooks/mobile-guide', 'description' => 'Tips and tricks for mobile users', 'type' => 'E-book', 'pages' => 40, 'updated' => 'December 15, 2025', 'downloads' => '2.6K']
                            ]
                        ],
                        [
                            'id' => 'infographics',
                            'name' => 'Infographics',
                            'icon' => 'document',
                            'color' => 'from-cyan-500 to-cyan-600',
                            'bgColor' => 'bg-cyan-50 dark:bg-cyan-900/20',
                            'description' => 'Visual data and insights',
                            'resourceCount' => 4,
                            'resources' => [
                                ['name' => 'Supply Chain Metrics', 'path' => '/infographics/metrics', 'description' => 'Key performance indicators', 'type' => 'Infographic', 'updated' => 'March 5, 2026', 'downloads' => '2.1K'],
                                ['name' => 'Digital Transformation Roadmap', 'path' => '/infographics/roadmap', 'description' => 'Step-by-step guide', 'type' => 'Infographic', 'updated' => 'February 25, 2026', 'downloads' => '1.9K'],
                                ['name' => 'Data Flow Architecture', 'path' => '/infographics/architecture', 'description' => 'How data moves through our system', 'type' => 'Infographic', 'updated' => 'February 10, 2026', 'downloads' => '1.6K'],
                                ['name' => 'Compliance Overview', 'path' => '/infographics/compliance', 'description' => 'GDPR, SOC 2, ISO explained', 'type' => 'Infographic', 'updated' => 'January 30, 2026', 'downloads' => '1.8K']
                            ]
                        ],
                        [
                            'id' => 'blog',
                            'name' => 'Blog & News',
                            'icon' => 'newspaper',
                            'color' => 'from-teal-500 to-teal-600',
                            'bgColor' => 'bg-teal-50 dark:bg-teal-900/20',
                            'description' => 'Latest articles and company news',
                            'resourceCount' => 6,
                            'resources' => [
                                ['name' => 'Introducing SupplyChainPro v3.0', 'path' => '/blog/v3-launch', 'description' => 'What\'s new in our latest release', 'type' => 'Article', 'author' => 'Product Team', 'date' => 'April 8, 2026', 'reads' => '3.2K', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'],
                                ['name' => 'Top 10 Supply Chain Trends for 2026', 'path' => '/blog/trends-2026', 'description' => 'Industry predictions', 'type' => 'Article', 'author' => 'Industry Analyst', 'date' => 'April 1, 2026', 'reads' => '2.8K'],
                                ['name' => 'How to Reduce Inventory Costs', 'path' => '/blog/reduce-inventory-costs', 'description' => 'Practical strategies', 'type' => 'Article', 'author' => 'Operations Expert', 'date' => 'March 25, 2026', 'reads' => '2.1K'],
                                ['name' => 'Company Announcement: New Funding', 'path' => '/blog/funding-announcement', 'description' => '$50M Series C round', 'type' => 'Announcement', 'author' => 'CEO', 'date' => 'March 18, 2026', 'reads' => '4.5K'],
                                ['name' => 'Customer Spotlight: Global Retail Corp', 'path' => '/blog/customer-spotlight', 'description' => 'How they achieved 50% efficiency gain', 'type' => 'Article', 'author' => 'Customer Success', 'date' => 'March 10, 2026', 'reads' => '1.9K'],
                                ['name' => 'Security Update: SOC 2 Certification', 'path' => '/blog/soc2-certification', 'description' => 'Achieving SOC 2 Type II', 'type' => 'Announcement', 'author' => 'Security Team', 'date' => 'March 5, 2026', 'reads' => '2.3K']
                            ]
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 712,
                'section_key' => 'resourceLinks',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Legal & Compliance Links Section Variant 
            [
                'id' => 713,
                'section_key' => 'legalLinks',
                'variant' => 'variant1',
                'config' => json_encode([
                    'lastUpdated' => 'April 8, 2026',
                    'badge' => 'Legal & Compliance',
                    'title' => [
                        'prefix' => 'Legal',
                        'highlight' => 'Resources'
                    ],
                    'description' => 'Access our legal documents, policies, and compliance information. Find terms of service, privacy policies, security documentation, and more.',
                    'legalCategories' => [
                        [
                            'id' => 'agreements',
                            'name' => 'Legal Agreements',
                            'icon' => 'document',
                            'color' => 'from-blue-500 to-blue-600',
                            'bgColor' => 'bg-blue-50 dark:bg-blue-900/20',
                            'description' => 'Binding legal agreements governing our relationship',
                            'linkCount' => 6,
                            'links' => [
                                ['name' => 'Terms of Service', 'path' => '/legal/terms', 'description' => 'Terms and conditions for using our Services', 'updated' => 'April 8, 2026', 'version' => 'v3.0'],
                                ['name' => 'End User License Agreement (EULA)', 'path' => '/legal/eula', 'description' => 'Software license terms', 'updated' => 'March 15, 2026', 'version' => 'v2.1'],
                                ['name' => 'Master Subscription Agreement', 'path' => '/legal/msa', 'description' => 'Enterprise subscription terms', 'updated' => 'March 1, 2026', 'version' => 'v2.0'],
                                ['name' => 'Data Processing Agreement (DPA)', 'path' => '/legal/dpa', 'description' => 'GDPR-compliant data processing terms', 'updated' => 'April 1, 2026', 'version' => 'v2.0'],
                                ['name' => 'Service Level Agreement (SLA)', 'path' => '/legal/sla', 'description' => 'Service availability commitments', 'updated' => 'February 15, 2026', 'version' => 'v1.5'],
                                ['name' => 'Business Associate Agreement (BAA)', 'path' => '/legal/baa', 'description' => 'HIPAA compliance agreement', 'updated' => 'January 10, 2026', 'version' => 'v1.0']
                            ]
                        ],
                        [
                            'id' => 'privacy',
                            'name' => 'Privacy & Data Protection',
                            'icon' => 'lock',
                            'color' => 'from-green-500 to-green-600',
                            'bgColor' => 'bg-green-50 dark:bg-green-900/20',
                            'description' => 'How we collect, use, and protect your data',
                            'linkCount' => 7,
                            'links' => [
                                ['name' => 'Privacy Policy', 'path' => '/legal/privacy', 'description' => 'How we handle your personal information', 'updated' => 'April 8, 2026', 'version' => 'v3.0'],
                                ['name' => 'Cookie Policy', 'path' => '/legal/cookies', 'description' => 'How we use cookies and tracking technologies', 'updated' => 'April 8, 2026', 'version' => 'v2.0'],
                                ['name' => 'GDPR Compliance', 'path' => '/legal/gdpr', 'description' => 'EU data protection compliance', 'updated' => 'April 8, 2026', 'version' => 'v2.0'],
                                ['name' => 'CCPA Compliance', 'path' => '/legal/ccpa', 'description' => 'California Consumer Privacy Act', 'updated' => 'March 20, 2026', 'version' => 'v1.5'],
                                ['name' => 'Data Retention Policy', 'path' => '/legal/data-retention', 'description' => 'How long we keep your data', 'updated' => 'March 10, 2026', 'version' => 'v1.0'],
                                ['name' => 'Data Subject Request Form', 'path' => '/legal/data-request', 'description' => 'Exercise your privacy rights', 'updated' => 'February 28, 2026', 'version' => 'v1.0'],
                                ['name' => 'Privacy Shield Notice', 'path' => '/legal/privacy-shield', 'description' => 'EU-US data transfer framework', 'updated' => 'January 15, 2026', 'version' => 'v1.0']
                            ]
                        ],
                        [
                            'id' => 'security',
                            'name' => 'Security & Compliance',
                            'icon' => 'shield',
                            'color' => 'from-purple-500 to-purple-600',
                            'bgColor' => 'bg-purple-50 dark:bg-purple-900/20',
                            'description' => 'Security practices and compliance certifications',
                            'linkCount' => 8,
                            'links' => [
                                ['name' => 'Security Policy', 'path' => '/legal/security', 'description' => 'Our security program overview', 'updated' => 'April 5, 2026', 'version' => 'v2.0'],
                                ['name' => 'Acceptable Use Policy', 'path' => '/legal/aup', 'description' => 'Rules for using our Services', 'updated' => 'March 20, 2026', 'version' => 'v1.5'],
                                ['name' => 'Vulnerability Disclosure Program', 'path' => '/security/disclosure', 'description' => 'Report security vulnerabilities', 'updated' => 'April 3, 2026', 'version' => 'v1.0'],
                                ['name' => 'Bug Bounty Program', 'path' => '/security/bug-bounty', 'description' => 'Rewards for security researchers', 'updated' => 'April 2, 2026', 'version' => 'v1.0'],
                                ['name' => 'SOC 2 Type II Report', 'path' => '/legal/soc2', 'description' => 'Service Organization Control report', 'updated' => 'March 15, 2026', 'version' => '2025'],
                                ['name' => 'ISO 27001 Certification', 'path' => '/legal/iso27001', 'description' => 'Information security management', 'updated' => 'March 10, 2026', 'version' => '2025'],
                                ['name' => 'PCI DSS Compliance', 'path' => '/legal/pci', 'description' => 'Payment card industry compliance', 'updated' => 'February 28, 2026', 'version' => 'v1.0'],
                                ['name' => 'Subprocessor List', 'path' => '/legal/subprocessors', 'description' => 'Third-party data processors', 'updated' => 'March 15, 2026', 'version' => 'v2.0']
                            ]
                        ],
                        [
                            'id' => 'policies',
                            'name' => 'Company Policies',
                            'icon' => 'building',
                            'color' => 'from-orange-500 to-orange-600',
                            'bgColor' => 'bg-orange-50 dark:bg-orange-900/20',
                            'description' => 'Internal and external company policies',
                            'linkCount' => 6,
                            'links' => [
                                ['name' => 'Code of Conduct', 'path' => '/legal/code-of-conduct', 'description' => 'Ethical standards and behavior', 'updated' => 'February 15, 2026', 'version' => 'v1.0'],
                                ['name' => 'Anti-Corruption Policy', 'path' => '/legal/anti-corruption', 'description' => 'Anti-bribery and corruption', 'updated' => 'February 10, 2026', 'version' => 'v1.0'],
                                ['name' => 'Export Control Policy', 'path' => '/legal/export-control', 'description' => 'International trade compliance', 'updated' => 'January 25, 2026', 'version' => 'v1.0'],
                                ['name' => 'Modern Slavery Statement', 'path' => '/legal/modern-slavery', 'description' => 'UK Modern Slavery Act compliance', 'updated' => 'January 20, 2026', 'version' => 'v1.0'],
                                ['name' => 'Environmental Policy', 'path' => '/legal/environmental', 'description' => 'Sustainability commitments', 'updated' => 'January 15, 2026', 'version' => 'v1.0'],
                                ['name' => 'Equal Opportunity Policy', 'path' => '/legal/equal-opportunity', 'description' => 'Non-discrimination statement', 'updated' => 'January 10, 2026', 'version' => 'v1.0']
                            ]
                        ],
                        [
                            'id' => 'intellectual-property',
                            'name' => 'Intellectual Property',
                            'icon' => 'scale',
                            'color' => 'from-red-500 to-red-600',
                            'bgColor' => 'bg-red-50 dark:bg-red-900/20',
                            'description' => 'IP rights and usage guidelines',
                            'linkCount' => 5,
                            'links' => [
                                ['name' => 'Copyright Policy', 'path' => '/legal/copyright', 'description' => 'Copyright infringement claims', 'updated' => 'March 5, 2026', 'version' => 'v1.0'],
                                ['name' => 'Trademark Guidelines', 'path' => '/legal/trademark', 'description' => 'Use of our trademarks', 'updated' => 'February 20, 2026', 'version' => 'v1.0'],
                                ['name' => 'DMCA Notice', 'path' => '/legal/dmca', 'description' => 'Digital Millennium Copyright Act', 'updated' => 'February 15, 2026', 'version' => 'v1.0'],
                                ['name' => 'Open Source Attribution', 'path' => '/legal/open-source', 'description' => 'Third-party open source licenses', 'updated' => 'March 28, 2026', 'version' => 'v1.0'],
                                ['name' => 'Patent Notice', 'path' => '/legal/patents', 'description' => 'Patent information', 'updated' => 'January 5, 2026', 'version' => 'v1.0']
                            ]
                        ],
                        [
                            'id' => 'compliance',
                            'name' => 'Regulatory Compliance',
                            'icon' => 'globe',
                            'color' => 'from-teal-500 to-teal-600',
                            'bgColor' => 'bg-teal-50 dark:bg-teal-900/20',
                            'description' => 'Industry and regional compliance information',
                            'linkCount' => 6,
                            'links' => [
                                ['name' => 'GDPR Compliance Center', 'path' => '/legal/gdpr-center', 'description' => 'GDPR resources and information', 'updated' => 'April 8, 2026', 'version' => 'v1.0'],
                                ['name' => 'CCPA Compliance Center', 'path' => '/legal/ccpa-center', 'description' => 'California privacy rights', 'updated' => 'March 20, 2026', 'version' => 'v1.0'],
                                ['name' => 'HIPAA Compliance', 'path' => '/legal/hipaa', 'description' => 'Healthcare data compliance', 'updated' => 'February 28, 2026', 'version' => 'v1.0'],
                                ['name' => 'FedRAMP Compliance', 'path' => '/legal/fedramp', 'description' => 'Federal risk management', 'updated' => 'February 15, 2026', 'version' => 'v1.0'],
                                ['name' => 'SOC Reports', 'path' => '/legal/soc-reports', 'description' => 'Service Organization Control reports', 'updated' => 'March 15, 2026', 'version' => '2025'],
                                ['name' => 'Compliance Certificates', 'path' => '/legal/certificates', 'description' => 'Security and compliance certificates', 'updated' => 'March 10, 2026', 'version' => '2025']
                            ]
                        ],
                        [
                            'id' => 'disclosures',
                            'name' => 'Legal Disclosures',
                            'icon' => 'info',
                            'color' => 'from-cyan-500 to-cyan-600',
                            'bgColor' => 'bg-cyan-50 dark:bg-cyan-900/20',
                            'description' => 'Required legal disclosures',
                            'linkCount' => 5,
                            'links' => [
                                ['name' => 'Imprint', 'path' => '/legal/imprint', 'description' => 'Legal disclosure information', 'updated' => 'January 1, 2026', 'version' => 'v1.0'],
                                ['name' => 'Terms of Sale', 'path' => '/legal/terms-of-sale', 'description' => 'Purchase terms and conditions', 'updated' => 'February 1, 2026', 'version' => 'v1.0'],
                                ['name' => 'Return Policy', 'path' => '/legal/returns', 'description' => 'Refund and cancellation policy', 'updated' => 'January 15, 2026', 'version' => 'v1.0'],
                                ['name' => 'Warranty Disclaimer', 'path' => '/legal/warranty', 'description' => 'Limited warranty information', 'updated' => 'January 10, 2026', 'version' => 'v1.0'],
                                ['name' => 'Legal Notice', 'path' => '/legal/notice', 'description' => 'Copyright and legal information', 'updated' => 'January 5, 2026', 'version' => 'v1.0']
                            ]
                        ],
                        [
                            'id' => 'reporting',
                            'name' => 'Reporting & Transparency',
                            'icon' => 'flag',
                            'color' => 'from-pink-500 to-pink-600',
                            'bgColor' => 'bg-pink-50 dark:bg-pink-900/20',
                            'description' => 'Transparency reports and disclosures',
                            'linkCount' => 4,
                            'links' => [
                                ['name' => 'Transparency Report', 'path' => '/legal/transparency', 'description' => 'Government data requests', 'updated' => 'March 1, 2026', 'version' => '2025'],
                                ['name' => 'Government Requests', 'path' => '/legal/gov-requests', 'description' => 'Law enforcement data requests', 'updated' => 'February 15, 2026', 'version' => '2025'],
                                ['name' => 'Copyright Takedown Report', 'path' => '/legal/copyright-report', 'description' => 'DMCA takedown statistics', 'updated' => 'February 1, 2026', 'version' => '2025'],
                                ['name' => 'Data Breach History', 'path' => '/legal/breach-history', 'description' => 'Security incident disclosures', 'updated' => 'January 15, 2026', 'version' => 'v1.0']
                            ]
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 714,
                'section_key' => 'legalLinks',
                'variant' => 'variant2',
                'config' => json_encode([
                    'lastUpdated' => 'April 8, 2026',
                    'badge' => 'Legal Hub',
                    'title' => [
                        'prefix' => 'Legal',
                        'highlight' => 'Resources'
                    ],
                    'description' => 'Access our legal documents, policies, and compliance information. Find terms of service, privacy policies, security documentation, and more.',
                    'tabs' => [
                        ['id' => 'all', 'label' => 'All Documents', 'icon' => 'folder'],
                        ['id' => 'popular', 'label' => 'Popular', 'icon' => 'star'],
                        ['id' => 'recent', 'label' => 'Recently Updated', 'icon' => 'trending-up']
                    ],
                    'categoryFilters' => [
                        ['id' => 'all', 'label' => 'All Categories'],
                        ['id' => 'agreements', 'label' => 'Legal Agreements'],
                        ['id' => 'privacy', 'label' => 'Privacy & Data Protection'],
                        ['id' => 'security', 'label' => 'Security & Compliance'],
                        ['id' => 'policies', 'label' => 'Company Policies'],
                        ['id' => 'intellectual-property', 'label' => 'Intellectual Property'],
                        ['id' => 'compliance', 'label' => 'Regulatory Compliance'],
                        ['id' => 'disclosures', 'label' => 'Legal Disclosures'],
                        ['id' => 'reporting', 'label' => 'Reporting & Transparency']
                    ],
                    'popularDocuments' => [
                        ['name' => 'Terms of Service', 'path' => '/legal/terms', 'category' => 'Legal Agreements', 'views' => '125K', 'version' => 'v3.0'],
                        ['name' => 'Privacy Policy', 'path' => '/legal/privacy', 'category' => 'Privacy & Data Protection', 'views' => '98K', 'version' => 'v3.0'],
                        ['name' => 'Data Processing Agreement', 'path' => '/legal/dpa', 'category' => 'Legal Agreements', 'views' => '45K', 'version' => 'v2.0'],
                        ['name' => 'Cookie Policy', 'path' => '/legal/cookies', 'category' => 'Privacy & Data Protection', 'views' => '32K', 'version' => 'v2.0'],
                        ['name' => 'Security Policy', 'path' => '/legal/security', 'category' => 'Security & Compliance', 'views' => '28K', 'version' => 'v2.0'],
                        ['name' => 'GDPR Compliance', 'path' => '/legal/gdpr', 'category' => 'Privacy & Data Protection', 'views' => '25K', 'version' => 'v2.0']
                    ],
                    'recentlyUpdated' => [
                        ['name' => 'Terms of Service', 'path' => '/legal/terms', 'category' => 'Legal Agreements', 'date' => 'April 8, 2026', 'version' => 'v3.0'],
                        ['name' => 'Privacy Policy', 'path' => '/legal/privacy', 'category' => 'Privacy & Data Protection', 'date' => 'April 8, 2026', 'version' => 'v3.0'],
                        ['name' => 'Cookie Policy', 'path' => '/legal/cookies', 'category' => 'Privacy & Data Protection', 'date' => 'April 8, 2026', 'version' => 'v2.0'],
                        ['name' => 'GDPR Compliance', 'path' => '/legal/gdpr', 'category' => 'Privacy & Data Protection', 'date' => 'April 8, 2026', 'version' => 'v2.0'],
                        ['name' => 'Security Policy', 'path' => '/legal/security', 'category' => 'Security & Compliance', 'date' => 'April 5, 2026', 'version' => 'v2.0'],
                        ['name' => 'Data Processing Agreement', 'path' => '/legal/dpa', 'category' => 'Legal Agreements', 'date' => 'April 1, 2026', 'version' => 'v2.0']
                    ],
                    'legalCategories' => [
                        [
                            'id' => 'agreements',
                            'name' => 'Legal Agreements',
                            'icon' => 'document',
                            'color' => 'from-blue-500 to-blue-600',
                            'bgColor' => 'bg-blue-50 dark:bg-blue-900/20',
                            'description' => 'Binding legal agreements governing our relationship',
                            'linkCount' => 6,
                            'links' => [
                                ['name' => 'Terms of Service', 'path' => '/legal/terms', 'description' => 'Terms and conditions for using our Services', 'updated' => 'April 8, 2026', 'version' => 'v3.0', 'popular' => true],
                                ['name' => 'End User License Agreement (EULA)', 'path' => '/legal/eula', 'description' => 'Software license terms', 'updated' => 'March 15, 2026', 'version' => 'v2.1'],
                                ['name' => 'Master Subscription Agreement', 'path' => '/legal/msa', 'description' => 'Enterprise subscription terms', 'updated' => 'March 1, 2026', 'version' => 'v2.0'],
                                ['name' => 'Data Processing Agreement (DPA)', 'path' => '/legal/dpa', 'description' => 'GDPR-compliant data processing terms', 'updated' => 'April 1, 2026', 'version' => 'v2.0', 'popular' => true],
                                ['name' => 'Service Level Agreement (SLA)', 'path' => '/legal/sla', 'description' => 'Service availability commitments', 'updated' => 'February 15, 2026', 'version' => 'v1.5'],
                                ['name' => 'Business Associate Agreement (BAA)', 'path' => '/legal/baa', 'description' => 'HIPAA compliance agreement', 'updated' => 'January 10, 2026', 'version' => 'v1.0']
                            ]
                        ],
                        [
                            'id' => 'privacy',
                            'name' => 'Privacy & Data Protection',
                            'icon' => 'lock',
                            'color' => 'from-green-500 to-green-600',
                            'bgColor' => 'bg-green-50 dark:bg-green-900/20',
                            'description' => 'How we collect, use, and protect your data',
                            'linkCount' => 7,
                            'links' => [
                                ['name' => 'Privacy Policy', 'path' => '/legal/privacy', 'description' => 'How we handle your personal information', 'updated' => 'April 8, 2026', 'version' => 'v3.0', 'popular' => true],
                                ['name' => 'Cookie Policy', 'path' => '/legal/cookies', 'description' => 'How we use cookies and tracking technologies', 'updated' => 'April 8, 2026', 'version' => 'v2.0', 'popular' => true],
                                ['name' => 'GDPR Compliance', 'path' => '/legal/gdpr', 'description' => 'EU data protection compliance', 'updated' => 'April 8, 2026', 'version' => 'v2.0', 'popular' => true],
                                ['name' => 'CCPA Compliance', 'path' => '/legal/ccpa', 'description' => 'California Consumer Privacy Act', 'updated' => 'March 20, 2026', 'version' => 'v1.5'],
                                ['name' => 'Data Retention Policy', 'path' => '/legal/data-retention', 'description' => 'How long we keep your data', 'updated' => 'March 10, 2026', 'version' => 'v1.0'],
                                ['name' => 'Data Subject Request Form', 'path' => '/legal/data-request', 'description' => 'Exercise your privacy rights', 'updated' => 'February 28, 2026', 'version' => 'v1.0'],
                                ['name' => 'Privacy Shield Notice', 'path' => '/legal/privacy-shield', 'description' => 'EU-US data transfer framework', 'updated' => 'January 15, 2026', 'version' => 'v1.0']
                            ]
                        ],
                        [
                            'id' => 'security',
                            'name' => 'Security & Compliance',
                            'icon' => 'shield',
                            'color' => 'from-purple-500 to-purple-600',
                            'bgColor' => 'bg-purple-50 dark:bg-purple-900/20',
                            'description' => 'Security practices and compliance certifications',
                            'linkCount' => 8,
                            'links' => [
                                ['name' => 'Security Policy', 'path' => '/legal/security', 'description' => 'Our security program overview', 'updated' => 'April 5, 2026', 'version' => 'v2.0', 'popular' => true],
                                ['name' => 'Acceptable Use Policy', 'path' => '/legal/aup', 'description' => 'Rules for using our Services', 'updated' => 'March 20, 2026', 'version' => 'v1.5'],
                                ['name' => 'Vulnerability Disclosure Program', 'path' => '/security/disclosure', 'description' => 'Report security vulnerabilities', 'updated' => 'April 3, 2026', 'version' => 'v1.0'],
                                ['name' => 'Bug Bounty Program', 'path' => '/security/bug-bounty', 'description' => 'Rewards for security researchers', 'updated' => 'April 2, 2026', 'version' => 'v1.0'],
                                ['name' => 'SOC 2 Type II Report', 'path' => '/legal/soc2', 'description' => 'Service Organization Control report', 'updated' => 'March 15, 2026', 'version' => '2025'],
                                ['name' => 'ISO 27001 Certification', 'path' => '/legal/iso27001', 'description' => 'Information security management', 'updated' => 'March 10, 2026', 'version' => '2025'],
                                ['name' => 'PCI DSS Compliance', 'path' => '/legal/pci', 'description' => 'Payment card industry compliance', 'updated' => 'February 28, 2026', 'version' => 'v1.0'],
                                ['name' => 'Subprocessor List', 'path' => '/legal/subprocessors', 'description' => 'Third-party data processors', 'updated' => 'March 15, 2026', 'version' => 'v2.0']
                            ]
                        ],
                        [
                            'id' => 'policies',
                            'name' => 'Company Policies',
                            'icon' => 'building',
                            'color' => 'from-orange-500 to-orange-600',
                            'bgColor' => 'bg-orange-50 dark:bg-orange-900/20',
                            'description' => 'Internal and external company policies',
                            'linkCount' => 6,
                            'links' => [
                                ['name' => 'Code of Conduct', 'path' => '/legal/code-of-conduct', 'description' => 'Ethical standards and behavior', 'updated' => 'February 15, 2026', 'version' => 'v1.0'],
                                ['name' => 'Anti-Corruption Policy', 'path' => '/legal/anti-corruption', 'description' => 'Anti-bribery and corruption', 'updated' => 'February 10, 2026', 'version' => 'v1.0'],
                                ['name' => 'Export Control Policy', 'path' => '/legal/export-control', 'description' => 'International trade compliance', 'updated' => 'January 25, 2026', 'version' => 'v1.0'],
                                ['name' => 'Modern Slavery Statement', 'path' => '/legal/modern-slavery', 'description' => 'UK Modern Slavery Act compliance', 'updated' => 'January 20, 2026', 'version' => 'v1.0'],
                                ['name' => 'Environmental Policy', 'path' => '/legal/environmental', 'description' => 'Sustainability commitments', 'updated' => 'January 15, 2026', 'version' => 'v1.0'],
                                ['name' => 'Equal Opportunity Policy', 'path' => '/legal/equal-opportunity', 'description' => 'Non-discrimination statement', 'updated' => 'January 10, 2026', 'version' => 'v1.0']
                            ]
                        ],
                        [
                            'id' => 'intellectual-property',
                            'name' => 'Intellectual Property',
                            'icon' => 'scale',
                            'color' => 'from-red-500 to-red-600',
                            'bgColor' => 'bg-red-50 dark:bg-red-900/20',
                            'description' => 'IP rights and usage guidelines',
                            'linkCount' => 5,
                            'links' => [
                                ['name' => 'Copyright Policy', 'path' => '/legal/copyright', 'description' => 'Copyright infringement claims', 'updated' => 'March 5, 2026', 'version' => 'v1.0'],
                                ['name' => 'Trademark Guidelines', 'path' => '/legal/trademark', 'description' => 'Use of our trademarks', 'updated' => 'February 20, 2026', 'version' => 'v1.0'],
                                ['name' => 'DMCA Notice', 'path' => '/legal/dmca', 'description' => 'Digital Millennium Copyright Act', 'updated' => 'February 15, 2026', 'version' => 'v1.0'],
                                ['name' => 'Open Source Attribution', 'path' => '/legal/open-source', 'description' => 'Third-party open source licenses', 'updated' => 'March 28, 2026', 'version' => 'v1.0'],
                                ['name' => 'Patent Notice', 'path' => '/legal/patents', 'description' => 'Patent information', 'updated' => 'January 5, 2026', 'version' => 'v1.0']
                            ]
                        ],
                        [
                            'id' => 'compliance',
                            'name' => 'Regulatory Compliance',
                            'icon' => 'globe',
                            'color' => 'from-teal-500 to-teal-600',
                            'bgColor' => 'bg-teal-50 dark:bg-teal-900/20',
                            'description' => 'Industry and regional compliance information',
                            'linkCount' => 6,
                            'links' => [
                                ['name' => 'GDPR Compliance Center', 'path' => '/legal/gdpr-center', 'description' => 'GDPR resources and information', 'updated' => 'April 8, 2026', 'version' => 'v1.0'],
                                ['name' => 'CCPA Compliance Center', 'path' => '/legal/ccpa-center', 'description' => 'California privacy rights', 'updated' => 'March 20, 2026', 'version' => 'v1.0'],
                                ['name' => 'HIPAA Compliance', 'path' => '/legal/hipaa', 'description' => 'Healthcare data compliance', 'updated' => 'February 28, 2026', 'version' => 'v1.0'],
                                ['name' => 'FedRAMP Compliance', 'path' => '/legal/fedramp', 'description' => 'Federal risk management', 'updated' => 'February 15, 2026', 'version' => 'v1.0'],
                                ['name' => 'SOC Reports', 'path' => '/legal/soc-reports', 'description' => 'Service Organization Control reports', 'updated' => 'March 15, 2026', 'version' => '2025'],
                                ['name' => 'Compliance Certificates', 'path' => '/legal/certificates', 'description' => 'Security and compliance certificates', 'updated' => 'March 10, 2026', 'version' => '2025']
                            ]
                        ],
                        [
                            'id' => 'disclosures',
                            'name' => 'Legal Disclosures',
                            'icon' => 'info',
                            'color' => 'from-cyan-500 to-cyan-600',
                            'bgColor' => 'bg-cyan-50 dark:bg-cyan-900/20',
                            'description' => 'Required legal disclosures',
                            'linkCount' => 5,
                            'links' => [
                                ['name' => 'Imprint', 'path' => '/legal/imprint', 'description' => 'Legal disclosure information', 'updated' => 'January 1, 2026', 'version' => 'v1.0'],
                                ['name' => 'Terms of Sale', 'path' => '/legal/terms-of-sale', 'description' => 'Purchase terms and conditions', 'updated' => 'February 1, 2026', 'version' => 'v1.0'],
                                ['name' => 'Return Policy', 'path' => '/legal/returns', 'description' => 'Refund and cancellation policy', 'updated' => 'January 15, 2026', 'version' => 'v1.0'],
                                ['name' => 'Warranty Disclaimer', 'path' => '/legal/warranty', 'description' => 'Limited warranty information', 'updated' => 'January 10, 2026', 'version' => 'v1.0'],
                                ['name' => 'Legal Notice', 'path' => '/legal/notice', 'description' => 'Copyright and legal information', 'updated' => 'January 5, 2026', 'version' => 'v1.0']
                            ]
                        ],
                        [
                            'id' => 'reporting',
                            'name' => 'Reporting & Transparency',
                            'icon' => 'flag',
                            'color' => 'from-pink-500 to-pink-600',
                            'bgColor' => 'bg-pink-50 dark:bg-pink-900/20',
                            'description' => 'Transparency reports and disclosures',
                            'linkCount' => 4,
                            'links' => [
                                ['name' => 'Transparency Report', 'path' => '/legal/transparency', 'description' => 'Government data requests', 'updated' => 'March 1, 2026', 'version' => '2025'],
                                ['name' => 'Government Requests', 'path' => '/legal/gov-requests', 'description' => 'Law enforcement data requests', 'updated' => 'February 15, 2026', 'version' => '2025'],
                                ['name' => 'Copyright Takedown Report', 'path' => '/legal/copyright-report', 'description' => 'DMCA takedown statistics', 'updated' => 'February 1, 2026', 'version' => '2025'],
                                ['name' => 'Data Breach History', 'path' => '/legal/breach-history', 'description' => 'Security incident disclosures', 'updated' => 'January 15, 2026', 'version' => 'v1.0']
                            ]
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 715,
                'section_key' => 'legalLinks',
                'variant' => 'variant3',
                'config' => json_encode([
                    'lastUpdated' => 'April 8, 2026',
                    'autoPlayCarousel' => true,
                    'badge' => 'Legal Hub',
                    'title' => [
                        'prefix' => 'Legal',
                        'highlight' => 'Resources'
                    ],
                    'description' => 'Access our legal documents, policies, and compliance information. Find terms of service, privacy policies, security documentation, and more.',
                    'featuredTopics' => [
                        ['title' => 'Data Privacy Rights', 'description' => 'Learn about your rights under GDPR and CCPA regulations.', 'icon' => 'lock', 'color' => 'from-green-500 to-green-600', 'path' => '/legal/gdpr', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'],
                        ['title' => 'Security Compliance', 'description' => 'Understanding our SOC 2 and ISO 27001 certifications.', 'icon' => 'shield', 'color' => 'from-purple-500 to-purple-600', 'path' => '/legal/security', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'],
                        ['title' => 'Terms of Service', 'description' => 'Key terms and conditions for using our platform.', 'icon' => 'scale', 'color' => 'from-blue-500 to-blue-600', 'path' => '/legal/terms', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFunflies.mp4'],
                        ['title' => 'Data Processing', 'description' => 'How we handle and protect your data as a processor.', 'icon' => 'database', 'color' => 'from-orange-500 to-orange-600', 'path' => '/legal/dpa', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4']
                    ],
                    'tabs' => [
                        ['id' => 'all', 'label' => 'All Documents', 'icon' => 'folder'],
                        ['id' => 'popular', 'label' => 'Popular', 'icon' => 'star'],
                        ['id' => 'recent', 'label' => 'Recently Updated', 'icon' => 'trending-up']
                    ],
                    'categoryFilters' => [
                        ['id' => 'all', 'label' => 'All Categories'],
                        ['id' => 'agreements', 'label' => 'Legal Agreements'],
                        ['id' => 'privacy', 'label' => 'Privacy & Data Protection'],
                        ['id' => 'security', 'label' => 'Security & Compliance'],
                        ['id' => 'policies', 'label' => 'Company Policies'],
                        ['id' => 'intellectual-property', 'label' => 'Intellectual Property'],
                        ['id' => 'compliance', 'label' => 'Regulatory Compliance'],
                        ['id' => 'disclosures', 'label' => 'Legal Disclosures'],
                        ['id' => 'reporting', 'label' => 'Reporting & Transparency']
                    ],
                    'popularDocuments' => [
                        ['name' => 'Terms of Service', 'path' => '/legal/terms', 'category' => 'Legal Agreements', 'views' => '125K', 'version' => 'v3.0', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'],
                        ['name' => 'Privacy Policy', 'path' => '/legal/privacy', 'category' => 'Privacy & Data Protection', 'views' => '98K', 'version' => 'v3.0', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'],
                        ['name' => 'Data Processing Agreement', 'path' => '/legal/dpa', 'category' => 'Legal Agreements', 'views' => '45K', 'version' => 'v2.0', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFunflies.mp4'],
                        ['name' => 'Cookie Policy', 'path' => '/legal/cookies', 'category' => 'Privacy & Data Protection', 'views' => '32K', 'version' => 'v2.0'],
                        ['name' => 'Security Policy', 'path' => '/legal/security', 'category' => 'Security & Compliance', 'views' => '28K', 'version' => 'v2.0', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4'],
                        ['name' => 'GDPR Compliance', 'path' => '/legal/gdpr', 'category' => 'Privacy & Data Protection', 'views' => '25K', 'version' => 'v2.0', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4']
                    ],
                    'recentlyUpdated' => [
                        ['name' => 'Terms of Service', 'path' => '/legal/terms', 'category' => 'Legal Agreements', 'date' => 'April 8, 2026', 'version' => 'v3.0', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'],
                        ['name' => 'Privacy Policy', 'path' => '/legal/privacy', 'category' => 'Privacy & Data Protection', 'date' => 'April 8, 2026', 'version' => 'v3.0', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'],
                        ['name' => 'Cookie Policy', 'path' => '/legal/cookies', 'category' => 'Privacy & Data Protection', 'date' => 'April 8, 2026', 'version' => 'v2.0'],
                        ['name' => 'GDPR Compliance', 'path' => '/legal/gdpr', 'category' => 'Privacy & Data Protection', 'date' => 'April 8, 2026', 'version' => 'v2.0', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFunflies.mp4'],
                        ['name' => 'Security Policy', 'path' => '/legal/security', 'category' => 'Security & Compliance', 'date' => 'April 5, 2026', 'version' => 'v2.0', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4'],
                        ['name' => 'Data Processing Agreement', 'path' => '/legal/dpa', 'category' => 'Legal Agreements', 'date' => 'April 1, 2026', 'version' => 'v2.0', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4']
                    ],
                    'legalCategories' => [
                        [
                            'id' => 'agreements',
                            'name' => 'Legal Agreements',
                            'icon' => 'document',
                            'color' => 'from-blue-500 to-blue-600',
                            'bgColor' => 'bg-blue-50 dark:bg-blue-900/20',
                            'description' => 'Binding legal agreements governing our relationship',
                            'linkCount' => 6,
                            'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
                            'links' => [
                                ['name' => 'Terms of Service', 'path' => '/legal/terms', 'description' => 'Terms and conditions for using our Services', 'updated' => 'April 8, 2026', 'version' => 'v3.0', 'popular' => true, 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'],
                                ['name' => 'End User License Agreement (EULA)', 'path' => '/legal/eula', 'description' => 'Software license terms', 'updated' => 'March 15, 2026', 'version' => 'v2.1'],
                                ['name' => 'Master Subscription Agreement', 'path' => '/legal/msa', 'description' => 'Enterprise subscription terms', 'updated' => 'March 1, 2026', 'version' => 'v2.0'],
                                ['name' => 'Data Processing Agreement (DPA)', 'path' => '/legal/dpa', 'description' => 'GDPR-compliant data processing terms', 'updated' => 'April 1, 2026', 'version' => 'v2.0', 'popular' => true, 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFunflies.mp4'],
                                ['name' => 'Service Level Agreement (SLA)', 'path' => '/legal/sla', 'description' => 'Service availability commitments', 'updated' => 'February 15, 2026', 'version' => 'v1.5'],
                                ['name' => 'Business Associate Agreement (BAA)', 'path' => '/legal/baa', 'description' => 'HIPAA compliance agreement', 'updated' => 'January 10, 2026', 'version' => 'v1.0']
                            ]
                        ],
                        [
                            'id' => 'privacy',
                            'name' => 'Privacy & Data Protection',
                            'icon' => 'lock',
                            'color' => 'from-green-500 to-green-600',
                            'bgColor' => 'bg-green-50 dark:bg-green-900/20',
                            'description' => 'How we collect, use, and protect your data',
                            'linkCount' => 7,
                            'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
                            'links' => [
                                ['name' => 'Privacy Policy', 'path' => '/legal/privacy', 'description' => 'How we handle your personal information', 'updated' => 'April 8, 2026', 'version' => 'v3.0', 'popular' => true, 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'],
                                ['name' => 'Cookie Policy', 'path' => '/legal/cookies', 'description' => 'How we use cookies and tracking technologies', 'updated' => 'April 8, 2026', 'version' => 'v2.0', 'popular' => true],
                                ['name' => 'GDPR Compliance', 'path' => '/legal/gdpr', 'description' => 'EU data protection compliance', 'updated' => 'April 8, 2026', 'version' => 'v2.0', 'popular' => true, 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFunflies.mp4'],
                                ['name' => 'CCPA Compliance', 'path' => '/legal/ccpa', 'description' => 'California Consumer Privacy Act', 'updated' => 'March 20, 2026', 'version' => 'v1.5'],
                                ['name' => 'Data Retention Policy', 'path' => '/legal/data-retention', 'description' => 'How long we keep your data', 'updated' => 'March 10, 2026', 'version' => 'v1.0'],
                                ['name' => 'Data Subject Request Form', 'path' => '/legal/data-request', 'description' => 'Exercise your privacy rights', 'updated' => 'February 28, 2026', 'version' => 'v1.0'],
                                ['name' => 'Privacy Shield Notice', 'path' => '/legal/privacy-shield', 'description' => 'EU-US data transfer framework', 'updated' => 'January 15, 2026', 'version' => 'v1.0']
                            ]
                        ],
                        [
                            'id' => 'security',
                            'name' => 'Security & Compliance',
                            'icon' => 'shield',
                            'color' => 'from-purple-500 to-purple-600',
                            'bgColor' => 'bg-purple-50 dark:bg-purple-900/20',
                            'description' => 'Security practices and compliance certifications',
                            'linkCount' => 8,
                            'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
                            'links' => [
                                ['name' => 'Security Policy', 'path' => '/legal/security', 'description' => 'Our security program overview', 'updated' => 'April 5, 2026', 'version' => 'v2.0', 'popular' => true, 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4'],
                                ['name' => 'Acceptable Use Policy', 'path' => '/legal/aup', 'description' => 'Rules for using our Services', 'updated' => 'March 20, 2026', 'version' => 'v1.5'],
                                ['name' => 'Vulnerability Disclosure Program', 'path' => '/security/disclosure', 'description' => 'Report security vulnerabilities', 'updated' => 'April 3, 2026', 'version' => 'v1.0'],
                                ['name' => 'Bug Bounty Program', 'path' => '/security/bug-bounty', 'description' => 'Rewards for security researchers', 'updated' => 'April 2, 2026', 'version' => 'v1.0'],
                                ['name' => 'SOC 2 Type II Report', 'path' => '/legal/soc2', 'description' => 'Service Organization Control report', 'updated' => 'March 15, 2026', 'version' => '2025'],
                                ['name' => 'ISO 27001 Certification', 'path' => '/legal/iso27001', 'description' => 'Information security management', 'updated' => 'March 10, 2026', 'version' => '2025'],
                                ['name' => 'PCI DSS Compliance', 'path' => '/legal/pci', 'description' => 'Payment card industry compliance', 'updated' => 'February 28, 2026', 'version' => 'v1.0'],
                                ['name' => 'Subprocessor List', 'path' => '/legal/subprocessors', 'description' => 'Third-party data processors', 'updated' => 'March 15, 2026', 'version' => 'v2.0']
                            ]
                        ],
                        [
                            'id' => 'policies',
                            'name' => 'Company Policies',
                            'icon' => 'building',
                            'color' => 'from-orange-500 to-orange-600',
                            'bgColor' => 'bg-orange-50 dark:bg-orange-900/20',
                            'description' => 'Internal and external company policies',
                            'linkCount' => 6,
                            'links' => [
                                ['name' => 'Code of Conduct', 'path' => '/legal/code-of-conduct', 'description' => 'Ethical standards and behavior', 'updated' => 'February 15, 2026', 'version' => 'v1.0'],
                                ['name' => 'Anti-Corruption Policy', 'path' => '/legal/anti-corruption', 'description' => 'Anti-bribery and corruption', 'updated' => 'February 10, 2026', 'version' => 'v1.0'],
                                ['name' => 'Export Control Policy', 'path' => '/legal/export-control', 'description' => 'International trade compliance', 'updated' => 'January 25, 2026', 'version' => 'v1.0'],
                                ['name' => 'Modern Slavery Statement', 'path' => '/legal/modern-slavery', 'description' => 'UK Modern Slavery Act compliance', 'updated' => 'January 20, 2026', 'version' => 'v1.0'],
                                ['name' => 'Environmental Policy', 'path' => '/legal/environmental', 'description' => 'Sustainability commitments', 'updated' => 'January 15, 2026', 'version' => 'v1.0'],
                                ['name' => 'Equal Opportunity Policy', 'path' => '/legal/equal-opportunity', 'description' => 'Non-discrimination statement', 'updated' => 'January 10, 2026', 'version' => 'v1.0']
                            ]
                        ],
                        [
                            'id' => 'intellectual-property',
                            'name' => 'Intellectual Property',
                            'icon' => 'scale',
                            'color' => 'from-red-500 to-red-600',
                            'bgColor' => 'bg-red-50 dark:bg-red-900/20',
                            'description' => 'IP rights and usage guidelines',
                            'linkCount' => 5,
                            'links' => [
                                ['name' => 'Copyright Policy', 'path' => '/legal/copyright', 'description' => 'Copyright infringement claims', 'updated' => 'March 5, 2026', 'version' => 'v1.0'],
                                ['name' => 'Trademark Guidelines', 'path' => '/legal/trademark', 'description' => 'Use of our trademarks', 'updated' => 'February 20, 2026', 'version' => 'v1.0'],
                                ['name' => 'DMCA Notice', 'path' => '/legal/dmca', 'description' => 'Digital Millennium Copyright Act', 'updated' => 'February 15, 2026', 'version' => 'v1.0'],
                                ['name' => 'Open Source Attribution', 'path' => '/legal/open-source', 'description' => 'Third-party open source licenses', 'updated' => 'March 28, 2026', 'version' => 'v1.0'],
                                ['name' => 'Patent Notice', 'path' => '/legal/patents', 'description' => 'Patent information', 'updated' => 'January 5, 2026', 'version' => 'v1.0']
                            ]
                        ],
                        [
                            'id' => 'compliance',
                            'name' => 'Regulatory Compliance',
                            'icon' => 'globe',
                            'color' => 'from-teal-500 to-teal-600',
                            'bgColor' => 'bg-teal-50 dark:bg-teal-900/20',
                            'description' => 'Industry and regional compliance information',
                            'linkCount' => 6,
                            'links' => [
                                ['name' => 'GDPR Compliance Center', 'path' => '/legal/gdpr-center', 'description' => 'GDPR resources and information', 'updated' => 'April 8, 2026', 'version' => 'v1.0'],
                                ['name' => 'CCPA Compliance Center', 'path' => '/legal/ccpa-center', 'description' => 'California privacy rights', 'updated' => 'March 20, 2026', 'version' => 'v1.0'],
                                ['name' => 'HIPAA Compliance', 'path' => '/legal/hipaa', 'description' => 'Healthcare data compliance', 'updated' => 'February 28, 2026', 'version' => 'v1.0'],
                                ['name' => 'FedRAMP Compliance', 'path' => '/legal/fedramp', 'description' => 'Federal risk management', 'updated' => 'February 15, 2026', 'version' => 'v1.0'],
                                ['name' => 'SOC Reports', 'path' => '/legal/soc-reports', 'description' => 'Service Organization Control reports', 'updated' => 'March 15, 2026', 'version' => '2025'],
                                ['name' => 'Compliance Certificates', 'path' => '/legal/certificates', 'description' => 'Security and compliance certificates', 'updated' => 'March 10, 2026', 'version' => '2025']
                            ]
                        ],
                        [
                            'id' => 'disclosures',
                            'name' => 'Legal Disclosures',
                            'icon' => 'info',
                            'color' => 'from-cyan-500 to-cyan-600',
                            'bgColor' => 'bg-cyan-50 dark:bg-cyan-900/20',
                            'description' => 'Required legal disclosures',
                            'linkCount' => 5,
                            'links' => [
                                ['name' => 'Imprint', 'path' => '/legal/imprint', 'description' => 'Legal disclosure information', 'updated' => 'January 1, 2026', 'version' => 'v1.0'],
                                ['name' => 'Terms of Sale', 'path' => '/legal/terms-of-sale', 'description' => 'Purchase terms and conditions', 'updated' => 'February 1, 2026', 'version' => 'v1.0'],
                                ['name' => 'Return Policy', 'path' => '/legal/returns', 'description' => 'Refund and cancellation policy', 'updated' => 'January 15, 2026', 'version' => 'v1.0'],
                                ['name' => 'Warranty Disclaimer', 'path' => '/legal/warranty', 'description' => 'Limited warranty information', 'updated' => 'January 10, 2026', 'version' => 'v1.0'],
                                ['name' => 'Legal Notice', 'path' => '/legal/notice', 'description' => 'Copyright and legal information', 'updated' => 'January 5, 2026', 'version' => 'v1.0']
                            ]
                        ],
                        [
                            'id' => 'reporting',
                            'name' => 'Reporting & Transparency',
                            'icon' => 'flag',
                            'color' => 'from-pink-500 to-pink-600',
                            'bgColor' => 'bg-pink-50 dark:bg-pink-900/20',
                            'description' => 'Transparency reports and disclosures',
                            'linkCount' => 4,
                            'links' => [
                                ['name' => 'Transparency Report', 'path' => '/legal/transparency', 'description' => 'Government data requests', 'updated' => 'March 1, 2026', 'version' => '2025'],
                                ['name' => 'Government Requests', 'path' => '/legal/gov-requests', 'description' => 'Law enforcement data requests', 'updated' => 'February 15, 2026', 'version' => '2025'],
                                ['name' => 'Copyright Takedown Report', 'path' => '/legal/copyright-report', 'description' => 'DMCA takedown statistics', 'updated' => 'February 1, 2026', 'version' => '2025'],
                                ['name' => 'Data Breach History', 'path' => '/legal/breach-history', 'description' => 'Security incident disclosures', 'updated' => 'January 15, 2026', 'version' => 'v1.0']
                            ]
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 716,
                'section_key' => 'legalLinks',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Social Media Links Section Variants
            [
                'id' => 717,
                'section_key' => 'socialMediaLinks',
                'variant' => 'variant1',
                'config' => json_encode([
                    'lastUpdated' => 'April 8, 2026',
                    'badge' => 'Connect With Us',
                    'title' => [
                        'prefix' => 'Follow',
                        'highlight' => 'Our Community'
                    ],
                    'description' => 'Follow us on social media to stay updated with the latest news, product updates, and community discussions.',
                    'socialCategories' => [
                        [
                            'id' => 'main',
                            'name' => 'Main Social Platforms',
                            'icon' => 'globe',
                            'color' => 'from-blue-500 to-blue-600',
                            'bgColor' => 'bg-blue-50 dark:bg-blue-900/20',
                            'description' => 'Our primary social media presence',
                            'linkCount' => 6,
                            'links' => [
                                ['name' => 'Twitter', 'path' => 'https://twitter.com/supplychainpro', 'username' => '@supplychainpro', 'followers' => '25.5K', 'icon' => 'twitter', 'color' => '#1DA1F2'],
                                ['name' => 'LinkedIn', 'path' => 'https://linkedin.com/company/supplychainpro', 'username' => 'SupplyChainPro', 'followers' => '42.1K', 'icon' => 'linkedin', 'color' => '#0077B5'],
                                ['name' => 'GitHub', 'path' => 'https://github.com/supplychainpro', 'username' => 'supplychainpro', 'followers' => '3.2K', 'icon' => 'github', 'color' => '#181717'],
                                ['name' => 'YouTube', 'path' => 'https://youtube.com/@supplychainpro', 'username' => '@supplychainpro', 'subscribers' => '12.8K', 'icon' => 'youtube', 'color' => '#FF0000'],
                                ['name' => 'Instagram', 'path' => 'https://instagram.com/supplychainpro', 'username' => '@supplychainpro', 'followers' => '8.5K', 'icon' => 'instagram', 'color' => '#E4405F'],
                                ['name' => 'Facebook', 'path' => 'https://facebook.com/supplychainpro', 'username' => '@supplychainpro', 'followers' => '15.2K', 'icon' => 'facebook', 'color' => '#1877F2']
                            ]
                        ],
                        [
                            'id' => 'developer',
                            'name' => 'Developer Communities',
                            'icon' => 'code',
                            'color' => 'from-purple-500 to-purple-600',
                            'bgColor' => 'bg-purple-50 dark:bg-purple-900/20',
                            'description' => 'Where our developers engage with the community',
                            'linkCount' => 6,
                            'links' => [
                                ['name' => 'Stack Overflow', 'path' => 'https://stackoverflow.com/companies/supplychainpro', 'username' => 'supplychainpro', 'reputation' => '2.5K', 'icon' => 'stackoverflow', 'color' => '#F58025'],
                                ['name' => 'Dev.to', 'path' => 'https://dev.to/supplychainpro', 'username' => '@supplychainpro', 'followers' => '1.8K', 'icon' => 'dev', 'color' => '#0A0A0A'],
                                ['name' => 'Hashnode', 'path' => 'https://hashnode.com/@supplychainpro', 'username' => '@supplychainpro', 'followers' => '950', 'icon' => 'hashnode', 'color' => '#2962FF'],
                                ['name' => 'Medium', 'path' => 'https://medium.com/@supplychainpro', 'username' => '@supplychainpro', 'followers' => '3.2K', 'icon' => 'medium', 'color' => '#000000'],
                                ['name' => 'Product Hunt', 'path' => 'https://www.producthunt.com/@supplychainpro', 'username' => '@supplychainpro', 'followers' => '1.2K', 'icon' => 'producthunt', 'color' => '#DA552F'],
                                ['name' => 'Indie Hackers', 'path' => 'https://www.indiehackers.com/supplychainpro', 'username' => 'supplychainpro', 'followers' => '780', 'icon' => 'indiehackers', 'color' => '#4A4A4A']
                            ]
                        ],
                        [
                            'id' => 'community',
                            'name' => 'Community & Chat',
                            'icon' => 'chat',
                            'color' => 'from-green-500 to-green-600',
                            'bgColor' => 'bg-green-50 dark:bg-green-900/20',
                            'description' => 'Join our community discussions',
                            'linkCount' => 4,
                            'links' => [
                                ['name' => 'Discord', 'path' => 'https://discord.gg/supplychainpro', 'username' => 'SupplyChainPro', 'members' => '4.5K', 'icon' => 'discord', 'color' => '#5865F2'],
                                ['name' => 'Slack', 'path' => 'https://slack.supplychainpro.com', 'username' => 'supplychainpro.slack.com', 'members' => '2.8K', 'icon' => 'slack', 'color' => '#4A154B'],
                                ['name' => 'Reddit', 'path' => 'https://reddit.com/r/supplychainpro', 'username' => 'r/supplychainpro', 'members' => '3.1K', 'icon' => 'reddit', 'color' => '#FF4500'],
                                ['name' => 'Telegram', 'path' => 'https://t.me/supplychainpro', 'username' => '@supplychainpro', 'members' => '1.5K', 'icon' => 'telegram', 'color' => '#26A5E4']
                            ]
                        ],
                        [
                            'id' => 'messaging',
                            'name' => 'Messaging Apps',
                            'icon' => 'message',
                            'color' => 'from-teal-500 to-teal-600',
                            'bgColor' => 'bg-teal-50 dark:bg-teal-900/20',
                            'description' => 'Get updates via messaging apps',
                            'linkCount' => 2,
                            'links' => [
                                ['name' => 'WhatsApp', 'path' => 'https://whatsapp.com/channel/supplychainpro', 'username' => 'SupplyChainPro', 'subscribers' => '2.1K', 'icon' => 'whatsapp', 'color' => '#25D366'],
                                ['name' => 'Telegram Channel', 'path' => 'https://t.me/supplychainpro_news', 'username' => '@supplychainpro_news', 'subscribers' => '1.2K', 'icon' => 'telegram', 'color' => '#26A5E4']
                            ]
                        ],
                        [
                            'id' => 'content',
                            'name' => 'Content Platforms',
                            'icon' => 'video',
                            'color' => 'from-red-500 to-red-600',
                            'bgColor' => 'bg-red-50 dark:bg-red-900/20',
                            'description' => 'Video and streaming content',
                            'linkCount' => 3,
                            'links' => [
                                ['name' => 'Twitch', 'path' => 'https://twitch.tv/supplychainpro', 'username' => 'supplychainpro', 'followers' => '1.2K', 'icon' => 'twitch', 'color' => '#9146FF'],
                                ['name' => 'TikTok', 'path' => 'https://tiktok.com/@supplychainpro', 'username' => '@supplychainpro', 'followers' => '5.2K', 'icon' => 'tiktok', 'color' => '#000000'],
                                ['name' => 'Pinterest', 'path' => 'https://pinterest.com/supplychainpro', 'username' => 'supplychainpro', 'followers' => '890', 'icon' => 'pinterest', 'color' => '#BD081C']
                            ]
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 718,
                'section_key' => 'socialMediaLinks',
                'variant' => 'variant2',
                'config' => json_encode([
                    'lastUpdated' => 'April 8, 2026',
                    'badge' => 'Social Hub',
                    'title' => [
                        'prefix' => 'Connect With',
                        'highlight' => 'Our Community'
                    ],
                    'description' => 'Follow us on social media to stay updated with the latest news, product updates, and community discussions.',
                    'tabs' => [
                        ['id' => 'all', 'label' => 'All Platforms', 'icon' => 'globe'],
                        ['id' => 'popular', 'label' => 'Most Active', 'icon' => 'star'],
                        ['id' => 'recent', 'label' => 'Recent Posts', 'icon' => 'trending-up']
                    ],
                    'categoryFilters' => [
                        ['id' => 'all', 'label' => 'All Categories'],
                        ['id' => 'main', 'label' => 'Main Social Platforms'],
                        ['id' => 'developer', 'label' => 'Developer Communities'],
                        ['id' => 'community', 'label' => 'Community & Chat'],
                        ['id' => 'messaging', 'label' => 'Messaging Apps'],
                        ['id' => 'content', 'label' => 'Content Platforms']
                    ],
                    'activePlatforms' => [
                        ['name' => 'Twitter', 'path' => 'https://twitter.com/supplychainpro', 'username' => '@supplychainpro', 'engagement' => 'High', 'posts' => '125/month', 'icon' => 'twitter', 'color' => '#1DA1F2'],
                        ['name' => 'LinkedIn', 'path' => 'https://linkedin.com/company/supplychainpro', 'username' => 'SupplyChainPro', 'engagement' => 'High', 'posts' => '45/month', 'icon' => 'linkedin', 'color' => '#0077B5'],
                        ['name' => 'GitHub', 'path' => 'https://github.com/supplychainpro', 'username' => 'supplychainpro', 'engagement' => 'Medium', 'commits' => '85/month', 'icon' => 'github', 'color' => '#181717'],
                        ['name' => 'YouTube', 'path' => 'https://youtube.com/@supplychainpro', 'username' => '@supplychainpro', 'engagement' => 'High', 'videos' => '8/month', 'icon' => 'youtube', 'color' => '#FF0000'],
                        ['name' => 'Discord', 'path' => 'https://discord.gg/supplychainpro', 'username' => 'SupplyChainPro', 'engagement' => 'High', 'messages' => '2.5K/day', 'icon' => 'discord', 'color' => '#5865F2'],
                        ['name' => 'Stack Overflow', 'path' => 'https://stackoverflow.com/companies/supplychainpro', 'username' => 'supplychainpro', 'engagement' => 'Medium', 'answers' => '45/month', 'icon' => 'stackoverflow', 'color' => '#F58025']
                    ],
                    'recentPosts' => [
                        ['platform' => 'Twitter', 'content' => 'Introducing SupplyChainPro v3.0 with advanced AI features!', 'date' => 'April 8, 2026', 'likes' => '1.2K', 'retweets' => '345', 'icon' => 'twitter', 'color' => '#1DA1F2'],
                        ['platform' => 'LinkedIn', 'content' => 'How we achieved SOC 2 Type II certification - read our latest blog post', 'date' => 'April 5, 2026', 'likes' => '856', 'comments' => '42', 'icon' => 'linkedin', 'color' => '#0077B5'],
                        ['platform' => 'GitHub', 'content' => 'Released version 3.0 of our Android SDK', 'date' => 'April 3, 2026', 'stars' => '67', 'forks' => '23', 'icon' => 'github', 'color' => '#181717'],
                        ['platform' => 'YouTube', 'content' => 'New tutorial: Getting Started with SupplyChainPro API', 'date' => 'April 1, 2026', 'views' => '3.2K', 'likes' => '234', 'icon' => 'youtube', 'color' => '#FF0000'],
                        ['platform' => 'Discord', 'content' => 'Community AMA with our CTO - Thursday at 2PM EST', 'date' => 'March 30, 2026', 'attendees' => '156', 'icon' => 'discord', 'color' => '#5865F2'],
                        ['platform' => 'Dev.to', 'content' => 'Building a Scalable Supply Chain API - Best Practices', 'date' => 'March 28, 2026', 'reactions' => '89', 'comments' => '23', 'icon' => 'dev', 'color' => '#0A0A0A']
                    ],
                    'socialCategories' => [
                        [
                            'id' => 'main',
                            'name' => 'Main Social Platforms',
                            'icon' => 'globe',
                            'color' => 'from-blue-500 to-blue-600',
                            'bgColor' => 'bg-blue-50 dark:bg-blue-900/20',
                            'description' => 'Our primary social media presence',
                            'linkCount' => 6,
                            'links' => [
                                ['name' => 'Twitter', 'path' => 'https://twitter.com/supplychainpro', 'username' => '@supplychainpro', 'followers' => '25.5K', 'icon' => 'twitter', 'color' => '#1DA1F2', 'active' => true],
                                ['name' => 'LinkedIn', 'path' => 'https://linkedin.com/company/supplychainpro', 'username' => 'SupplyChainPro', 'followers' => '42.1K', 'icon' => 'linkedin', 'color' => '#0077B5', 'active' => true],
                                ['name' => 'GitHub', 'path' => 'https://github.com/supplychainpro', 'username' => 'supplychainpro', 'followers' => '3.2K', 'icon' => 'github', 'color' => '#181717', 'active' => true],
                                ['name' => 'YouTube', 'path' => 'https://youtube.com/@supplychainpro', 'username' => '@supplychainpro', 'subscribers' => '12.8K', 'icon' => 'youtube', 'color' => '#FF0000', 'active' => true],
                                ['name' => 'Instagram', 'path' => 'https://instagram.com/supplychainpro', 'username' => '@supplychainpro', 'followers' => '8.5K', 'icon' => 'instagram', 'color' => '#E4405F'],
                                ['name' => 'Facebook', 'path' => 'https://facebook.com/supplychainpro', 'username' => '@supplychainpro', 'followers' => '15.2K', 'icon' => 'facebook', 'color' => '#1877F2']
                            ]
                        ],
                        [
                            'id' => 'developer',
                            'name' => 'Developer Communities',
                            'icon' => 'code',
                            'color' => 'from-purple-500 to-purple-600',
                            'bgColor' => 'bg-purple-50 dark:bg-purple-900/20',
                            'description' => 'Where our developers engage with the community',
                            'linkCount' => 6,
                            'links' => [
                                ['name' => 'Stack Overflow', 'path' => 'https://stackoverflow.com/companies/supplychainpro', 'username' => 'supplychainpro', 'reputation' => '2.5K', 'icon' => 'stackoverflow', 'color' => '#F58025', 'active' => true],
                                ['name' => 'Dev.to', 'path' => 'https://dev.to/supplychainpro', 'username' => '@supplychainpro', 'followers' => '1.8K', 'icon' => 'dev', 'color' => '#0A0A0A', 'active' => true],
                                ['name' => 'Hashnode', 'path' => 'https://hashnode.com/@supplychainpro', 'username' => '@supplychainpro', 'followers' => '950', 'icon' => 'hashnode', 'color' => '#2962FF'],
                                ['name' => 'Medium', 'path' => 'https://medium.com/@supplychainpro', 'username' => '@supplychainpro', 'followers' => '3.2K', 'icon' => 'medium', 'color' => '#000000'],
                                ['name' => 'Product Hunt', 'path' => 'https://www.producthunt.com/@supplychainpro', 'username' => '@supplychainpro', 'followers' => '1.2K', 'icon' => 'producthunt', 'color' => '#DA552F'],
                                ['name' => 'Indie Hackers', 'path' => 'https://www.indiehackers.com/supplychainpro', 'username' => 'supplychainpro', 'followers' => '780', 'icon' => 'indiehackers', 'color' => '#4A4A4A']
                            ]
                        ],
                        [
                            'id' => 'community',
                            'name' => 'Community & Chat',
                            'icon' => 'chat',
                            'color' => 'from-green-500 to-green-600',
                            'bgColor' => 'bg-green-50 dark:bg-green-900/20',
                            'description' => 'Join our community discussions',
                            'linkCount' => 4,
                            'links' => [
                                ['name' => 'Discord', 'path' => 'https://discord.gg/supplychainpro', 'username' => 'SupplyChainPro', 'members' => '4.5K', 'icon' => 'discord', 'color' => '#5865F2', 'active' => true],
                                ['name' => 'Slack', 'path' => 'https://slack.supplychainpro.com', 'username' => 'supplychainpro.slack.com', 'members' => '2.8K', 'icon' => 'slack', 'color' => '#4A154B'],
                                ['name' => 'Reddit', 'path' => 'https://reddit.com/r/supplychainpro', 'username' => 'r/supplychainpro', 'members' => '3.1K', 'icon' => 'reddit', 'color' => '#FF4500', 'active' => true],
                                ['name' => 'Telegram', 'path' => 'https://t.me/supplychainpro', 'username' => '@supplychainpro', 'members' => '1.5K', 'icon' => 'telegram', 'color' => '#26A5E4']
                            ]
                        ],
                        [
                            'id' => 'messaging',
                            'name' => 'Messaging Apps',
                            'icon' => 'message',
                            'color' => 'from-teal-500 to-teal-600',
                            'bgColor' => 'bg-teal-50 dark:bg-teal-900/20',
                            'description' => 'Get updates via messaging apps',
                            'linkCount' => 2,
                            'links' => [
                                ['name' => 'WhatsApp', 'path' => 'https://whatsapp.com/channel/supplychainpro', 'username' => 'SupplyChainPro', 'subscribers' => '2.1K', 'icon' => 'whatsapp', 'color' => '#25D366'],
                                ['name' => 'Telegram Channel', 'path' => 'https://t.me/supplychainpro_news', 'username' => '@supplychainpro_news', 'subscribers' => '1.2K', 'icon' => 'telegram', 'color' => '#26A5E4']
                            ]
                        ],
                        [
                            'id' => 'content',
                            'name' => 'Content Platforms',
                            'icon' => 'video',
                            'color' => 'from-red-500 to-red-600',
                            'bgColor' => 'bg-red-50 dark:bg-red-900/20',
                            'description' => 'Video and streaming content',
                            'linkCount' => 3,
                            'links' => [
                                ['name' => 'Twitch', 'path' => 'https://twitch.tv/supplychainpro', 'username' => 'supplychainpro', 'followers' => '1.2K', 'icon' => 'twitch', 'color' => '#9146FF'],
                                ['name' => 'TikTok', 'path' => 'https://tiktok.com/@supplychainpro', 'username' => '@supplychainpro', 'followers' => '5.2K', 'icon' => 'tiktok', 'color' => '#000000'],
                                ['name' => 'Pinterest', 'path' => 'https://pinterest.com/supplychainpro', 'username' => 'supplychainpro', 'followers' => '890', 'icon' => 'pinterest', 'color' => '#BD081C']
                            ]
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 719,
                'section_key' => 'socialMediaLinks',
                'variant' => 'variant3',
                'config' => json_encode([
                    'lastUpdated' => 'April 8, 2026',
                    'autoPlayCarousel' => true,
                    'badge' => 'Social Hub',
                    'title' => [
                        'prefix' => 'Connect With',
                        'highlight' => 'Our Community'
                    ],
                    'description' => 'Follow us on social media to stay updated with the latest news, product updates, and community discussions.',
                    'featuredContent' => [
                        ['title' => 'Join Our Discord Community', 'description' => 'Connect with developers and supply chain professionals in real-time.', 'icon' => 'discord', 'color' => 'from-indigo-500 to-indigo-600', 'path' => 'https://discord.gg/supplychainpro', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'],
                        ['title' => 'Follow on Twitter', 'description' => 'Get real-time updates and industry news.', 'icon' => 'twitter', 'color' => 'from-blue-500 to-blue-600', 'path' => 'https://twitter.com/supplychainpro', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'],
                        ['title' => 'Subscribe on YouTube', 'description' => 'Watch tutorials, webinars, and product demos.', 'icon' => 'youtube', 'color' => 'from-red-500 to-red-600', 'path' => 'https://youtube.com/@supplychainpro', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFunflies.mp4'],
                        ['title' => 'Connect on LinkedIn', 'description' => 'Follow our company page for professional insights.', 'icon' => 'linkedin', 'color' => 'from-blue-700 to-blue-800', 'path' => 'https://linkedin.com/company/supplychainpro', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4']
                    ],
                    'tabs' => [
                        ['id' => 'all', 'label' => 'All Platforms', 'icon' => 'globe'],
                        ['id' => 'popular', 'label' => 'Most Active', 'icon' => 'star'],
                        ['id' => 'recent', 'label' => 'Recent Posts', 'icon' => 'trending-up']
                    ],
                    'categoryFilters' => [
                        ['id' => 'all', 'label' => 'All Categories'],
                        ['id' => 'main', 'label' => 'Main Social Platforms'],
                        ['id' => 'developer', 'label' => 'Developer Communities'],
                        ['id' => 'community', 'label' => 'Community & Chat'],
                        ['id' => 'messaging', 'label' => 'Messaging Apps'],
                        ['id' => 'content', 'label' => 'Content Platforms']
                    ],
                    'activePlatforms' => [
                        ['name' => 'Twitter', 'path' => 'https://twitter.com/supplychainpro', 'username' => '@supplychainpro', 'engagement' => 'High', 'posts' => '125/month', 'icon' => 'twitter', 'color' => '#1DA1F2', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'],
                        ['name' => 'LinkedIn', 'path' => 'https://linkedin.com/company/supplychainpro', 'username' => 'SupplyChainPro', 'engagement' => 'High', 'posts' => '45/month', 'icon' => 'linkedin', 'color' => '#0077B5', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'],
                        ['name' => 'GitHub', 'path' => 'https://github.com/supplychainpro', 'username' => 'supplychainpro', 'engagement' => 'Medium', 'commits' => '85/month', 'icon' => 'github', 'color' => '#181717'],
                        ['name' => 'YouTube', 'path' => 'https://youtube.com/@supplychainpro', 'username' => '@supplychainpro', 'engagement' => 'High', 'videos' => '8/month', 'icon' => 'youtube', 'color' => '#FF0000', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFunflies.mp4'],
                        ['name' => 'Discord', 'path' => 'https://discord.gg/supplychainpro', 'username' => 'SupplyChainPro', 'engagement' => 'High', 'messages' => '2.5K/day', 'icon' => 'discord', 'color' => '#5865F2', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4'],
                        ['name' => 'Stack Overflow', 'path' => 'https://stackoverflow.com/companies/supplychainpro', 'username' => 'supplychainpro', 'engagement' => 'Medium', 'answers' => '45/month', 'icon' => 'stackoverflow', 'color' => '#F58025']
                    ],
                    'recentPosts' => [
                        ['platform' => 'Twitter', 'content' => 'Introducing SupplyChainPro v3.0 with advanced AI features!', 'date' => 'April 8, 2026', 'likes' => '1.2K', 'retweets' => '345', 'icon' => 'twitter', 'color' => '#1DA1F2', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'],
                        ['platform' => 'LinkedIn', 'content' => 'How we achieved SOC 2 Type II certification - read our latest blog post', 'date' => 'April 5, 2026', 'likes' => '856', 'comments' => '42', 'icon' => 'linkedin', 'color' => '#0077B5'],
                        ['platform' => 'GitHub', 'content' => 'Released version 3.0 of our Android SDK', 'date' => 'April 3, 2026', 'stars' => '67', 'forks' => '23', 'icon' => 'github', 'color' => '#181717'],
                        ['platform' => 'YouTube', 'content' => 'New tutorial: Getting Started with SupplyChainPro API', 'date' => 'April 1, 2026', 'views' => '3.2K', 'likes' => '234', 'icon' => 'youtube', 'color' => '#FF0000', 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFunflies.mp4'],
                        ['platform' => 'Discord', 'content' => 'Community AMA with our CTO - Thursday at 2PM EST', 'date' => 'March 30, 2026', 'attendees' => '156', 'icon' => 'discord', 'color' => '#5865F2'],
                        ['platform' => 'Dev.to', 'content' => 'Building a Scalable Supply Chain API - Best Practices', 'date' => 'March 28, 2026', 'reactions' => '89', 'comments' => '23', 'icon' => 'dev', 'color' => '#0A0A0A']
                    ],
                    'socialCategories' => [
                        [
                            'id' => 'main',
                            'name' => 'Main Social Platforms',
                            'icon' => 'globe',
                            'color' => 'from-blue-500 to-blue-600',
                            'bgColor' => 'bg-blue-50 dark:bg-blue-900/20',
                            'description' => 'Our primary social media presence',
                            'linkCount' => 6,
                            'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
                            'links' => [
                                ['name' => 'Twitter', 'path' => 'https://twitter.com/supplychainpro', 'username' => '@supplychainpro', 'followers' => '25.5K', 'icon' => 'twitter', 'color' => '#1DA1F2', 'active' => true, 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'],
                                ['name' => 'LinkedIn', 'path' => 'https://linkedin.com/company/supplychainpro', 'username' => 'SupplyChainPro', 'followers' => '42.1K', 'icon' => 'linkedin', 'color' => '#0077B5', 'active' => true, 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'],
                                ['name' => 'GitHub', 'path' => 'https://github.com/supplychainpro', 'username' => 'supplychainpro', 'followers' => '3.2K', 'icon' => 'github', 'color' => '#181717', 'active' => true],
                                ['name' => 'YouTube', 'path' => 'https://youtube.com/@supplychainpro', 'username' => '@supplychainpro', 'subscribers' => '12.8K', 'icon' => 'youtube', 'color' => '#FF0000', 'active' => true, 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFunflies.mp4'],
                                ['name' => 'Instagram', 'path' => 'https://instagram.com/supplychainpro', 'username' => '@supplychainpro', 'followers' => '8.5K', 'icon' => 'instagram', 'color' => '#E4405F'],
                                ['name' => 'Facebook', 'path' => 'https://facebook.com/supplychainpro', 'username' => '@supplychainpro', 'followers' => '15.2K', 'icon' => 'facebook', 'color' => '#1877F2']
                            ]
                        ],
                        [
                            'id' => 'developer',
                            'name' => 'Developer Communities',
                            'icon' => 'code',
                            'color' => 'from-purple-500 to-purple-600',
                            'bgColor' => 'bg-purple-50 dark:bg-purple-900/20',
                            'description' => 'Where our developers engage with the community',
                            'linkCount' => 6,
                            'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
                            'links' => [
                                ['name' => 'Stack Overflow', 'path' => 'https://stackoverflow.com/companies/supplychainpro', 'username' => 'supplychainpro', 'reputation' => '2.5K', 'icon' => 'stackoverflow', 'color' => '#F58025', 'active' => true],
                                ['name' => 'Dev.to', 'path' => 'https://dev.to/supplychainpro', 'username' => '@supplychainpro', 'followers' => '1.8K', 'icon' => 'dev', 'color' => '#0A0A0A', 'active' => true, 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFunflies.mp4'],
                                ['name' => 'Hashnode', 'path' => 'https://hashnode.com/@supplychainpro', 'username' => '@supplychainpro', 'followers' => '950', 'icon' => 'hashnode', 'color' => '#2962FF'],
                                ['name' => 'Medium', 'path' => 'https://medium.com/@supplychainpro', 'username' => '@supplychainpro', 'followers' => '3.2K', 'icon' => 'medium', 'color' => '#000000'],
                                ['name' => 'Product Hunt', 'path' => 'https://www.producthunt.com/@supplychainpro', 'username' => '@supplychainpro', 'followers' => '1.2K', 'icon' => 'producthunt', 'color' => '#DA552F'],
                                ['name' => 'Indie Hackers', 'path' => 'https://www.indiehackers.com/supplychainpro', 'username' => 'supplychainpro', 'followers' => '780', 'icon' => 'indiehackers', 'color' => '#4A4A4A']
                            ]
                        ],
                        [
                            'id' => 'community',
                            'name' => 'Community & Chat',
                            'icon' => 'chat',
                            'color' => 'from-green-500 to-green-600',
                            'bgColor' => 'bg-green-50 dark:bg-green-900/20',
                            'description' => 'Join our community discussions',
                            'linkCount' => 4,
                            'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
                            'links' => [
                                ['name' => 'Discord', 'path' => 'https://discord.gg/supplychainpro', 'username' => 'SupplyChainPro', 'members' => '4.5K', 'icon' => 'discord', 'color' => '#5865F2', 'active' => true, 'videoUrl' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'],
                                ['name' => 'Slack', 'path' => 'https://slack.supplychainpro.com', 'username' => 'supplychainpro.slack.com', 'members' => '2.8K', 'icon' => 'slack', 'color' => '#4A154B'],
                                ['name' => 'Reddit', 'path' => 'https://reddit.com/r/supplychainpro', 'username' => 'r/supplychainpro', 'members' => '3.1K', 'icon' => 'reddit', 'color' => '#FF4500', 'active' => true],
                                ['name' => 'Telegram', 'path' => 'https://t.me/supplychainpro', 'username' => '@supplychainpro', 'members' => '1.5K', 'icon' => 'telegram', 'color' => '#26A5E4']
                            ]
                        ],
                        [
                            'id' => 'messaging',
                            'name' => 'Messaging Apps',
                            'icon' => 'message',
                            'color' => 'from-teal-500 to-teal-600',
                            'bgColor' => 'bg-teal-50 dark:bg-teal-900/20',
                            'description' => 'Get updates via messaging apps',
                            'linkCount' => 2,
                            'links' => [
                                ['name' => 'WhatsApp', 'path' => 'https://whatsapp.com/channel/supplychainpro', 'username' => 'SupplyChainPro', 'subscribers' => '2.1K', 'icon' => 'whatsapp', 'color' => '#25D366'],
                                ['name' => 'Telegram Channel', 'path' => 'https://t.me/supplychainpro_news', 'username' => '@supplychainpro_news', 'subscribers' => '1.2K', 'icon' => 'telegram', 'color' => '#26A5E4']
                            ]
                        ],
                        [
                            'id' => 'content',
                            'name' => 'Content Platforms',
                            'icon' => 'video',
                            'color' => 'from-red-500 to-red-600',
                            'bgColor' => 'bg-red-50 dark:bg-red-900/20',
                            'description' => 'Video and streaming content',
                            'linkCount' => 3,
                            'links' => [
                                ['name' => 'Twitch', 'path' => 'https://twitch.tv/supplychainpro', 'username' => 'supplychainpro', 'followers' => '1.2K', 'icon' => 'twitch', 'color' => '#9146FF'],
                                ['name' => 'TikTok', 'path' => 'https://tiktok.com/@supplychainpro', 'username' => '@supplychainpro', 'followers' => '5.2K', 'icon' => 'tiktok', 'color' => '#000000'],
                                ['name' => 'Pinterest', 'path' => 'https://pinterest.com/supplychainpro', 'username' => 'supplychainpro', 'followers' => '890', 'icon' => 'pinterest', 'color' => '#BD081C']
                            ]
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 720,
                'section_key' => 'socialMediaLinks',
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
