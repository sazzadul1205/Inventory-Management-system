<?php
// database/seeders/PageRelatedSeeders/PageSeeders.php
namespace Database\Seeders\PageRelatedSeeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class PageSeeders extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Disable foreign key checks if needed
        Schema::disableForeignKeyConstraints();

        // Truncate the table to avoid duplicate entries (optional)
        DB::table('pages')->truncate();

        // Insert all pages
        $pages = [
            [
                'id' => 1,
                'name' => 'Home',
                'slug' => 'home',
                'meta' => json_encode([
                    'title' => 'Home | Smart Inventory & Logistics Management Solutions',
                    'description' => 'Streamline your supply chain with our intelligent inventory management and logistics platform. Real-time tracking, warehouse optimization, and delivery management.',
                    'keywords' => 'inventory management, logistics, supply chain, warehouse management, delivery tracking',
                    'robots' => 'index, follow'
                ]),
                'is_active' => 1,
                'order' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 2,
                'name' => 'Services',
                'slug' => 'services',
                'meta' => json_encode([
                    'title' => 'Our Services | Inventory & Logistics Solutions',
                    'description' => 'Comprehensive inventory management and logistics services including warehousing, transportation, supply chain consulting, and fulfillment solutions.',
                    'keywords' => 'inventory services, logistics services, warehousing, transportation, fulfillment',
                    'robots' => 'index, follow'
                ]),
                'is_active' => 1,
                'order' => 2,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 3,
                'name' => 'Features',
                'slug' => 'features',
                'meta' => json_encode([
                    'title' => 'Platform Features | Smart Inventory Management',
                    'description' => 'Discover powerful features of our inventory management platform including real-time tracking, analytics, automation, and multi-location support.',
                    'keywords' => 'inventory features, logistics features, real-time tracking, automation, analytics',
                    'robots' => 'index, follow'
                ]),
                'is_active' => 1,
                'order' => 3,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 4,
                'name' => 'How It Works',
                'slug' => 'how-it-works',
                'meta' => json_encode([
                    'title' => 'How It Works | Simple Setup Process',
                    'description' => 'Learn how our inventory and logistics platform works. Simple 3-step process to streamline your supply chain operations.',
                    'keywords' => 'how it works, setup process, implementation, onboarding',
                    'robots' => 'index, follow'
                ]),
                'is_active' => 1,
                'order' => 4,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 5,
                'name' => 'Industries',
                'slug' => 'industries',
                'meta' => json_encode([
                    'title' => 'Industries We Serve | Logistics Solutions',
                    'description' => 'Tailored inventory and logistics solutions for retail, manufacturing, e-commerce, healthcare, automotive, and food & beverage industries.',
                    'keywords' => 'industries served, retail logistics, manufacturing inventory, e-commerce fulfillment',
                    'robots' => 'index, follow'
                ]),
                'is_active' => 1,
                'order' => 5,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 6,
                'name' => 'Success Stories',
                'slug' => 'success-stories',
                'meta' => json_encode([
                    'title' => 'Success Stories | Client Case Studies',
                    'description' => 'Real success stories from businesses that transformed their supply chain using our inventory and logistics platform.',
                    'keywords' => 'success stories, case studies, client testimonials, results',
                    'robots' => 'index, follow'
                ]),
                'is_active' => 1,
                'order' => 6,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 7,
                'name' => 'Testimonials',
                'slug' => 'testimonials',
                'meta' => json_encode([
                    'title' => 'Client Testimonials | What Our Customers Say',
                    'description' => 'Read what our satisfied customers say about our inventory management and logistics solutions.',
                    'keywords' => 'testimonials, customer reviews, client feedback',
                    'robots' => 'index, follow'
                ]),
                'is_active' => 1,
                'order' => 7,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 8,
                'name' => 'Pricing Plans',
                'slug' => 'pricing-plans',
                'meta' => json_encode([
                    'title' => 'Pricing Plans | Flexible & Affordable',
                    'description' => 'Choose the perfect pricing plan for your business. Flexible options for startups, growing businesses, and enterprises.',
                    'keywords' => 'pricing, plans, subscription, cost, affordable',
                    'robots' => 'index, follow'
                ]),
                'is_active' => 1,
                'order' => 8,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 9,
                'name' => 'FAQ',
                'slug' => 'faq',
                'meta' => json_encode([
                    'title' => 'Frequently Asked Questions | Help Center',
                    'description' => 'Find answers to common questions about our inventory management and logistics platform.',
                    'keywords' => 'faq, questions, answers, help',
                    'robots' => 'index, follow'
                ]),
                'is_active' => 1,
                'order' => 9,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 10,
                'name' => 'Contact',
                'slug' => 'contact',
                'meta' => json_encode([
                    'title' => 'Contact Us | Get In Touch',
                    'description' => 'Contact our team for inquiries, support, or demo requests. We\'re here to help with your inventory and logistics needs.',
                    'keywords' => 'contact, support, sales, inquiries',
                    'robots' => 'index, follow'
                ]),
                'is_active' => 1,
                'order' => 10,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 11,
                'name' => 'About Us',
                'slug' => 'about-us',
                'meta' => json_encode([
                    'title' => 'About Us | Our Story & Mission',
                    'description' => 'Learn about our company, mission, values, and the team behind our innovative inventory and logistics platform.',
                    'keywords' => 'about us, company, mission, values, team',
                    'robots' => 'index, follow'
                ]),
                'is_active' => 1,
                'order' => 11,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 12,
                'name' => 'Why Choose Us',
                'slug' => 'why-choose-us',
                'meta' => json_encode([
                    'title' => 'Why Choose Us | Our Advantages',
                    'description' => 'Discover why businesses choose our inventory and logistics platform for their supply chain needs.',
                    'keywords' => 'why choose us, advantages, benefits, differentiators',
                    'robots' => 'index, follow'
                ]),
                'is_active' => 1,
                'order' => 12,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 13,
                'name' => 'Blog',
                'slug' => 'blog',
                'meta' => json_encode([
                    'title' => 'Blog | Insights & Updates',
                    'description' => 'Latest insights, tips, and updates about inventory management, logistics, and supply chain optimization.',
                    'keywords' => 'blog, articles, insights, tips, updates',
                    'robots' => 'index, follow'
                ]),
                'is_active' => 1,
                'order' => 13,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 14,
                'name' => 'News',
                'slug' => 'news',
                'meta' => json_encode([
                    'title' => 'News | Company Announcements',
                    'description' => 'Stay updated with company news, product launches, partnerships, and industry recognition.',
                    'keywords' => 'news, announcements, press releases, company updates',
                    'robots' => 'index, follow'
                ]),
                'is_active' => 1,
                'order' => 14,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 15,
                'name' => 'Partners',
                'slug' => 'partners',
                'meta' => json_encode([
                    'title' => 'Partners | Our Partner Network',
                    'description' => 'Explore our partner network including technology partners, integrators, and resellers.',
                    'keywords' => 'partners, integrations, resellers, technology partners',
                    'robots' => 'index, follow'
                ]),
                'is_active' => 1,
                'order' => 15,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 16,
                'name' => 'Global Presence',
                'slug' => 'global-presence',
                'meta' => json_encode([
                    'title' => 'Global Presence | Worldwide Operations',
                    'description' => 'Learn about our global footprint with offices and operations across multiple countries.',
                    'keywords' => 'global presence, locations, worldwide, international',
                    'robots' => 'index, follow'
                ]),
                'is_active' => 1,
                'order' => 16,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 17,
                'name' => 'Careers',
                'slug' => 'careers',
                'meta' => json_encode([
                    'title' => 'Careers | Join Our Team',
                    'description' => 'Build your career with us. Explore job opportunities and join a dynamic team in inventory management and logistics.',
                    'keywords' => 'careers, jobs, employment, join us, hiring',
                    'robots' => 'index, follow'
                ]),
                'is_active' => 1,
                'order' => 17,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 18,
                'name' => 'Trust Signals',
                'slug' => 'trust-signals',
                'meta' => json_encode([
                    'title' => 'Trust Signals | Security & Compliance',
                    'description' => 'Learn about our security measures, certifications, and compliance standards.',
                    'keywords' => 'trust, security, compliance, certifications, privacy',
                    'robots' => 'index, follow'
                ]),
                'is_active' => 1,
                'order' => 18,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 19,
                'name' => 'Newsletter',
                'slug' => 'newsletter',
                'meta' => json_encode([
                    'title' => 'Newsletter | Stay Updated',
                    'description' => 'Subscribe to our newsletter for the latest updates, tips, and industry insights.',
                    'keywords' => 'newsletter, subscribe, updates, email',
                    'robots' => 'index, follow'
                ]),
                'is_active' => 1,
                'order' => 19,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 20,
                'name' => 'Mobile App',
                'slug' => 'mobile-app',
                'meta' => json_encode([
                    'title' => 'Mobile App | Manage On The Go',
                    'description' => 'Download our mobile app to manage inventory and logistics from anywhere, anytime.',
                    'keywords' => 'mobile app, ios, android, on-the-go',
                    'robots' => 'index, follow'
                ]),
                'is_active' => 1,
                'order' => 20,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 21,
                'name' => 'Events',
                'slug' => 'events',
                'meta' => json_encode([
                    'title' => 'Events | Webinars & Conferences',
                    'description' => 'Join our events, webinars, and conferences to learn about inventory and logistics trends.',
                    'keywords' => 'events, webinars, conferences, workshops',
                    'robots' => 'index, follow'
                ]),
                'is_active' => 1,
                'order' => 21,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 22,
                'name' => 'Support',
                'slug' => 'support',
                'meta' => json_encode([
                    'title' => 'Support | Help Center',
                    'description' => 'Get technical support, documentation, and resources for our inventory and logistics platform.',
                    'keywords' => 'support, help, documentation, troubleshooting',
                    'robots' => 'index, follow'
                ]),
                'is_active' => 1,
                'order' => 22,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 23,
                'name' => 'Legal',
                'slug' => 'legal',
                'meta' => json_encode([
                    'title' => 'Legal | Terms & Privacy',
                    'description' => 'Legal information including terms of service, privacy policy, and compliance documents.',
                    'keywords' => 'legal, terms, privacy, compliance, GDPR',
                    'robots' => 'index, follow'
                ]),
                'is_active' => 1,
                'order' => 23,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 24,
                'name' => 'Sitemap',
                'slug' => 'sitemap',
                'meta' => json_encode([
                    'title' => 'Sitemap | Website Navigation',
                    'description' => 'Complete sitemap of our website to help you find what you\'re looking for.',
                    'keywords' => 'sitemap, navigation, links, directory',
                    'robots' => 'index, follow'
                ]),
                'is_active' => 1,
                'order' => 24,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

        // Insert all pages
        foreach ($pages as $page) {
            DB::table('pages')->insert($page);
        }

        // Re-enable foreign key checks
        Schema::enableForeignKeyConstraints();
    }
}
