// page/frontend/GlobalPresence/LocalSupportSection/LocalSupportSection1.jsx

// React
import { useState } from 'react';

// Icons
import {
    FaCertificate as HiOutlineCertificate,
} from "react-icons/fa";
import {
    HiOutlineSupport,
    HiOutlineGlobe,
    HiOutlineLocationMarker,
    HiOutlineOfficeBuilding,
    HiOutlineUsers,
    HiOutlineClock,
    HiOutlinePhone,
    HiOutlineMail,
    HiOutlineCalendar,
    HiOutlineEye,
    HiOutlineTag,
    HiOutlineFilter,
    HiOutlineSearch,
    HiOutlineShare,
    HiOutlineBookmark,
    HiOutlineExternalLink,
    HiOutlineBell,
    HiOutlineSparkles,
    HiOutlineUserGroup,
    HiOutlineChartBar,
    HiOutlineLightBulb,
    HiOutlineCheckCircle,
    HiArrowRight,
    HiOutlineDocumentText,
    HiOutlinePresentationChartLine,
    HiOutlineStar,
    HiOutlineTrendingUp,
    HiOutlineFire,
    HiOutlineAcademicCap,
    HiOutlineBriefcase,
    HiOutlineCreditCard,
    HiOutlineChartPie,
    HiOutlineTemplate,
    HiOutlineBadgeCheck,
    HiOutlineDesktopComputer,
    HiOutlineDeviceMobile,
    HiOutlineWifi,
    HiOutlineHeart,
    HiOutlineMap,
    HiOutlineChat,
    HiOutlineDesktopComputer as HiOutlineDesktopComputerIcon
} from 'react-icons/hi';
import {
    HiOutlineTrophy,
    HiOutlineBuildingOffice,
    HiOutlineRocketLaunch as HiOutlineRocket,
} from 'react-icons/hi2';
import { MdOutlineHeadphones as HiOutlineHeadphones } from "react-icons/md";

