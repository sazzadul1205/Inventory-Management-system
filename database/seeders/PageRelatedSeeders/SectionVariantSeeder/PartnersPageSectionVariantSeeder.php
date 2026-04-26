<?php

namespace Database\Seeders\PageRelatedSeeders\SectionVariantSeeder;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PartnersPageSectionVariantSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        // Upsert only this page's variants so other page seeders do not get wiped out.
        $variants = [

            // Partner Program Overview Section 
            [
                'id' => 445,
                'section_key' => 'partnerProgramOverview',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => 'Partner Ecosystem',
                    'title' => [
                        'prefix' => 'Empower Your Business with',
                        'highlight' => 'SupplyChainPro',
                        'suffix' => ''
                    ],
                    'description' => 'Join our award-winning partner program and unlock new revenue streams. We provide the training, tools, and go-to-market support to help you succeed.',
                    'heroImage' => 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200&h=500&fit=crop',
                    'searchPlaceholder' => 'Search by partner name, program, or solution...',
                    'programTypes' => [
                        ['id' => 'all', 'label' => 'All Programs', 'icon' => 'users'],
                        ['id' => 'technology', 'label' => 'Technology', 'icon' => 'chip'],
                        ['id' => 'consulting', 'label' => 'Consulting', 'icon' => 'briefcase'],
                        ['id' => 'reseller', 'label' => 'Reseller', 'icon' => 'globe'],
                        ['id' => 'alliance', 'label' => 'Alliance', 'icon' => 'users'],
                        ['id' => 'solution', 'label' => 'Solution', 'icon' => 'cog']
                    ],
                    'regions' => [
                        ['id' => 'all', 'label' => 'Worldwide'],
                        ['id' => 'north-america', 'label' => 'North America'],
                        ['id' => 'emea', 'label' => 'EMEA'],
                        ['id' => 'apac', 'label' => 'APAC'],
                        ['id' => 'latin-america', 'label' => 'Latin America']
                    ],
                    'successMetrics' => [
                        ['value' => '1000+', 'label' => 'Certified Partners', 'icon' => 'badge'],
                        ['value' => '60+', 'label' => 'Countries', 'icon' => 'globe'],
                        ['value' => '$250M+', 'label' => 'Joint Pipeline', 'icon' => 'credit'],
                        ['value' => '4.9/5', 'label' => 'Partner Rating', 'icon' => 'star']
                    ],
                    'programBenefits' => [
                        ['title' => 'Advanced Training & Certification', 'description' => 'Role-based learning paths and certifications to build technical and sales expertise.', 'icon' => 'academic'],
                        ['title' => 'Joint Go-to-Market', 'description' => 'Co-branded campaigns, MDF funds, and access to our global sales teams.', 'icon' => 'chart'],
                        ['title' => 'Technical Enablement', 'description' => 'Sandbox environments, solution architects, and premium support channels.', 'icon' => 'shield'],
                        ['title' => 'Competitive Margins', 'description' => 'Industry-leading rebates and deal registration program to protect your investment.', 'icon' => 'credit']
                    ],
                    'featuredPartner' => [
                        'id' => 'partner-1',
                        'name' => 'Deloitte',
                        'program' => 'alliance',
                        'location' => 'Global',
                        'region' => 'global',
                        'description' => 'As a Global Strategic Alliance partner, Deloitte integrates SupplyChainPro into their digital transformation practice, helping clients achieve end-to-end supply chain visibility.',
                        'logo' => 'https://placehold.co/200x80/1e293b/ffffff?text=Deloitte',
                        'image' => 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=500&fit=crop',
                        'link' => '/partners/deloitte',
                        'certified' => true
                    ],
                    'partners' => [
                        [
                            'id' => 'partner-1',
                            'name' => 'Deloitte',
                            'program' => 'alliance',
                            'location' => 'New York, USA',
                            'region' => 'north-america',
                            'description' => 'Global leader in consulting and digital transformation, helping clients optimize supply chains with AI-driven insights.',
                            'logo' => 'https://placehold.co/200x80/1e293b/ffffff?text=Deloitte',
                            'image' => 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop',
                            'link' => '/partners/deloitte',
                            'certified' => true,
                            'expertise' => ['Supply Chain Strategy', 'Digital Transformation', 'AI Implementation'],
                            'tags' => ['consulting', 'enterprise', 'global'],
                            'contactEmail' => 'partners@deloitte.com'
                        ],
                        [
                            'id' => 'partner-2',
                            'name' => 'AWS',
                            'program' => 'technology',
                            'location' => 'Seattle, USA',
                            'region' => 'north-america',
                            'description' => 'SupplyChainPro runs on AWS to provide scalable, secure, and reliable cloud infrastructure for global supply chains.',
                            'logo' => 'https://placehold.co/200x80/1e293b/ffffff?text=AWS',
                            'image' => 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
                            'link' => '/partners/aws',
                            'certified' => true,
                            'expertise' => ['Cloud Infrastructure', 'Data Analytics', 'Machine Learning'],
                            'tags' => ['cloud', 'ai', 'infrastructure'],
                            'contactEmail' => 'aws-partners@supplychainpro.com'
                        ],
                        [
                            'id' => 'partner-3',
                            'name' => 'Blue Yonder',
                            'program' => 'solution',
                            'location' => 'Scottsdale, USA',
                            'region' => 'north-america',
                            'description' => 'Integration partner delivering unified supply chain planning and execution solutions for manufacturing and retail.',
                            'logo' => 'https://placehold.co/200x80/1e293b/ffffff?text=Blue+Yonder',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
                            'link' => '/partners/blueyonder',
                            'certified' => true,
                            'expertise' => ['Supply Chain Planning', 'Retail', 'Manufacturing'],
                            'tags' => ['planning', 'retail', 'manufacturing'],
                            'contactEmail' => 'partners@blueyonder.com'
                        ],
                        [
                            'id' => 'partner-4',
                            'name' => 'Capgemini',
                            'program' => 'consulting',
                            'location' => 'Paris, France',
                            'region' => 'emea',
                            'description' => 'Global leader in consulting and engineering services, leveraging SupplyChainPro for intelligent supply chain operations.',
                            'logo' => 'https://placehold.co/200x80/1e293b/ffffff?text=Capgemini',
                            'image' => 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&h=400&fit=crop',
                            'link' => '/partners/capgemini',
                            'certified' => true,
                            'expertise' => ['Operations Consulting', 'Supply Chain Analytics', 'Sustainability'],
                            'tags' => ['consulting', 'emea', 'sustainability'],
                            'contactEmail' => 'scp-partners@capgemini.com'
                        ],
                        [
                            'id' => 'partner-5',
                            'name' => 'Infosys',
                            'program' => 'alliance',
                            'location' => 'Bangalore, India',
                            'region' => 'apac',
                            'description' => 'Strategic alliance delivering end-to-end supply chain transformation using AI and automation.',
                            'logo' => 'https://placehold.co/200x80/1e293b/ffffff?text=Infosys',
                            'image' => 'https://images.unsplash.com/photo-1529255484355-cb73c25c4e7a?w=600&h=400&fit=crop',
                            'link' => '/partners/infosys',
                            'certified' => true,
                            'expertise' => ['AI/ML', 'Automation', 'Cloud Integration'],
                            'tags' => ['ai', 'automation', 'digital'],
                            'contactEmail' => 'scp@infosys.com'
                        ],
                        [
                            'id' => 'partner-6',
                            'name' => 'IBM',
                            'program' => 'technology',
                            'location' => 'Armonk, USA',
                            'region' => 'north-america',
                            'description' => 'Technology partner integrating SupplyChainPro with IBM Blockchain and Watson AI for enhanced traceability.',
                            'logo' => 'https://placehold.co/200x80/1e293b/ffffff?text=IBM',
                            'image' => 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop',
                            'link' => '/partners/ibm',
                            'certified' => true,
                            'expertise' => ['Blockchain', 'AI', 'IoT'],
                            'tags' => ['blockchain', 'ai', 'iot'],
                            'contactEmail' => 'ibm-partners@supplychainpro.com'
                        ]
                    ],
                    'ctaTitle' => 'Accelerate Your Growth',
                    'ctaDescription' => 'Join the fastest-growing supply chain ecosystem. Access cutting-edge technology, training, and a global community.',
                    'ctaImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop',
                    'showNewsletter' => true,
                    'newsletter' => [
                        'title' => 'Partner Program Insights',
                        'description' => 'Receive the latest partner news, training schedules, and solution updates.',
                        'disclaimer' => 'We respect your privacy. Unsubscribe at any time.',
                        'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 446,
                'section_key' => 'partnerProgramOverview',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => 'Partner Ecosystem',
                    'title' => [
                        'prefix' => 'Accelerate Growth with',
                        'highlight' => 'SupplyChainPro'
                    ],
                    'description' => 'Join a global network of innovative partners. Access cutting-edge technology, comprehensive training, and joint go-to-market opportunities to drive mutual success.',
                    'heroImage' => 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200&h=500&fit=crop',
                    'searchPlaceholder' => 'Search partners by name, expertise, or solution area...',
                    'defaultViewMode' => 'grid',
                    'programTypes' => [
                        ['id' => 'all', 'label' => 'All Partners', 'icon' => 'users', 'count' => 24],
                        ['id' => 'technology', 'label' => 'Technology', 'icon' => 'chip'],
                        ['id' => 'consulting', 'label' => 'Consulting', 'icon' => 'briefcase'],
                        ['id' => 'reseller', 'label' => 'Reseller', 'icon' => 'globe'],
                        ['id' => 'alliance', 'label' => 'Strategic Alliance', 'icon' => 'users'],
                        ['id' => 'solution', 'label' => 'Solution', 'icon' => 'cog']
                    ],
                    'regions' => [
                        ['id' => 'all', 'label' => 'All Regions', 'flag' => 'globe'],
                        ['id' => 'north-america', 'label' => 'North America', 'flag' => 'globe'],
                        ['id' => 'europe', 'label' => 'Europe', 'flag' => 'globe'],
                        ['id' => 'asia-pacific', 'label' => 'Asia Pacific', 'flag' => 'globe'],
                        ['id' => 'latin-america', 'label' => 'Latin America', 'flag' => 'globe']
                    ],
                    'stats' => [
                        ['value' => '1000+', 'label' => 'Certified Partners', 'icon' => 'badge', 'trend' => '+24%', 'trendUp' => true],
                        ['value' => '60+', 'label' => 'Countries', 'icon' => 'globe', 'trend' => '+12', 'trendUp' => true],
                        ['value' => '$500M+', 'label' => 'Joint Pipeline', 'icon' => 'credit', 'trend' => '+35%', 'trendUp' => true],
                        ['value' => '98%', 'label' => 'Partner Retention', 'icon' => 'heart', 'trend' => '+5%', 'trendUp' => true]
                    ],
                    'partners' => [
                        [
                            'id' => 'partner-1',
                            'name' => 'Accenture',
                            'program' => 'alliance',
                            'tier' => 'platinum',
                            'region' => 'north-america',
                            'location' => 'Global',
                            'description' => 'Global professional services leader integrating SupplyChainPro into their supply chain transformation practice.',
                            'logo' => 'https://placehold.co/200x80/1e293b/ffffff?text=Accenture',
                            'link' => '/partners/accenture',
                            'isFeatured' => true,
                            'certified' => true,
                            'expertise' => ['Digital Transformation', 'AI Strategy', 'Supply Chain Planning'],
                            'successStories' => 15,
                            'image' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'partner-2',
                            'name' => 'Microsoft',
                            'program' => 'technology',
                            'tier' => 'platinum',
                            'region' => 'north-america',
                            'location' => 'Redmond, WA',
                            'description' => 'Strategic technology partner leveraging Azure AI and Power BI for advanced supply chain analytics.',
                            'logo' => 'https://placehold.co/200x80/1e293b/ffffff?text=Microsoft',
                            'link' => '/partners/microsoft',
                            'isFeatured' => true,
                            'certified' => true,
                            'expertise' => ['Cloud Computing', 'AI/ML', 'Data Analytics'],
                            'successStories' => 28,
                            'image' => 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'partner-3',
                            'name' => 'Deloitte',
                            'program' => 'consulting',
                            'tier' => 'gold',
                            'region' => 'europe',
                            'location' => 'London, UK',
                            'description' => 'Leading consulting firm driving operational excellence through SupplyChainPro implementation.',
                            'logo' => 'https://placehold.co/200x80/1e293b/ffffff?text=Deloitte',
                            'link' => '/partners/deloitte',
                            'isFeatured' => false,
                            'certified' => true,
                            'expertise' => ['Process Optimization', 'Change Management', 'SCM Strategy'],
                            'successStories' => 9,
                            'image' => 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'partner-4',
                            'name' => 'Blue Yonder',
                            'program' => 'solution',
                            'tier' => 'gold',
                            'region' => 'north-america',
                            'location' => 'Scottsdale, AZ',
                            'description' => 'Integration partner delivering unified supply chain planning and execution solutions.',
                            'logo' => 'https://placehold.co/200x80/1e293b/ffffff?text=Blue+Yonder',
                            'link' => '/partners/blueyonder',
                            'isFeatured' => false,
                            'certified' => true,
                            'expertise' => ['Demand Planning', 'Inventory Optimization', 'Retail'],
                            'successStories' => 12,
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'partner-5',
                            'name' => 'Capgemini',
                            'program' => 'consulting',
                            'tier' => 'silver',
                            'region' => 'europe',
                            'location' => 'Paris, France',
                            'description' => 'Global leader in consulting and engineering services for intelligent supply chain operations.',
                            'logo' => 'https://placehold.co/200x80/1e293b/ffffff?text=Capgemini',
                            'link' => '/partners/capgemini',
                            'isFeatured' => false,
                            'certified' => true,
                            'expertise' => ['Sustainability', 'Operations Consulting', 'Analytics'],
                            'successStories' => 7,
                            'image' => 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'partner-6',
                            'name' => 'Infosys',
                            'program' => 'alliance',
                            'tier' => 'silver',
                            'region' => 'asia-pacific',
                            'location' => 'Bangalore, India',
                            'description' => 'Strategic alliance delivering end-to-end supply chain transformation using AI and automation.',
                            'logo' => 'https://placehold.co/200x80/1e293b/ffffff?text=Infosys',
                            'link' => '/partners/infosys',
                            'isFeatured' => false,
                            'certified' => true,
                            'expertise' => ['AI/ML', 'Automation', 'Cloud Integration'],
                            'successStories' => 11,
                            'image' => 'https://images.unsplash.com/photo-1529255484355-cb73c25c4e7a?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'partner-7',
                            'name' => 'TCS',
                            'program' => 'technology',
                            'tier' => 'registered',
                            'region' => 'asia-pacific',
                            'location' => 'Mumbai, India',
                            'description' => 'Technology partner integrating SupplyChainPro with IoT and edge computing solutions.',
                            'logo' => 'https://placehold.co/200x80/1e293b/ffffff?text=TCS',
                            'link' => '/partners/tcs',
                            'isFeatured' => false,
                            'certified' => false,
                            'expertise' => ['IoT', 'Edge Computing', 'Digital Twins'],
                            'successStories' => 4,
                            'image' => 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'partner-8',
                            'name' => 'PwC',
                            'program' => 'consulting',
                            'tier' => 'gold',
                            'region' => 'north-america',
                            'location' => 'New York, NY',
                            'description' => 'Professional services firm helping clients navigate supply chain disruptions with data-driven insights.',
                            'logo' => 'https://placehold.co/200x80/1e293b/ffffff?text=PwC',
                            'link' => '/partners/pwc',
                            'isFeatured' => false,
                            'certified' => true,
                            'expertise' => ['Risk Management', 'Compliance', 'Tax Optimization'],
                            'successStories' => 14,
                            'image' => 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&h=400&fit=crop'
                        ]
                    ],
                    'successStories' => [
                        [
                            'partner' => 'Accenture',
                            'logo' => 'https://placehold.co/200x80/1e293b/ffffff?text=Accenture',
                            'industry' => 'Professional Services',
                            'quote' => 'SupplyChainPro has transformed how we deliver value to our manufacturing clients, reducing their inventory costs by 30%.',
                            'result' => '30% inventory reduction',
                            'link' => '/success-stories/accenture',
                            'image' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop'
                        ],
                        [
                            'partner' => 'Microsoft',
                            'logo' => 'https://placehold.co/200x80/1e293b/ffffff?text=Microsoft',
                            'industry' => 'Technology',
                            'quote' => 'The integration with Azure AI has enabled predictive supply chain capabilities that were previously impossible.',
                            'result' => '95% forecast accuracy',
                            'link' => '/success-stories/microsoft',
                            'image' => 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop'
                        ],
                        [
                            'partner' => 'Deloitte',
                            'logo' => 'https://placehold.co/200x80/1e293b/ffffff?text=Deloitte',
                            'industry' => 'Consulting',
                            'quote' => 'Our joint clients have achieved unprecedented visibility across their multi-tier supply networks.',
                            'result' => 'End-to-end visibility',
                            'link' => '/success-stories/deloitte',
                            'image' => 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=400&fit=crop'
                        ]
                    ],
                    'showNewsletter' => true,
                    'newsletter' => [
                        'title' => 'Partner Ecosystem Insights',
                        'description' => 'Receive the latest partner news, technical training schedules, and co-marketing opportunities.',
                        'disclaimer' => 'We respect your privacy. Unsubscribe at any time.',
                        'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 447,
                'section_key' => 'partnerProgramOverview',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => 'Partner Ecosystem',
                    'title' => [
                        'prefix' => 'Accelerate with',
                        'highlight' => 'SupplyChainPro'
                    ],
                    'description' => 'Join a global community of innovators. Access exclusive training, co-marketing funds, and technical enablement to drive joint success.',
                    'heroImage' => 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200&h=500&fit=crop',
                    'autoPlayCarousel' => true,
                    'programTypes' => [
                        ['id' => 'all', 'label' => 'All Partners', 'icon' => 'users'],
                        ['id' => 'technology', 'label' => 'Technology', 'icon' => 'chip'],
                        ['id' => 'consulting', 'label' => 'Consulting', 'icon' => 'briefcase'],
                        ['id' => 'reseller', 'label' => 'Reseller', 'icon' => 'globe'],
                        ['id' => 'alliance', 'label' => 'Alliance', 'icon' => 'users'],
                        ['id' => 'solution', 'label' => 'Solution', 'icon' => 'cog']
                    ],
                    'regions' => [
                        ['id' => 'all', 'label' => 'All Regions', 'flag' => 'globe'],
                        ['id' => 'north-america', 'label' => 'North America', 'flag' => 'globe'],
                        ['id' => 'europe', 'label' => 'Europe', 'flag' => 'globe'],
                        ['id' => 'asia-pacific', 'label' => 'Asia Pacific', 'flag' => 'globe']
                    ],
                    'stats' => [
                        ['value' => '800+', 'label' => 'Global Partners'],
                        ['value' => '45+', 'label' => 'Countries'],
                        ['value' => '$200M+', 'label' => 'Joint Revenue'],
                        ['value' => '96%', 'label' => 'Retention Rate']
                    ],
                    'partnerTiers' => [
                        [
                            'id' => 'platinum',
                            'description' => 'Strategic partners with deep integration and global reach.',
                            'benefits' => ['Highest deal registration', 'Strategic planning', 'Executive sponsor', 'Joint marketing fund'],
                            'image' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'gold',
                            'description' => 'Advanced partners with proven expertise and regional presence.',
                            'benefits' => ['Enhanced support', 'Advanced training', 'Co-marketing opportunities', 'Partner advisory council'],
                            'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'silver',
                            'description' => 'Growing partners building their practice and certifications.',
                            'benefits' => ['Standard support', 'Certification program', 'Marketing resources', 'Partner portal access'],
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'registered',
                            'description' => 'Entry-level partners starting their journey with us.',
                            'benefits' => ['Basic support', 'Online training', 'Community access', 'Deal registration'],
                            'image' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=400&fit=crop'
                        ]
                    ],
                    'successMetrics' => [
                        ['value' => '250+', 'label' => 'Joint Customers'],
                        ['value' => '150+', 'label' => 'Certified Architects'],
                        ['value' => '98%', 'label' => 'Partner Satisfaction'],
                        ['value' => '35%', 'label' => 'YoY Growth']
                    ],
                    'programBenefits' => [
                        ['title' => 'Advanced Training', 'description' => 'Role-based learning paths and certifications to build technical expertise.', 'icon' => 'academic', 'gradient' => 'from-blue-500 to-blue-600'],
                        ['title' => 'Joint Marketing', 'description' => 'Co-branded campaigns, MDF funds, and access to global sales teams.', 'icon' => 'chart', 'gradient' => 'from-emerald-500 to-emerald-600'],
                        ['title' => 'Technical Enablement', 'description' => 'Sandbox environments, solution architects, and premium support channels.', 'icon' => 'shield', 'gradient' => 'from-purple-500 to-purple-600'],
                        ['title' => 'Competitive Margins', 'description' => 'Industry-leading rebates and deal registration program to protect your investment.', 'icon' => 'credit', 'gradient' => 'from-amber-500 to-amber-600'],
                        ['title' => 'Co-innovation', 'description' => 'Collaborate on product roadmaps and joint solution development.', 'icon' => 'chip', 'gradient' => 'from-indigo-500 to-indigo-600'],
                        ['title' => 'Global Recognition', 'description' => 'Showcase your expertise through our partner directory and industry events.', 'icon' => 'trophy', 'gradient' => 'from-yellow-500 to-yellow-600']
                    ],
                    'featuredPartners' => [
                        [
                            'id' => 'partner-1',
                            'name' => 'Accenture',
                            'program' => 'alliance',
                            'tier' => 'platinum',
                            'region' => 'north-america',
                            'description' => 'Global professional services leader integrating SupplyChainPro into their supply chain transformation practice.',
                            'image' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=500&fit=crop',
                            'logo' => 'https://placehold.co/200x80/1e293b/ffffff?text=Accenture',
                            'link' => '/partners/accenture',
                            'certified' => true,
                            'expertise' => ['Digital Transformation', 'AI Strategy', 'Supply Chain Planning'],
                            'successStories' => 25
                        ],
                        [
                            'id' => 'partner-2',
                            'name' => 'Microsoft',
                            'program' => 'technology',
                            'tier' => 'platinum',
                            'region' => 'north-america',
                            'description' => 'Strategic technology partner leveraging Azure AI and Power BI for advanced supply chain analytics.',
                            'image' => 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop',
                            'logo' => 'https://placehold.co/200x80/1e293b/ffffff?text=Microsoft',
                            'link' => '/partners/microsoft',
                            'certified' => true,
                            'expertise' => ['Cloud Computing', 'AI/ML', 'Data Analytics'],
                            'successStories' => 42
                        ]
                    ],
                    'partners' => [
                        [
                            'id' => 'partner-1',
                            'name' => 'Accenture',
                            'program' => 'alliance',
                            'tier' => 'platinum',
                            'region' => 'north-america',
                            'description' => 'Global professional services leader integrating SupplyChainPro into their supply chain transformation practice.',
                            'logo' => 'https://placehold.co/200x80/1e293b/ffffff?text=Accenture',
                            'image' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop',
                            'link' => '/partners/accenture',
                            'certified' => true,
                            'expertise' => ['Digital Transformation', 'AI Strategy', 'Supply Chain Planning'],
                            'successStories' => 25
                        ],
                        [
                            'id' => 'partner-2',
                            'name' => 'Microsoft',
                            'program' => 'technology',
                            'tier' => 'platinum',
                            'region' => 'north-america',
                            'description' => 'Strategic technology partner leveraging Azure AI and Power BI for advanced supply chain analytics.',
                            'logo' => 'https://placehold.co/200x80/1e293b/ffffff?text=Microsoft',
                            'image' => 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
                            'link' => '/partners/microsoft',
                            'certified' => true,
                            'expertise' => ['Cloud Computing', 'AI/ML', 'Data Analytics'],
                            'successStories' => 42
                        ],
                        [
                            'id' => 'partner-3',
                            'name' => 'Deloitte',
                            'program' => 'consulting',
                            'tier' => 'gold',
                            'region' => 'europe',
                            'description' => 'Leading consulting firm driving operational excellence through SupplyChainPro implementation.',
                            'logo' => 'https://placehold.co/200x80/1e293b/ffffff?text=Deloitte',
                            'image' => 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=400&fit=crop',
                            'link' => '/partners/deloitte',
                            'certified' => true,
                            'expertise' => ['Process Optimization', 'Change Management', 'SCM Strategy'],
                            'successStories' => 18
                        ],
                        [
                            'id' => 'partner-4',
                            'name' => 'Blue Yonder',
                            'program' => 'solution',
                            'tier' => 'gold',
                            'region' => 'north-america',
                            'description' => 'Integration partner delivering unified supply chain planning and execution solutions.',
                            'logo' => 'https://placehold.co/200x80/1e293b/ffffff?text=Blue+Yonder',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
                            'link' => '/partners/blueyonder',
                            'certified' => true,
                            'expertise' => ['Demand Planning', 'Inventory Optimization', 'Retail'],
                            'successStories' => 15
                        ],
                        [
                            'id' => 'partner-5',
                            'name' => 'Capgemini',
                            'program' => 'consulting',
                            'tier' => 'silver',
                            'region' => 'europe',
                            'description' => 'Global leader in consulting and engineering services for intelligent supply chain operations.',
                            'logo' => 'https://placehold.co/200x80/1e293b/ffffff?text=Capgemini',
                            'image' => 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&h=400&fit=crop',
                            'link' => '/partners/capgemini',
                            'certified' => true,
                            'expertise' => ['Sustainability', 'Operations Consulting', 'Analytics'],
                            'successStories' => 12
                        ],
                        [
                            'id' => 'partner-6',
                            'name' => 'Infosys',
                            'program' => 'alliance',
                            'tier' => 'silver',
                            'region' => 'asia-pacific',
                            'description' => 'Strategic alliance delivering end-to-end supply chain transformation using AI and automation.',
                            'logo' => 'https://placehold.co/200x80/1e293b/ffffff?text=Infosys',
                            'image' => 'https://images.unsplash.com/photo-1529255484355-cb73c25c4e7a?w=600&h=400&fit=crop',
                            'link' => '/partners/infosys',
                            'certified' => true,
                            'expertise' => ['AI/ML', 'Automation', 'Cloud Integration'],
                            'successStories' => 10
                        ]
                    ],
                    'partnerResources' => [
                        ['title' => 'Partner Portal', 'description' => 'Access training, marketing materials, and sales tools.', 'icon' => 'cloud', 'link' => '/partner-portal'],
                        ['title' => 'Certification Program', 'description' => 'Become a certified SupplyChainPro expert.', 'icon' => 'certificate', 'link' => '/certification'],
                        ['title' => 'Marketing Toolkit', 'description' => 'Co-branded materials and campaign templates.', 'icon' => 'template', 'link' => '/marketing-toolkit'],
                        ['title' => 'Sales Enablement', 'description' => 'Product demos, battle cards, and pitch decks.', 'icon' => 'presentation', 'link' => '/sales-enablement']
                    ],
                    'partnerEvents' => [
                        ['date' => 'May 15, 2026', 'type' => 'Webinar', 'title' => 'Supply Chain AI Masterclass', 'description' => 'Learn how to leverage AI for demand forecasting and inventory optimization.', 'link' => '/events/ai-masterclass'],
                        ['date' => 'June 10, 2026', 'type' => 'Workshop', 'title' => 'Partner Sales Bootcamp', 'description' => 'Intensive training on value selling and solution positioning.', 'link' => '/events/sales-bootcamp']
                    ],
                    'showNewsletter' => true,
                    'newsletter' => [
                        'title' => 'Partner Program Updates',
                        'description' => 'Receive the latest partner news, training schedules, and solution updates.',
                        'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 448,
                'section_key' => 'partnerProgramOverview',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Technology Partners Section 
            [
                'id' => 449,
                'section_key' => 'technologyPartners',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => 'Technology Partners',
                    'title' => [
                        'prefix' => 'Connect with',
                        'highlight' => 'Best-in-Class',
                        'suffix' => 'Technology'
                    ],
                    'description' => 'Integrate with leading technology platforms to extend the power of SupplyChainPro. Our technology partners provide the tools and services you need to build a complete supply chain ecosystem.',
                    'heroImage' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=500&fit=crop',
                    'searchPlaceholder' => 'Search partners by name, technology, or capability...',
                    'categories' => [
                        ['id' => 'all', 'label' => 'All Partners', 'icon' => 'chip'],
                        ['id' => 'cloud', 'label' => 'Cloud Infrastructure', 'icon' => 'cloud'],
                        ['id' => 'ai-ml', 'label' => 'AI & Machine Learning', 'icon' => 'chip'],
                        ['id' => 'analytics', 'label' => 'Analytics & BI', 'icon' => 'chart'],
                        ['id' => 'integration', 'label' => 'Integration Platforms', 'icon' => 'code'],
                        ['id' => 'security', 'label' => 'Security & Compliance', 'icon' => 'shield'],
                        ['id' => 'iot', 'label' => 'IoT & Sensors', 'icon' => 'wifi']
                    ],
                    'integrationTypes' => [
                        ['id' => 'all', 'label' => 'All Integration Types'],
                        ['id' => 'api', 'label' => 'REST API'],
                        ['id' => 'pre-built', 'label' => 'Pre-built Connector'],
                        ['id' => 'sdk', 'label' => 'SDK'],
                        ['id' => 'webhook', 'label' => 'Webhook']
                    ],
                    'stats' => [
                        ['value' => '50+', 'label' => 'Technology Partners', 'icon' => 'chip'],
                        ['value' => '100+', 'label' => 'Pre-built Integrations', 'icon' => 'code'],
                        ['value' => '1M+', 'label' => 'API Calls Daily', 'icon' => 'cloud'],
                        ['value' => '99.9%', 'label' => 'Uptime SLA', 'icon' => 'shield']
                    ],
                    'partners' => [
                        [
                            'id' => 'aws',
                            'name' => 'Amazon Web Services',
                            'category' => 'cloud',
                            'integrationType' => 'api',
                            'description' => 'AWS provides scalable cloud computing services that integrate seamlessly with SupplyChainPro for data storage, computing power, and advanced analytics capabilities.',
                            'integrationCapabilities' => ['S3 Storage Integration', 'Lambda Serverless Functions', 'RDS Database Sync', 'SQS Message Queue'],
                            'tags' => ['cloud computing', 'aws', 'scalable infrastructure'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
                            'image' => 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
                            'link' => '/partners/aws',
                            'docsLink' => 'https://docs.aws.amazon.com',
                            'isFeatured' => true
                        ],
                        [
                            'id' => 'databricks',
                            'name' => 'Databricks',
                            'category' => 'ai-ml',
                            'integrationType' => 'sdk',
                            'description' => 'Databricks offers a unified data analytics platform that powers AI and machine learning workflows, integrated with SupplyChainPro for predictive supply chain insights.',
                            'integrationCapabilities' => ['MLflow Model Deployment', 'Delta Lake Sync', 'Spark Job Orchestration', 'AutoML Pipeline Integration'],
                            'tags' => ['ai/ml', 'data analytics', 'lakehouse'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/6/63/Databricks_Logo.png',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
                            'link' => '/partners/databricks',
                            'docsLink' => 'https://docs.databricks.com'
                        ],
                        [
                            'id' => 'snowflake',
                            'name' => 'Snowflake',
                            'category' => 'analytics',
                            'integrationType' => 'pre-built',
                            'description' => 'Snowflake\'s data cloud platform enables secure data sharing and analytics, seamlessly connecting with SupplyChainPro for real-time supply chain insights.',
                            'integrationCapabilities' => ['Real-time Data Replication', 'Secure Data Sharing', 'Cross-cloud Analytics', 'Time Travel Queries'],
                            'tags' => ['data warehouse', 'analytics', 'data cloud'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Snowflake_Logo.svg',
                            'image' => 'https://images.unsplash.com/photo-1543286386-713bdd548da4?w=600&h=400&fit=crop',
                            'link' => '/partners/snowflake',
                            'docsLink' => 'https://docs.snowflake.com'
                        ],
                        [
                            'id' => 'mulesoft',
                            'name' => 'MuleSoft',
                            'category' => 'integration',
                            'integrationType' => 'api',
                            'description' => 'MuleSoft\'s Anypoint Platform provides robust API-led connectivity, enabling seamless integration between SupplyChainPro and enterprise systems.',
                            'integrationCapabilities' => ['API Gateway Integration', 'Data Transformation', 'Event-driven Architecture', 'Legacy System Connectors'],
                            'tags' => ['integration', 'api management', 'enterprise service bus'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/f/f9/MuleSoft_logo.svg',
                            'image' => 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
                            'link' => '/partners/mulesoft',
                            'docsLink' => 'https://docs.mulesoft.com'
                        ],
                        [
                            'id' => 'crowdstrike',
                            'name' => 'CrowdStrike',
                            'category' => 'security',
                            'integrationType' => 'webhook',
                            'description' => 'CrowdStrike\'s cybersecurity platform integrates with SupplyChainPro to protect supply chain operations from threats and ensure data integrity.',
                            'integrationCapabilities' => ['Threat Detection Alerts', 'Security Event Logging', 'Compliance Monitoring', 'Incident Response Automation'],
                            'tags' => ['cybersecurity', 'threat detection', 'compliance'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/5/59/CrowdStrike_logo.svg',
                            'image' => 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop',
                            'link' => '/partners/crowdstrike',
                            'docsLink' => 'https://docs.crowdstrike.com'
                        ],
                        [
                            'id' => 'samsara',
                            'name' => 'Samsara',
                            'category' => 'iot',
                            'integrationType' => 'pre-built',
                            'description' => 'Samsara\'s IoT platform connects physical operations data with SupplyChainPro for real-time fleet tracking, asset monitoring, and operational efficiency.',
                            'integrationCapabilities' => ['GPS Fleet Tracking', 'Asset Condition Monitoring', 'Driver Safety Analytics', 'Route Optimization'],
                            'tags' => ['iot', 'fleet management', 'telematics'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Samsara_logo.svg',
                            'image' => 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&h=400&fit=crop',
                            'link' => '/partners/samsara',
                            'docsLink' => 'https://docs.samsara.com'
                        ]
                    ],
                    'ctaTitle' => 'Become a Technology Partner',
                    'ctaDescription' => 'Join our ecosystem of leading technology partners. Integrate your solutions with SupplyChainPro and reach a global audience.',
                    'ctaImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop',
                    'applyLink' => '/become-technology-partner',
                    'programLink' => '/partner-program',
                    'showNewsletter' => true,
                    'newsletter' => [
                        'title' => 'Technology Partner Updates',
                        'description' => 'Subscribe to receive updates on new technology partners, integrations, and developer resources.',
                        'disclaimer' => 'No spam, unsubscribe anytime. Get 1-2 emails per month.',
                        'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 450,
                'section_key' => 'technologyPartners',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => 'Technology Partners',
                    'title' => [
                        'prefix' => 'Connect with',
                        'highlight' => 'Leading Technology',
                        'suffix' => 'Partners'
                    ],
                    'description' => 'Discover and integrate with best-in-class technology partners to build a complete supply chain ecosystem.',
                    'heroImage' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=500&fit=crop',
                    'searchPlaceholder' => 'Search partners by name, technology, or capability...',
                    'defaultViewMode' => 'grid',
                    'categories' => [
                        ['id' => 'all', 'label' => 'All Partners', 'icon' => 'chip'],
                        ['id' => 'cloud', 'label' => 'Cloud Infrastructure', 'icon' => 'cloud'],
                        ['id' => 'ai-ml', 'label' => 'AI & ML', 'icon' => 'chip'],
                        ['id' => 'analytics', 'label' => 'Analytics & BI', 'icon' => 'chart'],
                        ['id' => 'integration', 'label' => 'Integration Platforms', 'icon' => 'code'],
                        ['id' => 'security', 'label' => 'Security & Compliance', 'icon' => 'shield'],
                        ['id' => 'iot', 'label' => 'IoT & Sensors', 'icon' => 'wifi']
                    ],
                    'integrationTypes' => [
                        ['id' => 'all', 'label' => 'All Types', 'icon' => 'code'],
                        ['id' => 'api', 'label' => 'REST API', 'icon' => 'code'],
                        ['id' => 'pre-built', 'label' => 'Pre-built Connector', 'icon' => 'link'],
                        ['id' => 'sdk', 'label' => 'SDK', 'icon' => 'template'],
                        ['id' => 'webhook', 'label' => 'Webhook', 'icon' => 'refresh']
                    ],
                    'partnerTiers' => [
                        ['id' => 'all', 'label' => 'All Tiers', 'icon' => 'trophy'],
                        ['id' => 'premier', 'label' => 'Premier', 'icon' => 'star'],
                        ['id' => 'advanced', 'label' => 'Advanced', 'icon' => 'badge'],
                        ['id' => 'certified', 'label' => 'Certified', 'icon' => 'check']
                    ],
                    'stats' => [
                        ['value' => '50+', 'label' => 'Technology Partners', 'icon' => 'chip', 'trend' => '+12', 'trendUp' => true],
                        ['value' => '100+', 'label' => 'Pre-built Integrations', 'icon' => 'code', 'trend' => '+25', 'trendUp' => true],
                        ['value' => '1M+', 'label' => 'API Calls Daily', 'icon' => 'cloud', 'trend' => '+30%', 'trendUp' => true],
                        ['value' => '99.9%', 'label' => 'Uptime SLA', 'icon' => 'shield', 'trend' => '99.9%', 'trendUp' => true]
                    ],
                    'featuredPartners' => [
                        [
                            'id' => 'aws',
                            'name' => 'Amazon Web Services',
                            'category' => 'cloud',
                            'tier' => 'premier',
                            'description' => 'Scalable cloud computing platform with extensive supply chain solutions.',
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
                            'link' => '/partners/aws',
                            'image' => 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'databricks',
                            'name' => 'Databricks',
                            'category' => 'ai-ml',
                            'tier' => 'premier',
                            'description' => 'Unified data analytics platform for AI and machine learning workflows.',
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/6/63/Databricks_Logo.png',
                            'link' => '/partners/databricks',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'snowflake',
                            'name' => 'Snowflake',
                            'category' => 'analytics',
                            'tier' => 'advanced',
                            'description' => 'Data cloud platform for secure data sharing and analytics.',
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Snowflake_Logo.svg',
                            'link' => '/partners/snowflake',
                            'image' => 'https://images.unsplash.com/photo-1543286386-713bdd548da4?w=600&h=400&fit=crop'
                        ]
                    ],
                    'partners' => [
                        [
                            'id' => 'aws',
                            'name' => 'Amazon Web Services',
                            'category' => 'cloud',
                            'integrationType' => 'api',
                            'tier' => 'premier',
                            'description' => 'AWS provides scalable cloud computing services that integrate seamlessly with SupplyChainPro.',
                            'integrationCapabilities' => ['S3 Integration', 'Lambda Functions', 'RDS Sync', 'SQS Queue'],
                            'tags' => ['cloud', 'aws', 'scalable'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
                            'link' => '/partners/aws',
                            'docsLink' => 'https://docs.aws.amazon.com',
                            'isFeatured' => true,
                            'image' => 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'databricks',
                            'name' => 'Databricks',
                            'category' => 'ai-ml',
                            'integrationType' => 'sdk',
                            'tier' => 'premier',
                            'description' => 'Databricks offers a unified data analytics platform for AI and ML workflows.',
                            'integrationCapabilities' => ['MLflow', 'Delta Lake', 'Spark Jobs', 'AutoML'],
                            'tags' => ['ai/ml', 'analytics', 'lakehouse'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/6/63/Databricks_Logo.png',
                            'link' => '/partners/databricks',
                            'docsLink' => 'https://docs.databricks.com',
                            'isFeatured' => true,
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'snowflake',
                            'name' => 'Snowflake',
                            'category' => 'analytics',
                            'integrationType' => 'pre-built',
                            'tier' => 'advanced',
                            'description' => 'Snowflake\'s data cloud platform for secure data sharing and analytics.',
                            'integrationCapabilities' => ['Real-time Replication', 'Data Sharing', 'Cross-cloud', 'Time Travel'],
                            'tags' => ['data warehouse', 'analytics', 'cloud'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Snowflake_Logo.svg',
                            'link' => '/partners/snowflake',
                            'docsLink' => 'https://docs.snowflake.com',
                            'image' => 'https://images.unsplash.com/photo-1543286386-713bdd548da4?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'mulesoft',
                            'name' => 'MuleSoft',
                            'category' => 'integration',
                            'integrationType' => 'api',
                            'tier' => 'advanced',
                            'description' => 'MuleSoft\'s Anypoint Platform for API-led connectivity.',
                            'integrationCapabilities' => ['API Gateway', 'Data Transformation', 'Event-driven', 'Legacy Connectors'],
                            'tags' => ['integration', 'api', 'esb'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/f/f9/MuleSoft_logo.svg',
                            'link' => '/partners/mulesoft',
                            'docsLink' => 'https://docs.mulesoft.com',
                            'image' => 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'crowdstrike',
                            'name' => 'CrowdStrike',
                            'category' => 'security',
                            'integrationType' => 'webhook',
                            'tier' => 'certified',
                            'description' => 'CrowdStrike cybersecurity platform for threat detection.',
                            'integrationCapabilities' => ['Threat Alerts', 'Event Logging', 'Compliance', 'Incident Response'],
                            'tags' => ['security', 'threat detection', 'compliance'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/5/59/CrowdStrike_logo.svg',
                            'link' => '/partners/crowdstrike',
                            'docsLink' => 'https://docs.crowdstrike.com',
                            'image' => 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'samsara',
                            'name' => 'Samsara',
                            'category' => 'iot',
                            'integrationType' => 'pre-built',
                            'tier' => 'certified',
                            'description' => 'Samsara IoT platform for fleet tracking and asset monitoring.',
                            'integrationCapabilities' => ['GPS Tracking', 'Asset Monitoring', 'Safety Analytics', 'Route Optimization'],
                            'tags' => ['iot', 'fleet', 'telematics'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Samsara_logo.svg',
                            'link' => '/partners/samsara',
                            'docsLink' => 'https://docs.samsara.com',
                            'image' => 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&h=400&fit=crop'
                        ]
                    ],
                    'showNewsletter' => true,
                    'newsletter' => [
                        'title' => 'Technology Partner Updates',
                        'description' => 'Subscribe to receive updates on new technology partners, integrations, and developer resources.',
                        'disclaimer' => 'No spam, unsubscribe anytime. Get 1-2 emails per month.',
                        'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 451,
                'section_key' => 'technologyPartners',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => 'Technology Partners',
                    'title' => [
                        'prefix' => 'Connect with',
                        'highlight' => 'Best-in-Class',
                        'suffix' => 'Technology'
                    ],
                    'description' => 'Discover and integrate with leading technology partners to build a complete supply chain ecosystem. Access pre-built connectors, APIs, and SDKs.',
                    'heroImage' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=500&fit=crop',
                    'autoPlayCarousel' => true,
                    'tabs' => [
                        ['id' => 'all', 'label' => 'All Partners', 'icon' => 'chip'],
                        ['id' => 'featured', 'label' => 'Featured', 'icon' => 'star'],
                        ['id' => 'favorites', 'label' => 'Favorites', 'icon' => 'heart']
                    ],
                    'categories' => [
                        ['id' => 'all', 'label' => 'All Partners', 'icon' => 'chip'],
                        ['id' => 'cloud', 'label' => 'Cloud Infrastructure', 'icon' => 'cloud'],
                        ['id' => 'ai-ml', 'label' => 'AI & Machine Learning', 'icon' => 'chip'],
                        ['id' => 'analytics', 'label' => 'Analytics & BI', 'icon' => 'chart'],
                        ['id' => 'integration', 'label' => 'Integration Platforms', 'icon' => 'code'],
                        ['id' => 'security', 'label' => 'Security & Compliance', 'icon' => 'shield'],
                        ['id' => 'iot', 'label' => 'IoT & Sensors', 'icon' => 'wifi']
                    ],
                    'integrationTypes' => [
                        ['id' => 'all', 'label' => 'All Types', 'icon' => 'code'],
                        ['id' => 'api', 'label' => 'REST API', 'icon' => 'code'],
                        ['id' => 'pre-built', 'label' => 'Pre-built Connector', 'icon' => 'link'],
                        ['id' => 'sdk', 'label' => 'SDK', 'icon' => 'template'],
                        ['id' => 'webhook', 'label' => 'Webhook', 'icon' => 'refresh']
                    ],
                    'stats' => [
                        ['value' => '50+', 'label' => 'Technology Partners', 'icon' => 'chip'],
                        ['value' => '100+', 'label' => 'Pre-built Integrations', 'icon' => 'code'],
                        ['value' => '1M+', 'label' => 'API Calls Daily', 'icon' => 'cloud'],
                        ['value' => '99.9%', 'label' => 'Uptime SLA', 'icon' => 'shield']
                    ],
                    'featuredPartners' => [
                        [
                            'id' => 'aws',
                            'name' => 'Amazon Web Services',
                            'category' => 'cloud',
                            'integrationType' => 'api',
                            'tier' => 'premier',
                            'certified' => true,
                            'description' => 'AWS provides scalable cloud computing services that integrate seamlessly with SupplyChainPro.',
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
                            'image' => 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop',
                            'link' => '/partners/aws',
                            'docsLink' => 'https://docs.aws.amazon.com',
                            'demoUrl' => 'https://example.com/demo/aws',
                            'isFeatured' => true
                        ],
                        [
                            'id' => 'databricks',
                            'name' => 'Databricks',
                            'category' => 'ai-ml',
                            'integrationType' => 'sdk',
                            'tier' => 'premier',
                            'certified' => true,
                            'description' => 'Databricks offers a unified data analytics platform for AI and ML workflows.',
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/6/63/Databricks_Logo.png',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
                            'link' => '/partners/databricks',
                            'docsLink' => 'https://docs.databricks.com',
                            'demoUrl' => 'https://example.com/demo/databricks',
                            'isFeatured' => true
                        ],
                        [
                            'id' => 'snowflake',
                            'name' => 'Snowflake',
                            'category' => 'analytics',
                            'integrationType' => 'pre-built',
                            'tier' => 'advanced',
                            'certified' => true,
                            'description' => 'Snowflake\'s data cloud platform for secure data sharing and analytics.',
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Snowflake_Logo.svg',
                            'image' => 'https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&h=500&fit=crop',
                            'link' => '/partners/snowflake',
                            'docsLink' => 'https://docs.snowflake.com',
                            'demoUrl' => 'https://example.com/demo/snowflake',
                            'isFeatured' => true
                        ]
                    ],
                    'partners' => [
                        [
                            'id' => 'aws',
                            'name' => 'Amazon Web Services',
                            'category' => 'cloud',
                            'integrationType' => 'api',
                            'tier' => 'premier',
                            'certified' => true,
                            'description' => 'AWS provides scalable cloud computing services that integrate seamlessly with SupplyChainPro.',
                            'integrationCapabilities' => ['S3 Integration', 'Lambda Functions', 'RDS Sync', 'SQS Queue'],
                            'tags' => ['cloud', 'aws', 'scalable'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
                            'image' => 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
                            'link' => '/partners/aws',
                            'docsLink' => 'https://docs.aws.amazon.com',
                            'demoUrl' => 'https://example.com/demo/aws',
                            'isFeatured' => true
                        ],
                        [
                            'id' => 'databricks',
                            'name' => 'Databricks',
                            'category' => 'ai-ml',
                            'integrationType' => 'sdk',
                            'tier' => 'premier',
                            'certified' => true,
                            'description' => 'Databricks offers a unified data analytics platform for AI and ML workflows.',
                            'integrationCapabilities' => ['MLflow', 'Delta Lake', 'Spark Jobs', 'AutoML'],
                            'tags' => ['ai/ml', 'analytics', 'lakehouse'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/6/63/Databricks_Logo.png',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
                            'link' => '/partners/databricks',
                            'docsLink' => 'https://docs.databricks.com',
                            'demoUrl' => 'https://example.com/demo/databricks',
                            'isFeatured' => true
                        ],
                        [
                            'id' => 'snowflake',
                            'name' => 'Snowflake',
                            'category' => 'analytics',
                            'integrationType' => 'pre-built',
                            'tier' => 'advanced',
                            'certified' => true,
                            'description' => 'Snowflake\'s data cloud platform for secure data sharing and analytics.',
                            'integrationCapabilities' => ['Real-time Replication', 'Data Sharing', 'Cross-cloud', 'Time Travel'],
                            'tags' => ['data warehouse', 'analytics', 'cloud'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Snowflake_Logo.svg',
                            'image' => 'https://images.unsplash.com/photo-1543286386-713bdd548da4?w=600&h=400&fit=crop',
                            'link' => '/partners/snowflake',
                            'docsLink' => 'https://docs.snowflake.com',
                            'demoUrl' => 'https://example.com/demo/snowflake'
                        ],
                        [
                            'id' => 'mulesoft',
                            'name' => 'MuleSoft',
                            'category' => 'integration',
                            'integrationType' => 'api',
                            'tier' => 'advanced',
                            'certified' => true,
                            'description' => 'MuleSoft\'s Anypoint Platform for API-led connectivity.',
                            'integrationCapabilities' => ['API Gateway', 'Data Transformation', 'Event-driven', 'Legacy Connectors'],
                            'tags' => ['integration', 'api', 'esb'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/f/f9/MuleSoft_logo.svg',
                            'image' => 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
                            'link' => '/partners/mulesoft',
                            'docsLink' => 'https://docs.mulesoft.com',
                            'demoUrl' => 'https://example.com/demo/mulesoft'
                        ],
                        [
                            'id' => 'crowdstrike',
                            'name' => 'CrowdStrike',
                            'category' => 'security',
                            'integrationType' => 'webhook',
                            'tier' => 'certified',
                            'certified' => true,
                            'description' => 'CrowdStrike cybersecurity platform for threat detection.',
                            'integrationCapabilities' => ['Threat Alerts', 'Event Logging', 'Compliance', 'Incident Response'],
                            'tags' => ['security', 'threat detection', 'compliance'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/5/59/CrowdStrike_logo.svg',
                            'image' => 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop',
                            'link' => '/partners/crowdstrike',
                            'docsLink' => 'https://docs.crowdstrike.com',
                            'demoUrl' => 'https://example.com/demo/crowdstrike'
                        ],
                        [
                            'id' => 'samsara',
                            'name' => 'Samsara',
                            'category' => 'iot',
                            'integrationType' => 'pre-built',
                            'tier' => 'certified',
                            'certified' => true,
                            'description' => 'Samsara IoT platform for fleet tracking and asset monitoring.',
                            'integrationCapabilities' => ['GPS Tracking', 'Asset Monitoring', 'Safety Analytics', 'Route Optimization'],
                            'tags' => ['iot', 'fleet', 'telematics'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Samsara_logo.svg',
                            'image' => 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&h=400&fit=crop',
                            'link' => '/partners/samsara',
                            'docsLink' => 'https://docs.samsara.com',
                            'demoUrl' => 'https://example.com/demo/samsara'
                        ]
                    ],
                    'integrationGuides' => [
                        ['title' => 'REST API Integration Guide', 'description' => 'Connect your applications using our RESTful APIs', 'icon' => 'code', 'link' => '/docs/integration/rest-api'],
                        ['title' => 'Pre-built Connectors Library', 'description' => 'Explore our library of ready-to-use connectors', 'icon' => 'link', 'link' => '/docs/integration/connectors'],
                        ['title' => 'SDK Documentation', 'description' => 'Build custom integrations with our SDKs', 'icon' => 'template', 'link' => '/docs/integration/sdk']
                    ],
                    'showNewsletter' => true,
                    'newsletter' => [
                        'title' => 'Technology Partner Updates',
                        'description' => 'Subscribe to receive updates on new technology partners, integrations, and developer resources.',
                        'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 452,
                'section_key' => 'technologyPartners',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],


            // Solution Partners Section 
            [
                'id' => 453,
                'section_key' => 'solutionPartners',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => 'Solution Partners',
                    'title' => [
                        'prefix' => 'Expert',
                        'highlight' => 'Solution Partners',
                        'suffix' => ''
                    ],
                    'description' => 'Partner with industry-leading solution providers who deliver end-to-end supply chain transformations. Our solution partners bring deep expertise and proven methodologies.',
                    'heroImage' => 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200&h=500&fit=crop',
                    'searchPlaceholder' => 'Search partners by name, industry, or solution area...',
                    'industries' => [
                        ['id' => 'all', 'label' => 'All Industries', 'icon' => 'globe'],
                        ['id' => 'retail', 'label' => 'Retail', 'icon' => 'building'],
                        ['id' => 'manufacturing', 'label' => 'Manufacturing', 'icon' => 'cog'],
                        ['id' => 'healthcare', 'label' => 'Healthcare', 'icon' => 'shield'],
                        ['id' => 'logistics', 'label' => 'Logistics', 'icon' => 'globe'],
                        ['id' => 'automotive', 'label' => 'Automotive', 'icon' => 'bolt'],
                        ['id' => 'consumer-goods', 'label' => 'Consumer Goods', 'icon' => 'gift']
                    ],
                    'solutionAreas' => [
                        ['id' => 'all', 'label' => 'All Solutions'],
                        ['id' => 'inventory', 'label' => 'Inventory Optimization'],
                        ['id' => 'warehouse', 'label' => 'Warehouse Management'],
                        ['id' => 'transportation', 'label' => 'Transportation Management'],
                        ['id' => 'analytics', 'label' => 'Supply Chain Analytics'],
                        ['id' => 'procurement', 'label' => 'Procurement Solutions'],
                        ['id' => 'planning', 'label' => 'Supply Chain Planning']
                    ],
                    'regions' => [
                        ['id' => 'all', 'label' => 'All Regions'],
                        ['id' => 'north-america', 'label' => 'North America'],
                        ['id' => 'europe', 'label' => 'Europe'],
                        ['id' => 'asia-pacific', 'label' => 'Asia Pacific'],
                        ['id' => 'latin-america', 'label' => 'Latin America'],
                        ['id' => 'middle-east', 'label' => 'Middle East']
                    ],
                    'stats' => [
                        ['value' => '100+', 'label' => 'Solution Partners', 'icon' => 'briefcase'],
                        ['value' => '50+', 'label' => 'Industries Served', 'icon' => 'globe'],
                        ['value' => '500+', 'label' => 'Successful Deployments', 'icon' => 'trophy'],
                        ['value' => '95%', 'label' => 'Customer Satisfaction', 'icon' => 'star']
                    ],
                    'partners' => [
                        [
                            'id' => 'deloitte',
                            'name' => 'Deloitte Consulting',
                            'industry' => 'manufacturing',
                            'solutionAreas' => ['inventory', 'analytics', 'procurement'],
                            'region' => 'north-america',
                            'location' => 'New York, NY',
                            'description' => 'Deloitte provides end-to-end supply chain consulting services, helping organizations optimize operations, reduce costs, and drive innovation through digital transformation.',
                            'successMetrics' => [
                                ['value' => '30%', 'label' => 'Cost Reduction'],
                                ['value' => '25%', 'label' => 'Efficiency Gain'],
                                ['value' => '99%', 'label' => 'On-Time Delivery']
                            ],
                            'tags' => ['consulting', 'digital transformation', 'supply chain strategy'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Deloitte.svg',
                            'image' => 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
                            'link' => '/partners/deloitte',
                            'contactEmail' => 'supplychain@deloitte.com',
                            'isFeatured' => true
                        ],
                        [
                            'id' => 'accenture',
                            'name' => 'Accenture',
                            'industry' => 'retail',
                            'solutionAreas' => ['warehouse', 'transportation', 'planning'],
                            'region' => 'europe',
                            'location' => 'London, UK',
                            'description' => 'Accenture delivers innovative supply chain solutions that combine strategy, technology, and operations to help clients become more resilient and efficient.',
                            'successMetrics' => [
                                ['value' => '40%', 'label' => 'Inventory Reduction'],
                                ['value' => '50%', 'label' => 'Faster Fulfillment'],
                                ['value' => '98%', 'label' => 'Order Accuracy']
                            ],
                            'tags' => ['strategy', 'technology', 'operations'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/9/93/Accenture.svg',
                            'image' => 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
                            'link' => '/partners/accenture',
                            'contactEmail' => 'supplychain@accenture.com'
                        ],
                        [
                            'id' => 'pwc',
                            'name' => 'PwC',
                            'industry' => 'healthcare',
                            'solutionAreas' => ['analytics', 'procurement', 'inventory'],
                            'region' => 'north-america',
                            'location' => 'Chicago, IL',
                            'description' => 'PwC helps healthcare organizations transform their supply chains with data-driven insights, risk management, and operational excellence.',
                            'successMetrics' => [
                                ['value' => '35%', 'label' => 'Cost Savings'],
                                ['value' => '45%', 'label' => 'Process Efficiency'],
                                ['value' => '100%', 'label' => 'Compliance Rate']
                            ],
                            'tags' => ['healthcare', 'risk management', 'compliance'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/8/8a/PwC.svg',
                            'image' => 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop',
                            'link' => '/partners/pwc',
                            'contactEmail' => 'supplychain@pwc.com'
                        ],
                        [
                            'id' => 'kpmg',
                            'name' => 'KPMG',
                            'industry' => 'logistics',
                            'solutionAreas' => ['transportation', 'analytics', 'warehouse'],
                            'region' => 'asia-pacific',
                            'location' => 'Singapore',
                            'description' => 'KPMG provides integrated supply chain solutions that help logistics companies optimize networks, reduce costs, and improve customer service.',
                            'successMetrics' => [
                                ['value' => '28%', 'label' => 'Transport Savings'],
                                ['value' => '32%', 'label' => 'Warehouse Throughput'],
                                ['value' => '96%', 'label' => 'On-Time Performance']
                            ],
                            'tags' => ['logistics', 'network optimization', 'customer service'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/1/1d/KPMG.svg',
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
                            'link' => '/partners/kpmg',
                            'contactEmail' => 'supplychain@kpmg.com'
                        ],
                        [
                            'id' => 'ey',
                            'name' => 'EY',
                            'industry' => 'automotive',
                            'solutionAreas' => ['planning', 'inventory', 'procurement'],
                            'region' => 'europe',
                            'location' => 'Stuttgart, Germany',
                            'description' => 'EY helps automotive manufacturers build resilient supply chains through digitalization, sustainability initiatives, and advanced analytics.',
                            'successMetrics' => [
                                ['value' => '22%', 'label' => 'Working Capital'],
                                ['value' => '38%', 'label' => 'Forecast Accuracy'],
                                ['value' => '15%', 'label' => 'Carbon Reduction']
                            ],
                            'tags' => ['automotive', 'sustainability', 'digitalization'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Ernst_%26_Young_Logo.svg',
                            'image' => 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600&h=400&fit=crop',
                            'link' => '/partners/ey',
                            'contactEmail' => 'supplychain@ey.com'
                        ],
                        [
                            'id' => 'ibm',
                            'name' => 'IBM Consulting',
                            'industry' => 'consumer-goods',
                            'solutionAreas' => ['analytics', 'planning', 'warehouse'],
                            'region' => 'north-america',
                            'location' => 'Austin, TX',
                            'description' => 'IBM Consulting delivers AI-powered supply chain solutions that help consumer goods companies anticipate demand, optimize inventory, and enhance customer experiences.',
                            'successMetrics' => [
                                ['value' => '50%', 'label' => 'Forecast Improvement'],
                                ['value' => '20%', 'label' => 'Stockout Reduction'],
                                ['value' => '95%', 'label' => 'Customer Satisfaction']
                            ],
                            'tags' => ['ai', 'demand forecasting', 'consumer goods'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
                            'image' => 'https://images.unsplash.com/photo-1488229297570-58520851e868?w=600&h=400&fit=crop',
                            'link' => '/partners/ibm',
                            'contactEmail' => 'supplychain@ibm.com'
                        ]
                    ],
                    'ctaTitle' => 'Become a Solution Partner',
                    'ctaDescription' => 'Join our network of solution partners delivering transformative supply chain solutions. Leverage our platform to drive customer success.',
                    'ctaImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop',
                    'applyLink' => '/become-solution-partner',
                    'programLink' => '/partner-program',
                    'showNewsletter' => true,
                    'newsletter' => [
                        'title' => 'Solution Partner Updates',
                        'description' => 'Subscribe to receive updates on new solution partners, success stories, and industry insights.',
                        'disclaimer' => 'No spam, unsubscribe anytime. Get 1-2 emails per month.',
                        'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 454,
                'section_key' => 'solutionPartners',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => 'Solution Partners',
                    'title' => [
                        'prefix' => 'Expert',
                        'highlight' => 'Solution Partners'
                    ],
                    'description' => 'Partner with industry-leading solution providers who deliver end-to-end supply chain transformations. Our solution partners bring deep expertise and proven methodologies.',
                    'heroImage' => 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200&h=500&fit=crop',
                    'searchPlaceholder' => 'Search partners by name, industry, or solution area...',
                    'defaultViewMode' => 'grid',
                    'industries' => [
                        ['id' => 'all', 'label' => 'All Industries', 'icon' => 'globe'],
                        ['id' => 'retail', 'label' => 'Retail', 'icon' => 'building'],
                        ['id' => 'manufacturing', 'label' => 'Manufacturing', 'icon' => 'cog'],
                        ['id' => 'healthcare', 'label' => 'Healthcare', 'icon' => 'shield'],
                        ['id' => 'logistics', 'label' => 'Logistics', 'icon' => 'globe'],
                        ['id' => 'automotive', 'label' => 'Automotive', 'icon' => 'bolt'],
                        ['id' => 'consumer-goods', 'label' => 'Consumer Goods', 'icon' => 'gift']
                    ],
                    'solutionAreas' => [
                        ['id' => 'all', 'label' => 'All Solutions', 'icon' => 'cog'],
                        ['id' => 'inventory', 'label' => 'Inventory Optimization', 'icon' => 'database'],
                        ['id' => 'warehouse', 'label' => 'Warehouse Management', 'icon' => 'building'],
                        ['id' => 'transportation', 'label' => 'Transportation Management', 'icon' => 'globe'],
                        ['id' => 'analytics', 'label' => 'Supply Chain Analytics', 'icon' => 'chart'],
                        ['id' => 'procurement', 'label' => 'Procurement Solutions', 'icon' => 'credit'],
                        ['id' => 'planning', 'label' => 'Supply Chain Planning', 'icon' => 'calendar']
                    ],
                    'partnerTiers' => [
                        ['id' => 'all', 'label' => 'All Tiers', 'icon' => 'trophy'],
                        ['id' => 'premier', 'label' => 'Premier', 'icon' => 'star'],
                        ['id' => 'advanced', 'label' => 'Advanced', 'icon' => 'badge'],
                        ['id' => 'certified', 'label' => 'Certified', 'icon' => 'check']
                    ],
                    'stats' => [
                        ['value' => '100+', 'label' => 'Solution Partners', 'icon' => 'briefcase', 'trend' => '+15', 'trendUp' => true],
                        ['value' => '50+', 'label' => 'Industries Served', 'icon' => 'globe', 'trend' => '+8', 'trendUp' => true],
                        ['value' => '500+', 'label' => 'Successful Deployments', 'icon' => 'trophy', 'trend' => '+120', 'trendUp' => true],
                        ['value' => '95%', 'label' => 'Customer Satisfaction', 'icon' => 'star', 'trend' => '+2%', 'trendUp' => true]
                    ],
                    'featuredPartners' => [
                        [
                            'id' => 'deloitte',
                            'name' => 'Deloitte Consulting',
                            'industry' => 'manufacturing',
                            'tier' => 'premier',
                            'description' => 'End-to-end supply chain consulting and digital transformation services.',
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Deloitte.svg',
                            'link' => '/partners/deloitte',
                            'image' => 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
                            'isFeatured' => true
                        ],
                        [
                            'id' => 'accenture',
                            'name' => 'Accenture',
                            'industry' => 'retail',
                            'tier' => 'premier',
                            'description' => 'Innovative supply chain solutions combining strategy, technology, and operations.',
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/9/93/Accenture.svg',
                            'link' => '/partners/accenture',
                            'image' => 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
                            'isFeatured' => true
                        ],
                        [
                            'id' => 'pwc',
                            'name' => 'PwC',
                            'industry' => 'healthcare',
                            'tier' => 'advanced',
                            'description' => 'Data-driven supply chain transformation for healthcare organizations.',
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/8/8a/PwC.svg',
                            'link' => '/partners/pwc',
                            'image' => 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop',
                            'isFeatured' => true
                        ]
                    ],
                    'partners' => [
                        [
                            'id' => 'deloitte',
                            'name' => 'Deloitte Consulting',
                            'industry' => 'manufacturing',
                            'solutionAreas' => ['inventory', 'analytics', 'procurement'],
                            'region' => 'north-america',
                            'location' => 'New York, NY',
                            'tier' => 'premier',
                            'isCertified' => true,
                            'description' => 'Deloitte provides end-to-end supply chain consulting services, helping organizations optimize operations, reduce costs, and drive innovation through digital transformation.',
                            'successMetrics' => [
                                ['value' => '30%', 'label' => 'Cost Reduction'],
                                ['value' => '25%', 'label' => 'Efficiency Gain'],
                                ['value' => '99%', 'label' => 'On-Time Delivery']
                            ],
                            'tags' => ['consulting', 'digital transformation', 'supply chain strategy'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Deloitte.svg',
                            'link' => '/partners/deloitte',
                            'image' => 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
                            'isFeatured' => true
                        ],
                        [
                            'id' => 'accenture',
                            'name' => 'Accenture',
                            'industry' => 'retail',
                            'solutionAreas' => ['warehouse', 'transportation', 'planning'],
                            'region' => 'europe',
                            'location' => 'London, UK',
                            'tier' => 'premier',
                            'isCertified' => true,
                            'description' => 'Accenture delivers innovative supply chain solutions that combine strategy, technology, and operations to help clients become more resilient and efficient.',
                            'successMetrics' => [
                                ['value' => '40%', 'label' => 'Inventory Reduction'],
                                ['value' => '50%', 'label' => 'Faster Fulfillment'],
                                ['value' => '98%', 'label' => 'Order Accuracy']
                            ],
                            'tags' => ['strategy', 'technology', 'operations'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/9/93/Accenture.svg',
                            'link' => '/partners/accenture',
                            'image' => 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
                            'isFeatured' => true
                        ],
                        [
                            'id' => 'pwc',
                            'name' => 'PwC',
                            'industry' => 'healthcare',
                            'solutionAreas' => ['analytics', 'procurement', 'inventory'],
                            'region' => 'north-america',
                            'location' => 'Chicago, IL',
                            'tier' => 'advanced',
                            'isCertified' => true,
                            'description' => 'PwC helps healthcare organizations transform their supply chains with data-driven insights, risk management, and operational excellence.',
                            'successMetrics' => [
                                ['value' => '35%', 'label' => 'Cost Savings'],
                                ['value' => '45%', 'label' => 'Process Efficiency'],
                                ['value' => '100%', 'label' => 'Compliance Rate']
                            ],
                            'tags' => ['healthcare', 'risk management', 'compliance'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/8/8a/PwC.svg',
                            'link' => '/partners/pwc',
                            'image' => 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop',
                            'isFeatured' => true
                        ],
                        [
                            'id' => 'kpmg',
                            'name' => 'KPMG',
                            'industry' => 'logistics',
                            'solutionAreas' => ['transportation', 'analytics', 'warehouse'],
                            'region' => 'asia-pacific',
                            'location' => 'Singapore',
                            'tier' => 'advanced',
                            'isCertified' => true,
                            'description' => 'KPMG provides integrated supply chain solutions that help logistics companies optimize networks, reduce costs, and improve customer service.',
                            'successMetrics' => [
                                ['value' => '28%', 'label' => 'Transport Savings'],
                                ['value' => '32%', 'label' => 'Warehouse Throughput'],
                                ['value' => '96%', 'label' => 'On-Time Performance']
                            ],
                            'tags' => ['logistics', 'network optimization', 'customer service'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/1/1d/KPMG.svg',
                            'link' => '/partners/kpmg',
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'ey',
                            'name' => 'EY',
                            'industry' => 'automotive',
                            'solutionAreas' => ['planning', 'inventory', 'procurement'],
                            'region' => 'europe',
                            'location' => 'Stuttgart, Germany',
                            'tier' => 'certified',
                            'isCertified' => true,
                            'description' => 'EY helps automotive manufacturers build resilient supply chains through digitalization, sustainability initiatives, and advanced analytics.',
                            'successMetrics' => [
                                ['value' => '22%', 'label' => 'Working Capital'],
                                ['value' => '38%', 'label' => 'Forecast Accuracy'],
                                ['value' => '15%', 'label' => 'Carbon Reduction']
                            ],
                            'tags' => ['automotive', 'sustainability', 'digitalization'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Ernst_%26_Young_Logo.svg',
                            'link' => '/partners/ey',
                            'image' => 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'ibm',
                            'name' => 'IBM Consulting',
                            'industry' => 'consumer-goods',
                            'solutionAreas' => ['analytics', 'planning', 'warehouse'],
                            'region' => 'north-america',
                            'location' => 'Austin, TX',
                            'tier' => 'certified',
                            'isCertified' => true,
                            'description' => 'IBM Consulting delivers AI-powered supply chain solutions that help consumer goods companies anticipate demand, optimize inventory, and enhance customer experiences.',
                            'successMetrics' => [
                                ['value' => '50%', 'label' => 'Forecast Improvement'],
                                ['value' => '20%', 'label' => 'Stockout Reduction'],
                                ['value' => '95%', 'label' => 'Customer Satisfaction']
                            ],
                            'tags' => ['ai', 'demand forecasting', 'consumer goods'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
                            'link' => '/partners/ibm',
                            'image' => 'https://images.unsplash.com/photo-1488229297570-58520851e868?w=600&h=400&fit=crop'
                        ]
                    ],
                    'showNewsletter' => true,
                    'newsletter' => [
                        'title' => 'Solution Partner Updates',
                        'description' => 'Subscribe to receive updates on new solution partners, success stories, and industry insights.',
                        'disclaimer' => 'No spam, unsubscribe anytime. Get 1-2 emails per month.',
                        'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 455,
                'section_key' => 'solutionPartners',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => 'Solution Partners',
                    'title' => [
                        'prefix' => 'Expert',
                        'highlight' => 'Solution Partners'
                    ],
                    'description' => 'Partner with industry-leading solution providers who deliver end-to-end supply chain transformations. Our solution partners bring deep expertise and proven methodologies.',
                    'heroImage' => 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200&h=500&fit=crop',
                    'autoPlayCarousel' => true,
                    'tabs' => [
                        ['id' => 'all', 'label' => 'All Partners', 'icon' => 'briefcase'],
                        ['id' => 'featured', 'label' => 'Featured', 'icon' => 'star'],
                        ['id' => 'favorites', 'label' => 'Favorites', 'icon' => 'heart']
                    ],
                    'industries' => [
                        ['id' => 'all', 'label' => 'All Industries', 'icon' => 'globe'],
                        ['id' => 'retail', 'label' => 'Retail', 'icon' => 'building'],
                        ['id' => 'manufacturing', 'label' => 'Manufacturing', 'icon' => 'cog'],
                        ['id' => 'healthcare', 'label' => 'Healthcare', 'icon' => 'shield'],
                        ['id' => 'logistics', 'label' => 'Logistics', 'icon' => 'globe'],
                        ['id' => 'automotive', 'label' => 'Automotive', 'icon' => 'bolt'],
                        ['id' => 'consumer-goods', 'label' => 'Consumer Goods', 'icon' => 'gift']
                    ],
                    'solutionAreas' => [
                        ['id' => 'all', 'label' => 'All Solutions', 'icon' => 'cog'],
                        ['id' => 'inventory', 'label' => 'Inventory Optimization', 'icon' => 'database'],
                        ['id' => 'warehouse', 'label' => 'Warehouse Management', 'icon' => 'building'],
                        ['id' => 'transportation', 'label' => 'Transportation Management', 'icon' => 'globe'],
                        ['id' => 'analytics', 'label' => 'Supply Chain Analytics', 'icon' => 'chart'],
                        ['id' => 'procurement', 'label' => 'Procurement Solutions', 'icon' => 'credit'],
                        ['id' => 'planning', 'label' => 'Supply Chain Planning', 'icon' => 'calendar']
                    ],
                    'stats' => [
                        ['value' => '100+', 'label' => 'Solution Partners', 'icon' => 'briefcase'],
                        ['value' => '50+', 'label' => 'Industries Served', 'icon' => 'globe'],
                        ['value' => '500+', 'label' => 'Successful Deployments', 'icon' => 'trophy'],
                        ['value' => '95%', 'label' => 'Customer Satisfaction', 'icon' => 'star']
                    ],
                    'featuredPartners' => [
                        [
                            'id' => 'deloitte',
                            'name' => 'Deloitte Consulting',
                            'industry' => 'manufacturing',
                            'tier' => 'premier',
                            'solutionAreas' => ['inventory', 'analytics', 'procurement'],
                            'isCertified' => true,
                            'description' => 'Deloitte provides end-to-end supply chain consulting services, helping organizations optimize operations, reduce costs, and drive innovation through digital transformation.',
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Deloitte.svg',
                            'image' => 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop',
                            'link' => '/partners/deloitte',
                            'isFeatured' => true
                        ],
                        [
                            'id' => 'accenture',
                            'name' => 'Accenture',
                            'industry' => 'retail',
                            'tier' => 'premier',
                            'solutionAreas' => ['warehouse', 'transportation', 'planning'],
                            'isCertified' => true,
                            'description' => 'Accenture delivers innovative supply chain solutions that combine strategy, technology, and operations to help clients become more resilient and efficient.',
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/9/93/Accenture.svg',
                            'image' => 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop',
                            'link' => '/partners/accenture',
                            'isFeatured' => true
                        ],
                        [
                            'id' => 'pwc',
                            'name' => 'PwC',
                            'industry' => 'healthcare',
                            'tier' => 'advanced',
                            'solutionAreas' => ['analytics', 'procurement', 'inventory'],
                            'isCertified' => true,
                            'description' => 'PwC helps healthcare organizations transform their supply chains with data-driven insights, risk management, and operational excellence.',
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/8/8a/PwC.svg',
                            'image' => 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=500&fit=crop',
                            'link' => '/partners/pwc',
                            'isFeatured' => true
                        ]
                    ],
                    'partners' => [
                        [
                            'id' => 'deloitte',
                            'name' => 'Deloitte Consulting',
                            'industry' => 'manufacturing',
                            'solutionAreas' => ['inventory', 'analytics', 'procurement'],
                            'region' => 'north-america',
                            'location' => 'New York, NY',
                            'tier' => 'premier',
                            'isCertified' => true,
                            'successStoriesCount' => 25,
                            'description' => 'Deloitte provides end-to-end supply chain consulting services, helping organizations optimize operations, reduce costs, and drive innovation through digital transformation.',
                            'successMetrics' => [
                                ['value' => '30%', 'label' => 'Cost Reduction'],
                                ['value' => '25%', 'label' => 'Efficiency Gain'],
                                ['value' => '99%', 'label' => 'On-Time Delivery']
                            ],
                            'tags' => ['consulting', 'digital transformation', 'supply chain strategy'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Deloitte.svg',
                            'image' => 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
                            'link' => '/partners/deloitte',
                            'isFeatured' => true
                        ],
                        [
                            'id' => 'accenture',
                            'name' => 'Accenture',
                            'industry' => 'retail',
                            'solutionAreas' => ['warehouse', 'transportation', 'planning'],
                            'region' => 'europe',
                            'location' => 'London, UK',
                            'tier' => 'premier',
                            'isCertified' => true,
                            'successStoriesCount' => 32,
                            'description' => 'Accenture delivers innovative supply chain solutions that combine strategy, technology, and operations to help clients become more resilient and efficient.',
                            'successMetrics' => [
                                ['value' => '40%', 'label' => 'Inventory Reduction'],
                                ['value' => '50%', 'label' => 'Faster Fulfillment'],
                                ['value' => '98%', 'label' => 'Order Accuracy']
                            ],
                            'tags' => ['strategy', 'technology', 'operations'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/9/93/Accenture.svg',
                            'image' => 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
                            'link' => '/partners/accenture',
                            'isFeatured' => true
                        ],
                        [
                            'id' => 'pwc',
                            'name' => 'PwC',
                            'industry' => 'healthcare',
                            'solutionAreas' => ['analytics', 'procurement', 'inventory'],
                            'region' => 'north-america',
                            'location' => 'Chicago, IL',
                            'tier' => 'advanced',
                            'isCertified' => true,
                            'successStoriesCount' => 18,
                            'description' => 'PwC helps healthcare organizations transform their supply chains with data-driven insights, risk management, and operational excellence.',
                            'successMetrics' => [
                                ['value' => '35%', 'label' => 'Cost Savings'],
                                ['value' => '45%', 'label' => 'Process Efficiency'],
                                ['value' => '100%', 'label' => 'Compliance Rate']
                            ],
                            'tags' => ['healthcare', 'risk management', 'compliance'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/8/8a/PwC.svg',
                            'image' => 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop',
                            'link' => '/partners/pwc',
                            'isFeatured' => true
                        ],
                        [
                            'id' => 'kpmg',
                            'name' => 'KPMG',
                            'industry' => 'logistics',
                            'solutionAreas' => ['transportation', 'analytics', 'warehouse'],
                            'region' => 'asia-pacific',
                            'location' => 'Singapore',
                            'tier' => 'advanced',
                            'isCertified' => true,
                            'successStoriesCount' => 15,
                            'description' => 'KPMG provides integrated supply chain solutions that help logistics companies optimize networks, reduce costs, and improve customer service.',
                            'successMetrics' => [
                                ['value' => '28%', 'label' => 'Transport Savings'],
                                ['value' => '32%', 'label' => 'Warehouse Throughput'],
                                ['value' => '96%', 'label' => 'On-Time Performance']
                            ],
                            'tags' => ['logistics', 'network optimization', 'customer service'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/1/1d/KPMG.svg',
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
                            'link' => '/partners/kpmg'
                        ],
                        [
                            'id' => 'ey',
                            'name' => 'EY',
                            'industry' => 'automotive',
                            'solutionAreas' => ['planning', 'inventory', 'procurement'],
                            'region' => 'europe',
                            'location' => 'Stuttgart, Germany',
                            'tier' => 'certified',
                            'isCertified' => true,
                            'successStoriesCount' => 12,
                            'description' => 'EY helps automotive manufacturers build resilient supply chains through digitalization, sustainability initiatives, and advanced analytics.',
                            'successMetrics' => [
                                ['value' => '22%', 'label' => 'Working Capital'],
                                ['value' => '38%', 'label' => 'Forecast Accuracy'],
                                ['value' => '15%', 'label' => 'Carbon Reduction']
                            ],
                            'tags' => ['automotive', 'sustainability', 'digitalization'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Ernst_%26_Young_Logo.svg',
                            'image' => 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600&h=400&fit=crop',
                            'link' => '/partners/ey'
                        ],
                        [
                            'id' => 'ibm',
                            'name' => 'IBM Consulting',
                            'industry' => 'consumer-goods',
                            'solutionAreas' => ['analytics', 'planning', 'warehouse'],
                            'region' => 'north-america',
                            'location' => 'Austin, TX',
                            'tier' => 'certified',
                            'isCertified' => true,
                            'successStoriesCount' => 20,
                            'description' => 'IBM Consulting delivers AI-powered supply chain solutions that help consumer goods companies anticipate demand, optimize inventory, and enhance customer experiences.',
                            'successMetrics' => [
                                ['value' => '50%', 'label' => 'Forecast Improvement'],
                                ['value' => '20%', 'label' => 'Stockout Reduction'],
                                ['value' => '95%', 'label' => 'Customer Satisfaction']
                            ],
                            'tags' => ['ai', 'demand forecasting', 'consumer goods'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
                            'image' => 'https://images.unsplash.com/photo-1488229297570-58520851e868?w=600&h=400&fit=crop',
                            'link' => '/partners/ibm'
                        ]
                    ],
                    'successStories' => [
                        [
                            'partner' => 'Deloitte Consulting',
                            'industry' => 'Manufacturing',
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Deloitte.svg',
                            'quote' => 'Partnering with SupplyChainPro transformed our client\'s operations, reducing costs by 30% while improving delivery performance to 99%.',
                            'result' => '30% Cost Reduction',
                            'link' => '/success-stories/deloitte',
                            'image' => 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop'
                        ],
                        [
                            'partner' => 'Accenture',
                            'industry' => 'Retail',
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/9/93/Accenture.svg',
                            'quote' => 'The integration delivered unprecedented inventory visibility and reduced stockouts by 50% across our client\'s distribution network.',
                            'result' => '50% Stockout Reduction',
                            'link' => '/success-stories/accenture',
                            'image' => 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop'
                        ],
                        [
                            'partner' => 'PwC',
                            'industry' => 'Healthcare',
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/8/8a/PwC.svg',
                            'quote' => 'Healthcare supply chains are complex, but our joint solution achieved 100% compliance and 35% cost savings.',
                            'result' => '100% Compliance',
                            'link' => '/success-stories/pwc',
                            'image' => 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop'
                        ]
                    ],
                    'showNewsletter' => true,
                    'newsletter' => [
                        'title' => 'Solution Partner Updates',
                        'description' => 'Subscribe to receive updates on new solution partners, success stories, and industry insights.',
                        'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 456,
                'section_key' => 'solutionPartners',
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
