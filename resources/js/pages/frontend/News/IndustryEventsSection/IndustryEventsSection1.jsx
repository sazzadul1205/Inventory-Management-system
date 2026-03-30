// page/frontend/News/IndustryEventsSection/IndustryEventsSection1.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// Icons
import { AiOutlineShareAlt as HiOutlineShareAlt } from "react-icons/ai";
import {
    FaQuoteLeft as HiOutlineQuote
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
} from 'react-icons/hi';
import { HiOutlinePhone, HiOutlineRocketLaunch as HiOutlineRocket, HiOutlineTrophy, HiOutlineBuildingOffice } from 'react-icons/hi2';


const IndustryEventsSection1 = ({ config }) => {
    const [selectedEventType, setSelectedEventType] = useState('all');
    const [selectedFormat, setSelectedFormat] = useState('all');
    const [selectedRegion, setSelectedRegion] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [savedEvents, setSavedEvents] = useState([]);
    const [registeredEvents, setRegisteredEvents] = useState([]);

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
            phone: <HiOutlinePhone className={className} />
        };
        return icons[iconName] || <HiOutlineCalendar className={className} />;
    };

    // Format date helper
    const formatDate = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        const now = new Date();
        const diffTime = Math.abs(now - date);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 0) return 'Today';
        if (diffDays === 1) return 'Tomorrow';
        if (diffDays < 7) return `${diffDays} days away`;
        if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks away`;
        if (diffDays < 365) return `${Math.floor(diffDays / 30)} months away`;
        return `${Math.floor(diffDays / 365)} years away`;
    };

    // Get event type configuration
    const getEventTypeConfig = (type) => {
        const configs = {
            'conference': { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: 'users', label: 'Conference' },
            'webinar': { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', icon: 'video', label: 'Webinar' },
            'workshop': { color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400', icon: 'academic', label: 'Workshop' },
            'summit': { color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400', icon: 'rocket', label: 'Summit' },
            'expo': { color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400', icon: 'globe', label: 'Expo' },
            'networking': { color: 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400', icon: 'users', label: 'Networking' }
        };
        return configs[type] || configs.conference;
    };

    // Get format configuration
    const getFormatConfig = (format) => {
        const configs = {
            'in-person': { color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400', icon: 'location', label: 'In-Person' },
            'virtual': { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: 'video', label: 'Virtual' },
            'hybrid': { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', icon: 'globe', label: 'Hybrid' }
        };
        return configs[format] || configs.virtual;
    };

    // Handle save event
    const handleSaveEvent = (eventId) => {
        if (savedEvents.includes(eventId)) {
            setSavedEvents(savedEvents.filter(id => id !== eventId));
        } else {
            setSavedEvents([...savedEvents, eventId]);
        }
    };

    // Handle register for event
    const handleRegisterEvent = (eventId) => {
        if (registeredEvents.includes(eventId)) {
            setRegisteredEvents(registeredEvents.filter(id => id !== eventId));
        } else {
            setRegisteredEvents([...registeredEvents, eventId]);
        }
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

    // Filter events
    const getFilteredEvents = () => {
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

        return events.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
    };

    const filteredEvents = getFilteredEvents();
    const eventTypes = config?.eventTypes || [
        { id: 'all', label: 'All Events', icon: 'calendar' },
        { id: 'conference', label: 'Conferences', icon: 'users' },
        { id: 'webinar', label: 'Webinars', icon: 'video' },
        { id: 'workshop', label: 'Workshops', icon: 'academic' },
        { id: 'summit', label: 'Summits', icon: 'rocket' },
        { id: 'expo', label: 'Expos', icon: 'globe' }
    ];

    const eventFormats = config?.eventFormats || [
        { id: 'all', label: 'All Formats' },
        { id: 'in-person', label: 'In-Person' },
        { id: 'virtual', label: 'Virtual' },
        { id: 'hybrid', label: 'Hybrid' }
    ];

    const uniqueRegions = getUniqueRegions();

    // Featured event
    const featuredEvent = config?.featuredEvent || filteredEvents[0];

    // Stats cards
    const stats = config?.stats || [
        { value: "25+", label: "Annual Events", icon: "calendar" },
        { value: "50+", label: "Expert Speakers", icon: "microphone" },
        { value: "10k+", label: "Attendees", icon: "users" },
        { value: "30+", label: "Countries", icon: "globe" }
    ];

    return (
        <section
            className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
            role="region"
            aria-label="Industry Events Section"
            itemScope
            itemType="https://schema.org/Event"
        >
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
            <div className="absolute top-40 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true" />
            <div className="absolute bottom-40 right-0 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    {/* Section Badge */}
                    <div className="inline-flex items-center bg-blue-50 dark:bg-gray-800 rounded-full px-4 py-2 mb-6 border border-blue-100 dark:border-gray-700">
                        <HiOutlineCalendar className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
                        <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                            {config?.badge || "Upcoming Events"}
                        </span>
                    </div>

                    {/* Section Title */}
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        {config?.title?.prefix || "Industry"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Events"}</span> {config?.title?.suffix || "& Conferences"}
                    </h2>

                    {/* Section Description */}
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        {config?.description || "Join us at premier industry events, conferences, and webinars. Connect with supply chain leaders, discover innovations, and advance your career."}
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
                        placeholder={config?.searchPlaceholder || "Search events by title, topic, or location..."}
                        className="w-full pl-12 pr-4 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500"
                        aria-label="Search events"
                    />
                </div>

                {/* Event Type Filters */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {eventTypes.map((type) => (
                        <button
                            key={type.id}
                            onClick={() => setSelectedEventType(type.id)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${selectedEventType === type.id
                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                }`}
                            aria-label={`Show ${type.label}`}
                        >
                            {getIcon(type.icon, "w-4 h-4")}
                            {type.label}
                        </button>
                    ))}
                </div>

                {/* Format and Region Filters */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    <div className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-full px-4 py-2">
                        <HiOutlineVideoCamera className="w-4 h-4 text-gray-500" />
                        <select
                            value={selectedFormat}
                            onChange={(e) => setSelectedFormat(e.target.value)}
                            className="bg-transparent text-sm font-medium text-gray-700 dark:text-gray-300 focus:outline-none cursor-pointer"
                            aria-label="Filter by format"
                        >
                            {eventFormats.map(format => (
                                <option key={format.id} value={format.id}>{format.label}</option>
                            ))}
                        </select>
                    </div>

                    {uniqueRegions.length > 0 && (
                        <div className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-full px-4 py-2">
                            <HiOutlineGlobe className="w-4 h-4 text-gray-500" />
                            <select
                                value={selectedRegion}
                                onChange={(e) => setSelectedRegion(e.target.value)}
                                className="bg-transparent text-sm font-medium text-gray-700 dark:text-gray-300 focus:outline-none cursor-pointer"
                                aria-label="Filter by region"
                            >
                                <option value="all">All Regions</option>
                                {uniqueRegions.map(region => (
                                    <option key={region} value={region}>{region}</option>
                                ))}
                            </select>
                        </div>
                    )}
                </div>

                {/* Featured Event */}
                {featuredEvent && (
                    <div className="mb-16">
                        <div className="relative bg-linear-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl" aria-hidden="true" />

                            <div className="relative p-8 md:p-10">
                                <div className="grid lg:grid-cols-2 gap-8 items-center">
                                    <div>
                                        <div className="flex items-center gap-2 mb-4">
                                            <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                                                Featured Event
                                            </span>
                                            <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                                                <HiOutlineClock className="w-4 h-4" />
                                                <span>{formatDate(featuredEvent.startDate)}</span>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2 mb-3">
                                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getEventTypeConfig(featuredEvent.type).color}`}>
                                                {getEventTypeConfig(featuredEvent.type).label}
                                            </span>
                                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getFormatConfig(featuredEvent.format).color}`}>
                                                {getFormatConfig(featuredEvent.format).label}
                                            </span>
                                        </div>

                                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                            {featuredEvent.title}
                                        </h3>

                                        <div className="space-y-2 mb-4">
                                            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                                <HiOutlineCalendar className="w-4 h-4" />
                                                <span>{new Date(featuredEvent.startDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                                                {featuredEvent.endDate && (
                                                    <span>- {new Date(featuredEvent.endDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                                                )}
                                            </div>
                                            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                                <HiOutlineLocationMarker className="w-4 h-4" />
                                                <span>{featuredEvent.location || (featuredEvent.format === 'virtual' ? 'Virtual Event' : 'TBD')}</span>
                                            </div>
                                        </div>

                                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                                            {featuredEvent.description}
                                        </p>

                                        {/* Key Speakers */}
                                        {featuredEvent.speakers && featuredEvent.speakers.length > 0 && (
                                            <div className="mb-6">
                                                <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Featured Speakers:</p>
                                                <div className="flex flex-wrap gap-3">
                                                    {featuredEvent.speakers.slice(0, 3).map((speaker, idx) => (
                                                        <div key={idx} className="flex items-center gap-2">
                                                            <img src={speaker.avatar} alt={speaker.name} className="w-8 h-8 rounded-full object-cover" />
                                                            <div>
                                                                <p className="text-sm font-medium text-gray-900 dark:text-white">{speaker.name}</p>
                                                                <p className="text-xs text-gray-500">{speaker.title}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        <div className="flex flex-wrap gap-3">
                                            <button
                                                onClick={() => handleRegisterEvent(featuredEvent.id)}
                                                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg ${registeredEvents.includes(featuredEvent.id)
                                                    ? 'bg-green-600 hover:bg-green-700 text-white'
                                                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                                                    }`}
                                            >
                                                <HiOutlineTicket className="w-4 h-4" />
                                                {registeredEvents.includes(featuredEvent.id) ? 'Registered' : 'Register Now'}
                                            </button>
                                            <button
                                                onClick={() => handleSaveEvent(featuredEvent.id)}
                                                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 border ${savedEvents.includes(featuredEvent.id)
                                                    ? 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-300 text-yellow-700 dark:text-yellow-400'
                                                    : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-600'
                                                    }`}
                                            >
                                                <HiOutlineBookmark className="w-4 h-4" />
                                                {savedEvents.includes(featuredEvent.id) ? 'Saved' : 'Save for Later'}
                                            </button>
                                            {featuredEvent.link && (
                                                <a
                                                    href={featuredEvent.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-600 hover:text-blue-600"
                                                >
                                                    <HiOutlineExternalLink className="w-4 h-4" />
                                                    Learn More
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <div className="absolute -inset-4 bg-blue-600/20 rounded-2xl blur-2xl" aria-hidden="true" />
                                        <img
                                            src={featuredEvent.image}
                                            alt={featuredEvent.title}
                                            className="relative rounded-2xl shadow-2xl w-full object-cover"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Upcoming Events Section */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                        <HiOutlineCalendar className="w-6 h-6 text-blue-600" />
                        Upcoming Events
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredEvents.map((event) => {
                            const eventTypeConfig = getEventTypeConfig(event.type);
                            const formatConfig = getFormatConfig(event.format);
                            const isSaved = savedEvents.includes(event.id);
                            const isRegistered = registeredEvents.includes(event.id);

                            return (
                                <div
                                    key={event.id}
                                    className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
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
                                        {event.format === 'virtual' && (
                                            <div className="absolute top-3 right-3">
                                                <span className="px-2 py-1 bg-purple-500 text-white text-xs font-semibold rounded-full">
                                                    Virtual
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    <div className="p-5">
                                        <div className="space-y-2 mb-3">
                                            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                                <HiOutlineCalendar className="w-4 h-4" />
                                                <span>{new Date(event.startDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                                                {event.endDate && (
                                                    <span>- {new Date(event.endDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                                                )}
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                                <HiOutlineLocationMarker className="w-4 h-4" />
                                                <span>{event.location || (event.format === 'virtual' ? 'Virtual Event' : 'TBD')}</span>
                                            </div>
                                        </div>

                                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                                            <Link href={event.link} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
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

                                        {/* Tags */}
                                        {event.tags && event.tags.length > 0 && (
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {event.tags.slice(0, 3).map((tag, idx) => (
                                                    <span key={idx} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full">
                                                        #{tag}
                                                    </span>
                                                ))}
                                            </div>
                                        )}

                                        {/* Footer Actions */}
                                        <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
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
                            );
                        })}
                    </div>
                </div>

                {/* No Results */}
                {filteredEvents.length === 0 && (
                    <div className="text-center py-12">
                        <HiOutlineCalendar className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No events found</h3>
                        <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter criteria</p>
                        <button
                            onClick={() => {
                                setSearchQuery('');
                                setSelectedEventType('all');
                                setSelectedFormat('all');
                                setSelectedRegion('all');
                            }}
                            className="mt-4 text-blue-600 dark:text-blue-400 hover:underline"
                        >
                            Clear all filters
                        </button>
                    </div>
                )}

                {/* View All Events Button */}
                {config?.showViewAll && filteredEvents.length < (config?.events?.length || 0) && (
                    <div className="text-center mt-8">
                        <Link
                            href={config?.viewAllLink || "/events"}
                            className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-xl font-semibold hover:border-blue-600 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
                        >
                            View All Events
                            <HiArrowRight className="w-4 h-4" />
                        </Link>
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

export default IndustryEventsSection1;