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
        ];

        // Add the new Services variants
        DB::table('section_variants')->upsert(
            $variants,
            ['section_key', 'variant'],
            ['config', 'updated_at']
        );
    }
}
