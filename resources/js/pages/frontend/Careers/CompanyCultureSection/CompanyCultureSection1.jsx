// page/frontend/Careers/CompanyCultureSection/CompanyCultureSection1.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// Icons
import {
    AiOutlineShareAlt as HiOutlineShareAlt,
} from "react-icons/ai";
import {
    FaQuoteLeft as HiOutlineQuote,
    FaCertificate as HiOutlineCertificate,
} from "react-icons/fa";
import {
    HiOutlineHeart,
    HiOutlineUserGroup,
    HiOutlineLightBulb,
    HiOutlineGlobe,
    HiOutlineChartBar,
    HiOutlineCalendar,
    HiOutlineClock,
    HiOutlineEye,
    HiOutlineTag,
    HiOutlineFilter,
    HiOutlineSearch,
    HiOutlineShare,
    HiOutlineBookmark,
    HiOutlineExternalLink,
    HiOutlineMail,
    HiOutlineBell,
    HiOutlineSparkles,
    HiOutlineStar,
    HiOutlineTrendingUp,
    HiOutlineFire,
    HiOutlineAcademicCap,
    HiOutlineBriefcase,
    HiOutlineLocationMarker,
    HiOutlineUsers,
    HiOutlineChip,
    HiOutlineCloudUpload,
    HiOutlineMenu,
    HiOutlineViewGrid,
    HiOutlineViewList,
    HiOutlineX,
    HiOutlineChevronDown,
    HiOutlineChevronUp,
    HiOutlineThumbUp,
    HiOutlineChat,
    HiOutlineFlag,
    HiOutlineGift,
    HiOutlineArchive,
    HiOutlinePhotograph,
    HiOutlineDocument,
    HiOutlineLink,
    HiOutlineCreditCard,
    HiOutlineChartPie,
    HiOutlineAtSymbol,
    HiOutlinePrinter,
    HiOutlineDuplicate,
    HiOutlineQrcode,
    HiOutlinePlay,
    HiOutlineVideoCamera,
    HiOutlineMicrophone,
    HiOutlinePhone,
    HiOutlineBadgeCheck,
    HiOutlineDesktopComputer,
    HiOutlineDeviceMobile,
    HiOutlineWifi,
    HiOutlineBeaker,
    HiOutlinePuzzle,
} from 'react-icons/hi';
import {
    HiArrowRight,
    HiOutlineTrophy,
    HiOutlineBuildingOffice,
    HiOutlineRocketLaunch as HiOutlineRocket,
} from 'react-icons/hi2';
import {
    MdOutlineCoffee as HiOutlineCoffee,
    MdOutlineHandshake as HiOutlineHandshake,
} from "react-icons/md";


