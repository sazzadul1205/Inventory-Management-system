// page/frontend/Newsletter/ContentPreviewSection/ContentPreviewSection2.jsx

// React
import { useState, useCallback, useMemo } from 'react';

// Icons
import {
    HiOutlineNewspaper,
    HiOutlineCalendar,
    HiOutlineClock,
    HiOutlineEye,
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
    HiOutlineBookmark,
    HiOutlineShare,
    HiOutlineDownload,
    HiOutlinePlay,
    HiOutlineMicrophone,
    HiOutlineVideoCamera,
    HiOutlineFilter,
    HiOutlineSearch,
    HiOutlineX,
    HiOutlineChevronDown,
    HiOutlineChevronUp,
    HiOutlineMenu,
    HiOutlineViewGrid,
    HiOutlineViewList,
    HiOutlineTrendingUp,
    HiOutlineFire
} from 'react-icons/hi';
import { HiOutlineSparkles, HiOutlineTrophy } from 'react-icons/hi2';

const ContentPreviewSection2 = ({ config }) => {
    const [activeTab, setActiveTab] = useState('featured');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [expandedArticle, setExpandedArticle] = useState(null);
    const [savedArticles, setSavedArticles] = useState([]);
    const [likedArticles, setLikedArticles] = useState([]);
    const [showFilters, setShowFilters] = useState(false);
    const [sortBy, setSortBy] = useState('date');
    const [showSubscribeModal, setShowSubscribeModal] = useState(false);

    // Icon mapping function
    const getIcon = (iconName, className = "w-5 h-5") => {
        const icons = {
            newspaper: <HiOutlineNewspaper className={className} />,
            calendar: <HiOutlineCalendar className={className} />,
            clock: <HiOutlineClock className={className} />,
            eye: <HiOutlineEye className={className} />,
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
            bookmark: <HiOutlineBookmark className={className} />,
            share: <HiOutlineShare className={className} />,
            download: <HiOutlineDownload className={className} />,
            play: <HiOutlinePlay className={className} />,
            microphone: <HiOutlineMicrophone className={className} />,
            video: <HiOutlineVideoCamera className={className} />,
            sparkles: <HiOutlineSparkles className={className} />,
            trophy: <HiOutlineTrophy className={className} />,
            filter: <HiOutlineFilter className={className} />,
            search: <HiOutlineSearch className={className} />,
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

    // Handle save article
    const handleSaveArticle = (articleId) => {
        if (savedArticles.includes(articleId)) {
            setSavedArticles(savedArticles.filter(id => id !== articleId));
        } else {
            setSavedArticles([...savedArticles, articleId]);
        }
    };

    // Handle like article
    const handleLikeArticle = (articleId) => {
        if (likedArticles.includes(articleId)) {
            setLikedArticles(likedArticles.filter(id => id !== articleId));
        } else {
            setLikedArticles([...likedArticles, articleId]);
        }
    };

    // Content data
    const articles = useMemo(() => config?.articles || [
        {
            id: 1,
            title: "The Future of Supply Chain: AI-Driven Logistics",
            description: "Discover how artificial intelligence is transforming supply chain operations, from predictive analytics to autonomous delivery systems. This week's featured article explores real-world applications and ROI metrics.",
            excerpt: "How AI predicts demand with 95% accuracy and reduces logistics costs by up to 40%.",
            author: "Sarah Johnson",
            authorRole: "Senior Supply Chain Analyst",
            authorAvatar: "/authors/sarah-johnson.jpg",
            date: "March 15, 2024",
            dateRaw: "2024-03-15",
            readTime: "8 min read",
            category: "Technology",
            image: "/content/ai-logistics.jpg",
            featured: true,
            popular: true,
            views: "2.4K",
            likes: "342",
            content: "Full article content would go here...",
            highlights: [
                "How AI predicts demand with 95% accuracy",
                "Case study: 40% reduction in logistics costs",
                "The rise of autonomous delivery vehicles",
                "Implementation roadmap for mid-size companies"
            ]
        },
        {
            id: 2,
            title: "Sustainability Metrics That Matter",
            description: "Key performance indicators for measuring supply chain sustainability and carbon footprint reduction.",
            excerpt: "Learn which sustainability metrics actually drive meaningful change.",
            author: "Michael Chen",
            authorRole: "Sustainability Lead",
            authorAvatar: "/authors/michael-chen.jpg",
            date: "March 8, 2024",
            dateRaw: "2024-03-08",
            readTime: "5 min read",
            category: "Sustainability",
            image: "/content/sustainability-metrics.jpg",
            featured: true,
            popular: true,
            views: "1.8K",
            likes: "567",
            content: "Full article content would go here...",
            highlights: [
                "Carbon footprint measurement frameworks",
                "Supplier sustainability scorecards",
                "Waste reduction metrics",
                "Circular economy indicators"
            ]
        },
        {
            id: 3,
            title: "Warehouse Automation Trends",
            description: "The latest innovations in warehouse robotics and automation technology.",
            excerpt: "From autonomous mobile robots to AI-powered sorting systems.",
            author: "Emily Rodriguez",
            authorRole: "Operations Director",
            authorAvatar: "/authors/emily-rodriguez.jpg",
            date: "March 1, 2024",
            dateRaw: "2024-03-01",
            readTime: "6 min read",
            category: "Technology",
            image: "/content/warehouse-automation.jpg",
            featured: false,
            popular: true,
            views: "2.1K",
            likes: "456",
            content: "Full article content would go here...",
            highlights: [
                "Autonomous mobile robots (AMRs)",
                "Automated storage and retrieval systems",
                "Robotic picking technologies",
                "Integration with WMS"
            ]
        },
        {
            id: 4,
            title: "Supply Chain Risk Management",
            description: "Strategies for building resilient supply chains in an uncertain world.",
            excerpt: "How leading companies are preparing for disruptions.",
            author: "David Kim",
            authorRole: "Risk Management Expert",
            authorAvatar: "/authors/david-kim.jpg",
            date: "February 23, 2024",
            dateRaw: "2024-02-23",
            readTime: "7 min read",
            category: "Risk Management",
            image: "/content/risk-management.jpg",
            featured: false,
            popular: false,
            views: "1.2K",
            likes: "234",
            content: "Full article content would go here...",
            highlights: [
                "Supplier diversification strategies",
                "Inventory buffer optimization",
                "Scenario planning frameworks",
                "Real-time risk monitoring"
            ]
        },
        {
            id: 5,
            title: "Procurement Best Practices",
            description: "How leading companies are transforming their procurement processes.",
            excerpt: "Strategic sourcing and supplier relationship management.",
            author: "Lisa Wong",
            authorRole: "Procurement Specialist",
            authorAvatar: "/authors/lisa-wong.jpg",
            date: "February 16, 2024",
            dateRaw: "2024-02-16",
            readTime: "4 min read",
            category: "Procurement",
            image: "/content/procurement.jpg",
            featured: false,
            popular: false,
            views: "987",
            likes: "189",
            content: "Full article content would go here...",
            highlights: [
                "Strategic sourcing frameworks",
                "Supplier collaboration platforms",
                "Contract management best practices",
                "Spend analytics"
            ]
        },
        {
            id: 6,
            title: "Inventory Optimization Strategies",
            description: "Data-driven approaches to inventory management and demand forecasting.",
            excerpt: "Reduce carrying costs while improving service levels.",
            author: "Robert Taylor",
            authorRole: "Supply Chain Consultant",
            authorAvatar: "/authors/robert-taylor.jpg",
            date: "February 9, 2024",
            dateRaw: "2024-02-09",
            readTime: "6 min read",
            category: "Operations",
            image: "/content/inventory-optimization.jpg",
            featured: false,
            popular: false,
            views: "1.1K",
            likes: "267",
            content: "Full article content would go here...",
            highlights: [
                "ABC-XYZ analysis",
                "Safety stock optimization",
                "Demand sensing techniques",
                "Multi-echelon inventory planning"
            ]
        }
    ], [config?.articles]);

    // Upcoming topics
    const upcomingTopics = config?.upcomingTopics || [
        "Blockchain in Supply Chain",
        "Circular Economy Models",
        "Supply Chain Talent Development",
        "Cross-border Logistics",
        "Inventory Optimization Strategies"
    ];

    // Categories
    const categories = [
        { id: "all", label: "All Topics", icon: "tag", count: articles.length },
        { id: "Technology", label: "Technology", icon: "chip", count: articles.filter(a => a.category === "Technology").length },
        { id: "Sustainability", label: "Sustainability", icon: "globe", count: articles.filter(a => a.category === "Sustainability").length },
        { id: "Risk Management", label: "Risk Management", icon: "shield", count: articles.filter(a => a.category === "Risk Management").length },
        { id: "Procurement", label: "Procurement", icon: "tag", count: articles.filter(a => a.category === "Procurement").length },
        { id: "Operations", label: "Operations", icon: "chart", count: articles.filter(a => a.category === "Operations").length }
    ];

    // Tabs
    const tabs = [
        { id: "featured", label: "Featured", icon: "star" },
        { id: "popular", label: "Most Popular", icon: "fire" },
        { id: "recent", label: "Recent", icon: "clock" },
        { id: "saved", label: "Saved", icon: "bookmark" }
    ];

    // Filter and sort articles
    const getFilteredArticles = useCallback(() => {
        let filtered = [...articles];

        // Search filter
        if (searchQuery) {
            filtered = filtered.filter(a =>
                a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                a.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                a.author.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        // Category filter
        if (selectedCategory !== 'all') {
            filtered = filtered.filter(a => a.category === selectedCategory);
        }

        // Tab filter
        if (activeTab === 'featured') {
            filtered = filtered.filter(a => a.featured);
        } else if (activeTab === 'popular') {
            filtered = filtered.filter(a => a.popular);
        } else if (activeTab === 'saved') {
            filtered = filtered.filter(a => savedArticles.includes(a.id));
        }

        // Sort
        if (sortBy === 'date') {
            filtered.sort((a, b) => new Date(b.dateRaw) - new Date(a.dateRaw));
        } else if (sortBy === 'views') {
            filtered.sort((a, b) => parseInt(b.views) - parseInt(a.views));
        } else if (sortBy === 'title') {
            filtered.sort((a, b) => a.title.localeCompare(b.title));
        }

        return filtered;
    }, [articles, searchQuery, selectedCategory, activeTab, savedArticles, sortBy]);

    const filteredArticles = getFilteredArticles();
    const featuredArticle = articles.find(a => a.featured);
    const popularArticles = articles.filter(a => a.popular).slice(0, 3);

    // Stats
    const stats = config?.stats || [
        { value: "15,000+", label: "Subscribers", icon: "users" },
        { value: "45+", label: "Articles", icon: "newspaper" },
        { value: "92%", label: "Engagement Rate", icon: "eye" },
        { value: "4.9/5", label: "Reader Rating", icon: "star" }
    ];

    // Active filters count
    const activeFiltersCount = [selectedCategory !== 'all', searchQuery !== ''].filter(Boolean).length;

    // Clear filters
    const clearFilters = () => {
        setSearchQuery('');
        setSelectedCategory('all');
    };

    return (
        <section
            className="relative py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
            role="region"
            aria-label="Content Preview Center"
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
                            <HiOutlineSparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                                {config?.badge || "Content Preview"}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            {config?.title?.prefix || "Preview Our"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Latest Content"}</span>
                        </h1>

                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                            {config?.description || "Get a sneak peek of what's coming in this week's newsletter. Subscribe to receive the full content delivered to your inbox."}
                        </p>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl p-3 shadow-lg border border-gray-200 dark:border-gray-700 text-center min-w-24">
                                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Navigation Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === tab.id
                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                                }`}
                        >
                            {getIcon(tab.icon, "w-4 h-4")}
                            {tab.label}
                            {tab.id === 'saved' && savedArticles.length > 0 && (
                                <span className="ml-1 px-2 py-0.5 bg-white/20 rounded-full text-xs">{savedArticles.length}</span>
                            )}
                        </button>
                    ))}
                </div>

                {/* Search and Filters */}
                <div className="flex flex-col md:flex-row gap-4 mb-8">
                    <div className="flex-1 relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <HiOutlineSearch className="w-5 h-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search articles by title, topic, or author..."
                            className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="flex gap-2">
                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="all">All Categories</option>
                            {categories.filter(c => c.id !== 'all').map(cat => (
                                <option key={cat.id} value={cat.id}>{cat.label}</option>
                            ))}
                        </select>
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="date">Latest First</option>
                            <option value="views">Most Viewed</option>
                            <option value="title">Alphabetical</option>
                        </select>
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeFiltersCount > 0
                                ? 'bg-blue-600 text-white'
                                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700'
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
                    </div>
                </div>

                {/* Filters Panel */}
                {showFilters && (
                    <div className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                        <div className="grid md:grid-cols-2 gap-6">
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
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Sort By</label>
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="date">Latest First</option>
                                    <option value="views">Most Viewed</option>
                                    <option value="title">Alphabetical</option>
                                </select>
                            </div>
                        </div>
                        {activeFiltersCount > 0 && (
                            <div className="mt-4 flex justify-end">
                                <button onClick={clearFilters} className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                                    Clear all filters
                                </button>
                            </div>
                        )}
                    </div>
                )}

                {/* Category Pills */}
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

                {/* Featured Article Banner */}
                {featuredArticle && activeTab === 'featured' && (
                    <div className="mb-12">
                        <div className="relative bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 bg-black/20" />
                            <div className="relative p-8 text-white">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="px-3 py-1 bg-yellow-500 text-white text-xs font-semibold rounded-full flex items-center gap-1">
                                        <HiOutlineStar className="w-3 h-3" />
                                        Featured Article
                                    </span>
                                    <span className="text-sm text-white/80">{featuredArticle.category}</span>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold mb-3">{featuredArticle.title}</h2>
                                <p className="text-white/80 mb-4 max-w-2xl">{featuredArticle.description}</p>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="flex items-center gap-2">
                                        <HiOutlineClock className="w-4 h-4" />
                                        <span className="text-sm">{featuredArticle.readTime}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <HiOutlineEye className="w-4 h-4" />
                                        <span className="text-sm">{featuredArticle.views} views</span>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setExpandedArticle(expandedArticle === featuredArticle.id ? null : featuredArticle.id)}
                                    className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-2 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300"
                                >
                                    Preview Article
                                    <HiOutlineArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Popular Articles Row */}
                {activeTab === 'all' && popularArticles.length > 0 && (
                    <div className="mb-12">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                            <HiOutlineFire className="w-5 h-5 text-orange-500" />
                            Most Popular This Month
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {popularArticles.map((article) => (
                                <div
                                    key={article.id}
                                    className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 group cursor-pointer"
                                    onClick={() => setExpandedArticle(expandedArticle === article.id ? null : article.id)}
                                >
                                    <img src={article.image} alt={article.title} className="w-16 h-16 rounded-lg object-cover" />
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-900 dark:text-white text-sm line-clamp-1">{article.title}</h3>
                                        <div className="flex items-center gap-2 mt-1">
                                            <span className="text-xs text-gray-500">{article.views} views</span>
                                            <span className="text-xs text-gray-400">•</span>
                                            <span className="text-xs text-gray-500">{article.readTime}</span>
                                        </div>
                                    </div>
                                    <HiOutlineArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Results Count */}
                <div className="mb-6">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Showing <span className="font-semibold text-gray-900 dark:text-white">{filteredArticles.length}</span> articles
                        {searchQuery && ` matching "${searchQuery}"`}
                    </p>
                </div>

                {/* Articles Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {filteredArticles.map((article) => {
                        const isExpanded = expandedArticle === article.id;
                        const isSaved = savedArticles.includes(article.id);
                        const isLiked = likedArticles.includes(article.id);

                        return (
                            <div
                                key={article.id}
                                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        loading="lazy"
                                    />
                                    <div className="absolute top-3 left-3">
                                        <span className="px-2 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                                            {article.category}
                                        </span>
                                    </div>
                                    {article.featured && (
                                        <div className="absolute top-3 right-3">
                                            <span className="flex items-center gap-1 px-2 py-1 bg-yellow-500 text-white text-xs font-semibold rounded-full">
                                                <HiOutlineStar className="w-3 h-3" />
                                                Featured
                                            </span>
                                        </div>
                                    )}
                                </div>

                                <div className="p-5">
                                    <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-2">
                                        <div className="flex items-center gap-1">
                                            <HiOutlineCalendar className="w-4 h-4" />
                                            <span>{article.date}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <HiOutlineClock className="w-4 h-4" />
                                            <span>{article.readTime}</span>
                                        </div>
                                    </div>

                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                                        {article.title}
                                    </h3>

                                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
                                        {article.description}
                                    </p>

                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="flex items-center gap-1">
                                            <HiOutlineEye className="w-4 h-4 text-gray-400" />
                                            <span className="text-xs text-gray-500">{article.views}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <HiOutlineHeart className="w-4 h-4 text-gray-400" />
                                            <span className="text-xs text-gray-500">{article.likes}</span>
                                        </div>
                                    </div>

                                    {isExpanded && (
                                        <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{article.excerpt}</p>
                                            <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">Key Takeaways:</p>
                                            <ul className="space-y-1 mb-3">
                                                {article.highlights.slice(0, 3).map((highlight, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                                                        <HiOutlineCheckCircle className="w-3 h-3 text-green-500 mt-0.5 shrink-0" />
                                                        <span>{highlight}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="flex items-center gap-2 pt-2">
                                                {article.authorAvatar ? (
                                                    <img src={article.authorAvatar} alt={article.author} className="w-6 h-6 rounded-full object-cover" />
                                                ) : (
                                                    <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center">
                                                        <HiOutlineUserGroup className="w-3 h-3 text-gray-500" />
                                                    </div>
                                                )}
                                                <span className="text-xs text-gray-500">{article.author}</span>
                                            </div>
                                        </div>
                                    )}

                                    <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                                        <div className="flex items-center gap-3">
                                            <button
                                                onClick={() => handleLikeArticle(article.id)}
                                                className={`transition-colors ${isLiked ? 'text-red-500' : 'text-gray-400 hover:text-red-500'}`}
                                            >
                                                <HiOutlineHeart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                                            </button>
                                            <button
                                                onClick={() => handleSaveArticle(article.id)}
                                                className={`transition-colors ${isSaved ? 'text-yellow-500' : 'text-gray-400 hover:text-yellow-500'}`}
                                            >
                                                <HiOutlineBookmark className="w-4 h-4" />
                                            </button>
                                        </div>
                                        <button
                                            onClick={() => setExpandedArticle(isExpanded ? null : article.id)}
                                            className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm font-semibold hover:gap-2 transition-all duration-300"
                                        >
                                            {isExpanded ? 'Show less' : 'Preview'}
                                            <HiOutlineArrowRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* No Results */}
                {filteredArticles.length === 0 && (
                    <div className="text-center py-12">
                        <HiOutlineNewspaper className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No articles found</h3>
                        <p className="text-gray-500 dark:text-gray-400">
                            {activeTab === 'saved' ? "You haven't saved any articles yet." : "Try adjusting your search or filter criteria"}
                        </p>
                        {activeTab === 'saved' && (
                            <button onClick={() => setActiveTab('all')} className="mt-4 text-blue-600 hover:underline">
                                Browse All Articles
                            </button>
                        )}
                        {activeFiltersCount > 0 && (
                            <button onClick={clearFilters} className="mt-4 text-blue-600 hover:underline ml-4">
                                Clear all filters
                            </button>
                        )}
                    </div>
                )}

                {/* Upcoming Topics */}
                <div className="mb-12 bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-3 mb-6">
                        <HiOutlineCalendar className="w-6 h-6 text-blue-600" />
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Coming Up in Future Issues</h3>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        {upcomingTopics.map((topic, idx) => (
                            <span
                                key={idx}
                                className="px-4 py-2 bg-white dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300 shadow-sm border border-gray-200 dark:border-gray-600"
                            >
                                {topic}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Subscribe CTA */}
                <div className="bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 text-white text-center">
                    <HiOutlineMail className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">Get the Full Content Delivered</h3>
                    <p className="text-blue-100 mb-6 max-w-2xl mx-auto">Subscribe to our newsletter and receive complete articles, exclusive insights, and industry trends every week.</p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <button
                            onClick={() => setShowSubscribeModal(true)}
                            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            Subscribe Now
                            <HiOutlineArrowRight className="w-4 h-4" />
                        </button>
                        <a
                            href="/newsletter/archive"
                            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300"
                        >
                            Browse Archive
                            <HiOutlineNewspaper className="w-4 h-4" />
                        </a>
                    </div>
                </div>

                {/* Subscribe Modal */}
                {showSubscribeModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 overflow-y-auto" onClick={() => setShowSubscribeModal(false)}>
                        <div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
                            <div className="bg-linear-to-r from-blue-600 to-purple-600 p-4">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-white font-bold text-lg">Subscribe to Newsletter</h3>
                                    <button onClick={() => setShowSubscribeModal(false)} className="text-white hover:text-gray-200">
                                        <HiOutlineX className="w-6 h-6" />
                                    </button>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-600 dark:text-gray-400 mb-4">Get the latest insights delivered straight to your inbox.</p>
                                <form>
                                    <input
                                        type="email"
                                        placeholder="Enter your email address"
                                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <button
                                        type="submit"
                                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition-all duration-300"
                                    >
                                        Subscribe
                                    </button>
                                    <p className="text-xs text-gray-500 text-center mt-4">No spam. Unsubscribe anytime.</p>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
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

export default ContentPreviewSection2;