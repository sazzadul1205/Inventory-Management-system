// page/frontend/GlobalPresence/LanguageSupportSection/LanguageSupportSection2.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useCallback } from 'react';

// Icons
import {
    FaCertificate as HiOutlineCertificate,
} from "react-icons/fa";
import {
    HiOutlineGlobe,
    HiOutlineTranslate,
    HiOutlineUsers,
    HiOutlineStar,
    HiOutlineClock,
    HiOutlinePhone,
    HiOutlineMail,
    HiOutlineChat,
    HiOutlineDocumentText,
    HiOutlineAcademicCap,
    HiOutlineCheckCircle,
    HiArrowRight,
    HiOutlineLocationMarker,
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
    HiOutlineFire,
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
    HiOutlineVolumeUp,
    HiOutlineMicrophone,
    HiOutlineMenu,
    HiOutlineViewGrid,
    HiOutlineViewList,
    HiOutlineX,
    HiOutlineChevronDown,
    HiOutlineChevronUp,
    HiOutlineChevronLeft,
    HiOutlineChevronRight
} from 'react-icons/hi';
import {
    HiOutlineTrophy,
    HiOutlineBuildingOffice,
    HiOutlineRocketLaunch as HiOutlineRocket,
} from 'react-icons/hi2';
import {
    MdOutlineHeadphones as HiOutlineHeadphones,
} from "react-icons/md";