const CompanyCultureSection1 = ({ config }) => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [expandedStory, setExpandedStory] = useState(null);
    const [savedStories, setSavedStories] = useState([]);

    // Icon mapping function
    const getIcon = (iconName, className = "w-5 h-5") => {
        const icons = {
            heart: <HiOutlineHeart className={className} />,
            users: <HiOutlineUserGroup className={className} />,
            lightbulb: <HiOutlineLightBulb className={className} />,
            trophy: <HiOutlineTrophy className={className} />,
            globe: <HiOutlineGlobe className={className} />,
            chart: <HiOutlineChartBar className={className} />,
            calendar: <HiOutlineCalendar className={className} />,
            clock: <HiOutlineClock className={className} />,
            eye: <HiOutlineEye className={className} />,
            tag: <HiOutlineTag className={className} />,
            filter: <HiOutlineFilter className={className} />,
            search: <HiOutlineSearch className={className} />,
            share: <HiOutlineShare className={className} />,
            bookmark: <HiOutlineBookmark className={className} />,
            external: <HiOutlineExternalLink className={className} />,
            mail: <HiOutlineMail className={className} />,
            bell: <HiOutlineBell className={className} />,
            sparkles: <HiOutlineSparkles className={className} />,
            rocket: <HiOutlineRocket className={className} />,
            star: <HiOutlineStar className={className} />,
            trending: <HiOutlineTrendingUp className={className} />,
            fire: <HiOutlineFire className={className} />,
            academic: <HiOutlineAcademicCap className={className} />,
            briefcase: <HiOutlineBriefcase className={className} />,
            location: <HiOutlineLocationMarker className={className} />,
            usergroup: <HiOutlineUsers className={className} />,
            chip: <HiOutlineChip className={className} />,
            cloud: <HiOutlineCloudUpload className={className} />,
            menu: <HiOutlineMenu className={className} />,
            grid: <HiOutlineViewGrid className={className} />,
            list: <HiOutlineViewList className={className} />,
            x: <HiOutlineX className={className} />,
            'chevron-down': <HiOutlineChevronDown className={className} />,
            'chevron-up': <HiOutlineChevronUp className={className} />,
            'thumbs-up': <HiOutlineThumbUp className={className} />,
            chat: <HiOutlineChat className={className} />,
            flag: <HiOutlineFlag className={className} />,
            gift: <HiOutlineGift className={className} />,
            archive: <HiOutlineArchive className={className} />,
            photo: <HiOutlinePhotograph className={className} />,
            doc: <HiOutlineDocument className={className} />,
            link: <HiOutlineLink className={className} />,
            credit: <HiOutlineCreditCard className={className} />,
            pie: <HiOutlineChartPie className={className} />,
            quote: <HiOutlineQuote className={className} />,
            at: <HiOutlineAtSymbol className={className} />,
            building: <HiOutlineBuildingOffice className={className} />,
            printer: <HiOutlinePrinter className={className} />,
            shareAlt: <HiOutlineShareAlt className={className} />,
            duplicate: <HiOutlineDuplicate className={className} />,
            qrcode: <HiOutlineQrcode className={className} />,
            play: <HiOutlinePlay className={className} />,
            video: <HiOutlineVideoCamera className={className} />,
            microphone: <HiOutlineMicrophone className={className} />,
            phone: <HiOutlinePhone className={className} />,
            badge: <HiOutlineBadgeCheck className={className} />,
            certificate: <HiOutlineCertificate className={className} />,
            desktop: <HiOutlineDesktopComputer className={className} />,
            mobile: <HiOutlineDeviceMobile className={className} />,
            wifi: <HiOutlineWifi className={className} />,
            coffee: <HiOutlineCoffee className={className} />,
            beaker: <HiOutlineBeaker className={className} />,
            puzzle: <HiOutlinePuzzle className={className} />,
            handshake: <HiOutlineHandshake className={className} />
        };
        return icons[iconName] || <HiOutlineHeart className={className} />;
    };

    // Get category configuration
    const getCategoryConfig = (category) => {
        const configs = {
            'values': { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: 'heart', label: 'Core Values' },
            'benefits': { color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400', icon: 'gift', label: 'Benefits & Perks' },
            'events': { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', icon: 'calendar', label: 'Events & Activities' },
            'testimonials': { color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400', icon: 'chat', label: 'Employee Stories' },
            'diversity': { color: 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400', icon: 'users', label: 'Diversity & Inclusion' },
            'innovation': { color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400', icon: 'lightbulb', label: 'Innovation' }
        };
        return configs[category] || configs.values;
    };

    // Handle save story
    const handleSaveStory = (storyId) => {
        if (savedStories.includes(storyId)) {
            setSavedStories(savedStories.filter(id => id !== storyId));
        } else {
            setSavedStories([...savedStories, storyId]);
        }
    };

    // Filter stories
    const getFilteredStories = () => {
        let stories = config?.stories || [];

        if (searchQuery) {
            stories = stories.filter(s =>
                s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                s.content?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                s.tags?.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
            );
        }

        if (selectedCategory !== 'all') {
            stories = stories.filter(s => s.category === selectedCategory);
        }

        return stories;
    };

    const filteredStories = getFilteredStories();
    const categories = config?.categories || [
        { id: 'all', label: 'All Stories', icon: 'heart' },
        { id: 'values', label: 'Core Values', icon: 'heart' },
        { id: 'benefits', label: 'Benefits & Perks', icon: 'gift' },
        { id: 'events', label: 'Events', icon: 'calendar' },
        { id: 'testimonials', label: 'Employee Stories', icon: 'chat' },
        { id: 'diversity', label: 'Diversity', icon: 'users' }
    ];

    // Stats
    const stats = config?.stats || [
        { value: "98%", label: "Employee Satisfaction", icon: "star" },
        { value: "25+", label: "Countries", icon: "globe" },
        { value: "15+", label: "Employee Resource Groups", icon: "users" },
        { value: "1000+", label: "Team Members", icon: "usergroup" }
    ];

    // Core values
    const coreValues = config?.coreValues || [
        { title: "Customer First", description: "We put our customers at the center of everything we do.", icon: "heart" },
        { title: "Innovation", description: "We embrace curiosity and push boundaries to create breakthrough solutions.", icon: "lightbulb" },
        { title: "Integrity", description: "We act with honesty, transparency, and accountability.", icon: "badge" },
        { title: "Collaboration", description: "We achieve more together through teamwork and mutual respect.", icon: "handshake" },
        { title: "Excellence", description: "We strive for excellence in everything we do.", icon: "trophy" },
        { title: "Inclusion", description: "We celebrate diversity and create a culture where everyone belongs.", icon: "users" }
    ];

    // Benefits
    const benefits = config?.benefits || [
        { title: "Competitive Compensation", description: "Market-leading salaries and equity packages", icon: "credit" },
        { title: "Health & Wellness", description: "Comprehensive medical, dental, and vision coverage", icon: "heart" },
        { title: "Flexible Work", description: "Remote-first culture with flexible hours", icon: "wifi" },
        { title: "Learning & Development", description: "$5,000 annual learning stipend", icon: "academic" },
        { title: "Paid Time Off", description: "Unlimited PTO and 12 company holidays", icon: "calendar" },
        { title: "Parental Leave", description: "16 weeks fully paid parental leave", icon: "gift" }
    ];

    // Featured story
    const featuredStory = config?.featuredStory || filteredStories[0];

    return (
        <section
            className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
            role="region"
            aria-label="Company Culture"
        >
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
            <div className="absolute top-40 left-0 w-72 h-72 bg-pink-200 dark:bg-pink-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true" />
            <div className="absolute bottom-40 right-0 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    {/* Section Badge */}
                    <div className="inline-flex items-center bg-pink-50 dark:bg-gray-800 rounded-full px-4 py-2 mb-6 border border-pink-100 dark:border-gray-700">
                        <HiOutlineHeart className="w-4 h-4 text-pink-600 dark:text-pink-400 mr-2" />
                        <span className="text-sm font-medium text-pink-700 dark:text-pink-300">
                            {config?.badge || "Our Culture"}
                        </span>
                    </div>

                    {/* Section Title */}
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        {config?.title?.prefix || "Life at"} <span className="bg-linear-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "SupplyChainPro"}</span>
                    </h2>

                    {/* Section Description */}
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        {config?.description || "We're building a workplace where innovation thrives, diversity is celebrated, and every team member feels valued and empowered."}
                    </p>
                </div>

                {/* Stats Row */}
                <div className="flex flex-wrap justify-center gap-6 mb-12">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-2xl px-6 py-3 shadow-sm border border-gray-200 dark:border-gray-700">
                            <div className="w-10 h-10 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center">
                                {getIcon(stat.icon, "w-5 h-5 text-pink-600")}
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
                        placeholder={config?.searchPlaceholder || "Search stories, values, or experiences..."}
                        className="w-full pl-12 pr-4 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500"
                        aria-label="Search culture stories"
                    />
                </div>

                {/* Category Filters */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${selectedCategory === category.id
                                ? 'bg-pink-600 text-white shadow-lg shadow-pink-600/25'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                }`}
                        >
                            {getIcon(category.icon, "w-4 h-4")}
                            {category.label}
                        </button>
                    ))}
                </div>

                {/* Core Values Section */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">Our Core Values</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {coreValues.map((value, idx) => (
                            <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 text-center">
                                <div className="w-12 h-12 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center mx-auto mb-4">
                                    {getIcon(value.icon, "w-6 h-6 text-pink-600")}
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{value.title}</h4>
                                <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Benefits Section */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">Benefits & Perks</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                                <div className="w-10 h-10 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center shrink-0">
                                    {getIcon(benefit.icon, "w-5 h-5 text-pink-600")}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{benefit.title}</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">{benefit.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Featured Story */}
                {featuredStory && (
                    <div className="mb-16">
                        <div className="relative bg-linear-to-br from-pink-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-pink-200 dark:bg-pink-900/20 rounded-full blur-3xl" aria-hidden="true" />

                            <div className="relative p-8 md:p-10">
                                <div className="grid lg:grid-cols-2 gap-8 items-center">
                                    <div>
                                        <div className="flex items-center gap-2 mb-4">
                                            <span className="px-3 py-1 bg-pink-600 text-white text-xs font-semibold rounded-full">
                                                Featured Story
                                            </span>
                                            <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                                                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getCategoryConfig(featuredStory.category).color}`}>
                                                    {getCategoryConfig(featuredStory.category).label}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3 mb-4">
                                            <img
                                                src={featuredStory.author?.avatar}
                                                alt={featuredStory.author?.name}
                                                className="w-12 h-12 rounded-full object-cover"
                                            />
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                                    {featuredStory.author?.name}
                                                </h3>
                                                <p className="text-sm text-gray-500">{featuredStory.author?.role}</p>
                                            </div>
                                        </div>

                                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                            {featuredStory.title}
                                        </h3>

                                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                                            {featuredStory.excerpt}
                                        </p>

                                        <div className="flex flex-wrap gap-3">
                                            <button
                                                onClick={() => setExpandedStory(expandedStory === featuredStory.id ? null : featuredStory.id)}
                                                className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                                            >
                                                Read Full Story
                                                <HiArrowRight className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={() => handleSaveStory(featuredStory.id)}
                                                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 border ${savedStories.includes(featuredStory.id)
                                                    ? 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-300 text-yellow-700 dark:text-yellow-400'
                                                    : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-pink-600'
                                                    }`}
                                            >
                                                <HiOutlineBookmark className="w-4 h-4" />
                                                {savedStories.includes(featuredStory.id) ? 'Saved' : 'Save for Later'}
                                            </button>
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <div className="absolute -inset-4 bg-pink-600/20 rounded-2xl blur-2xl" aria-hidden="true" />
                                        <img
                                            src={featuredStory.image}
                                            alt={featuredStory.title}
                                            className="relative rounded-2xl shadow-2xl w-full object-cover"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>

                                {expandedStory === featuredStory.id && featuredStory.content && (
                                    <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{featuredStory.content}</p>
                                        {featuredStory.quote && (
                                            <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-xl border-l-4 border-pink-500">
                                                <HiOutlineQuote className="w-5 h-5 text-pink-500 mb-2" />
                                                <p className="text-sm italic text-gray-700 dark:text-gray-300">"{featuredStory.quote.text}"</p>
                                                <p className="text-xs text-gray-500 mt-2">— {featuredStory.quote.author}</p>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Stories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {filteredStories.map((story) => {
                        const categoryConfig = getCategoryConfig(story.category);
                        const isExpanded = expandedStory === story.id;
                        const isSaved = savedStories.includes(story.id);

                        return (
                            <div
                                key={story.id}
                                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={story.image}
                                        alt={story.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        loading="lazy"
                                    />
                                    <div className="absolute top-3 left-3">
                                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${categoryConfig.color}`}>
                                            {categoryConfig.label}
                                        </span>
                                    </div>
                                    <button
                                        onClick={() => handleSaveStory(story.id)}
                                        className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors"
                                    >
                                        <HiOutlineBookmark className={`w-4 h-4 ${isSaved ? 'fill-yellow-500 text-yellow-500' : 'text-gray-600'}`} />
                                    </button>
                                </div>

                                <div className="p-6">
                                    <div className="flex items-center gap-3 mb-3">
                                        <img
                                            src={story.author?.avatar}
                                            alt={story.author?.name}
                                            className="w-8 h-8 rounded-full object-cover"
                                        />
                                        <div>
                                            <p className="text-sm font-medium text-gray-900 dark:text-white">{story.author?.name}</p>
                                            <p className="text-xs text-gray-500">{story.author?.role}</p>
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                                        {story.title}
                                    </h3>

                                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                                        {story.excerpt}
                                    </p>

                                    {/* Expandable Content */}
                                    {story.content && (
                                        <div className="mb-4">
                                            <button
                                                onClick={() => setExpandedStory(isExpanded ? null : story.id)}
                                                className="flex items-center gap-1 text-sm text-pink-600 dark:text-pink-400 font-medium hover:gap-2 transition-all duration-300"
                                            >
                                                {isExpanded ? 'Show less' : 'Read more'}
                                                <HiArrowRight className="w-4 h-4" />
                                            </button>

                                            {isExpanded && (
                                                <div className="mt-3">
                                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                                        {story.content}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    {/* Tags */}
                                    {story.tags && story.tags.length > 0 && (
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {story.tags.slice(0, 3).map((tag, idx) => (
                                                <span key={idx} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full">
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                                        <div className="flex items-center gap-2">
                                            <HiOutlineCalendar className="w-4 h-4 text-gray-400" />
                                            <span className="text-xs text-gray-500">{story.date}</span>
                                        </div>
                                        <button
                                            onClick={() => handleSaveStory(story.id)}
                                            className={`transition-colors ${isSaved ? 'text-yellow-500' : 'text-gray-400 hover:text-yellow-500'}`}
                                        >
                                            <HiOutlineBookmark className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* No Results */}
                {filteredStories.length === 0 && (
                    <div className="text-center py-12">
                        <HiOutlineHeart className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No stories found</h3>
                        <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter criteria</p>
                        <button
                            onClick={() => {
                                setSearchQuery('');
                                setSelectedCategory('all');
                            }}
                            className="mt-4 text-pink-600 dark:text-pink-400 hover:underline"
                        >
                            Clear all filters
                        </button>
                    </div>
                )}

                {/* Join Us CTA */}
                <div className="mt-12 bg-linear-to-r from-pink-600 to-purple-600 dark:from-pink-500 dark:to-purple-500 rounded-3xl p-8 text-white text-center">
                    <HiOutlineUserGroup className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                        {config?.ctaTitle || "Join Our Team"}
                    </h3>
                    <p className="text-pink-100 mb-6 max-w-2xl mx-auto">
                        {config?.ctaDescription || "Ready to be part of something special? Explore open positions and find your place at SupplyChainPro."}
                    </p>
                    <Link
                        href="/careers"
                        className="inline-flex items-center gap-2 bg-white text-pink-600 px-8 py-4 rounded-xl font-semibold hover:bg-pink-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                        View Open Positions
                        <HiArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                {/* Newsletter Subscription */}
                {config?.showNewsletter && (
                    <div className="mt-12 bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 text-center">
                        <HiOutlineBell className="w-12 h-12 mx-auto text-pink-600 dark:text-pink-400 mb-4" />
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            {config?.newsletter?.title || "Life at SupplyChainPro"}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                            {config?.newsletter?.description || "Subscribe to get updates about company culture, events, and career opportunities."}
                        </p>
                        <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="flex-1 px-6 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
                                aria-label="Email for culture updates"
                            />
                            <button
                                type="submit"
                                className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                            >
                                Subscribe
                            </button>
                        </form>
                        <p className="text-xs text-gray-500 dark:text-gray-500 mt-4">
                            {config?.newsletter?.disclaimer || "No spam, unsubscribe anytime. Get 1-2 emails per month."}
                        </p>
                    </div>
                )}
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

export default CompanyCultureSection1;