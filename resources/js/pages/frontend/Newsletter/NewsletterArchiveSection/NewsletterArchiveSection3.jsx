// page/frontend/Newsletter/NewsletterArchiveSection/NewsletterArchiveSection3.jsx

// React
import { useState, useEffect, useCallback, useRef, useMemo } from 'react';

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
    HiOutlineFire,
    HiOutlineChevronLeft,
    HiOutlineChevronRight,
    HiOutlineLibrary,
    HiOutlineNewspaper as HiOutlineNewspaperAlt,
    HiOutlineVideoCamera,
    HiOutlineMicrophone,
    HiOutlineZoomIn,
    HiOutlineVolumeUp,
    HiOutlineQrcode,
    HiOutlinePrinter
} from 'react-icons/hi';
import { HiOutlineTrophy, HiOutlineSparkles } from 'react-icons/hi2';
import {
    MdOutlineFullscreen as HiOutlineFullscreen,
    MdOutlineClosedCaption as HiOutlineClosedCaption
} from "react-icons/md";

const NewsletterArchiveSection3 = ({ config }) => {
    const [activeTab, setActiveTab] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedYear, setSelectedYear] = useState('all');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedMonth, setSelectedMonth] = useState('all');
    const [expandedIssue, setExpandedIssue] = useState(null);
    const [savedIssues, setSavedIssues] = useState([]);
    const [likedIssues, setLikedIssues] = useState([]);
    const [showFilters, setShowFilters] = useState(false);
    const [showReaderModal, setShowReaderModal] = useState(false);
    const [selectedIssue, setSelectedIssue] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [showVideoModal, setShowVideoModal] = useState(false);
    const [currentVideo, setCurrentVideo] = useState(null);
    const carouselRef = useRef(null);
    const videoRef = useRef(null);

    // Load saved data from localStorage
    useEffect(() => {
        const saved = localStorage.getItem('savedNewsletters');
        if (saved) setSavedIssues(JSON.parse(saved));
        const liked = localStorage.getItem('likedNewsletters');
        if (liked) setLikedIssues(JSON.parse(liked));
    }, []);

    useEffect(() => {
        localStorage.setItem('savedNewsletters', JSON.stringify(savedIssues));
    }, [savedIssues]);

    useEffect(() => {
        localStorage.setItem('likedNewsletters', JSON.stringify(likedIssues));
    }, [likedIssues]);

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
            sparkles: <HiOutlineSparkles className={className} />,
            x: <HiOutlineX className={className} />,
            chevronDown: <HiOutlineChevronDown className={className} />,
            chevronUp: <HiOutlineChevronUp className={className} />,
            menu: <HiOutlineMenu className={className} />,
            grid: <HiOutlineViewGrid className={className} />,
            list: <HiOutlineViewList className={className} />,
            trending: <HiOutlineTrendingUp className={className} />,
            fire: <HiOutlineFire className={className} />,
            'chevron-left': <HiOutlineChevronLeft className={className} />,
            'chevron-right': <HiOutlineChevronRight className={className} />,
            library: <HiOutlineLibrary className={className} />,
            newspaperAlt: <HiOutlineNewspaperAlt className={className} />,
            video: <HiOutlineVideoCamera className={className} />,
            microphone: <HiOutlineMicrophone className={className} />,
            zoom: <HiOutlineZoomIn className={className} />,
            fullscreen: <HiOutlineFullscreen className={className} />,
            volume: <HiOutlineVolumeUp className={className} />,
            caption: <HiOutlineClosedCaption className={className} />,
            qrcode: <HiOutlineQrcode className={className} />,
            printer: <HiOutlinePrinter className={className} />
        };
        return icons[iconName] || <HiOutlineNewspaper className={className} />;
    };

    // Handle save issue
    const handleSaveIssue = (issueId) => {
        setSavedIssues(prev =>
            prev.includes(issueId)
                ? prev.filter(id => id !== issueId)
                : [...prev, issueId]
        );
    };

    // Handle like issue
    const handleLikeIssue = (issueId) => {
        setLikedIssues(prev =>
            prev.includes(issueId)
                ? prev.filter(id => id !== issueId)
                : [...prev, issueId]
        );
    };

    // Open reader modal
    const openReaderModal = (issue) => {
        setSelectedIssue(issue);
        setShowReaderModal(true);
    };

    // Carousel navigation
    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % (config?.featuredIssues?.length || 1));
    }, [config?.featuredIssues?.length]);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev - 1 + (config?.featuredIssues?.length || 1)) % (config?.featuredIssues?.length || 1));
    }, [config?.featuredIssues?.length]);

    // Auto-play carousel
    useEffect(() => {
        if (config?.autoPlayCarousel && config?.featuredIssues?.length > 1) {
            const interval = setInterval(() => {
                nextSlide();
            }, 6000);
            return () => clearInterval(interval);
        }
    }, [config?.autoPlayCarousel, config?.featuredIssues?.length, nextSlide]);

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
            content: "In this issue, we explore the most significant trends transforming supply chain management in 2024. From the rise of generative AI in demand forecasting to the growing importance of circular economy principles, we cover what supply chain professionals need to know.",
            keyTopics: [
                "AI and Machine Learning in Demand Forecasting",
                "Sustainability and Circular Economy",
                "Resilience and Risk Management",
                "Digital Twins and Simulation"
            ],
            videoUrl: "/videos/trends-2024.mp4"
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
            dateRaw: "2024-03-01",
            category: "Sustainability",
            readTime: "6 min read",
            views: "2,103",
            likes: "892",
            description: "Building a greener supply chain: Strategies for reducing carbon footprint and waste.",
            image: "/newsletters/sustainability.jpg",
            featured: false,
            popular: true,
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
            dateRaw: "2024-02-23",
            category: "Risk Management",
            readTime: "5 min read",
            views: "1,892",
            likes: "234",
            description: "Building resilient supply chains that can withstand disruptions and adapt to change.",
            image: "/newsletters/resilience.jpg",
            featured: false,
            popular: false,
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
            dateRaw: "2024-02-16",
            category: "Technology",
            readTime: "4 min read",
            views: "2,456",
            likes: "456",
            description: "How digital technologies are reshaping supply chain management.",
            image: "/newsletters/digital-transformation.jpg",
            featured: true,
            popular: true,
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
            dateRaw: "2024-02-09",
            category: "People",
            readTime: "5 min read",
            views: "1,567",
            likes: "189",
            description: "Attracting and retaining top talent in supply chain management.",
            image: "/newsletters/talent.jpg",
            featured: false,
            popular: false,
            content: "The supply chain talent gap is widening. This edition provides insights on recruiting, developing, and retaining skilled professionals in a competitive market.",
            keyTopics: [
                "Skills Gap Analysis",
                "Training and Development Programs",
                "Remote Work in Supply Chain",
                "Diversity and Inclusion Initiatives"
            ]
        }
    ], [config?.newsletterIssues]);

    // Filter issues
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

        if (activeTab === 'featured') {
            issues = issues.filter(i => i.featured);
        } else if (activeTab === 'popular') {
            issues = issues.filter(i => i.popular);
        } else if (activeTab === 'saved') {
            issues = issues.filter(i => savedIssues.includes(i.id));
        } else if (activeTab === 'liked') {
            issues = issues.filter(i => likedIssues.includes(i.id));
        }

        return issues;
    }, [newsletterIssues, searchQuery, selectedYear, selectedMonth, selectedCategory, activeTab, savedIssues, likedIssues]);

    const filteredIssues = getFilteredIssues();
    const featuredIssues = config?.featuredIssues || newsletterIssues.filter(i => i.featured);

    const categories = config?.categories || [
        { id: "all", label: "All Categories", icon: "newspaper" },
        { id: "Trends", label: "Trends", icon: "chart" },
        { id: "Technology", label: "Technology", icon: "chip" },
        { id: "Sustainability", label: "Sustainability", icon: "globe" },
        { id: "Risk Management", label: "Risk Management", icon: "shield" },
        { id: "People", label: "People", icon: "users" }
    ];

    const tabs = [
        { id: 'all', label: 'All Issues', icon: 'library' },
        { id: 'featured', label: 'Featured', icon: 'star' },
        { id: 'popular', label: 'Popular', icon: 'fire' },
        { id: 'saved', label: 'Saved', icon: 'bookmark' },
        { id: 'liked', label: 'Liked', icon: 'heart' }
    ];

    const years = ["2024", "2023", "2022"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    // Stats
    const stats = config?.stats || [
        { value: "50+", label: "Newsletters", icon: "newspaper" },
        { value: "25,000+", label: "Total Views", icon: "eye" },
        { value: "92%", label: "Reader Satisfaction", icon: "star" },
        { value: "15+", label: "Topics Covered", icon: "tag" }
    ];

    // Active filters count
    const activeFiltersCount = [selectedCategory !== 'all', selectedYear !== 'all', selectedMonth !== 'all', searchQuery !== ''].filter(Boolean).length;

    // Clear all filters
    const clearAllFilters = () => {
        setSearchQuery('');
        setSelectedYear('all');
        setSelectedMonth('all');
        setSelectedCategory('all');
    };

    return (
        <section
            className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
            role="region"
            aria-label="Newsletter Archive Hub"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5" aria-hidden="true">
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="circuit-pattern-newsletter" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                            <path d="M20 20 L80 20 M20 40 L80 40 M20 60 L80 60 M20 80 L80 80 M40 20 L40 80 M60 20 L60 80" stroke="#9CA3AF" strokeWidth="0.5" fill="none" />
                            <circle cx="20" cy="20" r="2" fill="#9CA3AF" />
                            <circle cx="80" cy="20" r="2" fill="#9CA3AF" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#circuit-pattern-newsletter)" />
                </svg>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="text-center max-w-4xl mx-auto mb-12">
                    <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full mb-6 shadow-lg animate-pulse">
                        <HiOutlineNewspaper className="w-4 h-4" />
                        <span className="text-sm font-medium">{config?.badge || "Newsletter Archive"}</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                        {config?.title?.prefix || "Browse Our"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Past Issues"}</span>
                    </h1>

                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                        {config?.description || "Explore our complete archive of newsletters covering supply chain trends, technology insights, and industry best practices."}
                    </p>

                    {/* Stats Row */}
                    <div className="flex flex-wrap justify-center gap-6 mt-8">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-2xl px-5 py-2 shadow-sm border border-gray-200 dark:border-gray-700">
                                <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                                    {getIcon(stat.icon, "w-4 h-4 text-blue-600")}
                                </div>
                                <div className="text-left">
                                    <div className="text-xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                                </div>
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
                            {(tab.id === 'saved' && savedIssues.length > 0) && (
                                <span className="ml-1 px-2 py-0.5 bg-white/20 rounded-full text-xs">{savedIssues.length}</span>
                            )}
                            {(tab.id === 'liked' && likedIssues.length > 0) && (
                                <span className="ml-1 px-2 py-0.5 bg-white/20 rounded-full text-xs">{likedIssues.length}</span>
                            )}
                        </button>
                    ))}
                </div>

                {/* Featured Issues Carousel */}
                {activeTab === 'all' && featuredIssues.length > 0 && (
                    <div className="relative mb-16">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Featured Issues</h2>
                        <div className="relative overflow-hidden rounded-3xl">
                            <div
                                className="flex transition-transform duration-500 ease-out"
                                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                                ref={carouselRef}
                            >
                                {featuredIssues.map((issue, idx) => (
                                    <div key={idx} className="w-full shrink-0 cursor-pointer" onClick={() => openReaderModal(issue)}>
                                        <div className="relative h-96 rounded-3xl overflow-hidden">
                                            <img
                                                src={issue.image}
                                                alt={issue.title}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
                                            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                                <div className="flex flex-wrap gap-2 mb-3">
                                                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-600">
                                                        {issue.category}
                                                    </span>
                                                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-yellow-500">
                                                        Featured
                                                    </span>
                                                </div>
                                                <h2 className="text-3xl md:text-4xl font-bold mb-2">{issue.title}</h2>
                                                <p className="text-white/80 mb-4 max-w-2xl line-clamp-2">{issue.description}</p>
                                                <div className="flex items-center gap-4">
                                                    <div className="flex items-center gap-2 text-sm">
                                                        <HiOutlineCalendar className="w-4 h-4" />
                                                        <span>{issue.date}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-sm">
                                                        <HiOutlineEye className="w-4 h-4" />
                                                        <span>{issue.views} views</span>
                                                    </div>
                                                    <button
                                                        onClick={(e) => { e.stopPropagation(); handleLikeIssue(issue.id); }}
                                                        className={`flex items-center gap-1 px-3 py-1 rounded-full transition-colors ${likedIssues.includes(issue.id) ? 'bg-red-500 text-white' : 'bg-white/20 hover:bg-white/30'
                                                            }`}
                                                    >
                                                        <HiOutlineHeart className="w-4 h-4" />
                                                        {likedIssues.includes(issue.id) ? 'Liked' : 'Like'}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {featuredIssues.length > 1 && (
                                <>
                                    <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors">
                                        <HiOutlineChevronLeft className="w-6 h-6" />
                                    </button>
                                    <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors">
                                        <HiOutlineChevronRight className="w-6 h-6" />
                                    </button>
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                        {featuredIssues.map((_, idx) => (
                                            <button key={idx} onClick={() => setCurrentSlide(idx)} className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === idx ? 'w-6 bg-white' : 'bg-white/50'}`} />
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                )}

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
                            placeholder="Search past issues by title, topic, or keywords..."
                            className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                            aria-label="Search newsletter archive"
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
                            value={selectedYear}
                            onChange={(e) => setSelectedYear(e.target.value)}
                            className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="all">All Years</option>
                            {years.map(year => <option key={year} value={year}>{year}</option>)}
                        </select>
                        <select
                            value={selectedMonth}
                            onChange={(e) => setSelectedMonth(e.target.value)}
                            className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="all">All Months</option>
                            {months.map(month => <option key={month} value={month}>{month}</option>)}
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

                {/* Expanded Filters Panel */}
                {showFilters && (
                    <div className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                        <div className="grid md:grid-cols-3 gap-6">
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
                        </button>
                    ))}
                </div>

                {/* Results Count */}
                <div className="mb-6">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Showing <span className="font-semibold text-gray-900 dark:text-white">{filteredIssues.length}</span> newsletter issues
                        {searchQuery && ` matching "${searchQuery}"`}
                    </p>
                </div>

                {/* Issues Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {filteredIssues.map((issue) => {
                        const isExpanded = expandedIssue === issue.id;
                        const isSaved = savedIssues.includes(issue.id);
                        const isLiked = likedIssues.includes(issue.id);

                        return (
                            <div
                                key={issue.id}
                                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700 cursor-pointer"
                                onClick={() => openReaderModal(issue)}
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={issue.image}
                                        alt={issue.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        loading="lazy"
                                    />
                                    <div className="absolute top-3 left-3">
                                        <span className="px-2 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                                            {issue.category}
                                        </span>
                                    </div>
                                    {issue.featured && (
                                        <div className="absolute top-3 right-3">
                                            <span className="flex items-center gap-1 px-2 py-1 bg-yellow-500 text-white text-xs font-semibold rounded-full">
                                                <HiOutlineStar className="w-3 h-3" />
                                                Featured
                                            </span>
                                        </div>
                                    )}
                                    {issue.videoUrl && (
                                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                            <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                                                <HiOutlineVideoCamera className="w-6 h-6 text-blue-600" />
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="p-5">
                                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                                        <HiOutlineCalendar className="w-4 h-4" />
                                        <span>{issue.date}</span>
                                        <span className="w-1 h-1 bg-gray-300 rounded-full" />
                                        <HiOutlineClock className="w-4 h-4" />
                                        <span>{issue.readTime}</span>
                                        <span className="w-1 h-1 bg-gray-300 rounded-full" />
                                        <HiOutlineEye className="w-4 h-4" />
                                        <span>{issue.views}</span>
                                    </div>

                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                                        {issue.title}
                                    </h3>

                                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
                                        {issue.description}
                                    </p>

                                    <button
                                        onClick={(e) => { e.stopPropagation(); setExpandedIssue(isExpanded ? null : issue.id); }}
                                        className="flex items-center gap-1 text-xs text-blue-600 font-medium mb-3"
                                    >
                                        {isExpanded ? 'Show less' : 'Preview content'}
                                        <HiOutlineChevronDown className={`w-3 h-3 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                                    </button>

                                    {isExpanded && issue.content && (
                                        <p className="text-xs text-gray-600 dark:text-gray-400 mb-3 line-clamp-3">{issue.content}</p>
                                    )}

                                    <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                                        <div className="flex items-center gap-2">
                                            <button
                                                onClick={(e) => { e.stopPropagation(); handleLikeIssue(issue.id); }}
                                                className={`transition-colors ${isLiked ? 'text-red-500' : 'text-gray-400 hover:text-red-500'}`}
                                            >
                                                <HiOutlineHeart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                                            </button>
                                            <button
                                                onClick={(e) => { e.stopPropagation(); handleSaveIssue(issue.id); }}
                                                className={`transition-colors ${isSaved ? 'text-yellow-500' : 'text-gray-400 hover:text-yellow-500'}`}
                                            >
                                                <HiOutlineBookmark className="w-4 h-4" />
                                            </button>
                                            <button className="text-gray-400 hover:text-blue-600 transition-colors">
                                                <HiOutlineShare className="w-4 h-4" />
                                            </button>
                                        </div>
                                        <span className="text-blue-600 text-xs font-semibold hover:underline">Read Full Issue →</span>
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
                        <p className="text-gray-500 dark:text-gray-400">
                            {activeTab === 'saved' ? "You haven't saved any issues yet." :
                                activeTab === 'liked' ? "You haven't liked any issues yet." :
                                    "Try adjusting your search or filter criteria"}
                        </p>
                        {(activeTab === 'saved' || activeTab === 'liked') && (
                            <button onClick={() => setActiveTab('all')} className="mt-4 text-blue-600 hover:underline">
                                Browse All Issues
                            </button>
                        )}
                        {activeFiltersCount > 0 && (
                            <button onClick={clearAllFilters} className="mt-4 text-blue-600 hover:underline ml-4">
                                Clear all filters
                            </button>
                        )}
                    </div>
                )}

                {/* Subscribe CTA */}
                <div className="mt-12 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 text-white text-center">
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

                {/* Reader Modal */}
                {showReaderModal && selectedIssue && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 overflow-y-auto" onClick={() => setShowReaderModal(false)}>
                        <div className="relative max-w-3xl w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl my-8" onClick={(e) => e.stopPropagation()}>
                            <div className="relative h-48 overflow-hidden">
                                <img src={selectedIssue.image} alt={selectedIssue.title} className="w-full h-full object-cover" />
                                <button onClick={() => setShowReaderModal(false)} className="absolute top-4 right-4 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70">
                                    <HiOutlineX className="w-5 h-5" />
                                </button>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="px-2 py-1 rounded-full text-xs font-semibold bg-blue-600 text-white">
                                        {selectedIssue.category}
                                    </span>
                                    <span className="text-sm text-gray-500">{selectedIssue.date}</span>
                                    <span className="text-sm text-gray-500">•</span>
                                    <span className="text-sm text-gray-500">{selectedIssue.readTime}</span>
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{selectedIssue.title}</h2>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">{selectedIssue.description}</p>
                                <div className="bg-gray-50 dark:bg-gray-700/30 rounded-xl p-4 mb-4">
                                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">In this issue:</p>
                                    <ul className="space-y-2">
                                        {selectedIssue.keyTopics.map((topic, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                                                <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                                                <span>{topic}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                {selectedIssue.videoUrl && (
                                    <button
                                        onClick={() => { setCurrentVideo(selectedIssue.videoUrl); setShowVideoModal(true); setShowReaderModal(false); }}
                                        className="w-full mb-4 inline-flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                                    >
                                        <HiOutlineVideoCamera className="w-4 h-4" />
                                        Watch Video Summary
                                    </button>
                                )}
                                <div className="flex gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">
                                    <a href={`/newsletter/${selectedIssue.id}/download`} className="flex-1 bg-blue-600 text-white text-center py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                                        Download PDF
                                    </a>
                                    <button
                                        onClick={() => handleSaveIssue(selectedIssue.id)}
                                        className={`px-4 py-2 rounded-lg transition-colors ${savedIssues.includes(selectedIssue.id) ? 'bg-yellow-100 text-yellow-600' : 'bg-gray-100 text-gray-600'}`}
                                    >
                                        <HiOutlineBookmark className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Video Modal */}
                {showVideoModal && currentVideo && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90" onClick={() => setShowVideoModal(false)}>
                        <div className="relative max-w-4xl w-full bg-black rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
                            <button onClick={() => setShowVideoModal(false)} className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70">
                                <HiOutlineX className="w-6 h-6" />
                            </button>
                            <video ref={videoRef} src={currentVideo} className="w-full" controls autoPlay />
                        </div>
                    </div>
                )}
            </div>

            <style>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
        </section>
    );
};

export default NewsletterArchiveSection3;