// page/frontend/Newsletter/NewsletterArchiveSection/NewsletterArchiveSection2.jsx

// React
import { useState, useCallback, useMemo } from 'react';

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
    HiOutlineThumbUp,
    HiOutlineX,
    HiOutlineChevronDown,
    HiOutlineChevronUp,
    HiOutlineMenu,
    HiOutlineViewGrid,
    HiOutlineViewList,
    HiOutlineTrendingUp,
    HiOutlineFire
} from 'react-icons/hi';
import { HiOutlineTrophy } from 'react-icons/hi2';

const NewsletterArchiveSection2 = ({ config }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedYear, setSelectedYear] = useState('all');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedMonth, setSelectedMonth] = useState('all');
    const [expandedIssue, setExpandedIssue] = useState(null);
    const [viewMode, setViewMode] = useState(config?.defaultViewMode || 'grid');
    const [showFilters, setShowFilters] = useState(false);
    const [sortBy, setSortBy] = useState('date');
    const [savedIssues, setSavedIssues] = useState([]);
    const [likedIssues, setLikedIssues] = useState([]);

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
            trophy: <HiOutlineTrophy className={className} />,
            x: <HiOutlineX className={className} />,
            chevronDown: <HiOutlineChevronDown className={className} />,
            chevronUp: <HiOutlineChevronUp className={className} />,
            menu: <HiOutlineMenu className={className} />,
            grid: <HiOutlineViewGrid className={className} />,
            list: <HiOutlineViewList className={className} />,
            trending: <HiOutlineTrendingUp className={className} />,
            fire: <HiOutlineFire className={className} />
        };
        return icons[iconName] || <HiOutlineNewspaper className={className} />;
    };

    // Handle save issue
    const handleSaveIssue = (issueId) => {
        if (savedIssues.includes(issueId)) {
            setSavedIssues(savedIssues.filter(id => id !== issueId));
        } else {
            setSavedIssues([...savedIssues, issueId]);
        }
    };

    // Handle like issue
    const handleLikeIssue = (issueId) => {
        if (likedIssues.includes(issueId)) {
            setLikedIssues(likedIssues.filter(id => id !== issueId));
        } else {
            setLikedIssues([...likedIssues, issueId]);
        }
    };

    // Newsletter archive data
    const newsletterIssues = useMemo(() => config?.newsletterIssues || [
        {
            id: 1,
            title: "Supply Chain Trends 2024",
            date: "March 15, 2024",
            dateRaw: "2024-03-15",
            category: "Trends",
            readTime: "5 min read",
            views: "2,847",
            likes: "342",
            description: "The top 10 trends shaping supply chain management this year, from AI integration to sustainability initiatives.",
            image: "/newsletters/trends-2024.jpg",
            featured: true,
            popular: true,
            content: "In this issue, we explore the most significant trends transforming supply chain management in 2024.",
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
            dateRaw: "2024-03-08",
            category: "Technology",
            readTime: "4 min read",
            views: "3,124",
            likes: "567",
            description: "How artificial intelligence is revolutionizing logistics and supply chain operations.",
            image: "/newsletters/ai-supply-chain.jpg",
            featured: true,
            popular: true,
            content: "Artificial intelligence is no longer a futuristic concept—it's transforming supply chains today.",
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
            dateRaw: "2024-03-01",
            category: "Sustainability",
            readTime: "6 min read",
            views: "2,103",
            likes: "892",
            description: "Building a greener supply chain: Strategies for reducing carbon footprint and waste.",
            image: "/newsletters/sustainability.jpg",
            featured: false,
            popular: true,
            content: "Sustainability is becoming a competitive advantage. This issue provides actionable strategies.",
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
            dateRaw: "2024-02-23",
            category: "Risk Management",
            readTime: "5 min read",
            views: "1,892",
            likes: "234",
            description: "Building resilient supply chains that can withstand disruptions and adapt to change.",
            image: "/newsletters/resilience.jpg",
            featured: false,
            popular: false,
            content: "Recent global disruptions have highlighted the importance of supply chain resilience.",
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
            dateRaw: "2024-02-16",
            category: "Technology",
            readTime: "4 min read",
            views: "2,456",
            likes: "456",
            description: "How digital technologies are reshaping supply chain management.",
            image: "/newsletters/digital-transformation.jpg",
            featured: true,
            popular: true,
            content: "Digital transformation is accelerating across supply chains.",
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
            dateRaw: "2024-02-09",
            category: "People",
            readTime: "5 min read",
            views: "1,567",
            likes: "189",
            description: "Attracting and retaining top talent in supply chain management.",
            image: "/newsletters/talent.jpg",
            featured: false,
            popular: false,
            content: "The supply chain talent gap is widening.",
            keyTopics: [
                "Skills Gap Analysis",
                "Training and Development Programs",
                "Remote Work in Supply Chain",
                "Diversity and Inclusion Initiatives"
            ]
        }
    ], [config?.newsletterIssues]);

    // Filter and sort issues
    const getFilteredIssues = useCallback(() => {
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

        if (selectedMonth !== 'all') {
            const monthMap = {
                'January': '01', 'February': '02', 'March': '03', 'April': '04',
                'May': '05', 'June': '06', 'July': '07', 'August': '08',
                'September': '09', 'October': '10', 'November': '11', 'December': '12'
            };
            const monthNum = monthMap[selectedMonth];
            issues = issues.filter(i => i.dateRaw.substring(5, 7) === monthNum);
        }

        if (selectedCategory !== 'all') {
            issues = issues.filter(i => i.category === selectedCategory);
        }

        if (sortBy === 'date') {
            issues.sort((a, b) => new Date(b.dateRaw) - new Date(a.dateRaw));
        } else if (sortBy === 'popular') {
            issues.sort((a, b) => parseInt(b.views) - parseInt(a.views));
        } else if (sortBy === 'title') {
            issues.sort((a, b) => a.title.localeCompare(b.title));
        }

        return issues;
    }, [newsletterIssues, searchQuery, selectedYear, selectedMonth, selectedCategory, sortBy]);

    const filteredIssues = getFilteredIssues();
    const featuredIssue = newsletterIssues.find(i => i.featured);
    const popularIssues = newsletterIssues.filter(i => i.popular).slice(0, 3);

    const categories = config?.categories || [
        { id: "all", label: "All Categories", icon: "newspaper", count: newsletterIssues.length },
        { id: "Trends", label: "Trends", icon: "chart", count: newsletterIssues.filter(i => i.category === "Trends").length },
        { id: "Technology", label: "Technology", icon: "chip", count: newsletterIssues.filter(i => i.category === "Technology").length },
        { id: "Sustainability", label: "Sustainability", icon: "globe", count: newsletterIssues.filter(i => i.category === "Sustainability").length },
        { id: "Risk Management", label: "Risk Management", icon: "shield", count: newsletterIssues.filter(i => i.category === "Risk Management").length },
        { id: "People", label: "People", icon: "users", count: newsletterIssues.filter(i => i.category === "People").length }
    ];

    const years = ["2024", "2023", "2022"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    // Stats
    const stats = config?.stats || [
        { value: "50+", label: "Newsletters", icon: "newspaper", trend: "+12 this year", trendUp: true },
        { value: "25,000+", label: "Total Views", icon: "eye", trend: "+18%", trendUp: true },
        { value: "92%", label: "Reader Satisfaction", icon: "star", trend: "+2%", trendUp: true },
        { value: "15+", label: "Topics Covered", icon: "tag", trend: "Expanding", trendUp: true }
    ];

    // Active filters count
    const activeFiltersCount = [selectedCategory !== 'all', selectedYear !== 'all', selectedMonth !== 'all', searchQuery !== ''].filter(Boolean).length;

    // Clear all filters
    const clearAllFilters = () => {
        setSearchQuery('');
        setSelectedYear('all');
        setSelectedMonth('all');
        setSelectedCategory('all');
        setSortBy('date');
    };

    return (
        <section
            className="relative py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
            role="region"
            aria-label="Newsletter Archive Center"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 mask-[radial-gradient(ellipse_at_center,white,transparent)]" aria-hidden="true" />

            {/* Animated Gradient Orbs */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl animate-blob" aria-hidden="true" />
            <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header with Stats */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12">
                    <div>
                        <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 rounded-full px-4 py-2 mb-4">
                            <HiOutlineNewspaper className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                                {config?.badge || "Newsletter Archive"}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            {config?.title?.prefix || "Browse Our"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Past Issues"}</span>
                        </h1>

                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                            {config?.description || "Explore our complete archive of newsletters covering supply chain trends, technology insights, and industry best practices."}
                        </p>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl p-3 shadow-lg border border-gray-200 dark:border-gray-700 text-center min-w-24">
                                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                                {stat.trend && (
                                    <div className={`text-xs mt-1 ${stat.trendUp ? 'text-green-500' : 'text-red-500'}`}>
                                        {stat.trend}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Search and Filters Bar */}
                <div className="flex flex-col md:flex-row gap-4 mb-8">
                    <div className="flex-1 relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <HiOutlineSearch className="w-5 h-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder={config?.searchPlaceholder || "Search past issues by title, topic, or keywords..."}
                            className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                            aria-label="Search newsletter archive"
                        />
                    </div>

                    <div className="flex gap-2">
                        {/* Sort Dropdown */}
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="date">Latest First</option>
                            <option value="popular">Most Popular</option>
                            <option value="title">Alphabetical</option>
                        </select>

                        {/* Filter Toggle Button */}
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${activeFiltersCount > 0
                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                                }`}
                        >
                            <HiOutlineFilter className="w-4 h-4" />
                            Filters
                            {activeFiltersCount > 0 && (
                                <span className="ml-1 px-2 py-0.5 bg-white/20 rounded-full text-xs">
                                    {activeFiltersCount}
                                </span>
                            )}
                        </button>

                        {/* View Mode Toggle */}
                        <div className="flex bg-gray-100 dark:bg-gray-800 rounded-xl p-1">
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`p-2 rounded-lg transition-all duration-300 ${viewMode === 'grid' ? 'bg-white dark:bg-gray-700 shadow-md' : ''}`}
                                aria-label="Grid view"
                            >
                                <HiOutlineViewGrid className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                className={`p-2 rounded-lg transition-all duration-300 ${viewMode === 'list' ? 'bg-white dark:bg-gray-700 shadow-md' : ''}`}
                                aria-label="List view"
                            >
                                <HiOutlineViewList className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Expanded Filters Panel */}
                {showFilters && (
                    <div className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                        <div className="grid md:grid-cols-4 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Category</label>
                                <select
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="all">All Categories</option>
                                    {categories.filter(c => c.id !== 'all').map(cat => (
                                        <option key={cat.id} value={cat.id}>{cat.label}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Year</label>
                                <select
                                    value={selectedYear}
                                    onChange={(e) => setSelectedYear(e.target.value)}
                                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="all">All Years</option>
                                    {years.map(year => <option key={year} value={year}>{year}</option>)}
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Month</label>
                                <select
                                    value={selectedMonth}
                                    onChange={(e) => setSelectedMonth(e.target.value)}
                                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="all">All Months</option>
                                    {months.map(month => <option key={month} value={month}>{month}</option>)}
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Sort By</label>
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="date">Latest First</option>
                                    <option value="popular">Most Popular</option>
                                    <option value="title">Alphabetical</option>
                                </select>
                            </div>
                        </div>
                        {activeFiltersCount > 0 && (
                            <div className="mt-4 flex justify-end">
                                <button onClick={clearAllFilters} className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                                    Clear all filters
                                </button>
                            </div>
                        )}
                    </div>
                )}

                {/* Category Pills (Quick Filters) */}
                <div className="flex flex-wrap gap-2 mb-8 overflow-x-auto pb-2">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id === 'all' ? 'all' : category.id)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${selectedCategory === (category.id === 'all' ? 'all' : category.id)
                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                                }`}
                        >
                            {getIcon(category.icon, "w-4 h-4")}
                            {category.label}
                            <span className={`ml-1 px-2 py-0.5 rounded-full text-xs ${selectedCategory === (category.id === 'all' ? 'all' : category.id)
                                ? 'bg-white/20 text-white'
                                : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                                }`}>
                                {category.count}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Popular Issues Row */}
                {popularIssues.length > 0 && (
                    <div className="mb-12">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                            <HiOutlineFire className="w-5 h-5 text-orange-500" />
                            Most Popular Issues
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {popularIssues.map((issue) => (
                                <div
                                    key={issue.id}
                                    className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 group cursor-pointer"
                                    onClick={() => setExpandedIssue(expandedIssue === issue.id ? null : issue.id)}
                                >
                                    <img src={issue.image} alt={issue.title} className="w-16 h-16 rounded-lg object-cover" />
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-900 dark:text-white text-sm line-clamp-1">{issue.title}</h3>
                                        <div className="flex items-center gap-2 mt-1">
                                            <span className="text-xs text-gray-500">{issue.date}</span>
                                            <span className="text-xs text-gray-400">•</span>
                                            <span className="text-xs text-gray-500">{issue.views} views</span>
                                        </div>
                                    </div>
                                    <HiOutlineArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Featured Issue Banner */}
                {featuredIssue && (
                    <div className="mb-12">
                        <div className="relative bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 bg-black/20" />
                            <div className="relative p-8 text-white">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="px-3 py-1 bg-yellow-500 text-white text-xs font-semibold rounded-full flex items-center gap-1">
                                        <HiOutlineStar className="w-3 h-3" />
                                        Featured Issue
                                    </span>
                                    <span className="text-sm text-white/80">{featuredIssue.date}</span>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold mb-3">{featuredIssue.title}</h2>
                                <p className="text-white/80 mb-6 max-w-2xl">{featuredIssue.description}</p>
                                <button
                                    onClick={() => setExpandedIssue(expandedIssue === featuredIssue.id ? null : featuredIssue.id)}
                                    className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-2 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300"
                                >
                                    Read Now
                                    <HiOutlineArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Results Count */}
                <div className="mb-6">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Showing <span className="font-semibold text-gray-900 dark:text-white">{filteredIssues.length}</span> newsletter issues
                        {searchQuery && ` matching "${searchQuery}"`}
                    </p>
                </div>

                {/* Issues Grid/List View */}
                <div className={`grid gap-6 mb-12 ${viewMode === 'grid'
                    ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                    : 'grid-cols-1'
                    }`}>
                    {filteredIssues.map((issue) => {
                        const isExpanded = expandedIssue === issue.id;
                        const isSaved = savedIssues.includes(issue.id);
                        const isLiked = likedIssues.includes(issue.id);

                        return (
                            <div
                                key={issue.id}
                                className={`group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 ${viewMode === 'list' ? 'flex flex-col md:flex-row' : ''
                                    }`}
                            >
                                {/* Image Area */}
                                <div className={`relative overflow-hidden ${viewMode === 'list' ? 'md:w-56 md:shrink-0' : ''}`}>
                                    <img
                                        src={issue.image}
                                        alt={issue.title}
                                        className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${viewMode === 'list' ? 'h-40 md:h-full' : 'h-48'
                                            }`}
                                        loading="lazy"
                                    />
                                    {issue.featured && (
                                        <div className="absolute top-3 left-3">
                                            <span className="px-2 py-1 bg-yellow-500 text-white text-xs font-semibold rounded-full flex items-center gap-1">
                                                <HiOutlineStar className="w-3 h-3" />
                                                Featured
                                            </span>
                                        </div>
                                    )}
                                </div>

                                <div className={`p-5 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                                    {/* Metadata */}
                                    <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-2">
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
                                            <span>{issue.views} views</span>
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                                        {issue.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
                                        {issue.description}
                                    </p>

                                    {/* Category Badge */}
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

                                    {/* Footer Actions */}
                                    <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                                        <div className="flex items-center gap-3">
                                            <button
                                                onClick={() => handleLikeIssue(issue.id)}
                                                className={`flex items-center gap-1 text-sm transition-colors ${isLiked ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
                                                    }`}
                                            >
                                                <HiOutlineHeart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                                                <span>{issue.likes}</span>
                                            </button>
                                            <button
                                                onClick={() => handleSaveIssue(issue.id)}
                                                className={`transition-colors ${isSaved ? 'text-yellow-500' : 'text-gray-400 hover:text-yellow-500'
                                                    }`}
                                            >
                                                <HiOutlineBookmark className="w-4 h-4" />
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
                        <button onClick={clearAllFilters} className="mt-4 text-blue-600 dark:text-blue-400 hover:underline">
                            Clear all filters
                        </button>
                    </div>
                )}

                {/* Subscribe CTA */}
                <div className="bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 text-white text-center">
                    <HiOutlineMail className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">Never Miss an Issue</h3>
                    <p className="text-blue-100 mb-6 max-w-2xl mx-auto">Subscribe to our newsletter and get the latest insights delivered straight to your inbox every week.</p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <a href="/newsletter/subscribe" className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
                            Subscribe Now
                            <HiOutlineArrowRight className="w-4 h-4" />
                        </a>
                        <a href="/newsletter/archive" className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300">
                            Browse All Issues
                            <HiOutlineNewspaper className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .bg-grid-slate-100 {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(148 163 184 / 0.2)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
        .dark .bg-grid-slate-800 {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(51 65 85 / 0.4)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
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

export default NewsletterArchiveSection2;