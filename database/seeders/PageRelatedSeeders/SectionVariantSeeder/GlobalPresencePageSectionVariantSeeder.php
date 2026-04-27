<?php

namespace Database\Seeders\PageRelatedSeeders\SectionVariantSeeder;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class GlobalPresencePageSectionVariantSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        // Upsert only this page's variants so other page seeders do not get wiped out.
        $variants = [

            // Worldwide Locations Section
            [
                'id' => 473,
                'section_key' => 'worldwideLocations',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => 'Global Presence',
                    'title' => [
                        'prefix' => 'Our',
                        'highlight' => 'Global Footprint'
                    ],
                    'description' => 'With offices across the globe, we\'re strategically positioned to serve our customers wherever they are. Find a location near you.',
                    'heroImage' => 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&h=500&fit=crop',
                    'searchPlaceholder' => 'Search by city, country, or address...',
                    'regions' => [
                        ['id' => 'all', 'label' => 'All Regions', 'icon' => 'globe'],
                        ['id' => 'north-america', 'label' => 'North America', 'icon' => 'globe'],
                        ['id' => 'europe', 'label' => 'Europe', 'icon' => 'globe'],
                        ['id' => 'asia-pacific', 'label' => 'Asia Pacific', 'icon' => 'globe'],
                        ['id' => 'latin-america', 'label' => 'Latin America', 'icon' => 'globe'],
                        ['id' => 'middle-east', 'label' => 'Middle East', 'icon' => 'globe'],
                        ['id' => 'africa', 'label' => 'Africa', 'icon' => 'globe']
                    ],
                    'stats' => [
                        ['value' => '25+', 'label' => 'Countries', 'icon' => 'globe'],
                        ['value' => '50+', 'label' => 'Office Locations', 'icon' => 'building'],
                        ['value' => '1000+', 'label' => 'Global Employees', 'icon' => 'users'],
                        ['value' => '24/7', 'label' => 'Global Support', 'icon' => 'clock']
                    ],
                    'locations' => [
                        [
                            'id' => 'new-york',
                            'city' => 'New York',
                            'country' => 'United States',
                            'region' => 'north-america',
                            'address' => '350 Fifth Avenue, Suite 5500, New York, NY 10118',
                            'phone' => '+1 (212) 555-0100',
                            'email' => 'nyc@supplychainpro.com',
                            'hours' => 'Monday-Friday, 9:00 AM - 6:00 PM EST',
                            'details' => 'Our global headquarters houses our executive leadership, sales team, and product development center.',
                            'tags' => ['headquarters', 'sales', 'product'],
                            'image' => 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&h=400&fit=crop',
                            'mapLink' => 'https://maps.google.com/?q=New+York+NY',
                            'mapX' => 320,
                            'mapY' => 260,
                            'isFeatured' => true
                        ],
                        [
                            'id' => 'london',
                            'city' => 'London',
                            'country' => 'United Kingdom',
                            'region' => 'europe',
                            'address' => '10 Lower Thames Street, London, EC3R 6AF',
                            'phone' => '+44 (20) 7946 0100',
                            'email' => 'london@supplychainpro.com',
                            'hours' => 'Monday-Friday, 9:00 AM - 6:00 PM GMT',
                            'details' => 'Our European headquarters serving clients across the UK and Europe with dedicated support teams.',
                            'tags' => ['europe', 'sales', 'support'],
                            'image' => 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=400&fit=crop',
                            'mapLink' => 'https://maps.google.com/?q=London+UK',
                            'mapX' => 520,
                            'mapY' => 290,
                            'isFeatured' => true
                        ],
                        [
                            'id' => 'singapore',
                            'city' => 'Singapore',
                            'country' => 'Singapore',
                            'region' => 'asia-pacific',
                            'address' => '9 Raffles Place, #26-01, Republic Plaza, Singapore 048619',
                            'phone' => '+65 6808 6100',
                            'email' => 'singapore@supplychainpro.com',
                            'hours' => 'Monday-Friday, 9:00 AM - 6:00 PM SGT',
                            'details' => 'Our Asia-Pacific hub supporting clients across Southeast Asia, Australia, and New Zealand.',
                            'tags' => ['asia-pacific', 'regional-hub', 'support'],
                            'image' => 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600&h=400&fit=crop',
                            'mapLink' => 'https://maps.google.com/?q=Singapore',
                            'mapX' => 850,
                            'mapY' => 300,
                            'isFeatured' => true
                        ],
                        [
                            'id' => 'sao-paulo',
                            'city' => 'São Paulo',
                            'country' => 'Brazil',
                            'region' => 'latin-america',
                            'address' => 'Av. Paulista, 1578, 10th Floor, São Paulo, SP 01310-200',
                            'phone' => '+55 (11) 3500-0100',
                            'email' => 'saopaulo@supplychainpro.com',
                            'hours' => 'Monday-Friday, 9:00 AM - 6:00 PM BRT',
                            'details' => 'Our Latin American headquarters serving clients across Brazil and South America.',
                            'tags' => ['latin-america', 'regional-hub', 'sales'],
                            'image' => 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=600&h=400&fit=crop',
                            'mapLink' => 'https://maps.google.com/?q=S%C3%A3o+Paulo+Brazil',
                            'mapX' => 360,
                            'mapY' => 430
                        ],
                        [
                            'id' => 'dubai',
                            'city' => 'Dubai',
                            'country' => 'UAE',
                            'region' => 'middle-east',
                            'address' => 'Dubai Internet City, Building 1, Office 502, Dubai',
                            'phone' => '+971 4 567 8901',
                            'email' => 'dubai@supplychainpro.com',
                            'hours' => 'Sunday-Thursday, 9:00 AM - 6:00 PM GST',
                            'details' => 'Our Middle East hub serving clients across the Gulf region and Africa.',
                            'tags' => ['middle-east', 'regional-hub', 'support'],
                            'image' => 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&h=400&fit=crop',
                            'mapLink' => 'https://maps.google.com/?q=Dubai+UAE',
                            'mapX' => 650,
                            'mapY' => 300
                        ],
                        [
                            'id' => 'johannesburg',
                            'city' => 'Johannesburg',
                            'country' => 'South Africa',
                            'region' => 'africa',
                            'address' => 'Sandton City, 5th Floor, Johannesburg, 2196',
                            'phone' => '+27 (11) 234 5678',
                            'email' => 'johannesburg@supplychainpro.com',
                            'hours' => 'Monday-Friday, 8:00 AM - 5:00 PM SAST',
                            'details' => 'Our African headquarters supporting clients across the continent with localized expertise.',
                            'tags' => ['africa', 'regional-hub', 'sales'],
                            'image' => 'https://images.unsplash.com/photo-1576485290814-1c72aa2b8d6f?w=600&h=400&fit=crop',
                            'mapLink' => 'https://maps.google.com/?q=Johannesburg+South+Africa',
                            'mapX' => 560,
                            'mapY' => 410
                        ],
                        [
                            'id' => 'tokyo',
                            'city' => 'Tokyo',
                            'country' => 'Japan',
                            'region' => 'asia-pacific',
                            'address' => 'Marunouchi Trust Tower, 1-8-1 Marunouchi, Chiyoda-ku, Tokyo 100-0005',
                            'phone' => '+81 (3) 4567 8901',
                            'email' => 'tokyo@supplychainpro.com',
                            'hours' => 'Monday-Friday, 9:00 AM - 6:00 PM JST',
                            'details' => 'Our Japan office serving clients across the Japanese market with dedicated Japanese-speaking support.',
                            'tags' => ['japan', 'asia', 'support'],
                            'image' => 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&h=400&fit=crop',
                            'mapLink' => 'https://maps.google.com/?q=Tokyo+Japan',
                            'mapX' => 920,
                            'mapY' => 290
                        ],
                        [
                            'id' => 'sydney',
                            'city' => 'Sydney',
                            'country' => 'Australia',
                            'region' => 'asia-pacific',
                            'address' => '1 Martin Place, Level 25, Sydney, NSW 2000',
                            'phone' => '+61 (2) 8123 4567',
                            'email' => 'sydney@supplychainpro.com',
                            'hours' => 'Monday-Friday, 9:00 AM - 6:00 PM AEDT',
                            'details' => 'Our Australian office supporting clients across Australia and New Zealand.',
                            'tags' => ['australia', 'oceania', 'sales'],
                            'image' => 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600&h=400&fit=crop',
                            'mapLink' => 'https://maps.google.com/?q=Sydney+Australia',
                            'mapX' => 1000,
                            'mapY' => 380
                        ]
                    ],
                    'supportTitle' => '24/7 Global Support',
                    'supportDescription' => 'No matter where you are, our global team is ready to assist you with dedicated support in your time zone.',
                    'supportLink' => '/contact',
                    'supportImage' => 'https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=600&h=400&fit=crop',
                    'showNewsletter' => true,
                    'newsletter' => [
                        'title' => 'Get Global Updates',
                        'description' => 'Subscribe to receive news about new office openings, regional events, and global initiatives.',
                        'disclaimer' => 'No spam, unsubscribe anytime. Get 1-2 emails per month.',
                        'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 474,
                'section_key' => 'worldwideLocations',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => 'Global Presence',
                    'title' => [
                        'prefix' => 'Our',
                        'highlight' => 'Global Footprint'
                    ],
                    'description' => 'With offices across the globe, we\'re strategically positioned to serve our customers wherever they are. Find a location near you.',
                    'heroImage' => 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&h=500&fit=crop',
                    'searchPlaceholder' => 'Search by city, country, or address...',
                    'defaultViewMode' => 'grid',
                    'regions' => [
                        ['id' => 'all', 'label' => 'All Regions', 'icon' => 'globe'],
                        ['id' => 'north-america', 'label' => 'North America', 'icon' => 'globe'],
                        ['id' => 'europe', 'label' => 'Europe', 'icon' => 'globe'],
                        ['id' => 'asia-pacific', 'label' => 'Asia Pacific', 'icon' => 'globe'],
                        ['id' => 'latin-america', 'label' => 'Latin America', 'icon' => 'globe'],
                        ['id' => 'middle-east', 'label' => 'Middle East', 'icon' => 'globe'],
                        ['id' => 'africa', 'label' => 'Africa', 'icon' => 'globe']
                    ],
                    'stats' => [
                        ['value' => '25+', 'label' => 'Countries', 'icon' => 'globe', 'trend' => '+5', 'trendUp' => true],
                        ['value' => '50+', 'label' => 'Office Locations', 'icon' => 'building', 'trend' => '+8', 'trendUp' => true],
                        ['value' => '1000+', 'label' => 'Global Employees', 'icon' => 'users', 'trend' => '+200', 'trendUp' => true],
                        ['value' => '24/7', 'label' => 'Global Support', 'icon' => 'clock', 'trend' => 'Always', 'trendUp' => true]
                    ],
                    'locations' => [
                        [
                            'id' => 'new-york',
                            'city' => 'New York',
                            'country' => 'United States',
                            'region' => 'north-america',
                            'address' => '350 Fifth Avenue, Suite 5500, New York, NY 10118',
                            'phone' => '+1 (212) 555-0100',
                            'email' => 'nyc@supplychainpro.com',
                            'employees' => 250,
                            'timeZone' => 'EST',
                            'tags' => ['headquarters', 'sales', 'product'],
                            'image' => 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&h=400&fit=crop',
                            'mapLink' => 'https://maps.google.com/?q=New+York+NY',
                            'mapX' => 320,
                            'mapY' => 260,
                            'isFeatured' => true
                        ],
                        [
                            'id' => 'london',
                            'city' => 'London',
                            'country' => 'United Kingdom',
                            'region' => 'europe',
                            'address' => '10 Lower Thames Street, London, EC3R 6AF',
                            'phone' => '+44 (20) 7946 0100',
                            'email' => 'london@supplychainpro.com',
                            'employees' => 180,
                            'timeZone' => 'GMT',
                            'tags' => ['europe', 'sales', 'support'],
                            'image' => 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=400&fit=crop',
                            'mapLink' => 'https://maps.google.com/?q=London+UK',
                            'mapX' => 520,
                            'mapY' => 290,
                            'isFeatured' => true
                        ],
                        [
                            'id' => 'singapore',
                            'city' => 'Singapore',
                            'country' => 'Singapore',
                            'region' => 'asia-pacific',
                            'address' => '9 Raffles Place, #26-01, Republic Plaza, Singapore 048619',
                            'phone' => '+65 6808 6100',
                            'email' => 'singapore@supplychainpro.com',
                            'employees' => 120,
                            'timeZone' => 'SGT',
                            'tags' => ['asia-pacific', 'regional-hub', 'support'],
                            'image' => 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600&h=400&fit=crop',
                            'mapLink' => 'https://maps.google.com/?q=Singapore',
                            'mapX' => 850,
                            'mapY' => 300,
                            'isFeatured' => true
                        ],
                        [
                            'id' => 'sao-paulo',
                            'city' => 'São Paulo',
                            'country' => 'Brazil',
                            'region' => 'latin-america',
                            'address' => 'Av. Paulista, 1578, 10th Floor, São Paulo, SP 01310-200',
                            'phone' => '+55 (11) 3500-0100',
                            'email' => 'saopaulo@supplychainpro.com',
                            'employees' => 95,
                            'timeZone' => 'BRT',
                            'tags' => ['latin-america', 'regional-hub', 'sales'],
                            'image' => 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=600&h=400&fit=crop',
                            'mapLink' => 'https://maps.google.com/?q=S%C3%A3o+Paulo+Brazil',
                            'mapX' => 360,
                            'mapY' => 430
                        ],
                        [
                            'id' => 'dubai',
                            'city' => 'Dubai',
                            'country' => 'UAE',
                            'region' => 'middle-east',
                            'address' => 'Dubai Internet City, Building 1, Office 502, Dubai',
                            'phone' => '+971 4 567 8901',
                            'email' => 'dubai@supplychainpro.com',
                            'employees' => 75,
                            'timeZone' => 'GST',
                            'tags' => ['middle-east', 'regional-hub', 'support'],
                            'image' => 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&h=400&fit=crop',
                            'mapLink' => 'https://maps.google.com/?q=Dubai+UAE',
                            'mapX' => 650,
                            'mapY' => 300
                        ],
                        [
                            'id' => 'johannesburg',
                            'city' => 'Johannesburg',
                            'country' => 'South Africa',
                            'region' => 'africa',
                            'address' => 'Sandton City, 5th Floor, Johannesburg, 2196',
                            'phone' => '+27 (11) 234 5678',
                            'email' => 'johannesburg@supplychainpro.com',
                            'employees' => 60,
                            'timeZone' => 'SAST',
                            'tags' => ['africa', 'regional-hub', 'sales'],
                            'image' => 'https://images.unsplash.com/photo-1576485290814-1c72aa2b8d6f?w=600&h=400&fit=crop',
                            'mapLink' => 'https://maps.google.com/?q=Johannesburg+South+Africa',
                            'mapX' => 560,
                            'mapY' => 410
                        ],
                        [
                            'id' => 'tokyo',
                            'city' => 'Tokyo',
                            'country' => 'Japan',
                            'region' => 'asia-pacific',
                            'address' => 'Marunouchi Trust Tower, 1-8-1 Marunouchi, Chiyoda-ku, Tokyo 100-0005',
                            'phone' => '+81 (3) 4567 8901',
                            'email' => 'tokyo@supplychainpro.com',
                            'employees' => 110,
                            'timeZone' => 'JST',
                            'tags' => ['japan', 'asia', 'support'],
                            'image' => 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&h=400&fit=crop',
                            'mapLink' => 'https://maps.google.com/?q=Tokyo+Japan',
                            'mapX' => 920,
                            'mapY' => 290
                        ],
                        [
                            'id' => 'sydney',
                            'city' => 'Sydney',
                            'country' => 'Australia',
                            'region' => 'asia-pacific',
                            'address' => '1 Martin Place, Level 25, Sydney, NSW 2000',
                            'phone' => '+61 (2) 8123 4567',
                            'email' => 'sydney@supplychainpro.com',
                            'employees' => 85,
                            'timeZone' => 'AEDT',
                            'tags' => ['australia', 'oceania', 'sales'],
                            'image' => 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600&h=400&fit=crop',
                            'mapLink' => 'https://maps.google.com/?q=Sydney+Australia',
                            'mapX' => 1000,
                            'mapY' => 380
                        ]
                    ],
                    'showNewsletter' => true,
                    'newsletter' => [
                        'title' => 'Get Global Updates',
                        'description' => 'Subscribe to receive news about new office openings, regional events, and global initiatives.',
                        'disclaimer' => 'No spam, unsubscribe anytime. Get 1-2 emails per month.',
                        'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 475,
                'section_key' => 'worldwideLocations',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => 'Global Presence',
                    'title' => [
                        'prefix' => 'Our',
                        'highlight' => 'Global Footprint'
                    ],
                    'description' => 'With offices across the globe, we\'re strategically positioned to serve our customers wherever they are. Find a location near you.',
                    'heroImage' => 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&h=500&fit=crop',
                    'autoPlayCarousel' => true,
                    'tabs' => [
                        ['id' => 'map', 'label' => 'Interactive Map', 'icon' => 'map'],
                        ['id' => 'regions', 'label' => 'Regions', 'icon' => 'globe'],
                        ['id' => 'locations', 'label' => 'All Locations', 'icon' => 'location'],
                        ['id' => 'saved', 'label' => 'Saved', 'icon' => 'bookmark']
                    ],
                    'stats' => [
                        ['value' => '25+', 'label' => 'Countries', 'icon' => 'globe'],
                        ['value' => '50+', 'label' => 'Office Locations', 'icon' => 'building'],
                        ['value' => '1000+', 'label' => 'Global Employees', 'icon' => 'users'],
                        ['value' => '24/7', 'label' => 'Global Support', 'icon' => 'clock']
                    ],
                    'regions' => [
                        [
                            'id' => 'north-america',
                            'label' => 'North America',
                            'icon' => 'globe',
                            'stats' => ['offices' => 12, 'employees' => 850, 'countries' => 3],
                            'image' => 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&h=500&fit=crop'
                        ],
                        [
                            'id' => 'europe',
                            'label' => 'Europe',
                            'icon' => 'globe',
                            'stats' => ['offices' => 18, 'employees' => 1200, 'countries' => 12],
                            'image' => 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&h=500&fit=crop'
                        ],
                        [
                            'id' => 'asia-pacific',
                            'label' => 'Asia Pacific',
                            'icon' => 'globe',
                            'stats' => ['offices' => 15, 'employees' => 950, 'countries' => 8],
                            'image' => 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&h=500&fit=crop'
                        ],
                        [
                            'id' => 'latin-america',
                            'label' => 'Latin America',
                            'icon' => 'globe',
                            'stats' => ['offices' => 8, 'employees' => 450, 'countries' => 6],
                            'image' => 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800&h=500&fit=crop'
                        ],
                        [
                            'id' => 'middle-east',
                            'label' => 'Middle East',
                            'icon' => 'globe',
                            'stats' => ['offices' => 5, 'employees' => 280, 'countries' => 4],
                            'image' => 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=500&fit=crop'
                        ],
                        [
                            'id' => 'africa',
                            'label' => 'Africa',
                            'icon' => 'globe',
                            'stats' => ['offices' => 4, 'employees' => 200, 'countries' => 3],
                            'image' => 'https://images.unsplash.com/photo-1576485290814-1c72aa2b8d6f?w=800&h=500&fit=crop'
                        ]
                    ],
                    'locations' => [
                        [
                            'id' => 'new-york',
                            'city' => 'New York',
                            'country' => 'United States',
                            'region' => 'north-america',
                            'address' => '350 Fifth Avenue, Suite 5500, New York, NY 10118',
                            'phone' => '+1 (212) 555-0100',
                            'email' => 'nyc@supplychainpro.com',
                            'employees' => 250,
                            'hours' => 'Monday-Friday, 9:00 AM - 6:00 PM EST',
                            'tags' => ['headquarters', 'sales', 'product'],
                            'image' => 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&h=400&fit=crop',
                            'mapLink' => 'https://maps.google.com/?q=New+York+NY',
                            'mapX' => 320,
                            'mapY' => 260,
                            'isFeatured' => true
                        ],
                        [
                            'id' => 'london',
                            'city' => 'London',
                            'country' => 'United Kingdom',
                            'region' => 'europe',
                            'address' => '10 Lower Thames Street, London, EC3R 6AF',
                            'phone' => '+44 (20) 7946 0100',
                            'email' => 'london@supplychainpro.com',
                            'employees' => 180,
                            'hours' => 'Monday-Friday, 9:00 AM - 6:00 PM GMT',
                            'tags' => ['europe', 'sales', 'support'],
                            'image' => 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=400&fit=crop',
                            'mapLink' => 'https://maps.google.com/?q=London+UK',
                            'mapX' => 520,
                            'mapY' => 290,
                            'isFeatured' => true
                        ],
                        [
                            'id' => 'singapore',
                            'city' => 'Singapore',
                            'country' => 'Singapore',
                            'region' => 'asia-pacific',
                            'address' => '9 Raffles Place, #26-01, Republic Plaza, Singapore 048619',
                            'phone' => '+65 6808 6100',
                            'email' => 'singapore@supplychainpro.com',
                            'employees' => 120,
                            'hours' => 'Monday-Friday, 9:00 AM - 6:00 PM SGT',
                            'tags' => ['asia-pacific', 'regional-hub', 'support'],
                            'image' => 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600&h=400&fit=crop',
                            'mapLink' => 'https://maps.google.com/?q=Singapore',
                            'mapX' => 850,
                            'mapY' => 300,
                            'isFeatured' => true
                        ],
                        [
                            'id' => 'sao-paulo',
                            'city' => 'São Paulo',
                            'country' => 'Brazil',
                            'region' => 'latin-america',
                            'address' => 'Av. Paulista, 1578, 10th Floor, São Paulo, SP 01310-200',
                            'phone' => '+55 (11) 3500-0100',
                            'email' => 'saopaulo@supplychainpro.com',
                            'employees' => 95,
                            'hours' => 'Monday-Friday, 9:00 AM - 6:00 PM BRT',
                            'tags' => ['latin-america', 'regional-hub', 'sales'],
                            'image' => 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=600&h=400&fit=crop',
                            'mapLink' => 'https://maps.google.com/?q=S%C3%A3o+Paulo+Brazil',
                            'mapX' => 360,
                            'mapY' => 430
                        ],
                        [
                            'id' => 'dubai',
                            'city' => 'Dubai',
                            'country' => 'UAE',
                            'region' => 'middle-east',
                            'address' => 'Dubai Internet City, Building 1, Office 502, Dubai',
                            'phone' => '+971 4 567 8901',
                            'email' => 'dubai@supplychainpro.com',
                            'employees' => 75,
                            'hours' => 'Sunday-Thursday, 9:00 AM - 6:00 PM GST',
                            'tags' => ['middle-east', 'regional-hub', 'support'],
                            'image' => 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&h=400&fit=crop',
                            'mapLink' => 'https://maps.google.com/?q=Dubai+UAE',
                            'mapX' => 650,
                            'mapY' => 300
                        ],
                        [
                            'id' => 'johannesburg',
                            'city' => 'Johannesburg',
                            'country' => 'South Africa',
                            'region' => 'africa',
                            'address' => 'Sandton City, 5th Floor, Johannesburg, 2196',
                            'phone' => '+27 (11) 234 5678',
                            'email' => 'johannesburg@supplychainpro.com',
                            'employees' => 60,
                            'hours' => 'Monday-Friday, 8:00 AM - 5:00 PM SAST',
                            'tags' => ['africa', 'regional-hub', 'sales'],
                            'image' => 'https://images.unsplash.com/photo-1576485290814-1c72aa2b8d6f?w=600&h=400&fit=crop',
                            'mapLink' => 'https://maps.google.com/?q=Johannesburg+South+Africa',
                            'mapX' => 560,
                            'mapY' => 410
                        ],
                        [
                            'id' => 'tokyo',
                            'city' => 'Tokyo',
                            'country' => 'Japan',
                            'region' => 'asia-pacific',
                            'address' => 'Marunouchi Trust Tower, 1-8-1 Marunouchi, Chiyoda-ku, Tokyo 100-0005',
                            'phone' => '+81 (3) 4567 8901',
                            'email' => 'tokyo@supplychainpro.com',
                            'employees' => 110,
                            'hours' => 'Monday-Friday, 9:00 AM - 6:00 PM JST',
                            'tags' => ['japan', 'asia', 'support'],
                            'image' => 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&h=400&fit=crop',
                            'mapLink' => 'https://maps.google.com/?q=Tokyo+Japan',
                            'mapX' => 920,
                            'mapY' => 290
                        ],
                        [
                            'id' => 'sydney',
                            'city' => 'Sydney',
                            'country' => 'Australia',
                            'region' => 'asia-pacific',
                            'address' => '1 Martin Place, Level 25, Sydney, NSW 2000',
                            'phone' => '+61 (2) 8123 4567',
                            'email' => 'sydney@supplychainpro.com',
                            'employees' => 85,
                            'hours' => 'Monday-Friday, 9:00 AM - 6:00 PM AEDT',
                            'tags' => ['australia', 'oceania', 'sales'],
                            'image' => 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600&h=400&fit=crop',
                            'mapLink' => 'https://maps.google.com/?q=Sydney+Australia',
                            'mapX' => 1000,
                            'mapY' => 380
                        ]
                    ],
                    'showNewsletter' => true,
                    'newsletter' => [
                        'title' => 'Get Global Updates',
                        'description' => 'Subscribe to receive news about new office openings, regional events, and global initiatives.',
                        'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 476,
                'section_key' => 'worldwideLocations',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],


            // Regional Offices Section
            [
                'id' => 477,
                'section_key' => 'regionalOffices',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => 'Regional Offices',
                    'title' => [
                        'prefix' => 'Our',
                        'highlight' => 'Regional Hubs'
                    ],
                    'description' => 'Connect with our regional teams around the world. Our local experts understand your market and are ready to help you succeed.',
                    'heroImage' => 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&h=500&fit=crop',
                    'searchPlaceholder' => 'Search by city, country, or region...',
                    'regions' => [
                        ['id' => 'all', 'label' => 'All Regions', 'icon' => 'globe'],
                        ['id' => 'north-america', 'label' => 'North America', 'icon' => 'globe'],
                        ['id' => 'europe', 'label' => 'Europe', 'icon' => 'globe'],
                        ['id' => 'asia-pacific', 'label' => 'Asia Pacific', 'icon' => 'globe'],
                        ['id' => 'latin-america', 'label' => 'Latin America', 'icon' => 'globe'],
                        ['id' => 'middle-east', 'label' => 'Middle East', 'icon' => 'globe'],
                        ['id' => 'africa', 'label' => 'Africa', 'icon' => 'globe']
                    ],
                    'stats' => [
                        ['value' => '6', 'label' => 'Regional Hubs', 'icon' => 'globe'],
                        ['value' => '50+', 'label' => 'Office Locations', 'icon' => 'office'],
                        ['value' => '1000+', 'label' => 'Local Experts', 'icon' => 'users'],
                        ['value' => '24/7', 'label' => 'Regional Support', 'icon' => 'clock']
                    ],
                    'offices' => [
                        [
                            'id' => 'new-york',
                            'city' => 'New York',
                            'country' => 'United States',
                            'region' => 'north-america',
                            'address' => '350 Fifth Avenue, Suite 5500, New York, NY 10118',
                            'phone' => '+1 (212) 555-0100',
                            'email' => 'nyc@supplychainpro.com',
                            'hours' => 'Monday-Friday, 9:00 AM - 6:00 PM EST',
                            'details' => 'Our North American headquarters houses our executive leadership, sales team, and product development center serving clients across the US and Canada.',
                            'services' => ['Sales', 'Support', 'Product Development', 'Training'],
                            'tags' => ['headquarters', 'sales', 'product'],
                            'image' => 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&h=400&fit=crop',
                            'mapLink' => 'https://maps.google.com/?q=New+York+NY',
                            'mapX' => 320,
                            'mapY' => 260,
                            'isRegionalHub' => true
                        ],
                        [
                            'id' => 'london',
                            'city' => 'London',
                            'country' => 'United Kingdom',
                            'region' => 'europe',
                            'address' => '10 Lower Thames Street, London, EC3R 6AF',
                            'phone' => '+44 (20) 7946 0100',
                            'email' => 'london@supplychainpro.com',
                            'hours' => 'Monday-Friday, 9:00 AM - 6:00 PM GMT',
                            'details' => 'Our European headquarters serving clients across the UK and Europe with dedicated sales and support teams.',
                            'services' => ['Sales', 'Support', 'Consulting', 'Training'],
                            'tags' => ['europe', 'sales', 'support'],
                            'image' => 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=400&fit=crop',
                            'mapLink' => 'https://maps.google.com/?q=London+UK',
                            'mapX' => 520,
                            'mapY' => 290,
                            'isRegionalHub' => true
                        ],
                        [
                            'id' => 'singapore',
                            'city' => 'Singapore',
                            'country' => 'Singapore',
                            'region' => 'asia-pacific',
                            'address' => '9 Raffles Place, #26-01, Republic Plaza, Singapore 048619',
                            'phone' => '+65 6808 6100',
                            'email' => 'singapore@supplychainpro.com',
                            'hours' => 'Monday-Friday, 9:00 AM - 6:00 PM SGT',
                            'details' => 'Our Asia-Pacific hub supporting clients across Southeast Asia, Australia, and New Zealand with localized expertise.',
                            'services' => ['Sales', 'Support', 'Solutions', 'Training'],
                            'tags' => ['asia-pacific', 'regional-hub', 'support'],
                            'image' => 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600&h=400&fit=crop',
                            'mapLink' => 'https://maps.google.com/?q=Singapore',
                            'mapX' => 850,
                            'mapY' => 300,
                            'isRegionalHub' => true
                        ],
                        [
                            'id' => 'sao-paulo',
                            'city' => 'São Paulo',
                            'country' => 'Brazil',
                            'region' => 'latin-america',
                            'address' => 'Av. Paulista, 1578, 10th Floor, São Paulo, SP 01310-200',
                            'phone' => '+55 (11) 3500-0100',
                            'email' => 'saopaulo@supplychainpro.com',
                            'hours' => 'Monday-Friday, 9:00 AM - 6:00 PM BRT',
                            'details' => 'Our Latin American headquarters serving clients across Brazil and South America with Portuguese and Spanish support.',
                            'services' => ['Sales', 'Support', 'Consulting'],
                            'tags' => ['latin-america', 'regional-hub', 'sales'],
                            'image' => 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=600&h=400&fit=crop',
                            'mapLink' => 'https://maps.google.com/?q=S%C3%A3o+Paulo+Brazil',
                            'mapX' => 360,
                            'mapY' => 430,
                            'isRegionalHub' => true
                        ],
                        [
                            'id' => 'dubai',
                            'city' => 'Dubai',
                            'country' => 'UAE',
                            'region' => 'middle-east',
                            'address' => 'Dubai Internet City, Building 1, Office 502, Dubai',
                            'phone' => '+971 4 567 8901',
                            'email' => 'dubai@supplychainpro.com',
                            'hours' => 'Sunday-Thursday, 9:00 AM - 6:00 PM GST',
                            'details' => 'Our Middle East hub serving clients across the Gulf region and Africa with dedicated support teams.',
                            'services' => ['Sales', 'Support', 'Implementation'],
                            'tags' => ['middle-east', 'regional-hub', 'support'],
                            'image' => 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&h=400&fit=crop',
                            'mapLink' => 'https://maps.google.com/?q=Dubai+UAE',
                            'mapX' => 650,
                            'mapY' => 300,
                            'isRegionalHub' => true
                        ],
                        [
                            'id' => 'johannesburg',
                            'city' => 'Johannesburg',
                            'country' => 'South Africa',
                            'region' => 'africa',
                            'address' => 'Sandton City, 5th Floor, Johannesburg, 2196',
                            'phone' => '+27 (11) 234 5678',
                            'email' => 'johannesburg@supplychainpro.com',
                            'hours' => 'Monday-Friday, 8:00 AM - 5:00 PM SAST',
                            'details' => 'Our African headquarters supporting clients across the continent with localized expertise and support.',
                            'services' => ['Sales', 'Support', 'Consulting'],
                            'tags' => ['africa', 'regional-hub', 'sales'],
                            'image' => 'https://images.unsplash.com/photo-1576485290814-1c72aa2b8d6f?w=600&h=400&fit=crop',
                            'mapLink' => 'https://maps.google.com/?q=Johannesburg+South+Africa',
                            'mapX' => 560,
                            'mapY' => 410,
                            'isRegionalHub' => true
                        ],
                        [
                            'id' => 'toronto',
                            'city' => 'Toronto',
                            'country' => 'Canada',
                            'region' => 'north-america',
                            'address' => 'Bay Street, Suite 200, Toronto, ON M5H 2Y2',
                            'phone' => '+1 (416) 555-0200',
                            'email' => 'toronto@supplychainpro.com',
                            'hours' => 'Monday-Friday, 9:00 AM - 6:00 PM EST',
                            'details' => 'Our Canadian office serving clients across Canada with dedicated support in English and French.',
                            'services' => ['Sales', 'Support', 'Training'],
                            'tags' => ['canada', 'sales', 'support'],
                            'image' => 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=600&h=400&fit=crop',
                            'mapLink' => 'https://maps.google.com/?q=Toronto+ON',
                            'mapX' => 290,
                            'mapY' => 270
                        ],
                        [
                            'id' => 'frankfurt',
                            'city' => 'Frankfurt',
                            'country' => 'Germany',
                            'region' => 'europe',
                            'address' => 'Neue Mainzer Straße 66-68, 60311 Frankfurt am Main',
                            'phone' => '+49 69 1234 5678',
                            'email' => 'frankfurt@supplychainpro.com',
                            'hours' => 'Monday-Friday, 9:00 AM - 6:00 PM CET',
                            'details' => 'Our German office serving clients across the DACH region with German-speaking support teams.',
                            'services' => ['Sales', 'Support', 'Implementation'],
                            'tags' => ['germany', 'dach', 'support'],
                            'image' => 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&h=400&fit=crop',
                            'mapLink' => 'https://maps.google.com/?q=Frankfurt+Germany',
                            'mapX' => 540,
                            'mapY' => 285
                        ],
                        [
                            'id' => 'mumbai',
                            'city' => 'Mumbai',
                            'country' => 'India',
                            'region' => 'asia-pacific',
                            'address' => 'Bandra Kurla Complex, Mumbai, Maharashtra 400051',
                            'phone' => '+91 22 1234 5678',
                            'email' => 'mumbai@supplychainpro.com',
                            'hours' => 'Monday-Friday, 9:00 AM - 6:00 PM IST',
                            'details' => 'Our India office serving clients across the subcontinent with dedicated support teams.',
                            'services' => ['Sales', 'Support', 'Development'],
                            'tags' => ['india', 'asia', 'development'],
                            'image' => 'https://images.unsplash.com/photo-1529253355930-dbe14d8d46ec?w=600&h=400&fit=crop',
                            'mapLink' => 'https://maps.google.com/?q=Mumbai+India',
                            'mapX' => 780,
                            'mapY' => 340
                        ]
                    ],
                    'supportTitle' => 'Need Regional Support?',
                    'supportDescription' => 'Connect with your local regional office for personalized support and service in your language and time zone.',
                    'supportLink' => '/contact',
                    'supportImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop',
                    'showNewsletter' => true,
                    'newsletter' => [
                        'title' => 'Regional Updates',
                        'description' => 'Subscribe to receive news about regional events, office openings, and local initiatives.',
                        'disclaimer' => 'No spam, unsubscribe anytime. Get 1-2 emails per month.',
                        'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 478,
                'section_key' => 'regionalOffices',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => 'Regional Offices',
                    'title' => [
                        'prefix' => 'Our',
                        'highlight' => 'Regional Hubs'
                    ],
                    'description' => 'Connect with our regional teams around the world. Our local experts understand your market and are ready to help you succeed.',
                    'heroImage' => 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&h=500&fit=crop',
                    'searchPlaceholder' => 'Search by city, country, or address...',
                    'defaultViewMode' => 'grid',
                    'regions' => [
                        ['id' => 'all', 'label' => 'All Regions', 'icon' => 'globe'],
                        ['id' => 'north-america', 'label' => 'North America', 'icon' => 'globe'],
                        ['id' => 'europe', 'label' => 'Europe', 'icon' => 'globe'],
                        ['id' => 'asia-pacific', 'label' => 'Asia Pacific', 'icon' => 'globe'],
                        ['id' => 'latin-america', 'label' => 'Latin America', 'icon' => 'globe'],
                        ['id' => 'middle-east', 'label' => 'Middle East', 'icon' => 'globe'],
                        ['id' => 'africa', 'label' => 'Africa', 'icon' => 'globe']
                    ],
                    'stats' => [
                        ['value' => '6', 'label' => 'Regional Hubs', 'icon' => 'globe', 'trend' => '+1', 'trendUp' => true],
                        ['value' => '50+', 'label' => 'Office Locations', 'icon' => 'office', 'trend' => '+8', 'trendUp' => true],
                        ['value' => '1000+', 'label' => 'Local Experts', 'icon' => 'users', 'trend' => '+150', 'trendUp' => true],
                        ['value' => '24/7', 'label' => 'Regional Support', 'icon' => 'clock', 'trend' => 'Always', 'trendUp' => true]
                    ],
                    'offices' => [
                        [
                            'id' => 'new-york',
                            'city' => 'New York',
                            'country' => 'United States',
                            'region' => 'north-america',
                            'address' => '350 Fifth Avenue, Suite 5500, New York, NY 10118',
                            'phone' => '+1 (212) 555-0100',
                            'email' => 'nyc@supplychainpro.com',
                            'employees' => 250,
                            'hours' => 'Monday-Friday, 9:00 AM - 6:00 PM EST',
                            'services' => ['Sales', 'Support', 'Product Development', 'Training'],
                            'tags' => ['headquarters', 'sales', 'product'],
                            'image' => 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&h=400&fit=crop',
                            'mapLink' => 'https://maps.google.com/?q=New+York+NY',
                            'isRegionalHub' => true
                        ],
                        [
                            'id' => 'london',
                            'city' => 'London',
                            'country' => 'United Kingdom',
                            'region' => 'europe',
                            'address' => '10 Lower Thames Street, London, EC3R 6AF',
                            'phone' => '+44 (20) 7946 0100',
                            'email' => 'london@supplychainpro.com',
                            'employees' => 180,
                            'hours' => 'Monday-Friday, 9:00 AM - 6:00 PM GMT',
                            'services' => ['Sales', 'Support', 'Consulting', 'Training'],
                            'tags' => ['europe', 'sales', 'support'],
                            'image' => 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=400&fit=crop',
                            'mapLink' => 'https://maps.google.com/?q=London+UK',
                            'isRegionalHub' => true
                        ],
                        [
                            'id' => 'singapore',
                            'city' => 'Singapore',
                            'country' => 'Singapore',
                            'region' => 'asia-pacific',
                            'address' => '9 Raffles Place, #26-01, Republic Plaza, Singapore 048619',
                            'phone' => '+65 6808 6100',
                            'email' => 'singapore@supplychainpro.com',
                            'employees' => 120,
                            'hours' => 'Monday-Friday, 9:00 AM - 6:00 PM SGT',
                            'services' => ['Sales', 'Support', 'Solutions', 'Training'],
                            'tags' => ['asia-pacific', 'regional-hub', 'support'],
                            'image' => 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600&h=400&fit=crop',
                            'mapLink' => 'https://maps.google.com/?q=Singapore',
                            'isRegionalHub' => true
                        ],
                        [
                            'id' => 'sao-paulo',
                            'city' => 'São Paulo',
                            'country' => 'Brazil',
                            'region' => 'latin-america',
                            'address' => 'Av. Paulista, 1578, 10th Floor, São Paulo, SP 01310-200',
                            'phone' => '+55 (11) 3500-0100',
                            'email' => 'saopaulo@supplychainpro.com',
                            'employees' => 95,
                            'hours' => 'Monday-Friday, 9:00 AM - 6:00 PM BRT',
                            'services' => ['Sales', 'Support', 'Consulting'],
                            'tags' => ['latin-america', 'regional-hub', 'sales'],
                            'image' => 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=600&h=400&fit=crop',
                            'mapLink' => 'https://maps.google.com/?q=S%C3%A3o+Paulo+Brazil',
                            'isRegionalHub' => true
                        ],
                        [
                            'id' => 'dubai',
                            'city' => 'Dubai',
                            'country' => 'UAE',
                            'region' => 'middle-east',
                            'address' => 'Dubai Internet City, Building 1, Office 502, Dubai',
                            'phone' => '+971 4 567 8901',
                            'email' => 'dubai@supplychainpro.com',
                            'employees' => 75,
                            'hours' => 'Sunday-Thursday, 9:00 AM - 6:00 PM GST',
                            'services' => ['Sales', 'Support', 'Implementation'],
                            'tags' => ['middle-east', 'regional-hub', 'support'],
                            'image' => 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&h=400&fit=crop',
                            'mapLink' => 'https://maps.google.com/?q=Dubai+UAE'
                        ],
                        [
                            'id' => 'johannesburg',
                            'city' => 'Johannesburg',
                            'country' => 'South Africa',
                            'region' => 'africa',
                            'address' => 'Sandton City, 5th Floor, Johannesburg, 2196',
                            'phone' => '+27 (11) 234 5678',
                            'email' => 'johannesburg@supplychainpro.com',
                            'employees' => 60,
                            'hours' => 'Monday-Friday, 8:00 AM - 5:00 PM SAST',
                            'services' => ['Sales', 'Support', 'Consulting'],
                            'tags' => ['africa', 'regional-hub', 'sales'],
                            'image' => 'https://images.unsplash.com/photo-1576485290814-1c72aa2b8d6f?w=600&h=400&fit=crop',
                            'mapLink' => 'https://maps.google.com/?q=Johannesburg+South+Africa'
                        ],
                        [
                            'id' => 'toronto',
                            'city' => 'Toronto',
                            'country' => 'Canada',
                            'region' => 'north-america',
                            'address' => 'Bay Street, Suite 200, Toronto, ON M5H 2Y2',
                            'phone' => '+1 (416) 555-0200',
                            'email' => 'toronto@supplychainpro.com',
                            'employees' => 85,
                            'hours' => 'Monday-Friday, 9:00 AM - 6:00 PM EST',
                            'services' => ['Sales', 'Support', 'Training'],
                            'tags' => ['canada', 'sales', 'support'],
                            'image' => 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=600&h=400&fit=crop',
                            'mapLink' => 'https://maps.google.com/?q=Toronto+ON'
                        ],
                        [
                            'id' => 'frankfurt',
                            'city' => 'Frankfurt',
                            'country' => 'Germany',
                            'region' => 'europe',
                            'address' => 'Neue Mainzer Straße 66-68, 60311 Frankfurt am Main',
                            'phone' => '+49 69 1234 5678',
                            'email' => 'frankfurt@supplychainpro.com',
                            'employees' => 70,
                            'hours' => 'Monday-Friday, 9:00 AM - 6:00 PM CET',
                            'services' => ['Sales', 'Support', 'Implementation'],
                            'tags' => ['germany', 'dach', 'support'],
                            'image' => 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&h=400&fit=crop',
                            'mapLink' => 'https://maps.google.com/?q=Frankfurt+Germany'
                        ],
                        [
                            'id' => 'mumbai',
                            'city' => 'Mumbai',
                            'country' => 'India',
                            'region' => 'asia-pacific',
                            'address' => 'Bandra Kurla Complex, Mumbai, Maharashtra 400051',
                            'phone' => '+91 22 1234 5678',
                            'email' => 'mumbai@supplychainpro.com',
                            'employees' => 110,
                            'hours' => 'Monday-Friday, 9:00 AM - 6:00 PM IST',
                            'services' => ['Sales', 'Support', 'Development'],
                            'tags' => ['india', 'asia', 'development'],
                            'image' => 'https://images.unsplash.com/photo-1529253355930-dbe14d8d46ec?w=600&h=400&fit=crop',
                            'mapLink' => 'https://maps.google.com/?q=Mumbai+India'
                        ]
                    ],
                    'showNewsletter' => true,
                    'newsletter' => [
                        'title' => 'Regional Updates',
                        'description' => 'Subscribe to receive news about regional events, office openings, and local initiatives.',
                        'disclaimer' => 'No spam, unsubscribe anytime. Get 1-2 emails per month.',
                        'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 479,
                'section_key' => 'regionalOffices',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => 'Regional Offices',
                    'title' => [
                        'prefix' => 'Our',
                        'highlight' => 'Regional Hubs'
                    ],
                    'description' => 'Connect with our regional teams around the world. Our local experts understand your market and are ready to help you succeed.',
                    'heroImage' => 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&h=500&fit=crop',
                    'autoPlayCarousel' => true,
                    'tabs' => [
                        ['id' => 'map', 'label' => 'Interactive Map', 'icon' => 'map'],
                        ['id' => 'regions', 'label' => 'Regions', 'icon' => 'globe'],
                        ['id' => 'offices', 'label' => 'All Offices', 'icon' => 'office'],
                        ['id' => 'saved', 'label' => 'Saved', 'icon' => 'bookmark']
                    ],
                    'stats' => [
                        ['value' => '6', 'label' => 'Regional Hubs', 'icon' => 'globe'],
                        ['value' => '50+', 'label' => 'Office Locations', 'icon' => 'office'],
                        ['value' => '1000+', 'label' => 'Local Experts', 'icon' => 'users'],
                        ['value' => '24/7', 'label' => 'Regional Support', 'icon' => 'clock']
                    ],
                    'regions' => [
                        [
                            'id' => 'north-america',
                            'label' => 'North America',
                            'icon' => 'globe',
                            'stats' => ['offices' => 8, 'employees' => 650, 'countries' => 3],
                            'image' => 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&h=500&fit=crop'
                        ],
                        [
                            'id' => 'europe',
                            'label' => 'Europe',
                            'icon' => 'globe',
                            'stats' => ['offices' => 12, 'employees' => 850, 'countries' => 8],
                            'image' => 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&h=500&fit=crop'
                        ],
                        [
                            'id' => 'asia-pacific',
                            'label' => 'Asia Pacific',
                            'icon' => 'globe',
                            'stats' => ['offices' => 10, 'employees' => 620, 'countries' => 6],
                            'image' => 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&h=500&fit=crop'
                        ],
                        [
                            'id' => 'latin-america',
                            'label' => 'Latin America',
                            'icon' => 'globe',
                            'stats' => ['offices' => 5, 'employees' => 280, 'countries' => 4],
                            'image' => 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800&h=500&fit=crop'
                        ],
                        [
                            'id' => 'middle-east',
                            'label' => 'Middle East',
                            'icon' => 'globe',
                            'stats' => ['offices' => 4, 'employees' => 220, 'countries' => 3],
                            'image' => 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=500&fit=crop'
                        ],
                        [
                            'id' => 'africa',
                            'label' => 'Africa',
                            'icon' => 'globe',
                            'stats' => ['offices' => 3, 'employees' => 150, 'countries' => 2],
                            'image' => 'https://images.unsplash.com/photo-1576485290814-1c72aa2b8d6f?w=800&h=500&fit=crop'
                        ]
                    ],
                    'offices' => [
                        [
                            'id' => 'new-york',
                            'city' => 'New York',
                            'country' => 'United States',
                            'region' => 'north-america',
                            'address' => '350 Fifth Avenue, Suite 5500, New York, NY 10118',
                            'phone' => '+1 (212) 555-0100',
                            'email' => 'nyc@supplychainpro.com',
                            'employees' => 250,
                            'hours' => 'Monday-Friday, 9:00 AM - 6:00 PM EST',
                            'services' => ['Sales', 'Support', 'Product Development', 'Training'],
                            'tags' => ['headquarters', 'sales', 'product'],
                            'image' => 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&h=400&fit=crop',
                            'mapLink' => 'https://maps.google.com/?q=New+York+NY',
                            'mapX' => 320,
                            'mapY' => 260,
                            'isRegionalHub' => true
                        ],
                        [
                            'id' => 'london',
                            'city' => 'London',
                            'country' => 'United Kingdom',
                            'region' => 'europe',
                            'address' => '10 Lower Thames Street, London, EC3R 6AF',
                            'phone' => '+44 (20) 7946 0100',
                            'email' => 'london@supplychainpro.com',
                            'employees' => 180,
                            'hours' => 'Monday-Friday, 9:00 AM - 6:00 PM GMT',
                            'services' => ['Sales', 'Support', 'Consulting', 'Training'],
                            'tags' => ['europe', 'sales', 'support'],
                            'image' => 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=400&fit=crop',
                            'mapLink' => 'https://maps.google.com/?q=London+UK',
                            'mapX' => 520,
                            'mapY' => 290,
                            'isRegionalHub' => true
                        ],
                        [
                            'id' => 'singapore',
                            'city' => 'Singapore',
                            'country' => 'Singapore',
                            'region' => 'asia-pacific',
                            'address' => '9 Raffles Place, #26-01, Republic Plaza, Singapore 048619',
                            'phone' => '+65 6808 6100',
                            'email' => 'singapore@supplychainpro.com',
                            'employees' => 120,
                            'hours' => 'Monday-Friday, 9:00 AM - 6:00 PM SGT',
                            'services' => ['Sales', 'Support', 'Solutions', 'Training'],
                            'tags' => ['asia-pacific', 'regional-hub', 'support'],
                            'image' => 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600&h=400&fit=crop',
                            'mapLink' => 'https://maps.google.com/?q=Singapore',
                            'mapX' => 850,
                            'mapY' => 300,
                            'isRegionalHub' => true
                        ],
                        [
                            'id' => 'sao-paulo',
                            'city' => 'São Paulo',
                            'country' => 'Brazil',
                            'region' => 'latin-america',
                            'address' => 'Av. Paulista, 1578, 10th Floor, São Paulo, SP 01310-200',
                            'phone' => '+55 (11) 3500-0100',
                            'email' => 'saopaulo@supplychainpro.com',
                            'employees' => 95,
                            'hours' => 'Monday-Friday, 9:00 AM - 6:00 PM BRT',
                            'services' => ['Sales', 'Support', 'Consulting'],
                            'tags' => ['latin-america', 'regional-hub', 'sales'],
                            'image' => 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=600&h=400&fit=crop',
                            'mapLink' => 'https://maps.google.com/?q=S%C3%A3o+Paulo+Brazil',
                            'mapX' => 360,
                            'mapY' => 430,
                            'isRegionalHub' => true
                        ],
                        [
                            'id' => 'dubai',
                            'city' => 'Dubai',
                            'country' => 'UAE',
                            'region' => 'middle-east',
                            'address' => 'Dubai Internet City, Building 1, Office 502, Dubai',
                            'phone' => '+971 4 567 8901',
                            'email' => 'dubai@supplychainpro.com',
                            'employees' => 75,
                            'hours' => 'Sunday-Thursday, 9:00 AM - 6:00 PM GST',
                            'services' => ['Sales', 'Support', 'Implementation'],
                            'tags' => ['middle-east', 'regional-hub', 'support'],
                            'image' => 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&h=400&fit=crop',
                            'mapLink' => 'https://maps.google.com/?q=Dubai+UAE',
                            'mapX' => 650,
                            'mapY' => 300,
                            'isRegionalHub' => true
                        ],
                        [
                            'id' => 'johannesburg',
                            'city' => 'Johannesburg',
                            'country' => 'South Africa',
                            'region' => 'africa',
                            'address' => 'Sandton City, 5th Floor, Johannesburg, 2196',
                            'phone' => '+27 (11) 234 5678',
                            'email' => 'johannesburg@supplychainpro.com',
                            'employees' => 60,
                            'hours' => 'Monday-Friday, 8:00 AM - 5:00 PM SAST',
                            'services' => ['Sales', 'Support', 'Consulting'],
                            'tags' => ['africa', 'regional-hub', 'sales'],
                            'image' => 'https://images.unsplash.com/photo-1576485290814-1c72aa2b8d6f?w=600&h=400&fit=crop',
                            'mapLink' => 'https://maps.google.com/?q=Johannesburg+South+Africa',
                            'mapX' => 560,
                            'mapY' => 410,
                            'isRegionalHub' => true
                        ],
                        [
                            'id' => 'toronto',
                            'city' => 'Toronto',
                            'country' => 'Canada',
                            'region' => 'north-america',
                            'address' => 'Bay Street, Suite 200, Toronto, ON M5H 2Y2',
                            'phone' => '+1 (416) 555-0200',
                            'email' => 'toronto@supplychainpro.com',
                            'employees' => 85,
                            'hours' => 'Monday-Friday, 9:00 AM - 6:00 PM EST',
                            'services' => ['Sales', 'Support', 'Training'],
                            'tags' => ['canada', 'sales', 'support'],
                            'image' => 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=600&h=400&fit=crop',
                            'mapLink' => 'https://maps.google.com/?q=Toronto+ON',
                            'mapX' => 290,
                            'mapY' => 270
                        ],
                        [
                            'id' => 'frankfurt',
                            'city' => 'Frankfurt',
                            'country' => 'Germany',
                            'region' => 'europe',
                            'address' => 'Neue Mainzer Straße 66-68, 60311 Frankfurt am Main',
                            'phone' => '+49 69 1234 5678',
                            'email' => 'frankfurt@supplychainpro.com',
                            'employees' => 70,
                            'hours' => 'Monday-Friday, 9:00 AM - 6:00 PM CET',
                            'services' => ['Sales', 'Support', 'Implementation'],
                            'tags' => ['germany', 'dach', 'support'],
                            'image' => 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&h=400&fit=crop',
                            'mapLink' => 'https://maps.google.com/?q=Frankfurt+Germany',
                            'mapX' => 540,
                            'mapY' => 285
                        ],
                        [
                            'id' => 'mumbai',
                            'city' => 'Mumbai',
                            'country' => 'India',
                            'region' => 'asia-pacific',
                            'address' => 'Bandra Kurla Complex, Mumbai, Maharashtra 400051',
                            'phone' => '+91 22 1234 5678',
                            'email' => 'mumbai@supplychainpro.com',
                            'employees' => 110,
                            'hours' => 'Monday-Friday, 9:00 AM - 6:00 PM IST',
                            'services' => ['Sales', 'Support', 'Development'],
                            'tags' => ['india', 'asia', 'development'],
                            'image' => 'https://images.unsplash.com/photo-1529253355930-dbe14d8d46ec?w=600&h=400&fit=crop',
                            'mapLink' => 'https://maps.google.com/?q=Mumbai+India',
                            'mapX' => 780,
                            'mapY' => 340
                        ]
                    ],
                    'showNewsletter' => true,
                    'newsletter' => [
                        'title' => 'Regional Updates',
                        'description' => 'Subscribe to receive news about regional events, office openings, and local initiatives.',
                        'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 480,
                'section_key' => 'regionalOffices',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],


            // Global Coverage Map Section
            [
                'id' => 481,
                'section_key' => 'globalCoverageMap',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => 'Global Coverage',
                    'title' => [
                        'prefix' => 'Our',
                        'highlight' => 'Global Footprint'
                    ],
                    'description' => 'With a presence across 45+ countries and 6 continents, we deliver supply chain solutions wherever you need them.',
                    'heroImage' => 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&h=500&fit=crop',
                    'stats' => [
                        ['value' => '45+', 'label' => 'Countries Served', 'icon' => 'globe'],
                        ['value' => '6', 'label' => 'Continents', 'icon' => 'globe'],
                        ['value' => '50+', 'label' => 'Office Locations', 'icon' => 'office'],
                        ['value' => '1000+', 'label' => 'Global Team Members', 'icon' => 'users']
                    ],
                    'regions' => [
                        ['id' => 'all', 'label' => 'Global', 'icon' => 'globe'],
                        ['id' => 'north-america', 'label' => 'North America', 'icon' => 'globe'],
                        ['id' => 'europe', 'label' => 'Europe', 'icon' => 'globe'],
                        ['id' => 'asia-pacific', 'label' => 'Asia Pacific', 'icon' => 'globe'],
                        ['id' => 'latin-america', 'label' => 'Latin America', 'icon' => 'globe'],
                        ['id' => 'middle-east', 'label' => 'Middle East', 'icon' => 'globe'],
                        ['id' => 'africa', 'label' => 'Africa', 'icon' => 'globe']
                    ],
                    'countryCoverage' => [
                        ['name' => 'United States', 'code' => 'US', 'region' => 'north-america', 'offices' => 8, 'employees' => 650, 'customers' => 1200],
                        ['name' => 'Canada', 'code' => 'CA', 'region' => 'north-america', 'offices' => 3, 'employees' => 180, 'customers' => 450],
                        ['name' => 'Mexico', 'code' => 'MX', 'region' => 'north-america', 'offices' => 2, 'employees' => 120, 'customers' => 280],
                        ['name' => 'United Kingdom', 'code' => 'GB', 'region' => 'europe', 'offices' => 4, 'employees' => 250, 'customers' => 580],
                        ['name' => 'Germany', 'code' => 'DE', 'region' => 'europe', 'offices' => 3, 'employees' => 200, 'customers' => 520],
                        ['name' => 'France', 'code' => 'FR', 'region' => 'europe', 'offices' => 2, 'employees' => 140, 'customers' => 380],
                        ['name' => 'Italy', 'code' => 'IT', 'region' => 'europe', 'offices' => 2, 'employees' => 110, 'customers' => 290],
                        ['name' => 'Spain', 'code' => 'ES', 'region' => 'europe', 'offices' => 2, 'employees' => 95, 'customers' => 260],
                        ['name' => 'Netherlands', 'code' => 'NL', 'region' => 'europe', 'offices' => 1, 'employees' => 65, 'customers' => 180],
                        ['name' => 'China', 'code' => 'CN', 'region' => 'asia-pacific', 'offices' => 4, 'employees' => 320, 'customers' => 680],
                        ['name' => 'Japan', 'code' => 'JP', 'region' => 'asia-pacific', 'offices' => 3, 'employees' => 210, 'customers' => 520],
                        ['name' => 'Singapore', 'code' => 'SG', 'region' => 'asia-pacific', 'offices' => 2, 'employees' => 150, 'customers' => 380],
                        ['name' => 'Australia', 'code' => 'AU', 'region' => 'asia-pacific', 'offices' => 3, 'employees' => 180, 'customers' => 420],
                        ['name' => 'India', 'code' => 'IN', 'region' => 'asia-pacific', 'offices' => 3, 'employees' => 280, 'customers' => 620],
                        ['name' => 'South Korea', 'code' => 'KR', 'region' => 'asia-pacific', 'offices' => 2, 'employees' => 140, 'customers' => 350],
                        ['name' => 'Brazil', 'code' => 'BR', 'region' => 'latin-america', 'offices' => 3, 'employees' => 220, 'customers' => 480],
                        ['name' => 'Argentina', 'code' => 'AR', 'region' => 'latin-america', 'offices' => 1, 'employees' => 65, 'customers' => 150],
                        ['name' => 'Chile', 'code' => 'CL', 'region' => 'latin-america', 'offices' => 1, 'employees' => 55, 'customers' => 130],
                        ['name' => 'UAE', 'code' => 'AE', 'region' => 'middle-east', 'offices' => 2, 'employees' => 120, 'customers' => 280],
                        ['name' => 'Saudi Arabia', 'code' => 'SA', 'region' => 'middle-east', 'offices' => 1, 'employees' => 70, 'customers' => 160],
                        ['name' => 'South Africa', 'code' => 'ZA', 'region' => 'africa', 'offices' => 2, 'employees' => 110, 'customers' => 250],
                        ['name' => 'Nigeria', 'code' => 'NG', 'region' => 'africa', 'offices' => 1, 'employees' => 55, 'customers' => 130]
                    ],
                    'supportTitle' => 'Global Support, Local Expertise',
                    'supportDescription' => 'No matter where you are, our local teams are ready to provide personalized support in your language and time zone.',
                    'supportLink' => '/contact',
                    'supportImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop',
                    'showNewsletter' => true,
                    'newsletter' => [
                        'title' => 'Global Updates',
                        'description' => 'Subscribe to receive updates about our global expansion, new office openings, and international events.',
                        'disclaimer' => 'No spam, unsubscribe anytime. Get 1-2 emails per month.',
                        'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 482,
                'section_key' => 'globalCoverageMap',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => 'Global Coverage',
                    'title' => [
                        'prefix' => 'Our',
                        'highlight' => 'Global Footprint'
                    ],
                    'description' => 'With a presence across 45+ countries and 6 continents, we deliver supply chain solutions wherever you need them.',
                    'heroImage' => 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&h=500&fit=crop',
                    'defaultViewMode' => 'map',
                    'regions' => [
                        ['id' => 'all', 'label' => 'All Regions', 'icon' => 'globe'],
                        ['id' => 'north-america', 'label' => 'North America', 'icon' => 'globe'],
                        ['id' => 'europe', 'label' => 'Europe', 'icon' => 'globe'],
                        ['id' => 'asia-pacific', 'label' => 'Asia Pacific', 'icon' => 'globe'],
                        ['id' => 'latin-america', 'label' => 'Latin America', 'icon' => 'globe'],
                        ['id' => 'middle-east', 'label' => 'Middle East', 'icon' => 'globe'],
                        ['id' => 'africa', 'label' => 'Africa', 'icon' => 'globe']
                    ],
                    'countryCoverage' => [
                        ['name' => 'United States', 'code' => 'US', 'region' => 'north-america', 'offices' => 8, 'employees' => 650, 'customers' => 1200, 'growth' => '+15%', 'mapX' => 320, 'mapY' => 260],
                        ['name' => 'Canada', 'code' => 'CA', 'region' => 'north-america', 'offices' => 3, 'employees' => 180, 'customers' => 450, 'growth' => '+12%', 'mapX' => 290, 'mapY' => 240],
                        ['name' => 'Mexico', 'code' => 'MX', 'region' => 'north-america', 'offices' => 2, 'employees' => 120, 'customers' => 280, 'growth' => '+20%', 'mapX' => 340, 'mapY' => 310],
                        ['name' => 'United Kingdom', 'code' => 'GB', 'region' => 'europe', 'offices' => 4, 'employees' => 250, 'customers' => 580, 'growth' => '+10%', 'mapX' => 520, 'mapY' => 290],
                        ['name' => 'Germany', 'code' => 'DE', 'region' => 'europe', 'offices' => 3, 'employees' => 200, 'customers' => 520, 'growth' => '+8%', 'mapX' => 540, 'mapY' => 285],
                        ['name' => 'France', 'code' => 'FR', 'region' => 'europe', 'offices' => 2, 'employees' => 140, 'customers' => 380, 'growth' => '+14%', 'mapX' => 530, 'mapY' => 300],
                        ['name' => 'Italy', 'code' => 'IT', 'region' => 'europe', 'offices' => 2, 'employees' => 110, 'customers' => 290, 'growth' => '+11%', 'mapX' => 560, 'mapY' => 310],
                        ['name' => 'Spain', 'code' => 'ES', 'region' => 'europe', 'offices' => 2, 'employees' => 95, 'customers' => 260, 'growth' => '+16%', 'mapX' => 510, 'mapY' => 320],
                        ['name' => 'Netherlands', 'code' => 'NL', 'region' => 'europe', 'offices' => 1, 'employees' => 65, 'customers' => 180, 'growth' => '+22%', 'mapX' => 525, 'mapY' => 275],
                        ['name' => 'China', 'code' => 'CN', 'region' => 'asia-pacific', 'offices' => 4, 'employees' => 320, 'customers' => 680, 'growth' => '+25%', 'mapX' => 800, 'mapY' => 290],
                        ['name' => 'Japan', 'code' => 'JP', 'region' => 'asia-pacific', 'offices' => 3, 'employees' => 210, 'customers' => 520, 'growth' => '+9%', 'mapX' => 880, 'mapY' => 290],
                        ['name' => 'Singapore', 'code' => 'SG', 'region' => 'asia-pacific', 'offices' => 2, 'employees' => 150, 'customers' => 380, 'growth' => '+18%', 'mapX' => 850, 'mapY' => 340],
                        ['name' => 'Australia', 'code' => 'AU', 'region' => 'asia-pacific', 'offices' => 3, 'employees' => 180, 'customers' => 420, 'growth' => '+13%', 'mapX' => 980, 'mapY' => 420],
                        ['name' => 'India', 'code' => 'IN', 'region' => 'asia-pacific', 'offices' => 3, 'employees' => 280, 'customers' => 620, 'growth' => '+32%', 'mapX' => 760, 'mapY' => 340],
                        ['name' => 'South Korea', 'code' => 'KR', 'region' => 'asia-pacific', 'offices' => 2, 'employees' => 140, 'customers' => 350, 'growth' => '+17%', 'mapX' => 860, 'mapY' => 280],
                        ['name' => 'Brazil', 'code' => 'BR', 'region' => 'latin-america', 'offices' => 3, 'employees' => 220, 'customers' => 480, 'growth' => '+21%', 'mapX' => 370, 'mapY' => 430],
                        ['name' => 'Argentina', 'code' => 'AR', 'region' => 'latin-america', 'offices' => 1, 'employees' => 65, 'customers' => 150, 'growth' => '+15%', 'mapX' => 340, 'mapY' => 460],
                        ['name' => 'Chile', 'code' => 'CL', 'region' => 'latin-america', 'offices' => 1, 'employees' => 55, 'customers' => 130, 'growth' => '+12%', 'mapX' => 330, 'mapY' => 470],
                        ['name' => 'UAE', 'code' => 'AE', 'region' => 'middle-east', 'offices' => 2, 'employees' => 120, 'customers' => 280, 'growth' => '+28%', 'mapX' => 650, 'mapY' => 300],
                        ['name' => 'Saudi Arabia', 'code' => 'SA', 'region' => 'middle-east', 'offices' => 1, 'employees' => 70, 'customers' => 160, 'growth' => '+24%', 'mapX' => 640, 'mapY' => 320],
                        ['name' => 'South Africa', 'code' => 'ZA', 'region' => 'africa', 'offices' => 2, 'employees' => 110, 'customers' => 250, 'growth' => '+19%', 'mapX' => 580, 'mapY' => 450],
                        ['name' => 'Nigeria', 'code' => 'NG', 'region' => 'africa', 'offices' => 1, 'employees' => 55, 'customers' => 130, 'growth' => '+30%', 'mapX' => 540, 'mapY' => 390]
                    ],
                    'showNewsletter' => true,
                    'newsletter' => [
                        'title' => 'Global Updates',
                        'description' => 'Subscribe to receive updates about our global expansion, new office openings, and international events.',
                        'disclaimer' => 'No spam, unsubscribe anytime. Get 1-2 emails per month.',
                        'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 483,
                'section_key' => 'globalCoverageMap',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => 'Global Coverage',
                    'title' => [
                        'prefix' => 'Our',
                        'highlight' => 'Global Footprint'
                    ],
                    'description' => 'With a presence across 45+ countries and 6 continents, we deliver supply chain solutions wherever you need them.',
                    'heroImage' => 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&h=500&fit=crop',
                    'autoPlayCarousel' => true,
                    'tabs' => [
                        ['id' => 'map', 'label' => 'Interactive Map', 'icon' => 'map'],
                        ['id' => 'stats', 'label' => 'Global Statistics', 'icon' => 'chart'],
                        ['id' => 'growth', 'label' => 'Growth Markets', 'icon' => 'trending'],
                        ['id' => 'favorites', 'label' => 'Saved Countries', 'icon' => 'heart']
                    ],
                    'regions' => [
                        ['id' => 'all', 'label' => 'Global', 'icon' => 'globe', 'color' => '#3B82F6'],
                        ['id' => 'north-america', 'label' => 'North America', 'icon' => 'globe', 'color' => '#3B82F6'],
                        ['id' => 'europe', 'label' => 'Europe', 'icon' => 'globe', 'color' => '#8B5CF6'],
                        ['id' => 'asia-pacific', 'label' => 'Asia Pacific', 'icon' => 'globe', 'color' => '#10B981'],
                        ['id' => 'latin-america', 'label' => 'Latin America', 'icon' => 'globe', 'color' => '#F97316'],
                        ['id' => 'middle-east', 'label' => 'Middle East', 'icon' => 'globe', 'color' => '#EF4444'],
                        ['id' => 'africa', 'label' => 'Africa', 'icon' => 'globe', 'color' => '#10B981']
                    ],
                    'countryCoverage' => [
                        ['name' => 'United States', 'code' => 'US', 'region' => 'north-america', 'offices' => 8, 'employees' => 650, 'customers' => 1200, 'growth' => '+15%', 'marketShare' => '32%', 'mapX' => 320, 'mapY' => 260],
                        ['name' => 'Canada', 'code' => 'CA', 'region' => 'north-america', 'offices' => 3, 'employees' => 180, 'customers' => 450, 'growth' => '+12%', 'marketShare' => '8%', 'mapX' => 290, 'mapY' => 240],
                        ['name' => 'Mexico', 'code' => 'MX', 'region' => 'north-america', 'offices' => 2, 'employees' => 120, 'customers' => 280, 'growth' => '+20%', 'marketShare' => '5%', 'mapX' => 340, 'mapY' => 310],
                        ['name' => 'United Kingdom', 'code' => 'GB', 'region' => 'europe', 'offices' => 4, 'employees' => 250, 'customers' => 580, 'growth' => '+10%', 'marketShare' => '15%', 'mapX' => 520, 'mapY' => 290],
                        ['name' => 'Germany', 'code' => 'DE', 'region' => 'europe', 'offices' => 3, 'employees' => 200, 'customers' => 520, 'growth' => '+8%', 'marketShare' => '14%', 'mapX' => 540, 'mapY' => 285],
                        ['name' => 'France', 'code' => 'FR', 'region' => 'europe', 'offices' => 2, 'employees' => 140, 'customers' => 380, 'growth' => '+14%', 'marketShare' => '10%', 'mapX' => 530, 'mapY' => 300],
                        ['name' => 'China', 'code' => 'CN', 'region' => 'asia-pacific', 'offices' => 4, 'employees' => 320, 'customers' => 680, 'growth' => '+25%', 'marketShare' => '18%', 'mapX' => 800, 'mapY' => 290],
                        ['name' => 'Japan', 'code' => 'JP', 'region' => 'asia-pacific', 'offices' => 3, 'employees' => 210, 'customers' => 520, 'growth' => '+9%', 'marketShare' => '14%', 'mapX' => 880, 'mapY' => 290],
                        ['name' => 'Singapore', 'code' => 'SG', 'region' => 'asia-pacific', 'offices' => 2, 'employees' => 150, 'customers' => 380, 'growth' => '+18%', 'marketShare' => '10%', 'mapX' => 850, 'mapY' => 340],
                        ['name' => 'India', 'code' => 'IN', 'region' => 'asia-pacific', 'offices' => 3, 'employees' => 280, 'customers' => 620, 'growth' => '+32%', 'marketShare' => '16%', 'mapX' => 760, 'mapY' => 340],
                        ['name' => 'Brazil', 'code' => 'BR', 'region' => 'latin-america', 'offices' => 3, 'employees' => 220, 'customers' => 480, 'growth' => '+21%', 'marketShare' => '35%', 'mapX' => 370, 'mapY' => 430],
                        ['name' => 'UAE', 'code' => 'AE', 'region' => 'middle-east', 'offices' => 2, 'employees' => 120, 'customers' => 280, 'growth' => '+28%', 'marketShare' => '25%', 'mapX' => 650, 'mapY' => 300],
                        ['name' => 'South Africa', 'code' => 'ZA', 'region' => 'africa', 'offices' => 2, 'employees' => 110, 'customers' => 250, 'growth' => '+19%', 'marketShare' => '30%', 'mapX' => 580, 'mapY' => 450]
                    ],
                    'showNewsletter' => true,
                    'newsletter' => [
                        'title' => 'Global Updates',
                        'description' => 'Subscribe to receive updates about our global expansion, new office openings, and international events.',
                        'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 484,
                'section_key' => 'globalCoverageMap',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],



            // Local Support Section
            [
                'id' => 485,
                'section_key' => 'localSupport',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => 'Local Support',
                    'title' => [
                        'prefix' => 'Global',
                        'highlight' => 'Support',
                        'suffix' => 'Local Expertise'
                    ],
                    'description' => 'Get personalized support in your language and time zone. Our local teams are ready to help you succeed, wherever you are.',
                    'heroImage' => 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=1200&h=500&fit=crop',
                    'searchPlaceholder' => 'Search by city, country, language, or service...',
                    'regions' => [
                        ['id' => 'all', 'label' => 'All Regions', 'icon' => 'globe'],
                        ['id' => 'north-america', 'label' => 'North America', 'icon' => 'globe'],
                        ['id' => 'europe', 'label' => 'Europe', 'icon' => 'globe'],
                        ['id' => 'asia-pacific', 'label' => 'Asia Pacific', 'icon' => 'globe'],
                        ['id' => 'latin-america', 'label' => 'Latin America', 'icon' => 'globe'],
                        ['id' => 'middle-east', 'label' => 'Middle East', 'icon' => 'globe'],
                        ['id' => 'africa', 'label' => 'Africa', 'icon' => 'globe']
                    ],
                    'languages' => [
                        ['id' => 'all', 'label' => 'All Languages'],
                        ['id' => 'english', 'label' => 'English'],
                        ['id' => 'spanish', 'label' => 'Spanish'],
                        ['id' => 'french', 'label' => 'French'],
                        ['id' => 'german', 'label' => 'German'],
                        ['id' => 'portuguese', 'label' => 'Portuguese'],
                        ['id' => 'mandarin', 'label' => 'Mandarin'],
                        ['id' => 'japanese', 'label' => 'Japanese'],
                        ['id' => 'arabic', 'label' => 'Arabic']
                    ],
                    'supportChannels' => [
                        ['name' => '24/7 Phone Support', 'icon' => 'phone', 'hours' => 'Always available', 'number' => '+1 (888) 555-0123'],
                        ['name' => 'Live Chat', 'icon' => 'chat', 'hours' => '24/7', 'description' => 'Connect instantly with a support agent'],
                        ['name' => 'Email Support', 'icon' => 'mail', 'hours' => 'Response within 1 hour', 'email' => 'support@supplychainpro.com'],
                        ['name' => 'Video Consultation', 'icon' => 'video', 'hours' => 'By appointment', 'description' => 'Face-to-face support sessions']
                    ],
                    'stats' => [
                        ['value' => '24/7', 'label' => 'Global Support', 'icon' => 'clock'],
                        ['value' => '15+', 'label' => 'Languages Supported', 'icon' => 'globe'],
                        ['value' => '30min', 'label' => 'Avg Response Time', 'icon' => 'clock'],
                        ['value' => '98%', 'label' => 'Customer Satisfaction', 'icon' => 'star']
                    ],
                    'supportContacts' => [
                        [
                            'id' => 'nyc',
                            'city' => 'New York',
                            'country' => 'United States',
                            'region' => 'north-america',
                            'address' => '350 Fifth Avenue, Suite 5500, New York, NY 10118',
                            'phone' => '+1 (212) 555-0100',
                            'email' => 'support.nyc@supplychainpro.com',
                            'hours' => 'Monday-Friday, 9:00 AM - 6:00 PM EST',
                            'languages' => ['english', 'spanish', 'french'],
                            'services' => ['Technical Support', 'Account Management', 'Training', 'Onboarding', 'Consulting'],
                            'teamSize' => 25,
                            'mapLink' => 'https://maps.google.com/?q=New+York+NY',
                            'image' => 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'london',
                            'city' => 'London',
                            'country' => 'United Kingdom',
                            'region' => 'europe',
                            'address' => '10 Lower Thames Street, London, EC3R 6AF',
                            'phone' => '+44 (20) 7946 0100',
                            'email' => 'support.london@supplychainpro.com',
                            'hours' => 'Monday-Friday, 9:00 AM - 6:00 PM GMT',
                            'languages' => ['english', 'french', 'german'],
                            'services' => ['Technical Support', 'Sales Support', 'Training', 'Professional Services'],
                            'teamSize' => 18,
                            'mapLink' => 'https://maps.google.com/?q=London+UK',
                            'image' => 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'singapore',
                            'city' => 'Singapore',
                            'country' => 'Singapore',
                            'region' => 'asia-pacific',
                            'address' => '9 Raffles Place, #26-01, Republic Plaza, Singapore 048619',
                            'phone' => '+65 6808 6100',
                            'email' => 'support.singapore@supplychainpro.com',
                            'hours' => 'Monday-Friday, 9:00 AM - 6:00 PM SGT',
                            'languages' => ['english', 'mandarin', 'japanese'],
                            'services' => ['Technical Support', 'Implementation', 'Training', 'Customer Success'],
                            'teamSize' => 15,
                            'mapLink' => 'https://maps.google.com/?q=Singapore',
                            'image' => 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'sao-paulo',
                            'city' => 'São Paulo',
                            'country' => 'Brazil',
                            'region' => 'latin-america',
                            'address' => 'Av. Paulista, 1578, 10th Floor, São Paulo, SP 01310-200',
                            'phone' => '+55 (11) 3500-0100',
                            'email' => 'support.saopaulo@supplychainpro.com',
                            'hours' => 'Monday-Friday, 9:00 AM - 6:00 PM BRT',
                            'languages' => ['portuguese', 'spanish', 'english'],
                            'services' => ['Technical Support', 'Sales Support', 'Training', 'Consulting'],
                            'teamSize' => 12,
                            'mapLink' => 'https://maps.google.com/?q=S%C3%A3o+Paulo+Brazil',
                            'image' => 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'dubai',
                            'city' => 'Dubai',
                            'country' => 'UAE',
                            'region' => 'middle-east',
                            'address' => 'Dubai Internet City, Building 1, Office 502, Dubai',
                            'phone' => '+971 4 567 8901',
                            'email' => 'support.dubai@supplychainpro.com',
                            'hours' => 'Sunday-Thursday, 9:00 AM - 6:00 PM GST',
                            'languages' => ['arabic', 'english', 'urdu'],
                            'services' => ['Technical Support', 'Account Management', 'Implementation'],
                            'teamSize' => 10,
                            'mapLink' => 'https://maps.google.com/?q=Dubai+UAE',
                            'image' => 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'johannesburg',
                            'city' => 'Johannesburg',
                            'country' => 'South Africa',
                            'region' => 'africa',
                            'address' => 'Sandton City, 5th Floor, Johannesburg, 2196',
                            'phone' => '+27 (11) 234 5678',
                            'email' => 'support.johannesburg@supplychainpro.com',
                            'hours' => 'Monday-Friday, 8:00 AM - 5:00 PM SAST',
                            'languages' => ['english', 'afrikaans', 'zulu'],
                            'services' => ['Technical Support', 'Sales Support', 'Training'],
                            'teamSize' => 8,
                            'mapLink' => 'https://maps.google.com/?q=Johannesburg+South+Africa',
                            'image' => 'https://images.unsplash.com/photo-1576485290814-1c72aa2b8d6f?w=600&h=400&fit=crop'
                        ]
                    ],
                    'supportTitle' => 'Need Immediate Assistance?',
                    'supportDescription' => 'Our global support team is available 24/7 to help you with any questions or issues. Choose your preferred contact method.',
                    'supportImage' => 'https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=600&h=400&fit=crop',
                    'showNewsletter' => true,
                    'newsletter' => [
                        'title' => 'Support Updates',
                        'description' => 'Subscribe to receive updates about new support resources, office hours, and service enhancements.',
                        'disclaimer' => 'No spam, unsubscribe anytime. Get 1-2 emails per month.',
                        'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 486,
                'section_key' => 'localSupport',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => 'Local Support',
                    'title' => [
                        'prefix' => 'Global',
                        'highlight' => 'Support',
                        'suffix' => 'Local Expertise'
                    ],
                    'description' => 'Get personalized support in your language and time zone. Our local teams are ready to help you succeed, wherever you are.',
                    'heroImage' => 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=1200&h=500&fit=crop',
                    'searchPlaceholder' => 'Search by city, country, language, or service...',
                    'defaultViewMode' => 'grid',
                    'regions' => [
                        ['id' => 'all', 'label' => 'All Regions', 'icon' => 'globe'],
                        ['id' => 'north-america', 'label' => 'North America', 'icon' => 'globe'],
                        ['id' => 'europe', 'label' => 'Europe', 'icon' => 'globe'],
                        ['id' => 'asia-pacific', 'label' => 'Asia Pacific', 'icon' => 'globe'],
                        ['id' => 'latin-america', 'label' => 'Latin America', 'icon' => 'globe'],
                        ['id' => 'middle-east', 'label' => 'Middle East', 'icon' => 'globe'],
                        ['id' => 'africa', 'label' => 'Africa', 'icon' => 'globe']
                    ],
                    'languages' => [
                        ['id' => 'all', 'label' => 'All Languages'],
                        ['id' => 'english', 'label' => 'English'],
                        ['id' => 'spanish', 'label' => 'Spanish'],
                        ['id' => 'french', 'label' => 'French'],
                        ['id' => 'german', 'label' => 'German'],
                        ['id' => 'portuguese', 'label' => 'Portuguese'],
                        ['id' => 'mandarin', 'label' => 'Mandarin'],
                        ['id' => 'japanese', 'label' => 'Japanese'],
                        ['id' => 'arabic', 'label' => 'Arabic']
                    ],
                    'supportChannels' => [
                        ['name' => '24/7 Phone Support', 'icon' => 'phone', 'hours' => 'Always available', 'number' => '+1 (888) 555-0123', 'responseTime' => '< 2 min', 'satisfaction' => '98%'],
                        ['name' => 'Live Chat', 'icon' => 'chat', 'hours' => '24/7', 'responseTime' => '< 1 min', 'satisfaction' => '96%', 'available' => true],
                        ['name' => 'Email Support', 'icon' => 'mail', 'hours' => 'Response within 1 hour', 'responseTime' => '< 1 hour', 'satisfaction' => '95%'],
                        ['name' => 'Video Consultation', 'icon' => 'video', 'hours' => 'By appointment', 'responseTime' => 'Scheduled', 'satisfaction' => '99%']
                    ],
                    'stats' => [
                        ['value' => '24/7', 'label' => 'Global Support', 'icon' => 'clock', 'trend' => 'Always', 'trendUp' => true],
                        ['value' => '15+', 'label' => 'Languages Supported', 'icon' => 'globe', 'trend' => '+3', 'trendUp' => true],
                        ['value' => '30min', 'label' => 'Avg Response Time', 'icon' => 'clock', 'trend' => '-5min', 'trendUp' => true],
                        ['value' => '98%', 'label' => 'Customer Satisfaction', 'icon' => 'star', 'trend' => '+2%', 'trendUp' => true]
                    ],
                    'supportContacts' => [
                        [
                            'id' => 'nyc',
                            'city' => 'New York',
                            'country' => 'United States',
                            'region' => 'north-america',
                            'address' => '350 Fifth Avenue, Suite 5500, New York, NY 10118',
                            'phone' => '+1 (212) 555-0100',
                            'email' => 'support.nyc@supplychainpro.com',
                            'hours' => 'Monday-Friday, 9:00 AM - 6:00 PM EST',
                            'responseTime' => 15,
                            'languages' => ['english', 'spanish', 'french'],
                            'services' => ['Technical Support', 'Account Management', 'Training', 'Onboarding', 'Consulting'],
                            'teamSize' => 25,
                            'mapLink' => 'https://maps.google.com/?q=New+York+NY',
                            'image' => 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'london',
                            'city' => 'London',
                            'country' => 'United Kingdom',
                            'region' => 'europe',
                            'address' => '10 Lower Thames Street, London, EC3R 6AF',
                            'phone' => '+44 (20) 7946 0100',
                            'email' => 'support.london@supplychainpro.com',
                            'hours' => 'Monday-Friday, 9:00 AM - 6:00 PM GMT',
                            'responseTime' => 20,
                            'languages' => ['english', 'french', 'german'],
                            'services' => ['Technical Support', 'Sales Support', 'Training', 'Professional Services'],
                            'teamSize' => 18,
                            'mapLink' => 'https://maps.google.com/?q=London+UK',
                            'image' => 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'singapore',
                            'city' => 'Singapore',
                            'country' => 'Singapore',
                            'region' => 'asia-pacific',
                            'address' => '9 Raffles Place, #26-01, Republic Plaza, Singapore 048619',
                            'phone' => '+65 6808 6100',
                            'email' => 'support.singapore@supplychainpro.com',
                            'hours' => 'Monday-Friday, 9:00 AM - 6:00 PM SGT',
                            'responseTime' => 10,
                            'languages' => ['english', 'mandarin', 'japanese'],
                            'services' => ['Technical Support', 'Implementation', 'Training', 'Customer Success'],
                            'teamSize' => 15,
                            'mapLink' => 'https://maps.google.com/?q=Singapore',
                            'image' => 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'sao-paulo',
                            'city' => 'São Paulo',
                            'country' => 'Brazil',
                            'region' => 'latin-america',
                            'address' => 'Av. Paulista, 1578, 10th Floor, São Paulo, SP 01310-200',
                            'phone' => '+55 (11) 3500-0100',
                            'email' => 'support.saopaulo@supplychainpro.com',
                            'hours' => 'Monday-Friday, 9:00 AM - 6:00 PM BRT',
                            'responseTime' => 25,
                            'languages' => ['portuguese', 'spanish', 'english'],
                            'services' => ['Technical Support', 'Sales Support', 'Training', 'Consulting'],
                            'teamSize' => 12,
                            'mapLink' => 'https://maps.google.com/?q=S%C3%A3o+Paulo+Brazil',
                            'image' => 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'dubai',
                            'city' => 'Dubai',
                            'country' => 'UAE',
                            'region' => 'middle-east',
                            'address' => 'Dubai Internet City, Building 1, Office 502, Dubai',
                            'phone' => '+971 4 567 8901',
                            'email' => 'support.dubai@supplychainpro.com',
                            'hours' => 'Sunday-Thursday, 9:00 AM - 6:00 PM GST',
                            'responseTime' => 30,
                            'languages' => ['arabic', 'english', 'urdu'],
                            'services' => ['Technical Support', 'Account Management', 'Implementation'],
                            'teamSize' => 10,
                            'mapLink' => 'https://maps.google.com/?q=Dubai+UAE',
                            'image' => 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'johannesburg',
                            'city' => 'Johannesburg',
                            'country' => 'South Africa',
                            'region' => 'africa',
                            'address' => 'Sandton City, 5th Floor, Johannesburg, 2196',
                            'phone' => '+27 (11) 234 5678',
                            'email' => 'support.johannesburg@supplychainpro.com',
                            'hours' => 'Monday-Friday, 8:00 AM - 5:00 PM SAST',
                            'responseTime' => 22,
                            'languages' => ['english', 'afrikaans', 'zulu'],
                            'services' => ['Technical Support', 'Sales Support', 'Training'],
                            'teamSize' => 8,
                            'mapLink' => 'https://maps.google.com/?q=Johannesburg+South+Africa',
                            'image' => 'https://images.unsplash.com/photo-1576485290814-1c72aa2b8d6f?w=600&h=400&fit=crop'
                        ]
                    ],
                    'showNewsletter' => true,
                    'newsletter' => [
                        'title' => 'Support Updates',
                        'description' => 'Subscribe to receive updates about new support resources, office hours, and service enhancements.',
                        'disclaimer' => 'No spam, unsubscribe anytime. Get 1-2 emails per month.',
                        'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 487,
                'section_key' => 'localSupport',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => 'Local Support',
                    'title' => [
                        'prefix' => 'Global',
                        'highlight' => 'Support'
                    ],
                    'description' => 'Get personalized support in your language and time zone. Our local teams are ready to help you succeed, wherever you are.',
                    'heroImage' => 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=1200&h=500&fit=crop',
                    'autoPlayCarousel' => true,
                    'tabs' => [
                        ['id' => 'map', 'label' => 'Support Map', 'icon' => 'map'],
                        ['id' => 'contacts', 'label' => 'Contact Directory', 'icon' => 'users'],
                        ['id' => 'features', 'label' => 'Support Features', 'icon' => 'star'],
                        ['id' => 'chat', 'label' => 'Live Chat', 'icon' => 'chat']
                    ],
                    'regions' => [
                        ['id' => 'all', 'label' => 'All Regions', 'icon' => 'globe'],
                        ['id' => 'north-america', 'label' => 'North America', 'icon' => 'globe'],
                        ['id' => 'europe', 'label' => 'Europe', 'icon' => 'globe'],
                        ['id' => 'asia-pacific', 'label' => 'Asia Pacific', 'icon' => 'globe'],
                        ['id' => 'latin-america', 'label' => 'Latin America', 'icon' => 'globe'],
                        ['id' => 'middle-east', 'label' => 'Middle East', 'icon' => 'globe'],
                        ['id' => 'africa', 'label' => 'Africa', 'icon' => 'globe']
                    ],
                    'languages' => [
                        ['id' => 'all', 'label' => 'All Languages'],
                        ['id' => 'english', 'label' => 'English'],
                        ['id' => 'spanish', 'label' => 'Spanish'],
                        ['id' => 'french', 'label' => 'French'],
                        ['id' => 'german', 'label' => 'German'],
                        ['id' => 'portuguese', 'label' => 'Portuguese'],
                        ['id' => 'mandarin', 'label' => 'Mandarin'],
                        ['id' => 'japanese', 'label' => 'Japanese'],
                        ['id' => 'arabic', 'label' => 'Arabic']
                    ],
                    'supportTypes' => [
                        ['id' => 'all', 'label' => 'All Services', 'icon' => 'support'],
                        ['id' => 'Technical Support', 'label' => 'Technical', 'icon' => 'desktop'],
                        ['id' => 'Sales Support', 'label' => 'Sales', 'icon' => 'briefcase'],
                        ['id' => 'Implementation Services', 'label' => 'Implementation', 'icon' => 'cog'],
                        ['id' => 'Training', 'label' => 'Training', 'icon' => 'academic'],
                        ['id' => 'Emergency Support', 'label' => 'Emergency', 'icon' => 'phone']
                    ],
                    'stats' => [
                        ['value' => '24/7', 'label' => 'Global Support', 'icon' => 'clock'],
                        ['value' => '15+', 'label' => 'Languages', 'icon' => 'globe'],
                        ['value' => '30min', 'label' => 'Avg Response', 'icon' => 'clock'],
                        ['value' => '98%', 'label' => 'Satisfaction', 'icon' => 'star']
                    ],
                    'supportFeatures' => [
                        ['title' => '24/7 Global Support', 'description' => 'Round-the-clock assistance in your time zone', 'icon' => 'clock', 'gradient' => 'from-blue-500 to-blue-600', 'image' => 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=600&h=400&fit=crop'],
                        ['title' => 'Multi-language Support', 'description' => '15+ languages supported by native speakers', 'icon' => 'globe', 'gradient' => 'from-emerald-500 to-emerald-600', 'image' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop'],
                        ['title' => 'Fast Response Times', 'description' => 'Average response time under 30 minutes', 'icon' => 'bolt', 'gradient' => 'from-orange-500 to-orange-600', 'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'],
                        ['title' => 'Expert Technical Team', 'description' => 'Certified professionals with deep expertise', 'icon' => 'academic', 'gradient' => 'from-purple-500 to-purple-600', 'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'],
                        ['title' => 'Video Consultations', 'description' => 'Face-to-face support sessions', 'icon' => 'video', 'gradient' => 'from-red-500 to-red-600', 'image' => 'https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=600&h=400&fit=crop'],
                        ['title' => 'Dedicated Account Managers', 'description' => 'Personalized support for enterprise clients', 'icon' => 'users', 'gradient' => 'from-indigo-500 to-indigo-600', 'image' => 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop']
                    ],
                    'supportContacts' => [
                        [
                            'id' => 'nyc',
                            'city' => 'New York',
                            'country' => 'United States',
                            'region' => 'north-america',
                            'address' => '350 Fifth Avenue, Suite 5500, New York, NY 10118',
                            'phone' => '+1 (212) 555-0100',
                            'email' => 'support.nyc@supplychainpro.com',
                            'hours' => 'Monday-Friday, 9:00 AM - 6:00 PM EST',
                            'responseTime' => 15,
                            'languages' => ['english', 'spanish', 'french'],
                            'services' => ['Technical Support', 'Account Management', 'Training', 'Onboarding', 'Consulting'],
                            'teamSize' => 25,
                            'mapLink' => 'https://maps.google.com/?q=New+York+NY',
                            'mapX' => 320,
                            'mapY' => 260,
                            'image' => 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'london',
                            'city' => 'London',
                            'country' => 'United Kingdom',
                            'region' => 'europe',
                            'address' => '10 Lower Thames Street, London, EC3R 6AF',
                            'phone' => '+44 (20) 7946 0100',
                            'email' => 'support.london@supplychainpro.com',
                            'hours' => 'Monday-Friday, 9:00 AM - 6:00 PM GMT',
                            'responseTime' => 20,
                            'languages' => ['english', 'french', 'german'],
                            'services' => ['Technical Support', 'Sales Support', 'Training', 'Professional Services'],
                            'teamSize' => 18,
                            'mapLink' => 'https://maps.google.com/?q=London+UK',
                            'mapX' => 520,
                            'mapY' => 290,
                            'image' => 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'singapore',
                            'city' => 'Singapore',
                            'country' => 'Singapore',
                            'region' => 'asia-pacific',
                            'address' => '9 Raffles Place, #26-01, Republic Plaza, Singapore 048619',
                            'phone' => '+65 6808 6100',
                            'email' => 'support.singapore@supplychainpro.com',
                            'hours' => 'Monday-Friday, 9:00 AM - 6:00 PM SGT',
                            'responseTime' => 10,
                            'languages' => ['english', 'mandarin', 'japanese'],
                            'services' => ['Technical Support', 'Implementation', 'Training', 'Customer Success'],
                            'teamSize' => 15,
                            'mapLink' => 'https://maps.google.com/?q=Singapore',
                            'mapX' => 850,
                            'mapY' => 340,
                            'image' => 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'sao-paulo',
                            'city' => 'São Paulo',
                            'country' => 'Brazil',
                            'region' => 'latin-america',
                            'address' => 'Av. Paulista, 1578, 10th Floor, São Paulo, SP 01310-200',
                            'phone' => '+55 (11) 3500-0100',
                            'email' => 'support.saopaulo@supplychainpro.com',
                            'hours' => 'Monday-Friday, 9:00 AM - 6:00 PM BRT',
                            'responseTime' => 25,
                            'languages' => ['portuguese', 'spanish', 'english'],
                            'services' => ['Technical Support', 'Sales Support', 'Training', 'Consulting'],
                            'teamSize' => 12,
                            'mapLink' => 'https://maps.google.com/?q=S%C3%A3o+Paulo+Brazil',
                            'mapX' => 370,
                            'mapY' => 430,
                            'image' => 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'dubai',
                            'city' => 'Dubai',
                            'country' => 'UAE',
                            'region' => 'middle-east',
                            'address' => 'Dubai Internet City, Building 1, Office 502, Dubai',
                            'phone' => '+971 4 567 8901',
                            'email' => 'support.dubai@supplychainpro.com',
                            'hours' => 'Sunday-Thursday, 9:00 AM - 6:00 PM GST',
                            'responseTime' => 30,
                            'languages' => ['arabic', 'english', 'urdu'],
                            'services' => ['Technical Support', 'Account Management', 'Implementation'],
                            'teamSize' => 10,
                            'mapLink' => 'https://maps.google.com/?q=Dubai+UAE',
                            'mapX' => 650,
                            'mapY' => 300,
                            'image' => 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'johannesburg',
                            'city' => 'Johannesburg',
                            'country' => 'South Africa',
                            'region' => 'africa',
                            'address' => 'Sandton City, 5th Floor, Johannesburg, 2196',
                            'phone' => '+27 (11) 234 5678',
                            'email' => 'support.johannesburg@supplychainpro.com',
                            'hours' => 'Monday-Friday, 8:00 AM - 5:00 PM SAST',
                            'responseTime' => 22,
                            'languages' => ['english', 'afrikaans', 'zulu'],
                            'services' => ['Technical Support', 'Sales Support', 'Training'],
                            'teamSize' => 8,
                            'mapLink' => 'https://maps.google.com/?q=Johannesburg+South+Africa',
                            'mapX' => 580,
                            'mapY' => 450,
                            'image' => 'https://images.unsplash.com/photo-1576485290814-1c72aa2b8d6f?w=600&h=400&fit=crop'
                        ]
                    ],
                    'showNewsletter' => true,
                    'newsletter' => [
                        'title' => 'Support Updates',
                        'description' => 'Subscribe to receive updates about new support resources, office hours, and service enhancements.',
                        'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 488,
                'section_key' => 'localSupport',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],


            // International Clients Section 
            [
                'id' => 489,
                'section_key' => 'internationalClients',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => 'Global Clients',
                    'title' => [
                        'prefix' => 'Trusted by',
                        'highlight' => '500+ Companies',
                        'suffix' => 'Worldwide'
                    ],
                    'description' => 'From global enterprises to innovative startups, organizations around the world rely on SupplyChainPro to optimize their supply chain operations.',
                    'heroImage' => 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&h=500&fit=crop',
                    'searchPlaceholder' => 'Search clients by name, industry, or country...',
                    'regions' => [
                        ['id' => 'all', 'label' => 'All Regions', 'icon' => 'globe'],
                        ['id' => 'north-america', 'label' => 'North America', 'icon' => 'globe'],
                        ['id' => 'europe', 'label' => 'Europe', 'icon' => 'globe'],
                        ['id' => 'asia-pacific', 'label' => 'Asia Pacific', 'icon' => 'globe'],
                        ['id' => 'latin-america', 'label' => 'Latin America', 'icon' => 'globe'],
                        ['id' => 'middle-east', 'label' => 'Middle East', 'icon' => 'globe'],
                        ['id' => 'africa', 'label' => 'Africa', 'icon' => 'globe']
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
                        ['value' => '500+', 'label' => 'Global Clients', 'icon' => 'users'],
                        ['value' => '45+', 'label' => 'Countries', 'icon' => 'globe'],
                        ['value' => '6', 'label' => 'Continents', 'icon' => 'globe'],
                        ['value' => '98%', 'label' => 'Client Retention', 'icon' => 'star']
                    ],
                    'clients' => [
                        [
                            'id' => 'walmart',
                            'name' => 'Walmart',
                            'industry' => 'retail',
                            'region' => 'north-america',
                            'city' => 'Bentonville',
                            'country' => 'USA',
                            'description' => 'Global retail corporation operating a chain of hypermarkets, discount department stores, and grocery stores.',
                            'testimonial' => [
                                'text' => 'SupplyChainPro has revolutionized our inventory management, reducing stockouts by 35% and improving delivery times significantly.',
                                'author' => 'John Smith',
                                'title' => 'VP of Supply Chain'
                            ],
                            'metrics' => [
                                ['value' => '35%', 'label' => 'Stockout Reduction'],
                                ['value' => '25%', 'label' => 'Inventory Savings'],
                                ['value' => '99%', 'label' => 'OTD Performance']
                            ],
                            'tags' => ['retail', 'inventory', 'logistics'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_logo.svg',
                            'image' => 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=600&h=400&fit=crop',
                            'link' => '/case-studies/walmart',
                            'isFeatured' => true
                        ],
                        [
                            'id' => 'toyota',
                            'name' => 'Toyota',
                            'industry' => 'automotive',
                            'region' => 'asia-pacific',
                            'city' => 'Toyota City',
                            'country' => 'Japan',
                            'description' => 'Japanese automotive manufacturer known for its innovative production system and global supply chain excellence.',
                            'testimonial' => [
                                'text' => 'The visibility provided by SupplyChainPro has transformed our just-in-time inventory management across 50+ manufacturing facilities.',
                                'author' => 'Kenji Tanaka',
                                'title' => 'Supply Chain Director'
                            ],
                            'metrics' => [
                                ['value' => '28%', 'label' => 'WIP Reduction'],
                                ['value' => '40%', 'label' => 'Lead Time Drop'],
                                ['value' => '100%', 'label' => 'Traceability']
                            ],
                            'tags' => ['automotive', 'jit', 'manufacturing'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_carlogo.svg',
                            'image' => 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600&h=400&fit=crop',
                            'link' => '/case-studies/toyota'
                        ],
                        [
                            'id' => 'nestle',
                            'name' => 'Nestlé',
                            'industry' => 'consumer-goods',
                            'region' => 'europe',
                            'city' => 'Vevey',
                            'country' => 'Switzerland',
                            'description' => 'Swiss multinational food and drink processing conglomerate with operations in 186 countries.',
                            'testimonial' => [
                                'text' => 'SupplyChainPro\'s demand forecasting has improved our accuracy by 45%, significantly reducing waste and optimizing inventory.',
                                'author' => 'Maria Garcia',
                                'title' => 'Global Supply Chain Lead'
                            ],
                            'metrics' => [
                                ['value' => '45%', 'label' => 'Forecast Accuracy'],
                                ['value' => '30%', 'label' => 'Waste Reduction'],
                                ['value' => '15%', 'label' => 'Cost Savings']
                            ],
                            'tags' => ['consumer goods', 'demand planning', 'forecasting'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Nestl%C3%A9_Logo_2.svg',
                            'image' => 'https://images.unsplash.com/photo-1488229297570-58520851e868?w=600&h=400&fit=crop',
                            'link' => '/case-studies/nestle'
                        ],
                        [
                            'id' => 'johnson-johnson',
                            'name' => 'Johnson & Johnson',
                            'industry' => 'healthcare',
                            'region' => 'north-america',
                            'city' => 'New Brunswick',
                            'country' => 'USA',
                            'description' => 'American multinational corporation developing medical devices, pharmaceuticals, and consumer goods.',
                            'testimonial' => [
                                'text' => 'The cold chain monitoring capabilities have ensured 100% compliance and product integrity across our global distribution network.',
                                'author' => 'Sarah Williams',
                                'title' => 'Global Logistics Director'
                            ],
                            'metrics' => [
                                ['value' => '100%', 'label' => 'Compliance'],
                                ['value' => '20%', 'label' => 'Transport Savings'],
                                ['value' => '99.9%', 'label' => 'Product Integrity']
                            ],
                            'tags' => ['healthcare', 'cold chain', 'compliance'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/4/43/Johnson_%26_Johnson_Logo.svg',
                            'image' => 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop',
                            'link' => '/case-studies/johnson-johnson'
                        ],
                        [
                            'id' => 'dhl',
                            'name' => 'DHL',
                            'industry' => 'logistics',
                            'region' => 'europe',
                            'city' => 'Bonn',
                            'country' => 'Germany',
                            'description' => 'Global logistics company providing international express mail services, freight transport, and supply chain solutions.',
                            'testimonial' => [
                                'text' => 'The warehouse optimization features have increased our throughput by 40% while reducing operational costs.',
                                'author' => 'Hans Weber',
                                'title' => 'Operations Director'
                            ],
                            'metrics' => [
                                ['value' => '40%', 'label' => 'Throughput Increase'],
                                ['value' => '25%', 'label' => 'Cost Reduction'],
                                ['value' => '99.5%', 'label' => 'Accuracy']
                            ],
                            'tags' => ['logistics', 'warehouse', 'transportation'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/a/ac/DHL_Logo.svg',
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
                            'link' => '/case-studies/dhl'
                        ],
                        [
                            'id' => 'unilever',
                            'name' => 'Unilever',
                            'industry' => 'consumer-goods',
                            'region' => 'europe',
                            'city' => 'London',
                            'country' => 'UK',
                            'description' => 'British multinational consumer goods company with products in food, beverages, cleaning agents, and personal care.',
                            'testimonial' => [
                                'text' => 'Sustainability tracking capabilities have helped us reduce carbon emissions by 25% across our supply chain.',
                                'author' => 'Emma Thompson',
                                'title' => 'Sustainability Director'
                            ],
                            'metrics' => [
                                ['value' => '25%', 'label' => 'Carbon Reduction'],
                                ['value' => '30%', 'label' => 'Efficiency Gain'],
                                ['value' => '95%', 'label' => 'Supplier Compliance']
                            ],
                            'tags' => ['consumer goods', 'sustainability', 'compliance'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/6/60/Unilever_Logo.svg',
                            'image' => 'https://images.unsplash.com/photo-1557838923-2985c318be48?w=600&h=400&fit=crop',
                            'link' => '/case-studies/unilever'
                        ]
                    ],
                    'ctaTitle' => 'Join Our Global Client Community',
                    'ctaDescription' => 'See how SupplyChainPro can transform your supply chain operations. Join hundreds of leading companies worldwide.',
                    'ctaLink' => '/contact',
                    'ctaImage' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop',
                    'showNewsletter' => true,
                    'newsletter' => [
                        'title' => 'Client Success Stories',
                        'description' => 'Subscribe to receive case studies, success stories, and client insights delivered to your inbox.',
                        'disclaimer' => 'No spam, unsubscribe anytime. Get 1-2 emails per month.',
                        'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 490,
                'section_key' => 'internationalClients',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => 'Global Clients',
                    'title' => [
                        'prefix' => 'Trusted by',
                        'highlight' => '500+ Companies',
                        'suffix' => 'Worldwide'
                    ],
                    'description' => 'From global enterprises to innovative startups, organizations around the world rely on SupplyChainPro to optimize their supply chain operations.',
                    'heroImage' => 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&h=500&fit=crop',
                    'searchPlaceholder' => 'Search clients by name, industry, or country...',
                    'defaultViewMode' => 'grid',
                    'regions' => [
                        ['id' => 'all', 'label' => 'All Regions', 'icon' => 'globe'],
                        ['id' => 'north-america', 'label' => 'North America', 'icon' => 'globe'],
                        ['id' => 'europe', 'label' => 'Europe', 'icon' => 'globe'],
                        ['id' => 'asia-pacific', 'label' => 'Asia Pacific', 'icon' => 'globe'],
                        ['id' => 'latin-america', 'label' => 'Latin America', 'icon' => 'globe'],
                        ['id' => 'middle-east', 'label' => 'Middle East', 'icon' => 'globe'],
                        ['id' => 'africa', 'label' => 'Africa', 'icon' => 'globe']
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
                    'clientSegments' => [
                        ['id' => 'all', 'label' => 'All Segments'],
                        ['id' => 'enterprise', 'label' => 'Enterprise'],
                        ['id' => 'mid-market', 'label' => 'Mid-Market'],
                        ['id' => 'startup', 'label' => 'Startup']
                    ],
                    'stats' => [
                        ['value' => '500+', 'label' => 'Global Clients', 'icon' => 'users', 'trend' => '+15%', 'trendUp' => true],
                        ['value' => '45+', 'label' => 'Countries', 'icon' => 'globe', 'trend' => '+8', 'trendUp' => true],
                        ['value' => '6', 'label' => 'Continents', 'icon' => 'globe', 'trend' => 'All', 'trendUp' => true],
                        ['value' => '98%', 'label' => 'Client Retention', 'icon' => 'star', 'trend' => '+2%', 'trendUp' => true]
                    ],
                    'clients' => [
                        [
                            'id' => 'walmart',
                            'name' => 'Walmart',
                            'industry' => 'retail',
                            'segment' => 'enterprise',
                            'region' => 'north-america',
                            'city' => 'Bentonville',
                            'country' => 'USA',
                            'description' => 'Global retail corporation operating a chain of hypermarkets, discount department stores, and grocery stores.',
                            'testimonial' => [
                                'text' => 'SupplyChainPro has revolutionized our inventory management, reducing stockouts by 35% and improving delivery times significantly.',
                                'author' => 'John Smith',
                                'title' => 'VP of Supply Chain'
                            ],
                            'metrics' => [
                                ['value' => '35%', 'label' => 'Stockout Reduction'],
                                ['value' => '25%', 'label' => 'Inventory Savings'],
                                ['value' => '99%', 'label' => 'OTD Performance']
                            ],
                            'tags' => ['retail', 'inventory', 'logistics'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_logo.svg',
                            'link' => '/case-studies/walmart',
                            'image' => 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=600&h=400&fit=crop',
                            'isFeatured' => true
                        ],
                        [
                            'id' => 'toyota',
                            'name' => 'Toyota',
                            'industry' => 'automotive',
                            'segment' => 'enterprise',
                            'region' => 'asia-pacific',
                            'city' => 'Toyota City',
                            'country' => 'Japan',
                            'description' => 'Japanese automotive manufacturer known for its innovative production system and global supply chain excellence.',
                            'testimonial' => [
                                'text' => 'The visibility provided by SupplyChainPro has transformed our just-in-time inventory management across 50+ manufacturing facilities.',
                                'author' => 'Kenji Tanaka',
                                'title' => 'Supply Chain Director'
                            ],
                            'metrics' => [
                                ['value' => '28%', 'label' => 'WIP Reduction'],
                                ['value' => '40%', 'label' => 'Lead Time Drop'],
                                ['value' => '100%', 'label' => 'Traceability']
                            ],
                            'tags' => ['automotive', 'jit', 'manufacturing'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_carlogo.svg',
                            'link' => '/case-studies/toyota',
                            'image' => 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600&h=400&fit=crop',
                            'isFeatured' => true
                        ],
                        [
                            'id' => 'nestle',
                            'name' => 'Nestlé',
                            'industry' => 'consumer-goods',
                            'segment' => 'enterprise',
                            'region' => 'europe',
                            'city' => 'Vevey',
                            'country' => 'Switzerland',
                            'description' => 'Swiss multinational food and drink processing conglomerate with operations in 186 countries.',
                            'testimonial' => [
                                'text' => 'SupplyChainPro\'s demand forecasting has improved our accuracy by 45%, significantly reducing waste and optimizing inventory.',
                                'author' => 'Maria Garcia',
                                'title' => 'Global Supply Chain Lead'
                            ],
                            'metrics' => [
                                ['value' => '45%', 'label' => 'Forecast Accuracy'],
                                ['value' => '30%', 'label' => 'Waste Reduction'],
                                ['value' => '15%', 'label' => 'Cost Savings']
                            ],
                            'tags' => ['consumer goods', 'demand planning', 'forecasting'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Nestl%C3%A9_Logo_2.svg',
                            'link' => '/case-studies/nestle',
                            'image' => 'https://images.unsplash.com/photo-1488229297570-58520851e868?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'johnson-johnson',
                            'name' => 'Johnson & Johnson',
                            'industry' => 'healthcare',
                            'segment' => 'enterprise',
                            'region' => 'north-america',
                            'city' => 'New Brunswick',
                            'country' => 'USA',
                            'description' => 'American multinational corporation developing medical devices, pharmaceuticals, and consumer goods.',
                            'testimonial' => [
                                'text' => 'The cold chain monitoring capabilities have ensured 100% compliance and product integrity across our global distribution network.',
                                'author' => 'Sarah Williams',
                                'title' => 'Global Logistics Director'
                            ],
                            'metrics' => [
                                ['value' => '100%', 'label' => 'Compliance'],
                                ['value' => '20%', 'label' => 'Transport Savings'],
                                ['value' => '99.9%', 'label' => 'Product Integrity']
                            ],
                            'tags' => ['healthcare', 'cold chain', 'compliance'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/4/43/Johnson_%26_Johnson_Logo.svg',
                            'link' => '/case-studies/johnson-johnson',
                            'image' => 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'dhl',
                            'name' => 'DHL',
                            'industry' => 'logistics',
                            'segment' => 'enterprise',
                            'region' => 'europe',
                            'city' => 'Bonn',
                            'country' => 'Germany',
                            'description' => 'Global logistics company providing international express mail services, freight transport, and supply chain solutions.',
                            'testimonial' => [
                                'text' => 'The warehouse optimization features have increased our throughput by 40% while reducing operational costs.',
                                'author' => 'Hans Weber',
                                'title' => 'Operations Director'
                            ],
                            'metrics' => [
                                ['value' => '40%', 'label' => 'Throughput Increase'],
                                ['value' => '25%', 'label' => 'Cost Reduction'],
                                ['value' => '99.5%', 'label' => 'Accuracy']
                            ],
                            'tags' => ['logistics', 'warehouse', 'transportation'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/a/ac/DHL_Logo.svg',
                            'link' => '/case-studies/dhl',
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'unilever',
                            'name' => 'Unilever',
                            'industry' => 'consumer-goods',
                            'segment' => 'enterprise',
                            'region' => 'europe',
                            'city' => 'London',
                            'country' => 'UK',
                            'description' => 'British multinational consumer goods company with products in food, beverages, cleaning agents, and personal care.',
                            'testimonial' => [
                                'text' => 'Sustainability tracking capabilities have helped us reduce carbon emissions by 25% across our supply chain.',
                                'author' => 'Emma Thompson',
                                'title' => 'Sustainability Director'
                            ],
                            'metrics' => [
                                ['value' => '25%', 'label' => 'Carbon Reduction'],
                                ['value' => '30%', 'label' => 'Efficiency Gain'],
                                ['value' => '95%', 'label' => 'Supplier Compliance']
                            ],
                            'tags' => ['consumer goods', 'sustainability', 'compliance'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/6/60/Unilever_Logo.svg',
                            'link' => '/case-studies/unilever',
                            'image' => 'https://images.unsplash.com/photo-1557838923-2985c318be48?w=600&h=400&fit=crop'
                        ]
                    ],
                    'showNewsletter' => true,
                    'newsletter' => [
                        'title' => 'Client Success Stories',
                        'description' => 'Subscribe to receive case studies, success stories, and client insights delivered to your inbox.',
                        'disclaimer' => 'No spam, unsubscribe anytime. Get 1-2 emails per month.',
                        'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 491,
                'section_key' => 'internationalClients',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => 'Global Clients',
                    'title' => [
                        'prefix' => 'Trusted by',
                        'highlight' => '500+ Companies',
                        'suffix' => 'Worldwide'
                    ],
                    'description' => 'From global enterprises to innovative startups, organizations around the world rely on SupplyChainPro to optimize their supply chain operations.',
                    'heroImage' => 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&h=500&fit=crop',
                    'autoPlayCarousel' => true,
                    'tabs' => [
                        ['id' => 'all', 'label' => 'All Clients', 'icon' => 'users'],
                        ['id' => 'map', 'label' => 'Global Map', 'icon' => 'map'],
                        ['id' => 'stories', 'label' => 'Success Stories', 'icon' => 'quote'],
                        ['id' => 'favorites', 'label' => 'Favorites', 'icon' => 'heart']
                    ],
                    'regions' => [
                        ['id' => 'all', 'label' => 'All Regions', 'icon' => 'globe'],
                        ['id' => 'north-america', 'label' => 'North America', 'icon' => 'globe'],
                        ['id' => 'europe', 'label' => 'Europe', 'icon' => 'globe'],
                        ['id' => 'asia-pacific', 'label' => 'Asia Pacific', 'icon' => 'globe'],
                        ['id' => 'latin-america', 'label' => 'Latin America', 'icon' => 'globe'],
                        ['id' => 'middle-east', 'label' => 'Middle East', 'icon' => 'globe'],
                        ['id' => 'africa', 'label' => 'Africa', 'icon' => 'globe']
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
                        ['value' => '500+', 'label' => 'Global Clients', 'icon' => 'users'],
                        ['value' => '45+', 'label' => 'Countries', 'icon' => 'globe'],
                        ['value' => '6', 'label' => 'Continents', 'icon' => 'globe'],
                        ['value' => '98%', 'label' => 'Client Retention', 'icon' => 'star']
                    ],
                    'clients' => [
                        [
                            'id' => 'walmart',
                            'name' => 'Walmart',
                            'industry' => 'retail',
                            'segment' => 'enterprise',
                            'region' => 'north-america',
                            'city' => 'Bentonville',
                            'country' => 'USA',
                            'description' => 'Global retail corporation operating a chain of hypermarkets, discount department stores, and grocery stores.',
                            'testimonial' => [
                                'text' => 'SupplyChainPro has revolutionized our inventory management, reducing stockouts by 35% and improving delivery times significantly.',
                                'author' => 'John Smith',
                                'title' => 'VP of Supply Chain'
                            ],
                            'metrics' => [
                                ['value' => '35%', 'label' => 'Stockout Reduction'],
                                ['value' => '25%', 'label' => 'Inventory Savings'],
                                ['value' => '99%', 'label' => 'OTD Performance']
                            ],
                            'tags' => ['retail', 'inventory', 'logistics'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_logo.svg',
                            'link' => '/case-studies/walmart',
                            'image' => 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=600&h=400&fit=crop',
                            'isFeatured' => true,
                            'mapX' => 320,
                            'mapY' => 260
                        ],
                        [
                            'id' => 'toyota',
                            'name' => 'Toyota',
                            'industry' => 'automotive',
                            'segment' => 'enterprise',
                            'region' => 'asia-pacific',
                            'city' => 'Toyota City',
                            'country' => 'Japan',
                            'description' => 'Japanese automotive manufacturer known for its innovative production system and global supply chain excellence.',
                            'testimonial' => [
                                'text' => 'The visibility provided by SupplyChainPro has transformed our just-in-time inventory management across 50+ manufacturing facilities.',
                                'author' => 'Kenji Tanaka',
                                'title' => 'Supply Chain Director'
                            ],
                            'metrics' => [
                                ['value' => '28%', 'label' => 'WIP Reduction'],
                                ['value' => '40%', 'label' => 'Lead Time Drop'],
                                ['value' => '100%', 'label' => 'Traceability']
                            ],
                            'tags' => ['automotive', 'jit', 'manufacturing'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_carlogo.svg',
                            'link' => '/case-studies/toyota',
                            'image' => 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600&h=400&fit=crop',
                            'isFeatured' => true,
                            'mapX' => 880,
                            'mapY' => 290
                        ],
                        [
                            'id' => 'nestle',
                            'name' => 'Nestlé',
                            'industry' => 'consumer-goods',
                            'segment' => 'enterprise',
                            'region' => 'europe',
                            'city' => 'Vevey',
                            'country' => 'Switzerland',
                            'description' => 'Swiss multinational food and drink processing conglomerate with operations in 186 countries.',
                            'testimonial' => [
                                'text' => 'SupplyChainPro\'s demand forecasting has improved our accuracy by 45%, significantly reducing waste and optimizing inventory.',
                                'author' => 'Maria Garcia',
                                'title' => 'Global Supply Chain Lead'
                            ],
                            'metrics' => [
                                ['value' => '45%', 'label' => 'Forecast Accuracy'],
                                ['value' => '30%', 'label' => 'Waste Reduction'],
                                ['value' => '15%', 'label' => 'Cost Savings']
                            ],
                            'tags' => ['consumer goods', 'demand planning', 'forecasting'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Nestl%C3%A9_Logo_2.svg',
                            'link' => '/case-studies/nestle',
                            'image' => 'https://images.unsplash.com/photo-1488229297570-58520851e868?w=600&h=400&fit=crop',
                            'mapX' => 530,
                            'mapY' => 290
                        ],
                        [
                            'id' => 'johnson-johnson',
                            'name' => 'Johnson & Johnson',
                            'industry' => 'healthcare',
                            'segment' => 'enterprise',
                            'region' => 'north-america',
                            'city' => 'New Brunswick',
                            'country' => 'USA',
                            'description' => 'American multinational corporation developing medical devices, pharmaceuticals, and consumer goods.',
                            'testimonial' => [
                                'text' => 'The cold chain monitoring capabilities have ensured 100% compliance and product integrity across our global distribution network.',
                                'author' => 'Sarah Williams',
                                'title' => 'Global Logistics Director'
                            ],
                            'metrics' => [
                                ['value' => '100%', 'label' => 'Compliance'],
                                ['value' => '20%', 'label' => 'Transport Savings'],
                                ['value' => '99.9%', 'label' => 'Product Integrity']
                            ],
                            'tags' => ['healthcare', 'cold chain', 'compliance'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/4/43/Johnson_%26_Johnson_Logo.svg',
                            'link' => '/case-studies/johnson-johnson',
                            'image' => 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop',
                            'mapX' => 280,
                            'mapY' => 240
                        ],
                        [
                            'id' => 'dhl',
                            'name' => 'DHL',
                            'industry' => 'logistics',
                            'segment' => 'enterprise',
                            'region' => 'europe',
                            'city' => 'Bonn',
                            'country' => 'Germany',
                            'description' => 'Global logistics company providing international express mail services, freight transport, and supply chain solutions.',
                            'testimonial' => [
                                'text' => 'The warehouse optimization features have increased our throughput by 40% while reducing operational costs.',
                                'author' => 'Hans Weber',
                                'title' => 'Operations Director'
                            ],
                            'metrics' => [
                                ['value' => '40%', 'label' => 'Throughput Increase'],
                                ['value' => '25%', 'label' => 'Cost Reduction'],
                                ['value' => '99.5%', 'label' => 'Accuracy']
                            ],
                            'tags' => ['logistics', 'warehouse', 'transportation'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/a/ac/DHL_Logo.svg',
                            'link' => '/case-studies/dhl',
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
                            'mapX' => 540,
                            'mapY' => 290
                        ],
                        [
                            'id' => 'unilever',
                            'name' => 'Unilever',
                            'industry' => 'consumer-goods',
                            'segment' => 'enterprise',
                            'region' => 'europe',
                            'city' => 'London',
                            'country' => 'UK',
                            'description' => 'British multinational consumer goods company with products in food, beverages, cleaning agents, and personal care.',
                            'testimonial' => [
                                'text' => 'Sustainability tracking capabilities have helped us reduce carbon emissions by 25% across our supply chain.',
                                'author' => 'Emma Thompson',
                                'title' => 'Sustainability Director'
                            ],
                            'metrics' => [
                                ['value' => '25%', 'label' => 'Carbon Reduction'],
                                ['value' => '30%', 'label' => 'Efficiency Gain'],
                                ['value' => '95%', 'label' => 'Supplier Compliance']
                            ],
                            'tags' => ['consumer goods', 'sustainability', 'compliance'],
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/6/60/Unilever_Logo.svg',
                            'link' => '/case-studies/unilever',
                            'image' => 'https://images.unsplash.com/photo-1557838923-2985c318be48?w=600&h=400&fit=crop',
                            'mapX' => 510,
                            'mapY' => 280
                        ]
                    ],
                    'successStories' => [
                        [
                            'company' => 'Walmart',
                            'industry' => 'Retail',
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_logo.svg',
                            'quote' => 'SupplyChainPro has revolutionized our inventory management, reducing stockouts by 35% and improving delivery times significantly.',
                            'author' => 'John Smith',
                            'title' => 'VP of Supply Chain',
                            'metrics' => [
                                ['value' => '35%', 'label' => 'Stockout Reduction'],
                                ['value' => '25%', 'label' => 'Inventory Savings'],
                                ['value' => '99%', 'label' => 'OTD Performance']
                            ],
                            'image' => 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=600&h=400&fit=crop'
                        ],
                        [
                            'company' => 'Toyota',
                            'industry' => 'Automotive',
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_carlogo.svg',
                            'quote' => 'The visibility provided by SupplyChainPro has transformed our just-in-time inventory management across 50+ manufacturing facilities.',
                            'author' => 'Kenji Tanaka',
                            'title' => 'Supply Chain Director',
                            'metrics' => [
                                ['value' => '28%', 'label' => 'WIP Reduction'],
                                ['value' => '40%', 'label' => 'Lead Time Drop'],
                                ['value' => '100%', 'label' => 'Traceability']
                            ],
                            'image' => 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600&h=400&fit=crop'
                        ],
                        [
                            'company' => 'Nestlé',
                            'industry' => 'Consumer Goods',
                            'logo' => 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Nestl%C3%A9_Logo_2.svg',
                            'quote' => 'SupplyChainPro\'s demand forecasting has improved our accuracy by 45%, significantly reducing waste and optimizing inventory.',
                            'author' => 'Maria Garcia',
                            'title' => 'Global Supply Chain Lead',
                            'metrics' => [
                                ['value' => '45%', 'label' => 'Forecast Accuracy'],
                                ['value' => '30%', 'label' => 'Waste Reduction'],
                                ['value' => '15%', 'label' => 'Cost Savings']
                            ],
                            'image' => 'https://images.unsplash.com/photo-1488229297570-58520851e868?w=600&h=400&fit=crop'
                        ]
                    ],
                    'showNewsletter' => true,
                    'newsletter' => [
                        'title' => 'Client Success Stories',
                        'description' => 'Subscribe to receive case studies, success stories, and client insights delivered to your inbox.',
                        'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 492,
                'section_key' => 'internationalClients',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],


            // Language Support Section
            [
                'id' => 493,
                'section_key' => 'languageSupport',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => 'Language Support',
                    'title' => [
                        'prefix' => 'Support in Your',
                        'highlight' => 'Language'
                    ],
                    'description' => 'Get personalized support in your preferred language. Our multilingual team is ready to assist you with native-level fluency.',
                    'heroImage' => 'https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?w=1200&h=500&fit=crop',
                    'searchPlaceholder' => 'Search by language name, native name, or region...',
                    'regions' => [
                        ['id' => 'all', 'label' => 'All Regions', 'icon' => 'globe'],
                        ['id' => 'north-america', 'label' => 'North America', 'icon' => 'globe'],
                        ['id' => 'europe', 'label' => 'Europe', 'icon' => 'globe'],
                        ['id' => 'asia-pacific', 'label' => 'Asia Pacific', 'icon' => 'globe'],
                        ['id' => 'latin-america', 'label' => 'Latin America', 'icon' => 'globe'],
                        ['id' => 'middle-east', 'label' => 'Middle East', 'icon' => 'globe'],
                        ['id' => 'africa', 'label' => 'Africa', 'icon' => 'globe']
                    ],
                    'stats' => [
                        ['value' => '15+', 'label' => 'Languages Supported', 'icon' => 'translate'],
                        ['value' => '24/7', 'label' => 'Global Support', 'icon' => 'clock'],
                        ['value' => '30min', 'label' => 'Avg Response Time', 'icon' => 'clock'],
                        ['value' => '98%', 'label' => 'Customer Satisfaction', 'icon' => 'star']
                    ],
                    'languages' => [
                        [
                            'id' => 'english',
                            'name' => 'English',
                            'nativeName' => 'English',
                            'flag' => '🇺🇸',
                            'code' => 'en',
                            'regions' => ['north-america', 'europe', 'asia-pacific', 'africa'],
                            'supportLevel' => 'Full',
                            'responseTime' => '< 1 hour',
                            'teamSize' => 50,
                            'docsLink' => 'https://docs.supplychainpro.com/en',
                            'supportChannels' => [
                                ['icon' => 'phone', 'name' => 'Phone Support', 'details' => '24/7'],
                                ['icon' => 'chat', 'name' => 'Live Chat', 'details' => 'Instant'],
                                ['icon' => 'mail', 'name' => 'Email Support', 'details' => '< 1 hour']
                            ],
                            'isFeatured' => true,
                            'image' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'spanish',
                            'name' => 'Spanish',
                            'nativeName' => 'Español',
                            'flag' => '🇪🇸',
                            'code' => 'es',
                            'regions' => ['europe', 'latin-america'],
                            'supportLevel' => 'Full',
                            'responseTime' => '< 1 hour',
                            'teamSize' => 35,
                            'docsLink' => 'https://docs.supplychainpro.com/es',
                            'supportChannels' => [
                                ['icon' => 'phone', 'name' => 'Phone Support', 'details' => '24/7'],
                                ['icon' => 'chat', 'name' => 'Live Chat', 'details' => 'Instant'],
                                ['icon' => 'mail', 'name' => 'Email Support', 'details' => '< 1 hour']
                            ],
                            'image' => 'https://images.unsplash.com/photo-1494783367193-149034c05e8f?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'french',
                            'name' => 'French',
                            'nativeName' => 'Français',
                            'flag' => '🇫🇷',
                            'code' => 'fr',
                            'regions' => ['europe', 'africa'],
                            'supportLevel' => 'Full',
                            'responseTime' => '< 1 hour',
                            'teamSize' => 30,
                            'docsLink' => 'https://docs.supplychainpro.com/fr',
                            'supportChannels' => [
                                ['icon' => 'phone', 'name' => 'Phone Support', 'details' => '24/7'],
                                ['icon' => 'chat', 'name' => 'Live Chat', 'details' => 'Instant'],
                                ['icon' => 'mail', 'name' => 'Email Support', 'details' => '< 1 hour']
                            ],
                            'image' => 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'german',
                            'name' => 'German',
                            'nativeName' => 'Deutsch',
                            'flag' => '🇩🇪',
                            'code' => 'de',
                            'regions' => ['europe'],
                            'supportLevel' => 'Full',
                            'responseTime' => '< 1 hour',
                            'teamSize' => 25,
                            'docsLink' => 'https://docs.supplychainpro.com/de',
                            'supportChannels' => [
                                ['icon' => 'phone', 'name' => 'Phone Support', 'details' => '24/7'],
                                ['icon' => 'chat', 'name' => 'Live Chat', 'details' => 'Instant'],
                                ['icon' => 'mail', 'name' => 'Email Support', 'details' => '< 1 hour']
                            ],
                            'image' => 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'mandarin',
                            'name' => 'Mandarin',
                            'nativeName' => '中文',
                            'flag' => '🇨🇳',
                            'code' => 'zh',
                            'regions' => ['asia-pacific'],
                            'supportLevel' => 'Full',
                            'responseTime' => '< 2 hours',
                            'teamSize' => 40,
                            'docsLink' => 'https://docs.supplychainpro.com/zh',
                            'supportChannels' => [
                                ['icon' => 'phone', 'name' => 'Phone Support', 'details' => '24/7'],
                                ['icon' => 'chat', 'name' => 'Live Chat', 'details' => '< 5 min'],
                                ['icon' => 'mail', 'name' => 'Email Support', 'details' => '< 2 hours']
                            ],
                            'image' => 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'japanese',
                            'name' => 'Japanese',
                            'nativeName' => '日本語',
                            'flag' => '🇯🇵',
                            'code' => 'ja',
                            'regions' => ['asia-pacific'],
                            'supportLevel' => 'Full',
                            'responseTime' => '< 1 hour',
                            'teamSize' => 20,
                            'docsLink' => 'https://docs.supplychainpro.com/ja',
                            'supportChannels' => [
                                ['icon' => 'phone', 'name' => 'Phone Support', 'details' => '24/7'],
                                ['icon' => 'chat', 'name' => 'Live Chat', 'details' => 'Instant'],
                                ['icon' => 'mail', 'name' => 'Email Support', 'details' => '< 1 hour']
                            ],
                            'image' => 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'arabic',
                            'name' => 'Arabic',
                            'nativeName' => 'العربية',
                            'flag' => '🇦🇪',
                            'code' => 'ar',
                            'regions' => ['middle-east', 'africa'],
                            'supportLevel' => 'Full',
                            'responseTime' => '< 2 hours',
                            'teamSize' => 25,
                            'docsLink' => 'https://docs.supplychainpro.com/ar',
                            'supportChannels' => [
                                ['icon' => 'phone', 'name' => 'Phone Support', 'details' => '24/7'],
                                ['icon' => 'chat', 'name' => 'Live Chat', 'details' => '< 5 min'],
                                ['icon' => 'mail', 'name' => 'Email Support', 'details' => '< 2 hours']
                            ],
                            'image' => 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'portuguese',
                            'name' => 'Portuguese',
                            'nativeName' => 'Português',
                            'flag' => '🇧🇷',
                            'code' => 'pt',
                            'regions' => ['europe', 'latin-america'],
                            'supportLevel' => 'Full',
                            'responseTime' => '< 1 hour',
                            'teamSize' => 20,
                            'docsLink' => 'https://docs.supplychainpro.com/pt',
                            'supportChannels' => [
                                ['icon' => 'phone', 'name' => 'Phone Support', 'details' => '24/7'],
                                ['icon' => 'chat', 'name' => 'Live Chat', 'details' => 'Instant'],
                                ['icon' => 'mail', 'name' => 'Email Support', 'details' => '< 1 hour']
                            ],
                            'image' => 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'italian',
                            'name' => 'Italian',
                            'nativeName' => 'Italiano',
                            'flag' => '🇮🇹',
                            'code' => 'it',
                            'regions' => ['europe'],
                            'supportLevel' => 'Full',
                            'responseTime' => '< 1 hour',
                            'teamSize' => 15,
                            'docsLink' => 'https://docs.supplychainpro.com/it',
                            'supportChannels' => [
                                ['icon' => 'phone', 'name' => 'Phone Support', 'details' => '24/7'],
                                ['icon' => 'chat', 'name' => 'Live Chat', 'details' => 'Instant'],
                                ['icon' => 'mail', 'name' => 'Email Support', 'details' => '< 1 hour']
                            ],
                            'image' => 'https://images.unsplash.com/photo-1555971678-5a7c6a149b6d?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'korean',
                            'name' => 'Korean',
                            'nativeName' => '한국어',
                            'flag' => '🇰🇷',
                            'code' => 'ko',
                            'regions' => ['asia-pacific'],
                            'supportLevel' => 'Full',
                            'responseTime' => '< 1 hour',
                            'teamSize' => 15,
                            'docsLink' => 'https://docs.supplychainpro.com/ko',
                            'supportChannels' => [
                                ['icon' => 'phone', 'name' => 'Phone Support', 'details' => '24/7'],
                                ['icon' => 'chat', 'name' => 'Live Chat', 'details' => 'Instant'],
                                ['icon' => 'mail', 'name' => 'Email Support', 'details' => '< 1 hour']
                            ],
                            'image' => 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=600&h=400&fit=crop'
                        ]
                    ],
                    'translationTitle' => 'Need Translation Services?',
                    'translationDescription' => 'We offer professional translation services for documentation, training materials, and support resources in all supported languages.',
                    'translationLink' => '/translation-services',
                    'translationImage' => 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&h=400&fit=crop',
                    'showNewsletter' => true,
                    'newsletter' => [
                        'title' => 'Language Support Updates',
                        'description' => 'Subscribe to receive updates about new language support, translated resources, and localization news.',
                        'disclaimer' => 'No spam, unsubscribe anytime. Get 1-2 emails per month.',
                        'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 494,
                'section_key' => 'languageSupport',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => 'Language Support',
                    'title' => [
                        'prefix' => 'Support in Your',
                        'highlight' => 'Language'
                    ],
                    'description' => 'Get personalized support in your preferred language. Our multilingual team is ready to assist you with native-level fluency.',
                    'heroImage' => 'https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?w=1200&h=500&fit=crop',
                    'searchPlaceholder' => 'Search by language name, native name, or region...',
                    'defaultViewMode' => 'grid',
                    'regions' => [
                        ['id' => 'all', 'label' => 'All Regions', 'icon' => 'globe'],
                        ['id' => 'north-america', 'label' => 'North America', 'icon' => 'globe'],
                        ['id' => 'europe', 'label' => 'Europe', 'icon' => 'globe'],
                        ['id' => 'asia-pacific', 'label' => 'Asia Pacific', 'icon' => 'globe'],
                        ['id' => 'latin-america', 'label' => 'Latin America', 'icon' => 'globe'],
                        ['id' => 'middle-east', 'label' => 'Middle East', 'icon' => 'globe'],
                        ['id' => 'africa', 'label' => 'Africa', 'icon' => 'globe']
                    ],
                    'supportLevels' => [
                        ['id' => 'all', 'label' => 'All Levels'],
                        ['id' => 'Full', 'label' => 'Full Support'],
                        ['id' => 'Limited', 'label' => 'Limited Support'],
                        ['id' => 'Self-Service', 'label' => 'Self-Service']
                    ],
                    'stats' => [
                        ['value' => '15+', 'label' => 'Languages Supported', 'icon' => 'translate', 'trend' => '+3', 'trendUp' => true],
                        ['value' => '24/7', 'label' => 'Global Support', 'icon' => 'clock', 'trend' => 'Always', 'trendUp' => true],
                        ['value' => '35min', 'label' => 'Avg Response Time', 'icon' => 'clock', 'trend' => '-5min', 'trendUp' => true],
                        ['value' => '98%', 'label' => 'Customer Satisfaction', 'icon' => 'star', 'trend' => '+2%', 'trendUp' => true]
                    ],
                    'languages' => [
                        [
                            'id' => 'english',
                            'name' => 'English',
                            'nativeName' => 'English',
                            'flag' => '🇺🇸',
                            'code' => 'en',
                            'regions' => ['north-america', 'europe', 'asia-pacific', 'africa'],
                            'supportLevel' => 'Full',
                            'responseTime' => 30,
                            'teamSize' => 50,
                            'speakers' => '1.5B',
                            'docsLink' => 'https://docs.supplychainpro.com/en',
                            'isFeatured' => true,
                            'supportChannels' => [
                                ['icon' => 'phone', 'name' => 'Phone Support', 'details' => '24/7'],
                                ['icon' => 'chat', 'name' => 'Live Chat', 'details' => 'Instant'],
                                ['icon' => 'mail', 'name' => 'Email Support', 'details' => '< 1 hour']
                            ],
                            'image' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'spanish',
                            'name' => 'Spanish',
                            'nativeName' => 'Español',
                            'flag' => '🇪🇸',
                            'code' => 'es',
                            'regions' => ['europe', 'latin-america'],
                            'supportLevel' => 'Full',
                            'responseTime' => 35,
                            'teamSize' => 35,
                            'speakers' => '500M',
                            'docsLink' => 'https://docs.supplychainpro.com/es',
                            'isFeatured' => true,
                            'supportChannels' => [
                                ['icon' => 'phone', 'name' => 'Phone Support', 'details' => '24/7'],
                                ['icon' => 'chat', 'name' => 'Live Chat', 'details' => 'Instant'],
                                ['icon' => 'mail', 'name' => 'Email Support', 'details' => '< 1 hour']
                            ],
                            'image' => 'https://images.unsplash.com/photo-1494783367193-149034c05e8f?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'french',
                            'name' => 'French',
                            'nativeName' => 'Français',
                            'flag' => '🇫🇷',
                            'code' => 'fr',
                            'regions' => ['europe', 'africa'],
                            'supportLevel' => 'Full',
                            'responseTime' => 40,
                            'teamSize' => 30,
                            'speakers' => '300M',
                            'docsLink' => 'https://docs.supplychainpro.com/fr',
                            'supportChannels' => [
                                ['icon' => 'phone', 'name' => 'Phone Support', 'details' => '24/7'],
                                ['icon' => 'chat', 'name' => 'Live Chat', 'details' => 'Instant'],
                                ['icon' => 'mail', 'name' => 'Email Support', 'details' => '< 1 hour']
                            ],
                            'image' => 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'german',
                            'name' => 'German',
                            'nativeName' => 'Deutsch',
                            'flag' => '🇩🇪',
                            'code' => 'de',
                            'regions' => ['europe'],
                            'supportLevel' => 'Full',
                            'responseTime' => 35,
                            'teamSize' => 25,
                            'speakers' => '200M',
                            'docsLink' => 'https://docs.supplychainpro.com/de',
                            'supportChannels' => [
                                ['icon' => 'phone', 'name' => 'Phone Support', 'details' => '24/7'],
                                ['icon' => 'chat', 'name' => 'Live Chat', 'details' => 'Instant'],
                                ['icon' => 'mail', 'name' => 'Email Support', 'details' => '< 1 hour']
                            ],
                            'image' => 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'mandarin',
                            'name' => 'Mandarin',
                            'nativeName' => '中文',
                            'flag' => '🇨🇳',
                            'code' => 'zh',
                            'regions' => ['asia-pacific'],
                            'supportLevel' => 'Full',
                            'responseTime' => 90,
                            'teamSize' => 40,
                            'speakers' => '1.2B',
                            'docsLink' => 'https://docs.supplychainpro.com/zh',
                            'supportChannels' => [
                                ['icon' => 'phone', 'name' => 'Phone Support', 'details' => '24/7'],
                                ['icon' => 'chat', 'name' => 'Live Chat', 'details' => '< 5 min'],
                                ['icon' => 'mail', 'name' => 'Email Support', 'details' => '< 2 hours']
                            ],
                            'image' => 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'japanese',
                            'name' => 'Japanese',
                            'nativeName' => '日本語',
                            'flag' => '🇯🇵',
                            'code' => 'ja',
                            'regions' => ['asia-pacific'],
                            'supportLevel' => 'Full',
                            'responseTime' => 45,
                            'teamSize' => 20,
                            'speakers' => '125M',
                            'docsLink' => 'https://docs.supplychainpro.com/ja',
                            'supportChannels' => [
                                ['icon' => 'phone', 'name' => 'Phone Support', 'details' => '24/7'],
                                ['icon' => 'chat', 'name' => 'Live Chat', 'details' => 'Instant'],
                                ['icon' => 'mail', 'name' => 'Email Support', 'details' => '< 1 hour']
                            ],
                            'image' => 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'arabic',
                            'name' => 'Arabic',
                            'nativeName' => 'العربية',
                            'flag' => '🇦🇪',
                            'code' => 'ar',
                            'regions' => ['middle-east', 'africa'],
                            'supportLevel' => 'Full',
                            'responseTime' => 90,
                            'teamSize' => 25,
                            'speakers' => '400M',
                            'docsLink' => 'https://docs.supplychainpro.com/ar',
                            'supportChannels' => [
                                ['icon' => 'phone', 'name' => 'Phone Support', 'details' => '24/7'],
                                ['icon' => 'chat', 'name' => 'Live Chat', 'details' => '< 5 min'],
                                ['icon' => 'mail', 'name' => 'Email Support', 'details' => '< 2 hours']
                            ],
                            'image' => 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&h=400&fit=crop'
                        ],
                        [
                            'id' => 'portuguese',
                            'name' => 'Portuguese',
                            'nativeName' => 'Português',
                            'flag' => '🇧🇷',
                            'code' => 'pt',
                            'regions' => ['europe', 'latin-america'],
                            'supportLevel' => 'Full',
                            'responseTime' => 40,
                            'teamSize' => 20,
                            'speakers' => '250M',
                            'docsLink' => 'https://docs.supplychainpro.com/pt',
                            'supportChannels' => [
                                ['icon' => 'phone', 'name' => 'Phone Support', 'details' => '24/7'],
                                ['icon' => 'chat', 'name' => 'Live Chat', 'details' => 'Instant'],
                                ['icon' => 'mail', 'name' => 'Email Support', 'details' => '< 1 hour']
                            ],
                            'image' => 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=600&h=400&fit=crop'
                        ]
                    ],
                    'showNewsletter' => true,
                    'newsletter' => [
                        'title' => 'Language Support Updates',
                        'description' => 'Subscribe to receive updates about new language support, translated resources, and localization news.',
                        'disclaimer' => 'No spam, unsubscribe anytime. Get 1-2 emails per month.',
                        'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 495,
                'section_key' => 'languageSupport',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => 'Global Language Hub',
                    'title' => [
                        'prefix' => 'Support in Your',
                        'highlight' => 'Language'
                    ],
                    'description' => 'Get personalized support in your preferred language. Our multilingual team is ready to assist you with native-level fluency.',
                    'heroImage' => 'https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?w=1200&h=500&fit=crop',
                    'stats' => [
                        ['value' => '15+', 'label' => 'Languages Supported', 'icon' => 'translate'],
                        ['value' => '24/7', 'label' => 'Global Support', 'icon' => 'clock'],
                        ['value' => '35min', 'label' => 'Avg Response Time', 'icon' => 'clock'],
                        ['value' => '98%', 'label' => 'Customer Satisfaction', 'icon' => 'star']
                    ],
                    'languageFeatures' => [
                        ['title' => 'Real-time Translation', 'description' => 'Instant translation for support conversations', 'icon' => 'translate', 'gradient' => 'from-blue-500 to-blue-600', 'image' => 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=600&h=400&fit=crop'],
                        ['title' => 'Native Speaking Agents', 'description' => 'Support in your preferred language', 'icon' => 'microphone', 'gradient' => 'from-emerald-500 to-emerald-600', 'image' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop'],
                        ['title' => 'Localized Documentation', 'description' => 'Documentation in 15+ languages', 'icon' => 'document', 'gradient' => 'from-purple-500 to-purple-600', 'image' => 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop'],
                        ['title' => '24/7 Multilingual Support', 'description' => 'Round-the-clock assistance', 'icon' => 'clock', 'gradient' => 'from-orange-500 to-orange-600', 'image' => 'https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=600&h=400&fit=crop']
                    ],
                    'languages' => [
                        ['id' => 'english', 'name' => 'English', 'nativeName' => 'English', 'flag' => '🇺🇸', 'code' => 'en', 'regions' => ['north-america', 'europe', 'asia-pacific', 'africa'], 'supportLevel' => 'Full', 'responseTime' => 30, 'teamSize' => 50, 'speakers' => '1.5B', 'isFeatured' => true, 'image' => 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop'],
                        ['id' => 'spanish', 'name' => 'Spanish', 'nativeName' => 'Español', 'flag' => '🇪🇸', 'code' => 'es', 'regions' => ['europe', 'latin-america'], 'supportLevel' => 'Full', 'responseTime' => 35, 'teamSize' => 35, 'speakers' => '500M', 'isFeatured' => true, 'image' => 'https://images.unsplash.com/photo-1494783367193-149034c05e8f?w=600&h=400&fit=crop'],
                        ['id' => 'french', 'name' => 'French', 'nativeName' => 'Français', 'flag' => '🇫🇷', 'code' => 'fr', 'regions' => ['europe', 'africa'], 'supportLevel' => 'Full', 'responseTime' => 40, 'teamSize' => 30, 'speakers' => '300M', 'image' => 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&h=400&fit=crop'],
                        ['id' => 'german', 'name' => 'German', 'nativeName' => 'Deutsch', 'flag' => '🇩🇪', 'code' => 'de', 'regions' => ['europe'], 'supportLevel' => 'Full', 'responseTime' => 35, 'teamSize' => 25, 'speakers' => '200M', 'image' => 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&h=400&fit=crop'],
                        ['id' => 'mandarin', 'name' => 'Mandarin', 'nativeName' => '中文', 'flag' => '🇨🇳', 'code' => 'zh', 'regions' => ['asia-pacific'], 'supportLevel' => 'Full', 'responseTime' => 90, 'teamSize' => 40, 'speakers' => '1.2B', 'image' => 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=600&h=400&fit=crop'],
                        ['id' => 'japanese', 'name' => 'Japanese', 'nativeName' => '日本語', 'flag' => '🇯🇵', 'code' => 'ja', 'regions' => ['asia-pacific'], 'supportLevel' => 'Full', 'responseTime' => 45, 'teamSize' => 20, 'speakers' => '125M', 'image' => 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&h=400&fit=crop'],
                        ['id' => 'arabic', 'name' => 'Arabic', 'nativeName' => 'العربية', 'flag' => '🇦🇪', 'code' => 'ar', 'regions' => ['middle-east', 'africa'], 'supportLevel' => 'Full', 'responseTime' => 90, 'teamSize' => 25, 'speakers' => '400M', 'image' => 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&h=400&fit=crop'],
                        ['id' => 'portuguese', 'name' => 'Portuguese', 'nativeName' => 'Português', 'flag' => '🇧🇷', 'code' => 'pt', 'regions' => ['europe', 'latin-america'], 'supportLevel' => 'Full', 'responseTime' => 40, 'teamSize' => 20, 'speakers' => '250M', 'image' => 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=600&h=400&fit=crop']
                    ],
                    'regions' => [
                        ['id' => 'all', 'label' => 'All Regions', 'icon' => 'globe'],
                        ['id' => 'north-america', 'label' => 'North America', 'icon' => 'globe'],
                        ['id' => 'europe', 'label' => 'Europe', 'icon' => 'globe'],
                        ['id' => 'asia-pacific', 'label' => 'Asia Pacific', 'icon' => 'globe'],
                        ['id' => 'latin-america', 'label' => 'Latin America', 'icon' => 'globe'],
                        ['id' => 'middle-east', 'label' => 'Middle East', 'icon' => 'globe'],
                        ['id' => 'africa', 'label' => 'Africa', 'icon' => 'globe']
                    ],
                    'autoPlayCarousel' => true,
                    'ctaLink' => '/translation-services',
                    'showNewsletter' => true,
                    'newsletter' => [
                        'title' => 'Language Support Updates',
                        'description' => 'Subscribe to receive updates about new language support, translated resources, and localization news.',
                        'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 496,
                'section_key' => 'languageSupport',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],


            // Currency Support Section
            [
                'id' => 497,
                'section_key' => 'currencySupport',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => 'Currency Support',
                    'title' => [
                        'prefix' => 'Global',
                        'highlight' => 'Currency',
                        'suffix' => 'Support'
                    ],
                    'description' => 'Accept payments and manage transactions in over 50 currencies. Get real-time exchange rates and multi-currency support for global operations.',
                    'heroImage' => 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=500&fit=crop',
                    'stats' => [
                        ['value' => '50+', 'label' => 'Currencies Supported', 'icon' => 'currency-dollar'],
                        ['value' => '150+', 'label' => 'Countries', 'icon' => 'globe'],
                        ['value' => '24/7', 'label' => 'Real-time Rates', 'icon' => 'clock'],
                        ['value' => '99.9%', 'label' => 'Accuracy', 'icon' => 'star']
                    ],
                    'searchPlaceholder' => 'Search by currency name, code, or region...',
                    'baseCurrency' => [
                        'code' => 'USD',
                        'name' => 'US Dollar',
                        'symbol' => '$',
                        'exchangeRate' => 1.00
                    ],
                    'featuredCurrency' => [
                        'code' => 'USD',
                        'name' => 'US Dollar',
                        'symbol' => '$',
                        'description' => 'Our base currency for all transactions. All exchange rates are calculated relative to USD.',
                        'isFeatured' => true,
                        'popularRates' => [
                            ['code' => 'EUR', 'rate' => '0.92'],
                            ['code' => 'GBP', 'rate' => '0.79'],
                            ['code' => 'JPY', 'rate' => '149.50']
                        ],
                        'image' => 'https://images.unsplash.com/photo-1580519542036-c47da8e2e612?w=600&h=400&fit=crop'
                    ],
                    'currencies' => [
                        ['code' => 'USD', 'name' => 'US Dollar', 'symbol' => '$', 'regions' => ['north-america'], 'exchangeRate' => 1.00, 'isFeatured' => true, 'isPopular' => true, 'supportedCountries' => ['United States', 'Puerto Rico', 'Guam', 'American Samoa'], 'lastUpdated' => '2024-03-15', 'image' => 'https://images.unsplash.com/photo-1580519542036-c47da8e2e612?w=400&h=300&fit=crop'],
                        ['code' => 'EUR', 'name' => 'Euro', 'symbol' => '€', 'regions' => ['europe'], 'exchangeRate' => 0.92, 'isPopular' => true, 'supportedCountries' => ['Germany', 'France', 'Italy', 'Spain', 'Netherlands', 'Belgium', 'Ireland', 'Austria', 'Finland', 'Portugal', 'Greece'], 'lastUpdated' => '2024-03-15', 'image' => 'https://images.unsplash.com/photo-1629121492554-f62880d431ce?w=400&h=300&fit=crop'],
                        ['code' => 'GBP', 'name' => 'British Pound', 'symbol' => '£', 'regions' => ['europe'], 'exchangeRate' => 0.79, 'isPopular' => true, 'supportedCountries' => ['United Kingdom', 'Gibraltar', 'Falkland Islands'], 'lastUpdated' => '2024-03-15', 'image' => 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=300&fit=crop'],
                        ['code' => 'JPY', 'name' => 'Japanese Yen', 'symbol' => '¥', 'regions' => ['asia-pacific'], 'exchangeRate' => 149.50, 'isPopular' => true, 'supportedCountries' => ['Japan'], 'lastUpdated' => '2024-03-15', 'image' => 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=300&fit=crop'],
                        ['code' => 'CNY', 'name' => 'Chinese Yuan', 'symbol' => '¥', 'regions' => ['asia-pacific'], 'exchangeRate' => 7.20, 'supportedCountries' => ['China', 'Hong Kong'], 'lastUpdated' => '2024-03-15', 'image' => 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=400&h=300&fit=crop'],
                        ['code' => 'CAD', 'name' => 'Canadian Dollar', 'symbol' => '$', 'regions' => ['north-america'], 'exchangeRate' => 1.35, 'supportedCountries' => ['Canada'], 'lastUpdated' => '2024-03-15', 'image' => 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=400&h=300&fit=crop'],
                        ['code' => 'AUD', 'name' => 'Australian Dollar', 'symbol' => '$', 'regions' => ['asia-pacific'], 'exchangeRate' => 1.52, 'supportedCountries' => ['Australia', 'Christmas Island', 'Cocos Islands', 'Norfolk Island'], 'lastUpdated' => '2024-03-15', 'image' => 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=400&h=300&fit=crop'],
                        ['code' => 'CHF', 'name' => 'Swiss Franc', 'symbol' => 'Fr', 'regions' => ['europe'], 'exchangeRate' => 0.88, 'supportedCountries' => ['Switzerland', 'Liechtenstein'], 'lastUpdated' => '2024-03-15', 'image' => 'https://images.unsplash.com/photo-1528724271083-b4d6e3e7cdc9?w=400&h=300&fit=crop'],
                        ['code' => 'SGD', 'name' => 'Singapore Dollar', 'symbol' => '$', 'regions' => ['asia-pacific'], 'exchangeRate' => 1.34, 'supportedCountries' => ['Singapore'], 'lastUpdated' => '2024-03-15', 'image' => 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400&h=300&fit=crop'],
                        ['code' => 'HKD', 'name' => 'Hong Kong Dollar', 'symbol' => '$', 'regions' => ['asia-pacific'], 'exchangeRate' => 7.82, 'supportedCountries' => ['Hong Kong'], 'lastUpdated' => '2024-03-15', 'image' => 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=400&h=300&fit=crop'],
                        ['code' => 'INR', 'name' => 'Indian Rupee', 'symbol' => '₹', 'regions' => ['asia-pacific'], 'exchangeRate' => 83.10, 'supportedCountries' => ['India'], 'lastUpdated' => '2024-03-15', 'image' => 'https://images.unsplash.com/photo-1529253355930-dbe14d8d46ec?w=400&h=300&fit=crop'],
                        ['code' => 'BRL', 'name' => 'Brazilian Real', 'symbol' => 'R$', 'regions' => ['latin-america'], 'exchangeRate' => 5.00, 'supportedCountries' => ['Brazil'], 'lastUpdated' => '2024-03-15', 'image' => 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=400&h=300&fit=crop']
                    ],
                    'regions' => [
                        ['id' => 'all', 'label' => 'All Regions', 'icon' => 'globe'],
                        ['id' => 'north-america', 'label' => 'North America', 'icon' => 'globe'],
                        ['id' => 'europe', 'label' => 'Europe', 'icon' => 'globe'],
                        ['id' => 'asia-pacific', 'label' => 'Asia Pacific', 'icon' => 'globe'],
                        ['id' => 'latin-america', 'label' => 'Latin America', 'icon' => 'globe'],
                        ['id' => 'middle-east', 'label' => 'Middle East', 'icon' => 'globe'],
                        ['id' => 'africa', 'label' => 'Africa', 'icon' => 'globe']
                    ],
                    'exchangeRatesLink' => '/exchange-rates',
                    'billingTitle' => 'Multi-Currency Billing',
                    'billingDescription' => 'Accept payments and send invoices in your customers\' preferred currency. Reduce friction and improve conversion rates with local currency support.',
                    'billingLink' => '/multi-currency-billing',
                    'billingImage' => 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop',
                    'showNewsletter' => true,
                    'newsletter' => [
                        'title' => 'Currency Rate Updates',
                        'description' => 'Subscribe to receive daily exchange rate updates and multi-currency feature announcements.',
                        'disclaimer' => 'No spam, unsubscribe anytime. Get 1-2 emails per month.',
                        'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 498,
                'section_key' => 'currencySupport',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => 'Currency Support',
                    'title' => [
                        'prefix' => 'Global',
                        'highlight' => 'Currency',
                        'suffix' => 'Support'
                    ],
                    'description' => 'Accept payments and manage transactions in over 50 currencies. Get real-time exchange rates and multi-currency support for global operations.',
                    'heroImage' => 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=500&fit=crop',
                    'stats' => [
                        ['value' => '50+', 'label' => 'Currencies Supported', 'icon' => 'currency-dollar', 'trend' => '+8', 'trendUp' => true],
                        ['value' => '150+', 'label' => 'Countries', 'icon' => 'globe', 'trend' => '+12', 'trendUp' => true],
                        ['value' => '24/7', 'label' => 'Real-time Rates', 'icon' => 'clock', 'trend' => 'Live', 'trendUp' => true],
                        ['value' => '99.9%', 'label' => 'Accuracy', 'icon' => 'star', 'trend' => '99.9%', 'trendUp' => true]
                    ],
                    'searchPlaceholder' => 'Search by currency name, code, or region...',
                    'defaultViewMode' => 'grid',
                    'baseCurrency' => [
                        'code' => 'USD',
                        'name' => 'US Dollar',
                        'symbol' => '$',
                        'exchangeRate' => 1.00
                    ],
                    'currencies' => [
                        ['code' => 'USD', 'name' => 'US Dollar', 'symbol' => '$', 'flag' => '🇺🇸', 'regions' => ['north-america'], 'exchangeRate' => 1.00, 'lastUpdated' => '2024-03-15', 'isBase' => true, 'popularity' => 98, 'status' => 'active', 'supportedCountries' => ['United States', 'Puerto Rico', 'Guam', 'American Samoa'], 'image' => 'https://images.unsplash.com/photo-1580519542036-c47da8e2e612?w=400&h=300&fit=crop'],
                        ['code' => 'EUR', 'name' => 'Euro', 'symbol' => '€', 'flag' => '🇪🇺', 'regions' => ['europe'], 'exchangeRate' => 0.92, 'lastUpdated' => '2024-03-15', 'popularity' => 95, 'status' => 'active', 'supportedCountries' => ['Germany', 'France', 'Italy', 'Spain', 'Netherlands', 'Belgium', 'Ireland', 'Austria', 'Finland', 'Portugal', 'Greece'], 'image' => 'https://images.unsplash.com/photo-1629121492554-f62880d431ce?w=400&h=300&fit=crop'],
                        ['code' => 'GBP', 'name' => 'British Pound', 'symbol' => '£', 'flag' => '🇬🇧', 'regions' => ['europe'], 'exchangeRate' => 0.79, 'lastUpdated' => '2024-03-15', 'popularity' => 92, 'status' => 'active', 'supportedCountries' => ['United Kingdom', 'Gibraltar', 'Falkland Islands'], 'image' => 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=300&fit=crop'],
                        ['code' => 'JPY', 'name' => 'Japanese Yen', 'symbol' => '¥', 'flag' => '🇯🇵', 'regions' => ['asia-pacific'], 'exchangeRate' => 149.50, 'lastUpdated' => '2024-03-15', 'popularity' => 88, 'status' => 'active', 'supportedCountries' => ['Japan'], 'image' => 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=300&fit=crop'],
                        ['code' => 'CNY', 'name' => 'Chinese Yuan', 'symbol' => '¥', 'flag' => '🇨🇳', 'regions' => ['asia-pacific'], 'exchangeRate' => 7.20, 'lastUpdated' => '2024-03-15', 'popularity' => 85, 'status' => 'active', 'supportedCountries' => ['China', 'Hong Kong'], 'image' => 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=400&h=300&fit=crop'],
                        ['code' => 'CAD', 'name' => 'Canadian Dollar', 'symbol' => '$', 'flag' => '🇨🇦', 'regions' => ['north-america'], 'exchangeRate' => 1.35, 'lastUpdated' => '2024-03-15', 'popularity' => 82, 'status' => 'active', 'supportedCountries' => ['Canada'], 'image' => 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=400&h=300&fit=crop'],
                        ['code' => 'AUD', 'name' => 'Australian Dollar', 'symbol' => '$', 'flag' => '🇦🇺', 'regions' => ['asia-pacific'], 'exchangeRate' => 1.52, 'lastUpdated' => '2024-03-15', 'popularity' => 80, 'status' => 'active', 'supportedCountries' => ['Australia', 'Christmas Island'], 'image' => 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=400&h=300&fit=crop'],
                        ['code' => 'CHF', 'name' => 'Swiss Franc', 'symbol' => 'Fr', 'flag' => '🇨🇭', 'regions' => ['europe'], 'exchangeRate' => 0.88, 'lastUpdated' => '2024-03-15', 'popularity' => 78, 'status' => 'active', 'supportedCountries' => ['Switzerland', 'Liechtenstein'], 'image' => 'https://images.unsplash.com/photo-1528724271083-b4d6e3e7cdc9?w=400&h=300&fit=crop'],
                        ['code' => 'SGD', 'name' => 'Singapore Dollar', 'symbol' => '$', 'flag' => '🇸🇬', 'regions' => ['asia-pacific'], 'exchangeRate' => 1.34, 'lastUpdated' => '2024-03-15', 'popularity' => 75, 'status' => 'active', 'supportedCountries' => ['Singapore'], 'image' => 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400&h=300&fit=crop'],
                        ['code' => 'INR', 'name' => 'Indian Rupee', 'symbol' => '₹', 'flag' => '🇮🇳', 'regions' => ['asia-pacific'], 'exchangeRate' => 83.10, 'lastUpdated' => '2024-03-15', 'popularity' => 88, 'status' => 'active', 'supportedCountries' => ['India'], 'image' => 'https://images.unsplash.com/photo-1529253355930-dbe14d8d46ec?w=400&h=300&fit=crop'],
                        ['code' => 'BRL', 'name' => 'Brazilian Real', 'symbol' => 'R$', 'flag' => '🇧🇷', 'regions' => ['latin-america'], 'exchangeRate' => 5.00, 'lastUpdated' => '2024-03-15', 'popularity' => 72, 'status' => 'active', 'supportedCountries' => ['Brazil'], 'image' => 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=400&h=300&fit=crop']
                    ],
                    'regions' => [
                        ['id' => 'all', 'label' => 'All Regions', 'icon' => 'globe'],
                        ['id' => 'north-america', 'label' => 'North America', 'icon' => 'globe'],
                        ['id' => 'europe', 'label' => 'Europe', 'icon' => 'globe'],
                        ['id' => 'asia-pacific', 'label' => 'Asia Pacific', 'icon' => 'globe'],
                        ['id' => 'latin-america', 'label' => 'Latin America', 'icon' => 'globe'],
                        ['id' => 'middle-east', 'label' => 'Middle East', 'icon' => 'globe'],
                        ['id' => 'africa', 'label' => 'Africa', 'icon' => 'globe']
                    ],
                    'billingLink' => '/multi-currency-billing',
                    'showNewsletter' => true,
                    'newsletter' => [
                        'title' => 'Currency Rate Updates',
                        'description' => 'Subscribe to receive daily exchange rate updates and multi-currency feature announcements.',
                        'disclaimer' => 'No spam, unsubscribe anytime. Get 1-2 emails per month.',
                        'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 499,
                'section_key' => 'currencySupport',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => 'Currency Support',
                    'title' => [
                        'prefix' => 'Global',
                        'highlight' => 'Currency',
                        'suffix' => 'Support'
                    ],
                    'description' => 'Accept payments and manage transactions in over 50 currencies. Get real-time exchange rates and multi-currency support for global operations.',
                    'heroImage' => 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=500&fit=crop',
                    'stats' => [
                        ['value' => '50+', 'label' => 'Currencies Supported', 'icon' => 'currency-dollar'],
                        ['value' => '150+', 'label' => 'Countries', 'icon' => 'globe'],
                        ['value' => '24/7', 'label' => 'Real-time Rates', 'icon' => 'clock'],
                        ['value' => '99.9%', 'label' => 'Accuracy', 'icon' => 'star']
                    ],
                    'currencyFeatures' => [
                        ['title' => 'Real-time Exchange Rates', 'description' => 'Live rates updated every minute', 'icon' => 'refresh', 'gradient' => 'from-blue-500 to-blue-600', 'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'],
                        ['title' => 'Multi-currency Billing', 'description' => 'Invoice in your customer\'s currency', 'icon' => 'credit', 'gradient' => 'from-emerald-500 to-emerald-600', 'image' => 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop'],
                        ['title' => 'Automatic Conversion', 'description' => 'Seamless currency conversion', 'icon' => 'refresh', 'gradient' => 'from-purple-500 to-purple-600', 'image' => 'https://images.unsplash.com/photo-1580519542036-c47da8e2e612?w=600&h=400&fit=crop'],
                        ['title' => 'Historical Rate Charts', 'description' => 'Track rate trends over time', 'icon' => 'chart', 'gradient' => 'from-orange-500 to-orange-600', 'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop']
                    ],
                    'currencies' => [
                        ['code' => 'USD', 'name' => 'US Dollar', 'symbol' => '$', 'flag' => '🇺🇸', 'regions' => ['north-america'], 'exchangeRate' => 1.00, 'lastUpdated' => '2024-03-15', 'isBase' => true, 'popularity' => 98, 'status' => 'active', 'isFeatured' => true, 'image' => 'https://images.unsplash.com/photo-1580519542036-c47da8e2e612?w=400&h=300&fit=crop'],
                        ['code' => 'EUR', 'name' => 'Euro', 'symbol' => '€', 'flag' => '🇪🇺', 'regions' => ['europe'], 'exchangeRate' => 0.92, 'lastUpdated' => '2024-03-15', 'popularity' => 95, 'status' => 'active', 'isFeatured' => true, 'image' => 'https://images.unsplash.com/photo-1629121492554-f62880d431ce?w=400&h=300&fit=crop'],
                        ['code' => 'GBP', 'name' => 'British Pound', 'symbol' => '£', 'flag' => '🇬🇧', 'regions' => ['europe'], 'exchangeRate' => 0.79, 'lastUpdated' => '2024-03-15', 'popularity' => 92, 'status' => 'active', 'image' => 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=300&fit=crop'],
                        ['code' => 'JPY', 'name' => 'Japanese Yen', 'symbol' => '¥', 'flag' => '🇯🇵', 'regions' => ['asia-pacific'], 'exchangeRate' => 149.50, 'lastUpdated' => '2024-03-15', 'popularity' => 88, 'status' => 'active', 'image' => 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=300&fit=crop'],
                        ['code' => 'CNY', 'name' => 'Chinese Yuan', 'symbol' => '¥', 'flag' => '🇨🇳', 'regions' => ['asia-pacific'], 'exchangeRate' => 7.20, 'lastUpdated' => '2024-03-15', 'popularity' => 85, 'status' => 'active', 'image' => 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=400&h=300&fit=crop'],
                        ['code' => 'CAD', 'name' => 'Canadian Dollar', 'symbol' => '$', 'flag' => '🇨🇦', 'regions' => ['north-america'], 'exchangeRate' => 1.35, 'lastUpdated' => '2024-03-15', 'popularity' => 82, 'status' => 'active', 'image' => 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=400&h=300&fit=crop'],
                        ['code' => 'AUD', 'name' => 'Australian Dollar', 'symbol' => '$', 'flag' => '🇦🇺', 'regions' => ['asia-pacific'], 'exchangeRate' => 1.52, 'lastUpdated' => '2024-03-15', 'popularity' => 80, 'status' => 'active', 'image' => 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=400&h=300&fit=crop'],
                        ['code' => 'CHF', 'name' => 'Swiss Franc', 'symbol' => 'Fr', 'flag' => '🇨🇭', 'regions' => ['europe'], 'exchangeRate' => 0.88, 'lastUpdated' => '2024-03-15', 'popularity' => 78, 'status' => 'active', 'image' => 'https://images.unsplash.com/photo-1528724271083-b4d6e3e7cdc9?w=400&h=300&fit=crop'],
                        ['code' => 'SGD', 'name' => 'Singapore Dollar', 'symbol' => '$', 'flag' => '🇸🇬', 'regions' => ['asia-pacific'], 'exchangeRate' => 1.34, 'lastUpdated' => '2024-03-15', 'popularity' => 75, 'status' => 'active', 'image' => 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400&h=300&fit=crop'],
                        ['code' => 'INR', 'name' => 'Indian Rupee', 'symbol' => '₹', 'flag' => '🇮🇳', 'regions' => ['asia-pacific'], 'exchangeRate' => 83.10, 'lastUpdated' => '2024-03-15', 'popularity' => 88, 'status' => 'active', 'image' => 'https://images.unsplash.com/photo-1529253355930-dbe14d8d46ec?w=400&h=300&fit=crop'],
                        ['code' => 'BRL', 'name' => 'Brazilian Real', 'symbol' => 'R$', 'flag' => '🇧🇷', 'regions' => ['latin-america'], 'exchangeRate' => 5.00, 'lastUpdated' => '2024-03-15', 'popularity' => 72, 'status' => 'active', 'image' => 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=400&h=300&fit=crop']
                    ],
                    'regions' => [
                        ['id' => 'all', 'label' => 'All Regions', 'icon' => 'globe'],
                        ['id' => 'north-america', 'label' => 'North America', 'icon' => 'globe'],
                        ['id' => 'europe', 'label' => 'Europe', 'icon' => 'globe'],
                        ['id' => 'asia-pacific', 'label' => 'Asia Pacific', 'icon' => 'globe'],
                        ['id' => 'latin-america', 'label' => 'Latin America', 'icon' => 'globe'],
                        ['id' => 'middle-east', 'label' => 'Middle East', 'icon' => 'globe'],
                        ['id' => 'africa', 'label' => 'Africa', 'icon' => 'globe']
                    ],
                    'autoPlayCarousel' => true,
                    'billingLink' => '/multi-currency-billing',
                    'showNewsletter' => true,
                    'newsletter' => [
                        'title' => 'Currency Rate Updates',
                        'description' => 'Subscribe to receive daily exchange rate updates and multi-currency feature announcements.',
                        'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 500,
                'section_key' => 'currencySupport',
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
