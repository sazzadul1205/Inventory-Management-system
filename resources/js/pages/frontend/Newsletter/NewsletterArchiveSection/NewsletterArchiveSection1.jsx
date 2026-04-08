// page/frontend/Newsletter/NewsletterArchiveSection/NewsletterArchiveSection1.jsx

// React
import { useState } from 'react';

// Icons
import {
    HiOutlineNewspaper,
    HiOutlineCalendar,
    HiOutlineClock,
    HiOutlineEye,
    HiOutlineDownload,
    HiOutlineShare,
    HiOutlineBookmark,
    HiOutlineSearch,
    HiOutlineFilter,
    HiOutlineArrowRight,
    HiOutlineCheckCircle,
    HiOutlineStar,
    HiOutlineUserGroup,
    HiOutlineGlobe,
    HiOutlineChip,
    HiOutlineAcademicCap,
    HiOutlineChartBar,
    HiOutlineTag,
    HiOutlineMail,
    HiOutlineHeart,
    HiOutlineThumbUp
} from 'react-icons/hi';
import { HiOutlineTrophy } from 'react-icons/hi2';

const NewsletterArchiveSection1 = ({ config }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedYear, setSelectedYear] = useState('all');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [expandedIssue, setExpandedIssue] = useState(null);

    // Icon mapping function
    const getIcon = (iconName, className = "w-5 h-5") => {
        const icons = {
            newspaper: <HiOutlineNewspaper className={className} />,
            calendar: <HiOutlineCalendar className={className} />,
            clock: <HiOutlineClock className={className} />,
            eye: <HiOutlineEye className={className} />,
            download: <HiOutlineDownload className={className} />,
            share: <HiOutlineShare className={className} />,
            bookmark: <HiOutlineBookmark className={className} />,
            search: <HiOutlineSearch className={className} />,
            filter: <HiOutlineFilter className={className} />,
            arrow: <HiOutlineArrowRight className={className} />,
            check: <HiOutlineCheckCircle className={className} />,
            star: <HiOutlineStar className={className} />,
            users: <HiOutlineUserGroup className={className} />,
            globe: <HiOutlineGlobe className={className} />,
            chip: <HiOutlineChip className={className} />,
            academic: <HiOutlineAcademicCap className={className} />,
            chart: <HiOutlineChartBar className={className} />,
            tag: <HiOutlineTag className={className} />,
            mail: <HiOutlineMail className={className} />,
            heart: <HiOutlineHeart className={className} />,
            thumbsup: <HiOutlineThumbUp className={className} />,
            trophy: <HiOutlineTrophy className={className} />
        };
        return icons[iconName] || <HiOutlineNewspaper className={className} />;
    };

    // Newsletter archive data
    const newsletterIssues = config?.newsletterIssues || [
        {
            id: 1,
            title: "Supply Chain Trends 2024",
            date: "March 15, 2024",
            category: "Trends",
            readTime: "5 min read",
            views: "2,847",
            likes: "342",
            description: "The top 10 trends shaping supply chain management this year, from AI integration to sustainability initiatives.",
            image: "/newsletters/trends-2024.jpg",
            featured: true,
            content: "In this issue, we explore the most significant trends transforming supply chain management in 2024. From the rise of generative AI in demand forecasting to the growing importance of circular economy principles, we cover what supply chain professionals need to know.",
            keyTopics: [
                "AI and Machine Learning in Demand Forecasting",
                "Sustainability and Circular Economy",
                "Resilience and Risk Management",
                "Digital Twins and Simulation"
            ]
        },
        {
            id: 2,
            title: "AI in Supply Chain",
            date: "March 8, 2024",
            category: "Technology",
            readTime: "4 min read",
            views: "3,124",
            likes: "567",
            description: "How artificial intelligence is revolutionizing logistics and supply chain operations.",
            image: "/newsletters/ai-supply-chain.jpg",
            featured: true,
            content: "Artificial intelligence is no longer a futuristic concept—it's transforming supply chains today. This edition explores practical applications of AI in inventory management, route optimization, and predictive maintenance.",
            keyTopics: [
                "Predictive Analytics for Demand Planning",
                "Computer Vision in Warehouse Operations",
                "Autonomous Vehicles and Drones",
                "AI-Powered Supplier Risk Assessment"
            ]
        },
        {
            id: 3,
            title: "Sustainability Strategies",
            date: "March 1, 2024",
            category: "Sustainability",
            readTime: "6 min read",
            views: "2,103",
            likes: "892",
            description: "Building a greener supply chain: Strategies for reducing carbon footprint and waste.",
            image: "/newsletters/sustainability.jpg",
            featured: false,
            content: "Sustainability is becoming a competitive advantage. This issue provides actionable strategies for reducing emissions, minimizing waste, and building a more environmentally responsible supply chain.",
            keyTopics: [
                "Carbon Footprint Measurement",
                "Sustainable Sourcing Practices",
                "Green Logistics and Transportation",
                "Circular Economy Implementation"
            ]
        },
        {
            id: 4,
            title: "Supply Chain Resilience",
            date: "February 23, 2024",
            category: "Risk Management",
            readTime: "5 min read",
            views: "1,892",
            likes: "234",
            description: "Building resilient supply chains that can withstand disruptions and adapt to change.",
            image: "/newsletters/resilience.jpg",
            featured: false,
            content: "Recent global disruptions have highlighted the importance of supply chain resilience. This edition explores strategies for building more robust and adaptable supply chains.",
            keyTopics: [
                "Multi-Sourcing Strategies",
                "Inventory Buffering Techniques",
                "Supplier Diversification",
                "Scenario Planning and Simulation"
            ]
        },
        {
            id: 5,
            title: "Digital Transformation",
            date: "February 16, 2024",
            category: "Technology",
            readTime: "4 min read",
            views: "2,456",
            likes: "456",
            description: "How digital technologies are reshaping supply chain management.",
            image: "/newsletters/digital-transformation.jpg",
            featured: true,
            content: "Digital transformation is accelerating across supply chains. This issue covers the technologies driving change and how organizations can successfully navigate their digital journey.",
            keyTopics: [
                "Cloud-Based Supply Chain Platforms",
                "IoT and Real-Time Tracking",
                "Blockchain for Traceability",
                "Low-Code Automation Tools"
            ]
        },
        {
            id: 6,
            title: "Talent Management",
            date: "February 9, 2024",
            category: "People",
            readTime: "5 min read",
            views: "1,567",
            likes: "189",
            description: "Attracting and retaining top talent in supply chain management.",
            image: "/newsletters/talent.jpg",
            featured: false,
            content: "The supply chain talent gap is widening. This edition provides insights on recruiting, developing, and retaining skilled professionals in a competitive market.",
            keyTopics: [
                "Skills Gap Analysis",
                "Training and Development Programs",
                "Remote Work in Supply Chain",
                "Diversity and Inclusion Initiatives"
            ]
        }
    ];

    // Filter issues
    const getFilteredIssues = () => {
        let issues = [...newsletterIssues];

        if (searchQuery) {
            issues = issues.filter(i =>
                i.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                i.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                i.keyTopics.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
            );
        }

        if (selectedYear !== 'all') {
            issues = issues.filter(i => i.date.includes(selectedYear));
        }

        if (selectedCategory !== 'all') {
            issues = issues.filter(i => i.category === selectedCategory);
        }

        return issues;
    };

    const filteredIssues = getFilteredIssues();
    const categories = config?.categories || [
        { id: "all", label: "All Categories", icon: "newspaper" },
        { id: "Trends", label: "Trends", icon: "chart" },
        { id: "Technology", label: "Technology", icon: "chip" },
        { id: "Sustainability", label: "Sustainability", icon: "globe" },
        { id: "Risk Management", label: "Risk Management", icon: "shield" },
        { id: "People", label: "People", icon: "users" }
    ];

    const years = config?.years || ["2024", "2023", "2022"];

    // Stats
    const stats = config?.stats || [
        { value: "50+", label: "Newsletters", icon: "newspaper" },
        { value: "25,000+", label: "Total Views", icon: "eye" },
        { value: "92%", label: "Reader Satisfaction", icon: "star" },
        { value: "15+", label: "Topics Covered", icon: "tag" }
    ];

    return (
        <section
            className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
            role="region"
            aria-label="Newsletter Archive Section"
        >
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
            <div className="absolute top-40 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true" />
            <div className="absolute bottom-40 right-0 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <div className="inline-flex items-center bg-blue-50 dark:bg-gray-800 rounded-full px-4 py-2 mb-6 border border-blue-100 dark:border-gray-700">
                        <HiOutlineNewspaper className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
                        <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                            {config?.badge || "Newsletter Archive"}
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        {config?.title?.prefix || "Browse Our"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Past Issues"}</span> {config?.title?.suffix || ""}
                    </h2>

                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        {config?.description || "Explore our complete archive of newsletters covering supply chain trends, technology insights, and industry best practices."}
                    </p>
                </div>

                {/* Stats Row */}
                <div className="flex flex-wrap justify-center gap-6 mb-12">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-2xl px-6 py-3 shadow-sm border border-gray-200 dark:border-gray-700">
                            <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                                {getIcon(stat.icon, "w-5 h-5 text-blue-600")}
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Search Bar */}
                <div className="relative max-w-2xl mx-auto mb-8">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <HiOutlineSearch className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder={config?.searchPlaceholder || "Search past issues by title, topic, or keywords..."}
                        className="w-full pl-12 pr-4 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500"
                        aria-label="Search newsletter archive"
                    />
                </div>

                {/* Category Filters */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id === 'all' ? 'all' : category.label)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${selectedCategory === (category.id === 'all' ? 'all' : category.label)
                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                }`}
                        >
                            {getIcon(category.icon, "w-4 h-4")}
                            {category.label}
                        </button>
                    ))}
                </div>

                {/* Year Filters */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    <button
                        onClick={() => setSelectedYear('all')}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedYear === 'all'
                            ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                            : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                            }`}
                    >
                        All Years
                    </button>
                    {years.map((year) => (
                        <button
                            key={year}
                            onClick={() => setSelectedYear(year)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedYear === year
                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                }`}
                        >
                            {year}
                        </button>
                    ))}
                </div>

                {/* Featured Issue */}
                {newsletterIssues.filter(i => i.featured).length > 0 && (
                    <div className="mb-12">
                        <div className="relative bg-linear-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl" aria-hidden="true" />
                            <div className="relative p-8 md:p-10">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                                        Featured Issue
                                    </span>
                                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                        <HiOutlineCalendar className="w-4 h-4" />
                                        <span>{newsletterIssues.find(i => i.featured)?.date}</span>
                                    </div>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                    {newsletterIssues.find(i => i.featured)?.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-6">
                                    {newsletterIssues.find(i => i.featured)?.description}
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    <button
                                        onClick={() => setExpandedIssue(expandedIssue === newsletterIssues.find(i => i.featured)?.id ? null : newsletterIssues.find(i => i.featured)?.id)}
                                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                                    >
                                        Read Issue
                                        <HiOutlineArrowRight className="w-4 h-4" />
                                    </button>
                                    <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-600 hover:text-blue-600">
                                        <HiOutlineDownload className="w-4 h-4" />
                                        Download PDF
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Newsletter Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {filteredIssues.map((issue) => {
                        const isExpanded = expandedIssue === issue.id;
                        return (
                            <div
                                key={issue.id}
                                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={issue.image}
                                        alt={issue.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        loading="lazy"
                                    />
                                    {issue.featured && (
                                        <div className="absolute top-3 left-3">
                                            <span className="px-2 py-1 bg-yellow-500 text-white text-xs font-semibold rounded-full">
                                                Featured
                                            </span>
                                        </div>
                                    )}
                                </div>

                                <div className="p-5">
                                    <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-3">
                                        <div className="flex items-center gap-1">
                                            <HiOutlineCalendar className="w-4 h-4" />
                                            <span>{issue.date}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <HiOutlineClock className="w-4 h-4" />
                                            <span>{issue.readTime}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <HiOutlineEye className="w-4 h-4" />
                                            <span>{issue.views}</span>
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                                        {issue.title}
                                    </h3>

                                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
                                        {issue.description}
                                    </p>

                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-2 py-1 rounded-full">
                                            {issue.category}
                                        </span>
                                    </div>

                                    {/* Expandable Content */}
                                    {isExpanded && (
                                        <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{issue.content}</p>
                                            <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">Key Topics:</p>
                                            <ul className="space-y-1 mb-3">
                                                {issue.keyTopics.map((topic, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                                                        <HiOutlineCheckCircle className="w-3 h-3 text-green-500 mt-0.5 shrink-0" />
                                                        <span>{topic}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                                        <div className="flex items-center gap-3">
                                            <button className="text-gray-400 hover:text-red-500 transition-colors">
                                                <HiOutlineHeart className="w-4 h-4" />
                                            </button>
                                            <button className="text-gray-400 hover:text-blue-600 transition-colors">
                                                <HiOutlineShare className="w-4 h-4" />
                                            </button>
                                        </div>
                                        <button
                                            onClick={() => setExpandedIssue(isExpanded ? null : issue.id)}
                                            className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm font-semibold hover:gap-2 transition-all duration-300"
                                        >
                                            {isExpanded ? 'Show less' : 'Read more'}
                                            <HiOutlineArrowRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* No Results */}
                {filteredIssues.length === 0 && (
                    <div className="text-center py-12">
                        <HiOutlineNewspaper className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No issues found</h3>
                        <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter criteria</p>
                        <button
                            onClick={() => {
                                setSearchQuery('');
                                setSelectedYear('all');
                                setSelectedCategory('all');
                            }}
                            className="mt-4 text-blue-600 dark:text-blue-400 hover:underline"
                        >
                            Clear all filters
                        </button>
                    </div>
                )}

                {/* Subscribe CTA */}
                <div className="mt-12 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 text-white text-center">
                    <HiOutlineMail className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                        Never Miss an Issue
                    </h3>
                    <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                        Subscribe to our newsletter and get the latest insights delivered straight to your inbox every week.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <a
                            href="/newsletter/subscribe"
                            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            Subscribe Now
                            <HiOutlineArrowRight className="w-4 h-4" />
                        </a>
                        <a
                            href="/newsletter/archive"
                            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300"
                        >
                            Browse All Issues
                            <HiOutlineNewspaper className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes blob {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
                .animate-blob { animation: blob 7s infinite; }
                .animation-delay-2000 { animation-delay: 2s; }
                .bg-grid-pattern {
                    background-image: linear-gradient(to right, #e5e7eb 1px, transparent 1px),
                                      linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);
                    background-size: 50px 50px;
                }
                .dark .bg-grid-pattern {
                    background-image: linear-gradient(to right, #374151 1px, transparent 1px),
                                      linear-gradient(to bottom, #374151 1px, transparent 1px);
                }
                .line-clamp-2 {
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
            `}</style>
        </section>
    );
};

export default NewsletterArchiveSection1;