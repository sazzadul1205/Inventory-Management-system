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
        ];

        // Add the new FeatureP variants
        DB::table('section_variants')->upsert(
            $variants,
            ['section_key', 'variant'],
            ['config', 'updated_at']
        );
    }
}