const LocalSupportSection1 = ({ config }) => {
    const [selectedRegion, setSelectedRegion] = useState('all');
    const [selectedLanguage, setSelectedLanguage] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [expandedSupport, setExpandedSupport] = useState(null);
    const [savedContacts, setSavedContacts] = useState([]);

    // Icon mapping function
    const getIcon = (iconName, className = "w-5 h-5") => {
        const icons = {
            support: <HiOutlineSupport className={className} />,
            globe: <HiOutlineGlobe className={className} />,
            location: <HiOutlineLocationMarker className={className} />,
            office: <HiOutlineOfficeBuilding className={className} />,
            users: <HiOutlineUsers className={className} />,
            clock: <HiOutlineClock className={className} />,
            phone: <HiOutlinePhone className={className} />,
            mail: <HiOutlineMail className={className} />,
            calendar: <HiOutlineCalendar className={className} />,
            eye: <HiOutlineEye className={className} />,
            tag: <HiOutlineTag className={className} />,
            filter: <HiOutlineFilter className={className} />,
            search: <HiOutlineSearch className={className} />,
            share: <HiOutlineShare className={className} />,
            bookmark: <HiOutlineBookmark className={className} />,
            external: <HiOutlineExternalLink className={className} />,
            bell: <HiOutlineBell className={className} />,
            sparkles: <HiOutlineSparkles className={className} />,
            rocket: <HiOutlineRocket className={className} />,
            trophy: <HiOutlineTrophy className={className} />,
            usergroup: <HiOutlineUserGroup className={className} />,
            chart: <HiOutlineChartBar className={className} />,
            lightbulb: <HiOutlineLightBulb className={className} />,
            check: <HiOutlineCheckCircle className={className} />,
            arrow: <HiArrowRight className={className} />,
            document: <HiOutlineDocumentText className={className} />,
            presentation: <HiOutlinePresentationChartLine className={className} />,
            star: <HiOutlineStar className={className} />,
            trending: <HiOutlineTrendingUp className={className} />,
            fire: <HiOutlineFire className={className} />,
            academic: <HiOutlineAcademicCap className={className} />,
            briefcase: <HiOutlineBriefcase className={className} />,
            credit: <HiOutlineCreditCard className={className} />,
            pie: <HiOutlineChartPie className={className} />,
            template: <HiOutlineTemplate className={className} />,
            badge: <HiOutlineBadgeCheck className={className} />,
            certificate: <HiOutlineCertificate className={className} />,
            building: <HiOutlineBuildingOffice className={className} />,
            desktop: <HiOutlineDesktopComputer className={className} />,
            mobile: <HiOutlineDeviceMobile className={className} />,
            wifi: <HiOutlineWifi className={className} />,
            heart: <HiOutlineHeart className={className} />,
            map: <HiOutlineMap className={className} />,
            chat: <HiOutlineChat className={className} />,
            headphones: <HiOutlineHeadphones className={className} />,
            desktopIcon: <HiOutlineDesktopComputerIcon className={className} />
        };
        return icons[iconName] || <HiOutlineSupport className={className} />;
    };

    // Get region configuration
    const getRegionConfig = (region) => {
        const configs = {
            'north-america': { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: 'globe', label: 'North America', flag: '🇺🇸', timezone: 'EST/PST' },
            'europe': { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', icon: 'globe', label: 'Europe', flag: '🇪🇺', timezone: 'GMT/CET' },
            'asia-pacific': { color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400', icon: 'globe', label: 'Asia Pacific', flag: '🌏', timezone: 'SGT/JST' },
            'latin-america': { color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400', icon: 'globe', label: 'Latin America', flag: '🌎', timezone: 'BRT' },
            'middle-east': { color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400', icon: 'globe', label: 'Middle East', flag: '🕌', timezone: 'GST' },
            'africa': { color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400', icon: 'globe', label: 'Africa', flag: '🌍', timezone: 'SAST' }
        };
        return configs[region] || configs['north-america'];
    };

    // Get language configuration
    const getLanguageFlag = (language) => {
        const flags = {
            'english': '🇺🇸',
            'spanish': '🇪🇸',
            'french': '🇫🇷',
            'german': '🇩🇪',
            'portuguese': '🇧🇷',
            'mandarin': '🇨🇳',
            'japanese': '🇯🇵',
            'arabic': '🇦🇪'
        };
        return flags[language] || '🌐';
    };

    // Handle save contact
    const handleSaveContact = (contactId) => {
        if (savedContacts.includes(contactId)) {
            setSavedContacts(savedContacts.filter(id => id !== contactId));
        } else {
            setSavedContacts([...savedContacts, contactId]);
        }
    };

    // Filter support contacts
    const getFilteredContacts = () => {
        let contacts = config?.supportContacts || [];

        if (searchQuery) {
            contacts = contacts.filter(c =>
                c.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
                c.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
                c.languages?.some(l => l.toLowerCase().includes(searchQuery.toLowerCase())) ||
                c.services?.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()))
            );
        }

        if (selectedRegion !== 'all') {
            contacts = contacts.filter(c => c.region === selectedRegion);
        }

        if (selectedLanguage !== 'all') {
            contacts = contacts.filter(c => c.languages?.includes(selectedLanguage));
        }

        return contacts;
    };

    const filteredContacts = getFilteredContacts();
    const regions = config?.regions || [
        { id: 'all', label: 'All Regions', icon: 'globe', count: config?.supportContacts?.length || 0 },
        { id: 'north-america', label: 'North America', icon: 'globe' },
        { id: 'europe', label: 'Europe', icon: 'globe' },
        { id: 'asia-pacific', label: 'Asia Pacific', icon: 'globe' },
        { id: 'latin-america', label: 'Latin America', icon: 'globe' },
        { id: 'middle-east', label: 'Middle East', icon: 'globe' },
        { id: 'africa', label: 'Africa', icon: 'globe' }
    ];

    const languages = config?.languages || [
        { id: 'all', label: 'All Languages' },
        { id: 'english', label: 'English' },
        { id: 'spanish', label: 'Spanish' },
        { id: 'french', label: 'French' },
        { id: 'german', label: 'German' },
        { id: 'portuguese', label: 'Portuguese' },
        { id: 'mandarin', label: 'Mandarin' },
        { id: 'japanese', label: 'Japanese' },
        { id: 'arabic', label: 'Arabic' }
    ];

    // Support channels
    const supportChannels = config?.supportChannels || [
        { name: "24/7 Phone Support", icon: "phone", hours: "Always available", number: "+1 (888) 555-0123" },
        { name: "Live Chat", icon: "chat", hours: "24/7", description: "Connect instantly with a support agent" },
        { name: "Email Support", icon: "mail", hours: "Response within 1 hour", email: "support@supplychainpro.com" },
        { name: "Video Consultation", icon: "video", hours: "By appointment", description: "Face-to-face support sessions" }
    ];

    // Stats
    const stats = config?.stats || [
        { value: "24/7", label: "Global Support", icon: "clock" },
        { value: "15+", label: "Languages Supported", icon: "globe" },
        { value: "30min", label: "Avg Response Time", icon: "clock" },
        { value: "98%", label: "Customer Satisfaction", icon: "star" }
    ];

    return (
        <section
            className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
            role="region"
            aria-label="Local Support"
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
                        <HiOutlineSupport className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
                        <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                            {config?.badge || "Local Support"}
                        </span>
                    </div>

                    {/* Section Title */}
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        {config?.title?.prefix || "Global"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Support"}</span> {config?.title?.suffix || "Local Expertise"}
                    </h2>

                    {/* Section Description */}
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        {config?.description || "Get personalized support in your language and time zone. Our local teams are ready to help you succeed, wherever you are."}
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
                        placeholder={config?.searchPlaceholder || "Search by city, country, language, or service..."}
                        className="w-full pl-12 pr-4 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500"
                        aria-label="Search support contacts"
                    />
                </div>

                {/* Region Filters */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {regions.map((region) => (
                        <button
                            key={region.id}
                            onClick={() => setSelectedRegion(region.id)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${selectedRegion === region.id
                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                }`}
                        >
                            {getIcon(region.icon, "w-4 h-4")}
                            {region.label}
                            {region.count !== undefined && (
                                <span className="ml-1 text-xs opacity-80">{region.count}</span>
                            )}
                        </button>
                    ))}
                </div>

                {/* Language Filter */}
                <div className="flex justify-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-full px-4 py-2">
                        <HiOutlineGlobe className="w-4 h-4 text-gray-500" />
                        <select
                            value={selectedLanguage}
                            onChange={(e) => setSelectedLanguage(e.target.value)}
                            className="bg-transparent text-sm font-medium text-gray-700 dark:text-gray-300 focus:outline-none cursor-pointer"
                            aria-label="Filter by language"
                        >
                            {languages.map(lang => (
                                <option key={lang.id} value={lang.id}>{lang.label}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Support Channels Banner */}
                <div className="mb-16 bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700">
                    <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-6">Support Channels</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {supportChannels.map((channel, idx) => (
                            <div key={idx} className="bg-white dark:bg-gray-700 rounded-2xl p-5 text-center shadow-md hover:shadow-lg transition-all duration-300">
                                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-3">
                                    {getIcon(channel.icon, "w-6 h-6 text-blue-600")}
                                </div>
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{channel.name}</h4>
                                <p className="text-xs text-gray-500 mb-2">{channel.hours}</p>
                                {channel.number && <p className="text-sm font-medium text-blue-600">{channel.number}</p>}
                                {channel.email && <p className="text-sm font-medium text-blue-600">{channel.email}</p>}
                                {channel.description && <p className="text-xs text-gray-500">{channel.description}</p>}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Local Support Contacts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {filteredContacts.map((contact) => {
                        const regionConfig = getRegionConfig(contact.region);
                        const isExpanded = expandedSupport === contact.id;
                        const isSaved = savedContacts.includes(contact.id);

                        return (
                            <div
                                key={contact.id}
                                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
                            >
                                <div className="p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className={`w-12 h-12 rounded-xl ${regionConfig.color} flex items-center justify-center text-2xl`}>
                                                {regionConfig.flag}
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                                                    {contact.city}
                                                </h3>
                                                <span className={`text-xs px-2 py-0.5 rounded-full ${regionConfig.color}`}>
                                                    {regionConfig.label}
                                                </span>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => handleSaveContact(contact.id)}
                                            className={`transition-colors ${isSaved ? 'text-yellow-500' : 'text-gray-400 hover:text-yellow-500'}`}
                                        >
                                            <HiOutlineBookmark className="w-4 h-4" />
                                        </button>
                                    </div>

                                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                                        {contact.address}
                                    </p>

                                    <div className="space-y-2 mb-4">
                                        <div className="flex items-center gap-2 text-sm text-gray-500">
                                            <HiOutlinePhone className="w-4 h-4" />
                                            <span>{contact.phone}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-gray-500">
                                            <HiOutlineMail className="w-4 h-4" />
                                            <span>{contact.email}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-gray-500">
                                            <HiOutlineClock className="w-4 h-4" />
                                            <span>{contact.hours}</span>
                                        </div>
                                    </div>

                                    {/* Languages */}
                                    {contact.languages && contact.languages.length > 0 && (
                                        <div className="mb-4">
                                            <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Languages:</p>
                                            <div className="flex flex-wrap gap-1">
                                                {contact.languages.map((lang, idx) => (
                                                    <span key={idx} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full flex items-center gap-1">
                                                        <span>{getLanguageFlag(lang)}</span>
                                                        {lang}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Expandable Services */}
                                    {contact.services && contact.services.length > 0 && (
                                        <div className="mb-4">
                                            <button
                                                onClick={() => setExpandedSupport(isExpanded ? null : contact.id)}
                                                className="flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 font-medium hover:gap-2 transition-all duration-300"
                                            >
                                                {isExpanded ? 'Show less' : `View ${contact.services.length} services`}
                                                <HiArrowRight className="w-4 h-4" />
                                            </button>

                                            {isExpanded && (
                                                <div className="mt-3">
                                                    <ul className="space-y-1">
                                                        {contact.services.map((service, idx) => (
                                                            <li key={idx} className="flex items-start gap-2 text-sm">
                                                                <HiOutlineCheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                                                                <span className="text-gray-700 dark:text-gray-300">{service}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    {/* Team Size */}
                                    {contact.teamSize && (
                                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                                            <HiOutlineUsers className="w-4 h-4" />
                                            <span>{contact.teamSize} local support specialists</span>
                                        </div>
                                    )}

                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                                        <a
                                            href={contact.mapLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm font-semibold hover:gap-2 transition-all duration-300"
                                        >
                                            Get Directions
                                            <HiOutlineExternalLink className="w-4 h-4" />
                                        </a>
                                        <a
                                            href={`mailto:${contact.email}`}
                                            className="text-gray-400 hover:text-blue-600 transition-colors"
                                        >
                                            <HiOutlineMail className="w-4 h-4" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* No Results */}
                {filteredContacts.length === 0 && (
                    <div className="text-center py-12">
                        <HiOutlineSupport className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No support contacts found</h3>
                        <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter criteria</p>
                        <button
                            onClick={() => {
                                setSearchQuery('');
                                setSelectedRegion('all');
                                setSelectedLanguage('all');
                            }}
                            className="mt-4 text-blue-600 dark:text-blue-400 hover:underline"
                        >
                            Clear all filters
                        </button>
                    </div>
                )}

                {/* 24/7 Global Support Banner */}
                <div className="mt-12 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 text-white text-center">
                    <HiOutlineHeadphones className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                        {config?.supportTitle || "Need Immediate Assistance?"}
                    </h3>
                    <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                        {config?.supportDescription || "Our global support team is available 24/7 to help you with any questions or issues. Choose your preferred contact method."}
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <a
                            href="tel:+18885550123"
                            className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300"
                        >
                            <HiOutlinePhone className="w-4 h-4" />
                            +1 (888) 555-0123
                        </a>
                        <a
                            href="/contact"
                            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300"
                        >
                            <HiOutlineMail className="w-4 h-4" />
                            Contact Support
                        </a>
                        <button
                            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300"
                        >
                            <HiOutlineChat className="w-4 h-4" />
                            Live Chat
                        </button>
                    </div>
                </div>

                {/* Newsletter Subscription */}
                {config?.showNewsletter && (
                    <div className="mt-12 bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 text-center">
                        <HiOutlineBell className="w-12 h-12 mx-auto text-blue-600 dark:text-blue-400 mb-4" />
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            {config?.newsletter?.title || "Support Updates"}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                            {config?.newsletter?.description || "Subscribe to receive updates about new support resources, office hours, and service enhancements."}
                        </p>
                        <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="flex-1 px-6 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                aria-label="Email for support updates"
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
      `}</style>
        </section>
    );
};

export default LocalSupportSection1;