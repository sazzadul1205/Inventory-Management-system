<?php

namespace Database\Seeders\PageRelatedSeeders;


use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class IndustriesPageSectionVariantSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Upsert only this page's variants so other page seeders do not get wiped out.
        $variants = [
            // E-Commerce & Retail Section
            [
                'id' => 173,
                'section_key' => 'eCommerceAndRetail',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Industry Focus',
                        'backgroundColor' => 'bg-orange-50 dark:bg-orange-900/30',
                        'borderColor' => 'border-orange-200 dark:border-orange-800',
                        'textColor' => 'text-orange-700 dark:text-orange-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'E-Commerce &',
                        'highlightedText' => 'Retail Solutions',
                        'suffix' => '',
                        'highlightGradient' => 'from-orange-500 to-amber-500'
                    ],
                    'description' => 'Powerful inventory management and barcode scanning solutions tailored for modern retail and e-commerce businesses.',
                    'initialTab' => 'overview',
                    'showStats' => true,
                    'stats' => [
                        ['icon' => 'bag', 'value' => '500+', 'label' => 'Retailers Served'],
                        ['icon' => 'star', 'value' => '98%', 'label' => 'Satisfaction Rate'],
                        ['icon' => 'dollar', 'value' => '30%', 'label' => 'Cost Reduction'],
                        ['icon' => 'trending', 'value' => '2.5x', 'label' => 'Avg. ROI']
                    ],
                    'overview' => [
                        'title' => 'Transform Your Retail Operations',
                        'description' => 'Our platform helps retailers and e-commerce businesses streamline inventory management, reduce costs, and improve customer satisfaction with real-time barcode scanning and analytics.',
                        'highlights' => [
                            'Real-time inventory tracking across all channels',
                            'Automated reordering to prevent stockouts',
                            'Multi-location sync and management',
                            'Integrated POS and e-commerce platforms',
                            'Advanced analytics and demand forecasting'
                        ],
                        'ctaText' => 'Explore Solutions',
                        'ctaLink' => '/solutions/retail',
                        'statsCards' => [
                            ['value' => '50+', 'label' => 'Integrations'],
                            ['value' => '99.9%', 'label' => 'Scan Accuracy'],
                            ['value' => '24/7', 'label' => 'Support'],
                            ['value' => '500+', 'label' => 'Happy Clients']
                        ]
                    ],
                    'challenges' => [
                        [
                            'icon' => 'truck',
                            'title' => 'Inventory Discrepancies',
                            'description' => 'Manual tracking leads to stockouts, overstock, and lost revenue. Real-time visibility is essential for modern retail.'
                        ],
                        [
                            'icon' => 'clock',
                            'title' => 'Slow Order Fulfillment',
                            'description' => 'Customers expect fast shipping. Delayed processing leads to abandoned carts and lost sales.'
                        ],
                        [
                            'icon' => 'database',
                            'title' => 'Multi-channel Complexity',
                            'description' => 'Managing inventory across online and offline channels creates synchronization challenges.'
                        ],
                        [
                            'icon' => 'chart',
                            'title' => 'Data Silos',
                            'description' => 'Disconnected systems prevent accurate forecasting and business intelligence.'
                        ],
                        [
                            'icon' => 'shield',
                            'title' => 'Shrinkage & Theft',
                            'description' => 'Lack of tracking visibility leads to inventory shrinkage and revenue loss.'
                        ],
                        [
                            'icon' => 'users',
                            'title' => 'Staff Training Costs',
                            'description' => 'Complex systems require extensive training, increasing operational expenses.'
                        ]
                    ],
                    'solutions' => [
                        [
                            'icon' => 'qrcode',
                            'title' => 'Smart Barcode Scanning',
                            'description' => 'Fast, accurate scanning with support for 50+ barcode formats. Batch scanning and real-time validation.',
                            'features' => [
                                '50+ barcode formats supported',
                                'Batch scanning mode',
                                'Real-time validation',
                                'Mobile and desktop compatible'
                            ]
                        ],
                        [
                            'icon' => 'cloud',
                            'title' => 'Unified Inventory Management',
                            'description' => 'Centralize inventory across all sales channels with real-time synchronization.',
                            'features' => [
                                'Multi-location sync',
                                'Automated reordering',
                                'Stock alerts',
                                'Transfer management'
                            ]
                        ],
                        [
                            'icon' => 'chart',
                            'title' => 'Advanced Analytics',
                            'description' => 'Data-driven insights to optimize inventory levels and forecast demand.',
                            'features' => [
                                'Demand forecasting',
                                'Sales analytics',
                                'Inventory optimization',
                                'Performance dashboards'
                            ]
                        ],
                        [
                            'icon' => 'refresh',
                            'title' => 'Automated Workflows',
                            'description' => 'Reduce manual work with intelligent automation and business rules.',
                            'features' => [
                                'Automated reordering',
                                'Price updates',
                                'Stock transfers',
                                'Supplier integration'
                            ]
                        ],
                        [
                            'icon' => 'chip',
                            'title' => 'AI-Powered Insights',
                            'description' => 'Leverage machine learning to predict trends and optimize operations.',
                            'features' => [
                                'Trend prediction',
                                'Anomaly detection',
                                'Smart recommendations',
                                'Inventory optimization'
                            ]
                        ],
                        [
                            'icon' => 'shield',
                            'title' => 'Enterprise Security',
                            'description' => 'Bank-grade security with compliance for retail and e-commerce.',
                            'features' => [
                                '256-bit encryption',
                                'Role-based access',
                                'Audit logging',
                                'PCI compliant'
                            ]
                        ]
                    ],
                    'showFeatures' => true,
                    'features' => [
                        'title' => 'Why E-Commerce & Retail Leaders Choose Us',
                        'items' => [
                            ['icon' => 'clock', 'title' => 'Real-time Sync'],
                            ['icon' => 'qrcode', 'title' => 'Fast Scanning'],
                            ['icon' => 'chart', 'title' => 'Analytics'],
                            ['icon' => 'cloud', 'title' => 'Cloud-based'],
                            ['icon' => 'shield', 'title' => 'Secure'],
                            ['icon' => 'users', 'title' => '24/7 Support'],
                            ['icon' => 'trending', 'title' => 'Scalable'],
                            ['icon' => 'database', 'title' => 'Integrations']
                        ]
                    ],
                    'showSuccessMetrics' => true,
                    'successMetrics' => [
                        ['icon' => 'trending', 'value' => '287%', 'label' => 'Average ROI'],
                        ['icon' => 'clock', 'value' => '67%', 'label' => 'Faster Fulfillment'],
                        ['icon' => 'star', 'value' => '98%', 'label' => 'Customer Satisfaction'],
                        ['icon' => 'dollar', 'value' => '$1.2M', 'label' => 'Avg. Annual Savings']
                    ],
                    'showCta' => true,
                    'ctaText' => 'Ready to transform your retail operations?',
                    'ctaButtonText' => 'Get Started Today',
                    'ctaLink' => '/demo'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 174,
                'section_key' => 'eCommerceAndRetail',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Success Stories',
                        'backgroundColor' => 'bg-orange-50 dark:bg-orange-900/30',
                        'borderColor' => 'border-orange-200 dark:border-orange-800',
                        'textColor' => 'text-orange-700 dark:text-orange-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Retail',
                        'highlightedText' => 'Success Stories',
                        'suffix' => '',
                        'highlightGradient' => 'from-orange-500 to-amber-500'
                    ],
                    'description' => 'See how retailers and e-commerce businesses are transforming their operations with our solutions.',
                    'initialIndex' => 0,
                    'autoplay' => true,
                    'autoplayInterval' => 6000,
                    'caseStudies' => [
                        [
                            'id' => 'fashion-retail',
                            'icon' => 'bag',
                            'company' => 'FashionHub Retail',
                            'location' => 'New York, NY',
                            'industry' => 'Fashion Retail',
                            'keyResult' => ['value' => '78%', 'label' => 'Stockout Reduction'],
                            'results' => [
                                ['value' => '78%', 'label' => 'Stockout Reduction'],
                                ['value' => '99.7%', 'label' => 'Inventory Accuracy'],
                                ['value' => '$1.2M', 'label' => 'Annual Savings'],
                                ['value' => '3x', 'label' => 'ROI']
                            ],
                            'challenge' => 'FashionHub was struggling with inventory accuracy across 45 store locations and their e-commerce platform. Manual tracking led to frequent stockouts during peak seasons and overstock of slow-moving items, costing millions in lost revenue.',
                            'solution' => 'Implemented our unified inventory management platform with real-time barcode scanning, automated reordering, and multi-channel sync. Integrated with their existing POS and Shopify store within 4 weeks.',
                            'testimonial' => [
                                'quote' => 'The platform transformed our inventory management. We\'ve seen dramatic improvements in efficiency and accuracy across all locations. Stockouts are virtually eliminated.',
                                'author' => 'Sarah Johnson',
                                'role' => 'Operations Director'
                            ],
                            'downloadLink' => '/case-studies/fashionhub/download',
                            'videoLink' => '/case-studies/fashionhub/video'
                        ],
                        [
                            'id' => 'electronics-express',
                            'icon' => 'chip',
                            'company' => 'Electronics Express',
                            'location' => 'Los Angeles, CA',
                            'industry' => 'Electronics Retail',
                            'keyResult' => ['value' => '65%', 'label' => 'Faster Fulfillment'],
                            'results' => [
                                ['value' => '65%', 'label' => 'Faster Fulfillment'],
                                ['value' => '99.9%', 'label' => 'Scan Accuracy'],
                                ['value' => '$850K', 'label' => 'Annual Savings'],
                                ['value' => '2.5x', 'label' => 'ROI']
                            ],
                            'challenge' => 'Electronics Express faced challenges with order fulfillment speed during high-volume sales events. Manual scanning processes caused bottlenecks and customer complaints about delayed shipments.',
                            'solution' => 'Deployed our automated scanning solution with batch processing, real-time validation, and integration with their warehouse management system. Implemented mobile scanners for all warehouse staff.',
                            'testimonial' => [
                                'quote' => 'Processing time has been cut by over 60% and our error rate is virtually zero. This has been a game-changer during Black Friday and holiday seasons.',
                                'author' => 'Mike Chen',
                                'role' => 'Warehouse Manager'
                            ],
                            'downloadLink' => '/case-studies/electronics/download',
                            'videoLink' => '/case-studies/electronics/video'
                        ],
                        [
                            'id' => 'gourmet-market',
                            'icon' => 'truck',
                            'company' => 'Gourmet Market',
                            'location' => 'Chicago, IL',
                            'industry' => 'Grocery Retail',
                            'keyResult' => ['value' => '99.9%', 'label' => 'Traceability'],
                            'results' => [
                                ['value' => '99.9%', 'label' => 'Traceability'],
                                ['value' => '$450K', 'label' => 'Annual Savings'],
                                ['value' => '35%', 'label' => 'Waste Reduction'],
                                ['value' => '2.8x', 'label' => 'ROI']
                            ],
                            'challenge' => 'Managing perishable inventory across 30 grocery stores was complex. Expiration tracking was manual, leading to waste and compliance risks. Inventory discrepancies were common.',
                            'solution' => 'Implemented our traceability solution with expiration tracking, automated alerts, and real-time inventory visibility. Integrated with existing POS and supply chain systems.',
                            'testimonial' => [
                                'quote' => 'We now have complete visibility into our supply chain. Expiration tracking has saved us thousands in waste, and our compliance reporting is now automated.',
                                'author' => 'Emily Rodriguez',
                                'role' => 'Supply Chain Director'
                            ],
                            'downloadLink' => '/case-studies/gourmet/download',
                            'videoLink' => '/case-studies/gourmet/video'
                        ]
                    ],
                    'showAdditionalCases' => true,
                    'additionalCasesTitle' => 'More Success Stories',
                    'additionalCases' => [
                        [
                            'icon' => 'bag',
                            'company' => 'StyleZone',
                            'industry' => 'Apparel',
                            'result' => '87%',
                            'resultLabel' => 'Faster Restocking',
                            'description' => 'Reduced restocking time from days to hours with automated inventory tracking.',
                            'link' => '/case-studies/stylezone'
                        ],
                        [
                            'icon' => 'truck',
                            'company' => 'HomeGoods Direct',
                            'industry' => 'Home Decor',
                            'result' => '$2.1M',
                            'resultLabel' => 'Saved Annually',
                            'description' => 'Optimized inventory levels across 25 warehouses, reducing carrying costs significantly.',
                            'link' => '/case-studies/homegoods'
                        ],
                        [
                            'icon' => 'database',
                            'company' => 'TechGadgets',
                            'industry' => 'Electronics',
                            'result' => '99.5%',
                            'resultLabel' => 'Order Accuracy',
                            'description' => 'Achieved near-perfect order accuracy with real-time validation and scanning.',
                            'link' => '/case-studies/techgadgets'
                        ]
                    ],
                    'showROI' => true,
                    'roiSavings' => '25-35%',
                    'roiTurnover' => '2-3x',
                    'roiPayback' => '4-6',
                    'roiLink' => '/roi-calculator?industry=retail',
                    'showIntegrations' => true,
                    'integrationsTitle' => 'Seamlessly integrates with your retail stack',
                    'integrations' => [
                        ['icon' => 'cloud', 'name' => 'Shopify'],
                        ['icon' => 'database', 'name' => 'Salesforce'],
                        ['icon' => 'truck', 'name' => 'ShipStation'],
                        ['icon' => 'chart', 'name' => 'QuickBooks'],
                        ['icon' => 'shield', 'name' => 'Stripe'],
                        ['icon' => 'bag', 'name' => 'Magento']
                    ],
                    'showCta' => true,
                    'ctaText' => 'Ready to write your own success story?',
                    'ctaButtonText' => 'Start Your Journey',
                    'ctaLink' => '/demo'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 175,
                'section_key' => 'eCommerceAndRetail',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Features & FAQ',
                        'backgroundColor' => 'bg-orange-50 dark:bg-orange-900/30',
                        'borderColor' => 'border-orange-200 dark:border-orange-800',
                        'textColor' => 'text-orange-700 dark:text-orange-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Everything You',
                        'highlightedText' => 'Need to Succeed',
                        'suffix' => '',
                        'highlightGradient' => 'from-orange-500 to-amber-500'
                    ],
                    'description' => 'Comprehensive retail solutions designed to streamline operations, reduce costs, and boost profitability.',
                    'initialFeature' => 0,
                    'showFeatureGrid' => true,
                    'benefits' => [
                        ['icon' => 'trending', 'value' => '287%', 'label' => 'Average ROI'],
                        ['icon' => 'clock', 'value' => '67%', 'label' => 'Faster Fulfillment'],
                        ['icon' => 'dollar', 'value' => '$1.2M', 'label' => 'Avg. Annual Savings'],
                        ['icon' => 'star', 'value' => '98%', 'label' => 'Customer Satisfaction']
                    ],
                    'features' => [
                        [
                            'icon' => 'qrcode',
                            'title' => 'Smart Barcode Scanning',
                            'shortDescription' => 'Fast, accurate scanning',
                            'description' => 'Our advanced barcode scanning technology supports 50+ formats with near-perfect accuracy. Batch scanning and real-time validation ensure efficient inventory management.',
                            'capabilities' => [
                                '50+ barcode formats supported',
                                '99.9% scan accuracy rate',
                                'Batch scanning mode',
                                'Real-time validation',
                                'Mobile and desktop compatible'
                            ],
                            'link' => '/features/barcode-scanning'
                        ],
                        [
                            'icon' => 'cloud',
                            'title' => 'Multi-Channel Sync',
                            'shortDescription' => 'Unified inventory across channels',
                            'description' => 'Synchronize inventory across all your sales channels - online stores, physical locations, and marketplaces - in real-time to prevent stockouts and overselling.',
                            'capabilities' => [
                                'Real-time inventory sync',
                                'Multi-location management',
                                'Automated reordering',
                                'Stock alerts',
                                'Transfer management'
                            ],
                            'link' => '/features/multi-channel'
                        ],
                        [
                            'icon' => 'chart',
                            'title' => 'Analytics & Forecasting',
                            'shortDescription' => 'Data-driven insights',
                            'description' => 'Leverage AI-powered analytics to forecast demand, optimize inventory levels, and identify trends. Make data-driven decisions that boost profitability.',
                            'capabilities' => [
                                'Demand forecasting',
                                'Sales analytics',
                                'Inventory optimization',
                                'Performance dashboards',
                                'Trend prediction'
                            ],
                            'link' => '/features/analytics'
                        ],
                        [
                            'icon' => 'refresh',
                            'title' => 'Automated Workflows',
                            'shortDescription' => 'Reduce manual work',
                            'description' => 'Automate routine tasks like reordering, price updates, and stock transfers. Save time and reduce human error with intelligent business rules.',
                            'capabilities' => [
                                'Automated reordering',
                                'Price update automation',
                                'Stock transfer rules',
                                'Supplier integration',
                                'Workflow builder'
                            ],
                            'link' => '/features/automation'
                        ],
                        [
                            'icon' => 'chip',
                            'title' => 'AI-Powered Insights',
                            'shortDescription' => 'Predictive intelligence',
                            'description' => 'Machine learning algorithms analyze historical data to predict trends, detect anomalies, and provide actionable recommendations for your business.',
                            'capabilities' => [
                                'Trend prediction',
                                'Anomaly detection',
                                'Smart recommendations',
                                'Inventory optimization',
                                'Demand sensing'
                            ],
                            'link' => '/features/ai-insights'
                        ],
                        [
                            'icon' => 'shield',
                            'title' => 'Enterprise Security',
                            'shortDescription' => 'Bank-grade protection',
                            'description' => 'Protect your business with enterprise-grade security features including encryption, access controls, and compliance certifications.',
                            'capabilities' => [
                                '256-bit encryption',
                                'Role-based access',
                                'Audit logging',
                                'PCI compliant',
                                'GDPR ready'
                            ],
                            'link' => '/features/security'
                        ]
                    ],
                    'showComparison' => true,
                    'comparison' => [
                        'before' => [
                            'Manual inventory tracking errors',
                            'Frequent stockouts and overstock',
                            'Disconnected sales channels',
                            'Time-consuming manual reporting',
                            'Limited visibility into operations'
                        ],
                        'after' => [
                            '99.9% inventory accuracy',
                            'Automated reordering optimization',
                            'Unified multi-channel management',
                            'Real-time analytics dashboard',
                            'Complete operational visibility'
                        ]
                    ],
                    'showTechStack' => true,
                    'techStackTitle' => 'Seamlessly Integrates With Your Tech Stack',
                    'techStack' => [
                        ['icon' => 'cloud', 'name' => 'Shopify'],
                        ['icon' => 'database', 'name' => 'Salesforce'],
                        ['icon' => 'truck', 'name' => 'ShipStation'],
                        ['icon' => 'chart', 'name' => 'QuickBooks'],
                        ['icon' => 'shield', 'name' => 'Stripe'],
                        ['icon' => 'bag', 'name' => 'Magento'],
                        ['icon' => 'chip', 'name' => 'WooCommerce'],
                        ['icon' => 'users', 'name' => 'HubSpot'],
                        ['icon' => 'clock', 'name' => 'Zapier'],
                        ['icon' => 'database', 'name' => 'BigCommerce'],
                        ['icon' => 'truck', 'name' => 'FedEx'],
                        ['icon' => 'chart', 'name' => 'Xero']
                    ],
                    'showHowItWorks' => true,
                    'howItWorksTitle' => 'How It Works',
                    'steps' => [
                        ['icon' => 'bag', 'title' => 'Connect', 'description' => 'Integrate with your existing systems and import your inventory data.'],
                        ['icon' => 'qrcode', 'title' => 'Scan', 'description' => 'Start scanning barcodes with our mobile or desktop app.'],
                        ['icon' => 'chart', 'title' => 'Optimize', 'description' => 'Get real-time insights and automate your operations.']
                    ],
                    'showFaq' => true,
                    'faqTitle' => 'Frequently Asked Questions',
                    'faqs' => [
                        [
                            'question' => 'How long does implementation take?',
                            'answer' => 'Most retail businesses are up and running within 2-4 weeks. We provide dedicated support throughout the implementation process to ensure a smooth transition.'
                        ],
                        [
                            'question' => 'Does it integrate with my existing POS system?',
                            'answer' => 'Yes! We offer pre-built integrations with major POS systems including Shopify POS, Square, Lightspeed, and many more. Custom integrations are also available.'
                        ],
                        [
                            'question' => 'What barcode formats are supported?',
                            'answer' => 'We support over 50 barcode formats including UPC, EAN, Code 128, QR codes, Data Matrix, and PDF417. Our system auto-detects formats for seamless scanning.'
                        ],
                        [
                            'question' => 'Is my data secure?',
                            'answer' => 'Absolutely. We use 256-bit encryption for data at rest and in transit. We are SOC2 Type II certified and comply with GDPR, CCPA, and PCI standards.'
                        ],
                        [
                            'question' => 'Can I try it before committing?',
                            'answer' => 'Yes! We offer a 14-day free trial with full access to all features. No credit card required.'
                        ]
                    ],
                    'showResources' => true,
                    'resourcesTitle' => 'Helpful Resources',
                    'resources' => [
                        [
                            'icon' => 'document',
                            'title' => 'Retail Success Guide',
                            'description' => 'Learn best practices for inventory management in retail.',
                            'cta' => 'Download Guide',
                            'link' => '/resources/retail-guide'
                        ],
                        [
                            'icon' => 'play',
                            'title' => 'Platform Demo',
                            'description' => 'Watch a 5-minute overview of our retail solutions.',
                            'cta' => 'Watch Demo',
                            'link' => '/resources/demo-video'
                        ],
                        [
                            'icon' => 'download',
                            'title' => 'ROI Calculator',
                            'description' => 'Calculate potential savings for your business.',
                            'cta' => 'Calculate Now',
                            'link' => '/resources/roi-calculator'
                        ]
                    ],
                    'showCta' => true,
                    'ctaText' => 'Ready to transform your retail operations?',
                    'ctaButtonText' => 'Get Started Today',
                    'ctaLink' => '/demo'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 176,
                'section_key' => 'eCommerceAndRetail',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Manufacturing Section
            [
                'id' => 177,
                'section_key' => 'manufacturing',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Industry Focus',
                        'backgroundColor' => 'bg-blue-50 dark:bg-blue-900/30',
                        'borderColor' => 'border-blue-200 dark:border-blue-800',
                        'textColor' => 'text-blue-700 dark:text-blue-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Smart',
                        'highlightedText' => 'Manufacturing',
                        'suffix' => 'Solutions',
                        'highlightGradient' => 'from-blue-500 to-cyan-500'
                    ],
                    'description' => 'Streamline your production line with real-time tracking, automated workflows, and data-driven insights for manufacturing excellence.',
                    'initialTab' => 'overview',
                    'showStats' => true,
                    'stats' => [
                        ['icon' => 'factory', 'value' => '300+', 'label' => 'Manufacturers Served'],
                        ['icon' => 'star', 'value' => '97%', 'label' => 'On-Time Delivery'],
                        ['icon' => 'clock', 'value' => '35%', 'label' => 'Lead Time Reduction'],
                        ['icon' => 'trending', 'value' => '2.8x', 'label' => 'Avg. ROI']
                    ],
                    'overview' => [
                        'title' => 'Transform Your Production Line',
                        'description' => 'Our manufacturing solution provides real-time visibility into your production process, from raw materials to finished goods. Reduce downtime, improve quality control, and optimize inventory levels with our integrated platform.',
                        'highlights' => [
                            'Real-time production tracking',
                            'Automated quality control checks',
                            'Just-in-time inventory management',
                            'Predictive maintenance alerts',
                            'End-to-end traceability'
                        ],
                        'ctaText' => 'Explore Solutions',
                        'ctaLink' => '/solutions/manufacturing',
                        'statsCards' => [
                            ['value' => '50+', 'label' => 'Integrations'],
                            ['value' => '99.9%', 'label' => 'Scan Accuracy'],
                            ['value' => '24/7', 'label' => 'Support'],
                            ['value' => '500+', 'label' => 'Happy Clients']
                        ]
                    ],
                    'challenges' => [
                        [
                            'icon' => 'clock',
                            'title' => 'Production Downtime',
                            'description' => 'Unexpected equipment failures and lack of real-time monitoring cause costly production delays and missed deadlines.'
                        ],
                        [
                            'icon' => 'database',
                            'title' => 'Inventory Inefficiency',
                            'description' => 'Poor visibility into raw materials and work-in-progress inventory leads to stockouts or excess carrying costs.'
                        ],
                        [
                            'icon' => 'chart',
                            'title' => 'Quality Control Issues',
                            'description' => 'Manual quality checks are time-consuming and prone to errors, resulting in defective products reaching customers.'
                        ],
                        [
                            'icon' => 'truck',
                            'title' => 'Supply Chain Disruptions',
                            'description' => 'Lack of real-time visibility into supplier performance and material availability causes production delays.'
                        ],
                        [
                            'icon' => 'users',
                            'title' => 'Labor Efficiency',
                            'description' => 'Manual data entry and paper-based processes reduce worker productivity and increase error rates.'
                        ],
                        [
                            'icon' => 'shield',
                            'title' => 'Compliance Tracking',
                            'description' => 'Meeting regulatory requirements requires extensive documentation that is difficult to maintain manually.'
                        ]
                    ],
                    'solutions' => [
                        [
                            'icon' => 'qrcode',
                            'title' => 'Real-Time Production Tracking',
                            'description' => 'Track every item through your production line with unique barcode scanning at each station.',
                            'features' => [
                                'Work-in-progress tracking',
                                'Production stage validation',
                                'Real-time throughput monitoring',
                                'Bottleneck identification'
                            ]
                        ],
                        [
                            'icon' => 'chip',
                            'title' => 'Quality Management System',
                            'description' => 'Automated quality checks at critical control points with instant defect detection.',
                            'features' => [
                                'Automated inspection triggers',
                                'Defect tracking and analysis',
                                'Corrective action workflows',
                                'Quality metrics dashboard'
                            ]
                        ],
                        [
                            'icon' => 'refresh',
                            'title' => 'Just-in-Time Inventory',
                            'description' => 'Optimize raw material inventory with automated reordering based on production schedules.',
                            'features' => [
                                'Demand-driven replenishment',
                                'Supplier performance tracking',
                                'Safety stock optimization',
                                'Real-time inventory visibility'
                            ]
                        ],
                        [
                            'icon' => 'cloud',
                            'title' => 'Predictive Maintenance',
                            'description' => 'Prevent equipment failures with AI-powered maintenance predictions and alerts.',
                            'features' => [
                                'Equipment health monitoring',
                                'Maintenance scheduling',
                                'Downtime prediction',
                                'Spare parts tracking'
                            ]
                        ],
                        [
                            'icon' => 'chart',
                            'title' => 'Production Analytics',
                            'description' => 'Data-driven insights to optimize production efficiency and reduce waste.',
                            'features' => [
                                'OEE (Overall Equipment Effectiveness)',
                                'Cycle time analysis',
                                'Yield tracking',
                                'Performance benchmarking'
                            ]
                        ],
                        [
                            'icon' => 'shield',
                            'title' => 'Traceability & Compliance',
                            'description' => 'Complete lot and serial number traceability for regulatory compliance.',
                            'features' => [
                                'End-to-end traceability',
                                'Digital audit trails',
                                'Compliance reporting',
                                'Recall management'
                            ]
                        ]
                    ],
                    'showFeatures' => true,
                    'features' => [
                        'title' => 'Why Manufacturing Leaders Choose Us',
                        'items' => [
                            ['icon' => 'clock', 'title' => 'Real-time Tracking'],
                            ['icon' => 'qrcode', 'title' => 'Fast Scanning'],
                            ['icon' => 'chart', 'title' => 'Analytics'],
                            ['icon' => 'cloud', 'title' => 'Cloud-based'],
                            ['icon' => 'shield', 'title' => 'Secure'],
                            ['icon' => 'users', 'title' => '24/7 Support'],
                            ['icon' => 'trending', 'title' => 'Scalable'],
                            ['icon' => 'database', 'title' => 'Integrations']
                        ]
                    ],
                    'showSuccessMetrics' => true,
                    'successMetrics' => [
                        ['icon' => 'trending', 'value' => '287%', 'label' => 'Average ROI'],
                        ['icon' => 'clock', 'value' => '35%', 'label' => 'Lead Time Reduction'],
                        ['icon' => 'star', 'value' => '99.5%', 'label' => 'Quality Rate'],
                        ['icon' => 'dollar', 'value' => '$1.5M', 'label' => 'Avg. Annual Savings']
                    ],
                    'showCta' => true,
                    'ctaText' => 'Ready to transform your manufacturing operations?',
                    'ctaButtonText' => 'Get Started Today',
                    'ctaLink' => '/demo'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 178,
                'section_key' => 'manufacturing',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Success Stories',
                        'backgroundColor' => 'bg-blue-50 dark:bg-blue-900/30',
                        'borderColor' => 'border-blue-200 dark:border-blue-800',
                        'textColor' => 'text-blue-700 dark:text-blue-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Manufacturing',
                        'highlightedText' => 'Success Stories',
                        'suffix' => '',
                        'highlightGradient' => 'from-blue-500 to-cyan-500'
                    ],
                    'description' => 'See how manufacturers are transforming their operations with our solutions. Real results from real factories.',
                    'initialIndex' => 0,
                    'autoplay' => true,
                    'autoplayInterval' => 6000,
                    'caseStudies' => [
                        [
                            'id' => 'precision-parts',
                            'icon' => 'factory',
                            'company' => 'Precision Parts Inc.',
                            'location' => 'Detroit, MI',
                            'industry' => 'Automotive Parts',
                            'keyResult' => ['value' => '42%', 'label' => 'Production Increase'],
                            'results' => [
                                ['value' => '42%', 'label' => 'Production Increase'],
                                ['value' => '99.5%', 'label' => 'Quality Rate'],
                                ['value' => '$1.2M', 'label' => 'Annual Savings'],
                                ['value' => '2.8x', 'label' => 'ROI']
                            ],
                            'challenge' => 'Precision Parts was struggling with production bottlenecks, inconsistent quality, and manual tracking across their 5 production lines. Downtime was costing $50K per hour during peak periods.',
                            'solution' => 'Implemented our real-time production tracking system with automated quality checks at each station. Integrated with existing ERP and MES systems within 6 weeks.',
                            'testimonial' => [
                                'quote' => 'The platform gave us real-time visibility into our production line for the first time. We\'ve eliminated bottlenecks and improved quality significantly.',
                                'author' => 'Robert Chen',
                                'role' => 'Plant Manager'
                            ],
                            'downloadLink' => '/case-studies/precision-parts/download',
                            'videoLink' => '/case-studies/precision-parts/video'
                        ],
                        [
                            'id' => 'aero-dynamics',
                            'icon' => 'cog',
                            'company' => 'AeroDynamics',
                            'location' => 'Seattle, WA',
                            'industry' => 'Aerospace',
                            'keyResult' => ['value' => '65%', 'label' => 'Traceability Improvement'],
                            'results' => [
                                ['value' => '65%', 'label' => 'Traceability Gain'],
                                ['value' => '100%', 'label' => 'Compliance Rate'],
                                ['value' => '$2.1M', 'label' => 'Annual Savings'],
                                ['value' => '3.2x', 'label' => 'ROI']
                            ],
                            'challenge' => 'Aerospace manufacturer needed complete traceability for regulatory compliance. Manual tracking of thousands of parts was error-prone and time-consuming.',
                            'solution' => 'Deployed our end-to-end traceability solution with serial number tracking, digital audit trails, and automated compliance reporting.',
                            'testimonial' => [
                                'quote' => 'We now have complete confidence in our traceability. Audit preparation that took weeks now takes hours.',
                                'author' => 'Sarah Johnson',
                                'role' => 'Quality Director'
                            ],
                            'downloadLink' => '/case-studies/aero-dynamics/download',
                            'videoLink' => '/case-studies/aero-dynamics/video'
                        ],
                        [
                            'id' => 'green-energy',
                            'icon' => 'chip',
                            'company' => 'Green Energy Systems',
                            'location' => 'Austin, TX',
                            'industry' => 'Renewable Energy',
                            'keyResult' => ['value' => '78%', 'label' => 'Inventory Accuracy'],
                            'results' => [
                                ['value' => '78%', 'label' => 'Inventory Improvement'],
                                ['value' => '99.9%', 'label' => 'Scan Accuracy'],
                                ['value' => '$850K', 'label' => 'Annual Savings'],
                                ['value' => '2.5x', 'label' => 'ROI']
                            ],
                            'challenge' => 'Managing thousands of components across multiple warehouses was causing production delays and excess inventory costs.',
                            'solution' => 'Implemented our inventory optimization solution with real-time tracking, automated reordering, and supplier integration.',
                            'testimonial' => [
                                'quote' => 'Inventory accuracy has transformed our production planning. We\'ve reduced carrying costs and eliminated stockouts.',
                                'author' => 'Michael Wong',
                                'role' => 'Supply Chain Manager'
                            ],
                            'downloadLink' => '/case-studies/green-energy/download',
                            'videoLink' => '/case-studies/green-energy/video'
                        ]
                    ],
                    'showAdditionalCases' => true,
                    'additionalCasesTitle' => 'More Success Stories',
                    'additionalCases' => [
                        [
                            'icon' => 'factory',
                            'company' => 'SteelCraft Industries',
                            'industry' => 'Metal Fabrication',
                            'result' => '35%',
                            'resultLabel' => 'Faster Throughput',
                            'description' => 'Reduced production cycle time from 10 days to 6.5 days with real-time tracking.',
                            'link' => '/case-studies/steelcraft'
                        ],
                        [
                            'icon' => 'cog',
                            'company' => 'AutoTech Solutions',
                            'industry' => 'Automotive',
                            'result' => '99.8%',
                            'resultLabel' => 'Quality Rate',
                            'description' => 'Achieved near-perfect quality with automated inspection at every station.',
                            'link' => '/case-studies/autotech'
                        ],
                        [
                            'icon' => 'chip',
                            'company' => 'MedDevice Manufacturing',
                            'industry' => 'Medical Devices',
                            'result' => '100%',
                            'resultLabel' => 'Compliance',
                            'description' => 'Complete traceability for FDA compliance with digital audit trails.',
                            'link' => '/case-studies/meddevice'
                        ]
                    ],
                    'showROI' => true,
                    'roiSavings' => '20-30%',
                    'roiDowntime' => '50%',
                    'roiPayback' => '6-8',
                    'roiLink' => '/roi-calculator?industry=manufacturing',
                    'showIntegrations' => true,
                    'integrationsTitle' => 'Seamlessly integrates with your manufacturing stack',
                    'integrations' => [
                        ['icon' => 'cloud', 'name' => 'SAP'],
                        ['icon' => 'database', 'name' => 'Oracle'],
                        ['icon' => 'server', 'name' => 'Microsoft Dynamics'],
                        ['icon' => 'truck', 'name' => 'Fishbowl'],
                        ['icon' => 'chart', 'name' => 'Tableau'],
                        ['icon' => 'wifi', 'name' => 'IoT Sensors']
                    ],
                    'showCta' => true,
                    'ctaText' => 'Ready to write your own success story?',
                    'ctaButtonText' => 'Start Your Journey',
                    'ctaLink' => '/demo'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 179,
                'section_key' => 'manufacturing',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Features & FAQ',
                        'backgroundColor' => 'bg-blue-50 dark:bg-blue-900/30',
                        'borderColor' => 'border-blue-200 dark:border-blue-800',
                        'textColor' => 'text-blue-700 dark:text-blue-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Everything You',
                        'highlightedText' => 'Need for Manufacturing',
                        'suffix' => '',
                        'highlightGradient' => 'from-blue-500 to-cyan-500'
                    ],
                    'description' => 'Comprehensive manufacturing solutions designed to streamline production, improve quality, and reduce costs.',
                    'initialFeature' => 0,
                    'showFeatureGrid' => true,
                    'benefits' => [
                        ['icon' => 'trending', 'value' => '287%', 'label' => 'Average ROI'],
                        ['icon' => 'clock', 'value' => '35%', 'label' => 'Lead Time Reduction'],
                        ['icon' => 'dollar', 'value' => '$1.5M', 'label' => 'Avg. Annual Savings'],
                        ['icon' => 'star', 'value' => '99.5%', 'label' => 'Quality Rate']
                    ],
                    'features' => [
                        [
                            'icon' => 'qrcode',
                            'title' => 'Real-Time Production Tracking',
                            'shortDescription' => 'Track every item through production',
                            'description' => 'Our real-time tracking solution provides complete visibility into your production line, from raw materials to finished goods. Monitor work-in-progress, identify bottlenecks, and optimize throughput.',
                            'capabilities' => [
                                'Work-in-progress tracking',
                                'Production stage validation',
                                'Real-time throughput monitoring',
                                'Bottleneck identification',
                                'Cycle time analysis'
                            ],
                            'link' => '/manufacturing/production-tracking'
                        ],
                        [
                            'icon' => 'chip',
                            'title' => 'Quality Management System',
                            'shortDescription' => 'Automated quality control',
                            'description' => 'Implement automated quality checks at critical control points with instant defect detection and corrective action workflows. Reduce defects and improve product quality.',
                            'capabilities' => [
                                'Automated inspection triggers',
                                'Defect tracking and analysis',
                                'Corrective action workflows',
                                'Quality metrics dashboard',
                                'Statistical process control'
                            ],
                            'link' => '/manufacturing/quality-management'
                        ],
                        [
                            'icon' => 'refresh',
                            'title' => 'Just-in-Time Inventory',
                            'shortDescription' => 'Optimize raw material inventory',
                            'description' => 'Optimize raw material inventory with demand-driven replenishment and supplier integration. Reduce carrying costs while ensuring material availability.',
                            'capabilities' => [
                                'Demand-driven replenishment',
                                'Supplier performance tracking',
                                'Safety stock optimization',
                                'Real-time inventory visibility',
                                'Automated PO generation'
                            ],
                            'link' => '/manufacturing/jit-inventory'
                        ],
                        [
                            'icon' => 'cloud',
                            'title' => 'Predictive Maintenance',
                            'shortDescription' => 'Prevent equipment failures',
                            'description' => 'Prevent unexpected equipment failures with AI-powered maintenance predictions and automated scheduling. Maximize equipment uptime and extend asset life.',
                            'capabilities' => [
                                'Equipment health monitoring',
                                'Maintenance scheduling',
                                'Downtime prediction',
                                'Spare parts tracking',
                                'Work order management'
                            ],
                            'link' => '/manufacturing/predictive-maintenance'
                        ],
                        [
                            'icon' => 'chart',
                            'title' => 'Production Analytics',
                            'shortDescription' => 'Data-driven insights',
                            'description' => 'Gain actionable insights with comprehensive production analytics. Monitor OEE, analyze cycle times, and benchmark performance against industry standards.',
                            'capabilities' => [
                                'OEE (Overall Equipment Effectiveness)',
                                'Cycle time analysis',
                                'Yield tracking',
                                'Performance benchmarking',
                                'Real-time dashboards'
                            ],
                            'link' => '/manufacturing/analytics'
                        ],
                        [
                            'icon' => 'shield',
                            'title' => 'Traceability & Compliance',
                            'shortDescription' => 'Complete lot traceability',
                            'description' => 'Ensure complete traceability from raw materials to finished products. Simplify compliance reporting and recall management with digital audit trails.',
                            'capabilities' => [
                                'End-to-end traceability',
                                'Digital audit trails',
                                'Compliance reporting',
                                'Recall management',
                                'Lot/serial number tracking'
                            ],
                            'link' => '/manufacturing/traceability'
                        ]
                    ],
                    'showComparison' => true,
                    'comparison' => [
                        'before' => [
                            'Manual production tracking errors',
                            'Unplanned equipment downtime',
                            'Quality issues reaching customers',
                            'Excess inventory carrying costs',
                            'Slow compliance reporting'
                        ],
                        'after' => [
                            '99.9% production visibility',
                            '50% reduction in downtime',
                            '99.5% first-pass quality',
                            '35% lower inventory costs',
                            'Automated compliance reports'
                        ]
                    ],
                    'showTechStack' => true,
                    'techStackTitle' => 'Seamlessly Integrates With Your Manufacturing Stack',
                    'techStack' => [
                        ['icon' => 'cloud', 'name' => 'SAP'],
                        ['icon' => 'database', 'name' => 'Oracle'],
                        ['icon' => 'server', 'name' => 'Microsoft Dynamics'],
                        ['icon' => 'truck', 'name' => 'Fishbowl'],
                        ['icon' => 'chart', 'name' => 'Tableau'],
                        ['icon' => 'wifi', 'name' => 'IoT Sensors'],
                        ['icon' => 'cog', 'name' => 'Siemens'],
                        ['icon' => 'factory', 'name' => 'Rockwell']
                    ],
                    'showHowItWorks' => true,
                    'howItWorksTitle' => 'How It Works',
                    'steps' => [
                        ['icon' => 'factory', 'title' => 'Connect', 'description' => 'Integrate with your existing systems and equipment.'],
                        ['icon' => 'qrcode', 'title' => 'Track', 'description' => 'Start tracking production in real-time with barcode scanning.'],
                        ['icon' => 'chart', 'title' => 'Optimize', 'description' => 'Use analytics to identify and eliminate bottlenecks.']
                    ],
                    'showFaq' => true,
                    'faqTitle' => 'Frequently Asked Questions',
                    'faqs' => [
                        [
                            'question' => 'How long does manufacturing implementation take?',
                            'answer' => 'Typical implementation for manufacturing facilities takes 4-8 weeks, depending on the complexity of your operations and number of production lines. We provide dedicated project managers and technical support throughout.'
                        ],
                        [
                            'question' => 'Does it integrate with our existing ERP/MES?',
                            'answer' => 'Yes! We offer pre-built integrations with major ERP systems including SAP, Oracle, Microsoft Dynamics, and many others. Custom integrations are also available for legacy systems.'
                        ],
                        [
                            'question' => 'Can it handle high-volume production?',
                            'answer' => 'Absolutely. Our platform is built for scale and can handle millions of scans per day across multiple production lines. We\'ve deployed at some of the largest manufacturing facilities globally.'
                        ],
                        [
                            'question' => 'How does it handle traceability requirements?',
                            'answer' => 'Our system provides complete lot and serial number traceability with digital audit trails. Perfect for FDA, ISO, and other regulatory compliance requirements.'
                        ],
                        [
                            'question' => 'Is there a demo available?',
                            'answer' => 'Yes! We offer personalized demos tailored to your specific manufacturing processes. Contact our team to schedule a demo.'
                        ]
                    ],
                    'showResources' => true,
                    'resourcesTitle' => 'Helpful Resources',
                    'resources' => [
                        [
                            'icon' => 'document',
                            'title' => 'Manufacturing Success Guide',
                            'description' => 'Learn best practices for digital transformation in manufacturing.',
                            'cta' => 'Download Guide',
                            'link' => '/resources/manufacturing-guide'
                        ],
                        [
                            'icon' => 'play',
                            'title' => 'Platform Demo',
                            'description' => 'Watch a 7-minute overview of our manufacturing solutions.',
                            'cta' => 'Watch Demo',
                            'link' => '/resources/demo-video'
                        ],
                        [
                            'icon' => 'download',
                            'title' => 'ROI Calculator',
                            'description' => 'Calculate potential savings for your manufacturing facility.',
                            'cta' => 'Calculate Now',
                            'link' => '/resources/roi-calculator'
                        ]
                    ],
                    'showCta' => true,
                    'ctaText' => 'Ready to transform your manufacturing operations?',
                    'ctaButtonText' => 'Get Started Today',
                    'ctaLink' => '/demo'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 180,
                'section_key' => 'manufacturing',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Healthcare & Pharmaceuticals Section
            [
                'id' => 181,
                'section_key' => 'healthcareAndPharmaceuticals',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Healthcare Focus',
                        'backgroundColor' => 'bg-teal-50 dark:bg-teal-900/30',
                        'borderColor' => 'border-teal-200 dark:border-teal-800',
                        'textColor' => 'text-teal-700 dark:text-teal-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Healthcare &',
                        'highlightedText' => 'Pharmaceutical Solutions',
                        'suffix' => '',
                        'highlightGradient' => 'from-teal-500 to-emerald-500'
                    ],
                    'description' => 'Compliance-first inventory management solutions for healthcare providers, pharmacies, and pharmaceutical manufacturers.',
                    'initialTab' => 'overview',
                    'showStats' => true,
                    'stats' => [
                        ['icon' => 'heart', 'value' => '200+', 'label' => 'Healthcare Providers'],
                        ['icon' => 'star', 'value' => '99.9%', 'label' => 'Inventory Accuracy'],
                        ['icon' => 'shield', 'value' => '0', 'label' => 'Expired Stock Incidents'],
                        ['icon' => 'trending', 'value' => '35%', 'label' => 'Cost Reduction']
                    ],
                    'overview' => [
                        'title' => 'Compliance-First Healthcare Solutions',
                        'description' => 'Our platform helps healthcare organizations maintain regulatory compliance while optimizing inventory management. From hospitals to pharmaceutical manufacturers, we ensure patient safety and operational efficiency.',
                        'highlights' => [
                            'FDA 21 CFR Part 11 compliant',
                            'HIPAA-compliant data protection',
                            'Real-time expiration tracking',
                            'Chain of custody documentation',
                            'Automated recall management'
                        ],
                        'ctaText' => 'Explore Solutions',
                        'ctaLink' => '/solutions/healthcare',
                        'statsCards' => [
                            ['value' => '50+', 'label' => 'Integrations'],
                            ['value' => '99.9%', 'label' => 'Traceability'],
                            ['value' => '24/7', 'label' => 'Support'],
                            ['value' => '100%', 'label' => 'Compliance']
                        ]
                    ],
                    'challenges' => [
                        [
                            'icon' => 'clock',
                            'title' => 'Expiration Management',
                            'description' => 'Manual tracking of expiration dates leads to waste, compliance risks, and potential patient safety issues.'
                        ],
                        [
                            'icon' => 'database',
                            'title' => 'Inventory Visibility',
                            'description' => 'Limited visibility across facilities causes stockouts of critical supplies and excess inventory of others.'
                        ],
                        [
                            'icon' => 'clipboard-list',
                            'title' => 'Compliance Documentation',
                            'description' => 'Meeting regulatory requirements requires extensive documentation that is difficult to maintain manually.'
                        ],
                        [
                            'icon' => 'truck',
                            'title' => 'Recall Management',
                            'description' => 'Identifying and removing recalled products from inventory is time-consuming and error-prone.'
                        ],
                        [
                            'icon' => 'shield',
                            'title' => 'Chain of Custody',
                            'description' => 'Tracking temperature-sensitive products requires detailed chain of custody documentation.'
                        ],
                        [
                            'icon' => 'users',
                            'title' => 'Staff Training',
                            'description' => 'Complex compliance requirements require extensive staff training and ongoing education.'
                        ]
                    ],
                    'solutions' => [
                        [
                            'icon' => 'clipboard-check',
                            'title' => 'Expiration Tracking',
                            'description' => 'Automated expiration date tracking with proactive alerts to prevent waste and ensure patient safety.',
                            'features' => [
                                'Automated expiration alerts',
                                'First-expiry-first-out logic',
                                'Waste reduction reporting',
                                'Expiration date analytics'
                            ]
                        ],
                        [
                            'icon' => 'qrcode',
                            'title' => 'Lot & Serial Tracking',
                            'description' => 'Complete traceability with lot and serial number tracking for regulatory compliance.',
                            'features' => [
                                'Lot number tracking',
                                'Serial number management',
                                'Chain of custody documentation',
                                'Recall management tools'
                            ]
                        ],
                        [
                            'icon' => 'cloud',
                            'title' => 'Multi-Facility Sync',
                            'description' => 'Real-time inventory visibility across all locations with automated replenishment.',
                            'features' => [
                                'Cross-facility visibility',
                                'Automated transfers',
                                'Centralized reporting',
                                'Inventory optimization'
                            ]
                        ],
                        [
                            'icon' => 'shield',
                            'title' => 'Compliance Automation',
                            'description' => 'Automated compliance documentation and audit trails for regulatory requirements.',
                            'features' => [
                                'Digital audit trails',
                                'Compliance reporting',
                                'Regulatory documentation',
                                'Audit preparation tools'
                            ]
                        ],
                        [
                            'icon' => 'chip',
                            'title' => 'Temperature Monitoring',
                            'description' => 'Real-time temperature tracking for cold chain management and temperature-sensitive products.',
                            'features' => [
                                'Temperature logging',
                                'Cold chain alerts',
                                'Stability tracking',
                                'Temperature analytics'
                            ]
                        ],
                        [
                            'icon' => 'chart',
                            'title' => 'Analytics Dashboard',
                            'description' => 'Comprehensive analytics for inventory optimization and compliance monitoring.',
                            'features' => [
                                'Usage analytics',
                                'Demand forecasting',
                                'Compliance dashboards',
                                'Performance metrics'
                            ]
                        ]
                    ],
                    'showFeatures' => true,
                    'features' => [
                        'title' => 'Why Healthcare & Pharmaceutical Leaders Choose Us',
                        'items' => [
                            ['icon' => 'shield', 'title' => 'HIPAA Compliant'],
                            ['icon' => 'clipboard-check', 'title' => 'FDA 21 CFR Part 11'],
                            ['icon' => 'clock', 'title' => 'Expiration Tracking'],
                            ['icon' => 'cloud', 'title' => 'Multi-facility'],
                            ['icon' => 'database', 'title' => 'Audit Trails'],
                            ['icon' => 'users', 'title' => '24/7 Support'],
                            ['icon' => 'trending', 'title' => 'Scalable'],
                            ['icon' => 'truck', 'title' => 'Recall Ready']
                        ]
                    ],
                    'showCompliance' => true,
                    'complianceText' => 'HIPAA Compliant | FDA 21 CFR Part 11 | GxP Ready | SOC 2 Type II',
                    'showSuccessMetrics' => true,
                    'successMetrics' => [
                        ['icon' => 'trending', 'value' => '287%', 'label' => 'Average ROI'],
                        ['icon' => 'clock', 'value' => '45%', 'label' => 'Waste Reduction'],
                        ['icon' => 'star', 'value' => '99.9%', 'label' => 'Traceability Rate'],
                        ['icon' => 'dollar', 'value' => '$850K', 'label' => 'Avg. Annual Savings']
                    ],
                    'showCta' => true,
                    'ctaText' => 'Ready to transform your healthcare operations?',
                    'ctaButtonText' => 'Get Started Today',
                    'ctaLink' => '/demo'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 182,
                'section_key' => 'healthcareAndPharmaceuticals',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Success Stories',
                        'backgroundColor' => 'bg-teal-50 dark:bg-teal-900/30',
                        'borderColor' => 'border-teal-200 dark:border-teal-800',
                        'textColor' => 'text-teal-700 dark:text-teal-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Healthcare',
                        'highlightedText' => 'Success Stories',
                        'suffix' => '',
                        'highlightGradient' => 'from-teal-500 to-emerald-500'
                    ],
                    'description' => 'See how healthcare organizations and pharmaceutical companies are improving patient safety and operational efficiency.',
                    'initialIndex' => 0,
                    'autoplay' => true,
                    'autoplayInterval' => 6000,
                    'caseStudies' => [
                        [
                            'id' => 'memorial-health',
                            'icon' => 'heart',
                            'company' => 'Memorial Health System',
                            'location' => 'Boston, MA',
                            'industry' => 'Hospital System',
                            'keyResult' => ['value' => '45%', 'label' => 'Waste Reduction'],
                            'results' => [
                                ['value' => '45%', 'label' => 'Waste Reduction'],
                                ['value' => '99.9%', 'label' => 'Inventory Accuracy'],
                                ['value' => '$1.2M', 'label' => 'Annual Savings'],
                                ['value' => '0', 'label' => 'Expired Incidents']
                            ],
                            'challenge' => 'Memorial Health was struggling with medication expiration waste across 5 hospitals. Manual tracking led to $2M+ in annual waste and compliance risks.',
                            'solution' => 'Implemented our expiration tracking solution with automated alerts, first-expiry-first-out logic, and centralized inventory visibility across all facilities.',
                            'compliance' => ['HIPAA Compliant', 'FDA 21 CFR Part 11'],
                            'testimonial' => [
                                'quote' => 'We\'ve eliminated medication waste and improved patient safety. The automated alerts have been a game-changer for our pharmacy operations.',
                                'author' => 'Dr. Sarah Chen',
                                'role' => 'Pharmacy Director'
                            ],
                            'downloadLink' => '/case-studies/memorial-health/download',
                            'videoLink' => '/case-studies/memorial-health/video'
                        ],
                        [
                            'id' => 'pharma-corp',
                            'icon' => 'pill',
                            'company' => 'PharmaCorp International',
                            'location' => 'Chicago, IL',
                            'industry' => 'Pharmaceutical Manufacturer',
                            'keyResult' => ['value' => '100%', 'label' => 'Traceability'],
                            'results' => [
                                ['value' => '100%', 'label' => 'Traceability Rate'],
                                ['value' => '99.99%', 'label' => 'Temperature Compliance'],
                                ['value' => '$2.5M', 'label' => 'Annual Savings'],
                                ['value' => '3x', 'label' => 'ROI']
                            ],
                            'challenge' => 'PharmaCorp needed complete serialization and traceability for FDA compliance. Manual tracking across global supply chain was error-prone and inefficient.',
                            'solution' => 'Deployed our end-to-end traceability solution with serial number tracking, cold chain monitoring, and automated compliance reporting.',
                            'compliance' => ['FDA 21 CFR Part 11', 'DSCSA', 'EU FMD'],
                            'testimonial' => [
                                'quote' => 'We now have complete visibility across our supply chain. Audit preparation that took weeks now takes hours.',
                                'author' => 'Michael Rodriguez',
                                'role' => 'Quality Assurance Director'
                            ],
                            'downloadLink' => '/case-studies/pharmacorp/download',
                            'videoLink' => '/case-studies/pharmacorp/video'
                        ],
                        [
                            'id' => 'homecare-pharmacy',
                            'icon' => 'clipboard-check',
                            'company' => 'HomeCare Pharmacy',
                            'location' => 'Dallas, TX',
                            'industry' => 'Retail Pharmacy',
                            'keyResult' => ['value' => '67%', 'label' => 'Faster Fulfillment'],
                            'results' => [
                                ['value' => '67%', 'label' => 'Faster Fulfillment'],
                                ['value' => '99.9%', 'label' => 'Prescription Accuracy'],
                                ['value' => '$450K', 'label' => 'Annual Savings'],
                                ['value' => '0', 'label' => 'Compliance Issues']
                            ],
                            'challenge' => 'Growing pharmacy chain needed to improve prescription fulfillment speed while maintaining accuracy and compliance across 25 locations.',
                            'solution' => 'Implemented our barcode scanning solution with real-time inventory sync and automated prescription tracking.',
                            'compliance' => ['HIPAA Compliant', 'Board of Pharmacy'],
                            'testimonial' => [
                                'quote' => 'Fulfillment time has been cut in half and accuracy is perfect. Our pharmacists love the system.',
                                'author' => 'Jennifer Walsh',
                                'role' => 'Operations VP'
                            ],
                            'downloadLink' => '/case-studies/homecare/download',
                            'videoLink' => '/case-studies/homecare/video'
                        ]
                    ],
                    'showAdditionalCases' => true,
                    'additionalCasesTitle' => 'More Success Stories',
                    'additionalCases' => [
                        [
                            'icon' => 'pill',
                            'company' => 'MedSupply Solutions',
                            'industry' => 'Medical Distributor',
                            'result' => '99.9%',
                            'resultLabel' => 'Traceability',
                            'description' => 'Complete chain of custody for medical supplies across 50+ facilities.',
                            'link' => '/case-studies/medsupply'
                        ],
                        [
                            'icon' => 'beaker',
                            'company' => 'BioResearch Labs',
                            'industry' => 'Research Lab',
                            'result' => '35%',
                            'resultLabel' => 'Cost Reduction',
                            'description' => 'Optimized inventory management for lab reagents and consumables.',
                            'link' => '/case-studies/bioresearch'
                        ],
                        [
                            'icon' => 'clipboard-list',
                            'company' => 'SeniorCare Pharmacy',
                            'industry' => 'Long-term Care',
                            'result' => '0',
                            'resultLabel' => 'Expired Meds',
                            'description' => 'Eliminated expired medication incidents across 50+ facilities.',
                            'link' => '/case-studies/seniorcare'
                        ]
                    ],
                    'showCompliancePreview' => true,
                    'complianceItems' => [
                        'HIPAA Compliant',
                        'FDA 21 CFR Part 11',
                        'GxP Ready',
                        'SOC 2 Type II',
                        'GDPR Compliant',
                        'DSCSA Ready'
                    ],
                    'complianceLink' => '/compliance',
                    'showColdChain' => true,
                    'coldChainFeatures' => [
                        'Real-time temperature alerts',
                        'Automated excursion reporting',
                        'Complete audit trail',
                        'Sensor integration'
                    ],
                    'coldChainStats' => [
                        'zeroExcursions' => '0'
                    ],
                    'showCta' => true,
                    'ctaText' => 'Ready to write your own success story?',
                    'ctaButtonText' => 'Start Your Journey',
                    'ctaLink' => '/demo'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 183,
                'section_key' => 'healthcareAndPharmaceuticals',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Features & FAQ',
                        'backgroundColor' => 'bg-teal-50 dark:bg-teal-900/30',
                        'borderColor' => 'border-teal-200 dark:border-teal-800',
                        'textColor' => 'text-teal-700 dark:text-teal-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Everything You',
                        'highlightedText' => 'Need for Healthcare',
                        'suffix' => '',
                        'highlightGradient' => 'from-teal-500 to-emerald-500'
                    ],
                    'description' => 'Compliance-first healthcare solutions designed to improve patient safety, reduce waste, and ensure regulatory compliance.',
                    'initialFeature' => 0,
                    'showFeatureGrid' => true,
                    'benefits' => [
                        ['icon' => 'trending', 'value' => '287%', 'label' => 'Average ROI'],
                        ['icon' => 'clock', 'value' => '45%', 'label' => 'Waste Reduction'],
                        ['icon' => 'dollar', 'value' => '$1.2M', 'label' => 'Avg. Annual Savings'],
                        ['icon' => 'shield', 'value' => '100%', 'label' => 'Compliance Rate']
                    ],
                    'features' => [
                        [
                            'icon' => 'clipboard-check',
                            'title' => 'Expiration Tracking',
                            'shortDescription' => 'Automated expiration management',
                            'description' => 'Our expiration tracking system provides proactive alerts for soon-to-expire medications, automatically applies FIFO logic, and generates waste reduction reports.',
                            'capabilities' => [
                                'Automated expiration alerts',
                                'First-expiry-first-out logic',
                                'Waste reduction reporting',
                                'Expiration date analytics',
                                'Proactive notifications'
                            ],
                            'compliance' => ['FDA 21 CFR Part 11', 'GxP Ready'],
                            'link' => '/healthcare/expiration-tracking'
                        ],
                        [
                            'icon' => 'clipboard-list',
                            'title' => 'Lot & Serial Tracking',
                            'shortDescription' => 'Complete traceability',
                            'description' => 'Ensure complete chain of custody with lot and serial number tracking. Perfect for recall management and regulatory compliance.',
                            'capabilities' => [
                                'Lot number tracking',
                                'Serial number management',
                                'Chain of custody documentation',
                                'Recall management tools',
                                'Digital audit trails'
                            ],
                            'compliance' => ['FDA 21 CFR Part 11', 'DSCSA', 'EU FMD'],
                            'link' => '/healthcare/traceability'
                        ],
                        [
                            'icon' => 'snowflake',
                            'title' => 'Cold Chain Monitoring',
                            'shortDescription' => 'Temperature-sensitive tracking',
                            'description' => 'Real-time temperature monitoring for sensitive medications, vaccines, and biologics with automated excursion alerts.',
                            'capabilities' => [
                                'Real-time temperature alerts',
                                'Automated excursion reporting',
                                'Complete audit trail',
                                'Sensor integration',
                                'Stability tracking'
                            ],
                            'compliance' => ['GDPR', 'CDC Guidelines'],
                            'link' => '/healthcare/cold-chain'
                        ],
                        [
                            'icon' => 'cloud',
                            'title' => 'Multi-Facility Sync',
                            'shortDescription' => 'Centralized inventory',
                            'description' => 'Real-time inventory visibility across all locations with automated replenishment and centralized reporting.',
                            'capabilities' => [
                                'Cross-facility visibility',
                                'Automated transfers',
                                'Centralized reporting',
                                'Inventory optimization',
                                'Usage analytics'
                            ],
                            'compliance' => ['HIPAA Compliant'],
                            'link' => '/healthcare/multi-facility'
                        ],
                        [
                            'icon' => 'shield',
                            'title' => 'Compliance Automation',
                            'shortDescription' => 'Automated compliance',
                            'description' => 'Automated compliance documentation and audit trails for regulatory requirements including HIPAA, FDA, and GxP standards.',
                            'capabilities' => [
                                'Digital audit trails',
                                'Compliance reporting',
                                'Regulatory documentation',
                                'Audit preparation tools',
                                'Role-based access'
                            ],
                            'compliance' => ['HIPAA', 'FDA 21 CFR Part 11', 'SOC 2'],
                            'link' => '/healthcare/compliance'
                        ],
                        [
                            'icon' => 'chart',
                            'title' => 'Analytics Dashboard',
                            'shortDescription' => 'Data-driven insights',
                            'description' => 'Comprehensive analytics for inventory optimization, usage patterns, and compliance monitoring.',
                            'capabilities' => [
                                'Usage analytics',
                                'Demand forecasting',
                                'Compliance dashboards',
                                'Performance metrics',
                                'Cost optimization'
                            ],
                            'compliance' => ['GDPR Compliant'],
                            'link' => '/healthcare/analytics'
                        ]
                    ],
                    'showComparison' => true,
                    'comparison' => [
                        'before' => [
                            'Manual expiration tracking leads to waste',
                            'Limited recall visibility',
                            'Paper-based compliance documentation',
                            'Inventory visibility gaps',
                            'Manual temperature logging'
                        ],
                        'after' => [
                            '99.9% expiration compliance',
                            'Instant recall identification',
                            'Automated digital audit trails',
                            'Real-time inventory visibility',
                            'Automated cold chain alerts'
                        ]
                    ],
                    'showTechStack' => true,
                    'techStackTitle' => 'Seamlessly Integrates With Your Healthcare Stack',
                    'techStack' => [
                        ['icon' => 'cloud', 'name' => 'Epic'],
                        ['icon' => 'database', 'name' => 'Cerner'],
                        ['icon' => 'shield', 'name' => 'Allscripts'],
                        ['icon' => 'truck', 'name' => 'McKesson'],
                        ['icon' => 'chart', 'name' => 'Tableau'],
                        ['icon' => 'thermometer', 'name' => 'Sensitech'],
                        ['icon' => 'clipboard', 'name' => 'Athenahealth'],
                        ['icon' => 'pill', 'name' => 'Rx30']
                    ],
                    'showHowItWorks' => true,
                    'howItWorksTitle' => 'How It Works',
                    'steps' => [
                        ['icon' => 'database', 'title' => 'Connect', 'description' => 'Integrate with your existing systems and import inventory data.'],
                        ['icon' => 'qrcode', 'title' => 'Track', 'description' => 'Start tracking medications with barcode scanning at each point.'],
                        ['icon' => 'shield', 'title' => 'Comply', 'description' => 'Automated compliance documentation and audit trails.']
                    ],
                    'showFaq' => true,
                    'faqTitle' => 'Frequently Asked Questions',
                    'faqs' => [
                        [
                            'question' => 'Is the platform HIPAA compliant?',
                            'answer' => 'Yes, our platform is fully HIPAA compliant with enterprise-grade security, encryption, and access controls. We sign BAs and provide all necessary compliance documentation.'
                        ],
                        [
                            'question' => 'How does it handle FDA 21 CFR Part 11 requirements?',
                            'answer' => 'Our platform is built to meet FDA 21 CFR Part 11 requirements including electronic signatures, audit trails, and data integrity controls. We provide validation documentation.'
                        ],
                        [
                            'question' => 'Can it integrate with our existing EMR/EHR?',
                            'answer' => 'Yes, we offer pre-built integrations with major EMR/EHR systems including Epic, Cerner, Allscripts, and many others. Custom integrations are also available.'
                        ],
                        [
                            'question' => 'How does expiration tracking work?',
                            'answer' => 'Our system automatically tracks expiration dates, sends proactive alerts, applies FIFO logic, and generates waste reduction reports. You\'ll never miss an expiration again.'
                        ],
                        [
                            'question' => 'Is there a demo available?',
                            'answer' => 'Yes! We offer personalized demos tailored to your specific healthcare environment. Contact our team to schedule a demo.'
                        ]
                    ],
                    'showResources' => true,
                    'resourcesTitle' => 'Helpful Resources',
                    'resources' => [
                        [
                            'icon' => 'document',
                            'title' => 'Healthcare Compliance Guide',
                            'description' => 'Learn best practices for regulatory compliance in healthcare.',
                            'cta' => 'Download Guide',
                            'link' => '/resources/healthcare-guide'
                        ],
                        [
                            'icon' => 'play',
                            'title' => 'Platform Demo',
                            'description' => 'Watch a 6-minute overview of our healthcare solutions.',
                            'cta' => 'Watch Demo',
                            'link' => '/resources/demo-video'
                        ],
                        [
                            'icon' => 'download',
                            'title' => 'ROI Calculator',
                            'description' => 'Calculate potential savings for your healthcare organization.',
                            'cta' => 'Calculate Now',
                            'link' => '/resources/roi-calculator'
                        ]
                    ],
                    'showCta' => true,
                    'ctaText' => 'Ready to transform your healthcare operations?',
                    'ctaButtonText' => 'Get Started Today',
                    'ctaLink' => '/demo'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 184,
                'section_key' => 'healthcareAndPharmaceuticals',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Food & Beverage Section
            [
                'id' => 185,
                'section_key' => 'foodAndBeverage',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Industry Focus',
                        'backgroundColor' => 'bg-orange-50 dark:bg-orange-900/30',
                        'borderColor' => 'border-orange-200 dark:border-orange-800',
                        'textColor' => 'text-orange-700 dark:text-orange-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Food &',
                        'highlightedText' => 'Beverage Solutions',
                        'suffix' => '',
                        'highlightGradient' => 'from-orange-500 to-amber-500'
                    ],
                    'description' => 'Ensure food safety, traceability, and compliance with our specialized inventory management solutions for food and beverage companies.',
                    'initialTab' => 'overview',
                    'showStats' => true,
                    'stats' => [
                        ['icon' => 'restaurant', 'value' => '400+', 'label' => 'Food Companies'],
                        ['icon' => 'star', 'value' => '99.7%', 'label' => 'Traceability Rate'],
                        ['icon' => 'trending', 'value' => '35%', 'label' => 'Waste Reduction'],
                        ['icon' => 'clock', 'value' => '98%', 'label' => 'On-Time Delivery']
                    ],
                    'overview' => [
                        'title' => 'Food Safety & Traceability First',
                        'description' => 'Our platform helps food and beverage companies maintain compliance with FSMA, HACCP, and FDA regulations while optimizing inventory management from farm to fork.',
                        'highlights' => [
                            'Complete lot traceability from source to shelf',
                            'Automated expiration and freshness tracking',
                            'Temperature monitoring for cold chain',
                            'Recall management and compliance reporting',
                            'Real-time inventory across all locations'
                        ],
                        'ctaText' => 'Explore Solutions',
                        'ctaLink' => '/solutions/food-beverage',
                        'statsCards' => [
                            ['value' => '50+', 'label' => 'Integrations'],
                            ['value' => '99.9%', 'label' => 'Scan Accuracy'],
                            ['value' => '24/7', 'label' => 'Support'],
                            ['value' => '500+', 'label' => 'Happy Clients']
                        ]
                    ],
                    'challenges' => [
                        [
                            'icon' => 'clock',
                            'title' => 'Expiration Management',
                            'description' => 'Manual tracking of expiration dates leads to waste, compliance risks, and potential food safety issues.'
                        ],
                        [
                            'icon' => 'database',
                            'title' => 'Traceability Gaps',
                            'description' => 'Limited visibility across the supply chain makes recall management slow and inefficient.'
                        ],
                        [
                            'icon' => 'thermometer',
                            'title' => 'Cold Chain Monitoring',
                            'description' => 'Temperature-sensitive products require constant monitoring to ensure quality and safety.'
                        ],
                        [
                            'icon' => 'truck',
                            'title' => 'Supply Chain Complexity',
                            'description' => 'Managing multiple suppliers, distributors, and locations creates inventory visibility challenges.'
                        ],
                        [
                            'icon' => 'shield',
                            'title' => 'Compliance Burden',
                            'description' => 'Meeting FSMA, HACCP, and FDA requirements requires extensive documentation and tracking.'
                        ],
                        [
                            'icon' => 'chart',
                            'title' => 'Demand Forecasting',
                            'description' => 'Seasonal demand and perishable products make accurate forecasting difficult.'
                        ]
                    ],
                    'solutions' => [
                        [
                            'icon' => 'clipboard-list',
                            'title' => 'Lot Traceability',
                            'description' => 'Complete traceability from supplier to customer with lot-level tracking and recall management.',
                            'features' => [
                                'Lot number tracking',
                                'Batch genealogy',
                                'Recall management',
                                'Chain of custody'
                            ]
                        ],
                        [
                            'icon' => 'thermometer',
                            'title' => 'Cold Chain Management',
                            'description' => 'Real-time temperature monitoring for perishable products with automated excursion alerts.',
                            'features' => [
                                'Temperature logging',
                                'Excursion alerts',
                                'Cold chain compliance',
                                'Sensor integration'
                            ]
                        ],
                        [
                            'icon' => 'qrcode',
                            'title' => 'Expiration Tracking',
                            'description' => 'Automated expiration date tracking with proactive alerts to reduce waste and ensure safety.',
                            'features' => [
                                'Expiration alerts',
                                'FEFO (First-Expired-First-Out)',
                                'Waste reduction analytics',
                                'Freshness scoring'
                            ]
                        ],
                        [
                            'icon' => 'cloud',
                            'title' => 'Multi-Location Sync',
                            'description' => 'Real-time inventory visibility across all warehouses, distribution centers, and retail locations.',
                            'features' => [
                                'Cross-location visibility',
                                'Automated transfers',
                                'Centralized reporting',
                                'Inventory optimization'
                            ]
                        ],
                        [
                            'icon' => 'chip',
                            'title' => 'Demand Forecasting',
                            'description' => 'AI-powered demand forecasting to optimize inventory levels and reduce waste.',
                            'features' => [
                                'Demand prediction',
                                'Seasonal trends',
                                'Safety stock optimization',
                                'Order recommendations'
                            ]
                        ],
                        [
                            'icon' => 'shield',
                            'title' => 'Compliance Automation',
                            'description' => 'Automated FSMA, HACCP, and FDA compliance documentation and reporting.',
                            'features' => [
                                'Digital audit trails',
                                'Compliance reporting',
                                'FSMA documentation',
                                'HACCP plan integration'
                            ]
                        ]
                    ],
                    'showFeatures' => true,
                    'features' => [
                        'title' => 'Why Food & Beverage Leaders Choose Us',
                        'items' => [
                            ['icon' => 'shield', 'title' => 'FSMA Compliant'],
                            ['icon' => 'thermometer', 'title' => 'Cold Chain'],
                            ['icon' => 'clock', 'title' => 'Expiration Tracking'],
                            ['icon' => 'cloud', 'title' => 'Multi-location'],
                            ['icon' => 'database', 'title' => 'Lot Traceability'],
                            ['icon' => 'users', 'title' => '24/7 Support'],
                            ['icon' => 'trending', 'title' => 'Scalable'],
                            ['icon' => 'truck', 'title' => 'Recall Ready']
                        ]
                    ],
                    'showSafetyBadge' => true,
                    'safetyText' => 'FSMA Compliant | HACCP Ready | FDA Regulations | GFSI Benchmarked | SQF Certified',
                    'showSuccessMetrics' => true,
                    'successMetrics' => [
                        ['icon' => 'trending', 'value' => '287%', 'label' => 'Average ROI'],
                        ['icon' => 'clock', 'value' => '45%', 'label' => 'Waste Reduction'],
                        ['icon' => 'star', 'value' => '99.7%', 'label' => 'Traceability Rate'],
                        ['icon' => 'dollar', 'value' => '$1.2M', 'label' => 'Avg. Annual Savings']
                    ],
                    'showCta' => true,
                    'ctaText' => 'Ready to transform your food & beverage operations?',
                    'ctaButtonText' => 'Get Started Today',
                    'ctaLink' => '/demo'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 186,
                'section_key' => 'foodAndBeverage',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Success Stories',
                        'backgroundColor' => 'bg-orange-50 dark:bg-orange-900/30',
                        'borderColor' => 'border-orange-200 dark:border-orange-800',
                        'textColor' => 'text-orange-700 dark:text-orange-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Food & Beverage',
                        'highlightedText' => 'Success Stories',
                        'suffix' => '',
                        'highlightGradient' => 'from-orange-500 to-amber-500'
                    ],
                    'description' => 'See how food and beverage companies are reducing waste, ensuring safety, and improving traceability.',
                    'initialIndex' => 0,
                    'autoplay' => true,
                    'autoplayInterval' => 6000,
                    'caseStudies' => [
                        [
                            'id' => 'fresh-produce',
                            'icon' => 'restaurant',
                            'company' => 'Fresh Produce Distributors',
                            'location' => 'Salinas, CA',
                            'industry' => 'Produce Distribution',
                            'keyResult' => ['value' => '42%', 'label' => 'Waste Reduction'],
                            'results' => [
                                ['value' => '42%', 'label' => 'Waste Reduction'],
                                ['value' => '99.9%', 'label' => 'Traceability Rate'],
                                ['value' => '$1.5M', 'label' => 'Annual Savings'],
                                ['value' => '0', 'label' => 'Recall Incidents']
                            ],
                            'challenge' => 'Fresh Produce was losing millions annually to spoilage due to poor expiration tracking and inefficient FIFO implementation across 5 distribution centers.',
                            'solution' => 'Implemented our shelf-life management solution with automated expiration tracking, FEFO logic, and real-time inventory visibility across all facilities.',
                            'safetyBadges' => ['FSMA Compliant', 'GFSI Benchmarked', 'HACCP Certified'],
                            'testimonial' => [
                                'quote' => 'We\'ve cut waste by over 40% and have complete traceability from farm to fork. The system pays for itself in waste reduction alone.',
                                'author' => 'Maria Gonzales',
                                'role' => 'Supply Chain Director'
                            ],
                            'downloadLink' => '/case-studies/fresh-produce/download',
                            'videoLink' => '/case-studies/fresh-produce/video'
                        ],
                        [
                            'id' => 'craft-beverage',
                            'icon' => 'beaker',
                            'company' => 'Craft Beverage Co.',
                            'location' => 'Portland, OR',
                            'industry' => 'Beverage Manufacturing',
                            'keyResult' => ['value' => '67%', 'label' => 'Inventory Accuracy'],
                            'results' => [
                                ['value' => '67%', 'label' => 'Inventory Accuracy'],
                                ['value' => '35%', 'label' => 'Faster Fulfillment'],
                                ['value' => '$850K', 'label' => 'Annual Savings'],
                                ['value' => '2.5x', 'label' => 'ROI']
                            ],
                            'challenge' => 'Managing thousands of SKUs across multiple production lines and distribution channels was causing inventory discrepancies and fulfillment delays.',
                            'solution' => 'Deployed our inventory management platform with barcode scanning, real-time sync, and automated reordering across all locations.',
                            'safetyBadges' => ['FDA Compliant', 'SQF Certified'],
                            'testimonial' => [
                                'quote' => 'Inventory accuracy has transformed our operations. We\'ve eliminated stockouts and reduced carrying costs significantly.',
                                'author' => 'David Kim',
                                'role' => 'Operations Manager'
                            ],
                            'downloadLink' => '/case-studies/craft-beverage/download',
                            'videoLink' => '/case-studies/craft-beverage/video'
                        ],
                        [
                            'id' => 'cold-chain-logistics',
                            'icon' => 'snowflake',
                            'company' => 'ColdChain Logistics',
                            'location' => 'Chicago, IL',
                            'industry' => 'Cold Storage',
                            'keyResult' => ['value' => '100%', 'label' => 'Temperature Compliance'],
                            'results' => [
                                ['value' => '100%', 'label' => 'Temp Compliance'],
                                ['value' => '0', 'label' => 'Temperature Excursions'],
                                ['value' => '$2.1M', 'label' => 'Product Savings'],
                                ['value' => '3x', 'label' => 'ROI']
                            ],
                            'challenge' => 'Temperature excursions during storage and transit were causing product loss and compliance violations across their cold chain network.',
                            'solution' => 'Implemented our cold chain monitoring solution with real-time temperature tracking, automated alerts, and excursion reporting.',
                            'safetyBadges' => ['FSMA Compliant', 'FDA Regulations', 'GxP Ready'],
                            'testimonial' => [
                                'quote' => 'We now have real-time visibility into temperature conditions across our entire cold chain. Excursions are caught instantly.',
                                'author' => 'Sarah Thompson',
                                'role' => 'Quality Assurance Director'
                            ],
                            'downloadLink' => '/case-studies/cold-chain/download',
                            'videoLink' => '/case-studies/cold-chain/video'
                        ]
                    ],
                    'showAdditionalCases' => true,
                    'additionalCasesTitle' => 'More Success Stories',
                    'additionalCases' => [
                        [
                            'icon' => 'restaurant',
                            'company' => 'Organic Harvest',
                            'industry' => 'Organic Foods',
                            'result' => '99.9%',
                            'resultLabel' => 'Traceability',
                            'description' => 'Complete farm-to-fork traceability for organic produce across 50+ locations.',
                            'link' => '/case-studies/organic-harvest'
                        ],
                        [
                            'icon' => 'thermometer',
                            'company' => 'Seafood Express',
                            'industry' => 'Seafood Distribution',
                            'result' => '0',
                            'resultLabel' => 'Temp Excursions',
                            'description' => 'Eliminated temperature excursions in cold chain with real-time monitoring.',
                            'link' => '/case-studies/seafood-express'
                        ],
                        [
                            'icon' => 'beaker',
                            'company' => 'Artisan Bakery',
                            'industry' => 'Bakery',
                            'result' => '35%',
                            'resultLabel' => 'Waste Reduction',
                            'description' => 'Reduced ingredient waste with FIFO optimization and expiration tracking.',
                            'link' => '/case-studies/artisan-bakery'
                        ]
                    ],
                    'showWasteCalculator' => true,
                    'wasteReduction' => '25-35%',
                    'shelfLifeIncrease' => '20-30%',
                    'paybackPeriod' => '3-6',
                    'calculatorLink' => '/waste-calculator',
                    'showPartners' => true,
                    'partnersTitle' => 'Trusted by leading food & beverage companies',
                    'partners' => [
                        ['icon' => 'restaurant', 'name' => 'Sysco'],
                        ['icon' => 'truck', 'name' => 'US Foods'],
                        ['icon' => 'snowflake', 'name' => 'Lineage'],
                        ['icon' => 'beaker', 'name' => 'PepsiCo'],
                        ['icon' => 'cloud', 'name' => 'Kraft Heinz'],
                        ['icon' => 'database', 'name' => 'Nestle']
                    ],
                    'showCta' => true,
                    'ctaText' => 'Ready to write your own success story?',
                    'ctaButtonText' => 'Start Your Journey',
                    'ctaLink' => '/demo'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 187,
                'section_key' => 'foodAndBeverage',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Features & FAQ',
                        'backgroundColor' => 'bg-orange-50 dark:bg-orange-900/30',
                        'borderColor' => 'border-orange-200 dark:border-orange-800',
                        'textColor' => 'text-orange-700 dark:text-orange-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Everything You',
                        'highlightedText' => 'Need for Food & Beverage',
                        'suffix' => '',
                        'highlightGradient' => 'from-orange-500 to-amber-500'
                    ],
                    'description' => 'Comprehensive food safety and traceability solutions designed to reduce waste, ensure compliance, and optimize operations.',
                    'initialFeature' => 0,
                    'showFeatureGrid' => true,
                    'benefits' => [
                        ['icon' => 'trending', 'value' => '287%', 'label' => 'Average ROI'],
                        ['icon' => 'clock', 'value' => '42%', 'label' => 'Waste Reduction'],
                        ['icon' => 'dollar', 'value' => '$1.2M', 'label' => 'Avg. Annual Savings'],
                        ['icon' => 'shield', 'value' => '99.9%', 'label' => 'Traceability Rate']
                    ],
                    'features' => [
                        [
                            'icon' => 'clipboard-list',
                            'title' => 'Lot Traceability',
                            'shortDescription' => 'Complete chain of custody',
                            'description' => 'End-to-end traceability from supplier to customer with lot-level tracking, batch genealogy, and recall management capabilities.',
                            'capabilities' => [
                                'Lot number tracking',
                                'Batch genealogy',
                                'Recall management',
                                'Chain of custody',
                                'Digital audit trails'
                            ],
                            'compliance' => ['FSMA Compliant', 'FDA Regulations', 'GFSI Benchmarked'],
                            'link' => '/food-beverage/traceability'
                        ],
                        [
                            'icon' => 'thermometer',
                            'title' => 'Cold Chain Management',
                            'shortDescription' => 'Temperature monitoring',
                            'description' => 'Real-time temperature monitoring for perishable products with automated excursion alerts and compliance reporting.',
                            'capabilities' => [
                                'Temperature logging',
                                'Excursion alerts',
                                'Cold chain compliance',
                                'Sensor integration',
                                'Stability tracking'
                            ],
                            'compliance' => ['FSMA Compliant', 'FDA Regulations', 'GxP Ready'],
                            'link' => '/food-beverage/cold-chain'
                        ],
                        [
                            'icon' => 'snowflake',
                            'title' => 'Shelf-Life Management',
                            'description' => 'Automated expiration date tracking with proactive alerts to reduce waste and ensure product freshness.',
                            'shortDescription' => 'Expiration tracking',
                            'capabilities' => [
                                'Expiration alerts',
                                'FEFO (First-Expired-First-Out)',
                                'Waste reduction analytics',
                                'Freshness scoring',
                                'Automated notifications'
                            ],
                            'compliance' => ['FSMA Compliant', 'HACCP Certified'],
                            'link' => '/food-beverage/shelf-life'
                        ],
                        [
                            'icon' => 'cloud',
                            'title' => 'Multi-Location Sync',
                            'shortDescription' => 'Centralized inventory',
                            'description' => 'Real-time inventory visibility across all warehouses, distribution centers, and retail locations with automated transfers.',
                            'capabilities' => [
                                'Cross-location visibility',
                                'Automated transfers',
                                'Centralized reporting',
                                'Inventory optimization',
                                'Demand forecasting'
                            ],
                            'compliance' => ['GDPR Compliant'],
                            'link' => '/food-beverage/multi-location'
                        ],
                        [
                            'icon' => 'chip',
                            'title' => 'Quality Control',
                            'shortDescription' => 'Automated quality checks',
                            'description' => 'Automated quality control at critical points with defect tracking, corrective actions, and quality analytics.',
                            'capabilities' => [
                                'Automated inspections',
                                'Defect tracking',
                                'Corrective actions',
                                'Quality analytics',
                                'Supplier scorecards'
                            ],
                            'compliance' => ['HACCP Certified', 'SQF Certified'],
                            'link' => '/food-beverage/quality-control'
                        ],
                        [
                            'icon' => 'chart',
                            'title' => 'Analytics Dashboard',
                            'shortDescription' => 'Data-driven insights',
                            'description' => 'Comprehensive analytics for waste reduction, shelf-life optimization, and operational efficiency.',
                            'capabilities' => [
                                'Waste analytics',
                                'Shelf-life optimization',
                                'Operational KPIs',
                                'Cost savings tracking',
                                'Compliance dashboards'
                            ],
                            'compliance' => ['GDPR Compliant'],
                            'link' => '/food-beverage/analytics'
                        ]
                    ],
                    'showComparison' => true,
                    'comparison' => [
                        'before' => [
                            'Manual expiration tracking leads to waste',
                            'Limited recall visibility',
                            'Temperature excursions undetected',
                            'Inventory visibility gaps',
                            'Paper-based compliance'
                        ],
                        'after' => [
                            '99.9% expiration compliance',
                            'Instant recall identification',
                            'Real-time temperature alerts',
                            'Complete inventory visibility',
                            'Automated digital compliance'
                        ]
                    ],
                    'showTechStack' => true,
                    'techStackTitle' => 'Seamlessly Integrates With Your Food & Beverage Stack',
                    'techStack' => [
                        ['icon' => 'cloud', 'name' => 'FoodLogiQ'],
                        ['icon' => 'database', 'name' => 'TraceGains'],
                        ['icon' => 'thermometer', 'name' => 'Controlant'],
                        ['icon' => 'truck', 'name' => 'Blue Yonder'],
                        ['icon' => 'chart', 'name' => 'Tableau'],
                        ['icon' => 'snowflake', 'name' => 'Sensitech'],
                        ['icon' => 'restaurant', 'name' => 'Toast'],
                        ['icon' => 'beaker', 'name' => 'SafetyChain']
                    ],
                    'showHowItWorks' => true,
                    'howItWorksTitle' => 'How It Works',
                    'steps' => [
                        ['icon' => 'database', 'title' => 'Connect', 'description' => 'Integrate with your existing systems and suppliers.'],
                        ['icon' => 'qrcode', 'title' => 'Track', 'description' => 'Scan products at each point in the supply chain.'],
                        ['icon' => 'shield', 'title' => 'Comply', 'description' => 'Automated compliance documentation and reporting.']
                    ],
                    'showFaq' => true,
                    'faqTitle' => 'Frequently Asked Questions',
                    'faqs' => [
                        [
                            'question' => 'Is the platform FSMA compliant?',
                            'answer' => 'Yes, our platform is fully FSMA compliant with features for traceability, recordkeeping, and preventive controls. We help you meet all FSMA requirements.'
                        ],
                        [
                            'question' => 'How does it handle recall management?',
                            'answer' => 'Our recall management tools allow you to instantly identify affected lots, trace their distribution, and communicate with customers. Complete recall documentation is automatically generated.'
                        ],
                        [
                            'question' => 'Can it integrate with our ERP?',
                            'answer' => 'Yes, we offer pre-built integrations with major ERP systems including SAP, Oracle, Microsoft Dynamics, and many food-specific ERPs.'
                        ],
                        [
                            'question' => 'How does expiration tracking work?',
                            'answer' => 'Our system automatically tracks expiration dates, sends proactive alerts before expiration, applies FEFO logic, and generates waste reduction reports.'
                        ],
                        [
                            'question' => 'Is there a demo available?',
                            'answer' => 'Yes! We offer personalized demos tailored to your specific food & beverage operations. Contact our team to schedule a demo.'
                        ]
                    ],
                    'showResources' => true,
                    'resourcesTitle' => 'Helpful Resources',
                    'resources' => [
                        [
                            'icon' => 'document',
                            'title' => 'Food Safety Compliance Guide',
                            'description' => 'Learn best practices for FSMA, HACCP, and food safety compliance.',
                            'cta' => 'Download Guide',
                            'link' => '/resources/food-safety-guide'
                        ],
                        [
                            'icon' => 'play',
                            'title' => 'Platform Demo',
                            'description' => 'Watch a 7-minute overview of our food & beverage solutions.',
                            'cta' => 'Watch Demo',
                            'link' => '/resources/demo-video'
                        ],
                        [
                            'icon' => 'download',
                            'title' => 'ROI Calculator',
                            'description' => 'Calculate potential savings from waste reduction for your business.',
                            'cta' => 'Calculate Now',
                            'link' => '/resources/roi-calculator'
                        ]
                    ],
                    'showCta' => true,
                    'ctaText' => 'Ready to transform your food & beverage operations?',
                    'ctaButtonText' => 'Get Started Today',
                    'ctaLink' => '/demo'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 188,
                'section_key' => 'foodAndBeverage',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Automotive Section
            [
                'id' => 189,
                'section_key' => 'automotive',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Industry Focus',
                        'backgroundColor' => 'bg-blue-50 dark:bg-blue-900/30',
                        'borderColor' => 'border-blue-200 dark:border-blue-800',
                        'textColor' => 'text-blue-700 dark:text-blue-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Automotive',
                        'highlightedText' => 'Supply Chain Solutions',
                        'suffix' => '',
                        'highlightGradient' => 'from-blue-500 to-slate-500'
                    ],
                    'description' => 'Optimize your automotive supply chain with real-time tracking, inventory optimization, and compliance management.',
                    'initialTab' => 'overview',
                    'showStats' => true,
                    'stats' => [
                        ['icon' => 'car', 'value' => '350+', 'label' => 'Automotive Companies'],
                        ['icon' => 'database', 'value' => '2.5M+', 'label' => 'Parts Managed'],
                        ['icon' => 'trending', 'value' => '40%', 'label' => 'Inventory Reduction'],
                        ['icon' => 'clock', 'value' => '98%', 'label' => 'On-Time Delivery']
                    ],
                    'overview' => [
                        'title' => 'Streamline Your Automotive Supply Chain',
                        'description' => 'Our platform helps automotive manufacturers, suppliers, and distributors optimize inventory, reduce costs, and meet industry standards with real-time visibility across the supply chain.',
                        'highlights' => [
                            'Real-time parts tracking across multi-tier supply chain',
                            'Just-in-time inventory optimization',
                            'Quality control and defect tracking',
                            'Supplier performance management',
                            'IATF 16949 compliance support'
                        ],
                        'ctaText' => 'Explore Solutions',
                        'ctaLink' => '/solutions/automotive',
                        'statsCards' => [
                            ['value' => '50+', 'label' => 'Integrations'],
                            ['value' => '99.9%', 'label' => 'Scan Accuracy'],
                            ['value' => '24/7', 'label' => 'Support'],
                            ['value' => '500+', 'label' => 'Happy Clients']
                        ]
                    ],
                    'challenges' => [
                        [
                            'icon' => 'truck',
                            'title' => 'Supply Chain Visibility',
                            'description' => 'Limited visibility across multi-tier supply chains causes production delays and inventory inefficiencies.'
                        ],
                        [
                            'icon' => 'clock',
                            'title' => 'Just-in-Time Pressure',
                            'description' => 'Meeting just-in-time delivery requirements while managing inventory costs is increasingly challenging.'
                        ],
                        [
                            'icon' => 'chart',
                            'title' => 'Quality Management',
                            'description' => 'Tracking defects and managing quality across suppliers requires extensive coordination.'
                        ],
                        [
                            'icon' => 'database',
                            'title' => 'Parts Traceability',
                            'description' => 'Complete traceability for safety-critical parts is essential for recalls and compliance.'
                        ],
                        [
                            'icon' => 'users',
                            'title' => 'Supplier Collaboration',
                            'description' => 'Poor supplier integration leads to communication gaps and supply disruptions.'
                        ],
                        [
                            'icon' => 'shield',
                            'title' => 'Compliance Burden',
                            'description' => 'Meeting IATF 16949 and customer-specific requirements demands rigorous documentation.'
                        ]
                    ],
                    'solutions' => [
                        [
                            'icon' => 'cloud',
                            'title' => 'Supply Chain Visibility',
                            'description' => 'Real-time visibility across your entire supply chain with multi-tier tracking.',
                            'features' => [
                                'Multi-tier supply chain tracking',
                                'Real-time inventory visibility',
                                'Supplier performance dashboards',
                                'Demand sensing and forecasting'
                            ]
                        ],
                        [
                            'icon' => 'qrcode',
                            'title' => 'Parts Traceability',
                            'description' => 'Complete lot and serial number traceability for safety-critical components.',
                            'features' => [
                                'Lot/serial number tracking',
                                'Recall management',
                                'Chain of custody',
                                'Digital audit trails'
                            ]
                        ],
                        [
                            'icon' => 'chip',
                            'title' => 'Quality Management',
                            'description' => 'Automated quality control with defect tracking and corrective actions.',
                            'features' => [
                                'Automated inspections',
                                'Defect tracking',
                                'Supplier scorecards',
                                'Corrective action workflows'
                            ]
                        ],
                        [
                            'icon' => 'refresh',
                            'title' => 'Just-in-Time Optimization',
                            'description' => 'Optimize inventory levels with demand-driven replenishment.',
                            'features' => [
                                'Demand forecasting',
                                'Safety stock optimization',
                                'Automated replenishment',
                                'Kanban integration'
                            ]
                        ],
                        [
                            'icon' => 'chart',
                            'title' => 'Supplier Performance',
                            'description' => 'Comprehensive supplier scorecards and performance analytics.',
                            'features' => [
                                'Supplier KPIs',
                                'Delivery performance',
                                'Quality metrics',
                                'Cost analytics'
                            ]
                        ],
                        [
                            'icon' => 'shield',
                            'title' => 'Compliance Management',
                            'description' => 'Automated IATF 16949 compliance documentation and reporting.',
                            'features' => [
                                'Compliance dashboards',
                                'Audit trails',
                                'Document control',
                                'Corrective action tracking'
                            ]
                        ]
                    ],
                    'showFeatures' => true,
                    'features' => [
                        'title' => 'Why Automotive Leaders Choose Us',
                        'items' => [
                            ['icon' => 'shield', 'title' => 'IATF 16949'],
                            ['icon' => 'truck', 'title' => 'JIT Ready'],
                            ['icon' => 'qrcode', 'title' => 'Traceability'],
                            ['icon' => 'cloud', 'title' => 'Multi-tier'],
                            ['icon' => 'database', 'title' => 'Supplier Portal'],
                            ['icon' => 'users', 'title' => '24/7 Support'],
                            ['icon' => 'trending', 'title' => 'Scalable'],
                            ['icon' => 'chart', 'title' => 'Analytics']
                        ]
                    ],
                    'showStandards' => true,
                    'standardsText' => 'IATF 16949 | ISO 9001 | MMOG/LE | AIAG Guidelines | VDA 6.3',
                    'showSuccessMetrics' => true,
                    'successMetrics' => [
                        ['icon' => 'trending', 'value' => '287%', 'label' => 'Average ROI'],
                        ['icon' => 'clock', 'value' => '35%', 'label' => 'Inventory Reduction'],
                        ['icon' => 'star', 'value' => '99.5%', 'label' => 'On-Time Delivery'],
                        ['icon' => 'dollar', 'value' => '$1.5M', 'label' => 'Avg. Annual Savings']
                    ],
                    'showCta' => true,
                    'ctaText' => 'Ready to transform your automotive operations?',
                    'ctaButtonText' => 'Get Started Today',
                    'ctaLink' => '/demo'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 190,
                'section_key' => 'automotive',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Success Stories',
                        'backgroundColor' => 'bg-blue-50 dark:bg-blue-900/30',
                        'borderColor' => 'border-blue-200 dark:border-blue-800',
                        'textColor' => 'text-blue-700 dark:text-blue-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Automotive',
                        'highlightedText' => 'Success Stories',
                        'suffix' => '',
                        'highlightGradient' => 'from-blue-500 to-slate-500'
                    ],
                    'description' => 'See how automotive manufacturers and suppliers are optimizing supply chains and reducing costs.',
                    'initialIndex' => 0,
                    'autoplay' => true,
                    'autoplayInterval' => 6000,
                    'caseStudies' => [
                        [
                            'id' => 'precision-automotive',
                            'icon' => 'car',
                            'company' => 'Precision Automotive Parts',
                            'location' => 'Detroit, MI',
                            'industry' => 'Tier 1 Supplier',
                            'keyResult' => ['value' => '45%', 'label' => 'Inventory Reduction'],
                            'results' => [
                                ['value' => '45%', 'label' => 'Inventory Reduction'],
                                ['value' => '99.5%', 'label' => 'On-Time Delivery'],
                                ['value' => '$2.5M', 'label' => 'Annual Savings'],
                                ['value' => '3x', 'label' => 'ROI']
                            ],
                            'challenge' => 'Precision Automotive struggled with excess inventory across 5 warehouses, high carrying costs, and difficulty meeting JIT delivery requirements for major OEMs.',
                            'solution' => 'Implemented our JIT inventory optimization platform with real-time demand sensing, automated replenishment, and supplier collaboration tools.',
                            'standards' => ['IATF 16949', 'ISO 9001', 'MMOG/LE'],
                            'testimonial' => [
                                'quote' => 'We\'ve reduced inventory by 45% while improving on-time delivery to 99.5%. The system has transformed our supply chain operations.',
                                'author' => 'Robert Chen',
                                'role' => 'Supply Chain Director'
                            ],
                            'downloadLink' => '/case-studies/precision-automotive/download',
                            'videoLink' => '/case-studies/precision-automotive/video'
                        ],
                        [
                            'id' => 'ev-battery-solutions',
                            'icon' => 'cog',
                            'company' => 'EV Battery Solutions',
                            'location' => 'San Jose, CA',
                            'industry' => 'EV Components',
                            'keyResult' => ['value' => '100%', 'label' => 'Traceability'],
                            'results' => [
                                ['value' => '100%', 'label' => 'Traceability Rate'],
                                ['value' => '0', 'label' => 'Recall Incidents'],
                                ['value' => '$1.8M', 'label' => 'Annual Savings'],
                                ['value' => '2.8x', 'label' => 'ROI']
                            ],
                            'challenge' => 'Complete traceability for battery components was required for safety compliance. Manual tracking across global supply chain was error-prone and inefficient.',
                            'solution' => 'Deployed our end-to-end traceability solution with serial number tracking, chain of custody, and automated recall management.',
                            'standards' => ['IATF 16949', 'ISO 14001', 'AIAG Guidelines'],
                            'testimonial' => [
                                'quote' => 'We now have complete confidence in our traceability. Audit preparation that took weeks now takes hours.',
                                'author' => 'Sarah Johnson',
                                'role' => 'Quality Director'
                            ],
                            'downloadLink' => '/case-studies/ev-battery/download',
                            'videoLink' => '/case-studies/ev-battery/video'
                        ],
                        [
                            'id' => 'global-logistics',
                            'icon' => 'truck',
                            'company' => 'Global Automotive Logistics',
                            'location' => 'Atlanta, GA',
                            'industry' => 'Logistics Provider',
                            'keyResult' => ['value' => '35%', 'label' => 'Faster Throughput'],
                            'results' => [
                                ['value' => '35%', 'label' => 'Faster Throughput'],
                                ['value' => '99.9%', 'label' => 'Scan Accuracy'],
                                ['value' => '$1.2M', 'label' => 'Annual Savings'],
                                ['value' => '2.5x', 'label' => 'ROI']
                            ],
                            'challenge' => 'Manual scanning and tracking across 12 distribution centers caused processing delays, errors, and customer chargebacks.',
                            'solution' => 'Implemented our automated scanning solution with real-time tracking, warehouse optimization, and customer portals.',
                            'standards' => ['ISO 9001', 'MMOG/LE', 'VDA 6.3'],
                            'testimonial' => [
                                'quote' => 'Throughput is up 35% and accuracy is near perfect. Our customers love the real-time visibility.',
                                'author' => 'Mike Williams',
                                'role' => 'Operations VP'
                            ],
                            'downloadLink' => '/case-studies/global-logistics/download',
                            'videoLink' => '/case-studies/global-logistics/video'
                        ]
                    ],
                    'showAdditionalCases' => true,
                    'additionalCasesTitle' => 'More Success Stories',
                    'additionalCases' => [
                        [
                            'icon' => 'car',
                            'company' => 'AutoTrim Solutions',
                            'industry' => 'Interior Components',
                            'result' => '40%',
                            'resultLabel' => 'Faster Changeover',
                            'description' => 'Reduced production changeover time with real-time inventory visibility.',
                            'link' => '/case-studies/autotrim'
                        ],
                        [
                            'icon' => 'cog',
                            'company' => 'Powertrain Systems',
                            'industry' => 'Engine Components',
                            'result' => '99.9%',
                            'resultLabel' => 'Quality Rate',
                            'description' => 'Achieved near-perfect quality with automated inspection and tracking.',
                            'link' => '/case-studies/powertrain'
                        ],
                        [
                            'icon' => 'truck',
                            'company' => 'FastFreight Logistics',
                            'industry' => 'Transportation',
                            'result' => '25%',
                            'resultLabel' => 'Cost Reduction',
                            'description' => 'Optimized routing and reduced empty miles with real-time tracking.',
                            'link' => '/case-studies/fastfreight'
                        ]
                    ],
                    'showJITCalculator' => true,
                    'inventoryReduction' => '25-35%',
                    'carryingCostSavings' => '30-40%',
                    'paybackPeriod' => '6-8',
                    'calculatorLink' => '/jit-calculator',
                    'showPartners' => true,
                    'partnersTitle' => 'Trusted by leading automotive manufacturers and suppliers',
                    'partners' => [
                        ['icon' => 'car', 'name' => 'Ford'],
                        ['icon' => 'cog', 'name' => 'Bosch'],
                        ['icon' => 'truck', 'name' => 'DHL'],
                        ['icon' => 'car', 'name' => 'Toyota'],
                        ['icon' => 'cog', 'name' => 'Continental'],
                        ['icon' => 'truck', 'name' => 'Ryder']
                    ],
                    'showCta' => true,
                    'ctaText' => 'Ready to write your own success story?',
                    'ctaButtonText' => 'Start Your Journey',
                    'ctaLink' => '/demo'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 191,
                'section_key' => 'automotive',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Features & FAQ',
                        'backgroundColor' => 'bg-blue-50 dark:bg-blue-900/30',
                        'borderColor' => 'border-blue-200 dark:border-blue-800',
                        'textColor' => 'text-blue-700 dark:text-blue-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Everything You',
                        'highlightedText' => 'Need for Automotive',
                        'suffix' => '',
                        'highlightGradient' => 'from-blue-500 to-slate-500'
                    ],
                    'description' => 'Comprehensive automotive supply chain solutions designed to optimize inventory, ensure quality, and meet industry standards.',
                    'initialFeature' => 0,
                    'showFeatureGrid' => true,
                    'benefits' => [
                        ['icon' => 'trending', 'value' => '287%', 'label' => 'Average ROI'],
                        ['icon' => 'clock', 'value' => '35%', 'label' => 'Inventory Reduction'],
                        ['icon' => 'dollar', 'value' => '$1.5M', 'label' => 'Avg. Annual Savings'],
                        ['icon' => 'star', 'value' => '99.5%', 'label' => 'On-Time Delivery']
                    ],
                    'features' => [
                        [
                            'icon' => 'cloud',
                            'title' => 'Supply Chain Visibility',
                            'shortDescription' => 'End-to-end visibility',
                            'description' => 'Real-time visibility across your entire automotive supply chain with multi-tier tracking, supplier performance dashboards, and demand sensing.',
                            'capabilities' => [
                                'Multi-tier supply chain tracking',
                                'Real-time inventory visibility',
                                'Supplier performance dashboards',
                                'Demand sensing and forecasting',
                                'Transportation visibility'
                            ],
                            'standards' => ['IATF 16949', 'MMOG/LE'],
                            'link' => '/automotive/supply-chain'
                        ],
                        [
                            'icon' => 'qrcode',
                            'title' => 'Parts Traceability',
                            'shortDescription' => 'Complete traceability',
                            'description' => 'End-to-end lot and serial number traceability for safety-critical components with recall management and chain of custody documentation.',
                            'capabilities' => [
                                'Lot/serial number tracking',
                                'Recall management',
                                'Chain of custody',
                                'Digital audit trails',
                                'Genealogy tracking'
                            ],
                            'standards' => ['IATF 16949', 'AIAG Guidelines', 'VDA 6.3'],
                            'link' => '/automotive/traceability'
                        ],
                        [
                            'icon' => 'chip',
                            'title' => 'Quality Management',
                            'shortDescription' => 'Automated quality control',
                            'description' => 'Automated quality control with defect tracking, supplier scorecards, and corrective action workflows for continuous improvement.',
                            'capabilities' => [
                                'Automated inspections',
                                'Defect tracking and analysis',
                                'Supplier scorecards',
                                'Corrective action workflows',
                                'PPAP documentation'
                            ],
                            'standards' => ['IATF 16949', 'ISO 9001', 'VDA 6.3'],
                            'link' => '/automotive/quality'
                        ],
                        [
                            'icon' => 'refresh',
                            'title' => 'JIT Optimization',
                            'shortDescription' => 'Just-in-time inventory',
                            'description' => 'Optimize inventory levels with demand-driven replenishment, kanban integration, and automated supplier collaboration.',
                            'capabilities' => [
                                'Demand forecasting',
                                'Safety stock optimization',
                                'Automated replenishment',
                                'Kanban integration',
                                'Supplier portals'
                            ],
                            'standards' => ['MMOG/LE', 'AIAG Guidelines'],
                            'link' => '/automotive/jit'
                        ],
                        [
                            'icon' => 'chart',
                            'title' => 'Supplier Performance',
                            'shortDescription' => 'Supplier analytics',
                            'description' => 'Comprehensive supplier scorecards and performance analytics for delivery, quality, and cost metrics.',
                            'capabilities' => [
                                'Supplier KPIs',
                                'Delivery performance',
                                'Quality metrics',
                                'Cost analytics',
                                'Performance benchmarking'
                            ],
                            'standards' => ['IATF 16949', 'MMOG/LE'],
                            'link' => '/automotive/supplier-performance'
                        ],
                        [
                            'icon' => 'shield',
                            'title' => 'Compliance Management',
                            'shortDescription' => 'IATF 16949 compliance',
                            'description' => 'Automated IATF 16949 compliance documentation, audit trails, and corrective action tracking.',
                            'capabilities' => [
                                'Compliance dashboards',
                                'Audit trails',
                                'Document control',
                                'Corrective action tracking',
                                'Non-conformance management'
                            ],
                            'standards' => ['IATF 16949', 'ISO 9001', 'VDA 6.3'],
                            'link' => '/automotive/compliance'
                        ]
                    ],
                    'showComparison' => true,
                    'comparison' => [
                        'before' => [
                            'Limited supply chain visibility',
                            'Manual traceability records',
                            'Reactive quality management',
                            'Excess inventory carrying costs',
                            'Paper-based compliance'
                        ],
                        'after' => [
                            'Real-time supply chain visibility',
                            'Complete digital traceability',
                            'Proactive quality control',
                            '30-40% inventory reduction',
                            'Automated digital compliance'
                        ]
                    ],
                    'showTechStack' => true,
                    'techStackTitle' => 'Seamlessly Integrates With Your Automotive Stack',
                    'techStack' => [
                        ['icon' => 'cloud', 'name' => 'SAP'],
                        ['icon' => 'database', 'name' => 'Oracle'],
                        ['icon' => 'truck', 'name' => 'Manhattan'],
                        ['icon' => 'chart', 'name' => 'QAD'],
                        ['icon' => 'cog', 'name' => 'Plex'],
                        ['icon' => 'car', 'name' => 'Epicor'],
                        ['icon' => 'chip', 'name' => 'Siemens'],
                        ['icon' => 'wrench', 'name' => 'Rockwell']
                    ],
                    'showHowItWorks' => true,
                    'howItWorksTitle' => 'How It Works',
                    'steps' => [
                        ['icon' => 'database', 'title' => 'Connect', 'description' => 'Integrate with your ERP, MES, and supplier systems.'],
                        ['icon' => 'qrcode', 'title' => 'Track', 'description' => 'Scan parts at each stage of production and logistics.'],
                        ['icon' => 'chart', 'title' => 'Optimize', 'description' => 'Use analytics to optimize inventory and supplier performance.']
                    ],
                    'showFaq' => true,
                    'faqTitle' => 'Frequently Asked Questions',
                    'faqs' => [
                        [
                            'question' => 'Is the platform IATF 16949 compliant?',
                            'answer' => 'Yes, our platform is built to support IATF 16949 requirements including traceability, corrective action, and document control. We help you maintain compliance with automated audit trails.'
                        ],
                        [
                            'question' => 'How does it handle PPAP documentation?',
                            'answer' => 'Our system manages PPAP documentation with version control, approval workflows, and supplier submission tracking. All documents are centralized and audit-ready.'
                        ],
                        [
                            'question' => 'Can it integrate with our existing ERP?',
                            'answer' => 'Yes, we offer pre-built integrations with major automotive ERPs including SAP, Oracle, QAD, Plex, and Epicor. Custom integrations are also available.'
                        ],
                        [
                            'question' => 'How does it support EDI transactions?',
                            'answer' => 'Our platform supports standard automotive EDI transactions including 830, 862, 856, and 810. We integrate with your existing EDI provider or can act as a managed service.'
                        ],
                        [
                            'question' => 'Is there a demo available?',
                            'answer' => 'Yes! We offer personalized demos tailored to your specific automotive operations. Contact our team to schedule a demo.'
                        ]
                    ],
                    'showResources' => true,
                    'resourcesTitle' => 'Helpful Resources',
                    'resources' => [
                        [
                            'icon' => 'document',
                            'title' => 'Automotive Supply Chain Guide',
                            'description' => 'Learn best practices for automotive supply chain optimization.',
                            'cta' => 'Download Guide',
                            'link' => '/resources/automotive-guide'
                        ],
                        [
                            'icon' => 'play',
                            'title' => 'Platform Demo',
                            'description' => 'Watch an 8-minute overview of our automotive solutions.',
                            'cta' => 'Watch Demo',
                            'link' => '/resources/demo-video'
                        ],
                        [
                            'icon' => 'download',
                            'title' => 'JIT Savings Calculator',
                            'description' => 'Calculate potential savings for your automotive operations.',
                            'cta' => 'Calculate Now',
                            'link' => '/resources/roi-calculator'
                        ]
                    ],
                    'showCta' => true,
                    'ctaText' => 'Ready to transform your automotive operations?',
                    'ctaButtonText' => 'Get Started Today',
                    'ctaLink' => '/demo'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 192,
                'section_key' => 'automotive',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Electronics Section
            [
                'id' => 193,
                'section_key' => 'electronics',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Industry Focus',
                        'backgroundColor' => 'bg-purple-50 dark:bg-purple-900/30',
                        'borderColor' => 'border-purple-200 dark:border-purple-800',
                        'textColor' => 'text-purple-700 dark:text-purple-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Electronics',
                        'highlightedText' => 'Supply Chain Solutions',
                        'suffix' => '',
                        'highlightGradient' => 'from-purple-500 to-indigo-500'
                    ],
                    'description' => 'Optimize your electronics supply chain with component traceability, inventory optimization, and quality management.',
                    'initialTab' => 'overview',
                    'showStats' => true,
                    'stats' => [
                        ['icon' => 'chip', 'value' => '300+', 'label' => 'Electronics Companies'],
                        ['icon' => 'database', 'value' => '5M+', 'label' => 'Components Managed'],
                        ['icon' => 'trending', 'value' => '30%', 'label' => 'Inventory Reduction'],
                        ['icon' => 'clock', 'value' => '99.5%', 'label' => 'On-Time Delivery']
                    ],
                    'overview' => [
                        'title' => 'Component Traceability & Supply Chain Optimization',
                        'description' => 'Our platform helps electronics manufacturers, distributors, and contract manufacturers track components from supplier to finished product with complete traceability and quality control.',
                        'highlights' => [
                            'Complete component traceability from wafer to finished good',
                            'RoHS and REACH compliance management',
                            'Obsolescence management and lifecycle tracking',
                            'Counterfeit component detection',
                            'ESD and moisture sensitivity tracking'
                        ],
                        'ctaText' => 'Explore Solutions',
                        'ctaLink' => '/solutions/electronics',
                        'statsCards' => [
                            ['value' => '50+', 'label' => 'Integrations'],
                            ['value' => '99.9%', 'label' => 'Traceability Rate'],
                            ['value' => '24/7', 'label' => 'Support'],
                            ['value' => '500+', 'label' => 'Happy Clients']
                        ]
                    ],
                    'challenges' => [
                        [
                            'icon' => 'database',
                            'title' => 'Component Traceability',
                            'description' => 'Tracking components from multiple suppliers across global supply chains is complex and error-prone.'
                        ],
                        [
                            'icon' => 'clock',
                            'title' => 'Obsolescence Management',
                            'description' => 'Managing end-of-life components and last-time-buy decisions is critical to avoid production disruptions.'
                        ],
                        [
                            'icon' => 'shield',
                            'title' => 'Counterfeit Prevention',
                            'description' => 'Detecting and preventing counterfeit components requires rigorous inspection and documentation.'
                        ],
                        [
                            'icon' => 'chart',
                            'title' => 'Inventory Optimization',
                            'description' => 'Balancing component inventory levels with long lead times and demand volatility is challenging.'
                        ],
                        [
                            'icon' => 'truck',
                            'title' => 'Supply Chain Visibility',
                            'description' => 'Limited visibility across multi-tier supply chains causes production delays and excess inventory.'
                        ],
                        [
                            'icon' => 'bulb',
                            'title' => 'Compliance Management',
                            'description' => 'Meeting RoHS, REACH, and conflict minerals requirements demands extensive documentation.'
                        ]
                    ],
                    'solutions' => [
                        [
                            'icon' => 'qrcode',
                            'title' => 'Component Traceability',
                            'description' => 'Complete lot and date code traceability from supplier to finished product.',
                            'features' => [
                                'Lot/date code tracking',
                                'Supplier traceability',
                                'Recall management',
                                'Digital audit trails'
                            ]
                        ],
                        [
                            'icon' => 'chip',
                            'title' => 'Obsolescence Management',
                            'description' => 'Proactive management of component obsolescence with last-time-buy planning.',
                            'features' => [
                                'Lifecycle tracking',
                                'Last-time-buy alerts',
                                'Alternative part recommendations',
                                'End-of-life planning'
                            ]
                        ],
                        [
                            'icon' => 'shield',
                            'title' => 'Counterfeit Detection',
                            'description' => 'Automated counterfeit detection with inspection workflows and documentation.',
                            'features' => [
                                'Inspection checklists',
                                'Testing documentation',
                                'Risk scoring',
                                'Supplier qualification'
                            ]
                        ],
                        [
                            'icon' => 'cloud',
                            'title' => 'Inventory Optimization',
                            'description' => 'Optimize component inventory with demand forecasting and safety stock calculations.',
                            'features' => [
                                'Demand forecasting',
                                'Safety stock optimization',
                                'Lead time management',
                                'Automated replenishment'
                            ]
                        ],
                        [
                            'icon' => 'trending',
                            'title' => 'Supply Chain Visibility',
                            'description' => 'Real-time visibility across your entire electronics supply chain.',
                            'features' => [
                                'Multi-tier visibility',
                                'Supplier portals',
                                'Order tracking',
                                'Performance analytics'
                            ]
                        ],
                        [
                            'icon' => 'document',
                            'title' => 'Compliance Management',
                            'description' => 'Automated RoHS, REACH, and conflict minerals compliance documentation.',
                            'features' => [
                                'Compliance dashboards',
                                'Certification tracking',
                                'Declarations management',
                                'Audit reporting'
                            ]
                        ]
                    ],
                    'showFeatures' => true,
                    'features' => [
                        'title' => 'Why Electronics Leaders Choose Us',
                        'items' => [
                            ['icon' => 'shield', 'title' => 'IPC-A-610'],
                            ['icon' => 'chip', 'title' => 'Traceability'],
                            ['icon' => 'clock', 'title' => 'Obsolescence'],
                            ['icon' => 'cloud', 'title' => 'Multi-tier'],
                            ['icon' => 'database', 'title' => 'Supplier Portal'],
                            ['icon' => 'users', 'title' => '24/7 Support'],
                            ['icon' => 'trending', 'title' => 'Scalable'],
                            ['icon' => 'chart', 'title' => 'Analytics']
                        ]
                    ],
                    'showStandards' => true,
                    'standardsText' => 'ISO 9001 | IPC-A-610 | J-STD-001 | RoHS Compliant | REACH | UL Certified | AS9100D',
                    'showSuccessMetrics' => true,
                    'successMetrics' => [
                        ['icon' => 'trending', 'value' => '287%', 'label' => 'Average ROI'],
                        ['icon' => 'clock', 'value' => '35%', 'label' => 'Inventory Reduction'],
                        ['icon' => 'star', 'value' => '99.5%', 'label' => 'Traceability Rate'],
                        ['icon' => 'dollar', 'value' => '$1.2M', 'label' => 'Avg. Annual Savings']
                    ],
                    'showCta' => true,
                    'ctaText' => 'Ready to transform your electronics operations?',
                    'ctaButtonText' => 'Get Started Today',
                    'ctaLink' => '/demo'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 194,
                'section_key' => 'electronics',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Success Stories',
                        'backgroundColor' => 'bg-purple-50 dark:bg-purple-900/30',
                        'borderColor' => 'border-purple-200 dark:border-purple-800',
                        'textColor' => 'text-purple-700 dark:text-purple-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Electronics',
                        'highlightedText' => 'Success Stories',
                        'suffix' => '',
                        'highlightGradient' => 'from-purple-500 to-indigo-500'
                    ],
                    'description' => 'See how electronics companies are managing component traceability, obsolescence, and supply chain optimization.',
                    'initialIndex' => 0,
                    'autoplay' => true,
                    'autoplayInterval' => 6000,
                    'caseStudies' => [
                        [
                            'id' => 'precision-electronics',
                            'icon' => 'chip',
                            'company' => 'Precision Electronics',
                            'location' => 'San Jose, CA',
                            'industry' => 'PCB Assembly',
                            'keyResult' => ['value' => '45%', 'label' => 'Faster Time-to-Market'],
                            'results' => [
                                ['value' => '45%', 'label' => 'Faster Time-to-Market'],
                                ['value' => '99.9%', 'label' => 'Component Traceability'],
                                ['value' => '$2.1M', 'label' => 'Annual Savings'],
                                ['value' => '3x', 'label' => 'ROI']
                            ],
                            'challenge' => 'Precision Electronics struggled with component traceability across 1000+ suppliers, leading to recall risks and compliance issues for medical device customers.',
                            'solution' => 'Implemented our end-to-end traceability solution with lot tracking, supplier portals, and automated compliance reporting for RoHS and REACH.',
                            'compliance' => ['IPC-A-610', 'RoHS Compliant', 'REACH', 'ISO 9001'],
                            'testimonial' => [
                                'quote' => 'We now have complete traceability from component to finished board. Audit preparation that took weeks now takes hours.',
                                'author' => 'David Kim',
                                'role' => 'Quality Director'
                            ],
                            'downloadLink' => '/case-studies/precision-electronics/download',
                            'videoLink' => '/case-studies/precision-electronics/video'
                        ],
                        [
                            'id' => 'semiconductor-solutions',
                            'icon' => 'microphone',
                            'company' => 'Semiconductor Solutions',
                            'location' => 'Austin, TX',
                            'industry' => 'Semiconductors',
                            'keyResult' => ['value' => '60%', 'label' => 'Obsolescence Cost Reduction'],
                            'results' => [
                                ['value' => '60%', 'label' => 'Obsolescence Cost Reduction'],
                                ['value' => '0', 'label' => 'Production Stops'],
                                ['value' => '$3.2M', 'label' => 'Annual Savings'],
                                ['value' => '4x', 'label' => 'ROI']
                            ],
                            'challenge' => 'Managing component obsolescence across thousands of active parts was causing production stops and expensive last-time buys without proper planning.',
                            'solution' => 'Deployed our obsolescence management platform with lifecycle tracking, last-time-buy optimization, and alternative part recommendations.',
                            'compliance' => ['J-STD-001', 'AS9100D', 'IPC-A-610'],
                            'testimonial' => [
                                'quote' => 'We\'ve eliminated production stops from obsolescence and reduced last-time-buy costs by 60%. The ROI has been exceptional.',
                                'author' => 'Sarah Chen',
                                'role' => 'Supply Chain VP'
                            ],
                            'downloadLink' => '/case-studies/semiconductor/download',
                            'videoLink' => '/case-studies/semiconductor/video'
                        ],
                        [
                            'id' => 'consumer-electronics',
                            'icon' => 'mobile',
                            'company' => 'Consumer Electronics Inc.',
                            'location' => 'Shenzhen, China',
                            'industry' => 'Consumer Electronics',
                            'keyResult' => ['value' => '50%', 'label' => 'Inventory Reduction'],
                            'results' => [
                                ['value' => '50%', 'label' => 'Inventory Reduction'],
                                ['value' => '99.5%', 'label' => 'On-Time Delivery'],
                                ['value' => '$1.8M', 'label' => 'Annual Savings'],
                                ['value' => '2.5x', 'label' => 'ROI']
                            ],
                            'challenge' => 'Managing inventory across 5000+ SKUs with volatile demand and long lead times was causing excess inventory and stockouts.',
                            'solution' => 'Implemented our inventory optimization platform with demand forecasting, safety stock optimization, and automated replenishment.',
                            'compliance' => ['RoHS', 'REACH', 'WEEE'],
                            'testimonial' => [
                                'quote' => 'Inventory is down 50% while service levels improved to 99.5%. The forecasting accuracy is remarkable.',
                                'author' => 'Michael Lee',
                                'role' => 'Operations Director'
                            ],
                            'downloadLink' => '/case-studies/consumer-electronics/download',
                            'videoLink' => '/case-studies/consumer-electronics/video'
                        ]
                    ],
                    'showAdditionalCases' => true,
                    'additionalCasesTitle' => 'More Success Stories',
                    'additionalCases' => [
                        [
                            'icon' => 'chip',
                            'company' => 'Power Systems Inc.',
                            'industry' => 'Power Electronics',
                            'result' => '99.9%',
                            'resultLabel' => 'Traceability',
                            'description' => 'Achieved complete component traceability for automotive customers.',
                            'link' => '/case-studies/power-systems'
                        ],
                        [
                            'icon' => 'desktop',
                            'company' => 'Compute Solutions',
                            'industry' => 'Computer Hardware',
                            'result' => '35%',
                            'resultLabel' => 'Cost Reduction',
                            'description' => 'Reduced supply chain costs with supplier consolidation.',
                            'link' => '/case-studies/compute-solutions'
                        ],
                        [
                            'icon' => 'cog',
                            'company' => 'EMS Technologies',
                            'industry' => 'Contract Manufacturing',
                            'result' => '50%',
                            'resultLabel' => 'Faster Turnaround',
                            'description' => 'Cut production lead times in half with real-time tracking.',
                            'link' => '/case-studies/ems-technologies'
                        ]
                    ],
                    'showObsolescenceCalculator' => true,
                    'obsolescenceReduction' => '40-60%',
                    'lastTimeBuySavings' => '25-35%',
                    'paybackPeriod' => '6-9',
                    'calculatorLink' => '/obsolescence-calculator',
                    'showPartners' => true,
                    'partnersTitle' => 'Trusted by leading electronics manufacturers and distributors',
                    'partners' => [
                        ['icon' => 'chip', 'name' => 'Arrow'],
                        ['icon' => 'database', 'name' => 'Avnet'],
                        ['icon' => 'truck', 'name' => 'DigiKey'],
                        ['icon' => 'chip', 'name' => 'Mouser'],
                        ['icon' => 'cog', 'name' => 'Flex'],
                        ['icon' => 'desktop', 'name' => 'Jabil']
                    ],
                    'showCta' => true,
                    'ctaText' => 'Ready to write your own success story?',
                    'ctaButtonText' => 'Start Your Journey',
                    'ctaLink' => '/demo'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 195,
                'section_key' => 'electronics',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Features & FAQ',
                        'backgroundColor' => 'bg-purple-50 dark:bg-purple-900/30',
                        'borderColor' => 'border-purple-200 dark:border-purple-800',
                        'textColor' => 'text-purple-700 dark:text-purple-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Everything You',
                        'highlightedText' => 'Need for Electronics',
                        'suffix' => '',
                        'highlightGradient' => 'from-purple-500 to-indigo-500'
                    ],
                    'description' => 'Comprehensive electronics supply chain solutions designed to optimize component traceability, manage obsolescence, and ensure compliance.',
                    'initialFeature' => 0,
                    'showFeatureGrid' => true,
                    'benefits' => [
                        ['icon' => 'trending', 'value' => '287%', 'label' => 'Average ROI'],
                        ['icon' => 'clock', 'value' => '45%', 'label' => 'Faster Time-to-Market'],
                        ['icon' => 'dollar', 'value' => '$1.5M', 'label' => 'Avg. Annual Savings'],
                        ['icon' => 'star', 'value' => '99.5%', 'label' => 'Traceability Rate']
                    ],
                    'features' => [
                        [
                            'icon' => 'qrcode',
                            'title' => 'Component Traceability',
                            'shortDescription' => 'Complete lot traceability',
                            'description' => 'End-to-end component traceability from supplier to finished product with lot tracking, date code management, and recall capabilities.',
                            'capabilities' => [
                                'Lot/date code tracking',
                                'Supplier traceability',
                                'Recall management',
                                'Digital audit trails',
                                'Chain of custody'
                            ],
                            'standards' => ['IPC-A-610', 'J-STD-001', 'ISO 9001'],
                            'link' => '/electronics/traceability'
                        ],
                        [
                            'icon' => 'chip',
                            'title' => 'Obsolescence Management',
                            'shortDescription' => 'Proactive lifecycle tracking',
                            'description' => 'Proactive management of component obsolescence with lifecycle tracking, last-time-buy optimization, and alternative part recommendations.',
                            'capabilities' => [
                                'Lifecycle tracking',
                                'Last-time-buy alerts',
                                'Alternative part recommendations',
                                'End-of-life planning',
                                'Risk assessment'
                            ],
                            'standards' => ['AS9100D', 'ISO 9001'],
                            'link' => '/electronics/obsolescence'
                        ],
                        [
                            'icon' => 'shield',
                            'title' => 'Counterfeit Detection',
                            'shortDescription' => 'Automated inspection',
                            'description' => 'Automated counterfeit detection with inspection workflows, testing documentation, and supplier qualification tracking.',
                            'capabilities' => [
                                'Inspection checklists',
                                'Testing documentation',
                                'Risk scoring',
                                'Supplier qualification',
                                'Visual inspection guides'
                            ],
                            'standards' => ['AS6081', 'IDEA-STD-1010', 'SAE AS5553'],
                            'link' => '/electronics/counterfeit-detection'
                        ],
                        [
                            'icon' => 'cloud',
                            'title' => 'Supply Chain Visibility',
                            'shortDescription' => 'Multi-tier visibility',
                            'description' => 'Real-time visibility across your multi-tier electronics supply chain with supplier portals and order tracking.',
                            'capabilities' => [
                                'Multi-tier visibility',
                                'Supplier portals',
                                'Order tracking',
                                'Performance analytics',
                                'Lead time monitoring'
                            ],
                            'standards' => ['ISO 9001'],
                            'link' => '/electronics/supply-chain'
                        ],
                        [
                            'icon' => 'database',
                            'title' => 'Inventory Optimization',
                            'shortDescription' => 'Demand forecasting',
                            'description' => 'Optimize component inventory with demand forecasting, safety stock calculations, and automated replenishment.',
                            'capabilities' => [
                                'Demand forecasting',
                                'Safety stock optimization',
                                'Lead time management',
                                'Automated replenishment',
                                'ABC analysis'
                            ],
                            'standards' => ['ISO 9001'],
                            'link' => '/electronics/inventory'
                        ],
                        [
                            'icon' => 'document',
                            'title' => 'Compliance Management',
                            'shortDescription' => 'RoHS/REACH compliance',
                            'description' => 'Automated RoHS, REACH, and conflict minerals compliance documentation with certification tracking and declarations management.',
                            'capabilities' => [
                                'Compliance dashboards',
                                'Certification tracking',
                                'Declarations management',
                                'Audit reporting',
                                'Supplier compliance'
                            ],
                            'standards' => ['RoHS', 'REACH', 'Conflict Minerals'],
                            'link' => '/electronics/compliance'
                        ]
                    ],
                    'showComparison' => true,
                    'comparison' => [
                        'before' => [
                            'Manual component tracking errors',
                            'Reactive obsolescence management',
                            'Counterfeit risk exposure',
                            'Limited supply chain visibility',
                            'Paper-based compliance'
                        ],
                        'after' => [
                            '99.9% component traceability',
                            'Proactive lifecycle management',
                            'Automated counterfeit detection',
                            'Real-time supply chain visibility',
                            'Automated digital compliance'
                        ]
                    ],
                    'showTechStack' => true,
                    'techStackTitle' => 'Seamlessly Integrates With Your Electronics Stack',
                    'techStack' => [
                        ['icon' => 'cloud', 'name' => 'Oracle'],
                        ['icon' => 'database', 'name' => 'SAP'],
                        ['icon' => 'chip', 'name' => 'Plex'],
                        ['icon' => 'cog', 'name' => 'Kinaxis'],
                        ['icon' => 'chart', 'name' => 'Tableau'],
                        ['icon' => 'truck', 'name' => 'Blue Yonder'],
                        ['icon' => 'desktop', 'name' => 'Siemens'],
                        ['icon' => 'microphone', 'name' => 'Arena']
                    ],
                    'showHowItWorks' => true,
                    'howItWorksTitle' => 'How It Works',
                    'steps' => [
                        ['icon' => 'database', 'title' => 'Connect', 'description' => 'Integrate with your ERP, PLM, and supplier systems.'],
                        ['icon' => 'qrcode', 'title' => 'Track', 'description' => 'Scan components at each stage of production.'],
                        ['icon' => 'chart', 'title' => 'Optimize', 'description' => 'Use analytics to manage obsolescence and inventory.']
                    ],
                    'showFaq' => true,
                    'faqTitle' => 'Frequently Asked Questions',
                    'faqs' => [
                        [
                            'question' => 'How does the platform handle component traceability?',
                            'answer' => 'Our system provides complete lot and date code traceability from supplier receipt through finished product shipment. Every component can be traced forward and backward for recall management.'
                        ],
                        [
                            'question' => 'How does obsolescence management work?',
                            'answer' => 'We monitor component lifecycle status from manufacturers, provide proactive alerts for end-of-life notifications, and help optimize last-time-buy decisions with alternative part recommendations.'
                        ],
                        [
                            'question' => 'Does it support counterfeit detection?',
                            'answer' => 'Yes, our platform includes counterfeit detection workflows with inspection checklists, testing documentation, risk scoring, and supplier qualification tracking aligned with AS6081 and IDEA standards.'
                        ],
                        [
                            'question' => 'Can it integrate with our PLM system?',
                            'answer' => 'Yes, we offer pre-built integrations with major PLM systems including Arena, Siemens, PTC, and Dassault. Custom integrations are also available.'
                        ],
                        [
                            'question' => 'Is there a demo available?',
                            'answer' => 'Yes! We offer personalized demos tailored to your specific electronics operations. Contact our team to schedule a demo.'
                        ]
                    ],
                    'showResources' => true,
                    'resourcesTitle' => 'Helpful Resources',
                    'resources' => [
                        [
                            'icon' => 'document',
                            'title' => 'Electronics Supply Chain Guide',
                            'description' => 'Learn best practices for electronics supply chain optimization.',
                            'cta' => 'Download Guide',
                            'link' => '/resources/electronics-guide'
                        ],
                        [
                            'icon' => 'play',
                            'title' => 'Platform Demo',
                            'description' => 'Watch a 10-minute overview of our electronics solutions.',
                            'cta' => 'Watch Demo',
                            'link' => '/resources/demo-video'
                        ],
                        [
                            'icon' => 'download',
                            'title' => 'Obsolescence Calculator',
                            'description' => 'Calculate potential savings from proactive obsolescence management.',
                            'cta' => 'Calculate Now',
                            'link' => '/resources/roi-calculator'
                        ]
                    ],
                    'showCta' => true,
                    'ctaText' => 'Ready to transform your electronics operations?',
                    'ctaButtonText' => 'Get Started Today',
                    'ctaLink' => '/demo'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 196,
                'section_key' => 'electronics',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Wholesale & Distribution Section
            [
                'id' => 197,
                'section_key' => 'wholesaleAndDistribution',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Industry Focus',
                        'backgroundColor' => 'bg-pink-50 dark:bg-pink-900/30',
                        'borderColor' => 'border-pink-200 dark:border-pink-800',
                        'textColor' => 'text-pink-700 dark:text-pink-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Fashion &',
                        'highlightedText' => 'Apparel Solutions',
                        'suffix' => '',
                        'highlightGradient' => 'from-pink-500 to-rose-500'
                    ],
                    'description' => 'Optimize your fashion supply chain with real-time inventory, omnichannel fulfillment, and sustainable practices.',
                    'initialTab' => 'overview',
                    'showStats' => true,
                    'stats' => [
                        ['icon' => 'bag', 'value' => '500+', 'label' => 'Fashion Brands'],
                        ['icon' => 'database', 'value' => '10M+', 'label' => 'SKUs Managed'],
                        ['icon' => 'trending', 'value' => '30%', 'label' => 'Markdown Reduction'],
                        ['icon' => 'clock', 'value' => '98%', 'label' => 'Inventory Accuracy']
                    ],
                    'overview' => [
                        'title' => 'Omnichannel Fashion Inventory Management',
                        'description' => 'Our platform helps fashion brands and apparel retailers manage inventory across all channels, reduce markdowns, and improve customer satisfaction with real-time visibility.',
                        'highlights' => [
                            'Unified inventory across stores, e-commerce, and marketplaces',
                            'Seasonal inventory planning and allocation',
                            'Size and color matrix management',
                            'Markdown optimization and margin protection',
                            'Buy online, return in-store capabilities'
                        ],
                        'ctaText' => 'Explore Solutions',
                        'ctaLink' => '/solutions/fashion',
                        'statsCards' => [
                            ['value' => '50+', 'label' => 'Integrations'],
                            ['value' => '99.9%', 'label' => 'Inventory Accuracy'],
                            ['value' => '24/7', 'label' => 'Support'],
                            ['value' => '500+', 'label' => 'Happy Clients']
                        ]
                    ],
                    'challenges' => [
                        [
                            'icon' => 'database',
                            'title' => 'Inventory Fragmentation',
                            'description' => 'Disconnected inventory across stores, warehouses, and e-commerce leads to stockouts and lost sales.'
                        ],
                        [
                            'icon' => 'clock',
                            'title' => 'Seasonal Planning',
                            'description' => 'Managing seasonal inventory turns and markdowns requires accurate demand forecasting.'
                        ],
                        [
                            'icon' => 'truck',
                            'title' => 'Omnichannel Fulfillment',
                            'description' => 'Coordinating ship-from-store and buy online, return in-store creates operational complexity.'
                        ],
                        [
                            'icon' => 'chart',
                            'title' => 'Markdown Optimization',
                            'description' => 'Poor markdown timing and depth decisions erode margins and brand value.'
                        ],
                        [
                            'icon' => 'shield',
                            'title' => 'Sustainability Tracking',
                            'description' => 'Meeting sustainability goals requires visibility into materials and supply chain practices.'
                        ],
                        [
                            'icon' => 'users',
                            'title' => 'Returns Management',
                            'description' => 'High return rates in apparel require efficient processing and restocking.'
                        ]
                    ],
                    'solutions' => [
                        [
                            'icon' => 'cloud',
                            'title' => 'Unified Inventory',
                            'description' => 'Real-time inventory visibility across all channels with centralized management.',
                            'features' => [
                                'Multi-channel sync',
                                'Size/color matrix',
                                'Location intelligence',
                                'Stock allocation'
                            ]
                        ],
                        [
                            'icon' => 'qrcode',
                            'title' => 'Omnichannel Fulfillment',
                            'description' => 'Intelligent order routing to optimize fulfillment from stores or warehouses.',
                            'features' => [
                                'Ship-from-store',
                                'BOPIS (Buy Online Pickup In Store)',
                                'Endless aisle',
                                'Returns management'
                            ]
                        ],
                        [
                            'icon' => 'trending',
                            'title' => 'Markdown Optimization',
                            'description' => 'AI-powered markdown recommendations to maximize margins and sell-through.',
                            'features' => [
                                'Dynamic pricing',
                                'Markdown timing',
                                'Margin protection',
                                'Clearance planning'
                            ]
                        ],
                        [
                            'icon' => 'refresh',
                            'title' => 'Seasonal Planning',
                            'description' => 'Demand forecasting and inventory allocation for seasonal collections.',
                            'features' => [
                                'Demand forecasting',
                                'Allocation optimization',
                                'Replenishment planning',
                                'Assortment planning'
                            ]
                        ],
                        [
                            'icon' => 'shield',
                            'title' => 'Sustainability Tracking',
                            'description' => 'Track materials, suppliers, and circular fashion initiatives.',
                            'features' => [
                                'Material traceability',
                                'Supplier scorecards',
                                'Circular economy tracking',
                                'Sustainability reporting'
                            ]
                        ],
                        [
                            'icon' => 'chart',
                            'title' => 'Analytics Dashboard',
                            'description' => 'Comprehensive analytics for sell-through, turn rates, and profitability.',
                            'features' => [
                                'Sell-through analysis',
                                'Turn rate tracking',
                                'Profitability analytics',
                                'Seasonal comparisons'
                            ]
                        ]
                    ],
                    'showFeatures' => true,
                    'features' => [
                        'title' => 'Why Fashion & Apparel Leaders Choose Us',
                        'items' => [
                            ['icon' => 'tag', 'title' => 'Size/Color Matrix'],
                            ['icon' => 'truck', 'title' => 'Omnichannel'],
                            ['icon' => 'trending', 'title' => 'Markdown Optimization'],
                            ['icon' => 'cloud', 'title' => 'Unified Inventory'],
                            ['icon' => 'database', 'title' => 'Analytics'],
                            ['icon' => 'users', 'title' => '24/7 Support'],
                            ['icon' => 'shield', 'title' => 'Sustainable'],
                            ['icon' => 'clock', 'title' => 'Real-time']
                        ]
                    ],
                    'showSustainability' => true,
                    'sustainabilityText' => 'Sustainable Practices | Ethical Sourcing | Circular Fashion Ready | GOTS Certified | OEKO-TEX',
                    'showSuccessMetrics' => true,
                    'successMetrics' => [
                        ['icon' => 'trending', 'value' => '287%', 'label' => 'Average ROI'],
                        ['icon' => 'clock', 'value' => '35%', 'label' => 'Markdown Reduction'],
                        ['icon' => 'star', 'value' => '98%', 'label' => 'Inventory Accuracy'],
                        ['icon' => 'dollar', 'value' => '$1.2M', 'label' => 'Avg. Annual Savings']
                    ],
                    'showCta' => true,
                    'ctaText' => 'Ready to transform your fashion operations?',
                    'ctaButtonText' => 'Get Started Today',
                    'ctaLink' => '/demo'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 198,
                'section_key' => 'wholesaleAndDistribution',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Success Stories',
                        'backgroundColor' => 'bg-pink-50 dark:bg-pink-900/30',
                        'borderColor' => 'border-pink-200 dark:border-pink-800',
                        'textColor' => 'text-pink-700 dark:text-pink-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Fashion &',
                        'highlightedText' => 'Apparel Success Stories',
                        'suffix' => '',
                        'highlightGradient' => 'from-pink-500 to-rose-500'
                    ],
                    'description' => 'See how fashion brands and apparel retailers are optimizing inventory, reducing markdowns, and improving sustainability.',
                    'initialIndex' => 0,
                    'autoplay' => true,
                    'autoplayInterval' => 6000,
                    'caseStudies' => [
                        [
                            'id' => 'fashion-forward',
                            'icon' => 'tshirt',
                            'company' => 'Fashion Forward',
                            'location' => 'New York, NY',
                            'industry' => 'Contemporary Apparel',
                            'keyResult' => ['value' => '35%', 'label' => 'Markdown Reduction'],
                            'results' => [
                                ['value' => '35%', 'label' => 'Markdown Reduction'],
                                ['value' => '98%', 'label' => 'Inventory Accuracy'],
                                ['value' => '$2.5M', 'label' => 'Annual Savings'],
                                ['value' => '3x', 'label' => 'ROI']
                            ],
                            'challenge' => 'Fashion Forward struggled with excess inventory and deep markdowns across 50+ stores and e-commerce, eroding margins and brand value.',
                            'solution' => 'Implemented our markdown optimization platform with AI-powered pricing recommendations and unified inventory management.',
                            'sustainability' => ['GOTS Certified', 'Sustainable Materials'],
                            'testimonial' => [
                                'quote' => 'We\'ve reduced markdowns by 35% while maintaining sell-through. The AI recommendations are incredibly accurate.',
                                'author' => 'Sarah Johnson',
                                'role' => 'Merchandising Director'
                            ],
                            'downloadLink' => '/case-studies/fashion-forward/download',
                            'videoLink' => '/case-studies/fashion-forward/video'
                        ],
                        [
                            'id' => 'sustainable-style',
                            'icon' => 'tag',
                            'company' => 'Sustainable Style Co.',
                            'location' => 'Portland, OR',
                            'industry' => 'Eco-Fashion',
                            'keyResult' => ['value' => '100%', 'label' => 'Sustainable Sourcing'],
                            'results' => [
                                ['value' => '100%', 'label' => 'Sustainable Sourcing'],
                                ['value' => '45%', 'label' => 'Faster Turnaround'],
                                ['value' => '$1.8M', 'label' => 'Annual Savings'],
                                ['value' => '2.8x', 'label' => 'ROI']
                            ],
                            'challenge' => 'Tracking sustainable materials and suppliers across global supply chain was manual and error-prone, limiting transparency claims.',
                            'solution' => 'Deployed our sustainability tracking platform with material traceability, supplier scorecards, and circular economy features.',
                            'sustainability' => ['OEKO-TEX', 'GOTS', 'Circular Ready'],
                            'testimonial' => [
                                'quote' => 'We now have complete visibility into our supply chain. Customers trust our sustainability claims.',
                                'author' => 'Emma Chen',
                                'role' => 'Sustainability Director'
                            ],
                            'downloadLink' => '/case-studies/sustainable-style/download',
                            'videoLink' => '/case-studies/sustainable-style/video'
                        ],
                        [
                            'id' => 'luxe-collection',
                            'icon' => 'scissors',
                            'company' => 'Luxe Collection',
                            'location' => 'Los Angeles, CA',
                            'industry' => 'Luxury Fashion',
                            'keyResult' => ['value' => '98%', 'label' => 'Omnichannel Fulfillment'],
                            'results' => [
                                ['value' => '98%', 'label' => 'Fulfillment Rate'],
                                ['value' => '50%', 'label' => 'Faster Delivery'],
                                ['value' => '$3.2M', 'label' => 'Annual Savings'],
                                ['value' => '4x', 'label' => 'ROI']
                            ],
                            'challenge' => 'Managing inventory across boutiques, e-commerce, and wholesale channels caused stockouts and missed sales opportunities.',
                            'solution' => 'Implemented our omnichannel fulfillment platform with ship-from-store, BOPIS, and endless aisle capabilities.',
                            'sustainability' => ['Ethical Sourcing', 'Circular Fashion'],
                            'testimonial' => [
                                'quote' => 'Omnichannel fulfillment has transformed our business. We\'re delivering faster and never missing a sale.',
                                'author' => 'Michael Lee',
                                'role' => 'Operations VP'
                            ],
                            'downloadLink' => '/case-studies/luxe-collection/download',
                            'videoLink' => '/case-studies/luxe-collection/video'
                        ]
                    ],
                    'showAdditionalCases' => true,
                    'additionalCasesTitle' => 'More Success Stories',
                    'additionalCases' => [
                        [
                            'icon' => 'tshirt',
                            'company' => 'Urban Apparel',
                            'industry' => 'Streetwear',
                            'result' => '40%',
                            'resultLabel' => 'Inventory Reduction',
                            'description' => 'Optimized inventory turns with demand forecasting and allocation.',
                            'link' => '/case-studies/urban-apparel'
                        ],
                        [
                            'icon' => 'tag',
                            'company' => 'Kids Fashion Co.',
                            'industry' => 'Children\'s Wear',
                            'result' => '99.5%',
                            'resultLabel' => 'Order Accuracy',
                            'description' => 'Achieved near-perfect order accuracy with barcode scanning.',
                            'link' => '/case-studies/kids-fashion'
                        ],
                        [
                            'icon' => 'scissors',
                            'company' => 'Athleisure Brands',
                            'industry' => 'Activewear',
                            'result' => '55%',
                            'resultLabel' => 'Faster Replenishment',
                            'description' => 'Reduced replenishment time with automated inventory management.',
                            'link' => '/case-studies/athleisure'
                        ]
                    ],
                    'showMarkdownCalculator' => true,
                    'markdownReduction' => '20-30%',
                    'marginImprovement' => '15-25%',
                    'paybackPeriod' => '3-6',
                    'calculatorLink' => '/markdown-calculator',
                    'showPartners' => true,
                    'partnersTitle' => 'Leading sustainable fashion brands trust us',
                    'partners' => [
                        ['icon' => 'tshirt', 'name' => 'Patagonia'],
                        ['icon' => 'tag', 'name' => 'Reformation'],
                        ['icon' => 'scissors', 'name' => 'Eileen Fisher'],
                        ['icon' => 'bag', 'name' => 'Stella McCartney'],
                        ['icon' => 'tshirt', 'name' => 'Pangaia'],
                        ['icon' => 'tag', 'name' => 'Allbirds']
                    ],
                    'showCta' => true,
                    'ctaText' => 'Ready to write your own success story?',
                    'ctaButtonText' => 'Start Your Journey',
                    'ctaLink' => '/demo'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 199,
                'section_key' => 'wholesaleAndDistribution',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Features & FAQ',
                        'backgroundColor' => 'bg-pink-50 dark:bg-pink-900/30',
                        'borderColor' => 'border-pink-200 dark:border-pink-800',
                        'textColor' => 'text-pink-700 dark:text-pink-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Everything You',
                        'highlightedText' => 'Need for Fashion',
                        'suffix' => '',
                        'highlightGradient' => 'from-pink-500 to-rose-500'
                    ],
                    'description' => 'Comprehensive fashion and apparel solutions designed to optimize inventory, reduce markdowns, and support sustainable practices.',
                    'initialFeature' => 0,
                    'showFeatureGrid' => true,
                    'benefits' => [
                        ['icon' => 'trending', 'value' => '287%', 'label' => 'Average ROI'],
                        ['icon' => 'clock', 'value' => '35%', 'label' => 'Markdown Reduction'],
                        ['icon' => 'dollar', 'value' => '$1.2M', 'label' => 'Avg. Annual Savings'],
                        ['icon' => 'star', 'value' => '98%', 'label' => 'Inventory Accuracy']
                    ],
                    'features' => [
                        [
                            'icon' => 'cloud',
                            'title' => 'Unified Inventory',
                            'shortDescription' => 'Omnichannel visibility',
                            'description' => 'Real-time inventory visibility across all channels - stores, e-commerce, and marketplaces. Centralized management of size/color matrices and stock allocation.',
                            'capabilities' => [
                                'Multi-channel sync',
                                'Size/color matrix',
                                'Location intelligence',
                                'Stock allocation',
                                'Inventory pooling'
                            ],
                            'sustainability' => ['Circular Ready'],
                            'link' => '/fashion/unified-inventory'
                        ],
                        [
                            'icon' => 'trending',
                            'title' => 'Markdown Optimization',
                            'shortDescription' => 'AI-powered pricing',
                            'description' => 'AI-powered markdown recommendations to maximize margins and sell-through. Dynamic pricing with margin protection and clearance planning.',
                            'capabilities' => [
                                'Dynamic pricing',
                                'Markdown timing',
                                'Margin protection',
                                'Clearance planning',
                                'Price elasticity'
                            ],
                            'sustainability' => ['Waste Reduction'],
                            'link' => '/fashion/markdown-optimization'
                        ],
                        [
                            'icon' => 'truck',
                            'title' => 'Omnichannel Fulfillment',
                            'shortDescription' => 'Ship-from-store, BOPIS',
                            'description' => 'Intelligent order routing to optimize fulfillment from stores or warehouses with ship-from-store, BOPIS, and endless aisle capabilities.',
                            'capabilities' => [
                                'Ship-from-store',
                                'BOPIS',
                                'Endless aisle',
                                'Returns management',
                                'Order routing'
                            ],
                            'sustainability' => ['Carbon Efficient'],
                            'link' => '/fashion/omnichannel'
                        ],
                        [
                            'icon' => 'shield',
                            'title' => 'Sustainability Tracking',
                            'shortDescription' => 'Material traceability',
                            'description' => 'Track materials, suppliers, and circular fashion initiatives. Complete visibility into sustainable sourcing and environmental impact.',
                            'capabilities' => [
                                'Material traceability',
                                'Supplier scorecards',
                                'Circular economy tracking',
                                'Sustainability reporting',
                                'Carbon footprint'
                            ],
                            'sustainability' => ['GOTS', 'OEKO-TEX', 'BCI'],
                            'link' => '/fashion/sustainability'
                        ],
                        [
                            'icon' => 'refresh',
                            'title' => 'Seasonal Planning',
                            'shortDescription' => 'Demand forecasting',
                            'description' => 'Demand forecasting and inventory allocation for seasonal collections. Optimize assortment planning and replenishment.',
                            'capabilities' => [
                                'Demand forecasting',
                                'Allocation optimization',
                                'Replenishment planning',
                                'Assortment planning',
                                'Trend analysis'
                            ],
                            'sustainability' => ['Waste Reduction'],
                            'link' => '/fashion/seasonal-planning'
                        ],
                        [
                            'icon' => 'chart',
                            'title' => 'Analytics Dashboard',
                            'shortDescription' => 'Performance insights',
                            'description' => 'Comprehensive analytics for sell-through, turn rates, profitability, and seasonal comparisons.',
                            'capabilities' => [
                                'Sell-through analysis',
                                'Turn rate tracking',
                                'Profitability analytics',
                                'Seasonal comparisons',
                                'Store performance'
                            ],
                            'sustainability' => ['Impact Reporting'],
                            'link' => '/fashion/analytics'
                        ]
                    ],
                    'showComparison' => true,
                    'comparison' => [
                        'before' => [
                            'Disconnected inventory systems',
                            'Manual markdown decisions',
                            'Limited omnichannel capabilities',
                            'Poor sustainability visibility',
                            'Reactive seasonal planning'
                        ],
                        'after' => [
                            'Unified omnichannel inventory',
                            'AI-powered markdown optimization',
                            'Seamless BOPIS and ship-from-store',
                            'Complete sustainability traceability',
                            'Proactive seasonal forecasting'
                        ]
                    ],
                    'showTechStack' => true,
                    'techStackTitle' => 'Seamlessly Integrates With Your Fashion Tech Stack',
                    'techStack' => [
                        ['icon' => 'cloud', 'name' => 'Shopify'],
                        ['icon' => 'database', 'name' => 'Salesforce'],
                        ['icon' => 'tag', 'name' => 'Centric'],
                        ['icon' => 'scissors', 'name' => 'Cegid'],
                        ['icon' => 'chart', 'name' => 'Tableau'],
                        ['icon' => 'truck', 'name' => 'Manhattan'],
                        ['icon' => 'bag', 'name' => 'Magento'],
                        ['icon' => 'tshirt', 'name' => 'Apparel 21']
                    ],
                    'showHowItWorks' => true,
                    'howItWorksTitle' => 'How It Works',
                    'steps' => [
                        ['icon' => 'database', 'title' => 'Connect', 'description' => 'Integrate with your POS, e-commerce, and ERP systems.'],
                        ['icon' => 'qrcode', 'title' => 'Track', 'description' => 'Scan items for real-time inventory visibility.'],
                        ['icon' => 'chart', 'title' => 'Optimize', 'description' => 'Use analytics to optimize pricing and allocation.']
                    ],
                    'showFaq' => true,
                    'faqTitle' => 'Frequently Asked Questions',
                    'faqs' => [
                        [
                            'question' => 'How does the platform handle size and color variants?',
                            'answer' => 'Our platform has native support for size/color matrices with intelligent inventory management across all variants. You can track stock by size/color at each location.'
                        ],
                        [
                            'question' => 'How does markdown optimization work?',
                            'answer' => 'Our AI analyzes historical sales, inventory levels, seasonal trends, and competitor pricing to recommend optimal markdown timing and depth to maximize margins.'
                        ],
                        [
                            'question' => 'Does it support BOPIS and ship-from-store?',
                            'answer' => 'Yes! Our omnichannel fulfillment module includes BOPIS, curbside pickup, ship-from-store, and endless aisle capabilities with intelligent order routing.'
                        ],
                        [
                            'question' => 'How does sustainability tracking work?',
                            'answer' => 'We provide complete material traceability from source to finished product, supplier sustainability scorecards, and circular economy tracking for resale and recycling.'
                        ],
                        [
                            'question' => 'Is there a demo available?',
                            'answer' => 'Yes! We offer personalized demos tailored to your specific fashion and apparel operations. Contact our team to schedule a demo.'
                        ]
                    ],
                    'showResources' => true,
                    'resourcesTitle' => 'Helpful Resources',
                    'resources' => [
                        [
                            'icon' => 'document',
                            'title' => 'Fashion Retail Guide',
                            'description' => 'Learn best practices for fashion inventory management and markdown optimization.',
                            'cta' => 'Download Guide',
                            'link' => '/resources/fashion-guide'
                        ],
                        [
                            'icon' => 'play',
                            'title' => 'Platform Demo',
                            'description' => 'Watch an 8-minute overview of our fashion solutions.',
                            'cta' => 'Watch Demo',
                            'link' => '/resources/demo-video'
                        ],
                        [
                            'icon' => 'download',
                            'title' => 'Markdown Calculator',
                            'description' => 'Calculate potential savings from optimized markdown strategies.',
                            'cta' => 'Calculate Now',
                            'link' => '/resources/roi-calculator'
                        ]
                    ],
                    'showCta' => true,
                    'ctaText' => 'Ready to transform your fashion operations?',
                    'ctaButtonText' => 'Get Started Today',
                    'ctaLink' => '/demo'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 200,
                'section_key' => 'wholesaleAndDistribution',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Third Party Logistics Section
            [
                'id' => 201,
                'section_key' => 'thirdPartyLogistics',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Industry Focus',
                        'backgroundColor' => 'bg-blue-50 dark:bg-blue-900/30',
                        'borderColor' => 'border-blue-200 dark:border-blue-800',
                        'textColor' => 'text-blue-700 dark:text-blue-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Third-Party',
                        'highlightedText' => 'Logistics Solutions',
                        'suffix' => '',
                        'highlightGradient' => 'from-blue-500 to-indigo-500'
                    ],
                    'description' => 'Optimize your 3PL operations with real-time visibility, warehouse efficiency, and client portals.',
                    'initialTab' => 'overview',
                    'showStats' => true,
                    'stats' => [
                        ['icon' => 'truck', 'value' => '400+', 'label' => '3PL Providers'],
                        ['icon' => 'database', 'value' => '50M+', 'label' => 'Orders Fulfilled'],
                        ['icon' => 'trending', 'value' => '35%', 'label' => 'Labor Efficiency Gain'],
                        ['icon' => 'star', 'value' => '99.8%', 'label' => 'Inventory Accuracy']
                    ],
                    'overview' => [
                        'title' => 'Warehouse & Logistics Optimization',
                        'description' => 'Our platform helps 3PL providers optimize warehouse operations, improve client visibility, and reduce costs with real-time tracking and analytics.',
                        'highlights' => [
                            'Real-time warehouse visibility',
                            'Client portals with self-service reporting',
                            'Barcode scanning and RFID integration',
                            'Labor management and productivity tracking',
                            'Billing and invoicing automation'
                        ],
                        'ctaText' => 'Explore Solutions',
                        'ctaLink' => '/solutions/3pl',
                        'statsCards' => [
                            ['value' => '50+', 'label' => 'Integrations'],
                            ['value' => '99.9%', 'label' => 'Scan Accuracy'],
                            ['value' => '24/7', 'label' => 'Support'],
                            ['value' => '500+', 'label' => 'Happy Clients']
                        ]
                    ],
                    'challenges' => [
                        [
                            'icon' => 'clock',
                            'title' => 'Labor Efficiency',
                            'description' => 'Manual processes and paper-based workflows reduce warehouse productivity and increase costs.'
                        ],
                        [
                            'icon' => 'database',
                            'title' => 'Inventory Visibility',
                            'description' => 'Limited real-time visibility across warehouses causes errors and delays.'
                        ],
                        [
                            'icon' => 'users',
                            'title' => 'Client Communication',
                            'description' => 'Providing clients with real-time inventory and order status is challenging without portals.'
                        ],
                        [
                            'icon' => 'chart',
                            'title' => 'Billing Complexity',
                            'description' => 'Managing complex billing based on storage, handling, and value-added services is time-consuming.'
                        ],
                        [
                            'icon' => 'truck',
                            'title' => 'Shipping Integration',
                            'description' => 'Integrating with multiple carriers and managing shipping rates is complex.'
                        ],
                        [
                            'icon' => 'shield',
                            'title' => 'Accuracy Requirements',
                            'description' => 'Meeting client SLAs requires near-perfect inventory and order accuracy.'
                        ]
                    ],
                    'solutions' => [
                        [
                            'icon' => 'warehouse',
                            'title' => 'Warehouse Management',
                            'description' => 'Optimize warehouse operations with real-time inventory tracking and labor management.',
                            'features' => [
                                'Real-time inventory visibility',
                                'Putaway and picking optimization',
                                'Cycle counting',
                                'Labor tracking'
                            ]
                        ],
                        [
                            'icon' => 'cloud',
                            'title' => 'Client Portals',
                            'description' => 'White-label portals for clients to view inventory, orders, and reports in real-time.',
                            'features' => [
                                'Real-time inventory access',
                                'Order tracking',
                                'Custom reporting',
                                'Document storage'
                            ]
                        ],
                        [
                            'icon' => 'qrcode',
                            'title' => 'Barcode/RFID Scanning',
                            'description' => 'Fast and accurate scanning for receiving, putaway, picking, and shipping.',
                            'features' => [
                                'Mobile scanning apps',
                                'RFID integration',
                                'Batch processing',
                                'Error proofing'
                            ]
                        ],
                        [
                            'icon' => 'chart',
                            'title' => 'Billing Automation',
                            'description' => 'Automated billing based on activity, storage, and value-added services.',
                            'features' => [
                                'Activity-based billing',
                                'Storage fee calculation',
                                'Client invoicing',
                                'Payment integration'
                            ]
                        ],
                        [
                            'icon' => 'truck',
                            'title' => 'Carrier Integration',
                            'description' => 'Integrate with major carriers for rate shopping and label generation.',
                            'features' => [
                                'Rate shopping',
                                'Label printing',
                                'Tracking updates',
                                'Freight management'
                            ]
                        ],
                        [
                            'icon' => 'chart',
                            'title' => 'Analytics Dashboard',
                            'description' => 'Comprehensive analytics for KPIs, SLAs, and operational efficiency.',
                            'features' => [
                                'SLA tracking',
                                'Productivity metrics',
                                'Cost analysis',
                                'Client reporting'
                            ]
                        ]
                    ],
                    'showFeatures' => true,
                    'features' => [
                        'title' => 'Why 3PL Leaders Choose Us',
                        'items' => [
                            ['icon' => 'warehouse', 'title' => 'WMS Ready'],
                            ['icon' => 'qrcode', 'title' => 'Scanning'],
                            ['icon' => 'cloud', 'title' => 'Client Portals'],
                            ['icon' => 'chart', 'title' => 'Analytics'],
                            ['icon' => 'database', 'title' => 'EDI Support'],
                            ['icon' => 'users', 'title' => '24/7 Support'],
                            ['icon' => 'trending', 'title' => 'Scalable'],
                            ['icon' => 'shield', 'title' => 'Secure']
                        ]
                    ],
                    'showStandards' => true,
                    'standardsText' => 'ISO 9001 | SOC 2 Type II | GS1 Standards | WMS Certified | C-TPAT | TAPA',
                    'showSuccessMetrics' => true,
                    'successMetrics' => [
                        ['icon' => 'trending', 'value' => '287%', 'label' => 'Average ROI'],
                        ['icon' => 'clock', 'value' => '35%', 'label' => 'Labor Efficiency Gain'],
                        ['icon' => 'star', 'value' => '99.8%', 'label' => 'Inventory Accuracy'],
                        ['icon' => 'dollar', 'value' => '$1.5M', 'label' => 'Avg. Annual Savings']
                    ],
                    'showCta' => true,
                    'ctaText' => 'Ready to transform your 3PL operations?',
                    'ctaButtonText' => 'Get Started Today',
                    'ctaLink' => '/demo'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 202,
                'section_key' => 'thirdPartyLogistics',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Success Stories',
                        'backgroundColor' => 'bg-blue-50 dark:bg-blue-900/30',
                        'borderColor' => 'border-blue-200 dark:border-blue-800',
                        'textColor' => 'text-blue-700 dark:text-blue-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => '3PL',
                        'highlightedText' => 'Success Stories',
                        'suffix' => '',
                        'highlightGradient' => 'from-blue-500 to-indigo-500'
                    ],
                    'description' => 'See how third-party logistics providers are optimizing warehouse operations and improving client satisfaction.',
                    'initialIndex' => 0,
                    'autoplay' => true,
                    'autoplayInterval' => 6000,
                    'caseStudies' => [
                        [
                            'id' => 'logistic-solutions',
                            'icon' => 'warehouse',
                            'company' => 'Logistic Solutions Inc.',
                            'location' => 'Chicago, IL',
                            'industry' => 'Warehousing & Distribution',
                            'keyResult' => ['value' => '45%', 'label' => 'Labor Efficiency Gain'],
                            'results' => [
                                ['value' => '45%', 'label' => 'Labor Efficiency Gain'],
                                ['value' => '99.9%', 'label' => 'Inventory Accuracy'],
                                ['value' => '$2.5M', 'label' => 'Annual Savings'],
                                ['value' => '3x', 'label' => 'ROI']
                            ],
                            'challenge' => 'Logistic Solutions struggled with manual warehouse processes, leading to high labor costs, errors, and difficulty meeting client SLAs across 5 warehouses.',
                            'solution' => 'Implemented our WMS solution with barcode scanning, putaway optimization, and real-time inventory visibility across all facilities.',
                            'technologies' => ['WMS', 'Barcode Scanning', 'RFID Ready'],
                            'testimonial' => [
                                'quote' => 'Labor efficiency is up 45% and accuracy is near perfect. Our clients love the real-time visibility.',
                                'author' => 'David Miller',
                                'role' => 'Operations Director'
                            ],
                            'downloadLink' => '/case-studies/logistic-solutions/download',
                            'videoLink' => '/case-studies/logistic-solutions/video'
                        ],
                        [
                            'id' => 'fulfillment-pro',
                            'icon' => 'truck',
                            'company' => 'Fulfillment Pro',
                            'location' => 'Atlanta, GA',
                            'industry' => 'E-commerce Fulfillment',
                            'keyResult' => ['value' => '60%', 'label' => 'Faster Processing'],
                            'results' => [
                                ['value' => '60%', 'label' => 'Faster Processing'],
                                ['value' => '99.8%', 'label' => 'Order Accuracy'],
                                ['value' => '$1.8M', 'label' => 'Annual Savings'],
                                ['value' => '2.8x', 'label' => 'ROI']
                            ],
                            'challenge' => 'Fulfillment Pro needed to scale for peak seasons but manual processes caused bottlenecks and delayed client orders.',
                            'solution' => 'Deployed our automated fulfillment platform with batch picking, packing optimization, and carrier integration.',
                            'technologies' => ['WMS', 'EDI', 'Carrier API'],
                            'testimonial' => [
                                'quote' => 'We now process 60% more orders with the same staff. Peak season is no longer a challenge.',
                                'author' => 'Sarah Johnson',
                                'role' => 'VP of Operations'
                            ],
                            'downloadLink' => '/case-studies/fulfillment-pro/download',
                            'videoLink' => '/case-studies/fulfillment-pro/video'
                        ],
                        [
                            'id' => 'global-logistics',
                            'icon' => 'cloud',
                            'company' => 'Global Logistics Group',
                            'location' => 'Los Angeles, CA',
                            'industry' => 'International Freight',
                            'keyResult' => ['value' => '100%', 'label' => 'Client Portal Adoption'],
                            'results' => [
                                ['value' => '100%', 'label' => 'Portal Adoption'],
                                ['value' => '75%', 'label' => 'Support Ticket Reduction'],
                                ['value' => '$1.2M', 'label' => 'Annual Savings'],
                                ['value' => '2.5x', 'label' => 'ROI']
                            ],
                            'challenge' => 'Clients lacked real-time visibility into inventory and orders, causing hundreds of daily support calls and manual reporting requests.',
                            'solution' => 'Launched white-label client portals with real-time inventory access, order tracking, and self-service reporting.',
                            'technologies' => ['Client Portal', 'Real-time API', 'Custom Reports'],
                            'testimonial' => [
                                'quote' => 'Client satisfaction has soared. Support tickets are down 75% and clients love the self-service portals.',
                                'author' => 'Michael Chen',
                                'role' => 'Client Success Director'
                            ],
                            'downloadLink' => '/case-studies/global-logistics/download',
                            'videoLink' => '/case-studies/global-logistics/video'
                        ]
                    ],
                    'showAdditionalCases' => true,
                    'additionalCasesTitle' => 'More Success Stories',
                    'additionalCases' => [
                        [
                            'icon' => 'warehouse',
                            'company' => 'Prime Logistics',
                            'industry' => 'Warehousing',
                            'result' => '35%',
                            'resultLabel' => 'Space Utilization',
                            'description' => 'Improved warehouse space utilization with slotting optimization.',
                            'link' => '/case-studies/prime-logistics'
                        ],
                        [
                            'icon' => 'truck',
                            'company' => 'Express Freight',
                            'industry' => 'Transportation',
                            'result' => '25%',
                            'resultLabel' => 'Faster Turnaround',
                            'description' => 'Reduced dock-to-stock time with mobile scanning.',
                            'link' => '/case-studies/express-freight'
                        ],
                        [
                            'icon' => 'cloud',
                            'company' => 'Integrated Logistics',
                            'industry' => 'Multi-client',
                            'result' => '100%',
                            'resultLabel' => 'Billing Accuracy',
                            'description' => 'Achieved perfect billing accuracy with automated invoicing.',
                            'link' => '/case-studies/integrated-logistics'
                        ]
                    ],
                    'showBillingCalculator' => true,
                    'billingTimeReduction' => '75%',
                    'revenueRecovery' => '5-10%',
                    'paybackPeriod' => '3-6',
                    'calculatorLink' => '/billing-calculator',
                    'showPartners' => true,
                    'partnersTitle' => 'Trusted by leading 3PL providers serving diverse industries',
                    'partners' => [
                        ['icon' => 'warehouse', 'name' => 'XPO Logistics'],
                        ['icon' => 'truck', 'name' => 'DHL Supply Chain'],
                        ['icon' => 'cloud', 'name' => 'Ryder'],
                        ['icon' => 'database', 'name' => 'Kuehne + Nagel'],
                        ['icon' => 'cog', 'name' => 'DB Schenker'],
                        ['icon' => 'wifi', 'name' => 'CEVA Logistics']
                    ],
                    'showCta' => true,
                    'ctaText' => 'Ready to write your own success story?',
                    'ctaButtonText' => 'Start Your Journey',
                    'ctaLink' => '/demo'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 203,
                'section_key' => 'thirdPartyLogistics',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Features & FAQ',
                        'backgroundColor' => 'bg-blue-50 dark:bg-blue-900/30',
                        'borderColor' => 'border-blue-200 dark:border-blue-800',
                        'textColor' => 'text-blue-700 dark:text-blue-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Everything You',
                        'highlightedText' => 'Need for 3PL',
                        'suffix' => '',
                        'highlightGradient' => 'from-blue-500 to-indigo-500'
                    ],
                    'description' => 'Comprehensive third-party logistics solutions designed to optimize warehouse operations, improve client satisfaction, and reduce costs.',
                    'initialFeature' => 0,
                    'showFeatureGrid' => true,
                    'benefits' => [
                        ['icon' => 'trending', 'value' => '287%', 'label' => 'Average ROI'],
                        ['icon' => 'clock', 'value' => '45%', 'label' => 'Labor Efficiency Gain'],
                        ['icon' => 'dollar', 'value' => '$1.5M', 'label' => 'Avg. Annual Savings'],
                        ['icon' => 'star', 'value' => '99.8%', 'label' => 'Inventory Accuracy']
                    ],
                    'features' => [
                        [
                            'icon' => 'warehouse',
                            'title' => 'Warehouse Management',
                            'shortDescription' => 'Optimize warehouse operations',
                            'description' => 'Complete warehouse management system with real-time inventory tracking, putaway optimization, picking efficiency, and labor management.',
                            'capabilities' => [
                                'Real-time inventory visibility',
                                'Putaway and picking optimization',
                                'Cycle counting',
                                'Labor tracking',
                                'Slotting optimization'
                            ],
                            'technologies' => ['WMS', 'RFID Ready', 'Mobile Scanning'],
                            'link' => '/3pl/warehouse-management'
                        ],
                        [
                            'icon' => 'cloud',
                            'title' => 'Client Portals',
                            'shortDescription' => 'White-label client access',
                            'description' => 'White-label portals for clients to view inventory, orders, and reports in real-time with self-service capabilities.',
                            'capabilities' => [
                                'Real-time inventory access',
                                'Order tracking',
                                'Custom reporting',
                                'Document storage',
                                'Billing visibility'
                            ],
                            'technologies' => ['Client Portal', 'Real-time API', 'SSO'],
                            'link' => '/3pl/client-portals'
                        ],
                        [
                            'icon' => 'qrcode',
                            'title' => 'Barcode/RFID Scanning',
                            'shortDescription' => 'Fast and accurate scanning',
                            'description' => 'Mobile scanning apps for receiving, putaway, picking, and shipping with RFID integration and error proofing.',
                            'capabilities' => [
                                'Mobile scanning apps',
                                'RFID integration',
                                'Batch processing',
                                'Error proofing',
                                'Voice picking ready'
                            ],
                            'technologies' => ['Barcode', 'RFID', 'Voice Picking'],
                            'link' => '/3pl/scanning'
                        ],
                        [
                            'icon' => 'dollar',
                            'title' => 'Billing Automation',
                            'shortDescription' => 'Automated client billing',
                            'description' => 'Automated billing based on activity, storage, and value-added services with revenue recovery analytics.',
                            'capabilities' => [
                                'Activity-based billing',
                                'Storage fee calculation',
                                'Client invoicing',
                                'Payment integration',
                                'Revenue recovery'
                            ],
                            'technologies' => ['Billing Engine', 'EDI 810', 'Payment Gateway'],
                            'link' => '/3pl/billing'
                        ],
                        [
                            'icon' => 'truck',
                            'title' => 'Carrier Integration',
                            'shortDescription' => 'Multi-carrier shipping',
                            'description' => 'Integrate with major carriers for rate shopping, label generation, and tracking updates.',
                            'capabilities' => [
                                'Rate shopping',
                                'Label printing',
                                'Tracking updates',
                                'Freight management',
                                'Audit recovery'
                            ],
                            'technologies' => ['Carrier APIs', 'EDI 856', 'Rate Shopping'],
                            'link' => '/3pl/carrier-integration'
                        ],
                        [
                            'icon' => 'chart',
                            'title' => 'Analytics Dashboard',
                            'shortDescription' => 'Comprehensive analytics',
                            'description' => 'Comprehensive analytics for KPIs, SLAs, client profitability, and operational efficiency.',
                            'capabilities' => [
                                'SLA tracking',
                                'Productivity metrics',
                                'Cost analysis',
                                'Client reporting',
                                'Profitability analytics'
                            ],
                            'technologies' => ['BI Dashboard', 'Custom Reports', 'Data Export'],
                            'link' => '/3pl/analytics'
                        ]
                    ],
                    'showComparison' => true,
                    'comparison' => [
                        'before' => [
                            'Manual warehouse processes',
                            'Limited client visibility',
                            'Error-prone billing',
                            'Disconnected systems',
                            'Reactive decision making'
                        ],
                        'after' => [
                            'Automated warehouse operations',
                            'Real-time client portals',
                            'Automated billing with recovery',
                            'Integrated technology stack',
                            'Proactive analytics insights'
                        ]
                    ],
                    'showTechStack' => true,
                    'techStackTitle' => 'Seamlessly Integrates With Your 3PL Stack',
                    'techStack' => [
                        ['icon' => 'cloud', 'name' => 'Manhattan'],
                        ['icon' => 'database', 'name' => 'Blue Yonder'],
                        ['icon' => 'warehouse', 'name' => 'HighJump'],
                        ['icon' => 'cog', 'name' => 'SAP EWM'],
                        ['icon' => 'truck', 'name' => 'Oracle WMS'],
                        ['icon' => 'wifi', 'name' => 'Zebra'],
                        ['icon' => 'qrcode', 'name' => 'Honeywell'],
                        ['icon' => 'chart', 'name' => 'Tableau']
                    ],
                    'showHowItWorks' => true,
                    'howItWorksTitle' => 'How It Works',
                    'steps' => [
                        ['icon' => 'database', 'title' => 'Connect', 'description' => 'Integrate with your WMS, ERP, and carrier systems.'],
                        ['icon' => 'qrcode', 'title' => 'Scan', 'description' => 'Scan inventory for real-time tracking and accuracy.'],
                        ['icon' => 'chart', 'title' => 'Optimize', 'description' => 'Use analytics to optimize operations and billing.']
                    ],
                    'showFaq' => true,
                    'faqTitle' => 'Frequently Asked Questions',
                    'faqs' => [
                        [
                            'question' => 'How does the platform integrate with our existing WMS?',
                            'answer' => 'We offer pre-built integrations with major WMS platforms including Manhattan, Blue Yonder, HighJump, SAP EWM, and Oracle. Custom integrations are also available for legacy systems.'
                        ],
                        [
                            'question' => 'Can we provide white-label portals for our clients?',
                            'answer' => 'Yes! Our client portals are fully white-label with your branding. Clients get real-time inventory visibility, order tracking, and self-service reporting.'
                        ],
                        [
                            'question' => 'How does automated billing work?',
                            'answer' => 'Our billing engine automatically calculates charges based on activity (receiving, picking, packing), storage (cube/time), and value-added services, then generates client invoices.'
                        ],
                        [
                            'question' => 'What carrier integrations are available?',
                            'answer' => 'We integrate with FedEx, UPS, DHL, USPS, and regional carriers for rate shopping, label generation, and tracking. EDI 856 for ASNs is also supported.'
                        ],
                        [
                            'question' => 'Is there a demo available?',
                            'answer' => 'Yes! We offer personalized demos tailored to your specific 3PL operations. Contact our team to schedule a demo.'
                        ]
                    ],
                    'showResources' => true,
                    'resourcesTitle' => 'Helpful Resources',
                    'resources' => [
                        [
                            'icon' => 'document',
                            'title' => '3PL Operations Guide',
                            'description' => 'Learn best practices for warehouse optimization and client management.',
                            'cta' => 'Download Guide',
                            'link' => '/resources/3pl-guide'
                        ],
                        [
                            'icon' => 'play',
                            'title' => 'Platform Demo',
                            'description' => 'Watch a 10-minute overview of our 3PL solutions.',
                            'cta' => 'Watch Demo',
                            'link' => '/resources/demo-video'
                        ],
                        [
                            'icon' => 'download',
                            'title' => 'Billing Calculator',
                            'description' => 'Calculate potential savings from automated billing and revenue recovery.',
                            'cta' => 'Calculate Now',
                            'link' => '/resources/roi-calculator'
                        ]
                    ],
                    'showCta' => true,
                    'ctaText' => 'Ready to transform your 3PL operations?',
                    'ctaButtonText' => 'Get Started Today',
                    'ctaLink' => '/demo'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 204,
                'section_key' => 'thirdPartyLogistics',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Construction Section
            [
                'id' => 205,
                'section_key' => 'construction',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Industry Focus',
                        'backgroundColor' => 'bg-amber-50 dark:bg-amber-900/30',
                        'borderColor' => 'border-amber-200 dark:border-amber-800',
                        'textColor' => 'text-amber-700 dark:text-amber-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Construction',
                        'highlightedText' => 'Material Management',
                        'suffix' => '',
                        'highlightGradient' => 'from-amber-500 to-orange-500'
                    ],
                    'description' => 'Optimize your construction material supply chain with real-time tracking, job site inventory management, and equipment tracking.',
                    'initialTab' => 'overview',
                    'showStats' => true,
                    'stats' => [
                        ['icon' => 'building', 'value' => '500+', 'label' => 'Construction Firms'],
                        ['icon' => 'database', 'value' => '10K+', 'label' => 'Projects Managed'],
                        ['icon' => 'trending', 'value' => '25%', 'label' => 'Material Cost Reduction'],
                        ['icon' => 'clock', 'value' => '98%', 'label' => 'On-Time Delivery']
                    ],
                    'overview' => [
                        'title' => 'Job Site Inventory & Equipment Tracking',
                        'description' => 'Our platform helps construction firms track materials, equipment, and supplies across multiple job sites with real-time visibility and automated replenishment.',
                        'highlights' => [
                            'Real-time material tracking across job sites',
                            'Equipment maintenance and utilization',
                            'Automated reorder points for consumables',
                            'Supplier performance management',
                            'Mobile scanning for receiving and transfers'
                        ],
                        'ctaText' => 'Explore Solutions',
                        'ctaLink' => '/solutions/construction',
                        'statsCards' => [
                            ['value' => '50+', 'label' => 'Integrations'],
                            ['value' => '99.9%', 'label' => 'Inventory Accuracy'],
                            ['value' => '24/7', 'label' => 'Support'],
                            ['value' => '500+', 'label' => 'Happy Clients']
                        ]
                    ],
                    'challenges' => [
                        [
                            'icon' => 'truck',
                            'title' => 'Material Tracking',
                            'description' => 'Tracking materials across multiple job sites leads to waste, theft, and project delays.'
                        ],
                        [
                            'icon' => 'clock',
                            'title' => 'Equipment Downtime',
                            'description' => 'Poor equipment maintenance tracking causes unexpected breakdowns and project delays.'
                        ],
                        [
                            'icon' => 'database',
                            'title' => 'Inventory Visibility',
                            'description' => 'Limited visibility into job site inventory causes material shortages and over-ordering.'
                        ],
                        [
                            'icon' => 'chart',
                            'title' => 'Cost Overruns',
                            'description' => 'Manual tracking leads to inaccurate job costing and budget overruns.'
                        ],
                        [
                            'icon' => 'users',
                            'title' => 'Supplier Coordination',
                            'description' => 'Poor supplier communication causes delivery delays and material shortages.'
                        ],
                        [
                            'icon' => 'shield',
                            'title' => 'Compliance Tracking',
                            'description' => 'Meeting safety and compliance requirements requires extensive documentation.'
                        ]
                    ],
                    'solutions' => [
                        [
                            'icon' => 'qrcode',
                            'title' => 'Material Tracking',
                            'description' => 'Real-time tracking of materials from delivery to job site consumption.',
                            'features' => [
                                'Barcode scanning for receiving',
                                'Job site inventory counts',
                                'Transfer tracking',
                                'Consumption logging'
                            ]
                        ],
                        [
                            'icon' => 'cog',
                            'title' => 'Equipment Management',
                            'description' => 'Track equipment location, maintenance schedules, and utilization rates.',
                            'features' => [
                                'Equipment check-in/out',
                                'Maintenance scheduling',
                                'Utilization analytics',
                                'GPS tracking'
                            ]
                        ],
                        [
                            'icon' => 'refresh',
                            'title' => 'Automated Replenishment',
                            'description' => 'Automated reordering based on consumption rates and min/max levels.',
                            'features' => [
                                'Min/max levels',
                                'Consumption forecasting',
                                'PO automation',
                                'Supplier integration'
                            ]
                        ],
                        [
                            'icon' => 'cloud',
                            'title' => 'Job Site Visibility',
                            'description' => 'Real-time inventory visibility across all job sites from any device.',
                            'features' => [
                                'Mobile access',
                                'Real-time counts',
                                'Photo documentation',
                                'Offline mode'
                            ]
                        ],
                        [
                            'icon' => 'chart',
                            'title' => 'Job Costing',
                            'description' => 'Accurate job costing with material and equipment tracking.',
                            'features' => [
                                'Material cost tracking',
                                'Equipment cost allocation',
                                'Labor integration',
                                'Budget vs actual'
                            ]
                        ],
                        [
                            'icon' => 'document',
                            'title' => 'Compliance Management',
                            'description' => 'Automated safety and compliance documentation tracking.',
                            'features' => [
                                'Safety inspection logs',
                                'Equipment certifications',
                                'Material certs',
                                'Audit trails'
                            ]
                        ]
                    ],
                    'showFeatures' => true,
                    'features' => [
                        'title' => 'Why Construction Leaders Choose Us',
                        'items' => [
                            ['icon' => 'qrcode', 'title' => 'Material Tracking'],
                            ['icon' => 'cog', 'title' => 'Equipment Mgmt'],
                            ['icon' => 'cloud', 'title' => 'Job Site Access'],
                            ['icon' => 'chart', 'title' => 'Job Costing'],
                            ['icon' => 'database', 'title' => 'Analytics'],
                            ['icon' => 'users', 'title' => '24/7 Support'],
                            ['icon' => 'trending', 'title' => 'Scalable'],
                            ['icon' => 'shield', 'title' => 'Compliance']
                        ]
                    ],
                    'showStandards' => true,
                    'standardsText' => 'ISO 9001 | LEED Ready | OSHA Compliant | BIM Integrated | ACI Certified | AIA Documents',
                    'showSuccessMetrics' => true,
                    'successMetrics' => [
                        ['icon' => 'trending', 'value' => '287%', 'label' => 'Average ROI'],
                        ['icon' => 'clock', 'value' => '25%', 'label' => 'Material Cost Reduction'],
                        ['icon' => 'star', 'value' => '98%', 'label' => 'On-Time Delivery'],
                        ['icon' => 'dollar', 'value' => '$1.2M', 'label' => 'Avg. Annual Savings']
                    ],
                    'showCta' => true,
                    'ctaText' => 'Ready to transform your construction operations?',
                    'ctaButtonText' => 'Get Started Today',
                    'ctaLink' => '/demo'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 206,
                'section_key' => 'construction',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Success Stories',
                        'backgroundColor' => 'bg-amber-50 dark:bg-amber-900/30',
                        'borderColor' => 'border-amber-200 dark:border-amber-800',
                        'textColor' => 'text-amber-700 dark:text-amber-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Construction',
                        'highlightedText' => 'Success Stories',
                        'suffix' => '',
                        'highlightGradient' => 'from-amber-500 to-orange-500'
                    ],
                    'description' => 'See how construction firms are reducing material costs, improving job site efficiency, and completing projects on time.',
                    'initialIndex' => 0,
                    'autoplay' => true,
                    'autoplayInterval' => 6000,
                    'caseStudies' => [
                        [
                            'id' => 'prestige-construction',
                            'icon' => 'building',
                            'company' => 'Prestige Construction',
                            'location' => 'Dallas, TX',
                            'industry' => 'Commercial Construction',
                            'keyResult' => ['value' => '35%', 'label' => 'Material Cost Reduction'],
                            'results' => [
                                ['value' => '35%', 'label' => 'Material Cost Reduction'],
                                ['value' => '92%', 'label' => 'Theft Reduction'],
                                ['value' => '$2.5M', 'label' => 'Annual Savings'],
                                ['value' => '3x', 'label' => 'ROI']
                            ],
                            'challenge' => 'Prestige Construction was losing millions annually to material theft, waste, and over-ordering across 15 active job sites with no real-time visibility.',
                            'solution' => 'Implemented our job site inventory tracking system with barcode scanning, GPS tracking for high-value materials, and automated replenishment.',
                            'projectType' => ['Commercial', 'Multi-family', 'Mixed-use'],
                            'testimonial' => [
                                'quote' => 'Material costs are down 35% and theft is almost eliminated. We have real-time visibility into every job site.',
                                'author' => 'Tom Bradley',
                                'role' => 'Construction Director'
                            ],
                            'downloadLink' => '/case-studies/prestige-construction/download',
                            'videoLink' => '/case-studies/prestige-construction/video'
                        ],
                        [
                            'id' => 'heavy-equipment',
                            'icon' => 'cog',
                            'company' => 'Heavy Equipment Services',
                            'location' => 'Houston, TX',
                            'industry' => 'Heavy Civil',
                            'keyResult' => ['value' => '45%', 'label' => 'Equipment Utilization'],
                            'results' => [
                                ['value' => '45%', 'label' => 'Utilization Gain'],
                                ['value' => '60%', 'label' => 'Downtime Reduction'],
                                ['value' => '$1.8M', 'label' => 'Annual Savings'],
                                ['value' => '2.8x', 'label' => 'ROI']
                            ],
                            'challenge' => 'Poor equipment tracking caused underutilization, unexpected breakdowns, and rental overspending across the fleet of 200+ machines.',
                            'solution' => 'Deployed our equipment management platform with GPS tracking, maintenance scheduling, and utilization analytics.',
                            'projectType' => ['Heavy Civil', 'Infrastructure', 'Road Construction'],
                            'testimonial' => [
                                'quote' => 'Equipment utilization is up 45% and downtime is down 60%. We\'re getting more work done with the same fleet.',
                                'author' => 'Maria Garcia',
                                'role' => 'Fleet Manager'
                            ],
                            'downloadLink' => '/case-studies/heavy-equipment/download',
                            'videoLink' => '/case-studies/heavy-equipment/video'
                        ],
                        [
                            'id' => 'green-builders',
                            'icon' => 'hardhat',
                            'company' => 'Green Builders',
                            'location' => 'Portland, OR',
                            'industry' => 'Residential Construction',
                            'keyResult' => ['value' => '98%', 'label' => 'On-Time Delivery'],
                            'results' => [
                                ['value' => '98%', 'label' => 'On-Time Delivery'],
                                ['value' => '25%', 'label' => 'Waste Reduction'],
                                ['value' => '$950K', 'label' => 'Annual Savings'],
                                ['value' => '2.5x', 'label' => 'ROI']
                            ],
                            'challenge' => 'Material shortages and poor supplier coordination caused project delays and budget overruns across residential developments.',
                            'solution' => 'Implemented our supply chain platform with supplier portals, automated PO generation, and real-time delivery tracking.',
                            'projectType' => ['Residential', 'Multi-family', 'Sustainable'],
                            'testimonial' => [
                                'quote' => 'On-time delivery is now 98% and material waste is down 25%. Our suppliers are fully integrated.',
                                'author' => 'David Chen',
                                'role' => 'Project Manager'
                            ],
                            'downloadLink' => '/case-studies/green-builders/download',
                            'videoLink' => '/case-studies/green-builders/video'
                        ]
                    ],
                    'showAdditionalCases' => true,
                    'additionalCasesTitle' => 'More Success Stories',
                    'additionalCases' => [
                        [
                            'icon' => 'building',
                            'company' => 'Summit Contractors',
                            'industry' => 'Commercial',
                            'result' => '40%',
                            'resultLabel' => 'Faster Closeout',
                            'description' => 'Reduced project closeout time with digital documentation.',
                            'link' => '/case-studies/summit-contractors'
                        ],
                        [
                            'icon' => 'cog',
                            'company' => 'Metro Paving',
                            'industry' => 'Infrastructure',
                            'result' => '30%',
                            'resultLabel' => 'Fuel Savings',
                            'description' => 'Optimized equipment routing and reduced fuel consumption.',
                            'link' => '/case-studies/metro-paving'
                        ],
                        [
                            'icon' => 'hardhat',
                            'company' => 'Elite Renovations',
                            'industry' => 'Residential',
                            'result' => '99%',
                            'resultLabel' => 'Material Accuracy',
                            'description' => 'Achieved near-perfect material ordering with consumption tracking.',
                            'link' => '/case-studies/elite-renovations'
                        ]
                    ],
                    'showCostCalculator' => true,
                    'theftReduction' => '80-90%',
                    'wasteReduction' => '15-25%',
                    'paybackPeriod' => '3-6',
                    'calculatorLink' => '/construction-calculator',
                    'showPartners' => true,
                    'partnersTitle' => 'Trusted by leading construction firms across North America',
                    'partners' => [
                        ['icon' => 'building', 'name' => 'Turner Construction'],
                        ['icon' => 'cog', 'name' => 'Bechtel'],
                        ['icon' => 'hardhat', 'name' => 'Fluor'],
                        ['icon' => 'truck', 'name' => 'Kiewit'],
                        ['icon' => 'building', 'name' => 'Whiting-Turner'],
                        ['icon' => 'cog', 'name' => 'DPR Construction']
                    ],
                    'showCta' => true,
                    'ctaText' => 'Ready to write your own success story?',
                    'ctaButtonText' => 'Start Your Journey',
                    'ctaLink' => '/demo'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 207,
                'section_key' => 'construction',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => [
                        'text' => 'Features & FAQ',
                        'backgroundColor' => 'bg-amber-50 dark:bg-amber-900/30',
                        'borderColor' => 'border-amber-200 dark:border-amber-800',
                        'textColor' => 'text-amber-700 dark:text-amber-300',
                        'showPulse' => true
                    ],
                    'title' => [
                        'prefix' => 'Everything You',
                        'highlightedText' => 'Need for Construction',
                        'suffix' => '',
                        'highlightGradient' => 'from-amber-500 to-orange-500'
                    ],
                    'description' => 'Comprehensive construction material and equipment management solutions designed to reduce costs and improve project delivery.',
                    'initialFeature' => 0,
                    'showFeatureGrid' => true,
                    'benefits' => [
                        ['icon' => 'trending', 'value' => '287%', 'label' => 'Average ROI'],
                        ['icon' => 'clock', 'value' => '25%', 'label' => 'Material Cost Reduction'],
                        ['icon' => 'dollar', 'value' => '$1.2M', 'label' => 'Avg. Annual Savings'],
                        ['icon' => 'star', 'value' => '98%', 'label' => 'On-Time Delivery']
                    ],
                    'features' => [
                        [
                            'icon' => 'qrcode',
                            'title' => 'Material Tracking',
                            'shortDescription' => 'Real-time job site inventory',
                            'description' => 'Track materials from delivery to consumption with barcode scanning, GPS tracking for high-value items, and automated inventory counts.',
                            'capabilities' => [
                                'Barcode scanning for receiving',
                                'Job site inventory counts',
                                'Transfer tracking',
                                'Consumption logging',
                                'Theft prevention alerts'
                            ],
                            'technologies' => ['Barcode', 'GPS', 'RFID'],
                            'link' => '/construction/material-tracking'
                        ],
                        [
                            'icon' => 'cog',
                            'title' => 'Equipment Management',
                            'shortDescription' => 'Fleet optimization',
                            'description' => 'Complete equipment management with GPS tracking, maintenance scheduling, utilization analytics, and rental optimization.',
                            'capabilities' => [
                                'Equipment check-in/out',
                                'Maintenance scheduling',
                                'Utilization analytics',
                                'GPS tracking',
                                'Rental management'
                            ],
                            'technologies' => ['GPS', 'Telematics', 'IoT'],
                            'link' => '/construction/equipment'
                        ],
                        [
                            'icon' => 'refresh',
                            'title' => 'Automated Replenishment',
                            'shortDescription' => 'Smart inventory reordering',
                            'description' => 'Automated material reordering based on consumption rates, project schedules, and min/max levels with supplier integration.',
                            'capabilities' => [
                                'Min/max levels',
                                'Consumption forecasting',
                                'PO automation',
                                'Supplier integration',
                                'Lead time tracking'
                            ],
                            'technologies' => ['EDI', 'API', 'Forecasting'],
                            'link' => '/construction/replenishment'
                        ],
                        [
                            'icon' => 'cloud',
                            'title' => 'Job Site Visibility',
                            'shortDescription' => 'Mobile access',
                            'description' => 'Real-time inventory visibility across all job sites from any device with offline mode and photo documentation.',
                            'capabilities' => [
                                'Mobile access',
                                'Real-time counts',
                                'Photo documentation',
                                'Offline mode',
                                'Site transfers'
                            ],
                            'technologies' => ['Mobile', 'Cloud', 'Offline Sync'],
                            'link' => '/construction/job-site'
                        ],
                        [
                            'icon' => 'chart',
                            'title' => 'Project Costing',
                            'shortDescription' => 'Accurate job costing',
                            'description' => 'Accurate project costing with material tracking, equipment cost allocation, and labor integration for budget vs actual analysis.',
                            'capabilities' => [
                                'Material cost tracking',
                                'Equipment cost allocation',
                                'Labor integration',
                                'Budget vs actual',
                                'Variance analysis'
                            ],
                            'technologies' => ['ERP Integration', 'Analytics'],
                            'link' => '/construction/costing'
                        ],
                        [
                            'icon' => 'document',
                            'title' => 'Compliance Management',
                            'shortDescription' => 'Safety & documentation',
                            'description' => 'Automated safety and compliance documentation tracking with inspection logs, equipment certifications, and audit trails.',
                            'capabilities' => [
                                'Safety inspection logs',
                                'Equipment certifications',
                                'Material certs',
                                'Audit trails',
                                'OSHA reporting'
                            ],
                            'technologies' => ['Digital Forms', 'Document Management'],
                            'link' => '/construction/compliance'
                        ]
                    ],
                    'showComparison' => true,
                    'comparison' => [
                        'before' => [
                            'Manual material tracking',
                            'Unplanned equipment downtime',
                            'Material theft and waste',
                            'Poor job site visibility',
                            'Reactive replenishment'
                        ],
                        'after' => [
                            'Real-time material tracking',
                            'Predictive maintenance',
                            '85% theft reduction',
                            'Complete job site visibility',
                            'Automated replenishment'
                        ]
                    ],
                    'showTechStack' => true,
                    'techStackTitle' => 'Seamlessly Integrates With Your Construction Stack',
                    'techStack' => [
                        ['icon' => 'building', 'name' => 'Procore'],
                        ['icon' => 'database', 'name' => 'Autodesk BIM 360'],
                        ['icon' => 'cog', 'name' => 'Viewpoint'],
                        ['icon' => 'truck', 'name' => 'Sage'],
                        ['icon' => 'hardhat', 'name' => 'HCSS'],
                        ['icon' => 'cloud', 'name' => 'PlanGrid'],
                        ['icon' => 'chart', 'name' => 'Bluebeam'],
                        ['icon' => 'wrench', 'name' => 'Fleetio']
                    ],
                    'showHowItWorks' => true,
                    'howItWorksTitle' => 'How It Works',
                    'steps' => [
                        ['icon' => 'database', 'title' => 'Connect', 'description' => 'Integrate with your accounting, ERP, and project management systems.'],
                        ['icon' => 'qrcode', 'title' => 'Scan', 'description' => 'Scan materials on delivery and consumption at job sites.'],
                        ['icon' => 'chart', 'title' => 'Optimize', 'description' => 'Use analytics to reduce costs and improve project delivery.']
                    ],
                    'showFaq' => true,
                    'faqTitle' => 'Frequently Asked Questions',
                    'faqs' => [
                        [
                            'question' => 'How does material tracking work across multiple job sites?',
                            'answer' => 'Our system provides real-time visibility across all job sites with barcode scanning for receiving and consumption, transfer tracking between sites, and automated inventory counts.'
                        ],
                        [
                            'question' => 'Can it track equipment maintenance and utilization?',
                            'answer' => 'Yes! Our equipment management module tracks maintenance schedules, work orders, utilization rates, and rental equipment with GPS location data.'
                        ],
                        [
                            'question' => 'How does automated replenishment work?',
                            'answer' => 'The system monitors consumption rates and inventory levels, automatically generating purchase orders when stock reaches min/max thresholds based on project schedules.'
                        ],
                        [
                            'question' => 'Does it integrate with our accounting software?',
                            'answer' => 'Yes, we offer pre-built integrations with major construction accounting and ERP systems including Sage, Viewpoint, QuickBooks, and more.'
                        ],
                        [
                            'question' => 'Is there a demo available?',
                            'answer' => 'Yes! We offer personalized demos tailored to your specific construction operations. Contact our team to schedule a demo.'
                        ]
                    ],
                    'showResources' => true,
                    'resourcesTitle' => 'Helpful Resources',
                    'resources' => [
                        [
                            'icon' => 'document',
                            'title' => 'Construction Material Management Guide',
                            'description' => 'Learn best practices for job site inventory and equipment tracking.',
                            'cta' => 'Download Guide',
                            'link' => '/resources/construction-guide'
                        ],
                        [
                            'icon' => 'play',
                            'title' => 'Platform Demo',
                            'description' => 'Watch a 10-minute overview of our construction solutions.',
                            'cta' => 'Watch Demo',
                            'link' => '/resources/demo-video'
                        ],
                        [
                            'icon' => 'download',
                            'title' => 'ROI Calculator',
                            'description' => 'Calculate potential savings from material cost reduction and theft prevention.',
                            'cta' => 'Calculate Now',
                            'link' => '/resources/roi-calculator'
                        ]
                    ],
                    'showCta' => true,
                    'ctaText' => 'Ready to transform your construction operations?',
                    'ctaButtonText' => 'Get Started Today',
                    'ctaLink' => '/demo'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 208,
                'section_key' => 'construction',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];


        // Add the new FeatureP variants
        DB::table('section_variants')->upsert(
            $variants,
            ['section_key', 'variant'],
            ['config', 'updated_at']
        );
    }
}
