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

            // Integration Partners Section
            [
                'id' => 457,
                'section_key' => 'integrationPartners',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => 'Integration Partners',
                    'title' => [
                        'prefix' => 'Connect Your',
                        'highlight' => 'Ecosystem'
                    ],
                    'description' => 'Seamlessly connect SupplyChainPro with your existing business applications. Our integration partners provide pre-built connectors and APIs for rapid deployment.',
                    'heroImage' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=500&fit=crop',
                    'searchPlaceholder' => 'Search integrations by name, category, or technology...',
                    'categories' => [
                        ['id' => 'all', 'label' => 'All Integrations', 'icon' => 'link'],
                        ['id' => 'erp', 'label' => 'ERP Systems', 'icon' => 'building'],
                        ['id' => 'ecommerce', 'label' => 'E-commerce Platforms', 'icon' => 'globe'],
                        ['id' => 'crm', 'label' => 'CRM Systems', 'icon' => 'users'],
                        ['id' => 'wms', 'label' => 'WMS Providers', 'icon' => 'building'],
                        ['id' => 'tms', 'label' => 'TMS Providers', 'icon' => 'globe'],
                        ['id' => 'payment', 'label' => 'Payment Gateways', 'icon' => 'credit']
                    ],
                    'integrationTypes' => [
                        ['id' => 'all', 'label' => 'All Types'],
                        ['id' => 'api', 'label' => 'REST API'],
                        ['id' => 'pre-built', 'label' => 'Pre-built Connector'],
                        ['id' => 'sdk', 'label' => 'SDK'],
                        ['id' => 'webhook', 'label' => 'Webhook']
                    ],
                    'stats' => [
                        ['value' => '150+', 'label' => 'Pre-built Integrations', 'icon' => 'link'],
                        ['value' => '50+', 'label' => 'Technology Partners', 'icon' => 'chip'],
                        ['value' => '10k+', 'label' => 'API Calls Daily', 'icon' => 'code'],
                        ['value' => '99.9%', 'label' => 'Uptime', 'icon' => 'shield']
                    ],
                    'partners' => [
                        [
                            'id' => 'sap',
                            'name' => 'SAP',
                            'category' => 'erp',
                            'integrationType' => 'pre-built',
                            'description' => 'Pre-built connector for SAP ERP systems enabling seamless data synchronization between SupplyChainPro and SAP for inventory, orders, and shipments.',
                            'features' => ['Real-time Inventory Sync', 'Order Management Integration', 'Shipment Tracking', 'Master Data Synchronization'],
                            'tags' => ['erp', 'sap', 'enterprise'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg',
                            'image' => 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
                            'link' => '/integrations/sap',
                            'docsLink' => 'https://docs.sap.com',
                            'isFeatured' => true
                        ],
                        [
                            'id' => 'shopify',
                            'name' => 'Shopify',
                            'category' => 'ecommerce',
                            'integrationType' => 'api',
                            'description' => 'Connect your Shopify store with SupplyChainPro for automated order fulfillment, inventory management, and real-time shipping updates.',
                            'features' => ['Automated Order Sync', 'Inventory Level Updates', 'Shipping Confirmation', 'Returns Management'],
                            'tags' => ['ecommerce', 'shopify', 'order management'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg',
                            'image' => 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=600&h=400&fit=crop',
                            'link' => '/integrations/shopify',
                            'docsLink' => 'https://docs.shopify.com',
                            'isFeatured' => true
                        ],
                        [
                            'id' => 'salesforce',
                            'name' => 'Salesforce',
                            'category' => 'crm',
                            'integrationType' => 'api',
                            'description' => 'Bi-directional sync between Salesforce CRM and SupplyChainPro for customer data, order history, and opportunity tracking.',
                            'features' => ['Customer Data Sync', 'Opportunity Tracking', 'Order History Integration', 'Case Management'],
                            'tags' => ['crm', 'salesforce', 'customer data'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
                            'link' => '/integrations/salesforce',
                            'docsLink' => 'https://developer.salesforce.com'
                        ],
                        [
                            'id' => 'manhattan',
                            'name' => 'Manhattan Associates',
                            'category' => 'wms',
                            'integrationType' => 'pre-built',
                            'description' => 'Deep integration with Manhattan WMS for warehouse automation, inventory visibility, and fulfillment optimization.',
                            'features' => ['Wave Planning Sync', 'Inventory Reconciliation', 'ASN Processing', 'Labor Management'],
                            'tags' => ['wms', 'warehouse', 'fulfillment'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Manhattan_Associates_logo.svg',
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
                            'link' => '/integrations/manhattan',
                            'docsLink' => 'https://docs.manhattan.com'
                        ],
                        [
                            'id' => 'mercury',
                            'name' => 'MercuryGate',
                            'category' => 'tms',
                            'integrationType' => 'api',
                            'description' => 'Connect with MercuryGate TMS for carrier selection, shipment tracking, and freight audit integration.',
                            'features' => ['Carrier Rate Shopping', 'Shipment Visibility', 'Freight Audit Sync', 'Document Management'],
                            'tags' => ['tms', 'transportation', 'logistics'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/5/55/MercuryGate_logo.png',
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
                            'link' => '/integrations/mercurygate',
                            'docsLink' => 'https://docs.mercurygate.com'
                        ],
                        [
                            'id' => 'stripe',
                            'name' => 'Stripe',
                            'category' => 'payment',
                            'integrationType' => 'webhook',
                            'description' => 'Payment processing integration for seamless checkout, subscription billing, and financial reconciliation.',
                            'features' => ['Payment Processing', 'Subscription Billing', 'Refund Management', 'Financial Reporting'],
                            'tags' => ['payment', 'billing', 'financial'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg',
                            'image' => 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop',
                            'link' => '/integrations/stripe',
                            'docsLink' => 'https://docs.stripe.com'
                        ]
                    ],
                    'ctaTitle' => 'Become an Integration Partner',
                    'ctaDescription' => 'Join our ecosystem of integration partners. Build pre-built connectors and reach thousands of SupplyChainPro customers.',
                    'ctaImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop',
                    'applyLink' => '/become-integration-partner',
                    'programLink' => '/partner-program',
                    'showNewsletter' => true,
                    'newsletter' => [
                        'title' => 'Integration Partner Updates',
                        'description' => 'Subscribe to receive updates on new integrations, API changes, and developer resources.',
                        'disclaimer' => 'No spam, unsubscribe anytime. Get 1-2 emails per month.',
                        'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 458,
                'section_key' => 'integrationPartners',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => 'Integration Partners',
                    'title' => [
                        'prefix' => 'Connect Your',
                        'highlight' => 'Ecosystem'
                    ],
                    'description' => 'Seamlessly connect SupplyChainPro with your existing business applications. Our integration partners provide pre-built connectors and APIs for rapid deployment.',
                    'heroImage' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=500&fit=crop',
                    'searchPlaceholder' => 'Search integrations by name, category, or technology...',
                    'defaultViewMode' => 'grid',
                    'categories' => [
                        ['id' => 'all', 'label' => 'All Integrations', 'icon' => 'link'],
                        ['id' => 'erp', 'label' => 'ERP Systems', 'icon' => 'building'],
                        ['id' => 'ecommerce', 'label' => 'E-commerce Platforms', 'icon' => 'globe'],
                        ['id' => 'crm', 'label' => 'CRM Systems', 'icon' => 'users'],
                        ['id' => 'wms', 'label' => 'WMS Providers', 'icon' => 'building'],
                        ['id' => 'tms', 'label' => 'TMS Providers', 'icon' => 'globe'],
                        ['id' => 'payment', 'label' => 'Payment Gateways', 'icon' => 'credit']
                    ],
                    'integrationTypes' => [
                        ['id' => 'all', 'label' => 'All Types', 'icon' => 'code'],
                        ['id' => 'api', 'label' => 'REST API', 'icon' => 'code'],
                        ['id' => 'pre-built', 'label' => 'Pre-built Connector', 'icon' => 'link'],
                        ['id' => 'sdk', 'label' => 'SDK', 'icon' => 'template'],
                        ['id' => 'webhook', 'label' => 'Webhook', 'icon' => 'refresh']
                    ],
                    'certificationLevels' => [
                        ['id' => 'all', 'label' => 'All Levels'],
                        ['id' => 'premier', 'label' => 'Premier'],
                        ['id' => 'advanced', 'label' => 'Advanced'],
                        ['id' => 'certified', 'label' => 'Certified']
                    ],
                    'stats' => [
                        ['value' => '150+', 'label' => 'Pre-built Integrations', 'icon' => 'link', 'trend' => '+25', 'trendUp' => true],
                        ['value' => '50+', 'label' => 'Technology Partners', 'icon' => 'chip', 'trend' => '+8', 'trendUp' => true],
                        ['value' => '10k+', 'label' => 'API Calls Daily', 'icon' => 'code', 'trend' => '+30%', 'trendUp' => true],
                        ['value' => '99.9%', 'label' => 'Uptime', 'icon' => 'shield', 'trend' => '99.9%', 'trendUp' => true]
                    ],
                    'featuredPartners' => [
                        [
                            'id' => 'sap',
                            'name' => 'SAP',
                            'category' => 'erp',
                            'certification' => 'premier',
                            'description' => 'Pre-built connector for SAP ERP systems enabling seamless data synchronization.',
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg',
                            'link' => '/integrations/sap',
                            'image' => 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
                            'isFeatured' => true
                        ],
                        [
                            'id' => 'shopify',
                            'name' => 'Shopify',
                            'category' => 'ecommerce',
                            'certification' => 'premier',
                            'description' => 'Connect your Shopify store with SupplyChainPro for automated order fulfillment.',
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg',
                            'link' => '/integrations/shopify',
                            'image' => 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=600&h=400&fit=crop',
                            'isFeatured' => true
                        ],
                        [
                            'id' => 'salesforce',
                            'name' => 'Salesforce',
                            'category' => 'crm',
                            'certification' => 'premier',
                            'description' => 'Bi-directional sync between Salesforce CRM and SupplyChainPro.',
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg',
                            'link' => '/integrations/salesforce',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
                            'isFeatured' => true
                        ]
                    ],
                    'partners' => [
                        [
                            'id' => 'sap',
                            'name' => 'SAP',
                            'category' => 'erp',
                            'integrationType' => 'pre-built',
                            'certification' => 'premier',
                            'description' => 'Pre-built connector for SAP ERP systems enabling seamless data synchronization between SupplyChainPro and SAP for inventory, orders, and shipments.',
                            'features' => ['Real-time Inventory Sync', 'Order Management Integration', 'Shipment Tracking', 'Master Data Synchronization'],
                            'tags' => ['erp', 'sap', 'enterprise'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg',
                            'link' => '/integrations/sap',
                            'docsLink' => 'https://docs.sap.com',
                            'image' => 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
                            'isFeatured' => true
                        ],
                        [
                            'id' => 'shopify',
                            'name' => 'Shopify',
                            'category' => 'ecommerce',
                            'integrationType' => 'api',
                            'certification' => 'premier',
                            'description' => 'Connect your Shopify store with SupplyChainPro for automated order fulfillment, inventory management, and real-time shipping updates.',
                            'features' => ['Automated Order Sync', 'Inventory Level Updates', 'Shipping Confirmation', 'Returns Management'],
                            'tags' => ['ecommerce', 'shopify', 'order management'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg',
                            'link' => '/integrations/shopify',
                            'docsLink' => 'https://docs.shopify.com',
                            'image' => 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=600&h=400&fit=crop',
                            'isFeatured' => true
                        ],
                        [
                            'id' => 'salesforce',
                            'name' => 'Salesforce',
                            'category' => 'crm',
                            'integrationType' => 'api',
                            'certification' => 'premier',
                            'description' => 'Bi-directional sync between Salesforce CRM and SupplyChainPro for customer data, order history, and opportunity tracking.',
                            'features' => ['Customer Data Sync', 'Opportunity Tracking', 'Order History Integration', 'Case Management'],
                            'tags' => ['crm', 'salesforce', 'customer data'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg',
                            'link' => '/integrations/salesforce',
                            'docsLink' => 'https://developer.salesforce.com',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
                            'isFeatured' => true
                        ],
                        [
                            'id' => 'manhattan',
                            'name' => 'Manhattan Associates',
                            'category' => 'wms',
                            'integrationType' => 'pre-built',
                            'certification' => 'advanced',
                            'description' => 'Deep integration with Manhattan WMS for warehouse automation, inventory visibility, and fulfillment optimization.',
                            'features' => ['Wave Planning Sync', 'Inventory Reconciliation', 'ASN Processing', 'Labor Management'],
                            'tags' => ['wms', 'warehouse', 'fulfillment'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Manhattan_Associates_logo.svg',
                            'link' => '/integrations/manhattan',
                            'docsLink' => 'https://docs.manhattan.com',
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'mercury',
                            'name' => 'MercuryGate',
                            'category' => 'tms',
                            'integrationType' => 'api',
                            'certification' => 'advanced',
                            'description' => 'Connect with MercuryGate TMS for carrier selection, shipment tracking, and freight audit integration.',
                            'features' => ['Carrier Rate Shopping', 'Shipment Visibility', 'Freight Audit Sync', 'Document Management'],
                            'tags' => ['tms', 'transportation', 'logistics'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/5/55/MercuryGate_logo.png',
                            'link' => '/integrations/mercurygate',
                            'docsLink' => 'https://docs.mercurygate.com',
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'stripe',
                            'name' => 'Stripe',
                            'category' => 'payment',
                            'integrationType' => 'webhook',
                            'certification' => 'certified',
                            'description' => 'Payment processing integration for seamless checkout, subscription billing, and financial reconciliation.',
                            'features' => ['Payment Processing', 'Subscription Billing', 'Refund Management', 'Financial Reporting'],
                            'tags' => ['payment', 'billing', 'financial'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg',
                            'link' => '/integrations/stripe',
                            'docsLink' => 'https://docs.stripe.com',
                            'image' => 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop'
                        ]
                    ],
                    'showNewsletter' => true,
                    'newsletter' => [
                        'title' => 'Integration Partner Updates',
                        'description' => 'Subscribe to receive updates on new integrations, API changes, and developer resources.',
                        'disclaimer' => 'No spam, unsubscribe anytime. Get 1-2 emails per month.',
                        'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 459,
                'section_key' => 'integrationPartners',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => 'Integration Partners',
                    'title' => [
                        'prefix' => 'Connect Your',
                        'highlight' => 'Ecosystem'
                    ],
                    'description' => 'Seamlessly connect SupplyChainPro with your existing business applications. Our integration partners provide pre-built connectors and APIs for rapid deployment.',
                    'heroImage' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=500&fit=crop',
                    'autoPlayCarousel' => true,
                    'tabs' => [
                        ['id' => 'all', 'label' => 'All Integrations', 'icon' => 'link'],
                        ['id' => 'featured', 'label' => 'Featured', 'icon' => 'star'],
                        ['id' => 'favorites', 'label' => 'Favorites', 'icon' => 'heart'],
                        ['id' => 'api', 'label' => 'API Partners', 'icon' => 'code']
                    ],
                    'categories' => [
                        ['id' => 'all', 'label' => 'All Integrations', 'icon' => 'link'],
                        ['id' => 'erp', 'label' => 'ERP Systems', 'icon' => 'building'],
                        ['id' => 'ecommerce', 'label' => 'E-commerce Platforms', 'icon' => 'globe'],
                        ['id' => 'crm', 'label' => 'CRM Systems', 'icon' => 'users'],
                        ['id' => 'wms', 'label' => 'WMS Providers', 'icon' => 'building'],
                        ['id' => 'tms', 'label' => 'TMS Providers', 'icon' => 'globe'],
                        ['id' => 'payment', 'label' => 'Payment Gateways', 'icon' => 'credit']
                    ],
                    'integrationTypes' => [
                        ['id' => 'all', 'label' => 'All Types', 'icon' => 'code'],
                        ['id' => 'api', 'label' => 'REST API', 'icon' => 'code'],
                        ['id' => 'pre-built', 'label' => 'Pre-built Connector', 'icon' => 'link'],
                        ['id' => 'sdk', 'label' => 'SDK', 'icon' => 'template'],
                        ['id' => 'webhook', 'label' => 'Webhook', 'icon' => 'refresh']
                    ],
                    'stats' => [
                        ['value' => '150+', 'label' => 'Pre-built Integrations', 'icon' => 'link'],
                        ['value' => '50+', 'label' => 'Technology Partners', 'icon' => 'chip'],
                        ['value' => '10k+', 'label' => 'API Calls Daily', 'icon' => 'code'],
                        ['value' => '99.9%', 'label' => 'Uptime', 'icon' => 'shield']
                    ],
                    'featuredPartners' => [
                        [
                            'id' => 'sap',
                            'name' => 'SAP',
                            'category' => 'erp',
                            'integrationType' => 'pre-built',
                            'certification' => 'premier',
                            'features' => ['Real-time Inventory Sync', 'Order Management Integration'],
                            'description' => 'Pre-built connector for SAP ERP systems enabling seamless data synchronization.',
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg',
                            'image' => 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop',
                            'link' => '/integrations/sap',
                            'docsLink' => 'https://docs.sap.com',
                            'codeExample' => "fetch('https://api.sap.com/inventory', { method: 'GET' })",
                            'isFeatured' => true
                        ],
                        [
                            'id' => 'shopify',
                            'name' => 'Shopify',
                            'category' => 'ecommerce',
                            'integrationType' => 'api',
                            'certification' => 'premier',
                            'features' => ['Automated Order Sync', 'Inventory Level Updates'],
                            'description' => 'Connect your Shopify store with SupplyChainPro for automated order fulfillment.',
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg',
                            'image' => 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=800&h=500&fit=crop',
                            'link' => '/integrations/shopify',
                            'docsLink' => 'https://docs.shopify.com',
                            'codeExample' => "const shopify = new ShopifyAPI('your-store.myshopify.com');",
                            'isFeatured' => true
                        ],
                        [
                            'id' => 'salesforce',
                            'name' => 'Salesforce',
                            'category' => 'crm',
                            'integrationType' => 'api',
                            'certification' => 'premier',
                            'features' => ['Customer Data Sync', 'Opportunity Tracking'],
                            'description' => 'Bi-directional sync between Salesforce CRM and SupplyChainPro.',
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
                            'link' => '/integrations/salesforce',
                            'docsLink' => 'https://developer.salesforce.com',
                            'codeExample' => "SELECT Id, Name FROM Account",
                            'isFeatured' => true
                        ]
                    ],
                    'partners' => [
                        [
                            'id' => 'sap',
                            'name' => 'SAP',
                            'category' => 'erp',
                            'integrationType' => 'pre-built',
                            'certification' => 'premier',
                            'apiVersion' => 'v2.0',
                            'description' => 'Pre-built connector for SAP ERP systems enabling seamless data synchronization between SupplyChainPro and SAP for inventory, orders, and shipments.',
                            'features' => ['Real-time Inventory Sync', 'Order Management Integration', 'Shipment Tracking', 'Master Data Synchronization'],
                            'tags' => ['erp', 'sap', 'enterprise'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg',
                            'image' => 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
                            'link' => '/integrations/sap',
                            'docsLink' => 'https://docs.sap.com',
                            'codeExample' => "fetch('https://api.sap.com/inventory', { method: 'GET', headers: { 'Authorization': 'Bearer token' } })",
                            'isFeatured' => true
                        ],
                        [
                            'id' => 'shopify',
                            'name' => 'Shopify',
                            'category' => 'ecommerce',
                            'integrationType' => 'api',
                            'certification' => 'premier',
                            'apiVersion' => '2024-01',
                            'description' => 'Connect your Shopify store with SupplyChainPro for automated order fulfillment, inventory management, and real-time shipping updates.',
                            'features' => ['Automated Order Sync', 'Inventory Level Updates', 'Shipping Confirmation', 'Returns Management'],
                            'tags' => ['ecommerce', 'shopify', 'order management'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg',
                            'image' => 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=600&h=400&fit=crop',
                            'link' => '/integrations/shopify',
                            'docsLink' => 'https://docs.shopify.com',
                            'codeExample' => "const shopify = new ShopifyAPI('your-store.myshopify.com'); shopify.orders.sync()",
                            'isFeatured' => true
                        ],
                        [
                            'id' => 'salesforce',
                            'name' => 'Salesforce',
                            'category' => 'crm',
                            'integrationType' => 'api',
                            'certification' => 'premier',
                            'apiVersion' => 'v58.0',
                            'description' => 'Bi-directional sync between Salesforce CRM and SupplyChainPro for customer data, order history, and opportunity tracking.',
                            'features' => ['Customer Data Sync', 'Opportunity Tracking', 'Order History Integration', 'Case Management'],
                            'tags' => ['crm', 'salesforce', 'customer data'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
                            'link' => '/integrations/salesforce',
                            'docsLink' => 'https://developer.salesforce.com',
                            'codeExample' => "SELECT Id, Name, Industry FROM Account",
                            'isFeatured' => true
                        ],
                        [
                            'id' => 'manhattan',
                            'name' => 'Manhattan Associates',
                            'category' => 'wms',
                            'integrationType' => 'pre-built',
                            'certification' => 'advanced',
                            'apiVersion' => 'v1.0',
                            'description' => 'Deep integration with Manhattan WMS for warehouse automation, inventory visibility, and fulfillment optimization.',
                            'features' => ['Wave Planning Sync', 'Inventory Reconciliation', 'ASN Processing', 'Labor Management'],
                            'tags' => ['wms', 'warehouse', 'fulfillment'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Manhattan_Associates_logo.svg',
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
                            'link' => '/integrations/manhattan',
                            'docsLink' => 'https://docs.manhattan.com',
                            'codeExample' => "manhattan.warehouse.createWave({ startDate: '2024-01-01' })"
                        ],
                        [
                            'id' => 'mercury',
                            'name' => 'MercuryGate',
                            'category' => 'tms',
                            'integrationType' => 'api',
                            'certification' => 'advanced',
                            'apiVersion' => 'v3.0',
                            'description' => 'Connect with MercuryGate TMS for carrier selection, shipment tracking, and freight audit integration.',
                            'features' => ['Carrier Rate Shopping', 'Shipment Visibility', 'Freight Audit Sync', 'Document Management'],
                            'tags' => ['tms', 'transportation', 'logistics'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/5/55/MercuryGate_logo.png',
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
                            'link' => '/integrations/mercurygate',
                            'docsLink' => 'https://docs.mercurygate.com',
                            'codeExample' => "mercurygate.getRates({ origin: 'NYC', destination: 'LAX', weight: 100 })"
                        ],
                        [
                            'id' => 'stripe',
                            'name' => 'Stripe',
                            'category' => 'payment',
                            'integrationType' => 'webhook',
                            'certification' => 'certified',
                            'apiVersion' => '2024-01-01',
                            'description' => 'Payment processing integration for seamless checkout, subscription billing, and financial reconciliation.',
                            'features' => ['Payment Processing', 'Subscription Billing', 'Refund Management', 'Financial Reporting'],
                            'tags' => ['payment', 'billing', 'financial'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg',
                            'image' => 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop',
                            'link' => '/integrations/stripe',
                            'docsLink' => 'https://docs.stripe.com',
                            'codeExample' => "stripe.paymentIntents.create({ amount: 1000, currency: 'usd' })"
                        ]
                    ],
                    'apiResources' => [
                        ['title' => 'REST API Reference', 'description' => 'Complete API documentation for developers', 'icon' => 'code', 'link' => '/docs/api'],
                        ['title' => 'Webhook Guide', 'description' => 'Learn how to handle real-time events', 'icon' => 'refresh', 'link' => '/docs/webhooks'],
                        ['title' => 'Authentication', 'description' => 'API key and OAuth setup guide', 'icon' => 'shield', 'link' => '/docs/auth']
                    ],
                    'showNewsletter' => true,
                    'newsletter' => [
                        'title' => 'Integration Partner Updates',
                        'description' => 'Subscribe to receive updates on new integrations, API changes, and developer resources.',
                        'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 460,
                'section_key' => 'integrationPartners',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],


            // Become a Partner Section
            [
                'id' => 461,
                'section_key' => 'becomeAPartner',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => 'Join Our Ecosystem',
                    'title' => [
                        'prefix' => 'Become a',
                        'highlight' => 'Partner'
                    ],
                    'description' => 'Join a global network of trusted partners delivering innovative supply chain solutions. Grow your business with comprehensive support, training, and resources.',
                    'heroImage' => 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200&h=500&fit=crop',
                    'stats' => [
                        ['value' => '500+', 'label' => 'Active Partners', 'icon' => 'users'],
                        ['value' => '50+', 'label' => 'Countries', 'icon' => 'globe'],
                        ['value' => '$100M+', 'label' => 'Partner Revenue', 'icon' => 'credit'],
                        ['value' => '95%', 'label' => 'Partner Satisfaction', 'icon' => 'star']
                    ],
                    'programTypes' => [
                        [
                            'id' => 'technology',
                            'title' => 'Technology Partner',
                            'description' => 'Integrate your technology with SupplyChainPro to deliver joint solutions.',
                            'icon' => 'chip',
                            'benefits' => ['API access & documentation', 'Co-marketing opportunities', 'Technical support', 'Joint solution validation'],
                            'image' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'solution',
                            'title' => 'Solution Partner',
                            'description' => 'Deliver end-to-end supply chain solutions leveraging our platform.',
                            'icon' => 'briefcase',
                            'benefits' => ['Sales enablement', 'Partner training & certification', 'Lead sharing', 'Joint go-to-market programs'],
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'consulting',
                            'title' => 'Consulting Partner',
                            'description' => 'Provide expert advisory and implementation services to mutual clients.',
                            'icon' => 'users',
                            'benefits' => ['Implementation methodology', 'Practice development', 'Co-branding opportunities', 'Exclusive events'],
                            'image' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'reseller',
                            'title' => 'Reseller Partner',
                            'description' => 'Sell and distribute SupplyChainPro solutions to your customer base.',
                            'icon' => 'globe',
                            'benefits' => ['Competitive margins', 'Sales training', 'Marketing development funds', 'Dedicated channel support'],
                            'image' => 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop'
                        ]
                    ],
                    'benefits' => [
                        ['title' => 'Global Reach', 'description' => 'Access a worldwide network of enterprise customers across industries.', 'icon' => 'globe'],
                        ['title' => 'Competitive Margins', 'description' => 'Earn attractive margins and recurring revenue streams.', 'icon' => 'credit'],
                        ['title' => 'Dedicated Support', 'description' => 'Get priority access to technical and sales support teams.', 'icon' => 'users'],
                        ['title' => 'Co-Marketing', 'description' => 'Leverage joint marketing programs and demand generation.', 'icon' => 'megaphone']
                    ],
                    'formTitle' => 'Apply to Become a Partner',
                    'formDescription' => 'Fill out the form below and our partner team will reach out within 2 business days.',
                    'formImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop',
                    'showFaq' => true,
                    'faqs' => [
                        [
                            'question' => 'What are the requirements to become a partner?',
                            'answer' => 'Requirements vary by program type. Generally, we look for companies with proven expertise in supply chain, technology integration, or consulting services.'
                        ],
                        [
                            'question' => 'How long does the application process take?',
                            'answer' => 'The initial review takes 2-3 business days. After that, we schedule a discovery call to discuss partnership opportunities.'
                        ],
                        [
                            'question' => 'Is there a cost to join the partner program?',
                            'answer' => 'There is no cost to apply. Some programs may have annual fees based on partnership tier and benefits selected.'
                        ],
                        [
                            'question' => 'What training and resources do you provide?',
                            'answer' => 'We provide comprehensive training, certification programs, sales enablement materials, and technical documentation.'
                        ]
                    ],
                    'contactText' => 'Ready to grow your business? Join our partner ecosystem today.',
                    'contactLink' => '/partner-application',
                    'contactButtonText' => 'Apply Now',
                    'showNewsletter' => true,
                    'newsletter' => [
                        'title' => 'Partner Program Updates',
                        'description' => 'Subscribe to receive the latest partner news, training schedules, and solution updates.',
                        'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 462,
                'section_key' => 'becomeAPartner',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => 'Partner Application',
                    'title' => [
                        'prefix' => 'Become a',
                        'highlight' => 'Partner'
                    ],
                    'description' => 'Join our global partner ecosystem and accelerate your business growth. Complete the application below to start your journey.',
                    'heroImage' => 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200&h=500&fit=crop',
                    'stats' => [
                        ['value' => '500+', 'label' => 'Active Partners', 'icon' => 'users'],
                        ['value' => '50+', 'label' => 'Countries', 'icon' => 'globe'],
                        ['value' => '$100M+', 'label' => 'Partner Revenue', 'icon' => 'credit'],
                        ['value' => '95%', 'label' => 'Partner Satisfaction', 'icon' => 'star']
                    ],
                    'tiers' => [
                        [
                            'name' => 'Registered',
                            'icon' => 'badge',
                            'description' => 'Entry level for new partners',
                            'benefits' => ['Basic support', 'Marketing resources', 'Partner portal access'],
                            'image' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=400&fit=crop'
                        ],
                        [
                            'name' => 'Advanced',
                            'icon' => 'star',
                            'description' => 'For proven partners with track record',
                            'benefits' => ['Priority support', 'Co-marketing funds', 'Lead sharing', 'Training access'],
                            'image' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop'
                        ],
                        [
                            'name' => 'Premier',
                            'icon' => 'trophy',
                            'description' => 'Top-tier strategic partners',
                            'benefits' => ['Dedicated account manager', 'Joint business planning', 'Executive reviews', 'Exclusive events'],
                            'image' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop'
                        ]
                    ],
                    'comparisonFeatures' => [
                        ['name' => 'API Access', 'technology' => true, 'solution' => true, 'consulting' => false, 'reseller' => false],
                        ['name' => 'Partner Training', 'technology' => true, 'solution' => true, 'consulting' => true, 'reseller' => true],
                        ['name' => 'Sales Enablement', 'technology' => false, 'solution' => true, 'consulting' => false, 'reseller' => true],
                        ['name' => 'Lead Sharing', 'technology' => false, 'solution' => true, 'consulting' => true, 'reseller' => false],
                        ['name' => 'Co-marketing Funds', 'technology' => true, 'solution' => true, 'consulting' => false, 'reseller' => true],
                        ['name' => 'Technical Support', 'technology' => true, 'solution' => true, 'consulting' => true, 'reseller' => false],
                        ['name' => 'Implementation Methodology', 'technology' => false, 'solution' => true, 'consulting' => true, 'reseller' => false],
                        ['name' => 'Volume Incentives', 'technology' => false, 'solution' => false, 'consulting' => false, 'reseller' => true]
                    ],
                    'contactText' => 'Ready to grow your business? Join our partner ecosystem today.',
                    'contactLink' => '/partner-application',
                    'contactButtonText' => 'Apply Now',
                    'showNewsletter' => true,
                    'newsletter' => [
                        'title' => 'Partner Program Updates',
                        'description' => 'Subscribe to receive the latest partner news, training schedules, and solution updates.',
                        'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 463,
                'section_key' => 'becomeAPartner',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => 'Partner Program',
                    'title' => [
                        'prefix' => 'Become a',
                        'highlight' => 'Partner'
                    ],
                    'description' => 'Join our global partner ecosystem and accelerate your business growth. Complete the application below to start your journey.',
                    'heroImage' => 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200&h=500&fit=crop',
                    'autoPlayCarousel' => true,
                    'stats' => [
                        ['value' => '500+', 'label' => 'Active Partners', 'icon' => 'users'],
                        ['value' => '50+', 'label' => 'Countries', 'icon' => 'globe'],
                        ['value' => '$100M+', 'label' => 'Partner Revenue', 'icon' => 'credit'],
                        ['value' => '95%', 'label' => 'Partner Satisfaction', 'icon' => 'star']
                    ],
                    'tiers' => [
                        [
                            'name' => 'Registered',
                            'icon' => 'badge',
                            'description' => 'Entry level for new partners',
                            'benefits' => ['Basic support', 'Marketing resources', 'Partner portal access'],
                            'image' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=400&fit=crop'
                        ],
                        [
                            'name' => 'Advanced',
                            'icon' => 'star',
                            'description' => 'For proven partners with track record',
                            'benefits' => ['Priority support', 'Co-marketing funds', 'Lead sharing', 'Training access'],
                            'image' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop'
                        ],
                        [
                            'name' => 'Premier',
                            'icon' => 'trophy',
                            'description' => 'Top-tier strategic partners',
                            'benefits' => ['Dedicated account manager', 'Joint business planning', 'Executive reviews', 'Exclusive events'],
                            'image' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop'
                        ]
                    ],
                    'successStories' => [
                        [
                            'partner' => 'Deloitte Consulting',
                            'industry' => 'Manufacturing',
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Deloitte.svg',
                            'quote' => 'Partnering with SupplyChainPro transformed our client\'s operations, reducing costs by 30% while improving delivery performance to 99%.',
                            'metrics' => [
                                ['value' => '30%', 'label' => 'Cost Reduction'],
                                ['value' => '99%', 'label' => 'On-Time Delivery']
                            ],
                            'link' => '/success-stories/deloitte',
                            'image' => 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop'
                        ],
                        [
                            'partner' => 'Accenture',
                            'industry' => 'Retail',
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/9/93/Accenture.svg',
                            'quote' => 'The integration delivered unprecedented inventory visibility and reduced stockouts by 50% across our client\'s distribution network.',
                            'metrics' => [
                                ['value' => '50%', 'label' => 'Stockout Reduction'],
                                ['value' => '98%', 'label' => 'Order Accuracy']
                            ],
                            'link' => '/success-stories/accenture',
                            'image' => 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop'
                        ],
                        [
                            'partner' => 'PwC',
                            'industry' => 'Healthcare',
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/8/8a/PwC.svg',
                            'quote' => 'Healthcare supply chains are complex, but our joint solution achieved 100% compliance and 35% cost savings.',
                            'metrics' => [
                                ['value' => '35%', 'label' => 'Cost Savings'],
                                ['value' => '100%', 'label' => 'Compliance']
                            ],
                            'link' => '/success-stories/pwc',
                            'image' => 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop'
                        ]
                    ],
                    'contactText' => 'Ready to grow your business? Join our partner ecosystem today.',
                    'contactLink' => '/partner-application',
                    'contactButtonText' => 'Apply Now',
                    'contactImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop',
                    'showNewsletter' => true,
                    'newsletter' => [
                        'title' => 'Partner Program Updates',
                        'description' => 'Subscribe to receive the latest partner news, training schedules, and solution updates.',
                        'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 464,
                'section_key' => 'becomeAPartner',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Partner Resources Section
            [
                'id' => 465,
                'section_key' => 'partnerResources',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => 'Partner Resources',
                    'title' => [
                        'prefix' => 'Tools &',
                        'highlight' => 'Resources',
                        'suffix' => 'for Partners'
                    ],
                    'description' => 'Access a comprehensive library of training materials, sales tools, technical documentation, and marketing resources to help you succeed.',
                    'heroImage' => 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=500&fit=crop',
                    'searchPlaceholder' => 'Search resources by title, category, or topic...',
                    'categories' => [
                        ['id' => 'all', 'label' => 'All Resources', 'icon' => 'document'],
                        ['id' => 'training', 'label' => 'Training & Certification', 'icon' => 'academic'],
                        ['id' => 'marketing', 'label' => 'Marketing & Sales', 'icon' => 'chart'],
                        ['id' => 'technical', 'label' => 'Technical Resources', 'icon' => 'code'],
                        ['id' => 'sales', 'label' => 'Sales Enablement', 'icon' => 'briefcase'],
                        ['id' => 'collateral', 'label' => 'Sales Collateral', 'icon' => 'document'],
                        ['id' => 'events', 'label' => 'Events & Webinars', 'icon' => 'calendar']
                    ],
                    'resourceTypes' => [
                        ['id' => 'all', 'label' => 'All Types'],
                        ['id' => 'guide', 'label' => 'Guides'],
                        ['id' => 'video', 'label' => 'Videos'],
                        ['id' => 'template', 'label' => 'Templates'],
                        ['id' => 'webinar', 'label' => 'Webinars'],
                        ['id' => 'case-study', 'label' => 'Case Studies'],
                        ['id' => 'whitepaper', 'label' => 'Whitepapers']
                    ],
                    'stats' => [
                        ['value' => '100+', 'label' => 'Training Modules', 'icon' => 'academic'],
                        ['value' => '50+', 'label' => 'Sales Tools', 'icon' => 'briefcase'],
                        ['value' => '25+', 'label' => 'Case Studies', 'icon' => 'newspaper'],
                        ['value' => '1000+', 'label' => 'Active Partners', 'icon' => 'users']
                    ],
                    'resources' => [
                        [
                            'id' => 'partner-onboarding',
                            'title' => 'Partner Onboarding Guide',
                            'category' => 'training',
                            'type' => 'guide',
                            'readTime' => '15 min read',
                            'views' => '2.5k',
                            'description' => 'Complete onboarding guide for new partners covering program benefits, requirements, and getting started steps.',
                            'content' => 'This comprehensive guide walks you through the entire partner onboarding process, from signing the agreement to completing your first joint sale.',
                            'tags' => ['onboarding', 'getting started', 'training'],
                            'image' => 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop',
                            'link' => '/resources/partner-onboarding-guide',
                            'downloadable' => true,
                            'isFeatured' => true
                        ],
                        [
                            'id' => 'sales-deck',
                            'title' => 'SupplyChainPro Sales Deck',
                            'category' => 'sales',
                            'type' => 'template',
                            'readTime' => '10 min read',
                            'views' => '1.8k',
                            'description' => 'Customizable sales presentation template for partners to pitch SupplyChainPro solutions to prospects.',
                            'content' => 'Includes value proposition slides, competitive differentiators, customer success stories, and pricing models.',
                            'tags' => ['sales', 'presentation', 'template'],
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
                            'link' => '/resources/sales-deck',
                            'downloadable' => true,
                            'isFeatured' => true
                        ],
                        [
                            'id' => 'api-video',
                            'title' => 'API Integration Tutorial',
                            'category' => 'technical',
                            'type' => 'video',
                            'readTime' => '25 min watch',
                            'views' => '3.2k',
                            'description' => 'Step-by-step video tutorial on integrating your systems with SupplyChainPro REST APIs.',
                            'content' => 'Covers authentication, making API calls, handling webhooks, and best practices for error handling.',
                            'tags' => ['api', 'integration', 'tutorial'],
                            'image' => 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
                            'link' => '/resources/api-tutorial',
                            'downloadable' => false,
                            'isFeatured' => true
                        ],
                        [
                            'id' => 'retail-case-study',
                            'title' => 'Retail Supply Chain Transformation',
                            'category' => 'collateral',
                            'type' => 'case-study',
                            'readTime' => '8 min read',
                            'views' => '1.2k',
                            'description' => 'How ABC Retail achieved 30% inventory reduction and 99% on-time delivery using SupplyChainPro.',
                            'content' => 'Case study detailing the challenges, solution implementation, and measurable results achieved.',
                            'tags' => ['retail', 'inventory', 'case study'],
                            'image' => 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=600&h=400&fit=crop',
                            'link' => '/resources/retail-case-study',
                            'downloadable' => true
                        ],
                        [
                            'id' => 'whitepaper-ai',
                            'title' => 'AI in Supply Chain Whitepaper',
                            'category' => 'training',
                            'type' => 'whitepaper',
                            'readTime' => '20 min read',
                            'views' => '950',
                            'description' => 'Explore how artificial intelligence is transforming supply chain operations and forecasting.',
                            'content' => 'In-depth analysis of AI applications in demand forecasting, inventory optimization, and logistics planning.',
                            'tags' => ['ai', 'machine learning', 'whitepaper'],
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
                            'link' => '/resources/ai-whitepaper',
                            'downloadable' => true
                        ],
                        [
                            'id' => 'marketing-kit',
                            'title' => 'Partner Marketing Kit',
                            'category' => 'marketing',
                            'type' => 'template',
                            'readTime' => '12 min read',
                            'views' => '1.5k',
                            'description' => 'Complete marketing toolkit including email templates, social media assets, and campaign guides.',
                            'content' => 'Ready-to-use marketing materials for co-branded campaigns, events, and lead generation.',
                            'tags' => ['marketing', 'campaign', 'templates'],
                            'image' => 'https://images.unsplash.com/photo-1557838923-2985c318be48?w=600&h=400&fit=crop',
                            'link' => '/resources/marketing-kit',
                            'downloadable' => true
                        ],
                        [
                            'id' => 'webinar-demand',
                            'title' => 'Demand Forecasting Webinar',
                            'category' => 'events',
                            'type' => 'webinar',
                            'readTime' => '45 min watch',
                            'views' => '2.1k',
                            'description' => 'Recorded webinar on advanced demand forecasting techniques using SupplyChainPro analytics.',
                            'content' => 'Expert discussion on improving forecast accuracy and reducing stockouts with machine learning.',
                            'tags' => ['demand forecasting', 'webinar', 'analytics'],
                            'image' => 'https://images.unsplash.com/photo-1591115765375-520d72e17b25?w=600&h=400&fit=crop',
                            'link' => '/resources/demand-webinar',
                            'downloadable' => false
                        ]
                    ],
                    'portalTitle' => 'Access Partner Portal',
                    'portalDescription' => 'Get exclusive access to all partner resources, training materials, and sales tools. Login to your partner account to unlock premium content.',
                    'portalLink' => '/partner-portal',
                    'becomePartnerLink' => '/become-partner',
                    'showNewsletter' => true,
                    'newsletter' => [
                        'title' => 'Get Resource Updates',
                        'description' => 'Subscribe to receive notifications about new resources, training opportunities, and partner updates.',
                        'disclaimer' => 'No spam, unsubscribe anytime. Get 1-2 emails per month.',
                        'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 466,
                'section_key' => 'partnerResources',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => 'Partner Resources',
                    'title' => [
                        'prefix' => 'Tools &',
                        'highlight' => 'Resources',
                        'suffix' => 'for Partners'
                    ],
                    'description' => 'Access a comprehensive library of training materials, sales tools, technical documentation, and marketing resources to help you succeed.',
                    'heroImage' => 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=500&fit=crop',
                    'searchPlaceholder' => 'Search resources by title, category, or topic...',
                    'defaultViewMode' => 'grid',
                    'categories' => [
                        ['id' => 'all', 'label' => 'All Resources', 'icon' => 'document'],
                        ['id' => 'training', 'label' => 'Training & Certification', 'icon' => 'academic'],
                        ['id' => 'marketing', 'label' => 'Marketing & Sales', 'icon' => 'chart'],
                        ['id' => 'technical', 'label' => 'Technical Resources', 'icon' => 'code'],
                        ['id' => 'sales', 'label' => 'Sales Enablement', 'icon' => 'briefcase'],
                        ['id' => 'collateral', 'label' => 'Sales Collateral', 'icon' => 'document'],
                        ['id' => 'events', 'label' => 'Events & Webinars', 'icon' => 'calendar']
                    ],
                    'resourceTypes' => [
                        ['id' => 'all', 'label' => 'All Types', 'icon' => 'document'],
                        ['id' => 'guide', 'label' => 'Guides', 'icon' => 'document'],
                        ['id' => 'video', 'label' => 'Videos', 'icon' => 'play'],
                        ['id' => 'template', 'label' => 'Templates', 'icon' => 'template'],
                        ['id' => 'webinar', 'label' => 'Webinars', 'icon' => 'video'],
                        ['id' => 'case-study', 'label' => 'Case Studies', 'icon' => 'newspaper'],
                        ['id' => 'whitepaper', 'label' => 'Whitepapers', 'icon' => 'document']
                    ],
                    'topics' => [
                        ['id' => 'all', 'label' => 'All Topics'],
                        ['id' => 'ai', 'label' => 'AI & Machine Learning'],
                        ['id' => 'inventory', 'label' => 'Inventory Optimization'],
                        ['id' => 'warehouse', 'label' => 'Warehouse Management'],
                        ['id' => 'transportation', 'label' => 'Transportation'],
                        ['id' => 'sustainability', 'label' => 'Sustainability'],
                        ['id' => 'analytics', 'label' => 'Analytics']
                    ],
                    'stats' => [
                        ['value' => '100+', 'label' => 'Training Modules', 'icon' => 'academic', 'trend' => '+12', 'trendUp' => true],
                        ['value' => '50+', 'label' => 'Sales Tools', 'icon' => 'briefcase', 'trend' => '+8', 'trendUp' => true],
                        ['value' => '25+', 'label' => 'Case Studies', 'icon' => 'newspaper', 'trend' => '+5', 'trendUp' => true],
                        ['value' => '1000+', 'label' => 'Active Partners', 'icon' => 'users', 'trend' => '+150', 'trendUp' => true]
                    ],
                    'resources' => [
                        [
                            'id' => 'partner-onboarding',
                            'title' => 'Partner Onboarding Guide',
                            'category' => 'training',
                            'type' => 'guide',
                            'readTime' => '15 min read',
                            'views' => 2500,
                            'likes' => 45,
                            'date' => '2024-01-15',
                            'topics' => ['inventory', 'warehouse'],
                            'description' => 'Complete onboarding guide for new partners covering program benefits, requirements, and getting started steps.',
                            'content' => 'This comprehensive guide walks you through the entire partner onboarding process, from signing the agreement to completing your first joint sale.',
                            'tags' => ['onboarding', 'getting started', 'training'],
                            'image' => 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop',
                            'link' => '/resources/partner-onboarding-guide',
                            'downloadable' => true
                        ],
                        [
                            'id' => 'sales-deck',
                            'title' => 'SupplyChainPro Sales Deck',
                            'category' => 'sales',
                            'type' => 'template',
                            'readTime' => '10 min read',
                            'views' => 1800,
                            'likes' => 32,
                            'date' => '2024-02-10',
                            'topics' => ['analytics'],
                            'description' => 'Customizable sales presentation template for partners to pitch SupplyChainPro solutions to prospects.',
                            'content' => 'Includes value proposition slides, competitive differentiators, customer success stories, and pricing models.',
                            'tags' => ['sales', 'presentation', 'template'],
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
                            'link' => '/resources/sales-deck',
                            'downloadable' => true
                        ],
                        [
                            'id' => 'api-video',
                            'title' => 'API Integration Tutorial',
                            'category' => 'technical',
                            'type' => 'video',
                            'readTime' => '25 min watch',
                            'views' => 3200,
                            'likes' => 67,
                            'date' => '2024-01-20',
                            'topics' => ['ai', 'analytics'],
                            'description' => 'Step-by-step video tutorial on integrating your systems with SupplyChainPro REST APIs.',
                            'content' => 'Covers authentication, making API calls, handling webhooks, and best practices for error handling.',
                            'tags' => ['api', 'integration', 'tutorial'],
                            'image' => 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
                            'link' => '/resources/api-tutorial',
                            'downloadable' => false
                        ],
                        [
                            'id' => 'retail-case-study',
                            'title' => 'Retail Supply Chain Transformation',
                            'category' => 'collateral',
                            'type' => 'case-study',
                            'readTime' => '8 min read',
                            'views' => 1200,
                            'likes' => 28,
                            'date' => '2024-02-01',
                            'topics' => ['inventory', 'transportation'],
                            'description' => 'How ABC Retail achieved 30% inventory reduction and 99% on-time delivery using SupplyChainPro.',
                            'content' => 'Case study detailing the challenges, solution implementation, and measurable results achieved.',
                            'tags' => ['retail', 'inventory', 'case study'],
                            'image' => 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=600&h=400&fit=crop',
                            'link' => '/resources/retail-case-study',
                            'downloadable' => true
                        ],
                        [
                            'id' => 'whitepaper-ai',
                            'title' => 'AI in Supply Chain Whitepaper',
                            'category' => 'training',
                            'type' => 'whitepaper',
                            'readTime' => '20 min read',
                            'views' => 950,
                            'likes' => 19,
                            'date' => '2024-01-05',
                            'topics' => ['ai', 'sustainability'],
                            'description' => 'Explore how artificial intelligence is transforming supply chain operations and forecasting.',
                            'content' => 'In-depth analysis of AI applications in demand forecasting, inventory optimization, and logistics planning.',
                            'tags' => ['ai', 'machine learning', 'whitepaper'],
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
                            'link' => '/resources/ai-whitepaper',
                            'downloadable' => true
                        ],
                        [
                            'id' => 'marketing-kit',
                            'title' => 'Partner Marketing Kit',
                            'category' => 'marketing',
                            'type' => 'template',
                            'readTime' => '12 min read',
                            'views' => 1500,
                            'likes' => 41,
                            'date' => '2024-02-12',
                            'topics' => ['analytics'],
                            'description' => 'Complete marketing toolkit including email templates, social media assets, and campaign guides.',
                            'content' => 'Ready-to-use marketing materials for co-branded campaigns, events, and lead generation.',
                            'tags' => ['marketing', 'campaign', 'templates'],
                            'image' => 'https://images.unsplash.com/photo-1557838923-2985c318be48?w=600&h=400&fit=crop',
                            'link' => '/resources/marketing-kit',
                            'downloadable' => true
                        ]
                    ],
                    'showNewsletter' => true,
                    'newsletter' => [
                        'title' => 'Get Resource Updates',
                        'description' => 'Subscribe to receive notifications about new resources, training opportunities, and partner updates.',
                        'disclaimer' => 'No spam, unsubscribe anytime. Get 1-2 emails per month.',
                        'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 467,
                'section_key' => 'partnerResources',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => 'Partner Resources',
                    'title' => [
                        'prefix' => 'Tools &',
                        'highlight' => 'Resources'
                    ],
                    'description' => 'Access a comprehensive library of training materials, sales tools, technical documentation, and marketing resources to help you succeed.',
                    'heroImage' => 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=500&fit=crop',
                    'autoPlayCarousel' => true,
                    'tabs' => [
                        ['id' => 'all', 'label' => 'All Resources', 'icon' => 'library'],
                        ['id' => 'featured', 'label' => 'Featured', 'icon' => 'star'],
                        ['id' => 'popular', 'label' => 'Popular', 'icon' => 'fire'],
                        ['id' => 'recent', 'label' => 'Recent', 'icon' => 'clock'],
                        ['id' => 'saved', 'label' => 'Saved', 'icon' => 'bookmark'],
                        ['id' => 'liked', 'label' => 'Liked', 'icon' => 'heart']
                    ],
                    'categories' => [
                        ['id' => 'all', 'label' => 'All Resources', 'icon' => 'document'],
                        ['id' => 'training', 'label' => 'Training & Certification', 'icon' => 'academic'],
                        ['id' => 'marketing', 'label' => 'Marketing & Sales', 'icon' => 'chart'],
                        ['id' => 'technical', 'label' => 'Technical Resources', 'icon' => 'code'],
                        ['id' => 'sales', 'label' => 'Sales Enablement', 'icon' => 'briefcase'],
                        ['id' => 'collateral', 'label' => 'Sales Collateral', 'icon' => 'document'],
                        ['id' => 'events', 'label' => 'Events & Webinars', 'icon' => 'calendar']
                    ],
                    'resourceTypes' => [
                        ['id' => 'all', 'label' => 'All Types', 'icon' => 'document'],
                        ['id' => 'guide', 'label' => 'Guides', 'icon' => 'document'],
                        ['id' => 'video', 'label' => 'Videos', 'icon' => 'play'],
                        ['id' => 'template', 'label' => 'Templates', 'icon' => 'template'],
                        ['id' => 'webinar', 'label' => 'Webinars', 'icon' => 'video'],
                        ['id' => 'case-study', 'label' => 'Case Studies', 'icon' => 'newspaper'],
                        ['id' => 'whitepaper', 'label' => 'Whitepapers', 'icon' => 'document']
                    ],
                    'stats' => [
                        ['value' => '100+', 'label' => 'Training Modules', 'icon' => 'academic'],
                        ['value' => '50+', 'label' => 'Sales Tools', 'icon' => 'briefcase'],
                        ['value' => '25+', 'label' => 'Case Studies', 'icon' => 'newspaper'],
                        ['value' => '1000+', 'label' => 'Active Partners', 'icon' => 'users']
                    ],
                    'featuredResources' => [
                        [
                            'id' => 'partner-onboarding',
                            'title' => 'Partner Onboarding Guide',
                            'category' => 'training',
                            'type' => 'guide',
                            'readTime' => '15 min read',
                            'views' => 2500,
                            'description' => 'Complete onboarding guide for new partners covering program benefits, requirements, and getting started steps.',
                            'content' => 'This comprehensive guide walks you through the entire partner onboarding process, from signing the agreement to completing your first joint sale.',
                            'image' => 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=500&fit=crop',
                            'link' => '/resources/partner-onboarding-guide',
                            'downloadable' => true,
                            'isFeatured' => true
                        ],
                        [
                            'id' => 'sales-deck',
                            'title' => 'SupplyChainPro Sales Deck',
                            'category' => 'sales',
                            'type' => 'template',
                            'readTime' => '10 min read',
                            'views' => 1800,
                            'description' => 'Customizable sales presentation template for partners to pitch SupplyChainPro solutions to prospects.',
                            'content' => 'Includes value proposition slides, competitive differentiators, customer success stories, and pricing models.',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
                            'link' => '/resources/sales-deck',
                            'downloadable' => true,
                            'isFeatured' => true
                        ],
                        [
                            'id' => 'api-tutorial',
                            'title' => 'API Integration Tutorial',
                            'category' => 'technical',
                            'type' => 'video',
                            'readTime' => '25 min watch',
                            'views' => 3200,
                            'description' => 'Step-by-step video tutorial on integrating your systems with SupplyChainPro REST APIs.',
                            'content' => 'Covers authentication, making API calls, handling webhooks, and best practices for error handling.',
                            'image' => 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop',
                            'link' => '/resources/api-tutorial',
                            'downloadable' => false,
                            'isFeatured' => true
                        ]
                    ],
                    'resources' => [
                        [
                            'id' => 'partner-onboarding',
                            'title' => 'Partner Onboarding Guide',
                            'category' => 'training',
                            'type' => 'guide',
                            'readTime' => '15 min read',
                            'views' => 2500,
                            'likes' => 45,
                            'date' => '2024-01-15',
                            'description' => 'Complete onboarding guide for new partners covering program benefits, requirements, and getting started steps.',
                            'content' => 'This comprehensive guide walks you through the entire partner onboarding process, from signing the agreement to completing your first joint sale.',
                            'tags' => ['onboarding', 'getting started', 'training'],
                            'image' => 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop',
                            'link' => '/resources/partner-onboarding-guide',
                            'downloadable' => true,
                            'isFeatured' => true
                        ],
                        [
                            'id' => 'sales-deck',
                            'title' => 'SupplyChainPro Sales Deck',
                            'category' => 'sales',
                            'type' => 'template',
                            'readTime' => '10 min read',
                            'views' => 1800,
                            'likes' => 32,
                            'date' => '2024-02-10',
                            'description' => 'Customizable sales presentation template for partners to pitch SupplyChainPro solutions to prospects.',
                            'content' => 'Includes value proposition slides, competitive differentiators, customer success stories, and pricing models.',
                            'tags' => ['sales', 'presentation', 'template'],
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
                            'link' => '/resources/sales-deck',
                            'downloadable' => true,
                            'isFeatured' => true
                        ],
                        [
                            'id' => 'api-tutorial',
                            'title' => 'API Integration Tutorial',
                            'category' => 'technical',
                            'type' => 'video',
                            'readTime' => '25 min watch',
                            'views' => 3200,
                            'likes' => 67,
                            'date' => '2024-01-20',
                            'description' => 'Step-by-step video tutorial on integrating your systems with SupplyChainPro REST APIs.',
                            'content' => 'Covers authentication, making API calls, handling webhooks, and best practices for error handling.',
                            'tags' => ['api', 'integration', 'tutorial'],
                            'image' => 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
                            'link' => '/resources/api-tutorial',
                            'downloadable' => false,
                            'isFeatured' => true
                        ],
                        [
                            'id' => 'retail-case-study',
                            'title' => 'Retail Supply Chain Transformation',
                            'category' => 'collateral',
                            'type' => 'case-study',
                            'readTime' => '8 min read',
                            'views' => 1200,
                            'likes' => 28,
                            'date' => '2024-02-01',
                            'description' => 'How ABC Retail achieved 30% inventory reduction and 99% on-time delivery using SupplyChainPro.',
                            'content' => 'Case study detailing the challenges, solution implementation, and measurable results achieved.',
                            'tags' => ['retail', 'inventory', 'case study'],
                            'image' => 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=600&h=400&fit=crop',
                            'link' => '/resources/retail-case-study',
                            'downloadable' => true
                        ],
                        [
                            'id' => 'ai-whitepaper',
                            'title' => 'AI in Supply Chain Whitepaper',
                            'category' => 'training',
                            'type' => 'whitepaper',
                            'readTime' => '20 min read',
                            'views' => 950,
                            'likes' => 19,
                            'date' => '2024-01-05',
                            'description' => 'Explore how artificial intelligence is transforming supply chain operations and forecasting.',
                            'content' => 'In-depth analysis of AI applications in demand forecasting, inventory optimization, and logistics planning.',
                            'tags' => ['ai', 'machine learning', 'whitepaper'],
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
                            'link' => '/resources/ai-whitepaper',
                            'downloadable' => true
                        ],
                        [
                            'id' => 'marketing-kit',
                            'title' => 'Partner Marketing Kit',
                            'category' => 'marketing',
                            'type' => 'template',
                            'readTime' => '12 min read',
                            'views' => 1500,
                            'likes' => 41,
                            'date' => '2024-02-12',
                            'description' => 'Complete marketing toolkit including email templates, social media assets, and campaign guides.',
                            'content' => 'Ready-to-use marketing materials for co-branded campaigns, events, and lead generation.',
                            'tags' => ['marketing', 'campaign', 'templates'],
                            'image' => 'https://images.unsplash.com/photo-1557838923-2985c318be48?w=600&h=400&fit=crop',
                            'link' => '/resources/marketing-kit',
                            'downloadable' => true
                        ],
                        [
                            'id' => 'demand-webinar',
                            'title' => 'Demand Forecasting Webinar',
                            'category' => 'events',
                            'type' => 'webinar',
                            'readTime' => '45 min watch',
                            'views' => 2100,
                            'likes' => 53,
                            'date' => '2024-01-25',
                            'description' => 'Recorded webinar on advanced demand forecasting techniques using SupplyChainPro analytics.',
                            'content' => 'Expert discussion on improving forecast accuracy and reducing stockouts with machine learning.',
                            'tags' => ['demand forecasting', 'webinar', 'analytics'],
                            'image' => 'https://images.unsplash.com/photo-1591115765375-520d72e17b25?w=600&h=400&fit=crop',
                            'link' => '/resources/demand-webinar',
                            'downloadable' => false
                        ]
                    ],
                    'showNewsletter' => true,
                    'newsletter' => [
                        'title' => 'Get Resource Updates',
                        'description' => 'Subscribe to receive notifications about new resources, training opportunities, and partner updates.',
                        'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 468,
                'section_key' => 'partnerResources',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],


            // Partner Directory Section 
            [
                'id' => 469,
                'section_key' => 'partnerDirectory',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => 'Partner Directory',
                    'title' => [
                        'prefix' => 'Find the',
                        'highlight' => 'Right Partner',
                        'suffix' => 'for Your Business'
                    ],
                    'description' => 'Discover trusted partners who can help you implement, integrate, and optimize SupplyChainPro solutions for your specific needs.',
                    'heroImage' => 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200&h=500&fit=crop',
                    'searchPlaceholder' => 'Search partners by name, expertise, or location...',
                    'programTypes' => [
                        ['id' => 'all', 'label' => 'All Partners', 'icon' => 'users'],
                        ['id' => 'technology', 'label' => 'Technology Partners', 'icon' => 'chip'],
                        ['id' => 'solution', 'label' => 'Solution Partners', 'icon' => 'briefcase'],
                        ['id' => 'consulting', 'label' => 'Consulting Partners', 'icon' => 'users'],
                        ['id' => 'reseller', 'label' => 'Reseller Partners', 'icon' => 'globe'],
                        ['id' => 'integration', 'label' => 'Integration Partners', 'icon' => 'code']
                    ],
                    'regions' => [
                        ['id' => 'all', 'label' => 'All Regions'],
                        ['id' => 'north-america', 'label' => 'North America'],
                        ['id' => 'europe', 'label' => 'Europe'],
                        ['id' => 'asia-pacific', 'label' => 'Asia Pacific'],
                        ['id' => 'latin-america', 'label' => 'Latin America'],
                        ['id' => 'middle-east', 'label' => 'Middle East'],
                        ['id' => 'africa', 'label' => 'Africa']
                    ],
                    'industries' => [
                        ['id' => 'all', 'label' => 'All Industries'],
                        ['id' => 'retail', 'label' => 'Retail'],
                        ['id' => 'manufacturing', 'label' => 'Manufacturing'],
                        ['id' => 'healthcare', 'label' => 'Healthcare'],
                        ['id' => 'logistics', 'label' => 'Logistics'],
                        ['id' => 'automotive', 'label' => 'Automotive'],
                        ['id' => 'consumer-goods', 'label' => 'Consumer Goods']
                    ],
                    'stats' => [
                        ['value' => '500+', 'label' => 'Global Partners', 'icon' => 'users'],
                        ['value' => '50+', 'label' => 'Countries', 'icon' => 'globe'],
                        ['value' => '1000+', 'label' => 'Successful Projects', 'icon' => 'trophy'],
                        ['value' => '95%', 'label' => 'Partner Satisfaction', 'icon' => 'star']
                    ],
                    'partners' => [
                        [
                            'id' => 'deloitte',
                            'name' => 'Deloitte Consulting',
                            'program' => 'consulting',
                            'region' => 'north-america',
                            'location' => 'New York, NY',
                            'industries' => ['manufacturing', 'retail', 'healthcare'],
                            'expertise' => ['Supply Chain Strategy', 'Digital Transformation', 'Operations Optimization', 'Risk Management'],
                            'rating' => 4.9,
                            'reviews' => 156,
                            'description' => 'Deloitte provides end-to-end supply chain consulting services, helping organizations optimize operations, reduce costs, and drive innovation through digital transformation.',
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
                            'program' => 'solution',
                            'region' => 'europe',
                            'location' => 'London, UK',
                            'industries' => ['retail', 'consumer-goods', 'logistics'],
                            'expertise' => ['Supply Chain Planning', 'Warehouse Automation', 'Transportation Management', 'Analytics'],
                            'rating' => 4.8,
                            'reviews' => 128,
                            'description' => 'Accenture delivers innovative supply chain solutions that combine strategy, technology, and operations to help clients become more resilient and efficient.',
                            'tags' => ['strategy', 'technology', 'operations'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/9/93/Accenture.svg',
                            'image' => 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
                            'link' => '/partners/accenture',
                            'contactEmail' => 'supplychain@accenture.com'
                        ],
                        [
                            'id' => 'pwc',
                            'name' => 'PwC',
                            'program' => 'consulting',
                            'region' => 'north-america',
                            'location' => 'Chicago, IL',
                            'industries' => ['healthcare', 'manufacturing', 'automotive'],
                            'expertise' => ['Supply Chain Risk', 'Compliance', 'Data Analytics', 'Procurement'],
                            'rating' => 4.7,
                            'reviews' => 98,
                            'description' => 'PwC helps healthcare organizations transform their supply chains with data-driven insights, risk management, and operational excellence.',
                            'tags' => ['healthcare', 'risk management', 'compliance'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/8/8a/PwC.svg',
                            'image' => 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop',
                            'link' => '/partners/pwc',
                            'contactEmail' => 'supplychain@pwc.com'
                        ],
                        [
                            'id' => 'kpmg',
                            'name' => 'KPMG',
                            'program' => 'consulting',
                            'region' => 'asia-pacific',
                            'location' => 'Singapore',
                            'industries' => ['logistics', 'retail', 'manufacturing'],
                            'expertise' => ['Network Optimization', 'Cost Reduction', 'Customer Service', 'Logistics'],
                            'rating' => 4.6,
                            'reviews' => 87,
                            'description' => 'KPMG provides integrated supply chain solutions that help logistics companies optimize networks, reduce costs, and improve customer service.',
                            'tags' => ['logistics', 'network optimization', 'customer service'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/1/1d/KPMG.svg',
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
                            'link' => '/partners/kpmg',
                            'contactEmail' => 'supplychain@kpmg.com'
                        ],
                        [
                            'id' => 'ey',
                            'name' => 'EY',
                            'program' => 'consulting',
                            'region' => 'europe',
                            'location' => 'Stuttgart, Germany',
                            'industries' => ['automotive', 'manufacturing', 'sustainability'],
                            'expertise' => ['Digital Supply Chain', 'Sustainability', 'Working Capital', 'Forecasting'],
                            'rating' => 4.7,
                            'reviews' => 112,
                            'description' => 'EY helps automotive manufacturers build resilient supply chains through digitalization, sustainability initiatives, and advanced analytics.',
                            'tags' => ['automotive', 'sustainability', 'digitalization'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Ernst_%26_Young_Logo.svg',
                            'image' => 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600&h=400&fit=crop',
                            'link' => '/partners/ey',
                            'contactEmail' => 'supplychain@ey.com'
                        ],
                        [
                            'id' => 'ibm',
                            'name' => 'IBM Consulting',
                            'program' => 'technology',
                            'region' => 'north-america',
                            'location' => 'Austin, TX',
                            'industries' => ['consumer-goods', 'retail', 'manufacturing'],
                            'expertise' => ['AI Solutions', 'Demand Forecasting', 'Blockchain', 'Cognitive Analytics'],
                            'rating' => 4.8,
                            'reviews' => 143,
                            'description' => 'IBM Consulting delivers AI-powered supply chain solutions that help consumer goods companies anticipate demand, optimize inventory, and enhance customer experiences.',
                            'tags' => ['ai', 'demand forecasting', 'consumer goods'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
                            'image' => 'https://images.unsplash.com/photo-1488229297570-58520851e868?w=600&h=400&fit=crop',
                            'link' => '/partners/ibm',
                            'contactEmail' => 'supplychain@ibm.com'
                        ]
                    ],
                    'ctaTitle' => 'Become a Partner',
                    'ctaDescription' => 'Join our global partner ecosystem and get listed in the partner directory. Reach thousands of potential customers.',
                    'ctaImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop',
                    'becomePartnerLink' => '/become-partner',
                    'showNewsletter' => true,
                    'newsletter' => [
                        'title' => 'Partner Updates',
                        'description' => 'Subscribe to receive updates about new partners, success stories, and partner program news.',
                        'disclaimer' => 'No spam, unsubscribe anytime. Get 1-2 emails per month.',
                        'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 470,
                'section_key' => 'partnerDirectory',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => 'Partner Directory',
                    'title' => [
                        'prefix' => 'Find the',
                        'highlight' => 'Right Partner'
                    ],
                    'description' => 'Discover trusted partners who can help you implement, integrate, and optimize SupplyChainPro solutions for your specific needs.',
                    'heroImage' => 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200&h=500&fit=crop',
                    'searchPlaceholder' => 'Search partners by name, expertise, or location...',
                    'defaultViewMode' => 'grid',
                    'programTypes' => [
                        ['id' => 'all', 'label' => 'All Partners', 'icon' => 'users'],
                        ['id' => 'technology', 'label' => 'Technology Partners', 'icon' => 'chip'],
                        ['id' => 'solution', 'label' => 'Solution Partners', 'icon' => 'briefcase'],
                        ['id' => 'consulting', 'label' => 'Consulting Partners', 'icon' => 'users'],
                        ['id' => 'reseller', 'label' => 'Reseller Partners', 'icon' => 'globe'],
                        ['id' => 'integration', 'label' => 'Integration Partners', 'icon' => 'code']
                    ],
                    'partnerTiers' => [
                        ['id' => 'all', 'label' => 'All Tiers', 'icon' => 'trophy'],
                        ['id' => 'premier', 'label' => 'Premier', 'icon' => 'star'],
                        ['id' => 'advanced', 'label' => 'Advanced', 'icon' => 'badge'],
                        ['id' => 'certified', 'label' => 'Certified', 'icon' => 'check']
                    ],
                    'regions' => [
                        ['id' => 'all', 'label' => 'All Regions'],
                        ['id' => 'north-america', 'label' => 'North America'],
                        ['id' => 'europe', 'label' => 'Europe'],
                        ['id' => 'asia-pacific', 'label' => 'Asia Pacific'],
                        ['id' => 'latin-america', 'label' => 'Latin America'],
                        ['id' => 'middle-east', 'label' => 'Middle East'],
                        ['id' => 'africa', 'label' => 'Africa']
                    ],
                    'industries' => [
                        ['id' => 'all', 'label' => 'All Industries'],
                        ['id' => 'retail', 'label' => 'Retail'],
                        ['id' => 'manufacturing', 'label' => 'Manufacturing'],
                        ['id' => 'healthcare', 'label' => 'Healthcare'],
                        ['id' => 'logistics', 'label' => 'Logistics'],
                        ['id' => 'automotive', 'label' => 'Automotive'],
                        ['id' => 'consumer-goods', 'label' => 'Consumer Goods']
                    ],
                    'stats' => [
                        ['value' => '500+', 'label' => 'Global Partners', 'icon' => 'users', 'trend' => '+15%', 'trendUp' => true],
                        ['value' => '50+', 'label' => 'Countries', 'icon' => 'globe', 'trend' => '+8', 'trendUp' => true],
                        ['value' => '1000+', 'label' => 'Successful Projects', 'icon' => 'trophy', 'trend' => '+200', 'trendUp' => true],
                        ['value' => '95%', 'label' => 'Partner Satisfaction', 'icon' => 'star', 'trend' => '+2%', 'trendUp' => true]
                    ],
                    'partners' => [
                        [
                            'id' => 'deloitte',
                            'name' => 'Deloitte Consulting',
                            'program' => 'consulting',
                            'tier' => 'premier',
                            'region' => 'north-america',
                            'location' => 'New York, NY',
                            'industries' => ['manufacturing', 'retail', 'healthcare'],
                            'expertise' => ['Supply Chain Strategy', 'Digital Transformation', 'Operations Optimization', 'Risk Management'],
                            'rating' => 4.9,
                            'reviews' => 156,
                            'description' => 'Deloitte provides end-to-end supply chain consulting services, helping organizations optimize operations, reduce costs, and drive innovation through digital transformation.',
                            'tags' => ['consulting', 'digital transformation', 'supply chain strategy'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Deloitte.svg',
                            'link' => '/partners/deloitte',
                            'contactEmail' => 'supplychain@deloitte.com',
                            'image' => 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
                            'isFeatured' => true
                        ],
                        [
                            'id' => 'accenture',
                            'name' => 'Accenture',
                            'program' => 'solution',
                            'tier' => 'premier',
                            'region' => 'europe',
                            'location' => 'London, UK',
                            'industries' => ['retail', 'consumer-goods', 'logistics'],
                            'expertise' => ['Supply Chain Planning', 'Warehouse Automation', 'Transportation Management', 'Analytics'],
                            'rating' => 4.8,
                            'reviews' => 128,
                            'description' => 'Accenture delivers innovative supply chain solutions that combine strategy, technology, and operations to help clients become more resilient and efficient.',
                            'tags' => ['strategy', 'technology', 'operations'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/9/93/Accenture.svg',
                            'link' => '/partners/accenture',
                            'contactEmail' => 'supplychain@accenture.com',
                            'image' => 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
                            'isFeatured' => true
                        ],
                        [
                            'id' => 'pwc',
                            'name' => 'PwC',
                            'program' => 'consulting',
                            'tier' => 'premier',
                            'region' => 'north-america',
                            'location' => 'Chicago, IL',
                            'industries' => ['healthcare', 'manufacturing', 'automotive'],
                            'expertise' => ['Supply Chain Risk', 'Compliance', 'Data Analytics', 'Procurement'],
                            'rating' => 4.7,
                            'reviews' => 98,
                            'description' => 'PwC helps healthcare organizations transform their supply chains with data-driven insights, risk management, and operational excellence.',
                            'tags' => ['healthcare', 'risk management', 'compliance'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/8/8a/PwC.svg',
                            'link' => '/partners/pwc',
                            'contactEmail' => 'supplychain@pwc.com',
                            'image' => 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'kpmg',
                            'name' => 'KPMG',
                            'program' => 'consulting',
                            'tier' => 'advanced',
                            'region' => 'asia-pacific',
                            'location' => 'Singapore',
                            'industries' => ['logistics', 'retail', 'manufacturing'],
                            'expertise' => ['Network Optimization', 'Cost Reduction', 'Customer Service', 'Logistics'],
                            'rating' => 4.6,
                            'reviews' => 87,
                            'description' => 'KPMG provides integrated supply chain solutions that help logistics companies optimize networks, reduce costs, and improve customer service.',
                            'tags' => ['logistics', 'network optimization', 'customer service'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/1/1d/KPMG.svg',
                            'link' => '/partners/kpmg',
                            'contactEmail' => 'supplychain@kpmg.com',
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'ey',
                            'name' => 'EY',
                            'program' => 'consulting',
                            'tier' => 'advanced',
                            'region' => 'europe',
                            'location' => 'Stuttgart, Germany',
                            'industries' => ['automotive', 'manufacturing', 'sustainability'],
                            'expertise' => ['Digital Supply Chain', 'Sustainability', 'Working Capital', 'Forecasting'],
                            'rating' => 4.7,
                            'reviews' => 112,
                            'description' => 'EY helps automotive manufacturers build resilient supply chains through digitalization, sustainability initiatives, and advanced analytics.',
                            'tags' => ['automotive', 'sustainability', 'digitalization'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Ernst_%26_Young_Logo.svg',
                            'link' => '/partners/ey',
                            'contactEmail' => 'supplychain@ey.com',
                            'image' => 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'ibm',
                            'name' => 'IBM Consulting',
                            'program' => 'technology',
                            'tier' => 'certified',
                            'region' => 'north-america',
                            'location' => 'Austin, TX',
                            'industries' => ['consumer-goods', 'retail', 'manufacturing'],
                            'expertise' => ['AI Solutions', 'Demand Forecasting', 'Blockchain', 'Cognitive Analytics'],
                            'rating' => 4.8,
                            'reviews' => 143,
                            'description' => 'IBM Consulting delivers AI-powered supply chain solutions that help consumer goods companies anticipate demand, optimize inventory, and enhance customer experiences.',
                            'tags' => ['ai', 'demand forecasting', 'consumer goods'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
                            'link' => '/partners/ibm',
                            'contactEmail' => 'supplychain@ibm.com',
                            'image' => 'https://images.unsplash.com/photo-1488229297570-58520851e868?w=600&h=400&fit=crop'
                        ]
                    ],
                    'showNewsletter' => true,
                    'newsletter' => [
                        'title' => 'Partner Updates',
                        'description' => 'Subscribe to receive updates about new partners, success stories, and partner program news.',
                        'disclaimer' => 'No spam, unsubscribe anytime. Get 1-2 emails per month.',
                        'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 471,
                'section_key' => 'partnerDirectory',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => 'Partner Directory',
                    'title' => [
                        'prefix' => 'Find the',
                        'highlight' => 'Right Partner'
                    ],
                    'description' => 'Discover trusted partners who can help you implement, integrate, and optimize SupplyChainPro solutions for your specific needs.',
                    'heroImage' => 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200&h=500&fit=crop',
                    'autoPlayCarousel' => true,
                    'tabs' => [
                        ['id' => 'all', 'label' => 'All Partners', 'icon' => 'users'],
                        ['id' => 'featured', 'label' => 'Featured', 'icon' => 'star'],
                        ['id' => 'top-rated', 'label' => 'Top Rated', 'icon' => 'trophy'],
                        ['id' => 'saved', 'label' => 'Saved', 'icon' => 'bookmark']
                    ],
                    'programTypes' => [
                        ['id' => 'all', 'label' => 'All Partners', 'icon' => 'users'],
                        ['id' => 'technology', 'label' => 'Technology Partners', 'icon' => 'chip'],
                        ['id' => 'solution', 'label' => 'Solution Partners', 'icon' => 'briefcase'],
                        ['id' => 'consulting', 'label' => 'Consulting Partners', 'icon' => 'users'],
                        ['id' => 'reseller', 'label' => 'Reseller Partners', 'icon' => 'globe'],
                        ['id' => 'integration', 'label' => 'Integration Partners', 'icon' => 'code']
                    ],
                    'regions' => [
                        ['id' => 'all', 'label' => 'All Regions'],
                        ['id' => 'north-america', 'label' => 'North America'],
                        ['id' => 'europe', 'label' => 'Europe'],
                        ['id' => 'asia-pacific', 'label' => 'Asia Pacific'],
                        ['id' => 'latin-america', 'label' => 'Latin America'],
                        ['id' => 'middle-east', 'label' => 'Middle East'],
                        ['id' => 'africa', 'label' => 'Africa']
                    ],
                    'industries' => [
                        ['id' => 'all', 'label' => 'All Industries'],
                        ['id' => 'retail', 'label' => 'Retail'],
                        ['id' => 'manufacturing', 'label' => 'Manufacturing'],
                        ['id' => 'healthcare', 'label' => 'Healthcare'],
                        ['id' => 'logistics', 'label' => 'Logistics'],
                        ['id' => 'automotive', 'label' => 'Automotive'],
                        ['id' => 'consumer-goods', 'label' => 'Consumer Goods']
                    ],
                    'stats' => [
                        ['value' => '500+', 'label' => 'Global Partners', 'icon' => 'users'],
                        ['value' => '50+', 'label' => 'Countries', 'icon' => 'globe'],
                        ['value' => '1000+', 'label' => 'Successful Projects', 'icon' => 'trophy'],
                        ['value' => '95%', 'label' => 'Partner Satisfaction', 'icon' => 'star']
                    ],
                    'featuredPartners' => [
                        [
                            'id' => 'deloitte',
                            'name' => 'Deloitte Consulting',
                            'program' => 'consulting',
                            'tier' => 'premier',
                            'isCertified' => true,
                            'region' => 'north-america',
                            'location' => 'New York, NY',
                            'rating' => 4.9,
                            'reviews' => 156,
                            'description' => 'Deloitte provides end-to-end supply chain consulting services, helping organizations optimize operations, reduce costs, and drive innovation through digital transformation.',
                            'expertise' => ['Supply Chain Strategy', 'Digital Transformation', 'Operations Optimization'],
                            'industries' => ['manufacturing', 'retail', 'healthcare'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Deloitte.svg',
                            'image' => 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop',
                            'link' => '/partners/deloitte',
                            'isFeatured' => true
                        ],
                        [
                            'id' => 'accenture',
                            'name' => 'Accenture',
                            'program' => 'solution',
                            'tier' => 'premier',
                            'isCertified' => true,
                            'region' => 'europe',
                            'location' => 'London, UK',
                            'rating' => 4.8,
                            'reviews' => 128,
                            'description' => 'Accenture delivers innovative supply chain solutions that combine strategy, technology, and operations to help clients become more resilient and efficient.',
                            'expertise' => ['Supply Chain Planning', 'Warehouse Automation', 'Analytics'],
                            'industries' => ['retail', 'consumer-goods'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/9/93/Accenture.svg',
                            'image' => 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop',
                            'link' => '/partners/accenture',
                            'isFeatured' => true
                        ],
                        [
                            'id' => 'pwc',
                            'name' => 'PwC',
                            'program' => 'consulting',
                            'tier' => 'premier',
                            'isCertified' => true,
                            'region' => 'north-america',
                            'location' => 'Chicago, IL',
                            'rating' => 4.7,
                            'reviews' => 98,
                            'description' => 'PwC helps healthcare organizations transform their supply chains with data-driven insights, risk management, and operational excellence.',
                            'expertise' => ['Supply Chain Risk', 'Compliance', 'Data Analytics'],
                            'industries' => ['healthcare', 'manufacturing'],
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
                            'program' => 'consulting',
                            'tier' => 'premier',
                            'isCertified' => true,
                            'region' => 'north-america',
                            'location' => 'New York, NY',
                            'industries' => ['manufacturing', 'retail', 'healthcare'],
                            'expertise' => ['Supply Chain Strategy', 'Digital Transformation', 'Operations Optimization', 'Risk Management'],
                            'rating' => 4.9,
                            'reviews' => 156,
                            'description' => 'Deloitte provides end-to-end supply chain consulting services, helping organizations optimize operations, reduce costs, and drive innovation through digital transformation.',
                            'tags' => ['consulting', 'digital transformation', 'supply chain strategy'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Deloitte.svg',
                            'image' => 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
                            'link' => '/partners/deloitte',
                            'isFeatured' => true
                        ],
                        [
                            'id' => 'accenture',
                            'name' => 'Accenture',
                            'program' => 'solution',
                            'tier' => 'premier',
                            'isCertified' => true,
                            'region' => 'europe',
                            'location' => 'London, UK',
                            'industries' => ['retail', 'consumer-goods', 'logistics'],
                            'expertise' => ['Supply Chain Planning', 'Warehouse Automation', 'Transportation Management', 'Analytics'],
                            'rating' => 4.8,
                            'reviews' => 128,
                            'description' => 'Accenture delivers innovative supply chain solutions that combine strategy, technology, and operations to help clients become more resilient and efficient.',
                            'tags' => ['strategy', 'technology', 'operations'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/9/93/Accenture.svg',
                            'image' => 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
                            'link' => '/partners/accenture',
                            'isFeatured' => true
                        ],
                        [
                            'id' => 'pwc',
                            'name' => 'PwC',
                            'program' => 'consulting',
                            'tier' => 'premier',
                            'isCertified' => true,
                            'region' => 'north-america',
                            'location' => 'Chicago, IL',
                            'industries' => ['healthcare', 'manufacturing', 'automotive'],
                            'expertise' => ['Supply Chain Risk', 'Compliance', 'Data Analytics', 'Procurement'],
                            'rating' => 4.7,
                            'reviews' => 98,
                            'description' => 'PwC helps healthcare organizations transform their supply chains with data-driven insights, risk management, and operational excellence.',
                            'tags' => ['healthcare', 'risk management', 'compliance'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/8/8a/PwC.svg',
                            'image' => 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop',
                            'link' => '/partners/pwc',
                            'isFeatured' => true
                        ],
                        [
                            'id' => 'kpmg',
                            'name' => 'KPMG',
                            'program' => 'consulting',
                            'tier' => 'advanced',
                            'isCertified' => true,
                            'region' => 'asia-pacific',
                            'location' => 'Singapore',
                            'industries' => ['logistics', 'retail', 'manufacturing'],
                            'expertise' => ['Network Optimization', 'Cost Reduction', 'Customer Service', 'Logistics'],
                            'rating' => 4.6,
                            'reviews' => 87,
                            'description' => 'KPMG provides integrated supply chain solutions that help logistics companies optimize networks, reduce costs, and improve customer service.',
                            'tags' => ['logistics', 'network optimization', 'customer service'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/1/1d/KPMG.svg',
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
                            'link' => '/partners/kpmg'
                        ],
                        [
                            'id' => 'ey',
                            'name' => 'EY',
                            'program' => 'consulting',
                            'tier' => 'advanced',
                            'isCertified' => true,
                            'region' => 'europe',
                            'location' => 'Stuttgart, Germany',
                            'industries' => ['automotive', 'manufacturing', 'sustainability'],
                            'expertise' => ['Digital Supply Chain', 'Sustainability', 'Working Capital', 'Forecasting'],
                            'rating' => 4.7,
                            'reviews' => 112,
                            'description' => 'EY helps automotive manufacturers build resilient supply chains through digitalization, sustainability initiatives, and advanced analytics.',
                            'tags' => ['automotive', 'sustainability', 'digitalization'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Ernst_%26_Young_Logo.svg',
                            'image' => 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600&h=400&fit=crop',
                            'link' => '/partners/ey'
                        ],
                        [
                            'id' => 'ibm',
                            'name' => 'IBM Consulting',
                            'program' => 'technology',
                            'tier' => 'certified',
                            'isCertified' => true,
                            'region' => 'north-america',
                            'location' => 'Austin, TX',
                            'industries' => ['consumer-goods', 'retail', 'manufacturing'],
                            'expertise' => ['AI Solutions', 'Demand Forecasting', 'Blockchain', 'Cognitive Analytics'],
                            'rating' => 4.8,
                            'reviews' => 143,
                            'description' => 'IBM Consulting delivers AI-powered supply chain solutions that help consumer goods companies anticipate demand, optimize inventory, and enhance customer experiences.',
                            'tags' => ['ai', 'demand forecasting', 'consumer goods'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
                            'image' => 'https://images.unsplash.com/photo-1488229297570-58520851e868?w=600&h=400&fit=crop',
                            'link' => '/partners/ibm'
                        ]
                    ],
                    'showNewsletter' => true,
                    'newsletter' => [
                        'title' => 'Partner Updates',
                        'description' => 'Subscribe to receive updates about new partners, success stories, and partner program news.',
                        'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 472,
                'section_key' => 'partnerDirectory',
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
