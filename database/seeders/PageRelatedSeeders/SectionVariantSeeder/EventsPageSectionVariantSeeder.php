<?php

namespace Database\Seeders\PageRelatedSeeders\SectionVariantSeeder;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EventsPageSectionVariantSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Upsert only this page's variants so other page seeders do not get wiped out.
        $variants = [

            // Upcoming Webinars Variants
            [
                'id' => 617,
                'section_key' => 'upcomingWebinars',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => 'Expert Sessions',
                    'title' => [
                        'prefix' => 'Join Our',
                        'highlight' => 'Live Webinars'
                    ],
                    'description' => 'Learn from industry leaders and gain actionable insights to transform your supply chain operations. Register for free today.',
                    'stats' => [
                        ['value' => '5,000+', 'label' => 'Live Attendees', 'icon' => 'users'],
                        ['value' => '50+', 'label' => 'Expert Speakers', 'icon' => 'academic'],
                        ['value' => '24+', 'label' => 'Sessions Yearly', 'icon' => 'calendar'],
                        ['value' => '100+', 'label' => 'Hours of Content', 'icon' => 'clock']
                    ],
                    'webinars' => [
                        [
                            'id' => 1,
                            'title' => 'Supply Chain Digital Transformation',
                            'description' => 'Learn how leading companies are leveraging digital technologies to transform their supply chain operations.',
                            'longDescription' => 'This comprehensive webinar covers the digital transformation journey of global supply chains. We\'ll explore how technologies like AI, IoT, and blockchain are reshaping logistics, inventory management, and demand forecasting.',
                            'date' => 'May 15, 2024',
                            'time' => '10:00 AM EST',
                            'duration' => '60 min',
                            'category' => 'Digital Transformation',
                            'level' => 'Intermediate',
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
                            'speaker' => [
                                'name' => 'Dr. Sarah Johnson',
                                'title' => 'Chief Supply Chain Officer',
                                'company' => 'Global Logistics Partners',
                                'bio' => 'Dr. Johnson has over 15 years of experience in supply chain digital transformation, leading major initiatives at Fortune 500 companies.',
                                'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop'
                            ],
                            'tags' => ['Digital Transformation', 'AI', 'IoT', 'Blockchain'],
                            'attendees' => 2847,
                            'calendarLinks' => [
                                'google' => 'https://calendar.google.com/calendar/render?action=TEMPLATE',
                                'outlook' => 'https://outlook.live.com/calendar/',
                                'ical' => 'webcal://www.example.com/calendar.ics'
                            ]
                        ],
                        [
                            'id' => 2,
                            'title' => 'Sustainable Supply Chain Strategies',
                            'description' => 'Discover how to reduce carbon footprint while improving efficiency and reducing costs.',
                            'longDescription' => 'Sustainability is no longer optional—it\'s a business imperative. This session explores practical strategies for building a greener supply chain.',
                            'date' => 'May 22, 2024',
                            'time' => '2:00 PM EST',
                            'duration' => '45 min',
                            'category' => 'Sustainability',
                            'level' => 'Beginner',
                            'image' => 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop',
                            'speaker' => [
                                'name' => 'Michael Chen',
                                'title' => 'Sustainability Director',
                                'company' => 'EcoLogistics',
                                'bio' => 'Michael leads sustainability initiatives across global supply chains, helping companies achieve net-zero targets.',
                                'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop'
                            ],
                            'tags' => ['Sustainability', 'Green Logistics', 'Carbon Reduction'],
                            'attendees' => 1892,
                            'calendarLinks' => [
                                'google' => 'https://calendar.google.com/calendar/render?action=TEMPLATE',
                                'outlook' => 'https://outlook.live.com/calendar/'
                            ]
                        ],
                        [
                            'id' => 3,
                            'title' => 'AI in Supply Chain Management',
                            'description' => 'Explore real-world applications of artificial intelligence in demand forecasting and inventory optimization.',
                            'longDescription' => 'AI is revolutionizing supply chain management. This webinar covers practical AI applications, success stories, and implementation strategies.',
                            'date' => 'May 29, 2024',
                            'time' => '11:00 AM EST',
                            'duration' => '60 min',
                            'category' => 'Technology',
                            'level' => 'Advanced',
                            'image' => 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
                            'speaker' => [
                                'name' => 'Emily Rodriguez',
                                'title' => 'AI Solutions Architect',
                                'company' => 'TechSupply AI',
                                'bio' => 'Emily specializes in AI-driven supply chain solutions with expertise in machine learning and predictive analytics.',
                                'avatar' => 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop'
                            ],
                            'tags' => ['AI', 'Machine Learning', 'Predictive Analytics'],
                            'attendees' => 3245,
                            'calendarLinks' => [
                                'google' => 'https://calendar.google.com/calendar/render?action=TEMPLATE',
                                'ical' => 'webcal://www.example.com/calendar.ics'
                            ]
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 618,
                'section_key' => 'upcomingWebinars',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => 'Live & On-Demand',
                    'title' => [
                        'prefix' => 'Knowledge',
                        'highlight' => 'Webinars'
                    ],
                    'description' => 'Join industry experts as they share insights, strategies, and best practices for supply chain excellence. Register for free and elevate your expertise.',
                    'featuredWebinarId' => 1,
                    'stats' => [
                        ['value' => '5,000+', 'label' => 'Live Attendees', 'icon' => 'users', 'trend' => '+25%', 'trendUp' => true],
                        ['value' => '50+', 'label' => 'Expert Speakers', 'icon' => 'academic', 'trend' => 'Global', 'trendUp' => true],
                        ['value' => '24+', 'label' => 'Sessions Yearly', 'icon' => 'calendar', 'trend' => 'Weekly', 'trendUp' => true],
                        ['value' => '100+', 'label' => 'Hours of Content', 'icon' => 'clock', 'trend' => 'Expanding', 'trendUp' => true]
                    ],
                    'webinars' => [
                        [
                            'id' => 1,
                            'title' => 'Supply Chain Digital Transformation',
                            'description' => 'Learn how leading companies are leveraging digital technologies to transform their supply chain operations.',
                            'longDescription' => 'This comprehensive webinar covers the digital transformation journey of global supply chains. We\'ll explore how technologies like AI, IoT, and blockchain are reshaping logistics, inventory management, and demand forecasting.',
                            'date' => 'May 15, 2024',
                            'time' => '10:00 AM EST',
                            'duration' => '60 min',
                            'category' => 'Digital Transformation',
                            'level' => 'Intermediate',
                            'isFeatured' => true,
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
                            'speaker' => [
                                'name' => 'Dr. Sarah Johnson',
                                'title' => 'Chief Supply Chain Officer',
                                'company' => 'Global Logistics Partners',
                                'bio' => 'Dr. Johnson has over 15 years of experience in supply chain digital transformation, leading major initiatives at Fortune 500 companies.',
                                'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop'
                            ],
                            'tags' => ['Digital Transformation', 'AI', 'IoT', 'Blockchain'],
                            'attendees' => 2847,
                            'calendarLinks' => [
                                'google' => 'https://calendar.google.com/calendar/render?action=TEMPLATE',
                                'outlook' => 'https://outlook.live.com/calendar/',
                                'ical' => 'webcal://www.example.com/calendar.ics'
                            ]
                        ],
                        [
                            'id' => 2,
                            'title' => 'Sustainable Supply Chain Strategies',
                            'description' => 'Discover how to reduce carbon footprint while improving efficiency and reducing costs.',
                            'longDescription' => 'Sustainability is no longer optional—it\'s a business imperative. This session explores practical strategies for building a greener supply chain.',
                            'date' => 'May 22, 2024',
                            'time' => '2:00 PM EST',
                            'duration' => '45 min',
                            'category' => 'Sustainability',
                            'level' => 'Beginner',
                            'image' => 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop',
                            'speaker' => [
                                'name' => 'Michael Chen',
                                'title' => 'Sustainability Director',
                                'company' => 'EcoLogistics',
                                'bio' => 'Michael leads sustainability initiatives across global supply chains, helping companies achieve net-zero targets.',
                                'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop'
                            ],
                            'tags' => ['Sustainability', 'Green Logistics', 'Carbon Reduction'],
                            'attendees' => 1892,
                            'calendarLinks' => [
                                'google' => 'https://calendar.google.com/calendar/render?action=TEMPLATE',
                                'outlook' => 'https://outlook.live.com/calendar/'
                            ]
                        ],
                        [
                            'id' => 3,
                            'title' => 'AI in Supply Chain Management',
                            'description' => 'Explore real-world applications of artificial intelligence in demand forecasting and inventory optimization.',
                            'longDescription' => 'AI is revolutionizing supply chain management. This webinar covers practical AI applications, success stories, and implementation strategies.',
                            'date' => 'May 29, 2024',
                            'time' => '11:00 AM EST',
                            'duration' => '60 min',
                            'category' => 'Technology',
                            'level' => 'Advanced',
                            'isFeatured' => true,
                            'image' => 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
                            'speaker' => [
                                'name' => 'Emily Rodriguez',
                                'title' => 'AI Solutions Architect',
                                'company' => 'TechSupply AI',
                                'bio' => 'Emily specializes in AI-driven supply chain solutions with expertise in machine learning and predictive analytics.',
                                'avatar' => 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop'
                            ],
                            'tags' => ['AI', 'Machine Learning', 'Predictive Analytics'],
                            'attendees' => 3245,
                            'calendarLinks' => [
                                'google' => 'https://calendar.google.com/calendar/render?action=TEMPLATE',
                                'ical' => 'webcal://www.example.com/calendar.ics'
                            ]
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 619,
                'section_key' => 'upcomingWebinars',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => 'Live & Interactive',
                    'title' => [
                        'prefix' => 'Expert',
                        'highlight' => 'Webinars'
                    ],
                    'description' => 'Join industry experts as they share insights, strategies, and best practices for supply chain excellence. Live Q&A and certificates included.',
                    'featuredWebinarId' => 1,
                    'stats' => [
                        ['value' => '5,000+', 'label' => 'Live Attendees', 'icon' => 'users', 'trend' => '+25%', 'trendUp' => true],
                        ['value' => '50+', 'label' => 'Expert Speakers', 'icon' => 'academic', 'trend' => 'Global', 'trendUp' => true],
                        ['value' => '24+', 'label' => 'Sessions Yearly', 'icon' => 'calendar', 'trend' => 'Weekly', 'trendUp' => true],
                        ['value' => '100+', 'label' => 'Hours of Content', 'icon' => 'clock', 'trend' => 'Expanding', 'trendUp' => true]
                    ],
                    'webinars' => [
                        [
                            'id' => 1,
                            'title' => 'Supply Chain Digital Transformation',
                            'description' => 'Learn how leading companies are leveraging digital technologies to transform their supply chain operations.',
                            'longDescription' => 'This comprehensive webinar covers the digital transformation journey of global supply chains. We\'ll explore how technologies like AI, IoT, and blockchain are reshaping logistics, inventory management, and demand forecasting. Attendees will leave with a clear roadmap for their own initiatives.',
                            'date' => 'May 15, 2024',
                            'time' => '10:00 AM EST',
                            'duration' => '60 min',
                            'category' => 'Digital Transformation',
                            'level' => 'Intermediate',
                            'isFeatured' => true,
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
                            'videoPreview' => 'https://www.w3schools.com/html/mov_bbb.mp4',
                            'trailerUrl' => 'https://www.w3schools.com/html/mov_bbb.mp4',
                            'speaker' => [
                                'name' => 'Dr. Sarah Johnson',
                                'title' => 'Chief Supply Chain Officer',
                                'company' => 'Global Logistics Partners',
                                'bio' => 'Dr. Johnson has over 15 years of experience in supply chain digital transformation, leading major initiatives at Fortune 500 companies.',
                                'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop',
                                'verified' => true
                            ],
                            'tags' => ['Digital Transformation', 'AI', 'IoT', 'Blockchain'],
                            'attendees' => 2847,
                            'certificateAvailable' => true,
                            'agenda' => [
                                ['time' => '10:00 AM', 'topic' => 'Welcome & Introduction'],
                                ['time' => '10:10 AM', 'topic' => 'Key Digital Transformation Trends'],
                                ['time' => '10:30 AM', 'topic' => 'Case Studies: Success Stories'],
                                ['time' => '10:50 AM', 'topic' => 'Q&A Session']
                            ],
                            'calendarLinks' => [
                                'google' => 'https://calendar.google.com/calendar/render?action=TEMPLATE',
                                'outlook' => 'https://outlook.live.com/calendar/',
                                'ical' => 'webcal://www.example.com/calendar.ics'
                            ]
                        ],
                        [
                            'id' => 2,
                            'title' => 'Sustainable Supply Chain Strategies',
                            'description' => 'Discover how to reduce carbon footprint while improving efficiency and reducing costs.',
                            'longDescription' => 'Sustainability is no longer optional—it\'s a business imperative. This session explores practical strategies for building a greener supply chain, from sustainable sourcing to carbon-neutral logistics.',
                            'date' => 'May 22, 2024',
                            'time' => '2:00 PM EST',
                            'duration' => '45 min',
                            'category' => 'Sustainability',
                            'level' => 'Beginner',
                            'image' => 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop',
                            'speaker' => [
                                'name' => 'Michael Chen',
                                'title' => 'Sustainability Director',
                                'company' => 'EcoLogistics',
                                'bio' => 'Michael leads sustainability initiatives across global supply chains, helping companies achieve net-zero targets.',
                                'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop',
                                'verified' => true
                            ],
                            'tags' => ['Sustainability', 'Green Logistics', 'Carbon Reduction'],
                            'attendees' => 1892,
                            'certificateAvailable' => true,
                            'agenda' => [
                                ['time' => '2:00 PM', 'topic' => 'Introduction to Sustainable Supply Chains'],
                                ['time' => '2:15 PM', 'topic' => 'Carbon Footprint Reduction Strategies'],
                                ['time' => '2:35 PM', 'topic' => 'Case Study: Successful Implementation']
                            ],
                            'calendarLinks' => [
                                'google' => 'https://calendar.google.com/calendar/render?action=TEMPLATE',
                                'outlook' => 'https://outlook.live.com/calendar/'
                            ]
                        ],
                        [
                            'id' => 3,
                            'title' => 'AI in Supply Chain Management',
                            'description' => 'Explore real-world applications of artificial intelligence in demand forecasting and inventory optimization.',
                            'longDescription' => 'AI is revolutionizing supply chain management. This webinar covers practical AI applications, success stories, and implementation strategies for businesses of all sizes.',
                            'date' => 'May 29, 2024',
                            'time' => '11:00 AM EST',
                            'duration' => '60 min',
                            'category' => 'Technology',
                            'level' => 'Advanced',
                            'isFeatured' => true,
                            'image' => 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
                            'videoPreview' => 'https://www.w3schools.com/html/mov_bbb.mp4',
                            'speaker' => [
                                'name' => 'Emily Rodriguez',
                                'title' => 'AI Solutions Architect',
                                'company' => 'TechSupply AI',
                                'bio' => 'Emily specializes in AI-driven supply chain solutions with expertise in machine learning and predictive analytics.',
                                'avatar' => 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop',
                                'verified' => true
                            ],
                            'tags' => ['AI', 'Machine Learning', 'Predictive Analytics'],
                            'attendees' => 3245,
                            'certificateAvailable' => true,
                            'agenda' => [
                                ['time' => '11:00 AM', 'topic' => 'AI in Supply Chain: Overview'],
                                ['time' => '11:20 AM', 'topic' => 'Predictive Analytics for Demand'],
                                ['time' => '11:40 AM', 'topic' => 'Implementation Best Practices']
                            ],
                            'calendarLinks' => [
                                'google' => 'https://calendar.google.com/calendar/render?action=TEMPLATE',
                                'ical' => 'webcal://www.example.com/calendar.ics'
                            ]
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 620,
                'section_key' => 'upcomingWebinars',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],


            // Industry Conferences Variants
            [
                'id' => 621,
                'section_key' => 'industryConferences',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => 'Global Events Hub',
                    'title' => [
                        'prefix' => 'Connect, Learn, and Grow at the',
                        'highlight' => 'World\'s Leading Supply Chain Conferences',
                        'suffix' => ''
                    ],
                    'description' => 'Join thousands of professionals at premier industry events. Gain insights from thought leaders, discover cutting-edge technologies, and build lasting partnerships.',
                    'stats' => [
                        ['value' => '50+', 'label' => 'Global Conferences', 'icon' => 'calendar'],
                        ['value' => '30+', 'label' => 'Countries', 'icon' => 'globe'],
                        ['value' => '100K+', 'label' => 'Annual Attendees', 'icon' => 'users'],
                        ['value' => '1,000+', 'label' => 'Industry Speakers', 'icon' => 'microphone']
                    ],
                    'featuredConferenceId' => 'supply-chain-summit-2024',
                    'tabs' => [
                        ['id' => 'upcoming', 'label' => 'Upcoming Conferences', 'icon' => 'calendar'],
                        ['id' => 'featured', 'label' => 'Featured', 'icon' => 'star'],
                        ['id' => 'past', 'label' => 'Past Events', 'icon' => 'archive']
                    ],
                    'conferences' => [
                        [
                            'id' => 'supply-chain-summit-2024',
                            'title' => 'Global Supply Chain & Logistics Summit 2024',
                            'description' => 'The premier event for supply chain professionals. Explore the latest trends in AI-driven logistics, sustainability, and resilient supply chain networks.',
                            'type' => 'In-Person',
                            'region' => 'North America',
                            'startDate' => '2024-06-15',
                            'endDate' => '2024-06-18',
                            'location' => [
                                'venue' => 'McCormick Place',
                                'city' => 'Chicago',
                                'country' => 'USA'
                            ],
                            'expectedAttendees' => 5000,
                            'speakers' => ['Elon Musk', 'Satya Nadella', 'Mary Barra'],
                            'exhibitors' => 250,
                            'tickets' => [
                                ['type' => 'standard', 'price' => 899, 'earlyBird' => 699],
                                ['type' => 'vip', 'price' => 1499, 'earlyBird' => 1199]
                            ],
                            'website' => 'https://example.com/supply-chain-summit',
                            'image' => 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=500&fit=crop',
                            'agenda' => [
                                'Keynote: The Future of Autonomous Logistics',
                                'Panel: Building a Climate-Resilient Supply Chain',
                                'Workshop: AI and Machine Learning in Demand Forecasting'
                            ],
                            'organizer' => [
                                'name' => 'Supply Chain Media Group',
                                'website' => 'https://example.com/scmg'
                            ],
                            'isFeatured' => true
                        ],
                        [
                            'id' => 'logistics-tech-europe',
                            'title' => 'Logistics Tech Europe 2024',
                            'description' => 'Europe\'s largest gathering of logistics and technology innovators. Focus on digital transformation, smart warehousing, and last-mile delivery.',
                            'type' => 'In-Person',
                            'region' => 'Europe',
                            'startDate' => '2024-09-10',
                            'endDate' => '2024-09-12',
                            'location' => [
                                'venue' => 'Messe Berlin',
                                'city' => 'Berlin',
                                'country' => 'Germany'
                            ],
                            'expectedAttendees' => 3000,
                            'speakers' => [],
                            'exhibitors' => 180,
                            'tickets' => [
                                ['type' => 'standard', 'price' => 750, 'earlyBird' => 550]
                            ],
                            'website' => 'https://example.com/logistics-tech-europe',
                            'image' => 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=800&h=500&fit=crop',
                            'agenda' => [
                                'The Rise of Micro-Fulfillment Centers',
                                'Green Logistics: Reducing Carbon Footprint',
                                'Robotics and Automation in Warehousing'
                            ],
                            'organizer' => [
                                'name' => 'EuroLogistics Events',
                                'website' => 'https://example.com/eu-logistics'
                            ],
                            'isFeatured' => false
                        ],
                        [
                            'id' => 'supply-chain-masters-asia',
                            'title' => 'Supply Chain Masters Asia',
                            'description' => 'Uniting Asian supply chain leaders to discuss the unique challenges and opportunities in the region\'s rapidly evolving markets.',
                            'type' => 'Hybrid',
                            'region' => 'Asia',
                            'startDate' => '2024-11-05',
                            'endDate' => '2024-11-07',
                            'location' => [
                                'venue' => 'Marina Bay Sands',
                                'city' => 'Singapore',
                                'country' => 'Singapore'
                            ],
                            'expectedAttendees' => 2000,
                            'speakers' => [],
                            'exhibitors' => 120,
                            'tickets' => [
                                ['type' => 'standard', 'price' => 650, 'earlyBird' => 450],
                                ['type' => 'online', 'price' => 99, 'earlyBird' => 49]
                            ],
                            'website' => 'https://example.com/scm-asia',
                            'image' => 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800&h=500&fit=crop',
                            'agenda' => [
                                'Cross-Border E-commerce Logistics',
                                'Navigating the Chip Shortage: Strategies for Resilience',
                                'Digital Twins in Supply Chain Planning'
                            ],
                            'organizer' => [
                                'name' => 'Asia Supply Chain Council',
                                'website' => 'https://example.com/ascc'
                            ],
                            'isFeatured' => true
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 622,
                'section_key' => 'industryConferences',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => 'Global Events Hub',
                    'title' => [
                        'prefix' => 'Connect, Learn, and Grow at the',
                        'highlight' => 'World\'s Leading Supply Chain Conferences',
                        'suffix' => ''
                    ],
                    'description' => 'Join thousands of professionals at premier industry events. Gain insights from thought leaders, discover cutting-edge technologies, and build lasting partnerships.',
                    'stats' => [
                        ['value' => '50+', 'label' => 'Global Conferences', 'trend' => '+12 this year', 'trendUp' => true],
                        ['value' => '30+', 'label' => 'Countries', 'trend' => 'Worldwide', 'trendUp' => true],
                        ['value' => '100K+', 'label' => 'Annual Attendees', 'trend' => '+25% YoY', 'trendUp' => true],
                        ['value' => '1,000+', 'label' => 'Industry Speakers', 'trend' => 'From 50+ countries', 'trendUp' => true]
                    ],
                    'featuredConferenceId' => 'supply-chain-summit-2024',
                    'tabs' => [
                        ['id' => 'upcoming', 'label' => 'Upcoming Conferences', 'icon' => 'calendar'],
                        ['id' => 'featured', 'label' => 'Featured', 'icon' => 'star'],
                        ['id' => 'compare', 'label' => 'Compare', 'icon' => 'chart'],
                        ['id' => 'past', 'label' => 'Past Events', 'icon' => 'archive']
                    ],
                    'conferences' => [
                        [
                            'id' => 'supply-chain-summit-2024',
                            'title' => 'Global Supply Chain & Logistics Summit 2024',
                            'description' => 'The premier event for supply chain professionals. Explore the latest trends in AI-driven logistics, sustainability, and resilient supply chain networks.',
                            'type' => 'In-Person',
                            'region' => 'North America',
                            'startDate' => '2024-06-15',
                            'endDate' => '2024-06-18',
                            'location' => [
                                'venue' => 'McCormick Place',
                                'city' => 'Chicago',
                                'country' => 'USA',
                                'address' => '2301 S King Dr, Chicago, IL 60616'
                            ],
                            'expectedAttendees' => 5000,
                            'speakers' => [
                                [
                                    'name' => 'Elon Musk',
                                    'title' => 'CEO',
                                    'company' => 'Tesla',
                                    'bio' => 'Visionary entrepreneur leading the electric vehicle revolution.',
                                    'session' => 'Keynote: The Future of Autonomous Logistics',
                                    'verified' => true
                                ],
                                [
                                    'name' => 'Satya Nadella',
                                    'title' => 'CEO',
                                    'company' => 'Microsoft',
                                    'bio' => 'Driving digital transformation across the globe.',
                                    'session' => 'AI and the Supply Chain of Tomorrow'
                                ]
                            ],
                            'exhibitors' => 250,
                            'tickets' => [
                                ['name' => 'standard', 'price' => 899],
                                ['name' => 'vip', 'price' => 1499],
                                ['name' => 'early_bird_standard', 'price' => 699]
                            ],
                            'website' => 'https://example.com/supply-chain-summit',
                            'image' => 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=500&fit=crop',
                            'agenda' => [
                                ['time' => '09:00 AM', 'topic' => 'Keynote: The Future of Autonomous Logistics', 'speaker' => 'Elon Musk', 'location' => 'Grand Hall'],
                                ['time' => '11:00 AM', 'topic' => 'Panel: Building a Climate-Resilient Supply Chain', 'location' => 'Conference Room B'],
                                ['time' => '02:00 PM', 'topic' => 'Workshop: AI and Machine Learning in Demand Forecasting', 'location' => 'Workshop Studio 1']
                            ],
                            'organizer' => [
                                'name' => 'Supply Chain Media Group',
                                'website' => 'https://example.com/scmg'
                            ],
                            'isFeatured' => true
                        ],
                        [
                            'id' => 'logistics-tech-europe',
                            'title' => 'Logistics Tech Europe 2024',
                            'description' => 'Europe\'s largest gathering of logistics and technology innovators. Focus on digital transformation, smart warehousing, and last-mile delivery.',
                            'type' => 'In-Person',
                            'region' => 'Europe',
                            'startDate' => '2024-09-10',
                            'endDate' => '2024-09-12',
                            'location' => [
                                'venue' => 'Messe Berlin',
                                'city' => 'Berlin',
                                'country' => 'Germany',
                                'address' => 'Messedamm 22, 14055 Berlin'
                            ],
                            'expectedAttendees' => 3000,
                            'speakers' => [
                                [
                                    'name' => 'Dr. Anna Schmidt',
                                    'title' => 'Head of Logistics Innovation',
                                    'company' => 'DHL',
                                    'bio' => 'Leading research in autonomous last-mile delivery.'
                                ]
                            ],
                            'exhibitors' => 180,
                            'tickets' => [
                                ['name' => 'standard', 'price' => 750],
                                ['name' => 'early_bird_standard', 'price' => 550]
                            ],
                            'website' => 'https://example.com/logistics-tech-europe',
                            'image' => 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=800&h=500&fit=crop',
                            'agenda' => [
                                'The Rise of Micro-Fulfillment Centers',
                                'Green Logistics: Reducing Carbon Footprint',
                                'Robotics and Automation in Warehousing'
                            ],
                            'organizer' => [
                                'name' => 'EuroLogistics Events',
                                'website' => 'https://example.com/eu-logistics'
                            ],
                            'isFeatured' => false
                        ],
                        [
                            'id' => 'supply-chain-masters-asia',
                            'title' => 'Supply Chain Masters Asia',
                            'description' => 'Uniting Asian supply chain leaders to discuss the unique challenges and opportunities in the region\'s rapidly evolving markets.',
                            'type' => 'Hybrid',
                            'region' => 'Asia',
                            'startDate' => '2024-11-05',
                            'endDate' => '2024-11-07',
                            'location' => [
                                'venue' => 'Marina Bay Sands',
                                'city' => 'Singapore',
                                'country' => 'Singapore'
                            ],
                            'expectedAttendees' => 2000,
                            'speakers' => [],
                            'exhibitors' => 120,
                            'tickets' => [
                                ['name' => 'standard', 'price' => 650],
                                ['name' => 'online', 'price' => 99],
                                ['name' => 'early_bird_standard', 'price' => 450]
                            ],
                            'website' => 'https://example.com/scm-asia',
                            'image' => 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800&h=500&fit=crop',
                            'agenda' => [
                                'Cross-Border E-commerce Logistics',
                                'Navigating the Chip Shortage',
                                'Digital Twins in Supply Chain Planning'
                            ],
                            'organizer' => [
                                'name' => 'Asia Supply Chain Council',
                                'website' => 'https://example.com/ascc'
                            ],
                            'isFeatured' => true
                        ],
                        [
                            'id' => 'supply-chain-masters-asia-2023',
                            'title' => 'Supply Chain Masters Asia 2023',
                            'description' => 'The 2023 edition of Asia\'s premier supply chain conference discussing post-pandemic recovery.',
                            'type' => 'In-Person',
                            'region' => 'Asia',
                            'startDate' => '2023-11-05',
                            'endDate' => '2023-11-07',
                            'location' => [
                                'venue' => 'Marina Bay Sands',
                                'city' => 'Singapore',
                                'country' => 'Singapore'
                            ],
                            'expectedAttendees' => 1500,
                            'speakers' => [],
                            'exhibitors' => 100,
                            'tickets' => [
                                ['name' => 'standard', 'price' => 650]
                            ],
                            'website' => 'https://example.com/scm-asia-2023',
                            'image' => 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800&h=500&fit=crop',
                            'agenda' => [
                                'Post-COVID Supply Chain Resilience',
                                'Digital Transformation Case Studies'
                            ],
                            'organizer' => [
                                'name' => 'Asia Supply Chain Council'
                            ],
                            'isFeatured' => false
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 623,
                'section_key' => 'industryConferences',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => 'Global Summit',
                    'title' => [
                        'prefix' => 'World-Class',
                        'highlight' => 'Conferences',
                        'suffix' => ''
                    ],
                    'description' => 'Join the world\'s leading supply chain and logistics conferences. Network with industry experts, discover cutting-edge solutions, and shape the future.',
                    'stats' => [
                        ['value' => '50+', 'label' => 'Global Conferences', 'icon' => 'calendar'],
                        ['value' => '30+', 'label' => 'Countries', 'icon' => 'globe'],
                        ['value' => '100K+', 'label' => 'Annual Attendees', 'icon' => 'users'],
                        ['value' => '1,000+', 'label' => 'Industry Speakers', 'icon' => 'microphone']
                    ],
                    'featuredConferenceId' => 'supply-chain-summit-2024',
                    'tabs' => [
                        ['id' => 'upcoming', 'label' => 'Upcoming', 'icon' => 'calendar'],
                        ['id' => 'featured', 'label' => 'Featured', 'icon' => 'star'],
                        ['id' => 'virtual', 'label' => 'Virtual Events', 'icon' => 'desktop'],
                        ['id' => 'past', 'label' => 'Past Events', 'icon' => 'archive']
                    ],
                    'conferences' => [
                        [
                            'id' => 'supply-chain-summit-2024',
                            'title' => 'Global Supply Chain & Logistics Summit 2024',
                            'description' => 'The premier event for supply chain professionals. Explore the latest trends in AI-driven logistics, sustainability, and resilient supply chain networks.',
                            'type' => 'In-Person',
                            'isVirtual' => false,
                            'region' => 'North America',
                            'startDate' => '2024-06-15',
                            'endDate' => '2024-06-18',
                            'location' => [
                                'venue' => 'McCormick Place',
                                'city' => 'Chicago',
                                'country' => 'USA'
                            ],
                            'expectedAttendees' => 5000,
                            'speakers' => [
                                [
                                    'name' => 'Elon Musk',
                                    'title' => 'CEO',
                                    'company' => 'Tesla',
                                    'bio' => 'Visionary entrepreneur leading the electric vehicle revolution.',
                                    'session' => 'Keynote: The Future of Autonomous Logistics',
                                    'verified' => true,
                                    'avatar' => 'https://randomuser.me/api/portraits/men/1.jpg'
                                ],
                                [
                                    'name' => 'Satya Nadella',
                                    'title' => 'CEO',
                                    'company' => 'Microsoft',
                                    'bio' => 'Driving digital transformation across the globe.',
                                    'session' => 'AI and the Supply Chain of Tomorrow',
                                    'verified' => true
                                ]
                            ],
                            'exhibitors' => 250,
                            'tickets' => [
                                ['name' => 'standard', 'price' => 899],
                                ['name' => 'vip', 'price' => 1499],
                                ['name' => 'early_bird_standard', 'price' => 699]
                            ],
                            'website' => 'https://example.com/supply-chain-summit',
                            'image' => 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=500&fit=crop',
                            'agenda' => [
                                ['time' => '09:00 AM', 'topic' => 'Keynote: The Future of Autonomous Logistics', 'speaker' => 'Elon Musk', 'location' => 'Grand Hall'],
                                ['time' => '11:00 AM', 'topic' => 'Panel: Building a Climate-Resilient Supply Chain', 'location' => 'Conference Room B'],
                                ['time' => '02:00 PM', 'topic' => 'Workshop: AI and Machine Learning in Demand Forecasting', 'location' => 'Workshop Studio 1']
                            ],
                            'sessions' => [
                                ['id' => 's1', 'title' => 'The Future of Autonomous Logistics', 'time' => '09:00 AM', 'speaker' => 'Elon Musk'],
                                ['id' => 's2', 'title' => 'Climate-Resilient Supply Chain', 'time' => '11:00 AM', 'speaker' => 'Panel Discussion']
                            ],
                            'organizer' => [
                                'name' => 'Supply Chain Media Group'
                            ],
                            'certificateAvailable' => true,
                            'isFeatured' => true
                        ],
                        [
                            'id' => 'virtual-logistics-summit',
                            'title' => 'Virtual Logistics Innovation Summit',
                            'description' => 'A fully virtual conference bringing together logistics innovators from around the world. Live sessions, networking rooms, and on-demand content.',
                            'type' => 'Virtual',
                            'isVirtual' => true,
                            'region' => 'Global',
                            'startDate' => '2024-07-20',
                            'endDate' => '2024-07-22',
                            'location' => [
                                'city' => 'Online',
                                'country' => 'Virtual'
                            ],
                            'expectedAttendees' => 10000,
                            'speakers' => [
                                [
                                    'name' => 'Dr. Anna Lee',
                                    'title' => 'Chief Innovation Officer',
                                    'company' => 'DHL',
                                    'bio' => 'Leading digital transformation in logistics.'
                                ]
                            ],
                            'tickets' => [
                                ['name' => 'standard', 'price' => 99],
                                ['name' => 'early_bird_standard', 'price' => 49]
                            ],
                            'website' => 'https://example.com/virtual-summit',
                            'image' => 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=500&fit=crop',
                            'liveStreamUrl' => 'https://www.w3schools.com/html/mov_bbb.mp4',
                            'agenda' => [
                                'Live Keynote Sessions',
                                'Breakout Rooms',
                                'Virtual Networking'
                            ],
                            'certificateAvailable' => true,
                            'isFeatured' => false
                        ],
                        [
                            'id' => 'supply-chain-masters-asia',
                            'title' => 'Supply Chain Masters Asia 2024',
                            'description' => 'Uniting Asian supply chain leaders to discuss regional challenges and opportunities.',
                            'type' => 'Hybrid',
                            'region' => 'Asia',
                            'startDate' => '2024-11-05',
                            'endDate' => '2024-11-07',
                            'location' => [
                                'venue' => 'Marina Bay Sands',
                                'city' => 'Singapore',
                                'country' => 'Singapore'
                            ],
                            'expectedAttendees' => 2000,
                            'speakers' => [],
                            'exhibitors' => 120,
                            'tickets' => [
                                ['name' => 'standard', 'price' => 650],
                                ['name' => 'early_bird_standard', 'price' => 450]
                            ],
                            'website' => 'https://example.com/scm-asia',
                            'image' => 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800&h=500&fit=crop',
                            'agenda' => [
                                'Cross-Border E-commerce Logistics',
                                'Digital Twins in Supply Chain Planning'
                            ],
                            'isFeatured' => true
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 624,
                'section_key' => 'industryConferences',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],


            // User Groups Variants
            [
                'id' => 625,
                'section_key' => 'userGroups',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => 'Community Network',
                    'title' => [
                        'prefix' => 'Join',
                        'highlight' => 'User Groups',
                        'suffix' => 'Worldwide'
                    ],
                    'description' => 'Connect with local supply chain professionals, share knowledge, and grow your network. Join a user group near you or start your own.',
                    'stats' => [
                        ['value' => '50+', 'label' => 'Active Groups', 'icon' => 'users'],
                        ['value' => '25+', 'label' => 'Countries', 'icon' => 'globe'],
                        ['value' => '10K+', 'label' => 'Members', 'icon' => 'users'],
                        ['value' => '200+', 'label' => 'Annual Meetups', 'icon' => 'calendar']
                    ],
                    'featuredGroupId' => 'global-supply-chain-leaders',
                    'tabs' => [
                        ['id' => 'all', 'label' => 'All Groups', 'icon' => 'users'],
                        ['id' => 'featured', 'label' => 'Featured', 'icon' => 'star'],
                        ['id' => 'nearby', 'label' => 'Near You', 'icon' => 'location'],
                        ['id' => 'online', 'label' => 'Online', 'icon' => 'globe']
                    ],
                    'userGroups' => [
                        [
                            'id' => 'global-supply-chain-leaders',
                            'name' => 'Global Supply Chain Leaders',
                            'description' => 'A premier community for senior supply chain executives to share insights, discuss challenges, and drive innovation.',
                            'type' => 'In-Person',
                            'region' => 'North America',
                            'location' => ['city' => 'New York', 'country' => 'USA'],
                            'memberCount' => 1250,
                            'nextMeetup' => 'May 15, 2024',
                            'topics' => ['Strategy', 'Leadership', 'Innovation'],
                            'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=200&fit=crop',
                            'website' => 'https://example.com/global-leaders',
                            'organizer' => [
                                'name' => 'Sarah Johnson',
                                'title' => 'Director of Operations',
                                'avatar' => 'https://randomuser.me/api/portraits/women/1.jpg'
                            ],
                            'upcomingEvents' => [
                                ['date' => 'May 15, 2024', 'title' => 'Quarterly Summit: AI in Supply Chain']
                            ],
                            'members' => [
                                ['name' => 'Sarah Johnson', 'title' => 'Director', 'company' => 'Global Retail Corp', 'isOrganizer' => true],
                                ['name' => 'Michael Chen', 'title' => 'VP Logistics', 'company' => 'HealthTech Solutions'],
                                ['name' => 'Emily Rodriguez', 'title' => 'Supply Chain Manager', 'company' => 'EuroLogistics']
                            ],
                            'isFeatured' => true
                        ],
                        [
                            'id' => 'warehouse-ops-excellence',
                            'name' => 'Warehouse Ops Excellence',
                            'description' => 'Focused on warehouse operations, automation, and continuous improvement. Share best practices and solve operational challenges.',
                            'type' => 'In-Person',
                            'region' => 'Europe',
                            'location' => ['city' => 'London', 'country' => 'UK'],
                            'memberCount' => 450,
                            'nextMeetup' => 'May 22, 2024',
                            'topics' => ['Warehousing', 'Automation', 'Lean'],
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=200&fit=crop',
                            'website' => 'https://example.com/warehouse-ops',
                            'organizer' => [
                                'name' => 'James Wilson',
                                'title' => 'Operations Director'
                            ],
                            'members' => [],
                            'isFeatured' => false
                        ],
                        [
                            'id' => 'sustainability-in-logistics',
                            'name' => 'Sustainability in Logistics',
                            'description' => 'Dedicated to green logistics, carbon reduction, and sustainable supply chain practices.',
                            'type' => 'Online',
                            'region' => 'Global',
                            'location' => ['city' => 'Online', 'country' => 'Virtual'],
                            'memberCount' => 2800,
                            'nextMeetup' => 'May 10, 2024',
                            'topics' => ['Sustainability', 'Green Logistics', 'ESG'],
                            'image' => 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=200&fit=crop',
                            'website' => 'https://example.com/sustainable-logistics',
                            'organizer' => [
                                'name' => 'Dr. Maria Garcia',
                                'title' => 'Sustainability Lead'
                            ],
                            'members' => [],
                            'isFeatured' => false,
                            'isOnline' => true
                        ],
                        [
                            'id' => 'asia-logistics-network',
                            'name' => 'Asia Logistics Network',
                            'description' => 'Connecting logistics professionals across Asia. Focus on regional supply chain dynamics and cross-border trade.',
                            'type' => 'Hybrid',
                            'region' => 'Asia',
                            'location' => ['city' => 'Singapore', 'country' => 'Singapore'],
                            'memberCount' => 890,
                            'nextMeetup' => 'June 5, 2024',
                            'topics' => ['Cross-border', 'Trade', 'Regional Logistics'],
                            'image' => 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=400&h=200&fit=crop',
                            'website' => 'https://example.com/asia-logistics',
                            'organizer' => [
                                'name' => 'David Tan',
                                'title' => 'Supply Chain Director'
                            ],
                            'members' => [],
                            'isFeatured' => false
                        ],
                        [
                            'id' => 'digital-supply-chain',
                            'name' => 'Digital Supply Chain Forum',
                            'description' => 'Exploring digital transformation in supply chain. Topics include AI, blockchain, IoT, and data analytics.',
                            'type' => 'Online',
                            'region' => 'Global',
                            'location' => ['city' => 'Online', 'country' => 'Virtual'],
                            'memberCount' => 3200,
                            'nextMeetup' => 'May 20, 2024',
                            'topics' => ['Digital', 'AI', 'Analytics', 'Blockchain'],
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop',
                            'website' => 'https://example.com/digital-forum',
                            'organizer' => [
                                'name' => 'Alex Kumar',
                                'title' => 'Chief Digital Officer'
                            ],
                            'members' => [],
                            'isFeatured' => true,
                            'isOnline' => true
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 626,
                'section_key' => 'userGroups',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => 'Community Network',
                    'title' => [
                        'prefix' => 'Connect with',
                        'highlight' => 'Local Professionals',
                        'suffix' => ''
                    ],
                    'description' => 'Join a community of supply chain professionals in your area. Share insights, attend events, and grow your network.',
                    'stats' => [
                        ['value' => '50+', 'label' => 'Active Groups', 'trend' => '+12 this year', 'trendUp' => true],
                        ['value' => '25+', 'label' => 'Countries', 'trend' => 'Global reach', 'trendUp' => true],
                        ['value' => '10K+', 'label' => 'Members', 'trend' => '+25% YoY', 'trendUp' => true],
                        ['value' => '200+', 'label' => 'Annual Events', 'trend' => 'Local meetups', 'trendUp' => true]
                    ],
                    'featuredGroupId' => 'global-supply-chain-leaders',
                    'tabs' => [
                        ['id' => 'all', 'label' => 'All Groups', 'icon' => 'users'],
                        ['id' => 'featured', 'label' => 'Featured', 'icon' => 'star'],
                        ['id' => 'nearby', 'label' => 'Near You', 'icon' => 'location'],
                        ['id' => 'online', 'label' => 'Online', 'icon' => 'globe'],
                        ['id' => 'joined', 'label' => 'My Groups', 'icon' => 'heart']
                    ],
                    'userGroups' => [
                        [
                            'id' => 'global-supply-chain-leaders',
                            'name' => 'Global Supply Chain Leaders',
                            'description' => 'A premier community for senior supply chain executives to share insights, discuss challenges, and drive innovation.',
                            'type' => 'In-Person',
                            'region' => 'North America',
                            'location' => ['city' => 'New York', 'country' => 'USA'],
                            'memberCount' => 1250,
                            'nextMeetup' => 'May 15, 2024',
                            'topics' => ['Strategy', 'Leadership', 'Innovation'],
                            'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=200&fit=crop',
                            'leader' => [
                                'name' => 'Sarah Johnson',
                                'title' => 'Director of Operations',
                                'company' => 'Global Retail Corp',
                                'avatar' => 'https://randomuser.me/api/portraits/women/1.jpg',
                                'verified' => true,
                                'bio' => '20+ years in supply chain leadership, passionate about building communities.',
                                'expertise' => ['Supply Chain Strategy', 'Digital Transformation', 'Leadership']
                            ],
                            'events' => [
                                [
                                    'id' => 'e1',
                                    'title' => 'Quarterly Summit: AI in Supply Chain',
                                    'date' => '2024-05-15',
                                    'time' => '6:00 PM',
                                    'location' => 'NYC Conference Center',
                                    'description' => 'Join us for an evening of networking and learning about AI applications.'
                                ],
                                [
                                    'id' => 'e2',
                                    'title' => 'Supply Chain Innovation Workshop',
                                    'date' => '2024-06-10',
                                    'time' => '9:00 AM',
                                    'location' => 'Online',
                                    'description' => 'Virtual workshop on emerging technologies.'
                                ]
                            ],
                            'resources' => [
                                ['title' => 'Supply Chain Trends 2024', 'type' => 'PDF', 'size' => '2.5 MB'],
                                ['title' => 'Workshop Recording', 'type' => 'Video', 'size' => '150 MB']
                            ],
                            'isFeatured' => true
                        ],
                        [
                            'id' => 'warehouse-ops-excellence',
                            'name' => 'Warehouse Ops Excellence',
                            'description' => 'Focused on warehouse operations, automation, and continuous improvement. Share best practices and solve operational challenges.',
                            'type' => 'In-Person',
                            'region' => 'Europe',
                            'location' => ['city' => 'London', 'country' => 'UK'],
                            'memberCount' => 450,
                            'nextMeetup' => 'May 22, 2024',
                            'topics' => ['Warehousing', 'Automation', 'Lean'],
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=200&fit=crop',
                            'leader' => [
                                'name' => 'James Wilson',
                                'title' => 'Operations Director',
                                'company' => 'Logistics UK'
                            ],
                            'events' => [
                                [
                                    'id' => 'e1',
                                    'title' => 'Lean Warehousing Workshop',
                                    'date' => '2024-05-22',
                                    'time' => '2:00 PM',
                                    'location' => 'London',
                                    'description' => 'Hands-on workshop on lean principles.'
                                ]
                            ],
                            'isFeatured' => false
                        ],
                        [
                            'id' => 'sustainability-in-logistics',
                            'name' => 'Sustainability in Logistics',
                            'description' => 'Dedicated to green logistics, carbon reduction, and sustainable supply chain practices.',
                            'type' => 'Online',
                            'region' => 'Global',
                            'location' => ['city' => 'Online', 'country' => 'Virtual'],
                            'memberCount' => 2800,
                            'nextMeetup' => 'May 10, 2024',
                            'topics' => ['Sustainability', 'Green Logistics', 'ESG'],
                            'image' => 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=200&fit=crop',
                            'leader' => [
                                'name' => 'Dr. Maria Garcia',
                                'title' => 'Sustainability Lead',
                                'company' => 'Green Logistics Initiative'
                            ],
                            'events' => [],
                            'isFeatured' => false,
                            'isOnline' => true
                        ],
                        [
                            'id' => 'asia-logistics-network',
                            'name' => 'Asia Logistics Network',
                            'description' => 'Connecting logistics professionals across Asia. Focus on regional supply chain dynamics and cross-border trade.',
                            'type' => 'Hybrid',
                            'region' => 'Asia',
                            'location' => ['city' => 'Singapore', 'country' => 'Singapore'],
                            'memberCount' => 890,
                            'nextMeetup' => 'June 5, 2024',
                            'topics' => ['Cross-border', 'Trade', 'Regional Logistics'],
                            'image' => 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=400&h=200&fit=crop',
                            'leader' => [
                                'name' => 'David Tan',
                                'title' => 'Supply Chain Director',
                                'company' => 'Asia Logistics Group'
                            ],
                            'events' => [],
                            'isFeatured' => false
                        ],
                        [
                            'id' => 'digital-supply-chain',
                            'name' => 'Digital Supply Chain Forum',
                            'description' => 'Exploring digital transformation in supply chain. Topics include AI, blockchain, IoT, and data analytics.',
                            'type' => 'Online',
                            'region' => 'Global',
                            'location' => ['city' => 'Online', 'country' => 'Virtual'],
                            'memberCount' => 3200,
                            'nextMeetup' => 'May 20, 2024',
                            'topics' => ['Digital', 'AI', 'Analytics', 'Blockchain'],
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop',
                            'leader' => [
                                'name' => 'Alex Kumar',
                                'title' => 'Chief Digital Officer',
                                'company' => 'TechLogistics'
                            ],
                            'events' => [],
                            'isFeatured' => true,
                            'isOnline' => true
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 627,
                'section_key' => 'userGroups',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => 'Professional Network',
                    'title' => [
                        'prefix' => 'Grow Your',
                        'highlight' => 'Professional Network',
                        'suffix' => ''
                    ],
                    'description' => 'Join a vibrant community of supply chain professionals. Find mentors, share skills, discover jobs, and earn recognition for your contributions.',
                    'stats' => [
                        ['value' => '50+', 'label' => 'Active Groups'],
                        ['value' => '25+', 'label' => 'Countries'],
                        ['value' => '10K+', 'label' => 'Members'],
                        ['value' => '200+', 'label' => 'Jobs Posted']
                    ],
                    'featuredGroupId' => 'global-supply-chain-leaders',
                    'tabs' => [
                        ['id' => 'all', 'label' => 'All Groups', 'icon' => 'users'],
                        ['id' => 'featured', 'label' => 'Featured', 'icon' => 'star'],
                        ['id' => 'nearby', 'label' => 'Near You', 'icon' => 'location'],
                        ['id' => 'online', 'label' => 'Online', 'icon' => 'globe'],
                        ['id' => 'joined', 'label' => 'My Groups', 'icon' => 'heart']
                    ],
                    'userGroups' => [
                        [
                            'id' => 'global-supply-chain-leaders',
                            'name' => 'Global Supply Chain Leaders',
                            'description' => 'A premier community for senior supply chain executives to share insights, discuss challenges, and drive innovation.',
                            'type' => 'In-Person',
                            'region' => 'North America',
                            'location' => ['city' => 'New York', 'country' => 'USA'],
                            'memberCount' => 1250,
                            'topics' => ['Strategy', 'Leadership', 'Innovation'],
                            'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=200&fit=crop',
                            'isFeatured' => true,
                            'isOnline' => false
                        ],
                        [
                            'id' => 'warehouse-ops-excellence',
                            'name' => 'Warehouse Ops Excellence',
                            'description' => 'Focused on warehouse operations, automation, and continuous improvement.',
                            'type' => 'In-Person',
                            'region' => 'Europe',
                            'location' => ['city' => 'London', 'country' => 'UK'],
                            'memberCount' => 450,
                            'topics' => ['Warehousing', 'Automation', 'Lean'],
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=200&fit=crop',
                            'isFeatured' => false,
                            'isOnline' => false
                        ],
                        [
                            'id' => 'sustainability-in-logistics',
                            'name' => 'Sustainability in Logistics',
                            'description' => 'Dedicated to green logistics, carbon reduction, and sustainable supply chain practices.',
                            'type' => 'Online',
                            'region' => 'Global',
                            'location' => ['city' => 'Online', 'country' => 'Virtual'],
                            'memberCount' => 2800,
                            'topics' => ['Sustainability', 'Green Logistics', 'ESG'],
                            'image' => 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=200&fit=crop',
                            'isFeatured' => false,
                            'isOnline' => true
                        ],
                        [
                            'id' => 'asia-logistics-network',
                            'name' => 'Asia Logistics Network',
                            'description' => 'Connecting logistics professionals across Asia. Focus on regional supply chain dynamics.',
                            'type' => 'Hybrid',
                            'region' => 'Asia',
                            'location' => ['city' => 'Singapore', 'country' => 'Singapore'],
                            'memberCount' => 890,
                            'topics' => ['Cross-border', 'Trade', 'Regional Logistics'],
                            'image' => 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=400&h=200&fit=crop',
                            'isFeatured' => false,
                            'isOnline' => false
                        ],
                        [
                            'id' => 'digital-supply-chain',
                            'name' => 'Digital Supply Chain Forum',
                            'description' => 'Exploring digital transformation in supply chain. Topics include AI, blockchain, IoT, and data analytics.',
                            'type' => 'Online',
                            'region' => 'Global',
                            'location' => ['city' => 'Online', 'country' => 'Virtual'],
                            'memberCount' => 3200,
                            'topics' => ['Digital', 'AI', 'Analytics', 'Blockchain'],
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop',
                            'isFeatured' => true,
                            'isOnline' => true
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 628,
                'section_key' => 'userGroups',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Training Sessions Variants
            [
                'id' => 629,
                'section_key' => 'trainingSessions',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => 'Professional Development',
                    'title' => [
                        'prefix' => 'Advance Your',
                        'highlight' => 'Supply Chain Career',
                        'suffix' => ''
                    ],
                    'description' => 'Expert-led training sessions, workshops, and certification programs designed to help you master supply chain management and advance your career.',
                    'stats' => [
                        ['value' => '50+', 'label' => 'Training Courses', 'icon' => 'academic'],
                        ['value' => '10K+', 'label' => 'Students Trained', 'icon' => 'users'],
                        ['value' => '500+', 'label' => 'Learning Hours', 'icon' => 'clock'],
                        ['value' => '15+', 'label' => 'Certifications', 'icon' => 'badge']
                    ],
                    'featuredSessionId' => 'supply-chain-strategy-masterclass',
                    'tabs' => [
                        ['id' => 'all', 'label' => 'All Trainings', 'icon' => 'academic'],
                        ['id' => 'featured', 'label' => 'Featured', 'icon' => 'star'],
                        ['id' => 'upcoming', 'label' => 'Upcoming', 'icon' => 'calendar'],
                        ['id' => 'certification', 'label' => 'Certification', 'icon' => 'badge'],
                        ['id' => 'enrolled', 'label' => 'My Trainings', 'icon' => 'bookmark']
                    ],
                    'trainingSessions' => [
                        [
                            'id' => 'supply-chain-strategy-masterclass',
                            'title' => 'Supply Chain Strategy Masterclass',
                            'description' => 'Learn how to develop and execute winning supply chain strategies that drive competitive advantage and business growth.',
                            'level' => 'Advanced',
                            'format' => 'online',
                            'category' => 'Strategy',
                            'startDate' => '2024-06-10',
                            'endDate' => '2024-06-14',
                            'duration' => '5 days (20 hours)',
                            'price' => 899,
                            'hasCertification' => true,
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop',
                            'instructor' => [
                                'name' => 'Dr. Sarah Johnson',
                                'title' => 'Professor of Supply Chain',
                                'company' => 'MIT',
                                'bio' => '20+ years of experience in supply chain strategy and digital transformation.',
                                'avatar' => 'https://randomuser.me/api/portraits/women/1.jpg',
                                'verified' => true,
                                'expertise' => ['Strategy', 'Digital Transformation', 'Analytics']
                            ],
                            'syllabus' => [
                                'Module 1: Strategic Supply Chain Design',
                                'Module 2: Demand Forecasting and Planning',
                                'Module 3: Supplier Relationship Management',
                                'Module 4: Risk Management and Resilience',
                                'Module 5: Performance Measurement and Analytics'
                            ],
                            'learningObjectives' => [
                                'Develop a comprehensive supply chain strategy',
                                'Apply advanced forecasting techniques',
                                'Build resilient supplier networks'
                            ],
                            'isFeatured' => true
                        ],
                        [
                            'id' => 'inventory-optimization-workshop',
                            'title' => 'Inventory Optimization Workshop',
                            'description' => 'Master inventory management techniques to reduce costs while maintaining service levels. Hands-on exercises and real-world case studies.',
                            'level' => 'Intermediate',
                            'format' => 'in-person',
                            'category' => 'Inventory',
                            'startDate' => '2024-07-15',
                            'endDate' => '2024-07-16',
                            'duration' => '2 days (12 hours)',
                            'location' => ['city' => 'Chicago', 'country' => 'USA'],
                            'price' => 499,
                            'hasCertification' => true,
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=200&fit=crop',
                            'instructor' => [
                                'name' => 'Michael Chen',
                                'title' => 'Inventory Management Expert',
                                'company' => 'Supply Chain Consulting Group',
                                'bio' => '15+ years optimizing inventory for Fortune 500 companies.'
                            ],
                            'syllabus' => [
                                'Inventory Fundamentals',
                                'Safety Stock Calculation',
                                'ABC Analysis',
                                'Inventory KPIs and Metrics'
                            ],
                            'isFeatured' => false
                        ],
                        [
                            'id' => 'logistics-digitalization',
                            'title' => 'Logistics Digitalization Bootcamp',
                            'description' => 'Explore the latest digital technologies transforming logistics, including IoT, AI, and blockchain. Learn practical implementation strategies.',
                            'level' => 'Intermediate',
                            'format' => 'hybrid',
                            'category' => 'Logistics',
                            'startDate' => '2024-08-05',
                            'endDate' => '2024-08-09',
                            'duration' => '5 days (15 hours)',
                            'price' => 749,
                            'hasCertification' => true,
                            'image' => 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=200&fit=crop',
                            'instructor' => [
                                'name' => 'Emily Rodriguez',
                                'title' => 'Digital Logistics Director',
                                'company' => 'TechLogistics',
                                'bio' => 'Leading digital transformation in logistics operations.'
                            ],
                            'syllabus' => [
                                'IoT in Logistics',
                                'AI for Route Optimization',
                                'Blockchain for Traceability',
                                'Digital Twin Technology'
                            ],
                            'isFeatured' => true
                        ],
                        [
                            'id' => 'procurement-fundamentals',
                            'title' => 'Procurement Fundamentals',
                            'description' => 'Essential skills for modern procurement professionals. Learn strategic sourcing, negotiation, and supplier management.',
                            'level' => 'Beginner',
                            'format' => 'online',
                            'category' => 'Procurement',
                            'startDate' => '2024-06-20',
                            'endDate' => '2024-06-22',
                            'duration' => '3 days (9 hours)',
                            'price' => 299,
                            'hasCertification' => false,
                            'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=200&fit=crop',
                            'instructor' => [
                                'name' => 'James Wilson',
                                'title' => 'Procurement Director',
                                'company' => 'Global Procurement Solutions',
                                'bio' => 'Expert in strategic sourcing and supplier relationships.'
                            ],
                            'syllabus' => [
                                'Strategic Sourcing',
                                'Negotiation Strategies',
                                'Supplier Evaluation',
                                'Contract Management'
                            ],
                            'isFeatured' => false
                        ],
                        [
                            'id' => 'supply-chain-analytics',
                            'title' => 'Supply Chain Analytics Certification',
                            'description' => 'Master data-driven decision making in supply chain. Learn to use analytics tools and interpret data for better outcomes.',
                            'level' => 'Advanced',
                            'format' => 'online',
                            'category' => 'Analytics',
                            'startDate' => '2024-09-10',
                            'endDate' => '2024-10-15',
                            'duration' => '6 weeks (30 hours)',
                            'price' => 1299,
                            'hasCertification' => true,
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop',
                            'instructor' => [
                                'name' => 'Dr. Alex Kumar',
                                'title' => 'Data Science Lead',
                                'company' => 'AnalyticsHub',
                                'bio' => 'PhD in Operations Research, specializing in supply chain analytics.'
                            ],
                            'syllabus' => [
                                'Data Visualization',
                                'Demand Forecasting Models',
                                'Optimization Techniques',
                                'Predictive Analytics'
                            ],
                            'learningObjectives' => [
                                'Build predictive models for demand',
                                'Optimize inventory using data',
                                'Create interactive dashboards'
                            ],
                            'isFeatured' => false
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 630,
                'section_key' => 'trainingSessions',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => 'Professional Development',
                    'title' => [
                        'prefix' => 'Master',
                        'highlight' => 'Supply Chain',
                        'suffix' => 'with Expert Training'
                    ],
                    'description' => 'Interactive online courses with video lessons, quizzes, assignments, and certificates. Learn at your own pace and advance your career.',
                    'stats' => [
                        ['value' => '25+', 'label' => 'Expert Courses'],
                        ['value' => '5K+', 'label' => 'Active Students'],
                        ['value' => '200+', 'label' => 'Video Lessons'],
                        ['value' => '12+', 'label' => 'Certifications']
                    ],
                    'featuredSessionId' => 'supply-chain-strategy-masterclass',
                    'tabs' => [
                        ['id' => 'all', 'label' => 'All Trainings', 'icon' => 'academic'],
                        ['id' => 'featured', 'label' => 'Featured', 'icon' => 'star'],
                        ['id' => 'upcoming', 'label' => 'Upcoming', 'icon' => 'calendar'],
                        ['id' => 'certification', 'label' => 'Certification', 'icon' => 'badge'],
                        ['id' => 'enrolled', 'label' => 'My Learning', 'icon' => 'bookmark']
                    ],
                    'trainingSessions' => [
                        [
                            'id' => 'supply-chain-strategy-masterclass',
                            'title' => 'Supply Chain Strategy Masterclass',
                            'description' => 'Learn how to develop and execute winning supply chain strategies that drive competitive advantage and business growth.',
                            'level' => 'Advanced',
                            'format' => 'online',
                            'category' => 'Strategy',
                            'duration' => '6 weeks',
                            'price' => 899,
                            'hasCertification' => true,
                            'hasAssignment' => true,
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop',
                            'modules' => [
                                ['title' => 'Strategic Supply Chain Design', 'description' => 'Learn the fundamentals of supply chain strategy and network design.'],
                                ['title' => 'Demand Forecasting and Planning', 'description' => 'Master advanced forecasting techniques.'],
                                ['title' => 'Supplier Relationship Management', 'description' => 'Build and manage strategic supplier partnerships.'],
                                ['title' => 'Risk Management and Resilience', 'description' => 'Develop resilient supply chain networks.'],
                                ['title' => 'Performance Measurement', 'description' => 'Learn key metrics and KPIs for supply chain excellence.']
                            ],
                            'quizzes' => [
                                [
                                    'id' => 'quiz1',
                                    'title' => 'Module 1 Quiz',
                                    'passingScore' => 70,
                                    'questions' => [
                                        ['text' => 'What is the primary goal of supply chain strategy?', 'options' => ['Cost reduction', 'Customer satisfaction', 'Both A and B', 'None of the above'], 'correctAnswer' => 'Both A and B'],
                                        ['text' => 'Which of the following is a key component of supply chain design?', 'options' => ['Network optimization', 'Inventory placement', 'Transportation planning', 'All of the above'], 'correctAnswer' => 'All of the above']
                                    ]
                                ]
                            ],
                            'isFeatured' => true
                        ],
                        [
                            'id' => 'inventory-optimization',
                            'title' => 'Inventory Optimization Workshop',
                            'description' => 'Master inventory management techniques to reduce costs while maintaining service levels.',
                            'level' => 'Intermediate',
                            'format' => 'online',
                            'category' => 'Inventory',
                            'duration' => '4 weeks',
                            'price' => 499,
                            'hasCertification' => true,
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=200&fit=crop',
                            'modules' => [
                                ['title' => 'Inventory Fundamentals', 'description' => 'Understanding inventory types and costs.'],
                                ['title' => 'Safety Stock Calculation', 'description' => 'Learn to calculate optimal safety stock levels.'],
                                ['title' => 'ABC Analysis', 'description' => 'Prioritize inventory using ABC classification.']
                            ],
                            'isFeatured' => false
                        ],
                        [
                            'id' => 'logistics-digitalization',
                            'title' => 'Logistics Digitalization Bootcamp',
                            'description' => 'Explore the latest digital technologies transforming logistics, including IoT, AI, and blockchain.',
                            'level' => 'Intermediate',
                            'format' => 'online',
                            'category' => 'Logistics',
                            'duration' => '5 weeks',
                            'price' => 749,
                            'hasCertification' => true,
                            'image' => 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=200&fit=crop',
                            'modules' => [
                                ['title' => 'IoT in Logistics', 'description' => 'Internet of Things applications in supply chain.'],
                                ['title' => 'AI for Route Optimization', 'description' => 'Machine learning for delivery optimization.']
                            ],
                            'isFeatured' => true
                        ],
                        [
                            'id' => 'procurement-fundamentals',
                            'title' => 'Procurement Fundamentals',
                            'description' => 'Essential skills for modern procurement professionals.',
                            'level' => 'Beginner',
                            'format' => 'online',
                            'category' => 'Procurement',
                            'duration' => '3 weeks',
                            'price' => 299,
                            'hasCertification' => false,
                            'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=200&fit=crop',
                            'modules' => [
                                ['title' => 'Strategic Sourcing', 'description' => 'Learn strategic sourcing methodologies.'],
                                ['title' => 'Negotiation Strategies', 'description' => 'Master negotiation techniques.']
                            ],
                            'isFeatured' => false
                        ],
                        [
                            'id' => 'supply-chain-analytics',
                            'title' => 'Supply Chain Analytics Certification',
                            'description' => 'Master data-driven decision making in supply chain.',
                            'level' => 'Advanced',
                            'format' => 'online',
                            'category' => 'Analytics',
                            'duration' => '8 weeks',
                            'price' => 1299,
                            'hasCertification' => true,
                            'hasAssignment' => true,
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop',
                            'modules' => [
                                ['title' => 'Data Visualization', 'description' => 'Create impactful dashboards.'],
                                ['title' => 'Predictive Analytics', 'description' => 'Build forecasting models.']
                            ],
                            'isFeatured' => false
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 631,
                'section_key' => 'trainingSessions',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => 'Live & Interactive Learning',
                    'title' => [
                        'prefix' => 'Transform Your',
                        'highlight' => 'Career',
                        'suffix' => 'with Expert Training'
                    ],
                    'description' => 'Live online classes, interactive quizzes, peer reviews, and professional certificates. Learn from industry experts and connect with peers.',
                    'stats' => [
                        ['value' => '25+', 'label' => 'Expert Courses', 'icon' => 'academic'],
                        ['value' => '5K+', 'label' => 'Active Students', 'icon' => 'users'],
                        ['value' => '50+', 'label' => 'Live Sessions/Month', 'icon' => 'video'],
                        ['value' => '12+', 'label' => 'Certifications', 'icon' => 'badge']
                    ],
                    'featuredSessionId' => 'supply-chain-strategy-masterclass',
                    'tabs' => [
                        ['id' => 'all', 'label' => 'All Trainings', 'icon' => 'academic'],
                        ['id' => 'featured', 'label' => 'Featured', 'icon' => 'star'],
                        ['id' => 'live', 'label' => 'Live Classes', 'icon' => 'video'],
                        ['id' => 'certification', 'label' => 'Certification', 'icon' => 'badge'],
                        ['id' => 'enrolled', 'label' => 'My Learning', 'icon' => 'bookmark']
                    ],
                    'trainingSessions' => [
                        [
                            'id' => 'supply-chain-strategy-masterclass',
                            'title' => 'Supply Chain Strategy Masterclass',
                            'description' => 'Learn how to develop and execute winning supply chain strategies that drive competitive advantage and business growth.',
                            'level' => 'Advanced',
                            'format' => 'online',
                            'category' => 'Strategy',
                            'duration' => '6 weeks',
                            'price' => 899,
                            'hasCertification' => true,
                            'hasLiveClasses' => true,
                            'hasAssignment' => true,
                            'hasPeerReview' => true,
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop',
                            'modules' => [
                                ['title' => 'Strategic Supply Chain Design', 'description' => 'Learn the fundamentals of supply chain strategy and network design.'],
                                ['title' => 'Demand Forecasting and Planning', 'description' => 'Master advanced forecasting techniques.'],
                                ['title' => 'Supplier Relationship Management', 'description' => 'Build and manage strategic supplier partnerships.'],
                                ['title' => 'Risk Management and Resilience', 'description' => 'Develop resilient supply chain networks.'],
                                ['title' => 'Performance Measurement', 'description' => 'Learn key metrics and KPIs for supply chain excellence.']
                            ],
                            'liveClasses' => [
                                ['date' => 'Week 1 - Wednesday', 'topic' => 'Supply Chain Design Live Workshop'],
                                ['date' => 'Week 3 - Wednesday', 'topic' => 'Risk Management Case Study'],
                                ['date' => 'Week 5 - Wednesday', 'topic' => 'Final Project Review']
                            ],
                            'quizzes' => [
                                [
                                    'id' => 'quiz1',
                                    'title' => 'Module 1 Quiz',
                                    'passingScore' => 70,
                                    'questions' => [
                                        ['text' => 'What is the primary goal of supply chain strategy?', 'options' => ['Cost reduction', 'Customer satisfaction', 'Both A and B', 'None of the above'], 'correctAnswer' => 'Both A and B'],
                                        ['text' => 'Which of the following is a key component of supply chain design?', 'options' => ['Network optimization', 'Inventory placement', 'Transportation planning', 'All of the above'], 'correctAnswer' => 'All of the above']
                                    ]
                                ]
                            ],
                            'isFeatured' => true
                        ],
                        [
                            'id' => 'inventory-optimization',
                            'title' => 'Inventory Optimization Workshop',
                            'description' => 'Master inventory management techniques to reduce costs while maintaining service levels.',
                            'level' => 'Intermediate',
                            'format' => 'online',
                            'category' => 'Inventory',
                            'duration' => '4 weeks',
                            'price' => 499,
                            'hasCertification' => true,
                            'hasLiveClasses' => true,
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=200&fit=crop',
                            'modules' => [
                                ['title' => 'Inventory Fundamentals', 'description' => 'Understanding inventory types and costs.'],
                                ['title' => 'Safety Stock Calculation', 'description' => 'Learn to calculate optimal safety stock levels.'],
                                ['title' => 'ABC Analysis', 'description' => 'Prioritize inventory using ABC classification.']
                            ],
                            'liveClasses' => [
                                ['date' => 'Week 2 - Tuesday', 'topic' => 'Inventory Optimization Live Demo']
                            ],
                            'isFeatured' => false
                        ],
                        [
                            'id' => 'logistics-digitalization',
                            'title' => 'Logistics Digitalization Bootcamp',
                            'description' => 'Explore the latest digital technologies transforming logistics, including IoT, AI, and blockchain.',
                            'level' => 'Intermediate',
                            'format' => 'online',
                            'category' => 'Logistics',
                            'duration' => '5 weeks',
                            'price' => 749,
                            'hasCertification' => true,
                            'hasLiveClasses' => true,
                            'image' => 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=200&fit=crop',
                            'modules' => [
                                ['title' => 'IoT in Logistics', 'description' => 'Internet of Things applications in supply chain.'],
                                ['title' => 'AI for Route Optimization', 'description' => 'Machine learning for delivery optimization.']
                            ],
                            'liveClasses' => [
                                ['date' => 'Week 1 - Thursday', 'topic' => 'Digital Transformation Panel Discussion']
                            ],
                            'isFeatured' => true
                        ],
                        [
                            'id' => 'procurement-fundamentals',
                            'title' => 'Procurement Fundamentals',
                            'description' => 'Essential skills for modern procurement professionals.',
                            'level' => 'Beginner',
                            'format' => 'online',
                            'category' => 'Procurement',
                            'duration' => '3 weeks',
                            'price' => 299,
                            'hasCertification' => false,
                            'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=200&fit=crop',
                            'modules' => [
                                ['title' => 'Strategic Sourcing', 'description' => 'Learn strategic sourcing methodologies.'],
                                ['title' => 'Negotiation Strategies', 'description' => 'Master negotiation techniques.']
                            ],
                            'isFeatured' => false
                        ],
                        [
                            'id' => 'supply-chain-analytics',
                            'title' => 'Supply Chain Analytics Certification',
                            'description' => 'Master data-driven decision making in supply chain.',
                            'level' => 'Advanced',
                            'format' => 'online',
                            'category' => 'Analytics',
                            'duration' => '8 weeks',
                            'price' => 1299,
                            'hasCertification' => true,
                            'hasAssignment' => true,
                            'hasPeerReview' => true,
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop',
                            'modules' => [
                                ['title' => 'Data Visualization', 'description' => 'Create impactful dashboards.'],
                                ['title' => 'Predictive Analytics', 'description' => 'Build forecasting models.']
                            ],
                            'isFeatured' => false
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 632,
                'section_key' => 'trainingSessions',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Virtual Events Variants
            [
                'id' => 633,
                'section_key' => 'virtualEvents',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => 'Virtual Events',
                    'title' => [
                        'prefix' => 'Connect from',
                        'highlight' => 'Anywhere',
                        'suffix' => ''
                    ],
                    'description' => 'Join live virtual events, interactive workshops, and on-demand sessions from industry experts. Network with professionals worldwide without leaving your desk.',
                    'stats' => [
                        ['value' => '50+', 'label' => 'Annual Events', 'icon' => 'calendar'],
                        ['value' => '25K+', 'label' => 'Attendees', 'icon' => 'users'],
                        ['value' => '100+', 'label' => 'Expert Speakers', 'icon' => 'users'],
                        ['value' => '500+', 'label' => 'Content Hours', 'icon' => 'clock']
                    ],
                    'featuredEventId' => 'global-supply-chain-summit-2024',
                    'tabs' => [
                        ['id' => 'upcoming', 'label' => 'Upcoming Events', 'icon' => 'calendar'],
                        ['id' => 'featured', 'label' => 'Featured', 'icon' => 'star'],
                        ['id' => 'recorded', 'label' => 'On-Demand', 'icon' => 'video'],
                        ['id' => 'registered', 'label' => 'My Events', 'icon' => 'ticket']
                    ],
                    'virtualEvents' => [
                        [
                            'id' => 'global-supply-chain-summit-2024',
                            'title' => 'Global Supply Chain Summit 2024',
                            'description' => 'Join industry leaders for a 2-day virtual summit on the future of global supply chains. Topics include AI, sustainability, and risk management.',
                            'category' => 'Conference',
                            'region' => 'Global',
                            'startDate' => '2024-06-15',
                            'endDate' => '2024-06-16',
                            'time' => '9:00 AM',
                            'timezone' => 'EST',
                            'duration' => '2 days',
                            'isFree' => false,
                            'hasRecording' => true,
                            'certificateAvailable' => true,
                            'image' => 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=200&fit=crop',
                            'speaker' => [
                                'name' => 'Dr. Sarah Chen',
                                'title' => 'Supply Chain Director',
                                'company' => 'Global Logistics Institute',
                                'avatar' => 'https://randomuser.me/api/portraits/women/1.jpg'
                            ],
                            'expectedAttendees' => 5000,
                            'agenda' => [
                                ['time' => '9:00 AM', 'topic' => 'Keynote: The Future of Supply Chains'],
                                ['time' => '10:30 AM', 'topic' => 'Panel: AI in Logistics'],
                                ['time' => '1:00 PM', 'topic' => 'Workshop: Sustainability Strategies']
                            ],
                            'isFeatured' => true
                        ],
                        [
                            'id' => 'ai-logistics-webinar',
                            'title' => 'AI in Logistics: Transforming Operations',
                            'description' => 'Learn how artificial intelligence is revolutionizing logistics operations, from route optimization to predictive maintenance.',
                            'category' => 'Webinar',
                            'region' => 'Global',
                            'startDate' => '2024-07-10',
                            'endDate' => '2024-07-10',
                            'time' => '11:00 AM',
                            'timezone' => 'EST',
                            'duration' => '90 minutes',
                            'isFree' => true,
                            'hasRecording' => true,
                            'certificateAvailable' => true,
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop',
                            'speaker' => [
                                'name' => 'Michael Zhang',
                                'title' => 'Chief AI Officer',
                                'company' => 'LogiTech AI',
                                'avatar' => 'https://randomuser.me/api/portraits/men/1.jpg'
                            ],
                            'expectedAttendees' => 2500,
                            'agenda' => [
                                ['time' => '11:00 AM', 'topic' => 'Introduction to AI in Logistics'],
                                ['time' => '11:30 AM', 'topic' => 'Case Studies'],
                                ['time' => '12:00 PM', 'topic' => 'Q&A Session']
                            ],
                            'isFeatured' => false
                        ],
                        [
                            'id' => 'sustainability-workshop',
                            'title' => 'Sustainable Supply Chain Workshop',
                            'description' => 'An interactive workshop on implementing sustainable practices in your supply chain. Learn from industry experts.',
                            'category' => 'Workshop',
                            'region' => 'Europe',
                            'startDate' => '2024-08-05',
                            'endDate' => '2024-08-05',
                            'time' => '2:00 PM',
                            'timezone' => 'GMT',
                            'duration' => '3 hours',
                            'isFree' => false,
                            'hasRecording' => true,
                            'certificateAvailable' => true,
                            'image' => 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=200&fit=crop',
                            'speaker' => [
                                'name' => 'Emma Watson',
                                'title' => 'Sustainability Lead',
                                'company' => 'Green Supply Chain Solutions'
                            ],
                            'expectedAttendees' => 800,
                            'agenda' => [
                                ['time' => '2:00 PM', 'topic' => 'Carbon Footprint Measurement'],
                                ['time' => '3:00 PM', 'topic' => 'Circular Economy Practices'],
                                ['time' => '4:00 PM', 'topic' => 'Implementation Roadmap']
                            ],
                            'isFeatured' => false
                        ],
                        [
                            'id' => 'procurement-panel-2024',
                            'title' => 'Strategic Procurement Panel Discussion',
                            'description' => 'Hear from top procurement leaders about navigating global disruptions and building resilient supplier networks.',
                            'category' => 'Panel',
                            'region' => 'North America',
                            'startDate' => '2024-04-20',
                            'endDate' => '2024-04-20',
                            'time' => '12:00 PM',
                            'timezone' => 'EST',
                            'duration' => '1 hour',
                            'isFree' => true,
                            'hasRecording' => true,
                            'certificateAvailable' => false,
                            'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=200&fit=crop',
                            'speaker' => [
                                'name' => 'David Kim',
                                'title' => 'CPO',
                                'company' => 'Global Manufacturing Corp'
                            ],
                            'expectedAttendees' => 1200,
                            'agenda' => [
                                ['time' => '12:00 PM', 'topic' => 'Panel Introduction'],
                                ['time' => '12:15 PM', 'topic' => 'Key Discussion Topics'],
                                ['time' => '12:45 PM', 'topic' => 'Audience Q&A']
                            ],
                            'isFeatured' => false
                        ],
                        [
                            'id' => 'demand-forecasting-masterclass',
                            'title' => 'Demand Forecasting Masterclass',
                            'description' => 'A comprehensive masterclass on demand forecasting techniques using machine learning and statistical methods.',
                            'category' => 'Workshop',
                            'region' => 'Asia Pacific',
                            'startDate' => '2024-09-12',
                            'endDate' => '2024-09-12',
                            'time' => '8:00 AM',
                            'timezone' => 'SGT',
                            'duration' => '4 hours',
                            'isFree' => false,
                            'hasRecording' => true,
                            'certificateAvailable' => true,
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop',
                            'speaker' => [
                                'name' => 'Dr. Priya Sharma',
                                'title' => 'Data Science Director',
                                'company' => 'Analytics Hub'
                            ],
                            'expectedAttendees' => 500,
                            'agenda' => [
                                ['time' => '8:00 AM', 'topic' => 'Forecasting Fundamentals'],
                                ['time' => '9:30 AM', 'topic' => 'ML Models for Demand'],
                                ['time' => '11:00 AM', 'topic' => 'Hands-on Exercise']
                            ],
                            'isFeatured' => true
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 634,
                'section_key' => 'virtualEvents',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => 'Virtual Experience',
                    'title' => [
                        'prefix' => 'Immersive',
                        'highlight' => 'Virtual Events',
                        'suffix' => ''
                    ],
                    'description' => 'Experience interactive virtual events with live streaming, networking lounges, exhibitor booths, and real-time engagement tools.',
                    'stats' => [
                        ['value' => '40+', 'label' => 'Annual Events'],
                        ['value' => '15K+', 'label' => 'Attendees'],
                        ['value' => '500+', 'label' => 'Networking Hours'],
                        ['value' => '100+', 'label' => 'Exhibitors']
                    ],
                    'featuredEventId' => 'virtual-supply-chain-summit',
                    'tabs' => [
                        ['id' => 'upcoming', 'label' => 'Upcoming Events', 'icon' => 'calendar'],
                        ['id' => 'featured', 'label' => 'Featured', 'icon' => 'star'],
                        ['id' => 'recorded', 'label' => 'On-Demand', 'icon' => 'video'],
                        ['id' => 'registered', 'label' => 'My Events', 'icon' => 'ticket']
                    ],
                    'virtualEvents' => [
                        [
                            'id' => 'virtual-supply-chain-summit',
                            'title' => 'Virtual Supply Chain Summit 2024',
                            'description' => 'Join industry leaders for a fully immersive virtual summit featuring keynote speeches, panel discussions, and networking opportunities.',
                            'category' => 'Conference',
                            'region' => 'Global',
                            'startDate' => '2024-06-20',
                            'endDate' => '2024-06-21',
                            'time' => '10:00 AM',
                            'hasNetworking' => true,
                            'hasExhibitors' => true,
                            'hasRecording' => true,
                            'image' => 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=200&fit=crop',
                            'speaker' => [
                                'name' => 'Dr. Sarah Chen',
                                'title' => 'Supply Chain Director',
                                'company' => 'Global Logistics Institute'
                            ],
                            'isFeatured' => true
                        ],
                        [
                            'id' => 'ai-logistics-webinar',
                            'title' => 'AI in Logistics: Transforming Operations',
                            'description' => 'Learn how artificial intelligence is revolutionizing logistics operations, from route optimization to predictive maintenance.',
                            'category' => 'Webinar',
                            'region' => 'Global',
                            'startDate' => '2024-07-15',
                            'endDate' => '2024-07-15',
                            'time' => '11:00 AM',
                            'hasNetworking' => false,
                            'hasExhibitors' => false,
                            'hasRecording' => true,
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop',
                            'speaker' => [
                                'name' => 'Michael Zhang',
                                'title' => 'Chief AI Officer',
                                'company' => 'LogiTech AI'
                            ],
                            'isFeatured' => false
                        ],
                        [
                            'id' => 'sustainability-workshop',
                            'title' => 'Sustainable Supply Chain Workshop',
                            'description' => 'An interactive workshop on implementing sustainable practices in your supply chain. Learn from industry experts.',
                            'category' => 'Workshop',
                            'region' => 'Europe',
                            'startDate' => '2024-08-10',
                            'endDate' => '2024-08-10',
                            'time' => '2:00 PM',
                            'hasNetworking' => true,
                            'hasExhibitors' => false,
                            'hasRecording' => true,
                            'image' => 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=200&fit=crop',
                            'speaker' => [
                                'name' => 'Emma Watson',
                                'title' => 'Sustainability Lead',
                                'company' => 'Green Supply Chain Solutions'
                            ],
                            'isFeatured' => false
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 635,
                'section_key' => 'virtualEvents',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => 'AI-Powered Events',
                    'title' => [
                        'prefix' => 'Intelligent',
                        'highlight' => 'Virtual Events',
                        'suffix' => ''
                    ],
                    'description' => 'AI-powered matchmaking, personalized agendas, virtual swag bags, and gamified experiences. The future of virtual events is here.',
                    'stats' => [
                        ['value' => '5K+', 'label' => 'AI Matches', 'icon' => 'users'],
                        ['value' => '500+', 'label' => 'Live Sessions', 'icon' => 'video'],
                        ['value' => '50+', 'label' => 'Annual Events', 'icon' => 'calendar'],
                        ['value' => '10K+', 'label' => 'Points Earned', 'icon' => 'users']
                    ],
                    'featuredEventId' => 'ai-supply-chain-summit',
                    'tabs' => [
                        ['id' => 'upcoming', 'label' => 'Upcoming Events', 'icon' => 'calendar'],
                        ['id' => 'featured', 'label' => 'Featured', 'icon' => 'star'],
                        ['id' => 'recorded', 'label' => 'On-Demand', 'icon' => 'video'],
                        ['id' => 'registered', 'label' => 'My Events', 'icon' => 'ticket']
                    ],
                    'virtualEvents' => [
                        [
                            'id' => 'ai-supply-chain-summit',
                            'title' => 'AI Supply Chain Summit 2024',
                            'description' => 'Experience the convergence of AI and supply chain. AI-powered networking, personalized agendas, and immersive sessions.',
                            'category' => 'Conference',
                            'region' => 'Global',
                            'startDate' => '2024-06-25',
                            'endDate' => '2024-06-26',
                            'time' => '10:00 AM',
                            'hasAIMatchmaking' => true,
                            'hasRecording' => true,
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop',
                            'speaker' => [
                                'name' => 'Dr. Sarah Chen',
                                'title' => 'AI Research Director',
                                'company' => 'AI Supply Chain Institute'
                            ],
                            'agenda' => [
                                ['time' => '10:00 AM', 'topic' => 'Keynote: AI in Supply Chain', 'speaker' => 'Dr. Sarah Chen'],
                                ['time' => '11:30 AM', 'topic' => 'Panel: AI Implementation Strategies', 'speaker' => 'Industry Panel'],
                                ['time' => '2:00 PM', 'topic' => 'Workshop: Building AI Models', 'speaker' => 'Tech Workshop']
                            ],
                            'isFeatured' => true
                        ],
                        [
                            'id' => 'digital-transformation-webinar',
                            'title' => 'Digital Transformation in Logistics Webinar',
                            'description' => 'Learn how to leverage digital technologies to transform your logistics operations.',
                            'category' => 'Webinar',
                            'region' => 'Global',
                            'startDate' => '2024-07-18',
                            'endDate' => '2024-07-18',
                            'time' => '12:00 PM',
                            'hasRecording' => true,
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=200&fit=crop',
                            'speaker' => [
                                'name' => 'Michael Zhang',
                                'title' => 'Digital Transformation Lead',
                                'company' => 'LogiTech'
                            ],
                            'isFeatured' => false
                        ],
                        [
                            'id' => 'sustainability-summit',
                            'title' => 'Sustainable Supply Chain Summit',
                            'description' => 'Join experts to discuss sustainable practices and green logistics strategies.',
                            'category' => 'Summit',
                            'region' => 'Europe',
                            'startDate' => '2024-08-12',
                            'endDate' => '2024-08-13',
                            'time' => '9:00 AM',
                            'hasAIMatchmaking' => true,
                            'hasRecording' => true,
                            'image' => 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=200&fit=crop',
                            'speaker' => [
                                'name' => 'Emma Watson',
                                'title' => 'Sustainability Director',
                                'company' => 'Green Supply Chain'
                            ],
                            'isFeatured' => false
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 636,
                'section_key' => 'virtualEvents',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Events Calendar Variants
            [
                'id' => 637,
                'section_key' => 'eventCalendar',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => 'Event Calendar',
                    'title' => [
                        'prefix' => 'Stay Updated with',
                        'highlight' => 'Upcoming Events',
                        'suffix' => ''
                    ],
                    'description' => 'Browse our comprehensive calendar of webinars, conferences, workshops, and networking events. Find events that match your interests and schedule.',
                    'stats' => [
                        ['value' => '50+', 'label' => 'Annual Events', 'icon' => 'calendar'],
                        ['value' => '10K+', 'label' => 'Attendees', 'icon' => 'users'],
                        ['value' => '30+', 'label' => 'Countries', 'icon' => 'globe'],
                        ['value' => '100+', 'label' => 'Speakers', 'icon' => 'users']
                    ],
                    'events' => [
                        [
                            'id' => 'global-supply-chain-summit',
                            'title' => 'Global Supply Chain Summit 2024',
                            'description' => 'Join industry leaders for a 2-day summit covering the latest trends in supply chain management, sustainability, and digital transformation.',
                            'category' => 'Conference',
                            'type' => 'hybrid',
                            'startDate' => '2024-06-15',
                            'endDate' => '2024-06-16',
                            'time' => '9:00 AM',
                            'location' => ['city' => 'Singapore', 'country' => 'Singapore'],
                            'image' => 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=200&fit=crop',
                            'speaker' => ['name' => 'Dr. Sarah Chen', 'title' => 'Supply Chain Director'],
                            'isFeatured' => true
                        ],
                        [
                            'id' => 'ai-logistics-webinar',
                            'title' => 'AI in Logistics Webinar',
                            'description' => 'Learn how artificial intelligence is transforming logistics operations, from route optimization to predictive maintenance.',
                            'category' => 'Webinar',
                            'type' => 'virtual',
                            'startDate' => '2024-06-20',
                            'endDate' => '2024-06-20',
                            'time' => '11:00 AM',
                            'location' => ['city' => 'Online', 'country' => 'Virtual'],
                            'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop',
                            'speaker' => ['name' => 'Michael Zhang', 'title' => 'Chief AI Officer'],
                            'isFeatured' => false
                        ],
                        [
                            'id' => 'sustainability-workshop',
                            'title' => 'Sustainability Workshop',
                            'description' => 'Interactive workshop on implementing sustainable practices in your supply chain, including carbon footprint reduction and circular economy.',
                            'category' => 'Workshop',
                            'type' => 'in-person',
                            'startDate' => '2024-07-10',
                            'endDate' => '2024-07-10',
                            'time' => '1:00 PM',
                            'location' => ['city' => 'London', 'country' => 'UK'],
                            'image' => 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=200&fit=crop',
                            'speaker' => ['name' => 'Emma Watson', 'title' => 'Sustainability Lead'],
                            'isFeatured' => false
                        ],
                        [
                            'id' => 'procurement-panel',
                            'title' => 'Strategic Procurement Panel Discussion',
                            'description' => 'Join top procurement leaders for a discussion on navigating global disruptions and building resilient supplier networks.',
                            'category' => 'Panel',
                            'type' => 'virtual',
                            'startDate' => '2024-07-18',
                            'endDate' => '2024-07-18',
                            'time' => '12:00 PM',
                            'location' => ['city' => 'Online', 'country' => 'Virtual'],
                            'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=200&fit=crop',
                            'speaker' => ['name' => 'David Kim', 'title' => 'CPO'],
                            'isFeatured' => false
                        ],
                        [
                            'id' => 'logistics-meetup',
                            'title' => 'Logistics Innovation Meetup',
                            'description' => 'Networking event for logistics professionals. Share ideas, discuss challenges, and explore new technologies.',
                            'category' => 'Meetup',
                            'type' => 'in-person',
                            'startDate' => '2024-08-05',
                            'endDate' => '2024-08-05',
                            'time' => '6:00 PM',
                            'location' => ['city' => 'Chicago', 'country' => 'USA'],
                            'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=200&fit=crop',
                            'speaker' => null,
                            'isFeatured' => false
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 638,
                'section_key' => 'eventCalendar',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => 'Event Calendar',
                    'title' => [
                        'prefix' => 'Manage Your',
                        'highlight' => 'Event Schedule',
                        'suffix' => ''
                    ],
                    'description' => 'Create, manage, and track all your events in one place. Drag and drop to reschedule, set reminders, and export your calendar.',
                    'stats' => [
                        ['value' => '25+', 'label' => 'Total Events'],
                        ['value' => '5K+', 'label' => 'Attendees'],
                        ['value' => '15+', 'label' => 'Countries'],
                        ['value' => '50+', 'label' => 'Reminders Set']
                    ],
                    'events' => [
                        [
                            'id' => 1,
                            'title' => 'Global Supply Chain Summit 2024',
                            'description' => 'Join industry leaders for a 2-day summit covering the latest trends in supply chain management, sustainability, and digital transformation.',
                            'category' => 'Conference',
                            'type' => 'hybrid',
                            'startDate' => '2024-06-15',
                            'endDate' => '2024-06-16',
                            'time' => '9:00 AM',
                            'endTime' => '5:00 PM',
                            'location' => ['venue' => 'Convention Center', 'city' => 'Singapore', 'country' => 'Singapore'],
                            'speaker' => ['name' => 'Dr. Sarah Chen', 'title' => 'Supply Chain Director', 'company' => 'Global Logistics Institute'],
                            'price' => '$899',
                            'maxAttendees' => '500',
                            'registrationLink' => 'https://example.com/register'
                        ],
                        [
                            'id' => 2,
                            'title' => 'AI in Logistics Webinar',
                            'description' => 'Learn how artificial intelligence is transforming logistics operations, from route optimization to predictive maintenance.',
                            'category' => 'Webinar',
                            'type' => 'virtual',
                            'startDate' => '2024-06-20',
                            'endDate' => '2024-06-20',
                            'time' => '11:00 AM',
                            'endTime' => '12:30 PM',
                            'location' => ['venue' => 'Online', 'city' => 'Virtual', 'country' => 'Global'],
                            'speaker' => ['name' => 'Michael Zhang', 'title' => 'Chief AI Officer', 'company' => 'LogiTech AI'],
                            'price' => 'Free',
                            'maxAttendees' => '1000',
                            'registrationLink' => 'https://example.com/webinar'
                        ],
                        [
                            'id' => 3,
                            'title' => 'Sustainability Workshop',
                            'description' => 'Interactive workshop on implementing sustainable practices in your supply chain, including carbon footprint reduction and circular economy.',
                            'category' => 'Workshop',
                            'type' => 'in-person',
                            'startDate' => '2024-07-10',
                            'endDate' => '2024-07-10',
                            'time' => '1:00 PM',
                            'endTime' => '4:00 PM',
                            'location' => ['venue' => 'Green Building', 'city' => 'London', 'country' => 'UK'],
                            'speaker' => ['name' => 'Emma Watson', 'title' => 'Sustainability Lead', 'company' => 'Green Supply Chain Solutions'],
                            'price' => '$149',
                            'maxAttendees' => '50',
                            'registrationLink' => 'https://example.com/workshop'
                        ],
                        [
                            'id' => 4,
                            'title' => 'Strategic Procurement Panel',
                            'description' => 'Join top procurement leaders for a discussion on navigating global disruptions and building resilient supplier networks.',
                            'category' => 'Panel',
                            'type' => 'virtual',
                            'startDate' => '2024-07-18',
                            'endDate' => '2024-07-18',
                            'time' => '12:00 PM',
                            'endTime' => '1:30 PM',
                            'location' => ['venue' => 'Online', 'city' => 'Virtual', 'country' => 'Global'],
                            'speaker' => ['name' => 'David Kim', 'title' => 'CPO', 'company' => 'Global Manufacturing Corp'],
                            'price' => 'Free',
                            'maxAttendees' => '2000',
                            'registrationLink' => 'https://example.com/panel'
                        ],
                        [
                            'id' => 5,
                            'title' => 'Logistics Innovation Meetup',
                            'description' => 'Networking event for logistics professionals. Share ideas, discuss challenges, and explore new technologies.',
                            'category' => 'Meetup',
                            'type' => 'in-person',
                            'startDate' => '2024-08-05',
                            'endDate' => '2024-08-05',
                            'time' => '6:00 PM',
                            'endTime' => '8:00 PM',
                            'location' => ['venue' => 'Tech Hub', 'city' => 'Chicago', 'country' => 'USA'],
                            'speaker' => ['name' => 'Local Industry Leaders', 'title' => 'Panel', 'company' => 'Various'],
                            'price' => '$25',
                            'maxAttendees' => '100',
                            'registrationLink' => 'https://example.com/meetup'
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 639,
                'section_key' => 'eventCalendar',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => 'Enterprise Calendar',
                    'title' => [
                        'prefix' => 'Intelligent',
                        'highlight' => 'Event Management',
                        'suffix' => ''
                    ],
                    'description' => 'AI-powered scheduling, resource management, waitlist automation, and advanced analytics for enterprise event planning.',
                    'stats' => [
                        ['value' => '100+', 'label' => 'Total Events'],
                        ['value' => '25K+', 'label' => 'Attendees'],
                        ['value' => '500+', 'label' => 'Waitlist'],
                        ['value' => '15+', 'label' => 'Countries']
                    ],
                    'events' => [
                        [
                            'id' => 1,
                            'title' => 'Global Supply Chain Summit 2024',
                            'description' => 'The premier event for supply chain professionals. Join industry leaders for keynotes, panels, and networking.',
                            'category' => 'Conference',
                            'type' => 'hybrid',
                            'priority' => 'high',
                            'color' => '#3B82F6',
                            'startDate' => '2024-06-15',
                            'endDate' => '2024-06-16',
                            'time' => '9:00 AM',
                            'endTime' => '5:00 PM',
                            'timezone' => 'America/New_York',
                            'location' => ['venue' => 'Convention Center', 'city' => 'New York', 'country' => 'USA', 'virtualLink' => 'https://example.com/virtual'],
                            'speaker' => ['name' => 'Dr. Sarah Chen', 'title' => 'Supply Chain Director', 'company' => 'Global Logistics Institute', 'email' => 'sarah.chen@example.com', 'bio' => '20+ years in supply chain innovation.'],
                            'capacity' => ['maxAttendees' => '500', 'currentWaitList' => 25],
                            'price' => ['amount' => '899', 'currency' => 'USD', 'earlyBirdPrice' => '699', 'earlyBirdDeadline' => '2024-05-15'],
                            'status' => 'published'
                        ],
                        [
                            'id' => 2,
                            'title' => 'AI in Logistics Webinar',
                            'description' => 'Learn how artificial intelligence is transforming logistics operations.',
                            'category' => 'Webinar',
                            'type' => 'virtual',
                            'priority' => 'medium',
                            'color' => '#10B981',
                            'startDate' => '2024-06-20',
                            'endDate' => '2024-06-20',
                            'time' => '11:00 AM',
                            'endTime' => '12:30 PM',
                            'timezone' => 'America/Los_Angeles',
                            'location' => ['venue' => 'Online', 'city' => 'Virtual', 'country' => 'Global'],
                            'speaker' => ['name' => 'Michael Zhang', 'title' => 'Chief AI Officer', 'company' => 'LogiTech AI', 'email' => 'michael.zhang@example.com'],
                            'capacity' => ['maxAttendees' => '1000', 'currentWaitList' => 0],
                            'price' => ['amount' => '0', 'currency' => 'USD'],
                            'status' => 'published'
                        ],
                        [
                            'id' => 3,
                            'title' => 'Sustainability Workshop',
                            'description' => 'Hands-on workshop on implementing sustainable practices in your supply chain.',
                            'category' => 'Workshop',
                            'type' => 'in-person',
                            'priority' => 'high',
                            'color' => '#F59E0B',
                            'startDate' => '2024-07-10',
                            'endDate' => '2024-07-10',
                            'time' => '1:00 PM',
                            'endTime' => '4:00 PM',
                            'timezone' => 'Europe/London',
                            'location' => ['venue' => 'Green Building', 'city' => 'London', 'country' => 'UK'],
                            'speaker' => ['name' => 'Emma Watson', 'title' => 'Sustainability Lead', 'company' => 'Green Supply Chain Solutions'],
                            'capacity' => ['maxAttendees' => '50', 'currentWaitList' => 12],
                            'price' => ['amount' => '149', 'currency' => 'USD'],
                            'status' => 'published'
                        ],
                        [
                            'id' => 4,
                            'title' => 'Strategic Procurement Panel',
                            'description' => 'Join top procurement leaders for a discussion on navigating global disruptions.',
                            'category' => 'Panel',
                            'type' => 'virtual',
                            'priority' => 'medium',
                            'color' => '#8B5CF6',
                            'startDate' => '2024-07-18',
                            'endDate' => '2024-07-18',
                            'time' => '12:00 PM',
                            'endTime' => '1:30 PM',
                            'timezone' => 'America/Chicago',
                            'location' => ['venue' => 'Online', 'city' => 'Virtual', 'country' => 'Global'],
                            'speaker' => ['name' => 'David Kim', 'title' => 'CPO', 'company' => 'Global Manufacturing Corp'],
                            'capacity' => ['maxAttendees' => '2000', 'currentWaitList' => 0],
                            'price' => ['amount' => '0', 'currency' => 'USD'],
                            'status' => 'published'
                        ],
                        [
                            'id' => 5,
                            'title' => 'Logistics Innovation Meetup',
                            'description' => 'Networking event for logistics professionals. Share ideas and explore new technologies.',
                            'category' => 'Meetup',
                            'type' => 'in-person',
                            'priority' => 'low',
                            'color' => '#EC4899',
                            'startDate' => '2024-08-05',
                            'endDate' => '2024-08-05',
                            'time' => '6:00 PM',
                            'endTime' => '8:00 PM',
                            'timezone' => 'America/Denver',
                            'location' => ['venue' => 'Tech Hub', 'city' => 'Denver', 'country' => 'USA'],
                            'speaker' => ['name' => 'Local Industry Leaders', 'title' => 'Panel', 'company' => 'Various'],
                            'capacity' => ['maxAttendees' => '100', 'currentWaitList' => 8],
                            'price' => ['amount' => '25', 'currency' => 'USD'],
                            'status' => 'published'
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 640,
                'section_key' => 'eventCalendar',
                'variant' => 'custom',
                'config' => json_encode([]),
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Past Event Recordings Variants
            [
                'id' => 641,
                'section_key' => 'pastEventRecordings',
                'variant' => 'variant1',
                'config' => json_encode([
                    'badge' => 'On-Demand',
                    'title' => [
                        'prefix' => 'Watch',
                        'highlight' => 'Past Events',
                        'suffix' => 'Any Time'
                    ],
                    'description' => 'Access recordings of our past webinars, conferences, and workshops. Learn at your own pace and revisit key insights from industry experts.',
                    'stats' => [
                        ['value' => '150+', 'label' => 'Recordings', 'icon' => 'video'],
                        ['value' => '500+', 'label' => 'Hours of Content', 'icon' => 'clock'],
                        ['value' => '100K+', 'label' => 'Total Views', 'icon' => 'users'],
                        ['value' => '10K+', 'label' => 'Downloads', 'icon' => 'download']
                    ],
                    'featuredRecordingId' => 'supply-chain-summit-2024',
                    'tabs' => [
                        ['id' => 'all', 'label' => 'All Recordings', 'icon' => 'video'],
                        ['id' => 'featured', 'label' => 'Featured', 'icon' => 'star'],
                        ['id' => 'most-viewed', 'label' => 'Most Viewed', 'icon' => 'trending'],
                        ['id' => 'bookmarked', 'label' => 'My Bookmarks', 'icon' => 'bookmark']
                    ],
                    'recordings' => [
                        [
                            'id' => 'supply-chain-summit-2024',
                            'title' => 'Global Supply Chain Summit 2024',
                            'description' => 'Full recording of the keynote session from our annual summit featuring industry leaders discussing the future of supply chain.',
                            'category' => 'Conference',
                            'type' => 'Keynote',
                            'year' => '2024',
                            'date' => '2024-03-15',
                            'duration' => '1:45:30',
                            'viewCount' => 12500,
                            'thumbnail' => 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=200&fit=crop',
                            'videoUrl' => 'https://www.w3schools.com/html/mov_bbb.mp4',
                            'downloadUrl' => '#',
                            'slidesUrl' => '#',
                            'certificateAvailable' => true,
                            'speaker' => [
                                'name' => 'Dr. Sarah Chen',
                                'title' => 'Supply Chain Director',
                                'company' => 'Global Logistics Institute'
                            ],
                            'transcript' => [
                                ['time' => '00:00', 'text' => 'Welcome to the Global Supply Chain Summit 2024...'],
                                ['time' => '05:30', 'text' => 'Today we\'re discussing the future of logistics...'],
                                ['time' => '15:45', 'text' => 'AI and automation are transforming our industry...']
                            ],
                            'isFeatured' => true
                        ],
                        [
                            'id' => 'ai-logistics-webinar',
                            'title' => 'AI in Logistics: Transforming Operations',
                            'description' => 'Learn how artificial intelligence is revolutionizing logistics operations, from route optimization to predictive maintenance.',
                            'category' => 'Webinar',
                            'type' => 'Educational',
                            'year' => '2024',
                            'date' => '2024-02-20',
                            'duration' => '58:15',
                            'viewCount' => 8750,
                            'thumbnail' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop',
                            'videoUrl' => 'https://www.w3schools.com/html/mov_bbb.mp4',
                            'speaker' => [
                                'name' => 'Michael Zhang',
                                'title' => 'Chief AI Officer',
                                'company' => 'LogiTech AI'
                            ],
                            'certificateAvailable' => true,
                            'isFeatured' => false
                        ],
                        [
                            'id' => 'sustainability-workshop',
                            'title' => 'Sustainable Supply Chain Workshop',
                            'description' => 'Interactive workshop on implementing sustainable practices in your supply chain, including carbon footprint reduction.',
                            'category' => 'Workshop',
                            'type' => 'Interactive',
                            'year' => '2024',
                            'date' => '2024-01-25',
                            'duration' => '2:15:00',
                            'viewCount' => 5200,
                            'thumbnail' => 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=200&fit=crop',
                            'videoUrl' => 'https://www.w3schools.com/html/mov_bbb.mp4',
                            'slidesUrl' => '#',
                            'speaker' => [
                                'name' => 'Emma Watson',
                                'title' => 'Sustainability Lead',
                                'company' => 'Green Supply Chain Solutions'
                            ],
                            'certificateAvailable' => true,
                            'isFeatured' => false
                        ],
                        [
                            'id' => 'procurement-panel',
                            'title' => 'Strategic Procurement Panel Discussion',
                            'description' => 'Join top procurement leaders for a discussion on navigating global disruptions and building resilient supplier networks.',
                            'category' => 'Panel',
                            'type' => 'Discussion',
                            'year' => '2023',
                            'date' => '2023-11-10',
                            'duration' => '1:30:00',
                            'viewCount' => 3800,
                            'thumbnail' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=200&fit=crop',
                            'videoUrl' => 'https://www.w3schools.com/html/mov_bbb.mp4',
                            'speaker' => [
                                'name' => 'David Kim',
                                'title' => 'CPO',
                                'company' => 'Global Manufacturing Corp'
                            ],
                            'isFeatured' => false
                        ],
                        [
                            'id' => 'logistics-tech-showcase',
                            'title' => 'Logistics Technology Showcase 2023',
                            'description' => 'Explore cutting-edge logistics technologies including autonomous vehicles, drone delivery, and smart warehousing.',
                            'category' => 'Conference',
                            'type' => 'Showcase',
                            'year' => '2023',
                            'date' => '2023-10-05',
                            'duration' => '2:30:00',
                            'viewCount' => 6200,
                            'thumbnail' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=200&fit=crop',
                            'videoUrl' => 'https://www.w3schools.com/html/mov_bbb.mp4',
                            'speaker' => [
                                'name' => 'Alex Rivera',
                                'title' => 'CTO',
                                'company' => 'LogiTech Innovations'
                            ],
                            'isFeatured' => true
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 642,
                'section_key' => 'pastEventRecordings',
                'variant' => 'variant2',
                'config' => json_encode([
                    'badge' => 'On-Demand Library',
                    'title' => [
                        'prefix' => 'Explore Our',
                        'highlight' => 'Video Library',
                        'suffix' => ''
                    ],
                    'description' => 'Access hundreds of recorded sessions, create playlists, track your progress, and get personalized recommendations based on your interests.',
                    'stats' => [
                        ['value' => '250+', 'label' => 'Recordings'],
                        ['value' => '800+', 'label' => 'Hours of Content'],
                        ['value' => '150K+', 'label' => 'Total Views'],
                        ['value' => '25+', 'label' => 'Playlists']
                    ],
                    'featuredRecordingId' => 'supply-chain-summit-2024',
                    'tabs' => [
                        ['id' => 'all', 'label' => 'All Recordings', 'icon' => 'video'],
                        ['id' => 'featured', 'label' => 'Featured', 'icon' => 'star'],
                        ['id' => 'playlists', 'label' => 'Playlists', 'icon' => 'playlist'],
                        ['id' => 'continue', 'label' => 'Continue Watching', 'icon' => 'history'],
                        ['id' => 'bookmarked', 'label' => 'My Bookmarks', 'icon' => 'bookmark']
                    ],
                    'recordings' => [
                        [
                            'id' => 'supply-chain-summit-2024',
                            'title' => 'Global Supply Chain Summit 2024',
                            'description' => 'Full recording of the keynote session from our annual summit featuring industry leaders discussing the future of supply chain.',
                            'category' => 'Conference',
                            'type' => 'Keynote',
                            'year' => '2024',
                            'date' => '2024-03-15',
                            'duration' => '1:45:30',
                            'viewCount' => 12500,
                            'thumbnail' => 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=200&fit=crop',
                            'videoUrl' => 'https://www.w3schools.com/html/mov_bbb.mp4',
                            'downloadUrl' => '#',
                            'slidesUrl' => '#',
                            'certificateAvailable' => true,
                            'speaker' => [
                                'name' => 'Dr. Sarah Chen',
                                'title' => 'Supply Chain Director',
                                'company' => 'Global Logistics Institute'
                            ],
                            'transcript' => [
                                ['time' => '00:00', 'text' => 'Welcome to the Global Supply Chain Summit 2024...'],
                                ['time' => '05:30', 'text' => 'Today we\'re discussing the future of logistics...'],
                                ['time' => '15:45', 'text' => 'AI and automation are transforming our industry...']
                            ],
                            'isFeatured' => true
                        ],
                        [
                            'id' => 'ai-logistics-webinar',
                            'title' => 'AI in Logistics: Transforming Operations',
                            'description' => 'Learn how artificial intelligence is revolutionizing logistics operations, from route optimization to predictive maintenance.',
                            'category' => 'Webinar',
                            'type' => 'Educational',
                            'year' => '2024',
                            'date' => '2024-02-20',
                            'duration' => '58:15',
                            'viewCount' => 8750,
                            'thumbnail' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop',
                            'videoUrl' => 'https://www.w3schools.com/html/mov_bbb.mp4',
                            'speaker' => [
                                'name' => 'Michael Zhang',
                                'title' => 'Chief AI Officer',
                                'company' => 'LogiTech AI'
                            ],
                            'certificateAvailable' => true,
                            'isFeatured' => false
                        ],
                        [
                            'id' => 'sustainability-workshop',
                            'title' => 'Sustainable Supply Chain Workshop',
                            'description' => 'Interactive workshop on implementing sustainable practices in your supply chain, including carbon footprint reduction.',
                            'category' => 'Workshop',
                            'type' => 'Interactive',
                            'year' => '2024',
                            'date' => '2024-01-25',
                            'duration' => '2:15:00',
                            'viewCount' => 5200,
                            'thumbnail' => 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=200&fit=crop',
                            'videoUrl' => 'https://www.w3schools.com/html/mov_bbb.mp4',
                            'slidesUrl' => '#',
                            'speaker' => [
                                'name' => 'Emma Watson',
                                'title' => 'Sustainability Lead',
                                'company' => 'Green Supply Chain Solutions'
                            ],
                            'certificateAvailable' => true,
                            'isFeatured' => false
                        ],
                        [
                            'id' => 'procurement-panel',
                            'title' => 'Strategic Procurement Panel Discussion',
                            'description' => 'Join top procurement leaders for a discussion on navigating global disruptions and building resilient supplier networks.',
                            'category' => 'Panel',
                            'type' => 'Discussion',
                            'year' => '2023',
                            'date' => '2023-11-10',
                            'duration' => '1:30:00',
                            'viewCount' => 3800,
                            'thumbnail' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=200&fit=crop',
                            'videoUrl' => 'https://www.w3schools.com/html/mov_bbb.mp4',
                            'speaker' => [
                                'name' => 'David Kim',
                                'title' => 'CPO',
                                'company' => 'Global Manufacturing Corp'
                            ],
                            'isFeatured' => false
                        ],
                        [
                            'id' => 'logistics-tech-showcase',
                            'title' => 'Logistics Technology Showcase 2023',
                            'description' => 'Explore cutting-edge logistics technologies including autonomous vehicles, drone delivery, and smart warehousing.',
                            'category' => 'Conference',
                            'type' => 'Showcase',
                            'year' => '2023',
                            'date' => '2023-10-05',
                            'duration' => '2:30:00',
                            'viewCount' => 6200,
                            'thumbnail' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=200&fit=crop',
                            'videoUrl' => 'https://www.w3schools.com/html/mov_bbb.mp4',
                            'speaker' => [
                                'name' => 'Alex Rivera',
                                'title' => 'CTO',
                                'company' => 'LogiTech Innovations'
                            ],
                            'isFeatured' => true
                        ]
                    ],
                    'playlists' => [
                        [
                            'id' => 'summit-2024-highlights',
                            'title' => 'Summit 2024 Highlights',
                            'description' => 'Best moments and key insights from our annual supply chain summit.',
                            'thumbnail' => 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=200&fit=crop',
                            'duration' => '3:15:00',
                            'videos' => [
                                ['id' => 'supply-chain-summit-2024', 'title' => 'Global Supply Chain Summit 2024', 'duration' => '1:45:30', 'thumbnail' => 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=200&fit=crop'],
                                ['id' => 'ai-logistics-webinar', 'title' => 'AI in Logistics: Transforming Operations', 'duration' => '58:15', 'thumbnail' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop']
                            ]
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 643,
                'section_key' => 'pastEventRecordings',
                'variant' => 'variant3',
                'config' => json_encode([
                    'badge' => 'AI-Powered Learning',
                    'title' => [
                        'prefix' => 'Intelligent',
                        'highlight' => 'Video Library',
                        'suffix' => ''
                    ],
                    'description' => 'AI-powered search, smart transcripts, chapter markers, interactive quizzes, and learning analytics. Transform how you learn from past events.',
                    'stats' => [
                        ['value' => '200+', 'label' => 'Courses', 'icon' => 'video'],
                        ['value' => '15K+', 'label' => 'Quiz Takers', 'icon' => 'quiz'],
                        ['value' => '3K+', 'label' => 'Certificates Issued', 'icon' => 'badge'],
                        ['value' => '5K+', 'label' => 'AI Searches', 'icon' => 'users']
                    ],
                    'featuredRecordingId' => 'supply-chain-strategy-masterclass',
                    'tabs' => [
                        ['id' => 'all', 'label' => 'All Recordings', 'icon' => 'video'],
                        ['id' => 'featured', 'label' => 'Featured', 'icon' => 'star'],
                        ['id' => 'playlists', 'label' => 'Playlists', 'icon' => 'playlist'],
                        ['id' => 'continue', 'label' => 'Continue Learning', 'icon' => 'history'],
                        ['id' => 'certified', 'label' => 'Certified', 'icon' => 'badge']
                    ],
                    'recordings' => [
                        [
                            'id' => 'supply-chain-strategy-masterclass',
                            'title' => 'Supply Chain Strategy Masterclass',
                            'description' => 'Learn how to develop and execute winning supply chain strategies. Includes interactive quiz and certificate upon completion.',
                            'category' => 'Masterclass',
                            'type' => 'Educational',
                            'year' => '2024',
                            'date' => '2024-03-20',
                            'duration' => '2:15:00',
                            'thumbnail' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop',
                            'videoUrl' => 'https://www.w3schools.com/html/mov_bbb.mp4',
                            'slidesUrl' => '#',
                            'certificateAvailable' => true,
                            'quiz' => [
                                'questions' => [
                                    ['id' => 'q1', 'text' => 'What is the primary goal of supply chain strategy?', 'options' => ['Cost reduction', 'Customer satisfaction', 'Both', 'None'], 'correctAnswer' => 'Both'],
                                    ['id' => 'q2', 'text' => 'Which of these is a key component of supply chain design?', 'options' => ['Network optimization', 'Inventory placement', 'Transportation planning', 'All of these'], 'correctAnswer' => 'All of these']
                                ]
                            ],
                            'chapters' => [
                                ['startTime' => 0, 'title' => 'Introduction', 'description' => 'Course overview and learning objectives'],
                                ['startTime' => 300, 'title' => 'Strategic Framework', 'description' => 'Key components of supply chain strategy'],
                                ['startTime' => 900, 'title' => 'Case Study', 'description' => 'Real-world application examples'],
                                ['startTime' => 1500, 'title' => 'Conclusion', 'description' => 'Key takeaways and next steps']
                            ],
                            'transcript' => [
                                ['startTime' => 0, 'text' => 'Welcome to the Supply Chain Strategy Masterclass...'],
                                ['startTime' => 60, 'text' => 'Today we\'ll explore the fundamentals of strategic supply chain management...'],
                                ['startTime' => 120, 'text' => 'Let\'s start with defining what makes a supply chain truly strategic...']
                            ],
                            'speaker' => [
                                'name' => 'Dr. Sarah Chen',
                                'title' => 'Supply Chain Director',
                                'company' => 'Global Logistics Institute'
                            ],
                            'isFeatured' => true
                        ],
                        [
                            'id' => 'ai-logistics-webinar',
                            'title' => 'AI in Logistics: Transforming Operations',
                            'description' => 'Learn how artificial intelligence is revolutionizing logistics operations, from route optimization to predictive maintenance.',
                            'category' => 'Webinar',
                            'type' => 'Educational',
                            'year' => '2024',
                            'date' => '2024-02-15',
                            'duration' => '58:15',
                            'thumbnail' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=200&fit=crop',
                            'videoUrl' => 'https://www.w3schools.com/html/mov_bbb.mp4',
                            'speaker' => [
                                'name' => 'Michael Zhang',
                                'title' => 'Chief AI Officer',
                                'company' => 'LogiTech AI'
                            ],
                            'certificateAvailable' => true,
                            'quiz' => [
                                'questions' => [
                                    ['id' => 'q1', 'text' => 'What is a primary application of AI in logistics?', 'options' => ['Route optimization', 'Inventory counting', 'HR management', 'Marketing'], 'correctAnswer' => 'Route optimization']
                                ]
                            ],
                            'chapters' => [
                                ['startTime' => 0, 'title' => 'AI Overview', 'description' => 'Introduction to AI in logistics'],
                                ['startTime' => 600, 'title' => 'Use Cases', 'description' => 'Real-world applications']
                            ],
                            'isFeatured' => false
                        ],
                        [
                            'id' => 'sustainability-workshop',
                            'title' => 'Sustainable Supply Chain Workshop',
                            'description' => 'Interactive workshop on implementing sustainable practices in your supply chain, including carbon footprint reduction.',
                            'category' => 'Workshop',
                            'type' => 'Interactive',
                            'year' => '2024',
                            'date' => '2024-01-25',
                            'duration' => '2:15:00',
                            'thumbnail' => 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=200&fit=crop',
                            'videoUrl' => 'https://www.w3schools.com/html/mov_bbb.mp4',
                            'speaker' => [
                                'name' => 'Emma Watson',
                                'title' => 'Sustainability Lead',
                                'company' => 'Green Supply Chain Solutions'
                            ],
                            'certificateAvailable' => true,
                            'isFeatured' => false
                        ],
                        [
                            'id' => 'procurement-panel',
                            'title' => 'Strategic Procurement Panel Discussion',
                            'description' => 'Join top procurement leaders for a discussion on navigating global disruptions and building resilient supplier networks.',
                            'category' => 'Panel',
                            'type' => 'Discussion',
                            'year' => '2023',
                            'date' => '2023-11-10',
                            'duration' => '1:30:00',
                            'thumbnail' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=200&fit=crop',
                            'videoUrl' => 'https://www.w3schools.com/html/mov_bbb.mp4',
                            'speaker' => [
                                'name' => 'David Kim',
                                'title' => 'CPO',
                                'company' => 'Global Manufacturing Corp'
                            ],
                            'isFeatured' => false
                        ]
                    ],
                    'playlists' => [
                        [
                            'id' => 'supply-chain-fundamentals',
                            'title' => 'Supply Chain Fundamentals',
                            'description' => 'Essential concepts and strategies for supply chain professionals.',
                            'thumbnail' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop',
                            'duration' => '4:30:00',
                            'videos' => [
                                ['id' => 'supply-chain-strategy-masterclass', 'title' => 'Supply Chain Strategy Masterclass', 'duration' => '2:15:00', 'thumbnail' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop'],
                                ['id' => 'ai-logistics-webinar', 'title' => 'AI in Logistics: Transforming Operations', 'duration' => '58:15', 'thumbnail' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=200&fit=crop']
                            ]
                        ]
                    ]
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 644,
                'section_key' => 'pastEventRecordings',
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
