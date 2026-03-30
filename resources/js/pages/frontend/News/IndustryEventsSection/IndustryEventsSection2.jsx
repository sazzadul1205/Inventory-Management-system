// page/frontend/News/IndustryEventsSection/IndustryEventsSection2.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useCallback } from 'react';

// Icons
import { AiOutlineShareAlt as HiOutlineShareAlt } from "react-icons/ai";
import {
    FaQuoteLeft as HiOutlineQuote,
} from "react-icons/fa";
import {
    HiOutlineCalendar,
    HiOutlineClock,
    HiOutlineLocationMarker,
    HiOutlineUsers,
    HiOutlineTicket,
    HiOutlineVideoCamera,
    HiOutlineMicrophone,
    HiOutlinePresentationChartLine,
    HiOutlineAcademicCap,
    HiOutlineBriefcase,
    HiOutlineGlobe,
    HiOutlineSearch,
    HiOutlineFilter,
    HiOutlineTag,
    HiOutlineEye,
    HiOutlineShare,
    HiOutlineBookmark,
    HiOutlineExternalLink,
    HiOutlineMail,
    HiOutlineBell,
    HiOutlineSparkles,
    HiOutlineChartBar,
    HiOutlineLightBulb,
    HiOutlineCheckCircle,
    HiArrowRight,
    HiOutlineDocumentText,
    HiOutlineStar,
    HiOutlineTrendingUp,
    HiOutlineFire,
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
    HiOutlineHeart
} from 'react-icons/hi';
import { HiOutlinePhone, HiOutlineRocketLaunch as HiOutlineRocket, HiOutlineTrophy, HiOutlineBuildingOffice, HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi2';


const IndustryEventsSection2 = ({ config }) => {
    const [selectedEventType, setSelectedEventType] = useState('all');
    const [selectedFormat, setSelectedFormat] = useState('all');
    const [selectedMonth, setSelectedMonth] = useState('all');
    const [selectedRegion, setSelectedRegion] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [viewMode, setViewMode] = useState(config?.defaultViewMode || 'grid');
    const [savedEvents, setSavedEvents] = useState([]);
    const [registeredEvents, setRegisteredEvents] = useState([]);
    const [showFilters, setShowFilters] = useState(false);

    // Icon mapping function
    const getIcon = (iconName, className = "w-5 h-5") => {
        const icons = {
            calendar: <HiOutlineCalendar className={className} />,
            clock: <HiOutlineClock className={className} />,
            location: <HiOutlineLocationMarker className={className} />,
            users: <HiOutlineUsers className={className} />,
            ticket: <HiOutlineTicket className={className} />,
            video: <HiOutlineVideoCamera className={className} />,
            microphone: <HiOutlineMicrophone className={className} />,
            presentation: <HiOutlinePresentationChartLine className={className} />,
            academic: <HiOutlineAcademicCap className={className} />,
            briefcase: <HiOutlineBriefcase className={className} />,
            globe: <HiOutlineGlobe className={className} />,
            search: <HiOutlineSearch className={className} />,
            filter: <HiOutlineFilter className={className} />,
            tag: <HiOutlineTag className={className} />,
            eye: <HiOutlineEye className={className} />,
            share: <HiOutlineShare className={className} />,
            bookmark: <HiOutlineBookmark className={className} />,
            external: <HiOutlineExternalLink className={className} />,
            mail: <HiOutlineMail className={className} />,
            bell: <HiOutlineBell className={className} />,
            sparkles: <HiOutlineSparkles className={className} />,
            rocket: <HiOutlineRocket className={className} />,
            trophy: <HiOutlineTrophy className={className} />,
            chart: <HiOutlineChartBar className={className} />,
            lightbulb: <HiOutlineLightBulb className={className} />,
            check: <HiOutlineCheckCircle className={className} />,
            arrow: <HiArrowRight className={className} />,
            document: <HiOutlineDocumentText className={className} />,
            star: <HiOutlineStar className={className} />,
            trending: <HiOutlineTrendingUp className={className} />,
            fire: <HiOutlineFire className={className} />,
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
            phone: <HiOutlinePhone className={className} />,
            'chevron-left': <HiOutlineChevronLeft className={className} />,
            'chevron-right': <HiOutlineChevronRight className={className} />,
            heart: <HiOutlineHeart className={className} />
        };
        return icons[iconName] || <HiOutlineCalendar className={className} />;
    };

    // Format date helper
    const formatDate = (dateString, format = 'full') => {
        if (!dateString) return '';
        const date = new Date(dateString);
        const now = new Date();
        const diffDays = Math.ceil((date - now) / (1000 * 60 * 60 * 24));

        if (format === 'short') {
            return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(date);
        }
        if (format === 'relative') {
            if (diffDays < 0) return 'Past Event';
            if (diffDays === 0) return 'Today';
            if (diffDays === 1) return 'Tomorrow';
            if (diffDays < 7) return `In ${diffDays} days`;
            if (diffDays < 30) return `In ${Math.floor(diffDays / 7)} weeks`;
            if (diffDays < 365) return `In ${Math.floor(diffDays / 30)} months`;
            return `In ${Math.floor(diffDays / 365)} years`;
        }
        return new Intl.DateTimeFormat('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        }).format(date);
    };

    // Get event type configuration
    const getEventTypeConfig = (type) => {
        const configs = {
            'conference': { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: 'users', label: 'Conference', gradient: 'from-blue-500 to-blue-600' },
            'webinar': { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', icon: 'video', label: 'Webinar', gradient: 'from-purple-500 to-purple-600' },
            'workshop': { color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400', icon: 'academic', label: 'Workshop', gradient: 'from-green-500 to-green-600' },
            'summit': { color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400', icon: 'rocket', label: 'Summit', gradient: 'from-orange-500 to-orange-600' },
            'expo': { color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400', icon: 'globe', label: 'Expo', gradient: 'from-red-500 to-red-600' },
            'networking': { color: 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400', icon: 'users', label: 'Networking', gradient: 'from-pink-500 to-pink-600' }
        };
        return configs[type] || configs.conference;
    };

    // Get format configuration
    const getFormatConfig = (format) => {
        const configs = {
            'in-person': { color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400', icon: 'location', label: 'In-Person', badge: '📍 In-Person' },
            'virtual': { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: 'video', label: 'Virtual', badge: '💻 Virtual' },
            'hybrid': { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', icon: 'globe', label: 'Hybrid', badge: '🌐 Hybrid' }
        };
        return configs[format] || configs.virtual;
    };

    // Handle save event
    const handleSaveEvent = (eventId) => {
        setSavedEvents(prev =>
            prev.includes(eventId)
                ? prev.filter(id => id !== eventId)
                : [...prev, eventId]
        );
    };

    // Handle register for event
    const handleRegisterEvent = (eventId) => {
        setRegisteredEvents(prev =>
            prev.includes(eventId)
                ? prev.filter(id => id !== eventId)
                : [...prev, eventId]
        );
    };

    // Get unique regions for filter
    const getUniqueRegions = () => {
        const regions = new Set();
        config?.events?.forEach(event => {
            if (event.region) {
                regions.add(event.region);
            }
        });
        return Array.from(regions);
    };

    // Get unique months for filter
    const getUniqueMonths = () => {
        const months = new Set();
        config?.events?.forEach(event => {
            if (event.startDate) {
                const month = new Date(event.startDate).toLocaleString('default', { month: 'long', year: 'numeric' });
                months.add(month);
            }
        });
        return Array.from(months).sort((a, b) => new Date(a) - new Date(b));
    };

    // Filter events
    const getFilteredEvents = useCallback(() => {
        let events = config?.events || [];

        if (searchQuery) {
            events = events.filter(e =>
                e.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                e.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                e.tags?.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
            );
        }

        if (selectedEventType !== 'all') {
            events = events.filter(e => e.type === selectedEventType);
        }

        if (selectedFormat !== 'all') {
            events = events.filter(e => e.format === selectedFormat);
        }

        if (selectedRegion !== 'all') {
            events = events.filter(e => e.region === selectedRegion);
        }

        if (selectedMonth !== 'all') {
            events = events.filter(e => {
                const eventMonth = new Date(e.startDate).toLocaleString('default', { month: 'long', year: 'numeric' });
                return eventMonth === selectedMonth;
            });
        }

        // Sort by date (upcoming first)
        return [...events].sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
    }, [config?.events, searchQuery, selectedEventType, selectedFormat, selectedRegion, selectedMonth]);

    const filteredEvents = getFilteredEvents();
    const eventTypes = config?.eventTypes || [
        { id: 'all', label: 'All Events', icon: 'calendar', count: config?.events?.length || 0 },
        { id: 'conference', label: 'Conferences', icon: 'users' },
        { id: 'webinar', label: 'Webinars', icon: 'video' },
        { id: 'workshop', label: 'Workshops', icon: 'academic' },
        { id: 'summit', label: 'Summits', icon: 'rocket' },
        { id: 'expo', label: 'Expos', icon: 'globe' }
    ];

    const eventFormats = config?.eventFormats || [
        { id: 'all', label: 'All Formats', icon: 'globe' },
        { id: 'in-person', label: 'In-Person', icon: 'location' },
        { id: 'virtual', label: 'Virtual', icon: 'video' },
        { id: 'hybrid', label: 'Hybrid', icon: 'globe' }
    ];

    const uniqueRegions = getUniqueRegions();
    const uniqueMonths = getUniqueMonths();

    // Stats cards
    const stats = config?.stats || [
        { value: "25+", label: "Annual Events", icon: "calendar", trend: "+5", trendUp: true },
        { value: "50+", label: "Expert Speakers", icon: "microphone", trend: "+12", trendUp: true },
        { value: "10k+", label: "Attendees", icon: "users", trend: "+2k", trendUp: true },
        { value: "30+", label: "Countries", icon: "globe", trend: "+8", trendUp: true }
    ];

    // Active filters count
    const activeFiltersCount = [selectedEventType !== 'all', selectedFormat !== 'all', selectedRegion !== 'all', selectedMonth !== 'all', searchQuery !== ''].filter(Boolean).length;

    // Clear all filters
    const clearAllFilters = () => {
        setSearchQuery('');
        setSelectedEventType('all');
        setSelectedFormat('all');
        setSelectedRegion('all');
        setSelectedMonth('all');
    };

    // Group events by month for calendar view
    const eventsByMonth = filteredEvents.reduce((groups, event) => {
        const monthYear = new Date(event.startDate).toLocaleString('default', { month: 'long', year: 'numeric' });
        if (!groups[monthYear]) groups[monthYear] = [];
        groups[monthYear].push(event);
        return groups;
    }, {});

    return (
        <section
            className="relative py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
            role="region"
            aria-label="Industry Events Calendar"
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
                            <HiOutlineCalendar className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                                {config?.badge || "Event Calendar"}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            {config?.title?.prefix || "Industry"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Events"}</span> {config?.title?.suffix || "Calendar"}
                        </h1>

                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                            {config?.description || "Discover and register for upcoming industry conferences, webinars, workshops, and networking events. Connect with supply chain leaders worldwide."}
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
                            placeholder={config?.searchPlaceholder || "Search events by title, topic, or speaker..."}
                            className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            aria-label="Search events"
                        />
                    </div>

                    <div className="flex gap-2">
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
                                onClick={() => setViewMode('calendar')}
                                className={`p-2 rounded-lg transition-all duration-300 ${viewMode === 'calendar' ? 'bg-white dark:bg-gray-700 shadow-md' : ''}`}
                                aria-label="Calendar view"
                            >
                                <HiOutlineCalendar className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                className={`p-2 rounded-lg transition-all duration-300 ${viewMode === 'list' ? 'bg-white dark:bg-gray-700 shadow-md' : ''}`}
                                aria-label="List view"
                            >
                                <HiOutlineViewList className="w-5 h-5" />
                            </button>
                        </div>

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
                    </div>
                </div>

                {/* Expanded Filters Panel */}
                {showFilters && (
                    <div className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                        <div className="grid md:grid-cols-4 gap-6">
                            {/* Event Type Filter */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Event Type</label>
                                <select
                                    value={selectedEventType}
                                    onChange={(e) => setSelectedEventType(e.target.value)}
                                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="all">All Types</option>
                                    {eventTypes.filter(t => t.id !== 'all').map(type => (
                                        <option key={type.id} value={type.id}>{type.label}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Format Filter */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Format</label>
                                <select
                                    value={selectedFormat}
                                    onChange={(e) => setSelectedFormat(e.target.value)}
                                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    {eventFormats.map(format => (
                                        <option key={format.id} value={format.id}>{format.label}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Region Filter */}
                            {uniqueRegions.length > 0 && (
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Region</label>
                                    <select
                                        value={selectedRegion}
                                        onChange={(e) => setSelectedRegion(e.target.value)}
                                        className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="all">All Regions</option>
                                        {uniqueRegions.map(region => (
                                            <option key={region} value={region}>{region}</option>
                                        ))}
                                    </select>
                                </div>
                            )}

                            {/* Month Filter */}
                            {uniqueMonths.length > 0 && (
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Month</label>
                                    <select
                                        value={selectedMonth}
                                        onChange={(e) => setSelectedMonth(e.target.value)}
                                        className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="all">All Months</option>
                                        {uniqueMonths.map(month => (
                                            <option key={month} value={month}>{month}</option>
                                        ))}
                                    </select>
                                </div>
                            )}
                        </div>

                        {activeFiltersCount > 0 && (
                            <div className="mt-4 flex justify-end">
                                <button
                                    onClick={clearAllFilters}
                                    className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                                >
                                    Clear all filters
                                </button>
                            </div>
                        )}
                    </div>
                )}

                {/* Event Type Pills (Quick Filters) */}
                <div className="flex flex-wrap gap-2 mb-12 overflow-x-auto pb-2">
                    {eventTypes.map((type) => (
                        <button
                            key={type.id}
                            onClick={() => setSelectedEventType(type.id)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${selectedEventType === type.id
                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                                }`}
                        >
                            {getIcon(type.icon, "w-4 h-4")}
                            {type.label}
                            {type.count !== undefined && (
                                <span className={`ml-1 px-2 py-0.5 rounded-full text-xs ${selectedEventType === type.id
                                    ? 'bg-white/20 text-white'
                                    : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                                    }`}>
                                    {type.count}
                                </span>
                            )}
                        </button>
                    ))}
                </div>

                {/* Results Count */}
                <div className="mb-6">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Showing <span className="font-semibold text-gray-900 dark:text-white">{filteredEvents.length}</span> events
                        {searchQuery && ` matching "${searchQuery}"`}
                    </p>
                </div>

                {/* Grid View */}
                {viewMode === 'grid' && (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {filteredEvents.map((event) => {
                            const eventTypeConfig = getEventTypeConfig(event.type);
                            const formatConfig = getFormatConfig(event.format);
                            const isSaved = savedEvents.includes(event.id);
                            const isRegistered = registeredEvents.includes(event.id);
                            const dateRelative = formatDate(event.startDate, 'relative');

                            return (
                                <div
                                    key={event.id}
                                    className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
                                >
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={event.image}
                                            alt={event.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            loading="lazy"
                                        />
                                        <div className="absolute top-3 left-3 flex gap-2">
                                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${eventTypeConfig.color}`}>
                                                {eventTypeConfig.label}
                                            </span>
                                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${formatConfig.color}`}>
                                                {formatConfig.label}
                                            </span>
                                        </div>
                                        <div className="absolute bottom-3 right-3">
                                            <div className="bg-black/70 px-2 py-1 rounded-lg text-white text-xs">
                                                {dateRelative}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-5">
                                        <div className="space-y-2 mb-3">
                                            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                                <HiOutlineCalendar className="w-4 h-4" />
                                                <span>{formatDate(event.startDate, 'short')}</span>
                                                {event.endDate && (
                                                    <span>- {formatDate(event.endDate, 'short')}</span>
                                                )}
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                                <HiOutlineLocationMarker className="w-4 h-4" />
                                                <span>{event.location || (event.format === 'virtual' ? 'Virtual Event' : 'TBD')}</span>
                                            </div>
                                        </div>

                                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                                            <Link href={event.link} className="hover:text-blue-600 dark:hover:text-blue-400">
                                                {event.title}
                                            </Link>
                                        </h3>

                                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                                            {event.description}
                                        </p>

                                        {/* Speaker Preview */}
                                        {event.speakers && event.speakers.length > 0 && (
                                            <div className="flex items-center gap-2 mb-4">
                                                <div className="flex -space-x-2">
                                                    {event.speakers.slice(0, 3).map((speaker, idx) => (
                                                        <img key={idx} src={speaker.avatar} alt={speaker.name} className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-800 object-cover" />
                                                    ))}
                                                </div>
                                                <span className="text-xs text-gray-500">+{event.speakers.length} speakers</span>
                                            </div>
                                        )}

                                        <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                                            <div className="flex items-center gap-3">
                                                <button
                                                    onClick={() => handleSaveEvent(event.id)}
                                                    className={`transition-colors ${isSaved ? 'text-yellow-500' : 'text-gray-400 hover:text-yellow-500'}`}
                                                >
                                                    <HiOutlineBookmark className="w-4 h-4" />
                                                </button>
                                                <button
                                                    onClick={() => handleRegisterEvent(event.id)}
                                                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${isRegistered
                                                        ? 'bg-green-600 text-white'
                                                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                                                        }`}
                                                >
                                                    {isRegistered ? 'Registered' : 'Register'}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}

                {/* Calendar View */}
                {viewMode === 'calendar' && (
                    <div className="space-y-8 mb-12">
                        {Object.entries(eventsByMonth).map(([monthYear, events]) => (
                            <div key={monthYear}>
                                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 sticky top-0 bg-gray-50 dark:bg-gray-900 py-2 z-10">
                                    {monthYear}
                                </h2>
                                <div className="space-y-4">
                                    {events.map((event) => {
                                        const eventTypeConfig = getEventTypeConfig(event.type);
                                        const formatConfig = getFormatConfig(event.format);
                                        const isRegistered = registeredEvents.includes(event.id);

                                        return (
                                            <div key={event.id} className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700">
                                                <div className="flex flex-wrap items-start justify-between gap-4">
                                                    <div className="flex-1">
                                                        <div className="flex flex-wrap items-center gap-3 mb-2">
                                                            <span className={`text-xs px-2 py-0.5 rounded-full ${eventTypeConfig.color}`}>
                                                                {eventTypeConfig.label}
                                                            </span>
                                                            <span className={`text-xs px-2 py-0.5 rounded-full ${formatConfig.color}`}>
                                                                {formatConfig.badge}
                                                            </span>
                                                            <span className="text-xs text-gray-500">{formatDate(event.startDate, 'short')}</span>
                                                        </div>
                                                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                                                            <Link href={event.link} className="hover:text-blue-600 transition-colors">
                                                                {event.title}
                                                            </Link>
                                                        </h3>
                                                        <div className="flex items-center gap-3 text-sm text-gray-500">
                                                            <div className="flex items-center gap-1">
                                                                <HiOutlineLocationMarker className="w-3 h-3" />
                                                                <span>{event.location || (event.format === 'virtual' ? 'Virtual' : 'TBD')}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button
                                                        onClick={() => handleRegisterEvent(event.id)}
                                                        className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${isRegistered
                                                            ? 'bg-green-600 text-white'
                                                            : 'bg-blue-600 hover:bg-blue-700 text-white'
                                                            }`}
                                                    >
                                                        {isRegistered ? 'Registered' : 'Register'}
                                                    </button>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* List View */}
                {viewMode === 'list' && (
                    <div className="space-y-4 mb-12">
                        {filteredEvents.map((event) => {
                            const eventTypeConfig = getEventTypeConfig(event.type);
                            const formatConfig = getFormatConfig(event.format);
                            const isRegistered = registeredEvents.includes(event.id);
                            const dateRelative = formatDate(event.startDate, 'relative');

                            return (
                                <div key={event.id} className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700">
                                    <div className="flex flex-wrap items-start gap-4">
                                        <div className="shrink-0 w-24 text-center">
                                            <div className="bg-blue-100 dark:bg-blue-900/30 rounded-xl p-2">
                                                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                                                    {new Date(event.startDate).getDate()}
                                                </div>
                                                <div className="text-xs text-gray-500">
                                                    {new Date(event.startDate).toLocaleString('default', { month: 'short' })}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex flex-wrap items-center gap-2 mb-2">
                                                <span className={`text-xs px-2 py-0.5 rounded-full ${eventTypeConfig.color}`}>
                                                    {eventTypeConfig.label}
                                                </span>
                                                <span className={`text-xs px-2 py-0.5 rounded-full ${formatConfig.color}`}>
                                                    {formatConfig.badge}
                                                </span>
                                                <span className="text-xs text-gray-500">{dateRelative}</span>
                                            </div>
                                            <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                                                <Link href={event.link} className="hover:text-blue-600 transition-colors">
                                                    {event.title}
                                                </Link>
                                            </h3>
                                            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
                                                <div className="flex items-center gap-1">
                                                    <HiOutlineLocationMarker className="w-3 h-3" />
                                                    <span>{event.location || (event.format === 'virtual' ? 'Virtual Event' : 'TBD')}</span>
                                                </div>
                                                {event.speakers && event.speakers.length > 0 && (
                                                    <div className="flex items-center gap-1">
                                                        <HiOutlineMicrophone className="w-3 h-3" />
                                                        <span>{event.speakers.length} speakers</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="shrink-0">
                                            <button
                                                onClick={() => handleRegisterEvent(event.id)}
                                                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${isRegistered
                                                    ? 'bg-green-600 text-white'
                                                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                                                    }`}
                                            >
                                                {isRegistered ? 'Registered' : 'Register'}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}

                {/* No Results */}
                {filteredEvents.length === 0 && (
                    <div className="text-center py-12">
                        <HiOutlineCalendar className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No events found</h3>
                        <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter criteria</p>
                        <button
                            onClick={clearAllFilters}
                            className="mt-4 text-blue-600 dark:text-blue-400 hover:underline"
                        >
                            Clear all filters
                        </button>
                    </div>
                )}

                {/* Newsletter Subscription */}
                {config?.showNewsletter && (
                    <div className="mt-12 bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 text-center">
                        <HiOutlineBell className="w-12 h-12 mx-auto text-blue-600 dark:text-blue-400 mb-4" />
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            {config?.newsletter?.title || "Get Event Updates"}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                            {config?.newsletter?.description || "Subscribe to receive notifications about upcoming events, webinars, and industry conferences."}
                        </p>
                        <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="flex-1 px-6 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                aria-label="Email for event updates"
                            />
                            <button
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
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

export default IndustryEventsSection2;