const LanguageSupportSection2 = ({ config }) => {
    const [selectedLanguage, setSelectedLanguage] = useState('all');
    const [selectedRegion, setSelectedRegion] = useState('all');
    const [selectedSupportLevel, setSelectedSupportLevel] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [viewMode, setViewMode] = useState(config?.defaultViewMode || 'grid');
    const [expandedLanguage, setExpandedLanguage] = useState(null);
    const [favoriteLanguages, setFavoriteLanguages] = useState([]);
    const [showFilters, setShowFilters] = useState(false);
    const [sortBy, setSortBy] = useState('name'); // name, speakers, responseTime

    // Icon mapping function
    const getIcon = (iconName, className = "w-5 h-5") => {
        const icons = {
            globe: <HiOutlineGlobe className={className} />,
            translate: <HiOutlineTranslate className={className} />,
            users: <HiOutlineUsers className={className} />,
            star: <HiOutlineStar className={className} />,
            clock: <HiOutlineClock className={className} />,
            phone: <HiOutlinePhone className={className} />,
            mail: <HiOutlineMail className={className} />,
            chat: <HiOutlineChat className={className} />,
            document: <HiOutlineDocumentText className={className} />,
            academic: <HiOutlineAcademicCap className={className} />,
            check: <HiOutlineCheckCircle className={className} />,
            arrow: <HiArrowRight className={className} />,
            location: <HiOutlineLocationMarker className={className} />,
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
            fire: <HiOutlineFire className={className} />,
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
            headphones: <HiOutlineHeadphones className={className} />,
            volume: <HiOutlineVolumeUp className={className} />,
            microphone: <HiOutlineMicrophone className={className} />,
            menu: <HiOutlineMenu className={className} />,
            grid: <HiOutlineViewGrid className={className} />,
            list: <HiOutlineViewList className={className} />,
            x: <HiOutlineX className={className} />,
            'chevron-down': <HiOutlineChevronDown className={className} />,
            'chevron-up': <HiOutlineChevronUp className={className} />,
            'chevron-left': <HiOutlineChevronLeft className={className} />,
            'chevron-right': <HiOutlineChevronRight className={className} />
        };
        return icons[iconName] || <HiOutlineTranslate className={className} />;
    };

    // Get language configuration
    const getLanguageConfig = (language) => {
        const configs = {
            'english': { color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: 'globe', label: 'English', flag: '🇺🇸', code: 'en', nativeName: 'English', speakers: '1.5B+', gradient: 'from-blue-500 to-blue-600' },
            'spanish': { color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', icon: 'globe', label: 'Spanish', flag: '🇪🇸', code: 'es', nativeName: 'Español', speakers: '500M+', gradient: 'from-purple-500 to-purple-600' },
            'french': { color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400', icon: 'globe', label: 'French', flag: '🇫🇷', code: 'fr', nativeName: 'Français', speakers: '300M+', gradient: 'from-green-500 to-green-600' },
            'german': { color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400', icon: 'globe', label: 'German', flag: '🇩🇪', code: 'de', nativeName: 'Deutsch', speakers: '200M+', gradient: 'from-orange-500 to-orange-600' },
            'mandarin': { color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400', icon: 'globe', label: 'Mandarin', flag: '🇨🇳', code: 'zh', nativeName: '中文', speakers: '1.2B+', gradient: 'from-red-500 to-red-600' },
            'japanese': { color: 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400', icon: 'globe', label: 'Japanese', flag: '🇯🇵', code: 'ja', nativeName: '日本語', speakers: '125M+', gradient: 'from-pink-500 to-pink-600' },
            'arabic': { color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400', icon: 'globe', label: 'Arabic', flag: '🇦🇪', code: 'ar', nativeName: 'العربية', speakers: '400M+', gradient: 'from-emerald-500 to-emerald-600' },
            'portuguese': { color: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400', icon: 'globe', label: 'Portuguese', flag: '🇧🇷', code: 'pt', nativeName: 'Português', speakers: '250M+', gradient: 'from-amber-500 to-amber-600' }
        };
        return configs[language] || { color: 'bg-gray-100 text-gray-700', icon: 'globe', label: language, flag: '🌐', nativeName: language, speakers: 'N/A' };
    };

    // Get region configuration
    const getRegionConfig = (region) => {
        const configs = {
            'north-america': { color: 'bg-blue-100 text-blue-700', label: 'North America', flag: '🇺🇸', borderColor: 'border-blue-200 dark:border-blue-800' },
            'europe': { color: 'bg-purple-100 text-purple-700', label: 'Europe', flag: '🇪🇺', borderColor: 'border-purple-200 dark:border-purple-800' },
            'asia-pacific': { color: 'bg-green-100 text-green-700', label: 'Asia Pacific', flag: '🌏', borderColor: 'border-green-200 dark:border-green-800' },
            'latin-america': { color: 'bg-orange-100 text-orange-700', label: 'Latin America', flag: '🌎', borderColor: 'border-orange-200 dark:border-orange-800' },
            'middle-east': { color: 'bg-red-100 text-red-700', label: 'Middle East', flag: '🕌', borderColor: 'border-red-200 dark:border-red-800' },
            'africa': { color: 'bg-emerald-100 text-emerald-700', label: 'Africa', flag: '🌍', borderColor: 'border-emerald-200 dark:border-emerald-800' }
        };
        return configs[region] || { color: 'bg-gray-100 text-gray-700', label: region, flag: '🌐' };
    };

    // Handle favorite language
    const handleFavoriteLanguage = (languageId) => {
        setFavoriteLanguages(prev =>
            prev.includes(languageId)
                ? prev.filter(id => id !== languageId)
                : [...prev, languageId]
        );
    };

    // Filter languages
    const getFilteredLanguages = useCallback(() => {
        let languages = config?.languages || [];

        if (searchQuery) {
            languages = languages.filter(l =>
                l.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                l.nativeName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                l.regions?.some(r => r.toLowerCase().includes(searchQuery.toLowerCase()))
            );
        }

        if (selectedLanguage !== 'all') {
            languages = languages.filter(l => l.id === selectedLanguage);
        }

        if (selectedRegion !== 'all') {
            languages = languages.filter(l => l.regions?.includes(selectedRegion));
        }

        if (selectedSupportLevel !== 'all') {
            languages = languages.filter(l => l.supportLevel === selectedSupportLevel);
        }

        if (sortBy === 'name') {
            languages = [...languages].sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortBy === 'speakers') {
            languages = [...languages].sort((a, b) => {
                const aNum = parseInt(a.speakers) || 0;
                const bNum = parseInt(b.speakers) || 0;
                return bNum - aNum;
            });
        } else if (sortBy === 'responseTime') {
            languages = [...languages].sort((a, b) => {
                const aTime = parseInt(a.responseTime) || 60;
                const bTime = parseInt(b.responseTime) || 60;
                return aTime - bTime;
            });
        }

        return languages;
    }, [config?.languages, searchQuery, selectedLanguage, selectedRegion, selectedSupportLevel, sortBy]);

    const filteredLanguages = getFilteredLanguages();
    const languagesList = config?.languages || [
        { id: 'english', name: 'English', nativeName: 'English', flag: '🇺🇸', code: 'en', regions: ['north-america', 'europe', 'asia-pacific', 'africa'], supportLevel: 'Full', responseTime: 30, teamSize: 50, speakers: '1.5B', isFeatured: true },
        { id: 'spanish', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸', code: 'es', regions: ['europe', 'latin-america'], supportLevel: 'Full', responseTime: 35, teamSize: 35, speakers: '500M', isFeatured: true },
        { id: 'french', name: 'French', nativeName: 'Français', flag: '🇫🇷', code: 'fr', regions: ['europe', 'africa'], supportLevel: 'Full', responseTime: 40, teamSize: 30, speakers: '300M' },
        { id: 'german', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪', code: 'de', regions: ['europe'], supportLevel: 'Full', responseTime: 35, teamSize: 25, speakers: '200M' },
        { id: 'mandarin', name: 'Mandarin', nativeName: '中文', flag: '🇨🇳', code: 'zh', regions: ['asia-pacific'], supportLevel: 'Full', responseTime: 90, teamSize: 40, speakers: '1.2B' },
        { id: 'japanese', name: 'Japanese', nativeName: '日本語', flag: '🇯🇵', code: 'ja', regions: ['asia-pacific'], supportLevel: 'Full', responseTime: 45, teamSize: 20, speakers: '125M' },
        { id: 'arabic', name: 'Arabic', nativeName: 'العربية', flag: '🇦🇪', code: 'ar', regions: ['middle-east', 'africa'], supportLevel: 'Full', responseTime: 90, teamSize: 25, speakers: '400M' },
        { id: 'portuguese', name: 'Portuguese', nativeName: 'Português', flag: '🇧🇷', code: 'pt', regions: ['europe', 'latin-america'], supportLevel: 'Full', responseTime: 40, teamSize: 20, speakers: '250M' }
    ];

    const regions = config?.regions || [
        { id: 'all', label: 'All Regions', icon: 'globe', count: languagesList.length },
        { id: 'north-america', label: 'North America', icon: 'globe' },
        { id: 'europe', label: 'Europe', icon: 'globe' },
        { id: 'asia-pacific', label: 'Asia Pacific', icon: 'globe' },
        { id: 'latin-america', label: 'Latin America', icon: 'globe' },
        { id: 'middle-east', label: 'Middle East', icon: 'globe' },
        { id: 'africa', label: 'Africa', icon: 'globe' }
    ];

    const supportLevels = [
        { id: 'all', label: 'All Levels' },
        { id: 'Full', label: 'Full Support' },
        { id: 'Limited', label: 'Limited Support' },
        { id: 'Self-Service', label: 'Self-Service' }
    ];

    // Stats
    const stats = config?.stats || [
        { value: "15+", label: "Languages Supported", icon: "translate", trend: "+3", trendUp: true },
        { value: "24/7", label: "Global Support", icon: "clock", trend: "Always", trendUp: true },
        { value: "35min", label: "Avg Response Time", icon: "clock", trend: "-5min", trendUp: true },
        { value: "98%", label: "Customer Satisfaction", icon: "star", trend: "+2%", trendUp: true }
    ];

    // Top rated languages (by response time)
    const topLanguages = [...languagesList]
        .sort((a, b) => (a.responseTime || 60) - (b.responseTime || 60))
        .slice(0, 4);

    // Active filters count
    const activeFiltersCount = [selectedLanguage !== 'all', selectedRegion !== 'all', selectedSupportLevel !== 'all', searchQuery !== ''].filter(Boolean).length;

    // Clear all filters
    const clearAllFilters = () => {
        setSearchQuery('');
        setSelectedLanguage('all');
        setSelectedRegion('all');
        setSelectedSupportLevel('all');
        setSortBy('name');
    };

    return (
        <section
            className="relative py-24 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
            role="region"
            aria-label="Language Support Directory"
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
                            <HiOutlineTranslate className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                                {config?.badge || "Language Support"}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            {config?.title?.prefix || "Support in Your"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Language"}</span>
                        </h1>

                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                            {config?.description || "Get personalized support in your preferred language. Our multilingual team is ready to assist you with native-level fluency."}
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
                            placeholder={config?.searchPlaceholder || "Search by language name, native name, or region..."}
                            className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            aria-label="Search languages"
                        />
                    </div>

                    <div className="flex gap-2">
                        {/* Sort Dropdown */}
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="name">Sort by Name</option>
                            <option value="speakers">Sort by Speakers</option>
                            <option value="responseTime">Sort by Response Time</option>
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
                            {/* Language Filter */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Language</label>
                                <select
                                    value={selectedLanguage}
                                    onChange={(e) => setSelectedLanguage(e.target.value)}
                                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="all">All Languages</option>
                                    {languagesList.map(lang => (
                                        <option key={lang.id} value={lang.id}>{lang.name}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Region Filter */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Region</label>
                                <select
                                    value={selectedRegion}
                                    onChange={(e) => setSelectedRegion(e.target.value)}
                                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    {regions.map(region => (
                                        <option key={region.id} value={region.id}>{region.label}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Support Level Filter */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Support Level</label>
                                <select
                                    value={selectedSupportLevel}
                                    onChange={(e) => setSelectedSupportLevel(e.target.value)}
                                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    {supportLevels.map(level => (
                                        <option key={level.id} value={level.id}>{level.label}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Sort Option */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Sort By</label>
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="name">Language Name</option>
                                    <option value="speakers">Number of Speakers</option>
                                    <option value="responseTime">Response Time</option>
                                </select>
                            </div>
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

                {/* Region Pills (Quick Filters) */}
                <div className="flex flex-wrap gap-2 mb-8 overflow-x-auto pb-2">
                    {regions.map((region) => (
                        <button
                            key={region.id}
                            onClick={() => setSelectedRegion(region.id)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${selectedRegion === region.id
                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                                }`}
                        >
                            {getIcon(region.icon, "w-4 h-4")}
                            {region.label}
                            {region.count !== undefined && (
                                <span className={`ml-1 px-2 py-0.5 rounded-full text-xs ${selectedRegion === region.id
                                    ? 'bg-white/20 text-white'
                                    : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                                    }`}>
                                    {region.count}
                                </span>
                            )}
                        </button>
                    ))}
                </div>

                {/* Top Languages Row (Fastest Response) */}
                {topLanguages.length > 0 && (
                    <div className="mb-12">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                            <HiOutlineStar className="w-5 h-5 text-yellow-500" />
                            Fastest Response Times
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {topLanguages.map((language) => {
                                const langConfig = getLanguageConfig(language.id);
                                return (
                                    <Link
                                        key={language.id}
                                        href={`/support/${language.code}`}
                                        className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 group"
                                    >
                                        <div className={`w-10 h-10 rounded-full bg-linear-to-r ${langConfig.gradient} flex items-center justify-center text-xl`}>
                                            {language.flag}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2">
                                                <h3 className="font-semibold text-gray-900 dark:text-white text-sm">{language.name}</h3>
                                                <span className="text-xs text-green-600">{language.responseTime} min</span>
                                            </div>
                                            <p className="text-xs text-gray-500">{language.nativeName}</p>
                                        </div>
                                        <HiArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* Support Level Pills */}
                <div className="flex flex-wrap gap-2 mb-12">
                    {supportLevels.filter(l => l.id !== 'all').map((level) => (
                        <button
                            key={level.id}
                            onClick={() => setSelectedSupportLevel(selectedSupportLevel === level.id ? 'all' : level.id)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedSupportLevel === level.id
                                ? 'bg-blue-600 text-white'
                                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                                }`}
                        >
                            {level.label}
                        </button>
                    ))}
                </div>

                {/* Results Count */}
                <div className="mb-6">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Showing <span className="font-semibold text-gray-900 dark:text-white">{filteredLanguages.length}</span> languages
                        {searchQuery && ` matching "${searchQuery}"`}
                    </p>
                </div>

                {/* Languages Grid/List View */}
                <div className={`grid gap-6 mb-12 ${viewMode === 'grid'
                    ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                    : 'grid-cols-1'
                    }`}>
                    {filteredLanguages.map((language) => {
                        const langConfig = getLanguageConfig(language.id);
                        const isExpanded = expandedLanguage === language.id;
                        const isFavorite = favoriteLanguages.includes(language.id);

                        return (
                            <div
                                key={language.id}
                                className={`group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 ${viewMode === 'list' ? 'flex flex-col md:flex-row' : ''
                                    }`}
                            >
                                {/* Language Flag Area */}
                                <div className={`relative overflow-hidden ${viewMode === 'list' ? 'md:w-56 md:shrink-0' : ''}`}>
                                    <div className={`h-32 ${viewMode === 'list' ? 'h-full' : ''} bg-linear-to-br ${langConfig.gradient} flex items-center justify-center`}>
                                        <span className="text-5xl">{language.flag}</span>
                                    </div>
                                    {language.isFeatured && (
                                        <div className="absolute top-3 right-3">
                                            <span className="flex items-center gap-1 px-2 py-1 bg-yellow-500 text-white text-xs font-semibold rounded-full">
                                                <HiOutlineStar className="w-3 h-3" />
                                                Featured
                                            </span>
                                        </div>
                                    )}
                                    <div className="absolute bottom-3 left-3">
                                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${langConfig.color}`}>
                                            {langConfig.label}
                                        </span>
                                    </div>
                                </div>

                                <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                                    <div className="flex items-start justify-between mb-2">
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                                {language.name}
                                            </h3>
                                            <p className="text-sm text-gray-500">{language.nativeName}</p>
                                        </div>
                                        <button
                                            onClick={() => handleFavoriteLanguage(language.id)}
                                            className={`transition-colors ${isFavorite ? 'text-red-500' : 'text-gray-400 hover:text-red-500'}`}
                                        >
                                            <HiOutlineHeart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
                                        </button>
                                    </div>

                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="text-xs text-gray-500">{langConfig.speakers} speakers</span>
                                        <span className="text-xs text-gray-400">•</span>
                                        <span className="text-xs text-green-600">{language.responseTime} min avg response</span>
                                    </div>

                                    <div className="flex flex-wrap gap-1 mb-3">
                                        {language.regions?.map((region, idx) => {
                                            const regConfig = getRegionConfig(region);
                                            return (
                                                <span key={idx} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full flex items-center gap-1">
                                                    <span>{regConfig.flag}</span>
                                                    {regConfig.label}
                                                </span>
                                            );
                                        })}
                                    </div>

                                    <div className="space-y-2 mb-4">
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-gray-500">Support Team:</span>
                                            <span className="font-medium text-blue-600">{language.teamSize}+ specialists</span>
                                        </div>
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-gray-500">Support Level:</span>
                                            <span className="font-medium text-green-600">{language.supportLevel}</span>
                                        </div>
                                    </div>

                                    {/* Support Channels Preview */}
                                    {language.supportChannels && (
                                        <div className="mb-4">
                                            <button
                                                onClick={() => setExpandedLanguage(isExpanded ? null : language.id)}
                                                className="flex items-center gap-1 text-sm text-blue-600 font-medium"
                                            >
                                                {isExpanded ? 'Show less' : 'View support channels'}
                                                <HiOutlineChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                                            </button>

                                            {isExpanded && (
                                                <div className="mt-3 space-y-2">
                                                    {language.supportChannels.map((channel, idx) => (
                                                        <div key={idx} className="flex items-center gap-2 text-sm">
                                                            {channel.icon === 'phone' && <HiOutlinePhone className="w-4 h-4 text-green-500" />}
                                                            {channel.icon === 'chat' && <HiOutlineChat className="w-4 h-4 text-blue-500" />}
                                                            {channel.icon === 'mail' && <HiOutlineMail className="w-4 h-4 text-purple-500" />}
                                                            <span className="text-gray-600 dark:text-gray-400">{channel.name}</span>
                                                            <span className="text-xs text-gray-400">{channel.details}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                                        <Link
                                            href={`/support/${language.code}`}
                                            className="inline-flex items-center gap-1 text-blue-600 text-sm font-semibold hover:gap-2 transition-all duration-300"
                                        >
                                            Get Support
                                            <HiArrowRight className="w-4 h-4" />
                                        </Link>
                                        {language.docsLink && (
                                            <a
                                                href={language.docsLink}
                                                className="text-gray-400 hover:text-blue-600 transition-colors"
                                            >
                                                <HiOutlineDocumentText className="w-4 h-4" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* No Results */}
                {filteredLanguages.length === 0 && (
                    <div className="text-center py-12">
                        <HiOutlineTranslate className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No languages found</h3>
                        <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter criteria</p>
                        <button
                            onClick={clearAllFilters}
                            className="mt-4 text-blue-600 dark:text-blue-400 hover:underline"
                        >
                            Clear all filters
                        </button>
                    </div>
                )}

                {/* Translation Services Banner */}
                <div className="mt-12 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 text-white">
                    <div className="flex flex-wrap items-center justify-between gap-6">
                        <div>
                            <h3 className="text-2xl font-bold mb-2">Need Translation Services?</h3>
                            <p className="text-blue-100 max-w-2xl">
                                We offer professional translation services for documentation, training materials, and support resources in all supported languages.
                            </p>
                        </div>
                        <Link
                            href="/translation-services"
                            className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300"
                        >
                            Learn More
                            <HiArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>

                {/* Newsletter Subscription */}
                {config?.showNewsletter && (
                    <div className="mt-8 bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 text-center">
                        <HiOutlineBell className="w-12 h-12 mx-auto text-blue-600 dark:text-blue-400 mb-4" />
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            {config?.newsletter?.title || "Language Support Updates"}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                            {config?.newsletter?.description || "Subscribe to receive updates about new language support, translated resources, and localization news."}
                        </p>
                        <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="flex-1 px-6 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                aria-label="Email for language support updates"
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
      `}</style>
        </section>
    );
};

export default LanguageSupportSection2;